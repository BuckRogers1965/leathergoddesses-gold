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
  "NORTH-ANTECHAMBER": {
   "name": "NORTH-ANTECHAMBER",
   "file": "ante.zil",
   "line": 3,
   "endLine": 21,
   "desc": "Antechamber",
   "ldesc": "You are in the north end of the Chamber of Eternal Royalty. On the eastern\nand western walls are scenes carved in high relief depicting a royal figure,\npossibly meant to represent a new ruler, performing the ritual of the\n\"opening of the mouth and eyes\", the ceremony of restoring to the mummy\nof the departed Queen the use of its senses. The north wall of this area is\na thick, solid wall of stone. In the center of this wall is a timber lintel\non top of a doorway.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "NORTH-ANTE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "NORTH-ANTE-DOOR",
    "DOORWAY",
    "HIEROGLYPHS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-ANTECHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BURIAL-CHAMBER",
     "kind": "conditional",
     "condition": "NORTH-ANTE-DOOR IS OPEN",
     "else": "\"There's no way you can walk through the door.\"",
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BURIAL-CHAMBER",
     "kind": "conditional",
     "condition": "NORTH-ANTE-DOOR IS OPEN",
     "else": "\"There's no way you can walk through the door.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "T-LINTEL",
    "N-ANTE-SEAL"
   ],
   "source": "<ROOM NORTH-ANTECHAMBER\n      (IN ROOMS)\n      (DESC \"Antechamber\")\n      (LDESC \n\"You are in the north end of the Chamber of Eternal Royalty. On the eastern\nand western walls are scenes carved in high relief depicting a royal figure,\npossibly meant to represent a new ruler, performing the ritual of the\n\\\"opening of the mouth and eyes\\\", the ceremony of restoring to the mummy\nof the departed Queen the use of its senses. The north wall of this area is\na thick, solid wall of stone. In the center of this wall is a timber lintel\non top of a doorway.\")\n      (FLAGS RLANDBIT)\n      (SOUTH TO MID-ANTECHAMBER)\n      (NORTH TO BURIAL-CHAMBER IF NORTH-ANTE-DOOR IS OPEN ELSE\n\"There's no way you can walk through the door.\")\n      (IN TO BURIAL-CHAMBER IF NORTH-ANTE-DOOR IS OPEN ELSE\n\"There's no way you can walk through the door.\")\n      (GLOBAL NORTH-ANTE-DOOR DOORWAY HIEROGLYPHS)\n      (ACTION NORTH-ANTE-FCN)>",
   "referencedBy": [
    "BURIAL-CHAMBER-DESC",
    "BEAM-FCN",
    "DOORWAY-FCN",
    "HIERO-FCN",
    "V-BURN",
    "BREAK-SEAL"
   ]
  },
  "MID-ANTECHAMBER": {
   "name": "MID-ANTECHAMBER",
   "file": "ante.zil",
   "line": 36,
   "endLine": 53,
   "desc": "Antechamber",
   "ldesc": "You are in the middle of the Chamber of Eternal Royalty, the antechamber. The\nwalls in this section of the antechamber are covered with beveled tiles of deep\nblue lapis lazuli and pink alabaster. At ceiling height, on the west wall, are\npaintings depicting the marriage of the goddess Isis and the god Osiris. The\nAntechamber stretches out to the north and the south. There's just enough light\ncast for you to see the outline of the bottomless pit in the passage to the\neast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOVE-PLANK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DOORWAY",
    "PIT",
    "PICTURE-PANELS",
    "GEMS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-ANTECHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-ANTECHAMBER",
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
     "per": "WALK-BEAM-FCN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WALK-BEAM-FCN",
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "TILES"
   ],
   "source": "<ROOM MID-ANTECHAMBER\n      (IN ROOMS)\n      (DESC \"Antechamber\")\n      (LDESC \n\"You are in the middle of the Chamber of Eternal Royalty, the antechamber. The\nwalls in this section of the antechamber are covered with beveled tiles of deep\nblue lapis lazuli and pink alabaster. At ceiling height, on the west wall, are\npaintings depicting the marriage of the goddess Isis and the god Osiris. The\nAntechamber stretches out to the north and the south. There's just enough light\ncast for you to see the outline of the bottomless pit in the passage to the\neast.\")\n      (FLAGS RLANDBIT)\n      (NORTH TO NORTH-ANTECHAMBER)\n      (SOUTH TO SOUTH-ANTECHAMBER)\n      (EAST PER WALK-BEAM-FCN)\n      (OUT PER WALK-BEAM-FCN)\n      (GLOBAL DOORWAY PIT PICTURE-PANELS GEMS)\n      (ACTION MOVE-PLANK-FCN)>",
   "referencedBy": [
    "MOVE-PLANK-FCN",
    "JERRY-HACK-F",
    "BEAM-FCN",
    "DESCRIBE-BEAM-FCN"
   ]
  },
  "SOUTH-ANTECHAMBER": {
   "name": "SOUTH-ANTECHAMBER",
   "file": "ante.zil",
   "line": 142,
   "endLine": 158,
   "desc": "Antechamber",
   "ldesc": "You are in the southern end of the Chamber of Eternal Royalty. From here you\ncan see the room stretching out towards the north. The south wall is painted to\nresemble large baskets of lotus flowers with their blue petals framing an image\nof the Sun God, Amun Ra. The west wall has a timber doorway, inset several feet\ninto the rocks, outlining a door.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ANNEX-BEAM-MOVER",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HIEROGLYPHS",
    "DOORWAY",
    "ANNEX-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-ANTECHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ANNEX",
     "kind": "conditional",
     "condition": "ANNEX-DOOR IS OPEN",
     "else": "\"The way to the west is blocked by a closed door.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "ANNEX",
     "kind": "conditional",
     "condition": "ANNEX-DOOR IS OPEN",
     "else": "\"The way to the west is blocked by a closed door.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "ROCKS"
   ],
   "source": "<ROOM SOUTH-ANTECHAMBER\n      (IN ROOMS)\n      (DESC \"Antechamber\")\n      (LDESC\n\"You are in the southern end of the Chamber of Eternal Royalty. From here you\ncan see the room stretching out towards the north. The south wall is painted to\nresemble large baskets of lotus flowers with their blue petals framing an image\nof the Sun God, Amun Ra. The west wall has a timber doorway, inset several feet\ninto the rocks, outlining a door.\")\n      (FLAGS RLANDBIT)\n      (NORTH TO MID-ANTECHAMBER)\n      (WEST TO ANNEX IF ANNEX-DOOR IS OPEN ELSE\n\"The way to the west is blocked by a closed door.\")\n      (IN TO ANNEX IF ANNEX-DOOR IS OPEN ELSE\n\"The way to the west is blocked by a closed door.\")\n      (GLOBAL HIEROGLYPHS DOORWAY ANNEX-DOOR)\n      (ACTION ANNEX-BEAM-MOVER)>",
   "referencedBy": [
    "ANNEX-DOOR-FCN",
    "CLOSE-THE-ANNEX",
    "SET-THE-BEAM",
    "BEAM-FCN",
    "DOORWAY-FCN",
    "HIERO-FCN",
    "V-BURN"
   ]
  },
  "ANNEX": {
   "name": "ANNEX",
   "file": "ante.zil",
   "line": 214,
   "endLine": 229,
   "desc": "Annex",
   "ldesc": "You are in the Chamber of Rebirth, the Annex. As you gaze about this small\nroom, strange kohl-rimmed eyes gaze back at you from the painted figures\nwhich cover all of the walls. There are scenes of a great procession, with\nwhite-clad princesses offering gifts of precious oils and papyri to the\nmummified figure of the Queen. Bastet, the cat goddess, holds the mummy\nerect. Above you, painted on the ceiling, is the image of Tueris, the\nhippopotamus goddess. The only way out is through the doorway to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ANNEX-BEAM-MOVER",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "ANNEX-DOOR",
    "DOORWAY",
    "PICTURES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SOUTH-ANTECHAMBER",
     "kind": "conditional",
     "condition": "ANNEX-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "SOUTH-ANTECHAMBER",
     "kind": "conditional",
     "condition": "ANNEX-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SLAB",
    "SLAB-SEAM",
    "HOLE-4",
    "HOLE-3",
    "HOLE-2",
    "HOLE-1"
   ],
   "source": "<ROOM ANNEX\n      (IN ROOMS)\n      (DESC \"Annex\")\n      (LDESC\n\"You are in the Chamber of Rebirth, the Annex. As you gaze about this small\nroom, strange kohl-rimmed eyes gaze back at you from the painted figures\nwhich cover all of the walls. There are scenes of a great procession, with\nwhite-clad princesses offering gifts of precious oils and papyri to the\nmummified figure of the Queen. Bastet, the cat goddess, holds the mummy\nerect. Above you, painted on the ceiling, is the image of Tueris, the\nhippopotamus goddess. The only way out is through the doorway to the east.\")\n      (FLAGS RLANDBIT)\n      (EAST TO SOUTH-ANTECHAMBER IF ANNEX-DOOR IS OPEN)\n      (OUT TO SOUTH-ANTECHAMBER IF ANNEX-DOOR IS OPEN)\n      (GLOBAL ANNEX-DOOR DOORWAY PICTURES)\n      (ACTION ANNEX-BEAM-MOVER)>",
   "referencedBy": [
    "CLOSE-THE-ANNEX",
    "BEAM-FCN",
    "DOORWAY-FCN",
    "V-BURN"
   ]
  },
  "BURIAL-CHAMBER": {
   "name": "BURIAL-CHAMBER",
   "file": "ante.zil",
   "line": 445,
   "endLine": 453,
   "desc": "Burial Chamber",
   "ldesc": "LDESC",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BURIAL-CHAMBER-DESC",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "NORTH-ANTE-DOOR",
    "DOORWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-ANTECHAMBER",
     "kind": "conditional",
     "condition": "NORTH-ANTE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TREASURY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "ISIS",
    "NEPHTHYS",
    "NEITH",
    "SELKIS",
    "ARMS",
    "SARCOPH",
    "SARCOPH-COVER"
   ],
   "source": "<ROOM BURIAL-CHAMBER\n      (IN ROOMS)\n      (DESC \"Burial Chamber\")\n      (SOUTH TO NORTH-ANTECHAMBER IF NORTH-ANTE-DOOR IS OPEN)\n      (EAST TO TREASURY)\n      (FLAGS RLANDBIT)\n      (ACTION BURIAL-CHAMBER-DESC)\n      (LDESC \"LDESC\")\n      (GLOBAL NORTH-ANTE-DOOR DOORWAY)>",
   "referencedBy": [
    "BURIAL-CHAMBER-DESC",
    "NORTH-ANTE-DOOR-FCN",
    "DROP-THE-BLOCKS",
    "BEAM-FCN",
    "DOORWAY-FCN",
    "HIERO-FCN",
    "V-BURN"
   ]
  },
  "TREASURY": {
   "name": "TREASURY",
   "file": "ante.zil",
   "line": 512,
   "endLine": 520,
   "desc": "Treasury",
   "ldesc": "You are in the Chamber of Reconstitution of the Body, the Treasury. To the\nwest is a doorway leading back into the Burial Chamber.",
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
     "to": "BURIAL-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BURIAL-CHAMBER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SCARAB-TABLE"
   ],
   "source": "<ROOM TREASURY\n      (IN ROOMS)\n      (DESC \"Treasury\")\n      (LDESC\n\"You are in the Chamber of Reconstitution of the Body, the Treasury. To the\nwest is a doorway leading back into the Burial Chamber.\")\n      (FLAGS RLANDBIT)\n      (WEST TO BURIAL-CHAMBER)\n      (OUT TO BURIAL-CHAMBER)>",
   "referencedBy": []
  },
  "TOP-OF-STAIRS": {
   "name": "TOP-OF-STAIRS",
   "file": "ante.zil",
   "line": 683,
   "endLine": 698,
   "desc": "Top of Stairway",
   "ldesc": "You are at the top of a sixteen-step stairway. It leads west and down. The\nstrange passageway into the cube rooms lies to the south. The walls here are\npainted in somber colors -- deep ochres, browns and blacks, but the scenes the\npaintings depict are oddly gay. Priests smile, their hands lifted up high to\nAmun Ra, offering flower petals in their palms, while a young girl, bedecked\nin black, stands by watching, a twisted smile on her face.",
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
    "PICTURES",
    "STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "STAIRS-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "STAIRS-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "SECRET-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SECRET-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM TOP-OF-STAIRS\n      (IN ROOMS)\n      (DESC \"Top of Stairway\")\n      (LDESC \n\"You are at the top of a sixteen-step stairway. It leads west and down. The\nstrange passageway into the cube rooms lies to the south. The walls here are\npainted in somber colors -- deep ochres, browns and blacks, but the scenes the\npaintings depict are oddly gay. Priests smile, their hands lifted up high to\nAmun Ra, offering flower petals in their palms, while a young girl, bedecked\nin black, stands by watching, a twisted smile on her face.\")\n      (FLAGS RLANDBIT)\n      (WEST TO STAIRS-BOTTOM)\n      (DOWN TO STAIRS-BOTTOM)\n      (SOUTH TO SECRET-PASSAGE)\n      (UP TO SECRET-PASSAGE)\n      (GLOBAL PICTURES STAIRS)>",
   "referencedBy": []
  },
  "STAIRS-BOTTOM": {
   "name": "STAIRS-BOTTOM",
   "file": "ante.zil",
   "line": 701,
   "endLine": 713,
   "desc": "Bottom of Stairs",
   "ldesc": "You are at the bottom of the sixteen-step stairway. The stairway goes up to\nthe east, while to the west is solid plaster. Painted on the plaster\nare some hieroglyphs.",
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
    "HIEROGLYPHS",
    "STAIRS",
    "DOORWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "EAST-END-OF-PASSAGE",
     "kind": "conditional",
     "condition": "PLASTER-GONE",
     "else": "\"Solid plaster is blocking your way.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "TOP-OF-STAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "TOP-OF-STAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "PLASTER1"
   ],
   "source": "<ROOM STAIRS-BOTTOM \n      (IN ROOMS)\n      (DESC \"Bottom of Stairs\")\n      (LDESC\n\"You are at the bottom of the sixteen-step stairway. The stairway goes up to\nthe east, while to the west is solid plaster. Painted on the plaster\nare some hieroglyphs.\") \n       (FLAGS RLANDBIT)\n       (WEST TO EAST-END-OF-PASSAGE IF PLASTER-GONE ELSE\n\"Solid plaster is blocking your way.\")\n       (EAST TO TOP-OF-STAIRS)\n       (UP TO TOP-OF-STAIRS)\n       (GLOBAL HIEROGLYPHS STAIRS DOORWAY)>",
   "referencedBy": [
    "PLASTER1-FCN",
    "WALL-FCN",
    "HIERO-FCN"
   ]
  },
  "EAST-END-OF-PASSAGE": {
   "name": "EAST-END-OF-PASSAGE",
   "file": "ante.zil",
   "line": 715,
   "endLine": 724,
   "desc": "Narrow Passageway",
   "ldesc": "You are at the east end of what seems like a long, straight passageway. After\ncarefully looking over the walls, stones and floor, you determine that it is\nsafe to proceed.",
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
     "to": "STAIRS-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "MID-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM EAST-END-OF-PASSAGE\n      (IN ROOMS)\n      (DESC \"Narrow Passageway\")\n      (LDESC \n\"You are at the east end of what seems like a long, straight passageway. After\ncarefully looking over the walls, stones and floor, you determine that it is\nsafe to proceed.\")\n      (EAST TO STAIRS-BOTTOM)\n      (WEST TO MID-PASSAGE)\n      (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MID-PASSAGE": {
   "name": "MID-PASSAGE",
   "file": "ante.zil",
   "line": 726,
   "endLine": 734,
   "desc": "Narrow Passageway",
   "ldesc": "You are in the middle of a long, east/west passage. The passage is narrow and\nseems to be little more than a hallway hewn out of stone.",
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
     "to": "WEST-END-OF-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EAST-END-OF-PASSAGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM MID-PASSAGE\n      (IN ROOMS)\n      (DESC \"Narrow Passageway\")\n      (LDESC\n\"You are in the middle of a long, east/west passage. The passage is narrow and\nseems to be little more than a hallway hewn out of stone.\")\n      (FLAGS RLANDBIT)\n      (WEST TO WEST-END-OF-PASSAGE)\n      (EAST TO EAST-END-OF-PASSAGE)>",
   "referencedBy": [
    "MOVE-PLANK-FCN"
   ]
  },
  "WEST-END-OF-PASSAGE": {
   "name": "WEST-END-OF-PASSAGE",
   "file": "ante.zil",
   "line": 736,
   "endLine": 748,
   "desc": "Narrow Passageway",
   "ldesc": "You have reached the west end of the passage. Before you is a door surrounded\nby a heavy timber frame. The door is entirely blocked up with plaster. Toward\nthe bottom of the north wall and the south wall, about three inches off the\nfloor, are two small niches. There are some hieroglyphs on the plaster.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOVE-PLANK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DOORWAY",
    "HIEROGLYPHS",
    "PIT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MID-PASSAGE",
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
     "per": "JERRY-HACK-F",
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "LINTEL",
    "NICHES",
    "INNER-DOOR"
   ],
   "source": "<ROOM WEST-END-OF-PASSAGE\n      (IN ROOMS)\n      (DESC \"Narrow Passageway\")\n      (LDESC \n\"You have reached the west end of the passage. Before you is a door surrounded\nby a heavy timber frame. The door is entirely blocked up with plaster. Toward\nthe bottom of the north wall and the south wall, about three inches off the\nfloor, are two small niches. There are some hieroglyphs on the plaster.\")\n      (FLAGS RLANDBIT)\n      (EAST TO MID-PASSAGE)\n      (WEST PER JERRY-HACK-F)\n      (GLOBAL DOORWAY HIEROGLYPHS PIT)\n      (ACTION MOVE-PLANK-FCN)>",
   "referencedBy": [
    "MOVE-PLANK-FCN",
    "WALK-BEAM-FCN",
    "PLASTER1-FCN",
    "DUMP-ALL-ON-GROUND",
    "BEAM-FCN",
    "DESCRIBE-BEAM-FCN",
    "BUT-WHERE?",
    "WEAR-THE-SACK",
    "CRACK-FCN",
    "HIERO-FCN",
    "V-BURN",
    "V-CLIMB-UP",
    "EMPTY-THE"
   ]
  },
  "LANDING-TWO": {
   "name": "LANDING-TWO",
   "file": "barge.zil",
   "line": 6,
   "endLine": 19,
   "desc": "South Landing",
   "ldesc": "You are on a landing in the middle of a set of stairs. The staircase goes down\nto the south and up to the north. The walls here are undistinguished, formed by\nthe stones of which the pyramid was built.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOVE-ROPE-HERE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SOUTH-STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CHAMBER-OF-RA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CHAMBER-OF-RA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "NARROW-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "NARROW-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM LANDING-TWO\n      (IN ROOMS)\n      (DESC \"South Landing\")\n      (FLAGS RLANDBIT)\n      (LDESC\n\"You are on a landing in the middle of a set of stairs. The staircase goes down\nto the south and up to the north. The walls here are undistinguished, formed by\nthe stones of which the pyramid was built.\")\n      (UP TO CHAMBER-OF-RA)\n      (NORTH TO CHAMBER-OF-RA)\n      (DOWN TO NARROW-HALL)\n      (SOUTH TO NARROW-HALL)\n      (GLOBAL SOUTH-STAIRS)\n      (ACTION MOVE-ROPE-HERE)>",
   "referencedBy": [
    "DESCRIBE-ROPE-FCN",
    "ROPE-FCN",
    "TELL-STAIRS-FCN",
    "ROPE-DOWN-FCN",
    "RA-STAIRS-FCN",
    "STAIRWAY-CHECK?"
   ]
  },
  "NARROW-HALL": {
   "name": "NARROW-HALL",
   "file": "barge.zil",
   "line": 21,
   "endLine": 30,
   "desc": "Narrow Hallway",
   "ldesc": "You are at the entrance of a narrow hallway which goes to the northeast. A\nstaircase goes up to the north.",
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
     "to": "LANDING-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "BEND-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "LANDING-TWO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NARROW-HALL\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Narrow Hallway\")\n      (LDESC\n\"You are at the entrance of a narrow hallway which goes to the northeast. A\nstaircase goes up to the north.\")\n      (UP TO LANDING-TWO)\n      (NE TO BEND-HALL)\n      (NORTH TO LANDING-TWO)>",
   "referencedBy": []
  },
  "BEND-HALL": {
   "name": "BEND-HALL",
   "file": "barge.zil",
   "line": 32,
   "endLine": 41,
   "desc": "Narrow Hallway",
   "ldesc": "You are at a bend in the Narrow Hallway. The hallway continues to the\nnorthwest and to the southwest. Inscribed on the wall are some hieroglyphs.",
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
    "HIEROGLYPHS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BARGE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "NARROW-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM BEND-HALL\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Narrow Hallway\")\n      (LDESC\n\"You are at a bend in the Narrow Hallway. The hallway continues to the\nnorthwest and to the southwest. Inscribed on the wall are some hieroglyphs.\")\n      (NW TO BARGE-ENTRANCE)\n      (SW TO NARROW-HALL)\n      (GLOBAL HIEROGLYPHS)> ",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "BARGE-ENTRANCE": {
   "name": "BARGE-ENTRANCE",
   "file": "barge.zil",
   "line": 43,
   "endLine": 58,
   "desc": "Barge Chamber",
   "ldesc": "You are in the southern section of a huge room which holds the royal barge.\nBefore you, to the north, is a plank which provides entrance to the barge.\nThere is room to move around the barge to the east and west, while a doorway\nto the southeast leads into a darkened corridor.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOVE-THE-PLANK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOAT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BARGE-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "BARGE-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SW-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SE-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BEND-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM BARGE-ENTRANCE\n      (IN ROOMS)\n      (DESC \"Barge Chamber\")\n      (FLAGS RLANDBIT)\n      (LDESC\n\"You are in the southern section of a huge room which holds the royal barge.\nBefore you, to the north, is a plank which provides entrance to the barge.\nThere is room to move around the barge to the east and west, while a doorway\nto the southeast leads into a darkened corridor.\")\n      (UP TO BARGE-CENTER)\n      (NORTH TO BARGE-CENTER)\n      (WEST TO SW-CORNER)\n      (EAST TO SE-CORNER)\n      (SE TO BEND-HALL)\n      (GLOBAL BOAT)\n      (ACTION MOVE-THE-PLANK-FCN)>",
   "referencedBy": [
    "BURN-THE-BARGE",
    "BOARD-BARGE-F",
    "V-THROW-OFF",
    "V-WALK-TO"
   ]
  },
  "SE-CORNER": {
   "name": "SE-CORNER",
   "file": "barge.zil",
   "line": 67,
   "endLine": 77,
   "desc": "Barge Chamber",
   "ldesc": "You are in the southeast corner of the Barge Chamber. There's enough room to\nbypass the stern of the barge and continue to the north. To the west you can\nsee the entrance to the barge.",
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
    "BOAT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BARGE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "NE-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SE-CORNER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Barge Chamber\")\n      (LDESC\n\"You are in the southeast corner of the Barge Chamber. There's enough room to\nbypass the stern of the barge and continue to the north. To the west you can\nsee the entrance to the barge.\")\n      (WEST TO BARGE-ENTRANCE)\n      (NORTH TO NE-CORNER)\n      (GLOBAL BOAT)>",
   "referencedBy": [
    "BOARD-BARGE-F"
   ]
  },
  "NE-CORNER": {
   "name": "NE-CORNER",
   "file": "barge.zil",
   "line": 79,
   "endLine": 89,
   "desc": "Barge Chamber",
   "ldesc": "You're standing in the northeast corner of the Barge Chamber. You can get\naround the stern of the barge to the south, while there's enough room to\ncontinue around the barge to the west.",
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
    "BOAT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BARGE-EXIT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SE-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NE-CORNER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Barge Chamber\")\n      (LDESC\n\"You're standing in the northeast corner of the Barge Chamber. You can get\naround the stern of the barge to the south, while there's enough room to\ncontinue around the barge to the west.\")\n      (WEST TO BARGE-EXIT)\n      (SOUTH TO SE-CORNER)\n      (GLOBAL BOAT)>",
   "referencedBy": [
    "BOARD-BARGE-F"
   ]
  },
  "SW-CORNER": {
   "name": "SW-CORNER",
   "file": "barge.zil",
   "line": 91,
   "endLine": 101,
   "desc": "Barge Chamber",
   "ldesc": "You're in the southwest corner of the Barge Chamber. You can still see the\nbarge entrance to the east, while there's enough room to continue to the north,\naround the barge.",
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
    "BOAT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NW-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BARGE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SW-CORNER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Barge Chamber\")\n      (LDESC\n\"You're in the southwest corner of the Barge Chamber. You can still see the\nbarge entrance to the east, while there's enough room to continue to the north,\naround the barge.\")\n      (NORTH TO NW-CORNER)\n      (EAST TO BARGE-ENTRANCE)\n      (GLOBAL BOAT)>",
   "referencedBy": [
    "BOARD-BARGE-F"
   ]
  },
  "NW-CORNER": {
   "name": "NW-CORNER",
   "file": "barge.zil",
   "line": 103,
   "endLine": 113,
   "desc": "Barge Chamber",
   "ldesc": "You're in the northwest corner of the Barge Chamber. You can see by your light\nthat there's room enough to continue around the back of the barge by going to\nthe east, while you can bypass the bow of the boat by going south.",
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
    "BOAT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SW-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BARGE-EXIT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM NW-CORNER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Barge Chamber\")\n      (LDESC\n\"You're in the northwest corner of the Barge Chamber. You can see by your light\nthat there's room enough to continue around the back of the barge by going to\nthe east, while you can bypass the bow of the boat by going south.\")\n      (SOUTH TO SW-CORNER)\n      (EAST TO BARGE-EXIT)\n      (GLOBAL BOAT)>",
   "referencedBy": [
    "BOARD-BARGE-F"
   ]
  },
  "BARGE-EXIT": {
   "name": "BARGE-EXIT",
   "file": "barge.zil",
   "line": 115,
   "endLine": 126,
   "desc": "Barge Chamber",
   "ldesc": "You're at the start of a hallway which goes off to the north. To the south,\ndirectly behind you, is the back side of the barge. There's enough room to get\naround it to the east and west.",
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
    "BOAT"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NE-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "NW-CORNER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "IN-THE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM BARGE-EXIT\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Barge Chamber\")\n      (LDESC\n\"You're at the start of a hallway which goes off to the north. To the south,\ndirectly behind you, is the back side of the barge. There's enough room to get\naround it to the east and west.\")\n      (EAST TO NE-CORNER)\n      (WEST TO NW-CORNER)\n      (NORTH TO IN-THE-HALL)\n      (GLOBAL BOAT)> ",
   "referencedBy": []
  },
  "BARGE-CENTER": {
   "name": "BARGE-CENTER",
   "file": "barge.zil",
   "line": 129,
   "endLine": 142,
   "desc": "Center of Barge",
   "ldesc": "You are standing on the deck of an ancient wooden barge. Before you, cut into\nthe deck, is a hole. To the south is a plank which leads down off the barge.\nYou can see two cabins on the deck, one to the west and the other to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BURN-THE-BARGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HOLE",
    "BOAT",
    "DECK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "FORE-CABIN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "AFT-CABIN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "BARGE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "BARGE-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "PLANK",
    "MAST-HOLE",
    "BEAM"
   ],
   "source": "<ROOM BARGE-CENTER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Center of Barge\")\n      (LDESC\n\"You are standing on the deck of an ancient wooden barge. Before you, cut into\nthe deck, is a hole. To the south is a plank which leads down off the barge.\nYou can see two cabins on the deck, one to the west and the other to the east.\")\n      (WEST TO FORE-CABIN)\n      (EAST TO AFT-CABIN)\n      (DOWN TO BARGE-ENTRANCE)\n      (SOUTH TO BARGE-ENTRANCE)\n      (GLOBAL HOLE BOAT DECK)\n      (ACTION BURN-THE-BARGE)>",
   "referencedBy": [
    "MOVE-THE-PLANK-FCN",
    "BURN-THE-BARGE",
    "MAST-HOLE-FCN",
    "BEAM-FCN",
    "BOARD-BARGE-F",
    "JUMP-OFF-FCN",
    "V-BURN",
    "V-THROW-OFF",
    "V-PULL-UP"
   ]
  },
  "FORE-CABIN": {
   "name": "FORE-CABIN",
   "file": "barge.zil",
   "line": 144,
   "endLine": 156,
   "desc": "Fore Cabin",
   "ldesc": "You are in the forward cabin aboard the barge. The cabin is bare with none of\nthe luxuries you expected to see. You close your eyes for a moment, picturing\nthe barge you'll someday own, the yacht fully rigged and crewed. You open your\neyes and shake your head, anxious to make your dream reality. There's a doorway\nto the east leading out onto the deck.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BURN-THE-BARGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOAT",
    "DECK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BARGE-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "SCROLL"
   ],
   "source": "<ROOM FORE-CABIN\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (EAST TO BARGE-CENTER)\n      (DESC \"Fore Cabin\")\n      (LDESC\n\"You are in the forward cabin aboard the barge. The cabin is bare with none of\nthe luxuries you expected to see. You close your eyes for a moment, picturing\nthe barge you'll someday own, the yacht fully rigged and crewed. You open your\neyes and shake your head, anxious to make your dream reality. There's a doorway\nto the east leading out onto the deck.\")\n      (GLOBAL BOAT DECK)\n      (ACTION BURN-THE-BARGE)>",
   "referencedBy": [
    "BOARD-BARGE-F",
    "V-BURN",
    "V-LOOK-UP"
   ]
  },
  "AFT-CABIN": {
   "name": "AFT-CABIN",
   "file": "barge.zil",
   "line": 158,
   "endLine": 169,
   "desc": "Aft Cabin",
   "ldesc": "You are in the aft cabin aboard the barge. There's a door to the west which\nleads out to the deck, and a short ladder, permanently mounted to the deck,\ngoing down into the depths of the barge itself.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BURN-THE-BARGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS",
    "BOAT",
    "DECK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BARGE-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "BELOW-DECK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM AFT-CABIN\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Aft Cabin\")\n      (LDESC\n\"You are in the aft cabin aboard the barge. There's a door to the west which\nleads out to the deck, and a short ladder, permanently mounted to the deck,\ngoing down into the depths of the barge itself.\")\n      (WEST TO BARGE-CENTER)\n      (DOWN TO BELOW-DECK)\n      (GLOBAL STAIRS BOAT DECK)\n      (ACTION BURN-THE-BARGE)>",
   "referencedBy": [
    "DESC-STAIRS-F",
    "BOARD-BARGE-F",
    "V-BURN",
    "V-LOOK-UP"
   ]
  },
  "BELOW-DECK": {
   "name": "BELOW-DECK",
   "file": "barge.zil",
   "line": 171,
   "endLine": 183,
   "desc": "Below Deck",
   "ldesc": "You are below the deck of the barge in what looks like a huge hold. To the\nwest you can see the hold continuing, while a ladder leads up and out from\nhere.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BURN-THE-BARGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOAT",
    "STAIRS",
    "DECK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "AFT-CABIN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "AFT-CABIN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "BELOW-MAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM BELOW-DECK\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Below Deck\")\n      (LDESC\n\"You are below the deck of the barge in what looks like a huge hold. To the\nwest you can see the hold continuing, while a ladder leads up and out from\nhere.\")\n      (UP TO AFT-CABIN)\n      (OUT TO AFT-CABIN)\n      (WEST TO BELOW-MAST)\n      (ACTION BURN-THE-BARGE)\n      (GLOBAL BOAT STAIRS DECK)>",
   "referencedBy": [
    "DESC-STAIRS-F",
    "BOARD-BARGE-F",
    "V-BURN",
    "V-LOOK-UP"
   ]
  },
  "BELOW-MAST": {
   "name": "BELOW-MAST",
   "file": "barge.zil",
   "line": 185,
   "endLine": 196,
   "desc": "West End of Hold",
   "ldesc": "You are in the westmost portion of the hold, below the deck of the barge.\nOn the north side of the hull is a small knothole about three feet off the\ndeck. Overhead you can see a hole going through the deck while, directly\nbelow this hole, on the deck by your feet, is a slot.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "BURN-THE-BARGE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "BOAT",
    "HOLE",
    "DECK"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BELOW-DECK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "TORCH-HOLDER",
    "SLOT",
    "SHIM"
   ],
   "source": "<ROOM BELOW-MAST\n      (IN ROOMS)\n      (DESC \"West End of Hold\")\n      (FLAGS RLANDBIT)\n      (LDESC\n\"You are in the westmost portion of the hold, below the deck of the barge.\nOn the north side of the hull is a small knothole about three feet off the\ndeck. Overhead you can see a hole going through the deck while, directly\nbelow this hole, on the deck by your feet, is a slot.\")\n      (ACTION BURN-THE-BARGE)\n      (EAST TO BELOW-DECK)\n      (GLOBAL BOAT HOLE DECK)> ",
   "referencedBy": [
    "BURN-THE-BARGE",
    "MAST-HOLE-FCN",
    "BEAM-FCN",
    "BOARD-BARGE-F",
    "V-BURN",
    "V-LOOK-UP"
   ]
  },
  "RIVER-BANK": {
   "name": "RIVER-BANK",
   "file": "camp.zil",
   "line": 242,
   "endLine": 264,
   "desc": "River Bank",
   "ldesc": "You are on the bank of the river Nile. The shoreline is sandy and cool, and\nreeds wave in a light but warm breeze. Directly to the north and the south\nthickets make strolling along the bank impossible. You're hot, and the cool\nrippling water to the west looks inviting, but you're not alone in that\nthought -- crocodiles bask on the west bank, eyeing you hungrily, just\nwaiting for you to enter their watery domain. Things were never like this when\nCraige was around.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "GLOBAL-WATER",
    "THICKETS"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "1"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "P1",
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
     "message": "The thickets chew on your skin as you attempt to make a path through them. You finally give up.",
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The thickets chew on your skin as you attempt to make a path through them. You finally give up.",
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Can't you see the crocs? If you insist on entering the water, you'll have to swim.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Can't you see the crocs? If you insist on entering the water, you'll have to swim.",
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Can't you see the crocs? If you insist on entering the water, you'll have to swim.",
     "dir": "SW"
    },
    {
     "to": "P1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "NASTY-CROC",
    "NILE-RIBBAH"
   ],
   "source": "<ROOM RIVER-BANK\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"River Bank\")\n      (LDESC\n\"You are on the bank of the river Nile. The shoreline is sandy and cool, and\nreeds wave in a light but warm breeze. Directly to the north and the south\nthickets make strolling along the bank impossible. You're hot, and the cool\nrippling water to the west looks inviting, but you're not alone in that\nthought -- crocodiles bask on the west bank, eyeing you hungrily, just\nwaiting for you to enter their watery domain. Things were never like this when\nCraige was around.\")\n      (EAST TO P1)\n      (NORTH \"The thickets chew on your skin as you attempt to make a path through them. You finally give up.\")\n      (SOUTH \"The thickets chew on your skin as you attempt to make a path through them. You finally give up.\")\n      (WEST \"Can't you see the crocs? If you insist on entering the water, you'll have to swim.\")\n      (NW \"Can't you see the crocs? If you insist on entering the water, you'll have to swim.\")\n      (SW \"Can't you see the crocs? If you insist on entering the water, you'll have to swim.\")\n      (OUT TO P1)\n      (MAP 1)\n      (GLOBAL TENT-OBJ SAND HOLE GLOBAL-WATER THICKETS)\n      (CAPACITY 0)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": [
    "BUT-WHERE?",
    "THICKET-FCN",
    "V-FILL",
    "SPILL-WHERE?",
    "V-DIG",
    "V-SWIM",
    "V-DRINK-FROM"
   ]
  },
  "P1": {
   "name": "P1",
   "file": "camp.zil",
   "line": 266,
   "endLine": 288,
   "desc": "Near the Nile",
   "ldesc": "You are on an east/west path on the north side of the encampment. A path to\nthe south starts here, and you can see the riverbank clearly to the west. A\nwarm, light breeze reaches your face, drying your sweat into a thin mask of\nsalt. You glance to the north and are greeted by a disheartening sight: an\nendless stretch of searing desert.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "2"
    ],
    "CAPACITY": [
     "1"
    ],
    "ENDLESS": [
     "651"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NW"
    },
    {
     "to": "RIVER-BANK",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "P2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "P4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FIRE",
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
     "message": "Some thickets near the river chew on your skin as you attempt to make a path through them. You finally give up.",
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM P1\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Near the Nile\")\n      (LDESC\n\"You are on an east/west path on the north side of the encampment. A path to\nthe south starts here, and you can see the riverbank clearly to the west. A\nwarm, light breeze reaches your face, drying your sweat into a thin mask of\nsalt. You glance to the north and are greeted by a disheartening sight: an\nendless stretch of searing desert.\")\n      (NORTH PER GET-LOST-FCN)\n      (NE PER GET-LOST-FCN)\n      (NW PER GET-LOST-FCN)\n      (WEST TO RIVER-BANK)\n      (EAST TO P2)\n      (SOUTH TO P4)\n      (SE TO FIRE)\n      (SW \"Some thickets near the river chew on your skin as you attempt to make a path through them. You finally give up.\")\n      (MAP 2)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 1)\n      (ENDLESS 651)\n      (ACTION CREATE-THIRST-FCN)>",
   "referencedBy": []
  },
  "P2": {
   "name": "P2",
   "file": "camp.zil",
   "line": 290,
   "endLine": 313,
   "desc": "Outside Your Tent",
   "ldesc": "You are on an east/west path on the north side of the encampment. To the south\nyou can see a firepit and to the north is the entrance to your tent. Everything\nis oddly quiet, unsettling, creating a feeling of floating anxiety. The\nstillness seems to enhance the eerie quality of the desert, the feeling of\nbeing truly alone.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "FLAPS"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "3"
    ],
    "CAPACITY": [
     "3"
    ],
    "ENDLESS": [
     "652"
    ]
   },
   "exits": [
    {
     "to": "TENT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TENT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "P1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "P3",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "P4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "FIRE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM P2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Outside Your Tent\")\n      (LDESC\n\"You are on an east/west path on the north side of the encampment. To the south\nyou can see a firepit and to the north is the entrance to your tent. Everything\nis oddly quiet, unsettling, creating a feeling of floating anxiety. The\nstillness seems to enhance the eerie quality of the desert, the feeling of\nbeing truly alone.\")\n      (NORTH TO TENT)\n      (IN TO TENT)\n      (WEST TO P1)\n      (EAST TO P3)\n      (NW PER GET-LOST-FCN)\n      (NE PER GET-LOST-FCN)\n      (SW TO P4)\n      (SE TO P5)\n      (SOUTH TO FIRE)\n      (MAP 3)\n      (GLOBAL TENT-OBJ SAND HOLE FLAPS)\n      (CAPACITY 3)\n      (ENDLESS 652)\n      (ACTION CREATE-THIRST-FCN)>",
   "referencedBy": [
    "ENTER-TENT-FCN",
    "PRESS-BUTTON-FCN",
    "FLAP-FCN"
   ]
  },
  "TENT": {
   "name": "TENT",
   "file": "camp.zil",
   "line": 315,
   "endLine": 329,
   "desc": "Your Tent",
   "ldesc": "You are in your tent. Golden rays of the sun filter through the open tent\nflaps on the southern wall, but no breeze makes its way through. The dry,\nsearing heat in the tent would be bearable if only the air stirred, even a\nlittle.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "FLAPS"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "4"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "P2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "P2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "COT",
    "BROKEN-LOCK",
    "TRUNK",
    "LOCK"
   ],
   "source": "<ROOM TENT\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Your Tent\")\n      (LDESC\n\"You are in your tent. Golden rays of the sun filter through the open tent\nflaps on the southern wall, but no breeze makes its way through. The dry,\nsearing heat in the tent would be bearable if only the air stirred, even a\nlittle.\")\n      (SOUTH TO P2)\n      (OUT TO P2)\n      (MAP 4)\n      (GLOBAL TENT-OBJ SAND HOLE FLAPS)\n      (CAPACITY 0)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": [
    "TRUNK-FCN",
    "PRESS-BUTTON-FCN",
    "FLAP-FCN",
    "I-GINANDTONIC",
    "IN-A-TENT?",
    "GO"
   ]
  },
  "P3": {
   "name": "P3",
   "file": "camp.zil",
   "line": 331,
   "endLine": 353,
   "desc": "Northern Path",
   "ldesc": "You are on an east/west path on the northern side of the encampment. To the\neast you can see the sites of previous excavations your workers had\nbegun before they deserted you. Low, gentle sand dunes roll out of sight to\nthe north, but your camp's eastern border has a path, heading off to the south,\nwhich starts here.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "1"
    ],
    "ENDLESS": [
     "653"
    ],
    "CAPACITY": [
     "2"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FIRE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM P3\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Northern Path\")\n      (LDESC\n\"You are on an east/west path on the northern side of the encampment. To the\neast you can see the sites of previous excavations your workers had\nbegun before they deserted you. Low, gentle sand dunes roll out of sight to\nthe north, but your camp's eastern border has a path, heading off to the south,\nwhich starts here.\")\n      (NORTH PER GET-LOST-FCN)\n      (NW PER GET-LOST-FCN)\n      (NE PER GET-LOST-FCN)\n      (EAST TO EX1)\n      (SE TO EX4)\n      (SOUTH TO P5)\n      (SW TO FIRE)\n      (WEST TO P2)\n      (MAP 1)\n      (ACTION CREATE-THIRST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (ENDLESS 653)\n      (CAPACITY 2)>",
   "referencedBy": []
  },
  "SUPPLY-TENT": {
   "name": "SUPPLY-TENT",
   "file": "camp.zil",
   "line": 355,
   "endLine": 373,
   "desc": "Supply Tent",
   "ldesc": "You are in a tent, very much like your own -- a tent which had originally\ncontained the supplies for your expedition. You notice, however, that most of\nthe items which were here just yesterday have vanished with your workers. The\ntent looks as if it's been cleaned out and, as your stomach growls, the empty\ntent ironically reminds you of a turkey carcass picked clean after a huge\nThanksgiving meal. Through the open tent flaps to the east you can see the\nfirepit. If only one of the workers had remained behind, you would make him\npay.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "FLAPS"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "1"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "P4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "P4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "PICK-AXE",
    "SHOVEL"
   ],
   "source": "<ROOM SUPPLY-TENT\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Supply Tent\")\n      (LDESC\n\"You are in a tent, very much like your own -- a tent which had originally\ncontained the supplies for your expedition. You notice, however, that most of\nthe items which were here just yesterday have vanished with your workers. The\ntent looks as if it's been cleaned out and, as your stomach growls, the empty\ntent ironically reminds you of a turkey carcass picked clean after a huge\nThanksgiving meal. Through the open tent flaps to the east you can see the\nfirepit. If only one of the workers had remained behind, you would make him\npay.\")\n      (EAST TO P4)\n      (OUT TO P4)\n      (MAP 1)\n      (GLOBAL TENT-OBJ SAND HOLE FLAPS)\n      (CAPACITY 0)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": [
    "PRESS-BUTTON-FCN",
    "FLAP-FCN",
    "I-GINANDTONIC",
    "IN-A-TENT?"
   ]
  },
  "P4": {
   "name": "P4",
   "file": "camp.zil",
   "line": 375,
   "endLine": 398,
   "desc": "Outside Supply Tent",
   "ldesc": "You're on a north/south path on the west edge of the encampment. Directly to\nthe west is the supply tent, its flaps open, still in the hot, quiet air. To\nthe east you can see the central firepit, a reminder of your being alone. A row\nof thickets, impossible to make any progress through even with a machete,\ngrows along the western edge of the camp directly to the north and south of the\ntent.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "FLAPS",
    "THICKETS"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "1"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "P1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "P2",
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
     "message": "The thickets chew on your skin as you attempt to make a path through them. You finally give up.",
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "The thickets chew on your skin as you attempt to make a path through them. You finally give up.",
     "dir": "SW"
    },
    {
     "to": "SUPPLY-TENT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SUPPLY-TENT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "P6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FIRE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "P7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM P4\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Outside Supply Tent\")\n      (LDESC\n\"You're on a north/south path on the west edge of the encampment. Directly to\nthe west is the supply tent, its flaps open, still in the hot, quiet air. To\nthe east you can see the central firepit, a reminder of your being alone. A row\nof thickets, impossible to make any progress through even with a machete,\ngrows along the western edge of the camp directly to the north and south of the\ntent.\")\n      (NORTH TO P1)\n      (NE TO P2)\n      (NW \"The thickets chew on your skin as you attempt to make a path through them. You finally give up.\")\n      (SW \"The thickets chew on your skin as you attempt to make a path through them. You finally give up.\")\n      (WEST TO SUPPLY-TENT)\n      (IN TO SUPPLY-TENT)\n      (SOUTH TO P6)\n      (EAST TO FIRE)\n      (SE TO P7)\n      (MAP 1)\n      (ACTION CREATE-THIRST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE FLAPS THICKETS)\n      (CAPACITY 1)>",
   "referencedBy": [
    "ENTER-TENT-FCN",
    "PRESS-BUTTON-FCN",
    "FLAP-FCN",
    "THICKET-FCN"
   ]
  },
  "FIRE": {
   "name": "FIRE",
   "file": "camp.zil",
   "line": 400,
   "endLine": 422,
   "desc": "Fire Pit",
   "ldesc": "You are in the center of the encampment, standing before a charred pit, a hole\ndug in the sand surrounded by blackened rocks. The night breezes have already\nstarted the reclamation work of the desert, covering most of the pit's bottom.\nYou can see your tent to the north, the work tent to the south, and the supply\ntent to the west. Far off to the east, through the heat waves rising off the\nshifting sands, you can see gentle, rolling dunes.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "1"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "P2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "P3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "P8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "P7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "P6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "P1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [
    "FIREPIT",
    "ROCK",
    "ROCK-S",
    "MATCHES",
    "CIG-WRAPPER"
   ],
   "source": "<ROOM FIRE\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Fire Pit\")\n      (LDESC\n\"You are in the center of the encampment, standing before a charred pit, a hole\ndug in the sand surrounded by blackened rocks. The night breezes have already\nstarted the reclamation work of the desert, covering most of the pit's bottom.\nYou can see your tent to the north, the work tent to the south, and the supply\ntent to the west. Far off to the east, through the heat waves rising off the\nshifting sands, you can see gentle, rolling dunes.\")\n      (NORTH TO P2)\n      (NE TO P3)\n      (EAST TO P5)\n      (SE TO P8)\n      (SOUTH TO P7)\n      (SW TO P6)\n      (WEST TO P4)\n      (NW TO P1)\n      (MAP 1)\n      (ACTION CREATE-THIRST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 0)>",
   "referencedBy": []
  },
  "P5": {
   "name": "P5",
   "file": "camp.zil",
   "line": 432,
   "endLine": 454,
   "desc": "Middle Path",
   "ldesc": "You are at the eastern edge of an east/west path in the middle of the camp.\nTo the west you can see the firepit and beyond that the supply tent. To the\neast you can see the desert -- a vista difficult to avoid seeing from just\nabout anywhere in the camp. A north/south path intersects here, traveling along\nthe eastern border of the camp.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "2"
    ],
    "ENDLESS": [
     "706"
    ],
    "CAPACITY": [
     "4"
    ]
   },
   "exits": [
    {
     "to": "P3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EX1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EX7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "P8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "P7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "FIRE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "P2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM P5\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Middle Path\")\n      (LDESC\n\"You are at the eastern edge of an east/west path in the middle of the camp.\nTo the west you can see the firepit and beyond that the supply tent. To the\neast you can see the desert -- a vista difficult to avoid seeing from just\nabout anywhere in the camp. A north/south path intersects here, traveling along\nthe eastern border of the camp.\")\n      (NORTH TO P3)\n      (NE TO EX1)\n      (EAST TO EX4)\n      (SE TO EX7)\n      (SOUTH TO P8)\n      (SW TO P7)\n      (WEST TO FIRE)\n      (NW TO P2)\n      (MAP 2)\n      (ACTION CREATE-THIRST-FCN)\n      (ENDLESS 706)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 4)>",
   "referencedBy": []
  },
  "P6": {
   "name": "P6",
   "file": "camp.zil",
   "line": 456,
   "endLine": 477,
   "desc": "Southern Path",
   "ldesc": "You are at the west edge of an east/west path on the southern side of the\nencampment. Directly to the west is a heavy growth of thickets, making any\nattempt at western movement a painful and futile task. Through the thickets you\ncan hear the sound of water running gently by.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "THICKETS"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "2"
    ],
    "ENDLESS": [
     "751"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "exits": [
    {
     "to": "P4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FIRE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "P7",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You scratch yourself on the thickets as you attempt this.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You scratch yourself on the thickets as you attempt this.",
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM P6\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Southern Path\")\n      (LDESC\n\"You are at the west edge of an east/west path on the southern side of the\nencampment. Directly to the west is a heavy growth of thickets, making any\nattempt at western movement a painful and futile task. Through the thickets you\ncan hear the sound of water running gently by.\")\n      (NORTH TO P4)\n      (NE TO FIRE)\n      (EAST TO P7)\n      (SE PER GET-LOST-FCN)\n      (SOUTH PER GET-LOST-FCN)\n      (SW PER GET-LOST-FCN)\n      (WEST \"You scratch yourself on the thickets as you attempt this.\")\n      (NW \"You scratch yourself on the thickets as you attempt this.\")\n      (MAP 2)\n      (ACTION CREATE-THIRST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE THICKETS)\n      (ENDLESS 751)\n      (CAPACITY 0)>",
   "referencedBy": [
    "THICKET-FCN"
   ]
  },
  "P7": {
   "name": "P7",
   "file": "camp.zil",
   "line": 479,
   "endLine": 500,
   "desc": "Outside Work Tent",
   "ldesc": "You are on an east/west path, directly to the north of the work tent. To the\nnorth you can see the firepit and, beyond that, your tent. The work tent\nborders an endless vista of fine, burning sand stretching out to the south.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "FLAPS"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "2"
    ],
    "ENDLESS": [
     "752"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "FIRE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "P8",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": "TENT2",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "P4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "TENT2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM P7\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Outside Work Tent\")\n      (LDESC\n\"You are on an east/west path, directly to the north of the work tent. To the\nnorth you can see the firepit and, beyond that, your tent. The work tent\nborders an endless vista of fine, burning sand stretching out to the south.\")\n      (NORTH TO FIRE)\n      (NE TO P5)\n      (EAST TO P8)\n      (SE PER GET-LOST-FCN)\n      (SOUTH TO TENT2)\n      (SW PER GET-LOST-FCN)\n      (WEST TO P6)\n      (NW TO P4)\n      (IN TO TENT2)\n      (MAP 2)\n      (ACTION CREATE-THIRST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE FLAPS)\n      (ENDLESS 752)\n      (CAPACITY 1)>",
   "referencedBy": [
    "ENTER-TENT-FCN",
    "PRESS-BUTTON-FCN",
    "FLAP-FCN"
   ]
  },
  "P8": {
   "name": "P8",
   "file": "camp.zil",
   "line": 502,
   "endLine": 523,
   "desc": "Southern Path",
   "ldesc": "You are at the start of a path which heads north along the eastern border of\nthe encampment. To the east you can see the horror and the beauty which brought\nyou here, the desert sand and its hidden treasure. The firepit is visible to\nthe northwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CREATE-THIRST-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "2"
    ],
    "CAPACITY": [
     "2"
    ],
    "ENDLESS": [
     "753"
    ]
   },
   "exits": [
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX7",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "FIRE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM P8\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Southern Path\")\n      (LDESC\n\"You are at the start of a path which heads north along the eastern border of\nthe encampment. To the east you can see the horror and the beauty which brought\nyou here, the desert sand and its hidden treasure. The firepit is visible to\nthe northwest.\")\n      (NORTH TO P5)\n      (NE TO EX4)\n      (EAST TO EX7)\n      (SE PER GET-LOST-FCN)\n      (SOUTH PER GET-LOST-FCN)\n      (SW PER GET-LOST-FCN)\n      (WEST TO P7)\n      (NW TO FIRE)\n      (MAP 2)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 2)\n      (ENDLESS 753)\n      (ACTION CREATE-THIRST-FCN)>",
   "referencedBy": [
    "HOLE-FCN"
   ]
  },
  "TENT2": {
   "name": "TENT2",
   "file": "camp.zil",
   "line": 525,
   "endLine": 540,
   "desc": "Work Tent",
   "ldesc": "You are in a tent which used to house the workers and\ntheir personal effects. Looking around, taking in the stripped and bare\nsurroundings, you feel surprised that they even left the canvas walls.\nYou quickly realize that they took what they needed -- taking everything\nwould have been more trouble than it was worth. From the looks of things\nthey cleared out quickly but quietly.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE",
    "FLAPS"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "0"
    ],
    "MAP": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "P7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "P7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "NOTE",
    "KNAPSACK"
   ],
   "source": "<ROOM TENT2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Work Tent\")\n      (LDESC \"You are in a tent which used to house the workers and\ntheir personal effects. Looking around, taking in the stripped and bare\nsurroundings, you feel surprised that they even left the canvas walls.\nYou quickly realize that they took what they needed -- taking everything\nwould have been more trouble than it was worth. From the looks of things\nthey cleared out quickly but quietly.\")\n      (NORTH TO P7)\n      (OUT TO P7)\n      (GLOBAL TENT-OBJ SAND HOLE FLAPS)\n      (CAPACITY 0)\n      (MAP 2)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": [
    "PRESS-BUTTON-FCN",
    "FLAP-FCN",
    "I-GINANDTONIC",
    "IN-A-TENT?"
   ]
  },
  "EX1": {
   "name": "EX1",
   "file": "camp.zil",
   "line": 552,
   "endLine": 573,
   "desc": "Desert",
   "ldesc": "You are in the broiling sands of the desert, a short distance from the camp.\nOff to the west you can just make out a slight discoloration in the sand, the\nstart of an east/west path which borders the northern edge of the camp.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "3"
    ],
    "MAP": [
     "2"
    ],
    "DESERT": [
     "1"
    ],
    "ENDLESS": [
     "654"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P3",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX1             \n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are in the broiling sands of the desert, a short distance from the camp.\nOff to the west you can just make out a slight discoloration in the sand, the\nstart of an east/west path which borders the northern edge of the camp.\")\n      (NORTH PER GET-LOST-FCN)\n      (NE PER GET-LOST-FCN)\n      (EAST TO EX2)\n      (SE TO EX5)\n      (SOUTH TO EX4)\n      (SW TO P5)\n      (WEST TO P3)\n      (NW PER GET-LOST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 3)\n      (MAP 2)\n      (DESERT 1)\n      (ENDLESS 654)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "EX2": {
   "name": "EX2",
   "file": "camp.zil",
   "line": 575,
   "endLine": 597,
   "desc": "Desert",
   "ldesc": "You are in the desert, almost out of sight of the encampment, your only link\nwith civilization. You are just close enough to make out a tiny dot on the\nwestern horizon which could be one of the tents. The searing sand is making\nwalking a difficult and painful experience, something alien to you.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "MAP": [
     "1"
    ],
    "DESERT": [
     "1"
    ],
    "ENDLESS": [
     "655"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EX6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EX1",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX2\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are in the desert, almost out of sight of the encampment, your only link\nwith civilization. You are just close enough to make out a tiny dot on the\nwestern horizon which could be one of the tents. The searing sand is making\nwalking a difficult and painful experience, something alien to you.\")\n      (NORTH PER GET-LOST-FCN)\n      (NE PER GET-LOST-FCN)\n      (EAST TO EX3)\n      (SE TO EX6)\n      (SOUTH TO EX5)\n      (SW TO EX4)\n      (WEST TO EX1)\n      (NW PER GET-LOST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 2)\n      (MAP 1)\n      (DESERT 1)\n      (ENDLESS 655)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "EX3": {
   "name": "EX3",
   "file": "camp.zil",
   "line": 599,
   "endLine": 622,
   "desc": "Desert",
   "ldesc": "You are deep in desert, the encampment little more than a memory. You think\nfor a moment, closing your eyes, trying to picture the coolness of the Nile,\nthe comfort of your cot, and are overcome with doubts. When you open your eyes\nagain you are greeted with the same nightmare: All around you, all you can see\nfor mile after mile is sand and more sand.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1"
    ],
    "MAP": [
     "2"
    ],
    "DESERT": [
     "1"
    ],
    "ENDLESS": [
     "656"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": "EX6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EX2",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX3\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are deep in desert, the encampment little more than a memory. You think\nfor a moment, closing your eyes, trying to picture the coolness of the Nile,\nthe comfort of your cot, and are overcome with doubts. When you open your eyes\nagain you are greeted with the same nightmare: All around you, all you can see\nfor mile after mile is sand and more sand.\")\n      (NORTH PER GET-LOST-FCN)\n      (NE PER GET-LOST-FCN)\n      (EAST PER GET-LOST-FCN)\n      (SE PER GET-LOST-FCN)\n      (SOUTH TO EX6)\n      (SW TO EX5)\n      (WEST TO EX2)\n      (NW PER GET-LOST-FCN)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 1)\n      (MAP 2)\n      (DESERT 1)\n      (ENDLESS 656)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "EX4": {
   "name": "EX4",
   "file": "camp.zil",
   "line": 624,
   "endLine": 644,
   "desc": "Desert",
   "ldesc": "You are in the desert, still within sight of the encampment, just a tiny\noasis to the west. The tents, shimmering behind the heat waves rising from the\nsand, seem to be calling you back, beckoning, offering safety and refuge.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1"
    ],
    "MAP": [
     "1"
    ],
    "DESERT": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "EX1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EX2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EX8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "EX7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "P8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "P3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX4\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are in the desert, still within sight of the encampment, just a tiny\noasis to the west. The tents, shimmering behind the heat waves rising from the\nsand, seem to be calling you back, beckoning, offering safety and refuge.\")\n      (NORTH TO EX1)\n      (NE TO EX2)\n      (EAST TO EX5)\n      (SE TO EX8)\n      (SOUTH TO EX7)\n      (SW TO P8)\n      (WEST TO P5)\n      (NW TO P3)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 1)\n      (MAP 1)\n      (DESERT 1)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "EX5": {
   "name": "EX5",
   "file": "camp.zil",
   "line": 646,
   "endLine": 669,
   "desc": "Desert",
   "ldesc": "You are standing on the top of a sand dune, looking all around at a place on\nEarth where man was never meant to be. That is the only conclusion you can draw\nas you force yourself to breathe the hot, arid air of the desert through your\nnose. Breathing through your mouth makes you instantly thirsty, a dangerous\nstate to find yourself in while surrounded by sand. You curse Craige, then\nfind yourself cursing Ellingsworth, too.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "MAP": [
     "2"
    ],
    "DESERT": [
     "1"
    ]
   },
   "exits": [
    {
     "to": "EX2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EX3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "EX9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "EX8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "EX7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EX1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX5\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are standing on the top of a sand dune, looking all around at a place on\nEarth where man was never meant to be. That is the only conclusion you can draw\nas you force yourself to breathe the hot, arid air of the desert through your\nnose. Breathing through your mouth makes you instantly thirsty, a dangerous\nstate to find yourself in while surrounded by sand. You curse Craige, then\nfind yourself cursing Ellingsworth, too.\")\n      (NORTH TO EX2)\n      (NE TO EX3)\n      (EAST TO EX6)\n      (SE TO EX9)\n      (SOUTH TO EX8)\n      (SW TO EX7)\n      (WEST TO EX4)\n      (NW TO EX1)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 2)\n      (MAP 2)\n      (DESERT 1)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "EX6": {
   "name": "EX6",
   "file": "camp.zil",
   "line": 671,
   "endLine": 694,
   "desc": "Desert",
   "ldesc": "You are deep into the desert, as deep as anyone in his right mind would ever\ncare to venture. A small but strong gust of wind reaches your face, pelting you\nwith grains of sand so small they remind you of fine sugar. Even with your lips\ntightly closed, the wind manages to drive a few grains into your mouth. You are\nthankful that none got into your eyes.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "3"
    ],
    "MAP": [
     "2"
    ],
    "DESERT": [
     "1"
    ],
    "ENDLESS": [
     "706"
    ]
   },
   "exits": [
    {
     "to": "EX3",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": "EX9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "EX8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EX2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX6\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are deep into the desert, as deep as anyone in his right mind would ever\ncare to venture. A small but strong gust of wind reaches your face, pelting you\nwith grains of sand so small they remind you of fine sugar. Even with your lips\ntightly closed, the wind manages to drive a few grains into your mouth. You are\nthankful that none got into your eyes.\")\n      (NORTH TO EX3)\n      (NE PER GET-LOST-FCN)\n      (EAST PER GET-LOST-FCN)\n      (SE PER GET-LOST-FCN)\n      (SOUTH TO EX9)\n      (SW TO EX8)\n      (WEST TO EX5)\n      (NW TO EX2)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 3)\n      (MAP 2)\n      (DESERT 1)\n      (ENDLESS 706)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "EX7": {
   "name": "EX7",
   "file": "camp.zil",
   "line": 696,
   "endLine": 718,
   "desc": "Desert",
   "ldesc": "You are in the desert, east of the encampment. From this distance the camp\nseems little more than a mirage, an image of another reality which has little\nto do with the brutal, searing reality of the desert, your quickly dehydrating\nbody, or your painfully broiling feet.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1"
    ],
    "MAP": [
     "2"
    ],
    "DESERT": [
     "1"
    ],
    "ENDLESS": [
     "754"
    ]
   },
   "exits": [
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX8",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SW"
    },
    {
     "to": "P8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "P5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX7\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are in the desert, east of the encampment. From this distance the camp\nseems little more than a mirage, an image of another reality which has little\nto do with the brutal, searing reality of the desert, your quickly dehydrating\nbody, or your painfully broiling feet.\")\n      (NORTH TO EX4)\n      (NE TO EX5)\n      (EAST TO EX8)\n      (SE PER GET-LOST-FCN)\n      (SOUTH PER GET-LOST-FCN)\n      (SW PER GET-LOST-FCN)\n      (WEST TO P8)\n      (NW TO P5)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 1)\n      (MAP 2)\n      (DESERT 1)\n      (ENDLESS 754)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "EX8": {
   "name": "EX8",
   "file": "camp.zil",
   "line": 720,
   "endLine": 744,
   "desc": "Desert",
   "ldesc": "You are in the desert, out of sight of the encampment. You are thankful\nthere's no wind, even though a cooling breeze would be welcomed, since the\nfine sand particles would sting your face and hands. All around is the desert,\na sweeping expanse of disheartening sand.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1"
    ],
    "MAP": [
     "2"
    ],
    "DESERT": [
     "1"
    ],
    "ENDLESS": [
     "755"
    ]
   },
   "exits": [
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "EX6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "EX9",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EX7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EX4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "CHAMBER-OF-RA",
     "kind": "conditional",
     "condition": "PYRAMID-OPENED",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "CHAMBER-OF-RA",
     "kind": "conditional",
     "condition": "PYRAMID-OPENED",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [
    "ROCK-LOCK"
   ],
   "source": "<ROOM EX8\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are in the desert, out of sight of the encampment. You are thankful\nthere's no wind, even though a cooling breeze would be welcomed, since the\nfine sand particles would sting your face and hands. All around is the desert,\na sweeping expanse of disheartening sand.\")\n      (NORTH TO EX5)\n      (NE TO EX6)\n      (EAST TO EX9)\n      (SE PER GET-LOST-FCN)\n      (SOUTH PER GET-LOST-FCN)\n      (SW PER GET-LOST-FCN)\n      (WEST TO EX7)\n      (NW TO EX4)\n      (DOWN TO CHAMBER-OF-RA IF PYRAMID-OPENED)\n      (IN TO CHAMBER-OF-RA IF PYRAMID-OPENED)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 1)\n      (MAP 2)\n      (DESERT 1)\n      (ENDLESS 755)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": [
    "ENTER-PYRAMID-FCN",
    "DESCRIBE-HOLE-FCN",
    "RE-ENABLE-FCN",
    "V-DIG"
   ]
  },
  "EX9": {
   "name": "EX9",
   "file": "camp.zil",
   "line": 746,
   "endLine": 770,
   "desc": "Desert",
   "ldesc": "You are far into the desert, sand and more sand stretching out endlessly\naround you in all directions. You think of going back, of giving up this\nattempt at riches, but what awaits you back in the States? What is there worth\ngoing back to, with nothing to show for this quest? And how could you go back\nnow, after the things you'd said to Craige? You glance around\nat the rolling dunes and force back the fear eating away your confidence.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESCRIBE-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "TENT-OBJ",
    "SAND",
    "HOLE"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1"
    ],
    "MAP": [
     "1"
    ],
    "DESERT": [
     "1"
    ],
    "ENDLESS": [
     "756"
    ]
   },
   "exits": [
    {
     "to": "EX6",
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
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "GET-LOST-FCN",
     "message": null,
     "dir": "SW"
    },
    {
     "to": "EX8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "EX5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM EX9\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Desert\")\n      (LDESC\n\"You are far into the desert, sand and more sand stretching out endlessly\naround you in all directions. You think of going back, of giving up this\nattempt at riches, but what awaits you back in the States? What is there worth\ngoing back to, with nothing to show for this quest? And how could you go back\nnow, after the things you'd said to Craige? You glance around\nat the rolling dunes and force back the fear eating away your confidence.\")\n      (NORTH TO EX6)\n      (NE PER GET-LOST-FCN)\n      (EAST PER GET-LOST-FCN)\n      (SE PER GET-LOST-FCN)\n      (SOUTH PER GET-LOST-FCN)\n      (SW PER GET-LOST-FCN)\n      (WEST TO EX8)\n      (NW TO EX5)\n      (GLOBAL TENT-OBJ SAND HOLE)\n      (CAPACITY 1)\n      (MAP 1)\n      (DESERT 1)\n      (ENDLESS 756)\n      (ACTION DESCRIBE-HOLE-FCN)>",
   "referencedBy": []
  },
  "ENDLESS-DESERT": {
   "name": "ENDLESS-DESERT",
   "file": "camp.zil",
   "line": 1670,
   "endLine": 1680,
   "desc": "Desert",
   "ldesc": "You are in the desert, a vast wasteland of sand and heat.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DESERT-EXIT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SAND",
    "MIRAGES"
   ],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "0"
    ]
   },
   "exits": [
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Without a helicopter?",
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "Let's not rush things.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM ENDLESS-DESERT\n      (IN ROOMS)\n      (DESC \"Desert\")\n      (FLAGS RLANDBIT ONBIT)\n      (LDESC\n\"You are in the desert, a vast wasteland of sand and heat.\")\n      (UP \"Without a helicopter?\")\n      (DOWN \"Let's not rush things.\")\n      (ACTION DESERT-EXIT-FCN)\n      (CAPACITY 0)\n      (GLOBAL SAND MIRAGES)>",
   "referencedBy": [
    "GET-LOST-FCN",
    "DESCRIBE-HOLE-FCN",
    "DESERT-EXIT-FCN",
    "DESERT-TO-TABLE",
    "TABLE-TO-DESERT",
    "PRESS-BUTTON-FCN",
    "V-FIND"
   ]
  },
  "LANDING-ONE": {
   "name": "LANDING-ONE",
   "file": "cube.zil",
   "line": 6,
   "endLine": 20,
   "desc": "Cube",
   "ldesc": "You are in a room whose symmetry is uncanny, at least to the unaided eye: the\ndimensions of the room seem to form a perfect cube. There are three square\ndoorways cut into the walls -- one to the north, and another to the west. A\nwide staircase leads up through the square doorway to the east.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOVE-PANEL-HERE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "EAST-STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CHAMBER-OF-RA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "NE-BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CENTRAL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CHAMBER-OF-RA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM LANDING-ONE\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Cube\")\n      (LDESC\n\"You are in a room whose symmetry is uncanny, at least to the unaided eye: the\ndimensions of the room seem to form a perfect cube. There are three square\ndoorways cut into the walls -- one to the north, and another to the west. A\nwide staircase leads up through the square doorway to the east.\")\n      (UP TO CHAMBER-OF-RA)\n      (NORTH TO NE-BEND)\n      (WEST TO CENTRAL-ROOM)\n      (EAST TO CHAMBER-OF-RA)\n      (GLOBAL EAST-STAIRS)\n      (ACTION MOVE-PANEL-HERE)>",
   "referencedBy": [
    "DESCRIBE-ROPE-FCN",
    "ROPE-FCN",
    "MOVE-PANEL-HERE",
    "TELL-STAIRS-FCN",
    "ROPE-HOOK-FCN",
    "RA-STAIRS-FCN",
    "STAIRWAY-CHECK?"
   ]
  },
  "LANDING-THREE": {
   "name": "LANDING-THREE",
   "file": "cube.zil",
   "line": 22,
   "endLine": 37,
   "desc": "Cube",
   "ldesc": "You are in a room whose walls, floor and ceiling seem to form a perfect cube.\nThere are four square doorways cut into the walls -- to the north, the south,\nthe east and the west. Through the west doorway you can see a flight of stairs\nheading up.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOVE-PANEL-HERE",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WEST-STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CHAMBER-OF-RA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "CHAMBER-OF-RA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "NW-BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SW-BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CENTRAL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM LANDING-THREE\n      (IN ROOMS)\n      (DESC \"Cube\")\n      (FLAGS RLANDBIT)\n      (LDESC\n\"You are in a room whose walls, floor and ceiling seem to form a perfect cube.\nThere are four square doorways cut into the walls -- to the north, the south,\nthe east and the west. Through the west doorway you can see a flight of stairs\nheading up.\")\n      (UP TO CHAMBER-OF-RA)\n      (WEST TO CHAMBER-OF-RA)\n      (NORTH TO NW-BEND)\n      (SOUTH TO SW-BEND)\n      (EAST TO CENTRAL-ROOM)\n      (GLOBAL WEST-STAIRS)\n      (ACTION MOVE-PANEL-HERE)>",
   "referencedBy": [
    "DESCRIBE-ROPE-FCN",
    "ROPE-FCN",
    "MOVE-PANEL-HERE",
    "TELL-STAIRS-FCN",
    "RA-STAIRS-FCN",
    "STAIRWAY-CHECK?"
   ]
  },
  "CENTRAL-ROOM": {
   "name": "CENTRAL-ROOM",
   "file": "cube.zil",
   "line": 39,
   "endLine": 54,
   "desc": "Cube",
   "ldesc": "You are in a room whose dimensions seem to measure a perfect cube. On the\nfloor of this room is a series of symbols, inscribed in the stone. The walls\nbear strange pictures of a Queen, one of which shows her being wrapped in\nlinen, another one showing her being lowered into what appears to be a solid\ngold sarcophagus. Four identical square doorways lead out of this chamber to\nthe north, south, east and west.",
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
    "HIEROGLYPHS",
    "PICTURES"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NORTH-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LANDING-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LANDING-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM CENTRAL-ROOM\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Cube\")\n      (LDESC\n\"You are in a room whose dimensions seem to measure a perfect cube. On the\nfloor of this room is a series of symbols, inscribed in the stone. The walls\nbear strange pictures of a Queen, one of which shows her being wrapped in\nlinen, another one showing her being lowered into what appears to be a solid\ngold sarcophagus. Four identical square doorways lead out of this chamber to\nthe north, south, east and west.\")\n      (NORTH TO NORTH-CENTER)\n      (SOUTH TO SOUTH-CENTER)\n      (EAST TO LANDING-ONE)\n      (WEST TO LANDING-THREE)\n      (GLOBAL HIEROGLYPHS PICTURES)>",
   "referencedBy": [
    "READ-FLOOR-F",
    "WALL-FCN",
    "HIERO-FCN"
   ]
  },
  "NORTH-CENTER": {
   "name": "NORTH-CENTER",
   "file": "cube.zil",
   "line": 56,
   "endLine": 66,
   "desc": "Cube",
   "ldesc": "You are in a room in the shape of a perfect cube. There are three square\ndoorways cut into the walls -- one to the west, one to the east, and another\nto the south.",
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
     "to": "NE-BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "NW-BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CENTRAL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NORTH-CENTER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Cube\")\n      (LDESC\n\"You are in a room in the shape of a perfect cube. There are three square\ndoorways cut into the walls -- one to the west, one to the east, and another\nto the south.\")\n      (EAST TO NE-BEND)\n      (WEST TO NW-BEND)\n      (SOUTH TO CENTRAL-ROOM)>",
   "referencedBy": []
  },
  "SOUTH-CENTER": {
   "name": "SOUTH-CENTER",
   "file": "cube.zil",
   "line": 68,
   "endLine": 83,
   "desc": "Cube",
   "ldesc": "You are in a room whose symmetry is uncanny, at least to the unaided eye: the\ndimensions of the room seem to form a perfect cube. There are two square\ndoorways cut into the walls -- one to the north, and another to the west.\nA panel, recessed into a wall, glows softly in your reflected light,\nwhile some hieroglyphs are visible above it.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SOUTH-CENTER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HIEROGLYPHS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "CENTRAL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SW-BEND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SECRET-PASSAGE",
     "kind": "conditional",
     "condition": "BRICKS-PRESSED",
     "else": "\"You can't go that way.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "PUNCH-PANEL"
   ],
   "source": "<ROOM SOUTH-CENTER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Cube\")\n      (LDESC\n\"You are in a room whose symmetry is uncanny, at least to the unaided eye: the\ndimensions of the room seem to form a perfect cube. There are two square\ndoorways cut into the walls -- one to the north, and another to the west.\nA panel, recessed into a wall, glows softly in your reflected light,\nwhile some hieroglyphs are visible above it.\")\n      (NORTH TO CENTRAL-ROOM)\n      (WEST TO SW-BEND)\n      (EAST TO SECRET-PASSAGE IF BRICKS-PRESSED\n       ELSE \"You can't go that way.\")\n      (GLOBAL HIEROGLYPHS)\n      (ACTION SOUTH-CENTER-F)>",
   "referencedBy": [
    "TAKE-BRICK-FCN",
    "HIERO-FCN"
   ]
  },
  "SW-BEND": {
   "name": "SW-BEND",
   "file": "cube.zil",
   "line": 104,
   "endLine": 114,
   "desc": "Cube",
   "ldesc": "You are in a room whose symmetry is uncanny, at least to the unaided eye: the\ndimensions of the room seem to form a perfect cube. There are two square\ndoorways cut into the walls -- one to the north, and another to the east. The\nuncannily-shaped room seems to form a corner for this entire area.",
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
     "to": "LANDING-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM SW-BEND\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Cube\")\n      (LDESC\n\"You are in a room whose symmetry is uncanny, at least to the unaided eye: the\ndimensions of the room seem to form a perfect cube. There are two square\ndoorways cut into the walls -- one to the north, and another to the east. The\nuncannily-shaped room seems to form a corner for this entire area.\")\n      (NORTH TO LANDING-THREE)\n      (EAST TO SOUTH-CENTER)>",
   "referencedBy": []
  },
  "NE-BEND": {
   "name": "NE-BEND",
   "file": "cube.zil",
   "line": 116,
   "endLine": 125,
   "desc": "Cube",
   "ldesc": "You are in a room whose dimensions seem to form a perfect cube. There are two\nsquare doorways cut into the walls -- one to the south, and another to the\nwest. This room seems to form a corner for this entire area.",
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
     "to": "NORTH-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LANDING-ONE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM NE-BEND\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Cube\")\n      (LDESC\n\"You are in a room whose dimensions seem to form a perfect cube. There are two\nsquare doorways cut into the walls -- one to the south, and another to the\nwest. This room seems to form a corner for this entire area.\")\n      (WEST TO NORTH-CENTER)\n      (SOUTH TO LANDING-ONE)>",
   "referencedBy": []
  },
  "NW-BEND": {
   "name": "NW-BEND",
   "file": "cube.zil",
   "line": 127,
   "endLine": 135,
   "desc": "Cube",
   "ldesc": "You are in a room whose shape is that of a perfect cube. There are two square\ndoorways cut into the walls -- one to the south, and another to the east.",
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
     "to": "LANDING-THREE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "NORTH-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM NW-BEND\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Cube\")\n      (LDESC\n\"You are in a room whose shape is that of a perfect cube. There are two square\ndoorways cut into the walls -- one to the south, and another to the east.\")\n      (SOUTH TO LANDING-THREE)\n      (EAST TO NORTH-CENTER)>",
   "referencedBy": []
  },
  "SECRET-PASSAGE": {
   "name": "SECRET-PASSAGE",
   "file": "cube.zil",
   "line": 144,
   "endLine": 158,
   "desc": "Turning Passage",
   "ldesc": "You are in a strange, turning passageway. The floor here descends, reminding\nyou of a ramp Craige once told you about -- a deep entrance into the depths of\nan Incan tomb. The ramp turns off toward the north. Judging from what you\nremember of the cube rooms, the ramp most probably passes beneath the\nascending east staircase. Through the open doorway to the west you can still\nsee one of the cube rooms.",
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
     "to": "TOP-OF-STAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "SOUTH-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "TOP-OF-STAIRS",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "SOUTH-CENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM SECRET-PASSAGE\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Turning Passage\")\n      (LDESC\n\"You are in a strange, turning passageway. The floor here descends, reminding\nyou of a ramp Craige once told you about -- a deep entrance into the depths of\nan Incan tomb. The ramp turns off toward the north. Judging from what you\nremember of the cube rooms, the ramp most probably passes beneath the\nascending east staircase. Through the open doorway to the west you can still\nsee one of the cube rooms.\")\n      (NORTH TO TOP-OF-STAIRS) ;\"Connection to ANTE\"\n      (WEST TO SOUTH-CENTER)\n      (DOWN TO TOP-OF-STAIRS)\n      (OUT TO SOUTH-CENTER)>",
   "referencedBy": []
  },
  "ROOM-OF-NEPHTHYS": {
   "name": "ROOM-OF-NEPHTHYS",
   "file": "diamond.zil",
   "line": 8,
   "endLine": 22,
   "desc": "Room of Nephthys",
   "ldesc": "You have entered the room of the protective goddess Nephthys. The walls here\nare cut from pink granite, elaborately decorated with bright red carnelian and\npale yellow feldspar. Along the northeast wall are panels of beaten gold, and\nmidway up this wall, under the winged symbol of Nephthys, you can see some\nhieroglyphs. To the southeast, an opening has been cut in the thick granite\nwall.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SCORE-RMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HIEROGLYPHS",
    "DOORWAY",
    "PICTURE-PANELS",
    "GEMS-2"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "A-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "NEPHTH-JEWEL"
   ],
   "source": "<ROOM ROOM-OF-NEPHTHYS\n      (IN ROOMS)\n      (DESC \"Room of Nephthys\")\n      (FLAGS RLANDBIT)\n      (LDESC \n\"You have entered the room of the protective goddess Nephthys. The walls here\nare cut from pink granite, elaborately decorated with bright red carnelian and\npale yellow feldspar. Along the northeast wall are panels of beaten gold, and\nmidway up this wall, under the winged symbol of Nephthys, you can see some\nhieroglyphs. To the southeast, an opening has been cut in the thick granite\nwall.\") \n      (SE TO A-PRIME)\n      (OUT TO A-PRIME)\n      (GLOBAL HIEROGLYPHS DOORWAY PICTURE-PANELS GEMS-2)\n      (ACTION SCORE-RMS)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "ROOM-OF-SELKIS": {
   "name": "ROOM-OF-SELKIS",
   "file": "diamond.zil",
   "line": 85,
   "endLine": 100,
   "desc": "Room of Selkis",
   "ldesc": "You are standing in a small room, that of the protective goddess Selkis.\nThere are red, blue and green patterns on the walls formed from small glazed\ntiles that have been carefully arranged in order of shade. The darkest tiles\nborder the floor, and become lightest near the ceiling. On one wall,\ninscribed in a beaten gold panel, is the symbol of Selkis, under which you can\nsee some hieroglyphic text. An opening through the southwest wall leads out\nof this room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SCORE-RMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HIEROGLYPHS",
    "DOORWAY",
    "GEMS-2",
    "PICTURE-PANELS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "B-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "B-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "SELKIS-JEWEL"
   ],
   "source": "<ROOM ROOM-OF-SELKIS\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Room of Selkis\")\n      (LDESC \n\"You are standing in a small room, that of the protective goddess Selkis.\nThere are red, blue and green patterns on the walls formed from small glazed\ntiles that have been carefully arranged in order of shade. The darkest tiles\nborder the floor, and become lightest near the ceiling. On one wall,\ninscribed in a beaten gold panel, is the symbol of Selkis, under which you can\nsee some hieroglyphic text. An opening through the southwest wall leads out\nof this room.\")\n      (SW TO B-PRIME)\n      (OUT TO B-PRIME)\n      (GLOBAL HIEROGLYPHS DOORWAY GEMS-2 PICTURE-PANELS)\n      (ACTION SCORE-RMS)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "ROOM-OF-ISIS": {
   "name": "ROOM-OF-ISIS",
   "file": "diamond.zil",
   "line": 111,
   "endLine": 128,
   "desc": "Room of Isis",
   "ldesc": "This is the room of the protective goddess Isis. You stand in amazement\nin the center of the room as thousands of tiny lights twinkle around you.\nWith great surprise you realize that the light from your torch is being\nreflected by the mirror-like surfaces of innumerable quartzite chips.\nThese are set artfully into red clay panels in the walls, and are surrounded\nby shiny red jasper fragments. On the southwest wall, under the winged symbol\nof Isis, some hieroglyphic text is inscribed in a gold panel. To the northeast\nis an arched opening, and, looking through it, you can barely make out a\nhallway.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SCORE-RMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HIEROGLYPHS",
    "PICTURE-PANELS",
    "GEMS",
    "DOORWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "D-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "D-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "ISIS-JEWEL",
    "TWINKLERS"
   ],
   "source": "<ROOM ROOM-OF-ISIS\n      (IN ROOMS)\n      (DESC \"Room of Isis\")\n      (FLAGS RLANDBIT)\n      (LDESC\n\"This is the room of the protective goddess Isis. You stand in amazement\nin the center of the room as thousands of tiny lights twinkle around you.\nWith great surprise you realize that the light from your torch is being\nreflected by the mirror-like surfaces of innumerable quartzite chips.\nThese are set artfully into red clay panels in the walls, and are surrounded\nby shiny red jasper fragments. On the southwest wall, under the winged symbol\nof Isis, some hieroglyphic text is inscribed in a gold panel. To the northeast\nis an arched opening, and, looking through it, you can barely make out a\nhallway.\")\n      (NE TO D-PRIME)\n      (OUT TO D-PRIME)\n      (GLOBAL HIEROGLYPHS PICTURE-PANELS GEMS DOORWAY)\n      (ACTION SCORE-RMS)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "ROOM-OF-NEITH": {
   "name": "ROOM-OF-NEITH",
   "file": "diamond.zil",
   "line": 130,
   "endLine": 144,
   "desc": "Room of Neith",
   "ldesc": "You are standing in the room of the protective goddess Neith. This room\nseems dark and mysterious with its decorations of inky-blue lapis lazuli\nand jet-black obsidian. Gold scrollwork defines an area on one of the\nwalls, in the center of which is the symbol of Neith. Below this you can\nsee some hieroglyphs etched into a beaten gold panel. There is a door in\nthe northwest wall leading out of the room.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SCORE-RMS",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "HIEROGLYPHS",
    "PICTURE-PANELS",
    "PICTURES",
    "GEMS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "E-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "E-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "NEITH-JEWEL"
   ],
   "source": "<ROOM ROOM-OF-NEITH\n      (IN ROOMS)\n      (DESC \"Room of Neith\")\n      (FLAGS RLANDBIT)\n      (LDESC\n\"You are standing in the room of the protective goddess Neith. This room\nseems dark and mysterious with its decorations of inky-blue lapis lazuli\nand jet-black obsidian. Gold scrollwork defines an area on one of the\nwalls, in the center of which is the symbol of Neith. Below this you can\nsee some hieroglyphs etched into a beaten gold panel. There is a door in\nthe northwest wall leading out of the room.\")\n      (NW TO E-PRIME)\n      (OUT TO E-PRIME)\n      (GLOBAL HIEROGLYPHS PICTURE-PANELS PICTURES GEMS)\n      (ACTION SCORE-RMS)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "LANDING-ZERO": {
   "name": "LANDING-ZERO",
   "file": "diamond.zil",
   "line": 172,
   "endLine": 187,
   "desc": "Circular Room",
   "ldesc": "You are in a strange, round room which sits in the center of four hallways.\nThese hallways lead off to the northeast, southeast, southwest and northwest\nlike the spokes of a wheel. Above your head is a long tunnel which stretches up\nand out of sight.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CIRCULAR-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "A-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "B-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "D-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "E-PRIME",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "CHAMBER-OF-RA",
     "kind": "conditional",
     "condition": "ROPE-TIED",
     "else": "\"There's no way to get back up there.\"",
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "HERRING-JEWEL",
    "HUGE-STATUE"
   ],
   "source": "<ROOM LANDING-ZERO\n      (IN ROOMS)\n      (DESC \"Circular Room\")\n      (LDESC \n\"You are in a strange, round room which sits in the center of four hallways.\nThese hallways lead off to the northeast, southeast, southwest and northwest\nlike the spokes of a wheel. Above your head is a long tunnel which stretches up\nand out of sight.\")\n      (FLAGS RLANDBIT)\n      (NW TO A-PRIME)\n      (NE TO B-PRIME)\n      (SW TO D-PRIME)\n      (SE TO E-PRIME)\n      (UP TO CHAMBER-OF-RA IF ROPE-TIED ELSE\n\"There's no way to get back up there.\")\n      (ACTION CIRCULAR-ROOM-FCN)>",
   "referencedBy": [
    "DESCRIBE-ROPE-FCN",
    "ROPE-FCN",
    "CIRCULAR-ROOM-FCN",
    "STATUE-OPPOSITE?",
    "TELL-STAIRS-FCN",
    "ROPE-HOOK-FCN",
    "MOVE-ROPE-HERE",
    "STAIRWAY-CHECK?",
    "V-PUSH-TO"
   ]
  },
  "A-PRIME": {
   "name": "A-PRIME",
   "file": "diamond.zil",
   "line": 298,
   "endLine": 309,
   "desc": "Northwest Hallway",
   "ldesc": "You are standing in the middle of the Northwest Hallway. The walls here are\nsmooth and undecorated, carved out of granite. The hallway continues to the\nnorthwest and to the southeast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CLOSE-DEM-DOOAHS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LANDING-ZERO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "ROOM-OF-NEPHTHYS",
     "kind": "conditional",
     "condition": "NEPHTH-DOOR IS OPEN",
     "else": "\"There's no way to get through the stone door.\"",
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [
    "NEPHTH-DOOR"
   ],
   "source": "<ROOM A-PRIME\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Northwest Hallway\")\n      (LDESC\n\"You are standing in the middle of the Northwest Hallway. The walls here are\nsmooth and undecorated, carved out of granite. The hallway continues to the\nnorthwest and to the southeast.\") \n      (SE TO LANDING-ZERO)\n      (NW TO ROOM-OF-NEPHTHYS IF NEPHTH-DOOR IS OPEN ELSE\n\"There's no way to get through the stone door.\")\n      (ACTION CLOSE-DEM-DOOAHS)>",
   "referencedBy": [
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "B-PRIME": {
   "name": "B-PRIME",
   "file": "diamond.zil",
   "line": 324,
   "endLine": 335,
   "desc": "Northeast Hallway",
   "ldesc": "You are standing midway down the long Northeast Hallway. The high walls\nare undecorated, but bear the marks of the stonecarver's tool. The hallway\ncontinues to the northeast and the southwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CLOSE-DEM-DOOAHS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LANDING-ZERO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "ROOM-OF-SELKIS",
     "kind": "conditional",
     "condition": "SELKIS-DOOR IS OPEN",
     "else": "\"There's no way to get through the stone door.\"",
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM B-PRIME\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Northeast Hallway\")\n      (LDESC\n\"You are standing midway down the long Northeast Hallway. The high walls\nare undecorated, but bear the marks of the stonecarver's tool. The hallway\ncontinues to the northeast and the southwest.\")\n      (SW TO LANDING-ZERO)\n      (NE TO ROOM-OF-SELKIS IF SELKIS-DOOR IS OPEN ELSE\n\"There's no way to get through the stone door.\")\n      (ACTION CLOSE-DEM-DOOAHS)>",
   "referencedBy": [
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "D-PRIME": {
   "name": "D-PRIME",
   "file": "diamond.zil",
   "line": 344,
   "endLine": 355,
   "desc": "Southwest Hallway",
   "ldesc": "You are midway down the Southwest Hallway. The walls of this narrow passage\nare unadorned and smooth. The hallway continues to the southwest and the\nnortheast.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CLOSE-DEM-DOOAHS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LANDING-ZERO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "ROOM-OF-ISIS",
     "kind": "conditional",
     "condition": "ISIS-DOOR IS OPEN",
     "else": "\"There's no way to get through the stone door.\"",
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM D-PRIME\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Southwest Hallway\")\n      (LDESC\n\"You are midway down the Southwest Hallway. The walls of this narrow passage\nare unadorned and smooth. The hallway continues to the southwest and the\nnortheast.\")\n      (NE TO LANDING-ZERO)\n      (SW TO ROOM-OF-ISIS IF ISIS-DOOR IS OPEN ELSE\n\"There's no way to get through the stone door.\")\n      (ACTION CLOSE-DEM-DOOAHS)>",
   "referencedBy": [
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "E-PRIME": {
   "name": "E-PRIME",
   "file": "diamond.zil",
   "line": 364,
   "endLine": 375,
   "desc": "Southeast Hallway",
   "ldesc": "You are midway down the Southeast Hallway. This corridor is undecorated and\nthe walls are polished to a smooth lustre. The hallway continues to the\nsoutheast and the northwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CLOSE-DEM-DOOAHS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LANDING-ZERO",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "ROOM-OF-NEITH",
     "kind": "conditional",
     "condition": "NEITH-DOOR IS OPEN",
     "else": "\"There's no way to get through the stone door.\"",
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM E-PRIME\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Southeast Hallway\")\n      (LDESC\n\"You are midway down the Southeast Hallway. This corridor is undecorated and\nthe walls are polished to a smooth lustre. The hallway continues to the\nsoutheast and the northwest.\")\n      (NW TO LANDING-ZERO)\n      (SE TO ROOM-OF-NEITH IF NEITH-DOOR IS OPEN ELSE\n\"There's no way to get through the stone door.\")\n      (ACTION CLOSE-DEM-DOOAHS)>",
   "referencedBy": [
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "CHAMBER-OF-RA": {
   "name": "CHAMBER-OF-RA",
   "file": "ra.zil",
   "line": 9,
   "endLine": 21,
   "desc": "Chamber of Ra",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MOVE-ROPE-RA",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "NORTH-STAIRS",
    "EAST-STAIRS",
    "SOUTH-STAIRS",
    "WEST-STAIRS",
    "FEW-STEPS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ROPE-HOOK-FCN",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "TELL-STAIRS-FCN",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "TELL-STAIRS-FCN",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "TELL-STAIRS-FCN",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ROPE-DOWN-FCN",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RE-ENABLE-FCN",
     "message": null,
     "dir": "UP"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "RE-ENABLE-FCN",
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "ALTAR",
    "TORCH",
    "OIL-JAR"
   ],
   "source": "<ROOM CHAMBER-OF-RA\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"Chamber of Ra\")\n      (NORTH PER ROPE-HOOK-FCN)\n      (EAST PER TELL-STAIRS-FCN)\n      (SOUTH PER TELL-STAIRS-FCN)\n      (WEST PER TELL-STAIRS-FCN)\n      (DOWN PER ROPE-DOWN-FCN)\n      (UP PER RE-ENABLE-FCN)\n      (OUT PER RE-ENABLE-FCN)\n      (GLOBAL NORTH-STAIRS EAST-STAIRS SOUTH-STAIRS WEST-STAIRS FEW-STEPS)\n      (ACTION MOVE-ROPE-RA)>",
   "referencedBy": [
    "ENTER-PYRAMID-FCN",
    "ROPE-FCN",
    "RE-ENABLE-FCN",
    "ROPE-DOWN-FCN",
    "MOVE-ROPE-RA",
    "DESCRIBE-OBJECT",
    "STAIRWAY-CHECK?",
    "V-CLIMB-FOO",
    "V-LOOK-UP"
   ]
  },
  "TINY-LANDING": {
   "name": "TINY-LANDING",
   "file": "ra.zil",
   "line": 237,
   "endLine": 247,
   "desc": "On the Steep Stairs",
   "ldesc": "You are two steps down the steep staircase when you see before you a deep\ndropoff going down into nothingness. To go down any further would be suicide.",
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
    "NORTH-STAIRS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "ROPE-DOWN-FCN",
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "CHAMBER-OF-RA",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM TINY-LANDING\n      (IN ROOMS)\n      (FLAGS RLANDBIT ONBIT)\n      (DESC \"On the Steep Stairs\")\n      (LDESC\n\"You are two steps down the steep staircase when you see before you a deep\ndropoff going down into nothingness. To go down any further would be suicide.\")\n      (DOWN PER ROPE-DOWN-FCN)\n      (UP TO CHAMBER-OF-RA)\n      (GLOBAL NORTH-STAIRS)\n      ;(ACTION TINY-LANDING-F)>",
   "referencedBy": [
    "DESCRIBE-ROPE-FCN",
    "ROPE-FCN",
    "MOVE-PANEL-HERE",
    "FEW-STEPS-FCN",
    "MOVE-ROPE-HERE",
    "STAIRWAY-CHECK?"
   ]
  },
  "IN-THE-HALL": {
   "name": "IN-THE-HALL",
   "file": "temple.zil",
   "line": 10,
   "endLine": 23,
   "desc": "Steep Passageway",
   "ldesc": "You are at the top of a steep, descending passage that plunges down to the\nnorth. Although the angle is steep, it looks as if you should have firm enough\nfooting to travel safely. From the angle, it appears as though the passage\nis actually leaving the pyramid, cutting down through the sand high overhead\nto an adjoining building.",
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
     "to": "BARGE-EXIT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "S-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "S-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BARGE-EXIT",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [],
   "source": "<ROOM IN-THE-HALL\n      (IN ROOMS)\n      (DESC \"Steep Passageway\")\n      (FLAGS RLANDBIT)\n      (LDESC\n\"You are at the top of a steep, descending passage that plunges down to the\nnorth. Although the angle is steep, it looks as if you should have firm enough\nfooting to travel safely. From the angle, it appears as though the passage\nis actually leaving the pyramid, cutting down through the sand high overhead\nto an adjoining building.\")\n      (SOUTH TO BARGE-EXIT) ;\"Articulates with BARGE area here\"\n      (DOWN TO S-END)\n      (NORTH TO S-END)\n      (OUT TO BARGE-EXIT)>",
   "referencedBy": []
  },
  "S-END": {
   "name": "S-END",
   "file": "temple.zil",
   "line": 25,
   "endLine": 37,
   "desc": "Steep Passageway",
   "ldesc": "You are about midway down a steep, descending, north/south passageway which\nseems to lead out of the pyramid to the north. The walls of stone are polished\nand as smooth as glass, glistening in your light, lighting the passage far to\nthe north and the south.",
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
     "to": "IN-THE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "IN-THE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "N-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "N-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [],
   "source": "<ROOM S-END\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Steep Passageway\")\n      (LDESC\n\"You are about midway down a steep, descending, north/south passageway which\nseems to lead out of the pyramid to the north. The walls of stone are polished\nand as smooth as glass, glistening in your light, lighting the passage far to\nthe north and the south.\")\n      (SOUTH TO IN-THE-HALL)\n      (UP TO IN-THE-HALL)\n      (DOWN TO N-END)\n      (NORTH TO N-END)>",
   "referencedBy": []
  },
  "N-END": {
   "name": "N-END",
   "file": "temple.zil",
   "line": 39,
   "endLine": 52,
   "desc": "Steep Passageway",
   "ldesc": "You are at the north end of a descending passageway. You can see the smoothly\npolished passageway rising up and out of sight to the south, heading back into\nthe pyramid. A large doorway cut into the stone walls lies to the north and,\nthrough it, you can see an immense chamber.",
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
    "DOORWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "S-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "S-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "TEMPLE-ENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TEMPLE-ENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM N-END\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Steep Passageway\")\n      (LDESC\n\"You are at the north end of a descending passageway. You can see the smoothly\npolished passageway rising up and out of sight to the south, heading back into\nthe pyramid. A large doorway cut into the stone walls lies to the north and,\nthrough it, you can see an immense chamber.\")\n      (SOUTH TO S-END)\n      (UP TO S-END)\n      (NORTH TO TEMPLE-ENTER)\n      (IN TO TEMPLE-ENTER)\n      (GLOBAL DOORWAY)>",
   "referencedBy": []
  },
  "TEMPLE-ENTER": {
   "name": "TEMPLE-ENTER",
   "file": "temple.zil",
   "line": 54,
   "endLine": 72,
   "desc": "Temple Chamber",
   "ldesc": "You are in a huge chamber, immense in its size and scope, especially since it\nis far underground. Your light seems to climb and fall from the high walls,\nmaking their top boundaries undefined as they melt into inky darkness,\nflickering into the unknown reaches high overhead. There is a huge doorway\ncarved out of the south wall, the arch at its top barely discernible in your\nlight. To the north is a similar doorway, slightly scaled down, with pillars on\neither side of it, their shadows playing strange tricks on the wall behind\nthem. You can just barely make out the paintings on the walls, pictures of the\nancient Queen, her servants, and the priests in attendance.",
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
    "PICTURES",
    "PILLARS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "N-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SKELETON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "N-END",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "SKELETON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM TEMPLE-ENTER\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Temple Chamber\")\n      (LDESC\n\"You are in a huge chamber, immense in its size and scope, especially since it\nis far underground. Your light seems to climb and fall from the high walls,\nmaking their top boundaries undefined as they melt into inky darkness,\nflickering into the unknown reaches high overhead. There is a huge doorway\ncarved out of the south wall, the arch at its top barely discernible in your\nlight. To the north is a similar doorway, slightly scaled down, with pillars on\neither side of it, their shadows playing strange tricks on the wall behind\nthem. You can just barely make out the paintings on the walls, pictures of the\nancient Queen, her servants, and the priests in attendance.\")\n      (SOUTH TO N-END)\n      (NORTH TO SKELETON-ROOM)\n      (OUT TO N-END)\n      (IN TO SKELETON-ROOM)\n      (GLOBAL PICTURES PILLARS)>",
   "referencedBy": [
    "V-LOOK-UP"
   ]
  },
  "SKELETON-ROOM": {
   "name": "SKELETON-ROOM",
   "file": "temple.zil",
   "line": 74,
   "endLine": 91,
   "desc": "Inner Chamber",
   "ldesc": "You are in the temple's inner chamber. The ceiling here is lower, low enough\nfor your light to reach it. There are openings in the east and west walls, and\na large, arched doorway to the south. The walls are covered with paintings,\nmost of which depict the Queen in different stages of preparation for her trip\non the royal barge. One in particular, larger than any of the others, shows the\nQueen and all of her attendants aboard the barge, floating through the air on\ntheir way to the netherworld. There are some detailed hieroglyphs on one of the\nwalls.",
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
    "HIEROGLYPHS",
    "PICTURES",
    "DOORWAY"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TEMPLE-ENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "TEMPLE-ENTER",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GOLDEN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SILVER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "SKELETON"
   ],
   "source": "<ROOM SKELETON-ROOM\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Inner Chamber\")\n      (LDESC\n\"You are in the temple's inner chamber. The ceiling here is lower, low enough\nfor your light to reach it. There are openings in the east and west walls, and\na large, arched doorway to the south. The walls are covered with paintings,\nmost of which depict the Queen in different stages of preparation for her trip\non the royal barge. One in particular, larger than any of the others, shows the\nQueen and all of her attendants aboard the barge, floating through the air on\ntheir way to the netherworld. There are some detailed hieroglyphs on one of the\nwalls.\")\n      (OUT TO TEMPLE-ENTER)\n      (SOUTH TO TEMPLE-ENTER)\n      (WEST TO GOLDEN-ROOM)\n      (EAST TO SILVER-ROOM)\n      (GLOBAL HIEROGLYPHS PICTURES DOORWAY)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "GOLDEN-ROOM": {
   "name": "GOLDEN-ROOM",
   "file": "temple.zil",
   "line": 93,
   "endLine": 107,
   "desc": "Golden Room",
   "ldesc": "You are in a room whose walls are covered with gold leaf. Your light reflects\noff the walls with a rich, warm tone and reveals the outlines of hieroglyphics\nengraved in the gold itself. There is a doorway cut into the south wall and,\nthrough the reflected light, you can tell it leads into a small chamber. There\nis another doorway leading out to the east.",
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
    "HIEROGLYPHS",
    "GOLD-LEAF"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SKELETON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "GCUP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "SKELETON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "GCUP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    }
   ],
   "contents": [],
   "source": "<ROOM GOLDEN-ROOM\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Golden Room\")\n      (LDESC\n\"You are in a room whose walls are covered with gold leaf. Your light reflects\noff the walls with a rich, warm tone and reveals the outlines of hieroglyphics\nengraved in the gold itself. There is a doorway cut into the south wall and,\nthrough the reflected light, you can tell it leads into a small chamber. There\nis another doorway leading out to the east.\")\n      (EAST TO SKELETON-ROOM)\n      (SOUTH TO GCUP-ROOM)\n      (OUT TO SKELETON-ROOM)\n      (IN TO GCUP-ROOM)\n      (GLOBAL HIEROGLYPHS GOLD-LEAF)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "GCUP-ROOM": {
   "name": "GCUP-ROOM",
   "file": "temple.zil",
   "line": 118,
   "endLine": 127,
   "desc": "Golden Alcove",
   "ldesc": "You are in a small alcove off the Golden Room. Sitting in the middle of this\nsmall room is a roughly-hewn slab of granite, much like a legless table.",
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
    "TABLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GOLDEN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "GOLDEN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "GOLD-TABLE"
   ],
   "source": "<ROOM GCUP-ROOM\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Golden Alcove\")\n      (LDESC\n\"You are in a small alcove off the Golden Room. Sitting in the middle of this\nsmall room is a roughly-hewn slab of granite, much like a legless table.\")\n      (OUT TO GOLDEN-ROOM)\n      (NORTH TO GOLDEN-ROOM)\n      (GLOBAL TABLE)>",
   "referencedBy": []
  },
  "SILVER-ROOM": {
   "name": "SILVER-ROOM",
   "file": "temple.zil",
   "line": 129,
   "endLine": 141,
   "desc": "Silver Room",
   "ldesc": "You are in the Silver Chamber, a room whose walls reflect your light\nbrilliantly due to their silver surface. A doorway leads west and out, while\nanother doorway leads into a smaller room to the south.",
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
    "HIEROGLYPHS",
    "GOLD-LEAF"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SKELETON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "SKELETON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SCUP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "SCUP-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM SILVER-ROOM\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Silver Room\")\n      (LDESC \n\"You are in the Silver Chamber, a room whose walls reflect your light\nbrilliantly due to their silver surface. A doorway leads west and out, while\nanother doorway leads into a smaller room to the south.\")\n      (OUT TO SKELETON-ROOM)\n      (WEST TO SKELETON-ROOM)\n      (IN TO SCUP-ROOM)\n      (SOUTH TO SCUP-ROOM)\n      (GLOBAL HIEROGLYPHS GOLD-LEAF)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "SCUP-ROOM": {
   "name": "SCUP-ROOM",
   "file": "temple.zil",
   "line": 143,
   "endLine": 152,
   "desc": "Silver Alcove",
   "ldesc": "You are in a small alcove off the Silver Room. Sitting in the middle of this\nsmall room is a roughly-hewn slab of granite, much like a legless table.",
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
    "TABLE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "SILVER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "SILVER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "SILVER-TABLE"
   ],
   "source": "<ROOM SCUP-ROOM\n      (IN ROOMS)\n      (FLAGS RLANDBIT)\n      (DESC \"Silver Alcove\")\n      (LDESC\n\"You are in a small alcove off the Silver Room. Sitting in the middle of this\nsmall room is a roughly-hewn slab of granite, much like a legless table.\")\n      (OUT TO SILVER-ROOM)\n      (NORTH TO SILVER-ROOM)\n      (GLOBAL TABLE)>",
   "referencedBy": []
  }
 },
 "objects": {
  "T-LINTEL": {
   "name": "T-LINTEL",
   "file": "ante.zil",
   "line": 23,
   "endLine": 28,
   "desc": "timber lintel",
   "ldesc": null,
   "fdesc": null,
   "loc": "NORTH-ANTECHAMBER",
   "flags": [
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "LINTEL"
   ],
   "adjectives": [
    "TIMBER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT T-LINTEL\n\t(IN NORTH-ANTECHAMBER)\n\t(FLAGS NDESCBIT DONTTAKE)\n\t(DESC \"timber lintel\")\n\t(SYNONYM LINTEL)\n\t(ADJECTIVE TIMBER)>",
   "referencedBy": [
    "BEAM-FCN"
   ]
  },
  "TILES": {
   "name": "TILES",
   "file": "ante.zil",
   "line": 55,
   "endLine": 60,
   "desc": "tiles",
   "ldesc": null,
   "fdesc": null,
   "loc": "MID-ANTECHAMBER",
   "flags": [
    "DONTTAKE",
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "TILES",
    "IVORY"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Quite beautiful, no?"
    ]
   },
   "contents": [],
   "source": "<OBJECT TILES\n\t(IN MID-ANTECHAMBER)\n\t(DESC \"tiles\")\n\t(FLAGS DONTTAKE TRYTAKEBIT NDESCBIT)\n\t(SYNONYM TILES IVORY)\n\t(TEXT \"Quite beautiful, no?\")>",
   "referencedBy": []
  },
  "PIT": {
   "name": "PIT",
   "file": "ante.zil",
   "line": 62,
   "endLine": 68,
   "desc": "deep pit",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "PIT"
   ],
   "adjectives": [
    "DEEP"
   ],
   "action": "PIT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PIT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"deep pit\")\n\t(FLAGS NDESCBIT INVISIBLE)\n\t(SYNONYM PIT)\n\t(ADJECTIVE DEEP)\n\t(ACTION PIT-FCN)>",
   "referencedBy": [
    "MOVE-PLANK-FCN",
    "PLASTER-FCN",
    "BEAM-FCN",
    "FIREPIT-FCN",
    "BUT-WHERE?",
    "WEAR-THE-SACK",
    "CRACK-FCN",
    "HIERO-FCN",
    "EMPTY-THE"
   ]
  },
  "LINTEL": {
   "name": "LINTEL",
   "file": "ante.zil",
   "line": 118,
   "endLine": 126,
   "desc": "timber frame",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEST-END-OF-PASSAGE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "FRAME"
   ],
   "adjectives": [
    "TIMBER"
   ],
   "action": "BURN-FRAME-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The timber frame surrounds the doorway."
    ]
   },
   "contents": [],
   "source": "<OBJECT LINTEL\n\t(IN WEST-END-OF-PASSAGE)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT DONTTAKE)\n\t(DESC \"timber frame\")\n\t(SYNONYM FRAME)\n\t(ADJECTIVE TIMBER)\n\t(TEXT\n\"The timber frame surrounds the doorway.\")\n\t(ACTION BURN-FRAME-FCN)>",
   "referencedBy": [
    "DUMP-ALL-ON-GROUND",
    "PRE-PUT"
   ]
  },
  "ROCKS": {
   "name": "ROCKS",
   "file": "ante.zil",
   "line": 160,
   "endLine": 166,
   "desc": "rocks",
   "ldesc": null,
   "fdesc": null,
   "loc": "SOUTH-ANTECHAMBER",
   "flags": [
    "NDESCBIT",
    "DONTTAKE",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "ROCKS"
   ],
   "adjectives": [],
   "action": "ROCKS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "35"
    ]
   },
   "contents": [],
   "source": "<OBJECT ROCKS\n\t(IN SOUTH-ANTECHAMBER)\n\t(FLAGS NDESCBIT DONTTAKE CONTBIT OPENBIT SURFACEBIT)\n\t(DESC \"rocks\")\n\t(CAPACITY 35)\n\t(SYNONYM ROCKS)\n\t(ACTION ROCKS-FCN)>",
   "referencedBy": [
    "ROCKS-FCN",
    "CLOSE-THE-ANNEX",
    "BEAM-FCN"
   ]
  },
  "CHIPS1": {
   "name": "CHIPS1",
   "file": "ante.zil",
   "line": 187,
   "endLine": 194,
   "desc": "plaster dust",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "DONTTAKE",
    "TOUCHBIT"
   ],
   "synonyms": [
    "DUST",
    "CHIP",
    "CHIPS"
   ],
   "adjectives": [],
   "action": "TAKE-A-CHIP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The dust and chips are just remnants of your incessant tapping, tapping at the\nchamber door. Only this and nothing more."
    ]
   },
   "contents": [],
   "source": "<OBJECT CHIPS1\n\t(FLAGS NDESCBIT TAKEBIT DONTTAKE TOUCHBIT)\n\t(DESC \"plaster dust\")\n\t(SYNONYM DUST CHIP CHIPS)\n\t(TEXT\n\"The dust and chips are just remnants of your incessant tapping, tapping at the\nchamber door. Only this and nothing more.\")\n\t(ACTION TAKE-A-CHIP-FCN)>",
   "referencedBy": [
    "PLASTER1-FCN"
   ]
  },
  "CHIPS2": {
   "name": "CHIPS2",
   "file": "ante.zil",
   "line": 196,
   "endLine": 203,
   "desc": "plaster dust",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "DONTTAKE",
    "TOUCHBIT"
   ],
   "synonyms": [
    "DUST",
    "CHIP",
    "CHIPS"
   ],
   "adjectives": [],
   "action": "TAKE-A-CHIP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The dust and chips are just remnants of your incessant tapping, tapping at the\nchamber door. Only this and nothing more."
    ]
   },
   "contents": [],
   "source": "<OBJECT CHIPS2\n\t(FLAGS NDESCBIT TAKEBIT DONTTAKE TOUCHBIT)\n\t(DESC \"plaster dust\")\n\t(SYNONYM DUST CHIP CHIPS)\n\t(TEXT\n\"The dust and chips are just remnants of your incessant tapping, tapping at the\nchamber door. Only this and nothing more.\")\n\t(ACTION TAKE-A-CHIP-FCN)>",
   "referencedBy": [
    "PLASTER-FCN"
   ]
  },
  "SLAB": {
   "name": "SLAB",
   "file": "ante.zil",
   "line": 237,
   "endLine": 245,
   "desc": "slab",
   "ldesc": null,
   "fdesc": null,
   "loc": "ANNEX",
   "flags": [
    "DONTTAKE",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "SLAB"
   ],
   "adjectives": [
    "HUGE",
    "STONE"
   ],
   "action": "OPEN-SLAB-FCN",
   "descfcn": "DESCRIBE-SLAB-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "200"
    ]
   },
   "contents": [],
   "source": "<OBJECT SLAB\n\t(IN ANNEX)\n\t(FLAGS DONTTAKE CONTBIT SURFACEBIT OPENBIT)\n\t(DESC \"slab\")\n\t(SYNONYM SLAB)\n\t(ADJECTIVE HUGE STONE)\n\t(CAPACITY 200)\n\t(DESCFCN DESCRIBE-SLAB-FCN) \n\t(ACTION OPEN-SLAB-FCN)>",
   "referencedBy": [
    "SEAM-FCN",
    "OPEN-SLAB-FCN",
    "DESCRIBE-SLAB-FCN",
    "V-BOARD"
   ]
  },
  "SLAB-SEAM": {
   "name": "SLAB-SEAM",
   "file": "ante.zil",
   "line": 247,
   "endLine": 254,
   "desc": "thin seam",
   "ldesc": null,
   "fdesc": null,
   "loc": "ANNEX",
   "flags": [
    "NDESCBIT",
    "DONTTAKE",
    "CONTBIT"
   ],
   "synonyms": [
    "SEAM"
   ],
   "adjectives": [
    "THIN"
   ],
   "action": "SEAM-FCN",
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
   "source": "<OBJECT SLAB-SEAM\n\t(IN ANNEX)\n\t(FLAGS NDESCBIT DONTTAKE CONTBIT)\n\t(DESC \"thin seam\")\n\t(CAPACITY 1)\n\t(SYNONYM SEAM)\n\t(ADJECTIVE THIN)\n\t(ACTION SEAM-FCN)>",
   "referencedBy": [
    "SEAM-FCN"
   ]
  },
  "HOLE-4": {
   "name": "HOLE-4",
   "file": "ante.zil",
   "line": 347,
   "endLine": 356,
   "desc": "fourth hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "ANNEX",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "DONTTAKE",
    "OPENBIT"
   ],
   "synonyms": [
    "HOLE",
    "HOLES"
   ],
   "adjectives": [
    "FOURTH"
   ],
   "action": "DIAMOND-HOLE-FCN",
   "descfcn": null,
   "contfcn": "D-HOLE-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT HOLE-4\n\t(IN ANNEX)\n\t(FLAGS NDESCBIT CONTBIT DONTTAKE OPENBIT)\n\t(DESC \"fourth hole\")\n\t(SYNONYM HOLE HOLES)\n\t(ADJECTIVE FOURTH)\n\t(CAPACITY 2)\n\t(MAP 2)\n\t(CONTFCN D-HOLE-FCN)\n\t(ACTION DIAMOND-HOLE-FCN)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DESCRIBE-SLAB-FCN",
    "D-HOLE-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "HOLE-3": {
   "name": "HOLE-3",
   "file": "ante.zil",
   "line": 358,
   "endLine": 367,
   "desc": "third hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "ANNEX",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "DONTTAKE",
    "OPENBIT"
   ],
   "synonyms": [
    "HOLE",
    "HOLES"
   ],
   "adjectives": [
    "THIRD"
   ],
   "action": "DIAMOND-HOLE-FCN",
   "descfcn": null,
   "contfcn": "D-HOLE-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT HOLE-3\n\t(IN ANNEX)\n\t(FLAGS NDESCBIT CONTBIT DONTTAKE OPENBIT)\n\t(DESC \"third hole\")\n\t(SYNONYM HOLE HOLES)\n\t(ADJECTIVE THIRD)\n\t(CAPACITY 2)\n\t(MAP 2)\n\t(CONTFCN D-HOLE-FCN)\n\t(ACTION DIAMOND-HOLE-FCN)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DESCRIBE-SLAB-FCN",
    "D-HOLE-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "HOLE-2": {
   "name": "HOLE-2",
   "file": "ante.zil",
   "line": 369,
   "endLine": 378,
   "desc": "second hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "ANNEX",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "DONTTAKE",
    "OPENBIT"
   ],
   "synonyms": [
    "HOLE",
    "HOLES"
   ],
   "adjectives": [
    "SECOND"
   ],
   "action": "DIAMOND-HOLE-FCN",
   "descfcn": null,
   "contfcn": "D-HOLE-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT HOLE-2\n\t(IN ANNEX)\n\t(FLAGS NDESCBIT CONTBIT DONTTAKE OPENBIT)\n\t(DESC \"second hole\")\n\t(SYNONYM HOLE HOLES)\n\t(ADJECTIVE SECOND)\n\t(CAPACITY 2)\n\t(MAP 2)\n\t(CONTFCN D-HOLE-FCN)\n\t(ACTION DIAMOND-HOLE-FCN)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DESCRIBE-SLAB-FCN",
    "D-HOLE-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "HOLE-1": {
   "name": "HOLE-1",
   "file": "ante.zil",
   "line": 380,
   "endLine": 389,
   "desc": "first hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "ANNEX",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "DONTTAKE",
    "OPENBIT"
   ],
   "synonyms": [
    "HOLE",
    "HOLES"
   ],
   "adjectives": [
    "FIRST"
   ],
   "action": "DIAMOND-HOLE-FCN",
   "descfcn": null,
   "contfcn": "D-HOLE-FCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ],
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT HOLE-1\n\t(IN ANNEX)\n\t(FLAGS NDESCBIT CONTBIT DONTTAKE OPENBIT)\n\t(DESC \"first hole\")\n\t(SYNONYM HOLE HOLES)\n\t(ADJECTIVE FIRST)\n\t(CAPACITY 2)\n\t(MAP 2)\n\t(CONTFCN D-HOLE-FCN)\n\t(ACTION DIAMOND-HOLE-FCN)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DESCRIBE-SLAB-FCN",
    "D-HOLE-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "SCARAB-TABLE": {
   "name": "SCARAB-TABLE",
   "file": "ante.zil",
   "line": 522,
   "endLine": 530,
   "desc": "granite table",
   "ldesc": null,
   "fdesc": null,
   "loc": "TREASURY",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "GRANITE"
   ],
   "action": "SCARAB-TABLE-F",
   "descfcn": "PROB-DESC",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [
    "LEFT-DISC",
    "RIGHT-DISC",
    "MID-DISC"
   ],
   "source": "<OBJECT SCARAB-TABLE\n\t(IN TREASURY)\n\t(FLAGS CONTBIT OPENBIT DONTTAKE)\n\t(DESC \"granite table\")\n\t(SYNONYM TABLE)\n\t(ADJECTIVE GRANITE)\n\t(CAPACITY 100)\n\t(DESCFCN PROB-DESC)\n\t(ACTION SCARAB-TABLE-F)>",
   "referencedBy": []
  },
  "LEFT-DISC": {
   "name": "LEFT-DISC",
   "file": "ante.zil",
   "line": 547,
   "endLine": 555,
   "desc": "left disc",
   "ldesc": null,
   "fdesc": null,
   "loc": "SCARAB-TABLE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT",
    "DONTTAKE",
    "TRANSBIT"
   ],
   "synonyms": [
    "DISC"
   ],
   "adjectives": [
    "LEFT"
   ],
   "action": "PUSH-DISC-FCN",
   "descfcn": null,
   "contfcn": "DISC-CONTFCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT LEFT-DISC\n\t(IN SCARAB-TABLE)\n\t(DESC \"left disc\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT DONTTAKE TRANSBIT)\n\t(CAPACITY 30)\n\t(SYNONYM DISC)\n\t(ADJECTIVE LEFT)\n\t(CONTFCN DISC-CONTFCN)\n\t(ACTION PUSH-DISC-FCN)>",
   "referencedBy": [
    "DISC-CONTFCN",
    "PUSH-DISC-FCN",
    "PROB-DESC",
    "TELL-ABOUT",
    "SCARAB-CHECK-FCN",
    "PRE-PUT"
   ]
  },
  "RIGHT-DISC": {
   "name": "RIGHT-DISC",
   "file": "ante.zil",
   "line": 557,
   "endLine": 565,
   "desc": "right disc",
   "ldesc": null,
   "fdesc": null,
   "loc": "SCARAB-TABLE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT",
    "DONTTAKE",
    "TRANSBIT"
   ],
   "synonyms": [
    "DISC"
   ],
   "adjectives": [
    "RIGHT"
   ],
   "action": "PUSH-DISC-FCN",
   "descfcn": null,
   "contfcn": "DISC-CONTFCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT RIGHT-DISC\n\t(IN SCARAB-TABLE)\n\t(DESC \"right disc\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT DONTTAKE TRANSBIT)\n\t(CAPACITY 30)\n\t(SYNONYM DISC)\n\t(ADJECTIVE RIGHT)\n\t(CONTFCN DISC-CONTFCN)\n\t(ACTION PUSH-DISC-FCN)>",
   "referencedBy": [
    "DISC-CONTFCN",
    "PUSH-DISC-FCN",
    "PROB-DESC",
    "TELL-ABOUT",
    "SCARAB-CHECK-FCN",
    "PRE-PUT"
   ]
  },
  "MID-DISC": {
   "name": "MID-DISC",
   "file": "ante.zil",
   "line": 567,
   "endLine": 574,
   "desc": "middle disc",
   "ldesc": null,
   "fdesc": null,
   "loc": "SCARAB-TABLE",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT",
    "DONTTAKE",
    "TRANSBIT"
   ],
   "synonyms": [
    "DISC"
   ],
   "adjectives": [
    "MIDDLE"
   ],
   "action": "PUSH-DISC-FCN",
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
    "SCARAB"
   ],
   "source": "<OBJECT MID-DISC\n\t(IN SCARAB-TABLE)\n\t(DESC \"middle disc\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT DONTTAKE TRANSBIT)\n\t(CAPACITY 30)\n\t(SYNONYM DISC)\n\t(ADJECTIVE MIDDLE)\n\t(ACTION PUSH-DISC-FCN)>",
   "referencedBy": [
    "DISC-CONTFCN",
    "PUSH-DISC-FCN",
    "PROB-DESC",
    "TELL-ABOUT",
    "SCARAB-CHECK-FCN",
    "PRE-PUT"
   ]
  },
  "NICHES": {
   "name": "NICHES",
   "file": "ante.zil",
   "line": 758,
   "endLine": 768,
   "desc": "small niche",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEST-END-OF-PASSAGE",
   "flags": [
    "NDESCBIT",
    "DONTTAKE",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "NICHE",
    "NICHES"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "NICHE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Each small niche rests about three inches off the floor. They are recessed\ninto the walls, one on either side of the passageway."
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT NICHES\n\t(IN WEST-END-OF-PASSAGE)\n\t(FLAGS NDESCBIT DONTTAKE CONTBIT OPENBIT)\n\t(DESC \"small niche\")\n\t(TEXT\n\"Each small niche rests about three inches off the floor. They are recessed\ninto the walls, one on either side of the passageway.\")\n\t(SYNONYM NICHE NICHES)\n\t(ADJECTIVE SMALL)\n\t(CAPACITY 1)\n\t(ACTION NICHE-F)>",
   "referencedBy": [
    "NICHE-F",
    "DUMP-ALL-ON-GROUND",
    "BEAM-FCN",
    "V-PUT"
   ]
  },
  "PLASTER1": {
   "name": "PLASTER1",
   "file": "ante.zil",
   "line": 780,
   "endLine": 786,
   "desc": "plaster",
   "ldesc": null,
   "fdesc": null,
   "loc": "STAIRS-BOTTOM",
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "TRYTAKEBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "PLASTE"
   ],
   "adjectives": [],
   "action": "PLASTER1-FCN",
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
   "source": "<OBJECT PLASTER1\n\t(IN STAIRS-BOTTOM)\n\t(FLAGS NDESCBIT TAKEBIT TRYTAKEBIT DONTTAKE)\n\t(DESC \"plaster\")\n\t(SYNONYM PLASTE)\n\t(SIZE 5)\n\t(ACTION PLASTER1-FCN)>",
   "referencedBy": [
    "PLASTER1-FCN",
    "WALL-FCN",
    "HIERO-FCN",
    "MAIN-LOOP",
    "PRE-PUT",
    "PRE-MUNG",
    "V-DIG",
    "V-PLASTER-REMOVE"
   ]
  },
  "INNER-DOOR": {
   "name": "INNER-DOOR",
   "file": "ante.zil",
   "line": 823,
   "endLine": 829,
   "desc": "inner door",
   "ldesc": null,
   "fdesc": null,
   "loc": "WEST-END-OF-PASSAGE",
   "flags": [
    "NDESCBIT",
    "DOORBIT",
    "VOWELBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "INNER"
   ],
   "action": "INNER-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INNER-DOOR\n\t(IN WEST-END-OF-PASSAGE)\n\t(FLAGS NDESCBIT DOORBIT VOWELBIT DONTTAKE)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE INNER)\n\t(DESC \"inner door\")\n\t(ACTION INNER-DOOR-FCN)>",
   "referencedBy": [
    "JERRY-HACK-F",
    "INNER-DOOR-FCN",
    "PLASTER-FCN",
    "DUMP-ALL-ON-GROUND",
    "V-PLASTER-REMOVE"
   ]
  },
  "PLASTER": {
   "name": "PLASTER",
   "file": "ante.zil",
   "line": 856,
   "endLine": 865,
   "desc": "plaster",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "DONTTAKE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PLASTE"
   ],
   "adjectives": [],
   "action": "PLASTER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The plaster is ancient, applied to the door behind it to prevent people from\nentering the resting place of the Queen. Some hieroglyphs are etched into the\nplaster."
    ],
    "SIZE": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT PLASTER\n\t(FLAGS NDESCBIT TAKEBIT DONTTAKE TRYTAKEBIT)\n\t(SYNONYM PLASTE)\n\t(DESC \"plaster\")\n\t(TEXT\n\"The plaster is ancient, applied to the door behind it to prevent people from\nentering the resting place of the Queen. Some hieroglyphs are etched into the\nplaster.\")\n\t(SIZE 5)\n\t(ACTION PLASTER-FCN)>",
   "referencedBy": [
    "PLASTER1-FCN",
    "INNER-DOOR-FCN",
    "PLASTER-FCN",
    "BEAM-FCN",
    "MAIN-LOOP",
    "PRE-PUT",
    "V-BURN",
    "PRE-MUNG",
    "V-DIG",
    "V-PLASTER-REMOVE"
   ]
  },
  "NORTH-ANTE-DOOR": {
   "name": "NORTH-ANTE-DOOR",
   "file": "ante.zil",
   "line": 916,
   "endLine": 922,
   "desc": "burial door",
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
    "BURIAL"
   ],
   "action": "NORTH-ANTE-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NORTH-ANTE-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT DOORBIT)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE BURIAL)\n\t(DESC \"burial door\")\n\t(ACTION NORTH-ANTE-DOOR-FCN)>",
   "referencedBy": [
    "NORTH-ANTE-DOOR-FCN",
    "DROP-THE-BLOCKS",
    "BEAM-FCN",
    "BREAK-SEAL",
    "V-PLASTER-REMOVE"
   ]
  },
  "N-ANTE-SEAL": {
   "name": "N-ANTE-SEAL",
   "file": "ante.zil",
   "line": 960,
   "endLine": 964,
   "desc": "seal",
   "ldesc": null,
   "fdesc": null,
   "loc": "NORTH-ANTECHAMBER",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SEALS",
    "SEAL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT N-ANTE-SEAL\n\t(IN NORTH-ANTECHAMBER)\n\t(FLAGS NDESCBIT)\n\t(DESC \"seal\")\n\t(SYNONYM SEALS SEAL)>",
   "referencedBy": [
    "DROP-THE-BLOCKS",
    "PRE-MUNG",
    "V-PLASTER-REMOVE"
   ]
  },
  "ANNEX-DOOR": {
   "name": "ANNEX-DOOR",
   "file": "ante.zil",
   "line": 966,
   "endLine": 972,
   "desc": "annex door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DOORBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "ANNEX"
   ],
   "action": "ANNEX-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ANNEX-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT DOORBIT VOWELBIT)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE ANNEX)\n\t(DESC \"annex door\")\n\t(ACTION ANNEX-DOOR-FCN)>",
   "referencedBy": [
    "ANNEX-DOOR-FCN",
    "SET-THE-BEAM",
    "BEAM-FCN",
    "HIERO-FCN",
    "V-PLASTER-REMOVE"
   ]
  },
  "ISIS": {
   "name": "ISIS",
   "file": "ante.zil",
   "line": 1005,
   "endLine": 1011,
   "desc": "Isis statue",
   "ldesc": null,
   "fdesc": null,
   "loc": "BURIAL-CHAMBER",
   "flags": [
    "CLAMPBIT",
    "TURNBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "STATUE"
   ],
   "adjectives": [
    "ISIS"
   ],
   "action": "TURN-STATUES-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ISIS\n\t(IN BURIAL-CHAMBER)\n\t(DESC \"Isis statue\")\n\t(SYNONYM STATUE)\n\t(ADJECTIVE ISIS)\n\t(FLAGS CLAMPBIT TURNBIT NDESCBIT)\n\t(ACTION TURN-STATUES-FCN)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "NEPHTHYS": {
   "name": "NEPHTHYS",
   "file": "ante.zil",
   "line": 1013,
   "endLine": 1019,
   "desc": "Nephthys statue",
   "ldesc": null,
   "fdesc": null,
   "loc": "BURIAL-CHAMBER",
   "flags": [
    "NDESCBIT",
    "CLAMPBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "STATUE"
   ],
   "adjectives": [
    "NEPHTH"
   ],
   "action": "TURN-STATUES-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NEPHTHYS\n\t(IN BURIAL-CHAMBER)\n\t(DESC \"Nephthys statue\")\n\t(SYNONYM STATUE)\n\t(ADJECTIVE NEPHTH)\n\t(FLAGS NDESCBIT CLAMPBIT TURNBIT)\n\t(ACTION TURN-STATUES-FCN)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "NEITH": {
   "name": "NEITH",
   "file": "ante.zil",
   "line": 1021,
   "endLine": 1027,
   "desc": "Neith statue",
   "ldesc": null,
   "fdesc": null,
   "loc": "BURIAL-CHAMBER",
   "flags": [
    "NDESCBIT",
    "CLAMPBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "STATUE"
   ],
   "adjectives": [
    "NEITH"
   ],
   "action": "TURN-STATUES-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NEITH\n\t(IN BURIAL-CHAMBER)\n\t(DESC \"Neith statue\")\n\t(SYNONYM STATUE)\n\t(ADJECTIVE NEITH)\n\t(FLAGS NDESCBIT CLAMPBIT TURNBIT)\n\t(ACTION TURN-STATUES-FCN)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "SELKIS": {
   "name": "SELKIS",
   "file": "ante.zil",
   "line": 1029,
   "endLine": 1035,
   "desc": "Selkis statue",
   "ldesc": null,
   "fdesc": null,
   "loc": "BURIAL-CHAMBER",
   "flags": [
    "NDESCBIT",
    "CLAMPBIT",
    "TURNBIT"
   ],
   "synonyms": [
    "STATUE"
   ],
   "adjectives": [
    "SELKIS"
   ],
   "action": "TURN-STATUES-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SELKIS\n\t(IN BURIAL-CHAMBER)\n\t(DESC \"Selkis statue\")\n\t(FLAGS NDESCBIT CLAMPBIT TURNBIT)\n\t(SYNONYM STATUE)\n\t(ADJECTIVE SELKIS)\n\t(ACTION TURN-STATUES-FCN)>",
   "referencedBy": [
    "HIERO-FCN"
   ]
  },
  "ARMS": {
   "name": "ARMS",
   "file": "ante.zil",
   "line": 1037,
   "endLine": 1041,
   "desc": "arms",
   "ldesc": null,
   "fdesc": null,
   "loc": "BURIAL-CHAMBER",
   "flags": [
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "ARM",
    "ARMS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ARMS\n\t(IN BURIAL-CHAMBER)\n\t(DESC \"arms\")\n\t(SYNONYM ARM ARMS)\n\t(FLAGS NDESCBIT DONTTAKE)>",
   "referencedBy": []
  },
  "SARCOPH": {
   "name": "SARCOPH",
   "file": "ante.zil",
   "line": 1076,
   "endLine": 1083,
   "desc": "sarcophagus",
   "ldesc": null,
   "fdesc": null,
   "loc": "BURIAL-CHAMBER",
   "flags": [
    "CONTBIT",
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "SARCOP",
    "COFFIN"
   ],
   "adjectives": [],
   "action": "SARCOPH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ],
    "SIZE": [
     "500"
    ]
   },
   "contents": [],
   "source": "<OBJECT SARCOPH\n\t(IN BURIAL-CHAMBER)\n\t(DESC \"sarcophagus\")\n\t(FLAGS CONTBIT NDESCBIT DONTTAKE)\n\t(CAPACITY 1000)\n\t(SIZE 500)\n\t(SYNONYM SARCOP COFFIN)\n\t(ACTION SARCOPH-FCN)>",
   "referencedBy": [
    "SARCOPH-FCN",
    "PRE-PUSH-TO"
   ]
  },
  "SARCOPH-COVER": {
   "name": "SARCOPH-COVER",
   "file": "ante.zil",
   "line": 1099,
   "endLine": 1107,
   "desc": "quartz cover",
   "ldesc": null,
   "fdesc": null,
   "loc": "BURIAL-CHAMBER",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "COVER",
    "QUARTZ"
   ],
   "adjectives": [
    "QUARTZ"
   ],
   "action": "SARCOPH-COVER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "150"
    ],
    "CAPACITY": [
     "200"
    ]
   },
   "contents": [
    "S-AREA",
    "L-AREA"
   ],
   "source": "<OBJECT SARCOPH-COVER\n\t(IN BURIAL-CHAMBER)\n\t(SIZE 150)\n\t(FLAGS NDESCBIT CONTBIT SURFACEBIT OPENBIT DONTTAKE)\n\t(SYNONYM COVER QUARTZ)\n\t(ADJECTIVE QUARTZ)\n\t(DESC \"quartz cover\")\n\t(CAPACITY 200)\n\t(ACTION SARCOPH-COVER-FCN)>",
   "referencedBy": [
    "SARCOPH-FCN",
    "SARCOPH-COVER-FCN"
   ]
  },
  "S-AREA": {
   "name": "S-AREA",
   "file": "ante.zil",
   "line": 1109,
   "endLine": 1119,
   "desc": "smaller recess",
   "ldesc": null,
   "fdesc": null,
   "loc": "SARCOPH-COVER",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "RECESS",
    "AREA",
    "AREAS"
   ],
   "adjectives": [
    "SMALLE",
    "SMALL"
   ],
   "action": "SETBIT-FCN",
   "descfcn": null,
   "contfcn": "RECESS-CONTFCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ],
    "MAP": [
     "3"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT S-AREA\n\t(IN SARCOPH-COVER)\n\t(FLAGS CONTBIT SURFACEBIT OPENBIT NDESCBIT DONTTAKE)\n\t(DESC \"smaller recess\")\n\t(SYNONYM RECESS AREA AREAS)\n\t(ADJECTIVE SMALLE SMALL)\n\t(CAPACITY 100)\n\t(MAP 3)\n\t(CONTFCN RECESS-CONTFCN)\n\t(ACTION SETBIT-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "SETBIT-FCN",
    "RECESS-CONTFCN",
    "DESCRIBE-COVER",
    "SCARAB-CHECK-FCN",
    "DEAD-BOOK-FCN",
    "V-PUT"
   ]
  },
  "L-AREA": {
   "name": "L-AREA",
   "file": "ante.zil",
   "line": 1121,
   "endLine": 1131,
   "desc": "larger recess",
   "ldesc": null,
   "fdesc": null,
   "loc": "SARCOPH-COVER",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "RECESS",
    "AREA",
    "AREAS"
   ],
   "adjectives": [
    "LARGE",
    "LARGER"
   ],
   "action": "SETBIT-FCN",
   "descfcn": null,
   "contfcn": "RECESS-CONTFCN",
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ],
    "SIZE": [
     "1"
    ],
    "MAP": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT L-AREA\n\t(IN SARCOPH-COVER)\n\t(FLAGS CONTBIT SURFACEBIT OPENBIT NDESCBIT DONTTAKE)\n\t(DESC \"larger recess\")\n\t(SYNONYM RECESS AREA AREAS)\n\t(ADJECTIVE LARGE LARGER)\n\t(CAPACITY 100)\n\t(CONTFCN RECESS-CONTFCN)\n\t(ACTION SETBIT-FCN)\n\t(SIZE 1)\n\t(MAP 4)>",
   "referencedBy": [
    "SETBIT-FCN",
    "RECESS-CONTFCN",
    "DESCRIBE-COVER",
    "SCARAB-CHECK-FCN",
    "DEAD-BOOK-FCN",
    "V-PUT"
   ]
  },
  "SCARAB": {
   "name": "SCARAB",
   "file": "ante.zil",
   "line": 1278,
   "endLine": 1286,
   "desc": "scarab",
   "ldesc": null,
   "fdesc": null,
   "loc": "MID-DISC",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "SCARAB"
   ],
   "adjectives": [],
   "action": "SCARAB-CHECK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "10"
    ],
    "SIZE": [
     "8"
    ],
    "MAP": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT SCARAB\n\t(IN MID-DISC)\n\t(FLAGS TAKEBIT TRYTAKEBIT READBIT)\n\t(DESC \"scarab\")\n\t(VALUE 10)\n\t(SYNONYM SCARAB)\n\t(SIZE 8)\n\t(MAP 3)\n\t(ACTION SCARAB-CHECK-FCN)>",
   "referencedBy": [
    "DISC-CONTFCN",
    "SCARAB-CHECK-FCN",
    "DEAD-BOOK-FCN",
    "V-PUT",
    "V-TIE"
   ]
  },
  "DEAD-BOOK": {
   "name": "DEAD-BOOK",
   "file": "ante.zil",
   "line": 1288,
   "endLine": 1297,
   "desc": "ancient book",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "READBIT",
    "CONTBIT",
    "TAKEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "BOOK"
   ],
   "adjectives": [
    "ANCIEN"
   ],
   "action": "DEAD-BOOK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ],
    "MAP": [
     "4"
    ],
    "CAPACITY": [
     "1"
    ],
    "VALUE": [
     "10"
    ]
   },
   "contents": [
    "PAGE"
   ],
   "source": "<OBJECT DEAD-BOOK\n\t(FLAGS READBIT CONTBIT TAKEBIT VOWELBIT)\n\t(DESC \"ancient book\")\n\t(SYNONYM BOOK)\n\t(ADJECTIVE ANCIEN)\n\t(ACTION DEAD-BOOK-FCN)\n\t(SIZE 5)\n\t(MAP 4)\n\t(CAPACITY 1)\n\t(VALUE 10)>",
   "referencedBy": [
    "SCARAB-CHECK-FCN",
    "PAGE-FCN",
    "DEAD-BOOK-FCN",
    "V-PUT"
   ]
  },
  "PAGE": {
   "name": "PAGE",
   "file": "ante.zil",
   "line": 1299,
   "endLine": 1305,
   "desc": "page",
   "ldesc": null,
   "fdesc": null,
   "loc": "DEAD-BOOK",
   "flags": [
    "NDESCBIT",
    "READBIT",
    "BURNBIT",
    "TURNBIT",
    "DONTTAKE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PAGE"
   ],
   "adjectives": [],
   "action": "PAGE-FCN",
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
   "source": "<OBJECT PAGE\n\t(IN DEAD-BOOK)\n\t(DESC \"page\")\n\t(SYNONYM PAGE)\n\t(FLAGS NDESCBIT READBIT BURNBIT TURNBIT DONTTAKE TRYTAKEBIT)\n\t(ACTION PAGE-FCN)\n\t(SIZE 1)>",
   "referencedBy": [
    "DEAD-BOOK-FCN"
   ]
  },
  "CRUMBLED-BOOK": {
   "name": "CRUMBLED-BOOK",
   "file": "ante.zil",
   "line": 1329,
   "endLine": 1338,
   "desc": "ancient book",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "INVISIBLE",
    "BURNBIT",
    "TAKEBIT",
    "CONTBIT",
    "READBIT",
    "VOWELBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "BOOK",
    "DEAD"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ],
    "TEXT": [
     "This is what is left of the ancient Book of the Dead. Like the Queen it once\nreferred to, it too has seen better days."
    ],
    "VALUE": [
     "-20"
    ],
    "MAP": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT CRUMBLED-BOOK\n\t(FLAGS INVISIBLE BURNBIT TAKEBIT CONTBIT READBIT VOWELBIT OPENBIT)\n\t(DESC \"ancient book\")\n\t(SYNONYM BOOK DEAD)\n\t(SIZE 5)\n\t(TEXT\n\"This is what is left of the ancient Book of the Dead. Like the Queen it once\nreferred to, it too has seen better days.\")\n\t(VALUE -20)\n\t(MAP 4)>",
   "referencedBy": [
    "DEAD-BOOK-FCN"
   ]
  },
  "SPATULA": {
   "name": "SPATULA",
   "file": "ante.zil",
   "line": 1401,
   "endLine": 1407,
   "desc": "small spatula",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "TOOLBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "SPATUL"
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
     "This spatula was originally used for opening books and turning their pages."
    ]
   },
   "contents": [],
   "source": "<OBJECT SPATULA\n\t(FLAGS TAKEBIT TOOLBIT TOUCHBIT)\n\t(DESC \"small spatula\")\n\t(SYNONYM SPATUL)\n\t(ADJECTIVE SMALL)\n\t(TEXT\n\"This spatula was originally used for opening books and turning their pages.\")>",
   "referencedBy": [
    "DEAD-BOOK-FCN"
   ]
  },
  "PLANK": {
   "name": "PLANK",
   "file": "barge.zil",
   "line": 200,
   "endLine": 207,
   "desc": "plank",
   "ldesc": null,
   "fdesc": "A long wooden plank connects the barge and the entry area.",
   "loc": "BARGE-CENTER",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT",
    "DONTTAKE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "LADDER",
    "PLANK"
   ],
   "adjectives": [],
   "action": "PLANK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PLANK\n\t(IN BARGE-CENTER)\n\t(SYNONYM LADDER PLANK)\n\t(DESC \"plank\")\n\t(FDESC\n\"A long wooden plank connects the barge and the entry area.\")\n\t(FLAGS NDESCBIT CLIMBBIT DONTTAKE TRYTAKEBIT)\n\t(ACTION PLANK-FCN)>",
   "referencedBy": [
    "MOVE-THE-PLANK-FCN",
    "BURN-THE-BARGE",
    "V-CLIMB-FOO",
    "V-WALK-TO"
   ]
  },
  "MAST-HOLE": {
   "name": "MAST-HOLE",
   "file": "barge.zil",
   "line": 260,
   "endLine": 267,
   "desc": "mast hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "BARGE-CENTER",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "TRANSBIT",
    "DONTTAKE",
    "TRYTAKEBIT",
    "VEHBIT"
   ],
   "synonyms": [
    "HOLE"
   ],
   "adjectives": [
    "MAST"
   ],
   "action": "MAST-HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "34"
    ]
   },
   "contents": [],
   "source": "<OBJECT MAST-HOLE\n\t(IN BARGE-CENTER)\n\t(DESC \"mast hole\")\n\t(FLAGS NDESCBIT OPENBIT CONTBIT TRANSBIT DONTTAKE TRYTAKEBIT VEHBIT)\n\t(CAPACITY 34)\n\t(SYNONYM HOLE)\n\t(ADJECTIVE MAST)\n\t(ACTION MAST-HOLE-FCN)>",
   "referencedBy": [
    "BURN-THE-BARGE",
    "MAST-HOLE-FCN",
    "BEAM-FCN",
    "V-LEAP",
    "V-PULL-UP"
   ]
  },
  "TORCH-HOLDER": {
   "name": "TORCH-HOLDER",
   "file": "barge.zil",
   "line": 302,
   "endLine": 309,
   "desc": "knothole",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELOW-MAST",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "TRANSBIT",
    "OPENBIT",
    "DONTTAKE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "KNOTHO",
    "HOLE"
   ],
   "adjectives": [
    "KNOT"
   ],
   "action": "TORCH-HOLDER-FCN",
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
   "source": "<OBJECT TORCH-HOLDER\n\t(IN BELOW-MAST)\n\t(DESC \"knothole\")\n\t(FLAGS NDESCBIT CONTBIT TRANSBIT OPENBIT DONTTAKE TRYTAKEBIT)\n\t(CAPACITY 5)\n\t(ACTION TORCH-HOLDER-FCN)\n\t(SYNONYM KNOTHO HOLE)\n\t(ADJECTIVE KNOT)>",
   "referencedBy": [
    "BURN-THE-BARGE",
    "TORCH-HOLDER-FCN"
   ]
  },
  "SLOT": {
   "name": "SLOT",
   "file": "barge.zil",
   "line": 320,
   "endLine": 327,
   "desc": "slot",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELOW-MAST",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "DONTTAKE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SLOT"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "SLOT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "9"
    ]
   },
   "contents": [],
   "source": "<OBJECT SLOT\n\t(IN BELOW-MAST)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT DONTTAKE TRYTAKEBIT)\n\t(CAPACITY 9)\n\t(DESC \"slot\")\n\t(SYNONYM SLOT)\n\t(ADJECTIVE SMALL)\n\t(ACTION SLOT-FCN)>",
   "referencedBy": [
    "BURN-THE-BARGE",
    "SLOT-FCN",
    "BEAM-FCN"
   ]
  },
  "SHIM": {
   "name": "SHIM",
   "file": "barge.zil",
   "line": 344,
   "endLine": 353,
   "desc": "shim",
   "ldesc": null,
   "fdesc": null,
   "loc": "BELOW-MAST",
   "flags": [
    "TAKEBIT",
    "DONTTAKE",
    "NDESCBIT",
    "BURNBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SHIM",
    "WEDGE"
   ],
   "adjectives": [
    "WOOD"
   ],
   "action": "SHIM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "4"
    ],
    "TEXT": [
     "It's a small piece of wood, used as a wedge."
    ]
   },
   "contents": [],
   "source": "<OBJECT SHIM\n\t(IN BELOW-MAST)\n\t(FLAGS TAKEBIT DONTTAKE NDESCBIT BURNBIT TRYTAKEBIT)\n\t(DESC \"shim\")\n\t(SIZE 4)\n\t(SYNONYM SHIM WEDGE)\n\t(ADJECTIVE WOOD)\n\t(TEXT\n\"It's a small piece of wood, used as a wedge.\")\n\t(ACTION SHIM-FCN)>",
   "referencedBy": [
    "SLOT-FCN",
    "SHIM-FCN",
    "BEAM-FCN",
    "V-BURN"
   ]
  },
  "BEAM": {
   "name": "BEAM",
   "file": "barge.zil",
   "line": 364,
   "endLine": 378,
   "desc": "wooden beam",
   "ldesc": null,
   "fdesc": "Before you, running down through a hole in the deck, is a sturdy beam made of\nwood. Although only a few feet of it rise above the deck, it was probably used\nat one time as a mast.",
   "loc": "BARGE-CENTER",
   "flags": [
    "BURNBIT",
    "TAKEBIT",
    "VEHBIT",
    "TRYTAKEBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "BEAM",
    "MAST"
   ],
   "adjectives": [
    "WOODEN",
    "STURDY"
   ],
   "action": "BEAM-FCN",
   "descfcn": "DESCRIBE-BEAM-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "VALUE": [
     "15"
    ],
    "CAPACITY": [
     "30"
    ]
   },
   "contents": [],
   "source": "<OBJECT BEAM\n\t(IN BARGE-CENTER)\n\t(FLAGS BURNBIT TAKEBIT VEHBIT TRYTAKEBIT SURFACEBIT CONTBIT OPENBIT)\n\t(DESC \"wooden beam\")\n\t(FDESC\n\"Before you, running down through a hole in the deck, is a sturdy beam made of\nwood. Although only a few feet of it rise above the deck, it was probably used\nat one time as a mast.\")\n\t(SYNONYM BEAM MAST)\n\t(ADJECTIVE WOODEN STURDY)\n\t(SIZE 10)\n\t(VALUE 15)\n\t(ACTION BEAM-FCN)\n\t(CAPACITY 30)\n\t(DESCFCN DESCRIBE-BEAM-FCN)>",
   "referencedBy": [
    "NORTH-ANTE-FCN",
    "MOVE-PLANK-FCN",
    "WALK-BEAM-FCN",
    "ROCKS-FCN",
    "ANNEX-BEAM-MOVER",
    "BURIAL-CHAMBER-DESC",
    "ANNEX-DOOR-FCN",
    "SETBIT-FCN",
    "DUMP-ALL-ON-GROUND",
    "BURN-THE-BARGE",
    "SLOT-FCN",
    "SET-THE-BEAM",
    "BEAM-FCN",
    "WEAR-THE-SACK",
    "V-PUT",
    "V-MOVE",
    "PRE-BOARD",
    "V-BURN",
    "PRE-MUNG",
    "V-TIE",
    "V-CLIMB-ON",
    "V-CLIMB-UP",
    "BREAK-SEAL",
    "PRE-PULL-UP",
    "V-PULL-UP"
   ]
  },
  "SCROLL": {
   "name": "SCROLL",
   "file": "barge.zil",
   "line": 638,
   "endLine": 649,
   "desc": "papyrus scroll",
   "ldesc": null,
   "fdesc": "Sitting on the deck is a papyrus scroll.",
   "loc": "FORE-CABIN",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "SCROLL"
   ],
   "adjectives": [
    "PAPYRU"
   ],
   "action": "READ-SCROLL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "TEXT": [
     "This scroll was placed here for the Queen's passage to the afterlife."
    ]
   },
   "contents": [],
   "source": "<OBJECT SCROLL\n\t(IN FORE-CABIN)\n\t(FLAGS TAKEBIT READBIT BURNBIT)\n\t(DESC \"papyrus scroll\")\n\t(FDESC\n\"Sitting on the deck is a papyrus scroll.\")\n\t(SIZE 1)\n\t(TEXT\n\"This scroll was placed here for the Queen's passage to the afterlife.\")\n\t(SYNONYM SCROLL)\n\t(ADJECTIVE PAPYRU)\n\t(ACTION READ-SCROLL-FCN)>",
   "referencedBy": []
  },
  "NASTY-CROC": {
   "name": "NASTY-CROC",
   "file": "camp.zil",
   "line": 23,
   "endLine": 28,
   "desc": "crocodile",
   "ldesc": null,
   "fdesc": null,
   "loc": "RIVER-BANK",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "CROC",
    "CROCS",
    "CROCOD",
    "REPTIL"
   ],
   "adjectives": [],
   "action": "CROC-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NASTY-CROC\n\t(IN RIVER-BANK)\n\t(DESC \"crocodile\")\n\t(FLAGS NDESCBIT TOUCHBIT DONTTAKE)\n\t(SYNONYM CROC CROCS CROCOD REPTIL)\n\t(ACTION CROC-FCN)>",
   "referencedBy": [
    "CROC-FCN",
    "WEAR-THE-SACK"
   ]
  },
  "NILE-RIBBAH": {
   "name": "NILE-RIBBAH",
   "file": "camp.zil",
   "line": 36,
   "endLine": 42,
   "desc": "Nile",
   "ldesc": null,
   "fdesc": null,
   "loc": "RIVER-BANK",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "CONTBIT",
    "OPENBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "RIVER",
    "NILE"
   ],
   "adjectives": [],
   "action": "GET-WET-FCN",
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
   "source": "<OBJECT NILE-RIBBAH\n\t(IN RIVER-BANK)\n\t(DESC \"Nile\")\n\t(FLAGS NDESCBIT TOUCHBIT CONTBIT OPENBIT DONTTAKE)\n\t(CAPACITY 1000)\n\t(SYNONYM RIVER NILE)\n\t(ACTION GET-WET-FCN)>",
   "referencedBy": [
    "CROC-FCN",
    "GET-WET-FCN",
    "V-SWIM",
    "V-DRINK-FROM",
    "V-DIP-IN"
   ]
  },
  "THICKETS": {
   "name": "THICKETS",
   "file": "camp.zil",
   "line": 92,
   "endLine": 99,
   "desc": "thicket",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "THICKE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "They're about as yielding as you were with your helpers. What else can I say\nabout them?"
    ]
   },
   "contents": [],
   "source": "<OBJECT THICKETS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"thicket\")\n\t(FLAGS NDESCBIT DONTTAKE)\n\t(SYNONYM THICKE)\n\t(TEXT\n\"They're about as yielding as you were with your helpers. What else can I say\nabout them?\")>",
   "referencedBy": []
  },
  "FIREPIT": {
   "name": "FIREPIT",
   "file": "camp.zil",
   "line": 101,
   "endLine": 108,
   "desc": "pit",
   "ldesc": null,
   "fdesc": null,
   "loc": "FIRE",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "CONTBIT",
    "OPENBIT",
    "DONTTAKE",
    "TRANSBIT"
   ],
   "synonyms": [
    "PIT"
   ],
   "adjectives": [
    "CHARRE"
   ],
   "action": "FIREPIT-FCN",
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
   "source": "<OBJECT FIREPIT\n\t(IN FIRE)\n\t(FLAGS NDESCBIT TOUCHBIT CONTBIT OPENBIT DONTTAKE TRANSBIT)\n\t(DESC \"pit\")\n\t(SYNONYM PIT)\n\t(ADJECTIVE CHARRE)\n\t(CAPACITY 200)\n\t(ACTION FIREPIT-FCN)>",
   "referencedBy": []
  },
  "ROCK": {
   "name": "ROCK",
   "file": "camp.zil",
   "line": 110,
   "endLine": 116,
   "desc": "blackened rock",
   "ldesc": null,
   "fdesc": null,
   "loc": "FIRE",
   "flags": [
    "NDESCBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "ROCK",
    "STONE"
   ],
   "adjectives": [
    "BLACKE"
   ],
   "action": "TAKE-ROCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROCK\n\t(IN FIRE)\n\t(FLAGS NDESCBIT TAKEBIT)\n\t(DESC \"blackened rock\")\n\t(SYNONYM ROCK STONE)\n\t(ADJECTIVE BLACKE)\n\t(ACTION TAKE-ROCK-FCN)>",
   "referencedBy": [
    "HEAVY?",
    "TAKE-ROCK-FCN",
    "LOCK-FCN"
   ]
  },
  "TENT-OBJ": {
   "name": "TENT-OBJ",
   "file": "camp.zil",
   "line": 141,
   "endLine": 147,
   "desc": "tent",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "TENT"
   ],
   "adjectives": [
    "YOUR",
    "SUPPLY",
    "WORK"
   ],
   "action": "ENTER-TENT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TENT-OBJ\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT TOUCHBIT DONTTAKE)\n\t(DESC \"tent\")\n\t(SYNONYM TENT)\n\t(ADJECTIVE YOUR SUPPLY WORK)\n\t(ACTION ENTER-TENT-FCN)>",
   "referencedBy": [
    "ENTER-TENT-FCN",
    "PRE-BOARD"
   ]
  },
  "PYRAMID": {
   "name": "PYRAMID",
   "file": "camp.zil",
   "line": 189,
   "endLine": 193,
   "desc": "pyramid",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "PYRAMI"
   ],
   "adjectives": [],
   "action": "ENTER-PYRAMID-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PYRAMID\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"pyramid\")\n\t(SYNONYM PYRAMI)\n\t(ACTION ENTER-PYRAMID-FCN)>",
   "referencedBy": [
    "ENTER-PYRAMID-FCN",
    "HOLE-FCN",
    "V-DIG"
   ]
  },
  "ROCK-S": {
   "name": "ROCK-S",
   "file": "camp.zil",
   "line": 424,
   "endLine": 430,
   "desc": "blackened rocks",
   "ldesc": null,
   "fdesc": null,
   "loc": "FIRE",
   "flags": [
    "DONTTAKE",
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "ROCKS"
   ],
   "adjectives": [
    "BLACKE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "They form a ring around the firepit."
    ]
   },
   "contents": [],
   "source": "<OBJECT ROCK-S\n\t(IN FIRE)\n\t(FLAGS DONTTAKE NDESCBIT TRYTAKEBIT)\n\t(DESC \"blackened rocks\")\n\t(SYNONYM ROCKS)\n\t(ADJECTIVE BLACKE)\n\t(TEXT \"They form a ring around the firepit.\")>",
   "referencedBy": []
  },
  "ROCK-LOCK": {
   "name": "ROCK-LOCK",
   "file": "camp.zil",
   "line": 841,
   "endLine": 849,
   "desc": "opening",
   "ldesc": null,
   "fdesc": null,
   "loc": "EX8",
   "flags": [
    "INVISIBLE",
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "DONTTAKE",
    "VOWELBIT"
   ],
   "synonyms": [
    "OPENIN",
    "BLOCK",
    "HOLE"
   ],
   "adjectives": [
    "SQUARE"
   ],
   "action": "ENTER-OPENING-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ],
    "MAP": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT ROCK-LOCK\n\t(IN EX8)\n\t(FLAGS INVISIBLE NDESCBIT CONTBIT OPENBIT DONTTAKE VOWELBIT)\n\t(DESC \"opening\")\n\t(SYNONYM OPENIN BLOCK HOLE)\n\t(ADJECTIVE SQUARE)\n\t(CAPACITY 5)\n\t(MAP 3)\n\t(ACTION ENTER-OPENING-FCN)>",
   "referencedBy": [
    "ENTER-PYRAMID-FCN",
    "STONE-KEY-FCN",
    "V-DIG",
    "V-COMPARE"
   ]
  },
  "COT": {
   "name": "COT",
   "file": "camp.zil",
   "line": 874,
   "endLine": 882,
   "desc": "army cot",
   "ldesc": null,
   "fdesc": null,
   "loc": "TENT",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT",
    "VEHBIT",
    "VOWELBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "COT"
   ],
   "adjectives": [
    "ARMY"
   ],
   "action": "COT-FCN",
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
   "source": "<OBJECT COT\n\t(IN TENT)\n\t(FLAGS TAKEBIT TRYTAKEBIT CONTBIT OPENBIT SURFACEBIT VEHBIT VOWELBIT\n\t       TRANSBIT)\n\t(DESC \"army cot\")\n\t(ACTION COT-FCN)\n\t(CAPACITY 100)\n\t(SYNONYM COT)\n\t(ADJECTIVE ARMY)>",
   "referencedBy": [
    "COT-FCN",
    "BUT-WHERE?",
    "DESCRIBE-TRUNK-FCN",
    "IN-A-TENT?",
    "GO",
    "SPILL-WHERE?",
    "V-LOOK-UP",
    "V-SLEEP"
   ]
  },
  "FOLDED-COT": {
   "name": "FOLDED-COT",
   "file": "camp.zil",
   "line": 884,
   "endLine": 890,
   "desc": "folded cot",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "COT"
   ],
   "adjectives": [
    "ARMY",
    "FOLDED"
   ],
   "action": "COT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "9"
    ]
   },
   "contents": [],
   "source": "<OBJECT FOLDED-COT\n\t(FLAGS TAKEBIT)\n\t(DESC \"folded cot\")\n\t(ACTION COT-FCN)\n\t(SIZE 9)\n\t(SYNONYM COT)\n\t(ADJECTIVE ARMY FOLDED)>",
   "referencedBy": [
    "HEAVY?",
    "COT-FCN",
    "WEAR-THE-SACK"
   ]
  },
  "MATCHES": {
   "name": "MATCHES",
   "file": "camp.zil",
   "line": 966,
   "endLine": 976,
   "desc": "matchbook",
   "ldesc": null,
   "fdesc": "Sitting by a rock is what looks like a matchbook.",
   "loc": "FIRE",
   "flags": [
    "BURNBIT",
    "TAKEBIT",
    "READBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "MATCHB",
    "MATCHE",
    "COVER"
   ],
   "adjectives": [],
   "action": "READ-MATCHES-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "CAPACITY": [
     "1"
    ],
    "GENERIC": [
     "DIASMBIGUATE-FCN"
    ]
   },
   "contents": [
    "MANY-MATCHES"
   ],
   "source": "<OBJECT MATCHES\n\t(IN FIRE)\n\t(DESC \"matchbook\")\n\t(FDESC\n\"Sitting by a rock is what looks like a matchbook.\")\n\t(SYNONYM MATCHB MATCHE COVER)\n\t(FLAGS BURNBIT TAKEBIT READBIT CONTBIT)\n\t(SIZE 1)\n\t(CAPACITY 1)\n\t(GENERIC DIASMBIGUATE-FCN)\n\t(ACTION READ-MATCHES-FCN)>",
   "referencedBy": [
    "TAKE-ROCK-FCN",
    "READ-MATCHES-FCN",
    "DROP-ONE-FCN",
    "MATCH-MOVER",
    "SEND-FOR-IT-FCN",
    "BURN-FOO-FCN",
    "DIASMBIGUATE-FCN",
    "BUT-MERGE",
    "RA-STAIRS-FCN",
    "V-LAMP-ON",
    "LIGHT-THE",
    "V-LAMP-OFF",
    "PRE-BURN",
    "V-COUNT"
   ]
  },
  "MANY-MATCHES": {
   "name": "MANY-MATCHES",
   "file": "camp.zil",
   "line": 1003,
   "endLine": 1011,
   "desc": "few matches",
   "ldesc": null,
   "fdesc": null,
   "loc": "MATCHES",
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "MATCH"
   ],
   "adjectives": [
    "ONE",
    "SINGLE"
   ],
   "action": "TAKE-ONE-MATCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "DIASMBIGUATE-FCN"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT MANY-MATCHES\n\t(IN MATCHES)\n\t(FLAGS TAKEBIT BURNBIT TRYTAKEBIT)\n\t(DESC \"few matches\")\n\t(SYNONYM MATCH)\n\t(GENERIC DIASMBIGUATE-FCN)\n\t(ADJECTIVE ONE SINGLE)\n\t(SIZE 1)\n\t(ACTION TAKE-ONE-MATCH-FCN)>",
   "referencedBy": [
    "MATCH-MOVER",
    "DIASMBIGUATE-FCN",
    "I-MATCH-OUT",
    "DESCRIBE-OBJECT",
    "V-LAMP-ON",
    "PRE-BURN",
    "V-COUNT"
   ]
  },
  "SINGLE-MATCH": {
   "name": "SINGLE-MATCH",
   "file": "camp.zil",
   "line": 1013,
   "endLine": 1020,
   "desc": "single match",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "BURNBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "MATCH"
   ],
   "adjectives": [
    "ONE",
    "SINGLE"
   ],
   "action": "TAKE-ONE-MATCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "DIASMBIGUATE-FCN"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT SINGLE-MATCH\n\t(FLAGS TAKEBIT BURNBIT TRYTAKEBIT)\n\t(DESC \"single match\")\n\t(SYNONYM MATCH)\n\t(GENERIC DIASMBIGUATE-FCN)\n\t(ADJECTIVE ONE SINGLE)\n\t(SIZE 1)\n\t(ACTION TAKE-ONE-MATCH-FCN)>",
   "referencedBy": [
    "MATCH-MOVER",
    "DIASMBIGUATE-FCN",
    "V-LAMP-ON"
   ]
  },
  "ONE-MATCH": {
   "name": "ONE-MATCH",
   "file": "camp.zil",
   "line": 1022,
   "endLine": 1029,
   "desc": "match",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "BURNBIT"
   ],
   "synonyms": [
    "MATCH"
   ],
   "adjectives": [],
   "action": "DROP-ONE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "DIASMBIGUATE-FCN"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT ONE-MATCH\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS BURNBIT)\n\t(DESC \"match\")\n\t(GENERIC DIASMBIGUATE-FCN)\n\t(SYNONYM MATCH)\n\t(SIZE 1)\n\t(ACTION DROP-ONE-FCN)>",
   "referencedBy": [
    "LAST-MATCH-FCN",
    "DROP-ONE-FCN",
    "BUT-WHERE?",
    "TAKE-ONE-MATCH-FCN",
    "MATCH-MOVER",
    "BURN-FOO-FCN",
    "DIASMBIGUATE-FCN",
    "I-MATCH-OUT",
    "PRE-TAKE",
    "PRE-PUT",
    "V-LAMP-ON",
    "LIGHT-THE",
    "V-LAMP-OFF",
    "PRE-BURN"
   ]
  },
  "BURNED-MATCHBOOK": {
   "name": "BURNED-MATCHBOOK",
   "file": "camp.zil",
   "line": 1031,
   "endLine": 1036,
   "desc": "burned matchbook",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "CONTBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MATCHB"
   ],
   "adjectives": [
    "BURNED"
   ],
   "action": null,
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
   "source": "<OBJECT BURNED-MATCHBOOK\n\t(FLAGS CONTBIT TAKEBIT)\n\t(DESC \"burned matchbook\")\n\t(SYNONYM MATCHB)\n\t(ADJECTIVE BURNED)\n\t(CAPACITY 1)>",
   "referencedBy": [
    "LIGHT-THE"
   ]
  },
  "EMPTY-MATCHES": {
   "name": "EMPTY-MATCHES",
   "file": "camp.zil",
   "line": 1038,
   "endLine": 1045,
   "desc": "matchbook",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "BURNBIT",
    "READBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "MATCHB",
    "MATCHE"
   ],
   "adjectives": [
    "EMPTY"
   ],
   "action": "LAST-MATCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "GENERIC": [
     "DIASMBIGUATE-FCN"
    ],
    "CAPACITY": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT EMPTY-MATCHES\n\t(FLAGS CONTBIT OPENBIT BURNBIT READBIT TAKEBIT)\n\t(DESC \"matchbook\")\n\t(SYNONYM MATCHB MATCHE)\n\t(GENERIC DIASMBIGUATE-FCN)\n\t(ADJECTIVE EMPTY)\n\t(CAPACITY 1)\n\t(ACTION LAST-MATCH-FCN)>",
   "referencedBy": [
    "LAST-MATCH-FCN",
    "MATCH-MOVER",
    "DIASMBIGUATE-FCN",
    "V-LAMP-ON"
   ]
  },
  "MANUAL": {
   "name": "MANUAL",
   "file": "camp.zil",
   "line": 1156,
   "endLine": 1162,
   "desc": "manual",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "READBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "MANUAL",
    "COUPON"
   ],
   "adjectives": [
    "INSTRU"
   ],
   "action": "SEND-FOR-IT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MANUAL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"manual\")\n\t(FLAGS READBIT DONTTAKE)\n\t(ADJECTIVE INSTRU)\n\t(SYNONYM MANUAL COUPON)\n\t(ACTION SEND-FOR-IT-FCN)>",
   "referencedBy": [
    "LIGHT-THE",
    "V-FILL-OUT",
    "V-FILL-IN"
   ]
  },
  "BURNED-PACK": {
   "name": "BURNED-PACK",
   "file": "camp.zil",
   "line": 1210,
   "endLine": 1217,
   "desc": "burned wrapper",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "INVISIBLE",
    "TAKEBIT",
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "WRAPPE",
    "PACK"
   ],
   "adjectives": [
    "BURNED"
   ],
   "action": "HUH?",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "There's not much left to the outside of this package that's distinguishable."
    ]
   },
   "contents": [],
   "source": "<OBJECT BURNED-PACK\n\t(FLAGS INVISIBLE TAKEBIT READBIT NDESCBIT)\n\t(DESC \"burned wrapper\")\n\t(SYNONYM WRAPPE PACK)\n\t(ADJECTIVE BURNED)\n\t(TEXT\n\"There's not much left to the outside of this package that's distinguishable.\")\n\t(ACTION HUH?)>",
   "referencedBy": [
    "BURN-FOO-FCN"
   ]
  },
  "CIG-WRAPPER": {
   "name": "CIG-WRAPPER",
   "file": "camp.zil",
   "line": 1219,
   "endLine": 1231,
   "desc": "cigarette pack",
   "ldesc": null,
   "fdesc": "Half covered with sand is a bright piece of foil which catches your eye.",
   "loc": "FIRE",
   "flags": [
    "TAKEBIT",
    "READBIT",
    "BURNBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "PACK",
    "FOIL"
   ],
   "adjectives": [
    "CIGARE",
    "BRIGHT"
   ],
   "action": "BURN-FOO-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "It's an empty pack of Camel cigarettes."
    ],
    "SIZE": [
     "3"
    ],
    "CAPACITY": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT CIG-WRAPPER\n\t(IN FIRE)\n\t(FLAGS TAKEBIT READBIT BURNBIT CONTBIT OPENBIT)\n\t(DESC \"cigarette pack\")\n\t(FDESC\n\"Half covered with sand is a bright piece of foil which catches your eye.\")\n\t(SYNONYM PACK FOIL)\n\t(ADJECTIVE CIGARE BRIGHT)\n\t(TEXT\n\"It's an empty pack of Camel cigarettes.\")\n\t(SIZE 3)\n\t(CAPACITY 2)\n\t(ACTION BURN-FOO-FCN)>",
   "referencedBy": [
    "BURN-FOO-FCN"
   ]
  },
  "BROKEN-LOCK": {
   "name": "BROKEN-LOCK",
   "file": "camp.zil",
   "line": 1233,
   "endLine": 1241,
   "desc": "broken lock",
   "ldesc": null,
   "fdesc": null,
   "loc": "TENT",
   "flags": [
    "INVISIBLE",
    "TAKEBIT",
    "TRYTAKEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "LOCK",
    "PADLOC"
   ],
   "adjectives": [
    "BROKEN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "This is a slightly messed-up lock which once functioned. Alas, like your\npersonality, it has seen better days."
    ]
   },
   "contents": [],
   "source": "<OBJECT BROKEN-LOCK\n\t(IN TENT)\n\t(FLAGS INVISIBLE TAKEBIT TRYTAKEBIT NDESCBIT)\n\t(DESC \"broken lock\")\n\t(SYNONYM LOCK PADLOC)\n\t(ADJECTIVE BROKEN)\n\t(TEXT\n\"This is a slightly messed-up lock which once functioned. Alas, like your\npersonality, it has seen better days.\")>",
   "referencedBy": [
    "HEAVY?",
    "DESCRIBE-TRUNK-FCN",
    "TRUNK-FCN",
    "LOCK-FCN"
   ]
  },
  "TRUNK": {
   "name": "TRUNK",
   "file": "camp.zil",
   "line": 1243,
   "endLine": 1251,
   "desc": "trunk",
   "ldesc": null,
   "fdesc": null,
   "loc": "TENT",
   "flags": [
    "CONTBIT",
    "TRANSBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TRUNK"
   ],
   "adjectives": [
    "LARGE",
    "UNWIEL"
   ],
   "action": "TRUNK-FCN",
   "descfcn": "DESCRIBE-TRUNK-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "100"
    ]
   },
   "contents": [],
   "source": "<OBJECT TRUNK\n\t(IN TENT)\n\t(FLAGS CONTBIT TRANSBIT SURFACEBIT OPENBIT)\n\t(DESC \"trunk\")\n\t(DESCFCN DESCRIBE-TRUNK-FCN)\n\t(SYNONYM TRUNK)\n\t(ADJECTIVE LARGE UNWIEL)\n\t(CAPACITY 100)\n\t(ACTION TRUNK-FCN)>",
   "referencedBy": [
    "DESCRIBE-TRUNK-FCN",
    "TRUNK-FCN"
   ]
  },
  "LOCK": {
   "name": "LOCK",
   "file": "camp.zil",
   "line": 1307,
   "endLine": 1312,
   "desc": "padlock",
   "ldesc": null,
   "fdesc": null,
   "loc": "TENT",
   "flags": [
    "NDESCBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "PADLOC",
    "LOCK"
   ],
   "adjectives": [],
   "action": "LOCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LOCK\n\t(IN TENT)\n\t(DESC \"padlock\")\n\t(SYNONYM PADLOC LOCK)\n\t(FLAGS NDESCBIT CONTBIT)\n\t(ACTION LOCK-FCN)>",
   "referencedBy": [
    "TRUNK-FCN",
    "LOCK-FCN",
    "PRE-TAKE",
    "PRE-MUNG"
   ]
  },
  "PICK-AXE": {
   "name": "PICK-AXE",
   "file": "camp.zil",
   "line": 1340,
   "endLine": 1350,
   "desc": "pick axe",
   "ldesc": null,
   "fdesc": "Stuck in the sand, handle down, is a small pick axe.",
   "loc": "SUPPLY-TENT",
   "flags": [
    "TOOLBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "AXE",
    "PICKAX",
    "AX"
   ],
   "adjectives": [
    "PICK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "It's a small hand axe, similar to those used in mountain climbing."
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT PICK-AXE\n\t(IN SUPPLY-TENT)\n\t(FLAGS TOOLBIT TAKEBIT)\n\t(DESC \"pick axe\")\n\t(FDESC\n\"Stuck in the sand, handle down, is a small pick axe.\")\n\t(SYNONYM AXE PICKAX AX)\n\t(ADJECTIVE PICK)\n\t(TEXT\n\"It's a small hand axe, similar to those used in mountain climbing.\")\n\t(SIZE 10)>",
   "referencedBy": [
    "PLASTER1-FCN",
    "PLASTER-FCN",
    "HEAVY?",
    "LOCK-FCN",
    "CRATE-FCN",
    "PRE-DIG",
    "V-DIG",
    "BREAK-SEAL"
   ]
  },
  "STONE-KEY": {
   "name": "STONE-KEY",
   "file": "camp.zil",
   "line": 1352,
   "endLine": 1359,
   "desc": "stone cube",
   "ldesc": null,
   "fdesc": null,
   "loc": "MAP",
   "flags": [
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "CUBE"
   ],
   "adjectives": [
    "SMALL",
    "STONE"
   ],
   "action": "STONE-KEY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "MAP": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT STONE-KEY\n\t(IN MAP)\n\t(FLAGS TAKEBIT READBIT)\n\t(DESC \"stone cube\")\n\t(SYNONYM CUBE)\n\t(MAP 3)\n\t(ADJECTIVE SMALL STONE)\n\t(ACTION STONE-KEY-FCN)>",
   "referencedBy": [
    "HEAVY?",
    "STONE-KEY-FCN",
    "V-COMPARE"
   ]
  },
  "FOOD": {
   "name": "FOOD",
   "file": "camp.zil",
   "line": 1393,
   "endLine": 1398,
   "desc": "piece of dried beef",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "FOODBIT",
    "TAKEBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BEEF",
    "FOOD",
    "MEAT"
   ],
   "adjectives": [
    "DRIED",
    "PIECE"
   ],
   "action": "EDIBLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOOD\n\t(FLAGS FOODBIT TAKEBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"piece of dried beef\")\n\t(SYNONYM BEEF FOOD MEAT)\n\t(ADJECTIVE DRIED PIECE)\n\t(ACTION EDIBLE-FCN)>",
   "referencedBy": [
    "EDIBLE-FCN"
   ]
  },
  "MAP": {
   "name": "MAP",
   "file": "camp.zil",
   "line": 1407,
   "endLine": 1413,
   "desc": "ancient map",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "CONTBIT",
    "TAKEBIT",
    "VOWELBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "MAP"
   ],
   "adjectives": [
    "ANCIEN"
   ],
   "action": "MAP-FCN",
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
    "STONE-KEY"
   ],
   "source": "<OBJECT MAP\n\t(FLAGS CONTBIT TAKEBIT VOWELBIT BURNBIT)\n\t(DESC \"ancient map\")\n\t(SYNONYM MAP)\n\t(ADJECTIVE ANCIEN)\n\t(CAPACITY 5)\n\t(ACTION MAP-FCN)>",
   "referencedBy": [
    "MAP-FCN",
    "V-OPEN",
    "V-SMELL",
    "V-UNFOLD",
    "V-FOLD"
   ]
  },
  "SHOVEL": {
   "name": "SHOVEL",
   "file": "camp.zil",
   "line": 1437,
   "endLine": 1445,
   "desc": "shovel",
   "ldesc": null,
   "fdesc": "Half buried in the sand, in the corner of the tent, is a shovel.",
   "loc": "SUPPLY-TENT",
   "flags": [
    "TOOLBIT",
    "TAKEBIT"
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
    "TEXT": [
     "It's a standard-issue garden shovel."
    ]
   },
   "contents": [],
   "source": "<OBJECT SHOVEL\n\t(IN SUPPLY-TENT)\n\t(FLAGS TOOLBIT TAKEBIT)\n\t(DESC \"shovel\")\n\t(FDESC\n\"Half buried in the sand, in the corner of the tent, is a shovel.\")\n\t(TEXT\n\"It's a standard-issue garden shovel.\")\n\t(SYNONYM SHOVEL)>",
   "referencedBy": [
    "PLASTER1-FCN",
    "PLASTER-FCN",
    "HEAVY?",
    "LOCK-FCN",
    "WEAR-THE-SACK",
    "CRATE-FCN",
    "PRE-TAKE",
    "PRE-DIG"
   ]
  },
  "ROPE": {
   "name": "ROPE",
   "file": "camp.zil",
   "line": 1447,
   "endLine": 1459,
   "desc": "rope",
   "ldesc": null,
   "fdesc": null,
   "loc": "KNAPSACK",
   "flags": [
    "TAKEBIT",
    "CLIMBBIT",
    "BURNBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "ROPE",
    "COIL",
    "ASP"
   ],
   "adjectives": [
    "BUNCH"
   ],
   "action": "ROPE-FCN",
   "descfcn": "DESCRIBE-ROPE-FCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "4"
    ],
    "TEXT": [
     "This rope is made of the finest Manila hemp and guaranteed to hold at least\n250 pounds of weight. There's about thirty feet of it. Be glad the workers\ndidn't hang you with it."
    ]
   },
   "contents": [],
   "source": "<OBJECT ROPE\n\t(IN KNAPSACK)\n\t(DESC \"rope\")\n\t(FLAGS TAKEBIT CLIMBBIT BURNBIT TOUCHBIT)\n\t(SYNONYM ROPE COIL ASP)\n\t(SIZE 4)\n\t(ADJECTIVE BUNCH)\n\t(TEXT\n\"This rope is made of the finest Manila hemp and guaranteed to hold at least\n250 pounds of weight. There's about thirty feet of it. Be glad the workers\ndidn't hang you with it.\")\n\t(ACTION ROPE-FCN)\n\t(DESCFCN DESCRIBE-ROPE-FCN)>",
   "referencedBy": [
    "HEAVY?",
    "ROPE-FCN",
    "MOVE-PANEL-HERE",
    "LOOK-DOWN-HALLS",
    "CIRCULAR-ROOM-FCN",
    "TELL-STAIRS-FCN",
    "RE-ENABLE-FCN",
    "MOVE-ROPE-RA",
    "RA-STAIRS-FCN",
    "FEW-STEPS-FCN",
    "MOVE-ROPE-HERE",
    "DESCRIBE-OBJECT",
    "STAIRWAY-CHECK?",
    "V-BURN",
    "V-CLIMB-ON",
    "V-CLIMB-FOO",
    "V-CLIMB-DOWN",
    "V-THROW-DOWN",
    "V-JUMP-ROPE"
   ]
  },
  "NOTE": {
   "name": "NOTE",
   "file": "camp.zil",
   "line": 1551,
   "endLine": 1573,
   "desc": "farewell note",
   "ldesc": null,
   "fdesc": "Tacked up to the inside of one of the tent flaps is a note.",
   "loc": "TENT2",
   "flags": [
    "READBIT",
    "BURNBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "NOTE"
   ],
   "adjectives": [
    "FAREWE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The note reads:|\n|\nFi aman Allah!|\n|\nHereafter you shall pursue your fool dream of the hidden pyramid and its riches\nalone. May the jackals feed well on your bones. We have left you what you need\nto get back, though we hope you do not. We put several things you treasure\nabove life itself inside your trunk, locked with your precious padlock, but we\ncould not bear to part with the key. Especially after what you said of our\nrites. We hope the drug we placed in your drink did you harm. If not, we are at\nleast satisfied you slept especially soundly while we cleaned out the camp.|\n|\nFarewell"
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT NOTE\n\t(IN TENT2)\n\t(FLAGS READBIT BURNBIT TAKEBIT)\n\t(DESC \"farewell note\")\n\t(FDESC\n\"Tacked up to the inside of one of the tent flaps is a note.\")\n\t(TEXT\n\"The note reads:|\n|\nFi aman Allah!|\n|\nHereafter you shall pursue your fool dream of the hidden pyramid and its riches\nalone. May the jackals feed well on your bones. We have left you what you need\nto get back, though we hope you do not. We put several things you treasure\nabove life itself inside your trunk, locked with your precious padlock, but we\ncould not bear to part with the key. Especially after what you said of our\nrites. We hope the drug we placed in your drink did you harm. If not, we are at\nleast satisfied you slept especially soundly while we cleaned out the camp.|\n|\nFarewell\")\n\t(SYNONYM NOTE)\n\t(ADJECTIVE FAREWE)\n\t(SIZE 1)>",
   "referencedBy": []
  },
  "GLOBAL-WATER": {
   "name": "GLOBAL-WATER",
   "file": "camp.zil",
   "line": 1575,
   "endLine": 1580,
   "desc": "quantity of water",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DRINKBIT",
    "NDESCBIT"
   ],
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
   "source": "<OBJECT GLOBAL-WATER\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS DRINKBIT NDESCBIT)\n\t(DESC \"quantity of water\")\n\t(SYNONYM WATER)\n\t>",
   "referencedBy": [
    "CANTEEN-FCN",
    "WEAR-THE-SACK",
    "PRE-FILL",
    "V-FILL",
    "V-DRINK-FROM",
    "V-DIP-IN"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "camp.zil",
   "line": 1582,
   "endLine": 1587,
   "desc": "quantity of water",
   "ldesc": null,
   "fdesc": null,
   "loc": "CANTEEN",
   "flags": [
    "DRINKBIT"
   ],
   "synonyms": [
    "WATER"
   ],
   "adjectives": [],
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
   "source": "<OBJECT WATER\n\t(IN CANTEEN)\n\t(FLAGS DRINKBIT)\n\t(DESC \"quantity of water\")\n\t(SYNONYM WATER)\n\t(SIZE 3)>",
   "referencedBy": [
    "CANTEEN-FCN",
    "WEAR-THE-SACK",
    "SIP-FCN",
    "GO",
    "CUP-FCN",
    "V-POUR",
    "V-POUR-IN",
    "PRE-POUR-ON",
    "V-FILL",
    "V-DRINK-FROM"
   ]
  },
  "CANTEEN": {
   "name": "CANTEEN",
   "file": "camp.zil",
   "line": 1589,
   "endLine": 1597,
   "desc": "canteen",
   "ldesc": null,
   "fdesc": null,
   "loc": "KNAPSACK",
   "flags": [
    "CONTBIT",
    "TAKEBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "CANTEE"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "CANTEEN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ],
    "SIZE": [
     "6"
    ]
   },
   "contents": [
    "WATER"
   ],
   "source": "<OBJECT CANTEEN\n\t(IN KNAPSACK)\n\t(FLAGS CONTBIT TAKEBIT TOUCHBIT)\n\t(DESC \"canteen\")\n\t(SYNONYM CANTEE)\n\t(ADJECTIVE SMALL)\n\t(CAPACITY 5)\n\t(SIZE 6)\n\t(ACTION CANTEEN-FCN)>",
   "referencedBy": [
    "CANTEEN-FCN",
    "V-FILL",
    "V-DRINK-FROM",
    "V-DIP-IN"
   ]
  },
  "SMALL-SLIP": {
   "name": "SMALL-SLIP",
   "file": "camp.zil",
   "line": 1657,
   "endLine": 1668,
   "desc": "inspection sticker",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "STICKE"
   ],
   "adjectives": [
    "INSPEC"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The small inspection sticker says:\n|\nThis trunk inspected by numbers 8 and 6.5. This reality was manufactured by\ntiny elves from the Bozbar Pyramid Construction Company, a jointly-owned\nsubsidiary of the FrobozzCo Magic Village Industries, Michael Berlyn and\nPatricia Fogleman, Chief Engineers."
    ]
   },
   "contents": [],
   "source": "<OBJECT SMALL-SLIP\n\t(FLAGS READBIT TAKEBIT BURNBIT VOWELBIT)\n\t(DESC \"inspection sticker\")\n\t(TEXT\n\"The small inspection sticker says:\n|\nThis trunk inspected by numbers 8 and 6.5. This reality was manufactured by\ntiny elves from the Bozbar Pyramid Construction Company, a jointly-owned\nsubsidiary of the FrobozzCo Magic Village Industries, Michael Berlyn and\nPatricia Fogleman, Chief Engineers.\")\n\t(SYNONYM STICKE)\n\t(ADJECTIVE INSPEC)>",
   "referencedBy": []
  },
  "MIRAGES": {
   "name": "MIRAGES",
   "file": "camp.zil",
   "line": 1682,
   "endLine": 1688,
   "desc": "mirage",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "GORT",
    "KLAATU",
    "FISH",
    "BUFFAL"
   ],
   "adjectives": [
    "LIZARD",
    "MAIDS",
    "SNAIL",
    "GYROCO"
   ],
   "action": "MIRAGES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MIRAGES\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"mirage\")\n\t(FLAGS NDESCBIT)\n\t(SYNONYM GORT KLAATU FISH BUFFAL)\n\t(ADJECTIVE LIZARD MAIDS SNAIL GYROCO)\n\t(ACTION MIRAGES-F)>",
   "referencedBy": []
  },
  "C-SAND": {
   "name": "C-SAND",
   "file": "camp.zil",
   "line": 1924,
   "endLine": 1927,
   "desc": "quantity of sand",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SAND"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT C-SAND\n\t(FLAGS NDESCBIT)\n\t(DESC \"quantity of sand\")\n\t(SYNONYM SAND)>",
   "referencedBy": [
    "CANTEEN-FCN",
    "V-POUR",
    "V-POUR-IN",
    "PRE-POUR-ON",
    "V-FILL"
   ]
  },
  "KNAPSACK": {
   "name": "KNAPSACK",
   "file": "camp.zil",
   "line": 1929,
   "endLine": 1939,
   "desc": "knapsack",
   "ldesc": null,
   "fdesc": "Sitting in the sand, bulging a little, is a beaten-up knapsack.",
   "loc": "TENT2",
   "flags": [
    "TRYTAKEBIT",
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SACK",
    "KNAPSA"
   ],
   "adjectives": [
    "KNAP"
   ],
   "action": "WEAR-THE-SACK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "5"
    ],
    "CAPACITY": [
     "60"
    ]
   },
   "contents": [
    "ROPE",
    "CANTEEN"
   ],
   "source": "<OBJECT KNAPSACK\n\t(IN TENT2)\n\t(DESC \"knapsack\")\n\t(FLAGS TRYTAKEBIT TAKEBIT CONTBIT SEARCHBIT)\n\t(SIZE 5)\n\t(CAPACITY 60)\n\t(SYNONYM SACK KNAPSA)\n\t(ADJECTIVE KNAP)\n\t(FDESC\n\"Sitting in the sand, bulging a little, is a beaten-up knapsack.\")\n\t(ACTION WEAR-THE-SACK)>",
   "referencedBy": [
    "HEAVY?",
    "ENTER-PYRAMID-FCN",
    "WEAR-THE-SACK",
    "CRATE-FCN",
    "PRE-TAKE"
   ]
  },
  "CRATE": {
   "name": "CRATE",
   "file": "camp.zil",
   "line": 2089,
   "endLine": 2100,
   "desc": "packing crate",
   "ldesc": null,
   "fdesc": "Lying in the sand is a wooden packing crate.",
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "CONTBIT",
    "TRANSBIT",
    "TAKEBIT",
    "BURNBIT",
    "SEARCHBIT",
    "READBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "CRATE",
    "LABEL"
   ],
   "adjectives": [
    "PACKIN"
   ],
   "action": "CRATE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT CRATE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"packing crate\")\n\t(FLAGS CONTBIT TRANSBIT TAKEBIT BURNBIT SEARCHBIT READBIT SURFACEBIT\n\t       OPENBIT)\n\t(CAPACITY 10)\n\t(SIZE 10)\n\t(SYNONYM CRATE LABEL)\n\t(ADJECTIVE PACKIN)\n\t(FDESC\n\"Lying in the sand is a wooden packing crate.\")\n\t(ACTION CRATE-FCN)>",
   "referencedBy": [
    "HEAVY?",
    "WEAR-THE-SACK",
    "CRATE-FCN",
    "I-PARACHUTE",
    "V-BOARD",
    "PRE-MUNG",
    "V-STAND-UNDER",
    "V-SIT-ON"
   ]
  },
  "BLACK-BOX": {
   "name": "BLACK-BOX",
   "file": "camp.zil",
   "line": 2193,
   "endLine": 2203,
   "desc": "navigation box",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "BOX"
   ],
   "adjectives": [
    "NAVIGA",
    "BLACK"
   ],
   "action": "BOX-OPENER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "10"
    ],
    "TEXT": [
     "This is an expensive, state-of-the-art piece of electronic equipment. It was\ndesigned to automatically determine longitude and latitude when the button on\nit is pressed. Thankfully, it has at last arrived."
    ]
   },
   "contents": [
    "BUTTON"
   ],
   "source": "<OBJECT BLACK-BOX\n\t(FLAGS TAKEBIT TRYTAKEBIT CONTBIT OPENBIT SURFACEBIT)\n\t(DESC \"navigation box\")\n\t(SYNONYM BOX)\n\t(ADJECTIVE NAVIGA BLACK)\n\t(CAPACITY 10)\n\t(TEXT\n\"This is an expensive, state-of-the-art piece of electronic equipment. It was\ndesigned to automatically determine longitude and latitude when the button on\nit is pressed. Thankfully, it has at last arrived.\")\n\t(ACTION BOX-OPENER-FCN)>",
   "referencedBy": [
    "HEAVY?",
    "CRATE-FCN",
    "BOX-OPENER-FCN",
    "PRESS-BUTTON-FCN",
    "PRE-MUNG"
   ]
  },
  "BUTTON": {
   "name": "BUTTON",
   "file": "camp.zil",
   "line": 2230,
   "endLine": 2236,
   "desc": "button",
   "ldesc": null,
   "fdesc": null,
   "loc": "BLACK-BOX",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BUTTON"
   ],
   "adjectives": [
    "NAVIGA"
   ],
   "action": "PRESS-BUTTON-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BUTTON\n\t(IN BLACK-BOX)\n\t(FLAGS NDESCBIT)\n\t(DESC \"button\")\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE NAVIGA)\n\t(ACTION PRESS-BUTTON-FCN)>",
   "referencedBy": [
    "BOX-OPENER-FCN"
   ]
  },
  "PUNCH-PANEL": {
   "name": "PUNCH-PANEL",
   "file": "cube.zil",
   "line": 160,
   "endLine": 167,
   "desc": "recessed panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "SOUTH-CENTER",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "CONTBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "PANEL"
   ],
   "adjectives": [
    "RECESS"
   ],
   "action": "PUNCH-PANEL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "45"
    ]
   },
   "contents": [
    "BRICK-ONE",
    "BRICK-NINE",
    "BRICK-EIGHT",
    "BRICK-SEVEN",
    "BRICK-SIX",
    "BRICK-FIVE",
    "BRICK-FOUR",
    "BRICK-THREE",
    "BRICK-TWO"
   ],
   "source": "<OBJECT PUNCH-PANEL\n\t(IN SOUTH-CENTER)\n\t(DESC \"recessed panel\")\n\t(FLAGS NDESCBIT OPENBIT CONTBIT DONTTAKE)\n\t(SYNONYM PANEL)\n\t(ADJECTIVE RECESS)\n\t(CAPACITY 45)\n\t(ACTION PUNCH-PANEL-FCN)>",
   "referencedBy": [
    "SOUTH-CENTER-F",
    "PUNCH-PANEL-FCN",
    "TAKE-BRICK-FCN",
    "V-PUT"
   ]
  },
  "BRICK-ONE": {
   "name": "BRICK-ONE",
   "file": "cube.zil",
   "line": 253,
   "endLine": 262,
   "desc": "first brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "FIRST"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "BRICK": [
     "1"
    ],
    "TEXT": [
     "<.>"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-ONE\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"first brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE FIRST)\n\t(BRICK 1)\n\t(TEXT\n\"<.>\")\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN",
    "TAKE-BRICK-FCN"
   ]
  },
  "BRICK-NINE": {
   "name": "BRICK-NINE",
   "file": "cube.zil",
   "line": 264,
   "endLine": 273,
   "desc": "ninth brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "NINTH"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<::::.>"
    ],
    "BRICK": [
     "9"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-NINE\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"ninth brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE NINTH)\n\t(TEXT\n\"<::::.>\")\n\t(BRICK 9)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN"
   ]
  },
  "BRICK-EIGHT": {
   "name": "BRICK-EIGHT",
   "file": "cube.zil",
   "line": 275,
   "endLine": 284,
   "desc": "eighth brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "VOWELBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "EIGHTH"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<::::>"
    ],
    "BRICK": [
     "8"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-EIGHT\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT VOWELBIT TRYTAKEBIT)\n\t(DESC \"eighth brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE EIGHTH)\n\t(TEXT\n\"<::::>\")\n\t(BRICK 8)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN"
   ]
  },
  "BRICK-SEVEN": {
   "name": "BRICK-SEVEN",
   "file": "cube.zil",
   "line": 286,
   "endLine": 295,
   "desc": "seventh brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "SEVENTH"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<:::.>"
    ],
    "BRICK": [
     "7"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-SEVEN\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"seventh brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE SEVENTH)\n\t(TEXT\n\"<:::.>\")\n\t(BRICK 7)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN"
   ]
  },
  "BRICK-SIX": {
   "name": "BRICK-SIX",
   "file": "cube.zil",
   "line": 297,
   "endLine": 306,
   "desc": "sixth brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "SIXTH"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<:::>"
    ],
    "BRICK": [
     "6"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-SIX\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"sixth brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE SIXTH)\n\t(TEXT\n\"<:::>\")\n\t(BRICK 6)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN"
   ]
  },
  "BRICK-FIVE": {
   "name": "BRICK-FIVE",
   "file": "cube.zil",
   "line": 308,
   "endLine": 317,
   "desc": "fifth brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "FIFTH"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<::.>"
    ],
    "BRICK": [
     "5"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-FIVE\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"fifth brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE FIFTH)\n\t(TEXT\n\"<::.>\")\n\t(BRICK 5)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN",
    "TAKE-BRICK-FCN"
   ]
  },
  "BRICK-FOUR": {
   "name": "BRICK-FOUR",
   "file": "cube.zil",
   "line": 319,
   "endLine": 328,
   "desc": "fourth brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "FOURTH"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<::>"
    ],
    "BRICK": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-FOUR\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"fourth brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE FOURTH)\n\t(TEXT\n\"<::>\")\n\t(BRICK 4)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN"
   ]
  },
  "BRICK-THREE": {
   "name": "BRICK-THREE",
   "file": "cube.zil",
   "line": 330,
   "endLine": 339,
   "desc": "third brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "THIRD"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<:.>"
    ],
    "BRICK": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-THREE\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"third brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE THIRD)\n\t(TEXT\n\"<:.>\")\n\t(BRICK 3)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN",
    "TAKE-BRICK-FCN"
   ]
  },
  "BRICK-TWO": {
   "name": "BRICK-TWO",
   "file": "cube.zil",
   "line": 341,
   "endLine": 350,
   "desc": "second brick",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUNCH-PANEL",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TOUCHBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "SECOND"
   ],
   "action": "TAKE-BRICK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "<:>"
    ],
    "BRICK": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT BRICK-TWO\n\t(IN PUNCH-PANEL)\n\t(FLAGS TAKEBIT NDESCBIT TOUCHBIT TRYTAKEBIT)\n\t(DESC \"second brick\")\n\t(SYNONYM BRICK BRICKS)\n\t(ADJECTIVE SECOND)\n\t(TEXT\n\"<:>\")\n\t(BRICK 2)\n\t(ACTION TAKE-BRICK-FCN)>",
   "referencedBy": [
    "PUNCH-PANEL-FCN"
   ]
  },
  "NEPHTH-JEWEL": {
   "name": "NEPHTH-JEWEL",
   "file": "diamond.zil",
   "line": 24,
   "endLine": 35,
   "desc": "diamond cluster",
   "ldesc": null,
   "fdesc": "A large diamond cluster, glittering in your light, sits on the floor directly\nunder the hieroglyphs.",
   "loc": "ROOM-OF-NEPHTHYS",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CLUSTE"
   ],
   "adjectives": [
    "DIAMON"
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
    "SIZE": [
     "2"
    ],
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEPHTH-JEWEL\n\t(IN ROOM-OF-NEPHTHYS)\n\t(FLAGS TAKEBIT)\n\t(DESC \"diamond cluster\")\n\t(VALUE 5)\n\t(SIZE 2)\n\t(FDESC\n\"A large diamond cluster, glittering in your light, sits on the floor directly\nunder the hieroglyphs.\")\n\t(SYNONYM CLUSTE)\n\t(MAP 2)\n\t(ADJECTIVE DIAMON)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "HERRING-JEWEL": {
   "name": "HERRING-JEWEL",
   "file": "diamond.zil",
   "line": 37,
   "endLine": 46,
   "desc": "golden cluster",
   "ldesc": null,
   "fdesc": "A large golden cluster sits on the floor.",
   "loc": "LANDING-ZERO",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CLUSTE"
   ],
   "adjectives": [
    "GOLDEN",
    "GOLD"
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
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT HERRING-JEWEL\n\t(IN LANDING-ZERO)\n\t(FLAGS TAKEBIT)\n\t(DESC \"golden cluster\")\n\t(SIZE 2)\n\t(FDESC\n\"A large golden cluster sits on the floor.\")\n\t(SYNONYM CLUSTE)\n\t(MAP 2)\n\t(ADJECTIVE GOLDEN GOLD)>",
   "referencedBy": []
  },
  "SELKIS-JEWEL": {
   "name": "SELKIS-JEWEL",
   "file": "diamond.zil",
   "line": 48,
   "endLine": 58,
   "desc": "ruby cluster",
   "ldesc": null,
   "fdesc": "A beautiful ruby cluster, sparkling like fire, sits on the floor.",
   "loc": "ROOM-OF-SELKIS",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CLUSTE"
   ],
   "adjectives": [
    "RUBY"
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
    "SIZE": [
     "2"
    ],
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT SELKIS-JEWEL\n\t(IN ROOM-OF-SELKIS)\n\t(FLAGS TAKEBIT)\n\t(VALUE 5)\n\t(SIZE 2)\n\t(DESC \"ruby cluster\")\n\t(FDESC\n\"A beautiful ruby cluster, sparkling like fire, sits on the floor.\")\n\t(MAP 2)\n\t(SYNONYM CLUSTE)\n\t(ADJECTIVE RUBY)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "ISIS-JEWEL": {
   "name": "ISIS-JEWEL",
   "file": "diamond.zil",
   "line": 60,
   "endLine": 70,
   "desc": "emerald cluster",
   "ldesc": null,
   "fdesc": "Lying on the ground is a brilliant, glowing emerald cluster.",
   "loc": "ROOM-OF-ISIS",
   "flags": [
    "TAKEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "CLUSTE"
   ],
   "adjectives": [
    "EMERAL"
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
    "SIZE": [
     "2"
    ],
    "MAP": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT ISIS-JEWEL\n\t(IN ROOM-OF-ISIS)\n\t(FLAGS TAKEBIT VOWELBIT)\n\t(VALUE 5)\n\t(SIZE 2)\n\t(DESC \"emerald cluster\")\n\t(FDESC\n\"Lying on the ground is a brilliant, glowing emerald cluster.\")\n\t(MAP 2)\n\t(SYNONYM CLUSTE)\n\t(ADJECTIVE EMERAL)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "NEITH-JEWEL": {
   "name": "NEITH-JEWEL",
   "file": "diamond.zil",
   "line": 72,
   "endLine": 83,
   "desc": "opal cluster",
   "ldesc": null,
   "fdesc": "An opal cluster, glistening with the light of a thousand fires, lies on the\nfloor.",
   "loc": "ROOM-OF-NEITH",
   "flags": [
    "TAKEBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "CLUSTE"
   ],
   "adjectives": [
    "OPAL"
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
    "MAP": [
     "2"
    ],
    "SIZE": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT NEITH-JEWEL\n\t(IN ROOM-OF-NEITH)\n\t(FLAGS TAKEBIT VOWELBIT)\n\t(DESC \"opal cluster\")\n\t(FDESC\n\"An opal cluster, glistening with the light of a thousand fires, lies on the\nfloor.\")\n\t(SYNONYM CLUSTE)\n\t(ADJECTIVE OPAL)\n\t(VALUE 5)\n\t(MAP 2)\n\t(SIZE 2)>",
   "referencedBy": [
    "OPEN-SLAB-FCN",
    "DIAMOND-HOLE-FCN"
   ]
  },
  "TWINKLERS": {
   "name": "TWINKLERS",
   "file": "diamond.zil",
   "line": 102,
   "endLine": 109,
   "desc": "quartz",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOM-OF-ISIS",
   "flags": [
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "LIGHTS",
    "QUARTZ",
    "CHIPS",
    "PATTER"
   ],
   "adjectives": [
    "THOUSA",
    "TINY"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "They twinkle in the light, making beautiful patterns."
    ]
   },
   "contents": [],
   "source": "<OBJECT TWINKLERS\n\t(IN ROOM-OF-ISIS)\n\t(FLAGS NDESCBIT DONTTAKE)\n\t(DESC \"quartz\")\n\t(SYNONYM LIGHTS QUARTZ CHIPS PATTER)\n\t(ADJECTIVE THOUSA TINY)\n\t(TEXT\n\"They twinkle in the light, making beautiful patterns.\")>",
   "referencedBy": []
  },
  "GEMS": {
   "name": "GEMS",
   "file": "diamond.zil",
   "line": 146,
   "endLine": 154,
   "desc": "gem",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LAZULI",
    "OBSIDI",
    "JASPER",
    "GEMS"
   ],
   "adjectives": [
    "LAPIS",
    "RED",
    "INKY-",
    "BLUE",
    "JET-B"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The gems are quite remarkable, forming a delicate piece of art. To remove\nany of them would be beyond thinking. Even for you."
    ]
   },
   "contents": [],
   "source": "<OBJECT GEMS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"gem\")\n\t(FLAGS NDESCBIT)\n\t(SYNONYM LAZULI OBSIDI JASPER GEMS)\n\t(ADJECTIVE LAPIS RED INKY- BLUE JET-B)\n\t(TEXT\n\"The gems are quite remarkable, forming a delicate piece of art. To remove\nany of them would be beyond thinking. Even for you.\")>",
   "referencedBy": []
  },
  "GEMS-2": {
   "name": "GEMS-2",
   "file": "diamond.zil",
   "line": 156,
   "endLine": 164,
   "desc": "tile",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CARNEL",
    "FELDSP",
    "GEMS",
    "TILES"
   ],
   "adjectives": [
    "RED",
    "YELLOW",
    "BLUE",
    "GREEN",
    "BRIGHT"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "They are quite remarkable, forming a delicate piece of art. To remove\nany of them would be beyond thinking. Even for you."
    ]
   },
   "contents": [],
   "source": "<OBJECT GEMS-2 \n\t(IN LOCAL-GLOBALS)\n\t(DESC \"tile\")\n\t(FLAGS NDESCBIT)\n\t(SYNONYM CARNEL FELDSP GEMS TILES)\n\t(ADJECTIVE RED YELLOW BLUE GREEN BRIGHT)\n\t(TEXT\n\"They are quite remarkable, forming a delicate piece of art. To remove\nany of them would be beyond thinking. Even for you.\")> ",
   "referencedBy": []
  },
  "HUGE-STATUE": {
   "name": "HUGE-STATUE",
   "file": "diamond.zil",
   "line": 225,
   "endLine": 239,
   "desc": "large statue",
   "ldesc": null,
   "fdesc": "Sitting in the middle of the floor is a large statue, about two feet shorter\nthan you. It reminds you a little of Miss Ellingsworth.",
   "loc": "LANDING-ZERO",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "STATUE"
   ],
   "adjectives": [
    "HUGE"
   ],
   "action": "HUGE-STATUE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "281"
    ],
    "TEXT": [
     "It is carved out of dark gray basalt and its features resemble a woman at the\nheight of her beauty, most probably the ancient Queen. The statue itself must\nweigh more than you do."
    ]
   },
   "contents": [
    "HEAD"
   ],
   "source": "<OBJECT HUGE-STATUE\n\t(IN LANDING-ZERO)\n\t(DESC \"large statue\")\n\t(FDESC\n\"Sitting in the middle of the floor is a large statue, about two feet shorter\nthan you. It reminds you a little of Miss Ellingsworth.\")\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(SIZE 281)\n\t(SYNONYM STATUE)\n\t(ADJECTIVE HUGE)\n\t(ACTION HUGE-STATUE-FCN)\n\t(TEXT\n\"It is carved out of dark gray basalt and its features resemble a woman at the\nheight of her beauty, most probably the ancient Queen. The statue itself must\nweigh more than you do.\")>",
   "referencedBy": [
    "HUGE-STATUE-FCN",
    "V-PUSH-TO",
    "PRE-MUNG",
    "V-ROLL"
   ]
  },
  "HEAD": {
   "name": "HEAD",
   "file": "diamond.zil",
   "line": 241,
   "endLine": 250,
   "desc": "broken head",
   "ldesc": null,
   "fdesc": null,
   "loc": "HUGE-STATUE",
   "flags": [
    "INVISIBLE",
    "TAKEBIT"
   ],
   "synonyms": [
    "HEAD"
   ],
   "adjectives": [
    "BROKEN"
   ],
   "action": "HEAD-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "20"
    ],
    "TEXT": [
     "This head was once part of the magnificent statue of the Queen."
    ]
   },
   "contents": [],
   "source": "<OBJECT HEAD\n\t(IN HUGE-STATUE)\n\t(FLAGS INVISIBLE TAKEBIT)\n\t(DESC \"broken head\")\n\t(SYNONYM HEAD)\n\t(SIZE 20)\n\t(ADJECTIVE BROKEN)\n\t(TEXT\n\"This head was once part of the magnificent statue of the Queen.\")\n\t(ACTION HEAD-FCN)>",
   "referencedBy": [
    "HUGE-STATUE-FCN",
    "PRE-MUNG"
   ]
  },
  "NEPHTH-DOOR": {
   "name": "NEPHTH-DOOR",
   "file": "diamond.zil",
   "line": 311,
   "endLine": 317,
   "desc": "stone door",
   "ldesc": null,
   "fdesc": null,
   "loc": "A-PRIME",
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "STONE"
   ],
   "action": "STONE-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NEPHTH-DOOR\n\t(IN A-PRIME)\n\t(FLAGS DOORBIT NDESCBIT)\n\t(DESC \"stone door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE STONE)\n\t(ACTION STONE-DOOR-FCN)>",
   "referencedBy": [
    "CIRCULAR-ROOM-FCN",
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "SELKIS-DOOR": {
   "name": "SELKIS-DOOR",
   "file": "diamond.zil",
   "line": 337,
   "endLine": 342,
   "desc": "stone door",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "STONE"
   ],
   "action": "STONE-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SELKIS-DOOR\n\t(FLAGS DOORBIT NDESCBIT)\n\t(DESC \"stone door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE STONE)\n\t(ACTION STONE-DOOR-FCN)>",
   "referencedBy": [
    "CIRCULAR-ROOM-FCN",
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "ISIS-DOOR": {
   "name": "ISIS-DOOR",
   "file": "diamond.zil",
   "line": 357,
   "endLine": 362,
   "desc": "stone door",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "STONE"
   ],
   "action": "STONE-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ISIS-DOOR\n\t(FLAGS DOORBIT NDESCBIT)\n\t(DESC \"stone door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE STONE)\n\t(ACTION STONE-DOOR-FCN)>",
   "referencedBy": [
    "CIRCULAR-ROOM-FCN",
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "NEITH-DOOR": {
   "name": "NEITH-DOOR",
   "file": "diamond.zil",
   "line": 377,
   "endLine": 382,
   "desc": "stone door",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "DOORBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "DOOR"
   ],
   "adjectives": [
    "STONE"
   ],
   "action": "STONE-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NEITH-DOOR\n\t(FLAGS DOORBIT NDESCBIT)\n\t(DESC \"stone door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE STONE)\n\t(ACTION STONE-DOOR-FCN)>",
   "referencedBy": [
    "CIRCULAR-ROOM-FCN",
    "CLOSE-DEM-DOOAHS"
   ]
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "globals.zil",
   "line": 10,
   "endLine": 12,
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
    "VOWELBIT",
    "OPENBIT",
    "SEARCHBIT",
    "TRANSBIT",
    "WEARBIT",
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
   "contents": [
    "ONE-MATCH",
    "MANUAL",
    "CRATE",
    "LOCAL-GLOBALS",
    "BASIE",
    "PETROL",
    "FOO-TOOL",
    "DRACULA",
    "FINGER",
    "BLESSINGS",
    "INTNUM",
    "INTDIR",
    "IT",
    "AIR",
    "GROUND",
    "CRACK",
    "PEN-PENCIL",
    "STONES",
    "BULKHEADS",
    "WALLS",
    "CEILING",
    "HANDS",
    "ME",
    "PARACHUTE",
    "PLANE",
    "SIP",
    "THICKET",
    "LINE"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS RMUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT\n\t       VOWELBIT OPENBIT SEARCHBIT TRANSBIT WEARBIT ONBIT)>",
   "referencedBy": [
    "DROP-ONE-FCN",
    "TAKE-ONE-MATCH-FCN",
    "CRATE-FCN",
    "I-MATCH-OUT",
    "GLOBAL-CHECK",
    "PRE-PUT",
    "V-EAT",
    "PRE-PUSH-TO",
    "HACK-HACK",
    "V-FIND",
    "V-STAND-UNDER"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "globals.zil",
   "line": 14,
   "endLine": 21,
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
    "FOOBAR",
    "V-WAIT"
   ],
   "otherProps": {
    "SIZE": [
     "0"
    ]
   },
   "contents": [
    "PIT",
    "NORTH-ANTE-DOOR",
    "ANNEX-DOOR",
    "THICKETS",
    "TENT-OBJ",
    "GLOBAL-WATER",
    "MIRAGES",
    "GEMS",
    "GEMS-2",
    "SAND",
    "HOLE",
    "DOORWAY",
    "PICTURE-PANELS",
    "STAIRS",
    "HIEROGLYPHS",
    "PICTURES",
    "PILLARS",
    "BOAT",
    "DECK",
    "FLAPS",
    "NORTH-STAIRS",
    "EAST-STAIRS",
    "SOUTH-STAIRS",
    "WEST-STAIRS",
    "FEW-STEPS",
    "GOLD-LEAF"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK)\n\t(DESCFCN 0)\n        (GLOBAL GLOBAL-OBJECTS)\n\t(PSEUDO \"FOOBAR\" V-WAIT)\n\t(CONTFCN 0)\n\t(SIZE 0)>",
   "referencedBy": [
    "MOBY-FIND",
    "V-EAT",
    "PRE-PUSH-TO"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "globals.zil",
   "line": 24,
   "endLine": 24,
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
    "GLOBAL-CHECK",
    "DESCRIBE-ROOM",
    "FIRSTER",
    "V-AGAIN"
   ]
  },
  "BASIE": {
   "name": "BASIE",
   "file": "globals.zil",
   "line": 26,
   "endLine": 29,
   "desc": "Basie",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "BASIE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BASIE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM BASIE)\n\t(DESC \"Basie\")>",
   "referencedBy": [
    "V-COUNT"
   ]
  },
  "PETROL": {
   "name": "PETROL",
   "file": "globals.zil",
   "line": 31,
   "endLine": 34,
   "desc": "gasoline",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GASOLI",
    "PETROL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PETROL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM GASOLI PETROL)\n\t(DESC \"gasoline\")>",
   "referencedBy": []
  },
  "FOO-TOOL": {
   "name": "FOO-TOOL",
   "file": "globals.zil",
   "line": 36,
   "endLine": 39,
   "desc": "such thing",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "HAMMER",
    "CROWBA",
    "EXPLOS",
    "MACHET"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOO-TOOL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HAMMER CROWBA EXPLOS MACHET)\n\t(DESC \"such thing\")>",
   "referencedBy": []
  },
  "DRACULA": {
   "name": "DRACULA",
   "file": "globals.zil",
   "line": 41,
   "endLine": 44,
   "desc": "Dracula",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DRACULA"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRACULA\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM DRACULA)\n\t(DESC \"Dracula\")>",
   "referencedBy": [
    "V-COUNT"
   ]
  },
  "FINGER": {
   "name": "FINGER",
   "file": "globals.zil",
   "line": 46,
   "endLine": 52,
   "desc": "finger",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "SURFACEBIT",
    "OPENBIT",
    "CONTBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "FINGER"
   ],
   "adjectives": [],
   "action": "FINGER-FCN",
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
   "source": "<OBJECT FINGER\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS SURFACEBIT OPENBIT CONTBIT TOUCHBIT)\n\t(CAPACITY 1)\n\t(SYNONYM FINGER)\n\t(DESC \"finger\")\n\t(ACTION FINGER-FCN)>",
   "referencedBy": [
    "FINGER-FCN",
    "V-COUNT"
   ]
  },
  "BLESSINGS": {
   "name": "BLESSINGS",
   "file": "globals.zil",
   "line": 67,
   "endLine": 70,
   "desc": "blessings",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "BLESSI"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLESSINGS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM BLESSI)\n\t(DESC \"blessings\")>",
   "referencedBy": [
    "V-COUNT"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "globals.zil",
   "line": 72,
   "endLine": 75,
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
   "referencedBy": []
  },
  "INTDIR": {
   "name": "INTDIR",
   "file": "globals.zil",
   "line": 77,
   "endLine": 82,
   "desc": "direction",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TOOLBIT"
   ],
   "synonyms": [
    "INTDIR"
   ],
   "adjectives": [
    "NORTH",
    "EAST",
    "SOUTH",
    "WEST",
    "NE",
    "NW",
    "SE",
    "SW"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTDIR\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM INTDIR)\n\t(ADJECTIVE NORTH EAST SOUTH WEST NE NW SE SW)\n\t(FLAGS TOOLBIT)\n\t(DESC \"direction\")>",
   "referencedBy": [
    "GET-OBJECT",
    "V-LEAP",
    "PRE-TURN",
    "V-PUSH-TO",
    "V-CLIMB-FOO",
    "V-THROW-DOWN"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "globals.zil",
   "line": 84,
   "endLine": 86,
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
    "V-AGAIN",
    "V-FIND"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "globals.zil",
   "line": 88,
   "endLine": 92,
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
    "THAT"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IT\t;\"was IT\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THAT)\n\t(DESC \"random object\")\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": [
    "MAIN-LOOP",
    "ITAKE-CHECK"
   ]
  },
  "AIR": {
   "name": "AIR",
   "file": "globals.zil",
   "line": 94,
   "endLine": 101,
   "desc": "air",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VOWELBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "AIR",
    "OXYGEN",
    "SKY"
   ],
   "adjectives": [],
   "action": "AIR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The air is as clear as any Egyptian air can be."
    ]
   },
   "contents": [],
   "source": "<OBJECT AIR\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"air\")\n\t(FLAGS VOWELBIT CONTBIT OPENBIT)\n\t(SYNONYM AIR OXYGEN SKY)\n\t(TEXT\n\"The air is as clear as any Egyptian air can be.\")\n\t(ACTION AIR-FCN)>",
   "referencedBy": [
    "AIR-FCN"
   ]
  },
  "GROUND": {
   "name": "GROUND",
   "file": "globals.zil",
   "line": 125,
   "endLine": 129,
   "desc": "floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FLOOR",
    "GROUND"
   ],
   "adjectives": [],
   "action": "READ-FLOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\t;\"was GROUND\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM FLOOR GROUND)\n\t(DESC \"floor\")\n\t(ACTION READ-FLOOR-F)>",
   "referencedBy": [
    "WEAR-THE-SACK",
    "AIR-FCN",
    "PRE-PUT",
    "V-DIG",
    "V-THROW-DOWN",
    "V-SIT-ON"
   ]
  },
  "CRACK": {
   "name": "CRACK",
   "file": "globals.zil",
   "line": 137,
   "endLine": 144,
   "desc": "crack",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "CRACK"
   ],
   "adjectives": [],
   "action": "CRACK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "It's just a crack in the floor where the stones meet."
    ]
   },
   "contents": [],
   "source": "<OBJECT CRACK\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT)\n\t(DESC \"crack\")\n\t(SYNONYM CRACK)\n\t(TEXT\n\"It's just a crack in the floor where the stones meet.\")\n\t(ACTION CRACK-FCN)>",
   "referencedBy": [
    "WEAR-THE-SACK"
   ]
  },
  "SAND": {
   "name": "SAND",
   "file": "globals.zil",
   "line": 161,
   "endLine": 165,
   "desc": "sand",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "DESERT",
    "SAND",
    "GROUND"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAND\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT)\n\t(DESC \"sand\")\n\t(SYNONYM DESERT SAND GROUND)>",
   "referencedBy": [
    "CANTEEN-FCN",
    "WEAR-THE-SACK",
    "PRE-TAKE",
    "PRE-PUT",
    "V-DIG",
    "V-HOLE-DIG",
    "V-DIG-WITH",
    "V-SIT-ON"
   ]
  },
  "HOLE": {
   "name": "HOLE",
   "file": "globals.zil",
   "line": 167,
   "endLine": 173,
   "desc": "hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "HOLE"
   ],
   "adjectives": [
    "SMALL",
    "ENLARG",
    "SIZABL",
    "KNEE-",
    "DEEP"
   ],
   "action": "HOLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HOLE\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT)\n\t(DESC \"hole\")\n\t(SYNONYM HOLE)\n\t(ADJECTIVE SMALL ENLARG SIZABL KNEE- DEEP)\n\t(ACTION HOLE-FCN)>",
   "referencedBy": [
    "HOLE-FCN",
    "V-DIG",
    "V-HOLE-DIG",
    "V-FILL-IN"
   ]
  },
  "PEN-PENCIL": {
   "name": "PEN-PENCIL",
   "file": "globals.zil",
   "line": 200,
   "endLine": 203,
   "desc": "writing implement",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "PEN",
    "PENCIL"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PEN-PENCIL\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"writing implement\")\n\t(SYNONYM PEN PENCIL)>",
   "referencedBy": []
  },
  "STONES": {
   "name": "STONES",
   "file": "globals.zil",
   "line": 205,
   "endLine": 208,
   "desc": "stones",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "STONES",
    "BLOCKS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STONES\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM STONES BLOCKS)\n\t(DESC \"stones\")>",
   "referencedBy": [
    "V-COUNT"
   ]
  },
  "KEY": {
   "name": "KEY",
   "file": "globals.zil",
   "line": 210,
   "endLine": 215,
   "desc": "key",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "TRUNK"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT KEY\n\t(IN GLOBALS)\n\t(FLAGS NDESCBIT)\n\t(DESC \"key\")\n\t(SYNONYM KEY)\n\t(ADJECTIVE TRUNK)>",
   "referencedBy": []
  },
  "BULKHEADS": {
   "name": "BULKHEADS",
   "file": "globals.zil",
   "line": 217,
   "endLine": 221,
   "desc": "bulkhead",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "BULKHE"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BULKHEADS\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"bulkhead\")\n\t(SYNONYM BULKHE)>",
   "referencedBy": []
  },
  "WALLS": {
   "name": "WALLS",
   "file": "globals.zil",
   "line": 223,
   "endLine": 229,
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
   "adjectives": [
    "STONE"
   ],
   "action": "WALL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALLS\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"wall\")\n\t(SYNONYM WALL WALLS)\n\t(ADJECTIVE STONE)\n\t(ACTION WALL-FCN)>",
   "referencedBy": [
    "V-READ",
    "V-DIG",
    "V-PLASTER-REMOVE"
   ]
  },
  "CEILING": {
   "name": "CEILING",
   "file": "globals.zil",
   "line": 247,
   "endLine": 251,
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
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CEILING\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"ceiling\")\n\t(SYNONYM CEILIN)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "globals.zil",
   "line": 253,
   "endLine": 258,
   "desc": "empty hands",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOOLBIT",
    "TOUCHBIT",
    "VOWELBIT"
   ],
   "synonyms": [
    "HANDS"
   ],
   "adjectives": [],
   "action": "READ-PALMS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HANDS\t;\"was HANDS\"\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM HANDS)\n\t(DESC \"empty hands\")\n\t(FLAGS NDESCBIT TOOLBIT TOUCHBIT VOWELBIT)\n\t(ACTION READ-PALMS-F)>",
   "referencedBy": [
    "PLASTER1-FCN",
    "PLASTER-FCN",
    "GWIM",
    "V-CUT",
    "IKILL",
    "V-SHAKE",
    "PRE-DIG",
    "V-DIG",
    "V-FIND"
   ]
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "globals.zil",
   "line": 265,
   "endLine": 269,
   "desc": "cretin",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOP-OF-STAIRWAY",
   "flags": [
    "ACTORBIT",
    "NDESCBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "PLAYER",
    "ADVENT",
    "CRETIN"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ADVENTURER\n\t(IN TOP-OF-STAIRWAY)\n\t(SYNONYM PLAYER ADVENT CRETIN)\n\t(DESC \"cretin\")\n        (FLAGS ACTORBIT NDESCBIT INVISIBLE)>",
   "referencedBy": [
    "MOVE-PLANK-FCN",
    "BEAM-FCN",
    "NOT-HERE-OBJECT-F",
    "GO",
    "PARSER",
    "ALTAR-FCN",
    "PRINT-CONT",
    "GOTO",
    "PRE-EAT",
    "PRE-MUNG"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "globals.zil",
   "line": 271,
   "endLine": 276,
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
    "BACK"
   ],
   "adjectives": [],
   "action": "CRETIN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ME MYSELF SELF BACK)\n\t(DESC \"you\")\n\t(FLAGS ACTORBIT)\n\t(ACTION CRETIN)>",
   "referencedBy": [
    "MOVE-PLANK-FCN",
    "BEAM-FCN",
    "WEAR-THE-SACK",
    "CRETIN",
    "PRE-EAT",
    "PRE-MUNG",
    "V-TELL"
   ]
  },
  "DOORWAY": {
   "name": "DOORWAY",
   "file": "globals.zil",
   "line": 349,
   "endLine": 355,
   "desc": "doorway",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "DOORWAY",
    "OPENIN"
   ],
   "adjectives": [
    "ARCHED",
    "TIMBER"
   ],
   "action": "DOORWAY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DOORWAY\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT CONTBIT OPENBIT)\n\t(DESC \"doorway\")\n\t(SYNONYM DOORWAY OPENIN)\n\t(ADJECTIVE ARCHED TIMBER)\n\t(ACTION DOORWAY-FCN)>",
   "referencedBy": [
    "BEAM-FCN",
    "V-PLASTER-REMOVE"
   ]
  },
  "PICTURE-PANELS": {
   "name": "PICTURE-PANELS",
   "file": "globals.zil",
   "line": 370,
   "endLine": 376,
   "desc": "panel",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PANEL",
    "PANELS"
   ],
   "adjectives": [
    "GOLD",
    "RED",
    "CLAY",
    "BEATEN"
   ],
   "action": "PANEL-ON-WALL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PICTURE-PANELS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"panel\")\n\t(FLAGS NDESCBIT)\n\t(SYNONYM PANEL PANELS)\n\t(ADJECTIVE GOLD RED CLAY BEATEN)\n\t(ACTION PANEL-ON-WALL-FCN)>",
   "referencedBy": []
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "globals.zil",
   "line": 389,
   "endLine": 394,
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
   "action": "DESC-STAIRS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STAIRS STEPS LADDER STAIRWAY)\n\t(DESC \"stairs\")\n\t(FLAGS NDESCBIT CLIMBBIT TOUCHBIT)\n\t(ACTION DESC-STAIRS-F)>",
   "referencedBy": []
  },
  "PARACHUTE": {
   "name": "PARACHUTE",
   "file": "globals.zil",
   "line": 403,
   "endLine": 407,
   "desc": "parachute",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "PARACH",
    "CHUTE"
   ],
   "adjectives": [],
   "action": "GOOD-LUCK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PARACHUTE\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PARACH CHUTE)\n\t(DESC \"parachute\")\n\t(ACTION GOOD-LUCK-FCN)>",
   "referencedBy": [
    "V-STAND-UNDER"
   ]
  },
  "PLANE": {
   "name": "PLANE",
   "file": "globals.zil",
   "line": 409,
   "endLine": 415,
   "desc": "airplane",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "PLANE",
    "AIRPLA",
    "PILOT"
   ],
   "adjectives": [],
   "action": "PLANE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Its a small, one-engine plane, similar in shape to the old Piper Cubs."
    ]
   },
   "contents": [],
   "source": "<OBJECT PLANE\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"airplane\")\n\t(SYNONYM PLANE AIRPLA PILOT)\n\t(TEXT\n\"Its a small, one-engine plane, similar in shape to the old Piper Cubs.\")\n\t(ACTION PLANE-FCN)>",
   "referencedBy": [
    "V-STAND-UNDER"
   ]
  },
  "SIP": {
   "name": "SIP",
   "file": "globals.zil",
   "line": 481,
   "endLine": 486,
   "desc": "sip of water",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "SIP"
   ],
   "adjectives": [],
   "action": "SIP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SIP\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS TAKEBIT)\n\t(DESC \"sip of water\")\n\t(SYNONYM SIP)\n\t(ACTION SIP-FCN)>",
   "referencedBy": [
    "SIP-FCN"
   ]
  },
  "HIEROGLYPHS": {
   "name": "HIEROGLYPHS",
   "file": "globals.zil",
   "line": 560,
   "endLine": 566,
   "desc": "hieroglyphs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SYMBOL",
    "HIEROG",
    "GLYPHS"
   ],
   "adjectives": [
    "STRANGE"
   ],
   "action": "HIERO-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HIEROGLYPHS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"hieroglyphs\")\n\t(FLAGS NDESCBIT)\n\t(SYNONYM SYMBOL HIEROG GLYPHS)\n\t(ADJECTIVE STRANGE)\n\t(ACTION HIERO-FCN)>",
   "referencedBy": [
    "NORTH-ANTE-DOOR-FCN",
    "ANNEX-DOOR-FCN",
    "READ-FLOOR-F",
    "WALL-FCN",
    "PANEL-ON-WALL-FCN"
   ]
  },
  "PICTURES": {
   "name": "PICTURES",
   "file": "globals.zil",
   "line": 714,
   "endLine": 721,
   "desc": "decorations",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PAINTI",
    "PICTUR",
    "SCROLL"
   ],
   "adjectives": [
    "SMALL",
    "LARGE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Quite beautiful, no?"
    ]
   },
   "contents": [],
   "source": "<OBJECT PICTURES\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT)\n\t(DESC \"decorations\")\n\t(SYNONYM PAINTI PICTUR SCROLL)\n\t(ADJECTIVE SMALL LARGE)\n\t(TEXT\n\"Quite beautiful, no?\")>",
   "referencedBy": []
  },
  "PILLARS": {
   "name": "PILLARS",
   "file": "globals.zil",
   "line": 723,
   "endLine": 729,
   "desc": "pillars",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PILLARS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "They're quite huge, aren't they?"
    ]
   },
   "contents": [],
   "source": "<OBJECT PILLARS\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT)\n\t(DESC \"pillars\")\n\t(SYNONYM PILLARS)\n\t(TEXT\n\"They're quite huge, aren't they?\")>",
   "referencedBy": []
  },
  "BOAT": {
   "name": "BOAT",
   "file": "globals.zil",
   "line": 731,
   "endLine": 737,
   "desc": "barge",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "VEHBIT"
   ],
   "synonyms": [
    "BARGE",
    "BOAT",
    "SHIP",
    "WOOD"
   ],
   "adjectives": [
    "WOODEN",
    "WOOD"
   ],
   "action": "BOARD-BARGE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOAT\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS VEHBIT)\n\t(DESC \"barge\")\n\t(SYNONYM BARGE BOAT SHIP WOOD)\n\t(ADJECTIVE WOODEN WOOD)\n\t(ACTION BOARD-BARGE-F)>",
   "referencedBy": [
    "PRE-BOARD",
    "V-BURN",
    "V-THROW-OFF"
   ]
  },
  "DECK": {
   "name": "DECK",
   "file": "globals.zil",
   "line": 766,
   "endLine": 770,
   "desc": "deck",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "DECK",
    "DECKIN"
   ],
   "adjectives": [],
   "action": "JUMP-OFF-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DECK\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"deck\")\n\t(SYNONYM DECK DECKIN)\n\t(ACTION JUMP-OFF-FCN)>",
   "referencedBy": [
    "V-BURN",
    "V-THROW-OFF",
    "V-SIT-ON"
   ]
  },
  "FLAPS": {
   "name": "FLAPS",
   "file": "globals.zil",
   "line": 790,
   "endLine": 794,
   "desc": "flap",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "FLAP",
    "FLAPS"
   ],
   "adjectives": [],
   "action": "FLAP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLAPS\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"flap\")\n\t(SYNONYM FLAP FLAPS)\n\t(ACTION FLAP-FCN)>",
   "referencedBy": [
    "ENTER-TENT-FCN"
   ]
  },
  "THICKET": {
   "name": "THICKET",
   "file": "globals.zil",
   "line": 811,
   "endLine": 815,
   "desc": "thicket",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "THICKE"
   ],
   "adjectives": [],
   "action": "THICKET-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT THICKET\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"thicket\")\n\t(SYNONYM THICKE)\n\t(ACTION THICKET-FCN)> ",
   "referencedBy": []
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "globals.zil",
   "line": 827,
   "endLine": 829,
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
    "MOVE-PLANK-FCN",
    "NOT-HERE-OBJECT-F",
    "FIND-NOT-HERE",
    "MAIN-LOOP",
    "GET-OBJECT",
    "PRE-TAKE",
    "PRE-PUT",
    "PRE-GIVE",
    "PRE-BOARD",
    "PRE-POUR-ON",
    "PRE-FILL",
    "PRE-TURN",
    "PRE-PUSH-TO",
    "PRE-MUNG",
    "PRE-DIG",
    "PRE-REACH-IN",
    "PRE-COMPARE"
   ]
  },
  "NORTH-STAIRS": {
   "name": "NORTH-STAIRS",
   "file": "ra.zil",
   "line": 154,
   "endLine": 160,
   "desc": "steep staircase",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STAIRC",
    "STAIRS",
    "STEPS",
    "STAIR"
   ],
   "adjectives": [
    "STEEP",
    "NORTH"
   ],
   "action": "RA-STAIRS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT NORTH-STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(DESC \"steep staircase\")\n\t(SYNONYM STAIRC STAIRS STEPS STAIR)\n\t(ADJECTIVE STEEP NORTH)\n\t(ACTION RA-STAIRS-FCN)>",
   "referencedBy": [
    "ROPE-FCN",
    "RA-STAIRS-FCN",
    "STAIRWAY-CHECK?",
    "V-THROW-DOWN"
   ]
  },
  "EAST-STAIRS": {
   "name": "EAST-STAIRS",
   "file": "ra.zil",
   "line": 162,
   "endLine": 168,
   "desc": "wide staircase",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STAIRC",
    "STAIRS",
    "STEPS",
    "STAIR"
   ],
   "adjectives": [
    "WIDE",
    "EAST"
   ],
   "action": "RA-STAIRS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EAST-STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(DESC \"wide staircase\")\n\t(SYNONYM STAIRC STAIRS STEPS STAIR)\n\t(ADJECTIVE WIDE EAST)\n\t(ACTION RA-STAIRS-FCN)>",
   "referencedBy": [
    "ROPE-FCN",
    "RA-STAIRS-FCN",
    "STAIRWAY-CHECK?",
    "V-THROW-DOWN"
   ]
  },
  "SOUTH-STAIRS": {
   "name": "SOUTH-STAIRS",
   "file": "ra.zil",
   "line": 170,
   "endLine": 176,
   "desc": "winding staircase",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STAIRC",
    "STAIRS",
    "STEPS",
    "STAIR"
   ],
   "adjectives": [
    "WINDIN",
    "SOUTH"
   ],
   "action": "RA-STAIRS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SOUTH-STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(DESC \"winding staircase\")\n\t(SYNONYM STAIRC STAIRS STEPS STAIR)\n\t(ADJECTIVE WINDIN SOUTH)\n\t(ACTION RA-STAIRS-FCN)>",
   "referencedBy": [
    "ROPE-FCN",
    "RA-STAIRS-FCN",
    "STAIRWAY-CHECK?",
    "V-THROW-DOWN"
   ]
  },
  "WEST-STAIRS": {
   "name": "WEST-STAIRS",
   "file": "ra.zil",
   "line": 178,
   "endLine": 184,
   "desc": "narrow staircase",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STAIRC",
    "STAIRS",
    "STEPS",
    "STAIR"
   ],
   "adjectives": [
    "NARROW",
    "WEST"
   ],
   "action": "RA-STAIRS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WEST-STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(DESC \"narrow staircase\")\n\t(SYNONYM STAIRC STAIRS STEPS STAIR)\n\t(ADJECTIVE NARROW WEST)\n\t(ACTION RA-STAIRS-FCN)>",
   "referencedBy": [
    "ROPE-FCN",
    "RA-STAIRS-FCN",
    "STAIRWAY-CHECK?",
    "V-THROW-DOWN"
   ]
  },
  "FEW-STEPS": {
   "name": "FEW-STEPS",
   "file": "ra.zil",
   "line": 217,
   "endLine": 223,
   "desc": "few steps",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "CLIMBBIT"
   ],
   "synonyms": [
    "STEPS",
    "STAIRS"
   ],
   "adjectives": [
    "FEW",
    "FIRST"
   ],
   "action": "FEW-STEPS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FEW-STEPS\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(DESC \"few steps\")\n\t(SYNONYM STEPS STAIRS)\n\t(ADJECTIVE FEW FIRST)\n\t(ACTION FEW-STEPS-FCN)>",
   "referencedBy": [
    "ROPE-FCN"
   ]
  },
  "ALTAR": {
   "name": "ALTAR",
   "file": "ra.zil",
   "line": 253,
   "endLine": 263,
   "desc": "stone altar",
   "ldesc": null,
   "fdesc": null,
   "loc": "CHAMBER-OF-RA",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SURFACEBIT",
    "VEHBIT",
    "DONTTAKE",
    "TRANSBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "ALTAR"
   ],
   "adjectives": [
    "LARGE",
    "STONE"
   ],
   "action": "ALTAR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "1000"
    ],
    "TEXT": [
     "The altar is three feet by five feet and is mounted firmly in the solid floor."
    ]
   },
   "contents": [],
   "source": "<OBJECT ALTAR\n\t(IN CHAMBER-OF-RA)\n\t(DESC \"stone altar\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SURFACEBIT VEHBIT DONTTAKE TRANSBIT\n\t       TRYTAKEBIT)\n\t(CAPACITY 1000)\n\t(SYNONYM ALTAR)\n\t(ADJECTIVE LARGE STONE)\n\t(TEXT\n\"The altar is three feet by five feet and is mounted firmly in the solid floor.\")\n\t(ACTION ALTAR-FCN)>",
   "referencedBy": [
    "ROPE-FCN",
    "TELL-STAIRS-FCN",
    "RE-ENABLE-FCN",
    "ROPE-HOOK-FCN",
    "ROPE-DOWN-FCN",
    "MOVE-ROPE-RA",
    "ALTAR-FCN",
    "DESCRIBE-ROOM",
    "V-BOARD",
    "GOTO",
    "V-CLIMB-ON",
    "V-CLIMB-FOO",
    "V-THROW-OFF"
   ]
  },
  "TORCH": {
   "name": "TORCH",
   "file": "ra.zil",
   "line": 300,
   "endLine": 311,
   "desc": "bronze torch",
   "ldesc": null,
   "fdesc": "Leaning against the altar is a bronze torch.",
   "loc": "CHAMBER-OF-RA",
   "flags": [
    "BURNBIT",
    "TAKEBIT"
   ],
   "synonyms": [
    "TORCH",
    "WICK"
   ],
   "adjectives": [
    "BRONZE"
   ],
   "action": "TORCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The torch has a tapered tip, much like a wick, which should be able to hold\na large amount of oil."
    ]
   },
   "contents": [],
   "source": "<OBJECT TORCH\n\t(IN CHAMBER-OF-RA)\n\t(FLAGS BURNBIT TAKEBIT)\n\t(DESC \"bronze torch\")\n\t(SYNONYM TORCH WICK)\n\t(ADJECTIVE BRONZE)\n\t(FDESC\n\"Leaning against the altar is a bronze torch.\")\n\t(TEXT\n\"The torch has a tapered tip, much like a wick, which should be able to hold\na large amount of oil.\")\n\t(ACTION TORCH-FCN)>",
   "referencedBy": [
    "MOVE-PLANK-FCN",
    "OPEN-SLAB-FCN",
    "HEAVY?",
    "TRUNK-FCN",
    "CRATE-FCN",
    "I-TORCH",
    "KILL-TORCH",
    "RA-STAIRS-FCN",
    "TORCH-FCN",
    "PRE-PUT",
    "V-LAMP-ON",
    "PRE-POUR-ON",
    "PRE-BURN",
    "V-DIP-IN"
   ]
  },
  "OIL-JAR": {
   "name": "OIL-JAR",
   "file": "ra.zil",
   "line": 338,
   "endLine": 348,
   "desc": "pink jar",
   "ldesc": null,
   "fdesc": "Lying on the floor, partially covered with dust, is a small pink alabaster\njar.",
   "loc": "CHAMBER-OF-RA",
   "flags": [
    "CONTBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "JAR"
   ],
   "adjectives": [
    "PINK",
    "SMALL",
    "ALABAS"
   ],
   "action": "OIL-FCN",
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
    "LIQUID"
   ],
   "source": "<OBJECT OIL-JAR\n\t(IN CHAMBER-OF-RA)\n\t(SYNONYM JAR)\n\t(ADJECTIVE PINK SMALL ALABAS)\n\t(DESC \"pink jar\")\n\t(FLAGS CONTBIT TAKEBIT BURNBIT)\n\t(CAPACITY 4)\n\t(FDESC\n\"Lying on the floor, partially covered with dust, is a small pink alabaster\njar.\")\n       \t(ACTION OIL-FCN)>",
   "referencedBy": [
    "HEAVY?",
    "OIL-FCN",
    "LIQUID-FCN",
    "V-POUR",
    "V-POUR-IN",
    "PRE-POUR-ON",
    "V-FILL",
    "V-BURN",
    "V-SHAKE",
    "V-DRINK-FROM",
    "V-DIP-IN"
   ]
  },
  "LIQUID": {
   "name": "LIQUID",
   "file": "ra.zil",
   "line": 369,
   "endLine": 376,
   "desc": "liquid",
   "ldesc": null,
   "fdesc": null,
   "loc": "OIL-JAR",
   "flags": [
    "DONTTAKE"
   ],
   "synonyms": [
    "LIQUID",
    "OIL"
   ],
   "adjectives": [],
   "action": "LIQUID-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The liquid is oily to the touch and smells as if it could be highly volatile."
    ]
   },
   "contents": [],
   "source": "<OBJECT LIQUID\n\t(IN OIL-JAR)\n\t(FLAGS DONTTAKE)\n\t(DESC \"liquid\")\n\t(TEXT \n\"The liquid is oily to the touch and smells as if it could be highly volatile.\")\n\t(SYNONYM LIQUID OIL)\n\t(ACTION LIQUID-FCN)>",
   "referencedBy": [
    "SIP-FCN",
    "CUP-FCN",
    "V-POUR",
    "V-POUR-IN",
    "PRE-POUR-ON",
    "V-FILL",
    "V-BURN",
    "V-SHAKE",
    "V-SMELL",
    "V-DRINK-FROM",
    "V-DIP-IN"
   ]
  },
  "GOLD-LEAF": {
   "name": "GOLD-LEAF",
   "file": "temple.zil",
   "line": 109,
   "endLine": 116,
   "desc": "glittering leaf",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "DONTTAKE",
    "TOUCHBIT"
   ],
   "synonyms": [
    "LEAF"
   ],
   "adjectives": [
    "GOLD",
    "SILVER"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The walls are covered with it. And it's very beautiful."
    ]
   },
   "contents": [],
   "source": "<OBJECT GOLD-LEAF\n\t(IN LOCAL-GLOBALS)\n\t(FLAGS NDESCBIT DONTTAKE TOUCHBIT)\n\t(DESC \"glittering leaf\")\n\t(SYNONYM LEAF)\n\t(ADJECTIVE GOLD SILVER)\n\t(TEXT\n\"The walls are covered with it. And it's very beautiful.\")>",
   "referencedBy": []
  },
  "GOLD-TABLE": {
   "name": "GOLD-TABLE",
   "file": "temple.zil",
   "line": 154,
   "endLine": 161,
   "desc": "granite table",
   "ldesc": null,
   "fdesc": null,
   "loc": "GCUP-ROOM",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "OPENBIT",
    "NDESCBIT",
    "TRANSBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "TABLE",
    "SLAB"
   ],
   "adjectives": [
    "GRANITE"
   ],
   "action": "HUH?",
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
    "GOLD-CUP"
   ],
   "source": "<OBJECT GOLD-TABLE\n\t(IN GCUP-ROOM)\n\t(FLAGS CONTBIT SURFACEBIT OPENBIT NDESCBIT TRANSBIT DONTTAKE)\n\t(DESC \"granite table\") \n\t(SYNONYM TABLE SLAB)\n\t(ADJECTIVE GRANITE)\n\t(CAPACITY 100)\n\t(ACTION HUH?)>",
   "referencedBy": []
  },
  "GOLD-CUP": {
   "name": "GOLD-CUP",
   "file": "temple.zil",
   "line": 163,
   "endLine": 179,
   "desc": "golden chalice",
   "ldesc": null,
   "fdesc": "Sitting in the middle of the granite table is a gleaming chalice made\nof gold.",
   "loc": "GOLD-TABLE",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "TAKEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CUP",
    "CHALIC"
   ],
   "adjectives": [
    "GOLD",
    "GOLDEN"
   ],
   "action": "CUP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The cup is heavier than you thought it might be. The outside of it is\nbeautifully etched with scenes of the Queen and her handmaidens."
    ],
    "VALUE": [
     "15"
    ],
    "CAPACITY": [
     "5"
    ],
    "SIZE": [
     "8"
    ],
    "MAP": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT GOLD-CUP\n\t(IN GOLD-TABLE)\n\t(FLAGS CONTBIT OPENBIT TAKEBIT SEARCHBIT)\n\t(DESC \"golden chalice\")\n\t(FDESC\n\"Sitting in the middle of the granite table is a gleaming chalice made\nof gold.\")\n\t(TEXT\n\"The cup is heavier than you thought it might be. The outside of it is\nbeautifully etched with scenes of the Queen and her handmaidens.\")\n\t(SYNONYM CUP CHALIC)\n\t(ADJECTIVE GOLD GOLDEN)\n\t(VALUE 15)\n\t(CAPACITY 5)\n\t(SIZE 8)\n\t(MAP 1)\n\t(ACTION CUP-FCN)>",
   "referencedBy": [
    "V-POUR-IN",
    "V-FILL"
   ]
  },
  "SILVER-CUP": {
   "name": "SILVER-CUP",
   "file": "temple.zil",
   "line": 181,
   "endLine": 196,
   "desc": "silver chalice",
   "ldesc": null,
   "fdesc": "Sitting in the middle of the granite table is a chalice made of gleaming silver.",
   "loc": "SILVER-TABLE",
   "flags": [
    "CONTBIT",
    "OPENBIT",
    "TAKEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "CUP",
    "CHALIC"
   ],
   "adjectives": [
    "SILVER"
   ],
   "action": "CUP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "There's a thin line etched inside the chalice which travels all the way\naround it. The chalice is not very heavy."
    ],
    "VALUE": [
     "15"
    ],
    "SIZE": [
     "5"
    ],
    "CAPACITY": [
     "5"
    ],
    "MAP": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT SILVER-CUP\n\t(IN SILVER-TABLE)\n\t(FLAGS CONTBIT OPENBIT TAKEBIT SEARCHBIT)\n\t(DESC \"silver chalice\")\n\t(TEXT\n\"There's a thin line etched inside the chalice which travels all the way\naround it. The chalice is not very heavy.\")\n\t(FDESC\n\"Sitting in the middle of the granite table is a chalice made of gleaming silver.\")\n\t(SYNONYM CUP CHALIC)\n\t(ADJECTIVE SILVER)\n\t(VALUE 15)\n\t(SIZE 5)\n\t(CAPACITY 5)\n\t(MAP 1)\n\t(ACTION CUP-FCN)>",
   "referencedBy": [
    "LINE-FCN",
    "CUP-FCN",
    "V-POUR-IN",
    "V-FILL"
   ]
  },
  "LINE": {
   "name": "LINE",
   "file": "temple.zil",
   "line": 198,
   "endLine": 206,
   "desc": "line",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT"
   ],
   "synonyms": [
    "LINE"
   ],
   "adjectives": [
    "THIN"
   ],
   "action": "LINE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The line goes around the interior of the silver cup."
    ]
   },
   "contents": [],
   "source": "<OBJECT LINE\n\t(IN GLOBAL-OBJECTS)\n\t(FLAGS NDESCBIT TOUCHBIT)\n\t(DESC \"line\")\n\t(SYNONYM LINE)\n\t(ADJECTIVE THIN)\n\t(TEXT\n\"The line goes around the interior of the silver cup.\")\n\t(ACTION LINE-FCN)>",
   "referencedBy": []
  },
  "SILVER-TABLE": {
   "name": "SILVER-TABLE",
   "file": "temple.zil",
   "line": 230,
   "endLine": 237,
   "desc": "granite table",
   "ldesc": null,
   "fdesc": null,
   "loc": "SCUP-ROOM",
   "flags": [
    "CONTBIT",
    "SURFACEBIT",
    "TRANSBIT",
    "OPENBIT",
    "NDESCBIT",
    "DONTTAKE"
   ],
   "synonyms": [
    "TABLE",
    "SLAB"
   ],
   "adjectives": [
    "GRANITE"
   ],
   "action": "HUH?",
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
    "SILVER-CUP"
   ],
   "source": "<OBJECT SILVER-TABLE\n\t(IN SCUP-ROOM)\n\t(FLAGS CONTBIT SURFACEBIT TRANSBIT OPENBIT NDESCBIT DONTTAKE)\n\t(DESC \"granite table\") \n\t(SYNONYM TABLE SLAB)\n\t(ADJECTIVE GRANITE)\n\t(CAPACITY 100)\n\t(ACTION HUH?)>",
   "referencedBy": []
  },
  "SKELETON": {
   "name": "SKELETON",
   "file": "temple.zil",
   "line": 239,
   "endLine": 251,
   "desc": "skeleton",
   "ldesc": null,
   "fdesc": "Lying before you in tortured repose are the bony remains of a former\nadventurer, someone who tried looting the pyramid long, long ago. As you bend\nover to pay your respects, something glitters, catching your eye as you move\nyour head.",
   "loc": "SKELETON-ROOM",
   "flags": [
    "TRYTAKEBIT",
    "TAKEBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "SKELET",
    "REMAIN",
    "BONES",
    "ADVENT"
   ],
   "adjectives": [
    "BONY"
   ],
   "action": "SKELETON-FCN",
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
    "DIGITS"
   ],
   "source": "<OBJECT SKELETON\n\t(IN SKELETON-ROOM)\n        (DESC \"skeleton\")        \n\t(FDESC \n\"Lying before you in tortured repose are the bony remains of a former\nadventurer, someone who tried looting the pyramid long, long ago. As you bend\nover to pay your respects, something glitters, catching your eye as you move\nyour head.\")\n\t(SYNONYM SKELET REMAIN BONES ADVENT)\n\t(ADJECTIVE BONY)\n\t(FLAGS TRYTAKEBIT TAKEBIT CONTBIT OPENBIT SEARCHBIT)\n\t(CAPACITY 15)\n\t(ACTION SKELETON-FCN)>",
   "referencedBy": [
    "SKELETON-FCN",
    "DIGIT-FCN",
    "WEAR-RING-FCN",
    "V-SMELL"
   ]
  },
  "DIGITS": {
   "name": "DIGITS",
   "file": "temple.zil",
   "line": 278,
   "endLine": 284,
   "desc": "calcified hand",
   "ldesc": null,
   "fdesc": null,
   "loc": "SKELETON",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "DIGITS",
    "HAND"
   ],
   "adjectives": [
    "BONY",
    "CALCIF"
   ],
   "action": "DIGIT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "RING"
   ],
   "source": "<OBJECT DIGITS\n\t(IN SKELETON)\n\t(DESC \"calcified hand\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT SEARCHBIT)\n\t(SYNONYM DIGITS HAND)\n\t(ADJECTIVE BONY CALCIF)\n\t(ACTION DIGIT-FCN)>",
   "referencedBy": [
    "SKELETON-FCN"
   ]
  },
  "RING": {
   "name": "RING",
   "file": "temple.zil",
   "line": 294,
   "endLine": 305,
   "desc": "jeweled ring",
   "ldesc": null,
   "fdesc": null,
   "loc": "DIGITS",
   "flags": [
    "TAKEBIT",
    "DONTTAKE",
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "RING"
   ],
   "adjectives": [
    "JEWELE"
   ],
   "action": "WEAR-RING-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "At first glance, you are overwhelmed with the beauty and richness of the ring.\nOn close examination you notice the ring has a tiny needle on the inside of\nthe band."
    ],
    "SIZE": [
     "1"
    ]
   },
   "contents": [
    "NEEDLE"
   ],
   "source": "<OBJECT RING\n\t(IN DIGITS)\n\t(FLAGS TAKEBIT DONTTAKE NDESCBIT CONTBIT OPENBIT SEARCHBIT)\n\t(DESC \"jeweled ring\")\n\t(SYNONYM RING)\n\t(ADJECTIVE JEWELE)\n\t(TEXT\n\"At first glance, you are overwhelmed with the beauty and richness of the ring.\nOn close examination you notice the ring has a tiny needle on the inside of\nthe band.\")\n\t(SIZE 1)\n\t(ACTION WEAR-RING-FCN)>",
   "referencedBy": [
    "FINGER-FCN",
    "SKELETON-FCN",
    "WEAR-RING-FCN"
   ]
  },
  "NEEDLE": {
   "name": "NEEDLE",
   "file": "temple.zil",
   "line": 349,
   "endLine": 358,
   "desc": "tiny needle",
   "ldesc": null,
   "fdesc": null,
   "loc": "RING",
   "flags": [
    "NDESCBIT",
    "INVISIBLE",
    "DONTTAKE",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "NEEDLE"
   ],
   "adjectives": [
    "TINY"
   ],
   "action": "TOUCH-NEEDLE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "1"
    ],
    "TEXT": [
     "Inside the band is a small needle set at an angle designed to pierce the skin."
    ]
   },
   "contents": [],
   "source": "<OBJECT NEEDLE\n\t(IN RING)\n\t(FLAGS NDESCBIT INVISIBLE DONTTAKE TRYTAKEBIT)\n\t(DESC \"tiny needle\")\n\t(SYNONYM NEEDLE)\n\t(ADJECTIVE TINY)\n\t(SIZE 1)\n\t(TEXT\n\"Inside the band is a small needle set at an angle designed to pierce the skin.\")\n\t(ACTION TOUCH-NEEDLE-FCN)>",
   "referencedBy": [
    "WEAR-RING-FCN"
   ]
  }
 },
 "routines": {
  "NORTH-ANTE-FCN": {
   "name": "NORTH-ANTE-FCN",
   "file": "ante.zil",
   "line": 30,
   "endLine": 34,
   "source": "<ROUTINE NORTH-ANTE-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-BEG ,M-ENTER ,M-LOOK>\n\t\t<COND (<EQUAL? ,BEAM-PLACED 4>\n\t\t       <MOVE ,BEAM ,HERE>)>)>\n\t <RFALSE>>"
  },
  "PIT-FCN": {
   "name": "PIT-FCN",
   "file": "ante.zil",
   "line": 70,
   "endLine": 78,
   "source": "<ROUTINE PIT-FCN ()\n\t <COND (<VERB? THROUGH>\n\t\t<DO-WALK ,P?DOWN>)\n\t       (<VERB? LOOK-INSIDE LOOK-DOWN EXAMINE>\n\t\t<TELL \"It's too deep and dark to see much of anything.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? LISTEN>\n\t\t<TELL \"You hear the squealing of rats. Hungry rats.\" CR>\n\t\t<RTRUE>)>>"
  },
  "MOVE-PLANK-FCN": {
   "name": "MOVE-PLANK-FCN",
   "file": "ante.zil",
   "line": 80,
   "endLine": 107,
   "source": "<ROUTINE MOVE-PLANK-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-BEG ,M-ENTER ,M-LOOK>\n\t\t<COND (<EQUAL? ,BEAM-PLACED 1 5>\n\t\t       <MOVE ,BEAM ,HERE>)>\n\t\t<COND (<EQUAL? ,HERE ,MID-ANTECHAMBER ,MID-PASSAGE>\n\t\t       <SETG ON-BEAM <>>)>\n\t\t<COND (<NOT <EQUAL? .RARG ,M-BEG>>\n\t\t       <RFALSE>)\n\t\t      (<NOT <VERB? DROP THROW PUT>>\n\t\t       <RFALSE>)\n\t\t      (<AND <VERB? PUT>\n\t\t\t    <NOT <PRSI? ,PIT>>>\n\t\t       <RFALSE>)\n\t\t      (<FSET? ,PIT ,INVISIBLE>\n\t\t       <RFALSE>)\n\t\t      (<AND <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t\t    <AND <NOT <EQUAL? ,PRSO ,WINNER ,ME ,ADVENTURER>>\n\t\t\t\t <NOT <EQUAL? ,PRSO ,NOT-HERE-OBJECT>>\n\t\t\t\t <IN? ,PRSO ,WINNER>>\n\t\t\t    <EQUAL? .RARG ,M-BEG>>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL \"You hear the \" D ,PRSO\n\t\t\t     \" hit the bottom of the deep pit.\" CR>\n\t\t       <SETG P-IT-LOC <>>\n\t\t       <COND (<PRSO? ,TORCH>\n\t\t\t      <KILL-TORCH>)>\n\t\t       <RTRUE>)>\n\t\t<RFALSE>)>>"
  },
  "WALK-BEAM-FCN": {
   "name": "WALK-BEAM-FCN",
   "file": "ante.zil",
   "line": 109,
   "endLine": 116,
   "source": "<ROUTINE WALK-BEAM-FCN ()\n\t <COND (<NOT <EQUAL? ,BEAM-PLACED 1 5>>\n\t\t<JIGS-UP\n\"You step into air then plummet into a deep pit, the home of a rat pack.\">)\n\t       (T \n\t\t<SETG ON-BEAM T>\n\t\t<MOVE ,BEAM ,WEST-END-OF-PASSAGE>\n\t\t,WEST-END-OF-PASSAGE)>>"
  },
  "BURN-FRAME-FCN": {
   "name": "BURN-FRAME-FCN",
   "file": "ante.zil",
   "line": 128,
   "endLine": 140,
   "source": "<ROUTINE BURN-FRAME-FCN ()\n\t <COND (<VERB? BURN>\n\t\t<TELL\n\"You light the timber frame surrounding the door. The wood is slow to catch,\nbut then, in a bursting flash, the entire frame is consumed. You shield your\neyes and move back to keep from being burned, but as you take a step back, \">\n\t\t<COND (<NOT ,ON-BEAM>\n\t\t       <JIGS-UP\n\"your foot lands on empty space and you plummet downward to darkness.\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"you lose your balance on the mast. Your foot misses the mast and you slip,\nfalling into the darkness below.\">)>)>> "
  },
  "ROCKS-FCN": {
   "name": "ROCKS-FCN",
   "file": "ante.zil",
   "line": 168,
   "endLine": 185,
   "source": "<ROUTINE ROCKS-FCN ()\n\t <COND (<AND <VERB? PUT-UNDER PUT-AGAINST PUT>\n\t\t     <EQUAL? ,PRSI ,ROCKS>\n\t\t     <NOT <EQUAL? ,PRSO ,BEAM>>>\n\t\t<TELL \"Weird!\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<EQUAL? ,BEAM-PLACED 2 3>\n\t\t       <TELL \"The rocks support the beam.\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"I see nothing special about the rocks.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL\n\"Huh? The rocks? Come on! They're on either side of the doorway!\" CR>\n\t\t<RTRUE>)>\n\t <RFALSE>>"
  },
  "TAKE-A-CHIP-FCN": {
   "name": "TAKE-A-CHIP-FCN",
   "file": "ante.zil",
   "line": 205,
   "endLine": 212,
   "source": "<ROUTINE TAKE-A-CHIP-FCN ()\n\t <COND (<VERB? TAKE PUT MOVE RAISE\n\t\t       PULL-UP MUNG PUT>\n\t\t<TELL\n\"Be serious. Have you any acquaintance with particle physics? How about quarks?\nKnow anything about quarks? Let me put it to you this way: There are more\npieces of plaster dust and chips here than you have seconds in your life.\" CR>\n\t\t<RTRUE>)>>"
  },
  "ANNEX-BEAM-MOVER": {
   "name": "ANNEX-BEAM-MOVER",
   "file": "ante.zil",
   "line": 231,
   "endLine": 235,
   "source": "<ROUTINE ANNEX-BEAM-MOVER (RARG)\n\t <COND (<EQUAL? .RARG ,M-BEG ,M-ENTER ,M-LOOK>\n\t\t<COND (<EQUAL? ,BEAM-PLACED 2 3>\n\t\t       <MOVE ,BEAM ,HERE>)>)>\n\t <RFALSE>>"
  },
  "SEAM-FCN": {
   "name": "SEAM-FCN",
   "file": "ante.zil",
   "line": 256,
   "endLine": 271,
   "source": "<ROUTINE SEAM-FCN ()\n\t <COND (<AND <EQUAL? ,PRSO ,SLAB-SEAM>\n\t\t     <NOT <FSET? ,SLAB ,SURFACEBIT>>>\n\t\t<TELL \"I see no seam here.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL\n\"The seam is barely visible. It goes into the edge of the slab no more than an\neighth of an inch.\" CR>)\n\t       (<AND <VERB? PUT PUT-ACROSS PUT-ON>\n\t\t     <PRSI? ,SLAB-SEAM>>\n\t\t<TELL \"It's not deep enough to wedge anything into it.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,SLAB-SEAM>\n\t\t<RTRUE>)>>"
  },
  "OPEN-SLAB-FCN": {
   "name": "OPEN-SLAB-FCN",
   "file": "ante.zil",
   "line": 273,
   "endLine": 300,
   "source": "<ROUTINE OPEN-SLAB-FCN (\"AUX\" (FLG <>))\n\t <COND (<VERB? OPEN RAISE MOVE>\n\t\t<COND (<NOT <FSET? ,SLAB ,SURFACEBIT>>\n\t\t       <TELL \"It's already open.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <IN? ,ISIS-JEWEL ,HOLE-3>\n\t\t\t    <IN? ,NEPHTH-JEWEL ,HOLE-1>\n\t\t\t    <IN? ,SELKIS-JEWEL ,HOLE-2>\n\t\t\t    <IN? ,NEITH-JEWEL ,HOLE-4>>\n\t\t       <TBL-TO-INSIDE ,SLAB ,SLAB-TBL\n\"The slab opens slowly and gracefully as if some internal mechanism balanced\nits huge weight.\">\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"It won't budge.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? CLOSE>\n\t\t     <NOT <FSET? ,SLAB ,SURFACEBIT>>>\n\t\t<COND (<AND <IN? ,TORCH ,SLAB>\n\t\t\t    <FLAMING? ,TORCH>>\n\t\t       <SET FLG T>)>\n\t        <INSIDE-OBJ-TO ,SLAB-TBL ,SLAB>\n\t\t<COND (.FLG\n\t\t       <KILL-TORCH T>)>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<DESCRIBE-SLAB-FCN ,M-OBJDESC>\n\t\t<RTRUE>)>>"
  },
  "HOLEY": {
   "name": "HOLEY",
   "file": "ante.zil",
   "line": 306,
   "endLine": 316,
   "source": "<ROUTINE HOLEY (H \"OPTIONAL\" (X? <>) \"AUX\" OBJ)\n\t <SET OBJ <FIRST? .H>>\n\t <COND (<NOT .OBJ>\n\t\t<COND (<EQUAL? .X? T>\n\t\t       <TELL \" The \" D .H \" is empty.\">\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RTRUE>)>)>\n\t <TELL \" Sitting in the \" D .H \" is a\">\n\t <VOWEL? .OBJ>\n\t <TELL D .OBJ \".\">>"
  },
  "DESCRIBE-SLAB-FCN": {
   "name": "DESCRIBE-SLAB-FCN",
   "file": "ante.zil",
   "line": 318,
   "endLine": 345,
   "source": "<ROUTINE DESCRIBE-SLAB-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-OBJDESC>\n\t\t<TELL\n\"Sitting in the middle of this room is a huge stone slab.\">\n\t <COND (<FSET? ,SLAB ,SURFACEBIT>\n\t\t<TELL\n\" Around its side runs a seam which is barely detectable. On top of the slab\nare four round holes, one in each corner.\">\n\t\t<HOLEY ,HOLE-1>\n\t\t<HOLEY ,HOLE-2>\n\t\t<HOLEY ,HOLE-3>\n\t\t<HOLEY ,HOLE-4>\n\t\t<COND (<FIRST? ,SLAB>\n\t\t       <TELL \" Sitting on the top of the slab \">\n\t\t       <COND (<G? <CCOUNT ,SLAB> 1>\n\t\t\t      <TELL \"are \">)\n\t\t\t     (T <TELL \"is \">)>\n\t\t       <PRINT-CONTENTS ,SLAB>\n\t\t       <TELL \".\">)>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (T <TELL \" The slab is open\">\n\t\t<COND (<FIRST? ,SLAB>\n\t\t       <TELL \" and holds \">\n\t\t       <PRINT-CONTENTS ,SLAB>)\n\t\t      (T <TELL \" and quite empty\">)>\n\t\t<TELL \".\" CR>\n\t\t<RTRUE>)>)>>"
  },
  "D-HOLE-FCN": {
   "name": "D-HOLE-FCN",
   "file": "ante.zil",
   "line": 391,
   "endLine": 400,
   "source": "<ROUTINE D-HOLE-FCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <OR <EQUAL? <LOC ,PRSO> ,HOLE-1 ,HOLE-2>\n\t\t\t <EQUAL? <LOC ,PRSO> ,HOLE-3 ,HOLE-4>>>\n\t\t<COND (<ITAKE>\n\t\t       <FCLEAR ,PRSO ,NDESCBIT>\n\t\t       <TELL \"Taken.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RTRUE>)>)>>"
  },
  "DIAMOND-HOLE-FCN": {
   "name": "DIAMOND-HOLE-FCN",
   "file": "ante.zil",
   "line": 402,
   "endLine": 443,
   "source": "<ROUTINE DIAMOND-HOLE-FCN (\"AUX\" (FLG <>))\n\t <COND (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <OR <PRSO? ,HOLE-1 ,HOLE-2 ,HOLE-3>\n\t\t\t <PRSO? ,HOLE-4>>>\n\t\t<TELL \"The hole sits in the \">\n\t\t<COND (<EQUAL? ,PRSO ,HOLE-1>\n\t\t       <TELL \"northwest\">)\n\t\t      (<EQUAL? ,PRSO ,HOLE-2>\n\t\t       <TELL \"northeast\">)\n\t\t      (<EQUAL? ,PRSO ,HOLE-3>\n\t\t       <TELL \"southwest\">)\n\t\t      (T <TELL \"southeast\">)>\n\t\t<TELL \" corner of the slab.\">\n\t\t<HOLEY ,PRSO T>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT>\n\t\t     <OR <PRSI? ,HOLE-1 ,HOLE-2 ,HOLE-3>\n\t\t\t <PRSI? ,HOLE-4>>>\n\t\t<COND (<FIRST? ,PRSI>\n\t\t       <TELL \"The hole is already filled.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <PRSI? ,HOLE-1>\n\t\t\t    <PRSO? ,NEPHTH-JEWEL>>\n\t\t       <SET FLG T>)\n\t\t      (<AND <PRSI? ,HOLE-2>\n\t\t\t    <PRSO? ,SELKIS-JEWEL>>\n\t\t       <SET FLG T>)\n\t\t      (<AND <PRSI? ,HOLE-3>\n\t\t\t    <PRSO? ,ISIS-JEWEL>>\n\t\t       <SET FLG T>)\n\t\t      (<AND <PRSI? ,HOLE-4>\n\t\t\t    <PRSO? ,NEITH-JEWEL>>\n\t\t       <SET FLG T>)>\n\t\t<FSET ,PRSO ,NDESCBIT>\n\t\t<COND (<NOT .FLG>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TELL \n\"Done. A light click comes from beneath the corner.\" CR>\n\t\t       <MOVE ,PRSO ,PRSI>\n\t\t       <RTRUE>)>)>>"
  },
  "BURIAL-CHAMBER-DESC": {
   "name": "BURIAL-CHAMBER-DESC",
   "file": "ante.zil",
   "line": 455,
   "endLine": 510,
   "source": "<ROUTINE BURIAL-CHAMBER-DESC (RARG \"AUX\" (OFFSET -1) (HOLDING 0) TEMP-HOLD)\n\t <COND (<EQUAL? .RARG ,M-BEG ,M-LOOK ,M-ENTER>\n\t\t<COND (<AND <EQUAL? <LOC ,BEAM> ,BURIAL-CHAMBER \n\t\t\t\t    ,NORTH-ANTECHAMBER>\n\t\t\t    ,BEAM-PLACED>\n\t\t       <MOVE ,BEAM ,HERE>)>)>\n\t <COND (<NOT <EQUAL? .RARG ,M-LOOK>>\n\t\t<RFALSE>)>\n\t <TELL\n\"You have entered the Chamber of Departure Towards the Funeral Destinies, the\nBurial Chamber. There is a doorway leading into a small room off to the east.\nIn the middle of the chamber, stretching almost from wall to wall, is a huge,\nancient sarcophagus. Its cover is composed of pure quartz and through the\nshining light you can see the golden, gleaming mummiform coffin. \">\n\t <DESCRIBE-COVER>\n\t <REPEAT ()\n\t\t <SET OFFSET <+ .OFFSET 1>>\n\t\t <COND (<G? .OFFSET 3>\n\t\t\t<RETURN>)\n\t\t       (<FSET? <GET ,STATUE-TBL .OFFSET> ,CLAMPBIT>\n\t\t\t<SET HOLDING <+ .HOLDING 1>>)>>\n\t <TELL\n\" Four statues surround the sarcophagus, one in each corner: Isis, Nephthys,\nNeith and Selkis. \">\n\t <COND (<EQUAL? .HOLDING 4>\n\t\t<TELL \n\"Their outstretched arms clamp down tightly on the quartz cover.\" CR>\n\t\t<RTRUE>)\n\t       (<0? .HOLDING>\n\t\t<TELL\n\"All four statues face away from the quartz cover, their grip on it released.\" CR>\n\t\t<RTRUE>)>\n\t <SET OFFSET -1>\n\t <SET TEMP-HOLD .HOLDING>\n\t <REPEAT ()\n\t\t <COND (<0? .HOLDING>\n\t\t\t<RETURN>)\n\t\t       (ELSE\n\t\t\t<SET OFFSET <+ .OFFSET 1>>\n\t\t\t<COND (<FSET? <GET ,STATUE-TBL .OFFSET> ,CLAMPBIT>\n\t\t\t       <TELL <GET ,STATUE-NAME-TBL .OFFSET>>\n\t\t\t       <COND (<G? .HOLDING 2>\n\t\t\t\t      <TELL \", \">)\n\t\t\t\t     (<G? .HOLDING 1>\n\t\t\t\t      <TELL \" and \">)>\n\t\t\t       <SET HOLDING <- .HOLDING 1>>)>)>>\n\t <COND (<G? .TEMP-HOLD 1>\n\t\t<TELL \" are \">)\n\t       (T <TELL \" is \">)>\n\t <TELL \"facing inward, \">\n\t <COND (<G? .TEMP-HOLD 1>\n\t\t<TELL \"their\">)\n\t       (T <TELL \"its\">)>\n\t <TELL \n\" heavy arms clamping down tightly over the quartz cover of the\nsarcophagus.\" CR>>"
  },
  "SCARAB-TABLE-F": {
   "name": "SCARAB-TABLE-F",
   "file": "ante.zil",
   "line": 532,
   "endLine": 535,
   "source": "<ROUTINE SCARAB-TABLE-F ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<PROB-DESC 15>\n\t\t<RTRUE>)>>"
  },
  "DISC-CONTFCN": {
   "name": "DISC-CONTFCN",
   "file": "ante.zil",
   "line": 537,
   "endLine": 545,
   "source": "<ROUTINE DISC-CONTFCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <EQUAL? <LOC ,PRSO> ,LEFT-DISC ,RIGHT-DISC>\n\t\t     <NOT <IN? ,SCARAB ,MID-DISC>>>\n\t\t<JIGS-UP\n\"You should have left well enough alone. As you pick it up, the discs go wildly\nout of balance and, before you realize what you've done, the ceiling comes down\nto meet the floor. Unfortunately, you were between them at the time.\">\n\t\t<RFATAL>)>>"
  },
  "PUSH-DISC-FCN": {
   "name": "PUSH-DISC-FCN",
   "file": "ante.zil",
   "line": 576,
   "endLine": 602,
   "source": "<ROUTINE PUSH-DISC-FCN (\"AUX\" LEFT-STATUS RIGHT-STATUS L-WEIGHT R-WEIGHT)\n\t <COND (<NOT <EQUAL? ,PRSO ,LEFT-DISC ,RIGHT-DISC ,MID-DISC>>\n\t\t<RFALSE>)\n\t       (<VERB? PUSH MOVE>\n\t\t<TELL \n\"The discs float up and down several times until they come back into balance.\"\n\t\t      CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<SET LEFT-STATUS <FIRST? ,LEFT-DISC>>\n\t\t<SET RIGHT-STATUS <FIRST? ,RIGHT-DISC>>\n\t\t<COND (.LEFT-STATUS\n\t\t       <SET L-WEIGHT <WEIGHT .LEFT-STATUS>>)>\n\t\t<COND (.RIGHT-STATUS\n\t\t       <SET R-WEIGHT <WEIGHT .RIGHT-STATUS>>)>\n\t\t<COND (<PRSO? ,LEFT-DISC>\n\t\t       <TELL-ABOUT ,LEFT-DISC .L-WEIGHT .R-WEIGHT>\n\t\t       <CRLF>)\n\t\t      (<PRSO? ,MID-DISC>\n\t\t       <TELL-ABOUT ,MID-DISC .L-WEIGHT .R-WEIGHT>\n\t\t       <CRLF>)\n\t\t      (T\n\t\t       <TELL-ABOUT ,RIGHT-DISC .R-WEIGHT .L-WEIGHT>)>\n\t\t<RTRUE>)>>"
  },
  "PROB-DESC": {
   "name": "PROB-DESC",
   "file": "ante.zil",
   "line": 604,
   "endLine": 622,
   "source": "<ROUTINE PROB-DESC\n\t (RARG \"AUX\" LEFT-STATUS RIGHT-STATUS (L-WEIGHT 0) (R-WEIGHT 0))\n\t <COND (<NOT <EQUAL? .RARG ,M-OBJDESC 15>>\n\t\t<RFALSE>)>\n\t <SET LEFT-STATUS <FIRST? ,LEFT-DISC>>\n\t <SET RIGHT-STATUS <FIRST? ,RIGHT-DISC>>\n\t <COND (.LEFT-STATUS\n\t\t<SET L-WEIGHT <WEIGHT .LEFT-STATUS>>)>\n\t <COND (.RIGHT-STATUS\n\t\t<SET R-WEIGHT <WEIGHT .RIGHT-STATUS>>)>\n\t <COND (<EQUAL? .RARG ,M-OBJDESC>\n\t\t<TELL\n\"In the room is a large, granite table. Cut out from the top of this table are\nthree circles of polished granite. \">)>\n\t <TELL-ABOUT ,LEFT-DISC .L-WEIGHT .R-WEIGHT>\n\t <TELL \" \">\n\t <TELL-ABOUT ,MID-DISC .L-WEIGHT .R-WEIGHT>\n\t <TELL \" \">\n\t <TELL-ABOUT ,RIGHT-DISC .R-WEIGHT .L-WEIGHT>>"
  },
  "TELL-ABOUT": {
   "name": "TELL-ABOUT",
   "file": "ante.zil",
   "line": 624,
   "endLine": 677,
   "source": "<ROUTINE TELL-ABOUT (DISC W-1 W-2 \"AUX\" (BALANCED <>) (SAFE <>) (EMPTY <>)\n\t\t     OBJ OFFSET POSITION INCHES)\n\t <SET POSITION \"even with\">\n\t <COND (<AND <0? .W-1>\n\t\t     <0? .W-2>>\n\t\t<SET EMPTY T>)>\n\t <COND (<NOT <FIRST? .DISC>>\n\t\t<TELL \"The \" D .DISC \" is empty, and it is \">)\n\t       (T\n\t\t<SET OBJ <FIRST? .DISC>>\n\t\t<TELL \"Sitting on the \" D .DISC \" is a\">\n\t\t<VOWEL? .OBJ>\n\t\t<TELL D .OBJ \", and the \" D .DISC \" is \">)>\n\t <COND (<AND <EQUAL? .W-2 .W-1>\n\t\t     <NOT .EMPTY>>\n\t\t<SET BALANCED T>)>\n\t <COND (.BALANCED\n\t\t<COND (<EQUAL? .W-1 8>\n\t\t       <SET SAFE T>)>)>\n\t <COND (<G? .W-1 .W-2>\n\t\t<SET POSITION \"below\">)\n\t       (<G? .W-2 .W-1>\n\t\t<SET POSITION \"above\">)\n\t       (.EMPTY\n\t\t<SET POSITION \"above\">)\n\t       (<AND .BALANCED\n\t\t     <NOT .SAFE>>\n\t\t<SET POSITION \"below\">)>\n\t <COND (<AND <NOT .BALANCED>\n\t\t     <NOT .EMPTY>>\n\t\t<SET OFFSET <ABS <- .W-1 .W-2>>>)\n\t       (.EMPTY\n\t\t<SET OFFSET 1>)\n\t       (<NOT .SAFE>\n\t\t<SET OFFSET <ABS <- .W-1 8>>>)>\n\t <COND (.SAFE\n\t\t<SET INCHES \"exactly\">)\n\t       (<G? .OFFSET 8>\n\t\t<SET INCHES \"9 inches\">)\n\t       (T\n\t\t<SET INCHES <GET ,INCH-LTBL .OFFSET>>)>\n\t <COND (<EQUAL? .DISC ,MID-DISC>\n\t\t<COND (<AND .SAFE\n\t\t\t    <FIRST? .DISC>>\n\t\t       <TELL \"slightly above\">)\n\t\t      (<FIRST? .DISC>\n\t\t       <TELL \"slightly below\">)\n\t\t      (T\n\t\t       <TELL \"exactly even with\">)>)\n\t       (<EQUAL? .DISC ,LEFT-DISC ,RIGHT-DISC>\n\t\t<TELL .INCHES \" \" .POSITION>)>\n\t <TELL \" the top of the table.\">\n\t <COND (<EQUAL? .DISC ,RIGHT-DISC>\n\t\t<CRLF>)>>"
  },
  "JERRY-HACK-F": {
   "name": "JERRY-HACK-F",
   "file": "ante.zil",
   "line": 750,
   "endLine": 756,
   "source": "<ROUTINE JERRY-HACK-F ()\n\t <COND (<FSET? ,INNER-DOOR ,OPENBIT>\n\t\t<RETURN ,MID-ANTECHAMBER>)\n\t       (T\n\t\t<TELL \"You can't walk through a closed door.\" CR>\n\t\t<THIS-IS-IT ,INNER-DOOR>\n\t\t<RFALSE>)>>"
  },
  "NICHE-F": {
   "name": "NICHE-F",
   "file": "ante.zil",
   "line": 770,
   "endLine": 778,
   "source": "<ROUTINE NICHE-F ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL <GETP ,NICHES ,P?TEXT>>\n\t\t<COND (<EQUAL? ,BEAM-PLACED 1>\n\t\t       <TELL \" Resting in the niches is the wooden beam.\">)>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>)>>"
  },
  "PLASTER1-FCN": {
   "name": "PLASTER1-FCN",
   "file": "ante.zil",
   "line": 788,
   "endLine": 821,
   "source": "<ROUTINE PLASTER1-FCN ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"Some hieroglyphics on the plaster say:|\n\">\n\t\t<PLASTER1-GLYPHS>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE MUNG ATTACK>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <COND (<IN? ,PICK-AXE ,WINNER>\n\t\t\t      <SETG PRSI ,PICK-AXE>)\n\t\t\t     (<IN? ,SHOVEL ,WINNER>\n\t\t\t      <SETG PRSI ,SHOVEL>)\n\t\t\t     (ELSE\n\t\t\t      <SETG PRSI ,HANDS>)>\n\t\t       <TELL \"(with your \" D ,PRSI \")\" CR>)>\n\t\t<COND (<PRSI? ,PICK-AXE>\n\t\t       <REMOVE ,PLASTER1>\n\t\t       <SETG P-IT-LOC <>>\n\t\t       <MOVE ,PLASTER ,WEST-END-OF-PASSAGE>\n\t\t       <SETG SCORE <+ ,SCORE 10>>\n\t\t       <TELL\n\"The chips fly where they may as you relentlessly flail at the plaster with\nyour trusty pick axe. In just a few minutes you manage to clear all the\nplaster from the doorway.\" CR>\n\t\t       <SETG PLASTER-GONE T>\n\t\t       <PUTP ,STAIRS-BOTTOM ,P?LDESC\n\"You are at the bottom of the sixteen-step stairway. The stairway goes up to\nthe east, while the way to the west has been cleared.\">\n\t\t       <MOVE ,CHIPS1 ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T <TELL\n\"You scratch at the plaster but accomplish little.\"\n                          CR>)>)>>"
  },
  "INNER-DOOR-FCN": {
   "name": "INNER-DOOR-FCN",
   "file": "ante.zil",
   "line": 831,
   "endLine": 854,
   "source": "<ROUTINE INNER-DOOR-FCN ()\n\t <COND (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <IN? ,PLASTER ,HERE>>\n\t\t<TELL \n\"The door is surrounded by a heavy timber frame and is entirely blocked up\nwith plaster. There are some hieroglyphs on the plaster.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It's already open.\" CR>\n\t\t       <RTRUE>)\n\t\t      (,INNER-DOOR-SEALED\n\t\t       <TELL \"The door is covered with plaster, which is in turn covered with hieroglyphs.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The door opens and you are overwhelmed by a musky odor.\" CR>\n\t\t       <FSET ,INNER-DOOR ,OPENBIT>\n\t\t       <RTRUE>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<NOT <FSET? ,INNER-DOOR ,OPENBIT>>\n\t\t       <TELL \"It isn't open.\" CR>)\n\t\t      (T <TELL\n\"Okay. The door is closed.\" CR>\n\t\t       <FCLEAR ,INNER-DOOR ,OPENBIT>)>)>>"
  },
  "PLASTER-FCN": {
   "name": "PLASTER-FCN",
   "file": "ante.zil",
   "line": 874,
   "endLine": 914,
   "source": "<ROUTINE PLASTER-FCN (\"AUX\" (FLG <>))\n\t <COND (<VERB? TAKE MUNG ATTACK>\n\t\t<COND (<NOT ,PRSI>\n\t\t       <SET FLG T>\n\t\t       <COND (<IN? ,PICK-AXE ,WINNER>\n\t\t\t      <SETG PRSI ,PICK-AXE>)\n\t\t\t     (<IN? ,SHOVEL ,WINNER>\n\t\t\t      <SETG PRSI ,SHOVEL>)\n\t\t\t     (T\n\t\t\t      <SETG PRSI ,HANDS>)>)>\n\t\t<COND (.FLG\n\t\t       <TELL \"(with your \" D ,PRSI \")\" CR>)>\n\t\t<COND (<EQUAL? ,PRSI ,PICK-AXE>\n\t\t       <COND (<NOT ,BEAM-PLACED>\n\t\t\t      <JIGS-UP ,DEATH-BEAM-STR>)\n\t\t\t     (<NOT ,ON-BEAM>\n\t\t\t      <TELL ,DEATH-BEAM-STR>\n\t\t\t      <JIGS-UP\n\t\t\t       \" You wave to the beam stretching across the gap as you hurtle past it.\">) \n\t\t\t     (T\n\t\t\t      <TELL\n\"The plaster chips fly from the door as the incessant tapping of your pick\naxe does its work. The tapping has started some sand flowing out of\nthe bottom of the doorway and the floor starts to give away. In a few\nshort moments, the floor has disappeared, but thankfully you're safe while\nstanding on the beam.\" CR>\n\t\t\t      <SETG INNER-DOOR-SEALED <>>\n\t\t\t      <REMOVE ,PLASTER>\n\t\t\t      <SETG P-IT-LOC <>>\n\t\t\t      <FCLEAR ,PIT ,INVISIBLE>\n\t\t\t      <DUMP-ALL-ON-GROUND>\n\t\t\t      <SETG SCORE <+ ,SCORE 25>>\n\t\t\t      <PUTP ,HERE ,P?LDESC\n\"You are in the west end of the passage. The plaster has been cleared, allowing\npassage to the west.\">\n\t\t\t      <THIS-IS-IT ,INNER-DOOR>\n\t\t\t      <MOVE ,CHIPS2 ,HERE>\n\t\t\t      <RTRUE>)>)\n\t\t      (T <TELL\n\t\t\t  \"You scratch at the plaster but accomplish little.\"\n\t\t\t  CR>)>)>>"
  },
  "NORTH-ANTE-DOOR-FCN": {
   "name": "NORTH-ANTE-DOOR-FCN",
   "file": "ante.zil",
   "line": 924,
   "endLine": 958,
   "source": "<ROUTINE NORTH-ANTE-DOOR-FCN ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<FSET? ,BURIAL-CHAMBER ,RMUNGBIT>\n\t\t       <TELL\n\"It's buried behind 3 tons of stones. Forget it.\" CR>)\n\t\t      (T <TELL \n\"The door is surrounded by small seals and has a hieroglyph on it.\" CR>)>)\n\t       (<VERB? OPEN>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It's already open.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<FSET? ,BURIAL-CHAMBER ,RMUNGBIT>\n\t\t       <TELL\n\"With all the stones which fell in the doorway, there's not a chance of ever\ngetting through again.\" CR>\n\t\t       <RTRUE>)\n\t\t      (,ANTE-SEAL\n\t\t       <TELL\n\"I don't think it's that simple. Not only isn't there a doorknob, but the door\nis also covered with a seal.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The door creaks open and you are assaulted by a deep, musty dead smell.\" CR>\n\t\t       <FSET ,NORTH-ANTE-DOOR ,OPENBIT>\n\t\t       <SETG SCORE <+ ,SCORE 40>>\n\t\t       <RTRUE>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<NOT <FSET? ,NORTH-ANTE-DOOR ,OPENBIT>>\n\t\t       <TELL \"It isn't open.\" CR>)\n\t\t      (T <TELL\n\"Closing the door isn't the best of ideas.\" CR>)>)\n\t       (<AND <VERB? READ>\n\t\t     <NOT <FSET? ,NORTH-ANTE-DOOR ,OPENBIT>>>\n\t\t<PERFORM ,V?READ ,HIEROGLYPHS>\n\t\t<RTRUE>)>>"
  },
  "ANNEX-DOOR-FCN": {
   "name": "ANNEX-DOOR-FCN",
   "file": "ante.zil",
   "line": 974,
   "endLine": 1003,
   "source": "<ROUTINE ANNEX-DOOR-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It's already open.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND ,BEAM-PLACED\n\t\t\t    <IN? ,BEAM ,SOUTH-ANTECHAMBER>>\n\t\t       <TELL\n\"You open the door and two huge stones start to close in on you from either\nside. Thankfully, you had the foresight to wedge the beam in the doorway to\nprevent a flattening experience.\" CR>\n\t\t       <FSET ,ANNEX-DOOR ,OPENBIT>)\n\t\t      (ELSE\n\t\t       <JIGS-UP\n\"You open the door but before you can react, two huge stones close in on you --\none from the left side and one from the right side. Needless to say, you didn't\nquite make it...\">)>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <NOT <FSET? ,ANNEX-DOOR ,OPENBIT>>>\n\t\t<TELL\n\"This door seems to present no difficulty in opening. Lightly etched into it\nare some faint symbols.\" CR>)\n\t       (<AND <VERB? READ>\n\t\t     <NOT <FSET? ,ANNEX-DOOR ,OPENBIT>>>\n\t\t<PERFORM ,V?READ ,HIEROGLYPHS>\n\t\t<RTRUE>)\n\t       (<AND <VERB? CLOSE>\n\t\t     <FSET? ,ANNEX-DOOR ,OPENBIT>>\n\t\t<TELL \"Closing this door isn't a very good idea.\" CR>\n\t\t<RTRUE>)>>"
  },
  "TURN-STATUES-FCN": {
   "name": "TURN-STATUES-FCN",
   "file": "ante.zil",
   "line": 1043,
   "endLine": 1061,
   "source": "<ROUTINE TURN-STATUES-FCN (\"AUX\" (OFFSET 0))\n\t <COND (<VERB? TURN>\n\t\t<COND (<NOT ,CAN-TURN-STATUES>\n\t\t       <TELL \n\"Nothing happens. These statues seem to be beyond all hope.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D ,PRSO \" moves slowly, pivoting about its base, \">\n\t\t       <COND (<FSET? ,PRSO ,CLAMPBIT>\n\t\t\t      <FCLEAR ,PRSO ,CLAMPBIT>\n\t\t\t      <DO-THE-OFFSET>\n\t\t\t      <TELL\n \"releasing its hold on the quartz cover.\" CR>)\n\t\t\t     (T\n\t\t\t      <FSET ,PRSO ,CLAMPBIT>\n\t\t\t      <TELL\n\"once more clamping down on the quartz cover.\" CR>)>\n\t\t       <RTRUE>)>)>>"
  },
  "DO-THE-OFFSET": {
   "name": "DO-THE-OFFSET",
   "file": "ante.zil",
   "line": 1063,
   "endLine": 1074,
   "source": "<ROUTINE DO-THE-OFFSET (\"AUX\" (OFFSET 0))\n\t <REPEAT ()\n\t\t <COND (<EQUAL? .OFFSET 4>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET OFFSET <+ .OFFSET 1>>\n\t\t\t<COND (<EQUAL? <GET ,TURNED-LTBL .OFFSET> ,PRSO>\n\t\t\t       <RTRUE>)>)>>\n\t  <SETG TURN-OFFSET <+ ,TURN-OFFSET 1>>\n\t  <PUT ,TURNED-LTBL ,TURN-OFFSET ,PRSO>\n\t  <COND (<EQUAL? ,TURN-OFFSET 4>\n\t\t <ENABLE <QUEUE I-RESET-STATUES 1>>)>>"
  },
  "SARCOPH-FCN": {
   "name": "SARCOPH-FCN",
   "file": "ante.zil",
   "line": 1085,
   "endLine": 1097,
   "source": "<ROUTINE SARCOPH-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<PERFORM ,V?OPEN ,SARCOPH-COVER>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSI ,SARCOPH>>\n\t\t<TELL \"The \" D ,PRSO \" sits on the sarcophagus for a moment, but it quickly slides off its rounded top.\" CR>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<RFALSE>)>>"
  },
  "SETBIT-FCN": {
   "name": "SETBIT-FCN",
   "file": "ante.zil",
   "line": 1133,
   "endLine": 1162,
   "source": "<ROUTINE SETBIT-FCN (\"AUX\" OBJ)\n\t <COND (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,L-AREA ,S-AREA>\n\t\t     <FIRST? ,PRSI>>\n\t\t<TELL \"There's already something on it.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,L-AREA ,S-AREA>\n\t\t     <EQUAL? ,PRSO ,BEAM>>\n\t\t<TELL\n\"I don't think the beam would fit in there. It's a little too long.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,L-AREA ,S-AREA>>\n\t\t<FSET ,PRSO ,NDESCBIT>\n\t\t<RFALSE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL \n\"The area is recessed about an inch below the quartz cover.\"\nCR>\n\t\t<COND (<SET OBJ <FIRST? ,PRSO>>\n\t\t       <TELL \"Sitting in the \" D ,PRSO \" is a\">\n\t\t       <VOWEL? .OBJ>\n\t\t       <TELL D .OBJ \".\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is empty.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "RECESS-CONTFCN": {
   "name": "RECESS-CONTFCN",
   "file": "ante.zil",
   "line": 1164,
   "endLine": 1168,
   "source": "<ROUTINE RECESS-CONTFCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <EQUAL? <LOC ,PRSO> ,S-AREA ,L-AREA>>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<RFALSE>)>>"
  },
  "DESCRIBE-COVER": {
   "name": "DESCRIBE-COVER",
   "file": "ante.zil",
   "line": 1170,
   "endLine": 1181,
   "source": "<ROUTINE DESCRIBE-COVER (\"AUX\" S-OBJ L-OBJ)\n\t <TELL \n\"There is a small recess and a large recess on the top of the cover which you\ncan make out as thin, outlined areas.\">\n\t <SET S-OBJ <FIRST? ,S-AREA>>\n\t <SET L-OBJ <FIRST? ,L-AREA>>\n\t <COND (.S-OBJ\n\t\t<TELL \" Resting in the smaller recess is a\">\n\t\t<VOWEL? .S-OBJ>\n\t\t<TELL D .S-OBJ \".\">)>\n\t <COND (.L-OBJ\n\t\t<TELL \" Sitting in the larger recess is the \" D .L-OBJ \".\">)>>"
  },
  "SARCOPH-COVER-FCN": {
   "name": "SARCOPH-COVER-FCN",
   "file": "ante.zil",
   "line": 1183,
   "endLine": 1216,
   "source": "<ROUTINE SARCOPH-COVER-FCN (\"AUX\" STR (COUNTER 0) (OFFS -1))\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<DESCRIBE-COVER>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,SARCOPH-COVER>>\n\t\t<TELL \"You place the \" D ,PRSO \" on the cover, but it slides\nright off onto the ground.\" CR>\n\t\t<MOVE ,PRSO ,HERE>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<RTRUE>)\n\t       (<AND <VERB? OPEN MOVE>\n\t\t     <NOT ,STATUES-SET>>\n\t\t<SET STR \"a single statue.\">\n\t\t<REPEAT ()\n\t\t\t<SET OFFS <+ .OFFS 1>>\n\t\t\t<COND (<G? .OFFS 3>\n\t\t\t       <RETURN>)\n\t\t\t      (<FSET? <GET ,STATUE-TBL .OFFS> ,CLAMPBIT>\n\t\t\t       <SET COUNTER <+ .COUNTER 1>>)>>\n\t\t<COND (<G? .COUNTER 1>\n\t\t       <SET STR \"the statues.\">)>\n\t\t<TELL\n\"You tug, push, pull, yank and generally tire yourself out trying to open the\ncover until you take a moment, wipe your brow, and look around. You notice that\nthe cover is being held in place by \" .STR CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? OPEN MOVE>\n\t\t     ,STATUES-SET>\n\t\t<ENDING>\n\t\t<CRLF>\n\t\t<FINISH>)>>"
  },
  "SCARAB-CHECK-FCN": {
   "name": "SCARAB-CHECK-FCN",
   "file": "ante.zil",
   "line": 1223,
   "endLine": 1276,
   "source": "<ROUTINE SCARAB-CHECK-FCN (\"AUX\" L-W R-W (L-OBJ <>) (R-OBJ <>))\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"Etched onto its back is the following:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n              >*>|\n\">\n\t\t<FIXED-FONT-OFF>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE>\n\t\t<SETG CAN-TURN-STATUES <>>\n\t\t<SET L-OBJ <FIRST? ,LEFT-DISC>>\n\t\t<SET R-OBJ <FIRST? ,RIGHT-DISC>>\n\t\t<COND (<IN? ,SCARAB ,MID-DISC>\n\t\t       <COND (<OR <NOT .L-OBJ>\n\t\t\t\t  <NOT .R-OBJ>>\n\t\t\t      <JIGS-UP ,SCARAB-DEATH-STR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <SET L-W <WEIGHT .L-OBJ>>\n\t\t\t      <SET R-W <WEIGHT .R-OBJ>>\n\t\t\t      <COND (<AND <EQUAL? .L-W 8>\n\t\t\t\t\t  <EQUAL? .R-W 8>>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <JIGS-UP ,SCARAB-DEATH-STR>)>)>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <IN? ,SCARAB ,MID-DISC>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,S-AREA ,L-AREA>\n\t\t     <FIRST? ,PRSI>>\n\t\t<TELL \"There's already something on it.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? MOVE>\n\t\t<TELL\n\"You'd better not. Not until you know what's going on here.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,S-AREA>>\n\t\t<MOVE ,SCARAB ,S-AREA>\n\t\t<TELL \"Done.\" CR>\n\t\t<FSET ,SCARAB ,NDESCBIT>\n\t\t<COND (<IN? ,DEAD-BOOK ,L-AREA>\n\t\t       <SETG CAN-TURN-STATUES T>\n\t\t       <TELL\n\"You hear a clicking sound come from beneath all of the statues as you place\nthe scarab within the smaller outlined area on the cover.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "PAGE-FCN": {
   "name": "PAGE-FCN",
   "file": "ante.zil",
   "line": 1307,
   "endLine": 1327,
   "source": "<ROUTINE PAGE-FCN ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"Hieroglyphs can be seen as follows:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n        =  .           !   !|\n<-*  #  =  -  #  !@!  !---!|\n|\n            .           !  !|\n::  #  >*>  -  #  !@!  !--!|\n\">\n\t\t<FIXED-FONT-OFF>\n\t\t<RTRUE>)\n\t       (<VERB? TURN>\n\t\t<TELL \"Unnecessary page turning may destroy the book.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? BURN>\n\t\t<PERFORM ,V?BURN ,DEAD-BOOK>)\n\t       >>"
  },
  "DEAD-BOOK-FCN": {
   "name": "DEAD-BOOK-FCN",
   "file": "ante.zil",
   "line": 1340,
   "endLine": 1398,
   "source": "<ROUTINE DEAD-BOOK-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<FCLEAR ,DEAD-BOOK ,NDESCBIT>\n\t\t<SETG CAN-TURN-STATUES <>>\n\t\t<RFALSE>)\n\t       (<AND <VERB? PUT>\n\t\t     <PRSI? ,DEAD-BOOK ,CRUMBLED-BOOK>>\n\t\t<TELL \"You'd do more damage putting things on the \" D ,PRSI \n\t\t      \" than it would be worth.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? READ EXAMINE>\n\t\t<COND (<NOT <FSET? ,DEAD-BOOK ,OPENBIT>>\n\t\t       <TELL \n\"The book isn't open. On the cover is the following, though:|\n\">\n\t\t       <FIXED-FONT-ON>\n\t\t       <TELL \"|\n       =|\n       =\" CR>\n\t\t       <FIXED-FONT-OFF>)\n\t\t      (T\n\t\t       <PERFORM ,V?READ ,PAGE>)>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN>\n\t\t<COND (<AND ,PRSI\n\t\t\t    <PRSI? ,SPATULA>>\n\t\t       <TELL\n\"You open the book carefully using the spatula. You can see some faint\nwriting on the page.\" CR>\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \n\"Oops! The ancient papyrus pages crumble due to your less-than-delicate touch.\" CR>\n\t\t       <MOVE ,CRUMBLED-BOOK <LOC ,DEAD-BOOK>>\n\t\t       <REMOVE ,DEAD-BOOK>\n\t\t       <THIS-IS-IT ,CRUMBLED-BOOK>\n\t\t       <FCLEAR ,CRUMBLED-BOOK ,INVISIBLE>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? READ>\n\t\t     <FSET? ,DEAD-BOOK ,OPENBIT>>\n\t\t<PERFORM ,V?READ ,PAGE>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,S-AREA ,L-AREA>\n\t\t     <FIRST? ,PRSI>>\n\t\t<TELL \"There's already something on it.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <PRSI? ,L-AREA>>\n\t\t<MOVE ,DEAD-BOOK ,L-AREA>\n\t\t<FSET ,DEAD-BOOK ,NDESCBIT>\n\t\t<TELL\n\"The book now rests in the larger area on the cover of the sarcophagus.\" CR>\n\t\t<COND (<IN? ,SCARAB ,S-AREA>\n\t\t       <SETG CAN-TURN-STATUES T>\n\t\t       <TELL\n\"From beneath each of the four statues there comes a loud click.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "ENDING": {
   "name": "ENDING",
   "file": "ante.zil",
   "line": 1409,
   "endLine": 1430,
   "source": "<ROUTINE ENDING ()\n\t <TELL\n\"You lift the cover with great care, and in an instant you see all your dreams\ncome true. The interior of the sarcophagus is lined with gold, inset with\njewels, glistening in your torchlight. The riches and their dazzling beauty\noverwhelm you. You take a deep breath, amazed that all of this is yours. You\ntremble with excitement, then realize the ground beneath your feet is\ntrembling, too.|\n|\nAs a knife cuts through butter, this realization cuts through your mind,\nmakes your hands shake and cold sweat appear on your forehead. The Burial\nChamber is collapsing, the walls closing in. You will never get out of this\npyramid alive. You earned this treasure. But it cost you your life.|\n|\nAnd as you sit there, gazing into the glistening wealth of the inner\nsarcophagus, you can't help but feel a little empty, a little foolish.\nIf someone were on the other side of the quickly-collapsing wall, they could\nhave dug you out. If only you'd treated the workers better. If only you'd cut\nCraige in on the find. If only you'd hired a reliable guide.|\n|\nWell, someday, someone will discover your bones here. And then you\nwill get your fame.\" CR>>"
  },
  "DUMP-ALL-ON-GROUND": {
   "name": "DUMP-ALL-ON-GROUND",
   "file": "ante.zil",
   "line": 1432,
   "endLine": 1457,
   "source": "<ROUTINE DUMP-ALL-ON-GROUND (\"AUX\" L LOCB N F (FLG <>))\n\t <SET L <LOC ,WINNER>>\n\t <REMOVE ,WINNER>\n\t <REMOVE ,INNER-DOOR>\n\t <REMOVE ,NICHES>\n\t <REMOVE ,LINTEL>\n\t <COND (,BEAM-PLACED\n\t\t<SET LOCB <LOC ,BEAM>>\n\t\t<REMOVE ,BEAM>)>\n\t <SET F <FIRST? ,HERE>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET N .F>\n\t\t\t<SET F <NEXT? .N>>\n\t\t\t<REMOVE .N>\n\t\t\t<SET FLG T>)>>\n\t <COND (.FLG\n\t\t<TELL CR \"Everything on the floor falls into the pit.\" CR>)>\n\t <MOVE ,WINNER .L>\n\t <COND (.LOCB\n\t\t<MOVE ,BEAM .LOCB>)>\n\t <MOVE ,INNER-DOOR ,WEST-END-OF-PASSAGE>\n\t <MOVE ,NICHES ,WEST-END-OF-PASSAGE>\n\t <MOVE ,LINTEL ,WEST-END-OF-PASSAGE>>"
  },
  "MOVE-THE-PLANK-FCN": {
   "name": "MOVE-THE-PLANK-FCN",
   "file": "barge.zil",
   "line": 60,
   "endLine": 65,
   "source": "<ROUTINE MOVE-THE-PLANK-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<OR <NOT <FSET? ,PLANK ,TOUCHBIT>>\n\t\t\t   <IN? ,PLANK ,BARGE-CENTER>> \n\t\t       <MOVE ,PLANK ,HERE>)>\n\t\t<RFALSE>)>>"
  },
  "PLANK-FCN": {
   "name": "PLANK-FCN",
   "file": "barge.zil",
   "line": 209,
   "endLine": 214,
   "source": "<ROUTINE PLANK-FCN ()\n\t <COND (<VERB? TAKE MOVE>\n\t\t<TELL\n\"The plank is a permanent part of the barge. To remove it might create far more\ndestruction than you think.\" CR>\n\t\t<RTRUE>)>>"
  },
  "BURN-THE-BARGE": {
   "name": "BURN-THE-BARGE",
   "file": "barge.zil",
   "line": 221,
   "endLine": 258,
   "source": "<ROUTINE BURN-THE-BARGE (RARG)\n\t <COND (<EQUAL? .RARG ,M-END>\n\t\t<COND (<AND <VERB? DROP THROW>\n\t\t\t    <FLAMING? ,PRSO>>\n\t\t       <JIGS-UP ,BARGE-BURN-STR>\n\t\t       <RFATAL>)\n\t\t      (<AND <VERB? PUT>\n\t\t\t    <FLAMING? ,PRSO>\n\t\t\t    <EQUAL? <LOC ,PRSI> ,HERE>\n\t\t\t    <NOT <EQUAL? ,PRSI ,TORCH-HOLDER>>>\n\t\t       <JIGS-UP ,BARGE-BURN-STR>\n\t\t       <RFATAL>)>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <EQUAL? ,HERE ,BELOW-MAST>>\n\t\t<MOVE ,MAST-HOLE ,HERE>\n\t\t<COND (<NOT <FSET? ,BEAM ,TOUCHBIT>>\n\t\t       <PUTP ,BEAM ,P?FDESC\n\"Coming down through the hole above your head and ending in the slot at your\nfeet is the beam which served as a mast.\">\n\t\t       <COND (<NOT ,PUSHED-BEAM>\n\t\t\t      <MOVE ,BEAM ,SLOT>)>)>\n\t\t<RFALSE>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <EQUAL? ,HERE ,BARGE-CENTER>>\n\t\t<COND (<OR <NOT <FSET? ,PLANK ,TOUCHBIT>>\n\t\t\t   <IN? ,PLANK ,BARGE-ENTRANCE>> \n\t\t       <MOVE ,PLANK ,HERE>)>\n\t\t<MOVE ,MAST-HOLE ,HERE>\n\t\t<COND (<AND ,PUSHED-BEAM\n\t\t\t    <NOT <FSET? ,BEAM ,TOUCHBIT>>>\n\t\t       <PUTP ,BEAM ,P?FDESC\n\"Lying on the deck of the barge is a long wooden beam.\">)>\n\t\t<COND (<NOT ,PUSHED-BEAM>\n\t\t       <MOVE ,BEAM ,HERE>\n\t\t       <PUTP ,BEAM ,P?FDESC\n\"Before you, running down through a hole in the deck, is a sturdy beam made of\nwood. Although only a few feet of it rise above the deck, it was probably used\nat one time as a mast.\">)>)>>"
  },
  "MAST-HOLE-FCN": {
   "name": "MAST-HOLE-FCN",
   "file": "barge.zil",
   "line": 269,
   "endLine": 300,
   "source": "<ROUTINE MAST-HOLE-FCN ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? CLIMB-DOWN CLIMB-UP THROUGH>\n\t\t<COND (<NOT ,PUSHED-BEAM>\n\t\t       <TELL \"I think the mast hole is already being used.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You'd never squeeze through it.\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <NOT ,PUSHED-BEAM>>\n\t\t<TELL \"The mast is going through the hole.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT>\n\t\t     <PRSI? ,MAST-HOLE>\n\t\t     <NOT ,PUSHED-BEAM>>\n\t\t<TELL\n\"There isn't room for the \" D ,PRSO \" and the mast, too.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <PRSI? ,MAST-HOLE>\n\t\t     <VERB? PUT>>\n\t\t<COND (<EQUAL? ,HERE ,BARGE-CENTER>\n\t\t       <TELL \"The \" D ,PRSO \" drops through the hole.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You try to reach up that high, but fail. The \"\n\t\t\t     D ,PRSO \" falls to the deck.\" CR>)>\n\t\t<MOVE ,PRSO ,BELOW-MAST>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<COND (<FLAMING? ,PRSO>\n\t\t       <JIGS-UP ,BARGE-BURN-STR>)>\n\t\t<RTRUE>)>>"
  },
  "TORCH-HOLDER-FCN": {
   "name": "TORCH-HOLDER-FCN",
   "file": "barge.zil",
   "line": 311,
   "endLine": 318,
   "source": "<ROUTINE TORCH-HOLDER-FCN (\"AUX\" FROB)\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<HOW? ,TORCH-HOLDER>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<SET FROB <FIRST? ,PRSO>>\n\t\t       <TELL \"All I can see is a \" D .FROB \" in there.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Through the knothole is inky blackness.\" CR>)>)>>"
  },
  "SLOT-FCN": {
   "name": "SLOT-FCN",
   "file": "barge.zil",
   "line": 329,
   "endLine": 342,
   "source": "<ROUTINE SLOT-FCN ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<AND <IN? ,BEAM ,SLOT>\n\t\t\t    <FSET? ,SHIM ,NDESCBIT>>\n\t\t       <TELL\n\"A shim is wedged between the slot and the beam.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,BEAM ,SLOT>\n\t\t       <TELL \"The beam is resting in the slot.\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <RFALSE>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,SLOT>)>>"
  },
  "SHIM-FCN": {
   "name": "SHIM-FCN",
   "file": "barge.zil",
   "line": 355,
   "endLine": 362,
   "source": "<ROUTINE SHIM-FCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <FSET? ,SHIM ,NDESCBIT>>\n\t\t<COND (<ITAKE>\n\t\t       <TELL \"Taken.\" CR>\n\t\t       <FCLEAR ,SHIM ,NDESCBIT>\n\t\t       <FCLEAR ,SHIM ,DONTTAKE>)>\n\t\t<RTRUE>)>>"
  },
  "DROP-THE-BLOCKS": {
   "name": "DROP-THE-BLOCKS",
   "file": "barge.zil",
   "line": 396,
   "endLine": 407,
   "source": "<ROUTINE DROP-THE-BLOCKS ()\n\t <TELL\n\"When you remove the beam, you remove the only thing between you and three\ntons of solid rock, poised over your head. Knowing the situation, though, has\nsaved your life: you leap out of the way just in time.\" CR>\n\t <SETG BEAM-PLACED <>>\n\t <MUNG-ROOM ,BURIAL-CHAMBER\n\"The way into the Burial Chamber has been forever blocked by massive stones.\">\n\t <REMOVE ,NORTH-ANTE-DOOR>\n\t <SETG P-IT-LOC <>>\n\t <SETG ANTE-SEAL T>\n\t <REMOVE ,N-ANTE-SEAL>>"
  },
  "CLOSE-THE-ANNEX": {
   "name": "CLOSE-THE-ANNEX",
   "file": "barge.zil",
   "line": 409,
   "endLine": 422,
   "source": "<ROUTINE CLOSE-THE-ANNEX ()\n\t <MUNG-ROOM ,ANNEX\n\"The way into the Annex is forever blocked by huge, immovable stones.\">\n\t <TELL\n\"The doorway disappears behind two huge stones which slide horizontally from\nthe doorway. Luckily, you stepped out of their way just in time.\" CR>\n\t <SETG BEAM-PLACED <>>\n\t <REMOVE ,ROCKS>\n\t <PUTP ,SOUTH-ANTECHAMBER ,P?LDESC\n\"You are in the southern end of the Chamber of Eternal Royalty. From here you\ncan see the room stretching out towards the north. The south wall is painted to\nresemble large baskets of lotus flowers with their blue petals framing an image\nof the Sun God, Amun Ra. The west wall once held a door but is now forever\nblocked.\">>"
  },
  "SET-THE-BEAM": {
   "name": "SET-THE-BEAM",
   "file": "barge.zil",
   "line": 424,
   "endLine": 437,
   "source": "<ROUTINE SET-THE-BEAM (CASE)\n\t <COND (,BEAM-PLACED\n\t\t<COND (<EQUAL? ,BEAM-PLACED .CASE>\n\t\t       <TELL \"It's already been done.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<NOT <ITAKE>>\n\t\t       <RTRUE>)\n\t\t      (T <TELL \"(taken)\" CR>)>)>\n\t <TELL \"Consider it done.\" CR>\n\t <SETG BEAM-PLACED .CASE>\n\t <DESCRIBE-BEAM-FCN ,M-OBJDESC>\n\t <MOVE ,BEAM ,HERE>\n\t <COND (<EQUAL? ,HERE ,SOUTH-ANTECHAMBER>\n\t\t<THIS-IS-IT ,ANNEX-DOOR>)>>"
  },
  "BEAM-FCN": {
   "name": "BEAM-FCN",
   "file": "barge.zil",
   "line": 439,
   "endLine": 593,
   "source": "<ROUTINE BEAM-FCN ()\n\t <COND (<EQUAL? ,BEAM ,PRSI>\n\t\t<COND (<VERB? PUT PUT-ON>\n\t\t       <COND (<EQUAL? ,PRSO ,ME ,WINNER ,ADVENTURER>\n\t\t\t      <TELL \"Why not just stand on it?\" CR>)\n\t\t\t     (<HELD? ,BEAM>\n\t\t\t      <TELL \"Better drop the \" D ,PRSI \" first.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<PRSO? ,BEAM>\n\t\t\t      <TELL \"How recursive!\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Done. But the \" D ,PRSO \" falls off the beam and lands\">\n\t\t\t      <COND (<AND <NOT <FSET? ,PIT ,INVISIBLE>>\n\t\t\t\t\t  <ROOM? ,WEST-END-OF-PASSAGE\n\t\t\t\t\t\t ,MID-ANTECHAMBER>\n\t\t\t\t\t  ,BEAM-PLACED>\n\t\t\t\t     <TELL \" in the pit.\" CR>\n\t\t\t\t     <REMOVE ,PRSO>)\n\t\t\t\t    (T <TELL \" on the ground.\" CR>\n\t\t\t\t     <MOVE ,PRSO ,HERE>\n\t\t\t\t     <RTRUE>)>)>)>)\n\t       (<VERB? TAKE>\n\t\t<COND (<AND <EQUAL? ,HERE ,NORTH-ANTECHAMBER>\n\t\t\t    <FSET? ,NORTH-ANTE-DOOR ,OPENBIT>\n\t\t\t    <ITAKE>>\n\t\t       <DROP-THE-BLOCKS>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,HERE ,BURIAL-CHAMBER>\n\t\t       <COND (<ITAKE>\n\t\t\t      <TELL \"Taken. Oh oh....\" CR>\n\t\t\t      <JIGS-UP ,BURIAL-BEAM-STR>)>)\n\t\t      (<EQUAL? ,HERE ,ANNEX>\n\t\t       <COND (<ITAKE>\n\t\t\t      <JIGS-UP ,ANNEX-BEAM-STR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<AND <EQUAL? ,HERE ,SOUTH-ANTECHAMBER>\n\t\t\t    <NOT <FSET? ,ANNEX ,RMUNGBIT>>\n\t\t\t    <FSET? ,ANNEX-DOOR ,OPENBIT>>\n\t\t       <COND (<ITAKE>\n\t\t\t      <CLOSE-THE-ANNEX>)>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,HERE ,BARGE-CENTER>\n\t\t\t    <FSET? ,SHIM ,NDESCBIT>\n\t\t\t    <IN? ,BEAM ,HERE>>\n\t\t       <TELL\n\"It seems to be securely wedged in the mast hole.\" CR>\n\t\t       <RTRUE>)\n\t\t      ;(<AND <EQUAL? ,HERE ,BARGE-CENTER>\n\t\t\t    <NOT ,PUSHED-BEAM>\n\t\t\t    <IN? ,BEAM ,HERE>>\n\t\t       <TELL \n\"You can't lift it that high over your head to get it out of the deck.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,HERE ,BELOW-MAST>\n\t\t\t    <FSET? ,SHIM ,NDESCBIT>\n\t\t\t    <IN? ,BEAM ,SLOT>>\n\t\t       <TELL \"It's wedged into the slot.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,HERE ,BELOW-MAST>\n\t\t\t    <IN? ,BEAM ,SLOT>>\n\t\t       <TELL \n\"The mast hole won't allow a steep enough angle for removing it.\" CR>\n\t\t       <RTRUE>)\n\t\t      (,ON-BEAM\n\t\t       <COND (<ITAKE>\n\t\t\t      <SETG ON-BEAM <>>\n\t\t\t      <TELL \"(getting off the beam first)\" CR \"Taken.\"\n\t\t\t\t    CR>\n\t\t\t      <COND (<NOT <IN? ,PLASTER ,HERE>>\n\t\t\t\t     <JIGS-UP\n\"Well, you were never very good walking on air and so, with a scream on your\nlips, you plunge to a horrible death in a pit of voracious rats.\">)>\n\t\t\t      <SETG BEAM-PLACED <>>\n\t\t\t      <RTRUE>)>)\n\t\t      (T\n\t\t       <SETG BEAM-PLACED <>>\n\t\t       <RFALSE>)>)\n\t       (<AND <VERB? PUT PUT-ACROSS PUT-ON PUT-AGAINST>\n\t\t     <PRSI? ,NICHES>\n\t\t     <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t     <NOT <IN? ,PIT ,HERE>>>\n\t\t<SET-THE-BEAM 1>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT-ON>\n\t\t     <EQUAL? ,PRSI ,ROCKS>\n\t\t     <EQUAL? ,HERE ,SOUTH-ANTECHAMBER>>\n\t\t<SET-THE-BEAM 2>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,ROCKS>\n\t\t     <EQUAL? ,HERE ,SOUTH-ANTECHAMBER>>\n\t\t<TELL\n\"Done. The beam immediately falls to the floor, though.\" CR>\n\t\t<MOVE ,BEAM ,HERE>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT-ACROSS PUT>\n\t\t     <EQUAL? ,PRSI ,DOORWAY ,ANNEX-DOOR>\n\t\t     <EQUAL? ,HERE ,SOUTH-ANTECHAMBER>\n\t\t     <IN? ,ROCKS ,HERE>>\n\t\t<SET-THE-BEAM 3>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT-UNDER>\n\t\t     <EQUAL? ,PRSI ,T-LINTEL ,DOORWAY>\n\t\t     <EQUAL? ,HERE ,NORTH-ANTECHAMBER>>\n\t\t<SET-THE-BEAM 4>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT-ACROSS PUT>\n\t\t     <EQUAL? ,PRSI ,PIT>\n\t\t     <EQUAL? ,HERE ,MID-ANTECHAMBER>>\n\t\t<SET-THE-BEAM 5>\n\t\t<RTRUE>)\n\t       (<AND ,ON-BEAM <VERB? DISEMBARK CLIMB-DOWN>>\n\t\t<SETG ON-BEAM <>>\n\t\t<COND (<AND <IN? ,PLASTER ,WEST-END-OF-PASSAGE>\n\t\t\t    <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>>\n\t\t       <TELL\n\"You're now standing on the ground.\" CR>)\n\t\t      (T\n\t\t       <JIGS-UP ,AIR-WALK>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? RAISE PULL-UP PUSH-THROUGH>\n\t\t     <EQUAL? ,HERE ,BELOW-MAST ,BARGE-CENTER>\n\t\t     <FSET? ,SHIM ,NDESCBIT>>\n\t\t<TELL \n\"You try to raise the mast but it seems to be wedged into something.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUSH-THROUGH RAISE PULL-UP>\n\t\t     <EQUAL? ,HERE ,BELOW-MAST ,BARGE-CENTER>\n\t\t     <NOT <FSET? ,SHIM ,NDESCBIT>>>\n\t\t<COND (<NOT <EQUAL? <CCOUNT ,WINNER> 0>>\n\t\t       <TELL \n\"You'll need two hands to do that. Better put everything down.\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <MOVE ,BEAM ,BARGE-CENTER>\n\t\t       <SETG PUSHED-BEAM T>\n\t\t       <PUTP ,BEAM ,P?FDESC\n\"Lying on the deck of the barge is a long wooden beam.\">\n\t\t       <TELL\n\"You have managed to lift the beam up through the hole and you hear it land on\nthe deck with a thud.\" CR>)>)\n\t       (<AND <VERB? PUSH-THROUGH>\n\t\t     <EQUAL? ,PRSI ,MAST-HOLE>\n\t\t     <EQUAL? ,HERE ,BELOW-MAST>>\n\t\t<TELL \"It's wedged too tightly in the slot.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUSH>\n\t\t     <NOT <FSET? ,BEAM ,TOUCHBIT>>>\n\t\t<TELL \"Nice try.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL \n\"This piece of wood is virtually petrified due to its age and original strength.\" CR>)\n\t       >>"
  },
  "DESCRIBE-BEAM-FCN": {
   "name": "DESCRIBE-BEAM-FCN",
   "file": "barge.zil",
   "line": 595,
   "endLine": 636,
   "source": "<ROUTINE DESCRIBE-BEAM-FCN (RARG \"AUX\" STR)\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"This wooden beam is made of an extremely hard wood. It's 10 feet long and has\na diameter of 12 inches. Scratched into it is the following symbol:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n     /!\\\\|\n\">\n\t\t<FIXED-FONT-OFF>\n\t\t<RTRUE>)\n\t       (<OR <NOT <EQUAL? .RARG ,M-OBJDESC>>\n\t\t    <NOT ,BEAM-PLACED>>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,BEAM-PLACED 4> ;\"CASE: In N. Ante, beam wedged\"\n\t\t<TELL\n\"Wedged under the top of the doorway, perpendicular to the floor, is the wooden\nbeam.\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,BEAM-PLACED 5 1>\n\t\t<COND (<EQUAL? ,HERE ,MID-ANTECHAMBER>\n\t\t       <TELL\n\"Through the doorway you can see the beam spanning the pit.\" CR>)\n\t\t      (<EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t       <TELL \"Stretching across the floor\">\n\t\t       <COND (<EQUAL? ,BEAM-PLACED 1>\n\t\t\t      <TELL \" from niche to niche\">)>\n\t\t       <COND (<NOT ,INNER-DOOR-SEALED>\n\t\t\t      <TELL \", spanning a deep pit,\">)>\n\t\t       <TELL \" is the wooden beam.\">\n\t\t       <COND (,ON-BEAM\n\t\t\t      <TELL \" You are standing on the beam.\">)>\n\t\t       <CRLF>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,BEAM-PLACED 2 3> ;\"Case: S. Ante, wedged beam\"\n\t\t<COND (<EQUAL? ,BEAM-PLACED 2>\n\t\t       <SET STR \"rocks\">)\n\t\t      (T <SET STR \"doorway\">)>\n\t\t<TELL\n\"Wedged between the \" .STR \", from side to side, is the stout beam.\" CR>\n\t\t<RTRUE>)>>"
  },
  "READ-SCROLL-FCN": {
   "name": "READ-SCROLL-FCN",
   "file": "barge.zil",
   "line": 651,
   "endLine": 663,
   "source": "<ROUTINE READ-SCROLL-FCN ()\n\t <COND (<NOT <VERB? READ>>\n\t\t<RFALSE>)>\n\t <TELL\n\"The scroll reads as follows:|\n\">\n\t <FIXED-FONT-ON>\n\t <TELL \"|\n*->  <.>  <:.>  ...  <::.>|\n|\n::  :  **  --->>  -)  (*)\" CR>\n\t <FIXED-FONT-OFF>\n\t <RTRUE>>"
  },
  "GET-LOST-FCN": {
   "name": "GET-LOST-FCN",
   "file": "camp.zil",
   "line": 3,
   "endLine": 21,
   "source": "<ROUTINE GET-LOST-FCN (\"AUX\" (OFFS -3))\n\t <COND (<NOT <GETP ,HERE ,P?ENDLESS>>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <SET OFFS <+ .OFFS 3>>\n\t\t <COND (<G? .OFFS 54>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<COND (<EQUAL? ,HERE <GET ,MAP-TBL .OFFS>>\n\t\t\t       <SETG SECS-LON <GET ,MAP-TBL <+ .OFFS 1>>>\n\t\t\t       <SETG SECS-LAT <GET ,MAP-TBL <+ .OFFS 2>>>)>)>>\n\t <SETG DEGS-LON 32>\n\t <SETG DEGS-LAT 24>\n\t <SETG MINS-LON 12>\n\t <SETG MINS-LAT 11>\n\t <SETG DESERT-LOC <GETP ,HERE ,P?ENDLESS>>\n\t <CHANGE-DESERT-POSITION>\n\t <FCLEAR ,ENDLESS-DESERT ,TOUCHBIT>\n\t <RETURN ,ENDLESS-DESERT>>"
  },
  "CROC-FCN": {
   "name": "CROC-FCN",
   "file": "camp.zil",
   "line": 30,
   "endLine": 34,
   "source": "<ROUTINE CROC-FCN ()\n\t <COND (<AND <EQUAL? ,PRSI ,NASTY-CROC>\n\t\t     <VERB? THROW>>\n\t\t<PERFORM ,V?PUT ,PRSO ,NILE-RIBBAH>\n\t\t<RTRUE>)>> "
  },
  "GET-WET-FCN": {
   "name": "GET-WET-FCN",
   "file": "camp.zil",
   "line": 44,
   "endLine": 75,
   "source": "<ROUTINE GET-WET-FCN ()\n\t <COND (<VERB? THROUGH>\n\t\t<PERFORM ,V?SWIM ,NILE-RIBBAH>\n\t\t<RTRUE>)\n\t       (<VERB? DROP>\n\t\t<PERFORM ,V?LEAVE>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<TELL \"Hmmm. Looks potable. And dangerous.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <PRSO? ,NILE-RIBBAH>\n\t\t     <VERB? DRINK>>\n\t\t<PERFORM ,V?DRINK-FROM ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSI ,NILE-RIBBAH>\n\t\t     <VERB? PUT>>\n\t\t<COND (<EQUAL? ,PRSO ,WINNER>\n\t\t       <PERFORM ,V?SWIM>\n\t\t       <RFATAL>)\n\t\t      (T\n\t\t       <REMOVE ,PRSO>\n\t\t       <SETG P-IT-LOC <>>\n\t\t       <TELL \"The \" D ,PRSO \" quickly \">\n\t\t       <COND (<HEAVY?>\n\t\t\t      <TELL \"sinks\">)\n\t\t\t     (T <TELL \"floats away on the current\">)>\n\t\t       <TELL\n\". Another example of your fine management abilities.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "HEAVY?": {
   "name": "HEAVY?",
   "file": "camp.zil",
   "line": 77,
   "endLine": 90,
   "source": "<ROUTINE HEAVY? (\"OPTIONAL\" (OBJ <>))\n\t <COND (<NOT .OBJ>\n\t\t<SET OBJ ,PRSO>)>\n\t <COND (<OR <EQUAL? .OBJ ,FOLDED-COT ,BROKEN-LOCK ,ROCK>\n\t\t    <EQUAL? .OBJ ,STONE-KEY ,PICK-AXE ,SHOVEL>\n\t\t    <EQUAL? .OBJ ,ROPE ,CRATE ,BLACK-BOX>\n\t\t    <EQUAL? .OBJ ,TORCH ,OIL-JAR>\n\t\t    <GETP .OBJ ,P?BRICK>>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .OBJ ,KNAPSACK>\n\t\t     <G? <WEIGHT ,KNAPSACK> 15>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "TAKE-ROCK-FCN": {
   "name": "TAKE-ROCK-FCN",
   "file": "camp.zil",
   "line": 118,
   "endLine": 123,
   "source": "<ROUTINE TAKE-ROCK-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<FCLEAR ,ROCK ,NDESCBIT>\n\t\t<PUTP ,MATCHES ,P?FDESC\n\"Sitting by the firepit is a matchbook.\">\n\t\t<RFALSE>)>>"
  },
  "FIREPIT-FCN": {
   "name": "FIREPIT-FCN",
   "file": "camp.zil",
   "line": 125,
   "endLine": 139,
   "source": "<ROUTINE FIREPIT-FCN ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>)\n\t       (<VERB? THROUGH>\n\t\t<TELL \"There's no need to get yourself all dirty.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL \"The pit's just a pit. Nothing more. \">\n\t\t<COND (<FIRST? ,PIT>\n\t\t       <TELL \"Sitting in the pit is \">\n\t\t       <PRINT-CONTENTS ,PIT>)\n\t\t      (T\n\t\t       <TELL \"The pit is empty\">)>\n\t\t<TELL \".\" CR>\n\t\t<RTRUE>)>>"
  },
  "ENTER-TENT-FCN": {
   "name": "ENTER-TENT-FCN",
   "file": "camp.zil",
   "line": 149,
   "endLine": 187,
   "source": "<ROUTINE ENTER-TENT-FCN ()\n\t <COND (<AND <VERB? DROP DISEMBARK>\n\t\t     <PRSO? ,TENT-OBJ>\n\t\t     <IN-A-TENT?>>\n\t\t<PERFORM ,V?LEAVE>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<EQUAL? ,HERE ,P2 ,P4 ,P7>\n\t\t       <RFALSE>)\n\t\t      (<IN-A-TENT?>\n\t\t       <TELL\n\"Looks like a canvas tent to me.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<NOT <GETP ,HERE ,P?MAP>>\n\t\t       <TELL \"Get serious.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T <TELL \"I can't see it from here!\" CR>)>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<PERFORM ,V?LOOK-INSIDE ,FLAPS>\n\t\t<RTRUE>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL \"I don't think that striking the tent would do any good.\" CR>\n\t\t<RTRUE>)\n\t       (<NOT <VERB? THROUGH BOARD>>\n\t\t<RFALSE>)\n\t       (<NOT <GETP ,HERE ,P?MAP>>\n\t\t<TELL \"Get serious.\" CR>\n\t\t<RTRUE>)\n\t       (<IN-A-TENT?>\n\t\t<TELL \n\"What are those canvas walls around you? Just where do you think you are? Maybe\nI should send for Craige, eh?\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,P2 ,P7 ,P4>\n\t\t<PERFORM ,V?ENTER>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"You can't enter the tent from here.\" CR>\n\t\t<RTRUE>)>>"
  },
  "ENTER-PYRAMID-FCN": {
   "name": "ENTER-PYRAMID-FCN",
   "file": "camp.zil",
   "line": 195,
   "endLine": 240,
   "source": "<ROUTINE ENTER-PYRAMID-FCN ()\n\t <COND (<AND <VERB? DROP>\n\t\t     <EQUAL? ,HERE ,CHAMBER-OF-RA>>\n\t\t<PERFORM ,V?LEAVE>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<AND <NOT ,PYRAMID-OPENED>\n\t\t\t    <IN? ,ROCK-LOCK ,HERE>>\n\t\t       <TELL\n\"There's not much to see of it yet -- just the tip of it is exposed showing the\nblock and its small opening.\" CR>)\n\t\t      (<AND ,PYRAMID-OPENED\n\t\t\t    <EQUAL? ,HERE ,EX8>>\n\t\t       <TELL \n\"You can see down into what looks like a large chamber.\" CR>)\n\t\t      (<GETP ,HERE ,P?MAP>\n\t\t       <TELL \"You can't see any pyramid here.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Where do you think you are, Times Square?\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? OPEN> <NOT ,PYRAMID-OPENED> <IN? ,ROCK-LOCK ,HERE>>\n\t\t<TELL \"The stone blocks don't move.\" CR> <RTRUE>)\n\t       (<VERB? OPEN> <TELL \"It looks open to me.\" CR> <RTRUE>)\n\t       (<AND <EQUAL? ,PYRAMID ,PRSI>\n\t\t     <EQUAL? ,HERE ,EX8>\n\t\t     <VERB? PUT THROW>\n\t\t     ,PYRAMID-OPENED>\n\t\t<TELL \"You hear the \" D ,PRSO \" fall down below.\" CR>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<COND (<EQUAL? ,PRSO ,KNAPSACK>\n\t\t       <FCLEAR ,PRSO ,WEARBIT>\n\t\t       <FSET ,PRSO ,OPENBIT>)>\n\t\t<MOVE ,PRSO ,CHAMBER-OF-RA>\n\t\t<RTRUE>) \n\t       (<NOT <VERB? THROUGH>>\n\t\t<RFALSE>)\n\t       (<NOT <GETP ,HERE ,P?MAP>>\n\t\t<TELL \"Get serious. Let's find it first.\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,EX8>\n\t\t<PERFORM ,V?ENTER>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"You can't enter the pyramid from here.\" CR>\n\t\t<RTRUE>)>>"
  },
  "CREATE-THIRST-FCN": {
   "name": "CREATE-THIRST-FCN",
   "file": "camp.zil",
   "line": 542,
   "endLine": 550,
   "source": "<ROUTINE CREATE-THIRST-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<SETG THIRST <+ ,THIRST 6>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<SETG THIRST <+ ,THIRST 1>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<DESCRIBE-HOLE-FCN ,M-LOOK>)>>"
  },
  "DESCRIBE-HOLE-FCN": {
   "name": "DESCRIBE-HOLE-FCN",
   "file": "camp.zil",
   "line": 772,
   "endLine": 806,
   "source": "<ROUTINE DESCRIBE-HOLE-FCN (RARG \"AUX\" DEPTH)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL <GETP ,HERE ,P?LDESC>>\n\t\t<SET DEPTH <GETP ,HERE ,P?CAPACITY>>\n\t\t<COND (<AND <G? .DEPTH 5>\n\t\t\t    <EQUAL? ,HERE ,EX8>>\n\t\t       <CRLF>\n\t\t       <RTRUE>)\n\t\t      (<G? .DEPTH 0>\n\t\t       <TELL \" There's a\" <GET ,DESC-HOLE-LTBL .DEPTH>\n\" in the sand, a remnant of your excavation attempts.\">)>\n\t\t<COND (<EQUAL? ,HERE ,ENDLESS-DESERT>\n\t\t       <COND (<G? ,THIRST 300>\n\t\t\t      <TELL \" \" <PICK-ONE ,SPACE-TALES-LTBL>>)\n\t\t\t     (ELSE\n\t\t\t      <COND (<PROB 50>\n\t\t\t\t     <COND (<PROB 35>\n\t\t\t\t\t    <TELL \" \"\n\t\t\t\t\t        <PICK-ONE ,SPACE-TALES-LTBL>>)\n\t\t\t\t\t   (T <TELL \" \"\n\t\t\t\t\t\t<PICK-ONE ,MIRAGE-LTBL>>)>)>)>)\n\t\t      (<GETP ,HERE ,P?DESERT>\n\t\t       <COND (<G? ,THIRST 300>\n\t\t\t      <TELL \" \" <PICK-ONE ,MIRAGE-LTBL>>)\n\t\t\t     (ELSE\n\t\t\t      <COND (<PROB 20>\n\t\t\t\t     <TELL \" \" <PICK-ONE ,MIRAGE-LTBL>>)>)>)>\n\t\t<CRLF>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<SETG THIRST <+ ,THIRST 15>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<SETG THIRST <+ ,THIRST 3>>\n\t\t<RFALSE>)>>"
  },
  "ENTER-OPENING-FCN": {
   "name": "ENTER-OPENING-FCN",
   "file": "camp.zil",
   "line": 851,
   "endLine": 872,
   "source": "<ROUTINE ENTER-OPENING-FCN ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"The opening sits in the upper right-hand corner of the block. It's a small\nsquare opening, about four inches square, far too small for you\nto enter, and rather shallow. Some hieroglyphs travel across the block,\ncut off by the opening:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n       !-!        !-!|\n->  #.  ! !  -  #  ! !  /|\n\">\n\t\t<FIXED-FONT-OFF>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>)\n\t       (<VERB? THROUGH>\n\t\t<TELL\n\"I think the opening is a little too small to get through. Unless your ethics\nand morals are an accurate representation of your stature.\" CR>\n\t\t<RTRUE>)>>"
  },
  "COT-FCN": {
   "name": "COT-FCN",
   "file": "camp.zil",
   "line": 892,
   "endLine": 963,
   "source": "<ROUTINE COT-FCN (\"OPTIONAL\" (RARG ,M-OBJECT) \"AUX\" F)\n\t <COND (<NOT <EQUAL? .RARG ,M-OBJECT>> <RFALSE>)\n\t       (<PRSO? ,COT>\n\t\t<SET F <FIRST? ,COT>>\n\t\t<COND (<VERB? TAKE PUT PUT-ON>\n\t\t       <TELL\n\"It's too bulky and unstable a structure to be carrying around.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<VERB? CLIMB-ON CLIMB-UP>\n\t\t       <COND (<IN? ,WINNER ,COT>\n\t\t\t      <TELL \"Where do you think you are?\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"This is no time for sitting down on the job, especially after what you've been\nthrough to get here!\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<VERB? EXAMINE LOOK-INSIDE>\n\t\t       <TELL \"It's just an army cot.\">\n\t\t       <COND (<AND .F\n\t\t\t\t   <EQUAL? .F ,WINNER>>\n\t\t\t      <TELL \" And you're in it!\">)\n\t\t\t     (.F\n\t\t\t      <TELL \" Sitting on the cot \">\n\t\t\t      <COND (<G? <CCOUNT ,COT> 1>\n\t\t\t\t     <TELL \"are \">)\n\t\t\t\t    (T <TELL \"is \">)>\n\t\t\t      <PRINT-CONTENTS ,COT>\n\t\t\t      <TELL \".\">)>\n\t\t       <CRLF>\n\t\t       <RTRUE>)\n\t\t      (<VERB? FOLD CLOSE>\n\t\t       <COND (<NOT .F>\n\t\t\t      <TELL \"Folded.\" CR>\n\t\t\t      <MOVE ,FOLDED-COT <LOC ,COT>>\n\t\t\t      <REMOVE ,COT>\n\t\t\t      <THIS-IS-IT ,FOLDED-COT>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? .F ,WINNER>\n\t\t\t      <TELL\n\"Don't you think it would be wise to get out of the cot first? Or are you\nwaiting for a valet to help?\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (.F\n\t\t\t      <TELL\n\"You'd better take everything off of it first.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<VERB? OPEN UNFOLD>\n\t\t       <TELL \"It's already unfolded.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? DROP>\n\t\t\t    <EQUAL? <LOC ,WINNER> ,COT>>\n\t\t       <PERFORM ,V?DISEMBARK ,COT>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? WALK THROUGH>\n\t\t\t    <EQUAL? <LOC ,WINNER> ,COT>>\n\t\t       <TELL \"You'd better get out of the cot first.\" CR>\n\t\t       <RFATAL>)>)\n\t       (<PRSO? ,FOLDED-COT>\n\t\t<COND (<VERB? OPEN UNFOLD>\n\t\t       <COND (<NOT <IN? ,FOLDED-COT ,HERE>>\n\t\t\t      <TELL\n\"Better put it down on the ground first.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Unfolded.\" CR>\n\t\t\t      <MOVE ,COT <LOC ,FOLDED-COT>>\n\t\t\t      <REMOVE ,FOLDED-COT>\n\t\t\t      <THIS-IS-IT ,COT>\n\t\t\t      <RTRUE>)>)\n\t\t      (<VERB? FOLD CLOSE>\n\t\t       <TELL \n\"Hmmm. Looks like you beat yourself to it. It's already folded up.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "READ-MATCHES-FCN": {
   "name": "READ-MATCHES-FCN",
   "file": "camp.zil",
   "line": 978,
   "endLine": 1001,
   "source": "<ROUTINE READ-MATCHES-FCN (\"OPTIONAL\" OBJ)\n\t <COND (<NOT .OBJ>\n\t\t<SET OBJ ,MATCHES>)>\n\t <COND (<VERB? READ-INSIDE>\n\t\t<COND (<NOT <FSET? .OBJ ,OPENBIT>>\n\t\t       <TELL \"You'd better open the matchbook first.\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?READ .OBJ>\n\t\t       <RTRUE>)>)\n\t       (<VERB? READ LOOK-BEHIND>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL\n\"The inside says: Send away now!! Mushrooms can be taught a foreign\nlanguage, and make fine pets! Easy to feed and they can be walked on a leash!\nRead and fill out the enclosed coupon now!\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"Printed on the outside is a small coupon for an instruction manual,\n\\\"GROW MUSHROOMS IN YOUR BASEMENT FOR FUN & PROFIT\\\". Close Before\nStriking.\" CR>)>)\n\t       (<VERB? LAMP-ON>\n\t\t<TELL \"One match at a time, eh?\" CR>\n\t\t<RTRUE>)>>"
  },
  "LAST-MATCH-FCN": {
   "name": "LAST-MATCH-FCN",
   "file": "camp.zil",
   "line": 1047,
   "endLine": 1063,
   "source": "<ROUTINE LAST-MATCH-FCN ()\n\t <COND (<AND <VERB? DROP>\n\t\t     <IN? ,ONE-MATCH ,WINNER>>\n\t\t<DROP-ONE-FCN>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"Why? There's no match left in the matchbook.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (<IN? ,ONE-MATCH ,WINNER>\n\t\t       <RFALSE>)\n\t\t      (ELSE\n\t\t       <TELL \"There's no match to light!\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? READ>\n\t\t<READ-MATCHES-FCN ,EMPTY-MATCHES>\n\t\t<RTRUE>)>>"
  },
  "DROP-ONE-FCN": {
   "name": "DROP-ONE-FCN",
   "file": "camp.zil",
   "line": 1065,
   "endLine": 1091,
   "source": "<ROUTINE DROP-ONE-FCN ()\n\t <COND (<VERB? DROP PUT>\n\t\t<COND (<NOT <IN? ,ONE-MATCH ,WINNER>>\n\t\t       <TELL \"Better take one first.\" CR>\n\t\t       <RTRUE>)>\n\t\t<MOVE ,ONE-MATCH ,GLOBAL-OBJECTS>\n\t\t<TELL \"Dropped. \">\n\t\t<BUT-WHERE?>\n\t\t<TELL \" \">\n\t\t<I-MATCH-OUT>\n\t\t<DISABLE <INT I-MATCH-OUT>>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE>\n\t\t<COND (<IN? ,MATCHES ,WINNER>\n\t\t       <MATCH-MOVER <>>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"I see no match here.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? ,ONE-MATCH ,PRSI>\n\t\t<COND (<AND <NOT <IN? ,MATCHES ,WINNER>>\n\t\t\t    <NOT <IN? ,ONE-MATCH ,WINNER>>>\n\t\t       <TELL \"You're not holding the match.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <MATCH-MOVER T>\n\t\t       <RFALSE>)>)>>"
  },
  "BUT-WHERE?": {
   "name": "BUT-WHERE?",
   "file": "camp.zil",
   "line": 1093,
   "endLine": 1113,
   "source": "<ROUTINE BUT-WHERE? ()\n\t <COND (<IN? ,WINNER ,COT>\n\t\t<TELL\n\t\t \"The match disappears somewhere beneath the cot.\">)\n\t       (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<TELL\n\t\t \"The current of the river sweeps it away.\">)\n\t       (<GETP ,HERE ,P?MAP>\n\t\t<TELL \n\t\t \"The match, however, is quickly covered by the sand.\">)\n\t       (<EQUAL? <GETP ,HERE ,P?ACTION> ,BURN-THE-BARGE>\n\t\t<TELL \n\t\t \"The match, however, falls between the wooden decking.\">)\n\t       (<AND <NOT <FSET? ,PIT ,INVISIBLE>>\n\t\t     <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>>\n\t\t<TELL\n\t\t \"The match flutters down into the abyss.\">)\n\t       (T\n\t\t<TELL \"The match falls into a crack in the stone floor.\">)>\n\t <COND (<NOT <FLAMING? ,ONE-MATCH>>\n\t\t<CRLF>)>>"
  },
  "TAKE-ONE-MATCH-FCN": {
   "name": "TAKE-ONE-MATCH-FCN",
   "file": "camp.zil",
   "line": 1115,
   "endLine": 1134,
   "source": "<ROUTINE TAKE-ONE-MATCH-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<COND (<NOT <IN? ,ONE-MATCH ,WINNER>>\n\t\t       <MATCH-MOVER <>>)\n\t\t      (ELSE\n\t\t       <TELL \"You're already holding one.\" CR>)>\n\t\t<RTRUE>) \n\t       (<VERB? DROP>\n\t\t<PERFORM ,V?DROP ,ONE-MATCH>\n\t\t<RTRUE>)\n\t       (<OR <VERB? PUT PUT-ON PUT-UNDER>\n\t\t    <VERB? PUT-BEHIND PUT-AGAINST PUT-ACROSS>>\n\t\t<COND (<IN? ,ONE-MATCH ,WINNER>\n\t\t       <MOVE ,ONE-MATCH ,GLOBAL-OBJECTS>\n\t\t       <TELL \n\"Well, I tried, but the match seems to have missed the mark entirely.\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"One match at a time!\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "MATCH-MOVER": {
   "name": "MATCH-MOVER",
   "file": "camp.zil",
   "line": 1136,
   "endLine": 1154,
   "source": "<ROUTINE MATCH-MOVER (\"OPTIONAL\" (SUPPRESS? T))\n\t <COND (<G? ,MATCH-COUNT 0>\n\t\t<SETG MATCH-COUNT <- ,MATCH-COUNT 1>>)>\n\t <COND (<L? ,MATCH-COUNT 1>\n\t\t<SETG MATCH-COUNT 0>\n\t\t<REMOVE ,SINGLE-MATCH>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,MATCH-COUNT 1>\n\t\t<MOVE ,EMPTY-MATCHES <LOC ,MATCHES>>\n\t\t<REMOVE ,MATCHES>\n\t\t<REMOVE ,MANY-MATCHES>\n\t\t<FSET ,SINGLE-MATCH ,NDESCBIT>)\n\t       (<EQUAL? ,MATCH-COUNT 2>\n\t\t<MOVE ,SINGLE-MATCH <LOC ,MANY-MATCHES>>\n\t\t<REMOVE ,MANY-MATCHES>)>\n\t <MOVE ,ONE-MATCH ,WINNER>\n\t <COND (<NOT .SUPPRESS?>\n\t\t<TELL \"Taken.\" CR>)>\n\t <RTRUE>>"
  },
  "SEND-FOR-IT-FCN": {
   "name": "SEND-FOR-IT-FCN",
   "file": "camp.zil",
   "line": 1164,
   "endLine": 1190,
   "source": "<ROUTINE SEND-FOR-IT-FCN ()\n\t <COND (<AND <VERB? SEND>\n\t\t     <IN? ,MATCHES ,WINNER>>\n\t\t<TELL\n\"Sure. As soon as a postman walks by, I'd be glad to give the coupon to him.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? READ>\n\t\t     <IN? ,MATCHES ,WINNER>>\n\t\t<TELL\n\"The coupon for the manual is as clear as any coupon ever was:|\n|\nFill in Last Name first, unless First Name is Last. Check the box beside\nthe dotted line unless you want the manual shipped via alternate shipping.\nInclude your address unless your mailing address and shipping address differ\nfrom your postal delivery route. If you are having the manual air-freighted,\nfill in your airport's zip code unless you're within thirty miles of a large\ncorn field. After checking whether that box has been checked, check it.|\n|\nBefore you mail this, be certain you've read the instructions and have filled\nout all three sides of the form. In case of doubt, contact the Coupon\nCustomer Service Department, 122 East Accardi Street, Youknow, Alaska.\nIf you live west of the Atlantic or the Pacific, this offer is\nnull and void except where prohibited by law.\" CR >)\n\t       (<VERB? READ>\n\t\t<TELL\n\"There's not much to read unless you're holding the matchbook.\" CR>\n\t\t<RTRUE>)>>"
  },
  "BURN-FOO-FCN": {
   "name": "BURN-FOO-FCN",
   "file": "camp.zil",
   "line": 1192,
   "endLine": 1208,
   "source": "<ROUTINE BURN-FOO-FCN ()\n\t <COND (<AND <VERB? BURN LAMP-ON>\n\t\t     <PRSO? ,CIG-WRAPPER>\n\t\t     <OR <IN? ,MATCHES ,WINNER>\n\t\t\t <AND <IN? ,ONE-MATCH ,WINNER>\n\t\t\t      <FLAMING? ,ONE-MATCH>>>>\n\t\t<TELL \n\"It tries valiantly to burn, but the inside of it is made of foil, and you\nmanage to burn your fingertips instead of the package.\" CR>\n\t\t<MOVE ,BURNED-PACK <LOC ,CIG-WRAPPER>>\n\t\t<FCLEAR ,BURNED-PACK ,INVISIBLE>\n\t\t<FCLEAR ,BURNED-PACK ,NDESCBIT>\n\t\t<REMOVE ,CIG-WRAPPER>\n\t\t<THIS-IS-IT ,BURNED-PACK>\n\t\t<RTRUE>)\n\t       (<VERB? READ>\n\t\t<TELL <GETP ,CIG-WRAPPER ,P?TEXT> CR>)>>"
  },
  "DESCRIBE-TRUNK-FCN": {
   "name": "DESCRIBE-TRUNK-FCN",
   "file": "camp.zil",
   "line": 1257,
   "endLine": 1273,
   "source": "<ROUTINE DESCRIBE-TRUNK-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-OBJDESC>\n\t\t<COND (<IN? ,COT ,HERE>\n\t\t       <TELL\n\"At the foot of the cot is a large, unwieldy trunk.\">)\n\t\t      (T\n\t\t       <TELL \"A large, unwieldy trunk sits on the sand.\">)>\n\t\t<COND (<FSET? ,BROKEN-LOCK ,INVISIBLE>\n\t\t       <TELL\n\" The trunk is closed and locked with a padlock.\">)\n\t\t      (<NOT <FSET? ,BROKEN-LOCK ,TOUCHBIT>>\n\t\t       <TELL\n\" The trunk is closed with a broken padlock.\">)>\n\t\t<CRLF>\n\t\t<COND (<FIRST? ,TRUNK>\n\t\t       <PRINT-CONT ,TRUNK>)>\n\t\t<RTRUE>)>>"
  },
  "TRUNK-FCN": {
   "name": "TRUNK-FCN",
   "file": "camp.zil",
   "line": 1275,
   "endLine": 1305,
   "source": "<ROUTINE TRUNK-FCN (\"AUX\" (FLG <>))\n\t <COND (<VERB? OPEN>\n\t\t<COND (<IN? ,LOCK ,TENT>\n\t\t       <TELL \"A padlock holds it shut.\" CR>)\n\t\t      (<NOT <FSET? ,BROKEN-LOCK ,TOUCHBIT>>\n\t\t       <TELL\n\"You'd better remove the broken lock first.\" CR>)\n\t\t      (ELSE\n\t\t       <TBL-TO-INSIDE ,TRUNK ,TRUNK-TBL>\n\t\t       <RTRUE>)>)\n\t       (<VERB? UNLOCK>\n\t\t<COND (<NOT <FSET? ,TRUNK ,SURFACEBIT>>\n\t\t       <TELL \"Better have your eyes checked.\" CR>)\n\t\t      (T <TELL \"You don't have a key.\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <FSET? ,TRUNK ,SURFACEBIT>>\n\t\t<TELL\n\"It's an old steamer trunk, very heavy and too clumsy for one person to carry.\"CR>\n\t\t<COND (<FIRST? ,TRUNK>\n\t\t       <PRINT-CONT ,TRUNK>)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? CLOSE>\n\t\t     <NOT <FSET? ,TRUNK ,SURFACEBIT>>>\n\t\t<COND (<AND <IN? ,TORCH ,TRUNK>\n\t\t\t    <FLAMING? ,TORCH>>\n\t\t       <SET FLG T>)>\n\t\t<INSIDE-OBJ-TO ,TRUNK-TBL ,TRUNK>\n\t\t<COND (.FLG\n\t\t       <KILL-TORCH T>)>\n\t\t<RTRUE>)>>"
  },
  "LOCK-FCN": {
   "name": "LOCK-FCN",
   "file": "camp.zil",
   "line": 1314,
   "endLine": 1338,
   "source": "<ROUTINE LOCK-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (,PRSI\n\t\t       <PERFORM ,V?MUNG ,PRSO ,PRSI>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\"You can't. It's locked.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? MUNG>\n\t\t     <PRSI? ,PICK-AXE \n\t\t\t    ,SHOVEL ,ROCK>>\n\t\t<TELL \"The padlock breaks open.\" CR>\n\t\t<FCLEAR ,BROKEN-LOCK ,INVISIBLE>\n\t\t<REMOVE ,LOCK>\n\t\t<THIS-IS-IT ,BROKEN-LOCK>\n\t\t<SETG SCORE <+ ,SCORE 5>>)\n\t       (<VERB? MUNG>\n\t\t<TELL\"You'll have to hit the lock with something stronger.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE DISEMBARK>\n\t\t<TELL \"It's locked.\" CR>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <IN? ,LOCK ,HERE>>\n\t\t<TELL\n\"It's made of hardened steel and is very sturdy. It's also very locked.\" CR>)>>"
  },
  "STONE-KEY-FCN": {
   "name": "STONE-KEY-FCN",
   "file": "camp.zil",
   "line": 1363,
   "endLine": 1391,
   "source": "<ROUTINE STONE-KEY-FCN ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL\n\"This is a small stone cube, almost four inches on a side, with ancient\nmarkings on it. The markings look like this:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n#  !@!  ::  (())  !@!  //\\\\\\\\|\n\">\n\t\t<FIXED-FONT-OFF>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,ROCK-LOCK>>\n\t\t<TELL \"The ancient stones beneath your feet shake and\ntremble as they move the sands. You leap out of the way and manage to\navoid being sucked down into the vortex. Through the sands, an entrance\ndown into the pyramid is revealed. The entire experience sends a jolt of\nadrenaline through your body as your lips form a sneer. You've found it.\nAnd without any help from those idiots.\"CR>\n\t\t<SETG PYRAMID-OPENED T>\n\t\t<REMOVE ,STONE-KEY>\n\t\t<REMOVE ,ROCK-LOCK>\n\t\t<SETG P-IT-LOC <>>\n\t\t<PUTP ,HERE ,P?LDESC\n\"You are in the desert at a site of successful excavation. Beneath you lies the\npyramid, its stone door at last open. The desert is all around you, but\ndown there lie the secrets of the ages.\">\n\t\t<SETG SCORE <+ ,SCORE 20>>)>>"
  },
  "EDIBLE-FCN": {
   "name": "EDIBLE-FCN",
   "file": "camp.zil",
   "line": 1400,
   "endLine": 1405,
   "source": "<ROUTINE EDIBLE-FCN ()\n\t <COND (<NOT <EQUAL? ,PRSO ,FOOD>>\n\t\t<RFALSE>)\n\t       (<VERB? SMELL TASTE>\n\t\t<TELL \"Mmmm good!\" CR>\n\t\t<RTRUE>)>>"
  },
  "MAP-FCN": {
   "name": "MAP-FCN",
   "file": "camp.zil",
   "line": 1415,
   "endLine": 1435,
   "source": "<ROUTINE MAP-FCN ()\n\t <COND (<AND <NOT <IN? ,MAP ,WINNER>>\n\t\t     <VERB? OPEN READ EXAMINE>> \n\t\t<TELL \"You're not carrying the map.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? READ EXAMINE>\n\t\t     <NOT <FSET? ,MAP ,OPENBIT>>>\n\t\t<TELL \"You'd better unfold it first.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? READ EXAMINE>\n\t\t<TELL\n\"This is a reproduction of the map the Professor made while on his expedition.\nIt indicates where he hoped to find the lost pyramid. It is included in your\ngame package.\" CR>)\n\t       (<AND <VERB? TAKE>\n\t\t     <NOT <FSET? ,MAP ,TOUCHBIT>>>\n\t\t<COND (<ITAKE>\n\t\t       <TELL\n\"Taken. It feels fairly heavy, though, as though it were folded around\nsomething solid.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "DESCRIBE-ROPE-FCN": {
   "name": "DESCRIBE-ROPE-FCN",
   "file": "camp.zil",
   "line": 1461,
   "endLine": 1470,
   "source": "<ROUTINE DESCRIBE-ROPE-FCN (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-OBJDESC>\n\t\t     <OR <EQUAL? ,HERE ,LANDING-ZERO ,LANDING-ONE ,LANDING-TWO>\n\t\t\t <EQUAL? ,HERE ,LANDING-THREE ,TINY-LANDING>>\n\t\t     ,ROPE-PLACED>\n\t\t<TELL \"Descending from above is the end of a long rope.\">\n\t\t<COND (<ROOM? ,TINY-LANDING>\n\t\t       <TELL \" It travels down into the darkness.\">)>\n\t\t<CRLF>\n\t\t<RTRUE>)>>"
  },
  "ROPE-FCN": {
   "name": "ROPE-FCN",
   "file": "camp.zil",
   "line": 1472,
   "endLine": 1549,
   "source": "<ROUTINE ROPE-FCN ()\n\t <COND (<AND <VERB? TIE>\n\t\t     <PRSI? ,ALTAR>>\n\t\t<COND (,ROPE-TIED\n\t\t       <TELL \"It's already tied to the \" D ,ROPE-TIED \".\" CR>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSI ,ALTAR>\n\t\t       <TELL \"The rope has been tied to the \" D ,PRSI \".\" CR>\n\t\t       <SETG ROPE-TIED ,PRSI>\n\t\t       <FSET ,ROPE ,TRYTAKEBIT>)\n\t\t      (T <RFALSE>)>)\n\t       (<VERB? UNTIE>\n\t\t<COND (<NOT ,ROPE-TIED>\n\t\t       <TELL \"That's cute. It's not tied!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<NOT <EQUAL? ,HERE ,CHAMBER-OF-RA>>\n\t\t       <TELL \"Your arms aren't quite that long.\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"Untied.\">\n\t\t       <SETG ROPE-TIED <>>\n\t\t       <FCLEAR ,ROPE ,TRYTAKEBIT>\n\t\t       <COND (,ROPE-PLACED\n\t\t\t      <MOVE ,ROPE ,LANDING>\n\t\t\t      <TELL \" You hear it fall down below.\">\n\t\t\t      <SETG LANDING <>>\n\t\t\t      <SETG ROPE-PLACED <>>)>\n\t\t       <CRLF>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? TAKE PUT>\n\t\t     ,ROPE-PLACED\n\t\t     <EQUAL? ,HERE ,CHAMBER-OF-RA>>\n\t\t<SETG ROPE-PLACED <>>\n\t\t<FCLEAR ,ROPE ,NDESCBIT>\n\t\t<TELL \"(free end of rope)\" CR>\n\t\t<RFALSE>)\n\t       (<AND <VERB? TAKE>\n\t\t     ,ROPE-PLACED\n\t\t     <OR <EQUAL? ,HERE ,LANDING-ZERO ,LANDING-ONE \n\t\t\t\t ,TINY-LANDING>\n\t\t\t <EQUAL? ,HERE ,LANDING-TWO ,LANDING-THREE>>>\n\t\t<TELL \"It seems to be tied to something up overhead.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? MOVE>\n\t\t     ,ROPE-PLACED>\n\t\t<TELL \"The rope is securely fastened to the altar.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? PUT>\n\t\t<COND (<AND ,PRSI\n\t\t\t    <FSET? ,PRSI ,CLIMBBIT>>\n\t\t       <COND (<EQUAL? ,PRSI ,FEW-STEPS>\n\t\t\t      <SETG PRSI ,NORTH-STAIRS>)>\n\t\t       <SETG ROPE-PLACED ,PRSI>\n\t\t       <TELL \"The rope descends into the \" D ,PRSI \".\" CR>\n\t\t       <MOVE ,ROPE ,HERE>\n\t\t       <COND (<EQUAL? ,PRSI ,NORTH-STAIRS>\n\t\t\t      <SETG LANDING ,LANDING-ZERO>)\n\t\t\t     (<EQUAL? ,PRSI ,SOUTH-STAIRS>\n\t\t\t      <SETG LANDING ,LANDING-TWO>)\n\t\t\t     (<EQUAL? ,PRSI ,EAST-STAIRS>\n\t\t\t      <SETG LANDING ,LANDING-ONE>)\n\t\t\t     (<EQUAL? ,PRSI ,WEST-STAIRS>\n\t\t\t      <SETG LANDING ,LANDING-THREE>)\n\t\t\t     (T\n\t\t\t      <SETG LANDING ,LANDING-ZERO>)>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <RFALSE>)>)\n\t       (<VERB? TAKE>\n\t\t<FCLEAR ,ROPE ,NDESCBIT>\n\t\t<RFALSE>)\n\t       (<VERB? CLIMB-UP CLIMB-DOWN CLIMB-FOO>\n\t\t<COND (<AND <VERB? CLIMB-UP>\n\t\t\t    <ROOM? ,CHAMBER-OF-RA>>\n\t\t       <TELL \"The rope doesn't go up.\" CR>\n\t\t       <RFATAL>)>\n\t\t<SETG ROPE-HACK T>\n\t\t<RFALSE>)>>"
  },
  "CANTEEN-FCN": {
   "name": "CANTEEN-FCN",
   "file": "camp.zil",
   "line": 1602,
   "endLine": 1655,
   "source": "<ROUTINE CANTEEN-FCN ()\n\t <COND (<VERB? SHAKE>\n\t\t<COND (<NOT <FSET? ,CANTEEN ,OPENBIT>>\n\t\t       <COND (<AND <IN? ,WATER ,CANTEEN>\n\t\t\t\t   <G? ,WATER-LEFT 9>>\n\t\t\t      <TELL \"Some water sloshes around inside.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (,SAND-FILLED\n\t\t\t      <TELL \"Some sand shakes around inside.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \"It's empty.\" CR>)>)\n\t\t      (<IN? ,WATER ,CANTEEN>\n\t\t       <TELL\n\"All the water spills out and quickly evaporates. Another smart move.\"\n\t\t\t     CR>\n\t\t       <REMOVE ,WATER>\n\t\t       <SETG WATER-LEFT 0>\n\t\t       <RTRUE>)\n\t\t      (,SAND-FILLED\n\t\t       <TELL \"You empty the canteen of most of the sand.\" CR>\n\t\t       <SETG SAND-FILLED <>>\n\t\t       <REMOVE ,C-SAND>\n\t\t       <FSET ,C-SAND ,NDESCBIT>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \n\"Okay, but shaking an empty canteen will get you nowhere fast.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? FILL>\n\t\t     <EQUAL? ,PRSI ,SAND>>\n\t\t<COND (<NOT <GETP ,HERE ,P?MAP>>\n\t\t       <TELL \"I see no sand here.\" CR>)\n\t\t      (<NOT <FSET? ,CANTEEN ,OPENBIT>>\n\t\t     <TELL \"It would help if you opened the canteen first.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Okay. The canteen has been filled with sand.\">\n\t\t       <COND (,WATER-LEFT\n\t\t\t      <SETG WATER-LEFT 0>\n\t\t\t      <REMOVE ,WATER>\n\t\t\t      <TELL\n\" So much for the water that was left in it.\">)>\n\t\t       <CRLF>\n\t\t       <SETG SANDY-CANTEEN T>\n\t\t       <SETG SAND-FILLED T>\n\t\t       <MOVE ,C-SAND ,CANTEEN>\n\t\t       <FCLEAR ,C-SAND ,NDESCBIT>)>\n\t\t<RTRUE>)\n\t       (<AND <PRSI? ,CANTEEN>\n\t\t     <VERB? PUT>\n\t\t     <NOT <EQUAL? ,PRSO ,SAND ,GLOBAL-WATER ,C-SAND>>>\n\t        <TELL\n\"That would void the manufacturer's warranty on the canteen.\" CR>)>>"
  },
  "MIRAGES-F": {
   "name": "MIRAGES-F",
   "file": "camp.zil",
   "line": 1690,
   "endLine": 1694,
   "source": "<ROUTINE MIRAGES-F ()\n\t <TELL\n\"Come on! This life you're leading is bad enough -- don't waste your life on\nillusions.\" CR>\n\t <RTRUE>>"
  },
  "DESERT-EXIT-FCN": {
   "name": "DESERT-EXIT-FCN",
   "file": "camp.zil",
   "line": 1698,
   "endLine": 1744,
   "source": "<ROUTINE DESERT-EXIT-FCN (RARG \"AUX\" (END-OF-TBL 26) (OFFS 0) (NEW-ROOM <>)\n\t\t\t  OLD-DESERT)\n\t <COND (<EQUAL? .RARG ,M-END>\n\t\t<COND (<AND <VERB? DROP>\n\t\t\t    <PROB 33>\n\t\t\t    <NOT ,TOLD-IT>>\n\t\t       <TABLE-TO-DESERT ,DESERT-LOC>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n\"A brief but strong gust of wind comes up off a dune, whipping sand in your\nface, blinding you for long enough to lose track of the \" D ,PRSO \".\" CR>\n\t\t       <SETG TOLD-IT T>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<DESCRIBE-HOLE-FCN ,M-LOOK>\n\t\t<SETG TOLD-IT <>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? .RARG ,M-BEG>>\n\t\t<RFALSE>)\n\t       (<OR <NOT <VERB? WALK>>\n\t\t    <EQUAL? ,PRSO ,P?UP ,P?DOWN>>\n\t\t<SETG TOLD-IT <>>\n\t\t<RFALSE>)>\n\t <SETG TOLD-IT <>>\n\t <SETG THIRST <+ ,THIRST 15>>\n\t <SET OLD-DESERT ,DESERT-LOC>\n\t <CHANGE-DESERT-POSITION>\n\t <REPEAT ()\n\t\t <COND (<EQUAL? .OFFS .END-OF-TBL>\n\t\t\t<RETURN>)\n\t\t       (ELSE\n\t\t\t<COND (<EQUAL? ,DESERT-LOC <GET ,REENTRY-TBL .OFFS>>\n\t\t\t       <SET NEW-ROOM <GET ,REENTRY-TBL <+ .OFFS 1>>>\n\t\t\t       <RETURN>)\n\t\t\t      (ELSE\n\t\t\t       <SET OFFS <+ .OFFS 2>>)>)>>\n\t <DESERT-TO-TABLE .OLD-DESERT>\n\t <PROP-TO-TBL .OLD-DESERT>\n\t <COND (<NOT .NEW-ROOM>\n\t\t<FCLEAR ,HERE ,TOUCHBIT>\n\t\t<SET NEW-ROOM ,ENDLESS-DESERT>\n\t\t<TABLE-TO-DESERT ,DESERT-LOC>\n\t\t<TBL-TO-PROP ,DESERT-LOC>)\n\t       (ELSE\n\t\t<TBL-TO-PROP .OLD-DESERT>)>\n\t <GOTO .NEW-ROOM>\n\t <RTRUE>>"
  },
  "DESERT-TO-TABLE": {
   "name": "DESERT-TO-TABLE",
   "file": "camp.zil",
   "line": 1751,
   "endLine": 1768,
   "source": "<ROUTINE DESERT-TO-TABLE (SLOC \"AUX\" TBL (CNT 0)\n\t\t\t  (F <FIRST? ,ENDLESS-DESERT>) N)\n\t <SET TBL ,DESERT-TABLE>\n\t <REPEAT ()\n\t\t <COND (.F <SET N <NEXT? .F>>)\n\t\t       (ELSE <RETURN>)>\n\t\t <COND (<EQUAL? .F ,WINNER>)\n\t\t       (<FSET? .F ,TAKEBIT>\n\t\t\t<REPEAT ()\n\t\t\t\t<COND (<==? <GET .TBL .CNT> 0>\n\t\t\t\t       <PUT .TBL .CNT .SLOC>\n\t\t\t\t       <PUT .TBL <+ .CNT 1> .F>\n\t\t\t\t       <SET CNT <+ .CNT 2>>\n\t\t\t\t       <REMOVE .F>\n\t\t\t\t       <RETURN>)\n\t\t\t\t      (ELSE\n\t\t\t\t       <SET CNT <+ .CNT 2>>)>>)>\n\t\t <SET F .N>>>"
  },
  "TABLE-TO-DESERT": {
   "name": "TABLE-TO-DESERT",
   "file": "camp.zil",
   "line": 1770,
   "endLine": 1779,
   "source": "<ROUTINE TABLE-TO-DESERT (SLOC\n\t\t\t \"AUX\" TBL (CNT 0))\n\t <SET TBL ,DESERT-TABLE>\n\t <REPEAT ()\n\t\t <COND (<NOT <L? .CNT 100>>\n\t\t\t<RETURN>)\n\t\t       (<==? <GET .TBL .CNT> .SLOC>\n\t\t\t<PUT .TBL .CNT 0>\n\t\t\t<MOVE <GET .TBL <+ .CNT 1>> ,ENDLESS-DESERT>)>\n\t\t <SET CNT <+ .CNT 2>>>>"
  },
  "CHANGE-DESERT-POSITION": {
   "name": "CHANGE-DESERT-POSITION",
   "file": "camp.zil",
   "line": 1798,
   "endLine": 1835,
   "source": "<ROUTINE CHANGE-DESERT-POSITION ()\n\t <SETG DESERT-HACK <+ ,DESERT-HACK 1>>\n\t <COND (<EQUAL? ,DESERT-HACK 10>\n\t\t<TELL \n\"WARNING: The Surgeon General has determined that wandering about like this is\ndangerous to your health.\" CR>\n\t\t<CRLF>)\n\t       (<EQUAL? ,DESERT-HACK 20>\n\t\t<COND (<ROB-HIM-BLIND>\n\t\t       <TELL\n\"You start dropping things to lighten your load. Before you know it, you're\nempty-handed. A gust of wind comes up off the dune before you, covering over\nwhat you've dropped. So much for that.\" CR>\n\t\t       <CRLF>)>)>\n\t <COND (<EQUAL? ,PRSO ,P?NORTH>\n\t\t<SETG DESERT-LOC <- ,DESERT-LOC 50>>\n\t\t<FIX-LON-LAT 0 2>)\n\t       (<EQUAL? ,PRSO ,P?NE>\n\t\t<SETG DESERT-LOC <- ,DESERT-LOC 49>>\n\t\t<FIX-LON-LAT 2 2>)\n\t       (<EQUAL? ,PRSO ,P?EAST>\n\t\t<SETG DESERT-LOC <+ ,DESERT-LOC 1>>\n\t\t<FIX-LON-LAT 2 0>)\n\t       (<EQUAL? ,PRSO ,P?SE>\n\t\t<SETG DESERT-LOC <+ ,DESERT-LOC 51>>\n\t\t<FIX-LON-LAT 2 -2>)\n\t       (<EQUAL? ,PRSO ,P?SOUTH>\n\t\t<SETG DESERT-LOC <+ ,DESERT-LOC 50>>\n\t\t<FIX-LON-LAT 0 -2>)\n\t       (<EQUAL? ,PRSO ,P?SW>\n\t\t<SETG DESERT-LOC <+ ,DESERT-LOC 49>>\n\t\t<FIX-LON-LAT -2 -2>)\n\t       (<EQUAL? ,PRSO ,P?WEST>\n\t\t<SETG DESERT-LOC <- ,DESERT-LOC 1>>\n\t\t<FIX-LON-LAT -2 0>)\n\t       (<EQUAL? ,PRSO ,P?NW>\n\t\t<SETG DESERT-LOC <- ,DESERT-LOC 51>>\n\t\t<FIX-LON-LAT -2 2>)>>"
  },
  "FIX-LON-LAT": {
   "name": "FIX-LON-LAT",
   "file": "camp.zil",
   "line": 1837,
   "endLine": 1865,
   "source": "<ROUTINE FIX-LON-LAT (INC-LON INC-LAT)\n\t <COND (.INC-LON\n\t\t<SETG SECS-LON <+ ,SECS-LON .INC-LON>>\n\t\t<COND (<G? ,SECS-LON 60>\n\t\t       <SETG SECS-LON 1>\n\t\t       <SETG MINS-LON <+ ,MINS-LON 1>>\n\t\t       <COND (<G? ,MINS-LON 59>\n\t\t\t      <SETG MINS-LON 0>\n\t\t\t      <SETG DEGS-LON <+ ,DEGS-LON 1>>)>)\n\t\t      (<L? ,SECS-LON 1>\n\t\t       <SETG SECS-LON 59>\n\t\t       <SETG MINS-LON <- ,MINS-LON 1>>\n\t\t       <COND (<L? ,MINS-LON 0>\n\t\t\t      <SETG MINS-LON 59>\n\t\t\t      <SETG DEGS-LON <- ,DEGS-LON 1>>)>)>)>\n\t <COND (.INC-LAT\n\t\t<SETG SECS-LAT <+ ,SECS-LAT .INC-LAT>>\n\t\t<COND (<G? ,SECS-LAT 60>\n\t\t       <SETG SECS-LAT 1>\n\t\t       <SETG MINS-LAT <+ ,MINS-LAT 1>>\n\t\t       <COND (<G? ,MINS-LAT 59>\n\t\t\t      <SETG MINS-LAT 0>\n\t\t\t      <SETG DEGS-LAT <+ ,DEGS-LAT 1>>)>)\n\t\t      (<L? ,SECS-LAT 1>\n\t\t       <SETG SECS-LAT 59>\n\t\t       <SETG MINS-LAT <- ,MINS-LAT 1>>\n\t\t       <COND (<L? ,MINS-LAT 0>\n\t\t\t      <SETG MINS-LAT 59>\n\t\t\t      <SETG DEGS-LAT <- ,DEGS-LAT 1>>)>)>)>>"
  },
  "ROB-HIM-BLIND": {
   "name": "ROB-HIM-BLIND",
   "file": "camp.zil",
   "line": 1867,
   "endLine": 1877,
   "source": "<ROUTINE ROB-HIM-BLIND (\"AUX\" F N (FLG <>))\n\t <SET F <FIRST? ,WINNER>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET N .F>\n\t\t\t<SET F <NEXT? .N>>\n\t\t\t<REMOVE .N>\n\t\t\t<SET FLG T>)>>\n\t .FLG>"
  },
  "PROP-TO-TBL": {
   "name": "PROP-TO-TBL",
   "file": "camp.zil",
   "line": 1901,
   "endLine": 1913,
   "source": "<ROUTINE PROP-TO-TBL (SLOC \"AUX\" (TBL ,PROP-TBL) (CNT 0) DUG)\n\t <SET DUG <GETP ,HERE ,P?CAPACITY>>\n\t <COND (<EQUAL? .DUG 0>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<==? <GET .TBL .CNT> 0>\n\t\t\t<PUT .TBL .CNT .SLOC>\n\t\t\t<PUT .TBL <+ .CNT 1> .DUG>\n\t\t\t<PUTP ,HERE ,P?CAPACITY 0> ;\"Huh?\"\n\t\t\t<SET CNT <+ .CNT 2>>\n\t\t\t<RETURN>)\n\t\t       (ELSE\n\t\t\t<SET CNT <+ .CNT 2>>)>>>"
  },
  "TBL-TO-PROP": {
   "name": "TBL-TO-PROP",
   "file": "camp.zil",
   "line": 1915,
   "endLine": 1922,
   "source": "<ROUTINE TBL-TO-PROP (SLOC \"AUX\" (TBL ,PROP-TBL) (CNT 0))\n\t <REPEAT ()\n\t\t <COND (<NOT <L? .CNT 120>>\n\t\t\t<RETURN>)\n\t\t       (<==? <GET .TBL .CNT> .SLOC>\n\t\t\t<PUT .TBL .CNT 0>\n\t\t\t<PUTP ,HERE ,P?CAPACITY <GET .TBL <+ .CNT 1>>>)>\n\t\t <SET CNT <+ .CNT 2>>>>"
  },
  "WEAR-THE-SACK": {
   "name": "WEAR-THE-SACK",
   "file": "camp.zil",
   "line": 1941,
   "endLine": 2087,
   "source": "<ROUTINE WEAR-THE-SACK (\"AUX\" ON-IN?)\n\t <SET ON-IN? \"in\">\n\t <COND (<EQUAL? ,KNAPSACK ,PRSO>\n\t\t<COND (<VERB? WEAR>\n\t\t       <COND (<NOT <IN? ,KNAPSACK ,WINNER>>\n\t\t\t      <COND (<NOT <ITAKE>>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T\n\t\t\t\t     <COND (<NOT <EQUAL? ,PRSI ,NASTY-CROC>>\n\t\t\t\t\t    <TELL \"(taken)\" CR>)\n\t\t\t\t\t   (T\n\t\t\t\t\t    <TELL \"(wearing it)\" CR>)>)>)>\n\t\t       <TELL \n\"You swing the knapsack over your shoulders and it settles on your back as its\ncover flap closes.\" CR>\n\t\t       <FCLEAR ,KNAPSACK ,OPENBIT>\n\t\t       <FSET ,KNAPSACK ,WEARBIT>\n\t\t       <THIS-IS-IT ,KNAPSACK>)\n\t\t      (<AND <VERB? PUT PUT-ON>\n\t\t\t    <EQUAL? ,PRSI ,ME>>\n\t\t       <PERFORM ,V?WEAR ,KNAPSACK>\n\t\t       <THIS-IS-IT ,KNAPSACK>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? PUT PUT-ON>\n\t\t\t    ,PRSI>\n\t\t       <COND (<EQUAL? ,PRSI ,KNAPSACK>\n\t\t\t      <TELL \"Sure. Just like a Klein Bottle, eh?\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,PRSI ,CRACK>\n\t\t\t      <PERFORM ,PRSA ,PRSO ,GROUND>\n\t\t\t      <RTRUE>)\n\t\t\t     (<PRSI? ,FOLDED-COT>\n\t\t\t      <TELL \"Bizarre!\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<NOT <FSET? ,KNAPSACK ,WEARBIT>>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <COND (<AND <EQUAL? ,PRSI ,GROUND>\n\t\t\t\t\t  <GETP ,HERE ,P?MAP>\n\t\t\t\t\t  <NOT <IN-A-TENT?>>>\n\t\t\t\t     <SETG PRSI ,SAND>)>\n\t\t\t      <COND (<FSET? ,PRSI ,SURFACEBIT>\n\t\t\t\t     <SET ON-IN? \"on\">)>\n\t\t\t      <COND (<AND <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t\t\t\t  <NOT <FSET? ,PIT ,INVISIBLE>>\n\t\t\t\t\t  <EQUAL? ,PRSI ,PIT ,GROUND>>\n\t\t\t\t     <TELL \"Dropped.\" CR>\n\t\t\t\t     <SETG P-IT-LOC <>>)\n\t\t\t\t    (T <TELL\n\"You take the knapsack off and place it \" .ON-IN? \" the \" D ,PRSI\n\". As it settles \" .ON-IN? \" the \" D ,PRSI \", the cover flaps open.\" CR>)>\n\t\t\t      <FCLEAR ,KNAPSACK ,WEARBIT>\n\t\t\t      <FSET ,KNAPSACK ,OPENBIT>\n\t\t\t      <COND (<EQUAL? ,PRSI ,GROUND ,SAND>\n\t\t\t\t     <IDROP>)\n\t\t\t\t    (T\n\t\t\t\t     <MOVE ,KNAPSACK ,PRSI>)>\n\t\t\t      <THIS-IS-IT ,KNAPSACK>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <VERB? OPEN>\n\t\t\t    <FSET? ,KNAPSACK ,WEARBIT>>\n\t\t       <TELL \n\"You reach around behind to lift the flap on the top of the knapsack, but it\nkeeps falling back down.\" CR>\n\t\t       <THIS-IS-IT ,KNAPSACK>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? SHAKE>\n\t\t\t    <FSET? ,KNAPSACK ,WEARBIT>>\n\t\t       <TELL\n\"Better take it off first. Unless you want to do a few headstands.\" CR>\n\t\t       <THIS-IS-IT ,KNAPSACK>\n\t\t       <RTRUE>)\n\t\t      (<VERB? FIND>\n\t\t       <COND (<FSET? ,KNAPSACK ,WEARBIT>\n\t\t\t      <TELL \"It's on your back!\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)\n\t\t      (<AND <VERB? LOOK-INSIDE EXAMINE>\n\t\t\t    <FSET? ,KNAPSACK ,WEARBIT>>\n\t\t       <TELL\n\"Your neck doesn't crane back that far. Better take it off first.\" CR>\n\t\t       <THIS-IS-IT ,KNAPSACK>\n\t\t       <RTRUE>)\n\t\t      (<VERB? DISEMBARK DROP>\n\t\t       <COND (<NOT <FSET? ,KNAPSACK ,WEARBIT>>\n\t\t\t      <TELL \"You aren't wearing it!\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <COND (<AND <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t\t\t\t  <NOT <FSET? ,PIT ,INVISIBLE>>>\n\t\t\t\t     <TELL \"Dropped.\" CR>\n\t\t\t\t     <SETG P-IT-LOC <>>)\n\t\t\t\t    (T <TELL\n\"You take the knapsack off and place it down. As it settles, the cover flaps\nopen.\" CR>)>\n\t\t\t      <FCLEAR ,KNAPSACK ,WEARBIT>\n\t\t\t      <FSET ,KNAPSACK ,OPENBIT>\n\t\t\t      <IDROP>\n\t\t\t      <THIS-IS-IT ,KNAPSACK>\n\t\t\t      <RTRUE>)>)\n\t\t      (<VERB? TAKE>\n\t\t       <COND (<AND <FSET? ,PRSO ,WEARBIT>\n\t\t\t           <OR <EQUAL? <GET ,P-VTBL 0> ,W?REMOVE>\n\t\t\t\t       <EQUAL? ,PRSI ,ME>>>\n\t\t\t      <PERFORM ,V?DISEMBARK ,PRSO>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <COND (<NOT <FSET? ,PRSO ,WEARBIT>>\n\t\t\t\t     <PERFORM ,V?WEAR ,PRSO ,NASTY-CROC>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T <TELL \"You already have it.\" CR>\n\t\t\t\t     <RTRUE>)>)>)>)\n\t       (<EQUAL? ,KNAPSACK ,PRSI>\n\t\t<COND (<VERB? PUT>\n\t\t       <COND (<FLAMING? ,PRSO>\n\t\t\t      <TELL\n\"Don't you think you should put out the \" D ,PRSO \" first?\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<PRSO? ,SHOVEL ,BEAM ,CRATE>\n\t\t\t      <TELL\n\"That's like trying to fit a Beethoven Symphony into a music box.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<PRSO? ,SAND ,WATER ,GLOBAL-WATER>\n\t\t\t      <TELL \n\"It would only seep through the roughly-stitched seams, so why bother?\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <FSET ,PRSO ,TOUCHBIT>\n\t\t\t      <RFALSE>)>)\n\t\t      (<VERB? TAKE>\n\t\t       <COND (<FSET? ,KNAPSACK ,OPENBIT>\n\t\t\t      <RFALSE>)\n\t\t\t     (<FSET? ,KNAPSACK ,WEARBIT>\n\t\t\t      <TELL \n\"Your arms don't reach back that far, and groping around in the sack isn't the\nbest of ideas. It would help if you took it off first.\" CR>\n\t\t\t      <THIS-IS-IT ,KNAPSACK>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \"The knapsack isn't open.\" CR>\n\t\t\t      <THIS-IS-IT ,KNAPSACK>\n\t\t\t      <RTRUE>)>)\n\t\t      (ELSE\n\t\t       <RFALSE>)>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "CRATE-FCN": {
   "name": "CRATE-FCN",
   "file": "camp.zil",
   "line": 2102,
   "endLine": 2187,
   "source": "<ROUTINE CRATE-FCN (\"AUX\" (FLG <>))\n\t <COND (<AND <VERB? READ EXAMINE>\n\t\t     <OR <IN? ,CRATE <LOC ,WINNER>>\n\t\t\t <IN? ,CRATE ,HERE>\n\t\t\t <IN? ,CRATE ,WINNER>\n\t\t\t <EQUAL? <LOC ,CRATE> <LOC ,WINNER>>\n\t\t\t <EQUAL? <LOC ,CRATE> ,WINNER>\n\t\t\t <AND <IN? ,CRATE ,KNAPSACK>\n\t\t\t      <EQUAL? <LOC ,KNAPSACK> ,HERE>>>>\n\t\t<TELL\n\"The crate is slightly beaten up from the landing, but it seems to have held\ntogether fairly well. There's a small label on it that says \\\"This crate\ncontains 1 (one) black box (tm).\\\"\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <IN? ,CRATE ,GLOBAL-OBJECTS>\n\t\t     <NOT <IN-A-TENT?>>\n\t\t     <G? ,MOVES 4>>\n\t\t<TELL \n\t\t \"It's coming down, and it looks like it should land near you!\" CR>)\n\t       (<AND <VERB? EXAMINE>\n\t\t     <IN? ,CRATE ,GLOBAL-OBJECTS>\n\t\t     <IN-A-TENT?>>\n\t\t<TELL \"I think you've got crates on the mind!\" CR>)\n\t       (<AND <VERB? MUNG>\n\t\t     <NOT <IN? ,CRATE ,GLOBAL-OBJECTS>>>\n\t\t<COND (<PRSI? ,SHOVEL ,PICK-AXE>\n\t\t       <TELL \n\"Wood chips fly from the crate, hurtling into the sand all around, as the crate\nsuffers your frenzied attack. The defenseless packing crate looks as if to flee\nbut before it can react (growing legs is a time-consuming task) there is\nnothing left of it but a mere memory. (You really should seek some\npsychological counselling.)\" CR>\n\t\t       <COND (<NOT <FSET? ,BLACK-BOX ,TOUCHBIT>>\n\t\t\t      <MOVE ,BLACK-BOX ,HERE>\n\t\t\t      <FSET ,BLACK-BOX ,RMUNGBIT>)>\n\t\t       <REMOVE ,PRSO>\n\t\t       <SETG P-IT-LOC <>>\n\t\t       <RTRUE>)>)\n\t       (<AND <NOT <IN? ,CRATE ,GLOBAL-OBJECTS>>\n\t\t     <OR <VERB? BURN>\n\t\t\t <AND <VERB? DROP>\n\t\t\t      <PRSI? ,CRATE>\n\t\t\t      <FLAMING? ,PRSO>>>>\n\t\t<TELL\n\"Well, who would have thought it? The crate catches fire quickly, the flames\nleaping about in mad abandon, gaily changing color as the heat becomes more and\nmore intense. You hear a sizzling\">\n\t\t<COND (<NOT <FSET? ,BLACK-BOX ,TOUCHBIT>>\n\t\t       <JIGS-UP \n\"... followed by an explosion which takes place right before your face.\nNeedless to say, your body didn't appreciate it.\">)\n\t\t      (T\n\t\t       <TELL\n\" as the crate consumes itself in gleeful merriment.\" CR>\n\t\t       <REMOVE ,CRATE>\n\t\t       <SETG P-IT-LOC <>>)>\n\t\t<RTRUE>)\n\t       (<VERB? STAND-UNDER>\n\t\t<RFALSE>)\n\t       (<AND <VERB? BOARD>\n\t\t     <NOT <IN? ,CRATE GLOBAL-OBJECTS>>>\n\t\t<TELL\n\"You couldn't fit in there unless you put yourself through a trash compacter.\" CR> <RTRUE>)\n\t       (<IN? ,CRATE ,GLOBAL-OBJECTS>\n\t\t<TELL \n\"Hey, give it a chance to get here. I know you're impatient to get on with\nthis, but be reasonable!\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN>\n\t\t<TBL-TO-INSIDE ,CRATE ,CRATE-TBL\n\"The crate opens slowly, the boards creaking with the strain.\">\n\t\t<RTRUE>)\n\t       (<AND <VERB? CLOSE>\n\t\t     <NOT <FSET? ,CRATE ,SURFACEBIT>>>\n\t\t<COND (<AND <IN? ,TORCH ,CRATE>\n\t\t\t    <FLAMING? ,TORCH>>\n\t\t       <SET FLG T>)>\n\t\t<INSIDE-OBJ-TO ,CRATE-TBL ,CRATE>\n\t\t<COND (.FLG\n\t\t       <KILL-TORCH T>)>\n\t\t<RTRUE>)\n\t       (<VERB? SHAKE>\n\t\t<COND (<NOT <0? <GET ,CRATE-TBL 1>>>\n\t\t       <TELL \"Hmm. Something's in there.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "BOX-OPENER-FCN": {
   "name": "BOX-OPENER-FCN",
   "file": "camp.zil",
   "line": 2205,
   "endLine": 2228,
   "source": "<ROUTINE BOX-OPENER-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"To do that to the \" D ,BLACK-BOX \" would most probably\nruin the delicate equipment inside.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? CLOSE>\n\t\t<TELL \"I didn't know it was open.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>\n\t\t<RTRUE>)\n\t       (<VERB? LAMP-ON>\n\t\t<PERFORM ,V?PUSH ,BUTTON>\n\t\t<RTRUE>)\n\t       (<VERB? LAMP-OFF>\n\t\t<TELL \"It turns itself off after each button press.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? THROW THROW-DOWN MUNG ATTACK SHAKE>\n\t\t     <EQUAL? ,PRSO ,BLACK-BOX>>\n\t\t<TELL \"Rattle, rattle, jostle, crunch. Oh oh...\" CR>\n\t\t<FSET ,BLACK-BOX ,RMUNGBIT>\n\t\t<COND (<VERB? THROW THROW-DOWN>\n\t\t       <MOVE ,PRSO ,HERE>)>\n\t\t<RTRUE>)>>"
  },
  "PRESS-BUTTON-FCN": {
   "name": "PRESS-BUTTON-FCN",
   "file": "camp.zil",
   "line": 2242,
   "endLine": 2298,
   "source": "<ROUTINE PRESS-BUTTON-FCN (\"AUX\" (OFFS -3) LAT-S LON-S H-CK)\n\t <COND (<VERB? PUSH>\n\t        <COND (<FSET? ,BLACK-BOX ,RMUNGBIT>\n\t\t       <TELL <PICK-ONE ,NOISES-LTBL> \"!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,HERE ,ENDLESS-DESERT>\n\t\t       <TELL \n\"The box comes to life, its L.E.D.s lighting, and then flashes \" N ,DEGS-LAT>\n\t\t       <TELL \" degree\">\n\t\t       <COND (<NOT <EQUAL? ,DEGS-LAT 1>>\n\t\t\t      <TELL \"s\">)>\n\t\t       <TELL \" \" N ,MINS-LAT \" minute\">\n\t\t       <COND (<NOT <EQUAL? ,MINS-LAT 1>>\n\t\t\t      <TELL \"s\">)>\n\t\t       <TELL \" \" N ,SECS-LAT \" seconds N latitude, \">\n\t\t       <TELL N ,DEGS-LON>\n\t\t       <TELL \" degree\">\n\t\t       <COND (<NOT <EQUAL? ,DEGS-LON 1>>\n\t\t\t      <TELL \"s\">)>\n\t\t       <TELL \" \" N ,MINS-LON \" minute\">\n\t\t       <COND (<NOT <EQUAL? ,MINS-LON 1>>\n\t\t\t      <TELL \"s\">)>\n\t\t       <TELL \" \" N ,SECS-LON \" seconds E longitude.\"  CR>)\n\t\t      (<NOT <GETP ,HERE ,P?MAP>>\n\t\t       <TELL \n\"There's no need for that here. It's obvious where you are.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,HERE ,TENT>\n\t\t\t      <SET H-CK ,P2>)\n\t\t\t     (<EQUAL? ,HERE ,TENT2>\n\t\t\t      <SET H-CK ,P7>)\n\t\t\t     (<EQUAL? ,HERE ,SUPPLY-TENT>\n\t\t\t      <SET H-CK ,P4>)\n\t\t\t     (ELSE\n\t\t\t      <SET H-CK ,HERE>)>\n\t\t        <REPEAT ()\n\t\t\t       <SET OFFS <+ .OFFS 3>>\n\t\t\t       <COND (<G? .OFFS 54>\n\t\t\t\t      <RETURN>)\n\t\t\t\t     (T\n\t\t\t\t      <COND (<EQUAL? .H-CK\n\t\t\t\t\t\t     <GET ,MAP-TBL .OFFS>>\n\t\t\t\t\t     <SET LON-S\n\t\t\t\t\t\t  <GET ,MAP-TBL <+ .OFFS 1>>>\n\t\t\t\t\t     <SET LAT-S\n\t\t\t\t\t\t  <GET ,MAP-TBL <+ .OFFS 2>>>\n\t\t\t\t\t     <RETURN>)>)>>\n\t\t       <TELL \n\"The box comes to life, its L.E.D.s lighting, and then flashes 24 degrees 11\nminutes \"\n\t\t\t N .LAT-S\n\" seconds N latitude, 32 degrees 12 minutes \"\n\t\t\t N .LON-S \" seconds E longitude.\" CR>)>)\n\t       (<VERB? FIND>\n\t\t<TELL \"It's on the top of the box.\" CR>\n\t\t<RTRUE>)>>"
  },
  "DIASMBIGUATE-FCN": {
   "name": "DIASMBIGUATE-FCN",
   "file": "camp.zil",
   "line": 2300,
   "endLine": 2314,
   "source": "<ROUTINE DIASMBIGUATE-FCN (OBJECT)\n\t <COND (<IN? ,ONE-MATCH ,WINNER>\n\t\t<RETURN ,ONE-MATCH>)\n\t       (<IN? ,MATCHES ,WINNER>\n\t\t<COND (<NOT <FSET? ,MATCHES ,OPENBIT>>\n\t\t       <TELL \"(opening matchbook first)\" CR>\n\t\t       <FSET ,MATCHES ,OPENBIT>)>\n\t\t<COND (<G? ,MATCH-COUNT 1>\n\t\t       <RETURN ,MANY-MATCHES>)\n\t\t      (<EQUAL? ,MATCH-COUNT 1>\n\t\t       <RETURN ,SINGLE-MATCH>)\n\t\t      (ELSE\n\t\t       <RETURN ,EMPTY-MATCHES>)>)\n\t       (ELSE\n\t\t<RETURN ,ONE-MATCH>)>>"
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
   "file": "crufty.zil",
   "line": 3,
   "endLine": 16,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS) \n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <0? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "SOUTH-CENTER-F": {
   "name": "SOUTH-CENTER-F",
   "file": "cube.zil",
   "line": 89,
   "endLine": 99,
   "source": "<ROUTINE SOUTH-CENTER-F (RARG \"AUX\" (OFFS -1) BK)\n\t <COND (<NOT <EQUAL? .RARG ,M-END>>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <SET OFFS <+ .OFFS 1>>\n\t\t <COND (<G? .OFFS 8>\n\t\t\t<RFALSE>)\n\t\t       (T\n\t\t\t<SET BK <GET ,BRICKS-TBL .OFFS>>\n\t\t\t<COND (<IN? .BK ,PUNCH-PANEL>\n\t\t\t       <FSET .BK ,NDESCBIT>)>)>>>"
  },
  "MOVE-PANEL-HERE": {
   "name": "MOVE-PANEL-HERE",
   "file": "cube.zil",
   "line": 137,
   "endLine": 142,
   "source": "<ROUTINE MOVE-PANEL-HERE (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<EQUAL? ,HERE ,LANDING-ONE ,LANDING-THREE ,TINY-LANDING>\n\t\t       <MOVE-ROPE-HERE ,M-ENTER>\n\t\t       <FCLEAR ,ROPE ,NDESCBIT>)>)>\n\t <RFALSE>>"
  },
  "PUNCH-PANEL-FCN": {
   "name": "PUNCH-PANEL-FCN",
   "file": "cube.zil",
   "line": 179,
   "endLine": 251,
   "source": "<ROUTINE PUNCH-PANEL-FCN (\"AUX\" NUM)\n\t <COND (<AND <VERB? PUT>\n\t\t     <PRSI? ,PUNCH-PANEL>\n\t\t     <NOT <GETP ,PRSO ,P?BRICK>>>\n\t\t<TELL \"It won't fit in there.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE READ>\n\t\t<SET NUM <- 9 ,BRICKS-TAKEN>>\n\t\t<TELL \"There \">\n\t\t<COND (<EQUAL? .NUM 1>\n\t\t       <TELL \"is \">)\n\t\t      (ELSE <TELL \"are \">)>\n\t\t<TELL <GET ,NUM-TBL .NUM> \" brick\">\n\t\t<COND (<NOT <EQUAL? .NUM 1>>\n\t\t       <TELL \"s\">)>\n\t\t<TELL \" recessed into the panel\">\n\t\t<COND (<EQUAL? .NUM 0 1>\n\t\t       <TELL \".\" CR>)\n\t\t      (ELSE <TELL\n\", three rows by three columns. These bricks look as if they could be easily\nremoved and are marked with numerical symbols.\" CR>)>\n\t\t<CRLF>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL ,DASH-STR CR>\n\t\t<TELL ,EX-SP-EX-STR CR>\n\t\t<TELL \"!  \">\n\t\t<COND (<IN? ,BRICK-ONE ,PUNCH-PANEL>\n\t\t       <TELL \"<.>\">)\n\t\t      (T <TELL \"   \">)>\n\t\t<TELL \"     \">\n\t\t<COND (<IN? ,BRICK-TWO ,PUNCH-PANEL>\n\t\t       <TELL \"<:>\">)\n\t\t      (T <TELL \"   \">)>\n\t\t<TELL \"     \">\n\t\t<COND (<IN? ,BRICK-THREE ,PUNCH-PANEL>\n\t\t       <TELL \"<:.>\">)\n\t\t      (T <TELL \"    \">)>\n\t\t<TELL \"     !\" CR>\n\t\t<TELL ,EX-SP-EX-STR CR>\n\t\t<TELL \"!  \">\n\t\t<COND (<IN? ,BRICK-FOUR ,PUNCH-PANEL>\n\t\t       <TELL \"<::>\">)\n\t\t      (T <TELL \"    \">)>\n\t\t<TELL \"    \">\n\t\t<COND (<IN? ,BRICK-FIVE ,PUNCH-PANEL>\n\t\t       <TELL \"<::.>\">)\n\t\t      (T <TELL \"     \">)>\n\t\t<TELL \"   \">\n\t\t<COND (<IN? ,BRICK-SIX ,PUNCH-PANEL>\n\t\t       <TELL \"<:::>\">)\n\t\t      (T <TELL \"     \">)>\n\t\t<TELL \"    !\" CR>\n\t\t<TELL ,EX-SP-EX-STR CR>\n\t\t<TELL \"!  \">\n\t\t<COND (<IN? ,BRICK-SEVEN ,PUNCH-PANEL>\n\t\t       <TELL \"<:::.>\">)\n\t\t      (T <TELL \"      \">)>\n\t\t<TELL \"  \">\n\t\t<COND (<IN? ,BRICK-EIGHT ,PUNCH-PANEL>\n\t\t       <TELL \"<::::>\">)\n\t\t      (T <TELL\"      \">)>\n\t\t<TELL \"  \">\n\t\t<COND (<IN? ,BRICK-NINE ,PUNCH-PANEL>\n\t\t       <TELL \"<::::.>\">)\n\t\t      (T <TELL \"       \">)>\n\t\t<TELL \"  !\" CR>\n\t\t<TELL ,EX-SP-EX-STR CR>\n\t\t<TELL ,DASH-STR CR>\n\t\t<FIXED-FONT-OFF>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PUNCH-PANEL>\n\t\t<RTRUE>)>>"
  },
  "TAKE-BRICK-FCN": {
   "name": "TAKE-BRICK-FCN",
   "file": "cube.zil",
   "line": 355,
   "endLine": 402,
   "source": "<ROUTINE TAKE-BRICK-FCN ()\n\t<COND (<VERB? EXAMINE READ>\n\t       <FIXED-FONT-ON>\n\t       <TELL <GETP ,PRSO ,P?TEXT> CR>\n\t       <FIXED-FONT-OFF>\n\t       <RTRUE>)\n\t      (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSI ,PUNCH-PANEL>>\n\t\t<FSET ,PRSO ,NDESCBIT>\n\t\t<SETG BRICKS-TAKEN <- ,BRICKS-TAKEN 1>>\n\t\t<RFALSE>)\n\t       (<OR <NOT <VERB? TAKE>>\n\t\t    <NOT <IN? ,PRSO ,PUNCH-PANEL>>>\n\t\t<RFALSE>)>\n\t <COND (<EQUAL? <ITAKE> <>>\n\t\t<RFATAL>)\n\t       (T\n\t\t<COND (<AND <EQUAL? ,BRICKS-TAKEN 0>\n\t\t\t    <NOT <EQUAL? ,PRSO ,BRICK-ONE>>>\n\t\t       <SETG WRONG-BRICK T>)\n\t\t      (<AND <EQUAL? ,BRICKS-TAKEN 1>\n\t\t\t    <NOT <EQUAL? ,PRSO ,BRICK-THREE>>>\n\t\t       <SETG WRONG-BRICK T>)\n\t\t      (<AND <EQUAL? ,BRICKS-TAKEN 2>\n\t\t\t    <NOT <EQUAL? ,PRSO ,BRICK-FIVE>>>\n\t\t       <SETG WRONG-BRICK T>)>\n\t\t<SETG BRICKS-TAKEN <+ ,BRICKS-TAKEN 1>>\n\t\t<COND (<NOT <IN? ,PRSO ,PUNCH-PANEL>>\n\t\t       <FCLEAR ,PRSO ,NDESCBIT>)>\n\t\t<COND (<AND <EQUAL? ,BRICKS-TAKEN 3>\n\t\t\t    <NOT ,BRICKS-PRESSED>\n\t\t\t    <NOT ,WRONG-BRICK>>\n\t\t       <TELL\n\"As soon as you grasp this brick a square doorway swings open. You leap back,\nunsure of what might happen, but quickly realize you've discovered a hidden\npassageway, making eastern movement from this cube room possible.\" CR>\n\t\t       <SETG BRICKS-PRESSED T>\n\t\t       <SETG SCORE <+ ,SCORE 25>>\n\t\t       <PUTP ,SOUTH-CENTER ,P?LDESC\n\"You are in a cubical-room whose walls, floor and ceiling are of an\nidentical size. There are three square doorways cut into the walls --\nto the north, to the west, and a newly opened one to the east. Engraved\non a wall are some hieroglyphs, while a panel, recessed in the same wall,\nglows softly in your reflected light.\">\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Taken.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "SCORE-RMS": {
   "name": "SCORE-RMS",
   "file": "diamond.zil",
   "line": 166,
   "endLine": 170,
   "source": "<ROUTINE SCORE-RMS (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <NOT <FSET? ,HERE ,TOUCHBIT>>>\n\t\t<SETG SCORE <+ ,SCORE 25>>)>\n\t <RFALSE>>"
  },
  "LOOK-DOWN-HALLS": {
   "name": "LOOK-DOWN-HALLS",
   "file": "diamond.zil",
   "line": 189,
   "endLine": 200,
   "source": "<ROUTINE LOOK-DOWN-HALLS ()\n\t <TELL \"As you peer down the dimly-lit hallways, you \">\n\t <COND (<NOT <STATUE-OPPOSITE?>>\n\t\t<TELL \"see that the doors in all four hallways are\nbalanced halfway open.\" CR>)\n\t       (ELSE\n\t\t<TELL \"notice that the door to the \">\n\t\t<TELL ,HALL-DIR>\n\t\t<TELL \n\" is closed, while the one in the opposite hallway is all the way open. The\nother two are halfway open.\" CR>)>\n\t <FSET ,ROPE ,NDESCBIT>>"
  },
  "CIRCULAR-ROOM-FCN": {
   "name": "CIRCULAR-ROOM-FCN",
   "file": "diamond.zil",
   "line": 204,
   "endLine": 223,
   "source": "<ROUTINE CIRCULAR-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<MOVE ,ROPE ,HERE>\n\t\t<FCLEAR ,ROPE ,NDESCBIT>\n\t\t<REMOVE ,ISIS-DOOR>\n\t\t<REMOVE ,NEPHTH-DOOR>\n\t\t<REMOVE ,NEITH-DOOR>\n\t\t<REMOVE ,SELKIS-DOOR>\n\t\t<COND (<NOT ,CIRCLE-SCORED>\n\t\t       <SETG SCORE <+ ,SCORE 30>>\n\t\t       <SETG CIRCLE-SCORED T>)>\n\t\t<COND (<AND <NOT ,VERBOSE>\n\t\t\t    <FSET? ,HERE ,TOUCHBIT>>\n\t\t       <LOOK-DOWN-HALLS>\n\t\t       <CRLF>)>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<FCLEAR ,ROPE ,NDESCBIT>\n\t\t<TELL <GETP ,LANDING-ZERO ,P?LDESC> CR>\n\t\t<DESCRIBE-ROPE-FCN ,M-OBJDESC>\n\t\t<LOOK-DOWN-HALLS>)>>"
  },
  "HEAD-FCN": {
   "name": "HEAD-FCN",
   "file": "diamond.zil",
   "line": 252,
   "endLine": 261,
   "source": "<ROUTINE HEAD-FCN ()\n\t <COND (<VERB? RAISE>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? SHAKE>\n\t\t<TELL \"It's as empty as yours.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? CLIMB-ON>\n\t\t<TELL \"Next you'll be asking for tumbling lessons.\" CR>\n\t\t<RTRUE>)>>"
  },
  "HUGE-STATUE-FCN": {
   "name": "HUGE-STATUE-FCN",
   "file": "diamond.zil",
   "line": 263,
   "endLine": 296,
   "source": "<ROUTINE HUGE-STATUE-FCN ()\n\t <COND (<AND <VERB? MOVE TAKE PUSH PUSH-TO>\n\t\t     <FSET? ,HEAD ,INVISIBLE>>\n\t\t<TELL\n\"The statue teeters, swaying and rocking back and forth, then falls over,\nits top-heavy structure striking the floor with a dull, loud thud. As you\nlook over the damage, you see the head has separated from the statue.\" CR>\n\t\t<MOVE ,HEAD ,HERE>\n\t\t<FCLEAR ,HEAD ,INVISIBLE>\n\t\t<FSET ,HUGE-STATUE ,TOUCHBIT>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE RAISE>\n\t\t<TELL \"It's far too heavy.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? PUSH RAISE MOVE>\n\t\t<TELL\n\"The statue rocks over and back on its back. Looks like it's headed nowhere\nfast.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? MUNG>\n\t\t<COND (<FSET? ,HEAD ,INVISIBLE>\n\t\t       <PERFORM ,V?PUSH ,HUGE-STATUE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"Haven't you done enough damage to that beautiful relic?\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,HEAD ,INVISIBLE>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TELL\n\"The statue lies on the floor, its head broken off. In this state, the statue\nweighs a little less than you but it's still far too heavy to carry.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "STONE-DOOR-FCN": {
   "name": "STONE-DOOR-FCN",
   "file": "diamond.zil",
   "line": 319,
   "endLine": 322,
   "source": "<ROUTINE STONE-DOOR-FCN ()\n\t <COND (<VERB? OPEN RAISE>\n\t\t<TELL \"You can't. It's got to weigh 50 tons.\" CR>\n\t\t<RTRUE>)>>"
  },
  "STATUE-OPPOSITE?": {
   "name": "STATUE-OPPOSITE?",
   "file": "diamond.zil",
   "line": 392,
   "endLine": 405,
   "source": "<ROUTINE STATUE-OPPOSITE? (\"AUX\" (OFFS -3) H-CHK T-CHK (FLG <>))\n\t <REPEAT ()\n\t\t <SET OFFS <+ .OFFS 3>>\n\t\t <COND (<G? .OFFS 9>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET H-CHK <GET ,STATUE-CHK-TBL .OFFS>>\n\t\t\t<SET T-CHK <GET ,STATUE-CHK-TBL <+ .OFFS 1>>>\n\t\t\t<COND (<AND <EQUAL? ,HERE .H-CHK ,LANDING-ZERO>\n\t\t\t\t    <G? <WEIGHT .T-CHK> 300>>\n\t\t\t       <SET FLG T>\n\t\t\t       <SETG HALL-DIR <GET ,STATUE-CHK-TBL\n\t\t\t\t\t\t   <+ .OFFS 2>>>)>)>>\n\t <RETURN .FLG>>"
  },
  "CLOSE-DEM-DOOAHS": {
   "name": "CLOSE-DEM-DOOAHS",
   "file": "diamond.zil",
   "line": 409,
   "endLine": 448,
   "source": "<ROUTINE CLOSE-DEM-DOOAHS (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<SET KLUDGE-FLG <>>\n\t\t<COND (<STATUE-OPPOSITE?>\n\t\t       <COND (<EQUAL? ,HERE ,A-PRIME>\n\t\t\t      <FSET ,NEPHTH-DOOR ,OPENBIT>)\n\t\t\t     (<EQUAL? ,HERE ,B-PRIME>\n\t\t\t      <FSET ,SELKIS-DOOR ,OPENBIT>)\n\t\t\t     (<EQUAL? ,HERE ,D-PRIME>\n\t\t\t      <FSET ,ISIS-DOOR ,OPENBIT>)\n\t\t\t     (ELSE\n\t\t\t      <FSET ,NEITH-DOOR ,OPENBIT>)>)\n\t\t      (<G? <WEIGHT ,HERE> 300>\n\t\t       <RFALSE>)\n\t\t      (T <TELL \n\"As you enter the corridor, a huge stone door begins to slide down from the\nceiling closing off any further progress. The closer you come to the door, the\nfurther down the door descends until, eventually, it is close to the floor.\nWhen you turn around, you can barely see beyond the Circular Room where an\nidentical door has risen off the floor an equal amount.\" CR>\n\t\t       <CRLF>\n\t\t       <COND (<EQUAL? ,HERE ,A-PRIME ,E-PRIME>\n\t\t\t      <MOVE ,NEPHTH-DOOR ,A-PRIME>\n\t\t\t      <FCLEAR ,NEPHTH-DOOR ,OPENBIT>\n\t\t\t      <MOVE ,NEITH-DOOR ,E-PRIME>\n\t\t\t      <FCLEAR ,NEITH-DOOR ,OPENBIT>)\n\t\t\t     (<EQUAL? ,HERE ,B-PRIME ,D-PRIME>\n\t\t\t      <MOVE ,SELKIS-DOOR ,B-PRIME>\n\t\t\t      <MOVE ,ISIS-DOOR ,D-PRIME>\n\t\t\t      <FCLEAR ,SELKIS-DOOR ,OPENBIT>\n\t\t\t      <FCLEAR ,ISIS-DOOR ,OPENBIT>)>\n\t\t       <SET KLUDGE-FLG T>)>)\n\t       (<AND <EQUAL? .RARG ,M-END>\n\t\t     <STATUE-OPPOSITE?>\n\t\t     <NOT ,KLUDGE-FLG>>\n\t\t<TELL\n\"The path before you remains open, the stone door having risen to the ceiling,\ncounterbalanced by the door in the opposite corridor.\" CR>\n\t\t<SET KLUDGE-FLG T>\n\t\t<RTRUE>)>>"
  },
  "FINGER-FCN": {
   "name": "FINGER-FCN",
   "file": "globals.zil",
   "line": 54,
   "endLine": 65,
   "source": "<ROUTINE FINGER-FCN ()\n\t <COND (<AND <VERB? PUT-ON>\n\t\t     <PRSI? ,FINGER>>\n\t\t<PERFORM ,V?WEAR ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<FSET? ,RING ,WEARBIT>\n\t\t       <TELL \"Sitting on your finger is a ring.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"It's part of your hands.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "AIR-FCN": {
   "name": "AIR-FCN",
   "file": "globals.zil",
   "line": 103,
   "endLine": 123,
   "source": "<ROUTINE AIR-FCN ()\n\t <COND (<VERB? EXAMINE SMELL TASTE>\n\t\t<COND (<GETP ,HERE ,P?MAP>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TELL \"It's stale and musty\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<TELL \"I think you're an air head.\" CR>)\n\t       (<AND <PRSI? AIR>\n\t\t     <VERB? EXAMINE LOOK-INSIDE>>\n\t\t<PERFORM ,V?LOOK-UP>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSI ,AIR>\n\t\t     <VERB? THROW DROP>>\n\t\t<PERFORM ,PRSA ,PRSO ,GROUND>\n\t\t<RTRUE>)\n\t       (<AND <VERB? WAVE>\n\t\t     <PRSO? ,AIR>>\n\t\t<TELL \"Don't expect me to tell you the sky waves back.\" CR>\n\t\t<RTRUE>)>>"
  },
  "READ-FLOOR-F": {
   "name": "READ-FLOOR-F",
   "file": "globals.zil",
   "line": 131,
   "endLine": 135,
   "source": "<ROUTINE READ-FLOOR-F ()\n\t <COND (<AND <VERB? EXAMINE READ>\n\t\t     <EQUAL? ,HERE ,CENTRAL-ROOM>>\n\t\t<PERFORM ,V?READ ,HIEROGLYPHS>\n\t\t<RTRUE>)>>"
  },
  "CRACK-FCN": {
   "name": "CRACK-FCN",
   "file": "globals.zil",
   "line": 146,
   "endLine": 159,
   "source": "<ROUTINE CRACK-FCN ()\n\t <COND (<OR <GETP ,HERE ,P?MAP>\n\t\t    <EQUAL? <GETP ,HERE ,P?ACTION> ,BURN-THE-BARGE>\n\t\t    <AND <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t\t <NOT <FSET? ,PIT ,INVISIBLE>>>>\n\t\t<TELL \"I see no crack here.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"Get real. There's nothing worth looking at in there.\" CR>\n\t\t<RTRUE>)>>"
  },
  "HOLE-FCN": {
   "name": "HOLE-FCN",
   "file": "globals.zil",
   "line": 175,
   "endLine": 198,
   "source": "<ROUTINE HOLE-FCN ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<AND <EQUAL? ,HERE ,P8>\n\t\t\t    <IN? ,PYRAMID ,HERE>>\n\t\t       <TELL\n\"You can see the block and the opening in there.\" CR>)\n\t\t      (<G? <GETP ,HERE ,P?CAPACITY> 0>\n\t\t       <TELL \"Never mind that -- Here's a better\nproblem: You dig a hole 52 feet by 20 feet by .105 yards. It takes you 5\nhours, 11 minutes and 2 seconds. You sweat off thirty grams of water\nper hour. And your best friend just ran off with the rent money. Now:\nHow much sand is in the hole you dug?\" CR>)\n\t\t      (T\n\t\t       <TELL \"I don't see any hole here.\" CR>)>)\n\t       (<VERB? FIND>\n\t\t<COND (<GETP ,HERE ,P?CAPACITY>\n\t\t       <TELL \"It's right here.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<AND <EQUAL? ,PRSI ,HOLE>\n\t\t     <VERB? PUT>\n\t\t     <GETP ,HERE ,P?CAPACITY>>\n\t\t<TELL \n\"It's just a hole in the sand from your excavation attempts. There's no need to\nput anything into it.\" CR>)>>"
  },
  "WALL-FCN": {
   "name": "WALL-FCN",
   "file": "globals.zil",
   "line": 231,
   "endLine": 245,
   "source": "<ROUTINE WALL-FCN (\"AUX\" RMG RMGL)\n\t <COND (<AND <EQUAL? ,HERE ,STAIRS-BOTTOM>\n\t\t     <VERB? EXAMINE READ>>\n\t\t<COND (<IN? ,PLASTER1 ,STAIRS-BOTTOM>\n\t\t       <PERFORM ,V?EXAMINE ,PLASTER1>\n\t\t       <RTRUE>)\n\t\t      (T <TELL \"I see nothing special about the wall.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? EXAMINE READ>\n\t\t<COND (<AND <GLOBAL-IN? ,HIEROGLYPHS ,HERE>\n\t\t\t    <NOT <EQUAL? ,HERE ,CENTRAL-ROOM>>>\n\t\t       <PERFORM ,V?READ ,HIEROGLYPHS>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <RFALSE>)>)>>"
  },
  "READ-PALMS-F": {
   "name": "READ-PALMS-F",
   "file": "globals.zil",
   "line": 260,
   "endLine": 263,
   "source": "<ROUTINE READ-PALMS-F ()\n\t <COND (<VERB? READ>\n\t\t<TELL \"I don't read palms.\" CR>\n\t\t<RTRUE>)>>"
  },
  "CRETIN": {
   "name": "CRETIN",
   "file": "globals.zil",
   "line": 278,
   "endLine": 347,
   "source": "<ROUTINE CRETIN ()\n\t <COND (<NOT <EQUAL? ,PRSO ,WINNER ,ME>>\n\t\t<RFALSE>)>\n\t <COND (<VERB? EAT>\n\t\t<TELL\n\"I've heard of biting one's knuckles, chewing one's fingernails, but don't you\nthink that's a little extreme?\" CR>)\n\t       (<VERB? DRINK>\n\t\t<TELL\n\"Find me a blender, jump in it, and once you're liquified, we'll talk.\" CR>)\n\t       (<VERB? ALARM>\n\t\t<TELL \n\"Good morning!\" CR>)\n\t       (<VERB? MUNG ATTACK KILL>\n\t\t<TELL\n\"Hey, I know just how you feel. And I'm sure you think you deserve it -- I've\nbeen there myself. But take heart -- let nature take care of you. I'm sure it\nwill, in time.\" CR>)\n\t       (<VERB? PRAY>\n\t\t<TELL \"Save yourself. Don't look to me, man.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL \"Take a course in Zen.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"Auto-eroticism is not the answer.\" CR>)\n\t       (<VERB? BURN>\n\t\t<TELL \"Come on. Don't you have enough troubles?\" CR>)\n\t       (<VERB? EXAMINE LOOK-INSIDE THROW>\n\t\t<TELL\n\"Hmmm. How do you propose I accomplish that? (And they told me in AI school\nthe intelligent creatures were on the other side of the keyboard!)\" CR>)\n\t       (<VERB? RUB>\n\t\t<TELL \n\"Go rub yourself. You're starting to rub me the wrong way.\" CR>)\n\t       (<VERB? PLAY>\n\t\t<TELL \"Who do you think you're playing around with?\" CR>)\n\t       (<VERB? CLIMB-ON BOARD>\n\t\t<TELL \"I'll get on your case is what I'll do, turkey.\" CR>)\n\t       (<VERB? CLEAN>\n\t\t<TELL \"Take a bath. Leave me out of this.\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<TELL \"Better yet, close your mouth.\" CR>)\n\t       (<VERB? CROSS>\n\t\t<TELL \"Crossed and double-crossed, sucker.\" CR>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"What makes you think you deserve it?\" CR>)\n\t       (<VERB? DROP>\n\t\t<TELL \"Like a hot potato.\" CR>)\n\t       (<VERB? LEAN-ON OPEN>\n\t\t<TELL \"I think you've got enough troubles.\" CR>)\n\t       (<VERB? FOLLOW>\n\t\t<TELL \"What makes you think you know where you're going?\" CR>)\n\t       (<VERB? LISTEN>\n\t\t<TELL \"Do I have a choice?\" CR>)\n\t       (<VERB? SEARCH>\n\t\t<TELL \"Okay. I found one empty head but a strong heart.\" CR>)\n\t       (<VERB? MAKE>\n\t\t<TELL \"I doubt anyone could make you do anything with that attitude.\" CR>)\n\t       (<VERB? SHAKE>\n\t\t<TELL \"Shake, rattle and roll.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL \"Phew! When was the last time you bathed?\" CR>)\n\t       (<VERB? SQUEEZE>\n\t\t<TELL \"Like a python, eh?\" CR>)\n\t       (<VERB? THROW>\n\t\t<TELL \"For a loop?\" CR>)\n\t       (<VERB? WEAR>\n\t\t<TELL \"How many layers of skin does one human need?\" CR>)\n\t       (ELSE\n\t\t<RFALSE>)>\n\t <RTRUE>>"
  },
  "DOORWAY-FCN": {
   "name": "DOORWAY-FCN",
   "file": "globals.zil",
   "line": 357,
   "endLine": 368,
   "source": "<ROUTINE DOORWAY-FCN ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<AND <EQUAL? ,HERE ,NORTH-ANTECHAMBER ,BURIAL-CHAMBER>\n\t\t\t    <EQUAL? ,BEAM-PLACED 4>>\n\t\t       <TELL\n\"The mast is in the doorway, running from top to bottom.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,HERE ,SOUTH-ANTECHAMBER ,ANNEX>\n\t\t\t    <EQUAL? ,BEAM-PLACED 2 3>>\n\t\t       <TELL \n\"The beam is wedged in the doorway from side to side.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "PANEL-ON-WALL-FCN": {
   "name": "PANEL-ON-WALL-FCN",
   "file": "globals.zil",
   "line": 378,
   "endLine": 386,
   "source": "<ROUTINE PANEL-ON-WALL-FCN ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<TELL \n\"The panels are beautiful pieces of art, to be appreciated by the Queen on her\njourney through the Netherworld.\" CR>\n\t\t<COND (<GLOBAL-IN? ,HIEROGLYPHS ,HERE>\n\t\t       <PERFORM ,V?READ ,HIEROGLYPHS>\n\t\t       <RTRUE>)>\n\t\t<RTRUE>)>>"
  },
  "DESC-STAIRS-F": {
   "name": "DESC-STAIRS-F",
   "file": "globals.zil",
   "line": 396,
   "endLine": 401,
   "source": "<ROUTINE DESC-STAIRS-F ()\n\t <COND (<AND <VERB? EXAMINE>\n\t\t     <EQUAL? ,HERE ,AFT-CABIN ,BELOW-DECK>>\n\t\t<TELL \"The ladder is made of wood, and it looks fairly sturdy.\"\n\t\t      CR>\n\t\t<RTRUE>)>>"
  },
  "PLANE-FCN": {
   "name": "PLANE-FCN",
   "file": "globals.zil",
   "line": 417,
   "endLine": 452,
   "source": "<ROUTINE PLANE-FCN ()\n\t <COND (<VERB? WAVE>\n\t\t<COND (<AND <L? ,MOVES 8>\n\t\t\t    <NOT <IN-A-TENT?>>>\n\t\t       <TELL \"The plane dips its wings in salute.\" CR>)\n\t\t      (<L? ,MOVES 8>\n\t\t       <TELL \n\"You wave at the plane through the top of the tent. Somehow, I doubt it\nnoticed.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The plane's returned to its home base.\" CR>)>)\n\t       (<VERB? FIND>\n\t\t<COND (<G? ,MOVES 8>\n\t\t       <TELL \"I suppose it's up in the air, somewhere.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It's somewhere up over your head.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<AND <NOT <IN-A-TENT?>>\n\t\t\t    <L? ,MOVES 8>>\n\t\t       <RFALSE>)\n\t\t      (<L? ,MOVES 8>\n\t\t       <TELL \n\"All I can tell you about it is that it's out there.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The plane's far gone, amigo.\" CR>)>)\n\t       (<AND <VERB? LISTEN>\n\t\t     <L? ,MOVES 9>>\n\t\t<TELL \"RRRRRRRrrrrrrr r r r r r   r    r     r.\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<COND (<G? ,MOVES 8>\n\t\t       <TELL \"What plane? It's gone!\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Leave the plane alone. It's not bothering you.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "GOOD-LUCK-FCN": {
   "name": "GOOD-LUCK-FCN",
   "file": "globals.zil",
   "line": 454,
   "endLine": 479,
   "source": "<ROUTINE GOOD-LUCK-FCN ()\n\t <COND (<VERB? FIND>\n\t\t<COND (<L? ,MOVES 8>\n\t\t       <TELL \"Look up!\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It's gone with the wind, never to be seen again.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<AND <G? ,MOVES 4>\n\t\t\t    <L? ,MOVES 8>>\n\t\t       <TELL \"It's white.\" CR>)\n\t\t      (<L? ,MOVES 5>\n\t\t       <TELL \"What parachute?\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The most I can tell you is that it was white.\" CR>)>)\n\t       (<VERB? STAND-UNDER>\n\t\t<RFALSE>)\n\t       (T\n\t\t<COND (<G? ,MOVES 7>\n\t\t       <TELL \n\"Forget the chute, amigo. It's history. And if you don't get on with this, you\nwill be too.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Leave the parachute alone.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "SIP-FCN": {
   "name": "SIP-FCN",
   "file": "globals.zil",
   "line": 488,
   "endLine": 500,
   "source": "<ROUTINE SIP-FCN ()\n\t <COND (<AND <EQUAL? ,PRSO ,SIP>\n\t\t     <VERB? TAKE>>\n\t\t<COND (<OR <NOT ,PRSI>\n\t\t\t   <PRSI? ,WATER>>\n\t\t       <PERFORM ,V?DRINK ,WATER>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,PRSI ,LIQUID>\n\t\t       <PERFORM ,V?DRINK ,LIQUID>)\n\t\t      (ELSE\n\t\t       <TELL \"No, I don't think I quite understand.\" CR>)>)\n\t       (ELSE\n\t\t<TELL \"Now that's an interesting thought.\" CR>)>>"
  },
  "FIXED-FONT-ON": {
   "name": "FIXED-FONT-ON",
   "file": "globals.zil",
   "line": 568,
   "endLine": 568,
   "source": "<ROUTINE FIXED-FONT-ON () <PUT 0 8 <BOR <GET 0 8> 2>>>"
  },
  "FIXED-FONT-OFF": {
   "name": "FIXED-FONT-OFF",
   "file": "globals.zil",
   "line": 570,
   "endLine": 570,
   "source": "<ROUTINE FIXED-FONT-OFF() <PUT 0 8 <BAND <GET 0 8> -3>>>"
  },
  "PLASTER1-GLYPHS": {
   "name": "PLASTER1-GLYPHS",
   "file": "globals.zil",
   "line": 572,
   "endLine": 575,
   "source": "<ROUTINE PLASTER1-GLYPHS ()\n\t<FIXED-FONT-ON>\n\t<TELL CR \"*->  #  !!!  ::  ...>  .-\" CR>\n\t<FIXED-FONT-OFF>>"
  },
  "HIERO-FCN": {
   "name": "HIERO-FCN",
   "file": "globals.zil",
   "line": 577,
   "endLine": 690,
   "source": "<ROUTINE HIERO-FCN (\"AUX\" TEMP (COUNTER 0) OFFSET)\n\t <COND (<NOT <VERB? READ EXAMINE>>\n\t\t<RFALSE>)>\n\t <COND (<AND <IN? ,WINNER ,STAIRS-BOTTOM>\n\t\t     <IN? ,PLASTER1 ,STAIRS-BOTTOM>>\n\t\t<PLASTER1-GLYPHS>\n\t\t<RTRUE>)\n\t       (<IN? ,WINNER ,WEST-END-OF-PASSAGE>\n\t\t<COND (<FSET? ,PIT ,INVISIBLE>\n\t\t       <FIXED-FONT-ON>\n\t\t       <TELL CR\n\"             .|\n<-*  #  /!\\\\  -  #  (=  =)|\n|\n::  *->  #  !!!\" CR>\n\t\t       <FIXED-FONT-OFF>)\n\t\t      (T\n\t\t       <TELL \"They're gone with the plaster.\" CR>)>)\n\t       (<AND <ROOM? ,NORTH-ANTECHAMBER>\n\t\t     <NOT <FSET? ,BURIAL-CHAMBER ,RMUNGBIT>>>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL CR\n\"             -     !=!|\n<-*  #  /!\\\\  .   #  ! !|\n|\n::  *->  #  !!!\" CR>\n\t\t<FIXED-FONT-OFF>)\n\t       (<AND <ROOM? SOUTH-ANTECHAMBER>\n\t\t     <NOT <FSET? ,ANNEX-DOOR ,OPENBIT>>>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL CR\n\"                      -|\n<-*  #  /!\\\\  (.)  #  ! !|\n                      -|\n|\n           -|\n::  (  #  ! !|\n           -\" CR>\n\t\t<FIXED-FONT-OFF>)\n\t       (<ROOM? ,ROOM-OF-NEPHTHYS ,ROOM-OF-ISIS\n\t\t       ,ROOM-OF-SELKIS ,ROOM-OF-NEITH>\n\t\t<COND (<EQUAL? ,HERE ,ROOM-OF-NEPHTHYS>\n\t\t       <SET TEMP ,NEPHTHYS>\n\t\t       <SET OFFSET 4>)\n\t\t      (<EQUAL? ,HERE ,ROOM-OF-NEITH>\n\t\t       <SET TEMP ,NEITH>\n\t\t       <SET OFFSET 2>)\n\t\t      (<EQUAL? ,HERE ,ROOM-OF-SELKIS>\n\t\t       <SET TEMP ,SELKIS>\n\t\t       <SET OFFSET 1>)\n\t\t      (T <SET TEMP ,ISIS>\n\t\t       <SET OFFSET 3>)>\n\t\t<REPEAT ()\n\t\t\t<SET COUNTER <+ .COUNTER 1>>\n\t\t\t<COND (<EQUAL? .TEMP\n\t\t\t\t       <GET ,ORDER-LTBL .COUNTER>>\n\t\t\t       <RETURN>)>>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL CR \"       \" <GET ,STAR-LTBL .COUNTER> CR>\n\t\t<TELL CR\n\"          \" <GET ,COMPASS-POINTS-LTBL .OFFSET> CR>\n\t\t<TELL\n\"))  /  #  \" <GET ,COMPASS-TAILS-LTBL .OFFSET> \"  ::|\n|\n<-*  \"\n\t     <GET ,STAR-LTBL .COUNTER> \"  =!=  /  *\" CR>\n\t\t<FIXED-FONT-OFF>)\n\t       (<IN? ,WINNER ,BEND-HALL>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"\n          .      =  - -|\n!@!  ...>  -  #  *   =   ::  <...  ;|\n|\n#  *|\n   =\" CR>\n\t\t<FIXED-FONT-OFF>)\n\t       (<IN? ,WINNER ,CENTRAL-ROOM>\n\t\t<TELL\n\"The hieroglyphs look like this:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n                    !-!|\n...>  -.  >...  #  !  ! !|\n                    !-!|\n|\n/  ...>  /  #  !@!\" CR>\n\t\t<FIXED-FONT-OFF>)\n\t       (<EQUAL? ,HERE ,SOUTH-CENTER>\n\t\t<TELL\n\"The hieroglyphs look like this:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n <.>     <:>     <:.>|\n|\n <::>    <::.>   <:::>|\n|\n <:::.>  <::::>  <::::.>\" CR>\n\t\t<FIXED-FONT-OFF>)\n\t       (<EQUAL? <LOC ,WINNER> ,SKELETON-ROOM ,SILVER-ROOM ,GOLDEN-ROOM>\n\t\t<TELL\n\"The hieroglyphs look like this:|\n\">\n\t\t<FIXED-FONT-ON>\n\t\t<TELL \"|\n-!-  #  !*  ::  #  *!  ::|\n|\n*->  #  !@!  >*>\" CR>\n\t\t<FIXED-FONT-OFF>)\n\t       (T\n\t\t<TELL \"I don't see them here.\" CR>)>\n\t <RTRUE>>"
  },
  "BOARD-BARGE-F": {
   "name": "BOARD-BARGE-F",
   "file": "globals.zil",
   "line": 739,
   "endLine": 763,
   "source": "<ROUTINE BOARD-BARGE-F ()\n\t <COND (<VERB? BOARD>\n\t\t<COND (<EQUAL? ,HERE ,BARGE-ENTRANCE>\n\t\t       <DO-WALK ,P?UP>\n\t\t       <RTRUE>)\n\t\t      (<OR <EQUAL? ,HERE ,NW-CORNER ,NE-CORNER>\n\t\t\t   <EQUAL? ,HERE ,SW-CORNER ,SE-CORNER>>\n\t\t       <TELL \"There's no way to do that from here.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR <EQUAL? ,HERE ,FORE-CABIN ,AFT-CABIN ,BELOW-DECK>\n\t\t\t   <EQUAL? ,HERE ,BELOW-MAST ,BARGE-CENTER>>\n\t\t       <TELL \"Just where do you think you are?\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? DISEMBARK>\n\t\t<COND (<EQUAL? ,HERE ,BARGE-CENTER>\n\t\t       <DO-WALK ,P?DOWN>\n\t\t       <RTRUE>)\n\t\t      (<OR <EQUAL? ,HERE ,NW-CORNER ,NE-CORNER>\n\t\t\t   <EQUAL? ,HERE ,SW-CORNER ,SE-CORNER>>\n\t\t       <TELL \"You're not on the barge!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR <EQUAL? ,HERE ,FORE-CABIN ,AFT-CABIN ,BELOW-DECK>\n\t\t\t   <EQUAL? ,HERE ,BELOW-MAST ,BARGE-CENTER>>\n\t\t       <TELL \"I can't do that from here.\" CR>\n\t\t       <RTRUE>)>)>>"
  },
  "JUMP-OFF-FCN": {
   "name": "JUMP-OFF-FCN",
   "file": "globals.zil",
   "line": 772,
   "endLine": 788,
   "source": "<ROUTINE JUMP-OFF-FCN ()\n\t <COND (<AND <EQUAL? ,HERE ,BARGE-CENTER>\n\t\t     <VERB? LEAP>>\n\t\t<TELL \"Don't you think using the plank would be safer?\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? LEAP>\n\t\t<TELL \"It might be easier without these bulkheads around.\" CR>)\n\t       (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <DESCRIBE-OBJECTS T>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t\t<TELL \"There's nothing on the deck.\" CR>\n\t\t\t<RTRUE>)>)\n\t       (<VERB? COUNT>\n\t\t<TELL \"What a cahd! (52 to be exact!)\" CR>\n\t\t<RTRUE>)>>"
  },
  "FLAP-FCN": {
   "name": "FLAP-FCN",
   "file": "globals.zil",
   "line": 796,
   "endLine": 809,
   "source": "<ROUTINE FLAP-FCN ()\n\t <COND (<NOT <VERB? LOOK-INSIDE>>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,HERE ,TENT ,TENT2 ,SUPPLY-TENT>\n\t\t<TELL\n\"You can make out a lot of sand and a small firepit.\" CR>)\n\t       (<EQUAL? ,HERE ,P2>\n\t\t<TELL \n\"You can make out your cot and the trunk inside the tent.\" CR>)\n\t       (<EQUAL? ,HERE ,P7 ,P4>\n\t\t<TELL \n\"You can see nothing distinguishable by trying to look in through the bright\nsunlight.\" CR>)>\n\t <RTRUE>>"
  },
  "THICKET-FCN": {
   "name": "THICKET-FCN",
   "file": "globals.zil",
   "line": 817,
   "endLine": 823,
   "source": "<ROUTINE THICKET-FCN ()\n\t <COND (<NOT <EQUAL? ,HERE ,RIVER-BANK ,P4 ,P6>>\n\t\t<TELL \"I see no thickets here.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL \"Thicker thickets have never been thicker.\" CR>\n\t\t<RTRUE>)>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "globals.zil",
   "line": 831,
   "endLine": 865,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t ;\"This COND is game independent (except the TELL)\"\n\t <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't here!\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t <COND (.PRSO?\n\t\t<COND (<VERB? LAMP-ON BURN LAMP-OFF>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <==? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)\n\t       (T\n\t\t<COND (<VERB? LAMP-ON BURN LAMP-OFF>\n\t\t       <COND (<SET OBJ <FIND-NOT-HERE .TBL .PRSO?>>\n\t\t\t      <COND (<NOT <==? .OBJ ,NOT-HERE-OBJECT>>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <RFALSE>)>)>)>\n        ;\"Here is the default 'cant see any' printer\"\n\t <COND (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t<TELL \"You can't see any\">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,WINNER \" seems confused. \\\"I don't see any\">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\\\"\" CR>)>\n\t <RTRUE>>"
  },
  "FIND-NOT-HERE": {
   "name": "FIND-NOT-HERE",
   "file": "globals.zil",
   "line": 867,
   "endLine": 886,
   "source": "<ROUTINE FIND-NOT-HERE (TBL PRSO? \"AUX\" M-F OBJ)\n\t;\"Here is where special-case code goes. <MOBY-FIND .TBL> returns\n\t   number of matches. If 1, then P-MOBY-FOUND is it. One may treat\n\t   the 0 and >1 cases alike or different. It doesn't matter. Always\n\t   return RFALSE (not handled) if you have resolved the problem.\"\n\t<SET M-F <MOBY-FIND .TBL>>\n\t<COND (<AND <G? .M-F 1>\n\t\t    <SET OBJ <GETP <1 .TBL> ,P?GLOBAL>>>\n\t       <SET M-F 1>\n\t       <SETG P-MOBY-FOUND .OBJ>)>\n\t<COND (<==? 1 .M-F>\n\t       <COND (.PRSO? <SETG PRSO ,P-MOBY-FOUND>)\n\t\t     (T <SETG PRSI ,P-MOBY-FOUND>)>\n\t       <RFALSE>)\n\t      (<NOT .PRSO?>\n\t       <TELL \"You wouldn't find any\">\n\t       <NOT-HERE-PRINT .PRSO?>\n\t       <TELL \" there.\" CR>\n\t       <RTRUE>)\n\t      (T ,NOT-HERE-OBJECT)>>"
  },
  "GLOBAL-NOT-HERE-PRINT": {
   "name": "GLOBAL-NOT-HERE-PRINT",
   "file": "globals.zil",
   "line": 888,
   "endLine": 895,
   "source": "<ROUTINE GLOBAL-NOT-HERE-PRINT (OBJ)\n\t <COND (,P-MULT <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>)\n\t       (T\n\t\t<TELL \"You can't see any\">\n\t\t<COND (<EQUAL? .OBJ ,PRSO> <PRSO-PRINT>)\n\t\t      (T <PRSI-PRINT>)>\n\t\t<TELL \" here.\" CR>)>\n\t <SETG P-WON <>>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "globals.zil",
   "line": 897,
   "endLine": 905,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n <COND (,P-OFLAG\n\t<COND (,P-XADJ <TELL \" \"> <PRINTB ,P-XADJN>)>\n\t<COND (,P-XNAM <TELL \" \"> <PRINTB ,P-XNAM>)>)\n       (.PRSO?\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>\n <SETG P-WON <>>>"
  },
  "I-RING-KILL": {
   "name": "I-RING-KILL",
   "file": "interrupts.zil",
   "line": 12,
   "endLine": 24,
   "source": "<ROUTINE I-RING-KILL ()\n\t <SETG RING-COUNTER <+ ,RING-COUNTER 1>>\n\t <COND (<EQUAL? ,RING-COUNTER 3>\n\t\t<TELL \n\"You're starting to feel a little woozy. You blink your eyes, but can't seem\nto focus correctly. You think you see Craige standing by a wall.\" CR>)\n\t       (<EQUAL? ,RING-COUNTER 5>\n\t\t<TELL\n\"Your ring finger is starting to throb painfully.\" CR>)\n\t       (<G? ,RING-COUNTER 7>\n\t\t<JIGS-UP\n\"You fall over on your face as a quick-acting poison from the ring makes its\nway to your heart. Bye!\">)>>"
  },
  "I-GINANDTONIC": {
   "name": "I-GINANDTONIC",
   "file": "interrupts.zil",
   "line": 26,
   "endLine": 51,
   "source": "<ROUTINE I-GINANDTONIC ()\n\t <COND (<G? ,THIRST 400>\n\t\t<JIGS-UP\n\"Like a grape, left out in the sun too long, you turn into a raisin for lack of\nwater.\">)\n\t       (<AND <G? ,THIRST 380>\n\t\t     <L? ,THIRST 387>>\n\t\t<SETG NILE-DRINKS 0>\n\t\t<TELL\n\"If you don't drink something, and now, you're gonna be history.\" CR>)\n\t       (<AND <G? ,THIRST 300>\n\t\t     <L? ,THIRST 317>>\n\t\t<SETG NILE-DRINKS 0>\n\t\t<COND (<NOT <ROOM? ,TENT ,TENT2 ,SUPPLY-TENT>>\n\t\t       <TELL \"You'd better drink something, and soon!\" CR>)\n\t\t      (T\n\t\t       <TELL \"You wipe your fevered brow.\" CR>)>)\n\t       (<AND <G? ,THIRST 200>\n\t\t     <L? ,THIRST 217>>\n\t\t<SETG NILE-DRINKS 0>\n\t\t<COND (<NOT <ROOM? ,TENT ,TENT2 ,SUPPLY-TENT>>\n\t\t       <TELL \n\"You scowl at the sun, cursing its searing heat.\" CR>)\n\t\t      (T\n\t\t       <TELL \n\"Even in the tent the heat starts to get to you.\" CR>)>)>>"
  },
  "I-MATCH-OUT": {
   "name": "I-MATCH-OUT",
   "file": "interrupts.zil",
   "line": 53,
   "endLine": 75,
   "source": "<ROUTINE I-MATCH-OUT (\"OPTIONAL\" BLOWN? \"AUX\" (FLG <>))\n\t <COND (<FSET? ,ONE-MATCH ,FLAMEBIT>\n\t\t<COND (<NOT .BLOWN?>\n\t\t       <TELL \"Your match went out.\">)\n\t\t      (.BLOWN?\n\t\t       <TELL \"You blow out the match and toss it aside.\">)>\n\t\t<SET FLG T>)>\n\t <FCLEAR ,ONE-MATCH ,ONBIT>\n\t <FCLEAR ,ONE-MATCH ,FLAMEBIT>\n\t <FCLEAR ,MANY-MATCHES ,FLAMEBIT>\n\t <COND (<AND <IN? ,ONE-MATCH ,WINNER>\n\t\t     <NOT .BLOWN?>>\n\t\t<TELL \" And it burned your fingers, too! You drop it. \">\n\t\t<BUT-WHERE?>\n\t\t<SET FLG <>>)>\n\t <MOVE ,ONE-MATCH ,GLOBAL-OBJECTS>\n\t <COND (,LIT\n\t\t<SETG LIT <LIT? ,HERE>>)>\n\t <COND (<NOT <SETG LIT <LIT? ,HERE>>>\n\t\t<TELL \" It is now pitch black.\">\n\t\t<SET FLG T>)>\n\t <COND (.FLG\n\t\t<CRLF>)>>"
  },
  "I-TORCH": {
   "name": "I-TORCH",
   "file": "interrupts.zil",
   "line": 77,
   "endLine": 97,
   "source": "<ROUTINE I-TORCH (\"AUX\" (FLG <>))\n\t <SETG TORCH-TURNS <+ ,TORCH-TURNS 1>>\n\t <COND (<NOT ,OILED-TORCH>\n\t\t<TELL \"Your torch is too dry and burns itself out quickly.\" CR>\n\t\t<KILL-TORCH>\n\t\t<SET FLG T>)>\n\t <COND (<OR <IN? ,TORCH ,WINNER>\n\t\t    <EQUAL? <LOC ,TORCH> <LOC ,WINNER>>>\n\t\t<COND (<EQUAL? ,TORCH-TURNS 150>\n\t\t       <TELL \"Your torch is beginning to sputter.\" CR>\n\t\t       <SET FLG T>)\n\t\t      (<EQUAL? ,TORCH-TURNS 162>\n\t\t       <TELL \"Your torch is getting very, very dim.\" CR>\n\t\t       <SET FLG T>)\n\t\t      (<EQUAL? ,TORCH-TURNS 175>\n\t\t<TELL \"With a final blaze of glory, your torch goes out.\" CR>\n\t\t       <KILL-TORCH>\n\t\t       <SET FLG T>)>)\n\t       (<G? ,TORCH-TURNS 174>\n\t\t<KILL-TORCH>)>\n\t .FLG>"
  },
  "KILL-TORCH": {
   "name": "KILL-TORCH",
   "file": "interrupts.zil",
   "line": 99,
   "endLine": 110,
   "source": "<ROUTINE KILL-TORCH (\"OPTIONAL\" (IN-SLAB? <>))\n\t <FCLEAR ,TORCH ,ONBIT>\n\t <FCLEAR ,TORCH ,FLAMEBIT>\n\t <COND (<NOT .IN-SLAB?>\n\t\t<SETG OIL-SOAKED <>>\n\t\t<SETG OILED-TORCH <>>\n\t\t<SETG TORCH-TURNS 0>)>\n\t <COND (,LIT\n\t\t<SETG LIT <LIT? ,HERE>>)>\n\t <COND (<NOT <SETG LIT <LIT? ,HERE>>>\n\t\t<TELL \"It is now pitch black.\" CR>)>\n\t <DISABLE <INT I-TORCH>>>"
  },
  "I-RESET-STATUES": {
   "name": "I-RESET-STATUES",
   "file": "interrupts.zil",
   "line": 112,
   "endLine": 156,
   "source": "<ROUTINE I-RESET-STATUES (\"AUX\" (CHECK-OFF 0) (COUNTER 0)\n\t\t\t   (CLEAR-OFF 0) (FLG <>) STR)\n\t <REPEAT ()\n\t\t <COND (<EQUAL? .CHECK-OFF 4>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET CHECK-OFF <+ .CHECK-OFF 1>>\n\t\t\t<COND (<OR <NOT <EQUAL? <GET ,ORDER-LTBL .CHECK-OFF>\n\t\t\t\t\t    <GET ,TURNED-LTBL .CHECK-OFF>>>\n\t\t\t\t   <FSET? <GET ,TURNED-LTBL .CHECK-OFF>\n\t\t\t\t\t  ,CLAMPBIT>> \n\t\t\t       <SETG TURN-OFFSET 0>\n\t\t\t       <REPEAT ()\n\t\t\t\t       <SET CLEAR-OFF <+ .CLEAR-OFF 1>>\n\t\t\t\t       <COND (<EQUAL? .CLEAR-OFF 5>\n\t\t\t\t\t      <RETURN>)>\n\t\t\t\t       <PUT ,TURNED-LTBL .CLEAR-OFF <>>\n\t\t\t\t       <COND (<NOT <FSET? <GET ,STATUE-TBL\n\t\t\t\t\t\t\t  <- .CLEAR-OFF 1>>\n\t\t\t\t\t\t     ,CLAMPBIT>>\n\t\t\t\t\t      <SET COUNTER <+ .COUNTER 1>>)>\n\t\t\t\t       <FSET <GET ,STATUE-TBL <- .CLEAR-OFF 1>>\n\t\t\t\t\t     ,CLAMPBIT>>\n\t\t\t       <SET STR <GET ,NUM-TBL .COUNTER>>\n\t\t\t       <COND (<NOT .COUNTER>\n\t\t\t\t      <TELL\n\"A loud click comes from beneath the four statues as they clamp down on the\ncover again.\" CR>)\n\t\t\t\t     (T\n\t\t\t\t      <TELL \"The \" .STR \" statue\">\n\t\t\t\t      <COND (<G? .COUNTER 1>\n\t\t\t\t\t     <TELL\n\"s, heavy though they are, effortlessly swing back in unison to clamp down on the quartz cover again.\" CR>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <TELL\n\", heavy though it is, effortlessly swings back to clamp down on the quartz cover again.\" CR>)>)>\n\t\t\t       <SET FLG T>\n\t\t\t       <RETURN>)>)>>\n\t <COND (<NOT .FLG> ;\"order was correct\"\n\t\t<TELL \n\"The statues freeze in their current positions and you hear a light click come\nfrom the cover of the sarcophagus.\" CR>\n\t\t<SETG CAN-TURN-STATUES <>>\n\t        <SETG STATUES-SET T>\n\t\t<SETG SCORE <+ ,SCORE 35>>)>>"
  },
  "I-GROWL": {
   "name": "I-GROWL",
   "file": "interrupts.zil",
   "line": 160,
   "endLine": 173,
   "source": "<ROUTINE I-GROWL ()\n\t <SETG HUNGER <+ ,HUNGER 1>>\n\t <COND (<AND <G? ,HUNGER 70>\n\t\t     <L? ,HUNGER 73>>\n\t\t<TELL \"Your stomach growls in hunger.\" CR>)\n\t       (<AND <G? ,HUNGER 100>\n\t\t     <L? ,HUNGER 103>>\n\t\t<TELL \n\"You feel yourself growing weaker. Without nourishment, this is a losing\ncause!\" CR>)\n\t       (<G? ,HUNGER 140>\n\t\t<JIGS-UP\n\"You fall over on your face, dreaming of Thanksgiving dinner. Needless to say,\nit was you against hunger. And hunger won.\">)>> "
  },
  "I-PARACHUTE": {
   "name": "I-PARACHUTE",
   "file": "interrupts.zil",
   "line": 175,
   "endLine": 221,
   "source": "<ROUTINE I-PARACHUTE ()\n\t <COND (<L? ,MOVES 3>\n\t\t<COND (<IN-A-TENT?>\n\t\t       <TELL CR \n\"You hear a plane flying high overhead, outside the tent.\" CR>)\n\t\t      (T\n\t\t       <TELL CR \n\"You crane your neck and see a plane, high overhead, circling the encampment.\" CR>)>\n\t\t<RTRUE>)\n\t       (<L? ,MOVES 5>\n\t\t<COND (<IN-A-TENT?>\n\t\t       <TELL CR \"It sounds as if the plane is circling.\" CR>)\n\t\t      (T\n\t\t       <TELL CR \n\"The plane seems to be circling right overhead.\" CR>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,MOVES 5>\n\t\t<COND (<NOT <IN-A-TENT?>>\n\t\t       <TELL CR \n\"You look up to see a small speck appear right beneath the plane -- probably a\nparachute. The plane heads off far to the northwest, dipping its wings in a\nsalute.\" CR>)\n\t\t      (T\n\t\t       <TELL CR \"It sounds as if the plane is flying off.\" CR>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,MOVES 6>\n\t\t<COND (<NOT <IN-A-TENT?>>\n\t\t       <TELL CR \n\"A small speck descending from the plane overhead gets larger until you see a\ncrate, dangling from a parachute.\" CR>)\n\t\t      (T\n\t\t       <TELL CR \"You can barely hear the plane.\" CR>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,MOVES 7>\n\t\t<COND (<IN-A-TENT?>\n\t\t       <MOVE ,CRATE <PICK-ONE ,ROOM-LTBL>>\n\t\t       <TELL CR\n\"The sound of something heavy landing comes from nearby.\" CR>)\n\t\t      (T\n\t\t       <TELL CR \n\"At last, your luck seems to be changing. A large crate lands right before you,\nits parachute flapping in the breeze. The parachute breaks away from the crate\nand drifts off in the wind.\" CR>\n\t\t       <MOVE ,CRATE ,HERE>)>\n\t\t<FSET ,CRATE ,VEHBIT>\n\t\t<DISABLE <INT I-PARACHUTE>>\n\t\t<RTRUE>)>>"
  },
  "IN-A-TENT?": {
   "name": "IN-A-TENT?",
   "file": "interrupts.zil",
   "line": 223,
   "endLine": 234,
   "source": "<ROUTINE IN-A-TENT? (\"OPTIONAL\" (COT-TOO? T))\n\t <COND (.COT-TOO?\n\t\t<COND (<OR <EQUAL? <LOC ,WINNER> ,TENT ,TENT2 ,SUPPLY-TENT>\n\t\t\t   <EQUAL? <LOC ,WINNER> ,COT>>\n\t\t       <RTRUE>)\n\t\t      (T <RFALSE>)>)\n\t       (<NOT .COT-TOO?>\n\t\t<COND (<EQUAL? <LOC ,WINNER> ,TENT ,TENT2 ,SUPPLY-TENT>\n\t\t       <RTRUE>)\n\t\t      (ELSE <RFALSE>)>)\n\t       (ELSE\n\t\t<RFALSE>)>>"
  },
  "RANDOMIZE-HOLES": {
   "name": "RANDOMIZE-HOLES",
   "file": "interrupts.zil",
   "line": 243,
   "endLine": 251,
   "source": "<ROUTINE RANDOMIZE-HOLES (\"AUX\" (OFFS 0) MAX)\n\t <SET MAX <GET ,RANDOM-ROOM-LTBL 0>>\n\t <REPEAT ()\n\t\t <SET OFFS <+ .OFFS 1>>\n\t\t <COND (<G? .OFFS .MAX>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PUTP <GET ,RANDOM-ROOM-LTBL .OFFS>\n\t\t\t      ,P?CAPACITY <RANDOM 2>>)>>>"
  },
  "I-PYRAMID-DRINK": {
   "name": "I-PYRAMID-DRINK",
   "file": "interrupts.zil",
   "line": 255,
   "endLine": 273,
   "source": "<ROUTINE I-PYRAMID-DRINK ()\n\t <COND (<GETP ,HERE ,P?MAP>\n\t\t<DISABLE <INT I-PYRAMID-DRINK>>\n\t\t<RFALSE>)>\n\t <SETG PYR-THIRST <+ ,PYR-THIRST 1>>\n\t <SETG NILE-DRINKS 0>\n\t <COND (<EQUAL? ,PYR-THIRST 1>\n\t\t<TELL\n\"Even in this pyramid, you need to drink something, and soon.\" CR>)\n\t       (<EQUAL? ,PYR-THIRST 10>\n\t\t<TELL\n\"Your throat feels as if it's coated with razor blades. Some water would be in\norder.\" CR>)\n\t       (<EQUAL? ,PYR-THIRST 19>\n\t\t<TELL \"Better drink something. NOW!\" CR>)\n\t       (<EQUAL? ,PYR-THIRST 25>\n\t\t<JIGS-UP\n\"Well, your body could only take so much of this heat. Like a car, idling on a\ncrowded highway, your body decides it's time to overheat. Such is death.\">)>>"
  },
  "ZPROB": {
   "name": "ZPROB",
   "file": "macros.zil",
   "line": 116,
   "endLine": 119,
   "source": "<ROUTINE ZPROB\n\t (BASE)\n\t <COND (,LUCKY <G? .BASE <RANDOM 100>>)\n\t       (ELSE <G? .BASE <RANDOM 300>>)>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "macros.zil",
   "line": 121,
   "endLine": 122,
   "source": "<ROUTINE PICK-ONE (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "ABS": {
   "name": "ABS",
   "file": "macros.zil",
   "line": 132,
   "endLine": 136,
   "source": "<ROUTINE ABS (NUM)\n\t <COND (<G? .NUM 0>\n\t\t<RETURN .NUM>)\n\t       (ELSE\n\t\t<RETURN <- 0 .NUM>>)>>"
  },
  "GO": {
   "name": "GO",
   "file": "zmain.zil",
   "line": 30,
   "endLine": 52,
   "source": "<ROUTINE GO () \n;\"put interrupts on clock chain\"\n\t ;<RANDOMIZE-HOLES>\n\t ;<ENABLE <QUEUE I-GINANDTONIC -1>>\n\t ;<ENABLE <QUEUE I-PARACHUTE -1>>\n\t ;<ENABLE <QUEUE I-GROWL -1>>\n\t <REMOVE ,WATER>\n;\"set up and go\"\n\t <SETG LIT T>\n\t <SETG WINNER ,ADVENTURER>\n\t <SETG PLAYER ,WINNER>\n\t <SETG HERE ,TENT>\n\t <SETG P-IT-LOC ,HERE>\n\t <SETG P-IT-OBJECT <>>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<TELL ,START-STR CR>\n\t\t<CRLF>\n\t\t<V-VERSION>\n\t\t<CRLF>)>\n\t <MOVE ,WINNER ,COT>\n\t <V-LOOK>\n\t <MAIN-LOOP>\n\t <AGAIN>>    "
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "zmain.zil",
   "line": 55,
   "endLine": 199,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP) \n   #DECL ((CNT OCNT ICNT NUM) FIX (V) <OR 'T FIX FALSE> (OBJ) <OR FALSE OBJECT>\n\t  (OBJ1) OBJECT (TBL) TABLE (PTBL) <OR FALSE ATOM>)\n   <REPEAT ()\n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET NUM\n\t\t <COND (<0? <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<==? ,PRSA ,V?WALK> <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<NOT ,LIT>\n\t\t\t  <TELL \"It's too dark to see.\" CR>)\n\t\t\t (T\n;\"** M\"\t\t\t  <COND (.OBJ\n\t\t\t\t <COND (<AND <FSET? .OBJ ,CONTBIT>\n\t\t\t\t\t     <NOT <FSET? .OBJ ,OPENBIT>>>\n\t\t\t\t\t<TELL \"Better open the \" D .OBJ\n\t\t\t\t\t      \" first.\" CR>\n\t\t\t\t\t<THIS-IS-IT .OBJ>\n\t\t\t\t\t<SET V <>>)\n\t\t\t\t       (<NOT <FSET? .OBJ ,CONTBIT>>\n\t\t\t\t\t<TELL \"There's nothing in that.\" CR>\n\t\t\t\t\t<SET V <>>)\n\t\t\t\t       (T\n\t\t\t\t\t<TELL \"It's not in that.\" CR>\n\t\t\t\t\t<SET V <>>)>) \n\t\t\t        (T\n\t\t\t\t <TELL \"There isn't anything to \">\n\t\t\t\t <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t\t\t\t <COND (,P-OFLAG\n\t\t\t\t\t<PRINTB <GET .TMP 0>>)\n\t\t\t\t       (T\n\t\t\t\t\t<WORD-PRINT <GETB .TMP 2>\n\t\t\t\t\t\t    <GETB .TMP 3>>)>\n\t\t\t\t <TELL \"!\" CR>\n\t\t\t\t <SET V <>>)>)>)\n\t\t  (T\n\t\t   <SETG P-NOT-HERE 0>\n\t\t   <SETG P-MULT <>>\n\t\t   <COND (<G? .NUM 1> <SETG P-MULT T>)>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t\t  <COND (<G? ,P-NOT-HERE 0>\n\t\t\t\t\t <TELL \"The \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>\n\t\t\t\t\t\t<TELL \"other \">)>\n\t\t\t\t\t <TELL \"object\">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"s\">)>\n\t\t\t\t\t <TELL \" that you mentioned \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"are\">)\n\t\t\t\t\t       (T <TELL \"is\">)>\n\t\t\t\t\t <TELL \"n't here.\" CR>)\n\t\t\t\t\t(<NOT .TMP>\n\t\t\t\t\t <TELL \n\"I don't know what you're referring to.\" CR>)>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <SETG PRSO <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SETG PRSI <COND (.PTBL .OBJ) (T .OBJ1)>>\n\t\t\t\t  <COND (<VERB? COMPARE> T)\n\t\t\t\t\t(<G? .NUM 1>\n\t\t\t\t\t <COND (<EQUAL? .OBJ1\n\t\t\t\t\t\t\t ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t <SETG P-NOT-HERE\n\t\t\t\t\t\t       <+ ,P-NOT-HERE 1>>\n\t\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t\t(<AND <VERB? TAKE>\n\t\t\t\t\t\t      ,PRSI\n\t\t\t\t\t\t      <EQUAL? <GET <GET ,P-ITBL\n\t\t\t\t\t\t\t\t\t,P-NC1>\n\t\t\t\t\t\t\t\t   0>\n\t\t\t\t\t\t\t      ,W?ALL>\n\t\t\t\t\t\t      <NOT <IN? ,PRSO ,PRSI>>>\n\t\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t\t(<AND <EQUAL? ,P-GETFLAGS\n\t\t\t\t\t\t\t      ,P-ALL>\n\t\t\t\t\t\t      <VERB? TAKE>\n\t\t\t\t\t\t      <OR <AND <NOT <EQUAL?\n\t\t\t\t\t\t\t\t    <LOC .OBJ1>\n\t\t\t\t\t\t\t\t     ,WINNER\n\t\t\t\t\t\t\t\t     ,HERE>>\n\t\t\t\t\t\t\t       <NOT <FSET?\n\t\t\t\t\t\t\t\t    <LOC .OBJ1>\n\t\t\t\t\t\t\t\t   ,TRANSBIT>>>\n\t\t\t\t\t\t\t  <FSET? .OBJ1\n\t\t\t\t\t\t\t\t ,DONTTAKE>\n\t\t\t\t\t\t\t  <EQUAL? .OBJ1\n\t\t\t\t\t\t\t\t  ,PLASTER\n\t\t\t\t\t\t\t\t  ,PLASTER1>>>\n\t\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t\t(<AND <EQUAL? ,P-GETFLAGS\n\t\t\t\t\t\t\t      ,P-ALL>\n\t\t\t\t\t\t      <VERB? DROP>\n\t\t\t\t\t\t      <NOT <IN? .OBJ1 ,WINNER>>\n\t\t\t\t\t\t      <NOT <IN? ,P-IT-OBJECT\n\t\t\t\t\t\t\t\t,WINNER>>>\n\t\t\t\t\t\t <AGAIN>)\n\t\t\t\t\t\t(T\n\t\t\t\t\t\t <COND (<EQUAL? .OBJ1 ,IT>\n\t\t\t\t\t\t\t<PRINTD ,P-IT-OBJECT>)\n\t\t\t\t\t\t       (T <PRINTD .OBJ1>)>\n\t\t\t\t\t\t <TELL \": \">)>)>\n\t\t\t\t  <SET TMP T>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<NOT <==? .V ,M-FATAL>>\n\t\t   ;<COND (<==? <LOC ,WINNER> ,PRSO>\n\t\t\t  <SETG PRSO <>>)>\n\t\t   ;\"Removing this code should fix the problem that AGAIN\n\t\t     loses when in a vehicle and it is the PRSO.\"\n\t\t   <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t    <COND (<VERB? AGAIN WALK SAVE RESTORE SCORE VERSION WAIT> T)\n\t\t  (T\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <SETG L-PRSO ,PRSO>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "parser.zil",
   "line": 128,
   "endLine": 279,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>)\n\t\t       LEN (DIR <>) (NW 0) (LW 0) NUM SCNT (CNT -1)) \n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT 0>)>>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,ADVENTURER>>\n\t       <SETG WINNER ,ADVENTURER>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>)>\n\t<COND (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <NOT ,SUPER-BRIEF> <==? ,PLAYER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG P-CONT <>>)\n\t      (T\n\t       <SETG WINNER ,ADVENTURER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <COND (<NOT ,SUPER-BRIEF> <CRLF>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<0? ,P-LEN> <TELL \"I beg your pardon?\" CR> <RFALSE>)>\n\t<SET LEN ,P-LEN>\n\t<SETG P-DIR <>>\n\t<SETG P-NCN 0>\n\t<SETG P-GETFLAGS 0>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<AND <==? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ;,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <==? .WRD ,W?THEN>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t      <SET WRD ,W?QUOTE>)>\n\t\t       <COND ;(<AND <EQUAL? .WRD ,W?.>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?.>\n\t\t\t\t  <EQUAL? .WRD ,W?QUOTE>> \n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <0? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK>\n\t\t\t\t   <OR <==? .LEN 1>\n\t\t\t\t       <AND <==? .LEN 2> <==? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? <SET NW\n\t\t\t\t\t\t     <GET ,P-LEXV\n\t\t\t\t\t\t\t  <+ .PTR ,P-LEXELEN>>>\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?.\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <==? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB> ;<OR <NOT .VERB>\n\t\t\t\t       <EQUAL? .VERB ,ACT?WHAT>>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET NUM\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .NUM 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <AND <OR <EQUAL? .WRD ,W?ALL ,W?ONE ,W?A>\n\t\t\t\t\t   <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t\t   <WT? .WRD ,PS?OBJECT>>\n\t\t\t\t       <SET VAL 0>>>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <==? <GET ,P-LEXV\n\t\t\t\t\t\t    <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t       ,W?OF>\n\t\t\t\t\t  ;<NOT <EQUAL? .VERB ,ACT?ACCUSE>>\n\t\t\t\t\t  <0? .VAL>\n\t\t\t\t\t  <NOT\n\t\t\t\t\t   <EQUAL? .WRD ,W?ALL ,W?ONE ,W?A>>>)\n\t\t\t\t    (<AND <NOT <0? .VAL>>\n\t\t\t\t          <OR <0? ,P-LEN>\n\t\t\t\t\t      <EQUAL? <GET ,P-LEXV <+ .PTR 2>>\n\t\t\t\t\t\t      ,W?THEN ,W?.>>>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<==? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"I found too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     ;(<OR <EQUAL? .WRD ,W?CAREFULLY ,W?QUIETLY>\n\t\t\t\t  <EQUAL? .WRD ,W?SLOWLY ,W?QUICKLY\n\t\t\t\t\t        ,W?BRIEFLY>>\n\t\t\t      <SETG P-ADVERB .WRD>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <RETURN T>)>\n\t<SETG P-WALK-DIR <>>\n\t<COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t;<COND (<==? <GET ,P-ITBL ,P-VERB> 0> <PUT ,P-ITBL ,P-VERB ,ACT?CALL>)>\n\t<COND (<AND <SYNTAX-CHECK> <SNARF-OBJECTS> <TAKE-CHECK> <MANY-CHECK>>\n\t       T)>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "parser.zil",
   "line": 289,
   "endLine": 295,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFS ,P-P1OFF) TYP) \n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <==? .TYP .B1>> <SET OFFS <+ .OFFS 1>>)>\n\t\t      <GETB .PTR .OFFS>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "parser.zil",
   "line": 298,
   "endLine": 368,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0)) \n\t#DECL ((PTR VAL OFF NUM) FIX (WRD NW) <OR FALSE FIX TABLE>\n\t       (ANDFLG FIRST??) <OR ATOM FALSE>)\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <==? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<0? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<0? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       ;<COND (<AND <==? .WRD ,W?OF>\n\t\t\t\t   <==? <GET ,P-ITBL ,P-VERB> ,ACT?ACCUSE>>\n\t\t\t      <PUT ,P-LEXV .PTR ,W?WITH>\n\t\t\t      <SET WRD ,W?WITH>)>\n\t\t       <COND ;(<AND <EQUAL? .WRD ,W?.>\n\t\t\t\t   <EQUAL? .LW ,W?MRS ,W?MR ,W?MS>>\n\t\t\t      <SET LW 0>)\n\t\t\t     (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ,W?ALL ,W?ONE>\n\t\t\t      <COND (<==? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?.>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <==? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?BUZZ-WORD>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WRD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WRD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>> "
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "parser.zil",
   "line": 370,
   "endLine": 392,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<==? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "parser.zil",
   "line": 398,
   "endLine": 450,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD) \n   #DECL ((CNT TEMP VERB) FIX (BEG END) <PRIMTYPE VECTOR> (WRD) TABLE)\n   <SETG P-OFLAG <>>\n   <COND\n    (<AND <NOT <0? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t  <NOT <==? .VERB <GET ,P-OTBL ,P-VERB>>>>\n     <RFALSE>)\n    (<==? ,P-NCN 2>\n     <RFALSE>)\n    (<==? <GET ,P-OTBL ,P-NC1> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP1>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t   (T <RFALSE>)>)\n    (<==? <GET ,P-OTBL ,P-NC2> 1>\n     <COND (<OR <==? <SET TEMP <GET ,P-ITBL ,P-PREP1>> <GET ,P-OTBL ,P-PREP2>>\n\t\t<0? .TEMP>>\n\t    <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t    <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t    <SETG P-NCN 2>)\n\t   (T <RFALSE>)>)\n    (,P-ACLAUSE\n     <COND\n      (<NOT <==? ,P-NCN 1>> <SETG P-ACLAUSE <>> <RFALSE>)\n      (T\n       <SET BEG <GET ,P-ITBL ,P-NC1>>\n       <SET END <GET ,P-ITBL ,P-NC1L>>\n       <REPEAT ()\n\t       <COND (<==? .BEG .END>\n\t\t      <COND (.ADJ\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)\n\t\t\t    (T\n\t\t\t     <SETG P-ACLAUSE <>>\n\t\t\t     <RFALSE>)>)\n\t\t     (<AND <NOT .ADJ>\n\t\t\t   <BTST <GETB <SET WRD <GET .BEG 0>> ,P-PSOFF>\n\t\t\t         ,PS?ADJECTIVE>>\n\t\t      <SET ADJ .WRD>)\n\t\t     (<OR <BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t  <==? .WRD ,W?ONE>>\n\t\t      <COND (<NOT <EQUAL? .WRD ,P-ANAM ,W?ONE>> <RFALSE>)\n\t\t\t    (T\n\t\t\t     <ACLAUSE-WIN .ADJ>\n\t\t\t     <RETURN>)>)>\n\t       <SET BEG <REST .BEG ,P-WORDLEN>>>)>)>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "parser.zil",
   "line": 452,
   "endLine": 458,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t <SETG P-CCSRC ,P-OTBL>\n\t <CLAUSE-COPY ,P-ACLAUSE <+ ,P-ACLAUSE 1> .ADJ>\n\t <AND <NOT <==? <GET ,P-OTBL ,P-NC2> 0>>\n\t      <SETG P-NCN 2>>\n\t <SETG P-ACLAUSE <>>\n\t <RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "parser.zil",
   "line": 463,
   "endLine": 468,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "parser.zil",
   "line": 470,
   "endLine": 477,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\".\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "parser.zil",
   "line": 479,
   "endLine": 486,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF) \n\t#DECL ((PTR BUF) FIX)\n\t<TELL \"I can't use the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" here.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "parser.zil",
   "line": 515,
   "endLine": 580,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP) \n\t#DECL ((DRIVE1 DRIVE2) <OR FALSE <PRIMTYPE VECTOR>>\n\t       (SYN) <PRIMTYPE VECTOR> (LEN NUM VERB PREP) FIX\n\t       (OBJ) <OR FALSE OBJECT>)\n\t<COND (<0? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"I can't find a verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <0? ,P-NCN>\n\t\t\t    <OR <0? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<==? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<==? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <==? .NUM 2> <==? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<==? <GETB .SYN ,P-SPREP2> <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL \"I don't understand that sentence.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND ;,ACT?WHAT>\n\t       <TELL \"I can't answer that question.\" CR>\n\t       <RFALSE>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<==? .TMP 0> <TELL \"tell\">)\n\t\t     (<0? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <CLAUSE-PRINT ,P-NC1 ,P-NC1L>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>> "
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "parser.zil",
   "line": 582,
   "endLine": 596,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1)) \n\t#DECL ((D1 D2) <OR FALSE <PRIMTYPE VECTOR>>)\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN 0>\n\t<SETG P-CCSRC ,P-ITBL>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<==? ,P-NCN 2> <CLAUSE-COPY ,P-NC2 ,P-NC2L>)>\n\t<COND (<NOT <L? ,P-NCN 1>> <CLAUSE-COPY ,P-NC1 ,P-NC1L>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>> "
  },
  "CLAUSE-PRINT": {
   "name": "CLAUSE-PRINT",
   "file": "parser.zil",
   "line": 598,
   "endLine": 599,
   "source": "<ROUTINE CLAUSE-PRINT (BPTR EPTR \"OPTIONAL\" (THE? T)) \n\t<BUFFER-PRINT <GET ,P-ITBL .BPTR> <GET ,P-ITBL .EPTR> .THE?>>    "
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "parser.zil",
   "line": 601,
   "endLine": 620,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP \"AUX\" (NOSP <>) WRD (FIRST?? T) (PN <>))\n\t #DECL ((BEG END) <PRIMTYPE VECTOR> (CP) <OR FALSE ATOM>)\n\t <REPEAT ()\n\t\t<COND (<==? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <COND (.NOSP <SET NOSP <>>)\n\t\t\t     (T <TELL \" \">)>\n\t\t       <COND (<==? <SET WRD <GET .BEG 0>> ,W?.> <SET NOSP T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (,P-OFLAG <PRINTB .WRD>)\n\t\t\t\t    (<AND <==? .WRD ,W?IT>\n\t\t\t\t\t  <==? ,P-IT-LOC ,HERE>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CAPITALIZE": {
   "name": "CAPITALIZE",
   "file": "parser.zil",
   "line": 622,
   "endLine": 624,
   "source": "<ROUTINE CAPITALIZE (PTR)\n\t <PRINTC <- <GETB ,P-INBUF <GETB .PTR 3>> 32>>\n\t <WORD-PRINT <- <GETB .PTR 2> 1> <+ <GETB .PTR 3> 1>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "parser.zil",
   "line": 626,
   "endLine": 631,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD) \n\t#DECL ((PREP) FIX)\n\t<COND (<NOT <0? .PREP>>\n\t       <TELL \" \">\n\t       <SET WRD <PREP-FIND .PREP>>\n\t       <PRINTB .WRD>)>>    "
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "parser.zil",
   "line": 633,
   "endLine": 654,
   "source": "<ROUTINE CLAUSE-COPY (BPTR EPTR \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END) \n\t#DECL ((BPTR EPTR) FIX (BEG END) <PRIMTYPE VECTOR>\n\t       (INSRT) <OR FALSE TABLE>)\n\t<SET BEG <GET ,P-CCSRC .BPTR>>\n\t<SET END <GET ,P-CCSRC .EPTR>>\n\t<PUT ,P-OTBL\n\t     .BPTR\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<==? .BEG .END>\n\t\t       <PUT ,P-OTBL\n\t\t\t    .EPTR\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <==? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>  "
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "parser.zil",
   "line": 657,
   "endLine": 662,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR) \n\t#DECL ((WRD) TABLE (PTR) FIX)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>   "
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "parser.zil",
   "line": 664,
   "endLine": 670,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE) \n\t#DECL ((PREP CNT SIZE) FIX)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<==? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>  "
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "parser.zil",
   "line": 672,
   "endLine": 675,
   "source": "<ROUTINE SYNTAX-FOUND (SYN) \n\t#DECL ((SYN) <PRIMTYPE VECTOR>)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>   "
  },
  "GWIM": {
   "name": "GWIM",
   "file": "parser.zil",
   "line": 679,
   "endLine": 699,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ) \n\t#DECL ((GBIT LBIT) FIX (OBJ) OBJECT)\n\t<COND (<==? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<==? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<NOT <0? .PREP>>\n\t\t\t     <PRINTB <PREP-FIND .PREP>>\n\t\t\t     <COND ;(<==? .OBJ ,HANDS>\n\t\t\t\t    <TELL \" your hands)\" CR>)\n\t\t\t\t   (T\n\t\t\t\t    <TELL \" the \">)>)>\n\t\t      <TELL D .OBJ \")\" CR>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>   "
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "parser.zil",
   "line": 701,
   "endLine": 715,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" PTR) \n\t#DECL ((PTR) <OR FIX <PRIMTYPE VECTOR>>)\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>\n\t       <OR <0? <GET ,P-BUTS ,P-MATCHLEN>>\n\t\t   <SETG P-PRSO <BUT-MERGE ,P-PRSO>>>)>\n\t<COND (<NOT <==? <SET PTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t       <SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t       <OR <SNARFEM .PTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>\n\t       <COND (<NOT <0? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t      <COND (<==? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t\t     <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)\n\t\t\t    (T <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>)>\n\t<RTRUE>>  "
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "parser.zil",
   "line": 717,
   "endLine": 731,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL) \n\t#DECL ((TBL NTBL) TABLE (LEN BUTLEN MATCHES) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>    "
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "parser.zil",
   "line": 764,
   "endLine": 812,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WRD NW) \n   #DECL ((TBL) TABLE (PTR EPTR) <PRIMTYPE VECTOR>\n\t  (BUT) <OR FALSE TABLE> (WV) <OR FALSE FIX>)\n   <SETG P-GETFLAGS 0>\n   <SETG P-CSPTR .PTR>\n   <SETG P-CEPTR .EPTR>\n   <PUT ,P-BUTS ,P-MATCHLEN 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<==? .PTR .EPTR> <RETURN <GET-OBJECT <OR .BUT .TBL>>>)\n\t\t (T\n\t\t  <SET NW <GET .PTR ,P-LEXELEN>>\n\t\t  <COND (<==? .WRD ,W?ALL>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<==? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<==? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <0? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<==? .WRD ,W?OF>\n\t\t\t <COND (<0? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <==? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>   "
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "parser.zil",
   "line": 828,
   "endLine": 931,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t     \"OPTIONAL\" (VRB T)\n\t\t     \"AUX\" BTS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t #DECL ((TBL) TABLE (XBTS BTS TLEN LEN) FIX (GWIM) <OR FALSE FIX>\n\t\t(VRB GCHECK) <OR ATOM FALSE>)\n\t <SET XBITS ,P-SLOCBITS>\n\t <SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t <COND (<AND <NOT ,P-NAM> ,P-ADJ>\n\t\t<COND (<WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>\n\t\t       <SETG P-NAM ,P-ADJN>\n\t\t       <SETG P-ADJ <>>)\n\t\t      (<SET BTS <WT? ,P-ADJN ,PS?DIRECTION ,P1?DIRECTION>>\n\t\t       <SETG P-ADJ <>>\n\t\t       <PUT .TBL ,P-MATCHLEN 1>\n\t\t       <PUT .TBL 1 ,INTDIR>\n\t\t       <SETG P-DIRECTION .BTS>\n\t\t       <RTRUE>)>)>\n\t <COND (<AND <NOT ,P-NAM>\n\t\t     <NOT ,P-ADJ>\n\t\t     <NOT <==? ,P-GETFLAGS ,P-ALL>>\n\t\t     <0? ,P-GWIMBIT>>\n\t\t<COND (.VRB\n\t\t       <TELL \"I think that sentence was missing a noun.\" CR>)>\n\t\t<RFALSE>)>\n\t <COND (<OR <NOT <==? ,P-GETFLAGS ,P-ALL>> <0? ,P-SLOCBITS>>\n\t\t<SETG P-SLOCBITS -1>)>\n\t <SETG P-TABLE .TBL>\n\t <PROG ()\n\t       <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t     (T\n\t\t      <COND (,LIT <DO-SL ,HERE ,SOG ,SIR>)>\n\t\t      <DO-SL ,WINNER ,SH ,SC>\n\t\t      <COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t     <DO-SL ,PLAYER ,SH ,SC>)>)>\n\t       <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t       <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t     (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t   <NOT <0? .LEN>>>\n\t\t      <COND (<NOT <==? .LEN 1>>\n\t\t\t     <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t     <TELL \"(How about the \">\n\t\t\t     <PRINTD <GET .TBL 1>>\n\t\t\t     <TELL \"?)\" CR>)>\n\t\t      <PUT .TBL ,P-MATCHLEN 1>)\n\t\t     (<OR <G? .LEN 1>\n\t\t\t  <AND <0? .LEN> <NOT <==? ,P-SLOCBITS -1>>>>\n\t\t      <COND (<==? ,P-SLOCBITS -1>\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <SET OLEN .LEN>\n\t\t\t     <PUT .TBL ,P-MATCHLEN\n\t\t\t\t  <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t     <AGAIN>)\n\t\t\t    (T\n\t\t\t     <COND (<0? .LEN> <SET LEN .OLEN>)>\n\t\t\t     <COND (<AND ,P-NAM\n\t\t\t                 <VERB? EXAMINE TAKE LAMP-ON\n\t\t\t\t\t        BURN DROP FIND>\n\t\t\t\t\t <SET OBJ <GET .TBL <+ .TLEN 1>>>\n\t\t\t\t\t <SET OBJ\n\t\t\t\t\t      <APPLY\n\t\t\t\t\t       <GETP .OBJ ,P?GENERIC> .OBJ>>>\n\t\t\t\t    <PUT .TBL 1 .OBJ>\n\t\t\t\t    <PUT .TBL ,P-MATCHLEN 1>\n\t\t\t\t    <SETG P-NAM <>>\n\t\t\t\t    <SETG P-ADJ <>>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (<AND .VRB ,P-NAM>\n\t\t\t\t    <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t    <SETG P-ACLAUSE\n\t\t\t\t\t  <COND (<==? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t\t(T ,P-NC2)>>\n\t\t\t\t    <SETG P-AADJ ,P-ADJ>\n\t\t\t\t    <SETG P-ANAM ,P-NAM>\n\t\t\t\t    <ORPHAN <> <>>\n\t\t\t\t    <SETG P-OFLAG T>)\n\t\t\t\t   (.VRB\n\t\t\t\t    <TELL\n\t\t\t\t     \"I couldn't find enough nouns in that sentence!\" CR>)>\n\t\t\t     <SETG P-NAM <>>\n\t\t\t     <SETG P-ADJ <>>\n\t\t\t     <RFALSE>)>)\n\t\t     (<AND <0? .LEN> .GCHECK>\n\t\t      <COND (.VRB\n\t\t\t     <COND (<NOT <==? ,WINNER ,PLAYER>>\n\t\t\t\t    <TELL \"\\\"I can't see that here!\\\"\" CR>) \n\t\t\t\t   (,LIT\n\t\t\t\t    <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t\t\t    <SETG P-XNAM ,P-NAM>\n\t\t\t\t    <SETG P-XADJ ,P-ADJ>\n\t\t\t\t    <SETG P-XADJN ,P-ADJN>\n\t\t\t\t    <SETG P-NAM <>>\n\t\t\t\t    <SETG P-ADJ <>>\n\t\t\t\t    <SETG P-ADJN <>>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (T <TELL \"It's too dark to see!\" CR>)>)>\n\t\t      <SETG P-NAM <>>\n\t\t      <SETG P-ADJ <>>\n\t\t      <RFALSE>)\n\t\t     (<0? .LEN> <SET GCHECK T> <AGAIN>)>\n\t       <SETG P-ADJ <>>\n\t       <SETG P-NAM <>>\n\t       <SETG P-SLOCBITS .XBITS>\n\t       <RTRUE>>>   "
  },
  "MOBY-FIND": {
   "name": "MOBY-FIND",
   "file": "parser.zil",
   "line": 933,
   "endLine": 952,
   "source": "<ROUTINE MOBY-FIND (TBL \"AUX\" FOO LEN)\n\t <SETG P-SLOCBITS -1>\n\t <SETG P-NAM ,P-XNAM>\n\t <SETG P-ADJ ,P-XADJ>\n\t <PUT .TBL ,P-MATCHLEN 0>\n\t <SET FOO <FIRST? ,ROOMS>>\n\t <REPEAT ()\n\t\t <COND (<NOT .FOO> <RETURN>)\n\t\t       (T\n\t\t\t<SEARCH-LIST .FOO .TBL ,P-SRCALL>\n\t\t\t<SET FOO <NEXT? .FOO>>)>>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,LOCAL-GLOBALS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 0>\n\t\t<DO-SL ,ROOMS 1 1>)>\n\t <COND (<EQUAL? <SET LEN <GET .TBL ,P-MATCHLEN>> 1>\n\t\t<SETG P-MOBY-FOUND <GET .TBL 1>>)>\n\t <SETG P-NAM <>>\n\t <SETG P-ADJ <>>\n\t .LEN>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "parser.zil",
   "line": 959,
   "endLine": 977,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which\">\n         <COND (<OR ,P-OFLAG ,P-MERGED> <TELL \" \"> <PRINTB ,P-NAM>)\n\t       (<==? .TBL ,P-PRSO>\n\t\t<CLAUSE-PRINT ,P-NC1 ,P-NC1L <>>)\n\t       (T <CLAUSE-PRINT ,P-NC2 ,P-NC2L <>>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \" D .OBJ>\n\t\t <COND (<==? .LEN 2>\n\t\t        <COND (<NOT <==? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "parser.zil",
   "line": 980,
   "endLine": 1012,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO) \n\t#DECL ((TBL) TABLE (RMG) <OR FALSE TABLE> (RMGL CNT) FIX (OBJ) OBJECT)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<==? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<==? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<AND <0? <GET .TBL ,P-MATCHLEN>>\n\t\t\t   <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH ,V?EXAMINE>>\n\t\t      <DO-SL ,ROOMS 1 1>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "parser.zil",
   "line": 1014,
   "endLine": 1023,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BTS) \n\t#DECL ((OBJ) OBJECT (BIT1 BIT2 BTS) FIX)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>  "
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "parser.zil",
   "line": 1031,
   "endLine": 1052,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ) \n\t#DECL ((OBJ NOBJ) <OR FALSE OBJECT> (TBL) TABLE (LVL) FIX (FLS) ANY)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <==? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <NOT <==? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <FSET? .OBJ ,OPENBIT>>\n\t\t\t      <SET FLS\n\t\t\t\t   <SEARCH-LIST .OBJ\n\t\t\t\t\t\t.TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>> "
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "parser.zil",
   "line": 1054,
   "endLine": 1058,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR) \n\t#DECL ((OBJ) OBJECT (TBL) TABLE (PTR) FIX)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>> "
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "parser.zil",
   "line": 1060,
   "endLine": 1062,
   "source": "<ROUTINE TAKE-CHECK () \n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>> "
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "parser.zil",
   "line": 1064,
   "endLine": 1085,
   "source": "<ROUTINE ITAKE-CHECK (TBL BTS \"AUX\" PTR OBJ TAKEN) \n\t #DECL ((TBL) TABLE (BTS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>> <BTST .BTS ,STAKE>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<==? .OBJ ,IT> <SET OBJ ,P-IT-OBJECT>)>\n\t\t\t       <COND (<NOT <IN? .OBJ ,WINNER>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<==? <ITAKE <>> T>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN <BTST .BTS ,SHAVE>>\n\t\t\t\t\t     <TELL \"You don't have that.\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<NOT .TAKEN>\n\t\t\t\t\t     <TELL \"(Taken)\" CR>)>)>)>>)\n\t       (T)>>  "
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "parser.zil",
   "line": 1087,
   "endLine": 1107,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP) \n\t#DECL ((LOSS) <OR FALSE FIX>)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"I can't use multiple \">\n\t       <COND (<==? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<0? .TMP> <TELL \"tell\">)\n\t\t     (,P-OFLAG\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"\\\".\" CR>\n\t       <RFALSE>)\n\t      (T)>>  "
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "parser.zil",
   "line": 1109,
   "endLine": 1115,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1)) \n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GET .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>    "
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "parser.zil",
   "line": 1117,
   "endLine": 1121,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0)) \n\t#DECL ((ITM) ANY (TBL) TABLE (SIZE CNT) FIX)\n\t<REPEAT ()\n\t\t<COND (<==? .ITM <GETB .TBL .CNT>> <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>  "
  },
  "LIT?": {
   "name": "LIT?",
   "file": "parser.zil",
   "line": 1123,
   "endLine": 1138,
   "source": "<ROUTINE LIT? (RM \"AUX\" OHERE (LIT <>)) \n\t#DECL ((RM OHERE) OBJECT (LIT) <OR ATOM FALSE>)\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<FSET? .RM ,ONBIT> <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<==? .OHERE .RM> <DO-SL ,WINNER 1 1>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT> "
  },
  "PRSO-PRINT": {
   "name": "PRSO-PRINT",
   "file": "parser.zil",
   "line": 1140,
   "endLine": 1144,
   "source": "<ROUTINE PRSO-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC1>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSO>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC1L> <>>)>>"
  },
  "PRSI-PRINT": {
   "name": "PRSI-PRINT",
   "file": "parser.zil",
   "line": 1146,
   "endLine": 1150,
   "source": "<ROUTINE PRSI-PRINT (\"AUX\" PTR)\n\t <COND (<OR ,P-MERGED\n\t\t    <==? <GET <SET PTR <GET ,P-ITBL ,P-NC2>> 0> ,W?IT>>\n\t\t<TELL \" \" D ,PRSI>)\n\t       (T <BUFFER-PRINT .PTR <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "TELL-STAIRS-FCN": {
   "name": "TELL-STAIRS-FCN",
   "file": "ra.zil",
   "line": 23,
   "endLine": 51,
   "source": "<ROUTINE TELL-STAIRS-FCN (\"AUX\" PLACE (FLG <>) (R-FLG <>))\n\t <COND (<IN? ,WINNER ,ALTAR>\n\t\t<RETURN ,LANDING-ONE>)>\n\t <TELL \"(down the \">\n\t <COND (<AND ,ROPE-TIED\n\t\t     <IN? ,ROPE ,WINNER>>\n\t\t<MOVE ,ROPE ,HERE>\n\t\t<SET R-FLG T>)>\n\t <COND (<PRSO? ,P?EAST>\n\t\t<TELL \"wide staircase)\" CR>\n\t\t<SET PLACE ,LANDING-ONE>\n\t\t<SET FLG T>)\n\t       (<PRSO? ,P?WEST>\n\t\t<TELL \"narrow staircase)\" CR>\n\t\t<SET PLACE ,LANDING-THREE>\n\t\t<SET FLG T>)\n\t       (<PRSO? ,P?NORTH>\n\t\t<TELL \"steep staircase)\" CR>\n\t\t<SET PLACE ,LANDING-ZERO>)\n\t       (<PRSO? ,P?SOUTH>\n\t\t<TELL \"winding staircase)\" CR>\n\t\t<SET PLACE ,LANDING-TWO>)>\n\t <COND (.R-FLG\n\t\t<TELL \"You release the free end of the rope as you walk.\" CR>)>\n\t <COND (.FLG\n\t\t<TELL \"The staircase winds as you walk down, turning you around\nso you face in the opposite direction.\" CR>\n\t\t<CRLF>)>\n\t .PLACE>"
  },
  "RE-ENABLE-FCN": {
   "name": "RE-ENABLE-FCN",
   "file": "ra.zil",
   "line": 53,
   "endLine": 60,
   "source": "<ROUTINE RE-ENABLE-FCN ()\n\t <COND (<NOT <IN? ,WINNER ,ALTAR>>\n\t\t<ENABLE <QUEUE I-GINANDTONIC -1>>)>\n\t <COND (<AND ,ROPE-TIED\n\t\t     <IN? ,ROPE ,WINNER>>\n\t\t<MOVE ,ROPE ,CHAMBER-OF-RA>\n\t\t<TELL \"You release the free end of the rope as you walk.\" CR>)>\n\t ,EX8>"
  },
  "ROPE-HOOK-FCN": {
   "name": "ROPE-HOOK-FCN",
   "file": "ra.zil",
   "line": 67,
   "endLine": 84,
   "source": "<ROUTINE ROPE-HOOK-FCN ()\n\t <COND (<IN? ,WINNER ,ALTAR>\n\t\t<RETURN ,LANDING-ONE>)\n\t       (<AND ,ROPE-TIED\n\t\t     <EQUAL? ,LANDING ,LANDING-ZERO>>\n\t\t<TELL \"(down the rope)\" CR>\n\t\t<RETURN ,LANDING-ZERO>)\n\t       (<AND ,ROPE-TIED ,LANDING>\n\t\t<TELL \"(down the steep staircase)\" CR>\n\t\t<JIGS-UP ,PLUNGE-STR>)\n\t       (,ROPE-TIED\n\t\t<JIGS-UP\n\"You grasp the rope firmly in your hands, but the fall is shorter than you\nthought. You reach the bottom with a resounding splat accompanied by a chorus\nof pain led by ganglions you never knew you had. Just before you (thankfully)\nblack out, you release your grip from the rope.\">)\n\t       (ELSE\n\t\t<JIGS-UP ,PLUNGE-STR>)>>"
  },
  "ROPE-DOWN-FCN": {
   "name": "ROPE-DOWN-FCN",
   "file": "ra.zil",
   "line": 87,
   "endLine": 102,
   "source": "<ROUTINE ROPE-DOWN-FCN ()\n\t <COND (<OR <NOT ,ROPE-TIED>\n\t\t    <NOT ,ROPE-PLACED>>\n\t\t<COND (<IN? ,WINNER ,ALTAR>\n\t\t       <RETURN ,LANDING-TWO>)\n\t\t      (<EQUAL? ,HERE ,CHAMBER-OF-RA>\n\t\t       <TELL\n\"Since there are four staircases going down, you'd better say which staircase.\"\n CR>)\n\t\t      (T\n\t\t       <JIGS-UP ,PLUNGE-STR>)>\n\t\t<RFALSE>)\n\t       (ELSE\n\t\t<COND (<NOT ,ROPE-HACK>\n\t\t       <TELL \"(down the rope)\" CR>)>\n\t\t<RETURN ,LANDING>)>>"
  },
  "MOVE-ROPE-RA": {
   "name": "MOVE-ROPE-RA",
   "file": "ra.zil",
   "line": 106,
   "endLine": 142,
   "source": "<ROUTINE MOVE-ROPE-RA (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <EQUAL? ,ROPE-TIED ,ALTAR>>\n\t\t<DISABLE <INT I-GINANDTONIC>>\n\t\t<MOVE ,ROPE ,HERE>\n\t\t<FCLEAR ,ROPE ,NDESCBIT>\n\t\t<RFALSE>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<DISABLE <INT I-GINANDTONIC>>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL ,RA-STR>\n\t\t<COND (,ROPE-PLACED\n\t\t       <FSET ,ROPE ,NDESCBIT>\n\t\t       <TELL\n\" Descending the \" D ,ROPE-PLACED \" is one end of the rope.\">)>\n\t\t<TELL \n\" In the center of the room is a large red sandstone altar mounted solidly in\nthe floor.\">\n\t\t<COND (,ROPE-TIED\n\t\t       <TELL \" The rope is tied to the \" D ,ROPE-TIED \".\">\n\t\t       <COND (<AND <IN? ,ROPE ,CHAMBER-OF-RA>\n\t\t\t\t   <NOT ,ROPE-PLACED>>\n\t\t\t      <TELL \n\" The other end of the rope rests on the floor.\">)\n\t\t\t     (<IN? ,ROPE ,ALTAR>\n\t\t\t      <TELL\n\" The other end rests on the altar.\">)>)>\n\t\t<CRLF>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<FCLEAR ,ROPE ,NDESCBIT>\n\t\t<SETG ROPE-HACK <>>\n\t\t<RFALSE>)\n\t       (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <OR ,ROPE-TIED ,ROPE-PLACED>\n\t\t     <NOT <IN? ,ROPE ,WINNER>>>\n\t\t<FSET ,ROPE ,NDESCBIT>\n\t\t<RFALSE>)>>"
  },
  "RA-STAIRS-FCN": {
   "name": "RA-STAIRS-FCN",
   "file": "ra.zil",
   "line": 186,
   "endLine": 215,
   "source": "<ROUTINE RA-STAIRS-FCN ()\n\t <COND (<VERB? LOOK-DOWN EXAMINE>\n\t\t<COND (<AND <NOT <FLAMING? ,TORCH>>\n\t\t\t    <NOT <FLAMING? ,MATCHES>>>\n\t\t       <TELL\n\"There's just enough light to see the first few steps.\" CR>)\n\t\t      (<OR <FLAMING? ,TORCH>\n\t\t\t   <FLAMING? ,MATCHES>>\n\t\t       <COND (<NOT <PRSO? ,NORTH-STAIRS>>\n\t\t\t      <TELL\n\"You can see far enough down the stairs to make out a landing below.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"You can see the first few steps and then what could only be a sheer dropoff,\ngoing down into total darkness.\" CR>)>)>\n\t\t<RTRUE>)\n\t       (<VERB? CLIMB-DOWN>\n\t\t<COND (<PRSO? ,NORTH-STAIRS>\n\t\t       <COND (<EQUAL? ,ROPE-PLACED ,NORTH-STAIRS>\n\t\t\t      <PERFORM ,V?CLIMB-DOWN ,ROPE>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <JIGS-UP ,PLUNGE-STR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<PRSO? ,EAST-STAIRS>\n\t\t       <GOTO ,LANDING-ONE>)\n\t\t      (<PRSO? ,SOUTH-STAIRS>\n\t\t       <GOTO ,LANDING-TWO>)\n\t\t      (<PRSO? ,WEST-STAIRS>\n\t\t       <GOTO ,LANDING-THREE>)>)>>"
  },
  "FEW-STEPS-FCN": {
   "name": "FEW-STEPS-FCN",
   "file": "ra.zil",
   "line": 225,
   "endLine": 235,
   "source": "<ROUTINE FEW-STEPS-FCN ()\n\t <COND (<VERB? CLIMB-DOWN BOARD CLIMB-ON>\n\t\t;<COND (<AND ,ROPE-TIED\n\t\t\t    <IN? ,ROPE ,WINNER>>\n\t\t       <TELL \"You release the rope as you walk.\" CR>)>\n\t\t<GOTO ,TINY-LANDING>\n\t\t<MOVE-ROPE-HERE ,M-ENTER>\n\t\t<COND (<IN? ,ROPE ,HERE>\n\t\t       <FCLEAR ,ROPE ,NDESCBIT>\n\t\t       <DESCRIBE-ROPE-FCN ,M-OBJDESC>)>\n\t\t<RFATAL>)>>"
  },
  "ALTAR-FCN": {
   "name": "ALTAR-FCN",
   "file": "ra.zil",
   "line": 265,
   "endLine": 287,
   "source": "<ROUTINE ALTAR-FCN (\"OPTIONAL\" (RARG ,M-OBJECT))\n\t <COND (<NOT <EQUAL? .RARG ,M-OBJECT>> <RFALSE>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <OR <NOT <FIRST? ,ALTAR>>\n\t\t\t <EQUAL? <FIRST? ,ALTAR> ,WINNER ,ADVENTURER>>\n\t\t     <PRSO? ,ALTAR>>\n\t\t<TELL\n\t\t <GETP ,ALTAR ,P?TEXT> \" There is nothing on the altar.\" CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <IN? ,WINNER ,ALTAR>\n\t\t     <PRSO? ,ALTAR>\n\t\t     <L? <CCOUNT ,ALTAR> 2>>\n\t\t<TELL <GETP ,ALTAR ,P?TEXT> CR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <PRSO? ,ALTAR>>\n\t\t<PRINT-CONT ,ALTAR>\n\t\t<RTRUE>)\n\t       (<AND <VERB? OPEN CLOSE>\n\t\t     <PRSO? ,ALTAR>>\n\t\t<HOW? ,ALTAR>\n\t\t<RTRUE>)>>"
  },
  "MOVE-ROPE-HERE": {
   "name": "MOVE-ROPE-HERE",
   "file": "ra.zil",
   "line": 291,
   "endLine": 298,
   "source": "<ROUTINE MOVE-ROPE-HERE (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t     <OR <EQUAL? ,LANDING ,HERE>\n\t\t\t <AND <EQUAL? ,LANDING ,LANDING-ZERO>\n\t\t\t      <EQUAL? ,HERE ,TINY-LANDING>>>>\n\t\t<MOVE ,ROPE ,HERE>\n\t\t<FCLEAR ,ROPE ,NDESCBIT>\n\t\t<RFALSE>)>>"
  },
  "TORCH-FCN": {
   "name": "TORCH-FCN",
   "file": "ra.zil",
   "line": 313,
   "endLine": 336,
   "source": "<ROUTINE TORCH-FCN ()\n\t <COND (<AND <PRSI? ,TORCH>\n\t\t     <FLAMING? ,TORCH>\n\t\t     <IN? ,TORCH ,HERE>\n\t\t     <VERB? DROP THROW>\n\t\t     <IN? ,PRSO ,WINNER>\n\t\t     <FSET? ,PRSO ,BURNBIT>>\n\t\t<COND (<VERB? DROP>\n\t\t       <TELL \"Dropped. \">)\n\t\t      (T <TELL \"Thrown. \">)>\n\t        <V-BURN>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL <GETP ,TORCH ,P?TEXT> \" The torch is \">\n\t\t<COND (<NOT <FLAMING? ,TORCH>>\n\t\t       <TELL \"not lit\">)\n\t\t      (<L? ,TORCH-TURNS 125>\n\t\t       <TELL \"burning brightly\">)\n\t\t      (<L? ,TORCH-TURNS 160>\n\t\t       <TELL \"burning dimly\">)\n\t\t      (<L? ,TORCH-TURNS 175>\n\t\t       <TELL \"barely lit\">)>\n\t\t<TELL \".\" CR>\n\t\t<RTRUE>)>>"
  },
  "OIL-FCN": {
   "name": "OIL-FCN",
   "file": "ra.zil",
   "line": 350,
   "endLine": 367,
   "source": "<ROUTINE OIL-FCN ()\n\t <COND (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<NOT <FSET? ,OIL-JAR ,OPENBIT>>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <COND (<G? ,OIL-LEFT 0>\n\t\t       <TELL \"Inside the small pink jar is some liquid.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"The jar is empty.\" CR>)>)>)\n\t       (<AND <VERB? OPEN>\n\t\t     <NOT <FSET? ,OIL-JAR ,OPENBIT>>>\n\t\t<COND (<G? ,OIL-LEFT 0>\n\t\t       <TELL \n\"Opening the jar reveals a small amount of liquid.\" CR >)\n\t\t      (T\n\t\t       <TELL \"Opened.\" CR>)>\n\t\t<FSET ,OIL-JAR ,OPENBIT>\n\t\t<RTRUE>)>>"
  },
  "LIQUID-FCN": {
   "name": "LIQUID-FCN",
   "file": "ra.zil",
   "line": 378,
   "endLine": 396,
   "source": "<ROUTINE LIQUID-FCN ()\n\t <COND (<VERB? EXAMINE>\n\t\t<RFALSE>)\n\t       (<VERB? POUR POUR-ON>\n\t\t<COND (<NOT <IN? ,OIL-JAR ,WINNER>>\n\t\t       <COND (<ITAKE>\n\t\t\t      <TELL \"(taken)\" CR>\n\t\t\t      <PERFORM ,PRSA ,OIL-JAR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL \n\"Hmm. It would be easier if you were holding it.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (T\n\t\t       <PERFORM ,PRSA ,OIL-JAR>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? TASTE>\n\t\t     <FSET? ,OIL-JAR ,OPENBIT>>\n\t\t<TELL \"It tastes horrible.\" CR>)>>"
  },
  "LINE-FCN": {
   "name": "LINE-FCN",
   "file": "temple.zil",
   "line": 208,
   "endLine": 212,
   "source": "<ROUTINE LINE-FCN ()\n\t <COND (<NOT <OR <HELD? ,SILVER-CUP>\n\t\t    <IN? ,SILVER-CUP ,HERE>>>\n\t\t<TELL \"I can't see any \" D ,PRSO \" here.\" CR>\n\t\t<RTRUE>)>>"
  },
  "CUP-FCN": {
   "name": "CUP-FCN",
   "file": "temple.zil",
   "line": 214,
   "endLine": 228,
   "source": "<ROUTINE CUP-FCN ()\n\t <COND (<AND <PRSO? ,SILVER-CUP>\n\t\t     <VERB? EXAMINE LOOK-INSIDE>\n\t\t     <OR <IN? ,WATER ,SILVER-CUP>\n\t\t\t <IN? ,LIQUID ,SILVER-CUP>>>\n\t\t<TELL \"The \">\n\t\t<COND (<IN? ,WATER ,SILVER-CUP>\n\t\t       <TELL \"water\">)\n\t\t      (T\n\t\t       <TELL \"oily liquid\">)>\n\t\t<TELL \" fills the cup up to the line.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "SKELETON-FCN": {
   "name": "SKELETON-FCN",
   "file": "temple.zil",
   "line": 253,
   "endLine": 276,
   "source": "<ROUTINE SKELETON-FCN ()\n\t <COND (<OR <VERB? TAKE SHAKE MOVE>\n\t\t    <AND <VERB? PUT>\n\t\t\t <EQUAL? ,PRSO ,SKELETON>>>\n\t\t<TELL\n\"If you tried that, the skeleton would fall apart, bone by bone.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? ALARM>\n\t\t<TELL \"Let the dead rest.\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<COND (<IN? ,RING ,DIGITS>\n\t\t       <TELL\n\"On the bony digits of one hand is a jeweled ring.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"I see nothing special about the \" D ,PRSO \".\" CR>)>\n\t\t<RTRUE>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "DIGIT-FCN": {
   "name": "DIGIT-FCN",
   "file": "temple.zil",
   "line": 286,
   "endLine": 292,
   "source": "<ROUTINE DIGIT-FCN ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? EXAMINE>\n\t\t<PERFORM ,V?EXAMINE ,SKELETON>\n\t\t<RTRUE>)>>"
  },
  "WEAR-RING-FCN": {
   "name": "WEAR-RING-FCN",
   "file": "temple.zil",
   "line": 307,
   "endLine": 347,
   "source": "<ROUTINE WEAR-RING-FCN ()\n\t <COND (<AND <VERB? WEAR>\n\t\t     <IN? ,RING ,WINNER>>\n\t\t<TELL\n\"Ouch! It seems you've pricked your finger while putting on the ring.\"\n\t\tCR>\n\t\t<ENABLE <QUEUE I-RING-KILL -1>>\n\t\t<FSET ,RING ,WEARBIT>\n\t\t<RTRUE>)\n\t       (<VERB? WEAR>\n\t\t<TELL \"(Taken)\" CR>\n\t\t<MOVE ,RING ,WINNER>\n\t\t<PERFORM ,V?WEAR ,RING>\n\t\t<RTRUE>)\n\t       (<VERB? TAKE>\n\t\t<COND (<ITAKE>\n\t\t       <TELL \"Taken.\" CR>\n\t\t       <FCLEAR ,RING ,NDESCBIT>\n\t\t       <FCLEAR ,NEEDLE ,INVISIBLE>\n\t\t       <FCLEAR ,RING ,DONTTAKE>\n\t\t       <PUTP ,SKELETON ,P?FDESC\n\"Lying before you in tortured repose are the bony remains of a former adventurer.\">)>\n\t\t<RTRUE>)\n\t       (<AND <VERB? PUT>\n\t\t     <FSET? ,RING ,NDESCBIT>>\n\t\t<FCLEAR ,NEEDLE ,INVISIBLE>\n\t\t<FCLEAR ,RING ,NDESCBIT>\n\t\t<FCLEAR ,RING ,DONTTAKE>\n\t\t<PUTP ,SKELETON ,P?FDESC\n\"Lying before you in tortured repose are the bony remains of a former adventurer.\">\n\t\t<RFALSE>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"It's stuck on your finger.\" CR>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<TELL <GETP ,RING ,P?TEXT> CR>\n\t\t<FCLEAR ,NEEDLE ,INVISIBLE>\n\t\t<FCLEAR ,RING ,DONTTAKE>\n\t\t<RTRUE>)>>"
  },
  "TOUCH-NEEDLE-FCN": {
   "name": "TOUCH-NEEDLE-FCN",
   "file": "temple.zil",
   "line": 360,
   "endLine": 377,
   "source": "<ROUTINE TOUCH-NEEDLE-FCN ()\n\t <COND (<VERB? RUB>\n\t\t<TELL\n\"You prick your finger on the tiny needle sticking out from the inside of the\nring.\" CR>\n\t\t<ENABLE <QUEUE I-RING-KILL -1>>\n\t\t<RTRUE>)\n\t       (<VERB? DROP THROW PUT PUT-ON>\n\t\t<TELL \"Better find a haystack first.\" CR>)\n\t       (<VERB? SMELL>\n\t\t<TELL \"It smells very faintly of almonds.\" CR>)\n\t       (<VERB? TASTE>\n\t\t<JIGS-UP\n\"Ugh! It tastes terrible!|\n|\nYou stand there in horrified amazement, feeling the poison creeping down your\nthroat and acting on your body almost instantaneously. Time to shuffle off...\">\n\t\t<RFATAL>)>>"
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
   "line": 41,
   "endLine": 43,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 45,
   "endLine": 47,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF> <DESCRIBE-OBJECTS>)>)>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 49,
   "endLine": 58,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"I see nothing special about the \"\n\t\t      D ,PRSO \".\" CR>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 62,
   "endLine": 88,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL\n\"It is pitch black. Off in the distance you hear hideous squealing and what can\nonly be the sound of thousands of tiny, clawed feet coming closer.\" CR>\n\t\t<RETURN <>>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t <COND (<IN? ,HERE ,ROOMS> <TELL D ,HERE CR>)>\n\t <COND (<OR .LOOK? <NOT ,SUPER-BRIEF>>\n\t\t<SET AV <LOC ,WINNER>>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"(You are \">\n\t\t       <COND (<EQUAL? .AV ,ALTAR>\n\t\t\t      <TELL \"on\">)\n\t\t\t     (T <TELL \"in\">)>\n\t\t       <TELL \" the \" D .AV \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <==? ,HERE .AV>> <FSET .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>\n\t T>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 90,
   "endLine": 95,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (,LIT\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n\t       (ELSE\n\t\t<TELL \"I can't see anything in the dark.\" CR>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "verbs.zil",
   "line": 102,
   "endLine": 141,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <SETG DESC-OBJECT .OBJ>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a\">\n\t\t<VOWEL? .OBJ>\n\t\t<TELL D .OBJ>\n\t\t<COND (<AND <FLAMING? .OBJ>\n\t\t\t    <NOT <EQUAL? .OBJ ,MANY-MATCHES>>>\n\t\t       <TELL \" (lit and burning)\">)\n\t\t      (<AND <EQUAL? .OBJ ,ROPE>\n\t\t\t    ,ROPE-TIED\n\t\t\t    <EQUAL? ,HERE ,CHAMBER-OF-RA>>\n\t\t       <TELL \" (tied to the altar)\">)>\n\t\t<TELL \" here.\">)\n\t       (ELSE\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A\">\n\t\t<VOWEL? .OBJ>\n\t\t<TELL D .OBJ>\n\t\t<COND (<FSET? .OBJ ,WEARBIT> <TELL \" (being worn)\">)>\n\t\t<COND (<AND <FLAMING? .OBJ>\n\t\t\t    <NOT <EQUAL? .OBJ ,MANY-MATCHES>>>\n\t\t       <TELL \" (lit and burning)\">)>\n\t\t<COND (<AND <EQUAL? .OBJ ,ROPE> ,ROPE-TIED>\n\t\t       <TELL \" (tied to the \" D ,ROPE-TIED \")\">)>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside the \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "verbs.zil",
   "line": 143,
   "endLine": 191,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0) \"AUX\" Y 1ST? AV STR\n\t\t     (PV? <>) (INV? <>) (FLG <>))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n\t <COND (<AND <SET AV <LOC ,WINNER>> <FSET? .AV ,VEHBIT>>\n\t\tT)\n\t       (ELSE <SET AV <>>)>\n\t <SET 1ST? T>\n\t <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (ELSE\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .Y> <RETURN <NOT .1ST?>>)\n\t\t\t      (<==? .Y .AV> <SET PV? T>)\n\t\t\t      (<==? .Y ,WINNER>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>\n\t\t\t\t      <SET FLG T>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <PRINT-CONT .Y .V? 0>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN <NOT .1ST?>>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <SET FLG T>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>)>)>\n\t\t <SET Y <NEXT? .Y>>>\n\t .FLG>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "verbs.zil",
   "line": 193,
   "endLine": 203,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND (<==? .OBJ ,WINNER>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ\n\t\t\t     \" is:\" CR>)\n\t\t      (ELSE\n\t\t       <TELL \"The \" D .OBJ \" contains:\" CR>)>)>>"
  },
  "SCORE-UPD": {
   "name": "SCORE-UPD",
   "file": "verbs.zil",
   "line": 215,
   "endLine": 219,
   "source": "<ROUTINE SCORE-UPD (NUM)\n\t #DECL ((NUM) FIX)\n\t <SETG BASE-SCORE <+ ,BASE-SCORE .NUM>>\n\t <SETG SCORE <+ ,SCORE .NUM>>\n\t T>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "verbs.zil",
   "line": 221,
   "endLine": 226,
   "source": "<ROUTINE SCORE-OBJ (OBJ \"AUX\" TEMP)\n\t #DECL ((OBJ) OBJECT (TEMP) FIX)\n\t <COND (<GETP .OBJ ,P?VALUE>\n\t\t<COND (<G? <SET TEMP <GETP .OBJ ,P?VALUE>> 0>\n\t\t       <SCORE-UPD .TEMP>\n\t\t       <PUTP .OBJ ,P?VALUE 0>)>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 228,
   "endLine": 248,
   "source": "<ROUTINE V-SCORE (\"OPTIONAL\" (ASK? T))\n\t #DECL ((ASK?) <OR ATOM FALSE>)\n\t <TELL \"Your score is \" N ,SCORE>\n\t <TELL \" out of a possible \" N ,SCORE-MAX \", in \">\n\t <TELL N ,MOVES>\n\t <COND (<1? ,MOVES> <TELL \" move.\">) (ELSE <TELL \" moves.\">)>\n\t <CRLF>\n\t <TELL\n\"This score gives you the rank of a \">\n\t <COND (<G? ,SCORE 390>\n\t\t<TELL \"master adventurer\">)\n\t       (<G? ,SCORE 320>\n\t\t<TELL \"very good adventurer\">)\n\t       (<G? ,SCORE 200>\n\t\t<TELL \"fairly good looter\">)\n\t       (<G? ,SCORE 100>\n\t\t<TELL \"poor professor\">)\n\t       (ELSE\n\t\t<TELL \"fumbling beginner\">)>\n\t <TELL \".\" CR>\n\t ,SCORE>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 250,
   "endLine": 252,
   "source": "<ROUTINE FINISH ()\n\t <V-SCORE>\n\t <QUIT>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 254,
   "endLine": 263,
   "source": "<ROUTINE V-QUIT (\"OPTIONAL\" (ASK? T) \"AUX\" SCOR)\n\t #DECL ((ASK?) <OR ATOM <PRIMTYPE LIST>> (SCOR) FIX)\n\t <V-SCORE>\n\t <COND (<OR <AND .ASK?\n\t\t\t <TELL\n\"Do you wish to leave the game? (Y is affirmative): \">\n\t\t\t <YES?>>\n\t\t    <NOT .ASK?>>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"Ok.\" CR>)>>"
  },
  "PRE-FINISH": {
   "name": "PRE-FINISH",
   "file": "verbs.zil",
   "line": 265,
   "endLine": 275,
   "source": "<ROUTINE PRE-FINISH ()\n\t <V-SCORE>\n\t <TELL\n\"Do you wish to start the game again? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Okay. Restarting...\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed. Please reboot your system.\" CR>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"Ok. See you next time!\" CR>\n\t\t<QUIT>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "verbs.zil",
   "line": 277,
   "endLine": 283,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 285,
   "endLine": 299,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t <TELL\n\"INFIDEL|\nInfocom interactive fiction - an adventure story|\nCopyright (c) 1983 by Infocom, Inc.  All rights reserved.|\nINFIDEL is a registered trademark of Infocom, Inc.|\nRelease \">\n\t <PRINTN <BAND <GET 0 1> *3777*>>\n\t <TELL \" / Serial number \">\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<PRINTC <GETB 0 .CNT>>)>>\n\t <CRLF>>"
  },
  "IN-HERE?": {
   "name": "IN-HERE?",
   "file": "verbs.zil",
   "line": 301,
   "endLine": 303,
   "source": "<ROUTINE IN-HERE? (OBJ)\n\t <OR <IN? .OBJ ,HERE>\n\t     <GLOBAL-IN? .OBJ ,HERE>>>"
  },
  "V-AGAIN": {
   "name": "V-AGAIN",
   "file": "verbs.zil",
   "line": 305,
   "endLine": 319,
   "source": "<ROUTINE V-AGAIN (\"AUX\" OBJ)\n\t <COND (<==? ,L-PRSA ,V?WALK>\n\t\t<PERFORM ,L-PRSA ,L-PRSO>)\n\t       (T\n\t\t<SET OBJ\n\t\t     <COND (<AND ,L-PRSO <NOT <LOC ,L-PRSO>>>\n\t\t\t    ,L-PRSO)\n\t\t\t   (<AND ,L-PRSI <NOT <LOC ,L-PRSO>>>\n\t\t\t    ,L-PRSI)>>\n\t\t<COND (<AND .OBJ \n\t\t\t    <NOT <EQUAL? .OBJ ,PSEUDO-OBJECT ,ROOMS>>>\n\t\t       <TELL \"I can't see the \" D .OBJ \" anymore.\" CR>\n\t\t       <RFATAL>)\n\t\t      (T\n\t\t       <PERFORM ,L-PRSA ,L-PRSO ,L-PRSI>)>)>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 327,
   "endLine": 348,
   "source": "<ROUTINE JIGS-UP (DESC \"OPTIONAL\" (PLAYER? <>))\n \t #DECL ((DESC) ZSTRING (PLAYER?) <OR ATOM FALSE>)\n \t <TELL .DESC CR>\n\t <TELL \"\n|    ****  You have died  ****\n|\n|\">\n\t <COND (<NOT ,PYRAMID-OPENED>\n\t\t<TELL\n\"You feel yourself disembodied in a deep blackness. A voice from the void, or\nperhaps it's just your dying thoughts, rings in your ears.|\n|\n\\\"Obsessions are the torment of men's souls, reaching out for something greater\nthan life has offered. Perhaps this is what makes the difference between an\nordinary mortal and an adventurer!\\\" It is the last thing you hear.\" CR>)\n\t       (T\n\t\t<TELL\n\"The great mysteries of the ancient pyramid remain unsolved. Although your\ndesperation has served you well in getting this far, to get farther requires a\nwisdom, tempered by experience.\" CR>)>\n\t <CRLF>\n\t <PRE-FINISH>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 350,
   "endLine": 355,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>\n\t\t<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 357,
   "endLine": 361,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 363,
   "endLine": 369,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE T>\n\t <TELL \"Do you wish to restart? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 385,
   "endLine": 386,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Use directions for movement here.\" CR>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "verbs.zil",
   "line": 388,
   "endLine": 389,
   "source": "<ROUTINE V-LAUNCH ()\n\t  <TELL \"How in blazes does one launch that?\" CR>>"
  },
  "GO-NEXT": {
   "name": "GO-NEXT",
   "file": "verbs.zil",
   "line": 391,
   "endLine": 394,
   "source": "<ROUTINE GO-NEXT (TBL \"AUX\" VAL)\n\t #DECL ((TBL) TABLE (VAL) ANY)\n\t <COND (<SET VAL <LKP ,HERE .TBL>>\n\t\t<GOTO .VAL>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "verbs.zil",
   "line": 396,
   "endLine": 404,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t #DECL ((ITM) ANY (TBL) TABLE (CNT LEN) FIX)\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<==? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<==? .CNT .LEN> <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 406,
   "endLine": 448,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t #DECL ((PT) <OR FALSE TABLE> (PTS) FIX (STR) <OR ZSTRING FALSE>\n\t\t(OBJ) OBJECT (RM) <OR FALSE OBJECT>)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<==? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<==? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT> <PROB 90>>\n\t\t<JIGS-UP\n\"Oh, no! You have been devoured by 6,502 rats!\">)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFATAL>)>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "verbs.zil",
   "line": 450,
   "endLine": 452,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>\n\t <SETG P-IT-LOC ,HERE>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 454,
   "endLine": 456,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER> <PRINT-CONT ,WINNER>)\n\t       (T <TELL \"You are empty-handed.\" CR>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 468,
   "endLine": 504,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)>\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <COND (<EQUAL? ,PRSO ,KNAPSACK>\n\t\t\t      <RFALSE>)\n\t\t\t     (T <TELL \"You are already wearing it.\" CR>)>)\n\t\t      (<EQUAL? ,PRSO ,ONE-MATCH>\n\t\t       <TELL \"You already have one. One at a time, now!\" CR>)\n\t\t      (T <TELL \"You already have it.\" CR>)>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"You can't reach that.\" CR>\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<NOT <==? ,PRSI <LOC ,PRSO>>>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t\t\t   <FSET? ,PRSI ,CONTBIT>\n\t\t\t\t   <NOT <FSET? ,PRSI ,OPENBIT>>>\n\t\t\t      <TELL \"You'd better open the \" D ,PRSI \n\t\t\t\t    \" first.\" CR>\n\t\t\t      <THIS-IS-IT ,PRSI>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,PRSO ,LOCK>\n\t\t\t      <RFALSE>)\n\t\t\t     (<AND <EQUAL? ,PRSO ,SHOVEL>\n\t\t\t\t   <EQUAL? ,PRSI ,SAND>>\n\t\t\t      <SETG PRSI <>>\n\t\t\t      <RFALSE>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"The \" D ,PRSO\n\t\t\t\t    \" isn't in the \" D ,PRSI \".\" CR>)>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<==? ,PRSO <LOC ,WINNER>> <TELL \"You are in it, loser!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 506,
   "endLine": 510,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<==? <ITAKE> T>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are now wearing the \" D ,PRSO \".\" CR>)\n\t\t      (T <TELL \"Taken.\" CR>)>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 514,
   "endLine": 534,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ TEMP)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy.\" CR>\n\t\t       <CRLF>)>\n\t\t<RFALSE>)\n\t       (<G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t<TELL \"You're carrying too many individual items already!\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t        <RTRUE>)>>"
  },
  "V-PUT-ACROSS": {
   "name": "V-PUT-ACROSS",
   "file": "verbs.zil",
   "line": 536,
   "endLine": 537,
   "source": "<ROUTINE V-PUT-ACROSS ()\n\t  <TELL \"You can't do that.\" CR>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "verbs.zil",
   "line": 539,
   "endLine": 543,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<FSET? ,PRSI ,SURFACEBIT>\n\t\t<V-PUT>\n\t\t<RTRUE>)\n\t       (T <TELL \"There's no good surface on the \" D ,PRSI \".\" CR>)>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 545,
   "endLine": 571,
   "source": "<ROUTINE PRE-PUT (\"AUX\" OBJ)\n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<PRSO? ,PLASTER ,PLASTER1 ,LINTEL>\n\t\t<TELL \"That's weird.\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSI ,GROUND ,SAND>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,ONE-MATCH>\n\t\t<RFALSE>)\n\t       (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t\t<TELL \"Nice try.\" CR>)\n\t       (<AND <PRSI? ,LEFT-DISC ,RIGHT-DISC ,MID-DISC>\n\t\t     <FIRST? ,PRSI>>\n\t\t<SET OBJ <FIRST? ,PRSI>>\n\t\t<COND (<EQUAL? .OBJ ,PRSO>\n\t\t       <TELL \"Better have your eyes checked.\" CR>)\n\t\t      (T <TELL \"There's no room. The \" D .OBJ \n\t\t      \" is already on the \" D ,PRSI \".\" CR>)>\n\t\t<RTRUE>)\n\t       (<STAIRWAY-CHECK?>\n\t\t<RTRUE>)\n\t       (<PRSI? ,TORCH>\n\t\t<PERFORM ,V?DROP ,PRSO ,PRSI>\n\t\t<RTRUE>)>>"
  },
  "STAIRWAY-CHECK?": {
   "name": "STAIRWAY-CHECK?",
   "file": "verbs.zil",
   "line": 573,
   "endLine": 596,
   "source": "<ROUTINE STAIRWAY-CHECK? ()\n\t <COND (<AND <PRSO? ,ROPE>\n\t\t     ,ROPE-TIED>\n\t\t<RFALSE>)\n\t       (<AND <OR <EQUAL? ,PRSI ,NORTH-STAIRS ,SOUTH-STAIRS>\n\t\t\t <EQUAL? ,PRSI ,WEST-STAIRS ,EAST-STAIRS>>\n\t\t     <EQUAL? <LOC ,WINNER> ,CHAMBER-OF-RA ,TINY-LANDING>>\n\t\t<TELL \"You hear the \" D ,PRSO \" crash below.\" CR>\n\t\t<COND (<NOT <IN? ,PRSO ,WINNER>>\n\t\t       <TELL \"You're not holding the \" D ,PRSO \".\" CR>\n\t\t       <RTRUE>)\n\t\t      (<PRSI? ,NORTH-STAIRS>\n\t\t       <MOVE ,PRSO ,LANDING-ZERO>\n\t\t       <RTRUE>)\n\t\t      (<PRSI? ,EAST-STAIRS>\n\t\t       <MOVE ,PRSO ,LANDING-ONE>\n\t\t       <RTRUE>)\n\t\t      (<PRSI? ,WEST-STAIRS>\n\t\t       <MOVE ,PRSO ,LANDING-THREE>\n\t\t       <RTRUE>)\n\t\t      (<PRSI? ,SOUTH-STAIRS>\n\t\t       <MOVE ,PRSO ,LANDING-TWO>\n\t\t       <RTRUE>)\n\t\t      (ELSE <RFALSE>)>)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 598,
   "endLine": 633,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>>)\n\t       (T\n\t\t<TELL \"You can't do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>)\n\t       (<==? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"The \" D ,PRSO \" is already in the \" D ,PRSI \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<COND (<AND <NOT <EQUAL? ,PRSI ,PUNCH-PANEL>>\n\t\t\t    <FSET? ,PRSO ,NDESCBIT>>\n\t\t       <FCLEAR ,PRSO ,NDESCBIT>)>\n\t\t<TELL \"Done.\" CR>)>\n\t <COND (<AND <EQUAL? ,PRSO ,BEAM>\n\t\t     ,BEAM-PLACED\n\t\t     <NOT <EQUAL? ,PRSI ,NICHES>>>\n\t\t<SETG BEAM-PLACED <>>\n\t\t<SETG ON-BEAM <>>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,DEAD-BOOK ,SCARAB>\n\t\t     <NOT <PRSI? ,S-AREA ,L-AREA>>>\n\t\t<SETG CAN-TURN-STATUES <>>)>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "verbs.zil",
   "line": 635,
   "endLine": 638,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<==? ,PRSO <LOC ,WINNER>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 640,
   "endLine": 645,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have it.\" CR>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 647,
   "endLine": 649,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "verbs.zil",
   "line": 651,
   "endLine": 654,
   "source": "<ROUTINE HELD? (OBJ)\n\t <COND (<NOT .OBJ> <RFALSE>)\n\t       (<IN? .OBJ ,WINNER> <RTRUE>)\n\t       (T <HELD? <LOC .OBJ>>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 656,
   "endLine": 659,
   "source": "<ROUTINE V-GIVE ()\n\t <TELL \"You can't give the \" D ,PRSO \" to a\">\n\t <VOWEL? ,PRSI>\n\t <TELL D ,PRSI \"!\" CR>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 661,
   "endLine": 662,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"FOOOO!!\" CR>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 664,
   "endLine": 667,
   "source": "<ROUTINE V-DROP (\"OPTIONAL\" (SUPPRESS <>))\n\t <COND (<IDROP>\n\t\t<COND (<NOT SUPPRESS>\n\t\t       <TELL \"Dropped.\" CR>)>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 676,
   "endLine": 685,
   "source": "<ROUTINE V-THROW ()\n\t <COND (<AND ,PRSI\n\t\t     <OR <FSET? ,PRSI ,CONTBIT>\n\t\t\t <FSET? ,PRSI ,CLIMBBIT>>>\n\t\t<PERFORM ,V?PUT ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<IDROP>\n\t\t<TELL \"Thrown.\" CR>\n\t\t<RTRUE>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 687,
   "endLine": 695,
   "source": "<ROUTINE IDROP ()\n\t <COND (<AND <NOT <IN? ,PRSO ,WINNER>> <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL \"You're not carrying the \" D ,PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T <MOVE ,PRSO <LOC ,WINNER>> <RTRUE>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 697,
   "endLine": 726,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<TELL \"You must tell me how to do that to the \" D ,PRSO \".\" CR>\n\t\t)\n\t       (<NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT> <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<NOT <FIRST? ,PRSO>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <COND (<NOT <PRSO? ,MAP>>\n\t\t\t\t     <TELL \"Opening\">)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"Unfolding\">)>\n\t\t\t      <TELL \" the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t       <FSET ,PRSO ,OPENBIT>)>)\n\t       (T <TELL \"The \" D ,PRSO \" fails to open.\" CR>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 728,
   "endLine": 741,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T))\n\t #DECL ((OBJ) OBJECT (F N) <OR FALSE OBJECT>)\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST? <SET 1ST? <>>)\n\t\t\t      (ELSE\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t<TELL \"a\">\n\t\t\t<VOWEL? .F>\n\t\t\t<TELL D .F>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F> <RETURN>)>>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 743,
   "endLine": 758,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<TELL \"You must tell me how to do that to the \" D ,PRSO \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>)\n\t\t      (T <TELL \"It is already closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now closed.\" CR>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>)\n\t\t      (T <TELL \"It is already closed.\" CR>)>)\n\t       (ELSE\n\t\t<TELL \"You cannot close that.\" CR>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 760,
   "endLine": 767,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,WEARBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 771,
   "endLine": 780,
   "source": "<ROUTINE WEIGHT\n\t (OBJ \"AUX\" CONT (WT 0))\n\t #DECL ((OBJ) OBJECT (CONT) <OR FALSE OBJECT> (WT) FIX)\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<AND <==? .OBJ ,WINNER> <FSET? .CONT ,WEARBIT>>\n\t\t\t       <SET WT <+ .WT 1>>)\n\t\t\t      (T <SET WT <+ .WT <WEIGHT .CONT>>>)>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "V-BUG": {
   "name": "V-BUG",
   "file": "verbs.zil",
   "line": 782,
   "endLine": 785,
   "source": "<ROUTINE V-BUG ()\n\t <TELL\n\"If there is a problem here, it is unintentional. You may report\nyour problem to the address provided in your documentation.\" CR>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 792,
   "endLine": 794,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins\" ,COPR-NOTICE CR>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 796,
   "endLine": 799,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends\" ,COPR-NOTICE CR>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 801,
   "endLine": 802,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO> <TELL \"I don't juggle objects!\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 804,
   "endLine": 812,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<AND <EQUAL? ,PRSO ,BEAM>\n\t\t     <NOT <FSET? ,BEAM ,TOUCHBIT>>>\n\t\t<TELL\n\"Sure. But it might be better to be a little more specific in how you want it\nmoved.\" CR>)\n\t       (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T <TELL \"You can't move the \" D ,PRSO \".\" CR>)>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 814,
   "endLine": 858,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<FLAMING? ,PRSO>\n\t\t       <COND (<EQUAL? ,PRSO ,ONE-MATCH>\n\t\t\t      <TELL \"One\">)\n\t\t\t     (T <TELL \"It\">)>\n\t\t       <TELL \" is already lit.\" CR>)\n\t\t      (<AND <EQUAL? ,PRSO ,TORCH>\n\t\t\t    <NOT ,PRSI>\n\t\t\t    <NOT <IN? ,ONE-MATCH ,WINNER>>>\n\t\t       <TELL \n\"You expect to light the torch with your glowing intellect?\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <OR <EQUAL? ,PRSI ,MATCHES\n\t\t\t\t\t,ONE-MATCH ,SINGLE-MATCH>\n\t\t\t\t<IN? ,ONE-MATCH ,WINNER>>\n\t\t\t    <EQUAL? ,PRSO ,TORCH>>\n\t\t       <ENABLE <QUEUE I-TORCH -1>>\n\t\t       <LIGHT-THE ,TORCH <>>\n\t\t       <FSET ,TORCH ,TOUCHBIT>)\n\t\t      (<AND <OR <EQUAL? ,PRSO ,MANY-MATCHES ,SINGLE-MATCH \n\t\t\t\t\t,EMPTY-MATCHES>\n\t\t\t\t<EQUAL? ,PRSO ,ONE-MATCH>>\n\t\t\t    <AND <NOT <IN? ,ONE-MATCH ,WINNER>>\n\t\t\t\t <NOT <IN? ,MATCHES ,WINNER>>>>\n\t\t       <TELL \"I see no match here.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR <EQUAL? ,PRSO ,MANY-MATCHES ,SINGLE-MATCH \n\t\t\t\t\t,EMPTY-MATCHES>\n\t\t\t\t<EQUAL? ,PRSO ,ONE-MATCH>>\n\t\t       <COND (<L? ,MATCH-COUNT 1>\n\t\t\t      <TELL \n\"That's a little tough to do with an empty book of matches.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <COND (<NOT <IN? ,ONE-MATCH ,WINNER>>\n\t\t\t\t     <MATCH-MOVER>)>\n\t\t\t      <TELL \"You have now lit a match.\" CR>\n\t\t\t      <LIGHT-THE ,ONE-MATCH T>\n\t\t\t      <ENABLE <QUEUE I-MATCH-OUT 3>>)>)\n\t\t      (ELSE\n\t\t       <TELL \"I don't know how to light the \" D ,PRSO\".\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't light that.\" CR>)>\n\t <RTRUE>>"
  },
  "FLAMING?": {
   "name": "FLAMING?",
   "file": "verbs.zil",
   "line": 860,
   "endLine": 862,
   "source": "<ROUTINE FLAMING? (OBJ)\n\t <COND (<FSET? .OBJ ,FLAMEBIT>\n\t\t<RTRUE>)>>"
  },
  "LIGHT-THE": {
   "name": "LIGHT-THE",
   "file": "verbs.zil",
   "line": 864,
   "endLine": 885,
   "source": "<ROUTINE LIGHT-THE (OBJECT SUPPRESS?)\n\t <FSET .OBJECT ,ONBIT>\n\t <FSET .OBJECT ,FLAMEBIT>\n\t <COND (<EQUAL? .OBJECT ,ONE-MATCH>\n\t\t<COND (<FSET? ,MATCHES ,OPENBIT>\n\t\t       <COND (<PROB 10>\n\t\t\t      <TELL\n\"Ooops! You didn't remember to close the cover before striking! The matchbook\nbursts into flames, burning your fingertips.\" CR>\n\t\t\t      <MOVE ,BURNED-MATCHBOOK <LOC ,MATCHES>>\n\t\t\t      <FSET ,BURNED-MATCHBOOK ,OPENBIT>\n\t\t\t      <REMOVE ,MATCHES>\n\t\t\t      <REMOVE ,MANUAL>\n\t\t\t      <REMOVE ,ONE-MATCH>\n\t\t\t      <SETG MATCH-COUNT 0>\n\t\t\t      <SET SUPPRESS? T>)>)>)>\n\t <COND (<NOT .SUPPRESS?>\n\t\t<TELL \"The \" D .OBJECT \" is now lit.\" CR>)>\n\t <COND (<NOT ,LIT>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<CRLF>\n\t\t<V-LOOK>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 887,
   "endLine": 899,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<NOT <FLAMING? ,PRSO>>\n\t\t       <TELL \"It is already out.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,MATCHES ,ONE-MATCH>\n\t\t       <DISABLE <INT I-MATCH-OUT>>\n\t\t       <I-MATCH-OUT T>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <TELL \"The \" D ,PRSO \" is now out.\" CR>\n\t\t       <KILL-TORCH>)>)\n\t       (ELSE <TELL \"You can't extinguish that.\" CR>)>\n\t <RTRUE>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 901,
   "endLine": 908,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t #DECL ((NUM) FIX)\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (<CLOCKER> <RETURN>)>\n\t\t <SETG MOVES <+ ,MOVES 1>>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "verbs.zil",
   "line": 910,
   "endLine": 928,
   "source": "<ROUTINE PRE-BOARD (\"AUX\" AV)\n\t <SET AV <LOC ,WINNER>>\n\t <COND (<EQUAL? ,PRSO ,TENT-OBJ>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,PRSO ,BOAT>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,PRSO ,BEAM>\n\t\t<PERFORM ,V?CLIMB-ON ,BEAM>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"You are already on the \" D .AV \", cretin!\" CR>)\n\t\t      (T <RFALSE>)>)\n\t       (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL \"I suppose you have a theory on getting into the \"\n\t\t      D ,PRSO \".\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 930,
   "endLine": 940,
   "source": "<ROUTINE V-BOARD (\"OPTIONAL\" OBJ \"AUX\" AV)\n\t #DECL ((AV) OBJECT)\n\t <TELL \"You are now \">\n\t <COND (<EQUAL? ,PRSO ,ALTAR>\n\t\t<TELL \"on\">)\n\t       (T <TELL \"in\">)>\n\t <TELL \" the \" D ,PRSO \".\" CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <COND (<NOT <EQUAL? ,PRSO ,ALTAR ,CRATE ,SLAB>>\n\t\t<APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>)>\n\t <RTRUE>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 944,
   "endLine": 960,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<NOT <==? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL \"You're not in that!\" CR>\n\t\t<RFATAL>)\n\t       (<FSET? ,HERE ,RLANDBIT>\n\t\t<COND (<NOT ,STOOD-UP>\n\t\t       <TELL \n\"You push yourself up and manage to get out of the cot. Your legs are a little\nwobbly, though, and your head swims.\" CR>\n\t\t       <SETG STOOD-UP T>)\n\t\t      (T\n\t\t       <TELL \"You are on your feet again.\" CR>)>\n\t\t<MOVE ,WINNER ,HERE>)\n\t       (T\n\t\t<TELL\n\"You realize, just in time, that getting out here would probably be fatal.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-BLAST": {
   "name": "V-BLAST",
   "file": "verbs.zil",
   "line": 962,
   "endLine": 963,
   "source": "<ROUTINE V-BLAST ()\n\t <TELL \"You can't blast anything by using words.\" CR>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 965,
   "endLine": 1008,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T)\n\t       \"AUX\" (LB <FSET? .RM ,RLANDBIT>) (WLOC <LOC ,WINNER>)\n\t             (AV <>) OLIT)\n\t #DECL ((RM WLOC) OBJECT (LB) <OR ATOM FALSE> (AV) <OR FALSE FIX>)\n\t <SET OLIT ,LIT>\n\t <COND (<FSET? .WLOC ,VEHBIT>\n\t\t<TELL \"You'd better get \">\n\t\t<COND (<EQUAL? .WLOC ,ALTAR>\n\t\t       <TELL \"off\">)\n\t\t      (T <TELL \"out\">)>\n\t\t<TELL \" of the \" D .WLOC \" first.\" CR>\n\t\t<RTRUE>\n\t\t;<SET AV <GETP .WLOC ,P?VTYPE>>)>\n\t <COND (<OR <AND <NOT .LB> <OR <NOT .AV> <NOT <FSET? .RM .AV>>>>\n\t\t    <AND <FSET? ,HERE ,RLANDBIT>\n\t\t\t .LB\n\t\t\t .AV\n\t\t\t <NOT <==? .AV ,RLANDBIT>>\n\t\t\t <NOT <FSET? .RM .AV>>>>\n\t\t<COND (.AV <TELL \"You can't go there in a\">\n\t\t       <VOWEL? .WLOC>\n\t\t       <TELL D .WLOC \".\">)\n\t\t      (T <TELL \"You can't go there without a vehicle.\">)>\n\t\t<CRLF>\n\t\t<RFALSE>)\n\t       (<FSET? .RM ,RMUNGBIT> <TELL <GETP .RM ,P?LDESC> CR> <RFALSE>)\n\t       (T\n\t\t<COND (.AV <MOVE .WLOC .RM>)\n\t\t      (T\n\t\t       <MOVE ,WINNER .RM>)>\n\t\t<SETG HERE .RM>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<AND <NOT .OLIT>\n\t\t\t    <NOT ,LIT>\n\t\t\t    <PROB 85>>\n\t\t       <JIGS-UP\n\"Oh, no! An army of eleventy-seven rats, starved for affection (and food),\nleapt upon your body in a show of rodentine appreciation and devoured you!\">)>\n\t\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t\t<COND (<NOT <==? ,HERE .RM>> <RTRUE>)\n\t\t      (<NOT <==? ,ADVENTURER ,WINNER>>\n\t\t       <TELL \"The \" D ,WINNER \" leaves the room.\" CR>)\n\t\t      (.V? <V-FIRST-LOOK>)>\n\t\t<RTRUE>)>>"
  },
  "V-BACK": {
   "name": "V-BACK",
   "file": "verbs.zil",
   "line": 1010,
   "endLine": 1013,
   "source": "<ROUTINE V-BACK\n\t ()\n\t <TELL\n\"Sorry, my memory isn't that good. You'll have to give a direction.\" CR>>"
  },
  "V-POUR": {
   "name": "V-POUR",
   "file": "verbs.zil",
   "line": 1015,
   "endLine": 1030,
   "source": "<ROUTINE V-POUR ()\n\t <COND (<NOT <OR <EQUAL? ,PRSO ,OIL-JAR ,LIQUID ,WATER>\n\t\t\t <EQUAL? ,PRSO ,C-SAND>>>\n\t\t<TELL \"You can't pour that.\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Poured.\" CR>\n\t\t<COND (<EQUAL? ,PRSO ,OIL-JAR ,LIQUID>\n\t\t       <SETG OIL-LEFT 0>\n\t\t       <REMOVE ,LIQUID>)\n\t\t      (<EQUAL? ,PRSO ,C-SAND>\n\t\t       <SETG SAND-FILLED <>>\n\t\t       <REMOVE ,C-SAND>)\n\t\t      (T\n\t\t       <REMOVE ,WATER>\n\t\t       <SETG WATER-LEFT 0>)>)>>"
  },
  "V-POUR-IN": {
   "name": "V-POUR-IN",
   "file": "verbs.zil",
   "line": 1032,
   "endLine": 1056,
   "source": "<ROUTINE V-POUR-IN (\"AUX\" L)\n\t <COND (<NOT <OR <EQUAL? ,PRSO ,OIL-JAR ,LIQUID ,WATER>\n\t\t\t <EQUAL? ,PRSO ,C-SAND>>>\n\t\t<TELL \"You can't pour that into anything.\" CR><RTRUE>)\n\t       (<NOT <FSET? ,PRSI ,CONTBIT>>\n\t\t<TELL \"You'd have a lot of trouble pouring the \" D ,PRSO\n\t\t      \" into the \" D ,PRSI \".\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSI ,GOLD-CUP ,SILVER-CUP>\n\t\t<COND (<OR <AND <EQUAL? ,PRSO ,WATER>\n\t\t\t\t<EQUAL? <LOC ,LIQUID> ,PRSI>>\n\t\t\t   <AND <EQUAL? ,PRSO ,LIQUID>\n\t\t\t\t<EQUAL? <LOC ,WATER> ,PRSI>>>\n\t\t       <TELL \"Oil and water never mixed together well.\" CR>\n\t\t       <RTRUE>)>\n\t\t<SET L <LOC ,PRSO>>\n\t\t<TELL \"Okay. The \" D ,PRSI \" has been filled, but the \"\n\t\t      D .L \" is now empty.\" CR>\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<COND (<EQUAL? ,PRSO ,WATER>\n\t\t       <SETG WATER-LEFT 0>)\n\t\t      (<EQUAL? ,PRSO ,C-SAND>\n\t\t       <SETG SAND-FILLED <>>)>)\n\t       (T\n\t\t<TELL \"Why bother?\" CR>)>>"
  },
  "PRE-POUR-ON": {
   "name": "PRE-POUR-ON",
   "file": "verbs.zil",
   "line": 1059,
   "endLine": 1124,
   "source": "<ROUTINE PRE-POUR-ON (\"AUX\" LIQ)\n\t <COND (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,PRSO ,WATER ,C-SAND>\n\t\t<SET LIQ ,PRSO>\n\t\t<COND (<NOT <FSET? <LOC .LIQ> ,OPENBIT>>\n\t\t       <TELL \"You'd better open the \" D <LOC .LIQ> \" first.\"\n\t\t\t     CR>\n\t\t       <RTRUE>)\n\t\t      (<FLAMING? ,PRSI>\n\t\t       <TELL \"Poured.\" CR>\n\t\t       <COND (,LIT\n\t\t\t      <SETG LIT <LIT? ,HERE>>)>\n\t\t       <COND (<NOT <SETG LIT <LIT? ,HERE>>>\n\t\t\t      <TELL \" It is now pitch black.\">)>\n\t\t       <COND (<EQUAL? .LIQ ,WATER>\n\t\t\t      <SETG WATER-LEFT <- ,WATER-LEFT 10>>\n\t\t\t      <COND (<L? ,WATER-LEFT 10>\n\t\t\t\t     <REMOVE ,WATER>)>)\n\t\t\t     (T\n\t\t\t      <SETG SAND-FILLED <>>\n\t\t\t      <REMOVE ,C-SAND>)>\n\t\t       <FCLEAR ,PRSI ,FLAMEBIT>\n\t\t       <FCLEAR ,PRSI ,ONBIT>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Poured.\" CR>\n\t\t       <COND (<EQUAL? .LIQ ,WATER>\n\t\t\t      <SETG WATER-LEFT <- ,WATER-LEFT 10>>\n\t\t\t      <COND (<L? ,WATER-LEFT 10>\n\t\t\t\t     <REMOVE ,WATER>)>\n\t\t\t      <TELL \"The \" D ,PRSI\n\t\t\t\t     \" gets wet, but quickly dries.\" CR>)\n\t\t\t     (T\n\t\t\t      <COND (<GETP ,HERE ,P?MAP>\n\t\t\t\t     <TELL \"The sand is gone with the wind.\" CR>)\n\t\t\t\t    (T <TELL \n\"The sand falls through the cracks in the stone floor.\" CR>)>\n\t\t\t      <SETG SAND-FILLED <>>)>\n\t\t       <RTRUE>)>)\n\t       (<NOT <EQUAL? ,PRSO ,OIL-JAR ,LIQUID>>\n\t\t<TELL \"You can't pour that on anything.\" CR><RTRUE>)\n               (<0? ,OIL-LEFT>\n\t\t<TELL \"Why bother? The jar is empty.\" CR>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,PRSI ,TORCH>>\n\t\t<TELL\n\"Why waste precious liquid? But, if you insist, done! The liquid evaporates in\na few moments.\" CR>\n\t\t<SETG OIL-LEFT 0>\n\t\t<REMOVE ,LIQUID>\n\t\t<RTRUE>)\n\t       (<NOT <FSET? ,OIL-JAR ,OPENBIT>>\n\t\t<TELL \n\"A little tough to get that wick through the closed jar, eh?\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"The tip of the torch has been covered with the liquid.\">\n\t\t<COND (<FLAMING? ,TORCH>\n\t\t       <TELL \n\" The torch flares up, singeing your eyebrows. Phew! Close call, there!\">\n\t\t       <SETG TORCH-TURNS 0>)>\n\t\t<CRLF>\n\t\t<SETG OIL-LEFT <- ,OIL-LEFT 20>>\n\t\t<SETG OIL-SOAKED T>\n\t\t<SETG OILED-TORCH T>)>>"
  },
  "V-POUR-ON": {
   "name": "V-POUR-ON",
   "file": "verbs.zil",
   "line": 1126,
   "endLine": 1126,
   "source": "<ROUTINE V-POUR-ON () <TELL \"Foo!\" CR>>"
  },
  "V-SPRAY": {
   "name": "V-SPRAY",
   "file": "verbs.zil",
   "line": 1128,
   "endLine": 1128,
   "source": "<ROUTINE V-SPRAY () <V-SQUEEZE>>"
  },
  "V-SSPRAY": {
   "name": "V-SSPRAY",
   "file": "verbs.zil",
   "line": 1129,
   "endLine": 1129,
   "source": "<ROUTINE V-SSPRAY () <PERFORM ,V?SPRAY ,PRSI ,PRSO>>"
  },
  "V-SQUEEZE": {
   "name": "V-SQUEEZE",
   "file": "verbs.zil",
   "line": 1131,
   "endLine": 1132,
   "source": "<ROUTINE V-SQUEEZE ()\n\t  <TELL \"How singularly useless.\" CR>>"
  },
  "PRE-OIL": {
   "name": "PRE-OIL",
   "file": "verbs.zil",
   "line": 1134,
   "endLine": 1135,
   "source": "<ROUTINE PRE-OIL ()\n\t <TELL \"You probably put spinach in your gas tank, too.\" CR>>"
  },
  "V-OIL": {
   "name": "V-OIL",
   "file": "verbs.zil",
   "line": 1137,
   "endLine": 1137,
   "source": "<ROUTINE V-OIL () <TELL \"That's not very useful.\" CR>>"
  },
  "PRE-FILL": {
   "name": "PRE-FILL",
   "file": "verbs.zil",
   "line": 1139,
   "endLine": 1156,
   "source": "<ROUTINE PRE-FILL (\"AUX\" T)\n\t #DECL ((T) <OR FALSE TABLE>)\n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<AND <NOT ,PRSI>\n\t\t     <SET T <GETPT ,HERE ,P?GLOBAL>>>\n\t\t<COND (<ZMEMQB ,GLOBAL-WATER .T <PTSIZE .T>>\n\t\t       <SETG PRSI ,GLOBAL-WATER>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TELL \"There is nothing to fill it with.\">\n\t\t       <COND (<GETP ,HERE ,P?MAP>\n\t\t\t      <TELL \" Except for some sand.\">)>\n\t\t       <CRLF>\n\t\t       <RTRUE>)>)>\n\t <COND (<NOT <EQUAL? ,PRSI ,GLOBAL-WATER>>\n\t\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "verbs.zil",
   "line": 1158,
   "endLine": 1202,
   "source": "<ROUTINE V-FILL ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>)\n\t\t      (T\n\t\t       <TELL \"There's nothing to fill it with.\">\n\t\t       <COND (<GETP ,HERE ,P?MAP>\n\t\t\t      <TELL \" Except for maybe some sand.\">)>\n\t\t       <CRLF>)>)\n\t       (<EQUAL? ,PRSI ,GLOBAL-WATER>\n\t\t<COND (<OR <EQUAL? ,WATER-LEFT 40>\n\t\t\t   <IN? ,C-SAND ,PRSO>>\n\t\t       <TELL \"It's already full.\" CR>)\n\t\t      (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t       <HOW? ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t       <TELL \"Tough to do when the \" D ,PRSO \" is closed.\" CR>)\n\t\t      (<NOT <PRSO? ,CANTEEN ,GOLD-CUP ,SILVER-CUP>>\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)\n\t\t      (<IN? ,LIQUID ,PRSO>\n\t\t       <TELL \"Oil and water don't mix.\" CR>)\n\t\t      (T\n\t\t       <MOVE ,WATER ,PRSO>\n\t\t       <COND (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t\t      <SETG WATER-LEFT 40>)\n\t\t\t     (T\n\t\t\t      <SETG WATER-LEFT 0>)>\n\t\t       <TELL \"Okay, you have filled the \" D ,PRSO \".\" CR>)>)\n\t       (<EQUAL? ,PRSI ,WATER>\n\t\t<COND (<IN? ,LIQUID ,PRSO>\n\t\t       <TELL \"Oil and water don't mix.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <PERFORM ,V?POUR-IN ,WATER ,PRSO>\n\t\t       <THIS-IS-IT ,PRSO>\n\t\t       <RTRUE>)>)\n\t       (<EQUAL? ,PRSI ,LIQUID ,OIL-JAR>\n\t\t<COND (<IN? ,WATER ,PRSO>\n\t\t       <TELL \"Water and oil don't mix.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <PERFORM ,V?POUR-IN ,LIQUID ,PRSO>\n\t\t       <RTRUE>)>)\n\t       (T <TELL \"You may know how to do that, but I don't.\" CR>)>>"
  },
  "V-ADVENTURE": {
   "name": "V-ADVENTURE",
   "file": "verbs.zil",
   "line": 1204,
   "endLine": 1204,
   "source": "<ROUTINE V-ADVENTURE () <TELL \"A hollow voice says \\\"Fool.\\\"\" CR>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 1206,
   "endLine": 1210,
   "source": "<ROUTINE V-DRINK ()\n\t <COND (<PRE-EAT>\n\t\t<RTRUE>)\n\t       (T\n\t\t<V-EAT>)>>"
  },
  "PRE-EAT": {
   "name": "PRE-EAT",
   "file": "verbs.zil",
   "line": 1212,
   "endLine": 1223,
   "source": "<ROUTINE PRE-EAT ()\n\t <COND (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <FSET? ,PRSO ,FOODBIT>>\n\t\t<COND (<EQUAL? <ITAKE <>> T>\n\t\t       <TELL \"(Taken)\" CR>\n\t\t       <RFALSE>)\n\t\t      (T <RTRUE>)>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <EQUAL? ,PRSO ,ME ,WINNER ,ADVENTURER>>\n\t\t     <FSET? ,PRSO ,FOODBIT>>\n\t\t<TELL \"You're not holding the \" D ,PRSO \".\" CR>\n\t\t<RTRUE>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 1227,
   "endLine": 1273,
   "source": "<ROUTINE V-EAT (\"AUX\" (EAT? <>) (DRINK? <>) (NOBJ <>))\n\t #DECL ((NOBJ) <OR OBJECT FALSE> (EAT? DRINK?) <OR ATOM FALSE>)\n\t <COND (<AND <SET EAT? <FSET? ,PRSO ,FOODBIT>> <IN? ,PRSO ,WINNER>>\n\t\t<COND (<VERB? DRINK> <TELL \"How can you drink that?\">)\n\t\t      (ELSE\n\t\t       <TELL \n\"That really hit the spot. It did make you a little thirstier, though.\">\n\t\t       <REMOVE ,PRSO>\n\t\t       <SETG THIRST <+ ,THIRST 10>>\n\t\t       <DISABLE <INT I-GROWL>>\n\t\t       <COND (<NOT <GETP ,HERE ,P?MAP>>\n\t\t\t      <ENABLE <QUEUE I-PYRAMID-DRINK -1>>)>)>\n\t\t<CRLF>)\n\t       (<SET DRINK? <FSET? ,PRSO ,DRINKBIT>>\n\t\t<COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t   <AND <SET NOBJ <LOC ,PRSO>>\n\t\t\t\t<IN? .NOBJ ,WINNER>\n\t\t\t\t<FSET? .NOBJ ,OPENBIT>>>\n\t\t       <TELL \"You feel much refreshed.\">\n\t\t       <COND (,SANDY-CANTEEN\n\t\t\t      <TELL \n\" Some sand from the bottom of the canteen is gritty in your mouth, though.\">)>\n\t\t       <CRLF>\n\t\t       <SETG WATER-LEFT <- ,WATER-LEFT 10>>\n\t\t       <COND (<L? ,WATER-LEFT 10>\n\t\t\t      <REMOVE ,PRSO>)>\n\t\t       <SETG THIRST 0>\n\t\t       <SETG PYR-THIRST 0>\n\t\t       <DISABLE <INT I-PYRAMID-DRINK>>)\n\t\t      (<IN? ,PRSO ,LOCAL-GLOBALS>\n\t\t       <COND (<G? ,NILE-DRINKS 3>\n\t\t\t      <TELL \n\"You're going to start sloshing around soon.\" CR>\n\t\t\t      <RTRUE>)>\n\t\t       <TELL\n\"You kneel down and drink deeply from the Nile and feel refreshed.\" CR>\n\t\t       <SETG NILE-DRINKS <+ ,NILE-DRINKS 1>>\n\t\t       <SETG THIRST 0>\n\t\t       <SETG PYR-THIRST 0>\n\t\t       <DISABLE <INT I-PYRAMID-DRINK>>)\n\t\t      (T <TELL \n\"I'd like to oblige, but it's not within easy reach.\" CR>)>)\n\t       (<NOT <OR .EAT? .DRINK?>>\n\t\t<TELL \"I don't think that the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" would agree with you.\" CR>)>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "verbs.zil",
   "line": 1275,
   "endLine": 1283,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,VILLAIN>\n\t\t       <TELL \"Insults of this nature won't help you.\" CR>)\n\t\t      (T\n\t\t       <TELL \"What a loony!\" CR>)>)\n\t       (T\n\t\t<TELL\n\"Such language in a high-class establishment like this!\" CR>)>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 1285,
   "endLine": 1286,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 1288,
   "endLine": 1289,
   "source": "<ROUTINE V-FOLLOW ()\n\t <TELL \"Give me a break!\" CR>>"
  },
  "V-STAY": {
   "name": "V-STAY",
   "file": "verbs.zil",
   "line": 1291,
   "endLine": 1292,
   "source": "<ROUTINE V-STAY ()\n\t <TELL \"You will be lost without me!\" CR>>"
  },
  "V-PRAY": {
   "name": "V-PRAY",
   "file": "verbs.zil",
   "line": 1296,
   "endLine": 1301,
   "source": "<ROUTINE V-PRAY ()\n\t <SETG PRAYER-HACK <+ ,PRAYER-HACK 1>>\n\t <COND (<L? ,PRAYER-HACK 3>\n\t\t<TELL \"If you pray enough, your prayers may be answered.\" CR>)\n\t       (T\n\t\t<TELL \"No one is listening...\" CR>)>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 1303,
   "endLine": 1317,
   "source": "<ROUTINE V-LEAP (\"AUX\" T S) #DECL ((T) <OR FALSE TABLE>)\n\t <COND (<AND ,PRSO\n\t\t     <NOT <PRSO? ,INTDIR ,MAST-HOLE>>>\n\t\t<PERFORM V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET T <GETPT ,HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .T>>\n\t\t<COND (<OR <==? .S 2>\t\t\t\t\t ;NEXIT\n\t\t\t   <AND <==? .S 4>\t\t\t\t ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .T 1>>>>>\n\t\t       <TELL\n\"This was not a very safe place to try jumping.\" CR>\n\t\t       <JIGS-UP <PICK-ONE ,JUMPLOSS>>)\n\t\t      (T <V-SKIP>)>)\n\t       (ELSE <V-SKIP>)>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 1319,
   "endLine": 1319,
   "source": "<ROUTINE V-SKIP () <TELL <PICK-ONE ,WHEEEEE> CR>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 1321,
   "endLine": 1321,
   "source": "<ROUTINE V-LEAVE () <DO-WALK ,P?OUT>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 1325,
   "endLine": 1331,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<TELL\n\t\t \"I think that only schizophrenics say \\\"Hello\\\" to a\">\n\t\t<VOWEL? ,PRSO>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (ELSE <TELL <PICK-ONE ,HELLOS> CR>)>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 1353,
   "endLine": 1358,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (<NOT ,LIT> <TELL \"It is impossible to read in the dark.\" CR>)\n\t       (,PRSI \n\t\t<TELL \"How does one look through a\">\n\t\t<VOWEL? ,PRSI>\n\t\t<TELL D ,PRSI \"?\" CR>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 1360,
   "endLine": 1368,
   "source": "<ROUTINE V-READ ()\n\t <COND (<AND <NOT <FSET? ,PRSO ,READBIT>>\n\t\t     <NOT <EQUAL? ,PRSO ,WALLS>>>\n\t\t<TELL \"How can I read a\">\n\t\t<VOWEL? ,PRSO>\n\t\t<TELL D ,PRSO \"?\" CR>)\n\t       (<EQUAL? ,PRSO ,WALLS>\n\t\t<TELL \"There's nothing on the walls worth reading.\" CR>)\n\t       (ELSE <TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 1370,
   "endLine": 1374,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <COND (<GETP ,HERE ,P?MAP>\n\t\t<TELL \"There is nothing but sand there.\" CR>)\n\t       (ELSE\n\t\t<TELL \"There is nothing but dust there.\" CR>)>>"
  },
  "V-LOOK-DOWN": {
   "name": "V-LOOK-DOWN",
   "file": "verbs.zil",
   "line": 1376,
   "endLine": 1376,
   "source": "<ROUTINE V-LOOK-DOWN () <TELL \"You can't see anything down there.\" CR>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1378,
   "endLine": 1378,
   "source": "<ROUTINE V-LOOK-BEHIND () <TELL \"There is nothing behind the \" D ,PRSO \".\" CR>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1380,
   "endLine": 1418,
   "source": "<ROUTINE V-LOOK-INSIDE (\"OPTIONAL\" (REACH? <>))\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \"\n\t\t\t     D\n\t\t\t     ,PRSO\n\t\t\t     \" is open.\">)\n\t\t      (ELSE <TELL \"The \" D ,PRSO \" is closed.\">)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,VICBIT>\n\t\t       <TELL \"There is nothing special to be \">\n\t\t       <COND (.REACH?\n\t\t\t      <TELL \"felt\">)\n\t\t\t     (T\n\t\t\t      <TELL \"seen\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO> <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     (<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t      <COND (<IN? ,WINNER ,PRSO>\n\t\t\t\t     <TELL \"You're on it!\" CR>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"There is nothing on the \"\n\t\t\t\t\t    D ,PRSO \".\" CR>\n\t\t\t\t     <RTRUE>)>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (ELSE <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (ELSE\n\t\t<TELL \"I don't know how to \">\n\t\t<COND (<NOT .REACH?>\n\t\t       <TELL \"look inside a\">)\n\t\t      (ELSE <TELL \"feel inside a\">)>\n\t\t<VOWEL? ,PRSO>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 1420,
   "endLine": 1422,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t       <FSET? .OBJ ,OPENBIT>>>"
  },
  "V-REPENT": {
   "name": "V-REPENT",
   "file": "verbs.zil",
   "line": 1424,
   "endLine": 1424,
   "source": "<ROUTINE V-REPENT () <TELL \"It could very well be too late!\" CR>>"
  },
  "PRE-BURN": {
   "name": "PRE-BURN",
   "file": "verbs.zil",
   "line": 1426,
   "endLine": 1465,
   "source": "<ROUTINE PRE-BURN ()\n\t <COND (<AND <EQUAL? ,PRSO ,TORCH>\n\t\t     <EQUAL? ,PRSI ,ONE-MATCH ,MANY-MATCHES>\n\t\t     <OR <IN? ,ONE-MATCH ,WINNER>\n\t\t\t <IN? ,MATCHES ,WINNER>>>\n\t\t<COND (<NOT <FLAMING? ,PRSI>>\n\t\t       <COND (<L? ,MATCH-COUNT 1>\n\t\t\t      <TELL \"You're out of matches. Sorry.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (ELSE\n\t\t\t      <COND (<NOT <IN? ,ONE-MATCH ,WINNER>>\n\t\t\t\t     <TELL \"(lighting a match first)\" CR>\n\t\t\t\t     <MATCH-MOVER>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL \"(lighting the match first)\" CR>)>\n\t\t\t      <LIGHT-THE ,ONE-MATCH T>\n\t\t\t      <ENABLE <QUEUE I-MATCH-OUT 3>>)>)>\n\t\t<PERFORM ,V?LAMP-ON ,TORCH ,ONE-MATCH>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,TORCH>\n\t\t     <IN? ,PRSI ,WINNER>\n\t\t     <FLAMING? ,PRSI>> \n\t\t<PERFORM ,V?LAMP-ON ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<AND <NOT <IN? ,PRSI ,WINNER>>\n\t\t     <NOT <IN? ,PRSI ,HERE>>\n\t\t     <NOT <EQUAL? <LOC <LOC ,PRSI>> ,HERE>>>\n\t\t<TELL \"I see no \" D ,PRSI \" here.\" CR>\n\t\t<RTRUE>)\n\t       (<FLAMING? ,PRSI> <RFALSE>)\n\t       (<FSET? ,PRSI ,BURNBIT>\n\t\t<TELL \"You'd better light \">\n\t\t<COND (<EQUAL? ,PRSI ,MANY-MATCHES>\n\t\t       <TELL \"a match\">)\n\t\t      (ELSE <TELL \"the \" D ,PRSI>)>\n\t\t<TELL \" first.\" CR>\n\t\t<RTRUE>)\n\t       (T <TELL \"With a\">\n\t\t<VOWEL? ,PRSI>\n\t\t<TELL D ,PRSI \"??!?\" CR>)>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "verbs.zil",
   "line": 1467,
   "endLine": 1516,
   "source": "<ROUTINE V-BURN ()\n\t <COND (<EQUAL? ,PRSO ,BOAT ,DECK>\n\t\t<JIGS-UP ,BARGE-BURN-STR>\n\t\t<RFATAL>)\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<IN? ,PRSO ,WINNER>\n\t\t       <TELL \"The \" D ,PRSO \" catches fire and is consumed.\">\n\t\t       <EMPTY-THE ,PRSO>\n\t\t       <REMOVE ,PRSO>\n\t\t       <SETG P-IT-LOC <>>\n\t\t       <COND (<PRSO? ,ROPE>\n\t\t\t      <SETG ROPE-TIED <>>\n\t\t\t      <SETG ROPE-PLACED <>>)>)\n\t\t      (<AND <PRSO? ,SHIM ,BEAM>\n\t\t\t    <EQUAL? <LOC ,PRSO> ,HERE ,BELOW-MAST>\n\t\t\t    <OR <EQUAL? ,HERE ,BARGE-CENTER ,FORE-CABIN\n\t\t\t\t\t,AFT-CABIN>\n\t\t\t\t<EQUAL? ,HERE ,BELOW-DECK ,BELOW-MAST>>>\n\t\t       <TELL \"The \" D ,PRSO\n\" catches fire, but before you have a chance to react, the fire spreads.\" CR>\n\t\t       <JIGS-UP ,BARGE-BURN-STR>)\n\t\t      (<PRSO? ,SHIM ,BEAM>\n\t\t       <REMOVE ,PRSO>\n\t\t       <SETG P-IT-LOC <>>\n\t\t       <TELL \"The \" D ,PRSO\n\" catches fire and is consumed.\" CR>\n\t\t       <COND (<PRSO? ,BEAM>\n\t\t\t      <COND (<AND ,ON-BEAM\n\t\t\t\t\t  <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t\t\t\t  <NOT <IN? ,PLASTER ,HERE>>>\n\t\t\t\t     <JIGS-UP ,AIR-WALK>)\n\t\t\t\t    (,BEAM-PLACED\n\t\t\t\t     <COND (<IN? ,WINNER ,ANNEX>\n\t\t\t\t\t    <JIGS-UP ,ANNEX-BEAM-STR>\n\t\t\t\t\t    <RFATAL>)\n\t\t\t\t\t   (<IN? ,WINNER ,BURIAL-CHAMBER>\n\t\t\t\t\t    <JIGS-UP ,BURIAL-BEAM-STR>)\n\t\t\t\t\t   (<IN? ,WINNER ,NORTH-ANTECHAMBER>\n\t\t\t\t\t    <DROP-THE-BLOCKS>\n\t\t\t\t\t    <RTRUE>)\n\t\t\t\t\t   (<IN? ,WINNER ,SOUTH-ANTECHAMBER>\n\t\t\t\t\t    <CLOSE-THE-ANNEX>\n\t\t\t\t\t    <RTRUE>)>)>)>\n\t\t       <RTRUE>)\n\t\t      (ELSE <TELL \"You don't have the \" D ,PRSO \".\" CR>)>)\n\t       (<AND <EQUAL? ,PRSO ,OIL-JAR ,LIQUID>\n\t\t     <FLAMING? ,PRSI>>\n\t\t<PERFORM ,V?DIP-IN ,PRSI ,OIL-JAR>\n\t\t<RTRUE>)\n\t       (T <TELL \"I don't think you can burn the \" D ,PRSO \".\" CR>)>>"
  },
  "PRE-TURN": {
   "name": "PRE-TURN",
   "file": "verbs.zil",
   "line": 1518,
   "endLine": 1526,
   "source": "<ROUTINE PRE-TURN ()\n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<NOT <FSET? ,PRSO ,TURNBIT>>\n\t\t<TELL \"You can't turn that!\" CR>)\n\t       (<AND ,PRSI\n\t\t     <EQUAL? ,PRSI ,INTDIR>>\n\t\t<TELL \"You can't turn things to a specific direction.\" CR>\n\t\t<RTRUE>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 1528,
   "endLine": 1528,
   "source": "<ROUTINE V-TURN () <TELL \"This has no effect.\" CR>>"
  },
  "V-PUMP": {
   "name": "V-PUMP",
   "file": "verbs.zil",
   "line": 1530,
   "endLine": 1531,
   "source": "<ROUTINE V-PUMP ()\n\t <TELL \"I really don't see how.\" CR>>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "verbs.zil",
   "line": 1533,
   "endLine": 1533,
   "source": "<ROUTINE V-INFLATE () <TELL \"How can you inflate that?\" CR>>"
  },
  "V-DEFLATE": {
   "name": "V-DEFLATE",
   "file": "verbs.zil",
   "line": 1535,
   "endLine": 1535,
   "source": "<ROUTINE V-DEFLATE () <TELL \"Come on, now!\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1537,
   "endLine": 1537,
   "source": "<ROUTINE V-LOCK () <TELL \"It doesn't seem to work.\" CR>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "verbs.zil",
   "line": 1539,
   "endLine": 1539,
   "source": "<ROUTINE V-PICK () <TELL \"You can't pick that.\" CR>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 1541,
   "endLine": 1541,
   "source": "<ROUTINE V-UNLOCK () <V-LOCK>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "verbs.zil",
   "line": 1543,
   "endLine": 1553,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<COND (<EQUAL? ,PRSI ,HANDS>\n\t\t       <TELL \"Be serious. Karate chop it? Come on!\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\t\t\t\"I doubt that the \\\"cutting edge\\\" of a\">\n\t\t       <VOWEL? ,PRSI>\n\t\t       <TELL D ,PRSI \" is adequate.\" CR>)>)\n\t       (T\n\t\t<TELL \"Strange concept, cutting the \" D ,PRSO \"....\" CR>)>>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 1555,
   "endLine": 1556,
   "source": "<ROUTINE V-KILL ()\n\t <IKILL \"kill\">>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 1558,
   "endLine": 1587,
   "source": "<ROUTINE IKILL (STR)\n\t #DECL ((STR) ZSTRING)\n\t <COND (<NOT ,PRSO> <TELL \"There is nothing here to \" .STR \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,VILLAIN>>\n\t\t     <NOT <FSET? ,PRSO ,VICBIT>>>\n\t\t<TELL \"I've known strange people, but fighting a\">\n\t\t<VOWEL? ,PRSO>\n\t\t<TELL D ,PRSO \"?\" CR>)\n\t       (<OR <NOT ,PRSI> <==? ,PRSI ,HANDS>>\n\t\t<TELL \"Trying to \"\n\t\t      .STR\n\t\t      \" a\">\n\t\t<VOWEL? ,PRSO>\n\t\t<TELL D ,PRSO\n\t\t      \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <IN? ,PRSI ,WINNER>>\n\t\t<TELL \"You aren't even holding the \" D ,PRSI \".\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"Trying to \"\n\t\t      .STR\n\t\t      \" the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \" with a\">\n\t\t<VOWEL? ,PRSI>\n\t\t<TELL\n\t\t      D\n\t\t      ,PRSI\n\t\t      \" is suicidal.\" CR>)\n\t       (ELSE <TELL \"You can't.\" CR>)>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 1589,
   "endLine": 1589,
   "source": "<ROUTINE V-ATTACK () <IKILL \"attack\">>"
  },
  "V-SWING": {
   "name": "V-SWING",
   "file": "verbs.zil",
   "line": 1591,
   "endLine": 1595,
   "source": "<ROUTINE V-SWING ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \"Who do you think you are, Benny Goodman?\" CR>)\n\t       (T\n\t\t<TELL \"Whoosh!\" CR>)>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "verbs.zil",
   "line": 1597,
   "endLine": 1597,
   "source": "<ROUTINE V-KICK () <HACK-HACK \"Kicking the \">>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "verbs.zil",
   "line": 1599,
   "endLine": 1599,
   "source": "<ROUTINE V-WAVE () <HACK-HACK \"Waving the \">>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "verbs.zil",
   "line": 1601,
   "endLine": 1601,
   "source": "<ROUTINE V-RAISE () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "verbs.zil",
   "line": 1603,
   "endLine": 1603,
   "source": "<ROUTINE V-LOWER () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 1605,
   "endLine": 1605,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with the \">>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 1607,
   "endLine": 1607,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing the \">>"
  },
  "PRE-PUSH-TO": {
   "name": "PRE-PUSH-TO",
   "file": "verbs.zil",
   "line": 1609,
   "endLine": 1621,
   "source": "<ROUTINE PRE-PUSH-TO ()\n\t <COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t    <IN? ,PRSO ,LOCAL-GLOBALS>>\n\t\t<TELL \"Nice try.\" CR>)\n\t       (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<PRSO? ,SARCOPH>\n\t\t<TELL \"Be serious. Any idea what that must weigh?\" CR>\n\t\t<RTRUE>)\n\t       (<AND <NOT <IN? ,PRSO <LOC ,WINNER>>>\n\t\t     <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <EQUAL? ,PRSO ,NOT-HERE-OBJECT>>>\n\t\t<TELL \"Huh? The \" D ,PRSO \"? Get serious.\" CR>)>>"
  },
  "V-PUSH-TO": {
   "name": "V-PUSH-TO",
   "file": "verbs.zil",
   "line": 1629,
   "endLine": 1671,
   "source": "<ROUTINE V-PUSH-TO (\"AUX\" (OFFS -3) (FLG 0))\n\t <COND (<AND <NOT <EQUAL? ,PRSO ,HUGE-STATUE>>\n\t\t     <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \n\"There's no need for that. Why not just pick it up and then carry it there?\" \n\t\t\tCR>\n\t\t<RTRUE>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"You push and strain, but can't budge the \" D ,PRSO \".\"\n\t\t      CR>)\n\t       (<NOT <EQUAL? ,PRSI ,INTDIR>>\n\t\t<TELL \"You can't push things to that.\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,HERE ,LANDING-ZERO>\n\t\t<COND (<AND <NOT <EQUAL? ,P-DIRECTION ,P?NE ,P?NW>>\n\t\t\t    <NOT <EQUAL? ,P-DIRECTION ,P?SE ,P?SW>>>\n\t\t       <SET FLG 1>)\n\t\t      (ELSE\n\t\t       <SET FLG 3>)>)>\n\t <COND (<EQUAL? .FLG 0>\n\t\t<REPEAT ()\n\t\t\t<SET OFFS <+ .OFFS 3>>\n\t\t\t<COND (<G? .OFFS 9>\n\t\t\t       <RETURN>)\n\t\t\t      (<EQUAL? ,HERE <GET ,PUSH-TBL .OFFS>>\n\t\t\t       <COND (<EQUAL? ,P-DIRECTION \n\t\t\t\t\t      <GET ,PUSH-TBL <+ .OFFS 1>>>\n\t\t\t\t      <SET FLG 2>)\n\t\t\t\t     (<NOT \n\t\t\t\t       <EQUAL? ,P-DIRECTION\n\t\t\t\t\t       <GET ,PUSH-TBL <+ .OFFS 2>>>>\n\t\t\t\t      <SET FLG 1>)\n\t\t\t\t     (ELSE\n\t\t\t\t      <SET FLG 3>)>)>>)>\n\t <COND (<EQUAL? .FLG 1>\n\t\t<TELL \"The statue bumps into a wall.\" CR>)\n\t       (<EQUAL? .FLG 2>\n\t\t<TELL \"It won't fit through the door.\" CR>)\n\t       (<EQUAL? .FLG 3>\n\t\t<DO-WALK ,P-DIRECTION>\n\t\t<MOVE ,HUGE-STATUE ,HERE>\n\t\t<THIS-IS-IT ,HUGE-STATUE>\n\t\t<TELL \"The pushed statue rests on the floor.\" CR>)>>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "verbs.zil",
   "line": 1673,
   "endLine": 1696,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND (<PRSO? ,NOT-HERE-OBJECT ,ME ,WINNER ,ADVENTURER>\n\t\t<RFALSE>)\n\t       (<EQUAL? ,PRSO ,N-ANTE-SEAL>\n\t\t<COND (<BREAK-SEAL>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"You scratch at the seals but accomplish little.\" CR>\n\t\t       <RTRUE>)>)\n\t       (<OR <PRSO? ,PLASTER ,PLASTER1 ,LOCK>\n\t\t    <PRSO? ,HUGE-STATUE ,HEAD ,CRATE>\n\t\t    <PRSO? ,BLACK-BOX ,BEAM>>\n\t        <RFALSE>)\n\t       (<NOT <FSET? ,PRSO ,VICBIT>>\n\t\t<HACK-HACK \"Trying to destroy the \">)\n\t       (<NOT ,PRSI>\n\t\t<TELL \"Trying to destroy the \" D ,PRSO \n\t\t      \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL \"Trying to destroy the \" D ,PRSO \" with a\">\n\t\t<VOWEL? ,PRSI>\n\t\t<TELL D ,PRSI\n\t\t      \" is quite self-destructive.\" CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 1698,
   "endLine": 1698,
   "source": "<ROUTINE V-MUNG () <TELL \"Nothing much happens.\" CR>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 1700,
   "endLine": 1705,
   "source": "<ROUTINE HACK-HACK\n\t (STR)\n\t #DECL ((STR) ZSTRING)\n\t <COND (<AND <IN? ,PRSO ,GLOBAL-OBJECTS> <VERB? WAVE RAISE LOWER>>\n\t\t<TELL \"The \" D ,PRSO \" isn't here!\" CR>)\n\t       (T <TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>)>>"
  },
  "WORD-TYPE": {
   "name": "WORD-TYPE",
   "file": "verbs.zil",
   "line": 1714,
   "endLine": 1719,
   "source": "<ROUTINE WORD-TYPE\n\t (OBJ WORD \"AUX\" SYNS)\n\t #DECL ((OBJ) OBJECT (WORD SYNS) TABLE)\n\t <ZMEMQ .WORD\n\t\t<SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t<- </ <PTSIZE .SYNS> 2> 1>>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1721,
   "endLine": 1724,
   "source": "<ROUTINE V-KNOCK ()\n\t <TELL \"Why knock on a\">\n\t <VOWEL? ,PRSO>\n\t <TELL D ,PRSO \"?\" CR>>"
  },
  "V-CHOMP": {
   "name": "V-CHOMP",
   "file": "verbs.zil",
   "line": 1726,
   "endLine": 1727,
   "source": "<ROUTINE V-CHOMP ()\n\t <TELL \"I don't know how to do that. I win in all cases!\" CR>>"
  },
  "V-FROBOZZ": {
   "name": "V-FROBOZZ",
   "file": "verbs.zil",
   "line": 1729,
   "endLine": 1732,
   "source": "<ROUTINE V-FROBOZZ\n\t ()\n\t <TELL\n\"The FROBOZZ Corporation created, owns, and operates this programmer.\" CR>>"
  },
  "V-WIN": {
   "name": "V-WIN",
   "file": "verbs.zil",
   "line": 1734,
   "endLine": 1734,
   "source": "<ROUTINE V-WIN () <TELL \"Naturally!\" CR>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 1736,
   "endLine": 1736,
   "source": "<ROUTINE V-YELL () <TELL \"Aarrrrrgggggggghhhhhhhhhhh!\" CR>>"
  },
  "V-PLUG": {
   "name": "V-PLUG",
   "file": "verbs.zil",
   "line": 1738,
   "endLine": 1738,
   "source": "<ROUTINE V-PLUG () <TELL \"This has no effect.\" CR>>"
  },
  "V-EXORCISE": {
   "name": "V-EXORCISE",
   "file": "verbs.zil",
   "line": 1740,
   "endLine": 1740,
   "source": "<ROUTINE V-EXORCISE () <TELL \"What a bizarre concept!\" CR>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 1744,
   "endLine": 1768,
   "source": "<ROUTINE V-SHAKE (\"AUX\" X)\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"This seems to have no effect.\" CR>)\n\t       (<EQUAL? ,PRSO ,HANDS>\n\t\t<TELL\n\"Nice to meet me. Funny, you think I look like myself.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"You can't take it; thus, you can't shake it!\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t     <FIRST? ,PRSO>>\n\t\t<TELL \"It sounds as if there is something inside the \"\n\t\t      D\n\t\t      ,PRSO\n\t\t      \".\"\n\t\t      CR>)\n\t       (<AND <EQUAL? ,PRSO ,LIQUID ,OIL-JAR>\n\t\t     <IN? ,LIQUID ,OIL-JAR>>\n\t\t<TELL \"The liquid sloshes around.\" CR>)\n\t       (<AND <FSET? ,PRSO ,OPENBIT> <FIRST? ,PRSO>>\n\t\t<REPEAT ()\n\t\t\t<COND (<SET X <FIRST? ,PRSO>> <MOVE .X ,HERE>)\n\t\t\t      (ELSE <RETURN>)>>\n\t        <TELL \"All of the objects spill onto the \">\n\t\t<SPILL-WHERE?>)\n\t       (T <TELL \"There's nothing in the \" D ,PRSO \".\" CR>)>>"
  },
  "SPILL-WHERE?": {
   "name": "SPILL-WHERE?",
   "file": "verbs.zil",
   "line": 1770,
   "endLine": 1785,
   "source": "<ROUTINE SPILL-WHERE? ()\n\t <COND (<IN? ,WINNER ,COT>\n\t\t<TELL\n\t\t \"ground by the cot.\">)\n\t       (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<TELL\n\t\t \"river bank.\">)\n\t       (<GETP ,HERE ,P?MAP>\n\t\t<TELL \n\t\t \"sand.\">)\n\t       (<EQUAL? <GETP ,HERE ,P?ACTION> ,BURN-THE-BARGE>\n\t\t<TELL \n\t\t \"wooden decking.\">)\n\t       (T\n\t\t<TELL \"stone floor.\">)>\n\t <CRLF>>"
  },
  "PRE-DIG": {
   "name": "PRE-DIG",
   "file": "verbs.zil",
   "line": 1787,
   "endLine": 1801,
   "source": "<ROUTINE PRE-DIG () \n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<NOT ,PRSI>\n\t\t<COND (<IN? ,SHOVEL ,WINNER>\n\t\t       <SETG PRSI ,SHOVEL>\n\t\t       <TELL \"(with the shovel)\" CR>)\n\t\t      (<IN? ,PICK-AXE ,WINNER>\n\t\t       <SETG PRSI ,PICK-AXE>\n\t\t       <TELL \"(with the axe)\" CR>)\n\t\t      (T <SETG PRSI ,HANDS>\n\t\t       <TELL \"(with your hands)\" CR>)>)>\n\t <COND (<FSET? ,PRSI ,TOOLBIT> <RFALSE>)\n\t       (ELSE\n\t\t<TELL \"Digging with the \" D ,PRSI \" is very silly.\" CR>)>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "verbs.zil",
   "line": 1805,
   "endLine": 1849,
   "source": "<ROUTINE V-DIG (\"AUX\" COUNTER)\n\t <COND (<EQUAL? ,PRSO ,PLASTER1 ,PLASTER ,WALLS>\n\t\t<PERFORM ,V?MUNG ,PRSO ,PRSI>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,PRSO ,SAND ,GROUND ,HOLE>>\n\t\t<TELL \"You can't dig in that.\" CR>)\n\t       (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<TELL \n\"You dig a small hole, but it quickly fills in with water and sand, almost\nimmediately disappearing.\" CR>)\n\t       (<NOT <GETP ,HERE ,P?CAPACITY>>\n\t\t<TELL \"The ground is too hard here.\" CR>)\n\t       (<PRSI? ,HANDS>\n\t\t<TELL\n\"I suppose you also excavate tunnels with a teaspoon?!\" CR>)\n\t       (<PRSI? ,PICK-AXE>\n\t        <TELL\n\"Let's face it, for digging in the sand, the axe is cute but ineffective.\" CR>)\n\t       (T\n\t\t<SET COUNTER <GETP ,HERE ,P?CAPACITY>>\n\t\t<SET COUNTER <+ .COUNTER 1>>\n\t\t<SETG THIRST <+ ,THIRST 4>>\n\t\t<COND (<AND <G? .COUNTER 5>\n\t\t\t    <NOT <EQUAL? ,HERE ,EX8>>>\n\t\t       <JIGS-UP\n\"The walls of the hole collapse around you, smothering you in the shifting\nsands.\">\n\t\t       <RFATAL>)\n\t\t      (T\n\t\t       <PUTP ,HERE ,P?CAPACITY .COUNTER>\n\t\t       <COND (<AND <EQUAL? .COUNTER 6>\n\t\t\t\t   <EQUAL? ,HERE ,EX8>>\n\t\t\t      <TELL\n\"You've uncovered what could only be the top of a pyramid. After clearing it\naway with your hands, you notice a square opening in the top of it.\" CR>\n\t\t\t      <PUTP ,HERE ,P?CAPACITY 6>\n\t\t\t      <PUTP ,HERE ,P?LDESC\n\"You are in the desert, almost out of sight of the encampment to the west. At\nlast, though, you've found the ancient pyramid. The top of the pyramid is\nclearly exposed and on one of its sides is a square opening.\">\n\t\t\t      <FCLEAR ,ROCK-LOCK ,INVISIBLE>\n\t\t\t      <MOVE ,PYRAMID ,HERE>\n\t\t\t      <SETG SCORE <+ ,SCORE 25>>)\n\t\t\t     (T\n\t\t\t      <TELL <GET ,DIGGER-LTBL .COUNTER> CR>)>)>)>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 1864,
   "endLine": 1876,
   "source": "<ROUTINE V-SMELL ()\n\t <COND (<EQUAL? ,PRSO ,LIQUID>\n\t\t<TELL \n\"It smells like a mixture of gasoline and embalming fluid. Yum Yum.\" CR>)\n\t       (<FLAMING? ,PRSO>\n\t\t<TELL \"Nice way to singe your nostrils!\" CR>)\n\t       (<PRSO? ,SKELETON>\n\t\t<TELL \"It smells quite dead.\" CR>)\n\t       (<PRSO? ,MAP>\n\t\t<TELL \"It smells a little musty.\" CR>)\n\t       (T <TELL \"It smells just like a\">\n\t\t<VOWEL? ,PRSO>\n\t\t<TELL D ,PRSO \".\" CR>)>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 1878,
   "endLine": 1881,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" T)\n\t #DECL ((OBJ1 OBJ2) OBJECT (T) <OR FALSE TABLE>)\n\t <COND (<SET T <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .T <- <PTSIZE .T> 1>>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 1883,
   "endLine": 1890,
   "source": "<ROUTINE V-SWIM ()\n\t <COND (<EQUAL? ,HERE ,RIVER-BANK>\n\t\t<JIGS-UP .CROC-STR>\n\t\t<RFATAL>)\n\t       (<NOT <EQUAL? ,PRSO ,NILE-RIBBAH>>\n\t\t<TELL \"Now that's a cute idea. Maybe I'll try it next century.\"\n\t\t      CR>)\n\t       (T <TELL \"Go jump in a lake!\" CR>)>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "verbs.zil",
   "line": 1892,
   "endLine": 1892,
   "source": "<ROUTINE V-UNTIE () <TELL \"This cannot be tied, so it cannot be untied!\" CR>>"
  },
  "PRE-TIE": {
   "name": "PRE-TIE",
   "file": "verbs.zil",
   "line": 1894,
   "endLine": 1896,
   "source": "<ROUTINE PRE-TIE ()\n\t <COND (<==? ,PRSI ,WINNER>\n\t\t<TELL \"You can't tie it to yourself.\" CR>)>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "verbs.zil",
   "line": 1898,
   "endLine": 1904,
   "source": "<ROUTINE V-TIE ()\n\t <COND (<EQUAL? ,PRSI ,SCARAB>\n\t\t<TELL \"The rope's too clumsy to tie to that.\" CR>)\n\t       (<NOT <EQUAL? ,PRSI ,BEAM>>\n\t\t<TELL \"You can't tie the \" D ,PRSO \" to that.\" CR>)\n\t       (ELSE\n\t\t<TELL \"Don't bother.\" CR>)>>"
  },
  "V-TIE-UP": {
   "name": "V-TIE-UP",
   "file": "verbs.zil",
   "line": 1906,
   "endLine": 1906,
   "source": "<ROUTINE V-TIE-UP () <TELL \"You could certainly never tie it with that!\" CR>>"
  },
  "V-MELT": {
   "name": "V-MELT",
   "file": "verbs.zil",
   "line": 1908,
   "endLine": 1910,
   "source": "<ROUTINE V-MELT () <TELL \"I'm not sure that a\">\n\t <VOWEL? ,PRSO>\n\t <TELL D ,PRSO \" can be melted.\" CR>>"
  },
  "V-MUMBLE": {
   "name": "V-MUMBLE",
   "file": "verbs.zil",
   "line": 1912,
   "endLine": 1914,
   "source": "<ROUTINE V-MUMBLE\n\t ()\n\t <TELL \"You'll have to speak up if you expect me to hear you!\" CR>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 1916,
   "endLine": 1920,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"He's wide awake, or haven't you noticed...\" CR>)\n\t       (ELSE\n\t\t<TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>)>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "verbs.zil",
   "line": 1922,
   "endLine": 1922,
   "source": "<ROUTINE V-ZORK () <TELL \"Who?\" CR>>"
  },
  "MUNG-ROOM": {
   "name": "MUNG-ROOM",
   "file": "verbs.zil",
   "line": 1926,
   "endLine": 1929,
   "source": "<ROUTINE MUNG-ROOM (RM STR)\n\t #DECL ((STR) ZSTRING)\n\t <FSET .RM ,RMUNGBIT>\n\t <PUTP .RM ,P?LDESC .STR>>"
  },
  "V-COMMAND": {
   "name": "V-COMMAND",
   "file": "verbs.zil",
   "line": 1931,
   "endLine": 1935,
   "source": "<ROUTINE V-COMMAND ()\n\t <COND (<FSET? ,PRSO ,VICBIT>\n\t\t<TELL \"The \" D ,PRSO \" pays no attention.\" CR>)\n\t       (ELSE\n\t\t<TELL \"You cannot talk to that!\" CR>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 1937,
   "endLine": 1948,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<EQUAL? ,PRSO ,ALTAR>\n\t\t<PERFORM ,V?BOARD ,ALTAR>\n\t\t<RTRUE>)\n\t       (<OR <FSET? ,PRSO ,VEHBIT>\n\t\t    <PRSO? ,BEAM>>\n\t\t<V-CLIMB-UP ,P?UP T>)\n\t       (<EQUAL? ,PRSO ,ROPE>\n\t\t<PERFORM ,V?TAKE ,ROPE>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't climb onto the \" D ,PRSO \".\" CR>)>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "verbs.zil",
   "line": 1950,
   "endLine": 1969,
   "source": "<ROUTINE V-CLIMB-FOO ()\n\t <COND (<AND <OR <EQUAL? ,PRSO ,ROPE>\n\t\t\t <EQUAL? ,PRSI ,ROPE>>\n\t\t     <IN? ,ROPE ,WINNER>>\n\t\t<TELL \"You can't do that while you're holding the rope.\" CR>\n\t\t<RFATAL>)\n\t       (<EQUAL? ,PRSO ,ALTAR>\n\t\t<PERFORM ,V?BOARD ,PRSO>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,INTDIR>\n\t\t<TELL \"You can't climb a direction!\" CR>\n\t\t<RFATAL>)\n\t       (<AND <NOT <FSET? ,PRSO ,CLIMBBIT>>\n\t\t     <NOT <FSET? ,PRSO ,VEHBIT>>>\n\t\t<TELL \"You can't climb that!\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<V-CLIMB-UP <COND (<EQUAL? ,HERE ,CHAMBER-OF-RA> ,P?DOWN)\n\t\t\t\t  (<EQUAL? ,PRSO ,PLANK> ,P?NORTH)\n\t\t\t\t  (T ,P?UP)> T>)>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 1971,
   "endLine": 2000,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X)\n\t <COND (<AND .OBJ\n\t\t     <ZMEMQ ,W?BEAM\n\t\t\t    <SET X <GETPT ,PRSO ,P?SYNONYM>> <PTSIZE .X>>\n\t\t     >\n\t\t<COND (<AND ,ON-BEAM\n\t\t\t    <IN? ,BEAM ,WEST-END-OF-PASSAGE>>\n\t\t       <TELL \"You're already on the beam.\" CR>)\n\t\t      (<IN? ,BEAM ,WEST-END-OF-PASSAGE>\n\t\t       <TELL \"You are now standing on the beam.\" CR>)\n\t\t      (<AND <FSET? ,BEAM ,TOUCHBIT>\n\t\t\t    <IN? ,BEAM ,HERE>\n\t\t\t    <NOT ,BEAM-PLACED>>\n\t\t       <TELL\n\"You step onto it, see no sense in remaining on it, then step off it.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T <TELL \"Get real. You don't have fly feet.\" CR>\n\t\t       <RTRUE>)>\n\t\t<SETG ON-BEAM T>)\n\t       (<GETPT ,HERE .DIR>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<TELL \"You can't go that way.\" CR>)\n\t       (<AND .OBJ\n\t\t     <ZMEMQ ,W?WALLS\n\t\t\t    <SET X <GETPT ,PRSO ,P?SYNONYM>> <PTSIZE .X>>>\n\t\t<TELL \"Climbing the walls is to no avail.\" CR>)\n\t       \n\t       (ELSE <TELL \"Bizarre!\" CR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 2002,
   "endLine": 2007,
   "source": "<ROUTINE V-CLIMB-DOWN ()\n\t <COND (<AND <EQUAL? ,PRSO ,ROPE ,P?NORTH ,P?DOWN>\n\t\t     <NOT ,LANDING>>\n\t\t<TELL \"It would help if the rope led someplace.\" CR>\n\t\t<RTRUE>)\n\t       (ELSE <V-CLIMB-UP ,P?DOWN>)>>"
  },
  "V-SEND": {
   "name": "V-SEND",
   "file": "verbs.zil",
   "line": 2009,
   "endLine": 2012,
   "source": "<ROUTINE V-SEND ()\n\t <COND (<FSET? ,PRSO ,VILLAIN>\n\t\t<TELL \"Why would you send for the \" D ,PRSO \"?\" CR>)\n\t       (ELSE <TELL \"That doesn't make sends.\" CR>)>>"
  },
  "V-WIND": {
   "name": "V-WIND",
   "file": "verbs.zil",
   "line": 2014,
   "endLine": 2017,
   "source": "<ROUTINE V-WIND ()\n\t <TELL \"You cannot wind up a\">\n\t <VOWEL? ,PRSO>\n\t <TELL D ,PRSO \".\" CR>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 2019,
   "endLine": 2033,
   "source": "<ROUTINE V-COUNT (\"AUX\" OBJS CNT)\n\t <COND (<==? ,PRSO ,STONES>\n\t\t<TELL \n\"There are a lot of stones in the pyramid (about 90,000,000 cubic feet).\" CR>)\n\t       (<OR <EQUAL? ,PRSO ,DRACULA ,BLESSINGS ,FINGER>\n\t\t    <EQUAL? ,PRSO ,BASIE>>\n\t\t<TELL \"What a maroon! What a cahd!\" CR>)\n\t       (T\n\t\t<TELL \"You have \">\n\t\t<COND (<==? ,PRSO ,MATCHES ,MANY-MATCHES>\n\t\t       <SET CNT <-  ,MATCH-COUNT 1>>\n\t\t       <TELL N .CNT \" match\">\n\t\t       <COND (<NOT <1? .CNT>> <TELL \"es.\">) (ELSE <TELL \".\">)>\n\t\t       <CRLF>)\n\t\t      (ELSE <TELL \"a weird sense of counting!\" CR>)>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 2035,
   "endLine": 2036,
   "source": "<ROUTINE V-PUT-UNDER ()\n         <TELL \"You can't do that.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 2038,
   "endLine": 2044,
   "source": "<ROUTINE V-PLAY ()\n         <COND (<FSET? ,PRSO ,VILLAIN>\n\t        <TELL\n\"You are so engrossed in the role of the \" D ,PRSO \" that\nyou kill yourself, just as he would have done!\" CR>\n\t        <JIGS-UP \"\">)\n\t       (T <TELL \"How peculiar!\" CR>)>>"
  },
  "V-MAKE": {
   "name": "V-MAKE",
   "file": "verbs.zil",
   "line": 2046,
   "endLine": 2047,
   "source": "<ROUTINE V-MAKE ()\n    \t<TELL \"You can't do that.\" CR>>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "verbs.zil",
   "line": 2049,
   "endLine": 2050,
   "source": "<ROUTINE V-ENTER ()\n\t <DO-WALK ,P?IN>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "verbs.zil",
   "line": 2052,
   "endLine": 2053,
   "source": "<ROUTINE V-EXIT ()\n\t <DO-WALK ,P?OUT>>"
  },
  "V-CROSS": {
   "name": "V-CROSS",
   "file": "verbs.zil",
   "line": 2055,
   "endLine": 2056,
   "source": "<ROUTINE V-CROSS ()\n\t <TELL \"You can't cross that!\" CR>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 2058,
   "endLine": 2059,
   "source": "<ROUTINE V-SEARCH ()\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 2061,
   "endLine": 2083,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,HANDS>\n\t\t<TELL\n\"Within six feet of your head, assuming you haven't left that somewhere.\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"Why don't you try finding it yourself?\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<IN? ,PRSO ,ENDLESS-DESERT>\n\t\t<TELL \"With all this sand around here? Give me a break!\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <==? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,VILLAIN>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's \">\n\t\t<COND (<FSET? .L ,SURFACEBIT>\n\t\t       <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<TELL \" the \" D .L \".\" CR>)\n\t       (ELSE\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 2085,
   "endLine": 2096,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,VICBIT>\n\t\t<SETG WINNER ,PRSO>\n\t\t<SETG HERE <LOC ,WINNER>>)\n\t       (<EQUAL? ,PRSO ,ME ,WINNER>\n\t\t<TELL \"Talking to yourself is diverting, but unnecessary.\" CR>\n\t\t<RFATAL>)\n\t       (T\n\t\t<TELL \"You can't talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 2098,
   "endLine": 2102,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody seems to be awaiting your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 2104,
   "endLine": 2108,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is hardly likely that the \" D ,PRSO \" is interested.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-IS-IN": {
   "name": "V-IS-IN",
   "file": "verbs.zil",
   "line": 2110,
   "endLine": 2117,
   "source": "<ROUTINE V-IS-IN ()\n\t <COND (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"Yes, it is \">\n\t\t<COND (<FSET? ,PRSI ,SURFACEBIT>\n\t\t       <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<TELL \" the \" D ,PRSI \".\" CR>)\n\t       (T <TELL \"No, it isn't.\" CR>)>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 2119,
   "endLine": 2120,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "verbs.zil",
   "line": 2122,
   "endLine": 2123,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"An ugly idea from an ugly human.\" CR>>"
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "verbs.zil",
   "line": 2125,
   "endLine": 2130,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W> <RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<FSET? .W .WHAT> <RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RETURN <>>)>>>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 2132,
   "endLine": 2142,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t <COND (<SET V <FIND-IN ,HERE ,VICBIT>>\n\t\t<TELL \"You must address the \" D .V \" directly.\" CR>)\n\t       (<==? <GET ,P-LEXV ,P-CONT> ,W?HELLO>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<TELL\n\"Talking to yourself is said to be a sign of impending mental collapse.\" CR>)>>"
  },
  "V-INCANT": {
   "name": "V-INCANT",
   "file": "verbs.zil",
   "line": 2144,
   "endLine": 2149,
   "source": "<ROUTINE V-INCANT ()\n\t <TELL\n\"The incantation echoes back faintly, but nothing else happens.\" CR>\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-CONT <>>\n\t <RTRUE>>"
  },
  "V-SPIN": {
   "name": "V-SPIN",
   "file": "verbs.zil",
   "line": 2151,
   "endLine": 2152,
   "source": "<ROUTINE V-SPIN ()\n\t <TELL \"You can't spin that!\" CR>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 2154,
   "endLine": 2167,
   "source": "<ROUTINE V-THROUGH (\"AUX\" M)\n\t<COND (<FSET? ,PRSO ,DOORBIT>\n\t       <DO-WALK <OTHER-SIDE ,PRSO>>\n\t       <RTRUE>)\n\t      (<FSET? ,PRSO ,VEHBIT>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t       <TELL \"You hit your head against the \"\n\t\t\t    D ,PRSO\n\t\t\t    \" as you attempt this feat.\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (ELSE <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "verbs.zil",
   "line": 2181,
   "endLine": 2184,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<NOT <FSET? ,PRSO ,WEARBIT>>\n\t\t<TELL \"You can't wear the \" D ,PRSO \".\" CR>)\n\t       (T <PERFORM ,V?TAKE ,PRSO> <RTRUE>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "verbs.zil",
   "line": 2186,
   "endLine": 2205,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <COND (<NOT <EQUAL? ,PRSI ,BOAT ,ALTAR ,DECK>>\n\t\t<TELL \"You can't throw anything off of that!\" CR>)\n\t       (<PRSI? ,BOAT ,DECK>\n\t\t<COND (<NOT <EQUAL? ,HERE ,BARGE-CENTER>>\n\t\t       <TELL \"From where you are now? Get serious.\" CR>\n\t\t       <RTRUE>)\n\t\t      (T <TELL\n\"Thrown. You hear it land in the darkness to the south.\" CR> \n\t\t       <MOVE ,PRSO ,BARGE-ENTRANCE>\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <FCLEAR ,PRSO ,NDESCBIT>\n\t\t       <RTRUE>)>)\n\t       (<PRSI? ,ALTAR>\n\t\t<COND (<NOT <IN? ,WINNER ,ALTAR>>\n\t\t       <TELL\n\"Don't you think you should be standing on the altar first?\" CR>)\n\t\t      (T\n\t\t       <PERFORM ,V?THROW ,PRSO>\n\t\t       <RTRUE>)>)>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 2207,
   "endLine": 2210,
   "source": "<ROUTINE V-$VERIFY ()\n\t <TELL \"Verifying game...\" CR>\n\t <COND (<VERIFY> <TELL \"Game correct. Don't panic yet.\" CR>)\n\t       (T <TELL CR \"** Game File Failure ** (Panic)\" CR>)>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 2212,
   "endLine": 2217,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"You are already standing, I think.\" CR>)>>"
  },
  "V-PUT-BEHIND": {
   "name": "V-PUT-BEHIND",
   "file": "verbs.zil",
   "line": 2219,
   "endLine": 2220,
   "source": "<ROUTINE V-PUT-BEHIND ()\n\t <TELL \"That hiding place is too obvious.\" CR>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 2222,
   "endLine": 2224,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 2226,
   "endLine": 2238,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<AND <EQUAL? ,PRSO ,PLANK>\n\t\t     <IN? ,PRSO ,HERE>>\n\t\t<TELL \"Yo ho.\" CR>\n\t\t<COND (<EQUAL? ,HERE ,BARGE-ENTRANCE>\n\t\t       <DO-WALK ,P?UP>\n\t\t       <RTRUE>)\n\t\t      (T <DO-WALK ,P?DOWN>)>\n\t\t<RTRUE>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T <TELL \"You should supply a direction!\" CR>)>>"
  },
  "OTHER-SIDE": {
   "name": "OTHER-SIDE",
   "file": "verbs.zil",
   "line": 2242,
   "endLine": 2250,
   "source": "<ROUTINE OTHER-SIDE (DOBJ \"AUX\" (P 0) T)\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<RETURN <>>)\n\t\t       (ELSE\n\t\t\t<SET T <GETPT ,HERE .P>>\n\t\t\t<COND (<AND <EQUAL? <PTSIZE .T> ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .T ,DEXITOBJ> .DOBJ>>\n\t\t\t       <RETURN .P>)>)>>>"
  },
  "V-DRINK-FROM": {
   "name": "V-DRINK-FROM",
   "file": "verbs.zil",
   "line": 2252,
   "endLine": 2290,
   "source": "<ROUTINE V-DRINK-FROM (\"AUX\" OBJ)\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<EQUAL? ,PRSO ,NILE-RIBBAH>\n\t\t       <SET OBJ ,GLOBAL-WATER>)\n\t\t      (<EQUAL? ,PRSO ,CANTEEN>\n\t\t       <SET OBJ ,WATER>)\n\t\t      (<EQUAL? ,PRSO ,OIL-JAR>\n\t\t       <SET OBJ ,LIQUID>)\n\t\t      (T\n\t\t       <COND (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t\t      <TELL \"How peculiar!\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<NOT <FIRST? ,PRSO>>\n\t\t\t      <TELL \"There's nothing to drink in the \" D ,PRSO\n\t\t\t\t    \".\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <SET OBJ <FIRST? ,PRSO>>\n\t\t\t      <COND (<NOT <FSET? .OBJ ,DRINKBIT>>\n\t\t\t\t     <TELL\n\"I don't think there's anything worth drinking in the \" D ,PRSO \".\" CR>\n\t\t\t\t     <RTRUE>)>)>)>\n\t\t<PERFORM ,V?DRINK .OBJ>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSO ,GLOBAL-WATER ,WATER>\n\t\t     <EQUAL? ,PRSI ,NILE-RIBBAH>>\n\t\t<COND (<NOT <EQUAL? ,HERE ,RIVER-BANK>>\n\t\t       <TELL \"I see no \" D ,PRSO \" here.\" CR>\n\t\t       <RTRUE>)\n\t\t      (ELSE\n\t\t       <PERFORM ,V?DRINK ,PRSO>\n\t\t       <RTRUE>)>)\n\t       (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"Better open the \" D ,PRSI \" first.\" CR>)\n\t       (<NOT <IN? ,PRSO ,PRSI>>\n\t\t<TELL \"I can't see any \" D ,PRSO \" in the \" D ,PRSI \".\" CR>)\n\t       (T\n\t\t<PERFORM ,V?DRINK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-LEAN-ON": {
   "name": "V-LEAN-ON",
   "file": "verbs.zil",
   "line": 2292,
   "endLine": 2293,
   "source": "<ROUTINE V-LEAN-ON ()\n\t <TELL \"Are you so very tired, then?\" CR>>"
  },
  "V-DIP-IN": {
   "name": "V-DIP-IN",
   "file": "verbs.zil",
   "line": 2295,
   "endLine": 2311,
   "source": "<ROUTINE V-DIP-IN ()\n\t <COND (<AND <EQUAL? ,PRSI ,GLOBAL-WATER ,NILE-RIBBAH>\n\t\t     <EQUAL? ,PRSO ,CANTEEN>>\n\t\t<PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,PRSI ,OIL-JAR ,LIQUID>>\n\t\t<TELL \"You can't dip the \" D ,PRSO \" in that!\" CR>)\n\t       (<OR <FLAMING? ,PRSO>\n\t\t    <FLAMING? ,PRSI>>\n\t\t<JIGS-UP\n\"Poof. There's no need to get burned up about it though...\">)\n\t       (<NOT <EQUAL? ,PRSO ,TORCH>>\n\t\t<TELL \"Huh? Dip the \" D ,PRSO \"!?\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PERFORM ,V?POUR-ON ,OIL-JAR ,TORCH>\n\t\t<RTRUE>)>>"
  },
  "V-PUT-AGAINST": {
   "name": "V-PUT-AGAINST",
   "file": "verbs.zil",
   "line": 2313,
   "endLine": 2314,
   "source": "<ROUTINE V-PUT-AGAINST ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "BREAK-SEAL": {
   "name": "BREAK-SEAL",
   "file": "verbs.zil",
   "line": 2316,
   "endLine": 2335,
   "source": "<ROUTINE BREAK-SEAL ()\n\t <COND (<AND <NOT <EQUAL? ,PRSI ,PICK-AXE>>\n\t\t     <NOT <IN? ,WINNER ,PICK-AXE>>>\n\t\t<RFALSE>)>\n\t <COND (<EQUAL? ,BEAM-PLACED 4>\n\t\t <TELL\n\"You manage to destroy the seal. You glance to the right and see fine sand\nrunning from a crack in the stone. The beam creaks and groans under tremendous\npressure as the 3 ton stone block above your head starts to lower.  The beam\nholds the weight, saving you from a flattening fate.\"CR>\n                <SETG ANTE-SEAL <>>\n\t\t<THIS-IS-IT ,NORTH-ANTE-DOOR>\n\t\t<RTRUE>)\n\t       (<OR <NOT <IN? ,BEAM ,NORTH-ANTECHAMBER>>\n\t\t    <NOT ,BEAM-PLACED>>\n\t\t<JIGS-UP \n\"You manage to destroy the seal, but as you stand in the doorway, you hear the\ndistinct sound of grinding stone. You glance to your right and see fine sand\nrunning from a crack in the wall. You're totally unaware of the 3 tons of\ncarved stone block falling onto your head from directly above.\">)>>"
  },
  "V-TASTE": {
   "name": "V-TASTE",
   "file": "verbs.zil",
   "line": 2337,
   "endLine": 2340,
   "source": "<ROUTINE V-TASTE ()\n\t <TELL \"It tastes just like a\">\n\t <VOWEL? ,PRSO>\n\t <TELL D ,PRSO \"!\" CR>>"
  },
  "V-ROLL": {
   "name": "V-ROLL",
   "file": "verbs.zil",
   "line": 2342,
   "endLine": 2346,
   "source": "<ROUTINE V-ROLL ()\n\t <COND (<NOT <EQUAL? ,PRSO ,HUGE-STATUE>>\n\t\t<TELL \"Why bother?\" CR>)\n\t       (T\n\t\t<TELL \"The statue bumps into a wall.\" CR>)>>"
  },
  "V-PUSH-THROUGH": {
   "name": "V-PUSH-THROUGH",
   "file": "verbs.zil",
   "line": 2348,
   "endLine": 2350,
   "source": "<ROUTINE V-PUSH-THROUGH ()\n\t <TELL\n\"Pushing the \" D ,PRSO \" in that way isn't particularly helpful.\" CR>>"
  },
  "HOW?": {
   "name": "HOW?",
   "file": "verbs.zil",
   "line": 2352,
   "endLine": 2355,
   "source": "<ROUTINE HOW? (OBJ)\n\t <TELL \"I don't know how to do that to a\">\n\t <VOWEL? .OBJ>\n\t <TELL D .OBJ \".\" CR>>"
  },
  "VOWEL?": {
   "name": "VOWEL?",
   "file": "verbs.zil",
   "line": 2357,
   "endLine": 2360,
   "source": "<ROUTINE VOWEL? (OBJ)\n\t <COND (<FSET? .OBJ ,VOWELBIT>\n\t\t<TELL \"n\">)>\n\t <TELL \" \">>"
  },
  "HUH?": {
   "name": "HUH?",
   "file": "verbs.zil",
   "line": 2362,
   "endLine": 2365,
   "source": "<ROUTINE HUH? (\"OPTIONAL\" (RARG <>))\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<HOW? ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-SMOKE": {
   "name": "V-SMOKE",
   "file": "verbs.zil",
   "line": 2367,
   "endLine": 2368,
   "source": "<ROUTINE V-SMOKE ()\n\t <TELL \"Smoking is bad for your health.\" CR>>"
  },
  "V-UNFOLD": {
   "name": "V-UNFOLD",
   "file": "verbs.zil",
   "line": 2370,
   "endLine": 2375,
   "source": "<ROUTINE V-UNFOLD ()\n\t <COND (<NOT <EQUAL? ,PRSO ,MAP>>\n\t\t<HOW? ,PRSO>)\n\t       (T\n\t\t<PERFORM ,V?OPEN ,MAP>\n\t\t<RTRUE>)>>"
  },
  "V-FOLD": {
   "name": "V-FOLD",
   "file": "verbs.zil",
   "line": 2377,
   "endLine": 2386,
   "source": "<ROUTINE V-FOLD ()\n\t <COND (<NOT <EQUAL? ,PRSO ,MAP>>\n\t\t<HOW? ,PRSO>)\n\t       (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t<TELL \"It's already folded up.\" CR>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Okay. The map has been folded.\" CR>\n\t\t<FCLEAR ,MAP ,OPENBIT>\n\t\t<RTRUE>)>>"
  },
  "V-HOLE-DIG": {
   "name": "V-HOLE-DIG",
   "file": "verbs.zil",
   "line": 2396,
   "endLine": 2406,
   "source": "<ROUTINE V-HOLE-DIG ()\n\t <COND (<NOT <EQUAL? ,PRSO ,HOLE>>\n\t\t<TELL \"I don't know how to dig a\">\n\t\t<VOWEL? ,PRSO>\n\t\t<TELL D ,PRSO \".\" CR>)\n\t       (<EQUAL? ,PRSI ,SAND>\n\t\t<PERFORM ,V?DIG ,SAND>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<TELL \"I can't dig in the \" D ,PRSI \".\" CR>\n\t\t<RTRUE>)>>"
  },
  "V-DIG-WITH": {
   "name": "V-DIG-WITH",
   "file": "verbs.zil",
   "line": 2408,
   "endLine": 2410,
   "source": "<ROUTINE V-DIG-WITH ()\n\t <PERFORM ,V?DIG ,SAND ,PRSO>\n\t <RTRUE>>"
  },
  "V-TURN-OVER": {
   "name": "V-TURN-OVER",
   "file": "verbs.zil",
   "line": 2412,
   "endLine": 2418,
   "source": "<ROUTINE V-TURN-OVER ()\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"Okay. There's nothing of interest there.\" CR>)\n\t       (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"You'd better pick it up first.\" CR>)\n\t       (ELSE\n\t\t<TELL \"Good luck!\" CR>)>>"
  },
  "V-READ-INSIDE": {
   "name": "V-READ-INSIDE",
   "file": "verbs.zil",
   "line": 2420,
   "endLine": 2421,
   "source": "<ROUTINE V-READ-INSIDE ()\n\t <TELL \"There's nothing to read there.\" CR>>"
  },
  "PRE-REACH-IN": {
   "name": "PRE-REACH-IN",
   "file": "verbs.zil",
   "line": 2423,
   "endLine": 2430,
   "source": "<ROUTINE PRE-REACH-IN ()\n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t<TELL \"You can't reach into that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>)>>"
  },
  "V-REACH-IN": {
   "name": "V-REACH-IN",
   "file": "verbs.zil",
   "line": 2432,
   "endLine": 2433,
   "source": "<ROUTINE V-REACH-IN ()\n\t <PERFORM ,V?LOOK-INSIDE ,PRSO>>"
  },
  "V-CLEAN": {
   "name": "V-CLEAN",
   "file": "verbs.zil",
   "line": 2435,
   "endLine": 2437,
   "source": "<ROUTINE V-CLEAN ()\n\t <TELL\n\"Cleanliness may be next to godliness, but there are limits.\" CR>>"
  },
  "PRE-PULL-UP": {
   "name": "PRE-PULL-UP",
   "file": "verbs.zil",
   "line": 2439,
   "endLine": 2442,
   "source": "<ROUTINE PRE-PULL-UP ()\n\t <COND (<NOT <EQUAL? ,PRSO ,BEAM>>\n\t\t<PERFORM ,V?MOVE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-PULL-UP": {
   "name": "V-PULL-UP",
   "file": "verbs.zil",
   "line": 2444,
   "endLine": 2450,
   "source": "<ROUTINE V-PULL-UP ()\n\t <COND (<FSET? ,BEAM ,TOUCHBIT>\n\t\t<TELL \"Why bother?\" CR>)\n\t       (<NOT <EQUAL? ,HERE ,BARGE-CENTER>>\n\t\t<TELL \"That's a little tough to do from here.\" CR>)\n\t       (ELSE\n\t\t<PERFORM ,V?PUSH-THROUGH ,BEAM ,MAST-HOLE>)>>"
  },
  "V-THROW-DOWN": {
   "name": "V-THROW-DOWN",
   "file": "verbs.zil",
   "line": 2452,
   "endLine": 2473,
   "source": "<ROUTINE V-THROW-DOWN (\"AUX\" FOO)\n\t <COND (<STAIRWAY-CHECK?>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? ,PRSO ,ROPE>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? ,PRSI ,INTDIR>\n\t\t     <EQUAL? ,P-DIRECTION ,P?NORTH>>\n\t\t<SET FOO ,NORTH-STAIRS>)\n\t       (<AND <EQUAL? ,PRSI ,INTDIR>\n\t\t     <EQUAL? ,P-DIRECTION ,P?SOUTH>>\n\t\t<SET FOO ,SOUTH-STAIRS>)\n\t       (<AND <EQUAL? ,PRSI ,INTDIR>\n\t\t     <EQUAL? ,P-DIRECTION ,P?EAST>>\n\t\t<SET FOO ,EAST-STAIRS>)\n\t       (<AND <EQUAL? ,PRSI ,INTDIR>\n\t\t     <EQUAL? ,P-DIRECTION ,P?WEST>>\n\t\t<SET FOO ,WEST-STAIRS>)\n\t       (ELSE\n\t\t<SET FOO ,GROUND>)>\n\t <PERFORM ,V?PUT ,PRSO .FOO>\n\t <RTRUE>>"
  },
  "V-TIME": {
   "name": "V-TIME",
   "file": "verbs.zil",
   "line": 2475,
   "endLine": 2476,
   "source": "<ROUTINE V-TIME ()\n\t <TELL \"Tickity tockity, sprickity sprockety.\" CR>>"
  },
  "PRE-COMPARE": {
   "name": "PRE-COMPARE",
   "file": "verbs.zil",
   "line": 2478,
   "endLine": 2491,
   "source": "<ROUTINE PRE-COMPARE (\"AUX\" (FLG <>))\n\t <COND (<PRSO? ,NOT-HERE-OBJECT>\n\t\t<RFALSE>)\n\t       (<NOT <GETP ,PRSO ,P?MAP>>\n\t\t<SET FLG T>)\n\t       (<NOT <EQUAL? <GETP ,PRSO ,P?MAP>\n\t\t\t     <GETP ,PRSI ,P?MAP>>>\n\t\t<SET FLG T>)>\n\t <COND (.FLG\n\t\t<TELL \"Comparisons between the \" D ,PRSO \" and the \" D ,PRSI\n\t\t      \" would not really help.\" CR>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<RFALSE>)>>"
  },
  "V-COMPARE": {
   "name": "V-COMPARE",
   "file": "verbs.zil",
   "line": 2493,
   "endLine": 2510,
   "source": "<ROUTINE V-COMPARE ()\n\t <COND (<PRSO? ,ROCK-LOCK ,STONE-KEY>\n\t\t<TELL \n\"It looks as if the small cube would fit into the opening almost exactly.\" CR>)\n\t       (<EQUAL? <GETP ,PRSO ,P?MAP> 1> ;\"CUPS\"\n\t\t<TELL\n\"The two chalices are of exactly the same size and dimensions, though empty\nthey have different weights.\" CR>)\n\t       (<AND <EQUAL? <GETP ,PRSO ,P?MAP> 3 4> ;\"Book & L AREA\"\n\t\t     <EQUAL? <GETP ,PRSO ,P?MAP> <GETP ,PRSI ,P?MAP>>>\n\t\t<TELL \"Looks as if the area is just big enough to hold it.\" CR>)\n\t       (<AND <EQUAL? <GETP ,PRSO ,P?MAP> 3 4> ;\"Book & L AREA\"\n\t\t     <NOT <EQUAL? <GETP ,PRSO ,P?MAP> <GETP ,PRSI ,P?MAP>>>>\n\t\t<TELL \"Well, the match up between them wasn't made in heaven.\"\n\t\t      CR>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSO \" and the \" D ,PRSI \" are the same size.\"\n\t\t      CR>)>>"
  },
  "V-FOO-COMPARE": {
   "name": "V-FOO-COMPARE",
   "file": "verbs.zil",
   "line": 2512,
   "endLine": 2519,
   "source": "<ROUTINE V-FOO-COMPARE ()\n\t <COND (<L? <GET ,P-PRSO 0> 2>\n\t\t<TELL \"You have to compare the \" D ,PRSO \" to something else.\"\n\t\t      CR>\n\t\t<RTRUE>)\n\t       (T\n\t        <PERFORM ,V?COMPARE <GET ,P-PRSO 1> <GET ,P-PRSO 2>>\n\t\t<RFATAL>)>>"
  },
  "V-WEIGH": {
   "name": "V-WEIGH",
   "file": "verbs.zil",
   "line": 2521,
   "endLine": 2525,
   "source": "<ROUTINE V-WEIGH ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Tough to do without a scale.\" CR>)\n\t       (T\n\t\t<TELL \"Now that's bizarre!\" CR>)>>"
  },
  "V-FILL-OUT": {
   "name": "V-FILL-OUT",
   "file": "verbs.zil",
   "line": 2527,
   "endLine": 2532,
   "source": "<ROUTINE V-FILL-OUT ()\n\t <COND (<NOT <EQUAL? ,PRSO ,MANUAL>>\n\t\t<TELL \"There's no need for filling that out.\" CR>)\n\t       (T\n\t\t<TELL\n\"Okay. Find me a pen or a pencil and I'll do the best I can.\" CR>)>>"
  },
  "V-PLASTER-REMOVE": {
   "name": "V-PLASTER-REMOVE",
   "file": "verbs.zil",
   "line": 2534,
   "endLine": 2541,
   "source": "<ROUTINE V-PLASTER-REMOVE ()\n\t <COND (<AND <EQUAL? ,PRSO ,PLASTER1 ,PLASTER ,N-ANTE-SEAL>\n\t\t     <OR <EQUAL? ,PRSI ,DOORWAY ,ANNEX-DOOR ,WALLS>\n\t\t\t <PRSI? ,NORTH-ANTE-DOOR ,INNER-DOOR>>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<PERFORM ,V?CLEAN ,PRSO>)>>"
  },
  "V-CHASTISE": {
   "name": "V-CHASTISE",
   "file": "verbs.zil",
   "line": 2543,
   "endLine": 2547,
   "source": "<ROUTINE V-CHASTISE ()\n\t <TELL \n\"Please be more specific. LOOKing AT, BEHIND, UNDER, THROUGH, INSIDE, ON, DOWN,\nFOR, or any other method of LOOKing mean different things to me. Please\nspecify which preposition you'd like to use next time, like LOOK AT THE \" D ,PRSO \", or LOOK INSIDE THE \" D ,PRSO \".\" CR>>"
  },
  "V-LOOK-UP": {
   "name": "V-LOOK-UP",
   "file": "verbs.zil",
   "line": 2549,
   "endLine": 2569,
   "source": "<ROUTINE V-LOOK-UP ()\n\t <COND (<AND <L? ,MOVES 8>\n\t\t     <NOT <IN-A-TENT?>>>\n\t\t<TELL \"You see a pretty plane. Oh boy!\" CR>)\n\t       (<EQUAL? <LOC ,WINNER> ,COT>\n\t\t<MOVE ,WINNER ,HERE>\n\t\t<PERFORM ,V?LOOK-UP>\n\t\t<MOVE ,WINNER ,COT>\n\t\t<RTRUE>)\n\t       (<IN-A-TENT?>\n\t\t<TELL \"You see canvas. What else?\" CR>)\n\t       (<OR <GETP ,HERE ,P?MAP>\n\t\t    <EQUAL? ,HERE ,CHAMBER-OF-RA>>\n\t\t<TELL \"You see a blue sky with wisps of billowy clouds.\" CR>)\n\t       (<OR <EQUAL? ,HERE ,BELOW-MAST ,BELOW-DECK ,AFT-CABIN>\n\t\t    <EQUAL? ,HERE ,FORE-CABIN>>\n\t\t<TELL \"You see wood. What else?\" CR>)\n\t       (<EQUAL? ,HERE ,TEMPLE-ENTER>\n\t\t<TELL \"You see inky blackness.\" CR>)\n\t       (T\n\t\t<TELL \"You see stones. What else?\" CR>)>>"
  },
  "V-HELP": {
   "name": "V-HELP",
   "file": "verbs.zil",
   "line": 2571,
   "endLine": 2579,
   "source": "<ROUTINE V-HELP ()\n\t <COND (,PRSO\n\t\t<COND (<NOT <EQUAL? ,PRSO ,WINNER>>\n\t\t       <TELL \"The \" D ,PRSO \" doesn't need any help.\" CR>\n\t\t       <RTRUE>)>)>\n\t <TELL\n\"You got yourself into this -- now get yourself out of it.|\n[If you really need help, you can order an InvisiClues Hint Booklet\nand a complete map by using the order form that came in your package.]\" CR>>"
  },
  "V-STAND-UNDER": {
   "name": "V-STAND-UNDER",
   "file": "verbs.zil",
   "line": 2581,
   "endLine": 2589,
   "source": "<ROUTINE V-STAND-UNDER ()\n\t <COND (<AND <EQUAL? ,PRSO ,CRATE ,PLANE ,PARACHUTE>\n\t\t     <IN? ,PRSO ,GLOBAL-OBJECTS>>\n\t\t<COND (<NOT <IN-A-TENT?>>\n\t\t       <TELL \"It looks like that's just where you are.\" CR>)\n\t\t      (T\n\t\t       <TELL \"Better get out of the tent first.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't stand under that!\" CR>)>>"
  },
  "V-SLEEP": {
   "name": "V-SLEEP",
   "file": "verbs.zil",
   "line": 2591,
   "endLine": 2603,
   "source": "<ROUTINE V-SLEEP ()\n\t <COND (<IN? ,WINNER ,COT>\n\t\t<TELL \n\"You close your eyes, but your mind is too active to let you sleep.\" CR>)\n\t       (<IN? ,COT ,HERE>\n\t\t<MOVE ,WINNER ,COT>\n\t\t<TELL \"You get into the cot and try to get comfy. \">\n\t\t<V-SLEEP>\n\t\t<RTRUE>)\n\t       (,PRSO\n\t\t<TELL \"That doesn't sound too comfortable to me.\" CR>)\n\t       (T\n\t\t<TELL \"Better find a good place to lie down.\" CR>)>>"
  },
  "V-FILL-IN": {
   "name": "V-FILL-IN",
   "file": "verbs.zil",
   "line": 2605,
   "endLine": 2612,
   "source": "<ROUTINE V-FILL-IN ()\n\t <COND (<NOT <EQUAL? ,PRSO ,HOLE ,MANUAL>>\n\t\t<TELL \"I don't know how to fill in the \" D ,PRSO \".\" CR>)\n\t       (<PRSO? ,HOLE>\n\t\t<TELL \"Let time and Mother Nature take care of that.\" CR>)\n\t       (T\n\t\t<PERFORM ,V?FILL-OUT ,MANUAL>\n\t\t<RTRUE>)>>"
  },
  "V-WET": {
   "name": "V-WET",
   "file": "verbs.zil",
   "line": 2614,
   "endLine": 2616,
   "source": "<ROUTINE V-WET ()\n\t  <PERFORM ,V?POUR-ON ,PRSI ,PRSO>\n\t  <RTRUE>>"
  },
  "V-SIT-ON": {
   "name": "V-SIT-ON",
   "file": "verbs.zil",
   "line": 2618,
   "endLine": 2635,
   "source": "<ROUTINE V-SIT-ON ()\n\t <COND (<EQUAL? ,PRSO ,CRATE>\n\t\t<TELL\n\"You easily weigh enough to make the crate's life-cycle far shorter than it\nwould have liked. Needless to say, after having been crushed flat by your\nheartless attempt, it decides to move on, find what the next life-cycle has in\nstore for it, and vanishes into the mystical unknown.\" CR>\n\t\t<REMOVE ,CRATE>\n\t\t<SETG P-IT-LOC <>>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<PERFORM ,V?CLIMB-ON ,PRSO>\n\t\t<RTRUE>)\n\t       \n\t       (<EQUAL? ,PRSO ,GROUND ,SAND ,DECK>\n\t\t<TELL \"No sitting down on the job, now.\" CR>)\n\t       (T\n\t\t<TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "TBL-TO-INSIDE": {
   "name": "TBL-TO-INSIDE",
   "file": "verbs.zil",
   "line": 2637,
   "endLine": 2659,
   "source": "<ROUTINE TBL-TO-INSIDE (OBJ TBL \"OPTIONAL\" STR \"AUX\" (OFFS 0) MAX)\n\t <COND (<NOT <FSET? .OBJ ,SURFACEBIT>>\n\t\t<TELL \"The \" D .OBJ \" is already open.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<FIRST? .OBJ>\n\t\t<OBJS-SLIDE-OFF .OBJ>)>\n\t <SET MAX <GET .TBL 0>>\n\t <COND (<NOT .STR>\n\t\t<TELL \"Opened.\">)\n\t       (T <TELL .STR>)>\n\t <FCLEAR .OBJ ,SURFACEBIT>\n\t <REPEAT ()\n\t\t <SET OFFS <+ .OFFS 1>>\n\t\t <COND (<G? .OFFS .MAX>\n\t\t\t<RETURN>)\n\t\t       (<NOT <EQUAL? <GET .TBL .OFFS> 0>>\n\t\t\t<MOVE <GET .TBL .OFFS> .OBJ>\n\t\t\t<PUT .TBL .OFFS 0>)>>\n\t <COND (<FIRST? .OBJ>\n\t\t<TELL \" Opening the \" D .OBJ \" reveals \">\n\t\t<PRINT-CONTENTS .OBJ>\n\t\t<TELL \".\">)>\n\t <CRLF>>"
  },
  "INSIDE-OBJ-TO": {
   "name": "INSIDE-OBJ-TO",
   "file": "verbs.zil",
   "line": 2661,
   "endLine": 2681,
   "source": "<ROUTINE INSIDE-OBJ-TO (TBL OBJ \"AUX\" (OFFS 0) F N)\n\t <COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t<TELL \"The \" D .OBJ \" is already closed.\" CR>\n\t\t<RTRUE>)>\n\t <FSET .OBJ ,SURFACEBIT>\n\t <TELL \"Closed.\" CR>\n\t <COND (<NOT <FIRST? .OBJ>>\n\t\t<RTRUE>)>\n\t <SET F <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET N .F>\n\t\t\t<SET F <NEXT? .N>>\n\t\t\t<REMOVE .N>\n\t\t\t<REPEAT ()\n\t\t\t\t<SET OFFS <+ .OFFS 1>>\n\t\t\t\t<COND (<EQUAL? <GET .TBL .OFFS> 0>\n\t\t\t\t       <PUT .TBL .OFFS .N>\n\t\t\t\t       <RETURN>)>>)>>>"
  },
  "OBJS-SLIDE-OFF": {
   "name": "OBJS-SLIDE-OFF",
   "file": "verbs.zil",
   "line": 2683,
   "endLine": 2696,
   "source": "<ROUTINE OBJS-SLIDE-OFF (OBJ \"AUX\" F N THERE)\n\t <SET THERE <LOC .OBJ>>\n\t <COND (<EQUAL? .THERE ,WINNER>\n\t\t<SET THERE ,HERE>)>\n\t <SET F <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET N .F>\n\t\t\t<SET F <NEXT? .N>>\n\t\t\t<MOVE .N .THERE>)>>\n\t <TELL \"Everything on the \" D .OBJ \" slides off its top.\" CR>\n\t <CRLF>>"
  },
  "V-JUMP-ROPE": {
   "name": "V-JUMP-ROPE",
   "file": "verbs.zil",
   "line": 2698,
   "endLine": 2702,
   "source": "<ROUTINE V-JUMP-ROPE ()\n\t <COND (<NOT <EQUAL? ,PRSO ,ROPE>>\n\t\t<TELL \"I can jump rope, and that's about all.\" CR>)\n\t       (T\n\t\t<TELL \"Well, it takes all kinds of weirdos...\" CR>)>>"
  },
  "EMPTY-THE": {
   "name": "EMPTY-THE",
   "file": "verbs.zil",
   "line": 2704,
   "endLine": 2726,
   "source": "<ROUTINE EMPTY-THE (OBJ \"OPTIONAL\" (BURN? T) \"AUX\" F N (FLG <>))\n\t <SET F <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET N .F>\n\t\t\t<SET F <NEXT? .N>>\n\t\t\t<COND (<AND <EQUAL? ,HERE ,WEST-END-OF-PASSAGE>\n\t\t\t\t    <NOT <FSET? ,PIT ,INVISIBLE>>>\n\t\t\t       <REMOVE .N>\n\t\t\t       <SET FLG 1>)\n\t\t\t      (T\n\t\t\t       <MOVE .N ,HERE>\n\t\t\t       <SET FLG 2>)>)>>\n\t <COND (<NOT .FLG>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \" Whatever was inside the \" D .OBJ>\n\t\t<COND (<EQUAL? .FLG 1>\n\t\t       <TELL \" has fallen out.\" CR>)\n\t\t      (<EQUAL? .FLG 2>\n\t\t       <TELL \" falls into the pit.\" CR>)>)>>"
  }
 },
 "globals": {
  "BIGFIX": {
   "name": "BIGFIX",
   "kind": "global",
   "file": "zload.zil",
   "line": 19,
   "value": "10000"
  },
  "SLAB-TBL": {
   "name": "SLAB-TBL",
   "kind": "global",
   "file": "ante.zil",
   "line": 302,
   "value": "<LTABLE DEAD-BOOK SPATULA 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "INCH-LTBL": {
   "name": "INCH-LTBL",
   "kind": "global",
   "file": "ante.zil",
   "line": 679,
   "value": "<LTABLE \"one inch\" \"two inches\" \"three inches\" \"four inches\" \"five inches\" \"six inches\" \"seven inches\" \"eight inches\">"
  },
  "DEATH-BEAM-STR": {
   "name": "DEATH-BEAM-STR",
   "kind": "global",
   "file": "ante.zil",
   "line": 867,
   "value": "\"The plaster starts to chip away beneath the incessant tapping of your pick\naxe. You quickly realize, however, that the tapping has started some sand\nflowing out of the bottom of the doorway. Just as you realize the seriousness\nof your situation, the floor gives out beneath you and you plummet down, down,\ndown into a den of voracious rats...\""
  },
  "SCARAB-DEATH-STR": {
   "name": "SCARAB-DEATH-STR",
   "kind": "global",
   "file": "ante.zil",
   "line": 1218,
   "value": "\"As soon as you lift the scarab from the disc, the left and right discs rise\nfar enough above the surface of the table to activate a mechanism. You hear it\nclick just before the ceiling comes down to meet the floor.\""
  },
  "PUSHED-BEAM": {
   "name": "PUSHED-BEAM",
   "kind": "global",
   "file": "barge.zil",
   "line": 198,
   "value": "<>"
  },
  "BARGE-BURN-STR": {
   "name": "BARGE-BURN-STR",
   "kind": "global",
   "file": "barge.zil",
   "line": 216,
   "value": "\"The barge immediately catches fire in a tremendous flash and, before you know\nit, you're heated to a toasty 1000 degrees. Not being made of asbestos has its\ndisadvantages, as you quickly realize....\""
  },
  "AIR-WALK": {
   "name": "AIR-WALK",
   "kind": "global",
   "file": "barge.zil",
   "line": 380,
   "value": "\"Well, despite your \"angelic\" qualities, you aren't very good at walking on\nair and so, with a scream on your lips, you plunge to a horrible death in a pit\nof voracious rats.\""
  },
  "BURIAL-BEAM-STR": {
   "name": "BURIAL-BEAM-STR",
   "kind": "global",
   "file": "barge.zil",
   "line": 385,
   "value": "\"How fitting -- to be trapped forever in the Burial Chamber, waiting slowly,\npainfully, for your oxygen to run out -- a true testimony to the brilliance of\nthe Queen and her protection.\""
  },
  "ANNEX-BEAM-STR": {
   "name": "ANNEX-BEAM-STR",
   "kind": "global",
   "file": "barge.zil",
   "line": 390,
   "value": "\"The doorway suddenly closes as heavy, immovable stones crush in from both\nsides. You slowly and painfully suffocate in the Annex, cursing the gods for\never revealing this horrible place to you. You wish you had told Craige about\nthis place -- that way, it could have been he instead of you.\""
  },
  "DESC-HOLE-LTBL": {
   "name": "DESC-HOLE-LTBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 808,
   "value": "<LTABLE \" small hole\" \"n enlarged hole\" \" sizable hole\" \" knee-deep hole\" \" deep hole\">"
  },
  "SPACE-TALES-LTBL": {
   "name": "SPACE-TALES-LTBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 815,
   "value": "<LTABLE \"You hear a whirring overhead and look up in time to see a gyrocopter settling\nto the sand on the horizon.\" \"You think you see a spaceship settling on the horizon and, as you strain your\neyes through the wafting waves of heat, you see a man and a huge robot. You can\nalmost hear them saying \"Gort, Klaatu Barada Nikto.\"\" \"A small lizard pokes its head up from the sands and asks the shortest route to\nTimes Square. You scratch your head for a moment and when you remember the\nproper subway line to recommend to it, you notice it's disappeared.\" \"Five maids amilking sit on sandy stools before you, grinning maniacally.\" \"A large rainbow trout walks by, holding a pet snail on a leash.\" \"A strong gust of wind kicks up a herd of buffalo on the horizon. You think it\nstrange that the buffalo are riding sidesaddle.\">"
  },
  "MIRAGE-LTBL": {
   "name": "MIRAGE-LTBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 830,
   "value": "<LTABLE \"Far off in the distance, dancing on the horizon, you see a shimmering oasis.\nStanding by the oasis are a team of Egyptian workers, waving for you to\napproach.\" \"A cool pool of water seems to dance in the heat waves just a mile away. You\ncan almost hear Rankin and Craige arguing over the spoils.\" \"A caravan of camels, led by a nomadic tribe, wanders a few miles off.\" \"You wipe your sweating brow, gazing off into the distance, and notice a cool,\ncrystal-clear lake glimmering on the horizon, just to the north.\">"
  },
  "TRUNK-TBL": {
   "name": "TRUNK-TBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 1253,
   "value": "<LTABLE MAP FOOD SMALL-SLIP 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "PYRAMID-OPENED": {
   "name": "PYRAMID-OPENED",
   "kind": "global",
   "file": "camp.zil",
   "line": 1361,
   "value": "<>"
  },
  "SANDY-CANTEEN": {
   "name": "SANDY-CANTEEN",
   "kind": "global",
   "file": "camp.zil",
   "line": 1599,
   "value": "<>"
  },
  "SAND-FILLED": {
   "name": "SAND-FILLED",
   "kind": "global",
   "file": "camp.zil",
   "line": 1600,
   "value": "<>"
  },
  "TOLD-IT": {
   "name": "TOLD-IT",
   "kind": "global",
   "file": "camp.zil",
   "line": 1696,
   "value": "<>"
  },
  "REENTRY-TBL": {
   "name": "REENTRY-TBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 1746,
   "value": "<TABLE 651 P1 652 P2 653 P3 654 EX1 655 EX2 656 EX3 706 EX6 751 P6 752 P7 753 P8 754 EX7 755 EX8 756 EX9>"
  },
  "DESERT-LOC": {
   "name": "DESERT-LOC",
   "kind": "global",
   "file": "camp.zil",
   "line": 1781,
   "value": "0"
  },
  "DESERT-START": {
   "name": "DESERT-START",
   "kind": "constant",
   "file": "camp.zil",
   "line": 1782,
   "value": "10000"
  },
  "DESERT-TABLE": {
   "name": "DESERT-TABLE",
   "kind": "global",
   "file": "camp.zil",
   "line": 1784,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "DESERT-HACK": {
   "name": "DESERT-HACK",
   "kind": "global",
   "file": "camp.zil",
   "line": 1796,
   "value": "0"
  },
  "SECS-LAT": {
   "name": "SECS-LAT",
   "kind": "global",
   "file": "camp.zil",
   "line": 1880,
   "value": "0"
  },
  "SECS-LON": {
   "name": "SECS-LON",
   "kind": "global",
   "file": "camp.zil",
   "line": 1881,
   "value": "0"
  },
  "MINS-LAT": {
   "name": "MINS-LAT",
   "kind": "global",
   "file": "camp.zil",
   "line": 1882,
   "value": "0"
  },
  "MINS-LON": {
   "name": "MINS-LON",
   "kind": "global",
   "file": "camp.zil",
   "line": 1883,
   "value": "0"
  },
  "DEGS-LAT": {
   "name": "DEGS-LAT",
   "kind": "global",
   "file": "camp.zil",
   "line": 1884,
   "value": "0"
  },
  "DEGS-LON": {
   "name": "DEGS-LON",
   "kind": "global",
   "file": "camp.zil",
   "line": 1885,
   "value": "0"
  },
  "PROP-TBL": {
   "name": "PROP-TBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 1887,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "CRATE-TBL": {
   "name": "CRATE-TBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 2189,
   "value": "<LTABLE BLACK-BOX 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0>"
  },
  "NOISES-LTBL": {
   "name": "NOISES-LTBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 2238,
   "value": "<LTABLE \"Crinkle fweep\" \"Bleeeeeeeeeep\" \"Sproing\" \"Screetchle frop\" \"Breeble grungle\">"
  },
  "MAP-TBL": {
   "name": "MAP-TBL",
   "kind": "global",
   "file": "camp.zil",
   "line": 2316,
   "value": "<TABLE RIVER-BANK 33 7 P1 35 7 P2 37 7 P3 39 7 EX1 41 7 EX2 43 7 EX3 45 7 P4 35 5 FIRE 37 5 P5 39 5 EX4 41 5 EX5 43 5 EX6 45 5 P6 35 3 P7 37 3 P8 39 3 EX7 41 3 EX8 43 3 EX9 45 3>"
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
  "BRICKS-TBL": {
   "name": "BRICKS-TBL",
   "kind": "global",
   "file": "cube.zil",
   "line": 85,
   "value": "<TABLE BRICK-ONE BRICK-TWO BRICK-THREE BRICK-FOUR BRICK-FIVE BRICK-SIX BRICK-SEVEN BRICK-EIGHT BRICK-NINE>"
  },
  "BRICKS-PRESSED": {
   "name": "BRICKS-PRESSED",
   "kind": "global",
   "file": "cube.zil",
   "line": 102,
   "value": "<>"
  },
  "NUM-TBL": {
   "name": "NUM-TBL",
   "kind": "global",
   "file": "cube.zil",
   "line": 169,
   "value": "<TABLE \"no\" \"one\" \"two\" \"three\" \"four\" \"five\" \"six\" \"seven\" \"eight\" \"nine\">"
  },
  "DASH-STR": {
   "name": "DASH-STR",
   "kind": "global",
   "file": "cube.zil",
   "line": 173,
   "value": "\"-----------------------------\""
  },
  "EX-SP-EX-STR": {
   "name": "EX-SP-EX-STR",
   "kind": "global",
   "file": "cube.zil",
   "line": 176,
   "value": "\"!                           !\""
  },
  "BRICKS-TAKEN": {
   "name": "BRICKS-TAKEN",
   "kind": "global",
   "file": "cube.zil",
   "line": 352,
   "value": "0"
  },
  "WRONG-BRICK": {
   "name": "WRONG-BRICK",
   "kind": "global",
   "file": "cube.zil",
   "line": 353,
   "value": "<>"
  },
  "CIRCLE-SCORED": {
   "name": "CIRCLE-SCORED",
   "kind": "global",
   "file": "diamond.zil",
   "line": 202,
   "value": "<>"
  },
  "HALL-DIR": {
   "name": "HALL-DIR",
   "kind": "global",
   "file": "diamond.zil",
   "line": 384,
   "value": "<>"
  },
  "STATUE-CHK-TBL": {
   "name": "STATUE-CHK-TBL",
   "kind": "global",
   "file": "diamond.zil",
   "line": 386,
   "value": "<TABLE A-PRIME E-PRIME \"southeast\" E-PRIME A-PRIME \"northwest\" B-PRIME D-PRIME \"southwest\" D-PRIME B-PRIME \"northeast\">"
  },
  "KLUDGE-FLG": {
   "name": "KLUDGE-FLG",
   "kind": "global",
   "file": "diamond.zil",
   "line": 407,
   "value": "<>"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "parser.zil",
   "line": 37,
   "value": "0"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "globals.zil",
   "line": 506,
   "value": "100"
  },
  "LOAD-MAX": {
   "name": "LOAD-MAX",
   "kind": "global",
   "file": "globals.zil",
   "line": 508,
   "value": "0"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 60,
   "value": "<>"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 207,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 208,
   "value": "0"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 458,
   "value": "<TABLE \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "STATUE-TBL": {
   "name": "STATUE-TBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 528,
   "value": "<TABLE ISIS NEPHTHYS NEITH SELKIS>"
  },
  "STATUE-NAME-TBL": {
   "name": "STATUE-NAME-TBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 530,
   "value": "<TABLE \"Isis\" \"Nephthys\" \"Neith\" \"Selkis\">"
  },
  "ORDER-LTBL": {
   "name": "ORDER-LTBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 532,
   "value": "<LTABLE NEITH SELKIS ISIS NEPHTHYS>"
  },
  "TURNED-LTBL": {
   "name": "TURNED-LTBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 534,
   "value": "<LTABLE <> <> <> <>>"
  },
  "DOWN-LTBL": {
   "name": "DOWN-LTBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 536,
   "value": "<LTABLE LANDING-ZERO LANDING-ONE LANDING-TWO LANDING-THREE>"
  },
  "SOMETHING-DROPPED": {
   "name": "SOMETHING-DROPPED",
   "kind": "global",
   "file": "globals.zil",
   "line": 539,
   "value": "<>"
  },
  "WHAT-WAS-DROPPED": {
   "name": "WHAT-WAS-DROPPED",
   "kind": "global",
   "file": "globals.zil",
   "line": 540,
   "value": "<>"
  },
  "ROPE-PLACED": {
   "name": "ROPE-PLACED",
   "kind": "global",
   "file": "globals.zil",
   "line": 541,
   "value": "<>"
  },
  "ROPE-TIED": {
   "name": "ROPE-TIED",
   "kind": "global",
   "file": "globals.zil",
   "line": 543,
   "value": "<>"
  },
  "MATCH-COUNT": {
   "name": "MATCH-COUNT",
   "kind": "global",
   "file": "globals.zil",
   "line": 544,
   "value": "20"
  },
  "SCARAB-SET": {
   "name": "SCARAB-SET",
   "kind": "global",
   "file": "globals.zil",
   "line": 545,
   "value": "<>"
  },
  "OIL-SOAKED": {
   "name": "OIL-SOAKED",
   "kind": "global",
   "file": "globals.zil",
   "line": 546,
   "value": "<>"
  },
  "OILED-TORCH": {
   "name": "OILED-TORCH",
   "kind": "global",
   "file": "globals.zil",
   "line": 547,
   "value": "<>"
  },
  "OIL-LEFT": {
   "name": "OIL-LEFT",
   "kind": "global",
   "file": "globals.zil",
   "line": 548,
   "value": "100"
  },
  "TORCH-TURNS": {
   "name": "TORCH-TURNS",
   "kind": "global",
   "file": "globals.zil",
   "line": 549,
   "value": "0"
  },
  "TURN-OFFSET": {
   "name": "TURN-OFFSET",
   "kind": "global",
   "file": "globals.zil",
   "line": 550,
   "value": "0"
  },
  "CAN-TURN-STATUES": {
   "name": "CAN-TURN-STATUES",
   "kind": "global",
   "file": "globals.zil",
   "line": 551,
   "value": "<>"
  },
  "STATUES-SET": {
   "name": "STATUES-SET",
   "kind": "global",
   "file": "globals.zil",
   "line": 552,
   "value": "<>"
  },
  "ANTE-SEAL": {
   "name": "ANTE-SEAL",
   "kind": "global",
   "file": "globals.zil",
   "line": 553,
   "value": "T"
  },
  "BEAM-PLACED": {
   "name": "BEAM-PLACED",
   "kind": "global",
   "file": "globals.zil",
   "line": 554,
   "value": "<>"
  },
  "ON-BEAM": {
   "name": "ON-BEAM",
   "kind": "global",
   "file": "globals.zil",
   "line": 555,
   "value": "<>"
  },
  "INNER-DOOR-SEALED": {
   "name": "INNER-DOOR-SEALED",
   "kind": "global",
   "file": "globals.zil",
   "line": 556,
   "value": "T"
  },
  "PLASTER-GONE": {
   "name": "PLASTER-GONE",
   "kind": "global",
   "file": "globals.zil",
   "line": 557,
   "value": "<>"
  },
  "FIRST-ENTRY": {
   "name": "FIRST-ENTRY",
   "kind": "global",
   "file": "globals.zil",
   "line": 558,
   "value": "T"
  },
  "STAR-LTBL": {
   "name": "STAR-LTBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 692,
   "value": "<LTABLE \"(@)\" \"(@@)\" \"(@@@)\" \"(@@@@)\">"
  },
  "COMPASS-POINTS-LTBL": {
   "name": "COMPASS-POINTS-LTBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 698,
   "value": "<LTABLE \" .\" \"\\\" \" /\" \". \">"
  },
  "COMPASS-TAILS-LTBL": {
   "name": "COMPASS-TAILS-LTBL",
   "kind": "global",
   "file": "globals.zil",
   "line": 705,
   "value": "<LTABLE \"/\" \" .\" \". \" \" \\\">"
  },
  "WATER-LEFT": {
   "name": "WATER-LEFT",
   "kind": "global",
   "file": "globals.zil",
   "line": 712,
   "value": "0"
  },
  "RING-COUNTER": {
   "name": "RING-COUNTER",
   "kind": "global",
   "file": "interrupts.zil",
   "line": 10,
   "value": "0"
  },
  "HUNGER": {
   "name": "HUNGER",
   "kind": "global",
   "file": "interrupts.zil",
   "line": 158,
   "value": "0"
  },
  "RANDOM-ROOM-LTBL": {
   "name": "RANDOM-ROOM-LTBL",
   "kind": "global",
   "file": "interrupts.zil",
   "line": 236,
   "value": "<LTABLE P1 P2 P3 P4 P5 P6 P7 P8 EX1 EX3 EX5 EX7 EX9 FIRE>"
  },
  "ROOM-LTBL": {
   "name": "ROOM-LTBL",
   "kind": "global",
   "file": "interrupts.zil",
   "line": 240,
   "value": "<LTABLE P1 P2 P3 P4 P5 P6 P7 P8 FIRE>"
  },
  "PYR-THIRST": {
   "name": "PYR-THIRST",
   "kind": "global",
   "file": "interrupts.zil",
   "line": 253,
   "value": "0"
  },
  "PLAYER": {
   "name": "PLAYER",
   "kind": "global",
   "file": "zmain.zil",
   "line": 6,
   "value": "<>"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "zmain.zil",
   "line": 8,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 10,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 12,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 14,
   "value": "<>"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 16,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 18,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 20,
   "value": "6"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 22,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 24,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 26,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "zmain.zil",
   "line": 28,
   "value": "5"
  },
  "P-MULT": {
   "name": "P-MULT",
   "kind": "global",
   "file": "zmain.zil",
   "line": 201,
   "value": "<>"
  },
  "P-NOT-HERE": {
   "name": "P-NOT-HERE",
   "kind": "global",
   "file": "zmain.zil",
   "line": 203,
   "value": "0"
  },
  "L-PRSA": {
   "name": "L-PRSA",
   "kind": "global",
   "file": "zmain.zil",
   "line": 205,
   "value": "<>"
  },
  "L-PRSO": {
   "name": "L-PRSO",
   "kind": "global",
   "file": "zmain.zil",
   "line": 207,
   "value": "<>"
  },
  "L-PRSI": {
   "name": "L-PRSI",
   "kind": "global",
   "file": "zmain.zil",
   "line": 209,
   "value": "<>"
  },
  "START-STR": {
   "name": "START-STR",
   "kind": "global",
   "file": "zmain.zil",
   "line": 349,
   "value": "\"You wake slowly, sit up in your bunk, look around the tent, and try to ignore\nthe pounding in your head, the cottony taste in your mouth, and the ache in\nyour stomach. The droning of a plane's engine breaks the stillness and you\nrealize that things outside are quiet -- too quiet. You know that this can\nmean only one thing: your workmen have deserted you. They complained over the\nlast few weeks, grumbling about the small pay and lack of food, and your\ninability to locate the pyramid. And after what you stupidly did yesterday,\ntrying to make them work on a holy day, their leaving is understandable.|\n|\nThe Professor's map was just an ancient map -- as worthless as an ice cube in\nthe Arctic without an instrument fine enough to accurately measure longitude\nand latitude. You knew that the site was nearby. You dug, and you ordered the\nworkers to dig, even without the box. As you listen to the plane and rub your\naching eyes, you pray they left you supplies enough to find the pyramid and to\nsurvive, and that the plane's carrying the long-overdue box.\""
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 955,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 956,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 957,
   "value": "<>"
  },
  "GWIM-DISABLE": {
   "name": "GWIM-DISABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 17,
   "value": "<>"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "parser.zil",
   "line": 19,
   "value": "0"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 21,
   "value": "0"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 23,
   "value": "0"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "parser.zil",
   "line": 25,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 27,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "parser.zil",
   "line": 29,
   "value": "0"
  },
  "P-CCSRC": {
   "name": "P-CCSRC",
   "kind": "global",
   "file": "parser.zil",
   "line": 31,
   "value": "0"
  },
  "P-LEN": {
   "name": "P-LEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 33,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 35,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "parser.zil",
   "line": 39,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "parser.zil",
   "line": 41,
   "value": "<ITABLE BYTE 120>"
  },
  "P-INBUF": {
   "name": "P-INBUF",
   "kind": "global",
   "file": "parser.zil",
   "line": 44,
   "value": "<ITABLE BYTE 100>"
  },
  "P-CONT": {
   "name": "P-CONT",
   "kind": "global",
   "file": "parser.zil",
   "line": 47,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "parser.zil",
   "line": 49,
   "value": "<>"
  },
  "P-IT-LOC": {
   "name": "P-IT-LOC",
   "kind": "global",
   "file": "parser.zil",
   "line": 50,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 54,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "parser.zil",
   "line": 56,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 58,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 60,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 62,
   "value": "<>"
  },
  "P-PHRLEN": {
   "name": "P-PHRLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 65,
   "value": "3"
  },
  "P-ORPHLEN": {
   "name": "P-ORPHLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 67,
   "value": "7"
  },
  "P-RTLEN": {
   "name": "P-RTLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 69,
   "value": "3"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 72,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "parser.zil",
   "line": 75,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 78,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 80,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 83,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "parser.zil",
   "line": 86,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "parser.zil",
   "line": 89,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 91,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 93,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 95,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "parser.zil",
   "line": 97,
   "value": "<TABLE 0 0 0 0>"
  },
  "P-NCN": {
   "name": "P-NCN",
   "kind": "global",
   "file": "parser.zil",
   "line": 99,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "parser.zil",
   "line": 101,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "parser.zil",
   "line": 103,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 105,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 107,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 109,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "parser.zil",
   "line": 111,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "parser.zil",
   "line": 113,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 115,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "parser.zil",
   "line": 117,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "parser.zil",
   "line": 119,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "parser.zil",
   "line": 121,
   "value": "<>"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "parser.zil",
   "line": 282,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "parser.zil",
   "line": 394,
   "value": "0"
  },
  "P-DIRECTION": {
   "name": "P-DIRECTION",
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
   "line": 677,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "parser.zil",
   "line": 733,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "parser.zil",
   "line": 735,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "parser.zil",
   "line": 737,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "parser.zil",
   "line": 739,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "parser.zil",
   "line": 741,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "parser.zil",
   "line": 743,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "parser.zil",
   "line": 745,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "parser.zil",
   "line": 747,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "parser.zil",
   "line": 749,
   "value": "<ITABLE NONE 50>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "parser.zil",
   "line": 751,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "parser.zil",
   "line": 753,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 755,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 757,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 759,
   "value": "4"
  },
  "P-CSPTR": {
   "name": "P-CSPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 761,
   "value": "<>"
  },
  "P-CEPTR": {
   "name": "P-CEPTR",
   "kind": "global",
   "file": "parser.zil",
   "line": 762,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "parser.zil",
   "line": 814,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "parser.zil",
   "line": 816,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "parser.zil",
   "line": 818,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "parser.zil",
   "line": 820,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 822,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "parser.zil",
   "line": 824,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "parser.zil",
   "line": 826,
   "value": "2"
  },
  "P-MOBY-FOUND": {
   "name": "P-MOBY-FOUND",
   "kind": "global",
   "file": "parser.zil",
   "line": 954,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1025,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1027,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "parser.zil",
   "line": 1029,
   "value": "1"
  },
  "PLUNGE-STR": {
   "name": "PLUNGE-STR",
   "kind": "global",
   "file": "ra.zil",
   "line": 62,
   "value": "\"You take a few steps down the steep staircase when suddenly you lose your\nfooting as you try to walk on air. You fall a mere 25 feet straight\ndown and, landing on your head, regret your attempt.\""
  },
  "ROPE-HACK": {
   "name": "ROPE-HACK",
   "kind": "global",
   "file": "ra.zil",
   "line": 104,
   "value": "<>"
  },
  "RA-STR": {
   "name": "RA-STR",
   "kind": "global",
   "file": "ra.zil",
   "line": 144,
   "value": "\"You are standing in the Chamber of Ra, a tribute to the Sun God. Even though\nthe only natural light enters through the opening above, the room is\nbrilliantly lit as though the walls themselves generated light. The room\nslopes inward and the walls meet at an open point, over your head. The heat of\nthe desert filters down through the opening and, as the air slowly circulates,\nthe deep, long-dead musty odors from the depths of the pyramid assault your\nsenses. Four staircases descend from here: a steep one to the north, a winding\none to the south, a wide one to the east, and a narrow one to the west.\""
  },
  "LANDING": {
   "name": "LANDING",
   "kind": "global",
   "file": "ra.zil",
   "line": 289,
   "value": "<>"
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
  "DESC-OBJECT": {
   "name": "DESC-OBJECT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 100,
   "value": "<>"
  },
  "BASE-SCORE": {
   "name": "BASE-SCORE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 209,
   "value": "0"
  },
  "WON-FLAG": {
   "name": "WON-FLAG",
   "kind": "global",
   "file": "verbs.zil",
   "line": 211,
   "value": "<>"
  },
  "SCORE-MAX": {
   "name": "SCORE-MAX",
   "kind": "global",
   "file": "verbs.zil",
   "line": 213,
   "value": "400"
  },
  "DEAD": {
   "name": "DEAD",
   "kind": "global",
   "file": "verbs.zil",
   "line": 323,
   "value": "<>"
  },
  "DEATHS": {
   "name": "DEATHS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 324,
   "value": "0"
  },
  "LUCKY": {
   "name": "LUCKY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 325,
   "value": "1"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 371,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 372,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 373,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 374,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 375,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 376,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 378,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 379,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 380,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 381,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 382,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 383,
   "value": "1"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 512,
   "value": "7"
  },
  "COPR-NOTICE": {
   "name": "COPR-NOTICE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 787,
   "value": "\" a transcript of interaction with INFIDEL.|\nINFIDEL is a registered trademark of Infocom, Inc.|\nCopyright (c) 1983 Infocom, Inc.  All rights reserved.|\""
  },
  "STOOD-UP": {
   "name": "STOOD-UP",
   "kind": "global",
   "file": "verbs.zil",
   "line": 942,
   "value": "<>"
  },
  "NILE-DRINKS": {
   "name": "NILE-DRINKS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1225,
   "value": "0"
  },
  "PRAYER-HACK": {
   "name": "PRAYER-HACK",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1294,
   "value": "0"
  },
  "HS": {
   "name": "HS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1323,
   "value": "0"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1333,
   "value": "<LTABLE \"Hello.\" \"Good day.\" \"Nice weather we've been having lately.\" \"Goodbye.\">"
  },
  "WHEEEEE": {
   "name": "WHEEEEE",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1339,
   "value": "<LTABLE \"Very good. Now you can go to the second grade.\" \"Have you tried hopping around, too?\" \"Are you enjoying yourself?\" \"Wheeeeeeeeee!!!!!\" \"Do you expect me to applaud?\">"
  },
  "JUMPLOSS": {
   "name": "JUMPLOSS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1346,
   "value": "<LTABLE \"You should have looked before you leaped.\" \"I'm afraid that leap was a bit much for your weak\nframe.\" \"In the movies, your life would be passing in front of\nyour eyes.\" \"Geronimo.....\">"
  },
  "PUSH-TBL": {
   "name": "PUSH-TBL",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1623,
   "value": "<TABLE A-PRIME P?NW P?SE B-PRIME P?NE P?SW D-PRIME P?SW P?NE E-PRIME P?SE P?NW>"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1707,
   "value": "<LTABLE \" doesn't seem to work.\" \" isn't notably helpful.\" \" doesn't work.\" \" has no effect.\">"
  },
  "THIRST": {
   "name": "THIRST",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1803,
   "value": "0"
  },
  "DIGGER-LTBL": {
   "name": "DIGGER-LTBL",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1851,
   "value": "<LTABLE \"You've dug a small hole. As you stand there and watch it, the sand starts to\nfill it in a little.\" \"You've enlarged the hole a little, taking out two shovelsfull for every one\nthat collapses back in from the walls.\" \"You've made the hole quite sizable, though it's not very deep. The deeper you\ndig, the more the walls collapse and so you widen the base of the hole.\" \"You're knee-deep in the hole, digging away, taking out more and more sand. You\nsilently curse those workers for having deserted you.\" \"You've dug yourself into a deep hole. You're actually several feet below the\nsurrounding sand. The walls look very unstable.\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2170,
   "value": "<LTABLE \"Not within this life cycle.\" \"With this kind of wisdom, be glad you're not in a Sphinx.\" \"A totally bizarre concept. For sure.\" \"Totally different head, man. Like, untubular.\" \"Kookie, man.\" \"I've heard better ideas from politicians.\" \"A truly amazing concept, that.\" \"Bizarre barely describes that desire.\" \"Let's face it -- that isn't going to happen.\">"
  },
  "CROC-STR": {
   "name": "CROC-STR",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2388,
   "value": "\"You manage to wade a few feet into the river, but this makes the crocodiles\nspring into action -- they advance far more quickly than you thought possible.\nYou panic and turn to the bank, attempting to flee. Your splashing about makes\nthe beasts double their efforts and reach you just as you are about to step on\nshore. The last thought you have is a slight amazement at how many teeth a\ncrocodile has and just how sharp they are.\""
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
     "line": 62
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
     "line": 65
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 66
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
     "line": 69
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
     "line": 71
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
     "file": "syntax.zil",
     "line": 78
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
     "pattern": "BURN OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 87
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
     "line": 92
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
     "file": "syntax.zil",
     "line": 100
    }
   ]
  },
  "CLEAN": {
   "verb": "CLEAN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLEAN OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CLEAN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 103
    }
   ]
  },
  "CLEAR": {
   "verb": "CLEAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLEAR OBJECT FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-PLASTER-REMOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 106
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB DOWN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 108
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
     "line": 109
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
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
     "line": 112
    }
   ]
  },
  "SIT": {
   "verb": "SIT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SIT ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-SIT-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 116
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
     "line": 118
    }
   ]
  },
  "COMPARE": {
   "verb": "COMPARE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COMPARE OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-COMPARE",
     "preaction": "PRE-COMPARE",
     "file": "syntax.zil",
     "line": 122
    },
    {
     "pattern": "COMPARE OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-COMPARE",
     "preaction": "PRE-COMPARE",
     "file": "syntax.zil",
     "line": 123
    },
    {
     "pattern": "COMPARE OBJECT (HELD CARRIED MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-FOO-COMPARE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 124
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
     "line": 126
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
     "line": 129
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
     "line": 132
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
     "line": 135
    },
    {
     "pattern": "CURSE OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 136
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
     "line": 139
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
     "preaction": "PRE-DIG",
     "file": "syntax.zil",
     "line": 141
    },
    {
     "pattern": "DIG OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": "PRE-DIG",
     "file": "syntax.zil",
     "line": 142
    },
    {
     "pattern": "DIG IN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": "PRE-DIG",
     "file": "syntax.zil",
     "line": 147
    },
    {
     "pattern": "DIG OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-HOLE-DIG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 153
    },
    {
     "pattern": "DIG WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG-WITH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 154
    }
   ]
  },
  "DIP": {
   "verb": "DIP",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DIP OBJECT (FIND BURNBIT) (HELD CARRIED HAVE) IN OBJECT (ON-GROUND HAVE)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-DIP-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 156
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
     "line": 160
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
     "line": 163
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
     "line": 166
    },
    {
     "pattern": "DRINK OBJECT (FIND DRINKBIT) IN OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-DRINK-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 167
    },
    {
     "pattern": "DRINK OBJECT (FIND DRINKBIT) FROM OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND)",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-DRINK-FROM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 169
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
     "line": 173
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
     "line": 174
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
     "line": 175
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
     "line": 176
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
     "line": 179
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
     "preaction": "PRE-EAT",
     "file": "syntax.zil",
     "line": 181
    }
   ]
  },
  "TASTE": {
   "verb": "TASTE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TASTE OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TASTE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 186
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
     "line": 188
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 189
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
     "line": 190
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 191
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 193
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
     "line": 194
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
     "line": 196
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
     "line": 200
    },
    {
     "pattern": "EXORCISE OUT OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 201
    },
    {
     "pattern": "EXORCISE AWAY OBJECT (FIND VILLAIN)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 202
    }
   ]
  },
  "EXTINGUISH": {
   "verb": "EXTINGUISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXTINGUISH OBJECT (FIND FLAMEBIT) (MANY HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 205
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND TAKE HAVE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 211
    },
    {
     "pattern": "FILL IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-FILL-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 216
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 217
    },
    {
     "pattern": "FILL OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-FILL-OUT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 220
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
     "line": 222
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
     "line": 226
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 227
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
     "line": 230
    },
    {
     "pattern": "GIVE OBJECT (FIND VICBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 235
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
     "line": 241
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 242
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
     "line": 245
    },
    {
     "pattern": "HELP OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 246
    }
   ]
  },
  "BLOW": {
   "verb": "BLOW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "BLOW OUT OBJECT (HELD CARRIED ON-GROUND HAVE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 248
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
     "line": 249
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
     "line": 254
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
     "line": 256
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
     "line": 262
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
     "line": 263
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
     "line": 264
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
     "line": 265
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
     "line": 266
    },
    {
     "pattern": "JUMP OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 267
    },
    {
     "pattern": "JUMP OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-JUMP-ROPE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 268
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
     "line": 271
    }
   ]
  },
  "KILL": {
   "verb": "KILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KILL OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 274
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
     "line": 281
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
     "line": 283
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
     "line": 284
    },
    {
     "pattern": "KNOCK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 285
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
     "line": 286
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
     "line": 289
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
     "line": 291
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 292
    }
   ]
  },
  "LIGHT": {
   "verb": "LIGHT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LIGHT OBJECT (FIND BURNBIT) (CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 294
    },
    {
     "pattern": "LIGHT OBJECT (FIND BURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "syntax.zil",
     "line": 298
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
     "line": 304
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
     "line": 305
    }
   ]
  },
  "LOCK": {
   "verb": "LOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 307
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
     "line": 313
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
     "line": 314
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
     "line": 315
    },
    {
     "pattern": "LOOK UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 316
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
     "line": 317
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
     "line": 318
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
     "line": 319
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
     "line": 320
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
     "line": 321
    },
    {
     "pattern": "LOOK DOWN OBJECT",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 322
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
     "line": 323
    },
    {
     "pattern": "LOOK ON OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 324
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY) WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 325
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
     "line": 327
    },
    {
     "pattern": "LOOK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CHASTISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 328
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
     "line": 331
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
     "line": 332
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
     "line": 333
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
     "line": 335
    },
    {
     "pattern": "LOWER OBJECT DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 336
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
     "line": 338
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
     "file": "syntax.zil",
     "line": 340
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
     "line": 347
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": "PRE-PUSH-TO",
     "file": "syntax.zil",
     "line": 348
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
     "line": 349
    },
    {
     "pattern": "ROLL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ROLL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 475
    },
    {
     "pattern": "ROLL OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": "PRE-PUSH-TO",
     "file": "syntax.zil",
     "line": 476
    },
    {
     "pattern": "ROLL OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": "PRE-PUSH-TO",
     "file": "syntax.zil",
     "line": 477
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
     "line": 351
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
     "line": 353
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
     "line": 354
    },
    {
     "pattern": "PULL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-PULL-UP",
     "preaction": "PRE-PULL-UP",
     "file": "syntax.zil",
     "line": 355
    },
    {
     "pattern": "PULL OBJECT THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-PULL-UP",
     "preaction": "PRE-PULL-UP",
     "file": "syntax.zil",
     "line": 356
    },
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": "PRE-PUSH-TO",
     "file": "syntax.zil",
     "line": 357
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
     "file": "syntax.zil",
     "line": 360
    }
   ]
  },
  "DESTROY": {
   "verb": "DESTROY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DESTROY OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 363
    },
    {
     "pattern": "DESTROY IN OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "IN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 368
    },
    {
     "pattern": "DESTROY DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "syntax.zil",
     "line": 371
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
     "preaction": "PRE-OIL",
     "file": "syntax.zil",
     "line": 379
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
     "line": 382
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
     "line": 385
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
     "line": 389
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
     "line": 395
    },
    {
     "pattern": "PICK OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PICK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 396
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
     "line": 398
    }
   ]
  },
  "PLUG": {
   "verb": "PLUG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PLUG OBJECT WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PLUG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 403
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
     "action": "V-ADVENTURE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 406
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
     "line": 409
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
     "line": 416
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-POUR-IN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 417
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-POUR-ON",
     "preaction": "PRE-POUR-ON",
     "file": "syntax.zil",
     "line": 418
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
     "line": 419
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
     "line": 422
    },
    {
     "pattern": "PRAY FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-PRAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 423
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
     "line": 425
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
     "line": 426
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
     "line": 428
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
     "line": 429
    },
    {
     "pattern": "PUSH OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": "PRE-PUSH-TO",
     "file": "syntax.zil",
     "line": 430
    },
    {
     "pattern": "PUSH OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": "PRE-PUSH-TO",
     "file": "syntax.zil",
     "line": 431
    },
    {
     "pattern": "PUSH OBJECT (HELD CARRIED HAVE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 432
    },
    {
     "pattern": "PUSH OBJECT (HELD CARRIED HAVE) THROUGH OBJECT",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-PUSH-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 433
    },
    {
     "pattern": "PUSH UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 434
    }
   ]
  },
  "PUT": {
   "verb": "PUT",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUT OBJECT (ON-GROUND HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 437
    },
    {
     "pattern": "PUT OBJECT (ON-GROUND HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 439
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
     "line": 441
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
     "line": 442
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
     "line": 443
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
     "line": 444
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
     "line": 445
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
     "line": 446
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
     "line": 447
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) ACROSS OBJECT",
     "objects": 2,
     "particles": [
      "ACROSS"
     ],
     "action": "V-PUT-ACROSS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 448
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT-ACROSS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 449
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) BETWEEN OBJECT",
     "objects": 2,
     "particles": [
      "BETWEEN"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 450
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
     "line": 453
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
     "line": 454
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
     "line": 457
    }
   ]
  },
  "REACH": {
   "verb": "REACH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REACH IN OBJECT (FIND OPENBIT)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-REACH-IN",
     "preaction": "PRE-REACH-IN",
     "file": "syntax.zil",
     "line": 460
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
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 462
    },
    {
     "pattern": "READ IN OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-READ-INSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 465
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 466
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
     "line": 473
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
     "line": 479
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
     "line": 480
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
     "line": 483
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
     "line": 484
    }
   ]
  },
  "SEND": {
   "verb": "SEND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SEND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SEND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 486
    },
    {
     "pattern": "SEND FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-SEND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 487
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
     "line": 489
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
     "line": 492
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
     "line": 493
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 494
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
     "line": 495
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
     "line": 497
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
     "line": 500
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
     "line": 503
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
     "line": 505
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
     "file": "syntax.zil",
     "line": 507
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
     "line": 508
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
     "line": 510
    },
    {
     "pattern": "SQUEEZE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 511
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
     "line": 513
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
     "line": 514
    },
    {
     "pattern": "STAND ON OBJECT (FIND VEHBIT)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 515
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
     "line": 516
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
     "file": "syntax.zil",
     "line": 518
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
     "line": 520
    },
    {
     "pattern": "STRIKE OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 525
    },
    {
     "pattern": "STRIKE OBJECT (CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 528
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
     "line": 530
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
     "line": 531
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
     "line": 534
    },
    {
     "pattern": "SWING OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE) AT OBJECT (FIND VILLAIN) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SWING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 537
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
     "line": 544
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
     "line": 548
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
     "line": 549
    },
    {
     "pattern": "TAKE OFF OBJECT (FIND VEHBIT) (ON-GROUND)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 550
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
     "line": 551
    },
    {
     "pattern": "TAKE UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-STAND-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 552
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
     "line": 553
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
     "line": 554
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
     "line": 559
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
     "line": 564
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED MANY) OF OBJECT",
     "objects": 2,
     "particles": [
      "OF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 569
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 574
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
     "line": 578
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
     "line": 581
    },
    {
     "pattern": "SAY",
     "objects": 0,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 582
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
     "line": 585
    },
    {
     "pattern": "SLEEP IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 586
    },
    {
     "pattern": "SLEEP ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 587
    },
    {
     "pattern": "SLEEP DOWN ON OBJECT",
     "objects": 1,
     "particles": [
      "DOWN",
      "ON"
     ],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 588
    },
    {
     "pattern": "SLEEP DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SLEEP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 589
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
     "line": 592
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [],
   "productions": [
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 595
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-THROW-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 596
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 597
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 598
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 599
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 600
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) WITH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 601
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 604
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 605
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED TAKE HAVE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-THROW-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 606
    }
   ]
  },
  "TIE": {
   "verb": "TIE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TIE OBJECT (ON-GROUND HELD CARRIED TAKE HAVE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TIE",
     "preaction": "PRE-TIE",
     "file": "syntax.zil",
     "line": 609
    },
    {
     "pattern": "TIE OBJECT (ON-GROUND HELD CARRIED TAKE HAVE) AROUND OBJECT",
     "objects": 2,
     "particles": [
      "AROUND"
     ],
     "action": "V-TIE",
     "preaction": "PRE-TIE",
     "file": "syntax.zil",
     "line": 611
    },
    {
     "pattern": "TIE UP OBJECT (FIND VICBIT) (ON-GROUND IN-ROOM) WITH OBJECT (ON-GROUND IN-ROOM HELD CARRIED TAKE HAVE)",
     "objects": 2,
     "particles": [
      "UP",
      "WITH"
     ],
     "action": "V-TIE-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 613
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
     "line": 620
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-TURN-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 622
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
     "line": 623
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
     "line": 624
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 625
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "syntax.zil",
     "line": 626
    },
    {
     "pattern": "TURN ON OBJECT (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 631
    },
    {
     "pattern": "TURN OFF OBJECT (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 634
    }
   ]
  },
  "UNFOLD": {
   "verb": "UNFOLD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNFOLD OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-UNFOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 639
    }
   ]
  },
  "FOLD": {
   "verb": "FOLD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FOLD OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 640
    },
    {
     "pattern": "FOLD UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-FOLD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 641
    }
   ]
  },
  "UNLOCK": {
   "verb": "UNLOCK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 643
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
     "line": 649
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
     "line": 652
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
     "line": 659
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
     "line": 662
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
     "line": 663
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
     "line": 666
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
     "line": 667
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
     "line": 668
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
     "line": 669
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
     "line": 670
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
     "line": 671
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
     "line": 672
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
     "line": 673
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
     "line": 674
    }
   ]
  },
  "WAVE": {
   "verb": "WAVE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WAVE AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 677
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
     "line": 678
    },
    {
     "pattern": "WAVE OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-WAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 679
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
     "line": 680
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
     "line": 683
    }
   ]
  },
  "WEIGH": {
   "verb": "WEIGH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WEIGH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WEIGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 685
    }
   ]
  },
  "WET": {
   "verb": "WET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WET OBJECT (ON-GROUND IN-ROOM HELD CARRIED HAVE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-WET",
     "preaction": null,
     "file": "syntax.zil",
     "line": 687
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
     "file": "syntax.zil",
     "line": 690
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
     "line": 693
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
     "line": 694
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
     "line": 696
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
     "line": 699
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
     "line": 707
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
     "line": 708
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
     "of": "COMPARE"
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
     "of": "ROLL"
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
     "of": "SAY"
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
     "of": "WALK"
    },
    {
     "kind": "particle",
     "of": "WAVE"
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
     "of": "COMPARE"
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
     "of": "FILL"
    },
    {
     "kind": "particle",
     "of": "BLOW"
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
     "of": "DESTROY"
    },
    {
     "kind": "particle",
     "of": "LUBRICATE"
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
     "of": "READ"
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
     "of": "TAKE"
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
     "kind": "particle",
     "of": "WET"
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
     "kind": "noun",
     "of": "ME"
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
  "BOARD": {
   "word": "BOARD",
   "roles": [
    {
     "kind": "verb",
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
     "of": "DESTROY"
    },
    {
     "kind": "particle",
     "of": "PUT"
    },
    {
     "kind": "particle",
     "of": "SLEEP"
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
  "CLEAN": {
   "word": "CLEAN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "CLEAR": {
   "word": "CLEAR",
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
     "of": "CLEAR"
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
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "UNTIE"
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
     "of": "BLOW"
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
     "of": "PUMP"
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
     "of": "FOLD"
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
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "DIG"
    },
    {
     "kind": "particle",
     "of": "DIP"
    },
    {
     "kind": "particle",
     "of": "DRINK"
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
     "of": "FILL"
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
     "of": "DESTROY"
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
     "of": "SWIM"
    },
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "SLEEP"
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
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "LEAN"
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
     "of": "SLEEP"
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
     "of": "IS"
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
  "CLOSE": {
   "word": "CLOSE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "COMPARE": {
   "word": "COMPARE",
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
  "DIG": {
   "word": "DIG",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DIP": {
   "word": "DIP",
   "roles": [
    {
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
  "LEAN": {
   "word": "LEAN",
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
  "TASTE": {
   "word": "TASTE",
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
  "OUT": {
   "word": "OUT",
   "roles": [
    {
     "kind": "particle",
     "of": "EXORCISE"
    },
    {
     "kind": "particle",
     "of": "FILL"
    },
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
  "BLOW": {
   "word": "BLOW",
   "roles": [
    {
     "kind": "verb",
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
     "of": "KNOCK"
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
     "of": "TURN"
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
     "of": "PUT"
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
     "of": "PRAY"
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
    },
    {
     "kind": "noun",
     "of": "BROKEN-LOCK"
    },
    {
     "kind": "noun",
     "of": "LOCK"
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
     "of": "TIE"
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
     "of": "PULL"
    },
    {
     "kind": "particle",
     "of": "PUSH"
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
     "kind": "particle",
     "of": "STAND"
    },
    {
     "kind": "particle",
     "of": "TAKE"
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
  "SEARCH": {
   "word": "SEARCH",
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
    },
    {
     "kind": "adjective",
     "of": "PICK-AXE"
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
  "PRAY": {
   "word": "PRAY",
   "roles": [
    {
     "kind": "verb",
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
  "AGAINST": {
   "word": "AGAINST",
   "roles": [
    {
     "kind": "particle",
     "of": "PUT"
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
  "BETWEEN": {
   "word": "BETWEEN",
   "roles": [
    {
     "kind": "particle",
     "of": "PUT"
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
  "REPENT": {
   "word": "REPENT",
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
  "SMOKE": {
   "word": "SMOKE",
   "roles": [
    {
     "kind": "verb",
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
  "OF": {
   "word": "OF",
   "roles": [
    {
     "kind": "particle",
     "of": "TAKE"
    },
    {
     "kind": "buzzword",
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
  "SLEEP": {
   "word": "SLEEP",
   "roles": [
    {
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
  "UNFOLD": {
   "word": "UNFOLD",
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
  "WEIGH": {
   "word": "WEIGH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "WET": {
   "word": "WET",
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
    },
    {
     "kind": "adjective",
     "of": "NORTH-STAIRS"
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
    },
    {
     "kind": "adjective",
     "of": "SOUTH-STAIRS"
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
    },
    {
     "kind": "adjective",
     "of": "EAST-STAIRS"
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
    },
    {
     "kind": "adjective",
     "of": "WEST-STAIRS"
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
    },
    {
     "kind": "adjective",
     "of": "INTDIR"
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
    },
    {
     "kind": "adjective",
     "of": "INTDIR"
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
    },
    {
     "kind": "adjective",
     "of": "INTDIR"
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
    },
    {
     "kind": "adjective",
     "of": "INTDIR"
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
  "G": {
   "word": "G",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "AGAIN"
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
  "SCRUB": {
   "word": "SCRUB",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "POLISH": {
   "word": "POLISH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "CLEAN"
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
  "DAMN": {
   "word": "DAMN",
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
  "SHIT": {
   "word": "SHIT",
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
  "IMMERSE": {
   "word": "IMMERSE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DIP"
    }
   ]
  },
  "SUBMERGE": {
   "word": "SUBMERGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DIP"
    }
   ]
  },
  "DUNK": {
   "word": "DUNK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DIP"
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
    },
    {
     "kind": "noun",
     "of": "SIP"
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
  "CONSUME": {
   "word": "CONSUME",
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
  "CHEW": {
   "word": "CHEW",
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
  "HAND": {
   "word": "HAND",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "GIVE"
    },
    {
     "kind": "noun",
     "of": "DIGITS"
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
  "LIQUIFY": {
   "word": "LIQUIFY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MELT"
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
  "SIGH": {
   "word": "SIGH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MUMBLE"
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
  "CHOP": {
   "word": "CHOP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
    }
   ]
  },
  "CHIP": {
   "word": "CHIP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
    },
    {
     "kind": "noun",
     "of": "CHIPS1"
    },
    {
     "kind": "noun",
     "of": "CHIPS2"
    }
   ]
  },
  "HIT": {
   "word": "HIT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DESTROY"
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
  "WEDGE": {
   "word": "WEDGE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "PUT"
    },
    {
     "kind": "noun",
     "of": "SHIM"
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
  "EMPTY": {
   "word": "EMPTY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SHAKE"
    },
    {
     "kind": "adjective",
     "of": "EMPTY-MATCHES"
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
  "GRAB": {
   "word": "GRAB",
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
  "REMOVE": {
   "word": "REMOVE",
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
  "TALK": {
   "word": "TALK",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SAY"
    }
   ]
  },
  "LIE": {
   "word": "LIE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SLEEP"
    }
   ]
  },
  "REST": {
   "word": "REST",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "SLEEP"
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
  "SIGNAL": {
   "word": "SIGNAL",
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
  "SOME": {
   "word": "SOME",
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
    },
    {
     "kind": "adjective",
     "of": "MANY-MATCHES"
    },
    {
     "kind": "adjective",
     "of": "SINGLE-MATCH"
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
  "MY": {
   "word": "MY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "LINTEL": {
   "word": "LINTEL",
   "roles": [
    {
     "kind": "noun",
     "of": "T-LINTEL"
    }
   ]
  },
  "TIMBER": {
   "word": "TIMBER",
   "roles": [
    {
     "kind": "adjective",
     "of": "T-LINTEL"
    },
    {
     "kind": "adjective",
     "of": "LINTEL"
    },
    {
     "kind": "adjective",
     "of": "DOORWAY"
    }
   ]
  },
  "TILES": {
   "word": "TILES",
   "roles": [
    {
     "kind": "noun",
     "of": "TILES"
    },
    {
     "kind": "noun",
     "of": "GEMS-2"
    }
   ]
  },
  "IVORY": {
   "word": "IVORY",
   "roles": [
    {
     "kind": "noun",
     "of": "TILES"
    }
   ]
  },
  "PIT": {
   "word": "PIT",
   "roles": [
    {
     "kind": "noun",
     "of": "PIT"
    },
    {
     "kind": "noun",
     "of": "FIREPIT"
    }
   ]
  },
  "DEEP": {
   "word": "DEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "PIT"
    },
    {
     "kind": "adjective",
     "of": "HOLE"
    }
   ]
  },
  "FRAME": {
   "word": "FRAME",
   "roles": [
    {
     "kind": "noun",
     "of": "LINTEL"
    }
   ]
  },
  "ROCKS": {
   "word": "ROCKS",
   "roles": [
    {
     "kind": "noun",
     "of": "ROCKS"
    },
    {
     "kind": "noun",
     "of": "ROCK-S"
    }
   ]
  },
  "DUST": {
   "word": "DUST",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIPS1"
    },
    {
     "kind": "noun",
     "of": "CHIPS2"
    }
   ]
  },
  "CHIPS": {
   "word": "CHIPS",
   "roles": [
    {
     "kind": "noun",
     "of": "CHIPS1"
    },
    {
     "kind": "noun",
     "of": "CHIPS2"
    },
    {
     "kind": "noun",
     "of": "TWINKLERS"
    }
   ]
  },
  "SLAB": {
   "word": "SLAB",
   "roles": [
    {
     "kind": "noun",
     "of": "SLAB"
    },
    {
     "kind": "noun",
     "of": "GOLD-TABLE"
    },
    {
     "kind": "noun",
     "of": "SILVER-TABLE"
    }
   ]
  },
  "HUGE": {
   "word": "HUGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLAB"
    },
    {
     "kind": "adjective",
     "of": "HUGE-STATUE"
    }
   ]
  },
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLAB"
    },
    {
     "kind": "noun",
     "of": "ROCK"
    },
    {
     "kind": "adjective",
     "of": "STONE-KEY"
    },
    {
     "kind": "adjective",
     "of": "NEPHTH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "SELKIS-DOOR"
    },
    {
     "kind": "adjective",
     "of": "ISIS-DOOR"
    },
    {
     "kind": "adjective",
     "of": "NEITH-DOOR"
    },
    {
     "kind": "adjective",
     "of": "WALLS"
    },
    {
     "kind": "adjective",
     "of": "ALTAR"
    }
   ]
  },
  "SEAM": {
   "word": "SEAM",
   "roles": [
    {
     "kind": "noun",
     "of": "SLAB-SEAM"
    }
   ]
  },
  "THIN": {
   "word": "THIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SLAB-SEAM"
    },
    {
     "kind": "adjective",
     "of": "LINE"
    }
   ]
  },
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "HOLE-4"
    },
    {
     "kind": "noun",
     "of": "HOLE-3"
    },
    {
     "kind": "noun",
     "of": "HOLE-2"
    },
    {
     "kind": "noun",
     "of": "HOLE-1"
    },
    {
     "kind": "noun",
     "of": "MAST-HOLE"
    },
    {
     "kind": "noun",
     "of": "TORCH-HOLDER"
    },
    {
     "kind": "noun",
     "of": "ROCK-LOCK"
    },
    {
     "kind": "noun",
     "of": "HOLE"
    }
   ]
  },
  "HOLES": {
   "word": "HOLES",
   "roles": [
    {
     "kind": "noun",
     "of": "HOLE-4"
    },
    {
     "kind": "noun",
     "of": "HOLE-3"
    },
    {
     "kind": "noun",
     "of": "HOLE-2"
    },
    {
     "kind": "noun",
     "of": "HOLE-1"
    }
   ]
  },
  "FOURTH": {
   "word": "FOURTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE-4"
    },
    {
     "kind": "adjective",
     "of": "BRICK-FOUR"
    }
   ]
  },
  "THIRD": {
   "word": "THIRD",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE-3"
    },
    {
     "kind": "adjective",
     "of": "BRICK-THREE"
    }
   ]
  },
  "SECOND": {
   "word": "SECOND",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE-2"
    },
    {
     "kind": "adjective",
     "of": "BRICK-TWO"
    }
   ]
  },
  "FIRST": {
   "word": "FIRST",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE-1"
    },
    {
     "kind": "adjective",
     "of": "BRICK-ONE"
    },
    {
     "kind": "adjective",
     "of": "FEW-STEPS"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "SCARAB-TABLE"
    },
    {
     "kind": "noun",
     "of": "GOLD-TABLE"
    },
    {
     "kind": "noun",
     "of": "SILVER-TABLE"
    }
   ]
  },
  "GRANITE": {
   "word": "GRANITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCARAB-TABLE"
    },
    {
     "kind": "adjective",
     "of": "GOLD-TABLE"
    },
    {
     "kind": "adjective",
     "of": "SILVER-TABLE"
    }
   ]
  },
  "DISC": {
   "word": "DISC",
   "roles": [
    {
     "kind": "noun",
     "of": "LEFT-DISC"
    },
    {
     "kind": "noun",
     "of": "RIGHT-DISC"
    },
    {
     "kind": "noun",
     "of": "MID-DISC"
    }
   ]
  },
  "LEFT": {
   "word": "LEFT",
   "roles": [
    {
     "kind": "adjective",
     "of": "LEFT-DISC"
    }
   ]
  },
  "RIGHT": {
   "word": "RIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "RIGHT-DISC"
    }
   ]
  },
  "MIDDLE": {
   "word": "MIDDLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MID-DISC"
    }
   ]
  },
  "NICHE": {
   "word": "NICHE",
   "roles": [
    {
     "kind": "noun",
     "of": "NICHES"
    }
   ]
  },
  "NICHES": {
   "word": "NICHES",
   "roles": [
    {
     "kind": "noun",
     "of": "NICHES"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "NICHES"
    },
    {
     "kind": "adjective",
     "of": "S-AREA"
    },
    {
     "kind": "adjective",
     "of": "SPATULA"
    },
    {
     "kind": "adjective",
     "of": "SLOT"
    },
    {
     "kind": "adjective",
     "of": "STONE-KEY"
    },
    {
     "kind": "adjective",
     "of": "CANTEEN"
    },
    {
     "kind": "adjective",
     "of": "HOLE"
    },
    {
     "kind": "adjective",
     "of": "PICTURES"
    },
    {
     "kind": "adjective",
     "of": "OIL-JAR"
    }
   ]
  },
  "PLASTE": {
   "word": "PLASTE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLASTER1"
    },
    {
     "kind": "noun",
     "of": "PLASTER"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "INNER-DOOR"
    },
    {
     "kind": "noun",
     "of": "NORTH-ANTE-DOOR"
    },
    {
     "kind": "noun",
     "of": "ANNEX-DOOR"
    },
    {
     "kind": "noun",
     "of": "NEPHTH-DOOR"
    },
    {
     "kind": "noun",
     "of": "SELKIS-DOOR"
    },
    {
     "kind": "noun",
     "of": "ISIS-DOOR"
    },
    {
     "kind": "noun",
     "of": "NEITH-DOOR"
    }
   ]
  },
  "INNER": {
   "word": "INNER",
   "roles": [
    {
     "kind": "adjective",
     "of": "INNER-DOOR"
    }
   ]
  },
  "BURIAL": {
   "word": "BURIAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "NORTH-ANTE-DOOR"
    }
   ]
  },
  "SEALS": {
   "word": "SEALS",
   "roles": [
    {
     "kind": "noun",
     "of": "N-ANTE-SEAL"
    }
   ]
  },
  "SEAL": {
   "word": "SEAL",
   "roles": [
    {
     "kind": "noun",
     "of": "N-ANTE-SEAL"
    }
   ]
  },
  "ANNEX": {
   "word": "ANNEX",
   "roles": [
    {
     "kind": "adjective",
     "of": "ANNEX-DOOR"
    }
   ]
  },
  "STATUE": {
   "word": "STATUE",
   "roles": [
    {
     "kind": "noun",
     "of": "ISIS"
    },
    {
     "kind": "noun",
     "of": "NEPHTHYS"
    },
    {
     "kind": "noun",
     "of": "NEITH"
    },
    {
     "kind": "noun",
     "of": "SELKIS"
    },
    {
     "kind": "noun",
     "of": "HUGE-STATUE"
    }
   ]
  },
  "ISIS": {
   "word": "ISIS",
   "roles": [
    {
     "kind": "adjective",
     "of": "ISIS"
    }
   ]
  },
  "NEPHTH": {
   "word": "NEPHTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEPHTHYS"
    }
   ]
  },
  "NEITH": {
   "word": "NEITH",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEITH"
    }
   ]
  },
  "SELKIS": {
   "word": "SELKIS",
   "roles": [
    {
     "kind": "adjective",
     "of": "SELKIS"
    }
   ]
  },
  "ARM": {
   "word": "ARM",
   "roles": [
    {
     "kind": "noun",
     "of": "ARMS"
    }
   ]
  },
  "ARMS": {
   "word": "ARMS",
   "roles": [
    {
     "kind": "noun",
     "of": "ARMS"
    }
   ]
  },
  "SARCOP": {
   "word": "SARCOP",
   "roles": [
    {
     "kind": "noun",
     "of": "SARCOPH"
    }
   ]
  },
  "COFFIN": {
   "word": "COFFIN",
   "roles": [
    {
     "kind": "noun",
     "of": "SARCOPH"
    }
   ]
  },
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "noun",
     "of": "SARCOPH-COVER"
    },
    {
     "kind": "noun",
     "of": "MATCHES"
    }
   ]
  },
  "QUARTZ": {
   "word": "QUARTZ",
   "roles": [
    {
     "kind": "noun",
     "of": "SARCOPH-COVER"
    },
    {
     "kind": "adjective",
     "of": "SARCOPH-COVER"
    },
    {
     "kind": "noun",
     "of": "TWINKLERS"
    }
   ]
  },
  "RECESS": {
   "word": "RECESS",
   "roles": [
    {
     "kind": "noun",
     "of": "S-AREA"
    },
    {
     "kind": "noun",
     "of": "L-AREA"
    },
    {
     "kind": "adjective",
     "of": "PUNCH-PANEL"
    }
   ]
  },
  "AREA": {
   "word": "AREA",
   "roles": [
    {
     "kind": "noun",
     "of": "S-AREA"
    },
    {
     "kind": "noun",
     "of": "L-AREA"
    }
   ]
  },
  "AREAS": {
   "word": "AREAS",
   "roles": [
    {
     "kind": "noun",
     "of": "S-AREA"
    },
    {
     "kind": "noun",
     "of": "L-AREA"
    }
   ]
  },
  "SMALLE": {
   "word": "SMALLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "S-AREA"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "L-AREA"
    },
    {
     "kind": "adjective",
     "of": "TRUNK"
    },
    {
     "kind": "adjective",
     "of": "PICTURES"
    },
    {
     "kind": "adjective",
     "of": "ALTAR"
    }
   ]
  },
  "LARGER": {
   "word": "LARGER",
   "roles": [
    {
     "kind": "adjective",
     "of": "L-AREA"
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
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "DEAD-BOOK"
    },
    {
     "kind": "noun",
     "of": "CRUMBLED-BOOK"
    }
   ]
  },
  "ANCIEN": {
   "word": "ANCIEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEAD-BOOK"
    },
    {
     "kind": "adjective",
     "of": "MAP"
    }
   ]
  },
  "PAGE": {
   "word": "PAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "PAGE"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "CRUMBLED-BOOK"
    }
   ]
  },
  "SPATUL": {
   "word": "SPATUL",
   "roles": [
    {
     "kind": "noun",
     "of": "SPATULA"
    }
   ]
  },
  "LADDER": {
   "word": "LADDER",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANK"
    },
    {
     "kind": "noun",
     "of": "STAIRS"
    }
   ]
  },
  "PLANK": {
   "word": "PLANK",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANK"
    }
   ]
  },
  "MAST": {
   "word": "MAST",
   "roles": [
    {
     "kind": "adjective",
     "of": "MAST-HOLE"
    },
    {
     "kind": "noun",
     "of": "BEAM"
    }
   ]
  },
  "KNOTHO": {
   "word": "KNOTHO",
   "roles": [
    {
     "kind": "noun",
     "of": "TORCH-HOLDER"
    }
   ]
  },
  "KNOT": {
   "word": "KNOT",
   "roles": [
    {
     "kind": "adjective",
     "of": "TORCH-HOLDER"
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
  "SHIM": {
   "word": "SHIM",
   "roles": [
    {
     "kind": "noun",
     "of": "SHIM"
    }
   ]
  },
  "WOOD": {
   "word": "WOOD",
   "roles": [
    {
     "kind": "adjective",
     "of": "SHIM"
    },
    {
     "kind": "noun",
     "of": "BOAT"
    },
    {
     "kind": "adjective",
     "of": "BOAT"
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
  "WOODEN": {
   "word": "WOODEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEAM"
    },
    {
     "kind": "adjective",
     "of": "BOAT"
    }
   ]
  },
  "STURDY": {
   "word": "STURDY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BEAM"
    }
   ]
  },
  "SCROLL": {
   "word": "SCROLL",
   "roles": [
    {
     "kind": "noun",
     "of": "SCROLL"
    },
    {
     "kind": "noun",
     "of": "PICTURES"
    }
   ]
  },
  "PAPYRU": {
   "word": "PAPYRU",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCROLL"
    }
   ]
  },
  "CROC": {
   "word": "CROC",
   "roles": [
    {
     "kind": "noun",
     "of": "NASTY-CROC"
    }
   ]
  },
  "CROCS": {
   "word": "CROCS",
   "roles": [
    {
     "kind": "noun",
     "of": "NASTY-CROC"
    }
   ]
  },
  "CROCOD": {
   "word": "CROCOD",
   "roles": [
    {
     "kind": "noun",
     "of": "NASTY-CROC"
    }
   ]
  },
  "REPTIL": {
   "word": "REPTIL",
   "roles": [
    {
     "kind": "noun",
     "of": "NASTY-CROC"
    }
   ]
  },
  "RIVER": {
   "word": "RIVER",
   "roles": [
    {
     "kind": "noun",
     "of": "NILE-RIBBAH"
    }
   ]
  },
  "NILE": {
   "word": "NILE",
   "roles": [
    {
     "kind": "noun",
     "of": "NILE-RIBBAH"
    }
   ]
  },
  "THICKE": {
   "word": "THICKE",
   "roles": [
    {
     "kind": "noun",
     "of": "THICKETS"
    },
    {
     "kind": "noun",
     "of": "THICKET"
    }
   ]
  },
  "CHARRE": {
   "word": "CHARRE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FIREPIT"
    }
   ]
  },
  "ROCK": {
   "word": "ROCK",
   "roles": [
    {
     "kind": "noun",
     "of": "ROCK"
    }
   ]
  },
  "BLACKE": {
   "word": "BLACKE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROCK"
    },
    {
     "kind": "adjective",
     "of": "ROCK-S"
    }
   ]
  },
  "TENT": {
   "word": "TENT",
   "roles": [
    {
     "kind": "noun",
     "of": "TENT-OBJ"
    }
   ]
  },
  "YOUR": {
   "word": "YOUR",
   "roles": [
    {
     "kind": "adjective",
     "of": "TENT-OBJ"
    }
   ]
  },
  "SUPPLY": {
   "word": "SUPPLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TENT-OBJ"
    }
   ]
  },
  "WORK": {
   "word": "WORK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TENT-OBJ"
    }
   ]
  },
  "PYRAMI": {
   "word": "PYRAMI",
   "roles": [
    {
     "kind": "noun",
     "of": "PYRAMID"
    }
   ]
  },
  "OPENIN": {
   "word": "OPENIN",
   "roles": [
    {
     "kind": "noun",
     "of": "ROCK-LOCK"
    },
    {
     "kind": "noun",
     "of": "DOORWAY"
    }
   ]
  },
  "BLOCK": {
   "word": "BLOCK",
   "roles": [
    {
     "kind": "noun",
     "of": "ROCK-LOCK"
    }
   ]
  },
  "SQUARE": {
   "word": "SQUARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROCK-LOCK"
    }
   ]
  },
  "COT": {
   "word": "COT",
   "roles": [
    {
     "kind": "noun",
     "of": "COT"
    },
    {
     "kind": "noun",
     "of": "FOLDED-COT"
    }
   ]
  },
  "ARMY": {
   "word": "ARMY",
   "roles": [
    {
     "kind": "adjective",
     "of": "COT"
    },
    {
     "kind": "adjective",
     "of": "FOLDED-COT"
    }
   ]
  },
  "FOLDED": {
   "word": "FOLDED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOLDED-COT"
    }
   ]
  },
  "MATCHB": {
   "word": "MATCHB",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHES"
    },
    {
     "kind": "noun",
     "of": "BURNED-MATCHBOOK"
    },
    {
     "kind": "noun",
     "of": "EMPTY-MATCHES"
    }
   ]
  },
  "MATCHE": {
   "word": "MATCHE",
   "roles": [
    {
     "kind": "noun",
     "of": "MATCHES"
    },
    {
     "kind": "noun",
     "of": "EMPTY-MATCHES"
    }
   ]
  },
  "MATCH": {
   "word": "MATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "MANY-MATCHES"
    },
    {
     "kind": "noun",
     "of": "SINGLE-MATCH"
    },
    {
     "kind": "noun",
     "of": "ONE-MATCH"
    }
   ]
  },
  "SINGLE": {
   "word": "SINGLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "MANY-MATCHES"
    },
    {
     "kind": "adjective",
     "of": "SINGLE-MATCH"
    }
   ]
  },
  "BURNED": {
   "word": "BURNED",
   "roles": [
    {
     "kind": "adjective",
     "of": "BURNED-MATCHBOOK"
    },
    {
     "kind": "adjective",
     "of": "BURNED-PACK"
    }
   ]
  },
  "MANUAL": {
   "word": "MANUAL",
   "roles": [
    {
     "kind": "noun",
     "of": "MANUAL"
    }
   ]
  },
  "COUPON": {
   "word": "COUPON",
   "roles": [
    {
     "kind": "noun",
     "of": "MANUAL"
    }
   ]
  },
  "INSTRU": {
   "word": "INSTRU",
   "roles": [
    {
     "kind": "adjective",
     "of": "MANUAL"
    }
   ]
  },
  "WRAPPE": {
   "word": "WRAPPE",
   "roles": [
    {
     "kind": "noun",
     "of": "BURNED-PACK"
    }
   ]
  },
  "PACK": {
   "word": "PACK",
   "roles": [
    {
     "kind": "noun",
     "of": "BURNED-PACK"
    },
    {
     "kind": "noun",
     "of": "CIG-WRAPPER"
    }
   ]
  },
  "FOIL": {
   "word": "FOIL",
   "roles": [
    {
     "kind": "noun",
     "of": "CIG-WRAPPER"
    }
   ]
  },
  "CIGARE": {
   "word": "CIGARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIG-WRAPPER"
    }
   ]
  },
  "BRIGHT": {
   "word": "BRIGHT",
   "roles": [
    {
     "kind": "adjective",
     "of": "CIG-WRAPPER"
    },
    {
     "kind": "adjective",
     "of": "GEMS-2"
    }
   ]
  },
  "PADLOC": {
   "word": "PADLOC",
   "roles": [
    {
     "kind": "noun",
     "of": "BROKEN-LOCK"
    },
    {
     "kind": "noun",
     "of": "LOCK"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROKEN-LOCK"
    },
    {
     "kind": "adjective",
     "of": "HEAD"
    }
   ]
  },
  "TRUNK": {
   "word": "TRUNK",
   "roles": [
    {
     "kind": "noun",
     "of": "TRUNK"
    },
    {
     "kind": "adjective",
     "of": "KEY"
    }
   ]
  },
  "UNWIEL": {
   "word": "UNWIEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRUNK"
    }
   ]
  },
  "AXE": {
   "word": "AXE",
   "roles": [
    {
     "kind": "noun",
     "of": "PICK-AXE"
    }
   ]
  },
  "PICKAX": {
   "word": "PICKAX",
   "roles": [
    {
     "kind": "noun",
     "of": "PICK-AXE"
    }
   ]
  },
  "AX": {
   "word": "AX",
   "roles": [
    {
     "kind": "noun",
     "of": "PICK-AXE"
    }
   ]
  },
  "CUBE": {
   "word": "CUBE",
   "roles": [
    {
     "kind": "noun",
     "of": "STONE-KEY"
    }
   ]
  },
  "BEEF": {
   "word": "BEEF",
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
  "MEAT": {
   "word": "MEAT",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOD"
    }
   ]
  },
  "DRIED": {
   "word": "DRIED",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOD"
    }
   ]
  },
  "PIECE": {
   "word": "PIECE",
   "roles": [
    {
     "kind": "adjective",
     "of": "FOOD"
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
  "SHOVEL": {
   "word": "SHOVEL",
   "roles": [
    {
     "kind": "noun",
     "of": "SHOVEL"
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
  "ASP": {
   "word": "ASP",
   "roles": [
    {
     "kind": "noun",
     "of": "ROPE"
    }
   ]
  },
  "BUNCH": {
   "word": "BUNCH",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROPE"
    }
   ]
  },
  "NOTE": {
   "word": "NOTE",
   "roles": [
    {
     "kind": "noun",
     "of": "NOTE"
    }
   ]
  },
  "FAREWE": {
   "word": "FAREWE",
   "roles": [
    {
     "kind": "adjective",
     "of": "NOTE"
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
  "CANTEE": {
   "word": "CANTEE",
   "roles": [
    {
     "kind": "noun",
     "of": "CANTEEN"
    }
   ]
  },
  "STICKE": {
   "word": "STICKE",
   "roles": [
    {
     "kind": "noun",
     "of": "SMALL-SLIP"
    }
   ]
  },
  "INSPEC": {
   "word": "INSPEC",
   "roles": [
    {
     "kind": "adjective",
     "of": "SMALL-SLIP"
    }
   ]
  },
  "GORT": {
   "word": "GORT",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRAGES"
    }
   ]
  },
  "KLAATU": {
   "word": "KLAATU",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRAGES"
    }
   ]
  },
  "FISH": {
   "word": "FISH",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRAGES"
    }
   ]
  },
  "BUFFAL": {
   "word": "BUFFAL",
   "roles": [
    {
     "kind": "noun",
     "of": "MIRAGES"
    }
   ]
  },
  "LIZARD": {
   "word": "LIZARD",
   "roles": [
    {
     "kind": "adjective",
     "of": "MIRAGES"
    }
   ]
  },
  "MAIDS": {
   "word": "MAIDS",
   "roles": [
    {
     "kind": "adjective",
     "of": "MIRAGES"
    }
   ]
  },
  "SNAIL": {
   "word": "SNAIL",
   "roles": [
    {
     "kind": "adjective",
     "of": "MIRAGES"
    }
   ]
  },
  "GYROCO": {
   "word": "GYROCO",
   "roles": [
    {
     "kind": "adjective",
     "of": "MIRAGES"
    }
   ]
  },
  "SAND": {
   "word": "SAND",
   "roles": [
    {
     "kind": "noun",
     "of": "C-SAND"
    },
    {
     "kind": "noun",
     "of": "SAND"
    }
   ]
  },
  "SACK": {
   "word": "SACK",
   "roles": [
    {
     "kind": "noun",
     "of": "KNAPSACK"
    }
   ]
  },
  "KNAPSA": {
   "word": "KNAPSA",
   "roles": [
    {
     "kind": "noun",
     "of": "KNAPSACK"
    }
   ]
  },
  "KNAP": {
   "word": "KNAP",
   "roles": [
    {
     "kind": "adjective",
     "of": "KNAPSACK"
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
  "LABEL": {
   "word": "LABEL",
   "roles": [
    {
     "kind": "noun",
     "of": "CRATE"
    }
   ]
  },
  "PACKIN": {
   "word": "PACKIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRATE"
    }
   ]
  },
  "BOX": {
   "word": "BOX",
   "roles": [
    {
     "kind": "noun",
     "of": "BLACK-BOX"
    }
   ]
  },
  "NAVIGA": {
   "word": "NAVIGA",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-BOX"
    },
    {
     "kind": "adjective",
     "of": "BUTTON"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BLACK-BOX"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "BUTTON"
    }
   ]
  },
  "PANEL": {
   "word": "PANEL",
   "roles": [
    {
     "kind": "noun",
     "of": "PUNCH-PANEL"
    },
    {
     "kind": "noun",
     "of": "PICTURE-PANELS"
    }
   ]
  },
  "BRICK": {
   "word": "BRICK",
   "roles": [
    {
     "kind": "noun",
     "of": "BRICK-ONE"
    },
    {
     "kind": "noun",
     "of": "BRICK-NINE"
    },
    {
     "kind": "noun",
     "of": "BRICK-EIGHT"
    },
    {
     "kind": "noun",
     "of": "BRICK-SEVEN"
    },
    {
     "kind": "noun",
     "of": "BRICK-SIX"
    },
    {
     "kind": "noun",
     "of": "BRICK-FIVE"
    },
    {
     "kind": "noun",
     "of": "BRICK-FOUR"
    },
    {
     "kind": "noun",
     "of": "BRICK-THREE"
    },
    {
     "kind": "noun",
     "of": "BRICK-TWO"
    }
   ]
  },
  "BRICKS": {
   "word": "BRICKS",
   "roles": [
    {
     "kind": "noun",
     "of": "BRICK-ONE"
    },
    {
     "kind": "noun",
     "of": "BRICK-NINE"
    },
    {
     "kind": "noun",
     "of": "BRICK-EIGHT"
    },
    {
     "kind": "noun",
     "of": "BRICK-SEVEN"
    },
    {
     "kind": "noun",
     "of": "BRICK-SIX"
    },
    {
     "kind": "noun",
     "of": "BRICK-FIVE"
    },
    {
     "kind": "noun",
     "of": "BRICK-FOUR"
    },
    {
     "kind": "noun",
     "of": "BRICK-THREE"
    },
    {
     "kind": "noun",
     "of": "BRICK-TWO"
    }
   ]
  },
  "NINTH": {
   "word": "NINTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK-NINE"
    }
   ]
  },
  "EIGHTH": {
   "word": "EIGHTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK-EIGHT"
    }
   ]
  },
  "SEVENTH": {
   "word": "SEVENTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK-SEVEN"
    }
   ]
  },
  "SIXTH": {
   "word": "SIXTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK-SIX"
    }
   ]
  },
  "FIFTH": {
   "word": "FIFTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRICK-FIVE"
    }
   ]
  },
  "CLUSTE": {
   "word": "CLUSTE",
   "roles": [
    {
     "kind": "noun",
     "of": "NEPHTH-JEWEL"
    },
    {
     "kind": "noun",
     "of": "HERRING-JEWEL"
    },
    {
     "kind": "noun",
     "of": "SELKIS-JEWEL"
    },
    {
     "kind": "noun",
     "of": "ISIS-JEWEL"
    },
    {
     "kind": "noun",
     "of": "NEITH-JEWEL"
    }
   ]
  },
  "DIAMON": {
   "word": "DIAMON",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEPHTH-JEWEL"
    }
   ]
  },
  "GOLDEN": {
   "word": "GOLDEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "HERRING-JEWEL"
    },
    {
     "kind": "adjective",
     "of": "GOLD-CUP"
    }
   ]
  },
  "GOLD": {
   "word": "GOLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "HERRING-JEWEL"
    },
    {
     "kind": "adjective",
     "of": "PICTURE-PANELS"
    },
    {
     "kind": "adjective",
     "of": "GOLD-LEAF"
    },
    {
     "kind": "adjective",
     "of": "GOLD-CUP"
    }
   ]
  },
  "RUBY": {
   "word": "RUBY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SELKIS-JEWEL"
    }
   ]
  },
  "EMERAL": {
   "word": "EMERAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "ISIS-JEWEL"
    }
   ]
  },
  "OPAL": {
   "word": "OPAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "NEITH-JEWEL"
    }
   ]
  },
  "LIGHTS": {
   "word": "LIGHTS",
   "roles": [
    {
     "kind": "noun",
     "of": "TWINKLERS"
    }
   ]
  },
  "PATTER": {
   "word": "PATTER",
   "roles": [
    {
     "kind": "noun",
     "of": "TWINKLERS"
    }
   ]
  },
  "THOUSA": {
   "word": "THOUSA",
   "roles": [
    {
     "kind": "adjective",
     "of": "TWINKLERS"
    }
   ]
  },
  "TINY": {
   "word": "TINY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TWINKLERS"
    },
    {
     "kind": "adjective",
     "of": "NEEDLE"
    }
   ]
  },
  "LAZULI": {
   "word": "LAZULI",
   "roles": [
    {
     "kind": "noun",
     "of": "GEMS"
    }
   ]
  },
  "OBSIDI": {
   "word": "OBSIDI",
   "roles": [
    {
     "kind": "noun",
     "of": "GEMS"
    }
   ]
  },
  "JASPER": {
   "word": "JASPER",
   "roles": [
    {
     "kind": "noun",
     "of": "GEMS"
    }
   ]
  },
  "GEMS": {
   "word": "GEMS",
   "roles": [
    {
     "kind": "noun",
     "of": "GEMS"
    },
    {
     "kind": "noun",
     "of": "GEMS-2"
    }
   ]
  },
  "LAPIS": {
   "word": "LAPIS",
   "roles": [
    {
     "kind": "adjective",
     "of": "GEMS"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GEMS"
    },
    {
     "kind": "adjective",
     "of": "GEMS-2"
    },
    {
     "kind": "adjective",
     "of": "PICTURE-PANELS"
    }
   ]
  },
  "INKY-": {
   "word": "INKY-",
   "roles": [
    {
     "kind": "adjective",
     "of": "GEMS"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GEMS"
    },
    {
     "kind": "adjective",
     "of": "GEMS-2"
    }
   ]
  },
  "JET-B": {
   "word": "JET-B",
   "roles": [
    {
     "kind": "adjective",
     "of": "GEMS"
    }
   ]
  },
  "CARNEL": {
   "word": "CARNEL",
   "roles": [
    {
     "kind": "noun",
     "of": "GEMS-2"
    }
   ]
  },
  "FELDSP": {
   "word": "FELDSP",
   "roles": [
    {
     "kind": "noun",
     "of": "GEMS-2"
    }
   ]
  },
  "YELLOW": {
   "word": "YELLOW",
   "roles": [
    {
     "kind": "adjective",
     "of": "GEMS-2"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "GEMS-2"
    }
   ]
  },
  "HEAD": {
   "word": "HEAD",
   "roles": [
    {
     "kind": "noun",
     "of": "HEAD"
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
  "BASIE": {
   "word": "BASIE",
   "roles": [
    {
     "kind": "noun",
     "of": "BASIE"
    }
   ]
  },
  "GASOLI": {
   "word": "GASOLI",
   "roles": [
    {
     "kind": "noun",
     "of": "PETROL"
    }
   ]
  },
  "PETROL": {
   "word": "PETROL",
   "roles": [
    {
     "kind": "noun",
     "of": "PETROL"
    }
   ]
  },
  "HAMMER": {
   "word": "HAMMER",
   "roles": [
    {
     "kind": "noun",
     "of": "FOO-TOOL"
    }
   ]
  },
  "CROWBA": {
   "word": "CROWBA",
   "roles": [
    {
     "kind": "noun",
     "of": "FOO-TOOL"
    }
   ]
  },
  "EXPLOS": {
   "word": "EXPLOS",
   "roles": [
    {
     "kind": "noun",
     "of": "FOO-TOOL"
    }
   ]
  },
  "MACHET": {
   "word": "MACHET",
   "roles": [
    {
     "kind": "noun",
     "of": "FOO-TOOL"
    }
   ]
  },
  "DRACULA": {
   "word": "DRACULA",
   "roles": [
    {
     "kind": "noun",
     "of": "DRACULA"
    }
   ]
  },
  "FINGER": {
   "word": "FINGER",
   "roles": [
    {
     "kind": "noun",
     "of": "FINGER"
    }
   ]
  },
  "BLESSI": {
   "word": "BLESSI",
   "roles": [
    {
     "kind": "noun",
     "of": "BLESSINGS"
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
  "INTDIR": {
   "word": "INTDIR",
   "roles": [
    {
     "kind": "noun",
     "of": "INTDIR"
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
  "AIR": {
   "word": "AIR",
   "roles": [
    {
     "kind": "noun",
     "of": "AIR"
    }
   ]
  },
  "OXYGEN": {
   "word": "OXYGEN",
   "roles": [
    {
     "kind": "noun",
     "of": "AIR"
    }
   ]
  },
  "SKY": {
   "word": "SKY",
   "roles": [
    {
     "kind": "noun",
     "of": "AIR"
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
  "GROUND": {
   "word": "GROUND",
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
  "CRACK": {
   "word": "CRACK",
   "roles": [
    {
     "kind": "noun",
     "of": "CRACK"
    }
   ]
  },
  "DESERT": {
   "word": "DESERT",
   "roles": [
    {
     "kind": "noun",
     "of": "SAND"
    }
   ]
  },
  "ENLARG": {
   "word": "ENLARG",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE"
    }
   ]
  },
  "SIZABL": {
   "word": "SIZABL",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE"
    }
   ]
  },
  "KNEE-": {
   "word": "KNEE-",
   "roles": [
    {
     "kind": "adjective",
     "of": "HOLE"
    }
   ]
  },
  "PEN": {
   "word": "PEN",
   "roles": [
    {
     "kind": "noun",
     "of": "PEN-PENCIL"
    }
   ]
  },
  "PENCIL": {
   "word": "PENCIL",
   "roles": [
    {
     "kind": "noun",
     "of": "PEN-PENCIL"
    }
   ]
  },
  "STONES": {
   "word": "STONES",
   "roles": [
    {
     "kind": "noun",
     "of": "STONES"
    }
   ]
  },
  "BLOCKS": {
   "word": "BLOCKS",
   "roles": [
    {
     "kind": "noun",
     "of": "STONES"
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
  "BULKHE": {
   "word": "BULKHE",
   "roles": [
    {
     "kind": "noun",
     "of": "BULKHEADS"
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
  "HANDS": {
   "word": "HANDS",
   "roles": [
    {
     "kind": "noun",
     "of": "HANDS"
    }
   ]
  },
  "PLAYER": {
   "word": "PLAYER",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURER"
    }
   ]
  },
  "ADVENT": {
   "word": "ADVENT",
   "roles": [
    {
     "kind": "noun",
     "of": "ADVENTURER"
    },
    {
     "kind": "noun",
     "of": "SKELETON"
    }
   ]
  },
  "CRETIN": {
   "word": "CRETIN",
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
  "DOORWAY": {
   "word": "DOORWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "DOORWAY"
    }
   ]
  },
  "ARCHED": {
   "word": "ARCHED",
   "roles": [
    {
     "kind": "adjective",
     "of": "DOORWAY"
    }
   ]
  },
  "PANELS": {
   "word": "PANELS",
   "roles": [
    {
     "kind": "noun",
     "of": "PICTURE-PANELS"
    }
   ]
  },
  "CLAY": {
   "word": "CLAY",
   "roles": [
    {
     "kind": "adjective",
     "of": "PICTURE-PANELS"
    }
   ]
  },
  "BEATEN": {
   "word": "BEATEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "PICTURE-PANELS"
    }
   ]
  },
  "STAIRS": {
   "word": "STAIRS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    },
    {
     "kind": "noun",
     "of": "NORTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "EAST-STAIRS"
    },
    {
     "kind": "noun",
     "of": "SOUTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "WEST-STAIRS"
    },
    {
     "kind": "noun",
     "of": "FEW-STEPS"
    }
   ]
  },
  "STEPS": {
   "word": "STEPS",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
    },
    {
     "kind": "noun",
     "of": "NORTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "EAST-STAIRS"
    },
    {
     "kind": "noun",
     "of": "SOUTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "WEST-STAIRS"
    },
    {
     "kind": "noun",
     "of": "FEW-STEPS"
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
  "PARACH": {
   "word": "PARACH",
   "roles": [
    {
     "kind": "noun",
     "of": "PARACHUTE"
    }
   ]
  },
  "CHUTE": {
   "word": "CHUTE",
   "roles": [
    {
     "kind": "noun",
     "of": "PARACHUTE"
    }
   ]
  },
  "PLANE": {
   "word": "PLANE",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANE"
    }
   ]
  },
  "AIRPLA": {
   "word": "AIRPLA",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANE"
    }
   ]
  },
  "PILOT": {
   "word": "PILOT",
   "roles": [
    {
     "kind": "noun",
     "of": "PLANE"
    }
   ]
  },
  "SYMBOL": {
   "word": "SYMBOL",
   "roles": [
    {
     "kind": "noun",
     "of": "HIEROGLYPHS"
    }
   ]
  },
  "HIEROG": {
   "word": "HIEROG",
   "roles": [
    {
     "kind": "noun",
     "of": "HIEROGLYPHS"
    }
   ]
  },
  "GLYPHS": {
   "word": "GLYPHS",
   "roles": [
    {
     "kind": "noun",
     "of": "HIEROGLYPHS"
    }
   ]
  },
  "STRANGE": {
   "word": "STRANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "HIEROGLYPHS"
    }
   ]
  },
  "PAINTI": {
   "word": "PAINTI",
   "roles": [
    {
     "kind": "noun",
     "of": "PICTURES"
    }
   ]
  },
  "PICTUR": {
   "word": "PICTUR",
   "roles": [
    {
     "kind": "noun",
     "of": "PICTURES"
    }
   ]
  },
  "PILLARS": {
   "word": "PILLARS",
   "roles": [
    {
     "kind": "noun",
     "of": "PILLARS"
    }
   ]
  },
  "BARGE": {
   "word": "BARGE",
   "roles": [
    {
     "kind": "noun",
     "of": "BOAT"
    }
   ]
  },
  "BOAT": {
   "word": "BOAT",
   "roles": [
    {
     "kind": "noun",
     "of": "BOAT"
    }
   ]
  },
  "SHIP": {
   "word": "SHIP",
   "roles": [
    {
     "kind": "noun",
     "of": "BOAT"
    }
   ]
  },
  "DECK": {
   "word": "DECK",
   "roles": [
    {
     "kind": "noun",
     "of": "DECK"
    }
   ]
  },
  "DECKIN": {
   "word": "DECKIN",
   "roles": [
    {
     "kind": "noun",
     "of": "DECK"
    }
   ]
  },
  "FLAP": {
   "word": "FLAP",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAPS"
    }
   ]
  },
  "FLAPS": {
   "word": "FLAPS",
   "roles": [
    {
     "kind": "noun",
     "of": "FLAPS"
    }
   ]
  },
  "STAIRC": {
   "word": "STAIRC",
   "roles": [
    {
     "kind": "noun",
     "of": "NORTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "EAST-STAIRS"
    },
    {
     "kind": "noun",
     "of": "SOUTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "WEST-STAIRS"
    }
   ]
  },
  "STAIR": {
   "word": "STAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "NORTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "EAST-STAIRS"
    },
    {
     "kind": "noun",
     "of": "SOUTH-STAIRS"
    },
    {
     "kind": "noun",
     "of": "WEST-STAIRS"
    }
   ]
  },
  "STEEP": {
   "word": "STEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "NORTH-STAIRS"
    }
   ]
  },
  "WIDE": {
   "word": "WIDE",
   "roles": [
    {
     "kind": "adjective",
     "of": "EAST-STAIRS"
    }
   ]
  },
  "WINDIN": {
   "word": "WINDIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "SOUTH-STAIRS"
    }
   ]
  },
  "NARROW": {
   "word": "NARROW",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEST-STAIRS"
    }
   ]
  },
  "FEW": {
   "word": "FEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "FEW-STEPS"
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
  "TORCH": {
   "word": "TORCH",
   "roles": [
    {
     "kind": "noun",
     "of": "TORCH"
    }
   ]
  },
  "WICK": {
   "word": "WICK",
   "roles": [
    {
     "kind": "noun",
     "of": "TORCH"
    }
   ]
  },
  "BRONZE": {
   "word": "BRONZE",
   "roles": [
    {
     "kind": "adjective",
     "of": "TORCH"
    }
   ]
  },
  "JAR": {
   "word": "JAR",
   "roles": [
    {
     "kind": "noun",
     "of": "OIL-JAR"
    }
   ]
  },
  "PINK": {
   "word": "PINK",
   "roles": [
    {
     "kind": "adjective",
     "of": "OIL-JAR"
    }
   ]
  },
  "ALABAS": {
   "word": "ALABAS",
   "roles": [
    {
     "kind": "adjective",
     "of": "OIL-JAR"
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
  "OIL": {
   "word": "OIL",
   "roles": [
    {
     "kind": "noun",
     "of": "LIQUID"
    }
   ]
  },
  "LEAF": {
   "word": "LEAF",
   "roles": [
    {
     "kind": "noun",
     "of": "GOLD-LEAF"
    }
   ]
  },
  "SILVER": {
   "word": "SILVER",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOLD-LEAF"
    },
    {
     "kind": "adjective",
     "of": "SILVER-CUP"
    }
   ]
  },
  "CUP": {
   "word": "CUP",
   "roles": [
    {
     "kind": "noun",
     "of": "GOLD-CUP"
    },
    {
     "kind": "noun",
     "of": "SILVER-CUP"
    }
   ]
  },
  "CHALIC": {
   "word": "CHALIC",
   "roles": [
    {
     "kind": "noun",
     "of": "GOLD-CUP"
    },
    {
     "kind": "noun",
     "of": "SILVER-CUP"
    }
   ]
  },
  "LINE": {
   "word": "LINE",
   "roles": [
    {
     "kind": "noun",
     "of": "LINE"
    }
   ]
  },
  "SKELET": {
   "word": "SKELET",
   "roles": [
    {
     "kind": "noun",
     "of": "SKELETON"
    }
   ]
  },
  "REMAIN": {
   "word": "REMAIN",
   "roles": [
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
  "BONY": {
   "word": "BONY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SKELETON"
    },
    {
     "kind": "adjective",
     "of": "DIGITS"
    }
   ]
  },
  "DIGITS": {
   "word": "DIGITS",
   "roles": [
    {
     "kind": "noun",
     "of": "DIGITS"
    }
   ]
  },
  "CALCIF": {
   "word": "CALCIF",
   "roles": [
    {
     "kind": "adjective",
     "of": "DIGITS"
    }
   ]
  },
  "RING": {
   "word": "RING",
   "roles": [
    {
     "kind": "noun",
     "of": "RING"
    }
   ]
  },
  "JEWELE": {
   "word": "JEWELE",
   "roles": [
    {
     "kind": "adjective",
     "of": "RING"
    }
   ]
  },
  "NEEDLE": {
   "word": "NEEDLE",
   "roles": [
    {
     "kind": "noun",
     "of": "NEEDLE"
    }
   ]
  }
 },
 "files": [
  "a1.zil",
  "ante.zil",
  "barge.zil",
  "camp.zil",
  "clock.zil",
  "crufty.zil",
  "cube.zil",
  "diamond.zil",
  "globals.zil",
  "infidel.zil",
  "interrupts.zil",
  "macros.zil",
  "main.zil",
  "parser.zil",
  "ra.zil",
  "syntax.zil",
  "temple.zil",
  "verbs.zil",
  "zload.zil",
  "zmain.zil"
 ]
};
