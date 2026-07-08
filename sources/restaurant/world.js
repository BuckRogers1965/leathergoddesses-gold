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
  "HATCHWAY": {
   "name": "HATCHWAY",
   "file": "magrathea.zil",
   "line": 9,
   "endLine": 17,
   "desc": "Hatchway",
   "ldesc": null,
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
    "STAIRS",
    "HEART-OF-GOLD",
    "HATCH"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RAMP",
     "kind": "conditional",
     "condition": "HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "RAMP",
     "kind": "conditional",
     "condition": "HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "RAMP",
     "kind": "conditional",
     "condition": "HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM HATCHWAY\n      (LOC ROOMS)\n      (DESC \"Hatchway\")\n      (DOWN TO RAMP IF HATCH IS OPEN)\n      (OUT TO RAMP IF HATCH IS OPEN)\n      (SOUTH TO RAMP IF HATCH IS OPEN)\n      (FLAGS ONBIT RLANDBIT)\n      (GLOBAL STAIRS HEART-OF-GOLD HATCH)\n      ;(ACTION HATCHWAY-F)>",
   "referencedBy": [
    "HATCH-F"
   ]
  },
  "RAMP": {
   "name": "RAMP",
   "file": "magrathea.zil",
   "line": 46,
   "endLine": 68,
   "desc": "On the Ramp",
   "ldesc": null,
   "fdesc": "You are on the ramp leading from the starship Heart of Gold down to the\nsurface of the legendary lost planet of Magrathea, which isn't.  Lost,\nthat is.  It isn't lost because if it were, you wouldn't be here, but\nyou are, so it isn't.  If the logic of all that is too much for you,\njust go down to the surface or up to the hatchway.  Go anywhere else and\nyou'll just get into awful difficulties.  Not that you'll take any\nnotice, of course; just don't say you weren't warned.",
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
    "HATCH"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "HATCHWAY",
     "kind": "conditional",
     "condition": "HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "HATCHWAY",
     "kind": "conditional",
     "condition": "HATCH IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "BLIGHTED-GROUND",
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
     "message": "You bang you head against the ship's side.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "FALL-OFF-RAMP",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You bang you head against the ship's side.",
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You bang you head against the ship's side.",
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "FALL-OFF-RAMP",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "FALL-OFF-RAMP",
     "message": null,
     "dir": "SW"
    },
    {
     "to": "BLIGHTED-GROUND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "PLAYER",
    "MARVIN",
    "FORD",
    "ZAPHOD",
    "TRILLIAN",
    "RED-FROB",
    "GREEN-FROB"
   ],
   "source": "<ROOM RAMP\n      \t(LOC ROOMS)\n\t(DESC \"On the Ramp\")\n\t(FDESC \n\"You are on the ramp leading from the starship Heart of Gold down to the\nsurface of the legendary lost planet of Magrathea, which isn't.  Lost,\nthat is.  It isn't lost because if it were, you wouldn't be here, but\nyou are, so it isn't.  If the logic of all that is too much for you,\njust go down to the surface or up to the hatchway.  Go anywhere else and\nyou'll just get into awful difficulties.  Not that you'll take any\nnotice, of course; just don't say you weren't warned.\")\n\t(NORTH TO HATCHWAY IF HATCH IS OPEN)\n\t(UP TO HATCHWAY IF HATCH IS OPEN)\n\t(SOUTH TO BLIGHTED-GROUND)\n\t(WEST SORRY \"You bang you head against the ship's side.\")\n\t(EAST PER FALL-OFF-RAMP)\n\t(NE SORRY \"You bang you head against the ship's side.\")\n\t(NW SORRY \"You bang you head against the ship's side.\")\n\t(SE PER FALL-OFF-RAMP)\n\t(SW PER FALL-OFF-RAMP)\n\t(DOWN TO BLIGHTED-GROUND)\n\t(GLOBAL HATCH)\n\t(FLAGS RLANDBIT ONBIT ;COLDBIT)>",
   "referencedBy": [
    "HATCH-F",
    "GUIDE-F"
   ]
  },
  "BLIGHTED-GROUND": {
   "name": "BLIGHTED-GROUND",
   "file": "magrathea.zil",
   "line": 84,
   "endLine": 102,
   "desc": "Blighted Ground",
   "ldesc": "The surface of Magrathea is barren and inhospitable: a cold, constant\nwind, a sifting of dust, no sign of life or movement.  In short, it is not\nunlike a Chinese restaurant after 11.00 at night when they all want to go \nhome.  The only difference is that there isn't a little silent gang of\nwaiters staring sullenly at the back of your neck.  The ramp lies upwards to\nthe north; to the south-east, there's an unhealthy-looking crater.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONLANDBIT",
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
     "to": "RAMP",
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
     "per": "WANDER-AROUND",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WANDER-AROUND",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WANDER-AROUND",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WANDER-AROUND",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WANDER-AROUND",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WANDER-AROUND",
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM BLIGHTED-GROUND\n\t(LOC ROOMS)\n\t(DESC \"Blighted Ground\")\n\t(LDESC\n\"The surface of Magrathea is barren and inhospitable: a cold, constant\nwind, a sifting of dust, no sign of life or movement.  In short, it is not\nunlike a Chinese restaurant after 11.00 at night when they all want to go \nhome.  The only difference is that there isn't a little silent gang of\nwaiters staring sullenly at the back of your neck.  The ramp lies upwards to\nthe north; to the south-east, there's an unhealthy-looking crater.\")\n\t(NORTH TO RAMP)\n\t(SOUTH PER WANDER-AROUND)\n\t(WEST PER WANDER-AROUND)\n\t(EAST PER WANDER-AROUND)\n\t(NE PER WANDER-AROUND)\n\t;(SE TO RIDGE1)\n\t(NW PER WANDER-AROUND)\n\t(SW PER WANDER-AROUND)\n\t(FLAGS ONLANDBIT ONBIT ;COLDBIT ;NOAIRBIT)>",
   "referencedBy": []
  },
  "LIP1": {
   "name": "LIP1",
   "file": "magrathea.zil",
   "line": 110,
   "endLine": 138,
   "desc": "Crater Lip",
   "ldesc": "You are on the rim of a great crater which continues to the south-west\nand south-east, while the blighted ground lies north-west",
   "fdesc": "The dusty ground rises here before falling away into a\ncrater.  The crater seems rather new, as if it had been created by the\nimpact of something huge and confused, travelling downwards at high\nvelocity.  It is as if a sperm whale had inexplicably materialized\nseveral miles above the surface of Magrathea and immediately plunged\ndownwards, reaching terminal velocity almost immediately, terminal\nincomprehension soon afterwards, and, finally, terminal impact just as\nit was wondering whether it was going to have a nice day.  This\nimpression is heightened by the shards of whalebone and meat you can see\nglistening here and there around the crater.\n\nThe crater continues south-west and south-east, and the blighted ground\nlies to the north-west.",
   "loc": "ROOMS",
   "flags": [
    "ONLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHALE-CRATER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DEATH-BY-BLUBBER",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "BLIGHTED-GROUND",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "LIP4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "LIP2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM LIP1\n\t(LOC ROOMS)\n\t(DESC \"Crater Lip\")\n\t(FDESC \"The dusty ground rises here before falling away into a\ncrater.  The crater seems rather new, as if it had been created by the\nimpact of something huge and confused, travelling downwards at high\nvelocity.  It is as if a sperm whale had inexplicably materialized\nseveral miles above the surface of Magrathea and immediately plunged\ndownwards, reaching terminal velocity almost immediately, terminal\nincomprehension soon afterwards, and, finally, terminal impact just as\nit was wondering whether it was going to have a nice day.  This\nimpression is heightened by the shards of whalebone and meat you can see\nglistening here and there around the crater.\n\nThe crater continues south-west and south-east, and the blighted ground\nlies to the north-west.\")\n\t(LDESC\n\"You are on the rim of a great crater which continues to the south-west\nand south-east, while the blighted ground lies north-west\")\n\t(WEST PER SLOPE-SCRAMBLE)\n\t(EAST PER SLOPE-SCRAMBLE)\n\t(NORTH PER SLOPE-SCRAMBLE)\n\t(SOUTH PER DEATH-BY-BLUBBER)\n\t(NW TO BLIGHTED-GROUND)\n\t(NE PER SLOPE-SCRAMBLE)\n\t(SW TO LIP4)\n\t(SE TO LIP2)\n\t(FLAGS ONLANDBIT ONBIT)\n\t(GLOBAL WHALE-CRATER)>",
   "referencedBy": []
  },
  "LIP2": {
   "name": "LIP2",
   "file": "magrathea.zil",
   "line": 155,
   "endLine": 170,
   "desc": "Crater Lip",
   "ldesc": "The rim of the whale crater continues northwest and\nsouthwest. The scene of the whale's final disiluusionment lies below\nyou, but there's no way down",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHALE-CRATER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DEATH-BY-BLUBBER",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "LIP1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "WANDER-AROUND",
     "message": null,
     "dir": "NE"
    },
    {
     "to": "LIP3",
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
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM\tLIP2\n\t(LOC ROOMS)\n\t(LDESC  \"The rim of the whale crater continues northwest and\nsouthwest. The scene of the whale's final disiluusionment lies below\nyou, but there's no way down\")\n\t(DESC \"Crater Lip\")\n\t(WEST PER DEATH-BY-BLUBBER)\n\t(EAST PER SLOPE-SCRAMBLE)\n\t(NORTH PER SLOPE-SCRAMBLE)\n\t(SOUTH PER SLOPE-SCRAMBLE)\n\t(NW TO LIP1)\n\t(NE PER WANDER-AROUND)\n\t(SW TO LIP3)\n\t(SE PER SLOPE-SCRAMBLE)\n\t(FLAGS ONLANDBIT ONBIT)\n\t(GLOBAL WHALE-CRATER)>",
   "referencedBy": []
  },
  "LIP3": {
   "name": "LIP3",
   "file": "magrathea.zil",
   "line": 172,
   "endLine": 187,
   "desc": "Crater Lip",
   "ldesc": "The crater lip continues north-east and north-west.\nBelow you is a build-your-own-dead-whale kit (glue not included).\nThere's no way down.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "ONLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHALE-CRATER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DEATH-BY-BLUBBER",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LIP2",
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
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LIP4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM\tLIP3\n\t(LOC ROOMS)\n\t(DESC \"Crater Lip\")\n\t(LDESC \"The crater lip continues north-east and north-west.\nBelow you is a build-your-own-dead-whale kit (glue not included).\nThere's no way down.\")\n\t(NORTH PER DEATH-BY-BLUBBER)\n\t(NE TO LIP2)\n\t(EAST PER SLOPE-SCRAMBLE)\n\t(SE PER SLOPE-SCRAMBLE)\n\t(SOUTH PER SLOPE-SCRAMBLE)\n\t(SW PER SLOPE-SCRAMBLE)\n\t(WEST PER SLOPE-SCRAMBLE)\n\t(NW TO LIP4)\n\t(FLAGS ONLANDBIT ONBIT)\n\t(GLOBAL WHALE-CRATER)>",
   "referencedBy": []
  },
  "LIP4": {
   "name": "LIP4",
   "file": "magrathea.zil",
   "line": 190,
   "endLine": 212,
   "desc": "Crater Lip",
   "ldesc": "The crater lip continues northeat and southeast here,\nand below you is a ledge.",
   "fdesc": "The crater lip continues northeast and southeast here, and below you is\na ledge.  If you fell from here to the ledge you would probably\nbreak and ankle and nobody would hear you screaming and you\nwould die from pain and exposure.  On the other hand, if you\nclimbed down carefully, you'd have no trouble.  So what are you\nmaking all the fuss about?",
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "ONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHALE-CRATER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LIP1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "LIP3",
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
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "SLOPE-SCRAMBLE",
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM\tLIP4\n\t(LOC ROOMS)\n\t(DESC \"Crater Lip\")\n\t(FDESC\n\"The crater lip continues northeast and southeast here, and below you is\na ledge.  If you fell from here to the ledge you would probably\nbreak and ankle and nobody would hear you screaming and you\nwould die from pain and exposure.  On the other hand, if you\nclimbed down carefully, you'd have no trouble.  So what are you\nmaking all the fuss about?\")\n \t(LDESC  \"The crater lip continues northeat and southeast here,\nand below you is a ledge.\")\n\t(NORTH PER SLOPE-SCRAMBLE)\n\t(NE TO LIP1)\n\t(EAST TO LEDGE)\n\t(DOWN TO LEDGE)\n\t(SE TO LIP3)\n\t(SOUTH PER SLOPE-SCRAMBLE)\n\t(SW PER SLOPE-SCRAMBLE)\n\t(WEST PER SLOPE-SCRAMBLE)\n\t(NW PER SLOPE-SCRAMBLE)\n\t(FLAGS ONBIT ONLANDBIT)\n\t(GLOBAL WHALE-CRATER)>",
   "referencedBy": []
  },
  "LEDGE": {
   "name": "LEDGE",
   "file": "magrathea.zil",
   "line": 215,
   "endLine": 235,
   "desc": "Ledge",
   "ldesc": "This ledge lies halfway between the crater lip and the floor of the whale\ncrater itself.",
   "fdesc": "This ledge lies halfway between the crater lip and the\nfloor of the whale crater itself. It doesn't seem quite like any ledge\nyou've encountered before, perhaps because of the pillars on either side\nof you and the rather nice wall - marble, perhaps, or ivory? - between\nyou and the steep but survivable slope down to the crater floor.",
   "loc": "ROOMS",
   "flags": [
    "ONBIT",
    "ONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WHALE-CRATER"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DEATH-BY-BLUBBER",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DEATH-BY-BLUBBER",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DOWN-TO-CRATER",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DEATH-BY-BLUBBER",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "DEATH-BY-BLUBBER",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You bang your head on the rock face.",
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You bang your head on the rock face.",
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM\tLEDGE\n\t(LOC ROOMS)\n\t(DESC \"Ledge\")\n\t(FDESC \"This ledge lies halfway between the crater lip and the\nfloor of the whale crater itself. It doesn't seem quite like any ledge\nyou've encountered before, perhaps because of the pillars on either side\nof you and the rather nice wall - marble, perhaps, or ivory? - between\nyou and the steep but survivable slope down to the crater floor.\")\n\t(LDESC\n\"This ledge lies halfway between the crater lip and the floor of the whale\ncrater itself.\")\n\t(NORTH PER DEATH-BY-BLUBBER)\n\t(NE PER DEATH-BY-BLUBBER)\n\t(EAST PER DOWN-TO-CRATER)\n\t(SE PER DEATH-BY-BLUBBER)\n\t(SOUTH PER DEATH-BY-BLUBBER)\n\t(SW SORRY \"You bang your head on the rock face.\")\n\t;(WEST PER UP-TO-LIP)\n\t(NW SORRY \"You bang your head on the rock face.\")\n\t(FLAGS ONBIT ONLANDBIT)\n\t(GLOBAL WHALE-CRATER)>",
   "referencedBy": []
  },
  "WHALE-CRATER": {
   "name": "WHALE-CRATER",
   "file": "magrathea.zil",
   "line": 245,
   "endLine": 251,
   "desc": "Crater",
   "ldesc": "This is the whale crater, liberally supplied with whale.",
   "fdesc": "The floor of this deeply crufty crater is splattered with all kinds of disgusting stuff.  Film at eleven.",
   "loc": "ROOMS",
   "flags": [
    "ONLANDBIT",
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
   "exits": [],
   "contents": [],
   "source": "<ROOM\tWHALE-CRATER\n\t(LOC ROOMS)\n\t(DESC \"Crater\")\n\t(FDESC\n\"The floor of this deeply crufty crater is splattered with all kinds of disgusting stuff.  Film at eleven.\")\n\t(LDESC \"This is the whale crater, liberally supplied with whale.\")\n\t(FLAGS ONLANDBIT ONBIT)>",
   "referencedBy": [
    "DOWN-TO-CRATER"
   ]
  },
  "PUB": {
   "name": "PUB",
   "file": "places.zil",
   "line": 217,
   "endLine": 224,
   "desc": "restaurant",
   "ldesc": null,
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT",
    "OUTSIDE"
   ],
   "synonyms": [
    "ALCOHOL"
   ],
   "adjectives": [],
   "action": "PUB-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WINDOW",
    "PUB-FURNISHINGS"
   ],
   "pseudo": [
    "<>",
    "PEOPLE",
    "UNIMPORTANT-THING-F"
   ],
   "otherProps": {},
   "exits": [],
   "contents": [
    "SANDWICH",
    "DINNER"
   ],
   "source": "<ROOM PUB\n      (LOC ROOMS)\n      (SYNONYM ALCOHOL)\n      (DESC \"restaurant\")\n      (FLAGS RLANDBIT ONBIT OUTSIDE)\n      (GLOBAL ;PUB-OBJECT WINDOW PUB-FURNISHINGS)\n      (THINGS <> PEOPLE UNIMPORTANT-THING-F)\n      (ACTION PUB-F)>",
   "referencedBy": [
    "FORD-F",
    "SANDWICH-F"
   ]
  },
  "GARGLE-BLASTER": {
   "name": "GARGLE-BLASTER",
   "file": "things.zil",
   "line": 417,
   "endLine": 421,
   "desc": "Pan-Galactic Gargle Blaster",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "BLASTER"
   ],
   "adjectives": [
    "PAN-GALACTIC",
    "GARGLE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM GARGLE-BLASTER\n      (LOC GLOBAL-OBJECTS)\n      (DESC \"Pan-Galactic Gargle Blaster\")\n      (ADJECTIVE PAN-GALACTIC GARGLE)\n      (SYNONYM BLASTER)>",
   "referencedBy": [
    "GUIDE-F"
   ]
  },
  "SCC": {
   "name": "SCC",
   "file": "things.zil",
   "line": 423,
   "endLine": 427,
   "desc": "Sirius Cybernetics Corporation",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "CORPORATION",
    "SCC"
   ],
   "adjectives": [
    "SIRIUS",
    "CYBERNETICS"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM SCC\n      (LOC GLOBAL-OBJECTS)\n      (DESC \"Sirius Cybernetics Corporation\")\n      (ADJECTIVE SIRIUS CYBERNETICS)\n      (SYNONYM CORPORATION SCC)>",
   "referencedBy": [
    "GUIDE-F"
   ]
  }
 },
 "objects": {
  "INTDIR": {
   "name": "INTDIR",
   "file": "defs.zil",
   "line": 38,
   "endLine": 41,
   "desc": "direction",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "NORTH",
    "NE",
    "EAST",
    "SE",
    "SOUTH",
    "SW",
    "WEST",
    "NW"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTDIR\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"direction\")\n\t(SYNONYM NORTH NE EAST SE SOUTH SW WEST NW)>",
   "referencedBy": [
    "THIS-IS-IT",
    "NO-NEED",
    "YOU-CANT",
    "PRINT-CONTENTS",
    "V-CHASTISE",
    "V-EXAMINE",
    "V-LEAP",
    "PRE-MOVE-DIR",
    "V-MOVE-DIR"
   ]
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "global.zil",
   "line": 4,
   "endLine": 17,
   "desc": "GO",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "CONTBIT",
    "DEAD",
    "DOORBIT",
    "FEMALEBIT",
    "INVISIBLE",
    "LIGHTBIT",
    "LOCKED",
    "MUNGBIT",
    "NARTICLEBIT",
    "NDESCBIT",
    "ONBIT",
    "OPENABLE",
    "OPENBIT",
    "PLURAL",
    "READBIT",
    "RMUNGBIT",
    "SEARCHBIT",
    "SECRETBIT",
    "SEENBIT",
    "SURFACEBIT",
    "TAKEBIT",
    "TOOLBIT",
    "TOUCHBIT",
    "TRANSBIT",
    "TRYTAKEBIT",
    "VEHBIT",
    "VOWELBIT",
    "WEAPONBIT",
    "WEARBIT",
    "WORNBIT"
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
    "GENERIC": [
     "0"
    ],
    "OWNER": [
     "0"
    ],
    "TEXT": [
     "0"
    ]
   },
   "contents": [
    "INTDIR",
    "LOCAL-GLOBALS",
    "FRUSTATION",
    "TURN",
    "IT",
    "FLOOR",
    "DANGER",
    "INTNUM",
    "YOU",
    "WALL",
    "GLOBAL-HERE",
    "SLEEP-GLOBAL",
    "LIGHT-GLOBAL",
    "HANDS",
    "HEAD",
    "EYES",
    "TEETH",
    "EARS",
    "THIRD-PLANET",
    "OBJECT-OF-GAME",
    "SKY",
    "HER",
    "HIM",
    "THEM",
    "SLEEVES",
    "GAME"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(DESC \"GO\")\n\t;(FDESC 0)\n\t(GENERIC 0)\n\t(GLOBAL STAIRS)\n\t(OWNER 0)\n\t(TEXT 0)\n\t(FLAGS\tCONTBIT DEAD DOORBIT FEMALEBIT\n\t\tINVISIBLE LIGHTBIT LOCKED MUNGBIT\n\t\tNARTICLEBIT NDESCBIT ONBIT OPENABLE OPENBIT\n\t\t;PERSONBIT PLURAL READBIT RMUNGBIT\n\t\tSEARCHBIT SECRETBIT SEENBIT SURFACEBIT\n\t\tTAKEBIT TOOLBIT TOUCHBIT TRANSBIT TRYTAKEBIT\n\t\tVEHBIT VOWELBIT WEAPONBIT WEARBIT WORNBIT)>",
   "referencedBy": [
    "PLAYER-F",
    "COM-CHECK",
    "HELD?",
    "ROOM-CHECK",
    "ACCESSIBLE?",
    "V-EXAMINE",
    "FAR-AWAY?",
    "V-FIND",
    "V-LOOK-UNDER",
    "PRE-PUT",
    "PRE-READ",
    "V-SEARCH-FOR",
    "PRE-TAKE",
    "PRE-TAKE-WITH"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "global.zil",
   "line": 19,
   "endLine": 24,
   "desc": "LG",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "L.G"
   ],
   "adjectives": [],
   "action": "LOCAL-GLOBALS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "STAIRS",
    "CHAIR",
    "TABLE-RANDOM",
    "HATCH",
    "WHALE-CRATER-BOX",
    "WINDOW",
    "PUB-FURNISHINGS",
    "HEART-OF-GOLD"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"LG\")\n\t(SYNONYM L.G)\n\t(FLAGS NARTICLEBIT)\n\t(ACTION LOCAL-GLOBALS-F)>",
   "referencedBy": [
    "LOCAL-GLOBALS-F",
    "SANDWICH-F",
    "ROOM-CHECK",
    "ACCESSIBLE?",
    "V-FIND",
    "V-LOOK-UNDER"
   ]
  },
  "FRUSTATION": {
   "name": "FRUSTATION",
   "file": "global.zil",
   "line": 31,
   "endLine": 35,
   "desc": "puzzle",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FRUSTRATION",
    "PROBLEM",
    "PUZZLE"
   ],
   "adjectives": [],
   "action": "FRUSTRATION-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FRUSTATION\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"puzzle\")\n\t(SYNONYM FRUSTRATION PROBLEM PUZZLE)\n\t(ACTION FRUSTRATION-F)>",
   "referencedBy": []
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "global.zil",
   "line": 41,
   "endLine": 47,
   "desc": "stairs",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "SEENBIT"
   ],
   "synonyms": [
    "STAIRS",
    "STAIRWAY",
    "STAIR"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"stairs\")\n\t(SYNONYM STAIRS STAIRWAY STAIR)\n\t;(GENERIC GENERIC-STAIRS)\n\t(FLAGS SEENBIT)\n\t;(ACTION UPSTAIRS-DOWNSTAIRS)>",
   "referencedBy": [
    "V-WALK"
   ]
  },
  "TURN": {
   "name": "TURN",
   "file": "global.zil",
   "line": 55,
   "endLine": 60,
   "desc": "turn",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "TURN",
    "TURNS",
    "MINUTE",
    "MINUTES"
   ],
   "adjectives": [
    "INT.NUM",
    "FULL"
   ],
   "action": "TURN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TURN\n\t(LOC GLOBAL-OBJECTS)\n\t(ADJECTIVE INT.NUM ;NUMBER FULL)\n\t(SYNONYM TURN TURNS MINUTE MINUTES)\n\t(DESC \"turn\" ;\"minute\")\n\t(ACTION TURN-F)>",
   "referencedBy": [
    "PRINT-THE",
    "V-WAIT",
    "V-WAIT-FOR",
    "V-WAIT-UNTIL"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "global.zil",
   "line": 67,
   "endLine": 72,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VOWELBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "IT",
    "THIS",
    "FUCKER",
    "SUCKER"
   ],
   "adjectives": [],
   "action": "IT-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT IT\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM IT THIS FUCKER SUCKER)\n\t(DESC \"it\")\n\t(FLAGS VOWELBIT NARTICLEBIT)\n\t(ACTION IT-F)>",
   "referencedBy": [
    "IT-F",
    "PRINT-THE",
    "THIS-IS-IT",
    "NO-PRONOUN?",
    "NOT-IT"
   ]
  },
  "FLOOR": {
   "name": "FLOOR",
   "file": "global.zil",
   "line": 82,
   "endLine": 88,
   "desc": "floor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "SEENBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "FLOOR",
    "GROUND",
    "CARPET",
    "RUG"
   ],
   "adjectives": [],
   "action": "FLOOR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FLOOR\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"floor\")\n\t;(ADJECTIVE DRAWING ;ROOM GREAT ;HALL)\n\t(SYNONYM FLOOR ;AREA GROUND CARPET RUG)\n\t(FLAGS SEENBIT SURFACEBIT OPENBIT)\n\t(ACTION FLOOR-F)>",
   "referencedBy": [
    "FLOOR-F",
    "YOU-CANT",
    "V-LOOK-DOWN",
    "PRE-PUT",
    "V-SIT",
    "PRE-TAKE"
   ]
  },
  "DANGER": {
   "name": "DANGER",
   "file": "global.zil",
   "line": 133,
   "endLine": 136,
   "desc": "danger",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "DANGER",
    "THREAT",
    "ATTACK"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DANGER\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"danger\")\n\t(SYNONYM DANGER THREAT ATTACK)>",
   "referencedBy": []
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "global.zil",
   "line": 138,
   "endLine": 141,
   "desc": "number",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "INT.NUM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT INTNUM\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM INT.NUM ;NUMBER)\n\t(DESC \"number\")>",
   "referencedBy": [
    "V-$VERIFY",
    "DESCRIBE-OBJECTS",
    "V-FOOTNOTE",
    "V-WAIT",
    "V-WAIT-FOR",
    "V-WAIT-UNTIL"
   ]
  },
  "YOU": {
   "name": "YOU",
   "file": "global.zil",
   "line": 143,
   "endLine": 148,
   "desc": "self",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
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
   "source": "<OBJECT YOU\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM YOU YOURSELF HIMSELF HERSELF)\n\t(DESC \"self\" ;\"himself or herself\")\n\t(FLAGS ;NARTICLEBIT)\n\t(ACTION YOU-F)>",
   "referencedBy": [
    "YOU-F",
    "PRE-ANALYZE",
    "PRE-TAKE",
    "PRE-TAKE-WITH"
   ]
  },
  "WALL": {
   "name": "WALL",
   "file": "global.zil",
   "line": 174,
   "endLine": 180,
   "desc": "wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "SEENBIT",
    "SURFACEBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "WALL",
    "WALLS",
    "BRICK",
    "BRICKS"
   ],
   "adjectives": [
    "BRICK",
    "NORTH",
    "SOUTH"
   ],
   "action": "WALL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WALL\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"wall\")\n\t(ADJECTIVE BRICK NORTH SOUTH)\n\t(SYNONYM WALL WALLS BRICK BRICKS)\n\t(FLAGS SEENBIT SURFACEBIT OPENBIT)\n\t(ACTION WALL-F)>",
   "referencedBy": [
    "WALL-F",
    "V-EXAMINE",
    "PRE-TAKE"
   ]
  },
  "GLOBAL-HERE": {
   "name": "GLOBAL-HERE",
   "file": "global.zil",
   "line": 196,
   "endLine": 203,
   "desc": "here",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HERE",
    "AREA",
    "ROOM",
    "PLACE"
   ],
   "adjectives": [
    "THIS"
   ],
   "action": "GLOBAL-HERE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-HERE\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"here\")\n\t(ADJECTIVE THIS)\n\t(SYNONYM HERE AREA ROOM PLACE)\n\t;(GENERIC GENERIC-ROOM)\n\t(FLAGS NARTICLEBIT)\n\t(ACTION GLOBAL-HERE-F)>",
   "referencedBy": [
    "GLOBAL-HERE-F",
    "THIS-IS-IT",
    "COM-CHECK",
    "PRE-THROUGH",
    "V-LOOK-INSIDE",
    "PRE-PUT",
    "V-SEARCH",
    "PRE-SEARCH-FOR",
    "V-SEARCH-FOR",
    "V-SIT",
    "V-STOP",
    "V-DISEMBARK",
    "V-WAIT-FOR"
   ]
  },
  "CHAIR": {
   "name": "CHAIR",
   "file": "global.zil",
   "line": 234,
   "endLine": 240,
   "desc": "chair",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "SEENBIT",
    "SURFACEBIT"
   ],
   "synonyms": [
    "CHAIR",
    "SEAT",
    "CHAIRS",
    "BENCH"
   ],
   "adjectives": [],
   "action": "CHAIR-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHAIR\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"chair\")\n\t;(ADJECTIVE WING)\n\t(SYNONYM CHAIR SEAT CHAIRS BENCH)\n\t(FLAGS SEENBIT SURFACEBIT ;VEHBIT)\n\t(ACTION CHAIR-F)>",
   "referencedBy": []
  },
  "TABLE-RANDOM": {
   "name": "TABLE-RANDOM",
   "file": "global.zil",
   "line": 247,
   "endLine": 253,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "SEENBIT"
   ],
   "synonyms": [
    "TABLE",
    "DESK"
   ],
   "adjectives": [],
   "action": "RANDOM-PSEUDO",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TABLE-RANDOM\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"table\")\n\t;(ADJECTIVE BILLIARD CARD)\n\t(SYNONYM TABLE DESK)\n\t(FLAGS SEENBIT)\n\t(ACTION RANDOM-PSEUDO)>",
   "referencedBy": []
  },
  "SLEEP-GLOBAL": {
   "name": "SLEEP-GLOBAL",
   "file": "global.zil",
   "line": 255,
   "endLine": 261,
   "desc": "sleep",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "SLEEP"
   ],
   "adjectives": [],
   "action": "SLEEP-GLOBAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SLEEP-GLOBAL\n\t(LOC GLOBAL-OBJECTS)\n\t;(ADJECTIVE ;SOME MY)\n\t(SYNONYM SLEEP)\n\t(DESC \"sleep\")\n\t(FLAGS NARTICLEBIT)\n\t(ACTION SLEEP-GLOBAL-F)>",
   "referencedBy": [
    "PLAYER-F",
    "COM-CHECK"
   ]
  },
  "LIGHT-GLOBAL": {
   "name": "LIGHT-GLOBAL",
   "file": "global.zil",
   "line": 287,
   "endLine": 293,
   "desc": "light",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "SEENBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "LIGHT",
    "LIGHTS",
    "LAMP",
    "MOONLIGHT"
   ],
   "adjectives": [
    "FLOOD",
    "MOON"
   ],
   "action": "LIGHT-GLOBAL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LIGHT-GLOBAL \n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"light\")\n\t(ADJECTIVE FLOOD MOON)\n\t(SYNONYM LIGHT LIGHTS LAMP MOONLIGHT)\n\t(FLAGS SEENBIT TRYTAKEBIT)\n\t(ACTION LIGHT-GLOBAL-F)>",
   "referencedBy": [
    "LIGHT-GLOBAL-F",
    "V-EXAMINE"
   ]
  },
  "HANDS": {
   "name": "HANDS",
   "file": "global.zil",
   "line": 318,
   "endLine": 325,
   "desc": "hand",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT",
    "TOUCHBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HANDS",
    "HAND"
   ],
   "adjectives": [
    "BARE"
   ],
   "action": "HANDS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "BODY-PARTS-OWNERS"
    ]
   },
   "contents": [],
   "source": "<OBJECT HANDS\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM HANDS HAND)\n\t(ADJECTIVE BARE ;MY)\n\t(OWNER BODY-PARTS-OWNERS)\n\t(DESC ;\"your \" \"hand\")\n\t(FLAGS NDESCBIT TOUCHBIT NARTICLEBIT)\n\t(ACTION HANDS-F)>",
   "referencedBy": [
    "START-SENTENCE",
    "SATCHEL-F",
    "HELD?",
    "V-EXAMINE",
    "V-FIND",
    "V-LOOK-UNDER",
    "PRE-PUT",
    "PRE-PUT-IN",
    "PRE-TAKE"
   ]
  },
  "HEAD": {
   "name": "HEAD",
   "file": "global.zil",
   "line": 376,
   "endLine": 382,
   "desc": "head",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HEAD",
    "FACE"
   ],
   "adjectives": [],
   "action": "HEAD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "BODY-PARTS-OWNERS"
    ]
   },
   "contents": [],
   "source": "<OBJECT HEAD\n\t(LOC GLOBAL-OBJECTS)\n\t(OWNER BODY-PARTS-OWNERS)\n\t(DESC ;\"your \" \"head\")\n\t(SYNONYM HEAD FACE)\n\t(FLAGS NARTICLEBIT)\n\t(ACTION HEAD-F)>",
   "referencedBy": [
    "START-SENTENCE",
    "TOWEL-F",
    "HELD?",
    "V-EXAMINE",
    "V-FIND",
    "V-LOOK-UNDER",
    "PRE-PUT"
   ]
  },
  "EYES": {
   "name": "EYES",
   "file": "global.zil",
   "line": 392,
   "endLine": 398,
   "desc": "eyes",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "EYE",
    "EYES"
   ],
   "adjectives": [],
   "action": "EYES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "BODY-PARTS-OWNERS"
    ]
   },
   "contents": [],
   "source": "<OBJECT EYES\n\t(LOC GLOBAL-OBJECTS)\n\t(OWNER BODY-PARTS-OWNERS)\n\t(DESC ;\"your \" \"eyes\")\n\t(SYNONYM EYE EYES)\n\t(FLAGS NARTICLEBIT)\n\t(ACTION EYES-F)>",
   "referencedBy": [
    "START-SENTENCE",
    "DONT-F",
    "TOWEL-F",
    "HELD?",
    "V-THROUGH",
    "V-EXAMINE",
    "V-FIND",
    "V-LOOK-UNDER",
    "PRE-PUT-IN"
   ]
  },
  "TEETH": {
   "name": "TEETH",
   "file": "global.zil",
   "line": 406,
   "endLine": 410,
   "desc": "teeth",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "TEETH"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TEETH\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC ;\"your \" \"teeth\")\n\t(SYNONYM TEETH)\n\t(FLAGS NARTICLEBIT)>",
   "referencedBy": [
    "START-SENTENCE",
    "V-BRUSH",
    "V-EXAMINE",
    "V-FIND",
    "V-LOOK-UNDER"
   ]
  },
  "EARS": {
   "name": "EARS",
   "file": "global.zil",
   "line": 412,
   "endLine": 416,
   "desc": "ears",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "EAR",
    "EARS"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EARS\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC ;\"your \" \"ears\")\n\t(SYNONYM EAR EARS)\n\t(FLAGS NARTICLEBIT)>",
   "referencedBy": [
    "START-SENTENCE",
    "V-EXAMINE",
    "V-FIND",
    "V-LOOK-UNDER"
   ]
  },
  "THIRD-PLANET": {
   "name": "THIRD-PLANET",
   "file": "global.zil",
   "line": 418,
   "endLine": 424,
   "desc": "third planet",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PLANET",
    "EARTH"
   ],
   "adjectives": [
    "THIRD",
    "BLUE",
    "BLUE-GREEN",
    "GREEN",
    "SMALL"
   ],
   "action": "THIRD-PLANET-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT THIRD-PLANET\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"third planet\")\n\t(ADJECTIVE THIRD BLUE BLUE-GREEN GREEN SMALL)\n\t(SYNONYM PLANET EARTH)\n\t(FLAGS NDESCBIT)\n\t(ACTION THIRD-PLANET-F)>",
   "referencedBy": [
    "FORD-F",
    "GUIDE-F"
   ]
  },
  "OBJECT-OF-GAME": {
   "name": "OBJECT-OF-GAME",
   "file": "global.zil",
   "line": 434,
   "endLine": 439,
   "desc": "object of the game",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "VOWELBIT"
   ],
   "synonyms": [
    "OBJECT",
    "GAME",
    "GOAL"
   ],
   "adjectives": [],
   "action": "OBJECT-OF-GAME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT OBJECT-OF-GAME\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"object of the game\")\n\t(SYNONYM OBJECT GAME GOAL)\n\t(FLAGS VOWELBIT)\n\t(ACTION OBJECT-OF-GAME-F)>",
   "referencedBy": [
    "MARVIN-F",
    "COMMON-ASK-ABOUT"
   ]
  },
  "SKY": {
   "name": "SKY",
   "file": "global.zil",
   "line": 445,
   "endLine": 449,
   "desc": "sky",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "SKY"
   ],
   "adjectives": [],
   "action": "SKY-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SKY\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"sky\")\n\t(SYNONYM SKY)\n\t(ACTION SKY-F)>",
   "referencedBy": [
    "SKY-F",
    "V-LOOK-UP"
   ]
  },
  "HATCH": {
   "name": "HATCH",
   "file": "magrathea.zil",
   "line": 19,
   "endLine": 25,
   "desc": "hatch",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "HATCH",
    "DOOR"
   ],
   "adjectives": [
    "DOOR"
   ],
   "action": "HATCH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HATCH\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"hatch\")\n\t(ADJECTIVE DOOR) ;\"for debugging parser\"\n\t(SYNONYM HATCH ;HATCHWAY DOOR)\n\t(FLAGS DOORBIT OPENBIT)\n\t(ACTION HATCH-F)>",
   "referencedBy": [
    "HATCH-F"
   ]
  },
  "WHALE-CRATER-BOX": {
   "name": "WHALE-CRATER-BOX",
   "file": "magrathea.zil",
   "line": 241,
   "endLine": 243,
   "desc": null,
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "CONTBIT",
    "TRANSBIT",
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
   "source": "<OBJECT\tWHALE-CRATER-BOX\n\t(LOC LOCAL-GLOBALS)\n\t(FLAGS CONTBIT TRANSBIT NDESCBIT)>",
   "referencedBy": []
  },
  "HER": {
   "name": "HER",
   "file": "misc.zil",
   "line": 189,
   "endLine": 193,
   "desc": "her",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HER",
    "MADAM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HER\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM ;SHE HER MADAM)\n\t(DESC \"her\")\n\t(FLAGS NARTICLEBIT)>",
   "referencedBy": [
    "THIS-IS-IT",
    "NO-PRONOUN?",
    "NOT-IT"
   ]
  },
  "HIM": {
   "name": "HIM",
   "file": "misc.zil",
   "line": 195,
   "endLine": 199,
   "desc": "him",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HIM",
    "SIR"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HIM\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM ;HE HIM SIR)\n\t(DESC \"him\")\n\t(FLAGS NARTICLEBIT)>",
   "referencedBy": [
    "THIS-IS-IT",
    "NO-PRONOUN?",
    "NOT-IT"
   ]
  },
  "THEM": {
   "name": "THEM",
   "file": "misc.zil",
   "line": 201,
   "endLine": 205,
   "desc": "them",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "THEM"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT THEM\n\t(LOC GLOBAL-OBJECTS)\n\t(SYNONYM THEM)\n\t(DESC \"them\")\n\t(FLAGS NARTICLEBIT)>",
   "referencedBy": [
    "THIS-IS-IT",
    "NO-PRONOUN?",
    "NOT-IT"
   ]
  },
  "PLAYER": {
   "name": "PLAYER",
   "file": "people.zil",
   "line": 15,
   "endLine": 22,
   "desc": "yourself",
   "ldesc": null,
   "fdesc": null,
   "loc": "RAMP",
   "flags": [
    "NDESCBIT",
    "NARTICLEBIT",
    "SEARCHBIT",
    "PERSONBIT",
    "SEENBIT",
    "TOUCHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "ME",
    "MYSELF",
    "SELF"
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
    "SCREWDRIVER",
    "TOOTHBRUSH",
    "GOWN",
    "BABEL-FISH"
   ],
   "source": "<OBJECT PLAYER\n\t(LOC RAMP)\n\t(DESC \"yourself\")\n\t(SYNONYM ;\"I\" ME MYSELF SELF)\n\t(FLAGS NDESCBIT NARTICLEBIT SEARCHBIT PERSONBIT SEENBIT TOUCHBIT\n\t\t;TRANSBIT OPENBIT ;\"see GET-OBJECT\")\n\t(CHARACTER 0)\n\t(ACTION PLAYER-F)>",
   "referencedBy": [
    "YOU-F",
    "LIGHT-GLOBAL-F",
    "START-SENTENCE",
    "THIS-IS-IT",
    "NO-PRONOUN?",
    "HE-SHE-IT",
    "HIM-HER-IT",
    "PLAYER-F",
    "TRANSIT-TEST",
    "COM-CHECK",
    "COMMON-ASK-ABOUT",
    "SANDWICH-F",
    "TOOTHBRUSH-F",
    "GOWN-F",
    "I-THING",
    "V-INVENTORY",
    "PRINT-CONTENTS",
    "DESCRIBE-OBJECTS",
    "GOTO",
    "HELD?",
    "ITAKE",
    "SEE-INSIDE?",
    "ALREADY",
    "OKAY",
    "PRE-ASK",
    "V-ASK-ABOUT",
    "V-BOARD",
    "PRE-FIND",
    "TELL-LOCATION",
    "PRE-GIVE",
    "V-GIVE",
    "PRE-HELLO",
    "V-HELP",
    "V-KISS",
    "V-KNOCK",
    "V-SKIP",
    "WHEE",
    "V-LEAVE",
    "V-LOOK-INSIDE",
    "WEIGHT",
    "V-RUB",
    "V-SEARCH",
    "PRE-SEARCH-FOR",
    "V-SHOW",
    "PRE-SSHOW",
    "V-SIT",
    "V-SLAP",
    "V-STAND",
    "PRE-TAKE-WITH",
    "V-DISEMBARK",
    "OWN-FEET",
    "V-TELL",
    "PRE-TELL-ABOUT",
    "PRE-TALK-ABOUT",
    "V-WAIT-FOR",
    "OPEN-DOOR-AND-CLOSE-IT-AGAIN",
    "V-YES"
   ]
  },
  "MARVIN": {
   "name": "MARVIN",
   "file": "people.zil",
   "line": 159,
   "endLine": 171,
   "desc": "Marvin",
   "ldesc": "0",
   "fdesc": null,
   "loc": "RAMP",
   "flags": [
    "NARTICLEBIT",
    "PERSONBIT"
   ],
   "synonyms": [
    "MARVIN",
    "MARV",
    "ROBOT",
    "ANDROID"
   ],
   "adjectives": [
    "DEPRESSED",
    "PARANOID"
   ],
   "action": "MARVIN-F",
   "descfcn": "MARVIN-D",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Marvin, the Paranoid Android, looks very depressed."
    ],
    "LINE": [
     "0"
    ],
    "CHARACTER": [
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT MARVIN\n\t(LOC RAMP)\n\t(DESC \"Marvin\")\n\t(TEXT \"Marvin, the Paranoid Android, looks very depressed.\")\n\t(ADJECTIVE DEPRESSED PARANOID)\n\t(SYNONYM MARVIN MARV ROBOT ANDROID)\n\t(FLAGS NARTICLEBIT PERSONBIT)\n\t(LDESC 0)\n\t(WEST SORRY \"sulking\")\n\t(LINE 0)\t;\"unfriendliness\"\n\t(CHARACTER 1)\n\t(DESCFCN MARVIN-D)\n\t(ACTION MARVIN-F)>",
   "referencedBy": [
    "MARVIN-F",
    "MARVIN-D",
    "GUIDE-F"
   ]
  },
  "FORD": {
   "name": "FORD",
   "file": "people.zil",
   "line": 205,
   "endLine": 217,
   "desc": "Ford Prefect",
   "ldesc": "0",
   "fdesc": null,
   "loc": "RAMP",
   "flags": [
    "PERSONBIT",
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "FORD",
    "PREFECT"
   ],
   "adjectives": [
    "FORD",
    "MR"
   ],
   "action": "FORD-F",
   "descfcn": "FORD-D",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Ford is a Betelgeusan who could pass for an Earthling."
    ],
    "LINE": [
     "0"
    ],
    "CHARACTER": [
     "2"
    ]
   },
   "contents": [
    "TOWEL",
    "SATCHEL"
   ],
   "source": "<OBJECT FORD\n\t(LOC RAMP)\n\t(DESC \"Ford Prefect\")\n\t(TEXT \"Ford is a Betelgeusan who could pass for an Earthling.\")\n\t(ADJECTIVE FORD MR)\n\t(SYNONYM FORD PREFECT)\n\t(FLAGS PERSONBIT CONTBIT SEARCHBIT OPENBIT NARTICLEBIT)\n\t(LDESC 0)\n\t(WEST SORRY \"deep in thought\")\n\t(LINE 0)\t;\"unfriendliness\"\n\t(CHARACTER 2)\n\t(DESCFCN FORD-D)\n\t(ACTION FORD-F)>",
   "referencedBy": [
    "FORD-F",
    "FORD-D",
    "BEER-F",
    "SATCHEL-F"
   ]
  },
  "ZAPHOD": {
   "name": "ZAPHOD",
   "file": "people.zil",
   "line": 265,
   "endLine": 277,
   "desc": "Zaphod Beeblebrox",
   "ldesc": "0",
   "fdesc": null,
   "loc": "RAMP",
   "flags": [
    "NARTICLEBIT",
    "PERSONBIT"
   ],
   "synonyms": [
    "BEEBLEBROX",
    "ZAPHOD",
    "PRESIDENT"
   ],
   "adjectives": [
    "ZAPHOD",
    "PRESIDENT",
    "MR"
   ],
   "action": "ZAPHOD-F",
   "descfcn": "ZAPHOD-D",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Zaphod looks completely normal, except for his two heads."
    ],
    "LINE": [
     "0"
    ],
    "CHARACTER": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT ZAPHOD\n\t(LOC RAMP)\n\t(DESC \"Zaphod Beeblebrox\")\n\t(TEXT \"Zaphod looks completely normal, except for his two heads.\")\n\t(ADJECTIVE ZAPHOD PRESIDENT MR)\n\t(SYNONYM BEEBLEBROX ZAPHOD PRESIDENT)\n\t(FLAGS NARTICLEBIT PERSONBIT ;NDESCBIT)\n\t(LDESC 0)\n\t(WEST SORRY \"admiring himself\")\n\t(LINE 0)\t;\"unfriendliness\"\n\t(CHARACTER 3)\n\t(DESCFCN ZAPHOD-D)\n\t(ACTION ZAPHOD-F)>",
   "referencedBy": [
    "ZAPHOD-F",
    "ZAPHOD-D",
    "GUIDE-F"
   ]
  },
  "TRILLIAN": {
   "name": "TRILLIAN",
   "file": "people.zil",
   "line": 299,
   "endLine": 311,
   "desc": "Trillian",
   "ldesc": "0",
   "fdesc": null,
   "loc": "RAMP",
   "flags": [
    "NARTICLEBIT",
    "PERSONBIT",
    "CONTBIT",
    "OPENBIT",
    "FEMALE"
   ],
   "synonyms": [
    "TRILLIAN",
    "MCMILLAN",
    "WOMAN",
    "TRICIA"
   ],
   "adjectives": [
    "TRICIA",
    "DARK-HAIR",
    "DARK",
    "HAIRED",
    "MS"
   ],
   "action": "TRILLIAN-F",
   "descfcn": "TRILLIAN-D",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Tricia MacMillan is more attractive than most astrophysicists."
    ],
    "LINE": [
     "0"
    ],
    "CHARACTER": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT TRILLIAN\n\t(LOC RAMP)\n\t(DESC \"Trillian\")\n\t(TEXT \"Tricia MacMillan is more attractive than most astrophysicists.\")\n\t(ADJECTIVE TRICIA DARK-HAIR DARK HAIRED MS)\n\t(SYNONYM TRILLIAN MCMILLAN WOMAN TRICIA)\n\t(FLAGS NARTICLEBIT PERSONBIT ;NDESCBIT CONTBIT OPENBIT FEMALE)\n\t(LDESC 0)\n\t(WEST SORRY \"looking at you with pity\")\n\t(LINE 0)\t;\"unfriendliness\"\n\t(CHARACTER 4)\n\t(DESCFCN TRILLIAN-D)\n\t(ACTION TRILLIAN-F)>",
   "referencedBy": [
    "TRILLIAN-F",
    "TRILLIAN-D"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "places.zil",
   "line": 6,
   "endLine": 8,
   "desc": "that",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "NARTICLEBIT"
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
   "source": "<OBJECT ROOMS\n\t(DESC \"that\")\n\t(FLAGS NARTICLEBIT)>",
   "referencedBy": [
    "THE?",
    "THIS-IS-IT",
    "PLAYER-F",
    "COM-CHECK",
    "BEER-F",
    "DESCRIBE-ROOM",
    "HELD?",
    "ROOM-CHECK",
    "ACCESSIBLE?",
    "V-ASK-ABOUT",
    "PRE-BRUSH",
    "V-BOARD",
    "V-CLIMB-UP",
    "PRE-EAT",
    "PRE-THROUGH",
    "V-THROUGH",
    "V-EXAMINE",
    "PRE-FIND",
    "V-FIND",
    "PRE-HELLO",
    "V-LEAVE",
    "V-LOOK-DOWN",
    "V-LOOK-INSIDE",
    "V-LOOK-UP",
    "V-NOD",
    "V-SEARCH",
    "V-SEARCH-FOR",
    "PRE-SSHOW",
    "V-SLAP",
    "V-DISEMBARK",
    "V-HOLD-UP",
    "V-WAIT-FOR",
    "V-WAIT-UNTIL",
    "V-ALARM",
    "V-WALK",
    "WALK-THRU-DOOR?"
   ]
  },
  "WINDOW": {
   "name": "WINDOW",
   "file": "places.zil",
   "line": 123,
   "endLine": 130,
   "desc": "window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "SEENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "WINDOW",
    "WINDSHIELD",
    "WINDSCREEN",
    "DOOR"
   ],
   "adjectives": [],
   "action": "WINDOW-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WINDOW\n\t(LOC LOCAL-GLOBALS)\n\t(DESC ;\"room \" \"window\")\n\t;(ADJECTIVE ROOM)\n\t(SYNONYM WINDOW WINDSHIELD WINDSCREEN DOOR)\n\t;(GENERIC GENERIC-WINDOW)\n\t(FLAGS SEENBIT NDESCBIT)\n\t(ACTION WINDOW-F)>",
   "referencedBy": [
    "PRINT-THE",
    "WINDOW-F",
    "V-CLOSE",
    "V-KNOCK",
    "V-LOOK-INSIDE",
    "V-LOOK-THROUGH",
    "V-OPEN"
   ]
  },
  "PUB-FURNISHINGS": {
   "name": "PUB-FURNISHINGS",
   "file": "places.zil",
   "line": 253,
   "endLine": 259,
   "desc": "it",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "NARTICLEBIT"
   ],
   "synonyms": [
    "BEERMAT",
    "GLASSES",
    "BOTTLE",
    "GLASS"
   ],
   "adjectives": [
    "USUAL",
    "SOGGY"
   ],
   "action": "UNIMPORTANT-THING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PUB-FURNISHINGS\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"it\")\n\t(ADJECTIVE USUAL SOGGY)\n\t(SYNONYM BEERMAT GLASSES BOTTLE GLASS)\n\t(FLAGS NDESCBIT NARTICLEBIT)\n\t(ACTION UNIMPORTANT-THING-F)>",
   "referencedBy": []
  },
  "BEER": {
   "name": "BEER",
   "file": "places.zil",
   "line": 295,
   "endLine": 300,
   "desc": "lots of beer",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "DRINKBIT",
    "NARTICLEBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "LOTS",
    "BITTER",
    "PINT",
    "BEER"
   ],
   "adjectives": [],
   "action": "BEER-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BEER\n\t;(LOC PUB)\n\t(DESC \"lots of beer\")\n\t(SYNONYM LOTS BITTER PINT BEER)\n\t(FLAGS DRINKBIT NARTICLEBIT NDESCBIT)\n\t(ACTION BEER-F)>",
   "referencedBy": [
    "BEER-F"
   ]
  },
  "SANDWICH": {
   "name": "SANDWICH",
   "file": "places.zil",
   "line": 353,
   "endLine": 360,
   "desc": "cheese sandwich",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUB",
   "flags": [
    "NDESCBIT",
    "EATBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "PLATE",
    "SANDWICH"
   ],
   "adjectives": [
    "CHEESE",
    "UNINVITING"
   ],
   "action": "SANDWICH-F",
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
   "source": "<OBJECT SANDWICH\n\t(LOC PUB)\n\t(DESC \"cheese sandwich\")\n\t(ADJECTIVE CHEESE UNINVITING)\n\t(SYNONYM PLATE SANDWICH)\n\t(FLAGS NDESCBIT EATBIT TRYTAKEBIT)\n\t(SIZE 10)\n\t(ACTION SANDWICH-F)>",
   "referencedBy": [
    "SANDWICH-F"
   ]
  },
  "SCREWDRIVER": {
   "name": "SCREWDRIVER",
   "file": "things.zil",
   "line": 14,
   "endLine": 21,
   "desc": "flathead screwdriver",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "SCREWDRIV",
    "TOOL",
    "TOOLS"
   ],
   "adjectives": [
    "FLATHEAD",
    "PROPER"
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
   "source": "<OBJECT SCREWDRIVER\n\t(LOC PLAYER)\n\t(DESC \"flathead screwdriver\")\n\t(SYNONYM SCREWDRIV TOOL TOOLS)\n\t(ADJECTIVE FLATHEAD PROPER)\n\t(FLAGS TAKEBIT ;TRYTAKEBIT TOOLBIT)\n\t(SIZE 3)\n\t;(GENERIC TWEEZERS)>",
   "referencedBy": []
  },
  "TOOTHBRUSH": {
   "name": "TOOTHBRUSH",
   "file": "things.zil",
   "line": 23,
   "endLine": 31,
   "desc": "toothbrush",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "TOOTHBRUSH",
    "BRUSH",
    "TOOL",
    "TOOLS"
   ],
   "adjectives": [
    "TOOTH",
    "MY",
    "PROPER"
   ],
   "action": "TOOTHBRUSH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "PLAYER"
    ],
    "SIZE": [
     "3"
    ]
   },
   "contents": [],
   "source": "<OBJECT TOOTHBRUSH\n\t(LOC PLAYER)\n\t(OWNER PLAYER)\n\t(DESC \"toothbrush\")\n\t(ADJECTIVE TOOTH MY PROPER)\n\t(SYNONYM TOOTHBRUSH BRUSH TOOL TOOLS)\n\t(FLAGS TAKEBIT TRYTAKEBIT TOOLBIT)\n\t(SIZE 3)\n\t(ACTION TOOTHBRUSH-F)>",
   "referencedBy": [
    "TOOTHBRUSH-F",
    "V-BRUSH"
   ]
  },
  "GOWN": {
   "name": "GOWN",
   "file": "things.zil",
   "line": 46,
   "endLine": 56,
   "desc": "your gown",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "WORNBIT",
    "WEARBIT",
    "TAKEBIT",
    "CONTBIT",
    "NARTICLEBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "GOWN",
    "POCKET",
    "ROBE",
    "LOOP"
   ],
   "adjectives": [
    "MY",
    "DRESSING",
    "TATTY",
    "FADED",
    "BATTERED"
   ],
   "action": "GOWN-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "PLAYER"
    ],
    "SIZE": [
     "15"
    ],
    "CAPACITY": [
     "14"
    ]
   },
   "contents": [
    "THING"
   ],
   "source": "<OBJECT GOWN\n\t(LOC PLAYER)\n\t(OWNER PLAYER)\n\t(DESC \"your gown\")\n\t;(LDESC \"Your gown is here.\")\n\t(ADJECTIVE MY ;YOUR DRESSING TATTY FADED BATTERED)\n\t(SYNONYM GOWN POCKET ROBE LOOP)\n        (FLAGS WORNBIT WEARBIT TAKEBIT CONTBIT ;NDESCBIT NARTICLEBIT SEARCHBIT)\n\t(SIZE 15)\n\t(CAPACITY 14)\n\t(ACTION GOWN-F)>",
   "referencedBy": [
    "GOWN-F",
    "SLEEVES-F",
    "I-THING"
   ]
  },
  "SLEEVES": {
   "name": "SLEEVES",
   "file": "things.zil",
   "line": 93,
   "endLine": 97,
   "desc": "sleeve",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "SLEEVE"
   ],
   "adjectives": [],
   "action": "SLEEVES-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SLEEVES\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"sleeve\")\n\t(SYNONYM SLEEVE)\n\t(ACTION SLEEVES-F)>",
   "referencedBy": [
    "GOWN-F",
    "SLEEVES-F"
   ]
  },
  "THING": {
   "name": "THING",
   "file": "things.zil",
   "line": 121,
   "endLine": 129,
   "desc": "thing your aunt gave you which you don't know what it is",
   "ldesc": null,
   "fdesc": null,
   "loc": "GOWN",
   "flags": [
    "TAKEBIT",
    "CONTBIT",
    "SEARCHBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "THING",
    "GIFT"
   ],
   "adjectives": [
    "AUNT'S"
   ],
   "action": "THING-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "6"
    ],
    "CAPACITY": [
     "90"
    ]
   },
   "contents": [
    "BIG-BLUE-FROB",
    "SMALL-BLUE-FROB"
   ],
   "source": "<OBJECT THING\n\t(LOC GOWN)\n\t(DESC \"thing your aunt gave you which you don't know what it is\")\n\t(ADJECTIVE AUNT\\'S)\n\t(SYNONYM THING GIFT)\n\t(FLAGS TAKEBIT CONTBIT SEARCHBIT OPENBIT)\n\t(SIZE 6)\n\t(CAPACITY 90)\n\t(ACTION THING-F)>",
   "referencedBy": [
    "THING-F",
    "I-THING"
   ]
  },
  "GUIDE": {
   "name": "GUIDE",
   "file": "things.zil",
   "line": 171,
   "endLine": 180,
   "desc": "The Hitchhiker's Guide",
   "ldesc": null,
   "fdesc": null,
   "loc": "SATCHEL",
   "flags": [
    "NARTICLEBIT",
    "TAKEBIT",
    "READBIT"
   ],
   "synonyms": [
    "COPY",
    "GUIDE"
   ],
   "adjectives": [
    "HITCHHIKER'S",
    "SUB-ETHA"
   ],
   "action": "GUIDE-F",
   "descfcn": "GUIDE-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "TEXT": [
     "Try: CONSULT GUIDE ABOUT (something)."
    ]
   },
   "contents": [],
   "source": "<OBJECT GUIDE\n\t(LOC SATCHEL)\n\t(DESC \"The Hitchhiker's Guide\")\n\t(DESCFCN GUIDE-DESCFCN)\n\t(ADJECTIVE HITCHHIKER\\'S SUB-ETHA)\n\t(SYNONYM COPY GUIDE)\n\t(SIZE 10)\n\t(FLAGS NARTICLEBIT TAKEBIT READBIT)\n\t(TEXT \"Try: CONSULT GUIDE ABOUT (something).\")\n\t(ACTION GUIDE-F)>",
   "referencedBy": [
    "UNIMPORTANT-THING-F",
    "GUIDE-F"
   ]
  },
  "BABEL-FISH": {
   "name": "BABEL-FISH",
   "file": "things.zil",
   "line": 295,
   "endLine": 301,
   "desc": "babel fish",
   "ldesc": null,
   "fdesc": null,
   "loc": "PLAYER",
   "flags": [
    "TRYTAKEBIT",
    "WORNBIT"
   ],
   "synonyms": [
    "FISH"
   ],
   "adjectives": [
    "BABEL"
   ],
   "action": "BABEL-FISH-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BABEL-FISH\n\t(LOC PLAYER)\n\t(DESC \"babel fish\")\n\t(ADJECTIVE BABEL)\n\t(SYNONYM FISH)\n\t(FLAGS TRYTAKEBIT WORNBIT)\n\t(ACTION BABEL-FISH-F)>",
   "referencedBy": [
    "PLAYER-F",
    "GUIDE-F",
    "BABEL-FISH-F"
   ]
  },
  "TOWEL": {
   "name": "TOWEL",
   "file": "things.zil",
   "line": 309,
   "endLine": 316,
   "desc": "towel",
   "ldesc": null,
   "fdesc": null,
   "loc": "FORD",
   "flags": [
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "TOWEL",
    "TOWELS"
   ],
   "adjectives": [],
   "action": "TOWEL-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "7"
    ],
    "CAPACITY": [
     "40"
    ]
   },
   "contents": [],
   "source": "<OBJECT TOWEL\n\t(LOC FORD)\n\t(DESC \"towel\")\n        (SYNONYM TOWEL TOWELS)\n\t(FLAGS TAKEBIT TRYTAKEBIT)\n\t(SIZE 7)\n\t(CAPACITY 40)\n\t(ACTION TOWEL-F)>",
   "referencedBy": [
    "GUIDE-F",
    "TOWEL-F",
    "V-THROW-IN-TOWEL"
   ]
  },
  "SATCHEL": {
   "name": "SATCHEL",
   "file": "things.zil",
   "line": 354,
   "endLine": 364,
   "desc": "satchel",
   "ldesc": null,
   "fdesc": null,
   "loc": "FORD",
   "flags": [
    "CONTBIT",
    "SEARCHBIT",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SATCHEL"
   ],
   "adjectives": [
    "BATTERED",
    "LEATHER",
    "BULKY"
   ],
   "action": "SATCHEL-F",
   "descfcn": "SATCHEL-DESCFCN",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "FORD"
    ],
    "CAPACITY": [
     "30"
    ],
    "SIZE": [
     "20"
    ]
   },
   "contents": [
    "GUIDE"
   ],
   "source": "<OBJECT SATCHEL\n\t(LOC FORD)\n\t(OWNER FORD)\n\t(DESC \"satchel\")\n\t(DESCFCN SATCHEL-DESCFCN)\n\t(ADJECTIVE BATTERED LEATHER BULKY)\n\t(SYNONYM SATCHEL)\n\t(FLAGS CONTBIT SEARCHBIT TAKEBIT TRYTAKEBIT)\n\t(CAPACITY 30)\n\t(SIZE 20)\n\t(ACTION SATCHEL-F)>",
   "referencedBy": [
    "SATCHEL-F"
   ]
  },
  "HEART-OF-GOLD": {
   "name": "HEART-OF-GOLD",
   "file": "things.zil",
   "line": 429,
   "endLine": 435,
   "desc": "the Heart of Gold",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "HEART",
    "GOLD",
    "SHIP",
    "SPACESHIP"
   ],
   "adjectives": [
    "SPACE",
    "INCREDIBLE",
    "NEW"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HEART-OF-GOLD\n\t(LOC LOCAL-GLOBALS)\n\t(DESC \"the Heart of Gold\")\n\t(ADJECTIVE SPACE INCREDIBLE NEW)\n\t(SYNONYM HEART GOLD SHIP SPACESHIP)\n\t(FLAGS NARTICLEBIT)\n\t;(ACTION HEART-OF-GOLD-F)>",
   "referencedBy": [
    "GUIDE-F"
   ]
  },
  "GAME": {
   "name": "GAME",
   "file": "things.zil",
   "line": 437,
   "endLine": 442,
   "desc": "MILLIWAYS",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NARTICLEBIT"
   ],
   "synonyms": [
    "GAME",
    "MILLIWAYS"
   ],
   "adjectives": [],
   "action": "GAME-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GAME\n\t(LOC GLOBAL-OBJECTS)\n\t(DESC \"MILLIWAYS\")\n\t(SYNONYM GAME MILLIWAYS)\n\t(FLAGS NARTICLEBIT)\n\t(ACTION GAME-F)>",
   "referencedBy": [
    "HELP-TEXT"
   ]
  },
  "DINNER": {
   "name": "DINNER",
   "file": "things.zil",
   "line": 449,
   "endLine": 458,
   "desc": "your dinner",
   "ldesc": null,
   "fdesc": null,
   "loc": "PUB",
   "flags": [
    "NARTICLEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "DINNER",
    "FOOD",
    "DISHES",
    "PLATE"
   ],
   "adjectives": [
    "COVERED",
    "MY"
   ],
   "action": "DINNER-F",
   "descfcn": "DINNER-D",
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "OWNER": [
     "PLAYER"
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT DINNER\n\t(LOC PUB)\n\t(OWNER PLAYER)\n\t(DESC \"your dinner\")\n\t(ADJECTIVE COVERED MY)\n\t(SYNONYM DINNER FOOD ;ARRAY DISHES PLATE ;FISH)\n\t(FLAGS NARTICLEBIT TRYTAKEBIT)\n\t(SIZE 10)\n\t(DESCFCN DINNER-D)\n\t(ACTION DINNER-F)>",
   "referencedBy": [
    "DINNER-D",
    "DINNER-F",
    "PRE-EAT"
   ]
  },
  "RED-FROB": {
   "name": "RED-FROB",
   "file": "things.zil",
   "line": 512,
   "endLine": 518,
   "desc": "red frob",
   "ldesc": null,
   "fdesc": null,
   "loc": "RAMP",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "FROB",
    "FROBS"
   ],
   "adjectives": [
    "RED"
   ],
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
   "source": "<OBJECT RED-FROB\n\t(LOC RAMP)\n\t(DESC \"red frob\")\n        (ADJECTIVE RED)\n\t(SYNONYM FROB FROBS)\n\t(FLAGS TAKEBIT)\n\t(SIZE 1)>",
   "referencedBy": []
  },
  "GREEN-FROB": {
   "name": "GREEN-FROB",
   "file": "things.zil",
   "line": 520,
   "endLine": 526,
   "desc": "green frob",
   "ldesc": null,
   "fdesc": null,
   "loc": "RAMP",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "FROB",
    "FROBS"
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
     "1"
    ]
   },
   "contents": [],
   "source": "<OBJECT GREEN-FROB\n\t(LOC RAMP)\n\t(DESC \"green frob\")\n        (ADJECTIVE GREEN)\n\t(SYNONYM FROB FROBS)\n\t(FLAGS TAKEBIT)\n\t(SIZE 1)>",
   "referencedBy": []
  },
  "BIG-BLUE-FROB": {
   "name": "BIG-BLUE-FROB",
   "file": "things.zil",
   "line": 528,
   "endLine": 534,
   "desc": "big blue frob",
   "ldesc": null,
   "fdesc": null,
   "loc": "THING",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "FROB",
    "FROBS"
   ],
   "adjectives": [
    "BIG",
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
    ]
   },
   "contents": [],
   "source": "<OBJECT BIG-BLUE-FROB\n\t(LOC THING)\n\t(DESC \"big blue frob\")\n        (ADJECTIVE BIG BLUE)\n\t(SYNONYM FROB FROBS)\n\t(FLAGS TAKEBIT)\n\t(SIZE 1)>",
   "referencedBy": []
  },
  "SMALL-BLUE-FROB": {
   "name": "SMALL-BLUE-FROB",
   "file": "things.zil",
   "line": 536,
   "endLine": 542,
   "desc": "small blue frob",
   "ldesc": null,
   "fdesc": null,
   "loc": "THING",
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "FROB",
    "FROBS"
   ],
   "adjectives": [
    "SMALL",
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
    ]
   },
   "contents": [],
   "source": "<OBJECT SMALL-BLUE-FROB\n\t(LOC THING)\n\t(DESC \"small blue frob\")\n        (ADJECTIVE SMALL BLUE)\n\t(SYNONYM FROB FROBS)\n\t(FLAGS TAKEBIT)\n\t(SIZE 1)>",
   "referencedBy": []
  }
 },
 "routines": {
  "LOCAL-GLOBALS-F": {
   "name": "LOCAL-GLOBALS-F",
   "file": "global.zil",
   "line": 26,
   "endLine": 29,
   "source": "<ROUTINE LOCAL-GLOBALS-F ()\n <COND (<REMOTE-VERB?>\n\t<RFALSE>)\n       (T <NOT-HERE ,LOCAL-GLOBALS>)>>"
  },
  "FRUSTRATION-F": {
   "name": "FRUSTRATION-F",
   "file": "global.zil",
   "line": 37,
   "endLine": 39,
   "source": "<ROUTINE FRUSTRATION-F ()\n\t <COND (<VERB? ENJOY>\n\t\t<TELL ,ZEN CR>)>>"
  },
  "DO-INSTEAD-OF": {
   "name": "DO-INSTEAD-OF",
   "file": "global.zil",
   "line": 49,
   "endLine": 53,
   "source": "<ROUTINE DO-INSTEAD-OF (OBJ1 OBJ2)\n\t<COND (<EQUAL? ,PRSI .OBJ2> <PERFORM ,PRSA ,PRSO .OBJ1> <RTRUE>)\n\t      (<EQUAL? ,PRSO .OBJ2> <PERFORM ,PRSA .OBJ1 ,PRSI> <RTRUE>)\n\t      ;(T\t\t    <PERFORM ,PRSA ,PRSO ,PRSI> <RTRUE>)\n\t      (T <V-FOO>)>>"
  },
  "TURN-F": {
   "name": "TURN-F",
   "file": "global.zil",
   "line": 62,
   "endLine": 65,
   "source": "<ROUTINE TURN-F ()\n <COND (<VERB? USE>\n\t<PERFORM ,V?WAIT-FOR ,PRSO>\n\t<RTRUE>)>>"
  },
  "IT-F": {
   "name": "IT-F",
   "file": "global.zil",
   "line": 74,
   "endLine": 80,
   "source": "<ROUTINE IT-F ()\n <COND (<OR <AND <IOBJ? IT>\n\t\t ;<FSET? ,PRSO ,PERSONBIT>\n\t\t <VERB? ASK-ABOUT ASK-FOR SEARCH-FOR TELL-ABOUT>>\n\t    <AND <DOBJ? IT>\n\t\t <VERB? ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR FIND ;WHAT>>>\n\t<TELL \"\\\"I'm not sure what you're talking about.\\\"\" CR>)>>"
  },
  "FLOOR-F": {
   "name": "FLOOR-F",
   "file": "global.zil",
   "line": 90,
   "endLine": 102,
   "source": "<ROUTINE FLOOR-F (\"AUX\" (OBJ <>) N)\n <COND ;(<REMOTE-VERB?> <RFALSE>)\n       (<VERB? CLIMB-ON>\n\t<ALREADY ,WINNER \"on it\">)\n       (<AND <VERB? PUT THROW-AT>\n\t     ;<NOT <DOBJ? MOONMIST>>\n\t     <IOBJ? FLOOR>>\n\t<MOVE ,PRSO ,HERE>\n\t<TELL \"Okay.\" CR>\n\t<RTRUE>)\n       (<VERB? EXAMINE LOOK-ON SEARCH SEARCH-FOR>\n\t<START-SEARCH .OBJ>\n\t<RTRUE>)>>"
  },
  "START-SEARCH": {
   "name": "START-SEARCH",
   "file": "global.zil",
   "line": 104,
   "endLine": 116,
   "source": "<ROUTINE START-SEARCH (\"OPTIONAL\" (OBJ <>))\n\t<TELL\n\"Nothing suspicious meets your eye after a moment's scrutiny. Do you want\nto continue?\">\n\t<COND (<NOT <YES?>>\n\t       <OKAY>\n\t       <RTRUE>)\n\t      (T\n\t       <SETG FOUND-IT .OBJ>\n\t       <SETG FOUND-LOC ,HERE>\n\t       <QUEUE I-FOUND-IT <RANDOM 7>>\n\t       <V-WAIT 8 <> T>\n\t       <RTRUE>)>>"
  },
  "I-FOUND-IT": {
   "name": "I-FOUND-IT",
   "file": "global.zil",
   "line": 123,
   "endLine": 131,
   "source": "<ROUTINE I-FOUND-IT (\"OPTIONAL\" (GARG <>) \"AUX\" OBJ)\n\t%<DEBUG-CODE <COND (<OR ,IDEBUG <==? .GARG ,G-DEBUG>>\n\t\t\t    <TELL \"[I-FOUND-IT:\">\n\t\t\t    <COND (<==? .GARG ,G-DEBUG> <RFALSE>)>)>>\n\t<COND (<NOT <EQUAL? ,FOUND-LOC ,HERE>>\n\t       <RFALSE>)\n\t      (T ;<ZERO? ,FOUND-IT>\n\t       <TELL ,NOTHING-NEW>\n\t       <RFATAL>)>>"
  },
  "YOU-F": {
   "name": "YOU-F",
   "file": "global.zil",
   "line": 150,
   "endLine": 160,
   "source": "<ROUTINE YOU-F (\"AUX\" X)\n <COND (<NOT <==? ,WINNER ,PLAYER>>\n\t<DO-INSTEAD-OF ,WINNER ,YOU>\n\t<RTRUE>)\n       (<AND <VERB? ASK-ABOUT> <IOBJ? YOU>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSO>\n\t<RTRUE>)\n       (<AND <VERB? THANK>\n\t     <SET X <QCONTEXT-GOOD?>>>\n\t<PERFORM ,V?THANK .X>\n\t<RTRUE>)>>"
  },
  "WALL-F": {
   "name": "WALL-F",
   "file": "global.zil",
   "line": 182,
   "endLine": 192,
   "source": "<ROUTINE WALL-F (\"AUX\" OBJ)\n <COND (<AND <VERB? OPEN CLOSE>\n\t     <T? <SET OBJ <FIND-FLAG-LG ,HERE ,DOORBIT ,SECRETBIT>>>>\n\t<DO-INSTEAD-OF .OBJ ,WALL>\n\t<RTRUE>)\n       (<VERB? KNOCK>\n\t<COND (<OR <NOT <FSET? ,HERE ,WEARBIT> ;\"WING-ROOMS\">\n\t\t   <FIND-FLAG-LG ,HERE ,DOORBIT ,SECRETBIT>>\n\t       <TELL \"You hear a hollow sound.\" CR>)\n\t      (T <TELL\n\"Knocking on the walls reveals nothing unusual.\" CR>)>)>>"
  },
  "GLOBAL-HERE-F": {
   "name": "GLOBAL-HERE-F",
   "file": "global.zil",
   "line": 205,
   "endLine": 232,
   "source": "<ROUTINE GLOBAL-HERE-F (\"AUX\" OBJ (X <>))\n <COND (<VERB? EXAMINE LIE SIT SMELL WALK-TO>\n\t<DO-INSTEAD-OF ,HERE ,GLOBAL-HERE>\n\t<RTRUE>)\n       (<VERB? PUT PUT-IN ;TIE-TO>\n\t<MORE-SPECIFIC>)\n       (<VERB? SEARCH SEARCH-FOR>\n\t<COND (<AND <T? ,PRSI>\n\t\t    <==? <META-LOC ,PRSI> ,HERE>>\n\t       <SET X ,PRSI>)\n\t      (T\n\t       <SET OBJ <FIRST? ,HERE>>\n\t       <REPEAT ()\n\t\t       <COND (<ZERO? .OBJ>\n\t\t\t      <RETURN>)\n\t\t\t     (<FSET? .OBJ ,SECRETBIT>\n\t\t\t      <SET X .OBJ>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <NOT <FSET? .OBJ ,PERSONBIT>>\n\t\t\t\t   <OR <FSET? .OBJ ,CONTBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <OR <SET X <FIND-IN .OBJ ,SECRETBIT>>\n\t\t\t\t       <SET X <FIND-IN .OBJ ,RMUNGBIT>>>>\n\t\t\t      <FSET .OBJ ,OPENBIT>\n\t\t\t      <RETURN>)\n\t\t\t     (T <SET OBJ <NEXT? .OBJ>>)>>)>\n\t<START-SEARCH .X>\n\t<RTRUE>)>>"
  },
  "CHAIR-F": {
   "name": "CHAIR-F",
   "file": "global.zil",
   "line": 242,
   "endLine": 245,
   "source": "<ROUTINE CHAIR-F ()\n <COND (<VERB? SIT ;LOOK-UNDER CLIMB-ON ;CLIMB-DOWN BOARD>\n\t<WONT-HELP>)\n       (T <RANDOM-PSEUDO>)>>"
  },
  "SLEEP-GLOBAL-F": {
   "name": "SLEEP-GLOBAL-F",
   "file": "global.zil",
   "line": 263,
   "endLine": 266,
   "source": "<ROUTINE SLEEP-GLOBAL-F ()\n <COND (<VERB? WALK-TO>\n\t<PERFORM ,V?FAINT>\n\t<RTRUE>)>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "global.zil",
   "line": 268,
   "endLine": 285,
   "source": "<ROUTINE ROB (WHAT THIEF \"OPTIONAL\" (TELL? <>) \"AUX\" N X (TOLD? <>))\n\t <SET X <FIRST? .WHAT>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN>)>\n\t\t <SET N <NEXT? .X>>\n\t\t ;<COND (<NOT <FSET? .X ,TAKEBIT>>\n\t\t\t<SET X .N>\n\t\t\t<AGAIN>)>\n\t\t <COND (<AND <NOT .N> .TOLD? .TELL?>\n\t\t\t<TELL \" and\">)>\n\t\t <SET TOLD? T>\n\t\t <COND (.TELL?\n\t\t\t<TELL the .X>\n\t\t\t<COND (.N <TELL !\\,>)\n\t\t\t      (T <TELL \". \">)>)>\n\t\t <MOVE .X .THIEF>\n\t\t ;<FCLEAR .X ,TAKEBIT>\n\t\t <SET X .N>>>"
  },
  "LIGHT-GLOBAL-F": {
   "name": "LIGHT-GLOBAL-F",
   "file": "global.zil",
   "line": 295,
   "endLine": 314,
   "source": "<ROUTINE LIGHT-GLOBAL-F (\"AUX\" P)\n <COND (<REMOTE-VERB?> <RFALSE>)\n       (<VERB? LAMP-ON LAMP-OFF>\n\t<COND (<AND <OUTSIDE? ,HERE> ;<NOT <EQUAL? ,HERE ,CAR>>>\n\t       <TELL \"You can't reach it from here.\" CR>)\n\t      (<VERB? LAMP-ON>\n\t       <COND (<FSET? ,HERE ,ONBIT>\n\t\t      <ALREADY ,LIGHT-GLOBAL \"on\">)\n\t\t     (T\n\t\t      <FSET ,HERE ,ONBIT>\n\t\t      <OKAY ,LIGHT-GLOBAL \"on\">)>)\n\t      (<VERB? LAMP-OFF>\n\t       <COND (<NOT <FSET? ,HERE ,ONBIT>>\n\t\t      <ALREADY ,LIGHT-GLOBAL \"off\">)\n\t\t     (<SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,PLAYER>>\n\t\t      <TELL\nD .P \" says, \\\"Please don't leave us in the dark.\\\"\" CR>)\n\t\t     (T\n\t\t      <FCLEAR ,HERE ,ONBIT>\n\t\t      <OKAY ,LIGHT-GLOBAL \"off\">)>)>)>>"
  },
  "HANDS-F": {
   "name": "HANDS-F",
   "file": "global.zil",
   "line": 327,
   "endLine": 336,
   "source": "<ROUTINE HANDS-F (ACTOR)\n\t <COND ;(<VERB? WAVE>\n\t\t<PERFORM ,V?WAVE-AT>\n\t\t<RTRUE>)\n\t       (<VERB? SHAKE>\n\t\t<COND (<SET ACTOR <FIND-IN ,HERE ,PERSONBIT>>\n\t\t       <PERFORM ,V?THANK .ACTOR>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Pleased to meet you.\" CR>)>)>>"
  },
  "HEAD-F": {
   "name": "HEAD-F",
   "file": "global.zil",
   "line": 384,
   "endLine": 390,
   "source": "<ROUTINE HEAD-F ()\n <COND (<VERB? NOD>\n\t<PERFORM ,V?YES>\n\t<RTRUE>)\n       (<VERB? SHAKE>\n\t<PERFORM ,V?NO>\n\t<RTRUE>)>>"
  },
  "EYES-F": {
   "name": "EYES-F",
   "file": "global.zil",
   "line": 400,
   "endLine": 404,
   "source": "<ROUTINE EYES-F ()\n\t <COND (<VERB? OPEN>\n\t\t<TELL \"They are.\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<TELL \"That won't help.\" CR>)>>"
  },
  "THIRD-PLANET-F": {
   "name": "THIRD-PLANET-F",
   "file": "global.zil",
   "line": 426,
   "endLine": 432,
   "source": "<ROUTINE THIRD-PLANET-F ()\n\t <COND (<VERB? LEAVE DISEMBARK>\n\t\t<TELL \"You did!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It is an utterly insignificant little blue-green planet, of the sort\nwhere they probably still wear digital watches.\" CR>)>>"
  },
  "OBJECT-OF-GAME-F": {
   "name": "OBJECT-OF-GAME-F",
   "file": "global.zil",
   "line": 441,
   "endLine": 443,
   "source": "<ROUTINE OBJECT-OF-GAME-F ()\n\t <COND (<VERB? ASK-ABOUT TALK-ABOUT TELL-ABOUT>\n\t\t<TELL \"That's for me to know and you to find out.\" CR>)>>"
  },
  "SKY-F": {
   "name": "SKY-F",
   "file": "global.zil",
   "line": 451,
   "endLine": 457,
   "source": "<ROUTINE SKY-F ()\n\t <COND (<NOT <OUTSIDE? ,HERE>>\n\t\t<NOT-HERE ,SKY>)\n\t       ;(<AND <IN? ,FLEET ,HERE>\n\t\t     <VERB? EXAMINE>>\n\t\t<TELL\n\"The sky is filled with the ships of the \" D ,FLEET \".\" CR>)>>"
  },
  "HATCH-F": {
   "name": "HATCH-F",
   "file": "magrathea.zil",
   "line": 32,
   "endLine": 44,
   "source": "<ROUTINE HATCH-F ()\n\t <COND (<AND <NOT <EQUAL? ,HERE ,HATCHWAY ,RAMP>>\n\t\t     <VERB? OPEN CLOSE EXAMINE RUB>>\n\t\t<NOT-HERE ,HATCH>)\n\t       ;(<AND <VERB? OPEN THROUGH>\n\t\t     <NOT ,LANDED>>\n\t\t<TELL\n\"Loud sirens blare, fantastically bright red lights flash from all sides, and\na soft female voice mentions that opening this hatch in space will evacuate\nthe air from the ship.\" CR>)\n\t       (<AND <VERB? OPEN THROUGH>\n\t\t     <NOT <FSET? ,HATCH ,OPENBIT>>>\n\t\t<TELL \"The hatch appears to be jammed shut.\" CR>)>>"
  },
  "FALL-OFF-RAMP": {
   "name": "FALL-OFF-RAMP",
   "file": "magrathea.zil",
   "line": 72,
   "endLine": 81,
   "source": "<ROUTINE FALL-OFF-RAMP ()\n\t<TELL \"You fall off the edge of the ramp onto the surface of\nMagrathea.It's not a long way down and the ground breaks your fall, but\nnevertheless you die.\">\n\t <COND (<L? ,MOVES 10>\n\t <TELL \"  This is something which is going to happen to you\nquite a lot, so you might as well get used to it.\">)\n\t (<TELL \"  You might not think it's very fair, but nobody said the Galaxy was a very fair place anyway.\">)>\n\t <JIGS-UP>\n\t <RFALSE>>"
  },
  "WANDER-AROUND": {
   "name": "WANDER-AROUND",
   "file": "magrathea.zil",
   "line": 104,
   "endLine": 108,
   "source": "<ROUTINE WANDER-AROUND ()\n\t<TELL \n\"You wander gloomily around for a while, ruining your shoes, becoming\nthoroughly depressed, and ending up where you started.\" CR>\n\t<RFALSE>>"
  },
  "DEATH-BY-BLUBBER": {
   "name": "DEATH-BY-BLUBBER",
   "file": "magrathea.zil",
   "line": 140,
   "endLine": 146,
   "source": "<ROUTINE DEATH-BY-BLUBBER ()\n\t<TELL\n\"You fall into the new-ish, nasty-ish crater, where the blubber and blood\nliberally spattered around break your fall. Unfortunately, however, on\nbecoming aware of your surroundings, you die of disgust.\" CR>\n\t<JIGS-UP>\n\t<RFALSE>>"
  },
  "SLOPE-SCRAMBLE": {
   "name": "SLOPE-SCRAMBLE",
   "file": "magrathea.zil",
   "line": 148,
   "endLine": 153,
   "source": "<ROUTINE SLOPE-SCRAMBLE ()\n\t<TELL \"You plunge recklessly over the edge of the \" D ,HERE \",\nruining your shoes in your desperate scrabble for a foothold.\nFortunately for you, you regain your footing and scramble breathlessly\nback to level ground again.\" CR>\n\t<RFALSE>>"
  },
  "DOWN-TO-CRATER": {
   "name": "DOWN-TO-CRATER",
   "file": "magrathea.zil",
   "line": 237,
   "endLine": 239,
   "source": "<ROUTINE DOWN-TO-CRATER ()\n\t<TELL \"You hop over the teeth and scramble down to the crater floor\">\n\t<MOVE ,WINNER  ,WHALE-CRATER>>"
  },
  "GO": {
   "name": "GO",
   "file": "misc.zil",
   "line": 6,
   "endLine": 16,
   "source": "<ROUTINE GO ()\n\t<SETG SCREENWIDTH <LOWCORE SCRH>>\n\t<COND (<L? ,SCREENWIDTH 64>\n\t       <TELL \"[The screen is too narrow.]\" CR>\n\t       <QUIT>)>\n\t<CLEAR -1>\n\t<INIT-STATUS-LINE>\n\t<V-VERSION>\n\t<INTRO>\n\t<MAIN-LOOP>\n\t<AGAIN>>"
  },
  "INTRO": {
   "name": "INTRO",
   "file": "misc.zil",
   "line": 18,
   "endLine": 20,
   "source": "<ROUTINE INTRO ()\n\t;<TELL \"[LEN=\" N <LOWCORE SCRV> \" WID=\" N ,SCREENWIDTH \"]\">\n\t<CRLF>>"
  },
  "PRINT-THE": {
   "name": "PRINT-THE",
   "file": "misc.zil",
   "line": 22,
   "endLine": 33,
   "source": "<ROUTINE PRINT-THE (OBJ)\t;\"the\"\n\t<COND (<AND <EQUAL? .OBJ ,TURN> <L? 1 ,P-NUMBER>>\n\t       <TELL !\\  N ,P-NUMBER \" minutes\">)\n\t      (<EQUAL? .OBJ ,WINDOW>\n\t       <TELL \" the window\">)\n\t      ;(<AND <EQUAL? .OBJ ,P-IT-OBJECT>\n\t\t    <FSET? ,IT ,TOUCHBIT>>\n\t       <TELL \" it\">\n\t       <RTRUE>)\n\t      (T\n\t       <THE? .OBJ>\n\t       <TELL !\\  D .OBJ>)>>"
  },
  "THE?": {
   "name": "THE?",
   "file": "misc.zil",
   "line": 35,
   "endLine": 45,
   "source": "<ROUTINE THE? (OBJ)\n\t<COND (<NOT <FSET? .OBJ ,NARTICLEBIT>>\n\t       <COND (<OR ;<NOT <FSET? .OBJ ,PERSONBIT>>\n\t\t\t  <IN? .OBJ ,ROOMS>\n\t\t\t  <FSET? .OBJ ,SEENBIT>>\n\t\t      <TELL \" the\">)\n\t\t     (<FSET? .OBJ ,VOWELBIT>\n\t\t      <TELL \" an\">)\n\t\t     (T <TELL \" a\">)>)>\n\t<COND (T ;<FSET? .OBJ ,PERSONBIT>\n\t       <FSET .OBJ ,SEENBIT>)>>"
  },
  "START-SENTENCE": {
   "name": "START-SENTENCE",
   "file": "misc.zil",
   "line": 47,
   "endLine": 64,
   "source": "<ROUTINE START-SENTENCE (OBJ)\t;\"The\"\n\t<THIS-IS-IT .OBJ>\n\t<COND (<EQUAL? .OBJ ,PLAYER>\t<TELL \"You\">\t\t<RTRUE>)\n\t      (<EQUAL? .OBJ ,HANDS>\t<TELL \"Your hand\">\t<RTRUE>)\n\t      (<EQUAL? .OBJ ,HEAD>\t<TELL \"Your head\">\t<RTRUE>)\n\t      (<EQUAL? .OBJ ,EYES>\t<TELL \"Your eyes\">\t<RTRUE>)\n\t      (<EQUAL? .OBJ ,TEETH>\t<TELL \"Your teeth\">\t<RTRUE>)\n\t      (<EQUAL? .OBJ ,EARS>\t<TELL \"Your ears\">\t<RTRUE>)>\n\t<COND (<NOT <FSET? .OBJ ,NARTICLEBIT>>\n\t       <COND (<OR ;<NOT <FSET? .OBJ ,PERSONBIT>>\n\t\t\t  <FSET? .OBJ ,SEENBIT>>\n\t\t      <TELL \"The \">)\n\t\t     (<FSET? .OBJ ,VOWELBIT>\n\t\t      <TELL \"An \">)\n\t\t     (T <TELL \"A \">)>)>\n\t<COND (T ;<FSET? .OBJ ,PERSONBIT>\n\t       <FSET .OBJ ,SEENBIT>)>\n\t<TELL D .OBJ>>"
  },
  "PRINTA": {
   "name": "PRINTA",
   "file": "misc.zil",
   "line": 66,
   "endLine": 70,
   "source": "<ROUTINE PRINTA (O)\t;\"a\"\n\t <COND (<OR ;<FSET? .O ,PERSONBIT> <FSET? .O ,NARTICLEBIT>> T)\n\t       (<FSET? .O ,VOWELBIT> <TELL \"an \">)\n\t       (T <TELL \"a \">)>\n\t <TELL D .O>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "misc.zil",
   "line": 80,
   "endLine": 101,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n <COND (<EQUAL? .OBJ <> ,NOT-HERE-OBJECT ,PLAYER>\n\t<RTRUE>)\n       (<EQUAL? .OBJ ,INTDIR ,GLOBAL-HERE ,ROOMS>\n\t<RTRUE>)\n       (<AND <DIR-VERB?> <==? .OBJ ,PRSO>>\n\t<RTRUE>)>\n <COND (<NOT <FSET? .OBJ ,PERSONBIT>>\n\t;<PUT ,P-IT-WORDS 0 <GET ,P-ADJW ,NOW-PRSI>>\n\t;<PUT ,P-IT-WORDS 1 <GET ,P-NAMW ,NOW-PRSI>>\n\t<FSET ,IT ,TOUCHBIT>\t;\"to cause pronoun 'it' in output\"\n\t<SETG P-IT-OBJECT .OBJ>)\n       (<FSET? .OBJ ,FEMALEBIT>\n\t<FSET ,HER ,TOUCHBIT>\n\t<SETG P-HER-OBJECT .OBJ>)\n       (<FSET? .OBJ ,PLURALBIT>\n\t<FSET ,THEM ,TOUCHBIT>\n\t<SETG P-THEM-OBJECT .OBJ>)\n       (T\n\t<FSET ,HIM ,TOUCHBIT>\n\t<SETG P-HIM-OBJECT .OBJ>)>\n <RTRUE>>"
  },
  "NO-PRONOUN?": {
   "name": "NO-PRONOUN?",
   "file": "misc.zil",
   "line": 103,
   "endLine": 125,
   "source": "<ROUTINE NO-PRONOUN? (OBJ \"OPTIONAL\" (CAP 0))\n\t<COND (<EQUAL? .OBJ ,PLAYER>\n\t       <RFALSE>)\n\t      (<NOT <FSET? .OBJ ,PERSONBIT>>\n\t       <COND (<AND <EQUAL? .OBJ ,P-IT-OBJECT>\n\t\t\t   <FSET? ,IT ,TOUCHBIT>>\n\t\t      <RFALSE>)>)\n\t      (<FSET? .OBJ ,FEMALEBIT>\n\t       <COND (<AND <EQUAL? .OBJ ,P-HER-OBJECT>\n\t\t\t   <FSET? ,HER ,TOUCHBIT>>\n\t\t      <RFALSE>)>)\n\t      (<FSET? .OBJ ,PLURALBIT>\n\t       <COND (<AND <EQUAL? .OBJ ,P-THEM-OBJECT>\n\t\t\t   <FSET? ,THEM ,TOUCHBIT>>\n\t\t      <RFALSE>)>)\n\t      (T\n\t       <COND (<AND <EQUAL? .OBJ ,P-HIM-OBJECT>\n\t\t\t   <FSET? ,HIM ,TOUCHBIT>>\n\t\t      <RFALSE>)>)>\n\t<COND (<ZERO? .CAP> <TELL the .OBJ>)\n\t      (<ONE? .CAP> <TELL The .OBJ>)>\n\t<THIS-IS-IT .OBJ>\n\t<RTRUE>>"
  },
  "HE-SHE-IT": {
   "name": "HE-SHE-IT",
   "file": "misc.zil",
   "line": 127,
   "endLine": 160,
   "source": "<ROUTINE HE-SHE-IT (OBJ \"OPTIONAL\" (CAP 0) (VERB <>))\t;\"He/he/+verb\"\n\t<COND (<NO-PRONOUN? .OBJ .CAP>\n\t       T)\n\t      (<NOT <FSET? .OBJ ,PERSONBIT>>\n\t       <COND (<ZERO? .CAP> <TELL \" it\">)\n\t\t     (<ONE? .CAP> <TELL \"It\">)>)\n\t      (<==? .OBJ ,PLAYER>\n\t       <COND (<ZERO? .CAP> <TELL \" you\">)\n\t\t     (<ONE? .CAP> <TELL \"You\">)>)\n\t      (<FSET? .OBJ ,FEMALEBIT>\n\t       <COND (<ZERO? .CAP> <TELL \" she\">)\n\t\t     (<ONE? .CAP> <TELL \"She\">)>)\n\t      ;(<FSET? .OBJ ,PLURALBIT>\n\t       <COND (<ZERO? .CAP> <TELL \" they\">)\n\t\t     (<ONE? .CAP> <TELL \"They\">)>)\n\t      (T\n\t       <COND (<ZERO? .CAP> <TELL \" he\">)\n\t\t     (<ONE? .CAP> <TELL \"He\">)>)>\n\t<COND (<NOT <ZERO? .VERB>>\n\t       <PRINTC 32>\n\t       <COND (<OR <EQUAL? .OBJ ,PLAYER>\n\t\t\t  ;<FSET? .OBJ ,PLURALBIT>>\n\t\t      <COND (<=? .VERB \"is\"> <TELL \"are\">)\n\t\t\t    (<=? .VERB \"has\"><TELL \"have\">)\n\t\t\t    (<=? .VERB \"tri\"><TELL \"try\">)\n\t\t\t    (<=? .VERB \"empti\"><TELL \"empty\">)\n\t\t\t    (T <TELL .VERB>)>)\n\t\t     (T\n\t\t      <TELL .VERB>\n\t\t      <COND (<OR <EQUAL? .VERB \"do\" \"kiss\" \"push\">\n\t\t\t\t <EQUAL? .VERB \"tri\" \"empti\">>\n\t\t\t     <TELL !\\e>)>\n\t\t      <COND (<NOT <EQUAL? .VERB \"is\" \"has\">>\n\t\t\t     <TELL !\\s>)>)>)>>"
  },
  "HIM-HER-IT": {
   "name": "HIM-HER-IT",
   "file": "misc.zil",
   "line": 162,
   "endLine": 187,
   "source": "<ROUTINE HIM-HER-IT (OBJ \"OPTIONAL\" (CAP 0) (POSSESS? <>))\t;\"His/his/him\"\n <COND (<NO-PRONOUN? .OBJ .CAP>\n\t<COND (<NOT <ZERO? .POSSESS?>> <TELL \"'s\">)>)\n       (<NOT <FSET? .OBJ ,PERSONBIT>>\n\t<COND (<ZERO? .CAP> <TELL \" it\">) (T <TELL \"It\">)>\n\t<COND (<NOT <ZERO? .POSSESS?>> <TELL !\\s>)>)\n       (<==? .OBJ ,PLAYER>\n\t<COND (<ZERO? .CAP> <TELL \" you\">) (T <TELL \"You\">)>\n\t<COND (<NOT <ZERO? .POSSESS?>> <TELL !\\r>)>)\n       (<FSET? .OBJ ,PLURALBIT>\n\t<COND (<NOT <ZERO? .POSSESS?>>\n\t       <COND (<ZERO? .CAP> <TELL \" their\">)\n\t\t     (T <TELL \"Their\">)>)\n\t      (T\n\t       <COND (<ZERO? .CAP> <TELL \" them\">)\n\t\t     (T <TELL \"Them\">)>)>)\n       (<FSET? .OBJ ,FEMALEBIT>\n\t<COND (<ZERO? .CAP> <TELL \" her\">) (T <TELL \"Her\">)>)\n       (T\n\t<COND (<NOT <ZERO? .POSSESS?>>\n\t       <COND (<ZERO? .CAP> <TELL \" his\">)\n\t\t     (T <TELL \"His\">)>)\n\t      (T\n\t       <COND (<ZERO? .CAP> <TELL \" him\">)\n\t\t     (T <TELL \"Him\">)>)>)>\n <RTRUE>>"
  },
  "I-PROMPT": {
   "name": "I-PROMPT",
   "file": "misc.zil",
   "line": 210,
   "endLine": 213,
   "source": "<ROUTINE I-PROMPT (\"OPTIONAL\" (GARG <>))\n <COND (<EQUAL? .GARG ,G-DEBUG> <RFALSE>)>\n <SETG P-PROMPT <- ,P-PROMPT 1>>\n <RFALSE>>"
  },
  "DONT-F": {
   "name": "DONT-F",
   "file": "misc.zil",
   "line": 215,
   "endLine": 237,
   "source": "<ROUTINE DONT-F ()\n\t <COND (<VERB? PANIC>\n\t\t<COND (<1? <RANDOM 2>>\n\t\t       <TELL \n\"Very clever. It looks as if there's a lot you should be panicking about.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"Why not? Your position appears quite hopeless.\" CR>)>)\n\t       ;(<VERB? LOOK>\n\t\t<SETG DONT-FLAG <>>\n\t\t<PERFORM ,V?CLOSE ,EYES>\n\t\t<RTRUE>)\n\t       (<VERB? WAIT-FOR WAIT-UNTIL>\n\t\t<TELL \"Time doesn't pass...\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"Not taken.\" CR>)\n\t       ;(<AND <VERB? LISTEN>\n\t\t     <VISIBLE? ,POETRY>>\n\t\t<SETG DONT-FLAG <>>\n\t\t<PERFORM ,V?LISTEN ,POETRY>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Not done.\" CR>)>>"
  },
  "NOT-FOUND": {
   "name": "NOT-FOUND",
   "file": "misc.zil",
   "line": 239,
   "endLine": 250,
   "source": "<ROUTINE NOT-FOUND (OBJ \"AUX\" (WT <>))\n\t<COND (<VERB? WALK-TO>\n\t       <SET WT T>)>\n\t<COND (<ZERO? .WT>\n\t       <SETG CLOCK-WAIT T>\n\t       <TELL \"(Y\">)\n\t      (T <TELL \"But y\">)>\n\t<TELL \"ou haven't found\" him .OBJ \" yet!\">\n\t<COND (<ZERO? .WT>\n\t       <TELL !\\)>)>\n\t<CRLF>\n\t<RTRUE>>"
  },
  "VERB-PRINT": {
   "name": "VERB-PRINT",
   "file": "misc.zil",
   "line": 252,
   "endLine": 271,
   "source": "<ROUTINE VERB-PRINT (\"OPTIONAL\" (GERUND <>) \"AUX\" TMP)\n\t<SET TMP <PARSE-VERB ,PARSE-RESULT>>\n\t<COND (<==? .TMP 0>\n\t       <COND (<ZERO? .GERUND> <TELL \"tell\"> <RTRUE>)\n\t\t     (T <TELL \"walk\">)>)\n\t      (<OR <T? .GERUND> ;<0? <GETB ,P-VTBL 2>>>\n\t       <SET TMP <GET .TMP 0>>\n\t       <COND (<==? .TMP ,W?L> <PRINTB ,W?LOOK>)\n\t\t     (<==? .TMP ,W?X> <PRINTB ,W?EXAMINE>)\n\t\t     (<==? .TMP ,W?Z> <PRINTB ,W?WAIT>)\n\t\t     (<T? .GERUND>\n\t\t      <COND (<==? .TMP ,W?BATHE> <TELL \"bath\">)\n\t\t\t    (<==? .TMP ,W?DIG> <TELL \"digg\">)\n\t\t\t    (<==? .TMP ,W?GET> <TELL \"gett\">)\n\t\t\t    (T <PRINTB .TMP>)>)\n\t\t     (T <PRINTB .TMP>)>)\n\t      (T\n\t       <WORD-PRINT .TMP>\n\t       ;<PUTB ,P-VTBL 2 0>)>\n\t<COND (<T? .GERUND> <TELL \"ing?\">)>>"
  },
  "NOT-IT": {
   "name": "NOT-IT",
   "file": "misc.zil",
   "line": 273,
   "endLine": 281,
   "source": "<ROUTINE NOT-IT (WHO)\n <COND (<EQUAL? .WHO ,P-HER-OBJECT>\n\t<FCLEAR ,HER ,TOUCHBIT>)\n       (<EQUAL? .WHO ,P-HIM-OBJECT>\n\t<FCLEAR ,HIM ,TOUCHBIT>)\n       (<EQUAL? .WHO ,P-THEM-OBJECT>\n\t<FCLEAR ,THEM ,TOUCHBIT>)\n       (<EQUAL? .WHO ,P-IT-OBJECT>\n\t<FCLEAR ,IT  ,TOUCHBIT>)>>"
  },
  "TITLE-NOUN?": {
   "name": "TITLE-NOUN?",
   "file": "misc.zil",
   "line": 290,
   "endLine": 293,
   "source": "<ROUTINE TITLE-NOUN? (WRD)\n    <OR <EQUAL? .WRD ,W?MR ,W?MS>\n\t<EQUAL? .WRD ,W?MISTER ,W?MISS ,W?SIR>\n\t;<EQUAL? .WRD ,W?MRS ,W?DR ,W?DOCTOR>>>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "misc.zil",
   "line": 322,
   "endLine": 326,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t ;#DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t <PUT .CINT ,C-ENABLED? 1>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "misc.zil",
   "line": 328,
   "endLine": 341,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t ;#DECL ((RTN) ATOM (DEMON) <OR ATOM FALSE> (E C INT) <PRIMTYPE\n\t\t\t\t\t\t\t      VECTOR>)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t;<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "misc.zil",
   "line": 353,
   "endLine": 371,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>) VAL)\n\t ;#DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX ;(FLG) ;<OR FALSE ATOM>)\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SETG MOVES <+ ,MOVES 1>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <ZERO? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<NOT <ZERO? .TICK>>\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t           <SET VAL <APPLY <GET .C ,C-RTN>>>>\n\t\t\t\t      <COND (<OR <ZERO? .FLG>\n\t\t\t\t\t\t <==? .VAL ,M-FATAL>>\n\t\t\t\t\t     <SET FLG .VAL>)>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "PLAYER-F": {
   "name": "PLAYER-F",
   "file": "people.zil",
   "line": 26,
   "endLine": 138,
   "source": "<ROUTINE PLAYER-F (\"OPTIONAL\" (ARG <>) \"AUX\" (L <>))\n <COND (<NOT <==? .ARG ,M-WINNER>>\n\t<COND (<DOBJ? PLAYER>\n\t       <COND (<VERB? ;DANCE ;GOODBYE HELLO SORRY THANK>\n\t\t      <HAR-HAR>\n\t\t      <RTRUE>)\n\t\t     (<VERB? ALARM>\n\t\t      <TELL ,YOU-ARE CR>\n\t\t      <RTRUE>)\n\t\t     ;(<VERB? EXAMINE>\n\t\t      <TELL \"You are wearing\">\n\t\t      <COND (<ZERO? ,NOW-WEARING> <TELL \" nothing\">)\n\t\t\t    (T <TELL the ,NOW-WEARING>)>\n\t\t      <SET L <FIRST? ,PLAYER>>\n\t\t      <REPEAT ()\n\t\t\t      <COND (<ZERO? .L>\n\t\t\t\t     <RETURN>)\n\t\t\t\t    (<AND <FSET? .L ,WORNBIT>\n\t\t\t\t\t  <NOT <==? .L ,NOW-WEARING>>>\n\t\t\t\t     <TELL \" and\" the .L>)>\n\t\t\t      <SET L <NEXT? .L>>>\n\t\t      <TELL \".\" CR>\n\t\t      <RTRUE>)\n\t\t     (<VERB? FIND>\n\t\t      <TELL \"You're right here, \">\n\t\t      <TELL-LOCATION>\n\t\t      <CRLF>\n\t\t      <RTRUE>)\n\t\t     (<VERB? FOLLOW>\n\t\t      <TELL\n\"I'd like to, but like most computers I don't have legs.\" CR>\n\t\t      <RTRUE>)\n\t\t     (<OR <VERB? KILL MUNG>\n\t\t\t  ;<AND <VERB? SHOOT>\n\t\t\t\t<IOBJ? BLASTER>>>\n\t\t      <JIGS-UP \"Done.\">\n\t\t      <RTRUE>)\n\t\t     (<VERB? LISTEN>\n\t\t      <TELL \"Yes?\" CR>\n\t\t      <RTRUE>)\n\t\t     (<VERB? MOVE>\n\t\t      <V-WALK-AROUND>\n\t\t      <RTRUE>)\n\t\t     (<VERB? PULL-TOGETHER>\n\t\t      <TELL ,ZEN CR>\n\t\t      <RTRUE>)\n\t\t     (<VERB? SEARCH>\n\t\t      <V-INVENTORY>\n\t\t      <RTRUE>)\n\t\t     (<VERB? TELL>\n\t\t      <FUCKING-CLEAR>\n\t\t      <TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>\n\t\t      <RTRUE>)>)\n\t      (<IOBJ? PLAYER>\n\t       <COND (<VERB? GIVE>\n\t\t      <COND (<AND <IN? ,PRSO ,PLAYER>\n\t\t\t\t  <NOT <DOBJ? BABEL-FISH>>>\n\t\t\t     <PRE-TAKE>\n\t\t\t     <RTRUE>)\n\t\t\t    (T\n\t\t\t     <PERFORM ,V?TAKE ,PRSO>\n\t\t\t     <RTRUE>)>)>)\n\t      (T <RFALSE>)>)\n       ;(<DIVESTMENT? ,NOW-WEARING>\n\t<COND (<NO-CHANGING?> <RTRUE>)\n\t      (T\n\t       <COND (<AND <NOT <ZERO? ,NOW-WEARING>>\n\t\t\t   <NOT <VERB? DISEMBARK REMOVE>>>\n\t\t      <FIRST-YOU \"remove\" ,NOW-WEARING>\n\t\t      <FCLEAR ,NOW-WEARING ,WORNBIT>\n\t\t      <SETG NOW-WEARING <>>)>\n\t       <RFALSE>)>)\n       (<AND <T? ,PRSI>\n\t     <NOT <VERB? SEARCH-FOR>>\n\t     <FSET? ,PRSI ,SECRETBIT>\n\t     <NOT <FSET? ,PRSI ,SEENBIT>>>\n\t<NOT-FOUND ,PRSI>\n\t<RTRUE>)\n       (<AND <T? ,PRSO>\n\t     <NOT <VERB? FIND WALK>>\n\t     <FSET? ,PRSO ,SECRETBIT>\n\t     <NOT <FSET? ,PRSO ,SEENBIT>>>\n\t<NOT-FOUND ,PRSO>\n\t<RTRUE>)\n       ;(<AND <T? ,AWAITING-REPLY>\n\t     <VERB? FOLLOW THROUGH WALK WALK-TO>>\n\t<SETG CLOCK-WAIT T>\n\t<PLEASE-ANSWER>\n\t<RTRUE>)\n       (<AND <EQUAL? <SET L <LOC ,PLAYER>> ,HERE ;,CAR>\n\t     ;<NOT ,PLAYER-SEATED>\n\t     ;<NOT ,PLAYER-HIDING>>\n\t<RFALSE>)\n       (<T? ,P-WALK-DIR>\t\t<TOO-BAD-SIT-HIDE>)\n       (<EQUAL? ,PRSO <> ,ROOMS .L>\n\t\t\t\t\t<RFALSE>)\n       (<VERB? WALK-TO SEARCH SEARCH-FOR FIND>\n\t<COND (<DOBJ? SLEEP-GLOBAL>\t<RFALSE>)\n\t      (T\t\t\t<TOO-BAD-SIT-HIDE>)>)\n       (<SPEAKING-VERB?>\t\t<RFALSE>)\n       (<GAME-VERB?>\t\t\t<RFALSE>)\n       (<REMOTE-VERB?>\t\t\t<RFALSE>)\n       (<VERB? AIM FAINT LISTEN LOOK-ON NOD SHOOT SMILE>\n\t\t\t\t\t<RFALSE>)\n       (<HELD? ,PRSO>\t\t\t<RFALSE>)\n       (<HELD? ,PRSO ,GLOBAL-OBJECTS>\t<RFALSE>)\n       (<VERB? EXAMINE>\t\t\t<RFALSE>)\n       (<NOT <HELD? ,PRSO .L ;,PLAYER-SEATED>>\t<TOO-BAD-SIT-HIDE>)\n       (<NOT ,PRSI>\t\t\t<RFALSE>)\n       (<HELD? ,PRSI>\t\t\t<RFALSE>)\n       (<HELD? ,PRSI ,GLOBAL-OBJECTS>\t<RFALSE>)\n       (<NOT <HELD? ,PRSI .L ;,PLAYER-SEATED>>\t<TOO-BAD-SIT-HIDE>)>>"
  },
  "TOO-BAD-SIT-HIDE": {
   "name": "TOO-BAD-SIT-HIDE",
   "file": "people.zil",
   "line": 140,
   "endLine": 143,
   "source": "<ROUTINE TOO-BAD-SIT-HIDE ()\n\t<MOVE ,WINNER ,HERE>\n\t<FIRST-YOU \"stand up\">\n\t<RFALSE>>"
  },
  "FUCKING-CLEAR": {
   "name": "FUCKING-CLEAR",
   "file": "people.zil",
   "line": 145,
   "endLine": 148,
   "source": "<ROUTINE FUCKING-CLEAR ()\n\t <SETG P-CONT <>>\n\t ;<SETG QUOTE-FLAG <>>\n\t <RFATAL>>"
  },
  "MARVIN-F": {
   "name": "MARVIN-F",
   "file": "people.zil",
   "line": 175,
   "endLine": 200,
   "source": "<ROUTINE MARVIN-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ X)\n <COND (<==? .ARG ,M-WINNER>\n\t<COND (<NOT <GRAB-ATTENTION ,MARVIN>> <RFATAL>)\n\t      (<SET X <COM-CHECK ,MARVIN>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>)\n\t\t     (<==? .X ,M-OTHER> <RFATAL>)\n\t\t     (T <RTRUE>)>)\n\t      (T\n\t       <FUCKING-CLEAR>\n\t       <TELL\n\"\\\"I think you ought to know I'm feeling very depressed.\\\"\" CR>)>)\n       (<SET OBJ <ASKING-ABOUT? ,MARVIN>>\n\t<COND (<NOT <GRAB-ATTENTION ,MARVIN .OBJ>>\n\t       <RFATAL>)\n\t      (<EQUAL? .OBJ ,OBJECT-OF-GAME>\n\t       <TELL\n\"\\\"Being clever doesn't always make you happy, you know. Look at me, brain\nthe size of a planet, how many points do you think I've got? Minus thirty\nzillion at the last count.\\\"\" CR>)\n\t      (<SET X <COMMON-ASK-ABOUT ,MARVIN .OBJ>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>) (T <RTRUE>)>)\n\t      (T <TELL-DUNNO ,MARVIN .OBJ>)>)\n       (<AND <VERB? ALARM SHAKE>\n\t     <EQUAL? <GETP ,MARVIN ,P?LDESC> 14 ;\"asleep\">>\n\t<TELL \"Rather like trying to wake the dead.\" CR>)\n       (T <PERSON-F ,MARVIN .ARG>)>>"
  },
  "ASKING-ABOUT?": {
   "name": "ASKING-ABOUT?",
   "file": "people.zil",
   "line": 219,
   "endLine": 226,
   "source": "<ROUTINE ASKING-ABOUT? (WHO \"AUX\" DR)\n\t<COND (<VERB? ASK-ABOUT ;CONFRONT SHOW>\n\t       <COND (<EQUAL? .WHO ,PRSO>\n\t\t      <RETURN ,PRSI>)>)\n\t      ;(<VERB? FIND ;WHAT>\n\t       <COND (<EQUAL? .WHO ,WINNER>\n\t\t      <RETURN ,PRSO>)>)\n\t      (T <RFALSE>)>>"
  },
  "FORD-F": {
   "name": "FORD-F",
   "file": "people.zil",
   "line": 228,
   "endLine": 255,
   "source": "<ROUTINE FORD-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ X)\n <COND (<==? .ARG ,M-WINNER>\n\t<COND (<NOT <GRAB-ATTENTION ,FORD>> <RFATAL>)\n\t      (<SET X <COM-CHECK ,FORD>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>)\n\t\t     (<==? .X ,M-OTHER> <RFATAL>)\n\t\t     (T <RTRUE>)>)\n\t      (T\n\t       <FUCKING-CLEAR>\n\t       <TELL \"Ford, busy scanning the sky\">\n\t       <COND (<EQUAL? ,HERE ,PUB>\n\t\t      <TELL \" through the window\">)>\n\t       <TELL \", ignores you.\" CR>)>)\n       (<SET OBJ <ASKING-ABOUT? ,FORD>>\n\t<COND (<NOT <GRAB-ATTENTION ,FORD .OBJ>>\n\t       <RFATAL>)\n\t      (<EQUAL? .OBJ ,THIRD-PLANET>\n\t       <TELL\n\"Ford explains that the Earth has been demolished. To cheer you up, he points\nout that there are an awful lot of little planets like that around, and the\nEarth wasn't even a particularly nice one.\" CR>)\n\t      (<SET X <COMMON-ASK-ABOUT ,FORD .OBJ>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>) (T <RTRUE>)>)\n\t      (T <TELL-DUNNO ,FORD .OBJ>)>)\n       (<AND <VERB? ALARM SHAKE>\n\t     <EQUAL? <GETP ,FORD ,P?LDESC> 14 ;\"asleep\">>\n\t<TELL \"Rather like trying to wake the dead.\" CR>)\n       (T <PERSON-F ,FORD .ARG>)>>"
  },
  "TELL-DUNNO": {
   "name": "TELL-DUNNO",
   "file": "people.zil",
   "line": 257,
   "endLine": 261,
   "source": "<ROUTINE TELL-DUNNO (PER OBJ)\n <COND ;(<FSET? .OBJ ,PERSONBIT>\n\t<TELL \"\\\"I don't indulge much in idle gossip, you know.\\\"\" CR>)\n       (T\n\t<TELL \"\\\"You know as much as I do.\\\"\" CR>)>>"
  },
  "ZAPHOD-F": {
   "name": "ZAPHOD-F",
   "file": "people.zil",
   "line": 279,
   "endLine": 297,
   "source": "<ROUTINE ZAPHOD-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ X)\n <COND (<==? .ARG ,M-WINNER>\n\t<COND (<NOT <GRAB-ATTENTION ,ZAPHOD>> <RFATAL>)\n\t      (<SET X <COM-CHECK ,ZAPHOD>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>)\n\t\t     (<==? .X ,M-OTHER> <RFATAL>)\n\t\t     (T <RTRUE>)>)\n\t      (T\n\t       <FUCKING-CLEAR>\n\t       <TELL \"\\\"Shut up, Earthman.\\\"\" CR>)>)\n       (<SET OBJ <ASKING-ABOUT? ,ZAPHOD>>\n\t<COND (<NOT <GRAB-ATTENTION ,ZAPHOD .OBJ>>\n\t       <RFATAL>)\n\t      (<SET X <COMMON-ASK-ABOUT ,ZAPHOD .OBJ>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>) (T <RTRUE>)>)\n\t      (T <TELL-DUNNO ,ZAPHOD .OBJ>)>)\n       (<VERB? EXAMINE>\n\t<TELL \"Zaphod has two heads.\" CR>)\n       (T <PERSON-F ,ZAPHOD .ARG>)>>"
  },
  "TRILLIAN-F": {
   "name": "TRILLIAN-F",
   "file": "people.zil",
   "line": 313,
   "endLine": 330,
   "source": "<ROUTINE TRILLIAN-F (\"OPTIONAL\" (ARG <>) \"AUX\" OBJ X)\n <COND (<==? .ARG ,M-WINNER>\n\t<COND (<NOT <GRAB-ATTENTION ,TRILLIAN>> <RFATAL>)\n\t      (<SET X <COM-CHECK ,TRILLIAN>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>)\n\t\t     (<==? .X ,M-OTHER> <RFATAL>)\n\t\t     (T <RTRUE>)>)\n\t      (T\n\t       <FUCKING-CLEAR>\n\t       <TELL\nD ,TRILLIAN \" smiles disinterestedly at you and looks away.\" CR>)>)\n       (<SET OBJ <ASKING-ABOUT? ,TRILLIAN>>\n\t<COND (<NOT <GRAB-ATTENTION ,TRILLIAN .OBJ>>\n\t       <RFATAL>)\n\t      (<SET X <COMMON-ASK-ABOUT ,TRILLIAN .OBJ>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>) (T <RTRUE>)>)\n\t      (T <TELL-DUNNO ,TRILLIAN .OBJ>)>)\n       (T <PERSON-F ,TRILLIAN .ARG>)>>"
  },
  "MARVIN-D": {
   "name": "MARVIN-D",
   "file": "people.zil",
   "line": 346,
   "endLine": 348,
   "source": "<ROUTINE MARVIN-D (\"OPTIONAL\" (ARG <>))\n\t<DESCRIBE-PERSON ,MARVIN>\n\t<RTRUE>>"
  },
  "FORD-D": {
   "name": "FORD-D",
   "file": "people.zil",
   "line": 350,
   "endLine": 355,
   "source": "<ROUTINE FORD-D (\"OPTIONAL\" X)\n\t <COND (<EQUAL? <GETP ,FORD ,P?LDESC> 14 ;\"asleep\">\n\t\t<TELL \"Ford is in the corner, snoring loudly.\" CR>)\n\t       (T\n\t\t<DESCRIBE-PERSON ,FORD>\n\t\t<RTRUE>)>>"
  },
  "ZAPHOD-D": {
   "name": "ZAPHOD-D",
   "file": "people.zil",
   "line": 357,
   "endLine": 359,
   "source": "<ROUTINE ZAPHOD-D (\"OPTIONAL\" (ARG <>))\n\t<DESCRIBE-PERSON ,ZAPHOD>\n\t<RTRUE>>"
  },
  "TRILLIAN-D": {
   "name": "TRILLIAN-D",
   "file": "people.zil",
   "line": 361,
   "endLine": 363,
   "source": "<ROUTINE TRILLIAN-D (\"OPTIONAL\" (ARG <>))\n\t<DESCRIBE-PERSON ,TRILLIAN>\n\t<RTRUE>>"
  },
  "DESCRIBE-PERSON": {
   "name": "DESCRIBE-PERSON",
   "file": "people.zil",
   "line": 365,
   "endLine": 379,
   "source": "<ROUTINE DESCRIBE-PERSON (PER \"AUX\" (STR <>))\n\t<SET STR <GETP .PER ,P?LDESC>>\n\t<COND (<AND .STR ;<NOT <==? .STR 6 ;\"walking along\">>>\n\t       <PUT ,TOUCHED-LDESCS <GETP .PER ,P?CHARACTER> .STR>\n\t       <RFALSE>)>\n\t<TELL The .PER \" is \">\n\t<COND (<AND <SET STR <GETPT .PER ,P?WEST>>\n\t\t    <SET STR <GET .STR ,NEXITSTR>>>\n\t       <TELL .STR>)\n\t      (T\n\t       <TELL \"looking bored\">)>\n\t<TELL \".\">\n\t<COND (<==? .STR 6 ;\"walking along\"> <PRINTC 32>)\n\t      (T <CRLF>)>\n\t<RTRUE>>"
  },
  "PERSON-F": {
   "name": "PERSON-F",
   "file": "people.zil",
   "line": 416,
   "endLine": 491,
   "source": "<ROUTINE PERSON-F (PER ARG \"AUX\" OBJ X L C N)\n <SET L <LOC .PER>>\n <SET C <GETP .PER ,P?CHARACTER>>\n <COND (<VERB? ALARM SHAKE>\n\t<COND (<==? ,PRSO .PER>\n\t       <COND (<UNSNOOZE .PER T>\n\t\t      <TELL He .PER \" gasps to see you so close!\" CR>\n\t\t      <RTRUE>)\n\t\t     (T\n\t\t      <TELL He+verb .PER \"is\" \" still \">\n\t\t      <COND (<SET X <GETP .PER ,P?LDESC>>\n\t\t\t     <TELL <GET ,LDESC-STRINGS .X>>)\n\t\t\t    (<SET X <GETPT .PER ,P?WEST>>\n\t\t\t     <TELL <GET .X ,NEXITSTR>>)>\n\t\t      <TELL \".\" CR>)>)>)\n       (<VERB? GIVE>\n\t<COND (<AND <EQUAL? ,PRSI .PER> <HELD? ,PRSO>>\n\t       <COND (<NOT <GRAB-ATTENTION .PER>> <RFATAL>)>\n\t       <RFALSE>)>)\n       (<VERB? LAMP-OFF>\n\t<COND (<T? <GETP .PER ,P?LINE>>\n\t       <TELL \"Seems you've already done that.\" CR>)\n\t      (T <WONT-HELP>)>)\n       (<VERB? MUNG SEARCH SEARCH-FOR>\n\t<COND (<AND <==? .PER ,PRSO>\n\t\t    <FSET? .PER ,PERSONBIT>\n\t\t    <NOT <FSET? .PER ,MUNGBIT>>>\n\t       <PUTP .PER ,P?LINE <+ 1 <GETP .PER ,P?LINE>>>\n\t       <COND (<NOT <EQUAL? <GETP .PER ,P?LDESC>\n\t\t\t\t   4 ;\"looking at you with suspicion\">>\n\t\t      <PUTP .PER ,P?LDESC 20 ;\"ignoring you\">)>\n\t       <TELL\nHe .PER \" pushes you away and mutters, \\\"I don't think that's\ncalled for.\\\"\" CR>\n\t       <RTRUE>)>)\n       (<VERB? SHOW>\n\t<COND (<==? .PER ,PRSO>\n\t       <COND (<AND ;<NOT <EQUAL? ,PRSI ,PASSAGE>>\n\t\t\t   <NOT <GRAB-ATTENTION .PER>>>\n\t\t      <RFATAL>)\n\t\t     (T\n\t\t      <PERFORM ,V?TELL-ABOUT ,PRSO ,PRSI>\n\t\t      <RTRUE>)>)>)\n       (<VERB? SMILE>\n\t<COND (<==? .PER ,PRSO>\n\t       <COND (<NOT <GRAB-ATTENTION .PER>>\n\t\t      <RFATAL>)\n\t\t     (T\n\t\t      <TELL He+verb ,PRSO \"smile\" \" back at you.\" CR>\n\t\t      <RTRUE>)>)>)\n       (<VERB? TELL-ABOUT>\n\t<COND (<==? .PER ,PRSO>\n\t       <COND (<NOT <GRAB-ATTENTION .PER>>\n\t\t      <RFATAL>)>\n\t       <PUTP .PER ,P?LDESC 12 ;\"listening to you\">\n\t       ;<COND (<SECRET-PASSAGE-OR-DOOR? ,PRSI>\n\t\t      <TELL-ABOUT-OBJECT ,PRSO ,PASSAGE ,FOUND-PASSAGES>\n\t\t      <RTRUE>)>\n\t       <TELL \"\\\"I don't know what you mean.\\\"\" CR>)>)\n       (<VERB? THROW-AT>\n\t<COND (<AND <==? .PER ,PRSI>\n\t\t    <FSET? .PER ,PERSONBIT>\n\t\t    <NOT <FSET? .PER ,MUNGBIT>>>\n\t       <MOVE ,PRSO ,PRSI>\n\t       <TELL He .PER \" catches\" the ,PRSO \" with\" his .PER !\\ >\n\t       <COND ;(<EQUAL? .PER ,DEB ,DOCTOR> <TELL \"lef\">)\n\t\t     (T <TELL \"righ\">)>\n\t       <TELL \"t hand.\" CR>\n\t       <RTRUE>)>)\n       ;(<SET OBJ <ASKING-ABOUT? .PER>>\n\t<COND (<NOT <GRAB-ATTENTION .PER>>\n\t       <RFATAL>)\n\t      ;(<SET X <COMMON-ASK-ABOUT .PER .OBJ>>\n\t       <COND (<==? .X ,M-FATAL> <RFALSE>) (T <RTRUE>)>)\n\t      (T <DONT-KNOW .PER .OBJ>)>)\n       (T <COMMON-OTHER .PER>)>>"
  },
  "CARRY-CHECK": {
   "name": "CARRY-CHECK",
   "file": "people.zil",
   "line": 495,
   "endLine": 499,
   "source": "<ROUTINE CARRY-CHECK (PER)\n <COND (<FIRST? .PER>\n\t<TELL He+verb .PER \"is\" \" holding\">\n\t<PRINT-CONTENTS .PER>\n\t<TELL \".\" CR>)>>"
  },
  "TRANSIT-TEST": {
   "name": "TRANSIT-TEST",
   "file": "people.zil",
   "line": 501,
   "endLine": 505,
   "source": "<ROUTINE TRANSIT-TEST (PER)\n\t<COND (<OR <VERB? DISEMBARK LEAVE TAKE-TO THROUGH WALK WALK-TO>\n\t\t   ;<AND <VERB? FOLLOW>\n\t\t\t<DOBJ? PLAYER>>>\n\t       T ;<WILLING? .PER>)>>"
  },
  "COM-CHECK": {
   "name": "COM-CHECK",
   "file": "people.zil",
   "line": 507,
   "endLine": 629,
   "source": "<ROUTINE COM-CHECK (PER \"AUX\" N)\n \t <SET N <GETP .PER ,P?LINE>>\n\t <COND (<VERB? $CALL>\t;\"e.g. TAMARA, LOVE ME\"\n\t\t<DONT-UNDERSTAND>\n\t\t<RETURN ,M-OTHER>)\n\t       (<TRANSIT-TEST .PER>\n\t\t<RFATAL>)\n\t       (<VERB? ALARM HELLO SORRY>\n\t\t<COND (<OR <DOBJ? ROOMS> <==? ,PRSO .PER>>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,PRSA .PER>\n\t\t       <RTRUE>)\n\t\t      (T <RFALSE>)>)\n\t       (<L? 0 .N>\n\t\t<TELL \"\\\"I'm too \">\n\t\t<COND (<1? .N> <TELL \"peeved\">) (T <TELL \"angry\">)>\n\t\t<TELL \" with you now.\\\"\" CR>\n\t\t<RTRUE>)\n\t       (<VERB? NO THANK YES>\n\t\t<RFATAL>\t\t;\"let thru to next handler\")\n\t       (<VERB? FOLLOW WALK-TO>\n\t\t<COND (<AND <VERB? WALK-TO>\n\t\t\t    <DOBJ? SLEEP-GLOBAL ;BED>>\n\t\t       <RFATAL>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"I will go where I please, thank you very much.\\\"\" CR>\n\t\t       <RTRUE>)>)\n\t       (<VERB? INVENTORY>\n\t\t<COND (<NOT <CARRY-CHECK .PER>>\n\t\t       <TELL He+verb .PER \"is\" \"n't holding anything.\" CR>)>\n\t\t<RTRUE>)\n\t       (<VERB? LISTEN>\n\t\t<COND (<OR <DOBJ? PLAYER>\n\t\t\t   <NOT <IN? ,PRSO ,GLOBAL-OBJECTS>>>\n\t\t       <TELL \"\\\"I'm trying to!\\\"\" CR>\n\t\t       <RTRUE>)\n\t\t      (T <RFALSE>)>)\n\t       (<VERB? RUB>\n\t\t<FACE-RED>\n\t\t<RTRUE>)>\n\t <COND ;(<AND <VERB? DANCE> <DOBJ? PLAYER>>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<PERFORM ,PRSA .PER>\n\t\t<RTRUE>)\n\t       (<OR ;<VERB? DANCE>\n\t\t    <AND <VERB? WALK>\n\t\t\t <DOBJ? P?OUT>>>\n\t\t<RFATAL> ;\"let thru to next handler\")\n\t       (<VERB? KISS>\n\t\t<UNSNOOZE .PER>\n\t\t<TELL\n\"\\\"I really don't think this is the proper time or place.\\\"\" CR>)\n\t       ;(<VERB? WALK-TO>\n\t\t<COND (<DOBJ? HERE GLOBAL-HERE>\n\t\t       <TELL \"\\\"I am here!\\\"\" CR>)>)\n\t       (<VERB? TAKE ;\"GET SEND SEND-TO BRING\">\n\t\t<COND (<IN? ,PRSO ,PLAYER>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?GIVE ,PRSO .PER>\n\t\t       <RTRUE>)>)\n\t       (<VERB? EXAMINE LOOK-INSIDE READ>\n\t\t<COND (<IN? ,PRSO ,PLAYER>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?SHOW .PER ,PRSO>\n\t\t       <RTRUE>)>)\n\t       (<AND <VERB? GIVE THROW-AT> <FSET? ,PRSI ,PERSONBIT>>\n\t\t<SETG WINNER ,PRSI>\n\t\t<PERFORM ,V?ASK-FOR .PER ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <VERB? SGIVE> <FSET? ,PRSO ,PERSONBIT>>\n\t\t<SETG WINNER ,PRSO>\n\t\t<PERFORM ,V?ASK-FOR .PER ,PRSI>\n\t\t<RTRUE>)\n\t       (<VERB? HELP>\n\t\t<COND (<EQUAL? ,PRSO <> ,PLAYER>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?ASK .PER>\n\t\t       <RTRUE>)\n\t\t      (T <RFATAL>)>)\n\t       (<VERB? FIND SHOW SSHOW>\n\t\t<COND (<VERB? SHOW>\n\t\t       <SETG PRSA ,V?SSHOW>\n\t\t       <SET N ,PRSI>\n\t\t       <SETG PRSI ,PRSO>\n\t\t       <SETG PRSO .N>)>\n\t\t<COND (<IN? ,PRSO ,ROOMS>\t;\"SHOW ME MY ROOM\"\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?WALK-TO ,PRSO>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,PRSO .PER>\n\t\t       <COND (<==? <ITAKE> T>\n\t\t\t      <TELL\nHe .PER \" fumbles in\" his .PER \" pocket and produces\" him ,PRSO \".\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<VERB? FIND>\n\t\t       ;<SETG WINNER ,PLAYER>\n\t\t       ;<PERFORM ,PRSA ,PRSO>\n\t\t       <RFATAL>)>)\n\t       (<VERB? TELL>\n\t\t<COND (<DOBJ? PLAYER>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?ASK .PER>\n\t\t       <RTRUE>)>)\n\t       (<VERB? TELL-ABOUT>\n\t\t<COND (<FSET? ,PRSO ,PERSONBIT>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?ASK-ABOUT .PER ,PRSI>\n\t\t       ;<SETG WINNER .PER>\n\t\t       <RTRUE>)>)\n\t       (<VERB? STOP WAIT-FOR>\n\t\t<COND (<DOBJ? HERE GLOBAL-HERE PLAYER ROOMS>\n\t\t       <COND (<==? .PER ,FOLLOWER>\n\t\t\t      <SETG FOLLOWER 0>\n\t\t\t      <TELL \"\\\"As you wish.\\\"\" CR>)\n\t\t\t     (T\n\t\t\t      <SETG WINNER ,PLAYER>\n\t\t\t      <PERFORM ,V?$CALL .PER>\n\t\t\t      <RTRUE>)>)>)\n\t       (<VERB? ;WHAT TALK-ABOUT>\n\t\t<SETG WINNER ,PLAYER>\n\t        <PERFORM ,V?ASK-ABOUT .PER ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "COMMON-ASK-ABOUT": {
   "name": "COMMON-ASK-ABOUT",
   "file": "people.zil",
   "line": 631,
   "endLine": 644,
   "source": "<ROUTINE COMMON-ASK-ABOUT (PER OBJ)\n <COND (<EQUAL? .OBJ .PER>\n\t<TELL \"\\\"I have no secrets. Anyone can see what I am.\\\"\" CR>)\n       (<EQUAL? .OBJ ,PLAYER>\n\t<TELL \"\\\"You're Arthur Dent, the next-to-last Earthling.\\\"\" CR>)\n       (<FSET? .OBJ ,PERSONBIT>\n\t<RFALSE>)\n       (<EQUAL? .OBJ ,OBJECT-OF-GAME>\n\t<TELL\n\"\\\"Oh...you're trying to figure that out also? The\nmanual's not much help, is it? By the way, do you know your score? I don't.\nMy computer doesn't have a status line.\\\"\" CR>)\n       (<IN? .OBJ .PER>\n\t<TELL \"\\\"I have it right here.\\\"\" CR>)>>"
  },
  "COMMON-OTHER": {
   "name": "COMMON-OTHER",
   "file": "people.zil",
   "line": 646,
   "endLine": 662,
   "source": "<ROUTINE COMMON-OTHER (PER \"AUX\" (X <>) N)\n <COND (<VERB? ASK> <RFALSE>)\n       (<VERB? EXAMINE>\n\t<TELL <GETP .PER ,P?TEXT> CR>\n\t<COND (<AND <IN? .PER ,HERE>\n\t\t    <SET N <FIRST? .PER>>\n\t\t    <NOT <FSET? .N ,NDESCBIT>>>\n\t       <COND (<CARRY-CHECK .PER>\n\t\t      <SET X T>)>)>\n\t<COND (<FSET? .PER ,MUNGBIT>\n\t       <COND (<NOT <ZERO? .X>> <TELL \"And\">)>\n\t       <HE-SHE-IT .PER <NOT .X> \"is\">\n\t       <TELL !\\  <GET ,LDESC-STRINGS <GETP .PER ,P?LDESC>> \".\" CR>)>\n\t<RTRUE>)\n       (<AND <EQUAL? ,PRSO .PER> <VERB? SHOW>>\n\t<PERFORM ,V?ASK-ABOUT ,PRSO ,PRSI>\n\t<RTRUE>)>>"
  },
  "DOOR-ROOM": {
   "name": "DOOR-ROOM",
   "file": "places.zil",
   "line": 13,
   "endLine": 20,
   "source": "<ROUTINE DOOR-ROOM (RM DR \"AUX\" (P 0) TBL)\n\t <REPEAT ()\n\t\t <COND (<OR <0? <SET P <NEXTP .RM .P>>>\n\t\t\t    <L? .P ,LOW-DIRECTION>>\n\t\t\t<RFALSE>)\n\t\t       (<AND <==? ,DEXIT <PTSIZE <SET TBL <GETPT .RM .P>>>>\n\t\t\t     <==? .DR <GET/B .TBL ,DEXITOBJ>>>\n\t\t\t<RETURN <GET/B .TBL ,REXIT>>)>>>"
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "places.zil",
   "line": 22,
   "endLine": 30,
   "source": "<ROUTINE FIND-IN (RM FLAG \"OPTIONAL\" (EXCLUDED <>) \"AUX\" O)\n\t<SET O <FIRST? .RM>>\n\t<REPEAT ()\n\t <COND (<NOT .O> <RFALSE>)\n\t       (<AND <FSET? .O .FLAG>\n\t\t     <NOT <FSET? .O ,INVISIBLE>>\n\t\t     <NOT <==? .O .EXCLUDED>>>\n\t\t<RETURN .O>)\n\t       (T <SET O <NEXT? .O>>)>>>"
  },
  "FIND-FLAG-NOT": {
   "name": "FIND-FLAG-NOT",
   "file": "places.zil",
   "line": 32,
   "endLine": 40,
   "source": "<ROUTINE FIND-FLAG-NOT (RM FLAG ;\"OPTIONAL\" ;(EXCLUDED <>) \"AUX\" O)\n\t<SET O <FIRST? .RM>>\n\t<REPEAT ()\n\t <COND (<NOT .O> <RFALSE>)\n\t       (<AND <NOT <FSET? .O .FLAG>>\n\t\t     <NOT <FSET? .O ,INVISIBLE>>\n\t\t     ;<NOT <==? .O .EXCLUDED>>>\n\t\t<RETURN .O>)\n\t       (T <SET O <NEXT? .O>>)>>>"
  },
  "FIND-FLAG-LG": {
   "name": "FIND-FLAG-LG",
   "file": "places.zil",
   "line": 42,
   "endLine": 51,
   "source": "<ROUTINE FIND-FLAG-LG (RM FLAG \"OPTIONAL\" (FLAG2 0) \"AUX\" TBL O (CNT 0) SIZE)\n\t <COND (<SET TBL <GETPT .RM ,P?GLOBAL>>\n\t\t<SET SIZE <RMGL-SIZE .TBL>>\n\t\t<REPEAT ()\n\t\t\t<SET O <GET/B .TBL .CNT>>\n\t\t\t<COND (<AND <FSET? .O .FLAG>\n\t\t\t\t    <NOT <FSET? .O ,INVISIBLE>>\n\t\t\t\t    <OR <0? .FLAG2> <FSET? .O .FLAG2>>>\n\t\t\t       <RETURN .O>)\n\t\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>)>>"
  },
  "FIND-FLAG-HERE": {
   "name": "FIND-FLAG-HERE",
   "file": "places.zil",
   "line": 53,
   "endLine": 61,
   "source": "<ROUTINE FIND-FLAG-HERE (FLAG \"OPTIONAL\" (NOT1 <>) (NOT2 <>) \"AUX\" O)\n\t<SET O <FIRST? ,HERE>>\n\t<REPEAT ()\n\t <COND (<NOT .O> <RFALSE>)\n\t       (<AND <FSET? .O .FLAG>\n\t\t     <NOT <FSET? .O ,INVISIBLE>>\n\t\t     <NOT <EQUAL? .O .NOT1 .NOT2>>>\n\t\t<RETURN .O>)\n\t       (T <SET O <NEXT? .O>>)>>>"
  },
  "FIND-FLAG-HERE-NOT": {
   "name": "FIND-FLAG-HERE-NOT",
   "file": "places.zil",
   "line": 74,
   "endLine": 83,
   "source": "<ROUTINE FIND-FLAG-HERE-NOT (FLAG NFLAG \"OPTIONAL\" (NOT2 <>) \"AUX\" O)\n\t<SET O <FIRST? ,HERE>>\n\t<REPEAT ()\n\t <COND (<NOT .O> <RFALSE>)\n\t       (<AND <FSET? .O .FLAG>\n\t\t     <NOT <FSET? .O .NFLAG>>\n\t\t     <NOT <FSET? .O ,INVISIBLE>>\n\t\t     <NOT <EQUAL? .O .NOT2>>>\n\t\t<RETURN .O>)\n\t       (T <SET O <NEXT? .O>>)>>>"
  },
  "UNIMPORTANT-THING-F": {
   "name": "UNIMPORTANT-THING-F",
   "file": "places.zil",
   "line": 107,
   "endLine": 112,
   "source": "<ROUTINE UNIMPORTANT-THING-F ()\n\t <COND (<AND <VERB? ASK-ABOUT>\n\t\t     <EQUAL? ,PRSO ,GUIDE>>\n\t\t<RFALSE>)\n\t       (T\n\t\t<TELL \"That's not important; leave it alone.\" CR>)>>"
  },
  "WINDOW-F": {
   "name": "WINDOW-F",
   "file": "places.zil",
   "line": 132,
   "endLine": 142,
   "source": "<ROUTINE WINDOW-F ()\n <COND (<VERB? OPEN CLOSE LOCK UNLOCK>\n\t<COND (<VERB? OPEN>\n\t       <TELL \"The night air is too damp and chilly.\" CR>)\n\t      (T ;<VERB? CLOSE>\n\t       <ALREADY ,WINDOW \"closed\">\n\t       <RTRUE>)>)\n       (<VERB? DISEMBARK ;\"CLIMB OUT\" LEAVE THROUGH>\n\t<TELL \"It's closed tight against the mist.\" CR>)\n       (<VERB? LOOK-INSIDE LOOK-THROUGH LOOK-OUTSIDE>\n\t<TELL \"All you can see are grey shapes in the moonlight.\" CR>)>>"
  },
  "PUB-F": {
   "name": "PUB-F",
   "file": "places.zil",
   "line": 226,
   "endLine": 231,
   "source": "<ROUTINE PUB-F (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"Milliways is pleasant and cheerful and full of pleasant and cheerful\npeople who don't know they've got about twelve minutes to live and are\ntherefore having a spot of lunch.\" CR>)>>"
  },
  "BEER-F": {
   "name": "BEER-F",
   "file": "places.zil",
   "line": 304,
   "endLine": 351,
   "source": "<ROUTINE BEER-F ()\n\t <COND (<AND <VERB? DRINK ENJOY COUNT SMELL RUB TAKE>\n\t\t     <FSET? ,BEER ,NDESCBIT>>\n\t\t<TELL \"You'd better buy some first.\" CR>)\n\t       (<VERB? COUNT>\n\t\t<TELL \"Lots.\" CR>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"Just drink it!\" CR>)\n\t       (T\n\t\t<COND (<VERB? DRINK ENJOY>\n\t\t       <SETG SCORE <+ ,SCORE 5>>\n\t\t       <SETG DRUNK-LEVEL <+ ,DRUNK-LEVEL 1>>\n\t\t       <COND (<EQUAL? ,DRUNK-LEVEL 4>\n\t\t\t      <TELL\n\"You can hear the muffled noise of your home being demolished, and the\ntaste of the beer sours in your mouth.\" CR CR>\n\t\t              ;<PERFORM ,V?GET-DRUNK ,ROOMS>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,DRUNK-LEVEL 3>\n\t\t\t      ;<QUEUE I-FORD -1>\n\t\t\t      ;<SETG HOUSE-DEMOLISHED T>\n\t\t\t      ;<SETG PROSSER-LYING <>>\n\t\t\t      <TELL\n\"There is a distant crash which Ford explains is nothing to worry about,\nprobably just your house being knocked down.\" CR>)\n\t\t\t     (<EQUAL? ,DRUNK-LEVEL 2>\n\t\t\t      <TELL\n\"It is really very pleasant stuff, with a very good dry, nutty flavour, some\nlight froth on top, and a deep colour. It is at exactly room temperature. You\nreflect that the world cannot be all bad when there are such pleasures in it.|\n|\nFord mentions that the world is going to end in about twelve minutes.\" CR>)\n\t\t\t     (<EQUAL? ,DRUNK-LEVEL 1>\n\t\t\t      <TELL\n\"It's very good beer, brewed by a small local company. You particularly like\nits flavour, which is why you woke up feeling so wretched this morning. You\nwere at somebody's birthday party here in the Pub last night.|\n|\nYou begin to relax and enjoy yourself, so when Ford mentions that he's from a\nsmall planet in the vicinity of Betelgeuse, not from Guildford as he usually\nclaims, you take it in your stride, and say \\\"Oh yes, which part?\\\"\" CR>)>)\n\t\t      (<VERB? BUY>\n\t\t       <COND ;(<FSET? ,BEER ,NDESCBIT>\n\t\t\t      <PERFORM ,V?BUY ,PEANUTS>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL\nD ,FORD \" has already bought an enormous quantity for you!\" CR>)>)>)>>"
  },
  "SANDWICH-F": {
   "name": "SANDWICH-F",
   "file": "places.zil",
   "line": 363,
   "endLine": 389,
   "source": "<ROUTINE SANDWICH-F ()\n\t <COND (<AND <VERB? BUY>\n\t\t     <NOT ,SANDWICH-BOUGHT>>\n\t        <MOVE ,SANDWICH ,PLAYER>\n\t\t<FSET ,SANDWICH ,TAKEBIT>\n\t        <FCLEAR ,SANDWICH ,TRYTAKEBIT>\n\t\t<FCLEAR ,SANDWICH ,NDESCBIT>\n\t\t<SETG SANDWICH-BOUGHT T>\n\t\t<TELL\n\"The barman gives you a \" D ,SANDWICH \". The bread is like the stuff that\nstereos come packed in, the cheese would be great for rubbing out spelling\nmistakes, and margarine and pickle have performed an unedifying chemical\nreaction to produce something that shouldn't be, but is, turquoise. Since\nit is clearly unfit for human consumption you are grateful to be charged\nonly a pound for it.\" CR>)\n\t       (<VERB? BUY>\n\t\t<TELL \"You already did.\" CR>)\n\t       (<AND <VERB? TAKE EAT ENJOY>\n\t\t     <FSET? ,SANDWICH ,TRYTAKEBIT>\n\t\t     <EQUAL? ,HERE ,PUB>>\n\t\t<TELL ,HANDS-OFF CR>)\n\t       (<VERB? EAT ENJOY>\n\t\t<MOVE ,SANDWICH ,LOCAL-GLOBALS>\n\t\t<SETG SCORE <- ,SCORE 30>>\n\t\t<COND (T\n\t\t       <TELL\n\"It is one of the least rewarding taste experiences you can recall.\" CR>)>)>>"
  },
  "RANDOM-PSEUDO": {
   "name": "RANDOM-PSEUDO",
   "file": "things.zil",
   "line": 4,
   "endLine": 12,
   "source": "<ROUTINE RANDOM-PSEUDO ()\n <COND (<VERB? ASK-ABOUT ASK-CONTEXT-ABOUT LOOK-BEHIND LOOK-UNDER TELL-ABOUT>\n\t<RFALSE>)\n       (<VERB? EXAMINE LOOK-INSIDE SEARCH>\n\t<NOTHING-SPECIAL>\n\t<RTRUE>)\n       (T\n\t<WONT-HELP>\n\t;<TELL \"You can't do anything useful with that.\" CR>)>>"
  },
  "TOOTHBRUSH-F": {
   "name": "TOOTHBRUSH-F",
   "file": "things.zil",
   "line": 33,
   "endLine": 44,
   "source": "<ROUTINE TOOTHBRUSH-F ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <NOT <FSET? ,TOOTHBRUSH ,TOUCHBIT>>>\n\t\t<MOVE ,TOOTHBRUSH ,PLAYER>\n\t\t<FSET ,TOOTHBRUSH ,TOUCHBIT>\n\t\t<FCLEAR ,TOOTHBRUSH ,TRYTAKEBIT>\n\t\t<TELL\n\"As you pick up the \" D ,TOOTHBRUSH \" a tree outside the window collapses.\nThere is no causal relationship between these two events.\">\n\t\t;<COND (<FSET? ,PHONE ,TOUCHBIT>\n\t\t       <TWO-TREES>)>\n\t\t<CRLF>)>>"
  },
  "GOWN-F": {
   "name": "GOWN-F",
   "file": "things.zil",
   "line": 58,
   "endLine": 91,
   "source": "<ROUTINE GOWN-F ()\n\t <COND (<AND <VERB? OPEN CLOSE>\n\t\t     <NOT <FSET? ,GOWN ,WORNBIT>>>\n\t\t<TELL\n\"It's hard to open or close the pocket unless you're wearing the gown.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The dressing gown is faded and battered, and is\nclearly a garment which has seen better decades. It has a pocket which is \">\n\t\t<COND (<FSET? ,GOWN ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<COND ;(,GOWN-HUNG\n\t\t       <TELL \". It is hanging from a \" D ,HOOK \".\">)\n\t\t      (T\n\t\t       <TELL \", and a small loop at the back of the collar.\">)>\n\t\t;<COND (,SLEEVE-TIED\n\t\t       <TELL \" The sleeves are tied closed.\">)>\n\t\t<CRLF>)\n\t       ;(<AND <VERB? TAKE>\n\t\t     <EQUAL? ,GOWN ,PRSO>\n\t\t     ,HEADACHE>\n\t\t<FCLEAR ,GOWN ,TRYTAKEBIT>\n\t\t<FCLEAR ,GOWN ,NDESCBIT>\n\t\t<MOVE ,GOWN ,PLAYER>\n\t\t<TELL\n\"Luckily, this is large enough for you to get hold of. You notice something\nin the pocket.\" CR>)\n\t       ;(<AND <VERB? WEAR>\n\t\t     ,SLEEVE-TIED>\n\t\t<TELL \"You'll have to untie the sleeve first.\" CR>)\n\t       ;(<VERB? TIE UNTIE>\n\t\t<PERFORM ,PRSA ,SLEEVES>\n\t\t<RTRUE>)>>"
  },
  "SLEEVES-F": {
   "name": "SLEEVES-F",
   "file": "things.zil",
   "line": 99,
   "endLine": 119,
   "source": "<ROUTINE SLEEVES-F ()\n\t <COND (<NOT <VISIBLE? ,GOWN>>\n\t\t<NOT-HERE ,SLEEVES>)\n\t       (<VERB? ;WEAR TAKE>\n\t\t<PERFORM ,PRSA ,GOWN>\n\t\t<RTRUE>)\n\t       ;(<VERB? TIE CLOSE>\n\t\t<SETG PRSO ,GOWN>\n\t\t<COND (<IDROP>\n\t\t       <RTRUE>)\n\t\t      (,SLEEVE-TIED\n\t\t       <TELL \"It is.\" CR>)\n\t\t      (T\n\t\t       <SETG SLEEVE-TIED T>\n\t\t       <TELL \"The sleeves are now tied closed.\" CR>)>)\n\t       ;(<VERB? UNTIE OPEN>\n\t\t<COND (,SLEEVE-TIED\n\t\t       <SETG SLEEVE-TIED <>>\n\t\t       <TELL \"Untied.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It isn't tied!\" CR>)>)>>"
  },
  "THING-F": {
   "name": "THING-F",
   "file": "things.zil",
   "line": 131,
   "endLine": 147,
   "source": "<ROUTINE THING-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"Apart from a label on the bottom saying \\\"Made in Ibiza\\\" it furnishes you\nwith no clue as to its purpose, if indeed it has one. You are surprised to see\nit because you thought you'd thrown it away. Like most gifts from your aunt,\"\n,GET-RID CR>)\n\t       (<AND <VERB? DROP>\n\t\t     ;<NOT <EQUAL? ,HERE ,MAZE ,ACCESS-SPACE>>>\n\t\t<MOVE ,THING ,HERE>\n\t\t<TELL\n\"It falls to the ground with a light \\\"thunk.\\\" It doesn't do anything\nelse at all.\" CR>)\n\t       (<VERB? CLOSE>\n\t\t<TELL\n\"Come to think of it, you vaguely remember an instruction booklet with\ndirections for that. You never read it and lost it months ago.\" CR>)>>"
  },
  "I-THING": {
   "name": "I-THING",
   "file": "things.zil",
   "line": 151,
   "endLine": 169,
   "source": "<ROUTINE I-THING ()\n\t <QUEUE I-THING <+ 4 <RANDOM 4>>>\n\t <COND (<OR ;<NOT <EQUAL? ,IDENTITY-FLAG ,ARTHUR>>\n\t\t    ;<AND <EQUAL? ,HERE ,ENGINE-ROOM>\n\t\t\t <L? ,LOOK-COUNTER 3>>\n\t\t    ;<EQUAL? ,HERE ,DARK ,ACCESS-SPACE ,MAZE>\n\t\t    <VISIBLE? ,THING>\n\t\t    <HELD? ,THING>\n\t\t    ;<IN? ,FLEET ,HERE>>\n\t\t<RFALSE>)>\n\t <COND (<PROB 40>\n\t\t<MOVE ,THING ,HERE>)\n\t       (<AND <FSET? ,GOWN ,WORNBIT>\n\t\t     <FSET? ,GOWN ,OPENBIT>\n\t\t     <PROB 65>>\n\t\t<MOVE ,THING ,GOWN>)\n\t       (T\n\t\t<MOVE ,THING ,PLAYER>)>\n\t <RFALSE>>"
  },
  "GUIDE-DESCFCN": {
   "name": "GUIDE-DESCFCN",
   "file": "things.zil",
   "line": 182,
   "endLine": 183,
   "source": "<ROUTINE GUIDE-DESCFCN (\"OPTIONAL\" X)\n\t <TELL \"There is a copy of \" ,GUIDE-NAME \" here.\" CR>>"
  },
  "GUIDE-F": {
   "name": "GUIDE-F",
   "file": "things.zil",
   "line": 185,
   "endLine": 276,
   "source": "<ROUTINE GUIDE-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The Guide is a Mark II model. Its only resemblance to the Mark IV pictured\nin the brochure in your game package is the large, friendly \\\"Don't Panic!\\\"\non its cover.|\n|\nThe Guide is a Sub-Etha Relay. You can use it to tap information from a huge\nand distant data bank by consulting the Guide about some item or subject.\" CR>)\n\t       (<AND <VERB? ASK-ABOUT>\n\t\t     <DOBJ? GUIDE>>\n\t\t<COND (<FSET? ,TOWEL ,WORNBIT>\n\t\t       <TELL ,WITH-TOWEL CR>\n\t\t       <RTRUE>)\n\t\t      ;(<IOBJ? ACCESS-SPACE>\n\t\t       <TELL\n\"Suddenly, agents of the \" ,AGENCY \" pop in using Sub-Etha belts, rough you up\na bit, tell you there's no such thing as the \" ,AGENCY \" and never to consult \"\nD ,GUIDE \" about the \" ,AGENCY \" again; then they leave.\" CR>\n\t\t       <RTRUE>)>\n\t\t<TELL\n\"The Guide checks through its Sub-Etha-Net database and eventually comes\nup with the following entry:\" CR CR>\n\t\t<COND (<IOBJ? GUIDE>\n\t\t       <TELL\nD ,GUIDE \" is a wholly remarkable product.\" ,ALREADY-KNOW-THAT CR>)\n\t\t      (<IOBJ? HEART-OF-GOLD>\n\t\t       <TELL\n\"There is absolutely no such spaceship as \" D ,HEART-OF-GOLD \" and anything\nyou've ever read in this spot to the contrary was just a prank.|\n   -- \" ,AGENCY CR>)\n\t\t      (<IOBJ? SCC ;GALLEY>\n\t\t       <TELL\n\"The \" ,SCC \" incompetently produces a wide range of inefficient and unreliable\nhigh-tech machinery. However, thanks to SCC's ruthless marketing division, this\njunk accounts for over 95% of the high-tech machinery sold in the Galaxy.\n(SCC's marketing division will be the first against the wall when the\nrevolution comes.)\" CR>)\n\t\t      (<IOBJ? MARVIN>\n\t\t       <TELL\n,GPP \" are a misguided attempt by the \" ,SCC \" to make their machines behave\nmore like people. Among the more miserable failures: paranoid-depressive\nrobots and over-protective computers.\" CR>)\n\t\t      ;(<IOBJ? DARK>\n\t\t       <TELL\n\"A must for the serious hitchhiker, peril-sensitive sunglasses darken at the\nfirst hint of danger, thus shielding the wearer from seeing anything alarming.\nRecommended brand: Joo Janta.\" CR>)   \n\t\t      (<IOBJ? RAMP>\n\t\t       <TELL\n\"According to legend, Magrathea was a planet that amassed incredible wealth by\nmanufacturing other planets. The legends also mention it as the setting\nof the very eagerly awaited second Infocom Hitchhiker's game.\" CR>) \n\t\t      (<OR <IOBJ? ZAPHOD>\n\t\t\t   ;<AND <IOBJ? ME>\n\t\t\t\t<EQUAL? ,IDENTITY-FLAG ,ZAPHOD>>>\n\t\t       <TELL D ,ZAPHOD \" is the current\" ,PRESIDENT \".\" CR>) \n\t\t      (<IOBJ? BABEL-FISH>\n\t\t       <TELL\n\"A mind-bogglingly improbable creature. A \" D ,BABEL-FISH \", when placed in\none's ear, allows one to understand any language.\" CR>)\n\t\t      (<IOBJ? TOWEL>\n\t\t       <TELL\n\"A towel is the most useful thing (besides the Guide) a Galactic hitchhiker\ncan have. Its uses include travel, combat, communications, protection from the\nelements, hand-drying and reassurance. Towels have great symbolic value, with\nmany associated points of honour. Never mock the towel of another, even if it\nhas little pink and blue flowers on it. Never do something to somebody else's\ntowel that you would not want them to do to yours. And, if you borrow the towel\nof another, you MUST return it before leaving their world.\" CR>)\n\t\t      (<IOBJ? GARGLE-BLASTER>\n\t\t       <TELL\n\"The best drink in existence; somewhat like having your brains smashed out by\na slice of lemon wrapped around a large gold brick.\" CR>)\n\t\t      (<IOBJ? THIRD-PLANET ;MAZE>\n\t\t       <TELL \"Mostly harmless.\" CR>)\n\t\t      (<FSET? ,PRSI ,TOOLBIT>\n\t\t       <TELL\n\"The editor responsible for entries under this heading has been out to lunch\nfor a couple of years but is expected back soon, at which point there will be\nrapid updates. Until then, don't panic, unless your situation is really a life\nor death one, in which case, sure, go ahead, panic.\" CR>)\n\t\t      ;(<IOBJ? TEA>\n\t\t       <TELL\n\"Sorry, that portion of our Sub-Etha database was accidentally deleted last\nnight during a wild office party. The lost data will be restored as soon as\nwe find someone who knows where the back-up tapes are kept, if indeed any\nare kept at all.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"That is one of the Great Unanswered Questions. For a list of the others,\nconsult the Guide.\" CR>)>)>>"
  },
  "BABEL-FISH-F": {
   "name": "BABEL-FISH-F",
   "file": "things.zil",
   "line": 303,
   "endLine": 307,
   "source": "<ROUTINE BABEL-FISH-F ()\n\t <COND (<VERB? TAKE REMOVE>\n\t\t<TELL\n\"That would be foolish. Having a \" D ,BABEL-FISH \" in your ear is terribly\nuseful.\" CR>)>>"
  },
  "TOWEL-F": {
   "name": "TOWEL-F",
   "file": "things.zil",
   "line": 318,
   "endLine": 352,
   "source": "<ROUTINE TOWEL-F ()\n\t <COND (<AND <VERB? TAKE MOVE>\n\t\t     <DOBJ? TOWEL>\n\t\t     <FSET? ,TOWEL ,SURFACEBIT>>\n\t\t<FCLEAR ,TOWEL ,TRYTAKEBIT>\n\t\t<FCLEAR ,TOWEL ,SURFACEBIT>\n\t\t<ROB ,TOWEL ,HERE>\n\t\t<FCLEAR ,TOWEL ,CONTBIT>\n\t\t<FCLEAR ,TOWEL ,OPENBIT>\n\t\t<FCLEAR ,TOWEL ,NDESCBIT>\n\t\t<COND (<VERB? MOVE>\n\t\t       <TELL \"Okay, it's no longer covering the drain.\" CR>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<AND <VERB? PUT ;TIE>\n\t\t     <IOBJ? HEAD EYES>>\n\t\t<COND (<FSET? ,TOWEL ,WORNBIT>\n\t\t       <TELL \"It already is.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"There's no need for that. It's not as if there's a Bugblatter Beast around,\nor something.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND ;(<FSET? ,TOWEL ,SURFACEBIT>\n\t\t       <PERFORM ,V?EXAMINE ,DRAIN>\n\t\t       <COND (<FIRST? ,TOWEL>\n\t\t\t      <RFALSE>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"It's covered with little pink and blue flowers.\" CR>)>)\n\t       ;(<AND <VERB? LIE-DOWN>\n\t\t     <FSET? ,TOWEL ,SURFACEBIT>>\n\t\t<PERFORM ,V?STAND-BEFORE ,HOOK>\n\t\t<RTRUE>)>>"
  },
  "SATCHEL-DESCFCN": {
   "name": "SATCHEL-DESCFCN",
   "file": "things.zil",
   "line": 366,
   "endLine": 370,
   "source": "<ROUTINE SATCHEL-DESCFCN (\"OPTIONAL\" X)\n\t <TELL \"There is a satchel here.\">\n\t <ITEM-ON-SATCHEL-DESCRIPTION>\n\t <CRLF>\n\t <RTRUE>>"
  },
  "ITEM-ON-SATCHEL-DESCRIPTION": {
   "name": "ITEM-ON-SATCHEL-DESCRIPTION",
   "file": "things.zil",
   "line": 373,
   "endLine": 377,
   "source": "<ROUTINE ITEM-ON-SATCHEL-DESCRIPTION ()\n\t <COND (,ITEM-ON-SATCHEL\n\t\t<TELL \" Sitting on top of it is \">\n\t\t<TELL a ,ITEM-ON-SATCHEL>\n\t\t<TELL \".\">)>>"
  },
  "SATCHEL-F": {
   "name": "SATCHEL-F",
   "file": "things.zil",
   "line": 379,
   "endLine": 411,
   "source": "<ROUTINE SATCHEL-F ()\n\t <COND (<AND <VERB? OPEN>\n\t\t     ;<NOT <EQUAL? ,IDENTITY-FLAG ,FORD>>>\n\t\t<PRIVATE \"Ford\">)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,SATCHEL ,PRSI>>\n\t\t<COND (<HELD? ,SATCHEL>\n\t\t       <TELL \"Put down the satchel first.\" CR>)\n\t\t      (,ITEM-ON-SATCHEL\n\t\t       <TELL \"But\">\n\t\t       <TELL the ,ITEM-ON-SATCHEL>\n\t\t       <TELL \" is already on the satchel.\" CR>)\n\t\t      (T\n\t\t       <SETG ITEM-ON-SATCHEL ,PRSO>\n\t\t       <MOVE ,PRSO ,HERE>\n\t\t       <FSET ,PRSO ,NDESCBIT>\n\t\t       <FSET ,PRSO ,TRYTAKEBIT>\n\t\t       <TELL \"Okay,\">\n\t\t       <TELL the ,PRSO>\n\t\t       <TELL \" is now sitting on the satchel.\" CR>)>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The satchel, which is \">\n\t\t<COND (<FSET? ,SATCHEL ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL \", is fairly bulky.\">\n\t\t<ITEM-ON-SATCHEL-DESCRIPTION>\n\t\t<CRLF>)\n\t       (<AND <VERB? TAKE>\n\t\t     <IN? ,SATCHEL ,FORD>>\n\t\t<TELL\n\"Ford says, \\\"Hey, Arthur, keep \" D ,HANDS \"s off my satchel!\\\"\" CR>)>>"
  },
  "PRIVATE": {
   "name": "PRIVATE",
   "file": "things.zil",
   "line": 413,
   "endLine": 415,
   "source": "<ROUTINE PRIVATE (STRING)\n\t <TELL\n\"You can't. It's not yours. It's \" .STRING \"'s and it's private.\" CR>>"
  },
  "GAME-F": {
   "name": "GAME-F",
   "file": "things.zil",
   "line": 444,
   "endLine": 447,
   "source": "<ROUTINE GAME-F ()\n \t <COND (<VERB? EXAMINE FIND LAMP-ON PLAY READ THROUGH>\n\t        <SETG CLOCK-WAIT T>\n\t        <TELL \"[You're playing it now!]\" CR>)>>"
  },
  "DINNER-D": {
   "name": "DINNER-D",
   "file": "things.zil",
   "line": 460,
   "endLine": 467,
   "source": "<ROUTINE DINNER-D (ARG \"AUX\" (L <LOC ,DINNER>))\n <COND (T ;<EQUAL? .L ,KITCHEN ,SIDEBOARD>\n\t<TELL \"An appetizing aroma wafts from an array of covered dishes\">\n\t;<COND (<==? .L ,KITCHEN>\n\t       <TELL \" sitting about\">)\n\t      (<==? .L ,SIDEBOARD>\n\t       <TELL \" on the \" 'SIDEBOARD>)>\n\t<TELL \".\" CR>)>>"
  },
  "DINNER-F": {
   "name": "DINNER-F",
   "file": "things.zil",
   "line": 469,
   "endLine": 508,
   "source": "<ROUTINE DINNER-F (\"AUX\" I (L <LOC ,DINNER>))\n <COND ;(<VERB? DRESS>\n\t<COND (<EQUAL? ,HERE <META-LOC ,DINNER-OUTFIT>>\n\t       <PERFORM ,V?WEAR ,DINNER-OUTFIT>\n\t       <RTRUE>)\n\t      (T\n\t       <NOT-HERE ,DINNER-OUTFIT>\n\t       <RTRUE>)>)\n       (<VERB? EAT>\n\t<COND ;(<FSET? ,DINNER ,TRYTAKEBIT>\t;<QUEUED? ,I-DINNER-SIT>\n\t       <TELL\n\"You look around and notice that no one else is eating yet.\" CR>)\n\t      (T <TELL \"You take a bite and find it delicious.\" CR>)>)\n       (<VERB? EXAMINE ;SMELL>\n\t<TELL\n\"A lovely assortment of fish, fowl, greens, and sweets fills the \">\n\t<COND ;(<EQUAL? .L ,KITCHEN ,SIDEBOARD>\n\t       <TELL \"dishes.\" CR>)\n\t      (T <TELL \"plate.\" CR>)>)\n       ;(<VERB? TAKE LAMP-ON ;\"start\">\n\t<COND (<FSET? ,DINNER ,TRYTAKEBIT>\n\t       <COND (<==? .L ,KITCHEN>\n\t\t      <TELL \"It's not ready yet.\" CR>)\n\t\t     (<==? .L ,SIDEBOARD>\n\t\t      <SET L <I-DINNER-SIT>>\n\t\t      <COND (<ZERO? .L>\n\t\t\t     <TELL\n\"You look around and notice that no one else is eating yet.\"\n;\"Not all the guests are ready yet.\" CR>\n\t\t\t     <RTRUE>)\n\t\t\t    (T <RETURN .L>)>)>)>)\n       ;(<VERB? WAIT-FOR>\n\t<COND (<SET I <QUEUED? ,I-DINNER>>\n\t       <V-WAIT <- ,DINNER-TIME ,PRESENT-TIME> ;.I <> T>\n\t       <RTRUE>)>)\n       ;(<VERB? WALK-TO>\n\t<COND (<EQUAL? ,HERE ,DINING-ROOM>\n\t       <PERFORM ,PRSA <META-LOC ,DINNER>>)\n\t      (T <PERFORM ,PRSA ,DINING-ROOM>)>\n\t<RTRUE>)>>"
  },
  "TRANSCRIPT": {
   "name": "TRANSCRIPT",
   "file": "verbs.zil",
   "line": 4,
   "endLine": 5,
   "source": "<ROUTINE TRANSCRIPT (STR)\n\t<TELL \"Here \" .STR \"s a transcript of interaction with\" CR>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "verbs.zil",
   "line": 7,
   "endLine": 11,
   "source": "<ROUTINE V-SCRIPT ()\n\t<LOWCORE FLAGS <BOR <LOWCORE FLAGS> 1>>\n\t<TRANSCRIPT \"begin\">\n\t<V-VERSION>\n\t<RTRUE>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "verbs.zil",
   "line": 13,
   "endLine": 17,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TRANSCRIPT \"end\">\n\t<V-VERSION>\n\t<LOWCORE FLAGS <BAND <LOWCORE FLAGS> -2>>\n\t<RTRUE>>"
  },
  "V-$ID": {
   "name": "V-$ID",
   "file": "verbs.zil",
   "line": 19,
   "endLine": 25,
   "source": "<ROUTINE V-$ID ()\n\t <TELL \"Interpreter \">\n\t <PRINTN <LOWCORE INTID>>\n\t <TELL \" Version \">\n\t <PRINTC <LOWCORE INTVR>>\n\t <CRLF>\n\t <RTRUE>>"
  },
  "V-$VERIFY": {
   "name": "V-$VERIFY",
   "file": "verbs.zil",
   "line": 27,
   "endLine": 38,
   "source": "<ROUTINE V-$VERIFY ()\n <COND (<T? ,PRSO>\n\t<COND (<AND <EQUAL? ,PRSO ,INTNUM>\n\t\t    <EQUAL? ,P-NUMBER 105>>\n\t       <TELL N ,SERIAL CR>)\n\t      (T <DONT-UNDERSTAND>)>)\n       (T\n\t<TELL \"Verifying disk...\" CR>\n\t<COND (<VERIFY> <TELL \"The disk is correct.\" CR>)\n\t      (T <TELL\n\"Oh, oh! The disk seems to have a defect. Try verifying again. (If\nyou've already done that, the disk surely has a defect.)\" CR>)>)>>"
  },
  "YOU-WILL-GET": {
   "name": "YOU-WILL-GET",
   "file": "verbs.zil",
   "line": 93,
   "endLine": 94,
   "source": "<ROUTINE YOU-WILL-GET (STR)\n\t<TELL \"[Okay, you will get \" .STR \" descriptions.]\" CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "verbs.zil",
   "line": 96,
   "endLine": 98,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG VERBOSITY 0>\n\t <YOU-WILL-GET \"superbrief\">>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "verbs.zil",
   "line": 100,
   "endLine": 102,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSITY 1>\n\t <YOU-WILL-GET \"brief\">>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "verbs.zil",
   "line": 104,
   "endLine": 108,
   "source": "<ROUTINE V-VERBOSE ()\n\t<SETG VERBOSITY 2>\n\t<YOU-WILL-GET \"verbose\">\n\t<CRLF>\n\t<V-LOOK>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "verbs.zil",
   "line": 110,
   "endLine": 122,
   "source": "<ROUTINE V-INVENTORY ()\n\t;<COND (<ZERO? ,LIT>\n\t       <TOO-DARK>\n\t       <RFATAL>)>\n\t<TELL He+verb ,WINNER \"is\" \" holding\">\n\t<COND (<ZERO? <PRINT-CONTENTS ,WINNER>>\t;\"was PRINT-CONT\"\n\t       <TELL \" nothing\">)>\n\t<TELL !\\.>\n\t<COND ;(<AND <==? ,WINNER ,PLAYER>\n\t\t    <T? ,NOW-WEARING>>\n\t       <TELL !\\ >\n\t       <PERFORM ,V?LOOK-INSIDE ,POCKET>)\n\t      (T <CRLF>)>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "verbs.zil",
   "line": 124,
   "endLine": 131,
   "source": "<ROUTINE V-QUIT (\"OPTIONAL\" (ASK? T))\n\t <V-SCORE>\n\t <COND (<NOT .ASK?> <QUIT>)>\n\t <TELL\n\"[If you want to continue from this point at another time, you must\n\\\"SAVE\\\" first. Do you want to stop the story now?]\">\n\t <COND (<YES?> <QUIT>)\n\t       (T <TELL \"Okay.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "verbs.zil",
   "line": 133,
   "endLine": 139,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE>\n\t <TELL \"[Do you want to start over from the beginning?]\">\n\t <COND (<YES?>\n\t\t<RESTART>\n\t\t<TELL-FAILED>)\n\t       (T <TELL \"Okay.\" CR>)>>"
  },
  "TELL-FAILED": {
   "name": "TELL-FAILED",
   "file": "verbs.zil",
   "line": 141,
   "endLine": 144,
   "source": "<ROUTINE TELL-FAILED ()\n\t<TELL\n\"[Sorry, but it didn't work. Maybe your instruction manual or Reference\nCard can tell you why.]\" CR>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "verbs.zil",
   "line": 146,
   "endLine": 160,
   "source": "<ROUTINE V-SAVE (\"AUX\" X)\n\t <PUTB ,G-INBUF 1 0>\n\t <SETG CLOCK-WAIT T>\n\t <SET X <SAVE>>\n\t <COND (<OR <EQUAL? .X 2>\n\t\t    <BTST <LOWCORE FLAGS> 4>>\n\t\t<V-$REFRESH>)>\n\t <COND (<ZERO? .X>\n\t\t<TELL-FAILED>\n\t\t<RFATAL>)\n\t       (T\n\t        <TELL \"[Okay.]\" CR>\n\t\t<COND (<NOT <EQUAL? .X 1>>\n\t\t       <V-FIRST-LOOK>)>\n\t\t<RTRUE>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "verbs.zil",
   "line": 162,
   "endLine": 165,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<NOT <RESTORE>>\n\t\t<TELL-FAILED>\n\t\t<RFALSE>)>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "verbs.zil",
   "line": 167,
   "endLine": 170,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT <0? ,VERBOSITY>>\n\t\t       <DESCRIBE-OBJECTS>)>)>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "verbs.zil",
   "line": 172,
   "endLine": 178,
   "source": "<ROUTINE V-VERSION ()\n\t <TELL \"MILLIWAYS|\nInfocom interactive science fiction|\nCopyright (c) 1988 by Infocom, Inc.  All rights reserved.|\nRelease number \" N <BAND <LOWCORE ZORKID> *3777*> \" / Serial number \">\n\t <LOWCORE-TABLE SERIAL 6 PRINTC>\n\t <CRLF>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "verbs.zil",
   "line": 181,
   "endLine": 190,
   "source": "<ROUTINE V-SCORE ()\n\t <TELL\n\"Your score is \" N ,SCORE \" of a possible \" N ,SCORE-MAX \", in \" N ,MOVES\n\" turn\">\n\t <COND (<1? ,MOVES>\n\t\t<TELL \".\">)\n\t       (T\n\t\t<TELL \"s.\">)>\n\t <CRLF>\n\t ,SCORE>"
  },
  "NO-NEED": {
   "name": "NO-NEED",
   "file": "verbs.zil",
   "line": 192,
   "endLine": 201,
   "source": "<ROUTINE NO-NEED (\"OPTIONAL\" (STR <>) (OBJ <>))\n\t<SETG CLOCK-WAIT T>\n\t<TELL !\\( He+verb ,WINNER \"do\" \"n't need to \">\n\t<COND (.STR <TELL .STR>) (T <VERB-PRINT>)>\n\t<COND (<EQUAL? .STR \"go\" \"drive\">\n\t       <TELL \" in that \" D ,INTDIR>)\n\t      (<T? .OBJ>\n\t       <TELL the .OBJ>)\n\t      (T <TELL the ,PRSO>)>\n\t<TELL \".)\" CR>>"
  },
  "YOU-CANT": {
   "name": "YOU-CANT",
   "file": "verbs.zil",
   "line": 203,
   "endLine": 225,
   "source": "<ROUTINE YOU-CANT (\"OPTIONAL\" (STR <>) (WHILE <>) (STR1 <>))\n\t<SETG CLOCK-WAIT T>\n\t<TELL !\\( He ,WINNER \" can't \">\n\t<COND (<ZERO? .STR>\n\t       <VERB-PRINT>)\n\t      (T <TELL .STR>)>\n\t<COND (<EQUAL? .STR \"go\" \"drive\">\n\t       <TELL \" in that \" D ,INTDIR>)\n\t      (T\n\t       <COND (<==? ,PRSO ,PSEUDO-OBJECT>\n\t\t      <TELL \" it\">)\n\t\t     (<AND <DOBJ? FLOOR>\n\t\t\t   <OUTSIDE? ,HERE>>\n\t\t      <TELL \" the ground\">)\n\t\t     (T <TELL the ,PRSO>)>\n\t       <COND (.STR1\n\t\t      <TELL \" while\">\n\t\t      <COND (.WHILE\n\t\t\t     <TELL he+verb .WHILE \"is\">)\n\t\t\t    (T <TELL he+verb ,PRSO \"is\">)>\n\t\t      <TELL !\\  .STR1>)\n\t\t     ;(T <TELL \" now\">)>)>\n\t<TELL \".)\" CR>>"
  },
  "TELL-BEING-WORN": {
   "name": "TELL-BEING-WORN",
   "file": "verbs.zil",
   "line": 240,
   "endLine": 245,
   "source": "<ROUTINE TELL-BEING-WORN (OBJ)\n\t<COND (<FSET? .OBJ ,WORNBIT>\n\t       <TELL \" (actually, wearing it)\">)\n\t      ;(<AND <FSET? .OBJ ,ONBIT>\n\t\t    <NOT <EQUAL? ,LIT ,HERE ;1>>>\n\t       <TELL \" (providing light)\">)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "verbs.zil",
   "line": 249,
   "endLine": 284,
   "source": "<ROUTINE PRINT-CONTENTS (CONT \"AUX\" OBJ NXT (1ST? T) (VAL <>))\n\t <SET OBJ <FIRST? .CONT>>\n\t <REPEAT ()\n\t\t<COND (.OBJ\n\t\t       <SET NXT <NEXT? .OBJ>>\n\t\t       <COND (<OR <FSET? .OBJ ,INVISIBLE>\n\t\t\t\t  <FSET? .OBJ ,NDESCBIT> ;\"was semied\"\n\t\t\t\t  <EQUAL? .OBJ ,WINNER ;,NOW-WEARING>>\n\t\t\t      <MOVE .OBJ ,INTDIR>)>\n\t\t       <SET OBJ .NXT>)\n\t\t      (T\n\t\t       <RETURN>)>>\n\t <SET OBJ <FIRST? .CONT>>\n\t <COND (<NOT .OBJ>\n\t\t<COND (<NOT <==? .CONT ,PLAYER>>\n\t\t       <TELL \" nothing \" <PICK-ONE-NEW ,YAWNS>>)>)\n\t       (T\n\t\t<REPEAT ()\n\t\t        <COND (.OBJ\n\t\t               <SET NXT <NEXT? .OBJ>>\n\t\t               <COND (.1ST?\n\t\t\t              <SET VAL T>\n\t\t\t\t      <SET 1ST? <>>)\n\t\t\t             (T\n\t\t\t              <COND (.NXT <TELL !\\,>)\n\t\t\t\t            (T <TELL \" and\">)>)>\n\t\t               <TELL the .OBJ>\n\t\t               <TELL-BEING-WORN .OBJ>\n\t\t\t       <THIS-IS-IT .OBJ>\n\t\t               <FCLEAR .OBJ ,SECRETBIT>\n\t\t\t       <FSET .OBJ ,SEENBIT>\n\t\t\t       <SET OBJ .NXT>)\n\t\t\t      (T\n\t\t               <RETURN>)>>)>\n\t <ROB ,INTDIR .CONT>\n\t .VAL>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "verbs.zil",
   "line": 286,
   "endLine": 486,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (CONT <>)\n\t\t\t   \"AUX\" OBJ NXT STR (VAL <>) (HE 0) (SHE 0)\n\t\t\t\t (FIRST T) (TWO? <>) (IT? <>) (ANY? <>))\n\t <COND (<ZERO? .CONT>\n\t\t<SET CONT ,HERE>)>\n\t <COND (<ZERO? ,LIT>\n\t        <TOO-DARK>\n\t        <RTRUE>)>\n      ;\"Hide invisible objects\"\n\t<SET OBJ <FIRST? .CONT>>\n\t<COND (<ZERO? .OBJ>\n\t       <RFALSE>)>\n\t<REPEAT ()\n\t\t<COND (.OBJ\n\t\t       <SET NXT <NEXT? .OBJ>>\n\t\t       <COND (<OR <FSET? .OBJ ,INVISIBLE>\n\t\t\t\t  <FSET? .OBJ ,NDESCBIT>\n\t\t\t\t  <EQUAL? .OBJ ,WINNER>\n\t\t\t\t  <AND <FSET? .OBJ ,PERSONBIT>\n\t\t\t\t       <OR <FSET? .OBJ ,RMUNGBIT>;\"not desc'd\"\n\t\t\t\t\t   ;<IN-MOTION? .OBJ>>>\n\t\t\t\t  <EQUAL? .OBJ <LOC ,PLAYER>>>\n\t\t\t      <FCLEAR .OBJ ,RMUNGBIT>\n\t\t\t      <MOVE .OBJ ,PSEUDO-OBJECT>)>\n\t\t       <SET OBJ .NXT>)\n\t\t      (T\n\t\t       <RETURN>)>>\n      <COND (<EQUAL? .CONT ,HERE>\n\t;\"Describe people in proper order:\"\n       <SET NXT ,CHARACTER-MAX>\n       <REPEAT ()\n\t       <PUT ,TOUCHED-LDESCS .NXT 0>\n\t       <COND (<DLESS? NXT 1> <RETURN>)>>\n       <SET NXT 0>\n       <REPEAT ()\n\t       <COND (<IGRTR? NXT ,CHARACTER-MAX>\n\t\t      <RETURN>)\n\t\t     (<IN? <SET OBJ <GET ,CHARACTER-TABLE .NXT>> ,HERE>\n\t\t      <PUT ,FOLLOW-LOC .NXT ,HERE>\n\t\t      <SET VAL <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t      <FSET .OBJ ,SEENBIT>\n\t\t      <COND (<OR <==? .VAL ,M-FATAL>\n\t\t\t\t <ZERO? .ANY?>>\n\t\t\t     <SET ANY? .VAL>)>\n\t\t      <COND (<FSET? .OBJ ,FEMALEBIT>\n\t\t\t     <COND (<0? .SHE> <SET SHE .OBJ>)\n\t\t\t\t   (T <SET SHE 1>)>)\n\t\t\t    (T\n\t\t\t     <COND (<0? .HE> <SET HE .OBJ>)\n\t\t\t\t   (T <SET HE 1>)>)>\n\t\t      <MOVE .OBJ ,PSEUDO-OBJECT>)>>\n       <SET NXT 0>\n       <REPEAT ()\n\t       <COND (<IGRTR? NXT ,CHARACTER-MAX>\n\t\t      <RETURN>)\n\t\t     (<T? <SET OBJ <GET ,TOUCHED-LDESCS .NXT>>>\n\t\t      ;<PUT ,TOUCHED-LDESCS .NXT 0>\n\t\t      <SET FIRST T>\n\t\t      <SET STR <GET ,CHARACTER-TABLE .NXT>>\n\t\t      <TELL The .STR>\n\t\t      <SET STR .NXT>\n\t\t      <REPEAT ()\n\t\t\t      <COND (<IGRTR? STR ,CHARACTER-MAX>\n\t\t\t\t     <COND (.FIRST <TELL \" is \">)\n\t\t\t\t\t   (T <TELL \" are \">)>\n\t\t\t\t     <TELL <GET ,LDESC-STRINGS .OBJ> !\\. CR>\n\t\t\t\t     <RETURN>)\n\t\t\t\t    (<==? .OBJ <GET ,TOUCHED-LDESCS .STR>>\n\t\t\t\t     <PUT ,TOUCHED-LDESCS .STR 0>\n\t\t\t\t     <SET FIRST <>>\n\t\t\t\t     <TELL \" and\" the\n\t\t\t\t\t   <GET ,CHARACTER-TABLE .STR>>)>>)>>\n\t<COND (<NOT <EQUAL? .SHE 0 1>>\n\t       <THIS-IS-IT .SHE>)\n\t      (<EQUAL? .SHE 1>\n\t       <SETG P-HER-OBJECT <>>)>\n\t<COND (<NOT <EQUAL? .HE 0 1>>\n\t       <THIS-IS-IT .HE>)\n\t      (<EQUAL? .HE 1>\n\t       <SETG P-HIM-OBJECT <>>)>\n\t<SET FIRST T>\n\t; \"Apply all DESCFCNs and hide those objects\"\n       <SET OBJ <FIRST? .CONT>>\n       <REPEAT ()\n\t\t<COND (.OBJ\n\t\t       <SET NXT <NEXT? .OBJ>>\n\t\t       <SET STR <GETP .OBJ ,P?DESCFCN>>\n\t\t       <COND (.STR\n\t\t              ;<CRLF>\n\t\t\t      <SET VAL <APPLY .STR ,M-OBJDESC>>\n\t\t\t      <COND (<OR <==? .VAL ,M-FATAL>\n\t\t\t\t\t <ZERO? .ANY?>>\n\t\t\t\t     <SET ANY? .VAL>)>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <FSET .OBJ ,SEENBIT>\n\t\t\t      ;<CRLF>\n\t\t\t      <MOVE .OBJ ,PSEUDO-OBJECT>)>\n\t\t       <SET OBJ .NXT>)\n\t\t      (T\n\t\t       <RETURN>)>>\n      ;\"Apply all FDESCs and eliminate those objects\"\n\t<SET OBJ <FIRST? .CONT>>\n\t<REPEAT ()\n\t\t<COND (<AND .OBJ\n\t\t\t    <NOT <FSET? .OBJ ,TOUCHBIT>>>\n\t\t       <SET NXT <NEXT? .OBJ>>\n\t\t       <SET STR <GETP .OBJ ,P?FDESC>>\n\t\t       <COND (.STR\n\t\t\t      ;<SET VAL T>\n\t\t\t      <COND (<ZERO? .ANY?> <SET ANY? T>)>\n\t\t\t      <TELL ;CR .STR CR>\n\t\t\t      <FCLEAR .OBJ ,SECRETBIT>\n\t\t\t      <FSET .OBJ ,SEENBIT>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <MOVE .OBJ ,PSEUDO-OBJECT>)>\n\t\t       <SET OBJ .NXT>)\n\t\t      (T\n\t\t       <RETURN>)>>\n       ;\"Apply all LDESC's and eliminate those objects\"\n       <SET OBJ <FIRST? .CONT>>\n       <REPEAT ()\n\t\t<COND (.OBJ\n\t\t       <SET NXT <NEXT? .OBJ>>\n\t\t       <SET STR <GETP .OBJ ,P?LDESC>>\n\t\t       <COND (.STR\n\t\t              ;<SET VAL T>\n\t\t\t      <COND (<ZERO? .ANY?> <SET ANY? T>)>\n\t\t\t      <TELL ;CR .STR CR>\n\t\t\t      <FCLEAR .OBJ ,SECRETBIT>\n\t\t\t      <FSET .OBJ ,SEENBIT>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <MOVE .OBJ ,PSEUDO-OBJECT>)>\n\t\t       <SET OBJ .NXT>)\n\t\t      (T\n\t\t       <RETURN>)>>)>\n       ;\"Print whatever's left in a nice sentence\"\n\t<SET OBJ <FIRST? ,HERE>>\n\t<SET VAL <>>\n\t<COND (.OBJ\n\t       <REPEAT ()\n\t\t<COND (.OBJ\n\t\t       <SET NXT <NEXT? .OBJ>>\n\t\t       <SET VAL T>\n\t\t       <COND (.FIRST\n\t\t\t      <SET FIRST <>>\n\t\t\t      ;<CRLF>\n\t\t\t      <COND (<EQUAL? .CONT ,HERE>\n\t\t\t\t     <CRLF>\n\t\t\t\t     <COND (<FSET? ,HERE ,ONBIT>\n\t\t\t\t\t    <TELL \"You see\">)\n\t\t\t\t\t   ;(<OR <FIND-IN ,WINNER ,ONBIT>\n\t\t\t\t\t\t<FIND-IN ,HERE ,ONBIT>>\n\t\t\t\t\t    <TELL\nHis ,WINNER \" light reveals\">)\n\t\t\t\t\t   (T <TELL\n\"The light reveals\" ;\" from the next room\">)>)>)\n\t\t\t     (T\n\t\t\t      <COND (.NXT <TELL !\\,>)\n\t\t\t\t    (T <TELL \" and\">)>)>\n\t\t       <TELL the .OBJ>\n\t\t       <FCLEAR .OBJ ,SECRETBIT>\n\t\t       <FSET .OBJ ,SEENBIT>\n\t\t       <THIS-IS-IT .OBJ>\n\t\t       <TELL-BEING-WORN .OBJ>\t\n\t\t       <COND (<AND <SEE-INSIDE? .OBJ>\n\t\t\t\t   <SEE-ANYTHING-IN? .OBJ>>\n\t\t\t      <MOVE .OBJ ,INTNUM>)>\n\t\t       <COND (<AND <NOT .IT?>\n\t\t\t\t   <NOT .TWO?>>\n\t\t\t      <SET IT? .OBJ>)\n\t\t\t     (T\n\t\t\t      <SET TWO? T>\n\t\t\t      <SET IT? <>>)>\n\t\t       <SET OBJ .NXT>)\n\t\t      (T\n\t\t       <COND (<AND .IT?\n\t\t\t\t   <NOT .TWO?>>\n\t\t\t      <SETG P-IT-OBJECT .IT?>)>\n\t\t       <COND (<EQUAL? .CONT ,HERE>\n\t\t\t      <TELL \" here\">)>\n\t\t       <TELL !\\.>\n\t\t       <COND (<ZERO? .ANY?> <SET ANY? T>)>\n\t\t       <RETURN>)>>)>\n\t<SET OBJ <FIRST? ,INTNUM>>\n\t<REPEAT ()\n\t\t<COND (<ZERO? .OBJ>\n\t\t       <RETURN>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL ;CR CR \"On\">)\n\t\t      (T\n\t\t       <TELL ;CR CR \"Inside\">)>\n\t\t<SET VAL T>\n\t\t<TELL the .OBJ>\n\t\t<TELL \" you see\">\n\t\t<PRINT-CONTENTS .OBJ>\n\t\t<TELL !\\.>\n\t\t<SET OBJ <NEXT? .OBJ>>>\n\t<COND (<T? .VAL ;.ANY?> <CRLF>)>\n\t<ROB ,INTNUM .CONT>\n\t<ROB ,PSEUDO-OBJECT .CONT>\n\t.ANY? ;.VAL>"
  },
  "SEE-ANYTHING-IN?": {
   "name": "SEE-ANYTHING-IN?",
   "file": "verbs.zil",
   "line": 488,
   "endLine": 500,
   "source": "<ROUTINE SEE-ANYTHING-IN? (CONT \"AUX\" OBJ NXT (ANY? <>))\n\t <SET OBJ <FIRST? .CONT>>\n\t <REPEAT ()\n\t\t <COND (.OBJ\n\t\t\t<COND (<AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .OBJ ,NDESCBIT>>\n\t\t\t\t    <NOT <EQUAL? .OBJ ,WINNER>>>\n\t\t\t       <SET ANY? T>\n\t\t\t       <RETURN>)>\n\t\t\t<SET OBJ <NEXT? .OBJ>>)\n\t\t       (T\n\t\t\t<RETURN>)>>\n\t <RETURN .ANY?>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "verbs.zil",
   "line": 502,
   "endLine": 550,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR L)\n\t <COND (<T? .LOOK?> <SET V? T>)\n\t       (<==? 2 ,VERBOSITY> <SET V? T>)\n\t       (<==? 0 ,VERBOSITY> <SET V? <>>)\n\t       (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<SET V? T>)>\n\t <COND (T ;<IN? ,HERE ,ROOMS>\n\t\t<TELL !\\(>\n\t\t<COND (<ZERO? ,VERBOSITY>\n\t\t       <TELL D ,HERE>)\n\t\t      (T\n\t\t       <TELL \"You are\">\n\t\t       <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t\t      <TELL \" now\">)>\n\t\t       <COND (<FSET? ,HERE ,SURFACEBIT>\n\t\t\t      <TELL \" on\">)\n\t\t\t     (T ;<NOT <==? ,HERE ,BACKSTAIRS>>\n\t\t\t      <TELL \" in\">)>\n\t\t       <TELL the ,HERE !\\.>)>\n\t\t<TELL \")|\">)>\n\t <COND (<ZERO? ,LIT>\n\t\t<TOO-DARK>\n\t\t;<TELL \"It is pitch black.\" CR>\n\t\t<RFALSE>)\n\t       (<NOT <EQUAL? ,LIT ,HERE>>\n\t\t;<1? ,LIT>\t;<NOT <FSET? ,HERE ,ONBIT>>\n\t\t<TELL \"Light comes from\" the ,LIT ;\" the next room\" \".\" CR>)>\n\t <COND (.V?\n\t\t<COND (<FSET? <SET L <LOC ,WINNER>> ,VEHBIT>\n\t\t       <TELL \"(You're \">\n\t\t       <COND ;(<EQUAL? .L ,COFFIN> <TELL \"ly\">)\n\t\t\t     (T <TELL \"sitt\">)>\n\t\t       <TELL \"ing on\">\n\t\t       <THIS-IS-IT .L>\n\t\t       <TELL the .L \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       T)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?FDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t;<COND (<NOT <==? ,HERE .L>>\n\t\t       <APPLY <GETP .L ,P?ACTION> ,M-LOOK>)>)>\n\t ;<COND (<GETP ,HERE ,P?CORRIDOR>\n\t\t<CORRIDOR-LOOK>)>\n\t <FSET ,HERE ,SEENBIT>\n\t <FSET ,HERE ,TOUCHBIT>\n\t T>"
  },
  "HAR-HAR": {
   "name": "HAR-HAR",
   "file": "verbs.zil",
   "line": 572,
   "endLine": 574,
   "source": "<ROUTINE HAR-HAR ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL <PICK-ONE-NEW ,YUKS> CR>>"
  },
  "IMPOSSIBLE": {
   "name": "IMPOSSIBLE",
   "file": "verbs.zil",
   "line": 583,
   "endLine": 585,
   "source": "<ROUTINE IMPOSSIBLE ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL <PICK-ONE-NEW ,IMPOSSIBLES> CR>>"
  },
  "WONT-HELP": {
   "name": "WONT-HELP",
   "file": "verbs.zil",
   "line": 600,
   "endLine": 602,
   "source": "<ROUTINE WONT-HELP ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL <PICK-ONE-NEW ,WASTES> CR>>"
  },
  "PICK-ONE-NEW": {
   "name": "PICK-ONE-NEW",
   "file": "verbs.zil",
   "line": 610,
   "endLine": 627,
   "source": "<ROUTINE PICK-ONE-NEW (FROB \"AUX\" L CNT RND MSG RFROB)\n\t <SET L <- <GET .FROB 0> 1>>\n\t <SET CNT <GET .FROB 1>>\n\t <SET FROB <REST .FROB 2>>\n\t <SET RFROB <REST .FROB <* .CNT 2>>>\n\t <SET RND <- .L .CNT>>\n\t <SET RND <RANDOM .RND>>\n\t %<DEBUG-CODE\n\t   <COND (<NOT <G? .RND 0>>\n\t\t  <TELL\n\"{PICK-ONE-NEW: L=\" N .L \" CNT=\" N .CNT \" RND=\" N .RND \" FROB=\"N .FROB\"}\"CR>)>>\n\t <SET MSG <GET .RFROB .RND>>\n\t <PUT .RFROB .RND <GET .RFROB 1>>\n\t <PUT .RFROB 1 .MSG>\n\t <SET CNT <+ .CNT 1>>\n\t <COND (<==? .CNT .L> <SET CNT 0>)>\n\t <PUT .FROB 0 .CNT>\n\t .MSG>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "verbs.zil",
   "line": 629,
   "endLine": 629,
   "source": "<ROUTINE PICK-ONE (FROB) <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "NOT-HOLDING?": {
   "name": "NOT-HOLDING?",
   "file": "verbs.zil",
   "line": 631,
   "endLine": 636,
   "source": "<ROUTINE NOT-HOLDING? (OBJ)\n\t<COND (<AND <NOT <IN? .OBJ ,WINNER>>\n\t\t    <NOT <IN? <LOC .OBJ> ,WINNER>>>\n\t       <SETG CLOCK-WAIT T>\n\t       <TELL\n!\\( He+verb ,WINNER \"is\" \" not holding\" him .OBJ \".)\" CR>)>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "verbs.zil",
   "line": 638,
   "endLine": 671,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (TEST T) (FOLLOW? T) \"AUX\" X)\n\t<COND (<IN? ,WINNER .RM>\n\t       <WALK-WITHIN-ROOM>\n\t       <RFALSE>)>\n\t<COND (<APPLY <GETP ,HERE ,P?ACTION> ,M-LEAVE>\n\t       <RFALSE>)\n\t      (<==? ,WINNER ,PLAYER>\n\t       <COND (<AND .FOLLOW?\n\t\t\t   <T? ,FOLLOWER>>\n\t\t      <FRIEND-FOLLOWS-YOU .RM>)>)\n\t      ;(<FSET? ,WINNER ,MUNGBIT>\n\t       <TELL \"\\\"I wish I could!\\\"\" CR>\n\t       <RFALSE>)\n\t      ;(<FSET? .RM ,SECRETBIT>\n\t       <NOT-INTO-PASSAGE ,WINNER>\n\t       <RFALSE>)\n\t      ;(<EQUAL? .RM ,YOUR-BATHROOM>\n\t       <NOT-INTO-PASSAGE ,WINNER <> <>>\n\t       <RFALSE>)>\n\t<COND (<AND <T? .TEST>\n\t\t    <==? ,WINNER ,PLAYER>>\n\t       <SET X <DIR-FROM ,HERE .RM>>\n\t       <COND (<T? .X>\n\t\t      <COND (<==? ,M-FATAL <APPLY <GETP ,HERE ,P?ACTION> .X>>\n\t\t\t     <RFALSE>)>)>)>\n\t<PUT ,FOLLOW-LOC <GETP ,WINNER ,P?CHARACTER> .RM>\n\t<MOVE ,WINNER .RM>\n\t<COND (<==? ,WINNER ,PLAYER>\n\t       <SETG OHERE ,HERE>\n\t       <SETG HERE .RM>\n\t       <MAKE-ALL-PEOPLE -12 ;\"listening to you\">\n\t       <ENTER-ROOM>\n\t       <RTRUE>)\n\t      (T <RTRUE>)>>"
  },
  "MAKE-ALL-PEOPLE": {
   "name": "MAKE-ALL-PEOPLE",
   "file": "verbs.zil",
   "line": 673,
   "endLine": 687,
   "source": "<ROUTINE MAKE-ALL-PEOPLE (NUM \"OPTIONAL\" (RM 0) \"AUX\" P NNUM)\n\t<COND (<ZERO? .RM>\n\t       <SET RM ,HERE>)>\n\t<COND (<L? .NUM 0>\n\t       <SET NNUM <- 0 .NUM>>)>\n\t<SET P <FIRST? .RM>>\n\t<REPEAT ()\n\t\t<COND (<ZERO? .P>\n\t\t       <RETURN>)\n\t\t      (<FSET? .P ,PERSONBIT>\n\t\t       <COND (<G? .NUM 0>\n\t\t\t      <PUTP .P ,P?LDESC .NUM>)\n\t\t\t     (<==? .NNUM <GETP .P ,P?LDESC>>\n\t\t\t      <PUTP .P ,P?LDESC 0>)>)>\n\t\t<SET P <NEXT? .P>>>>"
  },
  "FRIEND-FOLLOWS-YOU": {
   "name": "FRIEND-FOLLOWS-YOU",
   "file": "verbs.zil",
   "line": 698,
   "endLine": 708,
   "source": "<ROUTINE FRIEND-FOLLOWS-YOU (RM \"AUX\" C)\n <COND ;(<ZERO? <GETP .RM ,P?LINE>>\n\t<RFALSE>)\n       (<IN? ,FOLLOWER .RM>\n\t<RFALSE>)\n       (T\n\t<MOVE ,FOLLOWER .RM>\n\t<PUTP ,FOLLOWER ,P?LDESC 23 ;\"following you\">\n\t<TELL D ,FOLLOWER>\n\t<TELL <PICK-ONE ,TRAILS-ALONG>>\n\t<CRLF>)>>"
  },
  "DIR-FROM": {
   "name": "DIR-FROM",
   "file": "verbs.zil",
   "line": 716,
   "endLine": 728,
   "source": "<ROUTINE DIR-FROM (HERE THERE \"AUX\" (V <>) P D)\n <COND (<DIR-FROM-TEST .HERE .THERE ,P?UP>\t<RETURN ,P?UP>)\n       (<DIR-FROM-TEST .HERE .THERE ,P?DOWN>\t<RETURN ,P?DOWN>)\n       (<DIR-FROM-TEST .HERE .THERE ,P?IN>\t<RETURN ,P?IN>)\n       (<DIR-FROM-TEST .HERE .THERE ,P?OUT>\t<RETURN ,P?OUT>)>\n <SET P 0>\n <REPEAT ()\n\t <COND (<L? <SET P <NEXTP .HERE .P>> ,LOW-DIRECTION>\n\t\t<RETURN .V>)\n\t       (<SET D <DIR-FROM-TEST .HERE .THERE .P>>\n\t\t<COND (<AND <L? .D ,LOW-DIRECTION> <NOT .V>>\n\t\t       <SET V .P>)\n\t\t      (T <RETURN .P>)>)>>>"
  },
  "DIR-FROM-TEST": {
   "name": "DIR-FROM-TEST",
   "file": "verbs.zil",
   "line": 730,
   "endLine": 736,
   "source": "<ROUTINE DIR-FROM-TEST (HERE THERE P \"AUX\" L TBL)\n\t<COND (<ZERO? <SET TBL <GETPT .HERE .P>>>\n\t       <RFALSE>)>\n\t<SET L <PTSIZE .TBL>>\n\t<COND (<AND <EQUAL? .L ,DEXIT ,UEXIT ,CEXIT>\n\t\t    <==? <GET/B .TBL ,REXIT> .THERE>>\n\t       <RETURN .P>)>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "verbs.zil",
   "line": 738,
   "endLine": 739,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <TELL .STR him ,PRSO <PICK-ONE ,HO-HUM> CR>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "verbs.zil",
   "line": 746,
   "endLine": 762,
   "source": "<ROUTINE HELD? (OBJ \"OPTIONAL\" (CONT <>) \"AUX\" L)\n\t <COND (<ZERO? .CONT> <SET CONT ,PLAYER ;,WINNER>)>\n\t <REPEAT ()\n\t\t <SET L <LOC .OBJ>>\n\t\t <COND (<NOT .L> <RFALSE>)\n\t\t       (<EQUAL? .L .CONT> <RTRUE>)\n\t\t       (<EQUAL? .CONT ,PLAYER ,WINNER>\n\t\t\t<COND (<EQUAL? .OBJ ,HANDS ,HEAD ,EYES>\n\t\t\t       <RTRUE>)\n\t\t\t      ;(<EQUAL? .OBJ ,NOW-WEARING>\n\t\t\t       <RTRUE>)\n\t\t\t      ;(<AND <EQUAL? .OBJ ,ARTIFACT>\n\t\t\t\t    <EQUAL? ,WINNER .L <LOC .L>>>\n\t\t\t       <RTRUE>)\n\t\t\t      (T <SET OBJ .L>)>)\n\t\t       (<EQUAL? .L ,ROOMS ,GLOBAL-OBJECTS> <RFALSE>)\n\t\t       (T <SET OBJ .L>)>>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "verbs.zil",
   "line": 764,
   "endLine": 779,
   "source": "<ROUTINE IDROP ()\n\t <COND ;(<FSET? ,PRSO ,PERSONBIT>\n\t\t<TELL The ,PRSO \" wouldn't enjoy that.\" CR>\n\t\t<RFALSE>)\n\t       (<NOT-HOLDING? ,PRSO>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TOO-BAD-BUT <LOC ,PRSO> \"closed\">\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO ,HERE ;\"<LOC ,WINNER>\">\n\t\t<FCLEAR ,PRSO ,WORNBIT>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FCLEAR ,PRSO ,INVISIBLE>\n\t\t<RTRUE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "verbs.zil",
   "line": 793,
   "endLine": 832,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) (OB 0) \"AUX\" CNT OBJ L)\n\t <COND (<ZERO? .OB>\n\t\t<SET OB ,PRSO>)>\n\t <SET L <LOC .OB>>\n\t <COND (<AND .L <FSET? .L ,PERSONBIT>>\n\t\t<COND (<AND <NOT <FSET? .OB ,TAKEBIT>>\n\t\t\t    <NOT <FSET? .L ,MUNGBIT>>>\n\t\t       <COND (.VB <YOU-CANT \"take\">)>\n\t\t       <RFALSE>)\n\t\t      (T <FSET .OB ,TAKEBIT>)>)>\n\t <COND (<NOT <FSET? .OB ,TAKEBIT>>\n\t\t<COND (.VB <YOU-CANT \"take\">)>\n\t\t<RFALSE>)\n\t       (<AND <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>\n\t\t     <SET OBJ <FIND-FLAG-NOT ,WINNER ,WORNBIT>>>\n\t\t<TOO-BAD-BUT>\n\t\t<TELL\nthe .OBJ \" slips from\" his ,WINNER \" arms while\" he+verb ,WINNER \"is\" \" taking\"\nhim .OB \", and both tumble \" <GROUND-DESC> \". \" He+verb ,WINNER \"is\"\n\" carrying too many things.|\">\n\t\t<MOVE .OBJ ,HERE>\t;<PERFORM ,V?DROP .OBJ>\n\t\t<MOVE ;-FROM .OB ,HERE>\n\t\t<RFATAL>)\n\t       (T\n\t\t<MOVE ;-FROM .OB ,WINNER>\n\t\t<FSET .OB ,SEENBIT>\n\t\t<FSET .OB ,TOUCHBIT>\n\t\t<FCLEAR .OB ,NDESCBIT>\n\t\t<FCLEAR .OB ,INVISIBLE>\n\t\t<FCLEAR .OB ,SECRETBIT>\n\t\t;<COND (<==? ,WINNER ,PLAYER> <SCORE-OBJ .OB>)>\n\t\t;<SETG ITAKE-LOC <>>\n\t\t<COND (<AND <NOT <VERB? TAKE>>\n\t\t\t    <NOT <==? .L ,WINNER>>\n\t\t\t    <OR <FSET? .L ,PERSONBIT>\n\t\t\t\t;<EQUAL? .L ,SIDEBOARD>>>\n\t\t       <FIRST-YOU \"take\" .OB .L>\n\t\t       ;<COND (<NOT .VB> <SETG ITAKE-LOC .L>)>)>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "verbs.zil",
   "line": 834,
   "endLine": 841,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,WORNBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "CHECK-DOOR": {
   "name": "CHECK-DOOR",
   "file": "verbs.zil",
   "line": 843,
   "endLine": 851,
   "source": "<ROUTINE CHECK-DOOR (DR)\n\t<TELL The .DR \" is \">\n\t<THIS-IS-IT .DR>\n\t<COND (<FSET? .DR ,OPENBIT> <TELL \"open\">)\n\t      (T\n\t       <TELL \"closed and \">\n\t       <COND (<NOT <FSET? .DR ,LOCKED>> <TELL \"un\">)>\n\t       <TELL \"locked\">)>\n\t<TELL \".\" CR>>"
  },
  "ROOM-CHECK": {
   "name": "ROOM-CHECK",
   "file": "verbs.zil",
   "line": 853,
   "endLine": 880,
   "source": "<ROUTINE ROOM-CHECK (\"AUX\" P PA)\n\t <SET P ,PRSO>\n\t <COND (<EQUAL? .P ,ROOMS>\n\t\t<RFALSE>)\n\t       (<IN? .P ,ROOMS>\n\t\t<COND (<EQUAL? ,HERE .P>\n\t\t       <RFALSE>)\n\t\t      (<OR ;<EQUAL? ,HERE <GETP .P ,P?STATION>>\n\t\t\t   <GLOBAL-IN? .P ,HERE>>\n\t\t       <COND (<AND <VERB? LIE SIT SEARCH SEARCH-FOR>\n\t\t\t\t   <NOT <==? <SET P <META-LOC .P>> ,HERE>>>\n\t\t\t      <FIRST-YOU \"try to enter\" .P>\n\t\t\t      <SET PA ,PRSA>\n\t\t\t      <SET P <PERFORM ,V?THROUGH .P>>\n\t\t\t      <SETG PRSA .PA>\n\t\t\t      <COND (<==? ,M-FATAL .P>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T <RFALSE>)>)\n\t\t\t     (T <RFALSE>)>)\n\t\t      (<NOT <SEE-INTO? .P>>\n\t\t       <RTRUE>)\n\t\t      (T <RFALSE>)>)\n\t       (<OR ;<==? .P ,PSEUDO-OBJECT>\n\t\t    <EQUAL? <META-LOC .P>\n\t\t\t    ,HERE ,GLOBAL-OBJECTS ,LOCAL-GLOBALS>>\n\t\t<RFALSE>)\n\t       (<NOT <VISIBLE? .P>>\n\t\t<NOT-HERE .P>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "verbs.zil",
   "line": 882,
   "endLine": 887,
   "source": "<ROUTINE SEE-INSIDE? (OBJ \"OPTIONAL\" (ONLY-IN <>))\n\t<COND ;(<FSET? .OBJ ,INVISIBLE> <RFALSE>)\t;\"for LIT? - PLAYER\"\n\t      (<FSET? .OBJ ,TRANSBIT> <RTRUE>)\n\t      (<FSET? .OBJ ,OPENBIT> <RTRUE>)\n\t      (.ONLY-IN <RFALSE>)\n\t      (<FSET? .OBJ ,SURFACEBIT> <RTRUE>)>>"
  },
  "ARENT-TALKING": {
   "name": "ARENT-TALKING",
   "file": "verbs.zil",
   "line": 889,
   "endLine": 891,
   "source": "<ROUTINE ARENT-TALKING ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"(You aren't talking to anyone!)\" CR>>"
  },
  "ALREADY": {
   "name": "ALREADY",
   "file": "verbs.zil",
   "line": 893,
   "endLine": 903,
   "source": "<ROUTINE ALREADY (OBJ \"OPTIONAL\" (STR <>))\n\t<SETG CLOCK-WAIT T>\n\t<TELL !\\(>\n\t<COND ;(<NOUN-USED? .OBJ ,W?DOOR>\t;\"confusing in secret passage\"\n\t       <TELL \"The door\">)\n\t      (T <TELL The .OBJ>)>\n\t<COND (<EQUAL? .OBJ ,PLAYER> <TELL \" are\">)\n\t      (T <TELL \" is\">)>\n\t<TELL \" already \">\n\t<COND (.STR <TELL .STR \"!)\" CR>)>\n\t<RTRUE>>"
  },
  "NOT-CLEAR-WHOM": {
   "name": "NOT-CLEAR-WHOM",
   "file": "verbs.zil",
   "line": 905,
   "endLine": 910,
   "source": "<ROUTINE NOT-CLEAR-WHOM ()\n\t;<SETG QUOTE-FLAG <>>\n\t<SETG P-CONT <>>\n\t<TELL \"[It's not clear whom you're talking to.]\"\n;\"[To talk to someone, type their name, then a comma, then what you want\nthem to do.]\" CR>>"
  },
  "OKAY": {
   "name": "OKAY",
   "file": "verbs.zil",
   "line": 912,
   "endLine": 936,
   "source": "<ROUTINE OKAY (\"OPTIONAL\" (OBJ <>) (STR <>))\n\t<COND (<EQUAL? ,WINNER ,PLAYER ;,BUTLER>\n\t       <COND (<VERB? THROUGH WALK WALK-TO>\n\t\t      <RTRUE>)>)\n\t      (T <TELL \"\\\"\">)>\n\t<TELL \"Okay\">\n\t<COND (.OBJ\n\t       <TELL !\\, he .OBJ>\n\t       <COND (.STR <TELL \" is now \" .STR>)>\n\t       <COND (<=? .STR \"on\">\t\t<FSET .OBJ ,ONBIT>)\n\t\t     (<=? .STR \"off\">\t\t<FCLEAR .OBJ ,ONBIT>)\n\t\t     (<=? .STR \"open\">\t\t<FSET .OBJ ,OPENBIT>)\n\t\t     (<=? .STR \"closed\">\t<FCLEAR .OBJ ,OPENBIT>)\n\t\t     (<=? .STR \"locked\">\t<FSET .OBJ ,LOCKED>)\n\t\t     (<=? .STR \"unlocked\">\t<FCLEAR .OBJ ,LOCKED>)>)>\n\t<COND (<OR .STR <NOT .OBJ>>\n\t       <COND (<NOT <==? ,WINNER ,PLAYER>>\n\t\t      <TELL \",\\\" says \" 'WINNER \". \" He ,WINNER \" does so.\"CR>\n\t\t      <RTRUE>)>\n\t       <TELL \".\" CR>)>\n\t<COND (<AND <ZERO? ,LIT>\n\t\t    <T? <SETG LIT <LIT? ;,HERE>>>>\n\t       <CRLF>\n\t       <V-LOOK>)>\n\t<RTRUE>>"
  },
  "TOO-BAD-BUT": {
   "name": "TOO-BAD-BUT",
   "file": "verbs.zil",
   "line": 938,
   "endLine": 947,
   "source": "<ROUTINE TOO-BAD-BUT (\"OPTIONAL\" (OBJ <>) (STR <>))\n\t<TELL \"Too bad, but\">\n\t<COND (.OBJ\n\t       <TELL he .OBJ>)>\n\t<COND (.STR\n\t       <TELL \" is \" .STR>\n\t       <COND (<EQUAL? .STR \"angry\" \"peeved\">\n\t\t      <TELL \" with you\">)>\n\t       <TELL \".\" CR>)>\n\t<RTRUE>>"
  },
  "TOO-DARK": {
   "name": "TOO-DARK",
   "file": "verbs.zil",
   "line": 949,
   "endLine": 949,
   "source": "<ROUTINE TOO-DARK () ;(\"OPTIONAL\" (OBJ 0)) <TELL \"(It's too dark to see!)\" CR>>"
  },
  "VISIBLE?": {
   "name": "VISIBLE?",
   "file": "verbs.zil",
   "line": 956,
   "endLine": 964,
   "source": "<ROUTINE VISIBLE? ;\"can player SEE object?\"\n\t\t  (OBJ \"AUX\" L)\n\t <COND (<NOT .OBJ> <RFALSE>)\n\t       (<ACCESSIBLE? .OBJ> <RTRUE>)>\n\t ;<COND (<CORRIDOR-LOOK .OBJ>\n\t\t<RETURN T>)>\n\t <SET L <LOC .OBJ>>\n\t <COND (<SEE-INSIDE? .L>\n\t\t<VISIBLE? .L>)>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "verbs.zil",
   "line": 966,
   "endLine": 998,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" L)\t;\"can player TOUCH object?\"\n\t <COND (<NOT .OBJ> <RFALSE>)\n\t       (T <SET L <LOC .OBJ>>)>\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       (<EQUAL? .OBJ ,PSEUDO-OBJECT>\n\t\t<COND (<EQUAL? ,LAST-PSEUDO-LOC ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       ;(<EQUAL? .OBJ ,CAR>\n\t\t<COND (<EQUAL? <GETP ,CAR ,P?STATION> ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\t       \n\t       ;(<EQUAL? .L ,ROOMS>\n\t\t<RETURN <SEE-INTO? .OBJ <>>>)\t       \n\t       (<EQUAL? .L ,LOCAL-GLOBALS>\n\t\t<RETURN <GLOBAL-IN? .OBJ ,HERE>>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE>\n\t\t<RTRUE>)\n\t       (<OR <FSET? .L ,OPENBIT>\n\t\t    <FSET? .L ,SURFACEBIT>\n\t\t    <FSET? .L ,PERSONBIT>>\n\t\t<ACCESSIBLE? .L>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "WHO-CARES": {
   "name": "WHO-CARES",
   "file": "verbs.zil",
   "line": 1011,
   "endLine": 1014,
   "source": "<ROUTINE WHO-CARES (\"AUX\" N)\n\t<SET N <RANDOM ,WHO-CARES-LENGTH>>\n\t<HE-SHE-IT ,PRSO T <GET ,WHO-CARES-VERB .N>>\n\t<TELL <GET ,WHO-CARES-TBL .N> \".\" CR>>"
  },
  "PRE-SAIM": {
   "name": "PRE-SAIM",
   "file": "verbs.zil",
   "line": 1018,
   "endLine": 1020,
   "source": "<ROUTINE PRE-SAIM ()\n\t<PERFORM ,V?AIM ,PRSI ,PRSO>\n\t<RTRUE>>"
  },
  "V-SAIM": {
   "name": "V-SAIM",
   "file": "verbs.zil",
   "line": 1022,
   "endLine": 1022,
   "source": "<ROUTINE V-SAIM () <V-FOO>>"
  },
  "V-AIM": {
   "name": "V-AIM",
   "file": "verbs.zil",
   "line": 1025,
   "endLine": 1025,
   "source": "<ROUTINE V-AIM () <YOU-CANT ;\"aim\">>"
  },
  "PRE-SANALYZE": {
   "name": "PRE-SANALYZE",
   "file": "verbs.zil",
   "line": 1027,
   "endLine": 1027,
   "source": "<ROUTINE PRE-SANALYZE () <PERFORM ,V?ANALYZE ,PRSI ,PRSO> <RTRUE>>"
  },
  "V-SANALYZE": {
   "name": "V-SANALYZE",
   "file": "verbs.zil",
   "line": 1028,
   "endLine": 1028,
   "source": "<ROUTINE   V-SANALYZE () <V-FOO>>"
  },
  "PRE-ANALYZE": {
   "name": "PRE-ANALYZE",
   "file": "verbs.zil",
   "line": 1030,
   "endLine": 1039,
   "source": "<ROUTINE PRE-ANALYZE ()\n <COND (<ROOM-CHECK>\n\t<RTRUE>)\n       (<OR <FSET? ,PRSO ,PERSONBIT> ;<EQUAL? ,PRSO ,YOU ,ME>>\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"(Leave that to the police.)\" CR>)\n       ;(<AND <EQUAL? ,PRSI ,FINGERPRINTS>\n\t     <NOT <EQUAL? <META-LOC ,PRINT-KIT> ,HERE>>>\n\t<NOT-HERE ,PRINT-KIT>\n\t<RTRUE>)>>"
  },
  "V-ANALYZE": {
   "name": "V-ANALYZE",
   "file": "verbs.zil",
   "line": 1041,
   "endLine": 1048,
   "source": "<ROUTINE V-ANALYZE ()\n <COND ;(<EQUAL? ,PRSI ,FINGERPRINTS>\n\t<TELL \"You don't find any interesting prints.\" CR>\n\t<RTRUE>)\n       (<FSET? ,PRSO ,PERSONBIT> <TELL \"How?\" CR>)\n       ;(<FSET? ,PRSO ,LIGHTBIT> <CHECK-ON-OFF>)\n       (<FSET? ,PRSO ,DOORBIT> <CHECK-DOOR ,PRSO>)\n       (T <TELL He+verb ,PRSO \"look\" \" normal.\" CR> ;<YOU-CANT \"check\">)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "verbs.zil",
   "line": 1050,
   "endLine": 1060,
   "source": "<ROUTINE V-ANSWER ()\n\t <COND (<T? ,AWAITING-REPLY>\n\t\t<COND (<EQUAL? <GET ,P-LEXV ,P-CONT> ,W?YES>\n\t\t       <PERFORM ,V?YES>)\n\t\t      (T ;<EQUAL? <GET ,P-LEXV ,P-CONT> ,W?NO>\n\t\t       <PERFORM ,V?NO>)>)\n\t       (T <NOT-CLEAR-WHOM>\n\t\t;<TELL \"Nobody is waiting for an answer.\" CR>)>\n\t <SETG P-CONT <>>\n\t ;<SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "verbs.zil",
   "line": 1062,
   "endLine": 1068,
   "source": "<ROUTINE V-REPLY ()\n\t <SETG P-CONT <>>\n\t ;<SETG QUOTE-FLAG <>>\n\t <COND (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     <NOT <FSET? ,PRSO ,MUNGBIT>>>\n\t\t<WAITING-FOR-YOU-TO-SPEAK>)\n\t       (T <YOU-CANT ;\"answer\">)>> "
  },
  "WAITING-FOR-YOU-TO-SPEAK": {
   "name": "WAITING-FOR-YOU-TO-SPEAK",
   "file": "verbs.zil",
   "line": 1070,
   "endLine": 1071,
   "source": "<ROUTINE WAITING-FOR-YOU-TO-SPEAK ()\n\t<TELL He+verb ,PRSO \"seem\" \" to be waiting for you to speak.\" CR>>"
  },
  "V-ASK": {
   "name": "V-ASK",
   "file": "verbs.zil",
   "line": 1073,
   "endLine": 1079,
   "source": "<ROUTINE V-ASK ()\n <COND (<AND <T? ,P-CONT>\n\t     <FSET? ,PRSO ,PERSONBIT>\n\t     <NOT <FSET? ,PRSO ,MUNGBIT>>>\n\t<SETG WINNER ,PRSO>\n\t<SETG QCONTEXT ,PRSO>)\n       (T <V-ASK-ABOUT>)>>"
  },
  "PRE-ASK": {
   "name": "PRE-ASK",
   "file": "verbs.zil",
   "line": 1081,
   "endLine": 1103,
   "source": "<ROUTINE PRE-ASK ()\n <COND ;(<DOBJ? BUST CREW-GLOBAL JACK-TAPE MUSIC OCEAN PIANO\n\t       PLAYER-NAME RECORDER VOICE>\n\t<RFALSE>)\n       ;(<AND <DOBJ? COUSIN>\n\t     <IN? ,BUST ,HERE>>\n\t<RETURN <DO-INSTEAD-OF ,BUST ,COUSIN>>)\n       (<AND <NOT <EQUAL? <META-LOC ,PRSO> ,HERE>>\n\t     <NOT <GLOBAL-IN? ,PRSO ,HERE>>>\n\t<NOT-HERE ;-PERSON ,PRSO>\n\t<RFATAL>)\n       (<OR <DOBJ? PLAYER>\n\t    ;<DOBJ? COUSIN MAID GHOST-OLD>\n\t    <NOT <FSET? ,PRSO ,PERSONBIT>>\n\t    ;<FSET? ,PRSO ,MUNGBIT>>\n\t<COND (<AND <VERB? $CALL> <ZERO? ,P-CONT>>\n\t       <MISSING \"verb\">\n\t       <RFATAL>)\n\t      (<NOT <VERB? LISTEN>>\n\t       <WONT-HELP-TO-TALK-TO ,PRSO>\n\t       <RFATAL>)>)\n       (<NOT <GRAB-ATTENTION ,PRSO ,PRSI>>\n\t<RFATAL>)>>"
  },
  "GRAB-ATTENTION": {
   "name": "GRAB-ATTENTION",
   "file": "verbs.zil",
   "line": 1108,
   "endLine": 1119,
   "source": "<ROUTINE GRAB-ATTENTION (PERSON \"OPTIONAL\" (OBJ <>) \"AUX\" N GT ATT)\n\t <COND (<FSET? .PERSON ,MUNGBIT>\n\t\t<COND (<EQUAL? <GETP .PERSON ,P?LDESC> 14 ;\"asleep\">\n\t\t       <TOO-BAD-BUT .PERSON \"asleep\">\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <TOO-BAD-BUT .PERSON \"out cold\">\n\t\t       <RFALSE>)>)>\n\t <SETG QCONTEXT .PERSON>\n\t <COND (<NOT <==? <GETP .PERSON ,P?LDESC> 21 ;\"searching\">>\n\t\t<PUTP .PERSON ,P?LDESC 12 ;\"listening to you\">)>\n\t <RTRUE>>"
  },
  "V-ASK-ABOUT": {
   "name": "V-ASK-ABOUT",
   "file": "verbs.zil",
   "line": 1131,
   "endLine": 1143,
   "source": "<ROUTINE V-ASK-ABOUT ()\n\t <COND (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     <NOT <DOBJ? PLAYER>>>\n\t\t<TELL\n\"A long silence tells you that\" the ,PRSO \" isn't interested in talking about\">\n\t\t<COND (<IN? ,PRSI ,ROOMS>\n\t\t       <TELL \" that\">)\n\t\t      (T\n\t\t       <TELL the ,PRSI>)>\n\t\t<TELL \".\" CR>)\n\t       (T\n\t\t<PERFORM ,V?TELL ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "WONT-HELP-TO-TALK-TO": {
   "name": "WONT-HELP-TO-TALK-TO",
   "file": "verbs.zil",
   "line": 1145,
   "endLine": 1149,
   "source": "<ROUTINE WONT-HELP-TO-TALK-TO (OBJ)\n\t;<VERB-PRINT>\n\t<TELL\n\"You talk to\" the .OBJ \" for a minute before you realize that\" he .OBJ\n\" won't respond.\" CR>>"
  },
  "PRE-ASK-CONTEXT-ABOUT": {
   "name": "PRE-ASK-CONTEXT-ABOUT",
   "file": "verbs.zil",
   "line": 1151,
   "endLine": 1159,
   "source": "<ROUTINE PRE-ASK-CONTEXT-ABOUT (\"OPTIONAL\" (V 0) \"AUX\" P)\n <COND (<ZERO? .V> <SET V ,V?ASK-ABOUT>)>\n <COND (<QCONTEXT-GOOD?>\n\t<PERFORM .V ,QCONTEXT ,PRSO>\n\t<RTRUE>)\n       (<SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,WINNER>>\n\t<TELL-I-ASSUME .P \" Ask\">\n\t<PERFORM .V .P ,PRSO>\n\t<RTRUE>)>>"
  },
  "V-ASK-CONTEXT-ABOUT": {
   "name": "V-ASK-CONTEXT-ABOUT",
   "file": "verbs.zil",
   "line": 1161,
   "endLine": 1161,
   "source": "<ROUTINE V-ASK-CONTEXT-ABOUT () <ARENT-TALKING>>"
  },
  "V-ASK-FOR": {
   "name": "V-ASK-FOR",
   "file": "verbs.zil",
   "line": 1163,
   "endLine": 1164,
   "source": "<ROUTINE V-ASK-FOR ()\n\t <TELL \"Unsurprisingly,\" the ,PRSO \" doesn't oblige.\" CR>>"
  },
  "PRE-ASK-CONTEXT-FOR": {
   "name": "PRE-ASK-CONTEXT-FOR",
   "file": "verbs.zil",
   "line": 1166,
   "endLine": 1170,
   "source": "<ROUTINE PRE-ASK-CONTEXT-FOR (\"AUX\" P)\n <COND (<FSET? <SET P <LOC ,PRSO>> ,PERSONBIT>\n\t<PERFORM ,V?ASK-FOR .P ,PRSO>\n\t<RTRUE>)\n       (T <PRE-ASK-CONTEXT-ABOUT ,V?ASK-FOR>)>>"
  },
  "V-ASK-CONTEXT-FOR": {
   "name": "V-ASK-CONTEXT-FOR",
   "file": "verbs.zil",
   "line": 1172,
   "endLine": 1172,
   "source": "<ROUTINE V-ASK-CONTEXT-FOR () <ARENT-TALKING>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "verbs.zil",
   "line": 1174,
   "endLine": 1174,
   "source": "<ROUTINE V-ATTACK () <IKILL \"attack\">>"
  },
  "PRE-BRUSH": {
   "name": "PRE-BRUSH",
   "file": "verbs.zil",
   "line": 1193,
   "endLine": 1197,
   "source": "<ROUTINE PRE-BRUSH ()\n <COND (<AND <DOBJ? ROOMS>\n\t     <NOT <EQUAL? ,P-PRSA-WORD ,W?SCRAPE ,W?SCRATCH>>>\n\t<SETG PRSO ,WINNER>\n\t<RFALSE>)>>"
  },
  "V-BRUSH": {
   "name": "V-BRUSH",
   "file": "verbs.zil",
   "line": 1226,
   "endLine": 1242,
   "source": "<ROUTINE V-BRUSH ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<HELD? ,TOOTHBRUSH>\n\t\t       <TELL \"(with the \" D ,TOOTHBRUSH \")\" CR>\n\t\t       <PERFORM ,V?BRUSH ,PRSO ,TOOTHBRUSH>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"You have nothing to brush\">\n\t\t       <TELL the ,PRSO>\n\t\t       <TELL \" with.\" CR>)>)\n\t       (<NOT <EQUAL? ,PRSI ,TOOTHBRUSH>>\n\t\t<TELL \"With \" a ,PRSI \"!\" CR>)\n\t       (<NOT <EQUAL? ,PRSO ,TEETH>>\n\t\t<TELL\n\"In general, \" D ,TOOTHBRUSH \"es are meant for teeth.\" CR>)\n\t       (T\n\t\t<TELL \"Congratulations on your fine dental hygiene.\" CR>)>>"
  },
  "V-BUY": {
   "name": "V-BUY",
   "file": "verbs.zil",
   "line": 1248,
   "endLine": 1249,
   "source": "<ROUTINE V-BUY ()\n\t <TELL \"Sorry,\" the ,PRSO \" isn't for sale.\" CR>>"
  },
  "V-$CALL": {
   "name": "V-$CALL",
   "file": "verbs.zil",
   "line": 1261,
   "endLine": 1283,
   "source": "<ROUTINE V-$CALL () ;(\"AUX\" (MOT <>))\n\t <UNSNOOZE ,PRSO>\n\t <COND (<FSET? ,PRSO ,PERSONBIT>\n\t\t<COND (<==? <META-LOC ,PRSO> ,HERE>\n\t\t       <COND (<GRAB-ATTENTION ,PRSO>\n\t\t\t      ;<FCLEAR ,PRSO ,TOUCHBIT>\n\t\t\t      <PUTP ,PRSO ,P?LDESC 12 ;\"listening to you\">\n\t\t\t      <TELL The ,PRSO>\n\t\t\t      <COND ;(.MOT\n\t\t\t\t     <TELL\nverb ,PRSO \"stop\" \" and\" verb ,PRSO \"turn\" \" toward you.\" CR>)\n\t\t\t      \t    (T <TELL\n\" is \" <GET ,LDESC-STRINGS 12> ;\"listening to you\" \".\" CR>)>)\n\t\t\t     (T\n\t\t\t      ;<TELL \" ignores you.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      ;(<CORRIDOR-LOOK ,PRSO>\n\t\t       <COND ;(<COR-GRAB-ATTENTION ;,PRSO>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <TELL The ,PRSO \" ignores you.\" CR>)>)\n\t\t      (T <NOT-HERE ,PRSO>)>)\n\t       (T <SETG CLOCK-WAIT T> <MISSING \"verb\">)>>"
  },
  "UNSNOOZE": {
   "name": "UNSNOOZE",
   "file": "verbs.zil",
   "line": 1285,
   "endLine": 1296,
   "source": "<ROUTINE UNSNOOZE (PER \"OPTIONAL\" (NO-TELL? <>)\n\t\t       \"AUX\" RM GT (C <GETP .PER ,P?LDESC>))\n <COND (<EQUAL? .C 14 ;\"asleep\">\n\t<COND (T <PUTP .PER ,P?LDESC 25 ;\"looking sleepy\">)>\n\t<FCLEAR .PER ,MUNGBIT>\n\t<SET RM <META-LOC .PER>>\n\t<COND (<AND <IN? .PER ,HERE> <ZERO? .NO-TELL?>>\n\t       <TELL He .PER \" wakes up first. \">\n\t       <COND (<NOT <FSET? .RM ,ONBIT>>\n\t\t      <TELL He .PER \" turns on the light. \">)>)>\n\t<FSET .RM ,ONBIT>\n\t<RTRUE>)>>"
  },
  "V-CHASTISE": {
   "name": "V-CHASTISE",
   "file": "verbs.zil",
   "line": 1298,
   "endLine": 1304,
   "source": "<ROUTINE V-CHASTISE ()\n\t<COND (<NOT <EQUAL? ,PRSO ,INTDIR>>\n\t       <TELL\n,I-ASSUME \" Look at\" him ,PRSO \", not look in\" him ,PRSO \" nor look for\"\nhim ,PRSO \" nor any other preposition.]\" CR>)>\n\t<PERFORM ,V?EXAMINE ,PRSO>\n\t<RTRUE>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "verbs.zil",
   "line": 1306,
   "endLine": 1322,
   "source": "<ROUTINE V-BOARD ()\n <COND (<OR <IN? ,PRSO ,ROOMS> <FSET? ,PRSO ,DOORBIT>>\n\t<V-THROUGH>)\n       (<FSET? ,PRSO ,VEHBIT>\n\t<COND (<IN? ,WINNER ,PRSO>\n\t       <ALREADY ,PLAYER>\n\t       <TELL \"in\" the ,PRSO \".)\" CR>)\n\t      (T\n\t       <MOVE ,WINNER ,PRSO>\n\t       <TELL He+verb ,WINNER \"is\" \" now \">\n\t       <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t      <TELL \"on\">)\n\t\t     (T <TELL \"in\">)>\n\t       <TELL the ,PRSO \".\" CR>\n\t       ;<APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t       <RTRUE>)>)\n       (T <YOU-CANT \"get in\">)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "verbs.zil",
   "line": 1324,
   "endLine": 1326,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t<PERFORM ,V?SIT ,PRSO>\n\t<RTRUE>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "verbs.zil",
   "line": 1328,
   "endLine": 1337,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X)\n\t <COND (<IN? ,PRSO ,ROOMS>\t;\"GO UP TO room\"\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<GETPT ,HERE .DIR>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<NOT .OBJ>\n\t\t<YOU-CANT \"go\">)\n\t       (ELSE <HAR-HAR>)>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "verbs.zil",
   "line": 1339,
   "endLine": 1339,
   "source": "<ROUTINE V-CLIMB-DOWN () <V-CLIMB-UP ,P?DOWN>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "verbs.zil",
   "line": 1341,
   "endLine": 1360,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT>\n\t\t\t <FSET? ,PRSO ,DOORBIT>\n\t\t\t <EQUAL? ,PRSO ,WINDOW>>>\n\t\t<YOU-CANT ;\"close\">)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <EQUAL? ,PRSO ,WINDOW>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND ;(<FSET? ,PRSO ,MUNGBIT>\n\t\t\t      <TELL\n\"It won't stay closed. The latch is broken.\" CR>)\n\t\t\t     (T\n\t\t\t      <OKAY ,PRSO \"closed\">)>)\n\t\t      (T <ALREADY ,PRSO \"closed\">)>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <0? <GETP ,PRSO ,P?CAPACITY>>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <OKAY ,PRSO \"closed\">)\n\t\t      (T <ALREADY ,PRSO \"closed\">)>)\n\t       (T <YOU-CANT ;\"close\">)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "verbs.zil",
   "line": 1362,
   "endLine": 1362,
   "source": "<ROUTINE V-COUNT () <IMPOSSIBLE>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "verbs.zil",
   "line": 1378,
   "endLine": 1380,
   "source": "<ROUTINE V-DIAGNOSE ()\n <COND (<T? ,PRSO> <YOU-CANT ;\"diagnose\">)\n       (T <TELL He+verb ,WINNER \"is\" \" wide awake and in good health.\" CR>)>>"
  },
  "TELL-NOT-IN": {
   "name": "TELL-NOT-IN",
   "file": "verbs.zil",
   "line": 1382,
   "endLine": 1384,
   "source": "<ROUTINE TELL-NOT-IN (OBJ)\n\t<SETG CLOCK-WAIT T>\n\t<TELL !\\( He+verb ,WINNER \"is\" \" not in\" him .OBJ \"!)\" CR>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "verbs.zil",
   "line": 1386,
   "endLine": 1386,
   "source": "<ROUTINE V-DRINK () <YOU-CANT ;\"drink\">>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "verbs.zil",
   "line": 1388,
   "endLine": 1396,
   "source": "<ROUTINE V-DROP (\"AUX\" L)\n <COND (<IDROP>\n\t<COND (<OR ;<IN? <SET L ,TABLE-DINING> ,HERE>\n\t\t   <SET L <FIND-FLAG-HERE ,VEHBIT;,SURFACEBIT ,PRSO>>>\n\t       <MOVE ,PRSO .L>\n\t       <OKAY ,PRSO>\n\t       <TELL \" is now on\" the .L \".\" CR>)\n\t      (T\n\t       <OKAY ,PRSO <GROUND-DESC>>)>)>>"
  },
  "GROUND-DESC": {
   "name": "GROUND-DESC",
   "file": "verbs.zil",
   "line": 1398,
   "endLine": 1401,
   "source": "<ROUTINE GROUND-DESC ()\n\t <COND (<NOT <OUTSIDE? ,HERE>>\n\t\t\"on the floor\")\n\t       (T \"on the ground\")>>"
  },
  "PRE-EAT": {
   "name": "PRE-EAT",
   "file": "verbs.zil",
   "line": 1403,
   "endLine": 1411,
   "source": "<ROUTINE PRE-EAT ()\n <COND (<EQUAL? ,PRSO <> ,ROOMS>\n\t<COND (<EQUAL? <META-LOC ,DINNER> ,HERE>\n\t       ;<SETG PRSO ,DINNER>\n\t       <PERFORM ,PRSA ,DINNER>\n\t       <RTRUE>)\n\t      (T\n\t       <NOT-HERE ,DINNER>\n\t       <RTRUE>)>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "verbs.zil",
   "line": 1413,
   "endLine": 1416,
   "source": "<ROUTINE V-EAT ()\n\t <TELL\n\"Stuffing\" the ,PRSO \" in your mouth would do little to help at this point.\"\nCR>>"
  },
  "V-ENJOY": {
   "name": "V-ENJOY",
   "file": "verbs.zil",
   "line": 1418,
   "endLine": 1422,
   "source": "<ROUTINE V-ENJOY ()\n\t <COND (<FSET? ,PRSO ,PERSONBIT>\n\t\t<V-KISS>)\n\t       (T <TELL\n\"Not difficult at all, considering how enjoyable\" the ,PRSO \" is.\" CR>)>>"
  },
  "PRE-THROUGH": {
   "name": "PRE-THROUGH",
   "file": "verbs.zil",
   "line": 1424,
   "endLine": 1440,
   "source": "<ROUTINE PRE-THROUGH (\"AUX\" VEH)\n <COND (<DOBJ? ROOMS GLOBAL-HERE>\n\t<COND (<SET VEH <FIND-IN ,HERE ,VEHBIT>>\n\t       <PERFORM ,V?BOARD .VEH>\n\t       <RTRUE>)\n\t      (T\n\t       <DO-WALK ,P?IN>)>\n\t<RTRUE>)\n       ;(<T? ,PRSI>\t;\"DRIVE CAR THRU object\"\n\t<COND (<DOBJ? CAR>\n\t       <COND (<EQUAL? <LOC ,WINNER> ;,HERE ,CAR>\n\t\t      <SETG PRSO ,PRSI>\n\t\t      <RFALSE>)\n\t\t     (T\n\t\t      <TELL-NOT-IN ,CAR>\n\t\t      <RTRUE>)>)\n\t      (T <DONT-UNDERSTAND>)>)>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "verbs.zil",
   "line": 1442,
   "endLine": 1469,
   "source": "<ROUTINE V-THROUGH (\"AUX\" RM DIR)\n\t<COND (<AND <NOUN-USED? ,PRSO ,W?DOOR ;,W?GATE ;,W?HOLE>\n\t\t    ;<FSET? ,PRSO ,DOORBIT>\n\t\t    <OR <FSET? ,PRSO ,OPENBIT>\n\t\t\t<WALK-THRU-DOOR? <> ,PRSO <>>>>\n\t       <COND (<OR <NOT <SET RM <DOOR-ROOM ,HERE ,PRSO>>>\n\t\t\t  <NOT <GOTO .RM>>>\n\t\t      <V-FOO>)>)\n\t      (<IN? ,PRSO ,ROOMS>\n\t       <COND (<==? ,PRSO ,HERE>\n\t\t      <WALK-WITHIN-ROOM>)\n\t\t     (<SEE-INTO? ,PRSO <>>\n\t\t      <GOTO ,PRSO>)\n\t\t     (T <PERFORM ,V?WALK-TO ,PRSO>)>\n\t       <RTRUE>)\n\t      (<AND <FSET? ,PRSO ,VEHBIT>\n\t\t    ;<FSET? ,PRSO ,CONTBIT>>\n\t       <PERFORM ,V?BOARD ,PRSO>)\n\t      (<FSET? ,PRSO ,PERSONBIT>\n\t       <HAR-HAR>)\n\t      (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t       <TELL He+verb ,WINNER \"bang\" \" into\" the ,PRSO>\n\t       <THIS-IS-IT ,PRSO>\n\t       <TELL \" trying to go through\" him ,PRSO \".\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <PERFORM ,V?EXAMINE ,EYES>\n\t       <RTRUE>)\n\t      (ELSE <HAR-HAR>)>>"
  },
  "PRE-EXAMINE": {
   "name": "PRE-EXAMINE",
   "file": "verbs.zil",
   "line": 1471,
   "endLine": 1471,
   "source": "<ROUTINE PRE-EXAMINE () <ROOM-CHECK>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "verbs.zil",
   "line": 1473,
   "endLine": 1503,
   "source": "<ROUTINE V-EXAMINE (\"AUX\" (TXT <>))\n\t <COND (<OR <==? ,PRSO ,PSEUDO-OBJECT>\n\t\t    <AND <NOUN-USED? ,PRSO ,W?DOOR ;,W?DOORS ;,W?KEYHOLE>\n\t\t\t <GLOBAL-IN? ,PRSO ,HERE>>>\n\t\t<SET TXT T>)>\n\t <COND (<DOBJ? INTDIR>\n\t\t<SETG CLOCK-WAIT T>\n\t\t<TELL \"(If you want to see what's there, go there!)\" CR>)\n\t       (<DOBJ? HANDS HEAD EYES TEETH EARS WALL LIGHT-GLOBAL>\n\t\t<NOTHING-SPECIAL>)\n\t       ;(<DOBJ? NOW-WEARING>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t<NOT-HERE ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <IN? ,PRSO ,ROOMS>\t;<FSET? ,PRSO ,RLANDBIT>\n\t\t     <ZERO? .TXT>>\n\t\t<ROOM-PEEK ,PRSO>)\n\t       (<AND <NOT <EQUAL? <META-LOC ,PRSO> ,HERE>>\n\t\t     <NOT <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t     <ZERO? .TXT>>\n\t\t<TOO-BAD-BUT ,PRSO \"too far away\">)\n\t       (<SET TXT <GETP ,PRSO ,P?TEXT>>\n\t\t<TELL .TXT CR>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<CHECK-DOOR ,PRSO>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,SURFACEBIT>\n\t\t    ;<NOUN-USED? ,PRSO ,W?KEYHOLE>>\n\t\t<V-LOOK-INSIDE>)\n\t       (T <NOTHING-SPECIAL>)>>"
  },
  "NOTHING-SPECIAL": {
   "name": "NOTHING-SPECIAL",
   "file": "verbs.zil",
   "line": 1505,
   "endLine": 1506,
   "source": "<ROUTINE NOTHING-SPECIAL ()\n\t<TELL \"You see nothing special about\" the ,PRSO \".\" CR>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "verbs.zil",
   "line": 1508,
   "endLine": 1512,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TEE)\n\t <COND (<EQUAL? .OBJ1 .OBJ2>\n\t\t<RTRUE>)\n\t       (<SET TEE <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<INTBL? .OBJ1 .TEE </ <PTSIZE .TEE> 2>>)>>"
  },
  "V-FAINT": {
   "name": "V-FAINT",
   "file": "verbs.zil",
   "line": 1514,
   "endLine": 1516,
   "source": "<ROUTINE V-FAINT ()\n\t <TELL \"You doze for several minutes. \">\n\t <V-WAIT>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "verbs.zil",
   "line": 1518,
   "endLine": 1520,
   "source": "<ROUTINE V-FILL ()\n\t <YOU-CANT>\n\t ;<TELL \"You may know how to do that, but this story doesn't.\" CR>>"
  },
  "PRE-FIND": {
   "name": "PRE-FIND",
   "file": "verbs.zil",
   "line": 1522,
   "endLine": 1543,
   "source": "<ROUTINE PRE-FIND ()\n\t <COND (<DOBJ? PLAYER ;PLAYER-NAME>\n\t\t<RFALSE>)\n\t       (<AND <FSET? ,PRSO ,SECRETBIT>\n\t\t     <NOT <FSET? ,PRSO ,SEENBIT>>>\n\t\t<NO-FUN>)\n\t       (<IN? ,PRSO ,ROOMS>\n\t\t<COND (<==? ,PRSO ,HERE>\n\t\t       <ALREADY ,WINNER \"here\">)\n\t\t      (T\n\t\t       <PERFORM ,V?WALK-TO ,PRSO>\n\t\t       <RTRUE>)>)\n\t       (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     ;<NOT <==? ,PRSO ,OTHER-CHAR>>>\n\t\t<COND (<AND <==? <META-LOC ,WINNER> <META-LOC ,PRSO>>\n\t\t\t    <NOT <FSET? ,PRSO ,NDESCBIT>>>\n\t\t       <BITE-YOU>\n\t\t       <RTRUE>)\n\t\t      (<NOT <FOLLOW-LOC?>>\n\t\t       <WHO-KNOWS? ,PRSO>\n\t\t       <RFATAL>)>\n\t\t<RTRUE>)>>"
  },
  "BITE-YOU": {
   "name": "BITE-YOU",
   "file": "verbs.zil",
   "line": 1545,
   "endLine": 1546,
   "source": "<ROUTINE BITE-YOU ()\n\t<TELL \"If\" he ,PRSO \" were any closer,\" he ,PRSO \"'d bite you!\" CR>>"
  },
  "FAR-AWAY?": {
   "name": "FAR-AWAY?",
   "file": "verbs.zil",
   "line": 1548,
   "endLine": 1563,
   "source": "<ROUTINE FAR-AWAY? (L)\n <COND ;(<ZERO? <GETP ,HERE ,P?LINE>>\n\t<RTRUE>)\n       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t<RTRUE>)\n       (<AND <FSET? .L ,SECRETBIT>\n\t     <NOT <FSET? .L ,SEENBIT>>>\n\t<RTRUE>)\n       ;(<ZERO? <GETP .L ,P?LINE>>\n\t<RTRUE>)>\n <COND (<OR <AND <FSET? ,HERE ,SECRETBIT>\n\t\t <NOT <FSET? .L ,SECRETBIT>>>\n\t    <AND <NOT <FSET? ,HERE ,SECRETBIT>>\n\t\t <FSET? .L ,SECRETBIT>>>\n\t<RETURN <NOT <SEE-INTO? .L <> ;T> ;<GLOBAL-IN? .L ,HERE>>>)>\n <RFALSE>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "verbs.zil",
   "line": 1565,
   "endLine": 1601,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,HANDS ,HEAD ,EARS ,TEETH ,EYES>\n\t\t<TELL \"Are you sure\" the ,PRSO \" is lost?\" CR>)\n\t       (<HELD? ,PRSO>\n\t\t<TELL \"You have it!\" CR>)\n\t       ;(<OR <FSET? ,PRSO ,SECRETBIT>\n\t\t    ;<==? ,PRSO ,ARTIFACT>>\n\t\t<NO-FUN>)\n\t       (<AND <FSET? .L ,PERSONBIT>\n\t\t     <VISIBLE? .L>>\n\t\t<TELL \"As far as you can tell,\">\n\t\t<TELL the .L>\n\t\t<THIS-IS-IT .L>\n\t\t<TELL \" has it.\" CR>)\n\t       (<VISIBLE? ,PRSO>\n\t\t<COND ;(<FSET? ,PRSO ,SECRETBIT>\n\t\t       <DISCOVER ,PRSO>)\n\t\t      (T <TELL \"Right in front of you.\" CR>)>)\n\t       (<AND ;<NOT <FSET? ,PRSO ,TOUCHBIT>>\n\t\t     <NOT <FSET? ,PRSO ,SEENBIT>>\n\t\t     ;<OR <IN? ,PRSO ,ROOMS>\n\t\t\t <FSET? ,PRSO ,SECRETBIT>>>\n\t\t<NOT-HERE ,PRSO T>)\n\t       (<OR <EQUAL? .L ,GLOBAL-OBJECTS ,LOCAL-GLOBALS>\n\t\t    ;<EQUAL? ,PRSO ,DRAPES>>\n\t\t<TELL \"It's around somewhere.\" CR>)\n\t       (<FAR-AWAY? <META-LOC ,PRSO>>\n\t\t<TELL \"It's far away from here.\" CR>)\n\t       (<OR <FSET? .L ,SURFACEBIT>\n\t\t    <FSET? .L ,CONTBIT>\n\t\t    <IN? .L ,ROOMS>>\n\t\t<THIS-IS-IT .L>\n\t\t<TELL \"It's probably \">\n\t\t<COND (<FSET? .L ,SURFACEBIT> <TELL \"on\">) (T <TELL \"in\">)>\n\t\t<TELL the .L \".\" CR>)\n\t       (T\n\t\t<TELL \"You'll have to do that yourself.\" CR>)>>"
  },
  "NO-FUN": {
   "name": "NO-FUN",
   "file": "verbs.zil",
   "line": 1603,
   "endLine": 1605,
   "source": "<ROUTINE NO-FUN ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"(If it's that easy, it spoils the fun!)\" CR>>"
  },
  "TELL-LOCATION": {
   "name": "TELL-LOCATION",
   "file": "verbs.zil",
   "line": 1607,
   "endLine": 1620,
   "source": "<ROUTINE TELL-LOCATION (\"AUX\" DIR)\n\t;<COND (<EQUAL? ,HERE ,UNCONSCIOUS>\n\t       <TELL \"unconscious.\">\n\t       <RTRUE>)>\n\t<COND (<NOT <IN? ,PLAYER ,HERE>>\n\t       <TELL \"sitting \">)>\n\t;<COND (<ZERO? ,PLAYER-SEATED>\tT)\n\t      (<L? 0 ,PLAYER-SEATED>\t<TELL \"sitting \">)\n\t      (T \t\t\t<TELL \"lying \">)>\n\t<COND (<FSET? ,HERE ,SURFACEBIT>\n\t       <TELL \"on\">)\n\t      (T\n\t       <TELL \"in\">)>\n\t<TELL the ,HERE \".\">>"
  },
  "V-FIX": {
   "name": "V-FIX",
   "file": "verbs.zil",
   "line": 1622,
   "endLine": 1622,
   "source": "<ROUTINE V-FIX () <MORE-SPECIFIC>>"
  },
  "FOLLOW-LOC?": {
   "name": "FOLLOW-LOC?",
   "file": "verbs.zil",
   "line": 1633,
   "endLine": 1642,
   "source": "<ROUTINE FOLLOW-LOC? (\"AUX\" L)\n\t <SET L <GETP ,PRSO ,P?CHARACTER>>\n\t <COND (<SET L <GET ,FOLLOW-LOC .L>>\n\t\t<TELL \"The last you knew,\" he ,PRSO \" was \">\n\t\t<COND (<FSET? .L ,SURFACEBIT>\n\t\t       <TELL \"on\">)\n\t\t      (T <TELL \"in\">)>\n\t\t<TELL the .L>\n\t\t<TELL \".|\">\n\t\t.L)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "verbs.zil",
   "line": 1644,
   "endLine": 1657,
   "source": "<ROUTINE V-FOLLOW (\"AUX\" L)\n\t <COND (<==? ,PRSO ,WINNER>\n\t\t<YOU-CANT>)\n\t       (<AND ;<NOT <DOBJ? GHOST-NEW>>\n\t\t     <NOT <FSET? ,PRSO ,PERSONBIT>>>\n\t\t<IMPOSSIBLE>)\n\t       (<==? ,HERE <META-LOC ,PRSO>>\n\t\t<TELL \"You're in the same place as\" he ,PRSO \"!\" CR>)\n\t       ;(<SET L <GET ,FOLLOW-LOC <GETP ,PRSO ,P?CHARACTER>>\n\t\t       ;<FOLLOW-LOC?>>\n\t\t<PERFORM ,V?WALK-TO .L>)\n\t       (T\n\t\t<WHO-KNOWS? ,PRSO>\n\t\t<RFATAL>)>>"
  },
  "V-FOO": {
   "name": "V-FOO",
   "file": "verbs.zil",
   "line": 1659,
   "endLine": 1659,
   "source": "<ROUTINE V-FOO () <TELL \"[Foo!! This is a bug!!]\" CR>>"
  },
  "V-FOOTNOTE": {
   "name": "V-FOOTNOTE",
   "file": "verbs.zil",
   "line": 1661,
   "endLine": 1680,
   "source": "<ROUTINE V-FOOTNOTE ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL \"Specify a number, as in \\\"FOOTNOTE 6.\\\"\" CR>)\n\t       ;(<EQUAL? ,P-NUMBER 8>\n\t\t<SETG AWAITING-REPLY 13>\n\t\t<QUEUE I-REPLY 1> ;\"only 1 since FOOTNOTE isn't move\"\n\t\t<NOT-VERY-GOOD \"legend\">)\n\t       (<EQUAL? ,P-NUMBER 11> ;\"not referenced\"\n\t\t<SETG AWAITING-REPLY 14>\n\t\t<QUEUE I-REPLY 2>\n\t\t<TELL \"Isn't it fun reading through all the footnotes?\" CR>)\n\t       (<EQUAL? ,P-NUMBER 12>\n\t        <TELL\n\"This is the famous recursive footnote (Footnote 12).\" CR>)\n\t       (<EQUAL? ,P-NUMBER 14>\n\t\t<TELL\n,GUIDE-NAME \" is also the name of a terrific work of interactive fiction by\nDouglas Adams and S. Eric Meretzky.\" ,ALREADY-KNOW-THAT CR>)\n\t       (T\n\t\t<TELL \"There is no Footnote \" N ,P-NUMBER \".\" CR>)>>"
  },
  "I-REPLY": {
   "name": "I-REPLY",
   "file": "verbs.zil",
   "line": 1687,
   "endLine": 1689,
   "source": "<ROUTINE I-REPLY ()\n\t <SETG AWAITING-REPLY <>>\n\t <RFALSE>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "verbs.zil",
   "line": 1693,
   "endLine": 1696,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<AND <NOT <EQUAL? ,PRSI ,PLAYER ;,PLAYER-NAME>>\n\t\t     <NOT-HOLDING? ,PRSO>>\n\t\t<RTRUE>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "verbs.zil",
   "line": 1702,
   "endLine": 1718,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<ZERO? ,PRSI>\n\t\t<YOU-CANT ;\"give\">)\n\t       (<NOT <FSET? ,PRSI ,PERSONBIT>>\n\t\t<TELL\nHe ,WINNER \" can't give \" a ,PRSO \" to \" a ,PRSI \"!\" CR>)\n\t       ;(<FSET? ,PRSI ,MUNGBIT>\n\t\t<TELL He+verb ,PRSI \"do\" \"n't respond.\" CR>)\n\t       (<IOBJ? PLAYER>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Politely,\" the ,PRSI \" refuses your offer.\" CR>)\n\t       ;(T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<TELL He+verb ,PRSI \"accept\" \" your gift.\" CR>\n\t\t<RTRUE>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "verbs.zil",
   "line": 1720,
   "endLine": 1726,
   "source": "<ROUTINE PRE-SGIVE (\"AUX\" X)\n\t;<PROG ()\n\t      <SET X <GET ,P-NAMW 0>>\n\t      <PUT ,P-NAMW 0 <GET ,P-NAMW 1>>\n\t      <PUT ,P-NAMW 1 .X>>\n\t<PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t<RTRUE>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "verbs.zil",
   "line": 1728,
   "endLine": 1728,
   "source": "<ROUTINE V-SGIVE () <V-FOO>>"
  },
  "TELL-I-ASSUME": {
   "name": "TELL-I-ASSUME",
   "file": "verbs.zil",
   "line": 1732,
   "endLine": 1739,
   "source": "<ROUTINE TELL-I-ASSUME (OBJ \"OPT\" PRON)\n\t<COND (<AND <NOT <FSET? .PRON ,TOUCHBIT>> \n\t\t    <NOT <EQUAL? ,OPRSO .OBJ>>>\n\t       <FSET .PRON ,TOUCHBIT>\n\t       <TELL ,I-ASSUME>\n\t       <TELL !\\ >\n\t       <TELL-THE .OBJ>\n\t       <TELL \".]\" CR>)>>"
  },
  "PRE-HELLO": {
   "name": "PRE-HELLO",
   "file": "verbs.zil",
   "line": 1741,
   "endLine": 1776,
   "source": "<ROUTINE PRE-HELLO (;\"OPTIONAL\" ;(STR 0) \"AUX\" P (WORD <>))\n <COND (<EQUAL? ,P-PRSA-WORD ,W?HELLO ,W?HI>\n\t<SET WORD \" Greet\">)\n       ;(<EQUAL? ,P-PRSA-WORD ,W?SORRY>\n\t<SET WORD \" Apologize to\">)>\n <COND (<NOT <DOBJ? ROOMS>>\n\t<COND (<AND <NOT <FSET? ,PRSO ,PERSONBIT>>\n\t\t    ;<NOT <DOBJ? CREW-GLOBAL>>>\n\t       <WONT-HELP-TO-TALK-TO ,PRSO>\n\t       <RTRUE>)\n\t      (<FSET? ,PRSO ,MUNGBIT>\n\t       <PERFORM ,V?ALARM ,PRSO>\n\t       <RTRUE>)\n\t      (<T? .WORD>\n\t       <TELL ,I-ASSUME .WORD him ,PRSO \".]\" CR>\n\t       <RFALSE>)>\n\t;<UNSNOOZE ,PRSO>\n\t<COND ;(<NOT <GRAB-ATTENTION ,PRSO>>\n\t       <RFATAL>)\n\t      (T <RFALSE>)>)\n       (<QCONTEXT-GOOD?>\n\t<TELL ,I-ASSUME>\n\t;<COND (<T? .WORD>\n\t       <TELL .WORD>)>\n\t<TELL !\\  D ,QCONTEXT \".]\" CR>\n\t<PERFORM ,PRSA ,QCONTEXT>\n\t<RTRUE>)\n       (<AND <EQUAL? ,WINNER ,PLAYER>\n\t     <SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,WINNER>>>\n\t<TELL ,I-ASSUME>\n\t;<COND (<T? .WORD>\n\t       <TELL .WORD>)>\n\t<TELL !\\  D .P \".]\" CR>\n\t<PERFORM ,PRSA .P>\n\t<RTRUE>)\n       (T <NOT-CLEAR-WHOM>)>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "verbs.zil",
   "line": 1778,
   "endLine": 1783,
   "source": "<ROUTINE V-HELLO () ;(\"OPTIONAL\" (HELL T))\n <COND (<FSET? ,PRSO ,PERSONBIT> ;<GETP ,PRSO ,P?CHARACTER>\n\t<COND (<NOT <FSET? ,PRSO ,MUNGBIT>>\n\t       <TELL \"\\\"Hello to you too.\\\"\" CR>)\n\t      (T <WONT-HELP-TO-TALK-TO ,PRSO>)>)\n       (T <NOT-CLEAR-WHOM>)>>"
  },
  "V-HELP": {
   "name": "V-HELP",
   "file": "verbs.zil",
   "line": 1785,
   "endLine": 1788,
   "source": "<ROUTINE V-HELP ()\n <COND (<EQUAL? ,PRSO <> ,PLAYER>\n\t<HELP-TEXT>)\n       (T <MORE-SPECIFIC>)>>"
  },
  "HELP-TEXT": {
   "name": "HELP-TEXT",
   "file": "verbs.zil",
   "line": 1795,
   "endLine": 1801,
   "source": "<ROUTINE HELP-TEXT ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL\n\"[You'll find plenty of help in your \" D ,GAME \" package.|\nIf you're really stuck, you can order a complete map and InvisiClues (TM)\nhint booklet\nfrom your dealer or via mail with the form in your package.]\" CR>>"
  },
  "V-HIDE": {
   "name": "V-HIDE",
   "file": "verbs.zil",
   "line": 1803,
   "endLine": 1804,
   "source": "<ROUTINE V-HIDE ()\n\t <TELL \"There's no place to hide here.\" CR>>"
  },
  "V-KILL": {
   "name": "V-KILL",
   "file": "verbs.zil",
   "line": 1810,
   "endLine": 1813,
   "source": "<ROUTINE V-KILL ()\n\t <TELL\n\"You are obviously letting things get to you. You should learn to\nrelax a little.\" CR>>"
  },
  "IKILL": {
   "name": "IKILL",
   "file": "verbs.zil",
   "line": 1817,
   "endLine": 1831,
   "source": "<ROUTINE IKILL (\"OPTIONAL\" (STR <>))\n\t <COND (<ZERO? ,PRSO>\n\t\t<SETG CLOCK-WAIT T>\n\t\t<TELL \"(There's nothing here to \" .STR \".)\" CR>)\n\t       (<ZERO? ,PRSI>\n\t\t<SETG CLOCK-WAIT T>\n\t\t<TELL ,YOU-DIDNT-SAY-W \"hat to \" .STR the ,PRSO>\n\t\t<COND (<FSET? ,PRSO ,WEAPONBIT>\n\t\t       <TELL \" at\">)\n\t\t      (T ;<FSET? ,PRSO ,PERSONBIT>\n\t\t       <TELL \" with\">)>\n\t\t<TELL \".]\" CR>)\n\t       (<NOT <FSET? ,PRSO ,PERSONBIT>>\n\t\t<HAR-HAR>)\n\t       (T <TELL ,NO-VIOLENCE> <RTRUE>)>>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "verbs.zil",
   "line": 1838,
   "endLine": 1844,
   "source": "<ROUTINE V-KISS (\"AUX\" X)\n\t <COND (<EQUAL? ,PRSO ,PLAYER>\n\t\t<TELL \"You kiss \" 'PLAYER \" for a minute. Yuk!\" CR>)\n\t       (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     <NOT <FSET? ,PRSO ,MUNGBIT>>>\n\t\t<FACE-RED>)\n\t       (T <TELL \"What a (ahem!) strange idea!\" CR>)>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "verbs.zil",
   "line": 1846,
   "endLine": 1862,
   "source": "<ROUTINE V-KNOCK (\"AUX\" P)\n <COND (<OR <FSET? ,PRSO ,DOORBIT>\n\t    ;<EQUAL? ,PRSO ,WINDOW>>\n\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t       <TELL \"It's open!\" CR>)\n\t      ;(<AND <SET P <DOOR-ROOM ,HERE ,PRSO>>\n\t\t    <SET P <FIND-IN .P ,PERSONBIT ,PLAYER>>>\n\t       <FCLEAR ,PRSO ,LOCKED>\n\t       <FSET ,PRSO ,OPENBIT>\n\t       <FSET ,PRSO ,ONBIT>\n\t       <UNSNOOZE .P>\n\t       <THIS-IS-IT .P>\n\t       <TELL He .P \" opens the door, then retreats into the room.\"\n\t\t\t  ;\"Someone shouts \\\"Come!\\\"\" CR>)\n\t      (T <TELL \"Nobody's home.\" CR>)>)\n       (T\n\t<HACK-HACK \"Knocking on\">)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "verbs.zil",
   "line": 1864,
   "endLine": 1870,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<NOT <FSET? ,PRSO ,LIGHTBIT>>\n\t\t<YOU-CANT \"turn off\">)\n\t       (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t<ALREADY ,PRSO \"off\">)\n\t       (T\n\t\t<OKAY ,PRSO \"off\">)>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "verbs.zil",
   "line": 1872,
   "endLine": 1879,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,ONBIT>\n\t\t<ALREADY ,PRSO \"on\">)\n\t       (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<OKAY ,PRSO \"on\">)\n\t       (<FSET? ,PRSO ,PERSONBIT>\n\t\t<HAR-HAR>)\n\t       (T <YOU-CANT \"turn on\">)>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "verbs.zil",
   "line": 1881,
   "endLine": 1889,
   "source": "<ROUTINE V-LEAP ()\n\t <COND (<AND ,PRSO\n\t\t     <NOT <DOBJ? INTDIR>>>\n\t\t<IMPOSSIBLE>\n\t\t<RTRUE>)\n\t       ;(<GETPT ,HERE ,P?DOWN>\n\t\t<TELL \"This was not a very safe place to try jumping.\">\n\t\t<FINISH>)\n\t       (T <V-SKIP>)>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "verbs.zil",
   "line": 1891,
   "endLine": 1894,
   "source": "<ROUTINE V-SKIP ()\n\t <COND ;(<FSET? <LOC ,PLAYER> ,VEHBIT>\n\t\t<TELL \"That would be tough from your current position.\" CR>)\n\t       (T <WHEE>)>>"
  },
  "WHEE": {
   "name": "WHEE",
   "file": "verbs.zil",
   "line": 1896,
   "endLine": 1906,
   "source": "<ROUTINE WHEE (\"AUX\" X)\n\t<SET X <RANDOM 5>>\n\t<COND (<==? 1 .X>\n\t       <TELL \"Very good. Now you can go to the second grade.\" CR>)\n\t      (<==? 2 .X>\n\t       <TELL \"I hope you enjoyed that more than I did.\" CR>)\n\t      (<==? 3 .X>\n\t       <TELL \"Are you enjoying \" 'PLAYER \"?\" CR>)\n\t      (<==? 4 .X>\n\t       <TELL \"Wheeeeeeeeee!!!!!\" CR>)\n\t      (T <TELL \"Do you expect someone to applaud?\" CR>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "verbs.zil",
   "line": 1908,
   "endLine": 1923,
   "source": "<ROUTINE V-LEAVE (\"AUX\" GT)\n\t<COND (<==? ,WINNER ,FOLLOWER>\n\t       <SETG FOLLOWER 0>)>\n\t<COND (<EQUAL? ,PRSO <> ,ROOMS ,HERE>\n\t       <DO-WALK ,P?OUT>\n\t       <PUTP ,WINNER ,P?LDESC 9 ;\"waiting patiently\">\n\t       <RTRUE>)\n\t      (<EQUAL? <LOC ,PRSO> ,PLAYER ;,POCKET>\n\t       <PERFORM ,V?DROP ,PRSO>\n\t       <RTRUE>)\n\t      (<==? <LOC ,WINNER> ,PRSO>\n\t       <PERFORM ,V?DISEMBARK ,PRSO>\n\t       <RTRUE>)\n\t      (T\n\t       <TELL-NOT-IN ,PRSO>\n\t       <RFATAL>)>>"
  },
  "PRE-LIE": {
   "name": "PRE-LIE",
   "file": "verbs.zil",
   "line": 1925,
   "endLine": 1925,
   "source": "<ROUTINE PRE-LIE () <ROOM-CHECK>>"
  },
  "V-LIE": {
   "name": "V-LIE",
   "file": "verbs.zil",
   "line": 1927,
   "endLine": 1927,
   "source": "<ROUTINE V-LIE () <V-SIT T>>"
  },
  "PRE-LISTEN": {
   "name": "PRE-LISTEN",
   "file": "verbs.zil",
   "line": 1929,
   "endLine": 1934,
   "source": "<ROUTINE PRE-LISTEN ()\n <COND (<AND <FSET? ,PRSO ,PERSONBIT>\n\t     <EQUAL? <GETP ,PRSO ,P?LDESC> 14 ;\"asleep\">>\n\t<TELL \"\\\"Zzzzzzz...\\\"\" CR>\n\t<RTRUE>)\n       (T <PRE-ASK>)>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "verbs.zil",
   "line": 1936,
   "endLine": 1942,
   "source": "<ROUTINE V-LISTEN ()\n <COND (<AND <FSET? ,PRSO ,PERSONBIT>\n\t     <NOT <FSET? ,PRSO ,MUNGBIT>>>\n\t<WAITING-FOR-YOU-TO-SPEAK>\n\t<RTRUE>)\n       (T\n\t<TELL \"At the moment,\" the ,PRSO \" makes no sound.\" CR>)>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "verbs.zil",
   "line": 1944,
   "endLine": 1949,
   "source": "<ROUTINE V-LOCK ()\n <COND ;(<FSET? ,PRSO ,DOORBIT>\n\t<COND (<EQUAL? ,PRSO ,HERE>\n\t       <OKAY ,PRSO \"locked\">)\n\t      (T <TELL-FIND-NONE \"a way to lock\" ,PRSO>)>)\n       (T <HAR-HAR>)>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "verbs.zil",
   "line": 1951,
   "endLine": 1954,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS ;T>\n\t\t;<CRLF>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "verbs.zil",
   "line": 1956,
   "endLine": 1959,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n <COND (<AND <FSET? ,PRSO ,DOORBIT> <NOT <FSET? ,PRSO ,OPENBIT>>>\n\t<TOO-BAD-BUT ,PRSO \"closed\">)\n       (T <TELL \"There's nothing behind\" him ,PRSO \".\" CR>)>>"
  },
  "V-LOOK-DOWN": {
   "name": "V-LOOK-DOWN",
   "file": "verbs.zil",
   "line": 1961,
   "endLine": 1967,
   "source": "<ROUTINE V-LOOK-DOWN ()\n <COND (<==? ,PRSO ,ROOMS>\n\t<PERFORM ,V?EXAMINE ,FLOOR>\n\t<RTRUE>)\n       (T\n\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t<RTRUE>)>>"
  },
  "PRE-LOOK-INSIDE": {
   "name": "PRE-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1969,
   "endLine": 1969,
   "source": "<ROUTINE PRE-LOOK-INSIDE () <ROOM-CHECK>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "verbs.zil",
   "line": 1971,
   "endLine": 2015,
   "source": "<ROUTINE V-LOOK-INSIDE (\"OPTIONAL\" (DIR ,P?IN) \"AUX\" RM)\n\t <COND (<DOBJ? ROOMS>\n\t\t<COND (<==? .DIR ,P?OUT>\n\t\t       <COND (<GLOBAL-IN? ,WINDOW ,HERE>\n\t\t\t      <PERFORM ,PRSA ,WINDOW ,PRSI>\n\t\t\t      <RTRUE>)>)\n\t\t      (T\n\t\t       <COND (<OR <FSET? <SET RM ,P-IT-OBJECT> ,CONTBIT>\n\t\t\t\t  <SET RM <FIND-FLAG-LG ,HERE ,CONTBIT>>\n\t\t\t\t  <GLOBAL-IN? <SET RM ,WINDOW> ,HERE>\n\t\t\t\t  <SET RM <FIND-FLAG-LG ,HERE ,DOORBIT>>>\n\t\t\t      <TELL-I-ASSUME .RM>\n\t\t\t      <PERFORM ,PRSA .RM ,PRSI>\n\t\t\t      <RTRUE>)>)>)>\n\t <COND (<DOBJ? GLOBAL-HERE>\n\t\t<PERFORM ,V?LOOK>\n\t\t<RTRUE>)\n\t       (<AND <IN? ,PRSO ,ROOMS>\t;<FSET? ,PRSO ,RLANDBIT>\n\t\t     <NOT <NOUN-USED? ,PRSO ,W?DOOR>>\n\t\t     <OR <GLOBAL-IN? ,PRSO ,HERE>\n\t\t\t <SEE-INTO? ,PRSO <>>\n\t\t\t ;<VISIBLE? ,PRSO>>>\n\t\t<ROOM-PEEK ,PRSO>)\n\t       (<V-LOOK-THROUGH T> <RTRUE>) ;\"SWG swapped this & next 5/21/86\"\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,SURFACEBIT>>\n\t\t<COND (<NOT <SEE-INSIDE? ,PRSO T>>\n\t\t       <FIRST-YOU \"open\" ,PRSO>)>\n\t\t<COND (<FIRST? ,PRSO>\n\t\t       <TELL \"You can see\">\n\t\t       <PRINT-CONTENTS ,PRSO>\n\t\t       ;<PRINT-CONT ,PRSO>\n\t\t       <COND (<FSET? ,PRSO ,SURFACEBIT> <TELL \" on\">)\n\t\t\t     (T <TELL \" inside\">)>\n\t\t       <TELL him ,PRSO \".\" CR>\n\t\t       <RTRUE>)\n\t\t      (<FSET? ,PRSO ,SURFACEBIT>\n\t\t       <TELL \"There's nothing on\" him ,PRSO>\n\t\t       <COND (<IN? ,PLAYER ,PRSO>\n\t\t\t      ;<EQUAL? ,PLAYER-SEATED ,PRSO <- 0 ,PRSO>>\n\t\t\t      <TELL \" except you\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (T <TOO-BAD-BUT ,PRSO \"empty\">)>)\n\t       (<==? .DIR ,P?IN> <YOU-CANT \"look inside\">)\n\t       (T ;<==? .DIR ,P?OUT> <YOU-CANT \"look outside\">)>>"
  },
  "FIRST-YOU": {
   "name": "FIRST-YOU",
   "file": "verbs.zil",
   "line": 2017,
   "endLine": 2026,
   "source": "<ROUTINE FIRST-YOU (STR \"OPTIONAL\" (OBJ 0) (OBJ2 0))\n\t<TELL !\\(>\n\t<HE-SHE-IT ,WINNER T .STR>\n\t<COND (<T? .OBJ>\n\t       <TELL the ;him .OBJ>\n\t       <COND (<=? .STR \"open\">\n\t\t      <FSET .OBJ ,OPENBIT>)>\n\t       <COND (<T? .OBJ2>\n\t\t      <TELL \" from\" the ;him .OBJ2>)>)>\n\t<TELL \" first.)\" CR>>"
  },
  "V-LOOK-THROUGH": {
   "name": "V-LOOK-THROUGH",
   "file": "verbs.zil",
   "line": 2028,
   "endLine": 2050,
   "source": "<ROUTINE V-LOOK-THROUGH (\"OPTIONAL\" (INSIDE <>) \"AUX\" RM)\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<OR <FSET? ,PRSO ,OPENBIT>\n\t\t\t   <FSET? ,PRSO ,TRANSBIT>\n\t\t\t   ;<NOUN-USED? ,PRSO ,W?KEYHOLE>>\n\t\t       <COND (<SET RM <DOOR-ROOM ,HERE ,PRSO>>\n\t\t\t      <ROOM-PEEK .RM T>)\n\t\t\t     (T <NO-BEYOND>)>)\n\t\t      ;(<ZMEMQ ,PRSO ,CHAR-ROOM-TABLE>\n\t\t       <PERFORM ,PRSA ,KEYHOLE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TOO-BAD-BUT ,PRSO \"closed\">)>)\n\t       (<EQUAL? ,PRSO ,WINDOW>\n\t\t<COND ;(<SET RM <WINDOW-ROOM ,HERE ,PRSO>>\n\t\t       <ROOM-PEEK .RM T>)\n\t\t      (T <NO-BEYOND>)>)\n\t       (<FSET? ,PRSO ,PERSONBIT>\n\t\t<TELL \"You forgot to bring your X-ray glasses.\" CR>)\n\t       (.INSIDE <RFALSE>)\n\t       (<FSET? ,PRSO ,TRANSBIT>\n\t\t<TELL \"Everything looks bigger.\" CR>)\n\t       (T <YOU-CANT \"look through\">)>>"
  },
  "NO-BEYOND": {
   "name": "NO-BEYOND",
   "file": "verbs.zil",
   "line": 2052,
   "endLine": 2052,
   "source": "<ROUTINE NO-BEYOND () <TELL \"You can't tell what's beyond\" him ,PRSO \".\" CR>>"
  },
  "ROOM-PEEK": {
   "name": "ROOM-PEEK",
   "file": "verbs.zil",
   "line": 2054,
   "endLine": 2076,
   "source": "<ROUTINE ROOM-PEEK (RM \"OPTIONAL\" (SAFE <>) \"AUX\" (X <>) OHERE OLIT TXT)\n\t <COND (<EQUAL? .RM ,HERE>\n\t\t<V-LOOK>\n\t\t<RTRUE>)\n\t       (<OR .SAFE <SEE-INTO? .RM>>\n\t\t<SET OHERE ,HERE>\n\t\t<SET OLIT ,LIT>\n\t\t<SETG HERE .RM>\n\t\t<MAKE-ALL-PEOPLE -12 ;\"listening to you\">\n\t\t<SETG LIT <LIT? ;,HERE>>\n\t\t<TELL \"You peer \">\n\t\t<COND (<FSET? .RM ,SURFACEBIT> <TELL \"at\">) (T <TELL \"into\">)>\n\t\t<TELL him .RM !\\: CR>\n\t\t<COND (<DESCRIBE-OBJECTS ;T> <SET X T>)\n\t\t      (<SET TXT <GETP .RM ,P?LDESC>>\n\t\t       <SET X T>\n\t\t       <TELL .TXT CR>)>\n\t\t;<COND (<CORRIDOR-LOOK> <SET X T>)>\n\t\t<COND (<ZERO? .X>\n\t\t       <TELL \"You can't see anything suspicious.\" CR>)>\n\t\t<SETG HERE .OHERE>\n\t\t<SETG LIT .OLIT>\n\t\t<RTRUE>)>>"
  },
  "SEE-INTO?": {
   "name": "SEE-INTO?",
   "file": "verbs.zil",
   "line": 2078,
   "endLine": 2113,
   "source": "<ROUTINE SEE-INTO? (THERE \"OPTIONAL\" (TELL? T) (IGNORE-DOOR <>)\"AUX\" P L TBL O)\n ;<COND (<CORRIDOR-LOOK .THERE>\n\t<RTRUE>)>\n <SET P 0>\n <REPEAT ()\n\t <COND (<OR <0? <SET P <NEXTP ,HERE .P>>>\n\t\t    <L? .P ,LOW-DIRECTION>>\n\t\t<COND (.TELL? <TELL-CANT-FIND>)>\n\t\t<RFALSE>)>\n\t <SET TBL <GETPT ,HERE .P>>\n\t <SET L <PTSIZE .TBL>>\n\t <COND (<==? .L ,UEXIT>\n\t\t<COND (<==? <GET/B .TBL ,REXIT> .THERE>\n\t\t       <RTRUE>)>)\n\t       (<==? .L ,DEXIT>\n\t\t<COND (<==? <GET/B .TBL ,REXIT> .THERE>\n\t\t       <COND (<FSET? <GET/B .TBL ,DEXITOBJ> ,OPENBIT>\n\t\t\t      <RTRUE>)\n\t\t\t     (<WALK-THRU-DOOR? .TBL <GET/B .TBL ,DEXITOBJ> <>\n\t\t\t\t\t\t\t\t       ;.TELL?>\n\t\t\t      <RTRUE>)\n\t\t\t     (<T? .IGNORE-DOOR>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <COND (.TELL?\n\t\t\t\t     <SETG CLOCK-WAIT T>\n\t\t\t\t     <TELL\n\"(The door to that room is closed.)\" CR>)>\n\t\t\t      <RFALSE ;RTRUE>)>)>)\n\t       (<==? .L ,CEXIT>\n\t\t<COND (<==? <GET/B .TBL ,REXIT> .THERE>\n\t\t       <COND (<VALUE <GETB .TBL ,CEXITFLAG>>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <COND (.TELL? <TELL-CANT-FIND>)>\n\t\t\t      <RFALSE>)>)>)>>>"
  },
  "TELL-CANT-FIND": {
   "name": "TELL-CANT-FIND",
   "file": "verbs.zil",
   "line": 2115,
   "endLine": 2118,
   "source": "<ROUTINE TELL-CANT-FIND ()\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"(That place isn't close enough.)\"\n\t      ;\"You can't seem to find that room.\" CR>>"
  },
  "V-LOOK-ON": {
   "name": "V-LOOK-ON",
   "file": "verbs.zil",
   "line": 2120,
   "endLine": 2123,
   "source": "<ROUTINE V-LOOK-ON ()\n\t <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<V-LOOK-INSIDE>)\n\t       (T <TELL \"There's no good surface on\" him ,PRSO \".\" CR>)>>"
  },
  "V-LOOK-OUTSIDE": {
   "name": "V-LOOK-OUTSIDE",
   "file": "verbs.zil",
   "line": 2125,
   "endLine": 2125,
   "source": "<ROUTINE V-LOOK-OUTSIDE () <V-LOOK-INSIDE ,P?OUT>>"
  },
  "PRE-LOOK-UNDER": {
   "name": "PRE-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 2127,
   "endLine": 2127,
   "source": "<ROUTINE PRE-LOOK-UNDER () <ROOM-CHECK>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "verbs.zil",
   "line": 2129,
   "endLine": 2143,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <COND (<DOBJ? EYES HANDS HEAD EARS TEETH>\n\t\t<WONT-HELP>)\n\t       (<HELD? ,PRSO>\n\t\t<TELL \"You're \">\n\t\t<COND (<FSET? ,PRSO ,WORNBIT>\n\t\t       <TELL \"wear\">)\n\t\t      (T <TELL \"hold\">)>\n\t\t<TELL \"ing\" the ,PRSO \"!\" CR>)\n\t       (<FSET? ,PRSO ,PERSONBIT>\n\t\t<TELL \"Nope. Nothing hiding under\" him ,PRSO \".\" CR>)\n\t       (<EQUAL? <LOC ,PRSO> ,HERE ,LOCAL-GLOBALS ;,GLOBAL-OBJECTS>\n\t\t<TELL \"There's nothing there but dust.\" CR>)\n\t       (T\n\t\t<TELL \"That's not a bit useful.\" CR>)>>"
  },
  "V-LOOK-UP": {
   "name": "V-LOOK-UP",
   "file": "verbs.zil",
   "line": 2145,
   "endLine": 2157,
   "source": "<ROUTINE V-LOOK-UP (\"AUX\" HR)\n\t <COND (<T? ,PRSI>\n\t\t<TELL\n\"There's no information in\" the ,PRSI \" about\" the ,PRSO \".\" CR>)\n\t       (<DOBJ? ROOMS>\n\t\t<COND (<OUTSIDE? ,HERE>\n\t\t       <PERFORM ,V?EXAMINE ,SKY>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL\n\"The ceiling is decorated with swirly lines and patterns.\">\n\t\t       <CRLF>)>)\n\t       (T <YOU-CANT \"look up\">)>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "verbs.zil",
   "line": 2159,
   "endLine": 2161,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"Juggling isn't one of your talents.\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "verbs.zil",
   "line": 2163,
   "endLine": 2166,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving\" him ,PRSO \" reveals nothing.\" CR>)\n\t       (T <YOU-CANT ;\"move\">)>>"
  },
  "PRE-MOVE-DIR": {
   "name": "PRE-MOVE-DIR",
   "file": "verbs.zil",
   "line": 2168,
   "endLine": 2171,
   "source": "<ROUTINE PRE-MOVE-DIR ()\n <COND (<NOT <IOBJ? INTDIR>>\n\t<DONT-UNDERSTAND>\n\t<RTRUE>)>>"
  },
  "V-MOVE-DIR": {
   "name": "V-MOVE-DIR",
   "file": "verbs.zil",
   "line": 2173,
   "endLine": 2175,
   "source": "<ROUTINE V-MOVE-DIR ()\n\t<TELL\n\"You can't move\" him ,PRSO \" in any particular \" D ,INTDIR \".\" CR>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "verbs.zil",
   "line": 2177,
   "endLine": 2187,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<AND <FSET? ,PRSO ,DOORBIT> <ZERO? ,PRSI>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL\n\"You'd fly through the open door if you tried.\" CR>)\n\t\t      (<UNLOCK-DOOR? ,PRSO>\n\t\t       <TELL \"Why don't you just open it instead?\" CR>)\n\t\t      (T <IF-SPY>)>)\n\t       (<NOT <FSET? ,PRSO ,PERSONBIT>>\n\t\t<IF-SPY>)\n\t       (T <IKILL \"hurt\">)>>"
  },
  "V-NOD": {
   "name": "V-NOD",
   "file": "verbs.zil",
   "line": 2189,
   "endLine": 2197,
   "source": "<ROUTINE V-NOD ()\n <COND (<NOT <DOBJ? ROOMS>>\n\t<YOU-CANT>)\n       (<T? ,AWAITING-REPLY>\n\t<PERFORM ,V?YES>\n\t<RTRUE>)\n       (T\n\t<PERFORM ,V?HELLO ,ROOMS>\n\t<RTRUE>)>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "verbs.zil",
   "line": 2199,
   "endLine": 2233,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<NOT <OR <FSET? ,PRSO ,CONTBIT>\n\t\t\t <FSET? ,PRSO ,DOORBIT>\n\t\t\t <EQUAL? ,PRSO ,WINDOW>>>\n\t\t<IMPOSSIBLE> ;<YOU-CANT ;\"open\">)\n\t       (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <EQUAL? ,PRSO ,WINDOW>\n\t\t    <NOT <==? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,LOCKED>\n\t\t       <COND (<UNLOCK-DOOR? ,PRSO>\n\t\t\t      <FCLEAR ,PRSO ,LOCKED>\n\t\t\t      <FIRST-YOU \"unlock\" ,PRSO>)\n\t\t\t     (T <TOO-BAD-BUT ,PRSO \"locked\"> <RTRUE>)>)>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <ALREADY ,PRSO \"open\">)\n\t\t      ;(<FSET? ,PRSO ,MUNGBIT>\n\t\t       <TELL\n\"You can't open it. The latch is broken.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <COND (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t\t\t  <EQUAL? ,PRSO ,WINDOW>\n\t\t\t\t  <NOT <FIRST? ,PRSO>>\n\t\t\t\t  <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <OKAY ,PRSO \"open\">)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"You open\" him ,PRSO !\\. CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"You open\" him ,PRSO \" and see\">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (T <YOU-CANT ;\"open\">)>>"
  },
  "V-PANIC": {
   "name": "V-PANIC",
   "file": "verbs.zil",
   "line": 2235,
   "endLine": 2236,
   "source": "<ROUTINE V-PANIC ()\n\t <TELL \"Not surprised.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "verbs.zil",
   "line": 2240,
   "endLine": 2243,
   "source": "<ROUTINE V-PLAY ()\n\t <SETG CLOCK-WAIT T>\n\t <TELL\n\"[Speaking of playing, you'd enjoy Infocom's other fictions, too!]\" CR>>"
  },
  "V-POUR": {
   "name": "V-POUR",
   "file": "verbs.zil",
   "line": 2245,
   "endLine": 2245,
   "source": "<ROUTINE V-POUR () <HAR-HAR>>"
  },
  "V-PULL-TOGETHER": {
   "name": "V-PULL-TOGETHER",
   "file": "verbs.zil",
   "line": 2247,
   "endLine": 2247,
   "source": "<ROUTINE V-PULL-TOGETHER () <DONT-UNDERSTAND>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "verbs.zil",
   "line": 2249,
   "endLine": 2249,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing\">>"
  },
  "V-SPUT-ON": {
   "name": "V-SPUT-ON",
   "file": "verbs.zil",
   "line": 2251,
   "endLine": 2253,
   "source": "<ROUTINE V-SPUT-ON ()\n\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t<RTRUE>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "verbs.zil",
   "line": 2255,
   "endLine": 2271,
   "source": "<ROUTINE PRE-PUT ()\n\t ;<COND (<WEAR-CHECK> <RTRUE>)>\n\t <FCLEAR ,PRSO ,WORNBIT>\n\t <COND (<DOBJ? HEAD HANDS>\n\t\t<WONT-HELP>\n\t\t<RTRUE>)\n\t       (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t<NOT-HERE ,PRSO>\n\t\t<RTRUE>)\n\t       (<IOBJ? FLOOR GLOBAL-HERE <> ;POCKET>\n\t\t<RFALSE>)\n\t       (<AND ;<T? ,PRSI>\n\t\t     <IN? ,PRSI ,GLOBAL-OBJECTS>>\n\t\t<NOT-HERE ,PRSI>\n\t\t<RTRUE>)\n\t       (<HELD? ,PRSI ,PRSO>\n\t\t<YOU-CANT \"put\" ,PRSI \"in it\">)>>"
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "verbs.zil",
   "line": 2273,
   "endLine": 2283,
   "source": "<ROUTINE V-PUT ()\n\t <COND ;(<FSET? ,PRSI ,PERSONBIT>\n\t\t<SETG WINNER ,PRSI>\n\t\t<PERFORM ,V?WEAR ,PRSO>\n\t\t<RTRUE>)\n\t       (<AND <NOT <FSET? ,PRSI ,SURFACEBIT>>\n\t\t     <NOT <FSET? ,PRSI ,VEHBIT>>>\n\t\t<COND (T ;<NOT <FSET? ,PRSI ,SURFACEBIT>>\n\t\t       <TELL \"There's no good surface on\" him ,PRSI \".\" CR>)>\n\t\t<RTRUE>)>\n\t <PUT-ON-OR-IN>>"
  },
  "TELL-FIND-NONE": {
   "name": "TELL-FIND-NONE",
   "file": "verbs.zil",
   "line": 2285,
   "endLine": 2288,
   "source": "<ROUTINE TELL-FIND-NONE (STR \"OPTIONAL\" (OBJ <>))\n\t<TELL \"You search for \" .STR>\n\t<COND (<T? .OBJ> <TELL the .OBJ>)>\n\t<TELL \" but find none.\" CR>>"
  },
  "PRE-PUT-IN": {
   "name": "PRE-PUT-IN",
   "file": "verbs.zil",
   "line": 2290,
   "endLine": 2311,
   "source": "<ROUTINE PRE-PUT-IN ()\n <COND ;(<EQUAL? <GET ,P-OFW 1> ,W?FRONT>\n\t<PERFORM ,V?DROP ,PRSO>\n\t<RTRUE>)\n       (<IOBJ? PSEUDO-OBJECT>\n\t<RETURN <PRE-PUT>>)\n       ;(<IOBJ? INKWELL MOONMIST>\n\t<YOU-SHOULDNT \" in\">\n\t<RFATAL>)\n       (<IOBJ? EYES HANDS>\n\t<WONT-HELP>\n\t<RFATAL>)\n       (<FSET? ,PRSI ,READBIT>\n\t<WONT-HELP>\n\t<RFATAL>)\n       (<NOT <FSET? ,PRSI ,CONTBIT>>\n\t<TELL-FIND-NONE \"an opening in\" ,PRSI>\n\t<RFATAL>)>\n <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t<FIRST-YOU \"open\" ,PRSI>\n\t;<TOO-BAD-BUT ,PRSI \"closed\">)>\n <PRE-PUT>>"
  },
  "V-PUT-IN": {
   "name": "V-PUT-IN",
   "file": "verbs.zil",
   "line": 2313,
   "endLine": 2321,
   "source": "<ROUTINE V-PUT-IN ()\n\t <COND (<AND <NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t     <NOT <FSET? ,PRSI ,VEHBIT>>>\n\t\t<COND (<OR <FSET? ,PRSI ,CONTBIT>\n\t\t\t   <FSET? ,PRSI ,DOORBIT>>\n\t\t       <TOO-BAD-BUT ,PRSI \"closed\">)\n\t\t      (T <TELL \"You can't open\" him ,PRSI \".\" CR>)>\n\t\t<RTRUE>)>\n\t <PUT-ON-OR-IN>>"
  },
  "PUT-ON-OR-IN": {
   "name": "PUT-ON-OR-IN",
   "file": "verbs.zil",
   "line": 2325,
   "endLine": 2351,
   "source": "<ROUTINE PUT-ON-OR-IN ()\n\t <COND (<ZERO? ,PRSI> <YOU-CANT ;\"put\">)\n\t       (<==? ,PRSI ,PRSO>\n\t\t<HAR-HAR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TOO-BAD-BUT ,PRSO>\n\t\t<TELL \" is already \"\n\t\t\t<COND (<FSET? ,PRSI ,SURFACEBIT> \"on\") (T \"in\")>\n\t\t\thim ,PRSI \"!\" CR>)\n\t       ;(<AND <NOT <FSET? ,PRSI ,SURFACEBIT>>\n\t\t     <NOT <FSET? ,PRSI ,OPENBIT>>>\n\t\t<TOO-BAD-BUT ,PRSI \"closed\">)\n\t       (<G? <+ <WEIGHT ,PRSI> <GETP ,PRSO ,P?SIZE>>\n\t\t    ;<- * <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL ,NOT-ENOUGH-ROOM>\n\t\t<RTRUE>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<COND (<AND <FSET? ,PRSI ,PERSONBIT>\n\t\t\t    <FSET? ,PRSO ,WEARBIT>>\n\t\t       <FSET ,PRSO ,WORNBIT>)>\n\t\t<TELL \"Okay.\" CR>)>>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "verbs.zil",
   "line": 2355,
   "endLine": 2369,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND ;(<AND <EQUAL? .OBJ ,PLAYER>\n\t\t\t\t    <FSET? .CONT ,WORNBIT>>\n\t\t\t       <SET WT <+ .WT 1>>)\n\t\t\t              ;\"worn things shouldn't count\"\n\t\t\t      ;(<AND <EQUAL? .OBJ ,PLAYER>\n\t\t\t\t    <FSET? <LOC .CONT> ,WORNBIT>>\n\t\t\t       <SET WT <+ .WT 1>>)\n\t\t\t              ;\"things in worn things shouldn't count\"\n\t\t\t      (T\n\t\t\t       <SET WT <+ .WT <GETP .CONT ,P?SIZE>>>)>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t .WT ;<+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "verbs.zil",
   "line": 2371,
   "endLine": 2371,
   "source": "<ROUTINE V-PUT-UNDER () <WONT-HELP>>"
  },
  "PRE-SREAD": {
   "name": "PRE-SREAD",
   "file": "verbs.zil",
   "line": 2373,
   "endLine": 2373,
   "source": "<ROUTINE PRE-SREAD () <PERFORM ,V?READ ,PRSI ,PRSO> <RTRUE>>"
  },
  "V-SREAD": {
   "name": "V-SREAD",
   "file": "verbs.zil",
   "line": 2374,
   "endLine": 2374,
   "source": "<ROUTINE V-SREAD () <V-FOO>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "verbs.zil",
   "line": 2376,
   "endLine": 2379,
   "source": "<ROUTINE PRE-READ (\"AUX\" VAL)\n\t <COND ;(<ZERO? ,LIT> <TOO-DARK> <RTRUE>)\n\t       (<IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t<NOT-HERE ,PRSO>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "verbs.zil",
   "line": 2381,
   "endLine": 2383,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>> <YOU-CANT ;\"read\">)\n\t       (ELSE <TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-REFUSE": {
   "name": "V-REFUSE",
   "file": "verbs.zil",
   "line": 2385,
   "endLine": 2387,
   "source": "<ROUTINE V-REFUSE ()\n\t <SETG PRSA ,V?TAKE>\n\t <DONT-F>>"
  },
  "V-RELAX": {
   "name": "V-RELAX",
   "file": "verbs.zil",
   "line": 2389,
   "endLine": 2390,
   "source": "<ROUTINE V-RELAX ()\n\t <TELL ,ZEN CR>>"
  },
  "V-REMOVE": {
   "name": "V-REMOVE",
   "file": "verbs.zil",
   "line": 2394,
   "endLine": 2400,
   "source": "<ROUTINE V-REMOVE ()\n\t <COND (<FSET? ,PRSO ,WORNBIT>\n\t\t<PERFORM ,V?TAKE-OFF ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-RING": {
   "name": "V-RING",
   "file": "verbs.zil",
   "line": 2402,
   "endLine": 2402,
   "source": "<ROUTINE V-RING () <YOU-CANT>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "verbs.zil",
   "line": 2404,
   "endLine": 2409,
   "source": "<ROUTINE V-RUB ()\n\t <COND (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     <NOT <FSET? ,PRSO ,MUNGBIT>>\n\t\t     <NOT <EQUAL? ,PRSO ,PLAYER>>>\n\t\t<FACE-RED>)\n\t       (T <HACK-HACK \"Rubbing\" ;\"Fiddling with\">)>>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "verbs.zil",
   "line": 2411,
   "endLine": 2420,
   "source": "<ROUTINE V-SAY (\"AUX\" P)\n <COND (<QCONTEXT-GOOD?>\n\t<PERFORM ,V?TELL ,QCONTEXT>\n\t<RTRUE>)\n       (<SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,WINNER>>\n\t<TELL-I-ASSUME .P \" Say to\">\n\t<PERFORM ,V?TELL .P>\n\t<RTRUE>)\n       (T\n\t<NOT-CLEAR-WHOM>)>>"
  },
  "PRE-SEARCH": {
   "name": "PRE-SEARCH",
   "file": "verbs.zil",
   "line": 2422,
   "endLine": 2422,
   "source": "<ROUTINE PRE-SEARCH () <ROOM-CHECK>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "verbs.zil",
   "line": 2424,
   "endLine": 2451,
   "source": "<ROUTINE V-SEARCH (\"AUX\" OBJ)\n\t <COND (<IN? ,PRSO ,ROOMS>\n\t\t<PERFORM ,PRSA ,GLOBAL-HERE>\n\t\t<RTRUE>\n\t\t;<START-SEARCH>)\n\t       (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     <SET OBJ <FIRST? ,PRSO>>>\n\t\t<FSET .OBJ ,TAKEBIT>\n\t\t<FCLEAR .OBJ ,NDESCBIT>\n\t\t<FCLEAR .OBJ ,WORNBIT>\n\t\t<FCLEAR .OBJ ,SECRETBIT>\n\t\t<THIS-IS-IT .OBJ>\n\t\t<MOVE .OBJ ,PLAYER>\n\t\t;<COND (<EQUAL? .OBJ ,MUSTACHE>\n\t\t       <SETG WENDISH-BARE T>)>\n\t\t<TELL\n\"You find \" a .OBJ \" and take it. \" !\\Y ,OU-STOP-SEARCHING \".\" CR>)\n\t       ;(<AND <SET OBJ <FIND-IN ,PRSO ,SECRETBIT>>\n\t\t     ;<FSET? .OBJ ,NDESCBIT>>\n\t\t<DISCOVER .OBJ ,PRSO>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<NOTHING-SPECIAL>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,SURFACEBIT>>\n\t\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t\t<RTRUE>)\n\t       (T <NOTHING-SPECIAL>\n\t\t;<TELL \"You find nothing suspicious.\" CR>)>>"
  },
  "PRE-SSEARCH-FOR": {
   "name": "PRE-SSEARCH-FOR",
   "file": "verbs.zil",
   "line": 2455,
   "endLine": 2455,
   "source": "<ROUTINE PRE-SSEARCH-FOR () <PERFORM ,V?SEARCH-FOR ,PRSI ,PRSO> <RTRUE>>"
  },
  "V-SSEARCH-FOR": {
   "name": "V-SSEARCH-FOR",
   "file": "verbs.zil",
   "line": 2456,
   "endLine": 2456,
   "source": "<ROUTINE   V-SSEARCH-FOR () <V-FOO>>"
  },
  "PRE-SEARCH-FOR": {
   "name": "PRE-SEARCH-FOR",
   "file": "verbs.zil",
   "line": 2458,
   "endLine": 2467,
   "source": "<ROUTINE PRE-SEARCH-FOR (\"AUX\" OBJ)\n <COND (<ROOM-CHECK> <RTRUE>)\n       ;(<AND <IN? ,PRSI ,PLAYER>\n\t     ;<GETP ,PRSI ,P?GENERIC>\n\t     <SET OBJ <APPLY <GETP ,PRSI ,P?GENERIC> ,PRSI>>>\n\t<SETG PRSI .OBJ>)>\n ;<COND (<DOBJ? ;GLOBAL-ROOM GLOBAL-HERE>\n\t<PERFORM ,PRSA ,HERE>\n\t<RTRUE>)>\n <RFALSE>>"
  },
  "V-SEARCH-FOR": {
   "name": "V-SEARCH-FOR",
   "file": "verbs.zil",
   "line": 2469,
   "endLine": 2501,
   "source": "<ROUTINE V-SEARCH-FOR ()\n\t <COND (<IN? ,PRSO ,ROOMS>\n\t\t<PERFORM ,PRSA ,GLOBAL-HERE ,PRSI>\n\t\t<RTRUE>\n\t\t;<START-SEARCH>)\n\t       (<FSET? ,PRSO ,PERSONBIT>\n\t\t<COND (<IN? ,PRSI ,PRSO>\n\t\t       <TELL \"Indeed,\" he+verb ,PRSO \"has\" him ,PRSI \".\" CR>)\n\t\t      (T\n\t\t       <TELL The ,PRSO \" doesn't have\">\n\t\t       <COND (<IN? ,PRSI ,GLOBAL-OBJECTS>\n\t\t\t      <TELL the ,PRSI \".\" CR>)\n\t\t\t     (<ZERO? ,PRSI>\n\t\t\t      <TELL \" that.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\nthe ,PRSI \" hidden on\" his ,PRSO \" person.\" CR>)>)>\n\t\t<RTRUE>)\n\t       (<AND <FSET? ,PRSO ,CONTBIT> <NOT <FSET? ,PRSO ,OPENBIT>>>\n\t\t<TELL \"You'll have to open\" him ,PRSO \" first.\" CR>)\n\t       (<IN? ,PRSI ,PRSO>\n\t\t<COND ;(<FSET? ,PRSI ,SECRETBIT>\n\t\t       <DISCOVER ,PRSI>)\n\t\t      (T <TELL\n\"How observant you are! There\" he+verb ,PRSI \"is\" \"!\" CR>)>)\n\t       (<ZERO? ,PRSI> <YOU-CANT ;\"search\">)\n\t       (T\n\t\t<TELL \"You don't find\">\n\t\t<COND (<FSET? ,PRSI ,SECRETBIT>\n\t\t       ;<==? <GET ,P-NAMW 1> ,W?EVIDENCE>\n\t\t       <TELL \" it\" ;\" any evidence\">)\n\t\t      (T <TELL him ,PRSI>)>\n\t\t<TELL \" there.\" CR>)>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "verbs.zil",
   "line": 2503,
   "endLine": 2518,
   "source": "<ROUTINE V-SHAKE (\"AUX\" X)\n\t <COND (<FSET? ,PRSO ,PERSONBIT>\n\t\t<TELL \"Be real.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<SETG CLOCK-WAIT T>\n\t\t<TELL \"(You can't shake it if you can't take it!)\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,OPENBIT>>\n\t\t     <FIRST? ,PRSO>>\n\t\t<TELL\n\"It sounds as if there is something inside\" him ,PRSO \".\" CR>)\n\t       (<AND <FSET? ,PRSO ,OPENBIT> <SET X <FIRST? ,PRSO>>>\n\t\t<TELL \"Right \" <GROUND-DESC> \" spill\">\n\t\t<COND (<ZERO? <NEXT? .X>> <TELL !\\s>)>\n\t\t<ROB ,PRSO ,HERE T>\n\t        <CRLF>)\n\t       (T <TELL \"You hear nothing inside\" him ,PRSO \".\" CR>)>>"
  },
  "V-SHOOT": {
   "name": "V-SHOOT",
   "file": "verbs.zil",
   "line": 2520,
   "endLine": 2526,
   "source": "<ROUTINE V-SHOOT ()\n <COND (<AND <OR <ZERO? ,PRSI>\n\t\t <NOT <EQUAL? <LOC ,PRSI> ,WINNER ;,POCKET>>>\n\t     <NOT <FIND-IN ,WINNER ,WEAPONBIT>>\n\t     ;<NOT <FIND-IN ,POCKET ,WEAPONBIT>>>\n\t<TELL \"You're not holding anything to shoot with.\" CR>)\n       (T <IKILL \"shoot\">)>>"
  },
  "PRE-SSHOOT": {
   "name": "PRE-SSHOOT",
   "file": "verbs.zil",
   "line": 2528,
   "endLine": 2528,
   "source": "<ROUTINE PRE-SSHOOT () <PERFORM ,V?SHOOT ,PRSI ,PRSO> <RTRUE>>"
  },
  "V-SSHOOT": {
   "name": "V-SSHOOT",
   "file": "verbs.zil",
   "line": 2529,
   "endLine": 2529,
   "source": "<ROUTINE   V-SSHOOT () <V-FOO>>"
  },
  "V-SHOW": {
   "name": "V-SHOW",
   "file": "verbs.zil",
   "line": 2531,
   "endLine": 2540,
   "source": "<ROUTINE V-SHOW ()\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<SETG WINNER ,PLAYER>\n\t\t<COND (<VISIBLE? ,PRSO> <PERFORM ,V?EXAMINE ,PRSI>)\n\t\t      (T <PERFORM ,V?FIND ,PRSI>)>\n\t\t<RTRUE>)\n\t       (<OR <NOT <FSET? ,PRSO ,PERSONBIT>>\n\t\t    <FSET? ,PRSO ,MUNGBIT>>\n\t\t<TELL \"Don't wait for\" him ,PRSO \" to applaud.\" CR>)\n\t       (T <WHO-CARES>)>>"
  },
  "PRE-SSHOW": {
   "name": "PRE-SSHOW",
   "file": "verbs.zil",
   "line": 2542,
   "endLine": 2567,
   "source": "<ROUTINE PRE-SSHOW (\"AUX\" P)\n  <COND (<T? ,PRSI>\n\t ;<SETG P-MERGED T>\n\t <COND (<IN? ,PRSI ,ROOMS>\t;\"SHOW ME TO MY ROOM\"\n\t\t<PERFORM ,V?TAKE-TO ,PRSO ,PRSI>\n\t\t<RTRUE>)>\n\t <PERFORM ,V?SHOW ,PRSI ,PRSO>\n\t <RTRUE>)\n\t(<NOT <HELD? ,PRSO>>\n\t <COND (<FSET? <LOC ,PRSO> ,PERSONBIT>\n\t\t<PERFORM ,V?TAKE ,PRSO>)\n\t       (T\n\t\t<TELL-I-ASSUME ,PRSO \" Ask about\">\n\t\t<PERFORM ,V?ASK-CONTEXT-ABOUT ,PRSO>)>\n\t <RTRUE>)\n\t(<QCONTEXT-GOOD?>\n\t <PERFORM ,V?SHOW ,QCONTEXT ,PRSO>\n\t <RTRUE>)\n\t(<SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,WINNER>>\n\t <TELL-I-ASSUME .P \" Show\">\n\t <PERFORM ,V?SHOW .P ,PRSO>\n\t <RTRUE>)\n\t(T\n\t <TELL-I-ASSUME ,PLAYER \" Show\">\n\t <PERFORM ,V?SHOW ,PLAYER ,PRSO>\n\t <RTRUE>)>>"
  },
  "V-SSHOW": {
   "name": "V-SSHOW",
   "file": "verbs.zil",
   "line": 2569,
   "endLine": 2569,
   "source": "<ROUTINE V-SSHOW () <V-FOO>>"
  },
  "PRE-SIT": {
   "name": "PRE-SIT",
   "file": "verbs.zil",
   "line": 2571,
   "endLine": 2571,
   "source": "<ROUTINE PRE-SIT () <ROOM-CHECK>>"
  },
  "V-SIT": {
   "name": "V-SIT",
   "file": "verbs.zil",
   "line": 2573,
   "endLine": 2590,
   "source": "<ROUTINE V-SIT (\"OPTIONAL\" (LIE? <>))\n <COND (<AND <==? ,WINNER ,PLAYER>\n\t     <OR <FSET? ,PRSO ,VEHBIT>\n\t\t <AND <DOBJ? GLOBAL-HERE HERE FLOOR>\n\t\t      ;<FSET? ,HERE ,SURFACEBIT>>>>\n\t<TELL \"You're now \">\n\t<COND (<ZERO? .LIE?>\n\t       ;<SETG PLAYER-SEATED ,PRSO>\n\t       <TELL \"sitt\">)\n\t      (T\n\t       ;<SETG PLAYER-SEATED <- 0 ,PRSO>>\n\t       <TELL \"ly\">)>\n\t<COND (<FSET? ,PRSO ,VEHBIT>\n\t       <MOVE ,PLAYER ,PRSO>)>\n\t<TELL \"ing \">\n\t<COND (<FSET? ,PRSO ,SURFACEBIT> <TELL \"on\">) (T <TELL \"in\">)>\n\t<TELL the ;him ,PRSO \".\" CR>)\n       (T <WONT-HELP>)>>"
  },
  "V-SIT-AT": {
   "name": "V-SIT-AT",
   "file": "verbs.zil",
   "line": 2592,
   "endLine": 2592,
   "source": "<ROUTINE V-SIT-AT () <V-SIT>>"
  },
  "V-SLAP": {
   "name": "V-SLAP",
   "file": "verbs.zil",
   "line": 2594,
   "endLine": 2606,
   "source": "<ROUTINE V-SLAP ()\n <COND (<IOBJ? ROOMS> <SETG PRSI <>>)>\n <COND ;(<AND ,PRSI <NOT-HOLDING? ,PRSI>>\n\t<RTRUE>)\n       (<DOBJ? PLAYER>\n\t<TELL\n\"That sounds like a sign you could wear on your back.\" CR>)\n       (<NOT <FSET? ,PRSO ,PERSONBIT>>\n\t<IF-SPY>)\n       (<FSET? ,PRSO ,MUNGBIT>\n\t<TELL\n\"If\" he ,PRSO \" could,\" he ,PRSO \" would slap you right back.\" CR>)\n       (T <FACE-RED>)>>"
  },
  "IF-SPY": {
   "name": "IF-SPY",
   "file": "verbs.zil",
   "line": 2608,
   "endLine": 2617,
   "source": "<ROUTINE IF-SPY ()\n\t;<COND (<NOT <FSET? ,PRSO ,PERSONBIT>> <TELL \"break\">)\n\t      (T <TELL \"drop\">)>\n\t<COND (<ZERO? ,PRSI>\n\t       <TELL \"You give\" him ,PRSO \" a swift \">\n\t       <COND (<==? ,P-PRSA-WORD ,W?KICK>\n\t\t      <TELL \"kick\">)\n\t\t     (T <TELL \"hand chop\">)>)\n\t      (T <TELL \"You swing\" him ,PRSI \" at\" him ,PRSO>)>\n\t<TELL \", but\" he ,PRSO \" seems indestructible.\" CR>>"
  },
  "FACE-RED": {
   "name": "FACE-RED",
   "file": "verbs.zil",
   "line": 2619,
   "endLine": 2634,
   "source": "<ROUTINE FACE-RED (\"OPTIONAL\" (P 0) \"AUX\" X)\n\t<COND (<ZERO? .P> <SET P ,PRSO>)>\n\t<UNSNOOZE .P>\n\t;<SET X <GETP .P ,P?LINE>>\n\t;<PUTP .P ,P?LINE <+ 1 .X>>\n\t<COND (<EQUAL? ,FOLLOWER .P>\n\t       <SETG FOLLOWER <>>)>\n\t<COND (<NOT <EQUAL? <GETP .P ,P?LDESC>\n\t\t\t    4 ;\"looking at you with suspicion\">>\n\t       ;<EQUAL? .P ,FRIEND>\n\t       <PUTP .P ,P?LDESC 20 ;\"ignoring you\">)>\n\t<TELL He .P>\n\t<COND ;(<ZERO? .X>\n\t       <TELL \" looks at you as if you were insane.\" CR>)\n\t      (T <TELL \" gives you a good slap. It hurts, too!\"\n\t\t       ;\" slaps you right back. Wow, is your face red!\" CR>)>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "verbs.zil",
   "line": 2636,
   "endLine": 2637,
   "source": "<ROUTINE V-SMELL ()\n\t<TELL He+verb ,PRSO \"smell\" \" just like \" a ,PRSO \"!\" CR>>"
  },
  "V-SMILE": {
   "name": "V-SMILE",
   "file": "verbs.zil",
   "line": 2639,
   "endLine": 2639,
   "source": "<ROUTINE V-SMILE () <TELL \"How nice.\" CR>>"
  },
  "V-SORRY": {
   "name": "V-SORRY",
   "file": "verbs.zil",
   "line": 2641,
   "endLine": 2652,
   "source": "<ROUTINE V-SORRY ()\n <COND ;(<==? ,PRSO ,CONFESSED>\n\t<WONT-HELP-TO-TALK-TO ,PRSO>)\n       (<NOT <GRAB-ATTENTION ,PRSO>>\n\t<RFATAL>)\n       ;(<NOT <L? 0 <GETP ,PRSO ,P?LINE>>>\n\t<TELL \"\\\"I'm not angry with\" him ,WINNER \" now.\\\"\" CR>)\n       (T\n\t;<PUTP ,PRSO ,P?LINE 0 ;<- <GETP ,PRSO ,P?LINE> 1>>\n\t<COND (T ;<EQUAL? ,PRSO ,FRIEND>\n\t       <PUTP ,PRSO ,P?LDESC 3 ;\"watching you\">)>\n\t<TELL \"\\\"Apology accepted.\\\"\" CR>)>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "verbs.zil",
   "line": 2654,
   "endLine": 2665,
   "source": "<ROUTINE V-STAND (\"AUX\" P)\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND ;<==? ,WINNER ,PLAYER>\n\t\t     <NOT <IN? ,WINNER ,HERE>>>\n\t\t<OWN-FEET>)\n\t       (<AND <T? ,PRSO>\n\t\t     <FSET? ,PRSO ,TAKEBIT>>\n\t\t<WONT-HELP>)\n\t       (T\n\t\t<ALREADY ,WINNER \"standing up\">)>>"
  },
  "V-STOP": {
   "name": "V-STOP",
   "file": "verbs.zil",
   "line": 2667,
   "endLine": 2675,
   "source": "<ROUTINE V-STOP ()\n\t<COND (<EQUAL? ,PRSO <> ,GLOBAL-HERE>\n\t       <TELL \"Hey, no problem.\" CR>)\n\t      (<FSET? ,PRSO ,PERSONBIT>\n\t       <PERFORM ,V?$CALL ,PRSO>\n\t       <RTRUE>)\n\t      (T\n\t       <PERFORM ,V?LAMP-OFF ,PRSO>\n\t       <RTRUE>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "verbs.zil",
   "line": 2677,
   "endLine": 2684,
   "source": "<ROUTINE V-SWIM ()\n\t <SETG CLOCK-WAIT T>\n\t <TELL \"(\" He ,WINNER \" can't swim \">\n\t <COND (<T? ,PRSO>\n\t        <TELL \"in\" him ,PRSO>)\n\t       (T\n\t\t<TELL <GROUND-DESC>>)>\n\t <TELL \".)\" CR>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "verbs.zil",
   "line": 2686,
   "endLine": 2719,
   "source": "<ROUTINE PRE-TAKE (\"AUX\" L)\n\t <COND (<DOBJ? ;NOW-WEARING FLOOR WALL ;KEYHOLE>\n\t\t<HAR-HAR>)\n\t       (<DOBJ? HANDS YOU>\n\t\t<RFALSE>)\n\t       (<==? <SET L <LOC ,PRSO>> ,GLOBAL-OBJECTS>\n\t\t<NOT-HERE ,PRSO>)\n\t       (<EQUAL? ,PRSO <LOC ,WINNER>>\n\t\t<TELL \"You are in it!\" CR>)\n\t       (<AND .L\n\t\t     <FSET? .L ,CONTBIT>\n\t\t     <NOT <FSET? .L ,OPENBIT>>>\n\t\t<TOO-BAD-BUT .L \"closed\">\n\t\t<RTRUE>)\n\t       (<T? ,PRSI>\n\t\t<COND (<EQUAL? ,PRSI ,WALL ;,POCKET .L>\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)\n\t\t      (<AND <NOT <FSET? ,PRSI ,SURFACEBIT>>\n\t\t\t    <NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t\t    <NOT <FSET? ,PRSI ,PERSONBIT>>>\n\t\t       <TOO-BAD-BUT ,PRSI \"closed\">\n\t\t       <RTRUE>)\n\t\t      (<NOT <==? ,PRSI .L>>\n\t\t       <TELL He+verb ,PRSO \"is\" \"n't \">\n\t\t       <COND (<AND <FSET? ,PRSI ,PERSONBIT>\n\t\t\t\t   ;<NOT <PRSI? ,NUTRIMAT ,SCREENING-DOOR>>>\n\t\t\t      <TELL \"being held by\">)\n\t\t\t     (<FSET? ,PRSI ,SURFACEBIT>\n\t\t\t      <TELL \"on\">)\n\t\t\t     (T\n\t\t\t      <TELL \"in\">)>\n\t\t       <TELL the ,PRSI \".\" CR>)>)\n\t       (T <PRE-TAKE-WITH>)>>"
  },
  "PRE-TAKE-WITH": {
   "name": "PRE-TAKE-WITH",
   "file": "verbs.zil",
   "line": 2721,
   "endLine": 2738,
   "source": "<ROUTINE PRE-TAKE-WITH (\"AUX\" X)\n\t <COND (<DOBJ? YOU>\n\t\t<RFALSE>)\n\t       (<EQUAL? <META-LOC ,PRSO> ,GLOBAL-OBJECTS>\n\t\t<COND (<AND <NOT <HELD? ,PRSO>>\n\t\t\t    <NOT <FSET? ,PRSO ,PERSONBIT>>>\n\t\t       <NOT-HERE ,PRSO>)>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<ALREADY ,PLAYER>\n\t\t<TELL \"holding\" the ,PRSO \"!)\" CR>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<YOU-CANT \"reach\">)\n\t       (<AND <IN? ,WINNER ,PRSO>\n\t\t     <NOT <NOUN-USED? ,PRSO ,W?DOOR ;,W?KEYHOLE>>>\n\t\t<SETG CLOCK-WAIT T>\n\t\t<TELL\n!\\( He+verb ,WINNER \"is\" \" in\" him ,PRSO \", nitwit!)\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "verbs.zil",
   "line": 2740,
   "endLine": 2742,
   "source": "<ROUTINE V-TAKE ()\n <COND (<==? <ITAKE> T>\n\t<TELL He+verb ,WINNER \"is\" \" now holding\" the ;him ,PRSO \".\" CR>)>>"
  },
  "V-TAKE-OFF": {
   "name": "V-TAKE-OFF",
   "file": "verbs.zil",
   "line": 2744,
   "endLine": 2757,
   "source": "<ROUTINE V-TAKE-OFF ()\n\t <COND ;(<DOBJ? NOW-WEARING>\n\t\t<SETG PRSO <>>\n\t\t<V-WEAR>\n\t\t<RTRUE>)\n\t       ;(<WEAR-CHECK>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSO ,WORNBIT>\n\t\t<FCLEAR ,PRSO ,WORNBIT>\n\t\t<TELL \"Okay,\" he+verb <LOC ,PRSO> \"is\" \" no longer wearing\">\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<TELL him ,PRSO \".\" CR>)\n\t       (T\n\t\t<TELL He+verb <LOC ,PRSO> \"is\" \"n't wearing\" him ,PRSO \"!\" CR>)>>"
  },
  "V-TAKE-TO": {
   "name": "V-TAKE-TO",
   "file": "verbs.zil",
   "line": 2759,
   "endLine": 2761,
   "source": "<ROUTINE V-TAKE-TO ()\t;\"Parser should have ITAKEn PRSO.\"\n\t<PERFORM ,V?WALK-TO ,PRSI>\n\t<RTRUE>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "verbs.zil",
   "line": 2763,
   "endLine": 2791,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<ROOM-CHECK>\n\t\t<RTRUE>)\n\t       (<DOBJ? ROOMS HERE GLOBAL-HERE ;GLOBAL-WATER>\n\t\t<COND (<AND <==? ,WINNER ,PLAYER>\n\t\t\t    <NOT <IN? ,PLAYER ,HERE>>\n\t\t\t    ;<T? ,PLAYER-SEATED>>\n\t\t       <OWN-FEET>)\n\t\t      (T\n\t\t       <DO-WALK ,P?OUT>\n\t\t       <RTRUE>)>)\n\t       ;(<DOBJ? NOW-WEARING>\n\t\t<V-TAKE-OFF>\n\t\t<RTRUE>)\n\t       (<==? <LOC ,PRSO> ,WINNER>\n\t\t<TELL\n\"You don't need to take\" him ,PRSO \" out to use\" him ,PRSO \".\" CR>)\n\t       ;(<==? <LOC ,PRSO> ,POCKET>\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<TELL He+verb ,WINNER \"is\" \" now holding\" him ,PRSO \".\" CR>)\n\t       (<AND <NOT <==? <LOC ,WINNER> ,PRSO>>\n\t\t     <NOT <IN? ,PLAYER ,PRSO>>\n\t\t     ;<NOT <EQUAL? ,PLAYER-SEATED ,PRSO <- 0 ,PRSO>>>>\n\t\t<TELL \"You're not \">\n\t\t<COND (<FSET? ,PRSO ,SURFACEBIT> <TELL \"on\">) (T <TELL \"in\">)>\n\t\t<TELL him ,PRSO \"!|\">\n\t\t<RFATAL>)\n\t       (T\n\t\t<OWN-FEET>)>>"
  },
  "OWN-FEET": {
   "name": "OWN-FEET",
   "file": "verbs.zil",
   "line": 2793,
   "endLine": 2798,
   "source": "<ROUTINE OWN-FEET ()\n\t <MOVE ,WINNER ,HERE>\n\t ;<COND (<==? ,WINNER ,PLAYER>\n\t\t<SETG PLAYER-SEATED <>>)>\n\t <TELL He+verb ,WINNER \"is\" \" on\" his ,WINNER \" own feet again.\" CR>\n\t <RTRUE>>"
  },
  "V-HOLD-UP": {
   "name": "V-HOLD-UP",
   "file": "verbs.zil",
   "line": 2800,
   "endLine": 2806,
   "source": "<ROUTINE V-HOLD-UP ()\n <COND (<DOBJ? ROOMS>\n\t<PERFORM ,V?STAND>\n\t<RTRUE>)\n       (T\n\t<WONT-HELP>\n\t;<TELL \"That doesn't seem to help at all.\" CR>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "verbs.zil",
   "line": 2808,
   "endLine": 2845,
   "source": "<ROUTINE V-TELL (\"AUX\" P)\n\t <COND (<==? ,PRSO ,PLAYER>\n\t\t<COND (<NOT <==? ,WINNER ,PLAYER>>\n\t\t       <SET P ,WINNER>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <PERFORM ,V?ASK .P>\n\t\t       <RTRUE>)\n\t\t      (<T? ,QCONTEXT>\n\t\t       <SETG QCONTEXT <>>\n\t\t       <COND (<T? ,P-CONT>\n\t\t\t      <SETG WINNER ,PLAYER>)\n\t\t\t     (T <TELL\n\"Okay, you're not talking to anyone else.\" CR>)>)\n\t\t      (T\n\t\t       <WONT-HELP-TO-TALK-TO ,PLAYER>\n\t\t       ;<SETG QUOTE-FLAG <>>\n\t\t       <SETG P-CONT <>>\n\t\t       <RFATAL>)>)\n\t       (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     <NOT <FSET? ,PRSO ,MUNGBIT>>>\n\t\t<UNSNOOZE ,PRSO>\n\t\t<SETG QCONTEXT ,PRSO>\n\t\t<COND (<T? ,P-CONT>\n\t\t       <SETG CLOCK-WAIT T>\n\t\t       <SETG WINNER ,PRSO>\n\t\t       ;<SETG HERE <LOC ,WINNER>>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"Hmmm ...\">\n\t\t       <TELL the ,PRSO>\n\t\t       <TELL\n\" looks at you expectantly, as if you seemed to be about to talk.\" CR>)>)\n\t       (T\n\t\t<WONT-HELP-TO-TALK-TO ,PRSO>\n\t\t;<YOU-CANT \"talk to\">\n\t\t;<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "PRE-STELL-ABOUT": {
   "name": "PRE-STELL-ABOUT",
   "file": "verbs.zil",
   "line": 2847,
   "endLine": 2847,
   "source": "<ROUTINE PRE-STELL-ABOUT () <PERFORM ,V?TELL-ABOUT ,PRSI ,PRSO> <RTRUE>>"
  },
  "V-STELL-ABOUT": {
   "name": "V-STELL-ABOUT",
   "file": "verbs.zil",
   "line": 2848,
   "endLine": 2848,
   "source": "<ROUTINE   V-STELL-ABOUT () <V-FOO>>"
  },
  "PRE-TELL-ABOUT": {
   "name": "PRE-TELL-ABOUT",
   "file": "verbs.zil",
   "line": 2850,
   "endLine": 2867,
   "source": "<ROUTINE PRE-TELL-ABOUT (\"AUX\" P)\n <COND (<DOBJ? PLAYER ;PLAYER-NAME>\n\t<COND (<QCONTEXT-GOOD?>\n\t       <PERFORM ,V?ASK-ABOUT ,QCONTEXT ,PRSI>)\n\t      (<AND <SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,WINNER>>>\n\t       <TELL-I-ASSUME .P \" Ask\">\n\t       <PERFORM ,V?ASK-ABOUT .P ,PRSI>)\n\t      (T <ARENT-TALKING>)>\n\t<RTRUE>)\n       (<AND <NOT <FSET? ,PRSI ,SEENBIT>>\n\t     <NOT <FSET? ,PRSI ,TOUCHBIT>>>\n\t<NOT-FOUND ,PRSI>\n\t<RTRUE>)\n       ;(<OR <EQUAL? ,PRSI ,BRICKS ,COFFIN ,CRYPT>\n\t    <EQUAL? ,PRSI ,DUNGEON ,IRON-MAIDEN ,TOMB>\n\t    <EQUAL? ,PRSI ,WELL>>\n\t<TELL ,ANCIENT-SECRETS CR>)\n       (T <PRE-ASK>)>>"
  },
  "V-TELL-ABOUT": {
   "name": "V-TELL-ABOUT",
   "file": "verbs.zil",
   "line": 2869,
   "endLine": 2872,
   "source": "<ROUTINE V-TELL-ABOUT (\"AUX\" P)\n\t<TELL \"It doesn't look as if\" the ,PRSO \" is interested.\"\n;\"\\\"I'm afraid you'll have to show me instead of telling me.\\\"\" CR>\n\t<RTRUE>>"
  },
  "PRE-TALK-ABOUT": {
   "name": "PRE-TALK-ABOUT",
   "file": "verbs.zil",
   "line": 2874,
   "endLine": 2886,
   "source": "<ROUTINE PRE-TALK-ABOUT (\"AUX\" P)\n <COND (<NOT <==? ,WINNER ,PLAYER>>\n\t<SET P ,WINNER>\n\t<SETG WINNER ,PLAYER>\n\t<PERFORM ,V?ASK-ABOUT .P ,PRSO>\n\t<RTRUE>)\n       (<QCONTEXT-GOOD?>\n\t<PERFORM ,V?ASK-ABOUT ,QCONTEXT ,PRSO>\n\t<RTRUE>)\n       (<SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,WINNER>>\n\t<TELL-I-ASSUME .P \" to\">\n\t<PERFORM ,V?ASK-ABOUT .P ,PRSO>\n\t<RTRUE>)>>"
  },
  "V-TALK-ABOUT": {
   "name": "V-TALK-ABOUT",
   "file": "verbs.zil",
   "line": 2888,
   "endLine": 2888,
   "source": "<ROUTINE V-TALK-ABOUT () <ARENT-TALKING>>"
  },
  "V-THANK": {
   "name": "V-THANK",
   "file": "verbs.zil",
   "line": 2892,
   "endLine": 2905,
   "source": "<ROUTINE V-THANK (\"AUX\" P)\n  <COND (<T? ,PRSO>\n\t <COND (<AND <FSET? ,PRSO ,PERSONBIT>\n\t\t     <NOT <FSET? ,PRSO ,MUNGBIT>>>\n\t\t<TELL\n\"You do so, but\" the ,PRSO \" seems less than overjoyed.\" CR>\n\t\t<RTRUE>)\n\t       (T <HAR-HAR>)>)\n\t(T\n\t <COND (<OR <SET P <QCONTEXT-GOOD?>>\n\t\t    <SET P <FIND-FLAG-HERE-NOT ,PERSONBIT ,MUNGBIT ,WINNER>>>\n\t\t<PERFORM ,V?THANK .P>\n\t\t<RTRUE>)\n\t       (T <TELL \"You're more than welcome.\" CR>)>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "verbs.zil",
   "line": 2907,
   "endLine": 2907,
   "source": "<ROUTINE V-THROW () <COND (<IDROP> <TELL \"Thrown.\" CR>)>>"
  },
  "V-THROW-AT": {
   "name": "V-THROW-AT",
   "file": "verbs.zil",
   "line": 2909,
   "endLine": 2916,
   "source": "<ROUTINE V-THROW-AT ()\n\t <COND (<NOT <IDROP>>\n\t\t<RTRUE>)>\n\t <COND ;(<AND <FSET? ,PRSI ,PERSONBIT>\n\t\t     <NOT <FSET? ,PRSI ,MUNGBIT>>>\n\t\t<TELL He+verb ,PRSI \"duck\">)\n\t       (T <TELL He+verb ,PRSI \"do\" \"n't duck\">)>\n\t <TELL \" as\" he ,PRSO \" flies by.\" CR>>"
  },
  "V-THROW-IN-TOWEL": {
   "name": "V-THROW-IN-TOWEL",
   "file": "verbs.zil",
   "line": 2918,
   "endLine": 2922,
   "source": "<ROUTINE V-THROW-IN-TOWEL ()\n\t <COND (<DOBJ? TOWEL>\n\t\t<V-QUIT>)\n\t       (T\n\t\t<DONT-UNDERSTAND>)>>"
  },
  "PRE-THROW-THROUGH": {
   "name": "PRE-THROW-THROUGH",
   "file": "verbs.zil",
   "line": 2924,
   "endLine": 2926,
   "source": "<ROUTINE PRE-THROW-THROUGH ()\n\t<FCLEAR ,PRSO ,WORNBIT>\n\t<RFALSE>>"
  },
  "V-THROW-THROUGH": {
   "name": "V-THROW-THROUGH",
   "file": "verbs.zil",
   "line": 2928,
   "endLine": 2931,
   "source": "<ROUTINE V-THROW-THROUGH ()\n\t <COND (<NOT <FSET? ,PRSO ,PERSONBIT>>\n\t\t<TELL \"Let's not resort to vandalism, please.\" CR>)\n\t       (T <V-THROW>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "verbs.zil",
   "line": 2933,
   "endLine": 2937,
   "source": "<ROUTINE V-TURN ()\n <COND (<AND <FSET? ,PRSO ,DOORBIT> <FSET? ,PRSO ,OPENBIT>>\n\t<PERFORM ,V?CLOSE ,PRSO>\n\t<RTRUE>)\n       (T <TELL \"What do you want that to do?\" CR>)>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "verbs.zil",
   "line": 2939,
   "endLine": 2955,
   "source": "<ROUTINE V-UNLOCK ()\n\t <COND (<OR <FSET? ,PRSO ,DOORBIT>\n\t\t    <AND <FSET? ,PRSO ,CONTBIT>\n\t\t\t <NOT <ZERO? <GETP ,PRSO ,P?CAPACITY>>>>>\n\t\t<COND (<NOT <FSET? ,PRSO ,LOCKED>>\n\t\t       <ALREADY ,PRSO \"unlocked\">)\n\t\t      (<ZERO? <UNLOCK-DOOR? ,PRSO>>\n\t\t       <YOU-CANT>)\n\t\t      (T\n\t\t       ;<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t\t      <FCLEAR ,PRSO ,OPENBIT>\n\t\t\t      <FIRST-YOU \"close\" ,PRSO>)>\n\t\t       <FCLEAR ,PRSO ,LOCKED>\n\t\t       <OKAY ,PRSO \"unlocked\">)>)\n\t       (T\n\t\t<SETG CLOCK-WAIT T>\n\t\t<TELL !\\( He+verb ,PRSO \"is\" \"n't locked!)\" CR>)>>"
  },
  "V-USE": {
   "name": "V-USE",
   "file": "verbs.zil",
   "line": 2957,
   "endLine": 2957,
   "source": "<ROUTINE V-USE () <MORE-SPECIFIC>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "verbs.zil",
   "line": 2973,
   "endLine": 3033,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM -1) (WHO <>) (INT <>)\n\t\t \"AUX\" (WHO-WAIT 0) VAL HR (RESULT T))\n\t <COND (<==? -1 .NUM>\n\t\t<SET NUM 10>)>\n\t <COND (<AND <ZERO? .INT>\n\t\t     <AND <NOT <FSET? ,PRSO ,PERSONBIT>>\n\t\t\t  <NOT <DOBJ? INTNUM TURN>>>>\n\t\t<TELL ,I-ASSUME \" Wait \" N .NUM \" minute\">\n\t\t<COND (<NOT <1? .NUM>>\n\t\t       <TELL !\\s>)>\n\t\t<TELL \".]\" CR>)>\n\t <SET HR ,HERE>\n\t <COND (<NOT .INT> <TELL \"Time passes...\" CR>)>\n\t <DEC NUM>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0>\n\t\t\t<SETG KEEP-WAITING <>>\n\t\t\t<RETURN>)\n\t\t       (<SET VAL <CLOCKER>>\n\t\t\t<COND (<OR <==? .VAL ,M-FATAL>\n\t\t\t\t   <NOT <==? .HR ,HERE>>>\n\t\t\t       <SETG CLOCK-WAIT T>\n\t\t\t       <SET RESULT ,M-FATAL>\n\t\t\t       <RETURN>)\n\t\t\t      ;(<0? .NUM> <RETURN>)\n\t\t\t      (<AND .WHO <IN? .WHO ,HERE>>\n\t\t\t       <SETG CLOCK-WAIT T>\n\t\t\t       <NOT-IT .WHO>\n\t\t\t       <TELL The .WHO \", for wh\">\n\t\t\t       <COND (<FSET? .WHO ,PERSONBIT>\n\t\t\t\t      <TELL \"om\">)\n\t\t\t\t     (T <TELL \"ich\">)>\n\t\t\t       <TELL \" you're waiting, has arrived.\" CR>\n\t\t\t       <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET WHO-WAIT <+ .WHO-WAIT 1>>\n\t\t\t       <COND (<T? ,KEEP-WAITING>\n\t\t\t\t      <VERSION? (ZIP <USL>)\n\t\t\t\t\t\t(T <UPDATE-STATUS-LINE>)>\n\t\t\t\t      <AGAIN>)>\n\t\t\t       <TELL \"Do you want to keep \">\n\t\t\t       <SET VAL <VERB-PRINT T>>\n\t\t\t       <COND (<YES?>\n\t\t\t\t      <VERSION? (ZIP <USL>)\n\t\t\t\t\t\t(T <UPDATE-STATUS-LINE>)>)\n\t\t\t\t     (T\n\t\t\t\t      <SETG CLOCK-WAIT T>\n\t\t\t\t      <SET RESULT ,M-FATAL>\n\t\t\t\t      <RETURN>)>)>)\n\t\t       (<AND .WHO <G? <SET WHO-WAIT <+ .WHO-WAIT 1>> 30>>\n\t\t\t<SET VAL <START-SENTENCE .WHO>>\n\t\t\t<TELL\n\" still hasn't arrived. Do you want to keep waiting?\">\n\t\t\t<COND (<NOT <YES?>> <RETURN>)>\n\t\t\t<SET WHO-WAIT 0>\n\t\t\t<VERSION? (ZIP <USL>)\n\t\t\t\t  (T <UPDATE-STATUS-LINE>)>)\n\t\t       (T\n\t\t\t<VERSION? (ZIP <USL>)\n\t\t\t\t  (T <UPDATE-STATUS-LINE>)>)>>\n\t .RESULT>"
  },
  "V-WAIT-FOR": {
   "name": "V-WAIT-FOR",
   "file": "verbs.zil",
   "line": 3035,
   "endLine": 3050,
   "source": "<ROUTINE V-WAIT-FOR (\"AUX\" WHO)\n\t <COND (<AND <NOT <==? -1 ,P-NUMBER>>\n\t\t     <DOBJ? ROOMS TURN INTNUM>>\n\t\t<COND ;(<T? ,P-TIME>\n\t\t       <V-WAIT-UNTIL>)\n\t\t      (T <V-WAIT ,P-NUMBER>)>)\n\t       (<DOBJ? ROOMS TURN GLOBAL-HERE>\n\t\t<V-WAIT>)\n\t       (<DOBJ? PLAYER>\n\t\t<ALREADY ,PLAYER \"here\">)\n\t       (<OR <FSET? ,PRSO ,PERSONBIT>\n\t\t    ;<DOBJ? GHOST-NEW>>\n\t\t<COND (<==? <META-LOC ,PRSO> ,HERE>\n\t\t       <ALREADY ,PRSO \"here\">)\n\t\t      (T <V-WAIT 10000 ,PRSO>)>)\n\t       (T <TELL \"Not a good idea. You might wait forever.\" CR>)>>"
  },
  "V-WAIT-UNTIL": {
   "name": "V-WAIT-UNTIL",
   "file": "verbs.zil",
   "line": 3052,
   "endLine": 3061,
   "source": "<ROUTINE V-WAIT-UNTIL (\"AUX\" N)\n\t <COND (<AND <NOT <==? -1 ,P-NUMBER>>\n\t\t     <DOBJ? ROOMS TURN INTNUM>>\n\t\t<SET N ,P-NUMBER>\n\t\t<COND ;(<G? .N ,PRESENT-TIME>\n\t\t       <V-WAIT <- .N ,PRESENT-TIME>>)\n\t\t      (T\n\t\t       <SETG CLOCK-WAIT T>\n\t\t       <TELL \"(It's already past that time!)\" CR>)>)\n\t       (T <YOU-CANT \"wait until\">)>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "verbs.zil",
   "line": 3063,
   "endLine": 3068,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<==? ,PRSO ,ROOMS>\n\t\t<PERFORM ,V?ALARM ,WINNER>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TOO-BAD-BUT ,PRSO \"not asleep\">)>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "verbs.zil",
   "line": 3070,
   "endLine": 3072,
   "source": "<ROUTINE DO-WALK (DIR \"AUX\" P)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "verbs.zil",
   "line": 3074,
   "endLine": 3125,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR RM)\n\t <COND (<ZERO? ,P-WALK-DIR>\n\t\t<COND (<AND <==? ,PRSO ,P?IN>\n\t\t\t    <OR <IN? ,P-IT-OBJECT ,ROOMS>\n\t\t\t\t<FSET? ,P-IT-OBJECT ,VEHBIT>\n\t\t\t\t<FSET? ,P-IT-OBJECT ,CONTBIT>>>\n\t\t       <TELL-I-ASSUME ,P-IT-OBJECT ;\" Go in\">\n\t\t       <PERFORM ,V?THROUGH ,P-IT-OBJECT>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <V-WALK-AROUND>\n\t\t       <RFATAL>)>)>\n\t <COND (<SET PT <GETPT <LOC ,WINNER> ,PRSO>>\n\t\t<COND (<==? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <COND (<GOTO <GET/B .PT ,REXIT>> <OKAY>)>\n\t\t       <RTRUE>)\n\t\t      (<==? .PTS ,NEXIT>\n\t\t       <SETG CLOCK-WAIT T>\n\t\t       <TELL !\\( <GET .PT ,NEXITSTR> !\\) CR>\n\t\t       <RFATAL>)\n\t\t      (<==? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <COND (<GOTO .RM> <OKAY>)>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <COND (<GOTO <GET/B .PT ,REXIT>> <OKAY>)>\n\t\t\t      <RTRUE>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <YOU-CANT \"go\">\n\t\t\t      <RFATAL>)>)\n\t\t      (<==? .PTS ,DEXIT>\n\t\t       <COND (<WALK-THRU-DOOR? .PT>\n\t\t\t      <COND (<GOTO <GET/B .PT ,REXIT>> <OKAY>)>\n\t\t\t      <RTRUE>)\n\t\t\t     (T <RFATAL>)>)>)\n\t       (<EQUAL? ,PRSO ,P?IN ,P?OUT>\n\t\t<V-WALK-AROUND>)\n\t       (<EQUAL? ,PRSO ,P?UP>\n\t\t<PERFORM ,V?CLIMB-UP ,STAIRS>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,P?DOWN>\n\t\t<PERFORM ,V?CLIMB-DOWN ,STAIRS>\n\t\t<RTRUE>)\n\t       (T\n\t\t<YOU-CANT \"go\">\n\t\t<RFATAL>)>>"
  },
  "UNLOCK-DOOR?": {
   "name": "UNLOCK-DOOR?",
   "file": "verbs.zil",
   "line": 3127,
   "endLine": 3134,
   "source": "<ROUTINE UNLOCK-DOOR? (DR)\n <COND (<EQUAL? ,HERE .DR>\n\t<RTRUE>)\n       ;(<EQUAL? ,HERE <GETP ,HERE ,P?STATION>>\n\t<RFALSE>)\n       ;(<EQUAL? .DR ,SECRET-SITTING-DOOR ,FRONT-GATE>\n\t<RFALSE>)\n       (T <RTRUE>)>>"
  },
  "WALK-THRU-DOOR?": {
   "name": "WALK-THRU-DOOR?",
   "file": "verbs.zil",
   "line": 3136,
   "endLine": 3187,
   "source": "<ROUTINE WALK-THRU-DOOR? (PT \"OPTIONAL\" (OBJ 0) (TELL? T)\n\t\t\t     \"AUX\" RM)\n\t<COND (<ZERO? .OBJ>\n\t       <SET OBJ <GET/B .PT ,DEXITOBJ>>)>\n\t;<SET RM <GET/B .PT ,REXIT>>\n\t<COND (<FSET? .OBJ ,OPENBIT>\n\t       <RTRUE>)\n\t      (<AND <FSET? .OBJ ,SECRETBIT>\n\t\t    <NOT <FSET? .OBJ ,TOUCHBIT ;,SEENBIT>>>\n\t       <COND (<EQUAL? <> .TELL? ,VERBOSITY>\n\t\t      <RFALSE>)\n\t\t     (<NOT <FSET? ,HERE ,SECRETBIT>>\n\t\t      <YOU-CANT \"go\">\n\t\t      <RFALSE>)\n\t\t     (<ZERO? ,LIT>\n\t\t      <NOT-FOUND .OBJ>\n\t\t      <RFALSE>)\n\t\t     (T\n\t\t      <COND (<NOT <VERB? WALK-TO>>\n\t\t\t     <OPEN-DOOR-AND-CLOSE-IT-AGAIN .OBJ>)>\n\t\t      <RTRUE>)>)\n\t      (<NOT <FSET? .OBJ ,LOCKED>>\n\t       <COND (<NOT <VERB? WALK-TO>>\n\t\t      <FCLEAR .OBJ ,SECRETBIT>\n\t\t      <FSET .OBJ ,SEENBIT ;,TOUCHBIT>\n\t\t\t\t;\"Don't put TOUCHBIT on ROOM\"\n\t\t      <COND (<NOT <EQUAL? <> .TELL? ,VERBOSITY>>\n\t\t\t     <OPEN-DOOR-AND-CLOSE-IT-AGAIN .OBJ>)>)>\n\t       <RTRUE>)\n\t      (<AND <T? .PT>\n\t\t    <SET RM <GET .PT ,DEXITSTR>>>\n\t       <COND (<T? .TELL?>\n\t\t      <TELL .RM CR>)>\n\t       <RFALSE>)\n\t      (T\n\t       <COND (<ZERO? .TELL?>\n\t\t      <RFALSE>)\n\t\t     (<T? <UNLOCK-DOOR? .OBJ>>\n\t\t      <COND (<AND <NOT <VERB? WALK-TO>>\n\t\t\t\t  <T? ,VERBOSITY>>\n\t\t\t     <OPEN-DOOR-AND-CLOSE-IT-AGAIN .OBJ>)>\n\t\t      <RTRUE>)\n\t\t     ;(<IN? .OBJ ,ROOMS>\n\t\t      ;<COND (<VERB? WALK-TO>\n\t\t\t     <TELL \", but t\">)\n\t\t\t    (T )>\n\t\t      <TELL \"The door is locked.\" CR>\n\t\t      ;<COND (<NOT <VERB? WALK-TO>>\n\t\t\t     )>)\n\t\t     (T <TOO-BAD-BUT .OBJ \"locked\">)>\n\t       <THIS-IS-IT .OBJ>\n\t       <RFALSE>)>>"
  },
  "OPEN-DOOR-AND-CLOSE-IT-AGAIN": {
   "name": "OPEN-DOOR-AND-CLOSE-IT-AGAIN",
   "file": "verbs.zil",
   "line": 3189,
   "endLine": 3203,
   "source": "<ROUTINE OPEN-DOOR-AND-CLOSE-IT-AGAIN (OBJ)\n\t<FSET .OBJ ,SEENBIT ;,TOUCHBIT>\t;\"Don't put TOUCHBIT on ROOM\"\n\t<COND (<NOT <==? ,WINNER ,PLAYER>>\n\t       <RTRUE>)>\n\t<TELL \"(You \">\n\t<COND (<FSET? .OBJ ,LOCKED>\n\t       <FCLEAR .OBJ ,LOCKED>\n\t       <TELL \"unlock and \">)>\n\t<TELL \"open the \">\n\t<COND ;(<EQUAL? .OBJ ,FRONT-GATE> <TELL \"gate\">)\n\t      (T <TELL \"door\">)>\n\t<COND (<FSET? .OBJ ,SECRETBIT>\n\t       <FSET .OBJ ,OPENBIT>)\n\t      (T <TELL \" and close it again\">)>\n\t<TELL \".)\" CR>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "verbs.zil",
   "line": 3205,
   "endLine": 3208,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <SETG CLOCK-WAIT T>\n\t <TELL !\\[ ,WHICH-DIR \"]|\">\n\t <RFATAL>>"
  },
  "WHO-KNOWS?": {
   "name": "WHO-KNOWS?",
   "file": "verbs.zil",
   "line": 3212,
   "endLine": 3214,
   "source": "<ROUTINE WHO-KNOWS? (OBJ)\n\t<SETG CLOCK-WAIT T>\n\t<TELL \"(You have no idea where\" the ,PRSO \" is.)\" CR>>"
  },
  "WALK-WITHIN-ROOM": {
   "name": "WALK-WITHIN-ROOM",
   "file": "verbs.zil",
   "line": 3216,
   "endLine": 3216,
   "source": "<ROUTINE WALK-WITHIN-ROOM () <NO-NEED \"move around within\" ,HERE ;\" a place\">>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "verbs.zil",
   "line": 3218,
   "endLine": 3223,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>>\n\t\t<TELL He ,PRSO \"'s here!\" CR>)\n\t       (T\n\t\t<V-WALK-AROUND>)>>"
  },
  "ENTER-ROOM": {
   "name": "ENTER-ROOM",
   "file": "verbs.zil",
   "line": 3225,
   "endLine": 3232,
   "source": "<ROUTINE ENTER-ROOM (\"AUX\" VAL)\n\t<SETG LIT <LIT? ;,HERE>>\n\t;<COND (<FSET? ,HERE ,SECRETBIT>\n\t       <SETG WASHED <>>)>\n\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t<SET VAL <V-FIRST-LOOK>>\n\t<APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>\n\t.VAL>"
  },
  "V-RUN-OVER": {
   "name": "V-RUN-OVER",
   "file": "verbs.zil",
   "line": 3236,
   "endLine": 3236,
   "source": "<ROUTINE V-RUN-OVER () <TELL \"That doesn't make much sense.\" CR>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "verbs.zil",
   "line": 3307,
   "endLine": 3307,
   "source": "<ROUTINE V-YELL () <TELL \"You begin to get a sore throat.\" CR>>"
  },
  "V-YES": {
   "name": "V-YES",
   "file": "verbs.zil",
   "line": 3309,
   "endLine": 3322,
   "source": "<ROUTINE V-YES (\"OPTIONAL\" (NO? <>) \"AUX\" PER)\n <COND (<OR <NOT <==? <SET PER ,WINNER> ,PLAYER>>\n\t    ;<AND <T? ,AWAITING-REPLY>\n\t\t <SET PER <GETB ,QUESTIONERS ,AWAITING-REPLY>>>\n\t    <SET PER <QCONTEXT-GOOD?>>>\n\t<COND (<NOT <D-APPLY \"Actor\" <GETP .PER ,P?ACTION> ,M-WINNER>>\n\t       ;<TELL \"\\\"I see...\\\"\" CR>\n\t       <SETG CLOCK-WAIT T>\n\t       <TELL \"(That was just a rhetorical question.)\" CR>)>\n\t<RTRUE>)\n       (T\n\t<TELL \"You sound rather \">\n\t<COND (.NO? <TELL \"neg\">) (T <TELL \"pos\">)>\n\t<TELL \"ative.\" CR>)>>"
  },
  "V-NO": {
   "name": "V-NO",
   "file": "verbs.zil",
   "line": 3324,
   "endLine": 3324,
   "source": "<ROUTINE V-NO () <V-YES T>>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "verbs.zil",
   "line": 3326,
   "endLine": 3332,
   "source": "<ROUTINE JIGS-UP (\"OPT\" DESC)\n\t <COND (<ASSIGNED? DESC>\n\t\t<TELL .DESC>)>\n\t <TELL \"|\n|\n    ****  You have died  ****||\">\n\t <FINISH>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "verbs.zil",
   "line": 3334,
   "endLine": 3375,
   "source": "<ROUTINE FINISH (\"OPTIONAL\" (REPEATING <>) VAL)\n\t %<DEBUG-CODE <COND (<T? ,P-DBUG> <RTRUE>)>>\n\t <CRLF>\n\t <CRLF>\n\t <COND (<NOT .REPEATING>\n\t\t<V-SCORE>\n\t\t<CRLF>)>\n\t <TELL \"Would you like to:|\">\n\t <COND (<T? ,P-CAN-UNDO>\n\t\t<TELL\n\"   UNDO your last action,|\">)>\n\t <TELL\n\"   RESTORE your place from where you saved it,|\n   RESTART the story from the beginning, or|\n   QUIT for now?\" CR>\n\t<REPEAT ()\n\t <TELL !\\>>\n\t ;<VERSION? (XZIP )>\n\t <PUTB ,P-INBUF 1 0>\n\t <READ ,P-INBUF ,P-LEXV>\n\t <SET VAL <GET ,P-LEXV ,P-LEXSTART>>\n\t <COND (<AND <NOT <0? .VAL>>\n\t\t     <SET VAL <WORD-VERB-STUFF .VAL>>\n\t\t     <L=? 0 <SET VAL <VERB-ZERO .VAL>>>>\n\t\t;<SET VAL <WT? .VAL ,PS?VERB ,P1?VERB>>\n\t\t<COND (<AND <T? ,P-CAN-UNDO>\n\t\t\t    <EQUAL? .VAL ,ACT?UNDO>>\n\t\t       <V-UNDO>\n\t\t       <FINISH T>)\n\t\t      (<EQUAL? .VAL ,ACT?RESTART>\n\t\t       <RESTART>\n\t\t       ;<TELL-FAILED>\n\t\t       <FINISH T>)\n\t\t      (<EQUAL? .VAL ,ACT?RESTORE>\n\t\t       <COND (<V-RESTORE> <RETURN>)>\n\t\t       <FINISH T>)\n\t\t      (<EQUAL? .VAL ,ACT?QUIT>\n\t\t       <QUIT>)>)>\n\t <TELL \"[Type \">\n\t <COND (<T? ,P-CAN-UNDO>\n\t\t<TELL \"UNDO, \">)>\n\t <TELL \"RESTORE, RESTART, or QUIT.] \">>>"
  },
  "V-UNDO": {
   "name": "V-UNDO",
   "file": "verbs.zil",
   "line": 3377,
   "endLine": 3384,
   "source": "<ROUTINE V-UNDO ()\n <COND (<T? ,P-CAN-UNDO>\n\t<SETG OLD-HERE <>>\n\t<COND (<ZERO? <IRESTORE>>\n\t       <TELL \"[UNDO failed.]\" CR>)\n\t      (T\n\t       <TELL \"[UNDO is not available.]\" CR>)>\n\t<RTRUE>)>>"
  },
  "REMOTE-VERB?": {
   "name": "REMOTE-VERB?",
   "file": "verbs.zil",
   "line": 3391,
   "endLine": 3397,
   "source": "<ROUTINE REMOTE-VERB? ()\n <COND (<VERB? ;ARREST ASK-ABOUT ASK-CONTEXT-ABOUT ASK-CONTEXT-FOR ASK-FOR ;BUY\n\t       DISEMBARK ;DRESS FIND FOLLOW LEAVE LOOK-UP\n\t       ;MAKE SEARCH SEARCH-FOR SHOW SSHOW\n\t       TAKE-TO TALK-ABOUT TELL-ABOUT WAIT-FOR WAIT-UNTIL WALK-TO>\n\t<RTRUE>)>\n <RFALSE>>"
  }
 },
 "globals": {
  "FOUND-IT:OBJECT": {
   "name": "FOUND-IT:OBJECT",
   "kind": "global",
   "file": "global.zil",
   "line": 118,
   "value": "<>"
  },
  "FOUND-LOC:OBJECT": {
   "name": "FOUND-LOC:OBJECT",
   "kind": "global",
   "file": "global.zil",
   "line": 119,
   "value": "<>"
  },
  "NOTHING-NEW": {
   "name": "NOTHING-NEW",
   "kind": "constant",
   "file": "global.zil",
   "line": 121,
   "value": "\"You don't find anything new there.|\""
  },
  "SCREENWIDTH:NUMBER": {
   "name": "SCREENWIDTH:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 4,
   "value": "0"
  },
  "QCONTEXT:OBJECT": {
   "name": "QCONTEXT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 72,
   "value": "FORD"
  },
  "LIT:OBJECT": {
   "name": "LIT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 73,
   "value": "RAMP"
  },
  "P-IT-OBJECT:OBJECT": {
   "name": "P-IT-OBJECT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 75,
   "value": "GOWN"
  },
  "P-HER-OBJECT:OBJECT": {
   "name": "P-HER-OBJECT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 76,
   "value": "TRILLIAN"
  },
  "P-HIM-OBJECT:OBJECT": {
   "name": "P-HIM-OBJECT:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 77,
   "value": "FORD"
  },
  "P-PROMPT-START": {
   "name": "P-PROMPT-START",
   "kind": "constant",
   "file": "misc.zil",
   "line": 207,
   "value": "4"
  },
  "P-PROMPT:NUMBER": {
   "name": "P-PROMPT:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 208,
   "value": "4"
  },
  "SCORE:NUMBER": {
   "name": "SCORE:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 301,
   "value": "0"
  },
  "MOVES:NUMBER": {
   "name": "MOVES:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 302,
   "value": "0"
  },
  "HERE:OBJECT": {
   "name": "HERE:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 303,
   "value": "RAMP"
  },
  "OHERE:OBJECT": {
   "name": "OHERE:OBJECT",
   "kind": "global",
   "file": "misc.zil",
   "line": 304,
   "value": "<>"
  },
  "CLOCKER-RUNNING:NUMBER": {
   "name": "CLOCKER-RUNNING:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 306,
   "value": "0"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 308,
   "value": "138"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "misc.zil",
   "line": 310,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 I-REPLY 1 1 I-PROMPT ;\"last to run\">"
  },
  "C-INTS:NUMBER": {
   "name": "C-INTS:NUMBER",
   "kind": "global",
   "file": "misc.zil",
   "line": 316,
   "value": "<- 138 <* 1 6>>"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 317,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "misc.zil",
   "line": 318,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "misc.zil",
   "line": 319,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "misc.zil",
   "line": 320,
   "value": "2"
  },
  "CLOCK-WAIT:FLAG": {
   "name": "CLOCK-WAIT:FLAG",
   "kind": "global",
   "file": "misc.zil",
   "line": 351,
   "value": "<>"
  },
  "PLAYER-C": {
   "name": "PLAYER-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 5,
   "value": "0"
  },
  "MARVIN-C": {
   "name": "MARVIN-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 6,
   "value": "1"
  },
  "FORD-C": {
   "name": "FORD-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 7,
   "value": "2"
  },
  "ZAPHOD-C": {
   "name": "ZAPHOD-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 8,
   "value": "3"
  },
  "TRILLIAN-C": {
   "name": "TRILLIAN-C",
   "kind": "constant",
   "file": "people.zil",
   "line": 9,
   "value": "4"
  },
  "CHARACTER-MAX": {
   "name": "CHARACTER-MAX",
   "kind": "constant",
   "file": "people.zil",
   "line": 10,
   "value": "4"
  },
  "BODY-PARTS-OWNERS": {
   "name": "BODY-PARTS-OWNERS",
   "kind": "constant",
   "file": "people.zil",
   "line": 12,
   "value": "<TABLE (LENGTH PURE) PLAYER MARVIN FORD ZAPHOD TRILLIAN>"
  },
  "ME": {
   "name": "ME",
   "kind": "constant",
   "file": "people.zil",
   "line": 24,
   "value": "PLAYER"
  },
  "YOU-ARE": {
   "name": "YOU-ARE",
   "kind": "constant",
   "file": "people.zil",
   "line": 150,
   "value": "\"You already are!\""
  },
  "M-OTHER": {
   "name": "M-OTHER",
   "kind": "constant",
   "file": "people.zil",
   "line": 173,
   "value": "42"
  },
  "PRESIDENT": {
   "name": "PRESIDENT",
   "kind": "constant",
   "file": "people.zil",
   "line": 263,
   "value": "\" President of the Galaxy\""
  },
  "CHARACTER-TABLE": {
   "name": "CHARACTER-TABLE",
   "kind": "constant",
   "file": "people.zil",
   "line": 332,
   "value": "<PTABLE PLAYER MARVIN FORD ZAPHOD TRILLIAN ;4>"
  },
  "FOLLOW-LOC": {
   "name": "FOLLOW-LOC",
   "kind": "constant",
   "file": "people.zil",
   "line": 335,
   "value": "<TABLE 0 0 0 0 0>"
  },
  "TOUCHED-LDESCS": {
   "name": "TOUCHED-LDESCS",
   "kind": "constant",
   "file": "people.zil",
   "line": 337,
   "value": "<TABLE 0 0 0 0 0>"
  },
  "LDESC-STRINGS": {
   "name": "LDESC-STRINGS",
   "kind": "constant",
   "file": "people.zil",
   "line": 381,
   "value": "<PLTABLE \"dancing\" \"sipping sherry\" ;3 \"watching you\" ;\"talking quietly\" \"looking at you with suspicion\" 0 ;\"gazing out the window\" ;6 \"walking along\" \"sobbing quietly\" \"poised to attack\" ;9 \"waiting patiently\" \"eating with relish\" \"preparing dinner\" ;12 \"listening to you\" \"lounging and chatting\" \"asleep\" ;15 0 ;\"reading a note\" \"listening\" \"preparing to leave\" ;18 \"deep in thought\" \"out cold\" \"ignoring you\" ;21 \"searching\" \"playing the piano\" \"following you\" ;24 \"brushing her hair\" \"looking sleepy\">"
  },
  "DRUNK-LEVEL": {
   "name": "DRUNK-LEVEL",
   "kind": "global",
   "file": "places.zil",
   "line": 302,
   "value": "0"
  },
  "SANDWICH-BOUGHT:FLAG": {
   "name": "SANDWICH-BOUGHT:FLAG",
   "kind": "global",
   "file": "places.zil",
   "line": 362,
   "value": "<>"
  },
  "HANDS-OFF": {
   "name": "HANDS-OFF",
   "kind": "constant",
   "file": "places.zil",
   "line": 391,
   "value": "\"The barman snaps \"Hands off until you pay for it!\"\""
  },
  "GET-RID": {
   "name": "GET-RID",
   "kind": "constant",
   "file": "things.zil",
   "line": 149,
   "value": "\" you've been trying to get rid of it for years.\""
  },
  "GUIDE-NAME": {
   "name": "GUIDE-NAME",
   "kind": "constant",
   "file": "things.zil",
   "line": 278,
   "value": "\"The Hitchhiker's Guide to the Galaxy\""
  },
  "ALREADY-KNOW-THAT": {
   "name": "ALREADY-KNOW-THAT",
   "kind": "constant",
   "file": "things.zil",
   "line": 280,
   "value": "\" But then again you must already know that, since you bought one.\""
  },
  "WITH-TOWEL": {
   "name": "WITH-TOWEL",
   "kind": "constant",
   "file": "things.zil",
   "line": 283,
   "value": "\"With a towel wrapped around your head!?!\""
  },
  "AGENCY": {
   "name": "AGENCY",
   "kind": "constant",
   "file": "things.zil",
   "line": 285,
   "value": "\"Galactic Security Agency\""
  },
  "GPP": {
   "name": "GPP",
   "kind": "constant",
   "file": "things.zil",
   "line": 287,
   "value": "\"Genuine People Personalities\""
  },
  "ITEM-ON-SATCHEL:OBJECT": {
   "name": "ITEM-ON-SATCHEL:OBJECT",
   "kind": "global",
   "file": "things.zil",
   "line": 372,
   "value": "0"
  },
  "VERBOSITY:NUMBER": {
   "name": "VERBOSITY:NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 91,
   "value": "1"
  },
  "SCORE-MAX": {
   "name": "SCORE-MAX",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 180,
   "value": "400"
  },
  "YAWNS": {
   "name": "YAWNS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 247,
   "value": "<LTABLE 0 \"unusual\" \"interesting\" \"extraordinary\" \"special\">"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 553,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 554,
   "value": "<VERSION? (ZIP 1) (T 2)>"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 556,
   "value": "<VERSION? (ZIP 2) (T 3)>"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 558,
   "value": "<VERSION? (ZIP 3) (T 4)>"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 560,
   "value": "<VERSION? (ZIP 4) (T 5)>"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 562,
   "value": "<VERSION? (ZIP 5) (T 6)>"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 565,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 566,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 567,
   "value": "<VERSION? (ZIP 1) (T 4)>"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 568,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 569,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 570,
   "value": "<VERSION? (ZIP 1) (T 2)>"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "verbs.zil",
   "line": 576,
   "value": "<LTABLE 0 \"What a concept.\" \"Nice try.\" \"You can't be serious.\" \"Not bloody likely.\">"
  },
  "IMPOSSIBLES": {
   "name": "IMPOSSIBLES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 587,
   "value": "<LTABLE 0 \"You have lost your mind.\" \"You are clearly insane.\" \"You appear to have gone barking mad.\" \"I'm not convinced you're allowed to be playing with this computer.\" \"Run out on the street and say that. See what happens.\" \"No, no, a thousand times no. Go boil an egg.\">"
  },
  "WASTES": {
   "name": "WASTES",
   "kind": "global",
   "file": "verbs.zil",
   "line": 604,
   "value": "<LTABLE 0 \"Complete waste of time.\" \"Useless. Utterly useless.\" \"A totally unhelpful idea.\">"
  },
  "FOLLOWER:OBJECT": {
   "name": "FOLLOWER:OBJECT",
   "kind": "global",
   "file": "verbs.zil",
   "line": 689,
   "value": "0"
  },
  "TRAILS-ALONG": {
   "name": "TRAILS-ALONG",
   "kind": "global",
   "file": "verbs.zil",
   "line": 710,
   "value": "<PLTABLE \" walks a few steps behind.\" \" trails along.\" \" stays at your side.\" \" walks along with you.\">"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "verbs.zil",
   "line": 741,
   "value": "<PLTABLE \" won't help any.\" \" is a waste of time.\">"
  },
  "FUMBLE-NUMBER:NUMBER": {
   "name": "FUMBLE-NUMBER:NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 789,
   "value": "7"
  },
  "FUMBLE-PROB:NUMBER": {
   "name": "FUMBLE-PROB:NUMBER",
   "kind": "global",
   "file": "verbs.zil",
   "line": 790,
   "value": "8"
  },
  "WHO-CARES-LENGTH": {
   "name": "WHO-CARES-LENGTH",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1000,
   "value": "4"
  },
  "WHO-CARES-VERB": {
   "name": "WHO-CARES-VERB",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1002,
   "value": "<PLTABLE \"do\" \"do\" \"let\" \"seem\">"
  },
  "WHO-CARES-TBL": {
   "name": "WHO-CARES-TBL",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1005,
   "value": "<PLTABLE \"n't appear interested\" \"n't care\" \" out a loud yawn\" \" impatient\">"
  },
  "AWAITING-REPLY": {
   "name": "AWAITING-REPLY",
   "kind": "global",
   "file": "verbs.zil",
   "line": 1691,
   "value": "<>"
  },
  "I-ASSUME": {
   "name": "I-ASSUME",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1730,
   "value": "\"[I assume you mean:\""
  },
  "YOU-DIDNT-SAY-W": {
   "name": "YOU-DIDNT-SAY-W",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1815,
   "value": "\"[You didn't say w\""
  },
  "NO-VIOLENCE": {
   "name": "NO-VIOLENCE",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 1833,
   "value": "\"You think it over. There's no need to get violent.|\""
  },
  "NOT-ENOUGH-ROOM": {
   "name": "NOT-ENOUGH-ROOM",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2323,
   "value": "\"There's not enough room.|\""
  },
  "ZEN": {
   "name": "ZEN",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2392,
   "value": "\"A brave, Zen-like effort. It fails.\""
  },
  "OU-STOP-SEARCHING": {
   "name": "OU-STOP-SEARCHING",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 2453,
   "value": "\"ou stop searching\""
  },
  "KEEP-WAITING": {
   "name": "KEEP-WAITING",
   "kind": "global",
   "file": "verbs.zil",
   "line": 2971,
   "value": "<>"
  },
  "WHICH-DIR": {
   "name": "WHICH-DIR",
   "kind": "constant",
   "file": "verbs.zil",
   "line": 3210,
   "value": "\"Which direction do you want to go in?\""
  }
 },
 "syntax": {
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
     "line": 31
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
     "line": 32
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
     "line": 34
    },
    {
     "pattern": "$VERIFY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-$VERIFY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 35
    }
   ]
  },
  "ADDRESS": {
   "verb": "ADDRESS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ADDRESS OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 45
    }
   ]
  },
  "POINT": {
   "verb": "POINT",
   "synonyms": [
    "AIM"
   ],
   "productions": [
    {
     "pattern": "POINT OBJECT AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-AIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 48
    },
    {
     "pattern": "POINT OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-AIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 49
    },
    {
     "pattern": "POINT OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-AIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 50
    },
    {
     "pattern": "POINT AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 51
    },
    {
     "pattern": "POINT AT OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-SAIM",
     "preaction": "PRE-SAIM",
     "file": "syntax.zil",
     "line": 52
    },
    {
     "pattern": "POINT TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 53
    }
   ]
  },
  "CHECK": {
   "verb": "CHECK",
   "synonyms": [
    "TEST",
    "ANALYSE",
    "ANALYZE"
   ],
   "productions": [
    {
     "pattern": "CHECK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ANALYZE",
     "preaction": "PRE-ANALYZE",
     "file": "syntax.zil",
     "line": 56
    },
    {
     "pattern": "CHECK OBJECT FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ANALYZE",
     "preaction": "PRE-ANALYZE",
     "file": "syntax.zil",
     "line": 57
    },
    {
     "pattern": "CHECK OUT OBJECT",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-ANALYZE",
     "preaction": "PRE-ANALYZE",
     "file": "syntax.zil",
     "line": 58
    },
    {
     "pattern": "CHECK UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": "PRE-LOOK-UNDER",
     "file": "syntax.zil",
     "line": 59
    },
    {
     "pattern": "CHECK OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 60
    },
    {
     "pattern": "CHECK OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-SANALYZE",
     "preaction": "PRE-SANALYZE",
     "file": "syntax.zil",
     "line": 61
    }
   ]
  },
  "ANSWER": {
   "verb": "ANSWER",
   "synonyms": [
    "REPLY",
    "RESPOND"
   ],
   "productions": [
    {
     "pattern": "ANSWER",
     "objects": 0,
     "particles": [],
     "action": "V-ANSWER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 64
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 65
    },
    {
     "pattern": "ANSWER TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-REPLY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 66
    }
   ]
  },
  "ASK": {
   "verb": "ASK",
   "synonyms": [
    "QUERY",
    "QUESTION",
    "INQUIRE",
    "CONSULT"
   ],
   "productions": [
    {
     "pattern": "ASK OBJECT (FIND PERSONBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-ASK",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 69
    },
    {
     "pattern": "ASK ABOUT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-CONTEXT-ABOUT",
     "preaction": "PRE-ASK-CONTEXT-ABOUT",
     "file": "syntax.zil",
     "line": 71
    },
    {
     "pattern": "ASK FOR OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-CONTEXT-FOR",
     "preaction": "PRE-ASK-CONTEXT-FOR",
     "file": "syntax.zil",
     "line": 72
    },
    {
     "pattern": "ASK OBJECT ABOUT OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 73
    },
    {
     "pattern": "ASK OBJECT FOR OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-ASK-FOR",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 74
    },
    {
     "pattern": "ASK OBJECT ON OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 75
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [
    "FIGHT",
    "RAPE",
    "MOLEST",
    "ASSAULT",
    "REPEL"
   ],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 78
    },
    {
     "pattern": "ATTACK OFF OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 79
    },
    {
     "pattern": "ATTACK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD ;CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 80
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
     "line": 84
    }
   ]
  },
  "CLEAN": {
   "verb": "CLEAN",
   "synonyms": [
    "BRUSH",
    "WIPE",
    "WASH",
    "TIDY",
    "SCRAPE",
    "SCRATCH",
    "FRESHEN"
   ],
   "productions": [
    {
     "pattern": "CLEAN OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-BRUSH",
     "preaction": "PRE-BRUSH",
     "file": "syntax.zil",
     "line": 91
    },
    {
     "pattern": "CLEAN IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 93
    },
    {
     "pattern": "CLEAN OBJECT OFF OBJECT (ON-GROUND IN-ROOM ;MANY)",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-BRUSH",
     "preaction": "PRE-BRUSH",
     "file": "syntax.zil",
     "line": 94
    },
    {
     "pattern": "CLEAN OBJECT (ON-GROUND IN-ROOM MANY) WITH OBJECT (HELD CARRIED TAKE HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BRUSH",
     "preaction": "PRE-BRUSH",
     "file": "syntax.zil",
     "line": 97
    },
    {
     "pattern": "CLEAN OFF OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-BRUSH",
     "preaction": "PRE-BRUSH",
     "file": "syntax.zil",
     "line": 100
    },
    {
     "pattern": "CLEAN UP OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-BRUSH",
     "preaction": "PRE-BRUSH",
     "file": "syntax.zil",
     "line": 102
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
     "action": "V-BUY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 105
    }
   ]
  },
  "CALL": {
   "verb": "CALL",
   "synonyms": [
    "SUMMON"
   ],
   "productions": [
    {
     "pattern": "CALL OBJECT (FIND PERSONBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-$CALL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 110
    },
    {
     "pattern": "CALL TO OBJECT (FIND PERSONBIT)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-$CALL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 111
    }
   ]
  },
  "$CALL": {
   "verb": "$CALL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "$CALL OBJECT (FIND PERSONBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-$CALL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 109
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [
    "BOARD",
    "SCALE"
   ],
   "productions": [
    {
     "pattern": "CLIMB OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 119
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM EVERYWHERE)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 120
    },
    {
     "pattern": "CLIMB IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM EVERYWHERE)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 121
    },
    {
     "pattern": "CLIMB OFF OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 122
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
     "line": 123
    },
    {
     "pattern": "CLIMB OUT OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM EVERYWHERE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 124
    },
    {
     "pattern": "CLIMB OVER OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 125
    },
    {
     "pattern": "CLIMB THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 126
    },
    {
     "pattern": "CLIMB UP OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM EVERYWHERE)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 127
    }
   ]
  },
  "CLOSE": {
   "verb": "CLOSE",
   "synonyms": [
    "SHUT"
   ],
   "productions": [
    {
     "pattern": "CLOSE OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 130
    },
    {
     "pattern": "CLOSE OFF OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 132
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
     "line": 135
    }
   ]
  },
  "COVER": {
   "verb": "COVER",
   "synonyms": [],
   "productions": [
    {
     "pattern": "COVER OBJECT WITH OBJECT (HELD MANY)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SPUT-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 137
    }
   ]
  },
  "DAMAGE": {
   "verb": "DAMAGE",
   "synonyms": [
    "DEMOLISH",
    "DESTROY",
    "BREAK",
    "SMASH",
    "CRUSH",
    "CRACK",
    "HURT",
    "WRECK"
   ],
   "productions": [
    {
     "pattern": "DAMAGE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 140
    },
    {
     "pattern": "DAMAGE UP OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 142
    },
    {
     "pattern": "DAMAGE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED HAVE TAKE)",
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
     "pattern": "DAMAGE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) DOWN OBJECT (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 147
    },
    {
     "pattern": "DAMAGE DOWN OBJECT (ON-GROUND IN-ROOM HELD CARRIED) WITH OBJECT (HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "DOWN",
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": null,
     "file": "syntax.zil",
     "line": 150
    }
   ]
  },
  "DIAGNOSE": {
   "verb": "DIAGNOSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DIAGNOSE OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-DIAGNOSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 154
    }
   ]
  },
  "DINE": {
   "verb": "DINE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DINE ON OBJECT (FIND ROOMSBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE TAKE ;MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-EAT",
     "preaction": "PRE-EAT",
     "file": "syntax.zil",
     "line": 156
    }
   ]
  },
  "DRAPE": {
   "verb": "DRAPE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "DRAPE OBJECT IN OBJECT (HELD MANY)",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-SPUT-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 161
    },
    {
     "pattern": "DRAPE OBJECT (HELD MANY) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 162
    },
    {
     "pattern": "DRAPE OBJECT (HELD MANY) AROUND OBJECT",
     "objects": 2,
     "particles": [
      "AROUND"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 163
    },
    {
     "pattern": "DRAPE OBJECT (HELD MANY) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 164
    }
   ]
  },
  "DRINK": {
   "verb": "DRINK",
   "synonyms": [
    "SWALLOW",
    "SIP",
    "GUZZLE"
   ],
   "productions": [
    {
     "pattern": "DRINK OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-DRINK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 167
    },
    {
     "pattern": "DRINK FROM OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-DRINK",
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
     "pattern": "DROP OBJECT (HELD MANY HAVE TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 171
    },
    {
     "pattern": "DROP OBJECT (HELD ;CARRIED MANY HAVE TAKE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 172
    },
    {
     "pattern": "DROP OBJECT (HELD ;CARRIED MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 174
    },
    {
     "pattern": "DROP OBJECT (HELD ;CARRIED MANY HAVE TAKE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 176
    },
    {
     "pattern": "DROP OBJECT (HELD ;CARRIED MANY HAVE TAKE) THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROW-THROUGH",
     "preaction": "PRE-THROW-THROUGH",
     "file": "syntax.zil",
     "line": 178
    }
   ]
  },
  "EAT": {
   "verb": "EAT",
   "synonyms": [
    "TASTE",
    "LICK",
    "GOBBLE",
    "DEVOUR"
   ],
   "productions": [
    {
     "pattern": "EAT OBJECT (FIND EATBIT) (HELD CARRIED ON-GROUND IN-ROOM HAVE TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-EAT",
     "preaction": "PRE-EAT",
     "file": "syntax.zil",
     "line": 183
    }
   ]
  },
  "ENJOY": {
   "verb": "ENJOY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ENJOY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-ENJOY",
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
     "pattern": "ENTER OBJECT (FIND ROOMSBIT) (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 188
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
    "OBSERVE",
    "EXPLORE",
    "WATCH"
   ],
   "productions": [
    {
     "pattern": "EXAMINE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 191
    },
    {
     "pattern": "EXAMINE OBJECT (HELD CARRIED ON-GROUND IN-ROOM TAKE) THROUGH OBJECT (ON-GROUND IN-ROOM HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 193
    },
    {
     "pattern": "EXAMINE OBJECT WITH OBJECT (ON-GROUND IN-ROOM HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 196
    },
    {
     "pattern": "EXAMINE UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": "PRE-LOOK-UNDER",
     "file": "syntax.zil",
     "line": 199
    }
   ]
  },
  "EXPLAIN": {
   "verb": "EXPLAIN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXPLAIN OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-TALK-ABOUT",
     "preaction": "PRE-TALK-ABOUT",
     "file": "syntax.zil",
     "line": 201
    },
    {
     "pattern": "EXPLAIN OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-STELL-ABOUT",
     "preaction": "PRE-STELL-ABOUT",
     "file": "syntax.zil",
     "line": 202
    },
    {
     "pattern": "EXPLAIN ABOUT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TALK-ABOUT",
     "preaction": "PRE-TALK-ABOUT",
     "file": "syntax.zil",
     "line": 203
    },
    {
     "pattern": "EXPLAIN TO OBJECT (IN-ROOM) ABOUT OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "TO",
      "ABOUT"
     ],
     "action": "V-TELL-ABOUT",
     "preaction": "PRE-TELL-ABOUT",
     "file": "syntax.zil",
     "line": 204
    }
   ]
  },
  "SLEEP": {
   "verb": "SLEEP",
   "synonyms": [
    "FAINT",
    "DOZE",
    "NAP",
    "SNOOZE"
   ],
   "productions": [
    {
     "pattern": "SLEEP",
     "objects": 0,
     "particles": [],
     "action": "V-FAINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 208
    },
    {
     "pattern": "SLEEP IN OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-FAINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 209
    },
    {
     "pattern": "SLEEP ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-FAINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 210
    }
   ]
  },
  "FIDDLE": {
   "verb": "FIDDLE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FIDDLE WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-RUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 212
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [
    "FLOOD"
   ],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 215
    },
    {
     "pattern": "FILL OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 217
    }
   ]
  },
  "FIND": {
   "verb": "FIND",
   "synonyms": [
    "DETECT",
    "DISCOVER",
    "LOCATE",
    "SEEK"
   ],
   "productions": [
    {
     "pattern": "FIND OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 222
    },
    {
     "pattern": "FIND OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-SSEARCH-FOR",
     "preaction": "PRE-SSEARCH-FOR",
     "file": "syntax.zil",
     "line": 223
    },
    {
     "pattern": "FIND OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-SSEARCH-FOR",
     "preaction": "PRE-SSEARCH-FOR",
     "file": "syntax.zil",
     "line": 224
    },
    {
     "pattern": "FIND OUT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-ASK-CONTEXT-ABOUT",
     "preaction": "PRE-ASK-CONTEXT-ABOUT",
     "file": "syntax.zil",
     "line": 225
    }
   ]
  },
  "FIX": {
   "verb": "FIX",
   "synonyms": [
    "REPAIR",
    "ADJUST",
    "UNJAM"
   ],
   "productions": [
    {
     "pattern": "FIX OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FIX",
     "preaction": null,
     "file": "syntax.zil",
     "line": 228
    },
    {
     "pattern": "FIX OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FIX",
     "preaction": null,
     "file": "syntax.zil",
     "line": 229
    }
   ]
  },
  "FOLLOW": {
   "verb": "FOLLOW",
   "synonyms": [
    "PURSUE",
    "CHASE",
    "STALK"
   ],
   "productions": [
    {
     "pattern": "FOLLOW OBJECT (FIND PERSONBIT) (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 232
    },
    {
     "pattern": "FOLLOW OBJECT (FIND PERSONBIT) (EVERYWHERE) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 233
    },
    {
     "pattern": "FOLLOW OBJECT (FIND PERSONBIT) (EVERYWHERE) TO OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 234
    }
   ]
  },
  "FOOTNOTE": {
   "verb": "FOOTNOTE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FOOTNOTE",
     "objects": 0,
     "particles": [],
     "action": "V-FOOTNOTE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 236
    },
    {
     "pattern": "FOOTNOTE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOOTNOTE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 237
    }
   ]
  },
  "GET": {
   "verb": "GET",
   "synonyms": [],
   "productions": [
    {
     "pattern": "GET OBJECT (FIND TAKEBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 239
    },
    {
     "pattern": "GET OBJECT (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 241
    },
    {
     "pattern": "GET OBJECT (IN-ROOM CARRIED MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 242
    },
    {
     "pattern": "GET OBJECT (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 243
    },
    {
     "pattern": "GET OBJECT (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 244
    },
    {
     "pattern": "GET OBJECT (MANY TAKE) TO OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TAKE-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 245
    },
    {
     "pattern": "GET IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 246
    },
    {
     "pattern": "GET OFF OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 247
    },
    {
     "pattern": "GET ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 248
    },
    {
     "pattern": "GET OUT OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM EVERYWHERE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 249
    },
    {
     "pattern": "GET RID OBJECT",
     "objects": 1,
     "particles": [
      "RID"
     ],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 250
    },
    {
     "pattern": "GET UP OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 251
    }
   ]
  },
  "HAND": {
   "verb": "HAND",
   "synonyms": [
    "GIVE",
    "SELL",
    "OFFER",
    "PASS",
    "FEED"
   ],
   "productions": [
    {
     "pattern": "HAND OBJECT (MANY HELD HAVE) TO OBJECT (FIND PERSONBIT) (ON-GROUND)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-GIVE",
     "preaction": "PRE-GIVE",
     "file": "syntax.zil",
     "line": 255
    },
    {
     "pattern": "HAND OBJECT (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "syntax.zil",
     "line": 257
    },
    {
     "pattern": "HAND OUT OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-FAINT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 260
    },
    {
     "pattern": "HAND UP OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-QUIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 261
    }
   ]
  },
  "HANG": {
   "verb": "HANG",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HANG OBJECT (HELD ;CARRIED MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 263
    }
   ]
  },
  "HEAR": {
   "verb": "HEAR",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HEAR OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LISTEN",
     "preaction": "PRE-LISTEN",
     "file": "syntax.zil",
     "line": 266
    }
   ]
  },
  "HELLO": {
   "verb": "HELLO",
   "synonyms": [
    "HI",
    "GREET",
    "GREETINGS"
   ],
   "productions": [
    {
     "pattern": "HELLO OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": "PRE-HELLO",
     "file": "syntax.zil",
     "line": 269
    }
   ]
  },
  "HELP": {
   "verb": "HELP",
   "synonyms": [
    "HINT",
    "HINTS"
   ],
   "productions": [
    {
     "pattern": "HELP",
     "objects": 0,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 272
    },
    {
     "pattern": "HELP OBJECT (FIND PERSONBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 273
    }
   ]
  },
  "HIDE": {
   "verb": "HIDE",
   "synonyms": [
    "CONCEAL"
   ],
   "productions": [
    {
     "pattern": "HIDE",
     "objects": 0,
     "particles": [],
     "action": "V-HIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 276
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
     "line": 277
    },
    {
     "pattern": "HIDE IN OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 278
    },
    {
     "pattern": "HIDE ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 279
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
     "line": 280
    },
    {
     "pattern": "HIDE OBJECT (HELD ;CARRIED MANY HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 281
    },
    {
     "pattern": "HIDE OBJECT (HELD ;CARRIED MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 283
    }
   ]
  },
  "HOLD": {
   "verb": "HOLD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HOLD OBJECT (FIND TAKEBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 289
    },
    {
     "pattern": "HOLD OBJECT (IN-ROOM CARRIED TAKE HAVE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-HOLD-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 291
    },
    {
     "pattern": "HOLD OBJECT (IN-ROOM CARRIED TAKE HAVE) UP OBJECT",
     "objects": 2,
     "particles": [
      "UP"
     ],
     "action": "V-HOLD-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 292
    },
    {
     "pattern": "HOLD UP OBJECT (IN-ROOM CARRIED TAKE HAVE)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-HOLD-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 293
    }
   ]
  },
  "I": {
   "verb": "I",
   "synonyms": [
    "INVENT"
   ],
   "productions": [
    {
     "pattern": "I",
     "objects": 0,
     "particles": [],
     "action": "V-INVENTORY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 296
    }
   ]
  },
  "JUMP": {
   "verb": "JUMP",
   "synonyms": [
    "LEAP",
    "DIVE"
   ],
   "productions": [
    {
     "pattern": "JUMP",
     "objects": 0,
     "particles": [],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 299
    },
    {
     "pattern": "JUMP ACROSS OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ACROSS"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 300
    },
    {
     "pattern": "JUMP FROM OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 301
    },
    {
     "pattern": "JUMP IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 302
    },
    {
     "pattern": "JUMP OUT OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM EVERYWHERE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 303
    },
    {
     "pattern": "JUMP OFF OBJECT (FIND ROOMSBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 304
    },
    {
     "pattern": "JUMP OVER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 305
    },
    {
     "pattern": "JUMP THROUGH OBJECT",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 306
    }
   ]
  },
  "MURDER": {
   "verb": "MURDER",
   "synonyms": [
    "KILL",
    "STAB",
    "WASTE"
   ],
   "productions": [
    {
     "pattern": "MURDER OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE ;TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-KILL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 309
    }
   ]
  },
  "CONSOLE": {
   "verb": "CONSOLE",
   "synonyms": [
    "KISS",
    "HUG",
    "COMFORT",
    "FLIRT"
   ],
   "productions": [
    {
     "pattern": "CONSOLE OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-KISS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 314
    },
    {
     "pattern": "CONSOLE WITH OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-KISS",
     "preaction": null,
     "file": "syntax.zil",
     "line": 315
    }
   ]
  },
  "KNOCK": {
   "verb": "KNOCK",
   "synonyms": [
    "RAP",
    "BANG"
   ],
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
     "line": 318
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
     "line": 319
    },
    {
     "pattern": "KNOCK DOWN OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 320
    },
    {
     "pattern": "KNOCK OFF OBJECT (FIND PERSONBIT) (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 321
    },
    {
     "pattern": "KNOCK OUT OBJECT (FIND PERSONBIT) (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 322
    },
    {
     "pattern": "KNOCK OBJECT (IN-ROOM ON-GROUND MANY) OFF OBJECT (FIND ROOMSBIT)",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 323
    },
    {
     "pattern": "KNOCK OBJECT (IN-ROOM ON-GROUND) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 325
    }
   ]
  },
  "LEAVE": {
   "verb": "LEAVE",
   "synonyms": [
    "EXIT",
    "DEPART",
    "WITHDRAW"
   ],
   "productions": [
    {
     "pattern": "LEAVE",
     "objects": 0,
     "particles": [],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 328
    },
    {
     "pattern": "LEAVE OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 329
    },
    {
     "pattern": "LEAVE FROM OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 330
    }
   ]
  },
  "LIE": {
   "verb": "LIE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LIE DOWN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LIE",
     "preaction": "PRE-LIE",
     "file": "syntax.zil",
     "line": 332
    },
    {
     "pattern": "LIE IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LIE",
     "preaction": "PRE-LIE",
     "file": "syntax.zil",
     "line": 333
    },
    {
     "pattern": "LIE ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LIE",
     "preaction": "PRE-LIE",
     "file": "syntax.zil",
     "line": 334
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
     "line": 336
    }
   ]
  },
  "LISTEN": {
   "verb": "LISTEN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LISTEN TO OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-LISTEN",
     "preaction": "PRE-LISTEN",
     "file": "syntax.zil",
     "line": 340
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 343
    },
    {
     "pattern": "LOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-LOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 344
    }
   ]
  },
  "LOOK": {
   "verb": "LOOK",
   "synonyms": [
    "PEEP",
    "L",
    "STARE",
    "GAZE",
    "PEEK",
    "PEER",
    "SEE"
   ],
   "productions": [
    {
     "pattern": "LOOK",
     "objects": 0,
     "particles": [],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 347
    },
    {
     "pattern": "LOOK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-CHASTISE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 348
    },
    {
     "pattern": "LOOK AROUND OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 349
    },
    {
     "pattern": "LOOK AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 350
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
     "line": 351
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 352
    },
    {
     "pattern": "LOOK FOR OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 353
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": "PRE-LOOK-INSIDE",
     "file": "syntax.zil",
     "line": 354
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM) FOR OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "IN",
      "FOR"
     ],
     "action": "V-SEARCH-FOR",
     "preaction": "PRE-SEARCH-FOR",
     "file": "syntax.zil",
     "line": 358
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
     "line": 360
    },
    {
     "pattern": "LOOK OUT OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LOOK-OUTSIDE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 361
    },
    {
     "pattern": "LOOK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-EXAMINE",
     "preaction": "PRE-EXAMINE",
     "file": "syntax.zil",
     "line": 362
    },
    {
     "pattern": "LOOK THROUGH OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-LOOK-THROUGH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 364
    },
    {
     "pattern": "LOOK UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": "PRE-LOOK-UNDER",
     "file": "syntax.zil",
     "line": 366
    },
    {
     "pattern": "LOOK UP OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 367
    },
    {
     "pattern": "LOOK UP OBJECT IN OBJECT",
     "objects": 2,
     "particles": [
      "UP",
      "IN"
     ],
     "action": "V-LOOK-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 368
    }
   ]
  },
  "LOOK-INSIDE": {
   "verb": "LOOK-INSIDE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "LOOK-INSIDE OBJECT (HELD CARRIED ON-GROUND IN-ROOM) (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-LOOK-INSIDE",
     "preaction": "PRE-LOOK-INSIDE",
     "file": "syntax.zil",
     "line": 356
    }
   ]
  },
  "NO": {
   "verb": "NO",
   "synonyms": [
    "NOPE"
   ],
   "productions": [
    {
     "pattern": "NO",
     "objects": 0,
     "particles": [],
     "action": "V-NO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 371
    }
   ]
  },
  "NOD": {
   "verb": "NOD",
   "synonyms": [],
   "productions": [
    {
     "pattern": "NOD OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-NOD",
     "preaction": null,
     "file": "syntax.zil",
     "line": 373
    },
    {
     "pattern": "NOD AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-HELLO",
     "preaction": "PRE-HELLO",
     "file": "syntax.zil",
     "line": 374
    },
    {
     "pattern": "NOD TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-HELLO",
     "preaction": "PRE-HELLO",
     "file": "syntax.zil",
     "line": 375
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
     "line": 377
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
     "line": 379
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (ON-GROUND IN-ROOM HELD CARRIED HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 381
    }
   ]
  },
  "PANIC": {
   "verb": "PANIC",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PANIC",
     "objects": 0,
     "particles": [],
     "action": "V-PANIC",
     "preaction": null,
     "file": "syntax.zil",
     "line": 385
    }
   ]
  },
  "PAY": {
   "verb": "PAY",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PAY FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-BUY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 387
    }
   ]
  },
  "PICK": {
   "verb": "PICK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PICK OBJECT (FIND TAKEBIT) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 389
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
     "line": 391
    }
   ]
  },
  "POUR": {
   "verb": "POUR",
   "synonyms": [
    "SPILL",
    "SPRINKLE"
   ],
   "productions": [
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 395
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE TAKE) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-POUR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 396
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 397
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE TAKE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 398
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED HAVE TAKE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 399
    }
   ]
  },
  "PULL": {
   "verb": "PULL",
   "synonyms": [
    "TUG",
    "MOVE"
   ],
   "productions": [
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "syntax.zil",
     "line": 402
    },
    {
     "pattern": "PULL OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-MOVE-DIR",
     "preaction": "PRE-MOVE-DIR",
     "file": "syntax.zil",
     "line": 403
    },
    {
     "pattern": "PULL OBJECT (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 404
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
     "line": 406
    },
    {
     "pattern": "PULL TOGETHER OBJECT",
     "objects": 1,
     "particles": [
      "TOGETHER"
     ],
     "action": "V-PULL-TOGETHER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 407
    }
   ]
  },
  "PUSH": {
   "verb": "PUSH",
   "synonyms": [
    "PRESS",
    "SHOVE"
   ],
   "productions": [
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 410
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-MOVE-DIR",
     "preaction": "PRE-MOVE-DIR",
     "file": "syntax.zil",
     "line": 411
    },
    {
     "pattern": "PUSH OBJECT (HELD CARRIED MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 412
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY) OFF OBJECT (FIND ROOMSBIT)",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "syntax.zil",
     "line": 414
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-MOVE-DIR",
     "preaction": "PRE-MOVE-DIR",
     "file": "syntax.zil",
     "line": 416
    },
    {
     "pattern": "PUSH OBJECT (HELD CARRIED MANY HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 418
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
     "line": 419
    }
   ]
  },
  "PLACE": {
   "verb": "PLACE",
   "synonyms": [
    "PUT",
    "STUFF",
    "LAY",
    "INSERT",
    "SET"
   ],
   "productions": [
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) ON OBJECT (FIND SURFACEBIT)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 422
    },
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) ACROSS OBJECT",
     "objects": 2,
     "particles": [
      "ACROSS"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 424
    },
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) AROUND OBJECT",
     "objects": 2,
     "particles": [
      "AROUND"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 425
    },
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 426
    },
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 427
    },
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 428
    },
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROW-THROUGH",
     "preaction": "PRE-THROW-THROUGH",
     "file": "syntax.zil",
     "line": 429
    },
    {
     "pattern": "PLACE OBJECT (HELD MANY HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 431
    },
    {
     "pattern": "PLACE AWAY OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "AWAY",
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 432
    },
    {
     "pattern": "PLACE DOWN OBJECT (HELD MANY HAVE)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 433
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
     "line": 435
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
     "line": 436
    },
    {
     "pattern": "PLAY OBJECT WITH OBJECT (FIND PERSONBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PLAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 437
    }
   ]
  },
  "QUIT": {
   "verb": "QUIT",
   "synonyms": [
    "Q",
    "LOGOUT",
    "LOGOFF"
   ],
   "productions": [
    {
     "pattern": "QUIT",
     "objects": 0,
     "particles": [],
     "action": "V-QUIT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 440
    }
   ]
  },
  "READ": {
   "verb": "READ",
   "synonyms": [
    "SKIM"
   ],
   "productions": [
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 443
    },
    {
     "pattern": "READ OBJECT OBJECT (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 2,
     "particles": [],
     "action": "V-SREAD",
     "preaction": "PRE-SREAD",
     "file": "syntax.zil",
     "line": 445
    },
    {
     "pattern": "READ OBJECT (HELD CARRIED ON-GROUND IN-ROOM TAKE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "syntax.zil",
     "line": 448
    },
    {
     "pattern": "READ ABOUT OBJECT IN OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 2,
     "particles": [
      "ABOUT",
      "IN"
     ],
     "action": "V-LOOK-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 451
    }
   ]
  },
  "REFUSE": {
   "verb": "REFUSE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REFUSE OBJECT (IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-REFUSE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 455
    }
   ]
  },
  "RELAX": {
   "verb": "RELAX",
   "synonyms": [
    "MEDITATE",
    "REST"
   ],
   "productions": [
    {
     "pattern": "RELAX",
     "objects": 0,
     "particles": [],
     "action": "V-RELAX",
     "preaction": null,
     "file": "syntax.zil",
     "line": 458
    }
   ]
  },
  "REMOVE": {
   "verb": "REMOVE",
   "synonyms": [
    "DOFF"
   ],
   "productions": [
    {
     "pattern": "REMOVE OBJECT (FIND WORNBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-REMOVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 461
    },
    {
     "pattern": "REMOVE OBJECT (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 462
    }
   ]
  },
  "REQUEST": {
   "verb": "REQUEST",
   "synonyms": [],
   "productions": [
    {
     "pattern": "REQUEST OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [],
     "action": "V-ASK-CONTEXT-FOR",
     "preaction": "PRE-ASK-CONTEXT-FOR",
     "file": "syntax.zil",
     "line": 465
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
     "line": 467
    }
   ]
  },
  "RESTORE": {
   "verb": "RESTORE",
   "synonyms": [
    "RESUME"
   ],
   "productions": [
    {
     "pattern": "RESTORE",
     "objects": 0,
     "particles": [],
     "action": "V-RESTORE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 470
    }
   ]
  },
  "RING": {
   "verb": "RING",
   "synonyms": [
    "BLOW",
    "BLAST",
    "HONK",
    "TOOT",
    "BEEP"
   ],
   "productions": [
    {
     "pattern": "RING OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 474
    },
    {
     "pattern": "RING ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-RING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 475
    },
    {
     "pattern": "RING OBJECT (HELD CARRIED HAVE TAKE) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SSHOOT",
     "preaction": "PRE-SSHOOT",
     "file": "syntax.zil",
     "line": 476
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
     "line": 478
    }
   ]
  },
  "RUB": {
   "verb": "RUB",
   "synonyms": [
    "TOUCH",
    "FEEL"
   ],
   "productions": [
    {
     "pattern": "RUB OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RUB",
     "preaction": null,
     "file": "syntax.zil",
     "line": 481
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
     "line": 482
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
     "line": 484
    },
    {
     "pattern": "SAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 485
    }
   ]
  },
  "SAY": {
   "verb": "SAY",
   "synonyms": [
    "TALK",
    "SPEAK",
    "WHISPER",
    "STATE",
    "CHAT",
    "GAB"
   ],
   "productions": [
    {
     "pattern": "SAY OBJECT TO OBJECT (FIND PERSONBIT) (IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 489
    },
    {
     "pattern": "SAY OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SAY",
     "preaction": null,
     "file": "syntax.zil",
     "line": 490
    },
    {
     "pattern": "SAY ABOUT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TALK-ABOUT",
     "preaction": "PRE-TALK-ABOUT",
     "file": "syntax.zil",
     "line": 491
    },
    {
     "pattern": "SAY TO OBJECT (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 492
    },
    {
     "pattern": "SAY TO OBJECT (IN-ROOM) ABOUT OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "TO",
      "ABOUT"
     ],
     "action": "V-TELL-ABOUT",
     "preaction": "PRE-TELL-ABOUT",
     "file": "syntax.zil",
     "line": 493
    },
    {
     "pattern": "SAY WITH OBJECT (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-TELL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 495
    },
    {
     "pattern": "SAY WITH OBJECT (IN-ROOM) ABOUT OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "WITH",
      "ABOUT"
     ],
     "action": "V-ASK-ABOUT",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 496
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
     "line": 499
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
     "line": 501
    }
   ]
  },
  "SEARCH": {
   "verb": "SEARCH",
   "synonyms": [
    "DIG",
    "RUMMAGE",
    "FRISK"
   ],
   "productions": [
    {
     "pattern": "SEARCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SEARCH",
     "preaction": "PRE-SEARCH",
     "file": "syntax.zil",
     "line": 504
    },
    {
     "pattern": "SEARCH OBJECT FOR OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-SEARCH-FOR",
     "preaction": "PRE-SEARCH-FOR",
     "file": "syntax.zil",
     "line": 505
    },
    {
     "pattern": "SEARCH FOR OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": "PRE-FIND",
     "file": "syntax.zil",
     "line": 507
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
     "line": 508
    },
    {
     "pattern": "SEARCH UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": "PRE-LOOK-UNDER",
     "file": "syntax.zil",
     "line": 509
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
     "line": 510
    }
   ]
  },
  "SHAKE": {
   "verb": "SHAKE",
   "synonyms": [
    "RATTLE"
   ],
   "productions": [
    {
     "pattern": "SHAKE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 513
    },
    {
     "pattern": "SHAKE OBJECT WITH OBJECT (FIND PERSONBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHAKE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 514
    }
   ]
  },
  "FIRE": {
   "verb": "FIRE",
   "synonyms": [
    "SHOOT",
    "SPRAY"
   ],
   "productions": [
    {
     "pattern": "FIRE OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-SHOOT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 517
    },
    {
     "pattern": "FIRE OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED HAVE ;TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHOOT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 519
    },
    {
     "pattern": "FIRE OBJECT (HELD CARRIED HAVE ;TAKE) AT OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SSHOOT",
     "preaction": "PRE-SSHOOT",
     "file": "syntax.zil",
     "line": 522
    },
    {
     "pattern": "FIRE OBJECT (HELD CARRIED HAVE ;TAKE) ON OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-SSHOOT",
     "preaction": "PRE-SSHOOT",
     "file": "syntax.zil",
     "line": 525
    },
    {
     "pattern": "FIRE AT OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SHOOT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 528
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
     "pattern": "SHOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 532
    },
    {
     "pattern": "SHOW OBJECT (HELD MANY HAVE) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 533
    },
    {
     "pattern": "SHOW OBJECT OBJECT (HELD MANY HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SSHOW",
     "preaction": "PRE-SSHOW",
     "file": "syntax.zil",
     "line": 536
    }
   ]
  },
  "SHARE": {
   "verb": "SHARE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SHARE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 534
    },
    {
     "pattern": "SHARE OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SHOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 535
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
     "action": "V-SIT",
     "preaction": "PRE-SIT",
     "file": "syntax.zil",
     "line": 540
    },
    {
     "pattern": "SIT AT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SIT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 541
    },
    {
     "pattern": "SIT BESIDE OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "BESIDE"
     ],
     "action": "V-SIT-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 542
    },
    {
     "pattern": "SIT DOWN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-SIT",
     "preaction": "PRE-SIT",
     "file": "syntax.zil",
     "line": 543
    },
    {
     "pattern": "SIT IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SIT",
     "preaction": "PRE-SIT",
     "file": "syntax.zil",
     "line": 544
    }
   ]
  },
  "PUNCH": {
   "verb": "PUNCH",
   "synonyms": [
    "SLAP",
    "HIT",
    "KICK"
   ],
   "productions": [
    {
     "pattern": "PUNCH OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 547
    },
    {
     "pattern": "PUNCH OBJECT (ON-GROUND IN-ROOM) AROUND OBJECT (FIND ROOMSBIT)",
     "objects": 2,
     "particles": [
      "AROUND"
     ],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 548
    },
    {
     "pattern": "PUNCH OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM HAVE TAKE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SLAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 549
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
     "line": 552
    },
    {
     "pattern": "SLIDE OBJECT (HELD MANY HAVE TAKE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 553
    },
    {
     "pattern": "SLIDE OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 555
    }
   ]
  },
  "SMELL": {
   "verb": "SMELL",
   "synonyms": [
    "SNIFF"
   ],
   "productions": [
    {
     "pattern": "SMELL OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-SMELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 559
    }
   ]
  },
  "SMILE": {
   "verb": "SMILE",
   "synonyms": [
    "GRIN",
    "WINK"
   ],
   "productions": [
    {
     "pattern": "SMILE AT OBJECT (FIND PERSONBIT)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-SMILE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 562
    }
   ]
  },
  "SORRY": {
   "verb": "SORRY",
   "synonyms": [
    "APOLOGIZE"
   ],
   "productions": [
    {
     "pattern": "SORRY OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-SORRY",
     "preaction": "PRE-HELLO",
     "file": "syntax.zil",
     "line": 565
    },
    {
     "pattern": "SORRY TO OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-SORRY",
     "preaction": "PRE-HELLO",
     "file": "syntax.zil",
     "line": 566
    }
   ]
  },
  "SOUND": {
   "verb": "SOUND",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SOUND OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-RING",
     "preaction": null,
     "file": "syntax.zil",
     "line": 568
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
     "line": 570
    },
    {
     "pattern": "STAND IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 571
    },
    {
     "pattern": "STAND ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 572
    },
    {
     "pattern": "STAND UP OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 573
    }
   ]
  },
  "START": {
   "verb": "START",
   "synonyms": [
    "ACTIVATE"
   ],
   "productions": [
    {
     "pattern": "START OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 576
    },
    {
     "pattern": "START OVER OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-RESTART",
     "preaction": null,
     "file": "syntax.zil",
     "line": 577
    }
   ]
  },
  "PARK": {
   "verb": "PARK",
   "synonyms": [
    "STOP"
   ],
   "productions": [
    {
     "pattern": "PARK OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-STOP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 580
    }
   ]
  },
  "SUPERBRIEF": {
   "verb": "SUPERBRIEF",
   "synonyms": [],
   "productions": [
    {
     "pattern": "SUPERBRIEF",
     "objects": 0,
     "particles": [],
     "action": "V-SUPER-BRIEF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 582
    }
   ]
  },
  "SWIM": {
   "verb": "SWIM",
   "synonyms": [
    "WADE",
    "BATHE"
   ],
   "productions": [
    {
     "pattern": "SWIM IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 585
    }
   ]
  },
  "TAKE": {
   "verb": "TAKE",
   "synonyms": [
    "CARRY",
    "STEAL",
    "SEIZE",
    "GRAB",
    "PRY",
    "RAISE",
    "LIFT"
   ],
   "productions": [
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 588
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 590
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 591
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 592
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 593
    },
    {
     "pattern": "TAKE OBJECT (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 594
    },
    {
     "pattern": "TAKE OBJECT (IN-ROOM CARRIED TAKE HAVE) UP OBJECT",
     "objects": 2,
     "particles": [
      "UP"
     ],
     "action": "V-HOLD-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 595
    },
    {
     "pattern": "TAKE OFF OBJECT (FIND WORNBIT)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 596
    },
    {
     "pattern": "TAKE OUT OBJECT (CARRIED IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 597
    },
    {
     "pattern": "TAKE UP OBJECT (FIND TAKEBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "syntax.zil",
     "line": 598
    }
   ]
  },
  "TELL": {
   "verb": "TELL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TELL OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-TELL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 601
    },
    {
     "pattern": "TELL OBJECT (IN-ROOM) OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [],
     "action": "V-TELL-ABOUT",
     "preaction": "PRE-TELL-ABOUT",
     "file": "syntax.zil",
     "line": 602
    },
    {
     "pattern": "TELL OBJECT (IN-ROOM) ABOUT OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL-ABOUT",
     "preaction": "PRE-TELL-ABOUT",
     "file": "syntax.zil",
     "line": 603
    },
    {
     "pattern": "TELL ABOUT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TALK-ABOUT",
     "preaction": "PRE-TALK-ABOUT",
     "file": "syntax.zil",
     "line": 605
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
     "pattern": "THANK",
     "objects": 0,
     "particles": [],
     "action": "V-THANK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 608
    },
    {
     "pattern": "THANK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THANK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 609
    }
   ]
  },
  "THROW": {
   "verb": "THROW",
   "synonyms": [
    "HURL",
    "TOSS"
   ],
   "productions": [
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE TAKE) AT OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-THROW-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 612
    },
    {
     "pattern": "THROW AWAY OBJECT (HELD CARRIED HAVE)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-DROP",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 615
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE TAKE) AGAINST OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-THROW-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 616
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE TAKE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT-IN",
     "preaction": "PRE-PUT-IN",
     "file": "syntax.zil",
     "line": 619
    },
    {
     "pattern": "THROW OBJECT (HELD MANY HAVE TAKE) ON OBJECT (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 620
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE TAKE) OUT OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-THROW-THROUGH",
     "preaction": "PRE-THROW-THROUGH",
     "file": "syntax.zil",
     "line": 623
    },
    {
     "pattern": "THROW OBJECT (HELD ;CARRIED MANY HAVE TAKE) OVER OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "syntax.zil",
     "line": 626
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE TAKE) THROUGH OBJECT (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROW-THROUGH",
     "preaction": "PRE-THROW-THROUGH",
     "file": "syntax.zil",
     "line": 629
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE TAKE) TO OBJECT (FIND PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-THROW-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 632
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE TAKE) UP OBJECT (FIND ROOMSBIT)",
     "objects": 2,
     "particles": [
      "UP"
     ],
     "action": "V-THROW-AT",
     "preaction": null,
     "file": "syntax.zil",
     "line": 635
    },
    {
     "pattern": "THROW IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROW-IN-TOWEL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 638
    }
   ]
  },
  "SWITCH": {
   "verb": "SWITCH",
   "synonyms": [
    "TURN",
    "FLIP",
    "FLICK",
    "TOGGLE"
   ],
   "productions": [
    {
     "pattern": "SWITCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 644
    },
    {
     "pattern": "SWITCH AROUND OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-TURN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 645
    },
    {
     "pattern": "SWITCH OFF OBJECT (FIND LIGHTBIT) (TAKE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "syntax.zil",
     "line": 646
    },
    {
     "pattern": "SWITCH ON OBJECT (FIND LIGHTBIT)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "syntax.zil",
     "line": 647
    },
    {
     "pattern": "SWITCH OBJECT TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-AIM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 648
    }
   ]
  },
  "UNDO": {
   "verb": "UNDO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "UNDO",
     "objects": 0,
     "particles": [],
     "action": "V-UNDO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 650
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
     "preaction": null,
     "file": "syntax.zil",
     "line": 652
    },
    {
     "pattern": "UNLOCK OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-UNLOCK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 653
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
     "line": 655
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
     "line": 657
    },
    {
     "pattern": "USE OBJECT AGAINST OBJECT",
     "objects": 2,
     "particles": [
      "AGAINST"
     ],
     "action": "V-USE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 658
    },
    {
     "pattern": "USE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-USE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 659
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
     "line": 661
    }
   ]
  },
  "RELEASE": {
   "verb": "RELEASE",
   "synonyms": [
    "REVISION",
    "VERSION",
    "VARIATION"
   ],
   "productions": [
    {
     "pattern": "RELEASE",
     "objects": 0,
     "particles": [],
     "action": "V-VERSION",
     "preaction": null,
     "file": "syntax.zil",
     "line": 664
    }
   ]
  },
  "WAIT": {
   "verb": "WAIT",
   "synonyms": [
    "Z",
    "STAY",
    "PAUSE"
   ],
   "productions": [
    {
     "pattern": "WAIT OBJECT (FIND ROOMSBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-WAIT-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 668
    },
    {
     "pattern": "WAIT FOR OBJECT (FIND ROOMSBIT) (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-WAIT-FOR",
     "preaction": null,
     "file": "syntax.zil",
     "line": 669
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
     "line": 670
    }
   ]
  },
  "WAKE": {
   "verb": "WAKE",
   "synonyms": [
    "AWAKE",
    "ROUSE",
    "SURPRISE",
    "STARTLE"
   ],
   "productions": [
    {
     "pattern": "WAKE OBJECT (FIND ROOMSBIT ;PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 673
    },
    {
     "pattern": "WAKE UP OBJECT (FIND ROOMSBIT ;PERSONBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "syntax.zil",
     "line": 674
    }
   ]
  },
  "HEAD": {
   "verb": "HEAD",
   "synonyms": [
    "WALK",
    "GO",
    "COME",
    "RUN",
    "PROCEED",
    "STEER",
    "DRIVE",
    "RETURN",
    "STEP",
    "APPROACH"
   ],
   "productions": [
    {
     "pattern": "HEAD",
     "objects": 0,
     "particles": [],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 678
    },
    {
     "pattern": "HEAD OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "syntax.zil",
     "line": 679
    },
    {
     "pattern": "HEAD AFTER OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "AFTER"
     ],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 680
    },
    {
     "pattern": "HEAD AROUND OBJECT",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 681
    },
    {
     "pattern": "HEAD AWAY OBJECT (FIND ROOMSBIT) (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 682
    },
    {
     "pattern": "HEAD BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 683
    },
    {
     "pattern": "HEAD DOWN OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "syntax.zil",
     "line": 684
    },
    {
     "pattern": "HEAD IN OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 685
    },
    {
     "pattern": "HEAD OFF OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 686
    },
    {
     "pattern": "HEAD ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "syntax.zil",
     "line": 687
    },
    {
     "pattern": "HEAD OUT OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LEAVE",
     "preaction": null,
     "file": "syntax.zil",
     "line": 688
    },
    {
     "pattern": "HEAD OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 689
    },
    {
     "pattern": "HEAD THROUGH OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 690
    },
    {
     "pattern": "HEAD TO OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "syntax.zil",
     "line": 691
    },
    {
     "pattern": "HEAD UP OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "syntax.zil",
     "line": 692
    },
    {
     "pattern": "HEAD WITH OBJECT (EVERYWHERE)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "syntax.zil",
     "line": 693
    },
    {
     "pattern": "HEAD OBJECT OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-RUN-OVER",
     "preaction": null,
     "file": "syntax.zil",
     "line": 694
    },
    {
     "pattern": "HEAD OBJECT THROUGH OBJECT (EVERYWHERE)",
     "objects": 2,
     "particles": [
      "THROUGH"
     ],
     "action": "V-THROUGH",
     "preaction": "PRE-THROUGH",
     "file": "syntax.zil",
     "line": 695
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
     "pattern": "YELL",
     "objects": 0,
     "particles": [],
     "action": "V-YELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 699
    },
    {
     "pattern": "YELL AT OBJECT (ON-GROUND IN-ROOM EVERYWHERE MANY)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-TELL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 700
    },
    {
     "pattern": "YELL IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-YELL",
     "preaction": null,
     "file": "syntax.zil",
     "line": 701
    },
    {
     "pattern": "YELL TO OBJECT (ON-GROUND IN-ROOM EVERYWHERE MANY)",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-TELL",
     "preaction": "PRE-ASK",
     "file": "syntax.zil",
     "line": 702
    }
   ]
  },
  "YES": {
   "verb": "YES",
   "synonyms": [
    "Y",
    "OK",
    "OKAY",
    "SURE",
    "YUP",
    "YEP",
    "YEAH",
    "AYE",
    "INDEED"
   ],
   "productions": [
    {
     "pattern": "YES",
     "objects": 0,
     "particles": [],
     "action": "V-YES",
     "preaction": null,
     "file": "syntax.zil",
     "line": 705
    }
   ]
  }
 },
 "vocab": {
  "$ID": {
   "word": "$ID",
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
  "$VERIFY": {
   "word": "$VERIFY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "ADDRESS": {
   "word": "ADDRESS",
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
    }
   ]
  },
  "AIM": {
   "word": "AIM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "POINT"
    }
   ]
  },
  "AT": {
   "word": "AT",
   "roles": [
    {
     "kind": "particle",
     "of": "POINT"
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
     "of": "NOD"
    },
    {
     "kind": "particle",
     "of": "RING"
    },
    {
     "kind": "particle",
     "of": "FIRE"
    },
    {
     "kind": "particle",
     "of": "SIT"
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
     "of": "YELL"
    }
   ]
  },
  "TO": {
   "word": "TO",
   "roles": [
    {
     "kind": "particle",
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "ANSWER"
    },
    {
     "kind": "particle",
     "of": "CALL"
    },
    {
     "kind": "particle",
     "of": "EXPLAIN"
    },
    {
     "kind": "particle",
     "of": "FOLLOW"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "HAND"
    },
    {
     "kind": "particle",
     "of": "HOLD"
    },
    {
     "kind": "particle",
     "of": "LISTEN"
    },
    {
     "kind": "particle",
     "of": "NOD"
    },
    {
     "kind": "particle",
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "READ"
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
     "of": "SORRY"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "SWITCH"
    },
    {
     "kind": "particle",
     "of": "HEAD"
    },
    {
     "kind": "particle",
     "of": "YELL"
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
     "of": "POINT"
    },
    {
     "kind": "particle",
     "of": "ATTACK"
    },
    {
     "kind": "particle",
     "of": "CLEAN"
    },
    {
     "kind": "particle",
     "of": "COVER"
    },
    {
     "kind": "particle",
     "of": "DAMAGE"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
    },
    {
     "kind": "particle",
     "of": "FIDDLE"
    },
    {
     "kind": "particle",
     "of": "FILL"
    },
    {
     "kind": "particle",
     "of": "FIX"
    },
    {
     "kind": "particle",
     "of": "MURDER"
    },
    {
     "kind": "particle",
     "of": "CONSOLE"
    },
    {
     "kind": "particle",
     "of": "LOCK"
    },
    {
     "kind": "particle",
     "of": "OPEN"
    },
    {
     "kind": "particle",
     "of": "PLAY"
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
     "of": "SAY"
    },
    {
     "kind": "particle",
     "of": "SHAKE"
    },
    {
     "kind": "particle",
     "of": "FIRE"
    },
    {
     "kind": "particle",
     "of": "SHARE"
    },
    {
     "kind": "particle",
     "of": "PUNCH"
    },
    {
     "kind": "particle",
     "of": "UNLOCK"
    },
    {
     "kind": "particle",
     "of": "HEAD"
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "CHECK": {
   "word": "CHECK",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "TEST": {
   "word": "TEST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CHECK"
    }
   ]
  },
  "ANALYSE": {
   "word": "ANALYSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CHECK"
    }
   ]
  },
  "ANALYZE": {
   "word": "ANALYZE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CHECK"
    }
   ]
  },
  "FOR": {
   "word": "FOR",
   "roles": [
    {
     "kind": "particle",
     "of": "CHECK"
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
     "of": "PAY"
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
  "OUT": {
   "word": "OUT",
   "roles": [
    {
     "kind": "particle",
     "of": "CHECK"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "FIND"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "HAND"
    },
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
     "of": "LOOK"
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
     "of": "HEAD"
    },
    {
     "kind": "direction",
     "of": null
    }
   ]
  },
  "UNDER": {
   "word": "UNDER",
   "roles": [
    {
     "kind": "particle",
     "of": "CHECK"
    },
    {
     "kind": "particle",
     "of": "EXAMINE"
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
     "of": "PLACE"
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
     "of": "CHECK"
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
     "of": "DRAPE"
    },
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "SLEEP"
    },
    {
     "kind": "particle",
     "of": "FIND"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "HANG"
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
     "of": "LIE"
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
     "of": "PUSH"
    },
    {
     "kind": "particle",
     "of": "PLACE"
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
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "HEAD"
    },
    {
     "kind": "particle",
     "of": "YELL"
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
     "of": "CHECK"
    },
    {
     "kind": "particle",
     "of": "ASK"
    },
    {
     "kind": "particle",
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "DINE"
    },
    {
     "kind": "particle",
     "of": "DRAPE"
    },
    {
     "kind": "particle",
     "of": "DROP"
    },
    {
     "kind": "particle",
     "of": "SLEEP"
    },
    {
     "kind": "particle",
     "of": "FIND"
    },
    {
     "kind": "particle",
     "of": "GET"
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
     "of": "LIE"
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
     "of": "PLACE"
    },
    {
     "kind": "particle",
     "of": "RING"
    },
    {
     "kind": "particle",
     "of": "FIRE"
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
     "of": "TAKE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "SWITCH"
    },
    {
     "kind": "particle",
     "of": "USE"
    },
    {
     "kind": "particle",
     "of": "HEAD"
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
    }
   ]
  },
  "REPLY": {
   "word": "REPLY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ANSWER"
    }
   ]
  },
  "RESPOND": {
   "word": "RESPOND",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ANSWER"
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
  "QUERY": {
   "word": "QUERY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ASK"
    }
   ]
  },
  "QUESTION": {
   "word": "QUESTION",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ASK"
    }
   ]
  },
  "INQUIRE": {
   "word": "INQUIRE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ASK"
    }
   ]
  },
  "CONSULT": {
   "word": "CONSULT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ASK"
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
     "of": "EXPLAIN"
    },
    {
     "kind": "particle",
     "of": "READ"
    },
    {
     "kind": "particle",
     "of": "SAY"
    },
    {
     "kind": "particle",
     "of": "TELL"
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
     "kind": "noun",
     "of": "DANGER"
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
  "RAPE": {
   "word": "RAPE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "MOLEST": {
   "word": "MOLEST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACK"
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
  "REPEL": {
   "word": "REPEL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "ATTACK"
    }
   ]
  },
  "OFF": {
   "word": "OFF",
   "roles": [
    {
     "kind": "particle",
     "of": "ATTACK"
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
     "of": "CLOSE"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
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
     "of": "PULL"
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
     "of": "SWITCH"
    },
    {
     "kind": "particle",
     "of": "HEAD"
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
  "CLEAN": {
   "word": "CLEAN",
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
     "kind": "verb-synonym",
     "of": "CLEAN"
    },
    {
     "kind": "noun",
     "of": "TOOTHBRUSH"
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
  "WASH": {
   "word": "WASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "TIDY": {
   "word": "TIDY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "SCRAPE": {
   "word": "SCRAPE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "SCRATCH": {
   "word": "SCRATCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "FRESHEN": {
   "word": "FRESHEN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLEAN"
    }
   ]
  },
  "UP": {
   "word": "UP",
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
     "of": "DAMAGE"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "HAND"
    },
    {
     "kind": "particle",
     "of": "HOLD"
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
     "of": "SEARCH"
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
     "of": "WAKE"
    },
    {
     "kind": "particle",
     "of": "HEAD"
    },
    {
     "kind": "direction",
     "of": null
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
     "kind": "word",
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
    }
   ]
  },
  "SUMMON": {
   "word": "SUMMON",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CALL"
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
  "CLIMB": {
   "word": "CLIMB",
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
     "kind": "verb-synonym",
     "of": "CLIMB"
    }
   ]
  },
  "SCALE": {
   "word": "SCALE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CLIMB"
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
     "of": "DAMAGE"
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
     "of": "LIE"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "PLACE"
    },
    {
     "kind": "particle",
     "of": "SIT"
    },
    {
     "kind": "particle",
     "of": "HEAD"
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
     "of": "CLIMB"
    },
    {
     "kind": "particle",
     "of": "DRAPE"
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
     "of": "POUR"
    },
    {
     "kind": "particle",
     "of": "PLACE"
    },
    {
     "kind": "particle",
     "of": "START"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "HEAD"
    }
   ]
  },
  "THROUGH": {
   "word": "THROUGH",
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
     "of": "PLACE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "HEAD"
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
  "SHUT": {
   "word": "SHUT",
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
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DAMAGE": {
   "word": "DAMAGE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DEMOLISH": {
   "word": "DEMOLISH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
    }
   ]
  },
  "DESTROY": {
   "word": "DESTROY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
    }
   ]
  },
  "BREAK": {
   "word": "BREAK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
    }
   ]
  },
  "SMASH": {
   "word": "SMASH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
    }
   ]
  },
  "CRUSH": {
   "word": "CRUSH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
    }
   ]
  },
  "CRACK": {
   "word": "CRACK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
    }
   ]
  },
  "HURT": {
   "word": "HURT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
    }
   ]
  },
  "WRECK": {
   "word": "WRECK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DAMAGE"
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
  "DINE": {
   "word": "DINE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "DRAPE": {
   "word": "DRAPE",
   "roles": [
    {
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
     "of": "DRAPE"
    },
    {
     "kind": "particle",
     "of": "LOOK"
    },
    {
     "kind": "particle",
     "of": "PLACE"
    },
    {
     "kind": "particle",
     "of": "PUNCH"
    },
    {
     "kind": "particle",
     "of": "SWITCH"
    },
    {
     "kind": "particle",
     "of": "HEAD"
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
    }
   ]
  },
  "SWALLOW": {
   "word": "SWALLOW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "DRINK"
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
  "FROM": {
   "word": "FROM",
   "roles": [
    {
     "kind": "particle",
     "of": "DRINK"
    },
    {
     "kind": "particle",
     "of": "GET"
    },
    {
     "kind": "particle",
     "of": "JUMP"
    },
    {
     "kind": "particle",
     "of": "LEAVE"
    },
    {
     "kind": "particle",
     "of": "POUR"
    },
    {
     "kind": "particle",
     "of": "REMOVE"
    },
    {
     "kind": "particle",
     "of": "TAKE"
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
    }
   ]
  },
  "TASTE": {
   "word": "TASTE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
    }
   ]
  },
  "LICK": {
   "word": "LICK",
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
  "DEVOUR": {
   "word": "DEVOUR",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EAT"
    }
   ]
  },
  "ENJOY": {
   "word": "ENJOY",
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
  "OBSERVE": {
   "word": "OBSERVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "EXPLORE": {
   "word": "EXPLORE",
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
     "kind": "verb-synonym",
     "of": "EXAMINE"
    }
   ]
  },
  "EXPLAIN": {
   "word": "EXPLAIN",
   "roles": [
    {
     "kind": "verb",
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
     "of": "SLEEP-GLOBAL"
    }
   ]
  },
  "FAINT": {
   "word": "FAINT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SLEEP"
    }
   ]
  },
  "DOZE": {
   "word": "DOZE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SLEEP"
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
  "FIDDLE": {
   "word": "FIDDLE",
   "roles": [
    {
     "kind": "verb",
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
  "FLOOD": {
   "word": "FLOOD",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FILL"
    },
    {
     "kind": "adjective",
     "of": "LIGHT-GLOBAL"
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
  "DETECT": {
   "word": "DETECT",
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
  "LOCATE": {
   "word": "LOCATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FIND"
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
  "FIX": {
   "word": "FIX",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "REPAIR": {
   "word": "REPAIR",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FIX"
    }
   ]
  },
  "ADJUST": {
   "word": "ADJUST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FIX"
    }
   ]
  },
  "UNJAM": {
   "word": "UNJAM",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FIX"
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
  "STALK": {
   "word": "STALK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FOLLOW"
    }
   ]
  },
  "FOOTNOTE": {
   "word": "FOOTNOTE",
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
  "RID": {
   "word": "RID",
   "roles": [
    {
     "kind": "particle",
     "of": "GET"
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
     "kind": "voc-adj",
     "of": null
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
  "SELL": {
   "word": "SELL",
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
  "PASS": {
   "word": "PASS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
    }
   ]
  },
  "FEED": {
   "word": "FEED",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HAND"
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
    }
   ]
  },
  "HI": {
   "word": "HI",
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
  "GREETINGS": {
   "word": "GREETINGS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELLO"
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
  "HINT": {
   "word": "HINT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELP"
    }
   ]
  },
  "HINTS": {
   "word": "HINTS",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HELP"
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
  "CONCEAL": {
   "word": "CONCEAL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HIDE"
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
     "of": "HEAD"
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
  "I": {
   "word": "I",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "INVENT": {
   "word": "INVENT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "I"
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
  "DIVE": {
   "word": "DIVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "JUMP"
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
     "of": "PLACE"
    }
   ]
  },
  "MURDER": {
   "word": "MURDER",
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
     "kind": "verb-synonym",
     "of": "MURDER"
    }
   ]
  },
  "STAB": {
   "word": "STAB",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "MURDER"
    }
   ]
  },
  "WASTE": {
   "word": "WASTE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "MURDER"
    }
   ]
  },
  "CONSOLE": {
   "word": "CONSOLE",
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
     "kind": "verb-synonym",
     "of": "CONSOLE"
    }
   ]
  },
  "HUG": {
   "word": "HUG",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CONSOLE"
    }
   ]
  },
  "COMFORT": {
   "word": "COMFORT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CONSOLE"
    }
   ]
  },
  "FLIRT": {
   "word": "FLIRT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "CONSOLE"
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
  "BANG": {
   "word": "BANG",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "KNOCK"
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
  "EXIT": {
   "word": "EXIT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LEAVE"
    }
   ]
  },
  "DEPART": {
   "word": "DEPART",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LEAVE"
    }
   ]
  },
  "WITHDRAW": {
   "word": "WITHDRAW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LEAVE"
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
  "LIGHT": {
   "word": "LIGHT",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "LIGHT-GLOBAL"
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
    }
   ]
  },
  "PEEP": {
   "word": "PEEP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
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
  "PEEK": {
   "word": "PEEK",
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
  "SEE": {
   "word": "SEE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "LOOK"
    }
   ]
  },
  "LOOK-INSIDE": {
   "word": "LOOK-INSIDE",
   "roles": [
    {
     "kind": "verb",
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
  "NOPE": {
   "word": "NOPE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "NO"
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
  "OPEN": {
   "word": "OPEN",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "PANIC": {
   "word": "PANIC",
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
  "PICK": {
   "word": "PICK",
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
  "SPRINKLE": {
   "word": "SPRINKLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "POUR"
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
  "MOVE": {
   "word": "MOVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PULL"
    }
   ]
  },
  "TOGETHER": {
   "word": "TOGETHER",
   "roles": [
    {
     "kind": "particle",
     "of": "PULL"
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
  "PLACE": {
   "word": "PLACE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "PUT": {
   "word": "PUT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLACE"
    }
   ]
  },
  "STUFF": {
   "word": "STUFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLACE"
    }
   ]
  },
  "LAY": {
   "word": "LAY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLACE"
    }
   ]
  },
  "INSERT": {
   "word": "INSERT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLACE"
    }
   ]
  },
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PLACE"
    }
   ]
  },
  "AWAY": {
   "word": "AWAY",
   "roles": [
    {
     "kind": "particle",
     "of": "PLACE"
    },
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "HEAD"
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
  "LOGOUT": {
   "word": "LOGOUT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "QUIT"
    }
   ]
  },
  "LOGOFF": {
   "word": "LOGOFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "QUIT"
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
  "REFUSE": {
   "word": "REFUSE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "RELAX": {
   "word": "RELAX",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "MEDITATE": {
   "word": "MEDITATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RELAX"
    }
   ]
  },
  "REST": {
   "word": "REST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RELAX"
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
  "DOFF": {
   "word": "DOFF",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "REMOVE"
    }
   ]
  },
  "REQUEST": {
   "word": "REQUEST",
   "roles": [
    {
     "kind": "verb",
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
  "RESUME": {
   "word": "RESUME",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RESTORE"
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
  "BLOW": {
   "word": "BLOW",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RING"
    }
   ]
  },
  "BLAST": {
   "word": "BLAST",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RING"
    }
   ]
  },
  "HONK": {
   "word": "HONK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RING"
    }
   ]
  },
  "TOOT": {
   "word": "TOOT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RING"
    }
   ]
  },
  "BEEP": {
   "word": "BEEP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RING"
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
  "TOUCH": {
   "word": "TOUCH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RUB"
    }
   ]
  },
  "FEEL": {
   "word": "FEEL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RUB"
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
  "WHISPER": {
   "word": "WHISPER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "STATE": {
   "word": "STATE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "CHAT": {
   "word": "CHAT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
    }
   ]
  },
  "GAB": {
   "word": "GAB",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SAY"
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
    }
   ]
  },
  "DIG": {
   "word": "DIG",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SEARCH"
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
  "SHAKE": {
   "word": "SHAKE",
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
     "of": "SHAKE"
    }
   ]
  },
  "FIRE": {
   "word": "FIRE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "SHOOT": {
   "word": "SHOOT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "FIRE"
    }
   ]
  },
  "SPRAY": {
   "word": "SPRAY",
   "roles": [
    {
     "kind": "verb-synonym",
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
  "SHARE": {
   "word": "SHARE",
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
  "BESIDE": {
   "word": "BESIDE",
   "roles": [
    {
     "kind": "particle",
     "of": "SIT"
    }
   ]
  },
  "PUNCH": {
   "word": "PUNCH",
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
     "of": "PUNCH"
    }
   ]
  },
  "HIT": {
   "word": "HIT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUNCH"
    }
   ]
  },
  "KICK": {
   "word": "KICK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "PUNCH"
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
  "SMILE": {
   "word": "SMILE",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "GRIN": {
   "word": "GRIN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SMILE"
    }
   ]
  },
  "WINK": {
   "word": "WINK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SMILE"
    }
   ]
  },
  "SORRY": {
   "word": "SORRY",
   "roles": [
    {
     "kind": "verb",
     "of": null
    }
   ]
  },
  "APOLOGIZE": {
   "word": "APOLOGIZE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SORRY"
    }
   ]
  },
  "SOUND": {
   "word": "SOUND",
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
  "START": {
   "word": "START",
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
     "kind": "verb-synonym",
     "of": "START"
    }
   ]
  },
  "PARK": {
   "word": "PARK",
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
     "kind": "verb-synonym",
     "of": "PARK"
    }
   ]
  },
  "SUPERBRIEF": {
   "word": "SUPERBRIEF",
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
  "BATHE": {
   "word": "BATHE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SWIM"
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
  "CARRY": {
   "word": "CARRY",
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
  "SEIZE": {
   "word": "SEIZE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
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
  "PRY": {
   "word": "PRY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "RAISE": {
   "word": "RAISE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
    }
   ]
  },
  "LIFT": {
   "word": "LIFT",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "TAKE"
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
  "HURL": {
   "word": "HURL",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "THROW"
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
  "AGAINST": {
   "word": "AGAINST",
   "roles": [
    {
     "kind": "particle",
     "of": "THROW"
    },
    {
     "kind": "particle",
     "of": "USE"
    }
   ]
  },
  "SWITCH": {
   "word": "SWITCH",
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
     "kind": "verb-synonym",
     "of": "SWITCH"
    },
    {
     "kind": "noun",
     "of": "TURN"
    }
   ]
  },
  "FLIP": {
   "word": "FLIP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SWITCH"
    }
   ]
  },
  "FLICK": {
   "word": "FLICK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SWITCH"
    }
   ]
  },
  "TOGGLE": {
   "word": "TOGGLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "SWITCH"
    }
   ]
  },
  "UNDO": {
   "word": "UNDO",
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
  "UNSCRIPT": {
   "word": "UNSCRIPT",
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
    }
   ]
  },
  "REVISION": {
   "word": "REVISION",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RELEASE"
    }
   ]
  },
  "VERSION": {
   "word": "VERSION",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RELEASE"
    }
   ]
  },
  "VARIATION": {
   "word": "VARIATION",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "RELEASE"
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
  "Z": {
   "word": "Z",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAIT"
    }
   ]
  },
  "STAY": {
   "word": "STAY",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAIT"
    }
   ]
  },
  "PAUSE": {
   "word": "PAUSE",
   "roles": [
    {
     "kind": "verb-synonym",
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
  "ROUSE": {
   "word": "ROUSE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAKE"
    }
   ]
  },
  "SURPRISE": {
   "word": "SURPRISE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAKE"
    }
   ]
  },
  "STARTLE": {
   "word": "STARTLE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "WAKE"
    }
   ]
  },
  "HEAD": {
   "word": "HEAD",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "HEAD"
    }
   ]
  },
  "WALK": {
   "word": "WALK",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "GO": {
   "word": "GO",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "COME": {
   "word": "COME",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "RUN": {
   "word": "RUN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "PROCEED": {
   "word": "PROCEED",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "STEER": {
   "word": "STEER",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "DRIVE": {
   "word": "DRIVE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "RETURN": {
   "word": "RETURN",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "STEP": {
   "word": "STEP",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "APPROACH": {
   "word": "APPROACH",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "HEAD"
    }
   ]
  },
  "AFTER": {
   "word": "AFTER",
   "roles": [
    {
     "kind": "particle",
     "of": "HEAD"
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
  "YEP": {
   "word": "YEP",
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
  "AYE": {
   "word": "AYE",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
    }
   ]
  },
  "INDEED": {
   "word": "INDEED",
   "roles": [
    {
     "kind": "verb-synonym",
     "of": "YES"
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
  "BELOW": {
   "word": "BELOW",
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
  "BENEATH": {
   "word": "BENEATH",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNDER"
    }
   ]
  },
  "TILL": {
   "word": "TILL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "UNTIL"
    }
   ]
  },
  "TOWARD": {
   "word": "TOWARD",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TO"
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
  "OUTSIDE": {
   "word": "OUTSIDE",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "OUT"
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
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
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
  "FORE": {
   "word": "FORE",
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
  "FOREWA": {
   "word": "FOREWA",
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
     "kind": "voc-noun",
     "of": null
    },
    {
     "kind": "noun",
     "of": "INTDIR"
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
     "kind": "noun",
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
  "STARBO": {
   "word": "STARBO",
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
     "kind": "noun",
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
    }
   ]
  },
  "PORT": {
   "word": "PORT",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "WEST"
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
  "DOWNSTAIRS": {
   "word": "DOWNSTAIRS",
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
     "kind": "noun",
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
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "NORTHEAST": {
   "word": "NORTHEAST",
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
     "kind": "noun",
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
     "kind": "noun",
     "of": "INTDIR"
    }
   ]
  },
  "SOUTHEAST": {
   "word": "SOUTHEAST",
   "roles": [
    {
     "kind": "direction-synonym",
     "of": "SE"
    }
   ]
  },
  "BUY": {
   "word": "BUY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ORDER"
    }
   ]
  },
  "PURCHASE": {
   "word": "PURCHASE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ORDER"
    }
   ]
  },
  "WRAP": {
   "word": "WRAP",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "DRAPE"
    }
   ]
  },
  "NOW": {
   "word": "NOW",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "SOON": {
   "word": "SOON",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "THERE": {
   "word": "THERE",
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
  "BACK": {
   "word": "BACK",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "ANYWAY": {
   "word": "ANYWAY",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "OH": {
   "word": "OH",
   "roles": [
    {
     "kind": "buzzword",
     "of": null
    }
   ]
  },
  "FROB": {
   "word": "FROB",
   "roles": [
    {
     "kind": "voc-adj",
     "of": null
    },
    {
     "kind": "noun",
     "of": "RED-FROB"
    },
    {
     "kind": "noun",
     "of": "GREEN-FROB"
    },
    {
     "kind": "noun",
     "of": "BIG-BLUE-FROB"
    },
    {
     "kind": "noun",
     "of": "SMALL-BLUE-FROB"
    }
   ]
  },
  "L.G": {
   "word": "L.G",
   "roles": [
    {
     "kind": "noun",
     "of": "LOCAL-GLOBALS"
    }
   ]
  },
  "FRUSTRATION": {
   "word": "FRUSTRATION",
   "roles": [
    {
     "kind": "noun",
     "of": "FRUSTATION"
    }
   ]
  },
  "PROBLEM": {
   "word": "PROBLEM",
   "roles": [
    {
     "kind": "noun",
     "of": "FRUSTATION"
    }
   ]
  },
  "PUZZLE": {
   "word": "PUZZLE",
   "roles": [
    {
     "kind": "noun",
     "of": "FRUSTATION"
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
  "STAIRWAY": {
   "word": "STAIRWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "STAIRS"
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
  "TURNS": {
   "word": "TURNS",
   "roles": [
    {
     "kind": "noun",
     "of": "TURN"
    }
   ]
  },
  "MINUTE": {
   "word": "MINUTE",
   "roles": [
    {
     "kind": "noun",
     "of": "TURN"
    }
   ]
  },
  "MINUTES": {
   "word": "MINUTES",
   "roles": [
    {
     "kind": "noun",
     "of": "TURN"
    }
   ]
  },
  "INT.NUM": {
   "word": "INT.NUM",
   "roles": [
    {
     "kind": "adjective",
     "of": "TURN"
    },
    {
     "kind": "noun",
     "of": "INTNUM"
    }
   ]
  },
  "FULL": {
   "word": "FULL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TURN"
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
  "THIS": {
   "word": "THIS",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "FUCKER": {
   "word": "FUCKER",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
    }
   ]
  },
  "SUCKER": {
   "word": "SUCKER",
   "roles": [
    {
     "kind": "noun",
     "of": "IT"
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
  "GROUND": {
   "word": "GROUND",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOOR"
    }
   ]
  },
  "CARPET": {
   "word": "CARPET",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOOR"
    }
   ]
  },
  "RUG": {
   "word": "RUG",
   "roles": [
    {
     "kind": "noun",
     "of": "FLOOR"
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
  "THREAT": {
   "word": "THREAT",
   "roles": [
    {
     "kind": "noun",
     "of": "DANGER"
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
  "BRICK": {
   "word": "BRICK",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL"
    },
    {
     "kind": "adjective",
     "of": "WALL"
    }
   ]
  },
  "BRICKS": {
   "word": "BRICKS",
   "roles": [
    {
     "kind": "noun",
     "of": "WALL"
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
  "AREA": {
   "word": "AREA",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "ROOM": {
   "word": "ROOM",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-HERE"
    }
   ]
  },
  "CHAIR": {
   "word": "CHAIR",
   "roles": [
    {
     "kind": "noun",
     "of": "CHAIR"
    }
   ]
  },
  "SEAT": {
   "word": "SEAT",
   "roles": [
    {
     "kind": "noun",
     "of": "CHAIR"
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
  "BENCH": {
   "word": "BENCH",
   "roles": [
    {
     "kind": "noun",
     "of": "CHAIR"
    }
   ]
  },
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TABLE-RANDOM"
    }
   ]
  },
  "DESK": {
   "word": "DESK",
   "roles": [
    {
     "kind": "noun",
     "of": "TABLE-RANDOM"
    }
   ]
  },
  "LIGHTS": {
   "word": "LIGHTS",
   "roles": [
    {
     "kind": "noun",
     "of": "LIGHT-GLOBAL"
    }
   ]
  },
  "LAMP": {
   "word": "LAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "LIGHT-GLOBAL"
    }
   ]
  },
  "MOONLIGHT": {
   "word": "MOONLIGHT",
   "roles": [
    {
     "kind": "noun",
     "of": "LIGHT-GLOBAL"
    }
   ]
  },
  "MOON": {
   "word": "MOON",
   "roles": [
    {
     "kind": "adjective",
     "of": "LIGHT-GLOBAL"
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
  "FACE": {
   "word": "FACE",
   "roles": [
    {
     "kind": "noun",
     "of": "HEAD"
    }
   ]
  },
  "EYE": {
   "word": "EYE",
   "roles": [
    {
     "kind": "noun",
     "of": "EYES"
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
  "TEETH": {
   "word": "TEETH",
   "roles": [
    {
     "kind": "noun",
     "of": "TEETH"
    }
   ]
  },
  "EAR": {
   "word": "EAR",
   "roles": [
    {
     "kind": "noun",
     "of": "EARS"
    }
   ]
  },
  "EARS": {
   "word": "EARS",
   "roles": [
    {
     "kind": "noun",
     "of": "EARS"
    }
   ]
  },
  "PLANET": {
   "word": "PLANET",
   "roles": [
    {
     "kind": "noun",
     "of": "THIRD-PLANET"
    }
   ]
  },
  "EARTH": {
   "word": "EARTH",
   "roles": [
    {
     "kind": "noun",
     "of": "THIRD-PLANET"
    }
   ]
  },
  "THIRD": {
   "word": "THIRD",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIRD-PLANET"
    }
   ]
  },
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIRD-PLANET"
    },
    {
     "kind": "adjective",
     "of": "BIG-BLUE-FROB"
    },
    {
     "kind": "adjective",
     "of": "SMALL-BLUE-FROB"
    }
   ]
  },
  "BLUE-GREEN": {
   "word": "BLUE-GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIRD-PLANET"
    }
   ]
  },
  "GREEN": {
   "word": "GREEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIRD-PLANET"
    },
    {
     "kind": "adjective",
     "of": "GREEN-FROB"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "THIRD-PLANET"
    },
    {
     "kind": "adjective",
     "of": "SMALL-BLUE-FROB"
    }
   ]
  },
  "OBJECT": {
   "word": "OBJECT",
   "roles": [
    {
     "kind": "noun",
     "of": "OBJECT-OF-GAME"
    }
   ]
  },
  "GAME": {
   "word": "GAME",
   "roles": [
    {
     "kind": "noun",
     "of": "OBJECT-OF-GAME"
    },
    {
     "kind": "noun",
     "of": "GAME"
    }
   ]
  },
  "GOAL": {
   "word": "GOAL",
   "roles": [
    {
     "kind": "noun",
     "of": "OBJECT-OF-GAME"
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
  "HATCH": {
   "word": "HATCH",
   "roles": [
    {
     "kind": "noun",
     "of": "HATCH"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "HATCH"
    },
    {
     "kind": "adjective",
     "of": "HATCH"
    },
    {
     "kind": "noun",
     "of": "WINDOW"
    }
   ]
  },
  "HER": {
   "word": "HER",
   "roles": [
    {
     "kind": "noun",
     "of": "HER"
    }
   ]
  },
  "MADAM": {
   "word": "MADAM",
   "roles": [
    {
     "kind": "noun",
     "of": "HER"
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
  "SIR": {
   "word": "SIR",
   "roles": [
    {
     "kind": "noun",
     "of": "HIM"
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
  "SELF": {
   "word": "SELF",
   "roles": [
    {
     "kind": "noun",
     "of": "PLAYER"
    }
   ]
  },
  "MARVIN": {
   "word": "MARVIN",
   "roles": [
    {
     "kind": "noun",
     "of": "MARVIN"
    }
   ]
  },
  "MARV": {
   "word": "MARV",
   "roles": [
    {
     "kind": "noun",
     "of": "MARVIN"
    }
   ]
  },
  "ROBOT": {
   "word": "ROBOT",
   "roles": [
    {
     "kind": "noun",
     "of": "MARVIN"
    }
   ]
  },
  "ANDROID": {
   "word": "ANDROID",
   "roles": [
    {
     "kind": "noun",
     "of": "MARVIN"
    }
   ]
  },
  "DEPRESSED": {
   "word": "DEPRESSED",
   "roles": [
    {
     "kind": "adjective",
     "of": "MARVIN"
    }
   ]
  },
  "PARANOID": {
   "word": "PARANOID",
   "roles": [
    {
     "kind": "adjective",
     "of": "MARVIN"
    }
   ]
  },
  "FORD": {
   "word": "FORD",
   "roles": [
    {
     "kind": "noun",
     "of": "FORD"
    },
    {
     "kind": "adjective",
     "of": "FORD"
    }
   ]
  },
  "PREFECT": {
   "word": "PREFECT",
   "roles": [
    {
     "kind": "noun",
     "of": "FORD"
    }
   ]
  },
  "MR": {
   "word": "MR",
   "roles": [
    {
     "kind": "adjective",
     "of": "FORD"
    },
    {
     "kind": "adjective",
     "of": "ZAPHOD"
    }
   ]
  },
  "BEEBLEBROX": {
   "word": "BEEBLEBROX",
   "roles": [
    {
     "kind": "noun",
     "of": "ZAPHOD"
    }
   ]
  },
  "ZAPHOD": {
   "word": "ZAPHOD",
   "roles": [
    {
     "kind": "noun",
     "of": "ZAPHOD"
    },
    {
     "kind": "adjective",
     "of": "ZAPHOD"
    }
   ]
  },
  "PRESIDENT": {
   "word": "PRESIDENT",
   "roles": [
    {
     "kind": "noun",
     "of": "ZAPHOD"
    },
    {
     "kind": "adjective",
     "of": "ZAPHOD"
    }
   ]
  },
  "TRILLIAN": {
   "word": "TRILLIAN",
   "roles": [
    {
     "kind": "noun",
     "of": "TRILLIAN"
    }
   ]
  },
  "MCMILLAN": {
   "word": "MCMILLAN",
   "roles": [
    {
     "kind": "noun",
     "of": "TRILLIAN"
    }
   ]
  },
  "WOMAN": {
   "word": "WOMAN",
   "roles": [
    {
     "kind": "noun",
     "of": "TRILLIAN"
    }
   ]
  },
  "TRICIA": {
   "word": "TRICIA",
   "roles": [
    {
     "kind": "noun",
     "of": "TRILLIAN"
    },
    {
     "kind": "adjective",
     "of": "TRILLIAN"
    }
   ]
  },
  "DARK-HAIR": {
   "word": "DARK-HAIR",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRILLIAN"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRILLIAN"
    }
   ]
  },
  "HAIRED": {
   "word": "HAIRED",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRILLIAN"
    }
   ]
  },
  "MS": {
   "word": "MS",
   "roles": [
    {
     "kind": "adjective",
     "of": "TRILLIAN"
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
  "WINDSHIELD": {
   "word": "WINDSHIELD",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    }
   ]
  },
  "WINDSCREEN": {
   "word": "WINDSCREEN",
   "roles": [
    {
     "kind": "noun",
     "of": "WINDOW"
    }
   ]
  },
  "BEERMAT": {
   "word": "BEERMAT",
   "roles": [
    {
     "kind": "noun",
     "of": "PUB-FURNISHINGS"
    }
   ]
  },
  "GLASSES": {
   "word": "GLASSES",
   "roles": [
    {
     "kind": "noun",
     "of": "PUB-FURNISHINGS"
    }
   ]
  },
  "BOTTLE": {
   "word": "BOTTLE",
   "roles": [
    {
     "kind": "noun",
     "of": "PUB-FURNISHINGS"
    }
   ]
  },
  "GLASS": {
   "word": "GLASS",
   "roles": [
    {
     "kind": "noun",
     "of": "PUB-FURNISHINGS"
    }
   ]
  },
  "USUAL": {
   "word": "USUAL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PUB-FURNISHINGS"
    }
   ]
  },
  "SOGGY": {
   "word": "SOGGY",
   "roles": [
    {
     "kind": "adjective",
     "of": "PUB-FURNISHINGS"
    }
   ]
  },
  "LOTS": {
   "word": "LOTS",
   "roles": [
    {
     "kind": "noun",
     "of": "BEER"
    }
   ]
  },
  "BITTER": {
   "word": "BITTER",
   "roles": [
    {
     "kind": "noun",
     "of": "BEER"
    }
   ]
  },
  "PINT": {
   "word": "PINT",
   "roles": [
    {
     "kind": "noun",
     "of": "BEER"
    }
   ]
  },
  "BEER": {
   "word": "BEER",
   "roles": [
    {
     "kind": "noun",
     "of": "BEER"
    }
   ]
  },
  "PLATE": {
   "word": "PLATE",
   "roles": [
    {
     "kind": "noun",
     "of": "SANDWICH"
    },
    {
     "kind": "noun",
     "of": "DINNER"
    }
   ]
  },
  "SANDWICH": {
   "word": "SANDWICH",
   "roles": [
    {
     "kind": "noun",
     "of": "SANDWICH"
    }
   ]
  },
  "CHEESE": {
   "word": "CHEESE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SANDWICH"
    }
   ]
  },
  "UNINVITING": {
   "word": "UNINVITING",
   "roles": [
    {
     "kind": "adjective",
     "of": "SANDWICH"
    }
   ]
  },
  "SCREWDRIV": {
   "word": "SCREWDRIV",
   "roles": [
    {
     "kind": "noun",
     "of": "SCREWDRIVER"
    }
   ]
  },
  "TOOL": {
   "word": "TOOL",
   "roles": [
    {
     "kind": "noun",
     "of": "SCREWDRIVER"
    },
    {
     "kind": "noun",
     "of": "TOOTHBRUSH"
    }
   ]
  },
  "TOOLS": {
   "word": "TOOLS",
   "roles": [
    {
     "kind": "noun",
     "of": "SCREWDRIVER"
    },
    {
     "kind": "noun",
     "of": "TOOTHBRUSH"
    }
   ]
  },
  "FLATHEAD": {
   "word": "FLATHEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCREWDRIVER"
    }
   ]
  },
  "PROPER": {
   "word": "PROPER",
   "roles": [
    {
     "kind": "adjective",
     "of": "SCREWDRIVER"
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
  "TOOTH": {
   "word": "TOOTH",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOOTHBRUSH"
    }
   ]
  },
  "MY": {
   "word": "MY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TOOTHBRUSH"
    },
    {
     "kind": "adjective",
     "of": "GOWN"
    },
    {
     "kind": "adjective",
     "of": "DINNER"
    }
   ]
  },
  "GOWN": {
   "word": "GOWN",
   "roles": [
    {
     "kind": "noun",
     "of": "GOWN"
    }
   ]
  },
  "POCKET": {
   "word": "POCKET",
   "roles": [
    {
     "kind": "noun",
     "of": "GOWN"
    }
   ]
  },
  "ROBE": {
   "word": "ROBE",
   "roles": [
    {
     "kind": "noun",
     "of": "GOWN"
    }
   ]
  },
  "LOOP": {
   "word": "LOOP",
   "roles": [
    {
     "kind": "noun",
     "of": "GOWN"
    }
   ]
  },
  "DRESSING": {
   "word": "DRESSING",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOWN"
    }
   ]
  },
  "TATTY": {
   "word": "TATTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOWN"
    }
   ]
  },
  "FADED": {
   "word": "FADED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOWN"
    }
   ]
  },
  "BATTERED": {
   "word": "BATTERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "GOWN"
    },
    {
     "kind": "adjective",
     "of": "SATCHEL"
    }
   ]
  },
  "SLEEVE": {
   "word": "SLEEVE",
   "roles": [
    {
     "kind": "noun",
     "of": "SLEEVES"
    }
   ]
  },
  "THING": {
   "word": "THING",
   "roles": [
    {
     "kind": "noun",
     "of": "THING"
    }
   ]
  },
  "GIFT": {
   "word": "GIFT",
   "roles": [
    {
     "kind": "noun",
     "of": "THING"
    }
   ]
  },
  "AUNT'S": {
   "word": "AUNT'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "THING"
    }
   ]
  },
  "COPY": {
   "word": "COPY",
   "roles": [
    {
     "kind": "noun",
     "of": "GUIDE"
    }
   ]
  },
  "GUIDE": {
   "word": "GUIDE",
   "roles": [
    {
     "kind": "noun",
     "of": "GUIDE"
    }
   ]
  },
  "HITCHHIKER'S": {
   "word": "HITCHHIKER'S",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUIDE"
    }
   ]
  },
  "SUB-ETHA": {
   "word": "SUB-ETHA",
   "roles": [
    {
     "kind": "adjective",
     "of": "GUIDE"
    }
   ]
  },
  "FISH": {
   "word": "FISH",
   "roles": [
    {
     "kind": "noun",
     "of": "BABEL-FISH"
    }
   ]
  },
  "BABEL": {
   "word": "BABEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "BABEL-FISH"
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
  "TOWELS": {
   "word": "TOWELS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOWEL"
    }
   ]
  },
  "SATCHEL": {
   "word": "SATCHEL",
   "roles": [
    {
     "kind": "noun",
     "of": "SATCHEL"
    }
   ]
  },
  "LEATHER": {
   "word": "LEATHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "SATCHEL"
    }
   ]
  },
  "BULKY": {
   "word": "BULKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SATCHEL"
    }
   ]
  },
  "HEART": {
   "word": "HEART",
   "roles": [
    {
     "kind": "noun",
     "of": "HEART-OF-GOLD"
    }
   ]
  },
  "GOLD": {
   "word": "GOLD",
   "roles": [
    {
     "kind": "noun",
     "of": "HEART-OF-GOLD"
    }
   ]
  },
  "SHIP": {
   "word": "SHIP",
   "roles": [
    {
     "kind": "noun",
     "of": "HEART-OF-GOLD"
    }
   ]
  },
  "SPACESHIP": {
   "word": "SPACESHIP",
   "roles": [
    {
     "kind": "noun",
     "of": "HEART-OF-GOLD"
    }
   ]
  },
  "SPACE": {
   "word": "SPACE",
   "roles": [
    {
     "kind": "adjective",
     "of": "HEART-OF-GOLD"
    }
   ]
  },
  "INCREDIBLE": {
   "word": "INCREDIBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "HEART-OF-GOLD"
    }
   ]
  },
  "NEW": {
   "word": "NEW",
   "roles": [
    {
     "kind": "adjective",
     "of": "HEART-OF-GOLD"
    }
   ]
  },
  "MILLIWAYS": {
   "word": "MILLIWAYS",
   "roles": [
    {
     "kind": "noun",
     "of": "GAME"
    }
   ]
  },
  "DINNER": {
   "word": "DINNER",
   "roles": [
    {
     "kind": "noun",
     "of": "DINNER"
    }
   ]
  },
  "FOOD": {
   "word": "FOOD",
   "roles": [
    {
     "kind": "noun",
     "of": "DINNER"
    }
   ]
  },
  "DISHES": {
   "word": "DISHES",
   "roles": [
    {
     "kind": "noun",
     "of": "DINNER"
    }
   ]
  },
  "COVERED": {
   "word": "COVERED",
   "roles": [
    {
     "kind": "adjective",
     "of": "DINNER"
    }
   ]
  },
  "FROBS": {
   "word": "FROBS",
   "roles": [
    {
     "kind": "noun",
     "of": "RED-FROB"
    },
    {
     "kind": "noun",
     "of": "GREEN-FROB"
    },
    {
     "kind": "noun",
     "of": "BIG-BLUE-FROB"
    },
    {
     "kind": "noun",
     "of": "SMALL-BLUE-FROB"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "RED-FROB"
    }
   ]
  },
  "BIG": {
   "word": "BIG",
   "roles": [
    {
     "kind": "adjective",
     "of": "BIG-BLUE-FROB"
    }
   ]
  }
 },
 "files": [
  "defs.zil",
  "global.zil",
  "h2.zil",
  "macros.zil",
  "magrathea.zil",
  "misc.zil",
  "people.zil",
  "places.zil",
  "syntax.zil",
  "things.zil",
  "verbs.zil"
 ]
};
