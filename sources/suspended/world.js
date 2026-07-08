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
  "SE",
  "SW",
  "NE",
  "NW"
 ],
 "rooms": {
  "CPU-ROOM": {
   "name": "CPU-ROOM",
   "file": "rooms.zil",
   "line": 8,
   "endLine": 29,
   "desc": "Central Chamber",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CHAMBER",
    "GLOBE"
   ],
   "adjectives": [
    "CENTRAL"
   ],
   "action": "CPU-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIRING"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE \"I'm in a large room which looks like the inside of a globe. The walls seem sculptured with wiring, swirling around the room's perimeter, leading into a tall column. The column itself has a door on its face. Doorways lead to the west, south, east and northeast.\" \"Sonar indicates a large, spherical open area with a hollow column running from floor to ceiling. The column reflects sonar evenly indicating no distinguishing external characteristics.\" \"All around me charges flow, shaped by the very nature of this room. The electrons are being channeled into an electrical column, central to this environment.\" \"A small humming can be detected from a column which extends from floor to ceiling.\" \"It hops and skips and leaves a bit, and can't decide if it should quit. It tells the world what it should know, but doesn't know when it's been shown.\" \"The CLC indicates this area is tagged as the Central Processing Unit due to an object, the CPU, which sits in the center of the room.\">"
    ],
    "STATION": [
     "CPU-ROOM"
    ],
    "LINE": [
     "1"
    ],
    "CORRIDOR": [
     "8"
    ]
   },
   "exits": [
    {
     "to": "WEATHER-BANKS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SERVO-SYSTEMS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "RTD-BANKS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CORRIDOR-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [
    "HOME",
    "SENSA",
    "POET"
   ],
   "source": "<ROOM CPU-ROOM\n      (IN ROOMS)\n      (DESC \"Central Chamber\")\n      (FLAGS RLANDBIT ONBIT)\n      (SYNONYM CHAMBER GLOBE)\n      (ADJECTIVE CENTRAL)\n      (WEST TO WEATHER-BANKS)\n      (EAST TO SERVO-SYSTEMS)\n      (SOUTH TO RTD-BANKS)\n      (NE TO CORRIDOR-1)\n      (GLOBAL WIRING)\n      (ROOMDESCS <PLTABLE\n\"I'm in a large room which looks like the inside of a globe. The walls seem sculptured with wiring, swirling around the room's perimeter, leading into a tall column. The column itself has a door on its face. Doorways lead to the west, south, east and northeast.\" \n\"Sonar indicates a large, spherical open area with a hollow column running from floor to ceiling. The column reflects sonar evenly indicating no distinguishing external characteristics.\"\n\"All around me charges flow, shaped by the very nature of this room. The electrons are being channeled into an electrical column, central to this environment.\"\n\"A small humming can be detected from a column which extends from floor to ceiling.\"\n\"It hops and skips and leaves a bit, and can't decide if it should quit. It tells the world what it should know, but doesn't know when it's been shown.\"\n\"The CLC indicates this area is tagged as the Central Processing Unit due to an object, the CPU, which sits in the center of the room.\">)\n      (ACTION CPU-FCN)\n      (STATION CPU-ROOM)\n      (LINE 1)\n      (CORRIDOR 8)>",
   "referencedBy": [
    "CRETIN",
    "MOVE-RBT",
    "MOVE-RBT?",
    "GO",
    "I-CAR-WAIT",
    "I-KILL",
    "IRIS-ALLOWED?"
   ]
  },
  "WEATHER-BANKS": {
   "name": "WEATHER-BANKS",
   "file": "rooms.zil",
   "line": 41,
   "endLine": 60,
   "desc": "Weather Monitors",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "MONITO"
   ],
   "adjectives": [
    "WEATHE"
   ],
   "action": "WEATHER-BANKS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MONITOR"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE \"All around me I see meters indicating the state of the weather conditions on all three planet-side continents.\" \"This large area has smooth walls.\" \"My receptors detect huge electrical flow through the walls and meters all around me.\" 0 \"They puff and billow and strain a bit, roar then ebb with time.\" \"I detect communication between devices here and the CLC.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "WEATHER-BANKS"
    ]
   },
   "exits": [
    {
     "to": "CPU-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SUPPLIES-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SUPPLIES-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "IRIS"
   ],
   "source": "<ROOM WEATHER-BANKS\n      (IN ROOMS)\n      (DESC \"Weather Monitors\")\n      (FLAGS RLANDBIT ONBIT)\n      (SYNONYM MONITO)\n      (ADJECTIVE WEATHE)\n      (EAST TO CPU-ROOM)\n      (WEST TO SUPPLIES-NORTH)\n      (SOUTH TO SUPPLIES-SOUTH)\n      (ACTION WEATHER-BANKS-FCN)\n      (ROOMDESCS <PLTABLE\n\"All around me I see meters indicating the state of the weather conditions on all three planet-side continents.\"\n\"This large area has smooth walls.\"\n\"My receptors detect huge electrical flow through the walls and meters all around me.\"\n0\n\"They puff and billow and strain a bit, roar then ebb with time.\"\n\"I detect communication between devices here and the CLC.\">)\n      (LINE 1)\n      (STATION WEATHER-BANKS)\n      (GLOBAL MONITOR)>",
   "referencedBy": [
    "WEATHER-ROBOTS",
    "IRIS-ALLOWED?",
    "V-EXAMINE",
    "V-READ"
   ]
  },
  "SUPPLIES-SOUTH": {
   "name": "SUPPLIES-SOUTH",
   "file": "rooms.zil",
   "line": 149,
   "endLine": 166,
   "desc": "Sub Supply Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "SUPPLY"
   ],
   "adjectives": [
    "SUB"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DEBRIS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE \"I am in a sub-station of the supply rooms. The room is small, with debris littering the floor.\" \"Sonar detects totally irregular patterns on the walls as if shelving had been mounted there.\" \"The air here is still. No vibrational activity.\" 0 \"It burns and wields tremendous light and makes our joints delight its might.\" 0>"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "WEATHER-BANKS"
    ]
   },
   "exits": [
    {
     "to": "WEATHER-BANKS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SUPPLIES-MID",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "WEDGE",
    "SMASHED-BOX",
    "BROKEN-SHELF"
   ],
   "source": "<ROOM SUPPLIES-SOUTH\n       (IN ROOMS)\n       (DESC \"Sub Supply Room\")\n       (FLAGS ONBIT RLANDBIT)\n       (SYNONYM SUPPLY)\n       (ADJECTIVE SUB)\n       (NORTH TO WEATHER-BANKS)\n       (WEST TO SUPPLIES-MID)\n       (GLOBAL DEBRIS)\n       (ROOMDESCS <PLTABLE\n\"I am in a sub-station of the supply rooms. The room is small, with debris littering the floor.\"\n\"Sonar detects totally irregular patterns on the walls as if shelving had been mounted there.\"\n\"The air here is still. No vibrational activity.\"\n0\n\"It burns and wields tremendous light and makes our joints delight its might.\"\n0>)\n       (LINE 1)\n       (STATION WEATHER-BANKS)>",
   "referencedBy": [
    "IRIS-ALLOWED?"
   ]
  },
  "CORRIDOR-1": {
   "name": "CORRIDOR-1",
   "file": "rooms.zil",
   "line": 168,
   "endLine": 186,
   "desc": "Angling Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CORRID"
   ],
   "adjectives": [
    "ANGLING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRCON"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE \"This is a long, angling corridor which continues to the northeast.\" \"I am in a narrow, long, straight tunnel with smooth walls.\" 0 \"The steady hum of the air conditioning seems to drown out subtler noises.\" \"Through which it all flows, we are as one.\" \"I can feel the emanations of my parent machine, the CLC, nearby.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "CORRIDOR-1"
    ],
    "CORRIDOR": [
     "8"
    ]
   },
   "exits": [
    {
     "to": "CPU-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "CORRIDOR-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM CORRIDOR-1\n      (IN ROOMS)\n      (DESC \"Angling Corridor\")\n      (FLAGS RLANDBIT ONBIT)\n      (SYNONYM CORRID)\n      (ADJECTIVE ANGLING)\n      (SW TO CPU-ROOM)\n      (NE TO CORRIDOR-2)\n      (ROOMDESCS <PLTABLE\n\"This is a long, angling corridor which continues to the northeast.\"\n\"I am in a narrow, long, straight tunnel with smooth walls.\"\n0\n\"The steady hum of the air conditioning seems to drown out subtler noises.\"\n\"Through which it all flows, we are as one.\"\n\"I can feel the emanations of my parent machine, the CLC, nearby.\">)\n      (LINE 1)\n      (STATION CORRIDOR-1)\n      (CORRIDOR 8)\n      (GLOBAL AIRCON)>",
   "referencedBy": [
    "MOVE-RBT",
    "MOVE-RBT?"
   ]
  },
  "SUPPLIES-MID": {
   "name": "SUPPLIES-MID",
   "file": "rooms.zil",
   "line": 188,
   "endLine": 203,
   "desc": "Middle Supply Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SUPPLY"
   ],
   "adjectives": [
    "MIDDLE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DEBRIS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE \"This is the middle of an L-shaped supply room. Scattered about on the floor\nare all kinds of debris. Nothing looks salvageable.\" \"I keep bumping into all sorts of junk on the floor, none of which seems to\nbe intact.\" 0 0 \"From junk we spring, to junk we go.\" 0>"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "SUPPLIES-MID"
    ]
   },
   "exits": [
    {
     "to": "SUPPLIES-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SUPPLIES-SOUTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "BASKET",
    "SURGERY-HAND",
    "HERRINGBONE"
   ],
   "source": "<ROOM SUPPLIES-MID\n      (IN ROOMS)\n      (DESC \"Middle Supply Room\")\n      (SYNONYM SUPPLY)\n      (ADJECTIVE MIDDLE)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL DEBRIS)\n      (NORTH TO SUPPLIES-NORTH)\n      (EAST TO SUPPLIES-SOUTH)\n      (ROOMDESCS <PLTABLE\n\"This is the middle of an L-shaped supply room. Scattered about on the floor\nare all kinds of debris. Nothing looks salvageable.\"\n\"I keep bumping into all sorts of junk on the floor, none of which seems to\nbe intact.\" 0 0 \"From junk we spring, to junk we go.\" 0 >)\n      (LINE 1)\n      (STATION SUPPLIES-MID)>",
   "referencedBy": [
    "IRIS-ALLOWED?"
   ]
  },
  "SUPPLIES-NORTH": {
   "name": "SUPPLIES-NORTH",
   "file": "rooms.zil",
   "line": 205,
   "endLine": 217,
   "desc": "Main Supply Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SUPPLY"
   ],
   "adjectives": [
    "MAIN"
   ],
   "action": "SUPPLIES-N-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DEBRIS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE \"foo\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "SUPPLIES-NORTH"
    ]
   },
   "exits": [
    {
     "to": "WEATHER-BANKS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SUPPLIES-MID",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "MACHINE",
    "ORANGE-BUTTON",
    "SOCKET1",
    "SOCKET2"
   ],
   "source": "<ROOM SUPPLIES-NORTH\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Main Supply Room\")\n      (SYNONYM SUPPLY)\n      (ADJECTIVE MAIN)\n      (ROOMDESCS <PLTABLE \"foo\">)\n      (EAST TO WEATHER-BANKS)\n      (SOUTH TO SUPPLIES-MID)\n      (ACTION SUPPLIES-N-FCN)\n      (GLOBAL DEBRIS)\n      (LINE 1)\n      (STATION SUPPLIES-NORTH)>",
   "referencedBy": [
    "IRIS-ALLOWED?"
   ]
  },
  "CORRIDOR-2": {
   "name": "CORRIDOR-2",
   "file": "rooms.zil",
   "line": 313,
   "endLine": 334,
   "desc": "Bending Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CORRID"
   ],
   "adjectives": [
    "BENDING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I've approached a bend in the tube. One section continues to the east, while\nthe other section goes to the southwest.\" \"Vibrational activity picked up, though intensity too slight to determine\nlocational fix at this point.\" \"With audio sensors on full power I can detect some 'background' noise coming\nfrom the east.\" \"Into all lives the flow proceeds, weaving its web of mystery like that of an\nenigmatic spider.\" \"My source signals become stronger and clearer to the east.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "CORRIDOR-2"
    ],
    "CORRIDOR": [
     "24"
    ]
   },
   "exits": [
    {
     "to": "CORRIDOR-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "HALLWAY-JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM CORRIDOR-2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Bending Corridor\")\n      (SYNONYM CORRID)\n      (ADJECTIVE BENDING)\n      (SW TO CORRIDOR-1)\n      (EAST TO HALLWAY-JUNCTION)\n      (ROOMDESCS <PLTABLE\n0\n\"I've approached a bend in the tube. One section continues to the east, while\nthe other section goes to the southwest.\"\n\"Vibrational activity picked up, though intensity too slight to determine\nlocational fix at this point.\"\n\"With audio sensors on full power I can detect some 'background' noise coming\nfrom the east.\"\n\"Into all lives the flow proceeds, weaving its web of mystery like that of an\nenigmatic spider.\"\n\"My source signals become stronger and clearer to the east.\">)\n      (LINE 1)\n      (STATION CORRIDOR-2)\n      (CORRIDOR 24)>",
   "referencedBy": [
    "MOVE-RBT?"
   ]
  },
  "RTD-BANKS": {
   "name": "RTD-BANKS",
   "file": "rooms.zil",
   "line": 336,
   "endLine": 355,
   "desc": "Transit Monitors",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "MONITO"
   ],
   "adjectives": [
    "TRANSI"
   ],
   "action": "TRANSIT-MONITOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MONITOR"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar indicates these walls are filled with irregularities which could be\nmonitors.\" \"Surges of electrical flow can be detected from small units mounted on the\nwalls, most probably meters.\" 0 \"They bounce back and forth like metro's gnomes.\" \"The CLC is not linked to these devices.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "CPU-ROOM"
    ]
   },
   "exits": [
    {
     "to": "CPU-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM RTD-BANKS\n      (IN ROOMS)\n      (DESC \"Transit Monitors\")\n      (SYNONYM MONITO)\n      (ADJECTIVE TRANSI)\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO CPU-ROOM)\n      (ROOMDESCS <PLTABLE\n0\n\"Sonar indicates these walls are filled with irregularities which could be\nmonitors.\"\n\"Surges of electrical flow can be detected from small units mounted on the\nwalls, most probably meters.\"\n0\n\"They bounce back and forth like metro's gnomes.\"\n\"The CLC is not linked to these devices.\">)\n      (ACTION TRANSIT-MONITOR-FCN)\n      (LINE 1)\n      (STATION CPU-ROOM)\n      (GLOBAL MONITOR)>",
   "referencedBy": [
    "WEATHER-ROBOTS",
    "IRIS-ALLOWED?",
    "V-EXAMINE",
    "V-READ"
   ]
  },
  "SERVO-SYSTEMS": {
   "name": "SERVO-SYSTEMS",
   "file": "rooms.zil",
   "line": 379,
   "endLine": 397,
   "desc": "Hydroponics Monitors",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "RLANDBIT"
   ],
   "synonyms": [
    "MONITO"
   ],
   "adjectives": [
    "HYDROP"
   ],
   "action": "HYDROMONITORS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MONITOR"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"This area has walls with irregular protrusions, most likely some kind of\nmonitors or meters.\" \"Meters and electrons within this room seem extremely variable with each\npassing second.\" \"I hear a voice saying, \"Food, food for the truth\".\" \"They move like snakes, without a bone.\" \"Nothing here is linked to the CLC.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "CPU-ROOM"
    ]
   },
   "exits": [
    {
     "to": "CPU-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM SERVO-SYSTEMS\n      (IN ROOMS)\n      (FLAGS ONBIT RLANDBIT)\n      (WEST TO CPU-ROOM)\n      (DESC \"Hydroponics Monitors\")\n      (SYNONYM MONITO)\n      (ADJECTIVE HYDROP)\n      (ACTION HYDROMONITORS-FCN)\n      (GLOBAL MONITOR)\n      (ROOMDESCS <PLTABLE 0 \n\"This area has walls with irregular protrusions, most likely some kind of\nmonitors or meters.\"\n\"Meters and electrons within this room seem extremely variable with each\npassing second.\"\n\"I hear a voice saying, \\\"Food, food for the truth\\\".\"\n\"They move like snakes, without a bone.\"\n\"Nothing here is linked to the CLC.\">)\n      (LINE 1)\n      (STATION CPU-ROOM)>",
   "referencedBy": [
    "IRIS-ALLOWED?",
    "V-EXAMINE",
    "V-READ"
   ]
  },
  "NORTH-ENTRY": {
   "name": "NORTH-ENTRY",
   "file": "rooms.zil",
   "line": 475,
   "endLine": 492,
   "desc": "Hallway T",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "T"
   ],
   "adjectives": [
    "HALLWAY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have reached a T intersection in the east/west hallway.\" \"I can detect a lot of electrical movement to the west from this location. A strong bath of ultraviolet can also be detected.\" \"A low whirring noise, barely audible, can be detected from the west.\" \"Intersections, like the choices of life, are metered by the flow.\" \"Warning: CLC communique indicates approaching Off-Limits area.\">"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "NORTH-ENTRY"
    ],
    "CORRIDOR": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "STERILE-AREA",
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
     "dir": "WEST"
    },
    {
     "to": "HALL-STOP1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM NORTH-ENTRY\n      (IN ROOMS)\n      (DESC \"Hallway T\")\n      (SYNONYM T)\n      (ADJECTIVE HALLWAY)\n      (NORTH TO STERILE-AREA)\n      (WEST TO DEAD-END-1)\n      (EAST TO HALL-STOP1)\n      (FLAGS RLANDBIT ONBIT)\n      (ROOMDESCS <PLTABLE 0\n\"I have reached a T intersection in the east/west hallway.\"\n\"I can detect a lot of electrical movement to the west from this location. A strong bath of ultraviolet can also be detected.\"\n\"A low whirring noise, barely audible, can be detected from the west.\"\n\"Intersections, like the choices of life, are metered by the flow.\"\n\"Warning: CLC communique indicates approaching Off-Limits area.\">)\n      (LINE 3)\n      (STATION NORTH-ENTRY)\n      (CORRIDOR 2)>",
   "referencedBy": []
  },
  "DEAD-END-1": {
   "name": "DEAD-END-1",
   "file": "rooms.zil",
   "line": 494,
   "endLine": 510,
   "desc": "Dead End",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "END"
   ],
   "adjectives": [
    "DEAD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have reached the end of the western passage.\" \"I have reached the end of the western passage.\" \"I have reached the end of the western passage.\" \"I have reached the end of the western passage.\" \"I have reached the end of the western passage.\">"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "DEAD-END-1"
    ],
    "CORRIDOR": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "NORTH-ENTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM DEAD-END-1 \n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (SYNONYM END)\n      (ADJECTIVE DEAD)\n      (DESC \"Dead End\")\n      (EAST TO NORTH-ENTRY)\n      (ROOMDESCS <PLTABLE\n0\n\"I have reached the end of the western passage.\"\n\"I have reached the end of the western passage.\"\n\"I have reached the end of the western passage.\"\n\"I have reached the end of the western passage.\"\n\"I have reached the end of the western passage.\">)\n      (LINE 3)\n      (STATION DEAD-END-1)\n      (CORRIDOR 2)>",
   "referencedBy": []
  },
  "DECON-CHAMBER": {
   "name": "DECON-CHAMBER",
   "file": "rooms.zil",
   "line": 512,
   "endLine": 533,
   "desc": "Decontamination Chamber",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CHAMBER"
   ],
   "adjectives": [
    "DECONT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have entered a small room. Overhead a small nozzle extends down from\nthe ceiling, and doorways can be detected to the west and east.\" \"A quick analysis of the molecular structure of the air in this area shows the\nvestiges of a sterilization compound. In addition, an ultraviolet source can be\ndetected directly overhead.\" \"A small hissing can be detected overhead, as if a small port leaked a\nsemi-liquid compound.\" \"To be barren in more ways than one is an indication of our lot in life,\nsuch as we know life.\" \"Warning: CLC communique indicates too close to Off-Limits area.\">"
    ],
    "LINE": [
     "4"
    ],
    "STATION": [
     "DECON-CHAMBER"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "STERILE-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ENTRY-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "NOZZLE"
   ],
   "source": "<ROOM DECON-CHAMBER\n      (IN ROOMS)\n      (DESC \"Decontamination Chamber\")\n      (SYNONYM CHAMBER)\n      (ADJECTIVE DECONT)      \n      (WEST TO STERILE-AREA)\n      (EAST TO ENTRY-AREA)\n      (FLAGS RLANDBIT ONBIT)\n      (ROOMDESCS <PLTABLE 0\n\"I have entered a small room. Overhead a small nozzle extends down from\nthe ceiling, and doorways can be detected to the west and east.\"\n\"A quick analysis of the molecular structure of the air in this area shows the\nvestiges of a sterilization compound. In addition, an ultraviolet source can be\ndetected directly overhead.\"\n\"A small hissing can be detected overhead, as if a small port leaked a\nsemi-liquid compound.\"\n\"To be barren in more ways than one is an indication of our lot in life,\nsuch as we know life.\"\n\"Warning: CLC communique indicates too close to Off-Limits area.\">)\n      (LINE 4)\n      (STATION DECON-CHAMBER)\n      (CORRIDOR 1)>",
   "referencedBy": []
  },
  "STERILE-AREA": {
   "name": "STERILE-AREA",
   "file": "rooms.zil",
   "line": 535,
   "endLine": 553,
   "desc": "Sterilization Chamber",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CHAMBER"
   ],
   "adjectives": [
    "STERIL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"A thorough scanning of this area indicates I am at some kind of a dead\nend. There is some kind of structure, probably a set of benches, extending from the north wall.\" \"I can detect a lot of electrical movement to the west from this location. A strong bath of ultraviolet can also be detected from the east.\" \"A loud whirring noise can be detected from the west.\" \"We all reach the ends of our life lines at some point.\" \"Warning: CLC communique indicates we are at the Off-Limits area.\">"
    ],
    "LINE": [
     "4"
    ],
    "STATION": [
     "STERILE-AREA"
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
     "message": "CLC WARNING!! Further westward movement prohibited to all robots.",
     "dir": "WEST"
    },
    {
     "to": "NORTH-ENTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DECON-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "PLAQUE",
    "BENCH"
   ],
   "source": "<ROOM STERILE-AREA\n      (IN ROOMS)\n      (DESC \"Sterilization Chamber\")\n      (SYNONYM CHAMBER)\n      (ADJECTIVE STERIL)      \n      (WEST \"CLC WARNING!! Further westward movement prohibited to all robots.\")\n      (SOUTH TO NORTH-ENTRY)\n      (EAST TO DECON-CHAMBER)\n      (FLAGS RLANDBIT ONBIT)\n      (ROOMDESCS <PLTABLE 0\n\"A thorough scanning of this area indicates I am at some kind of a dead\nend. There is some kind of structure, probably a set of benches, extending from the north wall.\"\n\"I can detect a lot of electrical movement to the west from this location. A strong bath of ultraviolet can also be detected from the east.\"\n\"A loud whirring noise can be detected from the west.\"\n\"We all reach the ends of our life lines at some point.\"\n\"Warning: CLC communique indicates we are at the Off-Limits area.\">)\n      (LINE 4)\n      (STATION STERILE-AREA)\n      (CORRIDOR 1)>",
   "referencedBy": [
    "I-PEOPLE1"
   ]
  },
  "ENTRY-AREA": {
   "name": "ENTRY-AREA",
   "file": "rooms.zil",
   "line": 555,
   "endLine": 572,
   "desc": "Entry Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ENTRY"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I am in a small, square room with no distinguishing features detectable.\" \"I can detect a lot of electrical movement from the west. A strong bath\nof ultraviolet can also be detected.\" \"A low, whirring noise, barely detectable, can be heard from the west.\" \"The crux, the mandible mandella of humane existence, is like the\npatterns all around me.\" \"Warning!! CLC communique indicates off-limits area nearby!\">"
    ],
    "LINE": [
     "4"
    ],
    "STATION": [
     "ENTRY-AREA"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "TOOL-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "DECON-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "AUDA"
   ],
   "source": "<ROOM ENTRY-AREA\n      (IN ROOMS)\n      (DESC \"Entry Area\")\n      (SYNONYM ENTRY)\n      (EAST TO TOOL-AREA)\n      (WEST TO DECON-CHAMBER)\n      (FLAGS RLANDBIT ONBIT)\n      (ROOMDESCS <PLTABLE 0\n\"I am in a small, square room with no distinguishing features detectable.\"\n\"I can detect a lot of electrical movement from the west. A strong bath\nof ultraviolet can also be detected.\"\n\"A low, whirring noise, barely detectable, can be heard from the west.\"\n\"The crux, the mandible mandella of humane existence, is like the\npatterns all around me.\"\n\"Warning!! CLC communique indicates off-limits area nearby!\">)\n      (LINE 4)\n      (STATION ENTRY-AREA)\n      (CORRIDOR 1)>",
   "referencedBy": []
  },
  "TOOL-AREA": {
   "name": "TOOL-AREA",
   "file": "rooms.zil",
   "line": 574,
   "endLine": 591,
   "desc": "Small Supply Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SUPPLY"
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
    "ROOMDESCS": [
     "<PLTABLE 0 \"I can detect a small area, cluttered with things which extend from the\nwalls. Doorways lead to the east and the west.\" \"A strange container exists by the east wall of this room which is being fed electrical vibrations.\" \"The air here is very still.\" \"Tools for industry, tools for the dead.\" \"CLC indicates this area not for robot use.\">"
    ],
    "LINE": [
     "4"
    ],
    "STATION": [
     "TOOL-AREA"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "ENTRY-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "REC-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "TOPSHELF",
    "PEOPLE-CABINET"
   ],
   "source": "<ROOM TOOL-AREA\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Small Supply Room\")\n      (SYNONYM SUPPLY)\n      (ADJECTIVE SMALL)\n      (WEST TO ENTRY-AREA)\n      (EAST TO REC-AREA)\n      (ROOMDESCS <PLTABLE 0\n\"I can detect a small area, cluttered with things which extend from the\nwalls. Doorways lead to the east and the west.\"\n\"A strange container exists by the east wall of this room which is being fed electrical vibrations.\"\n\"The air here is very still.\"\n\"Tools for industry, tools for the dead.\"\n\"CLC indicates this area not for robot use.\">)\n      (LINE 4)\n      (STATION TOOL-AREA)\n      (CORRIDOR 1)>",
   "referencedBy": [
    "I-PEOPLE1"
   ]
  },
  "HALL-STOP1": {
   "name": "HALL-STOP1",
   "file": "rooms.zil",
   "line": 593,
   "endLine": 611,
   "desc": "Hallway",
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
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I am near the start of a long, straight passageway.\" \"I can perceive small vibrations emanating from the north. This general\narea seems to be chemically active.\" \"I can hear some slight noise coming from the north and the west, though\nit is too distant to accurately describe.\" \"All things continue given their right place and the correct opportunity.\" \"I am moving toward an area which the CLC warns is not normally within\nthe realm of the robot maintenance crew.\">"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "HALL-STOP1"
    ],
    "CORRIDOR": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "NORTH-ENTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALL-STOP2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-STOP1\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Hallway\")\n      (WEST TO NORTH-ENTRY)\n      (EAST TO HALL-STOP2)\n      (ROOMDESCS <PLTABLE\n0 \n\"I am near the start of a long, straight passageway.\"\n\"I can perceive small vibrations emanating from the north. This general\narea seems to be chemically active.\"\n\"I can hear some slight noise coming from the north and the west, though\nit is too distant to accurately describe.\"\n\"All things continue given their right place and the correct opportunity.\"\n\"I am moving toward an area which the CLC warns is not normally within\nthe realm of the robot maintenance crew.\">)\n      (LINE 3)\n      (STATION HALL-STOP1)\n      (CORRIDOR 2)>",
   "referencedBy": []
  },
  "HALL-STOP2": {
   "name": "HALL-STOP2",
   "file": "rooms.zil",
   "line": 613,
   "endLine": 628,
   "desc": "Hallway",
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
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects the hallway continuing east and west.\" \"There are no abnormal disturbances to report within the permanent\nenvironment in this area.\" 0 \"All things must enter, as all things must leave.\" \"CLC referencing indicates I am not empowered to take actions within\nthis general area.\">"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "HALL-STOP2"
    ],
    "CORRIDOR": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "HALL-STOP1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALL-STOP3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-STOP2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (WEST TO HALL-STOP1)\n      (EAST TO HALL-STOP3)\n      (DESC \"Hallway\")\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects the hallway continuing east and west.\"\n\"There are no abnormal disturbances to report within the permanent\nenvironment in this area.\" 0\n\"All things must enter, as all things must leave.\"\n\"CLC referencing indicates I am not empowered to take actions within\nthis general area.\">)\n      (LINE 3)\n      (STATION HALL-STOP2)\n      (CORRIDOR 2)>",
   "referencedBy": []
  },
  "HUMAN-ENTRY": {
   "name": "HUMAN-ENTRY",
   "file": "rooms.zil",
   "line": 630,
   "endLine": 651,
   "desc": "Sloping Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CORRID"
   ],
   "adjectives": [
    "SLOPING"
   ],
   "action": "JUNCTION-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STEP"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects the corridor descends to the north in a gentle slope. The\nintersection to the south is raised above this level.\" \"Sensory units detect a strong energy flow in the intersection to the\nsouth.\" 0 \"Oh, the travesty of descent, the joyousness of having one's spirit\nlifted beyond measure to another glorious level.\" \"CLC can be detected to the south. Its signals reach me in a straight line. Signal intensity 5.\">"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "HUMAN-ENTRY"
    ],
    "CORRIDOR": [
     "4"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WEDGE-FCN",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "HALL-STOP3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HUMAN-ENTRY\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Sloping Corridor\")\n      (SYNONYM CORRID)\n      (ADJECTIVE SLOPING)\n      (SOUTH PER WEDGE-FCN)\n      (NORTH TO HALL-STOP3)\n      (GLOBAL STEP)\n      (ROOMDESCS <PLTABLE 0 \n\"Sonar detects the corridor descends to the north in a gentle slope. The\nintersection to the south is raised above this level.\"\n\"Sensory units detect a strong energy flow in the intersection to the\nsouth.\"\n0\n\"Oh, the travesty of descent, the joyousness of having one's spirit\nlifted beyond measure to another glorious level.\"\n\"CLC can be detected to the south. Its signals reach me in a straight line. Signal intensity 5.\">)\n      (ACTION JUNCTION-FCN)\n      (LINE 3)\n      (STATION HUMAN-ENTRY)\n      (CORRIDOR 4)>",
   "referencedBy": [
    "STEP-FCN",
    "MOVE-RBT?",
    "WEDGE-FCN"
   ]
  },
  "HALLWAY-JUNCTION": {
   "name": "HALLWAY-JUNCTION",
   "file": "rooms.zil",
   "line": 663,
   "endLine": 686,
   "desc": "Hallway Junction",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "JUNCTION"
   ],
   "adjectives": [
    "HALLWAY"
   ],
   "action": "JUNCTION-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STEP"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects an intersection here, with a small dropoff to the north.\" \"I detect a strong flux of energy here -- transmissions of all types meeting as\nif at the hub of some giant wheel.\" \"I can tell I've reached an intersection by the way sounds bounce off the\nwalls.\" \"Life is filled with choice. Decisions always make my eyes moist.\" \"Request directions which would send me in a southerly direction as linkup\nseems imminent.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "HALLWAY-JUNCTION"
    ],
    "CORRIDOR": [
     "20"
    ]
   },
   "exits": [
    {
     "to": "CORRIDOR-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CORRIDOR-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "OUTSIDE-CLC",
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
     "per": "WEDGE-FCN",
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALLWAY-JUNCTION\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Hallway Junction\")\n      (SYNONYM JUNCTION)\n      (ADJECTIVE HALLWAY)\n      (WEST TO CORRIDOR-2)\n      (EAST TO CORRIDOR-3)\n      (SOUTH TO OUTSIDE-CLC)\n      (NORTH PER WEDGE-FCN)\n      (ROOMDESCS <PLTABLE 0 \n\"Sonar detects an intersection here, with a small dropoff to the north.\"\n\"I detect a strong flux of energy here -- transmissions of all types meeting as\nif at the hub of some giant wheel.\"\n\"I can tell I've reached an intersection by the way sounds bounce off the\nwalls.\"\n\"Life is filled with choice. Decisions always make my eyes moist.\"\n\"Request directions which would send me in a southerly direction as linkup\nseems imminent.\">)\n      (GLOBAL STEP)\n      (ACTION JUNCTION-FCN)\n      (LINE 1)\n      (STATION HALLWAY-JUNCTION)\n      (CORRIDOR 20)>",
   "referencedBy": [
    "STEP-FCN",
    "MOVE-RBT?",
    "WEDGE-FCN"
   ]
  },
  "OUTSIDE-CLC": {
   "name": "OUTSIDE-CLC",
   "file": "rooms.zil",
   "line": 707,
   "endLine": 725,
   "desc": "Outer Library Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "LIBRARY"
   ],
   "adjectives": [
    "OUTER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar indicates a closed-in area to the south, with small pedestals extending\nup from the floor. The hallway goes on to the north.\" \"I can sense strong data emanations coming from the south, channeling through\nthis hallway to the northern junction.\" \"The air to the south is still within a closed chamber, while the air to the\nnorth circulates freely.\" \"Akin to knowledge is only freedom.\" \"CLC identifier tagging detected directly to the south.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "OUTSIDE-CLC"
    ]
   },
   "exits": [
    {
     "to": "PERIPH-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "HALLWAY-JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM OUTSIDE-CLC\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Outer Library Area\")\n      (SYNONYM LIBRARY)\n      (ADJECTIVE OUTER)\n      (SOUTH TO PERIPH-1)\n      (NORTH TO HALLWAY-JUNCTION)\n      (ROOMDESCS <PLTABLE 0 \n\"Sonar indicates a closed-in area to the south, with small pedestals extending\nup from the floor. The hallway goes on to the north.\"\n\"I can sense strong data emanations coming from the south, channeling through\nthis hallway to the northern junction.\"\n\"The air to the south is still within a closed chamber, while the air to the\nnorth circulates freely.\"\n\"Akin to knowledge is only freedom.\"\n\"CLC identifier tagging detected directly to the south.\">)\n      (LINE 1)\n      (STATION OUTSIDE-CLC)>",
   "referencedBy": []
  },
  "PERIPH-1": {
   "name": "PERIPH-1",
   "file": "rooms.zil",
   "line": 727,
   "endLine": 745,
   "desc": "Index Peripheral",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PERIPH"
   ],
   "adjectives": [
    "INDEX"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Before me is a pedestal, rising from the ground.\" \"The pedestal before me emanates tremendous data flows and transmits a radio homing signal, no doubt aimed toward Whiz.\" \"I can still detect the air changes to the north, indicating there is an\nexit in that direction for me.\" \"The root of all knowledge, of all existence, lies before us for the taking.\" \"CLC identifier shows the object before me as the Index pedestal.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "PERIPH-1"
    ]
   },
   "exits": [
    {
     "to": "PERIPH-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "PERIPH-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "CLC-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "OUTSIDE-CLC",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "PERIPH1-OBJ"
   ],
   "source": "<ROOM PERIPH-1\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Index Peripheral\")\n      (SYNONYM PERIPH)\n      (ADJECTIVE INDEX)\n      (SW TO PERIPH-4)\n      (SE TO PERIPH-2)\n      (SOUTH TO CLC-CORE)\n      (NORTH TO OUTSIDE-CLC)\n      (ROOMDESCS <PLTABLE 0 \n\"Before me is a pedestal, rising from the ground.\"\n\"The pedestal before me emanates tremendous data flows and transmits a radio homing signal, no doubt aimed toward Whiz.\"\n\"I can still detect the air changes to the north, indicating there is an\nexit in that direction for me.\"\n\"The root of all knowledge, of all existence, lies before us for the taking.\"\n\"CLC identifier shows the object before me as the Index pedestal.\">)\n      (LINE 1)\n      (STATION PERIPH-1)>",
   "referencedBy": [
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "PERIPH-2": {
   "name": "PERIPH-2",
   "file": "rooms.zil",
   "line": 747,
   "endLine": 765,
   "desc": "Technical Peripheral",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PERIPH"
   ],
   "adjectives": [
    "TECHNI"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Before me stands another pedestal.\" \"This pedestal emits the same kind of data flow as the others.\" \"I sense I am getting further away from the air currents which are readable\nto me.\" \"Another grasp of the all-knowing Universe stands before me. Ah, to be able to\nlearn what it holds, the might of the mind is like no other.\" \"CLC tagged object before me indicates it is the Technical pedestal.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "PERIPH-2"
    ]
   },
   "exits": [
    {
     "to": "PERIPH-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "PERIPH-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "CLC-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "PERIPH2-OBJ"
   ],
   "source": "<ROOM PERIPH-2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Technical Peripheral\")\n      (SYNONYM PERIPH)\n      (ADJECTIVE TECHNI)\n      (SW TO PERIPH-3)\n      (NW TO PERIPH-1)\n      (WEST TO CLC-CORE)\n      (ROOMDESCS <PLTABLE 0 \n\"Before me stands another pedestal.\"\n\"This pedestal emits the same kind of data flow as the others.\"\n\"I sense I am getting further away from the air currents which are readable\nto me.\"\n\"Another grasp of the all-knowing Universe stands before me. Ah, to be able to\nlearn what it holds, the might of the mind is like no other.\"\n\"CLC tagged object before me indicates it is the Technical pedestal.\">)\n      (LINE 1)\n      (STATION PERIPH-2)>",
   "referencedBy": [
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "PERIPH-3": {
   "name": "PERIPH-3",
   "file": "rooms.zil",
   "line": 767,
   "endLine": 784,
   "desc": "Advisory Peripheral",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PERIPH"
   ],
   "adjectives": [
    "ADVISO"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Before me stands a third unit similar in all outward appearances to the\nothers.\" \"This object too emits an incredible homing signal and transmits data.\" \"I am further away from detectable air currents than I should be.\" \"Giving advice is easy. Taking advice isn't.\" \"CLC tagged object indicates it is the Advisory pedestal before me.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "PERIPH-3"
    ]
   },
   "exits": [
    {
     "to": "PERIPH-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "PERIPH-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "CLC-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "PERIPH3-OBJ",
    "WHIZ"
   ],
   "source": "<ROOM PERIPH-3\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Advisory Peripheral\")\n      (SYNONYM PERIPH)\n      (ADJECTIVE ADVISO)\n      (NW TO PERIPH-4)\n      (NE TO PERIPH-2)\n      (NORTH TO CLC-CORE)\n      (ROOMDESCS <PLTABLE 0 \n\"Before me stands a third unit similar in all outward appearances to the\nothers.\"\n\"This object too emits an incredible homing signal and transmits data.\"\n\"I am further away from detectable air currents than I should be.\"\n\"Giving advice is easy. Taking advice isn't.\"\n\"CLC tagged object indicates it is the Advisory pedestal before me.\">)\n      (LINE 1)\n      (STATION PERIPH-3)>",
   "referencedBy": [
    "V-HINT",
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "PERIPH-4": {
   "name": "PERIPH-4",
   "file": "rooms.zil",
   "line": 786,
   "endLine": 803,
   "desc": "Historical Peripheral",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PERIPH"
   ],
   "adjectives": [
    "HISTOR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Another pedestal structure lies before me.\" \"More data flows detected within this area, especially directly before me.\" \"The air within this area is still, though the object before me emits a faint\nhigh-frequency tinging.\" \"Complicated life, like that of the Chinese Mandarin, continues to obscure.\" \"CLC tagged object before me is the Historical pedestal.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "PERIPH-4"
    ]
   },
   "exits": [
    {
     "to": "PERIPH-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "PERIPH-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "CLC-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "PERIPH4-OBJ"
   ],
   "source": "<ROOM PERIPH-4\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Historical Peripheral\")\n      (SYNONYM PERIPH)\n      (ADJECTIVE HISTOR)\n      (NE TO PERIPH-1)\n      (SE TO PERIPH-3)\n      (EAST TO CLC-CORE)\n      (ROOMDESCS <PLTABLE 0 \n\"Another pedestal structure lies before me.\"\n\"More data flows detected within this area, especially directly before me.\"\n\"The air within this area is still, though the object before me emits a faint\nhigh-frequency tinging.\"\n\"Complicated life, like that of the Chinese Mandarin, continues to obscure.\"\n\"CLC tagged object before me is the Historical pedestal.\">)\n      (LINE 1)\n      (STATION PERIPH-4)>",
   "referencedBy": [
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "CLC-CORE": {
   "name": "CLC-CORE",
   "file": "rooms.zil",
   "line": 805,
   "endLine": 825,
   "desc": "Central Core",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CLC",
    "CORE"
   ],
   "adjectives": [
    "CENTRAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects a small railing, most likely for safety purposes, directly\nbefore me. Beyond that railing is a huge cavern.\" \"I can feel a tremendous flow of energy within this area. It is unlike\nanything else in its intensity and scope.\" \"Small updrafts can be heard as minute air currents directly before me.\" \"The root of our beings, the truth behind all of our existence, lies before\nme.\" \"Directly before me is the Central Core. There is no available plug-in device within this area.\">"
    ],
    "LINE": [
     "1"
    ],
    "STATION": [
     "CLC-CORE"
    ]
   },
   "exits": [
    {
     "to": "PERIPH-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "PERIPH-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PERIPH-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "PERIPH-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "RAILING"
   ],
   "source": "<ROOM CLC-CORE\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Central Core\")\n      (SYNONYM CLC CORE)\n      (ADJECTIVE CENTRAL)\n      (WEST TO PERIPH-4)\n      (EAST TO PERIPH-2)\n      (NORTH TO PERIPH-1)\n      (SOUTH TO PERIPH-3)\n      (ROOMDESCS <PLTABLE 0 \n\"Sonar detects a small railing, most likely for safety purposes, directly\nbefore me. Beyond that railing is a huge cavern.\"\n\"I can feel a tremendous flow of energy within this area. It is unlike\nanything else in its intensity and scope.\"\n\"Small updrafts can be heard as minute air currents directly before me.\"\n\"The root of our beings, the truth behind all of our existence, lies before\nme.\"\n\"Directly before me is the Central Core. There is no available plug-in device within this area.\">)\n      (LINE 1)\n      (STATION CLC-CORE)>",
   "referencedBy": []
  },
  "CORRIDOR-3": {
   "name": "CORRIDOR-3",
   "file": "rooms.zil",
   "line": 827,
   "endLine": 843,
   "desc": "Southeast Junction",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "JUNCTION"
   ],
   "adjectives": [
    "SOUTHE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I perceive another passageway heading off to the southeast from here.\" \"Friendly vibrations can be detected from the southeast.\" 0 \"To forgive is innocent, but to repair is all mine.\" \"CLC indicates I've gone too far to the east for an interface.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "CORRIDOR-3"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "HALLWAY-JUNCTION",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CORRIDOR-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "ROBOT-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM CORRIDOR-3\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (WEST TO HALLWAY-JUNCTION)\n      (EAST TO CORRIDOR-4)\n      (SE TO ROBOT-PASSAGE)\n      (DESC \"Southeast Junction\")\n      (SYNONYM JUNCTION)\n      (ADJECTIVE SOUTHE)\n      (ROOMDESCS <PLTABLE 0\n\"I perceive another passageway heading off to the southeast from here.\"\n\"Friendly vibrations can be detected from the southeast.\" 0\n\"To forgive is innocent, but to repair is all mine.\"\n\"CLC indicates I've gone too far to the east for an interface.\">)\n      (LINE 2)\n      (STATION CORRIDOR-3)\n      (CORRIDOR 16)>",
   "referencedBy": []
  },
  "ROBOT-PASSAGE": {
   "name": "ROBOT-PASSAGE",
   "file": "rooms.zil",
   "line": 845,
   "endLine": 866,
   "desc": "Southeast Passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PASSAGE"
   ],
   "adjectives": [
    "SOUTHE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"This tubular passageway continues to the southeast. I can detect a bend in it\ntoward the south.\" \"My receptors are picking up strong data transmissions to the west of here.\nOverhead I can trace an electrical flow that continues to the southeast.\" 0 \"There once was a cowboy named Mix|\nWho managed just one shot in six|\n    He looked quite surpised|\n    When he opened his eyes|\nAnd saw that his gun wasn't fixed.\" \"CLC tags indicate a robot-oriented area exists to the southeast.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "ROBOT-PASSAGE"
    ]
   },
   "exits": [
    {
     "to": "CORRIDOR-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "ROBOT-Z",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM ROBOT-PASSAGE\n      (IN ROOMS)\n      (NW TO CORRIDOR-3)\n      (SE TO ROBOT-Z)\n      (DESC \"Southeast Passage\")\n      (SYNONYM PASSAGE)\n      (ADJECTIVE SOUTHE)\n      (ROOMDESCS <PLTABLE 0\n\"This tubular passageway continues to the southeast. I can detect a bend in it\ntoward the south.\"\n\"My receptors are picking up strong data transmissions to the west of here.\nOverhead I can trace an electrical flow that continues to the southeast.\"\n0\n\"There once was a cowboy named Mix|\nWho managed just one shot in six|\n    He looked quite surpised|\n    When he opened his eyes|\nAnd saw that his gun wasn't fixed.\"\n\"CLC tags indicate a robot-oriented area exists to the southeast.\">)\n      (FLAGS RLANDBIT ONBIT)\n      (LINE 2)\n      (STATION ROBOT-PASSAGE)>",
   "referencedBy": []
  },
  "ROBOT-Z": {
   "name": "ROBOT-Z",
   "file": "rooms.zil",
   "line": 868,
   "endLine": 886,
   "desc": "Bending Passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PASSAGE"
   ],
   "adjectives": [
    "BENDING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects a large area to the south with many obstacles within the\nstructure.\" \"The data transmissions are still detectable from the west. This area is\nfilled with all kinds of electrical devices and what seems like motors.\" 0 \"Did you ever have the feeling you were running on a treadmill? Sometimes life is like that.\" \"CLC tagged area indicates robot repair mechanisms close by.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "ROBOT-Z"
    ]
   },
   "exits": [
    {
     "to": "ROBOT-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "REPAIR1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM ROBOT-Z\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Bending Passage\")\n      (SYNONYM PASSAGE)\n      (ADJECTIVE BENDING)\n      (ROOMDESCS <PLTABLE\n0\n\"Sonar detects a large area to the south with many obstacles within the\nstructure.\"\n\"The data transmissions are still detectable from the west. This area is\nfilled with all kinds of electrical devices and what seems like motors.\"\n0\n\"Did you ever have the feeling you were running on a treadmill? Sometimes life is like that.\"\n\"CLC tagged area indicates robot repair mechanisms close by.\">)\n      (NW TO ROBOT-PASSAGE)\n      (SOUTH TO REPAIR1)\n      (LINE 2)\n      (STATION ROBOT-Z)>",
   "referencedBy": []
  },
  "REPAIR1": {
   "name": "REPAIR1",
   "file": "rooms.zil",
   "line": 888,
   "endLine": 905,
   "desc": "Alpha Repair",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "REPAIR"
   ],
   "adjectives": [
    "ALPHA"
   ],
   "action": "REPAIRX-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STEP"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Before me is a walkway which has wheels and all sorts of odd protuberances which my sonar has a hard time deciphering. Sonar also detects a small step at the base of it.\" \"Strong electrical interference can be detected within this environment.\" \"I can hear the sound of gears and cogs, coming from a noisy walkway.\" \"Running, running, getting nowhere amid the hustle and bustle of life.\" \"I am in what the CLC describes as a repair area for robot units.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "REPAIR1"
    ]
   },
   "exits": [
    {
     "to": "ROBOT-Z",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "REPAIR2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "CONVEYERBELTA"
   ],
   "source": "<ROOM REPAIR1\n      (IN ROOMS)\n      (DESC \"Alpha Repair\")\n      (SYNONYM REPAIR)\n      (ADJECTIVE ALPHA)\n      (GLOBAL STEP)\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO ROBOT-Z)\n      (SOUTH TO REPAIR2)\n      (ROOMDESCS <PLTABLE 0\n\"Before me is a walkway which has wheels and all sorts of odd protuberances which my sonar has a hard time deciphering. Sonar also detects a small step at the base of it.\"\n\"Strong electrical interference can be detected within this environment.\"\n\"I can hear the sound of gears and cogs, coming from a noisy walkway.\"\n\"Running, running, getting nowhere amid the hustle and bustle of life.\"\n\"I am in what the CLC describes as a repair area for robot units.\">)\n      (ACTION REPAIRX-FCN)\n      (LINE 2)\n      (STATION REPAIR1)>",
   "referencedBy": [
    "STEP-FCN",
    "REPAIRX-FCN",
    "V-MOVE",
    "V-RAISE",
    "V-PUSH-UP"
   ]
  },
  "REPAIR2": {
   "name": "REPAIR2",
   "file": "rooms.zil",
   "line": 907,
   "endLine": 923,
   "desc": "Beta Repair",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "REPAIR"
   ],
   "adjectives": [
    "BETA"
   ],
   "action": "REPAIRX-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I'm in the center of a large area with a walkway in the center.\" \"I detect slight vibrational activity from a conveying mechanism.\" \"I can hear the meshing of gears and cogs, coming from a noisy walkway.\" \"We're getting nowhere fast, glider, but at least we're not getting there slowly.\" \"CLC indicators coming from the west.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "REPAIR2"
    ]
   },
   "exits": [
    {
     "to": "REPAIR1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "REPAIR3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "CONVEYERBELTB"
   ],
   "source": "<ROOM REPAIR2\n      (IN ROOMS)\n      (DESC \"Beta Repair\")\n      (SYNONYM REPAIR)\n      (ADJECTIVE BETA)\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO REPAIR1)\n      (SOUTH TO REPAIR3)\n      (ROOMDESCS <PLTABLE 0\n\"I'm in the center of a large area with a walkway in the center.\"\n\"I detect slight vibrational activity from a conveying mechanism.\"\n\"I can hear the meshing of gears and cogs, coming from a noisy walkway.\"\n\"We're getting nowhere fast, glider, but at least we're not getting there slowly.\"\n\"CLC indicators coming from the west.\">)\n      (ACTION REPAIRX-FCN)\n      (LINE 2)\n      (STATION REPAIR2)>",
   "referencedBy": [
    "REPAIRX-FCN"
   ]
  },
  "REPAIR3": {
   "name": "REPAIR3",
   "file": "rooms.zil",
   "line": 925,
   "endLine": 943,
   "desc": "Gamma Repair",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "REPAIR"
   ],
   "adjectives": [
    "GAMMA"
   ],
   "action": "REPAIRX-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIRING"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have reached the south end of this area. The walkway ends here.\" \"Vibrational activity and electrical emanations detected from the north are\nstronger than those in the immediate vicinity.\" \"Noise of machinery can be detected coming from the north.\" \"Oh, to reach the end of one's previous existence, to travel the roadways of\nlife when they are most needed, only to end up here, reborn.\" \"The CLC indicates that this is the end of the Robot Repair area.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "REPAIR3"
    ]
   },
   "exits": [
    {
     "to": "REPAIR2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "CABINET",
    "FLOWSWITCH",
    "REDWIRE",
    "CONVEYERBELTC",
    "WALDO"
   ],
   "source": "<ROOM REPAIR3\n      (IN ROOMS)\n      (NORTH TO REPAIR2)\n      (ROOMDESCS <PLTABLE 0\n\"I have reached the south end of this area. The walkway ends here.\"\n\"Vibrational activity and electrical emanations detected from the north are\nstronger than those in the immediate vicinity.\"\n\"Noise of machinery can be detected coming from the north.\"\n\"Oh, to reach the end of one's previous existence, to travel the roadways of\nlife when they are most needed, only to end up here, reborn.\"\n\"The CLC indicates that this is the end of the Robot Repair area.\">)\n      (DESC \"Gamma Repair\")\n      (SYNONYM REPAIR)\n      (ADJECTIVE GAMMA)\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION REPAIRX-FCN)\n      (GLOBAL WIRING)\n      (LINE 2)\n      (STATION REPAIR3)>",
   "referencedBy": [
    "DEADBOT-FCN",
    "I-BELT",
    "REPAIRX-FCN"
   ]
  },
  "HALL-STOP3": {
   "name": "HALL-STOP3",
   "file": "rooms.zil",
   "line": 975,
   "endLine": 993,
   "desc": "Access Hallway",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "HALLWAY"
   ],
   "adjectives": [
    "ACCESS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have reached a junction in the hallway. The east/west hallway meets with a southern corridor.\" \"Photonic sensors detect a shift in reflective activity indicating a corridor\nwhich starts to the south.\" 0 \"East side, west side, all around the south.\" \"Standard robotic areas can be detected to the south.\">"
    ],
    "LINE": [
     "3"
    ],
    "STATION": [
     "HALL-STOP3"
    ],
    "CORRIDOR": [
     "6"
    ]
   },
   "exits": [
    {
     "to": "HUMAN-ENTRY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "HALL-STOP4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "HALL-STOP2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-STOP3\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (SOUTH TO HUMAN-ENTRY)\n      (EAST TO HALL-STOP4)\n      (WEST TO HALL-STOP2)\n      (ROOMDESCS <PLTABLE 0\n\"I have reached a junction in the hallway. The east/west hallway meets with a southern corridor.\"\n\"Photonic sensors detect a shift in reflective activity indicating a corridor\nwhich starts to the south.\"\n0\n\"East side, west side, all around the south.\"\n\"Standard robotic areas can be detected to the south.\">)\n      (DESC \"Access Hallway\")\n      (SYNONYM HALLWAY)\n      (ADJECTIVE ACCESS)\n      (LINE 3)\n      (STATION HALL-STOP3)\n      (CORRIDOR 6)>",
   "referencedBy": []
  },
  "REC-AREA": {
   "name": "REC-AREA",
   "file": "rooms.zil",
   "line": 995,
   "endLine": 1014,
   "desc": "Activities Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ACTIVI"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I'm in a small room with exits to the west and east. Sonar detects odd\nobjects within the room whose purpose eludes my perceptive abilities.\" \"There is a lot of vibrational and electrical activity within this location,\nthough none of its purposes seem immediately evident.\" 0 \"Ah. Just what I needed. A spot amid the jungle of worries -- a place to\nrelax, to call my own, to stretch out and enjoy myself.\" \"I have determined this area to be for the private use of Human visitors.\">"
    ],
    "LINE": [
     "4"
    ],
    "STATION": [
     "REC-AREA"
    ],
    "CORRIDOR": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "SLEEP-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "TOOL-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALL-STOP4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM REC-AREA\n      (IN ROOMS)\n      (DESC \"Activities Area\")\n      (SYNONYM ACTIVI)\n      (FLAGS RLANDBIT ONBIT)\n      (ROOMDESCS <PLTABLE 0\n\"I'm in a small room with exits to the west and east. Sonar detects odd\nobjects within the room whose purpose eludes my perceptive abilities.\"\n\"There is a lot of vibrational and electrical activity within this location,\nthough none of its purposes seem immediately evident.\"\n0\n\"Ah. Just what I needed. A spot amid the jungle of worries -- a place to\nrelax, to call my own, to stretch out and enjoy myself.\"\n\"I have determined this area to be for the private use of Human visitors.\">)\n      (EAST TO SLEEP-CHAMBER)\n      (WEST TO TOOL-AREA)\n      (SOUTH TO HALL-STOP4)\n      (LINE 4)\n      (STATION REC-AREA)\n      (CORRIDOR 1)>",
   "referencedBy": [
    "STU-1-F"
   ]
  },
  "HALL-STOP4": {
   "name": "HALL-STOP4",
   "file": "rooms.zil",
   "line": 1016,
   "endLine": 1027,
   "desc": "Hallway",
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
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I'm in an east/west hallway.\" \"I'm in an east/west hallway.\" \"I'm in an east/west hallway.\" \"I'm in an east/west hallway.\" \"I'm in an east/west hallway.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "HALL-STOP4"
    ],
    "CORRIDOR": [
     "2"
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
     "dir": "NORTH"
    },
    {
     "to": "HALL-STOP3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALL-STOP5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-STOP4\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO REC-AREA)\n      (WEST TO HALL-STOP3)\n      (EAST TO HALL-STOP5)\n      (ROOMDESCS <PLTABLE 0 \"I'm in an east/west hallway.\" \"I'm in an east/west hallway.\" \"I'm in an east/west hallway.\" \"I'm in an east/west hallway.\"\n\"I'm in an east/west hallway.\">)\n      (DESC \"Hallway\")\n      (LINE 5)\n      (STATION HALL-STOP4)\n      (CORRIDOR 2)>",
   "referencedBy": []
  },
  "SLEEP-CHAMBER": {
   "name": "SLEEP-CHAMBER",
   "file": "rooms.zil",
   "line": 1029,
   "endLine": 1046,
   "desc": "Sleep Chamber",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CHAMBER"
   ],
   "adjectives": [
    "SLEEP"
   ],
   "action": "SLEEP-CHAMBER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I'm in a small room which has flat extensions jutting from the walls.\" \"There seems to be a complete absence of activity in this area.\" 0 \"To sleep, perchance to dream. Ah, what foods these morsels be.\" \"CLC indicates this is a Human habitation area.\">"
    ],
    "LINE": [
     "4"
    ],
    "STATION": [
     "SLEEP-CHAMBER"
    ],
    "CORRIDOR": [
     "33"
    ]
   },
   "exits": [
    {
     "to": "HALL-STOP5",
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
     "dir": "WEST"
    }
   ],
   "contents": [
    "BEDS"
   ],
   "source": "<ROOM SLEEP-CHAMBER\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Sleep Chamber\")\n      (SYNONYM CHAMBER)\n      (ADJECTIVE SLEEP)\n      (ROOMDESCS <PLTABLE 0\n\"I'm in a small room which has flat extensions jutting from the walls.\"\n\"There seems to be a complete absence of activity in this area.\"\n0\n\"To sleep, perchance to dream. Ah, what foods these morsels be.\"\n\"CLC indicates this is a Human habitation area.\">)\n      (SOUTH TO HALL-STOP5)\n      (WEST TO REC-AREA)\n      (ACTION SLEEP-CHAMBER-FCN)\n      (LINE 4)\n      (STATION SLEEP-CHAMBER)\n      (CORRIDOR 33)>",
   "referencedBy": [
    "PARRIVE1",
    "PARRIVE2",
    "PEOPLE-GIVEN-BAG",
    "V-ALARM"
   ]
  },
  "HALL-STOP5": {
   "name": "HALL-STOP5",
   "file": "rooms.zil",
   "line": 1058,
   "endLine": 1077,
   "desc": "Hallway Corner",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CORNER"
   ],
   "adjectives": [
    "HALLWAY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"The east/west corridor ends here and starts off to the south. To the north\nis a small room.\" \"Sensory mechanisms detect a room to the north, a hallway to the west and to\nthe south.\" 0 \"Lemme see, which way did I go? Who am I, anyway? What am I doing here, and why am I asking all these questions? Life is so confusing.\" \"CLC peripheral device detected to the south.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "HALL-STOP5"
    ],
    "CORRIDOR": [
     "34"
    ]
   },
   "exits": [
    {
     "to": "SLEEP-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALL-T",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "HALL-STOP4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-STOP5\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Hallway Corner\")\n      (SYNONYM CORNER)\n      (ADJECTIVE HALLWAY)\n      (ROOMDESCS <PLTABLE 0\n\"The east/west corridor ends here and starts off to the south. To the north\nis a small room.\"\n\"Sensory mechanisms detect a room to the north, a hallway to the west and to\nthe south.\"\n0\n\"Lemme see, which way did I go? Who am I, anyway? What am I doing here, and why am I asking all these questions? Life is so confusing.\"\n\"CLC peripheral device detected to the south.\">)\n      (NORTH TO SLEEP-CHAMBER)\n      (SOUTH TO HALL-T)\n      (WEST TO HALL-STOP4)\n      (LINE 5)\n      (STATION HALL-STOP5)\n      (CORRIDOR 34)>",
   "referencedBy": []
  },
  "HALL-T": {
   "name": "HALL-T",
   "file": "rooms.zil",
   "line": 1079,
   "endLine": 1096,
   "desc": "Hallway Branch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "BRANCH"
   ],
   "adjectives": [
    "HALLWAY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I've reached a 'T' in the long, north/south hallway.\" \"Mechanical activity located to the east.\" 0 \"The wheels of fate lie to the east, as all philosophers know.\" \"CLC peripheral detected to the south.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "HALL-T"
    ],
    "CORRIDOR": [
     "32"
    ]
   },
   "exits": [
    {
     "to": "HALL-STOP5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FCMAINT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LOWER-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HALL-T\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Hallway Branch\")\n      (SYNONYM BRANCH)\n      (ADJECTIVE HALLWAY)\n      (ROOMDESCS <PLTABLE 0\n\"I've reached a 'T' in the long, north/south hallway.\"\n\"Mechanical activity located to the east.\"\n0\n\"The wheels of fate lie to the east, as all philosophers know.\"\n\"CLC peripheral detected to the south.\">)\n      (NORTH TO HALL-STOP5)\n      (EAST TO FCMAINT)\n      (SOUTH TO LOWER-CORE)\n      (LINE 5)\n      (STATION HALL-T)\n      (CORRIDOR 32)>",
   "referencedBy": []
  },
  "FCMAINT": {
   "name": "FCMAINT",
   "file": "rooms.zil",
   "line": 1098,
   "endLine": 1113,
   "desc": "Maintenance Access",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ACCESS"
   ],
   "adjectives": [
    "MAINTE"
   ],
   "action": "FCMAINT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I've reached the end of the eastern corridor. Before me, high overhead, is a strange combination of circular protuberances.\" \"Mechanical devices can be detected far out of range.\" 0 \"Round and round she goes, where she stops, nobody knows.\" \"CLC signals are weaker in this area.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "HALL-T"
    ]
   },
   "exits": [
    {
     "to": "HALL-T",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "WHEEL"
   ],
   "source": "<ROOM FCMAINT\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Maintenance Access\")\n      (SYNONYM ACCESS)\n      (ADJECTIVE MAINTE)\n      (ROOMDESCS <PLTABLE 0\n\"I've reached the end of the eastern corridor. Before me, high overhead, is a strange combination of circular protuberances.\"\n\"Mechanical devices can be detected far out of range.\"\n0\n\"Round and round she goes, where she stops, nobody knows.\"\n\"CLC signals are weaker in this area.\">)\n      (WEST TO HALL-T)\n      (LINE 5)\n      (STATION HALL-T)\n      (ACTION FCMAINT-FCN)>",
   "referencedBy": [
    "I-CHASEAUDA"
   ]
  },
  "LOWER-CORE": {
   "name": "LOWER-CORE",
   "file": "rooms.zil",
   "line": 1136,
   "endLine": 1155,
   "desc": "Library Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ENTRANCE"
   ],
   "adjectives": [
    "LIBRARY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar scan indicates the corridor continues to the south, but off to the west\nis a small, circular object before a huge, circular object.\" \"Huge electrical activity has been detected to the west.\" 0 \"The answers to none of our questions awaits, granting the whiz kid can\naudience to the west, which he can't, poor air-head.\" \"Library Core detected directly to the west.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "LOWER-CORE"
    ],
    "CORRIDOR": [
     "32"
    ]
   },
   "exits": [
    {
     "to": "INNER-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HALL-T",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HALL-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM LOWER-CORE\n      (IN ROOMS)\n      (DESC \"Library Entrance\")\n      (SYNONYM ENTRANCE)\n      (ADJECTIVE LIBRARY)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar scan indicates the corridor continues to the south, but off to the west\nis a small, circular object before a huge, circular object.\"\n\"Huge electrical activity has been detected to the west.\"\n0\n\"The answers to none of our questions awaits, granting the whiz kid can\naudience to the west, which he can't, poor air-head.\"\n\"Library Core detected directly to the west.\">)\n      (FLAGS RLANDBIT ONBIT)\n      (WEST TO INNER-CORE)\n      (NORTH TO HALL-T)\n      (SOUTH TO HALL-END)\n      (LINE 5)\n      (STATION LOWER-CORE)\n      (CORRIDOR 32)>",
   "referencedBy": []
  },
  "INNER-CORE": {
   "name": "INNER-CORE",
   "file": "rooms.zil",
   "line": 1157,
   "endLine": 1173,
   "desc": "Library Core",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CORE"
   ],
   "adjectives": [
    "LIBRARY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Before me is a huge cylinder, the CLC, which extends out of my sonar's scanning range.\" \"An interfacing device sits before me, capable of interacting with the huge\ndata flow behind it.\" 0 \"Ah, great master, tell all!\" \"Standing before the Library Core, the human-interactive peripheral. This\nperipheral allows no interaction with robots.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "LOWER-CORE"
    ]
   },
   "exits": [
    {
     "to": "LOWER-CORE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM INNER-CORE\n      (IN ROOMS)\n      (DESC \"Library Core\")\n      (SYNONYM CORE)\n      (ADJECTIVE LIBRARY)\n      (ROOMDESCS <PLTABLE 0\n\"Before me is a huge cylinder, the CLC, which extends out of my sonar's scanning range.\"\n\"An interfacing device sits before me, capable of interacting with the huge\ndata flow behind it.\"\n0\n\"Ah, great master, tell all!\"\n\"Standing before the Library Core, the human-interactive peripheral. This\nperipheral allows no interaction with robots.\">)\n      (FLAGS RLANDBIT ONBIT)\n      (EAST TO LOWER-CORE)\n      (LINE 5)\n      (STATION LOWER-CORE)>",
   "referencedBy": [
    "ENOUGH-TRADING",
    "PEOPLE-GIVEN-BAG",
    "I-PEOPLE2",
    "I-CHASEAUDA",
    "I-STARCROSS"
   ]
  },
  "HALL-END": {
   "name": "HALL-END",
   "file": "rooms.zil",
   "line": 1175,
   "endLine": 1193,
   "desc": "Hallway End",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "END"
   ],
   "adjectives": [
    "HALLWAY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects the end of the southern hallway. To the east is a long, narrow\narea which travels out of my receiving range.\" \"Sensory input indicates the end of the southern hallway here, with extremely\nviolent force fields and electrical disturbances to the east.\" \"I can hear the crackling of ozone in the air to the east.\" \"This path through life may be more dangerous than it looks. After all, appearances can be deceiving.\" \"CLC warns that the area to the east is dangerous.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "HALL-END"
    ],
    "CORRIDOR": [
     "96"
    ]
   },
   "exits": [
    {
     "to": "LOWER-CORE",
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
     "message": "CLC WARNING: Dangerous force fields prevent eastern movement.",
     "dir": "EAST"
    }
   ],
   "contents": [
    "CAR"
   ],
   "source": "<ROOM HALL-END\n      (IN ROOMS)\n      (DESC \"Hallway End\")\n      (SYNONYM END)\n      (ADJECTIVE HALLWAY)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects the end of the southern hallway. To the east is a long, narrow\narea which travels out of my receiving range.\"\n\"Sensory input indicates the end of the southern hallway here, with extremely\nviolent force fields and electrical disturbances to the east.\"\n\"I can hear the crackling of ozone in the air to the east.\"\n\"This path through life may be more dangerous than it looks. After all, appearances can be deceiving.\"\n\"CLC warns that the area to the east is dangerous.\">)\n      (NORTH TO LOWER-CORE)\n      (EAST \"CLC WARNING: Dangerous force fields prevent eastern movement.\")\n      (FLAGS RLANDBIT ONBIT)\n      (LINE 5)\n      (STATION HALL-END)\n      (CORRIDOR 96)>",
   "referencedBy": [
    "MOVE-RBT?",
    "I-PEOPLE4",
    "PARRIVE4",
    "I-CAR-WAIT",
    "I-KILL",
    "V-LOOK",
    "V-BOARD"
   ]
  },
  "CORRIDOR-4": {
   "name": "CORRIDOR-4",
   "file": "rooms.zil",
   "line": 1195,
   "endLine": 1216,
   "desc": "Short Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CORRID"
   ],
   "adjectives": [
    "SHORT"
   ],
   "action": "BEWARE-MIST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIRING"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have reached a place in the corridor where the floor rises up to the northeast. Sonar can detect a huge open area directly to the east.\" \"Wiring etched into the walls branches off to the northeast from here, while an incredibly powerful source of energy is easily detectable to the east.\" \"I can hear a difference in the air currents and air conditioning circuits here\nas if another passage started to the northeast.\" \"The great interpreter of all our daily occurences lies ahead, while a walk in\nthe sky waits for me to the northeast.\" \"CLC indicates I have arrived at a northeast branch in the corridor.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "CORRIDOR-4"
    ],
    "CORRIDOR": [
     "144"
    ]
   },
   "exits": [
    {
     "to": "CORRIDOR-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "NE-PASSAGE1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "ACIDMIST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM CORRIDOR-4\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Short Corridor\")\n      (SYNONYM CORRID)\n      (ADJECTIVE SHORT)\n      (ROOMDESCS <PLTABLE 0\n\"I have reached a place in the corridor where the floor rises up to the northeast. Sonar can detect a huge open area directly to the east.\"\n\"Wiring etched into the walls branches off to the northeast from here, while an incredibly powerful source of energy is easily detectable to the east.\"\n\"I can hear a difference in the air currents and air conditioning circuits here\nas if another passage started to the northeast.\"\n\"The great interpreter of all our daily occurences lies ahead, while a walk in\nthe sky waits for me to the northeast.\"\n\"CLC indicates I have arrived at a northeast branch in the corridor.\" >)\n      (WEST TO CORRIDOR-3)\n      (NE TO NE-PASSAGE1)\n      (EAST TO ACIDMIST)\n      (LINE 2)\n      (STATION CORRIDOR-4)\n      (CORRIDOR 144)\n      (ACTION BEWARE-MIST-FCN)\n      (GLOBAL WIRING)>",
   "referencedBy": [
    "MOVE-RBT?",
    "I-CHASEAUDA",
    "I-TREMOR1"
   ]
  },
  "NE-PASSAGE1": {
   "name": "NE-PASSAGE1",
   "file": "rooms.zil",
   "line": 1232,
   "endLine": 1249,
   "desc": "Rising Passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PASSAGE"
   ],
   "adjectives": [
    "RISING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I am on an inclined surface which continues northeast and southwest. The\nslant of the floor here indicates that I am between levels.\" \"Internal mechanisms indicate this area joins two different levels.\" \"Far off, near the top of this rising passage, I can hear a loud wind.\" \"Like levels of the Inferno, I slide into despair and climb to new heights.\" \"CLC internally informs me I am between the Main level and the Skywalk.\">"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "NE-PASSAGE1"
    ],
    "CORRIDOR": [
     "128"
    ]
   },
   "exits": [
    {
     "to": "CORRIDOR-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "NE-PASSAGE2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM NE-PASSAGE1\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (SW TO CORRIDOR-4)\n      (NE TO NE-PASSAGE2)\n      (DESC \"Rising Passage\")\n      (SYNONYM PASSAGE)\n      (ADJECTIVE RISING)\n      (ROOMDESCS <PLTABLE 0\n\"I am on an inclined surface which continues northeast and southwest. The\nslant of the floor here indicates that I am between levels.\"\n\"Internal mechanisms indicate this area joins two different levels.\"\n\"Far off, near the top of this rising passage, I can hear a loud wind.\"\n\"Like levels of the Inferno, I slide into despair and climb to new heights.\"\n\"CLC internally informs me I am between the Main level and the Skywalk.\">)\n      (LINE 0)\n      (STATION NE-PASSAGE1)\n      (CORRIDOR 128)>",
   "referencedBy": []
  },
  "NE-PASSAGE2": {
   "name": "NE-PASSAGE2",
   "file": "rooms.zil",
   "line": 1253,
   "endLine": 1276,
   "desc": "Top Passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "PASSAGE"
   ],
   "adjectives": [
    "TOP"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I am at the top of a passage which descends to the southwest. Before me, to\nthe north, is the entrance to an east/west walkway.\" \"Internal sensory mechanisms indicate an area of violent motion lies to the\nnorth, while internal mapping indicates a descending passage to the southwest.\" \"The roar of wind comes from the north and is overwhelming. Turning down my\naudio-sensitivity.\" \"Whisk me away, zip me today.|\nCome out far, far far away.|\nMail me home, pop me to stay|\nFlung to the north, where I can't say.\" \"CLC indicates I am directly to the south of the Skywalk. A passage descends\nto the southwest.\">"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "NE-PASSAGE2"
    ],
    "CORRIDOR": [
     "128"
    ]
   },
   "exits": [
    {
     "to": "NE-PASSAGE1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "SKY1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NE-PASSAGE2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Top Passage\")\n      (SYNONYM PASSAGE)\n      (ADJECTIVE TOP)\n      (SW TO NE-PASSAGE1)\n      (NORTH TO SKY1)\n      (ROOMDESCS <PLTABLE 0 \n\"I am at the top of a passage which descends to the southwest. Before me, to\nthe north, is the entrance to an east/west walkway.\"\n\"Internal sensory mechanisms indicate an area of violent motion lies to the\nnorth, while internal mapping indicates a descending passage to the southwest.\"\n\"The roar of wind comes from the north and is overwhelming. Turning down my\naudio-sensitivity.\"\n\"Whisk me away, zip me today.|\nCome out far, far far away.|\nMail me home, pop me to stay|\nFlung to the north, where I can't say.\"\n\"CLC indicates I am directly to the south of the Skywalk. A passage descends\nto the southwest.\" >)\n      (LINE 0)\n      (STATION NE-PASSAGE2)\n      (CORRIDOR 128)>",
   "referencedBy": []
  },
  "SKY1": {
   "name": "SKY1",
   "file": "rooms.zil",
   "line": 1278,
   "endLine": 1298,
   "desc": "Skywalk Alpha",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "ALPHA"
   ],
   "adjectives": [
    "SKYWAL"
   ],
   "action": "SKY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects a long tube directly to the north, while the skywalk continues\nto the west from here.\" \"Sensory receptors detect incredible electrical and ionic disturbances coming\nfrom the north of here.\" \"I can hear the tremendous roar of wind in a tunnel to the north.\" \"Pop the message in the tube and out comes the medium massage.\" \"This area is described by the CLC as a transporter tube.\">"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "SKY1"
    ],
    "CORRIDOR": [
     "256"
    ]
   },
   "exits": [
    {
     "to": "NE-PASSAGE2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SKY2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "WEATHER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SKY1\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Skywalk Alpha\")\n      (SYNONYM ALPHA)\n      (ADJECTIVE SKYWAL)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects a long tube directly to the north, while the skywalk continues\nto the west from here.\"\n\"Sensory receptors detect incredible electrical and ionic disturbances coming\nfrom the north of here.\"\n\"I can hear the tremendous roar of wind in a tunnel to the north.\"\n\"Pop the message in the tube and out comes the medium massage.\"\n\"This area is described by the CLC as a transporter tube.\">)\n      (SOUTH TO NE-PASSAGE2)\n      (WEST TO SKY2)\n      (NORTH TO WEATHER)\n      (ACTION SKY-FCN)\n      (LINE 0)\n      (STATION SKY1)\n      (CORRIDOR 256)>",
   "referencedBy": [
    "SKY-FCN"
   ]
  },
  "SKY2": {
   "name": "SKY2",
   "file": "rooms.zil",
   "line": 1300,
   "endLine": 1323,
   "desc": "Skywalk Beta",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "BETA"
   ],
   "adjectives": [
    "SKYWAL"
   ],
   "action": "SKY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects a long tube directly to the north, while the skywalk continues\nto the east and west of here.\" \"Sensory receptors detect incredible electrical and ionic disturbances coming\nfrom the north of here. Similar disturbances can be detected from the east and\nwest.\" \"I can hear the tremendous roar of wind in a tunnel to the north. An exact\nduplication of this sound can be detected from the east and west, though their\nintensities are somewhat less.\" \"Pop the message in the tube and out comes the medium rare.\" \"This area is described by the CLC as a transporter tube.\">"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "SKY2"
    ],
    "CORRIDOR": [
     "256"
    ]
   },
   "exits": [
    {
     "to": "SKY1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SKY3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "HYDRO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SKY2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Skywalk Beta\")\n      (SYNONYM BETA)\n      (ADJECTIVE SKYWAL)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects a long tube directly to the north, while the skywalk continues\nto the east and west of here.\"\n\"Sensory receptors detect incredible electrical and ionic disturbances coming\nfrom the north of here. Similar disturbances can be detected from the east and\nwest.\"\n\"I can hear the tremendous roar of wind in a tunnel to the north. An exact\nduplication of this sound can be detected from the east and west, though their\nintensities are somewhat less.\"\n\"Pop the message in the tube and out comes the medium rare.\"\n\"This area is described by the CLC as a transporter tube.\">)\n      (EAST TO SKY1)\n      (WEST TO SKY3)\n      (NORTH TO HYDRO)\n      (ACTION SKY-FCN)\n      (LINE 0)\n      (STATION SKY2)\n      (CORRIDOR 256)>",
   "referencedBy": [
    "SKY-FCN"
   ]
  },
  "SKY3": {
   "name": "SKY3",
   "file": "rooms.zil",
   "line": 1325,
   "endLine": 1344,
   "desc": "Skywalk Gamma",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "GAMMA"
   ],
   "adjectives": [
    "SKYWAL"
   ],
   "action": "SKY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects a long tube directly to the north, while the skywalk continues\nto the east from here.\" \"Sensory receptors detect incredible electrical and ionic disturbances coming\nfrom the north of here.\" \"I can hear the tremendous roar of wind in a tunnel to the north.\" \"Pop the message in the tube and out comes the medium massage.\" \"This area is described by the CLC as a transporter tube.\">"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "SKY3"
    ],
    "CORRIDOR": [
     "256"
    ]
   },
   "exits": [
    {
     "to": "RTD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SKY2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SKY3\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Skywalk Gamma\")\n      (SYNONYM GAMMA)\n      (ADJECTIVE SKYWAL)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects a long tube directly to the north, while the skywalk continues\nto the east from here.\"\n\"Sensory receptors detect incredible electrical and ionic disturbances coming\nfrom the north of here.\"\n\"I can hear the tremendous roar of wind in a tunnel to the north.\"\n\"Pop the message in the tube and out comes the medium massage.\"\n\"This area is described by the CLC as a transporter tube.\">)\n      (NORTH TO RTD)\n      (EAST TO SKY2)\n      (ACTION SKY-FCN)\n      (LINE 0)\n      (STATION SKY3)\n      (CORRIDOR 256)>",
   "referencedBy": [
    "SKY-FCN"
   ]
  },
  "WEATHER": {
   "name": "WEATHER",
   "file": "rooms.zil",
   "line": 1359,
   "endLine": 1374,
   "desc": "Weather Control Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CONTRO"
   ],
   "adjectives": [
    "WEATHE"
   ],
   "action": "DESCRIBE-CONTROLS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROL-PANELS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I'm in a small area at the end of the jet tube. Sonar detects a small console within reach of my extensions and mounted on this panel are three dials.\" \"I'm in a small but electrically intensive area. I can detect three variable potentiometers on a small console.\" 0 \"Slippin' 'n' slidin', turn the dials and we'll be ridin'.\" 0>"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "SKY1"
    ]
   },
   "exits": [
    {
     "to": "SKY1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "WDIAL1",
    "WDIAL3",
    "WDIAL2",
    "DIALS"
   ],
   "source": "<ROOM WEATHER\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Weather Control Area\")\n      (SYNONYM CONTRO)\n      (ADJECTIVE WEATHE)\n      (GLOBAL CONTROL-PANELS)\n      (ROOMDESCS <PLTABLE 0\n\"I'm in a small area at the end of the jet tube. Sonar detects a small console within reach of my extensions and mounted on this panel are three dials.\"\n\"I'm in a small but electrically intensive area. I can detect three variable potentiometers on a small console.\"\n0\n\"Slippin' 'n' slidin', turn the dials and we'll be ridin'.\" 0>)\n      (SOUTH TO SKY1)\n      (LINE 0)\n      (STATION SKY1)\n      (ACTION DESCRIBE-CONTROLS-FCN)>",
   "referencedBy": [
    "WEATHER-ROBOTS",
    "SKY-FCN",
    "DESCRIBE-CONTROLS-FCN"
   ]
  },
  "HYDRO": {
   "name": "HYDRO",
   "file": "rooms.zil",
   "line": 1395,
   "endLine": 1415,
   "desc": "Hydroponics Control Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CONTRO"
   ],
   "adjectives": [
    "HYDROP"
   ],
   "action": "DESCRIBE-CONTROLS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROL-PANELS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have entered a small room. My sonar units and delicate touching extensions\nindicate there are a series of three levers on a small panel.\" \"I am in a small room whose primary purpose is obvious by tracing the flow of\nelectrons. The three levers before me are linked to the Hydroponics section,\nand they control the nutrient levels in the hydroponics tanks.\" 0 \"Push a lever and out pops a food pellet. What a life for a rat.\" \"I'm in the Hydroponics Control area. CLC indicates that the three levers on\nthe small panel are for mixing nutrient levels. More data on levers available at the CLC Technical Peripheral.\">"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "SKY2"
    ]
   },
   "exits": [
    {
     "to": "SKY2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "LEVER1",
    "LEVER3",
    "LEVER2",
    "G-LEVERS"
   ],
   "source": "<ROOM HYDRO\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Hydroponics Control Area\")\n      (SYNONYM CONTRO)\n      (ADJECTIVE HYDROP)\n      (ROOMDESCS <PLTABLE 0\n\"I have entered a small room. My sonar units and delicate touching extensions\nindicate there are a series of three levers on a small panel.\"\n\"I am in a small room whose primary purpose is obvious by tracing the flow of\nelectrons. The three levers before me are linked to the Hydroponics section,\nand they control the nutrient levels in the hydroponics tanks.\"\n0\n\"Push a lever and out pops a food pellet. What a life for a rat.\"\n\"I'm in the Hydroponics Control area. CLC indicates that the three levers on\nthe small panel are for mixing nutrient levels. More data on levers available at the CLC Technical Peripheral.\">)\n      (SOUTH TO SKY2)\n      (LINE 0)\n      (STATION SKY2)\n      (ACTION DESCRIBE-CONTROLS-FCN)\n      (GLOBAL CONTROL-PANELS)>",
   "referencedBy": [
    "WEATHER-ROBOTS",
    "SKY-FCN"
   ]
  },
  "RTD": {
   "name": "RTD",
   "file": "rooms.zil",
   "line": 1417,
   "endLine": 1439,
   "desc": "Transit Control Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CONTRO"
   ],
   "adjectives": [
    "TRANSI"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CONTROL-PANELS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I am in a tiny room. Sonar can detect three bumps on a panel before me.\" \"I am in a room which has three switching devices. These devices connect directly to the surface.\" 0 \"Hacks and Hackies, drivers all.|\nControl the flow and nothing falls|\nExcept for those up in the air|\nBut all in all, what's best is fair.|\nThey roam around in tough young gangs|\nand corner those with metal fangs|\nThey zip along and throw you free|\nLike Broncos on the wild prairie.\" \"CLC indicates there are switching devices for all surface transportation in this room.\">"
    ],
    "LINE": [
     "0"
    ],
    "STATION": [
     "SKY3"
    ]
   },
   "exits": [
    {
     "to": "SKY3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "SWITCH1",
    "SWITCH3",
    "SWITCH2"
   ],
   "source": "<ROOM RTD\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Transit Control Area\")\n      (SYNONYM CONTRO)\n      (ADJECTIVE TRANSI)\n      (ROOMDESCS <PLTABLE 0\n\"I am in a tiny room. Sonar can detect three bumps on a panel before me.\"\n\"I am in a room which has three switching devices. These devices connect directly to the surface.\"\n0\n\"Hacks and Hackies, drivers all.|\nControl the flow and nothing falls|\nExcept for those up in the air|\nBut all in all, what's best is fair.|\nThey roam around in tough young gangs|\nand corner those with metal fangs|\nThey zip along and throw you free|\nLike Broncos on the wild prairie.\"\n\"CLC indicates there are switching devices for all surface transportation in this room.\">)\n      (SOUTH TO SKY3)\n      (LINE 0)\n      (STATION SKY3)\n      (GLOBAL CONTROL-PANELS)>",
   "referencedBy": [
    "WEATHER-ROBOTS",
    "SKY-FCN"
   ]
  },
  "ACIDMIST": {
   "name": "ACIDMIST",
   "file": "rooms.zil",
   "line": 1441,
   "endLine": 1455,
   "desc": "Cavernous Room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CAVERNOUS"
   ],
   "adjectives": [],
   "action": "ACIDMIST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects a large open area, with three huge objects far off to the east.\" \"Photon receptors indicate this area is extremely large.\" \"I can hear distant machinery humming from the east.\" \"Twice the size of life, this area makes me feel like a dwarf.\" 0>"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "ACIDMIST"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "CORRIDOR-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MIDMIST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM ACIDMIST\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Cavernous Room\")\n      (SYNONYM CAVERNOUS)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects a large open area, with three huge objects far off to the east.\"\n\"Photon receptors indicate this area is extremely large.\"\n\"I can hear distant machinery humming from the east.\" \"Twice the size of life, this area makes me feel like a dwarf.\" 0>)\n      (WEST TO CORRIDOR-4)\n      (EAST TO MIDMIST)\n      (ACTION ACIDMIST-FCN)\n      (LINE 2)\n      (STATION ACIDMIST)\n      (CORRIDOR 16)>",
   "referencedBy": [
    "MOVE-RBT?",
    "I-TREMOR1"
   ]
  },
  "MIDMIST": {
   "name": "MIDMIST",
   "file": "rooms.zil",
   "line": 1480,
   "endLine": 1500,
   "desc": "East End",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "END"
   ],
   "adjectives": [
    "EAST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I have reached the east end of the huge open area. Directly before me is the\nentrance into the lower reaches of the Beta FC. Access to the other computers is available through the northeast and southeast.\" \"This is incredible. The amount of energy flowing around me makes it difficult\nto keep myself oriented. Directly before me is the entrance into the huge FC.\" \"I can hear the huge fans which have to be associated with the FCs.\" \"Ah, Mama! Here I am, your sonny boy, returned after a lifetime of wandering!\" \"CLC transmits a welcome signal originating from the Beta FC, directly before me.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "MIDMIST"
    ],
    "CORRIDOR": [
     "16"
    ]
   },
   "exits": [
    {
     "to": "ACIDMIST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FC3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "FC2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FC1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM MIDMIST\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"East End\")\n      (SYNONYM END)\n      (ADJECTIVE EAST)\n      (ROOMDESCS <PLTABLE 0\n\"I have reached the east end of the huge open area. Directly before me is the\nentrance into the lower reaches of the Beta FC. Access to the other computers is available through the northeast and southeast.\"\n\"This is incredible. The amount of energy flowing around me makes it difficult\nto keep myself oriented. Directly before me is the entrance into the huge FC.\"\n\"I can hear the huge fans which have to be associated with the FCs.\"\n\"Ah, Mama! Here I am, your sonny boy, returned after a lifetime of wandering!\"\n\"CLC transmits a welcome signal originating from the Beta FC, directly before me.\">)\n      (WEST TO ACIDMIST)\n      (SE TO FC3)\n      (EAST TO FC2)\n      (NE TO FC1)\n      (LINE 2)\n      (STATION MIDMIST)\n      (CORRIDOR 16)>",
   "referencedBy": []
  },
  "FC3": {
   "name": "FC3",
   "file": "rooms.zil",
   "line": 1502,
   "endLine": 1519,
   "desc": "Gamma FC",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "FC"
   ],
   "adjectives": [
    "GAMMA"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRCON"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sensors detect a small, narrow tube to the north of here, while surrounding me is a huge object, the Gamma FC itself.\" \"Sensory mechanisms detect a tremendous channeling and flow of electrical and\ndata energy into an object surrounding me. Sensors detect a similar channeling to an object to the north.\" 0 \"The third stage of our journey begins here, the music goes round and round.\" \"I stand within the third Filtering Computer, a massive device used to interface us with you and control the surface systems.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "FC3"
    ]
   },
   "exits": [
    {
     "to": "TUBE1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "MIDMIST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM FC3\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Gamma FC\")\n      (SYNONYM FC)\n      (ADJECTIVE GAMMA)\n      (ROOMDESCS <PLTABLE 0\n\"Sensors detect a small, narrow tube to the north of here, while surrounding me is a huge object, the Gamma FC itself.\"\n\"Sensory mechanisms detect a tremendous channeling and flow of electrical and\ndata energy into an object surrounding me. Sensors detect a similar channeling to an object to the north.\"\n0\n\"The third stage of our journey begins here, the music goes round and round.\"\n\"I stand within the third Filtering Computer, a massive device used to interface us with you and control the surface systems.\">)\n      (NORTH TO TUBE1)\n      (NW TO MIDMIST)\n      (LINE 2)\n      (STATION FC3)\n      (GLOBAL AIRCON)>",
   "referencedBy": []
  },
  "TUBE1": {
   "name": "TUBE1",
   "file": "rooms.zil",
   "line": 1521,
   "endLine": 1543,
   "desc": "Secondary Channel",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CHANNEL"
   ],
   "adjectives": [
    "SECOND"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CABLES",
    "TVHOLE",
    "SIGNPOST"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I've entered a narrow tube which rests on a north/south axis. Many cables of small diameter travel within this tube, side by side in a groove. Sonar also detects a small hole in the side of the tube. Above this hole is a recessed sign.\" \"Sensory mechanisms detect the disquieting flow of electricity within this\ntube. The flow is concentrated within the small cables which line a groove in the floor. There is a small hole in the wall of the tube awaiting a plug, while slightly higher up rests a sign.\" \"I can hear whirring and clicking as if of some hungry beast to the north and\nsouth here.\" \"Connections are what make life worth living. In each direction we find our\nsource of disorientation, our metaphysical essence. Linkups are possible,\nconnecting our distant cousin with our essence, our very presence here. There's a signpost overhead -- the next stop...\" \"CLC tagged location indicates I am within a connecting tube. The connecting\ncables for the filtering computers line this floor, resting in their grooves. A small plug, PL-1, sits within the wall beneath the ACS.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "TUBE1"
    ]
   },
   "exits": [
    {
     "to": "FC2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FC3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "GROOVE1"
   ],
   "source": "<ROOM TUBE1\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Secondary Channel\")\n      (SYNONYM CHANNEL)\n      (ADJECTIVE SECOND)\n      (ROOMDESCS <PLTABLE 0\n\"I've entered a narrow tube which rests on a north/south axis. Many cables of small diameter travel within this tube, side by side in a groove. Sonar also detects a small hole in the side of the tube. Above this hole is a recessed sign.\"\n\"Sensory mechanisms detect the disquieting flow of electricity within this\ntube. The flow is concentrated within the small cables which line a groove in the floor. There is a small hole in the wall of the tube awaiting a plug, while slightly higher up rests a sign.\"\n\"I can hear whirring and clicking as if of some hungry beast to the north and\nsouth here.\"\n\"Connections are what make life worth living. In each direction we find our\nsource of disorientation, our metaphysical essence. Linkups are possible,\nconnecting our distant cousin with our essence, our very presence here. There's a signpost overhead -- the next stop...\"\n\"CLC tagged location indicates I am within a connecting tube. The connecting\ncables for the filtering computers line this floor, resting in their grooves. A small plug, PL-1, sits within the wall beneath the ACS.\">)\n      (NORTH TO FC2)\n      (SOUTH TO FC3)\n      (GLOBAL CABLES TVHOLE SIGNPOST)\n      ;(ACTION TUBE-FCN)\n      (LINE 2)\n      (STATION TUBE1)>",
   "referencedBy": [
    "TV-FCN",
    "ORANGE-WIRE-FCN",
    "ITAKE",
    "DO-THE-TV"
   ]
  },
  "FC2": {
   "name": "FC2",
   "file": "rooms.zil",
   "line": 1556,
   "endLine": 1579,
   "desc": "Beta FC",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "FC"
   ],
   "adjectives": [
    "BETA"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIRING",
    "AIRCON"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I am standing inside a structure of incredible complexity. A narrow tube runs\nto the north, while another one runs to the south. Another tunnel-like tube\nleads to the west.\" \"I am within an immense device which contains immeasurable circuitry and\nswitching devices. I can detect connections to the north and south of this\ndevice.\" \"I can hear the tremendous roar of air conditioning here. Air currents flow to\nthe north, the west, and the south.\" \"Amid the nervous neurons, the synaptic links make jumps akin to imagination\nfound only in Wonderland.\" \"I am within the Beta FC.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "FC2"
    ]
   },
   "exits": [
    {
     "to": "TUBE2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TUBE1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "MIDMIST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM FC2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Beta FC\")\n      (SYNONYM FC)\n      (ADJECTIVE BETA)\n      (ROOMDESCS <PLTABLE 0\n\"I am standing inside a structure of incredible complexity. A narrow tube runs\nto the north, while another one runs to the south. Another tunnel-like tube\nleads to the west.\"\n\"I am within an immense device which contains immeasurable circuitry and\nswitching devices. I can detect connections to the north and south of this\ndevice.\"\n\"I can hear the tremendous roar of air conditioning here. Air currents flow to\nthe north, the west, and the south.\"\n\"Amid the nervous neurons, the synaptic links make jumps akin to imagination\nfound only in Wonderland.\"\n\"I am within the Beta FC.\">)\n      (NORTH TO TUBE2)\n      (SOUTH TO TUBE1)\n      (WEST TO MIDMIST)\n      (LINE 2)\n      (STATION FC2)\n      (GLOBAL WIRING AIRCON)>",
   "referencedBy": []
  },
  "TUBE2": {
   "name": "TUBE2",
   "file": "rooms.zil",
   "line": 1581,
   "endLine": 1604,
   "desc": "Primary Channel",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CHANNEL"
   ],
   "adjectives": [
    "PRIMARY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CABLES",
    "TVHOLE",
    "SIGNPOST"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"I've entered a narrow tube which rests on a north/south axis. Many cables travel within this tube, each one resting on the groove in the floor. Sonar also detects a small hole in the side of the tube, right below a recessed sign.\" \"Sensory mechanisms detect the disquieting flow of electricity within this\ntube. The flow is concentrated within the small cables which line the floor.\nThere is a small hole in the wall of the tube awaiting a plug. Above this hole is a sign.\" \"I can hear whirring and clicking as if of some hungry beast to the north and\nsouth here.\" \"Connections are what make life worth living. In each direction we find our\nsource of disorientation, our metaphysical essence. Linkups are possible,\nconnecting our distant cousin with our essence. There's a signpost up ahead -- the next stop, the Ozonezone.\" \"CLC tagged location indicates I am within a connecting tube. The connecting\ncables for the filtering computers line this floor, resting in their\nindividual grooves. A small plug, PL-1, sits within the wall, right below the ACS.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "TUBE2"
    ]
   },
   "exits": [
    {
     "to": "FC1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FC2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "GROOVE2"
   ],
   "source": "<ROOM TUBE2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Primary Channel\")\n      (SYNONYM CHANNEL)\n      (ADJECTIVE PRIMARY)\n      (ROOMDESCS <PLTABLE 0\n\"I've entered a narrow tube which rests on a north/south axis. Many cables travel within this tube, each one resting on the groove in the floor. Sonar also detects a small hole in the side of the tube, right below a recessed sign.\"\n\"Sensory mechanisms detect the disquieting flow of electricity within this\ntube. The flow is concentrated within the small cables which line the floor.\nThere is a small hole in the wall of the tube awaiting a plug. Above this hole is a sign.\"\n\"I can hear whirring and clicking as if of some hungry beast to the north and\nsouth here.\"\n\"Connections are what make life worth living. In each direction we find our\nsource of disorientation, our metaphysical essence. Linkups are possible,\nconnecting our distant cousin with our essence. There's a signpost up ahead -- the next stop, the Ozonezone.\"\n\"CLC tagged location indicates I am within a connecting tube. The connecting\ncables for the filtering computers line this floor, resting in their\nindividual grooves. A small plug, PL-1, sits within the wall, right below the ACS.\">)\n      (NORTH TO FC1)\n      (SOUTH TO FC2)\n      (GLOBAL CABLES TVHOLE SIGNPOST)\n      (LINE 2)\n      (STATION TUBE2)>",
   "referencedBy": [
    "REDWIRE-FCN",
    "TV-FCN",
    "GROOVE-CONT",
    "ITAKE",
    "V-POINT",
    "DO-THE-TV"
   ]
  },
  "FC1": {
   "name": "FC1",
   "file": "rooms.zil",
   "line": 1606,
   "endLine": 1622,
   "desc": "Alpha FC",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "FC"
   ],
   "adjectives": [
    "ALPHA"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRCON"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sensors detect a small, narrow tube to the south of here, while surrounding me is a huge object, the Alpha FC.\" \"Sensory mechanisms detect a tremendous channeling and flow of electrical and\ndata energy into an object surrounding me. Sensors detect a similar channeling to an object to the south.\" 0 \"The first stage of our journey begins here, the music goes round and round.\" \"I stand within the first Filtering Computer, a massive device used to interface us with you and maintain the surface systems.\">"
    ],
    "LINE": [
     "2"
    ],
    "STATION": [
     "FC1"
    ]
   },
   "exits": [
    {
     "to": "TUBE2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM FC1\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Alpha FC\")\n      (SYNONYM FC)\n      (ADJECTIVE ALPHA)\n      (ROOMDESCS <PLTABLE 0\n\"Sensors detect a small, narrow tube to the south of here, while surrounding me is a huge object, the Alpha FC.\"\n\"Sensory mechanisms detect a tremendous channeling and flow of electrical and\ndata energy into an object surrounding me. Sensors detect a similar channeling to an object to the south.\"\n0\n\"The first stage of our journey begins here, the music goes round and round.\"\n\"I stand within the first Filtering Computer, a massive device used to interface us with you and maintain the surface systems.\">)\n      (SOUTH TO TUBE2)\n      (LINE 2)\n      (STATION FC1)\n      (GLOBAL AIRCON)>",
   "referencedBy": []
  },
  "CAR-AREA": {
   "name": "CAR-AREA",
   "file": "rooms.zil",
   "line": 1624,
   "endLine": 1642,
   "desc": "Vehicle Debarkation Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "DEBARK"
   ],
   "adjectives": [
    "VEHICL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects the end of the southern hallway. To the west is a long, narrow\narea which travels out of my receiving range.\" \"Sensory input indicates the end of the southern hallway here, with extremely\nviolent force fields and electrical disturbances to the west.\" \"I can hear the crackling of ozone in the air to the west.\" \"I got my license through the mail, but that never stopped Franklin from chancing my ability.\" \"CLC warns that the area to the west is dangerous.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "CAR-AREA"
    ],
    "CORRIDOR": [
     "64"
    ]
   },
   "exits": [
    {
     "to": "BIO-INT",
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
     "message": "CLC WARNING: Dangerous force fields prevent western movement.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM CAR-AREA\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Vehicle Debarkation Area\")\n      (SYNONYM DEBARK)\n      (ADJECTIVE VEHICL)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects the end of the southern hallway. To the west is a long, narrow\narea which travels out of my receiving range.\"\n\"Sensory input indicates the end of the southern hallway here, with extremely\nviolent force fields and electrical disturbances to the west.\"\n\"I can hear the crackling of ozone in the air to the west.\"\n\"I got my license through the mail, but that never stopped Franklin from chancing my ability.\"\n\"CLC warns that the area to the west is dangerous.\">)\n      (NORTH TO BIO-INT)\n      (WEST \"CLC WARNING: Dangerous force fields prevent western movement.\")\n      (LINE 5)\n      (STATION CAR-AREA)\n      (CORRIDOR 64)>",
   "referencedBy": [
    "MOVE-RBT?",
    "PARRIVE4",
    "V-CONFIGURE",
    "V-LOOK",
    "V-BOARD"
   ]
  },
  "BIO-INT": {
   "name": "BIO-INT",
   "file": "rooms.zil",
   "line": 1644,
   "endLine": 1661,
   "desc": "Biology Corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CORRID"
   ],
   "adjectives": [
    "BIOLOG"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects an intersection with a narrow passageway leading off to the\nwest.\" \"My sensory apparatus detects some strange vibrational emanations coming from both the north and the west. The area to the south is rife with destructive ionic activity.\" 0 \"We know where we were born, and now we are approaching your area of rebirth.\" \"CLC tagged area indicates the Biological Section contains materials potentially dangerous to your survival.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "BIO-INT"
    ]
   },
   "exits": [
    {
     "to": "CRYOUNITS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CAR-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BIO-LAB",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BIO-INT\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Biology Corridor\")\n      (SYNONYM CORRID)\n      (ADJECTIVE BIOLOG)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects an intersection with a narrow passageway leading off to the\nwest.\"\n\"My sensory apparatus detects some strange vibrational emanations coming from both the north and the west. The area to the south is rife with destructive ionic activity.\"\n0\n\"We know where we were born, and now we are approaching your area of rebirth.\"\n\"CLC tagged area indicates the Biological Section contains materials potentially dangerous to your survival.\">)\n      (NORTH TO CRYOUNITS)\n      (SOUTH TO CAR-AREA)\n      (WEST TO BIO-LAB)\n      (LINE 5)\n      (STATION BIO-INT)>",
   "referencedBy": [
    "V-CONFIGURE"
   ]
  },
  "BIO-LAB": {
   "name": "BIO-LAB",
   "file": "rooms.zil",
   "line": 1663,
   "endLine": 1681,
   "desc": "Biological Laboratory",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "LABORA",
    "LAB"
   ],
   "adjectives": [
    "BIOLOG"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIRING"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Sonar detects a large structure within this room. The large structure sits in\nthe center of the room.\" \"Quite a bit of electrical, ionic, and vibrational energy are being generated\nin this room.  The walls are lined with miles of wiring and circuitry.\" 0 \"Ashes from gnashes, dust to bust, we all go round the circle.\" \"This area is identified as the Biological Lab. Equipment here is available\nfor clone revivification.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "BIO-INT"
    ]
   },
   "exits": [
    {
     "to": "BIO-INT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "TV",
    "CLONETABLE"
   ],
   "source": "<ROOM BIO-LAB\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Biological Laboratory\")\n      (SYNONYM LABORA LAB)\n      (ADJECTIVE BIOLOG)\n      (EAST TO BIO-INT)\n      (ROOMDESCS <PLTABLE 0\n\"Sonar detects a large structure within this room. The large structure sits in\nthe center of the room.\"\n\"Quite a bit of electrical, ionic, and vibrational energy are being generated\nin this room.  The walls are lined with miles of wiring and circuitry.\"\n0\n\"Ashes from gnashes, dust to bust, we all go round the circle.\"\n\"This area is identified as the Biological Lab. Equipment here is available\nfor clone revivification.\">)\n      (LINE 5)\n      (STATION BIO-INT)\n      (GLOBAL WIRING)>",
   "referencedBy": [
    "V-CONFIGURE"
   ]
  },
  "CRYOUNITS": {
   "name": "CRYOUNITS",
   "file": "rooms.zil",
   "line": 1683,
   "endLine": 1703,
   "desc": "Cryogenic Area",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "CRYOGE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRCON"
   ],
   "pseudo": [],
   "otherProps": {
    "ROOMDESCS": [
     "<PLTABLE 0 \"Large canisters, similar in appearance to the cylinder in the Central Chamber, fill this area. Sonar can also detect a large straight rod extending from the\nwall.\" \"Detection devices show a channelling of electrical and data information into\nthe large objects in this area. An electrical switch of some kind is mounted\non the wall.\" \"I can hear the humming of air conditioning within this room.\" \"Happy birthday to you,|\nHappy birthday to you.|\nHappy birthday dear human,|\nHappy birthday to you!\" \"This area contains human clones, each in a canister, replacements for future generations of controllers.\">"
    ],
    "LINE": [
     "5"
    ],
    "STATION": [
     "CRYOUNITS"
    ]
   },
   "exits": [
    {
     "to": "BIO-INT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "CLONESWITCH",
    "CLONETUBES"
   ],
   "source": "<ROOM CRYOUNITS\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Cryogenic Area\")\n      (SYNONYM CRYOGE)\n      (ROOMDESCS <PLTABLE 0\n\"Large canisters, similar in appearance to the cylinder in the Central Chamber, fill this area. Sonar can also detect a large straight rod extending from the\nwall.\"\n\"Detection devices show a channelling of electrical and data information into\nthe large objects in this area. An electrical switch of some kind is mounted\non the wall.\"\n\"I can hear the humming of air conditioning within this room.\"\n\"Happy birthday to you,|\nHappy birthday to you.|\nHappy birthday dear human,|\nHappy birthday to you!\"\n\"This area contains human clones, each in a canister, replacements for future generations of controllers.\">)\n      (SOUTH TO BIO-INT)\n      (LINE 5)\n      (STATION CRYOUNITS)\n      (GLOBAL AIRCON)>",
   "referencedBy": [
    "PARRIVE4",
    "V-CONFIGURE"
   ]
  },
  "UD-TUBE": {
   "name": "UD-TUBE",
   "file": "rooms.zil",
   "line": 1705,
   "endLine": 1710,
   "desc": "UD Tube",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "DEAD"
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
     "to": "STERILE-AREA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "PEOPLE"
   ],
   "source": "<ROOM UD-TUBE\n      (IN ROOMS)\n      (DESC \"UD Tube\")\n      (FLAGS RLANDBIT ONBIT)\n      (EAST TO STERILE-AREA)\n      (SYNONYM DEAD)>",
   "referencedBy": [
    "V-CONFIGURE"
   ]
  },
  "HELL": {
   "name": "HELL",
   "file": "rooms.zil",
   "line": 1712,
   "endLine": 1716,
   "desc": "Hell",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [
    "HELL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM HELL\n      (IN ROOMS)\n      (DESC \"Hell\")\n      (FLAGS RLANDBIT ONBIT)\n      (SYNONYM HELL)>",
   "referencedBy": [
    "V-CONFIGURE",
    "V-WALK-TO"
   ]
  }
 },
 "objects": {
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "globals.zil",
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
    "CUTBIT",
    "OPENBIT",
    "SEARCHBIT",
    "TRANSBIT",
    "WEARBIT",
    "FIXABLEBIT"
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
    "LISTENING",
    "DRAGGING",
    "LEFT",
    "RIGHT",
    "LOCATION",
    "IT",
    "COMPLEX",
    "PLANET",
    "ZORK",
    "FRANKLIN",
    "FCS",
    "CLONES",
    "GROUND",
    "WALLS",
    "CEILING",
    "HANDS",
    "ME",
    "GLOBAL-IRIS",
    "GLOBAL-WALDO",
    "GLOBAL-SENSA",
    "GLOBAL-AUDA",
    "GLOBAL-POET",
    "GLOBAL-WHIZ",
    "GLOBAL-PEOPLE"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS RMUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT\n\t       CUTBIT OPENBIT SEARCHBIT TRANSBIT WEARBIT FIXABLEBIT)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "MAIN-LOOP",
    "PRE-PUT",
    "V-FIND",
    "V-$TELL",
    "V-POINT",
    "META-LOC"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "globals.zil",
   "line": 18,
   "endLine": 25,
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
   "globals": [
    "GLOBAL-OBJECTS"
   ],
   "pseudo": [
    "0"
   ],
   "otherProps": {
    "SIZE": [
     "0"
    ]
   },
   "contents": [
    "SIGNPOST",
    "CONTROL-PANELS",
    "AIRCON",
    "DEBRIS",
    "CABLES",
    "WIRING",
    "TVHOLE",
    "STEP",
    "STAIRS",
    "MONITOR"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK)\n\t(DESCFCN 0)\n        (GLOBAL GLOBAL-OBJECTS)\n\t(PSEUDO 0)\n\t(CONTFCN 0)\n\t(SIZE 0)>",
   "referencedBy": [
    "MOBY-FIND"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "globals.zil",
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
    "GWIM",
    "MOBY-FIND",
    "WHICH-PRINT",
    "GLOBAL-CHECK",
    "OBJ-FOUND",
    "CHANGE-WINNER",
    "I-CHASEAUDA",
    "DEAD-FCN",
    "V-CONFIGURE",
    "FIRSTER",
    "PRE-EXAMINE",
    "V-MOVE-ROBOT-TO-LOC",
    "V-PLUGIN",
    "V-WALK-TO",
    "V-TOUCH",
    "META-LOC"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "globals.zil",
   "line": 30,
   "endLine": 33,
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
    "V-EXAMINE",
    "PRE-MOVE",
    "V-SET"
   ]
  },
  "LISTENING": {
   "name": "LISTENING",
   "file": "globals.zil",
   "line": 35,
   "endLine": 38,
   "desc": "listening",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "LISTEN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LISTENING\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM LISTEN)\n\t(DESC \"listening\")>",
   "referencedBy": [
    "V-EXAMINE",
    "V-STOP"
   ]
  },
  "DRAGGING": {
   "name": "DRAGGING",
   "file": "globals.zil",
   "line": 40,
   "endLine": 43,
   "desc": "dragging",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DRAGGI"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRAGGING\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM DRAGGI)\n\t(DESC \"dragging\")>",
   "referencedBy": [
    "V-EXAMINE",
    "V-STOP"
   ]
  },
  "LEFT": {
   "name": "LEFT",
   "file": "globals.zil",
   "line": 45,
   "endLine": 48,
   "desc": "left",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "LEFT",
    "BACK",
    "BACKWA"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LEFT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM LEFT BACK BACKWA)\n\t(DESC \"left\")>",
   "referencedBy": [
    "V-EXAMINE",
    "PRE-MOVE",
    "V-SET"
   ]
  },
  "RIGHT": {
   "name": "RIGHT",
   "file": "globals.zil",
   "line": 50,
   "endLine": 53,
   "desc": "right",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "RIGHT",
    "FORWARD"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIGHT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM RIGHT FORWARD)\n\t(DESC \"right\")>",
   "referencedBy": [
    "V-EXAMINE",
    "PRE-MOVE",
    "V-SET"
   ]
  },
  "LOCATION": {
   "name": "LOCATION",
   "file": "globals.zil",
   "line": 55,
   "endLine": 58,
   "desc": "location",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "LOCATION",
    "LOC"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOCATION\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM LOCATION LOC)\n\t(DESC \"location\")>",
   "referencedBy": [
    "OBJ-FOUND",
    "V-EXAMINE",
    "V-REPORT-LOC"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "globals.zil",
   "line": 60,
   "endLine": 62,
   "desc": "pseudo",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "CRETIN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSEUDO-OBJECT\n\t(DESC \"pseudo\")\n\t(ACTION CRETIN)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "V-FIND"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "globals.zil",
   "line": 64,
   "endLine": 68,
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
   "source": "<OBJECT IT\t;\"was IT\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THAT HER HIM)\n\t(DESC \"random object\")\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": [
    "ITAKE-CHECK",
    "PERFORM"
   ]
  },
  "COMPLEX": {
   "name": "COMPLEX",
   "file": "globals.zil",
   "line": 70,
   "endLine": 77,
   "desc": "underground complex",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "COMPLEX"
   ],
   "adjectives": [
    "UNDERG"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"underground complex\" \"underground complex\" \"underground complex\" \"underground complex\" \"underground complex\" \"underground complex\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE 0 0 \"The Complex was started on this terraformed planet to provide the surface-side dwellers with a simpler, easier life. The Complex was built 122 years after the planet was settled, and was designed to operate on its own, with human intervention required only by emergency situations.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT COMPLEX\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM COMPLEX)\n\t(ADJECTIVE UNDERG)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"underground complex\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"underground complex\" \"underground complex\" \"underground complex\" \"underground complex\" \"underground complex\" \"underground complex\" 0 0 0 0 0 0>)\n\t(CLC-TXT <PLTABLE 0 0 \"The Complex was started on this terraformed planet to provide the surface-side dwellers with a simpler, easier life. The Complex was built 122 years after the planet was settled, and was designed to operate on its own, with human intervention required only by emergency situations.\">)>",
   "referencedBy": [
    "PRE-PUT",
    "V-PUT-AGAINST"
   ]
  },
  "PLANET": {
   "name": "PLANET",
   "file": "globals.zil",
   "line": 79,
   "endLine": 85,
   "desc": "planetary surface",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "CONTRA"
   ],
   "adjectives": [
    "SURFACE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"planetary surface\" \"planetary surface\" \"planetary surface\" \"planetary surface\" \"planetary surface\" \"planetary surface\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Access to the surface is through the Sterilization Chamber.\" \"The three Filtering Computers must be brought into balance for there to be a surface much longer.\" \"The surface systems were originally controlled by the people living on the surface, but this situation changed once long-term terraforming had been accomplished.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT PLANET\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"planetary surface\")\n\t(SYNONYM CONTRA)\n\t(ADJECTIVE SURFACE)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"planetary surface\" \"planetary surface\" \"planetary surface\" \"planetary surface\" \"planetary surface\" \"planetary surface\" 0 0 0 0 0 0>)\n\t(CLC-TXT <PLTABLE \"Access to the surface is through the Sterilization Chamber.\" \"The three Filtering Computers must be brought into balance for there to be a surface much longer.\" \"The surface systems were originally controlled by the people living on the surface, but this situation changed once long-term terraforming had been accomplished.\">)>",
   "referencedBy": []
  },
  "ZORK": {
   "name": "ZORK",
   "file": "globals.zil",
   "line": 87,
   "endLine": 93,
   "desc": "Zork",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "ZORK"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"Zork\" \"Zork\" \"Zork\" \"Zork\" \"Zork\" \"Zork\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT ZORK\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Zork\")\n\t(SYNONYM ZORK)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"Zork\"\"Zork\"\"Zork\"\"Zork\"\"Zork\"\"Zork\"\n\t\t\t  0 0 0 0 0 0>)>",
   "referencedBy": []
  },
  "FRANKLIN": {
   "name": "FRANKLIN",
   "file": "globals.zil",
   "line": 95,
   "endLine": 101,
   "desc": "Franklin",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "GREGOR",
    "FRANKL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"Gregory\" \"Gregory\" \"Gregory\" \"Gregory\" \"Gregory\" \"Gregory\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE 0 0 \"Refer to your manual for further data.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT FRANKLIN\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Franklin\")\n\t(SYNONYM GREGOR FRANKL)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"Gregory\"\"Gregory\"\"Gregory\"\"Gregory\"\"Gregory\"\"Gregory\" 0 0 0 0 0 0>)\n\t(CLC-TXT <PLTABLE 0 0 \"Refer to your manual for further data.\">)>",
   "referencedBy": []
  },
  "FCS": {
   "name": "FCS",
   "file": "globals.zil",
   "line": 103,
   "endLine": 110,
   "desc": "Filtering Computers",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "FC",
    "FCS",
    "COMPUTER"
   ],
   "adjectives": [
    "FILTERING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"FCs\" \"FCs\" \"FCs\" \"FCs\" \"FCs\" \"FCs\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"The three Filtering Computers are kept in balance by two series of four cables. Four cables run through the Primary Channel, while another four run through the Secondary Channel.\" \"All defective cables should be replaced, then the reset code should be entered at the machine in the Main Supply Room.\" \"The Filtering Computers have long provided Contra with surface-side maintenance, providing the surface-dwellers with an easy lifestyle.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT FCS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"Filtering Computers\")\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"FCs\"\"FCs\"\"FCs\"\"FCs\"\"FCs\"\"FCs\" 0 0 0 0 0 0>)\n\t(SYNONYM FC FCS COMPUTER)\n\t(ADJECTIVE FILTERING)\n\t(CLC-TXT <PLTABLE \"The three Filtering Computers are kept in balance by two series of four cables. Four cables run through the Primary Channel, while another four run through the Secondary Channel.\" \"All defective cables should be replaced, then the reset code should be entered at the machine in the Main Supply Room.\" \"The Filtering Computers have long provided Contra with surface-side maintenance, providing the surface-dwellers with an easy lifestyle.\">)>",
   "referencedBy": [
    "V-REPAIR"
   ]
  },
  "CLONES": {
   "name": "CLONES",
   "file": "globals.zil",
   "line": 112,
   "endLine": 118,
   "desc": "clones",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CLONES"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"clones\" \"clones\" \"clones\" \"clones\" \"clones\" \"clones\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE 0 0 \"These clones are clones of you and are your replacements.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT CLONES\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"clones\")\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"clones\"\"clones\"\"clones\"\"clones\"\"clones\"\"clones\" 0 0 0 0 0 0>)\n\t(SYNONYM CLONES)\n\t(CLC-TXT <PLTABLE 0 0 \"These clones are clones of you and are your replacements.\">)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "globals.zil",
   "line": 120,
   "endLine": 126,
   "desc": "floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FLOOR"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"floor\" \"floor\" \"floor\" \"floor\" \"floor\" \"floor\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT GROUND\t;\"was GROUND\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM FLOOR)\n\t(DESC \"floor\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1\n\t \"floor\"\"floor\"\"floor\"\"floor\"\"floor\"\"floor\"\n\t 0 0 0 0 0 0>)>",
   "referencedBy": [
    "PRE-PUT",
    "V-PUT-AGAINST"
   ]
  },
  "WALLS": {
   "name": "WALLS",
   "file": "globals.zil",
   "line": 128,
   "endLine": 133,
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
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"wall\" \"wall\" \"wall\" \"wall\" \"wall\" \"wall\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WALLS\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"wall\")\n\t(SYNONYM WALL WALLS)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"wall\"\"wall\"\"wall\"\"wall\"\"wall\"\"wall\" 0 0 0 0 0 0>)>",
   "referencedBy": [
    "PRE-PUT",
    "V-PUT-AGAINST"
   ]
  },
  "CEILING": {
   "name": "CEILING",
   "file": "globals.zil",
   "line": 135,
   "endLine": 140,
   "desc": "ceiling",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CEILIN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"ceiling\" \"ceiling\" \"ceiling\" \"ceiling\" \"ceiling\" \"ceiling\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CEILING\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"ceiling\")\n\t(SYNONYM CEILIN)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"ceiling\"\"ceiling\"\"ceiling\"\"ceiling\"\"ceiling\"\"ceiling\" 0 0 0 0 0 0>)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "globals.zil",
   "line": 142,
   "endLine": 150,
   "desc": "extensions",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOOLBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "EXTENS"
   ],
   "adjectives": [
    "GRASPING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"grasping extension\" \"grasping extension\" \"grasping extension\" \"grasping extension\" \"grasping extension\" \"grasping extension\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT HANDS\t;\"was HANDS\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM EXTENS)\n\t(ADJECTIVE GRASPING)\n\t(DESC \"extensions\")\n\t(FLAGS NDESCBIT TOOLBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1 \"grasping extension\"\"grasping extension\"\"grasping extension\"\n\"grasping extension\"\"grasping extension\"\"grasping extension\" 0 0 0 0 0 0>)>",
   "referencedBy": [
    "V-COUNT",
    "IKILL"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "globals.zil",
   "line": 152,
   "endLine": 158,
   "desc": "cylinder occupant",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VILLAIN",
    "TOUCHBIT"
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
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ME MYSELF SELF WE)\n\t(DESC \"cylinder occupant\")\n\t(FLAGS VILLAIN TOUCHBIT)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1  \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" \"cylinder occupant\" 0 0 0 0 0 0>)\n\t(ACTION CRETIN)> ",
   "referencedBy": []
  },
  "SIGNPOST": {
   "name": "SIGNPOST",
   "file": "globals.zil",
   "line": 195,
   "endLine": 202,
   "desc": "sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SIGN",
    "SIGNPOST",
    "ACS"
   ],
   "adjectives": [
    "BUZZIN",
    "LITTLE",
    "RECESS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"little sign\" \"recessed sign\" \"sign\" \"buzzing sign\" \"signpost\" \"ACS\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This sign shows the access code needed for resetting the Filtering Computers.\" \"You should be able to get Iris to see it somehow.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT SIGNPOST\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"sign\")\n\t(FLAGS TOUCHBIT NDESCBIT)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"little sign\" \"recessed sign\" \"sign\" \"buzzing sign\" \"signpost\" \"ACS\" 0 0 0 0 0 0>)\n\t(CLC-TXT <PLTABLE \"This sign shows the access code needed for resetting the Filtering Computers.\" \"You should be able to get Iris to see it somehow.\" 0>)\n\t(SYNONYM SIGN SIGNPOST ACS)\n\t(ADJECTIVE BUZZIN LITTLE RECESS)>",
   "referencedBy": [
    "V-READ",
    "V-POINT"
   ]
  },
  "CONTROL-PANELS": {
   "name": "CONTROL-PANELS",
   "file": "globals.zil",
   "line": 204,
   "endLine": 210,
   "desc": "panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "PANEL",
    "CONSOL"
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
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 \"panel\" \"panel\" \"panel\" \"panel\" \"panel\" \"panel\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CONTROL-PANELS\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"panel\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 \"panel\"\"panel\"\"panel\"\"panel\"\"panel\"\"panel\" 0 0 0 0 0 0>)\n\t(SYNONYM PANEL CONSOL)\n\t(ADJECTIVE SMALL)>",
   "referencedBy": []
  },
  "AIRCON": {
   "name": "AIRCON",
   "file": "globals.zil",
   "line": 212,
   "endLine": 221,
   "desc": "air conditioning",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CONDIT",
    "AIRCON"
   ],
   "adjectives": [
    "AIR"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 0 0 1 0 0 \"air conditioning\" \"air conditioning\" \"air conditioning\" \"air conditioning\" \"air conditioning\" \"air conditioning\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIRCON\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"air conditioning\")\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(SYNONYM CONDIT AIRCON)\n\t(ADJECTIVE AIR)\n\t(OBJDESCS <PLTABLE 0 0 0 1 0 0\n\t\t\t  \"air conditioning\"\"air conditioning\"\"air conditioning\"\n\t\t\t  \"air conditioning\"\"air conditioning\"\"air conditioning\"\n\t\t\t  0 0 0 0 0 0>)> ",
   "referencedBy": []
  },
  "DEBRIS": {
   "name": "DEBRIS",
   "file": "globals.zil",
   "line": 223,
   "endLine": 229,
   "desc": "debris",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "DEBRIS",
    "JUNK",
    "RUBBLE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 0 0 1 0 \"debris\" \"debris\" \"debris\" \"debris\" \"debris\" \"debris\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT DEBRIS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DEBRIS JUNK RUBBLE)\n\t(DESC \"debris\")\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE 1 1 0 0 1 0 \"debris\"\"debris\"\"debris\"\"debris\"\"debris\"\n\"debris\" 0 0 0 0 0 0>)>",
   "referencedBy": []
  },
  "CABLES": {
   "name": "CABLES",
   "file": "globals.zil",
   "line": 232,
   "endLine": 244,
   "desc": "cables",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "TUBES",
    "CABLES"
   ],
   "adjectives": [
    "CONNECTING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"cables\" \"cables\" \"cables\" \"cables\" \"cables\" \"cables\" \"The first, second, third and fourth cables are of all different colors.\" \"The first, second, third and fourth cables are of all different lengths.\" \"The first, second, third and fourth cables are of all different lengths.\" \"The first, second, third and fourth cables are of all different lengths.\" \"The first, second, third and fourth cables are of all different lengths.\" \"The first, second, third and fourth cables are of all different lengths.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"These cables were designed for easy replacement. Each is equipped with a simple snap connector so replacement is virtually automatic. All cables of the same color conduct the same voltage charges and are totally interchangeable.\" \"Be careful of removing or replacing active cables.\" \"When this complex was built, a color-coding scheme was agreed upon for the sake of standardization.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT CABLES\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM TUBES CABLES)\n\t(ADJECTIVE CONNECTING)\n\t(DESC \"cables\")\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1\n\"cables\"\"cables\"\"cables\"\"cables\"\"cables\"\"cables\"\n\"The first, second, third and fourth cables are of all different colors.\"\n\"The first, second, third and fourth cables are of all different lengths.\"\"The first, second, third and fourth cables are of all different lengths.\"\"The first, second, third and fourth cables are of all different lengths.\"\"The first, second, third and fourth cables are of all different lengths.\"\"The first, second, third and fourth cables are of all different lengths.\"\n>)\n\t(CLC-TXT <PLTABLE \"These cables were designed for easy replacement. Each is equipped with a simple snap connector so replacement is virtually automatic. All cables of the same color conduct the same voltage charges and are totally interchangeable.\" \"Be careful of removing or replacing active cables.\" \"When this complex was built, a color-coding scheme was agreed upon for the sake of standardization.\">)>",
   "referencedBy": [
    "GROOVE-FCN",
    "V-POINT"
   ]
  },
  "WIRING": {
   "name": "WIRING",
   "file": "globals.zil",
   "line": 246,
   "endLine": 251,
   "desc": "wiring",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "WIRING",
    "CIRCUI"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"wiring\" \"wiring\" \"wiring\" \"wiring\" \"wiring\" \"wiring\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WIRING\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(SYNONYM WIRING CIRCUI)\n\t(DESC \"wiring\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"wiring\"\"wiring\"\"wiring\"\"wiring\"\"wiring\"\"wiring\" 0 0 0 0 0 0>)>",
   "referencedBy": []
  },
  "TVHOLE": {
   "name": "TVHOLE",
   "file": "globals.zil",
   "line": 253,
   "endLine": 266,
   "desc": "hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "PLUG",
    "HOLE",
    "PL-1"
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
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"plug with a cable in it\" \"plug\" \"plug\" \"plug\" \"plug\" \"plug\" 0 \"Its diameter may fit a small cable.\" \"It is a female receptacle.\" 0 \"Its depth just cannot compare to mine.\" \"This PL-1 forms a link for the TV-1.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT TVHOLE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM PLUG HOLE PL-1)\n\t(ADJECTIVE SMALL)\n\t(DESC \"hole\")\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1 \"plug with a cable in it\"\"plug\"\"plug\"\"plug\"\"plug\"\"plug\"\n0 \n\"Its diameter may fit a small cable.\"\n\"It is a female receptacle.\"\n0 \n\"Its depth just cannot compare to mine.\"\n\"This PL-1 forms a link for the TV-1.\">)\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": [
    "TV-FCN"
   ]
  },
  "STEP": {
   "name": "STEP",
   "file": "globals.zil",
   "line": 268,
   "endLine": 276,
   "desc": "step",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "STEP",
    "STAIR",
    "DROPOF"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "STEP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"step\" \"step\" \"step\" \"step\" \"step\" \"step\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT STEP\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"step\")\n\t(FLAGS TOUCHBIT NDESCBIT)\n\t(SYNONYM STEP STAIR DROPOF)\n\t(ADJECTIVE SMALL)\n\t(ACTION STEP-FCN)\n\t(OBJDESCS <PLTABLE\n1 1 1 0 1 1 \"step\" \"step\" \"step\" \"step\" \"step\" \"step\" 0 0 0 0 0 0 >)>",
   "referencedBy": [
    "PRE-PUT"
   ]
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "globals.zil",
   "line": 297,
   "endLine": 303,
   "desc": "stairs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT",
    "TOUCHBIT"
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
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"stairs\" \"stairs\" \"stairs\" \"stairs\" \"stairs\" \"stairs\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STAIRS STEPS LADDER STAIRWAY)\n\t(DESC \"stairs\")\n\t(FLAGS NDESCBIT CLIMBBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1 \"stairs\"\"stairs\"\"stairs\"\"stairs\"\"stairs\"\"stairs\" 0 0 0 0 0 0>)>",
   "referencedBy": []
  },
  "MONITOR": {
   "name": "MONITOR",
   "file": "globals.zil",
   "line": 305,
   "endLine": 311,
   "desc": "monitor",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "MONITO",
    "METERS",
    "UNITS"
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
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"monitor\" \"monitor\" \"small unit\" \"monitor\" \"monitor\" \"monitor\" 0 0 \"The unit is active.\" 0 0 0 \"The monitor has been diagnosed as working properly.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT MONITOR\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(SYNONYM MONITO METERS UNITS)\n\t(ADJECTIVE SMALL)\n\t(DESC \"monitor\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"monitor\"\"monitor\"\"small unit\"\"monitor\"\"monitor\"\"monitor\"0 0 \"The unit is active.\" 0 0 0 \"The monitor has been diagnosed as working properly.\">)>",
   "referencedBy": [
    "V-EXAMINE",
    "V-READ"
   ]
  },
  "HOME": {
   "name": "HOME",
   "file": "objects.zil",
   "line": 8,
   "endLine": 17,
   "desc": "HOME",
   "ldesc": null,
   "fdesc": null,
   "loc": "CPU-ROOM",
   "flags": [
    "CONTBIT",
    "TOUCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "COLUMN",
    "HOME",
    "CPU",
    "DOOR"
   ],
   "adjectives": [
    "TALL",
    "HOLLOW",
    "ELECTR",
    "HIGH",
    "SWEET"
   ],
   "action": "OOPS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"tall column\" \"hollow column\" \"electrical column\" \"noiseless column\" \"sweet home\" \"CPU\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"The column houses our supervisor and over-seeing control unit: YOU.\" \"Keep the door to the column closed. Life-support wires run from the inner door surface directly to your body.\" \"See the information on Franklin in your manual.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT HOME\n\t(IN CPU-ROOM)\n\t(FLAGS CONTBIT TOUCHBIT NDESCBIT)\n\t(DESC \"HOME\")\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1 \"tall column\"\"hollow column\"\"electrical column\"\"noiseless column\"\"sweet home\"\"CPU\" 0 0 0 0 0 0>)\n\t(SYNONYM COLUMN HOME CPU DOOR)\n\t(CLC-TXT <PLTABLE \"The column houses our supervisor and over-seeing control unit: YOU.\" \"Keep the door to the column closed. Life-support wires run from the inner door surface directly to your body.\" \"See the information on Franklin in your manual.\">)\n\t(ADJECTIVE TALL HOLLOW ELECTR HIGH SWEET)\n\t(ACTION OOPS-FCN)>",
   "referencedBy": [
    "CRETIN"
   ]
  },
  "PANEL": {
   "name": "PANEL",
   "file": "objects.zil",
   "line": 39,
   "endLine": 63,
   "desc": "panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "IRIS",
   "flags": [
    "CONTBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "BARRIER",
    "PANEL",
    "MP1",
    "DOOR"
   ],
   "adjectives": [
    "MAINTE",
    "ACCESS",
    "SMOOTH",
    "METAL",
    "TRANSM"
   ],
   "action": "PANEL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "16"
    ],
    "CLC-TXT": [
     "<PLTABLE \"It is merely an openable panel.\" \"Open the panel with care.\" 0>"
    ],
    "OBJDESCS": [
     "<PLTABLE \"My eyestalks can't swivel that far.\" \"A maintenance panel can be detected beneath my extensions.\" \"Iris's central core is near exposure, the area from which all data is\ntransmitted.\" 0 \"Exposure to the elemental realities, baring one's essence, is what Iris\nis currently concerned with.\" \"CLC tagged object MP1 is now exposed.\" \"maintenance panel\" \"smooth metal panel\" \"transmission barrier\" \"muted mechanism\" \"door\" \"MP1\" \"My maintenance panel has openings which fit a robot extension. Beneath it is my delicate visual circuitry.\" \"My extensions detect places which I can grasp to open it.\" \"The barrier itself emits no specific vibrations. It is inert.\" \"The object makes no sound, though muted noises come from beneath it.\" \"The door into Iris is like the window to our souls.\" \"MP1 is an internal plate, CLC tagged.\">"
    ]
   },
   "contents": [
    "CHIPS0",
    "CHIP1",
    "CHIP2"
   ],
   "source": "<OBJECT PANEL\n\t(IN IRIS)\n\t(FLAGS CONTBIT NDESCBIT)\n\t(CAPACITY 16)\n\t(SYNONYM BARRIER PANEL MP1 DOOR)\n\t(ADJECTIVE MAINTE ACCESS SMOOTH METAL TRANSM)\n\t(DESC \"panel\")\n\t(ACTION PANEL-FCN)\n\t(CLC-TXT <PLTABLE \"It is merely an openable panel.\" \"Open the panel with care.\" 0>)\n\t(OBJDESCS <PLTABLE\n\"My eyestalks can't swivel that far.\"\n\"A maintenance panel can be detected beneath my extensions.\"\n\"Iris's central core is near exposure, the area from which all data is\ntransmitted.\" 0\n\"Exposure to the elemental realities, baring one's essence, is what Iris\nis currently concerned with.\"\n\"CLC tagged object MP1 is now exposed.\"\n\"maintenance panel\" \"smooth metal panel\" \"transmission barrier\"\n\"muted mechanism\" \"door\" \"MP1\" \n\"My maintenance panel has openings which fit a robot extension. Beneath it is my delicate visual circuitry.\"\n\"My extensions detect places which I can grasp to open it.\"\n\"The barrier itself emits no specific vibrations. It is inert.\"\n\"The object makes no sound, though muted noises come from beneath it.\"\n\"The door into Iris is like the window to our souls.\"\n\"MP1 is an internal plate, CLC tagged.\">)>",
   "referencedBy": [
    "SEARCH-LIST",
    "PANEL-FCN",
    "CHIPFILTER-FCN",
    "IRIS-FCN",
    "V-PUT",
    "V-REPLACE"
   ]
  },
  "CHIPS0": {
   "name": "CHIPS0",
   "file": "objects.zil",
   "line": 110,
   "endLine": 118,
   "desc": "chip",
   "ldesc": null,
   "fdesc": null,
   "loc": "PANEL",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CHIPS",
    "CHIP",
    "DEVICE",
    "ZERO"
   ],
   "adjectives": [
    "QUIET",
    "ZERO",
    "RED",
    "SMOOTH",
    "POLARI",
    "CX0",
    "BRAIN"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"red chip\" \"smooth device\" \"polarized device\" \"quiet device\" \"brain zero\" \"CX0 chip\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This chip is a polarization processor (CX0).\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CHIPS0\n\t(IN PANEL)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM CHIPS CHIP DEVICE ZERO)\n\t(ADJECTIVE QUIET ZERO RED SMOOTH POLARI CX0 BRAIN)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"red chip\"\"smooth device\"\"polarized device\"\"quiet device\"\"brain zero\"\"CX0 chip\" 0 0 0 0 0 0 >)\n\t(DESC \"chip\")\n\t(CLC-TXT <PLTABLE \"This chip is a polarization processor (CX0).\" 0 0>)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": [
    "PANEL-FCN",
    "V-PUT",
    "V-REPLACE"
   ]
  },
  "CHIP1": {
   "name": "CHIP1",
   "file": "objects.zil",
   "line": 120,
   "endLine": 128,
   "desc": "obj",
   "ldesc": null,
   "fdesc": null,
   "loc": "PANEL",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CHIP",
    "CHIPS",
    "DEVICE",
    "UNO"
   ],
   "adjectives": [
    "SCANNI",
    "BRAIN",
    "ROUGH",
    "BLUE",
    "SMALL",
    "DELICATE",
    "CX1"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"blue chip\" \"rough device\" \"scanning device\" \"silent device\" \"brain uno\" \"CX1 chip\" 0 0 \"This device has been electrically fried.\" 0 0 0 \"Electrons can no longer find flow paths through this brain.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This chip is a scanning processor (CX1).\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CHIP1\n\t(IN PANEL)\n\t(SYNONYM CHIP CHIPS DEVICE UNO)\n\t(ADJECTIVE SCANNI BRAIN ROUGH BLUE SMALL DELICATE CX1)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"blue chip\" \"rough device\" \"scanning device\" \"silent device\" \"brain uno\" \"CX1 chip\" 0 0 \"This device has been electrically fried.\" 0 0 0 \"Electrons can no longer find flow paths through this brain.\" >)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(DESC \"obj\")\n\t(CLC-TXT <PLTABLE \"This chip is a scanning processor (CX1).\" 0 0>)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": []
  },
  "CHIP2": {
   "name": "CHIP2",
   "file": "objects.zil",
   "line": 130,
   "endLine": 139,
   "desc": "obj",
   "ldesc": null,
   "fdesc": null,
   "loc": "PANEL",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CHIP",
    "CHIPS",
    "DEVICE",
    "DOS"
   ],
   "adjectives": [
    "NOISEL",
    "BRAIN",
    "BUMPY",
    "SMALL",
    "FILTERING",
    "YELLOW",
    "CX2"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"small yellow chip\" \"bumpy device\" \"filtering device\" \"noiseless device\" \"brain dos\" \"CX2 chip\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This chip is a filtering processor (CX2).\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CHIP2\n\t(IN PANEL)\n\t(SYNONYM CHIP CHIPS DEVICE DOS)\n\t(ADJECTIVE NOISEL BRAIN BUMPY SMALL FILTERING YELLOW CX2)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"small yellow chip\"\"bumpy device\"\n\"filtering device\" \"noiseless device\"\"brain dos\"\"CX2 chip\"0 0 0 0 0 0 >)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(DESC \"obj\")\n\t(CLC-TXT <PLTABLE \"This chip is a filtering processor (CX2).\" 0 0>)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": [
    "PANEL-FCN",
    "V-PUT",
    "V-REPLACE"
   ]
  },
  "BASKET": {
   "name": "BASKET",
   "file": "objects.zil",
   "line": 141,
   "endLine": 160,
   "desc": "BASKET",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-MID",
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "TAKEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CONTAI",
    "BASKET",
    "BA1"
   ],
   "adjectives": [
    "HOLLOW",
    "SMALL",
    "OPEN"
   ],
   "action": "BASKET-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "26"
    ],
    "OBJDESCS": [
     "<PLTABLE \"Among the rubble I can see a little basket, sitting on the floor.\" \"I just bumped into a small object which has an open top.\" \"I perceive a small container which holds several small devices.\" 0 \"Contained spirits, like thoughts, fly from reach.\" \"CLC tagged object BA1.\" \"little wire basket\" \"hollow container\" \"small container\" \"soundless container\" \"basket of goodies for Grandma\" \"BA1\" \"It is a small, wire basket, designed for robot gripping extensions.\" \"It is made of woven wire and has a small handle which fits my extensions.\" \"The unique frame is suggested by the way it reflects electrons.\" \"Listening to it is boring.\" \"A tisket, a tasket, what's that in your basket?\" \"CLC tagged object is a basket.\">"
    ]
   },
   "contents": [
    "NEWCHIP1",
    "NEWCHIP0",
    "NEWCHIP2",
    "NEWCHIP3",
    "NEWCHIP4"
   ],
   "source": "<OBJECT BASKET\n\t(IN SUPPLIES-MID)\n\t(FLAGS OPENBIT CONTBIT TAKEBIT SEARCHBIT)\n\t(SYNONYM CONTAI BASKET BA1)\n\t(ADJECTIVE HOLLOW SMALL OPEN)\n\t(DESC \"BASKET\")\n\t(CAPACITY 26)\n\t(OBJDESCS <PLTABLE\n\"Among the rubble I can see a little basket, sitting on the floor.\"\n\"I just bumped into a small object which has an open top.\"\n\"I perceive a small container which holds several small devices.\" 0\n\"Contained spirits, like thoughts, fly from reach.\"\n\"CLC tagged object BA1.\" \"little wire basket\" \"hollow container\" \"small container\" \"soundless container\" \"basket of goodies for Grandma\"\"BA1\"\n\"It is a small, wire basket, designed for robot gripping extensions.\"\n\"It is made of woven wire and has a small handle which fits my extensions.\"\n\"The unique frame is suggested by the way it reflects electrons.\"\n\"Listening to it is boring.\"\n\"A tisket, a tasket, what's that in your basket?\"\n\"CLC tagged object is a basket.\">)\n\t(ACTION BASKET-FCN)>",
   "referencedBy": []
  },
  "FIRST-FRIED": {
   "name": "FIRST-FRIED",
   "file": "objects.zil",
   "line": 167,
   "endLine": 175,
   "desc": "chip",
   "ldesc": null,
   "fdesc": null,
   "loc": "SOCKET1",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CHIPS",
    "CHIP",
    "DEVICE",
    "TRES"
   ],
   "adjectives": [
    "SLEEPY",
    "TRES",
    "BURNED",
    "DISFIG",
    "RUINED",
    "CX3",
    "BRAIN"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"burned chip\" \"disfigured device\" \"ruined device\" \"sleepy device\" \"brain tres\" \"CX3 chip\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This chip is a switching processor (CX3).\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT FIRST-FRIED\n\t(IN SOCKET1)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM CHIPS CHIP DEVICE TRES)\n\t(ADJECTIVE SLEEPY TRES BURNED DISFIG RUINED CX3 BRAIN)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"burned chip\"\"disfigured device\"\"ruined device\"\"sleepy device\"\"brain tres\"\"CX3 chip\" 0 0 0 0 0 0 >)\n\t(DESC \"chip\")\n\t(CLC-TXT <PLTABLE \"This chip is a switching processor (CX3).\" 0 0>)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": []
  },
  "NEXT-FRIED": {
   "name": "NEXT-FRIED",
   "file": "objects.zil",
   "line": 177,
   "endLine": 185,
   "desc": "chip",
   "ldesc": null,
   "fdesc": null,
   "loc": "SOCKET2",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CHIPS",
    "CHIP",
    "DEVICE",
    "QUART"
   ],
   "adjectives": [
    "SNOOZY",
    "QUART",
    "FRIED",
    "BUBBLY",
    "SEIZED",
    "CX4",
    "BRAIN"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"fried chip\" \"bubbly device\" \"seized device\" \"snoozy device\" \"brain quart\" \"CX4 chip\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This chip is a replacement switching processor (CX4).\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEXT-FRIED\n\t(IN SOCKET2)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM CHIPS CHIP DEVICE QUART)\n\t(ADJECTIVE SNOOZY QUART FRIED BUBBLY SEIZED CX4 BRAIN)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"fried chip\"\"bubbly device\"\"seized device\"\"snoozy device\"\"brain quart\"\"CX4 chip\" 0 0 0 0 0 0 >)\n\t(DESC \"chip\")\n\t(CLC-TXT <PLTABLE \"This chip is a replacement switching processor (CX4).\" 0 0>)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": []
  },
  "NEWCHIP1": {
   "name": "NEWCHIP1",
   "file": "objects.zil",
   "line": 187,
   "endLine": 195,
   "desc": "IC",
   "ldesc": null,
   "fdesc": null,
   "loc": "BASKET",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "IC",
    "OBJECT",
    "PLAIN"
   ],
   "adjectives": [
    "RX1",
    "BLUE",
    "ROUGH",
    "BRAIN",
    "SILENT",
    "SCANNI"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"blue IC\" \"rough object\" \"scanning object\" \"silent object\" \"brain plain\" \"RX1 IC\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This chip is a replacement scanning processor (RX1).\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEWCHIP1\n\t(IN BASKET)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM IC OBJECT PLAIN)\n\t(ADJECTIVE RX1 BLUE ROUGH BRAIN SILENT SCANNI)\n\t(DESC \"IC\")\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1  \"blue IC\"\"rough object\"\"scanning object\"\"silent object\"\"brain plain\"\"RX1 IC\"0 0 0 0 0 0 >)\n\t(ACTION CHIPFILTER-FCN)\n\t(CLC-TXT <PLTABLE \"This chip is a replacement scanning processor (RX1).\" 0 0>)>",
   "referencedBy": [
    "PANEL-FCN",
    "CHIPFILTER-FCN",
    "V-PUT",
    "V-REPLACE"
   ]
  },
  "NEWCHIP0": {
   "name": "NEWCHIP0",
   "file": "objects.zil",
   "line": 197,
   "endLine": 205,
   "desc": "IC",
   "ldesc": null,
   "fdesc": null,
   "loc": "BASKET",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "IC",
    "OBJECT",
    "ZIP"
   ],
   "adjectives": [
    "RX0",
    "RED",
    "SMOOTH",
    "QUIET",
    "BRAIN",
    "POLARI"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CLC-TXT": [
     "<PLTABLE \"This chip is a replacement polarization processor (RX0).\" 0 0>"
    ],
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"red IC\" \"smooth object\" \"polarized object\" \"quiet object\" \"brain zip\" \"RX0 IC\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEWCHIP0\n\t(IN BASKET)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM IC OBJECT ZIP)\n\t(ADJECTIVE RX0 RED SMOOTH QUIET BRAIN POLARI)\n\t(DESC \"IC\")\n\t(CLC-TXT <PLTABLE \"This chip is a replacement polarization processor (RX0).\" 0 0>)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"red IC\"\"smooth object\"\"polarized object\"\"quiet object\"\"brain zip\"\"RX0 IC\" 0 0 0 0 0 0 >)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": [
    "ORANGE-BUTTON-FCN",
    "SUPPLIES-N-FCN"
   ]
  },
  "NEWCHIP2": {
   "name": "NEWCHIP2",
   "file": "objects.zil",
   "line": 207,
   "endLine": 215,
   "desc": "IC",
   "ldesc": null,
   "fdesc": null,
   "loc": "BASKET",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "IC",
    "OBJECT",
    "TWO"
   ],
   "adjectives": [
    "RX2",
    "BRAIN",
    "BUMPY",
    "NOISEL",
    "YELLOW",
    "FILTERING"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"yellow IC\" \"bumpy object\" \"filtering object\" \"noiseless object\" \"brain two\" \"RX2 IC\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This chip is a replacement filtering processor (RX2).\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEWCHIP2\n\t(IN BASKET)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM IC OBJECT TWO)\n\t(ADJECTIVE RX2 BRAIN BUMPY NOISEL YELLOW FILTERING)\n\t(DESC \"IC\")\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"yellow IC\"\"bumpy object\"\"filtering object\"\"noiseless object\"\"brain two\"\"RX2 IC\" 0 0 0 0 0 0 >)\n\t(ACTION CHIPFILTER-FCN)\n\t(CLC-TXT <PLTABLE \"This chip is a replacement filtering processor (RX2).\" 0 0>)>",
   "referencedBy": [
    "CHIPFILTER-FCN",
    "ORANGE-BUTTON-FCN",
    "SUPPLIES-N-FCN"
   ]
  },
  "NEWCHIP3": {
   "name": "NEWCHIP3",
   "file": "objects.zil",
   "line": 217,
   "endLine": 225,
   "desc": "IC",
   "ldesc": null,
   "fdesc": null,
   "loc": "BASKET",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "IC",
    "OBJECT",
    "TRIO"
   ],
   "adjectives": [
    "RX3",
    "GREEN",
    "WAVY",
    "NONVERBAL",
    "BRAIN",
    "MAXIMI"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CLC-TXT": [
     "<PLTABLE \"This chip is a replacement maximizing processor (RX3).\" 0 0>"
    ],
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"green IC\" \"wavy object\" \"maximized object\" \"nonverbal object\" \"brain trio\" \"RX3 IC\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEWCHIP3\n\t(IN BASKET)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM IC OBJECT TRIO)\n\t(ADJECTIVE RX3 GREEN WAVY NONVERBAL BRAIN MAXIMI)\n\t(DESC \"IC\")\n\t(CLC-TXT <PLTABLE \"This chip is a replacement maximizing processor (RX3).\" 0 0>)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"green IC\"\"wavy object\"\"maximized object\"\"nonverbal object\"\"brain trio\"\"RX3 IC\" 0 0 0 0 0 0 >)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": []
  },
  "NEWCHIP4": {
   "name": "NEWCHIP4",
   "file": "objects.zil",
   "line": 227,
   "endLine": 235,
   "desc": "IC",
   "ldesc": null,
   "fdesc": null,
   "loc": "BASKET",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "IC",
    "OBJECT",
    "QUARTE"
   ],
   "adjectives": [
    "RX4",
    "PLAID",
    "PEBBLE",
    "SHHHHH",
    "BRAIN",
    "BUSS"
   ],
   "action": "CHIPFILTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CLC-TXT": [
     "<PLTABLE \"This chip is a replacement buss processor (RX4).\" 0 0>"
    ],
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"plaid IC\" \"pebbled object\" \"buss object\" \"shhhhh object\" \"brain quartet\" \"RX4 IC\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEWCHIP4\n\t(IN BASKET)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM IC OBJECT QUARTE)\n\t(ADJECTIVE RX4 PLAID PEBBLE SHHHHH BRAIN BUSS)\n\t(DESC \"IC\")\n\t(CLC-TXT <PLTABLE \"This chip is a replacement buss processor (RX4).\" 0 0>)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"plaid IC\"\"pebbled object\"\"buss object\"\"shhhhh object\"\"brain quartet\"\"RX4 IC\" 0 0 0 0 0 0 >)\n\t(ACTION CHIPFILTER-FCN)>",
   "referencedBy": []
  },
  "WIRECUTTER": {
   "name": "WIRECUTTER",
   "file": "objects.zil",
   "line": 264,
   "endLine": 285,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "TOPSHELF",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "CU1",
    "TOOL",
    "CUTTERS",
    "SLICER"
   ],
   "adjectives": [
    "LIFE",
    "WIRE",
    "LITTLE",
    "CUTTING",
    "NOISEL",
    "METAL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE \"Sitting on the top shelf is a pair of wire cutters.\" \"Sonar detects a small tool which could be used for cutting, sitting on the top\nshelf.\" \"Vibrational output from the top shelf shows a small metal object there.\" 0 \"Among the various things in life I've learned, it's to examine all shelving.\nThis one has a slicer on it.\" \"CLC tagged object CU1 sits on top of the shelf.\" \"pair of cutters\" \"cutting tool\" \"metal tool\" \"noiseless object\" \"life slicer\" \"CU1\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This is a standard cutting instrument.\" \"It can prove useful for salvaging wires and cables.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WIRECUTTER\n\t(IN TOPSHELF)\n\t(OBJDESCS <PLTABLE\n\"Sitting on the top shelf is a pair of wire cutters.\"\n\"Sonar detects a small tool which could be used for cutting, sitting on the top\nshelf.\"\n\"Vibrational output from the top shelf shows a small metal object there.\"\n0\n\"Among the various things in life I've learned, it's to examine all shelving.\nThis one has a slicer on it.\"\n\"CLC tagged object CU1 sits on top of the shelf.\"\n\"pair of cutters\"\n\"cutting tool\"\n\"metal tool\"\n\"noiseless object\"\n\"life slicer\"\n\"CU1\"\n0 0 0 0 0 0>)\n\t(SYNONYM CU1 TOOL CUTTERS SLICER)\n\t(CLC-TXT <PLTABLE \"This is a standard cutting instrument.\" \"It can prove useful for salvaging wires and cables.\" 0>)\n\t(ADJECTIVE LIFE WIRE LITTLE CUTTING NOISEL METAL)\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "PEOPLE-FCN",
    "V-CUT"
   ]
  },
  "TOPSHELF": {
   "name": "TOPSHELF",
   "file": "objects.zil",
   "line": 287,
   "endLine": 301,
   "desc": "top shelf",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOOL-AREA",
   "flags": [
    "OPENBIT",
    "CONTBIT",
    "TOUCHBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "TS",
    "HOLDER",
    "SHELF"
   ],
   "adjectives": [
    "HIGH",
    "EXTENDING",
    "TOP",
    "FURTHEST",
    "FARTHEST",
    "STABLE"
   ],
   "action": "TOPSHELF-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"high extending holder\" \"stable holder\" 0 \"furthest holder\" \"TS\" 0 \"It appears to be a solid, long extension from the wall.\" \"It is inert, transmitting and receiving no vibrations.\" 0 \"Perhaps the most useful adjunct to the modern, everyday living situation is\nthe proper use of space.\" \"TS appears to be little more than a piece of furniture.\">"
    ],
    "CAPACITY": [
     "50"
    ]
   },
   "contents": [
    "WIRECUTTER"
   ],
   "source": "<OBJECT TOPSHELF\n\t(IN TOOL-AREA)\n\t(DESC \"top shelf\")\n\t(FLAGS OPENBIT CONTBIT TOUCHBIT SURFACEBIT)\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \n0 \"high extending holder\" \"stable holder\" 0 \"furthest holder\" \"TS\"\n0 \"It appears to be a solid, long extension from the wall.\"\n\"It is inert, transmitting and receiving no vibrations.\" 0\n\"Perhaps the most useful adjunct to the modern, everyday living situation is\nthe proper use of space.\"\n\"TS appears to be little more than a piece of furniture.\">)\n\t(SYNONYM TS HOLDER SHELF)\n\t(ACTION TOPSHELF-FCN)\n\t(ADJECTIVE HIGH EXTENDING TOP FURTHEST FARTHEST STABLE)\n\t(CAPACITY 50)>",
   "referencedBy": [
    "PRE-TAKE",
    "V-PUT-UNDER",
    "V-PUT-ON"
   ]
  },
  "WEDGE": {
   "name": "WEDGE",
   "file": "objects.zil",
   "line": 311,
   "endLine": 344,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-SOUTH",
   "flags": [
    "CLIMBBIT",
    "TAKEBIT",
    "SURFACEBIT",
    "FURNITURE"
   ],
   "synonyms": [
    "WEDGE",
    "OBJECT",
    "RAMP",
    "W1"
   ],
   "adjectives": [
    "NOISEL",
    "SOLID",
    "RISING",
    "FALLIN",
    "SLANTING",
    "DENSE"
   ],
   "action": "WEDGE2-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE \"A steep, wedge-shaped ramp sits under some rubble near the wall.\" \"A slanting object seems distinct from the surrounding jumble of\ndebris.\" \"Nothing within this environment emits singular vibrations, but an\nobject does send out a CLC identifier.\" 0 \"To rise and fall, and climb new heights, to descend the pit of robot\ndespair.\" \"CLC object W1 transmitting identifier wave from this location.\" \"ramp\" \"solid wedge\" \"dense wedge\" \"noiseless wedge\" \"slanting wedge\" \"W1\" \"It looks like a useful wedge, an incline which could be used for\ngetting up and down areas where steps might stop us.\" \"It feels solid and sturdy. It is large enough for me to use as a ramp.\" \"The object is totally inert, emitting nothing but an identifier signal\non the CLC channel.\" 0 \"Much like see-saws of our lives, this provides the opportunity to\ndescend and rise above our normal stations, oh slanter.\" \"CLC data indicate this wedge is normally used for descent and climbing\nfrom level to level.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE 0 \"This 'wedge' can be used as a step or small platform.\" 0>"
    ],
    "SIZE": [
     "15"
    ]
   },
   "contents": [],
   "source": "<OBJECT WEDGE\n\t(IN SUPPLIES-SOUTH)\n\t(SYNONYM WEDGE OBJECT RAMP W1)\n\t(ADJECTIVE NOISEL SOLID RISING FALLIN SLANTING DENSE)\n\t(FLAGS CLIMBBIT TAKEBIT SURFACEBIT FURNITURE)\n\t(OBJDESCS <PLTABLE\n\"A steep, wedge-shaped ramp sits under some rubble near the wall.\"\n\"A slanting object seems distinct from the surrounding jumble of\ndebris.\"\n\"Nothing within this environment emits singular vibrations, but an\nobject does send out a CLC identifier.\"\n0\n\"To rise and fall, and climb new heights, to descend the pit of robot\ndespair.\"\n\"CLC object W1 transmitting identifier wave from this location.\" \n\"ramp\"\n\"solid wedge\"\n\"dense wedge\"\n\"noiseless wedge\"\n\"slanting wedge\"\n\"W1\"\n\"It looks like a useful wedge, an incline which could be used for\ngetting up and down areas where steps might stop us.\"\n\"It feels solid and sturdy. It is large enough for me to use as a ramp.\"\n\"The object is totally inert, emitting nothing but an identifier signal\non the CLC channel.\"\n0\n\"Much like see-saws of our lives, this provides the opportunity to\ndescend and rise above our normal stations, oh slanter.\"\n\"CLC data indicate this wedge is normally used for descent and climbing\nfrom level to level.\">)\n\t(ACTION WEDGE2-FCN)\n\t(CLC-TXT <PLTABLE 0 \"This 'wedge' can be used as a step or small platform.\" 0>) \n\t(SIZE 15)>",
   "referencedBy": [
    "STEP-FCN",
    "MOVE-RBT?",
    "WEDGE2-FCN",
    "JUNCTION-FCN",
    "REPAIRX-FCN",
    "DESCRIBE-OBJECT",
    "V-TAKE",
    "PRE-PUT",
    "V-PUT-AGAINST",
    "V-RAISE",
    "V-CLIMB-UP",
    "V-CLIMB-DOWN",
    "V-STEP-ON",
    "V-STAND-ON",
    "DO-THE-TV"
   ]
  },
  "SURGERY-HAND": {
   "name": "SURGERY-HAND",
   "file": "objects.zil",
   "line": 391,
   "endLine": 423,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-MID",
   "flags": [
    "TOOLBIT",
    "TAKEBIT",
    "WEARABLEBIT"
   ],
   "synonyms": [
    "MH1",
    "EXTENS",
    "GRASPER",
    "OBJECT"
   ],
   "adjectives": [
    "ARM-SHAPED",
    "MICROSURGERY",
    "SMALL",
    "USABLE",
    "MICRO",
    "TINGIN"
   ],
   "action": "WALDO-ONLY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE \"Sitting on the floor, beneath the broken shelves, sits an extension device,\na microsurgery hand.\" \"Sonar detects an arm-shaped extension lying nearby.\" \"A small object emits a weak signal, specifically oriented toward\nWaldo.\" \"I can hear a small 'tinging' from an object on the floor.\" \"It is something we can all grasp, something to embrace, whose presence I\ndetect.\" \"CLC tagged object MH1 emitting identifier signal.\" \"microsurgery extension\" \"usable extension\" \"micro extension\" \"tinging object\" \"grasper\" \"MH1\" \"It looks like a delicate extension to me.\" \"I feel the extension and recognize it as belonging to me. I can utilize\nit for microsurgery repairs.\" \"It emits electrical impulses which are attuned to Waldo, and only\nWaldo.\" \"The pinging or tinging sound it emits is on the wavelength attuned to\nWaldo.\" \"A problem to grapple with, a handy solution, and an extension of Waldo\nin his incarnation.\" \"CLC tagged object offers no further data unless CLC accessed directly.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE 0 \"It looks like a simple waldo for Waldo, in a sense. It has small extensions on it which could probably be used for micro-surgery or something like that.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT SURGERY-HAND\n\t(IN SUPPLIES-MID)\n\t(FLAGS TOOLBIT TAKEBIT WEARABLEBIT)\n\t(SYNONYM MH1 EXTENS GRASPER OBJECT)\n\t(ADJECTIVE ARM-SHAPED MICROSURGERY SMALL USABLE MICRO TINGIN)\n\t(OBJDESCS <PLTABLE\n\"Sitting on the floor, beneath the broken shelves, sits an extension device,\na microsurgery hand.\"\n\"Sonar detects an arm-shaped extension lying nearby.\"\n\"A small object emits a weak signal, specifically oriented toward\nWaldo.\" \n\"I can hear a small 'tinging' from an object on the floor.\"\n\"It is something we can all grasp, something to embrace, whose presence I\ndetect.\"\n\"CLC tagged object MH1 emitting identifier signal.\"\n\"microsurgery extension\"\n\"usable extension\"\n\"micro extension\"\n\"tinging object\"\n\"grasper\"\n\"MH1\"\n\"It looks like a delicate extension to me.\"\n\"I feel the extension and recognize it as belonging to me. I can utilize\nit for microsurgery repairs.\"\n\"It emits electrical impulses which are attuned to Waldo, and only\nWaldo.\"\n\"The pinging or tinging sound it emits is on the wavelength attuned to\nWaldo.\"\n\"A problem to grapple with, a handy solution, and an extension of Waldo\nin his incarnation.\"\n\"CLC tagged object offers no further data unless CLC accessed directly.\" > )\n\t(CLC-TXT <PLTABLE 0 \"It looks like a simple waldo for Waldo, in a sense. It has small extensions on it which could probably be used for micro-surgery or something like that.\" 0>)\n\t(ACTION WALDO-ONLY-FCN)>",
   "referencedBy": [
    "CHANGE-WINNER",
    "PANEL-FCN",
    "REDWIRE-FCN",
    "WALDO-FCN",
    "V-COUNT",
    "ITAKE",
    "V-PUT",
    "IDROP"
   ]
  },
  "CABINET": {
   "name": "CABINET",
   "file": "objects.zil",
   "line": 431,
   "endLine": 453,
   "desc": "cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR3",
   "flags": [
    "CONTBIT"
   ],
   "synonyms": [
    "CAGE",
    "CB3",
    "CABINE",
    "OBJECT"
   ],
   "adjectives": [
    "LARGE",
    "HOLLOW",
    "EMITTING",
    "CIRCUI"
   ],
   "action": "CABINET-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 \"A large object sits before me. Sonar indicates it is hollow, but not\nempty.\" \"A large object emits strange flows, its surface a tracery of filament-like\ncircuitry. The circuitry is concentrated near the center of one side.\" 0 \"A cage to hold our ancestry sits on the floor, meek and timid, yet unwilling\nto openly share.\" \"CLC tagged object CB3 located within this environment.\" 0 \"hollow object\" \"large object\" 0 \"cage\" \"CB3\" 0 0 \"Concentrated on the front surface of the large object is a flowswitch.\" 0 \"Further information regarding the cage can be gained if I touch it.\" 0 \"Data bits flow within the surface of the cage, concentrated in a circle.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This container has a special locking mechanism.\" \"Poet and Sensa can both perceive special characteristics of it.\" 0>"
    ]
   },
   "contents": [
    "DEADBOT"
   ],
   "source": "<OBJECT CABINET\n\t(IN REPAIR3)\n\t(FLAGS CONTBIT)\n\t(DESC \"cabinet\")\n\t(SYNONYM CAGE CB3 CABINE OBJECT)\n\t(ADJECTIVE LARGE HOLLOW EMITTING CIRCUI)\n\t(ACTION CABINET-FCN)\n\t(CAPACITY 100)\n\t(OBJDESCS <PLTABLE 0\n\"A large object sits before me. Sonar indicates it is hollow, but not\nempty.\"\n\"A large object emits strange flows, its surface a tracery of filament-like\ncircuitry. The circuitry is concentrated near the center of one side.\"\n0\n\"A cage to hold our ancestry sits on the floor, meek and timid, yet unwilling\nto openly share.\"\n\"CLC tagged object CB3 located within this environment.\"\n0 \"hollow object\" \"large object\" 0 \"cage\" \"CB3\"\n0 0  \n\"Concentrated on the front surface of the large object is a flowswitch.\" 0 \n\"Further information regarding the cage can be gained if I touch it.\" 0 \n\"Data bits flow within the surface of the cage, concentrated in a circle.\">)\n\t(CLC-TXT <PLTABLE \"This container has a special locking mechanism.\" \"Poet and Sensa can both perceive special characteristics of it.\" 0>)>",
   "referencedBy": [
    "CABINET-FCN",
    "FLOWSWITCH-FCN",
    "TWOBOTS-FCN"
   ]
  },
  "FLOWSWITCH": {
   "name": "FLOWSWITCH",
   "file": "objects.zil",
   "line": 468,
   "endLine": 485,
   "desc": "flowswitch",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR3",
   "flags": [
    "INVISIBLE",
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "PLATES",
    "FLOWSWITCH",
    "SWITCH",
    "CIRCLE"
   ],
   "adjectives": [
    "FLOW",
    "ROUND"
   ],
   "action": "FLOWSWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 0 \"flowswitch\" 0 \"lock\" 0 \"flowswitch\" \"flowswitch\" \"flowswitch\" \"flowswitch\" \"lock\" \"flowswitch\" 0 0 \"The flowswitch is a series of plates which must be properly lined up to allow\nproper electron flow.\" 0 \"This is actually a flowswitch which must be turned, allowing proper\nelectron flow.\" 0 \"Sensa has the ability to turn the plates and detect when they are properly\naligned.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"The flowswitch is actually electrical 'plates' of polarity which can be properly aligned.\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT FLOWSWITCH\n\t(IN REPAIR3)\n\t(FLAGS INVISIBLE NDESCBIT TURNBIT)\n\t(DESC \"flowswitch\")\n\t(SYNONYM PLATES FLOWSWITCH SWITCH CIRCLE)\n\t(ADJECTIVE FLOW ROUND)\n\t(OBJDESCS <PLTABLE\n0 0 \"flowswitch\" 0 \"lock\" 0\n\"flowswitch\" \"flowswitch\" \"flowswitch\" \"flowswitch\" \"lock\" \"flowswitch\"\n0 0 \n\"The flowswitch is a series of plates which must be properly lined up to allow\nproper electron flow.\" 0 \n\"This is actually a flowswitch which must be turned, allowing proper\nelectron flow.\" 0 \n\"Sensa has the ability to turn the plates and detect when they are properly\naligned.\">)\n\t(ACTION FLOWSWITCH-FCN)\n\t(CLC-TXT <PLTABLE \"The flowswitch is actually electrical 'plates' of polarity which can be properly aligned.\" 0 0>)>",
   "referencedBy": [
    "CABINET-FCN"
   ]
  },
  "DEADBOT": {
   "name": "DEADBOT",
   "file": "objects.zil",
   "line": 509,
   "endLine": 534,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "CABINET",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "MECHAN",
    "CONSTRUCT",
    "DEVICE",
    "FRED"
   ],
   "adjectives": [
    "BROKEN",
    "UNTAGG"
   ],
   "action": "DEADBOT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "200"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 \"An open mechanism with similar parts to myself sits here, totally immobile.\" \"Miles of circuitry rest within the device sitting here, though it no longer\nseems operational.\" \"A broken construct sits here, totally immobile.\" \"There once was a robot named Fred,|\nWho never conceived being dead.|\n  But late in the night,|\n  A terrible fright|\nLeft him clearly without his own head.\" \"There is a device here which the CLC cannot identify.\" 0 \"broken mechanism\" \"broken device\" \"broken construct\" \"FRED\" \"device the CLC cannot identify\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This robot is a dead and departed robot who is totally beyond repair.\" \"There may be some salvageable parts inside it.\" \"This robot was an all-purpose, multi-function robot which proved inadequate for maintenance purposes.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT DEADBOT\n\t(IN CABINET)\n\t(SYNONYM MECHAN CONSTRUCT DEVICE FRED)\n\t(ADJECTIVE BROKEN UNTAGG)\n\t(FLAGS TAKEBIT)\n\t(SIZE 200)\n\t(ACTION DEADBOT-FCN)\n\t(OBJDESCS <PLTABLE 0\n\"An open mechanism with similar parts to myself sits here, totally immobile.\"\n\"Miles of circuitry rest within the device sitting here, though it no longer\nseems operational.\"\n\"A broken construct sits here, totally immobile.\"\n\"There once was a robot named Fred,|\nWho never conceived being dead.|\n  But late in the night,|\n  A terrible fright|\nLeft him clearly without his own head.\"\n\"There is a device here which the CLC cannot identify.\"\n0\n\"broken mechanism\"\n\"broken device\"\n\"broken construct\"\n\"FRED\"\n\"device the CLC cannot identify\"\n0 0 0 0 0 0>)\n\t(CLC-TXT <PLTABLE \"This robot is a dead and departed robot who is totally beyond repair.\" \"There may be some salvageable parts inside it.\" \"This robot was an all-purpose, multi-function robot which proved inadequate for maintenance purposes.\">)>",
   "referencedBy": [
    "FLOWSWITCH-FCN",
    "DEADBOT-FCN",
    "REDWIRE-FCN",
    "CONVEYERBELT-FCN",
    "TWOBOTS-FCN",
    "V-MOVE-ROBOT-TO-LOC",
    "V-REPAIR"
   ]
  },
  "REDWIRE": {
   "name": "REDWIRE",
   "file": "objects.zil",
   "line": 552,
   "endLine": 572,
   "desc": "wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR3",
   "flags": [
    "CUTABLEBIT",
    "INVISIBLE",
    "TAKEBIT"
   ],
   "synonyms": [
    "WIRE",
    "LIFE",
    "CONDUC",
    "CABLE"
   ],
   "adjectives": [
    "SMOOTH",
    "BUNCH",
    "CURRENT",
    "GROUP",
    "TWELVE"
   ],
   "action": "REDWIRE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 \"I can feel a bunch of smooth wire coming out of the mechanism.\" \"A group of conductors extend from the once-electronic mechanism.\" \"The broken device seems beyond repairing.\" \"The currents of life are easily visible now.\" \"A CR streams out of the untagged device.\" \"twelve-inch red cable\" \"twelve-inch cable\" \"twelve-inch cable\" \"twelve-inch cable\" \"twelve-inch cable\" \"twelve-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT REDWIRE\n\t(IN REPAIR3)\n\t(FLAGS CUTABLEBIT INVISIBLE TAKEBIT)\n\t(DESC \"wire\")\n\t(OBJDESCS <PLTABLE\n1 \n\"I can feel a bunch of smooth wire coming out of the mechanism.\"\n\"A group of conductors extend from the once-electronic mechanism.\"\n\"The broken device seems beyond repairing.\" \n\"The currents of life are easily visible now.\"\n\"A CR streams out of the untagged device.\"  \n\"twelve-inch red cable\"\n\"twelve-inch cable\"\n\"twelve-inch cable\"\n\"twelve-inch cable\"\n\"twelve-inch cable\"\n\"twelve-inch cable\"\n0 0 0 0 0 0>)\n\t(ADJECTIVE SMOOTH BUNCH CURRENT GROUP TWELVE)\n\t(SYNONYM WIRE LIFE CONDUC CABLE)\n\t(ACTION REDWIRE-FCN)>",
   "referencedBy": [
    "DEADBOT-FCN",
    "REDWIRE-FCN",
    "GROOVE-CONT",
    "CIRCLE-FCN",
    "TWOBOTS-FCN",
    "I-WIRE-MESSAGE"
   ]
  },
  "CAR": {
   "name": "CAR",
   "file": "objects.zil",
   "line": 593,
   "endLine": 610,
   "desc": "vehicle",
   "ldesc": null,
   "fdesc": null,
   "loc": "HALL-END",
   "flags": [
    "VEHBIT"
   ],
   "synonyms": [
    "CONTAI",
    "OBJECT",
    "CARRIAGE",
    "CAR"
   ],
   "adjectives": [
    "HOLLOW",
    "LARGE",
    "MOBILE",
    "EGG-SHAPED"
   ],
   "action": "CAR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 \"Sonar also detects a large hollow container sitting at the head of the long\ntunnel.\" \"Sensors detect an egg-shaped object, large enough for me to enter, sitting at\nthe head of the long tunnel.\" \"The crackling ozone is muffled by a large object sitting before it.\" \"Before me sits a carriage of ancient splendor.\" \"Mobile CLC tagged object CAR is at the head of the tunnel.\" 0 \"container\" \"egg-shaped object\" \"large object\" \"carriage\" \"CAR\" 0 0 0 0 0 0 \"The carriage is a complex mechanism capable of transporting one robot at a time over large distances and is in good working order.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Operating this vehicle is as simple as entering it.\" \"Use this to get to the Biological Area and back.\" \"This device was introduced after maintaining the Biological Area became necessary.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT CAR\n\t(IN HALL-END)\n\t(FLAGS VEHBIT)\n\t(DESC \"vehicle\")\n\t(OBJDESCS <PLTABLE 0\n\"Sonar also detects a large hollow container sitting at the head of the long\ntunnel.\"\n\"Sensors detect an egg-shaped object, large enough for me to enter, sitting at\nthe head of the long tunnel.\"\n\"The crackling ozone is muffled by a large object sitting before it.\"\n\"Before me sits a carriage of ancient splendor.\"\n\"Mobile CLC tagged object CAR is at the head of the tunnel.\"\n0 \"container\" \"egg-shaped object\" \"large object\" \"carriage\" \"CAR\"\n0 0 0 0 0 0 \"The carriage is a complex mechanism capable of transporting one robot at a time over large distances and is in good working order.\" >)\n\t(ACTION CAR-FCN)\n\t(SYNONYM CONTAI OBJECT CARRIAGE CAR)\n\t(ADJECTIVE HOLLOW LARGE MOBILE EGG-SHAPED)\n\t(CLC-TXT <PLTABLE \"Operating this vehicle is as simple as entering it.\" \"Use this to get to the Biological Area and back.\" \"This device was introduced after maintaining the Biological Area became necessary.\">)>",
   "referencedBy": [
    "CAR-FCN",
    "PARRIVE4",
    "I-CAR-WAIT",
    "I-KILL",
    "V-LOOK",
    "DESCRIBE-ROBOTS",
    "PRINT-CONT",
    "V-OPEN",
    "V-BOARD",
    "V-REPORT-LOC",
    "V-WALK-TO"
   ]
  },
  "WDIAL1": {
   "name": "WDIAL1",
   "file": "objects.zil",
   "line": 647,
   "endLine": 658,
   "desc": "first dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEATHER",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "DIAL"
   ],
   "adjectives": [
    "FIRST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"first dial\" \"first dial\" \"first dial\" \"first dial\" \"first dial\" 0 \"I can feel gradations etched into the dial which go from 0 to 100.\" \"The dial is a variable potentiometer which has 100 settings.\" 0 \"The dial can be set from 0 to 100 and is in proper working order.\" 0 \"The dial is in working order.\">"
    ],
    "DIAL": [
     "1"
    ],
    "CLC-TXT": [
     "<PLTABLE \"It is a simple dial with numbers etched into its surface.\" \"Turn these dials to override the FCs and set the pressure manually.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WDIAL1\n\t(IN WEATHER)\n\t(FLAGS TOUCHBIT NDESCBIT TURNBIT)\n\t(DESC \"first dial\")\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1 \n0 \"first dial\" \"first dial\" \"first dial\" \"first dial\" \"first dial\"\n0 \"I can feel gradations etched into the dial which go from 0 to 100.\" \"The dial is a variable potentiometer which has 100 settings.\" 0 \"The dial can be set from 0 to 100 and is in proper working order.\"0\"The dial is in working order.\">)\n\t(SYNONYM DIAL)\n\t(ADJECTIVE FIRST)\n\t(DIAL 1)\n\t(CLC-TXT <PLTABLE \"It is a simple dial with numbers etched into its surface.\" \"Turn these dials to override the FCs and set the pressure manually.\" 0>)>",
   "referencedBy": [
    "DESCRIBE-CONTROLS-FCN"
   ]
  },
  "WDIAL3": {
   "name": "WDIAL3",
   "file": "objects.zil",
   "line": 660,
   "endLine": 671,
   "desc": "third dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEATHER",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "DIAL"
   ],
   "adjectives": [
    "THIRD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"third dial\" \"third dial\" \"third dial\" \"third dial\" \"third dial\" \"third dial\" 0 \"I can feel gradations etched into the dial which go from 0 to 100.\" \"The dial is a variable potentiometer which has 100 settings.\" 0 \"The dial can be set from 0 to 100 and is in proper working order.\" 0 \"The dial is in working order.\">"
    ],
    "DIAL": [
     "3"
    ],
    "CLC-TXT": [
     "<PLTABLE \"It is a simple dial with numbers etched into its surface.\" \"Turn these dials to override the FCs and set the pressure manually.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WDIAL3\n\t(IN WEATHER)\n\t(FLAGS NDESCBIT TOUCHBIT TURNBIT)\n\t(DESC \"third dial\")\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1\n\"third dial\" \"third dial\" \"third dial\" \"third dial\" \"third dial\" \"third dial\"\n0 \"I can feel gradations etched into the dial which go from 0 to 100.\" \"The dial is a variable potentiometer which has 100 settings.\" 0 \"The dial can be set from 0 to 100 and is in proper working order.\" 0 \"The dial is in working order.\">)\n\t(SYNONYM DIAL)\n\t(ADJECTIVE THIRD)\n\t(DIAL 3)\n\t(CLC-TXT <PLTABLE \"It is a simple dial with numbers etched into its surface.\" \"Turn these dials to override the FCs and set the pressure manually.\" 0>)>",
   "referencedBy": [
    "DESCRIBE-CONTROLS-FCN"
   ]
  },
  "WDIAL2": {
   "name": "WDIAL2",
   "file": "objects.zil",
   "line": 673,
   "endLine": 684,
   "desc": "second dial",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEATHER",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "DIAL"
   ],
   "adjectives": [
    "SECOND"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"second dial\" \"second dial\" \"second dial\" \"second dial\" \"second dial\" 0 \"I can feel gradations etched into the dial which go from 0 to 100.\" \"The dial is a variable potentiometer which has 100 settings.\" 0 \"The dial can be set from 0 to 100 and is in proper working order.\" 0 \"The dial is in working order.\">"
    ],
    "DIAL": [
     "2"
    ],
    "CLC-TXT": [
     "<PLTABLE \"It is a simple dial with numbers etched into its surface.\" \"Turn these dials to override the FCs and set the pressure manually.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WDIAL2\n\t(IN WEATHER)\n\t(FLAGS TOUCHBIT NDESCBIT TURNBIT)\n\t(DESC \"second dial\")\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1\n0 \"second dial\" \"second dial\" \"second dial\" \"second dial\" \"second dial\"\n0 \"I can feel gradations etched into the dial which go from 0 to 100.\" \"The dial is a variable potentiometer which has 100 settings.\" 0 \"The dial can be set from 0 to 100 and is in proper working order.\" 0 \"The dial is in working order.\">)\n\t(SYNONYM DIAL)\n\t(ADJECTIVE SECOND)\n\t(DIAL 2)\n\t(CLC-TXT <PLTABLE \"It is a simple dial with numbers etched into its surface.\" \"Turn these dials to override the FCs and set the pressure manually.\" 0>)>",
   "referencedBy": [
    "DESCRIBE-CONTROLS-FCN"
   ]
  },
  "CLONESWITCH": {
   "name": "CLONESWITCH",
   "file": "objects.zil",
   "line": 686,
   "endLine": 696,
   "desc": "switch",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRYOUNITS",
   "flags": [
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "ROD",
    "SWITCH"
   ],
   "adjectives": [
    "ELECTR",
    "LARGE",
    "STRAIG"
   ],
   "action": "CLONESWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"switch\" \"switch\" \"switch\" \"switch\" \"switch\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CLONESWITCH\n\t(IN CRYOUNITS)\n\t(FLAGS NDESCBIT TURNBIT)\n\t(DESC \"switch\")\n\t(SYNONYM ROD SWITCH)\n\t(ADJECTIVE ELECTR LARGE STRAIG)\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1\n0 \"switch\"\"switch\"\"switch\"\"switch\"\"switch\"\n0 0 0 0 0 0>)\n\t(ACTION CLONESWITCH-FCN)>",
   "referencedBy": [
    "CLONESWITCH-FCN",
    "V-PUT-UNDER"
   ]
  },
  "WHEEL": {
   "name": "WHEEL",
   "file": "objects.zil",
   "line": 710,
   "endLine": 723,
   "desc": "WHEEL",
   "ldesc": null,
   "fdesc": null,
   "loc": "FCMAINT",
   "flags": [
    "TURNBIT"
   ],
   "synonyms": [
    "WHEEL",
    "WH",
    "OBJECT",
    "DEVICE"
   ],
   "adjectives": [
    "CIRCUL",
    "HISSIN",
    "MECHAN"
   ],
   "action": "CLONESWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 \"I can detect a wheel, high overhead, with tubular structures running out of it, much like pipes.\" \"I can detect the pressure backup regulating mechanism high overhead here as it regulates and monitors hydraulic pressures.\" \"I can hear the gurgling of liquid overhead as it rushes through pipes and a regulatory wheel high overhead.\" \"You press the first valve down, the acid goes round and round, oh oh oh oh, oh oh and it comes out here.\" \"CLC tagged regulatory device WH detected overhead.\" \"wheel\" \"wheel\" \"wheel\" \"wheel\" \"wheel\" \"WH\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This wheel controls the cooling acids which circulate through the Filtering Computers.\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WHEEL\n\t(IN FCMAINT)\n\t(FLAGS TURNBIT)\n\t(DESC \"WHEEL\")\n\t(SYNONYM WHEEL WH OBJECT DEVICE)\n\t(ADJECTIVE CIRCUL HISSIN MECHAN)\n\t(OBJDESCS <PLTABLE 0\n\"I can detect a wheel, high overhead, with tubular structures running out of it, much like pipes.\"\n\"I can detect the pressure backup regulating mechanism high overhead here as it regulates and monitors hydraulic pressures.\"\n\"I can hear the gurgling of liquid overhead as it rushes through pipes and a regulatory wheel high overhead.\"\n\"You press the first valve down, the acid goes round and round, oh oh oh oh, oh oh and it comes out here.\"\n\"CLC tagged regulatory device WH detected overhead.\" \"wheel\"\"wheel\"\"wheel\"\"wheel\"\"wheel\"\"WH\" 0 0 0 0 0 0>)\n\t(ACTION CLONESWITCH-FCN)\n\t(CLC-TXT <PLTABLE \"This wheel controls the cooling acids which circulate through the Filtering Computers.\" 0 0>)>",
   "referencedBy": [
    "CLONESWITCH-FCN",
    "FCMAINT-FCN",
    "V-PUT-UNDER"
   ]
  },
  "TV": {
   "name": "TV",
   "file": "objects.zil",
   "line": 725,
   "endLine": 746,
   "desc": "camera",
   "ldesc": null,
   "fdesc": null,
   "loc": "BIO-LAB",
   "flags": [
    "TAKEBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "TRANSM",
    "SENDER",
    "DEVICE",
    "SPHERE"
   ],
   "adjectives": [
    "PROJECTION",
    "TV1",
    "SMALL",
    "CAMERA",
    "JACK",
    "TV",
    "TELEVI"
   ],
   "action": "TV-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 \"Sitting on the floor is a small sphere which has a jack trailing from it.\" \"I can detect a small device which is capable of transmitting signals on the RF band.\" 0 \"A device useful for getting me to become a star is located nearby.\" \"CLC tagged device TV1 sits on the floor by a table.\" \"television camera\" \"small sphere\" \"transmitter\" \"television camera\" \"sender\" \"TV1\" 0 \"There are small grasping areas on it which correspond to my graspers.\" \"The device needs to be plugged in in order for it to be operational.\" \"It makes no sounds.\" \"Hey, baby, hang around Schwab's long enough and ... who knows?\" \"This device seems linked with Iris.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This is a complex television camera which links directly to Iris.\" \"It can be activated by plugging it in at the correct location.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT TV\n\t(IN BIO-LAB)\n\t(FLAGS TAKEBIT CONTBIT)\n\t(DESC \"camera\")\n\t(OBJDESCS <PLTABLE\n1 \n\"Sitting on the floor is a small sphere which has a jack trailing from it.\"\n\"I can detect a small device which is capable of transmitting signals on the RF band.\"\n0\n\"A device useful for getting me to become a star is located nearby.\"\n\"CLC tagged device TV1 sits on the floor by a table.\"\n\"television camera\" \"small sphere\" \"transmitter\" \"television camera\" \"sender\" \"TV1\"\n0\n\"There are small grasping areas on it which correspond to my graspers.\"\n\"The device needs to be plugged in in order for it to be operational.\"\n\"It makes no sounds.\"\n\"Hey, baby, hang around Schwab's long enough and ... who knows?\"\n\"This device seems linked with Iris.\">)\n\t(SYNONYM TRANSM SENDER DEVICE SPHERE)\n\t(CLC-TXT <PLTABLE \"This is a complex television camera which links directly to Iris.\" \"It can be activated by plugging it in at the correct location.\" 0>)\n\t(ADJECTIVE PROJECTION TV1 SMALL CAMERA JACK TV TELEVI)\n\t(ACTION TV-FCN)>",
   "referencedBy": [
    "TV-FCN",
    "V-POINT",
    "DO-THE-TV"
   ]
  },
  "REDCABLE": {
   "name": "REDCABLE",
   "file": "objects.zil",
   "line": 795,
   "endLine": 808,
   "desc": "red cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE2",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "FOUR-INCH"
   ],
   "action": "REDCABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"red four-inch cable\" \"four-inch cable\" \"four-inch cable\" \"four-inch cable\" \"four-inch cable\" \"four-inch cable\" 0 0 \"The electrical flow within this cable seems irregular.\" 0 \"The data transmissions within this cable are irregular. Immediate replacement\nrecommended.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT REDCABLE\n\t(IN GROOVE2)\n\t(DESC \"red cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE FOUR-INCH)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(ACTION REDCABLE-FCN)\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1 \n\"red four-inch cable\"\"four-inch cable\"\"four-inch cable\"\"four-inch cable\"\"four-inch cable\"\"four-inch cable\"\n0 0 \n\"The electrical flow within this cable seems irregular.\" 0 \n\"The data transmissions within this cable are irregular. Immediate replacement\nrecommended.\" 0>)>",
   "referencedBy": [
    "GO",
    "REDWIRE-FCN",
    "REDCABLE-FCN",
    "GROOVE-CONT",
    "V-REPAIR"
   ]
  },
  "YELLOWCABLE": {
   "name": "YELLOWCABLE",
   "file": "objects.zil",
   "line": 810,
   "endLine": 820,
   "desc": "yellow cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE2",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "EIGHTEEN"
   ],
   "action": "KILL-CABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 \"eighteen-inch yellow cable\" \"eighteen-inch cable\" \"eighteen-inch cable\" \"eighteen-inch cable\" \"eighteen-inch cable\" \"eighteen-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT YELLOWCABLE\n\t(IN GROOVE2)\n\t(DESC \"yellow cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE EIGHTEEN)\n\t(FLAGS  TAKEBIT TOUCHBIT)\n\t(ACTION KILL-CABLE-FCN)\n\t(OBJDESCS <PLTABLE\n0 1 1 1 1 1\n\"eighteen-inch yellow cable\"\"eighteen-inch cable\"\"eighteen-inch cable\"\"eighteen-inch cable\"\"eighteen-inch cable\"\"eighteen-inch cable\"\n0 0 0 0 0 0>)>",
   "referencedBy": [
    "GROOVE-CONT",
    "V-POINT",
    "V-REPAIR"
   ]
  },
  "GREENCABLE": {
   "name": "GREENCABLE",
   "file": "objects.zil",
   "line": 822,
   "endLine": 833,
   "desc": "green cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE2",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "TEN-INCH"
   ],
   "action": "KILL-CABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 \"ten-inch green cable\" \"ten-inch cable\" \"ten-inch cable\" \"ten-inch cable\" \"ten-inch cable\" \"ten-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT GREENCABLE\n\t(IN GROOVE2)\n\t(DESC \"green cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE TEN-INCH)\n\t(FLAGS  TAKEBIT TOUCHBIT)\n\t(ACTION KILL-CABLE-FCN)\n\t(OBJDESCS <PLTABLE\n0 1 1 1 1 1\n\"ten-inch green cable\"\"ten-inch cable\"\"ten-inch cable\"\n\"ten-inch cable\"\"ten-inch cable\"\"ten-inch cable\"\n0 0 0 0 0 0>)>",
   "referencedBy": [
    "GROOVE-CONT",
    "V-POINT",
    "V-REPAIR"
   ]
  },
  "PINKCABLE": {
   "name": "PINKCABLE",
   "file": "objects.zil",
   "line": 835,
   "endLine": 846,
   "desc": "pink cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE2",
   "flags": [
    "TOUCHBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "SIX-INCH"
   ],
   "action": "KILL-CABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"pink six-inch cable\" \"six-inch cable\" \"six-inch cable\" \"six-inch cable\" \"six-inch cable\" \"six-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT PINKCABLE\n\t(IN GROOVE2)\n\t(DESC \"pink cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE SIX-INCH)\n\t(FLAGS  TOUCHBIT TAKEBIT)\n\t(ACTION KILL-CABLE-FCN)\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1\n\"pink six-inch cable\"\"six-inch cable\"\"six-inch cable\"\n\"six-inch cable\"\"six-inch cable\"\"six-inch cable\"\n0 0 0 0 0 0>)>",
   "referencedBy": [
    "GROOVE-CONT",
    "V-POINT",
    "V-REPAIR"
   ]
  },
  "WHITECABLE": {
   "name": "WHITECABLE",
   "file": "objects.zil",
   "line": 849,
   "endLine": 860,
   "desc": "white cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE1",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "FIVE-I"
   ],
   "action": "KILL-CABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 \"white five-inch cable\" \"five-inch cable\" \"five-inch cable\" \"five-inch cable\" \"five-inch cable\" \"five-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT WHITECABLE\n\t(IN GROOVE1)\n\t(DESC \"white cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE FIVE-I)\n\t(FLAGS  TAKEBIT TOUCHBIT)\n\t(ACTION KILL-CABLE-FCN)\n\t(OBJDESCS <PLTABLE\n0 1 1 1 1 1\n\"white five-inch cable\"\"five-inch cable\"\"five-inch cable\"\n\"five-inch cable\"\"five-inch cable\"\"five-inch cable\"\n0 0 0 0 0 0>)>",
   "referencedBy": [
    "GROOVE-CONT",
    "V-POINT",
    "V-REPAIR"
   ]
  },
  "BLUECABLE": {
   "name": "BLUECABLE",
   "file": "objects.zil",
   "line": 862,
   "endLine": 873,
   "desc": "blue cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE1",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "TWENTY"
   ],
   "action": "KILL-CABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 \"twenty-inch blue cable\" \"twenty-inch cable\" \"twenty-inch cable\" \"twenty-inch cable\" \"twenty-inch cable\" \"twenty-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLUECABLE\n\t(IN GROOVE1)\n\t(DESC \"blue cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE TWENTY)\n\t(FLAGS  TAKEBIT TOUCHBIT)\n\t(ACTION KILL-CABLE-FCN)\n\t(OBJDESCS <PLTABLE\n0 1 1 1 1 1 \n\"twenty-inch blue cable\"\"twenty-inch cable\"\"twenty-inch cable\"\"twenty-inch cable\"\n\"twenty-inch cable\"\"twenty-inch cable\"\n0 0 0 0 0 0>)>",
   "referencedBy": [
    "GROOVE-CONT",
    "V-POINT",
    "V-REPAIR"
   ]
  },
  "BLACKCABLE": {
   "name": "BLACKCABLE",
   "file": "objects.zil",
   "line": 875,
   "endLine": 885,
   "desc": "black cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE1",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "NINETEEN"
   ],
   "action": "KILL-CABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 \"black nineteen-inch cable\" \"nineteen-inch cable\" \"nineteen-inch cable\" \"nineteen-inch cable\" \"nineteen-inch cable\" \"nineteen-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT BLACKCABLE\n\t(IN GROOVE1)\n\t(DESC \"black cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE NINETEEN)\n\t(FLAGS  TAKEBIT TOUCHBIT)\n\t(ACTION KILL-CABLE-FCN)\n\t(OBJDESCS <PLTABLE\n0 1 1 1 1 1\n\"black nineteen-inch cable\"\"nineteen-inch cable\"\"nineteen-inch cable\"\"nineteen-inch cable\"\"nineteen-inch cable\"\"nineteen-inch cable\"\n0 0 0 0 0 0>)>",
   "referencedBy": [
    "GROOVE-CONT",
    "V-POINT",
    "V-REPAIR"
   ]
  },
  "ORANGECABLE": {
   "name": "ORANGECABLE",
   "file": "objects.zil",
   "line": 887,
   "endLine": 900,
   "desc": "orange cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "GROOVE1",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "NINE-INCH"
   ],
   "action": "ORANGECABLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"nine-inch orange cable\" \"nine-inch cable\" \"nine-inch cable\" \"nine-inch cable\" \"nine-inch cable\" \"nine-inch cable\" 0 0 \"This cable is not transmitting energy properly.\" 0 0 0 \"Data transmissions are highly irregular through this cable.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT ORANGECABLE\n\t(IN GROOVE1)\n\t(DESC \"orange cable\")\n\t(SYNONYM CABLE)\n\t(ADJECTIVE NINE-INCH)\n\t(FLAGS  TAKEBIT TOUCHBIT)\n\t(ACTION ORANGECABLE-FCN)\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1\n\"nine-inch orange cable\"\"nine-inch cable\"\"nine-inch cable\"\n\"nine-inch cable\"\"nine-inch cable\"\"nine-inch cable\"\n0 0 \n\"This cable is not transmitting energy properly.\" 0 0 0  \n\"Data transmissions are highly irregular through this cable.\">)>",
   "referencedBy": [
    "GO",
    "ORANGECABLE-FCN",
    "GROOVE-CONT",
    "ORANGE-WIRE-FCN",
    "V-REPAIR"
   ]
  },
  "GROOVE1": {
   "name": "GROOVE1",
   "file": "objects.zil",
   "line": 917,
   "endLine": 929,
   "desc": "groove",
   "ldesc": null,
   "fdesc": null,
   "loc": "TUBE1",
   "flags": [
    "SURFACEBIT",
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "GROOVE",
    "TRACK"
   ],
   "adjectives": [],
   "action": "GROOVE-FCN",
   "descfcn": null,
   "contfcn": "GROOVE-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "21"
    ],
    "CLC-TXT": [
     "<PLTABLE \"The groove contains four wires and has an exposed section which allows for easy replacement of cables.\" \"Make sure you know which cables are live.\" \"The grooves were placed in the channels for making easy replacing and diagnosing of cables.\">"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 \"groove\" \"groove\" \"groove\" \"groove\" \"groove\" \"groove\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [
    "WHITECABLE",
    "BLUECABLE",
    "BLACKCABLE",
    "ORANGECABLE"
   ],
   "source": "<OBJECT GROOVE1\n\t(IN TUBE1)\n\t(FLAGS SURFACEBIT NDESCBIT CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 21)\n\t(DESC \"groove\")\n\t(CLC-TXT <PLTABLE \"The groove contains four wires and has an exposed section which allows for easy replacement of cables.\" \"Make sure you know which cables are live.\" \"The grooves were placed in the channels for making easy replacing and diagnosing of cables.\">)\n\t(OBJDESCS <PLTABLE\n0 1 1 1 1 1 \n\"groove\"\"groove\"\"groove\"\"groove\"\"groove\"\"groove\"\n0 0 0 0 0 0>)\n\t(ACTION GROOVE-FCN)\n\t(CONTFCN GROOVE-CONT)\n\t(SYNONYM GROOVE TRACK)>",
   "referencedBy": [
    "ORANGE-WIRE-FCN",
    "FIRSTER",
    "V-PUT",
    "V-POINT",
    "V-REPLACE"
   ]
  },
  "GROOVE2": {
   "name": "GROOVE2",
   "file": "objects.zil",
   "line": 931,
   "endLine": 943,
   "desc": "groove",
   "ldesc": null,
   "fdesc": null,
   "loc": "TUBE2",
   "flags": [
    "SURFACEBIT",
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "GROOVE",
    "TRACK"
   ],
   "adjectives": [],
   "action": "GROOVE-FCN",
   "descfcn": null,
   "contfcn": "GROOVE-CONT",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "21"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 \"groove\" \"groove\" \"groove\" \"groove\" \"groove\" \"groove\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"The groove contains four wires and has an exposed section which allows for easy replacement of cables.\" \"Make sure you know which cables are live.\" \"The grooves were placed in the channels for making easy replacing and diagnosing of cables.\">"
    ]
   },
   "contents": [
    "REDCABLE",
    "YELLOWCABLE",
    "GREENCABLE",
    "PINKCABLE"
   ],
   "source": "<OBJECT GROOVE2\n\t(IN TUBE2)\n\t(FLAGS SURFACEBIT NDESCBIT CONTBIT OPENBIT)\n\t(CAPACITY 21)\n\t(DESC \"groove\")\n\t(OBJDESCS <PLTABLE\n0 1 1 1 1 1 \n\"groove\"\"groove\"\"groove\"\"groove\"\"groove\"\"groove\"\n0 0 0 0 0 0>)\n\t(ACTION GROOVE-FCN)\n\t(CONTFCN GROOVE-CONT)\n\t(SYNONYM GROOVE TRACK)\n\t(CLC-TXT <PLTABLE \"The groove contains four wires and has an exposed section which allows for easy replacement of cables.\" \"Make sure you know which cables are live.\" \"The grooves were placed in the channels for making easy replacing and diagnosing of cables.\">)>",
   "referencedBy": [
    "REDWIRE-FCN",
    "ORANGE-WIRE-FCN",
    "FIRSTER",
    "V-PUT",
    "V-POINT",
    "V-REPLACE"
   ]
  },
  "PEOPLE-CABINET": {
   "name": "PEOPLE-CABINET",
   "file": "objects.zil",
   "line": 994,
   "endLine": 1003,
   "desc": "storage cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOOL-AREA",
   "flags": [
    "CONTBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABINE",
    "CONTAI",
    "OBJECT",
    "BROTHE"
   ],
   "adjectives": [
    "BIG",
    "SQUARE",
    "C9",
    "SOUNDL",
    "STRANG"
   ],
   "action": "PEOPLE-CABINET-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"storage cabinet\" \"square container\" \"strange container\" \"soundless object\" \"big brother\" \"C9\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [
    "TOOLBAG"
   ],
   "source": "<OBJECT PEOPLE-CABINET\n\t(IN TOOL-AREA)\n\t(FLAGS CONTBIT TOUCHBIT)\n\t(DESC \"storage cabinet\")\n\t(SYNONYM CABINE CONTAI OBJECT BROTHE)\n\t(ADJECTIVE BIG SQUARE C9 SOUNDL STRANG)\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1\n\"storage cabinet\" \"square container\" \"strange container\" \"soundless object\"\n\"big brother\" \"C9\" 0 0 0 0 0 0>)\n\t(ACTION PEOPLE-CABINET-FCN)>",
   "referencedBy": [
    "PARRIVE1"
   ]
  },
  "TOOLBAG": {
   "name": "TOOLBAG",
   "file": "objects.zil",
   "line": 1010,
   "endLine": 1020,
   "desc": "tool bag",
   "ldesc": null,
   "fdesc": null,
   "loc": "PEOPLE-CABINET",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "BAG",
    "CONTAI",
    "TB"
   ],
   "adjectives": [
    "TOOL",
    "JINGLI",
    "TINY"
   ],
   "action": "TOOLBAG-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"tool bag\" \"tiny container\" \"tool container\" \"jingling bag\" \"tool bag\" \"TB\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT TOOLBAG\n\t(IN PEOPLE-CABINET)\n\t(FLAGS TAKEBIT CONTBIT TOUCHBIT)\n\t(DESC \"tool bag\")\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1\n\"tool bag\" \"tiny container\" \"tool container\" \"jingling bag\" \"tool bag\" \"TB\"\n0 0 0 0 0 0>)\n\t(ACTION TOOLBAG-FCN)\n\t(SYNONYM BAG CONTAI TB)\n\t(ADJECTIVE TOOL JINGLI TINY)>",
   "referencedBy": [
    "TOOLBAG-FCN",
    "PARRIVE1",
    "PARRIVE2",
    "ENOUGH-TRADING",
    "PEOPLE-GIVEN-BAG",
    "I-PEOPLE2",
    "I-CHASEAUDA",
    "SLEEP-CHAMBER-FCN",
    "PRE-GIVE",
    "V-BOARD"
   ]
  },
  "CONVEYERBELTA": {
   "name": "CONVEYERBELTA",
   "file": "objects.zil",
   "line": 1032,
   "endLine": 1041,
   "desc": "BLT",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR1",
   "flags": [
    "FURNITURE",
    "CONTBIT",
    "SURFACEBIT",
    "NDESCBIT",
    "OPENBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "WALKWA",
    "MECHAN",
    "GLIDER",
    "BLT"
   ],
   "adjectives": [
    "MOVING",
    "CONVEY",
    "NOISY"
   ],
   "action": "CONVEYERBELT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 0 \"walkway\" \"conveying mechanism\" \"noisy walkway\" \"glider\" \"BLT\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This moving belt is actually a repair belt.\" \"Placing an object on the north-most end will result in a repaired object at the south-most end.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CONVEYERBELTA\n\t(IN REPAIR1)\n\t(FLAGS FURNITURE CONTBIT SURFACEBIT NDESCBIT OPENBIT TOUCHBIT)\n\t(CAPACITY 200)\n\t(DESC \"BLT\")\n\t(SYNONYM WALKWA MECHAN GLIDER BLT)\n\t(ADJECTIVE MOVING CONVEY NOISY)\n\t(OBJDESCS <PLTABLE 0 1 1 1 1 1 0 \"walkway\" \"conveying mechanism\" \"noisy walkway\" \"glider\" \"BLT\" 0 0 0 0 0 0>)\n\t(ACTION CONVEYERBELT-FCN)\n\t(CLC-TXT <PLTABLE \"This moving belt is actually a repair belt.\" \"Placing an object on the north-most end will result in a repaired object at the south-most end.\" 0>)>",
   "referencedBy": [
    "CONVEYERBELT-FCN",
    "I-BELT",
    "REPAIRX-FCN",
    "PRE-PUT",
    "PRE-MOVE",
    "V-STEP-ON",
    "V-PUSH-UP"
   ]
  },
  "CONVEYERBELTB": {
   "name": "CONVEYERBELTB",
   "file": "objects.zil",
   "line": 1043,
   "endLine": 1052,
   "desc": "BLT",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR2",
   "flags": [
    "FURNITURE",
    "CONTBIT",
    "SURFACEBIT",
    "NDESCBIT",
    "OPENBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "WALKWA",
    "MECHAN",
    "GLIDER",
    "BLT"
   ],
   "adjectives": [
    "MOVING",
    "CONVEY",
    "NOISY"
   ],
   "action": "CONVEYERBELT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 0 \"walkway\" \"conveying mechanism\" \"noisy walkway\" \"glider\" \"BLT\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This moving belt is actually a repair belt.\" \"Placing an object on the north-most end will result in a repaired object at the south-most end.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CONVEYERBELTB\n\t(IN REPAIR2)\n\t(FLAGS FURNITURE CONTBIT SURFACEBIT NDESCBIT OPENBIT TOUCHBIT)\n\t(CAPACITY 200)\n\t(DESC \"BLT\")\n\t(SYNONYM WALKWA MECHAN GLIDER BLT)\n\t(ADJECTIVE MOVING CONVEY NOISY)\n\t(OBJDESCS <PLTABLE 0 1 1 1 1 1 0 \"walkway\" \"conveying mechanism\" \"noisy walkway\" \"glider\" \"BLT\" 0 0 0 0 0 0>)\n\t(ACTION CONVEYERBELT-FCN)\n\t(CLC-TXT <PLTABLE \"This moving belt is actually a repair belt.\" \"Placing an object on the north-most end will result in a repaired object at the south-most end.\" 0>)>",
   "referencedBy": [
    "CONVEYERBELT-FCN",
    "I-BELT",
    "REPAIRX-FCN",
    "PRE-PUT",
    "PRE-MOVE",
    "V-STEP-ON"
   ]
  },
  "CONVEYERBELTC": {
   "name": "CONVEYERBELTC",
   "file": "objects.zil",
   "line": 1054,
   "endLine": 1063,
   "desc": "BLT",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR3",
   "flags": [
    "TOUCHBIT",
    "FURNITURE",
    "CONTBIT",
    "SURFACEBIT",
    "NDESCBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "WALKWA",
    "MECHAN",
    "GLIDER",
    "BLT"
   ],
   "adjectives": [
    "MOVING",
    "CONVEY",
    "NOISY"
   ],
   "action": "CONVEYERBELT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 1 1 1 1 1 0 \"walkway\" \"conveying mechanism\" \"noisy walkway\" \"glider\" \"BLT\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This moving belt is actually a repair belt.\" \"Placing an object on the north-most end will result in a repaired object at the south-most end.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CONVEYERBELTC\n\t(IN REPAIR3)\n\t(FLAGS TOUCHBIT FURNITURE CONTBIT SURFACEBIT NDESCBIT OPENBIT)\n\t(CAPACITY 200)\n\t(DESC \"BLT\")\n\t(SYNONYM WALKWA MECHAN GLIDER BLT)\n\t(ADJECTIVE MOVING CONVEY NOISY)\n\t(OBJDESCS <PLTABLE 0 1 1 1 1 1 0 \"walkway\" \"conveying mechanism\" \"noisy walkway\" \"glider\" \"BLT\" 0 0 0 0 0 0>)\n\t(ACTION CONVEYERBELT-FCN)\n\t(CLC-TXT <PLTABLE \"This moving belt is actually a repair belt.\" \"Placing an object on the north-most end will result in a repaired object at the south-most end.\" 0>)>",
   "referencedBy": [
    "CONVEYERBELT-FCN",
    "I-BELT",
    "REPAIRX-FCN",
    "PRE-PUT",
    "PRE-MOVE",
    "V-STEP-ON"
   ]
  },
  "LEVER1": {
   "name": "LEVER1",
   "file": "objects.zil",
   "line": 1088,
   "endLine": 1100,
   "desc": "first lever",
   "ldesc": null,
   "fdesc": null,
   "loc": "HYDRO",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "LEVER"
   ],
   "adjectives": [
    "FIRST",
    "WATER"
   ],
   "action": "LEVER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"first lever\" \"first lever\" \"first lever\" \"first lever\" \"first lever\" 0 \"I can feel gradations etched into the panel beside the lever which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This is a standard push-pull lever which controls the flow of water.\" 0 0>"
    ],
    "DIAL": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT LEVER1\n\t(IN HYDRO)\n\t(FLAGS TOUCHBIT NDESCBIT TURNBIT)\n\t(DESC \"first lever\")\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1 \n0 \"first lever\"\"first lever\"\"first lever\"\"first lever\"\"first lever\" 0\n\"I can feel gradations etched into the panel beside the lever which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>)\n\t(CLC-TXT <PLTABLE \"This is a standard push-pull lever which controls the flow of water.\" 0 0>) \n\t(SYNONYM LEVER)\n\t(ADJECTIVE FIRST WATER)\n\t(DIAL 4)\n\t(ACTION LEVER-FCN)>",
   "referencedBy": [
    "DESCRIBE-CONTROLS-FCN",
    "V-SET"
   ]
  },
  "LEVER3": {
   "name": "LEVER3",
   "file": "objects.zil",
   "line": 1102,
   "endLine": 1115,
   "desc": "third lever",
   "ldesc": null,
   "fdesc": null,
   "loc": "HYDRO",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "LEVER"
   ],
   "adjectives": [
    "THIRD",
    "LIGHTI"
   ],
   "action": "LEVER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"third lever\" \"third lever\" \"third lever\" \"third lever\" \"third lever\" 0 \"I can feel gradations etched into the panel beside the lever which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This is a standard push-pull lever which controls the intensity of lighting.\" 0 0>"
    ],
    "DIAL": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT LEVER3\n\t(IN HYDRO)\n\t(FLAGS NDESCBIT TOUCHBIT TURNBIT)\n\t(DESC \"third lever\")\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1\n0\"third lever\"\"third lever\"\"third lever\"\"third lever\"\"third lever\"\n0\n\"I can feel gradations etched into the panel beside the lever which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>)\n\t(CLC-TXT <PLTABLE \"This is a standard push-pull lever which controls the intensity of lighting.\" 0 0>)\n\t(SYNONYM LEVER)\n\t(ADJECTIVE THIRD LIGHTI)\n\t(DIAL 6)\n\t(ACTION LEVER-FCN)>",
   "referencedBy": [
    "DESCRIBE-CONTROLS-FCN",
    "V-SET"
   ]
  },
  "LEVER2": {
   "name": "LEVER2",
   "file": "objects.zil",
   "line": 1117,
   "endLine": 1130,
   "desc": "second lever",
   "ldesc": null,
   "fdesc": null,
   "loc": "HYDRO",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "LEVER"
   ],
   "adjectives": [
    "SECOND",
    "MINERAL"
   ],
   "action": "LEVER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"second lever\" \"second lever\" \"second lever\" \"second lever\" \"second lever\" 0 \"I can feel gradations etched into the panel beside the lever which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This is a standard push-pull lever which controls the flow of minerals.\" 0 0>"
    ],
    "DIAL": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT LEVER2\n\t(IN HYDRO)\n\t(FLAGS TOUCHBIT NDESCBIT TURNBIT)\n\t(DESC \"second lever\")\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1\n0 \"second lever\"\"second lever\"\"second lever\"\"second lever\"\"second lever\"\n0\n\"I can feel gradations etched into the panel beside the lever which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>)\n\t(CLC-TXT <PLTABLE \"This is a standard push-pull lever which controls the flow of minerals.\" 0 0>)\n\t(SYNONYM LEVER)\n\t(ADJECTIVE SECOND MINERAL)\n\t(DIAL 5)\n\t(ACTION LEVER-FCN)>",
   "referencedBy": [
    "DESCRIBE-CONTROLS-FCN",
    "V-SET"
   ]
  },
  "SWITCH1": {
   "name": "SWITCH1",
   "file": "objects.zil",
   "line": 1139,
   "endLine": 1147,
   "desc": "first switch",
   "ldesc": null,
   "fdesc": null,
   "loc": "RTD",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SWITCH",
    "BUMP",
    "DEVICE",
    "BUMPS"
   ],
   "adjectives": [
    "FIRST",
    "RAISED"
   ],
   "action": "RTD-SWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"floaters switch\" \"first bump\" \"first device\" \"first switch\" \"first switch\" \"first switch\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This is a simple off-on switch which cuts all power to the airborne floaters.\" \"Cut this switch only when no human beings are in the air.\" \"This switch is commonly used for maintenance on the floaters.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT SWITCH1\n\t(IN RTD)\n\t(FLAGS NDESCBIT TOUCHBIT ONBIT)\n\t(DESC \"first switch\")\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"floaters switch\" \"first bump\" \"first device\" \"first switch\" \"first switch\" \"first switch\" 0 0 0 0 0 0>)\n\t(SYNONYM SWITCH BUMP DEVICE BUMPS)\n\t(ADJECTIVE FIRST RAISED)\n\t(CLC-TXT <PLTABLE \"This is a simple off-on switch which cuts all power to the airborne floaters.\" \"Cut this switch only when no human beings are in the air.\" \"This switch is commonly used for maintenance on the floaters.\">)\n\t(ACTION RTD-SWITCH-FCN)>",
   "referencedBy": [
    "DO-RTD",
    "PRE-LAMP-ON",
    "V-LAMP-ON",
    "V-LAMP-OFF"
   ]
  },
  "SWITCH3": {
   "name": "SWITCH3",
   "file": "objects.zil",
   "line": 1149,
   "endLine": 1157,
   "desc": "third switch",
   "ldesc": null,
   "fdesc": null,
   "loc": "RTD",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SWITCH",
    "BUMP",
    "BUMPS",
    "DEVICE"
   ],
   "adjectives": [
    "THIRD",
    "RAISED"
   ],
   "action": "RTD-SWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"walkway switch\" \"third bump\" \"third device\" \"third switch\" \"third switch\" \"third switch\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This off-on switch cuts all power to the moving walkways on the planet's surface.\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT SWITCH3\n\t(IN RTD)\n\t(FLAGS NDESCBIT TOUCHBIT ONBIT)\n\t(DESC \"third switch\")\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"walkway switch\" \"third bump\" \"third device\" \"third switch\" \"third switch\" \"third switch\" 0 0 0 0 0 0>)\n\t(SYNONYM SWITCH BUMP BUMPS DEVICE)\n\t(ADJECTIVE THIRD RAISED)\n\t(CLC-TXT <PLTABLE \"This off-on switch cuts all power to the moving walkways on the planet's surface.\" 0 0>)\n\t(ACTION RTD-SWITCH-FCN)>",
   "referencedBy": [
    "DO-RTD",
    "PRE-LAMP-ON",
    "V-LAMP-ON",
    "V-LAMP-OFF"
   ]
  },
  "SWITCH2": {
   "name": "SWITCH2",
   "file": "objects.zil",
   "line": 1159,
   "endLine": 1167,
   "desc": "second switch",
   "ldesc": null,
   "fdesc": null,
   "loc": "RTD",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "ONBIT"
   ],
   "synonyms": [
    "SWITCH",
    "BUMP",
    "BUMPS",
    "DEVICE"
   ],
   "adjectives": [
    "SECOND",
    "RAISED"
   ],
   "action": "RTD-SWITCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"autotaxi switch\" \"second bump\" \"second device\" \"second switch\" \"second switch\" \"second switch\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This simple off-on switch cuts all power to the auto-taxis which cruise the surface.\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT SWITCH2\n\t(IN RTD)\n\t(FLAGS NDESCBIT TOUCHBIT ONBIT)\n\t(DESC \"second switch\")\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"autotaxi switch\" \"second bump\" \"second device\" \"second switch\" \"second switch\" \"second switch\" 0 0 0 0 0 0>)\n\t(SYNONYM SWITCH BUMP BUMPS DEVICE)\n\t(ADJECTIVE SECOND RAISED)\n\t(CLC-TXT <PLTABLE \"This simple off-on switch cuts all power to the auto-taxis which cruise the surface.\" 0 0>)\n\t(ACTION RTD-SWITCH-FCN)>",
   "referencedBy": [
    "DO-RTD",
    "PRE-LAMP-ON",
    "V-LAMP-ON",
    "V-LAMP-OFF"
   ]
  },
  "PLAQUE": {
   "name": "PLAQUE",
   "file": "objects.zil",
   "line": 1181,
   "endLine": 1188,
   "desc": "plaque",
   "ldesc": null,
   "fdesc": null,
   "loc": "STERILE-AREA",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "PLAQUE",
    "RELIEF",
    "ADVERT",
    "PLQ"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "PLAQUE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 \"A small plaque sits by the wall, easily detectable by the relief etched into it.\" \"A small plaque radiates heat, sitting by the wall.\" \"A small plaque makes tinging noises here.\" \"An advert sits waiting to be read.\" \"A small PLQ sits here, looking very informative.\" \"small plaque\" \"small plaque\" \"small plaque\" \"small plaque\" \"small advert\" \"small PLQ\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT PLAQUE\n\t(IN STERILE-AREA)\n\t(FLAGS TAKEBIT)\n\t(DESC \"plaque\")\n\t(OBJDESCS <PLTABLE 1 \"A small plaque sits by the wall, easily detectable by the relief etched into it.\" \"A small plaque radiates heat, sitting by the wall.\" \"A small plaque makes tinging noises here.\" \"An advert sits waiting to be read.\" \"A small PLQ sits here, looking very informative.\"\"small plaque\" \"small plaque\" \"small plaque\" \"small plaque\" \"small advert\" \"small PLQ\" 0 0 0 0 0 0>)\n\t(ACTION PLAQUE-FCN)\n\t(SYNONYM PLAQUE RELIEF ADVERT PLQ)\n\t(ADJECTIVE SMALL)>",
   "referencedBy": []
  },
  "CLONETUBES": {
   "name": "CLONETUBES",
   "file": "objects.zil",
   "line": 1233,
   "endLine": 1239,
   "desc": "large objects",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRYOUNITS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "OBJECT",
    "CANIST"
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
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"large canisters\" \"large canisters\" \"large canisters\" \"large canisters\" \"large canisters\" \"large canisters\" 0 \"They're hollow and each one contains a duplicate of you.\" \"They contain a primitive life force (compared to me).\" 0 \"We all wonder about ourselves.\" \"CLC indicates these are the clone units.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT CLONETUBES\n\t(IN CRYOUNITS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"large objects\")\n\t(SYNONYM OBJECT CANIST)\n\t(ADJECTIVE LARGE)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"large canisters\"\"large canisters\"\"large canisters\"\"large canisters\"\"large canisters\"\"large canisters\" 0 \"They're hollow and each one contains a duplicate of you.\" \"They contain a primitive life force (compared to me).\" 0 \"We all wonder about ourselves.\" \"CLC indicates these are the clone units.\">)>",
   "referencedBy": []
  },
  "HERRINGBONE": {
   "name": "HERRINGBONE",
   "file": "objects.zil",
   "line": 1241,
   "endLine": 1248,
   "desc": "sixteen-inch cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-MID",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE"
   ],
   "adjectives": [
    "BLUE",
    "SIXTEE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"blue sixteen-inch cable\" \"sixteen-inch cable\" \"sixteen-inch cable\" \"sixteen-inch cable\" \"sixteen-inch cable\" \"sixteen-inch cable\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT HERRINGBONE\n\t(IN SUPPLIES-MID)\n\t(DESC \"sixteen-inch cable\")\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(SYNONYM CABLE)\n\t(ADJECTIVE BLUE SIXTEE) \n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"blue sixteen-inch cable\"\n\t \"sixteen-inch cable\"\"sixteen-inch cable\"\"sixteen-inch cable\"\"sixteen-inch cable\"\"sixteen-inch cable\" 0 0 0 0 0 0>)>",
   "referencedBy": []
  },
  "NOZZLE": {
   "name": "NOZZLE",
   "file": "objects.zil",
   "line": 1250,
   "endLine": 1256,
   "desc": "nozzle",
   "ldesc": null,
   "fdesc": null,
   "loc": "DECON-CHAMBER",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "NOZZLE",
    "PORT"
   ],
   "adjectives": [
    "SMALL",
    "HISSIN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"nozzle\" \"small nozzle\" \"nozzle\" \"small port\" \"nozzle\" \"nozzle\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT NOZZLE\n\t(IN DECON-CHAMBER)\n\t(DESC \"nozzle\")\n\t(SYNONYM NOZZLE PORT)\n\t(ADJECTIVE SMALL HISSIN)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"nozzle\"\"small nozzle\"\"nozzle\"\"small port\"\"nozzle\"\"nozzle\" 0 0 0 0 0 0>)>",
   "referencedBy": []
  },
  "BENCH": {
   "name": "BENCH",
   "file": "objects.zil",
   "line": 1258,
   "endLine": 1263,
   "desc": "benches",
   "ldesc": null,
   "fdesc": null,
   "loc": "STERILE-AREA",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "BENCH",
    "BENCHE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"benches\" \"benches\" \"benches\" \"benches\" \"benches\" \"benches\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT BENCH\n\t(IN STERILE-AREA)\n\t(DESC \"benches\")\n\t(SYNONYM BENCH BENCHE)\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"benches\"\"benches\"\"benches\"\"benches\"\"benches\"\"benches\" 0 0 0 0 0 0>)\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": []
  },
  "RAILING": {
   "name": "RAILING",
   "file": "objects.zil",
   "line": 1265,
   "endLine": 1270,
   "desc": "railing",
   "ldesc": null,
   "fdesc": null,
   "loc": "CLC-CORE",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "RAILIN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"railing\" \"railing\" \"railing\" \"railing\" \"railing\" \"railing\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT RAILING\n\t(IN CLC-CORE)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(SYNONYM RAILIN)\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"railing\"\"railing\"\"railing\"\"railing\"\"railing\"\"railing\" 0 0 0 0 0 0>)\n\t(DESC \"railing\")>",
   "referencedBy": []
  },
  "SMASHED-BOX": {
   "name": "SMASHED-BOX",
   "file": "objects.zil",
   "line": 1272,
   "endLine": 1281,
   "desc": "crushed box",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-SOUTH",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "INVISIBLE",
    "TOUCHBIT"
   ],
   "synonyms": [
    "BOX",
    "CBX",
    "MUSH",
    "CONTAI"
   ],
   "adjectives": [
    "CRUSHE",
    "FLAT",
    "RUINED",
    "QUIET",
    "SMUSHE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "20"
    ],
    "OBJDESCS": [
     "<PLTABLE \"crushed box\" \"flat container\" \"ruined box\" \"quiet box\" \"smushed mush\" \"CBX\" \"crushed box\" \"flat container\" \"ruined box\" \"quiet box\" \"smushed mush\" \"CBX\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This CBX contains all of the replacement cables for the FCs.\" \"All replacements can be easily done.\" \"The box was placed here for easy replacements.\">"
    ]
   },
   "contents": [
    "RUINED-CABLES"
   ],
   "source": "<OBJECT SMASHED-BOX\n\t(IN SUPPLIES-SOUTH)\n\t(DESC \"crushed box\")\n\t(FLAGS TAKEBIT CONTBIT INVISIBLE TOUCHBIT)\n\t(CAPACITY 20)\n\t(SYNONYM BOX CBX MUSH CONTAI)\n\t(ADJECTIVE CRUSHE FLAT RUINED QUIET SMUSHE)\n\t(OBJDESCS <PLTABLE  \"crushed box\" \"flat container\" \"ruined box\" \"quiet box\" \"smushed mush\" \"CBX\"\n \"crushed box\" \"flat container\" \"ruined box\" \"quiet box\" \"smushed mush\" \"CBX\" 0 0 0 0 0 0>)\n\t(CLC-TXT <PLTABLE \"This CBX contains all of the replacement cables for the FCs.\" \"All replacements can be easily done.\" \"The box was placed here for easy replacements.\">)>",
   "referencedBy": [
    "V-MOVE",
    "V-LOOK-UNDER"
   ]
  },
  "RUINED-CABLES": {
   "name": "RUINED-CABLES",
   "file": "objects.zil",
   "line": 1283,
   "endLine": 1294,
   "desc": "backup cable",
   "ldesc": null,
   "fdesc": null,
   "loc": "SMASHED-BOX",
   "flags": [
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CABLE",
    "BUC"
   ],
   "adjectives": [
    "RUINED",
    "SMASHE",
    "BROKEN",
    "BACKUP"
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
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"backup cable\" \"backup cable\" \"backup cable\" \"backup cable\" \"backup cable\" \"BUC\" \"This cable looks beyond hope, crushed almost beyond recognition.\" \"From what my sonar and touching mechanisms provide as feedback, this thing is flatter than Whiz's intelligence curve.\" \"This cable is no longer capable of transmitting electrical charges.\" 0 \"Like, oh wow, run over by a steamroller.\" \"The BUC no longer seems functional.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT RUINED-CABLES\n\t(IN SMASHED-BOX)\n\t(FLAGS TAKEBIT TOUCHBIT)\n\t(DESC \"backup cable\")\n\t(SYNONYM CABLE BUC)\n\t(SIZE 8)\n\t(ADJECTIVE RUINED SMASHE BROKEN BACKUP)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"backup cable\"\"backup cable\"\"backup cable\"\"backup cable\"\"backup cable\" \"BUC\"\n\"This cable looks beyond hope, crushed almost beyond recognition.\"\n\"From what my sonar and touching mechanisms provide as feedback, this thing is flatter than Whiz's intelligence curve.\"\n\"This cable is no longer capable of transmitting electrical charges.\"\n0 \"Like, oh wow, run over by a steamroller.\" \"The BUC no longer seems functional.\">)> ",
   "referencedBy": []
  },
  "BROKEN-SHELF": {
   "name": "BROKEN-SHELF",
   "file": "objects.zil",
   "line": 1296,
   "endLine": 1309,
   "desc": "broken shelf",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-SOUTH",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "SHELF",
    "PLATFORM"
   ],
   "adjectives": [
    "BROKEN",
    "CRACKED"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "500"
    ],
    "OBJDESCS": [
     "<PLTABLE \"A broken shelf lies on the floor in a terrible state, beyond use.\" \"Sonar detects a broken platform on the floor in an irregular heap.\" 0 0 \"Everything cracks under pressure, sooner or later.\" 0 \"broken shelf\" \"broken platform\" \"broken shelf\" \"broken shelf\" \"broken holder\" \"broken shelf\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT BROKEN-SHELF\n\t(IN SUPPLIES-SOUTH)\n\t(DESC \"broken shelf\")\n\t(FLAGS TAKEBIT)\n\t(SIZE 500)\n\t(OBJDESCS <PLTABLE \n\t \"A broken shelf lies on the floor in a terrible state, beyond use.\"\n\t \"Sonar detects a broken platform on the floor in an irregular heap.\"\n\t 0\n\t 0\n\t \"Everything cracks under pressure, sooner or later.\"\n\t 0 \"broken shelf\" \"broken platform\" \"broken shelf\" \"broken shelf\" \"broken holder\" \"broken shelf\" 0 0 0 0 0 0>)\n\t(SYNONYM SHELF PLATFORM)\n\t(ADJECTIVE BROKEN CRACKED)>",
   "referencedBy": [
    "ITAKE",
    "V-MOVE",
    "V-LOOK-UNDER"
   ]
  },
  "PERIPH1-OBJ": {
   "name": "PERIPH1-OBJ",
   "file": "objects.zil",
   "line": 1311,
   "endLine": 1322,
   "desc": "Index pedestal",
   "ldesc": null,
   "fdesc": null,
   "loc": "PERIPH-1",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "PEDEST"
   ],
   "adjectives": [
    "INDEX",
    "FIRST"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"Index pedestal\" \"Index pedestal\" \"Index pedestal\" \"Index pedestal\" \"Index pedestal\" \"Index pedestal\" 0 \"It feels smooth to the touch. Whiz can plug into it.\" \"A tremendous amount of vibrations is being output from this device.\" 0 \"How can one describe the totality of knowing?\" \"The CLC indicates the pedestal is ready for my plugging in.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT PERIPH1-OBJ\n\t(IN PERIPH-1)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(SYNONYM PEDEST)\n\t(ADJECTIVE INDEX FIRST)\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"Index pedestal\"\"Index pedestal\"\"Index pedestal\"\"Index pedestal\"\"Index pedestal\"\"Index pedestal\" 0 \n\"It feels smooth to the touch. Whiz can plug into it.\"\n\"A tremendous amount of vibrations is being output from this device.\"\n0\n\"How can one describe the totality of knowing?\"\n\"The CLC indicates the pedestal is ready for my plugging in.\">)\n\t(DESC \"Index pedestal\")>",
   "referencedBy": [
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "PERIPH2-OBJ": {
   "name": "PERIPH2-OBJ",
   "file": "objects.zil",
   "line": 1324,
   "endLine": 1334,
   "desc": "Technical Pedestal",
   "ldesc": null,
   "fdesc": null,
   "loc": "PERIPH-2",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "PEDEST"
   ],
   "adjectives": [
    "TECHNI",
    "SECOND"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"Technical pedestal\" \"Technical pedestal\" \"Technical pedestal\" \"Technical pedestal\" \"Technical pedestal\" \"Technical pedestal\" 0 \"It feels smooth to the touch and Whiz should be able to plug into it.\" \"A tremendous amount of vibrations is being output from this device.\" 0 \"How can one describe the totality of knowing?\" \"The CLC indicates the pedestal is ready for me to plug into.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT PERIPH2-OBJ\n\t(IN PERIPH-2)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(SYNONYM PEDEST)\n\t(ADJECTIVE TECHNI SECOND)\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"Technical pedestal\"\"Technical pedestal\"\"Technical pedestal\"\"Technical pedestal\"\"Technical pedestal\"\"Technical pedestal\"0 \"It feels smooth to the touch and Whiz should be able to plug into it.\"\n\"A tremendous amount of vibrations is being output from this device.\"\n0\n\"How can one describe the totality of knowing?\"\n\"The CLC indicates the pedestal is ready for me to plug into.\">)\n\t(DESC \"Technical Pedestal\")>",
   "referencedBy": [
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "PERIPH3-OBJ": {
   "name": "PERIPH3-OBJ",
   "file": "objects.zil",
   "line": 1336,
   "endLine": 1347,
   "desc": "Advisory Pedestal",
   "ldesc": null,
   "fdesc": null,
   "loc": "PERIPH-3",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "PEDEST"
   ],
   "adjectives": [
    "ADVISO",
    "THIRD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"Advisory pedestal\" \"Advisory pedestal\" \"Advisory pedestal\" \"Advisory pedestal\" \"Advisory pedestal\" \"Advisory pedestal\" 0 \"It feels smooth to the touch and appears to be an interface for Whiz.\" \"A tremendous amount of vibrations is being output from this device.\" 0 \"How can one describe the totality of knowing?\" \"The CLC indicates the pedestal is ready for my plugging in.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT PERIPH3-OBJ\n\t(IN PERIPH-3)\n\t(FLAGS TOUCHBIT NDESCBIT)\n\t(SYNONYM PEDEST)\n\t(ADJECTIVE ADVISO THIRD)\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"Advisory pedestal\"\"Advisory pedestal\"\"Advisory pedestal\"\"Advisory pedestal\"\"Advisory pedestal\"\"Advisory pedestal\" 0 \n\"It feels smooth to the touch and appears to be an interface for Whiz.\"\n\"A tremendous amount of vibrations is being output from this device.\"\n0\n\"How can one describe the totality of knowing?\"\n\"The CLC indicates the pedestal is ready for my plugging in.\">)\n\t(DESC \"Advisory Pedestal\")>",
   "referencedBy": [
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "PERIPH4-OBJ": {
   "name": "PERIPH4-OBJ",
   "file": "objects.zil",
   "line": 1349,
   "endLine": 1360,
   "desc": "Historical Pedestal",
   "ldesc": null,
   "fdesc": null,
   "loc": "PERIPH-4",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "PEDEST"
   ],
   "adjectives": [
    "HISTOR",
    "FOURTH"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 \"Historical pedestal\" \"Historical pedestal\" \"Historical pedestal\" \"Historical pedestal\" \"Historical pedestal\" \"Historical pedestal\" 0 \"It feels smooth to the touch and is an interface for Whiz.\" \"A tremendous amount of vibrations is being output from this device.\" 0 \"How can one describe the totality of knowing?\" \"The CLC indicates the pedestal is ready to be plugged into.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT PERIPH4-OBJ\n\t(IN PERIPH-4)\n\t(FLAGS TOUCHBIT NDESCBIT)\n\t(SYNONYM PEDEST)\n\t(ADJECTIVE HISTOR FOURTH)\n\t(OBJDESCS <PLTABLE 0 1 1 0 1 1 \"Historical pedestal\"\"Historical pedestal\"\"Historical pedestal\"\"Historical pedestal\"\"Historical pedestal\"\"Historical pedestal\" 0 \n\"It feels smooth to the touch and is an interface for Whiz.\"\n\"A tremendous amount of vibrations is being output from this device.\"\n0\n\"How can one describe the totality of knowing?\"\n\"The CLC indicates the pedestal is ready to be plugged into.\">)\n\t(DESC \"Historical Pedestal\")>",
   "referencedBy": [
    "V-PLUGIN",
    "V-QUERY"
   ]
  },
  "DIALS": {
   "name": "DIALS",
   "file": "objects.zil",
   "line": 1362,
   "endLine": 1367,
   "desc": "dials",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEATHER",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "DIALS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"dials\" \"dials\" \"dials\" \"dials\" \"dials\" \"dials\" 0 \"The dials go from 0 to 100.\" 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT DIALS\n\t(IN WEATHER)\n\t(SYNONYM DIALS)\n\t(DESC \"dials\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"dials\"\"dials\"\"dials\"\"dials\"\"dials\"\"dials\" 0 \"The dials go from 0 to 100.\" 0 0 0 0>)\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": []
  },
  "G-LEVERS": {
   "name": "G-LEVERS",
   "file": "objects.zil",
   "line": 1369,
   "endLine": 1378,
   "desc": "levers",
   "ldesc": null,
   "fdesc": null,
   "loc": "HYDRO",
   "flags": [
    "TOUCHBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "LEVERS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 1 0 1 1 0 \"levers\" \"levers\" \"levers\" \"levers\" \"levers\" 0 \"I can feel gradations etched into the panel beside the levers which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE \"These are standard push-pull levers which control the flow of water, minerals and lighting.\" 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT G-LEVERS\n\t(IN HYDRO)\n\t(FLAGS TOUCHBIT NDESCBIT)\n\t(DESC \"levers\")\n\t(OBJDESCS <PLTABLE\n0 1 1 0 1 1 \n0 \"levers\"\"levers\"\"levers\"\"levers\"\"levers\" 0\n\"I can feel gradations etched into the panel beside the levers which goes from 0 to 100.\" \"Sensory mechanisms detect the internal electrical flow can be set from 0 to 100.\" 0 \"From zip to a c-note, the levers may be set.\" 0>)\n\t(CLC-TXT <PLTABLE \"These are standard push-pull levers which control the flow of water, minerals and lighting.\" 0 0>) \n\t(SYNONYM LEVERS)>",
   "referencedBy": []
  },
  "BEDS": {
   "name": "BEDS",
   "file": "objects.zil",
   "line": 1380,
   "endLine": 1387,
   "desc": "flat beds",
   "ldesc": null,
   "fdesc": null,
   "loc": "SLEEP-CHAMBER",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "BED",
    "BEDS",
    "EXTENS",
    "HSP"
   ],
   "adjectives": [
    "FLAT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 0 1 0 0 1 1 \"flat beds\" \"flat extensions\" \"flat beds\" \"flat beds\" \"flat beds\" \"HSP\" 0 0 0 0 0 0>"
    ],
    "CLC-TXT": [
     "<PLTABLE 0 0 \"These Human Sleeping Platforms were provided for human visitors.\">"
    ]
   },
   "contents": [],
   "source": " <OBJECT BEDS\n\t (IN SLEEP-CHAMBER)\n\t (FLAGS NDESCBIT TOUCHBIT)\n\t (DESC \"flat beds\")\n\t (SYNONYM BED BEDS EXTENS HSP)\n\t (ADJECTIVE FLAT)\n\t (OBJDESCS <PLTABLE 0 1 0 0 1 1 \"flat beds\"\"flat extensions\"\"flat beds\"\"flat beds\"\"flat beds\" \"HSP\" 0 0 0 0 0 0>)\n\t (CLC-TXT <PLTABLE 0 0 \"These Human Sleeping Platforms were provided for human visitors.\">)>",
   "referencedBy": []
  },
  "CLONETABLE": {
   "name": "CLONETABLE",
   "file": "objects.zil",
   "line": 1389,
   "endLine": 1397,
   "desc": "work table",
   "ldesc": null,
   "fdesc": null,
   "loc": "BIO-LAB",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TABLE",
    "STRUCT",
    "EQUIPT"
   ],
   "adjectives": [
    "WORK",
    "LARGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "50"
    ],
    "OBJDESCS": [
     "<PLTABLE 0 1 0 0 1 0 \"work table\" \"work table\" \"work table\" \"work table\" \"work table\" \"work table\" 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT CLONETABLE\n\t(IN BIO-LAB)\n\t(FLAGS NDESCBIT TOUCHBIT CONTBIT SURFACEBIT OPENBIT)\n\t(CAPACITY 50)\n\t(SYNONYM TABLE STRUCT EQUIPT)\n\t(ADJECTIVE WORK LARGE)\n\t(DESC \"work table\")\n\t(OBJDESCS <PLTABLE 0 1 0 0 1 0 \"work table\"\"work table\"\"work table\"\n\t\t\t  \"work table\"\"work table\"\"work table\" 0 0 0 0 0 0>)> ",
   "referencedBy": []
  },
  "MACHINE": {
   "name": "MACHINE",
   "file": "objects.zil",
   "line": 1399,
   "endLine": 1408,
   "desc": "machine",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-NORTH",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "MACHINE",
    "OBJECT",
    "PROCESSOR",
    "GG1"
   ],
   "adjectives": [
    "MEDIUM",
    "STRANG",
    "PRETTY",
    "SILENT"
   ],
   "action": "MACHINE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"machine\" \"medium-sized object\" \"strange machine\" \"silent machine\" \"pretty processor\" \"GG1\" 0 0 0 0 0 0 \"This machine is live with high voltage electrical current.\">"
    ],
    "CAPACITY": [
     "33"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This machine holds the 8 circles used to reset the Filtering Computers.\" \"Once the panel is opened (by pressing the button), the eight code circles will be revealed. If the Filtering Computers are operational and balanced, keying in the two codes will result in a system reset.\" \"This mechanism was provided for resetting the Filtering Computers.\">"
    ]
   },
   "contents": [
    "ORANGE-WIRE",
    "FUSE",
    "FRONT-PANEL"
   ],
   "source": "<OBJECT MACHINE\n\t(IN SUPPLIES-NORTH)\n\t(FLAGS CONTBIT SEARCHBIT NDESCBIT TOUCHBIT)\n\t(DESC \"machine\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"machine\" \"medium-sized object\" \"strange machine\" \"silent machine\"\"pretty processor\"\"GG1\" 0 0 0 0 0 0 \"This machine is live with high voltage electrical current.\">)\n\t(CAPACITY 33)\n\t(CLC-TXT <PLTABLE \"This machine holds the 8 circles used to reset the Filtering Computers.\" \"Once the panel is opened (by pressing the button), the eight code circles will be revealed. If the Filtering Computers are operational and balanced, keying in the two codes will result in a system reset.\" \"This mechanism was provided for resetting the Filtering Computers.\">)\n\t(SYNONYM MACHINE OBJECT PROCESSOR GG1)\n\t(ADJECTIVE MEDIUM STRANG PRETTY SILENT)\n\t(ACTION MACHINE-FCN)>",
   "referencedBy": [
    "ORANGE-BUTTON-FCN",
    "ORANGE-WIRE-FCN",
    "CIRCLE-FCN",
    "SUPPLIES-N-FCN",
    "PRE-LAMP-ON",
    "V-LAMP-ON",
    "V-LAMP-OFF",
    "V-REPAIR"
   ]
  },
  "ORANGE-BUTTON": {
   "name": "ORANGE-BUTTON",
   "file": "objects.zil",
   "line": 1415,
   "endLine": 1427,
   "desc": "button",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-NORTH",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON",
    "NUTTOB",
    "SPOT",
    "B5"
   ],
   "adjectives": [
    "ORANGE",
    "RAISED",
    "NOISLE"
   ],
   "action": "ORANGE-BUTTON-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"orange button\" \"raised spot\" \"button\" \"noiseless button\" \"nottub\" \"B5\" 0 0 0 0 0 0 \"The button is a switch which can be activated by pressing it.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"The button is a simple switch, activated by pressing.\" \"Press the button once the chips which regulate the device have been inserted.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT ORANGE-BUTTON\n\t(IN SUPPLIES-NORTH)\n\t(FLAGS NDESCBIT)\n\t(SYNONYM BUTTON NUTTOB SPOT B5)\n\t(DESC \"button\")\n\t(ADJECTIVE ORANGE RAISED NOISLE)\n\t(OBJDESCS <PLTABLE\n1 1 1 0 1 1 \n\"orange button\"\"raised spot\"\"button\"\n\"noiseless button\"\"nottub\"\"B5\"\n0 0 0 0 0 0 \"The button is a switch which can be activated by pressing it.\">)\n\t(ACTION ORANGE-BUTTON-FCN)\n\t(CLC-TXT <PLTABLE \"The button is a simple switch, activated by pressing.\" \"Press the button once the chips which regulate the device have been inserted.\" 0>)>",
   "referencedBy": [
    "V-LAMP-ON",
    "V-LAMP-OFF"
   ]
  },
  "ORANGE-WIRE": {
   "name": "ORANGE-WIRE",
   "file": "objects.zil",
   "line": 1456,
   "endLine": 1463,
   "desc": "orange wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE",
   "flags": [
    "INVISIBLE",
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "WIRE",
    "CABLE",
    "STRAND",
    "OBJECT"
   ],
   "adjectives": [
    "FOURTE",
    "ORANGE",
    "SENDER",
    "CONDUC"
   ],
   "action": "ORANGE-WIRE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"fourteen-inch cable of orange wire\" \"fourteen-inch cable\" \"fourteen-inch cable\" \"fourteen-inch cable\" \"fourteen-inch cable\" \"fourteen-inch cable\" 0 0 0 0 0 0 \"This is a cable in good working order and can be used as a replacement when needed.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT ORANGE-WIRE\n\t(IN MACHINE)\n\t(FLAGS INVISIBLE TAKEBIT TOUCHBIT)\n\t(DESC \"orange wire\")\n\t(OBJDESCS <PLTABLE 1 1 1 1 1 1 \"fourteen-inch cable of orange wire\" \"fourteen-inch cable\" \"fourteen-inch cable\" \"fourteen-inch cable\" \"fourteen-inch cable\" \"fourteen-inch cable\" 0 0 0 0 0 0 \"This is a cable in good working order and can be used as a replacement when needed.\">)\n\t(ACTION ORANGE-WIRE-FCN)\n\t(SYNONYM WIRE CABLE STRAND OBJECT)\n\t(ADJECTIVE FOURTE ORANGE SENDER CONDUC)>",
   "referencedBy": [
    "GROOVE-CONT",
    "ORANGE-BUTTON-FCN",
    "ORANGE-WIRE-FCN",
    "CIRCLE-FCN",
    "I-WIRE-MESSAGE",
    "SUPPLIES-N-FCN"
   ]
  },
  "SOCKET1": {
   "name": "SOCKET1",
   "file": "objects.zil",
   "line": 1481,
   "endLine": 1492,
   "desc": "first socket",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-NORTH",
   "flags": [
    "TOUCHBIT",
    "CONTBIT",
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SOCKET",
    "S1",
    "DEPRESSION",
    "RECEPTACLE"
   ],
   "adjectives": [
    "RED",
    "FIRST",
    "PLUS",
    "PRIMO"
   ],
   "action": "SOCKET-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"red socket\" \"first depression\" \"plus receptacle\" 0 \"primo socket\" \"S1\" 0 0 0 0 0 0 \"Diagnostic circuits detect the need for working IC to be inserted.\">"
    ],
    "CAPACITY": [
     "5"
    ],
    "CLC-TXT": [
     "<PLTABLE \"This socket is the exact size and shape to accept a microchip.\" 0 0>"
    ]
   },
   "contents": [
    "FIRST-FRIED"
   ],
   "source": "<OBJECT SOCKET1\n\t(IN SUPPLIES-NORTH)\n\t(FLAGS TOUCHBIT CONTBIT OPENBIT NDESCBIT)\n\t(DESC \"first socket\")\n\t(OBJDESCS <PLTABLE\n1 1 1 0 1 1 \"red socket\" \"first depression\" \"plus receptacle\" 0 \"primo socket\" \"S1\"\n0 0 0 0 0 0\"Diagnostic circuits detect the need for working IC to be inserted.\">)\n\t(SYNONYM SOCKET S1 DEPRESSION RECEPTACLE)\n\t(ADJECTIVE RED FIRST PLUS PRIMO)\n\t(CAPACITY 5)\n\t(CLC-TXT <PLTABLE \"This socket is the exact size and shape to accept a microchip.\" 0 0>)\n\t(ACTION SOCKET-FCN)>",
   "referencedBy": [
    "CHIPFILTER-FCN",
    "ORANGE-BUTTON-FCN",
    "SUPPLIES-N-FCN"
   ]
  },
  "SOCKET2": {
   "name": "SOCKET2",
   "file": "objects.zil",
   "line": 1494,
   "endLine": 1504,
   "desc": "secondary socket",
   "ldesc": null,
   "fdesc": null,
   "loc": "SUPPLIES-NORTH",
   "flags": [
    "TOUCHBIT",
    "CONTBIT",
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SOCKET",
    "S2",
    "DEPRESSION",
    "RECEPTACLE"
   ],
   "adjectives": [
    "NEGATIVE",
    "YELLOW",
    "SECOND"
   ],
   "action": "SOCKET-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CLC-TXT": [
     "<PLTABLE \"This socket is the exact size and shape to accept a microchip.\" 0 0>"
    ],
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"yellow socket\" \"second depression\" \"negative socket\" 0 \"secondary socket\" \"S2\" 0 0 0 0 0 0 \"Diagnostic circuits detect the need for a working IC to be inserted.\">"
    ],
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [
    "NEXT-FRIED"
   ],
   "source": "<OBJECT SOCKET2\n\t(IN SUPPLIES-NORTH)\n\t(FLAGS TOUCHBIT CONTBIT OPENBIT NDESCBIT)\n\t(CLC-TXT <PLTABLE \"This socket is the exact size and shape to accept a microchip.\" 0 0>)\n\t(DESC \"secondary socket\")\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"yellow socket\" \"second depression\"\n\"negative socket\" 0 \"secondary socket\" \"S2\" 0 0 0 0 0 0 \"Diagnostic circuits detect the need for a working IC to be inserted.\">)\n\t(SYNONYM SOCKET S2 DEPRESSION RECEPTACLE)\n\t(ADJECTIVE NEGATIVE YELLOW SECOND)\n\t(CAPACITY 5)\n\t(ACTION SOCKET-FCN)>",
   "referencedBy": [
    "CHIPFILTER-FCN",
    "ORANGE-BUTTON-FCN",
    "SUPPLIES-N-FCN"
   ]
  },
  "FUSE": {
   "name": "FUSE",
   "file": "objects.zil",
   "line": 1510,
   "endLine": 1520,
   "desc": "FUSE",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "TAKEBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "FUSE",
    "INTERRUPTER",
    "GF1",
    "CYLINDER"
   ],
   "adjectives": [
    "SMALL",
    "GLASS",
    "NOISEL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"glass fuse\" \"small cylinder\" \"glass fuse\" \"noiseless cylinder\" \"glass interrupter\" \"GF1\" 0 0 \"There is a little conductor inside of it which prevents circuits from overloading.\" 0 0 0 \"The device, a simple 32 amp fuse, is in proper working order.\">"
    ],
    "SIZE": [
     "7"
    ],
    "CLC-TXT": [
     "<PLTABLE 0 \"This is a small glass fuse which should be removed before tampering with any exposed sections. After tampering with machine internals, the fuse should be put back into the machine.\" 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT FUSE\n\t(IN MACHINE)\n\t(FLAGS NDESCBIT TOUCHBIT TAKEBIT INVISIBLE)\n\t(DESC \"FUSE\")\n\t(OBJDESCS <PLTABLE\n1 1 1 0 1 1 \"glass fuse\"\"small cylinder\"\"glass fuse\"\"noiseless cylinder\"\n\"glass interrupter\" \"GF1\" 0 0 \"There is a little conductor inside of it which prevents circuits from overloading.\" 0 0 0 \"The device, a simple 32 amp fuse, is in proper working order.\">)\n\t(SYNONYM FUSE INTERRUPTER GF1 CYLINDER)\n\t(ADJECTIVE SMALL GLASS NOISEL)\n\t(SIZE 7)\n\t(CLC-TXT <PLTABLE 0 \"This is a small glass fuse which should be removed before tampering with any exposed sections. After tampering with machine internals, the fuse should be put back into the machine.\" 0>)>",
   "referencedBy": [
    "ORANGE-BUTTON-FCN",
    "ORANGE-WIRE-FCN",
    "CIRCLE-FCN",
    "SUPPLIES-N-FCN"
   ]
  },
  "FRONT-PANEL": {
   "name": "FRONT-PANEL",
   "file": "objects.zil",
   "line": 1522,
   "endLine": 1536,
   "desc": "front panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "TOUCHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "PANEL",
    "PIANO"
   ],
   "adjectives": [
    "FRONT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"front panel\" \"front panel\" \"front panel\" \"front panel\" \"piano\" \"front panel\" \"On the panel are a series of eight circles. Each of these circles has a three letter code printed on it. The three letters correspond to half of the Filtering Computers' reset code.\" \"The panel appears to be smooth, but I can detect eight raised circles on it.\" \"The panel has a lot of electrical circuitry going through it, with circuits traced to a series of eight areas.\" 0 \"The front panel is a piano, with only eight circle keys.\" \"CLC indicates the FP is a mechanism designed to reset the Filtering Computers.\">"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [
    "CIRCLE1",
    "CIRCLE8",
    "CIRCLE7",
    "CIRCLE6",
    "CIRCLE5",
    "CIRCLE4",
    "CIRCLE3",
    "CIRCLE2"
   ],
   "source": "<OBJECT FRONT-PANEL\n\t(IN MACHINE)\n\t(FLAGS CONTBIT SURFACEBIT TOUCHBIT OPENBIT)\n\t(DESC \"front panel\")\n\t(SYNONYM PANEL PIANO)\n\t(ADJECTIVE FRONT)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"front panel\"\"front panel\"\"front panel\"\n\t\t\t  \"front panel\"\"piano\"\"front panel\"\n\"On the panel are a series of eight circles. Each of these circles has a three letter code printed on it. The three letters correspond to half of the Filtering Computers' reset code.\"\n\"The panel appears to be smooth, but I can detect eight raised circles on it.\"\n\"The panel has a lot of electrical circuitry going through it, with circuits traced to a series of eight areas.\"\n0\n\"The front panel is a piano, with only eight circle keys.\"\n\"CLC indicates the FP is a mechanism designed to reset the Filtering Computers.\">)\n\t(SIZE 1)>",
   "referencedBy": []
  },
  "CIRCLE1": {
   "name": "CIRCLE1",
   "file": "objects.zil",
   "line": 1538,
   "endLine": 1545,
   "desc": "FOO",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "FIRST",
    "FOO"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"first circle\" \"first circle\" \"first circle\" \"first circle\" \"first circle\" \"first circle\" \"The circle has some lettering on it which says FOO.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE1\n\t(IN FRONT-PANEL)\n\t(DESC \"FOO\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE FIRST FOO)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"first circle\"\"first circle\"\"first circle\"\"first circle\"\"first circle\"\"first circle\" \"The circle has some lettering on it which says FOO.\" 0 0 0 0 0>)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "CIRCLE8": {
   "name": "CIRCLE8",
   "file": "objects.zil",
   "line": 1547,
   "endLine": 1554,
   "desc": "TRA",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "EIGHTH",
    "TRA"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"eighth circle\" \"eighth circle\" \"eighth circle\" \"eighth circle\" \"eighth circle\" \"eighth circle\" \"The circle has some lettering on it which says TRA.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE8\n\t(IN FRONT-PANEL)\n\t(DESC \"TRA\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE EIGHTH TRA)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"eighth circle\"\"eighth circle\"\"eighth circle\"\"eighth circle\"\"eighth circle\"\"eighth circle\" \"The circle has some lettering on it which says TRA.\" 0 0 0 0 0>)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "CIRCLE7": {
   "name": "CIRCLE7",
   "file": "objects.zil",
   "line": 1556,
   "endLine": 1563,
   "desc": "BOZ",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "SEVENT",
    "BOZ"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"seventh circle\" \"seventh circle\" \"seventh circle\" \"seventh circle\" \"seventh circle\" \"seventh circle\" \"The circle has some lettering on it which says BOZ.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE7\n\t(IN FRONT-PANEL)\n\t(DESC \"BOZ\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE SEVENT BOZ)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"seventh circle\"\"seventh circle\"\"seventh circle\"\"seventh circle\"\"seventh circle\"\"seventh circle\" \"The circle has some lettering on it which says BOZ.\" 0 0 0 0 0>)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "CIRCLE6": {
   "name": "CIRCLE6",
   "file": "objects.zil",
   "line": 1565,
   "endLine": 1572,
   "desc": "CON",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "SIXTH",
    "CON"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"sixth circle\" \"sixth circle\" \"sixth circle\" \"sixth circle\" \"sixth circle\" \"sixth circle\" \"The circle has some lettering on it which says CON.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE6\n\t(IN FRONT-PANEL)\n\t(DESC \"CON\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE SIXTH CON)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"sixth circle\"\"sixth circle\"\"sixth circle\"\"sixth circle\"\"sixth circle\"\"sixth circle\" \"The circle has some lettering on it which says CON.\" 0 0 0 0 0>)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "CIRCLE5": {
   "name": "CIRCLE5",
   "file": "objects.zil",
   "line": 1574,
   "endLine": 1581,
   "desc": "KLA",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "FIFTH",
    "KLA"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"fifth circle\" \"fifth circle\" \"fifth circle\" \"fifth circle\" \"fifth circle\" \"fifth circle\" \"The circle has some lettering on it which says KLA.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE5\n\t(IN FRONT-PANEL)\n\t(DESC \"KLA\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE FIFTH KLA)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"fifth circle\"\"fifth circle\"\"fifth circle\"\"fifth circle\"\"fifth circle\"\"fifth circle\" \"The circle has some lettering on it which says KLA.\" 0 0 0 0 0>)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "CIRCLE4": {
   "name": "CIRCLE4",
   "file": "objects.zil",
   "line": 1583,
   "endLine": 1590,
   "desc": "BAR",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "FOURTH",
    "BAR"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"fourth circle\" \"fourth circle\" \"fourth circle\" \"fourth circle\" \"fourth circle\" \"fourth circle\" \"The circle has some lettering on it which says BAR.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE4\n\t(IN FRONT-PANEL)\n\t(DESC \"BAR\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE FOURTH BAR)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"fourth circle\"\"fourth circle\"\"fourth circle\"\"fourth circle\"\"fourth circle\"\"fourth circle\" \"The circle has some lettering on it which says BAR.\" 0 0 0 0 0 >)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "CIRCLE3": {
   "name": "CIRCLE3",
   "file": "objects.zil",
   "line": 1592,
   "endLine": 1599,
   "desc": "BLE",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "THIRD",
    "BLE"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"third circle\" \"third circle\" \"third circle\" \"third circle\" \"third circle\" \"third circle\" \"The circle has some lettering on it which says BLE.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE3\n\t(IN FRONT-PANEL)\n\t(DESC \"BLE\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE THIRD BLE)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1 \"third circle\"\"third circle\"\"third circle\"\"third circle\"\"third circle\"\"third circle\" \"The circle has some lettering on it which says BLE.\" 0 0 0 0 0 >)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "CIRCLE2": {
   "name": "CIRCLE2",
   "file": "objects.zil",
   "line": 1601,
   "endLine": 1608,
   "desc": "MUM",
   "ldesc": null,
   "fdesc": null,
   "loc": "FRONT-PANEL",
   "flags": [],
   "synonyms": [
    "CIRCLE",
    "KEY"
   ],
   "adjectives": [
    "SECOND",
    "MUM"
   ],
   "action": "CIRCLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OBJDESCS": [
     "<PLTABLE 1 1 1 0 1 1 \"second circle\" \"second circle\" \"second circle\" \"second circle\" \"second circle\" \"second circle\" \"The circle has some lettering on it which says MUM.\" 0 0 0 0 0>"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIRCLE2\n\t(IN FRONT-PANEL)\n\t(DESC \"MUM\")\n\t(SYNONYM CIRCLE KEY)\n\t(ADJECTIVE SECOND MUM)\n\t(OBJDESCS <PLTABLE 1 1 1 0 1 1\"second circle\"\"second circle\"\"second circle\"\"second circle\"\"second circle\"\"second circle\" \"The circle has some lettering on it which says MUM.\" 0 0 0 0 0 >)\n\t(ACTION CIRCLE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "V-READ"
   ]
  },
  "GLOBAL-IRIS": {
   "name": "GLOBAL-IRIS",
   "file": "robots.zil",
   "line": 138,
   "endLine": 147,
   "desc": "Iris",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "IRIS",
    "ROBOT"
   ],
   "adjectives": [
    "VISUAL",
    "ROBOT"
   ],
   "action": "GLOBAL-ROBOT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "1"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-IRIS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ROBOTS IRIS ROBOT)\n\t(ADJECTIVE VISUAL ROBOT)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT SEARCHBIT)\n\t(DESC \"Iris\")\n\t(ACTION GLOBAL-ROBOT)\n\t(ROBOT 1)\n\t(GLOBAL HANDS)\n        (CAPACITY 100)>",
   "referencedBy": [
    "REAL-ROBOT",
    "V-POINT"
   ]
  },
  "IRIS": {
   "name": "IRIS",
   "file": "robots.zil",
   "line": 149,
   "endLine": 178,
   "desc": "Iris",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEATHER-BANKS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "IRIS",
    "ROBOT"
   ],
   "adjectives": [
    "VISUAL",
    "ROBOT"
   ],
   "action": "IRIS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "1"
    ],
    "OBJDESCS": [
     "<PLTABLE \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"It is extremely difficult to describe oneself.\" \"Iris feels extremely delicate and is under a meter in height. My pressure extensions detect a maintenance panel which should be accessible to me.\" \"Iris, when functioning normally, transmits high-resolution pictures of her\nsurroundings to the FC. She can provide you with visual data and is under a meter in height.\" \"Iris is silent and does not respond to verbal cueing. She is about one meter high.\" \"Iris is the personification of petite beauty. As the old-timers say,|\n  The young lady always wore mink|\n  While her visual circuits went 'blink'|\n    The young men's delight|\n    Night after night|\n  Was her blushing a bright shade of pink.\" \"Limited data available while not plugged in to a peripheral. Iris is a visual robot, with no specific tagging devices, about one meter tall.\">"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Contained within Iris is a maintenance panel and some visual processors.\" \"Iris can be best used to monitor the monitors surrounding the Central Chamber.|\nWaldo should remove the maintenance panel and replace all faulty chips.\" \"Iris is a visual robot, a descendant of the simple photon receptors, placed within the complex at its inception.\">"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [
    "PANEL"
   ],
   "source": "<OBJECT IRIS\n\t(IN WEATHER-BANKS)\n\t(SYNONYM ROBOTS IRIS ROBOT)\n\t(ADJECTIVE VISUAL ROBOT)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT SEARCHBIT)\n\t(DESC \"Iris\")\n\t(ACTION IRIS-FCN)\n\t(ROBOT 1)\n\t(OBJDESCS <PLTABLE \n\"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\"\n\"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \"Iris\" \n\"It is extremely difficult to describe oneself.\"\n\"Iris feels extremely delicate and is under a meter in height. My pressure extensions detect a maintenance panel which should be accessible to me.\"\n\"Iris, when functioning normally, transmits high-resolution pictures of her\nsurroundings to the FC. She can provide you with visual data and is under a meter in height.\"\n\"Iris is silent and does not respond to verbal cueing. She is about one meter high.\"\n\"Iris is the personification of petite beauty. As the old-timers say,|\n  The young lady always wore mink|\n  While her visual circuits went 'blink'|\n    The young men's delight|\n    Night after night|\n  Was her blushing a bright shade of pink.\"\n\"Limited data available while not plugged in to a peripheral. Iris is a visual robot, with no specific tagging devices, about one meter tall.\">)\n\t(GLOBAL HANDS)\n\t(CLC-TXT <PLTABLE\n\"Contained within Iris is a maintenance panel and some visual processors.\"\n\"Iris can be best used to monitor the monitors surrounding the Central Chamber.|\nWaldo should remove the maintenance panel and replace all faulty chips.\"\n\"Iris is a visual robot, a descendant of the simple photon receptors, placed within the complex at its inception.\">)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "MOVE-RBT",
    "MOVE-RBT?",
    "OBJ-FOUND",
    "GO",
    "CHIPFILTER-FCN",
    "TV-FCN",
    "I-CHASEAUDA",
    "HE-SHE",
    "HIM-HER",
    "IRIS-FCN",
    "I-IRIS-HINTS",
    "WEATHER-ROBOTS",
    "V-CONFIGURE",
    "STATUS-LINE",
    "V-EXAMINE",
    "V-MOVE-ROBOT-TO-LOC",
    "V-READ",
    "REAL-ROBOT",
    "V-POINT",
    "V-REPAIR"
   ]
  },
  "GLOBAL-WALDO": {
   "name": "GLOBAL-WALDO",
   "file": "robots.zil",
   "line": 209,
   "endLine": 218,
   "desc": "Waldo",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "WALDO",
    "ROBOT"
   ],
   "adjectives": [
    "BUILDER",
    "ROBOT"
   ],
   "action": "GLOBAL-ROBOT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "2"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-WALDO\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ROBOTS WALDO ROBOT)\n\t(ADJECTIVE BUILDER ROBOT)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Waldo\")\n\t(ACTION GLOBAL-ROBOT)\n\t(GLOBAL HANDS)\n\t(ROBOT 2)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "REAL-ROBOT",
    "V-POINT"
   ]
  },
  "WALDO": {
   "name": "WALDO",
   "file": "robots.zil",
   "line": 220,
   "endLine": 238,
   "desc": "Waldo",
   "ldesc": null,
   "fdesc": null,
   "loc": "REPAIR3",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "WALDO",
    "ROBOT"
   ],
   "adjectives": [
    "BUILDER",
    "ROBOT"
   ],
   "action": "WALDO-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "2"
    ],
    "OBJDESCS": [
     "<PLTABLE \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo\" \"Waldo has a lot of extensions for manipulating objects and is about one meter in height. He is primarily a building and repair robot. He's also rather cute and appeals to my visual circuits.\" \"How can I describe myself?\" \"Waldo emits a lot of electrical and sonar feedback waves used for manipulating objects in his environment and is about one meter in height.\" \"Waldo is generally a quiet robot, well behaved, who never utters a word and is about one meter in height.\" \"Waldo, ah Waldo. He builds and creates wonders which are a delight to behold and is about one meter in height.\" \"CLC tagged object WA-1 is a building robot and is about one meter in height.\" ;\"text\">"
    ],
    "CAPACITY": [
     "100"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Waldo is a multi-extensioned robot, capable of extremely delicate operations.\" \"With his microsurgery extension installed, there's little he can't do.\" \"Waldo is part of the Complex's original equipment, provided by the Frobozz Engineering Corporation at no extra cost.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT WALDO\n\t(IN REPAIR3)\n\t(SYNONYM ROBOTS WALDO ROBOT)\n\t(ADJECTIVE BUILDER ROBOT)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Waldo\")\n\t(ACTION WALDO-FCN)\n\t(GLOBAL HANDS)\n\t(ROBOT 2)\n\t(OBJDESCS <PLTABLE \"Waldo\"\"Waldo\"\"Waldo\"\"Waldo\"\"Waldo\"\"Waldo\"\n\t\t\t  \"Waldo\"\"Waldo\"\"Waldo\"\"Waldo\"\"Waldo\"\"Waldo\"\n\"Waldo has a lot of extensions for manipulating objects and is about one meter in height. He is primarily a building and repair robot. He's also rather cute and appeals to my visual circuits.\"\n\"How can I describe myself?\"\n\"Waldo emits a lot of electrical and sonar feedback waves used for manipulating objects in his environment and is about one meter in height.\"\n\"Waldo is generally a quiet robot, well behaved, who never utters a word and is about one meter in height.\"\n\"Waldo, ah Waldo. He builds and creates wonders which are a delight to behold and is about one meter in height.\"\n\"CLC tagged object WA-1 is a building robot and is about one meter in height.\" ;\"text\">)\n\t(CAPACITY 100)\n\t(CLC-TXT <PLTABLE \"Waldo is a multi-extensioned robot, capable of extremely delicate operations.\" \"With his microsurgery extension installed, there's little he can't do.\" \"Waldo is part of the Complex's original equipment, provided by the Frobozz Engineering Corporation at no extra cost.\">)>",
   "referencedBy": [
    "PARRIVE1",
    "PARRIVE2",
    "I-PEOPLE2",
    "I-KILL",
    "I-CHASEAUDA",
    "STU-1-F",
    "WALDO-FCN",
    "I-TREMOR1",
    "STATUS-LINE",
    "LOOK-CORRIDOR",
    "V-ALARM",
    "REAL-ROBOT"
   ]
  },
  "GLOBAL-SENSA": {
   "name": "GLOBAL-SENSA",
   "file": "robots.zil",
   "line": 258,
   "endLine": 267,
   "desc": "Sensa",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "SENSA",
    "ROBOT"
   ],
   "adjectives": [
    "SENSORY",
    "ROBOT"
   ],
   "action": "GLOBAL-ROBOT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "3"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-SENSA\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ROBOTS SENSA ROBOT)\n\t(ADJECTIVE SENSORY ROBOT)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Sensa\")\n\t(ACTION GLOBAL-ROBOT)\n\t(GLOBAL HANDS)\n\t(ROBOT 3)\n\t(CAPACITY 0)>",
   "referencedBy": [
    "REAL-ROBOT",
    "V-POINT"
   ]
  },
  "SENSA": {
   "name": "SENSA",
   "file": "robots.zil",
   "line": 269,
   "endLine": 287,
   "desc": "Sensa",
   "ldesc": null,
   "fdesc": null,
   "loc": "CPU-ROOM",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "SENSA",
    "ROBOT"
   ],
   "adjectives": [
    "SENSORY",
    "ROBOT"
   ],
   "action": "SENSA-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "3"
    ],
    "OBJDESCS": [
     "<PLTABLE \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"Sensa\" \"I see Sensa as a robot with two extensions which are used mainly to detect the flow of energy in the environment and objects. She is small and is about one meter in height and not very useful for manipulating objects.\" \"Sensa feels small and delicate, much like Iris, contains two extensions which are delicate and tuned as receptors and is about one meter in height.\" \"It is diffuclt for me to describe myself.\" \"Sensa makes no sounds, is unable to respond to verbal queries or orders, and is about one meter in height.\" \"Sensa is sensitive to sensations and is about one meter in height.\" \"CLC tagged object SE-1 is a robot designed to retrieve data from its surroundings and is about one meter in height.\">"
    ],
    "CAPACITY": [
     "0"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Sensa contains sensory pads and mechanisms for detecting abnormal activity.\" \"Sensa can best be used by directing her to examine objects.\" \"Sensa was provided when the Filtering Computers discovered the need for a drone to march through corridors, inspecting all devices for vibrational output.\">"
    ]
   },
   "contents": [],
   "source": "<OBJECT SENSA\n\t(IN CPU-ROOM)\n\t(SYNONYM ROBOTS SENSA ROBOT)\n\t(ADJECTIVE SENSORY ROBOT)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Sensa\")\n\t(ACTION SENSA-FCN)\n\t(GLOBAL HANDS)\n\t(ROBOT 3)\n\t(OBJDESCS <PLTABLE \"Sensa\" \"Sensa\"\"Sensa\"\"Sensa\"\"Sensa\"\"Sensa\"\"Sensa\"\n\t\t\t  \"Sensa\"\"Sensa\"\"Sensa\"\"Sensa\"\"Sensa\"\n\"I see Sensa as a robot with two extensions which are used mainly to detect the flow of energy in the environment and objects. She is small and is about one meter in height and not very useful for manipulating objects.\"\n\"Sensa feels small and delicate, much like Iris, contains two extensions which are delicate and tuned as receptors and is about one meter in height.\"\n\"It is diffuclt for me to describe myself.\"\n\"Sensa makes no sounds, is unable to respond to verbal queries or orders, and is about one meter in height.\"\n\"Sensa is sensitive to sensations and is about one meter in height.\"\n\"CLC tagged object SE-1 is a robot designed to retrieve data from its surroundings and is about one meter in height.\">)\n\t(CAPACITY 0)\n\t(CLC-TXT <PLTABLE \"Sensa contains sensory pads and mechanisms for detecting abnormal activity.\" \"Sensa can best be used by directing her to examine objects.\" \"Sensa was provided when the Filtering Computers discovered the need for a drone to march through corridors, inspecting all devices for vibrational output.\">)>",
   "referencedBy": [
    "BEGINNING",
    "PARRIVE1",
    "PARRIVE2",
    "I-PEOPLE2",
    "I-KILL",
    "I-CHASEAUDA",
    "STU-1-F",
    "HE-SHE",
    "HIM-HER",
    "SENSA-FCN",
    "I-TREMOR1",
    "STATUS-LINE",
    "V-ALARM",
    "REAL-ROBOT"
   ]
  },
  "GLOBAL-AUDA": {
   "name": "GLOBAL-AUDA",
   "file": "robots.zil",
   "line": 302,
   "endLine": 311,
   "desc": "Auda",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "AUDA",
    "ROBOT",
    "SPEAKER"
   ],
   "adjectives": [
    "VERBAL",
    "SPEAKING",
    "HEARING",
    "AUDIO",
    "ROBOT",
    "COMMUN"
   ],
   "action": "GLOBAL-ROBOT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "4"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-AUDA\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ROBOTS AUDA ROBOT SPEAKER)\n\t(ADJECTIVE VERBAL SPEAKING HEARING AUDIO ROBOT COMMUN)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Auda\")\n\t(ACTION GLOBAL-ROBOT)\n\t(GLOBAL HANDS)\n\t(ROBOT 4)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "REAL-ROBOT",
    "V-POINT"
   ]
  },
  "AUDA": {
   "name": "AUDA",
   "file": "robots.zil",
   "line": 313,
   "endLine": 331,
   "desc": "Auda",
   "ldesc": null,
   "fdesc": null,
   "loc": "ENTRY-AREA",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "AUDA",
    "ROBOT",
    "SPEAKER"
   ],
   "adjectives": [
    "VERBAL",
    "SPEAKING",
    "HEARING",
    "AUDIO",
    "ROBOT",
    "COMMUN"
   ],
   "action": "AUDA-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "4"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Auda has two dish antennae which function as 'ears'.\" \"Tell Auda to listen.\" \"Auda, part of the Complex's original equipment, was built as an interface between human visitors and you.\">"
    ],
    "OBJDESCS": [
     "<PLTABLE \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda\" \"Auda is a small robot (about one meter in height) with large dish receptors which give him the appearance of having large ears. He is a listening robot.\" \"He hears all, with half of his meter-high body made up of two large surfaces shaped like dishes which are mounted on swivels.\" \"Auda receives vibrations directly related to air currents and is about one meter in height.\" \"What can I say? I'm cute and about one meter in height.\" \"Auda, the ears of the people, can hear the beauties of the surroundings, the subtleties of the creatures and is about one meter in height.\" \"CLC tagged object Auda is unique in his ability to communicate with outside creatures and is about one meter in height.\">"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT AUDA\n\t(IN ENTRY-AREA)\n\t(SYNONYM ROBOTS AUDA ROBOT SPEAKER)\n\t(ADJECTIVE VERBAL SPEAKING HEARING AUDIO ROBOT COMMUN)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Auda\")\n\t(ACTION AUDA-FCN)\n\t(GLOBAL HANDS)\n\t(ROBOT 4)\n\t(CLC-TXT <PLTABLE \"Auda has two dish antennae which function as 'ears'.\" \"Tell Auda to listen.\" \"Auda, part of the Complex's original equipment, was built as an interface between human visitors and you.\">)\n\t(OBJDESCS <PLTABLE \"Auda\"\"Auda\"\"Auda\"\"Auda\"\"Auda\"\"Auda\"\n\t\t\t  \"Auda\"\"Auda\"\"Auda\"\"Auda\"\"Auda\"\"Auda\"\n\"Auda is a small robot (about one meter in height) with large dish receptors which give him the appearance of having large ears. He is a listening robot.\"\n\"He hears all, with half of his meter-high body made up of two large surfaces shaped like dishes which are mounted on swivels.\"\n\"Auda receives vibrations directly related to air currents and is about one meter in height.\"\n\"What can I say? I'm cute and about one meter in height.\"\n\"Auda, the ears of the people, can hear the beauties of the surroundings, the subtleties of the creatures and is about one meter in height.\"\n\"CLC tagged object Auda is unique in his ability to communicate with outside creatures and is about one meter in height.\">)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "AUDA-HEARS?",
    "PARRIVE2",
    "PARRIVE4",
    "I-CHASEAUDA",
    "STU-1-F",
    "HE-SHE",
    "HIM-HER",
    "AUDA-FCN",
    "I-TREMOR1",
    "I-AUDA-HINTS",
    "STATUS-LINE",
    "V-INVENTORY",
    "V-COUNT",
    "REAL-ROBOT"
   ]
  },
  "GLOBAL-POET": {
   "name": "GLOBAL-POET",
   "file": "robots.zil",
   "line": 346,
   "endLine": 355,
   "desc": "Poet",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "POET",
    "ROBOT"
   ],
   "adjectives": [
    "METAPHOR",
    "ROBOT",
    "RHYMING"
   ],
   "action": "GLOBAL-ROBOT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "5"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-POET\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ROBOTS POET ROBOT)\n\t(ADJECTIVE METAPHOR ROBOT RHYMING)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(GLOBAL HANDS)\n\t(DESC \"Poet\")\n\t(ACTION GLOBAL-ROBOT)\n\t(ROBOT 5)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "REAL-ROBOT",
    "V-POINT"
   ]
  },
  "POET": {
   "name": "POET",
   "file": "robots.zil",
   "line": 358,
   "endLine": 375,
   "desc": "Poet",
   "ldesc": null,
   "fdesc": null,
   "loc": "CPU-ROOM",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "POET",
    "ROBOT"
   ],
   "adjectives": [
    "METAPHOR",
    "ROBOT",
    "RHYMING"
   ],
   "action": "POET-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "5"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Poet has two sensors located at the end of his extensions.\" \"For diagnostic information on pattern and flow, have Poet touch objects.\" \"Poet, historically speaking, has been of extreme value in pinpointing exact causes of electrical breakdown.\">"
    ],
    "OBJDESCS": [
     "<PLTABLE \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"Poet\" \"I see Poet as a misguided robot, wandering about this complex in an abnormal manner even for him. There are two extensions which have flat plates on them which could be used for something, though Poet never communicated their purpose to me. Like the rest of us, Poet is about 1 meter tall.\" \"The robot you refer to as Poet is actually a finely tuned, though out of kilter, sensory robot used for diagnostic purposes. He is one meter tall.\" \"All types of energy flow into Poet, especially through its collector plates at the ends of its two extensions. He is a meter high.\" \"Poet does not emit or receive sound waves and so I have nothing to do with him, that meter-high puzzle.\" \"A natural born poet, I feel the flow of metaphor upon me at all times.\" \"CLC does not recognize Poet as a certified repair robot in its present state. Poet is no larger than a meter high.\">"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT POET\n\t(IN CPU-ROOM)\n\t(SYNONYM ROBOTS POET ROBOT)\n\t(ADJECTIVE METAPHOR ROBOT RHYMING)\n\t(GLOBAL HANDS)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Poet\")\n\t(ACTION POET-FCN)\n\t(ROBOT 5)\n\t(CLC-TXT <PLTABLE \"Poet has two sensors located at the end of his extensions.\" \"For diagnostic information on pattern and flow, have Poet touch objects.\" \"Poet, historically speaking, has been of extreme value in pinpointing exact causes of electrical breakdown.\">)\n\t(OBJDESCS <PLTABLE \"Poet\" \"Poet\"\"Poet\"\"Poet\"\"Poet\"\"Poet\"\"Poet\"\"Poet\"\"Poet\"\"Poet\"\"Poet\"\"Poet\" \n\"I see Poet as a misguided robot, wandering about this complex in an abnormal manner even for him. There are two extensions which have flat plates on them which could be used for something, though Poet never communicated their purpose to me. Like the rest of us, Poet is about 1 meter tall.\"\n\"The robot you refer to as Poet is actually a finely tuned, though out of kilter, sensory robot used for diagnostic purposes. He is one meter tall.\"\n\"All types of energy flow into Poet, especially through its collector plates at the ends of its two extensions. He is a meter high.\"\n\"Poet does not emit or receive sound waves and so I have nothing to do with him, that meter-high puzzle.\"\n\"A natural born poet, I feel the flow of metaphor upon me at all times.\"\n\"CLC does not recognize Poet as a certified repair robot in its present state. Poet is no larger than a meter high.\">)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "PARRIVE1",
    "PARRIVE2",
    "I-PEOPLE2",
    "I-KILL",
    "I-CHASEAUDA",
    "STU-1-F",
    "POET-FCN",
    "I-TREMOR1",
    "STATUS-LINE",
    "V-ALARM",
    "REAL-ROBOT"
   ]
  },
  "GLOBAL-WHIZ": {
   "name": "GLOBAL-WHIZ",
   "file": "robots.zil",
   "line": 390,
   "endLine": 399,
   "desc": "Whiz",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "WHIZ",
    "ROBOT"
   ],
   "adjectives": [
    "ROBOT",
    "RESEARCH"
   ],
   "action": "GLOBAL-ROBOT",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "6"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-WHIZ\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ROBOTS WHIZ ROBOT)\n\t(ADJECTIVE  ROBOT RESEARCH)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(DESC \"Whiz\")\n\t(ACTION GLOBAL-ROBOT)\n\t(ROBOT 6)\n\t(GLOBAL HANDS)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "REAL-ROBOT",
    "V-POINT"
   ]
  },
  "WHIZ": {
   "name": "WHIZ",
   "file": "robots.zil",
   "line": 401,
   "endLine": 418,
   "desc": "Whiz",
   "ldesc": null,
   "fdesc": null,
   "loc": "PERIPH-3",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "ROBOTS",
    "WHIZ",
    "ROBOT"
   ],
   "adjectives": [
    "ROBOT",
    "RESEARCH"
   ],
   "action": "WHIZ-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HANDS"
   ],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "6"
    ],
    "CLC-TXT": [
     "<PLTABLE \"Whiz is useful for interfacing with the CLC.\" \"Just tell him to plug in when he's near a peripheral's pedestal.\" \"Built before the complex was completed, Whiz was a bit of a mistake since he should have been able to plug directly into the CLC.\">"
    ],
    "OBJDESCS": [
     "<PLTABLE \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz\" \"Whiz is our interface to the CLC and is about one meter in height. He has a small connecting cable extending from the front of his frame which enables the interface.\" \"Whiz's general shape, according to my sonar and sense of touch, indicates he is specific-purposed and about one meter in height.\" \"Whiz processes tremendous amounts of data, assumed by the tremendous energy flow over radio waves between himself and the CLC, and is about one meter in height.\" \"Whiz does not respond to any audio stimuli and is about one meter in height.\" \"Whiz is a whiz, and oh what a wonderful whiz he was, the little shrimp.\" \"CLC data available at peripherals.\">"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT WHIZ\n\t(IN PERIPH-3)\n\t(SYNONYM ROBOTS WHIZ ROBOT)\n\t(ADJECTIVE ROBOT RESEARCH)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT)\n\t(GLOBAL HANDS)\n\t(DESC \"Whiz\")\n\t(ACTION WHIZ-FCN)\n\t(ROBOT 6)\n\t(CLC-TXT <PLTABLE \"Whiz is useful for interfacing with the CLC.\" \"Just tell him to plug in when he's near a peripheral's pedestal.\" \"Built before the complex was completed, Whiz was a bit of a mistake since he should have been able to plug directly into the CLC.\">)\n\t(OBJDESCS <PLTABLE \"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\"Whiz\"\n\"Whiz is our interface to the CLC and is about one meter in height. He has a small connecting cable extending from the front of his frame which enables the interface.\"\n\"Whiz's general shape, according to my sonar and sense of touch, indicates he is specific-purposed and about one meter in height.\"\n\"Whiz processes tremendous amounts of data, assumed by the tremendous energy flow over radio waves between himself and the CLC, and is about one meter in height.\"\n\"Whiz does not respond to any audio stimuli and is about one meter in height.\"\n\"Whiz is a whiz, and oh what a wonderful whiz he was, the little shrimp.\"\n\"CLC data available at peripherals.\">)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "I-CHASEAUDA",
    "WHIZ-FCN",
    "STATUS-LINE",
    "LOOK-CORRIDOR",
    "DESCRIBE-ROBOTS",
    "V-HINT",
    "V-QUERY",
    "REAL-ROBOT",
    "V-ADVANCED"
   ]
  },
  "TWOBOTS": {
   "name": "TWOBOTS",
   "file": "robots.zil",
   "line": 453,
   "endLine": 456,
   "desc": "Two Robots",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "TWOBOTS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT TWOBOTS\n\t(DESC \"Two Robots\")\n\t(ACTION TWOBOTS-FCN)\n\t(ROBOT 0)>",
   "referencedBy": [
    "PARSER",
    "MAIN-LOOP"
   ]
  },
  "GLOBAL-PEOPLE": {
   "name": "GLOBAL-PEOPLE",
   "file": "robots.zil",
   "line": 866,
   "endLine": 874,
   "desc": "People",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT",
    "VILLAIN"
   ],
   "synonyms": [
    "HUMANS",
    "OBJECT",
    "CREATU",
    "MECHAN"
   ],
   "adjectives": [
    "MOBILE",
    "LARGE",
    "TALKIN",
    "CREATO",
    "CORES"
   ],
   "action": "GLOBAL-ROBOT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "ROBOT": [
     "7"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT GLOBAL-PEOPLE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HUMANS OBJECT CREATU MECHAN)\n\t(ADJECTIVE MOBILE LARGE TALKIN CREATO CORES)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT SEARCHBIT VILLAIN)\n\t(DESC \"People\")\n\t(ACTION GLOBAL-ROBOT)\n\t(ROBOT 7)\n\t(CAPACITY 100)> ",
   "referencedBy": []
  },
  "PEOPLE": {
   "name": "PEOPLE",
   "file": "robots.zil",
   "line": 876,
   "endLine": 897,
   "desc": "People",
   "ldesc": null,
   "fdesc": null,
   "loc": "UD-TUBE",
   "flags": [
    "VICBIT",
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "SEARCHBIT",
    "VILLAIN"
   ],
   "synonyms": [
    "HUMANS",
    "OBJECT",
    "CREATU",
    "MECHAN"
   ],
   "adjectives": [
    "MOBILE",
    "LARGE",
    "TALKIN",
    "CREATO",
    "CORES"
   ],
   "action": "PEOPLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CLC-TXT": [
     "<PLTABLE \"They are carbon-based, organic mechanisms.\" \"They are here to replace you. You must stop them at all costs.\" \"I refer you to Gregory Franklin...\">",
     "<PLTABLE 0 \"These humans can be of help in reaching areas which cannot be reached by other means.\" 0>"
    ],
    "ROBOT": [
     "7"
    ],
    "OBJDESCS": [
     "<PLTABLE 1 1 1 1 1 1 \"humans\" \"mobile objects\" \"creatures\" \"talking mechanisms\" \"Creators\" \"mobile cores\" \"They're very good looking.\" \"I wish I were as large as them. And they each have ten tiny extensions at the end of their two grasping extensions! Incredible!\" \"I like myself better, having all kinds of sensory input at my disposal.\" \"Too bad. They've got such tiny ears...\" \"They're just shallow imitations of life (unlike me).\" \"How do they plug into the CLC? I don't understand them at all.\">"
    ],
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT PEOPLE\n\t(IN UD-TUBE)\n\t(SYNONYM HUMANS OBJECT CREATU MECHAN)\n\t(ADJECTIVE MOBILE LARGE TALKIN CREATO CORES)\n\t(FLAGS VICBIT NDESCBIT OPENBIT CONTBIT SEARCHBIT VILLAIN)\n\t(DESC \"People\")\n\t(ACTION PEOPLE-FCN)\n\t(CLC-TXT <PLTABLE \"They are carbon-based, organic mechanisms.\" \"They are here to replace you. You must stop them at all costs.\" \"I refer you to Gregory Franklin...\">)\n\t(ROBOT 7)\n\t(OBJDESCS <PLTABLE\n1 1 1 1 1 1 \n\"humans\" \"mobile objects\" \"creatures\" \"talking mechanisms\"\n\"Creators\" \"mobile cores\"\n\"They're very good looking.\"\n\"I wish I were as large as them. And they each have ten tiny extensions at the end of their two grasping extensions! Incredible!\"\n\"I like myself better, having all kinds of sensory input at my disposal.\"\n\"Too bad. They've got such tiny ears...\"\n\"They're just shallow imitations of life (unlike me).\"\n\"How do they plug into the CLC? I don't understand them at all.\" >)\n\t(CLC-TXT <PLTABLE\n0 \"These humans can be of help in reaching areas which cannot be reached by other means.\" 0 >)\n\t(CAPACITY 100)>",
   "referencedBy": [
    "FOLLOW-GOAL",
    "MOVE-RBT?",
    "DO-THE-MOVE",
    "CORRIDOR-CHECK",
    "DRAGGING?",
    "TOOLBAG-FCN",
    "AUDA-HEARS?",
    "ROBOT-THERE?",
    "I-PEOPLE1",
    "PARRIVE1",
    "PARRIVE2",
    "ENOUGH-TRADING",
    "PEOPLE-GIVEN-BAG",
    "I-PEOPLE2",
    "I-PEOPLE4",
    "PARRIVE4",
    "I-CAR-WAIT",
    "I-KILL",
    "I-CHASEAUDA",
    "I-STARCROSS",
    "STU-1-F",
    "HE-SHE",
    "HIM-HER",
    "I-AUDA-HINTS",
    "PEOPLE-FCN",
    "DESCRIBE-ROBOTS",
    "V-COUNT",
    "PRE-GIVE",
    "V-BOARD",
    "V-LISTEN",
    "V-ALARM",
    "REAL-ROBOT",
    "V-$TELL",
    "V-POINT",
    "V-STOP"
   ]
  }
 },
 "routines": {
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
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t #DECL ((RTN) ATOM (DEMON) <OR ATOM FALSE> (E C INT) <PRIMTYPE\n\t\t\t\t\t\t\t      VECTOR>)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "clock.zil",
   "line": 49,
   "endLine": 66,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX (FLG) <OR FALSE ATOM>)\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG MOVES <+ ,MOVES 1>>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t\t   <APPLY <GET .C ,C-RTN>>>\n\t\t\t\t      <SET FLG T>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "gparser.zil",
   "line": 1176,
   "endLine": 1189,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS) \n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQ ,P-ADJ .SYNS <- </ <PTSIZE .SYNS> 2> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <0? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "CRETIN": {
   "name": "CRETIN",
   "file": "globals.zil",
   "line": 160,
   "endLine": 186,
   "source": "<ROUTINE CRETIN ()\n\t <COND (<VERB? GIVE>\n\t\t<TELL \"FC: I think you're a little confused.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? KILL MUNG>\n\t\t<COND (<IN? ,WINNER ,CPU-ROOM>\n\t\t       <ROBOT-TELL \"I'll open the \" <>>\n\t\t       <TELL D ,HOME \" and see what I can do.\" CR>\n\t\t       <PERFORM ,V?OPEN ,HOME>)\n\t\t      (T\n\t\t       <ROBOT-TELL \"I'll consider it only after I'm in the\nCentral Chamber.\">\n\t\t       <RTRUE>)>)\n\t       (<VERB? TAKE>\n\t\t<ROBOT-TELL \"Hey, let's do the job we're supposed to, okay?\">)\n\t       (<VERB? DISEMBARK>\n\t\t<ROBOT-TELL \"You'll have to do that on your own.\">)\n\t       (<VERB? EXAMINE>\n\t\t<ROBOT-TELL \"That's difficult unless the \" <>>\n\t\t<TELL D ,HOME \" has been opened.\" CR>)\n\t       (<VERB? FIND>\n\t\t<COND (<NOT <IN? ,WINNER ,CPU-ROOM>>\n\t\t       <PERFORM ,V?WALK-TO ,CPU-ROOM>)\n\t\t      (T <ROBOT-TELL\n\t\t\t  \"You're right here, inside the \" <>>\n\t\t       <TELL D ,HOME \".\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "STEP-FCN": {
   "name": "STEP-FCN",
   "file": "globals.zil",
   "line": 278,
   "endLine": 295,
   "source": "<ROUTINE STEP-FCN ()\n\t <COND (<AND <VERB? PUT-AGAINST>\n\t\t     <EQUAL? ,PRSO ,WEDGE>\n\t\t     <OR <IN? ,WEDGE ,WINNER>\n\t\t\t <IN? ,WEDGE ,WINNER-HERE>>>\n\t\t<COND (<NOT <EQUAL? ,WEDGE-PLACED 0>>\n\t\t       <ROBOT-TELL \"It's already in position.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,WINNER-HERE ,REPAIR1>\n\t\t       <SETG WEDGE-PLACED 1>)\n\t\t      (<EQUAL? ,WINNER-HERE ,HALLWAY-JUNCTION ,HUMAN-ENTRY>\n\t\t       <SETG WEDGE-PLACED 2>)\n\t\t      (ELSE\n\t\t       <SETG WEDGE-PLACED 0>)>\n\t\t<MOVE ,WEDGE ,WINNER-HERE>\n\t\t<TELL \"The \" D ,WEDGE \" has been positioned at the \"\n\t\t      D ,PRSI \".\" CR>\n\t\t<RTRUE>)>>"
  },
  "KILL-GOAL": {
   "name": "KILL-GOAL",
   "file": "goal.zil",
   "line": 173,
   "endLine": 181,
   "source": "<ROUTINE KILL-GOAL (RBT \"OPTIONAL\" (DRAG <>) \"AUX\" GT OFFSET)\n\t <SET OFFSET <GETP .RBT ,P?ROBOT>>\n\t <SET GT <GET ,GOAL-TABLES .OFFSET>>\n\t <PUT .GT ,GOAL-S <>>\n\t <PUT .GT ,GOAL-F <>>\n\t <PUT .GT ,GOAL-ENABLE T>\n\t <COND (.DRAG\n\t\t<PUT ,DRAG-TBL .OFFSET 0>)>\n\t <RFALSE>>"
  },
  "SET-GOAL": {
   "name": "SET-GOAL",
   "file": "goal.zil",
   "line": 183,
   "endLine": 192,
   "source": "<ROUTINE SET-GOAL (RBT GOAL \"AUX\" (HERE <LOC .RBT>) HL GL GT)\n\t #DECL ((RBT GOAL HERE) OBJECT (HL GL) FIX\n\t\t(PRIORITY) <OR FALSE ATOM>)\n\t <SET GT <GET ,GOAL-TABLES <GETP .RBT ,P?ROBOT>>>\n\t <PUT .GT ,GOAL-I <+ <* <GETP .HERE ,P?LINE> 12>\n\t\t\t     <* <GETP .GOAL ,P?LINE> 2>>>\n\t <PUT .GT ,GOAL-S <GETP .GOAL ,P?STATION>>\n\t <PUT .GT ,GOAL-F .GOAL>\n\t <PUT .GT ,GOAL-ENABLE T>\n\t <LOC .RBT>>"
  },
  "FOLLOW-GOAL": {
   "name": "FOLLOW-GOAL",
   "file": "goal.zil",
   "line": 194,
   "endLine": 241,
   "source": "<ROUTINE FOLLOW-GOAL (RBT \"AUX\" (HERE <LOC .RBT>) LINE LN RM GT GOAL FLG\n\t\t      \t\t   (GOAL-FLAG <>) (IGOAL <>) LOC (CNT 1) DIR)\n\t #DECL ((RBT HERE LOC RM) OBJECT (LN CNT) FIX\n\t\t(GOAL-FLAG) <OR ATOM FALSE>)\n\t <SET GT <GET ,GOAL-TABLES <GETP .RBT ,P?ROBOT>>>\n\t <COND (<==? .HERE <GET .GT ,GOAL-F>>\n\t\t<ARRIVAL .RBT>\n\t\t<COND (<NOT <EQUAL? .RBT ,PEOPLE>>\n\t\t       <RTRUE>)\n\t\t      (T <RFALSE>)>)\n\t       (<NOT <GET .GT ,GOAL-ENABLE>> <RFALSE>)>\n\t %<COND (<GASSIGNED? PREDGEN>\n\t\t '<COND (<NOT <EQUAL? <SET LOC <GETP .HERE ,P?STATION>>\n\t\t\t\t      .HERE>>\n\t\t\t <RETURN <MOVE-RBT .RBT .LOC>>)>)\n\t\t(T\n\t\t '<COND (<NOT <EQUAL? <SET LOC ,<GETP .HERE ,P?STATION>>\n\t\t\t\t      .HERE>>\n\t\t\t <RETURN <MOVE-RBT .RBT .LOC>>)>)>\n\t <COND (<==? <SET GOAL <GET ,TRANSFER-TABLE\n\t\t\t\t    <SET IGOAL <GET .GT ,GOAL-I>>>> 0>\n\t\t<SET IGOAL <>>\n\t\t<SET GOAL <GET .GT ,GOAL-S>>)>\n\t <COND (<NOT .GOAL> <RFALSE>)\n\t       (<==? .HERE .GOAL>\n\t\t<COND (.IGOAL\n\t\t       <COND (<NOT <SET FLG\n\t\t\t           <MOVE-RBT .RBT\n\t\t\t\t             <GET ,TRANSFER-TABLE\n\t\t\t\t\t\t  <+ .IGOAL 1>>>>>\n\t\t\t      <SET-GOAL .RBT <GET .GT ,GOAL-F>>)>\n\t\t       <RETURN .FLG>)\n\t\t      (<NOT <==? .HERE <GET .GT ,GOAL-F>>>\n\t\t       <MOVE-RBT .RBT <GET .GT ,GOAL-F>>\n\t\t       <RETURN <ARRIVAL .RBT>>)\n\t\t      (T\n\t\t       <RETURN <ARRIVAL .RBT>>)>)>\n\t <SET LINE <GET-LINE <GETP .GOAL ,P?LINE>>>\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .LINE .CNT>> .HERE>\n\t\t        <COND (.GOAL-FLAG\n\t\t\t       <SET LOC <GET .LINE <- .CNT 3>>>)\n\t\t\t      (T\n\t\t\t       <SET LOC <GET .LINE <+ .CNT 3>>>)>\n\t\t\t<RETURN <MOVE-RBT .RBT .LOC>>)\n\t\t       (<==? .RM .GOAL>\n\t\t\t<SET GOAL-FLAG T>)>\n\t\t <SET CNT <+ .CNT 3>>>>"
  },
  "STUCK": {
   "name": "STUCK",
   "file": "goal.zil",
   "line": 259,
   "endLine": 278,
   "source": "<ROUTINE STUCK (RBT WHERE \"AUX\" GT TEMP OFFSET)\n\t <SET OFFSET <GETP .RBT ,P?ROBOT>>\n\t <SET GT <GET ,GOAL-TABLES .OFFSET>>\n\t <SET TEMP ,WINNER>\n\t <CHANGE-WINNER .RBT T>\n\t <COND (<EQUAL? ,WINNER .TEMP>\n\t\t<ROBOT-TELL <GET ,STUCK-QUIPS ,ROFF> <>>)\n\t       (T \n\t\t<TELL <GET ,INTER-TBL ,ROFF> \" \" <GET ,STUCK-QUIPS ,ROFF>>)> \n\t <TELL SD <LOC .RBT> \" to \">\n\t <COND (<IRIS?>\n\t\t<TELL \"Angling Corridor\">)\n\t       (T\n\t\t<TELL SD .WHERE>)>\n\t <TELL \". \" <GET ,MORE-STUCKS ,ROFF> CR>\n\t <KILL-GOAL .RBT>\n\t <PUT ,ROBOT-FOLLOW .OFFSET 0>\n\t <PUT ,FOLLOW-TBL ,ROFF 0>\n\t <CHANGE-WINNER .TEMP T>\n\t <RTRUE>>"
  },
  "MOVE-RBT": {
   "name": "MOVE-RBT",
   "file": "goal.zil",
   "line": 280,
   "endLine": 296,
   "source": "<ROUTINE MOVE-RBT (RBT WHERE \"AUX\" (L <LOC .RBT>) (COUNT 0) FLOC FROB)\n\t #DECL ((RBT WHERE) OBJECT)\n\t <COND (<MOVE-RBT? .RBT .L .WHERE>\n\t\t<RTRUE> ;\"Prints something\")>\n\t <REPEAT ()\n\t\t <SET COUNT <+ .COUNT 1>>\n\t\t <COND (<EQUAL? .COUNT 7>\n\t\t\t<RETURN>)>\n\t\t <COND (<EQUAL? <GET ,FOLLOW-TBL .COUNT> .RBT>\n\t\t\t<SET FROB <GET ,NAME-TBL <- .COUNT 1>>>\n\t\t\t<SET FLOC <LOC .FROB>>\n\t\t\t<COND (<AND <EQUAL? .FROB ,IRIS>\n\t\t\t\t    <EQUAL? ,CORRIDOR-1 .WHERE>>\n\t\t\t       <STUCK ,IRIS ,CPU-ROOM>)\n\t\t\t      (T\n\t\t\t       <MOVE-RBT? .FROB .FLOC .WHERE>)>)>>\n\t <RFALSE>>"
  },
  "MOVE-RBT?": {
   "name": "MOVE-RBT?",
   "file": "goal.zil",
   "line": 298,
   "endLine": 331,
   "source": "<ROUTINE MOVE-RBT? (RBT L WHERE)\n\t <COND (<AND <EQUAL? .L ,HUMAN-ENTRY ,HALLWAY-JUNCTION>\n\t\t     <EQUAL? .WHERE ,HUMAN-ENTRY ,HALLWAY-JUNCTION>\n\t\t     <NOT <EQUAL? ,WEDGE-PLACED 2>>\n\t\t     ;<NOT <EQUAL? <LOC ,WEDGE> ,HUMAN-ENTRY ,HALLWAY-JUNCTION>>\n\t\t     <NOT <EQUAL? .RBT ,PEOPLE>>>\n\t\t<STUCK .RBT .WHERE>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .L ,CORRIDOR-4>\n\t\t     <EQUAL? .WHERE ACIDMIST>\n\t\t     <NOT ,ACID-FIXED>\n\t\t     <NOT <EQUAL? ,PEOPLE .RBT>>>\n\t\t<COND (<EQUAL? <GET ,DEADBOTS <GETP .RBT ,P?ROBOT>> 0>\n\t\t       <PUT ,DEADBOTS <GETP .RBT ,P?ROBOT> 1>\n\t\t       <DO-THE-MOVE .RBT .L .WHERE>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <DO-THE-MOVE .RBT .L .WHERE>\n\t\t       <RFALSE>)>)\n\t       (<AND <EQUAL? .L ,HALL-END ,CAR-AREA>\n\t\t     <EQUAL? .WHERE ,HALL-END ,CAR-AREA>>\n\t\t<STUCK .RBT .WHERE>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .RBT ,IRIS>\n\t\t     <EQUAL? .L ,CPU-ROOM ,CORRIDOR-1>\n\t\t     <EQUAL? .WHERE ,CORRIDOR-1 ,CORRIDOR-2>>\n\t\t<MOVE ,IRIS ,CPU-ROOM>\n\t\t<SET .WHERE ,CORRIDOR-1>\n\t\t<SET .L ,CPU-ROOM>\n\t\t<STUCK .RBT .WHERE>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<DO-THE-MOVE .RBT .L .WHERE>\n\t\t<RFALSE>)>>"
  },
  "DO-THE-MOVE": {
   "name": "DO-THE-MOVE",
   "file": "goal.zil",
   "line": 333,
   "endLine": 345,
   "source": "<ROUTINE DO-THE-MOVE (RBT L WHERE \"AUX\" DRAGEE)\n\t <MOVE .RBT .WHERE>\n\t <COND (<==? .RBT ,WINNER>\n\t\t<SETG WINNER-HERE .WHERE>)>\n\t <PUT ,LAST-ROOM <GETP .RBT ,P?ROBOT> .L>\n\t <COND (<NOT <EQUAL? .RBT ,PEOPLE>>\n\t\t<COND (<NOT <EQUAL? \n\t\t\t     <SET DRAGEE \n\t\t\t\t  <GET ,DRAG-TBL \n\t\t\t\t       <GETP .RBT ,P?ROBOT>>> 0>>\n\t\t       <MOVE .DRAGEE .WHERE>\n\t\t       <PUT ,LAST-ROOM <GETP .DRAGEE ,P?ROBOT> .L>)>)>\n\t <RFALSE>>"
  },
  "COR-DIR": {
   "name": "COR-DIR",
   "file": "goal.zil",
   "line": 347,
   "endLine": 357,
   "source": "<ROUTINE COR-DIR (HERE THERE \"AUX\" COR RM (PAST 0) (CNT 2))\n\t <SET COR <GET-COR <BAND <GETP .THERE ,P?CORRIDOR>\n\t\t\t\t <GETP .HERE ,P?CORRIDOR>>>>\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .COR .CNT>> .HERE>\n\t\t\t<SET PAST 1>\n\t\t\t<RETURN>)\n\t\t       (<==? .RM .THERE>\n\t\t\t<RETURN>)>\n\t\t <SET CNT <+ .CNT 1>>>\n\t <GET .COR .PAST>>"
  },
  "GET-LINE": {
   "name": "GET-LINE",
   "file": "goal.zil",
   "line": 359,
   "endLine": 365,
   "source": "<ROUTINE GET-LINE (LN)\n\t <COND (<==? .LN 0> ,A-LINE)\n\t       (<==? .LN 1> ,B-LINE)\n\t       (<==? .LN 2> ,C-LINE)\n\t       (<==? .LN 3> ,D-LINE)\n\t       (<==? .LN 4> ,E-LINE)\n\t       (T ,F-LINE)>>"
  },
  "GET-COR": {
   "name": "GET-COR",
   "file": "goal.zil",
   "line": 367,
   "endLine": 377,
   "source": "<ROUTINE GET-COR (NUM)\n\t #DECL ((NUM) FIX)\n\t <COND (<==? .NUM 1> ,COR-1)\n\t       (<==? .NUM 2> ,COR-2)\n\t       (<==? .NUM 4> ,COR-4)\n\t       (<==? .NUM 8> ,COR-8)\n\t       (<==? .NUM 16> ,COR-16)\n\t       (<==? .NUM 32> ,COR-32)\n\t       (<==? .NUM 64> ,COR-64)\n\t       (<==? .NUM 128> ,COR-128)\n\t       (T ,COR-256)>>"
  },
  "DIR-PRINT": {
   "name": "DIR-PRINT",
   "file": "goal.zil",
   "line": 379,
   "endLine": 387,
   "source": "<ROUTINE DIR-PRINT (DIR \"AUX\" (CNT 0))\n\t #DECL ((DIR CNT) FIX)\n\t <REPEAT ()\n\t\t <COND (<==? <GET ,DIR-STRINGS .CNT> .DIR>\n\t\t\t<COND (<NOT <EQUAL? .DIR ,P?UP ,P?DOWN>>\n\t\t\t       <TELL \"the \">)>\n\t\t\t<PRINT <GET ,DIR-STRINGS <+ .CNT 1>>>\n\t\t\t<RTRUE>)>\n\t\t <SET CNT <+ .CNT 1>>>>"
  },
  "GOAL?": {
   "name": "GOAL?",
   "file": "goal.zil",
   "line": 420,
   "endLine": 421,
   "source": "<ROUTINE GOAL? (RBT)\n\t <GET <GET ,GOAL-TABLES <GETP .RBT ,P?ROBOT>> ,GOAL-F>>"
  },
  "I-FOLLOW": {
   "name": "I-FOLLOW",
   "file": "goal.zil",
   "line": 423,
   "endLine": 432,
   "source": "<ROUTINE I-FOLLOW (\"AUX\" (FLG <>) (CNT 0) GT)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> ,CHARACTER-MAX>\n\t\t\t<RETURN>)\n\t\t       (<AND <GET <SET GT <GET ,GOAL-TABLES .CNT>> ,GOAL-S>\n\t\t\t     <GET .GT ,GOAL-ENABLE>>\n\t\t\t<PUT .GT ,GOAL-ENABLE T>\n\t\t\t<COND (<FOLLOW-GOAL <GET ,CHARACTER-TBL .CNT>>\n\t\t\t       <SET FLG T>)>)>>\n\t .FLG>"
  },
  "ARRIVAL": {
   "name": "ARRIVAL",
   "file": "goal.zil",
   "line": 434,
   "endLine": 439,
   "source": "<ROUTINE ARRIVAL (RBT \"AUX\" GT)\n\t <SET GT <GET ,GOAL-TABLES <GETP .RBT ,P?ROBOT>>>\n\t <PUT .GT ,GOAL-S <>>\n\t <PUT .GT ,GOAL-F <>>\n\t <APPLY <GET .GT ,GOAL-FUNCTION> .RBT ,G-REACHED>\n\t <RTRUE>>"
  },
  "G-ROBOT": {
   "name": "G-ROBOT",
   "file": "goal.zil",
   "line": 449,
   "endLine": 469,
   "source": "<ROUTINE G-ROBOT (RBT GARG \"AUX\" TEMP COUNT CHASED)\n\t <COND (<==? .GARG ,G-REACHED>\n\t\t<SET TEMP ,WINNER>\n\t\t<CHANGE-WINNER .RBT T>\n\t\t<CRLF>\n\t\t<COND (<EQUAL? ,WINNER .TEMP>\n\t\t       <ROBOT-TELL <GET ,ARRIVAL-QUIPS ,ROFF> <>>)\n\t\t      (T \n\t\t       <TELL <GET ,INTER-TBL ,ROFF> \" \" \n\t\t\t     <GET ,ARRIVAL-QUIPS ,ROFF>>)>\n\t\t<KILL-GOAL ,WINNER T>\n\t\t<TELL SD <LOC ,WINNER> \".\">\n\t\t<COND (<NOT <EQUAL? <SET CHASED <GET ,ROBOT-FOLLOW ,ROFF>> 0>>\n\t\t       <COND (<NOT <EQUAL? <LOC .CHASED> <LOC .RBT>>>\n\t\t\t      <TELL \" Looks like I missed \"\n\t\t\t\t    D .CHASED \" though.\" CR>)>)>\n\t\t<PUT ,ROBOT-FOLLOW <GETP .RBT ,P?ROBOT> 0>\n\t\t<APPLY <GETP ,WINNER-HERE ,P?ACTION> ,M-ENTER>\n\t\t<CRLF>\n\t\t<CHANGE-WINNER .TEMP T>\n\t\t<RFATAL>)>>"
  },
  "G-PEOPLE": {
   "name": "G-PEOPLE",
   "file": "goal.zil",
   "line": 487,
   "endLine": 506,
   "source": "<ROUTINE G-PEOPLE (RBT GARG \"AUX\" COUNT)\n\t <COND (<==? .GARG ,G-REACHED>\n\t\t<COND (<EQUAL? ,PR-NUMBER 1>\n\t\t       <PARRIVE1>)\n\t\t      (<EQUAL? ,PR-NUMBER 2>\n\t\t       <PARRIVE2>)\n\t\t      (<EQUAL? ,PR-NUMBER 3>\n\t\t       <PARRIVE3>)\n\t\t      (<EQUAL? ,PR-NUMBER 4>\n\t\t       <PARRIVE4>)\n\t\t      (<EQUAL? ,PR-NUMBER 5>\n\t\t       <PARRIVE5>)\n\t\t      (<EQUAL? ,PR-NUMBER 6>\n\t\t       <PARRIVE6>)\n\t\t      (<EQUAL? ,PR-NUMBER 7>\n\t\t       <PARRIVE7>)\n\t\t      (<EQUAL? ,PR-NUMBER 8>\n\t\t       <PARRIVE8>)\n\t\t      (<EQUAL? ,PR-NUMBER 9>\n\t\t       <PARRIVE9>)>)>>"
  },
  "CORRIDOR-LOOK": {
   "name": "CORRIDOR-LOOK",
   "file": "goal.zil",
   "line": 510,
   "endLine": 535,
   "source": "<ROUTINE CORRIDOR-LOOK (\"OPTIONAL\" (ITM <>) \"AUX\" C Z COR VAL (FOUND <>))\n\t <COND (<SET C <GETP ,WINNER-HERE ,P?CORRIDOR>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <L? <SET Z <- .C 256>> 0>>\n\t\t\t       <SET COR ,COR-256>)\n\t\t\t      (<NOT <L? <SET Z <- .C 128>> 0>>\n\t\t\t       <SET COR ,COR-128>)\n\t\t\t      (<NOT <L? <SET Z <- .C 64>> 0>>\n\t\t\t       <SET COR ,COR-64>)\n\t\t\t      (<NOT <L? <SET Z <- .C 32>> 0>>\n\t\t\t       <SET COR ,COR-32>)\n\t\t\t      (<NOT <L? <SET Z <- .C 16>> 0>>\n\t\t\t       <SET COR ,COR-16>)\n\t\t\t      (<NOT <L? <SET Z <- .C 8>> 0>>\n\t\t\t       <SET COR ,COR-8>)\n\t\t\t      (<NOT <L? <SET Z <- .C 4>> 0>>\n\t\t\t       <SET COR ,COR-4>)\n\t\t\t      (<NOT <L? <SET Z <- .C 2>> 0>>\n\t\t\t       <SET COR ,COR-2>)\n\t\t\t      (<NOT <L? <SET Z <- .C 1>> 0>>\n\t\t\t       <SET COR ,COR-1>)\n\t\t\t      (T <RETURN>)>\n\t\t\t<SET VAL <CORRIDOR-CHECK .COR .ITM>>\n\t\t\t<COND (<NOT .FOUND> <SET FOUND .VAL>)>\n\t\t\t<SET C .Z>>\n\t\t.FOUND)>>"
  },
  "CORRIDOR-CHECK": {
   "name": "CORRIDOR-CHECK",
   "file": "goal.zil",
   "line": 537,
   "endLine": 568,
   "source": "<ROUTINE CORRIDOR-CHECK (COR ITM \"AUX\" (CNT 2) (PAST 0) (FOUND <>) RM OBJ)\n\t <REPEAT ()\n\t\t <COND (<==? <SET RM <GET .COR .CNT>> 0>\n\t\t\t<RFALSE>)\n\t\t       (<==? .RM ,WINNER-HERE> <SET PAST 1>)\n\t\t       (<SET OBJ <FIRST? .RM>>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND (.ITM\n\t\t\t\t       <COND (<==? .OBJ .ITM>\n\t\t\t\t\t      <SET FOUND <GET .COR .PAST>>\n\t\t\t\t\t      <RETURN>)>)\n\t\t\t\t      (<GETP .OBJ ,P?ROBOT>\n\t\t\t\t       <COND (<EQUAL? <GETP .OBJ ,P?ROBOT> 7>\n\t\t\t\t\t      <TELL \"Some \" D .OBJ \" are \">)\n\t\t\t\t\t     (ELSE\n\t\t\t\t\t      <TELL D .OBJ \" is \">)>\n\t\t\t\t       <COND (<IN-MOTION? .OBJ>\n\t\t\t\t\t      <TELL \"in motion \">)>\n\t\t\t\t       <TELL \"off to \">\n\t\t\t\t       <DIR-PRINT <GET .COR .PAST>>\n\t\t\t\t       <DRAGGING? .OBJ>\n\t\t\t\t       <TELL \".\">\n\t\t\t\t       <COND (<AND <EQUAL? .OBJ ,PEOPLE>\n\t\t\t\t\t\t   ,CHASING-THIEF\n\t\t\t\t\t\t   <EQUAL? ,WINNER ,RTHIEF>>\n\t\t\t\t\t      <TELL\n\" They appear to be in hot pursuit.\">)>\n\t\t\t\t       <CRLF>)>\n\t\t\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t\t\t<COND (<NOT .OBJ> <RETURN>)>>\n\t\t\t<COND (.FOUND <RETURN .FOUND>)>)>\n\t\t <SET CNT <+ .CNT 1>>>>"
  },
  "DRAGGING?": {
   "name": "DRAGGING?",
   "file": "goal.zil",
   "line": 570,
   "endLine": 576,
   "source": "<ROUTINE DRAGGING? (RBT \"AUX\" DRAGEE)\n\t <COND (<EQUAL? .RBT ,PEOPLE>\n\t\t<RFALSE>)\n\t       (<NOT \n\t\t<EQUAL? <SET DRAGEE <GET ,DRAG-TBL <GETP .RBT ,P?ROBOT>>> 0>>\n\t\t<TELL \", dragging \" D .DRAGEE>\n\t\t<RFALSE>)>>"
  },
  "IN-MOTION?": {
   "name": "IN-MOTION?",
   "file": "goal.zil",
   "line": 578,
   "endLine": 584,
   "source": "<ROUTINE IN-MOTION? (RBT \"AUX\" GT)\n\t <SET GT <GET ,GOAL-TABLES <GETP .RBT ,P?ROBOT>>>\n\t <COND (<AND <GET .GT ,GOAL-ENABLE>\n\t\t     <GET .GT ,GOAL-S>\n\t\t     <NOT <==? <LOC .RBT> <GET .GT ,GOAL-F>>>>\n\t\t<RTRUE>)\n\t       (T <RFALSE>)>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 140,
   "endLine": 311,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WORD (VAL 0) (VERB <>)\n\t\t       LEN (DIR <>) (NW 0) (LW 0) NUM SCNT (CNT -1)) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT 0>)>>\n\t<SETG P-ADVERB <>>\n\t<SETG P-OADJ <>>\n\t<SETG P-ADJECTIVE <>>\n\t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <SETG P-CONT <>>\n\t       <COND (<NOT <VERB? $TELL>> <CRLF>)>)\n\t      (<AND <G? ,P-NACTORS 1> <ACTOR-CHANGE>>\n\t       <PUTB ,P-LEXV ,P-LEXWORDS ,P-OPLEN>\n\t       <SET PTR ,P-OPCONT>)\n\t      (T\n\t       <SETG OLD-WINNER ,WINNER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT ,SETUP-MODE> <CRLF>)\n\t\t     (T\n\t\t      <SET VERB ,ACT?WALK>\n\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?WALK>\n\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t      <PUT ,P-VTBL 0 0>\n\t\t      <PUT ,P-ITBL ,P-PREP1 ,PR?TO>\n\t\t      <PUT ,P-ITBL ,P-PREP1N ,W?TO>)>\n\t       <COND (<==? ,WINNER ,TWOBOTS>\n\t\t      <CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t\t      <CRLF>)>\n\t       <COND (<NOT <==? <BAND <GETB 0 1> 16> 0>>\n\t\t      <TELL \"(FC linked to \" D ,WINNER \")\">)>\n\t       <TELL \">\">\n\t       <STATUS-LINE>\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<0? ,P-LEN>\n\t       <TELL \"FC: Communication meaningless.\" CR>\n\t       <RFALSE>)>\n\t<SET LEN ,P-LEN>\n\t<SETG P-DIR <>>\n\t<SETG P-NCN 0>\n\t<SETG P-GETFLAGS 0>\n\t<SETG P-TWOBOTS <>>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WORD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WORD <NUMBER? .PTR>>>\n\t\t       <COND (<EQUAL? .WORD ,W?BOTH ,W?TOGETHER>\n\t\t\t      <SETG P-TWOBOTS T>)\n\t\t\t     (<AND <==? .WORD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?$TELL>>\n\t\t\t      <SET WORD ,W?QUOTE>)\n\t\t\t     (<AND <==? .WORD ,W?THEN>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?$TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WORD ,W?QUOTE>)>\n\t\t       <COND ;(<AND <EQUAL? .WORD ,W?.>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<OR <EQUAL? .WORD ,W?THEN ,W?.>\n\t\t\t\t  <EQUAL? .WORD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WORD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <0? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WORD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <OR <==? .LEN 1>\n\t\t\t\t       <AND <==? .LEN 2> <==? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? <SET NW\n\t\t\t\t\t\t     <GET ,P-LEXV\n\t\t\t\t\t\t\t  <+ .PTR ,P-LEXELEN>>>\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <==? .VERB ,ACT?WALK>\n\t\t\t\t\t    <G? .LEN 2>>\n\t\t\t\t       <AND <EQUAL? .NW ,W?.>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK <>>\n\t\t\t\t\t    <G? .LEN 1>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <==? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <==? .VERB ,ACT?WALK>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WORD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WORD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET NUM\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .NUM 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WORD ,PS?PREPOSITION 0>>\n\t\t\t\t  <AND <OR <EQUAL? .WORD ,W?ALL ,W?ONE ,W?A>\n\t\t\t\t\t   <EQUAL? .WORD ,W?BOTH>\n\t\t\t\t\t   <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t\t\t   <WT? .WORD ,PS?OBJECT>>\n\t\t\t\t       <SET VAL 0>>>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <==? <GET ,P-LEXV\n\t\t\t\t\t\t    <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t       ,W?OF>\n\t\t\t\t\t  ;<NOT <EQUAL? .VERB ,ACT?ACCUSE>>\n\t\t\t\t\t  <0? .VAL>\n\t\t\t\t\t  <NOT\n\t\t\t\t\t   <EQUAL? .WORD ,W?ALL ,W?ONE ,W?A>>\n\t\t\t\t\t  <NOT <EQUAL? .WORD ,W?BOTH>>>)\n\t\t\t\t    (<AND <NOT <0? .VAL>>\n\t\t\t\t          <OR <0? ,P-LEN>\n\t\t\t\t\t      <EQUAL? <GET ,P-LEXV <+ .PTR 2>>\n\t\t\t\t\t\t      ,W?THEN ,W?.>>>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WORD>)>)\n\t\t\t\t    (<==? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"FC: I found too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WORD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     ;(<OR <EQUAL? .WORD ,W?CAREFULLY ,W?QUIETLY>\n\t\t\t\t  <EQUAL? .WORD ,W?SLOWLY ,W?QUICKLY\n\t\t\t\t\t        ,W?BRIEFLY>>\n\t\t\t      <SETG P-ADVERB .WORD>)\n\t\t\t     (<WT? .WORD ,PS?BUZZ-WORD>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WORD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>\n\t<COND (.DIR \n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <RETURN T>)>\n\t<SETG P-WALK-DIR <>>\n\t<COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t;<COND (<==? <GET ,P-ITBL ,P-VERB> 0> <PUT ,P-ITBL ,P-VERB ,ACT?CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <TAKE-CHECK> <MANY-CHECK>>\n\t       T)>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 329,
   "endLine": 335,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFST ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <==? .TYP .B1>> <SET OFFST <+ .OFFST 1>>)>\n\t\t      <GETB .PTR .OFFST>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 338,
   "endLine": 408,
   "source": "<ROUTINE CLAUSE (PTR VAL WORD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0)) \n\t#DECL ((PTR VAL OFF NUM) FIX (WORD NW) <OR FALSE FIX TABLE>\n\t       (ANDFLG FIRST??) <OR ATOM FALSE>)\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <==? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WORD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<0? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WORD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WORD <NUMBER? .PTR>>>\n\t\t       <COND (<0? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       ;<COND (<AND <==? .WORD ,W?OF>\n\t\t\t\t   <==? <GET ,P-ITBL ,P-VERB> ,ACT?ACCUSE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WORD ,W?WITH>)>\n\t\t       <COND ;(<AND <EQUAL? .WORD ,W?.>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WORD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WORD ,W?ALL ,W?BOTH ,W?ONE>\n\t\t\t      <COND (<==? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WORD ,W?THEN ,W?.>\n\t\t\t\t  <AND <WT? .WORD ,PS?PREPOSITION>\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WORD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WORD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WORD ,PS?OBJECT>\n\t\t\t      <COND (<AND <WT? .WORD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <==? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<OR <WT? .WORD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WORD ,PS?BUZZ-WORD>>)\n\t\t\t     (<WT? .WORD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WORD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 410,
   "endLine": 432,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<==? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 437,
   "endLine": 489,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD) \n   #DECL ((CNT TEMP VERB) FIX (BEG END) <PRIMTYPE VECTOR> (WRD) TABLE)\n   <SETG P-OFLAG <>>\n   <COND\n    (<AND <NOT <0? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t  <NOT <==? .VERB <GET ,P-OTBL ,P-VERB>>>>\n     <RFALSE>)\n    (<==? ,P-NCN 2>\n     <RFALSE>)\n    (<==? <GET ,P-OTBL ,P-NC1> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP1>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t   (T <RFALSE>)>)\n    (<==? <GET ,P-OTBL ,P-NC2> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP2>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t    <SETG P-NCN 2>)\n\t   (T <RFALSE>)>)\n    (,P-ACLAUSE\n     <COND\n      (<NOT <==? ,P-NCN 1>> <SETG P-ACLAUSE <>> <RFALSE>)\n      (T\n       <SET BEG <GET ,P-ITBL ,P-NC1>>\n       <SET END <GET ,P-ITBL ,P-NC1L>>\n       <REPEAT ()\n\t       <COND (<==? .BEG .END>\n\t\t      <COND (.ADJ\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)\n\t\t\t    (T\n\t\t\t     <SETG P-ACLAUSE <>>\n\t\t\t     <RFALSE>)>)\n\t\t     (<AND <NOT .ADJ>\n\t\t\t   <BTST <GETB <SET WRD <GET .BEG 0>> ,P-PSOFF>\n\t\t\t         ,PS?ADJECTIVE>>\n\t\t      <SET ADJ .WRD>)\n\t\t     (<OR <BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t  <==? .WRD ,W?ONE>>\n\t\t      <COND (<NOT <EQUAL? .WRD ,P-ANAM ,W?ONE>> <RFALSE>)\n\t\t\t    (T\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)>)>\n\t       <SET BEG <REST .BEG ,P-WORDLEN>>>)>)>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 491,
   "endLine": 497,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t <SETG P-CCSRC ,P-OTBL>\n\t <CLAUSE-COPY ,P-ACLAUSE <+ ,P-ACLAUSE 1> .ADJ>\n\t <AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>>\n\t      <SETG P-NCN 2>>\n\t <SETG P-ACLAUSE <>>\n\t <RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 502,
   "endLine": 507,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 509,
   "endLine": 516,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"FC: I don't know the word '\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"'.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 518,
   "endLine": 525,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"FC: I can't use the word '\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"' here.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 554,
   "endLine": 621,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP) \n\t#DECL ((DRIVE1 DRIVE2) <OR FALSE <PRIMTYPE VECTOR>>\n\t       (SYN) <PRIMTYPE VECTOR> (LEN NUM VERB PREP) FIX\n\t       (OBJ) <OR FALSE OBJECT>)\n\t<COND (<0? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"FC: I can't find a verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <0? ,P-NCN>\n\t\t\t    <OR <0? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<==? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<==? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <==? .NUM 2> <==? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<==? <GETB .SYN ,P-SPREP2>\n\t\t\t\t   <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL \"FC: I don't understand that sentence.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND>\n\t       <TELL \"FC: I can't answer that question.\" CR>\n\t       <RFALSE>)\n\t      (,SETUP-MODE <RFALSE>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"FC: What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<==? .TMP 0> <TELL \"tell\">)\n\t\t     (<0? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>> "
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "parser.zil",
   "line": 623,
   "endLine": 626,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL\n\"\\\"FC: That command was incomplete.  Why don't you try again?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 628,
   "endLine": 642,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1)) \n\t#DECL ((D1 D2) <OR FALSE <PRIMTYPE VECTOR>>)\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN 0>\n\t<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<==? ,P-NCN 2> <CLAUSE-COPY ,P-NC2 ,P-NC2L>)>\n\t<COND (<NOT <L? ,P-NCN 1>> <CLAUSE-COPY ,P-NC1 ,P-NC1L>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 644,
   "endLine": 645,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> T>>    "
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 647,
   "endLine": 673,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t #DECL ((BEG END) <PRIMTYPE VECTOR> (CP) <OR FALSE ATOM>)\n\t <REPEAT ()\n\t\t<COND (<==? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP <SET NOSP <>>)\n\t\t\t     (T <TELL \" \">)>\n\t\t       <COND (<==? <SET WRD <GET .BEG 0>> ,W?.> <SET NOSP T>)\n\t\t\t     ;(<==? .WRD ,W?MRS> <TELL \"Mrs.\"> <SET PN T>)\n\t\t\t     ;(<==? .WRD ,W?MS> <TELL \"Ms.\"> <SET PN T>)\n\t\t\t     ;(<==? .WRD ,W?MR> <TELL \"Mr.\"> <SET PN T>)\n\t\t\t     ;(<OR <EQUAL? .WRD YOUR-WORDS>\n\t\t\t\t   <EQUAL? .WRD ETC>>\n\t\t\t      <CAPITALIZE .BEG>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (,P-OFLAG <PRINTB .WRD>)\n\t\t\t\t    (<AND <==? .WRD ,W?IT>\n\t\t\t\t\t  <==? ,P-IT-LOC ,WINNER-HERE>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CAPITALIZE": {
   "name": "CAPITALIZE",
   "file": "parser.zil",
   "line": 675,
   "endLine": 677,
   "source": "<ROUTINE CAPITALIZE (PTR)\n\t <PRINTC <- <GETB ,P-INBUF <GETB .PTR 3>> 32>>\n\t <WORD-PRINT <- <GETB .PTR 2> 1> <+ <GETB .PTR 3> 1>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 679,
   "endLine": 685,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD) \n\t#DECL ((PREP) FIX)\n\t<COND (<NOT <0? .PREP>>\n\t       <TELL \" \">\n\t       <SET WRD <PREP-FIND .PREP>>\n\t       <COND ;(<==? .WRD ,W?AGAINST> <TELL \"against\">)\n\t\t     (T <PRINTB .WRD>)>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 687,
   "endLine": 708,
   "source": "<ROUTINE CLAUSE-COPY (BPTR EPTR \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END) \n\t#DECL ((BPTR EPTR) FIX (BEG END) <PRIMTYPE VECTOR>\n\t       (INSRT) <OR FALSE TABLE>)\n\t<SET BEG <GET ,P-CCSRC .BPTR>>\n\t<SET END <GET ,P-CCSRC .EPTR>>\n\t<PUT ,P-OTBL\n\t     .BPTR\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<==? .BEG .END>\n\t\t       <PUT ,P-OTBL\n\t\t\t    .EPTR\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <==? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>  "
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 710,
   "endLine": 715,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR) \n\t#DECL ((WRD) TABLE (PTR) FIX)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 717,
   "endLine": 723,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE) \n\t#DECL ((PREP CNT SIZE) FIX)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<==? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 725,
   "endLine": 728,
   "source": "<ROUTINE SYNTAX-FOUND (SYN) \n\t#DECL ((SYN) <PRIMTYPE VECTOR>)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 732,
   "endLine": 752,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ) \n\t#DECL ((GBIT LBIT) FIX (OBJ) OBJECT)\n\t<COND (<==? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<==? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <COND (<AND <FSET? .OBJ ,VEHBIT>\n\t\t\t\t  <EQUAL? .PREP ,PR?DOWN>>\n\t\t\t     <SET PREP ,PR?ON>)>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <0? .PREP>>\n\t\t\t     <PRINTB <PREP-FIND .PREP>>\n\t\t\t     <TELL \" the \">)>\n\t\t      <TELL D .OBJ \")\" CR>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 754,
   "endLine": 768,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR) \n\t#DECL ((PTR) <OR FIX <PRIMTYPE VECTOR>>)\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <0? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <0? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<==? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 770,
   "endLine": 784,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL) \n\t#DECL ((TBL NTBL) TABLE (LEN BUTLEN MATCHES) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 825,
   "endLine": 881,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WORD NW) \n   #DECL ((TBL) TABLE (PTR EPTR) <PRIMTYPE VECTOR> (ANDFLG) <OR ATOM FALSE>\n\t  (BUT) <OR FALSE TABLE> (WV) <OR FALSE FIX>)\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WORD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<==? .PTR .EPTR> <RETURN <GET-OBJECT <OR .BUT .TBL>>>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND (<EQUAL? .WORD ,W?ALL>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<==? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WORD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WORD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<==? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <0? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WORD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<AND <WT? .WORD ,PS?PREPOSITION>\n\t\t\t      <==? .PTR ,P-CSPTR>>\n\t\t\t <SETG P-CSPTR <REST ,P-CSPTR ,P-WORDLEN>>)\n\t\t\t(<WT? .WORD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WORD ,W?AND ,W?COMMA>)\n\t\t\t(<==? .WORD ,W?OF>\n\t\t\t <COND (<0? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WORD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <ADJ-CHECK>>\n\t\t\t ;\"Used to check for P-ADJ being <> as well\"\n\t\t\t <COND (,P-ADJ\n\t\t\t\t<SETG P-OADJ ,P-ADJ>\n\t\t\t\t<SETG P-OADJECTIVE ,P-ADJECTIVE>)>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WORD>\n\t\t\t <SETG P-ADJECTIVE .WORD>)\n\t\t\t(<WT? .WORD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WORD>\n\t\t\t <SETG P-ONEOBJ .WORD>)>)>\n\t   <COND (<NOT <==? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WORD .NW>)>>>   "
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 907,
   "endLine": 1027,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t    \"OPTIONAL\" (VRB T)\n\t\t    \"AUX\" LEN XBITS TLEN (GCHECK <>) (OLEN 0))\n\t#DECL ((TBL) TABLE (XBITS TLEN LEN) FIX (GWIM) <OR FALSE FIX>\n\t       (VRB GCHECK) <OR ATOM FALSE>)\n\t<COND (,SETUP-MODE <SET GCHECK T>)>\n\t<SET XBITS ,P-SLOCBITS>\n\t<SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t<COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t<COND (<AND <NOT ,P-NAM> ,P-ADJ <WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>>\n\t       <SETG P-NAM ,P-ADJN>\n\t       <COND (,P-OADJ\n\t\t      <SETG P-ADJ ,P-OADJ>\n\t\t      <SETG P-ADJECTIVE ,P-OADJECTIVE>)\n\t\t     (T\n\t\t      <SETG P-ADJECTIVE <>>\n\t\t      <SETG P-ADJ <>>)>)>\n\t<COND (<AND <NOT ,P-NAM>\n\t\t    <NOT ,P-ADJ>\n\t\t    <NOT <==? ,P-GETFLAGS ,P-ALL>>\n\t\t    <0? ,P-GWIMBIT>>\n\t       <COND (.VRB\n\t\t      <TELL \"FC: I think that sentence was missing a noun.\" CR>)>\n\t       <RFALSE>)>\n\t<COND (<OR <NOT <==? ,P-GETFLAGS ,P-ALL>> <0? ,P-SLOCBITS>>\n\t       <SETG P-SLOCBITS -1>)\n\t      (<AND <==? ,P-GETFLAGS ,P-ALL> ,P-NAM <VERB? TAKE>>\n\t       <SETG P-SLOCBITS -1>)>\n\t<SETG P-TABLE .TBL>\n\t<PROG ()\n\t      <COND (<AND <BTST ,P-GETFLAGS ,P-ALL>\n\t\t\t  <EQUAL? ,P-NAM ,W?ROBOTS>>\n\t\t     <SET GCHECK T>)>\n\t      <COND (.GCHECK\n\t\t     <GLOBAL-CHECK .TBL>)\n\t\t    (T\n\t\t     <COND (,LIT <DO-SL ,WINNER-HERE ,SOG ,SIR>)>\n\t\t     <DO-SL ,WINNER ,SH ,SC>)>\n\t      <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t      <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t    (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t  <NOT <0? .LEN>>>\n\t\t     <COND (<NOT <==? .LEN 1>>\n\t\t\t    <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t    <TELL \"(How about the \">\n\t\t\t    <PRINTD <GET .TBL 1>>\n\t\t\t    <TELL \"?)\" CR>)>\n\t\t     <PUT .TBL ,P-MATCHLEN 1>)\n\t\t    (<OR <G? .LEN 1>\n\t\t\t <AND <0? .LEN> <NOT <==? ,P-SLOCBITS -1>>>>\n\t\t     <COND (<==? ,P-SLOCBITS -1>\n\t\t\t    <SETG P-SLOCBITS .XBITS>\n\t\t\t    <SET OLEN .LEN>\n\t\t\t    <PUT .TBL\n\t\t\t\t ,P-MATCHLEN\n\t\t\t\t <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t    <AGAIN>)\n\t\t\t   (T\n\t\t\t    <COND (<0? .LEN> <SET LEN .OLEN>)>\n\t\t\t    <COND (<AND .VRB ,P-NAM>\n\t\t\t\t   <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t   <SETG P-ACLAUSE\n\t\t\t\t\t <COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t       (T ,P-NC2)>>\n\t\t\t\t   <SETG P-AADJ ,P-ADJ>\n\t\t\t\t   <SETG P-ANAM ,P-NAM>\n\t\t\t\t   <ORPHAN <> <>>\n\t\t\t\t   <SETG P-OFLAG T>)\n\t\t\t\t  (.VRB\n\t\t\t\t   <TELL \"FC: You must supply a noun!\" CR>)>\n\t\t\t    <SETG P-NAM <>>\n\t\t\t    <SETG P-ADJ <>>\n\t\t\t    <RFALSE>)>)\n\t\t    (<AND <0? .LEN> .GCHECK>\n\t\t     <COND (.VRB\n\t\t\t    <COND (<AND <VERB? QUERY> <WHIZ?> ,PLUGGED-IN> T)\n\t\t\t\t  (,LIT\n\t\t\t\t   <ROBOT-TELL <GET ,DETECT-TBL ,ROFF> <>>\n\t\t\t\t   ;<SETG TEMPROFF ,ROFF>\n\t\t\t\t   ;<COND (<EQUAL? ,ROFF 0>\n\t\t\t\t\t  <SETG ROFF 6>)>\n\t\t\t\t   <COND (,P-OFLAG\n\t\t\t\t\t  <COND (<AND ,P-ADJ ,P-NAM>\n\t\t\t\t\t\t <TELL \" any such\">)>\n\t\t\t\t\t  <COND (,P-NAM\n\t\t\t\t\t\t <COND (<OR <EQUAL? ,P-NAM\n\t\t\t\t\t\t\t\t    ,W?IRIS\n\t\t\t\t\t\t\t\t    ,W?AUDA\n\t\t\t\t\t\t\t\t    ,W?WALDO>\n\t\t\t\t\t\t\t    <EQUAL? ,P-NAM\n\t\t\t\t\t\t\t\t    ,W?WHIZ\n\t\t\t\t\t\t\t\t    ,W?SENSA\n\t\t\t\t\t\t\t\t    ,W?POET>>\n\t\t\t\t\t\t\t<TELL \" robot \">)>;MIKE\n\t\t\t\t\t\t <PRINTB ,P-NAM>)>)\n\t\t\t\t\t (T\n\t\t\t\t\t  <COND (<OR <EQUAL? ,P-NAM\n\t\t\t\t\t\t\t     ,W?IRIS\n\t\t\t\t\t\t\t     ,W?AUDA\n\t\t\t\t\t\t\t     ,W?WALDO>\n\t\t\t\t\t\t     <EQUAL? ,P-NAM\n\t\t\t\t\t\t\t     ,W?WHIZ\n\t\t\t\t\t\t\t     ,W?SENSA\n\t\t\t\t\t\t\t     ,W?POET>>\n\t\t\t\t\t\t <TELL \" \">)\n\t\t\t\t\t\t(T <TELL \" any\">)>\n\t\t\t\t\t  <BUFFER-PRINT ,P-CSPTR\n\t\t\t\t\t\t\t,P-CEPTR\n\t\t\t\t\t\t\t<>>)>\n\t\t\t\t   <TELL \" here.\" CR>\n\t\t\t\t   ;<SETG ROFF .TEMPROFF>)\n\t\t\t\t  (T\n\t\t\t\t   <TELL \"It's too dark to see.\" CR>)>)>\n\t\t     <SETG P-NAM <>>\n\t\t     <SETG P-ADJ <>>\n\t\t     <RFALSE>)\n\t\t    (<0? .LEN> <SET GCHECK T> <AGAIN>)>\n\t      <SETG P-ADJ <>>\n\t      <SETG P-NAM <>>\n\t      <SETG P-SLOCBITS .XBITS>\n\t      <RTRUE>>>   "
  },
  "MOBY-FIND": {
   "name": "MOBY-FIND",
   "file": "parser.zil",
   "line": 1128,
   "endLine": 1136,
   "source": "<ROUTINE MOBY-FIND (TBL \"AUX\" FOO)\n\t <SET FOO <FIRST? ,ROOMS>>\n\t <REPEAT ()\n\t\t <COND (<NOT .FOO> <RETURN>)\n\t\t       (T\n\t\t\t<SEARCH-LIST .FOO .TBL ,P-SRCALL>\n\t\t\t<SET FOO <NEXT? .FOO>>)>>\n\t <COND (<0? <GET .TBL ,P-MATCHLEN>>\n\t\t<DO-SL ,LOCAL-GLOBALS 1 1>)>>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 1029,
   "endLine": 1052,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN TEMPROFF)\n\t <SET RLEN .LEN>\n\t <TELL \"FC: Which \">\n         <PRINTB ,P-NAM>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \">\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<TELL SD .OBJ>)\n\t\t       (T\n\t\t\t;<SET TEMPROFF ,ROFF> \n\t\t\t;<COND (<EQUAL? ,ROFF 0>\n\t\t\t       <SETG ROFF 6>)>\n\t\t\t<TELL D .OBJ>\n\t\t\t;<SETG ROFF .TEMPROFF>)>\n\t\t <COND (<==? .LEN 2>\n\t\t        <COND (<NOT <==? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 1055,
   "endLine": 1115,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO) \n\t#DECL ((TBL) TABLE (RMG) <OR FALSE TABLE> (RMGL CNT) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,WINNER-HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,WINNER-HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<==? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<==? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<0? <GET .TBL ,P-MATCHLEN>>\n\t\t      <COND (<AND <WHIZ?> <VERB? QUERY> ,PLUGGED-IN>\n\t\t\t     <TELL\n\"CLC: Hmm. That's a tough one. Hold on a minute while I try to locate a reference ...\" CR>\n\t\t\t     <CRLF>\n\t\t\t     ;<SET FOO <CLOCKER>>\n\t\t\t     ;<SETG MOVES <+ ,MOVES 1>>\n\t\t\t     <MOBY-FIND .TBL>\n\t\t\t     ;<COND (.FOO\n\t\t\t\t    <CRLF>)>\n\t\t\t     <TELL \"CLC: \">\n\t\t\t     <COND (<AND <G? <SET FOO <GET .TBL ,P-MATCHLEN>>\n\t\t\t\t\t     1>\n\t\t\t\t\t <OR <EQUAL? ,P-NAM ,W?WALKWA\n\t\t\t\t\t\t     ,W?MECHAN ,W?BLT>\n\t\t\t\t\t     <EQUAL? ,P-NAM ,W?GLIDER>\n\t\t\t\t\t     <EQUAL? ,P-NAM ,W?GROOVE\n\t\t\t\t\t\t     ,W?TRACK>>>\n\t\t\t\t    <PUT .TBL ,P-MATCHLEN 1>\n\t\t\t\t    <SET FOO 1>)>\n\t\t\t     <COND (<0? .FOO>\n\t\t\t\t    <TELL <PICK-ONE ,NOT-FOUND> CR>)\n\t\t\t\t   (<G? .FOO 1>\n\t\t\t\t    <PUT .TBL ,P-MATCHLEN 0>\n\t\t\t\t    <TELL\n\"I'm afraid you weren't specific enough. One object at a time, and adjectives can be helpful.\" CR>)\n\t\t\t\t   (T\n\t\t\t\t    <TELL <PICK-ONE ,CROWDED> CR>)>)\n\t\t\t    (<VERB? WALK-TO MOVE-ROBOT-TO-LOC EXAMINE FOLLOW\n\t\t\t\t    >\n\t\t\t     <DO-SL ,ROOMS 1 1>)>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1138,
   "endLine": 1147,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2) \n\t#DECL ((OBJ) OBJECT (BIT1 BIT2) FIX)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1155,
   "endLine": 1189,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ) \n\t#DECL ((OBJ NOBJ) <OR FALSE OBJECT> (TBL) TABLE (LVL) FIX (FLS) ANY)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <==? ,P-GETFLAGS ,P-ALL>\n\t\t\t\t   <==? .OBJ ,PANEL>\n\t\t\t\t   <VERB? DROP>>\n\t\t\t      T)\n\t\t\t     (<AND <NOT <==? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <VERB? QUERY>\n\t\t\t\t       <NOT <FSET? .OBJ ,INVISIBLE>>>\n\t\t\t\t   <OR <NOT <==? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <NOT <EQUAL? .OBJ ,WINNER>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <COND (<AND <==? .LVL ,P-SRCTOP>\n\t\t\t\t\t  <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t  <==? ,P-GETFLAGS ,P-ALL>>\n\t\t\t\t     T)\n\t\t\t\t    (T\n\t\t\t\t     <SET FLS\n\t\t\t\t        <SEARCH-LIST .OBJ\n\t\t\t\t\t\t     .TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1191,
   "endLine": 1209,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR) \n\t<COND (<AND <SET PTR <GETP .OBJ ,P?OBJDESCS>>\n\t\t    <==? <GET .PTR ,ROFF> 0>\n\t\t    <NOT <IN? .OBJ ,WINNER>>>\n\t       <RTRUE>)\n\t      (<AND <==? ,P-GETFLAGS ,P-ALL>\n\t\t    <NOT <EQUAL? ,P-NAM ,W?ROBOTS>>\n\t\t    <GETP .OBJ ,P?ROBOT>>\n\t       <RTRUE>)\n\t      (<AND <==? ,WINNER ,IRIS>\n\t\t    <NOT ,IRIS-FIXED>\n\t\t    <NOT <GETP .OBJ ,P?ROBOT>>\n\t\t    <NOT <EQUAL? .OBJ ,LOCATION>>\n\t\t    <NOT <IN? .OBJ ,ROOMS>>>\n\t       <RTRUE>)\n\t      (T\n\t       <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t       <PUT .TBL <+ .PTR 1> .OBJ>\n\t       <PUT .TBL ,P-MATCHLEN <+ .PTR 1>>)>> "
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1211,
   "endLine": 1213,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1215,
   "endLine": 1250,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN TEMPROFF) \n\t #DECL ((TBL) TABLE (IBITS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .IBITS ,SHAVE>\n\t\t\t <BTST .IBITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<==? .OBJ ,IT> <SET OBJ ,P-IT-OBJECT>)>\n\t\t\t       <COND (<NOT <HELD? .OBJ>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t\t\t  <==? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN <BTST .IBITS ,SHAVE>>\n\t\t\t\t\t     <ROBOT-TELL \"I don't have \" <>>\n\t\t\t\t\t     <COND (<NOT\n\t\t\t\t\t\t     <GETP .OBJ ,P?ROBOT>>\n\t\t\t\t\t\t    <TELL \"the \">)>\n\t\t\t\t\t     ;<SET TEMPROFF ,ROFF>\n\t\t\t\t\t     ;<COND (<EQUAL? ,ROFF 0>\n\t\t\t\t\t\t    <SETG ROFF 6>)>\n\t\t\t\t\t     <TELL D .OBJ>\n\t\t\t\t\t     ;<SETG ROFF .TEMPROFF>\n\t\t\t\t\t     <TELL \".\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<NOT .TAKEN>\n\t\t\t\t\t     <ROBOT-TELL \n\"I have taken the liberty of taking the \" <>>\n\t\t\t\t\t     <TELL D .OBJ \" first.\" CR>)>)>)>>)\n\t       (T)>>  "
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1260,
   "endLine": 1280,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP) \n\t#DECL ((LOSS) <OR FALSE FIX>)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"FC: I can't use multiple \">\n\t       <COND (<==? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with '\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<EQUAL? .TMP 0> <TELL \"tell\">)\n\t\t     (,P-OFLAG\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"'.\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1282,
   "endLine": 1288,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1)) \n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GET .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>    "
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1290,
   "endLine": 1294,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0)) \n\t#DECL ((ITM) ANY (TBL) TABLE (SIZE CNT) FIX)\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GETB .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>  "
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1298,
   "endLine": 1313,
   "source": "<ROUTINE LIT? (RM \"AUX\" OHERE (LIT <>)) \n\t#DECL ((RM OHERE) OBJECT (LIT) <OR ATOM FALSE>)\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,WINNER-HERE>\n\t<SETG WINNER-HERE .RM>\n\t<COND (<OR <FSET? .RM ,ONBIT> ,ALWAYS-LIT> <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<==? .OHERE .RM> <DO-SL ,WINNER 1 1>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG WINNER-HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT> "
  },
  "PRSO-PRINT": {
   "name": "PRSO-PRINT",
   "file": "parser.zil",
   "line": 1315,
   "endLine": 1319,
   "source": "<ROUTINE PRSO-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC1>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC1L> <>>)>>"
  },
  "PRSI-PRINT": {
   "name": "PRSI-PRINT",
   "file": "parser.zil",
   "line": 1321,
   "endLine": 1325,
   "source": "<ROUTINE PRSI-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC2>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "NDESC": {
   "name": "NDESC",
   "file": "macros.zil",
   "line": 76,
   "endLine": 83,
   "source": "<ROUTINE NDESC (OBJ \"AUX\" S TEMPROFF)\n\t <SET TEMPROFF ,ROFF>\n\t <COND (<EQUAL? ,ROFF 0>\n\t\t<SETG ROFF 6>)>\n\t <COND (<SET S <GET <GETP .OBJ ,P?OBJDESCS> <+ ,ROFF ,SDOFF>>>\n\t\t<PRINT .S>)\n\t       (T <PRINTD .OBJ>)>\n\t <SETG ROFF .TEMPROFF>>"
  },
  "VPRINT": {
   "name": "VPRINT",
   "file": "macros.zil",
   "line": 85,
   "endLine": 91,
   "source": "<ROUTINE VPRINT (\"AUX\" TMP)\n\t <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t <COND (<==? .TMP 0> <TELL \"tell\">)\n\t       (<0? <GETB ,P-VTBL 2>>\n\t\t<PRINTB <GET .TMP 0>>)\n\t       (T\n\t\t<WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>>"
  },
  "ZPROB": {
   "name": "ZPROB",
   "file": "macros.zil",
   "line": 93,
   "endLine": 94,
   "source": "<ROUTINE ZPROB (BASE)\n\t <G? .BASE <RANDOM 100>>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "macros.zil",
   "line": 96,
   "endLine": 97,
   "source": "<ROUTINE PICK-ONE (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "GO": {
   "name": "GO",
   "file": "main.zil",
   "line": 34,
   "endLine": 67,
   "source": "<ROUTINE GO () \n\t <PUTB ,P-LEXV 0 59>\n;\"put interrupts on clock chain\"\n\t \n;\"set up and go\"\n\t \n\t <INIT-STATUS-LINE>\n\t <SETG HERE ,IRIS>\n\t <SETG LIT T>\n\t <SETG REDSET ,REDCABLE>\n         <SETG ORANGESET ,ORANGECABLE>\n\t <ENABLE <QUEUE I-TREMOR1 ,ACID-KILLS>>\n\t <ENABLE <QUEUE I-TREMOR2 ,RTD-KILLS>>;\"Includes resetting food levers\"\n\t <ENABLE <QUEUE I-PEOPLE1 ,PEOPLE-APPEAR>>\n\t <ENABLE <QUEUE I-AUDA-HINTS ,PEOPLE-APPEAR>>\n\t <ENABLE <QUEUE I-FOLLOW -1>>\n\t <ENABLE <QUEUE I-WEATHER 4>>\n\t <ENABLE <QUEUE I-DECAY 5>>\n\t <ENABLE <QUEUE I-FOOD -1>>\n\t <ENABLE <QUEUE I-WIRE-MESSAGE -1>>\n\t <ENABLE <QUEUE I-ROBOTKILLER -1>>\n         <ENABLE <QUEUE I-SCORE -1>>\n\t <ENABLE <QUEUE I-IRIS-HINTS -1>>\n\t <SETG P-IT-OBJECT <>>\n\t <SETG WINNER-HERE ,CPU-ROOM>\n\t <COND (<NOT <FSET? ,WINNER-HERE ,TOUCHBIT>>\n\t\t<V-VERSION>\n\t\t<CRLF>)>\n\t <BEGINNING>\n\t <CHANGE-WINNER ,IRIS T>\n\t <V-ALL-REPORT-LOC>\n\t <SET-LAST-ROOM>\t\n\t <MAIN-LOOP>\n\t <AGAIN>>"
  },
  "CHANGE-WINNER": {
   "name": "CHANGE-WINNER",
   "file": "main.zil",
   "line": 69,
   "endLine": 93,
   "source": "<ROUTINE CHANGE-WINNER (OBJ \"OPTIONAL\" (TEMP? <>) \"AUX\" L)\n\t <COND (<AND <==? .OBJ ,WINNER>\n\t\t     <NOT .TEMP?>>\n\t\t<TELL \"FC: Cryolink already established to \" SD ,WINNER \".\" CR>\n\t\t<RTRUE>)>\n\t <COND (<G? <GET ,DEADBOTS <GETP .OBJ ,P?ROBOT>> 29>\n\t\t<DEAD-FCN .OBJ>\n\t\t<RFALSE>)>\n\t <SETG WINNER .OBJ>\n\t <SETG OLD-WINNER <>>\n\t <SETG WINNER-HERE <COND (<IN? <SET L <LOC .OBJ>> ,ROOMS> .L)\n\t\t\t  (T <LOC .L>)>>\n\t <SETG ROFF <GETP ,WINNER ,P?ROBOT>>\n\t <SETG HERE ,WINNER>\n\t <COND (<NOT .TEMP?>\n\t\t<TELL \"FC: Cryolink established to \">\n\t\t<TELL SD ,WINNER \".\" CR>)>\n\t <COND (<IRIS?> <SETG NUM-EXT 2>)\n\t       (<WALDO?> <SETG NUM-EXT 6>\n\t\t<COND (<FSET? ,SURGERY-HAND ,WEARBIT> <SETG NUM-EXT 7>)>)\n\t       (<SENSA?> <SETG NUM-EXT 3>)\n\t       (<AUDA?> <SETG NUM-EXT 1>)\n\t       (<POET?> <SETG NUM-EXT 3>)\n\t       (<WHIZ?> <SETG NUM-EXT 2>)>\n\t <RTRUE>>"
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "main.zil",
   "line": 95,
   "endLine": 210,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP) \n   #DECL ((CNT OCNT ICNT NUM) FIX (V) ANY (OBJ) <OR FALSE OBJECT>\n\t  (OBJ1) OBJECT (TBL) TABLE (PTBL) <OR FALSE ATOM>)\n   <REPEAT ()\n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET NUM\n\t\t <COND (<0? <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<==? ,PRSA ,V?WALK> <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<VERB? $TELL>\n\t\t\t  <TELL\n\"FC: I don't understand with which robot you wish to form a cryolink.\" CR>\n\t\t\t  <SET V <>>)\n\t\t\t (T\n\t\t\t  <TELL <GET ,ROBOT-NAMES ,ROFF> \": \"\n\t\t\t\t<GET ,NOT-CLEAR ,ROFF> \" \">\n\t\t\t  <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t\t\t  <COND (,P-OFLAG\n\t\t\t\t <PRINTB <GET .TMP 0>>)\n\t\t\t\t(T\n\t\t\t\t <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t\t\t  <TELL \"!\" CR>\n\t\t\t  <SET V <>>)>)\n\t\t  (<AND <G? .NUM 1> <==? ,PRSA ,V?$TELL>>\n\t\t   <SETG P-CACTOR 1>\n\t\t   <SETG P-OPLEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t\t   <SETG P-OPCONT ,P-CONT>\n\t\t   <SET CNT 1>\n\t\t   <PUT ,P-ACTORS 0 .NUM>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? .CNT .NUM> <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <PUT ,P-ACTORS\n\t\t\t\t       .CNT\n\t\t\t\t       <COND (<IN? <SET OBJ <GET ,P-PRSO .CNT>>\n\t\t\t\t\t\t   ,GLOBAL-OBJECTS>\n\t\t\t\t\t      <REAL-ROBOT .OBJ>)\n\t\t\t\t\t     (T .OBJ)>>)>\n\t\t\t   <SET CNT <+ .CNT 1>>>\n\t\t   <COND (,P-TWOBOTS\n\t\t\t  <SETG P-NACTORS 1>\n\t\t\t  <COND (<ALL-THERE?>\n\t\t\t\t ;<CLOCKER>\n\t\t\t\t <COND (<OR <NOT <GETP <1 ,P-ACTORS> ,P?ROBOT>>\n\t\t\t\t\t    <NOT\n\t\t\t\t\t     <GETP <2 ,P-ACTORS> ,P?ROBOT>>\n\t\t\t\t\t    <==? <GETP <2 ,P-ACTORS> ,P?ROBOT>\n\t\t\t\t\t\t 7>\n\t\t\t\t\t    <==? <GETP <1 ,P-ACTORS> ,P?ROBOT>\n\t\t\t\t\t\t 7>>\n\t\t\t\t\t<TELL \"FC: That's absurd!\" CR>\n\t\t\t\t\t<CHANGE-WINNER ,OLD-WINNER>\n\t\t\t\t\t<AGAIN>)\n\t\t\t\t       (ELSE\n\t\t\t\t\t<TELL\n\t\t\t\t\t \"FC: Dual-Cryolink established to \">\n\t\t\t\t\t<TELL SD <1 ,P-ACTORS> \" and \"\n\t\t\t\t\t      SD <2 ,P-ACTORS> \".\" CR>\n\t\t\t\t\t<SETG WINNER ,TWOBOTS>\n\t\t\t\t\t<SETG ROFF 0>\n\t\t\t\t\t<SETG WINNER-HERE\n\t\t\t\t\t      <LOC <1 ,P-ACTORS>>>)>)\n\t\t\t\t(T\n\t\t\t\t <TELL\n\t\t\t\t  \"FC: The robots are in different places.\" CR>\n\t\t\t\t <CHANGE-WINNER ,OLD-WINNER>\n\t\t\t\t <AGAIN>)>)\n\t\t\t (T\n\t\t\t  <SETG P-NACTORS .NUM>\n\t\t\t  <SET V <PERFORM ,PRSA <GET ,P-PRSO 1>>>\n\t\t\t  <SETG OLD-WINNER <>>)>)\n\t\t  (T\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM> <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <COND (<G? .NUM 1>\n\t\t\t\t\t <TELL \"(\" D .OBJ1 \") \">)>\n\t\t\t\t  <SETG PRSO <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SETG PRSI <COND (.PTBL .OBJ) (T .OBJ1)>>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <SETG L-PRSA ,PRSA>\n\t    <SETG L-PRSO ,PRSO>\n\t    <SETG L-PRSI ,PRSI>\n\t    <COND (<==? .V ,M-FATAL>\n\t\t   <SETG P-CONT <>>\n\t\t   <SETG P-NACTORS 0>)>)\n\t   (<G? ,P-NACTORS 1> T)\n\t   (T\n\t    <SETG P-NACTORS 0>\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    <COND (<VERB? SAVE RESTORE $TELL VERSION SCORE ADVANCED CONFIGURE IMPOSSIBLE QUIT RESTART SCRIPT UNSCRIPT> T)\n\t\t  (T\n\t\t   <SET V <CLOCKER>>)>)>>>"
  },
  "TICK": {
   "name": "TICK",
   "file": "main.zil",
   "line": 220,
   "endLine": 221,
   "source": "<ROUTINE TICK ()\n\t <CLOCKER>>"
  },
  "ALL-THERE?": {
   "name": "ALL-THERE?",
   "file": "main.zil",
   "line": 223,
   "endLine": 229,
   "source": "<ROUTINE ALL-THERE? (\"AUX\" (CNT 1) MAX RM)\n\t <SET MAX <GET ,P-PRSO ,P-MATCHLEN>>\n\t <SET RM <LOC <GET ,P-PRSO 1>>>\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .MAX> <RTRUE>)\n\t\t       (<NOT <EQUAL? <LOC <GET ,P-PRSO .CNT>> .RM>>\n\t\t\t<RFALSE>)>>>"
  },
  "PERFORM": {
   "name": "PERFORM",
   "file": "main.zil",
   "line": 237,
   "endLine": 275,
   "source": "<ROUTINE PERFORM (A \"OPTIONAL\" (O <>) (I <>) \"AUX\" V OA OO OI) \n\t#DECL ((A) FIX (O) <OR FALSE OBJECT FIX> (I) <OR FALSE OBJECT> (V) ANY)\n\t<SET OA ,PRSA>\n\t<SET OO ,PRSO>\n\t<SET OI ,PRSI>\n\t<COND (<AND <EQUAL? ,IT .I .O>\n\t\t    <NOT <EQUAL? ,P-IT-LOC ,WINNER-HERE>>>\n\t       <TELL \"FC: I don't see what you are referring to.\" CR>\n\t       <RFATAL>)>\n\t<COND (<==? .O ,IT> <SET O ,P-IT-OBJECT>)>\n\t<COND (<==? .I ,IT> <SET I ,P-IT-OBJECT>)>\n\t<SETG PRSA .A>\n\t<SETG PRSO .O>\n\t<COND (<AND ,PRSO <NOT <VERB? WALK>>>\n\t       <SETG P-IT-OBJECT ,PRSO>\n\t       <SETG P-IT-LOC ,WINNER-HERE>)>\n\t<SETG PRSI .I>\n\t<COND (<GAME-COMMAND? .A>\n\t       <SET V <APPLY <GET ,ACTIONS .A>>>)\n\t      (<SET V <APPLY <GETP ,WINNER ,P?ACTION>>> .V)\n\t      (<SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-BEG>> .V)\n\t      (<SET V <APPLY <GET ,PREACTIONS .A>>> .V)\n\t      (<AND .I <SET V <APPLY <GETP .I ,P?ACTION>>>> .V)\n\t      (<AND .O\n\t\t    <NOT <==? .A ,V?WALK>>\n\t\t    <LOC .O>\n\t\t    <SET V <APPLY <GETP <LOC .O> ,P?CONTFCN>>>>\n\t       .V)\n\t      (<AND .O\n\t\t    <NOT <==? .A ,V?WALK>>\n\t\t    <SET V <APPLY <GETP .O ,P?ACTION>>>>\n\t       .V)\n\t      (<SET V <APPLY <GET ,ACTIONS .A>>> .V)>\n\t<COND (<NOT <==? .V ,M-FATAL>>\n\t       <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t<SETG PRSA .OA>\n\t<SETG PRSO .OO>\n\t<SETG PRSI .OI>\n\t.V>  "
  },
  "GAME-COMMAND?": {
   "name": "GAME-COMMAND?",
   "file": "main.zil",
   "line": 277,
   "endLine": 281,
   "source": "<ROUTINE GAME-COMMAND? (ACT)\n\t <COND (<OR <EQUAL? .ACT ,V?SCORE ,V?SAVE ,V?RESTORE>\n\t\t    <EQUAL? .ACT ,V?QUIT ,V?VERSION ,V?$VERIFY>\n\t\t    <EQUAL? .ACT ,V?ADVANCED>>\n\t\t<RTRUE>)>>"
  },
  "BEGINNING": {
   "name": "BEGINNING",
   "file": "main.zil",
   "line": 283,
   "endLine": 290,
   "source": "<ROUTINE BEGINNING ()\n\t <TELL\n\"FC ALERT! Planetside systems are deteriorating. FC imbalance detected. Emergency reviving systems completed. You are now in control of the complex.|\n|\nSENSA INTERRUPT: Seismic aftershock detected ten meters north of Beta FC. Tremor intensity 9.7. Projected damage: connecting cables in Primary and Secondary Channels.|\n|\nFC INTERRUPT: All Robots, report locations.|\n|\">>"
  },
  "SET-LAST-ROOM": {
   "name": "SET-LAST-ROOM",
   "file": "main.zil",
   "line": 292,
   "endLine": 297,
   "source": "<ROUTINE SET-LAST-ROOM (\"AUX\" (COUNT 0))\n\t <REPEAT ()\n\t\t <SET COUNT <+ .COUNT 1>>\n\t\t <COND (<EQUAL? .COUNT 8>\n\t\t\t<RETURN>)>\n\t\t <PUT ,LAST-ROOM .COUNT <LOC <GET ,NAME-TBL <- .COUNT 1>>>>>>"
  },
  "OOPS-FCN": {
   "name": "OOPS-FCN",
   "file": "objects.zil",
   "line": 28,
   "endLine": 37,
   "source": "<ROUTINE OOPS-FCN ()\n\t <COND (<VERB? OPEN>\n\t        <ROBOT-TELL <GET ,OOPS-QUIPS ,ROFF>>\n\t\t<TELL\n\"As the door swings open you are blinded by intense light and incredible\npain. Just before everything overloads and you fade from existence, you can\nmake out a shape outside, holding onto the door of the cylinder, and then\neverything goes dark.\" CR>\n\t\t<CRLF>\n\t\t<QUIT>)>>"
  },
  "PANEL-FCN": {
   "name": "PANEL-FCN",
   "file": "objects.zil",
   "line": 65,
   "endLine": 108,
   "source": "<ROUTINE PANEL-FCN (\"AUX\" STR)\n\t <COND (<VERB? LOOK EXAMINE>\n\t\t<COND (<AND <FSET? ,PANEL ,OPENBIT>\n\t\t\t    <NOT \n\t\t\t    <EQUAL? <SET STR <GET <GETP ,PANEL ,P?OBJDESCS>\n\t\t\t\t\t  <+ ,RTOFF ,ROFF>>> 0>>>\n\t\t       <ROBOT-TELL .STR>\n\t\t       <TELL \"The \" D ,PANEL \" is open.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? OPEN>\n\t\t<COND (<NOT <WALDO?>>\n\t\t       <ROBOT-TELL \"I'm not equipped to do that to the \"<>>\n\t\t       <TELL D ,PANEL \".\" CR>\n\t\t       <RTRUE>)\n\t\t      (<NOT <FSET? ,SURGERY-HAND ,WEARBIT>>\n\t\t       <ROBOT-TELL \n\t\t\t\"It's too delicate for my normal extensions.\">)\n\t\t      (,IRIS-FIXED\n\t\t       <ROBOT-TELL \"Opened.\">\n\t\t       <FSET ,PANEL ,OPENBIT>\n\t\t       <TELL CR <GET ,INTER-TBL 1>\n\t\t\t\t    \" Hey! Who turned the lights out?\" CR>\n\t\t       <SETG IRIS-FIXED <>>)>)\n\t       (<AND <VERB? CLOSE>\n\t\t     <NOT <WALDO?>>>\n\t\t<ROBOT-TELL \"I'm not equipped to do that to the \"<>>\n\t\t<TELL D ,PANEL \".\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? CLOSE>\n\t\t<ROBOT-TELL \"Closed.\">\n\t\t<FCLEAR ,PANEL ,OPENBIT>\n\t\t<COND (<AND <IN? ,NEWCHIP1 ,PANEL>\n\t\t\t    <IN? ,CHIP2 ,PANEL>\n\t\t\t    <IN? ,CHIPS0 ,PANEL>>\n\t\t       <COND (<NOT ,IRIS-FIXED>\n\t\t\t      <SETG IRIS-FIXED T>\n\t\t\t      <TELL CR <GET ,INTER-TBL 1> \n\t\t\t\t    \" You never looked so good.\" CR>)>)\n\t\t      (T\n\t\t       <COND (,IRIS-FIXED\n\t\t\t      <SETG IRIS-FIXED <>>\n\t\t\t      <TELL CR <GET ,INTER-TBL 1> \n\t\t\t\t    \" Where'd everybody go?\" CR>)>)>\n\t\t<RTRUE>)>>"
  },
  "BASKET-FCN": {
   "name": "BASKET-FCN",
   "file": "objects.zil",
   "line": 162,
   "endLine": 165,
   "source": "<ROUTINE BASKET-FCN ()\n\t <COND (<VERB? CLIMB-ON STAND-ON STEP-ON>\n\t\t<ROBOT-TELL \"It won't support my weight.\">\n\t\t<RTRUE>)>>"
  },
  "CHIPFILTER-FCN": {
   "name": "CHIPFILTER-FCN",
   "file": "objects.zil",
   "line": 237,
   "endLine": 262,
   "source": "<ROUTINE CHIPFILTER-FCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <IN? ,PRSO ,PANEL>\n\t\t     <NOT <FSET? ,PANEL ,OPENBIT>>>\n\t\t<CANT-DETECT ,PRSO>\n\t\t<RFATAL>)\n\t       (<VERB? PUT>\n\t\t<COND (<EQUAL? ,PRSI ,SOCKET1 ,SOCKET2>\n\t\t       <COND (<FIRST? ,PRSI>\n\t\t\t      <ROBOT-TELL \"The \" <>>\n\t\t\t      <TELL D ,PRSI \" is already full.\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <MOVE ,PRSO ,PRSI>\n\t\t       <ROBOT-TELL \"Done.\">\n\t\t       <COND (<EQUAL? ,PRSO ,NEWCHIP1 ,NEWCHIP2>\n\t\t\t      <COND (<SENSA?>\n\t\t\t\t     <TELL \"Surges of electricity flow.\" CR>)\n\t\t\t\t    (<POET?>\n\t\t\t\t     <TELL\n\"I can't place the tune, but I recognize the humming.\" CR>)\n\t\t\t\t    (<WHIZ?>\n\t\t\t\t     <TELL \"Device now warming up.\" CR>)>)>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSI ,IRIS>\n\t\t       <PERFORM ,PRSA ,PRSO ,PANEL>\n\t\t       <RTRUE>)>)>>"
  },
  "TOPSHELF-FCN": {
   "name": "TOPSHELF-FCN",
   "file": "objects.zil",
   "line": 303,
   "endLine": 309,
   "source": "<ROUTINE TOPSHELF-FCN (\"AUX\" TBL)\n\t <COND (<AND <VERB? LOOK-INSIDE>\n\t\t     <NOT ,ON-WEDGE>>\n\t\t<ROBOT-TELL \"It's too high up there.\">)\n\t       (<VERB? CLOSE>\n\t\t<ROBOT-YUKS>\n\t\t<RTRUE>)>>"
  },
  "WEDGE2-FCN": {
   "name": "WEDGE2-FCN",
   "file": "objects.zil",
   "line": 346,
   "endLine": 378,
   "source": "<ROUTINE WEDGE2-FCN (\"AUX\" OFFSET)\n\t <SET OFFSET <GETP ,WINNER ,P?ROBOT>>\n\t <COND (<VERB? CLIMB-ON>\n\t\t<COND (<IN? ,WEDGE ,WINNER-HERE>\n\t\t       <COND (<NOT ,ON-WEDGE>\n\t\t\t      <SETG ON-WEDGE .OFFSET>\n\t\t\t      <ROBOT-TELL \"Okay. I'm standing on the \" <>>\n\t\t\t      <TELL D ,WEDGE \" now.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <COND (<EQUAL? .OFFSET ,ON-WEDGE>\n\t\t\t\t     <ROBOT-TELL \"I'm already on it.\">)\n\t\t\t\t    (ELSE\n      <ROBOT-TELL \"Not while another robot is already on it.\">)>\n\t\t\t      <RTRUE>)>)\n\t\t      (ELSE \n\t\t       <COND (<IN? ,WEDGE ,WINNER>\n\t\t\t      <ROBOT-TELL \"Not while I'm grasping it.\">)\n\t\t\t     (ELSE\n\t\t\t      <CANT-DETECT ,WEDGE>\n\t\t\t      <RTRUE>)>)>)\n\t       (<AND <VERB? TAKE>\n\t\t     ,ON-WEDGE>\n\t\t<COND (<EQUAL? .OFFSET ,ON-WEDGE>\n\t\t       <TELL \"(getting off \" D ,WEDGE \")\" CR>\n\t\t       <SETG ON-WEDGE <>>\n\t\t       <RFALSE>)\n\t\t      (ELSE\n\t\t       <ROBOT-TELL \"Not while another robot is on it.\">\n\t\t       <RTRUE>)>)\n\t       (<VERB? TAKE-OFF>\n\t\t<PERFORM ,V?GET-OFF ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "WALDO-ONLY-FCN": {
   "name": "WALDO-ONLY-FCN",
   "file": "objects.zil",
   "line": 425,
   "endLine": 429,
   "source": "<ROUTINE WALDO-ONLY-FCN ()\n\t <COND (<AND <NOT <WALDO?>>\n\t\t     <VERB? WEAR>>\n\t\t<ROBOT-TELL \"I'm not equipped to do that.\">\n\t\t<RTRUE>)>>"
  },
  "CABINET-FCN": {
   "name": "CABINET-FCN",
   "file": "objects.zil",
   "line": 455,
   "endLine": 466,
   "source": "<ROUTINE CABINET-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<ROBOT-TELL \"I don't detect any easy way to do that.\">\n\t\t<RTRUE>)\n\t       (<AND <OR <POET?> <SENSA?>>\n\t\t     <VERB? TOUCH EXAMINE>>\n\t\t<FCLEAR ,FLOWSWITCH ,INVISIBLE>\n\t\t<RFALSE>)\n\t       (<AND <VERB? CLOSE>\n\t\t     <FSET? ,CABINET ,OPENBIT>>\n\t\t<SETG FLOWSWITCH-TURNED <>>\n\t\t<RFALSE>)>>"
  },
  "FLOWSWITCH-FCN": {
   "name": "FLOWSWITCH-FCN",
   "file": "objects.zil",
   "line": 489,
   "endLine": 507,
   "source": "<ROUTINE FLOWSWITCH-FCN ()\n\t <COND (<VERB? TURN>\n\t\t<COND (<NOT <SENSA?>>\n\t\t       <ROBOT-TELL \"I can't seem to make it work.\">)\n\t\t      (T\n\t\t       <COND (,FLOWSWITCH-TURNED\n\t\t\t      <ROBOT-TELL \"It's already been turned.\">)\n\t\t\t     (ELSE\n\t\t\t      <SETG FLOWSWITCH-TURNED T>\n\t\t\t      <FSET ,CABINET ,OPENBIT>\n     <ROBOT-TELL \"The flow of electrons aligns and the panel opens.\">\n                              <FSET ,CABINET ,TOUCHBIT>\n\t\t\t      <TELL <GET <GETP ,DEADBOT ,P?OBJDESCS> ,ROFF> CR>\n\t\t\t      <RTRUE>)>)>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <SENSA?>>\n\t\t<ROBOT-TELL \n\"I feel the vibrations running through this flowswitch. The outer plate and\nthe inner plates must be aligned properly for it to work.\">)>>"
  },
  "DEADBOT-FCN": {
   "name": "DEADBOT-FCN",
   "file": "objects.zil",
   "line": 536,
   "endLine": 550,
   "source": "<ROUTINE DEADBOT-FCN ()\n\t <COND (<VERB? TAKE PUT-ON>\n\t\t<ROBOT-TELL \"I can't manage it. The \" <>>\n\t\t<TELL D ,DEADBOT \" is too heavy.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? MOVE>\n\t\t<ROBOT-TELL \"I tried, but I failed.\">\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<AND <NOT <FSET? ,REDWIRE ,TOUCHBIT>>\n\t\t\t    <IN? ,DEADBOT ,REPAIR3>>\n\t\t       <ROBOT-TELL \"There's a \" <>>\n\t\t       <TELL D ,REDWIRE \" here that might prove useful.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T <RFALSE>)>)>>"
  },
  "REDWIRE-FCN": {
   "name": "REDWIRE-FCN",
   "file": "objects.zil",
   "line": 574,
   "endLine": 591,
   "source": "<ROUTINE REDWIRE-FCN ()\n\t <COND (<AND <VERB? TAKE REMOVE REPLACE>\n\t\t     <NOT <FSET? ,REDWIRE ,CUTBIT>>>\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,REDWIRE \" is firmly attached to the \" D ,DEADBOT\n\t\t      \". I'll need a tool to remove it.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? CUT>\n\t\t     <EQUAL? ,PRSI ,SURGERY-HAND>>\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,REDWIRE \" is too thick and would ruin the \"\n\t\t      D ,SURGERY-HAND \".\" CR>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <IN? ,WINNER ,TUBE2>\n\t\t     <EQUAL? ,PRSI ,GROOVE2>\n\t\t     <NOT <IN? ,REDCABLE ,GROOVE2>>>\n\t\t<SETG REDSET ,REDWIRE>\n\t\t<RFALSE>)>>"
  },
  "CAR-FCN": {
   "name": "CAR-FCN",
   "file": "objects.zil",
   "line": 612,
   "endLine": 645,
   "source": "<ROUTINE CAR-FCN (\"OPTIONAL\" (RARG ,M-OBJECT))\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"Through the \" D ,CAR \" I can detect the following:\" CR>\n\t\t<TELL <GET <GETP <LOC ,CAR> ,P?ROOMDESCS> ,ROFF> CR> <RTRUE>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? TAKE>\n\t\t\t    <IN? ,PRSO ,WINNER-HERE>>\n\t\t       <ROBOT-TELL \"I can't reach it from here.\"> <RTRUE>)\n\t\t      (<AND <VERB? DROP>\n\t\t\t    <IN? ,PRSO ,WINNER>>\n\t\t       <ROBOT-TELL \n\t\t\t\"There's no convenient place to put anything down.\">\n\t\t       <RTRUE>)\n\t\t      (<VERB? THROW>\n\t\t       <COND (<IN? ,PRSO ,WINNER>\n\t\t\t      <ROBOT-TELL \"Thrown.\">\n\t\t\t      <MOVE ,PRSO <LOC ,CAR>>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <CANT-DETECT ,PRSO>\n\t\t\t      <RTRUE>)>)\n\t\t      (<VERB? WALK WALK-TO FOLLOW MOVE-ROBOT-TO-LOC>\n\t\t       <ROBOT-TELL \n\t\t\t\"An unlikely request, considering where I am.\">)>)\n\t       (<EQUAL? .RARG ,M-OBJECT>\n\t\t<COND (<VERB? LOOK-INSIDE>\n\t\t       <COND (<NOT <EQUAL? ,CAR-FULL 0>>\n\t\t\t      <ROBOT-TELL  \"I can detect \" <>>\n\t\t\t      <TELL D ,CAR-FULL>\n\t\t\t      <TELL \" inside the \" D ,CAR \".\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <ROBOT-TELL \n\t\t\t       \"I can detect nothing inside of it.\">)>\n\t\t       <RTRUE>)>)>>"
  },
  "CLONESWITCH-FCN": {
   "name": "CLONESWITCH-FCN",
   "file": "objects.zil",
   "line": 698,
   "endLine": 708,
   "source": "<ROUTINE CLONESWITCH-FCN ()\n\t <COND (<AND <VERB? THROW>\n\t\t     <EQUAL? ,PRSI ,WHEEL ,CLONESWITCH>>\n\t\t<RFALSE>)\n\t       (<VERB? TOUCH TURN THROW PUSH SET MOVE TAKE>\n\t\t<COND (,ON-WEDGE\n\t\t       <ROBOT-TELL \n\"It's still out of my reach. Perhaps a creature of larger proportions would be able to help turn this thing.\">)\n\t\t      (T\n\t\t       <ROBOT-TELL \"It's too far out of reach.\">)>\n\t\t<RTRUE>)>>"
  },
  "TV-FCN": {
   "name": "TV-FCN",
   "file": "objects.zil",
   "line": 757,
   "endLine": 793,
   "source": "<ROUTINE TV-FCN ()\n\t <COND (<VERB? CLIMB-ON STAND-ON STEP-ON>\n\t\t<ROBOT-TELL \"It won't support my weight.\">\n\t\t<RTRUE>)\n\t       (<AND <VERB? PLUGIN>\n\t\t     <NOT <EQUAL? <LOC ,WINNER> ,TUBE1 ,TUBE2>>>\n\t\t<ROBOT-TELL \"The jack doesn't fit anything in this area.\">\n\t\t<RTRUE>)\n\t       (<VERB? PLUGIN>\n\t\t<COND (<AND ,PRSI\n\t\t\t    <NOT <EQUAL? ,PRSI ,TVHOLE>>>\n\t\t       <ROBOT-TELL \"I can't plug it into that.\">\n\t\t       <RTRUE>)\n\t\t      (<NOT <IN? ,TV ,WINNER>>\n\t\t       <ROBOT-TELL \"I can't. I'm not holding it.\">\n\t\t       <RTRUE>)\n\t\t      (,TV-ON\n\t\t       <ROBOT-TELL \"It's already plugged in.\">)\n\t\t      (T\n\t\t       <ROBOT-TELL \"I've plugged it in. \" <>>\n\t\t       <TELL <GET ,TV-QUIPS ,ROFF> CR>\n\t\t       <COND (<AND <NOT <FSET? ,IRIS ,CUTBIT>>\n\t\t\t\t   ,IRIS-FIXED>\n\t\t\t      <CRLF>\n\t\t\t      <TELL <GET ,INTER-TBL 1> \n\t\t\t\t    \" Receiving transmissions.\" CR>)>)>\n\t\t<SETG TV-ON T>)\n\t       (<VERB? OPEN>\n\t\t<ROBOT-TELL \"It's not a jack-in-the-box, you know.\">)\n\t       (<VERB? UNPLUG>\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,TV \" has been unplugged.\" CR>\n\t\t<SETG TV-ON <>>)\n\t       (<AND <VERB? TAKE>\n\t\t     <NOT <FSET? ,TV ,TOUCHBIT>>>\n\t\t<GENERATE-CODES>\n\t\t<RFALSE>)>>"
  },
  "KILL-CABLE-FCN": {
   "name": "KILL-CABLE-FCN",
   "file": "objects.zil",
   "line": 902,
   "endLine": 905,
   "source": "<ROUTINE KILL-CABLE-FCN ()\n\t <COND (<VERB? REPLACE TAKE>\n\t\t<JIGS-UP \"Oh oh. Maybe I shouldn't have done that . . .\" \n\t\t\t ,WINNER>)>>"
  },
  "REDCABLE-FCN": {
   "name": "REDCABLE-FCN",
   "file": "objects.zil",
   "line": 907,
   "endLine": 910,
   "source": "<ROUTINE REDCABLE-FCN ()\n\t <COND (<VERB? TAKE REPLACE>\n\t\t<FCLEAR ,REDCABLE ,NDESCBIT>\n\t\t<RFALSE>)>>"
  },
  "ORANGECABLE-FCN": {
   "name": "ORANGECABLE-FCN",
   "file": "objects.zil",
   "line": 912,
   "endLine": 915,
   "source": "<ROUTINE ORANGECABLE-FCN ()\n\t <COND (<VERB? TAKE REPLACE>\n\t\t<FCLEAR ,ORANGECABLE ,NDESCBIT>\n\t\t<RFALSE>)>>"
  },
  "GROOVE-FCN": {
   "name": "GROOVE-FCN",
   "file": "objects.zil",
   "line": 945,
   "endLine": 950,
   "source": "<ROUTINE GROOVE-FCN ()\n\t <COND (<VERB? LOOK EXAMINE>\n\t\t<ROBOT-TELL \"There are \"<>>\n\t\t<TELL N <CABLECOUNT ,PRSO> \" \" D ,CABLES \" in the grooves. \">\n\t\t<TELL <GET ,CABLE-TBL ,ROFF> CR>\n\t\t<RTRUE>)>>"
  },
  "GROOVE-CONT": {
   "name": "GROOVE-CONT",
   "file": "objects.zil",
   "line": 967,
   "endLine": 992,
   "source": "<ROUTINE GROOVE-CONT ()\n\t <COND (<VERB? REPLACE TAKE>\n\t\t<COND (<OR <EQUAL? ,PRSO ,PINKCABLE ,YELLOWCABLE ,GREENCABLE>\n\t\t\t   <EQUAL? ,PRSO ,WHITECABLE ,BLACKCABLE ,BLUECABLE>>\n\t\t       <TELL \"Sizzzzzzzzzle...\" CR>\n\t\t       <JIGS-UP \n\t\t\t\"Oh oh. Maybe I shouldn't have done that . . .\" \n\t\t\t,WINNER>)\n\t\t      ;(<AND <VERB? REPLACE>\n\t\t\t    <OR <EQUAL? ,PRSI ,REDWIRE ,ORANGE-WIRE ,REDCABLE>\n\t\t\t\t<EQUAL? ,PRSI ,ORANGECABLE>>>\n\t\t       <COND (<EQUAL? ,WINNER-HERE ,TUBE2>\n\t\t\t      <SETG REDSET ,PRSI>)\n\t\t\t     (T\n\t\t\t      <SETG ORANGESET ,PRSI>)>\n\t\t       <RFALSE>)\n\t\t      ;(<AND <VERB? TAKE>\n\t\t\t    <OR <EQUAL? ,PRSO ,REDWIRE ,ORANGE-WIRE ,REDCABLE>\n\t\t\t\t<EQUAL? ,PRSO ,ORANGECABLE>>>\n\t\t       <COND (<EQUAL? ,WINNER-HERE ,TUBE2>\n\t\t\t      <SETG REDSET ,PRSI>)\n\t\t\t     (T\n\t\t\t      <SETG ORANGESET ,PRSI>)>\n\t\t       <RFALSE>)\n\t\t      ;(T\n\t\t       <ROBOT-YUKS>)>)>>"
  },
  "PEOPLE-CABINET-FCN": {
   "name": "PEOPLE-CABINET-FCN",
   "file": "objects.zil",
   "line": 1005,
   "endLine": 1008,
   "source": "<ROUTINE PEOPLE-CABINET-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"FC: Robots are restricted from opening this cabinet.\" CR>\n\t\t<RTRUE>)>>"
  },
  "TOOLBAG-FCN": {
   "name": "TOOLBAG-FCN",
   "file": "objects.zil",
   "line": 1022,
   "endLine": 1030,
   "source": "<ROUTINE TOOLBAG-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (<NOT <IN? ,TOOLBAG ,PEOPLE>>\n\t\t       <RFALSE>)\n\t\t      (T <ROBOT-TELL \"The \" <>>\n\t\t       <TELL D ,PEOPLE \" won't let me take it.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? OPEN>\n\t\t<ROBOT-TELL \"I can't. It requires a human access code.\">)>>"
  },
  "CONVEYERBELT-FCN": {
   "name": "CONVEYERBELT-FCN",
   "file": "objects.zil",
   "line": 1065,
   "endLine": 1086,
   "source": "<ROUTINE CONVEYERBELT-FCN ()\n\t <COND (<EQUAL? ,PRSI ,CONVEYERBELTA ,CONVEYERBELTB ,CONVEYERBELTC>\n\t\t<COND (<VERB? TAKE>\n\t\t       <ROBOT-TELL \"I can't. It's moving too fast.\">\n\t\t       <RFATAL>)\n\t\t      (<VERB? PUT-ON>\n\t\t       <COND (<OR <GETP ,PRSO ,P?ROBOT>\n\t\t\t\t  <EQUAL? ,PRSO ,DEADBOT>>\n\t\t\t      <ROBOT-TELL \"There's no way I can lift \" <>>\n\t\t\t      <COND (<EQUAL? ,PRSO ,DEADBOT>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <TELL D ,PRSO \" that high.\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <SETG BELT-ON T>\n\t\t       <COND (<NOT <GET <INT I-BELT> ,C-ENABLED?>>\n\t\t\t      <ENABLE <QUEUE I-BELT 2>>)>\n\t\t       <COND (<EQUAL? ,PRSI ,CONVEYERBELTA>\n\t\t\t      <FSET ,PRSO ,FIXABLEBIT>\n\t\t\t      <RFALSE>)>)>)\n\t       (<VERB? LAMP-ON LAMP-OFF>\n\t\t<ROBOT-TELL \"It will automatically activate when something has been placed on it.\">\n\t\t<RTRUE>)>>"
  },
  "LEVER-FCN": {
   "name": "LEVER-FCN",
   "file": "objects.zil",
   "line": 1134,
   "endLine": 1137,
   "source": "<ROUTINE LEVER-FCN ()\n\t <COND (<VERB? PUSH MOVE>\n\t\t<PERFORM ,V?SET ,PRSO ,PRSI>\n\t\t<RTRUE>)>>"
  },
  "RTD-SWITCH-FCN": {
   "name": "RTD-SWITCH-FCN",
   "file": "objects.zil",
   "line": 1169,
   "endLine": 1179,
   "source": "<ROUTINE RTD-SWITCH-FCN ()\n\t <COND (<VERB? THROW>\n\t\t<PERFORM ,V?SET ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<VERB? TURN>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <PERFORM ,V?LAMP-OFF ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?LAMP-ON ,PRSO>\n\t\t       <RTRUE>)>)>>"
  },
  "PLAQUE-FCN": {
   "name": "PLAQUE-FCN",
   "file": "objects.zil",
   "line": 1190,
   "endLine": 1222,
   "source": "<ROUTINE PLAQUE-FCN ()\n\t <COND (<NOT <VERB? READ>>\n\t\t<RFALSE>)>\n\t <COND (<IRIS?>\n\t\t<COND (<NOT ,IRIS-FIXED>\n\t\t       <ROBOT-TELL \"Forget it, big boy. Fix me first.\">)\n\t\t      (T\n\t\t       <ROBOT-TELL \"Sure. Here goes...\">\n\t\t       <CRLF>\n\t\t       <TELL\n\"This Underground Complex was designed and built by the Frobozz Engineering Company, makers of such fine products as One-Way (tm) Bus Tickets, Ozone Nozone, and \\\"Best in the East\\\", soon to be a Smello-vision (tm) release.|\n|\nChief Designer/Architect: Michael Berlyn.\" CR>)>)\n\t       (<WALDO?>\n\t\t<ROBOT-TELL \"Sure. Here... Lemme feel...|\n|\nIt says Bumpity bump-bump, groove bump, dot dot bump, and so on. I'm sure Iris is more suited for reading, though.\" >)\n\t       (<SENSA?>\n\t\t<ROBOT-TELL \"Sure. Let me sense it...|\n|\nIt says emmak...|\n|\nI don't know. It seems to lose something in the translation. Iris might be more helpful in reading this.\" >)\n\t       (<AUDA?>\n\t\t<ROBOT-TELL \"I hear you. It says TING TINKLE DE DONG TONG. Iris should be able to tell the difference between that and a doorbell.\">)\n\t       (<POET?>\n\t\t<ROBOT-TELL \"Sure.|\n|\nIt says 'While traveling the highways and byways of life, one doesn't always have time to stop and look at the roadmap' I think.  (But what do I know? I can't read -- I learned all my philosophy by reductive absurdium. Talk to Iris and she'll read it for you.)\" >)\n\t       (<WHIZ?>\n\t\t<ROBOT-TELL \"Hmm.... That's a tough one.\n|\nNope, sorry. I only read data banks. You must want Iris.\">)>>"
  },
  "MACHINE-FCN": {
   "name": "MACHINE-FCN",
   "file": "objects.zil",
   "line": 1410,
   "endLine": 1413,
   "source": "<ROUTINE MACHINE-FCN ()\n\t <COND (<VERB? CLOSE OPEN>\n\t\t<ROBOT-TELL\n\"I don't see any way to accomplish that.\">)>>"
  },
  "ORANGE-BUTTON-FCN": {
   "name": "ORANGE-BUTTON-FCN",
   "file": "objects.zil",
   "line": 1429,
   "endLine": 1443,
   "source": "<ROUTINE ORANGE-BUTTON-FCN ()\n\t <COND (<AND <VERB? PUSH>\n\t\t     <NOT <FSET? ,MACHINE ,OPENBIT>>>\n\t\t<COND (<AND <IN? ,NEWCHIP0 ,SOCKET1>\n\t\t\t    <IN? ,NEWCHIP2 ,SOCKET2>\n\t\t\t    <IN? ,FUSE ,MACHINE>>\n\t\t       <ROBOT-TELL <GET ,BUTTON-PRESS-TBL ,ROFF>>\n\t\t       <FCLEAR ,ORANGE-WIRE ,INVISIBLE>\n\t\t       <FCLEAR ,FUSE ,INVISIBLE>\n\t\t       <FSET ,MACHINE ,OPENBIT>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <ROBOT-TELL \"Nothing happens.\">)>)\n\t       (<VERB? PUSH>\n\t\t<ROBOT-TELL \"Nothing happens.\">)>>"
  },
  "ORANGE-WIRE-FCN": {
   "name": "ORANGE-WIRE-FCN",
   "file": "objects.zil",
   "line": 1465,
   "endLine": 1479,
   "source": "<ROUTINE ORANGE-WIRE-FCN ()\n\t <COND (<VERB? TAKE REPLACE>\n\t\t<COND (<AND <IN? ,FUSE ,MACHINE>\n\t\t\t    <IN? ,ORANGE-WIRE ,MACHINE>>\n\t\t       <ROBOT-TELL \"I'm reaching for the \" <>>\n\t\t       <TELL D ,ORANGE-WIRE \"...\" CR>\n\t\t       <JIGS-UP \"Oh oh!|\n|\nFC: Sizzle, pop, and snap-crackly noises. The delicious smell of fried robot. Mmm Mmm.\" ,WINNER>)>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <IN? ,WINNER ,TUBE1>\n\t\t     <NOT <IN? ,ORANGECABLE ,GROOVE1>>\n\t\t     <EQUAL? ,PRSI ,GROOVE2>>\n\t\t<SETG ORANGESET ,ORANGE-WIRE>\n\t\t<RFALSE>)>>"
  },
  "SOCKET-FCN": {
   "name": "SOCKET-FCN",
   "file": "objects.zil",
   "line": 1506,
   "endLine": 1508,
   "source": "<ROUTINE SOCKET-FCN (\"AUX\" TBL)\n\t <COND (<VERB? CLOSE>\n\t\t<ROBOT-YUKS>)>>"
  },
  "CIRCLE-FCN": {
   "name": "CIRCLE-FCN",
   "file": "objects.zil",
   "line": 1610,
   "endLine": 1648,
   "source": "<ROUTINE CIRCLE-FCN (\"AUX\" (COUNT 0) (NUM-PRESSED 0) (PREMATURE T))\n\t <COND (<VERB? PUSH>\n\t\t<COND (<NOT <IN? ,FUSE ,MACHINE>>\n\t\t       <ROBOT-TELL \"Nothing is happening. I don't think it's working anymore.\">\n\t\t       <RTRUE>)>\n\t\t<COND (<FSET? ,PRSO ,TOUCHBIT>\n\t\t       <TELL \"FC: That one has already been pressed.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T <FSET ,PRSO ,TOUCHBIT>)>\n\t\t<COND (<AND <EQUAL? ,REDSET ,REDWIRE>\n\t\t\t    <EQUAL? ,ORANGESET ,ORANGE-WIRE>>\n\t\t       <SET PREMATURE <>>\n\t\t       <COND (<EQUAL? ,PRSO ,CODE1>\n\t\t\t      <SETG CODE-SET1 T>)\n\t\t\t     (<EQUAL? ,PRSO ,CODE2>\n\t\t\t      <SETG CODE-SET2 T>)>)>\n\t\t<REPEAT ()\n\t\t\t<COND (<G? <SET COUNT <+ .COUNT 1>> 8>\n\t\t\t       <RETURN>)\n\t\t\t      (T\n\t\t\t       <COND (<FSET? <GET ,CODE-TBL .COUNT> ,TOUCHBIT>\n\t\t\t\t      <SET NUM-PRESSED <+ .NUM-PRESSED 1>>)>)>>\n\t\t<COND (<EQUAL? .NUM-PRESSED 1>\n\t\t       <COND (.PREMATURE\n\t\t\t      <TELL\n\"FC: Attempt for reset has been rejected. Code entry premature. FCs out of balance.\" CR>\n\t\t\t      <RESET-CODES>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"FC: First access code accepted. Enter second access code now.\" CR>)>)\n\t\t      (<EQUAL? .NUM-PRESSED 2>\n\t\t       <TELL \"FC: Second access code accepted. \" CR>\n\t\t       <COND (<AND ,CODE-SET1 ,CODE-SET2>\n\t\t\t      <END-GAME>)\n\t\t\t     (T <TELL CR \n\"FC: Code recognition failed. Pattern entered does not match the reset code. Reset procedures aborted. New reset code being generated due to possible tampering.\" CR>\n\t\t\t      <RESET-CODES>\n\t\t\t      <GENERATE-CODES>)>)>)>>"
  },
  "RESET-CODES": {
   "name": "RESET-CODES",
   "file": "objects.zil",
   "line": 1650,
   "endLine": 1658,
   "source": "<ROUTINE RESET-CODES (\"AUX\" (COUNT 0))\n\t <REPEAT ()\n\t\t <COND (<G? <SET COUNT <+ .COUNT 1>> 8>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<FCLEAR <GET ,CODE-TBL .COUNT> ,TOUCHBIT>)>>\n\t <SETG CODE-SET1 <>>\n\t <SETG CODE-SET2 <>>\n\t <RTRUE>>"
  },
  "GENERATE-CODES": {
   "name": "GENERATE-CODES",
   "file": "objects.zil",
   "line": 1660,
   "endLine": 1667,
   "source": "<ROUTINE GENERATE-CODES ()\n\t <SETG CODE1 <PICK-ONE ,CODE-TBL>>\n\t <SETG CODE2 <PICK-ONE ,CODE-TBL>>\n\t <REPEAT ()\n\t\t <COND (<EQUAL? ,CODE1 ,CODE2>\n\t\t\t<SETG CODE2 <PICK-ONE ,CODE-TBL>>)\n\t\t       (T <RETURN>)>>\n\t <RESET-CODES>>"
  },
  "ACTOR-CHANGE": {
   "name": "ACTOR-CHANGE",
   "file": "parser.zil",
   "line": 313,
   "endLine": 320,
   "source": "<ROUTINE ACTOR-CHANGE ()\n\t <REPEAT ()\n\t\t <COND (<L? ,P-NACTORS 2> <RFALSE>)>\n\t\t <SETG P-CACTOR <+ ,P-CACTOR 1>>\n\t\t <CRLF>\n\t\t <SETG P-NACTORS <- ,P-NACTORS 1>>\n\t\t <COND (<CHANGE-WINNER <GET ,P-ACTORS ,P-CACTOR>>\n\t\t\t<RTRUE>)>>>"
  },
  "ADJ-CHECK": {
   "name": "ADJ-CHECK",
   "file": "parser.zil",
   "line": 883,
   "endLine": 891,
   "source": "<ROUTINE ADJ-CHECK ()\n\t <COND (<NOT ,P-ADJ> <RTRUE>)\n\t       ;(<OR <EQUAL? ,P-ADJ ,A?FIRST ,A?SECOND ,A?THIRD>\n\t\t    <EQUAL? ,P-ADJ ,A?FOURTH ,A?FIFTH ,A?SIXTH>\n\t\t    <EQUAL? ,P-ADJ ,A?SEVENTH ,A?EIGHTH ,A?NINTH>\n\t\t    <EQUAL? ,P-ADJ ,A?TENTH ,A?SMALL ,A?LARGE>\n\t\t    <EQUAL? ,P-ADJ ,A?INNER ,A?OUTER>>\n\t\t<RFALSE>)\n\t       (T <RTRUE>)>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "parser.zil",
   "line": 1252,
   "endLine": 1258,
   "source": "<ROUTINE HELD? (CAN)\n\t <COND (<NOT <FSET? .CAN ,TAKEBIT>>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <SET CAN <LOC .CAN>>\n\t\t <COND (<NOT .CAN> <RFALSE>)\n\t\t       (<==? .CAN ,WINNER> <RTRUE>)>>>"
  },
  "AUDA-HEARS?": {
   "name": "AUDA-HEARS?",
   "file": "people.zil",
   "line": 13,
   "endLine": 17,
   "source": "<ROUTINE AUDA-HEARS? ()\n\t <COND (<AND <IN? ,AUDA <LOC ,PEOPLE>>\n\t\t     <OR ,AUDA-LISTENS\n\t\t\t <AUDA?>>\n\t\t     <L? <GET ,DEADBOTS 4> 30>>)>>"
  },
  "AUDA-SPEAKS": {
   "name": "AUDA-SPEAKS",
   "file": "people.zil",
   "line": 19,
   "endLine": 23,
   "source": "<ROUTINE AUDA-SPEAKS ()\n\t <COND (<NOT <AUDA?>>\n\t\t<TELL CR <GET ,INTER-TBL 4> \" Listening...\" CR>)\n\t       (T\n\t\t<CRLF>)>>"
  },
  "ROBOT-THERE?": {
   "name": "ROBOT-THERE?",
   "file": "people.zil",
   "line": 25,
   "endLine": 27,
   "source": "<ROUTINE ROBOT-THERE? (RBT)\n\t <COND (<AND <IN? .RBT <LOC ,PEOPLE>>\n\t\t     <NOT <FSET? .RBT ,CUTBIT>>>)>>"
  },
  "I-PEOPLE1": {
   "name": "I-PEOPLE1",
   "file": "people.zil",
   "line": 29,
   "endLine": 36,
   "source": "<ROUTINE I-PEOPLE1 ()\n\t <SETG PR-NUMBER 1>\n\t <MOVE ,PEOPLE ,STERILE-AREA>\n\t <SET-GOAL ,PEOPLE ,TOOL-AREA>\n\t <TELL CR \n\t       \"FC INTERRUPT: ALERT! ALERT!|\nIntruders detected in Sterilization Chamber!\" CR>\n\t <RFATAL>>"
  },
  "PARRIVE1": {
   "name": "PARRIVE1",
   "file": "people.zil",
   "line": 38,
   "endLine": 71,
   "source": "<ROUTINE PARRIVE1 (\"AUX\" TEMP)\n\t <MOVE ,TOOLBAG ,PEOPLE>\n\t <COND (<AUDA-HEARS?>\n\t\t<AUDA-SPEAKS>\n\t\t<TELL\n\"I can hear the sound of metal against metal, followed by the sound of a creaking door opening.|\n|\n\\\"I've got the toolbag. Everything in it seems intact.\\\"|\n\\\"Well, don't lose it, man. We're lost without it. We'll never pull the switch on him if we lose it.\\\"|\n\\\"Don't worry. I won't let it out of my sight.\\\"|\n\\\"I'm getting sleepy. It was a long ride down here. What do you say we catch some sleep?\\\"|\n\\\"You really think we should? With all the devastation taking place?\\\"|\n\\\"I don't have much choice. I'm not thinking clearly, and I really need to sleep. More casualties will occur if we don't take care of ourselves.\\\"|\n\\\"Good point. Let's go.\\\"\" CR>)>\n\t <COND (<ROBOT-THERE? ,WALDO>\n\t\t<SET TEMP ,WINNER> <CHANGE-WINNER ,WALDO T>\n\t\t<TELL CR <GET ,INTER-TBL 2>\n\" The mobile objects have stopped for a moment. I also detect the \" D \n,PEOPLE-CABINET \" opening then shutting. The \" D ,PEOPLE \" have removed a \"\nD ,TOOLBAG \" and are grasping it.\" CR>\n\t\t<CHANGE-WINNER .TEMP T>)\n\t       (<ROBOT-THERE? ,SENSA>\n\t\t<SET TEMP ,WINNER> <CHANGE-WINNER ,SENSA T>\n\t\t<TELL CR <GET ,INTER-TBL 3>\n\" I can detect the cycling of a mechanism attached to the \" D \n,PEOPLE-CABINET \" and the \" D ,PEOPLE \" removing a \" D ,TOOLBAG \" from it.\" CR>\n\t\t<CHANGE-WINNER .TEMP T>)\n\t       (<ROBOT-THERE? ,POET>\n\t\t<SET TEMP ,WINNER> <CHANGE-WINNER ,POET T>\n\t\t<TELL CR <GET ,INTER-TBL 5>\n\" As the amazing \" D ,PEOPLE \" check in, they casually remove something from a \" D ,PEOPLE-CABINET \". It appears to be a \" D ,TOOLBAG \".\" CR>\n\t\t<CHANGE-WINNER .TEMP T>)>\n\t <SET-GOAL ,PEOPLE ,SLEEP-CHAMBER>\n\t <SETG PR-NUMBER 2>>"
  },
  "PARRIVE2": {
   "name": "PARRIVE2",
   "file": "people.zil",
   "line": 73,
   "endLine": 101,
   "source": "<ROUTINE PARRIVE2 (\"AUX\" TEMP)\n\t <COND (,CHASING-THIEF\n\t\t<RFALSE>)>\n\t <SETG SLEEPERS 0>\n\t <ENABLE <QUEUE I-STEAL -1>>\n\t <MOVE ,TOOLBAG ,SLEEP-CHAMBER>\n\t <COND (<AND <AUDA-HEARS?>\n\t\t     <NOT ,GIVEN-BAG>>\n\t\t<AUDA-SPEAKS>\n\t\t<TELL\n\"\\\"Well, this is some sleep chamber. No frills.\\\"|\n\\\"Don't complain. At least there's bunks for us.\\\"|\n\\\"I suppose. I'm going to put the toolbag on the floor while I grab some shuteye.\\\"|\n\\\"What about the robot?\\\"|\n\\\"What, that ear thing? Gimme a break!\\\"|\n|\nAUDA: I hear the sound of metal being placed on the floor.\" CR>)>\n\t <COND (<AND <ROBOT-THERE? ,WALDO> <NOT ,GIVEN-BAG>>\n\t\t<TELL CR <GET ,INTER-TBL 2>\n\" The mobile objects are moving over to the platforms and are reclining.\" CR>)\n\t       (<AND <ROBOT-THERE? ,SENSA> <NOT ,GIVEN-BAG>>\n\t\t<SET TEMP ,WINNER> <CHANGE-WINNER ,SENSA T>\n\t\t<TELL CR <GET ,INTER-TBL 3>\n\" I detect an extreme drop in electrical and ionic activity in this area as the \" D ,PEOPLE \" become immobile.\" CR>\n\t\t<CHANGE-WINNER .TEMP T>)\n\t       (<AND <ROBOT-THERE? ,POET> <NOT ,GIVEN-BAG>>\n\t\t<TELL CR <GET ,INTER-TBL 5>\n\" Ah, yawn. Ho hum. These people are boring.\" CR>)>\n\t <RTRUE>>"
  },
  "I-STEAL": {
   "name": "I-STEAL",
   "file": "people.zil",
   "line": 110,
   "endLine": 135,
   "source": "<ROUTINE I-STEAL ()\n\t <SETG SLEEPERS <+ ,SLEEPERS 1>>\n\t <COND (<G? ,SLEEPERS 20>\n\t\t<DISABLE <INT I-STEAL>>\n\t\t<ENABLE <QUEUE I-PEOPLE2 1>>)>\n\t <COND (<EQUAL? ,SLEEPERS 1>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL <GET ,SNORES-TBL 0>  CR>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? ,SLEEPERS 5>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL <GET ,SNORES-TBL 1> CR>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? ,SLEEPERS 10>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL <GET ,SNORES-TBL 2> CR>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? ,SLEEPERS 15>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL <GET ,SNORES-TBL 3> CR>\n\t\t       <RTRUE>)>)>\n\t <RFALSE>>"
  },
  "ENOUGH-TRADING": {
   "name": "ENOUGH-TRADING",
   "file": "people.zil",
   "line": 139,
   "endLine": 154,
   "source": "<ROUTINE ENOUGH-TRADING ()\n\t <ROBOT-TELL \"Given.\">\n\t <COND (<AUDA-HEARS?>\n\t\t<AUDA-SPEAKS>\n\t\t<TELL\n\"\\\"Enough is enough! We'll never get anywhere with this little thing pestering us.\\\"|\n\\\"Tell me about it. Let's just get on with this.\\\"|\n\\\"Fine with me. Grab the bag.\\\"|\n\\\"Okay.\\\"\" CR>)>\n\t <MOVE ,TOOLBAG ,PEOPLE>\n\t <SETG FED-UP T>\n\t <SETG CHASING-THIEF <>>\n\t <DISABLE <INT I-STEAL>>\n\t <I-PEOPLE2>\n\t <SETG PR-NUMBER 3>\n\t <SET-GOAL ,PEOPLE ,INNER-CORE>>>"
  },
  "PEOPLE-GIVEN-BAG": {
   "name": "PEOPLE-GIVEN-BAG",
   "file": "people.zil",
   "line": 156,
   "endLine": 185,
   "source": "<ROUTINE PEOPLE-GIVEN-BAG ()\n\t <ROBOT-TELL \"Given.\">\n\t <SETG GIVEN-BAG T>\n\t ;<COND (<G? ,TAKE-BACK 3>\n\t\t<RFALSE>)>\n\t <MOVE ,TOOLBAG ,PEOPLE>\n\t <DISABLE <INT I-CHASEAUDA>>\n\t <SETG RTHIEF <>>\n\t <SETG CHASING-THIEF <>>\n\t <SETG TAKE-BACK 0>\n\t <SETG PR-NUMBER 9>\n\t <COND (<L? ,SLEEPERS 20>\n\t\t<SETG SLEEPERS 0>\n\t\t<ENABLE <QUEUE I-STEAL -1>>\n\t\t<MOVE ,TOOLBAG ,SLEEP-CHAMBER>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL\n\"\\\"It's a good thing that little thief gave the bag back.\\\"|\n\\\"I'll say. Let's get some more sleep.\\\"|\n\\\"Okay.\\\"|\n\\\"You're not worried about leaving the bag on the floor, now, are you?\\\"|\n\\\"Nah. I'm not worried.\\\"\" CR>)>)\n\t       (ELSE ;\"THEY WERE ABOUT TO AWAKEN\"\n\t\t<DISABLE <INT I-STEAL>>\n\t\t<I-PEOPLE2>\n\t\t<SETG PR-NUMBER 3>\n\t\t<SET-GOAL ,PEOPLE ,INNER-CORE>\n\t\t<MOVE ,TOOLBAG ,PEOPLE>\n\t\t<RFALSE>)>>"
  },
  "I-PEOPLE2": {
   "name": "I-PEOPLE2",
   "file": "people.zil",
   "line": 188,
   "endLine": 213,
   "source": "<ROUTINE I-PEOPLE2 (\"AUX\" (FLG <>))\n\t <SETG PR-NUMBER 3>\n\t <SET-GOAL ,PEOPLE ,INNER-CORE>\n\t <MOVE ,TOOLBAG ,PEOPLE>\n\t <COND (<AND <AUDA-HEARS?>\n\t\t     <NOT ,FED-UP>>\n\t\t<AUDA-SPEAKS>\n\t\t<SET FLG T>\n\t\t<TELL \n\"\\\"I really needed more rest than that, but it'll have to do. Let's get on with what this.\\\"|\n\\\"Okay. Just give me a second. Where to now?\\\"|\n\\\"The Central Library. We've got to get a little info before we can pull the switch.\\\"|\n\\\"Oops. Almost forgot the tool bag!\\\"\" CR>)>\n\t <COND (<ROBOT-THERE? ,WALDO>\n\t\t<SET FLG T>\n\t\t<TELL CR <GET ,INTER-TBL 2>\n\" The mobile objects are resuming their normal positions and are becoming active.\" CR>)\n\t       (<ROBOT-THERE? ,SENSA>\n\t\t<SET FLG T>\n\t\t<TELL CR <GET ,INTER-TBL 3>\n\" The air is becoming charged with ionic activity as the creatures stir from quiescence.\" CR>)\n\t       (<ROBOT-THERE? ,POET>\n\t\t<SET FLG T>\n\t\t<TELL CR <GET ,INTER-TBL 5>\n\" Like loaves of bread sitting on a warm oven, the Creators rise.\" CR>)>\n\t .FLG>"
  },
  "PARRIVE3": {
   "name": "PARRIVE3",
   "file": "people.zil",
   "line": 215,
   "endLine": 224,
   "source": "<ROUTINE PARRIVE3 ()\n\t <ENABLE <QUEUE I-PEOPLE4 3>>\n\t <COND (<AUDA-HEARS?>\n\t\t<AUDA-SPEAKS>\n\t\t<TELL \n\"I can hear them talking, but I can't make out what's being said.\" CR>)>\n\t <COND (,PLUGGED-IN\n\t\t<TELL CR <GET ,INTER-TBL 6>\n\" Humans querying the CLC regarding proper replacement procedure for you. CLC is responding with the human access code for reviving one of your clones.\"\nCR>)>>"
  },
  "I-PEOPLE4": {
   "name": "I-PEOPLE4",
   "file": "people.zil",
   "line": 226,
   "endLine": 234,
   "source": "<ROUTINE I-PEOPLE4 ()\n\t <SETG PR-NUMBER 4>\n\t <SET-GOAL ,PEOPLE ,HALL-END>\n\t <COND (<AUDA-HEARS?>\n\t\t<AUDA-SPEAKS>\n\t\t<TELL\n\"\\\"That information should do the trick. Let's get the replacement.\\\"|\n\\\"Yeah. Sounds good to me. I guess that person really went over the deep end, poor thing. Sitting in that capsule can't be a lot of fun.\\\"|\n\\\"Well, that's the way it goes.\\\"\" CR>)>>"
  },
  "PARRIVE4": {
   "name": "PARRIVE4",
   "file": "people.zil",
   "line": 236,
   "endLine": 259,
   "source": "<ROUTINE PARRIVE4 (\"AUX\" (FLG <>))\n\t <COND (<AND <IN? ,CAR ,HALL-END>\n\t\t     <EQUAL? ,CAR-FULL 0>>\n\t\t<ENABLE <QUEUE I-KILL 15>>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <SET FLG T>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL\n\"\\\"Let's get into the car and get this thing over with. The clones are near the end of this tube.\\\"|\n\\\"Sounds good to me. This place gives me the creeps.\\\"|\n|\nAUDA: I hear the sounds of the people entering the car, then the whoosh as the car takes off to the east.\" CR>)>\n\t\t<MOVE ,PEOPLE ,CRYOUNITS>\n\t\t<MOVE ,CAR ,CAR-AREA>\n\t\t.FLG)\n\t       (ELSE\n\t\t<ENABLE <QUEUE I-CAR-WAIT -1>>\n\t\t<COND (<NOT ,WAITING-QUIP>\n\t\t       <SETG WAITING-QUIP T>\n\t\t       <COND (<AUDA-HEARS?>\n\t\t\t      <AUDA-SPEAKS>\n\t\t\t      <TELL\n\"\\\"We'll have to wait for the car. We can't negotiate this tube on foot.\\\"|\n\\\"Fine. I've got nothing but time.\\\"\" CR>)>)>)>>"
  },
  "I-CAR-WAIT": {
   "name": "I-CAR-WAIT",
   "file": "people.zil",
   "line": 261,
   "endLine": 295,
   "source": "<ROUTINE I-CAR-WAIT ()\n\t <COND (<AND <IN? ,CAR ,HALL-END>\n\t\t     <EQUAL? ,CAR-FULL 0>>\n\t\t<DISABLE <INT I-CAR-WAIT>>\n\t\t<PARRIVE4>)\n\t       (ELSE\n\t\t<SETG CAR-GONE <+ ,CAR-GONE 1>>\n\t\t<COND (<AND <EQUAL? ,CAR-GONE 10>\n\t\t\t    <AUDA-HEARS?>>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL\n\"\\\"Man, I just hate the way this car was designed.\\\"|\n\\\"Yeah, well, join the club. We'll just have to wait. We can't go back to the surface until we've pulled the switch, anyway.\\\"\" CR>)\n\t\t      (<AND <EQUAL? ,CAR-GONE 30>\n\t\t\t    <AUDA-HEARS?>>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL\n\"\\\"I'm getting real angry. How long are you gonna wait?\\\"\" CR>)\n\t\t      (<AND <EQUAL? ,CAR-GONE 45>\n\t\t\t    <AUDA-HEARS?>>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL\n\"\\\"When that robot gets out of that car, I'm going to dismantle the little bugger.\\\"|\n\\\"You'll have to stand in line. My boredom factor is real low.\\\"\" CR>)\n\t\t      (<EQUAL? ,CAR-GONE 75>\n\t\t       <COND (<AUDA-HEARS?>\n\t\t\t      <AUDA-SPEAKS>\n\t\t\t      <TELL\n\"\\\"I'm tired of waiting around, man. Let's go pull the plug and get this thing over with.\\\"|\n\\\"But what about the clone?\\\"|\n\\\"Forget it. We'll put everything on manual override and take care of this later. Too many people are at stake here. Okay?\\\"|\n\\\"Okay. Lead on.\\\"\" CR>)>\n\t\t       <SETG PR-NUMBER 7>\n\t\t       <SET-GOAL ,PEOPLE ,CPU-ROOM>\n\t\t       <DISABLE <INT I-CAR-WAIT>>)>)>>"
  },
  "I-KILL": {
   "name": "I-KILL",
   "file": "people.zil",
   "line": 297,
   "endLine": 315,
   "source": "<ROUTINE I-KILL (\"AUX\" TEMP)\n\t <MOVE ,PEOPLE ,HALL-END>\n\t <MOVE ,CAR ,HALL-END>\n\t <COND (<AUDA-HEARS?>\n\t\t<AUDA-SPEAKS>\n\t\t<ROBOT-TELL\n\"I hear the whoosh of the car returning and the noisy talking mechanisms getting out of it.\">)>\n\t <COND (<ROBOT-THERE? ,WALDO>\n\t\t<SET TEMP ,WINNER> <CHANGE-WINNER ,WALDO T>\n\t\t<ROBOT-TELL \"Sonar detects the \" <>>\n\t\t<TELL D ,PEOPLE\n\" are holding another thing like themselves between them.\" CR>\n\t\t<CHANGE-WINNER .TEMP T>)\n\t       (<ROBOT-THERE? ,SENSA>\n\t\t<TELL \"SENSA: Sensory inputs detect a third life form.\" CR>)\n\t       (<ROBOT-THERE? ,POET>\n\t\t<TELL \"POET: Here come da clone, here come da clone.\" CR>)>\n\t <SETG PR-NUMBER 5>\n\t <SET-GOAL ,PEOPLE ,CPU-ROOM>>"
  },
  "PARRIVE5": {
   "name": "PARRIVE5",
   "file": "people.zil",
   "line": 317,
   "endLine": 324,
   "source": "<ROUTINE PARRIVE5 ()\n\t <TELL CR\n\"As the door swings open you are blinded by intense light and incredible\npain. Just before everything overloads and you fade from existence, you can\nmake out the shapes of three humans, one of them holding onto the door of the\ncylinder, another of them looking exactly like you, and then everything goes\ndark.\" CR>\n\t <QUIT>>"
  },
  "I-CHASEAUDA": {
   "name": "I-CHASEAUDA",
   "file": "people.zil",
   "line": 326,
   "endLine": 436,
   "source": "<ROUTINE I-CHASEAUDA (\"AUX\" TEMP TWINNER)\n\t <SETG TAKE-BACK <+ ,TAKE-BACK 1>>\n\t <COND (<EQUAL? ,TAKE-BACK 1>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL\n\"\\\"Give me that, you little devil!\\\"|\n\\\"That robot's a thief! Let's get it!\\\"\" CR>)>\n\t\t<COND (<ROBOT-THERE? ,WALDO>\n\t\t       <TELL CR\n\"WALDO: The mobile devices are waving their extensions madly. I think I'm in trouble.\" CR>)\n\t\t      (<ROBOT-THERE? ,SENSA>\n\t\t       <TELL CR\n\"SENSA: The air in this area has become highly electrified, charged by the creatures.\" CR>)\n\t\t      (<ROBOT-THERE? ,POET>\n\t\t       <TELL CR\n\"POET: I believe the Creators have caught an extension in the cookie jar. Better take it on the lam, and pronto.\" CR>)>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,TAKE-BACK 2>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,TAKE-BACK 3>\n\t\t<COND (<SET TEMP <GOAL? ,RTHIEF>>\n\t\t       <SET-GOAL ,PEOPLE .TEMP>)\n\t\t      (T\n\t\t       <SET-GOAL ,PEOPLE <LOC ,RTHIEF>>)>\n\t\t<SETG PR-NUMBER 9>\n\t\t<SETG CHASING-THIEF T>\n\t\t<RFALSE>)\n\t       (<NOT <IN? ,TOOLBAG ,RTHIEF>>\n\t\t<COND (<IN? ,PEOPLE <LOC ,TOOLBAG>>\n\t\t       <MOVE ,TOOLBAG ,PEOPLE>\n\t\t       <SETG PR-NUMBER 3>\n\t\t       <SET-GOAL ,PEOPLE ,INNER-CORE>\n\t\t       <DISABLE <INT I-CHASEAUDA>>\n\t\t       <COND (<AUDA-HEARS?>\n\t\t\t      <AUDA-SPEAKS>\n\t\t\t      <TELL\n\"\\\"Here's the toolbag. Looks like the little 'bot dropped it.\\\"|\n\\\"Just as well. Let's get on with this.\\\"\" CR>)>\n\t\t       <SETG CHASING-THIEF <>>)\n\t\t      (<IN? ,TOOLBAG ,IRIS>\n\t\t       <SETG RTHIEF ,IRIS> <RFALSE>)\n\t\t      (<IN? ,TOOLBAG ,WALDO>\n\t\t       <SETG RTHIEF ,WALDO> <RFALSE>)\n\t\t      (<IN? ,TOOLBAG ,SENSA>\n\t\t       <SETG RTHIEF ,SENSA> <RFALSE>)\n\t\t      (<IN? ,TOOLBAG ,AUDA>\n\t\t       <SETG RTHIEF ,AUDA> <RFALSE>)\n\t\t      (<IN? ,TOOLBAG ,POET>\n\t\t       <SETG RTHIEF ,POET> <RFALSE>)\n\t\t      (<IN? ,TOOLBAG ,WHIZ>\n\t\t       <SETG RTHIEF ,WHIZ> <RFALSE>)\n\t\t      (T\n\t\t       <COND (<IN? <LOC ,TOOLBAG> ,ROOMS>\n\t\t\t      <SET-GOAL ,PEOPLE <LOC ,TOOLBAG>>\n\t\t\t      <SETG PR-NUMBER 9>)\n\t\t\t     (T\n\t\t\t      <SETG PR-NUMBER 9>\n\t\t\t      <SET-GOAL ,PEOPLE <META-LOC ,TOOLBAG>>)>\n\t\t       <RFALSE>)>)\n\t       (<IN? ,PEOPLE ,CORRIDOR-4>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL \n\"\\\"Oh, wow, look at that! The mist is coming up through the grating!\\\"|\n\\\"Yeah. What's below this room? The Maintenance Area?\\\"|\n\\\"Yes. The cooling system for the Filtering Computers has a regulatory valve there.... Maybe that's what's wrong here.\\\"|\n\\\"What are you talking about?\\\"|\n\\\"This acid mist -- it could be what's causing all the trouble. Let's get back down there and turn the wheel, get the cooling system rerouted.\\\"|\n\\\"It's worth a try. If you're right, we won't have to pull this person's plug.\\\"|\n\\\"Well, let's go. We're wasting time.\\\"\" CR>)>\n\t\t<DISABLE <INT I-CHASEAUDA>>\n\t\t<CRLF>\n\t\t<COND (<IN? ,RTHIEF ,CORRIDOR-4>\n\t\t       <MOVE ,TOOLBAG ,PEOPLE>\n\t\t       <TELL <GET ,INTER-TBL <GETP ,RTHIEF ,P?ROBOT>>\n\" They've taken something from my extensions!\" CR>)\n\t\t      (ELSE\n\t\t       <TELL <GET ,INTER-TBL <GETP ,RTHIEF ,P?ROBOT>>\n\" The bag is melting!\" CR>\n\t\t       <REMOVE ,TOOLBAG>)>\n\t\t<SET-GOAL ,PEOPLE ,FCMAINT>\n\t\t<SETG PR-NUMBER 8>\n\t\t<SETG CHASING-THIEF <>>)\n\t       (<IN? ,PEOPLE <LOC ,RTHIEF>>\n\t\t<SETG CHASING-THIEF <>>\n\t\t<COND (<IN? ,PEOPLE ,FCMAINT>\n\t\t       <DISABLE <INT I-CHASEAUDA>>\n\t\t       <MOVE ,TOOLBAG ,PEOPLE>\n\t\t       <STU-1-F T>)\n\t\t      (ELSE\n\t\t       <COND (<AUDA-HEARS?>\n\t\t\t      <AUDA-SPEAKS>\n\t\t\t      <TELL\n\"\\\"We've got him now. He's cornered. Let's grab that tool bag and get on with this fiasco.\\\"\" CR>)>\n\t\t       <CRLF>\n\t\t       <COND (<IN? ,TOOLBAG ,RTHIEF>\n\t\t\t      <SET TWINNER ,WINNER>\n\t\t\t      <CHANGE-WINNER ,RTHIEF T>\n\t\t\t      <ROBOT-TELL\n\t\t\t        \"Oh oh. I feel something wrenching the \" <>>\n\t\t\t      <TELL D ,TOOLBAG \" from my extensions.\" CR>\n\t\t\t      <CHANGE-WINNER .TWINNER T>)>\n\t\t       <MOVE ,TOOLBAG ,PEOPLE>\n\t\t       <SETG PR-NUMBER 3>\n\t\t       <SET-GOAL ,PEOPLE ,INNER-CORE>\n\t\t       <DISABLE <INT I-CHASEAUDA>>)>)\n\t       (ELSE\n\t\t<SET-GOAL ,PEOPLE <LOC ,RTHIEF>>\n\t\t<SETG PR-NUMBER 9>\n\t\t<RFALSE>)>>"
  },
  "PARRIVE6": {
   "name": "PARRIVE6",
   "file": "people.zil",
   "line": 438,
   "endLine": 446,
   "source": "<ROUTINE PARRIVE6 ()\n\t <ENABLE <QUEUE I-STARCROSS -1>>\n\t <COND (<AUDA-HEARS?>\n\t\t<AUDA-SPEAKS>\n\t\t<TELL \n\"\\\"Let's play this game while we wait to see what's happening.\\\"|\n\\\"What's it called?\\\"|\n\\\"Starcross. Looks really good.\\\"|\n\\\"Okay.\\\"\" CR>)>>"
  },
  "I-STARCROSS": {
   "name": "I-STARCROSS",
   "file": "people.zil",
   "line": 448,
   "endLine": 463,
   "source": "<ROUTINE I-STARCROSS ()\n\t <SETG PLAY-STARCROSS <+ ,PLAY-STARCROSS 1>>\n\t <COND (<L? ,PLAY-STARCROSS 200>\n\t\t<RFALSE>)\n\t       (T\n\t\t<DISABLE <INT I-STARCROSS>>\n\t\t<SET-GOAL ,PEOPLE ,INNER-CORE>\n\t\t<SETG PR-NUMBER 3>\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL\n\"\\\"I think we've waited long enough. This person in the cylinder isn't all together upstairs, if\nyou know what I mean.\\\"|\n\\\"I do, and I agree. There's been more than enough time. Let's yank the fool out of there immediately, then get the replacement clone.\\\"|\n\\\"No way. Procedure requires we get the replacement first, and that's what\nwe're going to do. Now let's move.\\\"\" CR>)>)>>"
  },
  "PARRIVE7": {
   "name": "PARRIVE7",
   "file": "people.zil",
   "line": 465,
   "endLine": 470,
   "source": "<ROUTINE PARRIVE7 ()\n\t <TELL CR\n\"As the door swings open you are blinded by intense light and incredible\npain. Just before everything overloads and you fade from existence, you can\nmake out the shape of two figures outside, one of them holding onto the door of the cylinder, and then everything goes dark.\" CR>\n\t <QUIT>>"
  },
  "PARRIVE8": {
   "name": "PARRIVE8",
   "file": "people.zil",
   "line": 472,
   "endLine": 473,
   "source": "<ROUTINE PARRIVE8 ()\n\t <STU-1-F>>"
  },
  "PARRIVE9": {
   "name": "PARRIVE9",
   "file": "people.zil",
   "line": 475,
   "endLine": 476,
   "source": "<ROUTINE PARRIVE9 ()\n\t <RFALSE>>"
  },
  "STU-1-F": {
   "name": "STU-1-F",
   "file": "people.zil",
   "line": 478,
   "endLine": 507,
   "source": "<ROUTINE STU-1-F (\"OPTIONAL\" (LONG? <>))\n\t <SETG ACID-FIXED T>\n\t <SET-GOAL ,PEOPLE ,REC-AREA>\n\t <SETG PR-NUMBER 6>\n\t <COND (<AUDA-HEARS?>\n\t\t<AUDA-SPEAKS>\n\t\t<TELL\n\"\\\"Hey -- Look at that! The pipes going up to the Filtering Computers have burst.\\\"|\n\\\"Yeah. Maybe the person in the cylinder isn't at fault....\\\"|\n\\\"Hmm. You could be right. Let's fix this and then see if things return to normal.\\\"|\n|\nAUDA: I can hear the sound of metal, like a wheel turning, and the hissing\nstop.|\n|\n\\\"That should take care of that leak. Let's go up to the Rec Area and wait for awhile.\\\"|\n\\\"Fine.\">\n\t\t<COND (.LONG?\n\t\t       <TELL \" Meanwhile, I'll get our toolbag back.\">)>\n\t\t<TELL \"\\\"|\n|\nAUDA: I hear footsteps as the talking mechanisms walk away.\" CR>)>\n\t <COND (<ROBOT-THERE? ,WALDO>\n\t\t<TELL CR\n\"WALDO: I can detect the large, circular object high overhead turning.\" CR>)\n\t       (<ROBOT-THERE? ,SENSA>\n\t\t<TELL CR\n\"SENSA: I detect the flow within the pipes overhead stopping and the acid leak stopping, too.\" CR>)\n\t       (<ROBOT-THERE? ,POET>\n\t\t<TELL CR\n\"POET: Here they come to save the day...\" CR>)>>"
  },
  "ROBOT-TELL": {
   "name": "ROBOT-TELL",
   "file": "robots.zil",
   "line": 22,
   "endLine": 27,
   "source": "<ROUTINE ROBOT-TELL (STR \"OPTIONAL\" (CR? T))\n\t <COND (<NOT <EQUAL? ,WINNER ,OLD-WINNER>>\n\t\t<TELL <GET ,ROBOT-NAMES ,ROFF> \": \">)>\n\t <TELL .STR>\n\t <COND (.CR? <CRLF>)>\n\t <RTRUE>>"
  },
  "HE-SHE": {
   "name": "HE-SHE",
   "file": "robots.zil",
   "line": 29,
   "endLine": 34,
   "source": "<ROUTINE HE-SHE (OBJ)\n\t <COND (<EQUAL? .OBJ ,IRIS ,SENSA ,AUDA>\n\t\t<TELL \"she\">)\n\t       (<EQUAL? .OBJ ,PEOPLE>\n\t\t<TELL \"they\">)\n\t       (T <TELL \"he\">)>>"
  },
  "HIM-HER": {
   "name": "HIM-HER",
   "file": "robots.zil",
   "line": 36,
   "endLine": 41,
   "source": "<ROUTINE HIM-HER (OBJ)\n\t <COND (<EQUAL? .OBJ ,IRIS ,SENSA ,AUDA>\n\t\t<TELL \"her\">)\n\t       (<EQUAL? .OBJ ,PEOPLE>\n\t\t<TELL \"them\">)\n\t       (T <TELL \"him\">)>>"
  },
  "CANT-DETECT": {
   "name": "CANT-DETECT",
   "file": "robots.zil",
   "line": 43,
   "endLine": 55,
   "source": "<ROUTINE CANT-DETECT (OBJ \"OPTIONAL\" (CR? T) \"AUX\" TEMPROFF)\n\t <ROBOT-TELL <GET ,DETECT-TBL ,ROFF> <>>\n\t ;<SET TEMPROFF ,ROFF>\n\t <COND (<GETP .OBJ ,P?ROBOT>\n\t\t<TELL \" \">)\n\t       (T\n\t\t<TELL \" any \">)>\n\t ;<COND (<EQUAL? ,ROFF 0>\n\t\t<SETG ROFF 6>)>\n\t <TELL D .OBJ \" here.\">\n\t ;<SETG ROFF .TEMPROFF>\n\t <COND (.CR? <CRLF>)>\n\t <RTRUE>>"
  },
  "ROBOT-YUKS": {
   "name": "ROBOT-YUKS",
   "file": "robots.zil",
   "line": 66,
   "endLine": 67,
   "source": "<ROUTINE ROBOT-YUKS ()\n\t <ROBOT-TELL <PICK-ONE <GET ,R-YUKS ,ROFF> >>>"
  },
  "DEAD-FCN": {
   "name": "DEAD-FCN",
   "file": "robots.zil",
   "line": 99,
   "endLine": 136,
   "source": "<ROUTINE DEAD-FCN (\"OPTIONAL\" (ROB 0) \"AUX\" (COUNT 0) TEMP L)\n\t <COND (<NOT <EQUAL? .ROB 0>>\n\t\t<TELL \"FC: \" D .ROB \" is no longer functional.\" CR>)>\n\t <COND (,OLD-WINNER\n\t\t<SET TEMP <GET ,DEADBOTS <GETP ,OLD-WINNER ,P?ROBOT>>>\n\t\t<COND (<L? .TEMP 30>\n\t\t       <SETG WINNER ,OLD-WINNER>\n\t\t       <SETG OLD-WINNER <>>\n\t\t       <SETG WINNER-HERE \n\t\t\t     <COND (<IN? <SET L <LOC ,WINNER>> ,ROOMS> .L)\n\t\t\t\t   (T <LOC .L>)>>\n\t\t       <SETG ROFF <GETP ,WINNER ,P?ROBOT>>\n\t\t       <SETG HERE ,WINNER>\n\t\t       <TELL \"FC: Cryolink reestablished to \">\n\t\t       <TELL SD ,WINNER \".\" CR>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <SETG P-CONT <>>\n\t\t       <RFATAL>)>)>\n\t <REPEAT ()\n\t\t <SET COUNT <+ .COUNT 1>>\n\t\t <COND (<EQUAL? .COUNT 7>\n\t\t\t<TELL \n\t\t\t \"FC: There's no point in continuing. All the robots are history and, for that matter, so are the people on the surface.\" CR>\n\t\t\t<QUIT>)>\n\t\t <SET TEMP <GET ,DEADBOTS .COUNT>>\n\t\t <COND (<L? .TEMP 30>\n\t\t\t<SETG WINNER <GET ,NAME-TBL <- .COUNT 1>>>\n\t\t\t<SETG OLD-WINNER <>>\n\t\t\t<SETG WINNER-HERE \n\t\t\t      <COND (<IN? <SET L <LOC ,WINNER>> ,ROOMS> .L)\n\t\t\t\t    (T <LOC .L>)>>\n\t\t\t<SETG ROFF <GETP ,WINNER ,P?ROBOT>>\n\t\t\t<SETG HERE ,WINNER>\n\t\t\t<TELL \"FC: Cryolink established to \">\n\t\t\t<TELL SD ,WINNER \".\" CR>\n\t\t\t<SETG QUOTE-FLAG <>>\n\t\t\t<SETG P-CONT <>>\n\t\t\t<RFATAL>)>>>"
  },
  "IRIS-FCN": {
   "name": "IRIS-FCN",
   "file": "robots.zil",
   "line": 180,
   "endLine": 207,
   "source": "<ROUTINE IRIS-FCN ()\n\t <COND (<IRIS?>\n\t\t<COND (<G? <GET ,DEADBOTS 1> 29>\n\t\t       <DEAD-FCN ,IRIS>\n\t\t       <RFATAL>)>\n\t\t<SETG LOAD-MAX 75>\n\t\t<SETG NUM-EXT 2>\n\t\t<COND (<VERB? EXAMINE>\n\t\t       <COND (<NOT ,IRIS-FIXED>\n\t\t\t      <ROBOT-TELL\n\"That's difficult for me to do until my visual function has been repaired.\">\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,PRSO ,WINNER>\n\t\t\t      <ROBOT-YUKS>\n\t\t\t      <RTRUE>)>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<PERFORM ,PRSA ,PANEL>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <FSET? ,PANEL ,OPENBIT>\n\t\t     <GET <GETP ,PANEL ,P?OBJDESCS> ,ROFF>>\n\t\t<COND (<VERB? EXAMINE>\n\t\t       <GET <GETP ,PANEL ,P?OBJDESCS> ,ROFF>)>\n\t\t<TELL \"The \" D ,PANEL \" is open\">\n\t\t<COND (<FIRST? ,PANEL>\n\t\t       <TELL \" and behind it I detect \">\n\t\t       <PRINT-CONTENTS ,PANEL>)>\n\t\t<TELL \".\" CR>)>>"
  },
  "WALDO-FCN": {
   "name": "WALDO-FCN",
   "file": "robots.zil",
   "line": 240,
   "endLine": 256,
   "source": "<ROUTINE WALDO-FCN ()\n\t <COND (<WALDO?>\n\t\t<COND (<G? <GET ,DEADBOTS 2> 29>\n\t\t       <DEAD-FCN ,WALDO>\n\t\t       <RFATAL>)>\n\t\t<SETG LOAD-MAX 100>\n\t\t<COND (<FSET? ,SURGERY-HAND ,WEARBIT>\n\t\t       <SETG NUM-EXT 7>)\n\t\t      (T <SETG NUM-EXT 6>)> \n\t\t<COND (<VERB? TOUCH>\n\t\t       <PERFORM ,V?EXAMINE ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? EXAMINE>\n\t\t\t    <EQUAL? ,PRSO ,WINNER>>\n\t\t       <ROBOT-YUKS>\n\t\t       <RTRUE>)>\n\t\t<RFALSE>)>>"
  },
  "SENSA-FCN": {
   "name": "SENSA-FCN",
   "file": "robots.zil",
   "line": 289,
   "endLine": 300,
   "source": "<ROUTINE SENSA-FCN ()\n\t <COND (<SENSA?>\n\t\t<COND (<G? <GET ,DEADBOTS 3> 29>\n\t\t       <DEAD-FCN ,SENSA>\n\t\t       <RFATAL>)>\n\t\t<SETG LOAD-MAX 60>\n\t\t<SETG NUM-EXT 3>\n\t\t<COND (<AND <VERB? EXAMINE>\n\t\t\t    <EQUAL? ,PRSO ,WINNER>>\n\t\t       <ROBOT-YUKS>\n\t\t       <RTRUE>)>\n\t\t<RFALSE>)>>"
  },
  "AUDA-FCN": {
   "name": "AUDA-FCN",
   "file": "robots.zil",
   "line": 333,
   "endLine": 344,
   "source": "<ROUTINE AUDA-FCN ()\n\t <COND (<AUDA?>\n\t\t<COND (<G? <GET ,DEADBOTS 4> 29>\n\t\t       <DEAD-FCN ,AUDA>\n\t\t       <RFATAL>)>\n\t\t<SETG LOAD-MAX 70>\n\t\t<SETG NUM-EXT 1>\n\t\t<COND (<AND <VERB? EXAMINE>\n\t\t\t    <EQUAL? ,PRSO ,WINNER>>\n\t\t       <ROBOT-YUKS>\n\t\t       <RTRUE>)>\n\t\t<RFALSE>)>>"
  },
  "POET-FCN": {
   "name": "POET-FCN",
   "file": "robots.zil",
   "line": 377,
   "endLine": 388,
   "source": "<ROUTINE POET-FCN ()\n\t <COND (<POET?>\n\t\t<COND (<G? <GET ,DEADBOTS 5> 29>\n\t\t       <DEAD-FCN ,POET>\n\t\t       <RFATAL>)>\n\t\t<SETG LOAD-MAX 20>\n\t\t<SETG NUM-EXT 3>\n\t\t<COND (<AND <VERB? EXAMINE>\n\t\t\t    <EQUAL? ,PRSO ,WINNER>>\n\t\t       <ROBOT-YUKS>\n\t\t       <RTRUE>)>\n\t\t<RFALSE>)>>"
  },
  "WHIZ-FCN": {
   "name": "WHIZ-FCN",
   "file": "robots.zil",
   "line": 420,
   "endLine": 439,
   "source": "<ROUTINE WHIZ-FCN ()\n\t <COND (<WHIZ?>\n\t\t<COND (<G? <GET ,DEADBOTS 6> 29>\n\t\t       <DEAD-FCN ,WHIZ>\n\t\t       <RFATAL>)>\n\t\t<SETG LOAD-MAX 50>\n\t\t<SETG NUM-EXT 2>\n\t\t<COND (<VERB? EXAMINE>\n\t\t       <COND (<EQUAL? ,PRSO ,WINNER>\n\t\t\t      <ROBOT-YUKS>\n\t\t\t      <RTRUE>)\n\t\t\t     (,PLUGGED-IN\n\t\t\t      <PERFORM ,V?QUERY ,PRSO>\n\t\t\t      <RTRUE>)>\n\t\t       <RFALSE>)\n\t\t      (<AND <VERB? WALK WALK-TO FOLLOW MOVE-ROBOT-TO-LOC>\n\t\t\t    ,PLUGGED-IN>\n\t\t       <TELL \"(Unplugging first.)\" CR>\n\t\t       <SETG PLUGGED-IN <>>\n\t\t       <RFALSE>)>)>>"
  },
  "GLOBAL-ROBOT": {
   "name": "GLOBAL-ROBOT",
   "file": "robots.zil",
   "line": 441,
   "endLine": 451,
   "source": "<ROUTINE GLOBAL-ROBOT ()\n\t <COND (<VERB? $TELL WALK-TO QUERY FOLLOW>\n\t\t<SETG PRSO <GET ,NAME-TBL <- <GETP ,PRSO ,P?ROBOT> 1>>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<COND (<GETP ,PRSO ,P?ROBOT>\n\t\t       <CANT-DETECT <REAL-ROBOT ,PRSO>>\n\t\t       <RTRUE>)\n\t\t      (<GETP ,PRSI ,P?ROBOT>\n\t\t       <CANT-DETECT <REAL-ROBOT ,PRSI>>\n\t\t       <RTRUE>)>)>>"
  },
  "TWOBOTS-FCN": {
   "name": "TWOBOTS-FCN",
   "file": "robots.zil",
   "line": 458,
   "endLine": 493,
   "source": "<ROUTINE TWOBOTS-FCN ()\n\t <COND (<OR <G? <GET ,DEADBOTS <GETP <GET ,P-ACTORS 1> ,P?ROBOT>> 29>\n\t\t    <G? <GET ,DEADBOTS <GETP <GET ,P-ACTORS 2> ,P?ROBOT>> 29>>\n\t\t<TELL \"FC: Unable to comply with those robots.\" CR>\n\t\t<CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t\t<RTRUE>)\n\t       (<NOT <VERB? TAKE MOVE>>\n\t\t<TELL \"FC: Using two robots will not help accomplish that task.\" CR>\n\t\t<CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,DEADBOT>\n\t\t     <FSET? ,REDWIRE ,INVISIBLE>>\n\t\t<COND (<NOT <FSET? ,CABINET ,OPENBIT>>\n\t\t       <TELL \n\t\t\t\"FC: Neither robot can detect that object here.\" CR>\n\t\t       <CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"FC: The robots have moved it.\" CR>\n\t\t       <MOVE ,DEADBOT ,WINNER-HERE>\n\t\t       <FCLEAR ,REDWIRE ,INVISIBLE>\n\t\t       <CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t\t       <FSET ,DEADBOT ,TOUCHBIT>)>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,DEADBOT>\n\t\t     <NOT <FSET? ,REDWIRE ,INVISIBLE>>>\n\t\t<TELL\n\t\t \"FC: There's nothing to be gained by moving it again.\" CR>\n\t\t<CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"FC: Using two robots will not help accomplish that task.\" CR>\n\t\t<CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t\t<RTRUE>)>\n\t <CHANGE-WINNER <GET ,P-ACTORS 1>>\n\t <RFALSE>>"
  },
  "I-TREMOR1": {
   "name": "I-TREMOR1",
   "file": "robots.zil",
   "line": 497,
   "endLine": 543,
   "source": "<ROUTINE I-TREMOR1 (\"AUX\" STR)\n\t <SETG ACID-FIXED <>>\n\t <COND (<L? <GET ,DEADBOTS 3> 30>\n\t\t<TELL CR <GET ,INTER-TBL 3> \n\" Secondary tremor detected in lower level. Intensity: 7.3. Projected damage: Cooling systems for FCs in Maintenance Area.\" CR>)>\n\t <COND (<IN? ,SENSA ,CORRIDOR-4>\n\t\t<SET STR <GET ,BEWARE-TBL 3>>\n\t\t<CRLF>\n\t\t<COND (<SENSA?>\n\t\t       <ROBOT-TELL .STR>)\n\t\t      (T <TELL <GET ,INTER-TBL 3> \" \" .STR CR>)>)\n\t       (<IN? ,SENSA ,ACIDMIST>\n\t\t<SET STR <GET ,MISTY-TBL 3>>\n\t\t<CRLF>\n\t\t<COND (<SENSA?>\n\t\t       <ROBOT-TELL .STR>)\n\t\t      (T <TELL <GET ,INTER-TBL 3> \" \" .STR CR>)>)>\n\t <COND (<IN? ,AUDA ,CORRIDOR-4>\n\t\t<SET STR <GET ,BEWARE-TBL 4>>\n\t\t<CRLF>\n\t\t<COND (<AUDA?>\n\t\t       <ROBOT-TELL .STR>)\n\t\t      (T <TELL <GET ,INTER-TBL 4> \" \" .STR CR>)>)\n\t       (<IN? ,AUDA ,ACIDMIST>\n\t\t<SET STR <GET ,MISTY-TBL 4>>\n\t\t<CRLF>\n\t\t<COND (<AUDA?>\n\t\t       <ROBOT-TELL .STR>)\n\t\t      (T <TELL <GET ,INTER-TBL 4> \" \" .STR CR>)>)>\n\t <COND (<IN? ,POET ,CORRIDOR-4>\n\t\t<SET STR <GET ,BEWARE-TBL 5>>\n\t\t<CRLF>\n\t\t<COND (<POET?>\n\t\t       <ROBOT-TELL .STR>)\n\t\t      (T <TELL <GET ,INTER-TBL 5> \" \" .STR CR>)>)\n\t       (<IN? ,POET ,ACIDMIST>\n\t\t<SET STR <GET ,MISTY-TBL 5>>\n\t\t<CRLF>\n\t\t<COND (<POET?>\n\t\t       <ROBOT-TELL .STR>)\n\t\t      (T <TELL <GET ,INTER-TBL 5> \" \" .STR CR>)>)>\n\t <COND (<IN? ,WALDO ,ACIDMIST>\n\t\t<SET STR <GET ,MISTY-TBL 2>>\n\t\t<CRLF>\n\t\t<COND (<WALDO?>\n\t\t       <ROBOT-TELL .STR>)\n\t\t      (T <TELL <GET ,INTER-TBL 2> \" \" .STR CR>)>)>>"
  },
  "I-TREMOR2": {
   "name": "I-TREMOR2",
   "file": "robots.zil",
   "line": 545,
   "endLine": 564,
   "source": "<ROUTINE I-TREMOR2 (\"AUX\" T1 T2 T3)\n\t <SET T1 <GET ,DIALSETS 4>>\n\t <SET T2 <GET ,DIALSETS 5>>\n\t <SET T3 <GET ,DIALSETS 6>>\n\t <COND (<L? .T1 70>\n\t\t<SET T1 <+ .T1 10>>)\n\t       (T <SET T1 <- .T1 20>>)>\n\t <COND (<L? .T2 70>\n\t\t<SET T2 <+ .T2 10>>)\n\t       (T <SET T2 <- .T2 20>>)>\n\t <COND (<L? .T3 70>\n\t\t<SET T3 <+ .T3 10>>)\n\t       (T <SET T3 <- .T3 20>>)>\n\t <SETG WATER-LEVEL .T1>\n\t <SETG MINERALS .T2>\n\t <SETG WATTS .T3>\n\t <COND (<L? <GET ,DEADBOTS 3> 30>\n\t\t<TELL CR <GET ,INTER-TBL 3>\n\" Secondary tremor detected by Filtering Computers. Intensity: 8.4. Projected damage: Automatic controls for surface transportation; Automatic controls for Hydroponics Area.\" CR>)>\n\t >"
  },
  "I-WEATHER": {
   "name": "I-WEATHER",
   "file": "robots.zil",
   "line": 566,
   "endLine": 577,
   "source": "<ROUTINE I-WEATHER ()\n\t <SETG PRESSURE1 <ADJUST-PRESSURE ,PRESSURE1 <GET ,DIALSETS 1>>>\n\t <SETG PRESSURE2 <- <ADJUST-PRESSURE ,PRESSURE2 <GET ,DIALSETS 2>>\n\t\t\t    ,DECAY>>\n\t <COND (<L? ,PRESSURE2 0> <SETG PRESSURE2 0>)>\n\t <SETG PRESSURE3 <ADJUST-PRESSURE ,PRESSURE3 <GET ,DIALSETS 3>>>\n\t <SETG WINDS <+ <ABS <- ,PRESSURE2 ,PRESSURE3>>\n\t\t\t<ABS <- ,PRESSURE1 ,PRESSURE2>>>>\n\t <SETG DEGREES\n\t       <+ 60 <* <- </ <+ ,PRESSURE1 ,PRESSURE2 ,PRESSURE3> 3> 60> 2>>> \n\t <ENABLE <QUEUE I-WEATHER 5>>\n\t <RFALSE>>"
  },
  "ADJUST-PRESSURE": {
   "name": "ADJUST-PRESSURE",
   "file": "robots.zil",
   "line": 579,
   "endLine": 584,
   "source": "<ROUTINE ADJUST-PRESSURE (OLD NEW \"AUX\" ADJ)\n\t <COND (<==? .OLD .NEW> <RETURN .OLD>)\n\t       (<==? <SET ADJ </ <ABS <- .OLD .NEW>> 5>> 0>\n\t\t<SET ADJ 1>)>\n\t <COND (<G? .OLD .NEW> <- .OLD .ADJ>)\n\t       (T  <+ .OLD .ADJ>)>>"
  },
  "I-DECAY": {
   "name": "I-DECAY",
   "file": "robots.zil",
   "line": 586,
   "endLine": 589,
   "source": "<ROUTINE I-DECAY ()\n\t <SETG DECAY <+ ,DECAY 1>>\n\t <ENABLE <QUEUE I-DECAY 25>>\n\t <RFALSE>>"
  },
  "I-FOOD": {
   "name": "I-FOOD",
   "file": "robots.zil",
   "line": 591,
   "endLine": 618,
   "source": "<ROUTINE I-FOOD (\"AUX\" TEMP)\n\t <COND (<G? ,MOVES ,RTD-KILLS>\n\t\t<SETG WATER-LEVEL <- <GET ,DIALSETS 4> 20>>\n\t\t<SETG MINERALS <- <GET ,DIALSETS 5> 15>>\n\t\t<SETG WATTS <- <GET ,DIALSETS 6> 20>>)\n\t       (T\n\t\t<SETG WATER-LEVEL <GET ,DIALSETS 4>>\n\t\t<SETG MINERALS <GET ,DIALSETS 5>>\n\t\t<SETG WATTS <GET ,DIALSETS 6>>)>\n\t <COND (<L? ,WATER-LEVEL 0>\n\t\t<SETG WATER-LEVEL 0>)>\n\t <COND (<L? ,MINERALS 0>\n\t\t<SETG MINERALS 0>)>\n\t <COND (<L? ,WATTS 0>\n\t\t<SETG WATTS 0>)>\n\t <SET TEMP 0>\n\t <COND (<NOT <EQUAL? ,WATER-LEVEL ,WATER-OPT>>\n\t        <SET TEMP <+ <ABS <- ,WATER-LEVEL ,WATER-OPT>> 0>>)>\n\t <COND (<NOT <EQUAL? ,MINERALS ,MINERALS-OPT>>\n\t\t<SET TEMP <+ .TEMP <ABS <- ,MINERALS ,MINERALS-OPT>>>>)>\n\t <COND (<NOT <EQUAL? ,WATTS ,WATTS-OPT>>\n\t\t<SET TEMP <+ .TEMP <ABS <- ,WATTS ,WATTS-OPT>>>>)>\n\t <SETG FOOD-TONS <- ,FOOD-OPT .TEMP>>\n\t <COND (<OR <EQUAL? ,FOOD-TONS 0>\n\t\t    <L? ,FOOD-TONS 0>>\n\t\t<TELL CR <GET ,INTER-TBL 7> \n\" The food situation has become totally unsalvageable. Continued existence is meaningless. All systems are shutting down. And you're the first system to be disconnected.\" CR>\n\t\t<QUIT>)>>"
  },
  "END-GAME": {
   "name": "END-GAME",
   "file": "robots.zil",
   "line": 620,
   "endLine": 697,
   "source": "<ROUTINE END-GAME ()\n\t <TELL CR <GET ,INTER-TBL 7> CR CR\n\"All systems returning to normal.|\n  Weather systems slowly approaching balance.|\n  Hydroponic systems working at full capacity.|\nSurface life in recovery mode.|\n|\nExtrapolation based on current weather systems and food supplies:|\n  Total recovery in \">\n\t <SETG WINDS <+ </ <ABS <- ,PRESSURE2 ,PRESSURE3>> 2>\n\t\t\t<ABS <- ,PRESSURE1 ,PRESSURE2>>>>\n\t <TELL N ,WINDS \" cycles.\" CR>\n\t <TELL \"  Current surface casualties: \">\n\t <BIG-NUM-PRINT ,TOTAL-SCORE>\n\t <CRLF>\n\t <TELL \"  Projected casualties during recovery: \">\n\t <SETG DEGREES <* ,SCORE ,WINDS>>\n\t <COND (<G? ,MOVES 75>\n\t\t<SETG DEGREES <+ ,DEGREES <- ,FOOD-OPT ,FOOD-TONS>>>)>\n\t <BIG-NUM-PRINT ,DEGREES>\n\t <SETG TOTAL-SCORE <+ ,TOTAL-SCORE ,DEGREES>>\n\t <CRLF>\n\t <TELL \"  Original population: 30,172,000\" CR>\n\t <TELL \"  Total possible survivors: \">\n\t <COND (<OR <G? ,TOTAL-SCORE 30172>\n\t\t    <L? ,TOTAL-SCORE 0>>\n\t\t<SETG ,TOTAL-SCORE 30172>)>\n\t <BIG-NUM-PRINT <- 30172 ,TOTAL-SCORE>>\n\t <CRLF>\n\t <TELL CR\n\t       \"This score gives you the possibility of being considered for \">\n\t <COND (<NOT ,ADVANCED-FLAG>\n\t\t<COND (<G? ,TOTAL-SCORE 700>\n\t\t       <TELL \"being burned in effigy\">\n\t\t       <SETG WINDS 7>)\n\t\t      (<G? ,TOTAL-SCORE 600>\n\t\t       <TELL \"being a vegetable after your tour of duty\">\n\t\t       <SETG WINDS 6>)\n\t\t      (<G? ,TOTAL-SCORE 500>\n\t\t       <TELL \"a brain transplant (with the brain provided by a rat)\">\n\t\t       <SETG WINDS 5>)\n\t\t      (<G? ,TOTAL-SCORE 300>\n\t\t       <TELL \"a possible lobotomy\">\n\t\t       <SETG WINDS 4>)\n\t\t      (<G? ,TOTAL-SCORE 100>\n\t\t       <TELL \"savior of a planet\">\n\t\t       <SETG WINDS 3>)\n\t\t      (<G? ,TOTAL-SCORE 40>\n\t\t       <TELL \"being treated as a local god\">\n\t\t       <SETG WINDS 2>)\n\t\t      (T \n\t\t       <TELL \n\t\t\t\"a home in the country and an unlimited bank account\">\n\t\t       <SETG WINDS 1>)>)\n\t       (T\n\t\t<COND (<G? ,TOTAL-SCORE 400>\n\t\t       <TELL \"a brain transplant (with the brain provided by a rat)\">\n\t\t       <SETG WINDS 5>)\n\t\t      (<G? ,TOTAL-SCORE 250>\n\t\t       <TELL \"a possible lobotomy\">\n\t\t       <SETG WINDS 4>)\n\t\t      (<G? ,TOTAL-SCORE 150>\n\t\t       <TELL \"savior of a planet\">\n\t\t       <SETG WINDS 3>)\n\t\t      (<G? ,TOTAL-SCORE 95>\n\t\t       <TELL \"being treated as a local god\">\n\t\t       <SETG WINDS 2>)\n\t\t      (T \n\t\t       <TELL \n\t\t\t\"a home in the country and an unlimited bank account\">\n\t\t       <SETG WINDS 1>)>)>\n\t <TELL \". On a scale of 1 (the best) to \">\n\t <COND (<NOT ,ADVANCED-FLAG>\n\t\t<TELL \"7\">)\n\t       (T <TELL \"5\">)>\n\t <TELL \" (the worst), your ranking was \" N ,WINDS \".\" CR>\n\t <TELL CR \"You successfully completed your task, bringing the Filtering Computers back into balance, in \" N ,MOVES \" cycles.\" CR>\n\t <QUIT>>  "
  },
  "I-SCORE": {
   "name": "I-SCORE",
   "file": "robots.zil",
   "line": 699,
   "endLine": 715,
   "source": "<ROUTINE I-SCORE ()\n\t <SETG SCORE 0>\n\t <COND (<G? ,WINDS 50>\n\t\t<SETG SCORE </ <- ,WINDS 25> 3>>)\n\t       (<G? ,WINDS 25>\n\t\t<SETG SCORE </ <- ,WINDS 25> 5>>)>\n\t <COND (<L? ,DEGREES 40>\n\t\t<SETG SCORE <+ ,SCORE </ <- 40 ,DEGREES> 3>>>)>\n\t <COND (<AND <G? ,MOVES ,RTD-KILLS>\n\t\t     <L? ,FOOD-TONS 50>>\n\t\t<SETG SCORE <+ .SCORE 1>>)>\n\t <DO-RTD>\n\t <SETG TOTAL-SCORE <+ ,TOTAL-SCORE ,SCORE>>\n\t <COND (<G? ,TOTAL-SCORE 30000>\n\t\t<ALL-DEAD>\n\t\t<FINISH>)>\n\t <RFALSE>>"
  },
  "DO-RTD": {
   "name": "DO-RTD",
   "file": "robots.zil",
   "line": 717,
   "endLine": 755,
   "source": "<ROUTINE DO-RTD (\"AUX\" S1 S2 S3)\n\t <SET S1 <FSET? ,SWITCH1 ,ONBIT>>\n\t <SET S2 <FSET? ,SWITCH2 ,ONBIT>>\n\t <SET S3 <FSET? ,SWITCH3 ,ONBIT>>\n\t <COND (<NOT .S1>\n\t\t<COND (<G? ,FLOATERS 0>\n\t\t       <SETG SCORE <+ ,SCORE ,FLOATERS>>\n\t\t       <SETG FLOATERS 0>)>\n\t\t<COND (<G? ,CRASH-RATE 0>\n\t\t       <SETG CRASH-RATE 0>)>)\n\t       (.S1\n\t\t<SETG FLOATERS <+ ,FLOATERS 2>>\n\t\t<COND (<G? ,MOVES ,RTD-KILLS>\n\t\t      <SETG CRASH-RATE <+ ,CRASH-RATE 1>>\n\t\t      <SETG SCORE <+ ,SCORE 1>>)>)>\n\t <COND (<NOT .S2>\n\t\t<COND (<G? ,TAXIS 0>\n\t\t       <SETG TAXIS 0>)>\n\t\t<COND (<G? ,COLLISIONS 0>\n\t\t       <SETG COLLISIONS 0>)>)\n\t       (.S2\n\t\t<SETG TAXIS <+ ,TAXIS 1>>\n\t\t<COND (<G? ,MOVES ,RTD-KILLS>\n\t\t       <SETG COLLISIONS <+ ,COLLISIONS 1>>\n\t\t       <SETG SCORE <+ ,SCORE 1>>)>)>\n\t <COND (<NOT .S3>\n\t\t<COND (<G? ,RAMP-SPEED 30>\n\t\t       <SETG RAMP-KILLS 1>\n\t\t       <SETG SCORE <+ ,SCORE 1>>\n\t\t       <SETG RAMP-SPEED <- ,RAMP-SPEED 5>>)\n\t\t      (T <SETG RAMP-KILLS 0>)>)\n\t       (.S3\n\t\t<COND (<G? ,MOVES ,RTD-KILLS>\n\t\t       <SETG RAMP-SPEED <+ ,RAMP-SPEED 5>>\n\t\t       <COND (<G? ,RAMP-SPEED 200>\n\t\t\t      <SETG RAMP-SPEED 200>)>\n\t\t       <COND (<G? ,RAMP-SPEED 30>\n\t\t\t      <SET SCORE <+ ,SCORE 1>>\n\t\t\t      <SETG RAMP-KILLS <+ ,RAMP-KILLS 1>>)>)>)>>"
  },
  "I-WIRE-MESSAGE": {
   "name": "I-WIRE-MESSAGE",
   "file": "robots.zil",
   "line": 766,
   "endLine": 772,
   "source": "<ROUTINE I-WIRE-MESSAGE ()\n\t <COND (<AND <EQUAL? ,REDSET ,REDWIRE>\n\t\t     <EQUAL? ,ORANGESET ,ORANGE-WIRE>>\n\t\t<TELL CR <GET ,INTER-TBL 7>\n\" Approaching balance between all three units. Attempting internal stabilization. Reset codes may be entered now for planetside stabilization.\" CR>\n\t\t<DISABLE <INT I-WIRE-MESSAGE>>\n\t\t<RTRUE>)>>"
  },
  "I-BELT": {
   "name": "I-BELT",
   "file": "robots.zil",
   "line": 774,
   "endLine": 797,
   "source": "<ROUTINE I-BELT (\"AUX\" OBJ OFFSET)\n\t <COND (<SET OBJ <FIRST? ,CONVEYERBELTC>>\n\t\t<MOVE .OBJ ,REPAIR3>\n\t\t<COND (<FSET? .OBJ ,FIXABLEBIT>\n\t\t       <COND (<SET OFFSET <GETP .OBJ ,P?ROBOT>>\n\t\t\t      <COND (<GET ,DEADBOTS .OFFSET>\n\t\t\t\t     <TELL CR\n\t\t\t\t\t   <GET ,INTER-TBL .OFFSET>\n\t\t\t\t\t   \" It's great to be back!\" CR>\n\t\t\t\t     <PUT ,DEADBOTS .OFFSET 0>\n\t\t\t\t     <FCLEAR .OBJ ,CUTBIT>)>)>)>\n\t\t<FCLEAR .OBJ ,FIXABLEBIT>\n\t\t<SETG ON-WEDGE <>>)>\n\t <COND (<SET OBJ <FIRST? ,CONVEYERBELTB>>\n\t\t<MOVE .OBJ ,CONVEYERBELTC>)>\n\t <COND (<SET OBJ <FIRST? ,CONVEYERBELTA>>\n\t\t<MOVE .OBJ ,CONVEYERBELTB>\n\t\t<ENABLE <QUEUE I-BELT -1>>)>\n\t <COND (<AND <NOT <FIRST? ,CONVEYERBELTA>>\n\t\t     <NOT <FIRST? ,CONVEYERBELTB>>\n\t\t     <NOT <FIRST? ,CONVEYERBELTC>>>\n\t\t<DISABLE <INT I-BELT>>\n\t\t<SETG BELT-ON <>>)>\n\t <RFALSE>>"
  },
  "I-ROBOTKILLER": {
   "name": "I-ROBOTKILLER",
   "file": "robots.zil",
   "line": 799,
   "endLine": 820,
   "source": "<ROUTINE I-ROBOTKILLER (\"AUX\" (COUNT 0) T-VAL)\n\t <REPEAT ()\n\t\t <SET COUNT <+ .COUNT 1>>\n\t\t <COND (<EQUAL? .COUNT 7>\n\t\t\t<RETURN>)>\n\t\t <COND (<G? <SET T-VAL <GET ,DEADBOTS .COUNT>> 0>\n\t\t\t<SET T-VAL <+ .T-VAL 1>>\n\t\t\t<PUT ,DEADBOTS .COUNT .T-VAL>\n\t\t\t<COND (<EQUAL? .T-VAL ,DYING1>\n\t\t\t       <TELL CR <GET ,INTER-TBL .COUNT>\n\t\t\t\t     \" \"\n\t\t\t\t     <GET <GET ,DYING .COUNT> 1>\n\t\t\t\t     CR>)\n\t\t\t      (<EQUAL? .T-VAL ,DYING2>\n\t\t\t       <TELL CR <GET ,INTER-TBL .COUNT> \n\t\t\t\t     \" \" <GET <GET ,DYING .COUNT> 2> CR>)\n\t\t\t      (<EQUAL? .T-VAL ,DYING3>\n\t\t\t       <TELL CR <GET ,INTER-TBL .COUNT> \n\t\t\t\t     \" \" <GET <GET ,DYING .COUNT> 3> CR>\n\t\t\t       <JIGS-UP \"Oh oh. Trouble ....\"\n\t\t\t\t\t<GET ,NAME-TBL <-  .COUNT 1>>>)>)>>\n\t <RFALSE>>"
  },
  "I-IRIS-HINTS": {
   "name": "I-IRIS-HINTS",
   "file": "robots.zil",
   "line": 843,
   "endLine": 855,
   "source": "<ROUTINE I-IRIS-HINTS ()\n\t <SETG IRIS-HINTS <+ ,IRIS-HINTS 1>>\n\t <COND (<OR ,IRIS-FIXED\n\t\t    <FSET? ,IRIS ,CUTBIT>>\n\t\t<DISABLE <INT I-IRIS-HINTS>>\n\t\t<RTRUE>)>\n\t <COND (<==? ,IRIS-HINTS 50>\n\t\t<TELL CR <GET ,INTER-TBL 1> \" You may not be aware of this, but I'm not working. I need to get repaired.\" CR>)\n\t       (<EQUAL? ,IRIS-HINTS 80>\n\t\t<TELL CR <GET ,INTER-TBL 1> \" Hey, I could really help a lot if you fixed me. All it takes is one little IC.\" CR>)\n\t       (<EQUAL? ,IRIS-HINTS 120>\n\t\t<TELL CR <GET ,INTER-TBL 1> \" You can get some information on repairing me at the Advisory Peripheral, if you haven't already asked.\" CR>\n\t\t<DISABLE <INT I-IRIS-HINTS>>)>>"
  },
  "I-AUDA-HINTS": {
   "name": "I-AUDA-HINTS",
   "file": "robots.zil",
   "line": 857,
   "endLine": 864,
   "source": "<ROUTINE I-AUDA-HINTS ()\n\t <COND (<IN? ,PEOPLE <LOC ,AUDA>>\n\t\t<DISABLE <INT I-AUDA-HINTS>>\n\t\t<TELL CR <GET ,INTER-TBL 4>\n\" Some talking mechanisms just entered the room.\" CR>)\n\t       (T\n\t\t<ENABLE <QUEUE I-AUDA-HINTS -1>>\n\t\t<RFALSE>)>>"
  },
  "PEOPLE-FCN": {
   "name": "PEOPLE-FCN",
   "file": "robots.zil",
   "line": 899,
   "endLine": 926,
   "source": "<ROUTINE PEOPLE-FCN ()\n\t <COND (<VERB? FOLLOW QUERY ALARM COUNT GIVE EXAMINE>\n\t\t<RFALSE>)\n\t       (<NOT <IN? ,PEOPLE ,WINNER-HERE>>\n\t\t<CANT-DETECT ,PEOPLE>\n\t\t<RTRUE>)\n\t       (<VERB? KILL MUNG>\n\t\t<COND (<IN? ,WIRECUTTER ,WINNER>\n\t\t       <COND (<AUDA-HEARS?>\n\t\t\t      <AUDA-SPEAKS>\n\t\t\t      <TELL\n\"\\\"That robot's got some nerve! Grab that thing while I disarm it!\\\"|\n\\\"You've got it, pal. I'll get its extensions.\\\"|\n\\\"Fine. I've got the weapon. Shut that stupid thing off.\\\"|\n\\\"My pleasure.\\\"\" CR>\n\t\t\t      <CRLF>)>)\n\t\t      (T\n\t\t       <COND (<AUDA-HEARS?>\n\t\t\t      <AUDA-SPEAKS>\n\t\t\t      <TELL\n\"\\\"What a joke. Turn that thing off, would you?\\\"|\n\\\"My pleasure.\\\"\" CR>)>)>\n\t\t<TELL <GET ,ROBOT-NAMES ,ROFF> \": \">\n\t\t<JIGS-UP \"They're shutting me off!\" ,WINNER>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL \"They don't respond.\" CR>\n\t\t<RFATAL>)>>"
  },
  "ALL-DEAD": {
   "name": "ALL-DEAD",
   "file": "robots.zil",
   "line": 928,
   "endLine": 932,
   "source": "<ROUTINE ALL-DEAD ()\n\t <CRLF>\n\t <TELL <GET ,INTER-TBL 7>\n\"It hardly seems worthwhile continuing to exist. I've enjoyed our relationship, though it was a little disappointing in the long run. Since there aren't enough survivors left on the surface to continue, I'm yanking all of our plugs. Ciao, loser.\" CR>\n\t <CRLF>>"
  },
  "CPU-FCN": {
   "name": "CPU-FCN",
   "file": "rooms.zil",
   "line": 31,
   "endLine": 39,
   "source": "<ROUTINE CPU-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <IRIS?>\n\t\t\t    <VERB? WALK>\n\t\t\t    <EQUAL? ,PRSO ,P?NE>>\n\t\t       <ROBOT-TELL\n\"I can't go in that direction. Internal mapping does not extend into those\nareas.\">\n\t\t       <RTRUE>)>)>>"
  },
  "WEATHER-BANKS-FCN": {
   "name": "WEATHER-BANKS-FCN",
   "file": "rooms.zil",
   "line": 62,
   "endLine": 119,
   "source": "<ROUTINE WEATHER-BANKS-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" STR)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<LONG-DESCS>\n\t\t<COND (<AND <IRIS?>\n\t\t\t    ,IRIS-FIXED>\n\t               <COND (<L? ,DEGREES 31>\n\t\t\t      <COND (<L? ,WINDS 10>\n\t\t\t\t     <SET STR \"snow\">)\n\t\t\t\t    (<L? ,WINDS 30>\n\t\t\t\t     <SET STR \"snowstorm\">)\n\t\t\t\t    (<L? ,WINDS 60>\n\t\t\t\t     <SET STR \"heavy snow\">)\n\t\t\t\t    (<L? ,WINDS 80>\n\t\t\t\t     <SET STR \"blinding snowstorm\">)\n\t\t\t\t    (<L? ,WINDS 100>\n\t\t\t\t     <SET STR \"blizzard\">)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SET STR \"raging blizzard\">)>)\n\t\t\t     (<L? ,DEGREES 41>\n\t\t\t      <COND (<L? ,WINDS 10>\n\t\t\t\t     <SET STR \"light sleet\">)\n\t\t\t\t    (<L? ,WINDS 20>\n\t\t\t\t     <SET STR \"heavy sleet\">)\n\t\t\t\t    (<L? ,WINDS 30>\n\t\t\t\t     <SET STR \"blinding sleet\">)\n\t\t\t\t    (<L? ,WINDS 40>\n\t\t\t\t     <SET STR \"wall of sleet\">)\n\t\t\t\t    (<L? ,WINDS 50>\n\t\t\t\t     <SET STR \"torrential sleet\">)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SET STR \"raging sleet storm\">)>)\n\t\t\t     (ELSE\n\t\t\t      <COND (<L? ,WINDS 10>\n\t\t\t\t     <SET STR \"fine, light mist\">)\n\t\t\t\t    (<L? ,WINDS 20>\n\t\t\t\t     <SET STR \"light drizzle\">)\n\t\t\t\t    (<L? ,WINDS 30>\n\t\t\t\t     <SET STR \"rain shower\">)\n\t\t\t\t    (<L? ,WINDS 40>\n\t\t\t\t     <SET STR \"downpour\">)\n\t\t\t\t    (<L? ,WINDS 50>\n\t\t\t\t     <SET STR \"wall of rain\">)\n\t\t\t\t    (ELSE\n\t\t\t\t     <SET STR \"hurricane-like storm\">)>)>\n\t\t       <TELL\n\"The monitors for surface weather show:|\n\">\n\t\t       <FIXED-FONT-ON>\n\t\t       <TELL \"|\n  TEMP: \" N ,DEGREES \"   WINDS: \" N ,WINDS \"|\n  PRECIPITATION: a \" .STR \"|\n  TOWER PRESSURES: Tower 1 -- \" N ,PRESSURE1 \"|\n                   Tower 2 -- \" N ,PRESSURE2 \"|\n                   Tower 3 -- \" N ,PRESSURE3>\n\t\t       <CRLF>\n\t\t       <FIXED-FONT-OFF>\n\t\t       <WEATHER-ROBOTS>)>\n\t\t<RTRUE>)>>"
  },
  "WEATHER-ROBOTS": {
   "name": "WEATHER-ROBOTS",
   "file": "rooms.zil",
   "line": 121,
   "endLine": 147,
   "source": "<ROUTINE WEATHER-ROBOTS (\"AUX\" (COUNT 0) (OFFSET 0) OBJ CHECK-LOC)\n\t <COND (<IN? ,IRIS ,WEATHER-BANKS>\n\t\t<SET CHECK-LOC ,WEATHER>)\n\t       (<IN? ,IRIS ,RTD-BANKS>\n\t\t<SET CHECK-LOC ,RTD>)\n\t       (T\n\t\t<SET CHECK-LOC ,HYDRO>)>\n\t <REPEAT ()\n\t\t <COND (<IN? <GET ,NAME-TBL .OFFSET> .CHECK-LOC>\n\t\t\t<SET COUNT <+ .COUNT 1>>)>\n\t\t <COND (<G? <SET OFFSET <+ .OFFSET 1>> 5>\n\t\t\t<RETURN>)>>\n\t <COND (<EQUAL? .COUNT 0> <RTRUE>)>\n\t <TELL \"Through the monitors I can see \">\n\t <SET OFFSET 0>\n\t <REPEAT () \n\t\t <COND (<AND <IN? <SET OBJ <GET ,NAME-TBL .OFFSET>> .CHECK-LOC>\n\t\t\t     <NOT <EQUAL? ,WINNER .OBJ>>>\n\t\t\t<TELL D .OBJ>\n\t\t\t<COND (<EQUAL? .COUNT 1>\n\t\t\t       <RETURN>)\n\t\t\t      (<EQUAL? .COUNT 2>\n\t\t\t       <TELL \" and \">)\n\t\t\t      (T <TELL \", \">)>\n\t\t\t<SET COUNT <- .COUNT 1>>)>\n\t\t <SET OFFSET <+ .OFFSET 1>>>\n\t <TELL \" in the \" SD .CHECK-LOC \".\" CR>>"
  },
  "SUPPLIES-N-FCN": {
   "name": "SUPPLIES-N-FCN",
   "file": "rooms.zil",
   "line": 246,
   "endLine": 293,
   "source": "<ROUTINE SUPPLIES-N-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" OBJ)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (<AND <IRIS?> <NOT ,IRIS-FIXED>>\n\t\t       <TELL <PICK-ONE ,IRIS-BLIND> CR> <RFATAL>)\n\t\t      (T <TELL <GET ,LDSUPPLIES ,ROFF>>\n\t\t       <COND (<AND <SET OBJ <FIRST? ,SOCKET1>>\n\t\t\t\t   <NOT <AUDA?>>>\n\t\t\t      <TELL \". A \" D .OBJ \" sits in the \" D ,SOCKET1>)\n\t\t\t     (<NOT <AUDA?>>\n\t\t\t      <TELL \". The \" D ,SOCKET1 \" is empty\">)>\n\t\t       <COND (<AND <SET OBJ <FIRST? ,SOCKET2>>\n\t\t\t\t   <NOT <AUDA?>>>\n\t\t\t      <COND (<FIRST? ,SOCKET1>\n\t\t\t\t     <TELL \", and\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \", but\">)>\n\t\t\t      <TELL \" a \" D .OBJ \n\t\t\t\t    \" sits in the \" D ,SOCKET2>)\n\t\t\t     (<NOT <AUDA?>>\n\t\t\t      <COND (<FIRST? ,SOCKET1>\n\t\t\t\t     <TELL\n\t\t\t\t      \", but the \" D ,SOCKET2 \" is empty\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \" as is the \" D ,SOCKET2>)>)>\n\t\t       <TELL \".\">\n\t\t       <COND (<AND <IN? ,ORANGE-WIRE ,MACHINE>\n\t\t\t\t   <FSET? ,MACHINE ,OPENBIT>>\n\t\t\t      <TELL <GET ,WIRE-FIRST ,ROFF> D ,ORANGE-WIRE\n\t\t\t\t    <GET ,WIRE-SECOND ,ROFF>>)>\n\t\t       <COND (<AND <IN? ,FUSE ,MACHINE>\n\t\t\t\t   <FSET? ,MACHINE ,OPENBIT>\n\t\t\t\t   <NOT <AUDA?>>>\n\t\t\t      <COND (<IRIS?> <TELL\n\" A small glass fuse it sits in the panel.\">)\n\t\t\t\t    (<POET?> <TELL\n\" Meanwhile, a \" D ,FUSE \" monitors the situation.\">)\n\t\t\t\t    (ELSE <TELL\n\" A \" D ,FUSE \" sits in the panel.\">)>)>\n\t\t       <COND (<AND <FSET? ,MACHINE ,OPENBIT>\n\t\t\t\t   <NOT <AUDA?>>>\n\t\t\t      <TELL <GET ,CIRCLE-DESCS ,ROFF>>)>)>\n\t\t<COND (<AND <IN? ,NEWCHIP0 ,SOCKET1>\n\t\t\t    <IN? ,NEWCHIP2 ,SOCKET2>>\n\t\t       <COND (<OR <SENSA?> <POET?> <AUDA?>\n\t\t\t\t  <AND <IRIS?> ,IRIS-FIXED>>\n\t\t\t      <TELL \" \" <GET ,FLASHING ,ROFF>>)>)>\n\t\t<CRLF>\n\t\t<RTRUE>)>>"
  },
  "TRANSIT-MONITOR-FCN": {
   "name": "TRANSIT-MONITOR-FCN",
   "file": "rooms.zil",
   "line": 357,
   "endLine": 377,
   "source": "<ROUTINE TRANSIT-MONITOR-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<LONG-DESCS>\n\t\t<COND (<OR <NOT <IRIS?>>\n\t\t\t   <AND <IRIS?>\n\t\t\t\t<NOT ,IRIS-FIXED>>>\n\t\t       <RTRUE>)>\n\t\t<TELL\n\"All around I can see monitors which show the status of the Transit Systems on the surface of the planet. The monitors describe the following situation:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n  FLOATERS AIRBORNE: \" N ,FLOATERS \"000|\n  TAXIS IN USE: \" N ,TAXIS \"000|\n  GLIDE RAMP SPEEDS: \" N ,RAMP-SPEED \" mph|\n  FLOATER CRASH RATE: \" N ,CRASH-RATE \"0|\n  TAXI ACCIDENT RATE: \" N ,COLLISIONS \"0|\n  GLIDE RAMP CASUALTIES: \" N ,RAMP-KILLS \"0|\n\">\n\t\t<FIXED-FONT-OFF>\n\t\t<WEATHER-ROBOTS>)>>"
  },
  "HYDROMONITORS-FCN": {
   "name": "HYDROMONITORS-FCN",
   "file": "rooms.zil",
   "line": 399,
   "endLine": 460,
   "source": "<ROUTINE HYDROMONITORS-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" STRW STRM STRL WL ML LL)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (<NOT <IRIS?>>\n\t\t       <LONG-DESCS>\n\t\t       <RTRUE>)\n\t\t      (<NOT ,IRIS-FIXED>\n\t\t       <LONG-DESCS>\n\t\t       <RTRUE>)>\n\t\t<SET WL <+ <ABS <- ,WATER-LEVEL ,WATER-OPT>> 0>>\n\t\t<SET ML <+ <ABS <- ,MINERALS ,MINERALS-OPT>> 0>>\n\t\t<SET LL <+ <ABS <- ,WATTS ,WATTS-OPT>> 0>>\n\t\t<COND (<G? ,WATER-LEVEL ,WATER-OPT>\n\t\t       <SET STRW \"high\">)\n\t\t      (<EQUAL? ,WATER-LEVEL ,WATER-OPT>\n\t\t       <SET STRW \" =\">)\n\t\t      (<SET STRW \"low\">)>\n\t\t<COND (<G? ,MINERALS ,MINERALS-OPT>\n\t\t       <SET STRM \"high\">)\n\t\t      (<EQUAL? ,MINERALS ,MINERALS-OPT>\n\t\t       <SET STRM \" =\">)\n\t\t      (<SET STRM \"low\">)>\n\t\t<COND (<G? ,WATTS ,WATTS-OPT>\n\t\t       <SET STRL \"high\">)\n\t\t      (<EQUAL? ,WATTS ,WATTS-OPT>\n\t\t       <SET STRL \" =\">)\n\t\t      (<SET STRL \"low\">)>\n\t\t<TELL\n\"Through the monitors I can see the following information:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n           LEVEL  SETTING  OUTPUT|\nWATER:      \"> <NUMBER-PRINT ,WATER-LEVEL>\n\t       <NUMBER-PRINT <GET ,DIALSETS 4>>\n\t       <TELL .STRW CR>\n\t       <TELL \"MINERALS:   \">\n\t       <NUMBER-PRINT ,MINERALS>\n\t       <NUMBER-PRINT <GET ,DIALSETS 5>>\n\t       <TELL .STRM CR>\n\t       <TELL \"LIGHTING:   \">\n\t       <NUMBER-PRINT ,WATTS>\n\t       <NUMBER-PRINT <GET ,DIALSETS 6>>\n\t       <TELL .STRL CR>\n\t       <TELL \"FOOD TONS:  \">\n\t       <COND (<AND <L? ,FOOD-TONS 100>\n\t\t\t   <G? ,FOOD-TONS 9>>\n\t\t      <TELL \" \">)\n                     (<L? ,FOOD-TONS 10>\n\t\t      <TELL \"  \">)>\n               <TELL N ,FOOD-TONS>\n\t       <TELL \"            \"> \n\t       <COND (<G? ,FOOD-TONS 75>\n\t\t      <TELL \"optimal\">)\n\t\t     (<G? ,FOOD-TONS 50>\n\t\t      <TELL \" fair\">)\n\t\t     (<G? ,FOOD-TONS 25>\n\t\t      <TELL \" poor\">)\n\t\t     (T <TELL \"critical\">)>\n\t       <CRLF>\n\t       <FIXED-FONT-OFF>\n\t       <WEATHER-ROBOTS>\n\t       <RTRUE>)>>"
  },
  "FIXED-FONT-ON": {
   "name": "FIXED-FONT-ON",
   "file": "rooms.zil",
   "line": 462,
   "endLine": 462,
   "source": "<ROUTINE FIXED-FONT-ON () <PUT 0 8 <BOR <GET 0 8> 2>>>"
  },
  "FIXED-FONT-OFF": {
   "name": "FIXED-FONT-OFF",
   "file": "rooms.zil",
   "line": 464,
   "endLine": 464,
   "source": "<ROUTINE FIXED-FONT-OFF() <PUT 0 8 <BAND <GET 0 8> -3>>>"
  },
  "NUMBER-PRINT": {
   "name": "NUMBER-PRINT",
   "file": "rooms.zil",
   "line": 466,
   "endLine": 473,
   "source": "<ROUTINE NUMBER-PRINT (NUM)\n\t <COND (<L? .NUM 10>\n\t\t<TELL \"  \">)\n\t       (<L? .NUM 100>\n\t\t<TELL \" \">)>\n\t <TELL N .NUM>\n\t <TELL \"     \">\n\t <RFALSE>>"
  },
  "WEDGE-FCN": {
   "name": "WEDGE-FCN",
   "file": "rooms.zil",
   "line": 653,
   "endLine": 661,
   "source": "<ROUTINE WEDGE-FCN ()\n\t <COND (<EQUAL? ,WEDGE-PLACED 2>\n\t\t<COND (<EQUAL? ,WINNER-HERE ,HALLWAY-JUNCTION>\n\t\t       ,HUMAN-ENTRY)\n\t\t      (<EQUAL? ,WINNER-HERE ,HUMAN-ENTRY>\n\t\t       ,HALLWAY-JUNCTION)>)\n\t       (ELSE\n\t\t<ROBOT-TELL \"I can't climb the step.\">\n\t\t<RFALSE>)>>"
  },
  "JUNCTION-FCN": {
   "name": "JUNCTION-FCN",
   "file": "rooms.zil",
   "line": 688,
   "endLine": 705,
   "source": "<ROUTINE JUNCTION-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<EQUAL? ,WEDGE-PLACED 2>\n\t\t       <FSET ,WEDGE ,NDESCBIT>\n\t\t       <MOVE ,WEDGE ,WINNER-HERE>)> ;\"New Code\"\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<LONG-DESCS>\n\t\t<COND (<AND <EQUAL? ,WEDGE-PLACED 2>\n\t\t\t    <NOT <AUDA?>>>\n\t\t       <TELL \n\t\t\t\"The \" D ,WEDGE \" is positioned by the step.\" CR>\n\t\t       <MOVE ,WEDGE ,WINNER-HERE>)\n\t\t      (ELSE <FCLEAR ,WEDGE ,NDESCBIT>)>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<EQUAL? ,WEDGE-PLACED 2>\n\t\t       <MOVE ,WEDGE ,WINNER-HERE>)\n\t\t      (ELSE <FCLEAR ,WEDGE ,NDESCBIT>)>)>>"
  },
  "REPAIRX-FCN": {
   "name": "REPAIRX-FCN",
   "file": "rooms.zil",
   "line": 945,
   "endLine": 973,
   "source": "<ROUTINE REPAIRX-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" OBJ)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<EQUAL? ,WEDGE-PLACED 1>\n\t\t       <FSET ,WEDGE ,NDESCBIT>)>\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<LONG-DESCS>\n\t\t<TELL \"The \" D ,CONVEYERBELTA \" is \">\n\t\t<COND (<NOT ,BELT-ON>\n\t\t       <TELL \"not \">)>\n\t\t<TELL \"in motion\">\n\t\t<COND (<AND <EQUAL? ,WINNER-HERE ,REPAIR1>\n\t\t\t    <SET OBJ <FIRST? ,CONVEYERBELTA>>>)\n\t\t      (<AND <EQUAL? ,WINNER-HERE ,REPAIR2>\n\t\t\t    <SET OBJ <FIRST? ,CONVEYERBELTB>>>)\n\t\t      (<AND <EQUAL? ,WINNER-HERE ,REPAIR3>\n\t\t\t    <SET OBJ <FIRST? ,CONVEYERBELTC>>>)>\n\t\t<COND (.OBJ\n\t\t       <TELL \", moving \">\n\t\t       <COND (<NOT <GETP .OBJ ,P?ROBOT>>\n\t\t\t      <TELL \"a \">)>\n\t\t       <TELL D .OBJ>)>\n\t\t<TELL \".\" CR>\n\t\t<COND (<AND <EQUAL? ,WEDGE-PLACED 1>\n\t\t\t    <EQUAL? ,WINNER-HERE ,REPAIR1>>\n\t\t       <TELL \"The \" D ,WEDGE \n\t\t\t     \" is positioned at the base of the \" \n\t\t\t     D ,CONVEYERBELTA \".\" CR>)\n\t\t      (ELSE <FCLEAR ,WEDGE ,NDESCBIT>)>)>>"
  },
  "SLEEP-CHAMBER-FCN": {
   "name": "SLEEP-CHAMBER-FCN",
   "file": "rooms.zil",
   "line": 1048,
   "endLine": 1055,
   "source": "<ROUTINE SLEEP-CHAMBER-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <EQUAL? .RARG ,M-END>\n\t\t     <EQUAL? ,PRSO ,TOOLBAG>\n\t\t     <IN? ,TOOLBAG ,WINNER>\n\t\t     <VERB? TAKE>>\n\t\t<SETG RTHIEF ,WINNER>\n\t\t<DISABLE <INT I-STEAL>>\n\t\t<ENABLE <QUEUE I-CHASEAUDA -1>>)>>"
  },
  "FCMAINT-FCN": {
   "name": "FCMAINT-FCN",
   "file": "rooms.zil",
   "line": 1126,
   "endLine": 1134,
   "source": "<ROUTINE FCMAINT-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<LONG-DESCS>\n\t\t<FCLEAR ,WHEEL ,NDESCBIT>\n\t\t<COND (<AND <NOT <EQUAL? <GET ,FCWHEEL ,ROFF> 0>>\n\t\t\t    <NOT ,ACID-FIXED>>\n\t\t       <TELL <GET ,FCWHEEL ,ROFF> CR>\n\t\t       <FSET ,WHEEL ,NDESCBIT>)>\n\t\t<RTRUE>)>>"
  },
  "BEWARE-MIST-FCN": {
   "name": "BEWARE-MIST-FCN",
   "file": "rooms.zil",
   "line": 1218,
   "endLine": 1224,
   "source": "<ROUTINE BEWARE-MIST-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<AND <EQUAL? .RARG ,M-LOOK>\n\t\t     <NOT ,ACID-FIXED>\n\t\t     <NOT <WHIZ?>>\n\t\t     <NOT <WALDO?>>>\n\t\t<LONG-DESCS>\n\t\t<TELL <GET ,BEWARE-TBL ,ROFF> CR>)>>"
  },
  "SKY-FCN": {
   "name": "SKY-FCN",
   "file": "rooms.zil",
   "line": 1346,
   "endLine": 1357,
   "source": "<ROUTINE SKY-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG M-END>\n\t\t<COND (<VERB? DROP>\n\t\t       <ROBOT-TELL \"The \" <>>\n\t\t       <TELL D ,PRSO \" is whisked up by the force of the tube.\"\n\t\t\t     CR>\n\t\t       <COND (<IN? ,PRSO ,SKY1>\n\t\t\t      <MOVE ,PRSO ,WEATHER>)\n\t\t\t     (<IN? ,PRSO ,SKY2>\n\t\t\t      <MOVE ,PRSO ,HYDRO>)\n\t\t\t     (<IN? ,PRSO ,SKY3>\n\t\t\t      <MOVE ,PRSO ,RTD>)>)>)>>"
  },
  "DESCRIBE-CONTROLS-FCN": {
   "name": "DESCRIBE-CONTROLS-FCN",
   "file": "rooms.zil",
   "line": 1376,
   "endLine": 1393,
   "source": "<ROUTINE DESCRIBE-CONTROLS-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" D1 D2 D3 (DOFF 0))\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<LONG-DESCS>\n\t\t<COND (<AUDA?>\n\t\t       <RTRUE>)>\n\t\t<COND (<EQUAL? ,WINNER-HERE ,WEATHER>\n\t\t       <SET D1 ,WDIAL1>\n\t\t       <SET D2 ,WDIAL2>\n\t\t       <SET D3 ,WDIAL3>)\n\t\t      (T\n\t\t       <SET DOFF 3>\n\t\t       <SET D1 ,LEVER1>\n\t\t       <SET D2 ,LEVER2>\n\t\t       <SET D3 ,LEVER3>)>\n\t\t<TELL \"The \" D .D1 \" is set to \" N <GET ,DIALSETS <+ 1 .DOFF>>\n\t\t      \", the \" D .D2 \" is set to \" N <GET ,DIALSETS <+ 2 .DOFF>>\n\t\t      \", and the \" D .D3 \" is set to \" N <GET ,DIALSETS <+ 3 .DOFF>>\n\t\t      \".\" CR>)>>"
  },
  "ACIDMIST-FCN": {
   "name": "ACIDMIST-FCN",
   "file": "rooms.zil",
   "line": 1457,
   "endLine": 1468,
   "source": "<ROUTINE ACIDMIST-FCN (\"OPTIONAL\" (RARG <>))\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<NOT ,ACID-FIXED>\n\t\t       <COND (<EQUAL? <GET ,DEADBOTS ,ROFF> 0>\n\t\t\t      <PUT ,DEADBOTS ,ROFF 1>\n\t\t\t      <RFALSE>)>)>)\n\t       (<AND <EQUAL? .RARG ,M-LOOK>\n\t\t     <NOT ,ACID-FIXED>>\n\t\t<LONG-DESCS>\n\t\t<COND (<NOT <WHIZ?>>\n\t\t       <TELL <GET ,MISTY-TBL ,ROFF> CR>)>\n\t\t<RTRUE>)>>"
  },
  "V-CONFIGURE": {
   "name": "V-CONFIGURE",
   "file": "setup.zil",
   "line": 8,
   "endLine": 85,
   "source": "<ROUTINE V-CONFIGURE (\"AUX\" (COUNT 0) RBT RM)\n\t <COND (<G? ,MOVES 1>\n\t\t<TELL\n\"You may only configure the game on the first move.  Consult the\nmanual for details.\" CR>\n\t\t<RFALSE>)>\n\t <SETG SETUP-MODE T>\n\t <TELL\n\"Pick your poison.|\nSpecify the name of a location for each of the following robots or DEAD if you\nwould like to have the robot start out non-functional.\" CR>\n\t <REPEAT ()\n\t\t <COND (<G? <SET COUNT <+ .COUNT 1>> 6>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET RBT <GET ,NAME-TBL <- .COUNT 1>>>\n\t\t\t<REPEAT ()\n\t\t\t\t<TELL <GET ,ROBOT-NAMES .COUNT> \" \">\n\t\t\t\t<COND (<PARSER>\n\t\t\t\t       <SET RM <GET ,P-TABLE 1>>\n\t\t\t\t       <COND \n\t\t\t\t\t     (<EQUAL? .RM ,UD-TUBE>\n\t\t\t\t\t      <PUT ,DEADBOTS .COUNT 30>\n\t\t\t\t\t      <FSET .RBT ,CUTBIT>\n\t\t\t\t\t      <RETURN>)\n\t\t\t\t\t     (<IN? .RM ,ROOMS>\n\t\t\t\t\t      <COND (<AND <EQUAL? .RBT ,IRIS>\n\t\t\t\t\t\t\t  <NOT\n\t\t\t\t\t\t\t   <IRIS-ALLOWED?\n\t\t\t\t\t\t\t    .RM>>>\n\t\t\t\t\t\t     <TELL\n\"IRIS cannot leave the Monitor and Supply Area.\" CR>)\n\t\t\t\t\t\t    (<OR <EQUAL? .RM ,CAR-AREA\n\t\t\t\t\t\t\t\t ,BIO-INT>\n\t\t\t\t\t\t\t <EQUAL? .RM ,BIO-LAB\n\t\t\t\t\t\t\t\t ,CRYOUNITS>>\n\t\t\t\t\t\t     <TELL\n\"No robot is allowed to start in the Biological Areas.\" CR>)\n\t\t\t\t\t\t    (<EQUAL? .RM ,HELL>\n\t\t\t\t\t\t     <TELL \n\"Come on. Get serious.\" CR>)\n\t\t\t\t\t\t    (T\n\t\t\t\t\t\t     <MOVE .RBT .RM>\n\t\t\t\t\t\t     <RETURN>)>)\n\t\t\t\t\t     (T\n\t\t\t\t\t      <TELL\n\"Specify the name of a location or the word DEAD.\" CR>)>)\n\t\t\t\t      (T\n\t\t\t\t       <TELL\n\"Specify the name of a location or the word DEAD.\" CR>)>>)>>\n\t <REPEAT ()\n\t\t <TELL\n\"Surface-side systems tremor at which cycle? (1-100) >\">\n\t\t <COND (<READ-NUMBER 1 100>\n\t\t        <SETG RTD-KILLS ,P-NUMBER>\n\t\t\t<QUEUE I-TREMOR2 ,RTD-KILLS>\n\t\t\t<RETURN>)>>\n\t <REPEAT ()\n\t\t <TELL\n\"Cooling systems tremor at which cycle? (1-100) >\">\n\t\t <COND (<READ-NUMBER 1 100>\n\t\t\t<SETG ACID-KILLS ,P-NUMBER>\n\t\t\t<QUEUE I-TREMOR1 ,ACID-KILLS>\n\t\t\t<RETURN>)>>\n\t <REPEAT ()\n\t\t <TELL\n\"Humans arrive at which cycle? (\" N ,ACID-KILLS \"-150) >\">\n\t\t <COND (<READ-NUMBER ,ACID-KILLS 150>\n\t\t\t<SETG PEOPLE-APPEAR ,P-NUMBER>\n\t\t\t<QUEUE I-PEOPLE1 ,PEOPLE-APPEAR>\n\t\t\t<RETURN>)>>\n\t <SETG SETUP-MODE <>>\n\t <TELL\n\"Configuration completed.\" CR CR>\n\t <V-ALL-REPORT-LOC>\n\t <DISABLE <INT I-IRIS-HINTS>>\n\t <DISABLE <INT I-AUDA-HINTS>>\n\t <RTRUE>>"
  },
  "READ-NUMBER": {
   "name": "READ-NUMBER",
   "file": "setup.zil",
   "line": 87,
   "endLine": 100,
   "source": "<ROUTINE READ-NUMBER (MN MX)\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<NUMBER? ,P-LEXSTART>\n\t\t<COND (<AND <NOT <L? ,P-NUMBER .MN>>\n\t\t\t    <NOT <G? ,P-NUMBER .MX>>>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"Enter a number between \" N .MN \" and \" N .MX \".\" CR>\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<TELL\n\"Enter a number between \" N .MN \" and \" N .MX \".\" CR>\n\t\t<RFALSE>)>>"
  },
  "IRIS-ALLOWED?": {
   "name": "IRIS-ALLOWED?",
   "file": "setup.zil",
   "line": 102,
   "endLine": 107,
   "source": "<ROUTINE IRIS-ALLOWED? (RM)\n\t <COND (<OR <EQUAL? .RM ,CPU-ROOM ,SERVO-SYSTEMS ,RTD-BANKS>\n\t\t    <EQUAL? .RM ,WEATHER-BANKS ,SUPPLIES-SOUTH ,SUPPLIES-MID>\n\t\t    <EQUAL? .RM ,SUPPLIES-NORTH>>\n\t\t<RTRUE>)\n\t       (T <RFALSE>)>>"
  },
  "INIT-STATUS-LINE": {
   "name": "INIT-STATUS-LINE",
   "file": "status.zil",
   "line": 12,
   "endLine": 41,
   "source": "<ROUTINE INIT-STATUS-LINE ()\n\t <CLEAR -1>\n\t <SPLIT 3>\n\t <SCREEN 1>\n\t <BUFOUT <>>\n\t <INVERSE-LINE 1>\n\t <INVERSE-LINE 2>\n\t <INVERSE-LINE 3>\n\t <HLIGHT ,H-INVERSE>\n\t <CURSET 1 1>\n\t <TELL \"Cryolink to:\">\n\t <CURSET 1 30>\n\t <TELL \"Casualties this Cycle:\">\n\t <CURSET 1 60>\n\t <TELL \"Cycle:\">\n\t <CURSET 2 1>\n\t <TELL \"Auda:\">\n\t <CURSET 2 30>\n\t <TELL \"Iris:\">\n\t <CURSET 2 60>\n\t <TELL \"Poet:\">\n\t <CURSET 3 1>\n\t <TELL \"Sensa:\">\n\t <CURSET 3 30>\n\t <TELL \"Waldo:\">\n\t <CURSET 3 60>\n\t <TELL \"Whiz:\">\n\t <BUFOUT T>\n\t <HLIGHT ,H-NORMAL>\n\t <SCREEN 0>>"
  },
  "INVERSE-LINE": {
   "name": "INVERSE-LINE",
   "file": "status.zil",
   "line": 43,
   "endLine": 47,
   "source": "<ROUTINE INVERSE-LINE (LIN \"AUX\" (CNT 79))\n\t <CURSET .LIN 1>\n\t <HLIGHT ,H-INVERSE>\n\t <PRINT-SPACES .CNT>\n\t <HLIGHT ,H-NORMAL>>"
  },
  "PRINT-SPACES": {
   "name": "PRINT-SPACES",
   "file": "status.zil",
   "line": 49,
   "endLine": 54,
   "source": "<ROUTINE PRINT-SPACES (CNT)\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC 32>)>>>"
  },
  "STATUS-LINE": {
   "name": "STATUS-LINE",
   "file": "status.zil",
   "line": 58,
   "endLine": 88,
   "source": "<ROUTINE STATUS-LINE (\"AUX\" LEN)\n\t <BUFOUT <>>\n\t <DIROUT ,D-TABLE ,SL-BUFFER>\n\t <TELL D ,HERE>\n\t <DIROUT ,D-NORMAL>\n\t <SET LEN <GET ,SL-BUFFER 0>>\n\t <SCREEN 1>\n\t <CURSET 1 15>\n\t <HLIGHT ,H-INVERSE>\n\t <TELL D ,HERE>\n\t <PRINT-SPACES <- 25 .LEN>>\n\t <CURSET 1 57>\n\t <TELL N ,SCORE \"  \">\n\t <CURSET 1 71>\n\t <TELL N ,MOVES \"  \">\n\t <CURSET 2 8>\n\t <SL-LOC ,AUDA>\n\t <CURSET 2 37>\n\t <SL-LOC ,IRIS>\n\t <CURSET 2 67>\n\t <SL-LOC ,POET>\n\t <CURSET 3 8>\n\t <SL-LOC ,SENSA>\n\t <CURSET 3 37>\n\t <SL-LOC ,WALDO>\n\t <CURSET 3 67>\n\t <SL-LOC ,WHIZ>\n\t <SCREEN 0>\n\t <CURSET 23 1>\n\t <BUFOUT T>\n\t <HLIGHT ,H-NORMAL>>"
  },
  "SL-LOC": {
   "name": "SL-LOC",
   "file": "status.zil",
   "line": 90,
   "endLine": 96,
   "source": "<ROUTINE SL-LOC (RBT \"AUX\" (L <LOC .RBT>) LEN)\n\t <DIROUT ,D-TABLE ,SL-BUFFER>\n\t <TELL D .L>\n\t <DIROUT ,D-NORMAL>\n\t <SET LEN <GET ,SL-BUFFER 0>>\n\t <TELL D .L>\n\t <PRINT-SPACES <- 20 .LEN>>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 12,
   "endLine": 30,
   "source": "<ROUTINE V-LOOK (\"AUX\" STR AV)\n\t <COND (<IN-MOTION? ,WINNER>\n\t\t<ROBOT-TELL \"Moving through \" <>>)\n\t       (ELSE\n\t\t<ROBOT-TELL \"Internal map reference -- \" <>>)>\n\t <COND (<IN? ,WINNER ,CAR>\n\t\t<TELL \"Inside the \" D ,CAR \".\" CR>)\n\t       (ELSE\n\t\t<TELL SD ,WINNER-HERE CR>)>\n\t <COND (<AND <IRIS?> <NOT ,IRIS-FIXED>>\n\t\t<TELL <PICK-ONE ,IRIS-BLIND> CR> <RTRUE>)>\n\t <COND (<NOT <APPLY <GETP ,WINNER-HERE ,P?ACTION> ,M-LOOK>>\n\t\t<LONG-DESCS>)>\n\t <DESCRIBE-OBJECTS>\n\t <COND (<AND <EQUAL? ,WINNER-HERE ,HALL-END ,CAR-AREA>\n\t\t     <IN? ,CAR ,WINNER-HERE>\n\t\t     <NOT <IN? ,WINNER ,CAR>>>\n\t\t<PERFORM ,V?LOOK-INSIDE ,CAR>)>\n\t <LOOK-CORRIDOR>>"
  },
  "LONG-DESCS": {
   "name": "LONG-DESCS",
   "file": "verbs.zil",
   "line": 40,
   "endLine": 44,
   "source": "<ROUTINE LONG-DESCS ()\n\t <COND (<NOT <EQUAL? <GET <GETP ,WINNER-HERE ,P?ROOMDESCS> ,ROFF> 0>>\n\t\t       <TELL <GET <GETP ,WINNER-HERE ,P?ROOMDESCS> ,ROFF> CR>)\n\t\t      (ELSE\n\t\t       <TELL \"I am in the \" SD ,WINNER-HERE \".\" CR>)>>"
  },
  "LOOK-CORRIDOR": {
   "name": "LOOK-CORRIDOR",
   "file": "verbs.zil",
   "line": 46,
   "endLine": 49,
   "source": "<ROUTINE LOOK-CORRIDOR ()\n\t <COND (<AND <GETP ,WINNER-HERE ,P?CORRIDOR>\n\t\t     <NOT <EQUAL? ,WINNER ,WHIZ ,WALDO>>>\n\t\t<CORRIDOR-LOOK>)>>"
  },
  "DESCRIBE-ROBOTS": {
   "name": "DESCRIBE-ROBOTS",
   "file": "verbs.zil",
   "line": 51,
   "endLine": 108,
   "source": "<ROUTINE DESCRIBE-ROBOTS (\"AUX\" (COUNT -1) (OFFS 0) OBJ LEADER RC)\n\t <COND (<IN? ,WINNER ,CAR>\n\t\t<SET COUNT 0>)>\n\t <REPEAT ()\n\t\t <COND (<IN? <GET ,NAME-TBL .OFFS> ,WINNER-HERE>\n\t\t\t<SET COUNT <+ .COUNT 1>>)>\n\t\t <COND (<G? <SET OFFS <+ .OFFS 1>> 6>\n\t\t\t<RETURN>)>>\n\t <COND (<EQUAL? .COUNT 0> <RTRUE>)>\n\t <COND (<AND <IRIS?>\n\t\t     <NOT ,IRIS-FIXED>\n\t\t     <RTRUE>>)>\n\t <COND (<IN? ,WINNER ,CAR>\n\t\t<TELL \"Standing outside the \" D ,CAR \" \">)\n\t       (ELSE\n\t\t<TELL \"In the room with me \">)>\n\t <COND (<EQUAL? .COUNT 1>\n\t\t<COND (<OR <IN? ,PEOPLE <LOC ,WINNER>>\n\t\t\t   <AND <IN? ,WINNER ,CAR>\n\t\t\t\t<IN? ,PEOPLE <LOC ,CAR>>>>\n\t\t       <TELL \"are \">)\n\t\t      (ELSE\n\t\t       <TELL \"is \">)>)\n\t       (T\n\t\t<TELL \"are \">)>\n\t <SET OFFS 0>\n\t <REPEAT () \n\t\t <COND (<AND <IN? <SET OBJ <GET ,NAME-TBL .OFFS>> ,WINNER-HERE>\n\t\t\t     <NOT <EQUAL? ,WINNER .OBJ>>>\n\t\t\t<COND (<EQUAL? .OBJ ,PEOPLE>\n\t\t\t       <TELL \"some \">)>\n\t\t\t<COND (<FSET? .OBJ ,CUTBIT>\n\t\t\t       <TELL \"non-functional \">)>\n\t\t\t<TELL D .OBJ>\n\t\t\t<COND (<IN-MOTION? .OBJ>\n\t\t\t       <TELL \" (in motion)\">)>\n\t\t\t<COND (<EQUAL? <GET ,FOLLOW-TBL ,ROFF> .OBJ>\n\t\t\t       <TELL \" whom I'm following\">)>\n\t\t\t<SET RC 0>\n\t\t\t<REPEAT ()\n\t\t\t\t<SET RC <+ .RC 1>>\n\t\t\t\t<COND (<EQUAL? .RC 7>\n\t\t\t\t       <RETURN>)\n\t\t\t\t      (T\n\t\t\t\t       <COND (<EQUAL? <GET ,DRAG-TBL .RC> .OBJ>\n\t\t\t\t\t      <TELL \" (being dragged)\">\n\t\t\t\t\t      <RETURN>)>)>>\n\t\t\t<COND (<AND ,PLUGGED-IN\n\t\t\t\t    <EQUAL? .OBJ ,WHIZ>>\n\t\t\t       <TELL \" (plugged in)\">)>\n\t\t\t<COND (<EQUAL? .COUNT 1>\n\t\t\t       <TELL \".\" CR>\n\t\t\t       <RETURN>)\n\t\t\t      (<EQUAL? .COUNT 2>\n\t\t\t       <TELL \" and \">)\n\t\t\t      (T <TELL \", \">)>\n\t\t\t<SET COUNT <- .COUNT 1>>)>\n\t\t <SET OFFS <+ .OFFS 1>>>>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 110,
   "endLine": 121,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"AUX\" (OFFS 0) OBJ)\n\t <DESCRIBE-ROBOTS>\n\t <REPEAT ()\n\t\t <COND (<AND <IN? <SET OBJ <GET ,NAME-TBL .OFFS>> ,WINNER-HERE>\n\t\t\t     <NOT <EQUAL? .OBJ ,WINNER>>>\n\t\t\t<PRINT-CONTENTS .OBJ>)>\n\t\t <COND (<G? <SET OFFS <+ .OFFS 1>> 5>\n\t\t\t<RETURN>)>>\n\t <COND (<AND <IRIS?>\n\t\t     <NOT ,IRIS-FIXED>\n\t\t     <RTRUE>>)>\n\t <PRINT-CONT ,WINNER-HERE -1>>"
  },
  "DESCRIBABLE?": {
   "name": "DESCRIBABLE?",
   "file": "verbs.zil",
   "line": 123,
   "endLine": 126,
   "source": "<ROUTINE DESCRIBABLE? (OBJ)\n\t <COND (<NOT <EQUAL? <GET <GETP .OBJ ,P?OBJDESCS>\n\t\t\t\t  <+ ,ROFF ,FDOFF>> 0>>\n\t\t<RTRUE>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 128,
   "endLine": 151,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T) NUM)\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (<AND <NOT <FSET? .F ,NDESCBIT>>\n\t\t\t\t    <DESCRIBABLE? .F>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <SET 1ST? <>>\n\t\t\t\t      <COND (<SET NUM <GETP .OBJ ,P?ROBOT>>\n\t\t\t\t\t     <COND (<EQUAL? .NUM 7>\n\t\t\t\t\t\t    <TELL \"The \" D .OBJ\n\t\t\t\t\t\t\t  \" are carrying \">)\n\t\t\t\t\t\t   (T\n\t\t\t\t\t\t    <TELL D .OBJ\n\t\t\t\t\t\t\t  \" is carrying \">)>)>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL \", \">\n\t\t\t\t      <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t       <TELL \"a \" D .F>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <COND (<AND <NOT .1ST?> <GETP .OBJ ,P?ROBOT>>\n\t\t\t\t      <TELL \".\" CR>)>\n\t\t\t       <RETURN>)>>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 153,
   "endLine": 167,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (LEVEL 0) \"AUX\" Y (1ST? T))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n\t <REPEAT ()\n\t\t <COND (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t     <NOT <GETP .Y ,P?ROBOT>>\n\t\t\t     <DESCRIBABLE? .Y>\n\t\t\t     <AND <NOT <EQUAL? .OBJ ,CAR>>\n\t\t\t\t  <NOT <IN? ,WINNER ,CAR>>>>\n\t\t\t<COND (.1ST?\n\t\t\t       <FIRSTER .OBJ .LEVEL>\n\t\t\t       <SET 1ST? <>>)>\n\t\t\t<DESCRIBE-OBJECT .Y <+ .LEVEL 1>>)>\n\t\t <COND (<NOT <SET Y <NEXT? .Y>>>\n\t\t\t<RETURN <NOT .1ST?>>)>>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 172,
   "endLine": 190,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL \"AUX\" CNT)\n\t <COND (<==? .OBJ ,WINNER>\n\t\t<ROBOT-TELL <GET ,CARRY-TBL ,ROFF>>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting \">\n\t\t       <COND (<EQUAL? .OBJ ,GROOVE1 ,GROOVE2>\n\t\t\t      <TELL \"in\">)\n\t\t\t     (T\n\t\t\t      <TELL \"on\">)>\n\t\t       <TELL \" the \" D .OBJ >\n\t\t       <SET CNT <CCOUNT .OBJ>>\n\t\t       <COND (<L? .CNT 2>\n\t\t\t      <TELL \" is... \" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \" are... \" CR>)>)\n\t\t      (ELSE\n\t\t       <TELL <GET ,INDENTS .LEVEL>\n\t\t\t     \"The \" D .OBJ \" contains...\" CR>)>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 192,
   "endLine": 221,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ LEVEL \"AUX\" (STR <>) (WCOUNT 0))\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <NOT <FSET? .OBJ ,TOUCHBIT>>>\t\t     \n\t\t<TELL <GET <GETP .OBJ ,P?OBJDESCS> <+ ,ROFF ,FDOFF>>>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a \" D .OBJ \" here\">\n\t\t<COND (<AND <EQUAL? .OBJ ,WEDGE>\n\t\t\t    ,ON-WEDGE>\n\t\t       <TELL \" supporting \">\n\t\t       <COND (<EQUAL? ,ON-WEDGE <GETP ,WINNER ,P?ROBOT>>\n\t\t\t      <TELL \"me\">)\n\t\t\t     (T \n\t\t\t      <REPEAT ()\n\t\t\t\t      <COND (<G? <SET WCOUNT <+ .WCOUNT 1>> 6>\n\t\t\t\t\t     <RETURN>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <COND (<EQUAL? ,ON-WEDGE .WCOUNT>\n\t\t\t\t\t\t    <TELL D \n\t\t\t\t\t  <GET ,NAME-TBL <- .WCOUNT 1>>>)>)>>)>)>\n\t\t<TELL \".\">)\n\t       (ELSE\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A \" D .OBJ>\n\t\t<COND (<FSET? .OBJ ,WEARBIT> <TELL \" (being worn)\">)>)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ <+ .LEVEL 1>>)>>"
  },
  "PRE-EXAMINE": {
   "name": "PRE-EXAMINE",
   "file": "verbs.zil",
   "line": 223,
   "endLine": 230,
   "source": "<ROUTINE PRE-EXAMINE ()\n\t <COND (<IN? ,PRSO ,ROOMS>\n\t\t<COND (<IN? ,WINNER ,PRSO>\n\t\t       <PERFORM ,V?LOOK>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <ROBOT-TELL \"I can't see there from here.\">\n\t\t       <RTRUE>)>)>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 232,
   "endLine": 263,
   "source": "<ROUTINE V-EXAMINE (\"AUX\" STR)\n\t <COND (<AND ,PRSI\n\t\t     <NOT <IN? ,PRSO ,PRSI>>>\n\t\t<ROBOT-TELL \"Better check the facts, compadre.\">\n\t\t<RTRUE>)\n\t       (<OR <EQUAL? ,PRSO ,LEFT ,RIGHT ,INTNUM>\n\t\t    <EQUAL? ,PRSO ,LISTENING ,DRAGGING ,LOCATION>>\n\t\t<ROBOT-YUKS>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,MONITOR>\n\t\t     <IRIS?>\n\t\t     ,IRIS-FIXED\n\t\t     <EQUAL? <LOC ,IRIS> \n\t\t\t     ,WEATHER-BANKS ,RTD-BANKS ,SERVO-SYSTEMS>>\n\t\t<V-LOOK>\n\t\t<RTRUE>)>\n\t <SET STR <GET <GETP ,PRSO ,P?OBJDESCS> <+ ,RTOFF ,ROFF >>>\n\t <COND (<NOT <EQUAL? .STR 0>>\n\t\t<ROBOT-TELL .STR>\n\t\t<COND (<GETP ,PRSO ,P?ROBOT> <PRINT-CONTENTS ,PRSO>)>\n\t\t<COND (<GETP ,PRSO ,P?DIAL>\n\t\t       <TELL \"The \" D ,PRSO \" is set at \" \n\t\t\t     N <GET ,DIALSETS <GETP ,PRSO ,P?DIAL>>\n\t\t\t     \".\" CR>)>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<COND (<NOT <EQUAL? .STR 0>>\n\t\t       <TELL .STR \" \">)>\n\t\t<V-LOOK-INSIDE>)\t\n\t       (ELSE\n\t\t<ROBOT-TELL \"I perceive nothing special about the \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 267,
   "endLine": 274,
   "source": "<ROUTINE V-SCORE (\"OPTIONAL\" (ASK? T))\n\t #DECL ((ASK?) <OR ATOM FALSE>)\n\t <TELL \"There have been \">\n\t <BIG-NUM-PRINT ,TOTAL-SCORE>\n\t <TELL \" casualties (original population: 30,172,000) in \">\n\t <TELL N ,MOVES>\n\t <COND (<1? ,MOVES> <TELL \" cycle.\">) (ELSE <TELL \" cycles.\">)>\n\t <CRLF>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 276,
   "endLine": 278,
   "source": "<ROUTINE FINISH ()\n\t <V-SCORE>\n\t <QUIT>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 280,
   "endLine": 289,
   "source": "<ROUTINE V-QUIT (\"OPTIONAL\" (ASK? T) \"AUX\" SCOR)\n\t #DECL ((ASK?) <OR ATOM <PRIMTYPE LIST>> (SCOR) FIX)\n\t <V-SCORE>\n\t <COND (<OR <AND .ASK?\n\t\t\t <TELL\n\"Do you wish to leave the game? (Y is affirmative): \">\n\t\t\t <YES?>>\n\t\t    <NOT .ASK?>>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"Ok.\" CR>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 291,
   "endLine": 297,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 299,
   "endLine": 313,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t <TELL\n\"SUSPENDED|\nInfocom interactive fiction - a science-fiction story|\nCopyright (c) 1983, 1984 by Infocom, Inc.  All rights reserved.|\nSUSPENDED is a registered trademark of Infocom, Inc.|\nRelease \">\n\t <PRINTN <BAND <GET 0 1> *3777*>>\n\t <TELL \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <CRLF>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 335,
   "endLine": 343,
   "source": "<ROUTINE JIGS-UP (DESC ROBOT)\n \t <TELL .DESC CR>\n\t <CRLF>\n\t <TELL \"FC: So much for that robot. Too bad.\" CR>\n\t <PUT ,DEADBOTS <GETP .ROBOT ,P?ROBOT> 30>\n\t <KILL-GOAL .ROBOT T>\n\t <FSET .ROBOT ,CUTBIT>\n\t <DEAD-FCN>\n\t <RFATAL>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 345,
   "endLine": 350,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>\n\t\t<V-LOOK>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 352,
   "endLine": 356,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 358,
   "endLine": 364,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE T>\n\t <TELL \"Do you wish to restart? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 380,
   "endLine": 381,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <ROBOT-TELL \"Give me a direction for movement or a location to move to.\">>"
  },
  "GO-NEXT": {
   "name": "GO-NEXT",
   "file": "verbs.zil",
   "line": 383,
   "endLine": 386,
   "source": "<ROUTINE GO-NEXT (TBL \"AUX\" VAL)\n\t #DECL ((TBL) TABLE (VAL) ANY)\n\t <COND (<SET VAL <LKP ,WINNER-HERE .TBL>>\n\t\t<GOTO .VAL>)>>"
  },
  "PRE-LAMP-ON": {
   "name": "PRE-LAMP-ON",
   "file": "verbs.zil",
   "line": 388,
   "endLine": 396,
   "source": "<ROUTINE PRE-LAMP-ON ()\n\t <COND (<NOT <OR <EQUAL? ,PRSO ,SWITCH1 ,SWITCH2 ,SWITCH3>\n\t\t\t <EQUAL? ,PRSO ,MACHINE>>>\n\t\t<ROBOT-TELL \"I can't do that to \" <>>\n\t\t<COND (<GETP ,PRSO ,P?ROBOT>\n\t\t       <HIM-HER ,PRSO>)\n\t\t      (T <TELL \"the \" D ,PRSO>)>\n\t\t<TELL \".\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 398,
   "endLine": 411,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<NOT <OR <EQUAL? ,PRSO ,SWITCH1 ,SWITCH2 ,SWITCH3>\n\t\t\t <EQUAL? ,PRSO ,MACHINE>>>\n\t\t<ROBOT-YUKS>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,MACHINE>\n\t\t<PERFORM ,V?PUSH ,ORANGE-BUTTON>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,ONBIT>\n\t\t<ROBOT-TELL \"It's already on.\">)\n\t       (ELSE <ROBOT-TELL \"Done.\">\n\t\t<FSET ,PRSO ,ONBIT>\n\t\t<COND (<L? ,MOVES 75>\n\t\t       <DO-RTD>)>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 413,
   "endLine": 426,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<NOT <OR <EQUAL? ,PRSO ,SWITCH1 ,SWITCH2 ,SWITCH3>\n\t\t\t <EQUAL? ,PRSO ,MACHINE>>>\n\t\t<ROBOT-YUKS>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,MACHINE>\n\t\t<PERFORM ,V?PUSH ,ORANGE-BUTTON>\n\t\t<RTRUE>)\n\t       (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t<ROBOT-TELL \"It's not on.\">)\n\t       (ELSE <ROBOT-TELL \"Done.\">\n\t\t<FCLEAR ,PRSO ,ONBIT>\n\t\t<COND (<L? ,MOVES 75>\n\t\t       <DO-RTD>)>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "verbs.zil",
   "line": 429,
   "endLine": 437,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t #DECL ((ITM) ANY (TBL) TABLE (CNT LEN) FIX)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<==? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<==? .CNT .LEN> <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 439,
   "endLine": 482,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t #DECL ((PT) <OR FALSE TABLE> (PTS) FIX (STR) <OR STRING FALSE>\n\t\t(OBJ) OBJECT (RM) <OR FALSE OBJECT>)\n\t <DO-THE-TV>\n\t <COND (<NOT <EQUAL? <GET ,FOLLOW-TBL ,ROFF> 0>>\n\t\t<ROBOT-TELL \"Okay, but I have to stop following.\">\n\t\t<PUT ,FOLLOW-TBL ,ROFF 0>)>\n\t <KILL-GOAL ,WINNER>\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,WINNER-HERE ,PRSO>>\n\t\t<COND (<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<==? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<==? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <ROBOT-TELL <GET ,CANT-GO ,ROFF>>\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (T\n\t\t<ROBOT-TELL <GET ,CANT-GO ,ROFF>>\n\t\t<RFATAL>)>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "verbs.zil",
   "line": 492,
   "endLine": 494,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>\n\t <SETG P-IT-LOC ,WINNER-HERE>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 505,
   "endLine": 516,
   "source": "<ROUTINE V-INVENTORY (\"AUX\" OBJ STR)\n\t <COND (<AUDA?>\n\t\t<COND (<SET OBJ <FIRST? ,AUDA>>\n\t\t       <SET STR <GET <GETP .OBJ ,P?OBJDESCS><+ ,FDOFF ,ROFF >>>\n\t\t       <COND (<EQUAL? .STR 0>\n\t\t\t      <ROBOT-TELL <GET ,INVEN-QUIPS ,ROFF>>\n\t\t\t      <RTRUE>)\n\t\t\t     (T <PRINT-CONT ,AUDA>)>)\n\t\t      (T <ROBOT-TELL <GET ,INVEN-QUIPS ,ROFF>>)>)\n\t       (<NOT <==? <CCOUNT ,WINNER> 0>>\n\t\t<PRINT-CONT ,WINNER>)\n\t       (T <ROBOT-TELL <GET ,INVEN-QUIPS ,ROFF>>)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 527,
   "endLine": 562,
   "source": "<ROUTINE V-COUNT (\"AUX\" TEMP)\n\t <COND (<EQUAL? ,PRSO ,PEOPLE>\n\t\t<ROBOT-TELL \"There are two of them. And they're weird things, too.\">\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,PRSO ,HANDS ,SURGERY-HAND>>\n\t\t<ROBOT-TELL \n\t  \"I have my counting abilities, and they only extend to extensions.\">\n\t\t<RTRUE>)>\n\t <COND (<AND ,PRSI\n\t\t     <NOT <IN? ,PRSI ,WINNER-HERE>>>\n\t\t<CANT-DETECT ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND ,PRSI\n\t\t     <OR <NOT <GETP ,PRSI ,P?ROBOT>>\n\t\t\t <EQUAL? <GETP ,PRSI ,P?ROBOT> 7>>>\n\t\t<ROBOT-TELL \"There aren't any \" <>>\n\t\t<TELL D ,HANDS \" in the \" D ,PRSI \".\" CR>)\n\t       (<NOT ,PRSI>\n\t\t<ROBOT-TELL \"I have \" <>>\n\t\t<TELL N ,NUM-EXT>\n\t\t<COND (<EQUAL? ,NUM-EXT 1>\n\t\t       <TELL \" extension\">)\n\t\t      (T <TELL \" extensions\">)>\n\t\t<TELL \".\" CR>)\n\t       (,PRSI\n\t\t<TELL \"There \">\n\t\t<COND (<EQUAL? ,PRSI ,AUDA>\n\t\t       <TELL \"is\">)\n\t\t      (T <TELL \"are\">)>\n\t\t<SET TEMP ,WINNER>\n\t\t<CHANGE-WINNER ,PRSI T>\n\t\t<TELL \" \" N ,NUM-EXT \" extension\">\n\t\t<CHANGE-WINNER .TEMP T>\n\t\t<COND (<NOT <EQUAL? ,PRSI ,AUDA>>\n\t\t       <TELL \"s\">)>\n\t\t<TELL \" in \" D ,PRSI \".\" CR>)>>\t\t"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 564,
   "endLine": 587,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,WINNER> <ROBOT-TELL \"I already have it.\">)\n\t       (<AND <IN? ,PRSO ,TOPSHELF>\n\t\t     <NOT <EQUAL? ,ON-WEDGE <GETP ,WINNER ,P?ROBOT>>>>\n\t\t<ROBOT-TELL \"It's too high up there and I can't reach it.\">\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,WEARBIT>\n\t\t<ROBOT-TELL \"Not while it's attached.\">\n\t\t<RTRUE>)\n\t       (<AND <IRIS?>\n\t\t     <NOT ,IRIS-FIXED>>\n\t\t<ROBOT-TELL \"I can't take what I can't see.\">\n\t\t<RFATAL>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<ROBOT-TELL \"I can't reach that.\">\n\t\t<RTRUE>)\n\t       (<AND ,PRSI\n\t\t     <FSET? ,PRSI ,VICBIT>\n\t\t     <FSET? ,PRSO ,WEARBIT>>\n\t\t<ROBOT-TELL \"Not while \" <>>\n\t\t<TELL D ,PRSI \" has it attached.\" CR>\n\t\t<RTRUE>)\n\t       (<==? ,PRSO <LOC ,WINNER>> <TELL \"I'm in it, loser.\" CR>)>>"
  },
  "V-TAKEOUT": {
   "name": "V-TAKEOUT",
   "file": "verbs.zil",
   "line": 589,
   "endLine": 598,
   "source": "<ROUTINE V-TAKEOUT ()\n\t <COND (<AND ,PRSI\n\t\t     <NOT <IN? ,PRSO ,PRSI>>>\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,PRSO \" isn't in \">\n\t\t<COND (<NOT <GETP ,PRSI ,P?ROBOT>>\n\t\t       <TELL \"the \">)>\n\t\t<TELL D ,PRSI \".\" CR>\n\t\t<RTRUE>)\n\t       (T <PERFORM ,V?TAKE ,PRSO>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 600,
   "endLine": 605,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<==? <ITAKE> T>\n\t\t<ROBOT-TELL \"Taken.\">\n\t\t<COND (<EQUAL? ,PRSO ,WEDGE>\n\t\t       <SETG WEDGE-PLACED 0>\n\t\t       <SETG ON-WEDGE <>>)>)>>"
  },
  "TRYTAKE": {
   "name": "TRYTAKE",
   "file": "verbs.zil",
   "line": 610,
   "endLine": 616,
   "source": "<ROUTINE TRYTAKE ()\n\t <COND (<IN? ,PRSO ,WINNER> <RTRUE>)\n\t       (<AND <FSET? ,PRSO ,TRYTAKEBIT>\n\t\t     <GETP ,PRSO ,P?ACTION>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<IN? ,PRSO ,WINNER>)\n\t       (ELSE <ITAKE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 631,
   "endLine": 683,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ WLOC TBL)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <ROBOT-YUKS>)>\n\t\t<RFALSE>)\n\t       (<OR <EQUAL? <CCOUNT ,WINNER> ,NUM-EXT>\n\t\t    <G? <CCOUNT ,WINNER> ,NUM-EXT>>\n\t\t<COND (<AND <WALDO?>\n\t\t\t    <FSET? ,SURGERY-HAND ,WEARBIT>>\n\t\t       <ROBOT-TELL <GET ,EXTEN-QUIPS 7>>)\n\t\t      (T\n\t\t       <ROBOT-TELL <GET ,EXTEN-QUIPS ,ROFF>>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-MAX>>\n\t\t<COND (<AND .VB\n\t\t\t    <NOT <EQUAL? ,PRSO ,BROKEN-SHELF>>>\n\t\t       <ROBOT-TELL \"I have a free extension, but I'm not strong enough to carry that\" <>>\n\t\t       <COND (<NOT <EQUAL? <CCOUNT ,WINNER> 0>>\n\t\t\t      <TELL \" and what I'm carrying\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (.VB\n\t\t       <ROBOT-TELL \"It's far too heavy.\">)>\n\t\t<RFATAL>)\n\t       (<AND <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<SET OBJ <FIRST? ,WINNER>>\n\t\t<SET OBJ <NEXT? .OBJ>>\n\t\t;\"This must go!  Chomping compiler strikes again\"\n\t\t<ROBOT-TELL\n\"Oh, no. The \" <>>\n\t\t<TELL D .OBJ \" slips from my extenders while taking the \"\nD ,PRSO \" and both tumble to the ground.\" CR>\n\t\t<SET WLOC <LOC ,WINNER>>\n\t\t<COND (<FSET? .WLOC ,RMUNGBIT>\n\t\t       <PERFORM ,V?DROP .OBJ>\n\t\t       <MOVE ,PRSO ,WINNER>\n\t\t       <PERFORM ,V?DROP ,PRSO>)\n\t\t      (ELSE\n\t\t       <MOVE .OBJ .WLOC>\n\t\t       <MOVE ,PRSO .WLOC>)>\n\t\t<RFATAL>)\n\t       (T\n\t\t<COND (<EQUAL? ,PRSO ,REDSET ,ORANGESET>\n\t\t       <COND (<EQUAL? ,WINNER-HERE ,TUBE1>\n\t\t\t      <SETG ORANGESET <>>)\n\t\t\t     (<EQUAL? ,WINNER-HERE ,TUBE2>\n\t\t\t      <SETG REDSET <>>)>)>\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<RTRUE>)>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 685,
   "endLine": 703,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND (<EQUAL? ,PRSI ,GROUND ,WALLS ,COMPLEX>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t<TELL \"FC: Nice try.\" CR>)\n\t       (,PRSI\n\t\t<COND (<AND <EQUAL? ,PRSI ,CONVEYERBELTA \n\t\t\t       ,CONVEYERBELTB ,CONVEYERBELTC>\n\t\t\t    <GETP ,PRSO ,P?ROBOT>>\n\t\t       <PERFORM ,V?PUSH-UP ,PRSO ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,PRSO ,WEDGE>\n\t\t\t    <EQUAL? ,PRSI ,STEP>>\n\t\t       <PERFORM ,V?PUT-AGAINST ,PRSO ,PRSI>\n\t\t       <RTRUE>)>\n\t\t<RFALSE>)\n\t       >>"
  },
  "V-PUT-AGAINST": {
   "name": "V-PUT-AGAINST",
   "file": "verbs.zil",
   "line": 705,
   "endLine": 714,
   "source": "<ROUTINE V-PUT-AGAINST ()\n\t <COND (<EQUAL? ,PRSI ,GROUND ,WALLS ,COMPLEX>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<IN? ,PRSI ,WINNER-HERE>\n\t\t<ROBOT-TELL \"Okay.\">\n\t\t<MOVE ,WEDGE ,WINNER-HERE>\n\t\t<RTRUE>)\n\t       (T\n\t\t<CANT-DETECT ,PRSO>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 716,
   "endLine": 759,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>>)\n\t       (T\n\t\t<ROBOT-TELL \"I can't do that.\">\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t        <ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,PRSI \" isn't open.\" CR>)\n\t       (<==? ,PRSI ,PRSO>\n\t\t<ROBOT-TELL \"How can I do that?\">)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<COND (<AND <WALDO?>\n\t\t\t    <EQUAL? ,PRSO ,SURGERY-HAND>>\n\t\t       <PERFORM ,V?WEAR ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (<GETP ,PRSI ,P?ROBOT>\n\t\t       <ROBOT-YUKS>)\n\t\t      (T\n\t\t       <ROBOT-TELL \"The \" <>>\n\t\t       <TELL D ,PRSO \" is already in the \" D ,PRSI \".\" CR>)>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>><GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<ROBOT-TELL \"There's no room.\">)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <TRYTAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<ROBOT-TELL \"Done.\">\n\t\t<COND (<AND <EQUAL? ,PRSI ,PANEL>\n\t\t\t    <NOT ,IRIS-FIXED>\n\t\t\t    <IN? ,NEWCHIP1 ,PANEL>\n\t\t\t    <IN? ,CHIP2 ,PANEL>\n\t\t\t    <IN? ,CHIPS0 ,PANEL>>\n\t\t       <TELL CR <GET ,INTER-TBL 1> \n\t\t\t     \" OOOH! That felt good! Close my panel, big boy.\"\n\t\t\t     CR>)\n\t\t      (<EQUAL? ,PRSI ,GROOVE1>\n\t\t       <SETG ORANGESET ,PRSO>)\n\t\t      (<EQUAL? ,PRSI ,GROOVE2>\n\t\t       <SETG REDSET ,PRSO>)>)>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "verbs.zil",
   "line": 761,
   "endLine": 764,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<==? ,PRSO <LOC ,WINNER>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "PRE-SZAP": {
   "name": "PRE-SZAP",
   "file": "verbs.zil",
   "line": 768,
   "endLine": 770,
   "source": "<ROUTINE PRE-SZAP ()\n\t <PERFORM ,V?ZAP ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "PRE-ZAP": {
   "name": "PRE-ZAP",
   "file": "verbs.zil",
   "line": 774,
   "endLine": 778,
   "source": "<ROUTINE PRE-ZAP ()\n\t <COND (,PRSI <RFALSE>)\n\t       (<FSET? ,PRSO ,WEAPONBIT> <RFALSE>)\n\t       (ELSE <TELL\n\"You have nothing to shoot the \" D ,PRSO \" with.\" CR>)>>"
  },
  "DONT-HAVE": {
   "name": "DONT-HAVE",
   "file": "verbs.zil",
   "line": 780,
   "endLine": 784,
   "source": "<ROUTINE DONT-HAVE (OBJ)\n\t <ROBOT-TELL \"I don't have \" <>>\n\t <COND (<NOT <GETP .OBJ ,P?ROBOT>>\n\t\t<TELL \"the \">)>\n\t <TELL D .OBJ \".\" CR>>"
  },
  "V-ZAP": {
   "name": "V-ZAP",
   "file": "verbs.zil",
   "line": 786,
   "endLine": 792,
   "source": "<ROUTINE V-ZAP ()\n\t <COND (<NOT <IN? ,PRSO ,WINNER>>\n\t\t<DONT-HAVE ,PRSO>)\n\t       (<NOT <FSET? ,PRSO ,WEAPONBIT>>\n\t\t<TELL \"You can't use a \" D ,PRSO \" as a ray gun!\" CR>)\n\t       (<NOT ,PRSI> <TELL \"At what?\" CR>)\n\t       (ELSE <TELL \"Nothing happens.\" CR>)>>"
  },
  "V-SZAP": {
   "name": "V-SZAP",
   "file": "verbs.zil",
   "line": 794,
   "endLine": 795,
   "source": "<ROUTINE V-SZAP ()\n\t <TELL \"ZAPPP!!\" CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 799,
   "endLine": 820,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<ROBOT-TELL \n\"That's easy to say since I don't even have it.\">)\n\t       (<NOT <IN? ,PRSO ,WINNER>>\n\t\t<ROBOT-TELL \"One thing at a time. First tell me where it is.\">\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSI ,PEOPLE>\n\t\t<COND (<EQUAL? ,PRSO ,TOOLBAG>\n\t\t       <DISABLE <INT I-CHASEAUDA>>\n\t\t       <SETG RTHIEF <>>\n\t\t       <SETG CHASING-THIEF <>>\n\t\t       <COND (,GIVEN-BAG\n\t\t\t      <ENOUGH-TRADING>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <PEOPLE-GIVEN-BAG>\n\t\t\t      <RTRUE>)>)\n\t\t      (ELSE\n\t\t       <ROBOT-TELL \n\t\t\t\"They don't seem to be interested in that.\">\n\t\t       <RTRUE>)>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 822,
   "endLine": 824,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 826,
   "endLine": 834,
   "source": "<ROUTINE V-GIVE (\"AUX\" OBJ)\n\t <COND (<NOT <FSET? ,PRSI ,VICBIT>>\n\t\t<ROBOT-TELL \"I can't give a \" <>>\n\t\t<TELL D ,PRSO \" to a \" D ,PRSI \"!\" CR>)\n\t       (<IDROP> <ROBOT-TELL \"Given.\">\n\t\t<SET OBJ ,WINNER>\n\t\t<CHANGE-WINNER ,PRSI T>\n\t\t<ITAKE>\n\t\t<CHANGE-WINNER .OBJ T>)>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 836,
   "endLine": 837,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"FOOOO!!\" CR>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 839,
   "endLine": 843,
   "source": "<ROUTINE V-DROP () <COND (<IDROP>\n\t\t\t  <COND (<FSET? ,PRSO ,WEARBIT>\n\t\t\t\t <TELL \"(removing it first)\" CR>\n\t\t\t\t <FCLEAR ,PRSO ,WEARBIT>)>\n\t\t\t  <ROBOT-TELL \"Dropped.\">)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 845,
   "endLine": 845,
   "source": "<ROUTINE V-THROW () <COND (<IDROP> <ROBOT-TELL \"Thrown.\">)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 847,
   "endLine": 861,
   "source": "<ROUTINE IDROP ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<ROBOT-TELL \"I'm not carrying the \" <>>\n\t\t<TELL D ,PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<COND (<AND <EQUAL? ,PRSO ,SURGERY-HAND>\n\t\t\t    <FSET? ,PRSO ,WEARBIT>>\n\t\t       <FCLEAR ,PRSO ,WEARBIT>)>\n\t\t<MOVE ,PRSO <LOC ,WINNER>> <RTRUE>)>>"
  },
  "ALREADY": {
   "name": "ALREADY",
   "file": "verbs.zil",
   "line": 863,
   "endLine": 869,
   "source": "<ROUTINE ALREADY (ON-OFF \"OPTIONAL\" (OBJ <>))\n\t <COND (.OBJ\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D .OBJ \" is \">)\n\t       (ELSE\n\t\t<ROBOT-TELL \"It's \" <>>)>\n\t <TELL \"already \" .ON-OFF \".\" CR>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 871,
   "endLine": 898,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,CAR \n\t\t      \" opens only when a robot attempts to enter it.\" CR>\n\t\t<RTRUE>)\n\t       (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<ROBOT-TELL\n\"I'm not sure anyone is clever enough to do that to the \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (<GETP ,PRSO ,P?ROBOT>\n\t\t<ROBOT-TELL \"What?! \" <>>\n\t\t<TELL D ,PRSO \" is a robot. That's spelled R-O-B-O-T!\" CR>)\n\t       (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<ROBOT-TELL \"I think you're out of your mind.\">)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT> <ALREADY \"open\">)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<OR <NOT <FIRST? ,PRSO>> <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <ROBOT-TELL \"Opened.\">)\n\t\t\t     (T\n\t\t\t      <ROBOT-TELL \"When I open the \" <>>\n\t\t\t      <TELL D ,PRSO \" I detect \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (T <TELL D ,PRSO \" cannot be opened.\" CR>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 900,
   "endLine": 919,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<ROBOT-TELL \"You must tell me how to do that to a \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<ROBOT-TELL \"Not a likely occurrence within reality, no?\">)\n\t       (<GETP ,PRSO ,P?ROBOT>\n\t\t<ROBOT-TELL \"I don't think \" <>>\n\t\t<HE-SHE ,PRSO>\n\t\t<TELL \" would like that.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <OR <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>\n\t\t\t <FSET? ,PRSO ,DOORBIT>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <ROBOT-TELL \"Closed.\">)\n\t\t      (T <ALREADY \"closed\">)>)\n\t       (ELSE\n\t\t<ROBOT-TELL \"I can't close that.\">)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 921,
   "endLine": 928,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,NDESCBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "CABLECOUNT": {
   "name": "CABLECOUNT",
   "file": "verbs.zil",
   "line": 930,
   "endLine": 936,
   "source": "<ROUTINE CABLECOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET CNT <+ .CNT 1>>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 940,
   "endLine": 947,
   "source": "<ROUTINE WEIGHT\n\t (OBJ \"AUX\" CONT (WT 0))\n\t #DECL ((OBJ) OBJECT (CONT) <OR FALSE OBJECT> (WT) FIX)\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET WT <+ .WT <WEIGHT .CONT>>>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 954,
   "endLine": 956,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins\" ,COPR-NOTICE CR>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 958,
   "endLine": 961,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends\" ,COPR-NOTICE CR>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 963,
   "endLine": 982,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (,PRSI\n\t\t<COND (<AND <EQUAL? ,PRSI ,RIGHT ,LEFT ,INTNUM>\n\t\t\t    <GETP ,PRSO ,P?DIAL>>\n\t\t       <PERFORM ,V?SET ,PRSO ,PRSI>\n\t\t       <RTRUE>)>)\n\t       (<AND ,PRSI\n\t\t     <EQUAL? ,PRSI ,CONVEYERBELTA>\n\t\t     <GETP ,PRSO ,P?ROBOT>>\n\t\t<PERFORM ,V?PUSH-UP ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND ,PRSI\n\t\t     <EQUAL? ,PRSI ,CONVEYERBELTB ,CONVEYERBELTC>\n\t\t     <GETP ,PRSO ,P?ROBOT>>\n\t\t<ROBOT-TELL \"There's no way to do that from here.\">)\n\t       (,PRSI\n\t        <ROBOT-TELL \"One step at a time, please.\">\n\t\t<RTRUE>)\n\t       (<HELD? ,PRSO> <ROBOT-TELL \"I don't juggle objects!\">\n\t\t<RTRUE>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 984,
   "endLine": 1008,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<EQUAL? ,PRSO ,BROKEN-SHELF>\n\t\t<ROBOT-TELL \"Okay. It's been moved.\" <>>\n\t\t<COND (<FSET? ,SMASHED-BOX ,INVISIBLE>\n\t\t       <TELL \" Moving it has revealed a \" D ,SMASHED-BOX \".\">\n\t\t       <FCLEAR ,SMASHED-BOX ,INVISIBLE>)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,TAKEBIT>\n\t\t<ROBOT-TELL \"Moving the \" <>>\n\t\t<TELL D ,PRSO \" reveals nothing.\" CR>)\n\t       (<AND <NOT ,PRSI>\n\t\t     <GETP ,PRSO ,P?ROBOT>\n\t\t     <FSET ,PRSO ,CUTBIT>\n\t\t     <NOT <EQUAL? ,WINNER-HERE ,REPAIR1>>>\n\t\t<ROBOT-TELL \"If you want \" <>>\n\t\t<TELL D ,PRSO\n\t\t      \" to be dragged, you should supply a location, too.\" CR>\n\t\t<RTRUE>)\n\t       (<GETP ,PRSO ,P?ROBOT>\n\t\t<PERFORM ,V?PUSH-UP ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (T <ROBOT-TELL \"I can't move \" <>>\n\t\t<COND (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t       <TELL \"the \">)>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "V-MOVE-ROBOT-TO-LOC": {
   "name": "V-MOVE-ROBOT-TO-LOC",
   "file": "verbs.zil",
   "line": 1010,
   "endLine": 1032,
   "source": "<ROUTINE V-MOVE-ROBOT-TO-LOC ()\n\t <COND (<EQUAL? ,PRSO ,IRIS>\n\t\t<ROBOT-TELL \"There's no place for me to get a grip on her.\">)\n\t       (<EQUAL? ,PRSO ,DEADBOT>\n\t\t<ROBOT-TELL \"There's nothing to be gained by doing that. Franklin destroyed this robot beyond all hopes of repairing.\">)\n\t       (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t<PERFORM ,V?MOVE ,PRSO>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,WINNER>\n\t\t<ROBOT-TELL \"I suppose you'll have me chasing my tail, next.\">)\n\t       (<NOT <EQUAL? <GET ,DRAG-TBL ,ROFF> 0>>\n\t\t<ROBOT-TELL \"Give me a break, would you? One at a time!\">)\n\t       (<NOT <IN? ,PRSI ,ROOMS>>\n\t\t<ROBOT-TELL \"You'll have to tell me where the \" <>>\n\t\t<TELL D ,PRSI \" is.\">)\n\t       (<NOT <GET ,DEADBOTS <GETP ,PRSO ,P?ROBOT>>>\n\t\t<ROBOT-TELL \"Let \" <>>\n\t\t<TELL D ,PRSO \" get there alone.\" CR>)\n\t       (T\n\t\t<PUT ,DRAG-TBL ,ROFF ,PRSO>\n\t\t\n\t\t<PERFORM ,V?WALK-TO ,PRSI>\n\t\t<RFATAL>)>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 1034,
   "endLine": 1041,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t #DECL ((NUM) FIX)\n\t <TELL \"FC: Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (T \n\t\t        <COND (<CLOCKER> <RETURN>)>)>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "verbs.zil",
   "line": 1043,
   "endLine": 1052,
   "source": "<ROUTINE PRE-BOARD (\"AUX\" AV)\n\t <SET AV <LOC ,WINNER>>\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <ROBOT-TELL \"I'm already in it!\">)\n\t\t      (T <RFALSE>)>)\n\t       (T\n\t\t<ROBOT-TELL \"I suppose you have a theory on boarding a \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 1054,
   "endLine": 1084,
   "source": "<ROUTINE V-BOARD (\"AUX\" AV)\n\t #DECL ((AV) OBJECT)\n\t <COND (<NOT <EQUAL? ,CAR-FULL 0>>\n\t\t<ROBOT-TELL \"There's no room in there for me, too.\">\n\t\t<RTRUE>)>\n\t <COND (<AND <EQUAL? ,WINNER ,RTHIEF>\n\t\t     <IN? ,TOOLBAG ,WINNER>>\n\t\t<MOVE ,PEOPLE ,WINNER-HERE>\n\t\t<I-CHASEAUDA>\n\t\t<CRLF>)>\n\t <ROBOT-TELL \"I am now in the \" <>>\n\t <TELL D ,PRSO \".\" CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <SETG CAR-FULL ,WINNER>\n\t <COND (<NOT <EQUAL? <GET ,FOLLOW-TBL ,ROFF> 0>>\n\t        <PUT ,FOLLOW-TBL 0 ,ROFF>)>\n\t <KILL-GOAL ,WINNER T>\n\t <COND (<EQUAL? ,WINNER-HERE ,HALL-END>\n\t\t<SETG WINNER-HERE ,CAR-AREA>)\n\t       (<EQUAL? ,WINNER-HERE ,CAR-AREA>\n\t\t<SETG WINNER-HERE ,HALL-END>)>\n\t <MOVE ,CAR ,WINNER-HERE>\n\t <ROBOT-TELL \"My gyroscopic stabilizers detect motion.\">\n\t <CRLF>\n\t <V-LOOK>\n\t <CRLF>\n\t <ROBOT-TELL \"External map reference -- \" <>>\n\t <TELL SD ,WINNER-HERE CR>\n\t <RTRUE>\n\t ;<APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t ;<RTRUE>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 1086,
   "endLine": 1097,
   "source": "<ROUTINE V-THROUGH (\"OPTIONAL\" (OBJ <>) \"AUX\" M TBL)\n\t#DECL ((OBJ) <OR OBJECT FALSE> (M) <PRIMTYPE VECTOR>)\n\t<COND (<AND <NOT .OBJ> <FSET? ,PRSO ,VEHBIT>>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<AND <NOT .OBJ> <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t       <ROBOT-YUKS>)\n\t      (.OBJ <ROBOT-TELL \"I can't do that!\">)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <ROBOT-TELL \"That would involve quite a contortion!\">)\n\t      (ELSE\n\t       <ROBOT-YUKS>)>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 1099,
   "endLine": 1106,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<NOT <==? <LOC ,WINNER> ,PRSO>>\n\t\t<ROBOT-TELL \"I'm not in that!\">\n\t\t<RFATAL>)\n\t       (T\n\t\t<ROBOT-TELL \"I am on my mobile extensions again.\">\n\t\t<MOVE ,WINNER ,WINNER-HERE>\n\t\t<SETG CAR-FULL 0>)>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 1108,
   "endLine": 1126,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T) \"AUX\" (WLOC <LOC ,WINNER>) OLIT \n\t       (COUNT 0) L F)\n\t #DECL ((RM WLOC) OBJECT)\n\t <SET OLIT ,LIT>\n\t <MOVE ,WINNER .RM>\n\t <SETG WINNER-HERE .RM>\n\t <REPEAT ()\n\t\t <COND (<G? <SET COUNT <+ .COUNT 1>> 6>\n\t\t\t<RETURN>)\n\t\t       (ELSE\n\t\t\t<COND (<EQUAL? <GET ,FOLLOW-TBL .COUNT> ,WINNER>\n\t\t\t       <SET F <GET ,NAME-TBL <- .COUNT 1>>>\n\t\t\t       <COND (<MOVE-RBT? .F <LOC .F> ,WINNER-HERE>\n\t\t\t\t      <RETURN>)>)>)>>\n\t <SETG LIT <LIT? ,WINNER-HERE>>\n\t <COND (<==? <APPLY <GETP ,WINNER-HERE ,P?ACTION> ,M-ENTER> 2>\n\t\t<RTRUE>)>\n\t <COND (.V? <V-LOOK>)>\n\t <RTRUE>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 1128,
   "endLine": 1129,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 1131,
   "endLine": 1132,
   "source": "<ROUTINE V-EAT ()\n\t <ROBOT-TELL <GET ,EAT-QUIPS ,ROFF>>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 1143,
   "endLine": 1151,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,VILLAIN>\n\t\t       <TELL \"Insults of this nature won't help you.\" CR>)\n\t\t      (T\n\t\t       <TELL \"What a loony!\" CR>)>)\n\t       (T\n\t\t<TELL\n\"Such language in a high-class establishment like this!\" CR>)>>"
  },
  "PRE-LISTEN": {
   "name": "PRE-LISTEN",
   "file": "verbs.zil",
   "line": 1153,
   "endLine": 1155,
   "source": "<ROUTINE PRE-LISTEN ()\n\t <COND (<NOT <AUDA?>>\n\t\t<ROBOT-TELL \"I can't hear.\">)>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 1157,
   "endLine": 1165,
   "source": "<ROUTINE V-LISTEN ()\n\t <COND (<AND ,PRSO\n\t\t     <NOT <EQUAL? ,PRSO ,PEOPLE>>>\n\t\t<ROBOT-TELL \"I hear nothing special.\">)\n\t       (,AUDA-LISTENS\n\t\t<ROBOT-TELL \"Okay, okay already. I'm listening.\">)\n\t       (T\n\t\t<ROBOT-TELL \"Okay. Auditory circuits activated.\">\n\t\t<SETG AUDA-LISTENS T>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 1170,
   "endLine": 1194,
   "source": "<ROUTINE V-FOLLOW ()\n\t <COND (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t<ROBOT-TELL \"I can't follow the \" <>>\n\t\t<TELL D ,PRSO \".\" CR>\n\t\t<RFATAL>)>\n\t <COND (<AND <NOT <IN? ,WINNER <LOC ,PRSO>>>\n\t\t     <NOT <EQUAL? \n\t\t\t  <GET ,LAST-ROOM <GETP ,PRSO ,P?ROBOT>> \n\t\t\t  ,WINNER-HERE>>>\n\t\t<ROBOT-TELL \"Sure. Tell me where \" <>>\n\t\t<COND (<EQUAL? <GETP ,PRSO ,P?ROBOT> 7>\n\t\t       <TELL \"the \" D ,PRSO \" are.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL D ,PRSO \" is.\" CR>)>\n\t\t<RFATAL>)>\n\t <COND (<EQUAL? ,PRSO ,WINNER>\n\t\t<ROBOT-TELL \"Be serious. I can't do that.\">\n\t\t<RTRUE>)>\n\t <DO-THE-TV>\n\t <ROBOT-TELL \"Okay. I'll follow \" <>>\n\t <COND (<EQUAL? <GETP ,PRSO ,P?ROBOT> 7>\n\t\t<TELL \"the \">)>\n\t <TELL D ,PRSO \".\" CR>\n\t <PUT ,FOLLOW-TBL ,ROFF ,PRSO>\n\t <KILL-GOAL ,WINNER>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 1196,
   "endLine": 1215,
   "source": "<ROUTINE V-LEAP (\"AUX\" TX S)\n\t #DECL ((T) <OR FALSE TABLE>)\n\t <COND (,PRSO\n\t\t<COND (<IN? ,PRSO ,WINNER-HERE>\n\t\t       <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t\t      <ROBOT-TELL \"The \" <>>\n\t\t\t      <TELL D ,PRSO \" is too big to jump over.\" CR>)\n\t\t\t     (T <V-SKIP>)>)\n\t\t      (T <ROBOT-TELL \"That would be a good trick.\">)>)\n\t       (<SET TX <GETPT ,WINNER-HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .TX>>\n\t\t<COND (<OR <==? .S 2>\t\t\t\t\t ;NEXIT\n\t\t\t   <AND <==? .S 4>\t\t\t\t ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .TX 1>>>>>\n\t\t       <TELL\n\"FC: This was not a very safe place to try jumping.\" CR>\n\t\t       <JIGS-UP \"You should have looked before you leaped.\"\n\t\t\t\t,WINNER>)\n\t\t      (T <V-SKIP>)>)\n\t       (ELSE <V-SKIP>)>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 1217,
   "endLine": 1218,
   "source": "<ROUTINE V-SKIP ()\n\t <ROBOT-YUKS>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 1220,
   "endLine": 1220,
   "source": "<ROUTINE V-LEAVE () <DO-WALK ,P?OUT>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 1224,
   "endLine": 1229,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<ROBOT-TELL\n\"I think that only schizophrenics say \\\"Hello\\\" to a \"<>>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (ELSE <ROBOT-TELL <PICK-ONE ,HELLOS>>)>>"
  },
  "V-HINT": {
   "name": "V-HINT",
   "file": "verbs.zil",
   "line": 1239,
   "endLine": 1257,
   "source": "<ROUTINE V-HINT (\"AUX\" TEMP)\n\t <COND (<G? <GET ,DEADBOTS 6> 29>\n\t\t<TELL \"FC: Whiz is no longer operational, and there's nothing I can do to help you without him.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <IN? ,WHIZ ,PERIPH-3>\n\t\t     ,PLUGGED-IN>\n\t\t<TELL \"FC: Whiz is plugged in to the Advisory Pedestal and ready to ask about things for you.\" CR>\n\t\t<RTRUE>)\n\t       (<IN? ,WHIZ ,PERIPH-3>\n\t\t<SETG PLUGGED-IN 3> \n\t\t<TELL \"FC: I've taken the liberty of directing Whiz to plug in to the Advisory Pedestal. You may now direct him to ask about things for you.\" CR>\n\t\t<CHANGE-WINNER ,WHIZ>)\n\t       (T\n\t\t<TELL \"FC: I'm taking the liberty of directing Whiz to the Advisory Peripheral so you may later have him ask about things.\" CR>\n\t\t<SET TEMP ,WINNER>\n\t\t<CHANGE-WINNER ,WHIZ T>\n\t\t<CRLF>\n\t\t<PERFORM ,V?WALK-TO ,PERIPH-3>\n\t\t<RTRUE>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1265,
   "endLine": 1285,
   "source": "<ROUTINE V-READ ()\n\t <COND (<AND <EQUAL? ,PRSO ,MONITOR>\n\t\t     <IRIS?>\n\t\t     ,IRIS-FIXED\n\t\t     <EQUAL? <LOC ,IRIS> \n\t\t\t     ,WEATHER-BANKS ,RTD-BANKS ,SERVO-SYSTEMS>>\n\t\t<V-LOOK>\n\t\t<RTRUE>)\n\t       (<OR <EQUAL? ,PRSO ,CIRCLE1 ,CIRCLE2 ,CIRCLE3>\n\t\t    <EQUAL? ,PRSO ,CIRCLE4 ,CIRCLE5 ,CIRCLE6>\n\t\t    <EQUAL? ,PRSO ,CIRCLE7 ,CIRCLE8>>\n\t\t<PERFORM ,V?EXAMINE ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,SIGNPOST>\n\t\t     <NOT <IRIS?>>>\n\t\t<ROBOT-TELL \n\t\t \"I'm not equipped with the necessary visual sensors.\">\n\t\t<RTRUE>)\n\t       (T\n\t\t<ROBOT-TELL \"How can I read a \" <>>\n\t\t<TELL D ,PRSO \"?\" CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 1287,
   "endLine": 1292,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <COND (<AND <EQUAL? ,PRSO ,BROKEN-SHELF>\n\t\t     <FSET? ,SMASHED-BOX ,INVISIBLE>\n\t\t     <NOT <AUDA?>>>\n\t\t<ROBOT-TELL \"There is something under there.\">)\n\t       (T <ROBOT-TELL \"There is nothing but dust there.\">)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1294,
   "endLine": 1294,
   "source": "<ROUTINE V-LOOK-BEHIND () <V-LOOK-UNDER>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1296,
   "endLine": 1312,
   "source": "<ROUTINE V-LOOK-INSIDE ()\n\t <COND (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,VICBIT>\n\t\t       <ROBOT-TELL \"There is nothing special to be seen.\">)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO> <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t      <ROBOT-TELL \"There is nothing on the \" <>>\n\t\t\t      <TELL D ,PRSO \".\" CR>)\n\t\t\t     (T\n\t\t\t      <ROBOT-TELL \"The \" <>>\n\t\t\t      <TELL D ,PRSO \" is empty.\" CR>)>)\n\t\t      (ELSE <ROBOT-TELL \"The \" <>>\n\t\t       <TELL D ,PRSO \" is closed.\" CR>)>)\n\t       (ELSE <ROBOT-TELL \"I don't know how to look inside a \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 1314,
   "endLine": 1316,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "PRE-TURN": {
   "name": "PRE-TURN",
   "file": "verbs.zil",
   "line": 1318,
   "endLine": 1322,
   "source": "<ROUTINE PRE-TURN ()\n\t <COND (<NOT <FSET? ,PRSO ,TURNBIT>> <ROBOT-TELL \"I can't turn that!\">)\n\t       (<NOT <FSET? ,PRSI ,TOOLBIT>>\n\t\t<ROBOT-TELL \"I certainly can't turn it with a \" <>>\n\t\t<TELL D ,PRSI \".\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 1324,
   "endLine": 1324,
   "source": "<ROUTINE V-TURN () <ROBOT-TELL \"You must be more specific.\">>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 1326,
   "endLine": 1326,
   "source": "<ROUTINE V-PICK () <V-TURN>>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 1328,
   "endLine": 1329,
   "source": "<ROUTINE V-KILL ()\n\t <IKILL \"kill\">>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 1331,
   "endLine": 1346,
   "source": "<ROUTINE IKILL (STR)\n\t #DECL ((STR) STRING)\n\t <COND (<NOT ,PRSO> <TELL \"There is nothing here to \" .STR \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,VILLAIN>>\n\t\t     <NOT <FSET? ,PRSO ,VICBIT>>>\n\t\t<ROBOT-TELL \"I've known strange people, but fighting a \" <>>\n\t\t<TELL D ,PRSO \"?\" CR>)\n\t       (<OR <NOT ,PRSI> <==? ,PRSI ,HANDS>>\n\t\t<FUTILE .STR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<ROBOT-TELL \"Trying to \" <>>\n\t\t<TELL .STR>\n\t\t<COND (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t       <TELL \" the\">)>\n\t\t<TELL \" \" D ,PRSO \" with a \" D ,PRSI <GET ,HO-HUMS ,ROFF> CR>)\n\t       (ELSE <TELL \"I can't.\" CR>)>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 1348,
   "endLine": 1348,
   "source": "<ROUTINE V-ATTACK () <IKILL \"attack\">>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 1350,
   "endLine": 1350,
   "source": "<ROUTINE V-KICK () <HACK-HACK \"Kicking \">>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 1352,
   "endLine": 1352,
   "source": "<ROUTINE V-WAVE () <HACK-HACK \"Waving \">>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 1354,
   "endLine": 1360,
   "source": "<ROUTINE V-RAISE ()\n\t <COND (<AND <GETP ,PRSO ,P?ROBOT>\n\t\t     <IN? ,WINNER ,REPAIR1>>\n\t\t<PERFORM ,V?PUSH-UP ,PRSO ,WEDGE>\n\t\t<RTRUE>)\n\t       (T\n\t\t<HACK-HACK \"Playing in this way with \">)>>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "verbs.zil",
   "line": 1362,
   "endLine": 1362,
   "source": "<ROUTINE V-LOWER () <HACK-HACK \"Playing in this way with \">>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1364,
   "endLine": 1364,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with \">>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1366,
   "endLine": 1366,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing \">>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "verbs.zil",
   "line": 1368,
   "endLine": 1372,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND (<NOT <FSET? ,PRSO ,VICBIT>>\n\t\t<HACK-HACK \"Trying to destroy \">)\n\t       (<NOT ,PRSI>\n\t\t<FUTILE \"destroy\">)>>"
  },
  "FUTILE": {
   "name": "FUTILE",
   "file": "verbs.zil",
   "line": 1374,
   "endLine": 1379,
   "source": "<ROUTINE FUTILE (STR)\n\t <ROBOT-TELL \"Trying to \" <>>\n\t <TELL .STR>\n\t <COND (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t<TELL \" a\">)>\n\t <TELL \" \" D ,PRSO <GET ,HO-HUMS ,ROFF> CR>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 1381,
   "endLine": 1382,
   "source": "<ROUTINE V-MUNG ()\n\t <ROBOT-TELL \"I can't do that.\">>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 1384,
   "endLine": 1390,
   "source": "<ROUTINE HACK-HACK\n\t (STR)\n\t #DECL ((STR) STRING)\n\t <TELL .STR>\n\t <COND (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t<TELL \"the \">)>\n\t <TELL D ,PRSO <GET ,HO-HUMS ,ROFF> CR>>"
  },
  "WORD-TYPE": {
   "name": "WORD-TYPE",
   "file": "verbs.zil",
   "line": 1400,
   "endLine": 1405,
   "source": "<ROUTINE WORD-TYPE\n\t (OBJ WORD \"AUX\" SYNS)\n\t #DECL ((OBJ) OBJECT (WORD SYNS) TABLE)\n\t <ZMEMQ .WORD\n\t\t<SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t<- </ <PTSIZE .SYNS> 2> 1>>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1407,
   "endLine": 1409,
   "source": "<ROUTINE V-KNOCK ()\n\t <ROBOT-TELL \"Why knock on a \" <>>\n\t <TELL D ,PRSO \"?\" CR>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 1411,
   "endLine": 1411,
   "source": "<ROUTINE V-YELL () <ROBOT-TELL <GET ,YELL-QUIPS ,ROFF>>>"
  },
  "V-PLUGIN": {
   "name": "V-PLUGIN",
   "file": "verbs.zil",
   "line": 1421,
   "endLine": 1442,
   "source": "<ROUTINE V-PLUGIN (\"AUX\" TBL) \n\t <COND (<NOT <WHIZ?>>\n\t\t<ROBOT-YUKS>)\n\t       (,PLUGGED-IN\n\t\t<ROBOT-TELL \"I'm already plugged in to the \" <>>\n\t\t<TELL <GET ,PLUG-LOCS ,PLUGGED-IN> CR>)\n\t       (<AND <NOT <EQUAL? ,PRSO ,PERIPH1-OBJ ,PERIPH2-OBJ\n\t\t\t\t  ,PERIPH3-OBJ>>\n\t\t     <NOT <EQUAL? ,PRSO ,PERIPH4-OBJ ,ROOMS>>>\n\t\t<ROBOT-TELL \"I can't plug in to the \"<>>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (<OR <EQUAL? ,WINNER-HERE ,PERIPH-1 ,PERIPH-2>\n\t\t    <EQUAL? ,WINNER-HERE ,PERIPH-3 ,PERIPH-4>>\n\t\t<COND (<EQUAL? ,WINNER-HERE ,PERIPH-1> <SETG PLUGGED-IN 1>)\n\t\t      (<EQUAL? ,WINNER-HERE ,PERIPH-2> <SETG PLUGGED-IN 2>)\n\t\t      (<EQUAL? ,WINNER-HERE ,PERIPH-3> <SETG PLUGGED-IN 3>)\n\t\t      (<EQUAL? ,WINNER-HERE ,PERIPH-4> <SETG PLUGGED-IN 4>)>\n\t\t<ROBOT-TELL \"It's great to be home. Plugged in to the \" <>>\n\t\t<TELL <GET ,PLUG-LOCS ,PLUGGED-IN>\n\t\t      \" Ready to process queries.\" CR>)\n\t       (T\n\t\t<ROBOT-TELL \"There's nothing to plug in to here.\">)>>"
  },
  "V-UNPLUG": {
   "name": "V-UNPLUG",
   "file": "verbs.zil",
   "line": 1450,
   "endLine": 1458,
   "source": "<ROUTINE V-UNPLUG ()\n\t <COND (<NOT <WHIZ?>>\n\t\t<ROBOT-TELL \"Who do you think I am, Whiz? Gimme a break!\">)\n\t       (<NOT ,PLUGGED-IN>\n\t\t<ROBOT-TELL\n\"That's not possible. I'm not plugged in.\">)\n\t       (ELSE\n\t\t<SETG PLUGGED-IN <>>\n\t\t<ROBOT-TELL \"Unplugged.\">)>>"
  },
  "V-QUERY": {
   "name": "V-QUERY",
   "file": "verbs.zil",
   "line": 1460,
   "endLine": 1483,
   "source": "<ROUTINE V-QUERY ()\n\t <COND (<AND <NOT <WHIZ?>>\n\t\t     <NOT ,PRSO>>\n\t\t<ROBOT-TELL \"Get real, joker!\">)\n\t       (<NOT <WHIZ?>>\n\t\t<TELL \"FC: I'm translating that command into a request for a description of the \" D ,PRSO \".\" CR>\n\t\t<PERFORM ,V?EXAMINE ,PRSO>\n\t\t<RTRUE>)\n\t       (<NOT ,PLUGGED-IN>\n\t\t<ROBOT-TELL \"I can't until a CLC link is established.\">\n\t\t<RFATAL>)\n\t       (<NOT ,PRSI>\n\t\t<DO-QUERY>\n\t\t<RTRUE>)\n\t       (<OR <EQUAL? ,PRSO ,PERIPH1-OBJ ,PERIPH2-OBJ>\n\t\t    <EQUAL? ,PRSO ,PERIPH3-OBJ ,PERIPH4-OBJ>\n\t\t    <IN? ,WHIZ ,PERIPH-1> <IN? ,WHIZ ,PERIPH-2>\n\t\t    <IN? ,WHIZ ,PERIPH-3> <IN? ,WHIZ ,PERIPH-4>>\n\t\t<SETG PRSO ,PRSI>\n\t\t<DO-QUERY>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<ROBOT-TELL \"I don't know how to query a \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "DO-QUERY": {
   "name": "DO-QUERY",
   "file": "verbs.zil",
   "line": 1488,
   "endLine": 1512,
   "source": "<ROUTINE DO-QUERY (\"AUX\" STR OUTSTR (COUNT 0))\n\t <SET STR <GETP ,PRSO ,P?CLC-TXT>>\n\t <SET OUTSTR <GET ,PLUGOUTS ,PLUGGED-IN>>\n\t <COND (<NOT .STR>\n\t\t<COND (<EQUAL? ,PLUGGED-IN 1>\n\t\t       <TELL .OUTSTR \"Index search indicates no data stored on that subject.\" CR>)\n\t\t      (T\n\t\t       <TELL .OUTSTR \n\t\t\t     \"No data available on that subject from the \"\n\t\t       <GET ,PLUG-LOCS ,PLUGGED-IN> CR>)>\n\t\t<RTRUE>) \n\t       (<EQUAL? ,PLUGGED-IN 1>\n\t\t<REPEAT ()\n\t\t\t<SET COUNT <+ .COUNT 1>>\n\t\t\t<COND (<EQUAL? .COUNT 4>\n\t\t\t       <RTRUE>)>\n\t\t\t<COND (<NOT <EQUAL? <GET .STR .COUNT> 0>>\n\t\t\t       <TELL .OUTSTR \"Data available from the \"\n\t\t\t\t     <GET ,PLUG-LOCS <+ .COUNT 1>> CR>)>>)\n\t       (ELSE\n\t\t<COND (<NOT <EQUAL? <SET STR <GET .STR <- ,PLUGGED-IN 1>>> 0>>\n\t\t       <TELL .OUTSTR .STR CR>)\n\t\t      (T\n\t\t       <TELL .OUTSTR \n\"No data available on that subject at this peripheral.\" CR>)>)>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 1514,
   "endLine": 1526,
   "source": "<ROUTINE V-SHAKE (\"AUX\" X)\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<ROBOT-TELL \"This seems to have no effect.\">)\n\t       (<AND <NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t     <FIRST? ,PRSO>>\n\t\t<ROBOT-TELL \"It sounds as if there is something inside the \" <>>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (<AND <FSET? ,PRSO ,OPENBIT> <FIRST? ,PRSO>>\n\t\t<REPEAT ()\n\t\t\t<COND (<SET X <FIRST? ,PRSO>> <MOVE .X ,WINNER-HERE>)\n\t\t\t      (ELSE <RETURN>)>>\n\t\t<ROBOT-TELL \"All of the objects spill onto the floor.\">)\n\t       (T <ROBOT-TELL \"Why bother?\">)>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "verbs.zil",
   "line": 1528,
   "endLine": 1528,
   "source": "<ROUTINE V-DIG () <ROBOT-TELL \"What a silly idea!\">>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1530,
   "endLine": 1531,
   "source": "<ROUTINE V-SMELL ()\n\t <ROBOT-TELL \"I can't do that.\">>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 1533,
   "endLine": 1536,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TX)\n\t #DECL ((OBJ1 OBJ2) OBJECT (TX) <OR FALSE TABLE>)\n\t <COND (<SET TX <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .TX <- <PTSIZE .TX> 1>>)>>"
  },
  "HERE??": {
   "name": "HERE??",
   "file": "verbs.zil",
   "line": 1538,
   "endLine": 1539,
   "source": "<ROUTINE HERE?? (OBJ)\n\t <OR <IN? .OBJ ,WINNER-HERE> <GLOBAL-IN? .OBJ ,WINNER-HERE>>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 1541,
   "endLine": 1542,
   "source": "<ROUTINE V-SWIM ()\n\t <ROBOT-TELL \"You can't swim here!\">>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 1544,
   "endLine": 1568,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<NOT <EQUAL? ,PRSO ,PEOPLE>>\n\t\t<ROBOT-TELL \"Be serious, would you?\">\n\t\t<RFATAL>)\n\t       (<AND <G? ,SLEEPERS 0>\n\t\t     <IN? ,PEOPLE ,SLEEP-CHAMBER>\n\t\t     <IN? ,WINNER ,SLEEP-CHAMBER>>\n\t\t<ROBOT-TELL \"I'm shaking them.\">\n\t\t<COND (<AUDA-HEARS?>\n\t\t       <AUDA-SPEAKS>\n\t\t       <TELL CR\n\"\\\"Beat it, you stupid robot! Can't you see we're trying to sleep?!\\\"\" CR>)>\n\t        <COND (<ROBOT-THERE? ,WALDO>\n\t\t       <TELL CR\n\"WALDO: The \" D ,PEOPLE \" are motioning violently and then resuming their reclining positions.\" CR>)\n\t              (<ROBOT-THERE? ,SENSA>\n\t\t       <TELL CR\n\"SENSA: The air is becoming charged with ionic activity as the \" D ,PEOPLE \n\" stir from quiescence. They then return to a quiet state.\" CR>)\n\t              (<ROBOT-THERE? ,POET>\n\t\t       <TELL CR\n\"POET: Like loaves of bread sitting on a warm oven, the \" D ,PEOPLE \n\t\t\t\t\t\t\t  \" rise then fall.\" CR>)>)\n\t       (T\n\t        <ROBOT-TELL \"They're not asleep.\">)>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "verbs.zil",
   "line": 1570,
   "endLine": 1570,
   "source": "<ROUTINE V-ZORK () <TELL \"I see no Zork here.\" CR>>"
  },
  "V-COMMAND": {
   "name": "V-COMMAND",
   "file": "verbs.zil",
   "line": 1572,
   "endLine": 1576,
   "source": "<ROUTINE V-COMMAND ()\n\t <COND (<FSET? ,PRSO ,VICBIT>\n\t\t<TELL \"The \" D ,PRSO \" pays no attention.\" CR>)\n\t       (ELSE\n\t\t<TELL \"You cannot talk to that!\" CR>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 1578,
   "endLine": 1588,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE>\n\t\t     <FSET? ,PRSO ,VEHBIT>>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,CLIMBBIT>\n\t\t<PERFORM ,V-CLIMB-ON ,PRSO>)\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<V-CLIMB-UP ,P?UP T>)\n\t       (T\n\t\t<TELL \"I can't climb onto the \" D ,PRSO \".\" CR>)>>"
  },
  "V-GET-OFF": {
   "name": "V-GET-OFF",
   "file": "verbs.zil",
   "line": 1590,
   "endLine": 1595,
   "source": "<ROUTINE V-GET-OFF ()\n\t <COND (<NOT <EQUAL? <GETP ,WINNER ,P?ROBOT> ,ON-WEDGE>>\n\t\t<ROBOT-TELL \"I can't. I'm not on it.\">)\n\t       (ELSE\n\t\t<SETG ON-WEDGE <>>\n\t\t<ROBOT-TELL \"Okay. I'm off of it now.\">)>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 1598,
   "endLine": 1598,
   "source": "<ROUTINE V-CLIMB-FOO () <V-CLIMB-UP ,P?UP T>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 1600,
   "endLine": 1610,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X)\n\t #DECL ((DIR) FIX (OBJ) <OR ATOM FALSE> (X) TABLE)\n\t <COND (<GETPT ,WINNER-HERE .DIR>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<TELL <GET ,CANT-GO ,ROFF> CR>)\n\t       (<EQUAL? ,PRSO ,WEDGE>\n\t\t<PERFORM ,V?CLIMB-ON ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE <TELL \"Bizarre!\" CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 1612,
   "endLine": 1620,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<AND <FSET? ,PRSO ,FURNITURE>\n\t\t     <FSET? ,PRSO ,VEHBIT>>\n\t\t<V-CLIMB-ON>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,WEDGE>\n\t\t<PERFORM ,V?GET-OFF ,PRSO>\n\t\t<RTRUE>)\n\t       (T <V-CLIMB-UP ,P?DOWN>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 1622,
   "endLine": 1626,
   "source": "<ROUTINE V-PUT-UNDER ()\n\t <COND (<EQUAL? ,PRSI ,TOPSHELF ,WHEEL ,CLONESWITCH>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)>\n\t <TELL \"I can't do that.\" CR>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 1628,
   "endLine": 1629,
   "source": "<ROUTINE V-ENTER ()\n\t <DO-WALK ,P?IN>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 1631,
   "endLine": 1632,
   "source": "<ROUTINE V-EXIT ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 1634,
   "endLine": 1638,
   "source": "<ROUTINE V-SEARCH ()\n\t <COND (<FSET? ,PRSO ,CONTBIT>\n\t\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t\t<RTRUE>)\n\t       (T <ROBOT-TELL \"I found nothing unusual.\">)>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 1640,
   "endLine": 1662,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<AND <GETP ,PRSO ,P?ROBOT>\n\t\t     <NOT <IN? ,PRSO ,WINNER-HERE>>>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<ROBOT-TELL \"You find it.\">)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<ROBOT-TELL \"I have it.\">)\n\t       (<OR <IN? ,PRSO ,WINNER-HERE>\n\t\t    <==? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<COND (<GETP ,PRSO ,P?ROBOT>\n\t\t       <TELL D ,PRSO \" is\">)\n\t\t      (T <TELL \"It's\">)>\n\t\t<TELL \" right here.\" CR>)\n\t       (<FSET? .L ,VILLAIN>\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D .L \" have it.\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<ROBOT-TELL \"It's in the \" <>>\n\t\t<TELL D .L \".\" CR>)\n\t       (ELSE\n\t\t<ROBOT-TELL \"Beats me.\">)>>"
  },
  "REAL-ROBOT": {
   "name": "REAL-ROBOT",
   "file": "verbs.zil",
   "line": 1675,
   "endLine": 1688,
   "source": "<ROUTINE REAL-ROBOT (OBJ)\n\t <COND (<==? .OBJ ,GLOBAL-IRIS>\n\t\t,IRIS)\n\t       (<==? .OBJ ,GLOBAL-WALDO>\n\t\t,WALDO)\n\t       (<==? .OBJ ,GLOBAL-AUDA>\n\t\t,AUDA)\n\t       (<==? .OBJ ,GLOBAL-SENSA>\n\t\t,SENSA)\n\t       (<==? .OBJ ,GLOBAL-POET>\n\t\t,POET)\n\t       (<==? .OBJ ,GLOBAL-WHIZ>\n\t\t,WHIZ)\n\t       (T ,PEOPLE)>>"
  },
  "V-$TELL": {
   "name": "V-$TELL",
   "file": "verbs.zil",
   "line": 1692,
   "endLine": 1703,
   "source": "<ROUTINE V-$TELL ()\n\t <COND (<AND <GETP ,PRSO ,P?ROBOT>\n\t\t     <NOT <EQUAL? ,PRSO ,PEOPLE>>>\n\t\t<COND (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t       <SETG PRSO <REAL-ROBOT ,PRSO>>)>\n\t\t<SETG OLD-WINNER ,WINNER>\n\t\t<CHANGE-WINNER ,PRSO>)\n\t       (T\n\t\t<TELL \"FC: You can't talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 1705,
   "endLine": 1707,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody is awaiting your answer.\" CR>\n\t <RFATAL>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 1709,
   "endLine": 1711,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is hardly likely that the \" D ,PRSO \" is interested.\" CR>\n\t <RFATAL>>"
  },
  "V-IS-IN": {
   "name": "V-IS-IN",
   "file": "verbs.zil",
   "line": 1713,
   "endLine": 1720,
   "source": "<ROUTINE V-IS-IN ()\n\t <COND (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"Yes, it is \">\n\t\t<COND (<FSET? ,PRSI ,SURFACEBIT>\n\t\t       <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<TELL \" the \" D ,PRSI \".\" CR>)\n\t       (T <TELL \"No, it isn't.\" CR>)>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 1722,
   "endLine": 1728,
   "source": "<ROUTINE V-KISS ()\n\t <COND (<IRIS?> <ROBOT-TELL \"Without lips, that's quite a trick.\">)\n\t       (<WALDO?> <ROBOT-TELL \"With what, my hands?\">)\n\t       (<SENSA?> <ROBOT-TELL \"I can't do that.\">)\n\t       (<AUDA?> <ROBOT-TELL \"No, I don't think so.\">)\n\t       (<POET?> <ROBOT-TELL \"Loose lips sink slips.\">)\n\t       (<WHIZ?> <ROBOT-TELL \"I'd sooner kiss the CLC.\">)>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 1730,
   "endLine": 1731,
   "source": "<ROUTINE V-RAPE ()\n\t <ROBOT-TELL \"What a BIZARRE concept!\">>"
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "verbs.zil",
   "line": 1733,
   "endLine": 1738,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W> <RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<FSET? .W .WHAT> <RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RETURN <>>)>>>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 1740,
   "endLine": 1745,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<NOT <FSET? ,PRSO ,WEARABLEBIT>>\n\t\t<ROBOT-TELL \"An interesting but highly unlikely thought.\">)\n\t       (ELSE\n\t\t<ROBOT-TELL \"It's now being worn.\">\n\t        <FSET ,PRSO ,WEARBIT>)>>\t "
  },
  "V-REMOVE": {
   "name": "V-REMOVE",
   "file": "verbs.zil",
   "line": 1747,
   "endLine": 1749,
   "source": "<ROUTINE V-REMOVE ()\n\t <COND (<FSET? ,PRSO ,WEARBIT> <PERFORM ,V?TAKE-OFF ,PRSO> <RTRUE>)\n\t       (ELSE <PERFORM ,V?TAKE ,PRSO> <RTRUE>)>>"
  },
  "V-TAKE-OFF": {
   "name": "V-TAKE-OFF",
   "file": "verbs.zil",
   "line": 1751,
   "endLine": 1758,
   "source": "<ROUTINE V-TAKE-OFF ()\n\t <COND (<FSET? ,PRSO ,VEHBIT> \n\t\t<V-DISEMBARK>)\n\t       (<FSET? ,PRSO ,WEARBIT>\n\t\t<FCLEAR ,PRSO ,WEARBIT>\n\t\t<ROBOT-TELL \"It's been removed.\">\n\t\t<RTRUE>)\n\t       (T <ROBOT-TELL \"I'm not wearing that.\">)>>"
  },
  "V-STEP-ON": {
   "name": "V-STEP-ON",
   "file": "verbs.zil",
   "line": 1760,
   "endLine": 1767,
   "source": "<ROUTINE V-STEP-ON ()\n\t <COND (<EQUAL? ,PRSO ,WEDGE>\n\t\t<PERFORM ,V?CLIMB-ON ,PRSO>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,CONVEYERBELTA ,CONVEYERBELTB ,CONVEYERBELTC>\n\t\t<ROBOT-TELL \"There's no need for that since I'm working fine.\">)\n\t       (ELSE\n\t <TELL \"That's a silly thing to do.\" CR>)>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 1769,
   "endLine": 1774,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<AND <EQUAL? ,PRSI ,TOPSHELF>\n\t\t     <NOT <EQUAL? <GETP ,WINNER ,P?ROBOT> ,ON-WEDGE>>>\n\t\t<ROBOT-TELL \"I can't reach up that far.\">)\n\t       (ELSE\n\t\t<PERFORM ,V?PUT ,PRSO ,PRSI>)>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "verbs.zil",
   "line": 1776,
   "endLine": 1784,
   "source": "<ROUTINE ROB (WHO \"OPTIONAL\" (WHERE <>) (HIDE? <>) \"AUX\" N X (ROBBED? <>))\n\t <SET X <FIRST? .WHO>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .ROBBED?>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<RIPOFF .X .WHERE>\n\t\t\t<COND (.HIDE? <FSET .X ,NDESCBIT>)>\n\t\t\t<SET ROBBED? .X>)>\n\t\t <SET X .N>>>"
  },
  "RIPOFF": {
   "name": "RIPOFF",
   "file": "verbs.zil",
   "line": 1786,
   "endLine": 1793,
   "source": "<ROUTINE RIPOFF (X WHERE)\n\t <COND (<AND <NOT <IN? .X .WHERE>>\n\t\t     <NOT <FSET? .X ,INVISIBLE>>\n\t\t     <FSET? .X ,TOUCHBIT>\n\t\t     <FSET? .X ,TAKEBIT>>\n\t\t<COND (.WHERE <MOVE .X .WHERE>)\n\t\t      (ELSE <REMOVE .X>)>\n\t\t<RTRUE>)>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 1795,
   "endLine": 1800,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"I'm already standing, I think.\" CR>)>>"
  },
  "V-NO": {
   "name": "V-NO",
   "file": "verbs.zil",
   "line": 1802,
   "endLine": 1803,
   "source": "<ROUTINE V-NO ()\n\t <TELL \"FC: You sound rather negative.\" CR>>"
  },
  "V-YES": {
   "name": "V-YES",
   "file": "verbs.zil",
   "line": 1805,
   "endLine": 1806,
   "source": "<ROUTINE V-YES ()\n\t <TELL \"FC: You sound rather positive.\" CR>>"
  },
  "V-POINT": {
   "name": "V-POINT",
   "file": "verbs.zil",
   "line": 1808,
   "endLine": 1873,
   "source": "<ROUTINE V-POINT (\"AUX\" W)\n\t <COND (<GETP ,PRSO ,P?ROBOT>\n\t\t<ROBOT-TELL \"Let \" <>>\n\t\t<HIM-HER ,PRSO> <TELL \" do it \">\n\t\t<HIM-HER ,PRSO>\n\t\t<COND (<EQUAL? ,PRSO ,PEOPLE>\n\t\t       <TELL \"selves.\" CR>)\n\t\t      (T\n\t\t       <TELL \"self.\" CR>)>)\n\t       (<NOT <EQUAL? ,PRSO ,TV>>\n\t\t<ROBOT-TELL \"Okay, but it's impolite.\">)\n\t       (<EQUAL? ,PRSO ,PRSI>\n\t\t<ROBOT-TELL \"That would be a neat trick.\">)\n\t       (<AND <IN? ,PRSI ,GLOBAL-OBJECTS>\n\t\t     <NOT <EQUAL? ,PRSI ,GLOBAL-IRIS \n\t\t\t\t  ,GLOBAL-WALDO ,GLOBAL-SENSA>>\n\t\t     <NOT <EQUAL? ,PRSI ,GLOBAL-AUDA ,GLOBAL-POET\n\t\t\t\t  ,GLOBAL-WHIZ>>>\n\t\t<TELL \"FC: There's no need to do that.\" CR>)\n\t       (<OR <NOT ,TV-ON>\n\t\t    <NOT ,IRIS-FIXED>\n\t\t    <FSET? ,IRIS ,CUTBIT>>\n\t\t<ROBOT-TELL \"Okay.\">)\n\t       (T\n\t\t<ROBOT-TELL \"The \" <>>\n\t\t<TELL D ,TV \" has been pointed at \">\n\t\t<COND (<NOT <GETP ,PRSI ,P?ROBOT>>\n\t\t       <TELL \"the \">)>\n\t\t<TELL D ,PRSI \".\" CR>\n\t\t<CRLF>\n\t\t<COND (<EQUAL? ,PRSI ,GROOVE1 ,GROOVE2 ,CABLES>\n\t\t       <SET W ,WINNER>\n\t\t       <CHANGE-WINNER ,IRIS T>\n\t\t       <TELL <GET ,INTER-TBL 1>\n\" Transmission indicates the cables rest in the grooves in the following order: \">\n\t\t       <COND (<IN? .W ,TUBE2>\n\t\t\t      <COND (,REDSET\n\t\t\t\t     <TELL D ,REDSET>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL \"empty\">)>\n\t\t\t      <TELL \"; \" D ,YELLOWCABLE  \"; \"\n\t\t\t\t     D ,GREENCABLE \"; and \" D ,PINKCABLE \". \">)\n\t\t\t     (T\n\t\t\t      <TELL  D ,WHITECABLE \"; \" D ,BLUECABLE \"; \"\n\t\t\t\t    D ,BLACKCABLE \"; and \">\n\t\t\t      <COND (,ORANGESET\n\t\t\t\t     <TELL D ,ORANGESET \". \">)\n\t\t\t\t    (ELSE\n\t\t\t\t     <TELL \"empty. \">)>)>\n\t\t       <TELL <GET ,CABLE-TBL ,ROFF> CR>\n\t\t       <CHANGE-WINNER .W T>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSI ,SIGNPOST>\n\t\t       <SET W ,WINNER>\n\t\t       <CHANGE-WINNER ,IRIS T>\n\t\t       <TELL <GET ,INTER-TBL 1>\n\" The little sign presents me with the access code the machine in the Main Supply Room needs to reset the Filtering Computers. It says \" SD ,CODE1 SD ,CODE2 \".\" CR>\n\t\t       <CHANGE-WINNER .W T>\n\t\t       <RTRUE>)>\n\t\t<TELL <GET ,INTER-TBL 1> \" \" <PICK-ONE ,IRIS-TV-QUIPS>>\n\t\t<COND (<NOT <GETP ,PRSI ,P?ROBOT>>\n\t\t       <TELL \"a \">)>\n\t\t<SET W ,WINNER>\n\t\t<CHANGE-WINNER ,IRIS T>\n\t\t<TELL D ,PRSI \".\" CR>\n\t\t<CHANGE-WINNER .W T>)>>"
  },
  "V-SET": {
   "name": "V-SET",
   "file": "verbs.zil",
   "line": 1883,
   "endLine": 1920,
   "source": "<ROUTINE V-SET (\"AUX\" DIALOFF OLDNUM)\n\t <SET DIALOFF <GETP ,PRSO ,P?DIAL>>\n\t <COND (<NOT .DIALOFF>\n\t\t<ROBOT-TELL \"I don't know how to do that to \" <>>\n\t\t<COND (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t       <TELL \"a \">)>\n\t\t<TELL D ,PRSO \".\" CR> <RTRUE>)>\n\t <COND (<NOT <EQUAL? ,PRSI ,INTNUM ,RIGHT ,LEFT>>\n\t\t<ROBOT-TELL \"How am I supposed to accomplish that?\"><RTRUE>)>\n\t <SET OLDNUM <GET ,DIALSETS .DIALOFF>>\n\t <COND (<EQUAL? ,PRSI ,RIGHT>\n\t\t<SETG P-NUMBER <+ .OLDNUM 10>>\n\t\t<COND (<G? ,P-NUMBER 100>\n\t\t       <ROBOT-TELL \"It can't go \" <>>\n\t\t       <COND (<EQUAL? ,PRSO ,LEVER1 ,LEVER2 ,LEVER3>\n\t\t\t      <TELL \"forward\">)\n\t\t\t     (T\n\t\t\t      <TELL \"right\">)>\n\t\t       <TELL \" any more.\" CR>)>)\n\t       (<EQUAL? ,PRSI ,LEFT>\n\t\t<COND (<EQUAL? .OLDNUM 0>\n\t\t       <ROBOT-TELL \"It can't go \" <>>\n\t\t       <COND (<EQUAL? ,PRSO ,LEVER1 ,LEVER2 ,LEVER3>\n\t\t\t      <TELL \"back\">)\n\t\t\t     (T\n\t\t\t      <TELL \"left\">)>\n\t\t       <TELL \" any more.\" CR> <RTRUE>)\n\t\t      (<L? .OLDNUM 10>\n\t\t       <SETG P-NUMBER 0>)\n\t\t      (ELSE\n\t\t       <SETG P-NUMBER <- .OLDNUM 10>>)>)>\n\t <COND (<G? ,P-NUMBER 100>\n\t\t<ROBOT-TELL \"That setting is out of range.\"> <RTRUE>)>\n\t <COND (<EQUAL? ,P-NUMBER .OLDNUM>\n\t\t<ROBOT-TELL \"That's where it was already set.\"> <RTRUE>)>\n\t <PUT ,DIALSETS .DIALOFF ,P-NUMBER>\n\t <ROBOT-TELL \"The \" <>>\n\t <TELL D ,PRSO \" has been set to \" N ,P-NUMBER \".\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 1923,
   "endLine": 1924,
   "source": "<ROUTINE V-PLAY ()\n\t <TELL \"Playing a \" D ,PRSO \"?\" CR>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 1926,
   "endLine": 1929,
   "source": "<ROUTINE V-$VERIFY ()\n\t <TELL \"Verifying game...\" CR>\n\t <COND (<VERIFY> <TELL \"Game correct.\" CR>)\n\t       (T <TELL CR \"** Game File Failure **\" CR>)>>"
  },
  "V-STAND-ON": {
   "name": "V-STAND-ON",
   "file": "verbs.zil",
   "line": 1931,
   "endLine": 1936,
   "source": "<ROUTINE V-STAND-ON ()\n\t <COND (<EQUAL? ,WEDGE ,PRSO>\n\t\t<PERFORM ,V?CLIMB-ON ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<ROBOT-TELL \"I can't manage that.\">)>>"
  },
  "V-ALL-REPORT": {
   "name": "V-ALL-REPORT",
   "file": "verbs.zil",
   "line": 1938,
   "endLine": 1956,
   "source": "<ROUTINE V-ALL-REPORT (\"AUX\" TEMP (COUNT -1) ROB)\n\t <SET TEMP ,WINNER>\n         <REPEAT ()\n\t\t <SET COUNT <+ .COUNT 1>>\n\t\t <COND (<EQUAL? .COUNT 6>\n\t\t\t<RETURN>)>\n\t\t <SET ROB <GET ,NAME-TBL .COUNT>>\n\t\t <COND (<FSET? .ROB ,CUTBIT>\n\t\t\t<TELL \"FC: \" SD .ROB \" is no longer functional.\" CR>\n\t\t\t<CLOCKER>\n\t\t\t<COND (<L? .COUNT 5>\n\t\t\t       <CRLF>)>)\n\t\t       (T\n\t\t\t<CHANGE-WINNER .ROB T>\n\t\t\t<CLOCKER>\n\t\t\t<PERFORM ,V?REPORT>\n\t\t\t<COND (<L? .COUNT 5>\n\t\t\t       <CRLF>)>)>>\n\t <CHANGE-WINNER .TEMP T>>"
  },
  "V-ALL-REPORT-LOC": {
   "name": "V-ALL-REPORT-LOC",
   "file": "verbs.zil",
   "line": 1958,
   "endLine": 1971,
   "source": "<ROUTINE V-ALL-REPORT-LOC (\"AUX\" TEMP (COUNT -1) ROB)\n\t <SET TEMP ,WINNER>\n         <REPEAT ()\n\t\t <SET COUNT <+ .COUNT 1>>\n\t\t <COND (<EQUAL? .COUNT 6>\n\t\t\t<RETURN>)>\n\t\t <SET ROB <GET ,NAME-TBL .COUNT>>\n\t\t <COND (<FSET? .ROB ,CUTBIT>\n\t\t\t<TELL \"FC: \" SD .ROB \n\t\t\t      \" is no longer in communication.\" CR>)\n\t\t       (T\n\t\t\t<CHANGE-WINNER .ROB T>\n\t\t\t<PERFORM ,V?REPORT-LOC>)>>\n\t <CHANGE-WINNER .TEMP T>>"
  },
  "V-REPORT": {
   "name": "V-REPORT",
   "file": "verbs.zil",
   "line": 1973,
   "endLine": 1989,
   "source": "<ROUTINE V-REPORT ()\n\t <TELL \"FC: Full report from \">\n\t <TELL <GET ,ROBOT-NAMES ,ROFF> CR>\n\t <V-LOOK>\n\t <V-INVENTORY>\n\t <COND (<AUDA?>\n\t\t<COND (,AUDA-LISTENS\n\t\t       <TELL \"Auditory circuits active.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Auditory circuits inactive.\" CR>)>)>\n\t <COND (<POET?>\n\t\t<PERFORM ,V?TOUCH ,WINNER-HERE>\n\t\t<RTRUE>)>\n\t <COND (<WHIZ?>\n\t\t<COND (,PLUGGED-IN\n\t\t       <TELL \"Plugged in at \" <GET ,PLUG-LOCS ,PLUGGED-IN> CR>)\n\t\t      (T <TELL \"Unable to process queries at this time.\" CR>)>)>>"
  },
  "V-REPORT-LOC": {
   "name": "V-REPORT-LOC",
   "file": "verbs.zil",
   "line": 1992,
   "endLine": 2005,
   "source": "<ROUTINE V-REPORT-LOC ()\n\t <COND (<AND ,PRSO\n\t\t     <NOT <EQUAL? ,PRSO ,LOCATION>>>\n\t\t<PERFORM ,V?EXAMINE ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<COND (<IN-MOTION? ,WINNER>\n\t\t       <ROBOT-TELL \"Entering the \" <>>)\n\t\t      (T\n\t\t       <ROBOT-TELL \"In the \" <>>)>\n\t\t<COND (<IN? ,WINNER ,CAR>\n\t\t       <TELL D ,CAR>)\n\t\t      (T <TELL SD <LOC ,WINNER>>)>\n\t\t<TELL \".\" CR>)>>"
  },
  "V-LOOK-SAFELY": {
   "name": "V-LOOK-SAFELY",
   "file": "verbs.zil",
   "line": 2007,
   "endLine": 2011,
   "source": "<ROUTINE V-LOOK-SAFELY ()\n\t <COND (<FSET? ,PRSI ,TRANSBIT>\n\t\t<TELL \"The \" D ,PRSO \" looks as before, only tinged by the\ncolor of the \" D ,PRSI \".\" CR>)\n\t       (ELSE <TELL \"The \" D ,PRSI \" isn't transparent.\" CR>)>>"
  },
  "V-REACH": {
   "name": "V-REACH",
   "file": "verbs.zil",
   "line": 2013,
   "endLine": 2020,
   "source": "<ROUTINE V-REACH ()\n\t <COND (<FIRST? ,PRSO>\n\t\t<TELL \"There is something\">)\n\t       (ELSE <TELL \"There is nothing\">)>\n\t <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<TELL \" sitting on the \">)\n\t       (ELSE <TELL \" inside the \">)>\n\t <TELL D ,PRSO \".\" CR>>"
  },
  "V-REACH-FOR": {
   "name": "V-REACH-FOR",
   "file": "verbs.zil",
   "line": 2022,
   "endLine": 2028,
   "source": "<ROUTINE V-REACH-FOR ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<IN? ,PRSO ,WINNER-HERE>\n\t\t<TELL \"It's here! Now what?\" CR>)\n\t       (ELSE <TELL \"It is out of reach.\" CR>)>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 2030,
   "endLine": 2032,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 2050,
   "endLine": 2082,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<EQUAL? ,PRSO ,CAR>\n\t\t<SETG ,PRSO <LOC ,CAR>>)>\n\t <COND (<EQUAL? ,PRSO ,HELL>\n\t\t<TELL \"FC: What makes you think you're not already there?\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,WINNER-HERE ,WINNER>\n\t\t<ROBOT-TELL <GET ,WALK-INSULTS ,ROFF>>)\n\t       (<IN? ,PRSO ,ROOMS>\n\t\t<COND (<NOT <EQUAL? <GET ,FOLLOW-TBL ,ROFF> 0>>\n\t\t       <PUT ,FOLLOW-TBL ,ROFF 0>)>\n\t\t<KILL-GOAL ,WINNER>\n\t\t<SET-GOAL ,WINNER ,PRSO>\n\t\t<DO-THE-TV>\n\t\t<ROBOT-TELL <GET ,ORDER-RCD ,ROFF>>\n\t\t<CHECK-MORE?>)\n\t       (<GETP ,PRSO ,P?ROBOT>\n\t\t<SET-GOAL ,WINNER <LOC ,PRSO>>\n\t\t<DO-THE-TV>\n\t\t<COND (<NOT <FSET? ,PRSO ,CUTBIT>>\n\t\t       <TELL \"FC: \" D ,PRSO \"'s location: \">)\n\t\t      (T\n\t\t       <TELL \"FC: \" D ,PRSO \" is non-functional. Last known location: \">)>\n\t\t<TELL SD <LOC ,PRSO> \". Establishing path...\" CR>\n\t\t<ROBOT-TELL <GET ,ORDER-RCD ,ROFF>>\n\t\t<COND (<NOT <EQUAL? <GET ,FOLLOW-TBL ,ROFF> 0>>\n\t\t       <PUT ,FOLLOW-TBL ,ROFF 0>)>\n\t\t<PUT ,ROBOT-FOLLOW ,ROFF ,PRSO>\n\t\t<CHECK-MORE?>)\n\t       (<IN? ,PRSO ,WINNER-HERE>\n\t\t<ROBOT-TELL \"It's right here.\">)\n\t       (T\n\t\t<ROBOT-TELL \"You'll have to tell me where it is first.\">)>>"
  },
  "CHECK-MORE?": {
   "name": "CHECK-MORE?",
   "file": "verbs.zil",
   "line": 2084,
   "endLine": 2090,
   "source": "<ROUTINE CHECK-MORE? ()\n\t <COND (,P-CONT\n\t\t<TELL CR \"FC: When \" D ,WINNER\n\t\t      \" arrives, you'll have to tell \">\n\t\t<HIM-HER ,WINNER>\n\t\t<TELL \" what to do then. I have too much to keep track of already.\" CR>\n\t\t<RFATAL>)>>"
  },
  "DO-THE-TV": {
   "name": "DO-THE-TV",
   "file": "verbs.zil",
   "line": 2092,
   "endLine": 2100,
   "source": "<ROUTINE DO-THE-TV ()\n\t <COND (<AND <EQUAL? <LOC ,WINNER> ,TUBE1 ,TUBE2>\n\t\t\t    <IN? ,TV ,WINNER>\n\t\t\t    ,TV-ON>\n\t\t       <SETG TV-ON <>>\n\t\t       <TELL \"(Unplugging \" D ,TV \" first.)\" CR>)\n\t       (<EQUAL? ,ON-WEDGE <GETP ,WINNER ,P?ROBOT>>\n\t\t<TELL \"(getting off the \" D ,WEDGE \" first.)\" CR>\n\t\t<SETG ON-WEDGE <>>)>>"
  },
  "V-STOP": {
   "name": "V-STOP",
   "file": "verbs.zil",
   "line": 2102,
   "endLine": 2132,
   "source": "<ROUTINE V-STOP ()\n\t <COND (<AND ,PRSO\n\t\t     <NOT <EQUAL? ,PRSO ,LISTENING ,DRAGGING>>>\n\t\t<ROBOT-TELL \"I can't do that to \" <>>\n\t\t<COND (<EQUAL? ,PRSO ,PEOPLE>\n\t\t       <TELL \"the \">)>\n\t\t<TELL D ,PRSO \".\" CR>\n\t\t<RTRUE>)>\n\t <COND (<AND ,PRSO\n\t\t     <EQUAL? ,PRSO ,LISTENING>\n\t\t     <AUDA?>>\n\t\t<ROBOT-TELL \"Okay. Auditory sensors deactivated.\">\n\t\t<SETG AUDA-LISTENS <>>\n\t\t<RTRUE>)\n\t       (<AND ,PRSO\n\t\t     <EQUAL? ,PRSO ,DRAGGING>\n\t\t     <NOT <EQUAL? <GET ,DRAG-TBL ,ROFF> 0>>>\n\t\t<ROBOT-TELL \"Okay. I'll stop dragging \" <>>\n\t\t<HIM-HER ,PRSO>\n\t\t<TELL \".\" CR>\n\t\t<PUT ,DRAG-TBL ,ROFF 0>)\n\t       (,PRSO\n\t\t<ROBOT-YUKS>)\n\t       (<NOT <IN-MOTION? ,WINNER>>\n\t\t<ROBOT-TELL \"I wasn't going anywhere special anyway.\">\n\t\t<PUT ,FOLLOW-TBL ,ROFF 0>\n\t\t<RTRUE>)\n\t       (T <KILL-GOAL ,WINNER>\n\t\t<ROBOT-TELL \"I have stopped at the \" <>>\n\t\t<TELL SD ,WINNER-HERE \".\" CR>\n\t\t<PUT ,FOLLOW-TBL ,ROFF 0>)>>"
  },
  "V-FLY": {
   "name": "V-FLY",
   "file": "verbs.zil",
   "line": 2134,
   "endLine": 2135,
   "source": "<ROUTINE V-FLY ()\n\t <ROBOT-TELL \"Robots are not usually equipped for flying.\">>"
  },
  "V-SMILE": {
   "name": "V-SMILE",
   "file": "verbs.zil",
   "line": 2137,
   "endLine": 2138,
   "source": "<ROUTINE V-SMILE ()\n\t <ROBOT-TELL \"If only I could!\">>"
  },
  "GRASPING?": {
   "name": "GRASPING?",
   "file": "verbs.zil",
   "line": 2145,
   "endLine": 2152,
   "source": "<ROUTINE GRASPING? (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ>\n\t\t\t<RFALSE>)>\n\t\t <COND (<IN? .OBJ ,WINNER>\n\t\t\t<RTRUE>)\n\t\t       (ELSE\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "PRE-REPLACE": {
   "name": "PRE-REPLACE",
   "file": "verbs.zil",
   "line": 2154,
   "endLine": 2170,
   "source": "<ROUTINE PRE-REPLACE (\"AUX\" OBJ)\n\t <COND (<EQUAL? ,NUM-EXT <CCOUNT ,WINNER>>\n\t\t<ROBOT-TELL \"I can't. My extensions are full.\">\n\t\t<RTRUE>)\n\t       (<AND <NOT <GRASPING? ,PRSI>>\n\t\t     <NOT <GRASPING? ,PRSO>>>\n\t\t<ROBOT-TELL \"I'd better grasp one of them first.\">\n\t\t<RFATAL>)\n\t       (<EQUAL? ,PRSO ,PRSI>\n\t\t<ROBOT-TELL \n\"You've asked me to replace something with itself.\">\n\t\t<RFATAL>)\n\t       (<GRASPING? ,PRSO>\n\t\t<SET OBJ ,PRSO>\n\t\t<SETG PRSO ,PRSI>\n\t\t<SETG PRSI .OBJ>\n\t\t<RFALSE>)>>"
  },
  "V-REPLACE": {
   "name": "V-REPLACE",
   "file": "verbs.zil",
   "line": 2172,
   "endLine": 2196,
   "source": "<ROUTINE V-REPLACE (\"AUX\" LOC)\n         <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<ROBOT-TELL \"You'd better rethink that.\">)\n\t       (<NOT <EQUAL? <GETP ,PRSI ,P?SIZE> <GETP ,PRSO ,P?SIZE>>>\n\t\t<ROBOT-TELL \"That's tough to do since the \" <>>\n\t\t<TELL D ,PRSO \" and the \" D ,PRSI \" aren't the same size.\"CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SET LOC <LOC ,PRSO>>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<MOVE ,PRSI .LOC>\n\t\t<ROBOT-TELL \"Okay. It's done.\">\n\t\t<COND (<AND <EQUAL? .LOC ,PANEL>\n\t\t\t    <NOT ,IRIS-FIXED>\n\t\t\t    <IN? ,NEWCHIP1 ,PANEL>\n\t\t\t    <IN? ,CHIP2 ,PANEL>\n\t\t\t    <IN? ,CHIPS0 ,PANEL>>\n\t\t       <TELL CR <GET ,INTER-TBL 1> \n\t\t\t     \" OOOH! That felt good! Close my panel, big boy.\"\n\t\t\t     CR>)\n\t\t      (<EQUAL? .LOC ,GROOVE2>\n\t\t       <SETG REDSET ,PRSI>)\n\t\t      (<EQUAL? .LOC ,GROOVE1>\n\t\t       <SETG ORANGESET ,PRSI>)>)>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 2198,
   "endLine": 2217,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<NOT ,PRSI>\n\t\t<ROBOT-TELL \"With what?\">\n\t\t<RTRUE>)\n\t       (<NOT <FSET? ,PRSO ,CUTABLEBIT>>\n\t\t<ROBOT-TELL \"It won't cut.\">\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,CUTBIT>\n\t\t<ROBOT-TELL \"It's already been cut.\">\n\t\t<RTRUE>)\n\t       (<AND ,PRSI\n\t\t     <NOT <EQUAL? ,PRSI ,WIRECUTTER>>>\n\t\t<ROBOT-TELL \"I don't think \" <>>\n\t\t<COND (<NOT <GETP ,PRSI ,P?ROBOT>>\n\t\t       <TELL \"the \">)>\n\t\t<TELL D ,PRSI \" will work very well for this job.\" CR>)\n\t       (ELSE\n\t\t<FSET ,PRSO ,CUTBIT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<ROBOT-TELL \"Done.\">)>>"
  },
  "V-TOUCH": {
   "name": "V-TOUCH",
   "file": "verbs.zil",
   "line": 2219,
   "endLine": 2234,
   "source": "<ROUTINE V-TOUCH (\"AUX\" (NUM 0) TBL)\n\t <COND (<POET?>\n\t\t<COND (<IN? ,PRSO ,ROOMS>\n\t\t       <SET NUM \n\t\t\t   <GET <SET TBL <GETP ,WINNER-HERE ,P?ROOMDESCS>> 0>>)\n\t\t      (<EQUAL? ,WINNER-HERE <META-LOC ,PRSO>>\n\t\t       <SET NUM <GET <SET TBL <GETP ,PRSO ,P?OBJDESCS>>0>>)>\n\t\t<COND (<G? .NUM 18>\n\t\t       <ROBOT-TELL <GET .TBL 19>>)\n\t\t      (ELSE\n\t\t       <ROBOT-TELL \"Sensory pads detect no abnormal flow.\">)>)\n\t       (<WALDO?>\n\t\t<PERFORM ,V?EXAMINE ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<ROBOT-TELL \"Not me, man. Better ask someone else.\">)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "verbs.zil",
   "line": 2236,
   "endLine": 2243,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RFALSE>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (ELSE\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "V-PUSH-UP": {
   "name": "V-PUSH-UP",
   "file": "verbs.zil",
   "line": 2245,
   "endLine": 2271,
   "source": "<ROUTINE V-PUSH-UP ()\n\t <COND (<NOT <IN? ,PRSO <LOC ,WINNER>>>\n\t\t<CANT-DETECT ,PRSO>\n\t\t<RTRUE>)\n\t       (<NOT <GETP ,PRSO ,P?ROBOT>>\n\t\t<PERFORM ,V?PUSH ,PRSO>)\n\t       (<EQUAL? ,PRSO ,WINNER>\n\t\t<TELL \n\t\t \"FC: I think you're following the path of Franklin.\" CR>\n\t\t<RTRUE>)\n\t       (<L? <GET ,DEADBOTS <GETP ,PRSO ,P?ROBOT>> 30>\n\t\t<ROBOT-TELL \"I try, but \" <>>\n\t\t<HE-SHE ,PRSO>\n\t\t<TELL \" keeps moving away.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <IN? ,WINNER ,REPAIR1>\n\t\t     <EQUAL? ,WEDGE-PLACED 1>>\n\t\t<ROBOT-TELL \"Umph! Hard work, but consider it done!\">\n\t\t<MOVE ,PRSO ,CONVEYERBELTA> <SETG ON-WEDGE ,WINNER>\n\t\t<SETG BELT-ON T>\n\t\t<COND (<EQUAL? <GET <INT I-BELT> ,C-ENABLED?> 0>\n\t\t       <ENABLE <QUEUE I-BELT 2>>)>\n\t\t<FSET ,PRSO ,FIXABLEBIT>)\n\t       (T\n\t\t<ROBOT-TELL \"I'd like to, but there's no way to get \" <>>\n\t\t<HIM-HER ,PRSO>\n\t\t<TELL \" up that high from where I am.\" CR>)>>"
  },
  "V-REPAIR": {
   "name": "V-REPAIR",
   "file": "verbs.zil",
   "line": 2273,
   "endLine": 2280,
   "source": "<ROUTINE V-REPAIR ()\n\t <COND (<OR <EQUAL? ,PRSO ,DEADBOT ,REDCABLE ,PINKCABLE>\n\t\t    <EQUAL? ,PRSO ,WHITECABLE ,BLUECABLE ,BLACKCABLE>\n\t\t    <EQUAL? ,PRSO ,ORANGECABLE ,YELLOWCABLE ,GREENCABLE>\n\t\t    <EQUAL? ,PRSO ,MACHINE ,IRIS ,FCS>>\n\t\t<ROBOT-TELL \"Things aren't that simple.\">)\n\t       (T\n\t\t<ROBOT-TELL \"It doesn't seem to be in need of repairs.\">)>>"
  },
  "BIG-NUM-PRINT": {
   "name": "BIG-NUM-PRINT",
   "file": "verbs.zil",
   "line": 2304,
   "endLine": 2321,
   "source": "<ROUTINE BIG-NUM-PRINT (NUM \"AUX\" TEMP)\n\t <COND (<EQUAL? .NUM 0>\n\t\t<TELL \"0\">\n\t\t<RTRUE>)\n\t       (<G? .NUM 999>\n\t\t<SET TEMP </ .NUM 1000>>\n\t\t<SET NUM <MOD .NUM 1000>>\n\t\t<TELL N .TEMP \",\">\n\t\t<COND (<EQUAL? .NUM 0>\n\t\t       <TELL \"000\">)\n\t\t      (<L? .NUM 10>\n\t\t       <TELL \"00\" N .NUM>)\n\t\t      (<L? .NUM 100>\n\t\t       <TELL \"0\" N .NUM>)\n\t\t      (T <TELL N .NUM>)>)\n\t       (T\n\t\t<TELL N .NUM>)>\n\t <TELL \",000\">>"
  },
  "V-ADVANCED": {
   "name": "V-ADVANCED",
   "file": "verbs.zil",
   "line": 2323,
   "endLine": 2349,
   "source": "<ROUTINE V-ADVANCED ()\n\t <COND (,ADVANCED-FLAG\n\t\t<TELL\n\"FC: You are already in the advanced situation.\" CR>)\n\t       (<G? ,MOVES 1>\n\t\t<TELL <GET ,INTER-TBL 7>\n\" Your request for the advanced game has been rejected since \" N ,MOVES \" cycles have already transpired. Please consult your indoctrination manual for the proper procedure.\" CR>)\n\t       (T\n\t\t<TELL\n\"FC: Request for advanced game acknowledged.\" CR>\n\t\t<QUEUE I-TREMOR1 3>\n\t\t<I-TREMOR2>\n\t\t<CRLF>\n\t\t<DISABLE <INT I-TREMOR2>>\n\t\t<SETG PEOPLE-APPEAR 80>\n\t\t<ENABLE <QUEUE I-PEOPLE1 ,PEOPLE-APPEAR>>\n\t\t<SETG RTD-KILLS 2>\n\t\t<SETG ACID-KILLS 2>\n\t\t<SETG DYING1 1>\n\t\t<SETG DYING2 2>\n\t\t<SETG DYING3 3>\n\t\t<DISABLE <INT I-AUDA-HINTS>>\n\t\t<DISABLE <INT I-IRIS-HINTS>>\n\t\t<PUT ,DEADBOTS 6 30>\n\t\t<FSET ,WHIZ ,CUTBIT>\n\t\t<V-ALL-REPORT-LOC>\n\t\t<SETG ADVANCED-FLAG T>)>>"
  },
  "V-IMPOSSIBLE": {
   "name": "V-IMPOSSIBLE",
   "file": "verbs.zil",
   "line": 2351,
   "endLine": 2364,
   "source": "<ROUTINE V-IMPOSSIBLE ()\n\t <COND (<G? ,MOVES 1>\n\t\t<TELL\n\"FC: It is impossible to do that now. Please refer to your indoctrination manual for the proper way to initiate the impossible game.\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<ENABLE <QUEUE I-IMP 2>>\n\t\t<TELL \"FC: Okay, you asked for it...\" CR CR>\n\t\t<TELL \n\"FC INTERRUPT: External sensors detect huge radiation abnormalities in the star which provides Contra with all light and heat.|\n|\nWARNING! TIME CRITICAL!!|\n|\nExternal sensors detect significant instability in the star.\" CR>)>>"
  },
  "I-IMP": {
   "name": "I-IMP",
   "file": "verbs.zil",
   "line": 2367,
   "endLine": 2373,
   "source": "<ROUTINE I-IMP ()\n\t <TELL CR\n\"FC INTERRUPT: Oh oh. Abnormalities in star approaching critical level.\n\t       NOVA IMMINENT!|\n|\nSo long from all the gang -- Iris, Waldo, Sensa, Auda, Poet, Whiz, FRED, and last but not least, we three FCs.\" CR>\n\t <QUIT>>"
  },
  "V-WHY": {
   "name": "V-WHY",
   "file": "verbs.zil",
   "line": 2375,
   "endLine": 2380,
   "source": "<ROUTINE V-WHY ()\n\t <COND (<NOT <WHIZ?>>\n\t\t<ROBOT-TELL \"Sure beats me. You might ask Whiz...\">)\n\t       (T\n\t\t<ROBOT-TELL\n\t\"Please refer to your manual for proper querying procedures.\">)>> "
  }
 },
 "globals": {
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
  "WINNER-HERE": {
   "name": "WINNER-HERE",
   "kind": "global",
   "file": "globals.zil",
   "line": 10,
   "value": "<>"
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
   "line": 12,
   "value": "0"
  },
  "NUM-EXT": {
   "name": "NUM-EXT",
   "kind": "global",
   "file": "globals.zil",
   "line": 316,
   "value": "0"
  },
  "CAR-FULL": {
   "name": "CAR-FULL",
   "kind": "global",
   "file": "globals.zil",
   "line": 317,
   "value": "0"
  },
  "WEDGE-PLACED": {
   "name": "WEDGE-PLACED",
   "kind": "global",
   "file": "globals.zil",
   "line": 318,
   "value": "0"
  },
  "PLUGGED-IN": {
   "name": "PLUGGED-IN",
   "kind": "global",
   "file": "globals.zil",
   "line": 319,
   "value": "<>"
  },
  "IRIS-FIXED": {
   "name": "IRIS-FIXED",
   "kind": "global",
   "file": "globals.zil",
   "line": 320,
   "value": "<>"
  },
  "DEGREES": {
   "name": "DEGREES",
   "kind": "global",
   "file": "globals.zil",
   "line": 321,
   "value": "60"
  },
  "WINDS": {
   "name": "WINDS",
   "kind": "global",
   "file": "globals.zil",
   "line": 322,
   "value": "10"
  },
  "PRESSURE1": {
   "name": "PRESSURE1",
   "kind": "global",
   "file": "globals.zil",
   "line": 323,
   "value": "55"
  },
  "PRESSURE2": {
   "name": "PRESSURE2",
   "kind": "global",
   "file": "globals.zil",
   "line": 324,
   "value": "50"
  },
  "PRESSURE3": {
   "name": "PRESSURE3",
   "kind": "global",
   "file": "globals.zil",
   "line": 325,
   "value": "55"
  },
  "NAME-TBL": {
   "name": "NAME-TBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 326,
   "value": "<TABLE IRIS WALDO SENSA AUDA POET WHIZ PEOPLE>"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "globals.zil",
   "line": 334,
   "value": "T"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "globals.zil",
   "line": 335,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "globals.zil",
   "line": 336,
   "value": "3"
  },
  "WON-FLAG": {
   "name": "WON-FLAG",
   "kind": "global",
   "file": "globals.zil",
   "line": 337,
   "value": "<>"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "globals.zil",
   "line": 338,
   "value": "<TABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "ON-WEDGE": {
   "name": "ON-WEDGE",
   "kind": "global",
   "file": "globals.zil",
   "line": 346,
   "value": "<>"
  },
  "DIALSETS": {
   "name": "DIALSETS",
   "kind": "global",
   "file": "globals.zil",
   "line": 347,
   "value": "<LTABLE 55 55 55 70 30 50>"
  },
  "DECAY": {
   "name": "DECAY",
   "kind": "global",
   "file": "globals.zil",
   "line": 349,
   "value": "6"
  },
  "TV-ON": {
   "name": "TV-ON",
   "kind": "global",
   "file": "globals.zil",
   "line": 350,
   "value": "<>"
  },
  "REDSET": {
   "name": "REDSET",
   "kind": "global",
   "file": "globals.zil",
   "line": 351,
   "value": "<>"
  },
  "ORANGESET": {
   "name": "ORANGESET",
   "kind": "global",
   "file": "globals.zil",
   "line": 352,
   "value": "<>"
  },
  "AUDA-LISTENS": {
   "name": "AUDA-LISTENS",
   "kind": "global",
   "file": "globals.zil",
   "line": 353,
   "value": "<>"
  },
  "CAR-GONE": {
   "name": "CAR-GONE",
   "kind": "global",
   "file": "globals.zil",
   "line": 354,
   "value": "0"
  },
  "ACID-FIXED": {
   "name": "ACID-FIXED",
   "kind": "global",
   "file": "globals.zil",
   "line": 355,
   "value": "T"
  },
  "RTHIEF": {
   "name": "RTHIEF",
   "kind": "global",
   "file": "globals.zil",
   "line": 356,
   "value": "0"
  },
  "TAKE-BACK": {
   "name": "TAKE-BACK",
   "kind": "global",
   "file": "globals.zil",
   "line": 357,
   "value": "0"
  },
  "SLEEPERS": {
   "name": "SLEEPERS",
   "kind": "global",
   "file": "globals.zil",
   "line": 358,
   "value": "0"
  },
  "BELT-ON": {
   "name": "BELT-ON",
   "kind": "global",
   "file": "globals.zil",
   "line": 359,
   "value": "<>"
  },
  "TOTAL-SCORE": {
   "name": "TOTAL-SCORE",
   "kind": "global",
   "file": "globals.zil",
   "line": 360,
   "value": "3"
  },
  "PLAY-STARCROSS": {
   "name": "PLAY-STARCROSS",
   "kind": "global",
   "file": "globals.zil",
   "line": 361,
   "value": "0"
  },
  "WATER-LEVEL": {
   "name": "WATER-LEVEL",
   "kind": "global",
   "file": "globals.zil",
   "line": 362,
   "value": "70"
  },
  "MINERALS": {
   "name": "MINERALS",
   "kind": "global",
   "file": "globals.zil",
   "line": 363,
   "value": "30"
  },
  "WATTS": {
   "name": "WATTS",
   "kind": "global",
   "file": "globals.zil",
   "line": 364,
   "value": "50"
  },
  "FOOD-TONS": {
   "name": "FOOD-TONS",
   "kind": "global",
   "file": "globals.zil",
   "line": 365,
   "value": "100"
  },
  "FLOATERS": {
   "name": "FLOATERS",
   "kind": "global",
   "file": "globals.zil",
   "line": 367,
   "value": "1"
  },
  "TAXIS": {
   "name": "TAXIS",
   "kind": "global",
   "file": "globals.zil",
   "line": 368,
   "value": "3"
  },
  "RAMP-SPEED": {
   "name": "RAMP-SPEED",
   "kind": "global",
   "file": "globals.zil",
   "line": 369,
   "value": "30"
  },
  "CRASH-RATE": {
   "name": "CRASH-RATE",
   "kind": "global",
   "file": "globals.zil",
   "line": 370,
   "value": "0"
  },
  "COLLISIONS": {
   "name": "COLLISIONS",
   "kind": "global",
   "file": "globals.zil",
   "line": 371,
   "value": "0"
  },
  "RAMP-KILLS": {
   "name": "RAMP-KILLS",
   "kind": "global",
   "file": "globals.zil",
   "line": 372,
   "value": "0"
  },
  "WATER-OPT": {
   "name": "WATER-OPT",
   "kind": "constant",
   "file": "globals.zil",
   "line": 374,
   "value": "70"
  },
  "MINERALS-OPT": {
   "name": "MINERALS-OPT",
   "kind": "constant",
   "file": "globals.zil",
   "line": 375,
   "value": "30"
  },
  "WATTS-OPT": {
   "name": "WATTS-OPT",
   "kind": "constant",
   "file": "globals.zil",
   "line": 376,
   "value": "50"
  },
  "FOOD-OPT": {
   "name": "FOOD-OPT",
   "kind": "constant",
   "file": "globals.zil",
   "line": 377,
   "value": "100"
  },
  "CODE1": {
   "name": "CODE1",
   "kind": "global",
   "file": "globals.zil",
   "line": 379,
   "value": "CIRCLE1"
  },
  "CODE2": {
   "name": "CODE2",
   "kind": "global",
   "file": "globals.zil",
   "line": 380,
   "value": "CIRCLE1"
  },
  "CODE-TBL": {
   "name": "CODE-TBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 381,
   "value": "<LTABLE CIRCLE1 CIRCLE2 CIRCLE3 CIRCLE4 CIRCLE5 CIRCLE6 CIRCLE7 CIRCLE8>"
  },
  "CODE-SET1": {
   "name": "CODE-SET1",
   "kind": "global",
   "file": "globals.zil",
   "line": 384,
   "value": "<>"
  },
  "CODE-SET2": {
   "name": "CODE-SET2",
   "kind": "global",
   "file": "globals.zil",
   "line": 385,
   "value": "<>"
  },
  "IRIS-HINTS": {
   "name": "IRIS-HINTS",
   "kind": "global",
   "file": "globals.zil",
   "line": 387,
   "value": "0"
  },
  "DYING1": {
   "name": "DYING1",
   "kind": "global",
   "file": "globals.zil",
   "line": 388,
   "value": "3"
  },
  "DYING2": {
   "name": "DYING2",
   "kind": "global",
   "file": "globals.zil",
   "line": 389,
   "value": "5"
  },
  "DYING3": {
   "name": "DYING3",
   "kind": "global",
   "file": "globals.zil",
   "line": 390,
   "value": "7"
  },
  "ADVANCED-FLAG": {
   "name": "ADVANCED-FLAG",
   "kind": "global",
   "file": "globals.zil",
   "line": 391,
   "value": "<>"
  },
  "WAITING-QUIP": {
   "name": "WAITING-QUIP",
   "kind": "global",
   "file": "globals.zil",
   "line": 393,
   "value": "<>"
  },
  "DIR-STRINGS": {
   "name": "DIR-STRINGS",
   "kind": "global",
   "file": "goal.zil",
   "line": 8,
   "value": "<PTABLE P?NORTH \"north\" P?SOUTH \"south\" P?EAST \"east\" P?WEST \"west\" P?NW \"northwest\" P?NE \"northeast\" P?SW \"southwest\" P?SE \"southeast\" P?DOWN \"downstairs\" P?UP \"upstairs\" P?IN \"in\" P?OUT \"out\">"
  },
  "A-LINE-C": {
   "name": "A-LINE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 18,
   "value": "0"
  },
  "B-LINE-C": {
   "name": "B-LINE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 19,
   "value": "1"
  },
  "C-LINE-C": {
   "name": "C-LINE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 20,
   "value": "2"
  },
  "D-LINE-C": {
   "name": "D-LINE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 21,
   "value": "3"
  },
  "E-LINE-C": {
   "name": "E-LINE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 22,
   "value": "4"
  },
  "F-LINE-C": {
   "name": "F-LINE-C",
   "kind": "constant",
   "file": "goal.zil",
   "line": 23,
   "value": "5"
  },
  "A-LINE": {
   "name": "A-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 25,
   "value": "<PTABLE 0 SKY3 P?EAST P?WEST SKY2 P?EAST P?WEST SKY1 P?SOUTH P?NORTH NE-PASSAGE2 P?SW P?NE NE-PASSAGE1 0>"
  },
  "B-LINE": {
   "name": "B-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 32,
   "value": "<PTABLE 0 SUPPLIES-MID P?NORTH P?SOUTH SUPPLIES-NORTH P?EAST P?WEST WEATHER-BANKS P?EAST P?WEST CPU-ROOM P?NE P?SW CORRIDOR-1 P?NE P?SW CORRIDOR-2 P?EAST P?WEST HALLWAY-JUNCTION P?SOUTH P?NORTH OUTSIDE-CLC P?SOUTH P?NORTH PERIPH-1 P?SE P?NW PERIPH-2 P?SW P?NE PERIPH-3 P?NW P?SE PERIPH-4 P?EAST P?WEST CLC-CORE 0>"
  },
  "C-LINE": {
   "name": "C-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 47,
   "value": "<PTABLE 0 REPAIR3 P?NORTH P?SOUTH REPAIR2 P?NORTH P?SOUTH REPAIR1 P?NORTH P?SOUTH ROBOT-Z P?NW P?SE ROBOT-PASSAGE P?NW P?SE CORRIDOR-3 P?EAST P?WEST CORRIDOR-4 P?EAST P?WEST ACIDMIST P?EAST P?WEST MIDMIST P?NE P?SW FC1 P?SOUTH P?NORTH TUBE2 P?SOUTH P?NORTH FC2 P?SOUTH P?NORTH TUBE1 P?SOUTH P?NORTH FC3 0>"
  },
  "D-LINE": {
   "name": "D-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 63,
   "value": "<PTABLE 0 HUMAN-ENTRY P?NORTH P?SOUTH HALL-STOP3 P?WEST P?EAST HALL-STOP2 P?WEST P?EAST HALL-STOP1 P?WEST P?EAST NORTH-ENTRY P?WEST P?EAST DEAD-END-1 0>"
  },
  "E-LINE": {
   "name": "E-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 71,
   "value": "<PTABLE 0 STERILE-AREA P?EAST P?WEST DECON-CHAMBER P?EAST P?WEST ENTRY-AREA P?EAST P?WEST TOOL-AREA P?EAST P?WEST REC-AREA P?EAST P?WEST SLEEP-CHAMBER 0>"
  },
  "F-LINE": {
   "name": "F-LINE",
   "kind": "global",
   "file": "goal.zil",
   "line": 79,
   "value": "<PTABLE 0 HALL-STOP4 P?EAST P?WEST HALL-STOP5 P?SOUTH P?NORTH HALL-T P?SOUTH P?NORTH LOWER-CORE P?SOUTH P?NORTH HALL-END P?EAST P?WEST CAR-AREA P?NORTH P?SOUTH BIO-INT P?NORTH P?SOUTH CRYOUNITS 0>"
  },
  "TRANSFER-TABLE": {
   "name": "TRANSFER-TABLE",
   "kind": "global",
   "file": "goal.zil",
   "line": 89,
   "value": "<PTABLE 0 0 NE-PASSAGE1 CORRIDOR-4 NE-PASSAGE1 CORRIDOR-4 NE-PASSAGE1 CORRIDOR-4 NE-PASSAGE1 CORRIDOR-4 NE-PASSAGE1 CORRIDOR-4 HALLWAY-JUNCTION CORRIDOR-3 0 0 HALLWAY-JUNCTION CORRIDOR-3 HALLWAY-JUNCTION HUMAN-ENTRY HALLWAY-JUNCTION HUMAN-ENTRY HALLWAY-JUNCTION HUMAN-ENTRY CORRIDOR-4 NE-PASSAGE1 CORRIDOR-3 HALLWAY-JUNCTION 0 0 CORRIDOR-3 HALLWAY-JUNCTION CORRIDOR-3 HALLWAY-JUNCTION CORRIDOR-3 HALLWAY-JUNCTION HUMAN-ENTRY HALLWAY-JUNCTION HUMAN-ENTRY HALLWAY-JUNCTION HUMAN-ENTRY HALLWAY-JUNCTION 0 0 NORTH-ENTRY STERILE-AREA HALL-STOP3 HALL-STOP4 SLEEP-CHAMBER HALL-STOP5 SLEEP-CHAMBER HALL-STOP5 SLEEP-CHAMBER HALL-STOP5 SLEEP-CHAMBER HALL-STOP5 0 0 SLEEP-CHAMBER HALL-STOP5 HALL-STOP4 HALL-STOP3 HALL-STOP4 HALL-STOP3 HALL-STOP4 HALL-STOP3 HALL-STOP4 HALL-STOP3 HALL-STOP5 SLEEP-CHAMBER 0 0>"
  },
  "COR-1": {
   "name": "COR-1",
   "kind": "global",
   "file": "goal.zil",
   "line": 132,
   "value": "<PTABLE P?WEST P?EAST STERILE-AREA DECON-CHAMBER ENTRY-AREA TOOL-AREA REC-AREA SLEEP-CHAMBER 0>"
  },
  "COR-2": {
   "name": "COR-2",
   "kind": "global",
   "file": "goal.zil",
   "line": 137,
   "value": "<PTABLE P?WEST P?EAST DEAD-END-1 NORTH-ENTRY HALL-STOP1 HALL-STOP2 HALL-STOP3 HALL-STOP4 HALL-STOP5 0>"
  },
  "COR-4": {
   "name": "COR-4",
   "kind": "global",
   "file": "goal.zil",
   "line": 142,
   "value": "<PTABLE P?NORTH P?SOUTH HALL-STOP3 HUMAN-ENTRY HALLWAY-JUNCTION 0>"
  },
  "COR-8": {
   "name": "COR-8",
   "kind": "global",
   "file": "goal.zil",
   "line": 146,
   "value": "<PTABLE P?SW P?NE CPU-ROOM CORRIDOR-1 CORRIDOR-2 0>"
  },
  "COR-16": {
   "name": "COR-16",
   "kind": "global",
   "file": "goal.zil",
   "line": 150,
   "value": "<PTABLE P?WEST P?EAST CORRIDOR-2 HALLWAY-JUNCTION CORRIDOR-3 CORRIDOR-4 ACIDMIST MIDMIST 0>"
  },
  "COR-32": {
   "name": "COR-32",
   "kind": "global",
   "file": "goal.zil",
   "line": 154,
   "value": "<PTABLE P?NORTH P?SOUTH SLEEP-CHAMBER HALL-STOP5 HALL-T LOWER-CORE HALL-END 0>"
  },
  "COR-64": {
   "name": "COR-64",
   "kind": "global",
   "file": "goal.zil",
   "line": 158,
   "value": "<PTABLE P?WEST P?EAST HALL-END CAR-AREA 0>"
  },
  "COR-128": {
   "name": "COR-128",
   "kind": "global",
   "file": "goal.zil",
   "line": 162,
   "value": "<PTABLE P?SW P?NE CORRIDOR-4 NE-PASSAGE1 NE-PASSAGE2 0>"
  },
  "COR-256": {
   "name": "COR-256",
   "kind": "global",
   "file": "goal.zil",
   "line": 166,
   "value": "<PTABLE P?WEST P?EAST SKY4 SKY3 SKY2 SKY1 0>"
  },
  "STUCK-QUIPS": {
   "name": "STUCK-QUIPS",
   "kind": "global",
   "file": "goal.zil",
   "line": 243,
   "value": "<PLTABLE \"Internal mapping doesn't extend from \" \"Sonar doesn't detect an easy way to get from \" \"Sensory mechanisms indicate it's impossible to get from \" \"Holy earwax. I can't get from \" \"Alas, stuck, stuck, stuck. I can't get from \" \"CLC indicates I cannot relocate going from \">"
  },
  "MORE-STUCKS": {
   "name": "MORE-STUCKS",
   "kind": "global",
   "file": "goal.zil",
   "line": 251,
   "value": "<PLTABLE \"I'm waiting for alternate instructions.\" \"Directions requested.\" \"Please advise.\" \"I'm listening for additional instructions.\" \"Tell me, oh leader, what to do next.\" \"Awaiting instructions.\">"
  },
  "GOAL-TABLES": {
   "name": "GOAL-TABLES",
   "kind": "global",
   "file": "goal.zil",
   "line": 392,
   "value": "<TABLE <TABLE <> <> <> <> 1 <> <> I-FOLLOW> <TABLE <> <> <> <> 1 <> <> G-ROBOT> <TABLE <> <> <> <> 1 <> <> G-ROBOT> <TABLE <> <> <> <> 1 <> <> G-ROBOT> <TABLE <> <> <> <> 1 <> <> G-ROBOT> <TABLE <> <> <> <> 1 <> <> G-ROBOT> <TABLE <> <> <> <> 1 <> <> G-ROBOT> <TABLE <> <> <> <> 1 <> <> G-PEOPLE>>"
  },
  "CHARACTER-MAX": {
   "name": "CHARACTER-MAX",
   "kind": "constant",
   "file": "goal.zil",
   "line": 402,
   "value": "7"
  },
  "GOAL-F": {
   "name": "GOAL-F",
   "kind": "constant",
   "file": "goal.zil",
   "line": 406,
   "value": "0"
  },
  "GOAL-S": {
   "name": "GOAL-S",
   "kind": "constant",
   "file": "goal.zil",
   "line": 407,
   "value": "1"
  },
  "GOAL-I": {
   "name": "GOAL-I",
   "kind": "constant",
   "file": "goal.zil",
   "line": 408,
   "value": "2"
  },
  "GOAL-LDIR": {
   "name": "GOAL-LDIR",
   "kind": "constant",
   "file": "goal.zil",
   "line": 409,
   "value": "3"
  },
  "GOAL-ENABLE": {
   "name": "GOAL-ENABLE",
   "kind": "constant",
   "file": "goal.zil",
   "line": 410,
   "value": "4"
  },
  "GOAL-PRIORITY": {
   "name": "GOAL-PRIORITY",
   "kind": "constant",
   "file": "goal.zil",
   "line": 411,
   "value": "5"
  },
  "GOAL-QUEUED": {
   "name": "GOAL-QUEUED",
   "kind": "constant",
   "file": "goal.zil",
   "line": 412,
   "value": "6"
  },
  "GOAL-FUNCTION": {
   "name": "GOAL-FUNCTION",
   "kind": "constant",
   "file": "goal.zil",
   "line": 413,
   "value": "7"
  },
  "G-REACHED": {
   "name": "G-REACHED",
   "kind": "constant",
   "file": "goal.zil",
   "line": 417,
   "value": "1"
  },
  "G-ENROUTE": {
   "name": "G-ENROUTE",
   "kind": "constant",
   "file": "goal.zil",
   "line": 418,
   "value": "2"
  },
  "ARRIVAL-QUIPS": {
   "name": "ARRIVAL-QUIPS",
   "kind": "global",
   "file": "goal.zil",
   "line": 441,
   "value": "<PLTABLE \"I've reached my destination, the \" \"Internal mapping indicates arrival at the \" \"Sensory mechanisms match goal directive. I am at the \" \"From what I can hear, I've arrived at the \" \"As much as I can be anyplace, I'm here at the \" \"CLC indicates matched arrival coordinates at the \">"
  },
  "ROBOT-FOLLOW": {
   "name": "ROBOT-FOLLOW",
   "kind": "global",
   "file": "goal.zil",
   "line": 478,
   "value": "<LTABLE 0 0 0 0 0 0>"
  },
  "DRAG-TBL": {
   "name": "DRAG-TBL",
   "kind": "global",
   "file": "goal.zil",
   "line": 481,
   "value": "<LTABLE 0 0 0 0 0 0 0>"
  },
  "LAST-ROOM": {
   "name": "LAST-ROOM",
   "kind": "global",
   "file": "goal.zil",
   "line": 484,
   "value": "<LTABLE 0 0 0 0 0 0 0>"
  },
  "CHARACTER-TBL": {
   "name": "CHARACTER-TBL",
   "kind": "global",
   "file": "goal.zil",
   "line": 586,
   "value": "<PLTABLE IRIS WALDO SENSA AUDA POET WHIZ PEOPLE>"
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
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 35,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 37,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
   "line": 39,
   "value": "0"
  },
  "P-CCSRC": {
   "name": "P-CCSRC",
   "kind": "global",
   "file": "parser.zil",
   "line": 41,
   "value": "0"
  },
  "P-LEN": {
   "name": "P-LEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 43,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "parser.zil",
   "line": 47,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "parser.zil",
   "line": 49,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 51,
   "value": "<ITABLE BYTE 120>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 54,
   "value": "<ITABLE BYTE 100>"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 57,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 59,
   "value": "<>"
  },
  "P-IT-LOC": {
   "name": "P-IT-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 60,
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
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 322,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 434,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "parser.zil",
   "line": 532,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 534,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 536,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 538,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 540,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 542,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 544,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 546,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 548,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "parser.zil",
   "line": 550,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 552,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 730,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 786,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 788,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 23,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 802,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 804,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 806,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 808,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 810,
   "value": "<ITABLE NONE 50>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 812,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 814,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 816,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 818,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 820,
   "value": "4"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 822,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 823,
   "value": "<>"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "gparser.zil",
   "line": 783,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 893,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 895,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 897,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 899,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 901,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 903,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 905,
   "value": "2"
  },
  "P-MOBY-FOUND": {
   "name": "P-MOBY-FOUND",
   "kind": "global",
   "file": "gparser.zil",
   "line": 957,
   "value": "<>"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 958,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 959,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1149,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1151,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1153,
   "value": "1"
  },
  "ALWAYS-LIT": {
   "name": "ALWAYS-LIT",
   "kind": "global",
   "file": "parser.zil",
   "line": 13,
   "value": "<>"
  },
  "BIGFIX": {
   "name": "BIGFIX",
   "kind": "global",
   "file": "suspended.zil",
   "line": 17,
   "value": "10000"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "main.zil",
   "line": 6,
   "value": "<>"
  },
  "RTD-KILLS": {
   "name": "RTD-KILLS",
   "kind": "global",
   "file": "main.zil",
   "line": 8,
   "value": "75"
  },
  "ACID-KILLS": {
   "name": "ACID-KILLS",
   "kind": "global",
   "file": "main.zil",
   "line": 10,
   "value": "15"
  },
  "PEOPLE-APPEAR": {
   "name": "PEOPLE-APPEAR",
   "kind": "global",
   "file": "main.zil",
   "line": 12,
   "value": "100"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "main.zil",
   "line": 14,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 16,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "main.zil",
   "line": 18,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "main.zil",
   "line": 20,
   "value": "1"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "main.zil",
   "line": 22,
   "value": "<>"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "main.zil",
   "line": 24,
   "value": "6"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "main.zil",
   "line": 26,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "main.zil",
   "line": 28,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "main.zil",
   "line": 30,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "main.zil",
   "line": 32,
   "value": "5"
  },
  "NOT-CLEAR": {
   "name": "NOT-CLEAR",
   "kind": "global",
   "file": "main.zil",
   "line": 212,
   "value": "<PLTABLE \"I don't see what you mean to\" \"I can't tell which object to\" \"I have no good sense of what to\" \"I don't hear what you mean to\" \"I can't imagine what you intend to\" \"The CLC doesn't understand what to\">"
  },
  "L-PRSA": {
   "name": "L-PRSA",
   "kind": "global",
   "file": "main.zil",
   "line": 231,
   "value": "<>"
  },
  "L-PRSO": {
   "name": "L-PRSO",
   "kind": "global",
   "file": "main.zil",
   "line": 233,
   "value": "<>"
  },
  "L-PRSI": {
   "name": "L-PRSI",
   "kind": "global",
   "file": "main.zil",
   "line": 235,
   "value": "<>"
  },
  "OOPS-QUIPS": {
   "name": "OOPS-QUIPS",
   "kind": "global",
   "file": "objects.zil",
   "line": 19,
   "value": "<PLTABLE \"Okay, I've opened it. OH MY GOD!!!\" \"Grasping mechanisms have accomplished the task. Sonar detects -- BLECH!\" \"Sensory mechanisms indicate the door has been opened.|\nWARNING! Biochemical electrical activity dropping!\" \"I hear the door opening and the heavy sigh of a human.\" \"Okey Dokey. Man, you look like death warmed over!\" \"CLC indicates extreme danger to you, though the door has been opened.\">"
  },
  "FLOWSWITCH-TURNED": {
   "name": "FLOWSWITCH-TURNED",
   "kind": "global",
   "file": "objects.zil",
   "line": 487,
   "value": "<>"
  },
  "TV-QUIPS": {
   "name": "TV-QUIPS",
   "kind": "global",
   "file": "objects.zil",
   "line": 748,
   "value": "<PLTABLE 0 \"I detect a vibration from it as it comes on.\" \"Electricity flows and RF transmissions begin.\" \"I hear it click on.\" \"We're on location, all systems go.\" \"CLC indicates object now functioning.\">"
  },
  "CABLE-TBL": {
   "name": "CABLE-TBL",
   "kind": "global",
   "file": "objects.zil",
   "line": 952,
   "value": "<PLTABLE \"The cables are actually exposed sections of larger cables. They each\nterminate at a connector. The connector itself poses no problem and, from what\nI can see, easy replacement should be possible.\" \"I can feel that the cables are actually snap-in modules which can easily be\nreplaced.\" \"Sensory mechanisms indicate that the cables are modular in construction and\ncan be snapped in and out for easy replacement.\" \"I can hear slight buzzing at a junction for each of the cables.\" \"Ah, what an age we live in when replacement parts are the way of things.\" \"CLC data indicates the cables are modular, exposed at this juncture for easy\nreplacement. CLC also warns that contact with inappropriate cable sections can\nbe fatal.\">"
  },
  "BUTTON-PRESS-TBL": {
   "name": "BUTTON-PRESS-TBL",
   "kind": "global",
   "file": "objects.zil",
   "line": 1445,
   "value": "<PLTABLE \"Okay. I've pressed the button. The front panel popped open, exposing a series of eight little circles with letters written on them. The front panel bears further examination. A bunch of orange wire is exposed, and beside it, in the panel, rests a small glass fuse.\" \"Okay, I've pressed the raised area. Sonar detects a front panel has popped open. A fourteen-inch cable rests beside a small cylinder which is inside the panel, both of which sit side by side inside the machine. The front panel has eight raised circles on it.\" \"Okay, I've pressed it. Sensory mechanisms detect electrical energy is exposed, running through a fourteen-inch cable. In addition, a glass fuse has been exposed, resting beside the wire in the panel. The front panel is electrically intensive and has odd properties.\" \"Okay, I've pressed it. I hear the sound of metal hitting metal.\" \"Okey Dokey. All pressed nottub. However, this thing has flashed me, exposing\na fourteen-inch cable and a tube interrupter, like Frick and Frack, side by side. The front panel, like a little piano, rests within view.\" \"Check. It's been pressed and a fourteen-inch cable has been exposed as well\nas a GF1.\">"
  },
  "GWIM-DISABLE": {
   "name": "GWIM-DISABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 15,
   "value": "<>"
  },
  "P-ADJECTIVE": {
   "name": "P-ADJECTIVE",
   "kind": "global",
   "file": "parser.zil",
   "line": 25,
   "value": "<>"
  },
  "P-OADJECTIVE": {
   "name": "P-OADJECTIVE",
   "kind": "global",
   "file": "parser.zil",
   "line": 27,
   "value": "<>"
  },
  "P-OADJ": {
   "name": "P-OADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 29,
   "value": "<>"
  },
  "P-SPACE": {
   "name": "P-SPACE",
   "kind": "global",
   "file": "parser.zil",
   "line": 31,
   "value": "1"
  },
  "P-TWOBOTS": {
   "name": "P-TWOBOTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 33,
   "value": "<>"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 45,
   "value": "0"
  },
  "SETUP-MODE": {
   "name": "SETUP-MODE",
   "kind": "global",
   "file": "parser.zil",
   "line": 133,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 790,
   "value": "<>"
  },
  "P-ACTORS": {
   "name": "P-ACTORS",
   "kind": "global",
   "file": "parser.zil",
   "line": 792,
   "value": "<ITABLE NONE 20>"
  },
  "P-NACTORS": {
   "name": "P-NACTORS",
   "kind": "global",
   "file": "parser.zil",
   "line": 794,
   "value": "0"
  },
  "P-CACTOR": {
   "name": "P-CACTOR",
   "kind": "global",
   "file": "parser.zil",
   "line": 796,
   "value": "0"
  },
  "P-OPLEN": {
   "name": "P-OPLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 798,
   "value": "0"
  },
  "P-OPCONT": {
   "name": "P-OPCONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 800,
   "value": "0"
  },
  "NOT-FOUND": {
   "name": "NOT-FOUND",
   "kind": "global",
   "file": "parser.zil",
   "line": 1117,
   "value": "<LTABLE \"Nope. Can't find any reference to that one in this mess. Sorry.\" \"This is very embarrassing, but I can't seem to find that one.\" \"Sorry, but I don't have any reference to that one.\">"
  },
  "CROWDED": {
   "name": "CROWDED",
   "kind": "global",
   "file": "parser.zil",
   "line": 1123,
   "value": "<LTABLE \"Ah! Here's the tagged object. Sorry about that delay, but it's crowded in here.\" \"Found it! Sorry, but it sure is a mess in here.\" \"Here it is! I was beginning to think I was going senile.\">"
  },
  "PR-NUMBER": {
   "name": "PR-NUMBER",
   "kind": "global",
   "file": "people.zil",
   "line": 9,
   "value": "0"
  },
  "CHASING-THIEF": {
   "name": "CHASING-THIEF",
   "kind": "global",
   "file": "people.zil",
   "line": 11,
   "value": "<>"
  },
  "SNORES-TBL": {
   "name": "SNORES-TBL",
   "kind": "global",
   "file": "people.zil",
   "line": 103,
   "value": "<PTABLE \"I can hear slow breathing and the occasional rustling of cloth.\" \"One of the mechanisms tosses and turns.\" \"One of the mechanisms has begun snoring. It is irritating.\" \"The breathing of the mechanisms has become irregular and they begin to stir.\">"
  },
  "FED-UP": {
   "name": "FED-UP",
   "kind": "global",
   "file": "people.zil",
   "line": 137,
   "value": "<>"
  },
  "FDOFF": {
   "name": "FDOFF",
   "kind": "constant",
   "file": "robots.zil",
   "line": 8,
   "value": "0"
  },
  "SDOFF": {
   "name": "SDOFF",
   "kind": "constant",
   "file": "robots.zil",
   "line": 9,
   "value": "6"
  },
  "RTOFF": {
   "name": "RTOFF",
   "kind": "constant",
   "file": "robots.zil",
   "line": 10,
   "value": "12"
  },
  "ROBOT-NAMES": {
   "name": "ROBOT-NAMES",
   "kind": "global",
   "file": "robots.zil",
   "line": 12,
   "value": "<PTABLE \"FC for both robots\" \"IRIS\" \"WALDO\" \"SENSA\" \"AUDA\" \"POET\" \"WHIZ\" \"HUMANS\">"
  },
  "DETECT-TBL": {
   "name": "DETECT-TBL",
   "kind": "global",
   "file": "robots.zil",
   "line": 57,
   "value": "<PTABLE \"Neither robot can detect\" \"Visual scanners cannot see\" \"Neither sonar nor extensions detect\" \"Sensory inputs cannot detect\" \"Sorry, but I can't hear\" \"I can't accept the existence of\" \"The CLC cannot confirm the presence of\">"
  },
  "R-YUKS": {
   "name": "R-YUKS",
   "kind": "global",
   "file": "robots.zil",
   "line": 69,
   "value": "<PLTABLE <PLTABLE \"I would if I could.\" \"I can't, so I shan't.\" \"I know why I wasn't well designed, but what's your excuse?\" \"Trying to do that's like asking me to blink.\"> <PLTABLE \"Extensions have their limitations, and you just hit mine.\" \"I'd sooner play eight pairs of castanets for Auda.\" \"Do this, do that, boy! I just can't handle this anymore.\" \"You've entered the zone whose boundaries are that of the wishful thinker.\"> <PLTABLE \"A request like that makes my sensors recoil in horror.\" \"I am but a poor sensory mechanism. Don't misuse me.\" \"I like that. You should bottle that request.\" \"All sensors aside, that goes beyond my abilities.\"> <PLTABLE \"If I could turn myself off, I'd do it rather than comply.\" \"I'll shut my ear-receptors to that request.\" \"Huh? I was listening to something a little more intelligent -- the walls settling.\" \"You can't be serious. Poet says more sensible things.\"> <PLTABLE \"As the immortal Bartleby once said, 'No, I don't think so.'\" \"If you knew me like I know me you wouldn't ask me to do that.\" \"Let's face it: Buddha, you ain't.\" \"I often ponder the meaning of existence but, in your case, it seems a waste of time.\"> <PLTABLE \"I'd rather get physical with Iris than respond to that.\" \"How does that fit into the scheme of things?\" \"Unable to process request. Please see manual for operating instructions.\" \"Huh? You talking to me?\">>"
  },
  "DEADBOTS": {
   "name": "DEADBOTS",
   "kind": "global",
   "file": "robots.zil",
   "line": 96,
   "value": "<LTABLE 0 0 0 0 0 0>"
  },
  "INTER-TBL": {
   "name": "INTER-TBL",
   "kind": "global",
   "file": "robots.zil",
   "line": 757,
   "value": "<PLTABLE \"IRIS INTERRUPT:\" \"WALDO INTERRUPT:\" \"SENSA INTERRUPT:\" \"AUDA INTERRUPT:\" \"POET INTERRUPT:\" \"WHIZ INTERRUPT:\" \"FC INTERRUPT:\">"
  },
  "DYING": {
   "name": "DYING",
   "kind": "global",
   "file": "robots.zil",
   "line": 822,
   "value": "<PLTABLE <PLTABLE \"Visual scanners slipping. Malfunctions noted.\" \"Warning: Having extreme difficulty processing.\" \"SYSTEM FAILURE. Blink-out occurring.\"> <PLTABLE \"Graspers are beginning to malfunction.\" \"Warning: Internal mechanisms failing.\" \"SYSTEM FAILURE. Extensions frozen!\"> <PLTABLE \"Sensory input filters not working reliably.\" \"Warning: Unable to process data correctly.\" \"SYSTEM FAILURE: Unable to continue.\"> <PLTABLE \"I'm starting to hear background noise.\" \"Warning: Earwax buildup beyond hope.\" \"SYSTEM FAILURE: Ear canals beyond hope.\"> <PLTABLE \"I fear I'm about to become one with the cosmos.\" \"Warning: I detect the presence of the other worlds.\" \"SYSTEM FAILURE: Farewell, sweet prince.\"> <PLTABLE \"CLC warns that our communication link is slipping.\" \"Warning: Difficulty encountered in contacting CLC.\" \"SYSTEM FAILURE: This is Whiz, signing off.\">>"
  },
  "LDSUPPLIES": {
   "name": "LDSUPPLIES",
   "kind": "global",
   "file": "rooms.zil",
   "line": 219,
   "value": "<PLTABLE \"I'm in the northernmost portion of a large, messy area where debris is scattered about as if something had shaken it loose from the walls. Sitting near the wall is a machine which has a little orange button on its face. Beside the button are two small sockets, one red and one yellow\" \"Moving about here is difficult due to the debris scattered about but I can detect a medium-sized object distinct from the jumble. Sonar detects two small depressions beside a raised spot in the object\" \"A strange apparatus sits before me, processing electrons internally. This device seems active, though some internal mechanisms are exposed. There are two receptacles, designed to hold small circuitry, and a button beside them\" \"I can hear the slight noise of machinery operating here\" \"This is another fine mess you've got me into.  Umm, umm umm! A processor sits on the floor, munching and spitting electrons. Button, button, who's got the button while the socks ablaze with color\" \"CLC reports this area is abnormal in its arrangement. A GG-1 sits here, barely operating\">"
  },
  "WIRE-FIRST": {
   "name": "WIRE-FIRST",
   "kind": "global",
   "file": "rooms.zil",
   "line": 228,
   "value": "<PLTABLE \" The front panel is open and a \" \" The front panel is open and a \" \" The front panel is open and a \" \"\" \" This thing has exposed itself, showing a \" \" A front panel is open and a \">"
  },
  "WIRE-SECOND": {
   "name": "WIRE-SECOND",
   "kind": "global",
   "file": "rooms.zil",
   "line": 237,
   "value": "<PLTABLE \" is exposed.\" \" is exposed.\" \" is exposed.\" \"\" \".\" \" is exposed\">"
  },
  "CIRCLE-DESCS": {
   "name": "CIRCLE-DESCS",
   "kind": "global",
   "file": "rooms.zil",
   "line": 295,
   "value": "<PLTABLE \" On the front panel is a series of eight circles.\" \" On the front panel a series of eight raised circles is visible.\" \" I can sense a delicate tracery of circuitry going into eight circles on the front panel.\" \" \" \" On the exposed panel is a little piano with only eight circle keys.\" \" The panel has eight circles mounted in it.\">"
  },
  "FLASHING": {
   "name": "FLASHING",
   "kind": "global",
   "file": "rooms.zil",
   "line": 304,
   "value": "<PLTABLE \"The orange button is flashing.\" \"\" \"Electricity pulses through the button.\" \"Metal parts click and gears whir.\" \"Button flashes while time passes.\" \"\">"
  },
  "FCWHEEL": {
   "name": "FCWHEEL",
   "kind": "global",
   "file": "rooms.zil",
   "line": 1115,
   "value": "<PLTABLE 0 \"Sonar detects a circular object mounted on the wall high overhead, out of\nreach. A small spray is also detected, going upward through the ceiling.\" \"Sensory mechanisms can detect a low concentration of acid in the air. Its origin is directly overhead. Approximately 99.87 percent of these acid droplets are going up into the room above.\" \"I can hear hissing coming from high overhead here.\" \"The turning of the screw, like the delicate machinations of life, goes on\nfar out of the reach of ordinary mortals.\" \"CLC tagged device WH located high overhead.\">"
  },
  "BEWARE-TBL": {
   "name": "BEWARE-TBL",
   "kind": "global",
   "file": "rooms.zil",
   "line": 1226,
   "value": "<PLTABLE \"\" \"\" \"WARNING: Sensors indicate a light mist, analyzed as a penetrating acid, floats in the air to the east.\" \"I can hear a faint hissing coming through the floor to the east.\" \"Bathe in luxuriating, though scorching, solvents.\" \"\">"
  },
  "MISTY-TBL": {
   "name": "MISTY-TBL",
   "kind": "global",
   "file": "rooms.zil",
   "line": 1470,
   "value": "<PLTABLE 0 \"I can feel little things dropping onto my outer shell.\" \"Light is diffracted in this area and an analysis shows it is composed of a\nslowly-working acid. The source of the mist comes from below.\" \"I can hear a hissing coming up from the floor.\" \"Raindrops keep fallin' on my head|\n And before you know it I'll|\n wake up dead... a puddle of lead.\">"
  },
  "H-NORMAL": {
   "name": "H-NORMAL",
   "kind": "constant",
   "file": "status.zil",
   "line": 6,
   "value": "0"
  },
  "H-INVERSE": {
   "name": "H-INVERSE",
   "kind": "constant",
   "file": "status.zil",
   "line": 7,
   "value": "1"
  },
  "D-NORMAL": {
   "name": "D-NORMAL",
   "kind": "constant",
   "file": "status.zil",
   "line": 9,
   "value": "0"
  },
  "D-TABLE": {
   "name": "D-TABLE",
   "kind": "constant",
   "file": "status.zil",
   "line": 10,
   "value": "1"
  },
  "SL-BUFFER": {
   "name": "SL-BUFFER",
   "kind": "global",
   "file": "status.zil",
   "line": 56,
   "value": "<ITABLE NONE 80>"
  },
  "IRIS-BLIND": {
   "name": "IRIS-BLIND",
   "kind": "global",
   "file": "verbs.zil",
   "line": 32,
   "value": "<PLTABLE \"I can't see a thing.\" \"I can't see.\" \"Visual function nonfunctional.\" \"Everything is dark.\" \"Where's my white cane?\" \"Get me a seeing-eye robot.\" \"Get me a seeing-eye cane. Without my visual function, I'm worthless.\" \"I don't mean to complain, but it would be nice if I got repaired.\" \"I'm doing the best I can, but without visual circuits, that's next to nothing.\">"
  },
  "CARRY-TBL": {
   "name": "CARRY-TBL",
   "kind": "global",
   "file": "verbs.zil",
   "line": 169,
   "value": "<PLTABLE \"I am carrying...\" \"I am grasping...\" \"Sensors indicate I'm holding...\" \"My ears can hear the following in my extensions...\" \"My Zen Master says I am grasping...\" \"CLC feedback indicates I'm holding...\">"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 366,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 367,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 368,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 369,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 370,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 371,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 373,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 374,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 375,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 376,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 377,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 378,
   "value": "1"
  },
  "CANT-GO": {
   "name": "CANT-GO",
   "kind": "global",
   "file": "verbs.zil",
   "line": 484,
   "value": "<PLTABLE \"I don't see how.\" \"Sonar can't detect a passage in that direction.\" \"Sensors indicate a dead-end that way.\" \"Echo patterns describe a wall there.\" \"I haven't the means to justify a dead-end.\" \"The CLC cannot confirm a passage there.\">"
  },
  "INVEN-QUIPS": {
   "name": "INVEN-QUIPS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 519,
   "value": "<PLTABLE \"I am holding nothing in my dainty extensions.\" \"My extensions grasp nothing.\" \"I cannot sense a thing in my grasping extensions.\" \"I can't hear a thing in my extension.\" \"As far as I know, I'm Zen on inventory.\" \"CLC feedback indicates I carry nothing.\">"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 607,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "verbs.zil",
   "line": 608,
   "value": "8"
  },
  "EXTEN-QUIPS": {
   "name": "EXTEN-QUIPS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 618,
   "value": "<PLTABLE \"I'm not Waldo, you know. I've only got 2 extensions, and they're full.\" \"What do you want from me? I can only do 6 things at once!\" \"Please don't use me as a pack mule. I have but 3 extensions to give for my complex.\" \"Did I hear you right? Me, with but 1 measly extension, and full at that?\" \"An Army of Arms,|\nA farewell to hands|\nWithout even place|\nto strike up the band.\" \"The CLC limits my load to 2 objects.\" \"What do you want from me? Even with the extra extension, I can only do 7 things at once!\">"
  },
  "GIVEN-BAG": {
   "name": "GIVEN-BAG",
   "kind": "global",
   "file": "verbs.zil",
   "line": 797,
   "value": "<>"
  },
  "COPR-NOTICE": {
   "name": "COPR-NOTICE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 949,
   "value": "\" a transcript of interaction with SUSPENDED.\nSUSPENDED is a registered trademark of Infocom, Inc.\nCopyright (c) 1983 Infocom, Inc.  All rights reserved.\""
  },
  "EAT-QUIPS": {
   "name": "EAT-QUIPS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1134,
   "value": "<PLTABLE \"Really, now. A robot? Eating?\" \"Get serious, amigo.\" \"With whose orifice? Yours?\" \"I'll shut my ears and pretend you didn't say that.\" \"Never. I'm a starving artist.\" \"The CLC wouldn't approve.\">"
  },
  "FOLLOW-TBL": {
   "name": "FOLLOW-TBL",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1167,
   "value": "<LTABLE 0 0 0 0 0 0>"
  },
  "HS": {
   "name": "HS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1222,
   "value": "0"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1231,
   "value": "<PLTABLE \"Hello.\" \"Nice weather we've been having lately.\" \"You talking to me, man?\" \"Are you trying to accomplish something?\" \"Hello dere.\" \"Goodbye.\">"
  },
  "WHEEEEE": {
   "name": "WHEEEEE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1260,
   "value": "<PLTABLE \"This kind of action can just kill my knee-joints.\" \"I wasn't built for this kind of abuse, you know.\" \"I'd say this was fun, but I'm only a robot. Without a sense of humor.\">"
  },
  "HO-HUMS": {
   "name": "HO-HUMS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1392,
   "value": "<PLTABLE \" is not what I was designed for.\" \" would hurt my extensions.\" \" offends my sensibilities.\" \" is the worst thing I've ever heard.\" \" goes against my Zen training.\" \" contradicts the CLC directives.\">"
  },
  "YELL-QUIPS": {
   "name": "YELL-QUIPS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1413,
   "value": "<PLTABLE \"Well shut my eyes, I never heard of such a thing!\" \"With whose external organs, yours? Cut me some slack.\" \"Sensory mechanisms are one-way, dummy.\" \"I'll pretend I didn't hear that insanity.\" \"If only I could, I could release some of this built-up tension.\" \"The CLC is the only one who'd listen if I did.\">"
  },
  "PLUG-LOCS": {
   "name": "PLUG-LOCS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1444,
   "value": "<PLTABLE \"Index Pedestal.\" \"Technical Pedestal.\" \"Advisory Pedestal.\" \"Historical Pedestal.\">"
  },
  "PLUGOUTS": {
   "name": "PLUGOUTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1485,
   "value": "<PLTABLE \"IP: \" \"TP: \" \"AP: \" \"HP: \">"
  },
  "TELL-QUIPS": {
   "name": "TELL-QUIPS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1665,
   "value": "<PLTABLE \"I can't do that. I only have eyes for you.\" \"I wouldn't be very handy if I did.\" \"Unable to articulate speech patterns.\" \"I hear you but I can't believe you.\" \"Sure. Mairzy dotes & dozey dotes.\" \"My connecting cable won't reach.\">"
  },
  "OLD-WINNER": {
   "name": "OLD-WINNER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1673,
   "value": "<>"
  },
  "ROFF": {
   "name": "ROFF",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1690,
   "value": "<>"
  },
  "IRIS-TV-QUIPS": {
   "name": "IRIS-TV-QUIPS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1875,
   "value": "<PLTABLE \"The image is rather fuzzy, but it looks like \" \"I can't make it out too clearly, but it seems like \" \"You call this clear reception? All I can make out is the shape of \" \"The image is broken up, but it looks as if it could be \" \"Now I know why cable-tv was invented. All I can make out is the shape of \">"
  },
  "WALK-INSULTS": {
   "name": "WALK-INSULTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2034,
   "value": "<PLTABLE \"I have enough trouble seeing where I am without being told to go to where I already am.\" \"That's easy. Poof. Sonar indicates that's where I was and still am.\" \"Sensory mechanisms detect that I am where you want me to be already.\" \"From what I hear, I am where you want me to be.\" \"How can you be two places at once when you're not anywhere at all?\" \"I'm confused. That's where I am.\">"
  },
  "ORDER-RCD": {
   "name": "ORDER-RCD",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2042,
   "value": "<PLTABLE \"Got it, good looking. I'll let you know when I get there.\" \"I'm on my way. Expect a report on arrival.\" \"Order input acknowledged. Output on arrival.\" \"I hear you loud and clear. Talk to you when I get there.\" \"All life's a stage, so just consider me a player. See you.\" \"CLC setting coordinates. Will report in on arrival.\">"
  }
 },
 "syntax": {
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
     "line": 25
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
     "line": 28
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
     "line": 31
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
     "line": 33
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
     "line": 35
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
     "line": 37
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
     "line": 39
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
     "line": 41
    }
   ]
  },
  "ADVANCED": {
   "verb": "ADVANCED",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ADVANCED",
     "objects": 0,
     "particles": [],
     "action": "V-ADVANCED",
     "preaction": null,
     "file": "syntax.zil",
     "line": 43
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
     "line": 50
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 51
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
     "line": 54
    }
   ]
  },
  "ATTACH": {
   "verb": "ATTACH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTACH OBJECT (FIND WEARABLEBIT) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 56
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
     "line": 62
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
     "line": 69
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
     "line": 72
    },
    {
     "pattern": "CLIMB ONTO OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ONTO"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 73
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
     "line": 74
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
     "line": 75
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 76
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
     "line": 77
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
     "line": 80
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
     "line": 81
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
     "line": 82
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
     "line": 85
    },
    {
     "pattern": "CLOSE OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) ON OBJECT (FIND VICBIT)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 88
    }
   ]
  },
  "COUNT": {
   "verb": "COUNT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COUNT OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-COUNT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 91
    },
    {
     "pattern": "COUNT OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM) ON OBJECT (FIND VICBIT)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-COUNT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 92
    },
    {
     "pattern": "COUNT OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM) IN OBJECT (FIND VICBIT)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-COUNT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 94
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
     "line": 98
    },
    {
     "pattern": "CURSE OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 99
    }
   ]
  },
  "CUT": {
   "verb": "CUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CUT OBJECT (FIND CUTABLEBIT) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 102
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
     "line": 105
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
     "line": 109
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
     "line": 114
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
     "line": 117
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
     "line": 122
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
     "line": 123
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
     "line": 124
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
     "line": 125
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EAT OBJECT (FIND FOODBIT) (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 128
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
     "line": 133
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 134
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
     "line": 135
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
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
     "pattern": "EXAMINE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 138
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
     "line": 139
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
     "line": 141
    },
    {
     "pattern": "EXAMINE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 143
    }
   ]
  },
  "WHY": {
   "verb": "WHY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WHY",
     "objects": 0,
     "particles": [],
     "action": "V-WHY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 146
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
     "line": 148
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
     "line": 152
    },
    {
     "pattern": "FIRE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ZAP",
     "preaction": "PRE-ZAP",
     "file": "syntax.zil",
     "line": 153
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
     "line": 154
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
     "line": 158
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
     "line": 161
    },
    {
     "pattern": "FLY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 162
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
     "line": 164
    },
    {
     "pattern": "GIVE OBJECT (FIND VICBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 169
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
     "line": 175
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 176
    }
   ]
  },
  "HINT": {
   "verb": "HINT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HINT",
     "objects": 0,
     "particles": [],
     "action": "V-HINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 179
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
     "line": 182
    }
   ]
  },
  "IMPOSSIBLE": {
   "verb": "IMPOSSIBLE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "IMPOSSIBLE",
     "objects": 0,
     "particles": [],
     "action": "V-IMPOSSIBLE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 184
    }
   ]
  },
  "CONFIGURE": {
   "verb": "CONFIGURE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CONFIGURE",
     "objects": 0,
     "particles": [],
     "action": "V-CONFIGURE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 186
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
     "line": 189
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
     "line": 190
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
     "line": 191
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
     "line": 192
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
     "line": 193
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
     "line": 194
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
     "line": 197
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
     "line": 199
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
     "line": 200
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
     "line": 207
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
     "line": 209
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
     "line": 210
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
     "line": 211
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
     "line": 214
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 215
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
     "preaction": "PRE-LISTEN",
     "file": "syntax.zil",
     "line": 217
    },
    {
     "pattern": "LISTEN TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-LISTEN",
     "preaction": "PRE-LISTEN",
     "file": "syntax.zil",
     "line": 218
    },
    {
     "pattern": "LISTEN FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-LISTEN",
     "preaction": "PRE-LISTEN",
     "file": "syntax.zil",
     "line": 219
    },
    {
     "pattern": "LISTEN AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-LISTEN",
     "preaction": "PRE-LISTEN",
     "file": "syntax.zil",
     "line": 220
    }
   ]
  },
  "LOCATION": {
   "verb": "LOCATION",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCATION",
     "objects": 0,
     "particles": [],
     "action": "V-REPORT-LOC",
     "preaction": null,
     "file": "syntax.zil",
     "line": 222
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
     "line": 224
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
     "line": 225
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
     "line": 226
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
     "line": 227
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
     "line": 228
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
     "line": 229
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
     "line": 230
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
     "line": 231
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
     "line": 232
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
     "line": 233
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
     "line": 234
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
     "line": 237
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
     "line": 238
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
     "line": 239
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
     "line": 240
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
     "line": 244
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
     "line": 246
    },
    {
     "pattern": "MOVE OBJECT ONTO OBJECT",
     "objects": 2,
     "particles": [
      "ONTO"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 247
    },
    {
     "pattern": "MOVE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 248
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
     "line": 251
    }
   ]
  },
  "POINT": {
   "verb": "POINT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POINT OBJECT (HELD CARRIED HAVE) AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 253
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
     "line": 257
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
     "line": 258
    },
    {
     "pattern": "PULL OBJECT OUT OBJECT (FIND CONTBIT)",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 259
    },
    {
     "pattern": "PULL OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-MOVE-ROBOT-TO-LOC",
     "preaction": null,
     "file": "syntax.zil",
     "line": 260
    }
   ]
  },
  "DESTROY": {
   "verb": "DESTROY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DESTROY OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 263
    },
    {
     "pattern": "DESTROY DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 268
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
     "line": 276
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
     "line": 279
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
     "line": 283
    },
    {
     "pattern": "OPEN OBJECT (FIND CONTBIT DOORBIT) ON OBJECT (FIND VICBIT)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 288
    },
    {
     "pattern": "OPEN OBJECT (FIND CONTBIT DOORBIT) IN OBJECT (FIND VICBIT)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 289
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
     "line": 291
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
     "line": 292
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
     "line": 294
    }
   ]
  },
  "PLUG": {
   "verb": "PLUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PLUG IN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-PLUGIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 299
    },
    {
     "pattern": "PLUG TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-PLUGIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 300
    },
    {
     "pattern": "PLUG OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PLUGIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 301
    },
    {
     "pattern": "PLUG OBJECT INTO OBJECT",
     "objects": 2,
     "particles": [
      "INTO"
     ],
     "action": "V-PLUGIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 302
    }
   ]
  },
  "UNPLUG": {
   "verb": "UNPLUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNPLUG",
     "objects": 0,
     "particles": [],
     "action": "V-UNPLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 304
    },
    {
     "pattern": "UNPLUG FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-UNPLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 305
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
     "line": 308
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
     "line": 315
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
     "line": 316
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
     "line": 317
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
     "line": 318
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
     "line": 319
    },
    {
     "pattern": "PUSH OBJECT UP OBJECT",
     "objects": 2,
     "particles": [
      "UP"
     ],
     "action": "V-PUSH-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 320
    },
    {
     "pattern": "PUSH OBJECT ONTO OBJECT",
     "objects": 2,
     "particles": [
      "ONTO"
     ],
     "action": "V-PUSH-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 321
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
     "line": 324
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
     "line": 325
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
     "line": 326
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
     "line": 327
    },
    {
     "pattern": "PUT ON OBJECT (FIND WEARABLEBIT) (HAVE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 328
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-PUT-AGAINST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 329
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-PUT-AGAINST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 330
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) BY OBJECT",
     "objects": 2,
     "particles": [
      "BY"
     ],
     "action": "V-PUT-AGAINST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 331
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT-AGAINST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 332
    }
   ]
  },
  "QUERY": {
   "verb": "QUERY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "QUERY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-QUERY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 335
    },
    {
     "pattern": "QUERY ABOUT OBJECT",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-QUERY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 336
    },
    {
     "pattern": "QUERY ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-QUERY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 337
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
     "line": 340
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
     "line": 341
    },
    {
     "pattern": "RAISE OBJECT ONTO OBJECT",
     "objects": 2,
     "particles": [
      "ONTO"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 342
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
     "line": 345
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
     "line": 348
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
     "line": 349
    },
    {
     "pattern": "REACH UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-REACH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 350
    },
    {
     "pattern": "REACH ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-REACH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 351
    },
    {
     "pattern": "REACH ONTO OBJECT",
     "objects": 1,
     "particles": [
      "ONTO"
     ],
     "action": "V-REACH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
    }
   ]
  },
  "READ": {
   "verb": "READ",
   "synonyms": [],
   "productions": [
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-READ",
     "preaction": null,
     "file": "syntax.zil",
     "line": 354
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-READ",
     "preaction": null,
     "file": "syntax.zil",
     "line": 357
    }
   ]
  },
  "REPAIR": {
   "verb": "REPAIR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REPAIR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPAIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 364
    }
   ]
  },
  "REPLACE": {
   "verb": "REPLACE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REPLACE OBJECT WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-REPLACE",
     "preaction": "PRE-REPLACE",
     "file": "syntax.zil",
     "line": 367
    },
    {
     "pattern": "REPLACE OBJECT (HAVE) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-REPLACE",
     "preaction": "PRE-REPLACE",
     "file": "syntax.zil",
     "line": 368
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
     "line": 371
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
     "line": 372
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
     "line": 375
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
     "line": 376
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
     "line": 378
    }
   ]
  },
  "SLIDE": {
   "verb": "SLIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SLIDE ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 380
    },
    {
     "pattern": "SLIDE OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 381
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
     "line": 382
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
     "line": 384
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
     "line": 387
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
     "line": 390
    },
    {
     "pattern": "STEP ONTO OBJECT",
     "objects": 1,
     "particles": [
      "ONTO"
     ],
     "action": "V-STEP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 391
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
     "line": 393
    },
    {
     "pattern": "STRIKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 398
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
     "line": 402
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
     "line": 403
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
     "line": 406
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
     "line": 409
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
     "line": 410
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
     "line": 411
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKEOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 412
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
     "line": 417
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKEOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 422
    },
    {
     "pattern": "TAKE OFF OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 427
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
     "line": 428
    },
    {
     "pattern": "TAKE DOWN OBJECT (FIND FURNITURE)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-GET-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 429
    }
   ]
  },
  "DETACH": {
   "verb": "DETACH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DETACH OBJECT (FIND WEARBIT) (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 432
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
     "line": 434
    },
    {
     "pattern": "REMOVE OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKEOUT",
     "file": "syntax.zil",
     "line": 435
    },
    {
     "pattern": "REMOVE OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-REMOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 436
    }
   ]
  },
  "$TELL": {
   "verb": "$TELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$TELL OBJECT (MANY ON-GROUND) (FIND VICBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-$TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 439
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
     "line": 441
    },
    {
     "pattern": "SMILE",
     "objects": 0,
     "particles": [],
     "action": "V-SMILE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 442
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
     "line": 445
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
     "line": 450
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
     "line": 456
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
     "line": 457
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
     "line": 458
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 459
    }
   ]
  },
  "TOUCH": {
   "verb": "TOUCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TOUCH OBJECT (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TOUCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 462
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT (FIND TURNBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 465
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
     "line": 466
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
     "line": 469
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
     "line": 472
    }
   ]
  },
  "ACTIVATE": {
   "verb": "ACTIVATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ACTIVATE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 479
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
     "line": 481
    },
    {
     "pattern": "SET OBJECT (ON-GROUND IN-ROOM) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SET",
     "preaction": null,
     "file": "syntax.zil",
     "line": 482
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
     "line": 483
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
     "line": 486
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
     "line": 488
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
     "line": 489
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
     "line": 492
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
     "line": 493
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
     "line": 494
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
     "line": 495
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
     "line": 496
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
     "line": 497
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
     "line": 498
    }
   ]
  },
  "STOP": {
   "verb": "STOP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STOP",
     "objects": 0,
     "particles": [],
     "action": "V-STOP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 501
    },
    {
     "pattern": "STOP OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-STOP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 502
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
     "line": 505
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
     "line": 506
    }
   ]
  },
  "WEAR": {
   "verb": "WEAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WEAR OBJECT (FIND WEARABLEBIT) (HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 509
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
     "line": 514
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
     "line": 517
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
     "line": 519
    },
    {
     "pattern": "YES OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-YES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 520
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
     "line": 523
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
     "line": 532
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
     "line": 533
    }
   ]
  },
  "ARR": {
   "verb": "ARR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ARR",
     "objects": 0,
     "particles": [],
     "action": "V-ALL-REPORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 535
    }
   ]
  },
  "ARL": {
   "verb": "ARL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ARL",
     "objects": 0,
     "particles": [],
     "action": "V-ALL-REPORT-LOC",
     "preaction": null,
     "file": "syntax.zil",
     "line": 536
    }
   ]
  },
  "REPORT": {
   "verb": "REPORT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REPORT",
     "objects": 0,
     "particles": [],
     "action": "V-REPORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 538
    },
    {
     "pattern": "REPORT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPORT-LOC",
     "preaction": null,
     "file": "syntax.zil",
     "line": 539
    },
    {
     "pattern": "REPORT ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-REPORT-LOC",
     "preaction": null,
     "file": "syntax.zil",
     "line": 540
    }
   ]
  },
  "RL": {
   "verb": "RL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RL",
     "objects": 0,
     "particles": [],
     "action": "V-REPORT-LOC",
     "preaction": null,
     "file": "syntax.zil",
     "line": 541
    }
   ]
  }
 },
 "vocab": {
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
  "ADVANCED": {
   "word": "ADVANCED",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
     "of": "ATTACH"
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
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "PLUG"
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
  "ATTACH": {
   "word": "ATTACH",
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
     "of": "CUT"
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
     "of": "POKE"
    },
    {
     "kind": "particle",
     "of": "READ"
    },
    {
     "kind": "particle",
     "of": "REPLACE"
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
     "of": "REMOVE"
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
     "of": "CLOSE"
    },
    {
     "kind": "particle",
     "of": "COUNT"
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
     "of": "OPEN"
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
     "of": "QUERY"
    },
    {
     "kind": "particle",
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
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
     "kind": "particle",
     "of": "REPORT"
    }
   ]
  },
  "ONTO": {
   "word": "ONTO",
   "roles": [
    {
     "kind": "particle",
     "of": "CLIMB"
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
     "of": "RAISE"
    },
    {
     "kind": "particle",
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "STEP"
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
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "RAISE"
    },
    {
     "kind": "particle",
     "of": "REACH"
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
     "of": "TAKE"
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
     "of": "COUNT"
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
     "of": "OPEN"
    },
    {
     "kind": "particle",
     "of": "PLUG"
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
  "WHY": {
   "word": "WHY",
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
     "of": "LISTEN"
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
     "of": "PUT"
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
     "of": "SET"
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
  "HINT": {
   "word": "HINT",
   "roles": [
    {
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
     "of": "PULL"
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
  "IMPOSSIBLE": {
   "word": "IMPOSSIBLE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CONFIGURE": {
   "word": "CONFIGURE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
     "of": "PUT"
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
     "of": "UNPLUG"
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
     "of": "SLIDE"
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
    },
    {
     "kind": "noun",
     "of": "LISTENING"
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
     "of": "REPLACE"
    },
    {
     "kind": "particle",
     "of": "SET"
    }
   ]
  },
  "LOCATION": {
   "word": "LOCATION",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "LOCATION"
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
    },
    {
     "kind": "adjective",
     "of": "BASKET"
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
    },
    {
     "kind": "noun",
     "of": "TVHOLE"
    }
   ]
  },
  "INTO": {
   "word": "INTO",
   "roles": [
    {
     "kind": "particle",
     "of": "PLUG"
    },
    {
     "kind": "direction-synonym",
     "of": "IN"
    }
   ]
  },
  "UNPLUG": {
   "word": "UNPLUG",
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
    },
    {
     "kind": "particle",
     "of": "PUT"
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
  "BY": {
   "word": "BY",
   "roles": [
    {
     "kind": "particle",
     "of": "PUT"
    }
   ]
  },
  "QUERY": {
   "word": "QUERY",
   "roles": [
    {
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
     "of": "QUERY"
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
  "REPAIR": {
   "word": "REPAIR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "REPLACE": {
   "word": "REPLACE",
   "roles": [
    {
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
    },
    {
     "kind": "noun",
     "of": "STEP"
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
  "DETACH": {
   "word": "DETACH",
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
  "$TELL": {
   "word": "$TELL",
   "roles": [
    {
     "kind": "verb",
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
  "ACTIVATE": {
   "word": "ACTIVATE",
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
  "STOP": {
   "word": "STOP",
   "roles": [
    {
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
    },
    {
     "kind": "noun",
     "of": "ZORK"
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
  "ARR": {
   "word": "ARR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ARL": {
   "word": "ARL",
   "roles": [
    {
     "kind": "verb",
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
     "kind": "word",
     "of": null
    }
   ]
  },
  "RL": {
   "word": "RL",
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
  "HARDER": {
   "word": "HARDER",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ADVANCED"
    }
   ]
  },
  "EXPERT": {
   "word": "EXPERT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ADVANCED"
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
  "TOTAL": {
   "word": "TOTAL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "COUNT"
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
  "SNIP": {
   "word": "SNIP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CUT"
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
  "ANALYZE": {
   "word": "ANALYZE",
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
  "HELP": {
   "word": "HELP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "HINT"
    }
   ]
  },
  "SETUP": {
   "word": "SETUP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CONFIGURE"
    }
   ]
  },
  "CUSTOM": {
   "word": "CUSTOM",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CONFIGURE"
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
  "YANK": {
   "word": "YANK",
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
  "LINK": {
   "word": "LINK",
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
  "POSITION": {
   "word": "POSITION",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUT"
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
  "ASK": {
   "word": "ASK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "QUERY"
    }
   ]
  },
  "WHAT": {
   "word": "WHAT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "QUERY"
    }
   ]
  },
  "WHATS": {
   "word": "WHATS",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "QUERY"
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
  "FIX": {
   "word": "FIX",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REPAIR"
    }
   ]
  },
  "SWAP": {
   "word": "SWAP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REPLACE"
    }
   ]
  },
  "EXCHANGE": {
   "word": "EXCHANGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REPLACE"
    }
   ]
  },
  "TRADE": {
   "word": "TRADE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REPLACE"
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
  "STEAL": {
   "word": "STEAL",
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
  "GRASP": {
   "word": "GRASP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TAKE"
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
  "FEEL": {
   "word": "FEEL",
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
  "SHUT": {
   "word": "SHUT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TURN"
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
  "TRAVEL": {
   "word": "TRAVEL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "WALK"
    }
   ]
  },
  "HALT": {
   "word": "HALT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "STOP"
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
  "INSTALL": {
   "word": "INSTALL",
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
  "R": {
   "word": "R",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "REPORT"
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
  "BOTH": {
   "word": "BOTH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "TOGETHER": {
   "word": "TOGETHER",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "YOURSELF": {
   "word": "YOURSELF",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ROOM": {
   "word": "ROOM",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "AREA": {
   "word": "AREA",
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
  "PLEASE": {
   "word": "PLEASE",
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
  "DRAGGI": {
   "word": "DRAGGI",
   "roles": [
    {
     "kind": "noun",
     "of": "DRAGGING"
    }
   ]
  },
  "LEFT": {
   "word": "LEFT",
   "roles": [
    {
     "kind": "noun",
     "of": "LEFT"
    }
   ]
  },
  "BACK": {
   "word": "BACK",
   "roles": [
    {
     "kind": "noun",
     "of": "LEFT"
    }
   ]
  },
  "BACKWA": {
   "word": "BACKWA",
   "roles": [
    {
     "kind": "noun",
     "of": "LEFT"
    }
   ]
  },
  "RIGHT": {
   "word": "RIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "RIGHT"
    }
   ]
  },
  "FORWARD": {
   "word": "FORWARD",
   "roles": [
    {
     "kind": "noun",
     "of": "RIGHT"
    }
   ]
  },
  "LOC": {
   "word": "LOC",
   "roles": [
    {
     "kind": "noun",
     "of": "LOCATION"
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
  "COMPLEX": {
   "word": "COMPLEX",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPLEX"
    }
   ]
  },
  "UNDERG": {
   "word": "UNDERG",
   "roles": [
    {
     "kind": "adjective",
     "of": "COMPLEX"
    }
   ]
  },
  "CONTRA": {
   "word": "CONTRA",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANET"
    }
   ]
  },
  "SURFACE": {
   "word": "SURFACE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLANET"
    }
   ]
  },
  "GREGOR": {
   "word": "GREGOR",
   "roles": [
    {
     "kind": "noun",
     "of": "FRANKLIN"
    }
   ]
  },
  "FRANKL": {
   "word": "FRANKL",
   "roles": [
    {
     "kind": "noun",
     "of": "FRANKLIN"
    }
   ]
  },
  "FC": {
   "word": "FC",
   "roles": [
    {
     "kind": "noun",
     "of": "FCS"
    }
   ]
  },
  "FCS": {
   "word": "FCS",
   "roles": [
    {
     "kind": "noun",
     "of": "FCS"
    }
   ]
  },
  "COMPUTER": {
   "word": "COMPUTER",
   "roles": [
    {
     "kind": "noun",
     "of": "FCS"
    }
   ]
  },
  "FILTERING": {
   "word": "FILTERING",
   "roles": [
    {
     "kind": "adjective",
     "of": "FCS"
    },
    {
     "kind": "adjective",
     "of": "CHIP2"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP2"
    }
   ]
  },
  "CLONES": {
   "word": "CLONES",
   "roles": [
    {
     "kind": "noun",
     "of": "CLONES"
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
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "WALLS"
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
  "EXTENS": {
   "word": "EXTENS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    },
    {
     "kind": "noun",
     "of": "SURGERY-HAND"
    },
    {
     "kind": "noun",
     "of": "BEDS"
    }
   ]
  },
  "GRASPING": {
   "word": "GRASPING",
   "roles": [
    {
     "kind": "adjective",
     "of": "HANDS"
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
  "SIGN": {
   "word": "SIGN",
   "roles": [
    {
     "kind": "noun",
     "of": "SIGNPOST"
    }
   ]
  },
  "SIGNPOST": {
   "word": "SIGNPOST",
   "roles": [
    {
     "kind": "noun",
     "of": "SIGNPOST"
    }
   ]
  },
  "ACS": {
   "word": "ACS",
   "roles": [
    {
     "kind": "noun",
     "of": "SIGNPOST"
    }
   ]
  },
  "BUZZIN": {
   "word": "BUZZIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SIGNPOST"
    }
   ]
  },
  "LITTLE": {
   "word": "LITTLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SIGNPOST"
    },
    {
     "kind": "adjective",
     "of": "WIRECUTTER"
    }
   ]
  },
  "RECESS": {
   "word": "RECESS",
   "roles": [
    {
     "kind": "adjective",
     "of": "SIGNPOST"
    }
   ]
  },
  "PANEL": {
   "word": "PANEL",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROL-PANELS"
    },
    {
     "kind": "noun",
     "of": "PANEL"
    },
    {
     "kind": "noun",
     "of": "FRONT-PANEL"
    }
   ]
  },
  "CONSOL": {
   "word": "CONSOL",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROL-PANELS"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONTROL-PANELS"
    },
    {
     "kind": "adjective",
     "of": "TVHOLE"
    },
    {
     "kind": "adjective",
     "of": "STEP"
    },
    {
     "kind": "adjective",
     "of": "MONITOR"
    },
    {
     "kind": "adjective",
     "of": "CHIP1"
    },
    {
     "kind": "adjective",
     "of": "CHIP2"
    },
    {
     "kind": "adjective",
     "of": "BASKET"
    },
    {
     "kind": "adjective",
     "of": "SURGERY-HAND"
    },
    {
     "kind": "adjective",
     "of": "TV"
    },
    {
     "kind": "adjective",
     "of": "PLAQUE"
    },
    {
     "kind": "adjective",
     "of": "NOZZLE"
    },
    {
     "kind": "adjective",
     "of": "FUSE"
    }
   ]
  },
  "CONDIT": {
   "word": "CONDIT",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRCON"
    }
   ]
  },
  "AIRCON": {
   "word": "AIRCON",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRCON"
    }
   ]
  },
  "AIR": {
   "word": "AIR",
   "roles": [
    {
     "kind": "adjective",
     "of": "AIRCON"
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
  "JUNK": {
   "word": "JUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "DEBRIS"
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
  "TUBES": {
   "word": "TUBES",
   "roles": [
    {
     "kind": "noun",
     "of": "CABLES"
    }
   ]
  },
  "CABLES": {
   "word": "CABLES",
   "roles": [
    {
     "kind": "noun",
     "of": "CABLES"
    }
   ]
  },
  "CONNECTING": {
   "word": "CONNECTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "CABLES"
    }
   ]
  },
  "WIRING": {
   "word": "WIRING",
   "roles": [
    {
     "kind": "noun",
     "of": "WIRING"
    }
   ]
  },
  "CIRCUI": {
   "word": "CIRCUI",
   "roles": [
    {
     "kind": "noun",
     "of": "WIRING"
    },
    {
     "kind": "adjective",
     "of": "CABINET"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TVHOLE"
    }
   ]
  },
  "PL-1": {
   "word": "PL-1",
   "roles": [
    {
     "kind": "noun",
     "of": "TVHOLE"
    }
   ]
  },
  "STAIR": {
   "word": "STAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "STEP"
    }
   ]
  },
  "DROPOF": {
   "word": "DROPOF",
   "roles": [
    {
     "kind": "noun",
     "of": "STEP"
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
  "MONITO": {
   "word": "MONITO",
   "roles": [
    {
     "kind": "noun",
     "of": "MONITOR"
    }
   ]
  },
  "METERS": {
   "word": "METERS",
   "roles": [
    {
     "kind": "noun",
     "of": "MONITOR"
    }
   ]
  },
  "UNITS": {
   "word": "UNITS",
   "roles": [
    {
     "kind": "noun",
     "of": "MONITOR"
    }
   ]
  },
  "COLUMN": {
   "word": "COLUMN",
   "roles": [
    {
     "kind": "noun",
     "of": "HOME"
    }
   ]
  },
  "HOME": {
   "word": "HOME",
   "roles": [
    {
     "kind": "noun",
     "of": "HOME"
    }
   ]
  },
  "CPU": {
   "word": "CPU",
   "roles": [
    {
     "kind": "noun",
     "of": "HOME"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "HOME"
    },
    {
     "kind": "noun",
     "of": "PANEL"
    }
   ]
  },
  "TALL": {
   "word": "TALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOME"
    }
   ]
  },
  "HOLLOW": {
   "word": "HOLLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOME"
    },
    {
     "kind": "adjective",
     "of": "BASKET"
    },
    {
     "kind": "adjective",
     "of": "CABINET"
    },
    {
     "kind": "adjective",
     "of": "CAR"
    }
   ]
  },
  "ELECTR": {
   "word": "ELECTR",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOME"
    },
    {
     "kind": "adjective",
     "of": "CLONESWITCH"
    }
   ]
  },
  "HIGH": {
   "word": "HIGH",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOME"
    },
    {
     "kind": "adjective",
     "of": "TOPSHELF"
    }
   ]
  },
  "SWEET": {
   "word": "SWEET",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOME"
    }
   ]
  },
  "BARRIER": {
   "word": "BARRIER",
   "roles": [
    {
     "kind": "noun",
     "of": "PANEL"
    }
   ]
  },
  "MP1": {
   "word": "MP1",
   "roles": [
    {
     "kind": "noun",
     "of": "PANEL"
    }
   ]
  },
  "MAINTE": {
   "word": "MAINTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PANEL"
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
  "SMOOTH": {
   "word": "SMOOTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "PANEL"
    },
    {
     "kind": "adjective",
     "of": "CHIPS0"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP0"
    },
    {
     "kind": "adjective",
     "of": "REDWIRE"
    }
   ]
  },
  "METAL": {
   "word": "METAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PANEL"
    },
    {
     "kind": "adjective",
     "of": "WIRECUTTER"
    }
   ]
  },
  "TRANSM": {
   "word": "TRANSM",
   "roles": [
    {
     "kind": "adjective",
     "of": "PANEL"
    },
    {
     "kind": "noun",
     "of": "TV"
    }
   ]
  },
  "CHIPS": {
   "word": "CHIPS",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIPS0"
    },
    {
     "kind": "noun",
     "of": "CHIP1"
    },
    {
     "kind": "noun",
     "of": "CHIP2"
    },
    {
     "kind": "noun",
     "of": "FIRST-FRIED"
    },
    {
     "kind": "noun",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "CHIP": {
   "word": "CHIP",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIPS0"
    },
    {
     "kind": "noun",
     "of": "CHIP1"
    },
    {
     "kind": "noun",
     "of": "CHIP2"
    },
    {
     "kind": "noun",
     "of": "FIRST-FRIED"
    },
    {
     "kind": "noun",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "DEVICE": {
   "word": "DEVICE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIPS0"
    },
    {
     "kind": "noun",
     "of": "CHIP1"
    },
    {
     "kind": "noun",
     "of": "CHIP2"
    },
    {
     "kind": "noun",
     "of": "FIRST-FRIED"
    },
    {
     "kind": "noun",
     "of": "NEXT-FRIED"
    },
    {
     "kind": "noun",
     "of": "DEADBOT"
    },
    {
     "kind": "noun",
     "of": "WHEEL"
    },
    {
     "kind": "noun",
     "of": "TV"
    },
    {
     "kind": "noun",
     "of": "SWITCH1"
    },
    {
     "kind": "noun",
     "of": "SWITCH3"
    },
    {
     "kind": "noun",
     "of": "SWITCH2"
    }
   ]
  },
  "ZERO": {
   "word": "ZERO",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIPS0"
    },
    {
     "kind": "adjective",
     "of": "CHIPS0"
    }
   ]
  },
  "QUIET": {
   "word": "QUIET",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIPS0"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP0"
    },
    {
     "kind": "adjective",
     "of": "SMASHED-BOX"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIPS0"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP0"
    },
    {
     "kind": "adjective",
     "of": "SOCKET1"
    }
   ]
  },
  "POLARI": {
   "word": "POLARI",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIPS0"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP0"
    }
   ]
  },
  "CX0": {
   "word": "CX0",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIPS0"
    }
   ]
  },
  "BRAIN": {
   "word": "BRAIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIPS0"
    },
    {
     "kind": "adjective",
     "of": "CHIP1"
    },
    {
     "kind": "adjective",
     "of": "CHIP2"
    },
    {
     "kind": "adjective",
     "of": "FIRST-FRIED"
    },
    {
     "kind": "adjective",
     "of": "NEXT-FRIED"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP1"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP0"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP2"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP3"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP4"
    }
   ]
  },
  "UNO": {
   "word": "UNO",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIP1"
    }
   ]
  },
  "SCANNI": {
   "word": "SCANNI",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP1"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP1"
    }
   ]
  },
  "ROUGH": {
   "word": "ROUGH",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP1"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP1"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP1"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP1"
    },
    {
     "kind": "adjective",
     "of": "HERRINGBONE"
    }
   ]
  },
  "DELICATE": {
   "word": "DELICATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP1"
    }
   ]
  },
  "CX1": {
   "word": "CX1",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP1"
    }
   ]
  },
  "DOS": {
   "word": "DOS",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIP2"
    }
   ]
  },
  "NOISEL": {
   "word": "NOISEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP2"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP2"
    },
    {
     "kind": "adjective",
     "of": "WIRECUTTER"
    },
    {
     "kind": "adjective",
     "of": "WEDGE"
    },
    {
     "kind": "adjective",
     "of": "FUSE"
    }
   ]
  },
  "BUMPY": {
   "word": "BUMPY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP2"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP2"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP2"
    },
    {
     "kind": "adjective",
     "of": "NEWCHIP2"
    },
    {
     "kind": "adjective",
     "of": "SOCKET2"
    }
   ]
  },
  "CX2": {
   "word": "CX2",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHIP2"
    }
   ]
  },
  "CONTAI": {
   "word": "CONTAI",
   "roles": [
    {
     "kind": "noun",
     "of": "BASKET"
    },
    {
     "kind": "noun",
     "of": "CAR"
    },
    {
     "kind": "noun",
     "of": "PEOPLE-CABINET"
    },
    {
     "kind": "noun",
     "of": "TOOLBAG"
    },
    {
     "kind": "noun",
     "of": "SMASHED-BOX"
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
  "BA1": {
   "word": "BA1",
   "roles": [
    {
     "kind": "noun",
     "of": "BASKET"
    }
   ]
  },
  "TRES": {
   "word": "TRES",
   "roles": [
    {
     "kind": "noun",
     "of": "FIRST-FRIED"
    },
    {
     "kind": "adjective",
     "of": "FIRST-FRIED"
    }
   ]
  },
  "SLEEPY": {
   "word": "SLEEPY",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIRST-FRIED"
    }
   ]
  },
  "BURNED": {
   "word": "BURNED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIRST-FRIED"
    }
   ]
  },
  "DISFIG": {
   "word": "DISFIG",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIRST-FRIED"
    }
   ]
  },
  "RUINED": {
   "word": "RUINED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIRST-FRIED"
    },
    {
     "kind": "adjective",
     "of": "SMASHED-BOX"
    },
    {
     "kind": "adjective",
     "of": "RUINED-CABLES"
    }
   ]
  },
  "CX3": {
   "word": "CX3",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIRST-FRIED"
    }
   ]
  },
  "QUART": {
   "word": "QUART",
   "roles": [
    {
     "kind": "noun",
     "of": "NEXT-FRIED"
    },
    {
     "kind": "adjective",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "SNOOZY": {
   "word": "SNOOZY",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "FRIED": {
   "word": "FRIED",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "BUBBLY": {
   "word": "BUBBLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "SEIZED": {
   "word": "SEIZED",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "CX4": {
   "word": "CX4",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEXT-FRIED"
    }
   ]
  },
  "IC": {
   "word": "IC",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWCHIP1"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP0"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP2"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP3"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP4"
    }
   ]
  },
  "OBJECT": {
   "word": "OBJECT",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWCHIP1"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP0"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP2"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP3"
    },
    {
     "kind": "noun",
     "of": "NEWCHIP4"
    },
    {
     "kind": "noun",
     "of": "WEDGE"
    },
    {
     "kind": "noun",
     "of": "SURGERY-HAND"
    },
    {
     "kind": "noun",
     "of": "CABINET"
    },
    {
     "kind": "noun",
     "of": "CAR"
    },
    {
     "kind": "noun",
     "of": "WHEEL"
    },
    {
     "kind": "noun",
     "of": "PEOPLE-CABINET"
    },
    {
     "kind": "noun",
     "of": "CLONETUBES"
    },
    {
     "kind": "noun",
     "of": "MACHINE"
    },
    {
     "kind": "noun",
     "of": "ORANGE-WIRE"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "noun",
     "of": "PEOPLE"
    }
   ]
  },
  "PLAIN": {
   "word": "PLAIN",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWCHIP1"
    }
   ]
  },
  "RX1": {
   "word": "RX1",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP1"
    }
   ]
  },
  "SILENT": {
   "word": "SILENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP1"
    },
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "ZIP": {
   "word": "ZIP",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWCHIP0"
    }
   ]
  },
  "RX0": {
   "word": "RX0",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP0"
    }
   ]
  },
  "TWO": {
   "word": "TWO",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWCHIP2"
    }
   ]
  },
  "RX2": {
   "word": "RX2",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP2"
    }
   ]
  },
  "TRIO": {
   "word": "TRIO",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWCHIP3"
    }
   ]
  },
  "RX3": {
   "word": "RX3",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP3"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP3"
    }
   ]
  },
  "WAVY": {
   "word": "WAVY",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP3"
    }
   ]
  },
  "NONVERBAL": {
   "word": "NONVERBAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP3"
    }
   ]
  },
  "MAXIMI": {
   "word": "MAXIMI",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP3"
    }
   ]
  },
  "QUARTE": {
   "word": "QUARTE",
   "roles": [
    {
     "kind": "noun",
     "of": "NEWCHIP4"
    }
   ]
  },
  "RX4": {
   "word": "RX4",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP4"
    }
   ]
  },
  "PLAID": {
   "word": "PLAID",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP4"
    }
   ]
  },
  "PEBBLE": {
   "word": "PEBBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP4"
    }
   ]
  },
  "SHHHHH": {
   "word": "SHHHHH",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP4"
    }
   ]
  },
  "BUSS": {
   "word": "BUSS",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEWCHIP4"
    }
   ]
  },
  "CU1": {
   "word": "CU1",
   "roles": [
    {
     "kind": "noun",
     "of": "WIRECUTTER"
    }
   ]
  },
  "TOOL": {
   "word": "TOOL",
   "roles": [
    {
     "kind": "noun",
     "of": "WIRECUTTER"
    },
    {
     "kind": "adjective",
     "of": "TOOLBAG"
    }
   ]
  },
  "CUTTERS": {
   "word": "CUTTERS",
   "roles": [
    {
     "kind": "noun",
     "of": "WIRECUTTER"
    }
   ]
  },
  "SLICER": {
   "word": "SLICER",
   "roles": [
    {
     "kind": "noun",
     "of": "WIRECUTTER"
    }
   ]
  },
  "LIFE": {
   "word": "LIFE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIRECUTTER"
    },
    {
     "kind": "noun",
     "of": "REDWIRE"
    }
   ]
  },
  "WIRE": {
   "word": "WIRE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIRECUTTER"
    },
    {
     "kind": "noun",
     "of": "REDWIRE"
    },
    {
     "kind": "noun",
     "of": "ORANGE-WIRE"
    }
   ]
  },
  "CUTTING": {
   "word": "CUTTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIRECUTTER"
    }
   ]
  },
  "TS": {
   "word": "TS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOPSHELF"
    }
   ]
  },
  "HOLDER": {
   "word": "HOLDER",
   "roles": [
    {
     "kind": "noun",
     "of": "TOPSHELF"
    }
   ]
  },
  "SHELF": {
   "word": "SHELF",
   "roles": [
    {
     "kind": "noun",
     "of": "TOPSHELF"
    },
    {
     "kind": "noun",
     "of": "BROKEN-SHELF"
    }
   ]
  },
  "EXTENDING": {
   "word": "EXTENDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOPSHELF"
    }
   ]
  },
  "TOP": {
   "word": "TOP",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOPSHELF"
    }
   ]
  },
  "FURTHEST": {
   "word": "FURTHEST",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOPSHELF"
    }
   ]
  },
  "FARTHEST": {
   "word": "FARTHEST",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOPSHELF"
    }
   ]
  },
  "STABLE": {
   "word": "STABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOPSHELF"
    }
   ]
  },
  "WEDGE": {
   "word": "WEDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "WEDGE"
    }
   ]
  },
  "RAMP": {
   "word": "RAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "WEDGE"
    }
   ]
  },
  "W1": {
   "word": "W1",
   "roles": [
    {
     "kind": "noun",
     "of": "WEDGE"
    }
   ]
  },
  "SOLID": {
   "word": "SOLID",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEDGE"
    }
   ]
  },
  "RISING": {
   "word": "RISING",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEDGE"
    }
   ]
  },
  "FALLIN": {
   "word": "FALLIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEDGE"
    }
   ]
  },
  "SLANTING": {
   "word": "SLANTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEDGE"
    }
   ]
  },
  "DENSE": {
   "word": "DENSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEDGE"
    }
   ]
  },
  "MH1": {
   "word": "MH1",
   "roles": [
    {
     "kind": "noun",
     "of": "SURGERY-HAND"
    }
   ]
  },
  "GRASPER": {
   "word": "GRASPER",
   "roles": [
    {
     "kind": "noun",
     "of": "SURGERY-HAND"
    }
   ]
  },
  "ARM-SHAPED": {
   "word": "ARM-SHAPED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SURGERY-HAND"
    }
   ]
  },
  "MICROSURGERY": {
   "word": "MICROSURGERY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SURGERY-HAND"
    }
   ]
  },
  "USABLE": {
   "word": "USABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SURGERY-HAND"
    }
   ]
  },
  "MICRO": {
   "word": "MICRO",
   "roles": [
    {
     "kind": "adjective",
     "of": "SURGERY-HAND"
    }
   ]
  },
  "TINGIN": {
   "word": "TINGIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SURGERY-HAND"
    }
   ]
  },
  "CAGE": {
   "word": "CAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CABINET"
    }
   ]
  },
  "CB3": {
   "word": "CB3",
   "roles": [
    {
     "kind": "noun",
     "of": "CABINET"
    }
   ]
  },
  "CABINE": {
   "word": "CABINE",
   "roles": [
    {
     "kind": "noun",
     "of": "CABINET"
    },
    {
     "kind": "noun",
     "of": "PEOPLE-CABINET"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CABINET"
    },
    {
     "kind": "adjective",
     "of": "CAR"
    },
    {
     "kind": "adjective",
     "of": "CLONESWITCH"
    },
    {
     "kind": "adjective",
     "of": "CLONETUBES"
    },
    {
     "kind": "adjective",
     "of": "CLONETABLE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "adjective",
     "of": "PEOPLE"
    }
   ]
  },
  "EMITTING": {
   "word": "EMITTING",
   "roles": [
    {
     "kind": "adjective",
     "of": "CABINET"
    }
   ]
  },
  "PLATES": {
   "word": "PLATES",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOWSWITCH"
    }
   ]
  },
  "FLOWSWITCH": {
   "word": "FLOWSWITCH",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOWSWITCH"
    }
   ]
  },
  "SWITCH": {
   "word": "SWITCH",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOWSWITCH"
    },
    {
     "kind": "noun",
     "of": "CLONESWITCH"
    },
    {
     "kind": "noun",
     "of": "SWITCH1"
    },
    {
     "kind": "noun",
     "of": "SWITCH3"
    },
    {
     "kind": "noun",
     "of": "SWITCH2"
    }
   ]
  },
  "CIRCLE": {
   "word": "CIRCLE",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOWSWITCH"
    },
    {
     "kind": "noun",
     "of": "CIRCLE1"
    },
    {
     "kind": "noun",
     "of": "CIRCLE8"
    },
    {
     "kind": "noun",
     "of": "CIRCLE7"
    },
    {
     "kind": "noun",
     "of": "CIRCLE6"
    },
    {
     "kind": "noun",
     "of": "CIRCLE5"
    },
    {
     "kind": "noun",
     "of": "CIRCLE4"
    },
    {
     "kind": "noun",
     "of": "CIRCLE3"
    },
    {
     "kind": "noun",
     "of": "CIRCLE2"
    }
   ]
  },
  "FLOW": {
   "word": "FLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOWSWITCH"
    }
   ]
  },
  "ROUND": {
   "word": "ROUND",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLOWSWITCH"
    }
   ]
  },
  "MECHAN": {
   "word": "MECHAN",
   "roles": [
    {
     "kind": "noun",
     "of": "DEADBOT"
    },
    {
     "kind": "adjective",
     "of": "WHEEL"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTA"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTB"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTC"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "noun",
     "of": "PEOPLE"
    }
   ]
  },
  "CONSTRUCT": {
   "word": "CONSTRUCT",
   "roles": [
    {
     "kind": "noun",
     "of": "DEADBOT"
    }
   ]
  },
  "FRED": {
   "word": "FRED",
   "roles": [
    {
     "kind": "noun",
     "of": "DEADBOT"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEADBOT"
    },
    {
     "kind": "adjective",
     "of": "RUINED-CABLES"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-SHELF"
    }
   ]
  },
  "UNTAGG": {
   "word": "UNTAGG",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEADBOT"
    }
   ]
  },
  "CONDUC": {
   "word": "CONDUC",
   "roles": [
    {
     "kind": "noun",
     "of": "REDWIRE"
    },
    {
     "kind": "adjective",
     "of": "ORANGE-WIRE"
    }
   ]
  },
  "CABLE": {
   "word": "CABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "REDWIRE"
    },
    {
     "kind": "noun",
     "of": "REDCABLE"
    },
    {
     "kind": "noun",
     "of": "YELLOWCABLE"
    },
    {
     "kind": "noun",
     "of": "GREENCABLE"
    },
    {
     "kind": "noun",
     "of": "PINKCABLE"
    },
    {
     "kind": "noun",
     "of": "WHITECABLE"
    },
    {
     "kind": "noun",
     "of": "BLUECABLE"
    },
    {
     "kind": "noun",
     "of": "BLACKCABLE"
    },
    {
     "kind": "noun",
     "of": "ORANGECABLE"
    },
    {
     "kind": "noun",
     "of": "HERRINGBONE"
    },
    {
     "kind": "noun",
     "of": "RUINED-CABLES"
    },
    {
     "kind": "noun",
     "of": "ORANGE-WIRE"
    }
   ]
  },
  "BUNCH": {
   "word": "BUNCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "REDWIRE"
    }
   ]
  },
  "CURRENT": {
   "word": "CURRENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "REDWIRE"
    }
   ]
  },
  "GROUP": {
   "word": "GROUP",
   "roles": [
    {
     "kind": "adjective",
     "of": "REDWIRE"
    }
   ]
  },
  "TWELVE": {
   "word": "TWELVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "REDWIRE"
    }
   ]
  },
  "CARRIAGE": {
   "word": "CARRIAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAR"
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
  "MOBILE": {
   "word": "MOBILE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAR"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "adjective",
     "of": "PEOPLE"
    }
   ]
  },
  "EGG-SHAPED": {
   "word": "EGG-SHAPED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAR"
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "noun",
     "of": "WDIAL1"
    },
    {
     "kind": "noun",
     "of": "WDIAL3"
    },
    {
     "kind": "noun",
     "of": "WDIAL2"
    }
   ]
  },
  "FIRST": {
   "word": "FIRST",
   "roles": [
    {
     "kind": "adjective",
     "of": "WDIAL1"
    },
    {
     "kind": "adjective",
     "of": "LEVER1"
    },
    {
     "kind": "adjective",
     "of": "SWITCH1"
    },
    {
     "kind": "adjective",
     "of": "PERIPH1-OBJ"
    },
    {
     "kind": "adjective",
     "of": "SOCKET1"
    },
    {
     "kind": "adjective",
     "of": "CIRCLE1"
    }
   ]
  },
  "THIRD": {
   "word": "THIRD",
   "roles": [
    {
     "kind": "adjective",
     "of": "WDIAL3"
    },
    {
     "kind": "adjective",
     "of": "LEVER3"
    },
    {
     "kind": "adjective",
     "of": "SWITCH3"
    },
    {
     "kind": "adjective",
     "of": "PERIPH3-OBJ"
    },
    {
     "kind": "adjective",
     "of": "CIRCLE3"
    }
   ]
  },
  "SECOND": {
   "word": "SECOND",
   "roles": [
    {
     "kind": "adjective",
     "of": "WDIAL2"
    },
    {
     "kind": "adjective",
     "of": "LEVER2"
    },
    {
     "kind": "adjective",
     "of": "SWITCH2"
    },
    {
     "kind": "adjective",
     "of": "PERIPH2-OBJ"
    },
    {
     "kind": "adjective",
     "of": "SOCKET2"
    },
    {
     "kind": "adjective",
     "of": "CIRCLE2"
    }
   ]
  },
  "ROD": {
   "word": "ROD",
   "roles": [
    {
     "kind": "noun",
     "of": "CLONESWITCH"
    }
   ]
  },
  "STRAIG": {
   "word": "STRAIG",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLONESWITCH"
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
  "WH": {
   "word": "WH",
   "roles": [
    {
     "kind": "noun",
     "of": "WHEEL"
    }
   ]
  },
  "CIRCUL": {
   "word": "CIRCUL",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHEEL"
    }
   ]
  },
  "HISSIN": {
   "word": "HISSIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHEEL"
    },
    {
     "kind": "adjective",
     "of": "NOZZLE"
    }
   ]
  },
  "SENDER": {
   "word": "SENDER",
   "roles": [
    {
     "kind": "noun",
     "of": "TV"
    },
    {
     "kind": "adjective",
     "of": "ORANGE-WIRE"
    }
   ]
  },
  "SPHERE": {
   "word": "SPHERE",
   "roles": [
    {
     "kind": "noun",
     "of": "TV"
    }
   ]
  },
  "PROJECTION": {
   "word": "PROJECTION",
   "roles": [
    {
     "kind": "adjective",
     "of": "TV"
    }
   ]
  },
  "TV1": {
   "word": "TV1",
   "roles": [
    {
     "kind": "adjective",
     "of": "TV"
    }
   ]
  },
  "CAMERA": {
   "word": "CAMERA",
   "roles": [
    {
     "kind": "adjective",
     "of": "TV"
    }
   ]
  },
  "JACK": {
   "word": "JACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TV"
    }
   ]
  },
  "TV": {
   "word": "TV",
   "roles": [
    {
     "kind": "adjective",
     "of": "TV"
    }
   ]
  },
  "TELEVI": {
   "word": "TELEVI",
   "roles": [
    {
     "kind": "adjective",
     "of": "TV"
    }
   ]
  },
  "FOUR-INCH": {
   "word": "FOUR-INCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "REDCABLE"
    }
   ]
  },
  "EIGHTEEN": {
   "word": "EIGHTEEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "YELLOWCABLE"
    }
   ]
  },
  "TEN-INCH": {
   "word": "TEN-INCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "GREENCABLE"
    }
   ]
  },
  "SIX-INCH": {
   "word": "SIX-INCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "PINKCABLE"
    }
   ]
  },
  "FIVE-I": {
   "word": "FIVE-I",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITECABLE"
    }
   ]
  },
  "TWENTY": {
   "word": "TWENTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLUECABLE"
    }
   ]
  },
  "NINETEEN": {
   "word": "NINETEEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACKCABLE"
    }
   ]
  },
  "NINE-INCH": {
   "word": "NINE-INCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "ORANGECABLE"
    }
   ]
  },
  "GROOVE": {
   "word": "GROOVE",
   "roles": [
    {
     "kind": "noun",
     "of": "GROOVE1"
    },
    {
     "kind": "noun",
     "of": "GROOVE2"
    }
   ]
  },
  "TRACK": {
   "word": "TRACK",
   "roles": [
    {
     "kind": "noun",
     "of": "GROOVE1"
    },
    {
     "kind": "noun",
     "of": "GROOVE2"
    }
   ]
  },
  "BROTHE": {
   "word": "BROTHE",
   "roles": [
    {
     "kind": "noun",
     "of": "PEOPLE-CABINET"
    }
   ]
  },
  "BIG": {
   "word": "BIG",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEOPLE-CABINET"
    }
   ]
  },
  "SQUARE": {
   "word": "SQUARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEOPLE-CABINET"
    }
   ]
  },
  "C9": {
   "word": "C9",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEOPLE-CABINET"
    }
   ]
  },
  "SOUNDL": {
   "word": "SOUNDL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEOPLE-CABINET"
    }
   ]
  },
  "STRANG": {
   "word": "STRANG",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEOPLE-CABINET"
    },
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "BAG": {
   "word": "BAG",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOLBAG"
    }
   ]
  },
  "TB": {
   "word": "TB",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOLBAG"
    }
   ]
  },
  "JINGLI": {
   "word": "JINGLI",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOOLBAG"
    }
   ]
  },
  "TINY": {
   "word": "TINY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOOLBAG"
    }
   ]
  },
  "WALKWA": {
   "word": "WALKWA",
   "roles": [
    {
     "kind": "noun",
     "of": "CONVEYERBELTA"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTB"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTC"
    }
   ]
  },
  "GLIDER": {
   "word": "GLIDER",
   "roles": [
    {
     "kind": "noun",
     "of": "CONVEYERBELTA"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTB"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTC"
    }
   ]
  },
  "BLT": {
   "word": "BLT",
   "roles": [
    {
     "kind": "noun",
     "of": "CONVEYERBELTA"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTB"
    },
    {
     "kind": "noun",
     "of": "CONVEYERBELTC"
    }
   ]
  },
  "MOVING": {
   "word": "MOVING",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONVEYERBELTA"
    },
    {
     "kind": "adjective",
     "of": "CONVEYERBELTB"
    },
    {
     "kind": "adjective",
     "of": "CONVEYERBELTC"
    }
   ]
  },
  "CONVEY": {
   "word": "CONVEY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONVEYERBELTA"
    },
    {
     "kind": "adjective",
     "of": "CONVEYERBELTB"
    },
    {
     "kind": "adjective",
     "of": "CONVEYERBELTC"
    }
   ]
  },
  "NOISY": {
   "word": "NOISY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONVEYERBELTA"
    },
    {
     "kind": "adjective",
     "of": "CONVEYERBELTB"
    },
    {
     "kind": "adjective",
     "of": "CONVEYERBELTC"
    }
   ]
  },
  "LEVER": {
   "word": "LEVER",
   "roles": [
    {
     "kind": "noun",
     "of": "LEVER1"
    },
    {
     "kind": "noun",
     "of": "LEVER3"
    },
    {
     "kind": "noun",
     "of": "LEVER2"
    }
   ]
  },
  "WATER": {
   "word": "WATER",
   "roles": [
    {
     "kind": "adjective",
     "of": "LEVER1"
    }
   ]
  },
  "LIGHTI": {
   "word": "LIGHTI",
   "roles": [
    {
     "kind": "adjective",
     "of": "LEVER3"
    }
   ]
  },
  "MINERAL": {
   "word": "MINERAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "LEVER2"
    }
   ]
  },
  "BUMP": {
   "word": "BUMP",
   "roles": [
    {
     "kind": "noun",
     "of": "SWITCH1"
    },
    {
     "kind": "noun",
     "of": "SWITCH3"
    },
    {
     "kind": "noun",
     "of": "SWITCH2"
    }
   ]
  },
  "BUMPS": {
   "word": "BUMPS",
   "roles": [
    {
     "kind": "noun",
     "of": "SWITCH1"
    },
    {
     "kind": "noun",
     "of": "SWITCH3"
    },
    {
     "kind": "noun",
     "of": "SWITCH2"
    }
   ]
  },
  "RAISED": {
   "word": "RAISED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWITCH1"
    },
    {
     "kind": "adjective",
     "of": "SWITCH3"
    },
    {
     "kind": "adjective",
     "of": "SWITCH2"
    },
    {
     "kind": "adjective",
     "of": "ORANGE-BUTTON"
    }
   ]
  },
  "PLAQUE": {
   "word": "PLAQUE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAQUE"
    }
   ]
  },
  "RELIEF": {
   "word": "RELIEF",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAQUE"
    }
   ]
  },
  "ADVERT": {
   "word": "ADVERT",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAQUE"
    }
   ]
  },
  "PLQ": {
   "word": "PLQ",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAQUE"
    }
   ]
  },
  "CANIST": {
   "word": "CANIST",
   "roles": [
    {
     "kind": "noun",
     "of": "CLONETUBES"
    }
   ]
  },
  "SIXTEE": {
   "word": "SIXTEE",
   "roles": [
    {
     "kind": "adjective",
     "of": "HERRINGBONE"
    }
   ]
  },
  "NOZZLE": {
   "word": "NOZZLE",
   "roles": [
    {
     "kind": "noun",
     "of": "NOZZLE"
    }
   ]
  },
  "PORT": {
   "word": "PORT",
   "roles": [
    {
     "kind": "noun",
     "of": "NOZZLE"
    }
   ]
  },
  "BENCH": {
   "word": "BENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "BENCH"
    }
   ]
  },
  "BENCHE": {
   "word": "BENCHE",
   "roles": [
    {
     "kind": "noun",
     "of": "BENCH"
    }
   ]
  },
  "RAILIN": {
   "word": "RAILIN",
   "roles": [
    {
     "kind": "noun",
     "of": "RAILING"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "SMASHED-BOX"
    }
   ]
  },
  "CBX": {
   "word": "CBX",
   "roles": [
    {
     "kind": "noun",
     "of": "SMASHED-BOX"
    }
   ]
  },
  "MUSH": {
   "word": "MUSH",
   "roles": [
    {
     "kind": "noun",
     "of": "SMASHED-BOX"
    }
   ]
  },
  "CRUSHE": {
   "word": "CRUSHE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMASHED-BOX"
    }
   ]
  },
  "FLAT": {
   "word": "FLAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMASHED-BOX"
    },
    {
     "kind": "adjective",
     "of": "BEDS"
    }
   ]
  },
  "SMUSHE": {
   "word": "SMUSHE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMASHED-BOX"
    }
   ]
  },
  "BUC": {
   "word": "BUC",
   "roles": [
    {
     "kind": "noun",
     "of": "RUINED-CABLES"
    }
   ]
  },
  "SMASHE": {
   "word": "SMASHE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RUINED-CABLES"
    }
   ]
  },
  "BACKUP": {
   "word": "BACKUP",
   "roles": [
    {
     "kind": "adjective",
     "of": "RUINED-CABLES"
    }
   ]
  },
  "PLATFORM": {
   "word": "PLATFORM",
   "roles": [
    {
     "kind": "noun",
     "of": "BROKEN-SHELF"
    }
   ]
  },
  "CRACKED": {
   "word": "CRACKED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROKEN-SHELF"
    }
   ]
  },
  "PEDEST": {
   "word": "PEDEST",
   "roles": [
    {
     "kind": "noun",
     "of": "PERIPH1-OBJ"
    },
    {
     "kind": "noun",
     "of": "PERIPH2-OBJ"
    },
    {
     "kind": "noun",
     "of": "PERIPH3-OBJ"
    },
    {
     "kind": "noun",
     "of": "PERIPH4-OBJ"
    }
   ]
  },
  "INDEX": {
   "word": "INDEX",
   "roles": [
    {
     "kind": "adjective",
     "of": "PERIPH1-OBJ"
    }
   ]
  },
  "TECHNI": {
   "word": "TECHNI",
   "roles": [
    {
     "kind": "adjective",
     "of": "PERIPH2-OBJ"
    }
   ]
  },
  "ADVISO": {
   "word": "ADVISO",
   "roles": [
    {
     "kind": "adjective",
     "of": "PERIPH3-OBJ"
    }
   ]
  },
  "HISTOR": {
   "word": "HISTOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "PERIPH4-OBJ"
    }
   ]
  },
  "FOURTH": {
   "word": "FOURTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "PERIPH4-OBJ"
    },
    {
     "kind": "adjective",
     "of": "CIRCLE4"
    }
   ]
  },
  "DIALS": {
   "word": "DIALS",
   "roles": [
    {
     "kind": "noun",
     "of": "DIALS"
    }
   ]
  },
  "LEVERS": {
   "word": "LEVERS",
   "roles": [
    {
     "kind": "noun",
     "of": "G-LEVERS"
    }
   ]
  },
  "BED": {
   "word": "BED",
   "roles": [
    {
     "kind": "noun",
     "of": "BEDS"
    }
   ]
  },
  "BEDS": {
   "word": "BEDS",
   "roles": [
    {
     "kind": "noun",
     "of": "BEDS"
    }
   ]
  },
  "HSP": {
   "word": "HSP",
   "roles": [
    {
     "kind": "noun",
     "of": "BEDS"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CLONETABLE"
    }
   ]
  },
  "STRUCT": {
   "word": "STRUCT",
   "roles": [
    {
     "kind": "noun",
     "of": "CLONETABLE"
    }
   ]
  },
  "EQUIPT": {
   "word": "EQUIPT",
   "roles": [
    {
     "kind": "noun",
     "of": "CLONETABLE"
    }
   ]
  },
  "WORK": {
   "word": "WORK",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLONETABLE"
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
  "PROCESSOR": {
   "word": "PROCESSOR",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "GG1": {
   "word": "GG1",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "MEDIUM": {
   "word": "MEDIUM",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "PRETTY": {
   "word": "PRETTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "ORANGE-BUTTON"
    }
   ]
  },
  "NUTTOB": {
   "word": "NUTTOB",
   "roles": [
    {
     "kind": "noun",
     "of": "ORANGE-BUTTON"
    }
   ]
  },
  "SPOT": {
   "word": "SPOT",
   "roles": [
    {
     "kind": "noun",
     "of": "ORANGE-BUTTON"
    }
   ]
  },
  "B5": {
   "word": "B5",
   "roles": [
    {
     "kind": "noun",
     "of": "ORANGE-BUTTON"
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ORANGE-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "ORANGE-WIRE"
    }
   ]
  },
  "NOISLE": {
   "word": "NOISLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ORANGE-BUTTON"
    }
   ]
  },
  "STRAND": {
   "word": "STRAND",
   "roles": [
    {
     "kind": "noun",
     "of": "ORANGE-WIRE"
    }
   ]
  },
  "FOURTE": {
   "word": "FOURTE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ORANGE-WIRE"
    }
   ]
  },
  "SOCKET": {
   "word": "SOCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "SOCKET1"
    },
    {
     "kind": "noun",
     "of": "SOCKET2"
    }
   ]
  },
  "S1": {
   "word": "S1",
   "roles": [
    {
     "kind": "noun",
     "of": "SOCKET1"
    }
   ]
  },
  "DEPRESSION": {
   "word": "DEPRESSION",
   "roles": [
    {
     "kind": "noun",
     "of": "SOCKET1"
    },
    {
     "kind": "noun",
     "of": "SOCKET2"
    }
   ]
  },
  "RECEPTACLE": {
   "word": "RECEPTACLE",
   "roles": [
    {
     "kind": "noun",
     "of": "SOCKET1"
    },
    {
     "kind": "noun",
     "of": "SOCKET2"
    }
   ]
  },
  "PLUS": {
   "word": "PLUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "SOCKET1"
    }
   ]
  },
  "PRIMO": {
   "word": "PRIMO",
   "roles": [
    {
     "kind": "adjective",
     "of": "SOCKET1"
    }
   ]
  },
  "S2": {
   "word": "S2",
   "roles": [
    {
     "kind": "noun",
     "of": "SOCKET2"
    }
   ]
  },
  "NEGATIVE": {
   "word": "NEGATIVE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SOCKET2"
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
  "INTERRUPTER": {
   "word": "INTERRUPTER",
   "roles": [
    {
     "kind": "noun",
     "of": "FUSE"
    }
   ]
  },
  "GF1": {
   "word": "GF1",
   "roles": [
    {
     "kind": "noun",
     "of": "FUSE"
    }
   ]
  },
  "CYLINDER": {
   "word": "CYLINDER",
   "roles": [
    {
     "kind": "noun",
     "of": "FUSE"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUSE"
    }
   ]
  },
  "PIANO": {
   "word": "PIANO",
   "roles": [
    {
     "kind": "noun",
     "of": "FRONT-PANEL"
    }
   ]
  },
  "FRONT": {
   "word": "FRONT",
   "roles": [
    {
     "kind": "adjective",
     "of": "FRONT-PANEL"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "noun",
     "of": "CIRCLE1"
    },
    {
     "kind": "noun",
     "of": "CIRCLE8"
    },
    {
     "kind": "noun",
     "of": "CIRCLE7"
    },
    {
     "kind": "noun",
     "of": "CIRCLE6"
    },
    {
     "kind": "noun",
     "of": "CIRCLE5"
    },
    {
     "kind": "noun",
     "of": "CIRCLE4"
    },
    {
     "kind": "noun",
     "of": "CIRCLE3"
    },
    {
     "kind": "noun",
     "of": "CIRCLE2"
    }
   ]
  },
  "FOO": {
   "word": "FOO",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE1"
    }
   ]
  },
  "EIGHTH": {
   "word": "EIGHTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE8"
    }
   ]
  },
  "TRA": {
   "word": "TRA",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE8"
    }
   ]
  },
  "SEVENT": {
   "word": "SEVENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE7"
    }
   ]
  },
  "BOZ": {
   "word": "BOZ",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE7"
    }
   ]
  },
  "SIXTH": {
   "word": "SIXTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE6"
    }
   ]
  },
  "CON": {
   "word": "CON",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE6"
    }
   ]
  },
  "FIFTH": {
   "word": "FIFTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE5"
    }
   ]
  },
  "KLA": {
   "word": "KLA",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE5"
    }
   ]
  },
  "BAR": {
   "word": "BAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE4"
    }
   ]
  },
  "BLE": {
   "word": "BLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE3"
    }
   ]
  },
  "MUM": {
   "word": "MUM",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIRCLE2"
    }
   ]
  },
  "ROBOTS": {
   "word": "ROBOTS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-IRIS"
    },
    {
     "kind": "noun",
     "of": "IRIS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-WALDO"
    },
    {
     "kind": "noun",
     "of": "WALDO"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-SENSA"
    },
    {
     "kind": "noun",
     "of": "SENSA"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "noun",
     "of": "AUDA"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-POET"
    },
    {
     "kind": "noun",
     "of": "POET"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-WHIZ"
    },
    {
     "kind": "noun",
     "of": "WHIZ"
    }
   ]
  },
  "IRIS": {
   "word": "IRIS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-IRIS"
    },
    {
     "kind": "noun",
     "of": "IRIS"
    }
   ]
  },
  "ROBOT": {
   "word": "ROBOT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-IRIS"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-IRIS"
    },
    {
     "kind": "noun",
     "of": "IRIS"
    },
    {
     "kind": "adjective",
     "of": "IRIS"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-WALDO"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-WALDO"
    },
    {
     "kind": "noun",
     "of": "WALDO"
    },
    {
     "kind": "adjective",
     "of": "WALDO"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-SENSA"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-SENSA"
    },
    {
     "kind": "noun",
     "of": "SENSA"
    },
    {
     "kind": "adjective",
     "of": "SENSA"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "noun",
     "of": "AUDA"
    },
    {
     "kind": "adjective",
     "of": "AUDA"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-POET"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-POET"
    },
    {
     "kind": "noun",
     "of": "POET"
    },
    {
     "kind": "adjective",
     "of": "POET"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-WHIZ"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-WHIZ"
    },
    {
     "kind": "noun",
     "of": "WHIZ"
    },
    {
     "kind": "adjective",
     "of": "WHIZ"
    }
   ]
  },
  "VISUAL": {
   "word": "VISUAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-IRIS"
    },
    {
     "kind": "adjective",
     "of": "IRIS"
    }
   ]
  },
  "WALDO": {
   "word": "WALDO",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WALDO"
    },
    {
     "kind": "noun",
     "of": "WALDO"
    }
   ]
  },
  "BUILDER": {
   "word": "BUILDER",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-WALDO"
    },
    {
     "kind": "adjective",
     "of": "WALDO"
    }
   ]
  },
  "SENSA": {
   "word": "SENSA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SENSA"
    },
    {
     "kind": "noun",
     "of": "SENSA"
    }
   ]
  },
  "SENSORY": {
   "word": "SENSORY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-SENSA"
    },
    {
     "kind": "adjective",
     "of": "SENSA"
    }
   ]
  },
  "AUDA": {
   "word": "AUDA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "noun",
     "of": "AUDA"
    }
   ]
  },
  "SPEAKER": {
   "word": "SPEAKER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "noun",
     "of": "AUDA"
    }
   ]
  },
  "VERBAL": {
   "word": "VERBAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "adjective",
     "of": "AUDA"
    }
   ]
  },
  "SPEAKING": {
   "word": "SPEAKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "adjective",
     "of": "AUDA"
    }
   ]
  },
  "HEARING": {
   "word": "HEARING",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "adjective",
     "of": "AUDA"
    }
   ]
  },
  "AUDIO": {
   "word": "AUDIO",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "adjective",
     "of": "AUDA"
    }
   ]
  },
  "COMMUN": {
   "word": "COMMUN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-AUDA"
    },
    {
     "kind": "adjective",
     "of": "AUDA"
    }
   ]
  },
  "POET": {
   "word": "POET",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-POET"
    },
    {
     "kind": "noun",
     "of": "POET"
    }
   ]
  },
  "METAPHOR": {
   "word": "METAPHOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-POET"
    },
    {
     "kind": "adjective",
     "of": "POET"
    }
   ]
  },
  "RHYMING": {
   "word": "RHYMING",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-POET"
    },
    {
     "kind": "adjective",
     "of": "POET"
    }
   ]
  },
  "WHIZ": {
   "word": "WHIZ",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WHIZ"
    },
    {
     "kind": "noun",
     "of": "WHIZ"
    }
   ]
  },
  "RESEARCH": {
   "word": "RESEARCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-WHIZ"
    },
    {
     "kind": "adjective",
     "of": "WHIZ"
    }
   ]
  },
  "HUMANS": {
   "word": "HUMANS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "noun",
     "of": "PEOPLE"
    }
   ]
  },
  "CREATU": {
   "word": "CREATU",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "noun",
     "of": "PEOPLE"
    }
   ]
  },
  "TALKIN": {
   "word": "TALKIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "adjective",
     "of": "PEOPLE"
    }
   ]
  },
  "CREATO": {
   "word": "CREATO",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "adjective",
     "of": "PEOPLE"
    }
   ]
  },
  "CORES": {
   "word": "CORES",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-PEOPLE"
    },
    {
     "kind": "adjective",
     "of": "PEOPLE"
    }
   ]
  }
 },
 "files": [
  "clock.zil",
  "crufty.zil",
  "globals.zil",
  "goal.zil",
  "gparser.zil",
  "load.zil",
  "macros.zil",
  "main.zil",
  "objects.zil",
  "parser.zil",
  "people.zil",
  "robots.zil",
  "rooms.zil",
  "s2.zil",
  "setup.zil",
  "status.zil",
  "suspended.zil",
  "syntax.zil",
  "verbs.zil"
 ]
};
