window.WORLD = {
 "game": "Leather Goddesses of Phobos (X1)",
 "directions": [
  "NORTH",
  "EAST",
  "SOUTH",
  "WEST",
  "UP",
  "DOWN",
  "IN",
  "OUT"
 ],
 "rooms": {
  "A-ENTRANCE": {
   "name": "A-ENTRANCE",
   "file": "jet.zil",
   "line": 18,
   "endLine": 23,
   "desc": "Airplane Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-ENTRANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-GALLEY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM A-ENTRANCE\n      (LOC ROOMS)\n      (DESC \"Airplane Entrance\")\n      (EAST TO A-GALLEY)\n      (FLAGS AIRPLANEBIT)\n      (ACTION A-ENTRANCE-F)>",
   "referencedBy": []
  },
  "A-COCKPIT": {
   "name": "A-COCKPIT",
   "file": "jet.zil",
   "line": 37,
   "endLine": 44,
   "desc": "Cockpit",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-COCKPIT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "A-COCKPIT-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-GALLEY",
     "kind": "conditional",
     "condition": "A-COCKPIT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "A-GALLEY",
     "kind": "conditional",
     "condition": "A-COCKPIT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-COCKPIT\n      (LOC ROOMS)\n      (DESC \"Cockpit\")\n      (OUT TO A-GALLEY IF A-COCKPIT-DOOR IS OPEN)\n      (SOUTH TO A-GALLEY IF A-COCKPIT-DOOR IS OPEN)\n      (FLAGS AIRPLANEBIT)\n      (GLOBAL A-COCKPIT-DOOR)\n      (ACTION A-COCKPIT-F)>",
   "referencedBy": []
  },
  "A-GALLEY": {
   "name": "A-GALLEY",
   "file": "jet.zil",
   "line": 57,
   "endLine": 64,
   "desc": "Galley",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "A-GALLEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "A-COCKPIT-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-COCKPIT",
     "kind": "conditional",
     "condition": "A-COCKPIT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "A-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM A-GALLEY\n      (LOC ROOMS)\n      (DESC \"Galley\")\n      (NORTH TO A-COCKPIT IF A-COCKPIT-DOOR IS OPEN)\n      (SOUTH TO A-1)\n      (WEST TO A-ENTRANCE)\n      (GLOBAL A-COCKPIT-DOOR)\n      (ACTION A-GALLEY-F)>",
   "referencedBy": [
    "GLOBAL-WINDOW-F"
   ]
  },
  "A-1": {
   "name": "A-1",
   "file": "jet.zil",
   "line": 70,
   "endLine": 79,
   "desc": "Aisle 1",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "1"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-GALLEY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-1\n      (LOC ROOMS)\n      (DESC \"Aisle 1\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-GALLEY)\n      (SOUTH TO A-2)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 1)\n      (ACTION A-AISLE-F)>",
   "referencedBy": [
    "V-$AIRPLANE"
   ]
  },
  "A-2": {
   "name": "A-2",
   "file": "jet.zil",
   "line": 125,
   "endLine": 134,
   "desc": "Aisle 2",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "2"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-2\n      (LOC ROOMS)\n      (DESC \"Aisle 2\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-1)\n      (SOUTH TO A-3)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 2)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-3": {
   "name": "A-3",
   "file": "jet.zil",
   "line": 136,
   "endLine": 145,
   "desc": "Aisle 3",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "3"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-3\n      (LOC ROOMS)\n      (DESC \"Aisle 3\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-2)\n      (SOUTH TO A-4)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 3)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-4": {
   "name": "A-4",
   "file": "jet.zil",
   "line": 147,
   "endLine": 156,
   "desc": "Aisle 4",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "4"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-4\n      (LOC ROOMS)\n      (DESC \"Aisle 4\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-3)\n      (SOUTH TO A-5)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 4)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-5": {
   "name": "A-5",
   "file": "jet.zil",
   "line": 158,
   "endLine": 167,
   "desc": "Aisle 5",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "5"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-5\n      (LOC ROOMS)\n      (DESC \"Aisle 5\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-4)\n      (SOUTH TO A-6)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 5)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-6": {
   "name": "A-6",
   "file": "jet.zil",
   "line": 169,
   "endLine": 178,
   "desc": "Aisle 6",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "6"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-6\n      (LOC ROOMS)\n      (DESC \"Aisle 6\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-5)\n      (SOUTH TO A-7)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 6)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-7": {
   "name": "A-7",
   "file": "jet.zil",
   "line": 180,
   "endLine": 189,
   "desc": "Aisle 7",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "7"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-7\n      (LOC ROOMS)\n      (DESC \"Aisle 7\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-6)\n      (SOUTH TO A-8)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 7)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-8": {
   "name": "A-8",
   "file": "jet.zil",
   "line": 191,
   "endLine": 200,
   "desc": "Aisle 8",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "8"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-8\n      (LOC ROOMS)\n      (DESC \"Aisle 8\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-7)\n      (SOUTH TO A-9)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 8)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-9": {
   "name": "A-9",
   "file": "jet.zil",
   "line": 202,
   "endLine": 211,
   "desc": "Aisle 9",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "9"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-9\n      (LOC ROOMS)\n      (DESC \"Aisle 9\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-8)\n      (SOUTH TO A-10)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 9)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-10": {
   "name": "A-10",
   "file": "jet.zil",
   "line": 213,
   "endLine": 222,
   "desc": "Aisle 10",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "10"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-10\n      (LOC ROOMS)\n      (DESC \"Aisle 10\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-9)\n      (SOUTH TO A-11)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 10)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-11": {
   "name": "A-11",
   "file": "jet.zil",
   "line": 224,
   "endLine": 233,
   "desc": "Aisle 11",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "11"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-10",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-11\n      (LOC ROOMS)\n      (DESC \"Aisle 11\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-10)\n      (SOUTH TO A-12)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 11)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-12": {
   "name": "A-12",
   "file": "jet.zil",
   "line": 235,
   "endLine": 244,
   "desc": "Aisle 12",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "12"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-11",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-12\n      (LOC ROOMS)\n      (DESC \"Aisle 12\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-11)\n      (SOUTH TO A-13)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 12)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-13": {
   "name": "A-13",
   "file": "jet.zil",
   "line": 246,
   "endLine": 255,
   "desc": "Aisle 13",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "13"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-12",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-13\n      (LOC ROOMS)\n      (DESC \"Aisle 13\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-12)\n      (SOUTH TO A-14)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 13)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-14": {
   "name": "A-14",
   "file": "jet.zil",
   "line": 257,
   "endLine": 266,
   "desc": "Aisle 14",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "AISLE": [
     "14"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "A-SEAT-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-13",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-REAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-14\n      (LOC ROOMS)\n      (DESC \"Aisle 14\")\n      (EAST PER A-SEAT-EXIT)\n      (WEST PER A-SEAT-EXIT)\n      (NORTH TO A-13)\n      (SOUTH TO A-REAR)\n      (FLAGS AIRPLANEBIT)\n      (AISLE 14)\n      (ACTION A-AISLE-F)>",
   "referencedBy": []
  },
  "A-REAR": {
   "name": "A-REAR",
   "file": "jet.zil",
   "line": 268,
   "endLine": 278,
   "desc": "Airplane, near Tail",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-REAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "A-LAVATORY-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-REAR-E",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "A-REAR-W",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "A-14",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "A-LAVATORY",
     "kind": "conditional",
     "condition": "A-LAVATORY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "A-LAVATORY",
     "kind": "conditional",
     "condition": "A-LAVATORY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM A-REAR\n      (LOC ROOMS)\n      (DESC \"Airplane, near Tail\")\n      (EAST TO A-REAR-E)\n      (WEST TO A-REAR-W)\n      (NORTH TO A-14)\n      (SOUTH TO A-LAVATORY IF A-LAVATORY-DOOR IS OPEN)\n      (IN TO A-LAVATORY IF A-LAVATORY-DOOR IS OPEN)\n      (FLAGS AIRPLANEBIT)\n      (GLOBAL A-LAVATORY-DOOR)\n      (ACTION A-REAR-F)>",
   "referencedBy": [
    "WALK-THE-PLANK",
    "GLOBAL-WINDOW-F"
   ]
  },
  "A-LAVATORY": {
   "name": "A-LAVATORY",
   "file": "jet.zil",
   "line": 284,
   "endLine": 291,
   "desc": "Lavatory",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-LAVATORY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "A-LAVATORY-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-REAR",
     "kind": "conditional",
     "condition": "A-LAVATORY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "A-REAR",
     "kind": "conditional",
     "condition": "A-LAVATORY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM A-LAVATORY\n      (LOC ROOMS)\n      (DESC \"Lavatory\")\n      (OUT TO A-REAR IF A-LAVATORY-DOOR IS OPEN)\n      (NORTH TO A-REAR IF A-LAVATORY-DOOR IS OPEN)\n      (FLAGS AIRPLANEBIT)\n      (GLOBAL A-LAVATORY-DOOR)\n      (ACTION A-LAVATORY-F)>",
   "referencedBy": [
    "GLOBAL-WINDOW-F"
   ]
  },
  "A-REAR-E": {
   "name": "A-REAR-E",
   "file": "jet.zil",
   "line": 308,
   "endLine": 315,
   "desc": "East Emergency Exit",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-REAR-EW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "A-EMERGENCY-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-REAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FREE-FALL",
     "kind": "conditional",
     "condition": "A-EMERGENCY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM A-REAR-E\n      (LOC ROOMS)\n      (DESC \"East Emergency Exit\")\n      (WEST TO A-REAR)\n      (OUT TO FREE-FALL IF A-EMERGENCY-DOOR IS OPEN)\n      (FLAGS AIRPLANEBIT)\n      (GLOBAL A-EMERGENCY-DOOR)\n      (ACTION A-REAR-EW-F)>",
   "referencedBy": [
    "I-VISA-4"
   ]
  },
  "A-REAR-W": {
   "name": "A-REAR-W",
   "file": "jet.zil",
   "line": 321,
   "endLine": 328,
   "desc": "West Emergency Exit",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "AIRPLANEBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "A-REAR-EW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "A-EMERGENCY-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-REAR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "FREE-FALL",
     "kind": "conditional",
     "condition": "A-EMERGENCY-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM A-REAR-W\n      (LOC ROOMS)\n      (DESC \"West Emergency Exit\")\n      (EAST TO A-REAR)\n      (OUT TO FREE-FALL IF A-EMERGENCY-DOOR IS OPEN)\n      (FLAGS AIRPLANEBIT)\n      (GLOBAL A-EMERGENCY-DOOR)\n      (ACTION A-REAR-EW-F)>",
   "referencedBy": [
    "I-VISA-4"
   ]
  },
  "A-MIDAIR": {
   "name": "A-MIDAIR",
   "file": "jet.zil",
   "line": 440,
   "endLine": 444,
   "desc": "Midair",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "A-MIDAIR-F",
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
     "message": "Inevitable.",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "AIRPLANE-EXIT",
    "PARACHUTE"
   ],
   "source": "<ROOM A-MIDAIR\n      (LOC ROOMS)\n      (DESC \"Midair\")\n      (DOWN SORRY \"Inevitable.\")\n      (ACTION A-MIDAIR-F)>",
   "referencedBy": [
    "I-VISA-4",
    "GLOBAL-ATTENDANT-F"
   ]
  },
  "CAB-ROOM": {
   "name": "CAB-ROOM",
   "file": "things.zil",
   "line": 4226,
   "endLine": 4234,
   "desc": "In the Cab",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "SEAT"
   ],
   "adjectives": [
    "BACK"
   ],
   "action": "CAB-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAB-DRIVER",
    "CAB"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "CAB-EXIT-F",
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "CAB-NOTICE"
   ],
   "source": "<ROOM CAB-ROOM\n      (LOC ROOMS)\n      (DESC \"In the Cab\")\n      (FLAGS NO-NERD LIGHTED LOCATION INDOORS)\n      (GLOBAL CAB-DRIVER CAB)\n      (SYNONYM SEAT)\n      (ADJECTIVE BACK)\n      (OUT PER CAB-EXIT-F)\n      (ACTION CAB-ROOM-F)>",
   "referencedBy": []
  }
 },
 "objects": {
  "WFORM": {
   "name": "WFORM",
   "file": "bank.zil",
   "line": 45,
   "endLine": 53,
   "desc": "withdrawal slip",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "SLIP",
    "FORM",
    "BALANCE",
    "MINIMUM",
    "WITHDRAWAL"
   ],
   "adjectives": [
    "WITHDRAWAL",
    "ADDRESS",
    "CHANGE",
    "MINIMUM"
   ],
   "action": "WDFORM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "SLIP-F"
    ],
    "LOSING": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT WFORM\n\t(DESC \"withdrawal slip\")\n\t(FLAGS TAKEABLE READABLE)\n\t(SIZE 2)\n\t(SYNONYM SLIP FORM BALANCE MINIMUM WITHDRAWAL)\n\t(ADJECTIVE WITHDRAWAL ADDRESS CHANGE MINIMUM)\n\t(GENERIC SLIP-F)\n\t(LOSING 0)\n\t(ACTION WDFORM-F)>",
   "referencedBy": []
  },
  "DFORM": {
   "name": "DFORM",
   "file": "bank.zil",
   "line": 55,
   "endLine": 63,
   "desc": "deposit slip",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "SLIP",
    "FORM",
    "DEPOSIT"
   ],
   "adjectives": [
    "DEPOSIT"
   ],
   "action": "WDFORM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "SLIP-F"
    ],
    "LOSING": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT DFORM\n\t(DESC \"deposit slip\")\n\t(FLAGS TAKEABLE READABLE)\n\t(SIZE 2)\n\t(SYNONYM SLIP FORM DEPOSIT)\n\t(ADJECTIVE DEPOSIT)\n\t(GENERIC SLIP-F)\n\t(LOSING 0)\n\t(ACTION WDFORM-F)>",
   "referencedBy": []
  },
  "BANK": {
   "name": "BANK",
   "file": "bank.zil",
   "line": 317,
   "endLine": 330,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NO-NERD",
    "IN-TOWN",
    "LIGHTED",
    "LOCATION",
    "INDOORS",
    "SPECIAL-DROP"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BANK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "BANK-THINGS"
   ],
   "otherProps": {
    "SDESC": [
     "BANK-DESC-BRIEF"
    ],
    "EXIT-TO": [
     "ST-A"
    ],
    "ENTER-FROM": [
     "<PTABLE P?NORTH ST-A>"
    ]
   },
   "contents": [
    "TELLER",
    "TELLER-SIGN"
   ],
   "source": "<OBJECT BANK\n\t(LOC ROOMS)\n\t(SDESC BANK-DESC-BRIEF)\n\t(FLAGS NO-NERD IN-TOWN LIGHTED LOCATION INDOORS SPECIAL-DROP)\n\t(THINGS BANK-THINGS)\n\t(OUT TO ST-A)\n\t(SOUTH PER EXIT-BANK-CHECK)\n\t(NORTH PER TELLER-GOTO-F)\n\t(EAST PER NEXT-TELLER-F)\n\t(WEST PER PREV-TELLER-F)\n\t(IN SORRY \"You're already inside as far as you can go.\")\n\t(ACTION BANK-F)\n\t(EXIT-TO ST-A)\n\t(ENTER-FROM <PTABLE P?NORTH ST-A>)>",
   "referencedBy": []
  },
  "TELLER-WINDOWS": {
   "name": "TELLER-WINDOWS",
   "file": "bank.zil",
   "line": 428,
   "endLine": 434,
   "desc": "teller window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "PLACE"
   ],
   "synonyms": [
    "WINDOW",
    "WINDOWS"
   ],
   "adjectives": [
    "TELLER"
   ],
   "action": "TELLER-WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELLER-WINDOWS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"teller window\")\n\t(FLAGS NODESC PLACE)\n\t(ADJECTIVE TELLER)\n\t(SYNONYM WINDOW WINDOWS)\n\t(ACTION TELLER-WINDOW-F)>",
   "referencedBy": []
  },
  "TELLER": {
   "name": "TELLER",
   "file": "bank.zil",
   "line": 578,
   "endLine": 586,
   "desc": "bank teller",
   "ldesc": null,
   "fdesc": null,
   "loc": "BANK",
   "flags": [
    "LIVING",
    "FEMALE",
    "PERSON",
    "NODESC"
   ],
   "synonyms": [
    "TELLER",
    "WOMAN",
    "LADY"
   ],
   "adjectives": [
    "BANK"
   ],
   "action": "TELLER-F",
   "descfcn": "TELLER-F",
   "contfcn": "TELLER-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELLER\n\t(LOC BANK)\n\t(DESC \"bank teller\")\n\t(FLAGS LIVING FEMALE PERSON NODESC)\n\t(SYNONYM TELLER WOMAN LADY)\n\t(ADJECTIVE BANK)\n\t(DESCFCN TELLER-F)\n\t(CONTFCN TELLER-F)\n\t(ACTION TELLER-F)>",
   "referencedBy": []
  },
  "TELLER-SIGN": {
   "name": "TELLER-SIGN",
   "file": "bank.zil",
   "line": 1070,
   "endLine": 1076,
   "desc": "teller window sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "BANK",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "SIGN"
   ],
   "adjectives": [
    "TELLER"
   ],
   "action": "TELLER-SIGN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TELLER-SIGN\n\t(LOC BANK)\n\t(FLAGS NODESC)\n\t(DESC \"teller window sign\")\n\t(SYNONYM SIGN)\n\t(ADJECTIVE TELLER)\n\t(ACTION TELLER-SIGN-F)>",
   "referencedBy": []
  },
  "BANKSOUND": {
   "name": "BANKSOUND",
   "file": "bank.zil",
   "line": 1339,
   "endLine": 1348,
   "desc": "that sound",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "INVISIBLE"
   ],
   "synonyms": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "SOUND",
    "PAULETTE",
    "NANCY",
    "BONGO",
    "DOG",
    "PONGO",
    "PARROT"
   ],
   "adjectives": [
    "BANK"
   ],
   "action": "BANKSOUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SAY-BANKSOUND"
    ],
    "GENERIC": [
     "GENERIC-SOUND"
    ]
   },
   "contents": [],
   "source": "<OBJECT BANKSOUND\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"that sound\")\n\t(SDESC SAY-BANKSOUND)\n\t(FLAGS NODESC INVISIBLE)\n\t(SYNONYM ZZZP ZZZP ZZZP SOUND\n\t \t PAULETTE NANCY BONGO DOG PONGO PARROT)\n\t(ADJECTIVE BANK)\n\t(GENERIC GENERIC-SOUND)\n        (ACTION BANKSOUND-F)>",
   "referencedBy": []
  },
  "A-COCKPIT-DOOR": {
   "name": "A-COCKPIT-DOOR",
   "file": "jet.zil",
   "line": 46,
   "endLine": 51,
   "desc": "cockpit door",
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
    "COCKPIT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT A-COCKPIT-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"cockpit door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE COCKPIT)\n\t(FLAGS DOORBIT)>",
   "referencedBy": []
  },
  "A-LAVATORY-DOOR": {
   "name": "A-LAVATORY-DOOR",
   "file": "jet.zil",
   "line": 297,
   "endLine": 303,
   "desc": "lavatory door",
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
    "LAVATORY"
   ],
   "action": "A-LAVATORY-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT A-LAVATORY-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"lavatory door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LAVATORY)\n\t(FLAGS DOORBIT)\n\t(ACTION A-LAVATORY-DOOR-F)>",
   "referencedBy": []
  },
  "A-EMERGENCY-DOOR": {
   "name": "A-EMERGENCY-DOOR",
   "file": "jet.zil",
   "line": 330,
   "endLine": 335,
   "desc": "emergency door",
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
    "EMERGENCY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT A-EMERGENCY-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"emergency door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE EMERGENCY)\n\t(FLAGS DOORBIT)>",
   "referencedBy": []
  },
  "MOVIE": {
   "name": "MOVIE",
   "file": "jet.zil",
   "line": 337,
   "endLine": 342,
   "desc": "in-flight movie",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "MOVIE",
    "FILM",
    "FLICK"
   ],
   "adjectives": [
    "IN-FLIGHT"
   ],
   "action": "MOVIE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOVIE\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"in-flight movie\")\n\t(SYNONYM MOVIE FILM FLICK)\n\t(ADJECTIVE IN-FLIGHT)\n\t(ACTION MOVIE-F)>",
   "referencedBy": [
    "V-$MOVIE"
   ]
  },
  "AIRPLANE-EXIT": {
   "name": "AIRPLANE-EXIT",
   "file": "jet.zil",
   "line": 446,
   "endLine": 452,
   "desc": "emergency exit",
   "ldesc": null,
   "fdesc": null,
   "loc": "A-MIDAIR",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "EXIT",
    "DOOR",
    "WINDOW"
   ],
   "adjectives": [
    "AIRPLANE",
    "EMERGENCY"
   ],
   "action": "AIRPLANE-EXIT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIRPLANE-EXIT\n\t(LOC A-MIDAIR)\n\t(DESC \"emergency exit\")\n\t(SYNONYM EXIT DOOR WINDOW)\n\t(ADJECTIVE AIRPLANE EMERGENCY)\n\t(FLAGS NDESCBIT)\n\t(ACTION AIRPLANE-EXIT-F)>",
   "referencedBy": [
    "GLOBAL-ATTENDANT-F"
   ]
  },
  "PARACHUTE": {
   "name": "PARACHUTE",
   "file": "jet.zil",
   "line": 585,
   "endLine": 591,
   "desc": "parachute",
   "ldesc": null,
   "fdesc": null,
   "loc": "A-MIDAIR",
   "flags": [
    "CONTBIT",
    "TRANSBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "STRAP",
    "PARACHUTE",
    "CHUTE"
   ],
   "adjectives": [
    "MULTI-COLORED"
   ],
   "action": "PARACHUTE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "RIP-CORD"
   ],
   "source": "<OBJECT PARACHUTE\n\t(LOC A-MIDAIR)\n\t(DESC \"parachute\")\n\t(SYNONYM STRAP PARACHUTE CHUTE)\n\t(ADJECTIVE MULTI-COLORED)\n\t(FLAGS CONTBIT TRANSBIT NDESCBIT)\n\t(ACTION PARACHUTE-F)>",
   "referencedBy": []
  },
  "RIP-CORD": {
   "name": "RIP-CORD",
   "file": "jet.zil",
   "line": 593,
   "endLine": 599,
   "desc": "red handle",
   "ldesc": null,
   "fdesc": null,
   "loc": "PARACHUTE",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CORD",
    "HANDLE"
   ],
   "adjectives": [
    "RIP",
    "RED"
   ],
   "action": "RIP-CORD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIP-CORD\n\t(LOC PARACHUTE)\n\t(DESC \"red handle\")\n\t(SYNONYM CORD HANDLE)\n\t(ADJECTIVE RIP RED)\n\t(FLAGS NDESCBIT)\n\t(ACTION RIP-CORD-F)>",
   "referencedBy": []
  },
  "A-ATTENDANT": {
   "name": "A-ATTENDANT",
   "file": "jet.zil",
   "line": 695,
   "endLine": 702,
   "desc": "stewardess",
   "ldesc": "A stewardess is here, waiting for you.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "STEWARDESS",
    "ATTENDANT"
   ],
   "adjectives": [
    "CABIN"
   ],
   "action": "A-ATTENDANT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT A-ATTENDANT\n\t(DESC \"stewardess\")\n\t(LDESC\n\"A stewardess is here, waiting for you.\")\n\t(SYNONYM STEWARDESS ATTENDANT)\n\t(ADJECTIVE CABIN)\n\t(FLAGS ACTORBIT)\n\t(ACTION A-ATTENDANT-F)>",
   "referencedBy": [
    "I-VISA-2",
    "A-ATTENDANT-F",
    "MAKE-ATTENDANT-APPEAR",
    "I-ATTENDANT-LEAVES"
   ]
  },
  "GLOBAL-ATTENDANT": {
   "name": "GLOBAL-ATTENDANT",
   "file": "jet.zil",
   "line": 732,
   "endLine": 737,
   "desc": "stewardess",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "STEWARD",
    "STEWARDESS",
    "ATTENDANT"
   ],
   "adjectives": [
    "CABIN"
   ],
   "action": "GLOBAL-ATTENDANT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-ATTENDANT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"stewardess\")\n\t(SYNONYM STEWARD STEWARDESS ATTENDANT)\n\t(ADJECTIVE CABIN)\n\t(ACTION GLOBAL-ATTENDANT-F)>",
   "referencedBy": []
  },
  "A-PURSER": {
   "name": "A-PURSER",
   "file": "jet.zil",
   "line": 775,
   "endLine": 782,
   "desc": "purser",
   "ldesc": "The purser, a large, burly man, is here, waiting impatiently.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "PURSER"
   ],
   "adjectives": [
    "BURLY"
   ],
   "action": "A-PURSER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT A-PURSER\n\t(DESC \"purser\")\n\t(LDESC\n\"The purser, a large, burly man, is here, waiting impatiently.\")\n\t(SYNONYM PURSER)\n\t(ADJECTIVE BURLY)\n\t(FLAGS ACTORBIT)\n\t(ACTION A-PURSER-F)>",
   "referencedBy": [
    "I-VISA-3"
   ]
  },
  "IMMIGRATION-FORM": {
   "name": "IMMIGRATION-FORM",
   "file": "jet.zil",
   "line": 811,
   "endLine": 816,
   "desc": "immigration form",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "FORM"
   ],
   "adjectives": [
    "IMMIGRATION"
   ],
   "action": "IMMIGRATION-FORM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "VISA-NUMBER"
   ],
   "source": "<OBJECT IMMIGRATION-FORM\n\t(DESC \"immigration form\")\n\t(SYNONYM FORM)\n\t(ADJECTIVE IMMIGRATION)\n\t(FLAGS READBIT TAKEBIT CONTBIT TRANSBIT)\n\t(ACTION IMMIGRATION-FORM-F)>",
   "referencedBy": [
    "I-VISA-1",
    "A-ATTENDANT-F"
   ]
  },
  "VISA-NUMBER": {
   "name": "VISA-NUMBER",
   "file": "jet.zil",
   "line": 818,
   "endLine": 824,
   "desc": "visa number",
   "ldesc": null,
   "fdesc": null,
   "loc": "IMMIGRATION-FORM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "NUMBER"
   ],
   "adjectives": [
    "VISA"
   ],
   "action": "VISA-NUMBER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VISA-NUMBER\n\t(LOC IMMIGRATION-FORM)\n\t(DESC \"visa number\")\n\t(SYNONYM NUMBER)\n\t(ADJECTIVE VISA)\n\t(FLAGS NDESCBIT)\n\t(ACTION VISA-NUMBER-F)>",
   "referencedBy": []
  },
  "HIJACKER": {
   "name": "HIJACKER",
   "file": "jet.zil",
   "line": 874,
   "endLine": 878,
   "desc": "hijacker",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT",
    "TRANSBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "MAN",
    "HIJACKER"
   ],
   "adjectives": [],
   "action": "HIJACKER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "GUN",
    "EXPLOSIVES",
    "WALKIE-TALKIE"
   ],
   "source": "<OBJECT HIJACKER\n\t(DESC \"hijacker\")\n\t(SYNONYM MAN HIJACKER)\n\t(FLAGS ACTORBIT TRANSBIT CONTBIT)\n\t(ACTION HIJACKER-F)>",
   "referencedBy": [
    "START-HIJACK",
    "HIJACKER-F"
   ]
  },
  "GUN": {
   "name": "GUN",
   "file": "jet.zil",
   "line": 899,
   "endLine": 904,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "HIJACKER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PISTOL",
    "GUN",
    "HANDGUN"
   ],
   "adjectives": [
    "HAND"
   ],
   "action": "GUN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GUN\n\t(LOC HIJACKER)\n\t(SYNONYM PISTOL GUN HANDGUN)\n\t(ADJECTIVE HAND)\n\t(FLAGS NDESCBIT)\n\t(ACTION GUN-F)>",
   "referencedBy": []
  },
  "EXPLOSIVES": {
   "name": "EXPLOSIVES",
   "file": "jet.zil",
   "line": 914,
   "endLine": 919,
   "desc": "explosives",
   "ldesc": null,
   "fdesc": null,
   "loc": "HIJACKER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "GRENADE",
    "GRENADES",
    "STICKS",
    "DYNAMITE",
    "STICK"
   ],
   "adjectives": [],
   "action": "EXPLOSIVES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EXPLOSIVES\n\t(LOC HIJACKER)\n\t(DESC \"explosives\")\n\t(SYNONYM GRENADE GRENADES STICKS DYNAMITE STICK)\n\t(FLAGS NDESCBIT)\n\t(ACTION EXPLOSIVES-F)>",
   "referencedBy": []
  },
  "GRENADE": {
   "name": "GRENADE",
   "file": "jet.zil",
   "line": 945,
   "endLine": 950,
   "desc": "grenade",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "GRENADE"
   ],
   "adjectives": [
    "HAND"
   ],
   "action": "GRENADE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GRENADE\n\t(DESC \"grenade\")\n\t(SYNONYM GRENADE)\n\t(ADJECTIVE HAND)\n\t(FLAGS TAKEBIT)\n\t(ACTION GRENADE-F)>",
   "referencedBy": [
    "HIJACKER-F",
    "EXPLODES?"
   ]
  },
  "WALKIE-TALKIE": {
   "name": "WALKIE-TALKIE",
   "file": "jet.zil",
   "line": 964,
   "endLine": 970,
   "desc": "yellow device",
   "ldesc": null,
   "fdesc": null,
   "loc": "HIJACKER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "ANTENNA",
    "DEVICE",
    "WALKIE-TALKIE",
    "TALKIE",
    "TRANSMITTER"
   ],
   "adjectives": [
    "YELLOW",
    "WALKIE"
   ],
   "action": "WALKIE-TALKIE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALKIE-TALKIE\n\t(LOC HIJACKER)\n\t(DESC \"yellow device\")\n\t(SYNONYM ANTENNA DEVICE WALKIE-TALKIE TALKIE TRANSMITTER)\n\t(ADJECTIVE YELLOW WALKIE)\n\t(FLAGS NDESCBIT)\n\t(ACTION WALKIE-TALKIE-F)>",
   "referencedBy": []
  },
  "GLOBAL-DINNER": {
   "name": "GLOBAL-DINNER",
   "file": "jet.zil",
   "line": 1064,
   "endLine": 1069,
   "desc": "meal",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DINNER",
    "LUNCH",
    "BREAKFAST",
    "SNACK",
    "FOOD"
   ],
   "adjectives": [
    "SOME"
   ],
   "action": "GLOBAL-DINNER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-DINNER\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"meal\")\n\t(SYNONYM DINNER LUNCH BREAKFAST SNACK FOOD)\n\t(ADJECTIVE SOME)\n\t(ACTION GLOBAL-DINNER-F)>",
   "referencedBy": []
  },
  "GLOBAL-DRINK": {
   "name": "GLOBAL-DRINK",
   "file": "jet.zil",
   "line": 1071,
   "endLine": 1075,
   "desc": "drink",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DRINK"
   ],
   "adjectives": [],
   "action": "GLOBAL-DRINK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-DRINK\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"drink\")\n\t(SYNONYM DRINK)\n\t(ACTION GLOBAL-DRINK-F)>",
   "referencedBy": []
  },
  "GLOBAL-BLANKET": {
   "name": "GLOBAL-BLANKET",
   "file": "jet.zil",
   "line": 1077,
   "endLine": 1081,
   "desc": "blanket",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "BLANKET"
   ],
   "adjectives": [],
   "action": "GLOBAL-BLANKET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-BLANKET\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"blanket\")\n\t(SYNONYM BLANKET)\n\t(ACTION GLOBAL-BLANKET-F)>",
   "referencedBy": []
  },
  "GLOBAL-PILLOW": {
   "name": "GLOBAL-PILLOW",
   "file": "jet.zil",
   "line": 1083,
   "endLine": 1087,
   "desc": "pillow",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "PILLOW"
   ],
   "adjectives": [],
   "action": "GLOBAL-PILLOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-PILLOW\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"pillow\")\n\t(SYNONYM PILLOW)\n\t(ACTION GLOBAL-PILLOW-F)>",
   "referencedBy": []
  },
  "GLOBAL-WINDOW": {
   "name": "GLOBAL-WINDOW",
   "file": "jet.zil",
   "line": 1089,
   "endLine": 1093,
   "desc": "window",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "PILLOW"
   ],
   "adjectives": [],
   "action": "GLOBAL-WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WINDOW\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"window\")\n\t(SYNONYM PILLOW)\n\t(ACTION GLOBAL-WINDOW-F)>",
   "referencedBy": []
  },
  "GLOBAL-AIRPLANE": {
   "name": "GLOBAL-AIRPLANE",
   "file": "jet.zil",
   "line": 1109,
   "endLine": 1114,
   "desc": "airplane",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VOWELBIT"
   ],
   "synonyms": [
    "AIRPLANE",
    "PLANE",
    "JET",
    "AIRCRAFT"
   ],
   "adjectives": [],
   "action": "GLOBAL-AIRPLANE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-AIRPLANE\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"airplane\")\n\t(SYNONYM AIRPLANE PLANE JET AIRCRAFT)\n\t(FLAGS VOWELBIT)\n\t(ACTION GLOBAL-AIRPLANE-F)>",
   "referencedBy": []
  },
  "GLOBAL-SEAT": {
   "name": "GLOBAL-SEAT",
   "file": "jet.zil",
   "line": 1134,
   "endLine": 1138,
   "desc": "seat",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "SEAT",
    "SEATS",
    "CHAIR",
    "CHAIRS"
   ],
   "adjectives": [],
   "action": "GLOBAL-SEAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-SEAT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"seat\")\n\t(SYNONYM SEAT SEATS CHAIR CHAIRS)\n\t(ACTION GLOBAL-SEAT-F)>",
   "referencedBy": []
  },
  "SEAT-POCKET": {
   "name": "SEAT-POCKET",
   "file": "xxjet.zil",
   "line": 738,
   "endLine": 745,
   "desc": "seat pocket",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "CONTAINER",
    "OPENABLE",
    "OPENED",
    "NODESC"
   ],
   "synonyms": [
    "POCKET"
   ],
   "adjectives": [
    "SEAT"
   ],
   "action": "SEAT-POCKET-F",
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
    "AIRLINE-MAGAZINE",
    "SAFETY-CARD",
    "BARF-BAG",
    "PHONES",
    "PLANE-MAGAZINE",
    "CARD"
   ],
   "source": "<OBJECT SEAT-POCKET\n\t(LOC SEAT)\n\t(DESC \"seat pocket\")\n\t(FLAGS CONTAINER OPENABLE OPENED NODESC)\n\t(CAPACITY 10)\n\t(SYNONYM POCKET)\n\t(ADJECTIVE SEAT)\n\t(ACTION SEAT-POCKET-F)>",
   "referencedBy": [
    "UNSEAT-CHECK",
    "SEAT-POCKET-F"
   ]
  },
  "AIRLINE-MAGAZINE": {
   "name": "AIRLINE-MAGAZINE",
   "file": "xxjet.zil",
   "line": 756,
   "endLine": 763,
   "desc": "airline magazine",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT-POCKET",
   "flags": [
    "TAKEABLE",
    "READABLE",
    "VOWEL"
   ],
   "synonyms": [
    "MAGAZINE"
   ],
   "adjectives": [
    "AIRLINE"
   ],
   "action": "AIRLINE-MAGAZINE-F",
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
   "source": "<OBJECT AIRLINE-MAGAZINE\n\t(LOC SEAT-POCKET)\n\t(DESC \"airline magazine\")\n\t(SYNONYM MAGAZINE)\n\t(ADJECTIVE AIRLINE)\n\t(FLAGS TAKEABLE READABLE VOWEL)\n\t(SIZE 4)\n\t(ACTION AIRLINE-MAGAZINE-F)>",
   "referencedBy": [
    "UNSEAT-CHECK"
   ]
  },
  "SAFETY-CARD": {
   "name": "SAFETY-CARD",
   "file": "xxjet.zil",
   "line": 782,
   "endLine": 789,
   "desc": "safety card",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT-POCKET",
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "CARD"
   ],
   "adjectives": [
    "SAFETY"
   ],
   "action": "SAFETY-CARD-F",
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
   "source": "<OBJECT SAFETY-CARD\n\t(LOC SEAT-POCKET)\n\t(DESC \"safety card\")\n\t(SYNONYM CARD)\n\t(ADJECTIVE SAFETY)\n\t(FLAGS TAKEABLE READABLE)\n\t(SIZE 3)\n\t(ACTION SAFETY-CARD-F)>",
   "referencedBy": [
    "UNSEAT-CHECK"
   ]
  },
  "BARF-BAG": {
   "name": "BARF-BAG",
   "file": "njet.zil",
   "line": 210,
   "endLine": 218,
   "desc": "discomfort bag",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT-POCKET",
   "flags": [
    "TAKEABLE",
    "CONTAINER",
    "OPENABLE",
    "READABLE"
   ],
   "synonyms": [
    "BAG"
   ],
   "adjectives": [
    "DISCOMFORT",
    "BARF",
    "VOMIT"
   ],
   "action": "BARF-BAG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "CAPACITY": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT BARF-BAG\n\t(LOC SEAT-POCKET)\n\t(DESC \"discomfort bag\")\n\t(FLAGS TAKEABLE CONTAINER OPENABLE READABLE)\n\t(SYNONYM BAG)\n\t(ADJECTIVE DISCOMFORT BARF VOMIT)\n\t(SIZE 2)\n\t(CAPACITY 2)\n\t(ACTION BARF-BAG-F)>",
   "referencedBy": [
    "UNSEAT-CHECK",
    "BARF-BAG-F"
   ]
  },
  "KNIFE": {
   "name": "KNIFE",
   "file": "jet.zil",
   "line": 1348,
   "endLine": 1352,
   "desc": "knife",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEAL-PLATTER",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "KNIFE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KNIFE\n\t(LOC MEAL-PLATTER)\n\t(DESC \"knife\")\n\t(SYNONYM KNIFE)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": []
  },
  "FORK": {
   "name": "FORK",
   "file": "jet.zil",
   "line": 1354,
   "endLine": 1358,
   "desc": "fork",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEAL-PLATTER",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "FORK"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FORK\n\t(LOC MEAL-PLATTER)\n\t(DESC \"fork\")\n\t(SYNONYM FORK)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": []
  },
  "SPOON": {
   "name": "SPOON",
   "file": "jet.zil",
   "line": 1360,
   "endLine": 1364,
   "desc": "spoon",
   "ldesc": null,
   "fdesc": null,
   "loc": "MEAL-PLATTER",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "SPOON"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SPOON\n\t(LOC MEAL-PLATTER)\n\t(DESC \"spoon\")\n\t(SYNONYM SPOON)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": []
  },
  "MEAL-PLATTER": {
   "name": "MEAL-PLATTER",
   "file": "jet.zil",
   "line": 1366,
   "endLine": 1369,
   "desc": "tray",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "PLATTER",
    "TRAY"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "KNIFE",
    "FORK",
    "SPOON"
   ],
   "source": "<OBJECT MEAL-PLATTER\n\t(DESC \"tray\")\n\t(SYNONYM PLATTER TRAY)\n\t(FLAGS TAKEBIT)>",
   "referencedBy": []
  },
  "MAZE-ROOM": {
   "name": "MAZE-ROOM",
   "file": "maze.zil",
   "line": 7,
   "endLine": 20,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "PLACE",
    "NODESC",
    "LIGHTED",
    "INDOORS",
    "NOARTICLE"
   ],
   "synonyms": [
    "NUMBER",
    "INSCRIPTION",
    "GEAR",
    "SWITCHGEAR"
   ],
   "adjectives": [
    "SWITCH"
   ],
   "action": "MAZE-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-MAZE"
    ]
   },
   "contents": [],
   "source": "<OBJECT MAZE-ROOM\n\t(LOC ROOMS)\n\t(SYNONYM NUMBER INSCRIPTION GEAR SWITCHGEAR)\n\t(ADJECTIVE SWITCH)\n\t(SDESC SDESC-MAZE)\n\t(FLAGS PLACE NODESC LIGHTED INDOORS NOARTICLE)\n\t(EAST PER MAZE-EXIT)\n\t(WEST PER MAZE-EXIT)\n\t(NORTH PER MAZE-EXIT)\n\t(SOUTH PER MAZE-EXIT)\n\t(UP PER MAZE-EXIT)\n\t(DOWN PER MAZE-EXIT)\n\t(OUT PER MAZE-EXIT)\n\t(ACTION MAZE-ROOM-F)>",
   "referencedBy": []
  },
  "INNER-ROOM": {
   "name": "INNER-ROOM",
   "file": "maze.zil",
   "line": 110,
   "endLine": 118,
   "desc": "Airlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "PLACE",
    "LIGHTED",
    "INDOORS",
    "NO-NERD"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "INNER-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "OTHER-TRAP-DOOR"
   ],
   "source": "<OBJECT INNER-ROOM\n\t(LOC ROOMS)\n\t(DESC \"Airlock\")\n\t(FLAGS PLACE LIGHTED INDOORS NO-NERD)\n\t(ACTION INNER-ROOM-F)\n\t(IN PER ENTER-IN-INNER)\n\t(NORTH PER ENTER-COMPLEX)\n\t(SOUTH SORRY \"You can't find the entrance you must undoubtedly have used.\")\n\t(WEST PER ENTER-CARD-ROOM)>",
   "referencedBy": []
  },
  "OTHER-TRAP-DOOR": {
   "name": "OTHER-TRAP-DOOR",
   "file": "maze.zil",
   "line": 256,
   "endLine": 266,
   "desc": "airlock door",
   "ldesc": null,
   "fdesc": null,
   "loc": "INNER-ROOM",
   "flags": [
    "DOORLIKE",
    "OPENABLE",
    "LOCKED",
    "CONTAINER",
    "TRANSPARENT",
    "VOWEL"
   ],
   "synonyms": [
    "DOOR",
    "SLOT",
    "READER",
    "HOLE",
    "LOCK",
    "DOOR",
    "AIRLOCK"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "KEY",
    "AIRLOCK",
    "CARD",
    "READER",
    "DOOR"
   ],
   "action": "OTHER-TRAP-DOOR-F",
   "descfcn": "OTHER-TRAP-DOOR-F",
   "contfcn": "OTHER-TRAP-DOOR-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "0"
    ],
    "SIZE": [
     "255"
    ]
   },
   "contents": [],
   "source": "<OBJECT OTHER-TRAP-DOOR\n\t(LOC INNER-ROOM)\n\t(DESC \"airlock door\")\n\t(FLAGS DOORLIKE OPENABLE LOCKED CONTAINER TRANSPARENT VOWEL)\n\t(SYNONYM DOOR SLOT READER HOLE LOCK DOOR AIRLOCK)\n\t(ADJECTIVE CLOSED SHUT KEY AIRLOCK CARD READER DOOR)\n\t(CAPACITY 0)\n\t(SIZE 255)\n\t(CONTFCN OTHER-TRAP-DOOR-F)\n\t(DESCFCN OTHER-TRAP-DOOR-F)\n\t(ACTION OTHER-TRAP-DOOR-F)>",
   "referencedBy": []
  },
  "IN-COMPLEX": {
   "name": "IN-COMPLEX",
   "file": "maze.zil",
   "line": 372,
   "endLine": 380,
   "desc": "Persecution Complex",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "PLACE",
    "LIGHTED",
    "INDOORS",
    "SPECIAL-DROP",
    "NO-NERD"
   ],
   "synonyms": [
    "HALL",
    "COMPLEX"
   ],
   "adjectives": [
    "PERSECUTION"
   ],
   "action": "IN-COMPLEX-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "PERSECUTION-SIGN",
    "WINDOW-R",
    "WINDOW-L"
   ],
   "source": "<OBJECT IN-COMPLEX\n\t(LOC ROOMS)\n\t(DESC \"Persecution Complex\")\n\t(EAST PER COMPLEX-MOVE)\n\t(WEST PER COMPLEX-MOVE)\n\t(SYNONYM HALL COMPLEX)\n\t(ADJECTIVE PERSECUTION)\n\t(FLAGS PLACE LIGHTED INDOORS SPECIAL-DROP NO-NERD)\n\t(ACTION IN-COMPLEX-ROOM-F)>",
   "referencedBy": []
  },
  "PERSECUTION-SIGN": {
   "name": "PERSECUTION-SIGN",
   "file": "maze.zil",
   "line": 485,
   "endLine": 490,
   "desc": "sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-COMPLEX",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "NOTICE",
    "SIGN"
   ],
   "adjectives": [],
   "action": "PNOTICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PERSECUTION-SIGN\n\t(LOC IN-COMPLEX)\n\t(DESC \"sign\")\n\t(FLAGS NODESC)\n\t(SYNONYM NOTICE SIGN)\n\t(ACTION PNOTICE-F)>",
   "referencedBy": []
  },
  "WINDOW-R": {
   "name": "WINDOW-R",
   "file": "maze.zil",
   "line": 512,
   "endLine": 518,
   "desc": "right observation screen",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-COMPLEX",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "SCREENS",
    "SCREEN",
    "MONITOR"
   ],
   "adjectives": [
    "OBSERVATION",
    "RIGHT",
    "SECURITY",
    "TV",
    "TELEVISION"
   ],
   "action": "RWINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WINDOW-R\n\t(DESC \"right observation screen\")\n\t(LOC IN-COMPLEX)\n\t(FLAGS NODESC)\n\t(SYNONYM SCREENS SCREEN MONITOR)\n\t(ADJECTIVE OBSERVATION RIGHT SECURITY TV TELEVISION)\n\t(ACTION RWINDOW-F)>",
   "referencedBy": []
  },
  "WINDOW-L": {
   "name": "WINDOW-L",
   "file": "maze.zil",
   "line": 520,
   "endLine": 526,
   "desc": "left observation screen",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-COMPLEX",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "SCREENS",
    "SCREEN",
    "MONITOR"
   ],
   "adjectives": [
    "OBSERVATION",
    "LEFT",
    "SECURITY",
    "TV",
    "TELEVISION"
   ],
   "action": "LWINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WINDOW-L\n\t(DESC \"left observation screen\")\n\t(FLAGS NODESC)\n\t(LOC IN-COMPLEX)\n\t(SYNONYM SCREENS SCREEN MONITOR)\n\t(ADJECTIVE OBSERVATION LEFT SECURITY TV TELEVISION)\n\t(ACTION LWINDOW-F)>",
   "referencedBy": []
  },
  "UNDER-TRAP-DOOR": {
   "name": "UNDER-TRAP-DOOR",
   "file": "maze.zil",
   "line": 573,
   "endLine": 582,
   "desc": "air shaft",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "PLACE",
    "LIGHTED",
    "INDOORS",
    "NO-NERD"
   ],
   "synonyms": [
    "SHAFT",
    "AIRSHAFT",
    "GRAFFITI",
    "GRAFFITO"
   ],
   "adjectives": [
    "AIR"
   ],
   "action": "UNDER-TRAP-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UNDER-TRAP-DOOR\n\t(LOC ROOMS)\n\t(FLAGS PLACE LIGHTED INDOORS NO-NERD)\n\t(SYNONYM SHAFT AIRSHAFT GRAFFITI GRAFFITO)\n\t(ADJECTIVE AIR)\n\t(DESC \"air shaft\")\n\t(EAST TO IN-COMPLEX)\n\t(OUT PER UP-TO-LANDING-STRIP)\n\t(UP PER UP-TO-LANDING-STRIP)\n\t(ACTION UNDER-TRAP-DOOR-F)>",
   "referencedBy": []
  },
  "LANDING-STRIP": {
   "name": "LANDING-STRIP",
   "file": "maze.zil",
   "line": 657,
   "endLine": 670,
   "desc": "landing strip",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "PLACE",
    "NODESC",
    "LIGHTED",
    "NO-NERD"
   ],
   "synonyms": [
    "STRIP",
    "JUNGLE"
   ],
   "adjectives": [
    "LANDING",
    "AIR"
   ],
   "action": "LANDING-STRIP-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "UNDER-TRAP-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LANDING-STRIP\n\t(DESC \"landing strip\")\n\t(LOC ROOMS)\n\t(FLAGS PLACE NODESC LIGHTED NO-NERD)\n\t(SYNONYM STRIP JUNGLE)\n\t(ADJECTIVE LANDING AIR)\n\t(WEST SORRY \"The jungle that surrounds the landing strip is impenetrable. You may, quite rightly, ask how there happens to be a landing strip in the midst of it. Well, we aren't sure, but it happened.\")\n\t(NORTH SORRY \"The jungle that surrounds the landing strip is impenetrable. You may, quite rightly, ask how there happens to be a landing strip in the midst of it. Well, we aren't sure, but it happened.\")\n\t(SOUTH SORRY \"The jungle that surrounds the landing strip is impenetrable. You may, quite rightly, ask how there happens to be a landing strip in the midst of it. Well, we aren't sure, but it happened.\")\n\t(EAST SORRY \"The jungle that surrounds the landing strip is impenetrable. You may, quite rightly, ask how there happens to be a landing strip in the midst of it. Well, we aren't sure, but it happened.\")\n\t(DOWN PER DOWN-FROM-STRIP)\n\t(UP SORRY \"All in due course.\")\n\t(GLOBAL UNDER-TRAP-DOOR)\n\t(ACTION LANDING-STRIP-F)>",
   "referencedBy": []
  },
  "END-MAIL": {
   "name": "END-MAIL",
   "file": "maze.zil",
   "line": 854,
   "endLine": 859,
   "desc": "new letter",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "LETTER"
   ],
   "adjectives": [
    "NEW"
   ],
   "action": "END-MAIL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT END-MAIL\n\t(DESC \"new letter\")\n\t(FLAGS TAKEABLE READABLE)\n\t(SYNONYM LETTER)\n\t(ADJECTIVE NEW)\n\t(ACTION END-MAIL-F)>",
   "referencedBy": []
  },
  "DUMMY-OBJECT": {
   "name": "DUMMY-OBJECT",
   "file": "misc.zil",
   "line": 13,
   "endLine": 13,
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
   "source": "<OBJECT DUMMY-OBJECT>",
   "referencedBy": []
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "misc.zil",
   "line": 518,
   "endLine": 527,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LOCATION",
    "LIGHTED",
    "INDOORS",
    "PLACE",
    "FOODBIT",
    "NODESC",
    "NOARTICLE",
    "VOWEL",
    "PLURAL",
    "NOALL",
    "SEEN",
    "TOUCHED",
    "SURFACE",
    "CONTAINER",
    "OPENABLE",
    "DOORLIKE",
    "OPENED",
    "TRANSPARENT",
    "LOCKED",
    "TAKEABLE",
    "TRYTAKE",
    "CLOTHING",
    "WORN",
    "LIVING",
    "PERSON",
    "FEMALE",
    "IN-TERMINAL",
    "IN-TOWN",
    "IN-AIRPLANE",
    "TOOL",
    "VEHBIT",
    "READABLE",
    "MANUALLY",
    "CLERK-TOLD",
    "AGENT-TOLD",
    "DMAN-TOLD",
    "SHITTY",
    "NO-NERD",
    "SPECIAL-DROP",
    "SHARPENED",
    "SEARCH-ME",
    "MUSICAL",
    "INVISIBLE",
    "NEEDS-IDENTITY"
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
    "BANKSOUND",
    "MOVIE",
    "GLOBAL-ATTENDANT",
    "GLOBAL-DINNER",
    "GLOBAL-DRINK",
    "GLOBAL-BLANKET",
    "GLOBAL-PILLOW",
    "GLOBAL-WINDOW",
    "GLOBAL-AIRPLANE",
    "GLOBAL-SEAT",
    "LOCAL-GLOBALS",
    "INTNUM",
    "IT",
    "GLOBAL-ROOM",
    "HER",
    "HIM",
    "AIRPORT",
    "REQUIREMENTS",
    "FLIGHT-42",
    "PLANE",
    "TEETH",
    "WALLS",
    "CEILING",
    "HANDS",
    "FEET",
    "MOUTH",
    "EYES",
    "ME",
    "YOU",
    "CLOTHES",
    "THEM",
    "INTDIR",
    "GROUND",
    "SOUNDS",
    "CORNER",
    "INCIDENT",
    "UNFORTUN",
    "HELLO-OBJECT",
    "CALIFORNIA",
    "OPTOMETRISTS",
    "QUEEN-MUM",
    "YOUR-HOUSE",
    "OLD-HOUSE",
    "DOWNTOWN",
    "GBANK",
    "CAB",
    "REQUEST-OBJECT"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS LOCATION LIGHTED INDOORS PLACE FOODBIT\n\t       NODESC NOARTICLE VOWEL PLURAL NOALL SEEN\n\t       TOUCHED SURFACE CONTAINER OPENABLE DOORLIKE \n\t       OPENED TRANSPARENT LOCKED TAKEABLE TRYTAKE\n\t       CLOTHING WORN LIVING PERSON FEMALE IN-TERMINAL\n\t       IN-TOWN IN-AIRPLANE\n\t       TOOL VEHBIT READABLE MANUALLY CLERK-TOLD AGENT-TOLD\n\t       DMAN-TOLD SHITTY NO-NERD SPECIAL-DROP SHARPENED\n\t       SEARCH-ME MUSICAL INVISIBLE NEEDS-IDENTITY)>",
   "referencedBy": []
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "misc.zil",
   "line": 529,
   "endLine": 539,
   "desc": null,
   "ldesc": "L",
   "fdesc": "F",
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ZZZP"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": "0",
   "contfcn": "0",
   "globals": [
    "GLOBAL-OBJECTS"
   ],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "0"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [
    "TELLER-WINDOWS",
    "A-COCKPIT-DOOR",
    "A-LAVATORY-DOOR",
    "A-EMERGENCY-DOOR",
    "SKYCAPS",
    "SIGNS",
    "PSIGNS",
    "PILLAR",
    "GRATE",
    "TOWER-GRATE",
    "TOWER",
    "AIRPORT-MUSIC",
    "AIRPORT-CROWD",
    "GSPEAKER",
    "THE-FLIGHT",
    "SEATBELT-LIGHT",
    "FLIGHT-ATTENDANT",
    "JDOOR",
    "PAR-STAIR",
    "CAMHOUSE",
    "BWGATE",
    "CAMERA",
    "PMATRON",
    "FOOD",
    "KITCHEN-DOOR",
    "FENCE",
    "FROOM-DOOR",
    "DOORBELL",
    "GSTREET",
    "YOUR-WINDOWS",
    "LANDF-DOOR",
    "FARM-DOOR",
    "MHALL",
    "PORCH-DOOR",
    "MANSION-DOOR",
    "RADIO",
    "FLAT-DOOR",
    "TEN-STAIR",
    "FLAT",
    "STREETNUMBERS",
    "CAB-DRIVER",
    "NATIVES"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM ZZZP)\n        (DESCFCN 0)\n        (GLOBAL GLOBAL-OBJECTS)\n        (FDESC \"F\")\n        (LDESC \"L\")\n        (CONTFCN 0)\n        (SIZE 0)\n        (CAPACITY 0)\n      ; (VALUE 0)>",
   "referencedBy": []
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "misc.zil",
   "line": 541,
   "endLine": 544,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NODESC",
    "NOARTICLE",
    "LOCATION"
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
    "BANK",
    "MAZE-ROOM",
    "INNER-ROOM",
    "IN-COMPLEX",
    "UNDER-TRAP-DOOR",
    "LANDING-STRIP",
    "AIRLINE-DESK",
    "DUCT",
    "ENT-A",
    "ENT-B",
    "ENT-C",
    "ENT-D",
    "ENT-E",
    "ENT-F",
    "ENT-G",
    "AIR-A",
    "AIR-B",
    "AIR-C",
    "PILLAR-A",
    "PILLAR-B",
    "DUCT-A",
    "DUCT-B",
    "DUCT-C",
    "DUCT-D",
    "IN-TOWER",
    "LANDF",
    "SEAT",
    "IN-PLANE",
    "OUTSIDE-PLANE",
    "IN-AIR",
    "IN-TREE",
    "IN-POT",
    "AIRPORT-ENTRANCE",
    "AIRPORT-CONCOURSE",
    "ZALAGASA-CONCOURSE",
    "ZALAGASA-DESK",
    "TOWER-DUCT",
    "AISLE",
    "GALLEY",
    "LAV-LOBBY",
    "LAVATORY",
    "OUTSIDE-FORT",
    "IN-FORT",
    "JAIL",
    "BASEMENT",
    "FROOM",
    "BROOM",
    "OUTSIDE-HOUSE",
    "ST-A",
    "ST-B",
    "IN-ALLEY",
    "AGENCY",
    "BSTORE",
    "DINER",
    "OUTSIDE-FARM",
    "IN-FARM",
    "OUTSIDE-MANSION",
    "BEHIND-MANSION",
    "IN-PORCH",
    "TROPHY-ROOM",
    "THALL",
    "IN-FLAT",
    "DEATH",
    "IN-CLEARING",
    "CARD-ROOM"
   ],
   "source": "<OBJECT ROOMS\n\t(FLAGS NODESC NOARTICLE LOCATION)\n\t(DESC \"that\")\n\t(IN TO ROOMS)>",
   "referencedBy": []
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "misc.zil",
   "line": 546,
   "endLine": 551,
   "desc": "number",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "INTNUM",
    "PAGE"
   ],
   "adjectives": [
    "PAGE",
    "OMNIA",
    "GALLIA",
    "FLIGHT",
    "INTNUM"
   ],
   "action": "INTNUM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTNUM\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"number\")\n\t(SYNONYM INTNUM PAGE)\n\t(ADJECTIVE PAGE OMNIA GALLIA FLIGHT INTNUM)\n\t(ACTION INTNUM-F)>",
   "referencedBy": [
    "V-$AIRPLANE"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "misc.zil",
   "line": 589,
   "endLine": 593,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VOWEL",
    "NOARTICLE",
    "NODESC",
    "TOUCHED"
   ],
   "synonyms": [
    "IT",
    "THAT",
    "ITSELF",
    "THIS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"it\")\n\t(FLAGS VOWEL NOARTICLE NODESC TOUCHED)\n\t(SYNONYM IT THAT ITSELF THIS)>",
   "referencedBy": []
  },
  "PLAYER": {
   "name": "PLAYER",
   "file": "misc.zil",
   "line": 616,
   "endLine": 622,
   "desc": "yourself",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NODESC",
    "NOARTICLE"
   ],
   "synonyms": [
    "PROTAGONIST"
   ],
   "adjectives": [],
   "action": "PLAYER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "0"
    ],
    "CAPACITY": [
     "1000"
    ]
   },
   "contents": [
    "POCKET",
    "WRISTWATCH"
   ],
   "source": "<OBJECT PLAYER\n\t(SYNONYM PROTAGONIST)\n\t(DESC \"yourself\")\n\t(FLAGS NODESC NOARTICLE)\n\t(ACTION PLAYER-F)\n\t(SIZE 0)\n\t(CAPACITY 1000)>",
   "referencedBy": []
  },
  "GLOBAL-ROOM": {
   "name": "GLOBAL-ROOM",
   "file": "misc.zil",
   "line": 716,
   "endLine": 721,
   "desc": "room",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ROOM",
    "AREA",
    "PLACE"
   ],
   "adjectives": [
    "OPENED",
    "THIS"
   ],
   "action": "GLOBAL-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-ROOM\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"room\")\n\t(SYNONYM ROOM AREA PLACE)\n\t(ADJECTIVE OPENED THIS)\n\t(ACTION GLOBAL-ROOM-F)>",
   "referencedBy": []
  },
  "HER": {
   "name": "HER",
   "file": "misc.zil",
   "line": 792,
   "endLine": 796,
   "desc": "her",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NOARTICLE",
    "PERSON",
    "LIVING",
    "FEMALE"
   ],
   "synonyms": [
    "SHE",
    "HER",
    "HERSELF"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HER\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM SHE HER HERSELF)\n\t(DESC \"her\")\n\t(FLAGS NOARTICLE PERSON LIVING FEMALE)>",
   "referencedBy": []
  },
  "HIM": {
   "name": "HIM",
   "file": "misc.zil",
   "line": 798,
   "endLine": 802,
   "desc": "him",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NOARTICLE",
    "PERSON",
    "LIVING"
   ],
   "synonyms": [
    "HE",
    "HIM",
    "HIMSELF"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HIM\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM HE HIM HIMSELF)\n\t(DESC \"him\")\n\t(FLAGS NOARTICLE PERSON LIVING)>",
   "referencedBy": []
  },
  "AIRPORT": {
   "name": "AIRPORT",
   "file": "nnairport.zil",
   "line": 86,
   "endLine": 92,
   "desc": "airport",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "VOWEL",
    "PLACE"
   ],
   "synonyms": [
    "AIRPORT",
    "TERMINAL",
    "GATE",
    "BUILDING"
   ],
   "adjectives": [
    "AIRPORT"
   ],
   "action": "AIRPORT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIRPORT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"airport\")\n\t(FLAGS NODESC VOWEL PLACE)\n\t(SYNONYM AIRPORT TERMINAL GATE BUILDING)\n\t(ADJECTIVE AIRPORT)\n\t(ACTION AIRPORT-F)>",
   "referencedBy": []
  },
  "SKYCAPS": {
   "name": "SKYCAPS",
   "file": "nnairport.zil",
   "line": 115,
   "endLine": 121,
   "desc": "skycaps",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "PLURAL",
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "SKYCAP",
    "SKYCAPS",
    "HANDLER",
    "HANDLERS"
   ],
   "adjectives": [
    "BAGGAGE"
   ],
   "action": "SKYCAPS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SKYCAPS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"skycaps\")\n\t(FLAGS NODESC PLURAL LIVING PERSON)\n\t(SYNONYM SKYCAP SKYCAPS HANDLER HANDLERS)\n\t(ADJECTIVE BAGGAGE)\n\t(ACTION SKYCAPS-F)>",
   "referencedBy": []
  },
  "SIGNS": {
   "name": "SIGNS",
   "file": "nnairport.zil",
   "line": 1230,
   "endLine": 1235,
   "desc": "signs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL"
   ],
   "synonyms": [
    "SIGNS",
    "SIGN"
   ],
   "adjectives": [],
   "action": "SIGNS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SIGNS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"signs\")\n\t(FLAGS NODESC TRYTAKE NOALL)\n\t(SYNONYM SIGNS SIGN)\n\t(ACTION SIGNS-F)>",
   "referencedBy": []
  },
  "PSIGNS": {
   "name": "PSIGNS",
   "file": "nairport.zil",
   "line": 236,
   "endLine": 241,
   "desc": "signs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL"
   ],
   "synonyms": [
    "SIGNS",
    "SIGN"
   ],
   "adjectives": [],
   "action": "PSIGNS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSIGNS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"signs\")\n\t(FLAGS NODESC TRYTAKE NOALL)\n\t(SYNONYM SIGNS SIGN)\n\t(ACTION PSIGNS-F)>",
   "referencedBy": []
  },
  "PILLAR": {
   "name": "PILLAR",
   "file": "nnairport.zil",
   "line": 1575,
   "endLine": 1581,
   "desc": "pillar",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "PILLAR"
   ],
   "adjectives": [],
   "action": "PILLAR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PILLAR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"pillar\")\n\t(FLAGS NODESC)\n\t(SYNONYM PILLAR)\n\t(ACTION PILLAR-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "SPEAKER": {
   "name": "SPEAKER",
   "file": "nnairport.zil",
   "line": 1766,
   "endLine": 1774,
   "desc": "speaker",
   "ldesc": null,
   "fdesc": null,
   "loc": "PILLAR-B",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "SURFACE",
    "NODESC"
   ],
   "synonyms": [
    "SPEAKER",
    "LOUDSPEAKER"
   ],
   "adjectives": [
    "GUSH-O-SLUSH"
   ],
   "action": "SPEAKER-F",
   "descfcn": "GSPEAKER-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [
    "BWIRE",
    "RWIRE"
   ],
   "source": "<OBJECT SPEAKER\n\t(LOC PILLAR-B)\n\t(DESC \"speaker\")\n\t(FLAGS TRYTAKE NOALL SURFACE NODESC)\n\t(CAPACITY 5)\n\t(SYNONYM SPEAKER LOUDSPEAKER)\n\t(ADJECTIVE GUSH\\-O\\-SLUSH)\n\t(DESCFCN GSPEAKER-F)\n\t(ACTION SPEAKER-F)>",
   "referencedBy": []
  },
  "BWIRE": {
   "name": "BWIRE",
   "file": "nnairport.zil",
   "line": 1892,
   "endLine": 1900,
   "desc": "black wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPEAKER",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "TOUCHED"
   ],
   "synonyms": [
    "WIRE",
    "WIRES",
    "PAIR"
   ],
   "adjectives": [
    "BLACK",
    "TWO"
   ],
   "action": "WIRES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-WIRE-F"
    ],
    "OTHER-WIRE": [
     "RWIRE"
    ]
   },
   "contents": [],
   "source": "<OBJECT BWIRE\n\t(LOC SPEAKER)\n\t(DESC \"black wire\")\n\t(FLAGS NODESC TRYTAKE NOALL TOUCHED)\n\t(SYNONYM WIRE WIRES PAIR)\n\t(ADJECTIVE BLACK TWO)\n\t(GENERIC GENERIC-WIRE-F)\n\t(OTHER-WIRE RWIRE)\n\t(ACTION WIRES-F)>",
   "referencedBy": []
  },
  "RWIRE": {
   "name": "RWIRE",
   "file": "nnairport.zil",
   "line": 1902,
   "endLine": 1910,
   "desc": "red wire",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPEAKER",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "TOUCHED"
   ],
   "synonyms": [
    "WIRE",
    "WIRES",
    "PAIR"
   ],
   "adjectives": [
    "RED",
    "TWO"
   ],
   "action": "WIRES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OTHER-WIRE": [
     "BWIRE"
    ],
    "GENERIC": [
     "GENERIC-WIRE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT RWIRE\n\t(LOC SPEAKER)\n\t(DESC \"red wire\")\n\t(FLAGS NODESC TRYTAKE NOALL TOUCHED)\n\t(SYNONYM WIRE WIRES PAIR)\n\t(ADJECTIVE RED TWO)\n\t(OTHER-WIRE BWIRE)\n\t(GENERIC GENERIC-WIRE-F)\n\t(ACTION WIRES-F)>",
   "referencedBy": []
  },
  "CONSOLE": {
   "name": "CONSOLE",
   "file": "nnairport.zil",
   "line": 2477,
   "endLine": 2485,
   "desc": "console",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-TOWER",
   "flags": [
    "NODESC",
    "READABLE",
    "SURFACE"
   ],
   "synonyms": [
    "CONSOLE",
    "CONSOLES",
    "CONTROLS",
    "READOUT",
    "READOUTS",
    "RADIO"
   ],
   "adjectives": [
    "CONTROL"
   ],
   "action": "CONSOLE-F",
   "descfcn": "CONSOLE-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT CONSOLE\n\t(LOC IN-TOWER)\n\t(DESC \"console\")\n\t(FLAGS NODESC READABLE SURFACE)\n\t(CAPACITY 10)\n\t(SYNONYM CONSOLE CONSOLES CONTROLS READOUT READOUTS RADIO)\n\t(ADJECTIVE CONTROL)\n\t(DESCFCN CONSOLE-F)\n\t(ACTION CONSOLE-F)>",
   "referencedBy": []
  },
  "AIRLINE-DESK": {
   "name": "AIRLINE-DESK",
   "file": "nnairport.zil",
   "line": 788,
   "endLine": 799,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION",
    "INDOORS",
    "SPECIAL-DROP"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIRLINE-DESK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC",
    "THE-FLIGHT",
    "SIGNS",
    "ACTUAL-ZDESK"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SDESC-DESK"
    ],
    "OVERHEAD": [
     "SIGNS"
    ]
   },
   "contents": [
    "ACTUAL-DESK"
   ],
   "source": "<OBJECT AIRLINE-DESK\n\t(LOC ROOMS)\n\t(SDESC SDESC-DESK)\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION INDOORS SPECIAL-DROP)\n\t(SOUTH TO AIRPORT-CONCOURSE)\n\t(WEST PER PREVIOUS-CONCOURSE)\n\t(EAST PER NEXT-CONCOURSE)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC THE-FLIGHT SIGNS\n\t\tACTUAL-ZDESK)\n\t(OVERHEAD SIGNS)\n\t(ACTION AIRLINE-DESK-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "GRATE": {
   "name": "GRATE",
   "file": "nnairport.zil",
   "line": 2056,
   "endLine": 2063,
   "desc": "grate",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE",
    "SURFACE"
   ],
   "synonyms": [
    "GRATE",
    "GRATING"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT"
   ],
   "action": "GRATE-F",
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
   "source": "<OBJECT GRATE\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"grate\")\n\t(FLAGS NODESC DOORLIKE OPENABLE SURFACE)\n\t(CAPACITY 50)\n\t(SYNONYM GRATE GRATING)\n\t(ADJECTIVE CLOSED SHUT)\n\t(ACTION GRATE-F)>",
   "referencedBy": []
  },
  "TOWER-GRATE": {
   "name": "TOWER-GRATE",
   "file": "nnairport.zil",
   "line": 2094,
   "endLine": 2100,
   "desc": "grate",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE"
   ],
   "synonyms": [
    "GRATE",
    "GRATING"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT"
   ],
   "action": "TOWER-GRATE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOWER-GRATE\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"grate\")\n\t(FLAGS NODESC DOORLIKE OPENABLE)\n\t(SYNONYM GRATE GRATING)\n\t(ADJECTIVE CLOSED SHUT)\n\t(ACTION TOWER-GRATE-F)>",
   "referencedBy": []
  },
  "DUCT": {
   "name": "DUCT",
   "file": "nnairport.zil",
   "line": 2118,
   "endLine": 2133,
   "desc": "Duct",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "LOCATION",
    "LIGHTED",
    "SPECIAL-DROP",
    "IN-TERMINAL"
   ],
   "synonyms": [
    "DUCT",
    "TUBE"
   ],
   "adjectives": [
    "AIR",
    "CONDITIONING"
   ],
   "action": "DUCT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DUCT",
    "PILLAR",
    "GRATE"
   ],
   "pseudo": [],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT DUCT\n\t(LOC ROOMS)\n\t(DESC \"Duct\")\n\t(FLAGS LOCATION LIGHTED SPECIAL-DROP IN-TERMINAL)\n\t(SYNONYM DUCT TUBE)\n\t(ADJECTIVE AIR CONDITIONING)\n\t(ACTION DUCT-F)\n\t(HEAR AIRPORT-MUSIC)\n\t(GLOBAL DUCT PILLAR GRATE)\n\t(NORTH PER DUCT-NORTH)\n\t(EAST PER DUCT-EAST)\n\t(WEST PER DUCT-WEST)\n\t(SOUTH PER DUCT-SOUTH)\n\t(UP PER UP-DUCT)\n\t(DOWN PER DOWN-DUCT)\n\t(OUT PER OUT-OF-DUCT)>",
   "referencedBy": []
  },
  "TOWER": {
   "name": "TOWER",
   "file": "nairport.zil",
   "line": 725,
   "endLine": 732,
   "desc": "control tower",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "PLACE"
   ],
   "synonyms": [
    "TOWER"
   ],
   "adjectives": [
    "CONTROL",
    "AIR",
    "TRAFFIC"
   ],
   "action": "TOWER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOWER\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"control tower\")\n\t(FLAGS NODESC PLACE)\n\t(SYNONYM TOWER)\n\t(ADJECTIVE CONTROL AIR TRAFFIC)\n\t(ACTION TOWER-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "VISA-SIGN": {
   "name": "VISA-SIGN",
   "file": "places.zil",
   "line": 344,
   "endLine": 351,
   "desc": "sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "AGENCY",
   "flags": [
    "READABLE"
   ],
   "synonyms": [
    "SIGN",
    "NOTICE"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "VISA-SIGN-F",
   "descfcn": "VISA-SIGN-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VISA-SIGN\n\t(LOC AGENCY)\n\t(DESC \"sign\")\n\t(FLAGS READABLE)\n\t(SYNONYM SIGN NOTICE)\n\t(ADJECTIVE LARGE)\n\t(DESCFCN VISA-SIGN-F)\n\t(ACTION VISA-SIGN-F)>",
   "referencedBy": []
  },
  "REQUIREMENTS": {
   "name": "REQUIREMENTS",
   "file": "places.zil",
   "line": 371,
   "endLine": 377,
   "desc": "visa requirements",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "PLURAL"
   ],
   "synonyms": [
    "REQUIREMENTS",
    "VISA"
   ],
   "adjectives": [
    "VISA",
    "MY"
   ],
   "action": "REQUIREMENTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT REQUIREMENTS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"visa requirements\")\n\t(FLAGS NODESC PLURAL)\n\t(SYNONYM REQUIREMENTS VISA)\n\t(ADJECTIVE VISA MY)\n\t(ACTION REQUIREMENTS-F)>",
   "referencedBy": []
  },
  "VISA": {
   "name": "VISA",
   "file": "places.zil",
   "line": 387,
   "endLine": 394,
   "desc": "your passport",
   "ldesc": null,
   "fdesc": null,
   "loc": "BTABLE",
   "flags": [
    "NOARTICLE",
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "PASSPORT",
    "VISA"
   ],
   "adjectives": [
    "MY",
    "YOUR"
   ],
   "action": "VISA-F",
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
   "source": "<OBJECT VISA\n\t(LOC BTABLE)\n\t(DESC \"your passport\")\n\t(FLAGS NOARTICLE TAKEABLE READABLE)\n\t(SIZE 3)\n\t(SYNONYM PASSPORT VISA)\n\t(ADJECTIVE MY YOUR)\n\t(ACTION VISA-F)>",
   "referencedBy": [
    "V-$VISA"
   ]
  },
  "AIRPORT-MUSIC": {
   "name": "AIRPORT-MUSIC",
   "file": "nnairport.zil",
   "line": 2789,
   "endLine": 2795,
   "desc": "sound",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "MUSICAL"
   ],
   "synonyms": [
    "MUSIC",
    "MUZAK",
    "ANNOUNCEMENTS",
    "SYSTEM",
    "PA",
    "SOUND"
   ],
   "adjectives": [
    "MUSIC",
    "MUZAK",
    "PA"
   ],
   "action": "AIRPORT-MUSIC-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIRPORT-MUSIC\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"sound\")\n\t(FLAGS NODESC NOARTICLE MUSICAL)\n\t(SYNONYM MUSIC MUZAK ANNOUNCEMENTS SYSTEM PA SOUND)\n\t(ADJECTIVE MUSIC MUZAK PA)\n\t(ACTION AIRPORT-MUSIC-F)>",
   "referencedBy": []
  },
  "ENT-A": {
   "name": "ENT-A",
   "file": "nairport.zil",
   "line": 852,
   "endLine": 865,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ENT-A-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SKYCAPS",
    "AIRPORT-CROWD",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENT-A\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN PER ENTER-CONCOURSE)\n\t(EAST TO ENT-B)\n\t(SOUTH PER TRAFFIC-STOPS)\n\t(WEST SORRY \"You don't see any more entrances that way.\")\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL SKYCAPS AIRPORT-CROWD AIRPORT-MUSIC)\n\t(ACTION ENT-A-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "ENT-B": {
   "name": "ENT-B",
   "file": "nairport.zil",
   "line": 907,
   "endLine": 920,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ENT-B-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENT-B\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN PER ENTER-CONCOURSE)\n\t(EAST TO ENT-C)\n\t(SOUTH PER TRAFFIC-STOPS)\n\t(WEST TO ENT-A)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC)\n\t(ACTION ENT-B-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "ENT-C": {
   "name": "ENT-C",
   "file": "nairport.zil",
   "line": 930,
   "endLine": 943,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ENT-C-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENT-C\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN PER ENTER-CONCOURSE)\n\t(EAST TO ENT-D)\n\t(SOUTH PER TRAFFIC-STOPS)\n\t(WEST TO ENT-B)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC)\n\t(ACTION ENT-C-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "ENT-D": {
   "name": "ENT-D",
   "file": "nairport.zil",
   "line": 953,
   "endLine": 966,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ENT-D-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENT-D\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN PER ENTER-CONCOURSE)\n\t(EAST TO ENT-E)\n\t(SOUTH PER TRAFFIC-STOPS)\n\t(WEST TO ENT-C)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC)\n\t(ACTION ENT-D-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "ENT-E": {
   "name": "ENT-E",
   "file": "nairport.zil",
   "line": 977,
   "endLine": 990,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ENT-E-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENT-E\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN PER ENTER-CONCOURSE)\n\t(EAST TO ENT-F)\n\t(SOUTH PER TRAFFIC-STOPS)\n\t(WEST TO ENT-D)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC)\n\t(ACTION ENT-E-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "ENT-F": {
   "name": "ENT-F",
   "file": "nairport.zil",
   "line": 1000,
   "endLine": 1013,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ENT-F-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENT-F\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN PER ENTER-CONCOURSE)\n\t(EAST TO ENT-G)\n\t(SOUTH PER TRAFFIC-STOPS)\n\t(WEST TO ENT-E)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC)\n\t(ACTION ENT-F-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "ENT-G": {
   "name": "ENT-G",
   "file": "nairport.zil",
   "line": 1023,
   "endLine": 1036,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ENT-G-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "LANDF-DOOR",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENT-G\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN SORRY \"[Which way do you want to go in, north or east?]\")\n\t(EAST TO LANDF IF LANDF-DOOR IS OPEN)\n\t(SOUTH PER TRAFFIC-STOPS)\n\t(WEST TO ENT-F)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS LANDF-DOOR AIRPORT-MUSIC)\n\t(ACTION\tENT-G-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "AIRLINE": {
   "name": "AIRLINE",
   "file": "nnairport.zil",
   "line": 1309,
   "endLine": 1315,
   "desc": "Random Airline",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NODESC",
    "NOARTICLE",
    "PLACE"
   ],
   "synonyms": [
    "AIRLINES",
    "AIRLINE"
   ],
   "adjectives": [],
   "action": "AIRLINE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "PSEUDO-TABLE": [
     "0"
    ],
    "SDESC": [
     "DESC-AIRLINE"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIRLINE\n\t(DESC \"Random Airline\")\n\t(FLAGS NODESC NOARTICLE PLACE)\n\t(SYNONYM AIRLINES AIRLINE)\n\t(ACTION AIRLINE-F)\n\t(PSEUDO-TABLE 0)\n\t(SDESC DESC-AIRLINE)>",
   "referencedBy": []
  },
  "AIR-A": {
   "name": "AIR-A",
   "file": "nairport.zil",
   "line": 1195,
   "endLine": 1209,
   "desc": "Concourse",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIR-A-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SIGNS",
    "SKYCAPS",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ],
    "AIRLINE-LIST": [
     "<TABLE 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIR-A\n\t(LOC ROOMS)\n\t(DESC \"Concourse\")\n\t(FLAGS SPECIAL-DROP LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH TO AIR-B)\n\t(EAST TO AIR-B)\n\t(SOUTH PER EXIT-CONCOURSE)\n\t(WEST TO AIR-B)\n\t(IN TO AIR-B)\n\t(OUT PER EXIT-CONCOURSE)\n\t(GLOBAL AIRPORT-CROWD SIGNS SKYCAPS AIRPORT-MUSIC)\n\t(AIRLINE-LIST <TABLE 0 0 0 0 0 0>)\n\t(ACTION AIR-A-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "AIR-B": {
   "name": "AIR-B",
   "file": "nairport.zil",
   "line": 1226,
   "endLine": 1242,
   "desc": "Concourse",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIR-B-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "SIGNS",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "DESCRIBE-AIR-B"
    ],
    "HEAR": [
     "AIRPORT-MUSIC"
    ],
    "DESK-NAME": [
     "0"
    ],
    "AIRLINE-LIST": [
     "<TABLE 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIR-B\n\t(LOC ROOMS)\n\t(DESC \"Concourse\")\n\t(SDESC DESCRIBE-AIR-B)\n\t(FLAGS SPECIAL-DROP LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(DESK-NAME 0)\n\t(NORTH TO AIR-C)\n\t(EAST TO AIR-C)\n\t(SOUTH TO AIR-A)\n\t(WEST TO AIR-C)\n\t(IN TO AIR-C)\n\t(OUT TO AIR-A)\n\t(AIRLINE-LIST <TABLE 0 0 0 0 0 0>)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS SIGNS AIRPORT-MUSIC)\n\t(ACTION AIR-B-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "AIR-C": {
   "name": "AIR-C",
   "file": "nairport.zil",
   "line": 1288,
   "endLine": 1303,
   "desc": "Concourse",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIR-C-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SIGNS",
    "SKYCAPS",
    "PILLAR",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ],
    "AIRLINE-LIST": [
     "<TABLE 0 0 0 0 0 0>"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIR-C\n\t(LOC ROOMS)\n\t(DESC \"Concourse\")\n\t(FLAGS SPECIAL-DROP LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(NORTH TO AIR-A)\n\t(EAST TO AIR-A)\n\t(SOUTH TO AIR-A)\n\t(WEST TO AIR-A)\n\t(IN TO AIR-A)\n\t(OUT TO AIR-A)\n\t(UP PER AIR-C-UP)\n\t(GLOBAL AIRPORT-CROWD SIGNS SKYCAPS PILLAR AIRPORT-MUSIC)\n\t(AIRLINE-LIST <TABLE 0 0 0 0 0 0>)\n\t(ACTION AIR-C-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "PILLAR-A": {
   "name": "PILLAR-A",
   "file": "nnairport.zil",
   "line": 1640,
   "endLine": 1655,
   "desc": "Pillar",
   "ldesc": "You're halfway up the pillar.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "PILLAR-A-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "PILLAR",
    "AIRPORT-MUSIC",
    "SIGNS",
    "GRATE",
    "GSPEAKER"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "BELOW": [
     "AIRPORT-CROWD"
    ],
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT PILLAR-A\n\t(LOC ROOMS)\n\t(DESC \"Pillar\")\n\t(FLAGS SPECIAL-DROP NO-NERD LIGHTED LOCATION IN-TERMINAL)\n\t(BELOW AIRPORT-CROWD)\n\t(HEAR AIRPORT-MUSIC)\n\t(UP PER UP-PILLAR)\n\t(DOWN PER DOWN-PILLAR)\n\t(NORTH SORRY \"You'd fall if you went that way.\")\n\t(EAST SORRY \"You'd fall if you went that way.\")\n\t(SOUTH SORRY \"You'd fall if you went that way.\")\n\t(WEST SORRY \"You'd fall if you went that way.\")\n\t(GLOBAL AIRPORT-CROWD PILLAR AIRPORT-MUSIC SIGNS GRATE GSPEAKER)\n\t(ACTION PILLAR-A-F)\n\t(LDESC \"You're halfway up the pillar.\")\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "PILLAR-B": {
   "name": "PILLAR-B",
   "file": "nnairport.zil",
   "line": 1722,
   "endLine": 1737,
   "desc": "Top of Pillar",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "PILLAR-B-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "PILLAR",
    "GRATE",
    "DUCT",
    "AIRPORT-MUSIC",
    "SIGNS"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ],
    "BELOW": [
     "AIRPORT-CROWD"
    ]
   },
   "contents": [
    "SPEAKER"
   ],
   "source": "<OBJECT PILLAR-B\n\t(LOC ROOMS)\n\t(DESC \"Top of Pillar\")\n\t(FLAGS SPECIAL-DROP NO-NERD LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(BELOW AIRPORT-CROWD)\n\t(NORTH SORRY \"You'd fall if you went that way.\")\n\t(EAST SORRY \"You'd fall if you went that way.\")\n\t(SOUTH SORRY \"You'd fall if you went that way.\")\n\t(WEST SORRY \"You'd fall if you went that way.\")\n\t(UP TO DUCT IF GRATE IS OPEN)\n\t(IN TO DUCT IF GRATE IS OPEN)\n\t(DOWN PER DOWN-PILLAR)\n\t(GLOBAL AIRPORT-CROWD PILLAR GRATE DUCT AIRPORT-MUSIC SIGNS)\n\t(ACTION PILLAR-B-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "DUCT-A": {
   "name": "DUCT-A",
   "file": "nairport.zil",
   "line": 1410,
   "endLine": 1423,
   "desc": "Duct",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DUCT-A-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PILLAR",
    "PSIGNS",
    "GRATE",
    "DUCT",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT DUCT-A\n\t(LOC ROOMS)\n\t(DESC \"Duct\")\n\t(FLAGS SPECIAL-DROP NO-NERD LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(DOWN TO PILLAR-B IF GRATE IS OPEN)\n\t(OUT TO PILLAR-B IF GRATE IS OPEN)\n\t(UP PER DUCT-A-UP)\n\t(SOUTH PER DUCT-A-UP)\n\t(NORTH SORRY \"You hit your head against the duct. Ouch!\")\n\t(EAST SORRY \"You hit your head against the duct. Ouch!\")\n\t(WEST SORRY \"You hit your head against the duct. Ouch!\")\n\t(GLOBAL PILLAR PSIGNS GRATE DUCT AIRPORT-MUSIC)\n\t(ACTION DUCT-A-F)>",
   "referencedBy": []
  },
  "DUCT-B": {
   "name": "DUCT-B",
   "file": "nairport.zil",
   "line": 1442,
   "endLine": 1456,
   "desc": "Duct",
   "ldesc": "You're in a narrow air conditioning duct that curves upward to the east, and downward to the north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "NO-NERD",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DUCT",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT DUCT-B\n\t(LOC ROOMS)\n\t(DESC \"Duct\")\n\t(FLAGS ; LIGHTED SPECIAL-DROP NO-NERD LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(DOWN PER DUCT-B-DOWN)\n\t(NORTH PER DUCT-B-DOWN)\n\t(UP PER DUCT-B-UP)\n\t(EAST PER DUCT-B-UP)\n\t(OUT PER WHICH-WAY-OUT)\n\t(IN PER WHICH-WAY-IN)\n\t(SOUTH SORRY \"You hit your head against the duct. Ouch!\")\n        (WEST SORRY \"You hit your head against the duct. Ouch!\")\n\t(GLOBAL DUCT AIRPORT-MUSIC)\n\t(LDESC \"You're in a narrow air conditioning duct that curves upward to the east, and downward to the north.\")>",
   "referencedBy": []
  },
  "DUCT-C": {
   "name": "DUCT-C",
   "file": "nairport.zil",
   "line": 1466,
   "endLine": 1480,
   "desc": "Duct",
   "ldesc": "You're in a narrow air conditioning duct that curves upward to the north, and downward to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "NO-NERD",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DUCT",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT DUCT-C\n\t(LOC ROOMS)\n\t(DESC \"Duct\")\n\t(FLAGS ; LIGHTED SPECIAL-DROP NO-NERD LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(DOWN PER DUCT-C-DOWN)\n\t(WEST PER DUCT-C-DOWN)\n\t(UP PER DUCT-C-UP)\n\t(NORTH PER DUCT-C-UP)\n\t(OUT PER WHICH-WAY-OUT)\n\t(IN PER WHICH-WAY-IN)\n\t(SOUTH SORRY \"You hit your head against the duct. Ouch!\")\n        (EAST SORRY \"You hit your head against the duct. Ouch!\")\n\t(GLOBAL DUCT AIRPORT-MUSIC)\n\t(LDESC \"You're in a narrow air conditioning duct that curves upward to the north, and downward to the west.\")>",
   "referencedBy": []
  },
  "DUCT-D": {
   "name": "DUCT-D",
   "file": "nairport.zil",
   "line": 1490,
   "endLine": 1504,
   "desc": "Duct",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NO-NERD",
    "SPECIAL-DROP",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DUCT-D-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TOWER-GRATE",
    "DUCT",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT DUCT-D\n\t(LOC ROOMS)\n\t(DESC \"Duct\")\n\t(FLAGS NO-NERD SPECIAL-DROP LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(DOWN PER DUCT-D-DOWN)\n\t(SOUTH PER DUCT-D-DOWN)\n\t(UP SORRY \"The duct doesn't go any higher.\")\n\t(WEST SORRY \"You hit your head against the duct. Ouch!\")\n        (NORTH SORRY \"You hit your head against the duct. Ouch!\")\n\t(IN TO IN-TOWER IF TOWER-GRATE IS OPEN)\n\t(EAST TO IN-TOWER IF TOWER-GRATE IS OPEN)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL TOWER-GRATE DUCT AIRPORT-MUSIC)\n\t(ACTION DUCT-D-F)>",
   "referencedBy": []
  },
  "IN-TOWER": {
   "name": "IN-TOWER",
   "file": "nnairport.zil",
   "line": 2336,
   "endLine": 2352,
   "desc": "Control Tower",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NODESC",
    "LOCATION",
    "IN-TERMINAL",
    "LIGHTED",
    "NO-NERD",
    "INDOORS"
   ],
   "synonyms": [
    "TOWER"
   ],
   "adjectives": [
    "CONTROL",
    "AIR",
    "TRAFFIC"
   ],
   "action": "IN-TOWER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "IN-TOWER",
    "DUCT",
    "TOWER-GRATE",
    "AIRPORT-MUSIC"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "CONSOLE"
    ]
   },
   "contents": [
    "CONSOLE",
    "CONTROLLERS"
   ],
   "source": "<OBJECT IN-TOWER\n\t(LOC ROOMS)\n\t(DESC \"Control Tower\")\n\t(FLAGS NODESC LOCATION IN-TERMINAL LIGHTED NO-NERD INDOORS)\n\t(SYNONYM TOWER)\n\t(ADJECTIVE CONTROL AIR TRAFFIC)\n\t(DOWN TO TOWER-DUCT IF TOWER-GRATE IS OPEN)\n\t(IN TO TOWER-DUCT IF TOWER-GRATE IS OPEN)\n\t(OUT TO TOWER-DUCT IF TOWER-GRATE IS OPEN)\n\t(NORTH SORRY \"Air traffic controllers block your path.\")\n\t(SOUTH SORRY \"Air traffic controllers block your path.\")\n\t(EAST SORRY \"Air traffic controllers block your path.\")\n\t(WEST TO TOWER-DUCT IF TOWER-GRATE IS OPEN)\n\t(ACTION IN-TOWER-F)\n\t(HEAR CONSOLE)\n\t(GLOBAL IN-TOWER DUCT TOWER-GRATE AIRPORT-MUSIC)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "LANDF": {
   "name": "LANDF",
   "file": "nnairport.zil",
   "line": 778,
   "endLine": 786,
   "desc": "Lost and Found",
   "ldesc": "You're in the Airport's Lost and Found office. A doorway leads north.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL",
    "INDOORS"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LANDF-DOOR"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LANDF\n\t(LOC ROOMS)\n\t(DESC \"Lost and Found\")\n\t(FLAGS NO-NERD LIGHTED LOCATION IN-TERMINAL INDOORS)\n\t(NORTH TO AIRPORT-ENTRANCE)\n\t(OUT TO AIRPORT-ENTRANCE)\n\t(GLOBAL LANDF-DOOR)\n\t(LDESC \"You're in the Airport's Lost and Found office. A doorway leads north.\")\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "FATSO": {
   "name": "FATSO",
   "file": "nnairport.zil",
   "line": 2274,
   "endLine": 2280,
   "desc": "fat man",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "PERSON",
    "LIVING"
   ],
   "synonyms": [
    "MAN",
    "GUY",
    "FELLOW"
   ],
   "adjectives": [
    "FAT",
    "OBESE"
   ],
   "action": "FATSO-F",
   "descfcn": "FATSO-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FATSO\n\t(DESC \"fat man\")\n\t(FLAGS PERSON LIVING)\n\t(SYNONYM MAN GUY FELLOW)\n\t(ADJECTIVE FAT OBESE)\n\t(DESCFCN FATSO-F)\n\t(ACTION FATSO-F)>",
   "referencedBy": []
  },
  "AIRCLERK": {
   "name": "AIRCLERK",
   "file": "nnairport.zil",
   "line": 1038,
   "endLine": 1045,
   "desc": "clerk",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "CLERK"
   ],
   "adjectives": [
    "ZZZP",
    "ZZZP",
    "AIRLINE"
   ],
   "action": "AIRCLERK-F",
   "descfcn": "AIRCLERK-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "DESCRIBE-AIRCLERK"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIRCLERK\n\t(DESC \"clerk\")\n\t(SDESC DESCRIBE-AIRCLERK)\n\t(FLAGS LIVING PERSON)\n\t(SYNONYM ZZZP ZZZP ZZZP CLERK)\n\t(ADJECTIVE ZZZP ZZZP AIRLINE)\n\t(DESCFCN AIRCLERK-F)\n\t(ACTION AIRCLERK-F)>",
   "referencedBy": []
  },
  "CONTROLLERS": {
   "name": "CONTROLLERS",
   "file": "nnairport.zil",
   "line": 2506,
   "endLine": 2513,
   "desc": "group of air traffic controllers",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-TOWER",
   "flags": [
    "NODESC",
    "LIVING",
    "PERSON",
    "PLURAL"
   ],
   "synonyms": [
    "GROUP",
    "BUNCH",
    "CROWD",
    "CONTROLLERS",
    "PEOPLE",
    "FOLKS"
   ],
   "adjectives": [
    "AIR",
    "TRAFFIC"
   ],
   "action": "CONTROLLERS-F",
   "descfcn": "CONTROLLERS-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CONTROLLERS\n\t(LOC IN-TOWER)\n\t(DESC \"group of air traffic controllers\")\n\t(FLAGS NODESC LIVING PERSON PLURAL)\n\t(SYNONYM GROUP BUNCH CROWD CONTROLLERS PEOPLE FOLKS)\n\t(ADJECTIVE AIR TRAFFIC)\n\t(DESCFCN CONTROLLERS-F)\n\t(ACTION CONTROLLERS-F)>",
   "referencedBy": []
  },
  "FLIGHT-42": {
   "name": "FLIGHT-42",
   "file": "nairport.zil",
   "line": 1876,
   "endLine": 1883,
   "desc": "flight 42",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NOARTICLE",
    "NODESC",
    "PERSON",
    "LIVING"
   ],
   "synonyms": [
    "FORTY-TWO",
    "FLIGHT",
    "PLANE",
    "JET",
    "AIRPLANE"
   ],
   "adjectives": [
    "FLIGHT",
    "OMNIA",
    "GALLIA"
   ],
   "action": "FLIGHT-42-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-OMNIA-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT FLIGHT-42\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"flight 42\")\n\t(FLAGS NOARTICLE NODESC PERSON LIVING)\n\t(SYNONYM FORTY-TWO FLIGHT PLANE JET AIRPLANE)\n\t(ADJECTIVE FLIGHT OMNIA GALLIA)\n\t(GENERIC GENERIC-OMNIA-F)\n\t(ACTION FLIGHT-42-F)>",
   "referencedBy": []
  },
  "AIRPORT-CROWD": {
   "name": "AIRPORT-CROWD",
   "file": "nnairport.zil",
   "line": 160,
   "endLine": 165,
   "desc": "crowd",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "PERSON",
    "LIVING",
    "PLURAL"
   ],
   "synonyms": [
    "CROWD",
    "PEOPLE",
    "ONLOOKERS",
    "EVERYONE",
    "EVERYBODY",
    "FOLKS"
   ],
   "adjectives": [],
   "action": "AIRPORT-CROWD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AIRPORT-CROWD\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"crowd\")\n\t(FLAGS NODESC PERSON LIVING PLURAL)\n\t(SYNONYM CROWD PEOPLE ONLOOKERS EVERYONE EVERYBODY FOLKS)\n\t(ACTION AIRPORT-CROWD-F)>",
   "referencedBy": []
  },
  "PLANE": {
   "name": "PLANE",
   "file": "xxjet.zil",
   "line": 45,
   "endLine": 50,
   "desc": "aeroplane",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "VOWEL",
    "PLACE"
   ],
   "synonyms": [
    "PLANE",
    "AIRPLANE",
    "AEROPLANE",
    "JET",
    "AIRCRAFT"
   ],
   "adjectives": [],
   "action": "PLANE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLANE\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"aeroplane\" ;\"airplane\")\n\t(FLAGS NODESC VOWEL PLACE)\n\t(SYNONYM PLANE AIRPLANE AEROPLANE JET AIRCRAFT)\n\t(ACTION PLANE-F)>",
   "referencedBy": []
  },
  "SEATBELT": {
   "name": "SEATBELT",
   "file": "xxjet.zil",
   "line": 507,
   "endLine": 513,
   "desc": "seat belt",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "CLOTHING",
    "NODESC"
   ],
   "synonyms": [
    "BELT",
    "SEATBELT",
    "BUCKLE"
   ],
   "adjectives": [
    "SEAT",
    "MY"
   ],
   "action": "SEATBELT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SEATBELT\n\t(LOC SEAT)\n\t(DESC \"seat belt\")\n\t(FLAGS CLOTHING NODESC)\n\t(SYNONYM BELT SEATBELT BUCKLE)\n\t(ADJECTIVE SEAT MY)\n\t(ACTION SEATBELT-F)>",
   "referencedBy": []
  },
  "BELTLIGHT": {
   "name": "BELTLIGHT",
   "file": "njet.zil",
   "line": 69,
   "endLine": 76,
   "desc": "sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-PLANE",
   "flags": [
    "NODESC",
    "READABLE"
   ],
   "synonyms": [
    "SIGN",
    "NOTICE"
   ],
   "adjectives": [
    "FASTEN",
    "SEAT",
    "BELT"
   ],
   "action": "BELTLIGHT-F",
   "descfcn": "BELTLIGHT-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BELTLIGHT\n\t(LOC IN-PLANE)\n\t(DESC \"sign\")\n\t(FLAGS NODESC READABLE)\n\t(SYNONYM SIGN NOTICE)\n\t(ADJECTIVE FASTEN SEAT BELT)\n\t(DESCFCN BELTLIGHT-F)\n\t(ACTION BELTLIGHT-F)>",
   "referencedBy": []
  },
  "UNDER-SEAT": {
   "name": "UNDER-SEAT",
   "file": "xxjet.zil",
   "line": 823,
   "endLine": 829,
   "desc": "under the seat",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "SURFACE",
    "NOARTICLE",
    "NODESC",
    "VOWEL"
   ],
   "synonyms": [
    "FLOOR"
   ],
   "adjectives": [],
   "action": "UNDER-SEAT-F",
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
   "source": "<OBJECT UNDER-SEAT\n\t(LOC SEAT)\n\t(DESC \"under the seat\")\n\t(SYNONYM FLOOR)\n\t(FLAGS SURFACE NOARTICLE NODESC VOWEL)\n\t(ACTION UNDER-SEAT-F)\n\t(CAPACITY 30)>",
   "referencedBy": []
  },
  "SEAT": {
   "name": "SEAT",
   "file": "xxjet.zil",
   "line": 897,
   "endLine": 910,
   "desc": "aeroplane seat",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-AIRPLANE",
    "LOCATION",
    "NODESC",
    "LIGHTED",
    "NOARTICLE",
    "INDOORS",
    "NO-NERD"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SEAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FLIGHT-ATTENDANT",
    "SEATBELT-LIGHT"
   ],
   "pseudo": [
    "SEAT-PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "PHONES"
    ],
    "SDESC": [
     "SDESC-SEAT"
    ]
   },
   "contents": [
    "SEAT-POCKET",
    "SEATBELT",
    "UNDER-SEAT",
    "RECEPTACLE",
    "CALL-BUTTON",
    "LIGHT-BUTTON",
    "RECLINE-BUTTON",
    "SEAT-TABLE"
   ],
   "source": "<OBJECT SEAT\n\t(LOC ROOMS)\n\t(DESC \"aeroplane seat\")\n\t(FLAGS IN-AIRPLANE LOCATION NODESC LIGHTED NOARTICLE INDOORS NO-NERD)\n\t(HEAR PHONES)\n\t(EAST PER SEAT-TO-AISLE)\n\t(WEST PER SEAT-TO-AISLE)\n\t(NORTH SORRY \"Please don't climb over the seats.\")\n\t(SOUTH SORRY \"Please don't climb over the seats.\")\n\t(OUT PER SEAT-TO-AISLE)\n\t(ACTION SEAT-F)\n\t(SDESC SDESC-SEAT)\n\t(GLOBAL FLIGHT-ATTENDANT SEATBELT-LIGHT)\n\t(THINGS SEAT-PSEUDO-VEC)>",
   "referencedBy": []
  },
  "PHONES": {
   "name": "PHONES",
   "file": "xxjet.zil",
   "line": 1667,
   "endLine": 1674,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT-POCKET",
   "flags": [
    "TAKEABLE",
    "CLOTHING"
   ],
   "synonyms": [
    "BULGE",
    "HEADPHONE",
    "PAIR",
    "SET",
    "EARPHONE",
    "EARPHONES",
    "PHONES",
    "PLUG"
   ],
   "adjectives": [
    "HEAD",
    "EAR"
   ],
   "action": "PHONES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-PHONES"
    ],
    "SIZE": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT PHONES\n\t(LOC SEAT-POCKET)\n\t(SDESC SDESC-PHONES)\n\t(FLAGS TAKEABLE CLOTHING)\n\t(SYNONYM BULGE HEADPHONE PAIR SET EARPHONE EARPHONES PHONES PLUG)\n\t(ADJECTIVE HEAD EAR)\n\t(SIZE 3)\n\t(ACTION PHONES-F)>",
   "referencedBy": []
  },
  "PLANE-MAGAZINE": {
   "name": "PLANE-MAGAZINE",
   "file": "njet.zil",
   "line": 306,
   "endLine": 313,
   "desc": "airline magazine",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT-POCKET",
   "flags": [
    "VOWEL",
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "MAGAZINE",
    "ODYSSEY"
   ],
   "adjectives": [
    "AIRLINE",
    "AIRPLANE",
    "ZALAGASAN",
    "ODYSSEY"
   ],
   "action": "PLANE-MAGAZINE-F",
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
   "source": "<OBJECT PLANE-MAGAZINE\n\t(LOC SEAT-POCKET)\n\t(DESC \"airline magazine\")\n\t(FLAGS VOWEL TAKEABLE READABLE)\n\t(SYNONYM MAGAZINE ODYSSEY)\n\t(ADJECTIVE AIRLINE AIRPLANE ZALAGASAN ODYSSEY)\n\t(SIZE 3)\n\t(ACTION PLANE-MAGAZINE-F)>",
   "referencedBy": []
  },
  "CARD": {
   "name": "CARD",
   "file": "njet.zil",
   "line": 337,
   "endLine": 344,
   "desc": "safety card",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT-POCKET",
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "CARD"
   ],
   "adjectives": [
    "SAFETY"
   ],
   "action": "CARD-F",
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
   "source": "<OBJECT CARD\n\t(LOC SEAT-POCKET)\n\t(DESC \"safety card\")\n\t(FLAGS TAKEABLE READABLE)\n\t(SIZE 2)\n\t(SYNONYM CARD)\n\t(ADJECTIVE SAFETY)\n\t(ACTION CARD-F)>",
   "referencedBy": []
  },
  "RECEPTACLE": {
   "name": "RECEPTACLE",
   "file": "xxjet.zil",
   "line": 1597,
   "endLine": 1605,
   "desc": "headphone socket",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "NODESC",
    "CONTAINER",
    "OPENED",
    "OPENABLE"
   ],
   "synonyms": [
    "RECEPTACLE",
    "OUTLET",
    "JACK",
    "SOCKET"
   ],
   "adjectives": [
    "HEADPHONE",
    "EARPHONE",
    "PHONE"
   ],
   "action": "RECEPTACLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "JACK-GENERIC"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT RECEPTACLE\n\t(LOC SEAT)\n\t(DESC \"headphone socket\")\n\t(FLAGS NODESC CONTAINER OPENED OPENABLE)\n\t(SYNONYM RECEPTACLE OUTLET JACK SOCKET)\n\t(ADJECTIVE HEADPHONE EARPHONE PHONE)\n\t(GENERIC JACK-GENERIC)\n\t(CAPACITY 0)\n\t(ACTION RECEPTACLE-F)>",
   "referencedBy": []
  },
  "IFORM": {
   "name": "IFORM",
   "file": "nnjet.zil",
   "line": 2548,
   "endLine": 2555,
   "desc": "immigration form",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE",
    "VOWEL"
   ],
   "synonyms": [
    "FORM"
   ],
   "adjectives": [
    "IMMIGRATION",
    "VISA",
    "MY"
   ],
   "action": "IFORM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "SLIP-F"
    ]
   },
   "contents": [
    "VNUMBER"
   ],
   "source": "<OBJECT IFORM\n\t(DESC \"immigration form\")\n\t(FLAGS TAKEABLE READABLE VOWEL)\n\t(SIZE 2)\n\t(SYNONYM FORM)\n\t(GENERIC SLIP-F)\t; \"To keep moby-find happy in bank\"\n\t(ADJECTIVE IMMIGRATION VISA MY)\n\t(ACTION IFORM-F)>",
   "referencedBy": []
  },
  "VNUMBER": {
   "name": "VNUMBER",
   "file": "njet.zil",
   "line": 463,
   "endLine": 469,
   "desc": "visa number",
   "ldesc": null,
   "fdesc": null,
   "loc": "IFORM",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "NUMBER"
   ],
   "adjectives": [
    "VISA"
   ],
   "action": "VNUMBER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT VNUMBER\n\t(LOC IFORM)\n\t(DESC \"visa number\")\n\t(FLAGS NODESC)\n\t(SYNONYM NUMBER)\n\t(ADJECTIVE VISA)\n\t(ACTION VNUMBER-F)>",
   "referencedBy": []
  },
  "CHUTE": {
   "name": "CHUTE",
   "file": "xxjet.zil",
   "line": 3375,
   "endLine": 3382,
   "desc": "parachute",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "WORN",
    "CLOTHING",
    "CONTAINER",
    "TRANSPARENT"
   ],
   "synonyms": [
    "CHUTE",
    "PARACHUTE",
    "STRAP",
    "STRAPS",
    "LINE",
    "LINES",
    "SHROUD",
    "KA'ABI"
   ],
   "adjectives": [
    "CHUTE",
    "PARACHUTE",
    "STINGLAI"
   ],
   "action": "CHUTE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ]
   },
   "contents": [
    "RIPCORD"
   ],
   "source": "<OBJECT CHUTE\n\t(DESC \"parachute\")\n\t(FLAGS TAKEABLE WORN CLOTHING CONTAINER TRANSPARENT)\n\t(SYNONYM CHUTE PARACHUTE STRAP STRAPS LINE LINES SHROUD\n\t\t KA\\'ABI)\n\t(ADJECTIVE CHUTE PARACHUTE STINGLAI)\n\t(SIZE 10)\n\t(ACTION CHUTE-F)>",
   "referencedBy": []
  },
  "RIPCORD": {
   "name": "RIPCORD",
   "file": "xxjet.zil",
   "line": 3563,
   "endLine": 3569,
   "desc": "ripcord",
   "ldesc": null,
   "fdesc": null,
   "loc": "CHUTE",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "NODESC"
   ],
   "synonyms": [
    "CORD",
    "RIPCORD"
   ],
   "adjectives": [
    "RED",
    "RIP"
   ],
   "action": "RIPCORD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIPCORD\n\t(LOC CHUTE)\n\t(DESC \"ripcord\")\n\t(FLAGS TRYTAKE NOALL NODESC)\n\t(SYNONYM CORD RIPCORD)\n\t(ADJECTIVE RED RIP)\n\t(ACTION RIPCORD-F)>",
   "referencedBy": []
  },
  "PENCIL": {
   "name": "PENCIL",
   "file": "njet.zil",
   "line": 650,
   "endLine": 656,
   "desc": "pencil",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE"
   ],
   "synonyms": [
    "PENCIL",
    "ERASER"
   ],
   "adjectives": [
    "PENCIL"
   ],
   "action": "PENCIL-F",
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
   "source": "<OBJECT PENCIL\n\t(DESC \"pencil\")\n\t(FLAGS TAKEABLE)\n\t(SIZE 2)\n\t(SYNONYM PENCIL ERASER)\n\t(ADJECTIVE PENCIL)\n\t(ACTION PENCIL-F)>",
   "referencedBy": []
  },
  "HATCH": {
   "name": "HATCH",
   "file": "njet.zil",
   "line": 674,
   "endLine": 680,
   "desc": "emergency exit",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-PLANE",
   "flags": [
    "NODESC",
    "VOWEL"
   ],
   "synonyms": [
    "EXIT",
    "HATCH",
    "HATCHWAY",
    "DOOR"
   ],
   "adjectives": [
    "EMERGENCY",
    "PLANE'S"
   ],
   "action": "HATCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HATCH\n\t(LOC OUTSIDE-PLANE)\n\t(DESC \"emergency exit\")\n\t(FLAGS NODESC VOWEL)\n\t(SYNONYM EXIT HATCH HATCHWAY DOOR)\n\t(ADJECTIVE EMERGENCY PLANE\\'S)\n\t(ACTION HATCH-F)>",
   "referencedBy": []
  },
  "IN-PLANE": {
   "name": "IN-PLANE",
   "file": "njet.zil",
   "line": 732,
   "endLine": 746,
   "desc": "Airplane Seat",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NO-NERD",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-PLANE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PLANE"
   ],
   "pseudo": [],
   "otherProps": {
    "HEAR": [
     "PLANE"
    ]
   },
   "contents": [
    "BELTLIGHT"
   ],
   "source": "<OBJECT IN-PLANE\n\t(LOC ROOMS)\n\t(DESC \"Airplane Seat\")\n\t(FLAGS NO-NERD LIGHTED LOCATION)\n\t(HEAR PLANE)\n\t(NORTH SORRY \"A seat blocks your path.\")\n\t(WEST SORRY \"A seat blocks your path.\")\n\t(SOUTH SORRY \"A seat blocks your path.\")\n\t(EAST SORRY \"You'd have to unbuckle your seat belt first.\")\n\t(OUT SORRY \"You'd have to unbuckle your seat belt first.\")\n\t(UP SORRY \"You'd have to unbuckle your seat belt first.\")\n\t(IN SORRY \"You're already in your seat.\")\n\t(DOWN SORRY \"You're already in your seat.\")\n\t(GLOBAL PLANE)\n\t(ACTION IN-PLANE-F)>",
   "referencedBy": []
  },
  "OUTSIDE-PLANE": {
   "name": "OUTSIDE-PLANE",
   "file": "xxjet.zil",
   "line": 3603,
   "endLine": 3617,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "NO-NERD",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OUTSIDE-PLANE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FLIGHT-ATTENDANT"
   ],
   "pseudo": [
    "SEAT-PSEUDO-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "DESCRIBE-OUTSIDE-PLANE"
    ]
   },
   "contents": [
    "HATCH"
   ],
   "source": "<OBJECT OUTSIDE-PLANE\n\t(LOC ROOMS)\n\t(SDESC DESCRIBE-OUTSIDE-PLANE)\n\t(FLAGS SPECIAL-DROP NO-NERD LIGHTED LOCATION)\n\t(NORTH SORRY \"Such directions are useless here.\")\n\t(EAST SORRY \"Such directions are useless here.\")\n\t(SOUTH SORRY \"Such directions are useless here.\")\n\t(WEST SORRY \"Such directions are useless here.\")\n\t(DOWN SORRY \"Inevitable.\")\n\t(UP SORRY \"Wishful thinking.\")\n\t(OUT SORRY \"You're already outside.\")\n\t(IN SORRY \"Wishful thinking.\")\n\t(THINGS SEAT-PSEUDO-VEC)\n\t(ACTION OUTSIDE-PLANE-F)\n\t(GLOBAL FLIGHT-ATTENDANT)>",
   "referencedBy": []
  },
  "IN-AIR": {
   "name": "IN-AIR",
   "file": "xxjet.zil",
   "line": 3645,
   "endLine": 3660,
   "desc": "Falling",
   "ldesc": "In midair, heading down.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "LIGHTED",
    "LOCATION",
    "NO-NERD"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-AIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHUTE"
   ],
   "pseudo": [
    "SEAT-PSEUDO-VEC"
   ],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IN-AIR\n\t(LOC ROOMS)\n\t(DESC \"Falling\")\n\t(LDESC \"In midair, heading down.\")\n\t(THINGS SEAT-PSEUDO-VEC)\n\t(GLOBAL CHUTE)\n\t(FLAGS SPECIAL-DROP LIGHTED LOCATION NO-NERD)\n\t(NORTH SORRY \"Such directions are useless here.\")\n\t(EAST SORRY \"Such directions are useless here.\")\n\t(SOUTH SORRY \"Such directions are useless here.\")\n\t(WEST SORRY \"Such directions are useless here.\")\n\t(DOWN SORRY \"Inevitable.\")\n\t(UP SORRY \"Wishful thinking.\")\n\t(OUT SORRY \"You're already outside.\")\n\t(IN SORRY \"Wishful thinking.\")\n\t(ACTION IN-AIR-F)>",
   "referencedBy": []
  },
  "IN-TREE": {
   "name": "IN-TREE",
   "file": "zalagasa.zil",
   "line": 7,
   "endLine": 23,
   "desc": "hanging from a tree",
   "ldesc": "You are hanging upside down by your parachute from the branches of a tree.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "LIGHTED",
    "LOCATION",
    "NO-NERD",
    "SPECIAL-DROP"
   ],
   "synonyms": [
    "BRANCHES",
    "TREE"
   ],
   "adjectives": [],
   "action": "IN-TREE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "IN-POT"
   ],
   "pseudo": [],
   "otherProps": {
    "BELOW": [
     "IN-POT"
    ]
   },
   "contents": [],
   "source": "<OBJECT IN-TREE\n\t(LOC ROOMS)\n\t(DESC \"hanging from a tree\")\n\t(LDESC \"You are hanging upside down by your parachute from the branches of a tree.\")\n\t(FLAGS LIGHTED LOCATION NO-NERD SPECIAL-DROP)\n\t(SYNONYM BRANCHES TREE)\n\t(NORTH SORRY \"Such directions are useless here.\")\n\t(EAST SORRY \"Such directions are useless here.\")\n\t(SOUTH SORRY \"Such directions are useless here.\")\n\t(WEST SORRY \"Such directions are useless here.\")\n\t(DOWN SORRY \"You are attached.\")\n\t(UP SORRY \"Wishful thinking.\")\n\t(OUT SORRY \"You're already outside.\")\n\t(IN SORRY \"Wishful thinking.\")\n\t(BELOW IN-POT)\n\t(GLOBAL IN-POT)\n\t(ACTION IN-TREE-F)>",
   "referencedBy": []
  },
  "IN-POT": {
   "name": "IN-POT",
   "file": "zalagasa.zil",
   "line": 47,
   "endLine": 63,
   "desc": "cooking pot",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "LIGHTED",
    "LOCATION",
    "NO-NERD"
   ],
   "synonyms": [
    "POT"
   ],
   "adjectives": [
    "COOKING"
   ],
   "action": "POT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "NATIVES",
    "IN-POT"
   ],
   "pseudo": [],
   "otherProps": {
    "SEE-ALL": [
     "NATIVES"
    ]
   },
   "contents": [],
   "source": "<OBJECT IN-POT\n\t(LOC ROOMS)\n\t(DESC \"cooking pot\")\n\t(FLAGS LIGHTED LOCATION NO-NERD)\n\t(SYNONYM POT)\n\t(ADJECTIVE COOKING)\n\t(NORTH PER EXIT-POT)\n\t(EAST PER EXIT-POT)\n\t(SOUTH PER EXIT-POT)\n\t(WEST PER EXIT-POT)\n\t(DOWN SORRY \"Not unless you want to go from the pan to the fire!\")\n\t(SEE-ALL NATIVES)\n\t(UP SORRY \"Wishful thinking.\")\n\t(OUT PER EXIT-POT)\n\t(GLOBAL NATIVES IN-POT)\n\t(IN SORRY \"You are in deep enough.\")\n\t(ACTION POT-F)>",
   "referencedBy": []
  },
  "STEWARDESS": {
   "name": "STEWARDESS",
   "file": "njet.zil",
   "line": 861,
   "endLine": 867,
   "desc": "stewardess",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LIVING",
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "STEWARDESS",
    "LADY",
    "WOMAN",
    "ATTENDANT"
   ],
   "adjectives": [
    "FLIGHT"
   ],
   "action": "STEWARDESS-F",
   "descfcn": "STEWARDESS-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STEWARDESS\n\t(DESC \"stewardess\")\n\t(FLAGS LIVING PERSON FEMALE)\n\t(SYNONYM STEWARDESS LADY WOMAN ATTENDANT)\n\t(ADJECTIVE FLIGHT)\n\t(DESCFCN STEWARDESS-F)\n\t(ACTION STEWARDESS-F)>",
   "referencedBy": []
  },
  "PURSER": {
   "name": "PURSER",
   "file": "nnjet.zil",
   "line": 1649,
   "endLine": 1654,
   "desc": "purser",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "PERSON",
    "LIVING"
   ],
   "synonyms": [
    "PURSER",
    "FELLOW",
    "MAN"
   ],
   "adjectives": [
    "LARGE",
    "BURLY"
   ],
   "action": "PURSER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PURSER\n\t(DESC \"purser\")\n\t(FLAGS PERSON LIVING)\n\t(SYNONYM PURSER FELLOW MAN)\n\t(ADJECTIVE LARGE BURLY)\n\t(ACTION PURSER-F)>",
   "referencedBy": []
  },
  "AIRPORT-ENTRANCE": {
   "name": "AIRPORT-ENTRANCE",
   "file": "nnairport.zil",
   "line": 280,
   "endLine": 294,
   "desc": "Airport Entrance",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION",
    "SPECIAL-DROP"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIRPORT-ENTRANCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC",
    "THE-FLIGHT",
    "SIGNS"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "OVERHEAD": [
     "SIGNS"
    ],
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIRPORT-ENTRANCE\n\t(LOC ROOMS)\n\t(DESC \"Airport Entrance\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION SPECIAL-DROP)\n\t(NORTH PER ENTER-CONCOURSE)\n\t(IN PER INTO-CONCOURSE)\n\t(EAST PER NEXT-ENTRANCE)\n\t(SOUTH PER SOUTH-FROM-ENTRANCE)\n\t(WEST PER PREVIOUS-ENTRANCE)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC THE-FLIGHT SIGNS)\n\t(OVERHEAD SIGNS)\n\t(HEAR AIRPORT-MUSIC)\n\t(THINGS PSEUDO-VEC)\n\t(ACTION AIRPORT-ENTRANCE-F)>",
   "referencedBy": []
  },
  "AIRPORT-CONCOURSE": {
   "name": "AIRPORT-CONCOURSE",
   "file": "nnairport.zil",
   "line": 586,
   "endLine": 600,
   "desc": "Airport Concourse",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION",
    "INDOORS",
    "SPECIAL-DROP"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIRPORT-CONCOURSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC",
    "THE-FLIGHT",
    "SIGNS",
    "ACTUAL-DESK",
    "ACTUAL-ZDESK"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ],
    "OVERHEAD": [
     "SIGNS"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIRPORT-CONCOURSE\n\t(LOC ROOMS)\n\t(DESC \"Airport Concourse\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION INDOORS SPECIAL-DROP)\n\t(OUT TO AIRPORT-ENTRANCE)\n\t(SOUTH TO AIRPORT-ENTRANCE)\n\t(NORTH TO AIRLINE-DESK)\n\t(EAST PER NEXT-CONCOURSE)\n\t(WEST PER PREVIOUS-CONCOURSE)\n\t(HEAR AIRPORT-MUSIC)\n\t(OVERHEAD SIGNS)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC THE-FLIGHT SIGNS\n\t\tACTUAL-DESK ACTUAL-ZDESK)\n\t(THINGS PSEUDO-VEC)\n\t(ACTION AIRPORT-CONCOURSE-F)>",
   "referencedBy": []
  },
  "ACTUAL-DESK": {
   "name": "ACTUAL-DESK",
   "file": "nnairport.zil",
   "line": 801,
   "endLine": 810,
   "desc": "desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "AIRLINE-DESK",
   "flags": [
    "NODESC",
    "SURFACE",
    "PLACE"
   ],
   "synonyms": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "DESK"
   ],
   "adjectives": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "AIRLINE",
    "AIRLINES",
    "CHECK-IN",
    "TICKET"
   ],
   "action": "ACTUAL-DESK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-DESK"
    ],
    "CAPACITY": [
     "25"
    ],
    "GENERIC": [
     "GENERIC-DESK-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT ACTUAL-DESK\n\t(LOC AIRLINE-DESK)\n\t(DESC \"desk\")\n\t(SDESC SDESC-DESK)\n\t(FLAGS NODESC SURFACE PLACE)\n\t(CAPACITY 25)\n\t(GENERIC GENERIC-DESK-F)\n\t(SYNONYM ZZZP ZZZP ZZZP DESK)\n\t(ADJECTIVE ZZZP ZZZP ZZZP AIRLINE AIRLINES CHECK-IN TICKET)\n\t(ACTION ACTUAL-DESK-F)>",
   "referencedBy": []
  },
  "OMNIA-SIGN": {
   "name": "OMNIA-SIGN",
   "file": "nnairport.zil",
   "line": 924,
   "endLine": 929,
   "desc": "notice",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "READABLE",
    "NODESC"
   ],
   "synonyms": [
    "SIGN",
    "NOTICE"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "OMNIA-SIGN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OMNIA-SIGN\n\t(FLAGS READABLE NODESC)\n\t(DESC \"notice\")\n\t(SYNONYM SIGN NOTICE)\n\t(ADJECTIVE LARGE)\n\t(ACTION OMNIA-SIGN-F)>",
   "referencedBy": []
  },
  "ZALAGASA-CONCOURSE": {
   "name": "ZALAGASA-CONCOURSE",
   "file": "nnairport.zil",
   "line": 1381,
   "endLine": 1395,
   "desc": "Airport Concourse",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION",
    "INDOORS",
    "SPECIAL-DROP"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ZALAGASA-CONCOURSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PILLAR",
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC",
    "THE-FLIGHT",
    "SIGNS",
    "GRATE",
    "ACTUAL-DESK",
    "ACTUAL-ZDESK",
    "GSPEAKER"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "OVERHEAD": [
     "SIGNS"
    ]
   },
   "contents": [],
   "source": "<OBJECT ZALAGASA-CONCOURSE\n\t(LOC ROOMS)\n\t(DESC \"Airport Concourse\")\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION INDOORS SPECIAL-DROP)\n\t(OUT TO AIRPORT-ENTRANCE)\n\t(SOUTH TO AIRPORT-ENTRANCE)\n\t(NORTH TO ZALAGASA-DESK)\n\t(EAST PER NEXT-CONCOURSE)\n\t(WEST PER PREVIOUS-CONCOURSE)\n\t(UP PER UP-PILLAR)\n\t(OVERHEAD SIGNS)\n\t(GLOBAL PILLAR AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC THE-FLIGHT SIGNS\n\t\tGRATE ACTUAL-DESK ACTUAL-ZDESK GSPEAKER)\n\t(THINGS PSEUDO-VEC)\n\t(ACTION ZALAGASA-CONCOURSE-F)>",
   "referencedBy": []
  },
  "ZALAGASA-DESK": {
   "name": "ZALAGASA-DESK",
   "file": "nnairport.zil",
   "line": 1410,
   "endLine": 1420,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TERMINAL",
    "LIGHTED",
    "LOCATION",
    "INDOORS",
    "SPECIAL-DROP"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "AIRLINE-DESK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "AIRPORT-CROWD",
    "SKYCAPS",
    "AIRPORT-MUSIC",
    "SIGNS",
    "ACTUAL-DESK"
   ],
   "pseudo": [
    "PSEUDO-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SDESC-DESK"
    ],
    "OVERHEAD": [
     "SIGNS"
    ]
   },
   "contents": [
    "ACTUAL-ZDESK"
   ],
   "source": "<OBJECT ZALAGASA-DESK\n\t(LOC ROOMS)\n\t(SDESC SDESC-DESK)\n\t(FLAGS IN-TERMINAL LIGHTED LOCATION INDOORS SPECIAL-DROP)\n\t(SOUTH TO ZALAGASA-CONCOURSE)\n\t(WEST PER PREVIOUS-CONCOURSE)\n\t(EAST PER NEXT-CONCOURSE)\n\t(GLOBAL AIRPORT-CROWD SKYCAPS AIRPORT-MUSIC SIGNS ACTUAL-DESK)\n\t(OVERHEAD SIGNS)\n\t(ACTION AIRLINE-DESK-F)\n\t(THINGS PSEUDO-VEC)>",
   "referencedBy": []
  },
  "ACTUAL-ZDESK": {
   "name": "ACTUAL-ZDESK",
   "file": "nnairport.zil",
   "line": 1422,
   "endLine": 1429,
   "desc": "Air Zalagasa desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "ZALAGASA-DESK",
   "flags": [
    "NODESC",
    "SURFACE",
    "PLACE"
   ],
   "synonyms": [
    "DESK"
   ],
   "adjectives": [
    "ZALAGASA",
    "AIRLINE",
    "AIRLINES",
    "CHECK-IN",
    "TICKET"
   ],
   "action": "ACTUAL-DESK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "25"
    ]
   },
   "contents": [],
   "source": "<OBJECT ACTUAL-ZDESK\n\t(LOC ZALAGASA-DESK)\n\t(DESC \"Air Zalagasa desk\")\n\t(FLAGS NODESC SURFACE PLACE)\n\t(CAPACITY 25)\n\t(SYNONYM DESK)\n\t(ADJECTIVE ZALAGASA AIRLINE AIRLINES CHECK-IN TICKET)\n\t(ACTION ACTUAL-DESK-F)>",
   "referencedBy": []
  },
  "GSPEAKER": {
   "name": "GSPEAKER",
   "file": "nnairport.zil",
   "line": 1756,
   "endLine": 1764,
   "desc": "speaker",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "SURFACE"
   ],
   "synonyms": [
    "SPEAKER",
    "LOUDSPEAKER"
   ],
   "adjectives": [
    "GUSH-O-SLUSH"
   ],
   "action": "GSPEAKER-F",
   "descfcn": "GSPEAKER-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT GSPEAKER\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"speaker\")\n\t(FLAGS TRYTAKE NOALL SURFACE)\n\t(CAPACITY 5)\n\t(SYNONYM SPEAKER LOUDSPEAKER)\n\t(ADJECTIVE GUSH\\-O\\-SLUSH)\n\t(DESCFCN GSPEAKER-F)\n\t(ACTION GSPEAKER-F)>",
   "referencedBy": []
  },
  "TOWER-DUCT": {
   "name": "TOWER-DUCT",
   "file": "nnairport.zil",
   "line": 2246,
   "endLine": 2260,
   "desc": "Duct",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "SPECIAL-DROP",
    "LIGHTED",
    "LOCATION",
    "IN-TERMINAL"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TOWER-DUCT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TOWER-GRATE",
    "DUCT",
    "AIRPORT-MUSIC",
    "IN-TOWER"
   ],
   "pseudo": [],
   "otherProps": {
    "HEAR": [
     "AIRPORT-MUSIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT TOWER-DUCT\n\t(LOC ROOMS)\n\t(DESC \"Duct\")\n\t(FLAGS SPECIAL-DROP LIGHTED LOCATION IN-TERMINAL)\n\t(HEAR AIRPORT-MUSIC)\n\t(DOWN PER DOWN-DUCT)\n\t(SOUTH PER DOWN-DUCT)\n\t(UP SORRY \"The duct doesn't go any higher.\")\n\t(WEST SORRY \"You hit your head against the duct. Ouch!\")\n        (NORTH SORRY \"You hit your head against the duct. Ouch!\")\n\t(IN TO IN-TOWER IF TOWER-GRATE IS OPEN)\n\t(EAST TO IN-TOWER IF TOWER-GRATE IS OPEN)\n\t(OUT PER WHICH-WAY-OUT)\n\t(GLOBAL TOWER-GRATE DUCT AIRPORT-MUSIC IN-TOWER)\n\t(ACTION TOWER-DUCT-F)>",
   "referencedBy": []
  },
  "ZTICKET": {
   "name": "ZTICKET",
   "file": "nnairport.zil",
   "line": 2312,
   "endLine": 2318,
   "desc": "airline ticket",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE",
    "VOWEL"
   ],
   "synonyms": [
    "TICKET",
    "PAPER"
   ],
   "adjectives": [
    "AIRLINE",
    "DIRECT"
   ],
   "action": "ZTICKET-F",
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
   "source": "<OBJECT ZTICKET\n\t(DESC \"airline ticket\")\n\t(FLAGS TAKEABLE READABLE VOWEL)\n\t(SIZE 1)\n\t(SYNONYM TICKET PAPER)\n\t(ADJECTIVE AIRLINE DIRECT)\n\t(ACTION ZTICKET-F)>",
   "referencedBy": []
  },
  "THE-FLIGHT": {
   "name": "THE-FLIGHT",
   "file": "nnairport.zil",
   "line": 2643,
   "endLine": 2651,
   "desc": "Air Zalagasa flight 42",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "VOWEL",
    "PERSON",
    "LIVING"
   ],
   "synonyms": [
    "FLIGHT",
    "TRIP",
    "FORTY-TWO",
    "INTNUM"
   ],
   "adjectives": [
    "FLIGHT",
    "OMNIA",
    "GALLIA"
   ],
   "action": "THE-FLIGHT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MATCH-NUMBER": [
     "42"
    ],
    "GENERIC": [
     "GENERIC-OMNIA-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT THE-FLIGHT\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"Air Zalagasa flight 42\")\n\t(FLAGS NODESC NOARTICLE VOWEL PERSON LIVING)\n\t(SYNONYM FLIGHT TRIP FORTY-TWO INTNUM)\n\t(MATCH-NUMBER 42)\n\t(ADJECTIVE FLIGHT OMNIA GALLIA)\n\t(GENERIC GENERIC-OMNIA-F)\n\t(ACTION THE-FLIGHT-F)>",
   "referencedBy": []
  },
  "AISLE": {
   "name": "AISLE",
   "file": "xxjet.zil",
   "line": 92,
   "endLine": 104,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-AIRPLANE",
    "LOCATION",
    "VOWEL",
    "NODESC",
    "LIGHTED",
    "INDOORS"
   ],
   "synonyms": [
    "AISLE",
    "ROW"
   ],
   "adjectives": [
    "AISLE",
    "ROW"
   ],
   "action": "AISLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FLIGHT-ATTENDANT",
    "SEATBELT-LIGHT"
   ],
   "pseudo": [
    "SEAT-PSEUDO-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SDESC-AISLE"
    ]
   },
   "contents": [],
   "source": "<OBJECT AISLE\n\t(LOC ROOMS)\n\t(FLAGS IN-AIRPLANE LOCATION VOWEL NODESC LIGHTED INDOORS)\n\t(ADJECTIVE AISLE ROW)\n\t(SYNONYM AISLE ROW)\n\t(EAST PER AISLE-TO-SEAT)\n\t(WEST PER AISLE-TO-SEAT)\n\t(NORTH PER AISLE-TO-AISLE)\n\t(SOUTH PER AISLE-TO-AISLE)\n\t(ACTION AISLE-F)\n\t(GLOBAL\tFLIGHT-ATTENDANT SEATBELT-LIGHT)\n\t(SDESC SDESC-AISLE)\n\t(THINGS SEAT-PSEUDO-VEC)>",
   "referencedBy": []
  },
  "SEATBELT-LIGHT": {
   "name": "SEATBELT-LIGHT",
   "file": "xxjet.zil",
   "line": 535,
   "endLine": 542,
   "desc": "seatbelt light",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "READABLE"
   ],
   "synonyms": [
    "LIGHT",
    "SIGN"
   ],
   "adjectives": [
    "WARNING",
    "SEATBELT"
   ],
   "action": "SEATBELT-LIGHT-F",
   "descfcn": "SEATBELT-LIGHT-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SEATBELT-LIGHT\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"seatbelt light\")\n\t(FLAGS NODESC READABLE)\n\t(SYNONYM LIGHT SIGN)\n\t(ADJECTIVE WARNING SEATBELT)\n\t(DESCFCN SEATBELT-LIGHT-F)\n\t(ACTION SEATBELT-LIGHT-F)>",
   "referencedBy": []
  },
  "RANDOM-OBJECT": {
   "name": "RANDOM-OBJECT",
   "file": "xxjet.zil",
   "line": 2288,
   "endLine": 2292,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "RANDOM-OBJECT-F",
   "descfcn": "RANDOM-OBJECT-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-RANDOM-OBJECT"
    ],
    "PSEUDO-TABLE": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT RANDOM-OBJECT\n\t(ACTION RANDOM-OBJECT-F)\n\t(SDESC SDESC-RANDOM-OBJECT)\n\t(DESCFCN RANDOM-OBJECT-F)\n\t(PSEUDO-TABLE 0)>",
   "referencedBy": []
  },
  "GALLEY": {
   "name": "GALLEY",
   "file": "xxjet.zil",
   "line": 1444,
   "endLine": 1453,
   "desc": "Galley",
   "ldesc": "This is a galley. The flight attendants turn and stare at you coldly.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-AIRPLANE",
    "LOCATION",
    "LIGHTED",
    "INDOORS"
   ],
   "synonyms": [
    "GALLEY"
   ],
   "adjectives": [],
   "action": "GALLEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FLIGHT-ATTENDANT",
    "SEATBELT-LIGHT"
   ],
   "pseudo": [
    "SEAT-PSEUDO-VEC"
   ],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GALLEY\n\t(LOC ROOMS)\n\t(SOUTH TO AISLE)\n\t(DESC \"Galley\")\n\t(SYNONYM GALLEY)\n\t(LDESC \"This is a galley. The flight attendants turn and stare at you coldly.\")\n\t(GLOBAL FLIGHT-ATTENDANT SEATBELT-LIGHT)\n\t(THINGS SEAT-PSEUDO-VEC)\n\t(FLAGS IN-AIRPLANE LOCATION LIGHTED INDOORS)\n\t(ACTION GALLEY-F)>",
   "referencedBy": []
  },
  "LAV-LOBBY": {
   "name": "LAV-LOBBY",
   "file": "xxjet.zil",
   "line": 1461,
   "endLine": 1471,
   "desc": "Rear of Aeroplane",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-AIRPLANE",
    "LOCATION",
    "LIGHTED",
    "INDOORS"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LAV-LOBBY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAV-DOOR",
    "FLIGHT-ATTENDANT",
    "SEATBELT-LIGHT"
   ],
   "pseudo": [
    "SEAT-PSEUDO-VEC"
   ],
   "otherProps": {
    "HEAR": [
     "0"
    ]
   },
   "contents": [
    "LAV-DOOR",
    "AIRPHONE"
   ],
   "source": "<OBJECT LAV-LOBBY\n\t(LOC ROOMS)\n\t(NORTH TO AISLE)\n\t(SOUTH PER LAV-ENGAGED)\n\t(EAST SORRY \"The hatch is closed.\")\n\t(DESC \"Rear of Aeroplane\")\n\t(FLAGS IN-AIRPLANE LOCATION LIGHTED INDOORS)\n\t(THINGS SEAT-PSEUDO-VEC)\n\t(HEAR 0)\n\t(GLOBAL LAV-DOOR FLIGHT-ATTENDANT SEATBELT-LIGHT)\n\t(ACTION LAV-LOBBY-F)>",
   "referencedBy": []
  },
  "SINK": {
   "name": "SINK",
   "file": "xjet.zil",
   "line": 1361,
   "endLine": 1367,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "LAVATORY",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "SINK",
    "BASIN"
   ],
   "adjectives": [
    "LAVATORY"
   ],
   "action": "SINK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "sink"
    ]
   },
   "contents": [],
   "source": "<OBJECT SINK\n\t(LOC LAVATORY)\n\t(SDESC \"sink\")\n\t(FLAGS NODESC)\n\t(SYNONYM SINK BASIN)\n\t(ADJECTIVE LAVATORY)\n\t(ACTION SINK-F)>",
   "referencedBy": []
  },
  "TOWEL": {
   "name": "TOWEL",
   "file": "nnjet.zil",
   "line": 1238,
   "endLine": 1243,
   "desc": "paper towel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAVATORY",
   "flags": [
    "TAKEABLE",
    "TOOL"
   ],
   "synonyms": [
    "TOWEL"
   ],
   "adjectives": [
    "PAPER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOWEL\n\t(LOC LAVATORY)\n\t(FLAGS TAKEABLE TOOL)\n\t(DESC \"paper towel\")\n\t(SYNONYM TOWEL)\n\t(ADJECTIVE PAPER)>",
   "referencedBy": []
  },
  "LAVATORY": {
   "name": "LAVATORY",
   "file": "xjet.zil",
   "line": 1377,
   "endLine": 1389,
   "desc": "Lavatory",
   "ldesc": "You are in the bathroom. There is a washbasin, a W.C., and an electric socket here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-AIRPLANE",
    "LOCATION",
    "LIGHTED",
    "INDOORS",
    "NO-NERD"
   ],
   "synonyms": [
    "LAVATORY",
    "BATHROOM",
    "CAN",
    "LAV"
   ],
   "adjectives": [],
   "action": "LAVATORY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "LAV-DOOR",
    "FLIGHT-ATTENDANT",
    "SEATBELT-LIGHT"
   ],
   "pseudo": [
    "SEAT-PSEUDO-VEC"
   ],
   "otherProps": {},
   "contents": [
    "SINK",
    "TOWEL",
    "LAV-SIGN"
   ],
   "source": "<OBJECT LAVATORY\n\t(LOC ROOMS)\n\t(OUT TO LAV-LOBBY IF LAV-DOOR IS OPEN ELSE\n\t \"Better open the door first.\")\n\t(NORTH TO LAV-LOBBY IF LAV-DOOR IS OPEN ELSE\n\t \"Better open the door first.\")\n\t(SYNONYM LAVATORY BATHROOM CAN LAV)\n\t(DESC \"Lavatory\")\n\t(LDESC \"You are in the bathroom. There is a washbasin, a W.C., and an electric socket here.\")\n\t(FLAGS IN-AIRPLANE LOCATION LIGHTED INDOORS NO-NERD)\n\t(THINGS SEAT-PSEUDO-VEC)\n\t(GLOBAL LAV-DOOR FLIGHT-ATTENDANT SEATBELT-LIGHT)\n\t(ACTION LAVATORY-F)>",
   "referencedBy": []
  },
  "LAV-SIGN": {
   "name": "LAV-SIGN",
   "file": "nnjet.zil",
   "line": 1267,
   "endLine": 1272,
   "desc": "sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAVATORY",
   "flags": [
    "READABLE",
    "NODESC"
   ],
   "synonyms": [
    "SIGN"
   ],
   "adjectives": [],
   "action": "LAV-SIGN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LAV-SIGN\n\t(DESC \"sign\")\n\t(LOC LAVATORY)\n\t(FLAGS READABLE NODESC)\n\t(SYNONYM SIGN)\n\t(ACTION LAV-SIGN-F)>",
   "referencedBy": []
  },
  "LAV-DOOR": {
   "name": "LAV-DOOR",
   "file": "xxjet.zil",
   "line": 1571,
   "endLine": 1577,
   "desc": "lavatory door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAV-LOBBY",
   "flags": [
    "OPENABLE",
    "LOCKED",
    "NODESC"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "LAVATORY",
    "BATHROOM"
   ],
   "action": "LAV-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LAV-DOOR\n\t(DESC \"lavatory door\")\n\t(LOC LAV-LOBBY)\n\t(FLAGS OPENABLE LOCKED NODESC)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE LAVATORY BATHROOM)\n\t(ACTION LAV-DOOR-F)>",
   "referencedBy": []
  },
  "FLIGHT-ATTENDANT": {
   "name": "FLIGHT-ATTENDANT",
   "file": "xxjet.zil",
   "line": 1752,
   "endLine": 1758,
   "desc": "flight attendant",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "PERSON",
    "LIVING"
   ],
   "synonyms": [
    "ZZZP",
    "ATTENDANT"
   ],
   "adjectives": [
    "FLIGHT"
   ],
   "action": "FLIGHT-ATTENDANT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLIGHT-ATTENDANT\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"flight attendant\")\n\t(FLAGS PERSON LIVING)\n\t(SYNONYM ZZZP ATTENDANT)\n\t(ADJECTIVE FLIGHT)\n\t(ACTION FLIGHT-ATTENDANT-F)>",
   "referencedBy": []
  },
  "PLATE": {
   "name": "PLATE",
   "file": "xjet.zil",
   "line": 2091,
   "endLine": 2096,
   "desc": "plate",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "SURFACE"
   ],
   "synonyms": [
    "PLATE",
    "DISH"
   ],
   "adjectives": [],
   "action": "PLATE-F",
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
   "source": "<OBJECT PLATE\n\t(DESC \"plate\")\n\t(SYNONYM PLATE DISH)\n\t(FLAGS TAKEABLE SURFACE)\n\t(CAPACITY 5)\n\t(ACTION PLATE-F)>",
   "referencedBy": []
  },
  "TEETH": {
   "name": "TEETH",
   "file": "xjet.zil",
   "line": 2103,
   "endLine": 2109,
   "desc": "your teeth",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "TOUCHED",
    "NOARTICLE"
   ],
   "synonyms": [
    "TEETH",
    "TOOTH"
   ],
   "adjectives": [
    "MY"
   ],
   "action": "TEETH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TEETH\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"your teeth\")\n\t(FLAGS NODESC TOUCHED NOARTICLE)\n\t(SYNONYM TEETH TOOTH)\n\t(ADJECTIVE MY)\n\t(ACTION TEETH-F)>",
   "referencedBy": []
  },
  "TOOTHBRUSH": {
   "name": "TOOTHBRUSH",
   "file": "xjet.zil",
   "line": 2131,
   "endLine": 2136,
   "desc": "toothbrush",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "TOOL"
   ],
   "synonyms": [
    "TOOTHBRUSH",
    "BRUSH"
   ],
   "adjectives": [
    "TOOTH",
    "ELECTRIC"
   ],
   "action": "TOOTHBRUSH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOOTHBRUSH\n\t(DESC \"toothbrush\")\n\t(SYNONYM TOOTHBRUSH BRUSH)\n\t(ADJECTIVE TOOTH ELECTRIC)\n\t(FLAGS TAKEABLE TOOL)\n\t(ACTION TOOTHBRUSH-F)>",
   "referencedBy": []
  },
  "AIRLINE-MEAL": {
   "name": "AIRLINE-MEAL",
   "file": "xxjet.zil",
   "line": 2048,
   "endLine": 2053,
   "desc": "noisome stew",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "SPECIALTY",
    "FOOD",
    "MEAL",
    "STEW",
    "DINNER",
    "LLAMA",
    "BOWL",
    "PLATE"
   ],
   "adjectives": [
    "ZALAGASAN",
    "LLAMA",
    "MY",
    "NOISOME"
   ],
   "action": "AIRLINE-MEAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-FOOD-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT AIRLINE-MEAL\n\t(DESC \"noisome stew\")\n\t(SYNONYM SPECIALTY FOOD MEAL STEW DINNER LLAMA BOWL PLATE)\n\t(ADJECTIVE ZALAGASAN LLAMA MY NOISOME)\n\t(GENERIC GENERIC-FOOD-F)\n\t(ACTION AIRLINE-MEAL-F)>",
   "referencedBy": []
  },
  "RANDOM-PERSON": {
   "name": "RANDOM-PERSON",
   "file": "xxjet.zil",
   "line": 2821,
   "endLine": 2826,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "PERSON",
    "LIVING"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RANDOM-PERSON-F",
   "descfcn": "RANDOM-PERSON-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "RANDOM-PERSON-SDESC"
    ],
    "PSEUDO-TABLE": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT RANDOM-PERSON\n\t(ACTION RANDOM-PERSON-F)\n\t(DESCFCN RANDOM-PERSON-F)\n\t(SDESC RANDOM-PERSON-SDESC)\n\t(PSEUDO-TABLE 0)\n\t(FLAGS PERSON LIVING)>",
   "referencedBy": []
  },
  "AIRPHONE": {
   "name": "AIRPHONE",
   "file": "xxjet.zil",
   "line": 3254,
   "endLine": 3261,
   "desc": "telephone",
   "ldesc": null,
   "fdesc": null,
   "loc": "LAV-LOBBY",
   "flags": [
    "CONTAINER",
    "OPENED",
    "NODESC"
   ],
   "synonyms": [
    "TELEPHONE",
    "PHONE",
    "AIRPHONE",
    "SLOT"
   ],
   "adjectives": [
    "TELEPHONE",
    "PHONE",
    "AIR",
    "PAY"
   ],
   "action": "AIRPHONE-F",
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
   "source": "<OBJECT AIRPHONE\n\t(LOC LAV-LOBBY)\n\t(DESC \"telephone\")\n\t(FLAGS CONTAINER OPENED NODESC)\n\t(CAPACITY 1)\n\t(SYNONYM TELEPHONE PHONE AIRPHONE SLOT)\n\t(ADJECTIVE TELEPHONE PHONE AIR PAY)\n\t(ACTION AIRPHONE-F)>",
   "referencedBy": []
  },
  "WALLS": {
   "name": "WALLS",
   "file": "other-misc.zil",
   "line": 141,
   "endLine": 146,
   "desc": "wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "TOUCHED",
    "SURFACE"
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
   "source": "<OBJECT WALLS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"wall\")\n\t(FLAGS NODESC TOUCHED SURFACE)\n\t(SYNONYM WALL WALLS)\n\t(ACTION WALLS-F)>",
   "referencedBy": []
  },
  "CEILING": {
   "name": "CEILING",
   "file": "other-misc.zil",
   "line": 174,
   "endLine": 179,
   "desc": "ceiling",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "TOUCHED"
   ],
   "synonyms": [
    "CEILING"
   ],
   "adjectives": [],
   "action": "CEILING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CEILING\n\t(LOC GLOBAL-OBJECTS)\n\t(FLAGS NODESC TOUCHED)\n\t(DESC \"ceiling\")\n\t(SYNONYM CEILING)\n\t(ACTION CEILING-F)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "other-misc.zil",
   "line": 191,
   "endLine": 199,
   "desc": "your hand",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TOOL",
    "MANUALLY",
    "NODESC",
    "TOUCHED",
    "NOARTICLE"
   ],
   "synonyms": [
    "HAND",
    "HANDS",
    "PALM",
    "PALMS",
    "FINGER",
    "FINGERS",
    "THUMB",
    "THUMBS"
   ],
   "adjectives": [
    "MY",
    "BARE"
   ],
   "action": "HANDS-F",
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
   "source": "<OBJECT HANDS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"your hand\")\n\t(FLAGS TOOL MANUALLY NODESC TOUCHED NOARTICLE)\n\t(SYNONYM HAND HANDS PALM PALMS FINGER FINGERS THUMB THUMBS)\n\t(ADJECTIVE MY BARE)\n\t(SIZE 5)\n      ; (VALUE 0)\n\t(ACTION HANDS-F)>",
   "referencedBy": []
  },
  "FEET": {
   "name": "FEET",
   "file": "other-misc.zil",
   "line": 232,
   "endLine": 240,
   "desc": "your foot",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "CLOTHING",
    "WORN",
    "NODESC",
    "NOARTICLE",
    "SURFACE"
   ],
   "synonyms": [
    "FOOT",
    "FEET",
    "TOE",
    "TOES",
    "SNEAKER",
    "SNEAKERS"
   ],
   "adjectives": [
    "MY"
   ],
   "action": "FEET-F",
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
   "source": "<OBJECT FEET\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"your foot\")\n\t(FLAGS CLOTHING WORN NODESC NOARTICLE SURFACE)\n\t(SYNONYM FOOT FEET TOE TOES SNEAKER SNEAKERS)\n\t(ADJECTIVE MY)\n\t(SIZE 5)\n      ; (VALUE 0)\n\t(ACTION FEET-F)>",
   "referencedBy": []
  },
  "MOUTH": {
   "name": "MOUTH",
   "file": "other-misc.zil",
   "line": 260,
   "endLine": 266,
   "desc": "your mouth",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "TOUCHED"
   ],
   "synonyms": [
    "MOUTH"
   ],
   "adjectives": [
    "MY"
   ],
   "action": "MOUTH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOUTH\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"your mouth\")\n\t(SYNONYM MOUTH)\n\t(ADJECTIVE MY)\n\t(FLAGS NODESC NOARTICLE TOUCHED)\n\t(ACTION MOUTH-F)>",
   "referencedBy": []
  },
  "EYES": {
   "name": "EYES",
   "file": "other-misc.zil",
   "line": 291,
   "endLine": 298,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "TOUCHED",
    "NEEDS-IDENTITY",
    "SURFACE"
   ],
   "synonyms": [
    "EYES",
    "HEAD"
   ],
   "adjectives": [
    "MY"
   ],
   "action": "EYES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-EYES"
    ],
    "OBJ-NOUN": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT EYES\n\t(LOC GLOBAL-OBJECTS)\n\t(SDESC SDESC-EYES)\n\t(FLAGS NODESC NOARTICLE TOUCHED NEEDS-IDENTITY SURFACE)\n\t(OBJ-NOUN 0)\n\t(SYNONYM EYES HEAD)\n\t(ADJECTIVE MY)\n\t(ACTION EYES-F)>",
   "referencedBy": []
  },
  "ME": {
   "name": "ME",
   "file": "other-misc.zil",
   "line": 323,
   "endLine": 329,
   "desc": "yourself",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "PERSON",
    "LIVING",
    "TOUCHED",
    "NOARTICLE"
   ],
   "synonyms": [
    "I",
    "ME",
    "MYSELF",
    "BODY"
   ],
   "adjectives": [
    "MY"
   ],
   "action": "ME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n        (LOC GLOBAL-OBJECTS)\n\t(SYNONYM I ME MYSELF BODY)\n\t(ADJECTIVE MY)\n\t(DESC \"yourself\")\n\t(FLAGS PERSON LIVING TOUCHED NOARTICLE)\n\t(ACTION ME-F)>",
   "referencedBy": [
    "A-ATTENDANT-F"
   ]
  },
  "YOU": {
   "name": "YOU",
   "file": "other-misc.zil",
   "line": 390,
   "endLine": 395,
   "desc": "myself",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE"
   ],
   "synonyms": [
    "YOU",
    "YOURSELF"
   ],
   "adjectives": [],
   "action": "YOU-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YOU\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"myself\")\n\t(SYNONYM YOU YOURSELF)\n\t(FLAGS NODESC NOARTICLE)\n\t(ACTION YOU-F)>",
   "referencedBy": []
  },
  "CLOTHES": {
   "name": "CLOTHES",
   "file": "other-misc.zil",
   "line": 411,
   "endLine": 417,
   "desc": "your clothes",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "WORN",
    "CLOTHING",
    "NODESC",
    "NOARTICLE"
   ],
   "synonyms": [
    "CLOTHES",
    "CLOTHING",
    "APPAREL",
    "OUTFIT",
    "SHORTS"
   ],
   "adjectives": [
    "MY"
   ],
   "action": "CLOTHES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLOTHES\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"your clothes\")\n\t(SYNONYM CLOTHES CLOTHING APPAREL OUTFIT SHORTS)\n\t(ADJECTIVE MY)\n\t(FLAGS WORN CLOTHING NODESC NOARTICLE)\n\t(ACTION CLOTHES-F)>",
   "referencedBy": []
  },
  "THEM": {
   "name": "THEM",
   "file": "other-misc.zil",
   "line": 440,
   "endLine": 444,
   "desc": "them",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NOARTICLE"
   ],
   "synonyms": [
    "THEY",
    "THEM",
    "THEMSELVES"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT THEM\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM THEY THEM THEMSELVES)\n\t(DESC \"them\")\n\t(FLAGS NOARTICLE)>",
   "referencedBy": []
  },
  "INTDIR": {
   "name": "INTDIR",
   "file": "other-misc.zil",
   "line": 446,
   "endLine": 450,
   "desc": "direction",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DIRECTION"
   ],
   "adjectives": [
    "NORTH",
    "EAST",
    "SOUTH",
    "WEST",
    "W",
    "UP",
    "DOWN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTDIR\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"direction\")\n\t(SYNONYM DIRECTION)\n\t(ADJECTIVE NORTH EAST SOUTH WEST W ; \"NE NW SE SW\" UP DOWN)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "other-misc.zil",
   "line": 452,
   "endLine": 458,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NEEDS-IDENTITY"
   ],
   "synonyms": [
    "SURFACE",
    "GROUND",
    "GROUNDS",
    "EARTH",
    "FLOOR"
   ],
   "adjectives": [],
   "action": "GROUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-GROUND"
    ],
    "OBJ-NOUN": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT GROUND\n\t(LOC GLOBAL-OBJECTS)\n\t(SDESC SDESC-GROUND)\n\t(OBJ-NOUN 0)\n\t(SYNONYM SURFACE GROUND GROUNDS EARTH FLOOR)\n        (FLAGS NODESC NEEDS-IDENTITY)\n\t(ACTION GROUND-F)>",
   "referencedBy": []
  },
  "POCKET": {
   "name": "POCKET",
   "file": "other-misc.zil",
   "line": 494,
   "endLine": 503,
   "desc": "your pocket",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "CONTAINER",
    "OPENED",
    "SEARCH-ME"
   ],
   "synonyms": [
    "POCKET",
    "POCKETS"
   ],
   "adjectives": [
    "MY",
    "SIDE",
    "YOUR"
   ],
   "action": "POCKET-F",
   "descfcn": null,
   "contfcn": "IN-POCKET",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "0"
    ],
    "CAPACITY": [
     "4"
    ]
   },
   "contents": [
    "WALLET"
   ],
   "source": "<OBJECT POCKET\n\t(LOC PLAYER)\n\t(DESC \"your pocket\")\n\t(SYNONYM POCKET POCKETS)\n\t(ADJECTIVE MY SIDE YOUR)\n\t(FLAGS NODESC NOARTICLE CONTAINER OPENED SEARCH-ME)\n\t(SIZE 0)\n\t(CAPACITY 4)\n\t(CONTFCN IN-POCKET)\n\t(ACTION POCKET-F)>",
   "referencedBy": []
  },
  "SOUNDS": {
   "name": "SOUNDS",
   "file": "other-misc.zil",
   "line": 637,
   "endLine": 643,
   "desc": "sound",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "SOUND",
    "SOUNDS"
   ],
   "adjectives": [],
   "action": "SOUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-SOUND"
    ]
   },
   "contents": [],
   "source": "<OBJECT SOUNDS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"sound\")\n\t(FLAGS NODESC)\n\t(SYNONYM SOUND SOUNDS)\n\t(GENERIC GENERIC-SOUND)\n\t(ACTION SOUND-F)>",
   "referencedBy": []
  },
  "CORNER": {
   "name": "CORNER",
   "file": "other-misc.zil",
   "line": 669,
   "endLine": 674,
   "desc": "corner",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "SURFACE"
   ],
   "synonyms": [
    "CORNER",
    "CORNERS"
   ],
   "adjectives": [],
   "action": "CORNER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CORNER\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"corner\")\n\t(FLAGS NODESC SURFACE)\n\t(SYNONYM CORNER CORNERS)\n\t(ACTION CORNER-F)>",
   "referencedBy": []
  },
  "SPY": {
   "name": "SPY",
   "file": "paranoid.zil",
   "line": 110,
   "endLine": 116,
   "desc": "weirdo",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "STRANGER",
    "MAN",
    "ODDITY",
    "WEIRDO",
    "FELLOW",
    "GUY",
    "WOODY"
   ],
   "adjectives": [],
   "action": "SPY-F",
   "descfcn": "SPY-F",
   "contfcn": "SPY-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "SWISS",
    "MACHGUN"
   ],
   "source": "<OBJECT SPY\n\t(DESC \"weirdo\")\n\t(FLAGS LIVING PERSON)\n\t(SYNONYM STRANGER MAN ODDITY WEIRDO FELLOW GUY WOODY)\n\t(DESCFCN SPY-F)\n\t(CONTFCN SPY-F)\n\t(ACTION SPY-F)>",
   "referencedBy": []
  },
  "THE-PARANOID": {
   "name": "THE-PARANOID",
   "file": "paranoid.zil",
   "line": 266,
   "endLine": 273,
   "desc": "paranoid",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-FORT",
   "flags": [
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "PARANOID",
    "SURVIVALIST",
    "MAN",
    "GUY",
    "FELLOW",
    "RAMBO",
    "OWNER"
   ],
   "adjectives": [],
   "action": "PARA-F",
   "descfcn": "PARA-F",
   "contfcn": "PARA-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT THE-PARANOID\n\t(LOC IN-FORT)\n\t(DESC \"paranoid\")\n\t(FLAGS LIVING PERSON)\n\t(SYNONYM PARANOID SURVIVALIST MAN GUY FELLOW RAMBO OWNER)\n\t(DESCFCN PARA-F)\n\t(CONTFCN PARA-F)\n\t(ACTION PARA-F)>",
   "referencedBy": []
  },
  "OUTSIDE-FORT": {
   "name": "OUTSIDE-FORT",
   "file": "paranoid.zil",
   "line": 319,
   "endLine": 333,
   "desc": "Dead End",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OUTSIDE-FORT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAMHOUSE",
    "BWGATE",
    "STREETNUMBERS",
    "GSTREET",
    "CAB",
    "CAB-DRIVER",
    "CAMERA"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SAY-STREET-ADDRESS"
    ],
    "STADDR": [
     "72"
    ]
   },
   "contents": [
    "INTERCOM"
   ],
   "source": "<OBJECT OUTSIDE-FORT\n\t(LOC ROOMS)\n\t(DESC \"Dead End\")\n\t(SDESC SAY-STREET-ADDRESS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(FLAGS IN-TOWN LIGHTED LOCATION)\n\t(NORTH TO OUTSIDE-FARM)\n\t(EAST SORRY \"Barbed wire blocks your path.\")\n\t(WEST SORRY \"Barbed wire blocks your path.\")\n\t(SOUTH TO IN-FORT IF BWGATE IS OPEN)\n\t(IN TO IN-FORT IF BWGATE IS OPEN)\n\t(GLOBAL CAMHOUSE BWGATE STREETNUMBERS\n\t \tGSTREET CAB CAB-DRIVER CAMERA)\n\t(STADDR 72)\n\t(ACTION OUTSIDE-FORT-F)>",
   "referencedBy": []
  },
  "IN-FORT": {
   "name": "IN-FORT",
   "file": "paranoid.zil",
   "line": 365,
   "endLine": 376,
   "desc": "Foyer",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-FORT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAMHOUSE",
    "BWGATE",
    "PAR-STAIR"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "ENTER-FROM": [
     "<PTABLE P?SOUTH OUTSIDE-FORT>"
    ],
    "EXIT-TO": [
     "OUTSIDE-FORT"
    ]
   },
   "contents": [
    "THE-PARANOID",
    "PARAMAIL"
   ],
   "source": "<OBJECT IN-FORT\n\t(LOC ROOMS)\n\t(DESC \"Foyer\")\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(ENTER-FROM <PTABLE P?SOUTH OUTSIDE-FORT>)\n\t(EXIT-TO OUTSIDE-FORT)\n\t(NORTH TO OUTSIDE-FORT)\n\t(OUT TO OUTSIDE-FORT)\n\t(DOWN TO BASEMENT)\n\t(GLOBAL CAMHOUSE BWGATE PAR-STAIR)\n\t(ACTION IN-FORT-F)>",
   "referencedBy": []
  },
  "JAIL": {
   "name": "JAIL",
   "file": "paranoid.zil",
   "line": 378,
   "endLine": 388,
   "desc": "gaol",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "JAIL",
    "GAOL"
   ],
   "adjectives": [],
   "action": "JAIL-D",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "JDOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "ENTER-FROM": [
     "<PTABLE P?SOUTH BASEMENT>"
    ],
    "EXIT-TO": [
     "BASEMENT"
    ]
   },
   "contents": [],
   "source": "<OBJECT JAIL\n\t(LOC ROOMS)\n\t(DESC \"gaol\" ;\"jail\")\n\t(SYNONYM JAIL GAOL)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(NORTH TO BASEMENT)\n\t(OUT TO BASEMENT)\n\t(ENTER-FROM <PTABLE P?SOUTH BASEMENT>)\n\t(EXIT-TO BASEMENT)\n\t(GLOBAL JDOOR)\n\t(ACTION JAIL-D)>",
   "referencedBy": []
  },
  "JDOOR": {
   "name": "JDOOR",
   "file": "paranoid.zil",
   "line": 431,
   "endLine": 437,
   "desc": "gaol door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY",
    "BARS",
    "BAR"
   ],
   "adjectives": [
    "JAIL",
    "GAOL"
   ],
   "action": "JDOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT JDOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"gaol door\")\n\t(FLAGS NODESC DOORLIKE OPENABLE)\n\t(SYNONYM DOOR DOORWAY BARS BAR)\n\t(ADJECTIVE JAIL GAOL)\n\t(ACTION JDOOR-F)>",
   "referencedBy": []
  },
  "BASEMENT": {
   "name": "BASEMENT",
   "file": "paranoid.zil",
   "line": 477,
   "endLine": 488,
   "desc": "basement",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [
    "BASEMENT"
   ],
   "adjectives": [],
   "action": "BASE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "JDOOR",
    "PAR-STAIR"
   ],
   "pseudo": [],
   "otherProps": {
    "EXIT-TO": [
     "IN-FORT"
    ],
    "ENTER-FROM": [
     "<PTABLE P?DOWN IN-FORT>"
    ]
   },
   "contents": [],
   "source": "<OBJECT BASEMENT\n\t(LOC ROOMS)\n\t(DESC \"basement\")\n\t(FLAGS IN-TOWN LIGHTED LOCATION)\n\t(SOUTH TO JAIL IF JDOOR IS OPEN)\n\t(IN TO JAIL IF JDOOR IS OPEN)\n\t(UP TO IN-FORT)\n\t(EXIT-TO IN-FORT)\n\t(ENTER-FROM <PTABLE P?DOWN IN-FORT>)\n\t(SYNONYM BASEMENT)\n\t(GLOBAL JDOOR PAR-STAIR)\n\t(ACTION BASE-F)>",
   "referencedBy": []
  },
  "PAR-STAIR": {
   "name": "PAR-STAIR",
   "file": "paranoid.zil",
   "line": 509,
   "endLine": 514,
   "desc": "stairway",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "STAIRWAY",
    "STAIRS",
    "STAIR"
   ],
   "adjectives": [],
   "action": "PAR-STAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PAR-STAIR \n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"stairway\")\n\t(FLAGS NODESC)\n\t(SYNONYM STAIRWAY STAIRS STAIR)\n\t(ACTION PAR-STAIR-F)>",
   "referencedBy": []
  },
  "HACKSAW": {
   "name": "HACKSAW",
   "file": "paranoid.zil",
   "line": 567,
   "endLine": 573,
   "desc": "hacksaw",
   "ldesc": null,
   "fdesc": null,
   "loc": "BTABLE",
   "flags": [
    "TAKEABLE",
    "SHARPENED"
   ],
   "synonyms": [
    "SAW",
    "HACKSAW"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "GEN-SAW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT HACKSAW\n\t(LOC BTABLE)\n\t(DESC \"hacksaw\")\n\t(FLAGS TAKEABLE SHARPENED)\n\t(SIZE 2)\n\t(SYNONYM SAW HACKSAW)\n\t(GENERIC GEN-SAW-F)>",
   "referencedBy": []
  },
  "SWISS": {
   "name": "SWISS",
   "file": "paranoid.zil",
   "line": 575,
   "endLine": 583,
   "desc": "Swiss army knife",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPY",
   "flags": [
    "NODESC",
    "TAKEABLE",
    "SURFACE",
    "SEARCH-ME"
   ],
   "synonyms": [
    "KNIFE",
    "BUTTON",
    "LEVER",
    "BUTTONS"
   ],
   "adjectives": [
    "SWISS",
    "ARMY",
    "GENERATOR",
    "SAW",
    "POWER"
   ],
   "action": "SWISS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT SWISS\n\t(LOC SPY)\n\t(DESC \"Swiss army knife\")\n\t(FLAGS NODESC TAKEABLE SURFACE SEARCH-ME)\n\t(SIZE 2)\n\t(CAPACITY 0)\n\t(SYNONYM KNIFE BUTTON LEVER BUTTONS)\n\t(ADJECTIVE SWISS ARMY GENERATOR SAW POWER)\n\t(ACTION SWISS-F)>",
   "referencedBy": []
  },
  "POWER-SAW": {
   "name": "POWER-SAW",
   "file": "paranoid.zil",
   "line": 585,
   "endLine": 591,
   "desc": "power saw",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE"
   ],
   "synonyms": [
    "SAW",
    "POWER",
    "PLUG"
   ],
   "adjectives": [
    "POWER",
    "ELECTRIC",
    "CHAIN"
   ],
   "action": "POWER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GEN-SAW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT POWER-SAW\n\t(DESC \"power saw\")\n\t(SYNONYM SAW POWER PLUG)\n\t(ADJECTIVE POWER ELECTRIC CHAIN)\n\t(FLAGS TAKEABLE)\n\t(GENERIC GEN-SAW-F)\n\t(ACTION POWER-F)>",
   "referencedBy": []
  },
  "GENERATOR": {
   "name": "GENERATOR",
   "file": "paranoid.zil",
   "line": 679,
   "endLine": 684,
   "desc": "portable foot-powered generator",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "VEHBIT"
   ],
   "synonyms": [
    "GENERATOR"
   ],
   "adjectives": [
    "PORTABLE",
    "TAKEABLE",
    "FOOT",
    "POWERED",
    "FOOT-POWERED"
   ],
   "action": "GEN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENERATOR\n\t(DESC \"portable foot-powered generator\")\n\t(SYNONYM GENERATOR)\n\t(ADJECTIVE PORTABLE TAKEABLE FOOT POWERED FOOT-POWERED)\n\t(FLAGS TAKEABLE VEHBIT)\n\t(ACTION GEN-F)>",
   "referencedBy": []
  },
  "CAMHOUSE": {
   "name": "CAMHOUSE",
   "file": "paranoid.zil",
   "line": 977,
   "endLine": 983,
   "desc": "camouflaged house",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "HOUSE",
    "HOME",
    "BUILDING"
   ],
   "adjectives": [
    "CAMOUFLAGED",
    "GREEN",
    "BROWN",
    "NEIGHBOR'S"
   ],
   "action": "CAMHOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAMHOUSE\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"camouflaged house\")\n\t(FLAGS NODESC)\n\t(SYNONYM HOUSE HOME BUILDING)\n\t(ADJECTIVE CAMOUFLAGED GREEN BROWN NEIGHBOR\\'S)\n\t(ACTION CAMHOUSE-F)>",
   "referencedBy": []
  },
  "INCIDENT": {
   "name": "INCIDENT",
   "file": "paranoid.zil",
   "line": 1005,
   "endLine": 1010,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "ACTUALLY"
   ],
   "adjectives": [],
   "action": "INCIDENT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INCIDENT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"that\")\n\t(FLAGS NODESC NOARTICLE LIVING PERSON)\n\t(SYNONYM ACTUALLY)\n\t(ACTION INCIDENT-F)>",
   "referencedBy": []
  },
  "UNFORTUN": {
   "name": "UNFORTUN",
   "file": "paranoid.zil",
   "line": 1012,
   "endLine": 1017,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "UNFORTUNATELY"
   ],
   "adjectives": [],
   "action": "UNFORTUN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT UNFORTUN\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"that\")\n\t(FLAGS NODESC NOARTICLE LIVING PERSON)\n\t(SYNONYM UNFORTUNATELY)\n\t(ACTION UNFORTUN-F)>",
   "referencedBy": []
  },
  "MACHGUN": {
   "name": "MACHGUN",
   "file": "paranoid.zil",
   "line": 1255,
   "endLine": 1261,
   "desc": "machine gun",
   "ldesc": null,
   "fdesc": null,
   "loc": "SPY",
   "flags": [
    "TRYTAKE",
    "NOALL"
   ],
   "synonyms": [
    "GUN",
    "MACHINE"
   ],
   "adjectives": [
    "MACHINE"
   ],
   "action": "MACHGUN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MACHGUN\n\t(LOC SPY)\n\t(DESC \"machine gun\")\n\t(FLAGS TRYTAKE NOALL)\n\t(SYNONYM GUN MACHINE)\n\t(ADJECTIVE MACHINE)\n\t(ACTION MACHGUN-F)>",
   "referencedBy": []
  },
  "INTERCOM": {
   "name": "INTERCOM",
   "file": "paranoid.zil",
   "line": 1272,
   "endLine": 1278,
   "desc": "intercom",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-FORT",
   "flags": [
    "VOWEL",
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "INTERCOM",
    "SPEAKER",
    "LOUDSPEAKER",
    "VOICE",
    "SOUND",
    "BOX"
   ],
   "adjectives": [
    "INTERCOM"
   ],
   "action": "INTERCOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTERCOM\n\t(LOC OUTSIDE-FORT)\n\t(DESC \"intercom\")\n\t(FLAGS VOWEL NODESC TRYTAKE NOALL LIVING PERSON)\n\t(SYNONYM INTERCOM SPEAKER LOUDSPEAKER VOICE SOUND BOX)\n\t(ADJECTIVE INTERCOM)\n\t(ACTION INTERCOM-F)>",
   "referencedBy": []
  },
  "BWGATE": {
   "name": "BWGATE",
   "file": "paranoid.zil",
   "line": 1332,
   "endLine": 1338,
   "desc": "gate",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE",
    "LOCKED"
   ],
   "synonyms": [
    "GATE",
    "GATEWAY",
    "FENCE",
    "WALL",
    "DOOR"
   ],
   "adjectives": [],
   "action": "BWGATE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GDOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BWGATE\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"gate\")\n\t(FLAGS NODESC DOORLIKE OPENABLE LOCKED)\n\t(SYNONYM GATE GATEWAY FENCE WALL DOOR)\n\t(GENERIC GDOOR-F)\n\t(ACTION BWGATE-F)>",
   "referencedBy": []
  },
  "PARAMAIL": {
   "name": "PARAMAIL",
   "file": "paranoid.zil",
   "line": 1383,
   "endLine": 1390,
   "desc": "some mail",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-FORT",
   "flags": [
    "TAKEABLE",
    "NOARTICLE",
    "READABLE",
    "NODESC"
   ],
   "synonyms": [
    "MAIL"
   ],
   "adjectives": [],
   "action": "PARAMAIL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-MAIL"
    ],
    "MAIL-LETTER": [
     "-1"
    ]
   },
   "contents": [],
   "source": "<OBJECT PARAMAIL\n\t(LOC IN-FORT)\n\t(DESC \"some mail\")\n\t(FLAGS TAKEABLE NOARTICLE READABLE NODESC)\n\t(SYNONYM MAIL)\n\t(GENERIC GENERIC-MAIL)\n\t(MAIL-LETTER -1)\n\t(ACTION PARAMAIL-F)>",
   "referencedBy": []
  },
  "MAGAZINE": {
   "name": "MAGAZINE",
   "file": "paranoid.zil",
   "line": 1403,
   "endLine": 1412,
   "desc": "Popular Paranoia magazine",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE",
    "SURFACE"
   ],
   "synonyms": [
    "ZZZP",
    "MAGAZINE",
    "PERIODICAL",
    "PARANOIA",
    "BLURB",
    "MAG",
    "MAIL",
    "STICKER",
    "ADDRESS"
   ],
   "adjectives": [
    "POPULAR",
    "PARANOIA",
    "POSTAL",
    "SERVICE",
    "ORANGE"
   ],
   "action": "MAGAZINE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "MAIL-LETTER": [
     "0"
    ],
    "GENERIC": [
     "GENERIC-MAIL"
    ]
   },
   "contents": [],
   "source": "<OBJECT MAGAZINE\n\t(DESC \"Popular Paranoia magazine\")\n\t(FLAGS TAKEABLE READABLE SURFACE)\n\t(SIZE 3)\n\t(SYNONYM ZZZP MAGAZINE PERIODICAL PARANOIA BLURB MAG\n\t \t MAIL STICKER ADDRESS)\n\t(ADJECTIVE POPULAR PARANOIA POSTAL SERVICE ORANGE)\n\t(MAIL-LETTER 0)\n\t(GENERIC GENERIC-MAIL)\n\t(ACTION MAGAZINE-F)>",
   "referencedBy": []
  },
  "CAMERA": {
   "name": "CAMERA",
   "file": "paranoid.zil",
   "line": 1504,
   "endLine": 1509,
   "desc": "camera",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CAMERA"
   ],
   "adjectives": [
    "SPY",
    "HIDDEN",
    "WELL-HIDDEN"
   ],
   "action": "CAMERA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAMERA\n\t(LOC LOCAL-GLOBALS)\n\t(SYNONYM CAMERA)\n\t(ADJECTIVE SPY HIDDEN WELL-HIDDEN)\n\t(DESC \"camera\")\n\t(ACTION CAMERA-F)>",
   "referencedBy": []
  },
  "HELLO-OBJECT": {
   "name": "HELLO-OBJECT",
   "file": "parser.zil",
   "line": 548,
   "endLine": 553,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE"
   ],
   "synonyms": [
    "HELLO",
    "GOODBYE",
    "HI",
    "BYE"
   ],
   "adjectives": [],
   "action": "WAY-TO-TALK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HELLO-OBJECT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"that\")\n\t(FLAGS NODESC NOARTICLE)\n\t(SYNONYM HELLO GOODBYE HI BYE)\n\t(ACTION WAY-TO-TALK)>",
   "referencedBy": []
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "parser.zil",
   "line": 2963,
   "endLine": 2966,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NOARTICLE"
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
   "source": "<OBJECT NOT-HERE-OBJECT\n\t(DESC \"that\")\n\t(FLAGS NOARTICLE)\n\t(ACTION NOT-HERE-OBJECT-F)>",
   "referencedBy": []
  },
  "X-OBJECT": {
   "name": "X-OBJECT",
   "file": "parser.zil",
   "line": 3145,
   "endLine": 3145,
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
   "source": "<OBJECT X-OBJECT>",
   "referencedBy": []
  },
  "LLAMA": {
   "name": "LLAMA",
   "file": "people.zil",
   "line": 10,
   "endLine": 15,
   "desc": "llama",
   "ldesc": null,
   "fdesc": null,
   "loc": "LLAMA-PEN",
   "flags": [
    "LIVING",
    "PERSON",
    "FEMALE",
    "NODESC"
   ],
   "synonyms": [
    "LLAMA",
    "BEAST",
    "ANIMAL"
   ],
   "adjectives": [],
   "action": "LLAMA-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LLAMA\n\t(LOC LLAMA-PEN)\n\t(DESC \"llama\")\n\t(FLAGS LIVING PERSON FEMALE NODESC)\n\t(SYNONYM LLAMA BEAST ANIMAL)\n\t(ACTION LLAMA-F)>",
   "referencedBy": []
  },
  "CLERK": {
   "name": "CLERK",
   "file": "people.zil",
   "line": 57,
   "endLine": 65,
   "desc": "clerk",
   "ldesc": null,
   "fdesc": null,
   "loc": "BSTORE",
   "flags": [
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "CLERK",
    "SALESCLERK",
    "SALESMAN",
    "MAN",
    "GUY",
    "FELLOW"
   ],
   "adjectives": [
    "SALES"
   ],
   "action": "CLERK-F",
   "descfcn": "CLERK-F",
   "contfcn": "CLERK-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CLERK\n\t(LOC BSTORE)\n\t(DESC \"clerk\")\n\t(FLAGS LIVING PERSON)\n\t(SYNONYM CLERK SALESCLERK SALESMAN MAN GUY FELLOW)\n\t(ADJECTIVE SALES)\n\t(DESCFCN CLERK-F)\n\t(CONTFCN CLERK-F)\n\t(ACTION CLERK-F)>",
   "referencedBy": []
  },
  "WAITRESS": {
   "name": "WAITRESS",
   "file": "people.zil",
   "line": 277,
   "endLine": 283,
   "desc": "waitress",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LIVING",
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "WAITRESS",
    "WAITPERSON",
    "LADY",
    "WOMAN"
   ],
   "adjectives": [
    "HARRIED"
   ],
   "action": "WAITRESS-F",
   "descfcn": "WAITRESS-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WAITRESS\n\t(DESC \"waitress\")\n\t(FLAGS LIVING PERSON FEMALE)\n\t(SYNONYM WAITRESS WAITPERSON LADY WOMAN)\n\t(ADJECTIVE HARRIED)\n\t(DESCFCN WAITRESS-F)\n\t(ACTION WAITRESS-F)>",
   "referencedBy": []
  },
  "WAITER": {
   "name": "WAITER",
   "file": "people.zil",
   "line": 320,
   "endLine": 326,
   "desc": "waiter",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "WAITER",
    "WAITPERSON",
    "MAN",
    "GUY",
    "FELLOW"
   ],
   "adjectives": [
    "SURLY"
   ],
   "action": "WAITER-F",
   "descfcn": "WAITER-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WAITER\n\t(DESC \"waiter\")\n\t(FLAGS LIVING PERSON)\n\t(SYNONYM WAITER WAITPERSON MAN GUY FELLOW)\n\t(ADJECTIVE SURLY)\n\t(DESCFCN WAITER-F)\n\t(ACTION WAITER-F)>",
   "referencedBy": []
  },
  "AGENT": {
   "name": "AGENT",
   "file": "people.zil",
   "line": 412,
   "endLine": 419,
   "desc": "travel agent",
   "ldesc": null,
   "fdesc": null,
   "loc": "AGENCY",
   "flags": [
    "LIVING",
    "FEMALE",
    "PERSON",
    "NODESC"
   ],
   "synonyms": [
    "AGENT",
    "WOMAN",
    "LADY"
   ],
   "adjectives": [
    "TRAVEL"
   ],
   "action": "AGENT-F",
   "descfcn": null,
   "contfcn": "AGENT-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT AGENT\n\t(LOC AGENCY)\n\t(DESC \"travel agent\")\n\t(FLAGS LIVING FEMALE PERSON NODESC)\n\t(SYNONYM AGENT WOMAN LADY)\n\t(ADJECTIVE TRAVEL)\n\t(CONTFCN AGENT-F)\n\t(ACTION AGENT-F)>",
   "referencedBy": []
  },
  "CALIFORNIA": {
   "name": "CALIFORNIA",
   "file": "people.zil",
   "line": 431,
   "endLine": 435,
   "desc": "California",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NOARTICLE"
   ],
   "synonyms": [
    "CALIFORNIA"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CALIFORNIA\n\t(LOC GLOBAL-OBJECTS)\n\t(FLAGS NOARTICLE)\n\t(SYNONYM CALIFORNIA)\n\t(DESC \"California\")>",
   "referencedBy": []
  },
  "OPTOMETRISTS": {
   "name": "OPTOMETRISTS",
   "file": "people.zil",
   "line": 437,
   "endLine": 441,
   "desc": "optometrists",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "PLURAL",
    "VOWEL"
   ],
   "synonyms": [
    "OPTOMETRISTS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OPTOMETRISTS\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM OPTOMETRISTS)\n\t(FLAGS PLURAL VOWEL)\n\t(DESC \"optometrists\")>",
   "referencedBy": []
  },
  "MATRON": {
   "name": "MATRON",
   "file": "people.zil",
   "line": 614,
   "endLine": 622,
   "desc": "matron",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "LIVING",
    "PERSON",
    "FEMALE"
   ],
   "synonyms": [
    "MATRON",
    "WOMAN",
    "LADY"
   ],
   "adjectives": [
    "OLD",
    "AGED",
    "DEAF"
   ],
   "action": "MATRON-F",
   "descfcn": "MATRON-F",
   "contfcn": "MATRON-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "TRUMPET",
    "EGUN"
   ],
   "source": "<OBJECT MATRON\n\t(LOC TROPHY-ROOM)\n\t(DESC \"matron\")\n\t(FLAGS LIVING PERSON FEMALE)\n\t(SYNONYM MATRON WOMAN LADY)\n\t(ADJECTIVE OLD AGED DEAF)\n\t(CONTFCN MATRON-F)\n\t(DESCFCN MATRON-F)\n\t(ACTION MATRON-F)>",
   "referencedBy": []
  },
  "PMATRON": {
   "name": "PMATRON",
   "file": "people.zil",
   "line": 668,
   "endLine": 674,
   "desc": "matron",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "PERSON",
    "LIVING",
    "FEMALE"
   ],
   "synonyms": [
    "MATRON",
    "WOMAN",
    "LADY"
   ],
   "adjectives": [
    "OLD",
    "AGED"
   ],
   "action": "PMATRON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PMATRON\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"matron\")\n\t(FLAGS NODESC PERSON LIVING FEMALE)\n\t(SYNONYM MATRON WOMAN LADY)\n\t(ADJECTIVE OLD AGED)\n\t(ACTION PMATRON-F)>",
   "referencedBy": []
  },
  "MACAW": {
   "name": "MACAW",
   "file": "people.zil",
   "line": 694,
   "endLine": 699,
   "desc": "macaw",
   "ldesc": null,
   "fdesc": null,
   "loc": "PERCH",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "MACAW",
    "BIRD",
    "MERLIN"
   ],
   "adjectives": [],
   "action": "MACAW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MACAW\n\t(LOC PERCH)\n\t(DESC \"macaw\")\n\t(FLAGS TRYTAKE NOALL LIVING PERSON)\n\t(SYNONYM MACAW BIRD MERLIN)\n\t(ACTION MACAW-F)>",
   "referencedBy": []
  },
  "MOUSY": {
   "name": "MOUSY",
   "file": "people.zil",
   "line": 815,
   "endLine": 823,
   "desc": "mousy man",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-FLAT",
   "flags": [
    "LIVING",
    "PERSON"
   ],
   "synonyms": [
    "MAN",
    "GUY",
    "FELLOW",
    "MISTER",
    "COLLECTOR",
    "PHILATELIST"
   ],
   "adjectives": [
    "MOUSY",
    "LITTLE"
   ],
   "action": "MOUSY-F",
   "descfcn": "MOUSY-F",
   "contfcn": "MOUSY-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOUSY\n\t(LOC IN-FLAT)\n\t(DESC \"mousy man\")\n\t(FLAGS LIVING PERSON)\n\t(SYNONYM MAN GUY FELLOW MISTER COLLECTOR PHILATELIST)\n\t(ADJECTIVE MOUSY LITTLE)\n\t(DESCFCN MOUSY-F)\n\t(CONTFCN MOUSY-F)\n\t(ACTION MOUSY-F)>",
   "referencedBy": []
  },
  "DMAN": {
   "name": "DMAN",
   "file": "people.zil",
   "line": 914,
   "endLine": 921,
   "desc": "delivery man",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "LIVING",
    "PERSON",
    "SEEN"
   ],
   "synonyms": [
    "MAN",
    "GUY",
    "FELLOW"
   ],
   "adjectives": [
    "DELIVERY",
    "YOUNG"
   ],
   "action": "DMAN-F",
   "descfcn": "DMAN-F",
   "contfcn": "DMAN-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "BAG"
   ],
   "source": "<OBJECT DMAN\n\t(DESC \"delivery man\")\n\t(FLAGS LIVING PERSON SEEN)\n\t(SYNONYM MAN GUY FELLOW)\n\t(ADJECTIVE DELIVERY YOUNG)\n\t(DESCFCN DMAN-F)\n\t(CONTFCN DMAN-F)\n\t(ACTION DMAN-F)>",
   "referencedBy": []
  },
  "NERD-OBJECT": {
   "name": "NERD-OBJECT",
   "file": "people.zil",
   "line": 1147,
   "endLine": 1152,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP"
   ],
   "adjectives": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP"
   ],
   "action": "NERD-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-NERD-OBJECT"
    ]
   },
   "contents": [],
   "source": "<OBJECT NERD-OBJECT\n\t(FLAGS NODESC)\n\t(ADJECTIVE ZZZP ZZZP ZZZP ZZZP ZZZP ZZZP ZZZP)\n\t(SYNONYM ZZZP ZZZP ZZZP ZZZP ZZZP)\n\t(SDESC SDESC-NERD-OBJECT)\n\t(ACTION NERD-OBJECT-F)>",
   "referencedBy": []
  },
  "NERD": {
   "name": "NERD",
   "file": "people.zil",
   "line": 1274,
   "endLine": 1281,
   "desc": "nerd",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "PERSON",
    "LIVING"
   ],
   "synonyms": [
    "NERD",
    "GUY",
    "FELLOW",
    "MAN"
   ],
   "adjectives": [
    "NERDY",
    "NERDY-LOOKING",
    "YOUNG"
   ],
   "action": "NERD-F",
   "descfcn": "NERD-F",
   "contfcn": "NERD-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NERD\n\t(DESC \"nerd\")\n\t(FLAGS PERSON LIVING)\n\t(SYNONYM NERD GUY FELLOW MAN)\n\t(ADJECTIVE NERDY NERDY-LOOKING YOUNG)\n\t(CONTFCN NERD-F)\n\t(DESCFCN NERD-F)\n\t(ACTION NERD-F)>",
   "referencedBy": []
  },
  "FROOM": {
   "name": "FROOM",
   "file": "places.zil",
   "line": 49,
   "endLine": 64,
   "desc": "front room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "ROOM",
    "PARLOR"
   ],
   "adjectives": [
    "LIVING",
    "OTHER",
    "FRONT"
   ],
   "action": "FROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FROOM-DOOR",
    "YOUR-WINDOWS",
    "DOORBELL",
    "BROOM",
    "YOUR-HOUSE",
    "FROOM"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "EXIT-TO": [
     "OUTSIDE-HOUSE"
    ],
    "ENTER-FROM": [
     "<PTABLE P?WEST OUTSIDE-HOUSE>"
    ],
    "GENERIC": [
     "GENERIC-ROOM-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT FROOM\n\t(LOC ROOMS)\n\t(DESC \"front room\")\n\t(SYNONYM ROOM PARLOR)\n\t(ADJECTIVE LIVING OTHER FRONT)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(EXIT-TO OUTSIDE-HOUSE)\n\t(ENTER-FROM <PTABLE P?WEST OUTSIDE-HOUSE>)\n\t(EAST TO OUTSIDE-HOUSE)\n\t(OUT TO OUTSIDE-HOUSE)\n\t(IN PER INTO-HOUSE)\n\t(WEST PER INTO-HOUSE)\n\t(GLOBAL FROOM-DOOR YOUR-WINDOWS DOORBELL BROOM YOUR-HOUSE FROOM)\n\t(GENERIC GENERIC-ROOM-F)\n\t(ACTION FROOM-F)>",
   "referencedBy": []
  },
  "BROOM": {
   "name": "BROOM",
   "file": "places.zil",
   "line": 115,
   "endLine": 127,
   "desc": "back room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "BACK",
    "OTHER"
   ],
   "action": "BROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FROOM-DOOR",
    "YOUR-WINDOWS",
    "DOORBELL",
    "FROOM",
    "YOUR-HOUSE",
    "BROOM"
   ],
   "pseudo": [],
   "otherProps": {
    "EXIT-TO": [
     "FROOM"
    ],
    "ENTER-FROM": [
     "<PTABLE P?WEST FROOM>"
    ],
    "GENERIC": [
     "GENERIC-ROOM-F"
    ]
   },
   "contents": [
    "BTABLE",
    "MACHINE",
    "CABSOUND"
   ],
   "source": "<OBJECT BROOM\n\t(LOC ROOMS)\n\t(DESC \"back room\")\n\t(SYNONYM ROOM)\n\t(ADJECTIVE BACK OTHER)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(EXIT-TO FROOM)\n\t(ENTER-FROM <PTABLE P?WEST FROOM>)\n\t(EAST TO FROOM)\n\t(OUT TO FROOM)\n\t(GLOBAL FROOM-DOOR YOUR-WINDOWS DOORBELL FROOM YOUR-HOUSE BROOM)\n\t(GENERIC GENERIC-ROOM-F)\n\t(ACTION BROOM-F)>",
   "referencedBy": []
  },
  "OUTSIDE-HOUSE": {
   "name": "OUTSIDE-HOUSE",
   "file": "places.zil",
   "line": 160,
   "endLine": 175,
   "desc": "Street",
   "ldesc": "You're standing on a well-kept sidewalk to the east of your new house. The street bears north and south. There's an overgrown alleyway to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION",
    "NOARTICLE"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OUTSIDE-HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FROOM-DOOR",
    "YOUR-WINDOWS",
    "STREETNUMBERS",
    "GSTREET",
    "CAB",
    "CAB-DRIVER",
    "YOUR-HOUSE"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SAY-STREET-ADDRESS"
    ],
    "STADDR": [
     "69"
    ]
   },
   "contents": [
    "MAILBOX"
   ],
   "source": "<OBJECT OUTSIDE-HOUSE\n\t(LOC ROOMS)\n\t(DESC \"Street\")\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(SDESC SAY-STREET-ADDRESS)\n\t(FLAGS IN-TOWN LIGHTED LOCATION NOARTICLE)\n\t(NORTH TO ST-B)\n\t(EAST TO IN-ALLEY)\n\t(WEST TO FROOM IF FROOM-DOOR IS OPEN)\n\t(IN PER ENTER-FROM-OUTSIDE)\n\t(SOUTH TO OUTSIDE-MANSION)\n\t(GLOBAL FROOM-DOOR YOUR-WINDOWS STREETNUMBERS GSTREET\n\t \tCAB CAB-DRIVER YOUR-HOUSE)\n\t(STADDR 69)\n\t(LDESC \"You're standing on a well-kept sidewalk to the east of your new house. The street bears north and south. There's an overgrown alleyway to the east.\")\n\t(ACTION OUTSIDE-HOUSE-F)>",
   "referencedBy": []
  },
  "ST-A": {
   "name": "ST-A",
   "file": "places.zil",
   "line": 188,
   "endLine": 204,
   "desc": "Downtown",
   "ldesc": "This is the commercial district. You see a rather shabby brownstone tenement (obviously once a grand family house) to the east, and a travel agency (which is trying to look like a bank) to the west. The Fillmore Fiduciary Trust Bank (which is trying to look like a travel agency) lies to the north. The street continues south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION",
    "NOARTICLE"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CAB",
    "CAB-DRIVER",
    "STREETNUMBERS",
    "GSTREET",
    "THALL",
    "BANK",
    "AGENCY"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SAY-STREET-ADDRESS"
    ],
    "SEE-N": [
     "BANK"
    ],
    "SEE-E": [
     "THALL"
    ],
    "SEE-W": [
     "AGENCY"
    ],
    "STADDR": [
     "67"
    ]
   },
   "contents": [],
   "source": "<OBJECT ST-A\n\t(LOC ROOMS)\n\t(DESC \"Downtown\")\n\t(SDESC SAY-STREET-ADDRESS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(FLAGS IN-TOWN LIGHTED LOCATION NOARTICLE)\n\t(IN PER WHICH-WAY-IN)\n\t(SEE-N BANK)\n\t(SEE-E THALL)\n\t(SEE-W AGENCY)\n\t(NORTH PER TO-BANK)\n\t(EAST TO THALL)\n\t(SOUTH TO ST-B)\n\t(WEST PER ENTER-AGENCY)\n\t(GLOBAL CAB CAB-DRIVER STREETNUMBERS GSTREET THALL BANK AGENCY)\n\t(STADDR 67)\n\t(LDESC \"This is the commercial district. You see a rather shabby brownstone tenement (obviously once a grand family house) to the east, and a travel agency (which is trying to look like a bank) to the west. The Fillmore Fiduciary Trust Bank (which is trying to look like a travel agency) lies to the north. The street continues south.\")>",
   "referencedBy": []
  },
  "ST-B": {
   "name": "ST-B",
   "file": "places.zil",
   "line": 218,
   "endLine": 234,
   "desc": "Downtown",
   "ldesc": "You see a rather run-down restaurant to the east, and one of those bookstores which looks as if it wouldn't have anything you want to buy to the west. The street continues north and south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION",
    "NOARTICLE"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STREETNUMBERS",
    "GSTREET",
    "CAB",
    "CAB-DRIVER",
    "DINER",
    "BSTORE"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SAY-STREET-ADDRESS"
    ],
    "SEE-E": [
     "DINER"
    ],
    "SEE-W": [
     "BSTORE"
    ],
    "SEE-S": [
     "OUTSIDE-HOUSE"
    ],
    "STADDR": [
     "68"
    ]
   },
   "contents": [],
   "source": "<OBJECT ST-B\n\t(LOC ROOMS)\n\t(DESC \"Downtown\")\n\t(SDESC SAY-STREET-ADDRESS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(FLAGS IN-TOWN LIGHTED LOCATION NOARTICLE)\n\t(NORTH TO ST-A)\n\t(SEE-E DINER)\n\t(SEE-W BSTORE)\n\t(SEE-S OUTSIDE-HOUSE)\n\t(EAST PER ENTER-DINER)\n\t(WEST PER ENTER-SHOP)\n\t(SOUTH TO OUTSIDE-HOUSE)\n\t(IN PER WHICH-WAY-IN)\n\t(GLOBAL STREETNUMBERS GSTREET CAB CAB-DRIVER DINER BSTORE)\n\t(STADDR 68)\n\t(LDESC \"You see a rather run-down restaurant to the east, and one of those bookstores which looks as if it wouldn't have anything you want to buy to the west. The street continues north and south.\")>",
   "referencedBy": []
  },
  "IN-ALLEY": {
   "name": "IN-ALLEY",
   "file": "places.zil",
   "line": 266,
   "endLine": 280,
   "desc": "alley",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION",
    "VOWEL"
   ],
   "synonyms": [
    "ALLEY",
    "ALLEYWAY"
   ],
   "adjectives": [],
   "action": "IN-ALLEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "KITCHEN-DOOR",
    "FENCE"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "EXIT-TO": [
     "OUTSIDE-HOUSE"
    ],
    "ENTER-FROM": [
     "<PTABLE P?EAST OUTSIDE-HOUSE>"
    ]
   },
   "contents": [],
   "source": "<OBJECT IN-ALLEY\n\t(LOC ROOMS)\n\t(DESC \"alley\")\n\t(FLAGS IN-TOWN LIGHTED LOCATION VOWEL)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(SYNONYM ALLEY ALLEYWAY)\n\t(EXIT-TO OUTSIDE-HOUSE)\n\t(ENTER-FROM <PTABLE P?EAST OUTSIDE-HOUSE>)\n\t(NORTH TO DINER IF KITCHEN-DOOR IS OPEN)\n\t(EAST SORRY \"The fence blocks your path.\")\n\t(IN TO DINER IF KITCHEN-DOOR IS OPEN)\n\t(SOUTH PER IN-ALLEY-S)\n\t(WEST TO OUTSIDE-HOUSE)\n\t(GLOBAL KITCHEN-DOOR FENCE)\n\t(ACTION IN-ALLEY-F)>",
   "referencedBy": []
  },
  "AGENCY": {
   "name": "AGENCY",
   "file": "places.zil",
   "line": 320,
   "endLine": 333,
   "desc": "travel agency",
   "ldesc": "You're in a travel agency which is trying to look like a bank. The exit is to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "AGENCY",
    "BUILDING"
   ],
   "adjectives": [
    "TRAVEL"
   ],
   "action": "AGENCY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "ENTER-FROM": [
     "<PTABLE P?WEST ST-A>"
    ],
    "EXIT-TO": [
     "ST-A"
    ]
   },
   "contents": [
    "VISA-SIGN",
    "AGENT",
    "AGENCY-DESK"
   ],
   "source": "<OBJECT AGENCY\n\t(LOC ROOMS)\n\t(DESC \"travel agency\")\n\t(SYNONYM AGENCY BUILDING)\n\t(ADJECTIVE TRAVEL)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(ENTER-FROM <PTABLE P?WEST ST-A>)\n\t(EXIT-TO ST-A)\n\t(OUT TO ST-A)\n\t(EAST TO ST-A)\n\t(IN SORRY \"You're already inside as far as you can go.\")\n\t(LDESC \"You're in a travel agency which is trying to look like a bank. The exit is to the east.\")\n\t(ACTION AGENCY-F)>",
   "referencedBy": []
  },
  "BSTORE": {
   "name": "BSTORE",
   "file": "places.zil",
   "line": 414,
   "endLine": 425,
   "desc": "bookshop",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "BOOKSTORE",
    "STORE",
    "BOOKSHOP",
    "SHOP",
    "BUILDING"
   ],
   "adjectives": [
    "BOOK"
   ],
   "action": "BSTORE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "ENTER-FROM": [
     "<PTABLE P?WEST ST-B>"
    ],
    "EXIT-TO": [
     "ST-B"
    ]
   },
   "contents": [
    "CLERK",
    "SHELVES",
    "SOFTWARE",
    "REGISTER"
   ],
   "source": "<OBJECT BSTORE\n\t(LOC ROOMS)\n\t(DESC \"bookshop\")\n\t(SYNONYM BOOKSTORE STORE BOOKSHOP SHOP BUILDING)\n\t(ADJECTIVE BOOK)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(ENTER-FROM <PTABLE P?WEST ST-B>)\n\t(EXIT-TO ST-B)\n\t(OUT TO ST-B)\n\t(EAST TO ST-B)\n\t(ACTION BSTORE-F)>",
   "referencedBy": []
  },
  "DINER": {
   "name": "DINER",
   "file": "places.zil",
   "line": 472,
   "endLine": 486,
   "desc": "restaurant",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "RESTAURANT",
    "DINER",
    "MILLIE'S"
   ],
   "adjectives": [
    "MILLIE'S"
   ],
   "action": "DINER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FOOD",
    "KITCHEN-DOOR"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "ODOR": [
     "BURGER"
    ],
    "EXIT-TO": [
     "ST-B"
    ],
    "ENTER-FROM": [
     "<PTABLE P?EAST ST-B>"
    ]
   },
   "contents": [
    "DTABLE"
   ],
   "source": "<OBJECT DINER\n\t(LOC ROOMS)\n\t(DESC \"restaurant\")\n\t(SYNONYM RESTAURANT DINER MILLIE\\'S)\n\t(ADJECTIVE MILLIE\\'S)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(ODOR BURGER)\n\t(GLOBAL FOOD KITCHEN-DOOR)\n\t(EXIT-TO ST-B)\n\t(ENTER-FROM <PTABLE P?EAST ST-B>)\n\t(WEST TO ST-B)\n\t(OUT TO ST-B)\n\t(SOUTH PER LEAVE-BY-BACK-DOOR)\n\t(ACTION DINER-F)>",
   "referencedBy": []
  },
  "FOOD": {
   "name": "FOOD",
   "file": "places.zil",
   "line": 561,
   "endLine": 567,
   "desc": "your meal",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "NOARTICLE"
   ],
   "synonyms": [
    "FOOD",
    "HAMBURGER",
    "BURGER",
    "SANDWICH",
    "MEAL",
    "FRIES",
    "DRINK",
    "BEER",
    "WINE",
    "SODA"
   ],
   "adjectives": [],
   "action": "FOOD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOOD\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"your meal\")\n\t(FLAGS NODESC NOARTICLE)\n\t(SYNONYM FOOD HAMBURGER BURGER SANDWICH MEAL FRIES\n\t DRINK BEER WINE SODA)\n\t(ACTION FOOD-F)>",
   "referencedBy": []
  },
  "KITCHEN-DOOR": {
   "name": "KITCHEN-DOOR",
   "file": "places.zil",
   "line": 616,
   "endLine": 622,
   "desc": "back door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "BACK"
   ],
   "action": "KITCHEN-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KITCHEN-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"back door\")\n\t(FLAGS NODESC DOORLIKE OPENABLE)\n\t(SYNONYM DOOR DOORWAY)\n\t(ADJECTIVE CLOSED SHUT BACK)\n\t(ACTION KITCHEN-DOOR-F)>",
   "referencedBy": []
  },
  "OUTSIDE-FARM": {
   "name": "OUTSIDE-FARM",
   "file": "places.zil",
   "line": 652,
   "endLine": 665,
   "desc": "Street",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION",
    "NOARTICLE"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "OUTSIDE-FARM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FARM-DOOR",
    "STREETNUMBERS",
    "GSTREET",
    "CAB",
    "CAB-DRIVER",
    "IN-FARM"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SAY-STREET-ADDRESS"
    ],
    "STADDR": [
     "71"
    ]
   },
   "contents": [
    "PEN-MAILBOX",
    "LLAMA-PEN",
    "LFENCE",
    "FARM-NOTICE",
    "PAPERS"
   ],
   "source": "<OBJECT OUTSIDE-FARM\n\t(LOC ROOMS)\n\t(DESC \"Street\")\n\t(SDESC SAY-STREET-ADDRESS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(FLAGS IN-TOWN LIGHTED LOCATION NOARTICLE)\n\t(NORTH PER OUTSIDE-FARM-N)\n\t(WEST TO IN-FARM IF FARM-DOOR IS OPEN)\n\t(EAST SORRY \"You have no objection to having your path blocked by such nice trees. You also have no choice.\")\n\t(IN TO IN-FARM IF FARM-DOOR IS OPEN)\n\t(SOUTH PER OUTSIDE-FARM-S)\n\t(GLOBAL FARM-DOOR STREETNUMBERS GSTREET CAB CAB-DRIVER IN-FARM)\n\t(STADDR 71)\n\t(ACTION OUTSIDE-FARM-F)>",
   "referencedBy": []
  },
  "IN-FARM": {
   "name": "IN-FARM",
   "file": "places.zil",
   "line": 712,
   "endLine": 724,
   "desc": "farmhouse",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "FARM",
    "FARMHOUSE",
    "HOUSE"
   ],
   "adjectives": [
    "FARM"
   ],
   "action": "IN-FARM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FARM-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "EXIT-TO": [
     "OUTSIDE-FARM"
    ],
    "ENTER-FROM": [
     "<PTABLE P?WEST OUTSIDE-FARM>"
    ]
   },
   "contents": [],
   "source": "<OBJECT IN-FARM\n\t(LOC ROOMS)\n\t(DESC \"farmhouse\")\n\t(SYNONYM FARM FARMHOUSE HOUSE)\n\t(ADJECTIVE FARM)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(EXIT-TO OUTSIDE-FARM)\n\t(ENTER-FROM <PTABLE P?WEST OUTSIDE-FARM>)\n\t(EAST TO OUTSIDE-FARM)\n\t(OUT TO OUTSIDE-FARM)\n\t(IN SORRY \"You're already inside as far as you can go.\")\n\t(GLOBAL FARM-DOOR)\n\t(ACTION IN-FARM-F)>",
   "referencedBy": []
  },
  "OUTSIDE-MANSION": {
   "name": "OUTSIDE-MANSION",
   "file": "places.zil",
   "line": 781,
   "endLine": 800,
   "desc": "Street",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "LIGHTED",
    "LOCATION",
    "NOARTICLE"
   ],
   "synonyms": [
    "MANSION",
    "HOUSE",
    "HOME",
    "BUILDING",
    "NOARTICLE"
   ],
   "adjectives": [
    "DILAPIDATED",
    "OLD"
   ],
   "action": "OUTSIDE-MANSION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MANSION-DOOR",
    "STREETNUMBERS",
    "GSTREET",
    "RADIO",
    "CAB",
    "CAB-DRIVER"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "SDESC": [
     "SAY-STREET-ADDRESS"
    ],
    "SEE-E": [
     "OUTSIDE-MANSION"
    ],
    "SEE-S": [
     "OUTSIDE-FARM"
    ],
    "SEE-N": [
     "OUTSIDE-HOUSE"
    ],
    "HEAR": [
     "RADIO"
    ],
    "STADDR": [
     "70"
    ]
   },
   "contents": [
    "MANSION-BELL"
   ],
   "source": "<OBJECT OUTSIDE-MANSION\n\t(LOC ROOMS)\n\t(DESC \"Street\")\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(SYNONYM MANSION HOUSE HOME BUILDING NOARTICLE)\n\t(ADJECTIVE DILAPIDATED OLD)\n\t(SDESC SAY-STREET-ADDRESS)\n\t(FLAGS IN-TOWN LIGHTED LOCATION NOARTICLE)\n\t(NORTH TO OUTSIDE-HOUSE)\n\t(SEE-E OUTSIDE-MANSION)\n\t(SEE-S OUTSIDE-FARM)\n\t(SEE-N OUTSIDE-HOUSE)\n\t(WEST SORRY \"Trees block your path.\")\n\t(SOUTH TO OUTSIDE-FARM)\n\t(EAST PER ENTER-MANSION)\n\t(IN PER ENTER-MANSION)\n\t(GLOBAL MANSION-DOOR STREETNUMBERS GSTREET RADIO CAB CAB-DRIVER)\n\t(HEAR RADIO)\n\t(STADDR 70)\n\t(ACTION OUTSIDE-MANSION-F)>",
   "referencedBy": []
  },
  "FENCE": {
   "name": "FENCE",
   "file": "places.zil",
   "line": 862,
   "endLine": 868,
   "desc": "fence",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "FENCE",
    "GAP"
   ],
   "adjectives": [
    "TALL"
   ],
   "action": "FENCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FENCE\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"fence\")\n\t(ACTION FENCE-F)\n\t(SYNONYM FENCE GAP)\n\t(ADJECTIVE TALL)\n\t(FLAGS NODESC)>",
   "referencedBy": []
  },
  "BEHIND-MANSION": {
   "name": "BEHIND-MANSION",
   "file": "places.zil",
   "line": 884,
   "endLine": 897,
   "desc": "behind mansion",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BEHIND-MANSION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PORCH-DOOR",
    "FENCE",
    "RADIO"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "EXIT-TO": [
     "IN-ALLEY"
    ],
    "HEAR": [
     "RADIO"
    ]
   },
   "contents": [],
   "source": "<OBJECT BEHIND-MANSION\n\t(LOC ROOMS)\n\t(DESC \"behind mansion\")\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(EXIT-TO IN-ALLEY)\n\t(NORTH PER BEHIND-MANSION-N)\n\t(EAST SORRY \"The fence blocks your path.\")\n\t(IN TO IN-PORCH IF PORCH-DOOR IS OPEN)\n\t(SOUTH SORRY \"The fence blocks your path.\")\n\t(WEST TO IN-PORCH IF PORCH-DOOR IS OPEN)\n\t(GLOBAL PORCH-DOOR FENCE RADIO)\n\t(HEAR RADIO)\n\t(ACTION BEHIND-MANSION-F)>",
   "referencedBy": []
  },
  "IN-PORCH": {
   "name": "IN-PORCH",
   "file": "places.zil",
   "line": 914,
   "endLine": 928,
   "desc": "porch",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "PORCH"
   ],
   "adjectives": [],
   "action": "IN-PORCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PORCH-DOOR",
    "PMATRON",
    "RADIO"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "EXIT-TO": [
     "BEHIND-MANSION"
    ],
    "ENTER-FROM": [
     "<PTABLE P?WEST BEHIND-MANSION>"
    ],
    "HEAR": [
     "RADIO"
    ]
   },
   "contents": [
    "PERCH",
    "UNDER-PERCH"
   ],
   "source": "<OBJECT IN-PORCH\n\t(LOC ROOMS)\n\t(DESC \"porch\")\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(SYNONYM PORCH)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(EXIT-TO BEHIND-MANSION)\n\t(ENTER-FROM <PTABLE P?WEST BEHIND-MANSION>)\n\t(OUT TO BEHIND-MANSION IF PORCH-DOOR IS OPEN)\n\t(EAST TO BEHIND-MANSION IF PORCH-DOOR IS OPEN)\n\t(IN TO TROPHY-ROOM)\n\t(SOUTH TO TROPHY-ROOM)\n\t(GLOBAL PORCH-DOOR PMATRON RADIO)\n\t(HEAR RADIO)\n\t(ACTION IN-PORCH-F)>",
   "referencedBy": []
  },
  "TROPHY-ROOM": {
   "name": "TROPHY-ROOM",
   "file": "places.zil",
   "line": 982,
   "endLine": 997,
   "desc": "trophy room",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "ROOM"
   ],
   "adjectives": [
    "TROPHY"
   ],
   "action": "TROPHY-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "MHALL",
    "PMATRON",
    "RADIO",
    "MANSION-DOOR"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "EXIT-TO": [
     "IN-PORCH"
    ],
    "ENTER-FROM": [
     "<PTABLE P?SOUTH IN-PORCH>"
    ],
    "HEAR": [
     "RADIO"
    ]
   },
   "contents": [
    "MATRON",
    "PAINTING"
   ],
   "source": "<OBJECT TROPHY-ROOM\n\t(LOC ROOMS)\n\t(DESC \"trophy room\")\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(EXIT-TO IN-PORCH)\n\t(ENTER-FROM <PTABLE P?SOUTH IN-PORCH>)\n\t(SYNONYM ROOM)\n\t(ADJECTIVE TROPHY)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(OUT TO IN-PORCH)\n\t(NORTH TO IN-PORCH)\n\t(WEST SORRY \"Come off it. Just look at that elephant gun. (By the way, what would an elephant be doing with a gun?)\")\n\t(IN PER WHICH-WAY-IN)\n\t(GLOBAL MHALL PMATRON RADIO MANSION-DOOR)\n\t(HEAR RADIO)\n\t(ACTION TROPHY-ROOM-F)>",
   "referencedBy": []
  },
  "THALL": {
   "name": "THALL",
   "file": "places.zil",
   "line": 1033,
   "endLine": 1046,
   "desc": "hallway",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [
    "HALLWAY",
    "HALL",
    "CORRIDOR",
    "TENEMENT",
    "BUILDING",
    "TENEMENTS"
   ],
   "adjectives": [],
   "action": "THALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TEN-STAIR",
    "FLAT-DOOR",
    "FLAT"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "EXIT-TO": [
     "ST-A"
    ]
   },
   "contents": [],
   "source": "<OBJECT THALL\n\t(LOC ROOMS)\n\t(DESC \"hallway\")\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(EXIT-TO ST-A)\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(UP PER THALL-U)\n\t(OUT TO ST-A)\n\t(WEST TO ST-A)\n\t(SOUTH TO IN-FLAT IF FLAT-DOOR IS OPEN)\n\t(IN TO IN-FLAT IF FLAT-DOOR IS OPEN)\n\t(GLOBAL TEN-STAIR FLAT-DOOR FLAT)\n\t(SYNONYM HALLWAY HALL CORRIDOR TENEMENT BUILDING TENEMENTS)\n\t(ACTION THALL-F)>",
   "referencedBy": []
  },
  "IN-FLAT": {
   "name": "IN-FLAT",
   "file": "places.zil",
   "line": 1070,
   "endLine": 1080,
   "desc": "flat",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "IN-TOWN",
    "NO-NERD",
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-FLAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "FLAT",
    "FLAT-DOOR",
    "THALL"
   ],
   "pseudo": [
    "PARSE-RANDOM-LOC-VEC"
   ],
   "otherProps": {
    "EXIT-TO": [
     "THALL"
    ]
   },
   "contents": [
    "MOUSY",
    "STAMPS",
    "STAMP-TABLE",
    "MOUSYMAIL"
   ],
   "source": "<OBJECT IN-FLAT\n\t(LOC ROOMS)\n\t(DESC \"flat\")\n\t(FLAGS IN-TOWN NO-NERD LIGHTED LOCATION INDOORS)\n\t(THINGS PARSE-RANDOM-LOC-VEC)\n\t(EXIT-TO THALL)\n\t(OUT TO THALL IF FLAT-DOOR IS OPEN)\n\t(NORTH TO THALL IF FLAT-DOOR IS OPEN)\n\t(IN SORRY \"You're already in as far as you want to go, and as far as we'll let you.\")\n\t(GLOBAL FLAT FLAT-DOOR THALL)\n\t(ACTION IN-FLAT-F)>",
   "referencedBy": []
  },
  "DEATH": {
   "name": "DEATH",
   "file": "places.zil",
   "line": 1114,
   "endLine": 1118,
   "desc": "Death",
   "ldesc": "You are dead.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "NO-NERD",
    "LIGHTED",
    "LOCATION"
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
   "source": "<OBJECT DEATH\n\t(LOC ROOMS)\n\t(DESC \"Death\")\n\t(FLAGS NO-NERD LIGHTED LOCATION)\n\t(LDESC \"You are dead.\")>",
   "referencedBy": []
  },
  "QUEEN-MUM": {
   "name": "QUEEN-MUM",
   "file": "things.zil",
   "line": 10,
   "endLine": 15,
   "desc": "Queen Mum",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NOARTICLE",
    "NODESC"
   ],
   "synonyms": [
    "MUM"
   ],
   "adjectives": [
    "QUEEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT QUEEN-MUM\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"Queen Mum\")\n\t(FLAGS NOARTICLE NODESC)\n\t(SYNONYM MUM)\n\t(ADJECTIVE QUEEN)>",
   "referencedBy": []
  },
  "FROOM-DOOR": {
   "name": "FROOM-DOOR",
   "file": "things.zil",
   "line": 17,
   "endLine": 24,
   "desc": "front door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "FRONT"
   ],
   "action": "FROOM-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GDOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT FROOM-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"front door\")\n\t(FLAGS NODESC DOORLIKE OPENABLE)\n\t(SYNONYM DOOR DOORWAY)\n\t(ADJECTIVE CLOSED SHUT FRONT)\n\t(GENERIC GDOOR-F)\n\t(ACTION FROOM-DOOR-F)>",
   "referencedBy": []
  },
  "DOORBELL": {
   "name": "DOORBELL",
   "file": "things.zil",
   "line": 74,
   "endLine": 80,
   "desc": "doorbell",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "DOORBELL",
    "BELL"
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
   "source": "<OBJECT DOORBELL\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"doorbell\")\n\t(FLAGS NODESC)\n\t(SYNONYM DOORBELL BELL)\n\t(ADJECTIVE DOOR)\n\t(ACTION DOORBELL-F)>",
   "referencedBy": []
  },
  "GSTREET": {
   "name": "GSTREET",
   "file": "things.zil",
   "line": 109,
   "endLine": 114,
   "desc": "street",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "STREET",
    "ROAD"
   ],
   "adjectives": [],
   "action": "HERE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GSTREET\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"street\")\n\t(FLAGS NODESC)\n\t(SYNONYM STREET ROAD)\n\t(ACTION HERE-F)>",
   "referencedBy": []
  },
  "WRISTWATCH": {
   "name": "WRISTWATCH",
   "file": "things.zil",
   "line": 116,
   "endLine": 124,
   "desc": "digital wristwatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEABLE",
    "CLOTHING",
    "WORN"
   ],
   "synonyms": [
    "WRISTWATCH",
    "WATCH",
    "CLOCK",
    "TIME"
   ],
   "adjectives": [
    "WRIST",
    "MY",
    "DIGITAL"
   ],
   "action": "WRISTWATCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "GENERIC": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT WRISTWATCH\n\t(LOC PLAYER)\n\t(DESC \"digital wristwatch\")\n\t(FLAGS TAKEABLE CLOTHING WORN)\n\t(SYNONYM WRISTWATCH WATCH CLOCK TIME)\n\t(ADJECTIVE WRIST MY DIGITAL)\n\t(SIZE 1)\n\t(GENERIC 0)\n\t(ACTION WRISTWATCH-F)>",
   "referencedBy": []
  },
  "YOUR-HOUSE": {
   "name": "YOUR-HOUSE",
   "file": "things.zil",
   "line": 156,
   "endLine": 163,
   "desc": "your new house",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "PLACE"
   ],
   "synonyms": [
    "HOUSE",
    "HOME"
   ],
   "adjectives": [
    "MY",
    "MINE",
    "YOUR",
    "NEW",
    "BIG"
   ],
   "action": "YOUR-HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-YOUR-HOUSES-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT YOUR-HOUSE\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"your new house\")\n\t(FLAGS NODESC NOARTICLE PLACE)\n\t(SYNONYM HOUSE HOME)\n\t(ADJECTIVE MY MINE YOUR NEW BIG)\n\t(GENERIC GENERIC-YOUR-HOUSES-F)\n\t(ACTION YOUR-HOUSE-F)>",
   "referencedBy": []
  },
  "OLD-HOUSE": {
   "name": "OLD-HOUSE",
   "file": "things.zil",
   "line": 188,
   "endLine": 195,
   "desc": "your old house",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "PLACE"
   ],
   "synonyms": [
    "HOUSE",
    "HOME"
   ],
   "adjectives": [
    "MY",
    "MINE",
    "YOUR",
    "OLD",
    "PREVIOUS"
   ],
   "action": "OLD-HOUSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-YOUR-HOUSES-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT OLD-HOUSE\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"your old house\")\n\t(FLAGS NODESC NOARTICLE PLACE)\n\t(SYNONYM HOUSE HOME)\n\t(ADJECTIVE MY MINE YOUR OLD PREVIOUS)\n\t(GENERIC GENERIC-YOUR-HOUSES-F)\n\t(ACTION OLD-HOUSE-F)>\t\t",
   "referencedBy": []
  },
  "YOUR-WINDOWS": {
   "name": "YOUR-WINDOWS",
   "file": "things.zil",
   "line": 204,
   "endLine": 210,
   "desc": "window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "WINDOW",
    "WINDOWS",
    "PANE"
   ],
   "adjectives": [
    "WINDOW"
   ],
   "action": "YOUR-WINDOWS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT YOUR-WINDOWS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"window\")\n\t(FLAGS NODESC)\n\t(SYNONYM WINDOW WINDOWS PANE)\n\t(ADJECTIVE WINDOW)\n\t(ACTION YOUR-WINDOWS-F)>",
   "referencedBy": []
  },
  "LANDF-DOOR": {
   "name": "LANDF-DOOR",
   "file": "things.zil",
   "line": 254,
   "endLine": 260,
   "desc": "office doorway",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "VOWEL"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY"
   ],
   "adjectives": [
    "OFFICE"
   ],
   "action": "LANDF-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LANDF-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"office doorway\")\n\t(FLAGS NODESC VOWEL)\n\t(SYNONYM DOOR DOORWAY)\n\t(ADJECTIVE OFFICE)\n\t(ACTION LANDF-DOOR-F)>",
   "referencedBy": []
  },
  "BTABLE": {
   "name": "BTABLE",
   "file": "things.zil",
   "line": 274,
   "endLine": 280,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "BROOM",
   "flags": [
    "NOALL",
    "TRYTAKE",
    "SURFACE"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [],
   "action": "BTABLE-F",
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
    "VISA",
    "HACKSAW",
    "LETTER",
    "COMPUTER",
    "ROMCASE",
    "ABOOK"
   ],
   "source": "<OBJECT BTABLE\n\t(LOC BROOM)\n\t(DESC \"table\")\n\t(FLAGS NOALL TRYTAKE SURFACE)\n\t(CAPACITY 50)\n\t(SYNONYM TABLE)\n\t(ACTION BTABLE-F)>",
   "referencedBy": []
  },
  "WALLET": {
   "name": "WALLET",
   "file": "things.zil",
   "line": 291,
   "endLine": 299,
   "desc": "wallet",
   "ldesc": null,
   "fdesc": null,
   "loc": "POCKET",
   "flags": [
    "TAKEABLE",
    "CONTAINER",
    "OPENABLE",
    "SEARCH-ME",
    "OPENED"
   ],
   "synonyms": [
    "WALLET",
    "BILLFOLD"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "MY",
    "TACKY",
    "FLAKY"
   ],
   "action": "WALLET-F",
   "descfcn": null,
   "contfcn": "IN-WALLET",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [
    "BEEZER",
    "EXCESS"
   ],
   "source": "<OBJECT WALLET\n\t(LOC POCKET)\n\t(DESC \"wallet\")\n\t(FLAGS TAKEABLE CONTAINER OPENABLE SEARCH-ME OPENED)\n\t(SYNONYM WALLET BILLFOLD)\n\t(ADJECTIVE CLOSED SHUT MY TACKY FLAKY)\n\t(CAPACITY 1)\n\t(ACTION WALLET-F)\n\t(CONTFCN IN-WALLET)>",
   "referencedBy": []
  },
  "BEEZER": {
   "name": "BEEZER",
   "file": "things.zil",
   "line": 325,
   "endLine": 333,
   "desc": "Beezer card",
   "ldesc": null,
   "fdesc": null,
   "loc": "WALLET",
   "flags": [
    "READABLE",
    "TAKEABLE"
   ],
   "synonyms": [
    "CARD",
    "BEEZER",
    "CARDS"
   ],
   "adjectives": [
    "BEEZER",
    "CREDIT",
    "PLASTIC",
    "YOUR",
    "MY"
   ],
   "action": "BEEZER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "0"
    ],
    "GENERIC": [
     "GENERIC-CARD-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT BEEZER\n\t(LOC WALLET)\n\t(DESC \"Beezer card\")\n\t(FLAGS READABLE TAKEABLE)\n\t(SIZE 0)\n\t(SYNONYM CARD BEEZER CARDS)\n\t(ADJECTIVE BEEZER CREDIT PLASTIC YOUR MY)\n\t(GENERIC GENERIC-CARD-F)\n\t(ACTION BEEZER-F)>",
   "referencedBy": []
  },
  "EXCESS": {
   "name": "EXCESS",
   "file": "things.zil",
   "line": 365,
   "endLine": 373,
   "desc": "US Excess card",
   "ldesc": null,
   "fdesc": null,
   "loc": "WALLET",
   "flags": [
    "READABLE",
    "TAKEABLE"
   ],
   "synonyms": [
    "CARD",
    "CARDS",
    "EXCESS",
    "HOLOGRAM",
    "YAK"
   ],
   "adjectives": [
    "US",
    "EXCESS",
    "CREDIT",
    "PLASTIC",
    "YAK",
    "YOUR",
    "MY"
   ],
   "action": "EXCESS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "0"
    ],
    "GENERIC": [
     "GENERIC-CARD-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT EXCESS\n\t(LOC WALLET)\n\t(DESC \"US Excess card\")\n\t(FLAGS READABLE TAKEABLE)\n\t(SIZE 0)\n\t(SYNONYM CARD CARDS EXCESS HOLOGRAM YAK)\n\t(ADJECTIVE US EXCESS CREDIT PLASTIC YAK YOUR MY)\n\t(GENERIC GENERIC-CARD-F)\n\t(ACTION EXCESS-F)>",
   "referencedBy": []
  },
  "LETTER": {
   "name": "LETTER",
   "file": "things.zil",
   "line": 399,
   "endLine": 405,
   "desc": "letter",
   "ldesc": null,
   "fdesc": null,
   "loc": "BTABLE",
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "LETTER",
    "PAPER",
    "PIECE"
   ],
   "adjectives": [],
   "action": "LETTER-F",
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
   "source": "<OBJECT LETTER\n\t(LOC BTABLE)\n\t(DESC \"letter\")\n\t(FLAGS TAKEABLE READABLE)\n\t(SIZE 1)\n\t(SYNONYM LETTER PAPER PIECE)\n\t(ACTION LETTER-F)>",
   "referencedBy": []
  },
  "COMPUTER": {
   "name": "COMPUTER",
   "file": "things.zil",
   "line": 423,
   "endLine": 432,
   "desc": "your Boysenberry computer",
   "ldesc": null,
   "fdesc": null,
   "loc": "BTABLE",
   "flags": [
    "TAKEABLE",
    "NOARTICLE",
    "CONTAINER",
    "OPENED"
   ],
   "synonyms": [
    "COMPUTER",
    "BOYSENBERRY",
    "SLOT",
    "SCREEN",
    "KEYBOARD",
    "JACK"
   ],
   "adjectives": [
    "BOYSENBERRY",
    "MY",
    "MODULAR",
    "LAPTOP"
   ],
   "action": "COMPUTER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ],
    "CAPACITY": [
     "0"
    ],
    "GENERIC": [
     "JACK-GENERIC"
    ]
   },
   "contents": [],
   "source": "<OBJECT COMPUTER\n\t(LOC BTABLE)\n\t(DESC \"your Boysenberry computer\")\n\t(FLAGS TAKEABLE NOARTICLE CONTAINER OPENED)\n\t(SIZE 5)\n\t(CAPACITY 0)\n\t(GENERIC JACK-GENERIC)\n\t(SYNONYM COMPUTER BOYSENBERRY SLOT SCREEN KEYBOARD JACK)\n\t(ADJECTIVE BOYSENBERRY MY MODULAR LAPTOP)\n\t(ACTION COMPUTER-F)>",
   "referencedBy": []
  },
  "MPLUG": {
   "name": "MPLUG",
   "file": "things.zil",
   "line": 572,
   "endLine": 577,
   "desc": "modular plug",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "PLUG"
   ],
   "adjectives": [
    "MODULAR"
   ],
   "action": "MPLUG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GEN-SAW-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MPLUG\n\t(DESC \"modular plug\")\n\t(SYNONYM PLUG)\n\t(ADJECTIVE MODULAR)\n\t(GENERIC GEN-SAW-F)\n\t(ACTION MPLUG-F)>",
   "referencedBy": []
  },
  "ECLIPSE": {
   "name": "ECLIPSE",
   "file": "things.zil",
   "line": 655,
   "endLine": 663,
   "desc": "eclipse predicting cartridge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROMCASE",
   "flags": [
    "TAKEABLE",
    "PROGRAM",
    "VOWEL"
   ],
   "synonyms": [
    "CARTRIDGE",
    "CART",
    "CARTS",
    "ROM",
    "PROGRAM",
    "SOFTWARE",
    "PREDICTOR"
   ],
   "adjectives": [
    "ECLIPSE",
    "PREDICTION",
    "PREDICTOR",
    "PROGRAM",
    "ROM",
    "SOFTWARE"
   ],
   "action": "ECLIPSE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "GENERIC-SOFTWARE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT ECLIPSE\n\t(LOC ROMCASE)\n\t(DESC \"eclipse predicting cartridge\")\n\t(FLAGS TAKEABLE PROGRAM VOWEL)\n\t(SIZE 2)\n\t(SYNONYM CARTRIDGE CART CARTS ROM PROGRAM SOFTWARE PREDICTOR)\n\t(ADJECTIVE ECLIPSE PREDICTION PREDICTOR PROGRAM ROM SOFTWARE)\n\t(GENERIC GENERIC-SOFTWARE-F)\n\t(ACTION ECLIPSE-F)>",
   "referencedBy": []
  },
  "RECIPE": {
   "name": "RECIPE",
   "file": "things.zil",
   "line": 671,
   "endLine": 678,
   "desc": "recipe cartridge",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "PROGRAM"
   ],
   "synonyms": [
    "CARTRIDGE",
    "CART",
    "CARTS",
    "ROM",
    "PROGRAM",
    "SOFTWARE"
   ],
   "adjectives": [
    "RECIPE",
    "PROGRAM",
    "ROM",
    "SOFTWARE",
    "RECIPES"
   ],
   "action": "RECIPE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "GENERIC-SOFTWARE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT RECIPE\n\t(DESC \"recipe cartridge\")\n\t(FLAGS TAKEABLE PROGRAM)\n\t(SIZE 2)\n\t(SYNONYM CARTRIDGE CART CARTS ROM PROGRAM SOFTWARE)\n\t(ADJECTIVE RECIPE PROGRAM ROM SOFTWARE RECIPES)\n\t(GENERIC GENERIC-SOFTWARE-F)\n\t(ACTION RECIPE-F)>",
   "referencedBy": []
  },
  "ADVENTURE": {
   "name": "ADVENTURE",
   "file": "things.zil",
   "line": 734,
   "endLine": 742,
   "desc": "adventure game cartridge",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROMCASE",
   "flags": [
    "TAKEABLE",
    "PROGRAM",
    "VOWEL"
   ],
   "synonyms": [
    "ADVENTURE",
    "GAME",
    "CARTRIDGE",
    "CART",
    "CARTS",
    "PROGRAM",
    "ROM",
    "SOFTWARE"
   ],
   "adjectives": [
    "ADVENTURE",
    "GAME",
    "PROGRAM",
    "ROM",
    "SOFTWARE"
   ],
   "action": "ADVENTURE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "GENERIC-SOFTWARE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT ADVENTURE\n\t(LOC ROMCASE)\n\t(DESC \"adventure game cartridge\")\n\t(FLAGS TAKEABLE PROGRAM VOWEL)\n\t(SIZE 2)\n\t(SYNONYM ADVENTURE GAME CARTRIDGE CART CARTS PROGRAM ROM SOFTWARE)\n\t(ADJECTIVE ADVENTURE GAME PROGRAM ROM SOFTWARE)\n\t(GENERIC GENERIC-SOFTWARE-F)\n\t(ACTION ADVENTURE-F)>",
   "referencedBy": []
  },
  "ROMCASE": {
   "name": "ROMCASE",
   "file": "things.zil",
   "line": 803,
   "endLine": 810,
   "desc": "small case",
   "ldesc": null,
   "fdesc": null,
   "loc": "BTABLE",
   "flags": [
    "TAKEABLE",
    "CONTAINER",
    "OPENABLE"
   ],
   "synonyms": [
    "CASE"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "SMALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ],
    "SIZE": [
     "12"
    ]
   },
   "contents": [
    "ECLIPSE",
    "ADVENTURE"
   ],
   "source": "<OBJECT ROMCASE\n\t(LOC BTABLE)\n\t(DESC \"small case\")\n\t(FLAGS TAKEABLE CONTAINER OPENABLE)\n\t(CAPACITY 10)\n\t(SIZE 12)\n        (SYNONYM CASE)\n\t(ADJECTIVE CLOSED SHUT SMALL)>",
   "referencedBy": []
  },
  "PEN-MAILBOX": {
   "name": "PEN-MAILBOX",
   "file": "things.zil",
   "line": 812,
   "endLine": 819,
   "desc": "mailbox",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-FARM",
   "flags": [
    "NODESC",
    "CONTAINER",
    "OPENABLE"
   ],
   "synonyms": [
    "MAILBOX",
    "BOX"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT"
   ],
   "action": "PEN-MAILBOX-F",
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
   "source": "<OBJECT PEN-MAILBOX\n\t(LOC OUTSIDE-FARM)\n\t(DESC \"mailbox\")\n\t(FLAGS NODESC CONTAINER OPENABLE)\n\t(SYNONYM MAILBOX BOX)\n\t(ADJECTIVE CLOSED SHUT)\n\t(CAPACITY 20)\n\t(ACTION PEN-MAILBOX-F)>",
   "referencedBy": []
  },
  "BAG": {
   "name": "BAG",
   "file": "things.zil",
   "line": 916,
   "endLine": 924,
   "desc": "bag of llama treats",
   "ldesc": null,
   "fdesc": null,
   "loc": "DMAN",
   "flags": [
    "TAKEABLE",
    "CONTAINER",
    "OPENABLE"
   ],
   "synonyms": [
    "BAG",
    "FEED",
    "FOOD",
    "SACK",
    "TREATS",
    "TREAT",
    "SUPERSACK",
    "ORDER"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "LLAMA",
    "BURLAP"
   ],
   "action": "BAG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-FOOD-F"
    ],
    "SIZE": [
     "9"
    ]
   },
   "contents": [
    "TREATS"
   ],
   "source": "<OBJECT BAG\n\t(LOC DMAN)\n\t(DESC \"bag of llama treats\")\n\t(FLAGS TAKEABLE CONTAINER OPENABLE)\n\t(SYNONYM BAG FEED FOOD SACK TREATS TREAT SUPERSACK ORDER)\n\t(ADJECTIVE CLOSED SHUT LLAMA BURLAP)\n\t(GENERIC GENERIC-FOOD-F)\n\t(SIZE 9)\n\t(ACTION BAG-F)>",
   "referencedBy": []
  },
  "TREATS": {
   "name": "TREATS",
   "file": "things.zil",
   "line": 997,
   "endLine": 1004,
   "desc": "Llamex(R) brand High-Fibre Llama Treats",
   "ldesc": null,
   "fdesc": null,
   "loc": "BAG",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "PLURAL",
    "NODESC"
   ],
   "synonyms": [
    "TREATS",
    "TREAT",
    "FOOD",
    "FEED"
   ],
   "adjectives": [
    "LLAMEX",
    "LLAMEX(R)",
    "BRAND",
    "HIGH-FIB",
    "LLAMA"
   ],
   "action": "TREATS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-FOOD-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT TREATS\n\t(LOC BAG)\n\t(DESC \"Llamex(R) brand High-Fibre Llama Treats\")\n\t(FLAGS TRYTAKE NOALL PLURAL NODESC)\n\t(SYNONYM TREATS TREAT FOOD FEED)\n\t(ADJECTIVE LLAMEX LLAMEX\\(R\\) BRAND HIGH\\-FIB LLAMA)\n\t(GENERIC GENERIC-FOOD-F)\n\t(ACTION TREATS-F)>",
   "referencedBy": []
  },
  "LLAMA-PEN": {
   "name": "LLAMA-PEN",
   "file": "things.zil",
   "line": 1049,
   "endLine": 1057,
   "desc": "pen",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-FARM",
   "flags": [
    "PLACE",
    "CONTAINER",
    "OPENABLE",
    "TRANSPARENT"
   ],
   "synonyms": [
    "PEN",
    "CAGE"
   ],
   "adjectives": [],
   "action": "LLAMA-PEN-F",
   "descfcn": "LLAMA-PEN-F",
   "contfcn": "LLAMA-PEN-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [
    "LLAMA",
    "TROUGH"
   ],
   "source": "<OBJECT LLAMA-PEN\n\t(LOC OUTSIDE-FARM)\n\t(DESC \"pen\")\n\t(FLAGS PLACE CONTAINER OPENABLE TRANSPARENT)\n\t(SYNONYM PEN CAGE)\n\t(CAPACITY 100)\n\t(DESCFCN LLAMA-PEN-F)\n\t(CONTFCN LLAMA-PEN-F)\n\t(ACTION LLAMA-PEN-F)>",
   "referencedBy": []
  },
  "LFENCE": {
   "name": "LFENCE",
   "file": "things.zil",
   "line": 1125,
   "endLine": 1130,
   "desc": "fence",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-FARM",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "FENCE",
    "LOCK"
   ],
   "adjectives": [],
   "action": "LFENCE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LFENCE\n\t(LOC OUTSIDE-FARM)\n\t(DESC \"fence\")\n\t(FLAGS NODESC)\n\t(SYNONYM FENCE LOCK)\n\t(ACTION LFENCE-F)>",
   "referencedBy": []
  },
  "MAILBOX": {
   "name": "MAILBOX",
   "file": "things.zil",
   "line": 1153,
   "endLine": 1160,
   "desc": "mailbox",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-HOUSE",
   "flags": [
    "CONTAINER",
    "OPENABLE"
   ],
   "synonyms": [
    "MAILBOX",
    "BOX"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "MAIL",
    "MY",
    "YOUR"
   ],
   "action": "MAILBOX-F",
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
    "LEAFLET"
   ],
   "source": "<OBJECT MAILBOX\n\t(LOC OUTSIDE-HOUSE)\n\t(DESC \"mailbox\")\n\t(FLAGS CONTAINER OPENABLE)\n\t(CAPACITY 5)\n\t(SYNONYM MAILBOX BOX)\n\t(ADJECTIVE CLOSED SHUT MAIL MY YOUR)\n        (ACTION MAILBOX-F)>",
   "referencedBy": []
  },
  "STAMPS": {
   "name": "STAMPS",
   "file": "things.zil",
   "line": 1179,
   "endLine": 1185,
   "desc": "stamps",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-FLAT",
   "flags": [
    "READABLE",
    "PLURAL",
    "NODESC"
   ],
   "synonyms": [
    "STAMPS",
    "COLLECTION"
   ],
   "adjectives": [
    "STAMP",
    "POSTAGE"
   ],
   "action": "STAMPS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAMPS\n\t(LOC IN-FLAT)\n\t(DESC \"stamps\")\n\t(FLAGS READABLE PLURAL NODESC)\n\t(SYNONYM STAMPS COLLECTION)\n\t(ADJECTIVE STAMP POSTAGE)\n\t(ACTION STAMPS-F)>",
   "referencedBy": []
  },
  "LEAFLET": {
   "name": "LEAFLET",
   "file": "things.zil",
   "line": 1193,
   "endLine": 1203,
   "desc": "leaflet",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAILBOX",
   "flags": [
    "READABLE",
    "TAKEABLE"
   ],
   "synonyms": [
    "MAIL",
    "LEAFLET",
    "PAPER",
    "PIECE",
    "AD",
    "ADVERTISEMENT",
    "STAMP",
    "AI-AI",
    "MONKEY",
    "APE",
    "ADDRESS",
    "NAME",
    "INTNUM"
   ],
   "adjectives": [
    "JUNK",
    "AI-AI",
    "MONKEY",
    "APE",
    "POSTAGE",
    "ZALAGASA"
   ],
   "action": "LEAFLET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "MATCH-NUMBER": [
     "42"
    ],
    "GENERIC": [
     "GENERIC-ADDRESS"
    ]
   },
   "contents": [],
   "source": "<OBJECT LEAFLET\n\t(LOC MAILBOX)\n\t(DESC \"leaflet\")\n\t(FLAGS READABLE TAKEABLE)\n\t(SIZE 1)\n\t(SYNONYM MAIL LEAFLET PAPER PIECE AD ADVERTISEMENT\n\t \t STAMP AI\\-AI MONKEY APE ADDRESS NAME INTNUM)\n\t(ADJECTIVE JUNK AI\\-AI MONKEY APE POSTAGE ZALAGASA)\n\t(MATCH-NUMBER 42)\n\t(ACTION LEAFLET-F)\n\t(GENERIC GENERIC-ADDRESS)>",
   "referencedBy": []
  },
  "DOWNTOWN": {
   "name": "DOWNTOWN",
   "file": "things.zil",
   "line": 1277,
   "endLine": 1282,
   "desc": "downtown",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "PLACE"
   ],
   "synonyms": [
    "DOWNTOWN",
    "TOWN"
   ],
   "adjectives": [],
   "action": "DOWNTOWN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DOWNTOWN\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"downtown\")\n\t(FLAGS NODESC PLACE)\n\t(SYNONYM DOWNTOWN TOWN)\n\t(ACTION DOWNTOWN-F)>",
   "referencedBy": []
  },
  "SHELVES": {
   "name": "SHELVES",
   "file": "things.zil",
   "line": 1297,
   "endLine": 1302,
   "desc": "shelves",
   "ldesc": null,
   "fdesc": null,
   "loc": "BSTORE",
   "flags": [
    "NODESC",
    "SURFACE",
    "PLURAL"
   ],
   "synonyms": [
    "SHELVES",
    "SHELVING",
    "SHELF"
   ],
   "adjectives": [],
   "action": "SHELVES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "BESTSELLERS",
    "CUTOUTS"
   ],
   "source": "<OBJECT SHELVES\n\t(LOC BSTORE)\n\t(DESC \"shelves\")\n\t(FLAGS NODESC SURFACE PLURAL)\n\t(SYNONYM SHELVES SHELVING SHELF)\n\t(ACTION SHELVES-F)>",
   "referencedBy": []
  },
  "BESTSELLERS": {
   "name": "BESTSELLERS",
   "file": "things.zil",
   "line": 1326,
   "endLine": 1332,
   "desc": "best sellers",
   "ldesc": null,
   "fdesc": null,
   "loc": "SHELVES",
   "flags": [
    "TRYTAKE",
    "READABLE",
    "PLURAL",
    "NOALL"
   ],
   "synonyms": [
    "BESTSELLER",
    "SELLERS",
    "SELLER",
    "BOOKS",
    "BOOK",
    "TITLE",
    "TITLES"
   ],
   "adjectives": [
    "BEST",
    "BESTSELLER"
   ],
   "action": "BESTSELLERS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BESTSELLERS\n\t(LOC SHELVES)\n\t(DESC \"best sellers\")\n\t(FLAGS TRYTAKE READABLE PLURAL NOALL)\n\t(SYNONYM BESTSELLER SELLERS SELLER BOOKS BOOK TITLE TITLES)\n\t(ADJECTIVE BEST BESTSELLER)\n\t(ACTION BESTSELLERS-F)>",
   "referencedBy": []
  },
  "CUTOUTS": {
   "name": "CUTOUTS",
   "file": "things.zil",
   "line": 1355,
   "endLine": 1361,
   "desc": "remainders",
   "ldesc": null,
   "fdesc": null,
   "loc": "SHELVES",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "PLURAL"
   ],
   "synonyms": [
    "CUTOUTS",
    "CUTOUT",
    "BOOK",
    "BOOKS",
    "TITLE",
    "TITLES",
    "REMAINDER"
   ],
   "adjectives": [
    "CUTOUTS",
    "CUTOUT",
    "REMAINDER",
    "BARGAIN",
    "CHEAP"
   ],
   "action": "CUTOUTS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CUTOUTS\n\t(LOC SHELVES)\n\t(DESC \"remainders\")\n\t(FLAGS TRYTAKE NOALL PLURAL)\n\t(SYNONYM CUTOUTS CUTOUT BOOK BOOKS TITLE TITLES REMAINDER)\n\t(ADJECTIVE CUTOUTS CUTOUT REMAINDER BARGAIN CHEAP)\n\t(ACTION CUTOUTS-F)>",
   "referencedBy": []
  },
  "SOFTWARE": {
   "name": "SOFTWARE",
   "file": "things.zil",
   "line": 1418,
   "endLine": 1425,
   "desc": "stock of software",
   "ldesc": null,
   "fdesc": null,
   "loc": "BSTORE",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL"
   ],
   "synonyms": [
    "STOCK",
    "SOFTWARE",
    "CARTRIDGE"
   ],
   "adjectives": [
    "SOFTWARE",
    "COMPUTER",
    "BOYSENBERRY"
   ],
   "action": "SOFTWARE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-SOFTWARE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT SOFTWARE\n\t(LOC BSTORE)\n\t(DESC \"stock of software\")\n\t(FLAGS NODESC TRYTAKE NOALL)\n\t(SYNONYM STOCK SOFTWARE CARTRIDGE)\n\t(ADJECTIVE SOFTWARE COMPUTER BOYSENBERRY)\n\t(GENERIC GENERIC-SOFTWARE-F)\n\t(ACTION SOFTWARE-F)>",
   "referencedBy": []
  },
  "REGISTER": {
   "name": "REGISTER",
   "file": "things.zil",
   "line": 1481,
   "endLine": 1487,
   "desc": "cash register",
   "ldesc": null,
   "fdesc": null,
   "loc": "BSTORE",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "CONTAINER",
    "OPENABLE"
   ],
   "synonyms": [
    "REGISTER",
    "DRAWER"
   ],
   "adjectives": [
    "CASH"
   ],
   "action": "REGISTER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT REGISTER\n\t(LOC BSTORE)\n\t(DESC \"cash register\")\n\t(FLAGS NODESC TRYTAKE NOALL CONTAINER OPENABLE)\n\t(SYNONYM REGISTER DRAWER)\n\t(ADJECTIVE CASH)\n\t(ACTION REGISTER-F)>",
   "referencedBy": []
  },
  "BURGER": {
   "name": "BURGER",
   "file": "things.zil",
   "line": 1506,
   "endLine": 1513,
   "desc": "hamburger",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE"
   ],
   "synonyms": [
    "HAMBURGER",
    "BURGER",
    "FOOD",
    "SANDWICH",
    "MEAL"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "BURGER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-FOOD-F"
    ],
    "SIZE": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT BURGER\n\t(DESC \"hamburger\")\n\t(FLAGS TAKEABLE)\n\t(SYNONYM HAMBURGER BURGER FOOD SANDWICH MEAL)\n\t(GENERIC GENERIC-FOOD-F)\n\t(ADJECTIVE SMALL)\n\t(SIZE 3)\n        (ACTION BURGER-F)>",
   "referencedBy": []
  },
  "DTABLE": {
   "name": "DTABLE",
   "file": "things.zil",
   "line": 1552,
   "endLine": 1557,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "DINER",
   "flags": [
    "NODESC",
    "SURFACE"
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
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT DTABLE\n\t(LOC DINER)\n\t(DESC \"table\")\n\t(FLAGS NODESC SURFACE)\n\t(CAPACITY 10)\n\t(SYNONYM TABLE)>",
   "referencedBy": []
  },
  "AGENCY-DESK": {
   "name": "AGENCY-DESK",
   "file": "things.zil",
   "line": 1559,
   "endLine": 1567,
   "desc": "desk",
   "ldesc": null,
   "fdesc": null,
   "loc": "AGENCY",
   "flags": [
    "SURFACE"
   ],
   "synonyms": [
    "DESK"
   ],
   "adjectives": [
    "HER"
   ],
   "action": "AGENCY-DESK-F",
   "descfcn": "AGENCY-DESK-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT AGENCY-DESK\n\t(LOC AGENCY)\n\t(DESC \"desk\")\n\t(FLAGS SURFACE)\n\t(CAPACITY 10)\n\t(ADJECTIVE HER)\n\t(SYNONYM DESK)\n\t(DESCFCN AGENCY-DESK-F)\n\t(ACTION AGENCY-DESK-F)>",
   "referencedBy": []
  },
  "TICKET": {
   "name": "TICKET",
   "file": "things.zil",
   "line": 1582,
   "endLine": 1588,
   "desc": "airline ticket",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NODESC",
    "TAKEABLE",
    "READABLE",
    "VOWEL"
   ],
   "synonyms": [
    "TICKET",
    "PAPER"
   ],
   "adjectives": [
    "AIRLINE",
    "ROUND-TRIP"
   ],
   "action": "TICKET-F",
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
   "source": "<OBJECT TICKET\n\t(DESC \"airline ticket\")\n\t(FLAGS NODESC TAKEABLE READABLE VOWEL)\n\t(SIZE 1)\n\t(SYNONYM TICKET PAPER)\n\t(ADJECTIVE AIRLINE ROUND\\-TRIP)\n\t(ACTION TICKET-F)>",
   "referencedBy": []
  },
  "TROUGH": {
   "name": "TROUGH",
   "file": "things.zil",
   "line": 1608,
   "endLine": 1616,
   "desc": "trough",
   "ldesc": null,
   "fdesc": null,
   "loc": "LLAMA-PEN",
   "flags": [
    "CONTAINER",
    "OPENED",
    "SEARCH-ME",
    "TRYTAKE"
   ],
   "synonyms": [
    "TROUGH"
   ],
   "adjectives": [
    "FEEDING",
    "LLAMA'S"
   ],
   "action": "TROUGH-F",
   "descfcn": null,
   "contfcn": "TROUGH-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [
    "LLAMA-MAIL"
   ],
   "source": "<OBJECT TROUGH\n\t(LOC LLAMA-PEN)\n\t(DESC \"trough\")\n\t(FLAGS CONTAINER OPENED SEARCH-ME TRYTAKE)\n\t(SYNONYM TROUGH)\n\t(ADJECTIVE FEEDING LLAMA\\'S)\n\t(CAPACITY 30)\n\t(CONTFCN TROUGH-F)\n        (ACTION TROUGH-F)>",
   "referencedBy": []
  },
  "FARM-DOOR": {
   "name": "FARM-DOOR",
   "file": "things.zil",
   "line": 1688,
   "endLine": 1695,
   "desc": "front door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY"
   ],
   "adjectives": [
    "FRONT",
    "FARM",
    "FARMHOUSE"
   ],
   "action": "FARM-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GDOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT FARM-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"front door\")\n\t(FLAGS NODESC DOORLIKE OPENABLE)\n\t(SYNONYM DOOR DOORWAY)\n\t(ADJECTIVE FRONT FARM FARMHOUSE)\n\t(GENERIC GDOOR-F)\n\t(ACTION FARM-DOOR-F)>",
   "referencedBy": []
  },
  "FARM-NOTICE": {
   "name": "FARM-NOTICE",
   "file": "things.zil",
   "line": 1738,
   "endLine": 1743,
   "desc": "notice",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-FARM",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "READABLE"
   ],
   "synonyms": [
    "NOTICE",
    "SIGN",
    "WORDS"
   ],
   "adjectives": [],
   "action": "FARM-NOTICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FARM-NOTICE\n\t(LOC OUTSIDE-FARM)\n\t(DESC \"notice\")\n\t(FLAGS TRYTAKE NOALL READABLE)\n\t(SYNONYM NOTICE SIGN WORDS)\n\t(ACTION FARM-NOTICE-F)>",
   "referencedBy": []
  },
  "PAPERS": {
   "name": "PAPERS",
   "file": "things.zil",
   "line": 1760,
   "endLine": 1767,
   "desc": "pile of newspapers",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-FARM",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "READABLE",
    "SURFACE"
   ],
   "synonyms": [
    "PILE",
    "STACK",
    "BUNCH",
    "NEWSPAPERS",
    "PAPERS",
    "PAPER"
   ],
   "adjectives": [
    "OLD",
    "SOGGY"
   ],
   "action": "PAPERS-F",
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
   "source": "<OBJECT PAPERS\n\t(LOC OUTSIDE-FARM)\n\t(DESC \"pile of newspapers\")\n\t(FLAGS NODESC TRYTAKE NOALL READABLE SURFACE)\n\t(CAPACITY 20)\n\t(SYNONYM PILE STACK BUNCH NEWSPAPERS PAPERS PAPER)\n\t(ADJECTIVE OLD SOGGY)\n\t(ACTION PAPERS-F)>",
   "referencedBy": []
  },
  "MHALL": {
   "name": "MHALL",
   "file": "things.zil",
   "line": 1783,
   "endLine": 1789,
   "desc": "corridor",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "CORRIDOR",
    "HALL",
    "HALLWAY"
   ],
   "adjectives": [
    "LONG",
    "DARK"
   ],
   "action": "MHALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MHALL\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"corridor\")\n\t(FLAGS NODESC)\n\t(SYNONYM CORRIDOR HALL HALLWAY)\n\t(ADJECTIVE LONG DARK)\n\t(ACTION MHALL-F)>",
   "referencedBy": []
  },
  "PORCH-DOOR": {
   "name": "PORCH-DOOR",
   "file": "things.zil",
   "line": 1807,
   "endLine": 1813,
   "desc": "screen door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "SCREEN"
   ],
   "action": "PORCH-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PORCH-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"screen door\")\n\t(FLAGS NODESC DOORLIKE OPENABLE)\n\t(SYNONYM DOOR DOORWAY)\n\t(ADJECTIVE CLOSED SHUT SCREEN)\n\t(ACTION PORCH-DOOR-F)>",
   "referencedBy": []
  },
  "MANSION-DOOR": {
   "name": "MANSION-DOOR",
   "file": "things.zil",
   "line": 1832,
   "endLine": 1839,
   "desc": "front door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "FRONT",
    "ORNATE"
   ],
   "action": "MANSION-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GDOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT MANSION-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"front door\")\n\t(FLAGS NODESC DOORLIKE OPENABLE LOCKED)\n\t(SYNONYM DOOR DOORWAY)\n\t(ADJECTIVE CLOSED SHUT FRONT ORNATE)\n\t(GENERIC GDOOR-F)\n\t(ACTION MANSION-DOOR-F)>",
   "referencedBy": []
  },
  "RADIO": {
   "name": "RADIO",
   "file": "things.zil",
   "line": 1872,
   "endLine": 1878,
   "desc": "radio",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "MUSICAL"
   ],
   "synonyms": [
    "RADIO",
    "MUSIC",
    "SOUND",
    "RECORDING"
   ],
   "adjectives": [
    "OLD",
    "OLD-FASHIONED"
   ],
   "action": "RADIO-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RADIO\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"radio\")\n\t(FLAGS TRYTAKE NOALL MUSICAL)\n\t(SYNONYM RADIO MUSIC SOUND RECORDING)\n\t(ADJECTIVE OLD OLD\\-FASHIONED)\n\t(ACTION RADIO-F)>",
   "referencedBy": []
  },
  "MANSION-BELL": {
   "name": "MANSION-BELL",
   "file": "things.zil",
   "line": 1900,
   "endLine": 1906,
   "desc": "doorbell",
   "ldesc": null,
   "fdesc": null,
   "loc": "OUTSIDE-MANSION",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "DOORBELL",
    "BELL"
   ],
   "adjectives": [
    "DOOR"
   ],
   "action": "MANSION-BELL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MANSION-BELL\n\t(LOC OUTSIDE-MANSION)\n\t(DESC \"doorbell\")\n\t(FLAGS NODESC)\n\t(SYNONYM DOORBELL BELL)\n\t(ADJECTIVE DOOR)\n\t(ACTION MANSION-BELL-F)>",
   "referencedBy": []
  },
  "TRUMPET": {
   "name": "TRUMPET",
   "file": "things.zil",
   "line": 1942,
   "endLine": 1948,
   "desc": "ear trumpet",
   "ldesc": null,
   "fdesc": null,
   "loc": "MATRON",
   "flags": [
    "VOWEL",
    "TRYTAKE",
    "NOALL",
    "NODESC"
   ],
   "synonyms": [
    "TRUMPET",
    "AID"
   ],
   "adjectives": [
    "EAR",
    "HEARING"
   ],
   "action": "TRUMPET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRUMPET\n\t(LOC MATRON)\n\t(DESC \"ear trumpet\")\n\t(FLAGS VOWEL TRYTAKE NOALL NODESC)\n\t(SYNONYM TRUMPET AID)\n\t(ADJECTIVE EAR HEARING)\n\t(ACTION TRUMPET-F)>",
   "referencedBy": []
  },
  "EGUN": {
   "name": "EGUN",
   "file": "things.zil",
   "line": 1960,
   "endLine": 1966,
   "desc": "elephant gun",
   "ldesc": null,
   "fdesc": null,
   "loc": "MATRON",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "VOWEL",
    "NODESC"
   ],
   "synonyms": [
    "GUN",
    "WEAPON",
    "RIFLE"
   ],
   "adjectives": [
    "ELEPHANT"
   ],
   "action": "EGUN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EGUN\n\t(LOC MATRON)\n\t(DESC \"elephant gun\")\n\t(FLAGS TRYTAKE NOALL VOWEL NODESC)\n\t(SYNONYM GUN WEAPON RIFLE)\n\t(ADJECTIVE ELEPHANT)\n\t(ACTION EGUN-F)>",
   "referencedBy": []
  },
  "FLAT-DOOR": {
   "name": "FLAT-DOOR",
   "file": "things.zil",
   "line": 1975,
   "endLine": 1981,
   "desc": "door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "LOCKED",
    "OPENABLE"
   ],
   "synonyms": [
    "DOOR",
    "DOORWAY"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "LOCKED"
   ],
   "action": "FLAT-DOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLAT-DOOR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"door\")\n\t(FLAGS NODESC DOORLIKE LOCKED OPENABLE)\n\t(SYNONYM DOOR DOORWAY)\n\t(ADJECTIVE CLOSED SHUT LOCKED)\n\t(ACTION FLAT-DOOR-F)>",
   "referencedBy": []
  },
  "TEN-STAIR": {
   "name": "TEN-STAIR",
   "file": "things.zil",
   "line": 2016,
   "endLine": 2021,
   "desc": "stairway",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "STAIRWAY",
    "STAIRS",
    "STAIR"
   ],
   "adjectives": [],
   "action": "TEN-STAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TEN-STAIR \n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"stairway\")\n\t(FLAGS NODESC)\n\t(SYNONYM STAIRWAY STAIRS STAIR)\n\t(ACTION TEN-STAIR-F)>",
   "referencedBy": []
  },
  "FLAT": {
   "name": "FLAT",
   "file": "things.zil",
   "line": 2061,
   "endLine": 2066,
   "desc": "flat",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC",
    "PLACE"
   ],
   "synonyms": [
    "FLAT",
    "APARTMENT",
    "HOME"
   ],
   "adjectives": [],
   "action": "FLAT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLAT\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"flat\")\n\t(FLAGS NODESC PLACE)\n\t(SYNONYM FLAT APARTMENT HOME)\n\t(ACTION FLAT-F)>",
   "referencedBy": []
  },
  "PAINTING": {
   "name": "PAINTING",
   "file": "things.zil",
   "line": 2080,
   "endLine": 2089,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "TAKEABLE",
    "READABLE",
    "SURFACE"
   ],
   "synonyms": [
    "ZZZP",
    "PORTRAIT",
    "PAINTING",
    "PICTURE"
   ],
   "adjectives": [
    "LARGE",
    "DAMAGED"
   ],
   "action": "PAINTING-F",
   "descfcn": "PAINTING-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "DESCRIBE-PAINTING"
    ],
    "SIZE": [
     "11"
    ],
    "CAPACITY": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT PAINTING\n\t(LOC TROPHY-ROOM)\n\t(SDESC DESCRIBE-PAINTING)\n\t(FLAGS TAKEABLE READABLE SURFACE)\n\t(SIZE 11)\n\t(CAPACITY 10)\n\t(SYNONYM ZZZP PORTRAIT PAINTING PICTURE)\n\t(ADJECTIVE LARGE DAMAGED)\n\t(DESCFCN PAINTING-F)\n\t(ACTION PAINTING-F)>",
   "referencedBy": []
  },
  "PERCH": {
   "name": "PERCH",
   "file": "things.zil",
   "line": 2186,
   "endLine": 2194,
   "desc": "perch",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-PORCH",
   "flags": [
    "TRYTAKE",
    "NOALL",
    "SURFACE"
   ],
   "synonyms": [
    "PERCH"
   ],
   "adjectives": [
    "BIRD'S",
    "MACAW'S"
   ],
   "action": "PERCH-F",
   "descfcn": "PERCH-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [
    "MACAW"
   ],
   "source": "<OBJECT PERCH\n\t(LOC IN-PORCH)\n\t(DESC \"perch\")\n\t(FLAGS TRYTAKE NOALL SURFACE)\n\t(CAPACITY 0)\n\t(SYNONYM PERCH)\n\t(ADJECTIVE BIRD\\'S MACAW\\'S)\n\t(DESCFCN PERCH-F)\n\t(ACTION PERCH-F)>",
   "referencedBy": []
  },
  "UNDER-PERCH": {
   "name": "UNDER-PERCH",
   "file": "things.zil",
   "line": 2263,
   "endLine": 2270,
   "desc": "floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-PORCH",
   "flags": [
    "NODESC",
    "SURFACE"
   ],
   "synonyms": [
    "ZZZP"
   ],
   "adjectives": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": "UNDER-PERCH-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "20"
    ]
   },
   "contents": [
    "SHITMAIL"
   ],
   "source": "<OBJECT UNDER-PERCH\n\t(LOC IN-PORCH)\n\t(DESC \"floor\")\n\t(FLAGS NODESC SURFACE)\n\t(SYNONYM ZZZP)\n\t(ADJECTIVE ZZZP ZZZP ZZZP ZZZP)\n\t(CONTFCN UNDER-PERCH-F)\n\t(CAPACITY 20)>",
   "referencedBy": []
  },
  "MACHINE": {
   "name": "MACHINE",
   "file": "things.zil",
   "line": 2302,
   "endLine": 2310,
   "desc": "combination telephone/answering machine",
   "ldesc": null,
   "fdesc": null,
   "loc": "BROOM",
   "flags": [
    "TAKEABLE",
    "SURFACE"
   ],
   "synonyms": [
    "TELEPHONE",
    "PHONE",
    "MACHINE"
   ],
   "adjectives": [
    "TELEPHONE",
    "PHONE-ANSWERING",
    "ANSWERING",
    "COMBINATION"
   ],
   "action": "MACHINE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "0"
    ],
    "SIZE": [
     "11"
    ]
   },
   "contents": [
    "PLAYBACK-BUTTON"
   ],
   "source": "<OBJECT MACHINE\n\t(LOC BROOM)\n\t(DESC \"combination telephone/answering machine\")\n\t(FLAGS TAKEABLE SURFACE)\n\t(CAPACITY 0)\n\t(SIZE 11)\n\t(SYNONYM TELEPHONE PHONE MACHINE)\n\t(ADJECTIVE TELEPHONE PHONE-ANSWERING ANSWERING COMBINATION)\n        (ACTION MACHINE-F)>",
   "referencedBy": []
  },
  "PLAYBACK-BUTTON": {
   "name": "PLAYBACK-BUTTON",
   "file": "things.zil",
   "line": 2312,
   "endLine": 2318,
   "desc": "messages button",
   "ldesc": null,
   "fdesc": null,
   "loc": "MACHINE",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "BUTTON",
    "MESSAGES",
    "MESSAGE"
   ],
   "adjectives": [
    "PLAYBACK",
    "MESSAGES",
    "MESSAGE"
   ],
   "action": "PB-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLAYBACK-BUTTON\n\t(LOC MACHINE)\n\t(DESC \"messages button\")\n\t(FLAGS NODESC)\n\t(SYNONYM BUTTON MESSAGES MESSAGE)\n\t(ADJECTIVE PLAYBACK MESSAGES MESSAGE)\n\t(ACTION PB-BUTTON-F)>",
   "referencedBy": []
  },
  "ABOOK": {
   "name": "ABOOK",
   "file": "things.zil",
   "line": 2504,
   "endLine": 2512,
   "desc": "address book",
   "ldesc": null,
   "fdesc": null,
   "loc": "BTABLE",
   "flags": [
    "VOWEL",
    "TAKEABLE",
    "READABLE",
    "CONTAINER",
    "OPENABLE"
   ],
   "synonyms": [
    "BOOK",
    "ADDRESSES",
    "ADDRESS"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "ADDRESS",
    "LOOSELEAF",
    "LOOSE-LEAF"
   ],
   "action": "ABOOK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ],
    "GENERIC": [
     "GENERIC-ADDRESS"
    ]
   },
   "contents": [
    "PAGE-3",
    "PAGE-2",
    "PAGE-1"
   ],
   "source": "<OBJECT ABOOK\n\t(LOC BTABLE)\n\t(DESC \"address book\")\n\t(FLAGS VOWEL TAKEABLE READABLE CONTAINER OPENABLE)\n\t(SIZE 5)\n\t(SYNONYM BOOK ADDRESSES ADDRESS)\n\t(ADJECTIVE CLOSED SHUT ADDRESS LOOSELEAF LOOSE-LEAF)\n\t(GENERIC GENERIC-ADDRESS)\n\t(ACTION ABOOK-F)>",
   "referencedBy": []
  },
  "PAGE-3": {
   "name": "PAGE-3",
   "file": "things.zil",
   "line": 2557,
   "endLine": 2564,
   "desc": "last page",
   "ldesc": null,
   "fdesc": null,
   "loc": "ABOOK",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "READABLE"
   ],
   "synonyms": [
    "PAGE",
    "LEAF",
    "PAGES",
    "THREE"
   ],
   "adjectives": [
    "LAST",
    "FINAL",
    "THIRD",
    "PAGE"
   ],
   "action": "PAGE-3-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-PAGE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT PAGE-3\n\t(LOC ABOOK)\n\t(DESC \"last page\")\n\t(FLAGS NODESC TRYTAKE NOALL READABLE)\n\t(SYNONYM PAGE LEAF PAGES THREE)\n\t(ADJECTIVE LAST FINAL THIRD PAGE)\n\t(GENERIC GENERIC-PAGE-F)\n\t(ACTION PAGE-3-F)>",
   "referencedBy": []
  },
  "PAGE-2": {
   "name": "PAGE-2",
   "file": "things.zil",
   "line": 2597,
   "endLine": 2604,
   "desc": "middle page",
   "ldesc": null,
   "fdesc": null,
   "loc": "ABOOK",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "READABLE"
   ],
   "synonyms": [
    "PAGE",
    "LEAF",
    "PAGES",
    "TWO"
   ],
   "adjectives": [
    "MIDDLE",
    "SECOND",
    "PAGE"
   ],
   "action": "PAGE-2-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-PAGE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT PAGE-2\n\t(LOC ABOOK)\n\t(DESC \"middle page\")\n\t(FLAGS NODESC TRYTAKE NOALL READABLE)\n\t(SYNONYM PAGE LEAF PAGES TWO)\n\t(ADJECTIVE MIDDLE SECOND PAGE)\n\t(GENERIC GENERIC-PAGE-F)\n\t(ACTION PAGE-2-F)>",
   "referencedBy": []
  },
  "PAGE-1": {
   "name": "PAGE-1",
   "file": "things.zil",
   "line": 2654,
   "endLine": 2661,
   "desc": "first page",
   "ldesc": null,
   "fdesc": null,
   "loc": "ABOOK",
   "flags": [
    "NODESC",
    "TRYTAKE",
    "NOALL",
    "READABLE"
   ],
   "synonyms": [
    "PAGE",
    "LEAF",
    "PAGES",
    "ONE"
   ],
   "adjectives": [
    "FIRST",
    "FRONT",
    "PAGE"
   ],
   "action": "PAGE-1-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-PAGE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT PAGE-1\n\t(LOC ABOOK)\n\t(DESC \"first page\")\n\t(FLAGS NODESC TRYTAKE NOALL READABLE)\n\t(SYNONYM PAGE LEAF PAGES ONE)\n\t(ADJECTIVE FIRST FRONT PAGE)\n\t(GENERIC GENERIC-PAGE-F)\n\t(ACTION PAGE-1-F)>",
   "referencedBy": []
  },
  "GBANK": {
   "name": "GBANK",
   "file": "things.zil",
   "line": 2764,
   "endLine": 2770,
   "desc": "bank",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "PLACE"
   ],
   "synonyms": [
    "BANK",
    "TRUST"
   ],
   "adjectives": [
    "FILLMORE",
    "FIDUCIARY",
    "TRUST"
   ],
   "action": "GBANK-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GBANK\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"bank\")\n\t(FLAGS NODESC PLACE)\n\t(SYNONYM BANK TRUST)\n\t(ADJECTIVE FILLMORE FIDUCIARY TRUST)\n\t(ACTION GBANK-F)>",
   "referencedBy": []
  },
  "CABSOUND": {
   "name": "CABSOUND",
   "file": "things.zil",
   "line": 2826,
   "endLine": 2833,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": "BROOM",
   "flags": [
    "NODESC",
    "NOARTICLE",
    "INVISIBLE"
   ],
   "synonyms": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP"
   ],
   "adjectives": [],
   "action": "CABSOUND-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SAY-CABSOUND"
    ],
    "GENERIC": [
     "GENERIC-SOUND"
    ]
   },
   "contents": [],
   "source": "<OBJECT CABSOUND\n\t(LOC BROOM)\n\t(DESC \"that\")\n\t(SDESC SAY-CABSOUND)\n\t(FLAGS NODESC NOARTICLE INVISIBLE)\n\t(GENERIC GENERIC-SOUND)\n\t(SYNONYM ZZZP ZZZP ZZZP ZZZP ZZZP)\n\t(ACTION CABSOUND-F)>",
   "referencedBy": []
  },
  "STREETNUMBERS": {
   "name": "STREETNUMBERS",
   "file": "things.zil",
   "line": 3360,
   "endLine": 3366,
   "desc": "number",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "NUMBER",
    "ADDRESS"
   ],
   "adjectives": [
    "STREET"
   ],
   "action": "STREETNUMBERS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STREETNUMBERS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"number\")\n\t(FLAGS NODESC)\n\t(SYNONYM NUMBER ADDRESS)\n\t(ADJECTIVE STREET)\n\t(ACTION STREETNUMBERS-F)>",
   "referencedBy": []
  },
  "STAMP-TABLE": {
   "name": "STAMP-TABLE",
   "file": "things.zil",
   "line": 3379,
   "endLine": 3384,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-FLAT",
   "flags": [
    "NODESC",
    "SURFACE"
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
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT STAMP-TABLE\n\t(LOC IN-FLAT)\n\t(DESC \"table\")\n\t(FLAGS NODESC SURFACE)\n\t(CAPACITY 20)\n\t(SYNONYM TABLE)>",
   "referencedBy": []
  },
  "MOUSYMAIL": {
   "name": "MOUSYMAIL",
   "file": "things.zil",
   "line": 3386,
   "endLine": 3394,
   "desc": "some mail",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-FLAT",
   "flags": [
    "TAKEABLE",
    "READABLE",
    "NOARTICLE"
   ],
   "synonyms": [
    "ADDRESS",
    "MAIL",
    "PIECE"
   ],
   "adjectives": [],
   "action": "MOUSYMAIL-F",
   "descfcn": "MOUSYMAIL-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-MAIL"
    ],
    "MAIL-LETTER": [
     "-2"
    ]
   },
   "contents": [],
   "source": "<OBJECT MOUSYMAIL\n\t(LOC IN-FLAT)\n\t(DESC \"some mail\")\n\t(FLAGS TAKEABLE READABLE NOARTICLE)\n\t(SYNONYM ADDRESS MAIL PIECE)\n\t(GENERIC GENERIC-MAIL)\n\t(MAIL-LETTER -2)\n\t(DESCFCN MOUSYMAIL-F)\n\t(ACTION MOUSYMAIL-F)>",
   "referencedBy": []
  },
  "LLAMA-MAIL": {
   "name": "LLAMA-MAIL",
   "file": "things.zil",
   "line": 3424,
   "endLine": 3431,
   "desc": "some mail",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROUGH",
   "flags": [
    "TAKEABLE",
    "NOARTICLE",
    "READABLE"
   ],
   "synonyms": [
    "MAIL"
   ],
   "adjectives": [],
   "action": "LLAMA-MAIL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-MAIL"
    ],
    "MAIL-LETTER": [
     "-4"
    ]
   },
   "contents": [],
   "source": "<OBJECT LLAMA-MAIL\n\t(LOC TROUGH)\n\t(DESC \"some mail\")\n\t(FLAGS TAKEABLE NOARTICLE READABLE)\n\t(GENERIC GENERIC-MAIL)\n\t(SYNONYM MAIL)\n\t(MAIL-LETTER -4)\n\t(ACTION LLAMA-MAIL-F)>",
   "referencedBy": []
  },
  "SHITMAIL": {
   "name": "SHITMAIL",
   "file": "things.zil",
   "line": 3444,
   "endLine": 3453,
   "desc": "some mail",
   "ldesc": null,
   "fdesc": null,
   "loc": "UNDER-PERCH",
   "flags": [
    "TAKEABLE",
    "READABLE",
    "NOARTICLE"
   ],
   "synonyms": [
    "MAIL"
   ],
   "adjectives": [
    "SHREDDED"
   ],
   "action": "SHITMAIL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-SHITMAIL"
    ],
    "GENERIC": [
     "GENERIC-MAIL"
    ],
    "MAIL-LETTER": [
     "-3"
    ]
   },
   "contents": [],
   "source": "<OBJECT SHITMAIL\n\t(LOC UNDER-PERCH)\n\t(DESC \"some mail\")\n\t(SDESC SDESC-SHITMAIL)\n\t(FLAGS TAKEABLE READABLE NOARTICLE)\n\t(SYNONYM MAIL)\n\t(ADJECTIVE SHREDDED)\n\t(GENERIC GENERIC-MAIL)\n\t(MAIL-LETTER -3)\n\t(ACTION SHITMAIL-F)>",
   "referencedBy": []
  },
  "FLYER": {
   "name": "FLYER",
   "file": "things.zil",
   "line": 3496,
   "endLine": 3504,
   "desc": "flyer",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE",
    "SURFACE"
   ],
   "synonyms": [
    "ZZZP",
    "FLYER",
    "STICKER",
    "MAIL",
    "ADDRESS"
   ],
   "adjectives": [
    "POSTAL",
    "SERVICE",
    "ORANGE"
   ],
   "action": "FLYER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "MAIL-LETTER": [
     "0"
    ],
    "GENERIC": [
     "GENERIC-MAIL"
    ]
   },
   "contents": [],
   "source": "<OBJECT FLYER\n\t(DESC \"flyer\")\n\t(FLAGS TAKEABLE READABLE SURFACE)\n\t(SIZE 2)\n\t(MAIL-LETTER 0)\n\t(GENERIC GENERIC-MAIL)\n\t(ADJECTIVE POSTAL SERVICE ORANGE)\n\t(SYNONYM ZZZP FLYER STICKER MAIL ADDRESS)\n\t(ACTION FLYER-F)>",
   "referencedBy": []
  },
  "COUPON": {
   "name": "COUPON",
   "file": "things.zil",
   "line": 3524,
   "endLine": 3532,
   "desc": "coupon booklet",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE",
    "SURFACE"
   ],
   "synonyms": [
    "ZZZP",
    "BOOKLET",
    "BOOK",
    "COUPONS",
    "STICKER",
    "MAIL"
   ],
   "adjectives": [
    "COUPON",
    "POSTAL",
    "SERVICE",
    "ORANGE"
   ],
   "action": "COUPON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "3"
    ],
    "MAIL-LETTER": [
     "0"
    ],
    "GENERIC": [
     "GENERIC-MAIL"
    ]
   },
   "contents": [],
   "source": "<OBJECT COUPON\n\t(DESC \"coupon booklet\")\n\t(FLAGS TAKEABLE READABLE SURFACE )\n\t(SYNONYM ZZZP BOOKLET BOOK COUPONS STICKER MAIL)\n\t(ADJECTIVE COUPON POSTAL SERVICE ORANGE)\n\t(SIZE 3)\n\t(MAIL-LETTER 0)\n\t(GENERIC GENERIC-MAIL)\n\t(ACTION COUPON-F)>",
   "referencedBy": []
  },
  "ENVELOPE": {
   "name": "ENVELOPE",
   "file": "things.zil",
   "line": 3556,
   "endLine": 3567,
   "desc": "envelope",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "VOWEL",
    "TAKEABLE",
    "READABLE",
    "CONTAINER",
    "OPENABLE",
    "SURFACE"
   ],
   "synonyms": [
    "ZZZP",
    "ENVELOPE",
    "STICKER",
    "ADDRESS",
    "MAIL"
   ],
   "adjectives": [
    "POSTAL",
    "SERVICE",
    "ORANGE"
   ],
   "action": "ENVELOPE-F",
   "descfcn": "ENVELOPE-F",
   "contfcn": "ENVELOPE-F",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "SIZE": [
     "3"
    ],
    "MAIL-LETTER": [
     "0"
    ],
    "GENERIC": [
     "GENERIC-MAIL"
    ]
   },
   "contents": [],
   "source": "<OBJECT ENVELOPE\n\t(DESC \"envelope\")\n\t(FLAGS VOWEL TAKEABLE READABLE CONTAINER OPENABLE SURFACE)\n\t(CAPACITY 2)\n\t(SIZE 3)\n\t(ADJECTIVE POSTAL SERVICE ORANGE)\n\t(SYNONYM ZZZP ENVELOPE STICKER ADDRESS MAIL)\n\t(MAIL-LETTER 0)\n\t(GENERIC GENERIC-MAIL)\n\t(CONTFCN ENVELOPE-F)\n\t(DESCFCN ENVELOPE-F)\n\t(ACTION ENVELOPE-F)>  ",
   "referencedBy": []
  },
  "US-TEXT": {
   "name": "US-TEXT",
   "file": "things.zil",
   "line": 3621,
   "endLine": 3627,
   "desc": "memo",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "MEMO",
    "PAPER"
   ],
   "adjectives": [
    "US",
    "EXCESS"
   ],
   "action": "US-TEXT-F",
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
   "source": "<OBJECT US-TEXT\n\t(DESC \"memo\")\n\t(FLAGS TAKEABLE READABLE)\n\t(SIZE 1)\n\t(SYNONYM MEMO PAPER)\n\t(ADJECTIVE US EXCESS)\n\t(ACTION US-TEXT-F)>",
   "referencedBy": []
  },
  "CHECK": {
   "name": "CHECK",
   "file": "things.zil",
   "line": 3663,
   "endLine": 3669,
   "desc": "cheque",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE"
   ],
   "synonyms": [
    "CHECK",
    "CHEQUE",
    "PLUSSIGN",
    "-",
    "SIGN"
   ],
   "adjectives": [
    "INTNUM",
    "PLUS",
    "MINUS"
   ],
   "action": "CHECK-F",
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
   "source": "<OBJECT CHECK\n\t(DESC \"cheque\" ;\"check\")\n\t(FLAGS TAKEABLE)\n\t(SIZE 1)\n\t(SYNONYM CHECK CHEQUE PLUSSIGN - SIGN)\n\t(ADJECTIVE INTNUM PLUS MINUS)\n\t(ACTION CHECK-F)>",
   "referencedBy": []
  },
  "MONEY": {
   "name": "MONEY",
   "file": "things.zil",
   "line": 3719,
   "endLine": 3725,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "NOARTICLE"
   ],
   "synonyms": [
    "MONEY",
    "CHANGE",
    "DOLLARS",
    "DOLLAR",
    "BUCK",
    "BUCKS",
    "CASH",
    "CENTS",
    "CENT"
   ],
   "adjectives": [
    "INTNUM",
    "MONEY"
   ],
   "action": "MONEY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "MONEY-D"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT MONEY\n\t(SDESC MONEY-D)\n\t(FLAGS TAKEABLE NOARTICLE)\n\t(SIZE 1)\n\t(SYNONYM MONEY CHANGE DOLLARS DOLLAR BUCK BUCKS CASH CENTS CENT)\n\t(ADJECTIVE INTNUM MONEY)\n\t(ACTION MONEY-F)>",
   "referencedBy": []
  },
  "BOSS-CHECK": {
   "name": "BOSS-CHECK",
   "file": "things.zil",
   "line": 3797,
   "endLine": 3802,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "ZZZP"
   ],
   "adjectives": [
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP",
    "ZZZP"
   ],
   "action": "BOSS-CHECK-F",
   "descfcn": "BOSS-CHECK-F",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SDESC": [
     "SDESC-BOSS-CHECK"
    ]
   },
   "contents": [],
   "source": "<OBJECT BOSS-CHECK\n\t(SDESC SDESC-BOSS-CHECK)\n\t(ACTION BOSS-CHECK-F)\n\t(DESCFCN BOSS-CHECK-F)\n\t(ADJECTIVE ZZZP ZZZP ZZZP ZZZP ZZZP ZZZP ZZZP)\n\t(SYNONYM ZZZP)>",
   "referencedBy": []
  },
  "CAB": {
   "name": "CAB",
   "file": "things.zil",
   "line": 3992,
   "endLine": 3999,
   "desc": "cab",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "INVISIBLE"
   ],
   "synonyms": [
    "CAB",
    "DOOR",
    "TAXI"
   ],
   "adjectives": [
    "GETLOST",
    "TAXI",
    "CAB"
   ],
   "action": "CAB-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GDOOR-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT CAB\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"cab\")\n\t(FLAGS INVISIBLE)\n\t(SYNONYM CAB DOOR TAXI)\n\t(ADJECTIVE GETLOST TAXI CAB)\n\t(GENERIC GDOOR-F)\n\t(ACTION CAB-F)>",
   "referencedBy": []
  },
  "CAB-DRIVER": {
   "name": "CAB-DRIVER",
   "file": "things.zil",
   "line": 4105,
   "endLine": 4111,
   "desc": "cab driver",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "LIVING",
    "PERSON",
    "NDESCBIT",
    "SELLERBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DRIVER",
    "CABBIE",
    "MAN"
   ],
   "adjectives": [
    "CAB",
    "TAXI"
   ],
   "action": "CAB-DRIVER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAB-DRIVER\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"cab driver\")\n\t(SYNONYM DRIVER CABBIE MAN) \n\t(ADJECTIVE CAB TAXI)\n\t(FLAGS LIVING PERSON NDESCBIT SELLERBIT INVISIBLE)\n\t(ACTION CAB-DRIVER-F)>",
   "referencedBy": []
  },
  "CAB-NOTICE": {
   "name": "CAB-NOTICE",
   "file": "things.zil",
   "line": 4236,
   "endLine": 4242,
   "desc": "cab notice",
   "ldesc": null,
   "fdesc": null,
   "loc": "CAB-ROOM",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "NOTICE",
    "SIGN"
   ],
   "adjectives": [
    "CAB"
   ],
   "action": "CNOTICE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CAB-NOTICE\n\t(LOC CAB-ROOM)\n\t(DESC \"cab notice\")\n\t(FLAGS NODESC)\n\t(SYNONYM NOTICE SIGN)\n\t(ADJECTIVE CAB)\n\t(ACTION CNOTICE-F)>",
   "referencedBy": []
  },
  "WEARING": {
   "name": "WEARING",
   "file": "verbs.zil",
   "line": 86,
   "endLine": 86,
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
   "source": "<OBJECT WEARING>",
   "referencedBy": []
  },
  "REQUEST-OBJECT": {
   "name": "REQUEST-OBJECT",
   "file": "verbs.zil",
   "line": 2764,
   "endLine": 2769,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NODESC",
    "NOARTICLE"
   ],
   "synonyms": [
    "GRANTED",
    "DENIED",
    "REQUEST",
    "PERMISSION"
   ],
   "adjectives": [],
   "action": "REQUEST-OBJECT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT REQUEST-OBJECT\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"that\")\n\t(FLAGS NODESC NOARTICLE)\n\t(SYNONYM GRANTED DENIED REQUEST PERMISSION)\n\t(ACTION REQUEST-OBJECT-F)>",
   "referencedBy": []
  },
  "CALL-BUTTON": {
   "name": "CALL-BUTTON",
   "file": "xjet.zil",
   "line": 386,
   "endLine": 392,
   "desc": "attendant button",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "VOWEL",
    "NODESC"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "CALL",
    "ATTENDANT"
   ],
   "action": "PLANE-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CALL-BUTTON\n\t(LOC SEAT)\n\t(DESC \"attendant button\")\n\t(FLAGS VOWEL NODESC)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE CALL ATTENDANT)\n\t(ACTION PLANE-BUTTON-F)>",
   "referencedBy": []
  },
  "LIGHT-BUTTON": {
   "name": "LIGHT-BUTTON",
   "file": "xjet.zil",
   "line": 394,
   "endLine": 400,
   "desc": "light button",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "BUTTON",
    "SWITCH"
   ],
   "adjectives": [
    "LIGHT"
   ],
   "action": "PLANE-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LIGHT-BUTTON\n\t(LOC SEAT)\n\t(DESC \"light button\")\n\t(FLAGS NODESC)\n\t(SYNONYM BUTTON SWITCH)\n\t(ADJECTIVE LIGHT)\n\t(ACTION PLANE-BUTTON-F)>",
   "referencedBy": []
  },
  "RECLINE-BUTTON": {
   "name": "RECLINE-BUTTON",
   "file": "xjet.zil",
   "line": 402,
   "endLine": 408,
   "desc": "recline button",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "RECLINE"
   ],
   "action": "PLANE-BUTTON-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RECLINE-BUTTON\n\t(LOC SEAT)\n\t(DESC \"recline button\")\n\t(FLAGS NODESC)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE RECLINE)\n\t(ACTION PLANE-BUTTON-F)>",
   "referencedBy": []
  },
  "SAFETY-CARD-TWO": {
   "name": "SAFETY-CARD-TWO",
   "file": "xxjet.zil",
   "line": 806,
   "endLine": 812,
   "desc": "small piece of laminated card",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "CARD",
    "PIECE"
   ],
   "adjectives": [
    "SMALL",
    "LAMINATED",
    "PIECE",
    "CARD"
   ],
   "action": "SAFETY-CARD-TWO-F",
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
   "source": "<OBJECT SAFETY-CARD-TWO\n\t(DESC \"small piece of laminated card\")\n\t(SYNONYM CARD PIECE)\n\t(ADJECTIVE SMALL LAMINATED PIECE CARD)\n\t(FLAGS TAKEABLE READABLE)\n\t(SIZE 1)\n\t(ACTION SAFETY-CARD-TWO-F)>",
   "referencedBy": []
  },
  "SEAT-TABLE": {
   "name": "SEAT-TABLE",
   "file": "xxjet.zil",
   "line": 1177,
   "endLine": 1184,
   "desc": "seat table",
   "ldesc": null,
   "fdesc": null,
   "loc": "SEAT",
   "flags": [
    "NODESC"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "SEAT"
   ],
   "action": "SEAT-TABLE-F",
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
   "source": "<OBJECT SEAT-TABLE\n\t(LOC SEAT)\n\t(DESC \"seat table\")\n\t(SYNONYM TABLE)\n\t(ADJECTIVE SEAT)\n\t(FLAGS NODESC)\n\t(CAPACITY 3)\n\t(ACTION SEAT-TABLE-F)>",
   "referencedBy": []
  },
  "NATIVES": {
   "name": "NATIVES",
   "file": "zalagasa.zil",
   "line": 106,
   "endLine": 113,
   "desc": "Zalagasans",
   "ldesc": "A tribe of Zalagasan natives.",
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "PLURAL",
    "PERSON"
   ],
   "synonyms": [
    "NATIVES",
    "NATIVE",
    "ZALAGASAN",
    "TRIBE"
   ],
   "adjectives": [
    "ZALAGASAN"
   ],
   "action": "ZALAG-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NATIVES\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"Zalagasans\")\n\t(LDESC \"A tribe of Zalagasan natives.\")\n\t(FLAGS PLURAL PERSON)\n\t(SYNONYM NATIVES NATIVE ZALAGASAN TRIBE)\n\t(ADJECTIVE ZALAGASAN)\n\t(ACTION ZALAG-F)>",
   "referencedBy": []
  },
  "IN-CLEARING": {
   "name": "IN-CLEARING",
   "file": "zalagasa.zil",
   "line": 225,
   "endLine": 232,
   "desc": "grubby antechamber",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-CLEARING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "ODD-GATE"
   ],
   "source": "<OBJECT IN-CLEARING\n\t(LOC ROOMS)\n\t(DESC \"grubby antechamber\")\n\t(FLAGS LIGHTED LOCATION INDOORS)\n\t(WEST TO CARD-ROOM IF ODD-GATE IS OPEN)\n\t(IN TO CARD-ROOM IF ODD-GATE IS OPEN)\n\t(EAST TO MAZE-ROOM)\n\t(ACTION IN-CLEARING-F)>",
   "referencedBy": []
  },
  "ODD-GATE-SIGN": {
   "name": "ODD-GATE-SIGN",
   "file": "zalagasa.zil",
   "line": 246,
   "endLine": 251,
   "desc": "sign",
   "ldesc": null,
   "fdesc": null,
   "loc": "ODD-GATE",
   "flags": [
    "NODESC",
    "READABLE"
   ],
   "synonyms": [
    "SIGN"
   ],
   "adjectives": [],
   "action": "ODD-GATE-SIGN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ODD-GATE-SIGN\n\t(LOC ODD-GATE)\n\t(FLAGS NODESC READABLE)\n\t(DESC \"sign\")\n\t(SYNONYM SIGN)\n\t(ACTION ODD-GATE-SIGN-F)>",
   "referencedBy": []
  },
  "ODD-GATE": {
   "name": "ODD-GATE",
   "file": "zalagasa.zil",
   "line": 265,
   "endLine": 271,
   "desc": "locker door",
   "ldesc": null,
   "fdesc": null,
   "loc": "IN-CLEARING",
   "flags": [
    "NODESC",
    "DOORLIKE",
    "OPENABLE",
    "VOWEL",
    "SURFACE",
    "LOCKED"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "CLOSED",
    "SHUT",
    "ODD",
    "CURIOUS",
    "ODD-LOOKING",
    "LOCKER"
   ],
   "action": "ODD-GATE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "ODD-GATE-SIGN",
    "LEFT-HANDLE",
    "MIDDLE-HANDLE",
    "RIGHT-HANDLE"
   ],
   "source": "<OBJECT ODD-GATE\n\t(LOC IN-CLEARING)\n\t(DESC \"locker door\")\n\t(FLAGS NODESC DOORLIKE OPENABLE VOWEL SURFACE LOCKED)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE CLOSED SHUT ODD CURIOUS ODD-LOOKING LOCKER)\n\t(ACTION ODD-GATE-F)>",
   "referencedBy": []
  },
  "LEFT-HANDLE": {
   "name": "LEFT-HANDLE",
   "file": "zalagasa.zil",
   "line": 338,
   "endLine": 346,
   "desc": "left handle",
   "ldesc": null,
   "fdesc": null,
   "loc": "ODD-GATE",
   "flags": [
    "NODESC",
    "TRYTAKE"
   ],
   "synonyms": [
    "HANDLE",
    "KNOB",
    "ARM",
    "HANDLES"
   ],
   "adjectives": [
    "LEFT",
    "FIRST"
   ],
   "action": "HANDLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-HANDLE-F"
    ],
    "HANDLE-NUMBER": [
     "0"
    ]
   },
   "contents": [],
   "source": "<OBJECT LEFT-HANDLE\n\t(DESC \"left handle\")\n\t(LOC ODD-GATE)\n\t(FLAGS NODESC TRYTAKE)\n\t(SYNONYM HANDLE KNOB ARM HANDLES)\n\t(ADJECTIVE LEFT FIRST)\n\t(GENERIC GENERIC-HANDLE-F)\n\t(HANDLE-NUMBER 0)\n\t(ACTION HANDLE-F)>",
   "referencedBy": []
  },
  "MIDDLE-HANDLE": {
   "name": "MIDDLE-HANDLE",
   "file": "zalagasa.zil",
   "line": 348,
   "endLine": 356,
   "desc": "middle handle",
   "ldesc": null,
   "fdesc": null,
   "loc": "ODD-GATE",
   "flags": [
    "NODESC",
    "TRYTAKE"
   ],
   "synonyms": [
    "HANDLE",
    "KNOB",
    "ARM",
    "HANDLES"
   ],
   "adjectives": [
    "MIDDLE",
    "SECOND",
    "CENTER",
    "CENTRE"
   ],
   "action": "HANDLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-HANDLE-F"
    ],
    "HANDLE-NUMBER": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT MIDDLE-HANDLE\n\t(DESC \"middle handle\")\n\t(LOC ODD-GATE)\n\t(FLAGS NODESC TRYTAKE)\n\t(SYNONYM HANDLE KNOB ARM HANDLES)\n\t(ADJECTIVE MIDDLE SECOND CENTER CENTRE)\n\t(GENERIC GENERIC-HANDLE-F)\n\t(HANDLE-NUMBER 1)\n\t(ACTION HANDLE-F)>",
   "referencedBy": []
  },
  "RIGHT-HANDLE": {
   "name": "RIGHT-HANDLE",
   "file": "zalagasa.zil",
   "line": 358,
   "endLine": 366,
   "desc": "right handle",
   "ldesc": null,
   "fdesc": null,
   "loc": "ODD-GATE",
   "flags": [
    "NODESC",
    "TRYTAKE"
   ],
   "synonyms": [
    "HANDLE",
    "KNOB",
    "ARM",
    "HANDLES"
   ],
   "adjectives": [
    "RIGHT",
    "THIRD",
    "LAST"
   ],
   "action": "HANDLE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "GENERIC-HANDLE-F"
    ],
    "HANDLE-NUMBER": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT RIGHT-HANDLE\n\t(DESC \"right handle\")\n\t(LOC ODD-GATE)\n\t(FLAGS NODESC TRYTAKE)\n\t(SYNONYM HANDLE KNOB ARM HANDLES)\n\t(ADJECTIVE RIGHT THIRD LAST)\n\t(GENERIC GENERIC-HANDLE-F)\n\t(HANDLE-NUMBER 2)\n\t(ACTION HANDLE-F)>",
   "referencedBy": []
  },
  "CARD-ROOM": {
   "name": "CARD-ROOM",
   "file": "zalagasa.zil",
   "line": 490,
   "endLine": 497,
   "desc": "locker",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "LIGHTED",
    "LOCATION",
    "INDOORS"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CARD-ROOM-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ODD-GATE"
   ],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "KEY"
   ],
   "source": "<OBJECT CARD-ROOM\n\t(LOC ROOMS)\n\t(DESC \"locker\")\n\t(FLAGS LIGHTED LOCATION INDOORS)\n\t(EAST PER EXIT-CARD-ROOM)\n\t(OUT PER EXIT-CARD-ROOM)\n\t(GLOBAL ODD-GATE)\n\t(ACTION CARD-ROOM-F)>",
   "referencedBy": []
  },
  "KEY": {
   "name": "KEY",
   "file": "zalagasa.zil",
   "line": 523,
   "endLine": 531,
   "desc": "magnetic key-card",
   "ldesc": null,
   "fdesc": "There's a magnetic key-card on the floor.",
   "loc": "CARD-ROOM",
   "flags": [
    "TAKEABLE",
    "READABLE"
   ],
   "synonyms": [
    "CARD",
    "KEY",
    "KEYCARD",
    "KEY-CARD"
   ],
   "adjectives": [
    "MAGNETIC",
    "PLASTIC",
    "KEY"
   ],
   "action": "KEY-F",
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
   "source": "<OBJECT KEY\n\t(LOC CARD-ROOM)\n\t(DESC \"magnetic key-card\")\n\t(FLAGS TAKEABLE READABLE)\n\t(SYNONYM CARD KEY KEYCARD KEY-CARD)\n\t(ADJECTIVE MAGNETIC PLASTIC KEY)\n\t(FDESC \"There's a magnetic key-card on the floor.\")\n\t(SIZE 1)\n\t(ACTION KEY-F)>",
   "referencedBy": []
  },
  "RANDOM-CARTRIDGE": {
   "name": "RANDOM-CARTRIDGE",
   "file": "zalagasa.zil",
   "line": 538,
   "endLine": 547,
   "desc": "unlabelled cartridge",
   "ldesc": "This cartridge has obviously seen considerable use. Whatever\nlabel it had on it is long gone and hard to find.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEABLE",
    "PROGRAM",
    "VOWEL"
   ],
   "synonyms": [
    "CARTRIDGE",
    "CART",
    "CARTS",
    "ROM",
    "PROGRAM",
    "SOFTWARE"
   ],
   "adjectives": [
    "UNLABELLED",
    "UNLABELED",
    "PROGRAM",
    "ROM",
    "SOFTWARE",
    "UNLABELED"
   ],
   "action": "RANDOM-CARTRIDGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "2"
    ],
    "GENERIC": [
     "GENERIC-SOFTWARE-F"
    ]
   },
   "contents": [],
   "source": "<OBJECT RANDOM-CARTRIDGE\n\t(DESC \"unlabelled cartridge\")\n\t(FLAGS TAKEABLE PROGRAM VOWEL)\n\t(SIZE 2)\n\t(GENERIC GENERIC-SOFTWARE-F)\n\t(LDESC \"This cartridge has obviously seen considerable use. Whatever\nlabel it had on it is long gone and hard to find.\")\n\t(SYNONYM CARTRIDGE CART CARTS ROM PROGRAM SOFTWARE)\n\t(ADJECTIVE UNLABELLED UNLABELED PROGRAM ROM SOFTWARE UNLABELED)\n\t(ACTION RANDOM-CARTRIDGE-F)>",
   "referencedBy": []
  }
 },
 "routines": {
  "A-ENTRANCE-F": {
   "name": "A-ENTRANCE-F",
   "file": "jet.zil",
   "line": 25,
   "endLine": 32,
   "source": "<ROUTINE A-ENTRANCE-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"Default description of \" D ,HERE \".\" CR>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER> <NOT ,A-INIT>>\n\t\t<QUEUE I-TERMINAL 0>\n\t\t<SETG A-INIT T>\n\t\t<INIT-AIRPLANE>\n\t\t<RTRUE>)>>"
  },
  "INIT-AIRPLANE": {
   "name": "INIT-AIRPLANE",
   "file": "jet.zil",
   "line": 34,
   "endLine": 35,
   "source": "<ROUTINE INIT-AIRPLANE ()\n\t <RTRUE>>"
  },
  "A-COCKPIT-F": {
   "name": "A-COCKPIT-F",
   "file": "jet.zil",
   "line": 53,
   "endLine": 55,
   "source": "<ROUTINE A-COCKPIT-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"Default description of \" D ,HERE \".\" CR>)>>"
  },
  "A-GALLEY-F": {
   "name": "A-GALLEY-F",
   "file": "jet.zil",
   "line": 66,
   "endLine": 68,
   "source": "<ROUTINE A-GALLEY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"Default description of \" D ,HERE \".\" CR>)>>"
  },
  "A-AISLE-F": {
   "name": "A-AISLE-F",
   "file": "jet.zil",
   "line": 81,
   "endLine": 114,
   "source": "<ROUTINE A-AISLE-F (RARG \"AUX\" ST A (CNT 0) (NS 0))\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<SET A <GETP ,HERE ,P?AISLE>>\n\t\t<TELL\n\"You are \">\n\t\t<COND (,SEATED?\n\t\t       <TELL \"in seat \" N .A>\n\t\t       <PRINTC <+ 64 </ ,SEATED? 1000>>>)\n\t\t      (T\n\t\t       <TELL \"standing in the middle of aisle \" N .A>)>\n\t\t<TELL \". \">\n\t\t<SET ST <SEAT-INFO .A>>\n\t\t<REPEAT ()\n\t\t\t;\"What about seat you're in?\"\n\t\t\t<COND (<G? .CNT 4> <RETURN>)>\n\t\t\t<COND (<0? <GET .ST .CNT>>\n\t\t\t       <COND (<0? .NS>\n\t\t\t\t      <TELL \"Seat \">)\n\t\t\t\t     (T\n\t\t\t\t      <TELL \" and seat \">)>\n\t\t\t       <SET NS <+ .NS 1>>\n\t\t\t       <TELL N .A>\n\t\t\t       <PRINTC <+ 65 .CNT>>)>\n\t\t\t<SET CNT <+ .CNT 1>>>\n\t\t<COND (<0? .NS>\n\t\t       <TELL \"All of the seats in this aisle are taken.\">)\n\t\t      (<1? .NS>\n\t\t       <TELL \" is the only unoccupied one here.\">)\n\t\t      (T\n\t\t       <TELL \" are unoccupied.\">)>\n\t\t<COND (,SEATED?\n\t\t       <TELL \" The seat pocket in front of you\ncontains the usual printed materials.\">)>\n\t\t<CRLF>)>>"
  },
  "SEAT-INFO": {
   "name": "SEAT-INFO",
   "file": "jet.zil",
   "line": 116,
   "endLine": 117,
   "source": "<ROUTINE SEAT-INFO (A)\n\t <REST ,SEATING-TBL <* <- .A 1> 8>>>"
  },
  "A-SEAT-EXIT": {
   "name": "A-SEAT-EXIT",
   "file": "jet.zil",
   "line": 119,
   "endLine": 123,
   "source": "<ROUTINE A-SEAT-EXIT ()\n\t <TELL \n\"If you want to sit down here, simply indicate the seat you're interested\nin (e.g. 13B).\" CR>\n\t <RFALSE>>"
  },
  "A-REAR-F": {
   "name": "A-REAR-F",
   "file": "jet.zil",
   "line": 280,
   "endLine": 282,
   "source": "<ROUTINE A-REAR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"Default description of \" D ,HERE \".\" CR>)>>"
  },
  "A-LAVATORY-F": {
   "name": "A-LAVATORY-F",
   "file": "jet.zil",
   "line": 293,
   "endLine": 295,
   "source": "<ROUTINE A-LAVATORY-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"Not described yet.\" CR>)>>"
  },
  "A-LAVATORY-DOOR-F": {
   "name": "A-LAVATORY-DOOR-F",
   "file": "jet.zil",
   "line": 305,
   "endLine": 306,
   "source": "<ROUTINE A-LAVATORY-DOOR-F ()\n\t <TELL \"Place holder.\" CR>> "
  },
  "A-REAR-EW-F": {
   "name": "A-REAR-EW-F",
   "file": "jet.zil",
   "line": 317,
   "endLine": 319,
   "source": "<ROUTINE A-REAR-EW-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL \"Default description of \" D ,HERE \".\" CR>)>>"
  },
  "MOVIE-F": {
   "name": "MOVIE-F",
   "file": "jet.zil",
   "line": 344,
   "endLine": 364,
   "source": "<ROUTINE MOVIE-F ()\n\t <COND (<NOT <FSET? ,HERE ,AIRPLANEBIT>>\n\t\t<TELL\n\"There's certainly no movie around here.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<EQUAL? ,MOVIE-TIME 0>\n\t\t       <TELL\n\"There's no movie playing at this time.\" CR>)\n\t\t      (T\n\t\t       <TELL <GET <GET ,MOVIE-TBL ,ON-FLIGHT>\n\t\t\t\t  ,MOVIE-TIME> CR>\n\t\t       <COND (<EQUAL? ,MOVIE-TIME 5>\n\t\t\t      <SETG MOVIE-TIME -1>\n\t\t\t      <QUEUE I-MOVIE 0>\n\t\t\t      <TELL\n\"The in-flight movie ends, the lights come up, and the stewardess pulls\nup the screen at the front of the plane.\" CR>\n\t\t\t      <START-AIRPLANE-FUN>)\n\t\t\t     (T\n\t\t\t      <V-WAIT 10 T>)>\n\t\t       <RTRUE>)>)>>"
  },
  "START-AIRPLANE-FUN": {
   "name": "START-AIRPLANE-FUN",
   "file": "jet.zil",
   "line": 366,
   "endLine": 372,
   "source": "<ROUTINE START-AIRPLANE-FUN ()\n\t <COND (<EQUAL? ,ON-FLIGHT 1>\n\t\t<START-HIJACK>)\n\t       (<EQUAL? ,ON-FLIGHT 2>\n\t\t<START-VISA>)\n\t       (T\n\t\t<START-JUMP>)>>"
  },
  "START-JUMP": {
   "name": "START-JUMP",
   "file": "jet.zil",
   "line": 374,
   "endLine": 374,
   "source": "<ROUTINE START-JUMP () <RTRUE>>"
  },
  "START-VISA": {
   "name": "START-VISA",
   "file": "jet.zil",
   "line": 376,
   "endLine": 378,
   "source": "<ROUTINE START-VISA ()\n\t <ENABLE <QUEUE I-VISA-MESSAGE 3>>\n\t <RTRUE>>"
  },
  "I-VISA-MESSAGE": {
   "name": "I-VISA-MESSAGE",
   "file": "jet.zil",
   "line": 380,
   "endLine": 388,
   "source": "<ROUTINE I-VISA-MESSAGE ()\n\t <TELL\n\"A message comes over the PA system in Zalagasan and then English: \\\"This\nis your Captain speaking. We are making our initial descent into Bananareeve.\nAt this time, our cabin attendants will be passing out Immigration Forms which\nmust be completed prior to landing. Thank you for your cooperation and we hope\nyou have enjoyed your flight thus far.\\\"\" CR>\n\t <ENABLE <QUEUE I-VISA-1 3>>\n\t <RTRUE>>"
  },
  "I-VISA-1": {
   "name": "I-VISA-1",
   "file": "jet.zil",
   "line": 390,
   "endLine": 395,
   "source": "<ROUTINE I-VISA-1 ()\n\t <TELL\n\"A stewardess approaches you and hands you a form.\" CR>\n\t <MOVE ,IMMIGRATION-FORM ,WINNER>\n\t <ENABLE <QUEUE I-VISA-2 10>>\n\t <RTRUE>>"
  },
  "I-VISA-2": {
   "name": "I-VISA-2",
   "file": "jet.zil",
   "line": 397,
   "endLine": 403,
   "source": "<ROUTINE I-VISA-2 ()\n\t <TELL\n\"The stewardess returns and asks for your completed immigration form.\" CR>\n\t <MOVE ,A-ATTENDANT ,HERE>\n\t <ENABLE <QUEUE I-VISA-3 -1>>\n\t <PUTP ,PROTAGONIST ,P?ACTION ,A-FORM-WAIT>\n\t <RTRUE>>"
  },
  "ASK-TO-LEAVE": {
   "name": "ASK-TO-LEAVE",
   "file": "jet.zil",
   "line": 409,
   "endLine": 416,
   "source": "<ROUTINE ASK-TO-LEAVE ()\n\t <TELL CR\n\"\\\"I'm sorry, sir, but I'm going to have to ask you to leave.\\\" She\nmotions to the purser who motions you toward the back of the plane.\" CR>\n\t <QUEUE I-VISA-3 0>\n\t <PUTP ,PROTAGONIST ,P?ACTION ,WALK-THE-PLANK>\n\t <ENABLE <QUEUE I-VISA-4 -1>>\n\t <RTRUE>>"
  },
  "I-VISA-4": {
   "name": "I-VISA-4",
   "file": "jet.zil",
   "line": 418,
   "endLine": 438,
   "source": "<ROUTINE I-VISA-4 ()\n\t <COND (<EQUAL? ,HERE ,A-REAR-W ,A-REAR-E>\n\t\t<TELL CR\n\"The purser politely places a parachute on your back and, as he lifts\nthe large red handle on the emergency exit, those nice plastic oxygen\nmasks you've seen demonstrated hundreds of times come out. The captain\ncomes on the PA, explaining \\\"Ladies and Gentlemen, one of our passengers\nis deplaining at this time, so we would suggest that you use the oxygen\nmasks until we can again close the rear door. Thank you.\\\"|\n|\nA rush of cold air fills the cabin as the door opens. As the purser\npolitely but firmly ejects you from the plane, he speaks: \\\"It has\nbeen our pleasure serving you today, and if your future plans call for\nair travel to Bananareeve, we hope you will again think of Air\nZalagasa.\\\" You start your fall into the African night....\" CR CR>\n\t\t<PUTP ,PROTAGONIST ,P?ACTION 0>\n\t\t<GOTO ,A-MIDAIR>\n\t\t<QUEUE I-VISA 0>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "AIRPLANE-EXIT-F": {
   "name": "AIRPLANE-EXIT-F",
   "file": "jet.zil",
   "line": 454,
   "endLine": 481,
   "source": "<ROUTINE AIRPLANE-EXIT-F ()\n\t <COND (,AT-AIRPLANE-DOOR?\n\t\t<COND (<VERB? OPEN UNLOCK>\n\t\t       <TELL\n\"There's no way to open it from this side when it's locked from the\ninside.\" CR>)\n\t\t      (<VERB? KNOCK>\n\t\t       <TELL\n\"After a few moments violent knocking, the stewardess turns around, revealing\na strange, suspicious-looking man carrying a yellow walkie-talkie behind her.\nShe seems terribly pleased to be able to serve you yet again. She cheerfully\nopens the door, inquires \\\"May I help you?\\\", and thoughtfully waves goodbye\nas you once again plunge headlong into the night...\" CR CR>\n\t\t       <SETG AT-AIRPLANE-DOOR? <>>\n\t\t       <SETG FLY-HACK? <>>\n\t\t       <V-LOOK>\n\t\t       <RTRUE>)\n\t\t      (<VERB? EXAMINE>\n\t\t       <TELL\n\"Your appreciation of doors is not exceptionally high at present, but you\njudge it nonetheless to be quite a servicable one.\" CR>)>)\n\t       (,FLY-HACK?\n\t\t<TELL\n\"Unfortunately for you, you can't possibly get near it from here.\" CR>)\n\t       (T\n\t\t<TELL\n\"Sadly, you've left the airplane and it's various means of ingress and\negress thousands of feet behind.\" CR>)>> "
  },
  "A-MIDAIR-F": {
   "name": "A-MIDAIR-F",
   "file": "jet.zil",
   "line": 491,
   "endLine": 583,
   "source": "<ROUTINE A-MIDAIR-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (,AT-AIRPLANE-DOOR?\n\t\t       <TELL\n\"You now have a fine view through the window of the plane's emergency exit.\nInside, the passengers and crew seem to be doing very little of the sort\nof freezing and suffocating that you are starting to become accustomed to.\nThe stewardess who was kind enough to help with your airborne departure is\nstanding with her back to the window.\" CR>)\n\t\t      (,FLY-HACK?\n\t\t       <TELL\n\"You are currently freezing to death from the -20 degree temperature,\nsuffocating from the rarified 30,000 ft air, and, if that wasn't bad\nenough, you're trailing about fifteen feet behind the emergency exit of \nyour flight to Bananareeve.\" CR>)\n\t\t      (,CHUTE-DEPLOYED?\n\t\t       <TELL\n\"You are falling serenely through the African night. It might be possible\nto enjoy the scenery were it not for the total darkness which envelopes\nyou. You are suspended by a multi-colored parachute which is strapped\nto your back.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You are in free-fall somewhere above the African continent, presumably\nnear Bananareeve. It's pretty deserted on the ground, judging by the fact\nthat nothing is lighted. You are wearing a parachute on your back. A red\nhandle attached to a long cord hangs over your right shoulder.\" CR>)>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (,FLY-HACK?\n\t\t       <COND (<G? <SETG FLY-HACK? <+ ,FLY-HACK? 1>> 4>\n\t\t\t      <TELL\n\"Your body, in its final spasms, seems unable to decide upon whether your\ncause of death will be the lack of air or the frosty temperature. It is\nfinally decided that a toss of a coin will decide (There is a great deal\nof literary licence here. In fact, the decision was to poll a few hundred\nthousand synapses at random.) The winner, though, is \">\n\t\t\t      <COND (<PROB 50> <TELL \"suffocation\">)\n\t\t\t\t    (T <TELL \"freezing to death\">)>\n\t\t\t      <JIGS-UP \".\">\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<AND <EQUAL? ,MIDAIR-COUNT 0>\n\t\t\t    <VERB? WALK>\n\t\t\t    <EQUAL? ,PRSO ,P?UP>>\n\t\t       <TELL\n\"Of course, it's absurd to think you can fly, and maybe it's just the\neffect of not much oxygen on not much grey matter, but you seem to have\nbroken your fall. This illusion is quickly broken as you notice that one\nof the straps on the parachute is caught in the door of the airplane.\" CR>\n\t\t       <SETG FLY-HACK? 1>)\n\t\t      (<AND <VERB? WALK> <NOT <EQUAL? ,PRSO ,P?DOWN>>>\n\t\t       <TELL\n\"Your sense of direction never was very good, and the fact that you have\nno visual references is not helping. You might as well get used to\n\\\"down\\\".\" CR>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<COND (<NOT ,FLY-HACK?>\n\t\t       <SETG MIDAIR-COUNT <+ ,MIDAIR-COUNT 1>>)>\n\t\t<COND (<AND <EQUAL? ,MIDAIR-COUNT 1> <NOT ,FLY-HACK?>>\n\t\t       <SETG FLY-HACK? 1>\n\t\t       <TELL CR\n\"Just when you were getting used to the idea of falling to your death,\nyou find that one of the straps on your parachute is caught in the\nemergency exit of the airplane.\" CR>)\n\t\t      (<G? ,MIDAIR-COUNT 5>\n\t\t       <COND (<NOT ,CHUTE-DEPLOYED?>\n\t\t\t      <JIGS-UP\n\"Your fall comes to a rather abrupt stop as your body makes contact with\nterra firma. Although you're dead, it might interest you to know that you\nlanded in a tree filled with aye-ayes, which, had you managed to take\ntheir picture, would have brought you fame and fortune.\">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The ground becomes visible when you are about a few hundred feet up, so\nyou are able to watch as your chute grabs hold of a passing branch, sending\nyou into a near-perfect backflip. The end result is that you are now hanging\nupside-down, some twenty-odd feet above the ground, suspended by what remains\nof your parachute. Your philisophical side tells you \\\"It could be worse - it\ncould be raining.\\\", while your rational side tells you that, in fact, it is.\"\nCR>\n\t\t\t      <GOTO ,IN-A-TREE>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND ,FLY-HACK? <G? ,FLY-HACK? 1>>\n\t\t       <TELL\n\"I don't mean to worry you, but do you realize that you are freezing to death\neven as you suffocate?\" CR>)\n\t\t      (,CHUTE-DEPLOYED?\n\t\t       <TELL\n\"You continue your leisurely descent, pleased that things seem to be getting\na bit under control.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You continue your precipitous descent through the night sky.\" CR>)>)>> "
  },
  "RIP-CORD-F": {
   "name": "RIP-CORD-F",
   "file": "jet.zil",
   "line": 601,
   "endLine": 622,
   "source": "<ROUTINE RIP-CORD-F ()\n\t <COND (<VERB? MOVE>\n\t\t<COND (,CHUTE-DEPLOYED?\n\t\t       <TELL \"Nothing happens this time.\" CR>)\n\t\t      (,FLY-HACK?\n\t\t       <JIGS-UP\n\"Things were bad enough with one of the parachute straps stuck in the\nemergency exit. Pulling the cord, as you might have expected, has added\nthe complication of a deployed parachute as well. The various straps,\ncords, and other parachute paraphenalia, each going its own way, sends\nyou flying in a number of unpleasant pieces.\">)\n\t\t      (T\n\t\t       <SETG CHUTE-DEPLOYED? T>\n\t\t       <TELL\n\"Your luck seems to be changing. Instead of simply falling off in\nyour hand, the cord actually appears to have been attached to the\nchute and pulling it has caused the chute to deploy. This results\nin a greatly slowed rate of descent.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It's just a red handle attached to a cord. All in all, it looks like the\nsort of thing one pulls to cause a parachute to deploy.\" CR>)>>"
  },
  "PARACHUTE-F": {
   "name": "PARACHUTE-F",
   "file": "jet.zil",
   "line": 624,
   "endLine": 644,
   "source": "<ROUTINE PARACHUTE-F ()\n\t <COND (<AND <VERB? MOVE> ,FLY-HACK?>\n\t\t<TELL\n\"Using all the strength you can muster, you pull yourself toward the\nemergency exit of the plane.\" CR CR>\n\t\t<SETG AT-AIRPLANE-DOOR? T>\n\t\t<V-LOOK>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (,FLY-HACK?\n\t\t       <TELL\n\"The chute is strapped to your back, which is good, and to the emergency\nexit of the airplane, which is bad.\" CR>)\n\t\t      (,CHUTE-DEPLOYED?\n\t\t       <TELL\n\"Although you can tell it's above you somewhere, the thickness of the night\nand clouds prevent you from seeing it.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It's on your back, you know, so you can't tell much. A red handle attached\nto a cord, though, flutters nearby.\" CR>)>)>>"
  },
  "WALK-THE-PLANK": {
   "name": "WALK-THE-PLANK",
   "file": "jet.zil",
   "line": 646,
   "endLine": 667,
   "source": "<ROUTINE WALK-THE-PLANK ()\n\t <COND (<VERB? WALK>\n\t\t<COND (<EQUAL? ,HERE ,A-REAR>\n\t\t       <COND (<EQUAL? ,PRSO ,P?WEST ,P?EAST>\n\t\t\t      <TELL\n\"The purser and stewardess follow you toward the emergency exit.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <FORCE-WALK ,P?EAST \"east\">\n\t\t\t      <RFALSE>)>)\n\t\t      (<EQUAL? ,PRSO ,P?SOUTH>\n\t\t       <TELL\n\"The purser and stewardess follow closely as you walk rearward.\" CR>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <FORCE-WALK ,P?SOUTH \"south\">\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t;\"Will handle some more stuff here\"\n\t\t<FORCE-WALK ,P?SOUTH \"south\">\n\t\t<PERFORM ,V?WALK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "FORCE-WALK": {
   "name": "FORCE-WALK",
   "file": "jet.zil",
   "line": 669,
   "endLine": 676,
   "source": "<ROUTINE FORCE-WALK (DIR STR)\n\t <SETG SEATED? <>>\n\t <TELL\n\"The purser has a different idea, and pushes you toward the \" .STR>\n\t <SETG P-WALK-DIR .DIR>\n\t <SETG PRSO .DIR>\n\t <EOS>\n\t <CRLF>>"
  },
  "I-VISA-3": {
   "name": "I-VISA-3",
   "file": "jet.zil",
   "line": 678,
   "endLine": 693,
   "source": "<ROUTINE I-VISA-3 ()\n\t <COND (<G? <SETG FORM-WAIT <+ ,FORM-WAIT 1>> 5>\t\t    \n\t\t<ASK-TO-LEAVE>)\n\t       (<AND <G? ,VISA-WAIT 0>\n\t\t     <G? <SETG VISA-WAIT <+ ,VISA-WAIT 1>> 5>>\n\t\t<ASK-TO-LEAVE>)\n\t       (<EQUAL? ,VISA-WAIT 0>\n\t\t<TELL CR <GET ,FORM-WAITS ,FORM-WAIT> CR>\n\t\t<COND (<G? ,FORM-WAIT 4>\n\t\t       <MOVE ,A-PURSER ,HERE>)>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL CR <GET ,VISA-WAITS ,VISA-WAIT> CR>\n\t\t<COND (<G? ,VISA-WAIT 4>\n\t\t       <MOVE ,A-PURSER ,HERE>)>\n\t\t<RTRUE>)>>"
  },
  "A-ATTENDANT-F": {
   "name": "A-ATTENDANT-F",
   "file": "jet.zil",
   "line": 704,
   "endLine": 730,
   "source": "<ROUTINE A-ATTENDANT-F ()\n\t <COND (<NOT <RUNNING? I-VISA-3>>\n\t\t<COND (<AND <VERB? GIVE SHOW> <EQUAL? ,PRSO ,ME>>\n\t\t       <TELL \".\" CR>)\n\t\t      (<AND <VERB? GIVE SHOW> <EQUAL? ,PRSO ,A-ATTENDANT>>\n\t\t       <TELL\n\"The \" D ,PRSO \" isn't really interested in your \" D ,PRSI \".\" CR>)>) \n\t       (<AND <VERB? GIVE SHOW>\n\t\t     <EQUAL? ,PRSO ,IMMIGRATION-FORM>>\n\t\t<COND (,VISA-FILLED?\n\t\t       <TELL\n\"She looks carefully at your form, then returns it. \\\"I don't know\nif this is some kind of joke, but that's not a valid visa number.\nNow, please, just fill in the form.\\\"\" CR>)\n\t\t      (,IMMIGRATION-FILLED?\n\t\t       <TELL\n\"She looks over the form and hands it back to you. \\\"You must have\nforgotten to complete your visa number. I'll just wait here while\nyou fill it in.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"She sees that you haven't filled in the form and returns it to\nyou. \\\"I'll just wait here until you've completed the form.\\\"\" CR>)>)\n\t       (<OR <AND <EQUAL? ,PRSO ,APOLOGY <VERB? MAKE-TO>>>\n\t\t    <VERB? APOLOGIZE>>\n\t\t<TELL\n\"She doesn't seem interested in any apologies or excuses.\" CR>)>>"
  },
  "MAKE-ATTENDANT-APPEAR": {
   "name": "MAKE-ATTENDANT-APPEAR",
   "file": "jet.zil",
   "line": 739,
   "endLine": 744,
   "source": "<ROUTINE MAKE-ATTENDANT-APPEAR ()\n\t <MOVE ,A-ATTENDANT ,HERE>\n\t <TELL\n\"Responding to your call, an attendant appears.\" CR>\n\t <ENABLE <QUEUE I-ATTENDANT-LEAVES 3>>\n\t <RTRUE>>"
  },
  "I-ATTENDANT-LEAVES": {
   "name": "I-ATTENDANT-LEAVES",
   "file": "jet.zil",
   "line": 746,
   "endLine": 749,
   "source": "<ROUTINE I-ATTENDANT-LEAVES ()\n\t <TELL\n\"\\\"I'm sorry, but I'll have to be leaving now.\" CR>\n\t <REMOVE ,A-ATTENDANT>>"
  },
  "GLOBAL-ATTENDANT-F": {
   "name": "GLOBAL-ATTENDANT-F",
   "file": "jet.zil",
   "line": 751,
   "endLine": 773,
   "source": "<ROUTINE GLOBAL-ATTENDANT-F ()\n\t <COND (<FSET? ,HERE ,AIRPLANEBIT>\n\t\t<COND (<VERB? WAIT-FOR CALL>\n\t\t       <COND (<QUEUED? I-VISA-2>\n\t\t\t      <QUEUE I-VISA-2 2>\n\t\t\t      <TELL\n\"A stewardess, noticing your impatience, walks toward you.\" CR>)\n\t\t\t     (T\n\t\t\t      <MAKE-ATTENDANT-APPEAR>)>)>)\n\t       (<EQUAL? ,HERE ,A-MIDAIR>\n\t\t<COND (<VERB? WAVE-AT>\n\t\t       <PERFORM ,V?KNOCK ,AIRPLANE-EXIT>\n\t\t       <RTRUE>)\n\t\t      (<VERB? HELLO>\n\t\t       <TELL \"Unlikely she can hear you.\" CR>)\n\t\t      (<VERB? WAIT-FOR>\n\t\t       <TELL \"You'd die first.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"She's inside and you're outside, if you haven't noticed.\" CR>)>)\n\t       (T\n\t\t<TELL\n\"You can't see any stewardess here.\" CR>)>>"
  },
  "A-FORM-WAIT": {
   "name": "A-FORM-WAIT",
   "file": "jet.zil",
   "line": 805,
   "endLine": 809,
   "source": "<ROUTINE A-FORM-WAIT ()\n\t <COND (<VERB? WALK>\n\t\t<TELL\n\"The stewardess stands in your way. \\\"I'm sorry, sir, but I'll need that\nform now.\\\"\" CR>)>>"
  },
  "VISA-NUMBER-F": {
   "name": "VISA-NUMBER-F",
   "file": "jet.zil",
   "line": 826,
   "endLine": 838,
   "source": "<ROUTINE VISA-NUMBER-F ()\n\t <COND (<VERB? FILL-IN MAKE-UP>\n\t\t<COND (<EQUAL? ,VISA-WAIT 0>\n\t\t       <SETG VISA-WAIT 1>)>\n\t\t<COND (,VISA-FILLED?\n\t\t       <TELL\n\"You erase the visa number you had tried before and attempt a different\none.\" CR>)\n\t\t      (T\n\t\t       <SETG VISA-FILLED? T>\n\t\t       <TELL\n\"You make up some visa number or other and write it in the appropriate\nspace on the form.\" CR>)>)>>"
  },
  "IMMIGRATION-FORM-F": {
   "name": "IMMIGRATION-FORM-F",
   "file": "jet.zil",
   "line": 843,
   "endLine": 858,
   "source": "<ROUTINE IMMIGRATION-FORM-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"The form is a simple one, in which you are asked to supply your name,\npassport number, visa number, and length of stay.\" CR>)\n\t       (<VERB? FILL-IN>\n\t\t<COND (,IMMIGRATION-FILLED?\n\t\t       <TELL\n\"You've already filled in the form (except for the visa number). If you\nwant to fill in the visa number, just say so.\" CR>)\n\t\t      (T\n\t\t       <SETG IMMIGRATION-FILLED? T>\n\t\t       <TELL\n\"You fill in the form, except, of course, for the visa number, which\nyou haven't got since your travel plans didn't call for a trip to\nBananareeve today.\" CR>)>)>>"
  },
  "START-HIJACK": {
   "name": "START-HIJACK",
   "file": "jet.zil",
   "line": 860,
   "endLine": 868,
   "source": "<ROUTINE START-HIJACK ()\n\t <TELL\n\"You are startled at a commotion behind you. You turn around to find\nyourself looking down the barrel of a large revolver. Attached to the\nrevolver is the hand and arm of a man around whose waist are a string\nof hand grenades and sticks of dynamite. \\\"You! Up!\\\" he shouts.\" CR>\n\t <MOVE ,HIJACKER ,HERE>\n\t <ENABLE <QUEUE I-HIJACK 2>>\n\t <RTRUE>>"
  },
  "I-HIJACK": {
   "name": "I-HIJACK",
   "file": "jet.zil",
   "line": 870,
   "endLine": 872,
   "source": "<ROUTINE I-HIJACK ()\n\t <TELL CR\n\"The hijacker forces you to the cockpit of the plane.\" CR>>"
  },
  "HIJACKER-F": {
   "name": "HIJACKER-F",
   "file": "jet.zil",
   "line": 880,
   "endLine": 897,
   "source": "<ROUTINE HIJACKER-F ()\n\t <COND (<EQUAL? ,WINNER ,HIJACKER>\n\t\t<COND (<IN? ,GRENADE ,HERE>\n\t\t       <TELL\n\"\\\"Oh, leave me alone.\\\"\" CR>)\n\t\t      (<EXPLODES?> <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"Shut up or I'll blow your brains out.\\\"\" CR>)>)\n\t       (<VERB? OPEN CLOSE LOOK-INSIDE>\n\t\t<TELL \"Don't be silly.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"He is a man of medium height, with a few days growth of beard on his\nchin. Around his waist are strapped a couple of hand grenades, a couple\nof sticks of dynamite, and an antenna-bearning yellow device which would\nappear to be a transmitter of some sort. He is holding a gun which is\naimed between your eyes.\" CR>)>>"
  },
  "GUN-F": {
   "name": "GUN-F",
   "file": "jet.zil",
   "line": 906,
   "endLine": 912,
   "source": "<ROUTINE GUN-F ()\n\t <COND (<VERB? TAKE PULL>\n\t\t<EXPLOSIVES-F>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"You've never before witnessed the insides of the barrel of a gun, but\nthis is exactly the view you get looking at the gun.\" CR>)>>"
  },
  "EXPLOSIVES-F": {
   "name": "EXPLOSIVES-F",
   "file": "jet.zil",
   "line": 921,
   "endLine": 930,
   "source": "<ROUTINE EXPLOSIVES-F ()\n\t <COND (<VERB? TAKE PULL>\n\t\t<COND (<EXPLODES?>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \n\"\\\"I'll kill you, I swear it, if you go near me!\\\"\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"These appear to be the real thing.\" CR>)>>"
  },
  "EXPLODES?": {
   "name": "EXPLODES?",
   "file": "jet.zil",
   "line": 934,
   "endLine": 943,
   "source": "<ROUTINE EXPLODES? ()\n\t <COND (<G? <SETG BLOW-UP <+ ,BLOW-UP 1>> 5>\n\t\t<TELL\n\"\\\"Ok, that's it!\\\" He raises the gun and pulls the trigger. Nothing happens.\n\\\"Damned guns!\\\" he explains, as he pulls the trigger again. Nothing happens\nagain. \\\"Wouldn't surprise me if none of this stuff works.\\\" he spits. He\nattemps to prove this by pulling the pin on one of his grenades. \\\"See ...\nnothing. Damned grenade.\\\" He dejectedly tosses the grenade aside.\" CR>\n\t\t<MOVE ,GRENADE ,HERE>\n\t\t<ENABLE <QUEUE I-BLOW-UP 3>>)>>"
  },
  "GRENADE-F": {
   "name": "GRENADE-F",
   "file": "jet.zil",
   "line": 952,
   "endLine": 956,
   "source": "<ROUTINE GRENADE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It's an ordinary grenade, except that its pin has been pulled. Few people\nexperience this sight for more than a few moments.\" CR>)>> "
  },
  "I-BLOW-UP": {
   "name": "I-BLOW-UP",
   "file": "jet.zil",
   "line": 958,
   "endLine": 962,
   "source": "<ROUTINE I-BLOW-UP ()\n\t <CRLF>\n\t <JIGS-UP\n\"It will no doubt interest you to learn that the hijacker was wrong about\nthe grenade. It dutifully explodes, ending your rather unpleasant flight.\">>  "
  },
  "WALKIE-TALKIE-F": {
   "name": "WALKIE-TALKIE-F",
   "file": "jet.zil",
   "line": 972,
   "endLine": 978,
   "source": "<ROUTINE WALKIE-TALKIE-F ()\n\t <COND (<VERB? TAKE PULL>\n\t\t<EXPLOSIVES-F>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"You can't tell too much about it, though on inspection it's more clearly\na walkie-talkie of some sort.\" CR>)>>"
  },
  "I-MOVIE": {
   "name": "I-MOVIE",
   "file": "jet.zil",
   "line": 986,
   "endLine": 1001,
   "source": "<ROUTINE I-MOVIE ()\n\t <SETG MOVIE-TIME <+ ,MOVIE-TIME 1>>\n\t <COND (<EQUAL? ,MOVIE-TIME 1>\n\t\t<TELL\n\"A flight attendant pulls down a screen in the front of the plane, the\nlights are dimmed, and the in-flight movie starts.\" CR>\n\t\t<QUEUE I-MOVIE 10>\n\t\t<RTRUE>)\n\t       (<G? ,MOVIE-TIME 5>\n\t\t<TELL\n\"The movie ends, the lights go up, and the stewardess pulls the screen\nback up.\" CR>\n\t\t<START-AIRPLANE-FUN>)\n\t       (T\n\t\t<QUEUE I-MOVIE 10>\n\t\t<RFALSE>)>>"
  },
  "V-$VISA": {
   "name": "V-$VISA",
   "file": "jet.zil",
   "line": 1045,
   "endLine": 1047,
   "source": "<ROUTINE V-$VISA ()\n\t <START-VISA>\n\t <TELL \"[Visa problem starts.]\" CR>>"
  },
  "V-$MOVIE": {
   "name": "V-$MOVIE",
   "file": "jet.zil",
   "line": 1049,
   "endLine": 1051,
   "source": "<ROUTINE V-$MOVIE ()\n\t <ENABLE <QUEUE I-MOVIE 2>>\n\t <TELL \"[Enjoy the movie!]\" CR>>"
  },
  "V-$AIRPLANE": {
   "name": "V-$AIRPLANE",
   "file": "jet.zil",
   "line": 1053,
   "endLine": 1060,
   "source": "<ROUTINE V-$AIRPLANE ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL \"[Illegal $AIRPLANE]\" CR>)\n\t       (<AND <G? ,P-NUMBER 0> <L? ,P-NUMBER 4>>\n\t\t<SETG ON-FLIGHT ,P-NUMBER>\n\t\t<SETG CURRENT-TIME 735>\n\t\t<GOTO ,A-1>\n\t\t<TELL \"[On airplane #\" N ,ON-FLIGHT \"]\" CR>)>>"
  },
  "GLOBAL-WINDOW-F": {
   "name": "GLOBAL-WINDOW-F",
   "file": "jet.zil",
   "line": 1095,
   "endLine": 1107,
   "source": "<ROUTINE GLOBAL-WINDOW-F ()\n\t <COND (<FSET? ,HERE ,AIRPLANEBIT>\n\t\t<COND (<EQUAL? ,HERE ,A-LAVATORY ,A-REAR ,A-GALLEY>\n\t\t       <TELL\n\"There's no window you can see through from here.\" CR>)\n\t\t      (<G? ,PRESENT-TIME 950>\n\t\t       <TELL\n\"You can see a beautiful blue sky, with white puffy clouds below.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It's dark outside the airplane, so you can't see much.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't see any window here.\" CR>)>>"
  },
  "GLOBAL-SEAT-F": {
   "name": "GLOBAL-SEAT-F",
   "file": "jet.zil",
   "line": 1140,
   "endLine": 1197,
   "source": "<ROUTINE GLOBAL-SEAT-F (\"AUX\" A S)\n\t <COND (<NOT <FSET? ,HERE ,AIRPLANEBIT>>\n\t\t<TELL\n\"You can't see any seat here.\" CR>)\n\t       (<VERB? WALK-TO>\n\t\t<TELL\n\"It shouldn't be so hard for you to get to any seat, since there are\nonly 14 rows and they are conveniently numbered in order.\" CR>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<SET S </ ,P-NUMBER 1000>>\n\t\t<SET A <MOD ,P-NUMBER 1000>>\n\t\t<COND (<NOT <GETP ,HERE ,P?AISLE>>\n\t\t       <TELL\n\"You can't see that seat from here.\" CR>)\n\t\t      (<NOT <EQUAL? <GETP ,HERE ,P?AISLE> .A>>\n\t\t       <COND (,SEATED?\n\t\t\t      <TELL\n\"It's hard tell, since you're seated.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You can't tell much, but there \">\n\t\t\t      <COND (<0? <FIND-SEAT .A .S>>\n\t\t\t\t     <TELL \"doesn't seem\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"seems\">)>\n\t\t\t      <TELL \" to be somebody sitting in it.\" CR>)>)>)\n\t       (<VERB? SIT BOARD CLIMB-ON>\n\t\t<COND (<OR <L? ,P-NUMBER 0> <NOT <FSET? ,HERE ,AIRPLANEBIT>>>\n\t\t       <TELL\n\"What on earth are you talking about?\" CR>)\n\t\t      (,SEATED?\n\t\t       <TELL\n\"You are already seated, if you remember.\" CR>)\n\t\t      (T\n\t\t       <SET S </ ,P-NUMBER 1000>>\n\t\t       <SET A <MOD ,P-NUMBER 1000>>\n\t\t       <COND (<OR <0? .A> <G? .A 14>>\n\t\t\t      <TELL\n\"There's no such aisle number on this plane.\" CR>)\n\t\t\t     (<G? .S 4>\n\t\t\t      <TELL\n\"There's no such seating location on this plane; all of the seats are\nlabelled A, B, C, or D.\" CR>)\n\t\t\t     (<NOT <GETP ,HERE ,P?AISLE>>\n\t\t\t      <TELL\n\"You're not in a seating area.\" CR>)\n\t\t\t     (<NOT <EQUAL? <GETP ,HERE ,P?AISLE> .A>>\n\t\t\t      <TELL\n\"You're in the wrong aisle, I'm afraid.\" CR>)\n\t\t\t     (<0? <FIND-SEAT .A .S>>\n\t\t\t      <TELL\n\"You make your way to seat \" N .A>\n\t\t\t      <PRINTC <+ .S 64>>\n\t\t\t      <TELL \" and sit down.\" CR>\n\t\t\t      <SETG SEATED? ,P-NUMBER>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"There's somebody sitting in that seat already.\" CR>)>)>)>>"
  },
  "UNSEAT-CHECK": {
   "name": "UNSEAT-CHECK",
   "file": "jet.zil",
   "line": 1199,
   "endLine": 1210,
   "source": "<ROUTINE UNSEAT-CHECK ()\n\t <SETG SEATED? <>>\n\t <COND (<OR <NOT <IN? ,SAFETY-CARD ,SEAT-POCKET>>\n\t\t    <NOT <IN? ,BARF-BAG ,SEAT-POCKET>>\n\t\t    <NOT <IN? ,AIRLINE-MAGAZINE ,SEAT-POCKET>>>\n\t\t<MOVE ,SAFETY-CARD ,SEAT-POCKET>\n\t\t<MOVE ,BARF-BAG ,SEAT-POCKET>\n\t\t<MOVE ,AIRLINE-MAGAZINE ,SEAT-POCKET>\n\t\t<FCLEAR ,BARF-BAG ,OPENBIT>\n\t\t<TELL\n\"You remember before you get up to replace everything you took from\nthe seat pocket.\" CR CR>)>>"
  },
  "FIND-SEAT": {
   "name": "FIND-SEAT",
   "file": "jet.zil",
   "line": 1214,
   "endLine": 1217,
   "source": "<ROUTINE FIND-SEAT (\"OPTIONAL\" (A <>) (S <>))\n\t <COND (<NOT .A> <SET A <MOD ,SEATED? 1000>>)>\n\t <COND (<NOT .S> <SET S </ ,SEATED? 1000>>)>\n\t <GET ,SEATING-TBL <+ <* <- .A 1> 4> <- .S 1>>>>"
  },
  "SEAT-POCKET-F": {
   "name": "SEAT-POCKET-F",
   "file": "jet.zil",
   "line": 1228,
   "endLine": 1244,
   "source": "<ROUTINE SEAT-POCKET-F ()\n\t <COND (<NOT <FSET? ,HERE ,AIRPLANEBIT>>\n\t\t<TELL\n\"What seat pocket?\" CR>)\n\t       (<NOT ,SEATED?>\n\t\t<TELL\n\"You can't get at any seat pocket unless you're seated.\" CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"It's a pocket, not a box.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,SEAT-POCKET>\n\t\t     <OR <NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t\t <NOT <FSET? ,PRSO ,READBIT>>>>\n\t\t<TELL\n\"You can't put that into the seat pocket.\" CR>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "AIRLINE-MAGAZINE-F": {
   "name": "AIRLINE-MAGAZINE-F",
   "file": "jet.zil",
   "line": 1254,
   "endLine": 1267,
   "source": "<ROUTINE AIRLINE-MAGAZINE-F ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<COND (<EQUAL? ,ON-FLIGHT 1>\n\t\t       <TELL\n\"This is an issue of Air Gaul Express, the official airline magazine\nof Air Gaul. Among the articles of interest here are...\" CR>)\n\t\t      (<EQUAL? ,ON-FLIGHT 2>\n\t\t       <TELL\n\"This is an issue of Zalagasan Odyssey, the official airline magazine of\nAir Zalagasa. There are a few articles listed here, including...\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"This is an issue of Charter Holidays, the official airline magazine\nof World Charters. Among the items which catch your eye are...\" CR>)>)>>"
  },
  "SAFETY-CARD-F": {
   "name": "SAFETY-CARD-F",
   "file": "jet.zil",
   "line": 1278,
   "endLine": 1285,
   "source": "<ROUTINE SAFETY-CARD-F ()\n\t <COND (<VERB? READ EXAMINE>\n\t\t<TELL\n\"This is the safety card for your aircraft, an Aerocom IF-47, your\n56-passenger transatlantic airliner. It's like most you've seen before,\nand includes helpful information about the emergency use of oxygen and\nlife rafts, and contains a diagram highlighting the emergency exits located\non both sides of the aircraft at the tail end.\" CR>)>>"
  },
  "BARF-BAG-F": {
   "name": "BARF-BAG-F",
   "file": "jet.zil",
   "line": 1299,
   "endLine": 1321,
   "source": "<ROUTINE BARF-BAG-F ()\n\t <COND (<VERB? READ EXAMINE>\n\t\t<TELL\n\"The bag, cheerfully labelled \\\"Convenience Bag\\\", is a rather simple white\nbag which is considerably more capable of holding an airline meal than your\nstomach is.\" CR>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,BARF-BAG>>\n\t\t<COND (<FIRST? ,PRSI>\n\t\t       <TELL\n\"It's already got something inside.\" CR>)\n\t\t      (<FSET? ,PRSO ,FOODBIT>\n\t\t       <TELL\n\"Just as well; it'll probably end up there anyway.\" CR>\n\t\t       <MOVE ,PRSO ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (<L? <GETP ,PRSO ,P?SIZE> 8>\n\t\t       <TELL\n\"It's not meant for that sort of thing, but ok...\" CR>\n\t\t       <MOVE ,PRSO ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"It won't fit.\" CR>)>)>>"
  },
  "AIRPLANE-SLEEP": {
   "name": "AIRPLANE-SLEEP",
   "file": "jet.zil",
   "line": 1323,
   "endLine": 1342,
   "source": "<ROUTINE AIRPLANE-SLEEP ()\n\t <COND (<QUEUED? I-MEAL>\n\t\t<QUEUE I-MEAL 2>\n\t\t<TELL\n\"You sleep for a while but then you are startled awake...\" CR CR>\n\t\t<SETG CURRENT-TIME ,T-MEAL>\n\t\t<RTRUE>)\n\t       (<AND <QUEUED? I-MOVIE> <EQUAL? ,MOVIE-TIME 0>>\n\t\t<QUEUE I-MOVIE 2>\n\t\t<TELL\n\"You sleep for a while but then you are startled awake...\" CR CR>\n\t\t<SETG CURRENT-TIME ,T-MOVIE>\n\t\t<RTRUE>)\n\t       (<AND <QUEUED? I-MOVIE> <G? ,MOVIE-TIME 0>>\n\t\t<SETG MOVIE-TIME 5>\n\t\t<QUEUE I-MOVIE 2>\n\t\t<TELL\n\"You sleep for a while but then you are startled awake...\" CR CR>\n\t\t<SETG CURRENT-TIME <+ ,T-MOVIE 60>>\n\t\t<RTRUE>)>>"
  },
  "I-MEAL": {
   "name": "I-MEAL",
   "file": "jet.zil",
   "line": 1344,
   "endLine": 1346,
   "source": "<ROUTINE I-MEAL ()\n\t <TELL\n\"This will be the meal episode...\" CR>>"
  }
 },
 "globals": {
  "TELLER-SUBJECTS": {
   "name": "TELLER-SUBJECTS",
   "kind": "constant",
   "file": "bank.zil",
   "line": 7,
   "value": "<PLTABLE <PTABLE BANK \"We make it easy for you.\"> <PTABLE TELLER \"Worked here all my life.\"> <PTABLE WRISTWATCH \"What do you think I am, a clock?\"> <PTABLE WFORM \"If you wish to make a withdrawal, you'll need one.\"> <PTABLE DFORM \"If you wish to make a deposit, you'll need one.\"> <PTABLE QUEEN-MUM \"I haven't the vaguest idea what you're talking about.\"> <PTABLE NERD \"Him? He's at the back of half our troubles, if you ask me.\">>"
  },
  "CASH-CHECK-SCRIPT": {
   "name": "CASH-CHECK-SCRIPT",
   "kind": "constant",
   "file": "bank.zil",
   "line": 17,
   "value": "<PTABLE \"THIS WINDOW FOR CHECK CASHING ONLY\" \" cash a check?\"\" \"Please give me the check\" <> \"She takes the cheque and says, \"Please show me some ID.\"\">"
  },
  "WITHDRAWAL-SCRIPT": {
   "name": "WITHDRAWAL-SCRIPT",
   "kind": "constant",
   "file": "bank.zil",
   "line": 24,
   "value": "<PTABLE \"THIS WINDOW FOR WITHDRAWALS ONLY\" \" make a withdrawal?\"\" \"Here is a withdrawal slip\" WFORM \"\"May I see some ID please.\"\">"
  },
  "DEPOSIT-SCRIPT": {
   "name": "DEPOSIT-SCRIPT",
   "kind": "constant",
   "file": "bank.zil",
   "line": 31,
   "value": "<PTABLE \"THIS WINDOW FOR DEPOSITS ONLY\" \" make a deposit?\"\" \"Here is a deposit slip\" DFORM \"\"Please show me some ID.\"\">"
  },
  "CHANGE-ADDRESS-SCRIPT": {
   "name": "CHANGE-ADDRESS-SCRIPT",
   "kind": "constant",
   "file": "bank.zil",
   "line": 38,
   "value": "<PTABLE \"THIS WINDOW FOR ADDRESS CHANGES ONLY\" \" file a change of address?\"\" \"Our records show that we already sent you a change-of-address form. We cannot allow more than one form to be outstanding for any one customer at any one time. I am only doing my job\" <> <>>"
  },
  "BANK-THINGS": {
   "name": "BANK-THINGS",
   "kind": "constant",
   "file": "bank.zil",
   "line": 314,
   "value": "<PTABLE MATCH-TELLER-NAME <>>"
  },
  "PONGO-STUFF": {
   "name": "PONGO-STUFF",
   "kind": "constant",
   "file": "bank.zil",
   "line": 1233,
   "value": "<PLTABLE \"Squawk! Pongo want a cracker!\" \"We make it easy for you! Squawk!\" \"Squawk! Children have feelings, too! Squawk!\" \"Consider us your friend! Squawk! Squawk!\">"
  },
  "BONGO-STUFF": {
   "name": "BONGO-STUFF",
   "kind": "constant",
   "file": "bank.zil",
   "line": 1396,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"Bongo says, \"You'll have to pardon me, there seems to\nbe a cat in the bank.\" You hear the screech of a cat, the scream of an old\nwoman, several very fragile things being knocked off shelves, another screech\nfrom the cat, then someone yelling, \"Bad dog! Bad! Bad!\" Finally Bongo\nreturns, panting, \"Hello, this is Bongo. Sorry, I forgot what we were talking\nabout. Please call back.\"\" \"Bongo says, \"It's time for my walk. You'll have to call\nback.\"\" \"Bongo says, \"There seems to be a bone on the floor here,\nso I'll be busy for a while. Please call back later.\"\">"
  },
  "BANKNAMES": {
   "name": "BANKNAMES",
   "kind": "constant",
   "file": "bankdefs.zil",
   "line": 27,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 <VOC \"PAULETTE\" NOUN> <VOC \"CLINT\" NOUN> <VOC \"NANCY\" NOUN> <VOC \"ROGER\" NOUN>>"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "constant",
   "file": "clocker.zil",
   "line": 10,
   "value": "<ITABLE NONE 100>"
  },
  "DAY-TABLE": {
   "name": "DAY-TABLE",
   "kind": "constant",
   "file": "clocker.zil",
   "line": 71,
   "value": "<TABLE 6 \"Mon\" \"Tues\" \"Wednes\" \"Thurs\" \"Fri\" \"Satur\" \"Sun\">"
  },
  "REAL-COMMAND-WINDOW": {
   "name": "REAL-COMMAND-WINDOW",
   "kind": "constant",
   "file": "computer.zil",
   "line": 145,
   "value": "<PTABLE <MAKE-FIELD 'FIELD <CHTYPE <ITABLE <+ ,FIELD-DATA-OFFSET 38> (BYTE)> FIELD> 'FIELD-PROMPT \"Command:\" 'FIELD-FCN COMMAND-FIELD 'FIELD-PROMPTLEN 8 'FIELD-X 1 'FIELD-Y ,COMPUTER-COMMAND-LINE 'FIELD-MAXLEN 29 'FIELD-DONE 0 'FIELD-CURLEN 0>>"
  },
  "TARGETS": {
   "name": "TARGETS",
   "kind": "constant",
   "file": "computer.zil",
   "line": 283,
   "value": "<TABLE FIDUC-FILE MENU-FILE AIRPLANE-FILE POST-FILE ZBUG-FILE TRAVEL-FILE>"
  },
  "ITARGETS": {
   "name": "ITARGETS",
   "kind": "constant",
   "file": "computer.zil",
   "line": 288,
   "value": "<PTABLE FIDUC-FILE MENU-FILE AIRPLANE-FILE POST-FILE ZBUG-FILE TRAVEL-FILE>"
  },
  "TARGET-NAMES": {
   "name": "TARGET-NAMES",
   "kind": "constant",
   "file": "computer.zil",
   "line": 293,
   "value": "<PTABLE <PTABLE <PLTABLE (STRING) \"FIDUC.HAK\"> \"FIDUC.HAK\"> <PTABLE <PLTABLE (STRING) \"MENU.HAK\"> \"MENU.HAK\"> <PTABLE <PLTABLE (STRING) \"AIRPLANE.HAK\"> \"AIRPLANE.HAK\"> <PTABLE <PLTABLE (STRING) \"POST.HAK\"> \"POST.HAK\"> <PTABLE <PLTABLE (STRING) \"ZBUG.HAK\"> \"ZBUG.HAK\"> <PTABLE <PLTABLE (STRING) \"TRAVEL.HAK\"> \"TRAVEL.HAK\">>"
  },
  "HELP-TABLE": {
   "name": "HELP-TABLE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 394,
   "value": "<PLTABLE \"Type the name of a command, followed\" \"by a carriage return. ? or HELP gets\" \"this listing; DIR lists other\" \"commands. QUIT turns computer off.\" \"DIR listing follows.\">"
  },
  "TELECOM-HELP-TABLE": {
   "name": "TELECOM-HELP-TABLE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 400,
   "value": "<PLTABLE \"TYPE THE NAME OF A COMMAND, FOLLOWED\" \"BY A CARRIAGE RETURN. ? OR HELP GETS\" \"THIS LISTING. QUIT OR LOGOUT\" \"DISCONNECTS FROM MAINFRAME AND TURNS\" \"TERMINAL OFF. COMMAND LISTING FOLLOWS.\">"
  },
  "HACK-TABLE": {
   "name": "HACK-TABLE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 577,
   "value": "<PLTABLE \" The Strange and Terrible History of\" \"             Bureaucracy\" <> \"Once upon a time Douglas Adams and\" \"Steve Meretzky collaborated on a game\" \"called \"The Hitchhikers Guide to the\" \"Galaxy.\" Everyone wanted a sequel, but\" \"Douglas thought it might be fun to do\" \"something different first. He called\" \"that something \"Bureaucracy,\" and\" \"wanted Marc Blank to work on it with\" \"him. Of course, Marc was busy, and\" \"Douglas was busy, and by the time they\" \"could both work on it, they were too\" \"busy to work on it. So, Jerry Wolper\" \"got a free trip to Las Vegas to talk\" \"to Douglas about it before it was\" \"decided to let it rest for a while\" \"instead. Jerry decided to go back to\" \"school, so Marc and Douglas spent some\" \"time on Nantucket looking at llamas,\" \"drinking Chateau d'Yquem, and arguing\" \"about puzzles. Nothing much happened\" \"for a while, except that Marc and\" \"Douglas got distracted again. Paul\" \"DiLascia decided to give it a try, but\" \"changed his mind and kept working on\" \"Cornerstone. Marc went to work for\" \"Simon and Schuster, and Paul went to\" \"work for Interleaf. Jeff O'Neill\" \"finished Ballyhoo, and, casting about\" \"for a new project, decided to take it\" \"on, about the time Jerry graduated.\" \"Jeff got a trip to London out of it.\" \"Douglas was enthusiastic, but busy\" \"with a movie. Progress was slow, and\" \"then Douglas was very busy with\" \"something named \"Dirk Gently.\" Jeff\" \"decided it was time to work on\" \"something else, and Brian Moriarty\" \"took it over. He visited England, and\" \"marvelled at Douglas's CD collection,\" \"but progress was slow. Eventually he\" \"decided it was time to work on\" \"something else. Paul made a cameo\" \"appearance, but decided to stay at\" \"Interleaf instead. So Chris Reeve and\" \"Tim Anderson took it over, and mucked\" \"around a lot. Finally, back in Las\" \"Vegas, Michael Bywater jumped (or was\" \"pushed) in and came to Boston for some\" \"serious script-doctoring, which made\" \"what was there into what is here. In\" \"addition, there were significant\" \"contributions from Liz Cyr-Jones,\" \"Suzanne Frank, Gary Brennan, Tomas\" \"Bok, Max Buxton, Jon Palace, Dave\" \"Lebling, Stu Galley, Linde Dynneson,\" \"and others too numerous to mention.\" \"Most of these people are not dead yet,\" \"and apologise for the inconvenience.\">"
  },
  "HACK-DIR": {
   "name": "HACK-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 646,
   "value": "<DIR-ENTRY HACK-CMD \"NOOZ\" <>>"
  },
  "HELP-DIR": {
   "name": "HELP-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 647,
   "value": "<DIR-ENTRY HELP-CMD \"HELP\" <> DIR-ENTRY-INVISIBLE>"
  },
  "QUIT-DIR": {
   "name": "QUIT-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 648,
   "value": "<DIR-ENTRY QUIT-CMD \"QUIT\" <> DIR-ENTRY-INVISIBLE>"
  },
  "DIR-DIR": {
   "name": "DIR-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 649,
   "value": "<DIR-ENTRY DIR-CMD \"DIR\" <> DIR-ENTRY-INVISIBLE>"
  },
  "CLEAR-DIR": {
   "name": "CLEAR-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 650,
   "value": "<DIR-ENTRY CLEAR-CMD \"CLEAR\" \": Clear the screen\">"
  },
  "TCLEAR-DIR": {
   "name": "TCLEAR-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 651,
   "value": "<DIR-ENTRY CLEAR-CMD \"CLR\" \": CLEAR THE SCREEN\">"
  },
  "LOGIN-NAME": {
   "name": "LOGIN-NAME",
   "kind": "constant",
   "file": "computer.zil",
   "line": 691,
   "value": "<TABLE (PURE LENGTH STRING) \"RANDOM-Q-HACKER\">"
  },
  "PASSWORD": {
   "name": "PASSWORD",
   "kind": "constant",
   "file": "computer.zil",
   "line": 693,
   "value": "<TABLE (PURE LENGTH STRING) \"RAINBOW-TURTLE\">"
  },
  "DELAYS": {
   "name": "DELAYS",
   "kind": "constant",
   "file": "computer.zil",
   "line": 696,
   "value": "<PTABLE (BYTE) 1 ;\"ZIL\" 10 ;\"ZIP20\" 1 ;\"APPLE II\" 4 ;\"MAC\" 4 ;\"AMIGA\" 4 ;\"ST\" 1 ;\"COMPAQ/PC\" 1 ;\"128\" 1 ;\"64...\">"
  },
  "QUIT-TABLE": {
   "name": "QUIT-TABLE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 787,
   "value": "<TABLE (PURE STRING LENGTH) \"QUIT\">"
  },
  "LOGOUT-DIR": {
   "name": "LOGOUT-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 794,
   "value": "<DIR-ENTRY QUIT-CMD \"LOGOUT\" <> DIR-ENTRY-INVISIBLE>"
  },
  "WHO-DIR": {
   "name": "WHO-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 796,
   "value": "<DIR-ENTRY WHO-CMD \"WHO\" \": LIST USERS\">"
  },
  "DIRLIST-DIR": {
   "name": "DIRLIST-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 798,
   "value": "<DIR-ENTRY DIRLIST-CMD \"DIR\" \": LIST FILE NAMES\">"
  },
  "TYPE-DIR": {
   "name": "TYPE-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 800,
   "value": "<DIR-ENTRY TYPE-CMD \"TYP\" \": SHOW FILE ON SCREEN\">"
  },
  "RENAME-DIR": {
   "name": "RENAME-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 802,
   "value": "<DIR-ENTRY RENAME-CMD \"REN\" \": RENAME A FILE\">"
  },
  "COPY-DIR": {
   "name": "COPY-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 804,
   "value": "<DIR-ENTRY COPY-CMD \"COP\" \": COPY A FILE\">"
  },
  "DELETE-DIR": {
   "name": "DELETE-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 806,
   "value": "<DIR-ENTRY DELETE-CMD \"DEL\" \": ERASE A FILE\">"
  },
  "RUN-DIR": {
   "name": "RUN-DIR",
   "kind": "constant",
   "file": "computer.zil",
   "line": 808,
   "value": "<DIR-ENTRY RUN-CMD \"RUN\" \": RUN A PROGRAM\">"
  },
  "TELECOM-TABLE": {
   "name": "TELECOM-TABLE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 810,
   "value": "<PLTABLE HELP-DIR QUIT-DIR LOGOUT-DIR WHO-DIR TCLEAR-DIR DIRLIST-DIR TYPE-DIR RENAME-DIR COPY-DIR DELETE-DIR RUN-DIR>"
  },
  "HAK-PROG-NAME": {
   "name": "HAK-PROG-NAME",
   "kind": "constant",
   "file": "computer.zil",
   "line": 818,
   "value": "<PLTABLE (STRING) \"HAK.EXE\">"
  },
  "FILE-TABLE": {
   "name": "FILE-TABLE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 820,
   "value": "<LTABLE <TABLE <TABLE (STRING) <BYTE 9> \"PLANE.EXE      \"> PLANE-FILE> <TABLE <TABLE (STRING) <BYTE 7> \"HAK.EXE        \"> HAK-FILE> <TABLE <TABLE (STRING) <BYTE 9> \"FIDUC.HAK      \"> FIDUC-FILE> <TABLE <TABLE (STRING) <BYTE 8> \"MENU.HAK       \"> MENU-FILE> <TABLE <TABLE (STRING) <BYTE 12> \"AIRPLANE.HAK   \"> AIRPLANE-FILE> <TABLE <TABLE (STRING) <BYTE 8> \"POST.HAK       \"> POST-FILE> <TABLE <TABLE (STRING) <BYTE 8> \"ZBUG.HAK       \"> ZBUG-FILE> <TABLE <TABLE (STRING) <BYTE 10> \"TRAVEL.HAK     \"> TRAVEL-FILE> <TABLE <TABLE (STRING) <BYTE 8> \"DVH2.HAK       \"> DVH2-FILE> <TABLE <TABLE (STRING) <BYTE 0> \"               \"> <>> <TABLE <TABLE (STRING) <BYTE 0> \"               \"> <>> <TABLE <TABLE (STRING) <BYTE 0> \"               \"> <>> <TABLE <TABLE (STRING) <BYTE 0> \"               \"> <>> <TABLE <TABLE (STRING) <BYTE 0> \"               \"> <>>>"
  },
  "FIDUC-FILE": {
   "name": "FIDUC-FILE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 850,
   "value": "<PLTABLE <> \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" \";;; FILLMORE FIDUCIARY TRUST       ;;;\" \";;; CENTRAL COMPUTER ACCESS        ;;;\" \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" <> \".RUN\" \"LOGON SLARTIBARTFAST\" <> <> \"[NON-ASCII CHARACTERS ENCOUNTERED]\">"
  },
  "MENU-FILE": {
   "name": "MENU-FILE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 863,
   "value": "<PLTABLE <> \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" \";;; GENERAL RESTAURANT ACCESS CODE ;;;\" \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" <> \"; THIS CAN HACK ANY RESTAURANT WITH\" \"; COMPUTERISED INVENTORY, ORDER ENTRY,\" \"; OR BOOKKEEPING.\" <> \".RUN\" <> \"[NON-ASCII CHARACTERS ENCOUNTERED]\">"
  },
  "AIRPLANE-FILE": {
   "name": "AIRPLANE-FILE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 877,
   "value": "<PLTABLE <> \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" \";;; FAA TRAFFIC CONTROL COMPUTER   ;;;\" \";;; AND NATIONAL WEATHER SERVICE   ;;;\" \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" <> \"; USE THIS TO CAUSE THE WEATHER\" \"; SERVICE TO ISSUE BOGUS FORECASTS,\" \"; AND TO CAUSE ANY ARBITRARY AIRCRAFT\" \"; TO BE ROUTED TO ANY ARBITRARY\" \"; LOCATION.\" <> \"[NON-ASCII CHARACTERS ENCOUNTERED]\">"
  },
  "POST-FILE": {
   "name": "POST-FILE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 892,
   "value": "<PLTABLE <> \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" \";;; POSTAL MISDIRECTION HACK       ;;;\" \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" <> \"; IN ADVANCED COUNTRIES, THIS CAN\" \"; CAUSE MAIL TO ANY SPECIFIED ADDRESS\" \"; TO BE DELIVERED TO ANY OTHER ADDRESS\" \"; WITHOUT USING TELL-TALE FORWARDING\" \"; STICKERS\" <> \".READ COUNTRY\" \".READ STATE OR PROVINCE\" \".READ CITY\" \".READ STREET\" \".READ NUMBER\" \".READ APARTMENT\" \".RUN\" <> \"[NON-ASCII CHARACTERS ENCOUNTERED]\">"
  },
  "ZBUG-FILE": {
   "name": "ZBUG-FILE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 914,
   "value": "<PLTABLE <> \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" \";;; NATIVES                        ;;;\" \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" <> \"; CONNECT TO ZALAGASA BOYSENBERRY\" \"; USERS' GROUP COMPUTERS, JUST TO MAKE\" \"; SURE THEY AREN'T GETTING ANYWHERE\" \"; THEY DON'T BELONG\" <> \"[NON-ASCII CHARACTERS ENCOUNTERED]\">"
  },
  "TRAVEL-FILE": {
   "name": "TRAVEL-FILE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 927,
   "value": "<PLTABLE <> \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" \";;; TRAVEL AGENCY AND AIRLINE      ;;;\" \";;; RESERVATIONS MANIPULATION      ;;;\" \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" <> \"; MANIPULATE AIRLINE RESERVATIONS --\" \"; ROUTE SELECTED TRAVELLER TO ANY\" \"; DESIRED DESTINATION, WITH ANY\" \"; DESIRED INTERMEDIATE STOPS. CAN\" \"; ALSO CAUSE AIRLINES TO AUTOMATICALLY\" \"; ROUTE GROUPS OF TRAVELLERS\" \"; INCORRECTLY.\" <> \"[NON-ASCII CHARACTERS ENCOUNTERED]\">"
  },
  "DVH2-FILE": {
   "name": "DVH2-FILE",
   "kind": "constant",
   "file": "computer.zil",
   "line": 944,
   "value": "<PLTABLE <> \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" \";;; EMERGENCY DVH2 CHA/OS ACCESS   ;;;\" \";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\" <> \";;===>>>WARNING<<<===\" \";; MAKE SURE THIS ISN'T DIRECTED AT A\" \";; FRIENDLY COMPUTER!!! IT WILL NEVER\" \";; WORK AGAIN!!!\" <> \"[NON-ASCII CHARACTERS ENCOUNTERED]\">"
  },
  "EXE-FILES": {
   "name": "EXE-FILES",
   "kind": "constant",
   "file": "computer.zil",
   "line": 957,
   "value": "<PLTABLE PLANE-FILE HAK-FILE>"
  },
  "HAK-FILES": {
   "name": "HAK-FILES",
   "kind": "constant",
   "file": "computer.zil",
   "line": 958,
   "value": "<PLTABLE FIDUC-FILE MENU-FILE AIRPLANE-FILE POST-FILE ZBUG-FILE TRAVEL-FILE DVH2-FILE>"
  },
  "BAD-TUNES": {
   "name": "BAD-TUNES",
   "kind": "constant",
   "file": "events.zil",
   "line": 12,
   "value": "<PLTABLE \"Tie a Yellow Ribbon 'Round the Old Oak Tree\" \"Afternoon Delight\" \"Torn Between Two Lovers\" \"Boogie Oogie Oogie\" \"Delta Dawn\" \"I Write the Songs\" \"Surfin' USA\" \"Leader of the Pack\" \"My Way\">"
  },
  "TOONS": {
   "name": "TOONS",
   "kind": "constant",
   "file": "events.zil",
   "line": 23,
   "value": "<PLTABLE \"performed on common household appliances\" \"performed by a world-famous kazoo soloist\" \"with a disco beat\" \"backed by a bassoon-and-triangle duet\" \"with the lyrics mercifully mixed out\" \"backed by an angelic chorus\" \"with 101 strings\" \"backed by too many clarinets\" \"performed by 101 guitars\" \"performed a capella by Tony Orlando and Dawn\">"
  },
  "CLERK-DOINGS": {
   "name": "CLERK-DOINGS",
   "kind": "constant",
   "file": "events.zil",
   "line": 82,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" is eyeing you carefully\" \" adjusts the software on the wall\" \" watches every move you make\" \" fiddles with the software\" \" looks at you expectantly\" \" rereads all the price tags on the software\">"
  },
  "BURGER-TYPE-TABLE": {
   "name": "BURGER-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 495,
   "value": "<PLTABLE T <PLTABLE <VOC \"RAW\">> <PLTABLE <VOC \"RARE\">> <PLTABLE <VOC \"MEDIUM\">> <PLTABLE <VOC \"WELL-DONE\"> <VOC \"WELL\">> <PLTABLE <VOC \"SPECIAL\">>>"
  },
  "CHEESE-TYPE-TABLE": {
   "name": "CHEESE-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 503,
   "value": "<PLTABLE <> <VOC \"SWISS\"> <VOC \"AMERICAN\"> <VOC \"CHEDDAR\">>"
  },
  "FRIES-ETC-TABLE": {
   "name": "FRIES-ETC-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 507,
   "value": "<PLTABLE T <PLTABLE <VOC \"SALAD\">> <PLTABLE <VOC \"POTATO\"> <VOC \"BAKED\">> <PLTABLE <VOC \"FRIES\"> <VOC \"FRENCH\">>>"
  },
  "DRESSING-TYPE-TABLE": {
   "name": "DRESSING-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 515,
   "value": "<PLTABLE T <PLTABLE <VOC \"FRENCH\">> <PLTABLE <VOC \"ITALIAN\">> <PLTABLE <VOC \"VINAIGRETTE\">> <PLTABLE <VOC \"BLUE\"> <VOC \"CHEESE\">> <PLTABLE <VOC \"ISLAND\"> <VOC \"THOUSAND\">>>"
  },
  "DRESSING-WEIGHT-TABLE": {
   "name": "DRESSING-WEIGHT-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 525,
   "value": "<PLTABLE <> <VOC \"DIET\"> <VOC \"REGULAR\">>"
  },
  "POTATO-TYPE-TABLE": {
   "name": "POTATO-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 528,
   "value": "<PLTABLE T <PLTABLE <VOC \"LARGE\"> <VOC \"BIG\"> <VOC \"L\">> <PLTABLE <VOC \"SMALL\"> <VOC \"TINY\"> <VOC \"S\">>>"
  },
  "DRINK-TYPE-TABLE": {
   "name": "DRINK-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 535,
   "value": "<PLTABLE <> <VOC \"JUICE\"> <VOC \"BEER\"> <VOC \"WINE\"> <VOC \"SODA\">>"
  },
  "JUICE-TYPE-TABLE": {
   "name": "JUICE-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 540,
   "value": "<PLTABLE <> <VOC \"ORANGE\"> <VOC \"APPLE\"> <VOC \"GRAPEFRUIT\"> <VOC \"MANGO\">>"
  },
  "BEER-TYPE-TABLE": {
   "name": "BEER-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 545,
   "value": "<PLTABLE <> <VOC \"DARK\"> <VOC \"LIGHT\"> <VOC \"ALE\"> <VOC \"DRAUGHT\">>"
  },
  "WINE-COLOR-TABLE": {
   "name": "WINE-COLOR-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 550,
   "value": "<PLTABLE <> <VOC \"RED\"> <VOC \"WHITE\">>"
  },
  "WINE-TYPE-TABLE": {
   "name": "WINE-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 554,
   "value": "<PLTABLE <> <VOC \"DRY\"> <VOC \"SWEET\">>"
  },
  "WINE-COUNTRY-TABLE": {
   "name": "WINE-COUNTRY-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 558,
   "value": "<PLTABLE T <PLTABLE <VOC \"FRENCH\">> <PLTABLE <VOC \"GERMAN\">> <PLTABLE <VOC \"CALIFORNIA\"> <VOC \"AMERICAN\">>>"
  },
  "SODA-TABLE": {
   "name": "SODA-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 565,
   "value": "<PLTABLE T <PLTABLE <VOC \"COLA\">> <PLTABLE <VOC \"ORANGE\">> <PLTABLE <VOC \"LEMON-LIME\"> <VOC \"LIME\"> <VOC \"LEMON\">>>"
  },
  "SODA-TYPE-TABLE": {
   "name": "SODA-TYPE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 573,
   "value": "<PLTABLE <> <VOC \"DIET\"> <VOC \"REGULAR\">>"
  },
  "CAFFEINE-TABLE": {
   "name": "CAFFEINE-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 577,
   "value": "<PLTABLE <> <VOC \"WITH\"> <VOC \"WITHOUT\">>"
  },
  "WATER-TABLE": {
   "name": "WATER-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 581,
   "value": "<PLTABLE <> <VOC \"REGULAR\"> <VOC \"MINERAL\"> <VOC \"DISTILLED\">>"
  },
  "BURGER-OPTIONS": {
   "name": "BURGER-OPTIONS",
   "kind": "constant",
   "file": "events.zil",
   "line": 623,
   "value": "<PLTABLE ,OT-WORD-STRING ,CHEESE-TYPE \" cheese\" ,OT-YES/NO ,BBSAUCE? \"bar-b-que sauce\" ,OT-YES/NO ,BACON? \"bacon\" ,OT-YES/NO ,MUSHROOMS? \"mushrooms\">"
  },
  "BAKED-POTATO-OPTIONS": {
   "name": "BAKED-POTATO-OPTIONS",
   "kind": "constant",
   "file": "events.zil",
   "line": 628,
   "value": "<PLTABLE ,OT-YES/NO ,BUTTER? \"butter\" ,OT-YES/NO ,CREAM? \"sour cream\" ,OT-YES/NO ,YOGHURT? \"yoghurt\" ,OT-YES/NO ,PARSLEY? \"a dash of parsley\" ,OT-YES/NO ,CHIVES? \"a sprinkle of chives\">"
  },
  "COOPS": {
   "name": "COOPS",
   "kind": "constant",
   "file": "events.zil",
   "line": 788,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"Please cooperate\" \"Don't confuse me\" \"Come now\">"
  },
  "MACAW-TABLE": {
   "name": "MACAW-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 970,
   "value": "<TABLE <> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" groans defiance at you\" \" lets off an obscene squeak\" \" whispers at the top of its voice\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" looks at you with one half-closed eye\" \" thinks about scratching its wing, then thinks better of it\" \" wobbles back and forth on its perch\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" roars defiance at you\" \" lets off an obscene whistle\" \" screeches at the top of its voice\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" looks at you with one eye, then the other\" \" scratches its wing\" \" thinks about scratching a wing, then realises that the one it was thinking about is missing\" \"'s malignant beady eyes are staring around, looking\nfor some hate-object to get over-excited about\" \" paces back and forth on its perch\" \" flutters excitedly\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" crushes your finger in a vise-like beak-grip\" \" lunges at your fingers\" \" tears savagely at your hand\" \" strikes a jack-hammer blow at you\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"Death to the running dogs of imperialism\" \"Power to the downtrodden masses\" \"Workers of the world unite\" \"Russia got Reagan's brain! Russia got Reagan's brain\" \"Kill the pinko fascist commie Christian Democrats\" \"The old lady is a Tory\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"Death to the communist dogs\" \"Let's lob one into the men's room of the Kremlin\" \"Today the Falklands, tomorrow the rest of the empire\" \"Kill the fascist pinko neo-Nazi red Social Democrats\" \"The old lady is a liberal\">>"
  },
  "MOUSY-WISHES": {
   "name": "MOUSY-WISHES",
   "kind": "constant",
   "file": "events.zil",
   "line": 1139,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"No Zalagasa 42 on this one, either. Someday, someday\" \"Where are you, my little Ai-Ai? I know you're out there, somewhere\" \"Still no Zalagasan Ai-Ai. I know I'll find one someday, but\" \"My collection, almost complete! Just one Zalagasan 42 Ai-Ai\">"
  },
  "LLAMA-TABLE": {
   "name": "LLAMA-TABLE",
   "kind": "constant",
   "file": "events.zil",
   "line": 1190,
   "value": "<TABLE 0 <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" blinks at you stupidly\" \" emits a hoarse bleat\" \" is pretending not to watch you\" \" shakes itself and bleats\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" chomps eagerly on\" \" pauses to bleat, then turns back to\" \" is still eating\">>"
  },
  "FORM-HISTORY": {
   "name": "FORM-HISTORY",
   "kind": "constant",
   "file": "forms.zil",
   "line": 11,
   "value": "<ITABLE 20 (BYTE)>"
  },
  "A-INIT": {
   "name": "A-INIT",
   "kind": "global",
   "file": "jet.zil",
   "line": 16,
   "value": "<>"
  },
  "FORM-WAIT": {
   "name": "FORM-WAIT",
   "kind": "global",
   "file": "jet.zil",
   "line": 405,
   "value": "0"
  },
  "VISA-WAIT": {
   "name": "VISA-WAIT",
   "kind": "global",
   "file": "jet.zil",
   "line": 407,
   "value": "0"
  },
  "MIDAIR-COUNT": {
   "name": "MIDAIR-COUNT",
   "kind": "global",
   "file": "jet.zil",
   "line": 483,
   "value": "0"
  },
  "FLY-HACK?": {
   "name": "FLY-HACK?",
   "kind": "global",
   "file": "jet.zil",
   "line": 485,
   "value": "<>"
  },
  "CHUTE-DEPLOYED?": {
   "name": "CHUTE-DEPLOYED?",
   "kind": "global",
   "file": "jet.zil",
   "line": 487,
   "value": "<>"
  },
  "AT-AIRPLANE-DOOR?": {
   "name": "AT-AIRPLANE-DOOR?",
   "kind": "global",
   "file": "jet.zil",
   "line": 489,
   "value": "<>"
  },
  "FORM-WAITS": {
   "name": "FORM-WAITS",
   "kind": "global",
   "file": "jet.zil",
   "line": 784,
   "value": "<LTABLE \"\"It's very important, sir, that you return the form.\"\" \"\"Without the form, sir, I'm afraid that we will be unable to land.\"\" \"\"The authorities are very explicit about this, sir. No plane may land\nin Zalagasa without the forms having been completed.\"\" \"\"There are no exceptions, sir.\" You notice that the stewardess makes\na head motion to someone you can't see.\" \"\"I'm afraid that I must ask for that form now, sir.\" A rather burly\ngentleman, introduced as the purser, arrives at your side.\">"
  },
  "VISA-WAITS": {
   "name": "VISA-WAITS",
   "kind": "global",
   "file": "jet.zil",
   "line": 794,
   "value": "<LTABLE \"\"I'm sorry, sir, but we do require your visa number.\"\" \"\"I'm sorry, sir, but we're not allowed to land until everyone submits\ncompleted forms. Now please fill in your visa number.\"\" \"\"The authorities will not allow the plane to land without all forms\nbeing filled out, and that includes your visa number.\"\" \"\"We're running out of time, sir.\" She motions to someone who you\ncan't see.\" \"\"I shall have to insist on your visa number NOW.\" A rather burly\ngentleman, introduced as the purser, arrives at your side.\">"
  },
  "IMMIGRATION-FILLED?": {
   "name": "IMMIGRATION-FILLED?",
   "kind": "global",
   "file": "jet.zil",
   "line": 840,
   "value": "<>"
  },
  "VISA-FILLED?": {
   "name": "VISA-FILLED?",
   "kind": "global",
   "file": "jet.zil",
   "line": 841,
   "value": "<>"
  },
  "BLOW-UP": {
   "name": "BLOW-UP",
   "kind": "global",
   "file": "jet.zil",
   "line": 932,
   "value": "0"
  },
  "MOVIE-TIME": {
   "name": "MOVIE-TIME",
   "kind": "global",
   "file": "jet.zil",
   "line": 981,
   "value": "0"
  },
  "T-MOVIE": {
   "name": "T-MOVIE",
   "kind": "global",
   "file": "jet.zil",
   "line": 983,
   "value": "1035"
  },
  "T-MEAL": {
   "name": "T-MEAL",
   "kind": "global",
   "file": "jet.zil",
   "line": 984,
   "value": "795"
  },
  "MOVIE-TBL": {
   "name": "MOVIE-TBL",
   "kind": "global",
   "file": "jet.zil",
   "line": 1003,
   "value": "<LTABLE ;\"Hijack\" <LTABLE \"The movie is a new French comedy film, although you can't understand the\nlanguage very well. In the opening scene, the protagonist is packing his\nbags.\" \"In this scene, he is arriving at what must be his new house, on a street\nvery similar to your own. His place is deserted, except for some boxes which\nare piled nearly to the ceiling. The audience laughs heartily as his best\nthings are crushed by the boxes.\" \"In this scene, our hero is running from house to house on his street,\nfor all appearances trying to break into them, frantically looking for\nsomething.\" \"In this scene, our hero is rushing to the airport to catch his plane.\nNaturally, everything at the airport is contradictory and confusing. He\ndoes manage, however, to get on his flight.\" \"In this scene, a disturbance or scuffle of some kind is happening in\nthe cabin. The film breaks here....\"> ;\"Zalagasa\" <LTABLE \"Part I\" \"Part II\" \"Part III\" \"Part IV\" \"Part V\"> ;\"Parachute\" <LTABLE \"This film would appear to be a documentary of some kind and you notice that\nall of the people around you are watching with the utmost interest. The only\nrecognizable thing on the screen are maps of unfamiliar terrain\" \"In this \"scene\", various types of weather patterns are described. Many\nclouds are displayed along with a variety of frontal weather.\" \"Now, the scene jumps to a gymnasium of some sort, in which people are\njumping from a height of about ten feet to the ground. They would seem to\nbe practicing something.\" \"Here the film begins to get some tension, as a demonstration is made of\nhow a parachute is folded and how it is deployed.\" \"A moment of levity, as a few examples are displayed of people jumping\nfrom planes and getting themselves into trouble. The silliest of these\ninvolves a novice getting stuck upside down in a tree. It is greeted with\nhowls of laughter from the otherwise-quiet audience.\">>"
  },
  "SEATING-TBL": {
   "name": "SEATING-TBL",
   "kind": "global",
   "file": "jet.zil",
   "line": 1118,
   "value": "<TABLE 1 0 1 0 1 1 1 0 1 1 1 1 0 1 0 1 1 1 0 1 1 1 1 1 1 1 1 1 1 0 1 1 0 1 0 1 1 1 1 1 1 0 1 0 1 1 1 1 1 1 0 1 1 1 1 1>"
  },
  "SEATED?": {
   "name": "SEATED?",
   "kind": "global",
   "file": "jet.zil",
   "line": 1212,
   "value": "<>"
  },
  "MEAL-EATEN?": {
   "name": "MEAL-EATEN?",
   "kind": "global",
   "file": "jet.zil",
   "line": 1297,
   "value": "<>"
  },
  "ALL-SCENES": {
   "name": "ALL-SCENES",
   "kind": "constant",
   "file": "jetdefs.zil",
   "line": 60,
   "value": "<TABLE (BYTE) ,FOOD-SCENE ,VISA-SCENE ,HIJACK-SCENE>"
  },
  "MOVIE-STARS": {
   "name": "MOVIE-STARS",
   "kind": "constant",
   "file": "xjetdefs.zil",
   "line": 39,
   "value": "<PLTABLE \"Rambo\" \"Rocky\" \"Sylvester Stallone\" \"someone looking like Sylvester Stallone, but with a German accent,\" \"Arnold Schwarzenegger\" \"James Bond\" \"Sigourney Weaver\" \"a woman with a strange resemblance to Sylvester Stallone\" \"Charles Bronson\" \"Chuck Norris\">"
  },
  "MOVIE-WEAPONS": {
   "name": "MOVIE-WEAPONS",
   "kind": "constant",
   "file": "xjetdefs.zil",
   "line": 51,
   "value": "<PLTABLE \"several karate moves\" \"a Bowie knife\" \"a Sherman tank\" \"an AK-47 assault rifle, a rocket launcher and several hand grenades\" \"a wide assortment of shoulder-launched cruise missiles\" \"the help of a shoe-mounted switchblade\" \"a flamethrower, a grenade launcher and a pulse rifle\" \"a concealed bazooka\" \"no help from Washington\">"
  },
  "MOVIE-DESCS": {
   "name": "MOVIE-DESCS",
   "kind": "constant",
   "file": "xjetdefs.zil",
   "line": 62,
   "value": "<PLTABLE \"solves the Energy Crisis by attacking every Middle Eastern oil field\" \"ends the Depression by attacking Wall Street\" \"ends the Civil War by attacking Richmond\" \"ends illiteracy by attacking the evil textbook publishers\" \"restores the balance of payments by attacking Germany, Japan, South Korea and Canada\" \"restores the balance of payments by attacking the Heineken brewery\" \"saves an uninhabited planet by blowing away the alien invaders\" \"saves embassy hostages from terrorists\" \"wipes out crime in America by killing jaywalkers and litterbugs\">"
  },
  "YOURE-ALREADY-STR": {
   "name": "YOURE-ALREADY-STR",
   "kind": "constant",
   "file": "macros.zil",
   "line": 32,
   "value": "\"You're already \""
  },
  "THIS-IS": {
   "name": "THIS-IS",
   "kind": "constant",
   "file": "macros.zil",
   "line": 34,
   "value": "\"This is \""
  },
  "QUADS": {
   "name": "QUADS",
   "kind": "constant",
   "file": "maze-program.zil",
   "line": 117,
   "value": "<PTABLE <TABLE (PURE BYTE) 19 37 0 7> <TABLE (PURE BYTE) 0 18 0 7> <TABLE (PURE BYTE) 0 18 8 15> <TABLE (PURE BYTE) 19 37 8 15>>"
  },
  "PUNCT-TABLE": {
   "name": "PUNCT-TABLE",
   "kind": "constant",
   "file": "nmaze-program.zil",
   "line": 129,
   "value": "<TABLE (PURE BYTE) % <ASCII !\\.> % <ASCII !\\,> % <ASCII !\\;>>"
  },
  "FUNNY-FIELDS": {
   "name": "FUNNY-FIELDS",
   "kind": "constant",
   "file": "nmaze-program.zil",
   "line": 220,
   "value": "<ITABLE ,COMPUTER-HEIGHT 0>"
  },
  "ALT-COMPLEX-WINDOW-DESC": {
   "name": "ALT-COMPLEX-WINDOW-DESC",
   "kind": "constant",
   "file": "maze.zil",
   "line": 179,
   "value": "<PTABLE \"a picture of a Chowmail Overnite delivery man delivering llama food to\na llama owner whose llama is hungry, which is why the llama owner ordered\nthe llama food in the first place.\" \"an image of the waiter and waitress bringing customers the food they ordered, and looking very unhappy about it.\" \"a picture of a stockbroker putting some customer's money into an\nincredibly underpriced stock that he found on his own.\" \"an image of a confused-looking bank teller sitting behind an open window. Above the window, a sign says \"CHECK CASHING, DEPOSITS, WITHDRAWALS, INFORMATION, ASSISTANCE, CHANGE OF ADDRESS.\"\" \"an image of an utterly bewildered traveller who has mysteriously arrived\nat the right airline desk with the right ticket to the place he wanted to go\nto, being assigned a window seat in smoking, which is just what he wanted.\" \"an image of a computer room with a dirty great mainframe, and banks of\nthings which they put in computer rooms so that people can look at them\nand say \"Hey, those lights should be flashing but they aren't, someone\nmust have killed the computer.\"|\n|\nThe nerd is standing with his finger in an I/O port trying to stem the\nflood of bits leaking out onto the floor. He looks distinctly like a\nnerd who has suddenly realised that it would all have been a lot better\nif he had spent his time having drinks at parties and going out with girls\ninstead of playing with computers.\">"
  },
  "COMPLEX-WINDOW-DESC": {
   "name": "COMPLEX-WINDOW-DESC",
   "kind": "constant",
   "file": "maze.zil",
   "line": 201,
   "value": "<PTABLE ;\"Descriptions of windows\" \"an image of the llama-food salesman walking around your neighbourhood practising making deliveries to the wrong address.\" \"an image of the waiter and waitress practising making customers go through complicated orders multiple times.\" \"an image of a stockbroker staring dumbfounded at his computer\nscreen, on which you can just make out an order to sell Frobozzco as soon\nas its price drops five more points.\" \"an image of the bank teller moving \"NEXT WINDOW PLEASE\" signs from window to window in the bank.\" \"a split-screen display. On the left side, there's\na very confused Russian gentleman standing next to his aeroplane in what looks\nto be a town near Baffin Bay; on the right, an American is wondering why he's\nin Jakarta. They're both supposed to be in Geneva, which is where their pilots'\ncomputers claim they are.\" \"an image of a computer room with a dirty great mainframe and banks of those\nflashing lights they put in computer rooms so that people think \"Gosh,\nhow complicated computers are, and how amazingly clever the people who\nwork them must be.\"|\n|\nThe nerd is sitting at a terminal, hacking away. He looks about as happy\nas someone who has clearly never been out with girls can look.\nAbove his head is a monitor screen, showing a really rather attractive\nindividual looking at a monitor screen which shows a computer\nroom with a dirty great mainframe...\">"
  },
  "PNOTICE-TXT": {
   "name": "PNOTICE-TXT",
   "kind": "constant",
   "file": "maze.zil",
   "line": 492,
   "value": "<PLTABLE 33 \"           REMINDER            \" \"                               \" \"      This week, work on       \" <> <> \"        now at Happitec        \">"
  },
  "SL-TABLE": {
   "name": "SL-TABLE",
   "kind": "constant",
   "file": "misc.zil",
   "line": 15,
   "value": "<ITABLE NONE 80>"
  },
  "YOU-SEE": {
   "name": "YOU-SEE",
   "kind": "constant",
   "file": "misc.zil",
   "line": 21,
   "value": "\"You see \""
  },
  "CANT": {
   "name": "CANT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 22,
   "value": "\"You can't \""
  },
  "DONT": {
   "name": "DONT",
   "kind": "constant",
   "file": "misc.zil",
   "line": 23,
   "value": "\"You don't \""
  },
  "PERIOD": {
   "name": "PERIOD",
   "kind": "constant",
   "file": "misc.zil",
   "line": 24,
   "value": "\".|\n\""
  },
  "PCR": {
   "name": "PCR",
   "kind": "constant",
   "file": "misc.zil",
   "line": 26,
   "value": "\".|\n|\n\""
  },
  "BRACKET": {
   "name": "BRACKET",
   "kind": "constant",
   "file": "misc.zil",
   "line": 29,
   "value": "\"]|\n|\n\""
  },
  "GAME-VERBS": {
   "name": "GAME-VERBS",
   "kind": "constant",
   "file": "misc.zil",
   "line": 274,
   "value": "<PLTABLE V?INVENTORY V?TELL V?TIME V?SCORE V?SAVE V?RESTORE V?SCRIPT V?UNSCRIPT V?DIAGNOSE V?HELP V?VERBOSE V?BRIEF V?SUPER-BRIEF V?VERSION V?QUIT V?$REFRESH V?$VERIFY V?$ID V?NOTIFY V?$COMMAND V?$UNRECORD V?$COMMAND V?$RANDOM ;V?$DEBUG ;V?$CHEAT>"
  },
  "HUNGER-MSGS": {
   "name": "HUNGER-MSGS",
   "kind": "constant",
   "file": "misc.zil",
   "line": 641,
   "value": "<PTABLE <PLTABLE \"A fainting feeling prevents this simple action.\" \"Your compelling thoughts of a nice juicy steak temporarily distract you.\" \"Daydreaming about your last meal causes you to forget what you were doing.\" \"You find yourself becoming completely engrossed in your lack of food.\" \"You are delirious with hunger and can't even do this.\"> <PTABLE \"You're not hungry but eat anyway.\" \"You're slightly hungry so you eat with little enjoyment.\" \"You're pretty hungry so you eat with satisfaction.\" \"You're very hungry and decide the burger hits the spot.\" \"You're famished so you stuff it into your mouth as fast as you can.\" \"You're delirious with hunger and are amazed you can even get it into your mouth.\"> <PTABLE \"You are starting to feel hungry.\" \"You are feeling hungry.\" \"You are feeling very hungry.\" \"You are famished.\" \"You are weak with hunger.\"> ;<PTABLE (BYTE) 0 1 5 10 20 60> <PTABLE \"You're not even hungry.\" \"There are obviously better things to eat.\" \"They don't really seem appetising.\" \"You taste one and think better of it.\" \"As hungry as you are, they taste too disgusting to eat.\" \"You try imagining they are nacho chips but just can't bring yourself to swallow them.\">>"
  },
  "LIKELIES": {
   "name": "LIKELIES",
   "kind": "constant",
   "file": "misc.zil",
   "line": 776,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \" isn't likely\" \" seems doubtful\" \" seems unlikely\" \"'s unlikely\" \"'s not likely\" \"'s doubtful\">"
  },
  "COULDNTS": {
   "name": "COULDNTS",
   "kind": "constant",
   "file": "misc.zil",
   "line": 929,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"here\" \"where you are\" \"here\">"
  },
  "FIXTURES": {
   "name": "FIXTURES",
   "kind": "constant",
   "file": "misc.zil",
   "line": 980,
   "value": "<PTABLE <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"firm\" \"permanent\" \"immovab\" \"secure\"> <TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"attached\" \"affixed\">>"
  },
  "PHONE-NUMBERS": {
   "name": "PHONE-NUMBERS",
   "kind": "constant",
   "file": "misc.zil",
   "line": 1088,
   "value": "<ITABLE 14 0>"
  },
  "PROG-TABLE": {
   "name": "PROG-TABLE",
   "kind": "constant",
   "file": "mumble.zil",
   "line": 81,
   "value": "<TABLEIZE>"
  },
  "QTOPS": {
   "name": "QTOPS",
   "kind": "constant",
   "file": "mumble.zil",
   "line": 104,
   "value": "<PTABLE (BYTE) 0 0 </ ,COMPUTER-HEIGHT 2> </ ,COMPUTER-HEIGHT 2>>"
  },
  "QLEFTS": {
   "name": "QLEFTS",
   "kind": "constant",
   "file": "mumble.zil",
   "line": 106,
   "value": "<PTABLE (BYTE) </ ,COMPUTER-WIDTH 2> 0 0 </ ,COMPUTER-WIDTH 2>>"
  },
  "LAST-USED": {
   "name": "LAST-USED",
   "kind": "constant",
   "file": "mumble.zil",
   "line": 188,
   "value": "<TABLE (BYTE) 0 0 0 0 0 0 0 0>"
  },
  "AIRLINE-PSEUDOS": {
   "name": "AIRLINE-PSEUDOS",
   "kind": "constant",
   "file": "nairport.zil",
   "line": 1049,
   "value": "<PLTABLE <VOC \"OMNIA\" ADJ> <VOC \"GALLIA\" ADJ> \"Omnia Gallia\" ENT-B ,PSAIR-GALLIA <> <VOC \"INTERFLUG\" ADJ> \"Interflug\" ENT-B ,PSAIR-RANDOM <> <VOC \"NORDAIR\" ADJ> \"Nordair\" ENT-A ,PSAIR-RANDOM-NV <VOC \"TRANS\" ADJ> <VOC \"WORLD\" ADJ> \"Trans World\" ENT-A ,PSAIR-RANDOM-NV <VOC \"AIR\" ADJ> <VOC \"CARIBE\" ADJ> \"Air Caribe\" ENT-A ,PSAIR-RANDOM <> <VOC \"AMERICAN\" ADJ> \"American\" ENT-C ,PSAIR-RANDOM <VOC \"AIR\" ADJ> <VOC \"TORONTO\" ADJ> \"Air Toronto\" ENT-C ,PSAIR-RANDOM <VOC \"GUYANA\" ADJ> <VOC \"AIRWAYS\" ADJ> \"Guyana Airways\" ENT-C ,PSAIR-RANDOM-NV <VOC \"CATHAY\" ADJ> <VOC \"PACIFIC\" ADJ> \"Cathay Pacific\" ENT-C ,PSAIR-RANDOM-NV <VOC \"AIR\" ADJ> <VOC \"GUADELOUPE\" ADJ> \"Air Guadeloupe\" ENT-B ,PSAIR-RANDOM <VOC \"AIR\" ADJ> <VOC \"ZALAGASA\" ADJ> \"Air Zalagasa\" ENT-A ,PSAIR-ZALAGASA <VOC \"BRITISH\" ADJ> <VOC \"AIRWAYS\" ADJ> \"British Airways\" ENT-D ,PSAIR-RANDOM-NV <VOC \"AER\" ADJ> <VOC \"LINGUS\" ADJ> \"Aer Lingus\" ENT-D ,PSAIR-RANDOM <VOC \"NOCTURNAL\" ADJ> <VOC \"AVIATION\" ADJ> \"Nocturnal Aviation\" ENT-G ,PSAIR-RANDOM-NV <VOC \"AIR\" ADJ> <VOC \"CANADA\" ADJ> \"Air Canada\" ENT-D ,PSAIR-RANDOM <> <VOC \"ALITALIA\" ADJ> \"Alitalia\" ENT-E ,PSAIR-RANDOM <> <VOC \"ICELANDAIR\" ADJ> \"Icelandair\" ENT-E ,PSAIR-RANDOM <> <VOC \"LUFTHANSA\" ADJ> \"Lufthansa\" ENT-F ,PSAIR-RANDOM-NV <> <VOC \"BRANIFF\" ADJ> \"Braniff\" ENT-E ,PSAIR-RANDOM-NV <> <VOC \"DELTA\" ADJ> \"Delta\" ENT-F ,PSAIR-RANDOM-NV <VOC \"AIR\" ADJ> <VOC \"INDIA\" ADJ> \"Air India\" ENT-F ,PSAIR-RANDOM <> <VOC \"AEROFLOT\" ADJ> \"Aeroflot\" ENT-F ,PSAIR-RANDOM <> <VOC \"CONTINENTAL\" ADJ> \"Continental\" ENT-D ,PSAIR-RANDOM-NV <> <VOC \"SWISSAIR\" ADJ> \"Swissair\" ENT-G ,PSAIR-RANDOM-NV <> <VOC \"EASTERN\" ADJ> \"Eastern\" ENT-B ,PSAIR-RANDOM <> <VOC \"SINGAPORE\" ADJ> \"Singapore\" ENT-D ,PSAIR-RANDOM-NV <> <VOC \"QANTAS\" ADJ> \"Qantas\" ENT-G ,PSAIR-RANDOM-NV <VOC \"EL\" ADJ> <VOC \"AL\" ADJ> \"El Al\" ENT-G ,PSAIR-RANDOM>"
  },
  "PSEUDO-VEC": {
   "name": "PSEUDO-VEC",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 1307,
   "value": "<PTABLE MATCH-AIRLINE-NAME AIRLINE-LOOKUP>"
  },
  "PATRONS": {
   "name": "PATRONS",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 58,
   "value": "<PLTABLE \"the owner of a Baader-Meinhof shoulder-bag which\nhas just exploded outside the terminal\" \"the Zalagasan Catering Corps representative\" \"whoever has lost something which we don't know what it is\" \"the Deep Thought Corporation repair crew\" \"anyone interested in seeing some gladiator movies\" \"anyone who fancies making some announcements like these\" \"whoever dropped no tea in the main concourse\" \"anyone finding a digital watch engraved 'Prosser'\" \"anyone who knows where the white courtesy phone is located\">"
  },
  "SKYCAP-DOINGS": {
   "name": "SKYCAP-DOINGS",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 123,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"discussing the weather\" \"watching passengers struggle with their luggage\" \"talking about bad working conditions\" \"playing cards\" \"scratching themselves\">"
  },
  "AIRLINE-NAMES": {
   "name": "AIRLINE-NAMES",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 377,
   "value": "<PTABLE \"Omnia Gallia\" \"Air Zalagasa\" \"Nocturnal Aviation\" \"Trans-Galaxy Airlines\" \"Agony Airlines\" \"Frontline Airlines\" \"Flying Boxcar\" \"Untied\" \"Northwest Accident\" \"Massive\" \"Low Ceiling\" \"Pan Universal\" \"Quantum Airways\" \"Gamma Airlines\" \"People's Distress\" \"NewZork Air\" \"British Underocean\" \"Air Frog\" \"Air Worst\" \"Worsted Airlines\" \"Air Moosehead\" \"Foster Airways\" \"Kirin Airlines\" \"Air Laphroig\" \"Air America\" \"Tickoff Air\" \"KiwiAir\" \"Aerotica\" \"Continental Breakfast\" \"General Aviation\" \"Fred's\" \"BoingJets\">"
  },
  "AIRLINE-LOOKUP": {
   "name": "AIRLINE-LOOKUP",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 428,
   "value": "<PLTABLE <VOC \"OMNIA\" ADJ> <VOC \"GALLIA\" OBJECT> ,OMNIA-ID <VOC \"AIR\" ADJ> <VOC \"ZALAGASA\" OBJECT> ,ZALAGASA-ID <VOC \"NOCTURNAL\" ADJ> <VOC \"AVIATION\" OBJECT> ,NOCTURNAL-ID <VOC \"TRANS\" ADJ> <VOC \"GALAXY\" OBJECT> ,TRANS-GALAXY-ID <VOC \"TRANS-GALAXY\" ADJ> <VOC \"AIRLINES\" OBJECT> ,TRANS-GALAXY-ID <VOC \"AGONY\" ADJ> <VOC \"AIRLINES\" OBJECT> ,ALLEGHENY-ID <VOC \"FRONTLINE\" ADJ> <VOC \"AIRLINES\" OBJECT> ,FRONTLINE-ID <VOC \"FLYING\" ADJ> <VOC \"BOXCAR\" OBJECT> ,BOXCAR-ID <VOC \"UNTIED\" ADJ> <VOC \"AIRLINES\" OBJECT> ,UNTIED-ID <VOC \"NORTHWEST\" ADJ> <VOC \"ACCIDENT\" OBJECT> ,NORTHWEST-ID <VOC \"NORTH\" ADJ> <VOC \"WEST\" ADJ> ,NORTHWEST-ID <VOC \"NORTHWEST\" ADJ> <VOC \"AIRLINES\" OBJECT> ,NORTHWEST-ID <VOC \"MASSIVE\" ADJ> <VOC \"AIRLINES\" OBJECT> ,MASSIVE-ID <> <VOC \"MASSIVE\" OBJECT> ,MASSIVE-ID <VOC \"LOW\" ADJ> <VOC \"CEILING\" OBJECT> ,BIG-SKY-ID <VOC \"PAN\" ADJ> <VOC \"UNIVERSAL\" OBJECT> ,PAN-UNIVERSAL-ID <VOC \"QUANTUM\" ADJ> <VOC \"AIRWAYS\" OBJECT> ,QUANTUM-ID <VOC \"GAMMA\" ADJ> <VOC \"AIRLINES\" OBJECT> ,GAMMA-ID <VOC \"PEOPLE'S\" ADJ> <VOC \"DISTRESS\" OBJECT> ,DISTRESS-ID <VOC \"PEOPLES\" ADJ> <VOC \"DISTRESS\" OBJECT> ,DISTRESS-ID <VOC \"NEWZORK\" ADJ> <VOC \"AIR\" OBJECT> ,NEWZORK-ID <VOC \"NEW\" ADJ> <VOC \"ZORK\" OBJECT> ,NEWZORK-ID <VOC \"BRITISH\" ADJ> <VOC \"UNDEROCEAN\" OBJECT> ,BRITISH-ID <VOC \"AIR\" ADJ> <VOC \"FROG\" OBJECT> ,FROG-ID <VOC \"AIR\" ADJ> <VOC \"WORST\" OBJECT> ,WORST-ID <VOC \"WORSTED\" ADJ> <VOC \"AIRLINES\" OBJECT> ,WORSTED-ID <VOC \"AIR\" ADJ> <VOC \"MOOSEHEAD\" OBJECT> ,MOOSEHEAD-ID <VOC \"FOSTER\" ADJ> <VOC \"AIRWAYS\" OBJECT> ,FOSTER-ID <VOC \"KIRIN\" ADJ> <VOC \"AIRLINES\" OBJECT> ,KIRIN-ID <VOC \"AIR\" ADJ> <VOC \"LAPHROIG\" OBJECT> ,LAPHROIG-ID <VOC \"AIR\" ADJ> <VOC \"AMERICA\" OBJECT> ,AMERICA-ID <VOC \"TICKOFF\" ADJ> <VOC \"AIR\" OBJECT> ,TICKOFF-ID <VOC \"KIWIAIR\" ADJ> <> ,KIWI-ID <VOC \"KIWI\" ADJ> <VOC \"AIR\" OBJECT> ,KIWI-ID <VOC \"AEROTICA\" ADJ> <> ,AEROTICA-ID <VOC \"CONTINENTAL\" ADJ> <VOC \"BREAKFAST\" OBJECT> ,CONTINENTAL-ID <VOC \"GENERAL\" ADJ> <VOC \"AVIATION\" OBJECT> ,GENERAL-ID <VOC \"FRED\" ADJ> <> ,FRED-ID <VOC \"FREDS\" ADJ> <> ,FRED-ID <VOC \"FRED'S\" ADJ> <> ,FRED-ID <VOC \"BOING\" ADJ> <VOC \"JETS\" OBJECT> ,BOING-ID <VOC \"BOINGJETS\" ADJ> <> ,BOING-ID>"
  },
  "AIRLINE-BITS": {
   "name": "AIRLINE-BITS",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 475,
   "value": "<ITABLE <* 2 ,AIRPORT-ROOMS> 0>"
  },
  "CURRENT-SIGNS": {
   "name": "CURRENT-SIGNS",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 775,
   "value": "<ITABLE 10 0>"
  },
  "OMNIA-SIGN-TEXT": {
   "name": "OMNIA-SIGN-TEXT",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 946,
   "value": "<PLTABLE 33 \"Omnia Gallia airlines has been \" \"sold; we no longer fly out of  \" \"this airport. For further      \" \"information, contact the Air   \" \"Zalagasa desk.                 \">"
  },
  "TICKET-TYPE-TABLE": {
   "name": "TICKET-TYPE-TABLE",
   "kind": "constant",
   "file": "nnairport.zil",
   "line": 1514,
   "value": "<PLTABLE T <PLTABLE <VOC \"DIRECT\">> <PLTABLE <VOC \"NONSTOP\"> <VOC \"NON-STOP\"> <VOC \"NON\">>>"
  },
  "SEAT-MASKS": {
   "name": "SEAT-MASKS",
   "kind": "constant",
   "file": "xjet.zil",
   "line": 117,
   "value": "<TABLE (PURE BYTE LENGTH) ,SEAT-A ,SEAT-B ,SEAT-C ,SEAT-D>"
  },
  "AISLE-STATE": {
   "name": "AISLE-STATE",
   "kind": "constant",
   "file": "xjet.zil",
   "line": 120,
   "value": "<ITABLE <+ ,AISLE-COUNT 1> ,ALL-SEATS>"
  },
  "NORMAL-SEAT": {
   "name": "NORMAL-SEAT",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 1170,
   "value": "<PLTABLE SEATBELT SEAT-POCKET UNDER-SEAT SEAT-TABLE RECEPTACLE>"
  },
  "NORMAL-SEAT-POCKET": {
   "name": "NORMAL-SEAT-POCKET",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 1172,
   "value": "<PLTABLE AIRLINE-MAGAZINE SAFETY-CARD PHONES SAFETY-CARD-TWO>"
  },
  "SEAT-TRANSLATIONS": {
   "name": "SEAT-TRANSLATIONS",
   "kind": "constant",
   "file": "xjet.zil",
   "line": 900,
   "value": "<TABLE (PURE BYTE) ,SEAT-A ,SEAT-B ,SEAT-C ,SEAT-D>"
  },
  "SEAT-LETTER-NAMES": {
   "name": "SEAT-LETTER-NAMES",
   "kind": "constant",
   "file": "xxjetdefs.zil",
   "line": 29,
   "value": "<PLTABLE <VOC \"B\" OBJECT> <VOC \"C\" OBJECT> <VOC \"D\" OBJECT> <VOC \"E\" OBJECT>>"
  },
  "OTHER-AIRPLANE-OBJECTS": {
   "name": "OTHER-AIRPLANE-OBJECTS",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 2706,
   "value": "<PLTABLE <VOC \"ESCAPE\" ADJ> <VOC \"HATCH\" OBJECT> ,HATCH-OBJECT <VOC \"EMERGENCY\" ADJ> <VOC \"HATCH\" OBJECT> ,HATCH-OBJECT <> <VOC \"EXIT\" OBJECT> ,HATCH-OBJECT <> <VOC \"WINDOW\" OBJECT> ,HATCH-OBJECT <> <VOC \"HANDLE\" OBJECT> ,HATCH-OBJECT <VOC \"YOUR\" ADJ> <VOC \"NEPHEW\" OBJECT> ,GRANDCHILDREN-OBJECT <> <VOC \"ARTHUR\" OBJECT> ,GRANDCHILDREN-OBJECT <> <VOC \"BUTTONS\" OBJECT> ,BUTTONS-OBJECT <> <VOC \"CONTROLS\" OBJECT> ,BUTTONS-OBJECT <VOC \"RECLINE\" ADJ> <VOC \"BUTTON\" OBJECT> ,RECLINE-BUTTON <VOC \"LIGHT\" ADJ> <VOC \"BUTTON\" OBJECT> ,LIGHT-BUTTON <VOC \"CALL\" ADJ> <VOC \"BUTTON\" OBJECT> ,CALL-BUTTON <VOC \"YOUR\" ADJ> <VOC \"CHILD\" OBJECT> ,BABY-OBJECT <VOC \"YOUR\" ADJ> <VOC \"BABY\" OBJECT> ,BABY-OBJECT <VOC \"YOUR\" ADJ> <VOC \"SON\" OBJECT> ,BABY-OBJECT <> <VOC \"BOOK\" OBJECT> ,BOOK-OBJECT <VOC \"DIRK\" ADJ> <VOC \"GENTLY\" OBJECT> ,BOOK-OBJECT <VOC \"MISSHAPEN\" ADJ> <VOC \"THING\" OBJECT> ,THING-OBJECT <> <VOC \"REGULATIONS\" OBJECT> ,REGULATIONS-OBJECT <> <VOC \"VOICE\" OBJECT> ,VOICE-OBJECT <> <VOC \"VOICES\" OBJECT> ,VOICE-OBJECT <VOC \"NOSE\" ADJ> <VOC \"FLUTE\" OBJECT> ,FLUTE-OBJECT <VOC \"NOSE\" ADJ> <VOC \"FLUTES\" OBJECT> ,FLUTE-OBJECT <VOC \"YOUR\" ADJ> <VOC \"FOOD\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"YOUR\" ADJ> <VOC \"MEAL\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"CHICKEN\" ADJ> <VOC \"KIEV\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"YOUR\" ADJ> <VOC \"FILET\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"YOUR\" ADJ> <VOC \"CHICKEN\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"HIS\" ADJ> <VOC \"MEAL\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"HER\" ADJ> <VOC \"MEAL\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"MAN'S\" ADJ> <VOC \"MEAL\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"WOMAN'S\" ADJ> <VOC \"MEAL\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"HIS\" ADJ> <VOC \"FOOD\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"HER\" ADJ> <VOC \"FOOD\" OBJECT> ,OTHER-FOOD-OBJECT <VOC \"STINGLAI\" ADJ> <VOC \"KA'ABI\" OBJECT> ,FAKE-CHUTE-OBJECT <> <VOC \"PARACHUTE\" OBJECT> ,FAKE-CHUTE-OBJECT <> <VOC \"CHUTE\" OBJECT> ,FAKE-CHUTE-OBJECT <VOC \"OLD\" ADJ> <VOC \"WOMAN\" OBJECT> ,GRANDMA-PERSON <> <VOC \"WOMAN\" OBJECT> ,GRANDMA-PERSON <> <VOC \"GRANDMOTHER\" OBJECT> ,GRANDMA-PERSON <VOC \"YOUNG\" ADJ> <VOC \"WOMAN\" OBJECT> ,MOMMA-PERSON <> <VOC \"WOMAN\" OBJECT> ,MOMMA-PERSON <VOC \"YOUNG\" ADJ> <VOC \"MOTHER\" OBJECT> ,MOMMA-PERSON <> <VOC \"MOTHER\" OBJECT> ,MOMMA-PERSON <VOC \"IRRITABLE\" ADJ> <VOC \"FELLOW\" OBJECT> ,SMOKER-PERSON <VOC \"IRRITABLE\" ADJ> <VOC \"MAN\" OBJECT> ,SMOKER-PERSON <VOC \"ANGRY\" ADJ> <VOC \"MAN\" OBJECT> ,SMOKER-PERSON <VOC \"ANGRY\" ADJ> <VOC \"FELLOW\" OBJECT> ,SMOKER-PERSON <> <VOC \"MAN\" OBJECT> ,SMOKER-PERSON <> <VOC \"POLITICIANS\" OBJECT> ,POLITICIANS-PERSON <> <VOC \"ZALAGASAN\" OBJECT> ,ZALAGASANS-PERSON ;<VOC \"BALD\" ADJ> ;<VOC \"MAN\" OBJECT> ;,BALD-PERSON <VOC \"FAT\" ADJ> <VOC \"MAN\" OBJECT> ,FAT-PERSON <VOC \"FROBOZZCO\" ADJ> <VOC \"EXECUTIVE\" OBJECT> ,FROBOZZCO-PERSON <VOC \"SLEEPING\" ADJ> <VOC \"MAN\" OBJECT> ,SLEEPER-PERSON>"
  },
  "SEAT-PSEUDO-VEC": {
   "name": "SEAT-PSEUDO-VEC",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 2818,
   "value": "<PTABLE MATCH-SEAT-NAME OTHER-AIRPLANE-OBJECTS>"
  },
  "LAV-SIGN-TEXT": {
   "name": "LAV-SIGN-TEXT",
   "kind": "constant",
   "file": "nnjet.zil",
   "line": 1259,
   "value": "<PLTABLE 33 \"A sign on the wall says:       \" \"\"As a courtesy to your fellow  \" \"passengers, please wipe the    \" \"sink clean when you're         \" \"finished.\"                     \">"
  },
  "SCENE-STARTERS": {
   "name": "SCENE-STARTERS",
   "kind": "constant",
   "file": "nnjet.zil",
   "line": 1939,
   "value": "<PTABLE START-MEAL START-VISA START-HIJACK>"
  },
  "ROW-ASSIGNMENTS": {
   "name": "ROW-ASSIGNMENTS",
   "kind": "constant",
   "file": "xjet.zil",
   "line": 2489,
   "value": "<TABLE (BYTE) 0 0 0 0 0 0>"
  },
  "RANDOM-VISA-NUMBERS": {
   "name": "RANDOM-VISA-NUMBERS",
   "kind": "constant",
   "file": "nnjet.zil",
   "line": 3006,
   "value": "<PLTABLE ;\"Smoker\" <TABLE (LENGTH BYTE PURE) % <ASCII !\\4> % <ASCII !\\2> % <ASCII !\\4> % <ASCII !\\2>> ;\"grandma\" <TABLE (LENGTH BYTE PURE) % <ASCII !\\9> % <ASCII !\\0> % <ASCII !\\7> % <ASCII !\\4> % <ASCII !\\2>> ;\"Business person\" <TABLE (LENGTH BYTE PURE) % <ASCII !\\6> % <ASCII !\\1> % <ASCII !\\7> % <ASCII !\\4> % <ASCII !\\2>> ;\"Momma\" <TABLE (LENGTH BYTE PURE) % <ASCII !\\0> % <ASCII !\\7> % <ASCII !\\4> % <ASCII !\\2>>>"
  },
  "GRANDMA-STORIES": {
   "name": "GRANDMA-STORIES",
   "kind": "constant",
   "file": "xjet.zil",
   "line": 2723,
   "value": "<PLTABLE \"the time my grandson Dennis ...? ...\" \"my granddaughter ...? ...\" \"Tom, my athletic ...?...\">"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 20,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 24,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 28,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 29,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 33,
   "value": "6"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 37,
   "value": "7"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 41,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 42,
   "value": "9"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 44,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 45,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 46,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 47,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 48,
   "value": "4"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 50,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 51,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 52,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 53,
   "value": "9"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 55,
   "value": "1"
  },
  "M-ENTERING": {
   "name": "M-ENTERING",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 56,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 57,
   "value": "3"
  },
  "M-ENTERED": {
   "name": "M-ENTERED",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 58,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 59,
   "value": "5"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 60,
   "value": "6"
  },
  "M-CONT": {
   "name": "M-CONT",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 61,
   "value": "7"
  },
  "M-WINNER": {
   "name": "M-WINNER",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 62,
   "value": "8"
  },
  "M-EXIT": {
   "name": "M-EXIT",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 63,
   "value": "9"
  },
  "M-SHORT-OBJDESC": {
   "name": "M-SHORT-OBJDESC",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 64,
   "value": "10"
  },
  "M-SHORTDESC": {
   "name": "M-SHORTDESC",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 65,
   "value": "11"
  },
  "O-PTR": {
   "name": "O-PTR",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 67,
   "value": "0"
  },
  "O-START": {
   "name": "O-START",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 68,
   "value": "1"
  },
  "O-LENGTH": {
   "name": "O-LENGTH",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 69,
   "value": "2"
  },
  "O-END": {
   "name": "O-END",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 70,
   "value": "3"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 71,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 73,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 75,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 77,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 79,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 81,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 83,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 85,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 87,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 89,
   "value": "3"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 91,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 93,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 95,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 97,
   "value": "4"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 99,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 100,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 101,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 102,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 103,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 104,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "old-parserdefs.zil",
   "line": 105,
   "value": "2"
  },
  "EXTRA-TEXT": {
   "name": "EXTRA-TEXT",
   "kind": "constant",
   "file": "other-misc.zil",
   "line": 557,
   "value": "<ITABLE 3 <>>"
  },
  "ANS-TABLE": {
   "name": "ANS-TABLE",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 9,
   "value": "<LTABLE 0 0 0 0>"
  },
  "PSTRING": {
   "name": "PSTRING",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 15,
   "value": "\"Unfortunately, there's a radio connected to my brain\""
  },
  "SSTRING": {
   "name": "SSTRING",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 17,
   "value": "\"Actually, it's the BBC controlling us from London\""
  },
  "P-Q": {
   "name": "P-Q",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 26,
   "value": "<TABLE ;\"How many health fascists are there in the FDA?\" \"What chemical is the international health conspiracy using to destroy our valuable body fat?\" \"What do Ronald Wilson Reagan, Daniel Miguel Ortega, Dwight Eugene Gooden and Johnny Herman Carson have in common (and are a menace because of it)?\" \"What device is used by the banks to keep track of the whereabouts of American citizens?\" \"Where is the centre of communist insurgency in the United States?\" \"The existence of which one of the fifty states of the union is a fiction invented by the Trilateral Commission for its own nefarious purposes?\" \"What left-wing organisation foiled the coup d'etat directly after the assassination of John F. Kennedy, leading to decades of crypto-communist government in America?\" \"What is the breeding ground for most major diseases?\" \"How do THEY learn so much about you?\" \"By what percentage do students who exchange digital watches with multiple partners increase their chances of contracting bubonic plague?\" \"What local government-subsidised program poses the greatest threat to home privacy?\" \"What are the Mexicans unleashing on the United States for refusing to grant Mexico a major-league baseball franchise?\" \"What secret FBI surveillance method is masquerading under the guise of a public service?\" \"Who is THEIR leader?\" \"What well-meaning legislation was actually a communist-inspired plot to destroy the American family?\" \"How are the dentists of America conspiring to destroy the minds of our children?\">"
  },
  "P-A": {
   "name": "P-A",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 44,
   "value": "<PTABLE ;<PLTABLE <PLTABLE <STR-TABLE \"42\">>> <PLTABLE <PLTABLE <STR-TABLE \"aspartame\">> <PLTABLE <STR-TABLE \"nutrasweet\">>> <PLTABLE <PLTABLE <STR-TABLE \"666\">> <PLTABLE <STR-TABLE \"6\"> <STR-TABLE \"6\"> <STR-TABLE \"6\">>> <PLTABLE <PLTABLE <STR-TABLE \"atmS\">> <PLTABLE <STR-TABLE \"automatic\"> <STR-TABLE \"teller\"> <STR-TABLE \"machineS\">>> <PLTABLE <PLTABLE <STR-TABLE \"ohio\">>> <PLTABLE <PLTABLE <STR-TABLE \"delaware\">>> <PLTABLE <PLTABLE <STR-TABLE \"nfl\">> <PLTABLE <STR-TABLE \"national\"> <STR-TABLE \"football\"> <STR-TABLE \"league\">>> <PLTABLE <PLTABLE <STR-TABLE \"yogurt\">> <PLTABLE <STR-TABLE \"yoghurt\">>> <PLTABLE <PLTABLE <STR-TABLE \"garbage\">>> <PLTABLE <PLTABLE <STR-TABLE \"300\">> <PLTABLE <STR-TABLE \"300%\">>> <PLTABLE <PLTABLE <STR-TABLE \"cable\"> <STR-TABLE \"tv\">> <PLTABLE <STR-TABLE \"cable\"> <STR-TABLE \"television\">>> <PLTABLE <PLTABLE <STR-TABLE \"killer\"> <STR-TABLE \"bees\">>> <PLTABLE <PLTABLE <STR-TABLE \"traffic\"> <STR-TABLE \"helicopterS\">> <PLTABLE <STR-TABLE \"traffic\"> <STR-TABLE \"control\"> <STR-TABLE \"helicopterS\">> <PLTABLE <STR-TABLE \"traffic\"> <STR-TABLE \"copterS\">> <PLTABLE <STR-TABLE \"traffic\"> <STR-TABLE \"control\"> <STR-TABLE \"copterS\">>> <PLTABLE <PLTABLE <STR-TABLE \"queen\"> <STR-TABLE \"mum\">>> <PLTABLE <PLTABLE <STR-TABLE \"gi\"> <STR-TABLE \"bill\">>> <PLTABLE <PLTABLE <STR-TABLE \"novocaine\">>>>"
  },
  "OZ-ROYS": {
   "name": "OZ-ROYS",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 85,
   "value": "<PLTABLE \"The Russians are coming! The Russians are coming!\" \"Don't give me that blue whale stuff! They're spy submarines!\" \"The computers have come alive! They can't turn them off!\" \"Look! Headless eyes! Headless eyes in the ozone layer!\" \"The llamas know everything! They write it down in a little book!\" \"Laboratories! Laboratories in Utah! Where they make stuff!\">"
  },
  "INCI-TBL": {
   "name": "INCI-TBL",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 93,
   "value": "<PLTABLE W?ACTUALLY W?COMMA W?IT'S W?THE W?BBC W?CONTROLLING W?US W?FROM W?LONDON>"
  },
  "UNFO-TBL": {
   "name": "UNFO-TBL",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 97,
   "value": "<PLTABLE W?UNFORTUNATELY W?COMMA W?THERE'S W?A W?RADIO W?CONNECTED W?TO W?MY W?BRAIN>"
  },
  "CRAZIES": {
   "name": "CRAZIES",
   "kind": "constant",
   "file": "paranoid.zil",
   "line": 101,
   "value": "<PTABLE \"Suddenly a bunch of men in white coats appear and put you in a straitjacket. They throw you in a paddy wagon and take you away to an asylum. Realising that this turn of events will mean you must fill out another set of change-of-address cards, you go completely bughouse and discover true happiness\nin the arms of a green llama which appears each night, high up on the rubber\nwall.\" \"Are you dabbling in controlled substances or something?\" \"Perhaps you should consult a psychiatrist before it's too late.\" \"What astonishing drivel. You ought to be put away.\" \"If you go around saying things like that, people will start thinking you are a little eccentric.\">"
  },
  "P-OCL1": {
   "name": "P-OCL1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 11,
   "value": "<ITABLE NONE 25>"
  },
  "P-OCL2": {
   "name": "P-OCL2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 12,
   "value": "<ITABLE NONE 25>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 34,
   "value": "<ITABLE NONE 32>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 55,
   "value": "<ITABLE 99 (BYTE LENGTH) 0>"
  },
  "RESERVE-INBUF": {
   "name": "RESERVE-INBUF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 56,
   "value": "<ITABLE 99 (BYTE LENGTH) 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 77,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 78,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-OVTBL": {
   "name": "P-OVTBL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 79,
   "value": "<TABLE 0 0 0 0>"
  },
  "AGAIN-LEXV": {
   "name": "AGAIN-LEXV",
   "kind": "constant",
   "file": "parser.zil",
   "line": 89,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "RESERVE-LEXV": {
   "name": "RESERVE-LEXV",
   "kind": "constant",
   "file": "parser.zil",
   "line": 90,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "OOPS-INBUF": {
   "name": "OOPS-INBUF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 93,
   "value": "<ITABLE 99 (BYTE LENGTH) 0>"
  },
  "OOPS-TABLE": {
   "name": "OOPS-TABLE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 94,
   "value": "<TABLE <> <> <> <>>"
  },
  "SEEVERBS": {
   "name": "SEEVERBS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 777,
   "value": "<PTABLE V?EXAMINE V?LOOK V?LOOK-INSIDE V?LOOK-ON V?READ V?FIND V?SEARCH V?SHOW V?LOOK-UNDER V?LOOK-BEHIND V?LOOK-THRU V?LOOK-DOWN V?LOOK-UP V?READ-TO V?LOOK-OUTSIDE V?COUNT V?WATCH V?ADJUST V?POINT>"
  },
  "BUZZTABLE": {
   "name": "BUZZTABLE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1009,
   "value": "<PTABLE <PLTABLE <VOC \"WHY\" <>> <VOC \"HOW\" <>> <VOC \"HOW'S\" <>> <VOC \"WHEN\" <>> <VOC \"WHEN'S\" <>> <VOC \"WOULD\" <>> <VOC \"COULD\" <>> <VOC \"SHOULD\" <>>> <PLTABLE <VOC \"THAT'S\" <>> <VOC \"I'M\" <>> <VOC \"DID\" <>> <VOC \"THEY'RE\" <>> <VOC \"SHALL\" <>> <VOC \"DO\" <>> <VOC \"HAVE\" <>> <VOC \"ANY\" <>> <VOC \"I'LL\" <>> <VOC \"WHICH\" <>> <VOC \"WE'RE\" <>> <VOC \"I'VE\" <>> <VOC \"WON'T\" <>> <VOC \"HAS\" <>> <VOC \"YOU'RE\" <>> <VOC \"HE'S\" <>> <VOC \"SHE'S\" <>> <VOC \"WILL\" <>> <VOC \"WERE\" <>>> <PLTABLE <VOC \"ZERO\" <>> <VOC \"EIGHT\" <>> <VOC \"NINE\" <>> <VOC \"TEN\" <>> <VOC \"ELEVEN\" <>> <VOC \"TWELVE\" <>> ;<VOC \"THIRTEEN\" <>> <VOC \"FOURTEEN\" <>> <VOC \"FIFTEEN\" <>> <VOC \"SIXTEEN\" <>> <VOC \"SEVENTEEN\" <>> <VOC \"EIGHTEEN\" <>> <VOC \"NINETEEN\" <>> ;<VOC \"TWENTY\" <>> ;<VOC \"THIRTY\" <>> <VOC \"FORTY\" <>> ;<VOC \"FIFTY\" <>> <VOC \"SIXTY\" <>> <VOC \"SEVENTY\" <>> <VOC \"EIGHTY\" <>> <VOC \"NINETY\" <>> <VOC \"HUNDRED\" <>> <VOC \"THOUSAND\" <>> <VOC \"MILLION\" <>> <VOC \"BILLION\" <>>> <PLTABLE <VOC \"CURSE\" <>> <VOC \"GODDAMNED\" <>> <VOC \"CUSS\" <>> <VOC \"DAMN\" <>> <VOC \"FUCK\" <>> <VOC \"SHITHEAD\" <>> <VOC \"BASTARD\" <>> <VOC \"ASS\" <>> <VOC \"FUCKING\" <>> <VOC \"BITCH\" <>> <VOC \"DAMNED\" <>> <VOC \"COCKSUCKER\" <>> <VOC \"FUCKED\" <>> <VOC \"PEE\" <>> <VOC \"CUNT\" <>> <VOC \"ASSHOLE\" <>> <VOC \"PISS\" <>> <VOC \"SUCK\" <>> <VOC \"SHIT\" <>> <VOC \"CRAP\" <>>> <PLTABLE <VOC \"NE\" <>> <VOC \"NW\" <>> <VOC \"SE\" <>> <VOC \"SW\" <>> <VOC \"NORTHEAST\" <>> <VOC \"NORTHWEST\" <>> <VOC \"SOUTHEAST\" <>> <VOC \"SOUTHWEST\" <>>>>"
  },
  "UNKNOWN-MSGS": {
   "name": "UNKNOWN-MSGS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1514,
   "value": "<PLTABLE <PTABLE \"You must have special permission to use the word \" \"\" in this story.\"> <PTABLE \"The word \" \"\" hasn't been approved for use in this story.\"> <PTABLE \"This story isn't allowed to recognise the word \" \".\"\">>"
  },
  "CAPS": {
   "name": "CAPS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1763,
   "value": "<PLTABLE <VOC \"ACCIDENT\" <>> <VOC \"AEROTICA\" <>> <VOC \"AGONY\" <>> <VOC \"AIR\" <>> <VOC \"AIRLINES\" <>> <VOC \"AIRWAYS\" <>> <VOC \"AMERICA\" <>> <VOC \"AMERICAN\" <>> <VOC \"AVIATION\" <>> <VOC \"LOW\" <>> <VOC \"CEILING\" <>> <VOC \"BOING\" <>> <VOC \"BOINGJETS\" <>> <VOC \"BONGO\" NOUN> <VOC \"BOXCAR\" <>> <VOC \"BOYSENBERRY\" <>> <VOC \"BREAKFAST\" <>> <VOC \"BRITISH\" <>> <VOC \"CALIFORNIA\" <>> <VOC \"CLINT\" NOUN> <VOC \"CONTINENTAL\" <>> <VOC \"DISTRESS\" <>> <VOC \"DOCTOR\" <>> <VOC \"DR\" <>> <VOC \"E\" <>> <VOC \"FIDUCIARY\" <>> <VOC \"FILLMORE\" <>> <VOC \"FLYING\" <>> <VOC \"FOSTER\" <>> <VOC \"FRED\" <>> <VOC \"FRED'S\" <>> <VOC \"FREDS\" <>> <VOC \"FRENCH\" <>> <VOC \"FROG\" <>> <VOC \"FRONTLINE\" <>> <VOC \"GALAXY\" <>> <VOC \"GALLIA\" <>> <VOC \"GAMMA\" <>> <VOC \"GENERAL\" <>> <VOC \"GERMAN\" <>> <VOC \"I\" <>> <VOC \"ITALIAN\" <>> <VOC \"JETS\" <>> <VOC \"KIRIN\" <>> <VOC \"KIWI\" <>> <VOC \"KIWIAIR\" <>> <VOC \"LAPHROIG\" <>> <VOC \"LLAMEX\" <>> <VOC \"LLAMEX(R)\" <>> <VOC \"MASSIVE\" <>> <VOC \"MISS\" <>> <VOC \"MOOSEHEAD\" <>> <VOC \"MR\" ADJ> <VOC \"MRS\" ADJ> <VOC \"N\" <>> <VOC \"NANCY\" NOUN> <VOC \"NEW\" <>> <VOC \"NEWZORK\" <>> <VOC \"NOCTURNAL\" <>> <VOC \"NORTH\" <>> <VOC \"NORTHWEST\" <>> <VOC \"NORTHWEST\" <>> <VOC \"OMNIA\" <>> <VOC \"PAN\" <>> <VOC \"PAULETTE\" NOUN> <VOC \"PEOPLE'S\" <>> <VOC \"PEOPLES\" <>> <VOC \"PONGO\" NOUN> <VOC \"QUANTUM\" <>> <VOC \"ROGER\" NOUN> <VOC \"S\" <>> <VOC \"SWISS\" <>> <VOC \"TICKOFF\" <>> <VOC \"TRANS\" <>> <VOC \"TRANS-GALAXY\" <>> <VOC \"TRUST\" <>> <VOC \"UNDEROCEAN\" <>> <VOC \"UNIVERSAL\" <>> <VOC \"UNTIED\" <>> <VOC \"W\" <>> <VOC \"WEST\" <>> <VOC \"WORST\" <>> <VOC \"WORSTED\" <>> <VOC \"ZALAGASA\" <>> <VOC \"ZALAGASAN\" <>> <VOC \"ZORK\" <>>>"
  },
  "HAVEVERBS": {
   "name": "HAVEVERBS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 2844,
   "value": "<PTABLE V?DROP V?PUT V?PUT-ON V?GIVE V?SHOW V?FEED V?THROW V?PUT-UNDER V?PUT-BEHIND V?THROW-OVER V?RELEASE V?TAKE-WITH V?TOUCH-TO V?OPEN V?OPEN-WITH V?CLOSE V?COVER>"
  },
  "TALKVERBS": {
   "name": "TALKVERBS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 2851,
   "value": "<PTABLE V?TELL V?TELL-ABOUT V?ASK-ABOUT V?ASK-FOR V?WHAT V?WHERE V?WHO V?ALARM V?HELLO V?GOODBYE V?SAY V?YELL V?THANK V?QUESTION V?REPLY V?WAVE-AT>"
  },
  "TOUCHVERBS": {
   "name": "TOUCHVERBS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 2859,
   "value": "<PTABLE V?TAKE V?TAKE-OFF V?PUT V?PUT-ON V?PUT-UNDER V?PUT-BEHIND V?COVER V?EMPTY-INTO V?REACH-IN V?TOUCH-TO V?TOUCH V?HIT V?KICK V?MOVE V?PUSH V?PUSH-TO V?PULL V?LOWER V?RAISE V?LOOSEN V?TURN-TO V?ADJUST V?SPIN V?TURN V?SHAKE V?SWING V?OPEN V?OPEN-WITH V?CLOSE V?LOCK V?UNLOCK ;V?SCREW ;V?UNSCREW V?PLUG V?UNPLUG V?TIE V?UNTIE V?FOLD V?UNFOLD V?LAMP-ON V?LAMP-OFF V?UNTANGLE V?WRAP-AROUND V?CUT V?RIP V?MUNG V?DIG V?FILL ;V?BURN-WITH V?CLEAN V?CLEAN-OFF V?BLOW-INTO V?SHOOT V?WIND V?REPAIR V?REPLACE V?PICK V?MELT V?PLAY V?REPLUG ;V?UNSCREW-FROM ;V?SCREW-WITH V?GIVE V?FEED V?STAND-ON V?SHORT V?SIT V?LIE-DOWN V?EAT V?BITE V?TASTE V?DRINK V?DRINK-FROM V?FILL-IN V?ERASE>"
  },
  "HURTVERBS": {
   "name": "HURTVERBS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 2876,
   "value": "<PTABLE V?HIT V?KICK V?KILL V?MUNG V?KNOCK V?KICK V?CUT V?RIP V?BITE ;V?RAPE V?SHAKE V?UNDRESS V?PUSH V?PUSH-TO V?PULL>"
  },
  "PUTVERBS": {
   "name": "PUTVERBS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 2884,
   "value": "<PTABLE V?PUT V?PUT-ON V?PUT-UNDER V?PUT-BEHIND V?THROW V?THROW-OVER V?EMPTY-INTO>"
  },
  "MOVEVERBS": {
   "name": "MOVEVERBS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 2890,
   "value": "<PTABLE V?TAKE V?TAKE-OFF V?MOVE V?PULL V?PUSH V?PUSH-TO V?TURN V?RAISE V?LOWER V?SPIN V?SHAKE V?PLAY V?OPEN V?OPEN-WITH V?CLOSE V?ADJUST V?UNTANGLE V?SHORT V?TURN-TO V?POINT-AT V?SWING V?UNPLUG V?BOUNCE>"
  },
  "CLERK-SUBJECTS": {
   "name": "CLERK-SUBJECTS",
   "kind": "constant",
   "file": "people.zil",
   "line": 249,
   "value": "<PLTABLE <PTABLE BSTORE \"The manager's bughouse, the women are dogs, the men are hogs and the customers are half-baked. Other than that, it's a great place.\"> <PTABLE CUTOUTS \"That stuff? Cheap at half the price.\"> <PTABLE BESTSELLERS \"Do you know how much money those guys make? Disgusting.\"> <PTABLE REGISTER \"Fouled up beyond all recognition.\"> <PTABLE CLERK \"Started last week. Seems like a year.\"> <PTABLE WRISTWATCH \"I had one like yours, but a llama ate it.\"> <PTABLE ECLIPSE \"Pretty tame stuff, though it might impress someone who'd never seen a computer.\"> <PTABLE ADVENTURE \"'Dork I'? One of the classics!\"> <PTABLE COMPUTER \"It's got what I like in a computer: it's named after a berry. That's what I look for. A really purple berry, too. Great.\"> <PTABLE QUEEN-MUM \"I...I don't know whom you're talking about.\"> <PTABLE NERD \"That pallid little creep? There's something weird about him. He should be locked away.\">>"
  },
  "AGENT-SUBJECTS": {
   "name": "AGENT-SUBJECTS",
   "kind": "constant",
   "file": "people.zil",
   "line": 421,
   "value": "<PLTABLE <PTABLE AGENCY \"Terrible. People coming in and out all the time, wanting to go places. I don't know why they can't just stay at home.\"> <PTABLE AGENT \"What's a nice girl like me doing in a place like this?\"> <PTABLE WRISTWATCH \"I knew a guy called Prosser who had one just like it.\"> <PTABLE NERD \"That unsavory little dink? Ask him what he knows about the optometrists.\"> <PTABLE CALIFORNIA \"Hey! Right! Cut-offs! Pink tofu, excuse me? Catching some rays! Steve Jobs! Right? Right! God's own country, you know? Right!\"> <PTABLE OPTOMETRISTS \"Oh, only 279 optometrists from Ohio who got routed to San Diego via Tibet, that's all. I know who I blame... that nerd, that's who.\"> <PTABLE QUEEN-MUM \"Who? You mean that sweet little old lady? What would I know about her?\">>"
  },
  "NERD-SCRIPT": {
   "name": "NERD-SCRIPT",
   "kind": "global",
   "file": "people.zil",
   "line": 1077,
   "value": "0"
  },
  "NERD-ARRIVALS": {
   "name": "NERD-ARRIVALS",
   "kind": "constant",
   "file": "people.zil",
   "line": 1078,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"The snivelling, ratty and ineffectual nerd stumbles into view again\" \"You hear a hatefully familiar whine close at hand\" \"The ghastly nerd reappears at your side, peering myopically through his filthy Coke-bottle spectacles\">"
  },
  "NERD-OBJECTS": {
   "name": "NERD-OBJECTS",
   "kind": "constant",
   "file": "people.zil",
   "line": 1090,
   "value": "<PLTABLE <PTABLE \"universal accessory\" \"This amazing accessory is complete with an incredibly intricate Japanese multifunction plug and fully-shielded coaxial cable regulated by miracle microchip technology, designed to plug into the back of anything and look complicated. It is to computers what the paperweight is to aerodynamics.\" <PLTABLE <VOC \"ACCESSORY\" ADJ> <VOC \"UNIVERSAL\" ADJ> <VOC \"AMAZING\" ADJ>> <PLTABLE <VOC \"ACCESSORY\" OBJECT> <VOC \"PLUG\" OBJECT> <VOC \"CABLE\" OBJECT>>> <PTABLE \"Boysenberry XiGT6HP Special\" \"The product of years of research by tiny dedicated craftsmen in expensive West Coast chambray workshirts, the XiGT6HP Special offers full digital pay-as-you-load \"top-end\" hyphenation combined with a unique beat-as-you-sweep action for perfectly browned vegetables and reliable color-fast, full-nine-pound boil-wash 'n' rinse cycles with \"No-Urk\" data security.\" <PLTABLE <VOC \"SPECIAL\" ADJ> <VOC \"XI\" ADJ> <VOC \"XIGT6HP\" ADJ> <VOC \"GT6\" ADJ> <VOC \"HP\" ADJ>> <PLTABLE <VOC \"XIGT6HP\" OBJECT> <VOC \"XI\" OBJECT> <VOC \"GT6\" OBJECT> <VOC \"HP\" OBJECT> <VOC \"SPECIAL\" OBJECT>>> <PTABLE \"set of rare hackers' log-file disks\" \"These disks contain hundreds of incredibly rare telephone numbers, passwords, user accounts and encryption routines for getting into other people's computers and fouling them up. They really hate it, but I don't mind telling you -- after all, you're one of us.\" <PLTABLE <VOC \"HACKERS'\" ADJ> <VOC \"HACKER'S\" ADJ> <VOC \"LOG\" ADJ> <VOC \"RARE\" ADJ> <VOC \"LOG-FILE\" ADJ> <VOC \"FILE\" ADJ>> <PLTABLE <VOC \"SET\" OBJECT> <VOC \"DISK\" OBJECT> <VOC \"DISKS\" OBJECT>>> <PTABLE \"dictionary-indexing protocol\" \"Say goodbye to ugly dictionary misery with this unique and classified, billion-dollar Department of Defense protocol for speedy compilation of dictionary indices. Indexes Chambers, Webster's, Oxford English and all other major dictionaries. No more \"Where's-that-word\" frustration! Just run the indexer and -- Hey presto! -- word's found!\" <PLTABLE <VOC \"DICTIONARY\" ADJ> <VOC \"INDEXING\" ADJ> <VOC \"PROTOCOL\" ADJ>> <PLTABLE <VOC \"PROTOCOL\" OBJECT> <VOC \"PROTOCOLS\" OBJECT> <VOC \"SET\" OBJECT>>> <PTABLE \"Little Computer Animals program\" \"You've heard of Little Computer People. Now you can have Little Computer Animals. Just load up the disk and -- Poof! -- every morning there's the hell of a mess all round your computer -- bits of straw, half-chewed food, bones, feathers and all the romance of the animal kingdom. Little Computer Animals will even shriek inexplicably in the middle of the night. Guaranteed to make your dull old computer not only lovable but even more time-consuming.\" <PLTABLE <VOC \"LITTLE\" ADJ> <VOC \"COMPUTER\" ADJ> <VOC \"ANIMALS\" ADJ>> <PLTABLE <VOC \"ANIMALS\" OBJECT> <VOC \"PROGRAM\" OBJECT>>> <PTABLE \"decision-support system for executives\" \"A vital tool for the career executive. A random decision-tree advises when to buy, sell, agree, stymie, sabotage, crawl, cover your back etc., totally without reference to reality. A must for the busy manager. Complete with appalling Harvard MBA-style meaningless jargon.\" <PLTABLE <VOC \"EXECUTIVE\" ADJ> <VOC \"DECISION\" ADJ> <VOC \"SUPPORT\" ADJ>> <PLTABLE <VOC \"SYSTEM\" OBJECT>>> <PTABLE \"real Star Trek phaser\" \"The first rule of defense is attack. With the Star Trek phaser you can defend yourself by vapourising people before they've even noticed you're there, let alone thought about attacking you. Works just like the real thing.\" <PLTABLE <VOC \"STAR\" ADJ> <VOC \"TREK\" ADJ>> <PLTABLE <VOC \"PHASER\" OBJECT> <VOC \"GUN\" OBJECT>>> <PTABLE \"digital tooth meter\" \"Intellectuals, nerds and geniuses can't be expected to keep track of everything. How often have you been walking down the street thinking about tensor calculus when Bang! over you go? Now miracle microtechnology has the answer. Just clip the tooth meter to your lip and it keeps a running total of your tooth-count in nonvolatile RAM. So next time you bite the sidewalk, Bing! the tooth meter will instantly give you a \"read-out\" of how many teeth you have lost. Also works for spectacle lenses.\" <PLTABLE <VOC \"DIGITAL\" ADJ> <VOC \"TOOTH\" ADJ> <VOC \"TEETH\" ADJ>> <PLTABLE <VOC \"METER\" OBJECT>>>>"
  },
  "PARSE-RANDOM-LOC-VEC": {
   "name": "PARSE-RANDOM-LOC-VEC",
   "kind": "constant",
   "file": "places.zil",
   "line": 47,
   "value": "<PTABLE PARSE-RANDOM-LOC 0>"
  },
  "P-NAMW": {
   "name": "P-NAMW",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 15,
   "value": "<TABLE 0 0>"
  },
  "P-ADJW": {
   "name": "P-ADJW",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 16,
   "value": "<TABLE 0 0>"
  },
  "P-OFW": {
   "name": "P-OFW",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 17,
   "value": "<TABLE 0 0>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 18,
   "value": "<ITABLE NONE 32>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 19,
   "value": "<ITABLE NONE 32>"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 23,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 25,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "YAWNS": {
   "name": "YAWNS",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 33,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"unusual\" \"interesting\" \"extraordinary\" \"special\">"
  },
  "MEAL": {
   "name": "MEAL",
   "kind": "constant",
   "file": "random-globals.zil",
   "line": 37,
   "value": "<ITABLE 27 0>"
  },
  "BOYSENBERRY-WINDOW": {
   "name": "BOYSENBERRY-WINDOW",
   "kind": "constant",
   "file": "things.zil",
   "line": 494,
   "value": "<PLTABLE 31 \"The word \"Boysenberry,\" and  \" \"the symbol of a partially    \" \"digested purple berry, are   \" \"trademarks of the Boysenberry\" \"Business Engines Corporation.\">"
  },
  "ADVENTURE-TABLE": {
   "name": "ADVENTURE-TABLE",
   "kind": "constant",
   "file": "things.zil",
   "line": 621,
   "value": "<PLTABLE \"BBE ADVENTURES PRESENT \"DORK I\"\" <> ;\"CAN'T BE EMPTY STRING BECAUSE ZILCH LOSES...\" \"West of House\" \"You are standing in an open field \" \"west of a white house, with a\" \"boarded front door.\" \"There is a mailbox here.\" \"INTERNAL ERROR 69105.....\">"
  },
  "ECLIPSE-TABLE": {
   "name": "ECLIPSE-TABLE",
   "kind": "constant",
   "file": "things.zil",
   "line": 631,
   "value": "<PLTABLE \"Boysenberry Eclipse Predictor V6.9\" <> \"Nearest eclipse:  Yesterday\" \"Totality at:  12:37PM\" \"Prime viewing location:  Zalagasa\" <> \"Next eclipse:  2/7/98\">"
  },
  "RECIPE-TABLE": {
   "name": "RECIPE-TABLE",
   "kind": "constant",
   "file": "things.zil",
   "line": 640,
   "value": "<PLTABLE \"Midnight Recipe Projekt\" <> \"RAGOUT \"REINE DE L'AFRIQUE\"\" <> \"Take one medium llama, peeled, 8\" \"pecks garlic, 15 bushels STALE celery,\" \"2 pounds shallots, 10 bushels carrots,\" \"onions, turnips, snails, worms, lard,\" \"helium, nematodes, gristle and earth\" \"to taste. Boil llama till bored, add\" \"other stuff and stir until congealed.\" \"Decorate with greenish milk curds.\" \"Serves one small aeroplane.\">"
  },
  "OTHER-PHONE-MSGS": {
   "name": "OTHER-PHONE-MSGS",
   "kind": "constant",
   "file": "things.zil",
   "line": 2341,
   "value": "<LTABLE <LTABLE 0 -1 GIRLFRIEND-MESSAGE \"I think you ought to know that I'm falling in love with your answering machine. It's the only thing that'll talk to me these days.\"> <LTABLE -1 OLD-GIRLFRIEND-MESSAGE 0> <LTABLE \"This is Fillmore Fiduciary. We haven't received your change-of-address form yet, so we can't send your bank statement. We thought you'd like to know that you're overdrawn.\" 0>>"
  },
  "CAB-EXCUSES": {
   "name": "CAB-EXCUSES",
   "kind": "constant",
   "file": "things.zil",
   "line": 2959,
   "value": "<PTABLE \"bankers are lousy tippers\" \"the diner is such a dive\" 0 \"that old lady keeps shooting at our drivers\" \"every time we give the llama a ride, we have to fumigate our taxi\" \"the resident of that house is absolutely mad\">"
  },
  "BOSS-CHECK-WORDS": {
   "name": "BOSS-CHECK-WORDS",
   "kind": "constant",
   "file": "things.zil",
   "line": 3804,
   "value": "<PTABLE ;\"Check in flat--shredded check\" <PTABLE <PLTABLE <VOC \"SHREDDED\" ADJ> <VOC \"CHOPPED\" ADJ> <VOC \"CUT-UP\" ADJ> <VOC \"MONEY\" ADJ>> <PLTABLE <VOC \"ORDER\" OBJECT>>> ;\"check in trough--check covered with llama slime\" <PTABLE <PLTABLE <VOC \"SLIMY\" ADJ> <VOC \"SOGGY\" ADJ> <VOC \"SLOBBERY\" ADJ> <VOC \"WET\" ADJ> <VOC \"COVERED\" ADJ> <VOC \"SLIME-COVERED\" ADJ> <VOC \"MONEY\" ADJ>> <PLTABLE <VOC \"ORDER\" OBJECT>>> ;\"check in porch--check covered with macaw dung\" <PTABLE <PLTABLE <VOC \"SHREDDED\" ADJ> <VOC \"TORN\" ADJ> <VOC \"RIPPED\" ADJ> <VOC \"MONEY\" ADJ>> <PLTABLE <VOC \"ORDER\" OBJECT>>> ;\"check in fort--soaked check\" <PTABLE <PLTABLE <VOC \"SOAKED\" ADJ> <VOC \"WET\" ADJ> <VOC \"SOGGY\" ADJ> <VOC \"MONEY\">> <PLTABLE <VOC \"ORDER\" OBJECT>>>>"
  },
  "CAB-NOTICE-TXT": {
   "name": "CAB-NOTICE-TXT",
   "kind": "constant",
   "file": "things.zil",
   "line": 4244,
   "value": "<PLTABLE 33 \"WARNING! Please leave personal \" \"items in this taxi (we need the\" \"extra revenue).                \" \"                               \" \"NOTICE: Passengers NOT going   \" \"to the airport will be charged \" \"an extra 50 cents.             \" \"                               \" \"           Getlost Airport Taxi\">"
  },
  "YES-INBUF": {
   "name": "YES-INBUF",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 210,
   "value": "<ITABLE BYTE 12>"
  },
  "YES-LEXV": {
   "name": "YES-LEXV",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 211,
   "value": "<ITABLE BYTE 10>"
  },
  "DIRTABLES": {
   "name": "DIRTABLES",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1064,
   "value": "<PTABLE <PLTABLE ;\"P?SW P?SE P?NW P?NE\" P?WEST P?SOUTH P?EAST P?NORTH> <PTABLE ;\"P?SEE-SW P?SEE-SE P?SEE-NW P?SEE-NE\" P?SEE-W P?SEE-S P?SEE-E P?SEE-N>>"
  },
  "WALKING-TABLE": {
   "name": "WALKING-TABLE",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 3124,
   "value": "<ITABLE 8 0>"
  },
  "MAILING-LIST": {
   "name": "MAILING-LIST",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 3454,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 MAGAZINE FLYER COUPON ENVELOPE>"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 3584,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"is not permitted in this story without prior written consent, in triplicate, from Infocom, Inc\" \"is a violation of the Cambridge Convention, which prohibits it in humourous games\" \"cannot be allowed until your bank acknowledges your change-of-address form\" \"may not be attempted by anyone using a computer\" \"is not permitted until you obtain your physician's approval, and submit Form 691/05/Z, in person, to the Office of Forms in Vladivostok\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 3597,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"That's impossible\" \"What a ridiculous concept\" \"You can't be serious\">"
  },
  "POINTLESS": {
   "name": "POINTLESS",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 3639,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"There's no point in doing that\" \"That would be pointless\" \"That's a pointless thing to do\">"
  },
  "PUZZLES": {
   "name": "PUZZLES",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 3671,
   "value": "<TABLE (LENGTH PATTERN (BYTE [REST WORD])) #BYTE 0 \"puzzled\" \"bewildered\" \"confused\" \"perplexed\">"
  },
  "SEAT-LIGHTS": {
   "name": "SEAT-LIGHTS",
   "kind": "constant",
   "file": "xjet.zil",
   "line": 505,
   "value": "<ITABLE (BYTE) </ <+ ,AISLE-COUNT 1> 2>>"
  },
  "BATHROOM-LOCKED": {
   "name": "BATHROOM-LOCKED",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 1559,
   "value": "<PLTABLE \"the sound of tuneful bassoon-playing\" \"the sound of frantic typing\" \"what could be a pygmy hog giving birth to an exceptionally\nlarge litter\" \"a champagne cork popping\">"
  },
  "FOOD-IN-POCKET": {
   "name": "FOOD-IN-POCKET",
   "kind": "constant",
   "file": "xjet.zil",
   "line": 2219,
   "value": "<PLTABLE \"As you gingerly pick up your bowl of hateful\nfood, the flight attendant appears. You read her mind. It says \"I can read\nyour mind, buster. Put that food down or else.\"|\n|\nYou put the food down again.\" \"As you grasp the edge of the bowl to execute this cunning\nplan, something in your food definitely twitches. You recoil in horror.\">"
  },
  "PERSON-ROWS": {
   "name": "PERSON-ROWS",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 123,
   "value": "<ITABLE ,PERSON-COUNT>"
  },
  "NORMAL-SEAT-TABLE": {
   "name": "NORMAL-SEAT-TABLE",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 1174,
   "value": "<PLTABLE AIRLINE-MEAL>"
  },
  "FACE-IN-FOOD-STRS": {
   "name": "FACE-IN-FOOD-STRS",
   "kind": "constant",
   "file": "xxjet.zil",
   "line": 2842,
   "value": "<PTABLE <> <> ;\" strange, crackling sound like a pile of twigs being\nstamped into a peat-bog\" ;\" nice auntie who has been carefully pecking at her nice\nfood and admiring the thing she has bought for her nephew which she doesn't\nknow what it is, when\" \" high-pitched, scraping sound like a large rat sliding\ndown a blackboard\" \" doting mother who has been looking forward to a nourishing\nmeal after a day's hard baby-care when utterly without warning\" <> <> ;\" nasty barking plop as if a large dog had been thrown into\na mud-hole\" ;\"n angry man who has been rendered suddenly even more angry\nwhen, while angrily consuming his irritating dinner\" \" repulsive squelching mumble, as if a chattering\norangutan had suddenly had its mouth crammed full of earthworms\" \" politician who has been (needless to say) talking\nwith his mouth full of airline food and\" \" slippery sort of \"phloop!\" followed by a muffled\ngrunt, as if the soap had slipped out of someone's hands and hit him in\nthe mouth\" \" Zalagasan businessman who has been making do with some\nterribly dull Western food (when what he would really have liked is a nice\nZalagasan delicacy like llama stew with pulped roots and all sorts of stuff)\nand all of a sudden\" ;\" wet, slithery sort of clonk, as if a small\nbowling-ball had been dropped onto a billiard-table smeared an inch thick\nwith stale peanut butter\" ;\" bald man who has lost a lot of heat through his head\nand has been restoring his calorific balance by consuming a nourishing\ndinner when (O horrid but true)\" <> <> ;\" wettish, muffled sound like an old llama exploding in a\nfog on a distant hillside\" ;\" fat man who has been innocently eating his fifth\ndinner of the day when all of a sudden\" <> <> ;\" sort of hissing, jangling \"sssplatch\" as if\na badly-made electrical device had fallen into a plate of cold porridge\nand fused\" ;\" Frobozzco executive who has interrupted his\ndiscussion on how to use underhanded and manipulative marketing tricks\nto foist his company's shoddy and unsafe products on the gullible public\nto eat a tasteless meal at an inappropriate time of day, when, almost as\nif it had been made by his own company,\" \" sort of damp, gurgling grunt as if a\npygmy hog had accidentally leapt into its trough on a dark, wet night\" \" man who has been woken up from a refreshing sleep\nover his book, asked if he would like something to eat, said \"No,\"\nbeen brought it anyway, decided he had better eat it so that they will\ntake it away so that he can go back to sleep, and innocently started to\neat it when, like a bolt from the blue,\">"
  },
  "NEIGHBOR-SEATS": {
   "name": "NEIGHBOR-SEATS",
   "kind": "constant",
   "file": "xxjetdefs.zil",
   "line": 19,
   "value": "<PTABLE (BYTE) ,SEAT-C ,SEAT-B ,SEAT-E ,SEAT-D>"
  },
  "SEAT-LETTERS": {
   "name": "SEAT-LETTERS",
   "kind": "constant",
   "file": "xxjetdefs.zil",
   "line": 25,
   "value": "<TABLE (BYTE) % <ASCII !\\B> % <ASCII !\\C> % <ASCII !\\D> % <ASCII !\\E>>"
  },
  "ALL-SEATS": {
   "name": "ALL-SEATS",
   "kind": "constant",
   "file": "xxjetdefs.zil",
   "line": 67,
   "value": "<ITABLE <* ,AISLE-COUNT 4> (BYTE)>"
  },
  "ALL-HANDLES": {
   "name": "ALL-HANDLES",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 368,
   "value": "<PTABLE LEFT-HANDLE MIDDLE-HANDLE RIGHT-HANDLE>"
  },
  "HANDLE-STATE": {
   "name": "HANDLE-STATE",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 372,
   "value": "<TABLE (BYTE) 0 1 0>"
  },
  "A-DIR": {
   "name": "A-DIR",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 554,
   "value": "<DIR-ENTRY PROG-SECOND \"PRINTB\" <> IMPURE>"
  },
  "B-DIR": {
   "name": "B-DIR",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 555,
   "value": "<DIR-ENTRY PROG-FOURTH \"PRINTC\" <> IMPURE>"
  },
  "C-DIR": {
   "name": "C-DIR",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 556,
   "value": "<DIR-ENTRY PROG-FIRST \"PRINTD\" <> IMPURE>"
  },
  "D-DIR": {
   "name": "D-DIR",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 557,
   "value": "<DIR-ENTRY PROG-THIRD \"PRINTE\" <> IMPURE>"
  },
  "PRINTR-TABLE": {
   "name": "PRINTR-TABLE",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 559,
   "value": "<PTABLE A-DIR B-DIR C-DIR D-DIR>"
  },
  "RPRINTR-TABLE": {
   "name": "RPRINTR-TABLE",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 560,
   "value": "<PTABLE PROG-FIRST PROG-SECOND PROG-THIRD PROG-FOURTH>"
  },
  "RANDOM-CARTRIDGE-TABLE": {
   "name": "RANDOM-CARTRIDGE-TABLE",
   "kind": "constant",
   "file": "zalagasa.zil",
   "line": 562,
   "value": "<PLTABLE HELP-DIR QUIT-DIR DIR-DIR CLEAR-DIR HACK-DIR A-DIR B-DIR C-DIR D-DIR>"
  }
 },
 "syntax": {
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
     "line": 9
    }
   ]
  },
  "NE": {
   "verb": "NE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "NE",
     "objects": 0,
     "particles": [],
     "action": "V-BAD-DIRECTION",
     "preaction": null,
     "file": "syntax.zil",
     "line": 69
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
     "line": 72
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
  "SUPER": {
   "verb": "SUPER",
   "synonyms": [
    "SUPERBRIEF"
   ],
   "productions": [
    {
     "pattern": "SUPER",
     "objects": 0,
     "particles": [],
     "action": "V-SUPER-BRIEF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 76
    }
   ]
  },
  "I": {
   "verb": "I",
   "synonyms": [
    "INVENTORY"
   ],
   "productions": [
    {
     "pattern": "I",
     "objects": 0,
     "particles": [],
     "action": "V-INVENTORY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 79
    }
   ]
  },
  "QUIT": {
   "verb": "QUIT",
   "synonyms": [
    "Q"
   ],
   "productions": [
    {
     "pattern": "QUIT",
     "objects": 0,
     "particles": [],
     "action": "V-QUIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 82
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
     "line": 85
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
     "line": 87
    },
    {
     "pattern": "SAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 88
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
     "line": 89
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
     "line": 91
    }
   ]
  },
  "TIME": {
   "verb": "TIME",
   "synonyms": [
    "T"
   ],
   "productions": [
    {
     "pattern": "TIME",
     "objects": 0,
     "particles": [],
     "action": "V-TIME",
     "preaction": null,
     "file": "syntax.zil",
     "line": 93
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
     "line": 96
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
     "line": 97
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
     "line": 99
    }
   ]
  },
  "$VERIFY": {
   "verb": "$VERIFY",
   "synonyms": [
    "$VER"
   ],
   "productions": [
    {
     "pattern": "$VERIFY",
     "objects": 0,
     "particles": [],
     "action": "V-$VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 101
    },
    {
     "pattern": "$VERIFY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 102
    }
   ]
  },
  "NOTIFY": {
   "verb": "NOTIFY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "NOTIFY",
     "objects": 0,
     "particles": [],
     "action": "V-NOTIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 105
    }
   ]
  },
  "$ID": {
   "verb": "$ID",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$ID",
     "objects": 0,
     "particles": [],
     "action": "V-$ID",
     "preaction": null,
     "file": "syntax.zil",
     "line": 107
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
     "line": 109
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
     "line": 110
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
     "line": 111
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
     "line": 112
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
     "line": 114
    }
   ]
  },
  "ANSWER": {
   "verb": "ANSWER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ANSWER OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 116
    }
   ]
  },
  "REPLY": {
   "verb": "REPLY",
   "synonyms": [
    "RESPOND"
   ],
   "productions": [
    {
     "pattern": "REPLY TO OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 118
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
     "action": "V-QUESTION",
     "preaction": null,
     "file": "syntax.zil",
     "line": 123
    },
    {
     "pattern": "ASK ABOUT OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-STUPID-ASK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 124
    },
    {
     "pattern": "ASK FOR OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-REQUEST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 125
    },
    {
     "pattern": "ASK OBJECT (FIND PERSON) ABOUT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 126
    },
    {
     "pattern": "ASK OBJECT (FIND PERSON) FOR OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 128
    }
   ]
  },
  "ORDER": {
   "verb": "ORDER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ORDER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-REQUEST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 129
    }
   ]
  },
  "REQUEST": {
   "verb": "REQUEST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REQUEST OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REQUEST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 131
    },
    {
     "pattern": "REQUEST OBJECT (FIND PERSON) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-REQUEST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 132
    }
   ]
  },
  "GRANT": {
   "verb": "GRANT",
   "synonyms": [
    "GRANTED"
   ],
   "productions": [
    {
     "pattern": "GRANT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-GRANT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 134
    }
   ]
  },
  "DENY": {
   "verb": "DENY",
   "synonyms": [
    "DENIED"
   ],
   "productions": [
    {
     "pattern": "DENY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DENY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 135
    }
   ]
  },
  "TRADE": {
   "verb": "TRADE",
   "synonyms": [
    "EXCHANGE"
   ],
   "productions": [
    {
     "pattern": "TRADE OBJECT (HELD CARRIED HAVE) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-TRADE-FOR",
     "preaction": "PRE-TRADE-FOR",
     "file": "syntax.zil",
     "line": 139
    },
    {
     "pattern": "TRADE FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-REQUEST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 141
    }
   ]
  },
  "QUESTION": {
   "verb": "QUESTION",
   "synonyms": [
    "QUIZ",
    "INTERROGATE",
    "QUERY"
   ],
   "productions": [
    {
     "pattern": "QUESTION OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-QUESTION",
     "preaction": null,
     "file": "syntax.zil",
     "line": 144
    },
    {
     "pattern": "QUESTION OBJECT (FIND PERSON) ABOUT OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 145
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [
    "ASSAULT",
    "FIGHT",
    "HURT",
    "INJURE"
   ],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND LIVING) (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 148
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
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 152
    },
    {
     "pattern": "BACK AWAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 153
    }
   ]
  },
  "CIRCLE": {
   "verb": "CIRCLE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CIRCLE OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 155
    }
   ]
  },
  "RETREAT": {
   "verb": "RETREAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RETREAT",
     "objects": 0,
     "particles": [],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 157
    },
    {
     "pattern": "RETREAT FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 158
    },
    {
     "pattern": "RETREAT AWAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 159
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
     "line": 161
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
     "action": "V-BLOW-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 163
    },
    {
     "pattern": "BLOW IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BLOW-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 164
    },
    {
     "pattern": "BLOW ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-BLOW-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 165
    },
    {
     "pattern": "BLOW THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-BLOW-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 166
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
     "line": 167
    }
   ]
  },
  "BUY": {
   "verb": "BUY",
   "synonyms": [
    "WITHDRAW"
   ],
   "productions": [
    {
     "pattern": "BUY OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-BUY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 177
    },
    {
     "pattern": "BUY OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BUY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 178
    },
    {
     "pattern": "BUY OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-BUY-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 179
    }
   ]
  },
  "CLEAN": {
   "verb": "CLEAN",
   "synonyms": [
    "SWEEP",
    "WIPE",
    "DRY",
    "BRUSH",
    "POLISH",
    "WASH"
   ],
   "productions": [
    {
     "pattern": "CLEAN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CLEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 182
    },
    {
     "pattern": "CLEAN OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-CLEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 183
    },
    {
     "pattern": "CLEAN OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-CLEAN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 184
    },
    {
     "pattern": "CLEAN OBJECT (HELD CARRIED HAVE) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-CLEAN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 185
    },
    {
     "pattern": "CLEAN OFF OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "OFF",
      "ON"
     ],
     "action": "V-CLEAN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 186
    },
    {
     "pattern": "CLEAN OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-CLEAN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 187
    },
    {
     "pattern": "CLEAN OFF OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OFF",
      "OVER"
     ],
     "action": "V-CLEAN-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 188
    },
    {
     "pattern": "CLEAN OBJECT WITH OBJECT (FIND TOOL) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CLEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 189
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 192
    },
    {
     "pattern": "CLIMB ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 193
    },
    {
     "pattern": "CLIMB UP OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 194
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 195
    },
    {
     "pattern": "CLIMB OVER OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CLIMB-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 196
    },
    {
     "pattern": "CLIMB UNDER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 197
    },
    {
     "pattern": "CLIMB IN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 198
    },
    {
     "pattern": "CLIMB THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 199
    },
    {
     "pattern": "CLIMB OUT OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 200
    }
   ]
  },
  "SCALE": {
   "verb": "SCALE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SCALE OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 202
    },
    {
     "pattern": "SCALE UP OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 203
    },
    {
     "pattern": "SCALE DOWN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 204
    },
    {
     "pattern": "SCALE OVER OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CLIMB-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 205
    }
   ]
  },
  "ASCEND": {
   "verb": "ASCEND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ASCEND OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 207
    }
   ]
  },
  "DESCEND": {
   "verb": "DESCEND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DESCEND OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 209
    }
   ]
  },
  "CLOSE": {
   "verb": "CLOSE",
   "synonyms": [
    "SHUT",
    "SLAM"
   ],
   "productions": [
    {
     "pattern": "CLOSE OBJECT (FIND OPENABLE) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 211
    },
    {
     "pattern": "CLOSE OFF OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 213
    },
    {
     "pattern": "CLOSE UP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-SHUT-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 214
    }
   ]
  },
  "COUNT": {
   "verb": "COUNT",
   "synonyms": [
    "TALLY"
   ],
   "productions": [
    {
     "pattern": "COUNT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-COUNT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 217
    }
   ]
  },
  "CROSS": {
   "verb": "CROSS",
   "synonyms": [
    "TRAVERSE"
   ],
   "productions": [
    {
     "pattern": "CROSS OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CROSS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 220
    },
    {
     "pattern": "CROSS OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CROSS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 221
    }
   ]
  },
  "CUT": {
   "verb": "CUT",
   "synonyms": [
    "SAW",
    "CHOP",
    "SLASH",
    "SLICE",
    "GASH",
    "LACERATE",
    "CLEAVE",
    "SEVER",
    "SPLIT"
   ],
   "productions": [
    {
     "pattern": "CUT OBJECT WITH OBJECT (FIND SHARPENED) (CARRIED HELD HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 224
    },
    {
     "pattern": "CUT UP OBJECT WITH OBJECT (FIND SHARPENED) (CARRIED HELD HAVE TAKE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 226
    },
    {
     "pattern": "CUT THROUGH OBJECT WITH OBJECT (FIND SHARPENED) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "THROUGH",
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 228
    },
    {
     "pattern": "CUT DOWN OBJECT WITH OBJECT (FIND SHARPENED) (CARRIED HELD HAVE TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 230
    }
   ]
  },
  "RIP": {
   "verb": "RIP",
   "synonyms": [
    "TEAR"
   ],
   "productions": [
    {
     "pattern": "RIP OBJECT WITH OBJECT (FIND MANUALLY) (CARRIED HELD HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RIP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 234
    },
    {
     "pattern": "RIP UP OBJECT WITH OBJECT (FIND MANUALLY) (CARRIED HELD HAVE TAKE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-RIP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 236
    },
    {
     "pattern": "RIP THROUGH OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "THROUGH",
      "WITH"
     ],
     "action": "V-RIP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 238
    },
    {
     "pattern": "RIP DOWN OBJECT WITH OBJECT (FIND MANUALLY) (CARRIED HELD HAVE TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-RIP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 240
    },
    {
     "pattern": "RIP OFF OBJECT (FIND TAKEABLE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 242
    }
   ]
  },
  "FELL": {
   "verb": "FELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FELL OBJECT WITH OBJECT (FIND SHARPENED) (CARRIED HELD HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-CUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 245
    }
   ]
  },
  "BREAK": {
   "verb": "BREAK",
   "synonyms": [
    "DESTROY",
    "DAMAGE",
    "SMASH",
    "DEMOLISH",
    "WRECK",
    "CRACK",
    "TRASH",
    "CRUMBLE"
   ],
   "productions": [
    {
     "pattern": "BREAK OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (FIND MANUALLY) (HAVE HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 248
    },
    {
     "pattern": "BREAK OBJECT (ON-GROUND IN-ROOM) OFF OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 250
    },
    {
     "pattern": "BREAK DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HAVE HELD CARRIED)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 252
    },
    {
     "pattern": "BREAK IN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HAVE HELD CARRIED)",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 254
    },
    {
     "pattern": "BREAK THROUGH OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HAVE HELD CARRIED)",
     "objects": 2,
     "particles": [
      "THROUGH",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 256
    }
   ]
  },
  "DIG": {
   "verb": "DIG",
   "synonyms": [
    "EXCAVATE"
   ],
   "productions": [
    {
     "pattern": "DIG IN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 260
    },
    {
     "pattern": "DIG AT OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 262
    },
    {
     "pattern": "DIG UP OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 264
    },
    {
     "pattern": "DIG WITH OBJECT (HELD CARRIED HAVE) IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH",
      "IN"
     ],
     "action": "V-SDIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 266
    },
    {
     "pattern": "DIG THROUGH OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "THROUGH",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 268
    },
    {
     "pattern": "DIG OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 270
    },
    {
     "pattern": "DIG IN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 272
    }
   ]
  },
  "DRINK": {
   "verb": "DRINK",
   "synonyms": [
    "SIP",
    "GUZZLE",
    "IMBIBE",
    "QUAFF",
    "SWILL"
   ],
   "productions": [
    {
     "pattern": "DRINK OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DRINK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 276
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
     "line": 277
    }
   ]
  },
  "DROP": {
   "verb": "DROP",
   "synonyms": [
    "DUMP",
    "DEPOSIT"
   ],
   "productions": [
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 280
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
     "line": 281
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
     "line": 282
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 283
    }
   ]
  },
  "HANG": {
   "verb": "HANG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HANG OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 286
    },
    {
     "pattern": "HANG UP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-HANGUP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 384
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [
    "CONSUME",
    "SWALLOW",
    "DEVOUR",
    "GOBBLE",
    "NIBBLE",
    "INGEST"
   ],
   "productions": [
    {
     "pattern": "EAT OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 288
    }
   ]
  },
  "ENTER": {
   "verb": "ENTER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ENTER OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 291
    }
   ]
  },
  "EXIT": {
   "verb": "EXIT",
   "synonyms": [
    "DEPART",
    "SCRAM"
   ],
   "productions": [
    {
     "pattern": "EXIT OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 293
    },
    {
     "pattern": "EXIT THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 294
    }
   ]
  },
  "LEAVE": {
   "verb": "LEAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LEAVE THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 295
    },
    {
     "pattern": "LEAVE OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 502
    },
    {
     "pattern": "LEAVE OBJECT (HELD CARRIED ;HAVE MANY) IN OBJECT (ON-GROUND IN-ROOM CARRIED ;MANY)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 503
    },
    {
     "pattern": "LEAVE OBJECT (HELD CARRIED ;HAVE MANY) ON OBJECT (ON-GROUND IN-ROOM CARRIED ;MANY)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 505
    }
   ]
  },
  "EXAMINE": {
   "verb": "EXAMINE",
   "synonyms": [
    "X",
    "INSPECT",
    "DESCRIBE",
    "STUDY",
    "SURVEY",
    "SEE",
    "TRACE"
   ],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 298
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
     "line": 300
    },
    {
     "pattern": "EXAMINE ON OBJECT (HELD CARRIED IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 302
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
     "line": 304
    },
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED ON-GROUND IN-ROOM) THROUGH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 305
    },
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 308
    }
   ]
  },
  "WATCH": {
   "verb": "WATCH",
   "synonyms": [
    "OBSERVE"
   ],
   "productions": [
    {
     "pattern": "WATCH OBJECT (FIND LOCATION) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-WATCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 313
    },
    {
     "pattern": "WATCH OBJECT (HELD CARRIED ON-GROUND IN-ROOM) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 315
    },
    {
     "pattern": "WATCH OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 317
    }
   ]
  },
  "EXTINGUISH": {
   "verb": "EXTINGUISH",
   "synonyms": [
    "DOUSE",
    "QUENCH",
    "SNUFF"
   ],
   "productions": [
    {
     "pattern": "EXTINGUISH OBJECT (FIND LIGHTBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 321
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTAINER) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 326
    },
    {
     "pattern": "FILL OBJECT (FIND CONTAINER) (HELD CARRIED ON-GROUND IN-ROOM) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 328
    },
    {
     "pattern": "FILL IN OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-FILL-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 331
    },
    {
     "pattern": "FILL OUT OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-FILL-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 332
    }
   ]
  },
  "COMPLETE": {
   "verb": "COMPLETE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COMPLETE OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 334
    }
   ]
  },
  "WRITE": {
   "verb": "WRITE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WRITE ON OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-FILL-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 336
    },
    {
     "pattern": "WRITE OVER OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-FILL-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 337
    }
   ]
  },
  "ERASE": {
   "verb": "ERASE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ERASE OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-ERASE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 339
    }
   ]
  },
  "RUB": {
   "verb": "RUB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RUB OUT OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-ERASE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 341
    },
    {
     "pattern": "RUB OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TOUCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 343
    },
    {
     "pattern": "RUB TOGETHER OBJECT",
     "objects": 1,
     "particles": [
      "TOGETHER"
     ],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 344
    },
    {
     "pattern": "RUB OBJECT WITH OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-STOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 345
    },
    {
     "pattern": "RUB OBJECT (HELD CARRIED HAVE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 346
    },
    {
     "pattern": "RUB OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 347
    },
    {
     "pattern": "RUB OBJECT (HELD CARRIED HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 348
    }
   ]
  },
  "FIND": {
   "verb": "FIND",
   "synonyms": [
    "SEEK",
    "DISCOVER"
   ],
   "productions": [
    {
     "pattern": "FIND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 350
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
     "line": 353
    },
    {
     "pattern": "FLY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 354
    },
    {
     "pattern": "FLY ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 355
    },
    {
     "pattern": "FLY WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 356
    },
    {
     "pattern": "FLY OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-FLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 357
    }
   ]
  },
  "FOLD": {
   "verb": "FOLD",
   "synonyms": [
    "WRAP",
    "ROLL"
   ],
   "productions": [
    {
     "pattern": "FOLD OBJECT (CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-FOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 359
    },
    {
     "pattern": "FOLD UP OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-FOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 360
    },
    {
     "pattern": "FOLD OBJECT (HELD CARRIED HAVE) AROUND OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AROUND"
     ],
     "action": "V-WRAP-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 361
    },
    {
     "pattern": "FOLD OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-SWRAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 363
    },
    {
     "pattern": "FOLD UP OBJECT (ON-GROUND IN-ROOM) IN OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "IN"
     ],
     "action": "V-SWRAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 364
    },
    {
     "pattern": "FOLD OUT OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-UNFOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 376
    }
   ]
  },
  "RETRACT": {
   "verb": "RETRACT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RETRACT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 368
    }
   ]
  },
  "REFUSE": {
   "verb": "REFUSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REFUSE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REFUSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 370
    }
   ]
  },
  "FLATTEN": {
   "verb": "FLATTEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FLATTEN OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-FOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 372
    },
    {
     "pattern": "FLATTEN OUT OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-FOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 373
    }
   ]
  },
  "UNFOLD": {
   "verb": "UNFOLD",
   "synonyms": [
    "UNFLATTEN",
    "EXTEND",
    "UNROLL"
   ],
   "productions": [
    {
     "pattern": "UNFOLD OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-UNFOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 375
    }
   ]
  },
  "UNTANGLE": {
   "verb": "UNTANGLE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNTANGLE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-UNTANGLE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 379
    }
   ]
  },
  "FOLLOW": {
   "verb": "FOLLOW",
   "synonyms": [
    "PURSUE",
    "CHASE"
   ],
   "productions": [
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 381
    }
   ]
  },
  "HAND": {
   "verb": "HAND",
   "synonyms": [
    "GIVE",
    "DONATE",
    "DELIVER",
    "OFFER",
    "BESTOW",
    "PRESENT"
   ],
   "productions": [
    {
     "pattern": "HAND OBJECT (HELD CARRIED HAVE TAKE) TO OBJECT (FIND LIVING) (IN-ROOM ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 386
    },
    {
     "pattern": "HAND OBJECT (FIND LIVING) (ON-GROUND IN-ROOM) OBJECT (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 388
    }
   ]
  },
  "SELL": {
   "verb": "SELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SELL OBJECT (HELD CARRIED HAVE) TO OBJECT (FIND LIVING) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 392
    },
    {
     "pattern": "SELL OBJECT (FIND LIVING) (ON-GROUND IN-ROOM) OBJECT (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [],
     "action": "V-SSELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 394
    }
   ]
  },
  "SHOW": {
   "verb": "SHOW",
   "synonyms": [
    "DISPLAY"
   ],
   "productions": [
    {
     "pattern": "SHOW OBJECT (HELD CARRIED HAVE TAKE) TO OBJECT (FIND LIVING) (IN-ROOM ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SHOW",
     "preaction": "PRE-SHOW",
     "file": "syntax.zil",
     "line": 397
    },
    {
     "pattern": "SHOW OBJECT (FIND LIVING) OBJECT (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [],
     "action": "V-SSHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 399
    }
   ]
  },
  "FEED": {
   "verb": "FEED",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FEED OBJECT (FIND LIVING) (ON-GROUND IN-ROOM) WITH OBJECT (FIND FOODBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SFEED",
     "preaction": null,
     "file": "syntax.zil",
     "line": 403
    },
    {
     "pattern": "FEED OBJECT (FIND FOODBIT) (HELD CARRIED HAVE) TO OBJECT (FIND LIVING) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-FEED",
     "preaction": "PRE-FEED",
     "file": "syntax.zil",
     "line": 405
    },
    {
     "pattern": "FEED OBJECT (FIND LIVING) (ON-GROUND IN-ROOM) OBJECT (FIND FOODBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SFEED",
     "preaction": null,
     "file": "syntax.zil",
     "line": 407
    }
   ]
  },
  "HEAR": {
   "verb": "HEAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HEAR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 410
    }
   ]
  },
  "HELLO": {
   "verb": "HELLO",
   "synonyms": [
    "HI",
    "GREETINGS",
    "GREET",
    "SALUTE"
   ],
   "productions": [
    {
     "pattern": "HELLO OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 412
    }
   ]
  },
  "BYE": {
   "verb": "BYE",
   "synonyms": [
    "GOODBYE",
    "FAREWELL"
   ],
   "productions": [
    {
     "pattern": "BYE OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-GOODBYE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 415
    }
   ]
  },
  "HINT": {
   "verb": "HINT",
   "synonyms": [
    "HINTS"
   ],
   "productions": [
    {
     "pattern": "HINT",
     "objects": 0,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 418
    }
   ]
  },
  "HELP": {
   "verb": "HELP",
   "synonyms": [
    "AID",
    "RESCUE",
    "PRESERVE"
   ],
   "productions": [
    {
     "pattern": "HELP",
     "objects": 0,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 421
    },
    {
     "pattern": "HELP OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 422
    }
   ]
  },
  "CONCEAL": {
   "verb": "CONCEAL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CONCEAL OBJECT (HELD CARRIED HAVE) IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 425
    },
    {
     "pattern": "CONCEAL OBJECT (HELD CARRIED HAVE) BEHIND OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "BEHIND"
     ],
     "action": "V-PUT-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 427
    },
    {
     "pattern": "CONCEAL OBJECT (HELD CARRIED HAVE) UNDER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 429
    }
   ]
  },
  "HIDE": {
   "verb": "HIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HIDE OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-HIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 432
    },
    {
     "pattern": "HIDE UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-STAND-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 434
    },
    {
     "pattern": "HIDE IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 435
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
     "line": 436
    },
    {
     "pattern": "HIDE OBJECT (HELD CARRIED HAVE) BEHIND OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "BEHIND"
     ],
     "action": "V-PUT-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 437
    },
    {
     "pattern": "HIDE OBJECT (HELD CARRIED HAVE) UNDER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 439
    }
   ]
  },
  "COVER": {
   "verb": "COVER",
   "synonyms": [
    "BLOCK",
    "SHIELD"
   ],
   "productions": [
    {
     "pattern": "COVER OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-COVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 442
    },
    {
     "pattern": "COVER UP OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-COVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 444
    },
    {
     "pattern": "COVER OVER OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "OVER",
      "WITH"
     ],
     "action": "V-COVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 446
    }
   ]
  },
  "INFLATE": {
   "verb": "INFLATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "INFLATE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-BLOW-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 450
    }
   ]
  },
  "JUMP": {
   "verb": "JUMP",
   "synonyms": [
    "LEAP",
    "BOUND",
    "HURDLE",
    "VAULT"
   ],
   "productions": [
    {
     "pattern": "JUMP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 452
    },
    {
     "pattern": "JUMP UP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 453
    },
    {
     "pattern": "JUMP DOWN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 454
    },
    {
     "pattern": "JUMP ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-STAND-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 455
    },
    {
     "pattern": "JUMP OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CLIMB-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 456
    },
    {
     "pattern": "JUMP IN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 457
    },
    {
     "pattern": "JUMP TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 458
    },
    {
     "pattern": "JUMP THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 459
    },
    {
     "pattern": "JUMP OUT OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 460
    },
    {
     "pattern": "JUMP FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 461
    },
    {
     "pattern": "JUMP OFF OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 462
    }
   ]
  },
  "BOUNCE": {
   "verb": "BOUNCE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BOUNCE OBJECT (FIND LOCATION) (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-BOUNCE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 465
    },
    {
     "pattern": "BOUNCE AROUND OBJECT (FIND LOCATION) (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-BOUNCE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 466
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
     "line": 469
    },
    {
     "pattern": "KICK AROUND OBJECT",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-KICK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 470
    },
    {
     "pattern": "KICK IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 472
    },
    {
     "pattern": "KICK DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 473
    }
   ]
  },
  "STAMP": {
   "verb": "STAMP",
   "synonyms": [
    "TRAMPLE"
   ],
   "productions": [
    {
     "pattern": "STAMP ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 475
    },
    {
     "pattern": "STAMP DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 476
    },
    {
     "pattern": "STAMP OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 477
    }
   ]
  },
  "KILL": {
   "verb": "KILL",
   "synonyms": [
    "MURDER",
    "SLAY",
    "STAB",
    "PUNCH",
    "WOUND"
   ],
   "productions": [
    {
     "pattern": "KILL OBJECT (FIND LIVING)",
     "objects": 1,
     "particles": [],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 480
    },
    {
     "pattern": "KILL OBJECT (FIND LIVING) (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 481
    }
   ]
  },
  "HIT": {
   "verb": "HIT",
   "synonyms": [
    "SLAP",
    "WHACK",
    "STRIKE",
    "SWAT"
   ],
   "productions": [
    {
     "pattern": "HIT OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-HIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 485
    },
    {
     "pattern": "HIT AT OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-HIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 487
    }
   ]
  },
  "KISS": {
   "verb": "KISS",
   "synonyms": [
    "SMOOCH"
   ],
   "productions": [
    {
     "pattern": "KISS OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KISS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 491
    }
   ]
  },
  "KNOCK": {
   "verb": "KNOCK",
   "synonyms": [
    "RAP",
    "POUND"
   ],
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
     "line": 494
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
     "line": 495
    },
    {
     "pattern": "KNOCK DOWN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-HIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 496
    },
    {
     "pattern": "KNOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-HIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 498
    }
   ]
  },
  "LIE": {
   "verb": "LIE",
   "synonyms": [
    "RECLINE"
   ],
   "productions": [
    {
     "pattern": "LIE DOWN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 508
    },
    {
     "pattern": "LIE ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 509
    },
    {
     "pattern": "LIE IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 510
    },
    {
     "pattern": "LIE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 511
    }
   ]
  },
  "LISTEN": {
   "verb": "LISTEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LISTEN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 514
    },
    {
     "pattern": "LISTEN TO OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 515
    },
    {
     "pattern": "LISTEN IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 517
    },
    {
     "pattern": "LISTEN FOR OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 519
    }
   ]
  },
  "LOCK": {
   "verb": "LOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 522
    }
   ]
  },
  "LOOK": {
   "verb": "LOOK",
   "synonyms": [
    "L",
    "STARE",
    "GAZE",
    "PEER",
    "PEEK"
   ],
   "productions": [
    {
     "pattern": "LOOK",
     "objects": 0,
     "particles": [],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 525
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 526
    },
    {
     "pattern": "LOOK AROUND OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 528
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 529
    },
    {
     "pattern": "LOOK OVER OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 530
    },
    {
     "pattern": "LOOK UP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 532
    },
    {
     "pattern": "LOOK OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DUMB-EXAMINE",
     "preaction": "PRE-DUMB-EXAMINE",
     "file": "syntax.zil",
     "line": 533
    },
    {
     "pattern": "LOOK THROUGH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 535
    },
    {
     "pattern": "LOOK THROUGH OBJECT AT OBJECT",
     "objects": 2,
     "particles": [
      "THROUGH",
      "AT"
     ],
     "action": "V-SLOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 537
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
     "line": 538
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
     "line": 539
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
     "line": 540
    },
    {
     "pattern": "LOOK ON OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 541
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "THROUGH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 543
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 545
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "IN",
      "THROUGH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 547
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 549
    },
    {
     "pattern": "LOOK OUT OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LOOK-OUTSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 551
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
     "line": 552
    },
    {
     "pattern": "LOOK TO OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 553
    }
   ]
  },
  "ADJUST": {
   "verb": "ADJUST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ADJUST OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-ADJUST",
     "preaction": null,
     "file": "syntax.zil",
     "line": 557
    }
   ]
  },
  "LOOSEN": {
   "verb": "LOOSEN",
   "synonyms": [
    "JIGGLE",
    "WIGGLE",
    "WOBBLE",
    "HOOK"
   ],
   "productions": [
    {
     "pattern": "LOOSEN OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 559
    }
   ]
  },
  "PRY": {
   "verb": "PRY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PRY OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 563
    },
    {
     "pattern": "PRY UP OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 565
    },
    {
     "pattern": "PRY OUT OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "OUT",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 567
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
     "line": 570
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
     "line": 572
    },
    {
     "pattern": "MAKE UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 573
    }
   ]
  },
  "MOVE": {
   "verb": "MOVE",
   "synonyms": [
    "SHIFT",
    "DISLOCATE"
   ],
   "productions": [
    {
     "pattern": "MOVE OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 575
    },
    {
     "pattern": "MOVE OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 576
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 577
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 578
    }
   ]
  },
  "LEAN": {
   "verb": "LEAN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LEAN ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 581
    },
    {
     "pattern": "LEAN OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 582
    },
    {
     "pattern": "LEAN OBJECT (HELD CARRIED HAVE) UP OBJECT",
     "objects": 2,
     "particles": [
      "UP"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 583
    },
    {
     "pattern": "LEAN OBJECT (HELD CARRIED HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 584
    }
   ]
  },
  "PROP": {
   "verb": "PROP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PROP UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PULL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 586
    },
    {
     "pattern": "PROP UP (HELD CARRIED HAVE) OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 587
    },
    {
     "pattern": "PROP OBJECT (HELD CARRIED HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 588
    },
    {
     "pattern": "PROP UP OBJECT (HELD CARRIED HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "AGAINST"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 589
    }
   ]
  },
  "OPEN": {
   "verb": "OPEN",
   "synonyms": [
    "UNSEAL",
    "DISASSEMBLE"
   ],
   "productions": [
    {
     "pattern": "OPEN OBJECT (FIND OPENABLE) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 592
    },
    {
     "pattern": "OPEN UP OBJECT (FIND OPENABLE) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 594
    },
    {
     "pattern": "OPEN OBJECT (FIND OPENABLE) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 596
    },
    {
     "pattern": "OPEN UP OBJECT (FIND OPENABLE) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-OPEN-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 599
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
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 604
    }
   ]
  },
  "PULL": {
   "verb": "PULL",
   "synonyms": [
    "TUG",
    "DRAG",
    "YANK"
   ],
   "productions": [
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-PULL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 606
    },
    {
     "pattern": "PULL ON OBJECT (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PULL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 607
    },
    {
     "pattern": "PULL ON OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "ON",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 608
    },
    {
     "pattern": "PULL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 610
    },
    {
     "pattern": "PULL UP OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 611
    },
    {
     "pattern": "PULL DOWN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 613
    },
    {
     "pattern": "PULL DOWN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 614
    },
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 616
    },
    {
     "pattern": "PULL OBJECT (FIND TAKEABLE) OUT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 618
    },
    {
     "pattern": "PULL OBJECT (FIND TAKEABLE) OFF OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 620
    },
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 622
    },
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 623
    },
    {
     "pattern": "PULL APART OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "APART"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 624
    },
    {
     "pattern": "PULL OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-UNPLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 625
    }
   ]
  },
  "PAY": {
   "verb": "PAY",
   "synonyms": [
    "BRIBE",
    "ENTICE",
    "RENUMERATE"
   ],
   "productions": [
    {
     "pattern": "PAY OBJECT (FIND PERSON) WITH OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 628
    },
    {
     "pattern": "PAY OBJECT (FIND PERSON) OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [],
     "action": "V-PAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 629
    },
    {
     "pattern": "PAY OBJECT (HELD CARRIED) TO OBJECT (FIND PERSON)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SPAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 630
    }
   ]
  },
  "CASH": {
   "verb": "CASH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CASH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CASH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 633
    }
   ]
  },
  "PICK": {
   "verb": "PICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PICK OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PICK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 635
    },
    {
     "pattern": "PICK UP OBJECT (FIND TAKEABLE) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 636
    }
   ]
  },
  "PLAY": {
   "verb": "PLAY",
   "synonyms": [
    "FIDDLE",
    "TOY",
    "CAVORT"
   ],
   "productions": [
    {
     "pattern": "PLAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-PLAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 638
    },
    {
     "pattern": "PLAY WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-PLAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 639
    }
   ]
  },
  "POINT": {
   "verb": "POINT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POINT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 642
    },
    {
     "pattern": "POINT AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 643
    },
    {
     "pattern": "POINT AT OBJECT FOR OBJECT (FIND LIVING)",
     "objects": 2,
     "particles": [
      "AT",
      "FOR"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 644
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
     "line": 645
    },
    {
     "pattern": "POINT TO OBJECT FOR OBJECT (FIND LIVING)",
     "objects": 2,
     "particles": [
      "TO",
      "FOR"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 646
    },
    {
     "pattern": "POINT OUT OBJECT TO OBJECT (FIND LIVING)",
     "objects": 2,
     "particles": [
      "OUT",
      "TO"
     ],
     "action": "V-POINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 647
    },
    {
     "pattern": "POINT AT OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-SPOINT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 648
    },
    {
     "pattern": "POINT OBJECT AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-POINT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 649
    },
    {
     "pattern": "POINT OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-POINT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 650
    }
   ]
  },
  "RING": {
   "verb": "RING",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RING OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-RING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 652
    },
    {
     "pattern": "RING FOR OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-RING-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 653
    }
   ]
  },
  "CALL": {
   "verb": "CALL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CALL FOR OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-RING-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 654
    },
    {
     "pattern": "CALL OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 881
    },
    {
     "pattern": "CALL TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 882
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
     "line": 884
    },
    {
     "pattern": "CALL OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 885
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
     "line": 886
    },
    {
     "pattern": "CALL UP OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "ON"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 887
    },
    {
     "pattern": "CALL UP OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 888
    }
   ]
  },
  "AIM": {
   "verb": "AIM",
   "synonyms": [],
   "productions": [
    {
     "pattern": "AIM AT OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-SPOINT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 688
    },
    {
     "pattern": "AIM OBJECT AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-POINT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 689
    },
    {
     "pattern": "AIM OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-POINT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 690
    }
   ]
  },
  "POKE": {
   "verb": "POKE",
   "synonyms": [
    "JAB",
    "BLIND"
   ],
   "productions": [
    {
     "pattern": "POKE OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 692
    }
   ]
  },
  "POUR": {
   "verb": "POUR",
   "synonyms": [
    "SPILL"
   ],
   "productions": [
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 699
    },
    {
     "pattern": "POUR OUT OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 700
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 702
    },
    {
     "pattern": "POUR OUT OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "OUT",
      "IN"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 703
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 704
    },
    {
     "pattern": "POUR OUT OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "OUT",
      "ON"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 705
    },
    {
     "pattern": "POUR OBJECT FROM OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-POUR-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 707
    },
    {
     "pattern": "POUR OUT OBJECT FROM OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "OUT",
      "FROM"
     ],
     "action": "V-POUR-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 708
    },
    {
     "pattern": "POUR OBJECT OUT OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-POUR-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 709
    }
   ]
  },
  "POCKET": {
   "verb": "POCKET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "POCKET OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-POCKET",
     "preaction": "PRE-POCKET",
     "file": "syntax.zil",
     "line": 713
    }
   ]
  },
  "EMPTY": {
   "verb": "EMPTY",
   "synonyms": [
    "CLEAR"
   ],
   "productions": [
    {
     "pattern": "EMPTY OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-EMPTY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 715
    },
    {
     "pattern": "EMPTY OUT OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EMPTY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 716
    },
    {
     "pattern": "EMPTY OFF OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-EMPTY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 717
    },
    {
     "pattern": "EMPTY OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 719
    },
    {
     "pattern": "EMPTY OUT OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "OUT",
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 720
    },
    {
     "pattern": "EMPTY OBJECT OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 721
    },
    {
     "pattern": "EMPTY OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 723
    },
    {
     "pattern": "EMPTY OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 724
    },
    {
     "pattern": "EMPTY OUT OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "OUT",
      "IN"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 725
    },
    {
     "pattern": "EMPTY OUT OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "OUT",
      "ON"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 726
    }
   ]
  },
  "PUSH": {
   "verb": "PUSH",
   "synonyms": [
    "PRESS",
    "SHOVE",
    "THRUST",
    "NUDGE",
    "STICK"
   ],
   "productions": [
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 730
    },
    {
     "pattern": "PUSH ON OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 731
    },
    {
     "pattern": "PUSH UP OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 732
    },
    {
     "pattern": "PUSH DOWN OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 733
    },
    {
     "pattern": "PUSH IN OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-PLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 734
    },
    {
     "pattern": "PUSH OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 735
    },
    {
     "pattern": "PUSH DOWN OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 736
    },
    {
     "pattern": "PUSH ON OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "ON",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 737
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 738
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
     "line": 739
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 740
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 741
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 742
    },
    {
     "pattern": "PUSH OBJECT (ON-GROUND IN-ROOM) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 743
    },
    {
     "pattern": "PUSH OBJECT (ON-GROUND IN-ROOM) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 744
    },
    {
     "pattern": "PUSH OBJECT (ON-GROUND IN-ROOM) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 745
    }
   ]
  },
  "PUT": {
   "verb": "PUT",
   "synonyms": [
    "STUFF",
    "INSERT",
    "PLACE",
    "LAY",
    "STASH"
   ],
   "productions": [
    {
     "pattern": "PUT OBJECT (HELD CARRIED HAVE MANY) IN OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 748
    },
    {
     "pattern": "PUT OBJECT (HELD CARRIED HAVE MANY) DOWN OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 750
    },
    {
     "pattern": "PUT OBJECT (HELD CARRIED HAVE MANY) ON OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 752
    },
    {
     "pattern": "PUT OBJECT (HELD CARRIED HAVE) AGAINST OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 754
    },
    {
     "pattern": "PUT OBJECT (HELD CARRIED HAVE) THROUGH OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 756
    },
    {
     "pattern": "PUT OBJECT (HELD CARRIED HAVE) OVER OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT-ON",
     "file": "syntax.zil",
     "line": 758
    },
    {
     "pattern": "PUT DOWN OBJECT (HELD CARRIED HAVE MANY)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 760
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE CARRIED MANY) UNDER OBJECT (ON-GROUND IN-ROOM CARRIED)",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 761
    },
    {
     "pattern": "PUT ON OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 763
    },
    {
     "pattern": "PUT OBJECT (HELD CARRIED MANY HAVE) BEHIND OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 2,
     "particles": [
      "BEHIND"
     ],
     "action": "V-PUT-BEHIND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 764
    },
    {
     "pattern": "PUT OUT OBJECT (ON-GROUND IN-ROOM CARRIED HELD)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 766
    }
   ]
  },
  "PLUG": {
   "verb": "PLUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PLUG IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-PLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 774
    },
    {
     "pattern": "PLUG OBJECT IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 775
    }
   ]
  },
  "CONNECT": {
   "verb": "CONNECT",
   "synonyms": [
    "ATTACH"
   ],
   "productions": [
    {
     "pattern": "CONNECT OBJECT TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 777
    },
    {
     "pattern": "CONNECT OBJECT (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-SINGLE-CONNECT",
     "preaction": "PRE-SINGLE-CONNECT",
     "file": "syntax.zil",
     "line": 778
    }
   ]
  },
  "RECONNECT": {
   "verb": "RECONNECT",
   "synonyms": [
    "REATTACH"
   ],
   "productions": [
    {
     "pattern": "RECONNECT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 782
    },
    {
     "pattern": "RECONNECT OBJECT TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-REPLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 783
    }
   ]
  },
  "UNPLUG": {
   "verb": "UNPLUG",
   "synonyms": [
    "DISCONNEC",
    "DETACH",
    "UNATTACH",
    "DISENGAGE"
   ],
   "productions": [
    {
     "pattern": "UNPLUG OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-UNPLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 786
    },
    {
     "pattern": "UNPLUG OBJECT FROM OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-UNPLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 787
    }
   ]
  },
  "STOW": {
   "verb": "STOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 790
    }
   ]
  },
  "RAISE": {
   "verb": "RAISE",
   "synonyms": [
    "LIFT",
    "ELEVATE",
    "HOIST"
   ],
   "productions": [
    {
     "pattern": "RAISE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 791
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
     "line": 792
    },
    {
     "pattern": "RAISE OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 793
    },
    {
     "pattern": "RAISE UP OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-LOOSEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 794
    }
   ]
  },
  "REACH": {
   "verb": "REACH",
   "synonyms": [
    "GROPE"
   ],
   "productions": [
    {
     "pattern": "REACH OBJECT WITH OBJECT (FIND TOOL)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-STOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 800
    },
    {
     "pattern": "REACH FOR OBJECT WITH OBJECT (FIND TOOL)",
     "objects": 2,
     "particles": [
      "FOR",
      "WITH"
     ],
     "action": "V-STOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 801
    },
    {
     "pattern": "REACH OUT OBJECT WITH OBJECT (FIND TOOL)",
     "objects": 2,
     "particles": [
      "OUT",
      "WITH"
     ],
     "action": "V-STOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 802
    },
    {
     "pattern": "REACH TO OBJECT WITH OBJECT (FIND TOOL)",
     "objects": 2,
     "particles": [
      "TO",
      "WITH"
     ],
     "action": "V-STOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 803
    },
    {
     "pattern": "REACH IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-REACH-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 804
    },
    {
     "pattern": "REACH THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-REACH-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 805
    }
   ]
  },
  "READ": {
   "verb": "READ",
   "synonyms": [
    "SKIM",
    "BROWSE",
    "LEAF"
   ],
   "productions": [
    {
     "pattern": "READ OBJECT (FIND READABLE) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-READ",
     "preaction": null,
     "file": "syntax.zil",
     "line": 808
    },
    {
     "pattern": "READ THROUGH OBJECT (FIND READABLE) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-READ",
     "preaction": null,
     "file": "syntax.zil",
     "line": 810
    },
    {
     "pattern": "READ OBJECT (FIND READABLE) (HELD CARRIED ON-GROUND IN-ROOM) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LOOK-THRU",
     "preaction": null,
     "file": "syntax.zil",
     "line": 812
    },
    {
     "pattern": "READ OBJECT (FIND READABLE) (HELD CARRIED ON-GROUND IN-ROOM) TO OBJECT (FIND PERSON)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-READ-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 814
    }
   ]
  },
  "RELEASE": {
   "verb": "RELEASE",
   "synonyms": [
    "FREE"
   ],
   "productions": [
    {
     "pattern": "RELEASE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (FIND MANUALLY) (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RELEASE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 818
    },
    {
     "pattern": "RELEASE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) FROM OBJECT (FIND MANUALLY)",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-RELEASE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 820
    }
   ]
  },
  "UNTIE": {
   "verb": "UNTIE",
   "synonyms": [
    "UNDO",
    "UNFASTEN",
    "UNHOOK"
   ],
   "productions": [
    {
     "pattern": "UNTIE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 827
    }
   ]
  },
  "REPAIR": {
   "verb": "REPAIR",
   "synonyms": [
    "SERVICE"
   ],
   "productions": [
    {
     "pattern": "REPAIR OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-REPAIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 855
    }
   ]
  },
  "FIX": {
   "verb": "FIX",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIX OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-REPAIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 859
    },
    {
     "pattern": "FIX UP OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-REPAIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 861
    }
   ]
  },
  "WORK": {
   "verb": "WORK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WORK ON OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "ON",
      "WITH"
     ],
     "action": "V-REPAIR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 864
    }
   ]
  },
  "REPLACE": {
   "verb": "REPLACE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REPLACE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLACE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 867
    }
   ]
  },
  "RIDE": {
   "verb": "RIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RIDE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 869
    },
    {
     "pattern": "RIDE IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-RIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 870
    },
    {
     "pattern": "RIDE ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-RIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 871
    }
   ]
  },
  "BOW": {
   "verb": "BOW",
   "synonyms": [
    "KNEEL",
    "GROVEL",
    "GENUFLECT"
   ],
   "productions": [
    {
     "pattern": "BOW TO OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-BOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 873
    },
    {
     "pattern": "BOW BEFORE OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "BEFORE"
     ],
     "action": "V-BOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 874
    }
   ]
  },
  "SAY": {
   "verb": "SAY",
   "synonyms": [
    "TALK",
    "SPEAK",
    "UTTER",
    "PROCLAIM",
    "MAYBE"
   ],
   "productions": [
    {
     "pattern": "SAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 877
    },
    {
     "pattern": "SAY TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 878
    }
   ]
  },
  "PHONE": {
   "verb": "PHONE",
   "synonyms": [
    "TELEPHONE",
    "DIAL"
   ],
   "productions": [
    {
     "pattern": "PHONE OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 890
    },
    {
     "pattern": "PHONE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 891
    },
    {
     "pattern": "PHONE OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 892
    },
    {
     "pattern": "PHONE UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 893
    },
    {
     "pattern": "PHONE UP OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "ON"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 894
    },
    {
     "pattern": "PHONE UP OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-PHONE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 895
    }
   ]
  },
  "SEARCH": {
   "verb": "SEARCH",
   "synonyms": [
    "RUMMAGE",
    "FRISK",
    "RANSACK",
    "SIFT"
   ],
   "productions": [
    {
     "pattern": "SEARCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 898
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
     "line": 899
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
     "line": 900
    },
    {
     "pattern": "SEARCH UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 901
    },
    {
     "pattern": "SEARCH THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 902
    }
   ]
  },
  "SEND": {
   "verb": "SEND",
   "synonyms": [
    "MAIL"
   ],
   "productions": [
    {
     "pattern": "SEND OBJECT TO OBJECT (FIND LOCATION)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SEND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 905
    },
    {
     "pattern": "SEND OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-SSEND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 907
    }
   ]
  },
  "SHAKE": {
   "verb": "SHAKE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHAKE OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 913
    },
    {
     "pattern": "SHAKE OUT OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EMPTY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 915
    },
    {
     "pattern": "SHAKE OUT OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "OUT",
      "IN"
     ],
     "action": "V-EMPTY-INTO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 916
    },
    {
     "pattern": "SHAKE OUT OBJECT FROM OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "OUT",
      "FROM"
     ],
     "action": "V-POUR-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 917
    }
   ]
  },
  "JOSTLE": {
   "verb": "JOSTLE",
   "synonyms": [
    "RATTLE"
   ],
   "productions": [
    {
     "pattern": "JOSTLE OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 919
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
     "line": 926
    },
    {
     "pattern": "SHOOT OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-SHOOT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 927
    }
   ]
  },
  "SIT": {
   "verb": "SIT",
   "synonyms": [
    "SETTLE",
    "SQUAT",
    "CROUCH"
   ],
   "productions": [
    {
     "pattern": "SIT OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 933
    },
    {
     "pattern": "SIT ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 934
    },
    {
     "pattern": "SIT DOWN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 935
    },
    {
     "pattern": "SIT IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 936
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
     "line": 938
    }
   ]
  },
  "SLEEP": {
   "verb": "SLEEP",
   "synonyms": [
    "NAP",
    "SNOOZE",
    "REST"
   ],
   "productions": [
    {
     "pattern": "SLEEP",
     "objects": 0,
     "particles": [],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 941
    },
    {
     "pattern": "SLEEP IN OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 942
    },
    {
     "pattern": "SLEEP ON OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LIE-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 943
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
     "action": "V-MOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 949
    },
    {
     "pattern": "SLIDE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 950
    },
    {
     "pattern": "SLIDE OBJECT (HELD CARRIED HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 951
    },
    {
     "pattern": "SLIDE OBJECT (HELD CARRIED HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 952
    },
    {
     "pattern": "SLIDE OBJECT (HELD CARRIED HAVE TAKE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 953
    },
    {
     "pattern": "SLIDE DOWN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 955
    }
   ]
  },
  "SMELL": {
   "verb": "SMELL",
   "synonyms": [
    "SNIFF",
    "WHIFF",
    "INHALE"
   ],
   "productions": [
    {
     "pattern": "SMELL OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-SMELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 960
    }
   ]
  },
  "SPIN": {
   "verb": "SPIN",
   "synonyms": [
    "WHIRL"
   ],
   "productions": [
    {
     "pattern": "SPIN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-SPIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 963
    }
   ]
  },
  "STAND": {
   "verb": "STAND",
   "synonyms": [
    "RISE"
   ],
   "productions": [
    {
     "pattern": "STAND",
     "objects": 0,
     "particles": [],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 966
    },
    {
     "pattern": "STAND UP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 967
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
     "line": 968
    },
    {
     "pattern": "STAND IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-STAND-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 969
    },
    {
     "pattern": "STAND UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-STAND-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 970
    }
   ]
  },
  "DUCK": {
   "verb": "DUCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DUCK",
     "objects": 0,
     "particles": [],
     "action": "V-DUCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 973
    },
    {
     "pattern": "DUCK UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-STAND-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 974
    }
   ]
  },
  "SWIM": {
   "verb": "SWIM",
   "synonyms": [
    "WADE"
   ],
   "productions": [
    {
     "pattern": "SWIM TO OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 976
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
     "line": 977
    },
    {
     "pattern": "SWIM THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 978
    }
   ]
  },
  "DIVE": {
   "verb": "DIVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DIVE DOWN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 981
    },
    {
     "pattern": "DIVE IN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-DIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 982
    },
    {
     "pattern": "DIVE UNDER OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-DIVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 983
    },
    {
     "pattern": "DIVE OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 984
    }
   ]
  },
  "SWING": {
   "verb": "SWING",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SWING OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-SWING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 986
    },
    {
     "pattern": "SWING OBJECT (HELD CARRIED HAVE) AT OBJECT (FIND PERSON) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SWING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 987
    },
    {
     "pattern": "SWING ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 990
    }
   ]
  },
  "TAKE": {
   "verb": "TAKE",
   "synonyms": [
    "GRAB",
    "KEEP",
    "CATCH",
    "CARRY",
    "SEIZE",
    "STEAL",
    "CONFISCATE",
    "SNATCH",
    "PRINCE"
   ],
   "productions": [
    {
     "pattern": "TAKE OBJECT (FIND TAKEABLE) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 992
    },
    {
     "pattern": "TAKE UP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 994
    },
    {
     "pattern": "TAKE DOWN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 995
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 996
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 998
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1000
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1002
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1004
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TAKE-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1006
    },
    {
     "pattern": "TAKE APART OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "APART"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1008
    },
    {
     "pattern": "TAKE OFF OBJECT (FIND LOCATION) (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1011
    }
   ]
  },
  "REMOVE": {
   "verb": "REMOVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REMOVE OBJECT (FIND WORN) (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1013
    },
    {
     "pattern": "REMOVE OBJECT (FIND TAKEABLE) (ON-GROUND IN-ROOM MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1014
    },
    {
     "pattern": "REMOVE OBJECT (FIND TAKEABLE) (ON-GROUND IN-ROOM MANY) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1016
    },
    {
     "pattern": "REMOVE OBJECT (FIND TAKEABLE) (ON-GROUND IN-ROOM MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1018
    },
    {
     "pattern": "REMOVE OBJECT (FIND TAKEABLE) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TAKE-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1020
    }
   ]
  },
  "HOLD": {
   "verb": "HOLD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HOLD OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-HOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1023
    },
    {
     "pattern": "HOLD ON OBJECT (FIND TAKEABLE) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1024
    },
    {
     "pattern": "HOLD UP OBJECT (FIND LOCATION) (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1025
    },
    {
     "pattern": "HOLD OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 1026
    },
    {
     "pattern": "HOLD OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-HOLD-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1027
    },
    {
     "pattern": "HOLD OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1028
    },
    {
     "pattern": "HOLD OBJECT (HELD CARRIED HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1029
    },
    {
     "pattern": "HOLD DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1030
    },
    {
     "pattern": "HOLD APART OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "APART"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1031
    }
   ]
  },
  "GET": {
   "verb": "GET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GET OBJECT (FIND TAKEABLE) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1033
    },
    {
     "pattern": "GET IN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1035
    },
    {
     "pattern": "GET OUT OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1036
    },
    {
     "pattern": "GET ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1037
    },
    {
     "pattern": "GET UP OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1038
    },
    {
     "pattern": "GET DOWN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1039
    },
    {
     "pattern": "GET UNDER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-STAND-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1040
    },
    {
     "pattern": "GET OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1041
    },
    {
     "pattern": "GET OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1043
    },
    {
     "pattern": "GET OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1045
    },
    {
     "pattern": "GET OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1047
    },
    {
     "pattern": "GET OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 1049
    },
    {
     "pattern": "GET OBJECT (FIND TAKEABLE) (IN-ROOM CARRIED MANY) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TAKE-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1051
    },
    {
     "pattern": "GET OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-GET-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1053
    },
    {
     "pattern": "GET AWAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1054
    },
    {
     "pattern": "GET TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1055
    },
    {
     "pattern": "GET BACK OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "BACK"
     ],
     "action": "V-WALK-TO",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1056
    },
    {
     "pattern": "GET OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-SGET-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1057
    },
    {
     "pattern": "GET OBJECT FOR OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-GET-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1058
    },
    {
     "pattern": "GET OBJECT TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GET-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1059
    }
   ]
  },
  "BRING": {
   "verb": "BRING",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BRING OBJECT TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GET-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1061
    },
    {
     "pattern": "BRING BACK OBJECT TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "BACK",
      "TO"
     ],
     "action": "V-GET-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1062
    },
    {
     "pattern": "BRING OBJECT FOR OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-GET-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1063
    },
    {
     "pattern": "BRING OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-SGET-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1064
    }
   ]
  },
  "BOARD": {
   "verb": "BOARD",
   "synonyms": [
    "MOUNT"
   ],
   "productions": [
    {
     "pattern": "BOARD OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1066
    }
   ]
  },
  "EMBARK": {
   "verb": "EMBARK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EMBARK OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1069
    },
    {
     "pattern": "EMBARK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1070
    }
   ]
  },
  "DISEMBARK": {
   "verb": "DISEMBARK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DISEMBARK OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1072
    },
    {
     "pattern": "DISEMBARK FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1073
    },
    {
     "pattern": "DISEMBARK OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1074
    }
   ]
  },
  "TASTE": {
   "verb": "TASTE",
   "synonyms": [
    "LICK"
   ],
   "productions": [
    {
     "pattern": "TASTE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TASTE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1076
    }
   ]
  },
  "TELL": {
   "verb": "TELL",
   "synonyms": [
    "ADVISE",
    "INFORM"
   ],
   "productions": [
    {
     "pattern": "TELL OBJECT (FIND PERSON) (IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1079
    },
    {
     "pattern": "TELL OBJECT (FIND PERSON) (IN-ROOM) ABOUT OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL-ABOUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1080
    },
    {
     "pattern": "TELL OBJECT (FIND PERSON) (IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-TELL-TIME",
     "preaction": "PRE-TIME",
     "file": "syntax.zil",
     "line": 1081
    }
   ]
  },
  "THANK": {
   "verb": "THANK",
   "synonyms": [
    "THANKS"
   ],
   "productions": [
    {
     "pattern": "THANK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THANK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1084
    },
    {
     "pattern": "THANK",
     "objects": 0,
     "particles": [],
     "action": "V-THANK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1085
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [
    "TOSS",
    "HURL",
    "CHUCK",
    "FLING",
    "PITCH"
   ],
   "productions": [
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW",
     "preaction": "PRE-THROW",
     "file": "syntax.zil",
     "line": 1088
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) TO OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-THROW",
     "preaction": "PRE-THROW",
     "file": "syntax.zil",
     "line": 1090
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-THROW-OVER",
     "preaction": "PRE-THROW-OVER",
     "file": "syntax.zil",
     "line": 1092
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-THROW-OVER",
     "preaction": "PRE-THROW-OVER",
     "file": "syntax.zil",
     "line": 1094
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROW",
     "preaction": "PRE-THROW",
     "file": "syntax.zil",
     "line": 1096
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) DOWN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 1098
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 1100
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 1102
    },
    {
     "pattern": "THROW AWAY OBJECT (HELD MANY CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "syntax.zil",
     "line": 1104
    },
    {
     "pattern": "THROW OBJECT (ON-GROUND IN-ROOM) OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-STHROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1105
    }
   ]
  },
  "TIE": {
   "verb": "TIE",
   "synonyms": [
    "FASTEN",
    "SECURE",
    "BUCKLE"
   ],
   "productions": [
    {
     "pattern": "TIE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1109
    },
    {
     "pattern": "TIE TOGETHER OBJECT",
     "objects": 1,
     "particles": [
      "TOGETHER"
     ],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1110
    },
    {
     "pattern": "TIE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TIE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1111
    },
    {
     "pattern": "TIE UP OBJECT (FIND PERSON) (ON-GROUND IN-ROOM) WITH OBJECT (FIND MANUALLY) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-TIE-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1112
    }
   ]
  },
  "SHORT": {
   "verb": "SHORT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHORT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1116
    },
    {
     "pattern": "SHORT OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1117
    },
    {
     "pattern": "SHORT OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1118
    },
    {
     "pattern": "SHORT OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1119
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
     "action": "V-TOUCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1121
    },
    {
     "pattern": "TOUCH TOGETHER OBJECT",
     "objects": 1,
     "particles": [
      "TOGETHER"
     ],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1122
    },
    {
     "pattern": "TOUCH OBJECT WITH OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-STOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1123
    },
    {
     "pattern": "TOUCH OBJECT (HELD CARRIED ;HAVE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1124
    },
    {
     "pattern": "TOUCH OBJECT (HELD CARRIED ;HAVE) AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-TOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1125
    }
   ]
  },
  "DISTURB": {
   "verb": "DISTURB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DISTURB OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TOUCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1127
    },
    {
     "pattern": "DISTURB OBJECT WITH OBJECT (HELD CARRIED ;HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-STOUCH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1128
    }
   ]
  },
  "PET": {
   "verb": "PET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PET OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TOUCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1130
    }
   ]
  },
  "PAT": {
   "verb": "PAT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PAT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TOUCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1131
    }
   ]
  },
  "FEEL": {
   "verb": "FEEL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FEEL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TOUCH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1132
    },
    {
     "pattern": "FEEL IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-REACH-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1133
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [
    "ROTATE",
    "FLIP",
    "TOGGLE"
   ],
   "productions": [
    {
     "pattern": "TURN OBJECT (MANY ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1135
    },
    {
     "pattern": "TURN OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1137
    },
    {
     "pattern": "TURN THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-READ",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1139
    },
    {
     "pattern": "TURN TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TURN-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1140
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
     "line": 1141
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
     "line": 1142
    },
    {
     "pattern": "TURN AROUND OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-SPIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1143
    },
    {
     "pattern": "TURN OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-SPIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1144
    },
    {
     "pattern": "TURN DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-REFUSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1145
    },
    {
     "pattern": "TURN BACK OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "BACK"
     ],
     "action": "V-SPIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1146
    }
   ]
  },
  "RECALL": {
   "verb": "RECALL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RECALL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SPIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1147
    }
   ]
  },
  "TYPE": {
   "verb": "TYPE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TYPE ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-TYPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1150
    }
   ]
  },
  "TWIST": {
   "verb": "TWIST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TWIST OBJECT WITH OBJECT (FIND MANUALLY) (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1152
    },
    {
     "pattern": "TWIST AROUND OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-SPIN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1154
    },
    {
     "pattern": "TWIST TOGETHER OBJECT",
     "objects": 1,
     "particles": [
      "TOGETHER"
     ],
     "action": "V-SHORT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1155
    }
   ]
  },
  "START": {
   "verb": "START",
   "synonyms": [],
   "productions": [
    {
     "pattern": "START OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1157
    },
    {
     "pattern": "START OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1158
    },
    {
     "pattern": "START UP OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1160
    },
    {
     "pattern": "START UP OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1161
    }
   ]
  },
  "STOP": {
   "verb": "STOP",
   "synonyms": [
    "HALT"
   ],
   "productions": [
    {
     "pattern": "STOP OBJECT (FIND LOCATION) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1164
    }
   ]
  },
  "UNLOCK": {
   "verb": "UNLOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1168
    }
   ]
  },
  "USE": {
   "verb": "USE",
   "synonyms": [
    "EMPLOY",
    "EXPLOIT",
    "OPERATE",
    "PEDAL"
   ],
   "productions": [
    {
     "pattern": "USE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-USE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1178
    }
   ]
  },
  "WAIT": {
   "verb": "WAIT",
   "synonyms": [
    "LOITER",
    "Z"
   ],
   "productions": [
    {
     "pattern": "WAIT",
     "objects": 0,
     "particles": [],
     "action": "V-WAIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1181
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
     "line": 1182
    }
   ]
  },
  "WAKE": {
   "verb": "WAKE",
   "synonyms": [
    "AWAKE",
    "AWAKEN",
    "ROUSE"
   ],
   "productions": [
    {
     "pattern": "WAKE OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1185
    },
    {
     "pattern": "WAKE UP OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1186
    }
   ]
  },
  "SCARE": {
   "verb": "SCARE",
   "synonyms": [
    "AROUSE",
    "STARTLE",
    "SURPRISE",
    "FRIGHTEN"
   ],
   "productions": [
    {
     "pattern": "SCARE OBJECT (FIND LIVING)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1189
    }
   ]
  },
  "WALK": {
   "verb": "WALK",
   "synonyms": [
    "PROCEED",
    "STEP",
    "TRUDGE",
    "HIKE",
    "TRAMP",
    "CRAWL",
    "SAUNTER",
    "RUN",
    "JOG",
    "SKIP",
    "HOP",
    "ADVANCE",
    "STROLL"
   ],
   "productions": [
    {
     "pattern": "WALK",
     "objects": 0,
     "particles": [],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1192
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1193
    },
    {
     "pattern": "WALK IN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1194
    },
    {
     "pattern": "WALK OUT OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1195
    },
    {
     "pattern": "WALK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-STAND-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1196
    },
    {
     "pattern": "WALK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CROSS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1197
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
     "line": 1198
    },
    {
     "pattern": "WALK AROUND OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1199
    },
    {
     "pattern": "WALK BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1200
    },
    {
     "pattern": "WALK UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1201
    },
    {
     "pattern": "WALK UP OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1202
    },
    {
     "pattern": "WALK DOWN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1203
    },
    {
     "pattern": "WALK TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1204
    },
    {
     "pattern": "WALK FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1205
    },
    {
     "pattern": "WALK AWAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1206
    }
   ]
  },
  "APPROACH": {
   "verb": "APPROACH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "APPROACH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK-TO",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1210
    }
   ]
  },
  "GO": {
   "verb": "GO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GO",
     "objects": 0,
     "particles": [],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1212
    },
    {
     "pattern": "GO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1213
    },
    {
     "pattern": "GO IN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-ENTER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1214
    },
    {
     "pattern": "GO OUT OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1215
    },
    {
     "pattern": "GO ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-STAND-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1216
    },
    {
     "pattern": "GO OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CROSS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1217
    },
    {
     "pattern": "GO THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1218
    },
    {
     "pattern": "GO AROUND OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1219
    },
    {
     "pattern": "GO BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1220
    },
    {
     "pattern": "GO UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1221
    },
    {
     "pattern": "GO UP OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1222
    },
    {
     "pattern": "GO DOWN OBJECT (FIND LOCATION) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1223
    },
    {
     "pattern": "GO TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1224
    },
    {
     "pattern": "GO AWAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1225
    },
    {
     "pattern": "GO FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1226
    },
    {
     "pattern": "GO BACK OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "BACK"
     ],
     "action": "V-WALK-TO",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1227
    }
   ]
  },
  "RETURN": {
   "verb": "RETURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RETURN OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-RETURN",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1229
    },
    {
     "pattern": "RETURN TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": "PRE-WALK-TO",
     "file": "syntax.zil",
     "line": 1230
    },
    {
     "pattern": "RETURN OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 1231
    }
   ]
  },
  "WAVE": {
   "verb": "WAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SWING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1233
    },
    {
     "pattern": "WAVE AT OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1234
    },
    {
     "pattern": "WAVE TO OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1235
    }
   ]
  },
  "HAIL": {
   "verb": "HAIL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HAIL OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1236
    }
   ]
  },
  "NOD": {
   "verb": "NOD",
   "synonyms": [
    "SMILE",
    "LAUGH",
    "GRIN",
    "SNEER",
    "MOTION",
    "BECKON"
   ],
   "productions": [
    {
     "pattern": "NOD AT OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1238
    },
    {
     "pattern": "NOD TO OBJECT (FIND PERSON)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WAVE-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1239
    }
   ]
  },
  "WEAR": {
   "verb": "WEAR",
   "synonyms": [
    "DON"
   ],
   "productions": [
    {
     "pattern": "WEAR OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WEAR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1242
    }
   ]
  },
  "WHAT": {
   "verb": "WHAT",
   "synonyms": [
    "WHATS",
    "WHAT'S"
   ],
   "productions": [
    {
     "pattern": "WHAT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WHAT",
     "preaction": "PRE-WHAT",
     "file": "syntax.zil",
     "line": 1245
    },
    {
     "pattern": "WHAT ABOUT OBJECT",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-WHAT",
     "preaction": "PRE-WHAT",
     "file": "syntax.zil",
     "line": 1246
    }
   ]
  },
  "WHERE": {
   "verb": "WHERE",
   "synonyms": [
    "WHERES",
    "WHERE'S"
   ],
   "productions": [
    {
     "pattern": "WHERE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WHERE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1249
    }
   ]
  },
  "WHO": {
   "verb": "WHO",
   "synonyms": [
    "WHOS",
    "WHO'S"
   ],
   "productions": [
    {
     "pattern": "WHO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WHO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1252
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
     "file": "syntax.zil",
     "line": 1255
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
     "line": 1256
    },
    {
     "pattern": "WIND OBJECT (HELD CARRIED HAVE) AROUND OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AROUND"
     ],
     "action": "V-WRAP-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1257
    },
    {
     "pattern": "WIND OBJECT (ON-GROUND IN-ROOM) IN OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-SWRAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1259
    },
    {
     "pattern": "WIND UP OBJECT (ON-GROUND IN-ROOM) IN OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "IN"
     ],
     "action": "V-SWRAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1261
    }
   ]
  },
  "YELL": {
   "verb": "YELL",
   "synonyms": [
    "SCREAM",
    "SHOUT",
    "HOWL"
   ],
   "productions": [
    {
     "pattern": "YELL OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-YELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1264
    },
    {
     "pattern": "YELL AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-YELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1265
    },
    {
     "pattern": "YELL TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-YELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1266
    }
   ]
  },
  "YES": {
   "verb": "YES",
   "synonyms": [
    "Y",
    "AYE",
    "OK",
    "OKAY",
    "SURE",
    "YUP",
    "AFFIRMATIVE",
    "POSITIVE",
    "YEAH",
    "NO",
    "NAY",
    "NEGATIVE",
    "NOPE",
    "NAW"
   ],
   "productions": [
    {
     "pattern": "YES OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1269
    }
   ]
  },
  "MELT": {
   "verb": "MELT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "MELT OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-MELT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1276
    }
   ]
  },
  "DRESS": {
   "verb": "DRESS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DRESS OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-DRESS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1278
    }
   ]
  },
  "UNDRESS": {
   "verb": "UNDRESS",
   "synonyms": [
    "DISROBE",
    "STRIP"
   ],
   "productions": [
    {
     "pattern": "UNDRESS OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-UNDRESS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1280
    }
   ]
  },
  "ESCAPE": {
   "verb": "ESCAPE",
   "synonyms": [
    "FLEE"
   ],
   "productions": [
    {
     "pattern": "ESCAPE OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1283
    },
    {
     "pattern": "ESCAPE FROM OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1284
    },
    {
     "pattern": "ESCAPE AWAY OBJECT (FIND LOCATION)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-ESCAPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1285
    }
   ]
  },
  "STINGLAI": {
   "verb": "STINGLAI",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STINGLAI OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-STINGLAI",
     "preaction": null,
     "file": "syntax.zil",
     "line": 1288
    }
   ]
  }
 },
 "vocab": {
  "$REFRESH": {
   "word": "$REFRESH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "NE": {
   "word": "NE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
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
    }
   ]
  },
  "SUPERBRIEF": {
   "word": "SUPERBRIEF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SUPER"
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
     "kind": "noun",
     "of": "ME"
    }
   ]
  },
  "INVENTORY": {
   "word": "INVENTORY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "I"
    }
   ]
  },
  "QUIT": {
   "word": "QUIT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "Q": {
   "word": "Q",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "QUIT"
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
  "SAVE": {
   "word": "SAVE",
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
  "SCORE": {
   "word": "SCORE",
   "roles": [
    {
     "kind": "verb",
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
     "kind": "noun",
     "of": "WRISTWATCH"
    }
   ]
  },
  "T": {
   "word": "T",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TIME"
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
  "$VER": {
   "word": "$VER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "$VERIFY"
    }
   ]
  },
  "NOTIFY": {
   "word": "NOTIFY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "$ID": {
   "word": "$ID",
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
  "DIAGNOSE": {
   "word": "DIAGNOSE",
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
    }
   ]
  },
  "REPLY": {
   "word": "REPLY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RESPOND": {
   "word": "RESPOND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "REPLY"
    }
   ]
  },
  "TO": {
   "word": "TO",
   "roles": [
    {
     "kind": "particle",
     "of": "REPLY"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "HAND"
    },
    {
     "kind": "particle",
     "of": "SELL"
    },
    {
     "kind": "particle",
     "of": "SHOW"
    },
    {
     "kind": "particle",
     "of": "FEED"
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
     "of": "PAY"
    },
    {
     "kind": "particle",
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "CALL"
    },
    {
     "kind": "particle",
     "of": "AIM"
    },
    {
     "kind": "particle",
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "CONNECT"
    },
    {
     "kind": "particle",
     "of": "RECONNECT"
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
     "of": "BOW"
    },
    {
     "kind": "particle",
     "of": "SAY"
    },
    {
     "kind": "particle",
     "of": "SEND"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
    },
    {
     "kind": "particle",
     "of": "SWIM"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "BRING"
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
     "of": "SHORT"
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
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "particle",
     "of": "RETURN"
    },
    {
     "kind": "particle",
     "of": "WAVE"
    },
    {
     "kind": "particle",
     "of": "NOD"
    },
    {
     "kind": "particle",
     "of": "YELL"
    },
    {
     "kind": "preposition",
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
     "of": "QUESTION"
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
  "FOR": {
   "word": "FOR",
   "roles": [
    {
     "kind": "particle",
     "of": "ASK"
    },
    {
     "kind": "particle",
     "of": "REQUEST"
    },
    {
     "kind": "particle",
     "of": "TRADE"
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
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "RING"
    },
    {
     "kind": "particle",
     "of": "CALL"
    },
    {
     "kind": "particle",
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "SEARCH"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "BRING"
    },
    {
     "kind": "particle",
     "of": "WAIT"
    }
   ]
  },
  "ORDER": {
   "word": "ORDER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "BAG"
    }
   ]
  },
  "REQUEST": {
   "word": "REQUEST",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "REQUEST-OBJECT"
    }
   ]
  },
  "GRANT": {
   "word": "GRANT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "GRANTED": {
   "word": "GRANTED",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "GRANT"
    },
    {
     "kind": "noun",
     "of": "REQUEST-OBJECT"
    }
   ]
  },
  "DENY": {
   "word": "DENY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DENIED": {
   "word": "DENIED",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DENY"
    },
    {
     "kind": "noun",
     "of": "REQUEST-OBJECT"
    }
   ]
  },
  "TRADE": {
   "word": "TRADE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "EXCHANGE": {
   "word": "EXCHANGE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TRADE"
    }
   ]
  },
  "QUESTION": {
   "word": "QUESTION",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "QUIZ": {
   "word": "QUIZ",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "QUESTION"
    }
   ]
  },
  "INTERROGATE": {
   "word": "INTERROGATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "QUESTION"
    }
   ]
  },
  "QUERY": {
   "word": "QUERY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "QUESTION"
    }
   ]
  },
  "ATTACK": {
   "word": "ATTACK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ASSAULT": {
   "word": "ASSAULT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "FIGHT": {
   "word": "FIGHT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "HURT": {
   "word": "HURT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "INJURE": {
   "word": "INJURE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACK"
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
     "of": "BUY"
    },
    {
     "kind": "particle",
     "of": "CLEAN"
    },
    {
     "kind": "particle",
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "RIP"
    },
    {
     "kind": "particle",
     "of": "FELL"
    },
    {
     "kind": "particle",
     "of": "BREAK"
    },
    {
     "kind": "particle",
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
    },
    {
     "kind": "particle",
     "of": "WATCH"
    },
    {
     "kind": "particle",
     "of": "FILL"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "FLY"
    },
    {
     "kind": "particle",
     "of": "FEED"
    },
    {
     "kind": "particle",
     "of": "COVER"
    },
    {
     "kind": "particle",
     "of": "KILL"
    },
    {
     "kind": "particle",
     "of": "HIT"
    },
    {
     "kind": "particle",
     "of": "KNOCK"
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
     "of": "LOOSEN"
    },
    {
     "kind": "particle",
     "of": "PRY"
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
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "PAY"
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
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "CALL"
    },
    {
     "kind": "particle",
     "of": "AIM"
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
     "of": "RAISE"
    },
    {
     "kind": "particle",
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "RELEASE"
    },
    {
     "kind": "particle",
     "of": "REPAIR"
    },
    {
     "kind": "particle",
     "of": "FIX"
    },
    {
     "kind": "particle",
     "of": "WORK"
    },
    {
     "kind": "particle",
     "of": "PHONE"
    },
    {
     "kind": "particle",
     "of": "SHAKE"
    },
    {
     "kind": "particle",
     "of": "JOSTLE"
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
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "TIE"
    },
    {
     "kind": "particle",
     "of": "SHORT"
    },
    {
     "kind": "particle",
     "of": "TOUCH"
    },
    {
     "kind": "particle",
     "of": "DISTURB"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "particle",
     "of": "TWIST"
    },
    {
     "kind": "particle",
     "of": "START"
    },
    {
     "kind": "particle",
     "of": "UNLOCK"
    },
    {
     "kind": "preposition",
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
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "BRING"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "adjective",
     "of": "BROOM"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-DOOR"
    }
   ]
  },
  "AWAY": {
   "word": "AWAY",
   "roles": [
    {
     "kind": "particle",
     "of": "BACK"
    },
    {
     "kind": "particle",
     "of": "RETREAT"
    },
    {
     "kind": "particle",
     "of": "GET"
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
     "of": "GO"
    },
    {
     "kind": "particle",
     "of": "ESCAPE"
    }
   ]
  },
  "CIRCLE": {
   "word": "CIRCLE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RETREAT": {
   "word": "RETREAT",
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
     "of": "RETREAT"
    },
    {
     "kind": "particle",
     "of": "BUY"
    },
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
     "of": "EMPTY"
    },
    {
     "kind": "particle",
     "of": "UNPLUG"
    },
    {
     "kind": "particle",
     "of": "RELEASE"
    },
    {
     "kind": "particle",
     "of": "SHAKE"
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
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "DISEMBARK"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "particle",
     "of": "ESCAPE"
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
     "of": "BREAK"
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
     "of": "LEAVE"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
    },
    {
     "kind": "particle",
     "of": "FILL"
    },
    {
     "kind": "particle",
     "of": "FOLD"
    },
    {
     "kind": "particle",
     "of": "CONCEAL"
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
     "of": "KICK"
    },
    {
     "kind": "particle",
     "of": "LIE"
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
     "of": "POUR"
    },
    {
     "kind": "particle",
     "of": "EMPTY"
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
     "of": "PLUG"
    },
    {
     "kind": "particle",
     "of": "REACH"
    },
    {
     "kind": "particle",
     "of": "RIDE"
    },
    {
     "kind": "particle",
     "of": "SEARCH"
    },
    {
     "kind": "particle",
     "of": "SHAKE"
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
     "of": "SLIDE"
    },
    {
     "kind": "particle",
     "of": "STAND"
    },
    {
     "kind": "particle",
     "of": "SWIM"
    },
    {
     "kind": "particle",
     "of": "DIVE"
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
     "of": "HOLD"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "FEEL"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "particle",
     "of": "WIND"
    },
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "preposition",
     "of": null
    }
   ]
  },
  "ON": {
   "word": "ON",
   "roles": [
    {
     "kind": "particle",
     "of": "BLOW"
    },
    {
     "kind": "particle",
     "of": "CLEAN"
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
     "of": "HANG"
    },
    {
     "kind": "particle",
     "of": "LEAVE"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
    },
    {
     "kind": "particle",
     "of": "WRITE"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "FLY"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "STAMP"
    },
    {
     "kind": "particle",
     "of": "KNOCK"
    },
    {
     "kind": "particle",
     "of": "LIE"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "LEAN"
    },
    {
     "kind": "particle",
     "of": "PROP"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "CALL"
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
     "kind": "particle",
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "WORK"
    },
    {
     "kind": "particle",
     "of": "RIDE"
    },
    {
     "kind": "particle",
     "of": "PHONE"
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
     "of": "STAND"
    },
    {
     "kind": "particle",
     "of": "SWING"
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
     "of": "HOLD"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "EMBARK"
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
     "of": "TYPE"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "preposition",
     "of": null
    }
   ]
  },
  "THROUGH": {
   "word": "THROUGH",
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
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "RIP"
    },
    {
     "kind": "particle",
     "of": "BREAK"
    },
    {
     "kind": "particle",
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "EXIT"
    },
    {
     "kind": "particle",
     "of": "LEAVE"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
    },
    {
     "kind": "particle",
     "of": "WATCH"
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
     "of": "SWIM"
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
     "of": "GO"
    },
    {
     "kind": "preposition",
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
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "FILL"
    },
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "FOLD"
    },
    {
     "kind": "particle",
     "of": "FLATTEN"
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
     "of": "PRY"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "POINT"
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
     "kind": "particle",
     "of": "PUSH"
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
     "of": "SHAKE"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "DISEMBARK"
    },
    {
     "kind": "particle",
     "of": "SHORT"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "preposition",
     "of": null
    }
   ]
  },
  "BUY": {
   "word": "BUY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WITHDRAW": {
   "word": "WITHDRAW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BUY"
    }
   ]
  },
  "CLEAN": {
   "word": "CLEAN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SWEEP": {
   "word": "SWEEP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "WIPE": {
   "word": "WIPE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "DRY": {
   "word": "DRY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    },
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "BRUSH": {
   "word": "BRUSH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    },
    {
     "kind": "noun",
     "of": "TOOTHBRUSH"
    }
   ]
  },
  "POLISH": {
   "word": "POLISH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "WASH": {
   "word": "WASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "OFF": {
   "word": "OFF",
   "roles": [
    {
     "kind": "particle",
     "of": "CLEAN"
    },
    {
     "kind": "particle",
     "of": "CLOSE"
    },
    {
     "kind": "particle",
     "of": "RIP"
    },
    {
     "kind": "particle",
     "of": "BREAK"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "EMPTY"
    },
    {
     "kind": "particle",
     "of": "SHOOT"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "GET"
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
  "OVER": {
   "word": "OVER",
   "roles": [
    {
     "kind": "particle",
     "of": "CLEAN"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "SCALE"
    },
    {
     "kind": "particle",
     "of": "CROSS"
    },
    {
     "kind": "particle",
     "of": "WRITE"
    },
    {
     "kind": "particle",
     "of": "FLY"
    },
    {
     "kind": "particle",
     "of": "COVER"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "STAMP"
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
     "of": "DIVE"
    },
    {
     "kind": "particle",
     "of": "HOLD"
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
     "of": "GO"
    },
    {
     "kind": "preposition",
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
     "of": "SCALE"
    },
    {
     "kind": "particle",
     "of": "CLOSE"
    },
    {
     "kind": "particle",
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "RIP"
    },
    {
     "kind": "particle",
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "HANG"
    },
    {
     "kind": "particle",
     "of": "FOLD"
    },
    {
     "kind": "particle",
     "of": "COVER"
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
     "of": "PRY"
    },
    {
     "kind": "particle",
     "of": "MAKE"
    },
    {
     "kind": "particle",
     "of": "LEAN"
    },
    {
     "kind": "particle",
     "of": "PROP"
    },
    {
     "kind": "particle",
     "of": "OPEN"
    },
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "PICK"
    },
    {
     "kind": "particle",
     "of": "CALL"
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
     "of": "FIX"
    },
    {
     "kind": "particle",
     "of": "PHONE"
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
     "of": "HOLD"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "TIE"
    },
    {
     "kind": "particle",
     "of": "START"
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
     "of": "GO"
    },
    {
     "kind": "particle",
     "of": "WIND"
    },
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "INTDIR"
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
     "of": "SCALE"
    },
    {
     "kind": "particle",
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "RIP"
    },
    {
     "kind": "particle",
     "of": "BREAK"
    },
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "KICK"
    },
    {
     "kind": "particle",
     "of": "STAMP"
    },
    {
     "kind": "particle",
     "of": "KNOCK"
    },
    {
     "kind": "particle",
     "of": "LIE"
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
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "SLIDE"
    },
    {
     "kind": "particle",
     "of": "DIVE"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "HOLD"
    },
    {
     "kind": "particle",
     "of": "GET"
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
     "of": "GO"
    },
    {
     "kind": "direction",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "INTDIR"
    }
   ]
  },
  "UNDER": {
   "word": "UNDER",
   "roles": [
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "CONCEAL"
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
     "of": "PUSH"
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
     "of": "SLIDE"
    },
    {
     "kind": "particle",
     "of": "STAND"
    },
    {
     "kind": "particle",
     "of": "DUCK"
    },
    {
     "kind": "particle",
     "of": "DIVE"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "preposition",
     "of": null
    }
   ]
  },
  "SCALE": {
   "word": "SCALE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ASCEND": {
   "word": "ASCEND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DESCEND": {
   "word": "DESCEND",
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
  "SHUT": {
   "word": "SHUT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLOSE"
    },
    {
     "kind": "adjective",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "adjective",
     "of": "GRATE"
    },
    {
     "kind": "adjective",
     "of": "TOWER-GRATE"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-DOOR"
    },
    {
     "kind": "adjective",
     "of": "FROOM-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WALLET"
    },
    {
     "kind": "adjective",
     "of": "ROMCASE"
    },
    {
     "kind": "adjective",
     "of": "PEN-MAILBOX"
    },
    {
     "kind": "adjective",
     "of": "BAG"
    },
    {
     "kind": "adjective",
     "of": "MAILBOX"
    },
    {
     "kind": "adjective",
     "of": "PORCH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MANSION-DOOR"
    },
    {
     "kind": "adjective",
     "of": "FLAT-DOOR"
    },
    {
     "kind": "adjective",
     "of": "ABOOK"
    },
    {
     "kind": "adjective",
     "of": "ODD-GATE"
    }
   ]
  },
  "SLAM": {
   "word": "SLAM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLOSE"
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
  "TALLY": {
   "word": "TALLY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "COUNT"
    }
   ]
  },
  "CROSS": {
   "word": "CROSS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TRAVERSE": {
   "word": "TRAVERSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CROSS"
    }
   ]
  },
  "CUT": {
   "word": "CUT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SAW": {
   "word": "SAW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    },
    {
     "kind": "noun",
     "of": "HACKSAW"
    },
    {
     "kind": "adjective",
     "of": "SWISS"
    },
    {
     "kind": "noun",
     "of": "POWER-SAW"
    }
   ]
  },
  "CHOP": {
   "word": "CHOP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "SLASH": {
   "word": "SLASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "SLICE": {
   "word": "SLICE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "GASH": {
   "word": "GASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "LACERATE": {
   "word": "LACERATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "CLEAVE": {
   "word": "CLEAVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "SEVER": {
   "word": "SEVER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "SPLIT": {
   "word": "SPLIT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CUT"
    }
   ]
  },
  "RIP": {
   "word": "RIP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "RIP-CORD"
    },
    {
     "kind": "adjective",
     "of": "RIPCORD"
    }
   ]
  },
  "TEAR": {
   "word": "TEAR",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RIP"
    }
   ]
  },
  "FELL": {
   "word": "FELL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BREAK": {
   "word": "BREAK",
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
     "kind": "verb-synonym",
     "of": "BREAK"
    }
   ]
  },
  "DAMAGE": {
   "word": "DAMAGE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BREAK"
    }
   ]
  },
  "SMASH": {
   "word": "SMASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BREAK"
    }
   ]
  },
  "DEMOLISH": {
   "word": "DEMOLISH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BREAK"
    }
   ]
  },
  "WRECK": {
   "word": "WRECK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BREAK"
    }
   ]
  },
  "CRACK": {
   "word": "CRACK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BREAK"
    }
   ]
  },
  "TRASH": {
   "word": "TRASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BREAK"
    }
   ]
  },
  "CRUMBLE": {
   "word": "CRUMBLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BREAK"
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
  "EXCAVATE": {
   "word": "EXCAVATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DIG"
    }
   ]
  },
  "AT": {
   "word": "AT",
   "roles": [
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
     "of": "HIT"
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
     "of": "AIM"
    },
    {
     "kind": "particle",
     "of": "PUSH"
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
     "of": "NOD"
    },
    {
     "kind": "particle",
     "of": "YELL"
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
     "kind": "noun",
     "of": "GLOBAL-DRINK"
    },
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "SIP": {
   "word": "SIP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DRINK"
    }
   ]
  },
  "GUZZLE": {
   "word": "GUZZLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DRINK"
    }
   ]
  },
  "IMBIBE": {
   "word": "IMBIBE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DRINK"
    }
   ]
  },
  "QUAFF": {
   "word": "QUAFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DRINK"
    }
   ]
  },
  "SWILL": {
   "word": "SWILL",
   "roles": [
    {
     "kind": "verb-synonym",
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
  "DUMP": {
   "word": "DUMP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DROP"
    }
   ]
  },
  "DEPOSIT": {
   "word": "DEPOSIT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DROP"
    },
    {
     "kind": "noun",
     "of": "DFORM"
    },
    {
     "kind": "adjective",
     "of": "DFORM"
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
  "EAT": {
   "word": "EAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "CONSUME": {
   "word": "CONSUME",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
    }
   ]
  },
  "SWALLOW": {
   "word": "SWALLOW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
    }
   ]
  },
  "DEVOUR": {
   "word": "DEVOUR",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
    }
   ]
  },
  "GOBBLE": {
   "word": "GOBBLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
    }
   ]
  },
  "NIBBLE": {
   "word": "NIBBLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
    }
   ]
  },
  "INGEST": {
   "word": "INGEST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
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
     "kind": "noun",
     "of": "AIRPLANE-EXIT"
    },
    {
     "kind": "noun",
     "of": "HATCH"
    }
   ]
  },
  "DEPART": {
   "word": "DEPART",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXIT"
    }
   ]
  },
  "SCRAM": {
   "word": "SCRAM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXIT"
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
  "EXAMINE": {
   "word": "EXAMINE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "X": {
   "word": "X",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "INSPECT": {
   "word": "INSPECT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "DESCRIBE": {
   "word": "DESCRIBE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "STUDY": {
   "word": "STUDY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "SURVEY": {
   "word": "SURVEY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "SEE": {
   "word": "SEE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "TRACE": {
   "word": "TRACE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
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
     "kind": "noun",
     "of": "WRISTWATCH"
    }
   ]
  },
  "OBSERVE": {
   "word": "OBSERVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WATCH"
    }
   ]
  },
  "EXTINGUISH": {
   "word": "EXTINGUISH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DOUSE": {
   "word": "DOUSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXTINGUISH"
    }
   ]
  },
  "QUENCH": {
   "word": "QUENCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXTINGUISH"
    }
   ]
  },
  "SNUFF": {
   "word": "SNUFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXTINGUISH"
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
  "COMPLETE": {
   "word": "COMPLETE",
   "roles": [
    {
     "kind": "verb",
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
  "ERASE": {
   "word": "ERASE",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "TOGETHER": {
   "word": "TOGETHER",
   "roles": [
    {
     "kind": "particle",
     "of": "RUB"
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
     "of": "TWIST"
    }
   ]
  },
  "AGAINST": {
   "word": "AGAINST",
   "roles": [
    {
     "kind": "particle",
     "of": "RUB"
    },
    {
     "kind": "particle",
     "of": "LEAN"
    },
    {
     "kind": "particle",
     "of": "PROP"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "HOLD"
    },
    {
     "kind": "particle",
     "of": "TOUCH"
    },
    {
     "kind": "preposition",
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
    }
   ]
  },
  "SEEK": {
   "word": "SEEK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FIND"
    }
   ]
  },
  "DISCOVER": {
   "word": "DISCOVER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FIND"
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
  "FOLD": {
   "word": "FOLD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WRAP": {
   "word": "WRAP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FOLD"
    }
   ]
  },
  "ROLL": {
   "word": "ROLL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FOLD"
    }
   ]
  },
  "AROUND": {
   "word": "AROUND",
   "roles": [
    {
     "kind": "particle",
     "of": "FOLD"
    },
    {
     "kind": "particle",
     "of": "BOUNCE"
    },
    {
     "kind": "particle",
     "of": "KICK"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "TURN"
    },
    {
     "kind": "particle",
     "of": "TWIST"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "particle",
     "of": "WIND"
    },
    {
     "kind": "preposition",
     "of": null
    }
   ]
  },
  "RETRACT": {
   "word": "RETRACT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "REFUSE": {
   "word": "REFUSE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FLATTEN": {
   "word": "FLATTEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "UNFOLD": {
   "word": "UNFOLD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "UNFLATTEN": {
   "word": "UNFLATTEN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNFOLD"
    }
   ]
  },
  "EXTEND": {
   "word": "EXTEND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNFOLD"
    }
   ]
  },
  "UNROLL": {
   "word": "UNROLL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNFOLD"
    }
   ]
  },
  "UNTANGLE": {
   "word": "UNTANGLE",
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
    }
   ]
  },
  "PURSUE": {
   "word": "PURSUE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "CHASE": {
   "word": "CHASE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "HAND": {
   "word": "HAND",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "GUN"
    },
    {
     "kind": "adjective",
     "of": "GRENADE"
    },
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "GIVE": {
   "word": "GIVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
    }
   ]
  },
  "DONATE": {
   "word": "DONATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
    }
   ]
  },
  "DELIVER": {
   "word": "DELIVER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
    }
   ]
  },
  "OFFER": {
   "word": "OFFER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
    }
   ]
  },
  "BESTOW": {
   "word": "BESTOW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
    }
   ]
  },
  "PRESENT": {
   "word": "PRESENT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
    }
   ]
  },
  "SELL": {
   "word": "SELL",
   "roles": [
    {
     "kind": "verb",
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
  "DISPLAY": {
   "word": "DISPLAY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SHOW"
    }
   ]
  },
  "FEED": {
   "word": "FEED",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "BAG"
    },
    {
     "kind": "noun",
     "of": "TREATS"
    }
   ]
  },
  "HEAR": {
   "word": "HEAR",
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
     "kind": "noun",
     "of": "HELLO-OBJECT"
    }
   ]
  },
  "HI": {
   "word": "HI",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELLO"
    },
    {
     "kind": "noun",
     "of": "HELLO-OBJECT"
    }
   ]
  },
  "GREETINGS": {
   "word": "GREETINGS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELLO"
    }
   ]
  },
  "GREET": {
   "word": "GREET",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELLO"
    }
   ]
  },
  "SALUTE": {
   "word": "SALUTE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELLO"
    }
   ]
  },
  "BYE": {
   "word": "BYE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "HELLO-OBJECT"
    }
   ]
  },
  "GOODBYE": {
   "word": "GOODBYE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BYE"
    },
    {
     "kind": "noun",
     "of": "HELLO-OBJECT"
    }
   ]
  },
  "FAREWELL": {
   "word": "FAREWELL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BYE"
    }
   ]
  },
  "HINT": {
   "word": "HINT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "HINTS": {
   "word": "HINTS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HINT"
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
  "AID": {
   "word": "AID",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELP"
    },
    {
     "kind": "noun",
     "of": "TRUMPET"
    }
   ]
  },
  "RESCUE": {
   "word": "RESCUE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELP"
    }
   ]
  },
  "PRESERVE": {
   "word": "PRESERVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELP"
    }
   ]
  },
  "CONCEAL": {
   "word": "CONCEAL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BEHIND": {
   "word": "BEHIND",
   "roles": [
    {
     "kind": "particle",
     "of": "CONCEAL"
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
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "GO"
    },
    {
     "kind": "preposition",
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
    }
   ]
  },
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BLOCK": {
   "word": "BLOCK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "COVER"
    }
   ]
  },
  "SHIELD": {
   "word": "SHIELD",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "COVER"
    }
   ]
  },
  "INFLATE": {
   "word": "INFLATE",
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
  "LEAP": {
   "word": "LEAP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "JUMP"
    }
   ]
  },
  "BOUND": {
   "word": "BOUND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "JUMP"
    }
   ]
  },
  "HURDLE": {
   "word": "HURDLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "JUMP"
    }
   ]
  },
  "VAULT": {
   "word": "VAULT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "JUMP"
    }
   ]
  },
  "BOUNCE": {
   "word": "BOUNCE",
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
    }
   ]
  },
  "STAMP": {
   "word": "STAMP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "STAMPS"
    },
    {
     "kind": "noun",
     "of": "LEAFLET"
    }
   ]
  },
  "TRAMPLE": {
   "word": "TRAMPLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "STAMP"
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
  "MURDER": {
   "word": "MURDER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KILL"
    }
   ]
  },
  "SLAY": {
   "word": "SLAY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KILL"
    }
   ]
  },
  "STAB": {
   "word": "STAB",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KILL"
    }
   ]
  },
  "PUNCH": {
   "word": "PUNCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KILL"
    }
   ]
  },
  "WOUND": {
   "word": "WOUND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KILL"
    }
   ]
  },
  "HIT": {
   "word": "HIT",
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
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "WHACK": {
   "word": "WHACK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "STRIKE": {
   "word": "STRIKE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
    }
   ]
  },
  "SWAT": {
   "word": "SWAT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIT"
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
  "SMOOCH": {
   "word": "SMOOCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KISS"
    }
   ]
  },
  "KNOCK": {
   "word": "KNOCK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RAP": {
   "word": "RAP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KNOCK"
    }
   ]
  },
  "POUND": {
   "word": "POUND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KNOCK"
    }
   ]
  },
  "LIE": {
   "word": "LIE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RECLINE": {
   "word": "RECLINE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LIE"
    },
    {
     "kind": "adjective",
     "of": "RECLINE-BUTTON"
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
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "noun",
     "of": "LFENCE"
    }
   ]
  },
  "LOOK": {
   "word": "LOOK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "L": {
   "word": "L",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
    }
   ]
  },
  "STARE": {
   "word": "STARE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
    }
   ]
  },
  "GAZE": {
   "word": "GAZE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
    }
   ]
  },
  "PEER": {
   "word": "PEER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
    }
   ]
  },
  "PEEK": {
   "word": "PEEK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
    }
   ]
  },
  "ADJUST": {
   "word": "ADJUST",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LOOSEN": {
   "word": "LOOSEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "JIGGLE": {
   "word": "JIGGLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOSEN"
    }
   ]
  },
  "WIGGLE": {
   "word": "WIGGLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOSEN"
    }
   ]
  },
  "WOBBLE": {
   "word": "WOBBLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOSEN"
    }
   ]
  },
  "HOOK": {
   "word": "HOOK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOSEN"
    }
   ]
  },
  "PRY": {
   "word": "PRY",
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
  "SHIFT": {
   "word": "SHIFT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "MOVE"
    }
   ]
  },
  "DISLOCATE": {
   "word": "DISLOCATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "MOVE"
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
  "PROP": {
   "word": "PROP",
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
  "UNSEAL": {
   "word": "UNSEAL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "OPEN"
    }
   ]
  },
  "DISASSEMBLE": {
   "word": "DISASSEMBLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "OPEN"
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
    }
   ]
  },
  "TUG": {
   "word": "TUG",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PULL"
    }
   ]
  },
  "DRAG": {
   "word": "DRAG",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PULL"
    }
   ]
  },
  "YANK": {
   "word": "YANK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PULL"
    }
   ]
  },
  "APART": {
   "word": "APART",
   "roles": [
    {
     "kind": "particle",
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "HOLD"
    }
   ]
  },
  "PAY": {
   "word": "PAY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "AIRPHONE"
    }
   ]
  },
  "BRIBE": {
   "word": "BRIBE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PAY"
    }
   ]
  },
  "ENTICE": {
   "word": "ENTICE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PAY"
    }
   ]
  },
  "RENUMERATE": {
   "word": "RENUMERATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PAY"
    }
   ]
  },
  "CASH": {
   "word": "CASH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "REGISTER"
    },
    {
     "kind": "noun",
     "of": "MONEY"
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
  "FIDDLE": {
   "word": "FIDDLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLAY"
    }
   ]
  },
  "TOY": {
   "word": "TOY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLAY"
    }
   ]
  },
  "CAVORT": {
   "word": "CAVORT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLAY"
    }
   ]
  },
  "POINT": {
   "word": "POINT",
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
     "kind": "adjective",
     "of": "CALL-BUTTON"
    }
   ]
  },
  "AIM": {
   "word": "AIM",
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
  "JAB": {
   "word": "JAB",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "POKE"
    }
   ]
  },
  "BLIND": {
   "word": "BLIND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "POKE"
    }
   ]
  },
  "POUR": {
   "word": "POUR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SPILL": {
   "word": "SPILL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "POUR"
    }
   ]
  },
  "POCKET": {
   "word": "POCKET",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "SEAT-POCKET"
    },
    {
     "kind": "noun",
     "of": "POCKET"
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
  "CLEAR": {
   "word": "CLEAR",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EMPTY"
    }
   ]
  },
  "PUSH": {
   "word": "PUSH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PRESS": {
   "word": "PRESS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUSH"
    }
   ]
  },
  "SHOVE": {
   "word": "SHOVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUSH"
    }
   ]
  },
  "THRUST": {
   "word": "THRUST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUSH"
    }
   ]
  },
  "NUDGE": {
   "word": "NUDGE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUSH"
    }
   ]
  },
  "STICK": {
   "word": "STICK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUSH"
    },
    {
     "kind": "noun",
     "of": "EXPLOSIVES"
    }
   ]
  },
  "PUT": {
   "word": "PUT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "STUFF": {
   "word": "STUFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUT"
    }
   ]
  },
  "INSERT": {
   "word": "INSERT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUT"
    }
   ]
  },
  "PLACE": {
   "word": "PLACE",
   "roles": [
    {
     "kind": "verb-synonym",
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
     "kind": "verb-synonym",
     "of": "PUT"
    }
   ]
  },
  "STASH": {
   "word": "STASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUT"
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
     "kind": "noun",
     "of": "PHONES"
    },
    {
     "kind": "noun",
     "of": "POWER-SAW"
    },
    {
     "kind": "noun",
     "of": "MPLUG"
    }
   ]
  },
  "CONNECT": {
   "word": "CONNECT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ATTACH": {
   "word": "ATTACH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CONNECT"
    }
   ]
  },
  "RECONNECT": {
   "word": "RECONNECT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "REATTACH": {
   "word": "REATTACH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RECONNECT"
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
  "DISCONNEC": {
   "word": "DISCONNEC",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNPLUG"
    }
   ]
  },
  "DETACH": {
   "word": "DETACH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNPLUG"
    }
   ]
  },
  "UNATTACH": {
   "word": "UNATTACH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNPLUG"
    }
   ]
  },
  "DISENGAGE": {
   "word": "DISENGAGE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNPLUG"
    }
   ]
  },
  "STOW": {
   "word": "STOW",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "LIFT": {
   "word": "LIFT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RAISE"
    }
   ]
  },
  "ELEVATE": {
   "word": "ELEVATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RAISE"
    }
   ]
  },
  "HOIST": {
   "word": "HOIST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RAISE"
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
  "GROPE": {
   "word": "GROPE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "REACH"
    }
   ]
  },
  "READ": {
   "word": "READ",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SKIM": {
   "word": "SKIM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "READ"
    }
   ]
  },
  "BROWSE": {
   "word": "BROWSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "READ"
    }
   ]
  },
  "LEAF": {
   "word": "LEAF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "READ"
    },
    {
     "kind": "noun",
     "of": "PAGE-3"
    },
    {
     "kind": "noun",
     "of": "PAGE-2"
    },
    {
     "kind": "noun",
     "of": "PAGE-1"
    }
   ]
  },
  "RELEASE": {
   "word": "RELEASE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FREE": {
   "word": "FREE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RELEASE"
    }
   ]
  },
  "UNTIE": {
   "word": "UNTIE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "UNDO": {
   "word": "UNDO",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "UNFASTEN": {
   "word": "UNFASTEN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "UNHOOK": {
   "word": "UNHOOK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNTIE"
    }
   ]
  },
  "REPAIR": {
   "word": "REPAIR",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SERVICE": {
   "word": "SERVICE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "REPAIR"
    },
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "FLYER"
    },
    {
     "kind": "adjective",
     "of": "COUPON"
    },
    {
     "kind": "adjective",
     "of": "ENVELOPE"
    }
   ]
  },
  "FIX": {
   "word": "FIX",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WORK": {
   "word": "WORK",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "RIDE": {
   "word": "RIDE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BOW": {
   "word": "BOW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "KNEEL": {
   "word": "KNEEL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BOW"
    }
   ]
  },
  "GROVEL": {
   "word": "GROVEL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BOW"
    }
   ]
  },
  "GENUFLECT": {
   "word": "GENUFLECT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BOW"
    }
   ]
  },
  "BEFORE": {
   "word": "BEFORE",
   "roles": [
    {
     "kind": "particle",
     "of": "BOW"
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
  "TALK": {
   "word": "TALK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "SPEAK": {
   "word": "SPEAK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "UTTER": {
   "word": "UTTER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "PROCLAIM": {
   "word": "PROCLAIM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "MAYBE": {
   "word": "MAYBE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "PHONE": {
   "word": "PHONE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "RECEPTACLE"
    },
    {
     "kind": "noun",
     "of": "AIRPHONE"
    },
    {
     "kind": "adjective",
     "of": "AIRPHONE"
    },
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "TELEPHONE": {
   "word": "TELEPHONE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PHONE"
    },
    {
     "kind": "noun",
     "of": "AIRPHONE"
    },
    {
     "kind": "adjective",
     "of": "AIRPHONE"
    },
    {
     "kind": "noun",
     "of": "MACHINE"
    },
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "DIAL": {
   "word": "DIAL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PHONE"
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
  "RUMMAGE": {
   "word": "RUMMAGE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "FRISK": {
   "word": "FRISK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "RANSACK": {
   "word": "RANSACK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SEARCH"
    }
   ]
  },
  "SIFT": {
   "word": "SIFT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SEARCH"
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
  "MAIL": {
   "word": "MAIL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SEND"
    },
    {
     "kind": "noun",
     "of": "PARAMAIL"
    },
    {
     "kind": "noun",
     "of": "MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "MAILBOX"
    },
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "noun",
     "of": "MOUSYMAIL"
    },
    {
     "kind": "noun",
     "of": "LLAMA-MAIL"
    },
    {
     "kind": "noun",
     "of": "SHITMAIL"
    },
    {
     "kind": "noun",
     "of": "FLYER"
    },
    {
     "kind": "noun",
     "of": "COUPON"
    },
    {
     "kind": "noun",
     "of": "ENVELOPE"
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
  "JOSTLE": {
   "word": "JOSTLE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RATTLE": {
   "word": "RATTLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "JOSTLE"
    }
   ]
  },
  "SHOOT": {
   "word": "SHOOT",
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
    }
   ]
  },
  "SETTLE": {
   "word": "SETTLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SIT"
    }
   ]
  },
  "SQUAT": {
   "word": "SQUAT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SIT"
    }
   ]
  },
  "CROUCH": {
   "word": "CROUCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SIT"
    }
   ]
  },
  "SLEEP": {
   "word": "SLEEP",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "NAP": {
   "word": "NAP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SLEEP"
    }
   ]
  },
  "SNOOZE": {
   "word": "SNOOZE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SLEEP"
    }
   ]
  },
  "REST": {
   "word": "REST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SLEEP"
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
  "SNIFF": {
   "word": "SNIFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SMELL"
    }
   ]
  },
  "WHIFF": {
   "word": "WHIFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SMELL"
    }
   ]
  },
  "INHALE": {
   "word": "INHALE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SMELL"
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
  "WHIRL": {
   "word": "WHIRL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SPIN"
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
  "RISE": {
   "word": "RISE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "STAND"
    }
   ]
  },
  "DUCK": {
   "word": "DUCK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "voc",
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
    }
   ]
  },
  "WADE": {
   "word": "WADE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SWIM"
    }
   ]
  },
  "DIVE": {
   "word": "DIVE",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "TAKE": {
   "word": "TAKE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "GRAB": {
   "word": "GRAB",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "KEEP": {
   "word": "KEEP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "CATCH": {
   "word": "CATCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "CARRY": {
   "word": "CARRY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "SEIZE": {
   "word": "SEIZE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "STEAL": {
   "word": "STEAL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "CONFISCATE": {
   "word": "CONFISCATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "SNATCH": {
   "word": "SNATCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "PRINCE": {
   "word": "PRINCE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
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
  "HOLD": {
   "word": "HOLD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "GET": {
   "word": "GET",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "BRING": {
   "word": "BRING",
   "roles": [
    {
     "kind": "verb",
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
  "MOUNT": {
   "word": "MOUNT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "BOARD"
    }
   ]
  },
  "EMBARK": {
   "word": "EMBARK",
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
  "TASTE": {
   "word": "TASTE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "LICK": {
   "word": "LICK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TASTE"
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
  "ADVISE": {
   "word": "ADVISE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TELL"
    }
   ]
  },
  "INFORM": {
   "word": "INFORM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TELL"
    }
   ]
  },
  "THANK": {
   "word": "THANK",
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
     "kind": "verb-synonym",
     "of": "THANK"
    }
   ]
  },
  "THROW": {
   "word": "THROW",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TOSS": {
   "word": "TOSS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "THROW"
    }
   ]
  },
  "HURL": {
   "word": "HURL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "THROW"
    }
   ]
  },
  "CHUCK": {
   "word": "CHUCK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "THROW"
    }
   ]
  },
  "FLING": {
   "word": "FLING",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "THROW"
    }
   ]
  },
  "PITCH": {
   "word": "PITCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "THROW"
    }
   ]
  },
  "TIE": {
   "word": "TIE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FASTEN": {
   "word": "FASTEN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TIE"
    },
    {
     "kind": "adjective",
     "of": "BELTLIGHT"
    }
   ]
  },
  "SECURE": {
   "word": "SECURE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TIE"
    }
   ]
  },
  "BUCKLE": {
   "word": "BUCKLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TIE"
    },
    {
     "kind": "noun",
     "of": "SEATBELT"
    }
   ]
  },
  "SHORT": {
   "word": "SHORT",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "DISTURB": {
   "word": "DISTURB",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PET": {
   "word": "PET",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PAT": {
   "word": "PAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FEEL": {
   "word": "FEEL",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "ROTATE": {
   "word": "ROTATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TURN"
    }
   ]
  },
  "FLIP": {
   "word": "FLIP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TURN"
    }
   ]
  },
  "TOGGLE": {
   "word": "TOGGLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TURN"
    }
   ]
  },
  "RECALL": {
   "word": "RECALL",
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
  "TWIST": {
   "word": "TWIST",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "START": {
   "word": "START",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "HALT": {
   "word": "HALT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "STOP"
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
  "USE": {
   "word": "USE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "EMPLOY": {
   "word": "EMPLOY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "USE"
    }
   ]
  },
  "EXPLOIT": {
   "word": "EXPLOIT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "USE"
    }
   ]
  },
  "OPERATE": {
   "word": "OPERATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "USE"
    }
   ]
  },
  "PEDAL": {
   "word": "PEDAL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "USE"
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
  "LOITER": {
   "word": "LOITER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAIT"
    }
   ]
  },
  "Z": {
   "word": "Z",
   "roles": [
    {
     "kind": "verb-synonym",
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
    }
   ]
  },
  "AWAKE": {
   "word": "AWAKE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAKE"
    }
   ]
  },
  "AWAKEN": {
   "word": "AWAKEN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAKE"
    }
   ]
  },
  "ROUSE": {
   "word": "ROUSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAKE"
    }
   ]
  },
  "SCARE": {
   "word": "SCARE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "AROUSE": {
   "word": "AROUSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SCARE"
    }
   ]
  },
  "STARTLE": {
   "word": "STARTLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SCARE"
    }
   ]
  },
  "SURPRISE": {
   "word": "SURPRISE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SCARE"
    }
   ]
  },
  "FRIGHTEN": {
   "word": "FRIGHTEN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SCARE"
    }
   ]
  },
  "WALK": {
   "word": "WALK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PROCEED": {
   "word": "PROCEED",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "STEP": {
   "word": "STEP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "TRUDGE": {
   "word": "TRUDGE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "HIKE": {
   "word": "HIKE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "TRAMP": {
   "word": "TRAMP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "CRAWL": {
   "word": "CRAWL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "SAUNTER": {
   "word": "SAUNTER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "RUN": {
   "word": "RUN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "JOG": {
   "word": "JOG",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "SKIP": {
   "word": "SKIP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "HOP": {
   "word": "HOP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "ADVANCE": {
   "word": "ADVANCE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "STROLL": {
   "word": "STROLL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WALK"
    }
   ]
  },
  "APPROACH": {
   "word": "APPROACH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "GO": {
   "word": "GO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RETURN": {
   "word": "RETURN",
   "roles": [
    {
     "kind": "verb",
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
    }
   ]
  },
  "HAIL": {
   "word": "HAIL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "NOD": {
   "word": "NOD",
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
     "kind": "verb-synonym",
     "of": "NOD"
    }
   ]
  },
  "LAUGH": {
   "word": "LAUGH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "NOD"
    }
   ]
  },
  "GRIN": {
   "word": "GRIN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "NOD"
    }
   ]
  },
  "SNEER": {
   "word": "SNEER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "NOD"
    }
   ]
  },
  "MOTION": {
   "word": "MOTION",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "NOD"
    }
   ]
  },
  "BECKON": {
   "word": "BECKON",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "NOD"
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
  "DON": {
   "word": "DON",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WEAR"
    }
   ]
  },
  "WHAT": {
   "word": "WHAT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHATS": {
   "word": "WHATS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WHAT"
    }
   ]
  },
  "WHAT'S": {
   "word": "WHAT'S",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WHAT"
    }
   ]
  },
  "WHERE": {
   "word": "WHERE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHERES": {
   "word": "WHERES",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WHERE"
    }
   ]
  },
  "WHERE'S": {
   "word": "WHERE'S",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WHERE"
    }
   ]
  },
  "WHO": {
   "word": "WHO",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WHOS": {
   "word": "WHOS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WHO"
    }
   ]
  },
  "WHO'S": {
   "word": "WHO'S",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WHO"
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
  "YELL": {
   "word": "YELL",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SCREAM": {
   "word": "SCREAM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YELL"
    }
   ]
  },
  "SHOUT": {
   "word": "SHOUT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YELL"
    }
   ]
  },
  "HOWL": {
   "word": "HOWL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YELL"
    }
   ]
  },
  "YES": {
   "word": "YES",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "Y": {
   "word": "Y",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "AYE": {
   "word": "AYE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "OK": {
   "word": "OK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "OKAY": {
   "word": "OKAY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "SURE": {
   "word": "SURE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "YUP": {
   "word": "YUP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "AFFIRMATIVE": {
   "word": "AFFIRMATIVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "POSITIVE": {
   "word": "POSITIVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "YEAH": {
   "word": "YEAH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "NO": {
   "word": "NO",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "NAY": {
   "word": "NAY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "NEGATIVE": {
   "word": "NEGATIVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "NOPE": {
   "word": "NOPE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "NAW": {
   "word": "NAW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
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
  "DRESS": {
   "word": "DRESS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "UNDRESS": {
   "word": "UNDRESS",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DISROBE": {
   "word": "DISROBE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNDRESS"
    }
   ]
  },
  "STRIP": {
   "word": "STRIP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "UNDRESS"
    },
    {
     "kind": "noun",
     "of": "LANDING-STRIP"
    }
   ]
  },
  "ESCAPE": {
   "word": "ESCAPE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "FLEE": {
   "word": "FLEE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ESCAPE"
    }
   ]
  },
  "STINGLAI": {
   "word": "STINGLAI",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "CHUTE"
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
     "of": "INTDIR"
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
     "of": "INTDIR"
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
     "of": "INTDIR"
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
     "of": "INTDIR"
    }
   ]
  },
  "W": {
   "word": "W",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "WEST"
    },
    {
     "kind": "adjective",
     "of": "INTDIR"
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
  "NORTHEAST": {
   "word": "NORTHEAST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NE"
    }
   ]
  },
  "NW": {
   "word": "NW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NE"
    }
   ]
  },
  "NORTHWEST": {
   "word": "NORTHWEST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NE"
    }
   ]
  },
  "SE": {
   "word": "SE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NE"
    }
   ]
  },
  "SOUTHEAST": {
   "word": "SOUTHEAST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NE"
    }
   ]
  },
  "SW": {
   "word": "SW",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NE"
    }
   ]
  },
  "SOUTHWEST": {
   "word": "SOUTHWEST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "NE"
    }
   ]
  },
  "TOWARD": {
   "word": "TOWARD",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "TO"
    }
   ]
  },
  "TOWARDS": {
   "word": "TOWARDS",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "TO"
    }
   ]
  },
  "USING": {
   "word": "USING",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "WITH"
    }
   ]
  },
  "THRU": {
   "word": "THRU",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "THROUGH"
    }
   ]
  },
  "ONTO": {
   "word": "ONTO",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "ON"
    }
   ]
  },
  "ABOARD": {
   "word": "ABOARD",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "ON"
    }
   ]
  },
  "UPON": {
   "word": "UPON",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "ON"
    }
   ]
  },
  "INSIDE": {
   "word": "INSIDE",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "IN"
    }
   ]
  },
  "INTO": {
   "word": "INTO",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "IN"
    }
   ]
  },
  "BETWEEN": {
   "word": "BETWEEN",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "IN"
    }
   ]
  },
  "WITHIN": {
   "word": "WITHIN",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "IN"
    }
   ]
  },
  "OUTSIDE": {
   "word": "OUTSIDE",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "OUT"
    }
   ]
  },
  "BELOW": {
   "word": "BELOW",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "UNDER"
    }
   ]
  },
  "BENEATH": {
   "word": "BENEATH",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "UNDER"
    }
   ]
  },
  "UNDERNEATH": {
   "word": "UNDERNEATH",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "UNDER"
    }
   ]
  },
  "ALONG": {
   "word": "ALONG",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "AROUND"
    }
   ]
  },
  "ACROSS": {
   "word": "ACROSS",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "OVER"
    }
   ]
  },
  "BEYOND": {
   "word": "BEYOND",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "BEHIND"
    }
   ]
  },
  "NEAR": {
   "word": "NEAR",
   "roles": [
    {
     "kind": "prep-synonym",
     "of": "AGAINST"
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
  "PM": {
   "word": "PM",
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
  "BOTH": {
   "word": "BOTH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "EVERYTHING": {
   "word": "EVERYTHING",
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
  "?": {
   "word": "?",
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
  "#": {
   "word": "#",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    },
    {
     "kind": "voc-buzz",
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
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-DINNER"
    }
   ]
  },
  "SO": {
   "word": "SO",
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
  "RAPIDLY": {
   "word": "RAPIDLY",
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
  "DR": {
   "word": "DR",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "MISS": {
   "word": "MISS",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "DOCTOR": {
   "word": "DOCTOR",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ANY": {
   "word": "ANY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "COULD": {
   "word": "COULD",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "DID": {
   "word": "DID",
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
  "HAS": {
   "word": "HAS",
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
  "HE'S": {
   "word": "HE'S",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "HOW": {
   "word": "HOW",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "HOW'S": {
   "word": "HOW'S",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "IT'S": {
   "word": "IT'S",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "I'LL": {
   "word": "I'LL",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "I'M": {
   "word": "I'M",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "I'VE": {
   "word": "I'VE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "LET'S": {
   "word": "LET'S",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SHALL": {
   "word": "SHALL",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SHE'S": {
   "word": "SHE'S",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SHOULD": {
   "word": "SHOULD",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THAT'S": {
   "word": "THAT'S",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THEY'RE": {
   "word": "THEY'RE",
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
  "WE'RE": {
   "word": "WE'RE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WHEN": {
   "word": "WHEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WHEN'S": {
   "word": "WHEN'S",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WHICH": {
   "word": "WHICH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WHY": {
   "word": "WHY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WILL": {
   "word": "WILL",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WON'T": {
   "word": "WON'T",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "WOULD": {
   "word": "WOULD",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "YOU'RE": {
   "word": "YOU'RE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ZERO": {
   "word": "ZERO",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FOUR": {
   "word": "FOUR",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FIVE": {
   "word": "FIVE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SIX": {
   "word": "SIX",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SEVEN": {
   "word": "SEVEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "EIGHT": {
   "word": "EIGHT",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "NINE": {
   "word": "NINE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "TEN": {
   "word": "TEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ELEVEN": {
   "word": "ELEVEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "TWELVE": {
   "word": "TWELVE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FOURTEEN": {
   "word": "FOURTEEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FIFTEEN": {
   "word": "FIFTEEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SIXTEEN": {
   "word": "SIXTEEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SEVENTEEN": {
   "word": "SEVENTEEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "EIGHTEEN": {
   "word": "EIGHTEEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "NINETEEN": {
   "word": "NINETEEN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "TWENTY": {
   "word": "TWENTY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THIRTY": {
   "word": "THIRTY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FORTY": {
   "word": "FORTY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FIFTY": {
   "word": "FIFTY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SIXTY": {
   "word": "SIXTY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SEVENTY": {
   "word": "SEVENTY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "EIGHTY": {
   "word": "EIGHTY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "NINETY": {
   "word": "NINETY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "HUNDRED": {
   "word": "HUNDRED",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THOUSAND": {
   "word": "THOUSAND",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "MILLION": {
   "word": "MILLION",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "BILLION": {
   "word": "BILLION",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FUCK": {
   "word": "FUCK",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FUCKED": {
   "word": "FUCKED",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CURSE": {
   "word": "CURSE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "GODDAMNED": {
   "word": "GODDAMNED",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CUSS": {
   "word": "CUSS",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "DAMN": {
   "word": "DAMN",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SHIT": {
   "word": "SHIT",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CRAP": {
   "word": "CRAP",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ASSHOLE": {
   "word": "ASSHOLE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ASS": {
   "word": "ASS",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "CUNT": {
   "word": "CUNT",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SHITHEAD": {
   "word": "SHITHEAD",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "PISS": {
   "word": "PISS",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SUCK": {
   "word": "SUCK",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "BASTARD": {
   "word": "BASTARD",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FUCKING": {
   "word": "FUCKING",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "DAMNED": {
   "word": "DAMNED",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "PEE": {
   "word": "PEE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "COCKSUCKER": {
   "word": "COCKSUCKER",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "BITCH": {
   "word": "BITCH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ZORK": {
   "word": "ZORK",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "XYZZY": {
   "word": "XYZZY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "GRUE": {
   "word": "GRUE",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "PLUGH": {
   "word": "PLUGH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "YOHO": {
   "word": "YOHO",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SAILOR": {
   "word": "SAILOR",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "NEXT": {
   "word": "NEXT",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "PROBLEM": {
   "word": "PROBLEM",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "COMPLAINT": {
   "word": "COMPLAINT",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "TROUBLE": {
   "word": "TROUBLE",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "ADDRESS": {
   "word": "ADDRESS",
   "roles": [
    {
     "kind": "voc",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "WFORM"
    },
    {
     "kind": "noun",
     "of": "MAGAZINE"
    },
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "noun",
     "of": "ABOOK"
    },
    {
     "kind": "adjective",
     "of": "ABOOK"
    },
    {
     "kind": "noun",
     "of": "STREETNUMBERS"
    },
    {
     "kind": "noun",
     "of": "MOUSYMAIL"
    },
    {
     "kind": "noun",
     "of": "FLYER"
    },
    {
     "kind": "noun",
     "of": "ENVELOPE"
    }
   ]
  },
  "CUSTOMER": {
   "word": "CUSTOMER",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "FORMS": {
   "word": "FORMS",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "MUZAK": {
   "word": "MUZAK",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "AIRPORT-MUSIC"
    },
    {
     "kind": "adjective",
     "of": "AIRPORT-MUSIC"
    }
   ]
  },
  "PARROT": {
   "word": "PARROT",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "BANKSOUND"
    }
   ]
  },
  "DOG": {
   "word": "DOG",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "BANKSOUND"
    }
   ]
  },
  "RAW": {
   "word": "RAW",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "RARE": {
   "word": "RARE",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "MEDIUM": {
   "word": "MEDIUM",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "WELL": {
   "word": "WELL",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "WELL-DONE": {
   "word": "WELL-DONE",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "SPECIAL": {
   "word": "SPECIAL",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "FRIES": {
   "word": "FRIES",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "CHEDDAR": {
   "word": "CHEDDAR",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "SALAD": {
   "word": "SALAD",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "CHEESE": {
   "word": "CHEESE",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "ISLAND": {
   "word": "ISLAND",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "VINAIGRETTE": {
   "word": "VINAIGRETTE",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "DIET": {
   "word": "DIET",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "REGULAR": {
   "word": "REGULAR",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "BAKED": {
   "word": "BAKED",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "POTATO": {
   "word": "POTATO",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "BEER": {
   "word": "BEER",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "WINE": {
   "word": "WINE",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "SODA": {
   "word": "SODA",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "JUICE": {
   "word": "JUICE",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "MHALL"
    }
   ]
  },
  "LIGHT": {
   "word": "LIGHT",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "noun",
     "of": "SEATBELT-LIGHT"
    },
    {
     "kind": "adjective",
     "of": "LIGHT-BUTTON"
    }
   ]
  },
  "ALE": {
   "word": "ALE",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "DRAUGHT": {
   "word": "DRAUGHT",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "RIP-CORD"
    },
    {
     "kind": "adjective",
     "of": "RWIRE"
    },
    {
     "kind": "adjective",
     "of": "RIPCORD"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "SWEET": {
   "word": "SWEET",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "APPLE": {
   "word": "APPLE",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "FLYER"
    },
    {
     "kind": "adjective",
     "of": "COUPON"
    },
    {
     "kind": "adjective",
     "of": "ENVELOPE"
    }
   ]
  },
  "LEMON": {
   "word": "LEMON",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "LIME": {
   "word": "LIME",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "LEMON-LIME": {
   "word": "LEMON-LIME",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "DISTILLED": {
   "word": "DISTILLED",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "MINERAL": {
   "word": "MINERAL",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "WITHOUT": {
   "word": "WITHOUT",
   "roles": [
    {
     "kind": "voc-prep",
     "of": null
    }
   ]
  },
  "COLA": {
   "word": "COLA",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "GRAPEFRUIT": {
   "word": "GRAPEFRUIT",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "MANGO": {
   "word": "MANGO",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "COURTESY": {
   "word": "COURTESY",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "WORKMAN": {
   "word": "WORKMAN",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "SEAT": {
   "word": "SEAT",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    },
    {
     "kind": "noun",
     "of": "GLOBAL-SEAT"
    },
    {
     "kind": "adjective",
     "of": "SEAT-POCKET"
    },
    {
     "kind": "adjective",
     "of": "SEATBELT"
    },
    {
     "kind": "adjective",
     "of": "BELTLIGHT"
    },
    {
     "kind": "adjective",
     "of": "SEAT-TABLE"
    }
   ]
  },
  "REAR": {
   "word": "REAR",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "LOBBY": {
   "word": "LOBBY",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "STEWARD": {
   "word": "STEWARD",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "GLOBAL-ATTENDANT"
    }
   ]
  },
  "STEWARDESS": {
   "word": "STEWARDESS",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "A-ATTENDANT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-ATTENDANT"
    },
    {
     "kind": "noun",
     "of": "STEWARDESS"
    }
   ]
  },
  "DIRTY": {
   "word": "DIRTY",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "SPOTLESS": {
   "word": "SPOTLESS",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "PEKING": {
   "word": "PEKING",
   "roles": [
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "CHICKEN": {
   "word": "CHICKEN",
   "roles": [
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "KIEV": {
   "word": "KIEV",
   "roles": [
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "CONNECTED": {
   "word": "CONNECTED",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "RADIO": {
   "word": "RADIO",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    },
    {
     "kind": "noun",
     "of": "CONSOLE"
    },
    {
     "kind": "noun",
     "of": "RADIO"
    }
   ]
  },
  "MY": {
   "word": "MY",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "REQUIREMENTS"
    },
    {
     "kind": "adjective",
     "of": "VISA"
    },
    {
     "kind": "adjective",
     "of": "SEATBELT"
    },
    {
     "kind": "adjective",
     "of": "IFORM"
    },
    {
     "kind": "adjective",
     "of": "TEETH"
    },
    {
     "kind": "adjective",
     "of": "AIRLINE-MEAL"
    },
    {
     "kind": "adjective",
     "of": "HANDS"
    },
    {
     "kind": "adjective",
     "of": "FEET"
    },
    {
     "kind": "adjective",
     "of": "MOUTH"
    },
    {
     "kind": "adjective",
     "of": "EYES"
    },
    {
     "kind": "adjective",
     "of": "ME"
    },
    {
     "kind": "adjective",
     "of": "CLOTHES"
    },
    {
     "kind": "adjective",
     "of": "POCKET"
    },
    {
     "kind": "adjective",
     "of": "WRISTWATCH"
    },
    {
     "kind": "adjective",
     "of": "YOUR-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "OLD-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "WALLET"
    },
    {
     "kind": "adjective",
     "of": "BEEZER"
    },
    {
     "kind": "adjective",
     "of": "EXCESS"
    },
    {
     "kind": "adjective",
     "of": "COMPUTER"
    },
    {
     "kind": "adjective",
     "of": "MAILBOX"
    }
   ]
  },
  "BRAIN": {
   "word": "BRAIN",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "BBC": {
   "word": "BBC",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "THERE'S": {
   "word": "THERE'S",
   "roles": [
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "OUR": {
   "word": "OUR",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "CONTROLLING": {
   "word": "CONTROLLING",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "LONDON": {
   "word": "LONDON",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "ZZSTREET": {
   "word": "ZZSTREET",
   "roles": [
    {
     "kind": "voc-noun",
     "of": null
    }
   ]
  },
  "REAGAN": {
   "word": "REAGAN",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "GORBACHEV": {
   "word": "GORBACHEV",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    }
   ]
  },
  "UNLOCKED": {
   "word": "UNLOCKED",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    }
   ]
  },
  "FILET": {
   "word": "FILET",
   "roles": [
    {
     "kind": "voc",
     "of": null
    }
   ]
  },
  "LAVATORY": {
   "word": "LAVATORY",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "A-LAVATORY-DOOR"
    },
    {
     "kind": "adjective",
     "of": "SINK"
    },
    {
     "kind": "noun",
     "of": "LAVATORY"
    },
    {
     "kind": "adjective",
     "of": "LAV-DOOR"
    }
   ]
  },
  "LAV": {
   "word": "LAV",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    },
    {
     "kind": "noun",
     "of": "LAVATORY"
    }
   ]
  },
  "BATHROOM": {
   "word": "BATHROOM",
   "roles": [
    {
     "kind": "voc-object",
     "of": null
    },
    {
     "kind": "noun",
     "of": "LAVATORY"
    },
    {
     "kind": "adjective",
     "of": "LAV-DOOR"
    }
   ]
  },
  "SLIP": {
   "word": "SLIP",
   "roles": [
    {
     "kind": "noun",
     "of": "WFORM"
    },
    {
     "kind": "noun",
     "of": "DFORM"
    }
   ]
  },
  "FORM": {
   "word": "FORM",
   "roles": [
    {
     "kind": "noun",
     "of": "WFORM"
    },
    {
     "kind": "noun",
     "of": "DFORM"
    },
    {
     "kind": "noun",
     "of": "IMMIGRATION-FORM"
    },
    {
     "kind": "noun",
     "of": "IFORM"
    }
   ]
  },
  "BALANCE": {
   "word": "BALANCE",
   "roles": [
    {
     "kind": "noun",
     "of": "WFORM"
    }
   ]
  },
  "MINIMUM": {
   "word": "MINIMUM",
   "roles": [
    {
     "kind": "noun",
     "of": "WFORM"
    },
    {
     "kind": "adjective",
     "of": "WFORM"
    }
   ]
  },
  "WITHDRAWAL": {
   "word": "WITHDRAWAL",
   "roles": [
    {
     "kind": "noun",
     "of": "WFORM"
    },
    {
     "kind": "adjective",
     "of": "WFORM"
    }
   ]
  },
  "CHANGE": {
   "word": "CHANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WFORM"
    },
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "noun",
     "of": "TELLER-WINDOWS"
    },
    {
     "kind": "noun",
     "of": "AIRPLANE-EXIT"
    },
    {
     "kind": "noun",
     "of": "YOUR-WINDOWS"
    },
    {
     "kind": "adjective",
     "of": "YOUR-WINDOWS"
    }
   ]
  },
  "WINDOWS": {
   "word": "WINDOWS",
   "roles": [
    {
     "kind": "noun",
     "of": "TELLER-WINDOWS"
    },
    {
     "kind": "noun",
     "of": "YOUR-WINDOWS"
    }
   ]
  },
  "TELLER": {
   "word": "TELLER",
   "roles": [
    {
     "kind": "adjective",
     "of": "TELLER-WINDOWS"
    },
    {
     "kind": "noun",
     "of": "TELLER"
    },
    {
     "kind": "adjective",
     "of": "TELLER-SIGN"
    }
   ]
  },
  "WOMAN": {
   "word": "WOMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "TELLER"
    },
    {
     "kind": "noun",
     "of": "STEWARDESS"
    },
    {
     "kind": "noun",
     "of": "WAITRESS"
    },
    {
     "kind": "noun",
     "of": "AGENT"
    },
    {
     "kind": "noun",
     "of": "MATRON"
    },
    {
     "kind": "noun",
     "of": "PMATRON"
    }
   ]
  },
  "LADY": {
   "word": "LADY",
   "roles": [
    {
     "kind": "noun",
     "of": "TELLER"
    },
    {
     "kind": "noun",
     "of": "STEWARDESS"
    },
    {
     "kind": "noun",
     "of": "WAITRESS"
    },
    {
     "kind": "noun",
     "of": "AGENT"
    },
    {
     "kind": "noun",
     "of": "MATRON"
    },
    {
     "kind": "noun",
     "of": "PMATRON"
    }
   ]
  },
  "BANK": {
   "word": "BANK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TELLER"
    },
    {
     "kind": "adjective",
     "of": "BANKSOUND"
    },
    {
     "kind": "noun",
     "of": "GBANK"
    }
   ]
  },
  "SIGN": {
   "word": "SIGN",
   "roles": [
    {
     "kind": "noun",
     "of": "TELLER-SIGN"
    },
    {
     "kind": "noun",
     "of": "PERSECUTION-SIGN"
    },
    {
     "kind": "noun",
     "of": "SIGNS"
    },
    {
     "kind": "noun",
     "of": "PSIGNS"
    },
    {
     "kind": "noun",
     "of": "VISA-SIGN"
    },
    {
     "kind": "noun",
     "of": "BELTLIGHT"
    },
    {
     "kind": "noun",
     "of": "OMNIA-SIGN"
    },
    {
     "kind": "noun",
     "of": "SEATBELT-LIGHT"
    },
    {
     "kind": "noun",
     "of": "LAV-SIGN"
    },
    {
     "kind": "noun",
     "of": "FARM-NOTICE"
    },
    {
     "kind": "noun",
     "of": "CHECK"
    },
    {
     "kind": "noun",
     "of": "CAB-NOTICE"
    },
    {
     "kind": "noun",
     "of": "ODD-GATE-SIGN"
    }
   ]
  },
  "ZZZP": {
   "word": "ZZZP",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKSOUND"
    },
    {
     "kind": "noun",
     "of": "LOCAL-GLOBALS"
    },
    {
     "kind": "noun",
     "of": "AIRCLERK"
    },
    {
     "kind": "adjective",
     "of": "AIRCLERK"
    },
    {
     "kind": "noun",
     "of": "ACTUAL-DESK"
    },
    {
     "kind": "adjective",
     "of": "ACTUAL-DESK"
    },
    {
     "kind": "noun",
     "of": "FLIGHT-ATTENDANT"
    },
    {
     "kind": "noun",
     "of": "MAGAZINE"
    },
    {
     "kind": "noun",
     "of": "NERD-OBJECT"
    },
    {
     "kind": "adjective",
     "of": "NERD-OBJECT"
    },
    {
     "kind": "noun",
     "of": "PAINTING"
    },
    {
     "kind": "noun",
     "of": "UNDER-PERCH"
    },
    {
     "kind": "adjective",
     "of": "UNDER-PERCH"
    },
    {
     "kind": "noun",
     "of": "CABSOUND"
    },
    {
     "kind": "noun",
     "of": "FLYER"
    },
    {
     "kind": "noun",
     "of": "COUPON"
    },
    {
     "kind": "noun",
     "of": "ENVELOPE"
    },
    {
     "kind": "noun",
     "of": "BOSS-CHECK"
    },
    {
     "kind": "adjective",
     "of": "BOSS-CHECK"
    }
   ]
  },
  "SOUND": {
   "word": "SOUND",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKSOUND"
    },
    {
     "kind": "noun",
     "of": "AIRPORT-MUSIC"
    },
    {
     "kind": "noun",
     "of": "SOUNDS"
    },
    {
     "kind": "noun",
     "of": "INTERCOM"
    },
    {
     "kind": "noun",
     "of": "RADIO"
    }
   ]
  },
  "PAULETTE": {
   "word": "PAULETTE",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKSOUND"
    }
   ]
  },
  "NANCY": {
   "word": "NANCY",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKSOUND"
    }
   ]
  },
  "BONGO": {
   "word": "BONGO",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKSOUND"
    }
   ]
  },
  "PONGO": {
   "word": "PONGO",
   "roles": [
    {
     "kind": "noun",
     "of": "BANKSOUND"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "A-COCKPIT-DOOR"
    },
    {
     "kind": "noun",
     "of": "A-LAVATORY-DOOR"
    },
    {
     "kind": "noun",
     "of": "A-EMERGENCY-DOOR"
    },
    {
     "kind": "noun",
     "of": "AIRPLANE-EXIT"
    },
    {
     "kind": "noun",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "adjective",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "noun",
     "of": "HATCH"
    },
    {
     "kind": "noun",
     "of": "LAV-DOOR"
    },
    {
     "kind": "noun",
     "of": "JDOOR"
    },
    {
     "kind": "noun",
     "of": "BWGATE"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-DOOR"
    },
    {
     "kind": "noun",
     "of": "FROOM-DOOR"
    },
    {
     "kind": "adjective",
     "of": "DOORBELL"
    },
    {
     "kind": "noun",
     "of": "LANDF-DOOR"
    },
    {
     "kind": "noun",
     "of": "FARM-DOOR"
    },
    {
     "kind": "noun",
     "of": "PORCH-DOOR"
    },
    {
     "kind": "noun",
     "of": "MANSION-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MANSION-BELL"
    },
    {
     "kind": "noun",
     "of": "FLAT-DOOR"
    },
    {
     "kind": "noun",
     "of": "CAB"
    },
    {
     "kind": "noun",
     "of": "ODD-GATE"
    }
   ]
  },
  "COCKPIT": {
   "word": "COCKPIT",
   "roles": [
    {
     "kind": "adjective",
     "of": "A-COCKPIT-DOOR"
    }
   ]
  },
  "EMERGENCY": {
   "word": "EMERGENCY",
   "roles": [
    {
     "kind": "adjective",
     "of": "A-EMERGENCY-DOOR"
    },
    {
     "kind": "adjective",
     "of": "AIRPLANE-EXIT"
    },
    {
     "kind": "adjective",
     "of": "HATCH"
    }
   ]
  },
  "MOVIE": {
   "word": "MOVIE",
   "roles": [
    {
     "kind": "noun",
     "of": "MOVIE"
    }
   ]
  },
  "FILM": {
   "word": "FILM",
   "roles": [
    {
     "kind": "noun",
     "of": "MOVIE"
    }
   ]
  },
  "FLICK": {
   "word": "FLICK",
   "roles": [
    {
     "kind": "noun",
     "of": "MOVIE"
    }
   ]
  },
  "IN-FLIGHT": {
   "word": "IN-FLIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOVIE"
    }
   ]
  },
  "AIRPLANE": {
   "word": "AIRPLANE",
   "roles": [
    {
     "kind": "adjective",
     "of": "AIRPLANE-EXIT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-AIRPLANE"
    },
    {
     "kind": "noun",
     "of": "FLIGHT-42"
    },
    {
     "kind": "noun",
     "of": "PLANE"
    },
    {
     "kind": "adjective",
     "of": "PLANE-MAGAZINE"
    }
   ]
  },
  "STRAP": {
   "word": "STRAP",
   "roles": [
    {
     "kind": "noun",
     "of": "PARACHUTE"
    },
    {
     "kind": "noun",
     "of": "CHUTE"
    }
   ]
  },
  "PARACHUTE": {
   "word": "PARACHUTE",
   "roles": [
    {
     "kind": "noun",
     "of": "PARACHUTE"
    },
    {
     "kind": "noun",
     "of": "CHUTE"
    },
    {
     "kind": "adjective",
     "of": "CHUTE"
    }
   ]
  },
  "CHUTE": {
   "word": "CHUTE",
   "roles": [
    {
     "kind": "noun",
     "of": "PARACHUTE"
    },
    {
     "kind": "noun",
     "of": "CHUTE"
    },
    {
     "kind": "adjective",
     "of": "CHUTE"
    }
   ]
  },
  "MULTI-COLORED": {
   "word": "MULTI-COLORED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PARACHUTE"
    }
   ]
  },
  "CORD": {
   "word": "CORD",
   "roles": [
    {
     "kind": "noun",
     "of": "RIP-CORD"
    },
    {
     "kind": "noun",
     "of": "RIPCORD"
    }
   ]
  },
  "HANDLE": {
   "word": "HANDLE",
   "roles": [
    {
     "kind": "noun",
     "of": "RIP-CORD"
    },
    {
     "kind": "noun",
     "of": "LEFT-HANDLE"
    },
    {
     "kind": "noun",
     "of": "MIDDLE-HANDLE"
    },
    {
     "kind": "noun",
     "of": "RIGHT-HANDLE"
    }
   ]
  },
  "ATTENDANT": {
   "word": "ATTENDANT",
   "roles": [
    {
     "kind": "noun",
     "of": "A-ATTENDANT"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-ATTENDANT"
    },
    {
     "kind": "noun",
     "of": "STEWARDESS"
    },
    {
     "kind": "noun",
     "of": "FLIGHT-ATTENDANT"
    },
    {
     "kind": "adjective",
     "of": "CALL-BUTTON"
    }
   ]
  },
  "CABIN": {
   "word": "CABIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "A-ATTENDANT"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-ATTENDANT"
    }
   ]
  },
  "PURSER": {
   "word": "PURSER",
   "roles": [
    {
     "kind": "noun",
     "of": "A-PURSER"
    },
    {
     "kind": "noun",
     "of": "PURSER"
    }
   ]
  },
  "BURLY": {
   "word": "BURLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "A-PURSER"
    },
    {
     "kind": "adjective",
     "of": "PURSER"
    }
   ]
  },
  "IMMIGRATION": {
   "word": "IMMIGRATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "IMMIGRATION-FORM"
    },
    {
     "kind": "adjective",
     "of": "IFORM"
    }
   ]
  },
  "NUMBER": {
   "word": "NUMBER",
   "roles": [
    {
     "kind": "noun",
     "of": "VISA-NUMBER"
    },
    {
     "kind": "noun",
     "of": "MAZE-ROOM"
    },
    {
     "kind": "noun",
     "of": "VNUMBER"
    },
    {
     "kind": "noun",
     "of": "STREETNUMBERS"
    }
   ]
  },
  "VISA": {
   "word": "VISA",
   "roles": [
    {
     "kind": "adjective",
     "of": "VISA-NUMBER"
    },
    {
     "kind": "noun",
     "of": "REQUIREMENTS"
    },
    {
     "kind": "adjective",
     "of": "REQUIREMENTS"
    },
    {
     "kind": "noun",
     "of": "VISA"
    },
    {
     "kind": "adjective",
     "of": "IFORM"
    },
    {
     "kind": "adjective",
     "of": "VNUMBER"
    }
   ]
  },
  "MAN": {
   "word": "MAN",
   "roles": [
    {
     "kind": "noun",
     "of": "HIJACKER"
    },
    {
     "kind": "noun",
     "of": "FATSO"
    },
    {
     "kind": "noun",
     "of": "PURSER"
    },
    {
     "kind": "noun",
     "of": "SPY"
    },
    {
     "kind": "noun",
     "of": "THE-PARANOID"
    },
    {
     "kind": "noun",
     "of": "CLERK"
    },
    {
     "kind": "noun",
     "of": "WAITER"
    },
    {
     "kind": "noun",
     "of": "MOUSY"
    },
    {
     "kind": "noun",
     "of": "DMAN"
    },
    {
     "kind": "noun",
     "of": "NERD"
    },
    {
     "kind": "noun",
     "of": "CAB-DRIVER"
    }
   ]
  },
  "HIJACKER": {
   "word": "HIJACKER",
   "roles": [
    {
     "kind": "noun",
     "of": "HIJACKER"
    }
   ]
  },
  "PISTOL": {
   "word": "PISTOL",
   "roles": [
    {
     "kind": "noun",
     "of": "GUN"
    }
   ]
  },
  "GUN": {
   "word": "GUN",
   "roles": [
    {
     "kind": "noun",
     "of": "GUN"
    },
    {
     "kind": "noun",
     "of": "MACHGUN"
    },
    {
     "kind": "noun",
     "of": "EGUN"
    }
   ]
  },
  "HANDGUN": {
   "word": "HANDGUN",
   "roles": [
    {
     "kind": "noun",
     "of": "GUN"
    }
   ]
  },
  "GRENADE": {
   "word": "GRENADE",
   "roles": [
    {
     "kind": "noun",
     "of": "EXPLOSIVES"
    },
    {
     "kind": "noun",
     "of": "GRENADE"
    }
   ]
  },
  "GRENADES": {
   "word": "GRENADES",
   "roles": [
    {
     "kind": "noun",
     "of": "EXPLOSIVES"
    }
   ]
  },
  "STICKS": {
   "word": "STICKS",
   "roles": [
    {
     "kind": "noun",
     "of": "EXPLOSIVES"
    }
   ]
  },
  "DYNAMITE": {
   "word": "DYNAMITE",
   "roles": [
    {
     "kind": "noun",
     "of": "EXPLOSIVES"
    }
   ]
  },
  "ANTENNA": {
   "word": "ANTENNA",
   "roles": [
    {
     "kind": "noun",
     "of": "WALKIE-TALKIE"
    }
   ]
  },
  "DEVICE": {
   "word": "DEVICE",
   "roles": [
    {
     "kind": "noun",
     "of": "WALKIE-TALKIE"
    }
   ]
  },
  "WALKIE-TALKIE": {
   "word": "WALKIE-TALKIE",
   "roles": [
    {
     "kind": "noun",
     "of": "WALKIE-TALKIE"
    }
   ]
  },
  "TALKIE": {
   "word": "TALKIE",
   "roles": [
    {
     "kind": "noun",
     "of": "WALKIE-TALKIE"
    }
   ]
  },
  "TRANSMITTER": {
   "word": "TRANSMITTER",
   "roles": [
    {
     "kind": "noun",
     "of": "WALKIE-TALKIE"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALKIE-TALKIE"
    }
   ]
  },
  "WALKIE": {
   "word": "WALKIE",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALKIE-TALKIE"
    }
   ]
  },
  "DINNER": {
   "word": "DINNER",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DINNER"
    },
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    }
   ]
  },
  "LUNCH": {
   "word": "LUNCH",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DINNER"
    }
   ]
  },
  "BREAKFAST": {
   "word": "BREAKFAST",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DINNER"
    }
   ]
  },
  "SNACK": {
   "word": "SNACK",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DINNER"
    }
   ]
  },
  "FOOD": {
   "word": "FOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-DINNER"
    },
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    },
    {
     "kind": "noun",
     "of": "FOOD"
    },
    {
     "kind": "noun",
     "of": "BAG"
    },
    {
     "kind": "noun",
     "of": "TREATS"
    },
    {
     "kind": "noun",
     "of": "BURGER"
    }
   ]
  },
  "BLANKET": {
   "word": "BLANKET",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-BLANKET"
    }
   ]
  },
  "PILLOW": {
   "word": "PILLOW",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-PILLOW"
    },
    {
     "kind": "noun",
     "of": "GLOBAL-WINDOW"
    }
   ]
  },
  "PLANE": {
   "word": "PLANE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-AIRPLANE"
    },
    {
     "kind": "noun",
     "of": "FLIGHT-42"
    },
    {
     "kind": "noun",
     "of": "PLANE"
    }
   ]
  },
  "JET": {
   "word": "JET",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-AIRPLANE"
    },
    {
     "kind": "noun",
     "of": "FLIGHT-42"
    },
    {
     "kind": "noun",
     "of": "PLANE"
    }
   ]
  },
  "AIRCRAFT": {
   "word": "AIRCRAFT",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-AIRPLANE"
    },
    {
     "kind": "noun",
     "of": "PLANE"
    }
   ]
  },
  "SEATS": {
   "word": "SEATS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SEAT"
    }
   ]
  },
  "CHAIR": {
   "word": "CHAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SEAT"
    }
   ]
  },
  "CHAIRS": {
   "word": "CHAIRS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-SEAT"
    }
   ]
  },
  "MAGAZINE": {
   "word": "MAGAZINE",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLINE-MAGAZINE"
    },
    {
     "kind": "noun",
     "of": "PLANE-MAGAZINE"
    },
    {
     "kind": "noun",
     "of": "MAGAZINE"
    }
   ]
  },
  "AIRLINE": {
   "word": "AIRLINE",
   "roles": [
    {
     "kind": "adjective",
     "of": "AIRLINE-MAGAZINE"
    },
    {
     "kind": "noun",
     "of": "AIRLINE"
    },
    {
     "kind": "adjective",
     "of": "AIRCLERK"
    },
    {
     "kind": "adjective",
     "of": "PLANE-MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "ACTUAL-DESK"
    },
    {
     "kind": "adjective",
     "of": "ACTUAL-ZDESK"
    },
    {
     "kind": "adjective",
     "of": "ZTICKET"
    },
    {
     "kind": "adjective",
     "of": "TICKET"
    }
   ]
  },
  "CARD": {
   "word": "CARD",
   "roles": [
    {
     "kind": "noun",
     "of": "SAFETY-CARD"
    },
    {
     "kind": "adjective",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "noun",
     "of": "CARD"
    },
    {
     "kind": "noun",
     "of": "BEEZER"
    },
    {
     "kind": "noun",
     "of": "EXCESS"
    },
    {
     "kind": "noun",
     "of": "SAFETY-CARD-TWO"
    },
    {
     "kind": "adjective",
     "of": "SAFETY-CARD-TWO"
    },
    {
     "kind": "noun",
     "of": "KEY"
    }
   ]
  },
  "SAFETY": {
   "word": "SAFETY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SAFETY-CARD"
    },
    {
     "kind": "adjective",
     "of": "CARD"
    }
   ]
  },
  "BAG": {
   "word": "BAG",
   "roles": [
    {
     "kind": "noun",
     "of": "BARF-BAG"
    },
    {
     "kind": "noun",
     "of": "BAG"
    }
   ]
  },
  "DISCOMFORT": {
   "word": "DISCOMFORT",
   "roles": [
    {
     "kind": "adjective",
     "of": "BARF-BAG"
    }
   ]
  },
  "BARF": {
   "word": "BARF",
   "roles": [
    {
     "kind": "adjective",
     "of": "BARF-BAG"
    }
   ]
  },
  "VOMIT": {
   "word": "VOMIT",
   "roles": [
    {
     "kind": "adjective",
     "of": "BARF-BAG"
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
     "of": "SWISS"
    }
   ]
  },
  "FORK": {
   "word": "FORK",
   "roles": [
    {
     "kind": "noun",
     "of": "FORK"
    }
   ]
  },
  "SPOON": {
   "word": "SPOON",
   "roles": [
    {
     "kind": "noun",
     "of": "SPOON"
    }
   ]
  },
  "PLATTER": {
   "word": "PLATTER",
   "roles": [
    {
     "kind": "noun",
     "of": "MEAL-PLATTER"
    }
   ]
  },
  "TRAY": {
   "word": "TRAY",
   "roles": [
    {
     "kind": "noun",
     "of": "MEAL-PLATTER"
    }
   ]
  },
  "INSCRIPTION": {
   "word": "INSCRIPTION",
   "roles": [
    {
     "kind": "noun",
     "of": "MAZE-ROOM"
    }
   ]
  },
  "GEAR": {
   "word": "GEAR",
   "roles": [
    {
     "kind": "noun",
     "of": "MAZE-ROOM"
    }
   ]
  },
  "SWITCHGEAR": {
   "word": "SWITCHGEAR",
   "roles": [
    {
     "kind": "noun",
     "of": "MAZE-ROOM"
    }
   ]
  },
  "SWITCH": {
   "word": "SWITCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAZE-ROOM"
    },
    {
     "kind": "noun",
     "of": "LIGHT-BUTTON"
    }
   ]
  },
  "SLOT": {
   "word": "SLOT",
   "roles": [
    {
     "kind": "noun",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "noun",
     "of": "AIRPHONE"
    },
    {
     "kind": "noun",
     "of": "COMPUTER"
    }
   ]
  },
  "READER": {
   "word": "READER",
   "roles": [
    {
     "kind": "noun",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "adjective",
     "of": "OTHER-TRAP-DOOR"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "OTHER-TRAP-DOOR"
    }
   ]
  },
  "AIRLOCK": {
   "word": "AIRLOCK",
   "roles": [
    {
     "kind": "noun",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "adjective",
     "of": "OTHER-TRAP-DOOR"
    }
   ]
  },
  "CLOSED": {
   "word": "CLOSED",
   "roles": [
    {
     "kind": "adjective",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "adjective",
     "of": "GRATE"
    },
    {
     "kind": "adjective",
     "of": "TOWER-GRATE"
    },
    {
     "kind": "adjective",
     "of": "KITCHEN-DOOR"
    },
    {
     "kind": "adjective",
     "of": "FROOM-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WALLET"
    },
    {
     "kind": "adjective",
     "of": "ROMCASE"
    },
    {
     "kind": "adjective",
     "of": "PEN-MAILBOX"
    },
    {
     "kind": "adjective",
     "of": "BAG"
    },
    {
     "kind": "adjective",
     "of": "MAILBOX"
    },
    {
     "kind": "adjective",
     "of": "PORCH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MANSION-DOOR"
    },
    {
     "kind": "adjective",
     "of": "FLAT-DOOR"
    },
    {
     "kind": "adjective",
     "of": "ABOOK"
    },
    {
     "kind": "adjective",
     "of": "ODD-GATE"
    }
   ]
  },
  "KEY": {
   "word": "KEY",
   "roles": [
    {
     "kind": "adjective",
     "of": "OTHER-TRAP-DOOR"
    },
    {
     "kind": "noun",
     "of": "KEY"
    },
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "HALL": {
   "word": "HALL",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-COMPLEX"
    },
    {
     "kind": "noun",
     "of": "THALL"
    },
    {
     "kind": "noun",
     "of": "MHALL"
    }
   ]
  },
  "COMPLEX": {
   "word": "COMPLEX",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-COMPLEX"
    }
   ]
  },
  "PERSECUTION": {
   "word": "PERSECUTION",
   "roles": [
    {
     "kind": "adjective",
     "of": "IN-COMPLEX"
    }
   ]
  },
  "NOTICE": {
   "word": "NOTICE",
   "roles": [
    {
     "kind": "noun",
     "of": "PERSECUTION-SIGN"
    },
    {
     "kind": "noun",
     "of": "VISA-SIGN"
    },
    {
     "kind": "noun",
     "of": "BELTLIGHT"
    },
    {
     "kind": "noun",
     "of": "OMNIA-SIGN"
    },
    {
     "kind": "noun",
     "of": "FARM-NOTICE"
    },
    {
     "kind": "noun",
     "of": "CAB-NOTICE"
    }
   ]
  },
  "SCREENS": {
   "word": "SCREENS",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW-R"
    },
    {
     "kind": "noun",
     "of": "WINDOW-L"
    }
   ]
  },
  "SCREEN": {
   "word": "SCREEN",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW-R"
    },
    {
     "kind": "noun",
     "of": "WINDOW-L"
    },
    {
     "kind": "noun",
     "of": "COMPUTER"
    },
    {
     "kind": "adjective",
     "of": "PORCH-DOOR"
    }
   ]
  },
  "MONITOR": {
   "word": "MONITOR",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW-R"
    },
    {
     "kind": "noun",
     "of": "WINDOW-L"
    }
   ]
  },
  "OBSERVATION": {
   "word": "OBSERVATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW-R"
    },
    {
     "kind": "adjective",
     "of": "WINDOW-L"
    }
   ]
  },
  "RIGHT": {
   "word": "RIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW-R"
    },
    {
     "kind": "adjective",
     "of": "RIGHT-HANDLE"
    }
   ]
  },
  "SECURITY": {
   "word": "SECURITY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW-R"
    },
    {
     "kind": "adjective",
     "of": "WINDOW-L"
    }
   ]
  },
  "TV": {
   "word": "TV",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW-R"
    },
    {
     "kind": "adjective",
     "of": "WINDOW-L"
    }
   ]
  },
  "TELEVISION": {
   "word": "TELEVISION",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW-R"
    },
    {
     "kind": "adjective",
     "of": "WINDOW-L"
    }
   ]
  },
  "LEFT": {
   "word": "LEFT",
   "roles": [
    {
     "kind": "adjective",
     "of": "WINDOW-L"
    },
    {
     "kind": "adjective",
     "of": "LEFT-HANDLE"
    }
   ]
  },
  "SHAFT": {
   "word": "SHAFT",
   "roles": [
    {
     "kind": "noun",
     "of": "UNDER-TRAP-DOOR"
    }
   ]
  },
  "AIRSHAFT": {
   "word": "AIRSHAFT",
   "roles": [
    {
     "kind": "noun",
     "of": "UNDER-TRAP-DOOR"
    }
   ]
  },
  "GRAFFITI": {
   "word": "GRAFFITI",
   "roles": [
    {
     "kind": "noun",
     "of": "UNDER-TRAP-DOOR"
    }
   ]
  },
  "GRAFFITO": {
   "word": "GRAFFITO",
   "roles": [
    {
     "kind": "noun",
     "of": "UNDER-TRAP-DOOR"
    }
   ]
  },
  "AIR": {
   "word": "AIR",
   "roles": [
    {
     "kind": "adjective",
     "of": "UNDER-TRAP-DOOR"
    },
    {
     "kind": "adjective",
     "of": "LANDING-STRIP"
    },
    {
     "kind": "adjective",
     "of": "DUCT"
    },
    {
     "kind": "adjective",
     "of": "TOWER"
    },
    {
     "kind": "adjective",
     "of": "IN-TOWER"
    },
    {
     "kind": "adjective",
     "of": "CONTROLLERS"
    },
    {
     "kind": "adjective",
     "of": "AIRPHONE"
    }
   ]
  },
  "JUNGLE": {
   "word": "JUNGLE",
   "roles": [
    {
     "kind": "noun",
     "of": "LANDING-STRIP"
    }
   ]
  },
  "LANDING": {
   "word": "LANDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "LANDING-STRIP"
    }
   ]
  },
  "LETTER": {
   "word": "LETTER",
   "roles": [
    {
     "kind": "noun",
     "of": "END-MAIL"
    },
    {
     "kind": "noun",
     "of": "LETTER"
    }
   ]
  },
  "NEW": {
   "word": "NEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "END-MAIL"
    },
    {
     "kind": "adjective",
     "of": "YOUR-HOUSE"
    }
   ]
  },
  "INTNUM": {
   "word": "INTNUM",
   "roles": [
    {
     "kind": "noun",
     "of": "INTNUM"
    },
    {
     "kind": "adjective",
     "of": "INTNUM"
    },
    {
     "kind": "noun",
     "of": "THE-FLIGHT"
    },
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "adjective",
     "of": "CHECK"
    },
    {
     "kind": "adjective",
     "of": "MONEY"
    }
   ]
  },
  "PAGE": {
   "word": "PAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "INTNUM"
    },
    {
     "kind": "adjective",
     "of": "INTNUM"
    },
    {
     "kind": "noun",
     "of": "PAGE-3"
    },
    {
     "kind": "adjective",
     "of": "PAGE-3"
    },
    {
     "kind": "noun",
     "of": "PAGE-2"
    },
    {
     "kind": "adjective",
     "of": "PAGE-2"
    },
    {
     "kind": "noun",
     "of": "PAGE-1"
    },
    {
     "kind": "adjective",
     "of": "PAGE-1"
    }
   ]
  },
  "OMNIA": {
   "word": "OMNIA",
   "roles": [
    {
     "kind": "adjective",
     "of": "INTNUM"
    },
    {
     "kind": "adjective",
     "of": "FLIGHT-42"
    },
    {
     "kind": "adjective",
     "of": "THE-FLIGHT"
    }
   ]
  },
  "GALLIA": {
   "word": "GALLIA",
   "roles": [
    {
     "kind": "adjective",
     "of": "INTNUM"
    },
    {
     "kind": "adjective",
     "of": "FLIGHT-42"
    },
    {
     "kind": "adjective",
     "of": "THE-FLIGHT"
    }
   ]
  },
  "FLIGHT": {
   "word": "FLIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "INTNUM"
    },
    {
     "kind": "noun",
     "of": "FLIGHT-42"
    },
    {
     "kind": "adjective",
     "of": "FLIGHT-42"
    },
    {
     "kind": "adjective",
     "of": "STEWARDESS"
    },
    {
     "kind": "noun",
     "of": "THE-FLIGHT"
    },
    {
     "kind": "adjective",
     "of": "THE-FLIGHT"
    },
    {
     "kind": "adjective",
     "of": "FLIGHT-ATTENDANT"
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
  "ITSELF": {
   "word": "ITSELF",
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
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "PROTAGONIST": {
   "word": "PROTAGONIST",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYER"
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
     "kind": "noun",
     "of": "FROOM"
    },
    {
     "kind": "noun",
     "of": "BROOM"
    },
    {
     "kind": "noun",
     "of": "TROPHY-ROOM"
    }
   ]
  },
  "AREA": {
   "word": "AREA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "OPENED": {
   "word": "OPENED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-ROOM"
    }
   ]
  },
  "SHE": {
   "word": "SHE",
   "roles": [
    {
     "kind": "noun",
     "of": "HER"
    }
   ]
  },
  "HER": {
   "word": "HER",
   "roles": [
    {
     "kind": "noun",
     "of": "HER"
    },
    {
     "kind": "adjective",
     "of": "AGENCY-DESK"
    }
   ]
  },
  "HERSELF": {
   "word": "HERSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "HER"
    }
   ]
  },
  "HE": {
   "word": "HE",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM"
    }
   ]
  },
  "HIM": {
   "word": "HIM",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM"
    }
   ]
  },
  "HIMSELF": {
   "word": "HIMSELF",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM"
    }
   ]
  },
  "AIRPORT": {
   "word": "AIRPORT",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT"
    },
    {
     "kind": "adjective",
     "of": "AIRPORT"
    }
   ]
  },
  "TERMINAL": {
   "word": "TERMINAL",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT"
    }
   ]
  },
  "GATE": {
   "word": "GATE",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT"
    },
    {
     "kind": "noun",
     "of": "BWGATE"
    }
   ]
  },
  "BUILDING": {
   "word": "BUILDING",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT"
    },
    {
     "kind": "noun",
     "of": "CAMHOUSE"
    },
    {
     "kind": "noun",
     "of": "AGENCY"
    },
    {
     "kind": "noun",
     "of": "BSTORE"
    },
    {
     "kind": "noun",
     "of": "OUTSIDE-MANSION"
    },
    {
     "kind": "noun",
     "of": "THALL"
    }
   ]
  },
  "SKYCAP": {
   "word": "SKYCAP",
   "roles": [
    {
     "kind": "noun",
     "of": "SKYCAPS"
    }
   ]
  },
  "SKYCAPS": {
   "word": "SKYCAPS",
   "roles": [
    {
     "kind": "noun",
     "of": "SKYCAPS"
    }
   ]
  },
  "HANDLER": {
   "word": "HANDLER",
   "roles": [
    {
     "kind": "noun",
     "of": "SKYCAPS"
    }
   ]
  },
  "HANDLERS": {
   "word": "HANDLERS",
   "roles": [
    {
     "kind": "noun",
     "of": "SKYCAPS"
    }
   ]
  },
  "BAGGAGE": {
   "word": "BAGGAGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SKYCAPS"
    }
   ]
  },
  "SIGNS": {
   "word": "SIGNS",
   "roles": [
    {
     "kind": "noun",
     "of": "SIGNS"
    },
    {
     "kind": "noun",
     "of": "PSIGNS"
    }
   ]
  },
  "PILLAR": {
   "word": "PILLAR",
   "roles": [
    {
     "kind": "noun",
     "of": "PILLAR"
    }
   ]
  },
  "SPEAKER": {
   "word": "SPEAKER",
   "roles": [
    {
     "kind": "noun",
     "of": "SPEAKER"
    },
    {
     "kind": "noun",
     "of": "GSPEAKER"
    },
    {
     "kind": "noun",
     "of": "INTERCOM"
    }
   ]
  },
  "LOUDSPEAKER": {
   "word": "LOUDSPEAKER",
   "roles": [
    {
     "kind": "noun",
     "of": "SPEAKER"
    },
    {
     "kind": "noun",
     "of": "GSPEAKER"
    },
    {
     "kind": "noun",
     "of": "INTERCOM"
    }
   ]
  },
  "GUSH-O-SLUSH": {
   "word": "GUSH-O-SLUSH",
   "roles": [
    {
     "kind": "adjective",
     "of": "SPEAKER"
    },
    {
     "kind": "adjective",
     "of": "GSPEAKER"
    }
   ]
  },
  "WIRE": {
   "word": "WIRE",
   "roles": [
    {
     "kind": "noun",
     "of": "BWIRE"
    },
    {
     "kind": "noun",
     "of": "RWIRE"
    }
   ]
  },
  "WIRES": {
   "word": "WIRES",
   "roles": [
    {
     "kind": "noun",
     "of": "BWIRE"
    },
    {
     "kind": "noun",
     "of": "RWIRE"
    }
   ]
  },
  "PAIR": {
   "word": "PAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "BWIRE"
    },
    {
     "kind": "noun",
     "of": "RWIRE"
    },
    {
     "kind": "noun",
     "of": "PHONES"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BWIRE"
    }
   ]
  },
  "TWO": {
   "word": "TWO",
   "roles": [
    {
     "kind": "adjective",
     "of": "BWIRE"
    },
    {
     "kind": "adjective",
     "of": "RWIRE"
    },
    {
     "kind": "noun",
     "of": "PAGE-2"
    }
   ]
  },
  "CONSOLE": {
   "word": "CONSOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CONSOLE"
    }
   ]
  },
  "CONSOLES": {
   "word": "CONSOLES",
   "roles": [
    {
     "kind": "noun",
     "of": "CONSOLE"
    }
   ]
  },
  "CONTROLS": {
   "word": "CONTROLS",
   "roles": [
    {
     "kind": "noun",
     "of": "CONSOLE"
    }
   ]
  },
  "READOUT": {
   "word": "READOUT",
   "roles": [
    {
     "kind": "noun",
     "of": "CONSOLE"
    }
   ]
  },
  "READOUTS": {
   "word": "READOUTS",
   "roles": [
    {
     "kind": "noun",
     "of": "CONSOLE"
    }
   ]
  },
  "CONTROL": {
   "word": "CONTROL",
   "roles": [
    {
     "kind": "adjective",
     "of": "CONSOLE"
    },
    {
     "kind": "adjective",
     "of": "TOWER"
    },
    {
     "kind": "adjective",
     "of": "IN-TOWER"
    }
   ]
  },
  "GRATE": {
   "word": "GRATE",
   "roles": [
    {
     "kind": "noun",
     "of": "GRATE"
    },
    {
     "kind": "noun",
     "of": "TOWER-GRATE"
    }
   ]
  },
  "GRATING": {
   "word": "GRATING",
   "roles": [
    {
     "kind": "noun",
     "of": "GRATE"
    },
    {
     "kind": "noun",
     "of": "TOWER-GRATE"
    }
   ]
  },
  "DUCT": {
   "word": "DUCT",
   "roles": [
    {
     "kind": "noun",
     "of": "DUCT"
    }
   ]
  },
  "TUBE": {
   "word": "TUBE",
   "roles": [
    {
     "kind": "noun",
     "of": "DUCT"
    }
   ]
  },
  "CONDITIONING": {
   "word": "CONDITIONING",
   "roles": [
    {
     "kind": "adjective",
     "of": "DUCT"
    }
   ]
  },
  "TOWER": {
   "word": "TOWER",
   "roles": [
    {
     "kind": "noun",
     "of": "TOWER"
    },
    {
     "kind": "noun",
     "of": "IN-TOWER"
    }
   ]
  },
  "TRAFFIC": {
   "word": "TRAFFIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOWER"
    },
    {
     "kind": "adjective",
     "of": "IN-TOWER"
    },
    {
     "kind": "adjective",
     "of": "CONTROLLERS"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "VISA-SIGN"
    },
    {
     "kind": "adjective",
     "of": "PURSER"
    },
    {
     "kind": "adjective",
     "of": "OMNIA-SIGN"
    },
    {
     "kind": "adjective",
     "of": "PAINTING"
    }
   ]
  },
  "REQUIREMENTS": {
   "word": "REQUIREMENTS",
   "roles": [
    {
     "kind": "noun",
     "of": "REQUIREMENTS"
    }
   ]
  },
  "PASSPORT": {
   "word": "PASSPORT",
   "roles": [
    {
     "kind": "noun",
     "of": "VISA"
    }
   ]
  },
  "YOUR": {
   "word": "YOUR",
   "roles": [
    {
     "kind": "adjective",
     "of": "VISA"
    },
    {
     "kind": "adjective",
     "of": "POCKET"
    },
    {
     "kind": "adjective",
     "of": "YOUR-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "OLD-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "BEEZER"
    },
    {
     "kind": "adjective",
     "of": "EXCESS"
    },
    {
     "kind": "adjective",
     "of": "MAILBOX"
    }
   ]
  },
  "MUSIC": {
   "word": "MUSIC",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT-MUSIC"
    },
    {
     "kind": "adjective",
     "of": "AIRPORT-MUSIC"
    },
    {
     "kind": "noun",
     "of": "RADIO"
    }
   ]
  },
  "ANNOUNCEMENTS": {
   "word": "ANNOUNCEMENTS",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT-MUSIC"
    }
   ]
  },
  "SYSTEM": {
   "word": "SYSTEM",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT-MUSIC"
    }
   ]
  },
  "PA": {
   "word": "PA",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT-MUSIC"
    },
    {
     "kind": "adjective",
     "of": "AIRPORT-MUSIC"
    }
   ]
  },
  "AIRLINES": {
   "word": "AIRLINES",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLINE"
    },
    {
     "kind": "adjective",
     "of": "ACTUAL-DESK"
    },
    {
     "kind": "adjective",
     "of": "ACTUAL-ZDESK"
    }
   ]
  },
  "GUY": {
   "word": "GUY",
   "roles": [
    {
     "kind": "noun",
     "of": "FATSO"
    },
    {
     "kind": "noun",
     "of": "SPY"
    },
    {
     "kind": "noun",
     "of": "THE-PARANOID"
    },
    {
     "kind": "noun",
     "of": "CLERK"
    },
    {
     "kind": "noun",
     "of": "WAITER"
    },
    {
     "kind": "noun",
     "of": "MOUSY"
    },
    {
     "kind": "noun",
     "of": "DMAN"
    },
    {
     "kind": "noun",
     "of": "NERD"
    }
   ]
  },
  "FELLOW": {
   "word": "FELLOW",
   "roles": [
    {
     "kind": "noun",
     "of": "FATSO"
    },
    {
     "kind": "noun",
     "of": "PURSER"
    },
    {
     "kind": "noun",
     "of": "SPY"
    },
    {
     "kind": "noun",
     "of": "THE-PARANOID"
    },
    {
     "kind": "noun",
     "of": "CLERK"
    },
    {
     "kind": "noun",
     "of": "WAITER"
    },
    {
     "kind": "noun",
     "of": "MOUSY"
    },
    {
     "kind": "noun",
     "of": "DMAN"
    },
    {
     "kind": "noun",
     "of": "NERD"
    }
   ]
  },
  "FAT": {
   "word": "FAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "FATSO"
    }
   ]
  },
  "OBESE": {
   "word": "OBESE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FATSO"
    }
   ]
  },
  "CLERK": {
   "word": "CLERK",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRCLERK"
    },
    {
     "kind": "noun",
     "of": "CLERK"
    }
   ]
  },
  "GROUP": {
   "word": "GROUP",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLLERS"
    }
   ]
  },
  "BUNCH": {
   "word": "BUNCH",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLLERS"
    },
    {
     "kind": "noun",
     "of": "PAPERS"
    }
   ]
  },
  "CROWD": {
   "word": "CROWD",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLLERS"
    },
    {
     "kind": "noun",
     "of": "AIRPORT-CROWD"
    }
   ]
  },
  "CONTROLLERS": {
   "word": "CONTROLLERS",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLLERS"
    }
   ]
  },
  "PEOPLE": {
   "word": "PEOPLE",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLLERS"
    },
    {
     "kind": "noun",
     "of": "AIRPORT-CROWD"
    }
   ]
  },
  "FOLKS": {
   "word": "FOLKS",
   "roles": [
    {
     "kind": "noun",
     "of": "CONTROLLERS"
    },
    {
     "kind": "noun",
     "of": "AIRPORT-CROWD"
    }
   ]
  },
  "FORTY-TWO": {
   "word": "FORTY-TWO",
   "roles": [
    {
     "kind": "noun",
     "of": "FLIGHT-42"
    },
    {
     "kind": "noun",
     "of": "THE-FLIGHT"
    }
   ]
  },
  "ONLOOKERS": {
   "word": "ONLOOKERS",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT-CROWD"
    }
   ]
  },
  "EVERYONE": {
   "word": "EVERYONE",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT-CROWD"
    }
   ]
  },
  "EVERYBODY": {
   "word": "EVERYBODY",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPORT-CROWD"
    }
   ]
  },
  "AEROPLANE": {
   "word": "AEROPLANE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANE"
    }
   ]
  },
  "BELT": {
   "word": "BELT",
   "roles": [
    {
     "kind": "noun",
     "of": "SEATBELT"
    },
    {
     "kind": "adjective",
     "of": "BELTLIGHT"
    }
   ]
  },
  "SEATBELT": {
   "word": "SEATBELT",
   "roles": [
    {
     "kind": "noun",
     "of": "SEATBELT"
    },
    {
     "kind": "adjective",
     "of": "SEATBELT-LIGHT"
    }
   ]
  },
  "FLOOR": {
   "word": "FLOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "UNDER-SEAT"
    },
    {
     "kind": "noun",
     "of": "GROUND"
    }
   ]
  },
  "BULGE": {
   "word": "BULGE",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONES"
    }
   ]
  },
  "HEADPHONE": {
   "word": "HEADPHONE",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONES"
    },
    {
     "kind": "adjective",
     "of": "RECEPTACLE"
    }
   ]
  },
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONES"
    }
   ]
  },
  "EARPHONE": {
   "word": "EARPHONE",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONES"
    },
    {
     "kind": "adjective",
     "of": "RECEPTACLE"
    }
   ]
  },
  "EARPHONES": {
   "word": "EARPHONES",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONES"
    }
   ]
  },
  "PHONES": {
   "word": "PHONES",
   "roles": [
    {
     "kind": "noun",
     "of": "PHONES"
    }
   ]
  },
  "HEAD": {
   "word": "HEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONES"
    },
    {
     "kind": "noun",
     "of": "EYES"
    }
   ]
  },
  "EAR": {
   "word": "EAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "PHONES"
    },
    {
     "kind": "adjective",
     "of": "TRUMPET"
    }
   ]
  },
  "ODYSSEY": {
   "word": "ODYSSEY",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANE-MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "PLANE-MAGAZINE"
    }
   ]
  },
  "ZALAGASAN": {
   "word": "ZALAGASAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "PLANE-MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "AIRLINE-MEAL"
    },
    {
     "kind": "noun",
     "of": "NATIVES"
    },
    {
     "kind": "adjective",
     "of": "NATIVES"
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
  "OUTLET": {
   "word": "OUTLET",
   "roles": [
    {
     "kind": "noun",
     "of": "RECEPTACLE"
    }
   ]
  },
  "JACK": {
   "word": "JACK",
   "roles": [
    {
     "kind": "noun",
     "of": "RECEPTACLE"
    },
    {
     "kind": "noun",
     "of": "COMPUTER"
    }
   ]
  },
  "SOCKET": {
   "word": "SOCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "RECEPTACLE"
    }
   ]
  },
  "STRAPS": {
   "word": "STRAPS",
   "roles": [
    {
     "kind": "noun",
     "of": "CHUTE"
    }
   ]
  },
  "LINE": {
   "word": "LINE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHUTE"
    }
   ]
  },
  "LINES": {
   "word": "LINES",
   "roles": [
    {
     "kind": "noun",
     "of": "CHUTE"
    }
   ]
  },
  "SHROUD": {
   "word": "SHROUD",
   "roles": [
    {
     "kind": "noun",
     "of": "CHUTE"
    }
   ]
  },
  "KA'ABI": {
   "word": "KA'ABI",
   "roles": [
    {
     "kind": "noun",
     "of": "CHUTE"
    }
   ]
  },
  "RIPCORD": {
   "word": "RIPCORD",
   "roles": [
    {
     "kind": "noun",
     "of": "RIPCORD"
    }
   ]
  },
  "PENCIL": {
   "word": "PENCIL",
   "roles": [
    {
     "kind": "noun",
     "of": "PENCIL"
    },
    {
     "kind": "adjective",
     "of": "PENCIL"
    }
   ]
  },
  "ERASER": {
   "word": "ERASER",
   "roles": [
    {
     "kind": "noun",
     "of": "PENCIL"
    }
   ]
  },
  "HATCH": {
   "word": "HATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "HATCH"
    }
   ]
  },
  "HATCHWAY": {
   "word": "HATCHWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "HATCH"
    }
   ]
  },
  "PLANE'S": {
   "word": "PLANE'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "HATCH"
    }
   ]
  },
  "BRANCHES": {
   "word": "BRANCHES",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-TREE"
    }
   ]
  },
  "TREE": {
   "word": "TREE",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-TREE"
    }
   ]
  },
  "POT": {
   "word": "POT",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-POT"
    }
   ]
  },
  "COOKING": {
   "word": "COOKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "IN-POT"
    }
   ]
  },
  "DESK": {
   "word": "DESK",
   "roles": [
    {
     "kind": "noun",
     "of": "ACTUAL-DESK"
    },
    {
     "kind": "noun",
     "of": "ACTUAL-ZDESK"
    },
    {
     "kind": "noun",
     "of": "AGENCY-DESK"
    }
   ]
  },
  "CHECK-IN": {
   "word": "CHECK-IN",
   "roles": [
    {
     "kind": "adjective",
     "of": "ACTUAL-DESK"
    },
    {
     "kind": "adjective",
     "of": "ACTUAL-ZDESK"
    }
   ]
  },
  "TICKET": {
   "word": "TICKET",
   "roles": [
    {
     "kind": "adjective",
     "of": "ACTUAL-DESK"
    },
    {
     "kind": "adjective",
     "of": "ACTUAL-ZDESK"
    },
    {
     "kind": "noun",
     "of": "ZTICKET"
    },
    {
     "kind": "noun",
     "of": "TICKET"
    }
   ]
  },
  "ZALAGASA": {
   "word": "ZALAGASA",
   "roles": [
    {
     "kind": "adjective",
     "of": "ACTUAL-ZDESK"
    },
    {
     "kind": "adjective",
     "of": "LEAFLET"
    }
   ]
  },
  "PAPER": {
   "word": "PAPER",
   "roles": [
    {
     "kind": "noun",
     "of": "ZTICKET"
    },
    {
     "kind": "adjective",
     "of": "TOWEL"
    },
    {
     "kind": "noun",
     "of": "LETTER"
    },
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "noun",
     "of": "TICKET"
    },
    {
     "kind": "noun",
     "of": "PAPERS"
    },
    {
     "kind": "noun",
     "of": "US-TEXT"
    }
   ]
  },
  "DIRECT": {
   "word": "DIRECT",
   "roles": [
    {
     "kind": "adjective",
     "of": "ZTICKET"
    }
   ]
  },
  "TRIP": {
   "word": "TRIP",
   "roles": [
    {
     "kind": "noun",
     "of": "THE-FLIGHT"
    }
   ]
  },
  "AISLE": {
   "word": "AISLE",
   "roles": [
    {
     "kind": "noun",
     "of": "AISLE"
    },
    {
     "kind": "adjective",
     "of": "AISLE"
    }
   ]
  },
  "ROW": {
   "word": "ROW",
   "roles": [
    {
     "kind": "noun",
     "of": "AISLE"
    },
    {
     "kind": "adjective",
     "of": "AISLE"
    }
   ]
  },
  "WARNING": {
   "word": "WARNING",
   "roles": [
    {
     "kind": "adjective",
     "of": "SEATBELT-LIGHT"
    }
   ]
  },
  "GALLEY": {
   "word": "GALLEY",
   "roles": [
    {
     "kind": "noun",
     "of": "GALLEY"
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
  "TOWEL": {
   "word": "TOWEL",
   "roles": [
    {
     "kind": "noun",
     "of": "TOWEL"
    }
   ]
  },
  "CAN": {
   "word": "CAN",
   "roles": [
    {
     "kind": "noun",
     "of": "LAVATORY"
    }
   ]
  },
  "PLATE": {
   "word": "PLATE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLATE"
    },
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    }
   ]
  },
  "DISH": {
   "word": "DISH",
   "roles": [
    {
     "kind": "noun",
     "of": "PLATE"
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
  "TOOTH": {
   "word": "TOOTH",
   "roles": [
    {
     "kind": "noun",
     "of": "TEETH"
    },
    {
     "kind": "adjective",
     "of": "TOOTHBRUSH"
    }
   ]
  },
  "TOOTHBRUSH": {
   "word": "TOOTHBRUSH",
   "roles": [
    {
     "kind": "noun",
     "of": "TOOTHBRUSH"
    }
   ]
  },
  "ELECTRIC": {
   "word": "ELECTRIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOOTHBRUSH"
    },
    {
     "kind": "adjective",
     "of": "POWER-SAW"
    }
   ]
  },
  "SPECIALTY": {
   "word": "SPECIALTY",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    }
   ]
  },
  "MEAL": {
   "word": "MEAL",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    },
    {
     "kind": "noun",
     "of": "FOOD"
    },
    {
     "kind": "noun",
     "of": "BURGER"
    }
   ]
  },
  "STEW": {
   "word": "STEW",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    }
   ]
  },
  "LLAMA": {
   "word": "LLAMA",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    },
    {
     "kind": "adjective",
     "of": "AIRLINE-MEAL"
    },
    {
     "kind": "noun",
     "of": "LLAMA"
    },
    {
     "kind": "adjective",
     "of": "BAG"
    },
    {
     "kind": "adjective",
     "of": "TREATS"
    }
   ]
  },
  "BOWL": {
   "word": "BOWL",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRLINE-MEAL"
    }
   ]
  },
  "NOISOME": {
   "word": "NOISOME",
   "roles": [
    {
     "kind": "adjective",
     "of": "AIRLINE-MEAL"
    }
   ]
  },
  "AIRPHONE": {
   "word": "AIRPHONE",
   "roles": [
    {
     "kind": "noun",
     "of": "AIRPHONE"
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
     "kind": "noun",
     "of": "BWGATE"
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
  "CEILING": {
   "word": "CEILING",
   "roles": [
    {
     "kind": "noun",
     "of": "CEILING"
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
  "PALM": {
   "word": "PALM",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "PALMS": {
   "word": "PALMS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "FINGER": {
   "word": "FINGER",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "FINGERS": {
   "word": "FINGERS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "THUMB": {
   "word": "THUMB",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "THUMBS": {
   "word": "THUMBS",
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
  "FOOT": {
   "word": "FOOT",
   "roles": [
    {
     "kind": "noun",
     "of": "FEET"
    },
    {
     "kind": "adjective",
     "of": "GENERATOR"
    }
   ]
  },
  "FEET": {
   "word": "FEET",
   "roles": [
    {
     "kind": "noun",
     "of": "FEET"
    }
   ]
  },
  "TOE": {
   "word": "TOE",
   "roles": [
    {
     "kind": "noun",
     "of": "FEET"
    }
   ]
  },
  "TOES": {
   "word": "TOES",
   "roles": [
    {
     "kind": "noun",
     "of": "FEET"
    }
   ]
  },
  "SNEAKER": {
   "word": "SNEAKER",
   "roles": [
    {
     "kind": "noun",
     "of": "FEET"
    }
   ]
  },
  "SNEAKERS": {
   "word": "SNEAKERS",
   "roles": [
    {
     "kind": "noun",
     "of": "FEET"
    }
   ]
  },
  "MOUTH": {
   "word": "MOUTH",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUTH"
    }
   ]
  },
  "EYES": {
   "word": "EYES",
   "roles": [
    {
     "kind": "noun",
     "of": "EYES"
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
  "BODY": {
   "word": "BODY",
   "roles": [
    {
     "kind": "noun",
     "of": "ME"
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
  "CLOTHES": {
   "word": "CLOTHES",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOTHES"
    }
   ]
  },
  "CLOTHING": {
   "word": "CLOTHING",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOTHES"
    }
   ]
  },
  "APPAREL": {
   "word": "APPAREL",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOTHES"
    }
   ]
  },
  "OUTFIT": {
   "word": "OUTFIT",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOTHES"
    }
   ]
  },
  "SHORTS": {
   "word": "SHORTS",
   "roles": [
    {
     "kind": "noun",
     "of": "CLOTHES"
    }
   ]
  },
  "THEY": {
   "word": "THEY",
   "roles": [
    {
     "kind": "noun",
     "of": "THEM"
    }
   ]
  },
  "THEM": {
   "word": "THEM",
   "roles": [
    {
     "kind": "noun",
     "of": "THEM"
    }
   ]
  },
  "THEMSELVES": {
   "word": "THEMSELVES",
   "roles": [
    {
     "kind": "noun",
     "of": "THEM"
    }
   ]
  },
  "DIRECTION": {
   "word": "DIRECTION",
   "roles": [
    {
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "SURFACE": {
   "word": "SURFACE",
   "roles": [
    {
     "kind": "noun",
     "of": "GROUND"
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
  "GROUNDS": {
   "word": "GROUNDS",
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
  "POCKETS": {
   "word": "POCKETS",
   "roles": [
    {
     "kind": "noun",
     "of": "POCKET"
    }
   ]
  },
  "SIDE": {
   "word": "SIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "POCKET"
    }
   ]
  },
  "SOUNDS": {
   "word": "SOUNDS",
   "roles": [
    {
     "kind": "noun",
     "of": "SOUNDS"
    }
   ]
  },
  "CORNER": {
   "word": "CORNER",
   "roles": [
    {
     "kind": "noun",
     "of": "CORNER"
    }
   ]
  },
  "CORNERS": {
   "word": "CORNERS",
   "roles": [
    {
     "kind": "noun",
     "of": "CORNER"
    }
   ]
  },
  "STRANGER": {
   "word": "STRANGER",
   "roles": [
    {
     "kind": "noun",
     "of": "SPY"
    }
   ]
  },
  "ODDITY": {
   "word": "ODDITY",
   "roles": [
    {
     "kind": "noun",
     "of": "SPY"
    }
   ]
  },
  "WEIRDO": {
   "word": "WEIRDO",
   "roles": [
    {
     "kind": "noun",
     "of": "SPY"
    }
   ]
  },
  "WOODY": {
   "word": "WOODY",
   "roles": [
    {
     "kind": "noun",
     "of": "SPY"
    }
   ]
  },
  "PARANOID": {
   "word": "PARANOID",
   "roles": [
    {
     "kind": "noun",
     "of": "THE-PARANOID"
    }
   ]
  },
  "SURVIVALIST": {
   "word": "SURVIVALIST",
   "roles": [
    {
     "kind": "noun",
     "of": "THE-PARANOID"
    }
   ]
  },
  "RAMBO": {
   "word": "RAMBO",
   "roles": [
    {
     "kind": "noun",
     "of": "THE-PARANOID"
    }
   ]
  },
  "OWNER": {
   "word": "OWNER",
   "roles": [
    {
     "kind": "noun",
     "of": "THE-PARANOID"
    }
   ]
  },
  "JAIL": {
   "word": "JAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "JAIL"
    },
    {
     "kind": "adjective",
     "of": "JDOOR"
    }
   ]
  },
  "GAOL": {
   "word": "GAOL",
   "roles": [
    {
     "kind": "noun",
     "of": "JAIL"
    },
    {
     "kind": "adjective",
     "of": "JDOOR"
    }
   ]
  },
  "DOORWAY": {
   "word": "DOORWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "JDOOR"
    },
    {
     "kind": "noun",
     "of": "KITCHEN-DOOR"
    },
    {
     "kind": "noun",
     "of": "FROOM-DOOR"
    },
    {
     "kind": "noun",
     "of": "LANDF-DOOR"
    },
    {
     "kind": "noun",
     "of": "FARM-DOOR"
    },
    {
     "kind": "noun",
     "of": "PORCH-DOOR"
    },
    {
     "kind": "noun",
     "of": "MANSION-DOOR"
    },
    {
     "kind": "noun",
     "of": "FLAT-DOOR"
    }
   ]
  },
  "BARS": {
   "word": "BARS",
   "roles": [
    {
     "kind": "noun",
     "of": "JDOOR"
    }
   ]
  },
  "BAR": {
   "word": "BAR",
   "roles": [
    {
     "kind": "noun",
     "of": "JDOOR"
    }
   ]
  },
  "BASEMENT": {
   "word": "BASEMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "BASEMENT"
    }
   ]
  },
  "STAIRWAY": {
   "word": "STAIRWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "PAR-STAIR"
    },
    {
     "kind": "noun",
     "of": "TEN-STAIR"
    }
   ]
  },
  "STAIRS": {
   "word": "STAIRS",
   "roles": [
    {
     "kind": "noun",
     "of": "PAR-STAIR"
    },
    {
     "kind": "noun",
     "of": "TEN-STAIR"
    }
   ]
  },
  "STAIR": {
   "word": "STAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "PAR-STAIR"
    },
    {
     "kind": "noun",
     "of": "TEN-STAIR"
    }
   ]
  },
  "HACKSAW": {
   "word": "HACKSAW",
   "roles": [
    {
     "kind": "noun",
     "of": "HACKSAW"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "SWISS"
    },
    {
     "kind": "noun",
     "of": "PLAYBACK-BUTTON"
    },
    {
     "kind": "noun",
     "of": "CALL-BUTTON"
    },
    {
     "kind": "noun",
     "of": "LIGHT-BUTTON"
    },
    {
     "kind": "noun",
     "of": "RECLINE-BUTTON"
    }
   ]
  },
  "LEVER": {
   "word": "LEVER",
   "roles": [
    {
     "kind": "noun",
     "of": "SWISS"
    }
   ]
  },
  "BUTTONS": {
   "word": "BUTTONS",
   "roles": [
    {
     "kind": "noun",
     "of": "SWISS"
    }
   ]
  },
  "SWISS": {
   "word": "SWISS",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWISS"
    }
   ]
  },
  "ARMY": {
   "word": "ARMY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWISS"
    }
   ]
  },
  "GENERATOR": {
   "word": "GENERATOR",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWISS"
    },
    {
     "kind": "noun",
     "of": "GENERATOR"
    }
   ]
  },
  "POWER": {
   "word": "POWER",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWISS"
    },
    {
     "kind": "noun",
     "of": "POWER-SAW"
    },
    {
     "kind": "adjective",
     "of": "POWER-SAW"
    }
   ]
  },
  "CHAIN": {
   "word": "CHAIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "POWER-SAW"
    }
   ]
  },
  "PORTABLE": {
   "word": "PORTABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GENERATOR"
    }
   ]
  },
  "TAKEABLE": {
   "word": "TAKEABLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GENERATOR"
    }
   ]
  },
  "POWERED": {
   "word": "POWERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GENERATOR"
    }
   ]
  },
  "FOOT-POWERED": {
   "word": "FOOT-POWERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GENERATOR"
    }
   ]
  },
  "HOUSE": {
   "word": "HOUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAMHOUSE"
    },
    {
     "kind": "noun",
     "of": "IN-FARM"
    },
    {
     "kind": "noun",
     "of": "OUTSIDE-MANSION"
    },
    {
     "kind": "noun",
     "of": "YOUR-HOUSE"
    },
    {
     "kind": "noun",
     "of": "OLD-HOUSE"
    }
   ]
  },
  "HOME": {
   "word": "HOME",
   "roles": [
    {
     "kind": "noun",
     "of": "CAMHOUSE"
    },
    {
     "kind": "noun",
     "of": "OUTSIDE-MANSION"
    },
    {
     "kind": "noun",
     "of": "YOUR-HOUSE"
    },
    {
     "kind": "noun",
     "of": "OLD-HOUSE"
    },
    {
     "kind": "noun",
     "of": "FLAT"
    }
   ]
  },
  "CAMOUFLAGED": {
   "word": "CAMOUFLAGED",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAMHOUSE"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAMHOUSE"
    }
   ]
  },
  "BROWN": {
   "word": "BROWN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAMHOUSE"
    }
   ]
  },
  "NEIGHBOR'S": {
   "word": "NEIGHBOR'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAMHOUSE"
    }
   ]
  },
  "ACTUALLY": {
   "word": "ACTUALLY",
   "roles": [
    {
     "kind": "noun",
     "of": "INCIDENT"
    }
   ]
  },
  "UNFORTUNATELY": {
   "word": "UNFORTUNATELY",
   "roles": [
    {
     "kind": "noun",
     "of": "UNFORTUN"
    }
   ]
  },
  "MACHINE": {
   "word": "MACHINE",
   "roles": [
    {
     "kind": "noun",
     "of": "MACHGUN"
    },
    {
     "kind": "adjective",
     "of": "MACHGUN"
    },
    {
     "kind": "noun",
     "of": "MACHINE"
    }
   ]
  },
  "INTERCOM": {
   "word": "INTERCOM",
   "roles": [
    {
     "kind": "noun",
     "of": "INTERCOM"
    },
    {
     "kind": "adjective",
     "of": "INTERCOM"
    }
   ]
  },
  "VOICE": {
   "word": "VOICE",
   "roles": [
    {
     "kind": "noun",
     "of": "INTERCOM"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "INTERCOM"
    },
    {
     "kind": "noun",
     "of": "PEN-MAILBOX"
    },
    {
     "kind": "noun",
     "of": "MAILBOX"
    }
   ]
  },
  "GATEWAY": {
   "word": "GATEWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "BWGATE"
    }
   ]
  },
  "FENCE": {
   "word": "FENCE",
   "roles": [
    {
     "kind": "noun",
     "of": "BWGATE"
    },
    {
     "kind": "noun",
     "of": "FENCE"
    },
    {
     "kind": "noun",
     "of": "LFENCE"
    }
   ]
  },
  "PERIODICAL": {
   "word": "PERIODICAL",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGAZINE"
    }
   ]
  },
  "PARANOIA": {
   "word": "PARANOIA",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "MAGAZINE"
    }
   ]
  },
  "BLURB": {
   "word": "BLURB",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGAZINE"
    }
   ]
  },
  "MAG": {
   "word": "MAG",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGAZINE"
    }
   ]
  },
  "STICKER": {
   "word": "STICKER",
   "roles": [
    {
     "kind": "noun",
     "of": "MAGAZINE"
    },
    {
     "kind": "noun",
     "of": "FLYER"
    },
    {
     "kind": "noun",
     "of": "COUPON"
    },
    {
     "kind": "noun",
     "of": "ENVELOPE"
    }
   ]
  },
  "POPULAR": {
   "word": "POPULAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAGAZINE"
    }
   ]
  },
  "POSTAL": {
   "word": "POSTAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAGAZINE"
    },
    {
     "kind": "adjective",
     "of": "FLYER"
    },
    {
     "kind": "adjective",
     "of": "COUPON"
    },
    {
     "kind": "adjective",
     "of": "ENVELOPE"
    }
   ]
  },
  "CAMERA": {
   "word": "CAMERA",
   "roles": [
    {
     "kind": "noun",
     "of": "CAMERA"
    }
   ]
  },
  "SPY": {
   "word": "SPY",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAMERA"
    }
   ]
  },
  "HIDDEN": {
   "word": "HIDDEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAMERA"
    }
   ]
  },
  "WELL-HIDDEN": {
   "word": "WELL-HIDDEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAMERA"
    }
   ]
  },
  "BEAST": {
   "word": "BEAST",
   "roles": [
    {
     "kind": "noun",
     "of": "LLAMA"
    }
   ]
  },
  "ANIMAL": {
   "word": "ANIMAL",
   "roles": [
    {
     "kind": "noun",
     "of": "LLAMA"
    }
   ]
  },
  "SALESCLERK": {
   "word": "SALESCLERK",
   "roles": [
    {
     "kind": "noun",
     "of": "CLERK"
    }
   ]
  },
  "SALESMAN": {
   "word": "SALESMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "CLERK"
    }
   ]
  },
  "SALES": {
   "word": "SALES",
   "roles": [
    {
     "kind": "adjective",
     "of": "CLERK"
    }
   ]
  },
  "WAITRESS": {
   "word": "WAITRESS",
   "roles": [
    {
     "kind": "noun",
     "of": "WAITRESS"
    }
   ]
  },
  "WAITPERSON": {
   "word": "WAITPERSON",
   "roles": [
    {
     "kind": "noun",
     "of": "WAITRESS"
    },
    {
     "kind": "noun",
     "of": "WAITER"
    }
   ]
  },
  "HARRIED": {
   "word": "HARRIED",
   "roles": [
    {
     "kind": "adjective",
     "of": "WAITRESS"
    }
   ]
  },
  "WAITER": {
   "word": "WAITER",
   "roles": [
    {
     "kind": "noun",
     "of": "WAITER"
    }
   ]
  },
  "SURLY": {
   "word": "SURLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WAITER"
    }
   ]
  },
  "AGENT": {
   "word": "AGENT",
   "roles": [
    {
     "kind": "noun",
     "of": "AGENT"
    }
   ]
  },
  "TRAVEL": {
   "word": "TRAVEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "AGENT"
    },
    {
     "kind": "adjective",
     "of": "AGENCY"
    }
   ]
  },
  "CALIFORNIA": {
   "word": "CALIFORNIA",
   "roles": [
    {
     "kind": "noun",
     "of": "CALIFORNIA"
    }
   ]
  },
  "OPTOMETRISTS": {
   "word": "OPTOMETRISTS",
   "roles": [
    {
     "kind": "noun",
     "of": "OPTOMETRISTS"
    }
   ]
  },
  "MATRON": {
   "word": "MATRON",
   "roles": [
    {
     "kind": "noun",
     "of": "MATRON"
    },
    {
     "kind": "noun",
     "of": "PMATRON"
    }
   ]
  },
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "MATRON"
    },
    {
     "kind": "adjective",
     "of": "PMATRON"
    },
    {
     "kind": "adjective",
     "of": "OUTSIDE-MANSION"
    },
    {
     "kind": "adjective",
     "of": "OLD-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "PAPERS"
    },
    {
     "kind": "adjective",
     "of": "RADIO"
    }
   ]
  },
  "AGED": {
   "word": "AGED",
   "roles": [
    {
     "kind": "adjective",
     "of": "MATRON"
    },
    {
     "kind": "adjective",
     "of": "PMATRON"
    }
   ]
  },
  "DEAF": {
   "word": "DEAF",
   "roles": [
    {
     "kind": "adjective",
     "of": "MATRON"
    }
   ]
  },
  "MACAW": {
   "word": "MACAW",
   "roles": [
    {
     "kind": "noun",
     "of": "MACAW"
    }
   ]
  },
  "BIRD": {
   "word": "BIRD",
   "roles": [
    {
     "kind": "noun",
     "of": "MACAW"
    }
   ]
  },
  "MERLIN": {
   "word": "MERLIN",
   "roles": [
    {
     "kind": "noun",
     "of": "MACAW"
    }
   ]
  },
  "MISTER": {
   "word": "MISTER",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUSY"
    }
   ]
  },
  "COLLECTOR": {
   "word": "COLLECTOR",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUSY"
    }
   ]
  },
  "PHILATELIST": {
   "word": "PHILATELIST",
   "roles": [
    {
     "kind": "noun",
     "of": "MOUSY"
    }
   ]
  },
  "MOUSY": {
   "word": "MOUSY",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOUSY"
    }
   ]
  },
  "LITTLE": {
   "word": "LITTLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOUSY"
    }
   ]
  },
  "DELIVERY": {
   "word": "DELIVERY",
   "roles": [
    {
     "kind": "adjective",
     "of": "DMAN"
    }
   ]
  },
  "YOUNG": {
   "word": "YOUNG",
   "roles": [
    {
     "kind": "adjective",
     "of": "DMAN"
    },
    {
     "kind": "adjective",
     "of": "NERD"
    }
   ]
  },
  "NERD": {
   "word": "NERD",
   "roles": [
    {
     "kind": "noun",
     "of": "NERD"
    }
   ]
  },
  "NERDY": {
   "word": "NERDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "NERD"
    }
   ]
  },
  "NERDY-LOOKING": {
   "word": "NERDY-LOOKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "NERD"
    }
   ]
  },
  "PARLOR": {
   "word": "PARLOR",
   "roles": [
    {
     "kind": "noun",
     "of": "FROOM"
    }
   ]
  },
  "LIVING": {
   "word": "LIVING",
   "roles": [
    {
     "kind": "adjective",
     "of": "FROOM"
    }
   ]
  },
  "OTHER": {
   "word": "OTHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "FROOM"
    },
    {
     "kind": "adjective",
     "of": "BROOM"
    }
   ]
  },
  "FRONT": {
   "word": "FRONT",
   "roles": [
    {
     "kind": "adjective",
     "of": "FROOM"
    },
    {
     "kind": "adjective",
     "of": "FROOM-DOOR"
    },
    {
     "kind": "adjective",
     "of": "FARM-DOOR"
    },
    {
     "kind": "adjective",
     "of": "MANSION-DOOR"
    },
    {
     "kind": "adjective",
     "of": "PAGE-1"
    }
   ]
  },
  "ALLEY": {
   "word": "ALLEY",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-ALLEY"
    }
   ]
  },
  "ALLEYWAY": {
   "word": "ALLEYWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-ALLEY"
    }
   ]
  },
  "AGENCY": {
   "word": "AGENCY",
   "roles": [
    {
     "kind": "noun",
     "of": "AGENCY"
    }
   ]
  },
  "BOOKSTORE": {
   "word": "BOOKSTORE",
   "roles": [
    {
     "kind": "noun",
     "of": "BSTORE"
    }
   ]
  },
  "STORE": {
   "word": "STORE",
   "roles": [
    {
     "kind": "noun",
     "of": "BSTORE"
    }
   ]
  },
  "BOOKSHOP": {
   "word": "BOOKSHOP",
   "roles": [
    {
     "kind": "noun",
     "of": "BSTORE"
    }
   ]
  },
  "SHOP": {
   "word": "SHOP",
   "roles": [
    {
     "kind": "noun",
     "of": "BSTORE"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BSTORE"
    },
    {
     "kind": "noun",
     "of": "BESTSELLERS"
    },
    {
     "kind": "noun",
     "of": "CUTOUTS"
    },
    {
     "kind": "noun",
     "of": "ABOOK"
    },
    {
     "kind": "noun",
     "of": "COUPON"
    }
   ]
  },
  "RESTAURANT": {
   "word": "RESTAURANT",
   "roles": [
    {
     "kind": "noun",
     "of": "DINER"
    }
   ]
  },
  "DINER": {
   "word": "DINER",
   "roles": [
    {
     "kind": "noun",
     "of": "DINER"
    }
   ]
  },
  "MILLIE'S": {
   "word": "MILLIE'S",
   "roles": [
    {
     "kind": "noun",
     "of": "DINER"
    },
    {
     "kind": "adjective",
     "of": "DINER"
    }
   ]
  },
  "HAMBURGER": {
   "word": "HAMBURGER",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    },
    {
     "kind": "noun",
     "of": "BURGER"
    }
   ]
  },
  "BURGER": {
   "word": "BURGER",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    },
    {
     "kind": "noun",
     "of": "BURGER"
    }
   ]
  },
  "SANDWICH": {
   "word": "SANDWICH",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    },
    {
     "kind": "noun",
     "of": "BURGER"
    }
   ]
  },
  "FARM": {
   "word": "FARM",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-FARM"
    },
    {
     "kind": "adjective",
     "of": "IN-FARM"
    },
    {
     "kind": "adjective",
     "of": "FARM-DOOR"
    }
   ]
  },
  "FARMHOUSE": {
   "word": "FARMHOUSE",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-FARM"
    },
    {
     "kind": "adjective",
     "of": "FARM-DOOR"
    }
   ]
  },
  "MANSION": {
   "word": "MANSION",
   "roles": [
    {
     "kind": "noun",
     "of": "OUTSIDE-MANSION"
    }
   ]
  },
  "NOARTICLE": {
   "word": "NOARTICLE",
   "roles": [
    {
     "kind": "noun",
     "of": "OUTSIDE-MANSION"
    }
   ]
  },
  "DILAPIDATED": {
   "word": "DILAPIDATED",
   "roles": [
    {
     "kind": "adjective",
     "of": "OUTSIDE-MANSION"
    }
   ]
  },
  "GAP": {
   "word": "GAP",
   "roles": [
    {
     "kind": "noun",
     "of": "FENCE"
    }
   ]
  },
  "TALL": {
   "word": "TALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "FENCE"
    }
   ]
  },
  "PORCH": {
   "word": "PORCH",
   "roles": [
    {
     "kind": "noun",
     "of": "IN-PORCH"
    }
   ]
  },
  "TROPHY": {
   "word": "TROPHY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROPHY-ROOM"
    }
   ]
  },
  "HALLWAY": {
   "word": "HALLWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "THALL"
    },
    {
     "kind": "noun",
     "of": "MHALL"
    }
   ]
  },
  "CORRIDOR": {
   "word": "CORRIDOR",
   "roles": [
    {
     "kind": "noun",
     "of": "THALL"
    },
    {
     "kind": "noun",
     "of": "MHALL"
    }
   ]
  },
  "TENEMENT": {
   "word": "TENEMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "THALL"
    }
   ]
  },
  "TENEMENTS": {
   "word": "TENEMENTS",
   "roles": [
    {
     "kind": "noun",
     "of": "THALL"
    }
   ]
  },
  "MUM": {
   "word": "MUM",
   "roles": [
    {
     "kind": "noun",
     "of": "QUEEN-MUM"
    }
   ]
  },
  "QUEEN": {
   "word": "QUEEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "QUEEN-MUM"
    }
   ]
  },
  "DOORBELL": {
   "word": "DOORBELL",
   "roles": [
    {
     "kind": "noun",
     "of": "DOORBELL"
    },
    {
     "kind": "noun",
     "of": "MANSION-BELL"
    }
   ]
  },
  "BELL": {
   "word": "BELL",
   "roles": [
    {
     "kind": "noun",
     "of": "DOORBELL"
    },
    {
     "kind": "noun",
     "of": "MANSION-BELL"
    }
   ]
  },
  "STREET": {
   "word": "STREET",
   "roles": [
    {
     "kind": "noun",
     "of": "GSTREET"
    },
    {
     "kind": "adjective",
     "of": "STREETNUMBERS"
    }
   ]
  },
  "ROAD": {
   "word": "ROAD",
   "roles": [
    {
     "kind": "noun",
     "of": "GSTREET"
    }
   ]
  },
  "WRISTWATCH": {
   "word": "WRISTWATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "WRISTWATCH"
    }
   ]
  },
  "CLOCK": {
   "word": "CLOCK",
   "roles": [
    {
     "kind": "noun",
     "of": "WRISTWATCH"
    }
   ]
  },
  "WRIST": {
   "word": "WRIST",
   "roles": [
    {
     "kind": "adjective",
     "of": "WRISTWATCH"
    }
   ]
  },
  "DIGITAL": {
   "word": "DIGITAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "WRISTWATCH"
    }
   ]
  },
  "MINE": {
   "word": "MINE",
   "roles": [
    {
     "kind": "adjective",
     "of": "YOUR-HOUSE"
    },
    {
     "kind": "adjective",
     "of": "OLD-HOUSE"
    }
   ]
  },
  "BIG": {
   "word": "BIG",
   "roles": [
    {
     "kind": "adjective",
     "of": "YOUR-HOUSE"
    }
   ]
  },
  "PREVIOUS": {
   "word": "PREVIOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "OLD-HOUSE"
    }
   ]
  },
  "PANE": {
   "word": "PANE",
   "roles": [
    {
     "kind": "noun",
     "of": "YOUR-WINDOWS"
    }
   ]
  },
  "OFFICE": {
   "word": "OFFICE",
   "roles": [
    {
     "kind": "adjective",
     "of": "LANDF-DOOR"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "BTABLE"
    },
    {
     "kind": "noun",
     "of": "DTABLE"
    },
    {
     "kind": "noun",
     "of": "STAMP-TABLE"
    },
    {
     "kind": "noun",
     "of": "SEAT-TABLE"
    }
   ]
  },
  "WALLET": {
   "word": "WALLET",
   "roles": [
    {
     "kind": "noun",
     "of": "WALLET"
    }
   ]
  },
  "BILLFOLD": {
   "word": "BILLFOLD",
   "roles": [
    {
     "kind": "noun",
     "of": "WALLET"
    }
   ]
  },
  "TACKY": {
   "word": "TACKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALLET"
    }
   ]
  },
  "FLAKY": {
   "word": "FLAKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WALLET"
    }
   ]
  },
  "BEEZER": {
   "word": "BEEZER",
   "roles": [
    {
     "kind": "noun",
     "of": "BEEZER"
    },
    {
     "kind": "adjective",
     "of": "BEEZER"
    }
   ]
  },
  "CARDS": {
   "word": "CARDS",
   "roles": [
    {
     "kind": "noun",
     "of": "BEEZER"
    },
    {
     "kind": "noun",
     "of": "EXCESS"
    }
   ]
  },
  "CREDIT": {
   "word": "CREDIT",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEEZER"
    },
    {
     "kind": "adjective",
     "of": "EXCESS"
    }
   ]
  },
  "PLASTIC": {
   "word": "PLASTIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEEZER"
    },
    {
     "kind": "adjective",
     "of": "EXCESS"
    },
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "EXCESS": {
   "word": "EXCESS",
   "roles": [
    {
     "kind": "noun",
     "of": "EXCESS"
    },
    {
     "kind": "adjective",
     "of": "EXCESS"
    },
    {
     "kind": "adjective",
     "of": "US-TEXT"
    }
   ]
  },
  "HOLOGRAM": {
   "word": "HOLOGRAM",
   "roles": [
    {
     "kind": "noun",
     "of": "EXCESS"
    }
   ]
  },
  "YAK": {
   "word": "YAK",
   "roles": [
    {
     "kind": "noun",
     "of": "EXCESS"
    },
    {
     "kind": "adjective",
     "of": "EXCESS"
    }
   ]
  },
  "US": {
   "word": "US",
   "roles": [
    {
     "kind": "adjective",
     "of": "EXCESS"
    },
    {
     "kind": "adjective",
     "of": "US-TEXT"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "noun",
     "of": "LETTER"
    },
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "noun",
     "of": "MOUSYMAIL"
    },
    {
     "kind": "noun",
     "of": "SAFETY-CARD-TWO"
    },
    {
     "kind": "adjective",
     "of": "SAFETY-CARD-TWO"
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
     "kind": "adjective",
     "of": "SOFTWARE"
    }
   ]
  },
  "BOYSENBERRY": {
   "word": "BOYSENBERRY",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPUTER"
    },
    {
     "kind": "adjective",
     "of": "COMPUTER"
    },
    {
     "kind": "adjective",
     "of": "SOFTWARE"
    }
   ]
  },
  "KEYBOARD": {
   "word": "KEYBOARD",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPUTER"
    }
   ]
  },
  "MODULAR": {
   "word": "MODULAR",
   "roles": [
    {
     "kind": "adjective",
     "of": "COMPUTER"
    },
    {
     "kind": "adjective",
     "of": "MPLUG"
    }
   ]
  },
  "LAPTOP": {
   "word": "LAPTOP",
   "roles": [
    {
     "kind": "adjective",
     "of": "COMPUTER"
    }
   ]
  },
  "CARTRIDGE": {
   "word": "CARTRIDGE",
   "roles": [
    {
     "kind": "noun",
     "of": "ECLIPSE"
    },
    {
     "kind": "noun",
     "of": "RECIPE"
    },
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "noun",
     "of": "SOFTWARE"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  },
  "CART": {
   "word": "CART",
   "roles": [
    {
     "kind": "noun",
     "of": "ECLIPSE"
    },
    {
     "kind": "noun",
     "of": "RECIPE"
    },
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  },
  "CARTS": {
   "word": "CARTS",
   "roles": [
    {
     "kind": "noun",
     "of": "ECLIPSE"
    },
    {
     "kind": "noun",
     "of": "RECIPE"
    },
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  },
  "ROM": {
   "word": "ROM",
   "roles": [
    {
     "kind": "noun",
     "of": "ECLIPSE"
    },
    {
     "kind": "adjective",
     "of": "ECLIPSE"
    },
    {
     "kind": "noun",
     "of": "RECIPE"
    },
    {
     "kind": "adjective",
     "of": "RECIPE"
    },
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "adjective",
     "of": "ADVENTURE"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CARTRIDGE"
    },
    {
     "kind": "adjective",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  },
  "PROGRAM": {
   "word": "PROGRAM",
   "roles": [
    {
     "kind": "noun",
     "of": "ECLIPSE"
    },
    {
     "kind": "adjective",
     "of": "ECLIPSE"
    },
    {
     "kind": "noun",
     "of": "RECIPE"
    },
    {
     "kind": "adjective",
     "of": "RECIPE"
    },
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "adjective",
     "of": "ADVENTURE"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CARTRIDGE"
    },
    {
     "kind": "adjective",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  },
  "SOFTWARE": {
   "word": "SOFTWARE",
   "roles": [
    {
     "kind": "noun",
     "of": "ECLIPSE"
    },
    {
     "kind": "adjective",
     "of": "ECLIPSE"
    },
    {
     "kind": "noun",
     "of": "RECIPE"
    },
    {
     "kind": "adjective",
     "of": "RECIPE"
    },
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "adjective",
     "of": "ADVENTURE"
    },
    {
     "kind": "noun",
     "of": "SOFTWARE"
    },
    {
     "kind": "adjective",
     "of": "SOFTWARE"
    },
    {
     "kind": "noun",
     "of": "RANDOM-CARTRIDGE"
    },
    {
     "kind": "adjective",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  },
  "PREDICTOR": {
   "word": "PREDICTOR",
   "roles": [
    {
     "kind": "noun",
     "of": "ECLIPSE"
    },
    {
     "kind": "adjective",
     "of": "ECLIPSE"
    }
   ]
  },
  "ECLIPSE": {
   "word": "ECLIPSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ECLIPSE"
    }
   ]
  },
  "PREDICTION": {
   "word": "PREDICTION",
   "roles": [
    {
     "kind": "adjective",
     "of": "ECLIPSE"
    }
   ]
  },
  "RECIPE": {
   "word": "RECIPE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECIPE"
    }
   ]
  },
  "RECIPES": {
   "word": "RECIPES",
   "roles": [
    {
     "kind": "adjective",
     "of": "RECIPE"
    }
   ]
  },
  "ADVENTURE": {
   "word": "ADVENTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "adjective",
     "of": "ADVENTURE"
    }
   ]
  },
  "GAME": {
   "word": "GAME",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURE"
    },
    {
     "kind": "adjective",
     "of": "ADVENTURE"
    }
   ]
  },
  "CASE": {
   "word": "CASE",
   "roles": [
    {
     "kind": "noun",
     "of": "ROMCASE"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROMCASE"
    },
    {
     "kind": "adjective",
     "of": "BURGER"
    },
    {
     "kind": "adjective",
     "of": "SAFETY-CARD-TWO"
    }
   ]
  },
  "MAILBOX": {
   "word": "MAILBOX",
   "roles": [
    {
     "kind": "noun",
     "of": "PEN-MAILBOX"
    },
    {
     "kind": "noun",
     "of": "MAILBOX"
    }
   ]
  },
  "SACK": {
   "word": "SACK",
   "roles": [
    {
     "kind": "noun",
     "of": "BAG"
    }
   ]
  },
  "TREATS": {
   "word": "TREATS",
   "roles": [
    {
     "kind": "noun",
     "of": "BAG"
    },
    {
     "kind": "noun",
     "of": "TREATS"
    }
   ]
  },
  "TREAT": {
   "word": "TREAT",
   "roles": [
    {
     "kind": "noun",
     "of": "BAG"
    },
    {
     "kind": "noun",
     "of": "TREATS"
    }
   ]
  },
  "SUPERSACK": {
   "word": "SUPERSACK",
   "roles": [
    {
     "kind": "noun",
     "of": "BAG"
    }
   ]
  },
  "BURLAP": {
   "word": "BURLAP",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAG"
    }
   ]
  },
  "LLAMEX": {
   "word": "LLAMEX",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREATS"
    }
   ]
  },
  "LLAMEX(R)": {
   "word": "LLAMEX(R)",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREATS"
    }
   ]
  },
  "BRAND": {
   "word": "BRAND",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREATS"
    }
   ]
  },
  "HIGH-FIB": {
   "word": "HIGH-FIB",
   "roles": [
    {
     "kind": "adjective",
     "of": "TREATS"
    }
   ]
  },
  "PEN": {
   "word": "PEN",
   "roles": [
    {
     "kind": "noun",
     "of": "LLAMA-PEN"
    }
   ]
  },
  "CAGE": {
   "word": "CAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "LLAMA-PEN"
    }
   ]
  },
  "STAMPS": {
   "word": "STAMPS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAMPS"
    }
   ]
  },
  "COLLECTION": {
   "word": "COLLECTION",
   "roles": [
    {
     "kind": "noun",
     "of": "STAMPS"
    }
   ]
  },
  "POSTAGE": {
   "word": "POSTAGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAMPS"
    },
    {
     "kind": "adjective",
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
  "AD": {
   "word": "AD",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAFLET"
    }
   ]
  },
  "ADVERTISEMENT": {
   "word": "ADVERTISEMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAFLET"
    }
   ]
  },
  "AI-AI": {
   "word": "AI-AI",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "adjective",
     "of": "LEAFLET"
    }
   ]
  },
  "MONKEY": {
   "word": "MONKEY",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "adjective",
     "of": "LEAFLET"
    }
   ]
  },
  "APE": {
   "word": "APE",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAFLET"
    },
    {
     "kind": "adjective",
     "of": "LEAFLET"
    }
   ]
  },
  "NAME": {
   "word": "NAME",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAFLET"
    }
   ]
  },
  "JUNK": {
   "word": "JUNK",
   "roles": [
    {
     "kind": "adjective",
     "of": "LEAFLET"
    }
   ]
  },
  "DOWNTOWN": {
   "word": "DOWNTOWN",
   "roles": [
    {
     "kind": "noun",
     "of": "DOWNTOWN"
    }
   ]
  },
  "TOWN": {
   "word": "TOWN",
   "roles": [
    {
     "kind": "noun",
     "of": "DOWNTOWN"
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
  "SHELVING": {
   "word": "SHELVING",
   "roles": [
    {
     "kind": "noun",
     "of": "SHELVES"
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
  "BESTSELLER": {
   "word": "BESTSELLER",
   "roles": [
    {
     "kind": "noun",
     "of": "BESTSELLERS"
    },
    {
     "kind": "adjective",
     "of": "BESTSELLERS"
    }
   ]
  },
  "SELLERS": {
   "word": "SELLERS",
   "roles": [
    {
     "kind": "noun",
     "of": "BESTSELLERS"
    }
   ]
  },
  "SELLER": {
   "word": "SELLER",
   "roles": [
    {
     "kind": "noun",
     "of": "BESTSELLERS"
    }
   ]
  },
  "BOOKS": {
   "word": "BOOKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BESTSELLERS"
    },
    {
     "kind": "noun",
     "of": "CUTOUTS"
    }
   ]
  },
  "TITLE": {
   "word": "TITLE",
   "roles": [
    {
     "kind": "noun",
     "of": "BESTSELLERS"
    },
    {
     "kind": "noun",
     "of": "CUTOUTS"
    }
   ]
  },
  "TITLES": {
   "word": "TITLES",
   "roles": [
    {
     "kind": "noun",
     "of": "BESTSELLERS"
    },
    {
     "kind": "noun",
     "of": "CUTOUTS"
    }
   ]
  },
  "BEST": {
   "word": "BEST",
   "roles": [
    {
     "kind": "adjective",
     "of": "BESTSELLERS"
    }
   ]
  },
  "CUTOUTS": {
   "word": "CUTOUTS",
   "roles": [
    {
     "kind": "noun",
     "of": "CUTOUTS"
    },
    {
     "kind": "adjective",
     "of": "CUTOUTS"
    }
   ]
  },
  "CUTOUT": {
   "word": "CUTOUT",
   "roles": [
    {
     "kind": "noun",
     "of": "CUTOUTS"
    },
    {
     "kind": "adjective",
     "of": "CUTOUTS"
    }
   ]
  },
  "REMAINDER": {
   "word": "REMAINDER",
   "roles": [
    {
     "kind": "noun",
     "of": "CUTOUTS"
    },
    {
     "kind": "adjective",
     "of": "CUTOUTS"
    }
   ]
  },
  "BARGAIN": {
   "word": "BARGAIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CUTOUTS"
    }
   ]
  },
  "CHEAP": {
   "word": "CHEAP",
   "roles": [
    {
     "kind": "adjective",
     "of": "CUTOUTS"
    }
   ]
  },
  "STOCK": {
   "word": "STOCK",
   "roles": [
    {
     "kind": "noun",
     "of": "SOFTWARE"
    }
   ]
  },
  "REGISTER": {
   "word": "REGISTER",
   "roles": [
    {
     "kind": "noun",
     "of": "REGISTER"
    }
   ]
  },
  "DRAWER": {
   "word": "DRAWER",
   "roles": [
    {
     "kind": "noun",
     "of": "REGISTER"
    }
   ]
  },
  "ROUND-TRIP": {
   "word": "ROUND-TRIP",
   "roles": [
    {
     "kind": "adjective",
     "of": "TICKET"
    }
   ]
  },
  "TROUGH": {
   "word": "TROUGH",
   "roles": [
    {
     "kind": "noun",
     "of": "TROUGH"
    }
   ]
  },
  "FEEDING": {
   "word": "FEEDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROUGH"
    }
   ]
  },
  "LLAMA'S": {
   "word": "LLAMA'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROUGH"
    }
   ]
  },
  "WORDS": {
   "word": "WORDS",
   "roles": [
    {
     "kind": "noun",
     "of": "FARM-NOTICE"
    }
   ]
  },
  "PILE": {
   "word": "PILE",
   "roles": [
    {
     "kind": "noun",
     "of": "PAPERS"
    }
   ]
  },
  "STACK": {
   "word": "STACK",
   "roles": [
    {
     "kind": "noun",
     "of": "PAPERS"
    }
   ]
  },
  "NEWSPAPERS": {
   "word": "NEWSPAPERS",
   "roles": [
    {
     "kind": "noun",
     "of": "PAPERS"
    }
   ]
  },
  "PAPERS": {
   "word": "PAPERS",
   "roles": [
    {
     "kind": "noun",
     "of": "PAPERS"
    }
   ]
  },
  "SOGGY": {
   "word": "SOGGY",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAPERS"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "MHALL"
    }
   ]
  },
  "ORNATE": {
   "word": "ORNATE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MANSION-DOOR"
    }
   ]
  },
  "RECORDING": {
   "word": "RECORDING",
   "roles": [
    {
     "kind": "noun",
     "of": "RADIO"
    }
   ]
  },
  "OLD-FASHIONED": {
   "word": "OLD-FASHIONED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RADIO"
    }
   ]
  },
  "TRUMPET": {
   "word": "TRUMPET",
   "roles": [
    {
     "kind": "noun",
     "of": "TRUMPET"
    }
   ]
  },
  "HEARING": {
   "word": "HEARING",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRUMPET"
    }
   ]
  },
  "WEAPON": {
   "word": "WEAPON",
   "roles": [
    {
     "kind": "noun",
     "of": "EGUN"
    }
   ]
  },
  "RIFLE": {
   "word": "RIFLE",
   "roles": [
    {
     "kind": "noun",
     "of": "EGUN"
    }
   ]
  },
  "ELEPHANT": {
   "word": "ELEPHANT",
   "roles": [
    {
     "kind": "adjective",
     "of": "EGUN"
    }
   ]
  },
  "LOCKED": {
   "word": "LOCKED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FLAT-DOOR"
    }
   ]
  },
  "FLAT": {
   "word": "FLAT",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAT"
    }
   ]
  },
  "APARTMENT": {
   "word": "APARTMENT",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAT"
    }
   ]
  },
  "PORTRAIT": {
   "word": "PORTRAIT",
   "roles": [
    {
     "kind": "noun",
     "of": "PAINTING"
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
  "PICTURE": {
   "word": "PICTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "PAINTING"
    }
   ]
  },
  "DAMAGED": {
   "word": "DAMAGED",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAINTING"
    }
   ]
  },
  "PERCH": {
   "word": "PERCH",
   "roles": [
    {
     "kind": "noun",
     "of": "PERCH"
    }
   ]
  },
  "BIRD'S": {
   "word": "BIRD'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "PERCH"
    }
   ]
  },
  "MACAW'S": {
   "word": "MACAW'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "PERCH"
    }
   ]
  },
  "PHONE-ANSWERING": {
   "word": "PHONE-ANSWERING",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "ANSWERING": {
   "word": "ANSWERING",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "COMBINATION": {
   "word": "COMBINATION",
   "roles": [
    {
     "kind": "adjective",
     "of": "MACHINE"
    }
   ]
  },
  "MESSAGES": {
   "word": "MESSAGES",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYBACK-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "PLAYBACK-BUTTON"
    }
   ]
  },
  "MESSAGE": {
   "word": "MESSAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYBACK-BUTTON"
    },
    {
     "kind": "adjective",
     "of": "PLAYBACK-BUTTON"
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
  "ADDRESSES": {
   "word": "ADDRESSES",
   "roles": [
    {
     "kind": "noun",
     "of": "ABOOK"
    }
   ]
  },
  "LOOSELEAF": {
   "word": "LOOSELEAF",
   "roles": [
    {
     "kind": "adjective",
     "of": "ABOOK"
    }
   ]
  },
  "LOOSE-LEAF": {
   "word": "LOOSE-LEAF",
   "roles": [
    {
     "kind": "adjective",
     "of": "ABOOK"
    }
   ]
  },
  "PAGES": {
   "word": "PAGES",
   "roles": [
    {
     "kind": "noun",
     "of": "PAGE-3"
    },
    {
     "kind": "noun",
     "of": "PAGE-2"
    },
    {
     "kind": "noun",
     "of": "PAGE-1"
    }
   ]
  },
  "THREE": {
   "word": "THREE",
   "roles": [
    {
     "kind": "noun",
     "of": "PAGE-3"
    }
   ]
  },
  "LAST": {
   "word": "LAST",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAGE-3"
    },
    {
     "kind": "adjective",
     "of": "RIGHT-HANDLE"
    }
   ]
  },
  "FINAL": {
   "word": "FINAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAGE-3"
    }
   ]
  },
  "THIRD": {
   "word": "THIRD",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAGE-3"
    },
    {
     "kind": "adjective",
     "of": "RIGHT-HANDLE"
    }
   ]
  },
  "MIDDLE": {
   "word": "MIDDLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAGE-2"
    },
    {
     "kind": "adjective",
     "of": "MIDDLE-HANDLE"
    }
   ]
  },
  "SECOND": {
   "word": "SECOND",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAGE-2"
    },
    {
     "kind": "adjective",
     "of": "MIDDLE-HANDLE"
    }
   ]
  },
  "ONE": {
   "word": "ONE",
   "roles": [
    {
     "kind": "noun",
     "of": "PAGE-1"
    }
   ]
  },
  "FIRST": {
   "word": "FIRST",
   "roles": [
    {
     "kind": "adjective",
     "of": "PAGE-1"
    },
    {
     "kind": "adjective",
     "of": "LEFT-HANDLE"
    }
   ]
  },
  "TRUST": {
   "word": "TRUST",
   "roles": [
    {
     "kind": "noun",
     "of": "GBANK"
    },
    {
     "kind": "adjective",
     "of": "GBANK"
    }
   ]
  },
  "FILLMORE": {
   "word": "FILLMORE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GBANK"
    }
   ]
  },
  "FIDUCIARY": {
   "word": "FIDUCIARY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GBANK"
    }
   ]
  },
  "SHREDDED": {
   "word": "SHREDDED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SHITMAIL"
    }
   ]
  },
  "FLYER": {
   "word": "FLYER",
   "roles": [
    {
     "kind": "noun",
     "of": "FLYER"
    }
   ]
  },
  "BOOKLET": {
   "word": "BOOKLET",
   "roles": [
    {
     "kind": "noun",
     "of": "COUPON"
    }
   ]
  },
  "COUPONS": {
   "word": "COUPONS",
   "roles": [
    {
     "kind": "noun",
     "of": "COUPON"
    }
   ]
  },
  "COUPON": {
   "word": "COUPON",
   "roles": [
    {
     "kind": "adjective",
     "of": "COUPON"
    }
   ]
  },
  "ENVELOPE": {
   "word": "ENVELOPE",
   "roles": [
    {
     "kind": "noun",
     "of": "ENVELOPE"
    }
   ]
  },
  "MEMO": {
   "word": "MEMO",
   "roles": [
    {
     "kind": "noun",
     "of": "US-TEXT"
    }
   ]
  },
  "CHECK": {
   "word": "CHECK",
   "roles": [
    {
     "kind": "noun",
     "of": "CHECK"
    }
   ]
  },
  "CHEQUE": {
   "word": "CHEQUE",
   "roles": [
    {
     "kind": "noun",
     "of": "CHECK"
    }
   ]
  },
  "PLUSSIGN": {
   "word": "PLUSSIGN",
   "roles": [
    {
     "kind": "noun",
     "of": "CHECK"
    }
   ]
  },
  "-": {
   "word": "-",
   "roles": [
    {
     "kind": "noun",
     "of": "CHECK"
    }
   ]
  },
  "PLUS": {
   "word": "PLUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHECK"
    }
   ]
  },
  "MINUS": {
   "word": "MINUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHECK"
    }
   ]
  },
  "MONEY": {
   "word": "MONEY",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    },
    {
     "kind": "adjective",
     "of": "MONEY"
    }
   ]
  },
  "DOLLARS": {
   "word": "DOLLARS",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "DOLLAR": {
   "word": "DOLLAR",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "BUCK": {
   "word": "BUCK",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "BUCKS": {
   "word": "BUCKS",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "CENTS": {
   "word": "CENTS",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "CENT": {
   "word": "CENT",
   "roles": [
    {
     "kind": "noun",
     "of": "MONEY"
    }
   ]
  },
  "CAB": {
   "word": "CAB",
   "roles": [
    {
     "kind": "noun",
     "of": "CAB"
    },
    {
     "kind": "adjective",
     "of": "CAB"
    },
    {
     "kind": "adjective",
     "of": "CAB-DRIVER"
    },
    {
     "kind": "adjective",
     "of": "CAB-NOTICE"
    }
   ]
  },
  "TAXI": {
   "word": "TAXI",
   "roles": [
    {
     "kind": "noun",
     "of": "CAB"
    },
    {
     "kind": "adjective",
     "of": "CAB"
    },
    {
     "kind": "adjective",
     "of": "CAB-DRIVER"
    }
   ]
  },
  "GETLOST": {
   "word": "GETLOST",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAB"
    }
   ]
  },
  "DRIVER": {
   "word": "DRIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "CAB-DRIVER"
    }
   ]
  },
  "CABBIE": {
   "word": "CABBIE",
   "roles": [
    {
     "kind": "noun",
     "of": "CAB-DRIVER"
    }
   ]
  },
  "PERMISSION": {
   "word": "PERMISSION",
   "roles": [
    {
     "kind": "noun",
     "of": "REQUEST-OBJECT"
    }
   ]
  },
  "LAMINATED": {
   "word": "LAMINATED",
   "roles": [
    {
     "kind": "adjective",
     "of": "SAFETY-CARD-TWO"
    }
   ]
  },
  "NATIVES": {
   "word": "NATIVES",
   "roles": [
    {
     "kind": "noun",
     "of": "NATIVES"
    }
   ]
  },
  "NATIVE": {
   "word": "NATIVE",
   "roles": [
    {
     "kind": "noun",
     "of": "NATIVES"
    }
   ]
  },
  "TRIBE": {
   "word": "TRIBE",
   "roles": [
    {
     "kind": "noun",
     "of": "NATIVES"
    }
   ]
  },
  "ODD": {
   "word": "ODD",
   "roles": [
    {
     "kind": "adjective",
     "of": "ODD-GATE"
    }
   ]
  },
  "CURIOUS": {
   "word": "CURIOUS",
   "roles": [
    {
     "kind": "adjective",
     "of": "ODD-GATE"
    }
   ]
  },
  "ODD-LOOKING": {
   "word": "ODD-LOOKING",
   "roles": [
    {
     "kind": "adjective",
     "of": "ODD-GATE"
    }
   ]
  },
  "LOCKER": {
   "word": "LOCKER",
   "roles": [
    {
     "kind": "adjective",
     "of": "ODD-GATE"
    }
   ]
  },
  "KNOB": {
   "word": "KNOB",
   "roles": [
    {
     "kind": "noun",
     "of": "LEFT-HANDLE"
    },
    {
     "kind": "noun",
     "of": "MIDDLE-HANDLE"
    },
    {
     "kind": "noun",
     "of": "RIGHT-HANDLE"
    }
   ]
  },
  "ARM": {
   "word": "ARM",
   "roles": [
    {
     "kind": "noun",
     "of": "LEFT-HANDLE"
    },
    {
     "kind": "noun",
     "of": "MIDDLE-HANDLE"
    },
    {
     "kind": "noun",
     "of": "RIGHT-HANDLE"
    }
   ]
  },
  "HANDLES": {
   "word": "HANDLES",
   "roles": [
    {
     "kind": "noun",
     "of": "LEFT-HANDLE"
    },
    {
     "kind": "noun",
     "of": "MIDDLE-HANDLE"
    },
    {
     "kind": "noun",
     "of": "RIGHT-HANDLE"
    }
   ]
  },
  "CENTER": {
   "word": "CENTER",
   "roles": [
    {
     "kind": "adjective",
     "of": "MIDDLE-HANDLE"
    }
   ]
  },
  "CENTRE": {
   "word": "CENTRE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MIDDLE-HANDLE"
    }
   ]
  },
  "KEYCARD": {
   "word": "KEYCARD",
   "roles": [
    {
     "kind": "noun",
     "of": "KEY"
    }
   ]
  },
  "KEY-CARD": {
   "word": "KEY-CARD",
   "roles": [
    {
     "kind": "noun",
     "of": "KEY"
    }
   ]
  },
  "MAGNETIC": {
   "word": "MAGNETIC",
   "roles": [
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "UNLABELLED": {
   "word": "UNLABELLED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  },
  "UNLABELED": {
   "word": "UNLABELED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RANDOM-CARTRIDGE"
    }
   ]
  }
 },
 "files": [
  "b.zil",
  "bank.zil",
  "bankdefs.zil",
  "c2.zil",
  "clocker.zil",
  "computer.zil",
  "computerdefs.zil",
  "events.zil",
  "formdefs.zil",
  "forms.zil",
  "jet.zil",
  "jetdefs.zil",
  "macros.zil",
  "maze-program.zil",
  "maze.zil",
  "misc.zil",
  "mumble.zil",
  "nairport.zil",
  "njet.zil",
  "nmaze-program.zil",
  "nnairport.zil",
  "nnjet.zil",
  "old-parserdefs.zil",
  "other-misc.zil",
  "paranoid.zil",
  "parser.zil",
  "people.zil",
  "places.zil",
  "random-globals.zil",
  "syntax.zil",
  "things.zil",
  "verbs.zil",
  "xjet.zil",
  "xjetdefs.zil",
  "xxjet.zil",
  "xxjetdefs.zil",
  "zalagasa.zil"
 ]
};
