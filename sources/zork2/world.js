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
  "LAND",
  "CROSS"
 ],
 "rooms": {
  "INSIDE-BARROW": {
   "name": "INSIDE-BARROW",
   "file": "2dungeon.zil",
   "line": 178,
   "endLine": 189,
   "desc": "Inside the Barrow",
   "ldesc": "You are inside an ancient barrow hidden deep within a dark forest.\nThe barrow opens into a narrow tunnel at its southern end. You can\nsee a faint glow at the far end.",
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
     "to": "NARROW-TUNNEL",
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
     "message": "You may not recall, but when you entered, the door of the barrow\nshut behind you. There is no way out.",
     "dir": "OUT"
    }
   ],
   "contents": [
    "LAMP",
    "SWORD"
   ],
   "source": "<ROOM INSIDE-BARROW\n      (IN ROOMS)\n      (LDESC\n\"You are inside an ancient barrow hidden deep within a dark forest.\nThe barrow opens into a narrow tunnel at its southern end. You can\nsee a faint glow at the far end.\")\n      (DESC \"Inside the Barrow\")\n      (FLAGS RLANDBIT ONBIT)\n      (SOUTH TO NARROW-TUNNEL)\n      (OUT\n\"You may not recall, but when you entered, the door of the barrow\nshut behind you. There is no way out.\")>",
   "referencedBy": [
    "DEAD-PALANTIR",
    "RANDOMIZE-OBJECTS",
    "GO",
    "MUNG-ROOM"
   ]
  },
  "NARROW-TUNNEL": {
   "name": "NARROW-TUNNEL",
   "file": "2dungeon.zil",
   "line": 191,
   "endLine": 206,
   "desc": "Narrow Tunnel",
   "ldesc": "You are standing at the southern end of a narrow tunnel where it opens\ninto a wide cavern. The cavern is dimly illuminated by phosphorescent\nmosses clinging to its high ceiling. A deep ravine winds through the\ncavern, with a small stream at the bottom. The walls of the ravine are\nsteep and crumbly. A foot bridge crosses the ravine to the south.",
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
    "BRIDGE",
    "CHASM",
    "STREAM",
    "MOSS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "INSIDE-BARROW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "FOOT-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "FOOT-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "CROSS"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "As you start down, you slip on the crumbling\nrocks and pull back, narrowly averting a fatal fall.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM NARROW-TUNNEL\n      (IN ROOMS)\n      (LDESC\n\"You are standing at the southern end of a narrow tunnel where it opens\ninto a wide cavern. The cavern is dimly illuminated by phosphorescent\nmosses clinging to its high ceiling. A deep ravine winds through the\ncavern, with a small stream at the bottom. The walls of the ravine are\nsteep and crumbly. A foot bridge crosses the ravine to the south.\")\n      (DESC \"Narrow Tunnel\")\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO INSIDE-BARROW)\n      (SOUTH TO FOOT-BRIDGE)\n      (CROSS TO FOOT-BRIDGE)\n      (DOWN \"As you start down, you slip on the crumbling\nrocks and pull back, narrowly averting a fatal fall.\")\n      (GLOBAL BRIDGE CHASM STREAM MOSS)>",
   "referencedBy": []
  },
  "FOOT-BRIDGE": {
   "name": "FOOT-BRIDGE",
   "file": "2dungeon.zil",
   "line": 208,
   "endLine": 219,
   "desc": "Foot Bridge",
   "ldesc": "You are standing on a crude but sturdy wooden foot bridge crossing a\ndeep ravine. The path runs north and south from here.",
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
    "BRIDGE",
    "CHASM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "NARROW-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GREAT-CAVERN",
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
     "message": "The drop would be fatal.",
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You'll have to specify a direction.",
     "dir": "CROSS"
    }
   ],
   "contents": [],
   "source": "<ROOM FOOT-BRIDGE\n      (IN ROOMS)\n      (LDESC\n\"You are standing on a crude but sturdy wooden foot bridge crossing a\ndeep ravine. The path runs north and south from here.\")\n      (DESC \"Foot Bridge\")\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO NARROW-TUNNEL)\n      (SOUTH TO GREAT-CAVERN)\n      (DOWN \"The drop would be fatal.\")\n      (CROSS \"You'll have to specify a direction.\")\n      (GLOBAL BRIDGE CHASM)>",
   "referencedBy": []
  },
  "GREAT-CAVERN": {
   "name": "GREAT-CAVERN",
   "file": "2dungeon.zil",
   "line": 221,
   "endLine": 234,
   "desc": "Great Cavern",
   "ldesc": "This is the center of the great cavern, carved out of the limestone.\nStalactites and stalagmites of many sizes are everywhere. The room glows\nwith dim light provided by phosphorescent moss, and weird shadows move all\naround you. A narrow path winds southwest among the stalagmites, and another\nleads northeast.",
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
    "MOSS"
   ],
   "pseudo": [
    "STALAGMITE",
    "STALA-PSEUDO",
    "STALACTITE",
    "STALA-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "FOOT-BRIDGE",
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
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM GREAT-CAVERN\n      (IN ROOMS)\n      (LDESC\n\"This is the center of the great cavern, carved out of the limestone.\nStalactites and stalagmites of many sizes are everywhere. The room glows\nwith dim light provided by phosphorescent moss, and weird shadows move all\naround you. A narrow path winds southwest among the stalagmites, and another\nleads northeast.\")\n      (DESC \"Great Cavern\")\n      (FLAGS RLANDBIT ONBIT)\n      (NE TO FOOT-BRIDGE)\n      (SW TO SHALLOW-FORD)\n      (GLOBAL MOSS)\n      (PSEUDO \"STALAGMITE\" STALA-PSEUDO \"STALACTITE\" STALA-PSEUDO)>",
   "referencedBy": []
  },
  "SHALLOW-FORD": {
   "name": "SHALLOW-FORD",
   "file": "2dungeon.zil",
   "line": 236,
   "endLine": 248,
   "desc": "Shallow Ford",
   "ldesc": "You are at the southern edge of a great cavern. To the south across a\nshallow ford is a dark tunnel which looks like it was once\nenlarged and smoothed. To the north a narrow path winds among\nstalagmites. Dim light illuminates the cavern.",
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
    "GLOBAL-WATER"
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
     "dir": "SOUTH"
    },
    {
     "to": "DARK-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "CROSS"
    }
   ],
   "contents": [],
   "source": "<ROOM SHALLOW-FORD\n      (IN ROOMS)\n      (LDESC\n\"You are at the southern edge of a great cavern. To the south across a\nshallow ford is a dark tunnel which looks like it was once\nenlarged and smoothed. To the north a narrow path winds among\nstalagmites. Dim light illuminates the cavern.\")\n      (DESC \"Shallow Ford\")\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO GREAT-CAVERN)\n      (SOUTH TO DARK-TUNNEL)\n      (CROSS TO DARK-TUNNEL)\n      (GLOBAL GLOBAL-WATER)>",
   "referencedBy": []
  },
  "DARK-TUNNEL": {
   "name": "DARK-TUNNEL",
   "file": "2dungeon.zil",
   "line": 250,
   "endLine": 261,
   "desc": "Dark Tunnel",
   "ldesc": "This is a dark tunnel with dim light to the northeast. The\ntunnel is smooth but dusty and filled with twigs and leaves, debris\nwhich becomes deeper as the tunnel branches into a wide corridor leading\nsouthwest and a narrower one leading southeast.",
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
     "to": "GARDEN-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "STREAM-PATH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM DARK-TUNNEL\n      (IN ROOMS)\n      (LDESC\n\"This is a dark tunnel with dim light to the northeast. The\ntunnel is smooth but dusty and filled with twigs and leaves, debris\nwhich becomes deeper as the tunnel branches into a wide corridor leading\nsouthwest and a narrower one leading southeast.\")\n      (DESC \"Dark Tunnel\")\n      (FLAGS RLANDBIT)\n      (NE TO SHALLOW-FORD)\n      (SE TO GARDEN-NORTH)\n      (SW TO STREAM-PATH)>",
   "referencedBy": []
  },
  "GARDEN-NORTH": {
   "name": "GARDEN-NORTH",
   "file": "2dungeon.zil",
   "line": 281,
   "endLine": 296,
   "desc": "North End of Garden",
   "ldesc": "This is the northern end of a formal garden. Hedges hide\nthe cavern walls, and if you don't look up, the illusion is of a cloudy\nday outside. The light comes from a large growth of glowing mosses on the\nroof of the cave. A break in the hedge is almost overgrown to the north.\nA carefully manicured path leads south. In the center of a rosebed is a\nsmall open structure, painted white. It appears to be a gazebo.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GARDEN-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-UNICORN",
    "GAZEBO",
    "MOSS",
    "ROSE-BUSH"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GAZEBO-ROOM",
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
     "to": "FORMAL-GARDEN",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM GARDEN-NORTH\n      (IN ROOMS)\n      (LDESC\n\"This is the northern end of a formal garden. Hedges hide\nthe cavern walls, and if you don't look up, the illusion is of a cloudy\nday outside. The light comes from a large growth of glowing mosses on the\nroof of the cave. A break in the hedge is almost overgrown to the north.\nA carefully manicured path leads south. In the center of a rosebed is a\nsmall open structure, painted white. It appears to be a gazebo.\")\n      (DESC \"North End of Garden\")\n      (FLAGS RLANDBIT ONBIT)\n      (IN TO GAZEBO-ROOM)\n      (NORTH TO DARK-TUNNEL)\n      (SOUTH TO FORMAL-GARDEN)\n      (ACTION GARDEN-ROOM-FCN)\n      (GLOBAL GLOBAL-UNICORN GAZEBO MOSS ROSE-BUSH)>",
   "referencedBy": [
    "I-GARDEN",
    "GLOBAL-UNICORN-FCN",
    "GAZEBO-FCN",
    "PRINCESS-FCN",
    "I-PRINCESS",
    "I-UNICORN"
   ]
  },
  "GAZEBO-ROOM": {
   "name": "GAZEBO-ROOM",
   "file": "2dungeon.zil",
   "line": 298,
   "endLine": 306,
   "desc": "Gazebo",
   "ldesc": "This is a gazebo in the midst of a formal garden. It is cool and\nrestful here. A tea table adorns the center of the gazebo.",
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
    "GLOBAL-UNICORN",
    "GAZEBO"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "GARDEN-NORTH",
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
   "source": "<ROOM GAZEBO-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is a gazebo in the midst of a formal garden. It is cool and\nrestful here. A tea table adorns the center of the gazebo.\")\n      (DESC \"Gazebo\")\n      (FLAGS RLANDBIT ONBIT)\n      (OUT TO GARDEN-NORTH)\n      (GLOBAL GLOBAL-UNICORN GAZEBO)>",
   "referencedBy": [
    "I-GARDEN",
    "GAZEBO-FCN",
    "PRINCESS-FCN",
    "I-PRINCESS",
    "I-UNICORN",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "FORMAL-GARDEN": {
   "name": "FORMAL-GARDEN",
   "file": "2dungeon.zil",
   "line": 308,
   "endLine": 323,
   "desc": "Formal Garden",
   "ldesc": "This is the middle part of a formal garden. Hedges hide the cavern\nwalls and a dim illumination comes from mosses far above.\nThe path is of small crushed white stones. It winds among bushes and\nflower beds from south to north. To the north a small structure\ncan be seen. To the south are peculiarly shaped bushes.\nThere is a small gap in the hedges to the west.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GARDEN-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-UNICORN",
    "MOSS"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "STREAM-PATH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "GARDEN-NORTH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "TOPIARY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM FORMAL-GARDEN\n      (IN ROOMS)\n      (LDESC\n\"This is the middle part of a formal garden. Hedges hide the cavern\nwalls and a dim illumination comes from mosses far above.\nThe path is of small crushed white stones. It winds among bushes and\nflower beds from south to north. To the north a small structure\ncan be seen. To the south are peculiarly shaped bushes.\nThere is a small gap in the hedges to the west.\")\n      (DESC \"Formal Garden\")\n      (FLAGS RLANDBIT ONBIT)\n      (WEST TO STREAM-PATH)\n      (NORTH TO GARDEN-NORTH)\n      (SOUTH TO TOPIARY-ROOM)\n      (ACTION GARDEN-ROOM-FCN)\n      (GLOBAL GLOBAL-UNICORN MOSS)>",
   "referencedBy": [
    "I-GARDEN"
   ]
  },
  "TOPIARY-ROOM": {
   "name": "TOPIARY-ROOM",
   "file": "2dungeon.zil",
   "line": 325,
   "endLine": 340,
   "desc": "Topiary",
   "ldesc": "This is the southern end of a formal garden. Hedges hide the cavern\nwalls and mosses provide dim illumination. Fantastically shaped hedges\nand bushes are arrayed with geometric precision. They have not recently\nbeen clipped, but you can discern creatures in the shapes of the bushes:\nThere is a dragon, a unicorn, a great serpent, a huge misshapen dog, and\nseveral human figures. On the west side of the garden the path\nleads through a rose arbor into a tunnel.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GARDEN-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "GLOBAL-UNICORN",
    "MOSS",
    "ROSE-BUSH"
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
   "source": "<ROOM TOPIARY-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is the southern end of a formal garden. Hedges hide the cavern\nwalls and mosses provide dim illumination. Fantastically shaped hedges\nand bushes are arrayed with geometric precision. They have not recently\nbeen clipped, but you can discern creatures in the shapes of the bushes:\nThere is a dragon, a unicorn, a great serpent, a huge misshapen dog, and\nseveral human figures. On the west side of the garden the path\nleads through a rose arbor into a tunnel.\")\n      (DESC \"Topiary\")\n      (FLAGS RLANDBIT ONBIT)\n      (WEST TO CAROUSEL-ROOM)\n      (NORTH TO FORMAL-GARDEN)\n      (ACTION GARDEN-ROOM-FCN)\n      (GLOBAL GLOBAL-UNICORN MOSS ROSE-BUSH)>",
   "referencedBy": [
    "I-GARDEN"
   ]
  },
  "STREAM-PATH": {
   "name": "STREAM-PATH",
   "file": "2dungeon.zil",
   "line": 355,
   "endLine": 369,
   "desc": "Path Near Stream",
   "ldesc": "The path follows the south edge of a deep ravine and heads northeast.\nA tunnel heads southwest, narrowing to a rather tight crawl. A\nfaint whirring sound can be heard in that direction. On the east is a\nruined archway choked with vegetation.",
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
    "CHASM",
    "STREAM"
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
     "dir": "EAST"
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
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "MARBLE-HALL",
     "kind": "conditional",
     "condition": "SECRET-DOOR",
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
     "message": "The ravine is extremely deep. You would never make it.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM STREAM-PATH\n      (IN ROOMS)\n      (LDESC\n\"The path follows the south edge of a deep ravine and heads northeast.\nA tunnel heads southwest, narrowing to a rather tight crawl. A\nfaint whirring sound can be heard in that direction. On the east is a\nruined archway choked with vegetation.\")\n\t(DESC \"Path Near Stream\")\n\t(FLAGS RLANDBIT)\n\t(EAST TO FORMAL-GARDEN)\n\t(NE TO DARK-TUNNEL)\n\t(SW TO CAROUSEL-ROOM)\n\t(WEST TO MARBLE-HALL IF SECRET-DOOR)\n\t(DOWN \"The ravine is extremely deep. You would never make it.\")\n\t(GLOBAL BRIDGE CHASM STREAM)>",
   "referencedBy": [
    "I-PRINCESS"
   ]
  },
  "MARBLE-HALL": {
   "name": "MARBLE-HALL",
   "file": "2dungeon.zil",
   "line": 371,
   "endLine": 384,
   "desc": "Marble Hall",
   "ldesc": "This is an arched hall of fine marble. The hall stops abruptly\nto the north at a ford across a stream, where the marble is cracked and\nbroken. Perhaps a flood or collapse of the cave was responsible. To\nthe south the hall opens into a large room. There is rather annoying\nwhirring sound coming from that room.",
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
    "STREAM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "STREAM-PATH",
     "kind": "conditional",
     "condition": "SECRET-DOOR",
     "else": "\"That's a wall there.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    },
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
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "BRICK"
   ],
   "source": "<ROOM MARBLE-HALL\n      (IN ROOMS)\n      (LDESC\n\"This is an arched hall of fine marble. The hall stops abruptly\nto the north at a ford across a stream, where the marble is cracked and\nbroken. Perhaps a flood or collapse of the cave was responsible. To\nthe south the hall opens into a large room. There is rather annoying\nwhirring sound coming from that room.\")\n      (DESC \"Marble Hall\")\n      (FLAGS RLANDBIT)\n      (EAST TO STREAM-PATH IF SECRET-DOOR ELSE \"That's a wall there.\")\n      (NORTH TO DEEP-FORD)\n      (SOUTH TO CAROUSEL-ROOM)\n      (GLOBAL STREAM)>",
   "referencedBy": [
    "I-PRINCESS"
   ]
  },
  "DEEP-FORD": {
   "name": "DEEP-FORD",
   "file": "2dungeon.zil",
   "line": 386,
   "endLine": 402,
   "desc": "Deep Ford",
   "ldesc": "You are fording the stream at a deep but not impossible spot. The\nwater is very cold. The walls of the ravine rise to east and west.\nThere is a small ledge along the north wall of the ravine. To the south\nis the entrance to a well-constructed but somewhat ruined hall.",
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
    "CHASM",
    "STREAM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "RAVINE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "RAVINE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "MARBLE-HALL",
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
     "message": "The stream deepens rapidly, and you wisely return before drowning.",
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You notice that the ledge above would be a drier route west.",
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM DEEP-FORD\n      (IN ROOMS)\n      (LDESC\n\"You are fording the stream at a deep but not impossible spot. The\nwater is very cold. The walls of the ravine rise to east and west.\nThere is a small ledge along the north wall of the ravine. To the south\nis the entrance to a well-constructed but somewhat ruined hall.\")\n      (DESC \"Deep Ford\")\n      (FLAGS RLANDBIT)\n      (NORTH TO RAVINE-LEDGE)\n      (UP TO RAVINE-LEDGE)\n      (SOUTH TO MARBLE-HALL)\n      (EAST\n\"The stream deepens rapidly, and you wisely return before drowning.\")\n      (WEST\n\"You notice that the ledge above would be a drier route west.\")\n      (GLOBAL GLOBAL-WATER CHASM STREAM)>",
   "referencedBy": [
    "I-DRAGON",
    "I-PRINCESS"
   ]
  },
  "RAVINE-LEDGE": {
   "name": "RAVINE-LEDGE",
   "file": "2dungeon.zil",
   "line": 404,
   "endLine": 417,
   "desc": "Ledge in Ravine",
   "ldesc": "You are on a narrow ledge near the bottom of a deep ravine. The ledge\ncontinues to the west. A precarious climb up to another tiny ledge is\npossible. A short scramble down the rock face leads\nto a stream.",
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
    "CHASM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "TINY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
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
     "to": "LEDGE-TUNNEL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DEEP-FORD",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM RAVINE-LEDGE\n      (IN ROOMS)\n      (LDESC\n\"You are on a narrow ledge near the bottom of a deep ravine. The ledge\ncontinues to the west. A precarious climb up to another tiny ledge is\npossible. A short scramble down the rock face leads\nto a stream.\")\n      (DESC \"Ledge in Ravine\")\n      (FLAGS RLANDBIT)\n      (UP TO TINY-ROOM)\n      (SOUTH TO DEEP-FORD)\n      (WEST TO LEDGE-TUNNEL)\n      (DOWN TO DEEP-FORD)\n      (GLOBAL CHASM)>",
   "referencedBy": [
    "I-DRAGON",
    "PRINCESS-FCN",
    "I-PRINCESS"
   ]
  },
  "LEDGE-TUNNEL": {
   "name": "LEDGE-TUNNEL",
   "file": "2dungeon.zil",
   "line": 419,
   "endLine": 429,
   "desc": "End of Ledge",
   "ldesc": "A ledge from the east ends here, and a tunnel leads north into the wall.\nThere is a rather odd smokey odor in the warm air of the tunnel.",
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
     "to": "RAVINE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "DRAGON-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
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
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "There are a lot of sharp rocks down there.",
     "dir": "DOWN"
    }
   ],
   "contents": [],
   "source": "<ROOM LEDGE-TUNNEL\n      (IN ROOMS)\n      (LDESC\n\"A ledge from the east ends here, and a tunnel leads north into the wall.\nThere is a rather odd smokey odor in the warm air of the tunnel.\")\n      (DESC \"End of Ledge\")\n      (FLAGS RLANDBIT)\n      (EAST TO RAVINE-LEDGE)\n      (IN TO DRAGON-ROOM)\n      (NORTH TO DRAGON-ROOM)\n      (DOWN \"There are a lot of sharp rocks down there.\")>",
   "referencedBy": []
  },
  "DRAGON-ROOM": {
   "name": "DRAGON-ROOM",
   "file": "2dungeon.zil",
   "line": 431,
   "endLine": 450,
   "desc": "Dragon Room",
   "ldesc": "The room is a large cavern full of broken stone. The walls are\nscorched and there are deep scratches on the floor. A sooty dry smell\nis very strong here. A paved path winds from a large passage to the\nwest, through the room, and across a huge stone bridge\nto the south. To the east a small crack is visible. A dark and\nsmokey tunnel leads north.",
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
     "to": "LEDGE-TUNNEL",
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
     "else": "\"The dragon hisses at you and blocks your way.\"",
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DRAGON-LAIR",
     "kind": "conditional",
     "condition": "ICE-MELTED",
     "else": "\"The dragon hisses at you and blocks your way.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "FRESCO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "STONE-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "STONE-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "CROSS"
    }
   ],
   "contents": [
    "DRAGON"
   ],
   "source": "<ROOM DRAGON-ROOM\n      (IN ROOMS)\n      (LDESC\n\"The room is a large cavern full of broken stone. The walls are\nscorched and there are deep scratches on the floor. A sooty dry smell\nis very strong here. A paved path winds from a large passage to the\nwest, through the room, and across a huge stone bridge\nto the south. To the east a small crack is visible. A dark and\nsmokey tunnel leads north.\")\n      (DESC \"Dragon Room\")\n      (FLAGS RLANDBIT)\n      (EAST TO LEDGE-TUNNEL)\n      (NORTH TO DRAGON-LAIR\n\tIF ICE-MELTED ELSE \"The dragon hisses at you and blocks your way.\")\n      (IN TO DRAGON-LAIR\n        IF ICE-MELTED ELSE \"The dragon hisses at you and blocks your way.\")\n      (WEST TO FRESCO-ROOM)\n      (SOUTH TO STONE-BRIDGE)\n      (CROSS TO STONE-BRIDGE)\n      (GLOBAL BRIDGE)>",
   "referencedBy": [
    "DRAGON-FCN",
    "I-DRAGON",
    "DRAGON-LEAVES"
   ]
  },
  "DRAGON-LAIR": {
   "name": "DRAGON-LAIR",
   "file": "2dungeon.zil",
   "line": 452,
   "endLine": 460,
   "desc": "Dragon's Lair",
   "ldesc": "You are in the dragon's lair, where the rock walls are scarred by flame.\nA blackened doorway leads to the south.",
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
   "source": "<ROOM DRAGON-LAIR\n      (IN ROOMS)\n      (LDESC\n\"You are in the dragon's lair, where the rock walls are scarred by flame.\nA blackened doorway leads to the south.\")\n      (DESC \"Dragon's Lair\")\n      (FLAGS RLANDBIT)\n      (SOUTH TO DRAGON-ROOM)\n      (OUT TO DRAGON-ROOM)>",
   "referencedBy": [
    "I-GARDEN",
    "PRINCESS-FCN"
   ]
  },
  "FRESCO-ROOM": {
   "name": "FRESCO-ROOM",
   "file": "2dungeon.zil",
   "line": 526,
   "endLine": 536,
   "desc": "Fresco Room",
   "ldesc": "A path leads east-west through a room decorated with beautiful frescoes\nof someone battling dragons and rescuing fair maidens. It is hard\nto tell who is doing this as those parts of the\nfrescoes have been blackened and cracked by intense heat.",
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
     "dir": "EAST"
    },
    {
     "to": "BANK-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM FRESCO-ROOM\n      (IN ROOMS)\n      (LDESC\n\"A path leads east-west through a room decorated with beautiful frescoes\nof someone battling dragons and rescuing fair maidens. It is hard\nto tell who is doing this as those parts of the\nfrescoes have been blackened and cracked by intense heat.\")\n      (DESC \"Fresco Room\")\n      (FLAGS RLANDBIT)\n      (EAST TO DRAGON-ROOM)\n      (WEST TO BANK-ENTRANCE)>",
   "referencedBy": [
    "I-DRAGON"
   ]
  },
  "STONE-BRIDGE": {
   "name": "STONE-BRIDGE",
   "file": "2dungeon.zil",
   "line": 538,
   "endLine": 551,
   "desc": "Stone Bridge",
   "ldesc": "This is the middle of a ruined but still impressive stone bridge\nspanning a deep chasm. Water flows far beneath. A paved path leads\nnorth into a large open space. To the south, the path leads into a misty\ntunnel.",
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
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "You'll have to specify a direction.",
     "dir": "CROSS"
    }
   ],
   "contents": [],
   "source": "<ROOM STONE-BRIDGE\n      (IN ROOMS)\n      (LDESC\n\"This is the middle of a ruined but still impressive stone bridge\nspanning a deep chasm. Water flows far beneath. A paved path leads\nnorth into a large open space. To the south, the path leads into a misty\ntunnel.\")\n      (DESC \"Stone Bridge\")\n      (FLAGS RLANDBIT)\n      (NORTH TO DRAGON-ROOM)\n      (SOUTH TO COOL-ROOM)\n      (DOWN \"It's a long way down.\")\n      (CROSS \"You'll have to specify a direction.\")\n      (GLOBAL BRIDGE CHASM)>",
   "referencedBy": []
  },
  "COOL-ROOM": {
   "name": "COOL-ROOM",
   "file": "2dungeon.zil",
   "line": 553,
   "endLine": 566,
   "desc": "Cool Room",
   "ldesc": "The room is cool and damp. The air is misty. A twisty path from the\nsoutheast splits here toward a wide northerly stone bridge, and a narrow\nwesterly tunnel. It is from the latter\nthat the mist and chill seem to originate.",
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
     "to": "GLACIER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "STONE-BRIDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "CROSS"
    }
   ],
   "contents": [],
   "source": "<ROOM COOL-ROOM\n      (IN ROOMS)\n      (LDESC\n\"The room is cool and damp. The air is misty. A twisty path from the\nsoutheast splits here toward a wide northerly stone bridge, and a narrow\nwesterly tunnel. It is from the latter\nthat the mist and chill seem to originate.\")\n      (DESC \"Cool Room\")\n      (FLAGS RLANDBIT)\n      (SE TO CAROUSEL-ROOM)\n      (NORTH TO STONE-BRIDGE)\n      (WEST TO GLACIER-ROOM)\n      (CROSS TO STONE-BRIDGE)\n      (GLOBAL BRIDGE)>",
   "referencedBy": []
  },
  "GLACIER-ROOM": {
   "name": "GLACIER-ROOM",
   "file": "2dungeon.zil",
   "line": 568,
   "endLine": 577,
   "desc": "Ice Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GLACIER-ROOM-FCN",
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
     "to": "LAVA-ROOM",
     "kind": "conditional",
     "condition": "ICE-MELTED",
     "else": "\"You don't even have an ice-pick.\"",
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LAVA-TUBE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "ICE"
   ],
   "source": "<ROOM GLACIER-ROOM\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Ice Room\")\n      (FLAGS RLANDBIT)\n      (EAST TO COOL-ROOM)\n      (WEST TO LAVA-ROOM\n       IF ICE-MELTED ELSE \"You don't even have an ice-pick.\")\n      (UP TO LAVA-TUBE)\n      (ACTION GLACIER-ROOM-FCN)>",
   "referencedBy": [
    "I-DRAGON"
   ]
  },
  "LAVA-TUBE": {
   "name": "LAVA-TUBE",
   "file": "2dungeon.zil",
   "line": 579,
   "endLine": 591,
   "desc": "Lava Tube",
   "ldesc": "You are in a tight chimney of solidified lava. It extends up at\nleast another hundred feet and down to a large room far below. A large\ncrack opens to the south, probably the result of a shift\nin the rock strata.",
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
    "CRACK",
    "LT-CRACK-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "GLACIER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "VOLCANO-VIEW",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "COBWEBBY-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM LAVA-TUBE\n      (IN ROOMS)\n      (LDESC\n\"You are in a tight chimney of solidified lava. It extends up at\nleast another hundred feet and down to a large room far below. A large\ncrack opens to the south, probably the result of a shift\nin the rock strata.\")\n      (DESC \"Lava Tube\")\n      (FLAGS RLANDBIT)\n      (DOWN TO GLACIER-ROOM)\n      (UP TO VOLCANO-VIEW)\n      (SOUTH TO COBWEBBY-CORRIDOR)\n      (PSEUDO \"CRACK\" LT-CRACK-PSEUDO)>",
   "referencedBy": []
  },
  "COBWEBBY-CORRIDOR": {
   "name": "COBWEBBY-CORRIDOR",
   "file": "2dungeon.zil",
   "line": 599,
   "endLine": 614,
   "desc": "Cobwebby Corridor",
   "ldesc": "A winding corridor is filled with cobwebs. Some\nare broken and the dust on the floor is disturbed. The trend of the\ntwists and turns is northeast to southwest. On the north side of one\ntwist, high up, is a narrow crack.",
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
    "CRACK",
    "CC-CRACK-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "LAVA-TUBE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "LAVA-TUBE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    },
    {
     "to": "LAVA-TUBE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "CAROUSEL-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "GUARDIAN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "GUARDIAN-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "FUSE"
   ],
   "source": "<ROOM COBWEBBY-CORRIDOR\n      (IN ROOMS)\n      (LDESC\n\"A winding corridor is filled with cobwebs. Some\nare broken and the dust on the floor is disturbed. The trend of the\ntwists and turns is northeast to southwest. On the north side of one\ntwist, high up, is a narrow crack.\")\n      (DESC \"Cobwebby Corridor\")\n      (FLAGS RLANDBIT)\n      (IN TO LAVA-TUBE)\n      (UP TO LAVA-TUBE)\n      (NORTH TO LAVA-TUBE)\n      (NE TO CAROUSEL-ROOM)\n      (SW TO GUARDIAN-ROOM)\n      (DOWN TO GUARDIAN-ROOM)\n      (PSEUDO \"CRACK\" CC-CRACK-PSEUDO)>",
   "referencedBy": []
  },
  "ROOM-8": {
   "name": "ROOM-8",
   "file": "2dungeon.zil",
   "line": 632,
   "endLine": 639,
   "desc": "Room 8",
   "ldesc": "This is a small chamber carved out of the rock at the end of a short crawl.\nOn the wall is crudely chiseled the number \"8\".",
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
    "REPELLENT"
   ],
   "source": "<ROOM ROOM-8\n      (IN ROOMS)\n      (LDESC\n\"This is a small chamber carved out of the rock at the end of a short crawl.\nOn the wall is crudely chiseled the number \\\"8\\\".\")\n      (DESC \"Room 8\")\n      (FLAGS RLANDBIT)\n      (EAST TO CAROUSEL-ROOM)>",
   "referencedBy": []
  },
  "MENHIR-ROOM": {
   "name": "MENHIR-ROOM",
   "file": "2dungeon.zil",
   "line": 641,
   "endLine": 652,
   "desc": "Menhir Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MENHIR-ROOM-FCN",
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
     "to": "STAIRWAY-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM MENHIR-ROOM\n      (IN ROOMS)\n      (DESC \"Menhir Room\")\n      (LDESC \" \")\n      (FLAGS RLANDBIT)\n      (NORTH TO CAROUSEL-ROOM)\n      (SW TO KENNEL\n       IF MENHIR-POSITION\n        ELSE \"You are trying to walk through an enormous rock.\")\n      (SOUTH TO STAIRWAY-TOP)\n      (ACTION MENHIR-ROOM-FCN)\n      (GLOBAL MENHIR)>",
   "referencedBy": [
    "DESCRIBE-MENHIR",
    "MENHIR-FCN"
   ]
  },
  "KENNEL": {
   "name": "KENNEL",
   "file": "2dungeon.zil",
   "line": 673,
   "endLine": 688,
   "desc": "Kennel",
   "ldesc": "This room looks like it was once a kennel for a very large dog (some of\nthe bones would fit a dinosaur). It apparently hasn't been used for a\nlong time, as the dust is fairly thick all over. The only\nexit is northeast.",
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
   "source": "<ROOM KENNEL\n      (IN ROOMS)\n      (LDESC\n\"This room looks like it was once a kennel for a very large dog (some of\nthe bones would fit a dinosaur). It apparently hasn't been used for a\nlong time, as the dust is fairly thick all over. The only\nexit is northeast.\")\n      (DESC \"Kennel\")\n      (FLAGS RLANDBIT)\n      (NE TO MENHIR-ROOM\n       IF MENHIR-POSITION\n        ELSE \"You are trying to walk through an enormous rock.\")\n      (OUT TO MENHIR-ROOM\n       IF MENHIR-POSITION\n        ELSE \"You are trying to walk through an enormous rock.\")\n      (GLOBAL MENHIR)>",
   "referencedBy": [
    "MENHIR-FCN"
   ]
  },
  "STAIRWAY-TOP": {
   "name": "STAIRWAY-TOP",
   "file": "2dungeon.zil",
   "line": 717,
   "endLine": 725,
   "desc": "Stairway",
   "ldesc": "A marble stairway leads down into the gloom and a passage leads north.",
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
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
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
   "contents": [],
   "source": "<ROOM STAIRWAY-TOP\n      (IN ROOMS)\n      (LDESC\n\"A marble stairway leads down into the gloom and a passage leads north.\")\n      (DESC \"Stairway\")\n      (FLAGS RLANDBIT)\n      (DOWN TO DIAMOND-5)\n      (NORTH TO MENHIR-ROOM)\n      (GLOBAL STAIRS)>",
   "referencedBy": []
  },
  "DIAMOND-1": {
   "name": "DIAMOND-1",
   "file": "2dungeon.zil",
   "line": 727,
   "endLine": 736,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-1\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (SE TO DIAMOND-5)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": []
  },
  "DIAMOND-2": {
   "name": "DIAMOND-2",
   "file": "2dungeon.zil",
   "line": 738,
   "endLine": 749,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DIAMOND-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "DIAMOND-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-2\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (SOUTH TO DIAMOND-5)\n      (SE TO DIAMOND-6)\n      (SW TO DIAMOND-4)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": [
    "DIAMOND-MOTION"
   ]
  },
  "DIAMOND-3": {
   "name": "DIAMOND-3",
   "file": "2dungeon.zil",
   "line": 751,
   "endLine": 760,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-3\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (SW TO DIAMOND-5)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": []
  },
  "DIAMOND-4": {
   "name": "DIAMOND-4",
   "file": "2dungeon.zil",
   "line": 762,
   "endLine": 773,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "DIAMOND-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-4\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (NE TO DIAMOND-2)\n      (SE TO DIAMOND-8)\n      (EAST TO DIAMOND-5)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": [
    "DIAMOND-MOTION"
   ]
  },
  "DIAMOND-5": {
   "name": "DIAMOND-5",
   "file": "2dungeon.zil",
   "line": 775,
   "endLine": 793,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "STAIRS",
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "DIAMOND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DIAMOND-3",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "DIAMOND-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DIAMOND-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "DIAMOND-7",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    },
    {
     "to": "DIAMOND-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DIAMOND-9",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SE"
    },
    {
     "to": "CERBERUS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    },
    {
     "to": "STAIRWAY-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-5\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (NW TO DIAMOND-1)\n      (NORTH TO DIAMOND-2)\n      (NE TO DIAMOND-3)\n      (WEST TO DIAMOND-4)\n      (EAST TO DIAMOND-6)\n      (SW TO DIAMOND-7)\n      (SOUTH TO DIAMOND-8)\n      (SE TO DIAMOND-9)\n      (DOWN TO CERBERUS-ROOM)\n      (UP TO STAIRWAY-TOP)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL STAIRS DWINDOW)>",
   "referencedBy": [
    "DIAMOND-MOTION"
   ]
  },
  "DIAMOND-6": {
   "name": "DIAMOND-6",
   "file": "2dungeon.zil",
   "line": 795,
   "endLine": 806,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "DIAMOND-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "DIAMOND-8",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SW"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-6\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (WEST TO DIAMOND-5)\n      (NW TO DIAMOND-2)\n      (SW TO DIAMOND-8)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": [
    "DIAMOND-MOTION"
   ]
  },
  "DIAMOND-7": {
   "name": "DIAMOND-7",
   "file": "2dungeon.zil",
   "line": 808,
   "endLine": 817,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-7\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (NE TO DIAMOND-5)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": []
  },
  "DIAMOND-8": {
   "name": "DIAMOND-8",
   "file": "2dungeon.zil",
   "line": 819,
   "endLine": 830,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "DIAMOND-4",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "DIAMOND-6",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-8\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (NORTH TO DIAMOND-5)\n      (NW TO DIAMOND-4)\n      (NE TO DIAMOND-6)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": [
    "DIAMOND-MOTION"
   ]
  },
  "DIAMOND-9": {
   "name": "DIAMOND-9",
   "file": "2dungeon.zil",
   "line": 832,
   "endLine": 841,
   "desc": "Oddly-angled Room",
   "ldesc": "A small room with oddly angled walls and passages in all directions.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DIAMOND-MOTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "DWINDOW"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [],
   "source": "<ROOM DIAMOND-9\n      (IN ROOMS)\n      (DESC\n\"Oddly-angled Room\")\n      (LDESC\n\"A small room with oddly angled walls and passages in all directions.\")\n      (FLAGS RLANDBIT)\n      (NW TO DIAMOND-5)\n      (ACTION DIAMOND-MOTION)\n      (GLOBAL DWINDOW)>",
   "referencedBy": []
  },
  "CERBERUS-ROOM": {
   "name": "CERBERUS-ROOM",
   "file": "2dungeon.zil",
   "line": 851,
   "endLine": 865,
   "desc": "Cerberus Room",
   "ldesc": "This is the entrance to a huge crypt or tomb. A marble stairway leads\nup from a gateway arch.",
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
   "pseudo": [
    "TOMB",
    "TOMB-PSEUDO",
    "CRYPT",
    "TOMB-PSEUDO"
   ],
   "otherProps": {
    "VALUE": [
     "10"
    ]
   },
   "exits": [
    {
     "to": "CRYPT-ANTEROOM",
     "kind": "conditional",
     "condition": "CERBERUS-LEASHED",
     "else": "\"The huge dog snaps nastily at you.\"",
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "CRYPT-ANTEROOM",
     "kind": "conditional",
     "condition": "CERBERUS-LEASHED",
     "else": "\"The huge dog snaps nastily at you.\"",
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "DIAMOND-5",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "UP"
    }
   ],
   "contents": [
    "CERBERUS"
   ],
   "source": "<ROOM CERBERUS-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is the entrance to a huge crypt or tomb. A marble stairway leads\nup from a gateway arch.\")\n      (DESC \"Cerberus Room\")\n      (FLAGS RLANDBIT)\n      (EAST TO CRYPT-ANTEROOM\n       IF CERBERUS-LEASHED ELSE \"The huge dog snaps nastily at you.\")\n      (IN TO CRYPT-ANTEROOM\n       IF CERBERUS-LEASHED ELSE \"The huge dog snaps nastily at you.\")\n      (UP TO DIAMOND-5)\n      (VALUE 10)\n      (GLOBAL STAIRS)\n      (PSEUDO \"TOMB\" TOMB-PSEUDO \"CRYPT\" TOMB-PSEUDO)>",
   "referencedBy": []
  },
  "CRYPT-ANTEROOM": {
   "name": "CRYPT-ANTEROOM",
   "file": "2dungeon.zil",
   "line": 889,
   "endLine": 899,
   "desc": "Crypt Anteroom",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CRYPT-ANTEROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CRYPT-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "3"
    ]
   },
   "exits": [
    {
     "to": "CRYPT-ROOM",
     "kind": "conditional",
     "condition": "CRYPT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "IN"
    },
    {
     "to": "CRYPT-ROOM",
     "kind": "conditional",
     "condition": "CRYPT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "CERBERUS-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM CRYPT-ANTEROOM\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Crypt Anteroom\")\n      (FLAGS RLANDBIT)\n      (IN TO CRYPT-ROOM IF CRYPT-DOOR IS OPEN)\n      (SOUTH TO CRYPT-ROOM IF CRYPT-DOOR IS OPEN)\n      (WEST TO CERBERUS-ROOM)\n      (ACTION CRYPT-ANTEROOM-FCN)\n      (GLOBAL CRYPT-DOOR)\n      (VALUE 3)>",
   "referencedBy": []
  },
  "CRYPT-ROOM": {
   "name": "CRYPT-ROOM",
   "file": "2dungeon.zil",
   "line": 901,
   "endLine": 910,
   "desc": "Crypt",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CRYPT-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CRYPT-DOOR",
    "DIM-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "2"
    ]
   },
   "exits": [
    {
     "to": "CRYPT-ANTEROOM",
     "kind": "conditional",
     "condition": "CRYPT-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "ZORK3",
     "kind": "conditional",
     "condition": "DIM-DOOR-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "HEADS",
    "CRYPT"
   ],
   "source": "<ROOM CRYPT-ROOM\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Crypt\")\n      (FLAGS RLANDBIT)\n      (NORTH TO CRYPT-ANTEROOM IF CRYPT-DOOR IS OPEN)\n      (SOUTH TO ZORK3 IF DIM-DOOR-FLAG)\n      (GLOBAL CRYPT-DOOR DIM-DOOR)\n      (ACTION CRYPT-ROOM-FCN)\n      (VALUE 2)>",
   "referencedBy": [
    "CRYPT-ROOM-FCN"
   ]
  },
  "ZORK3": {
   "name": "ZORK3",
   "file": "2dungeon.zil",
   "line": 946,
   "endLine": 951,
   "desc": "Landing",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "ZORK3-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM ZORK3\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Landing\")\n      (FLAGS RLANDBIT ONBIT)\n      (ACTION ZORK3-FCN)>",
   "referencedBy": [
    "DESCRIBE-ROOM"
   ]
  },
  "GUARDIAN-ROOM": {
   "name": "GUARDIAN-ROOM",
   "file": "2dungeon.zil",
   "line": 957,
   "endLine": 968,
   "desc": "Guarded Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "GUARDIAN-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIZ-DOOR"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "COBWEBBY-CORRIDOR",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "WIZARDS-WORKSHOP",
     "kind": "conditional",
     "condition": "WIZ-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "WIZARDS-WORKSHOP",
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
   "source": "<ROOM GUARDIAN-ROOM\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Guarded Room\")\n      (FLAGS RLANDBIT)\n      (NORTH TO COBWEBBY-CORRIDOR)\n      (SOUTH TO WIZARDS-WORKSHOP\n       IF WIZ-DOOR IS OPEN)\n      (IN TO WIZARDS-WORKSHOP\n       IF WIZ-DOOR IS OPEN)\n      (ACTION GUARDIAN-ROOM-FCN)\n      (GLOBAL WIZ-DOOR)>",
   "referencedBy": []
  },
  "WIZARDS-WORKSHOP": {
   "name": "WIZARDS-WORKSHOP",
   "file": "2dungeon.zil",
   "line": 978,
   "endLine": 990,
   "desc": "Wizard's Workshop",
   "ldesc": "This is the workshop of the Wizard of Frobozz.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WORKSHOP-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "WIZ-DOOR"
   ],
   "pseudo": [],
   "otherProps": {
    "VALUE": [
     "10"
    ]
   },
   "exits": [
    {
     "to": "GUARDIAN-ROOM",
     "kind": "conditional",
     "condition": "WIZ-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "GUARDIAN-ROOM",
     "kind": "conditional",
     "condition": "WIZ-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    },
    {
     "to": "WORKBENCH-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "TROPHY-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM WIZARDS-WORKSHOP\n      (IN ROOMS)\n      (LDESC\n\"This is the workshop of the Wizard of Frobozz.\")\n      (DESC \"Wizard's Workshop\")\n      (FLAGS RLANDBIT)\n      (NORTH TO GUARDIAN-ROOM IF WIZ-DOOR IS OPEN)\n      (OUT TO GUARDIAN-ROOM IF WIZ-DOOR IS OPEN)\n      (WEST TO WORKBENCH-ROOM)\n      (SOUTH TO TROPHY-ROOM)\n      (ACTION WORKSHOP-FCN)\n      (VALUE 10)\n      (GLOBAL WIZ-DOOR)>",
   "referencedBy": []
  },
  "WORKBENCH-ROOM": {
   "name": "WORKBENCH-ROOM",
   "file": "2dungeon.zil",
   "line": 992,
   "endLine": 1011,
   "desc": "Wizard's Workroom",
   "ldesc": "This room is the Wizard's workroom. A hall continues east and west,\nand a larger room lies to the south. There are many shelves and racks\non the walls, but the Wizard's workbench dominates the room. It is made\nof dark, heavy wood bound with iron. The workbench is stained from many\nyears of use, and is deeply gouged as though some huge clawed animal was\nimprisoned on it. There are burn marks and even notes written in a crabbed\nhand. Many arcane items are scattered about the bench; alembics, mortar\nand pestle, small knives of various sizes, odd scraps of vellum, wax\ncandles, and much more. In the center of a relatively clear area of the\nbench are affixed three stands - ruby, sapphire, and diamond - which form\na triangle.",
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
    "MORTAR",
    "ARCANA-PSEUDO",
    "PESTLE",
    "ARCANA-PSEUDO"
   ],
   "otherProps": {},
   "exits": [
    {
     "to": "WIZARDS-WORKSHOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "PENTAGRAM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "AQUARIUM-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [
    "ARCANA",
    "WORKBENCH"
   ],
   "source": "<ROOM WORKBENCH-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This room is the Wizard's workroom. A hall continues east and west,\nand a larger room lies to the south. There are many shelves and racks\non the walls, but the Wizard's workbench dominates the room. It is made\nof dark, heavy wood bound with iron. The workbench is stained from many\nyears of use, and is deeply gouged as though some huge clawed animal was\nimprisoned on it. There are burn marks and even notes written in a crabbed\nhand. Many arcane items are scattered about the bench; alembics, mortar\nand pestle, small knives of various sizes, odd scraps of vellum, wax\ncandles, and much more. In the center of a relatively clear area of the\nbench are affixed three stands - ruby, sapphire, and diamond - which form\na triangle.\")\n      (DESC \"Wizard's Workroom\")\n      (FLAGS RLANDBIT ONBIT)\n      (EAST TO WIZARDS-WORKSHOP)\n      (SOUTH TO PENTAGRAM-ROOM)\n      (WEST TO AQUARIUM-ROOM)\n      (PSEUDO \"MORTAR\" ARCANA-PSEUDO \"PESTLE\" ARCANA-PSEUDO)>",
   "referencedBy": []
  },
  "TROPHY-ROOM": {
   "name": "TROPHY-ROOM",
   "file": "2dungeon.zil",
   "line": 1076,
   "endLine": 1090,
   "desc": "Trophy Room",
   "ldesc": "This is the Wizard's trophy room, filled with memorabilia of various\nsorts. On one wall is the Wizard's D. T. (Doctor of Thaumaturgy) degree\nfrom GUE Tech. Several old magic wands are mounted on a wand rack. A\ncollection of dull and nicked swords testify to the fate of many\nfoolhardy adventurers. Small bottles contain discarded homunculi (a few\npreserved in alcohol). There is a stuffed owl on a perch.",
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
    "OWL",
    "TROPHY-PSEUDO",
    "HOMUNCULI",
    "TROPHY-PSEUDO"
   ],
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
    "DEGREE",
    "WANDS",
    "TROPHY-SWORD",
    "TROPHY-BOTTLES",
    "WARNING-LABEL",
    "WIZARD-CASE"
   ],
   "source": "<ROOM TROPHY-ROOM\n      (IN ROOMS)\n      (LDESC\n\"This is the Wizard's trophy room, filled with memorabilia of various\nsorts. On one wall is the Wizard's D. T. (Doctor of Thaumaturgy) degree\nfrom GUE Tech. Several old magic wands are mounted on a wand rack. A\ncollection of dull and nicked swords testify to the fate of many\nfoolhardy adventurers. Small bottles contain discarded homunculi (a few\npreserved in alcohol). There is a stuffed owl on a perch.\")\n      (DESC \"Trophy Room\")\n      (FLAGS RLANDBIT)\n      (NORTH TO WIZARDS-WORKSHOP)\n      (PSEUDO\n       \"OWL\" TROPHY-PSEUDO\n       \"HOMUNCULI\" TROPHY-PSEUDO)>",
   "referencedBy": [
    "WIZARD-CASE-FCN"
   ]
  },
  "PENTAGRAM-ROOM": {
   "name": "PENTAGRAM-ROOM",
   "file": "2dungeon.zil",
   "line": 1167,
   "endLine": 1175,
   "desc": "Pentagram Room",
   "ldesc": "In this room, inscribed on the floor, is a great pentagram drawn with\nblack chalk. In its center is a black circle.",
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
    "GLOBAL-CERBERUS",
    "GLOBAL-WIZARD-CASE"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "WORKBENCH-ROOM",
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
   "source": "<ROOM PENTAGRAM-ROOM\n      (IN ROOMS)\n      (LDESC\n\"In this room, inscribed on the floor, is a great pentagram drawn with\nblack chalk. In its center is a black circle.\")\n      (DESC \"Pentagram Room\")\n      (FLAGS RLANDBIT ONBIT)\n      (NORTH TO WORKBENCH-ROOM)\n      (GLOBAL GLOBAL-MENHIR GLOBAL-CERBERUS GLOBAL-WIZARD-CASE)>",
   "referencedBy": [
    "DEAD-PALANTIR",
    "GENIE-FCN",
    "PENTAGRAM-FCN",
    "WIZARD-FCN",
    "I-WIZARD"
   ]
  },
  "AQUARIUM-ROOM": {
   "name": "AQUARIUM-ROOM",
   "file": "2dungeon.zil",
   "line": 1186,
   "endLine": 1195,
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
     "to": "WORKBENCH-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "IN-AQUARIUM",
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
   "source": "<ROOM AQUARIUM-ROOM\n      (IN ROOMS)\n      (LDESC\n\"Here a dark hallway turns a corner. To the south is a dark room, to\nthe east is fitful light.\")\n      (DESC \"Aquarium Room\")\n      (FLAGS RLANDBIT ONBIT)\n      (EAST TO WORKBENCH-ROOM)\n      (IN TO IN-AQUARIUM)\n      (SOUTH TO WIZARDS-QUARTERS)>",
   "referencedBy": []
  },
  "IN-AQUARIUM": {
   "name": "IN-AQUARIUM",
   "file": "2dungeon.zil",
   "line": 1235,
   "endLine": 1243,
   "desc": "Murky Room",
   "ldesc": "The floor here seems to be made of sand, but it is hard to see anything\nelse.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-AQUARIUM-FCN",
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
   "source": "<ROOM IN-AQUARIUM\n      (IN ROOMS)\n      (LDESC\n\"The floor here seems to be made of sand, but it is hard to see anything\nelse.\")\n      (DESC \"Murky Room\")\n      (FLAGS RLANDBIT ONBIT)\n      (OUT TO AQUARIUM-ROOM)\n      (ACTION IN-AQUARIUM-FCN)>",
   "referencedBy": []
  },
  "WIZARDS-QUARTERS": {
   "name": "WIZARDS-QUARTERS",
   "file": "2dungeon.zil",
   "line": 1245,
   "endLine": 1251,
   "desc": "Wizard's Quarters",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "WIZARD-QUARTERS-FCN",
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
   "source": "<ROOM WIZARDS-QUARTERS\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Wizard's Quarters\")\n      (FLAGS RLANDBIT)\n      (NORTH TO AQUARIUM-ROOM)\n      (ACTION WIZARD-QUARTERS-FCN)>",
   "referencedBy": []
  },
  "CAROUSEL-ROOM": {
   "name": "CAROUSEL-ROOM",
   "file": "2dungeon.zil",
   "line": 1253,
   "endLine": 1266,
   "desc": "Carousel Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "CAROUSEL-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "MARBLE-HALL",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "STREAM-PATH",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "TOPIARY-ROOM",
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
     "to": "COBWEBBY-CORRIDOR",
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
    "IRON-BOX"
   ],
   "source": "<ROOM CAROUSEL-ROOM\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Carousel Room\")\n      (FLAGS RLANDBIT)\n      (NORTH TO MARBLE-HALL)\n      (NE TO STREAM-PATH)\n      (EAST TO TOPIARY-ROOM)\n      (SE TO RIDDLE-ROOM)\n      (SOUTH TO MENHIR-ROOM)\n      (SW TO COBWEBBY-CORRIDOR)\n      (WEST TO ROOM-8)\n      (NW TO COOL-ROOM)\n      (ACTION CAROUSEL-ROOM-FCN)>",
   "referencedBy": [
    "BUTTONS",
    "I-DRAGON",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "RIDDLE-ROOM": {
   "name": "RIDDLE-ROOM",
   "file": "2dungeon.zil",
   "line": 1270,
   "endLine": 1279,
   "desc": "Riddle Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "RIDDLE-ROOM-FCN",
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
     "dir": "DOWN"
    },
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
     "to": "PEARL-ROOM",
     "kind": "conditional",
     "condition": "RIDDLE-DOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "RIDDLE-DOOR"
   ],
   "source": "<ROOM RIDDLE-ROOM\n       (IN ROOMS)\n       (LDESC \" \")\n       (DESC \"Riddle Room\")\n       (DOWN TO CAROUSEL-ROOM)\n       (NW TO CAROUSEL-ROOM)\n       (EAST TO PEARL-ROOM IF RIDDLE-DOOR IS OPEN)\n       (FLAGS RLANDBIT)\n       (ACTION RIDDLE-ROOM-FCN)\n       (PSEUDO \"RIDDLE\" RIDDLE-PSEUDO)>",
   "referencedBy": []
  },
  "PEARL-ROOM": {
   "name": "PEARL-ROOM",
   "file": "2dungeon.zil",
   "line": 1289,
   "endLine": 1296,
   "desc": "Pearl Room",
   "ldesc": "This is a former broom closet. The exits are to the east and west.",
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
     "to": "WELL-BOTTOM",
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
     "dir": "WEST"
    }
   ],
   "contents": [
    "PEARL"
   ],
   "source": "<ROOM PEARL-ROOM\n        (IN ROOMS)\n\t(LDESC\n\"This is a former broom closet. The exits are to the east and west.\")\n        (DESC \"Pearl Room\")\n       \t(EAST TO WELL-BOTTOM)\n\t(WEST TO RIDDLE-ROOM)\n\t(FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "VOLCANO-BOTTOM": {
   "name": "VOLCANO-BOTTOM",
   "file": "2dungeon.zil",
   "line": 1302,
   "endLine": 1309,
   "desc": "Volcano Bottom",
   "ldesc": "You are at the bottom of a large dormant volcano. High above you\nlight enters from the cone of the volcano. The only exit is to the north.",
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
     "to": "LAVA-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "BALLOON"
   ],
   "source": "<ROOM VOLCANO-BOTTOM\n        (IN ROOMS)\n       (LDESC\n\"You are at the bottom of a large dormant volcano. High above you\nlight enters from the cone of the volcano. The only exit is to the north.\")\n       (DESC \"Volcano Bottom\")\n       (NORTH TO LAVA-ROOM)\n       (FLAGS RLANDBIT NONLANDBIT)>",
   "referencedBy": [
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "DECLINE-AND-FALL",
    "I-LEDGE",
    "I-WIZARD"
   ]
  },
  "VAIR-1": {
   "name": "VAIR-1",
   "file": "2dungeon.zil",
   "line": 1311,
   "endLine": 1317,
   "desc": "Volcano Core",
   "ldesc": "You are about one hundred feet above the bottom of the volcano. The\ntop of the volcano is clearly visible here.",
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
   "source": "<ROOM VAIR-1\n        (IN ROOMS)\n       (LDESC\n\"You are about one hundred feet above the bottom of the volcano. The\ntop of the volcano is clearly visible here.\")\n       (DESC \"Volcano Core\")\n       (FLAGS NONLANDBIT NWALLBIT )>",
   "referencedBy": [
    "RISE-AND-SHINE",
    "DECLINE-AND-FALL"
   ]
  },
  "VAIR-2": {
   "name": "VAIR-2",
   "file": "2dungeon.zil",
   "line": 1319,
   "endLine": 1328,
   "desc": "Volcano Near Small Ledge",
   "ldesc": "You are about two hundred feet above the volcano floor. Looming\nabove is the rim of the volcano. There is a small ledge on the west\nside.",
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
   "exits": [
    {
     "to": "LEDGE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LEDGE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    }
   ],
   "contents": [],
   "source": "<ROOM VAIR-2\n        (IN ROOMS)\n       (LDESC\n\"You are about two hundred feet above the volcano floor. Looming\nabove is the rim of the volcano. There is a small ledge on the west\nside.\")\n       (DESC \"Volcano Near Small Ledge\")\n       (WEST TO LEDGE-1)\n       (LAND TO LEDGE-1)\n       (FLAGS NONLANDBIT NWALLBIT )>",
   "referencedBy": []
  },
  "VAIR-3": {
   "name": "VAIR-3",
   "file": "2dungeon.zil",
   "line": 1330,
   "endLine": 1337,
   "desc": "Volcano by Viewing Ledge",
   "ldesc": "You are high above the floor of the volcano. The rim of the volcano\nlooks very narrow and you are very near it. To the\neast is what appears to be a viewing ledge, too thin to land on.",
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
   "source": "<ROOM VAIR-3\n        (IN ROOMS)\n       (LDESC\n\"You are high above the floor of the volcano. The rim of the volcano\nlooks very narrow and you are very near it. To the\neast is what appears to be a viewing ledge, too thin to land on.\")\n       (DESC \"Volcano by Viewing Ledge\")\n       (FLAGS NONLANDBIT NWALLBIT )>",
   "referencedBy": []
  },
  "VAIR-4": {
   "name": "VAIR-4",
   "file": "2dungeon.zil",
   "line": 1339,
   "endLine": 1347,
   "desc": "Volcano Near Wide Ledge",
   "ldesc": "You are near the rim of the volcano. Above you it is open to the sky.\nTo the west, there is a place to land on a wide ledge.",
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
   "exits": [
    {
     "to": "LEDGE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "LAND"
    },
    {
     "to": "LEDGE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM VAIR-4\n       (IN ROOMS)\n       (LDESC\n\"You are near the rim of the volcano. Above you it is open to the sky.\nTo the west, there is a place to land on a wide ledge.\")\n       (DESC \"Volcano Near Wide Ledge\")\n       (LAND TO LEDGE-2)\n       (WEST TO LEDGE-2)\n       (FLAGS NONLANDBIT NWALLBIT )>",
   "referencedBy": [
    "RISE-AND-SHINE"
   ]
  },
  "LEDGE-1": {
   "name": "LEDGE-1",
   "file": "2dungeon.zil",
   "line": 1349,
   "endLine": 1359,
   "desc": "Narrow Ledge",
   "ldesc": "You are on a narrow ledge within an old dormant volcano. This ledge is\nabout halfway between the floor below and the rim above. There is an exit\nto the south.",
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
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "I wouldn't jump from here.",
     "dir": "DOWN"
    },
    {
     "to": "VOLCANO-BOTTOM",
     "kind": "conditional",
     "condition": "GNOME-DOOR-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "LIBRARY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "HOOK-1",
    "COIN"
   ],
   "source": "<ROOM LEDGE-1\n       (IN ROOMS)\n       (LDESC\n\"You are on a narrow ledge within an old dormant volcano. This ledge is\nabout halfway between the floor below and the rim above. There is an exit\nto the south.\")\n       (DESC \"Narrow Ledge\")\n       (DOWN \"I wouldn't jump from here.\")\n       (WEST TO VOLCANO-BOTTOM IF GNOME-DOOR-FLAG)\n       (SOUTH TO LIBRARY)\n       (FLAGS RLANDBIT NONLANDBIT)>",
   "referencedBy": [
    "I-BALLOON",
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "I-GNOME"
   ]
  },
  "LIBRARY": {
   "name": "LIBRARY",
   "file": "2dungeon.zil",
   "line": 1361,
   "endLine": 1370,
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
     "to": "LEDGE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "LEDGE-1",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "GREEN-BOOK",
    "BLUE-BOOK",
    "WHITE-BOOK",
    "PURPLE-BOOK"
   ],
   "source": "<ROOM LIBRARY\n       (IN ROOMS)\n       (LDESC\n\"This must have been a large library, probably for the royal family. All\nof the shelves have been gnawed to pieces by unfriendly gnomes. To the\nnorth is an exit.\")\n       (DESC \"Library\")\n       (NORTH TO LEDGE-1)\n       (OUT TO LEDGE-1)\n       (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "VOLCANO-VIEW": {
   "name": "VOLCANO-VIEW",
   "file": "2dungeon.zil",
   "line": 1372,
   "endLine": 1384,
   "desc": "Volcano View",
   "ldesc": "You are on a ledge in the middle of a large volcano. Below you\nthe volcano bottom can be seen and above is the rim of the volcano.\nA couple of ledges can be seen on the other side of the volcano;\nit appears that this ledge is intermediate in elevation between\nthose on the other side. The exit from this room is to the east.",
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
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "I wouldn't try that.",
     "dir": "DOWN"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "It is impossible to cross this distance.",
     "dir": "CROSS"
    },
    {
     "to": "LAVA-TUBE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM VOLCANO-VIEW\n       (IN ROOMS)\n       (LDESC\n\"You are on a ledge in the middle of a large volcano. Below you\nthe volcano bottom can be seen and above is the rim of the volcano.\nA couple of ledges can be seen on the other side of the volcano;\nit appears that this ledge is intermediate in elevation between\nthose on the other side. The exit from this room is to the east.\")\n       (DESC \"Volcano View\")\n       (DOWN \"I wouldn't try that.\")\n       (CROSS \"It is impossible to cross this distance.\")\n       (EAST TO LAVA-TUBE)\n       (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "LEDGE-2": {
   "name": "LEDGE-2",
   "file": "2dungeon.zil",
   "line": 1386,
   "endLine": 1394,
   "desc": "Wide Ledge",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NONLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "LEDGE-FCN",
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
     "message": "It's a long way down.",
     "dir": "DOWN"
    },
    {
     "to": "VOLCANO-BOTTOM",
     "kind": "conditional",
     "condition": "GNOME-DOOR-FLAG",
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "SAFE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "HOOK-2"
   ],
   "source": "<ROOM LEDGE-2\n       (IN ROOMS)\n       (LDESC \" \")\n       (DESC \"Wide Ledge\")\n       (DOWN \"It's a long way down.\")\n       (WEST TO VOLCANO-BOTTOM IF GNOME-DOOR-FLAG)\n       (SOUTH TO SAFE-ROOM)\n       (ACTION LEDGE-FCN)\n       (FLAGS RLANDBIT NONLANDBIT)>",
   "referencedBy": [
    "I-BALLOON",
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "I-LEDGE",
    "I-GNOME"
   ]
  },
  "SAFE-ROOM": {
   "name": "SAFE-ROOM",
   "file": "2dungeon.zil",
   "line": 1396,
   "endLine": 1402,
   "desc": "Dusty Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "SAFE-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "LEDGE-2",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "SAFE",
    "SLOT"
   ],
   "source": "<ROOM SAFE-ROOM\n       (IN ROOMS)\n       (LDESC \" \")\n       (DESC \"Dusty Room\")\n       (NORTH TO LEDGE-2)\n       (ACTION SAFE-ROOM-FCN)\n       (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "I-FUSE",
    "I-SAFE",
    "LEDGE-FCN"
   ]
  },
  "LAVA-ROOM": {
   "name": "LAVA-ROOM",
   "file": "2dungeon.zil",
   "line": 1404,
   "endLine": 1412,
   "desc": "Lava Room",
   "ldesc": "This is a small room, whose walls are formed by an old lava flow.\nThere are exits here to the east and the south.",
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
     "to": "VOLCANO-BOTTOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "GLACIER-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [
    "RUBY"
   ],
   "source": "<ROOM LAVA-ROOM\n       (IN ROOMS)\n       (LDESC\n\"This is a small room, whose walls are formed by an old lava flow.\nThere are exits here to the east and the south.\")\n       (DESC \"Lava Room\")\n       (SOUTH TO VOLCANO-BOTTOM)\n       (EAST TO GLACIER-ROOM)\n       (FLAGS RLANDBIT)>",
   "referencedBy": []
  },
  "MAGNET-ROOM": {
   "name": "MAGNET-ROOM",
   "file": "2dungeon.zil",
   "line": 1420,
   "endLine": 1434,
   "desc": "Low Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "MAGNET-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "NE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "NW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "SW"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "SE"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "MAGNET-ROOM-EXIT",
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "ROBOT-LABEL",
    "ROBOT"
   ],
   "source": "<ROOM MAGNET-ROOM\n       (IN ROOMS)\n       (LDESC \" \")\n       (DESC \"Low Room\")\n       (NORTH PER MAGNET-ROOM-EXIT)\n       (SOUTH PER MAGNET-ROOM-EXIT)\n       (WEST PER MAGNET-ROOM-EXIT)\n       (NE PER MAGNET-ROOM-EXIT)\n       (NW PER MAGNET-ROOM-EXIT)\n       (SW PER MAGNET-ROOM-EXIT)\n       (SE PER MAGNET-ROOM-EXIT)\n       (EAST PER MAGNET-ROOM-EXIT)\n       (OUT PER MAGNET-ROOM-EXIT)\n       (ACTION MAGNET-ROOM-FCN)\n       (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "CAKE-CRUMBLE"
   ]
  },
  "MACHINE-ROOM": {
   "name": "MACHINE-ROOM",
   "file": "2dungeon.zil",
   "line": 1436,
   "endLine": 1449,
   "desc": "Machine Room",
   "ldesc": "This is a large room full of assorted heavy machinery, whirring noisily.\nThe room smells of burned resistors. Along one wall are three buttons\nwhich are, respectively, round, triangular, and square. Naturally,\nabove these buttons are instructions written in EBCDIC. A large sign\nin English above all the buttons says|\n       \"DANGER -- HIGH VOLTAGE\"|\nThere are exits to the west and the south.",
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
     "to": "MAGNET-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "CAGE-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "ROUND-BUTTON",
    "SQUARE-BUTTON",
    "TRIANGULAR-BUTTON"
   ],
   "source": "<ROOM MACHINE-ROOM\n       (IN ROOMS)\n       (LDESC\n\"This is a large room full of assorted heavy machinery, whirring noisily.\nThe room smells of burned resistors. Along one wall are three buttons\nwhich are, respectively, round, triangular, and square. Naturally,\nabove these buttons are instructions written in EBCDIC. A large sign\nin English above all the buttons says|\n       \\\"DANGER -- HIGH VOLTAGE\\\"|\nThere are exits to the west and the south.\")\n       (DESC \"Machine Room\")\n       (WEST TO MAGNET-ROOM)\n       (SOUTH TO CAGE-ROOM)\n       (FLAGS RLANDBIT ONBIT)>",
   "referencedBy": [
    "CAKE-CRUMBLE",
    "MAGNET-ROOM-EXIT"
   ]
  },
  "CAGE-ROOM": {
   "name": "CAGE-ROOM",
   "file": "2dungeon.zil",
   "line": 1451,
   "endLine": 1465,
   "desc": "Dingy Closet",
   "ldesc": "This is a dingy closet adjacent to a larger room to the north.\nChiselled into a wall are these words:|\n|\n     Protected by|\n       FROBOZZ|\n Magic Alarm Company|\n  (Hello, footpad!)||\nThere doesn't seem to be any footpad here, however.",
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
    "PALANTIR-1",
    "CAGE"
   ],
   "source": "<ROOM CAGE-ROOM\n       (IN ROOMS)\n       (LDESC\n\"This is a dingy closet adjacent to a larger room to the north.\nChiselled into a wall are these words:|\n|\n     Protected by|\n       FROBOZZ|\n Magic Alarm Company|\n  (Hello, footpad!)||\nThere doesn't seem to be any footpad here, however.\")\n       (DESC \"Dingy Closet\")\n       (OUT TO MACHINE-ROOM)\n       (NORTH TO MACHINE-ROOM)\n       (FLAGS ONBIT RLANDBIT)>",
   "referencedBy": [
    "CAKE-CRUMBLE",
    "SPHERE-FCN",
    "I-SPHERE",
    "IN-CAGE-FCN",
    "ROBOT-FCN"
   ]
  },
  "IN-CAGE": {
   "name": "IN-CAGE",
   "file": "2dungeon.zil",
   "line": 1467,
   "endLine": 1472,
   "desc": "Cage",
   "ldesc": "You are trapped inside a solid steel cage.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "NWALLBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "IN-CAGE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM IN-CAGE\n       (IN ROOMS)\n       (LDESC \"You are trapped inside a solid steel cage.\")\n       (DESC \"Cage\")\n       (ACTION IN-CAGE-FCN)\n       (FLAGS RLANDBIT NWALLBIT ONBIT)>",
   "referencedBy": [
    "CAKE-CRUMBLE",
    "SPHERE-FCN",
    "I-SPHERE"
   ]
  },
  "WELL-TOP": {
   "name": "WELL-TOP",
   "file": "2dungeon.zil",
   "line": 1474,
   "endLine": 1486,
   "desc": "Top of Well",
   "ldesc": "You are at the top of the well. Well done. There are etchings on\nthe side of the well. There is a small crack across the floor at the\nentrance to a room on the east, but it can be crossed easily.",
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
    "TOP-ETCHINGS"
   ],
   "source": "<ROOM WELL-TOP\n       (IN ROOMS)\n       (LDESC\n\"You are at the top of the well. Well done. There are etchings on\nthe side of the well. There is a small crack across the floor at the\nentrance to a room on the east, but it can be crossed easily.\")\n       (DESC \"Top of Well\")\n       (EAST TO TEA-ROOM)\n       (DOWN \"It's a long way down!\")\n       (FLAGS RLANDBIT NONLANDBIT)\n       (VALUE 10)\n       (GLOBAL WELL)\n       (PSEUDO \"CRACK\" CRACK-PSEUDO)>",
   "referencedBy": [
    "BUCKET-FCN",
    "CAKE-CRUMBLE",
    "I-WIZARD"
   ]
  },
  "WELL-BOTTOM": {
   "name": "WELL-BOTTOM",
   "file": "2dungeon.zil",
   "line": 1493,
   "endLine": 1503,
   "desc": "Circular Room",
   "ldesc": "This is a damp circular room, whose walls are made of brick and\nmortar. The roof of this room is not visible, but there appear to be\nsome etchings on the walls. There is a passageway to the west.",
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
     "to": "PEARL-ROOM",
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
    "BUCKET"
   ],
   "source": "<ROOM WELL-BOTTOM\n       (IN ROOMS)\n       (LDESC\n\"This is a damp circular room, whose walls are made of brick and\nmortar. The roof of this room is not visible, but there appear to be\nsome etchings on the walls. There is a passageway to the west.\")\n       (DESC \"Circular Room\")\n       (WEST TO PEARL-ROOM)\n       (UP \"The walls cannot be climbed.\")\n       (FLAGS RLANDBIT NONLANDBIT)\n       (GLOBAL WELL)>",
   "referencedBy": [
    "BUCKET-FCN",
    "WISH-FCN",
    "WELL-FCN",
    "I-WIZARD"
   ]
  },
  "TEA-ROOM": {
   "name": "TEA-ROOM",
   "file": "2dungeon.zil",
   "line": 1505,
   "endLine": 1518,
   "desc": "Tea Room",
   "ldesc": "This is a small room containing a large oblong table, no doubt set\nfor afternoon tea. It is clear from the\nobjects on the table that the users were indeed mad. In the eastern\ncorner of the room is a small hole (no more than four inches high).\nThere are passageways leading away to the west and the northwest.",
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
     "message": "Only a mouse could get in there.",
     "dir": "EAST"
    },
    {
     "to": "WELL-TOP",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    },
    {
     "to": "MAGNET-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    }
   ],
   "contents": [
    "ALICE-TABLE"
   ],
   "source": "<ROOM TEA-ROOM\n       (IN ROOMS)\n       (LDESC\n\"This is a small room containing a large oblong table, no doubt set\nfor afternoon tea. It is clear from the\nobjects on the table that the users were indeed mad. In the eastern\ncorner of the room is a small hole (no more than four inches high).\nThere are passageways leading away to the west and the northwest.\")\n       (DESC \"Tea Room\")\n       (EAST \"Only a mouse could get in there.\")\n       (WEST TO WELL-TOP)\n       (NW TO MAGNET-ROOM)\n       (FLAGS RLANDBIT ONBIT)\n       (PSEUDO \"HOLE\" ALICE-HOLE)>",
   "referencedBy": [
    "EATME-FCN",
    "CAKE-CRUMBLE",
    "CAKE-FCN",
    "MAGNET-ROOM-EXIT"
   ]
  },
  "POSTS-ROOM": {
   "name": "POSTS-ROOM",
   "file": "2dungeon.zil",
   "line": 1528,
   "endLine": 1543,
   "desc": "Posts Room",
   "ldesc": "This is an enormous room, in the center of which are four wooden\nposts delineating a rectangular area, above which is what appears to\nbe a wooden roof. In fact, all objects in this room appear to be\nabnormally large. To the east is a passageway. There are large gaping\nchasms to the west and northwest.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "POSTS-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "CHASM"
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
     "message": "A great chasm blocks your way.",
     "dir": "NW"
    },
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
     "message": "A great chasm blocks your way.",
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "blocked",
     "condition": null,
     "else": null,
     "per": null,
     "message": "A great chasm blocks your way.",
     "dir": "DOWN"
    }
   ],
   "contents": [
    "POSTS"
   ],
   "source": "<ROOM POSTS-ROOM\n       (IN ROOMS)\n       (LDESC\n\"This is an enormous room, in the center of which are four wooden\nposts delineating a rectangular area, above which is what appears to\nbe a wooden roof. In fact, all objects in this room appear to be\nabnormally large. To the east is a passageway. There are large gaping\nchasms to the west and northwest.\")\n       (DESC \"Posts Room\")\n       (NW \"A great chasm blocks your way.\")\n       (EAST TO POOL-ROOM)\n       (WEST \"A great chasm blocks your way.\")\n       (DOWN \"A great chasm blocks your way.\")\n       (FLAGS RLANDBIT ONBIT)\n       (ACTION POSTS-ROOM-FCN)\n       (GLOBAL CHASM)>",
   "referencedBy": [
    "EATME-FCN",
    "CAKE-CRUMBLE",
    "CAKE-FCN",
    "I-WIZARD"
   ]
  },
  "POOL-ROOM": {
   "name": "POOL-ROOM",
   "file": "2dungeon.zil",
   "line": 1545,
   "endLine": 1553,
   "desc": "Pool Room",
   "ldesc": "This is a large room, one half of which is depressed. Salty water flows\nfrom a large leak in the ceiling. The only exit is to the west.",
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
    "FLASK",
    "LEAK",
    "POOL",
    "CANDY"
   ],
   "source": "<ROOM POOL-ROOM\n       (IN ROOMS)\n       (LDESC\n\"This is a large room, one half of which is depressed. Salty water flows\nfrom a large leak in the ceiling. The only exit is to the west.\")\n       (DESC \"Pool Room\")\n       (OUT TO POSTS-ROOM)\n       (WEST TO POSTS-ROOM)\n       (FLAGS RLANDBIT)>",
   "referencedBy": [
    "WATER-FCN",
    "CAKE-CRUMBLE",
    "CAKE-FCN",
    "I-WIZARD"
   ]
  },
  "BANK-ENTRANCE": {
   "name": "BANK-ENTRANCE",
   "file": "2dungeon.zil",
   "line": 1559,
   "endLine": 1580,
   "desc": "Bank Entrance",
   "ldesc": "This is the entrance hall of the Bank of Zork, the largest\nbanking institution of the Great Underground Empire. A partial\naccount of its history is in \"The Lives of the Twelve Flatheads,\" in\nthe chapter on J. Pierpont Flathead. A more detailed history (albeit\nless objective) may be found in Flathead's outrageous autobiography\n\"I'm Rich and You Aren't - So There!\".\nMost of the furniture has been ravaged by passing scavengers. All\nthat remains are two signs at the northwest and northeast corners of\nthe room, which say:|\n|\n    <--  VIEWING ROOMS  -->|\n|\nThe way out (ornate but tasteful) is to the east.\n",
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
     "to": "TELLER-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NW"
    },
    {
     "to": "TELLER-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NE"
    },
    {
     "to": "FRESCO-ROOM",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM BANK-ENTRANCE\n      (IN ROOMS)\n      (LDESC\n\"This is the entrance hall of the Bank of Zork, the largest\nbanking institution of the Great Underground Empire. A partial\naccount of its history is in \\\"The Lives of the Twelve Flatheads,\\\" in\nthe chapter on J. Pierpont Flathead. A more detailed history (albeit\nless objective) may be found in Flathead's outrageous autobiography\n\\\"I'm Rich and You Aren't - So There!\\\".\nMost of the furniture has been ravaged by passing scavengers. All\nthat remains are two signs at the northwest and northeast corners of\nthe room, which say:|\n|\n    <--  VIEWING ROOMS  -->|\n|\nThe way out (ornate but tasteful) is to the east.\n\")\n      (DESC \"Bank Entrance\")\n      (NW TO TELLER-WEST)\n      (NE TO TELLER-EAST)\n      (EAST TO FRESCO-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "ZGNOME-FCN"
   ]
  },
  "TELLER-WEST": {
   "name": "TELLER-WEST",
   "file": "2dungeon.zil",
   "line": 1582,
   "endLine": 1590,
   "desc": "West Teller's Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TELLER-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "VIEWING-WEST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BANK-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DEPOSITORY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "WEST"
    }
   ],
   "contents": [],
   "source": "<ROOM TELLER-WEST\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"West Teller's Room\")\n      (NORTH TO VIEWING-WEST)\n      (SOUTH TO BANK-ENTRANCE)\n      (WEST TO DEPOSITORY)\n      (ACTION TELLER-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "BKLEAVEW",
    "TELLER-ROOM"
   ]
  },
  "TELLER-EAST": {
   "name": "TELLER-EAST",
   "file": "2dungeon.zil",
   "line": 1592,
   "endLine": 1600,
   "desc": "East Teller's Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TELLER-ROOM",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "VIEWING-EAST",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    },
    {
     "to": "BANK-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "DEPOSITORY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "EAST"
    }
   ],
   "contents": [],
   "source": "<ROOM TELLER-EAST\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"East Teller's Room\")\n      (NORTH TO VIEWING-EAST)\n      (SOUTH TO BANK-ENTRANCE)\n      (EAST TO DEPOSITORY)\n      (ACTION TELLER-ROOM)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "BKLEAVEE"
   ]
  },
  "VIEWING-WEST": {
   "name": "VIEWING-WEST",
   "file": "2dungeon.zil",
   "line": 1602,
   "endLine": 1617,
   "desc": "West Viewing Room",
   "ldesc": "This room was used by holders of safety deposit boxes to view\ntheir contents. On the north side of the room is a sign which says:|\n|\n\"Remain here while the teller retrieves your safety deposit box.\nWhen you are finished, leave the box, and exit to the south.\nSafety deposit boxes cannot be removed from this room!|\n|\nThank You for Banking at the Zork!\"\n",
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
    "SEWL",
    "SWWL",
    "SNWL",
    "SSWL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BANK-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM VIEWING-WEST\n      (IN ROOMS)\n      (LDESC\n\"This room was used by holders of safety deposit boxes to view\ntheir contents. On the north side of the room is a sign which says:|\n|\n\\\"Remain here while the teller retrieves your safety deposit box.\nWhen you are finished, leave the box, and exit to the south.\nSafety deposit boxes cannot be removed from this room!|\n|\nThank You for Banking at the Zork!\\\"\n\")\n      (DESC \"West Viewing Room\")\n      (SOUTH TO BANK-ENTRANCE)\n      (FLAGS RLANDBIT)\n      (GLOBAL SEWL SWWL SNWL SSWL)>",
   "referencedBy": [
    "I-CURTAIN"
   ]
  },
  "VIEWING-EAST": {
   "name": "VIEWING-EAST",
   "file": "2dungeon.zil",
   "line": 1619,
   "endLine": 1634,
   "desc": "East Viewing Room",
   "ldesc": "This room was used by holders of safety deposit boxes to view\ntheir contents. On the north side of the room is a sign which says|\n|\n\"Remain here while the teller retrieves your safety deposit box.\nWhen you are finished, leave the box, and exit to the south.\nSafety deposit boxes cannot be removed from this room!|\n|\nThank You for Banking at the Zork!\"\n",
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
    "SEWL",
    "SWWL",
    "SNWL",
    "SSWL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
    {
     "to": "BANK-ENTRANCE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [],
   "source": "<ROOM VIEWING-EAST\n      (IN ROOMS)\n      (LDESC\n\"This room was used by holders of safety deposit boxes to view\ntheir contents. On the north side of the room is a sign which says|\n|\n\\\"Remain here while the teller retrieves your safety deposit box.\nWhen you are finished, leave the box, and exit to the south.\nSafety deposit boxes cannot be removed from this room!|\n|\nThank You for Banking at the Zork!\\\"\n\")\n      (DESC \"East Viewing Room\")\n      (SOUTH TO BANK-ENTRANCE)\n      (FLAGS RLANDBIT)\n      (GLOBAL SEWL SWWL SNWL SSWL)>",
   "referencedBy": [
    "I-CURTAIN"
   ]
  },
  "SMALL-ROOM": {
   "name": "SMALL-ROOM",
   "file": "2dungeon.zil",
   "line": 1636,
   "endLine": 1643,
   "desc": "Small Room",
   "ldesc": "This is a small, bare room with no distinguishing features. There\nare no exits from this room.",
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
    "SEWL",
    "SWWL",
    "SNWL",
    "SSWL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM SMALL-ROOM\n       (IN ROOMS)\n      (LDESC\n\"This is a small, bare room with no distinguishing features. There\nare no exits from this room.\")\n      (DESC \"Small Room\")\n      (FLAGS RLANDBIT )\n      (GLOBAL SEWL SWWL SNWL SSWL)>",
   "referencedBy": [
    "I-CURTAIN",
    "I-ZGNOME",
    "I-ZGNOME-OUT",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "VAULT": {
   "name": "VAULT",
   "file": "2dungeon.zil",
   "line": 1645,
   "endLine": 1651,
   "desc": "Vault",
   "ldesc": "This is the Vault of the Bank of Zork, in which there are no doors.",
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
    "SEWL",
    "SWWL",
    "SNWL",
    "SSWL"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [
    "BILLS"
   ],
   "source": "<ROOM VAULT\n       (IN ROOMS)\n      (LDESC\n\"This is the Vault of the Bank of Zork, in which there are no doors.\")\n      (DESC \"Vault\")\n      (FLAGS  RLANDBIT)\n      (GLOBAL SEWL SWWL SNWL SSWL)>",
   "referencedBy": [
    "CUBE-F",
    "I-CURTAIN",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "DEPOSITORY": {
   "name": "DEPOSITORY",
   "file": "2dungeon.zil",
   "line": 1653,
   "endLine": 1669,
   "desc": "Safety Depository",
   "ldesc": "This is a large rectangular room. The east and west walls were used\nfor storing safety deposit boxes, but all have been carefully removed\nby evil persons. To the east, west, and south of the room are large\ndoorways. The northern \"wall\" of the room is a shimmering curtain of\nlight. In the center of the room is a large stone cube, about 10 feet\non a side. Engraved on the side of the cube is some lettering.",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEPOSITORY-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "SNWL"
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
     "message": "There is a curtain of light there.",
     "dir": "NORTH"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "BKLEAVEW",
     "message": null,
     "dir": "WEST"
    },
    {
     "to": null,
     "kind": "routine",
     "condition": null,
     "else": null,
     "per": "BKLEAVEE",
     "message": null,
     "dir": "EAST"
    },
    {
     "to": "OFFICE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    }
   ],
   "contents": [
    "BANK-BROCHURE",
    "CUBE",
    "CURTAIN"
   ],
   "source": "<ROOM DEPOSITORY\n       (IN ROOMS)\n      (LDESC\n\"This is a large rectangular room. The east and west walls were used\nfor storing safety deposit boxes, but all have been carefully removed\nby evil persons. To the east, west, and south of the room are large\ndoorways. The northern \\\"wall\\\" of the room is a shimmering curtain of\nlight. In the center of the room is a large stone cube, about 10 feet\non a side. Engraved on the side of the cube is some lettering.\")\n      (DESC \"Safety Depository\")\n      (NORTH \"There is a curtain of light there.\")\n      (WEST PER BKLEAVEW)\n      (EAST PER BKLEAVEE)\n      (SOUTH TO OFFICE)\n      (ACTION DEPOSITORY-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL SNWL)>",
   "referencedBy": [
    "SCOL-OBJ",
    "RANDOMIZE-OBJECTS",
    "V-THROUGH"
   ]
  },
  "OFFICE": {
   "name": "OFFICE",
   "file": "2dungeon.zil",
   "line": 1671,
   "endLine": 1679,
   "desc": "Chairman's Office",
   "ldesc": "This room was the office of the Chairman of the Bank of Zork.\nLike the other rooms here, it has been extensively vandalized.\nThe lone exit is to the north.",
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
     "to": "DEPOSITORY",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "NORTH"
    }
   ],
   "contents": [
    "PORTRAIT"
   ],
   "source": "<ROOM OFFICE\n       (IN ROOMS)\n      (LDESC\n\"This room was the office of the Chairman of the Bank of Zork.\nLike the other rooms here, it has been extensively vandalized.\nThe lone exit is to the north.\")\n      (DESC \"Chairman's Office\")\n      (NORTH TO DEPOSITORY)\n      (FLAGS RLANDBIT)>",
   "referencedBy": [
    "RANDOMIZE-OBJECTS"
   ]
  },
  "DREARY-ROOM": {
   "name": "DREARY-ROOM",
   "file": "2dungeon.zil",
   "line": 1702,
   "endLine": 1710,
   "desc": "Dreary Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DREARY-ROOM-FCN",
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
     "to": "TINY-ROOM",
     "kind": "conditional",
     "condition": "PDOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "SOUTH"
    },
    {
     "to": "TINY-ROOM",
     "kind": "conditional",
     "condition": "PDOOR IS OPEN",
     "else": null,
     "per": null,
     "message": null,
     "dir": "OUT"
    }
   ],
   "contents": [
    "LID-2",
    "PTABLE",
    "PCRACK",
    "KEYHOLE-2",
    "PALANTIR-2"
   ],
   "source": "<ROOM DREARY-ROOM\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Dreary Room\")\n      (SOUTH TO TINY-ROOM IF PDOOR IS OPEN)\n      (OUT TO TINY-ROOM IF PDOOR IS OPEN)\n      (ACTION DREARY-ROOM-FCN)\n      (FLAGS RLANDBIT ONBIT)\n      (GLOBAL PDOOR PWINDOW)>",
   "referencedBy": [
    "PKH-FCN",
    "PLID-FCN",
    "PWINDOW-FCN",
    "PDOOR-FCN"
   ]
  },
  "TINY-ROOM": {
   "name": "TINY-ROOM",
   "file": "2dungeon.zil",
   "line": 1712,
   "endLine": 1721,
   "desc": "Tiny Room",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "TINY-ROOM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [
    "PDOOR",
    "PWINDOW",
    "CHASM"
   ],
   "pseudo": [],
   "otherProps": {},
   "exits": [
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
    },
    {
     "to": "RAVINE-LEDGE",
     "kind": "unconditional",
     "condition": null,
     "else": null,
     "per": null,
     "message": null,
     "dir": "DOWN"
    }
   ],
   "contents": [
    "LID-1",
    "KEYHOLE-1"
   ],
   "source": "<ROOM TINY-ROOM\n      (IN ROOMS)\n      (LDESC \" \")\n      (DESC \"Tiny Room\")\n      (NORTH TO DREARY-ROOM IF PDOOR IS OPEN)\n      (IN TO DREARY-ROOM IF PDOOR IS OPEN)\n      (DOWN TO RAVINE-LEDGE)\n      (FLAGS RLANDBIT)\n      (ACTION TINY-ROOM-FCN)\n      (GLOBAL PDOOR PWINDOW CHASM)>",
   "referencedBy": [
    "PKH-FCN",
    "PWINDOW-FCN",
    "PDOOR-FCN",
    "I-DRAGON"
   ]
  },
  "DEAD-PALANTIR-1": {
   "name": "DEAD-PALANTIR-1",
   "file": "2dungeon.zil",
   "line": 2658,
   "endLine": 2665,
   "desc": "Room of Red Mist",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR",
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
   "source": "<ROOM DEAD-PALANTIR-1\n\t(IN ROOMS)\n\t(LDESC \" \")\n\t(DESC \"Room of Red Mist\")\n\t(WEST TO DEAD-PALANTIR-2)\n\t(FLAGS RLANDBIT ONBIT)\n\t(ACTION DEAD-PALANTIR)\n\t(GLOBAL GLOBAL-PALANTIR)>",
   "referencedBy": [
    "DEAD-PALANTIR",
    "JIGS-UP"
   ]
  },
  "DEAD-PALANTIR-2": {
   "name": "DEAD-PALANTIR-2",
   "file": "2dungeon.zil",
   "line": 2667,
   "endLine": 2674,
   "desc": "Room of Blue Mist",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR",
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
   "source": "<ROOM DEAD-PALANTIR-2\n\t(IN ROOMS)\n\t(LDESC \" \")\n\t(DESC \"Room of Blue Mist\")\n\t(WEST TO DEAD-PALANTIR-3)\n\t(FLAGS RLANDBIT ONBIT)\n\t(ACTION DEAD-PALANTIR)\n\t(GLOBAL GLOBAL-PALANTIR)>",
   "referencedBy": [
    "DEAD-PALANTIR",
    "JIGS-UP"
   ]
  },
  "DEAD-PALANTIR-3": {
   "name": "DEAD-PALANTIR-3",
   "file": "2dungeon.zil",
   "line": 2676,
   "endLine": 2683,
   "desc": "Room of White Mist",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR",
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
   "source": "<ROOM DEAD-PALANTIR-3\n\t(IN ROOMS)\n\t(LDESC \" \")\n\t(DESC \"Room of White Mist\")\n\t(WEST TO DEAD-PALANTIR-4)\n\t(FLAGS RLANDBIT ONBIT)\n\t(ACTION DEAD-PALANTIR)\n\t(GLOBAL GLOBAL-PALANTIR)>",
   "referencedBy": [
    "JIGS-UP"
   ]
  },
  "DEAD-PALANTIR-4": {
   "name": "DEAD-PALANTIR-4",
   "file": "2dungeon.zil",
   "line": 2685,
   "endLine": 2690,
   "desc": "Room of Black Mist",
   "ldesc": " ",
   "fdesc": null,
   "loc": "ROOMS",
   "flags": [
    "RLANDBIT",
    "ONBIT"
   ],
   "synonyms": [],
   "adjectives": [],
   "action": "DEAD-PALANTIR",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "exits": [],
   "contents": [],
   "source": "<ROOM DEAD-PALANTIR-4\n\t(LDESC \" \")\n\t(IN ROOMS)\n\t(DESC \"Room of Black Mist\")\n\t(FLAGS RLANDBIT ONBIT)\n\t(ACTION DEAD-PALANTIR)>",
   "referencedBy": [
    "DEAD-PALANTIR"
   ]
  }
 },
 "objects": {
  "STREAM": {
   "name": "STREAM",
   "file": "2dungeon.zil",
   "line": 40,
   "endLine": 46,
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
    "FLOWING",
    "SMALL"
   ],
   "action": "STREAM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STREAM\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STREAM)\n\t(ADJECTIVE FLOWING SMALL)\n\t(DESC \"stream\")\n\t(ACTION STREAM-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "CHASM": {
   "name": "CHASM",
   "file": "2dungeon.zil",
   "line": 48,
   "endLine": 54,
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
   "action": "CHASM-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CHASM\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CHASM RAVINE)\n\t(ADJECTIVE DEEP)\n\t(DESC \"chasm\")\n\t(ACTION CHASM-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "MOSS": {
   "name": "MOSS",
   "file": "2dungeon.zil",
   "line": 56,
   "endLine": 62,
   "desc": "mosses",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "MOSS",
    "MOSSES"
   ],
   "adjectives": [
    "GLOWING",
    "PHOSPHORESCENT"
   ],
   "action": "MOSS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MOSS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM MOSS MOSSES)\n\t(ADJECTIVE GLOWING PHOSPHORESCENT)\n\t(DESC \"mosses\")\n\t(ACTION MOSS-FCN)\n\t(FLAGS NDESCBIT TRYTAKEBIT)>",
   "referencedBy": []
  },
  "ROSE-BUSH": {
   "name": "ROSE-BUSH",
   "file": "2dungeon.zil",
   "line": 64,
   "endLine": 70,
   "desc": "roses",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "ROSES",
    "BUSH",
    "ARBOR"
   ],
   "adjectives": [
    "ROSE"
   ],
   "action": "ROSE-BUSH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROSE-BUSH\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM ROSES BUSH ARBOR)\n\t(ADJECTIVE ROSE)\n\t(DESC \"roses\")\n\t(ACTION ROSE-BUSH-FCN)\n\t(FLAGS NDESCBIT TRYTAKEBIT)>",
   "referencedBy": []
  },
  "BRIDGE": {
   "name": "BRIDGE",
   "file": "2dungeon.zil",
   "line": 72,
   "endLine": 78,
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
    "STONE",
    "WOODEN",
    "RICKETY"
   ],
   "action": "BRIDGE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRIDGE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM BRIDGE)\n\t(ADJECTIVE STONE WOODEN RICKETY)\n\t(DESC \"bridge\")\n\t(ACTION BRIDGE-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "MAGIC-ACTOR"
   ]
  },
  "TUNNEL": {
   "name": "TUNNEL",
   "file": "2dungeon.zil",
   "line": 80,
   "endLine": 86,
   "desc": "tunnel",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "PASSAGE",
    "TUNNEL",
    "CRAWLWAY"
   ],
   "adjectives": [
    "DARK",
    "SMOKY"
   ],
   "action": "TUNNEL-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TUNNEL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PASSAGE TUNNEL CRAWLWAY)\n        (ADJECTIVE DARK SMOKY)\n\t(DESC \"tunnel\")\n\t(FLAGS NDESCBIT)\n\t(ACTION TUNNEL-OBJECT)>",
   "referencedBy": []
  },
  "EAST-WALL": {
   "name": "EAST-WALL",
   "file": "2dungeon.zil",
   "line": 88,
   "endLine": 93,
   "desc": "east wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "EAST",
    "EASTERN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT EAST-WALL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE EAST EASTERN)\n\t(DESC \"east wall\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "SOUTH-WALL": {
   "name": "SOUTH-WALL",
   "file": "2dungeon.zil",
   "line": 95,
   "endLine": 100,
   "desc": "south wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "SOUTH",
    "SOUTHE"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SOUTH-WALL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE SOUTH SOUTHE) ;\"only 6 chars count and southeast exists\"\n\t(DESC \"south wall\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "WEST-WALL": {
   "name": "WEST-WALL",
   "file": "2dungeon.zil",
   "line": 102,
   "endLine": 107,
   "desc": "west wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "WEST",
    "WESTERN"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WEST-WALL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE WEST WESTERN)\n\t(DESC \"west wall\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "NORTH-WALL": {
   "name": "NORTH-WALL",
   "file": "2dungeon.zil",
   "line": 109,
   "endLine": 114,
   "desc": "north wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
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
   "source": "<OBJECT NORTH-WALL\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE NORTH NORTHE)\t;\"only six chars used...\"\n\t(DESC \"north wall\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "GLOBAL-WATER": {
   "name": "GLOBAL-WATER",
   "file": "2dungeon.zil",
   "line": 116,
   "endLine": 121,
   "desc": "water",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DRINKBIT"
   ],
   "synonyms": [
    "WATER",
    "QUANTITY"
   ],
   "adjectives": [],
   "action": "WATER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WATER\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WATER QUANTITY)\n\t(DESC \"water\")\n\t(FLAGS DRINKBIT)\n\t(ACTION WATER-FCN)>",
   "referencedBy": [
    "WATER-FCN",
    "PRE-BOARD",
    "V-EAT",
    "HIT-SPOT",
    "PRE-FILL",
    "V-FILL",
    "V-SWIM"
   ]
  },
  "WISH": {
   "name": "WISH",
   "file": "2dungeon.zil",
   "line": 123,
   "endLine": 128,
   "desc": "wish",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WISH",
    "BLESS"
   ],
   "adjectives": [],
   "action": "WISH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WISH\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM WISH BLESS)\n\t(DESC \"wish\")\n\t(FLAGS NDESCBIT)\n\t(ACTION WISH-FCN)>",
   "referencedBy": [
    "V-WISH"
   ]
  },
  "WELL": {
   "name": "WELL",
   "file": "2dungeon.zil",
   "line": 130,
   "endLine": 136,
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
   "action": "WELL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WELL\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WELL)\n\t(ADJECTIVE MAGIC)\n\t(DESC \"well\")\n\t(FLAGS NDESCBIT)\n\t(ACTION WELL-FCN)>",
   "referencedBy": []
  },
  "SEWL": {
   "name": "SEWL",
   "file": "2dungeon.zil",
   "line": 138,
   "endLine": 145,
   "desc": "east wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "EAST",
    "EASTERN"
   ],
   "action": "SCOLWALL",
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
   "source": "<OBJECT SEWL\t\t\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE EAST EASTERN)\n\t(DESC \"east wall\")\n\t(FLAGS NDESCBIT)\n\t(SIZE 0) ;\",P?EAST\"\n\t(ACTION SCOLWALL)>",
   "referencedBy": [
    "GO"
   ]
  },
  "SWWL": {
   "name": "SWWL",
   "file": "2dungeon.zil",
   "line": 147,
   "endLine": 154,
   "desc": "west wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "WEST",
    "WESTERN"
   ],
   "action": "SCOLWALL",
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
   "source": "<OBJECT SWWL\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE WEST WESTERN)\n\t(DESC \"west wall\")\n\t(FLAGS NDESCBIT)\n\t(SIZE 0) ;\"P?WEST\"\n\t(ACTION SCOLWALL)>",
   "referencedBy": [
    "GO"
   ]
  },
  "SSWL": {
   "name": "SSWL",
   "file": "2dungeon.zil",
   "line": 156,
   "endLine": 163,
   "desc": "south wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "SOUTH",
    "SOUTHE"
   ],
   "action": "SCOLWALL",
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
   "source": "<OBJECT SSWL\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE SOUTH SOUTHE)\n\t(DESC \"south wall\")\n\t(FLAGS NDESCBIT)\n\t(SIZE 0) ;\"P?SOUTH\"\n\t(ACTION SCOLWALL)>",
   "referencedBy": [
    "GO"
   ]
  },
  "SNWL": {
   "name": "SNWL",
   "file": "2dungeon.zil",
   "line": 165,
   "endLine": 172,
   "desc": "north wall",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "WALL"
   ],
   "adjectives": [
    "NORTH",
    "NORTHE"
   ],
   "action": "SCOLWALL",
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
   "source": "<OBJECT SNWL\n        (IN LOCAL-GLOBALS)\n\t(SYNONYM WALL)\n\t(ADJECTIVE NORTH NORTHE)\n\t(DESC \"north wall\")\n\t(FLAGS NDESCBIT)\n\t(SIZE 0) ;\"P?NORTH\"\n\t(ACTION SCOLWALL)>",
   "referencedBy": [
    "GO",
    "V-THROUGH"
   ]
  },
  "GLOBAL-UNICORN": {
   "name": "GLOBAL-UNICORN",
   "file": "2dungeon.zil",
   "line": 265,
   "endLine": 271,
   "desc": "unicorn",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "UNICORN"
   ],
   "adjectives": [
    "BEAUTIFUL",
    "WHITE"
   ],
   "action": "GLOBAL-UNICORN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-UNICORN\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM UNICORN)\n\t(DESC \"unicorn\")\n\t(ADJECTIVE BEAUTIFUL WHITE)\n\t(FLAGS ACTORBIT)\n\t(ACTION GLOBAL-UNICORN-FCN)>",
   "referencedBy": []
  },
  "UNICORN": {
   "name": "UNICORN",
   "file": "2dungeon.zil",
   "line": 273,
   "endLine": 279,
   "desc": "unicorn",
   "ldesc": "There is a beautiful unicorn here cropping grass.",
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
   "action": "UNICORN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "GOLD-KEY",
    "RIBBON"
   ],
   "source": "<OBJECT UNICORN\n\t(SYNONYM UNICORN ANIMAL)\n\t(ADJECTIVE BEAUTIFUL WHITE)\n\t(DESC \"unicorn\")\n\t(LDESC \"There is a beautiful unicorn here cropping grass.\")\n\t(FLAGS ACTORBIT TRYTAKEBIT OPENBIT CONTBIT)\n\t(ACTION UNICORN-FCN)>",
   "referencedBy": [
    "I-GARDEN",
    "GLOBAL-UNICORN-FCN",
    "UNICORN-FCN"
   ]
  },
  "HEDGES": {
   "name": "HEDGES",
   "file": "2dungeon.zil",
   "line": 342,
   "endLine": 347,
   "desc": "hedge",
   "ldesc": null,
   "fdesc": null,
   "loc": "TOPIARY-ROOM",
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
   "source": "<OBJECT HEDGES\n\t(IN TOPIARY-ROOM)\n\t(DESC \"hedge\")\n\t(SYNONYM HEDGE HEDGES)\n\t(FLAGS NDESCBIT)\n\t(ACTION HEDGES-F)>",
   "referencedBy": []
  },
  "CHEST": {
   "name": "CHEST",
   "file": "2dungeon.zil",
   "line": 462,
   "endLine": 472,
   "desc": "rotten wooden chest",
   "ldesc": null,
   "fdesc": "A rotten old wooden chest is in one corner among the debris.",
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
    "OLD",
    "ROTTEN"
   ],
   "action": "CHEST-FCN",
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
   "source": "<OBJECT CHEST\n\t(IN DRAGON-LAIR)\n\t(SYNONYM CHEST TRUNK)\n\t(ADJECTIVE WOODEN OLD ROTTEN)\n\t(DESC \"rotten wooden chest\")\n\t(FDESC\n\"A rotten old wooden chest is in one corner among the debris.\")\n\t(FLAGS CONTBIT TAKEBIT)\n\t(ACTION CHEST-FCN)\n\t(CAPACITY 40)\n\t(SIZE 40)>",
   "referencedBy": [
    "DRAGON-FCN",
    "CHEST-FCN"
   ]
  },
  "STATUETTE": {
   "name": "STATUETTE",
   "file": "2dungeon.zil",
   "line": 474,
   "endLine": 482,
   "desc": "golden dragon statuette",
   "ldesc": null,
   "fdesc": "Nestled in the chest is a wrought gold statuette of a dragon.",
   "loc": "CHEST",
   "flags": [
    "STAGGERED",
    "TAKEBIT"
   ],
   "synonyms": [
    "TREASURE",
    "STATUETTE",
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
   "source": "<OBJECT STATUETTE\n\t(IN CHEST)\n\t(SYNONYM TREASURE STATUETTE DRAGON)\n\t(ADJECTIVE GOLD)\n\t(DESC \"golden dragon statuette\")\n\t(FDESC\n\"Nestled in the chest is a wrought gold statuette of a dragon.\")\n\t(FLAGS STAGGERED TAKEBIT)\n\t(VALUE 20)>",
   "referencedBy": []
  },
  "DRAGON": {
   "name": "DRAGON",
   "file": "2dungeon.zil",
   "line": 484,
   "endLine": 496,
   "desc": "huge red dragon",
   "ldesc": "A huge red dragon is lying on the rocks here, watching.",
   "fdesc": "A huge red dragon is lying here, blocking the entrance to a tunnel\nleading north. Smoke curls from his nostrils and out between his\nteeth.",
   "loc": "DRAGON-ROOM",
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "DRAGON",
    "SMAUG",
    "WORM"
   ],
   "adjectives": [
    "RED",
    "HUGE"
   ],
   "action": "DRAGON-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DRAGON\n\t(IN DRAGON-ROOM)\n\t(SYNONYM DRAGON SMAUG WORM)\n\t(ADJECTIVE RED HUGE)\n\t(DESC \"huge red dragon\")\n\t(LDESC\n\"A huge red dragon is lying on the rocks here, watching.\")\n\t(FDESC\n\"A huge red dragon is lying here, blocking the entrance to a tunnel\nleading north. Smoke curls from his nostrils and out between his\nteeth.\")\n\t(FLAGS ACTORBIT)\n\t(ACTION DRAGON-FCN)>",
   "referencedBy": [
    "DRAGON-FCN",
    "I-DRAGON",
    "DRAGON-LEAVES"
   ]
  },
  "DEAD-DRAGON": {
   "name": "DEAD-DRAGON",
   "file": "2dungeon.zil",
   "line": 498,
   "endLine": 504,
   "desc": "huge dead dragon",
   "ldesc": "A huge dead dragon is lying half blocking the stream.",
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "DRAGON",
    "SMAUG",
    "WORM"
   ],
   "adjectives": [
    "RED",
    "HUGE",
    "DEAD"
   ],
   "action": null,
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
   "source": "<OBJECT DEAD-DRAGON\n\t(SYNONYM DRAGON SMAUG WORM)\n\t(ADJECTIVE RED HUGE DEAD)\n\t(DESC \"huge dead dragon\")\n\t(LDESC\n\"A huge dead dragon is lying half blocking the stream.\")\n\t(SIZE 400)>",
   "referencedBy": [
    "I-DRAGON",
    "DRAGON-LEAVES"
   ]
  },
  "GLOBAL-PRINCESS": {
   "name": "GLOBAL-PRINCESS",
   "file": "2dungeon.zil",
   "line": 506,
   "endLine": 512,
   "desc": "beautiful princess",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
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
   "action": "PRINCESS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-PRINCESS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PRINCESS WOMAN LADY)\n\t(ADJECTIVE BEAUTIFUL YOUNG)\n\t(DESC \"beautiful princess\")\n\t(FLAGS ACTORBIT)\n\t(ACTION PRINCESS-FCN)>",
   "referencedBy": []
  },
  "PRINCESS": {
   "name": "PRINCESS",
   "file": "2dungeon.zil",
   "line": 514,
   "endLine": 524,
   "desc": "beautiful princess",
   "ldesc": "A beautiful young woman, wearing a dirty and bedraggled gown, sits\non a rock in the corner. Her hair is unkempt and she is oblivious to\nyour presence, almost in a trance.",
   "fdesc": null,
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
   "action": "PRINCESS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PRINCESS\n\t(IN DRAGON-LAIR)\n\t(SYNONYM PRINCESS WOMAN LADY)\n\t(ADJECTIVE BEAUTIFUL YOUNG)\n\t(DESC \"beautiful princess\")\n\t(LDESC\n\"A beautiful young woman, wearing a dirty and bedraggled gown, sits\non a rock in the corner. Her hair is unkempt and she is oblivious to\nyour presence, almost in a trance.\")\n\t(FLAGS ACTORBIT)\n\t(ACTION PRINCESS-FCN)>",
   "referencedBy": [
    "I-GARDEN",
    "CHEST-FCN",
    "PRINCESS-FCN",
    "I-PRINCESS",
    "I-UNICORN"
   ]
  },
  "WIZ-DOOR": {
   "name": "WIZ-DOOR",
   "file": "2dungeon.zil",
   "line": 624,
   "endLine": 630,
   "desc": "door partly covered in cobwebs",
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
    "COBWEBBED",
    "WOODEN",
    "OAK"
   ],
   "action": "WIZ-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT WIZ-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE COBWEBBED WOODEN OAK)\n\t(DESC \"door partly covered in cobwebs\")\n\t(FLAGS DOORBIT CONTBIT)\n\t(ACTION WIZ-DOOR-FCN)>",
   "referencedBy": [
    "PLACE-MAT-FCN",
    "GUARDIAN-ROOM-FCN",
    "WORKSHOP-FCN"
   ]
  },
  "GLOBAL-MENHIR": {
   "name": "GLOBAL-MENHIR",
   "file": "2dungeon.zil",
   "line": 654,
   "endLine": 660,
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
   "source": "<OBJECT GLOBAL-MENHIR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM MENHIR ROCK STONE)\n\t(ADJECTIVE HUGE HEAVY ENORMOUS)\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION GLOBAL-MENHIR-F)\n\t(DESC \"enormous menhir\")>",
   "referencedBy": [
    "GENIE-FCN"
   ]
  },
  "MENHIR": {
   "name": "MENHIR",
   "file": "2dungeon.zil",
   "line": 665,
   "endLine": 671,
   "desc": "enormous menhir",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "READBIT",
    "TURNBIT"
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
   "action": "MENHIR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT MENHIR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM MENHIR ROCK STONE F)\n\t(ADJECTIVE HUGE HEAVY ENORMOUS)\n\t(FLAGS NDESCBIT READBIT TURNBIT)\n\t(DESC \"enormous menhir\")\n\t(ACTION MENHIR-FCN)>",
   "referencedBy": [
    "MENHIR-ROOM-FCN",
    "GENIE-FCN"
   ]
  },
  "COLLAR": {
   "name": "COLLAR",
   "file": "2dungeon.zil",
   "line": 690,
   "endLine": 700,
   "desc": "gigantic dog collar",
   "ldesc": null,
   "fdesc": "A gigantic dog collar, large enough for three rhinoceros-sized dogs, is\nlying amidst the debris.",
   "loc": "KENNEL",
   "flags": [
    "STAGGERED",
    "TAKEBIT"
   ],
   "synonyms": [
    "COLLAR",
    "TREASURE"
   ],
   "adjectives": [
    "HUGE",
    "GIANT",
    "DOG"
   ],
   "action": "COLLAR-FCN",
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
   "source": "<OBJECT COLLAR\n\t(IN KENNEL)\n\t(SYNONYM COLLAR TREASURE)\n\t(ADJECTIVE HUGE GIANT DOG)\n\t(FDESC\n\"A gigantic dog collar, large enough for three rhinoceros-sized dogs, is\nlying amidst the debris.\")\n\t(DESC \"gigantic dog collar\")\n\t(FLAGS STAGGERED TAKEBIT)\n\t(ACTION COLLAR-FCN)\n\t(VALUE 15)>",
   "referencedBy": [
    "CERBERUS-FCN",
    "V-ENCHANT"
   ]
  },
  "BAT": {
   "name": "BAT",
   "file": "2dungeon.zil",
   "line": 706,
   "endLine": 715,
   "desc": "wooden club",
   "ldesc": null,
   "fdesc": "A long wooden club lies on the ground near the diamond-shaped window.\nThe club is curiously burned at the thick end.",
   "loc": null,
   "flags": [
    "INVISIBLE",
    "TAKEBIT",
    "WEAPONBIT",
    "READBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "CLUB",
    "BAT"
   ],
   "adjectives": [
    "WOODEN",
    "BASEBALL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The words \"Babe Flathead\" are burned into the wood."
    ]
   },
   "contents": [],
   "source": "<OBJECT BAT\n\t(SYNONYM CLUB BAT)\n\t(ADJECTIVE WOODEN BASEBALL)\n\t(FDESC\n\"A long wooden club lies on the ground near the diamond-shaped window.\nThe club is curiously burned at the thick end.\")\n\t(DESC \"wooden club\")\n\t(FLAGS INVISIBLE TAKEBIT WEAPONBIT READBIT BURNBIT)\n\t(TEXT\n\"The words \\\"Babe Flathead\\\" are burned into the wood.\")>",
   "referencedBy": [
    "DIAMOND-MOTION"
   ]
  },
  "DWINDOW": {
   "name": "DWINDOW",
   "file": "2dungeon.zil",
   "line": 843,
   "endLine": 849,
   "desc": "diamond shaped window",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "WINDOW"
   ],
   "adjectives": [
    "GLOWING",
    "DIAMOND"
   ],
   "action": "DWINDOW-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DWINDOW\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WINDOW)\n\t(ADJECTIVE GLOWING DIAMOND)\n\t(DESC \"diamond shaped window\")\n\t(ACTION DWINDOW-FCN)\n\t(FLAGS NDESCBIT TRYTAKEBIT)>",
   "referencedBy": []
  },
  "GLOBAL-CERBERUS": {
   "name": "GLOBAL-CERBERUS",
   "file": "2dungeon.zil",
   "line": 867,
   "endLine": 872,
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
   "source": "<OBJECT GLOBAL-CERBERUS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CERBERUS DOG HOUND MONSTER)\n\t(ADJECTIVE HUGE GIANT THREE HEADED)\n\t(ACTION GLOBAL-CERBERUS-F)\n\t(DESC \"three-headed dog\")>",
   "referencedBy": [
    "GENIE-FCN"
   ]
  },
  "CERBERUS": {
   "name": "CERBERUS",
   "file": "2dungeon.zil",
   "line": 877,
   "endLine": 887,
   "desc": "three-headed dog",
   "ldesc": "There is a vicious-looking dog guarding the entrance. It is more or\nless your usual dog, except that it has three heads and is the size of\nan elephant.",
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
   "action": "CERBERUS-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CERBERUS\n\t(IN CERBERUS-ROOM)\n\t(SYNONYM CERBERUS DOG HOUND MONSTER)\n\t(ADJECTIVE HUGE GIANT THREE HEADED)\n\t(DESC \"three-headed dog\")\n\t(LDESC\n\"There is a vicious-looking dog guarding the entrance. It is more or\nless your usual dog, except that it has three heads and is the size of\nan elephant.\")\n\t(FLAGS ACTORBIT OPENBIT CONTBIT)\n\t(ACTION CERBERUS-FCN)>",
   "referencedBy": [
    "CERBERUS-FCN",
    "COLLAR-FCN",
    "V-ENCHANT"
   ]
  },
  "HEADS": {
   "name": "HEADS",
   "file": "2dungeon.zil",
   "line": 912,
   "endLine": 917,
   "desc": "set of poled heads",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRYPT-ROOM",
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
   "action": "HEAD-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT HEADS\n\t(IN CRYPT-ROOM)\n\t(SYNONYM HEADS HEAD POLE POLES)\n        (DESC \"set of poled heads\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION HEAD-FCN)>",
   "referencedBy": []
  },
  "CRYPT": {
   "name": "CRYPT",
   "file": "2dungeon.zil",
   "line": 919,
   "endLine": 928,
   "desc": "marble crypt",
   "ldesc": null,
   "fdesc": null,
   "loc": "CRYPT-ROOM",
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
   "action": "CRYPT-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\"Here lie the Flatheads, whose heads were placed on poles by the\nKeeper of the Dungeon for amazing untastefulness.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT CRYPT\n\t(IN CRYPT-ROOM)\n\t(SYNONYM TOMB CRYPT GRAVE)\n\t(ADJECTIVE MARBLE)\n\t(DESC \"marble crypt\")\n\t(FLAGS NDESCBIT READBIT)\n\t(ACTION CRYPT-OBJECT)\n\t(TEXT\n\"\\\"Here lie the Flatheads, whose heads were placed on poles by the\nKeeper of the Dungeon for amazing untastefulness.\\\"\")>",
   "referencedBy": []
  },
  "CRYPT-DOOR": {
   "name": "CRYPT-DOOR",
   "file": "2dungeon.zil",
   "line": 930,
   "endLine": 936,
   "desc": "crypt door",
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
    "CRYPT",
    "NORTH"
   ],
   "action": "CRYPT-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CRYPT-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE CRYPT NORTH)\n\t(DESC \"crypt door\")\n\t(FLAGS DOORBIT CONTBIT)\n\t(ACTION CRYPT-DOOR-FCN)>",
   "referencedBy": [
    "CRYPT-ANTEROOM-FCN",
    "CRYPT-ROOM-FCN",
    "PLACE-MAT-FCN"
   ]
  },
  "DIM-DOOR": {
   "name": "DIM-DOOR",
   "file": "2dungeon.zil",
   "line": 938,
   "endLine": 944,
   "desc": "secret door",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "DOORBIT",
    "CONTBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "DOOR",
    "LETTER"
   ],
   "adjectives": [
    "F",
    "DIMLY",
    "SOUTH",
    "SECRET"
   ],
   "action": "DIM-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DIM-DOOR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR LETTER)\n\t(ADJECTIVE F DIMLY SOUTH SECRET)\n\t(DESC \"secret door\")\n\t(FLAGS DOORBIT CONTBIT INVISIBLE)\n\t(ACTION DIM-DOOR-FCN)>",
   "referencedBy": [
    "CRYPT-ROOM-FCN",
    "DIM-DOOR-APPEARS"
   ]
  },
  "DOOR-KEEPER": {
   "name": "DOOR-KEEPER",
   "file": "2dungeon.zil",
   "line": 970,
   "endLine": 976,
   "desc": "lizard",
   "ldesc": null,
   "fdesc": null,
   "loc": "GUARDIAN-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "KEEPER",
    "GUARDIAN",
    "LIZARD",
    "HEAD"
   ],
   "adjectives": [
    "NASTY"
   ],
   "action": "DOOR-KEEPER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DOOR-KEEPER\n\t(IN GUARDIAN-ROOM)\n\t(SYNONYM KEEPER GUARDIAN LIZARD HEAD)\n\t(ADJECTIVE NASTY)\n\t(DESC \"lizard\")\n\t(FLAGS NDESCBIT)\n\t(ACTION DOOR-KEEPER-FCN)>",
   "referencedBy": [
    "DOOR-KEEPER-FCN",
    "PRE-TAKE"
   ]
  },
  "ARCANA": {
   "name": "ARCANA",
   "file": "2dungeon.zil",
   "line": 1013,
   "endLine": 1019,
   "desc": "arcane item",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKBENCH-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "ALEMBIC",
    "VELLUM",
    "CANDLES",
    "KNIVES"
   ],
   "adjectives": [
    "WAX",
    "SMALL"
   ],
   "action": "ARCANA-PSEUDO",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ARCANA\n\t(IN WORKBENCH-ROOM)\n\t(SYNONYM ALEMBIC VELLUM CANDLES KNIVES)\n        (ADJECTIVE WAX SMALL)\n\t(DESC \"arcane item\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION ARCANA-PSEUDO)>",
   "referencedBy": []
  },
  "WORKBENCH": {
   "name": "WORKBENCH",
   "file": "2dungeon.zil",
   "line": 1021,
   "endLine": 1027,
   "desc": "Wizard's workbench",
   "ldesc": null,
   "fdesc": null,
   "loc": "WORKBENCH-ROOM",
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
    "HEAVY",
    "WOODEN",
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
   "source": "<OBJECT WORKBENCH\n\t(IN WORKBENCH-ROOM)\n\t(SYNONYM WORKBENCH BENCH TABLE)\n\t(ADJECTIVE WORK HEAVY WOODEN WIZARD)\n\t(DESC \"Wizard's workbench\")\n\t(CAPACITY 200)\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)>",
   "referencedBy": [
    "STAND-FCN"
   ]
  },
  "STAND-1": {
   "name": "STAND-1",
   "file": "2dungeon.zil",
   "line": 1029,
   "endLine": 1036,
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
   "action": "STAND-FCN",
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
   "source": "<OBJECT STAND-1\n\t(IN WORKBENCH)\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE CRYSTAL RUBY)\n\t(DESC \"ruby stand\")\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)\n\t(CAPACITY 10)\n\t(ACTION STAND-FCN)>",
   "referencedBy": [
    "STAND-FCN"
   ]
  },
  "STAND-2": {
   "name": "STAND-2",
   "file": "2dungeon.zil",
   "line": 1038,
   "endLine": 1045,
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
   "action": "STAND-FCN",
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
   "source": "<OBJECT STAND-2\n\t(IN WORKBENCH)\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE CRYSTAL SAPPHIRE)\n\t(DESC \"sapphire stand\")\n\t(FLAGS NDESCBIT SURFACEBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)\n\t(ACTION STAND-FCN)>",
   "referencedBy": [
    "STAND-FCN"
   ]
  },
  "STAND-3": {
   "name": "STAND-3",
   "file": "2dungeon.zil",
   "line": 1047,
   "endLine": 1054,
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
   "action": "STAND-FCN",
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
   "source": "<OBJECT STAND-3\n\t(IN WORKBENCH)\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE DIAMOND CRYSTAL)\n\t(DESC \"diamond stand\")\n\t(FLAGS NDESCBIT SURFACEBIT OPENBIT CONTBIT)\n\t(CAPACITY 10)\n\t(ACTION STAND-FCN)>",
   "referencedBy": [
    "STAND-FCN"
   ]
  },
  "STAND-4": {
   "name": "STAND-4",
   "file": "2dungeon.zil",
   "line": 1056,
   "endLine": 1063,
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
   "action": "STAND-FCN",
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
   "source": "<OBJECT STAND-4\n\t(SYNONYM STAND STANDS)\n\t(ADJECTIVE OBSIDIAN BLACK CRYSTAL STRANGE)\n\t(DESC \"black obsidian stand\")\n\t(FLAGS SURFACEBIT CONTBIT OPENBIT)\n\t(SIZE 5)\n\t(CAPACITY 10)\n\t(ACTION STAND-FCN)>",
   "referencedBy": [
    "STAND-FCN"
   ]
  },
  "PALANTIR-4": {
   "name": "PALANTIR-4",
   "file": "2dungeon.zil",
   "line": 1065,
   "endLine": 1074,
   "desc": "black crystal sphere",
   "ldesc": "There is a strange black sphere here.",
   "fdesc": null,
   "loc": "STAND-4",
   "flags": [
    "STAGGERED",
    "TAKEBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "SPHERE",
    "BALL",
    "PALANTIR"
   ],
   "adjectives": [
    "CRYSTAL",
    "STRANGE",
    "BLACK"
   ],
   "action": "PALANTIR",
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
   "source": "<OBJECT PALANTIR-4\n\t(IN STAND-4)\n\t(SYNONYM SPHERE BALL PALANTIR)\n\t(ADJECTIVE CRYSTAL STRANGE BLACK)\n\t(DESC \"black crystal sphere\")\n\t(FLAGS STAGGERED TAKEBIT TRANSBIT)\n\t(ACTION PALANTIR)\n\t(LDESC \"There is a strange black sphere here.\")\n\t(VALUE 30)\n\t(SIZE 10)>",
   "referencedBy": [
    "PALANTIR",
    "PALANTIR-LOOK",
    "PENTAGRAM-FCN",
    "I-WIZARD"
   ]
  },
  "DEGREE": {
   "name": "DEGREE",
   "file": "2dungeon.zil",
   "line": 1092,
   "endLine": 1100,
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
     "The text is in some obscure tongue. All that can be made out is\na reference to \"sending in a matchbook cover.\""
    ]
   },
   "contents": [],
   "source": "<OBJECT DEGREE\n\t(IN TROPHY-ROOM)\n\t(SYNONYM DEGREE DIPLOMA)\n\t(DESC \"degree\")\n\t(FLAGS NDESCBIT TRYTAKEBIT READBIT)\n\t(ACTION TROPHY-PSEUDO)\n\t(TEXT\n\"The text is in some obscure tongue. All that can be made out is\na reference to \\\"sending in a matchbook cover.\\\"\")>",
   "referencedBy": []
  },
  "WANDS": {
   "name": "WANDS",
   "file": "2dungeon.zil",
   "line": 1102,
   "endLine": 1108,
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
   "source": "<OBJECT WANDS\n\t(IN TROPHY-ROOM)\n\t(SYNONYM WANDS WAND RACK SET)\n        (ADJECTIVE WORN USED)\n\t(DESC \"set of used wands\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION TROPHY-PSEUDO)>",
   "referencedBy": []
  },
  "TROPHY-SWORD": {
   "name": "TROPHY-SWORD",
   "file": "2dungeon.zil",
   "line": 1110,
   "endLine": 1116,
   "desc": "nicked swords",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SWORD",
    "SWORDS"
   ],
   "adjectives": [
    "DULL",
    "NICKED"
   ],
   "action": "TROPHY-PSEUDO",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TROPHY-SWORD\n\t(IN TROPHY-ROOM)\n\t(SYNONYM SWORD SWORDS)\n        (ADJECTIVE DULL NICKED)\n\t(DESC \"nicked swords\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION TROPHY-PSEUDO)>",
   "referencedBy": []
  },
  "TROPHY-BOTTLES": {
   "name": "TROPHY-BOTTLES",
   "file": "2dungeon.zil",
   "line": 1118,
   "endLine": 1124,
   "desc": "small bottles",
   "ldesc": null,
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "NDESCBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BOTTLE"
   ],
   "adjectives": [
    "SMALL"
   ],
   "action": "TROPHY-PSEUDO",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TROPHY-BOTTLES\n\t(IN TROPHY-ROOM)\n\t(SYNONYM BOTTLE)\n        (ADJECTIVE SMALL)\n\t(DESC \"small bottles\")\n\t(FLAGS NDESCBIT TRYTAKEBIT)\n\t(ACTION TROPHY-PSEUDO)>",
   "referencedBy": []
  },
  "WARNING-LABEL": {
   "name": "WARNING-LABEL",
   "file": "2dungeon.zil",
   "line": 1126,
   "endLine": 1141,
   "desc": "warning label",
   "ldesc": "A hand-lettered label is affixed to the wall.",
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "READBIT"
   ],
   "synonyms": [
    "LABEL"
   ],
   "adjectives": [
    "WARNING"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "Warning!|\n|\nThe exhibits in this room are the property of the mighty Wizard of\nFrobozz (me), and are the fruits of diligent labor and study over\nmany years. He who touches anything will regret it.|\n|\n(signed)|\nFrobozz|"
    ]
   },
   "contents": [],
   "source": "<OBJECT WARNING-LABEL\n\t(IN TROPHY-ROOM)\n\t(SYNONYM LABEL)\n\t(ADJECTIVE WARNING)\n\t(DESC \"warning label\")\n\t(LDESC \"A hand-lettered label is affixed to the wall.\")\n\t(FLAGS READBIT)\n\t(TEXT\n\"Warning!|\n|\nThe exhibits in this room are the property of the mighty Wizard of\nFrobozz (me), and are the fruits of diligent labor and study over\nmany years. He who touches anything will regret it.|\n|\n(signed)|\nFrobozz|\")>",
   "referencedBy": []
  },
  "GLOBAL-WIZARD-CASE": {
   "name": "GLOBAL-WIZARD-CASE",
   "file": "2dungeon.zil",
   "line": 1143,
   "endLine": 1148,
   "desc": "Wizard's trophy cabinet",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [
    "CASE",
    "CABINET"
   ],
   "adjectives": [
    "TROPHY",
    "WIZARD"
   ],
   "action": "WIZARD-CASE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-WIZARD-CASE\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM CASE CABINET)\n\t(ADJECTIVE TROPHY WIZARD)\n\t(DESC \"Wizard's trophy cabinet\")\n\t(ACTION WIZARD-CASE-FCN)>",
   "referencedBy": []
  },
  "WIZARD-CASE": {
   "name": "WIZARD-CASE",
   "file": "2dungeon.zil",
   "line": 1150,
   "endLine": 1158,
   "desc": "Wizard's trophy cabinet",
   "ldesc": "Imbedded in the wall is an ornate trophy cabinet.",
   "fdesc": null,
   "loc": "TROPHY-ROOM",
   "flags": [
    "CONTBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "CASE",
    "CABINET"
   ],
   "adjectives": [
    "TROPHY",
    "WIZARD"
   ],
   "action": "WIZARD-CASE-FCN",
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
   "source": "<OBJECT WIZARD-CASE\n\t(IN TROPHY-ROOM)\n\t(SYNONYM CASE CABINET)\n\t(ADJECTIVE TROPHY WIZARD)\n\t(DESC \"Wizard's trophy cabinet\")\n\t(FLAGS CONTBIT TRANSBIT)\n\t(LDESC \"Imbedded in the wall is an ornate trophy cabinet.\")\n\t(ACTION WIZARD-CASE-FCN)\n\t(CAPACITY 1000)>",
   "referencedBy": [
    "CASE-WORTH",
    "I-WIZARD",
    "WIZARD-CASE-FCN",
    "RANDOMIZE-OBJECTS",
    "ITAKE"
   ]
  },
  "BROKEN-CASE": {
   "name": "BROKEN-CASE",
   "file": "2dungeon.zil",
   "line": 1160,
   "endLine": 1165,
   "desc": "smashed trophy cabinet",
   "ldesc": "Shards of a smashed trophy case litter the room.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "CASE",
    "CABINET"
   ],
   "adjectives": [
    "BROKEN",
    "TROPHY",
    "WIZARD"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BROKEN-CASE\n\t(SYNONYM CASE CABINET)\n\t(ADJECTIVE BROKEN TROPHY WIZARD)\n\t(DESC \"smashed trophy cabinet\")\n\t(FLAGS CONTBIT OPENBIT)\n\t(LDESC \"Shards of a smashed trophy case litter the room.\")>",
   "referencedBy": [
    "WIZARD-CASE-FCN"
   ]
  },
  "PENTAGRAM": {
   "name": "PENTAGRAM",
   "file": "2dungeon.zil",
   "line": 1177,
   "endLine": 1184,
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
    "CHALK",
    "BLACK"
   ],
   "action": "PENTAGRAM-FCN",
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
   "source": "<OBJECT PENTAGRAM\n\t(IN PENTAGRAM-ROOM)\n\t(SYNONYM PENTAGRAM STAR CIRCLE)\n\t(ADJECTIVE GREAT CHALK BLACK)\n\t(DESC \"pentagram\")\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)\n\t(CAPACITY 200)\n\t(ACTION PENTAGRAM-FCN)>",
   "referencedBy": []
  },
  "AQUARIUM": {
   "name": "AQUARIUM",
   "file": "2dungeon.zil",
   "line": 1197,
   "endLine": 1205,
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
   "action": "AQUARIUM-FCN",
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
   "source": "<OBJECT AQUARIUM\n\t(IN AQUARIUM-ROOM)\n\t(SYNONYM AQUARIUM GLASS)\n\t(ADJECTIVE HUGE)\n\t(DESC \"aquarium\")\n\t(LDESC \"Filling the northern half of the room is a huge aquarium.\")\n\t(FLAGS OPENBIT CONTBIT)\n\t(CAPACITY 200)\n\t(ACTION AQUARIUM-FCN)>",
   "referencedBy": [
    "DEAD-PALANTIR",
    "IN-AQUARIUM-FCN",
    "AQUARIUM-FCN"
   ]
  },
  "PALANTIR-3": {
   "name": "PALANTIR-3",
   "file": "2dungeon.zil",
   "line": 1207,
   "endLine": 1215,
   "desc": "clear crystal sphere",
   "ldesc": "There is a clear crystal sphere lying in the sand.",
   "fdesc": null,
   "loc": "IN-AQUARIUM",
   "flags": [
    "STAGGERED",
    "TAKEBIT",
    "NDESCBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "PALANTIR",
    "SPHERE"
   ],
   "adjectives": [
    "CRYSTAL",
    "WHITE",
    "CLEAR"
   ],
   "action": "PALANTIR",
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
   "source": "<OBJECT PALANTIR-3\n\t(IN IN-AQUARIUM)\n\t(SYNONYM PALANTIR SPHERE)\n\t(ADJECTIVE CRYSTAL WHITE CLEAR)\n\t(DESC \"clear crystal sphere\")\n\t(LDESC \"There is a clear crystal sphere lying in the sand.\")\n\t(FLAGS STAGGERED TAKEBIT NDESCBIT TRANSBIT)\n\t(ACTION PALANTIR)\n\t(VALUE 20)>",
   "referencedBy": [
    "CAKE-FCN",
    "PALANTIR",
    "DEAD-PALANTIR",
    "DOOR-KEEPER-FCN",
    "STAND-FCN",
    "AQUARIUM-FCN",
    "I-WIZARD",
    "RIPOFF",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "SERPENT": {
   "name": "SERPENT",
   "file": "2dungeon.zil",
   "line": 1217,
   "endLine": 1224,
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
   "action": "SERPENT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SERPENT\n\t(IN AQUARIUM)\n\t(SYNONYM SERPENT SNAKE)\n\t(ADJECTIVE BABY SEA)\n\t(DESC \"baby sea serpent\")\n\t(LDESC \"There is a baby sea serpent swimming in the aquarium.\")\n\t(FLAGS ACTORBIT)\n\t(ACTION SERPENT-FCN)>",
   "referencedBy": [
    "DEAD-PALANTIR",
    "IN-AQUARIUM-FCN",
    "AQUARIUM-FCN",
    "SERPENT-FCN"
   ]
  },
  "DEAD-SERPENT": {
   "name": "DEAD-SERPENT",
   "file": "2dungeon.zil",
   "line": 1226,
   "endLine": 1233,
   "desc": "dead sea serpent",
   "ldesc": "There is a dead sea serpent in a heap here.",
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
   "action": "DEAD-SERPENT-FCN",
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
   "source": "<OBJECT DEAD-SERPENT\n\t(SYNONYM SERPENT SNAKE)\n\t(ADJECTIVE DEAD BABY SEA)\n\t(DESC \"dead sea serpent\")\n\t(LDESC \"There is a dead sea serpent in a heap here.\")\n\t(FLAGS TAKEBIT)\n\t(ACTION DEAD-SERPENT-FCN)\n\t(SIZE 400)>",
   "referencedBy": [
    "AQUARIUM-FCN"
   ]
  },
  "RIDDLE-DOOR": {
   "name": "RIDDLE-DOOR",
   "file": "2dungeon.zil",
   "line": 1281,
   "endLine": 1287,
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
   "action": "RIDDLE-DOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIDDLE-DOOR\n\t(IN RIDDLE-ROOM)\n\t(DESC \"stone door\")\n\t(SYNONYM DOOR)\n\t(ADJECTIVE GREAT STONE)\n\t(FLAGS DOORBIT CONTBIT NDESCBIT)\n\t(ACTION RIDDLE-DOOR-FCN)>",
   "referencedBy": [
    "PLACE-MAT-FCN",
    "RIDDLE-ROOM-FCN",
    "RIDDLE-DOOR-FCN"
   ]
  },
  "MATCH": {
   "name": "MATCH",
   "file": "2dungeon.zil",
   "line": 1681,
   "endLine": 1695,
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
   "adjectives": [
    "ZORK"
   ],
   "action": "MATCH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "\">> Visit Exotic ZORK I <<|\n|\nConsult the Frobozz Magic Travel Agency, or visit your local\ncomputer store for more details.\""
    ],
    "SIZE": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT MATCH\n\t(IN GAZEBO-TABLE)\n\t(SYNONYM MATCH MATCHES MATCHBOOK)\n\t(ADJECTIVE ZORK)\n\t(DESC \"matchbook\")\n\t(FLAGS READBIT TAKEBIT)\n\t(ACTION MATCH-FCN)\n\t(LDESC\n\"There is a matchbook saying \\\"Visit ZORK I\\\" here.\")\n\t(TEXT\n\"\\\">> Visit Exotic ZORK I <<|\n|\nConsult the Frobozz Magic Travel Agency, or visit your local\ncomputer store for more details.\\\"\")\n\t(SIZE 2)>",
   "referencedBy": [
    "FUSE-FCN",
    "MATCH-FCN",
    "I-MATCH"
   ]
  },
  "GNOME": {
   "name": "GNOME",
   "file": "2dungeon.zil",
   "line": 1727,
   "endLine": 1733,
   "desc": "Volcano Gnome",
   "ldesc": "There is a nervous Volcano Gnome here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT"
   ],
   "synonyms": [
    "GNOME"
   ],
   "adjectives": [
    "VOLCANO"
   ],
   "action": "GNOME-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GNOME\n\t(SYNONYM GNOME)\n\t(ADJECTIVE VOLCANO)\n\t(DESC \"Volcano Gnome\")\n\t(FLAGS ACTORBIT)\n\t(ACTION GNOME-FCN)\n\t(LDESC \"There is a nervous Volcano Gnome here.\")>",
   "referencedBy": [
    "I-GNOME",
    "GNOME-FCN",
    "I-NERVOUS"
   ]
  },
  "BALLOON": {
   "name": "BALLOON",
   "file": "2dungeon.zil",
   "line": 1735,
   "endLine": 1745,
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
   "action": "BALLOON-FCN",
   "descfcn": "BALLOON-FCN",
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
   "source": "<OBJECT BALLOON\n\t(IN VOLCANO-BOTTOM)\n\t(SYNONYM BALLOON BASKET)\n\t(ADJECTIVE WICKER)\n\t(DESC \"basket\")\n\t(FLAGS VEHBIT OPENBIT)\n\t(ACTION BALLOON-FCN)\n\t(DESCFCN BALLOON-FCN)\n\t(CAPACITY 100)\n\t(SIZE 70)\n\t(VTYPE 0)>",
   "referencedBy": [
    "BALLOON-BURN",
    "PUT-BALLOON",
    "RISE-AND-SHINE",
    "DECLINE-AND-FALL",
    "I-LEDGE",
    "GO",
    "GOTO"
   ]
  },
  "BALLOON-LABEL": {
   "name": "BALLOON-LABEL",
   "file": "2dungeon.zil",
   "line": 1747,
   "endLine": 1763,
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
     "\n!! FROBOZZ MAGIC BALLOON COMPANY !!|\n|\nHello, Aviator!|\n|\nTo land your balloon, say LAND|\nOtherwise, you're on your own!|\n|\nNo warranty expressed or implied."
    ]
   },
   "contents": [],
   "source": "<OBJECT BALLOON-LABEL\n\t(SYNONYM LABEL)\n\t(ADJECTIVE BLUE)\n\t(DESC \"blue label\")\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(LDESC \"There is a blue label here.\")\n\t(SIZE 1)\n\t(TEXT\n\"\n!! FROBOZZ MAGIC BALLOON COMPANY !!|\n|\nHello, Aviator!|\n|\nTo land your balloon, say LAND|\nOtherwise, you're on your own!|\n|\nNo warranty expressed or implied.\")>",
   "referencedBy": [
    "BALLOON-BURN"
   ]
  },
  "SAFE": {
   "name": "SAFE",
   "file": "2dungeon.zil",
   "line": 1765,
   "endLine": 1772,
   "desc": "box",
   "ldesc": null,
   "fdesc": null,
   "loc": "SAFE-ROOM",
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
   "action": "SAFE-FCN",
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
   "source": "<OBJECT SAFE\n\t(IN SAFE-ROOM)\n\t(SYNONYM SAFE BOX)\n\t(ADJECTIVE STEEL RUSTY)\n\t(DESC \"box\")\n\t(FLAGS CONTBIT NDESCBIT)\n\t(ACTION SAFE-FCN)\n\t(CAPACITY 15)>",
   "referencedBy": [
    "SAFE-FCN",
    "I-FUSE"
   ]
  },
  "BRAIDED-WIRE": {
   "name": "BRAIDED-WIRE",
   "file": "2dungeon.zil",
   "line": 1774,
   "endLine": 1780,
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
   "action": "WIRE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BRAIDED-WIRE\n\t(FLAGS NDESCBIT)\n\t(IN BALLOON)\n\t(SYNONYM ROPE WIRE)\n\t(ADJECTIVE BRAIDED)\n\t(DESC \"braided wire\")\n\t(ACTION WIRE-FCN)>",
   "referencedBy": [
    "BCONTENTS",
    "WIRE-FCN"
   ]
  },
  "BRICK": {
   "name": "BRICK",
   "file": "2dungeon.zil",
   "line": 1782,
   "endLine": 1791,
   "desc": "brick",
   "ldesc": "There is a square brick here which feels like clay.",
   "fdesc": null,
   "loc": "MARBLE-HALL",
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
   "action": "BRICK-FCN",
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
   "source": "<OBJECT BRICK\n\t(IN MARBLE-HALL)\n\t(SYNONYM BRICK)\n\t(ADJECTIVE SQUARE CLAY)\n\t(DESC \"brick\")\n\t(FLAGS TAKEBIT BURNBIT OPENBIT SEARCHBIT)\n\t(ACTION BRICK-FCN)\n\t(LDESC \"There is a square brick here which feels like clay.\")\n\t(CAPACITY 2)\n\t(SIZE 9)>",
   "referencedBy": [
    "BRICK-FCN",
    "I-FUSE",
    "GNOME-FCN",
    "BOMB?",
    "DRAGON-FCN"
   ]
  },
  "EXPLOSION": {
   "name": "EXPLOSION",
   "file": "2dungeon.zil",
   "line": 1793,
   "endLine": 1799,
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
   "source": "<OBJECT EXPLOSION\n\t(SYNONYM KREBF)\n\t(DESC \"debris from an explosion\")\n\t(LDESC\n\"The room is cluttered with debris from an explosion. The walls seem ready\nto collapse.\")\n\t(FLAGS )>",
   "referencedBy": [
    "I-FUSE"
   ]
  },
  "DEAD-BALLOON": {
   "name": "DEAD-BALLOON",
   "file": "2dungeon.zil",
   "line": 1801,
   "endLine": 1806,
   "desc": "broken balloon",
   "ldesc": "There is a balloon here, broken into pieces.",
   "fdesc": null,
   "loc": null,
   "flags": [],
   "synonyms": [
    "BALLOON",
    "BASKET"
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
    "SIZE": [
     "40"
    ]
   },
   "contents": [],
   "source": "<OBJECT DEAD-BALLOON\n\t(SYNONYM BALLOON BASKET)\n\t(ADJECTIVE BROKEN)\n\t(DESC \"broken balloon\")\n\t(LDESC \"There is a balloon here, broken into pieces.\")\n\t(SIZE 40)>",
   "referencedBy": [
    "DECLINE-AND-FALL",
    "I-LEDGE"
   ]
  },
  "ROUND-BUTTON": {
   "name": "ROUND-BUTTON",
   "file": "2dungeon.zil",
   "line": 1808,
   "endLine": 1814,
   "desc": "round button",
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
    "ROUND"
   ],
   "action": "BUTTONS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROUND-BUTTON\n\t(IN MACHINE-ROOM)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE ROUND)\n\t(DESC \"round button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTONS)>",
   "referencedBy": [
    "BUTTONS"
   ]
  },
  "SQUARE-BUTTON": {
   "name": "SQUARE-BUTTON",
   "file": "2dungeon.zil",
   "line": 1816,
   "endLine": 1822,
   "desc": "square button",
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
    "SQUARE"
   ],
   "action": "BUTTONS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SQUARE-BUTTON\n\t(IN MACHINE-ROOM)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE SQUARE)\n\t(DESC \"square button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTONS)>",
   "referencedBy": [
    "BUTTONS"
   ]
  },
  "TRIANGULAR-BUTTON": {
   "name": "TRIANGULAR-BUTTON",
   "file": "2dungeon.zil",
   "line": 1824,
   "endLine": 1830,
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
   "action": "BUTTONS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TRIANGULAR-BUTTON\n\t(IN MACHINE-ROOM)\n\t(SYNONYM BUTTON)\n\t(ADJECTIVE TRIANGULAR)\n\t(DESC \"triangular button\")\n\t(FLAGS NDESCBIT)\n\t(ACTION BUTTONS)>",
   "referencedBy": [
    "BUTTONS"
   ]
  },
  "CARD": {
   "name": "CARD",
   "file": "2dungeon.zil",
   "line": 1832,
   "endLine": 1846,
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
     "\nWarning:|\n    This room was constructed over very weak rock strata. Detonation\nof explosives in this room is strictly prohibited!|\n         Frobozz Magic Cave Company|\n         per M. Agrippa, foreman|\n"
    ]
   },
   "contents": [],
   "source": "<OBJECT CARD\n\t(IN SAFE)\n\t(SYNONYM CARD NOTE)\n\t(DESC \"card\")\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(LDESC \"There is a card with writing on it here.\")\n\t(SIZE 1)\n\t(TEXT\n\"\nWarning:|\n    This room was constructed over very weak rock strata. Detonation\nof explosives in this room is strictly prohibited!|\n         Frobozz Magic Cave Company|\n         per M. Agrippa, foreman|\n\") >",
   "referencedBy": []
  },
  "CLOTH-BAG": {
   "name": "CLOTH-BAG",
   "file": "2dungeon.zil",
   "line": 1848,
   "endLine": 1854,
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
   "source": "<OBJECT CLOTH-BAG\n\t(IN BALLOON)\n\t(SYNONYM BAG)\n\t(ADJECTIVE CLOTH)\n\t(FLAGS NDESCBIT)\n\t(DESC \"cloth bag\")\n\t(ACTION BCONTENTS)>",
   "referencedBy": [
    "BCONTENTS"
   ]
  },
  "CROWN": {
   "name": "CROWN",
   "file": "2dungeon.zil",
   "line": 1856,
   "endLine": 1866,
   "desc": "gaudy crown",
   "ldesc": "Lord Dimwit's crown is here.",
   "fdesc": "The excessively gaudy crown of Lord Dimwit Flathead sits in the safe.",
   "loc": "SAFE",
   "flags": [
    "STAGGERED",
    "TAKEBIT",
    "WEARBIT"
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
   "source": "<OBJECT CROWN\n\t(IN SAFE)\n\t(SYNONYM CROWN TREASURE)\n\t(ADJECTIVE GAUDY)\n\t(DESC \"gaudy crown\")\n\t(FLAGS STAGGERED TAKEBIT WEARBIT)\n\t(FDESC\n\"The excessively gaudy crown of Lord Dimwit Flathead sits in the safe.\")\n\t(LDESC \"Lord Dimwit's crown is here.\")\n\t(SIZE 10)\n\t(VALUE 20)>",
   "referencedBy": []
  },
  "PALANTIR-1": {
   "name": "PALANTIR-1",
   "file": "2dungeon.zil",
   "line": 1868,
   "endLine": 1877,
   "desc": "red crystal sphere",
   "ldesc": "There is a beautiful red crystal sphere here.",
   "fdesc": null,
   "loc": "CAGE-ROOM",
   "flags": [
    "STAGGERED",
    "TAKEBIT",
    "TRANSBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SPHERE",
    "BALL",
    "PALANTIR"
   ],
   "adjectives": [
    "CRYSTAL",
    "RED"
   ],
   "action": "SPHERE-FCN",
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
   "source": "<OBJECT PALANTIR-1\t;\"was SPHER\"\n\t(IN CAGE-ROOM)\n\t(SYNONYM SPHERE BALL PALANTIR)\n\t(ADJECTIVE CRYSTAL RED)\n\t(DESC \"red crystal sphere\")\n\t(FLAGS STAGGERED TAKEBIT TRANSBIT TRYTAKEBIT)\n\t(ACTION SPHERE-FCN)\n\t(LDESC \"There is a beautiful red crystal sphere here.\")\n\t(SIZE 10)\n\t(VALUE 20)>",
   "referencedBy": [
    "CAKE-FCN",
    "SPHERE-FCN",
    "I-SPHERE",
    "ROBOT-FCN",
    "PALANTIR",
    "DEAD-PALANTIR",
    "DOOR-KEEPER-FCN",
    "STAND-FCN",
    "I-WIZARD",
    "RIPOFF",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "VIOLIN": {
   "name": "VIOLIN",
   "file": "2dungeon.zil",
   "line": 1879,
   "endLine": 1888,
   "desc": "fancy violin",
   "ldesc": "There is a Stradivarius here.",
   "fdesc": null,
   "loc": "IRON-BOX",
   "flags": [
    "STAGGERED",
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
   "action": "VIOLIN-FCN",
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
   "source": "<OBJECT VIOLIN\n\t(IN IRON-BOX)\n\t(SYNONYM STRADIVARIUS VIOLIN TREASURE)\n\t(ADJECTIVE FANCY)\n\t(DESC \"fancy violin\")\n\t(FLAGS STAGGERED TAKEBIT)\n\t(LDESC \"There is a Stradivarius here.\")\n\t(SIZE 10)\n\t(VALUE 20)\n\t(ACTION VIOLIN-FCN)>",
   "referencedBy": [
    "VIOLIN-FCN",
    "GENIE-FCN"
   ]
  },
  "ICE": {
   "name": "ICE",
   "file": "2dungeon.zil",
   "line": 1890,
   "endLine": 1896,
   "desc": "glacier",
   "ldesc": "A mass of ice fills the western half of the room.",
   "fdesc": null,
   "loc": "GLACIER-ROOM",
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
   "action": "GLACIER-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ICE\n\t(IN GLACIER-ROOM)\n\t(SYNONYM ICE MASS GLACIER)\n\t(ADJECTIVE COLD ICY)\n\t(DESC \"glacier\")\n\t(ACTION GLACIER-FCN)\n\t(LDESC \"A mass of ice fills the western half of the room.\")>",
   "referencedBy": [
    "I-DRAGON"
   ]
  },
  "FLASK": {
   "name": "FLASK",
   "file": "2dungeon.zil",
   "line": 1898,
   "endLine": 1910,
   "desc": "stoppered glass flask filled with liquid",
   "ldesc": "A stoppered glass flask with a skull-and-crossbones marking is here.\nThe flask is filled with some clear liquid.",
   "fdesc": null,
   "loc": "POOL-ROOM",
   "flags": [
    "TAKEBIT",
    "TRANSBIT",
    "READBIT"
   ],
   "synonyms": [
    "FLASK"
   ],
   "adjectives": [
    "GLASS"
   ],
   "action": "FLASK-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "5"
    ],
    "TEXT": [
     "There is a skull-and-crossbones engraved on the glass."
    ],
    "SIZE": [
     "10"
    ]
   },
   "contents": [],
   "source": "<OBJECT FLASK\n\t(IN POOL-ROOM)\n\t(SYNONYM FLASK)\n\t(ADJECTIVE GLASS)\n\t(DESC \"stoppered glass flask filled with liquid\")\n\t(FLAGS TAKEBIT TRANSBIT READBIT)\n\t(ACTION FLASK-FCN)\n\t(LDESC\n\"A stoppered glass flask with a skull-and-crossbones marking is here.\nThe flask is filled with some clear liquid.\")\n\t(CAPACITY 5)\n\t(TEXT \"There is a skull-and-crossbones engraved on the glass.\")\n\t(SIZE 10)>",
   "referencedBy": [
    "CAKE-FCN",
    "FLASK-FCN",
    "DOOR-KEEPER-FCN",
    "AQUARIUM-FCN"
   ]
  },
  "ROBOT-LABEL": {
   "name": "ROBOT-LABEL",
   "file": "2dungeon.zil",
   "line": 1912,
   "endLine": 1932,
   "desc": "green piece of paper",
   "ldesc": "There is a green piece of paper here.",
   "fdesc": null,
   "loc": "MAGNET-ROOM",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "PAPER",
    "PIECE",
    "INSTRUCTIONS"
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
     "!!  FROBOZZ MAGIC ROBOT COMPANY  !!||\n\nHello, Master!|\n|\n   I am a late-model robot, trained at GUE Tech to perform various\nsimple household functions.|\n|\n   To activate me, say the following:|\n|\n        >ROBOT, <things to do>|\n|\nAt your service!"
    ]
   },
   "contents": [],
   "source": "<OBJECT ROBOT-LABEL\n\t(IN MAGNET-ROOM)\n\t(SYNONYM PAPER PIECE INSTRUCTIONS)\n\t(ADJECTIVE GREEN)\n\t(DESC \"green piece of paper\")\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(LDESC \"There is a green piece of paper here.\")\n\t(SIZE 3)\n\t(TEXT\n\"!!  FROBOZZ MAGIC ROBOT COMPANY  !!||\n\nHello, Master!|\n|\n   I am a late-model robot, trained at GUE Tech to perform various\nsimple household functions.|\n|\n   To activate me, say the following:|\n|\n        >ROBOT, <things to do>|\n|\nAt your service!\") >",
   "referencedBy": [
    "PDOOR-FCN"
   ]
  },
  "SLOT": {
   "name": "SLOT",
   "file": "2dungeon.zil",
   "line": 1934,
   "endLine": 1940,
   "desc": "hole",
   "ldesc": null,
   "fdesc": null,
   "loc": "SAFE-ROOM",
   "flags": [
    "OPENBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "SLOT",
    "HOLE"
   ],
   "adjectives": [],
   "action": "SLOT-F",
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
   "source": "<OBJECT SLOT\n\t(IN SAFE-ROOM)\n\t(SYNONYM SLOT HOLE)\n\t(DESC \"hole\")\n\t(FLAGS OPENBIT NDESCBIT)\n\t(CAPACITY 10)\n\t(ACTION SLOT-F)>",
   "referencedBy": [
    "I-FUSE",
    "SLOT-F",
    "INBUF-ADD"
   ]
  },
  "HOOK-2": {
   "name": "HOOK-2",
   "file": "2dungeon.zil",
   "line": 1951,
   "endLine": 1956,
   "desc": "hook",
   "ldesc": "There is a small hook attached to the rock here.",
   "fdesc": null,
   "loc": "LEDGE-2",
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
   "source": "<OBJECT HOOK-2\n\t(IN LEDGE-2)\n\t(SYNONYM HOOK)\n\t(ADJECTIVE SMALL)\n\t(DESC \"hook\")\n\t(LDESC \"There is a small hook attached to the rock here.\")>",
   "referencedBy": [
    "WIRE-FCN"
   ]
  },
  "HOOK-1": {
   "name": "HOOK-1",
   "file": "2dungeon.zil",
   "line": 1958,
   "endLine": 1963,
   "desc": "hook",
   "ldesc": "There is a small hook attached to the rock here.",
   "fdesc": null,
   "loc": "LEDGE-1",
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
   "source": "<OBJECT HOOK-1\n\t(IN LEDGE-1)\n\t(SYNONYM HOOK)\n\t(ADJECTIVE SMALL)\n\t(DESC \"hook\")\n\t(LDESC \"There is a small hook attached to the rock here.\")>",
   "referencedBy": [
    "WIRE-FCN"
   ]
  },
  "LAMP": {
   "name": "LAMP",
   "file": "2dungeon.zil",
   "line": 1965,
   "endLine": 1973,
   "desc": "lamp",
   "ldesc": null,
   "fdesc": "A strangely familiar brass lantern is lying on the ground.",
   "loc": "INSIDE-BARROW",
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
   "action": "LANTERN",
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
   "source": "<OBJECT LAMP\n\t(IN INSIDE-BARROW)\n\t(SYNONYM LAMP LANTERN LIGHT)\n\t(ADJECTIVE BRASS)\n\t(DESC \"lamp\")\n\t(FLAGS TAKEBIT LIGHTBIT)\n\t(FDESC \"A strangely familiar brass lantern is lying on the ground.\")\n\t(ACTION LANTERN)\n\t(SIZE 15)>",
   "referencedBy": [
    "LANTERN",
    "I-LANTERN",
    "I-WIZARD",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "BROKEN-LAMP": {
   "name": "BROKEN-LAMP",
   "file": "2dungeon.zil",
   "line": 1975,
   "endLine": 1980,
   "desc": "broken brass lantern",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "LAMP",
    "LANTERN",
    "LIGHT"
   ],
   "adjectives": [
    "BROKEN",
    "BRASS"
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
   "source": "<OBJECT BROKEN-LAMP\t;\"was BLAMP\"\n\t(SYNONYM LAMP LANTERN LIGHT)\n\t(ADJECTIVE BROKEN BRASS)\n\t(DESC \"broken brass lantern\")\n\t(FLAGS TAKEBIT)\n\t(SIZE 15)>",
   "referencedBy": [
    "LANTERN"
   ]
  },
  "ALICE-TABLE": {
   "name": "ALICE-TABLE",
   "file": "2dungeon.zil",
   "line": 1982,
   "endLine": 1988,
   "desc": "large oblong table",
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
    "LARGE",
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
    "EAT-ME-CAKE",
    "BLUE-ICING",
    "ORANGE-ICING",
    "RED-ICING"
   ],
   "source": "<OBJECT ALICE-TABLE\n\t(IN TEA-ROOM)\n\t(SYNONYM TABLE)\n\t(ADJECTIVE LARGE OBLONG)\n\t(FLAGS CONTBIT SURFACEBIT OPENBIT)\n\t(DESC \"large oblong table\")\n\t(CAPACITY 50)>",
   "referencedBy": [
    "EATME-FCN",
    "CAKE-FCN"
   ]
  },
  "MANGLED-CAGE": {
   "name": "MANGLED-CAGE",
   "file": "2dungeon.zil",
   "line": 1990,
   "endLine": 1996,
   "desc": "mangled cage",
   "ldesc": "There is a mangled steel cage here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "CAGE"
   ],
   "adjectives": [
    "MANGLED",
    "STEEL"
   ],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "60"
    ]
   },
   "contents": [],
   "source": "<OBJECT MANGLED-CAGE\n\t(SYNONYM CAGE)\n\t(ADJECTIVE MANGLED STEEL)\n\t(DESC \"mangled cage\")\n\t(FLAGS TAKEBIT)\n\t(LDESC \"There is a mangled steel cage here.\")\n\t(SIZE 60)>",
   "referencedBy": [
    "ROBOT-FCN"
   ]
  },
  "PEARL": {
   "name": "PEARL",
   "file": "2dungeon.zil",
   "line": 1998,
   "endLine": 2006,
   "desc": "pearl necklace",
   "ldesc": "There is a pearl necklace here with hundreds of large pearls.",
   "fdesc": null,
   "loc": "PEARL-ROOM",
   "flags": [
    "STAGGERED",
    "TAKEBIT"
   ],
   "synonyms": [
    "NECKLACE",
    "PEARLS",
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
   "source": "<OBJECT PEARL\n\t(IN PEARL-ROOM)\n\t(SYNONYM NECKLACE PEARLS TREASURE)\n\t(ADJECTIVE PEARL)\n\t(DESC \"pearl necklace\")\n\t(FLAGS STAGGERED TAKEBIT)\n\t(LDESC \"There is a pearl necklace here with hundreds of large pearls.\")\n\t(SIZE 10)\n\t(VALUE 15)>",
   "referencedBy": []
  },
  "EAT-ME-CAKE": {
   "name": "EAT-ME-CAKE",
   "file": "2dungeon.zil",
   "line": 2008,
   "endLine": 2016,
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
   "action": "EATME-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "The icing spells out \"Eat Me.\""
    ],
    "SIZE": [
     "4"
    ]
   },
   "contents": [],
   "source": "<OBJECT EAT-ME-CAKE\n\t(IN ALICE-TABLE)\n\t(SYNONYM CAKE ICING CAKES LETTER)\n\t(ADJECTIVE GREEN FROSTED)\n\t(DESC \"cake frosted with green letters\")\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(ACTION EATME-FCN)\n\t(TEXT \"The icing spells out \\\"Eat Me.\\\"\")\n\t(SIZE 4)>",
   "referencedBy": [
    "EATME-FCN"
   ]
  },
  "BLUE-ICING": {
   "name": "BLUE-ICING",
   "file": "2dungeon.zil",
   "line": 2018,
   "endLine": 2025,
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
   "action": "CAKE-FCN",
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
   "source": "<OBJECT BLUE-ICING\n\t(IN ALICE-TABLE)\n\t(SYNONYM CAKE ICING CAKES LETTER)\n\t(ADJECTIVE BLUE FROSTED)\n\t(DESC \"cake frosted with blue letters\")\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(ACTION CAKE-FCN)\n\t(SIZE 4)>",
   "referencedBy": [
    "CAKE-FCN"
   ]
  },
  "ORANGE-ICING": {
   "name": "ORANGE-ICING",
   "file": "2dungeon.zil",
   "line": 2027,
   "endLine": 2034,
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
   "action": "CAKE-FCN",
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
   "source": "<OBJECT ORANGE-ICING\n\t(IN ALICE-TABLE)\n\t(SYNONYM CAKE CAKES ICING LETTER)\n\t(ADJECTIVE ORANGE FROSTED)\n\t(DESC \"cake frosted with orange letters\")\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(ACTION CAKE-FCN)\n\t(SIZE 4)>",
   "referencedBy": [
    "CAKE-FCN"
   ]
  },
  "RED-ICING": {
   "name": "RED-ICING",
   "file": "2dungeon.zil",
   "line": 2036,
   "endLine": 2043,
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
   "action": "CAKE-FCN",
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
   "source": "<OBJECT RED-ICING\n\t(IN ALICE-TABLE)\n\t(SYNONYM CAKE CAKES ICING LETTER)\n\t(ADJECTIVE RED FROSTED)\n\t(DESC \"cake frosted with red letters\")\n\t(FLAGS READBIT TAKEBIT FOODBIT)\n\t(ACTION CAKE-FCN)\n\t(SIZE 4)>",
   "referencedBy": [
    "CAKE-FCN"
   ]
  },
  "LEAK": {
   "name": "LEAK",
   "file": "2dungeon.zil",
   "line": 2045,
   "endLine": 2051,
   "desc": "leak",
   "ldesc": null,
   "fdesc": null,
   "loc": "POOL-ROOM",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LEAK"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "PLEAK",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LEAK\n\t(IN POOL-ROOM)\n\t(SYNONYM LEAK)\n\t(ADJECTIVE LARGE)\n\t(DESC \"leak\")\n\t(FLAGS NDESCBIT)\n\t(ACTION PLEAK)>",
   "referencedBy": []
  },
  "POOL": {
   "name": "POOL",
   "file": "2dungeon.zil",
   "line": 2053,
   "endLine": 2061,
   "desc": "pool of tears",
   "ldesc": "The leak has submerged the depressed area in a pool of tears. There is\na hazy something at the deepest part of the pool.",
   "fdesc": null,
   "loc": "POOL-ROOM",
   "flags": [],
   "synonyms": [
    "POOL",
    "TEARS"
   ],
   "adjectives": [
    "LARGE"
   ],
   "action": "POOL-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT POOL\n\t(IN POOL-ROOM)\n\t(SYNONYM POOL TEARS)\n\t(ADJECTIVE LARGE)\n\t(DESC \"pool of tears\")\n\t(LDESC\n\"The leak has submerged the depressed area in a pool of tears. There is\na hazy something at the deepest part of the pool.\")\n\t(ACTION POOL-FCN)>",
   "referencedBy": [
    "CAKE-FCN"
   ]
  },
  "COIN": {
   "name": "COIN",
   "file": "2dungeon.zil",
   "line": 2063,
   "endLine": 2076,
   "desc": "priceless zorkmid",
   "ldesc": "There is an engraved zorkmid here.",
   "fdesc": "On the floor is a priceless gold zorkmid (a valuable collector's item).",
   "loc": "LEDGE-1",
   "flags": [
    "STAGGERED",
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
     "This is a beautiful octagonal coin bearing the legends \"Ten Thousand\nZorkmids\" and \"In Frobs We Trust\"."
    ]
   },
   "contents": [],
   "source": "<OBJECT COIN\n\t(IN LEDGE-1)\n\t(SYNONYM COIN ZORKMID GOLD TREASURE)\n\t(ADJECTIVE GOLD PRICELESS)\n\t(DESC \"priceless zorkmid\")\n\t(FLAGS STAGGERED READBIT TAKEBIT)\n\t(FDESC\n\"On the floor is a priceless gold zorkmid (a valuable collector's item).\")\n\t(LDESC \"There is an engraved zorkmid here.\")\n\t(SIZE 10)\n\t(VALUE 20)\n\t(TEXT\n\"This is a beautiful octagonal coin bearing the legends \\\"Ten Thousand\nZorkmids\\\" and \\\"In Frobs We Trust\\\".\")>",
   "referencedBy": [
    "WISH-FCN"
   ]
  },
  "STAMP": {
   "name": "STAMP",
   "file": "2dungeon.zil",
   "line": 2100,
   "endLine": 2110,
   "desc": "Flathead stamp",
   "ldesc": "There is a Flathead stamp here.",
   "fdesc": null,
   "loc": "PURPLE-BOOK",
   "flags": [
    "STAGGERED",
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
     "This three zorkmid stamp bears a portrait of Lord\nDimwit Flathead, \"Our Excessive Leader\"."
    ]
   },
   "contents": [],
   "source": "<OBJECT STAMP\n\t(IN PURPLE-BOOK)\n\t(SYNONYM STAMP TREASURE)\n\t(ADJECTIVE FLATHEAD)\n\t(DESC \"Flathead stamp\")\n\t(FLAGS STAGGERED READBIT TAKEBIT BURNBIT)\n\t(LDESC \"There is a Flathead stamp here.\")\n\t(SIZE 1)\n\t(VALUE 10)\n\t(TEXT \"This three zorkmid stamp bears a portrait of Lord\nDimwit Flathead, \\\"Our Excessive Leader\\\".\")>",
   "referencedBy": [
    "PURPLE-BOOK-FCN"
   ]
  },
  "GREEN-BOOK": {
   "name": "GREEN-BOOK",
   "file": "2dungeon.zil",
   "line": 2129,
   "endLine": 2140,
   "desc": "green book",
   "ldesc": null,
   "fdesc": "A handsome book, bound in green leather, sits in the center of the room.",
   "loc": "LIBRARY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "COVER",
    "BOOKS"
   ],
   "adjectives": [
    "HANDSOME",
    "GREEN",
    "LEATHER"
   ],
   "action": "RANDOM-BOOK",
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
     "This book is written in a tongue with which I am unfamiliar."
    ]
   },
   "contents": [],
   "source": "<OBJECT GREEN-BOOK\n\t(IN LIBRARY)\n\t(SYNONYM BOOK COVER BOOKS)\n\t(ADJECTIVE HANDSOME GREEN LEATHER)\n\t(DESC \"green book\")\n\t(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)\n\t(FDESC\n\"A handsome book, bound in green leather, sits in the center of the room.\")\n\t(CAPACITY 2)\n\t(SIZE 10)\n\t(TEXT \"This book is written in a tongue with which I am unfamiliar.\")\n\t(ACTION RANDOM-BOOK)>",
   "referencedBy": [
    "RANDOM-BOOK"
   ]
  },
  "BLUE-BOOK": {
   "name": "BLUE-BOOK",
   "file": "2dungeon.zil",
   "line": 2142,
   "endLine": 2152,
   "desc": "blue book",
   "ldesc": null,
   "fdesc": "Worn and battered in one corner of the room is a blue book.",
   "loc": "LIBRARY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "COVER",
    "BOOKS"
   ],
   "adjectives": [
    "BLUE"
   ],
   "action": "RANDOM-BOOK",
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
     "This book is written in a tongue with which I am unfamiliar."
    ]
   },
   "contents": [],
   "source": "<OBJECT BLUE-BOOK\n\t(IN LIBRARY)\n\t(SYNONYM BOOK COVER BOOKS)\n\t(ADJECTIVE BLUE)\n\t(DESC \"blue book\")\n\t(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)\n\t(FDESC \"Worn and battered in one corner of the room is a blue book.\")\n\t(CAPACITY 2)\n\t(SIZE 10)\n\t(TEXT \"This book is written in a tongue with which I am unfamiliar.\")\n\t(ACTION RANDOM-BOOK)>",
   "referencedBy": [
    "RANDOM-BOOK"
   ]
  },
  "WHITE-BOOK": {
   "name": "WHITE-BOOK",
   "file": "2dungeon.zil",
   "line": 2154,
   "endLine": 2170,
   "desc": "white book",
   "ldesc": null,
   "fdesc": "Right beside the purple book sits a white one.",
   "loc": "LIBRARY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "CONTBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BOOK",
    "COVER",
    "BOOKS"
   ],
   "adjectives": [
    "WHITE",
    "GLOSSY"
   ],
   "action": "RANDOM-BOOK",
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
     "It is written in an unfamiliar tongue and details the use of various\nmagical objects, chiefly the so-called \"magic wand\". Apparently these\ndevices work by pointing them at the object to be ensorcelled, and then\nchanting the appropriate magic words. (It's truly amazing how credulous\nthese ancients were, isn't it?)"
    ]
   },
   "contents": [],
   "source": "<OBJECT WHITE-BOOK\n\t(IN LIBRARY)\n\t(SYNONYM BOOK COVER BOOKS)\n\t(ADJECTIVE WHITE GLOSSY)\n\t(DESC \"white book\")\n\t(FLAGS READBIT TAKEBIT CONTBIT BURNBIT)\n\t(FDESC\n\"Right beside the purple book sits a white one.\")\n\t(CAPACITY 2)\n\t(SIZE 5)\n\t(TEXT\n\"It is written in an unfamiliar tongue and details the use of various\nmagical objects, chiefly the so-called \\\"magic wand\\\". Apparently these\ndevices work by pointing them at the object to be ensorcelled, and then\nchanting the appropriate magic words. (It's truly amazing how credulous\nthese ancients were, isn't it?)\")\n\t(ACTION RANDOM-BOOK)>",
   "referencedBy": [
    "RANDOM-BOOK"
   ]
  },
  "PURPLE-BOOK": {
   "name": "PURPLE-BOOK",
   "file": "2dungeon.zil",
   "line": 2172,
   "endLine": 2186,
   "desc": "purple book",
   "ldesc": "Lying in the dust, and covered with mold, is a purple book.",
   "fdesc": null,
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
   "action": "PURPLE-BOOK-FCN",
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
     "This book is written in a tongue with which I am unfamiliar. Assuming that\none can indeed tell a book by its cover, it is likely filled with purple prose,\nthe like of which is rarely seen outside the Great Underground Empire."
    ]
   },
   "contents": [
    "STAMP"
   ],
   "source": "<OBJECT PURPLE-BOOK\n\t(IN LIBRARY)\n\t(SYNONYM BOOK BOOKS)\n\t(ADJECTIVE PURPLE)\n\t(DESC \"purple book\")\n\t(FLAGS READBIT TAKEBIT CONTBIT SEARCHBIT BURNBIT)\n\t(LDESC\n\"Lying in the dust, and covered with mold, is a purple book.\")\n\t(CAPACITY 2)\n\t(SIZE 10)\n\t(ACTION PURPLE-BOOK-FCN)\n\t(TEXT\n\"This book is written in a tongue with which I am unfamiliar. Assuming that\none can indeed tell a book by its cover, it is likely filled with purple prose,\nthe like of which is rarely seen outside the Great Underground Empire.\")>",
   "referencedBy": [
    "PURPLE-BOOK-FCN",
    "RANDOM-BOOK"
   ]
  },
  "RECEPTACLE": {
   "name": "RECEPTACLE",
   "file": "2dungeon.zil",
   "line": 2188,
   "endLine": 2195,
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
   "source": "<OBJECT RECEPTACLE\n\t(IN BALLOON)\n\t(SYNONYM RECEPTACLE)\n\t(ADJECTIVE METAL)\n\t(DESC \"receptacle\")\n\t(FLAGS CONTBIT SEARCHBIT NDESCBIT)\n\t(ACTION BCONTENTS)\n\t(CAPACITY 6)>",
   "referencedBy": [
    "BALLOON-FCN",
    "I-BALLOON",
    "RISE-AND-SHINE",
    "BCONTENTS",
    "I-BURNUP",
    "V-BURN"
   ]
  },
  "ROBOT": {
   "name": "ROBOT",
   "file": "2dungeon.zil",
   "line": 2197,
   "endLine": 2203,
   "desc": "robot",
   "ldesc": "There is a robot here.",
   "fdesc": null,
   "loc": "MAGNET-ROOM",
   "flags": [
    "ACTORBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "ROBOT",
    "R2D2",
    "C3PO",
    "ROBBY"
   ],
   "adjectives": [],
   "action": "ROBOT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ROBOT\n\t(IN MAGNET-ROOM)\n\t(SYNONYM ROBOT R2D2 C3PO ROBBY)\n\t(DESC \"robot\")\n\t(FLAGS ACTORBIT CONTBIT OPENBIT)\n\t(ACTION ROBOT-FCN)\n\t(LDESC \"There is a robot here.\")>",
   "referencedBy": [
    "INFESTED?",
    "EATME-FCN",
    "CAKE-FCN",
    "SPHERE-FCN",
    "ROBOT-FCN",
    "WAND-FCN"
   ]
  },
  "RUBY": {
   "name": "RUBY",
   "file": "2dungeon.zil",
   "line": 2205,
   "endLine": 2213,
   "desc": "ruby",
   "ldesc": "There is a moby ruby lying here.",
   "fdesc": "On the floor lies a moby ruby.",
   "loc": "LAVA-ROOM",
   "flags": [
    "STAGGERED",
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
   "source": "<OBJECT RUBY\n\t(IN LAVA-ROOM)\n\t(SYNONYM RUBY TREASURE)\n\t(ADJECTIVE MOBY)\n\t(DESC \"ruby\")\n\t(FLAGS STAGGERED TAKEBIT)\n\t(FDESC \"On the floor lies a moby ruby.\")\n\t(LDESC \"There is a moby ruby lying here.\")\n\t(VALUE 15)>",
   "referencedBy": []
  },
  "IRON-BOX": {
   "name": "IRON-BOX",
   "file": "2dungeon.zil",
   "line": 2215,
   "endLine": 2223,
   "desc": "steel box",
   "ldesc": "There is a dented steel box here.",
   "fdesc": null,
   "loc": "CAROUSEL-ROOM",
   "flags": [
    "CONTBIT",
    "TAKEBIT",
    "INVISIBLE"
   ],
   "synonyms": [
    "BOX"
   ],
   "adjectives": [
    "STEEL",
    "DENTED"
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
    "SIZE": [
     "40"
    ]
   },
   "contents": [
    "VIOLIN"
   ],
   "source": "<OBJECT IRON-BOX\n\t(IN CAROUSEL-ROOM)\n\t(SYNONYM BOX)\n\t(ADJECTIVE STEEL DENTED)\n\t(DESC \"steel box\")\n\t(FLAGS CONTBIT TAKEBIT INVISIBLE)\n\t(LDESC \"There is a dented steel box here.\")\n\t(CAPACITY 20)\n\t(SIZE 40)>",
   "referencedBy": [
    "BUTTONS",
    "GENIE-FCN"
   ]
  },
  "CAGE": {
   "name": "CAGE",
   "file": "2dungeon.zil",
   "line": 2225,
   "endLine": 2231,
   "desc": "solid steel cage",
   "ldesc": "There is a solid steel cage in the middle of the room.",
   "fdesc": null,
   "loc": "CAGE-ROOM",
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
   "source": "<OBJECT CAGE\n\t(IN CAGE-ROOM)\n\t(FLAGS INVISIBLE)\n\t(SYNONYM CAGE)\n\t(ADJECTIVE STEEL SOLID)\n\t(DESC \"solid steel cage\")\n\t(LDESC \"There is a solid steel cage in the middle of the room.\")>",
   "referencedBy": [
    "SPHERE-FCN",
    "ROBOT-FCN"
   ]
  },
  "CANDY": {
   "name": "CANDY",
   "file": "2dungeon.zil",
   "line": 2233,
   "endLine": 2242,
   "desc": "package of candy",
   "ldesc": "There is a package of candied goodies here.",
   "fdesc": null,
   "loc": "POOL-ROOM",
   "flags": [
    "STAGGERED",
    "FOODBIT",
    "TAKEBIT",
    "INVISIBLE",
    "READBIT"
   ],
   "synonyms": [
    "PACKAGE",
    "CANDY",
    "TREASURE",
    "GRASSHOPPERS"
   ],
   "adjectives": [
    "CANDIED",
    "RARE"
   ],
   "action": "CANDY-FCN",
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
   "source": "<OBJECT CANDY\n\t(IN POOL-ROOM)\n\t(SYNONYM PACKAGE CANDY TREASURE GRASSHOPPERS)\n\t(ADJECTIVE CANDIED RARE)\n\t(DESC \"package of candy\")\n\t(FLAGS STAGGERED FOODBIT TAKEBIT INVISIBLE READBIT)\n\t(LDESC \"There is a package of candied goodies here.\")\n\t(ACTION CANDY-FCN)\n\t(SIZE 8)\n\t(VALUE 15)>",
   "referencedBy": [
    "CAKE-FCN",
    "DOOR-KEEPER-FCN",
    "GUARDIAN-ROOM-FCN",
    "RIPOFF",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "TOP-ETCHINGS": {
   "name": "TOP-ETCHINGS",
   "file": "2dungeon.zil",
   "line": 2244,
   "endLine": 2249,
   "desc": "wall with etchings",
   "ldesc": null,
   "fdesc": null,
   "loc": "WELL-TOP",
   "flags": [
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "ETCHINGS",
    "WALL"
   ],
   "adjectives": [],
   "action": "TOP-ETCHINGS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT TOP-ETCHINGS\n\t(IN WELL-TOP)\n\t(SYNONYM ETCHINGS WALL)\n\t(DESC \"wall with etchings\")\n\t(FLAGS READBIT NDESCBIT)\n\t(ACTION TOP-ETCHINGS-F)>",
   "referencedBy": []
  },
  "BOTTOM-ETCHINGS": {
   "name": "BOTTOM-ETCHINGS",
   "file": "2dungeon.zil",
   "line": 2251,
   "endLine": 2256,
   "desc": "wall with etchings",
   "ldesc": null,
   "fdesc": null,
   "loc": "WELL-BOTTOM",
   "flags": [
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "ETCHINGS",
    "WALL"
   ],
   "adjectives": [],
   "action": "BOTTOM-ETCHINGS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BOTTOM-ETCHINGS\n\t(IN WELL-BOTTOM)\n\t(SYNONYM ETCHINGS WALL)\n\t(DESC \"wall with etchings\")\n\t(FLAGS READBIT NDESCBIT)\n\t(ACTION BOTTOM-ETCHINGS-F)>",
   "referencedBy": []
  },
  "FUSE": {
   "name": "FUSE",
   "file": "2dungeon.zil",
   "line": 2258,
   "endLine": 2266,
   "desc": "black string",
   "ldesc": "There is a coil of black, braided string here.",
   "fdesc": null,
   "loc": "COBWEBBY-CORRIDOR",
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
   "action": "FUSE-FCN",
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
   "source": "<OBJECT FUSE\n\t(IN COBWEBBY-CORRIDOR)\n\t(SYNONYM FUSE STRING COIL)\n\t(ADJECTIVE BLACK THIN)\n\t(DESC \"black string\")\n\t(FLAGS TAKEBIT BURNBIT)\n\t(ACTION FUSE-FCN)\n\t(LDESC \"There is a coil of black, braided string here.\")\n\t(SIZE 1)>",
   "referencedBy": [
    "I-FUSE",
    "BOMB?"
   ]
  },
  "BUCKET": {
   "name": "BUCKET",
   "file": "2dungeon.zil",
   "line": 2268,
   "endLine": 2280,
   "desc": "wooden bucket",
   "ldesc": "There is a wooden bucket here, 3 feet in diameter and 3 feet high.",
   "fdesc": null,
   "loc": "WELL-BOTTOM",
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
   "action": "BUCKET-FCN",
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
   "source": "<OBJECT BUCKET\n\t(IN WELL-BOTTOM)\n\t(SYNONYM BUCKET)\n\t(ADJECTIVE WOODEN)\n\t(DESC \"wooden bucket\")\n\t(FLAGS VEHBIT OPENBIT CONTBIT)\n\t(ACTION BUCKET-FCN)\n\t(CONTFCN BUCKET-CONT)\n\t(LDESC\n\"There is a wooden bucket here, 3 feet in diameter and 3 feet high.\")\n\t(CAPACITY 100)\n\t(SIZE 100)\n\t(VTYPE 0)>",
   "referencedBy": [
    "I-BUCKET",
    "BUCKET-FCN",
    "PASS-THE-BUCKET",
    "BUCKET-CONT",
    "GO"
   ]
  },
  "POSTS": {
   "name": "POSTS",
   "file": "2dungeon.zil",
   "line": 2282,
   "endLine": 2287,
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
   "source": "<OBJECT POSTS\n\t(IN POSTS-ROOM)\n\t(SYNONYM POSTS POST)\n\t(ADJECTIVE WOODEN)\n\t(FLAGS NDESCBIT)\n\t(DESC \"group of wooden posts\")>",
   "referencedBy": [
    "CAKE-FCN"
   ]
  },
  "BILLS": {
   "name": "BILLS",
   "file": "2dungeon.zil",
   "line": 2291,
   "endLine": 2305,
   "desc": "stack of zorkmid bills",
   "ldesc": "200 neatly stacked zorkmid bills are here.",
   "fdesc": "On the floor sit 200 neatly stacked zorkmid bills.",
   "loc": "VAULT",
   "flags": [
    "STAGGERED",
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
    "MANY",
    "ZORKMID"
   ],
   "action": "BILLS-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "SIZE": [
     "10"
    ],
    "VALUE": [
     "25"
    ],
    "TEXT": [
     "Each bill is worth 100 zorkmids, and bears the legend\n\"In Frobs We Trust\"."
    ]
   },
   "contents": [],
   "source": "<OBJECT BILLS\n\t(IN VAULT)\n\t(SYNONYM BILLS STACK MONEY TREASURE)\n\t(ADJECTIVE NEAT MANY ZORKMID)\n\t(DESC \"stack of zorkmid bills\")\n\t(FLAGS STAGGERED READBIT TAKEBIT BURNBIT)\n\t(ACTION BILLS-OBJECT)\n\t(LDESC\n\t \"200 neatly stacked zorkmid bills are here.\")\n\t(FDESC\n\t \"On the floor sit 200 neatly stacked zorkmid bills.\")\n\t(SIZE 10)\n\t(VALUE 25)\n\t(TEXT \"Each bill is worth 100 zorkmids, and bears the legend\n\\\"In Frobs We Trust\\\".\")>",
   "referencedBy": [
    "BKLEAVEE",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "PORTRAIT": {
   "name": "PORTRAIT",
   "file": "2dungeon.zil",
   "line": 2328,
   "endLine": 2339,
   "desc": "portrait of J. Pierpont Flathead",
   "ldesc": "The portrait of J. Pierpont Flathead is here.",
   "fdesc": "A portrait of J. Pierpont Flathead hangs on the wall.",
   "loc": "OFFICE",
   "flags": [
    "STAGGERED",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "PORTRAIT",
    "PAINTING",
    "ART",
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
     "25"
    ],
    "VALUE": [
     "20"
    ]
   },
   "contents": [],
   "source": "<OBJECT PORTRAIT\n\t(IN OFFICE)\n\t(SYNONYM PORTRAIT PAINTING ART TREASURE)\n\t(ADJECTIVE FLATHEAD)\n\t(DESC \"portrait of J. Pierpont Flathead\")\n\t(FLAGS STAGGERED TAKEBIT BURNBIT)\t\n\t(LDESC\n\t \"The portrait of J. Pierpont Flathead is here.\")\n\t(FDESC\n\t \"A portrait of J. Pierpont Flathead hangs on the wall.\")\n\t(SIZE 25)\n\t(VALUE 20)>",
   "referencedBy": [
    "BKLEAVEE",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "BANK-BROCHURE": {
   "name": "BANK-BROCHURE",
   "file": "2dungeon.zil",
   "line": 2358,
   "endLine": 2371,
   "desc": "bank brochure",
   "ldesc": null,
   "fdesc": "On the ground is a small, worn piece of paper.",
   "loc": "DEPOSITORY",
   "flags": [
    "READBIT",
    "TAKEBIT",
    "BURNBIT"
   ],
   "synonyms": [
    "BROCHURE",
    "PAPER",
    "PIECE"
   ],
   "adjectives": [
    "BANK",
    "SMALL",
    "WORN"
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
     "The paper is barely readable. You can only make out \"... valuables\nare completely safe ... advanced\nmagic technology ... impossible to take valuables from the depository\n... either teller's ... Many customers faint ... teller pops in ...\nseems to walk through ... walls ...\""
    ]
   },
   "contents": [],
   "source": "<OBJECT BANK-BROCHURE\n\t(IN DEPOSITORY)\n\t(SYNONYM BROCHURE PAPER PIECE)\n\t(ADJECTIVE BANK SMALL WORN)\n\t(DESC \"bank brochure\")\n\t(FDESC \"On the ground is a small, worn piece of paper.\")\n\t(FLAGS READBIT TAKEBIT BURNBIT)\n\t(SIZE 2)\n\t(TEXT\n\"The paper is barely readable. You can only make out \\\"... valuables\nare completely safe ... advanced\nmagic technology ... impossible to take valuables from the depository\n... either teller's ... Many customers faint ... teller pops in ...\nseems to walk through ... walls ...\\\"\")>",
   "referencedBy": []
  },
  "CUBE": {
   "name": "CUBE",
   "file": "2dungeon.zil",
   "line": 2373,
   "endLine": 2379,
   "desc": "large stone cube",
   "ldesc": null,
   "fdesc": null,
   "loc": "DEPOSITORY",
   "flags": [
    "READBIT",
    "NDESCBIT"
   ],
   "synonyms": [
    "VAULT",
    "CUBE",
    "LETTER"
   ],
   "adjectives": [
    "STONE",
    "LARGE"
   ],
   "action": "CUBE-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CUBE\n\t(IN DEPOSITORY)\n\t(SYNONYM VAULT CUBE LETTER)\n\t(ADJECTIVE STONE LARGE)\n\t(DESC \"large stone cube\")\n\t(FLAGS READBIT NDESCBIT)\n\t(ACTION CUBE-F)>",
   "referencedBy": []
  },
  "CURTAIN": {
   "name": "CURTAIN",
   "file": "2dungeon.zil",
   "line": 2381,
   "endLine": 2387,
   "desc": "shimmering curtain of light",
   "ldesc": null,
   "fdesc": null,
   "loc": "DEPOSITORY",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "CURTAIN",
    "LIGHT"
   ],
   "adjectives": [
    "SHIMMERING"
   ],
   "action": "SCOL-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT CURTAIN\n\t(IN DEPOSITORY)\n\t(SYNONYM CURTAIN LIGHT)\n\t(ADJECTIVE SHIMMERING)\n\t(DESC \"shimmering curtain of light\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SCOL-OBJECT)>",
   "referencedBy": [
    "SCOL-OBJECT",
    "V-THROUGH"
   ]
  },
  "GNOME-OF-ZURICH": {
   "name": "GNOME-OF-ZURICH",
   "file": "2dungeon.zil",
   "line": 2389,
   "endLine": 2395,
   "desc": "Gnome of Zurich",
   "ldesc": "There is a Gnome of Zurich here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "ACTORBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "GNOME",
    "ZURICH"
   ],
   "adjectives": [
    "ZURICH"
   ],
   "action": "ZGNOME-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "DEPOSIT-BOX"
   ],
   "source": "<OBJECT GNOME-OF-ZURICH\n\t(SYNONYM GNOME ZURICH)\n\t(ADJECTIVE ZURICH)\n\t(DESC \"Gnome of Zurich\")\n\t(FLAGS ACTORBIT CONTBIT OPENBIT)\n\t(ACTION ZGNOME-FCN)\n\t(LDESC \"There is a Gnome of Zurich here.\")>",
   "referencedBy": [
    "I-ZGNOME",
    "ZGNOME-FCN",
    "I-ZGNOME-OUT"
   ]
  },
  "DEPOSIT-BOX": {
   "name": "DEPOSIT-BOX",
   "file": "2dungeon.zil",
   "line": 2397,
   "endLine": 2403,
   "desc": "safety deposit box",
   "ldesc": null,
   "fdesc": null,
   "loc": "GNOME-OF-ZURICH",
   "flags": [
    "NDESCBIT",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "BOX"
   ],
   "adjectives": [
    "DEPOSIT",
    "SAFETY"
   ],
   "action": "BOX-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT DEPOSIT-BOX\n\t(IN GNOME-OF-ZURICH)\n\t(SYNONYM BOX)\n\t(ADJECTIVE DEPOSIT SAFETY)\n\t(DESC \"safety deposit box\")\n\t(FLAGS NDESCBIT TAKEBIT TRYTAKEBIT)\n\t(ACTION BOX-F)>",
   "referencedBy": []
  },
  "PDOOR": {
   "name": "PDOOR",
   "file": "2dungeon.zil",
   "line": 2407,
   "endLine": 2413,
   "desc": "door made of oak",
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
   "action": "PDOOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PDOOR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM DOOR)\n\t(ADJECTIVE WOODEN OAK)\n\t(DESC \"door made of oak\")\n\t(FLAGS DOORBIT CONTBIT)\n\t(ACTION PDOOR-FCN)>",
   "referencedBy": [
    "PWINDOW-FCN",
    "PKEY-FCN",
    "PLACE-MAT-FCN"
   ]
  },
  "PWINDOW": {
   "name": "PWINDOW",
   "file": "2dungeon.zil",
   "line": 2415,
   "endLine": 2421,
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
   "action": "PWINDOW-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PWINDOW\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM WINDOW)\n\t(ADJECTIVE BARRED)\n\t(DESC \"barred window\")\n\t(FLAGS DOORBIT)\n\t(ACTION PWINDOW-FCN)>",
   "referencedBy": []
  },
  "LID-1": {
   "name": "LID-1",
   "file": "2dungeon.zil",
   "line": 2423,
   "endLine": 2429,
   "desc": "metal lid",
   "ldesc": null,
   "fdesc": null,
   "loc": "TINY-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT"
   ],
   "synonyms": [
    "LID"
   ],
   "adjectives": [
    "METAL"
   ],
   "action": "PLID-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LID-1\n\t(IN TINY-ROOM)\n\t(SYNONYM LID)\n\t(ADJECTIVE METAL)\n\t(DESC \"metal lid\")\n\t(FLAGS NDESCBIT CONTBIT)\n\t(ACTION PLID-FCN)>",
   "referencedBy": [
    "TINY-ROOM-FCN",
    "PLID",
    "PKH-FCN"
   ]
  },
  "LID-2": {
   "name": "LID-2",
   "file": "2dungeon.zil",
   "line": 2431,
   "endLine": 2437,
   "desc": "metal lid",
   "ldesc": null,
   "fdesc": null,
   "loc": "DREARY-ROOM",
   "flags": [
    "NDESCBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "LID"
   ],
   "adjectives": [
    "METAL"
   ],
   "action": "PLID-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LID-2\n\t(IN DREARY-ROOM)\n\t(SYNONYM LID)\n\t(ADJECTIVE METAL)\n\t(DESC \"metal lid\")\n\t(FLAGS NDESCBIT CONTBIT OPENBIT)\n\t(ACTION PLID-FCN)>",
   "referencedBy": [
    "DREARY-ROOM-FCN",
    "PLID",
    "PKH-FCN"
   ]
  },
  "PTABLE": {
   "name": "PTABLE",
   "file": "2dungeon.zil",
   "line": 2439,
   "endLine": 2445,
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
   "source": "<OBJECT PTABLE\n\t(IN DREARY-ROOM)\n\t(SYNONYM TABLE)\n\t(ADJECTIVE DUSTY WOODEN)\n\t(DESC \"table\")\n\t(FLAGS NDESCBIT CONTBIT SURFACEBIT OPENBIT)\n\t(CAPACITY 40)>",
   "referencedBy": []
  },
  "PCRACK": {
   "name": "PCRACK",
   "file": "2dungeon.zil",
   "line": 2447,
   "endLine": 2452,
   "desc": "narrow crack",
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
   "source": "<OBJECT PCRACK\n\t(IN DREARY-ROOM)\n\t(SYNONYM CRACK)\n\t(ADJECTIVE NARROW)\n\t(DESC \"narrow crack\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "KEYHOLE-1": {
   "name": "KEYHOLE-1",
   "file": "2dungeon.zil",
   "line": 2454,
   "endLine": 2460,
   "desc": "keyhole",
   "ldesc": null,
   "fdesc": null,
   "loc": "TINY-ROOM",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "KEYHOLE",
    "HOLE"
   ],
   "adjectives": [],
   "action": "PKH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ]
   },
   "contents": [],
   "source": "<OBJECT KEYHOLE-1\n\t(IN TINY-ROOM)\n\t(SYNONYM KEYHOLE HOLE)\n\t(DESC \"keyhole\")\n\t(FLAGS NDESCBIT OPENBIT SEARCHBIT)\n\t(ACTION PKH-FCN)\n\t(CAPACITY 2)>",
   "referencedBy": [
    "TINY-ROOM-FCN",
    "PCHECK",
    "PKH",
    "PKH-FCN",
    "PLID-FCN",
    "PDOOR-FCN"
   ]
  },
  "KEYHOLE-2": {
   "name": "KEYHOLE-2",
   "file": "2dungeon.zil",
   "line": 2462,
   "endLine": 2468,
   "desc": "keyhole",
   "ldesc": null,
   "fdesc": null,
   "loc": "DREARY-ROOM",
   "flags": [
    "NDESCBIT",
    "OPENBIT",
    "SEARCHBIT"
   ],
   "synonyms": [
    "KEYHOLE",
    "HOLE"
   ],
   "adjectives": [],
   "action": "PKH-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "CAPACITY": [
     "2"
    ]
   },
   "contents": [
    "KEY"
   ],
   "source": "<OBJECT KEYHOLE-2\n\t(IN DREARY-ROOM)\n\t(SYNONYM KEYHOLE HOLE)\n\t(DESC \"keyhole\")\n\t(FLAGS NDESCBIT OPENBIT SEARCHBIT)\n\t(ACTION PKH-FCN)\n\t(CAPACITY 2)>",
   "referencedBy": [
    "DREARY-ROOM-FCN",
    "PCHECK",
    "PKH",
    "PKH-FCN",
    "PLID-FCN",
    "PDOOR-FCN"
   ]
  },
  "LETTER-OPENER": {
   "name": "LETTER-OPENER",
   "file": "2dungeon.zil",
   "line": 2470,
   "endLine": 2476,
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
   "source": "<OBJECT LETTER-OPENER\n\t(IN GAZEBO-TABLE)\n\t(SYNONYM OPENER)\n\t(ADJECTIVE LETTER)\n\t(DESC \"letter opener\")\n\t(SIZE 2)\n\t(FLAGS TAKEBIT TOOLBIT)>",
   "referencedBy": [
    "PKH-FCN"
   ]
  },
  "KEY": {
   "name": "KEY",
   "file": "2dungeon.zil",
   "line": 2478,
   "endLine": 2485,
   "desc": "rusty iron key",
   "ldesc": null,
   "fdesc": null,
   "loc": "KEYHOLE-2",
   "flags": [
    "TAKEBIT",
    "NDESCBIT",
    "TURNBIT",
    "TOOLBIT"
   ],
   "synonyms": [
    "KEY"
   ],
   "adjectives": [
    "IRON",
    "RUSTY"
   ],
   "action": "PKEY-FCN",
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
   "source": "<OBJECT KEY\n\t(IN KEYHOLE-2)\n\t(SYNONYM KEY)\n\t(ADJECTIVE IRON RUSTY)\n\t(DESC \"rusty iron key\")\n\t(FLAGS TAKEBIT NDESCBIT TURNBIT TOOLBIT)\n\t(ACTION PKEY-FCN)\n\t(SIZE 2)>",
   "referencedBy": [
    "PCHECK",
    "PKH-FCN",
    "PDOOR-FCN"
   ]
  },
  "PALANTIR-2": {
   "name": "PALANTIR-2",
   "file": "2dungeon.zil",
   "line": 2487,
   "endLine": 2495,
   "desc": "blue crystal sphere",
   "ldesc": null,
   "fdesc": "In the center of the table sits a blue crystal sphere.",
   "loc": "DREARY-ROOM",
   "flags": [
    "STAGGERED",
    "TAKEBIT",
    "TRANSBIT"
   ],
   "synonyms": [
    "PALANTIR",
    "SPHERE"
   ],
   "adjectives": [
    "CRYSTAL",
    "BLUE"
   ],
   "action": "PALANTIR",
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
   "source": "<OBJECT PALANTIR-2\n\t(IN DREARY-ROOM)\n\t(SYNONYM PALANTIR SPHERE)\n\t(ADJECTIVE CRYSTAL BLUE)\n\t(DESC \"blue crystal sphere\")\n\t(FLAGS STAGGERED TAKEBIT TRANSBIT)\n\t(ACTION PALANTIR)\n\t(VALUE 20)\n\t(FDESC \"In the center of the table sits a blue crystal sphere.\")>",
   "referencedBy": [
    "CAKE-FCN",
    "PALANTIR",
    "DEAD-PALANTIR",
    "DOOR-KEEPER-FCN",
    "STAND-FCN",
    "I-WIZARD",
    "RIPOFF",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "GAZEBO": {
   "name": "GAZEBO",
   "file": "2dungeon.zil",
   "line": 2497,
   "endLine": 2503,
   "desc": "gazebo",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "GAZEBO",
    "STRUCTURE"
   ],
   "adjectives": [
    "WOODEN"
   ],
   "action": "GAZEBO-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GAZEBO\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM GAZEBO STRUCTURE)\n\t(ADJECTIVE WOODEN)\n\t(DESC \"gazebo\")\n\t(FLAGS NDESCBIT)\n\t(ACTION GAZEBO-FCN)>",
   "referencedBy": []
  },
  "GAZEBO-TABLE": {
   "name": "GAZEBO-TABLE",
   "file": "2dungeon.zil",
   "line": 2505,
   "endLine": 2511,
   "desc": "table",
   "ldesc": null,
   "fdesc": null,
   "loc": "GAZEBO-ROOM",
   "flags": [
    "NDESCBIT",
    "SURFACEBIT",
    "CONTBIT",
    "OPENBIT"
   ],
   "synonyms": [
    "TABLE"
   ],
   "adjectives": [
    "TEA"
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
   "contents": [
    "MATCH",
    "LETTER-OPENER",
    "NEWSPAPER",
    "PLACE-MAT",
    "TEAPOT"
   ],
   "source": "<OBJECT GAZEBO-TABLE\n\t(IN GAZEBO-ROOM)\n\t(SYNONYM TABLE)\n\t(ADJECTIVE TEA)\n\t(DESC \"table\")\n\t(FLAGS NDESCBIT SURFACEBIT CONTBIT OPENBIT)\n\t(CAPACITY 100)>",
   "referencedBy": []
  },
  "NEWSPAPER": {
   "name": "NEWSPAPER",
   "file": "2dungeon.zil",
   "line": 2513,
   "endLine": 2530,
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
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "** U.S. News and Dungeon Report **|\n|\nFAMED ADVENTURER TO EXPLORE GREAT UNDERGROUND EMPIRE|\n|\nOur correspondents report that a world-famous and battle-hardened\nadventurer has been seen in the vicinity of the Great Underground\nEmpire. Local grues have been reported sharpening their (slavering)\nfangs....|\n|\n\"Zork II: The Wizard of Frobozz\" was written by Dave Lebling and Marc\nBlank, and is (c) Copyright 1981, 1982, 1983 by Infocom, Inc."
    ]
   },
   "contents": [],
   "source": "<OBJECT NEWSPAPER\n\t(IN GAZEBO-TABLE)\n\t(SYNONYM PAPER NEWSPAPER)\n\t(ADJECTIVE NEWS NEWSPAPER)\n\t(DESC \"newspaper\")\n\t(FLAGS TAKEBIT BURNBIT READBIT)\n\t(TEXT\n\"** U.S. News and Dungeon Report **|\n|\nFAMED ADVENTURER TO EXPLORE GREAT UNDERGROUND EMPIRE|\n|\nOur correspondents report that a world-famous and battle-hardened\nadventurer has been seen in the vicinity of the Great Underground\nEmpire. Local grues have been reported sharpening their (slavering)\nfangs....|\n|\n\\\"Zork II: The Wizard of Frobozz\\\" was written by Dave Lebling and Marc\nBlank, and is (c) Copyright 1981, 1982, 1983 by Infocom, Inc.\")>",
   "referencedBy": [
    "PDOOR-FCN"
   ]
  },
  "PLACE-MAT": {
   "name": "PLACE-MAT",
   "file": "2dungeon.zil",
   "line": 2532,
   "endLine": 2540,
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
   "action": "PLACE-MAT-FCN",
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
   "source": "<OBJECT PLACE-MAT\n\t(IN GAZEBO-TABLE)\n\t(SYNONYM MAT PLACEM)\n\t(ADJECTIVE PLACE)\n\t(DESC \"place mat\")\n\t(FLAGS TAKEBIT SURFACEBIT CONTBIT OPENBIT)\n\t(ACTION PLACE-MAT-FCN)\n\t(SIZE 12)\n\t(CAPACITY 20)>",
   "referencedBy": [
    "PCHECK"
   ]
  },
  "TEAPOT": {
   "name": "TEAPOT",
   "file": "2dungeon.zil",
   "line": 2542,
   "endLine": 2549,
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
   "source": "<OBJECT TEAPOT\n\t(IN GAZEBO-TABLE)\n\t(SYNONYM TEAPOT POT)\n\t(ADJECTIVE CHINA TEA)\n\t(DESC \"china teapot\")\n\t(FLAGS TAKEBIT TRANSBIT CONTBIT OPENBIT)\n\t(CAPACITY 4)\n\t(ACTION TEAPOT-F)>",
   "referencedBy": [
    "WATER-FCN"
   ]
  },
  "WATER": {
   "name": "WATER",
   "file": "2dungeon.zil",
   "line": 2555,
   "endLine": 2561,
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
    "QUANTITY",
    "LIQUID",
    "H2O"
   ],
   "adjectives": [],
   "action": "WATER-FCN",
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
   "source": "<OBJECT WATER\n\t(SYNONYM WATER QUANTITY LIQUID H2O)\n\t(DESC \"quantity of water\")\n\t(FLAGS TAKEBIT DRINKBIT)\n\t(ACTION WATER-FCN)\n\t(LDESC \"There is some water here.\")\n\t(SIZE 4)>",
   "referencedBy": [
    "I-BUCKET",
    "WATER-FCN",
    "BUCKET-FCN",
    "PRE-BOARD",
    "HIT-SPOT",
    "PRE-FILL",
    "V-FILL",
    "V-POUR-ON",
    "SHAKE-LOOP",
    "V-SWIM"
   ]
  },
  "SALTY-WATER": {
   "name": "SALTY-WATER",
   "file": "2dungeon.zil",
   "line": 2563,
   "endLine": 2569,
   "desc": "quantity of salty water",
   "ldesc": "There is some water here.",
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT",
    "DRINKBIT"
   ],
   "synonyms": [
    "WATER",
    "QUANTITY",
    "LIQUID",
    "H2O"
   ],
   "adjectives": [],
   "action": "WATER-FCN",
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
   "source": "<OBJECT SALTY-WATER\n\t(SYNONYM WATER QUANTITY LIQUID H2O)\n\t(DESC \"quantity of salty water\")\n\t(FLAGS TAKEBIT DRINKBIT)\n\t(ACTION WATER-FCN)\n\t(LDESC \"There is some water here.\")\n\t(SIZE 4)>",
   "referencedBy": [
    "WATER-FCN"
   ]
  },
  "GOLD-KEY": {
   "name": "GOLD-KEY",
   "file": "2dungeon.zil",
   "line": 2571,
   "endLine": 2579,
   "desc": "delicate gold key",
   "ldesc": null,
   "fdesc": null,
   "loc": "UNICORN",
   "flags": [
    "STAGGERED",
    "NDESCBIT",
    "TAKEBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "KEY",
    "TREASURE"
   ],
   "adjectives": [
    "DELICATE",
    "GOLD"
   ],
   "action": "UNICORN-FCN",
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
   "source": "<OBJECT GOLD-KEY\n\t(IN UNICORN)\n\t(SYNONYM KEY TREASURE)\n\t(ADJECTIVE DELICATE GOLD)\n\t(DESC \"delicate gold key\")\n\t(FLAGS STAGGERED NDESCBIT TAKEBIT TRYTAKEBIT)\n\t(ACTION UNICORN-FCN)\n\t(VALUE 15)\n\t(SIZE 3)>",
   "referencedBy": [
    "PDOOR-FCN",
    "I-UNICORN",
    "WIZ-DOOR-FCN",
    "RIPOFF",
    "RANDOMIZE-OBJECTS"
   ]
  },
  "RIBBON": {
   "name": "RIBBON",
   "file": "2dungeon.zil",
   "line": 2581,
   "endLine": 2587,
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
   "action": "UNICORN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT RIBBON\n\t(IN UNICORN)\n\t(SYNONYM RIBBON)\n\t(ADJECTIVE VELVET SATIN)\n\t(DESC \"ribbon\")\n\t(ACTION UNICORN-FCN)\n\t(FLAGS NDESCBIT)>",
   "referencedBy": []
  },
  "ROSE": {
   "name": "ROSE",
   "file": "2dungeon.zil",
   "line": 2589,
   "endLine": 2595,
   "desc": "perfect rose",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
   "flags": [
    "TAKEBIT"
   ],
   "synonyms": [
    "ROSE"
   ],
   "adjectives": [
    "BEAUTIFUL",
    "RED",
    "PERFECT"
   ],
   "action": "ROSE-F",
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
   "source": "<OBJECT ROSE\n\t(SYNONYM ROSE)\n\t(ADJECTIVE BEAUTIFUL RED PERFECT)\n\t(DESC \"perfect rose\")\n\t(FLAGS TAKEBIT)\n\t(SIZE 1)\n\t(ACTION ROSE-F)>",
   "referencedBy": [
    "I-UNICORN"
   ]
  },
  "GENIE": {
   "name": "GENIE",
   "file": "2dungeon.zil",
   "line": 2604,
   "endLine": 2609,
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
    "GENIE",
    "DJINN"
   ],
   "adjectives": [],
   "action": "GENIE-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GENIE\n\t(SYNONYM DEVIL DEMON GENIE DJINN)\n\t(DESC \"demon\")\n\t(FLAGS ACTORBIT INVISIBLE)\n\t(ACTION GENIE-FCN)\n\t(LDESC \"There is a demon floating in midair here.\")>",
   "referencedBy": [
    "DEAD-PALANTIR",
    "GENIE-FCN",
    "GENIE-LEAVES",
    "PENTAGRAM-FCN",
    "WIZARD-FCN",
    "I-WIZARD",
    "WIZARD-CASE-FCN"
   ]
  },
  "WIZARD": {
   "name": "WIZARD",
   "file": "2dungeon.zil",
   "line": 2611,
   "endLine": 2618,
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
    "MAGICIAN",
    "SORCEROR",
    "MAN"
   ],
   "adjectives": [
    "STRANGE",
    "LITTLE",
    "FROBOZZ",
    "OLD"
   ],
   "action": "WIZARD-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [
    "WAND"
   ],
   "source": "<OBJECT WIZARD\n\t(SYNONYM WIZARD MAGICIAN SORCEROR MAN)\n\t(ADJECTIVE STRANGE LITTLE FROBOZZ OLD)\n\t(DESC \"Wizard of Frobozz\")\n\t(LDESC\n\"The Wizard of Frobozz is here, eyeing you warily.\")\n\t(FLAGS ACTORBIT CONTBIT OPENBIT)\n\t(ACTION WIZARD-FCN)>",
   "referencedBy": [
    "PRINCESS-FCN",
    "GENIE-FCN",
    "WIZARD-FCN",
    "I-WIZARD",
    "WAND-FCN"
   ]
  },
  "WAND": {
   "name": "WAND",
   "file": "2dungeon.zil",
   "line": 2620,
   "endLine": 2627,
   "desc": "Wizard's magic wand",
   "ldesc": null,
   "fdesc": null,
   "loc": "WIZARD",
   "flags": [
    "STAGGERED",
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
   "action": "WAND-FCN",
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
   "source": "<OBJECT WAND\n\t(IN WIZARD)\n\t(SYNONYM WAND)\n\t(ADJECTIVE MAGIC)\n\t(DESC \"Wizard's magic wand\")\n\t(FLAGS STAGGERED NDESCBIT TAKEBIT TRYTAKEBIT)\n\t(ACTION WAND-FCN)\n\t(VALUE 30)>",
   "referencedBy": [
    "I-GNOME",
    "ZORK3-FCN",
    "I-ZGNOME",
    "CERBERUS-FCN",
    "GENIE-FCN",
    "WIZARD-FCN",
    "WAND-FCN"
   ]
  },
  "SWORD": {
   "name": "SWORD",
   "file": "2dungeon.zil",
   "line": 2629,
   "endLine": 2638,
   "desc": "elvish sword",
   "ldesc": "An Elvish sword of great antiquity is here.",
   "fdesc": "A sword of Elvish workmanship is on the ground.",
   "loc": "INSIDE-BARROW",
   "flags": [
    "TAKEBIT",
    "WEAPONBIT",
    "TRYTAKEBIT"
   ],
   "synonyms": [
    "SWORD",
    "ORCRIST",
    "GLAMDRING",
    "BLADE"
   ],
   "adjectives": [
    "ELVISH",
    "OLD",
    "ANTIQUE"
   ],
   "action": "SWORD-FCN",
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
   "source": "<OBJECT SWORD\n\t(IN INSIDE-BARROW)\n\t(SYNONYM SWORD ORCRIST GLAMDRING BLADE)\n\t(ADJECTIVE ELVISH OLD ANTIQUE)\n\t(DESC \"elvish sword\")\n\t(FLAGS TAKEBIT WEAPONBIT TRYTAKEBIT)\n\t(ACTION SWORD-FCN)\n\t(LDESC \"An Elvish sword of great antiquity is here.\")\n\t(FDESC \"A sword of Elvish workmanship is on the ground.\")\n\t(SIZE 30)>",
   "referencedBy": [
    "I-SWORD",
    "GENIE-FCN",
    "FIND-WEAPON"
   ]
  },
  "REPELLENT": {
   "name": "REPELLENT",
   "file": "2dungeon.zil",
   "line": 2640,
   "endLine": 2656,
   "desc": "Frobozz Magic Grue Repellent",
   "ldesc": null,
   "fdesc": "A spray can is in the corner. In large type is the legend \"Frobozz Magic\nGrue Repellent\".",
   "loc": "ROOM-8",
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
   "action": "REPELLENT-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {
    "TEXT": [
     "!!! FROBOZZ MAGIC GRUE REPELLENT !!!|\n|\nInstructions for use: Apply liberally to creature to be protected.\nDuration of effect is unpredictable. Use only in place of death!|\n|\n(No warranty expressed or implied)"
    ]
   },
   "contents": [],
   "source": "<OBJECT REPELLENT\n\t(IN ROOM-8)\n\t(SYNONYM REPELLENT CAN)\n\t(ADJECTIVE GRUE MAGIC)\n\t(DESC \"Frobozz Magic Grue Repellent\")\n\t(FLAGS TAKEBIT READBIT)\n\t(ACTION REPELLENT-FCN)\n\t(FDESC\n\"A spray can is in the corner. In large type is the legend \\\"Frobozz Magic\nGrue Repellent\\\".\")\n\t(TEXT\n\"!!! FROBOZZ MAGIC GRUE REPELLENT !!!|\n|\nInstructions for use: Apply liberally to creature to be protected.\nDuration of effect is unpredictable. Use only in place of death!|\n|\n(No warranty expressed or implied)\")>",
   "referencedBy": [
    "REPELLENT-FCN"
   ]
  },
  "GLOBAL-PALANTIR": {
   "name": "GLOBAL-PALANTIR",
   "file": "2dungeon.zil",
   "line": 2692,
   "endLine": 2698,
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
   "action": "GLOBAL-PALANTIRS",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GLOBAL-PALANTIR\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM SPHERE)\n\t(ADJECTIVE RED BLUE WHITE CRYSTAL)\n\t(DESC \"sphere\")\n\t(FLAGS NDESCBIT)\n\t(ACTION GLOBAL-PALANTIRS)>",
   "referencedBy": []
  },
  "FOOTPAD": {
   "name": "FOOTPAD",
   "file": "2dungeon.zil",
   "line": 2700,
   "endLine": 2704,
   "desc": "footpad",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "FOOTPAD"
   ],
   "adjectives": [],
   "action": "FOOTPAD-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT FOOTPAD\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM FOOTPAD)\n\t(DESC \"footpad\")\n\t(ACTION FOOTPAD-F)>",
   "referencedBy": []
  },
  "COMPASS": {
   "name": "COMPASS",
   "file": "2dungeon.zil",
   "line": 2710,
   "endLine": 2714,
   "desc": "compass",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "COMPASS"
   ],
   "adjectives": [],
   "action": "COMPASS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT COMPASS\n\t(IN GLOBAL-OBJECTS)\n\t(DESC \"compass\")\n\t(SYNONYM COMPASS)\n\t(ACTION COMPASS-F)>",
   "referencedBy": []
  },
  "GLOBAL-OBJECTS": {
   "name": "GLOBAL-OBJECTS",
   "file": "gglobals.zil",
   "line": 7,
   "endLine": 10,
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
    "OPENBIT",
    "SEARCHBIT",
    "TRANSBIT",
    "ONBIT",
    "RLANDBIT",
    "FIGHTBIT",
    "STAGGERED",
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
    "TUNNEL",
    "EAST-WALL",
    "SOUTH-WALL",
    "WEST-WALL",
    "NORTH-WALL",
    "WISH",
    "GLOBAL-PRINCESS",
    "FOOTPAD",
    "COMPASS",
    "LOCAL-GLOBALS",
    "INTNUM",
    "IT",
    "BLESSINGS",
    "SAILOR",
    "GROUND",
    "GRUE",
    "LUNGS",
    "ME",
    "PATHOBJ",
    "ZORKMID",
    "HANDS"
   ],
   "source": "<OBJECT GLOBAL-OBJECTS\n\t(FLAGS RMUNGBIT INVISIBLE TOUCHBIT SURFACEBIT TRYTAKEBIT\n\t       OPENBIT SEARCHBIT TRANSBIT ONBIT RLANDBIT FIGHTBIT\n\t       STAGGERED WEARBIT)>",
   "referencedBy": [
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "META-LOC",
    "V-EAT",
    "V-FIND",
    "HACK-HACK"
   ]
  },
  "LOCAL-GLOBALS": {
   "name": "LOCAL-GLOBALS",
   "file": "gglobals.zil",
   "line": 12,
   "endLine": 24,
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
   "descfcn": "PATH-OBJECT",
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
    "VTYPE": [
     "1"
    ],
    "SIZE": [
     "0"
    ],
    "CAPACITY": [
     "0"
    ]
   },
   "contents": [
    "STREAM",
    "CHASM",
    "MOSS",
    "ROSE-BUSH",
    "BRIDGE",
    "GLOBAL-WATER",
    "WELL",
    "SEWL",
    "SWWL",
    "SSWL",
    "SNWL",
    "GLOBAL-UNICORN",
    "WIZ-DOOR",
    "GLOBAL-MENHIR",
    "MENHIR",
    "DWINDOW",
    "GLOBAL-CERBERUS",
    "CRYPT-DOOR",
    "DIM-DOOR",
    "GLOBAL-WIZARD-CASE",
    "PDOOR",
    "PWINDOW",
    "GAZEBO",
    "GLOBAL-PALANTIR",
    "PSEUDO-OBJECT",
    "STAIRS"
   ],
   "source": "<OBJECT LOCAL-GLOBALS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZZMGCK)\n\t(DESCFCN PATH-OBJECT)\n        (GLOBAL GLOBAL-OBJECTS)\n\t(ADVFCN 0)\n\t(FDESC \"F\")\n\t(LDESC \"F\")\n\t(PSEUDO \"FOOBAR\" V-WALK)\n\t(CONTFCN 0)\n\t(VTYPE 1)\n\t(SIZE 0)\n\t(CAPACITY 0)>",
   "referencedBy": [
    "MENHIR-ROOM-FCN",
    "ACCESSIBLE?"
   ]
  },
  "ROOMS": {
   "name": "ROOMS",
   "file": "gglobals.zil",
   "line": 28,
   "endLine": 29,
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
    "I-FUSE",
    "ROOM?",
    "GWIM",
    "GLOBAL-CHECK",
    "META-LOC",
    "V-CLIMB-UP",
    "V-DISEMBARK",
    "V-EXIT",
    "PRE-TURN",
    "DESCRIBE-ROOM",
    "FIRSTER"
   ]
  },
  "INTNUM": {
   "name": "INTNUM",
   "file": "gglobals.zil",
   "line": 31,
   "endLine": 35,
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
   "source": "<OBJECT INTNUM\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM INTNUM)\n\t(FLAGS TOOLBIT)\n\t(DESC \"number\")>",
   "referencedBy": [
    "V-RANDOM"
   ]
  },
  "PSEUDO-OBJECT": {
   "name": "PSEUDO-OBJECT",
   "file": "gglobals.zil",
   "line": 37,
   "endLine": 40,
   "desc": "pseudo",
   "ldesc": null,
   "fdesc": null,
   "loc": "LOCAL-GLOBALS",
   "flags": [],
   "synonyms": [],
   "adjectives": [],
   "action": "CRETIN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PSEUDO-OBJECT\n\t(IN LOCAL-GLOBALS)\n\t(DESC \"pseudo\")\n\t(ACTION CRETIN-FCN)>",
   "referencedBy": [
    "CHASM-FCN",
    "ALICE-HOLE",
    "GLOBAL-CHECK",
    "ACCESSIBLE?",
    "V-EAT",
    "V-FIND",
    "SHAKE-LOOP"
   ]
  },
  "IT": {
   "name": "IT",
   "file": "gglobals.zil",
   "line": 42,
   "endLine": 46,
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
   "source": "<OBJECT IT\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM IT THEM HER HIM)\n\t(DESC \"random object\")\n\t(FLAGS NDESCBIT TOUCHBIT)>",
   "referencedBy": [
    "MAIN-LOOP-1",
    "ITAKE-CHECK"
   ]
  },
  "NOT-HERE-OBJECT": {
   "name": "NOT-HERE-OBJECT",
   "file": "gglobals.zil",
   "line": 48,
   "endLine": 50,
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
    "MAIN-LOOP-1",
    "GET-OBJECT",
    "ITAKE-CHECK"
   ]
  },
  "BLESSINGS": {
   "name": "BLESSINGS",
   "file": "gglobals.zil",
   "line": 129,
   "endLine": 133,
   "desc": "blessings",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "BLESSINGS",
    "GRACES"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT BLESSINGS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM BLESSINGS GRACES)\n\t(DESC \"blessings\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "V-COUNT"
   ]
  },
  "STAIRS": {
   "name": "STAIRS",
   "file": "gglobals.zil",
   "line": 135,
   "endLine": 141,
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
    "STAIRCASE",
    "STAIRWAY"
   ],
   "adjectives": [
    "STONE",
    "DARK",
    "MARBLE",
    "FORBIDDING",
    "STEEP"
   ],
   "action": "STAIRS-F",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT STAIRS\n\t(IN LOCAL-GLOBALS)\n\t(SYNONYM STAIRS STEPS STAIRCASE STAIRWAY)\n\t(ADJECTIVE STONE DARK MARBLE FORBIDDING STEEP)\n\t(DESC \"stairs\")\n\t(FLAGS NDESCBIT CLIMBBIT)\n\t(ACTION STAIRS-F)>",
   "referencedBy": [
    "V-CLIMB-UP"
   ]
  },
  "SAILOR": {
   "name": "SAILOR",
   "file": "gglobals.zil",
   "line": 148,
   "endLine": 153,
   "desc": "sailor",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "SAILOR",
    "FOOTPAD",
    "AVIATOR"
   ],
   "adjectives": [],
   "action": "SAILOR-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT SAILOR\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM SAILOR FOOTPAD AVIATOR)\n\t(DESC \"sailor\")\n\t(FLAGS NDESCBIT)\n\t(ACTION SAILOR-FCN)>",
   "referencedBy": []
  },
  "GROUND": {
   "name": "GROUND",
   "file": "gglobals.zil",
   "line": 197,
   "endLine": 201,
   "desc": "ground",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "GROUND",
    "SAND",
    "DIRT",
    "FLOOR"
   ],
   "adjectives": [],
   "action": "GROUND-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT GROUND\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM GROUND SAND DIRT FLOOR)\n\t(DESC \"ground\")\n\t(ACTION GROUND-FUNCTION)>",
   "referencedBy": [
    "GROUND-FUNCTION",
    "V-PUT-ON",
    "PRE-TAKE"
   ]
  },
  "GRUE": {
   "name": "GRUE",
   "file": "gglobals.zil",
   "line": 217,
   "endLine": 222,
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
   "referencedBy": [
    "WAND-FCN"
   ]
  },
  "LUNGS": {
   "name": "LUNGS",
   "file": "gglobals.zil",
   "line": 241,
   "endLine": 245,
   "desc": "blast of air",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "LUNGS",
    "AIR",
    "MOUTH",
    "BREATH"
   ],
   "adjectives": [],
   "action": null,
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT LUNGS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM LUNGS AIR MOUTH BREATH)\n\t(DESC \"blast of air\")\n\t(FLAGS NDESCBIT)>",
   "referencedBy": [
    "V-BREATHE",
    "V-FIND"
   ]
  },
  "ME": {
   "name": "ME",
   "file": "gglobals.zil",
   "line": 247,
   "endLine": 252,
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
    "CRETIN"
   ],
   "adjectives": [],
   "action": "CRETIN-FCN",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ME\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ME MYSELF SELF CRETIN)\n\t(DESC \"you\")\n\t(FLAGS ACTORBIT)\n\t(ACTION CRETIN-FCN)>",
   "referencedBy": [
    "REPELLENT-FCN",
    "GENIE-FCN",
    "WAND-FCN",
    "CHASM-FCN",
    "CRETIN-FCN",
    "BUFFER-PRINT",
    "ITAKE-CHECK",
    "V-FIND",
    "V-THROW"
   ]
  },
  "ADVENTURER": {
   "name": "ADVENTURER",
   "file": "gglobals.zil",
   "line": 300,
   "endLine": 305,
   "desc": "cretin",
   "ldesc": null,
   "fdesc": null,
   "loc": null,
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
   "source": "<OBJECT ADVENTURER\n\t(SYNONYM ADVENTURER)\n\t(DESC \"cretin\")\n\t(FLAGS NDESCBIT INVISIBLE SACREDBIT ACTORBIT)\n\t(STRENGTH 0)\n\t(ACTION 0)>",
   "referencedBy": [
    "SWORD-FCN",
    "I-SWORD",
    "EATME-FCN",
    "CAKE-FCN",
    "MAGNET-ROOM-FCN",
    "MAGNET-ROOM-EXIT",
    "BUTTONS",
    "SPHERE-FCN",
    "ROBOT-FCN",
    "RANDOM-WALK",
    "FORCE-FIGHT",
    "GENIE-FCN",
    "WIZARD-FCN",
    "I-WIZARD",
    "WAND-FCN",
    "JIGS-UP",
    "GO",
    "ITAKE-CHECK",
    "V-WALK",
    "PRINT-CONT",
    "GOTO",
    "FIND-IN"
   ]
  },
  "PATHOBJ": {
   "name": "PATHOBJ",
   "file": "gglobals.zil",
   "line": 307,
   "endLine": 313,
   "desc": "passage",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [
    "NDESCBIT"
   ],
   "synonyms": [
    "TRAIL",
    "PATH"
   ],
   "adjectives": [
    "FOREST",
    "NARROW",
    "LONG",
    "WINDING"
   ],
   "action": "PATH-OBJECT",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT PATHOBJ\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM TRAIL PATH)\n        (ADJECTIVE FOREST NARROW LONG WINDING)\n\t(DESC \"passage\")\n\t(FLAGS NDESCBIT)\n\t(ACTION PATH-OBJECT)>",
   "referencedBy": []
  },
  "ZORKMID": {
   "name": "ZORKMID",
   "file": "gglobals.zil",
   "line": 323,
   "endLine": 327,
   "desc": "zorkmid",
   "ldesc": null,
   "fdesc": null,
   "loc": "GLOBAL-OBJECTS",
   "flags": [],
   "synonyms": [
    "ZORKMID"
   ],
   "adjectives": [],
   "action": "ZORKMID-FUNCTION",
   "descfcn": null,
   "contfcn": null,
   "globals": [],
   "pseudo": [],
   "otherProps": {},
   "contents": [],
   "source": "<OBJECT ZORKMID\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM ZORKMID)\n\t(DESC \"zorkmid\")\n\t(ACTION ZORKMID-FUNCTION)>",
   "referencedBy": []
  },
  "HANDS": {
   "name": "HANDS",
   "file": "gglobals.zil",
   "line": 337,
   "endLine": 342,
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
   "source": "<OBJECT HANDS\n\t(IN GLOBAL-OBJECTS)\n\t(SYNONYM PAIR HANDS HAND)\n\t(ADJECTIVE BARE)\n\t(DESC \"pair of hands\")\n\t(FLAGS NDESCBIT TOOLBIT)>",
   "referencedBy": [
    "FORCE-FIGHT",
    "GWIM",
    "ITAKE-CHECK",
    "V-ATTACK",
    "V-DIG",
    "V-FIND"
   ]
  }
 },
 "routines": {
  "SWORD-FCN": {
   "name": "SWORD-FCN",
   "file": "2actions.zil",
   "line": 5,
   "endLine": 9,
   "source": "<ROUTINE SWORD-FCN ()\n\t <COND (<AND <VERB? TAKE>\n\t\t     <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t<ENABLE <QUEUE I-SWORD -1>>\n\t\t<RFALSE>)>>"
  },
  "I-SWORD": {
   "name": "I-SWORD",
   "file": "2actions.zil",
   "line": 15,
   "endLine": 43,
   "source": "<ROUTINE I-SWORD (\"AUX\" (DEM <INT I-SWORD>) (NG 0) G P TX L)\n\t <SET G ,SWORD-GLOW>\n\t <COND (<IN? ,SWORD ,ADVENTURER>\n\t\t<COND (<INFESTED? ,HERE> <SET NG 2>)\n\t\t      (T\n\t\t       <SET P 0>\n\t\t       <REPEAT ()\n\t\t\t       <COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t\t      <RETURN>)\n\t\t\t\t     (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t\t      <SET TX <GETPT ,HERE .P>>\n\t\t\t\t      <SET L <PTSIZE .TX>>\n\t\t\t\t      <COND (<EQUAL? .L ,UEXIT ,CEXIT ,DEXIT>\n\t\t\t\t\t     <COND (<INFESTED? <GETB .TX 0>>\n\t\t\t\t\t\t    <SET NG 1>\n\t\t\t\t\t\t    <RETURN>)>)>)>>)>\n\t\t<COND (<EQUAL? .NG .G> <RFALSE>)\n\t\t      (<EQUAL? .NG 2>\n\t\t       <TELL \"Your sword has begun to glow very brightly.\" CR>)\n\t\t      (<1? .NG>\n\t\t       <TELL \"Your sword is glowing with a faint blue glow.\"\n\t\t\t     CR>)\n\t\t      (<0? .NG>\n\t\t       <TELL \"Your sword is no longer glowing.\" CR>)>\n\t\t<SETG SWORD-GLOW .NG>\n\t\t<RTRUE>)\n\t       (T\n\t\t<PUT .DEM ,C-ENABLED? 0>\n\t\t<RFALSE>)>>"
  },
  "INFESTED?": {
   "name": "INFESTED?",
   "file": "2actions.zil",
   "line": 45,
   "endLine": 52,
   "source": "<ROUTINE INFESTED? (R \"AUX\" (F <FIRST? .R>))\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RFALSE>)\n\t\t       (<AND <FSET? .F ,ACTORBIT>\n\t\t\t     <NOT <FSET? .F ,INVISIBLE>>\n\t\t\t     <NOT <EQUAL? .F ,ROBOT>>>\n\t\t\t<RETURN .F>)\n\t\t       (<NOT <SET F <NEXT? .F>>> <RFALSE>)>>>"
  },
  "CAROUSEL-ROOM-FCN": {
   "name": "CAROUSEL-ROOM-FCN",
   "file": "2actions.zil",
   "line": 54,
   "endLine": 80,
   "source": "<ROUTINE CAROUSEL-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a large circular room whose high ceiling is lost in gloom. Eight\nidentical passages leave the room.\" CR>\n\t\t<COND (<NOT ,CAROUSEL-FLIP-FLAG>\n\t\t       <TELL\n\"A loud whirring sound comes from all around, and you feel\nsort of disoriented in here.\" CR>)>\n\t\t<RTRUE>)\n\t       (<AND <NOT ,CAROUSEL-FLIP-FLAG>\n\t\t     <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? WALK>>\n\t\t<COND (<EQUAL? ,PRSO ,P?UP ,P?DOWN>\n\t\t       <RFALSE>)>\n\t\t<COND (<EQUAL? ,PRSO ,P?OUT>\n\t\t       <TELL\n\"Feeling dizzy, you pick a direction at random.\" CR CR>\n\t\t       <SETG PRSO ,P?EAST>)\n\t\t      (T\n\t\t       <TELL\n\"You're not sure which direction is which. This\nroom is very disorienting.\" CR CR>)>\n\t\t<COND (<OR <EQUAL? ,PRSO ,P?WEST> <PROB 80>>\n\t\t       <SETG PRSO <GET ,EIGHT-DIRECTIONS <- <RANDOM 7> 1>>>)>\n\t\t<V-WALK>\n\t\t<RTRUE>)>>"
  },
  "VIOLIN-FCN": {
   "name": "VIOLIN-FCN",
   "file": "2actions.zil",
   "line": 82,
   "endLine": 86,
   "source": "<ROUTINE VIOLIN-FCN ()\n\t <COND (<AND <VERB? PLAY>\n\t\t     <EQUAL? ,PRSO ,VIOLIN>>\n\t        <TELL\n\"An amazingly offensive noise issues from the violin.\" CR>)>>"
  },
  "OPEN-CLOSE": {
   "name": "OPEN-CLOSE",
   "file": "2actions.zil",
   "line": 93,
   "endLine": 108,
   "source": "<ROUTINE OPEN-CLOSE (OBJ STROPN STRCLS)\n\t #DECL ((OBJ) OBJECT (STROPN STRCLS) STRING)\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL <RANDOM-ELEMENT ,DUMMY>>)\n\t\t      (T\n\t\t       <TELL .STROPN>\n\t\t       <FSET .OBJ ,OPENBIT>)>\n\t\t<CRLF>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? .OBJ ,OPENBIT>\n\t\t       <TELL .STRCLS>\n\t\t       <FCLEAR .OBJ ,OPENBIT>\n\t\t       T)\n\t\t      (T <TELL <RANDOM-ELEMENT ,DUMMY> CR>)>\n\t\t<CRLF>)>>"
  },
  "BALLOON-FCN": {
   "name": "BALLOON-FCN",
   "file": "2actions.zil",
   "line": 117,
   "endLine": 217,
   "source": "<ROUTINE BALLOON-FCN (\"OPTIONAL\" (RARG <>) \"AUX\" M R RC)\n\t #DECL ((RARG) <OR FIX FALSE> (M) <OR FALSE TABLE> (R) OBJECT)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<COND (,BINF-FLAG\n\t\t       <TELL \"The cloth bag is inflated and \">\n\t\t       <COND (<FSET? ,RECEPTACLE ,OPENBIT>\n\t\t\t      <TELL\n\"there is a \" D ,BINF-FLAG \" burning in the receptacle.\">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"some smoke is leaking out of the closed receptacle.\">)>)\n\t\t      (T\n\t\t       <TELL \"The cloth bag is draped over the side\nof the basket. Directly in the middle of the basket is a metal receptacle\nwhich is \">\n\t\t       <COND (<FSET? ,RECEPTACLE ,OPENBIT>\n\t\t\t      <TELL \"open\">\n\t\t\t      <SET RC <FIRST? ,RECEPTACLE>>\n\t\t\t      <COND (.RC\n\t\t\t\t     <TELL \". A \"\n\t\t\t\t\t   D .RC\n\t\t\t\t\t   \" is \"\n\t\t\t\t\t   <COND (<EQUAL? ,BINF-FLAG .RC>\n\t\t\t\t\t\t  \"burning\")\n\t\t\t\t\t\t (T\n\t\t\t\t\t\t  \"nestled\")>\n\t\t\t\t\t   \" inside\">)>)\n\t\t\t     (T <TELL \"closed\">)>\n\t\t       <TELL \".\">)>\n\t\t<COND (,BTIE-FLAG\n\t\t       <TELL\n\" The balloon is tied to a hook by the braided wire.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\" A braided wire is dangling over the side of the basket.\" CR>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-OBJDESC>\n\t\t<TELL\n\"There is a large and extremely heavy wicker basket here. An\nenormous cloth bag \">\n\t\t<COND (,BINF-FLAG\n\t\t       <TELL\n\"attached to the basket is inflated. A metal receptacle is fastened to\nthe center of the basket. \">\n\t\t       <COND (<FSET? ,RECEPTACLE ,OPENBIT>\n\t\t\t      <TELL \"In it is a burning \" D ,BINF-FLAG>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"Some smoke leaks out around its closed lid\">)>)\n\t\t      (T\n\t\t       <TELL\n\"is draped over the side and is firmly attached to the basket. A metal\nreceptacle is fastened to the center of the basket\">)>\n\t\t<COND (,BTIE-FLAG\n\t\t       <TELL\n\". A piece of wire tied to a hook holds the balloon in place.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\". Dangling from the basket is a piece of braided wire.\" CR>)>)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? WALK>\n\t\t       <COND (<SET M <GETPT ,HERE ,PRSO>>\n\t\t\t      <COND (,BTIE-FLAG\n\t\t\t\t     <TELL \"You are tied to the ledge.\" CR>\n\t\t\t\t     <RTRUE>)\n\t\t\t\t    (T\n\t\t\t\t     <AND <EQUAL? <PTSIZE .M> 1>\n\t\t\t\t\t  <NOT <FSET? <SET R <GETB .M 0>>\n\t\t\t\t\t\t      ,RMUNGBIT>>\n\t\t\t\t\t  <SETG BLOC .R>>\n\t\t\t\t     <ENABLE <QUEUE I-BALLOON 3>>\n\t\t\t\t     <RFALSE>)>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You can't control the balloon this way.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <VERB? OPEN>\n\t\t\t    ,BINF-FLAG\n\t\t\t    <EQUAL? ,PRSO ,RECEPTACLE>\n\t\t\t    <FIRST? ,RECEPTACLE>>\n\t\t       <TELL \"Opening it reveals a burning \"\n\t\t\t     D ,BINF-FLAG \".\" CR>\n\t\t       <FSET ,RECEPTACLE ,OPENBIT>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? TAKE>\n\t\t\t    <EQUAL? ,BINF-FLAG ,PRSO>>\n\t\t       <TELL \"You don't really want to hold a burning \"\n\t\t\t     D ,PRSO \".\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? PUT>\n\t\t\t    <EQUAL? ,PRSI ,RECEPTACLE>\n\t\t\t    <FIRST? ,RECEPTACLE>>\n\t\t       <TELL \"The receptacle is already occupied.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <VERB? PUT>\n\t\t\t    <EQUAL? ,PRSI ,RECEPTACLE>>\n\t\t       <FSET ,PRSO ,NDESCBIT>\n\t\t       <RFALSE>)\n\t\t      (<VERB? INFLATE>\n\t\t       <TELL\n\"It takes more than words to inflate a balloon.\" CR>)>)>>"
  },
  "I-BALLOON": {
   "name": "I-BALLOON",
   "file": "2actions.zil",
   "line": 219,
   "endLine": 225,
   "source": "<ROUTINE I-BALLOON ()\n\t <COND (<AND <FSET? ,RECEPTACLE ,OPENBIT> ,BINF-FLAG>\n\t\t<RISE-AND-SHINE>)\n\t       (<EQUAL? ,HERE ,LEDGE-1 ,LEDGE-2>\n\t\t<RISE-AND-SHINE>)\n\t       (T\n\t\t<DECLINE-AND-FALL>)>>"
  },
  "BALLOON-BURN": {
   "name": "BALLOON-BURN",
   "file": "2actions.zil",
   "line": 227,
   "endLine": 244,
   "source": "<ROUTINE BALLOON-BURN ()\n \t<TELL \"The \" D ,PRSO \" burns inside the receptacle.\" CR>\n\t<ENABLE <QUEUE I-BURNUP <* <GETP ,PRSO ,P?SIZE> 20>>>\n\t<FSET ,PRSO ,FLAMEBIT>\n\t<FSET ,PRSO ,ONBIT>\n\t<FCLEAR ,PRSO ,TAKEBIT>\n\t<FCLEAR ,PRSO ,READBIT>\n\t<COND (,BINF-FLAG <RTRUE>)\n\t      (T\n\t       <TELL\n\t\t\"The cloth bag inflates as it fills with hot air.\" CR>\n\t       <COND (<NOT ,BLAB-FLAG>\n\t\t      <TELL\n\"A small label drops from the bag into the basket.\" CR>\n\t\t      <MOVE ,BALLOON-LABEL ,BALLOON>)>\n\t       <SETG BLAB-FLAG T>\n\t       <SETG BINF-FLAG ,PRSO>\n\t       <ENABLE <QUEUE I-BALLOON 3>>)>>"
  },
  "PUT-BALLOON": {
   "name": "PUT-BALLOON",
   "file": "2actions.zil",
   "line": 246,
   "endLine": 251,
   "source": "<ROUTINE PUT-BALLOON (THERE STR)\n\t#DECL ((THERE) OBJECT (STR) STRING)\n\t<COND (<EQUAL? ,HERE ,LEDGE-1 ,LEDGE-2 ,VOLCANO-BOTTOM>\n\t       <TELL \"You watch as the balloon slowly \" .STR CR>)>\n\t<MOVE ,BALLOON .THERE>\n\t<SETG BLOC .THERE>>"
  },
  "RISE-AND-SHINE": {
   "name": "RISE-AND-SHINE",
   "file": "2actions.zil",
   "line": 262,
   "endLine": 302,
   "source": "<ROUTINE RISE-AND-SHINE (\"AUX\" (IN <IN? ,WINNER ,BALLOON>) R)\n\t#DECL ((IN) <OR ATOM FALSE> (R) <OR FALSE OBJECT>)\n\t<ENABLE <QUEUE I-BALLOON 3>>\n\t<COND (<EQUAL? ,BLOC ,VAIR-4>\n\t       <DISABLE <INT I-BURNUP>>\n\t       <DISABLE <INT I-BALLOON>>\n\t       <REMOVE ,BALLOON>\n\t       <COND (.IN\n\t\t      <JIGS-UP\n\"The balloon floats majestically out of the volcano, revealing a\nbreathtaking view of a wooded river valley surrounded by impassable\nmountains. In a clearing stands a white house. You drift into high winds,\nwhich carry you towards the snow-capped peaks. Oh, no! You crash into the\njagged cliffs of the Flathead Mountains!\">)\n\t\t     (<EQUAL? ,HERE ,LEDGE-1 ,LEDGE-2 ,VOLCANO-BOTTOM>\n\t\t      <TELL\n\"You watch the balloon drift out over the rim and away on the wind.\" CR>)>\n\t       <SETG BLOC ,VOLCANO-BOTTOM>)\n\t      (<SET R <LKP ,BLOC ,BALLOON-UPS>>\n\t       <COND (.IN\n\t\t      <TELL \"The balloon ascends.\" CR CR>\n\t\t      <SETG BLOC .R>\n\t\t      <GOTO .R>)\n\t\t     (T\n\t\t      <PUT-BALLOON .R \"ascends.\">)>)\n\t      (<SET R <LKP ,BLOC ,BALLOON-FLOATS>>\n\t       <COND (.IN\n\t\t      <TELL \"The balloon leaves the ledge.\" CR CR>\n\t\t      <SETG BLOC .R>\n\t\t      <GOTO .R>)\n\t\t     (T\n\t\t      <ENABLE <QUEUE I-GNOME 10>>\n\t\t      <PUT-BALLOON .R\n\"floats away. It seems to be ascending, due to its light load.\">\n\t\t      <FSET ,RECEPTACLE ,OPENBIT>)>)\n\t      (.IN\n\t       <SETG BLOC ,VAIR-1>\n\t       <TELL \"The balloon rises slowly from the ground.\" CR CR>\n\t       <GOTO ,VAIR-1>)\n\t      (T\n\t       <PUT-BALLOON ,VAIR-1 \"lifts off.\">)>>"
  },
  "DECLINE-AND-FALL": {
   "name": "DECLINE-AND-FALL",
   "file": "2actions.zil",
   "line": 304,
   "endLine": 329,
   "source": "<ROUTINE DECLINE-AND-FALL (\"AUX\" (IN <IN? ,WINNER ,BALLOON>) R)\n    #DECL ((IN) <OR ATOM FALSE> (R) <OR FALSE OBJECT>)\n    <ENABLE <QUEUE I-BALLOON 3>>\n    <COND (<EQUAL? ,BLOC ,VAIR-1>\n\t   <COND (.IN\n\t\t  <SETG BLOC ,VOLCANO-BOTTOM>\n\t\t  <COND (,BINF-FLAG\n\t\t\t <TELL \"The balloon has landed.\" CR CR>\n\t\t\t <GOTO ,VOLCANO-BOTTOM>\n\t\t\t ;<QUEUE I-BALLOON 0>)\n\t\t\t(T\n\t\t\t <REMOVE ,BALLOON>\n\t\t\t <MOVE ,DEAD-BALLOON ,BLOC>\n\t\t\t <MOVE ,WINNER ,HERE>\n\t\t\t <DISABLE <INT I-BALLOON>>\n\t\t\t <TELL\n\t\t\t  \"You have landed, but the balloon did not survive.\"\n\t\t\t  CR CR>\n\t\t\t <GOTO ,VOLCANO-BOTTOM>)>)\n\t\t (T <PUT-BALLOON ,VOLCANO-BOTTOM \"lands.\">)>)\n\t   (<SET R <LKP ,BLOC ,BALLOON-DOWNS>>\n\t    <COND (.IN\n\t\t   <TELL \"The balloon descends.\" CR CR>\n\t\t   <SETG BLOC .R>\n\t\t   <GOTO .R>)\n\t\t  (T <PUT-BALLOON .R \"descends.\">)>)>>"
  },
  "BCONTENTS": {
   "name": "BCONTENTS",
   "file": "2actions.zil",
   "line": 331,
   "endLine": 354,
   "source": "<ROUTINE BCONTENTS ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"The \" D ,PRSO \" is an integral part of the basket and cannot\nbe removed.\">\n\t\t<COND (<EQUAL? ,PRSO ,BRAIDED-WIRE>\n\t\t       <TELL \" The wire might possibly be tied, though.\">)>\n\t\t<CRLF>)\n\t       (<AND <EQUAL? ,PRSO ,CLOTH-BAG>\n\t\t     <VERB? LOOK-INSIDE OPEN>>\n\t\t<COND (<VERB? OPEN>\n\t\t       <TELL\n\"The bag is enormous. The concept of opening it here is ludicrous.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It doesn't appear that there's anything inside.\" CR>)>)\n\t       (<AND <VERB? EXAMINE> <EQUAL? ,PRSO ,RECEPTACLE>>\n\t\t<TELL \"The receptacle is \">\n\t\t<COND (<FSET? ,PRSO ,OPENBIT> <TELL \"open.\" CR>)\n\t\t      (T <TELL \"closed.\" CR>)>)\n\t       (<VERB? FIND EXAMINE>\n\t        <TELL\n\"The \" D ,PRSO \" is part of the basket. It may be manipulated\nwithin the basket but cannot be removed.\" CR>)>>"
  },
  "WIRE-FCN": {
   "name": "WIRE-FCN",
   "file": "2actions.zil",
   "line": 356,
   "endLine": 373,
   "source": "<ROUTINE WIRE-FCN ()\n        <COND (<VERB? TAKE FIND EXAMINE>\n\t       <BCONTENTS>)\n\t      (<VERB? TIE>\n\t       <COND (<AND <EQUAL? ,PRSO ,BRAIDED-WIRE>\n\t\t\t   <EQUAL? ,PRSI ,HOOK-1 ,HOOK-2>>\n\t\t      <SETG BTIE-FLAG ,PRSI>\n\t\t      <FSET ,PRSI ,NDESCBIT>\n\t\t      <DISABLE <INT I-BALLOON>>\n\t\t      <TELL \"The balloon is fastened to the hook.\" CR>)>)\n\t      (<AND <VERB? UNTIE>\n\t            <EQUAL? ,PRSO ,BRAIDED-WIRE>>\n\t       <COND (,BTIE-FLAG\n\t\t      <ENABLE <QUEUE I-BALLOON 3>>\n\t       \t      <FCLEAR ,BTIE-FLAG ,NDESCBIT>\n\t\t      <SETG BTIE-FLAG <>>\n\t              <TELL \"The wire falls off of the hook.\" CR>)\n\t\t     (T <TELL \"The wire is not tied to anything.\" CR>)>)>>"
  },
  "I-BURNUP": {
   "name": "I-BURNUP",
   "file": "2actions.zil",
   "line": 375,
   "endLine": 382,
   "source": "<ROUTINE I-BURNUP (\"AUX\" (OBJ <FIRST? ,RECEPTACLE>))\n    #DECL ((OBJ) OBJECT)\n    <COND (<EQUAL? ,HERE ,BLOC>\n\t   <TELL\n\"The \" D .OBJ \" has now burned out, and the cloth bag starts to deflate.\" CR>)>\n    <REMOVE .OBJ>\n    <SETG BINF-FLAG <>>\n    T>"
  },
  "SAFE-ROOM-FCN": {
   "name": "SAFE-ROOM-FCN",
   "file": "2actions.zil",
   "line": 384,
   "endLine": 395,
   "source": "<ROUTINE SAFE-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are in a dusty old room which is featureless, except\nfor an exit on the north side.\" CR>\n\t\t<COND (<NOT ,SAFE-FLAG>\n\t\t       <TELL\n\"Imbedded in the far wall is a rusty box. It appears to be somewhat\ndamaged, since an oblong hole has been chipped out of the front of it.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"On the far wall is a rusty box, whose door has been blown off.\" CR>)>)>>"
  },
  "SAFE-FCN": {
   "name": "SAFE-FCN",
   "file": "2actions.zil",
   "line": 397,
   "endLine": 405,
   "source": "<ROUTINE SAFE-FCN ()\n\t<COND (<AND <VERB? TAKE> <EQUAL? ,PRSO ,SAFE>>\n\t       <TELL \"The box is imbedded in the wall.\" CR>)\n\t      (<VERB? OPEN>\n\t       <COND (,SAFE-FLAG <TELL \"The box has no door!\" CR>)\n\t\t     (T <TELL \"The box is rusted and will not open.\" CR>)>)\n\t      (<VERB? CLOSE>\n\t       <COND (,SAFE-FLAG <TELL \"The box has no door!\" CR>)\n\t\t     (T <TELL \"The box isn't open!\" CR>)>)>>"
  },
  "BRICK-FCN": {
   "name": "BRICK-FCN",
   "file": "2actions.zil",
   "line": 407,
   "endLine": 410,
   "source": "<ROUTINE BRICK-FCN ()\n\t <COND (<VERB? BURN>\n\t\t<REMOVE ,BRICK>\n\t\t<JIGS-UP ,OTHER-PROPERTIES>)>>"
  },
  "FUSE-FCN": {
   "name": "FUSE-FCN",
   "file": "2actions.zil",
   "line": 416,
   "endLine": 422,
   "source": "<ROUTINE FUSE-FCN ()\n\t<COND (<OR <VERB? BURN>\n\t\t   <AND <VERB? LAMP-ON>\n\t\t\t<IN? ,MATCH ,WINNER>\n\t\t\t<FSET? ,MATCH ,ONBIT>>>\n\t       <TELL \"The string starts to burn.\" CR>\n\t       <ENABLE <QUEUE I-FUSE 2>>)>>"
  },
  "I-FUSE": {
   "name": "I-FUSE",
   "file": "2actions.zil",
   "line": 424,
   "endLine": 460,
   "source": "<ROUTINE I-FUSE (\"AUX\" (BRICK-ROOM <LOC ,BRICK>) F)\n\t <COND (<IN? ,FUSE ,BRICK>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT .BRICK-ROOM> <RFALSE>)\n\t\t\t      (<IN? .BRICK-ROOM ,ROOMS>\n\t\t\t       <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET BRICK-ROOM <LOC .BRICK-ROOM>>)>>\n\t\t<MOVE ,EXPLOSION .BRICK-ROOM>\n\t\t<FCLEAR .BRICK-ROOM ,TOUCHBIT>\n\t\t<COND (<EQUAL? .BRICK-ROOM ,HERE>\n\t\t       <MUNG-ROOM .BRICK-ROOM\n\t\t\t  \"The way is blocked by debris from an explosion.\">\n\t\t       <JIGS-UP ,OTHER-PROPERTIES>)\n\t\t      (<EQUAL? .BRICK-ROOM ,SAFE-ROOM>\n\t\t       <ENABLE <QUEUE I-SAFE 5>>\n\t\t       <SETG MUNGED-ROOM ,SAFE-ROOM>\n\t\t       <TELL \"There is an explosion nearby.\" CR>\n\t\t       <COND (<IN? ,BRICK ,SLOT>\n\t\t\t      <FSET ,SLOT ,INVISIBLE>\n\t\t\t      <FSET ,SAFE ,OPENBIT>\n\t\t\t      <FCLEAR ,SAFE-ROOM ,TOUCHBIT>\n\t\t\t      <SETG SAFE-FLAG T>)>)\n\t\t      (T\n\t\t       <TELL \"There is an explosion nearby.\" CR>\n\t\t       <ENABLE <QUEUE I-SAFE 5>>\n\t\t       <SETG MUNGED-ROOM .BRICK-ROOM>\n\t\t       <COND (<SET F <FIRST? .BRICK-ROOM>>\n\t\t\t      <REPEAT ()\n\t\t\t\t      <COND (<FSET? .F ,TAKEBIT>\n\t\t\t\t\t     <FSET .F ,INVISIBLE>)>\n\t\t\t\t      <COND (<NOT <SET F <NEXT? .F>>>\n\t\t\t\t\t     <RETURN>)>>)>)>\n\t\t<REMOVE ,BRICK>)\n\t       (<EQUAL? <LOC ,FUSE> ,WINNER ,HERE>\n\t\t<TELL \"The string rapidly burns into nothingness.\" CR>)>\n\t <REMOVE ,FUSE>>"
  },
  "I-SAFE": {
   "name": "I-SAFE",
   "file": "2actions.zil",
   "line": 462,
   "endLine": 474,
   "source": "<ROUTINE I-SAFE ()\n\t<COND (<EQUAL? ,HERE ,MUNGED-ROOM>\n\t       <JIGS-UP\n\"The room trembles and 5000 tons of rock fall on you, turning you\ninto a pancake.\">)\n\t      (<NOT ,DEAD>\n\t       <TELL\n\"You may recall that recent explosion. Probably as a result of it, you\nhear an ominous rumbling, as if a nearby room had collapsed.\" CR>\n\t       <COND (<EQUAL? ,MUNGED-ROOM ,SAFE-ROOM>\n\t\t      <ENABLE <QUEUE I-LEDGE 8>>)>)>\n\t<MUNG-ROOM ,MUNGED-ROOM\n\t\t   \"The way is blocked by debris from an explosion.\">>"
  },
  "I-LEDGE": {
   "name": "I-LEDGE",
   "file": "2actions.zil",
   "line": 476,
   "endLine": 498,
   "source": "<ROUTINE I-LEDGE (\"AUX\" (RM ,LEDGE-2))\n    <COND (<EQUAL? ,HERE ,LEDGE-2>\n\t   <COND (<IN? ,WINNER ,BALLOON>\n\t\t  <COND (,BTIE-FLAG\n\t\t\t <SETG BLOC ,VOLCANO-BOTTOM>\n\t\t\t <REMOVE ,BALLOON>\n\t\t\t <MOVE ,DEAD-BALLOON ,VOLCANO-BOTTOM>\n\t\t\t <SETG BTIE-FLAG <>>\n\t\t\t <SETG BINF-FLAG <>>\n\t\t\t <DISABLE <INT I-BALLOON>>\n\t\t\t <DISABLE <INT I-BURNUP>>\n\t\t\t <JIGS-UP\n\"The ledge collapses, probably as a result of the explosion, and plummets\nto the ground far below. Sadly, you were still attached to the ledge.\">)\n\t\t\t(T\n\t\t\t <TELL\n\"The ledge collapses, leaving you with no place to land.\" CR>)>)\n\t\t (T\n\t\t  <JIGS-UP\n\"The force of the recent explosion has caused the ledge to collapse.\">)>)\n\t  (<NOT ,DEAD>\n\t   <TELL \"The ledge collapses. (That was a narrow escape!)\" CR>)>\n    <MUNG-ROOM .RM \"The ledge has collapsed and cannot be landed on.\">>"
  },
  "LEDGE-FCN": {
   "name": "LEDGE-FCN",
   "file": "2actions.zil",
   "line": 500,
   "endLine": 507,
   "source": "<ROUTINE LEDGE-FCN (RARG)\n    <COND (<EQUAL? .RARG ,M-LOOK>\n\t   <TELL\n\"You are on a wide ledge high in the volcano. The rim of the volcano is\nabout 200 feet above and there is a precipitous drop to the bottom.\">\n\t   <COND (<FSET? ,SAFE-ROOM ,RMUNGBIT>\n\t\t  <TELL \" The way to the south is blocked by rubble.\" CR>)\n\t\t (T <TELL \" There is a small door to the south.\" CR>)>)>>"
  },
  "I-GNOME": {
   "name": "I-GNOME",
   "file": "2actions.zil",
   "line": 514,
   "endLine": 530,
   "source": "<ROUTINE I-GNOME ()\n    <COND (<EQUAL? ,HERE ,LEDGE-1 ,LEDGE-2>\n\t   <TELL\n\"A volcano gnome seems to walk straight out of the wall and \">\n\t   <COND (<IN? ,WAND ,WINNER>\n\t\t  <TELL\n\"noticing the wand, straight back in.\" CR>)\n\t\t (T\n\t\t  <TELL\n\"says\n\\\"I have a busy appointment schedule and little time to waste on\ntrespassers, but for a small fee I'll show you the way out.\\\" You\nnotice the gnome nervously glancing at his watch.\" CR>\n\t\t  <MOVE ,GNOME ,HERE>)>)\n\t  (T\n\t   <ENABLE <QUEUE I-GNOME 1>>\n\t   <RFALSE>)>>"
  },
  "GNOME-FCN": {
   "name": "GNOME-FCN",
   "file": "2actions.zil",
   "line": 534,
   "endLine": 571,
   "source": "<ROUTINE GNOME-FCN ()\n    <COND (<VERB? TELL>\n\t   <SETG P-CONT <>>\n\t   <SETG QUOTE-FLAG <>>\n\t   <COND (<NOT ,GNOME-FLAG>\n\t\t  <ENABLE <QUEUE I-NERVOUS 5>>)>\n\t   <SETG GNOME-FLAG T>\n\t   <TELL\n\"The gnome appears increasingly nervous.\" CR>)\n\t  (<AND <VERB? GIVE THROW> <EQUAL? ,PRSI ,GNOME>>\n\t   <COND (<GETPT ,PRSO ,P?VALUE>\n\t\t  <TELL\n\"\\\"Thank you very much for the \" D ,PRSO \". I don't believe\nI've ever seen one as beautiful. Follow me,\\\" he says, and a door\nappears on the west end of the ledge. Through the door, you can see\na narrow chimney sloping steeply downward. The gnome moves quickly,\nand disappears from sight.\" CR>\n\t\t  <REMOVE ,PRSO>\n\t\t  <REMOVE ,GNOME>\n\t\t  <SETG GNOME-DOOR-FLAG T>)\n\t\t (<BOMB? ,PRSO>\n\t\t  <MOVE ,BRICK ,HERE>\n\t\t  <REMOVE ,GNOME>\n\t\t  <DISABLE <INT I-GNOME>>\n\t\t  <DISABLE <INT I-NERVOUS>>\n\t\t  <TELL\n\"\\\"That certainly wasn't what I had in mind,\\\" he says, and disappears.\" CR>)\n\t\t (T\n\t\t  <REMOVE-CAREFULLY ,PRSO>\n\t\t  <TELL\n\"\\\"That wasn't quite what I had in mind,\\\" he says, crunching the\n\" D ,PRSO \" in his rock-hard hands.\" CR>)>)\n\t  (T\n\t   <TELL\n\"The gnome appears increasingly nervous.\" CR>\n\t   <COND (<NOT ,GNOME-FLAG>\n\t\t  <ENABLE <QUEUE I-NERVOUS 5>>)>\n\t   <SETG GNOME-FLAG T>)>>"
  },
  "I-NERVOUS": {
   "name": "I-NERVOUS",
   "file": "2actions.zil",
   "line": 573,
   "endLine": 578,
   "source": "<ROUTINE I-NERVOUS ()\n\t <COND (<IN? ,GNOME ,HERE>\n\t\t<TELL\n\"The gnome glances at his watch. \\\"Oops. I'm late for an\nappointment!\\\" He disappears, leaving you alone on the ledge.\" CR>)>\n\t <REMOVE ,GNOME>>"
  },
  "PURPLE-BOOK-FCN": {
   "name": "PURPLE-BOOK-FCN",
   "file": "2actions.zil",
   "line": 580,
   "endLine": 587,
   "source": "<ROUTINE PURPLE-BOOK-FCN ()\n\t <COND (<AND <VERB? READ>\n\t\t     <IN? ,STAMP ,PURPLE-BOOK>\n\t\t     <NOT <FSET? ,PURPLE-BOOK ,OPENBIT>>>\n\t\t<TELL <GETP ,PURPLE-BOOK ,P?TEXT> CR>\n\t\t<PERFORM ,V?OPEN ,PURPLE-BOOK>\n\t\t<RTRUE>)\n\t       (T <RANDOM-BOOK>)>>"
  },
  "RANDOM-BOOK": {
   "name": "RANDOM-BOOK",
   "file": "2actions.zil",
   "line": 589,
   "endLine": 595,
   "source": "<ROUTINE RANDOM-BOOK ()\n\t <COND (<VERB? TAKE MOVE PUT>\n\t\t<FSET ,WHITE-BOOK ,TOUCHBIT>\n\t\t<FSET ,PURPLE-BOOK ,TOUCHBIT>\n\t\t<FSET ,GREEN-BOOK ,TOUCHBIT>\n\t\t<FSET ,BLUE-BOOK ,TOUCHBIT>\n\t\t<RFALSE>)>>"
  },
  "HEAD-FCN": {
   "name": "HEAD-FCN",
   "file": "2actions.zil",
   "line": 599,
   "endLine": 606,
   "source": "<ROUTINE HEAD-FCN ()\n  <COND (<VERB? HELLO>\n\t <TELL \"The Flatheads are dead; therefore they do not respond.\" CR>)\n\t(<VERB? KICK ATTACK RUB OPEN TAKE BURN>\n\t <JIGS-UP\n\"Although the Flatheads are dead, they foresaw that some cretin\nmight tamper with their remains. Therefore, they took steps to\npunish such actions.\">)>>"
  },
  "CRYPT-ANTEROOM-FCN": {
   "name": "CRYPT-ANTEROOM-FCN",
   "file": "2actions.zil",
   "line": 608,
   "endLine": 619,
   "source": "<ROUTINE CRYPT-ANTEROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"The anteroom is large and empty. Marble bas reliefs depict the stirring\ntimes and afterlife of the Flatheads (the latter a bit optimistically).\nThe exit is to the west. A huge marble door stands to the south. \">\n\t\t<TELL \"The door is \">\n\t\t<COND (<FSET? ,CRYPT-DOOR ,OPENBIT>\n\t\t       <TELL \"open.\">)\n\t\t      (T <TELL \"closed.\">)>\n\t\t<TELL\n\" Above the door is the cryptic inscription: \\\"Feel Free\\\".\" CR>)>>"
  },
  "CRYPT-ROOM-FCN": {
   "name": "CRYPT-ROOM-FCN",
   "file": "2actions.zil",
   "line": 621,
   "endLine": 651,
   "source": "<ROUTINE CRYPT-ROOM-FCN (RARG \"AUX\" CLIT?)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<FCLEAR ,HERE ,ONBIT>\n\t\t<COND (<LIT? ,HERE>\n\t\t       <TELL\n\"The room contains the earthly remains of the mighty Flatheads, twelve\nsomewhat flat heads mounted securely on poles. While the room might be\nexpected to contain funerary urns or other evidence of the ritual\npractices of the ancient Zorkers, it is empty of all such objects. There\nis writing carved on the crypt. The only apparent exit is to the north\nthrough the door to the anteroom. The door is \">\n\t\t       <COND (<FSET? ,CRYPT-DOOR ,OPENBIT>\n\t\t\t      <TELL \"open.\">)\n\t\t\t     (T <TELL \"closed.\">)>\n\t\t       <CRLF>\n\t\t       <COND (<NOT <FSET? ,DIM-DOOR ,INVISIBLE>>\n\t\t\t      <TELL\n\"Looking closely at the south wall, you can see the dim outline of\na secret door labelled with the letter \\\"F\\\".\" CR>)>)\n\t\t      (T\n\t\t       <DIM-DOOR-APPEARS>)>\n\t\t<FSET ,HERE ,ONBIT>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-END>\n\t\t<SET CLIT? ,CRYPT-LIT?>\n\t\t<FCLEAR ,CRYPT-ROOM ,ONBIT>\n\t\t<SETG CRYPT-LIT? <LIT? ,CRYPT-ROOM>>\n\t\t<COND (<AND .CLIT?\n\t\t\t    <NOT ,CRYPT-LIT?>>\n\t\t       <DIM-DOOR-APPEARS>)>\n\t\t<FSET ,CRYPT-ROOM ,ONBIT>)>>"
  },
  "DIM-DOOR-APPEARS": {
   "name": "DIM-DOOR-APPEARS",
   "file": "2actions.zil",
   "line": 655,
   "endLine": 660,
   "source": "<ROUTINE DIM-DOOR-APPEARS ()\n\t <TELL\n\"It is dark, but on the south wall is a faint outline of a rectangle, as\nthough light were shining around a doorway. You can also make out a faintly\nglowing letter in the center of this area. It might be an \\\"F\\\".\" CR>\n\t <FCLEAR ,DIM-DOOR ,INVISIBLE>>"
  },
  "CRYPT-OBJECT": {
   "name": "CRYPT-OBJECT",
   "file": "2actions.zil",
   "line": 662,
   "endLine": 664,
   "source": "<ROUTINE CRYPT-OBJECT ()\n\t <COND (<VERB? OPEN> <TELL \"The crypt is sealed for all time.\" CR>)\n\t       (<VERB? RUB> <TELL \"The marble is cool.\" CR>)>>"
  },
  "CRYPT-DOOR-FCN": {
   "name": "CRYPT-DOOR-FCN",
   "file": "2actions.zil",
   "line": 666,
   "endLine": 670,
   "source": "<ROUTINE CRYPT-DOOR-FCN ()\n\t <COND (<VERB? OPEN CLOSE>\n\t\t<OPEN-CLOSE ,PRSO\n\t\t\t    \"The crypt door squeaks open.\"\n\t\t\t    \"The crypt door squeaks closed.\">)>>"
  },
  "TOMB-PSEUDO": {
   "name": "TOMB-PSEUDO",
   "file": "2actions.zil",
   "line": 672,
   "endLine": 675,
   "source": "<ROUTINE TOMB-PSEUDO ()\n\t <COND (<VERB? THROUGH>\n\t\t<DO-WALK ,P?EAST>\n\t\tT)>>"
  },
  "DIM-DOOR-FCN": {
   "name": "DIM-DOOR-FCN",
   "file": "2actions.zil",
   "line": 679,
   "endLine": 686,
   "source": "<ROUTINE DIM-DOOR-FCN ()\n\t <COND (<VERB? KNOCK> <TELL \"A hollow echo responds.\" CR>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<COND (<VERB? OPEN> <SETG DIM-DOOR-FLAG T>)\n\t\t      (T <SETG DIM-DOOR-FLAG <>>)>\n\t\t<OPEN-CLOSE ,PRSO\n\t\t\t    \"The secret door opens noiselessly.\"\n\t\t\t    \"The secret door closes noiselessly.\">)>>"
  },
  "REPELLENT-FCN": {
   "name": "REPELLENT-FCN",
   "file": "2actions.zil",
   "line": 688,
   "endLine": 707,
   "source": "<ROUTINE REPELLENT-FCN ()\n\t <COND (<VERB? SHAKE>\n\t\t<COND (,SPRAY-USED? <TELL \"The can seems empty.\" CR>)\n\t\t      (T <TELL \"There is a sloshing sound from inside.\" CR>)>)\n\t       (<AND <VERB? SPRAY PUT> <EQUAL? ,PRSO ,REPELLENT>>\n\t\t<COND (,SPRAY-USED?\n\t\t       <TELL\n\"The repellent is all gone.\" CR>)\n\t\t      (<NOT ,PRSI>\n\t\t       <SETG SPRAY-USED? T>\n\t\t       <TELL\n\"The spray stinks amazingly for a few moments, then drifts away.\" CR>)\n\t\t      (T\n\t\t       <COND (<EQUAL? ,PRSI ,ME>\n\t\t\t      <ENABLE <QUEUE I-SPRAY 8>>\n\t\t\t      <SETG SPRAYED? T>)>\n\t\t       <SETG SPRAY-USED? T>\n\t\t       <TELL\n\"The spray smells like a mixture of old socks and burning rubber. If\nI were a grue I'd sure stay clear!\" CR>)>)>>"
  },
  "I-SPRAY": {
   "name": "I-SPRAY",
   "file": "2actions.zil",
   "line": 711,
   "endLine": 713,
   "source": "<ROUTINE I-SPRAY ()\n\t <SETG SPRAYED? <>>\n\t <TELL \"That horrible smell is much less pungent now.\" CR>>"
  },
  "ZORK3-FCN": {
   "name": "ZORK3-FCN",
   "file": "2actions.zil",
   "line": 715,
   "endLine": 744,
   "source": "<ROUTINE ZORK3-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"Beyond the door is a roughly hewn staircase leading down into darkness.\nThe landing on which you stand is covered with carefully drawn magical runes\nlike those sketched upon the workbench of the Wizard of Frobozz.\nThese have been overlaid with sweeping green lines of enormous power, which\nundulate back and forth across the landing. \">\n\t\t<COND (<IN? ,WAND ,WINNER>\n\t\t       <TELL\n\"The wand begins to vibrate in harmony with the motion of the lines.\nYou feel yourself compelled downward, and you yield, stepping onto the\nstaircase. As you pass the green lines, they flare and disappear with a\nburst of light, and you tumble down the staircase!|\n|\nAt the bottom, a vast red-lit hall stretches off into the distance.\nSinister statues guard the entrance to a dimly visible room far ahead.\nWith courage and cunning you have conquered the Wizard of Frobozz and\nbecome the master of his domain, but the final challenge awaits!|\n|\n(The ultimate adventure concludes in \\\"Zork III: The Dungeon Master\\\".)|\n|\n\" CR>\n\t\t<SETG WON-FLAG T>\n\t\t<FINISH>)\n\t\t      (T\n\t\t       <JIGS-UP\n\"The green curves begin to vibrate toward you, as if searching for\nsomething. One by one your possessions glow bright green. Finally, you\nare attacked by these magical wardens, and destroyed!\">)>)>>"
  },
  "I-BUCKET": {
   "name": "I-BUCKET",
   "file": "2actions.zil",
   "line": 754,
   "endLine": 758,
   "source": "<ROUTINE I-BUCKET ()\n\t <COND (<IN? ,WATER ,BUCKET>\n\t\t<SETG EVAPORATED T>\n\t\t<REMOVE ,WATER>)>\n\t <RFALSE>>"
  },
  "WATER-FCN": {
   "name": "WATER-FCN",
   "file": "2actions.zil",
   "line": 760,
   "endLine": 828,
   "source": "<ROUTINE WATER-FCN (\"AUX\" AV W PI?)\n\t #DECL ((AV) <OR OBJECT FALSE> (W) OBJECT (PI?) <OR ATOM FALSE>)\n\t <COND (<VERB? SGIVE> <RFALSE>)\n\t       (<VERB? THROUGH>\n\t\t<PERFORM ,V?SWIM ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? FILL>\t;\"fill bottle with water =>\"\n\t\t<SET W ,PRSI>\t   ;\"put water in bottle\"\n\t\t<SETG PRSA ,V?PUT>\n\t\t<SETG PRSI ,PRSO>\n\t\t<SETG PRSO .W>\n\t\t<SET PI? <>>)\n\t       (<EQUAL? ,PRSO ,GLOBAL-WATER ,WATER>\n\t\t<SET W ,PRSO>\n\t\t<SET PI? <>>)\n\t       (,PRSI\n\t\t<SET W ,PRSI>\n\t\t<SET PI? T>)>\n\t <COND (<EQUAL? .W ,GLOBAL-WATER>\n\t\t<SET W ,WATER>\n\t\t<COND (<VERB? TAKE PUT> <REMOVE .W>)>)>\n\t <COND (.PI? <SETG PRSI .W>)\n\t       (T <SETG PRSO .W>)>\n\t <SET AV <LOC ,WINNER>>\n\t <COND (<NOT <FSET? .AV ,VEHBIT>> <SET AV <>>)>\n\t <COND (<AND <VERB? TAKE PUT> <NOT .PI?>>\n\t\t<COND (<AND .AV <EQUAL? .AV ,PRSI>>\n\t\t       <PUDDLE .AV>)\n\t\t      (<AND .AV <NOT ,PRSI> <NOT <IN? .W .AV>>>\n\t\t       <PUDDLE .AV>)\n\t\t      (<AND ,PRSI <NOT <EQUAL? ,PRSI ,TEAPOT>>>\n\t\t       <TELL \"The water leaks out of the \" D ,PRSI\n\t\t\t     \" and evaporates immediately.\" CR>\n\t\t       <REMOVE .W>)\n\t\t      (<IN? ,TEAPOT ,WINNER>\n\t\t       <COND (<NOT <FIRST? ,TEAPOT>>\n\t\t\t      <COND (<EQUAL? ,HERE ,POOL-ROOM>\n\t\t\t\t     <MOVE ,SALTY-WATER ,TEAPOT>)\n\t\t\t\t    (T \n\t\t\t\t     <MOVE ,WATER ,TEAPOT>)>\n\t\t\t      <TELL \"The teapot is now full of water.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The teapot isn't currently empty.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <IN? ,PRSO ,TEAPOT>\n\t\t\t    <VERB? TAKE>\n\t\t\t    <NOT ,PRSI>>\n\t\t       <SETG PRSO ,TEAPOT>\n\t\t       <ITAKE>\n\t\t       <SETG PRSO .W>)\n\t\t      (T\n\t\t       <TELL \"The water slips through your fingers.\" CR>)>)\n\t       (.PI? <TELL \"Nice try.\" CR>)\n\t       (<VERB? DROP GIVE>\n\t\t<COND (<AND <EQUAL? ,PRSO ,WATER>\n\t\t\t    <NOT <HELD? ,WATER>>>\n\t\t       <TELL \"You don't have any water.\" CR>\n\t\t       <RTRUE>)>\n\t\t<REMOVE ,WATER>\n\t\t<COND (.AV\n\t\t       <PUDDLE .AV>)\n\t\t      (T\n\t\t       <TELL\n\"The water spills to the floor and evaporates.\" CR>\n\t\t       <REMOVE ,WATER>)>)\n\t       (<VERB? THROW>\n\t\t<TELL\n\"The water splashes on the walls and evaporates.\" CR>\n\t\t<REMOVE ,WATER>)>>"
  },
  "PUDDLE": {
   "name": "PUDDLE",
   "file": "2actions.zil",
   "line": 830,
   "endLine": 832,
   "source": "<ROUTINE PUDDLE (AV)\n\t<TELL \"There is now a puddle in the bottom of the \" D .AV \".\" CR>\n\t<MOVE ,PRSO .AV>>"
  },
  "BUCKET-FCN": {
   "name": "BUCKET-FCN",
   "file": "2actions.zil",
   "line": 834,
   "endLine": 874,
   "source": "<ROUTINE BUCKET-FCN (\"OPTIONAL\" (RARG ,M-BEG))\n\t<COND (<EQUAL? .RARG ,M-BEG>\n\t       <COND (<AND <VERB? BURN>\n\t\t\t   <EQUAL? ,PRSO ,BUCKET>>\n\t\t      <TELL\n\t\t       \"The bucket is fireproof, and won't burn.\" CR>)\n\t\t     (<AND <VERB? DROP PUT>\n\t\t\t   <EQUAL? ,PRSO ,WATER>\n\t\t\t   <EQUAL? ,PRSI ,BUCKET>\n\t\t\t   <IN? ,BUCKET ,WELL-BOTTOM>\n\t\t\t   <NOT <IN? ,WINNER ,BUCKET>>>\n\t\t      <TELL \"The bucket swiftly rises up, and is gone.\" CR>\n\t\t      <MOVE ,BUCKET ,WELL-TOP>\n\t\t      <MOVE ,WATER ,BUCKET>\n\t\t      <SETG BUCKET-TOP-FLAG T>\n\t\t      <ENABLE <QUEUE I-BUCKET 100>>\n\t\t      <RTRUE>)\n\t\t     (<VERB? KICK>\n\t\t      <JIGS-UP \"If you insist.\">)>)\n\t      (<EQUAL? .RARG ,M-END>\n\t       <COND (<AND <IN? ,WATER ,BUCKET>\n\t\t\t   <NOT ,BUCKET-TOP-FLAG>>\n\t\t      <TELL \"The bucket rises and comes to a stop.\" CR CR>\n\t\t      <SETG BUCKET-TOP-FLAG T>\n\t\t      <SETG EVAPORATED <>>\n\t\t      <PASS-THE-BUCKET ,WELL-TOP>\n\t\t      <ENABLE <QUEUE I-BUCKET 100>>\n\t\t      <RTRUE>)\n\t\t     (<AND ,BUCKET-TOP-FLAG\n\t\t\t   <NOT <IN? ,WATER ,BUCKET>>>\n\t\t      <COND (,EVAPORATED\n\t\t\t     <TELL\n\"The last of the water evaporates, and the bucket descends.\" CR CR>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"The bucket descends and comes to a stop.\" CR CR>)>\n\t\t      <SETG BUCKET-TOP-FLAG <>>\n\t\t      <PASS-THE-BUCKET ,WELL-BOTTOM>)>)\n\t      (<VERB? CLIMB-ON>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)>>"
  },
  "PASS-THE-BUCKET": {
   "name": "PASS-THE-BUCKET",
   "file": "2actions.zil",
   "line": 876,
   "endLine": 880,
   "source": "<ROUTINE PASS-THE-BUCKET (R)\n    #DECL ((R) OBJECT)\n    <MOVE ,BUCKET .R>\n    <COND (<IN? ,WINNER ,BUCKET>\n\t   <GOTO .R>)>>"
  },
  "POSTS-ROOM-FCN": {
   "name": "POSTS-ROOM-FCN",
   "file": "2actions.zil",
   "line": 886,
   "endLine": 891,
   "source": "<ROUTINE POSTS-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<AND <VERB? TAKE> <FSET? ,PRSO ,NONLANDBIT>>\n\t\t       <TELL\n\"The \" D ,PRSO \" is now much larger than you are. You have no hope of\ntaking it.\" CR>)>)>>"
  },
  "EATME-FCN": {
   "name": "EATME-FCN",
   "file": "2actions.zil",
   "line": 893,
   "endLine": 915,
   "source": "<ROUTINE EATME-FCN (\"AUX\" F N)\n    <COND (<AND <VERB? EAT>\n\t\t<EQUAL? ,PRSO ,EAT-ME-CAKE>\n\t\t<EQUAL? ,HERE ,TEA-ROOM>>\n\t   <TELL\n\"Suddenly, the room appears to have become very large (although\neverything you are carrying seems to be its normal size).\" CR CR>\n\t   <REMOVE ,EAT-ME-CAKE>\n\t   <FSET ,ROBOT ,INVISIBLE>\n\t   <FSET ,ALICE-TABLE ,INVISIBLE>\n\t   <SET F <FIRST? ,HERE>>\n\t   <REPEAT ()\n\t\t   <COND (<NOT .F> <RETURN>)\n\t\t\t (T\n\t\t\t  <SET N <NEXT? .F>>\n\t\t\t  <COND (<AND <NOT <EQUAL? .F ,ADVENTURER>>\n\t\t\t\t      <FSET? .F ,TAKEBIT>>\n\t\t\t\t <FSET .F ,NONLANDBIT>\n\t\t\t\t <FSET .F ,TRYTAKEBIT>\n\t\t\t\t <MOVE .F ,POSTS-ROOM>)>)>\n\t\t   <SET F .N>>\n\t   <GOTO ,POSTS-ROOM>)\n\t  (T <CAKE-CRUMBLE>)>>"
  },
  "CAKE-CRUMBLE": {
   "name": "CAKE-CRUMBLE",
   "file": "2actions.zil",
   "line": 917,
   "endLine": 927,
   "source": "<ROUTINE CAKE-CRUMBLE (\"AUX\" CAKE)\n\t <COND (<FSET? ,PRSO ,FOODBIT> <SET CAKE ,PRSO>)\n\t       (T <SET CAKE ,PRSI>)>\n\t <COND (<OR <EQUAL? ,HERE ,TEA-ROOM ,POSTS-ROOM ,POOL-ROOM>\n\t\t    <EQUAL? ,HERE ,MACHINE-ROOM ,MAGNET-ROOM ,CAGE-ROOM>\n\t\t    <EQUAL? ,HERE ,WELL-TOP ,IN-CAGE>>\n\t        <RFALSE>)\n\t       (T\n\t        <REMOVE .CAKE>\n\t        <TELL\n\"The \" D .CAKE \" has crumbled to dust.\" CR>)>>"
  },
  "CAKE-FCN": {
   "name": "CAKE-FCN",
   "file": "2actions.zil",
   "line": 929,
   "endLine": 1001,
   "source": "<ROUTINE CAKE-FCN (\"AUX\" F N)\n\t<COND (<VERB? READ>\n\t       <COND (<FSET? ,PRSO ,NONLANDBIT>\n\t\t      <TELL\n\"The cake is much too tall now for you to read the lettering.\" CR>)\n\t\t     (,PRSI\n\t\t      <COND (<EQUAL? ,PRSI ,PALANTIR-1 ,PALANTIR-2 ,PALANTIR-3>\n\t\t\t     <PERFORM ,V?LOOK-INSIDE ,PRSI>)\n\t\t\t    (<EQUAL? ,PRSI ,FLASK>\n\t\t\t     <TELL \"The letters, now visible, say \\\"\">\n\t\t\t     <COND (<EQUAL? ,PRSO ,RED-ICING>\n\t\t\t\t    <TELL \"Evaporate\">)\n\t\t\t\t   (<EQUAL? ,PRSO ,ORANGE-ICING>\n\t\t\t\t    <TELL \"Explode\">)\n\t\t\t\t   (T <TELL \"Enlarge\">)>\n\t\t\t     <TELL \"\\\".\" CR>)\n\t\t\t    (T <TELL \"You can't see through that!\" CR>)>)\n\t\t     (T\n\t\t      <TELL\n\"The first letter is a capital E. The rest is too small to read.\" CR>)>)\n\t      (<AND <VERB? EAT>\n\t\t    <EQUAL? ,HERE ,TEA-ROOM ,POSTS-ROOM ,POOL-ROOM>>\n\t       <COND (<EQUAL? ,PRSO ,ORANGE-ICING>\n\t\t      <REMOVE ,PRSO>\n\t\t      <ICEBOOM>)\n\t\t     (<EQUAL? ,PRSO ,RED-ICING>\n\t\t      <REMOVE ,PRSO>\n\t\t      <JIGS-UP\n\"That was delicious, but your dying memory is of feeling horribly dehydrated\nand thirsty.\">)\n\t\t     (<EQUAL? ,PRSO ,BLUE-ICING>\n\t\t      <REMOVE ,PRSO>\n\t\t      <TELL \"The room around you seems to be getting smaller.\"\n\t\t\t    CR CR>\n\t\t      <COND (<EQUAL? ,HERE ,POSTS-ROOM>\n\t\t\t     <FCLEAR ,ROBOT ,INVISIBLE>\n\t\t\t     <FCLEAR ,ALICE-TABLE ,INVISIBLE>\n\t\t\t     <FSET ,POSTS ,INVISIBLE>\n\t\t\t     <SET F <FIRST? ,HERE>>\n\t   \t\t     <REPEAT ()\n\t\t\t\t<COND (<NOT .F> <RETURN>)\n\t\t\t\t      (T\n\t\t\t\t       <SET N <NEXT? .F>>\n\t\t\t\t       <COND (<AND <NOT <EQUAL? .F ,ADVENTURER>>\n\t\t\t\t\t\t   <FSET? .F ,TAKEBIT>>\n\t\t\t\t\t      <FCLEAR .F ,NONLANDBIT>\n\t\t\t\t\t      <FCLEAR .F ,TRYTAKEBIT>\n\t\t\t\t\t      <MOVE .F ,TEA-ROOM>)>)>\n\t\t\t\t<SET F .N>>\n\t\t\t     <GOTO ,TEA-ROOM>)\n\t\t\t    (T <JIGS-UP\n\"The room seems to have become too small to hold you. The walls are not as\ncompressible as your body, which is demolished.\" >)>)>)\n\t      (<AND <VERB? THROW PUT>\n\t\t    <EQUAL? ,PRSO ,ORANGE-ICING>\n\t\t    <EQUAL? ,HERE ,TEA-ROOM ,POSTS-ROOM ,POOL-ROOM>>\n\t       <REMOVE ,PRSO>\n\t       <ICEBOOM>)\n\t      (<AND <VERB? THROW PUT>\n\t\t    <EQUAL? ,PRSO ,RED-ICING ,BLUE-ICING ,ORANGE-ICING>\n\t\t    <EQUAL? ,PRSI ,POOL>>\n\t       <COND (<EQUAL? ,PRSO ,BLUE-ICING ,ORANGE-ICING>\n\t\t      <TELL \"The cake sinks majestically into the pool.\" CR>\n\t\t      <REMOVE ,PRSO>\n\t\t      <RTRUE>)>\n\t       <MOVE ,PRSO ,HERE>\n\t       <REMOVE ,PRSI>\n\t       <TELL\n\"Most of the pool evaporates, revealing a (slightly damp but\nstill valuable) package of rare candies. The red cake must be\npretty strong stuff, since it remains intact!\" CR>\n\t       <FCLEAR ,CANDY ,INVISIBLE>)\n\t      (T <CAKE-CRUMBLE>)>>"
  },
  "CANDY-FCN": {
   "name": "CANDY-FCN",
   "file": "2actions.zil",
   "line": 1003,
   "endLine": 1018,
   "source": "<ROUTINE CANDY-FCN ()\n\t <COND (<VERB? EXAMINE READ>\n\t\t<FIXED-FONT-ON>\n\t\t<TELL\n\"       Frobozz Magic Candy Company|\n         >>Special Assortment<<|\n          Candied Grasshoppers|\n             Chocolated Ants|\n              Worms Glacee|\n(By Appointment to His Majesty, Dimwit I)|\n\">\n\t\t<FIXED-FONT-OFF>\n\t\t<RTRUE>)\n\t       (<VERB? EAT OPEN>\n\t\t<TELL\n\"Such rich food would probably not be good for you.\" CR>)>>"
  },
  "TOP-ETCHINGS-F": {
   "name": "TOP-ETCHINGS-F",
   "file": "2actions.zil",
   "line": 1020,
   "endLine": 1032,
   "source": "<ROUTINE TOP-ETCHINGS-F ()\n\t<COND (<VERB? EXAMINE READ>\n\t       <FIXED-FONT-ON>\n\t       <TELL\n\"       o  b  o|\n   r             z|\nf   M  A  G  I  C   z|\nc    W  E   L  L    y|\n   o             n|\n       m  p  a|\n\">\n\t       <FIXED-FONT-OFF>\n\t       <RTRUE>)>>"
  },
  "BOTTOM-ETCHINGS-F": {
   "name": "BOTTOM-ETCHINGS-F",
   "file": "2actions.zil",
   "line": 1034,
   "endLine": 1046,
   "source": "<ROUTINE BOTTOM-ETCHINGS-F ()\n\t<COND (<VERB? EXAMINE READ>\n\t       <FIXED-FONT-ON>\n\t       <TELL\n\"       o  b  o|\n|\n       A  G  I|\n        E   L|\n|\n       m  p  a|\n\">\n\t       <FIXED-FONT-OFF>\n\t       <RTRUE>)>>"
  },
  "CUBE-F": {
   "name": "CUBE-F",
   "file": "2actions.zil",
   "line": 1048,
   "endLine": 1058,
   "source": "<ROUTINE CUBE-F ()\n\t<COND (<VERB? EXAMINE READ>\n\t       <FIXED-FONT-ON>\n\t       <TELL\t\n\"              Bank of Zork|\n                   VAULT|\n                 *722 GUE*|\n        Frobozz Magic Vault Company|\n\">\n\t       <FIXED-FONT-OFF>\n\t       <RTRUE>)>>"
  },
  "FIXED-FONT-ON": {
   "name": "FIXED-FONT-ON",
   "file": "2actions.zil",
   "line": 1060,
   "endLine": 1060,
   "source": "<ROUTINE FIXED-FONT-ON () <PUT 0 8 <BOR <GET 0 8> 2>>>"
  },
  "FIXED-FONT-OFF": {
   "name": "FIXED-FONT-OFF",
   "file": "2actions.zil",
   "line": 1062,
   "endLine": 1062,
   "source": "<ROUTINE FIXED-FONT-OFF() <PUT 0 8 <BAND <GET 0 8> -3>>>"
  },
  "POOL-FCN": {
   "name": "POOL-FCN",
   "file": "2actions.zil",
   "line": 1064,
   "endLine": 1074,
   "source": "<ROUTINE POOL-FCN ()\n\t <COND (<VERB? DRINK>\n\t\t<TELL\n\"The water is extremely salty.\" CR>)\n\t       (<VERB? LOOK-UNDER>\n\t\t<TELL\n\"You'd probably have to enter the pool to see what's below the surface.\" CR>)\n\t       (<VERB? THROUGH>\n\t\t<JIGS-UP\n\"You enter the pool, thrash around for a good while, and then drown.\nSad, but true.\">)>>"
  },
  "FLASK-FCN": {
   "name": "FLASK-FCN",
   "file": "2actions.zil",
   "line": 1076,
   "endLine": 1092,
   "source": "<ROUTINE FLASK-FCN ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<TELL\n\"You notice that objects behind the flask appear to be magnified.\nYou might try looking at something through the flask.\" CR>)\n\t       (<AND <VERB? READ> <EQUAL? ,PRSI ,FLASK>>\n\t\t<TELL\n\"The flask distorts and magnifies the \" D ,PRSO \", showing details\nnot noticed earlier.\" CR>\n\t\t<RFALSE>)\n\t       (<VERB? OPEN>\n\t\t<MUNG-ROOM ,HERE \"Noxious vapors prevent your entry.\">\n\t\t<JIGS-UP ,FATAL-VAPORS>)\n\t       (<VERB? MUNG THROW>\n\t\t<TELL \"The flask breaks into pieces.\" CR>\n\t\t<REMOVE ,PRSO>\n\t\t<JIGS-UP ,FATAL-VAPORS>)>>"
  },
  "PLEAK": {
   "name": "PLEAK",
   "file": "2actions.zil",
   "line": 1098,
   "endLine": 1102,
   "source": "<ROUTINE PLEAK ()\n    <COND (<VERB? TAKE>\n\t   <TELL <PICK-ONE ,YUKS> CR>)\n\t  (<VERB? PLUG>\n\t   <TELL \"The leak is too high above you to reach.\" CR>)>>"
  },
  "ICEBOOM": {
   "name": "ICEBOOM",
   "file": "2actions.zil",
   "line": 1104,
   "endLine": 1109,
   "source": "<ROUTINE ICEBOOM ()\n    <MUNG-ROOM ,HERE\n\"The entrance is blocked by sticky orange rubble. Probably some careless\nadventurer was playing with blasting cakes.\">\n    <JIGS-UP\n\"You have been blasted to smithereens (wherever they are).\">>"
  },
  "MAGNET-ROOM-FCN": {
   "name": "MAGNET-ROOM-FCN",
   "file": "2actions.zil",
   "line": 1111,
   "endLine": 1135,
   "source": "<ROUTINE MAGNET-ROOM-FCN (RARG)\n\t<COND (<EQUAL? .RARG ,M-LOOK>\n\t       <TELL\n\"You are in a circular room with a low ceiling. There are exits to\nthe east and southeast.\" CR>)\n\t      (<AND <EQUAL? .RARG ,M-ENTER>\n\t\t    ,CAROUSEL-FLIP-FLAG>\n\t       <COND (,CAROUSEL-ZOOM-FLAG\n\t\t      <JIGS-UP <COND (<EQUAL? ,ADVENTURER ,WINNER>\n\"According to Prof. TAA of GUE Tech, the rapidly changing magnetic\nfields in the room are intense enough to electrocute you.\nI really don't know, but in any event, something just killed you.\" )\n\t\t\t\t     (T\n\"According to Prof. TAA of GUE Tech, the magnetic fields in the room are\nintense enough to fry the delicate innards of the robot. I really don't\nknow, but in any event, smoke pours from its ears and it has stopped moving.\")>>)\n\t\t     (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t      <TELL\n\"As you enter, your compass starts spinning wildly.\" CR>\n\t\t      <COND (<NOT ,COMPASS-KLUDGE>\n\t\t\t     <TELL\n\"What compass, you ask? The one which allows you to specify compass directions\nfor movement.\">\n\t\t\t     <SETG COMPASS-KLUDGE T>)>\n\t\t      <CRLF>)>)>>"
  },
  "MAGNET-ROOM-EXIT": {
   "name": "MAGNET-ROOM-EXIT",
   "file": "2actions.zil",
   "line": 1139,
   "endLine": 1153,
   "source": "<ROUTINE MAGNET-ROOM-EXIT ()\n\t<COND (<AND ,CAROUSEL-FLIP-FLAG <EQUAL? ,WINNER ,ADVENTURER>>\n\t       <TELL \"You cannot get your bearings...\" CR CR>\n\t       <COND (<PROB 50>\n\t\t      ,MACHINE-ROOM)\n\t\t     (T\n\t\t      ,TEA-ROOM)>)\n\t      (<EQUAL? ,PRSO ,P?EAST>\n\t       ,MACHINE-ROOM)\n\t      (<OR <EQUAL? ,PRSO ,P?SE>\n\t\t   <EQUAL? ,PRSO ,P?OUT>>\n\t       ,TEA-ROOM)\n\t      (T\n\t       <TELL \"You can't go that way.\" CR>\n\t       <RFALSE>)>>"
  },
  "BUTTONS": {
   "name": "BUTTONS",
   "file": "2actions.zil",
   "line": 1159,
   "endLine": 1188,
   "source": "<ROUTINE BUTTONS ()\n\t<COND (<VERB? PUSH>\n\t       <COND (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t      <JIGS-UP\n\"There is a giant spark and you are fried to a crisp.\">)\n\t\t     (<EQUAL? ,PRSO ,SQUARE-BUTTON>\n\t\t      <COND (,CAROUSEL-ZOOM-FLAG\n\t\t\t     <TELL \"Nothing seems to happen.\" CR>)\n\t\t\t    (ELSE\n\t\t\t     <SETG CAROUSEL-ZOOM-FLAG T>\n\t\t      \t     <TELL \"The whirring increases in intensity.\" CR>)>)\n\t\t     (<EQUAL? ,PRSO ,ROUND-BUTTON>\n\t\t      <COND (,CAROUSEL-ZOOM-FLAG\n\t\t\t     <SETG CAROUSEL-ZOOM-FLAG <>>\n\t\t      \t     <TELL \"The whirring decreases in intensity.\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL \"Nothing seems to happen.\" CR>)>)\n\t\t     (<EQUAL? ,PRSO ,TRIANGULAR-BUTTON>\n\t\t      <SETG CAROUSEL-FLIP-FLAG <NOT ,CAROUSEL-FLIP-FLAG>>\n\t\t      <COND (<IN? ,IRON-BOX ,CAROUSEL-ROOM>\n\t\t\t     <TELL\n\"A dull thump is heard in the distance.\" CR>\n\t\t\t     <COND (<FSET? ,IRON-BOX ,INVISIBLE>\n\t\t\t\t    <FCLEAR ,IRON-BOX ,INVISIBLE>)\n\t\t\t\t   (T\n\t\t\t\t    <FSET ,IRON-BOX ,INVISIBLE>)>\n\t\t\t     <COND (<NOT <FSET? ,IRON-BOX ,INVISIBLE>>\n\t\t\t\t    <FCLEAR ,CAROUSEL-ROOM ,TOUCHBIT>)>\n\t\t\t     T)\n\t\t\t    (T <TELL \"Click.\" CR>)>)>)>>"
  },
  "SPHERE-FCN": {
   "name": "SPHERE-FCN",
   "file": "2actions.zil",
   "line": 1192,
   "endLine": 1224,
   "source": "<ROUTINE SPHERE-FCN (\"AUX\" FL)\n\t#DECL ((FL) <OR ATOM FALSE>)\n\t<COND (<AND <NOT ,CAGE-SOLVE-FLAG> <VERB? TAKE MOVE PUT>>\n\t       <SET FL T>)\n\t      (T <SET FL <>>)>\n\t<COND (<AND .FL <EQUAL? ,ADVENTURER ,WINNER>>\n\t       <TELL\n\"As you reach for the sphere, a solid steel cage falls from the ceiling\nto entrap you. To make matters worse, poisonous gas starts coming\ninto the room.\" CR CR>\n\t       <COND (<IN? ,ROBOT ,HERE>\n\t\t      <MOVE ,ROBOT ,IN-CAGE>\n\t\t      <FSET ,ROBOT ,NDESCBIT>)>\n\t       <GOTO ,IN-CAGE>\n\t       <MOVE ,CAGE ,HERE>\n\t       <FSET ,CAGE ,NDESCBIT>\n\t       <FCLEAR ,CAGE ,INVISIBLE>\n\t       <ENABLE <QUEUE I-SPHERE 6>>\n\t       T)\n\t      (.FL\n\t       <FSET ,PALANTIR-1 ,INVISIBLE>\n\t       <REMOVE ,ROBOT>\n\t       <FSET ,PRSO ,INVISIBLE>\n\t       <MOVE ,CAGE ,CAGE-ROOM>\n\t       <FCLEAR ,CAGE ,INVISIBLE>\n\t       <JIGS-UP\n\"As the robot reaches for the sphere, a solid steel cage falls from the\nceiling, trapping him. You can faintly hear his last words: \\\"Whirr,\nbuzz, click!\\\" A cloud of smoke rising from beneath the cage confirms\nyour fears about the fate of your brave mechanical friend.\">\n\t       T)\n\t      (<VERB? LOOK-INSIDE EXAMINE>\n\t       <PALANTIR>)>>"
  },
  "I-SPHERE": {
   "name": "I-SPHERE",
   "file": "2actions.zil",
   "line": 1226,
   "endLine": 1232,
   "source": "<ROUTINE I-SPHERE ()\n\t <COND (<EQUAL? ,HERE ,CAGE-ROOM ,IN-CAGE>\n\t\t<FSET ,PALANTIR-1 ,INVISIBLE>\n\t\t<MUNG-ROOM ,CAGE-ROOM\n\"You are stopped by a cloud of poisonous gas.\">\n\t\t<JIGS-UP\n\"Time passes...and you die from some obscure poisoning.\">)>>"
  },
  "IN-CAGE-FCN": {
   "name": "IN-CAGE-FCN",
   "file": "2actions.zil",
   "line": 1234,
   "endLine": 1235,
   "source": "<ROUTINE IN-CAGE-FCN (RARG)\n    <COND (,CAGE-SOLVE-FLAG <SETG HERE ,CAGE-ROOM>)>>"
  },
  "ROBOT-FCN": {
   "name": "ROBOT-FCN",
   "file": "2actions.zil",
   "line": 1237,
   "endLine": 1306,
   "source": "<ROUTINE ROBOT-FCN (\"OPTIONAL\" (RARG ,M-OBJECT))\n\t<COND (<EQUAL? ,WINNER ,ROBOT>\n\t       <COND (<VERB? SGIVE> <RFALSE>)\n\t\t     (<VERB? FOLLOW>\n\t\t      <TELL\n\"\\\"My memory circuits are not that advanced. I can move as directed,\nthough.\\\"\" CR>)\n\t\t     (<AND <VERB? RAISE TAKE MOVE> <EQUAL? ,PRSO ,CAGE>>\n\t\t      <TELL\n\"The cage shakes and is hurled across the room. It's hard to\nsay, but the robot appears to be smiling.\" CR CR>\n\t\t      <DISABLE <INT I-SPHERE>>\n\t\t      <SETG WINNER ,ADVENTURER>\n\t\t      <GOTO ,CAGE-ROOM>\n\t\t      <MOVE ,MANGLED-CAGE ,CAGE-ROOM>\n\t\t      <FCLEAR ,ROBOT ,NDESCBIT>\n\t\t      <FSET ,PALANTIR-1 ,TAKEBIT>\n\t\t      <MOVE ,ROBOT ,CAGE-ROOM>\n\t\t      <SETG CAGE-SOLVE-FLAG T>)\n\t\t     (<VERB? EAT DRINK>\n\t\t      <COND (<IN? ,ADVENTURER ,HERE>\n\t\t\t     <TELL\n\"\\\"I am sorry but that is difficult for a being with no mouth.\\\"\" CR>)>\n\t\t      <RTRUE>)\n\t\t     (<AND <PROB 2>\n\t\t\t   <EQUAL? <META-LOC ,ADVENTURER> ,HERE>>\n\t\t      <TELL\n\"\\\"Buzz! Buzz! Buzz! My circuits are getting rusty. Try again.\\\"\" CR>)\n\t\t     (<VERB? READ EXAMINE>\n\t\t      <COND (<EQUAL? <META-LOC ,ADVENTURER> ,HERE>\n\t\t\t     <TELL\n\"\\\"My vision is not sufficiently acute to do that.\\\"\" CR>)>\n\t\t      <RTRUE>)\n\t\t     (<VERB? DROP PUT THROW>\n\t\t      <COND (<NOT <EQUAL? <META-LOC ,ADVENTURER> ,HERE>>\n\t\t\t     <RFALSE>)\n\t\t\t    (<IN? ,PRSO ,ROBOT>\n\t\t\t     <TELL \"\\\"Whirr, buzz, click!\\\"\" CR>\n\t\t\t     <RFALSE>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"\\\"Click! I don't have that. Buzz! Whirr!\\\"\" CR>)>)\n\t\t     (<OR <VERB? WALK>\n\t\t\t  <AND <VERB? TAKE PUSH TURN>\n\t\t\t       <NOT <FSET? ,PRSO ,ACTORBIT>>>>\n\t\t      <COND (<NOT <EQUAL? <META-LOC ,ADVENTURER> ,HERE>>\n\t\t\t     <RFALSE>)\n\t\t\t    (<PROB 80>\n\t\t\t     <TELL \"\\\"Whirr, buzz, click!\\\"\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL \"\\\"Buzz, click, whirr!\\\"\" CR>)>\n\t\t      <RFALSE>)\n\t\t     (T\n\t\t      <COND (<EQUAL? <META-LOC ,ADVENTURER> ,HERE>\n\t\t\t     <TELL\n\"\\\"My programming is insufficient to allow me to perform that task.\\\"\" CR>)>\n\t\t      <RTRUE>)>)\n\t      (<VERB? OPEN LOOK-INSIDE CLOSE>\n\t       <TELL \"There's no access panel or door on the robot.\" CR>)\n\t      (<AND <VERB? GIVE>\n\t\t    <EQUAL? ,PRSI ,ROBOT>>\n\t       <MOVE ,PRSO ,ROBOT>\n\t       <TELL \"The robot gladly takes the \"\n\t\t     D ,PRSO\n\t\t     \" and nods his head-like appendage in thanks.\" CR>)\n\t      (<VERB? THROW MUNG>\n\t       <TELL\n\"The robot falls to the ground and (being of shoddy construction)\ndisintegrates before your eyes.\" CR>\n\t       <REMOVE <COND (<VERB? THROW> ,PRSI) (,PRSO)>>)>>"
  },
  "BILLS-OBJECT": {
   "name": "BILLS-OBJECT",
   "file": "2actions.zil",
   "line": 1314,
   "endLine": 1320,
   "source": "<ROUTINE BILLS-OBJECT ()\n\t<SETG BANK-SOLVE-FLAG T>\n\t<COND (<VERB? BURN>\n\t       <TELL \"Nothing like having money to burn!\" CR>\n\t       <RFALSE>)\n\t      (<VERB? EAT>\n\t       <TELL \"Talk about eating rich foods!\" CR>)>>"
  },
  "BKLEAVEE": {
   "name": "BKLEAVEE",
   "file": "2actions.zil",
   "line": 1322,
   "endLine": 1328,
   "source": "<ROUTINE BKLEAVEE (\"OPTIONAL\" (RM ,TELLER-EAST))\n    #DECL ((RM) OBJECT)\n    <COND (<OR <HELD? ,BILLS> <HELD? ,PORTRAIT>>\n\t   <TELL\n\"An alarm rings briefly, and an invisible force bars your way.\" CR>\n\t   <RFALSE>)\n\t  (T .RM)>>"
  },
  "BKLEAVEW": {
   "name": "BKLEAVEW",
   "file": "2actions.zil",
   "line": 1330,
   "endLine": 1331,
   "source": "<ROUTINE BKLEAVEW ()\n    <BKLEAVEE ,TELLER-WEST>>"
  },
  "DEPOSITORY-FCN": {
   "name": "DEPOSITORY-FCN",
   "file": "2actions.zil",
   "line": 1359,
   "endLine": 1361,
   "source": "<ROUTINE DEPOSITORY-FCN (RARG)\n\t<COND (<EQUAL? .RARG ,M-ENTER>\n\t       <SETG SCOL-ROOM <LKP ,PRSO ,SCOL-ROOMS>>)>>"
  },
  "TELLER-ROOM": {
   "name": "TELLER-ROOM",
   "file": "2actions.zil",
   "line": 1363,
   "endLine": 1374,
   "source": "<ROUTINE TELLER-ROOM (RARG)\n    <COND (<EQUAL? .RARG ,M-LOOK>\n\t   <TELL\n\"You are in a small room, which was used by a bank officer who retrieved\nsafety deposit boxes for the customer. On the north side of the room is a\nsign which reads  \\\"Viewing Room\\\". On the \">\n\t   <COND (<EQUAL? ,HERE ,TELLER-WEST> <TELL \"west\">)\n\t\t (T <TELL \"east\">)>\n\t   <TELL \" side of the room, above an open door, is a sign reading:|\n|\n          BANK PERSONNEL ONLY|\n\" CR>)>>"
  },
  "SCOL-OBJECT": {
   "name": "SCOL-OBJECT",
   "file": "2actions.zil",
   "line": 1376,
   "endLine": 1384,
   "source": "<ROUTINE SCOL-OBJECT (\"OPTIONAL\" (OBJ <>))\n    <COND (<VERB? PUSH MOVE TAKE RUB>\n\t   <TELL \"As you try, your hand seems to go through it.\" CR>)\n\t  (<AND <VERB? ATTACK> ,PRSI>\n\t   <TELL \"The \" D ,PRSI \" goes through it.\" CR>)\n\t  (<AND <VERB? THROW OVERBOARD> <EQUAL? ,PRSI ,CURTAIN .OBJ>>\n\t   <COND (<IN? ,PRSO ,WINNER>\n\t\t  <V-THROUGH ,PRSO>)\n\t\t (T <TELL \"You don't have that!\" CR>)>)>>"
  },
  "GET-WALL": {
   "name": "GET-WALL",
   "file": "2actions.zil",
   "line": 1386,
   "endLine": 1392,
   "source": "<ROUTINE GET-WALL (RM \"AUX\" W)\n    #DECL ((RM) OBJECT)\n    <SET W ,SCOL-WALLS>\n    <REPEAT ()\n\t<COND (<EQUAL? <GET .W 0> .RM>\n\t       <RETURN .W>)\n\t      (T <SET W <REST .W 6>>)>>>"
  },
  "SCOLWALL": {
   "name": "SCOLWALL",
   "file": "2actions.zil",
   "line": 1394,
   "endLine": 1398,
   "source": "<ROUTINE SCOLWALL ()\n    <COND (<AND <VERB? THROW OVERBOARD PUT>\n\t\t<EQUAL? ,HERE ,SCOL-ACTIVE>\n\t\t<EQUAL? ,PRSI <GET <GET-WALL ,HERE> 1>>>\n\t   <SCOL-OBJECT ,PRSI>)>>"
  },
  "SCOL-GO": {
   "name": "SCOL-GO",
   "file": "2actions.zil",
   "line": 1400,
   "endLine": 1405,
   "source": "<ROUTINE SCOL-GO (OBJ)\n\t #DECL ((OBJ) OBJECT)\n\t <SETG SCOL-ACTIVE ,SCOL-ROOM>\n\t <COND (.OBJ <SCOL-OBJ .OBJ 0 ,SCOL-ROOM>)\n\t       (T\n\t        <SCOL-THROUGH 12 ,SCOL-ROOM>)>>"
  },
  "SCOL-OBJ": {
   "name": "SCOL-OBJ",
   "file": "2actions.zil",
   "line": 1407,
   "endLine": 1417,
   "source": "<ROUTINE SCOL-OBJ (OBJ CINT RM)\n    #DECL ((OBJ) OBJECT (CINT) FIX (RM) OBJECT)\n    <ENABLE <QUEUE I-CURTAIN .CINT>>\n    <MOVE .OBJ .RM>\n    <COND (<EQUAL? .RM ,DEPOSITORY>\n\t   <TELL \"The \" D .OBJ \" passes through the wall and vanishes.\" CR>)\n\t  (T\n\t   <TELL \"The curtain dims slightly as the \"\n\t\t D .OBJ \" passes through.\" CR>\n\t   <SETG SCOL-ROOM <>>\n\t   T)>>"
  },
  "SCOL-THROUGH": {
   "name": "SCOL-THROUGH",
   "file": "2actions.zil",
   "line": 1419,
   "endLine": 1423,
   "source": "<ROUTINE SCOL-THROUGH (CINT RM)\n    #DECL ((CINT) FIX (RM) OBJECT)\n    <ENABLE <QUEUE I-CURTAIN .CINT>>\n    <TELL \"You feel somewhat disoriented as you pass through...\" CR CR>\n    <GOTO .RM>>"
  },
  "I-CURTAIN": {
   "name": "I-CURTAIN",
   "file": "2actions.zil",
   "line": 1427,
   "endLine": 1441,
   "source": "<ROUTINE I-CURTAIN ()\n    <SETG SCOL-ACTIVE <>>\n    <COND (<EQUAL? ,HERE ,VAULT>\n\t   <JIGS-UP\n\"A metallic voice says \\\"Hello, Intruder! Your unauthorized presence\nin the vault of the Bank of Zork has set off all sorts of nasty surprises,\nmost of which are fatal. This message brought to you by the Frobozz Magic\nVault Company.\\\"\">)\n\t  (<EQUAL? ,HERE ,VIEWING-EAST ,VIEWING-WEST ,SMALL-ROOM>\n\t   <TELL \"You hear a faint voice say \\\"Curtain Door Closed.\\\"\" CR>\n\t   <COND (<EQUAL? ,HERE ,SMALL-ROOM>\n\t          <COND (,ZGNOME-FLAG <RTRUE>)\n\t\t        (T\n\t\t         <ENABLE <QUEUE I-ZGNOME 3>>\n\t\t         <SETG ZGNOME-FLAG T>)>)>)>>"
  },
  "I-ZGNOME": {
   "name": "I-ZGNOME",
   "file": "2actions.zil",
   "line": 1445,
   "endLine": 1460,
   "source": "<ROUTINE I-ZGNOME ()\n         <COND (<EQUAL? ,HERE ,SMALL-ROOM>\n\t\t<ENABLE <QUEUE I-ZGNOME-OUT 12>>\n\t\t<TELL\n\"An epicene gnome of Zurich wearing a three-piece suit and carrying a\nsafety deposit box materializes in the room.\">\n\t\t<COND (<IN? ,WAND ,WINNER>\n\t\t       <TELL\n\" He notices the wand and dematerializes speedily.\" CR>)\n\t\t      (T\n\t\t       <TELL \" \\\"You seem to have\nforgotten to deposit your valuables,\\\" he says, tapping the lid of the\nbox impatiently. \\\"We don't usually allow customers to use the boxes\nhere, but we can make this ONE exception, I suppose...\\\" He looks\naskance at you over his wire-rimmed bifocals.\" CR>\n\t\t       <MOVE ,GNOME-OF-ZURICH ,HERE>)>)>>"
  },
  "BOX-F": {
   "name": "BOX-F",
   "file": "2actions.zil",
   "line": 1462,
   "endLine": 1463,
   "source": "<ROUTINE BOX-F ()\n\t <TELL \"The gnome clutches it possessively.\" CR>>"
  },
  "ZGNOME-FCN": {
   "name": "ZGNOME-FCN",
   "file": "2actions.zil",
   "line": 1465,
   "endLine": 1506,
   "source": "<ROUTINE ZGNOME-FCN ()\n    <COND (<VERB? TELL>\n\t   <SETG P-CONT <>>\n\t   <SETG QUOTE-FLAG <>>\n\t   <TELL\n\"The gnome appears increasingly impatient.\" CR>)\n\t  (<AND <VERB? GIVE THROW> <EQUAL? ,PRSI ,GNOME-OF-ZURICH>>\n\t   <COND (<GETPT ,PRSO ,P?VALUE>\n\t\t  <TELL\n\"The gnome carefully places the \" D ,PRSO  \" in the\ndeposit box. \\\"Let me show you the way out,\\\" he says, making it clear\nhe will be pleased to see the last of you. Then, you are momentarily\ndisoriented, and when you recover you are back at the Bank Entrance.\" CR>\n\t\t  <REMOVE ,GNOME-OF-ZURICH>\n\t\t  <REMOVE ,PRSO>\n\t\t  <DISABLE <INT I-ZGNOME-OUT>>\n\t\t  <GOTO ,BANK-ENTRANCE>\n\t\t  <RTRUE>)\n\t\t (<BOMB? ,PRSO>\n\t\t  <REMOVE ,GNOME-OF-ZURICH>\n\t\t  <MOVE ,PRSO ,HERE>\n\t\t  <DISABLE <INT I-ZGNOME>>\n\t\t  <DISABLE <INT I-ZGNOME-OUT>>\n\t\t  <TELL\n\"\\\"You are so very gracious. I really cannot accept.\\\" he says. He\ndisappears, a wry smile on his lips.\" CR>)\n\t\t (T\n\t\t  <TELL\n\"\\\"I wouldn't put THAT in a safety deposit box,\\\" remarks the gnome with\ndisdain, tossing it over his shoulder, where it disappears with an\nunderstated \\\"pop\\\".\" CR>\n\t\t  <REMOVE-CAREFULLY ,PRSO>\n\t\t  <RTRUE>)>)\n\t  (<VERB? ATTACK>\n\t   <TELL\n\"The gnome says \\\"Well, I never...\\\" and disappears with a snap of his\nfingers, leaving you alone.\" CR>\n\t   <REMOVE ,GNOME-OF-ZURICH>\n\t   <DISABLE <INT I-ZGNOME-OUT>>)\n\t  (T\n\t   <TELL\n\"The gnome appears increasingly impatient.\" CR>)>>"
  },
  "I-ZGNOME-OUT": {
   "name": "I-ZGNOME-OUT",
   "file": "2actions.zil",
   "line": 1508,
   "endLine": 1514,
   "source": "<ROUTINE I-ZGNOME-OUT ()\n         <REMOVE ,GNOME-OF-ZURICH>\n\t <COND (<EQUAL? ,HERE ,SMALL-ROOM>\n\t\t<TELL\n\"The gnome looks impatient: \\\"I may have another customer waiting;\nyou'll just have to fend for yourself, I'm afraid.\\\" He disappears,\nleaving you alone.\" CR>)>>"
  },
  "BOMB?": {
   "name": "BOMB?",
   "file": "2actions.zil",
   "line": 1516,
   "endLine": 1521,
   "source": "<ROUTINE BOMB? (O)\n\t<COND (<AND <EQUAL? .O ,BRICK>\n\t            <IN? ,FUSE ,BRICK>\n\t\t    <NOT <0? <GET <INT I-FUSE> ,C-ENABLED?>>>>\n\t       <RTRUE>)\n\t      (T <RFALSE>)>>"
  },
  "GO&LOOK": {
   "name": "GO&LOOK",
   "file": "2actions.zil",
   "line": 1527,
   "endLine": 1539,
   "source": "<ROUTINE GO&LOOK (RM \"AUX\" OHERE OLIT (OSEEN <>))\n\t #DECL ((RM) OBJECT)\n\t <SET OHERE ,HERE>\n\t <COND (<FSET? .OHERE ,TOUCHBIT>\n\t\t<SET OSEEN T>)>\n\t <SET OLIT ,LIT>\n\t <SETG HERE .RM>\n\t <SETG LIT <LIT? .RM>>\n\t <PERFORM ,V?LOOK>\n\t <COND (<NOT .OSEEN> <FCLEAR .OHERE ,TOUCHBIT>)>\n\t <SETG HERE .OHERE>\n\t <SETG LIT .OLIT>\n\t T>"
  },
  "TINY-ROOM-FCN": {
   "name": "TINY-ROOM-FCN",
   "file": "2actions.zil",
   "line": 1541,
   "endLine": 1549,
   "source": "<ROUTINE TINY-ROOM-FCN (RARG)\n    #DECL ((RARG) <OR FIX FALSE>)\n    <COND (<EQUAL? .RARG ,M-LOOK>\n\t   <TELL\n\"This is a tiny room carved out of the wall of the ravine. There is\nan exit down a precarious climb. \">\n\t   <P-DOOR \"north\" ,LID-1 ,KEYHOLE-1>\n\t   <RTRUE>)\n\t  (<NOT <VERB? LOOK>> <PCHECK> <RFALSE>)>>"
  },
  "DREARY-ROOM-FCN": {
   "name": "DREARY-ROOM-FCN",
   "file": "2actions.zil",
   "line": 1551,
   "endLine": 1560,
   "source": "<ROUTINE DREARY-ROOM-FCN (RARG)\n    #DECL ((RARG) <OR FIX FALSE>)\n    <COND (<EQUAL? .RARG ,M-LOOK>\n\t   <TELL\n\"This is a small and rather dreary room, eerily illuminated by a red glow\nemanating from a crack in one wall. The light falls upon a dusty wooden table\nin the center of the room. \">\n\t   <P-DOOR \"south\" ,LID-2 ,KEYHOLE-2>\n\t   <RTRUE>)>\n          (T <PCHECK> <RFALSE>)>"
  },
  "PCHECK": {
   "name": "PCHECK",
   "file": "2actions.zil",
   "line": 1562,
   "endLine": 1576,
   "source": "<ROUTINE PCHECK (\"AUX\" (LID <PLID>))\n\t#DECL ((LID) OBJECT)\n\t<SETG PLOOK-FLAG <>>\n\t<COND (<OR <IN? ,KEY ,KEYHOLE-1>\n\t\t   <IN? ,KEY ,KEYHOLE-2>>\n\t       <FSET ,KEY ,NDESCBIT>)\n\t      (T\n\t       <FCLEAR ,KEY ,NDESCBIT>)>\n\t<COND (<HELD? ,PLACE-MAT>\n\t       <SETG MUD-FLAG <>>)> ;\"HUH?\"\n\t<COND (,MUD-FLAG\n\t       <MOVE ,PLACE-MAT ,HERE>\n\t       <FSET ,PLACE-MAT ,NDESCBIT>)\n\t      (T\n\t       <FCLEAR ,PLACE-MAT ,NDESCBIT>)>>"
  },
  "P-DOOR": {
   "name": "P-DOOR",
   "file": "2actions.zil",
   "line": 1578,
   "endLine": 1596,
   "source": "<ROUTINE P-DOOR (STR LID KEYHOLE \"AUX\" F)\n\t#DECL ((STR) STRING (LID KEYHOLE) OBJECT)\n\t<COND (,PLOOK-FLAG <SETG PLOOK-FLAG <>> <RFALSE>)>\n\t<TELL \"On the \"\n\t      .STR\n\t      \" side of the room is a massive wooden door, which has a\nsmall window barred with iron. A formidable bolt lock is set within the\ndoor frame. A keyhole \">\n\t<COND (<NOT <FSET? .LID ,OPENBIT>>\n\t       <TELL \"covered by a thin metal lid \">)>\n\t<TELL \"lies within the lock.\">\n\t<COND (<SET F <FIRST? .KEYHOLE>>\n\t       <TELL \" A \" D .F\n\t\t     \" is in place within the keyhole.\">)>\n\t<COND (,MUD-FLAG\n\t       <TELL \" The edge of a place mat is visible under the door.\">\n\t       <COND (,MATOBJ\n\t\t      <TELL \" Lying on the place mat is a \" D ,MATOBJ \".\">)>)>\n\t<CRLF>>"
  },
  "PLID": {
   "name": "PLID",
   "file": "2actions.zil",
   "line": 1598,
   "endLine": 1602,
   "source": "<ROUTINE PLID (\"OPTIONAL\" (OBJ1 ,LID-1) (OBJ2 ,LID-2))\n    #DECL ((OBJ1 OBJ2) OBJECT)\n    <COND (<IN? .OBJ1 ,HERE>\n\t   .OBJ1)\n\t  (T .OBJ2)>>"
  },
  "PKH": {
   "name": "PKH",
   "file": "2actions.zil",
   "line": 1604,
   "endLine": 1610,
   "source": "<ROUTINE PKH (KEYHOLE \"OPTIONAL\" (THIS <>))\n    #DECL ((KEYHOLE) OBJECT (THIS) <OR ATOM FALSE>)\n    <COND (<AND <EQUAL? .KEYHOLE ,KEYHOLE-1> <NOT .THIS>>\n\t   ,KEYHOLE-2)\n\t  (<AND <NOT <EQUAL? .KEYHOLE ,KEYHOLE-1>> .THIS>\n\t   ,KEYHOLE-2)\n\t  (T ,KEYHOLE-1)>>"
  },
  "PKH-FCN": {
   "name": "PKH-FCN",
   "file": "2actions.zil",
   "line": 1612,
   "endLine": 1642,
   "source": "<ROUTINE PKH-FCN (\"AUX\" OBJ KH)\n    #DECL ((OBJ) OBJECT)\n    <COND (<VERB? LOOK-INSIDE>\n\t   <COND (<AND <FSET? ,LID-1 ,OPENBIT>\n\t\t       <FSET? ,LID-2 ,OPENBIT>\n\t\t       <NOT <FIRST? ,KEYHOLE-1>>\n\t\t       <NOT <FIRST? ,KEYHOLE-2>>\n\t\t       <LIT? <COND (<EQUAL? ,HERE ,DREARY-ROOM>\n\t\t\t\t    ,TINY-ROOM)\n\t\t\t\t   (T ,DREARY-ROOM)>>>\n\t\t  <TELL\n\"You can see a lighted room at the other end.\" CR>)\n\t\t (T\n\t\t  <TELL\n\"No light can be seen through the keyhole.\" CR>)>)\n\t  (<VERB? PUT>\n\t   <COND (<FSET? <PLID> ,OPENBIT>\n\t\t  <COND (<FIRST? <PKH ,PRSI T>>\n\t\t\t <TELL \"The keyhole is blocked.\" CR>)\n\t\t\t(<EQUAL? ,PRSO ,LETTER-OPENER ,KEY>\n\t\t\t <COND (<FIRST? <SET KH <PKH ,PRSI>>>\n\t\t\t\t<TELL\n\"There is a faint noise from behind the door and a small cloud of\ndust rises from beneath it.\" CR>\n\t\t\t\t<SET OBJ <FIRST? .KH>>\n\t\t\t\t<REMOVE .OBJ>\n\t\t\t\t<COND (,MUD-FLAG\n\t\t\t\t       <SETG MATOBJ .OBJ>)>\n\t\t\t\t<RFALSE>)>)\n\t\t\t(T <TELL \"The \" D ,PRSO \" doesn't fit.\" CR>)>)\n\t\t (T <TELL \"The lid is in the way.\" CR>)>)>>"
  },
  "PLID-FCN": {
   "name": "PLID-FCN",
   "file": "2actions.zil",
   "line": 1644,
   "endLine": 1659,
   "source": "<ROUTINE PLID-FCN ()\n    <COND (<VERB? OPEN RAISE MOVE>\n\t   <COND (<FSET? ,PRSO ,OPENBIT>\n\t\t  <TELL <RANDOM-ELEMENT ,DUMMY> CR>)\n\t\t (T <TELL \"The lid is now open.\" CR>)>\n\t   <FSET ,PRSO ,OPENBIT>)\n\t  (<VERB? CLOSE LOWER>\n\t   <COND (<FIRST? <COND (<EQUAL? ,HERE ,DREARY-ROOM>\n\t\t\t\t ,KEYHOLE-2)\n\t\t\t\t(T ,KEYHOLE-1)>>\n\t\t  <TELL \"The keyhole is occupied.\" CR>)\n\t\t (T\n\t\t  <TELL \"The lid covers the keyhole.\" CR>\n\t\t  <FCLEAR ,PRSO ,OPENBIT>)>)\n\t  (<VERB? LOOK-BEHIND>\n\t   <TELL \"There's a keyhole behind the lid.\" CR>)>>"
  },
  "ROOM?": {
   "name": "ROOM?",
   "file": "2actions.zil",
   "line": 1669,
   "endLine": 1675,
   "source": "<ROUTINE ROOM? (OBJ \"AUX\" NOBJ)\n\t <REPEAT ()\n\t\t <SET NOBJ <LOC .OBJ>>\n\t\t <COND (<NOT .NOBJ> <RFALSE>)\n\t\t       (<EQUAL? .NOBJ ,WINNER> <RFALSE>)\n\t\t       (<EQUAL? .NOBJ ,ROOMS> <RETURN .OBJ>)>\n\t\t <SET OBJ .NOBJ>>>"
  },
  "PALANTIR": {
   "name": "PALANTIR",
   "file": "2actions.zil",
   "line": 1677,
   "endLine": 1692,
   "source": "<ROUTINE PALANTIR ()\n\t <COND (<VERB? LOOK-INSIDE>\n\t\t<PALANTIR-LOOK <COND (<EQUAL? ,PRSO ,PALANTIR-1>\n\t\t\t\t      ,PALANTIR-2)\n\t\t\t\t     (<EQUAL? ,PRSO ,PALANTIR-2>\n\t\t\t\t      ,PALANTIR-3)\n\t\t\t\t     (<EQUAL? ,PRSO ,PALANTIR-3>\n\t\t\t\t      ,PALANTIR-1)\n\t\t\t\t     (T ,PALANTIR-4)>>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"There is something misty in the sphere. Perhaps if you were to look\ninto it...\" CR>)\n\t       (<AND <VERB? TAKE> <==? ,PRSO ,PALANTIR-3>>\n\t\t<PUTP ,PRSO ,P?LDESC <>>\n\t\t<RFALSE>)>>"
  },
  "DEAD-PALANTIR": {
   "name": "DEAD-PALANTIR",
   "file": "2actions.zil",
   "line": 1694,
   "endLine": 1763,
   "source": "<ROUTINE DEAD-PALANTIR (RARG \"AUX\" P)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are inside a huge crystalline sphere filled with thin \"\n\t\t<COND (<EQUAL? ,HERE ,DEAD-PALANTIR-1>\n\t\t       <SET P ,PALANTIR-1>\n\t\t       \"red\")\n\t\t      (<EQUAL? ,HERE ,DEAD-PALANTIR-2>\n\t\t       <SET P ,PALANTIR-2>\n\t\t       \"blue\")\n\t\t      (T <SET P ,PALANTIR-3> \"white\")>\n\" mist. The mist becomes \"\n\t\t<COND (<EQUAL? ,HERE ,DEAD-PALANTIR-1> \"blue\")\n\t\t      (<EQUAL? ,HERE ,DEAD-PALANTIR-2> \"white\")\n\t\t      (T \"black\")>\n\" to the west.\" CR>\n\t\t<TELL \"You strain to look out through the mist... \" CR>\n\t\t<COND (<FSET? .P ,TOUCHBIT>\n\t\t       <PALANTIR-LOOK .P T>)\n\t\t      (<EQUAL? .P ,PALANTIR-1>\n\t\t       <TELL\n\"You see a small room with a sign on the wall, but it is too blurry to\nread.\" CR>)\n\t\t      (<EQUAL? .P ,PALANTIR-2>\n\t\t       <TELL\n\"You look out into a large, dreary room with a great door and a huge table.\nThere is an odd glow to the mist.\" CR>)\n\t\t      (<EQUAL? .P ,PALANTIR-3>\n\t\t       <TELL\n\"A strange blurry room is barely visible.\">\n\t\t       <COND (<AND <IN? ,SERPENT ,AQUARIUM> <PROB 25>>\n\t\t\t      <TELL\n\" An odd sinuous shadow crosses the mist as you look.\">)>\n\t\t       <CRLF>)>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .RARG ,M-ENTER> <EQUAL? ,HERE ,DEAD-PALANTIR-4>>\n\t\t<TELL\n\"You follow a corridor of black mist into a black walled spherical\nroom.\">\n\t\t<COND (<IN? ,GENIE ,PENTAGRAM-ROOM>\n\t\t       <TELL\n\" The room is empty. A huge face looks down on you from outside and\nlaughs sardonically. It doesn't look like you're getting out of this\npredicament!\" CR>\n\t\t       <FINISH>)>\n\t\t<TELL\n\" As you enter, a huge and horrible face materializes out of the\nmist.|\n|\n\\\"What brings you here to trouble my imprisonment, wanderer?\\\"\nit asks. Hearing no immediate answer, it studies you for a moment.\" CR>\n\n\t\t<COND (<NOT <L? ,DEATHS 3>>\n\t\t       <TELL\n\"\\\"Not you again! This is getting tedious. You'll obviously never\nbe much help to me. Better luck next time, oh wondrous\nadventurer.\\\" The face disappears and everything goes black.\" CR>\n\t\t       <FINISH>)\n\t\t      (T\n\t\t       <TELL\n\"\\\"Perhaps you may be of some use to me in gaining my freedom from\nthis place. Return to your foolish quest! I shall not destroy you\nthis time. Mayhap you will repay this favor in kind someday.\\\" The\nface vanishes and the mist begins to swirl. When it clears you are\nreturned to the world of life.\" CR>\n\t\t<SETG DEAD <>>\n\t\t<GOTO ,INSIDE-BARROW>\n\t\t;<GOTO ,INSIDE-BARROW <>>\n\t\t;<TELL CR \"Inside the Barrow\" CR>\n\t\t<RTRUE>)>)>>"
  },
  "GLOBAL-PALANTIRS": {
   "name": "GLOBAL-PALANTIRS",
   "file": "2actions.zil",
   "line": 1765,
   "endLine": 1768,
   "source": "<ROUTINE GLOBAL-PALANTIRS ()\n\t <COND (<VERB? LOOK-INSIDE EXAMINE>\n\t\t<DEAD-PALANTIR ,M-LOOK>)\n\t       (<VERB? MUNG> <TELL \"The sphere is unbreakable.\" CR>)>>"
  },
  "PALANTIR-LOOK": {
   "name": "PALANTIR-LOOK",
   "file": "2actions.zil",
   "line": 1770,
   "endLine": 1800,
   "source": "<ROUTINE PALANTIR-LOOK (OBJ \"OPTIONAL\" (INSIDE? <>) \"AUX\" RM OHERE)\n\t <COND (<EQUAL? .OBJ ,PALANTIR-4>\n\t\t<TELL\n\"As you peer into the sphere, a strange vision takes shape...a huge and\nfearful face with yellow eyes. The face peers out at you expectantly.\" CR>\n\t\t<RTRUE>)>\n\t <SET RM <ROOM? .OBJ>>\n\t <COND (<OR <NOT .RM> <NOT <LIT? .RM>>>\n\t\t<TELL \"You see only darkness.\" CR>)\n\t       (<OR <IN? .OBJ .RM> <SEE-INSIDE? <LOC .OBJ>>>\n\t\t<SET OHERE ,HERE>\n\t\t<COND (.INSIDE?\n\t\t       <TELL\n\"As you peer through the mist, a strangely colored vision of a\nhuge room takes shape...\" CR CR>)\n\t\t      (T\n\t\t       <TELL\n\"As you peer into the sphere, a strange vision takes shape of\na distant room, which can be described clearly....\" CR CR>)>\n\t\t<FSET .OBJ ,INVISIBLE>\n\t\t<GO&LOOK .RM>\n\t\t<COND (<EQUAL? .OHERE .RM>\n\t\t       <TELL\n\"An astonished adventurer is staring into a crystal sphere.\" CR>)>\n\t\t<FCLEAR .OBJ ,INVISIBLE>\n\t\t<COND (<NOT .INSIDE?>\n\t\t       <TELL\n\"The vision fades, revealing only an ordinary crystal sphere.\" CR>)>)\n\t       (T\n\t\t<TELL \"You see only darkness.\" CR>)>\n\t T>"
  },
  "PWINDOW-FCN": {
   "name": "PWINDOW-FCN",
   "file": "2actions.zil",
   "line": 1802,
   "endLine": 1811,
   "source": "<ROUTINE PWINDOW-FCN ()\n    <COND (<VERB? LOOK-INSIDE>\n\t   <SETG PLOOK-FLAG T>\n\t   <COND (<FSET? ,PDOOR ,OPENBIT>\n\t\t  <TELL \"The door is open, dummy.\" CR>)\n\t\t (<EQUAL? ,HERE ,DREARY-ROOM>\n\t\t  <GO&LOOK ,TINY-ROOM>)\n\t\t (T <GO&LOOK ,DREARY-ROOM>)>)\n\t  (<VERB? THROUGH>\n\t   <TELL \"Perhaps if you were diced....\" CR>)>>"
  },
  "PDOOR-FCN": {
   "name": "PDOOR-FCN",
   "file": "2actions.zil",
   "line": 1813,
   "endLine": 1849,
   "source": "<ROUTINE PDOOR-FCN (\"AUX\" K)\n    <COND (<AND <VERB? LOOK-UNDER> ,MUD-FLAG>\n\t   <TELL \"The place mat is under the door.\" CR>)\n\t  (<VERB? UNLOCK>\n\t   <COND (<EQUAL? ,PRSI ,KEY>\n\t\t  <COND (<AND <SET K <FIRST? <PLID ,KEYHOLE-1 ,KEYHOLE-2>>>\n\t\t\t      <NOT <EQUAL? .K ,KEY>>>\n\t\t\t <TELL \"The keyhole is blocked.\" CR>)\n\t\t\t(T\n\t\t\t <TELL \"The door is now unlocked.\" CR>\n\t\t\t <SETG PUNLOCK-FLAG T>)>)\n\t\t (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t  <TELL \"It doesn't fit the lock.\" CR>)\n\t\t (T <TELL \"It can't be unlocked with that.\" CR>)>)\n\t  (<VERB? LOCK>\n\t   <COND (<EQUAL? ,PRSI ,KEY>\n\t\t  <TELL \"The door is locked.\" CR>\n\t\t  <SETG PUNLOCK-FLAG <>>\n\t\t  T)\n\t\t (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t  <TELL \"It doesn't fit the lock.\" CR>)\n\t\t (T <TELL \"It can't be locked with that.\" CR>)>)\n\t  (<VERB? PUT-UNDER>\n\t   <COND (<EQUAL? ,PRSO ,ROBOT-LABEL>\n\t\t  <TELL\n\"The paper is very small and vanishes under the door.\" CR>\n\t\t  <MOVE ,PRSO <COND (<EQUAL? ,HERE ,TINY-ROOM> ,DREARY-ROOM)\n\t\t\t\t    (T ,TINY-ROOM)>>)\n\t\t (<EQUAL? ,PRSO ,NEWSPAPER>\n\t\t  <TELL\n\"The newspaper crumples up and won't go under the door.\" CR>)>)\n\t  (<VERB? OPEN CLOSE>\n\t   <COND (,PUNLOCK-FLAG\n\t\t  <OPEN-CLOSE ,PRSO\n\t\t       \"The door is now open.\"\n\t\t       \"The door is now closed.\">)\n\t\t (T <TELL \"The door is locked.\" CR>)>)>>"
  },
  "PKEY-FCN": {
   "name": "PKEY-FCN",
   "file": "2actions.zil",
   "line": 1851,
   "endLine": 1856,
   "source": "<ROUTINE PKEY-FCN ()\n    <COND (<VERB? TURN>\n\t   <COND (,PUNLOCK-FLAG\n\t\t  <PERFORM ,V?LOCK ,PDOOR ,PRSO>)\n\t\t (T\n\t\t  <PERFORM ,V?UNLOCK ,PDOOR ,PRSO>)>)>>"
  },
  "PLACE-MAT-FCN": {
   "name": "PLACE-MAT-FCN",
   "file": "2actions.zil",
   "line": 1858,
   "endLine": 1874,
   "source": "<ROUTINE PLACE-MAT-FCN ()\n    <COND (<VERB? PUT-UNDER>\n\t   <COND (<EQUAL? ,PRSI ,PDOOR>\n\t          <TELL \"The place mat fits easily under the door.\" CR>\n\t          <MOVE ,PRSO ,HERE>\n\t          <SETG MUD-FLAG T>)\n\t\t (<EQUAL? ,PRSI ,WIZ-DOOR ,RIDDLE-DOOR ,CRYPT-DOOR>\n\t          <TELL \"There's not enough room under this door.\" CR>)>)\n\t  (<AND <VERB? TAKE MOVE> ,MATOBJ>\n \t   <MOVE ,MATOBJ ,HERE>\n\t   <TELL \"As the place mat is moved, a \"\n\t\t D\n\t\t ,MATOBJ\n\t\t \" falls from it and onto the floor.\" CR>\n\t   <SETG MATOBJ <>>\n\t   <SETG MUD-FLAG <>>\n\t   <RTRUE>)>>"
  },
  "WISH-FCN": {
   "name": "WISH-FCN",
   "file": "2actions.zil",
   "line": 1876,
   "endLine": 1885,
   "source": "<ROUTINE WISH-FCN ()\n\t <COND (<VERB? MAKE>\n\t        <COND (<AND <EQUAL? ,HERE ,WELL-BOTTOM>\n\t\t\t    <IN? ,COIN ,HERE>>\n\t\t       <TELL\n\"A whispering voice replies: \\\"Water makes the bucket go.\\\"\nUnfortunately, wishing makes the coin go....\" CR>\n\t\t      <REMOVE ,COIN>)\n\t\t      (T\n\t\t       <TELL \"No one is listening.\" CR>)>)>>"
  },
  "WELL-FCN": {
   "name": "WELL-FCN",
   "file": "2actions.zil",
   "line": 1887,
   "endLine": 1893,
   "source": "<ROUTINE WELL-FCN ()\n    \t<COND (<AND <FSET? ,PRSO ,TAKEBIT> <VERB? THROW PUT DROP>>\n\t       <TELL \"The \" D ,PRSO\n\t\t     \" is now sitting at the bottom of the well.\" CR>\n\t       <MOVE ,PRSO ,WELL-BOTTOM>)\n\t      (<VERB? CLIMB-UP CLIMB-DOWN CLIMB-FOO>\n\t       <TELL \"You can't climb the well.\" CR>)>>"
  },
  "MATCH-FCN": {
   "name": "MATCH-FCN",
   "file": "2actions.zil",
   "line": 1897,
   "endLine": 1926,
   "source": "<ROUTINE MATCH-FCN ( \"AUX\" CNT)\n\t <COND (<AND <VERB? LAMP-ON BURN> <EQUAL? ,PRSO ,MATCH>>\n\t\t<COND (<G? ,MATCH-COUNT 0>\n\t\t       <SETG MATCH-COUNT <- ,MATCH-COUNT 1>>)>\n\t\t<COND (<NOT <G? ,MATCH-COUNT 0>>\n\t\t       <TELL\n\t\t\t\"I'm afraid you have run out of matches.\" CR>)\n\t\t      (T\n\t\t       <FSET ,MATCH ,FLAMEBIT>\n\t\t       <FSET ,MATCH ,ONBIT>\n\t\t       <ENABLE <QUEUE I-MATCH 2>>\n\t\t       <TELL \"One of the matches starts to burn.\" CR>)>)\n\t       (<AND <VERB? LAMP-OFF> <FSET? ,MATCH ,FLAMEBIT>>\n\t\t<TELL \"The match is out.\" CR>\n\t\t<FCLEAR ,MATCH ,FLAMEBIT>\n\t\t<FCLEAR ,MATCH ,ONBIT>\n\t\t<QUEUE I-MATCH 0>\n\t\tT)\n\t       (<VERB? COUNT>\n\t\t<TELL \"You have \">\n\t\t<SET CNT <- ,MATCH-COUNT 1>>\n\t\t<TELL N .CNT \" match\">\n\t\t<COND (<NOT <1? .CNT>> <TELL \"es.\">) (T <TELL \".\">)>\n\t\t<CRLF>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,MATCH ,ONBIT>\n\t\t       <TELL \"A match is burning.\">)\n\t\t      (T\n\t\t       <TELL \"No match is burning.\">)>\n\t\t<CRLF>)>>"
  },
  "I-MATCH": {
   "name": "I-MATCH",
   "file": "2actions.zil",
   "line": 1928,
   "endLine": 1931,
   "source": "<ROUTINE I-MATCH ()\n\t <TELL \"The match has gone out.\" CR>\n\t <FCLEAR ,MATCH ,FLAMEBIT>\n\t <FCLEAR ,MATCH ,ONBIT>>"
  },
  "LANTERN": {
   "name": "LANTERN",
   "file": "2actions.zil",
   "line": 1943,
   "endLine": 1969,
   "source": "<ROUTINE LANTERN ()\n\t <COND (<AND <VERB? THROW> <==? ,PRSO ,LAMP>>\n\t\t<TELL\n\"The lamp has smashed into the floor, and the light has gone out.\" CR>\n\t\t<DISABLE <INT I-LANTERN>>\n\t\t<REMOVE ,LAMP>\n\t\t<MOVE ,BROKEN-LAMP ,HERE>)\n\t       (<VERB? LAMP-ON>\n\t\t<COND (<FSET? ,LAMP ,RMUNGBIT>\n\t\t       <TELL \"A burned-out lamp won't light.\" CR>)\n\t\t      (T\n\t\t       <ENABLE <INT I-LANTERN>>\n\t\t       <>)>)\n\t       (<VERB? LAMP-OFF>\n\t\t<COND (<FSET? ,LAMP ,RMUNGBIT>\n\t\t       <TELL \"The lamp has already burned out.\" CR>)\n\t\t      (T\n\t\t       <DISABLE <INT I-LANTERN>>\n\t\t       <>)>)\n\t       (<VERB? EXAMINE>\n\t\t<COND (<FSET? ,LAMP ,RMUNGBIT>\n\t\t       <TELL \"The lamp has burned out.\">)\n\t\t      (<FSET? ,LAMP ,ONBIT>\n\t\t       <TELL \"The lamp is on.\">)\n\t\t      (T\n\t\t       <TELL \"The lamp is turned off.\">)>\n\t\t<CRLF>)>>"
  },
  "I-LANTERN": {
   "name": "I-LANTERN",
   "file": "crufty.zil",
   "line": 7,
   "endLine": 8,
   "source": "<ROUTINE I-LANTERN ()\n\t <LIGHT-INT ,LAMP I-LANTERN LAMP-TABLE>>"
  },
  "LIGHT-INT": {
   "name": "LIGHT-INT",
   "file": "2actions.zil",
   "line": 1977,
   "endLine": 1986,
   "source": "<ROUTINE LIGHT-INT (OBJ TBL TICK)\n\t <COND (<0? .TICK>\n\t\t<FCLEAR .OBJ ,ONBIT>\n\t\t<FSET .OBJ ,RMUNGBIT>)>\n\t <COND (<OR <HELD? .OBJ> <IN? .OBJ ,HERE>>\n\t\t<COND (<0? .TICK>\n\t\t       <TELL\n\"You'd better have more light than from the \" D .OBJ \".\" CR>)\n\t\t      (T\n\t\t       <TELL <GET .TBL 1> CR>)>)>>"
  },
  "RIDDLE-ROOM-FCN": {
   "name": "RIDDLE-ROOM-FCN",
   "file": "2actions.zil",
   "line": 2007,
   "endLine": 2041,
   "source": "<ROUTINE RIDDLE-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a room which is bare on all sides. There is an exit down in\nthe northwest corner of the room. To the east is a great \">\n\t\t<COND (<FSET? ,RIDDLE-DOOR ,OPENBIT>\n\t\t       <TELL \"open\">)\n\t\t      (T\n\t\t       <TELL \"closed\">)>\n\t\t<TELL \" door made of\nstone. Above the stone, the following words are written: \\\"No man shall\npass this door without solving this riddle:|\n|\n  What is tall as a house,|\n    round as a cup,|\n      and all the king's horses|\n        can't draw it up?\\\"|\n\">)\n\t       (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? ANSWER SAY>\n\t\t       <COND (<FSET? ,RIDDLE-DOOR ,OPENBIT>\n\t\t\t      <RFALSE>)\n\t\t\t     (<OR <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?WELL>\n\t\t\t\t  <EQUAL? <GET ,P-LEXV <+ ,P-CONT 2>> ,W?WELL>>\n\t\t\t      <TELL\n\"There is a deafening clap of thunder and the stone door\nquietly swings open to reveal a passageway beyond.\" CR>\n\t\t\t      <SCORE-UPD 5>\n\t\t\t      <FSET ,RIDDLE-DOOR ,OPENBIT>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"A hollow laugh seems to come from the stone door.\" CR>)>\n\t\t      <SETG P-CONT <>>\n\t\t      <SETG QUOTE-FLAG <>>\n\t\t      <RTRUE>)>)>>"
  },
  "RIDDLE-DOOR-FCN": {
   "name": "RIDDLE-DOOR-FCN",
   "file": "2actions.zil",
   "line": 2043,
   "endLine": 2054,
   "source": "<ROUTINE RIDDLE-DOOR-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<FSET? ,RIDDLE-DOOR ,OPENBIT>\n\t\t       <TELL \"It is open!\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The door can only be opened by answering the riddle.\" CR>)>)\n\t       (<VERB? CLOSE>\n\t\t<COND (<FSET? ,RIDDLE-DOOR ,OPENBIT>\n\t\t       <TELL \"Not a chance. The door weighs many tons.\" CR>)\n\t\t      (T\n\t\t       <TELL \"It is closed!\" CR>)>)>>"
  },
  "RIDDLE-PSEUDO": {
   "name": "RIDDLE-PSEUDO",
   "file": "2actions.zil",
   "line": 2061,
   "endLine": 2063,
   "source": "<ROUTINE RIDDLE-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"Use the \\\"Look\\\" command.\" CR>)>>"
  },
  "MAGIC-ACTOR": {
   "name": "MAGIC-ACTOR",
   "file": "2actions.zil",
   "line": 2065,
   "endLine": 2137,
   "source": "<ROUTINE MAGIC-ACTOR (\"AUX\" V)\n\t <COND (,SPELL?\n\t\t<COND (<EQUAL? ,SPELL? ,S-FALL>\n\t\t       <COND (<OR <VERB? CLIMB-UP CLIMB-DOWN CROSS>\n\t\t\t\t  <AND <VERB? WALK>\n\t\t\t\t       <GETPT ,HERE ,P?DOWN>>>\n\t\t\t      <SET V <GETPT ,HERE ,P?GLOBAL>>\n\t\t\t      <COND (<ZMEMQB ,BRIDGE .V <PTSIZE .V>>\n\t\t\t\t     <JIGS-UP\n\"You find yourself drawn toward the edge of the bridge. You peer over\nthe side. Oops, that was clumsy of you! You tripped on something and\nfell in. Too bad.\">)\n\t\t\t\t    (<PROB 25>\n\t\t\t\t     <JIGS-UP\n\"For some odd reason you have tripped on your own feet, or perhaps an\ninvisible cord stretched across the path. The resulting fall seems to\nhave done you in.\">)\n\t\t\t\t   (T\n\t\t\t\t    <TELL\n\"You just tripped on an invisible cord, or perhaps your own feet. But\nthis must be your lucky day, as you managed to regain your balance\nbefore what could have been a fatal fall.\" CR>)>)\n\t\t\t     (<VERB? BOARD>\n\t\t\t      <TELL\n\"You get in the \" D ,PRSO \" but you fall out again, almost as though\nan invisible hand had tipped it over.\" CR>)>)\n\t\t      (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t       <COND (<VERB? DIAGNOSE WAIT> <RFALSE>)\n\t\t\t     (<VERB? WALK>\n<TELL \"I suppose you plan to do that by flapping your arms?\" CR>)\n\t\t\t     (<VERB? DROP>\n\t\t\t      <MOVE ,PRSO ,HERE>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" drops to the ground.\" CR>)\n\t\t\t     (<AND <VERB? TAKE> <IN? ,PRSO ,HERE>>\n\t\t\t      <TELL\n\"You can't reach that! It's on the ground.\" CR>)>)\n\t\t      (<EQUAL? ,SPELL? ,S-FREEZE>\n\t\t       <COND (<VERB? DIAGNOSE WAIT> <RFALSE>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You are frozen solid. You might as well wait it out, because you\ncan't do anything else in this state.\" CR>)>)\n\t\t      (<AND <EQUAL? ,SPELL? ,S-FENCE>\n\t\t\t    <VERB? WALK>>\n\t\t       <TELL\n\"An invisible fence of magical force bars your way.\" CR>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,SPELL? ,S-FIERCE>\n\t\t\t    <SET V <INFESTED? ,HERE>>>\n\t\t       <COND (<VERB? ATTACK MUNG> <RFALSE>)\n\t\t\t     (T\n\t\t\t      <FORCE-FIGHT .V>\n\t\t\t      <RTRUE>)>)\n\t\t      (<AND <EQUAL? ,SPELL? ,S-FERMENT>\n\t\t\t    <VERB? WALK>\n\t\t\t    <IN? ,WINNER ,HERE>>\n\t\t       <TELL\n\"Oops, you seem a little unsteady... I'm not sure you got where\nyou intended going.\" CR CR>\n\t\t       <RANDOM-WALK>)\n\t\t      (<AND <EQUAL? ,SPELL? ,S-FEAR>\n\t\t\t    <SET V <INFESTED? ,HERE>>>\n\t\t       <TELL\n\"All at once, you are overcome by fear! There's is a \" D .V \" in here!\nMaybe it's after you! \">\n\t\t       <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t\t      <TELL\n\"You huddle in the corner, terrified.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"You run from the room screaming in terror!\" CR CR>\n\t\t\t      <RANDOM-WALK>)>)>)>>"
  },
  "RANDOM-WALK": {
   "name": "RANDOM-WALK",
   "file": "2actions.zil",
   "line": 2139,
   "endLine": 2160,
   "source": "<ROUTINE RANDOM-WALK (\"AUX\" P TX L S (D <>))\n\t <SET P 0>\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<COND (.D\n\t\t\t       <SET S ,SPELL?>\n\t\t\t       <SETG SPELL? <>>\n\t\t\t       <SETG WINNER ,ADVENTURER>\n\t\t\t       <MOVE ,WINNER ,HERE>\n\t\t\t       <DO-WALK .D>\n\t\t\t       <SETG SPELL? .S>)>\n\t\t\t<RETURN>)\n\t\t       (T\n\t\t\t<SET TX <GETPT ,HERE .P>>\n\t\t\t<SET L <PTSIZE .TX>>\n\t\t\t<COND (<OR <EQUAL? .L ,UEXIT>\n\t\t\t\t   <AND <EQUAL? .L ,CEXIT>\n\t\t\t\t\t<VALUE <GETB .TX ,CEXITFLAG>>>\n\t\t\t\t   <AND <EQUAL? .L ,DEXIT>\n\t\t\t\t\t<FSET? <GETB .TX ,DEXITOBJ> ,OPENBIT>>>\n\t\t\t       <COND (<NOT .D> <SET D .P>)\n\t\t\t\t     (<PROB 50> <SET D .P>)>)>)>>>"
  },
  "FORCE-FIGHT": {
   "name": "FORCE-FIGHT",
   "file": "2actions.zil",
   "line": 2162,
   "endLine": 2168,
   "source": "<ROUTINE FORCE-FIGHT (V \"AUX\" W)\n\t <COND (<NOT <SET W <FIND-IN ,ADVENTURER ,WEAPONBIT>>>\n\t\t<SET W ,HANDS>)>\n\t <TELL\n\"You are maddened by an overwhelming ferocity, and attack the \"\nD .V \" instead.\" CR>\n\t <PERFORM ,V?ATTACK .V .W>>"
  },
  "DWINDOW-DESC": {
   "name": "DWINDOW-DESC",
   "file": "2actions.zil",
   "line": 2187,
   "endLine": 2192,
   "source": "<ROUTINE DWINDOW-DESC ()\n\t <TELL\n\"On the floor is a very small diamond shaped window which is \">\n\t <COND (,DIAMOND-SOLVE <TELL \"glowing serenely\">)\n\t       (T <TELL <GET ,DWDESCS ,DIAMOND-COUNT>>)>\n\t <TELL \".\" CR>>"
  },
  "DWINDOW-FCN": {
   "name": "DWINDOW-FCN",
   "file": "2actions.zil",
   "line": 2194,
   "endLine": 2202,
   "source": "<ROUTINE DWINDOW-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"The window is an integral part of the floor.\" CR>)\n\t       (<VERB? MUNG>\n\t\t<TELL\n\"The window is diamond-hard and cannot be broken.\" CR>)\n\t       (<VERB? EXAMINE LOOK-INSIDE>\n\t\t<DWINDOW-DESC>)>>"
  },
  "DIAMOND-MOTION": {
   "name": "DIAMOND-MOTION",
   "file": "2actions.zil",
   "line": 2204,
   "endLine": 2272,
   "source": "<ROUTINE DIAMOND-MOTION (RARG \"AUX\" DC DIR RM)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a room with oddly angled walls and passages in all directions.\nThe walls are made of some glassy substance.\" CR>\n\t\t<COND (<EQUAL? ,HERE ,DIAMOND-5>\n\t\t       <TELL\n\"A marble stairway leads upward.\">\n\t\t       <COND (,DIAMOND-SOLVE\n\t\t\t      <TELL\n\" The floor has swung down at the end of the stairway to reveal a secret\npassage leading down into unrelieved darkness.\">)>\n\t\t       <CRLF>)\n\t\t      (T <DWINDOW-DESC>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-FLASH> <DWINDOW-DESC> <RTRUE>)\n\t       (<AND <EQUAL? .RARG ,M-BEG>\n\t\t     <VERB? WALK>\n\t\t     <NOT ,DIAMOND-SOLVE>>\n\t\t<COND (<OR <EQUAL? ,HERE ,DIAMOND-2 ,DIAMOND-4>\n\t\t\t   <EQUAL? ,HERE ,DIAMOND-6 ,DIAMOND-8>>\n\t\t       <SET DIR <GET ,DIDIRS <- ,DIAMOND-COUNT 1>>>\n\t\t       <COND (<EQUAL? ,PRSO .DIR>\n\t\t\t      <SETG DIAMOND-COUNT <+ ,DIAMOND-COUNT 1>>\n\t\t\t      <COND (<G? ,DIAMOND-COUNT ,DIAMOND-BASE>\n\t\t\t\t     <SETG DIAMOND-BASE ,DIAMOND-COUNT>\n\t\t\t\t     <SETG DIAMOND-MOVES 0>)>\n\t\t\t      <COND (<EQUAL? ,DIAMOND-COUNT 5>\n\t\t\t\t     <TELL\n\"You hear a strange rusty squeal echoing in the distance.\" CR>\n\t\t\t\t     <FCLEAR ,DIAMOND-5 ,TOUCHBIT>\n\t\t\t\t     <SCORE-UPD 5>\n\t\t\t\t     <SETG DIAMOND-SOLVE T>)>\n\t\t\t      <COND (<EQUAL? ,HERE ,DIAMOND-2>\n\t\t\t\t     <SET DIR ,DIAMOND-4>)\n\t\t\t\t    (<EQUAL? ,HERE ,DIAMOND-4>\n\t\t\t\t     <SET DIR ,DIAMOND-8>)\n\t\t\t\t    (<EQUAL? ,HERE ,DIAMOND-8>\n\t\t\t\t     <SET DIR ,DIAMOND-6>)\n\t\t\t\t    (<EQUAL? ,HERE ,DIAMOND-6>\n\t\t\t\t     <SET DIR ,DIAMOND-2>)>\n\t\t\t      <GOTO .DIR>)\n\t\t\t     (T\n\t\t\t      <DIAMOND-LOSS>)>\n\t\t       <RTRUE>)\n\t\t      (<AND <EQUAL? ,HERE ,DIAMOND-5>\n\t\t\t    <EQUAL? ,PRSO ,P?UP>>\n\t\t       <RFALSE>)\n\t\t      (T\n\t\t       <SETG DIAMOND-COUNT 0>\n\t\t       <COND (<PROB 33>\n\t\t\t      <TELL\n\"There is no way to go in that direction.\" CR>\n\t\t\t      <RTRUE>)\n\t\t\t     (<PROB 25>\n\t\t\t      <DIAMOND-LOSS>\n\t\t\t      <RTRUE>)\n\t\t\t     (T\n\t\t\t      <SETG DIAMOND-COUNT 1>\n\t\t\t      <COND (<G? ,DIAMOND-COUNT ,DIAMOND-BASE>\n\t\t\t\t     <SETG DIAMOND-BASE ,DIAMOND-COUNT>\n\t\t\t\t     <SETG DIAMOND-MOVES 0>)>\n\t\t\t      <SET RM <GET ,DIAMOND-ROOMS\n\t\t\t\t\t   <- <RANDOM 4> 1>>>\n\t\t\t      <COND (<FSET? ,BAT ,INVISIBLE>\n\t\t\t\t     <FCLEAR ,BAT ,INVISIBLE>\n\t\t\t\t     <MOVE ,BAT .RM>)>\n\t\t\t      <GOTO .RM>\n\t\t\t      <RTRUE>)>)>)>>"
  },
  "DIAMOND-LOSS": {
   "name": "DIAMOND-LOSS",
   "file": "2actions.zil",
   "line": 2274,
   "endLine": 2282,
   "source": "<ROUTINE DIAMOND-LOSS ()\n\t <SETG DIAMOND-MOVES <+ ,DIAMOND-MOVES 1>>\n\t <COND (<EQUAL? ,DIAMOND-MOVES 20>\n\t\t<TELL\n\"As you thrash about in the maze, the mirthful voice of the Wizard\ntaunts you: \\\"Fool! You'll never get past \">\n\t\t<TELL <GET ,BASES ,DIAMOND-BASE>>\n\t\t<TELL \" base at this rate!\\\"\" CR>)>\n\t <GOTO <GET ,DIAMOND-ROOMS <+ 3 <RANDOM 5>>>>>"
  },
  "CERBERUS-FCN": {
   "name": "CERBERUS-FCN",
   "file": "2actions.zil",
   "line": 2298,
   "endLine": 2354,
   "source": "<ROUTINE CERBERUS-FCN ()\n\t <COND (<AND <VERB? WAVE RUB RAISE> <EQUAL? ,PRSO ,WAND>>\n\t\t<TELL \"The dog looks puzzled.\" CR>\n\t\t<RFALSE>)\n\t       (<AND ,WAND-ON <VERB? SAY INCANT>> <RFALSE>)\n\t       (<HELLO? ,CERBERUS>\n\t\t<COND (,CERBERUS-LEASHED <TELL \"\\\"Arf! Arf! Arf!\\\"\" CR>)\n\t\t      (T <TELL \"\\\"Grrrr!\\\"\" CR>)>)\n\t       (<VERB? ATTACK MUNG STAB>\n\t\t<COND (,CERBERUS-LEASHED\n\t\t       <REMOVE ,CERBERUS>\n\t\t       <TELL\n\"With a quiet bark of disappointment, the creature expires.\nIts six eyes look at you reproachfully. As it dies, it collapses\ninto a small pile of dust which blows away into nothing.\" CR>)\n\t\t      (<PROB 50>\n\t\t       <JIGS-UP\n\"The dog-thing snaps at you viciously, and succeeds. Your head, it seems,\nis only a small mouthful for the poor animal, who is just as hungry\nafterward.\">)\n\t\t      (T\n\t\t       <TELL\n\"The maddened dog-thing snaps viciously at you.\" CR>)>)\n\t       (<AND <VERB? PUT PUT-ON> <EQUAL? ,PRSO ,COLLAR>>\n\t\t<MOVE ,COLLAR ,CERBERUS>\n\t\t<FSET ,COLLAR ,NDESCBIT>\n\t\t<FSET ,COLLAR ,TRYTAKEBIT>\n\t\t<PUTP ,CERBERUS ,P?LDESC\n\"An insipidly grinning three-headed dog is wagging its tail here.\nIt is wearing a huge dog collar.\">\n\t\t<SETG CERBERUS-LEASHED T>\n\t\t<TELL\n\"The creature whines happily, then the center head\nlicks your face (which is roughly like experiencing a sandpaper\nwashcloth). The other two heads look about, as though the\nmonster felt a sudden need to find a pair of slippers somewhere.\nIts huge tail wags enthusiastically, knocking small rocks\naround and almost blowing you over from the breeze it creates.\" CR>)\n\t       (<VERB? ENCHANT>\n\t\t<COND (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <TELL\n\"The huge dog rises about an inch off the ground, for a moment.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FIERCE>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <JIGS-UP\n\"Cerberus tears you limb from limb! What ferocity!\">)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FEEBLE>\n\t\t       <TELL\n\"What an effect! He now has the strength of just one elephant, rather\nthan ten!\" CR>)>)\n\t       (<NOT ,CERBERUS-LEASHED>\n\t\t<TELL \"The three-headed dog snaps at you viciously!\" CR>)\n\t       (<AND ,CERBERUS-LEASHED <VERB? RUB>>\n\t\t<TELL\n\"The dog is now insanely happy, slobbering all over the place and\nwhining with uncontained doggish joy.\" CR>)>>"
  },
  "COLLAR-FCN": {
   "name": "COLLAR-FCN",
   "file": "2actions.zil",
   "line": 2356,
   "endLine": 2364,
   "source": "<ROUTINE COLLAR-FCN ()\n\t <COND (<AND <VERB? TAKE> ,CERBERUS-LEASHED>\n\t\t<JIGS-UP\n\"That wasn't such a good idea. The creature was enjoying being your pet.\nAs you unfasten the collar, the disappointed monster hound begins to growl,\nand then its three fang-crammed mouths rend you into little doggy biscuits.\">)\n\t       (<AND <VERB? ENCHANT> <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t<PERFORM ,V?ENCHANT ,CERBERUS>\n\t\t<RTRUE>)>>"
  },
  "GLACIER-FCN": {
   "name": "GLACIER-FCN",
   "file": "2actions.zil",
   "line": 2372,
   "endLine": 2375,
   "source": "<ROUTINE GLACIER-FCN ()\n\t <COND (<VERB? MELT>\n\t\t<TELL\n\"This is a big glacier; you'll need a lot of heat.\" CR>)>>"
  },
  "GLACIER-ROOM-FCN": {
   "name": "GLACIER-ROOM-FCN",
   "file": "2actions.zil",
   "line": 2377,
   "endLine": 2387,
   "source": "<ROUTINE GLACIER-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large hall of ancient lava, since worn smooth by the movement\nof a glacier. A large passage exits to the east and an upward lava tube\nis at the top of a jumble of fallen rocks.\" CR>\n\t\t<COND (,ICE-MELTED\n\t\t       <TELL\n\"A damp and scorched passage leads west. It is still partly full of\nsteam.\" CR>)>\n\t\t<RTRUE>)>>"
  },
  "DRAGON-FCN": {
   "name": "DRAGON-FCN",
   "file": "2actions.zil",
   "line": 2389,
   "endLine": 2432,
   "source": "<ROUTINE DRAGON-FCN ()\n\t <ENABLE <QUEUE I-DRAGON -1>>\n\t <COND (<HELLO? ,DRAGON>\n\t\t<TELL\n\"The dragon looks amused. He speaks in a voice so deep you feel it\nrather than hear it, but the tongue is unknown to you. You find\nyourself almost hypnotized.\" CR>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 2>>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"He turns and looks back at you, his cat's eyes yellow in the gloom.\nYou start to feel weak, and quickly turn away.\" CR>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 1>>)\n\t       (<VERB? ATTACK MUNG KICK LAMP-ON>\n\t\t<COND (<OR <VERB? LAMP-ON>\n\t\t\t   <AND <VERB? ATTACK> <NOT ,PRSI>>>\n\t\t       <TELL\n\"With your bare hands? I doubt the dragon even noticed.\" CR>)\n\t\t      (T\n\t\t<TELL <RANDOM-ELEMENT ,DRAGON-ATTACKS> CR>)>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 4>>)\n\t       (<AND <VERB? GIVE> <EQUAL? ,PRSI ,DRAGON>>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 1>>\n\t\t<COND (<GETPT ,PRSO ,P?VALUE>\n\t\t       <MOVE ,PRSO ,CHEST>\n\t\t       <TELL\n\"The dragon is pleased by your gift, excuses himself for a moment,\nand returns without it.\" CR>)\n\t\t      (<BOMB? ,PRSO>\n\t\t       <SETG DRAGON-ANGER <+ ,DRAGON-ANGER 2>>\n\t\t       <REMOVE ,BRICK>\n\t\t       <TELL\n\"The dragon snakes his long red tongue around the bomb and politely\nswallows it. A few moments later he belches and smoke curls out of\nhis nostrils.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The dragon refuses your gift.\" CR>)>)\n\t       (<AND <VERB? WALK>\n\t\t     <EQUAL? ,HERE ,DRAGON-ROOM>\n\t\t     <EQUAL? ,PRSO ,P?NORTH>>\n\t\t<SETG DRAGON-ANGER <+ ,DRAGON-ANGER 3>>\n\t\t<TELL\n\"The dragon puts out a claw, grins (all of his sword-sharp teeth\nglinting in the light), and blocks your way.\" CR>)>>"
  },
  "HELLO?": {
   "name": "HELLO?",
   "file": "2actions.zil",
   "line": 2446,
   "endLine": 2452,
   "source": "<ROUTINE HELLO? (WHO)\n\t <COND (<OR <EQUAL? ,WINNER .WHO>\n\t\t    <VERB? TELL ANSWER REPLY SAY HELLO INCANT>>\n\t\t<COND (<VERB? TELL ANSWER SAY INCANT REPLY>\n\t\t       <SETG P-CONT <>>\n\t\t       <SETG QUOTE-FLAG <>>)>\n\t\t<RTRUE>)>>"
  },
  "FIND-TARGET": {
   "name": "FIND-TARGET",
   "file": "2actions.zil",
   "line": 2454,
   "endLine": 2467,
   "source": "<ROUTINE FIND-TARGET (TARGET \"AUX\" P TX L ROOM)\n\t <COND (<IN? .TARGET ,HERE> ,HERE)\n\t       (T\n\t\t<SET P 0>\n\t\t<REPEAT ()\n\t\t\t<COND (<0? <SET P <NEXTP ,HERE .P>>>\n\t\t\t       <RETURN <>>)\n\t\t\t      (<NOT <L? .P ,LOW-DIRECTION>>\n\t\t\t       <SET TX <GETPT ,HERE .P>>\n\t\t\t       <SET L <PTSIZE .TX>>\n\t\t\t       <COND (<EQUAL? .L ,UEXIT ,CEXIT ,DEXIT>\n\t\t\t\t      <SET ROOM <GETB .TX 0>>\n\t\t\t\t      <COND (<IN? .TARGET .ROOM>\n\t\t\t\t\t     <RETURN .ROOM>)>)>)>>)>>"
  },
  "I-DRAGON": {
   "name": "I-DRAGON",
   "file": "2actions.zil",
   "line": 2471,
   "endLine": 2557,
   "source": "<ROUTINE I-DRAGON (\"AUX\" ROOM)\n\t <COND (<G? ,DRAGON-ANGER 6>\n\t\t<TELL\n\"The dragon tires of this game. With an almost bored yawn, he opens his\nmouth and \">\n\t\t<COND (<EQUAL? ,SPELL? ,S-FIREPROOF>\n\t\t       <TELL\n\"blasts you with a great gout of fire, but it washes over you\nharmlessly.\" CR>)\n\t\t      (T\n\t\t       <DRAGON-LEAVES>\n\t\t       <JIGS-UP\n\"incinerates you in a blast of white-hot dragon fire.\">)>)\n\t       (<AND <IN? ,WINNER ,DRAGON-ROOM>\n\t\t     <NOT <IN? ,DRAGON ,DRAGON-ROOM>>>\n\t\t<MOVE ,DRAGON ,DRAGON-ROOM>\n\t\t<TELL\n\"The dragon doubles back and charges into the room, maddened by your\nattempt to sneak past him. His eyes glow with a white heat of anger.\" CR>\n\t\t<COND (<EQUAL? ,SPELL? ,S-FIREPROOF>\n\t\t       <JIGS-UP\n\"A huge ball of flame envelops you, but you don't even feel the heat.\nThe dragon is puzzled, but not too puzzled to crush you in his jaws.\">)\n\t\t      (T\n\t\t       <JIGS-UP\n\"Worse for you, his mouth opens and a great gout of flame puffs out\nand consumes you on the spot.\">)>)\n\t       (<NOT <G? ,DRAGON-ANGER 0>>\n\t\t<COND (<AND <PROB 50>\n\t\t\t    <IN? ,DRAGON ,HERE>>\n\t\t       <TELL \"The dragon looks bored.\" CR>)\n\t\t      (T\n\t\t       <DRAGON-LEAVES>\n\t\t       <COND (<EQUAL? ,HERE ,GLACIER-ROOM>\n\t\t\t      <TELL\n\"The dragon is no longer around. He must have become bored with you.\" CR>)\n\t\t\t     (<EQUAL? ,HERE ,OLD-HERE>\n\t\t\t      <TELL\n\"The dragon seems to have lost interest in you.\">\n\t\t\t      <COND (<EQUAL? ,OLD-HERE ,DRAGON-ROOM> <CRLF>)\n\t\t\t\t    (T <TELL \" He wanders off.\" CR>)>)>)>)\n\t       (T\n\t\t<SET ROOM <FIND-TARGET ,WINNER>>\n\t\t<COND (<NOT .ROOM>\n\t\t       <COND (<PROB 25> <DRAGON-LEAVES>)>)\n\t\t      (<OR <EQUAL? .ROOM ,CAROUSEL-ROOM ,TINY-ROOM>\n\t\t\t   <EQUAL? .ROOM ,RAVINE-LEDGE ,FRESCO-ROOM>>\n\t\t       <COND (<PROB 25> <DRAGON-LEAVES>)>\n\t\t       <TELL \"The dragon will follow no further.\" CR>)\n\t\t      (<EQUAL? .ROOM ,GLACIER-ROOM>\n\t\t       <TELL CR\n\"As the dragon enters, he sees his reflection on the icy surface of the\nglacier at its western end. He becomes enraged: There is another dragon here,\nbehind that glass, he thinks! Dragons are smart, but sometimes naive, and\nthis one has never seen ice before. He rears up to his full height to\nchallenge this intruder into his territory. He roars a challenge! The\nintruder responds! The dragon takes a deep breath, and out of his mouth\npours a massive gout of flame. It washes over the ice, which melts rapidly,\nsending out torrents of water and a huge cloud of steam! You manage to clamber\nup to a small shelf, but the dragon is terrified! A huge splash goes down his\nthroat! There is a muffled explosion and the dragon, a puzzled expression on\nhis face, dies. He is carried away by the water.|\n|\nWhen the flood recedes you climb gingerly down. While no trace of\nthe dragon can be found, the melting of the ice has revealed a passage\nleading west.\" CR>\n\t\t       <REMOVE ,DRAGON>\n\t\t       <REMOVE ,ICE>\n\t\t       <MOVE ,DEAD-DRAGON ,DEEP-FORD>\n\t\t       <DISABLE <INT I-DRAGON>>\n\t\t       <SCORE-UPD 5>\n\t\t       <SETG ICE-MELTED T>)\n\t\t      (T\n\t\t       <COND (<NOT <EQUAL? .ROOM ,OLD-HERE>>\n\t\t\t      <MOVE ,DRAGON .ROOM>\n\t\t\t      <TELL\n\"The dragon follows you, out of mingled curiosity and anger.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The dragon continues to watch you carefully.\" CR>)>\n\t\t       <COND (<NOT <G? ,DRAGON-ANGER 0>>\n\t\t\t      <SETG DRAGON-ANGER 0>\n\t\t\t      <DISABLE <INT I-DRAGON>>)>)>)>\n\t <SETG OLD-HERE <LOC ,DRAGON>>\n\t <SETG DRAGON-ANGER <- ,DRAGON-ANGER 2>>\n\t <COND (<L? ,DRAGON-ANGER 0> <SETG DRAGON-ANGER 0>)>\n\t T>"
  },
  "DRAGON-LEAVES": {
   "name": "DRAGON-LEAVES",
   "file": "2actions.zil",
   "line": 2559,
   "endLine": 2563,
   "source": "<ROUTINE DRAGON-LEAVES ()\n\t <COND (<NOT <LOC ,DEAD-DRAGON>>\n\t\t<MOVE ,DRAGON ,DRAGON-ROOM>\n\t\t<SETG DRAGON-ANGER 0>\n\t\t<DISABLE <INT I-DRAGON>>)>>"
  },
  "I-GARDEN": {
   "name": "I-GARDEN",
   "file": "2actions.zil",
   "line": 2565,
   "endLine": 2608,
   "source": "<ROUTINE I-GARDEN ()\n\t <COND (<OR <EQUAL? ,HERE ,GARDEN-NORTH ,GAZEBO-ROOM>\n\t\t    <EQUAL? ,HERE ,TOPIARY-ROOM ,FORMAL-GARDEN>>\n\t\t<COND (<AND <IN? ,UNICORN ,GARDEN-NORTH>\n\t\t\t    <PROB 33>>\n\t\t       <REMOVE ,UNICORN>\n\t\t       <COND (<NOT <EQUAL? ,HERE ,TOPIARY-ROOM>>\n\t\t\t      <TELL \"The unicorn bounds lightly away.\" CR>)>)\n\t\t      (<AND <IN? ,PRINCESS ,DRAGON-LAIR>\n\t\t\t    <NOT <IN? ,UNICORN ,GARDEN-NORTH>>\n\t\t\t    <PROB 25>\n\t\t\t    <NOT <EQUAL? ,HERE ,TOPIARY-ROOM>>>\n\t\t       <COND (,UNICORN-FRIGHTENED\n\t\t\t      <SETG UNICORN-FRIGHTENED <>>\n\t\t\t      <RFALSE>)>\n\t\t       <MOVE ,UNICORN ,GARDEN-NORTH>\n\t\t       <COND (<EQUAL? ,HERE ,GARDEN-NORTH>\n\t\t\t      <TELL <RANDOM-ELEMENT ,UNICORN-MSGS> CR>)\n\t\t\t     (T <TELL\n\"A unicorn is peacefully cropping grass at the north end of the garden.\nThere is something hanging around its neck.\" CR>)>)\n\t\t      (<EQUAL? ,HERE ,TOPIARY-ROOM>\n\t\t       <COND (<AND <NOT ,TOPIARY-MOVED> <PROB 12>>\n\t\t\t      <SETG TOPIARY-MOVED T>\n\t\t\t      <TELL\n\"You look around, and strangely, the topiary animals seem to have\nchanged position slightly.\" CR>)\n\t\t\t     (<AND ,TOPIARY-MOVED\n\t\t\t\t   <NOT ,TOPIARY-NEAR>\n\t\t\t\t   <PROB 8>>\n\t\t\t      <SETG TOPIARY-NEAR T>\n\t\t\t      <TELL\n\"The topiary animals seem to close in on you. You turn and they are\nvery close. They seem to be leering at you.\" CR>)\n\t\t\t     (<AND ,TOPIARY-NEAR <PROB 4>>\n\t\t\t      <SETG TOPIARY-MOVED <>>\n\t\t\t      <SETG TOPIARY-NEAR <>>\n\t\t\t      <JIGS-UP\n\"The topiary animals attack! You are crushed by their branches and\nclawed by their thorns.\">)>)>)\n\t       (T\n\t\t<REMOVE ,UNICORN>\n\t\t<DISABLE <INT I-GARDEN>>\n\t\t<RFALSE>)>>"
  },
  "GARDEN-ROOM-FCN": {
   "name": "GARDEN-ROOM-FCN",
   "file": "2actions.zil",
   "line": 2622,
   "endLine": 2624,
   "source": "<ROUTINE GARDEN-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-ENTER>\n\t\t<ENABLE <QUEUE I-GARDEN -1>>)>>"
  },
  "GLOBAL-UNICORN-FCN": {
   "name": "GLOBAL-UNICORN-FCN",
   "file": "2actions.zil",
   "line": 2626,
   "endLine": 2637,
   "source": "<ROUTINE GLOBAL-UNICORN-FCN ()\n\t <COND (<IN? ,UNICORN ,GARDEN-NORTH>\n\t\t<TELL\n\"The unicorn is way up at the north end of the garden.\" CR>)\n\t       (<VERB? FIND FOLLOW>\n\t\t<COND (<FSET? ,UNICORN ,TOUCHBIT>\n\t\t       <TELL \"I don't know where it is now.\" CR>)\n\t\t      (T <TELL\n\"The unicorn is a mythical beast.\" CR>)>)\n\t       (T\n\t\t<TELL\n\"Unicorn? What unicorn?\" CR>)>>"
  },
  "UNICORN-FCN": {
   "name": "UNICORN-FCN",
   "file": "2actions.zil",
   "line": 2639,
   "endLine": 2659,
   "source": "<ROUTINE UNICORN-FCN ()\n\t <COND (<HELLO? ,UNICORN>\n\t\t<TELL\n\"The unicorn listens distractedly, then goes back to cropping grass.\" CR>)\n\t       (<VERB? FOLLOW>\n\t\t<TELL\n\"The unicorn shies away as you approach.\" CR>)\n\t       (<AND <VERB? EXAMINE> <EQUAL? ,PRSO ,UNICORN>>\n\t\t<TELL\n\"The unicorn shies away as you approach for a closer look, but you do\nnotice a tiny gold key hanging from a red satin ribbon looped around\nthe animal's neck.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"The unicorn shies away as you approach.\" CR>)\n\t       (<VERB? TAKE PUT RUB MUNG ATTACK>\n\t\t<REMOVE ,UNICORN>\n\t\t<SETG UNICORN-FRIGHTENED T>\n\t\t<TELL\n\"The unicorn, unsurprised by this evidence that you are indeed the\nuncouth sort of vagabond it suspected you were, melts into the hedges\nand is gone.\" CR>)>>"
  },
  "GAZEBO-FCN": {
   "name": "GAZEBO-FCN",
   "file": "2actions.zil",
   "line": 2663,
   "endLine": 2670,
   "source": "<ROUTINE GAZEBO-FCN ()\n\t <COND (<AND <EQUAL? ,HERE ,GARDEN-NORTH> <VERB? THROUGH>>\n\t\t<DO-WALK ,P?IN> <RTRUE>)\n\t       (<AND <EQUAL? ,HERE ,GAZEBO-ROOM>\n\t\t     <VERB? THROUGH>>\n\t\t<TELL \"You're already in it.\" CR>)\n\t       (<AND <EQUAL? ,HERE ,GAZEBO-ROOM> <VERB? LEAVE EXIT>>\n\t\t<DO-WALK ,P?OUT> <RTRUE>)>>"
  },
  "CHEST-FCN": {
   "name": "CHEST-FCN",
   "file": "2actions.zil",
   "line": 2672,
   "endLine": 2695,
   "source": "<ROUTINE CHEST-FCN ()\n\t <COND (<VERB? OPEN>\n\t\t<COND (<PROB 25>\n\t\t       <V-OPEN>\n\t\t       <COND (<AND <IN? ,PRINCESS ,HERE>\n\t\t\t\t   <NOT ,PRINCESS-AWAKE>>\n\t\t\t      <TELL\n\"The opening of the squeaky lid startles the young woman.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"The hinges are very rusty, but they seem to be starting to give.\nYou can probably open it if you try again. There is something\nbumping around inside.\">\n\t\t       <COND (<AND <IN? ,PRINCESS ,HERE>\n\t\t\t\t   <NOT ,PRINCESS-AWAKE>>\n\t\t\t      <TELL\n\" All this rummaging around has startled\nthe young woman.\">)>\n\t\t       <CRLF>)>\n\t\t<PUTP ,CHEST ,P?ACTION 0>\n\t\t<COND (<AND <IN? ,PRINCESS ,HERE>\n\t\t\t    <NOT ,PRINCESS-AWAKE>>\n\t\t       <PERFORM ,V?ALARM ,PRINCESS>)>\n\t\tT)>>"
  },
  "PRINCESS-FCN": {
   "name": "PRINCESS-FCN",
   "file": "2actions.zil",
   "line": 2699,
   "endLine": 2753,
   "source": "<ROUTINE PRINCESS-FCN (\"AUX\" (DEM <INT I-PRINCESS>))\n\t <COND (<VERB? FOLLOW>\n\t\t<COND (<IN? ,PRINCESS ,HERE>\n\t\t       <TELL\n\"You can't follow her until she leaves...\" CR>)\n\t\t      (,PRFOLLOW\n\t\t       <DO-WALK ,PRFOLLOW>)\n\t\t      (T\n\t\t       <TELL \"I seem to have lost track of her.\" CR>)>\n\t\t<RTRUE>)\n\t       (<NOT <IN? ,PRINCESS ,HERE>>\n\t\t<TELL \"There is no princess here.\" CR>)\n\t       (<VERB? ATTACK MUNG RAPE>\n\t\t<REMOVE ,PRINCESS>\n\t\t<TELL\n\"The princess screams as you approach. \\\"Won't someone deliver\nme from this awful fate?\\\" she cries. \">\n\t\t<COND (<IN? ,WIZARD ,HERE>\n\t\t       <TELL\n\"Shocked, the Wizard of Frobozz turns toward you.\">)\n\t\t      (ELSE\n\t\t       <TELL \"Just in time, the Wizard of Frobozz\nappears, seeming to unroll himself out of nothing like a window shade.\">)>\n\t\t<TELL\n\" \\\"Fry!\\\" he intones, and a massive bolt of lightning reduces you to a pile\nof smoking ashes. (Serves you right, too, if you ask me.)\">\n\t\t<JIGS-UP>)\n\t       (<OR <HELLO? ,PRINCESS> <VERB? ALARM KISS EXAMINE RUB>>\n\t\t<COND (<AND <IN? ,PRINCESS ,DRAGON-LAIR>\n\t\t\t    <EQUAL? <GET .DEM ,C-ENABLED?> 0>>\n\t\t       <PUTP ,PRINCESS ,P?LDESC\n\"There is a dishevelled and slightly unkempt princess here.\">\n\t\t       <ENABLE <QUEUE I-PRINCESS 2>>\n\t\t       <SETG PRINCESS-AWAKE T>\n\t\t       <TELL\n\"The princess (for she is obviously one) shakes herself awake, then\nnotices you for the first time. She smiles. \\\"Thank you for rescuing\nme from that horrid worm,\\\" she says. \\\"I must depart. My parents will\nbe worried about me.\\\" With that, she arises, looking purposefully out\nof the lair.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The princess ignores you. She looks about the room, but her eyes\nfix on the \">\n\t\t       <COND (<EQUAL? ,HERE ,GAZEBO-ROOM>\n\t\t\t      <TELL \"garden outside\">)\n\t\t\t     (<EQUAL? ,HERE ,GARDEN-NORTH>\n\t\t\t      <TELL \"gazebo\">)\n\t\t\t     (<EQUAL? ,HERE ,RAVINE-LEDGE>\n\t\t\t      <TELL \"ledge\">)\n\t\t\t     (T\n\t\t\t      <TELL <GET ,PRDIRS <* ,PRCOUNT 4>>>)>\n\t\t       <TELL \".\" CR>)>)\n\t       (<NOT ,PRINCESS-AWAKE>\n\t\t<TELL \"She's in a trance!\" CR>)>>"
  },
  "I-PRINCESS": {
   "name": "I-PRINCESS",
   "file": "2actions.zil",
   "line": 2770,
   "endLine": 2820,
   "source": "<ROUTINE I-PRINCESS (\"AUX\" (DEM <INT I-PRINCESS>) (OLDP <LOC ,PRINCESS>)\n\t\t     (PC <* ,PRCOUNT 4>))\n\t <MOVE ,PRINCESS <GET ,PRDIRS <+ .PC 1>>>\n\t <SETG PRFOLLOW <>>\n\t <COND (<AND <IN? ,PRINCESS ,STREAM-PATH>\n\t\t     <IN? ,WINNER ,MARBLE-HALL>>\n\t\t<TELL\n\"The princess presses a loose piece of marble in the wall and a large\nsection of the wall slides away, revealing a passage to the east. She\nenters it.\" CR>\n\t\t<COND (<IN? ,WINNER .OLDP>\n\t\t       <SETG PRFOLLOW <GET ,PRDIRS <+ .PC 3>>>)>\n\t\t<SETG SECRET-DOOR T>)\n\t       (<AND <IN? ,PRINCESS ,STREAM-PATH>\n\t\t     <IN? ,WINNER ,STREAM-PATH>>\n\t\t<SETG SECRET-DOOR T>\n\t\t<TELL\n\"The princess appears from behind some rocks, as though she had walked\nthrough a wall.\" CR>)\n\t       (<IN? ,WINNER .OLDP>\n\t\t<SETG PRFOLLOW <GET ,PRDIRS <+ .PC 3>>>\n\t        <COND (<EQUAL? .OLDP ,GARDEN-NORTH>\n\t\t       <TELL \"The princess enters the gazebo\">\n\t\t       <COND (<FSET? ,GAZEBO-ROOM ,RMUNGBIT>\n\t\t\t      <TELL \", although you would never get past\nthe debris. She must be magically protected.\">)>\n\t\t       <TELL \".\" CR>)\n\t\t      (<EQUAL? .OLDP ,RAVINE-LEDGE>\n\t\t       <TELL\n\"The princess climbs daintily down the rock face.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The princess walks \">\n\t\t       <TELL <GET ,PRDIRS .PC>>\n\t\t       <TELL \". She glances back at you as she goes.\" CR>)>)\n\t       (<IN? ,PRINCESS ,HERE>\n\t\t<COND (<EQUAL? ,HERE ,GAZEBO-ROOM>\n\t\t       <TELL \"The princess joins you in the gazebo.\" CR>)\n\t\t      (<EQUAL? ,HERE ,DEEP-FORD>\n\t\t       <TELL \"The princess climbs down the rock wall onto the beach.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The princess enters from the \">\n\t\t       <TELL <GET ,PRDIRS <+ 2 .PC>>>\n\t\t       <TELL \". She seems surprised to see you.\" CR>)>)>\n\t <COND (<IN? ,PRINCESS ,GAZEBO-ROOM>\n\t\t<DISABLE .DEM>\n\t\t<ENABLE <QUEUE I-UNICORN 6>>)\n\t       (T\n\t\t<SETG PRCOUNT <+ ,PRCOUNT 1>>\n\t\t<ENABLE <QUEUE I-PRINCESS\n\t\t\t       <COND (<PROB 75> 1)(T 2)>>>)>\n\t <RTRUE>>"
  },
  "I-UNICORN": {
   "name": "I-UNICORN",
   "file": "2actions.zil",
   "line": 2822,
   "endLine": 2843,
   "source": "<ROUTINE I-UNICORN ()\n\t <COND (<EQUAL? ,HERE ,GAZEBO-ROOM ,GARDEN-NORTH>\n\t\t<MOVE ,ROSE ,WINNER>\n\t\t<FCLEAR ,GOLD-KEY ,NDESCBIT>\n\t\t<MOVE ,GOLD-KEY ,WINNER>\n\t\t<SCORE-OBJ ,GOLD-KEY>\n\t\t<PUTP ,GOLD-KEY ,P?ACTION 0>\n\t\t<TELL\n\"Shyly, a unicorn peeks out of the hedges. It notices the princess and\nseems captivated. It approaches her and bows its head as though curtseying\nto her. Around its neck is a red satin ribbon on which is strung a delicate\ngold key. The princess takes the ribbon and uses it to tie up her hair. She\nlooks at you and then, smiling, hands you the key and a fresh rose which she\nplucks from the arbor. \\\"You may have use of such a thing,\\\" she says. \\\"It\nis the least I can do for one who rescued me from a fate I dare not\ncontemplate.\\\" With that, she mounts the unicorn (side-saddle, of course)\nand rides off into the gloom.\" CR>\n\t\t<REMOVE ,PRINCESS>)\n\t       (T\n\t\t<REMOVE ,PRINCESS>\n\t\t<MOVE ,ROSE ,GAZEBO-ROOM>\n\t\t<RFALSE>)>>"
  },
  "MENHIR-ROOM-FCN": {
   "name": "MENHIR-ROOM-FCN",
   "file": "2actions.zil",
   "line": 2849,
   "endLine": 2862,
   "source": "<ROUTINE MENHIR-ROOM-FCN (RARG)\n\t <COND (<AND <EQUAL? .RARG ,M-FLASH> ,MENHIR-POSITION>\n\t\t<DESCRIBE-MENHIR>)\n\t       (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This is a large room which was evidently used once as a quarry. Many\nlarge limestone chunks lie helter-skelter around the room. Some are\nrough-hewn and unworked, others smooth and well-finished. One side of\nthe room appears to have been used to quarry building blocks, the other\nto produce menhirs (standing stones). Obvious passages lead north and\nsouth.\" CR>\n\t\t<COND (<IN? ,MENHIR ,LOCAL-GLOBALS>\n\t\t       <DESCRIBE-MENHIR>)>\n\t\tT)>>"
  },
  "DESCRIBE-MENHIR": {
   "name": "DESCRIBE-MENHIR",
   "file": "2actions.zil",
   "line": 2864,
   "endLine": 2887,
   "source": "<ROUTINE DESCRIBE-MENHIR ()\n\t <COND (<EQUAL? ,HERE ,MENHIR-ROOM>\n\t\t<COND (<EQUAL? ,MENHIR-POSITION <>>\n\t\t       <TELL\n\"One particularly large menhir, at least twenty feet tall and eight feet\nthick, is leaning against the wall blocking a dark opening leading\nsouthwest. On this side of the menhir is carved an ornate letter \\\"F\\\".\" CR>)\n\t\t      (<EQUAL? ,MENHIR-POSITION 1>\n\t\t       <TELL\n\"There is a huge menhir lying on the floor near a southwest passage.\" CR>)\n\t\t      (<EQUAL? ,MENHIR-POSITION 2>\n\t\t       <TELL\n\"A dark opening leads southwest.\" CR>)\n\t\t      (<EQUAL? ,MENHIR-POSITION 3>\n\t\t       <TELL \"There is a huge menhir here.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"There is a huge menhir floating like a feather in midair here. A\npassage to the southwest opens beneath it.\" CR>)>\n\t\t<COND (<EQUAL? ,HERE ,MUNGED-ROOM>\n\t\t       <TELL\n\"The explosion appears to have had no effect on the menhir.\" CR>)>\n\t\t<RTRUE>)\n\t       (T <TELL \"A dark opening leads southwest.\" CR>)>>"
  },
  "MENHIR-FCN": {
   "name": "MENHIR-FCN",
   "file": "2actions.zil",
   "line": 2891,
   "endLine": 2920,
   "source": "<ROUTINE MENHIR-FCN ()\n\t <COND (<VERB? LOOK-UNDER LOOK-BEHIND>\n\t\t<COND (,MENHIR-POSITION\n\t\t       <TELL\n\"Behind the menhir is some air and then a wall.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The gap between the menhir and the wall is very narrow, but it is clear\nthat there is a sizeable room in there. Your light only reveals a part of\nthe far wall.\" CR>)>)\n\t       (<VERB? TAKE MOVE TURN>\n\t\t<TELL\n\"The menhir weighs many tons and is eight feet wide. You can't even get\na grip on it, much less move it.\" CR>)\n\t       (<VERB? READ> <TELL \"\\\"F\\\"\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It is nicely finished, and the letter \\\"F\\\" on it is particularly well\ncarved.\" CR>)\n\t       (<AND <VERB? ENCHANT> <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t<TELL\n\"The menhir floats majestically into the air, rising about ten feet.\nThe passage beneath it beckons invitingly.\" CR>\n\t\t<SETG MENHIR-POSITION 3>)\n\t       (<AND <VERB? DISENCHANT>\n\t\t     <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t<SETG MENHIR-POSITION <>>\n\t\t<COND (<EQUAL? ,HERE ,MENHIR-ROOM ,KENNEL>\n\t\t       <TELL\n\"The menhir sinks to the ground.\" CR>)>)>>"
  },
  "DOOR-KEEPER-FCN": {
   "name": "DOOR-KEEPER-FCN",
   "file": "2actions.zil",
   "line": 2924,
   "endLine": 2962,
   "source": "<ROUTINE DOOR-KEEPER-FCN ()\n\t <COND (<AND <VERB? ALARM> ,GUARDIAN-FED>\n\t\t<TELL \"Try as you may, you can't wake it.\" CR>)\n\t       (<AND <VERB? GIVE> <EQUAL? ,PRSI ,DOOR-KEEPER>>\n\t\t<COND (,GUARDIAN-FED\n\t\t       <TELL\n\"He is asleep, at least for the moment.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,CANDY>\n\t\t       <SETG GUARDIAN-FED T>\n\t\t       <REMOVE ,CANDY>\n\t\t       <TELL\n\"The guardian greedily wolfs down the candy, including the package. (It\nseemed to enjoy the grasshoppers particularly.) It then becomes\nquiet and its eyes close. (Lizards are known to sleep a long time while\ndigesting their meals.)\" CR>)\n\t\t      (<EQUAL? ,PRSO ,FLASK>\n\t\t       <TELL\n\"The lizard sniffs it experimentally, then looks at you angrily, hissing\nand snapping.\" CR>)\n\t\t      (<BOMB? ,PRSO>\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n\"The guardian greedily wolfs it down. After a while, you hear a\nvery small pop and the guardian's eyes bulge out. It hisses nastily\nat you.\" CR>)\n\t\t      (<EQUAL? ,PRSO ,PALANTIR-1 ,PALANTIR-2 ,PALANTIR-3>\n\t\t       <TELL\n\"The guardian greedily gobbles the sphere, but finds it unchewable. He\nthen tries repeatedly to swallow it whole, with disappointing results.\nFinally, he spits it on the ground.\" CR>\n\t\t       <MOVE ,PRSO ,HERE>)\n\t\t      (T\n\t\t       <REMOVE ,PRSO>\n\t\t       <TELL\n\"The lizard wolfs down the \" D ,PRSO \", crunching greedily.\" CR>)>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<TELL\n\"The guardian seems impervious to your attack. In fact, your blows\ndon't even seem to be landing.\" CR>)>>"
  },
  "WIZ-DOOR-FCN": {
   "name": "WIZ-DOOR-FCN",
   "file": "2actions.zil",
   "line": 2966,
   "endLine": 3008,
   "source": "<ROUTINE WIZ-DOOR-FCN ()\n\t <COND (<NOT ,GUARDIAN-FED>\n\t\t<COND (<VERB? OPEN>\n\t\t       <TELL\n\"The lizard comes to life and snaps at you as you reach for the\nhandle.\" CR>)\n\t\t      (<VERB? UNLOCK>\n\t\t       <TELL\n\"The lizard door keeper comes awake and bites at your hand. You\njerk away just in time.\">\n\t\t       <COND (<AND <EQUAL? ,PRSI ,GOLD-KEY> <PROB 5>>\n\t\t\t      <REMOVE ,GOLD-KEY>\n\t\t\t      <TELL \" The guardian does get the\nkey, though. It grins maniacally.\" CR>)\n\t\t\t     (<PROB 20>\n\t\t\t      <MOVE ,GOLD-KEY ,HERE>\n\t\t\t      <TELL \" You drop the key, though.\" CR>)\n\t\t\t     (T <CRLF>)>)>)\n\t       (<VERB? UNLOCK>\n\t\t<COND (,WIZ-DOOR-FLAG\n\t\t       <TELL \"It is already!\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t       <SETG WIZ-DOOR-FLAG T>\n\t\t       <TELL\n\"The key turns and the bolt clicks. The door is unlocked.\" CR>)\n\t\t      (T\n\t\t       <SETG WIZ-DOOR-FLAG <>>\n\t\t       <TELL \"That won't unlock it.\" CR>)>)\n\t       (<VERB? LOCK>\n\t\t<COND (<NOT ,WIZ-DOOR-FLAG>\n\t\t       <TELL \"It is locked already.\" CR>)\n\t\t      (<EQUAL? ,PRSI ,GOLD-KEY>\n\t\t       <TELL \"The door is now locked.\" CR>\n\t\t       <SETG WIZ-DOOR-FLAG <>>\n\t\t       <RTRUE>)\n\t\t      (T <TELL \"That won't lock it.\" CR>)>)\n\t       (<VERB? OPEN CLOSE>\n\t\t<COND (,WIZ-DOOR-FLAG\n\t\t       <OPEN-CLOSE ,PRSO\n\t\t\t\t   \"The door creaks open.\"\n\t\t\t\t   \"The door reluctantly closes.\">)\n\t\t      (<VERB? OPEN>\n\t\t       <TELL \"The door is locked!\" CR>)>)>>"
  },
  "GUARDIAN-ROOM-FCN": {
   "name": "GUARDIAN-ROOM-FCN",
   "file": "2actions.zil",
   "line": 3010,
   "endLine": 3029,
   "source": "<ROUTINE GUARDIAN-ROOM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"This room is cobwebby and musty, but tracks in the dust show that it has\nseen visitors recently. At the south end of the room is a stained and\nbattered (but very strong-looking) door. To the north, a corridor exits.\" CR>\n\t\t<COND (<FSET? ,WIZ-DOOR ,OPENBIT>\n\t\t       <TELL \"The door is open.\" CR>)>\n\t\t<COND (<NOT ,GUARDIAN-FED>\n\t\t       <TELL\n\"Imbedded in the door is a nasty-looking lizard head, with sharp\nteeth and beady eyes. \">\n\t\t       <COND (<IN? ,CANDY ,WINNER>\n\t\t\t      <TELL \"The lizard is sniffing at you.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The eyes move to watch you approach.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"A sleepy-looking lizard head is mounted on the door.\" CR>)>)>>"
  },
  "WORKSHOP-FCN": {
   "name": "WORKSHOP-FCN",
   "file": "2actions.zil",
   "line": 3031,
   "endLine": 3040,
   "source": "<ROUTINE WORKSHOP-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"You are standing in the entry hall of the Wizard's Workshop. Dark\ncorridors lead west and south from here. The corridor to the west\nsmells slightly of incense or candle smoke.\">\n\t\t<COND (<FSET? ,WIZ-DOOR ,OPENBIT>\n\t\t       <TELL \" The workshop door is open.\">)>\n\t\t<CRLF>\n\t\t<RTRUE>)>>"
  },
  "ARCANA-PSEUDO": {
   "name": "ARCANA-PSEUDO",
   "file": "2actions.zil",
   "line": 3042,
   "endLine": 3046,
   "source": "<ROUTINE ARCANA-PSEUDO ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"The stuff on the bench appears to be so much junk, and you decide that\nit would only get in your way if you took it.\" CR>)>>"
  },
  "TROPHY-PSEUDO": {
   "name": "TROPHY-PSEUDO",
   "file": "2actions.zil",
   "line": 3048,
   "endLine": 3053,
   "source": "<ROUTINE TROPHY-PSEUDO ()\n\t <COND (<VERB? READ> <RFALSE>)\n\t       (<VERB? TAKE RUB>\n\t\t<TELL\n\"As your fingers near it, you get a nasty shock (but fortunately not a fatal\none).\" CR>)>>"
  },
  "STAND-FCN": {
   "name": "STAND-FCN",
   "file": "2actions.zil",
   "line": 3055,
   "endLine": 3077,
   "source": "<ROUTINE STAND-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL \"The \" D ,PRSO \" is firmly attached to the bench.\" CR>)\n\t       (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSO ,PALANTIR-1 ,PALANTIR-2 ,PALANTIR-3>\n\t\t     <EQUAL? ,PRSI ,STAND-1 ,STAND-2 ,STAND-3>>\n\t\t<V-PUT>\n\t\t<COND (<AND <IN? ,PALANTIR-1 ,STAND-1>\n\t\t\t    <IN? ,PALANTIR-2 ,STAND-2>\n\t\t\t    <IN? ,PALANTIR-3 ,STAND-3>>\n\t\t       <REMOVE ,PALANTIR-1>\n\t\t       <REMOVE ,PALANTIR-2>\n\t\t       <REMOVE ,PALANTIR-3>\n\t\t       <MOVE ,STAND-4 ,WORKBENCH>\n\t\t       <TELL\n\"As you place the \" D ,PRSO \" in the \" D ,PRSI \", a low humming noise\nbegins, and you can feel the hairs on the back of your neck begin to\nstand up. The three spheres begin to vibrate, faster and faster, as\nthe noise becomes higher and higher pitched. Three puffs of smoke, one\nred, one blue, one white, rise up from empty stands. The spheres are gone!\nBut in the center of the triangle formed by the stands is now a black stand\nof obsidian in which rests a strange black sphere.\" CR>)>\n\t\tT)>>"
  },
  "IN-AQUARIUM-FCN": {
   "name": "IN-AQUARIUM-FCN",
   "file": "2actions.zil",
   "line": 3079,
   "endLine": 3101,
   "source": "<ROUTINE IN-AQUARIUM-FCN (RARG)\n\t <COND (<EQUAL? .RARG ,M-LOOK>\n\t\t<TELL\n\"There is a sandy floor here, and your vision seems murky and blurred.\nThe wall you are looking at is nicely dressed stone.\" CR>\n\t\t<COND (<IN? ,SERPENT ,AQUARIUM>\n\t\t       <COND (<PROB 25>\n\t\t\t      <TELL\n\"While you watch a shadow seems to pass overhead.\" CR>)\n\t\t\t     (<PROB 5>\n\t\t\t      <TELL\n\"The head of some horrible serpent pokes into view, its beady green eyes\nalmost seeming to see you.\" CR>)>)>\n\t\t<RTRUE>)\n\t       (<EQUAL? .RARG ,M-ENTER>\n\t\t<COND (<IN? ,SERPENT ,AQUARIUM>\n\t\t       <JIGS-UP\n\"You drop into the aquarium with a splash (which attracts the serpent).\nHe greedily eats you. He's just a baby, after all, and needs all the\nfood he can get.\">)\n\t\t      (T <JIGS-UP\n\"Oh dear, you have cut yourself severely on the broken glass. I'm afraid\nyou've bled to death.\">)>)>>"
  },
  "AQUARIUM-FCN": {
   "name": "AQUARIUM-FCN",
   "file": "2actions.zil",
   "line": 3103,
   "endLine": 3154,
   "source": "<ROUTINE AQUARIUM-FCN (\"AUX\" OBJ)\n\t <COND (<VERB? BOARD THROUGH> <DO-WALK ,P?IN> <RTRUE>)\n\t       (<AND <VERB? LOOK-INSIDE>\n\t\t     <IN? ,SERPENT ,AQUARIUM>>\n\t\t<TELL\n\"In the aquarium is a baby sea-serpent who eyes you suspiciously. His\nscaly body writhes about in the huge tank.\" CR>)\n\t       (<OR <AND <VERB? MUNG ATTACK> <EQUAL? ,PRSO ,AQUARIUM>>\n\t\t    <AND <VERB? THROW> <EQUAL? ,PRSI ,AQUARIUM>>>\n\t\t<COND (<EQUAL? ,PRSO ,AQUARIUM>\n\t\t       <COND (<NOT ,PRSI> <RFALSE>)\n\t\t\t     (T <SET OBJ ,PRSI>)>)\n\t\t      (T <SET OBJ ,PRSO>)>\n\t\t<MOVE .OBJ ,HERE>\n\t\t<COND (<IN? ,DEAD-SERPENT ,HERE>\n\t\t       <TELL\n\"The aquarium is already broken!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? .OBJ ,FLASK>\n\t\t       <JIGS-UP\n\"The flask shatters, and poison gas fills the room!\">\n\t\t       <RTRUE>)\n\t\t      (<BOMB? .OBJ>\n\t\t       <DISABLE <INT I-FUSE>>)\n\t\t      (<OR <FSET? .OBJ ,WEAPONBIT>\n\t\t\t   <G? <GETP .OBJ ,P?SIZE> 10>>\n\t\t<REMOVE ,SERPENT>\n\t\t<MOVE ,PALANTIR-3 ,AQUARIUM>\n\t\t<FCLEAR ,PALANTIR-3 ,NDESCBIT>\n\t\t<PUTP ,AQUARIUM ,P?LDESC\n\"A shattered aquarium fills the northern half of the room.\">\n\t\t<MOVE ,DEAD-SERPENT ,HERE>\n\t\t<TELL\n\"The \" D .OBJ \" shatters the glass wall of the aquarium, spilling out\nan impressive amount of salt water and wet sand. It also spills out an\nextremely annoyed sea serpent who bites angrily at the \" D .OBJ \", and\nthen at you. He is having difficulty breathing, and he seems to hold you\nresponsible for his current problem.\">\n\t\t<COND (<VERB? MUNG>\n\t\t       <TELL\n\" He manages to rend you limb from limb before he drowns in the\nair.\" CR>\n\t\t       <JIGS-UP \"I guess you were too careless.\">)\n\t\t      (T\n\t\t       <TELL\n\" He tries to slither across the stone floor towards you. Fortunately,\nhe expires mere inches away from biting off your foot. A clear crystal\nsphere sits amid the sand and broken glass on the bottom of the\naquarium.\" CR>)>)\n\t\t      (T\n\t\t       <TELL\n\"The \" D .OBJ \" bounces harmlessly off the glass.\" CR>)>)>>"
  },
  "SERPENT-FCN": {
   "name": "SERPENT-FCN",
   "file": "2actions.zil",
   "line": 3156,
   "endLine": 3170,
   "source": "<ROUTINE SERPENT-FCN ()\n\t <COND (<EQUAL? ,SERPENT ,WINNER>\n\t\t<TELL\n\"The serpent only stares hungrily at you.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<TELL\n\"He swims towards you with a powerful stroke of his flippers, dagger-like\nteeth dripping. Fortunately, he doesn't want to crash into the aquarium\nwall, and contents himself with splashing you with water.\" CR>)\n\t       (<AND <VERB? PUT>\n\t\t     <EQUAL? ,PRSO ,SERPENT>>\n\t\t<TELL \"Impossible for many reasons.\" CR>)\n\t       (<VERB? TAKE GIVE>\n\t\t<JIGS-UP\n\"He takes you instead. *Uurrp!*\">)>>"
  },
  "DEAD-SERPENT-FCN": {
   "name": "DEAD-SERPENT-FCN",
   "file": "2actions.zil",
   "line": 3172,
   "endLine": 3175,
   "source": "<ROUTINE DEAD-SERPENT-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"This may only be a baby sea serpent, but it's as big as a small whale.\" CR>)>>"
  },
  "GENIE-FCN": {
   "name": "GENIE-FCN",
   "file": "2actions.zil",
   "line": 3177,
   "endLine": 3341,
   "source": "<ROUTINE GENIE-FCN (\"OPTIONAL\" (RARG ,M-OBJECT) \"AUX\" V HOARD)\n\t<COND (<VERB? HELLO>\n\t       <TELL\n\"The genie grins demonically, but says nothing.\" CR>)\n\t      (<EQUAL? ,WINNER ,GENIE>\n\t       <COND (<NOT ,GENIE-READY?>\n\t\t      <TELL\n\"\\\"My fee is not paid! I perform no tasks for free! We demons have a\nstrong union these days.\\\"\" CR>\n\t\t      <RFATAL>)\n\t\t     (<VERB? SGIVE> <RFALSE>)\n\t\t     (<OR <G? <GET ,P-PRSO 0> 1>\n\t\t\t  <G? <GET ,P-PRSI 0> 1>>\n\t\t      <TELL\n\"\\\"I will do one thing only, oh gracious master!\\\"\" CR>\n\t\t      <RFATAL>)\n\t\t     (<AND <VERB? MOVE> <EQUAL? ,PRSO ,GLOBAL-MENHIR>>\n\t\t      <SETG MENHIR-POSITION 1>\n\t\t      <TELL\n\"The demon is gone for a moment. \\\"A trifle... My little finger alone\nwas enough.\\\"\" CR>\n\t\t      <GENIE-LEAVES>)\n\t\t     (<VERB? TAKE>\n\t\t      <COND (<EQUAL? ,PRSO ,GLOBAL-MENHIR>\n\t\t\t     <REMOVE ,MENHIR>\n\t\t\t     <SETG MENHIR-POSITION 2>\n\t\t\t     <TELL\n\"The demon flashes away for a second. \\\"I have little use for such a\nthing, but perhaps as a doorstop...\\\"\" CR>\n\t\t\t     <GENIE-LEAVES>)\n\t\t\t    (<EQUAL? ,PRSO ,WAND>\n\t\t\t     <TELL\n\"\\\"This I do gladly, oh fool!\\\" cackles the demon gleefully. He stretches\nout an enormous hand towards the wand and taking it like a toothpick (this\nis a large demon), points it at himself. \\\"Free!\\\" he commands, and the\ndemon and his wand vanish forever.\" CR>\n\t\t\t     <GENIE-LEAVES <>>\n\t\t\t     <REMOVE ,WAND>)\n\t\t\t    (<FSET? ,PRSO ,TAKEBIT>\n\t\t\t     <GENIE-LEAVES <>>\n\t\t\t     <REMOVE ,PRSO>\n\t\t\t     <TELL\n\"The demon snaps his fingers, the \" D ,PRSO \" spins wildly in the air in\nfront of him, then he and it depart.\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"\\\"I fear that I cannot take such a thing.\\\"\" CR>)>)\n\t\t     (<AND <VERB? GIVE> <EQUAL? ,PRSI ,ME>>\n\t\t      <COND (<EQUAL? ,PRSO ,WAND>\n\t\t\t     <TELL\n\"\\\"I hear and obey!\\\" says the demon. He stretches out an enormous hand\ntowards the wand. The Wizard is unsure what to do, pointing it threateningly\nat the demon, then at you. \\\"Fudge!\\\" he cries, but aside from a strong\nodor of chocolate in the air, there is no effect. The demon plucks the\nwand out of his hand (it's about toothpick-size to him) and gingerly lays\nit before you. He fades into the smoke, which disperses.\nThe wizard runs from the room in terror.\" CR>\n\t\t\t     <REMOVE ,WIZARD>\n\t\t\t     <GENIE-LEAVES <>>\n\t\t\t     <FCLEAR ,WAND ,NDESCBIT>\n\t\t\t     <MOVE ,WAND ,HERE>)\n\t\t\t    (<EQUAL? ,PRSO ,GLOBAL-MENHIR>\n\t\t\t     <MOVE ,MENHIR ,PENTAGRAM-ROOM>\n\t\t\t     <FCLEAR ,MENHIR ,NDESCBIT>\n\t\t\t     <FCLEAR ,MENHIR ,TAKEBIT>\n\t\t\t     <SETG MENHIR-POSITION 3>\n\t\t\t     <TELL\n\"He waves his hands, and the menhir drops softly at your feet.\" CR>\n\t\t\t     <GENIE-LEAVES>)\n\t\t\t    (<FSET? ,PRSO ,TAKEBIT>\n\t\t\t     <MOVE ,PRSO ,PENTAGRAM-ROOM>\n\t\t\t     <TELL\n\"The \" D ,PRSO \" appears before you and settles to the ground.\" CR>\n\t\t\t     <GENIE-LEAVES>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"\\\"Were it possible, this would be my fondest wish, but alas...\\\"\" CR>)>)\n\t\t     (<VERB? ATTACK>\n\t\t      <COND (<EQUAL? ,PRSO ,GLOBAL-CERBERUS>\n\t\t\t     <TELL\n\"\\\"This may prove taxing, but we'll see. Perhaps I'll tame him for a\npup instead.\\\" The demon disappears for an instant, then reappears. He\nlooks rather gnawed and scratched. He winces. \\\"Too much for me. Puppy\ndog, indeed. You're welcome to him. Never did like dogs anyway... Any\nother orders, oh beneficent one?\\\"\" CR>)\n\t\t\t    (<EQUAL? ,PRSO ,WIZARD>\n\t\t\t     <TELL\n\"The demon grins hideously. \\\"This has been my desire e'er since this\ncharlatan bent me to his service. I perform this deed with pleasure!\\\"\nThe demon forms himself back into a cloud of greasy smoke. The cloud\nenvelops the Wizard, who waves his wand fruitlessly, mumbling various\nphrases which begin with \\\"F\\\". A horrible scream is heard, and the smoke\nbegins to clear. Nothing remains of the Wizard but his wand.\" CR>\n\t\t\t     <REMOVE ,WIZARD>\n\t\t\t     <FCLEAR ,WAND ,NDESCBIT>\n\t\t\t     <MOVE ,WAND ,HERE>\n\t\t\t     <GENIE-LEAVES>)\n\t\t\t    (<EQUAL? ,PRSO ,ME>\n\t\t\t     <GENIE-LEAVES <>>\n\t\t\t     <SETG WINNER ,ADVENTURER>\n\t\t\t     <JIGS-UP\n\"\\\"Foolish mortal, if you insist...\\\" The demon crushes you with one\nblow of his enormous hand.\">)\n\t\t\t    (T\n\t\t\t     <TELL \n\"\\\"I know no way to kill a \" D ,PRSO \".\\\"\" CR>)>)\n\t\t     (<VERB? FIND EXAMINE>\n\t\t      <TELL\n\"\\\"I am not permitted to \">\n\t\t      <COND (<VERB? FIND>\n\t\t\t     <TELL \"answer questions\">)\n\t\t\t    (T <TELL \"perform such menial tasks\">)>\n\t\t      <TELL \". The terms of my contract\nare explicit on this matter, learned one. Surely you would not wish to\nviolate my contract?\\\" He licks his lips with a forked tongue like a\nsnake's. \\\"The penalty clauses are ... hmm ... devilish.\\\"\" CR>)\n\t\t     (T\n\t\t      <TELL\n\"\\\"Apologies, oh master, but even for such a one as I this is not possible.\\\"\nHe seems somewhat chagrined to have to admit this.\" CR>\n\t\t      <RTRUE>)>)\n\t      (<VERB? EXORCISE ATTACK MUNG>\n\t       <TELL\n\"The demon laughs uproariously.\" CR>)\n\t      (<AND <VERB? GIVE> <EQUAL? ,PRSI ,GENIE>>\n\t       <COND (<AND <EQUAL? ,PRSO ,IRON-BOX>\n\t\t\t   <IN? ,VIOLIN ,PRSO>>\n\t\t      <TELL\n\"The genie frowns briefly, then \">\n\t\t      <COND (<FSET? ,PRSO ,OPENBIT> <TELL \"looks inside\">)\n\t\t\t    (ELSE <TELL \"opens\">)>\n\t\t      <TELL \" the box. He smiles horribly.\" CR>\n\t\t      <REMOVE-CAREFULLY ,IRON-BOX>\n\t\t      <SETG PRSO ,VIOLIN>)>\n\t       <COND (<AND <GETPT ,PRSO ,P?VALUE>\n\t\t\t   <NOT <EQUAL? ,PRSO ,SWORD>>>\n\t\t      <REMOVE-CAREFULLY ,PRSO>\n\t\t      <SETG GENIE-HOARD <+ ,GENIE-HOARD 1>>\n\t\t      <SCORE-UPD 2>\n\t\t      <SET HOARD <+ ,GENIE-HOARD <CASE-WORTH>>>\n\t\t      <COND (<NOT <L? .HOARD ,TREASURES-MAX>>\n\t\t\t     <SETG GENIE-READY? T>\n\t\t\t     <PUTP ,WIZARD ,P?LDESC\n\"A dejected and fearful Wizard watches from the corner.\">\n\t\t\t     <TELL\n\"\\\"This will do for my fee. 'Tis a paltry hoard, but as you have done\nme a small service by loosing me from this wizard, it will suffice.\\\"\" CR>)\n\t\t\t    (T\n\t\t\t     <TELL\n\"\\\"\" <GET ,GENIE-THANKS .HOARD> \"\\\"\" CR>\n\t\t\t     <COND (<EQUAL? .HOARD 8>\n\t\t\t\t    <TELL\n\"The Wizard looks at you as if you are a madman. He tears his beard and\nstares at you fearfully.\" CR>)>\n\t\t\t     <RTRUE>)>)\n\t\t     (<BOMB? ,PRSO>\n\t\t      <GENIE-LEAVES <>>\n\t\t      <TELL\n\"\\\"I fear that this violates my contract, oh foolish one. Thus, I am\nfree to depart.\\\"\" CR>)\n\t\t     (T\n\t\t      <REMOVE-CAREFULLY ,PRSO>\n\t\t      <TELL\n\"The demon gladly takes the \" D ,PRSO \" and smiles balefully,\nrevealing enormous fangs.\" CR>)>)>>"
  },
  "GENIE-LEAVES": {
   "name": "GENIE-LEAVES",
   "file": "2actions.zil",
   "line": 3343,
   "endLine": 3348,
   "source": "<ROUTINE GENIE-LEAVES (\"OPTIONAL\" (NOISY? T))\n\t <FSET ,GENIE ,INVISIBLE>\n\t <COND (.NOISY?\n\t\t<TELL \"The genie departs, his agreement fulfilled.\" CR>)>\n\t <SETG P-CONT <>>\n\t <RFATAL>>"
  },
  "CASE-WORTH": {
   "name": "CASE-WORTH",
   "file": "2actions.zil",
   "line": 3367,
   "endLine": 3373,
   "source": "<ROUTINE CASE-WORTH (\"AUX\" F (W 0))\n\t <SET F <FIRST? ,WIZARD-CASE>>\n\t <REPEAT ()\n\t\t <COND (<NOT .F> <RETURN .W>)>\n\t\t <COND (<GETPT .F ,P?VALUE>\n\t\t\t<SET W <+ .W 1>>)>\n\t\t <SET F <NEXT? .F>>>>"
  },
  "PENTAGRAM-FCN": {
   "name": "PENTAGRAM-FCN",
   "file": "2actions.zil",
   "line": 3375,
   "endLine": 3398,
   "source": "<ROUTINE PENTAGRAM-FCN (\"OPTIONAL\" (RARG ,M-BEG))\n\t <COND (<EQUAL? .RARG ,M-BEG>\n\t\t<COND (<VERB? THROUGH BOARD>\n\t\t       <TELL\n\"You try to enter the pentagram, but are forced back by an invisible\npower.\" CR>)\n\t              (<AND <VERB? PUT PUT-ON> <EQUAL? ,PRSO ,PALANTIR-4>>\n\t\t       <REMOVE ,PALANTIR-4>\n\t\t       <FCLEAR ,GENIE ,INVISIBLE>\n\t\t       <MOVE ,GENIE ,PENTAGRAM-ROOM>\n\t\t       <TELL\n\"A cold wind blows outward from the sphere. The candles flicker, and a\nlow moan, almost inaudible, is heard. It rises in volume and pitch\nuntil it becomes a high-pitched keening. A dim shape becomes visible in\nthe air above the sphere. The shape resolves into a large and somewhat\nformidable looking demon. He looks around, tests the walls of the\npentagram experimentally, then sees you! \\\"Hmm, a new master...\\\" he\nsays under his breath. \\\"Greetings, oh master! Wouldst desire a\nservice, as our contract stateth? For some pittance of wealth, some\ntrifle, I will gratify thy desires to the utmost limit of my powers, and\nthey are not inconsiderable.\\\" He makes a pass with his massive arms and\nthe walls begin to shake a little. Another pass and the shaking stops.\n\\\"A nice effect... I find it makes for a better relationship to give\nsuch a demonstration early on.\\\" He grins vilely.\" CR>)>)>>"
  },
  "WIZARD-FCN": {
   "name": "WIZARD-FCN",
   "file": "2actions.zil",
   "line": 3400,
   "endLine": 3453,
   "source": "<ROUTINE WIZARD-FCN (\"OPTIONAL\" (RARG ,M-OBJECT) \"AUX\" OLIT)\n\t <COND (<EQUAL? ,WINNER ,WIZARD>\n\t\t<COND (<VERB? GIVE> <TELL\n\"The Wizard replies \\\"Foolishment!\\\"\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"The Wizard considers your statement carefully. His expression indicates\nhe regards it as fanciful.\" CR>)>)\n\t       (<AND <VERB? GIVE> <EQUAL? ,PRSI ,WIZARD>>\n\t\t<SET OLIT ,LIT>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<COND (<BOMB? ,PRSO>\n\t\t       <COND (<IN? ,GENIE ,PENTAGRAM-ROOM>\n\t\t\t      <MOVE ,PRSO ,HERE>\n\t\t\t      <TELL\n\"The wizard accepts this final folly resignedly.\" CR>)\n\t\t\t     (T\n\t\t\t      <REMOVE ,WIZARD>\n\t\t\t      <TELL\n\"\\\"Hmm...\\\" The Wizard mutters something, then waves his wand over the\nbomb. It transforms into a bouquet of flowers. Both Wizard and\nflowers disappear.\" CR>)>)\n\t\t      (<AND .OLIT <NOT ,LIT>>\n\t\t       <TELL\n\"\\\"Thank you.\\\" As the Wizard places the \" D ,PRSO \" under his robe, the\nroom becomes dark.\" CR>)\n\t\t      (T\n\t\t       <TELL \"\\\"Thank you.\\\"\" CR>)>)\n\t       (<HELLO? ,WIZARD>\n\t\t<TELL\n\"The Wizard seems surprised, much as you might be if a dog talked.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<REMOVE ,WIZARD>\n\t\t<COND (<IN? ,WAND ,WIZARD>\n\t\t       <TELL\n\"The Wizard retreats, waving his wand and chanting. He says \\\"Fear!\\\"\n\">)\n\t\t      (T\n\t\t       <TELL\n\"The Wizard tries to cast the \\\"Fear!\\\" spell, but without his wand!\n\">)>\n\t\t<COND (<NOT <FSET? ,GENIE ,INVISIBLE>>\n\t\t       <TELL\n\"Nothing happens! With a terrified glance at the demon, the wizard\nruns past you and out of the room.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"You are suddenly terrified. The Wizard seems huge and terrible,\nlooming over you. You flee, terrified. He chuckles, snaps his fingers, and\ndisappears.\" CR CR>\n\t\t       <SETG SPELL? ,S-FEAR>\n\t\t       <PUTP ,ADVENTURER ,P?ACTION MAGIC-ACTOR>\n\t\t       <ENABLE <QUEUE I-WIZARD 10>>\n\t\t       <RANDOM-WALK>)>)>>"
  },
  "I-WIZARD": {
   "name": "I-WIZARD",
   "file": "2actions.zil",
   "line": 3455,
   "endLine": 3652,
   "source": "<ROUTINE I-WIZARD (\"AUX\" CAST-PROB (PCNT 0) F (WLOC <LOC ,WINNER>))\n\t <ENABLE <QUEUE I-WIZARD 4>>\n\t <COND (,DEAD <RFALSE>)\n\t       (,SPELL?\n\t\t<COND (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t       <COND (<EQUAL? ,HERE ,WELL-TOP>\n\t\t\t      <JIGS-UP\n\"You plunge to the bottom of the shaft as the spell wears off.\">\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <FSET? ,HERE ,NONLANDBIT>\n\t\t\t\t   <NOT <EQUAL? ,HERE ,WELL-BOTTOM\n\t\t\t\t\t\t,VOLCANO-BOTTOM>>>\n\t\t\t      <JIGS-UP\n\"As the spell wears off, you find yourself making a half-gainer\ntowards the bottom of the volcano.\">\n\t\t\t      <RTRUE>)>)\n\t\t      (<EQUAL? ,SPELL? ,S-FEEBLE>\n\t\t       <SETG LOAD-ALLOWED ,LOAD-MAX>)\n\t\t      (<EQUAL? ,SPELL? ,S-FIERCE>\n\t\t       <SETG SWORD-GLOW 0>)\n\t\t      (<EQUAL? ,SPELL? ,S-FUMBLE>\n\t\t       <SETG FUMBLE-NUMBER 7>\n\t\t       <SETG FUMBLE-PROB 8>)>\n\t\t<COND (<GET ,SPELL-STOPS ,SPELL?>\n\t\t       <TELL <GET ,SPELL-STOPS ,SPELL?> CR>)>\n\t\t<PUTP ,ADVENTURER ,P?ACTION 0>\n\t\t<SETG SPELL? <>>\n\t\t<RTRUE>)>\n\t <COND (<IN? ,GENIE ,PENTAGRAM-ROOM>\n\t\t<DISABLE <INT I-WIZARD>> \n\t\t<COND (<NOT <IN? ,WIZARD ,PENTAGRAM-ROOM>>\n\t\t       <MOVE ,WIZARD ,PENTAGRAM-ROOM>\n\t\t       <COND (<IN? ,WINNER ,PENTAGRAM-ROOM>\n\t\t\t      <TELL\n\n\"Suddenly the Wizard materializes in the room. He is astonished by what\nhe sees: his servant in deep conversation with a common adventurer! He\ndraws forth his wand, waves it frantically, and incants \\\"Frobizz!\nFrobozzle! Frobnoid!\\\" The demon laughs heartily. \\\"You no longer\ncontrol the Black Crystal, hedge-wizard! Your wand is powerless! Your\ndoom is sealed!\\\" The demon turns to you, expectantly.\" CR>)>)>\n\t\t<RTRUE>)>\n\t <COND (<AND <NOT ,LIT>\n\t\t     <FSET? ,LAMP ,RMUNGBIT>\n\t\t     <G? ,SCORE 200>>\n\t\t<SETG ALWAYS-LIT T>\n\t\t<SETG LIT T>\n\t\t<TELL\n\"In the darkness you hear the voice of the Wizard. \\\"Dear me, you seem\nto have gotten into quite a pickle.\\\" He chuckles. \\\"Fluoresce!\\\" he\nincants. It is no longer dark.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<AND <LOC ,WIZARD> <PROB 80>>\n\t\t<COND (<AND ,LIT <IN? ,WIZARD ,HERE>>\n\t\t       <TELL \"The Wizard vanishes.\" CR>)>\n\t\t<REMOVE ,WIZARD>\n\t\t<RTRUE>)>\n\t <COND (<PROB 10>\n\t\t<COND (<NOT ,LIT>\n\t\t       <TELL\n\"You feel a slight outrush of air as something moves nearby.\" CR>)\n\t\t      (<EQUAL? ,HERE ,POSTS-ROOM ,POOL-ROOM>\n\t\t       <TELL\n\"A huge and terrible wizard appears before you, as large as the largest\ntree! He looks down on you as you would look upon a gnat!\" CR>)\n\t\t      (<FSET? ,HERE ,NONLANDBIT>\n\t\t       <TELL\n\"The Wizard appears, floating nonchalantly in the air beside you. He\ngrins sideways at you.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"A strange little man in a long cloak appears suddenly in the room.\nHe is wearing a high pointed hat embroidered with astrological signs.\nHe has a long, stringy, and unkempt beard.\" CR>)>\n\t\t<COND (<IN? ,PALANTIR-4 ,ADVENTURER>\n\t\t       <COND (,LIT\n\t\t\t      <TELL\n\"The Wizard notices that you carry the Black Crystal, and with an\nunseemly haste, he disappears.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"You feel a sudden inrush of air as though something disappeared.\" CR>)>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <RTRUE>)\n\t\t      (<PROB 20>\n\t\t       <COND (,LIT\n\t\t\t      <TELL\n\"He mutters something (muffled by his beard) and disappears as suddenly\nas he came.\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL\n\"You hear low, confused muttering.\" CR>)>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <RTRUE>)>\n\t\t<COND (<IN? ,PALANTIR-1 ,ADVENTURER>\n\t\t       <SET PCNT <+ .PCNT 1>>)>\n\t\t<COND (<IN? ,PALANTIR-2 ,ADVENTURER>\n\t\t       <SET PCNT <+ .PCNT 1>>)>\n\t\t<COND (<IN? ,PALANTIR-3 ,ADVENTURER>\n\t\t       <SET PCNT <+ .PCNT 1>>)>\n\t\t<SET CAST-PROB <- 80 <* .PCNT 20>>>\n\t\t<COND (,LIT\n\t\t       <TELL\n\"The Wizard draws forth his wand and waves it in your direction. It\nbegins to glow with a faint blue glow.\" CR>)\n\t\t      (ELSE\n\t\t       <TELL\n\"Suddenly, illuminated by the faint blue glow of a magic wand pointed\nin your direction, you see the Wizard!\" CR>)>\n\t\t<COND (<PROB .CAST-PROB>\n\t\t       <MOVE ,WIZARD ,HERE>\n\t\t       <SETG SPELL? <RANDOM ,SPELLS>>\n\t\t       <PUTP ,ADVENTURER ,P?ACTION MAGIC-ACTOR>\n\t\t       <ENABLE <QUEUE I-WIZARD \n\t\t\t\t      <+ 5\n\t\t\t\t\t <RANDOM <- 30 <* 5 .PCNT>>>>>>\n\t\t       <COND (<PROB 75>\n\t\t\t      <TELL\n\"The Wizard, in a deep and resonant voice, speaks the word \\\"\"\n<GET ,SPELL-NAMES ,SPELL?> \"!\\\" He then vanishes, cackling gleefully.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The Wizard, almost inaudibly, whispers a word beginning with \\\"F,\\\"\nand then disappears, chuckling nastily.\" CR>)>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <COND (<GET ,SPELL-HINTS ,SPELL?>\n\t\t\t      <TELL <GET ,SPELL-HINTS ,SPELL?> CR>)>\n\t\t       <COND (<EQUAL? ,SPELL? ,S-FALL>\n\t\t\t      <COND (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t     <TELL\n\"You suddenly fall headlong out of the \" D .WLOC \" as though\nsomeone had flipped it over.\" CR>\n\t\t\t\t     <COND (<EQUAL? ,HERE ,WELL-TOP>\n\t\t\t\t\t    <JIGS-UP\n\"You plummet to the bottom of the shaft.\">)\n\t\t\t\t\t   (<AND <FSET? ,HERE ,NONLANDBIT>\n\t\t\t\t\t\t <NOT <EQUAL? ,HERE\n\t\t\t\t\t\t\t      ,VOLCANO-BOTTOM\n\t\t\t\t\t\t\t      ,WELL-BOTTOM>>>\n\t\t\t\t\t    <JIGS-UP\n\"You make a rather messy swan dive to the bottom of the volcano.\">)\n\t\t\t\t\t   (ELSE <MOVE ,WINNER ,HERE>)>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t\t      <COND (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t     <TELL\n\" You rise majestically out of the \" D .WLOC \", coming to a stop about five\nfeet above it and to one side.\" CR>\n\t\t\t\t     <MOVE ,WINNER ,HERE>)\n\t\t\t\t    (T\n\t\t\t\t     <TELL\n\"Slowly, you and all your belongings rise into the air, stopping after\nabout five feet.\" CR>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FEEBLE>\n\t\t\t      <SETG LOAD-ALLOWED 50>\n\t\t\t      <COND (<SET F <FIRST? ,WINNER>>\n\t\t\t\t     <TELL\n\"In fact, you feel so weak that you drop the \" D .F \".\" CR>\n\t\t\t\t     <MOVE .F .WLOC>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FEAR>\n\t\t\t      <COND (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t     <TELL\n\"You cower in the corner of the \" D .WLOC \", hoping the wizard\nwon't see you.\" CR>)\n\t\t\t\t    (T\n\t\t\t\t     <CRLF>\n\t\t\t\t     <RANDOM-WALK>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FUMBLE>\n\t\t\t      <SETG FUMBLE-NUMBER 3>\n\t\t\t      <SETG FUMBLE-PROB 25>\n\t\t\t      <COND (<SET F <FIRST? ,ADVENTURER>>\n\t\t\t\t     <TELL\n\"Ooops! You dropped the \" D .F \".\" CR>\n\t\t\t\t     <MOVE .F .WLOC>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FILCH>\n\t\t\t      <COND (<ROB ,WINNER ,WIZARD-CASE>\n\t\t\t\t     <TELL\n\"Something you are carrying has disappeared!\" CR>)>)\n\t\t\t     (<EQUAL? ,SPELL? ,S-FIERCE>\n\t\t\t      <TELL\n\"The Wizard mumbles something under his breath, and just before you\nreach him, he vanishes.\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<PROB 50>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <TELL\n\"There is a loud crackling noise. Blue smoke rises from out of the\nWizard's sleeve. He sighs and disappears.\" CR>)\n\t\t      (<PROB 50>\n\t\t       <REMOVE ,WIZARD>\n\t\t       <TELL\n\"The Wizard incants \\\"\" <RANDOM-ELEMENT ,SPELL-NAMES> \"!\\\" but nothing\nhappens. He shakes the wand. Nothing happens. With a slightly\nembarrassed glance in your direction, he vanishes.\" CR>)\n\t\t      (T\n\t\t       <MOVE ,WIZARD ,HERE>\n\t\t       <TELL\n\"The Wizard seems about to say something, but thinks better of it,\nand peers at you from under his bushy eyebrows.\" CR>)>)>>"
  },
  "ROB": {
   "name": "ROB",
   "file": "2actions.zil",
   "line": 3708,
   "endLine": 3714,
   "source": "<ROUTINE ROB (WHO WHERE \"AUX\" N X (ROBBED? <>))\n\t <SET X <FIRST? .WHO>>\n\t <REPEAT ()\n\t\t <COND (<NOT .X> <RETURN .ROBBED?>)>\n\t\t <SET N <NEXT? .X>>\n\t\t <COND (<RIPOFF .X .WHERE> <SET ROBBED? T>)>\n\t\t <SET X .N>>>"
  },
  "RIPOFF": {
   "name": "RIPOFF",
   "file": "2actions.zil",
   "line": 3716,
   "endLine": 3726,
   "source": "<ROUTINE RIPOFF (X WHERE)\n\t <COND (<AND <NOT <FSET? .X ,INVISIBLE>>\n\t\t     <GETPT .X ,P?VALUE>\n\t\t     <NOT <EQUAL? .X ,PALANTIR-1>>\n\t\t     <NOT <EQUAL? .X ,PALANTIR-2>>\n\t\t     <NOT <EQUAL? .X ,PALANTIR-3>>\n\t\t     <NOT <EQUAL? .X ,GOLD-KEY>>\n\t\t     <NOT <EQUAL? .X ,CANDY>>>\n\t\t<MOVE .X .WHERE>\n\t\t<FSET .X ,TOUCHBIT>\n\t\t<RTRUE>)>>"
  },
  "WIZARD-CASE-FCN": {
   "name": "WIZARD-CASE-FCN",
   "file": "2actions.zil",
   "line": 3728,
   "endLine": 3744,
   "source": "<ROUTINE WIZARD-CASE-FCN ()\n\t <COND (<EQUAL? ,WINNER ,GENIE>\n\t\t<COND (<VERB? MUNG OPEN>\n\t\t       <REMOVE ,WIZARD-CASE>\n\t\t       <MOVE ,BROKEN-CASE ,TROPHY-ROOM>\n\t\t       <TELL\n\"The demon smashes the case into smithereens. Everything in it smashes\nas well.\" CR>)>)\n\t       (<AND <VERB? ENCHANT> <EQUAL? ,SPELL-USED ,W?FILCH>>\n\t\t<ROB ,WIZARD-CASE ,HERE>\n\t\t<SETG SPELL-HANDLED? T>\n\t\t<TELL\n\"The contents of the case are arrayed at your feet.\" CR>)\n\t       (<VERB? OPEN MUNG CLOSE TAKE>\n\t\t<TELL\n\"The case is protected by a fearful spell. You cannot touch it in any\nway.\" CR>)>>"
  },
  "WAND-FCN": {
   "name": "WAND-FCN",
   "file": "2actions.zil",
   "line": 3751,
   "endLine": 3806,
   "source": "<ROUTINE WAND-FCN ()\n\t <COND (<AND <VERB? TAKE PUT GIVE> <IN? ,WAND ,WIZARD>>\n\t\t<COND (<EQUAL? ,WINNER ,ADVENTURER>\n\t\t       <TELL \"The Wizard snatches it away.\" CR>)\n\t\t      (<EQUAL? ,WINNER ,ROBOT>\n\t\t       <JIGS-UP\n\"The Wizard snatches the wand away, muttering the word \\\"Float\\\" at the\nrobot. Unfortunately he has no floating-point processor and dies in a\nvain attempt to divide 4.85 by 3.62.\">)>)\n\t       (<AND <VERB? WAVE>\n\t\t     <EQUAL? ,PRSI ,GRUE>>\n\t        <TELL\n\"There is no grue in sight, but a hissing sound issues forth from the\ndarkness.\" CR>)\n\t       (<VERB? WAVE RUB RAISE>\n\t\t<COND (<AND <EQUAL? ,PRSO ,WAND>\n\t\t\t    <NOT <IN? ,WAND ,WINNER>>>\n\t\t       <TELL \"You don't have the wand!\" CR>\n\t\t       <RTRUE>)\n\t\t      (<OR ,WAND-ON ,SPELL-USED ,SPELL-VICTIM>\n\t\t       <COND (<PROB 5>\n\t\t\t      <JIGS-UP\n\"The wand was still recharging from its last use. It discharges magic all\nover everything. You turn into a toad, the room fills with a fetid smell,\nand all sorts of other grubby things happen. Then the wand explodes!\">)\n\t\t\t     (T\n\t\t\t      <TELL\n\"A lot you know about magic! A magic wand takes a while to recharge\nafter use! You might cause it to short-circuit!\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (<VERB? WAVE>\n\t\t       <COND (<AND <EQUAL? ,PRSO ,WAND> ,PRSI>\n\t\t\t      <SETG WAND-ON ,PRSI>\n\t\t\t      <SETG WAND-ON-LOC ,HERE>)\n\t\t\t     (T <TELL \"At what?\" CR> <RTRUE>)>)\n\t\t      (<VERB? RUB>\n\t\t       <COND (<AND <EQUAL? ,PRSI ,WAND> ,PRSO>\n\t\t\t      <SETG WAND-ON ,PRSO>)\n\t\t\t     (T <TELL \"Touch what?\" CR> <RTRUE>)>)\n\t\t      (<VERB? RAISE>\n\t\t       <TELL \"The wand grows warm and seems to vibrate.\" CR>\n\t\t       <RTRUE>)>\n\t\t<COND (,WAND-ON\n\t\t       <SETG SPELL-USED <>>\n\t\t       <SETG SPELL-VICTIM <>>\n\t\t       <COND (<EQUAL? ,WAND-ON ,ME ,WAND>\n\t\t\t      <SETG WAND-ON <>>\n\t\t\t      <TELL\n\"Fortunately a safety interlock prevents the fatal feedback loop that\nthis would cause.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"The wand grows warm, the \" D ,WAND-ON \" seems to glow dimly with\nmagical essences, and you feel suffused with power.\" CR>)>\n\t\t       <ENABLE <QUEUE I-WAND 2>>)>\n\t\tT)>>"
  },
  "I-WAND": {
   "name": "I-WAND",
   "file": "2actions.zil",
   "line": 3810,
   "endLine": 3820,
   "source": "<ROUTINE I-WAND ()\n\t <COND (<AND ,WAND-ON\n\t\t     <OR <EQUAL? ,WAND-ON-LOC ,HERE>\n\t\t\t <IN? ,WAND-ON ,WINNER>>>\n\t\t<TELL\n\"The \" D ,WAND-ON \" stops glowing and the power within you weakens.\" CR>\n\t\t<SETG WAND-ON <>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<SETG WAND-ON <>>\n\t\t<RFALSE>)>>"
  },
  "WIZARD-QUARTERS-FCN": {
   "name": "WIZARD-QUARTERS-FCN",
   "file": "2actions.zil",
   "line": 3822,
   "endLine": 3834,
   "source": "<ROUTINE WIZARD-QUARTERS-FCN (RARG \"AUX\" PICK L)\n\t <COND (<EQUAL? .RARG ,M-LOOK ,M-FLASH>\n\t\t<TELL\n\"This is where the Wizard of Frobozz lives. The room is \">\n\t\t<SET L <GET ,WIZQDESCS 0>>\n\t\t<SET PICK <RANDOM .L>>\n\t\t<COND (<EQUAL? .PICK ,WIZQLAST>\n\t\t       <COND (<EQUAL? .PICK .L>\n\t\t\t      <SET PICK <- .PICK 1>>)\n\t\t\t     (T\n\t\t\t      <SET PICK <+ .PICK 1>>)>)>\n\t\t<SETG WIZQLAST .PICK>\n\t\t<TELL <GET ,WIZQDESCS .PICK> CR>)>>"
  },
  "BRIDGE-FCN": {
   "name": "BRIDGE-FCN",
   "file": "2actions.zil",
   "line": 3850,
   "endLine": 3855,
   "source": "<ROUTINE BRIDGE-FCN ()\n\t <COND (<VERB? CROSS>\n\t\t<DO-WALK ,P?CROSS>)\n\t       (<VERB? LEAP>\n\t\t<JIGS-UP\n\"You execute a perfect swan-dive into the depths below.\">)>>"
  },
  "STREAM-FCN": {
   "name": "STREAM-FCN",
   "file": "2actions.zil",
   "line": 3859,
   "endLine": 3863,
   "source": "<ROUTINE STREAM-FCN ()\n\t <COND (<VERB? SWIM THROUGH>\n\t\t<TELL \"You can't swim in the stream.\" CR>)\n\t       (<VERB? CROSS>\n\t\t<TELL \"You'll have to find a ford or a bridge.\" CR>)>>"
  },
  "CHASM-FCN": {
   "name": "CHASM-FCN",
   "file": "2actions.zil",
   "line": 3865,
   "endLine": 3876,
   "source": "<ROUTINE CHASM-FCN ()\n\t <COND (<OR <VERB? LEAP>\n\t\t    <AND <VERB? PUT> <EQUAL? ,PRSO ,ME>>>\n\t\t<TELL\n\"For a change, you look before leaping. You realize you would\nnever survive.\" CR>)\n\t       (<VERB? CROSS>\n\t\t<TELL \"You'll have to find a bridge.\" CR>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<TELL\n\"The \" D ,PRSO \" drops out of sight into the chasm.\" CR>\n\t\t<REMOVE ,PRSO>)>>"
  },
  "TUNNEL-OBJECT": {
   "name": "TUNNEL-OBJECT",
   "file": "2actions.zil",
   "line": 3878,
   "endLine": 3881,
   "source": "<ROUTINE TUNNEL-OBJECT ()\n\t <COND (<AND <VERB? THROUGH> <GETPT ,HERE ,P?IN>>\n\t\t<DO-WALK ,P?IN> <RTRUE>)\n\t       (T <PATH-OBJECT>)>>"
  },
  "STALA-PSEUDO": {
   "name": "STALA-PSEUDO",
   "file": "2actions.zil",
   "line": 3883,
   "endLine": 3886,
   "source": "<ROUTINE STALA-PSEUDO ()\n\t <COND (<VERB? TAKE MUNG>\n\t\t<TELL\n\"The only ones you can reach are too large to successfully break off.\" CR>)>>"
  },
  "MOSS-FCN": {
   "name": "MOSS-FCN",
   "file": "2actions.zil",
   "line": 3888,
   "endLine": 3892,
   "source": "<ROUTINE MOSS-FCN ()\n\t <COND (<VERB? TAKE RUB>\n\t\t<TELL\n\"Some of the moss rubs off on you, but it stops glowing very quickly\nonce plucked from its environment.\" CR>)>>"
  },
  "ROSE-BUSH-FCN": {
   "name": "ROSE-BUSH-FCN",
   "file": "2actions.zil",
   "line": 3894,
   "endLine": 3898,
   "source": "<ROUTINE ROSE-BUSH-FCN ()\n\t <COND (<VERB? TAKE>\n\t\t<TELL\n\"You prick your finger trying to take a rose, and jump back annoyed.\nThe rose almost seemed to move its thorns into your path.\" CR>)>>"
  },
  "I-SPELL": {
   "name": "I-SPELL",
   "file": "2actions.zil",
   "line": 3900,
   "endLine": 3906,
   "source": "<ROUTINE I-SPELL ()\n\t <COND (<AND <NOT ,SPELL-HANDLED?> ,SPELL-VICTIM>\n\t\t<PERFORM ,V?DISENCHANT ,SPELL-VICTIM>)>\n\t <SETG SPELL-HANDLED? <>>\n\t <SETG WAND-ON <>>\n\t <SETG SPELL-USED <>>\n\t <SETG SPELL-VICTIM <>>>"
  },
  "V-DIAGNOSE": {
   "name": "V-DIAGNOSE",
   "file": "2actions.zil",
   "line": 3917,
   "endLine": 3934,
   "source": "<ROUTINE V-DIAGNOSE ()\n\t <COND (,DEAD <TELL \"You are dead.\">)\n\t       (<EQUAL? ,SPELL? ,S-FERMENT>\n\t\t<TELL \"You are drunk.\">)\n\t       (<EQUAL? ,SPELL? ,S-FEEBLE>\n\t\t<TELL \"You seem unusually weak right now.\">)\n\t       (<EQUAL? ,SPELL? ,S-FLOAT>\n\t\t<TELL \"You seem somewhat light.\">)\n\t       (<EQUAL? ,SPELL? ,S-FREEZE>\n\t\t<TELL \"You are frozen stiff.\">)\n\t       (ELSE <TELL \"You are in perfect health.\">)>\n\t <CRLF>\n\t <COND (<NOT <0? ,DEATHS>>\n\t\t<TELL \"You have been killed \">\n\t\t<COND (<1? ,DEATHS> <TELL \"once.\">)\n\t\t      (<EQUAL? ,DEATHS 2> <TELL \"twice.\">)\n\t\t      (T <TELL \"an awful lot.\">)>\n\t\t<CRLF>)>>"
  },
  "V-SCORE": {
   "name": "V-SCORE",
   "file": "2actions.zil",
   "line": 3936,
   "endLine": 3957,
   "source": "<ROUTINE V-SCORE (\"OPTIONAL\" (ASK? T))\n\t #DECL ((ASK?) <OR ATOM FALSE>)\n\t <TELL \"Your score \">\n\t <COND (.ASK? <TELL \"would be \">) (ELSE <TELL \"is \">)>\n\t <TELL N ,SCORE>\n\t <TELL \" (total of 400 points), in \">\n\t <TELL N ,MOVES>\n\t <COND (<1? ,MOVES> <TELL \" move.\">) (ELSE <TELL \" moves.\">)>\n\t <CRLF>\n\t <TELL \"This score gives you the rank of \">\n\t <COND (<EQUAL? ,SCORE 400> <TELL \"Master Adventurer\">\n\t\t<COND (<NOT ,WON-FLAG>\n\t\t       <TELL \", but somehow you don't feel done\">)>)\n\t       (<G? ,SCORE 360> <TELL \"Wizard\">)\n\t       (<G? ,SCORE 320> <TELL \"Master\">)\n\t       (<G? ,SCORE 240> <TELL \"Adventurer\">)\n\t       (<G? ,SCORE 160> <TELL \"Junior Adventurer\">)\n\t       (<G? ,SCORE 80> <TELL \"Novice Adventurer\">)\n\t       (<G? ,SCORE 40> <TELL \"Amateur Adventurer\">)\n\t       (T <TELL \"Beginner\">)>\n\t <TELL \".\" CR>\n\t ,SCORE>"
  },
  "JIGS-UP": {
   "name": "JIGS-UP",
   "file": "2actions.zil",
   "line": 3959,
   "endLine": 3993,
   "source": "<ROUTINE JIGS-UP (\"OPTIONAL\" (DESC <>) (PLAYER? <>))\n \t #DECL ((PLAYER?) <OR ATOM FALSE>)\n \t <COND (.DESC <TELL .DESC CR>)>\n\t <COND (<NOT <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t<TELL \"\n|    ****  The \" D ,WINNER \" has died  ****\n|\n|\">\n\t\t<REMOVE ,WINNER>\n\t\t<SETG WINNER ,ADVENTURER>\n\t\t<SETG HERE <LOC ,WINNER>>\n\t\t<RFATAL>)>\n\t <PROG ()\n\t       <SCORE-UPD -10>\n\t       <TELL \"\n|    ****  You have died  ****\n|\n|\">\n\t       <SETG DEAD T>\n\t\t <SETG SPELL? <>>\n\t\t <PUTP ,ADVENTURER ,P?ACTION 0>\n\t\t <SETG DEATHS <+ ,DEATHS 1>>\n\t\t <MOVE ,WINNER ,HERE>\n\t\t <TELL\n\"Now, let's take a look here...\nWell, you probably deserve another chance. I can't quite fix you\nup completely, but you can't have everything.\" CR CR>\n\t\t <FCLEAR ,DEAD-PALANTIR-1 ,TOUCHBIT>\n\t\t <FCLEAR ,DEAD-PALANTIR-2 ,TOUCHBIT>\n\t\t <FCLEAR ,DEAD-PALANTIR-3 ,TOUCHBIT>\n\t\t <RANDOMIZE-OBJECTS>\n\t\t <GOTO ,DEAD-PALANTIR-1>\n\t\t <SETG P-CONT <>>\n\t\t <KILL-INTERRUPTS>\n\t\t <RFATAL>>>"
  },
  "RANDOMIZE-OBJECTS": {
   "name": "RANDOMIZE-OBJECTS",
   "file": "2actions.zil",
   "line": 3995,
   "endLine": 4016,
   "source": "<ROUTINE RANDOMIZE-OBJECTS (\"AUX\" (R <>) F N L)\n\t <COND (<IN? ,LAMP ,WINNER>\n\t\t<MOVE ,LAMP ,INSIDE-BARROW>)>\n\t <SET N <FIRST? ,WINNER>>\n\t <REPEAT ()\n\t\t <SET F .N>\n\t\t <COND (<NOT .F> <RETURN>)>\n\t\t <SET N <NEXT? .F>>\n\t\t <COND (<AND <EQUAL? .F ,BILLS ,PORTRAIT>\n\t\t\t     <OR <EQUAL? ,HERE ,VAULT ,DEPOSITORY ,OFFICE>\n\t\t\t\t <EQUAL? ,HERE ,SMALL-ROOM>>>\n\t\t\t<MOVE .F ,HERE>)\n\t\t       (<OR <EQUAL? .F ,GOLD-KEY>\n\t\t\t    <EQUAL? .F ,CANDY>\n\t\t\t    <EQUAL? .F ,PALANTIR-1>\n\t\t\t    <EQUAL? .F ,PALANTIR-2>\n\t\t\t    <EQUAL? .F ,PALANTIR-3>>\n\t\t\t<MOVE .F ,CAROUSEL-ROOM>)\n\t\t       (<FSET? .F ,STAGGERED>\n\t\t\t<MOVE .F ,WIZARD-CASE>)\n\t\t       (ELSE\n\t\t\t<MOVE .F ,GAZEBO-ROOM>)>>>"
  },
  "KILL-INTERRUPTS": {
   "name": "KILL-INTERRUPTS",
   "file": "2actions.zil",
   "line": 4018,
   "endLine": 4026,
   "source": "<ROUTINE KILL-INTERRUPTS ()\n\t <DISABLE <INT I-GNOME>>\n\t <DISABLE <INT I-LEDGE>>\n\t <DISABLE <INT I-NERVOUS>>\n\t <DISABLE <INT I-ZGNOME-OUT>>\n\t <DISABLE <INT I-ZGNOME>>\n\t <DRAGON-LEAVES>\n\t <DISABLE <INT I-MATCH>>\n\t <RTRUE>>"
  },
  "FIND-WEAPON": {
   "name": "FIND-WEAPON",
   "file": "2actions.zil",
   "line": 4028,
   "endLine": 4035,
   "source": "<ROUTINE FIND-WEAPON (O \"AUX\" W)\n\t <SET W <FIRST? .O>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<EQUAL? .W ,SWORD>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>> <RFALSE>)>>>"
  },
  "BUCKET-CONT": {
   "name": "BUCKET-CONT",
   "file": "2actions.zil",
   "line": 4037,
   "endLine": 4039,
   "source": "<ROUTINE BUCKET-CONT ()\n\t <COND (<AND <VERB? TAKE> <NOT <IN? ,WINNER ,BUCKET>>>\n\t        <TELL \"You'll need to get in the bucket to reach it.\" CR>)>>"
  },
  "GO": {
   "name": "GO",
   "file": "2dungeon.zil",
   "line": 7,
   "endLine": 31,
   "source": "<ROUTINE GO () \n\t <PUTB ,P-LEXV 0 59>\n;\"put interrupts on clock chain\"\n\t <ENABLE <QUEUE I-WIZARD 4>>\n\t <QUEUE I-LANTERN 200>\n;\"clean up junk compiler can't do\"\n\t <PUTP ,BALLOON ,P?VTYPE ,NONLANDBIT>\n\t <PUTP ,BUCKET ,P?VTYPE ,NONLANDBIT>\n\t <PUTP ,SEWL ,P?SIZE ,P?EAST>\n\t <PUTP ,SWWL ,P?SIZE ,P?WEST>\n\t <PUTP ,SSWL ,P?SIZE ,P?SOUTH>\n\t <PUTP ,SNWL ,P?SIZE ,P?NORTH>\n;\"set up and go\"\n\t <SETG LIT T>\n\t <SETG WINNER ,ADVENTURER>\n\t <SETG PLAYER ,ADVENTURER>\n\t <SETG HERE ,INSIDE-BARROW>\n\t <SETG P-IT-OBJECT <>>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<V-VERSION>\n\t\t<CRLF>)>\n\t <MOVE ,WINNER ,HERE>\n\t <V-LOOK>\n\t <MAIN-LOOP>\n\t <AGAIN>>"
  },
  "HEDGES-F": {
   "name": "HEDGES-F",
   "file": "2dungeon.zil",
   "line": 349,
   "endLine": 353,
   "source": "<ROUTINE HEDGES-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"The hedges are shaped like various animals: dogs, serpents, dragons, and\nthe like, and they are vaguely troubling to look at.\" CR>)>>"
  },
  "LT-CRACK-PSEUDO": {
   "name": "LT-CRACK-PSEUDO",
   "file": "2dungeon.zil",
   "line": 593,
   "endLine": 597,
   "source": "<ROUTINE LT-CRACK-PSEUDO ()\n\t <COND (<VERB? BOARD THROUGH>\n\t\t<DO-WALK ,P?SOUTH>\n\t\t<RTRUE>)\n\t       (T <CC-CRACK-PSEUDO>)>>"
  },
  "CC-CRACK-PSEUDO": {
   "name": "CC-CRACK-PSEUDO",
   "file": "2dungeon.zil",
   "line": 616,
   "endLine": 622,
   "source": "<ROUTINE CC-CRACK-PSEUDO ()\n\t <COND (<VERB? THROUGH BOARD>\n\t\t<DO-WALK ,P?NORTH>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"The crack is fairly wide. You should be able to get into it.\" CR>)>>"
  },
  "GLOBAL-MENHIR-F": {
   "name": "GLOBAL-MENHIR-F",
   "file": "2dungeon.zil",
   "line": 662,
   "endLine": 663,
   "source": "<ROUTINE GLOBAL-MENHIR-F ()\n\t <TELL \"It's not here.\" CR>>"
  },
  "GLOBAL-CERBERUS-F": {
   "name": "GLOBAL-CERBERUS-F",
   "file": "2dungeon.zil",
   "line": 874,
   "endLine": 875,
   "source": "<ROUTINE GLOBAL-CERBERUS-F ()\n\t <TELL \"He's not here.\" CR>>"
  },
  "CRACK-PSEUDO": {
   "name": "CRACK-PSEUDO",
   "file": "2dungeon.zil",
   "line": 1488,
   "endLine": 1491,
   "source": "<ROUTINE CRACK-PSEUDO ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL\n\"It is a small crack (as advertised) with no redeeming value.\" CR>)>>"
  },
  "ALICE-HOLE": {
   "name": "ALICE-HOLE",
   "file": "2dungeon.zil",
   "line": 1520,
   "endLine": 1526,
   "source": "<ROUTINE ALICE-HOLE ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"The hole is very small. You could never enter it.\" CR>)\n\t       (<VERB? LOOK-INSIDE>\n\t\t<TELL \"You can't see what's beyond the hole from here.\" CR>)\n\t       (<AND <VERB? PUT> <EQUAL? ,PRSI ,PSEUDO-OBJECT>>\n\t\t<TELL \"It doesn't fit through the hole.\" CR>)>>"
  },
  "SLOT-F": {
   "name": "SLOT-F",
   "file": "2dungeon.zil",
   "line": 1942,
   "endLine": 1949,
   "source": "<ROUTINE SLOT-F ()\n\t <COND (<AND <VERB? LOOK-INSIDE> <NOT <FIRST? ,SLOT>>>\n\t\t<TELL \"There's nothing in the hole.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"The oblong hole has been chipped out of the box, probably by someone\nwanting whatever is inside the box. The attempt was a pathetic failure,\nhowever.\" CR>)>>"
  },
  "TEAPOT-F": {
   "name": "TEAPOT-F",
   "file": "2dungeon.zil",
   "line": 2551,
   "endLine": 2553,
   "source": "<ROUTINE TEAPOT-F ()\n\t <COND (<VERB? CLOSE>\n\t\t<TELL \"The teapot has no lid.\" CR>)>>"
  },
  "ROSE-F": {
   "name": "ROSE-F",
   "file": "2dungeon.zil",
   "line": 2597,
   "endLine": 2602,
   "source": "<ROUTINE ROSE-F ()\n\t <COND (<VERB? SMELL>\n\t\t<TELL\n\"Unlike your efforts here, it comes out smelling like a rose.\"CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL \"A rose is a rose is a rose....\" CR>)>>"
  },
  "FOOTPAD-F": {
   "name": "FOOTPAD-F",
   "file": "2dungeon.zil",
   "line": 2706,
   "endLine": 2708,
   "source": "<ROUTINE FOOTPAD-F ()\n\t <COND (<VERB? EXAMINE>\n\t\t<TELL \"A footpad is a thief.\" CR>)>>"
  },
  "COMPASS-F": {
   "name": "COMPASS-F",
   "file": "2dungeon.zil",
   "line": 2716,
   "endLine": 2733,
   "source": "<ROUTINE COMPASS-F ()\n\t <COND (<VERB? FIND>\n\t\t<TELL\n\"It's on your person. And lucky for you, or you would become hopelessly\nlost.\" CR>)\n\t       (<VERB? DROP THROW OVERBOARD>\n\t\t<TELL\n\"You can't get rid of it. It is an extension of yourself.\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<TELL\n\"It's one of those gizmos with a needle and a card with the eight major\ncompass directions. Simple, but effective.\" CR>)\n\t       (<VERB? READ>\n\t\t<TELL\n\"It doesn't make very interesting reading - just the compass directions.\" CR>)\n\t       (T\n\t\t<TELL\n\"You can't do that. And don't bother to ask why.\" CR>)>>"
  },
  "QUEUE": {
   "name": "QUEUE",
   "file": "gclock.zil",
   "line": 21,
   "endLine": 24,
   "source": "<ROUTINE QUEUE (RTN TICK \"AUX\" CINT)\n\t #DECL ((RTN) ATOM (TICK) FIX (CINT) <PRIMTYPE VECTOR>)\n\t <PUT <SET CINT <INT .RTN>> ,C-TICK .TICK>\n\t .CINT>"
  },
  "INT": {
   "name": "INT",
   "file": "gclock.zil",
   "line": 26,
   "endLine": 39,
   "source": "<ROUTINE INT (RTN \"OPTIONAL\" (DEMON <>) E C INT)\n\t #DECL ((RTN) ATOM (DEMON) <OR ATOM FALSE> (E C INT) <PRIMTYPE\n\t\t\t\t\t\t\t      VECTOR>)\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <SET C <REST ,C-TABLE ,C-INTS>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG C-INTS <- ,C-INTS ,C-INTLEN>>\n\t\t\t<AND .DEMON <SETG C-DEMONS <- ,C-DEMONS ,C-INTLEN>>>\n\t\t\t<SET INT <REST ,C-TABLE ,C-INTS>>\n\t\t\t<PUT .INT ,C-RTN .RTN>\n\t\t\t<RETURN .INT>)\n\t\t       (<EQUAL? <GET .C ,C-RTN> .RTN> <RETURN .C>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "CLOCKER": {
   "name": "CLOCKER",
   "file": "gclock.zil",
   "line": 43,
   "endLine": 60,
   "source": "<ROUTINE CLOCKER (\"AUX\" C E TICK (FLG <>))\n\t #DECL ((C E) <PRIMTYPE VECTOR> (TICK) FIX (FLG) <OR FALSE ATOM>)\n\t <COND (,CLOCK-WAIT <SETG CLOCK-WAIT <>> <RFALSE>)>\n\t <SET C <REST ,C-TABLE <COND (,P-WON ,C-INTS) (T ,C-DEMONS)>>>\n\t <SET E <REST ,C-TABLE ,C-TABLELEN>>\n\t <REPEAT ()\n\t\t <COND (<==? .C .E>\n\t\t\t<SETG MOVES <+ ,MOVES 1>>\n\t\t\t<RETURN .FLG>)\n\t\t       (<NOT <0? <GET .C ,C-ENABLED?>>>\n\t\t\t<SET TICK <GET .C ,C-TICK>>\n\t\t\t<COND (<0? .TICK>)\n\t\t\t      (T\n\t\t\t       <PUT .C ,C-TICK <- .TICK 1>>\n\t\t\t       <COND (<AND <NOT <G? .TICK 1>>\n\t\t\t\t\t   <APPLY <GET .C ,C-RTN>>>\n\t\t\t\t      <SET FLG T>)>)>)>\n\t\t <SET C <REST .C ,C-INTLEN>>>>"
  },
  "NOT-HERE-OBJECT-F": {
   "name": "NOT-HERE-OBJECT-F",
   "file": "gglobals.zil",
   "line": 52,
   "endLine": 74,
   "source": "<ROUTINE NOT-HERE-OBJECT-F (\"AUX\" TBL (PRSO? T) OBJ)\n\t ;\"This COND is game independent (except the TELL)\"\n\t <COND (<AND <EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t     <EQUAL? ,PRSI ,NOT-HERE-OBJECT>>\n\t\t<TELL \"Those things aren't here!\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? ,PRSO ,NOT-HERE-OBJECT>\n\t\t<SET TBL ,P-PRSO>)\n\t       (T\n\t\t<SET TBL ,P-PRSI>\n\t\t<SET PRSO? <>>)>\n\t ;\"Here is the default 'cant see any' printer\"\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<EQUAL? ,WINNER ,PLAYER>\n\t\t<TELL \"You can't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,WINNER \" seems confused. \\\"I don't see any \">\n\t\t<NOT-HERE-PRINT .PRSO?>\n\t\t<TELL \" here!\\\"\" CR>)>\n\t <RTRUE>>"
  },
  "NOT-HERE-PRINT": {
   "name": "NOT-HERE-PRINT",
   "file": "gglobals.zil",
   "line": 109,
   "endLine": 116,
   "source": "<ROUTINE NOT-HERE-PRINT (PRSO?)\n <COND (,P-OFLAG\n\t<COND (,P-XADJ <PRINTB ,P-XADJN>)>\n\t<COND (,P-XNAM <PRINTB ,P-XNAM>)>)\n       (.PRSO?\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC1> <GET ,P-ITBL ,P-NC1L> <>>)\n       (T\n\t<BUFFER-PRINT <GET ,P-ITBL ,P-NC2> <GET ,P-ITBL ,P-NC2L> <>>)>>"
  },
  "NULL-F": {
   "name": "NULL-F",
   "file": "gglobals.zil",
   "line": 118,
   "endLine": 119,
   "source": "<ROUTINE NULL-F (\"OPTIONAL\" A1 A2)\n\t <RFALSE>>"
  },
  "STAIRS-F": {
   "name": "STAIRS-F",
   "file": "gglobals.zil",
   "line": 143,
   "endLine": 146,
   "source": "<ROUTINE STAIRS-F ()\n\t <COND (<VERB? THROUGH>\n\t\t<TELL\n\"You should say whether you want to go up or down.\" CR>)>>"
  },
  "SAILOR-FCN": {
   "name": "SAILOR-FCN",
   "file": "gglobals.zil",
   "line": 155,
   "endLine": 195,
   "source": "<ROUTINE SAILOR-FCN ()\n\t  <COND (<VERB? TELL>\n\t\t <SETG P-CONT <>>\n\t\t <SETG QUOTE-FLAG <>>\n\t\t <TELL \"You can't talk to the sailor that way.\" CR>)\n\t\t(<VERB? EXAMINE>\n\t\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>\n\t\t\t\t <TELL\n\"He looks like a sailor.\" CR>\n\t\t\t\t <RTRUE>)>)\n\t\t\t(ELSE T)>\n\t\t <TELL\n\"There is no sailor to be seen.\" CR>)\n\t\t(<VERB? HELLO>\n\t\t <SETG HS <+ ,HS 1>>\n\t\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t '<COND (<NOT <FSET? ,VIKING-SHIP ,INVISIBLE>>\n\t\t                 <TELL\n\"The seaman looks up and maneuvers the boat toward shore. He cries out \\\"I\nhave waited three ages for someone to say those words and save me from\nsailing this endless ocean. Please accept this gift. You may find it\nuseful!\\\" He throws something which falls near you in the sand, then sails\noff toward the west, singing a lively, but somewhat uncouth, sailor song.\" CR>\n\t\t                 <FSET ,VIKING-SHIP ,INVISIBLE>\n\t\t                 <MOVE ,VIAL ,HERE>)\n\t\t                (<==? ,HERE ,FLATHEAD-OCEAN>\n\t\t                 <COND (,SHIP-GONE\n\t\t\t                <TELL \"Nothing happens anymore.\" CR>)\n\t\t\t               (T\n\t\t\t\t        <TELL \"Nothing happens yet.\" CR>)>)\n\t\t\t\t(T <TELL \"Nothing happens here.\" CR>)>)\n\t\t\t(T\n\t\t\t '<COND (<0? <MOD ,HS 20>>\n\t\t\t\t <TELL\n\"You seem to be repeating yourself.\" CR>)\n\t\t\t\t(<0? <MOD ,HS 10>>\n\t\t\t\t <TELL\n\"I think that phrase is getting a bit worn out.\" CR>)\n\t\t\t\t(T\n\t\t\t\t <TELL \"Nothing happens here.\" CR>)>)>)>>"
  },
  "GROUND-FUNCTION": {
   "name": "GROUND-FUNCTION",
   "file": "gglobals.zil",
   "line": 203,
   "endLine": 215,
   "source": "<ROUTINE GROUND-FUNCTION ()\n\t <COND (<AND <VERB? PUT PUT-ON>\n\t\t     <EQUAL? ,PRSI ,GROUND>>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,SANDY-CAVE>\n\t\t\t <SAND-FUNCTION>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (<VERB? DIG>\n\t\t<TELL \"The ground is too hard for digging here.\" CR>)>>"
  },
  "GRUE-FUNCTION": {
   "name": "GRUE-FUNCTION",
   "file": "gglobals.zil",
   "line": 224,
   "endLine": 239,
   "source": "<ROUTINE GRUE-FUNCTION ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL\n\"The grue is a sinister, lurking presence in the dark places of the\nearth. Its favorite diet is adventurers, but its insatiable\nappetite is tempered by its fear of light. No grue has ever been\nseen by the light of day, and few have survived its fearsome jaws\nto tell the tale.\" CR>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"There is no grue here, but I'm sure there is at least one lurking\nin the darkness nearby. I wouldn't let my light go out if I were\nyou!\" CR>)\n\t  (<VERB? LISTEN>\n\t   <TELL\n\"It makes no sound but is always lurking in the darkness nearby.\" CR>)>>"
  },
  "CRETIN-FCN": {
   "name": "CRETIN-FCN",
   "file": "gglobals.zil",
   "line": 254,
   "endLine": 298,
   "source": "<ROUTINE CRETIN-FCN ()\n\t <COND (<VERB? TELL>\n\t\t<SETG P-CONT <>>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<TELL\n\"Talking to yourself is said to be a sign of impending mental collapse.\" CR>)\n\t       (<AND <VERB? GIVE>\n\t\t     <EQUAL? ,PRSI ,ME>>\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)\n\t       (<VERB? MAKE>\n\t\t<TELL \"Only you can do that.\" CR>)\n\t       (<VERB? DISEMBARK>\n\t\t<TELL \"You'll have to do that on your own.\" CR>)\n\t       (<VERB? EAT>\n\t\t<TELL \"Auto-cannibalism is not the answer.\" CR>)\n\t       (<VERB? ATTACK MUNG>\n\t\t<COND (<AND ,PRSI <FSET? ,PRSI ,WEAPONBIT>>\n\t\t       <JIGS-UP \"If you insist.... Poof, you're dead!\">)\n\t\t      (T\n\t\t       <TELL \"Suicide is not the answer.\" CR>)>)\n\t       (<VERB? THROW>\n\t\t<COND (<==? ,PRSO ,ME>\n\t\t       <TELL\n\"Why don't you just walk like normal people?\" CR>)>)\n\t       (<VERB? TAKE>\n\t\t<TELL \"How romantic!\" CR>)\n\t       (<VERB? EXAMINE>\n\t\t<COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<EQUAL? ,HERE <LOC ,MIRROR-1> <LOC ,MIRROR-2>>\n\t\t                <TELL\n\"Your image in the mirror looks tired.\" CR>))\n\t\t\t     (<==? ,ZORK-NUMBER 3>\n\t\t\t      '(,INVIS\n\t\t\t\t<TELL\n\"A good trick, as you are currently invisible.\" CR>))\n\t\t\t     (T\n\t\t\t      '(<NULL-F> <RTRUE>))>\n\t\t      (T\n\t\t       %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t       '<TELL\n\"What you can see looks pretty much as usual, sorry to say.\" CR>)\n\t\t\t      (ELSE\n\t\t\t       '<TELL\n\"That's difficult unless your eyes are prehensile.\" CR>)>)>)>>"
  },
  "PATH-OBJECT": {
   "name": "PATH-OBJECT",
   "file": "gglobals.zil",
   "line": 315,
   "endLine": 321,
   "source": "<ROUTINE PATH-OBJECT ()\n\t <COND (<VERB? TAKE FOLLOW>\n\t\t<TELL \"You must specify a direction to go.\" CR>)\n\t       (<VERB? FIND>\n\t\t<TELL \"I can't help you there....\" CR>)\n\t       (<VERB? DIG>\n\t\t<TELL \"Not a chance.\" CR>)>>"
  },
  "ZORKMID-FUNCTION": {
   "name": "ZORKMID-FUNCTION",
   "file": "gglobals.zil",
   "line": 329,
   "endLine": 335,
   "source": "<ROUTINE ZORKMID-FUNCTION ()\n    <COND (<VERB? EXAMINE>\n\t   <TELL\n\"The zorkmid is the unit of currency of the Great Underground Empire.\" CR>)\n\t  (<VERB? FIND>\n\t   <TELL\n\"The best way to find zorkmids is to go out and look for them.\" CR>)>>"
  },
  "ZPROB": {
   "name": "ZPROB",
   "file": "gmacros.zil",
   "line": 122,
   "endLine": 125,
   "source": "<ROUTINE ZPROB\n\t (BASE)\n\t <COND (,LUCKY <G? .BASE <RANDOM 100>>)\n\t       (ELSE <G? .BASE <RANDOM 300>>)>>"
  },
  "RANDOM-ELEMENT": {
   "name": "RANDOM-ELEMENT",
   "file": "gmacros.zil",
   "line": 127,
   "endLine": 128,
   "source": "<ROUTINE RANDOM-ELEMENT (FROB)\n\t <GET .FROB <RANDOM <GET .FROB 0>>>>"
  },
  "PICK-ONE": {
   "name": "PICK-ONE",
   "file": "gmacros.zil",
   "line": 130,
   "endLine": 142,
   "source": "<ROUTINE PICK-ONE (FROB\n\t\t   \"AUX\" (L <GET .FROB 0>) (CNT <GET .FROB 1>) RND MSG RFROB)\n\t <SET L <- .L 1>>\n\t <SET FROB <REST .FROB 2>>\n\t <SET RFROB <REST .FROB <* .CNT 2>>>\n\t <SET RND <RANDOM <- .L .CNT>>>\n\t <SET MSG <GET .RFROB .RND>>\n\t <PUT .RFROB .RND <GET .RFROB 1>>\n\t <PUT .RFROB 1 .MSG>\n\t <SET CNT <+ .CNT 1>>\n\t <COND (<==? .CNT .L> <SET CNT 0>)>\n\t <PUT .FROB 0 .CNT>\n\t .MSG>"
  },
  "MAIN-LOOP": {
   "name": "MAIN-LOOP",
   "file": "gmain.zil",
   "line": 34,
   "endLine": 36,
   "source": "<ROUTINE MAIN-LOOP (\"AUX\" TRASH)\n\t <REPEAT ()\n\t\t <SET TRASH <MAIN-LOOP-1>>>>"
  },
  "MAIN-LOOP-1": {
   "name": "MAIN-LOOP-1",
   "file": "gmain.zil",
   "line": 38,
   "endLine": 172,
   "source": "<ROUTINE MAIN-LOOP-1 (\"AUX\" ICNT OCNT NUM CNT OBJ TBL V PTBL OBJ1 TMP O I) \n     <SET CNT 0>\n     <SET OBJ <>>\n     <SET PTBL T>\n     <COND (<SETG P-WON <PARSER>>\n\t    <SET ICNT <GET ,P-PRSI ,P-MATCHLEN>>\n\t    <SET OCNT <GET ,P-PRSO ,P-MATCHLEN>>\n\t    <COND (<AND ,P-IT-OBJECT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .ICNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSI .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSI .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <SET TMP T>\n\t\t\t\t\t <RETURN>)>)>>\n\t\t   <COND (<NOT .TMP>\n\t\t\t  <SET CNT 0>\n\t\t\t  <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .OCNT>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (<EQUAL? <GET ,P-PRSO .CNT> ,IT>\n\t\t\t\t\t <PUT ,P-PRSO .CNT ,P-IT-OBJECT>\n\t\t\t\t\t <RETURN>)>)>>)>\n\t\t   <SET CNT 0>)>\n\t    <SET NUM\n\t\t <COND (<0? .OCNT> .OCNT)\n\t\t       (<G? .OCNT 1>\n\t\t\t<SET TBL ,P-PRSO>\n\t\t\t<COND (<0? .ICNT> <SET OBJ <>>)\n\t\t\t      (T <SET OBJ <GET ,P-PRSI 1>>)>\n\t\t\t.OCNT)\n\t\t       (<G? .ICNT 1>\n\t\t\t<SET PTBL <>>\n\t\t\t<SET TBL ,P-PRSI>\n\t\t\t<SET OBJ <GET ,P-PRSO 1>>\n\t\t\t.ICNT)\n\t\t       (T 1)>>\n\t    <COND (<AND <NOT .OBJ> <1? .ICNT>> <SET OBJ <GET ,P-PRSI 1>>)>\n\t    <COND (<AND <==? ,PRSA ,V?WALK>\n\t\t\t<NOT <ZERO? ,P-WALK-DIR>>>\n\t\t   <SET V <PERFORM ,PRSA ,PRSO>>)\n\t\t  (<0? .NUM>\n\t\t   <COND (<0? <BAND <GETB ,P-SYNTAX ,P-SBITS> ,P-SONUMS>>\n\t\t\t  <SET V <PERFORM ,PRSA>>\n\t\t\t  <SETG PRSO <>>)\n\t\t\t (<NOT ,LIT>\n\t\t\t  <TELL \"It's too dark to see.\" CR>)\n\t\t\t (T\n\t\t\t  <TELL \"It's not clear what you're referring to.\" CR>\n\t\t\t  <SET V <>>)>)\n\t\t  (T\n\t\t   <SETG P-NOT-HERE 0>\n\t\t   <SETG P-MULT <>>\n\t\t   <COND (<G? .NUM 1> <SETG P-MULT T>)>\n\t\t   <SET TMP <>>\n\t\t   <REPEAT ()\n\t\t\t   <COND (<G? <SET CNT <+ .CNT 1>> .NUM>\n\t\t\t\t  <COND (<G? ,P-NOT-HERE 0>\n\t\t\t\t\t <TELL \"The \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE .NUM>>\n\t\t\t\t\t\t<TELL \"other \">)>\n\t\t\t\t\t <TELL \"object\">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"s\">)>\n\t\t\t\t\t <TELL \" that you mentioned \">\n\t\t\t\t\t <COND (<NOT <EQUAL? ,P-NOT-HERE 1>>\n\t\t\t\t\t\t<TELL \"are\">)\n\t\t\t\t\t       (T <TELL \"is\">)>\n\t\t\t\t\t <TELL \"n't here.\" CR>)\n\t\t\t\t\t(<NOT .TMP>\n\t\t\t\t\t <TELL\n\"There's nothing here you can take.\" CR>)>\n\t\t\t\t  <RETURN>)\n\t\t\t\t (T\n\t\t\t\t  <COND (.PTBL <SET OBJ1 <GET ,P-PRSO .CNT>>)\n\t\t\t\t\t(T <SET OBJ1 <GET ,P-PRSI .CNT>>)>\n\t\t\t\t  <SET O <COND (.PTBL .OBJ1) (T .OBJ)>>\n\t\t\t\t  <SET I <COND (.PTBL .OBJ) (T .OBJ1)>>\n\n;\"multiple exceptions\"\n<COND (<OR <G? .NUM 1>\n\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>>\n       <SET V <LOC ,WINNER>>\n       <COND (<EQUAL? .O ,NOT-HERE-OBJECT>\n\t      <SETG P-NOT-HERE <+ ,P-NOT-HERE 1>>\n\t      <AGAIN>)\n\t     (<AND <VERB? TAKE>\n\t\t   .I\n\t\t   <EQUAL? <GET <GET ,P-ITBL ,P-NC1> 0> ,W?ALL>\n\t\t   <NOT <IN? .O .I>>>\n\t      <AGAIN>)\n\t     (<AND <EQUAL? ,P-GETFLAGS ,P-ALL>\n\t\t   <VERB? TAKE>\n\t\t   <OR <AND <NOT <EQUAL? <LOC .O> ,WINNER ,HERE .V>>\n\t\t\t    <NOT <EQUAL? <LOC .O> .I>>\n\t\t\t    <NOT <FSET? <LOC .O> ,SURFACEBIT>>>\n\t\t       <NOT <OR <FSET? .O ,TAKEBIT>\n\t\t\t\t<FSET? .O ,TRYTAKEBIT>>>>>\n\t      <AGAIN>)\n\t     (ELSE\n\t      <COND (<EQUAL? .OBJ1 ,IT>\n\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t    (T <PRINTD .OBJ1>)>\n\t      <TELL \": \">)>)>\n;\"end multiple exceptions\"\n\t\t\t\t  <SETG PRSO .O>\n\t\t\t\t  <SETG PRSI .I>\n\t\t\t\t  <SET TMP T>\n\t\t\t\t  <SET V <PERFORM ,PRSA ,PRSO ,PRSI>>\n\t\t\t\t  <COND (<==? .V ,M-FATAL> <RETURN>)>)>>)>\n\t    <COND (<NOT <==? .V ,M-FATAL>>\n\t\t   ;<COND (<==? <LOC ,WINNER> ,PRSO>\n\t\t\t  <SETG PRSO <>>)>\n\t\t   <SET V <APPLY <GETP <LOC ,WINNER> ,P?ACTION> ,M-END>>)>\n\t    ;<COND (<VERB? ;AGAIN ;\"WALK -- why was this here?\"\n\t\t\t  SAVE RESTORE ;SCORE ;VERSION ;WAIT> T)\n\t\t  (T\n\t\t   <SETG L-PRSA ,PRSA>\n\t\t   <SETG L-PRSO ,PRSO>\n\t\t   <SETG L-PRSI ,PRSI>)>\n\t    <COND (<==? .V ,M-FATAL> <SETG P-CONT <>>)>)\n\t   (T\n\t    <SETG P-CONT <>>)>\n     %<COND (<==? ,ZORK-NUMBER 3>\n\t     '<COND (<NOT ,CLEFT-QUEUED?>\n\t\t     <ENABLE <QUEUE I-CLEFT <+ 70 <RANDOM 70>>>>\n\t\t     <SETG CLEFT-QUEUED? T>)>)\n\t    (ELSE '<NULL-F>)>\n     <COND (,P-WON\n\t    <COND (<VERB? TELL BRIEF SUPER-BRIEF VERBOSE SAVE VERSION\n\t\t\t  QUIT RESTART SCORE SCRIPT UNSCRIPT RESTORE> T)\n\t\t  (T <SET V <CLOCKER>>)>)>>"
  },
  "PARSER": {
   "name": "PARSER",
   "file": "gparser.zil",
   "line": 109,
   "endLine": 380,
   "source": "<ROUTINE PARSER (\"AUX\" (PTR ,P-LEXSTART) WRD (VAL 0) (VERB <>) (OF-FLAG <>)\n\t\t       OWINNER OMERGED LEN (DIR <>) (NW 0) (LW 0) (CNT -1))\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN> <RETURN>)\n\t\t      (T\n\t\t       <COND (<NOT ,P-OFLAG>\n\t\t\t      <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>\n\t\t       <PUT ,P-ITBL .CNT 0>)>>\n\t<SET OWINNER ,WINNER>\n\t<SET OMERGED ,P-MERGED>\n\t<SETG P-ADVERB <>>\n\t<SETG P-MERGED <>>\n\t<SETG P-END-ON-PREP <>>\n\t<PUT ,P-PRSO ,P-MATCHLEN 0>\n\t<PUT ,P-PRSI ,P-MATCHLEN 0>\n\t<PUT ,P-BUTS ,P-MATCHLEN 0>\n\t<COND (<AND <NOT ,QUOTE-FLAG> <N==? ,WINNER ,PLAYER>>\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG HERE <META-LOC ,PLAYER>>\n\t       ;<COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>)>\n\t<COND (,RESERVE-PTR\n\t       <SET PTR ,RESERVE-PTR>\n\t       <STUFF ,RESERVE-LEXV ,P-LEXV>\n\t       <COND (<AND <NOT ,SUPER-BRIEF> <EQUAL? ,PLAYER ,WINNER>>\n\t\t      <CRLF>)>\n\t       <SETG RESERVE-PTR <>>\n\t       <SETG P-CONT <>>)\n\t      (,P-CONT\n\t       <SET PTR ,P-CONT>\n\t       <COND (<AND <NOT ,SUPER-BRIEF>\n\t\t\t   <EQUAL? ,PLAYER ,WINNER>\n\t\t\t   <NOT <VERB? SAY>>>\n\t\t      <CRLF>)>\n\t       <SETG P-CONT <>>)\n\t      (T\n\t       <SETG WINNER ,PLAYER>\n\t       <SETG QUOTE-FLAG <>>\n\t       <COND (<NOT <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t      <SETG HERE <LOC ,WINNER>>)>\n\t       <SETG LIT <LIT? ,HERE>>\n\t       <COND (<NOT ,SUPER-BRIEF> <CRLF>)>\n\t       <TELL \">\">\n\t       <READ ,P-INBUF ,P-LEXV>)>\n\t<SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t<COND (<ZERO? ,P-LEN> <TELL \"I beg your pardon?\" CR> <RFALSE>)>\n\t<COND (<EQUAL? <SET WRD <GET ,P-LEXV .PTR>> ,W?OOPS>\n\t       <COND (<EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t      ,W?PERIOD ,W?COMMA>\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <SETG P-LEN <- ,P-LEN 1>>)>\n\t       <COND (<NOT <G? ,P-LEN 1>>\n\t\t      <TELL \"I can't help your clumsiness.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<GET ,OOPS-TABLE ,O-PTR>\n\t\t      <COND (<AND <G? ,P-LEN 2>\n\t\t\t\t  <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t  ,W?QUOTE>>\n\t\t\t     <TELL\n\"Sorry, you can't correct mistakes in quoted text.\" CR>\n\t\t\t     <RFALSE>)\n\t\t\t    (<G? ,P-LEN 2>\n\t\t\t     <TELL\n\"Warning: only the first word after OOPS is used.\" CR>)>\n\t\t      <PUT ,AGAIN-LEXV <GET ,OOPS-TABLE ,O-PTR>\n\t\t\t   <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>\n\t\t      <SETG WINNER .OWINNER> ;\"maybe fix oops vs. chars.?\"\n\t\t      <INBUF-ADD <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 6>>\n\t\t\t\t <GETB ,P-LEXV <+ <* .PTR ,P-LEXELEN> 7>>\n\t\t\t\t <+ <* <GET ,OOPS-TABLE ,O-PTR> ,P-LEXELEN> 3>>\n\t\t      <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t\t      <SETG P-LEN <GETB ,P-LEXV ,P-LEXWORDS>>\n\t\t      <SET PTR <GET ,OOPS-TABLE ,O-START>>\n\t\t      <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>)\n\t\t     (T\n\t\t      <PUT ,OOPS-TABLE ,O-END <>>\n\t\t      <TELL \"There was no word to replace!\" CR>\n\t\t      <RFALSE>)>)\n\t      (T\n\t       <COND (<NOT <EQUAL? .WRD ,W?AGAIN ,W?G>>\n\t\t      <SETG P-NUMBER 0>)>\n\t       <PUT ,OOPS-TABLE ,O-END <>>)>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?AGAIN ,W?G>\n\t       <COND (<ZERO? <GETB ,OOPS-INBUF 1>>\n\t\t      <TELL \"Beg pardon?\" CR>\n\t\t      <RFALSE>)\n\t\t     (,P-OFLAG\n\t\t      <TELL \"It's difficult to repeat fragments.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<NOT ,P-WON>\n\t\t      <TELL \"That would just repeat a mistake.\" CR>\n\t\t      <RFALSE>)\n\t\t     (<G? ,P-LEN 1>\n\t\t      <COND (<OR <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?PERIOD ,W?COMMA ,W?THEN>\n\t\t\t\t <EQUAL? <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>\n\t\t\t\t\t,W?AND>>\n\t\t\t     <SET PTR <+ .PTR <* 2 ,P-LEXELEN>>>\n\t\t\t     <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t\t   <- <GETB ,P-LEXV ,P-LEXWORDS> 2>>)\n\t\t\t    (T\n\t\t\t     <TELL \"I couldn't understand that sentence.\" CR>\n\t\t\t     <RFALSE>)>)\n\t\t     (T\n\t\t      <SET PTR <+ .PTR ,P-LEXELEN>>\n\t\t      <PUTB ,P-LEXV ,P-LEXWORDS\n\t\t\t    <- <GETB ,P-LEXV ,P-LEXWORDS> 1>>)>\n\t       <COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t\t      <STUFF ,P-LEXV ,RESERVE-LEXV>\n\t\t      <SETG RESERVE-PTR .PTR>)\n\t\t     (T\n\t\t      <SETG RESERVE-PTR <>>)>\n\t       ;<SETG P-LEN <GETB ,AGAIN-LEXV ,P-LEXWORDS>>\n\t       <SETG WINNER .OWINNER>\n\t       <SETG P-MERGED .OMERGED>\n\t       <INBUF-STUFF ,OOPS-INBUF ,P-INBUF>\n\t       <STUFF ,AGAIN-LEXV ,P-LEXV>\n\t       <SET CNT -1>\n\t       <SET DIR ,AGAIN-DIR>\n\t       <REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>)\n\t      (T\n\t       <STUFF ,P-LEXV ,AGAIN-LEXV>\n\t       <INBUF-STUFF ,P-INBUF ,OOPS-INBUF>\n\t       <PUT ,OOPS-TABLE ,O-START .PTR>\n\t       <PUT ,OOPS-TABLE ,O-LENGTH <* 4 ,P-LEN>>\n\t       <SET LEN\n\t\t    <* 2 <+ .PTR <* ,P-LEXELEN <GETB ,P-LEXV ,P-LEXWORDS>>>>>\n\t       <PUT ,OOPS-TABLE ,O-END <+ <GETB ,P-LEXV <- .LEN 1>>\n\t\t\t\t\t  <GETB ,P-LEXV <- .LEN 2>>>>\n\t       <SETG RESERVE-PTR <>>\n\t       <SET LEN ,P-LEN>\n\t       <SETG P-DIR <>>\n\t       <SETG P-NCN 0>\n\t       <SETG P-GETFLAGS 0>\n\t       <REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <SETG QUOTE-FLAG <>>\n\t\t       <RETURN>)\n\t\t      (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<AND <EQUAL? .WRD ,W?TO>\n\t\t\t\t   <EQUAL? .VERB ,ACT?TELL ;,ACT?ASK>>\n\t\t\t      <SET WRD ,W?QUOTE>)\n\t\t\t     (<AND <EQUAL? .WRD ,W?THEN>\n\t\t\t\t   <G? ,P-LEN 0>\n\t\t\t\t   <NOT .VERB>\n\t\t\t\t   <NOT ,QUOTE-FLAG> ;\"Last NOT added 7/3\">\n\t\t\t      <COND (<EQUAL? .LW 0 ,W?PERIOD>\n\t\t\t\t     <SET WRD ,W?THE>)\n\t\t\t\t    (ELSE\n\t\t\t\t     <PUT ,P-ITBL ,P-VERB ,ACT?TELL>\n\t\t\t\t     <PUT ,P-ITBL ,P-VERBN 0>\n\t\t\t\t     <SET WRD ,W?QUOTE>)>)>\n\t\t       <COND (<EQUAL? .WRD ,W?THEN ,W?PERIOD ,W?QUOTE>\n\t\t\t      <COND (<EQUAL? .WRD ,W?QUOTE>\n\t\t\t\t     <COND (,QUOTE-FLAG\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>)\n\t\t\t\t\t   (T <SETG QUOTE-FLAG T>)>)>\n\t\t\t      <OR <ZERO? ,P-LEN>\n\t\t\t\t  <SETG P-CONT <+ .PTR ,P-LEXELEN>>>\n\t\t\t      <PUTB ,P-LEXV ,P-LEXWORDS ,P-LEN>\n\t\t\t      <RETURN>)\n\t\t\t     (<AND <SET VAL\n\t\t\t\t\t<WT? .WRD\n\t\t\t\t\t     ,PS?DIRECTION\n\t\t\t\t\t     ,P1?DIRECTION>>\n\t\t\t\t   <EQUAL? .VERB <> ,ACT?WALK>\n\t\t\t\t   <OR <EQUAL? .LEN 1>\n\t\t\t\t       <AND <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .VERB ,ACT?WALK>>\n\t\t\t\t       <AND <EQUAL? .NW\n\t\t\t\t\t            ,W?THEN\n\t\t\t\t\t            ,W?PERIOD\n\t\t\t\t\t            ,W?QUOTE>\n\t\t\t\t\t    <NOT <L? .LEN 2>>>\n\t\t\t\t       <AND ,QUOTE-FLAG\n\t\t\t\t\t    <EQUAL? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?QUOTE>>\n\t\t\t\t       <AND <G? .LEN 2>\n\t\t\t\t\t    <EQUAL? .NW ,W?COMMA ,W?AND>>>>\n\t\t\t      <SET DIR .VAL>\n\t\t\t      <COND (<EQUAL? .NW ,W?COMMA ,W?AND>\n\t\t\t\t     <PUT ,P-LEXV\n\t\t\t\t\t  <+ .PTR ,P-LEXELEN>\n\t\t\t\t\t  ,W?THEN>)>\n\t\t\t      <COND (<NOT <G? .LEN 2>>\n\t\t\t\t     <SETG QUOTE-FLAG <>>\n\t\t\t\t     <RETURN>)>)\n\t\t\t     (<AND <SET VAL <WT? .WRD ,PS?VERB ,P1?VERB>>\n\t\t\t\t   <NOT .VERB>>\n\t\t\t      <SET VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERB .VAL>\n\t\t\t      <PUT ,P-ITBL ,P-VERBN ,P-VTBL>\n\t\t\t      <PUT ,P-VTBL 0 .WRD>\n\t\t\t      <PUTB ,P-VTBL 2 <GETB ,P-LEXV\n\t\t\t\t\t\t    <SET CNT\n\t\t\t\t\t\t\t <+ <* .PTR 2> 2>>>>\n\t\t\t      <PUTB ,P-VTBL 3 <GETB ,P-LEXV <+ .CNT 1>>>)\n\t\t\t     (<OR <SET VAL <WT? .WRD ,PS?PREPOSITION 0>>\n\t\t\t\t  <EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t\t  <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t  <WT? .WRD ,PS?OBJECT>>\n\t\t\t      <COND (<AND <G? ,P-LEN 1>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <ZERO? .VAL>\n\t\t\t\t\t  <NOT <EQUAL? .WRD\n\t\t\t\t\t\t       ,W?ALL ,W?ONE ,W?A>>\n\t\t\t\t\t  ;<NOT <EQUAL? .WRD ,W?BOTH>>>\n\t\t\t\t     <SET OF-FLAG T>)\n\t\t\t\t    (<AND <NOT <ZERO? .VAL>>\n\t\t\t\t          <OR <ZERO? ,P-LEN>\n\t\t\t\t\t      <EQUAL? .NW ,W?THEN ,W?PERIOD>>>\n\t\t\t\t     <SETG P-END-ON-PREP T>\n\t\t\t\t     <COND (<L? ,P-NCN 2>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1 .VAL>\n\t\t\t\t\t    <PUT ,P-ITBL ,P-PREP1N .WRD>)>)\n\t\t\t\t    (<EQUAL? ,P-NCN 2>\n\t\t\t\t     <TELL\n\"There were too many nouns in that sentence.\" CR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SETG P-NCN <+ ,P-NCN 1>>\n\t\t\t\t     <SETG P-ACT .VERB>\n\t\t\t\t     <OR <SET PTR <CLAUSE .PTR .VAL .WRD>>\n\t\t\t\t\t <RFALSE>>\n\t\t\t\t     <COND (<L? .PTR 0>\n\t\t\t\t\t    <SETG QUOTE-FLAG <>>\n\t\t\t\t\t    <RETURN>)>)>)\n\t\t\t     (<EQUAL? .WRD ,W?OF>\n\t\t\t      <COND (<OR <NOT .OF-FLAG>\n\t\t\t\t\t <EQUAL? .NW ,W?PERIOD ,W?THEN>>\n\t\t\t\t     <CANT-USE .PTR>\n\t\t\t\t     <RFALSE>)\n\t\t\t\t    (T\n\t\t\t\t     <SET OF-FLAG <>>)>)\n\t\t\t     (<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t     (<AND <EQUAL? .VERB ,ACT?TELL>\n\t\t\t\t   <WT? .WRD ,PS?VERB ,P1?VERB>\n\t\t\t\t   <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t      <TELL\n\"Please consult your manual for the correct way to talk to other people\nor creatures.\" CR>\n\t\t\t      <RFALSE>)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T\n\t\t       <UNKNOWN-WORD .PTR>\n\t\t       <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>)>\n\t<PUT ,OOPS-TABLE ,O-PTR <>>\n\t<COND (.DIR\n\t       <SETG PRSA ,V?WALK>\n\t       <SETG PRSO .DIR>\n\t       <SETG P-OFLAG <>>\n\t       <SETG P-WALK-DIR .DIR>\n\t       <SETG AGAIN-DIR .DIR>)\n\t      (ELSE\n\t       <COND (,P-OFLAG <ORPHAN-MERGE>)>\n\t       <SETG P-WALK-DIR <>>\n\t       <SETG AGAIN-DIR <>>\n\t       <COND (<AND <SYNTAX-CHECK>\n\t\t\t   <SNARF-OBJECTS>\n\t\t\t   <MANY-CHECK>\n\t\t\t   <TAKE-CHECK>>\n\t\t      T)>)>>"
  },
  "STUFF": {
   "name": "STUFF",
   "file": "gparser.zil",
   "line": 387,
   "endLine": 399,
   "source": "<ROUTINE STUFF (SRC DEST \"OPTIONAL\" (MAX 29) \"AUX\" (PTR ,P-LEXSTART) (CTR 1)\n\t\t\t\t\t\t   BPTR)\n\t <PUTB .DEST 0 <GETB .SRC 0>>\n\t <PUTB .DEST 1 <GETB .SRC 1>>\n\t <REPEAT ()\n\t  <PUT .DEST .PTR <GET .SRC .PTR>>\n\t  <SET BPTR <+ <* .PTR 2> 2>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET BPTR <+ <* .PTR 2> 3>>\n\t  <PUTB .DEST .BPTR <GETB .SRC .BPTR>>\n\t  <SET PTR <+ .PTR ,P-LEXELEN>>\n\t  <COND (<IGRTR? CTR .MAX>\n\t\t <RETURN>)>>>"
  },
  "INBUF-STUFF": {
   "name": "INBUF-STUFF",
   "file": "gparser.zil",
   "line": 402,
   "endLine": 406,
   "source": "<ROUTINE INBUF-STUFF (SRC DEST \"AUX\" CNT)\n\t <SET CNT <- <GETB .SRC 0> 1>>\n\t <REPEAT ()\n\t\t <PUTB .DEST .CNT <GETB .SRC .CNT>>\n\t\t <COND (<DLESS? CNT 0> <RETURN>)>>>"
  },
  "INBUF-ADD": {
   "name": "INBUF-ADD",
   "file": "gparser.zil",
   "line": 410,
   "endLine": 423,
   "source": "<ROUTINE INBUF-ADD (LEN BEG SLOT \"AUX\" DBEG (CTR 0) TMP)\n\t <COND (<SET TMP <GET ,OOPS-TABLE ,O-END>>\n\t\t<SET DBEG .TMP>)\n\t       (T\n\t\t<SET DBEG <+ <GETB ,AGAIN-LEXV\n\t\t\t\t   <SET TMP <GET ,OOPS-TABLE ,O-LENGTH>>>\n\t\t\t     <GETB ,AGAIN-LEXV <+ .TMP 1>>>>)>\n\t <PUT ,OOPS-TABLE ,O-END <+ .DBEG .LEN>>\n\t <REPEAT ()\n\t  <PUTB ,OOPS-INBUF <+ .DBEG .CTR> <GETB ,P-INBUF <+ .BEG .CTR>>>\n\t  <SET CTR <+ .CTR 1>>\n\t  <COND (<EQUAL? .CTR .LEN> <RETURN>)>>\n\t <PUTB ,AGAIN-LEXV .SLOT .DBEG>\n\t <PUTB ,AGAIN-LEXV <- .SLOT 1> .LEN>>"
  },
  "WT?": {
   "name": "WT?",
   "file": "gparser.zil",
   "line": 430,
   "endLine": 436,
   "source": "<ROUTINE WT? (PTR BIT \"OPTIONAL\" (B1 5) \"AUX\" (OFFS ,P-P1OFF) TYP)\n\t<COND (<BTST <SET TYP <GETB .PTR ,P-PSOFF>> .BIT>\n\t       <COND (<G? .B1 4> <RTRUE>)\n\t\t     (T\n\t\t      <SET TYP <BAND .TYP ,P-P1BITS>>\n\t\t      <COND (<NOT <EQUAL? .TYP .B1>> <SET OFFS <+ .OFFS 1>>)>\n\t\t      <GETB .PTR .OFFS>)>)>>"
  },
  "CLAUSE": {
   "name": "CLAUSE",
   "file": "gparser.zil",
   "line": 440,
   "endLine": 510,
   "source": "<ROUTINE CLAUSE (PTR VAL WRD \"AUX\" OFF NUM (ANDFLG <>) (FIRST?? T) NW (LW 0))\n\t<SET OFF <* <- ,P-NCN 1> 2>>\n\t<COND (<NOT <EQUAL? .VAL 0>>\n\t       <PUT ,P-ITBL <SET NUM <+ ,P-PREP1 .OFF>> .VAL>\n\t       <PUT ,P-ITBL <+ .NUM 1> .WRD>\n\t       <SET PTR <+ .PTR ,P-LEXELEN>>)\n\t      (T <SETG P-LEN <+ ,P-LEN 1>>)>\n\t<COND (<ZERO? ,P-LEN> <SETG P-NCN <- ,P-NCN 1>> <RETURN -1>)>\n\t<PUT ,P-ITBL <SET NUM <+ ,P-NC1 .OFF>> <REST ,P-LEXV <* .PTR 2>>>\n\t<COND (<EQUAL? <GET ,P-LEXV .PTR> ,W?THE ,W?A ,W?AN>\n\t       <PUT ,P-ITBL .NUM <REST <GET ,P-ITBL .NUM> 4>>)>\n\t<REPEAT ()\n\t\t<COND (<L? <SETG P-LEN <- ,P-LEN 1>> 0>\n\t\t       <PUT ,P-ITBL <+ .NUM 1> <REST ,P-LEXV <* .PTR 2>>>\n\t\t       <RETURN -1>)>\n\t\t<COND (<OR <SET WRD <GET ,P-LEXV .PTR>>\n\t\t\t   <SET WRD <NUMBER? .PTR>>>\n\t\t       <COND (<ZERO? ,P-LEN> <SET NW 0>)\n\t\t\t     (T <SET NW <GET ,P-LEXV <+ .PTR ,P-LEXELEN>>>)>\n\t\t       <COND (<EQUAL? .WRD ,W?AND ,W?COMMA> <SET ANDFLG T>)\n\t\t\t     (<EQUAL? .WRD ,W?ALL ,W?ONE ;,W?BOTH>\n\t\t\t      <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t     <SETG P-LEN <- ,P-LEN 1>>\n\t\t\t\t     <SET PTR <+ .PTR ,P-LEXELEN>>)>)\n\t\t\t     (<OR <EQUAL? .WRD ,W?THEN ,W?PERIOD>\n\t\t\t\t  <AND <WT? .WRD ,PS?PREPOSITION>\n\t\t\t\t       <GET ,P-ITBL ,P-VERB>\n\t\t\t\t          ;\"ADDED 4/27 FOR TURTLE,UP\"\n\t\t\t\t       <NOT .FIRST??>>>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 1>>\n\t\t\t      <PUT ,P-ITBL\n\t\t\t\t   <+ .NUM 1>\n\t\t\t\t   <REST ,P-LEXV <* .PTR 2>>>\n\t\t\t      <RETURN <- .PTR ,P-LEXELEN>>)\n\t\t\t     (<WT? .WRD ,PS?OBJECT>\n\t\t\t      <COND (<AND <G? ,P-LEN 0>\n\t\t\t\t\t  <EQUAL? .NW ,W?OF>\n\t\t\t\t\t  <NOT <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t     T)\n\t\t\t\t    (<AND <WT? .WRD\n\t\t\t\t\t       ,PS?ADJECTIVE\n\t\t\t\t\t       ,P1?ADJECTIVE>\n\t\t\t\t\t  <NOT <EQUAL? .NW 0>>\n\t\t\t\t\t  <WT? .NW ,PS?OBJECT>>)\n\t\t\t\t    (<AND <NOT .ANDFLG>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?BUT ,W?EXCEPT>>\n\t\t\t\t\t  <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t\t     <PUT ,P-ITBL\n\t\t\t\t\t  <+ .NUM 1>\n\t\t\t\t\t  <REST ,P-LEXV <* <+ .PTR 2> 2>>>\n\t\t\t\t     <RETURN .PTR>)\n\t\t\t\t    (T <SET ANDFLG <>>)>)\n\t\t\t     (<AND <OR ,P-MERGED\n\t\t\t\t       ,P-OFLAG\n\t\t\t\t       <NOT <EQUAL? <GET ,P-ITBL ,P-VERB> 0>>>\n\t\t\t\t   <OR <WT? .WRD ,PS?ADJECTIVE>\n\t\t\t\t       <WT? .WRD ,PS?BUZZ-WORD>>>)\n\t\t\t     (<AND .ANDFLG\n\t\t\t\t   <OR <WT? .WRD ,PS?DIRECTION>\n\t\t\t\t       <WT? .WRD ,PS?VERB>>>\n\t\t\t      <SET PTR <- .PTR 4>>\n\t\t\t      <PUT ,P-LEXV <+ .PTR 2> ,W?THEN>\n\t\t\t      <SETG P-LEN <+ ,P-LEN 2>>)\n\t\t\t     (<WT? .WRD ,PS?PREPOSITION> T)\n\t\t\t     (T\n\t\t\t      <CANT-USE .PTR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <UNKNOWN-WORD .PTR> <RFALSE>)>\n\t\t<SET LW .WRD>\n\t\t<SET FIRST?? <>>\n\t\t<SET PTR <+ .PTR ,P-LEXELEN>>>>"
  },
  "NUMBER?": {
   "name": "NUMBER?",
   "file": "gparser.zil",
   "line": 512,
   "endLine": 534,
   "source": "<ROUTINE NUMBER? (PTR \"AUX\" CNT BPTR CHR (SUM 0) (TIM <>))\n\t <SET CNT <GETB <REST ,P-LEXV <* .PTR 2>> 2>>\n\t <SET BPTR <GETB <REST ,P-LEXV <* .PTR 2>> 3>>\n\t <REPEAT ()\n\t\t <COND (<L? <SET CNT <- .CNT 1>> 0> <RETURN>)\n\t\t       (T\n\t\t\t<SET CHR <GETB ,P-INBUF .BPTR>>\n\t\t\t<COND (<EQUAL? .CHR 58>\n\t\t\t       <SET TIM .SUM>\n\t\t\t       <SET SUM 0>)\n\t\t\t      (<G? .SUM 10000> <RFALSE>)\n\t\t\t      (<AND <L? .CHR 58> <G? .CHR 47>>\n\t\t\t       <SET SUM <+ <* .SUM 10> <- .CHR 48>>>)\n\t\t\t      (T <RFALSE>)>\n\t\t\t<SET BPTR <+ .BPTR 1>>)>>\n\t <PUT ,P-LEXV .PTR ,W?INTNUM>\n\t <COND (<G? .SUM 1000> <RFALSE>)\n\t       (.TIM\n\t\t<COND (<L? .TIM 8> <SET TIM <+ .TIM 12>>)\n\t\t      (<G? .TIM 23> <RFALSE>)>\n\t\t<SET SUM <+ .SUM <* .TIM 60>>>)>\n\t <SETG P-NUMBER .SUM>\n\t ,W?INTNUM>"
  },
  "ORPHAN-MERGE": {
   "name": "ORPHAN-MERGE",
   "file": "gparser.zil",
   "line": 543,
   "endLine": 630,
   "source": "<ROUTINE ORPHAN-MERGE (\"AUX\" (CNT -1) TEMP VERB BEG END (ADJ <>) WRD)\n   <SETG P-OFLAG <>>\n   <COND (<OR <EQUAL? <WT? <SET WRD <GET <GET ,P-ITBL ,P-VERBN> 0>>\n\t\t\t   ,PS?VERB ,P1?VERB>\n\t\t      <GET ,P-OTBL ,P-VERB>>\n\t      <NOT <ZERO? <WT? .WRD ,PS?ADJECTIVE>>>>\n\t  <SET ADJ T>)\n\t (<AND <NOT <ZERO? <WT? .WRD ,PS?OBJECT ,P1?OBJECT>>>\n\t       <EQUAL? ,P-NCN 0>>\n\t  <PUT ,P-ITBL ,P-VERB 0>\n\t  <PUT ,P-ITBL ,P-VERBN 0>\n\t  <PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t  <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>\n\t  <SETG P-NCN 1>)>\n   <COND (<AND <NOT <ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>>\n\t       <NOT .ADJ>\n\t       <NOT <EQUAL? .VERB <GET ,P-OTBL ,P-VERB>>>>\n\t  <RFALSE>)\n\t (<EQUAL? ,P-NCN 2> <RFALSE>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC1> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP1>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-OTBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>\n\t\t\t<COND (<ZERO? ,P-NCN> <SETG P-NCN 1>)>)\n\t\t       (T\n\t\t\t<PUT ,P-OTBL ,P-NC1 <GET ,P-ITBL ,P-NC1>>)>\n\t\t <PUT ,P-OTBL ,P-NC1L <GET ,P-ITBL ,P-NC1L>>)\n\t\t(T <RFALSE>)>)\n\t (<EQUAL? <GET ,P-OTBL ,P-NC2> 1>\n\t  <COND (<OR <EQUAL? <SET TEMP <GET ,P-ITBL ,P-PREP1>>\n\t\t\t  <GET ,P-OTBL ,P-PREP2>>\n\t\t     <ZERO? .TEMP>>\n\t\t <COND (.ADJ\n\t\t\t<PUT ,P-ITBL ,P-NC1 <REST ,P-LEXV 2>>\n\t\t\t<COND (<ZERO? <GET ,P-ITBL ,P-NC1L>>\n\t\t\t       <PUT ,P-ITBL ,P-NC1L <REST ,P-LEXV 6>>)>)>\n\t\t <PUT ,P-OTBL ,P-NC2 <GET ,P-ITBL ,P-NC1>>\n\t\t <PUT ,P-OTBL ,P-NC2L <GET ,P-ITBL ,P-NC1L>>\n\t\t <SETG P-NCN 2>)\n\t\t(T <RFALSE>)>)\n\t (<NOT <ZERO? ,P-ACLAUSE>>\n\t  <COND (<AND <NOT <EQUAL? ,P-NCN 1>> <NOT .ADJ>>\n\t\t <SETG P-ACLAUSE <>>\n\t\t <RFALSE>)\n\t\t(T\n\t\t <SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t <COND (.ADJ <SET BEG <REST ,P-LEXV 2>> <SET ADJ <>>)>\n\t\t <SET END <GET ,P-ITBL ,P-NC1L>>\n\t\t <REPEAT ()\n\t\t\t <SET WRD <GET .BEG 0>>\n\t\t\t <COND (<EQUAL? .BEG .END>\n\t\t\t\t<COND (.ADJ <ACLAUSE-WIN .ADJ> <RETURN>)\n\t\t\t\t      (T <SETG P-ACLAUSE <>> <RFALSE>)>)\n\t\t\t       (<AND <NOT .ADJ>\n\t\t\t\t     <OR <BTST <GETB .WRD ,P-PSOFF>\n\t\t\t\t\t       ,PS?ADJECTIVE>\n\t\t\t\t\t <EQUAL? .WRD ,W?ALL ,W?ONE>>>\n\t\t\t\t<SET ADJ .WRD>)\n\t\t\t       (<EQUAL? .WRD ,W?ONE>\n\t\t\t\t<ACLAUSE-WIN .ADJ>\n\t\t\t\t<RETURN>)\n\t\t\t       (<BTST <GETB .WRD ,P-PSOFF> ,PS?OBJECT>\n\t\t\t\t<COND (<EQUAL? .WRD ,P-ANAM>\n\t\t\t\t       <ACLAUSE-WIN .ADJ>)\n\t\t\t\t      (T\n\t\t\t\t       <NCLAUSE-WIN>)>\n\t\t\t\t<RETURN>)>\n\t\t\t <SET BEG <REST .BEG ,P-WORDLEN>>\n\t\t\t <COND (<EQUAL? .END 0>\n\t\t\t\t<SET END .BEG>\n\t\t\t\t<SETG P-NCN 1>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1 <BACK .BEG 4>>\n\t\t\t\t<PUT ,P-ITBL ,P-NC1L .BEG>)>>)>)>\n   <PUT ,P-VTBL 0 <GET ,P-OVTBL 0>>\n   <PUTB ,P-VTBL 2 <GETB ,P-OVTBL 2>>\n   <PUTB ,P-VTBL 3 <GETB ,P-OVTBL 3>>\n   <PUT ,P-OTBL ,P-VERBN ,P-VTBL>\n   <PUTB ,P-VTBL 2 0>\n   <REPEAT ()\n\t   <COND (<G? <SET CNT <+ .CNT 1>> ,P-ITBLLEN>\n\t\t  <SETG P-MERGED T>\n\t\t  <RTRUE>)\n\t\t (T <PUT ,P-ITBL .CNT <GET ,P-OTBL .CNT>>)>>\n   T>"
  },
  "ACLAUSE-WIN": {
   "name": "ACLAUSE-WIN",
   "file": "gparser.zil",
   "line": 634,
   "endLine": 643,
   "source": "<ROUTINE ACLAUSE-WIN (ADJ)\n\t<PUT ,P-ITBL ,P-VERB <GET ,P-OTBL ,P-VERB>>\n\t<PUT ,P-CCTBL ,CC-SBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-SEPTR <+ ,P-ACLAUSE 1>>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-OTBL ,P-OTBL .ADJ>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "NCLAUSE-WIN": {
   "name": "NCLAUSE-WIN",
   "file": "gparser.zil",
   "line": 645,
   "endLine": 653,
   "source": "<ROUTINE NCLAUSE-WIN ()\n        <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t<PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t<PUT ,P-CCTBL ,CC-DBPTR ,P-ACLAUSE>\n\t<PUT ,P-CCTBL ,CC-DEPTR <+ ,P-ACLAUSE 1>>\n\t<CLAUSE-COPY ,P-ITBL ,P-OTBL>\n\t<AND <NOT <EQUAL? <GET ,P-OTBL ,P-NC2> 0>> <SETG P-NCN 2>>\n\t<SETG P-ACLAUSE <>>\n\t<RTRUE>>"
  },
  "WORD-PRINT": {
   "name": "WORD-PRINT",
   "file": "gparser.zil",
   "line": 658,
   "endLine": 663,
   "source": "<ROUTINE WORD-PRINT (CNT BUF)\n\t <REPEAT ()\n\t\t <COND (<DLESS? CNT 0> <RETURN>)\n\t\t       (ELSE\n\t\t\t<PRINTC <GETB ,P-INBUF .BUF>>\n\t\t\t<SET BUF <+ .BUF 1>>)>>>"
  },
  "UNKNOWN-WORD": {
   "name": "UNKNOWN-WORD",
   "file": "gparser.zil",
   "line": 665,
   "endLine": 675,
   "source": "<ROUTINE UNKNOWN-WORD (PTR \"AUX\" BUF)\n\t<PUT ,OOPS-TABLE ,O-PTR .PTR>\n\t<COND (<VERB? SAY>\n\t       <TELL \"Nothing happens.\" CR>\n\t       <RFALSE>)>\n\t<TELL \"I don't know the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\".\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "CANT-USE": {
   "name": "CANT-USE",
   "file": "gparser.zil",
   "line": 677,
   "endLine": 686,
   "source": "<ROUTINE CANT-USE (PTR \"AUX\" BUF)\n\t<COND (<VERB? SAY>\n\t       <TELL \"Nothing happens.\" CR>\n\t       <RFALSE>)>\n\t<TELL \"You used the word \\\"\">\n\t<WORD-PRINT <GETB <REST ,P-LEXV <SET BUF <* .PTR 2>>> 2>\n\t\t    <GETB <REST ,P-LEXV .BUF> 3>>\n\t<TELL \"\\\" in a way that I don't understand.\" CR>\n\t<SETG QUOTE-FLAG <>>\n\t<SETG P-OFLAG <>>>"
  },
  "SYNTAX-CHECK": {
   "name": "SYNTAX-CHECK",
   "file": "gparser.zil",
   "line": 707,
   "endLine": 775,
   "source": "<ROUTINE SYNTAX-CHECK (\"AUX\" SYN LEN NUM OBJ\n\t\t       \t    (DRIVE1 <>) (DRIVE2 <>) PREP VERB TMP)\n\t<COND (<ZERO? <SET VERB <GET ,P-ITBL ,P-VERB>>>\n\t       <TELL \"There was no verb in that sentence!\" CR>\n\t       <RFALSE>)>\n\t<SET SYN <GET ,VERBS <- 255 .VERB>>>\n\t<SET LEN <GETB .SYN 0>>\n\t<SET SYN <REST .SYN>>\n\t<REPEAT ()\n\t\t<SET NUM <BAND <GETB .SYN ,P-SBITS> ,P-SONUMS>>\n\t\t<COND (<G? ,P-NCN .NUM> T)\n\t\t      (<AND <NOT <L? .NUM 1>>\n\t\t\t    <ZERO? ,P-NCN>\n\t\t\t    <OR <ZERO? <SET PREP <GET ,P-ITBL ,P-PREP1>>>\n\t\t\t\t<EQUAL? .PREP <GETB .SYN ,P-SPREP1>>>>\n\t\t       <SET DRIVE1 .SYN>)\n\t\t      (<EQUAL? <GETB .SYN ,P-SPREP1> <GET ,P-ITBL ,P-PREP1>>\n\t\t       <COND (<AND <EQUAL? .NUM 2> <EQUAL? ,P-NCN 1>>\n\t\t\t      <SET DRIVE2 .SYN>)\n\t\t\t     (<EQUAL? <GETB .SYN ,P-SPREP2>\n\t\t\t\t   <GET ,P-ITBL ,P-PREP2>>\n\t\t\t      <SYNTAX-FOUND .SYN>\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<DLESS? LEN 1>\n\t\t       <COND (<OR .DRIVE1 .DRIVE2> <RETURN>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That sentence isn't one I recognize.\" CR>\n\t\t\t      <RFALSE>)>)\n\t\t      (T <SET SYN <REST .SYN ,P-SYNLEN>>)>>\n\t<COND (<AND .DRIVE1\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE1 ,P-SFWIM1>\n\t\t\t       <GETB .DRIVE1 ,P-SLOC1>\n\t\t\t       <GETB .DRIVE1 ,P-SPREP1>>>>\n\t       <PUT ,P-PRSO ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSO 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE1>)\n\t      (<AND .DRIVE2\n\t\t    <SET OBJ\n\t\t\t <GWIM <GETB .DRIVE2 ,P-SFWIM2>\n\t\t\t       <GETB .DRIVE2 ,P-SLOC2>\n\t\t\t       <GETB .DRIVE2 ,P-SPREP2>>>>\n\t       <PUT ,P-PRSI ,P-MATCHLEN 1>\n\t       <PUT ,P-PRSI 1 .OBJ>\n\t       <SYNTAX-FOUND .DRIVE2>)\n\t      (<EQUAL? .VERB ,ACT?FIND>\n\t       <TELL \"That question can't be answered.\" CR>\n\t       <RFALSE>)\n\t      (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t       <CANT-ORPHAN>)\n\t      (T\n\t       <ORPHAN .DRIVE1 .DRIVE2>\n\t       <TELL \"What do you want to \">\n\t       <SET TMP <GET ,P-OTBL ,P-VERBN>>\n\t       <COND (<EQUAL? .TMP 0> <TELL \"tell\">)\n\t\t     (<ZERO? <GETB ,P-VTBL 2>>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>\n\t\t      <PUTB ,P-VTBL 2 0>)>\n\t       <COND (.DRIVE2\n\t\t      <TELL \" \">\n\t\t      <THING-PRINT T T>)>\n\t       <SETG P-OFLAG T>\n\t       <PREP-PRINT <COND (.DRIVE1 <GETB .DRIVE1 ,P-SPREP1>)\n\t\t\t\t (T <GETB .DRIVE2 ,P-SPREP2>)>>\n\t       <TELL \"?\" CR>\n\t       <RFALSE>)>>"
  },
  "CANT-ORPHAN": {
   "name": "CANT-ORPHAN",
   "file": "gparser.zil",
   "line": 777,
   "endLine": 779,
   "source": "<ROUTINE CANT-ORPHAN ()\n\t <TELL \"\\\"I don't understand! What are you referring to?\\\"\" CR>\n\t <RFALSE>>"
  },
  "ORPHAN": {
   "name": "ORPHAN",
   "file": "gparser.zil",
   "line": 782,
   "endLine": 808,
   "source": "<ROUTINE ORPHAN (D1 D2 \"AUX\" (CNT -1))\n\t<COND (<NOT ,P-MERGED>\n\t       <PUT ,P-OCLAUSE ,P-MATCHLEN 0>)>\n\t<PUT ,P-OVTBL 0 <GET ,P-VTBL 0>>\n\t<PUTB ,P-OVTBL 2 <GETB ,P-VTBL 2>>\n\t<PUTB ,P-OVTBL 3 <GETB ,P-VTBL 3>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT ,P-ITBLLEN> <RETURN>)\n\t\t      (T <PUT ,P-OTBL .CNT <GET ,P-ITBL .CNT>>)>>\n\t<COND (<EQUAL? ,P-NCN 2>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC2L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC2>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC2L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (<NOT <L? ,P-NCN 1>>\n\t       <PUT ,P-CCTBL ,CC-SBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-SEPTR ,P-NC1L>\n\t       <PUT ,P-CCTBL ,CC-DBPTR ,P-NC1>\n\t       <PUT ,P-CCTBL ,CC-DEPTR ,P-NC1L>\n\t       <CLAUSE-COPY ,P-ITBL ,P-OTBL>)>\n\t<COND (.D1\n\t       <PUT ,P-OTBL ,P-PREP1 <GETB .D1 ,P-SPREP1>>\n\t       <PUT ,P-OTBL ,P-NC1 1>)\n\t      (.D2\n\t       <PUT ,P-OTBL ,P-PREP2 <GETB .D2 ,P-SPREP2>>\n\t       <PUT ,P-OTBL ,P-NC2 1>)>>"
  },
  "THING-PRINT": {
   "name": "THING-PRINT",
   "file": "gparser.zil",
   "line": 813,
   "endLine": 820,
   "source": "<ROUTINE THING-PRINT (PRSO? \"OPTIONAL\" (THE? <>) \"AUX\" BEG END)\n\t <COND (.PRSO?\n\t\t<SET BEG <GET ,P-ITBL ,P-NC1>>\n\t\t<SET END <GET ,P-ITBL ,P-NC1L>>)\n\t       (ELSE\n\t\t<SET BEG <GET ,P-ITBL ,P-NC2>>\n\t\t<SET END <GET ,P-ITBL ,P-NC2L>>)>\n\t <BUFFER-PRINT .BEG .END .THE?>>"
  },
  "BUFFER-PRINT": {
   "name": "BUFFER-PRINT",
   "file": "gparser.zil",
   "line": 822,
   "endLine": 852,
   "source": "<ROUTINE BUFFER-PRINT (BEG END CP\n\t\t       \"AUX\" (NOSP T) WRD (FIRST?? T) (PN <>) (Q? <>))\n\t <REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END> <RETURN>)\n\t\t      (T\n\t\t       <SET WRD <GET .BEG 0>>\n\t\t       <COND ;(<EQUAL? .WRD ,W?$BUZZ> T)\n\t\t\t     (<EQUAL? .WRD ,W?COMMA>\n\t\t\t      <TELL \", \">)\n\t\t\t     (.NOSP <SET NOSP <>>)\n\t\t\t     (ELSE <TELL \" \">)>\n\t\t       <COND (<EQUAL? .WRD ,W?PERIOD ,W?COMMA>\n\t\t\t      <SET NOSP T>)\n\t\t\t     (<EQUAL? .WRD ,W?ME>\n\t\t\t      <PRINTD ,ME>\n\t\t\t      <SET PN T>)\n\t\t\t     (<EQUAL? .WRD ,W?INTNUM>\n\t\t\t      <PRINTN ,P-NUMBER>\n\t\t\t      <SET PN T>)\n\t\t\t     (T\n\t\t\t      <COND (<AND .FIRST?? <NOT .PN> .CP>\n\t\t\t\t     <TELL \"the \">)>\n\t\t\t      <COND (<OR ,P-OFLAG ,P-MERGED> <PRINTB .WRD>)\n\t\t\t\t    (<AND <EQUAL? .WRD ,W?IT>\n\t\t\t\t\t  <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t     <PRINTD ,P-IT-OBJECT>)\n\t\t\t\t    (T\n\t\t\t\t     <WORD-PRINT <GETB .BEG 2>\n\t\t\t\t\t\t <GETB .BEG 3>>)>\n\t\t\t      <SET FIRST?? <>>)>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "PREP-PRINT": {
   "name": "PREP-PRINT",
   "file": "gparser.zil",
   "line": 854,
   "endLine": 861,
   "source": "<ROUTINE PREP-PRINT (PREP \"AUX\" WRD)\n\t<COND (<NOT <ZERO? .PREP>>\n\t       <TELL \" \">\n\t       <COND ;(<EQUAL? .PREP ,PR?THROUGH>\n\t\t      <TELL \"through\">)\n\t\t     (T\n\t\t      <SET WRD <PREP-FIND .PREP>>\n\t\t      <PRINTB .WRD>)>)>>"
  },
  "CLAUSE-COPY": {
   "name": "CLAUSE-COPY",
   "file": "gparser.zil",
   "line": 863,
   "endLine": 882,
   "source": "<ROUTINE CLAUSE-COPY (SRC DEST \"OPTIONAL\" (INSRT <>) \"AUX\" BEG END)\n\t<SET BEG <GET .SRC <GET ,P-CCTBL ,CC-SBPTR>>>\n\t<SET END <GET .SRC <GET ,P-CCTBL ,CC-SEPTR>>>\n\t<PUT .DEST\n\t     <GET ,P-CCTBL ,CC-DBPTR>\n\t     <REST ,P-OCLAUSE\n\t\t   <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN> 2>>>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .BEG .END>\n\t\t       <PUT .DEST\n\t\t\t    <GET ,P-CCTBL ,CC-DEPTR>\n\t\t\t    <REST ,P-OCLAUSE\n\t\t\t\t  <+ <* <GET ,P-OCLAUSE ,P-MATCHLEN> ,P-LEXELEN>\n\t\t\t\t     2>>>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <COND (<AND .INSRT <EQUAL? ,P-ANAM <GET .BEG 0>>>\n\t\t\t      <CLAUSE-ADD .INSRT>)>\n\t\t       <CLAUSE-ADD <GET .BEG 0>>)>\n\t\t<SET BEG <REST .BEG ,P-WORDLEN>>>>"
  },
  "CLAUSE-ADD": {
   "name": "CLAUSE-ADD",
   "file": "gparser.zil",
   "line": 885,
   "endLine": 889,
   "source": "<ROUTINE CLAUSE-ADD (WRD \"AUX\" PTR)\n\t<SET PTR <+ <GET ,P-OCLAUSE ,P-MATCHLEN> 2>>\n\t<PUT ,P-OCLAUSE <- .PTR 1> .WRD>\n\t<PUT ,P-OCLAUSE .PTR 0>\n\t<PUT ,P-OCLAUSE ,P-MATCHLEN .PTR>>"
  },
  "PREP-FIND": {
   "name": "PREP-FIND",
   "file": "gparser.zil",
   "line": 891,
   "endLine": 896,
   "source": "<ROUTINE PREP-FIND (PREP \"AUX\" (CNT 0) SIZE)\n\t<SET SIZE <* <GET ,PREPOSITIONS 0> 2>>\n\t<REPEAT ()\n\t\t<COND (<IGRTR? CNT .SIZE> <RFALSE>)\n\t\t      (<EQUAL? <GET ,PREPOSITIONS .CNT> .PREP>\n\t\t       <RETURN <GET ,PREPOSITIONS <- .CNT 1>>>)>>>"
  },
  "SYNTAX-FOUND": {
   "name": "SYNTAX-FOUND",
   "file": "gparser.zil",
   "line": 898,
   "endLine": 900,
   "source": "<ROUTINE SYNTAX-FOUND (SYN)\n\t<SETG P-SYNTAX .SYN>\n\t<SETG PRSA <GETB .SYN ,P-SACTION>>>"
  },
  "GWIM": {
   "name": "GWIM",
   "file": "gparser.zil",
   "line": 904,
   "endLine": 929,
   "source": "<ROUTINE GWIM (GBIT LBIT PREP \"AUX\" OBJ)\n\t<COND (<EQUAL? .GBIT ,RMUNGBIT>\n\t       <RETURN ,ROOMS>)>\n\t<SETG P-GWIMBIT .GBIT>\n\t<SETG P-SLOCBITS .LBIT>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<COND (<GET-OBJECT ,P-MERGE <>>\n\t       <SETG P-GWIMBIT 0>\n\t       <COND (<EQUAL? <GET ,P-MERGE ,P-MATCHLEN> 1>\n\t\t      <SET OBJ <GET ,P-MERGE 1>>\n\t\t      <TELL \"(\">\n\t\t      <COND (<AND <NOT <ZERO? .PREP>>\n\t\t\t\t  <NOT ,P-END-ON-PREP>>\n\t\t\t     <PRINTB <SET PREP <PREP-FIND .PREP>>>\n\t\t\t     <COND (<EQUAL? .PREP ,W?OUT>\n\t\t\t\t    <TELL \" of\">)>\n\t\t\t     <TELL \" \">\n\t\t\t     <COND (<EQUAL? .OBJ ,HANDS>\n\t\t\t\t    <TELL \"your hands\">)\n\t\t\t\t   (T\n\t\t\t\t    <TELL \"the \" D .OBJ>)>\n\t\t\t     <TELL \")\" CR>)\n\t\t\t    (ELSE\n\t\t\t     <TELL D .OBJ \")\" CR>)>\n\t\t      .OBJ)>)\n\t      (T <SETG P-GWIMBIT 0> <RFALSE>)>>"
  },
  "SNARF-OBJECTS": {
   "name": "SNARF-OBJECTS",
   "file": "gparser.zil",
   "line": 931,
   "endLine": 946,
   "source": "<ROUTINE SNARF-OBJECTS (\"AUX\" OPTR IPTR L)\n\t <PUT ,P-BUTS ,P-MATCHLEN 0>\n\t <COND (<NOT <EQUAL? <SET IPTR <GET ,P-ITBL ,P-NC2>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC2>>\n\t\t<OR <SNARFEM .IPTR <GET ,P-ITBL ,P-NC2L> ,P-PRSI> <RFALSE>>)>\n\t <COND (<NOT <EQUAL? <SET OPTR <GET ,P-ITBL ,P-NC1>> 0>>\n\t\t<SETG P-SLOCBITS <GETB ,P-SYNTAX ,P-SLOC1>>\n\t\t<OR <SNARFEM .OPTR <GET ,P-ITBL ,P-NC1L> ,P-PRSO> <RFALSE>>)>\n\t <COND (<NOT <ZERO? <GET ,P-BUTS ,P-MATCHLEN>>>\n\t\t<SET L <GET ,P-PRSO ,P-MATCHLEN>>\n\t\t<COND (.OPTR <SETG P-PRSO <BUT-MERGE ,P-PRSO>>)>\n\t\t<COND (<AND .IPTR\n\t\t\t    <OR <NOT .OPTR>\n\t\t\t\t<EQUAL? .L <GET ,P-PRSO ,P-MATCHLEN>>>>\n\t\t       <SETG P-PRSI <BUT-MERGE ,P-PRSI>>)>)>\n\t <RTRUE>>"
  },
  "BUT-MERGE": {
   "name": "BUT-MERGE",
   "file": "gparser.zil",
   "line": 948,
   "endLine": 961,
   "source": "<ROUTINE BUT-MERGE (TBL \"AUX\" LEN BUTLEN (CNT 1) (MATCHES 0) OBJ NTBL)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<PUT ,P-MERGE ,P-MATCHLEN 0>\n\t<REPEAT ()\n\t\t<COND (<DLESS? LEN 0> <RETURN>)\n\t\t      (<ZMEMQ <SET OBJ <GET .TBL .CNT>> ,P-BUTS>)\n\t\t      (T\n\t\t       <PUT ,P-MERGE <+ .MATCHES 1> .OBJ>\n\t\t       <SET MATCHES <+ .MATCHES 1>>)>\n\t\t<SET CNT <+ .CNT 1>>>\n\t<PUT ,P-MERGE ,P-MATCHLEN .MATCHES>\n\t<SET NTBL ,P-MERGE>\n\t<SETG P-MERGE .TBL>\n\t.NTBL>"
  },
  "SNARFEM": {
   "name": "SNARFEM",
   "file": "gparser.zil",
   "line": 981,
   "endLine": 1033,
   "source": "<ROUTINE SNARFEM (PTR EPTR TBL \"AUX\" (BUT <>) LEN WV WRD NW (WAS-ALL <>))\n   <SETG P-AND <>>\n   <COND (<EQUAL? ,P-GETFLAGS ,P-ALL>\n\t  <SET WAS-ALL T>)>\n   <SETG P-GETFLAGS 0>\n   <PUT .TBL ,P-MATCHLEN 0>\n   <SET WRD <GET .PTR 0>>\n   <REPEAT ()\n\t   <COND (<EQUAL? .PTR .EPTR>\n\t\t  <SET WV <GET-OBJECT <OR .BUT .TBL>>>\n\t\t  <COND (.WAS-ALL <SETG P-GETFLAGS ,P-ALL>)>\n\t\t  <RETURN .WV>)\n\t\t (T\n\t\t  <COND (<==? .EPTR <REST .PTR ,P-WORDLEN>>\n\t\t\t <SET NW 0>)\n\t\t\t(T <SET NW <GET .PTR ,P-LEXELEN>>)>\n\t\t  <COND (<EQUAL? .WRD ,W?ALL ;,W?BOTH>\n\t\t\t <SETG P-GETFLAGS ,P-ALL>\n\t\t\t <COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t<SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t(<EQUAL? .WRD ,W?BUT ,W?EXCEPT>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t <SET BUT ,P-BUTS>\n\t\t\t <PUT .BUT ,P-MATCHLEN 0>)\n\t\t\t(<EQUAL? .WRD ,W?A ,W?ONE>\n\t\t\t <COND (<NOT ,P-ADJ>\n\t\t\t\t<SETG P-GETFLAGS ,P-ONE>\n\t\t\t\t<COND (<EQUAL? .NW ,W?OF>\n\t\t\t\t       <SET PTR <REST .PTR ,P-WORDLEN>>)>)\n\t\t\t       (T\n\t\t\t\t<SETG P-NAM ,P-ONEOBJ>\n\t\t\t\t<OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t\t<AND <ZERO? .NW> <RTRUE>>)>)\n\t\t\t(<AND <EQUAL? .WRD ,W?AND ,W?COMMA>\n\t\t\t      <NOT <EQUAL? .NW ,W?AND ,W?COMMA>>>\n\t\t\t <SETG P-AND T>\n\t\t\t <OR <GET-OBJECT <OR .BUT .TBL>> <RFALSE>>\n\t\t\t T)\n\t\t\t(<WT? .WRD ,PS?BUZZ-WORD>)\n\t\t\t(<EQUAL? .WRD ,W?AND ,W?COMMA>)\n\t\t\t(<EQUAL? .WRD ,W?OF>\n\t\t\t <COND (<ZERO? ,P-GETFLAGS>\n\t\t\t\t<SETG P-GETFLAGS ,P-INHIBIT>)>)\n\t\t\t(<AND <SET WV <WT? .WRD ,PS?ADJECTIVE ,P1?ADJECTIVE>>\n\t\t\t      <NOT ,P-ADJ>>\n\t\t\t <SETG P-ADJ .WV>\n\t\t\t <SETG P-ADJN .WRD>)\n\t\t\t(<WT? .WRD ,PS?OBJECT ,P1?OBJECT>\n\t\t\t <SETG P-NAM .WRD>\n\t\t\t <SETG P-ONEOBJ .WRD>)>)>\n\t   <COND (<NOT <EQUAL? .PTR .EPTR>>\n\t\t  <SET PTR <REST .PTR ,P-WORDLEN>>\n\t\t  <SET WRD .NW>)>>>"
  },
  "GET-OBJECT": {
   "name": "GET-OBJECT",
   "file": "gparser.zil",
   "line": 1043,
   "endLine": 1143,
   "source": "<ROUTINE GET-OBJECT (TBL\n\t\t     \"OPTIONAL\" (VRB T)\n\t\t     \"AUX\" BITS LEN XBITS TLEN (GCHECK <>) (OLEN 0) OBJ)\n\t <SET XBITS ,P-SLOCBITS>\n\t <SET TLEN <GET .TBL ,P-MATCHLEN>>\n\t <COND (<BTST ,P-GETFLAGS ,P-INHIBIT> <RTRUE>)>\n\t <COND (<AND <NOT ,P-NAM> ,P-ADJ>\n\t\t<COND (<WT? ,P-ADJN ,PS?OBJECT ,P1?OBJECT>\n\t\t       <SETG P-NAM ,P-ADJN>\n\t\t       <SETG P-ADJ <>>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t      '(<SET BITS\n\t\t\t\t     <WT? ,P-ADJN\n\t\t\t\t\t  ,PS?DIRECTION ,P1?DIRECTION>>\n\t\t\t\t<SETG P-ADJ <>>\n\t\t\t\t<PUT .TBL ,P-MATCHLEN 1>\n\t\t\t\t<PUT .TBL 1 ,INTDIR>\n\t\t\t\t<SETG P-DIRECTION .BITS>\n\t\t\t\t<RTRUE>))\n\t\t\t     (ELSE '(<NULL-F> T))>>)>\n\t <COND (<AND <NOT ,P-NAM>\n\t\t     <NOT ,P-ADJ>\n\t\t     <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>>\n\t\t     <ZERO? ,P-GWIMBIT>>\n\t\t<COND (.VRB\n\t\t       <TELL\n\"There seems to be a noun missing in that sentence!\" CR>)>\n\t\t<RFALSE>)>\n\t <COND (<OR <NOT <EQUAL? ,P-GETFLAGS ,P-ALL>> <ZERO? ,P-SLOCBITS>>\n\t\t<SETG P-SLOCBITS -1>)>\n\t <SETG P-TABLE .TBL>\n\t <PROG ()\n\t       <COND (.GCHECK <GLOBAL-CHECK .TBL>)\n\t\t     (T\n\t\t      <COND (,LIT\n\t\t\t     <FCLEAR ,PLAYER ,TRANSBIT>\n\t\t\t     <DO-SL ,HERE ,SOG ,SIR>\n\t\t\t     <FSET ,PLAYER ,TRANSBIT>)>\n\t\t      <DO-SL ,PLAYER ,SH ,SC>)>\n\t       <SET LEN <- <GET .TBL ,P-MATCHLEN> .TLEN>>\n\t       <COND (<BTST ,P-GETFLAGS ,P-ALL>)\n\t\t     (<AND <BTST ,P-GETFLAGS ,P-ONE>\n\t\t\t   <NOT <ZERO? .LEN>>>\n\t\t      <COND (<NOT <EQUAL? .LEN 1>>\n\t\t\t     <PUT .TBL 1 <GET .TBL <RANDOM .LEN>>>\n\t\t\t     <TELL \"(How about the \">\n\t\t\t     <PRINTD <GET .TBL 1>>\n\t\t\t     <TELL \"?)\" CR>)>\n\t\t      <PUT .TBL ,P-MATCHLEN 1>)\n\t\t     (<OR <G? .LEN 1>\n\t\t\t  <AND <ZERO? .LEN> <NOT <EQUAL? ,P-SLOCBITS -1>>>>\n\t\t      <COND (<EQUAL? ,P-SLOCBITS -1>\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <SET OLEN .LEN>\n\t\t\t     <PUT .TBL\n\t\t\t\t  ,P-MATCHLEN\n\t\t\t\t  <- <GET .TBL ,P-MATCHLEN> .LEN>>\n\t\t\t     <AGAIN>)\n\t\t\t    (T\n\t\t\t     <COND (<ZERO? .LEN> <SET LEN .OLEN>)>\n\t\t\t     <COND (<NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t\t    <CANT-ORPHAN>\n\t\t\t\t    <RFALSE>)\n\t\t\t\t   (<AND .VRB ,P-NAM>\n\t\t\t\t    <WHICH-PRINT .TLEN .LEN .TBL>\n\t\t\t\t    <SETG P-ACLAUSE\n\t\t\t\t\t  <COND (<EQUAL? .TBL ,P-PRSO> ,P-NC1)\n\t\t\t\t\t\t(T ,P-NC2)>>\n\t\t\t\t    <SETG P-AADJ ,P-ADJ>\n\t\t\t\t    <SETG P-ANAM ,P-NAM>\n\t\t\t\t    <ORPHAN <> <>>\n\t\t\t\t    <SETG P-OFLAG T>)\n\t\t\t\t   (.VRB\n\t\t\t\t    <TELL\n\"There seems to be a noun missing in that sentence!\" CR>)>\n\t\t\t     <SETG P-NAM <>>\n\t\t\t     <SETG P-ADJ <>>\n\t\t\t     <RFALSE>)>)>\n\t       <COND (<AND <ZERO? .LEN> .GCHECK>\n\t\t      <COND (.VRB\n\t\t\t     ;\"next added 1/2/85 by JW\"\n\t\t\t     <SETG P-SLOCBITS .XBITS>\n\t\t\t     <COND (<OR ,LIT <VERB? TELL ;WHERE ;WHAT ;WHO>>\n\t\t\t\t    ;\"Changed 6/10/83 - MARC\"\n\t\t\t\t    <OBJ-FOUND ,NOT-HERE-OBJECT .TBL>\n\t\t\t\t    <SETG P-XNAM ,P-NAM>\n\t\t\t\t    <SETG P-XADJ ,P-ADJ>\n\t\t\t\t    <SETG P-XADJN ,P-ADJN>\n\t\t\t\t    <SETG P-NAM <>>\n\t\t\t\t    <SETG P-ADJ <>>\n\t\t\t\t    <SETG P-ADJN <>>\n\t\t\t\t    <RTRUE>)\n\t\t\t\t   (T <TELL \"It's too dark to see!\" CR>)>)>\n\t\t      <SETG P-NAM <>>\n\t\t      <SETG P-ADJ <>>\n\t\t      <RFALSE>)\n\t\t     (<ZERO? .LEN> <SET GCHECK T> <AGAIN>)>\n\t       <SETG P-SLOCBITS .XBITS>\n\t       <SETG P-NAM <>>\n\t       <SETG P-ADJ <>>\n\t       <RTRUE>>>"
  },
  "WHICH-PRINT": {
   "name": "WHICH-PRINT",
   "file": "gparser.zil",
   "line": 1171,
   "endLine": 1191,
   "source": "<ROUTINE WHICH-PRINT (TLEN LEN TBL \"AUX\" OBJ RLEN)\n\t <SET RLEN .LEN>\n\t <TELL \"Which \">\n         <COND (<OR ,P-OFLAG ,P-MERGED ,P-AND>\n\t\t<PRINTB <COND (,P-NAM ,P-NAM)\n\t\t\t      (,P-ADJ ,P-ADJN)\n\t\t\t      (ELSE ,W?ONE)>>)\n\t       (ELSE\n\t\t<THING-PRINT <EQUAL? .TBL ,P-PRSO>>)>\n\t <TELL \" do you mean, \">\n\t <REPEAT ()\n\t\t <SET TLEN <+ .TLEN 1>>\n\t\t <SET OBJ <GET .TBL .TLEN>>\n\t\t <TELL \"the \" D .OBJ>\n\t\t <COND (<EQUAL? .LEN 2>\n\t\t        <COND (<NOT <EQUAL? .RLEN 2>> <TELL \",\">)>\n\t\t        <TELL \" or \">)\n\t\t       (<G? .LEN 2> <TELL \", \">)>\n\t\t <COND (<L? <SET LEN <- .LEN 1>> 1>\n\t\t        <TELL \"?\" CR>\n\t\t        <RETURN>)>>>"
  },
  "GLOBAL-CHECK": {
   "name": "GLOBAL-CHECK",
   "file": "gparser.zil",
   "line": 1194,
   "endLine": 1225,
   "source": "<ROUTINE GLOBAL-CHECK (TBL \"AUX\" LEN RMG RMGL (CNT 0) OBJ OBITS FOO)\n\t<SET LEN <GET .TBL ,P-MATCHLEN>>\n\t<SET OBITS ,P-SLOCBITS>\n\t<COND (<SET RMG <GETPT ,HERE ,P?GLOBAL>>\n\t       <SET RMGL <- <PTSIZE .RMG> 1>>\n\t       <REPEAT ()\n\t\t       <COND (<THIS-IT? <SET OBJ <GETB .RMG .CNT>> .TBL>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<SET RMG <GETPT ,HERE ,P?PSEUDO>>\n\t       <SET RMGL <- </ <PTSIZE .RMG> 4> 1>>\n\t       <SET CNT 0>\n\t       <REPEAT ()\n\t\t       <COND (<EQUAL? ,P-NAM <GET .RMG <* .CNT 2>>>\n\t\t\t      <PUTP ,PSEUDO-OBJECT\n\t\t\t\t    ,P?ACTION\n\t\t\t\t    <GET .RMG <+ <* .CNT 2> 1>>>\n\t\t\t      <SET FOO\n\t\t\t\t   <BACK <GETPT ,PSEUDO-OBJECT ,P?ACTION> 5>>\n\t\t\t      <PUT .FOO 0 <GET ,P-NAM 0>>\n\t\t\t      <PUT .FOO 1 <GET ,P-NAM 1>>\n\t\t\t      <OBJ-FOUND ,PSEUDO-OBJECT .TBL>\n\t\t\t      <RETURN>)\n\t\t             (<IGRTR? CNT .RMGL> <RETURN>)>>)>\n\t<COND (<EQUAL? <GET .TBL ,P-MATCHLEN> .LEN>\n\t       <SETG P-SLOCBITS -1>\n\t       <SETG P-TABLE .TBL>\n\t       <DO-SL ,GLOBAL-OBJECTS 1 1>\n\t       <SETG P-SLOCBITS .OBITS>\n\t       <COND (<AND <ZERO? <GET .TBL ,P-MATCHLEN>>\n\t\t\t   <EQUAL? ,PRSA ,V?LOOK-INSIDE ,V?SEARCH ,V?EXAMINE>>\n\t\t      <DO-SL ,ROOMS 1 1>)>)>>"
  },
  "DO-SL": {
   "name": "DO-SL",
   "file": "gparser.zil",
   "line": 1227,
   "endLine": 1235,
   "source": "<ROUTINE DO-SL (OBJ BIT1 BIT2 \"AUX\" BTS)\n\t<COND (<BTST ,P-SLOCBITS <+ .BIT1 .BIT2>>\n\t       <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCALL>)\n\t      (T\n\t       <COND (<BTST ,P-SLOCBITS .BIT1>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCTOP>)\n\t\t     (<BTST ,P-SLOCBITS .BIT2>\n\t\t      <SEARCH-LIST .OBJ ,P-TABLE ,P-SRCBOT>)\n\t\t     (T <RTRUE>)>)>>"
  },
  "SEARCH-LIST": {
   "name": "SEARCH-LIST",
   "file": "gparser.zil",
   "line": 1241,
   "endLine": 1262,
   "source": "<ROUTINE SEARCH-LIST (OBJ TBL LVL \"AUX\" FLS NOBJ)\n\t<COND (<SET OBJ <FIRST? .OBJ>>\n\t       <REPEAT ()\n\t\t       <COND (<AND <NOT <EQUAL? .LVL ,P-SRCBOT>>\n\t\t\t\t   <GETPT .OBJ ,P?SYNONYM>\n\t\t\t\t   <THIS-IT? .OBJ .TBL>>\n\t\t\t      <OBJ-FOUND .OBJ .TBL>)>\n\t\t       <COND (<AND <OR <NOT <EQUAL? .LVL ,P-SRCTOP>>\n\t\t\t\t       <FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t       <FSET? .OBJ ,SURFACEBIT>>\n\t\t\t\t   <SET NOBJ <FIRST? .OBJ>>\n\t\t\t\t   <OR <FSET? .OBJ ,OPENBIT>\n\t\t\t\t       <FSET? .OBJ ,TRANSBIT>>>\n\t\t\t      <SET FLS\n\t\t\t\t   <SEARCH-LIST .OBJ\n\t\t\t\t\t\t.TBL\n\t\t\t\t\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (<FSET? .OBJ ,SEARCHBIT>\n\t\t\t\t\t\t       ,P-SRCALL)\n\t\t\t\t\t\t      (T ,P-SRCTOP)>>>)>\n\t\t       <COND (<SET OBJ <NEXT? .OBJ>>) (T <RETURN>)>>)>>"
  },
  "OBJ-FOUND": {
   "name": "OBJ-FOUND",
   "file": "gparser.zil",
   "line": 1264,
   "endLine": 1267,
   "source": "<ROUTINE OBJ-FOUND (OBJ TBL \"AUX\" PTR)\n\t<SET PTR <GET .TBL ,P-MATCHLEN>>\n\t<PUT .TBL <+ .PTR 1> .OBJ>\n\t<PUT .TBL ,P-MATCHLEN <+ .PTR 1>>>"
  },
  "TAKE-CHECK": {
   "name": "TAKE-CHECK",
   "file": "gparser.zil",
   "line": 1269,
   "endLine": 1271,
   "source": "<ROUTINE TAKE-CHECK ()\n\t<AND <ITAKE-CHECK ,P-PRSO <GETB ,P-SYNTAX ,P-SLOC1>>\n\t     <ITAKE-CHECK ,P-PRSI <GETB ,P-SYNTAX ,P-SLOC2>>>>"
  },
  "ITAKE-CHECK": {
   "name": "ITAKE-CHECK",
   "file": "gparser.zil",
   "line": 1273,
   "endLine": 1317,
   "source": "<ROUTINE ITAKE-CHECK (TBL IBITS \"AUX\" PTR OBJ TAKEN)\n\t #DECL ((TBL) TABLE (IBITS PTR) FIX (OBJ) OBJECT\n\t\t(TAKEN) <OR FALSE FIX ATOM>)\n\t <COND (<AND <SET PTR <GET .TBL ,P-MATCHLEN>>\n\t\t     <OR <BTST .IBITS ,SHAVE>\n\t\t\t <BTST .IBITS ,STAKE>>>\n\t\t<REPEAT ()\n\t\t\t<COND (<L? <SET PTR <- .PTR 1>> 0> <RETURN>)\n\t\t\t      (T\n\t\t\t       <SET OBJ <GET .TBL <+ .PTR 1>>>\n\t\t\t       <COND (<EQUAL? .OBJ ,IT>\n\t\t\t\t      <COND (<NOT <ACCESSIBLE? ,P-IT-OBJECT>>\n\t\t\t\t\t     <TELL\n\"I don't see what you're referring to.\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <SET OBJ ,P-IT-OBJECT>)>)>\n\t\t\t       <COND (<AND <NOT <HELD? .OBJ>>\n\t\t\t\t\t   <NOT <EQUAL? .OBJ ,HANDS ,ME>>>\n\t\t\t\t      <SETG PRSO .OBJ>\n\t\t\t\t      <COND (<FSET? .OBJ ,TRYTAKEBIT>\n\t\t\t\t\t     <SET TAKEN T>)\n\t\t\t\t\t    (<NOT <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (<AND <BTST .IBITS ,STAKE>\n\t\t\t\t\t\t  <EQUAL? <ITAKE <>> T>>\n\t\t\t\t\t     <SET TAKEN <>>)\n\t\t\t\t\t    (T <SET TAKEN T>)>\n\t\t\t\t      <COND (<AND .TAKEN\n\t\t\t\t\t\t  <BTST .IBITS ,SHAVE>\n\t\t\t\t\t\t  <EQUAL? ,WINNER\n\t\t\t\t\t\t\t  ,ADVENTURER>>\n\t\t\t\t\t     <COND (<EQUAL? .OBJ\n\t\t\t\t\t\t\t    ,NOT-HERE-OBJECT>\n\t\t\t\t\t\t    <TELL\n\"You don't have that!\" CR>\n\t\t\t\t\t\t    <RFALSE>)>\n\t\t\t\t\t     <TELL \"You don't have the \">\n\t\t\t\t\t     <PRINTD .OBJ>\n\t\t\t\t\t     <TELL \".\" CR>\n\t\t\t\t\t     <RFALSE>)\n\t\t\t\t\t    (<AND <NOT .TAKEN>\n\t\t\t\t\t\t  <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t\t\t\t     <TELL \"(Taken)\" CR>)>)>)>>)\n\t       (T)>>"
  },
  "MANY-CHECK": {
   "name": "MANY-CHECK",
   "file": "gparser.zil",
   "line": 1319,
   "endLine": 1338,
   "source": "<ROUTINE MANY-CHECK (\"AUX\" (LOSS <>) TMP)\n\t<COND (<AND <G? <GET ,P-PRSO ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC1> ,SMANY>>>\n\t       <SET LOSS 1>)\n\t      (<AND <G? <GET ,P-PRSI ,P-MATCHLEN> 1>\n\t\t    <NOT <BTST <GETB ,P-SYNTAX ,P-SLOC2> ,SMANY>>>\n\t       <SET LOSS 2>)>\n\t<COND (.LOSS\n\t       <TELL \"You can't use multiple \">\n\t       <COND (<EQUAL? .LOSS 2> <TELL \"in\">)>\n\t       <TELL \"direct objects with \\\"\">\n\t       <SET TMP <GET ,P-ITBL ,P-VERBN>>\n\t       <COND (<ZERO? .TMP> <TELL \"tell\">)\n\t\t     (<OR ,P-OFLAG ,P-MERGED>\n\t\t      <PRINTB <GET .TMP 0>>)\n\t\t     (T\n\t\t      <WORD-PRINT <GETB .TMP 2> <GETB .TMP 3>>)>\n\t       <TELL \"\\\".\" CR>\n\t       <RFALSE>)\n\t      (T)>>"
  },
  "ZMEMQ": {
   "name": "ZMEMQ",
   "file": "gparser.zil",
   "line": 1340,
   "endLine": 1347,
   "source": "<ROUTINE ZMEMQ (ITM TBL \"OPTIONAL\" (SIZE -1) \"AUX\" (CNT 1))\n\t<COND (<NOT .TBL> <RFALSE>)>\n\t<COND (<NOT <L? .SIZE 0>> <SET CNT 0>)\n\t      (ELSE <SET SIZE <GET .TBL 0>>)>\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GET .TBL .CNT>>\n\t\t       <RETURN <REST .TBL <* .CNT 2>>>)\n\t\t      (<IGRTR? CNT .SIZE> <RFALSE>)>>>"
  },
  "ZMEMQB": {
   "name": "ZMEMQB",
   "file": "gparser.zil",
   "line": 1349,
   "endLine": 1354,
   "source": "<ROUTINE ZMEMQB (ITM TBL SIZE \"AUX\" (CNT 0))\n\t<REPEAT ()\n\t\t<COND (<EQUAL? .ITM <GETB .TBL .CNT>>\n\t\t       <RTRUE>)\n\t\t      (<IGRTR? CNT .SIZE>\n\t\t       <RFALSE>)>>>"
  },
  "LIT?": {
   "name": "LIT?",
   "file": "gparser.zil",
   "line": 1358,
   "endLine": 1380,
   "source": "<ROUTINE LIT? (RM \"OPTIONAL\" (RMBIT T) \"AUX\" OHERE (LIT <>))\n\t<COND (<AND ,ALWAYS-LIT <EQUAL? ,WINNER ,PLAYER>>\n\t       <RTRUE>)>\n\t<SETG P-GWIMBIT ,ONBIT>\n\t<SET OHERE ,HERE>\n\t<SETG HERE .RM>\n\t<COND (<AND .RMBIT\n\t\t    <FSET? .RM ,ONBIT>>\n\t       <SET LIT T>)\n\t      (T\n\t       <PUT ,P-MERGE ,P-MATCHLEN 0>\n\t       <SETG P-TABLE ,P-MERGE>\n\t       <SETG P-SLOCBITS -1>\n\t       <COND (<EQUAL? .OHERE .RM>\n\t\t      <DO-SL ,WINNER 1 1>\n\t\t      <COND (<AND <NOT <EQUAL? ,WINNER ,PLAYER>>\n\t\t\t\t  <IN? ,PLAYER .RM>>\n\t\t\t     <DO-SL ,PLAYER 1 1>)>)>\n\t       <DO-SL .RM 1 1>\n\t       <COND (<G? <GET ,P-TABLE ,P-MATCHLEN> 0> <SET LIT T>)>)>\n\t<SETG HERE .OHERE>\n\t<SETG P-GWIMBIT 0>\n\t.LIT>"
  },
  "THIS-IT?": {
   "name": "THIS-IT?",
   "file": "gparser.zil",
   "line": 1396,
   "endLine": 1409,
   "source": "<ROUTINE THIS-IT? (OBJ TBL \"AUX\" SYNS)\n <COND (<FSET? .OBJ ,INVISIBLE> <RFALSE>)\n       (<AND ,P-NAM\n\t     <NOT <ZMEMQ ,P-NAM\n\t\t\t <SET SYNS <GETPT .OBJ ,P?SYNONYM>>\n\t\t\t <- </ <PTSIZE .SYNS> 2> 1>>>>\n\t<RFALSE>)\n       (<AND ,P-ADJ\n\t     <OR <NOT <SET SYNS <GETPT .OBJ ,P?ADJECTIVE>>>\n\t\t <NOT <ZMEMQB ,P-ADJ .SYNS <- <PTSIZE .SYNS> 1>>>>>\n\t<RFALSE>)\n       (<AND <NOT <ZERO? ,P-GWIMBIT>> <NOT <FSET? .OBJ ,P-GWIMBIT>>>\n\t<RFALSE>)>\n <RTRUE>>"
  },
  "ACCESSIBLE?": {
   "name": "ACCESSIBLE?",
   "file": "gparser.zil",
   "line": 1411,
   "endLine": 1435,
   "source": "<ROUTINE ACCESSIBLE? (OBJ \"AUX\" (L <LOC .OBJ>)) ;\"can player TOUCH object?\"\n\t ;\"revised 5/2/84 by SEM and SWG\"\n\t <COND (<FSET? .OBJ ,INVISIBLE>\n\t\t<RFALSE>)\n\t       ;(<EQUAL? .OBJ ,PSEUDO-OBJECT>\n\t\t<COND (<EQUAL? ,LAST-PSEUDO-LOC ,HERE>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<NOT .L>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<RTRUE>)\n\t       (<AND <EQUAL? .L ,LOCAL-GLOBALS>\n\t\t     <GLOBAL-IN? .OBJ ,HERE>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <META-LOC .OBJ> ,HERE <LOC ,WINNER>>>\n\t\t<RFALSE>)\n\t       (<EQUAL? .L ,WINNER ,HERE <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND <FSET? .L ,OPENBIT>\n\t\t     <ACCESSIBLE? .L>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "META-LOC": {
   "name": "META-LOC",
   "file": "gparser.zil",
   "line": 1437,
   "endLine": 1446,
   "source": "<ROUTINE META-LOC (OBJ)\n\t <REPEAT ()\n\t\t <COND (<NOT .OBJ>\n\t\t\t<RFALSE>)\n\t\t       (<IN? .OBJ ,GLOBAL-OBJECTS>\n\t\t\t<RETURN ,GLOBAL-OBJECTS>)>\n\t\t <COND (<IN? .OBJ ,ROOMS>\n\t\t\t<RETURN .OBJ>)\n\t\t       (T\n\t\t\t<SET OBJ <LOC .OBJ>>)>>>"
  },
  "V-VERBOSE": {
   "name": "V-VERBOSE",
   "file": "gverbs.zil",
   "line": 13,
   "endLine": 16,
   "source": "<ROUTINE V-VERBOSE ()\n\t <SETG VERBOSE T>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Maximum verbosity.\" CR>>"
  },
  "V-BRIEF": {
   "name": "V-BRIEF",
   "file": "gverbs.zil",
   "line": 18,
   "endLine": 21,
   "source": "<ROUTINE V-BRIEF ()\n\t <SETG VERBOSE <>>\n\t <SETG SUPER-BRIEF <>>\n\t <TELL \"Brief descriptions.\" CR>>"
  },
  "V-SUPER-BRIEF": {
   "name": "V-SUPER-BRIEF",
   "file": "gverbs.zil",
   "line": 23,
   "endLine": 25,
   "source": "<ROUTINE V-SUPER-BRIEF ()\n\t <SETG SUPER-BRIEF T>\n\t <TELL \"Superbrief descriptions.\" CR>>"
  },
  "V-INVENTORY": {
   "name": "V-INVENTORY",
   "file": "gverbs.zil",
   "line": 29,
   "endLine": 31,
   "source": "<ROUTINE V-INVENTORY ()\n\t <COND (<FIRST? ,WINNER> <PRINT-CONT ,WINNER>)\n\t       (T <TELL \"You are empty-handed.\" CR>)>>"
  },
  "FINISH": {
   "name": "FINISH",
   "file": "gverbs.zil",
   "line": 33,
   "endLine": 53,
   "source": "<ROUTINE FINISH (\"AUX\" WRD)\n\t <V-SCORE>\n\t <REPEAT ()\n\t\t <CRLF>\n\t\t <TELL\n\"Would you like to restart the game from the beginning, restore a saved\ngame position, or end this session of the game?|\n(Type RESTART, RESTORE, or QUIT):|\n>\">\n\t\t <READ ,P-INBUF ,P-LEXV>\n\t\t <SET WRD <GET ,P-LEXV 1>>\n\t\t <COND (<EQUAL? .WRD ,W?RESTART>\n\t\t\t<RESTART>\n\t\t\t<TELL \"Failed.\" CR>)\n\t\t       (<EQUAL? .WRD ,W?RESTORE>\n\t\t\t<COND (<RESTORE>\n\t\t\t       <TELL \"Ok.\" CR>)\n\t\t\t      (T\n\t\t\t       <TELL \"Failed.\" CR>)>)\n\t\t       (<EQUAL? .WRD ,W?QUIT ,W?Q>\n\t\t\t<QUIT>)>>>"
  },
  "V-QUIT": {
   "name": "V-QUIT",
   "file": "gverbs.zil",
   "line": 55,
   "endLine": 61,
   "source": "<ROUTINE V-QUIT (\"AUX\" SCOR)\n\t <V-SCORE>\n\t <TELL \n\"Do you wish to leave the game? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<QUIT>)\n\t       (ELSE <TELL \"Ok.\" CR>)>>"
  },
  "V-RESTART": {
   "name": "V-RESTART",
   "file": "gverbs.zil",
   "line": 63,
   "endLine": 69,
   "source": "<ROUTINE V-RESTART ()\n\t <V-SCORE T>\n\t <TELL \"Do you wish to restart? (Y is affirmative): \">\n\t <COND (<YES?>\n\t\t<TELL \"Restarting.\" CR>\n\t\t<RESTART>\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-RESTORE": {
   "name": "V-RESTORE",
   "file": "gverbs.zil",
   "line": 71,
   "endLine": 76,
   "source": "<ROUTINE V-RESTORE ()\n\t <COND (<RESTORE>\n\t\t<TELL \"Ok.\" CR>\n\t\t<V-FIRST-LOOK>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SAVE": {
   "name": "V-SAVE",
   "file": "gverbs.zil",
   "line": 78,
   "endLine": 82,
   "source": "<ROUTINE V-SAVE ()\n\t <COND (<SAVE>\n\t        <TELL \"Ok.\" CR>)\n\t       (T\n\t\t<TELL \"Failed.\" CR>)>>"
  },
  "V-SCRIPT": {
   "name": "V-SCRIPT",
   "file": "gverbs.zil",
   "line": 86,
   "endLine": 90,
   "source": "<ROUTINE V-SCRIPT ()\n\t<PUT 0 8 <BOR <GET 0 8> 1>>\n\t<TELL \"Here begins a transcript of interaction with\" CR>\n\t<V-VERSION>\n\t<RTRUE>>"
  },
  "V-UNSCRIPT": {
   "name": "V-UNSCRIPT",
   "file": "gverbs.zil",
   "line": 92,
   "endLine": 96,
   "source": "<ROUTINE V-UNSCRIPT ()\n\t<TELL \"Here ends a transcript of interaction with\" CR>\n\t<V-VERSION>\n\t<PUT 0 8 <BAND <GET 0 8> -2>>\n\t<RTRUE>>"
  },
  "V-VERSION": {
   "name": "V-VERSION",
   "file": "gverbs.zil",
   "line": 98,
   "endLine": 121,
   "source": "<ROUTINE V-VERSION (\"AUX\" (CNT 17))\n\t%<COND (<==? ,ZORK-NUMBER 1>\n\t\t'<TELL \"ZORK I: The Great Underground Empire|\nInfocom interactive fiction - a fantasy story|\nCopyright (c) 1981, 1982, 1983, 1984, 1985, 1986\">)\n\t       (<==? ,ZORK-NUMBER 2>\n\t\t'<TELL \"ZORK II: The Wizard of Frobozz|\nInfocom interactive fiction - a fantasy story|\nCopyright (c) 1981, 1982, 1983, 1986\">)\n\t       (<==? ,ZORK-NUMBER 3>\n\t\t'<TELL \"ZORK III: The Dungeon Master|\nInfocom interactive fiction - a fantasy story|\nCopyright 1982, 1983, 1984, 1986\">)>\n\t<TELL \" Infocom, Inc. All rights reserved.\" CR>\n\t<TELL \"ZORK is a registered trademark of Infocom, Inc.|\nRelease \">\n\t<PRINTN <BAND <GET 0 1> *3777*>>\n\t<TELL \" / Serial number \">\n\t<REPEAT ()\n\t\t<COND (<G? <SET CNT <+ .CNT 1>> 23>\n\t\t       <RETURN>)\n\t\t      (T\n\t\t       <PRINTC <GETB 0 .CNT>>)>>\n\t<CRLF>>"
  },
  "V-VERIFY": {
   "name": "V-VERIFY",
   "file": "gverbs.zil",
   "line": 123,
   "endLine": 128,
   "source": "<ROUTINE V-VERIFY ()\n\t <TELL \"Verifying disk...\" CR>\n\t <COND (<VERIFY>\n\t\t<TELL \"The disk is correct.\" CR>)\n\t       (T\n\t\t<TELL CR \"** Disk Failure **\" CR>)>>"
  },
  "V-COMMAND-FILE": {
   "name": "V-COMMAND-FILE",
   "file": "gverbs.zil",
   "line": 130,
   "endLine": 132,
   "source": "<ROUTINE V-COMMAND-FILE ()\n\t <DIRIN 1>\n\t <RTRUE>>"
  },
  "V-RANDOM": {
   "name": "V-RANDOM",
   "file": "gverbs.zil",
   "line": 134,
   "endLine": 139,
   "source": "<ROUTINE V-RANDOM ()\n\t <COND (<NOT <EQUAL? ,PRSO ,INTNUM>>\n\t\t<TELL \"Illegal call to #RND.\" CR>)\n\t       (T\n\t\t<RANDOM <- 0 ,P-NUMBER>>\n\t\t<RTRUE>)>>"
  },
  "V-RECORD": {
   "name": "V-RECORD",
   "file": "gverbs.zil",
   "line": 141,
   "endLine": 143,
   "source": "<ROUTINE V-RECORD ()\n\t <DIROUT 4>\n\t <RTRUE>>"
  },
  "V-UNRECORD": {
   "name": "V-UNRECORD",
   "file": "gverbs.zil",
   "line": 145,
   "endLine": 147,
   "source": "<ROUTINE V-UNRECORD ()\n\t <DIROUT -4>\n\t <RTRUE>>"
  },
  "V-ADVENT": {
   "name": "V-ADVENT",
   "file": "gverbs.zil",
   "line": 153,
   "endLine": 154,
   "source": "<ROUTINE V-ADVENT ()\n\t <TELL \"A hollow voice says \\\"Fool.\\\"\" CR>>"
  },
  "V-ALARM": {
   "name": "V-ALARM",
   "file": "gverbs.zil",
   "line": 175,
   "endLine": 187,
   "source": "<ROUTINE V-ALARM ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<L? <GETP ,PRSO ,P?STRENGTH> 0>\n\t\t                <TELL \"The \" D ,PRSO \" is rudely awakened.\" CR>\n\t\t                <AWAKEN ,PRSO>))\n\t\t\t     (T\n\t\t\t      '(<NULL-F> <RTRUE>))>\n\t\t      (T\n\t\t       <TELL\n\"He's wide awake, or haven't you noticed...\" CR>)>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSO \" isn't sleeping.\" CR>)>>"
  },
  "V-ANSWER": {
   "name": "V-ANSWER",
   "file": "gverbs.zil",
   "line": 189,
   "endLine": 193,
   "source": "<ROUTINE V-ANSWER ()\n\t <TELL \"Nobody seems to be awaiting your answer.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-ATTACK": {
   "name": "V-ATTACK",
   "file": "gverbs.zil",
   "line": 195,
   "endLine": 212,
   "source": "<ROUTINE V-ATTACK ()\n\t <COND (<NOT <FSET? ,PRSO ,ACTORBIT>>\n\t\t<TELL\n\"I've known strange people, but fighting a \" D ,PRSO \"?\" CR>)\n\t       (<OR <NOT ,PRSI>\n\t\t    <EQUAL? ,PRSI ,HANDS>>\n\t\t<TELL\n\"Trying to attack a \" D ,PRSO \" with your bare hands is suicidal.\" CR>)\n\t       (<NOT <IN? ,PRSI ,WINNER>>\n\t\t<TELL \"You aren't even holding the \" D ,PRSI \".\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL\n\"Trying to attack the \" D ,PRSO \" with a \" D ,PRSI \" is suicidal.\" CR>)\n\t       (T\n\t        %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t'<HERO-BLOW>)\n\t\t       (T\n\t\t\t'<TELL \"You can't.\" CR>)>)>>"
  },
  "V-BACK": {
   "name": "V-BACK",
   "file": "gverbs.zil",
   "line": 214,
   "endLine": 215,
   "source": "<ROUTINE V-BACK ()\n\t <TELL \"Sorry, my memory is poor. Please give a direction.\" CR>>"
  },
  "V-BLAST": {
   "name": "V-BLAST",
   "file": "gverbs.zil",
   "line": 217,
   "endLine": 218,
   "source": "<ROUTINE V-BLAST ()\n\t <TELL \"You can't blast anything by using words.\" CR>>"
  },
  "PRE-BOARD": {
   "name": "PRE-BOARD",
   "file": "gverbs.zil",
   "line": 220,
   "endLine": 241,
   "source": "<ROUTINE PRE-BOARD (\"AUX\" AV)\n\t <SET AV <LOC ,WINNER>>\n\t <COND %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,PRSO ,WATER-CHANNEL ,TM-SEAT ,LAKE>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (<FSET? ,PRSO ,VEHBIT>\n\t\t<COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t       <TELL\n\"The \" D ,PRSO \" must be on the ground to be boarded.\" CR>)\n\t\t      (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"You are already in the \" D .AV \"!\" CR>)\n\t\t      (T\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO ,WATER ,GLOBAL-WATER>\n\t\t<PERFORM ,V?SWIM ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"You have a theory on how to board a \" D ,PRSO \", perhaps?\" CR>)>\n\t <RFATAL>>"
  },
  "V-BOARD": {
   "name": "V-BOARD",
   "file": "gverbs.zil",
   "line": 243,
   "endLine": 247,
   "source": "<ROUTINE V-BOARD (\"AUX\" AV)\n\t <TELL \"You are now in the \" D ,PRSO \".\" CR>\n\t <MOVE ,WINNER ,PRSO>\n\t <APPLY <GETP ,PRSO ,P?ACTION> ,M-ENTER>\n\t <RTRUE>>"
  },
  "V-BREATHE": {
   "name": "V-BREATHE",
   "file": "gverbs.zil",
   "line": 249,
   "endLine": 250,
   "source": "<ROUTINE V-BREATHE ()\n\t <PERFORM ,V?INFLATE ,PRSO ,LUNGS>>"
  },
  "V-BRUSH": {
   "name": "V-BRUSH",
   "file": "gverbs.zil",
   "line": 252,
   "endLine": 253,
   "source": "<ROUTINE V-BRUSH ()\n\t <TELL \"If you wish, but heaven only knows why.\" CR>>"
  },
  "V-BUG": {
   "name": "V-BUG",
   "file": "gverbs.zil",
   "line": 255,
   "endLine": 257,
   "source": "<ROUTINE V-BUG ()\n\t <TELL\n\"Bug? Not in a flawless program like this! (Cough, cough).\" CR>>"
  },
  "TELL-NO-PRSI": {
   "name": "TELL-NO-PRSI",
   "file": "gverbs.zil",
   "line": 259,
   "endLine": 260,
   "source": "<ROUTINE TELL-NO-PRSI ()\n\t <TELL \"You didn't say with what!\" CR>>"
  },
  "PRE-BURN": {
   "name": "PRE-BURN",
   "file": "gverbs.zil",
   "line": 262,
   "endLine": 268,
   "source": "<ROUTINE PRE-BURN ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL-NO-PRSI>)\n\t       (<FLAMING? ,PRSI>\n\t        <RFALSE>)\n\t       (T\n\t        <TELL \"With a \" D ,PRSI \"??!?\" CR>)>>"
  },
  "V-BURN": {
   "name": "V-BURN",
   "file": "gverbs.zil",
   "line": 270,
   "endLine": 293,
   "source": "<ROUTINE V-BURN ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 2>\n\t\t       '(<EQUAL? <LOC ,PRSO> ,RECEPTACLE>\n\t\t         <BALLOON-BURN>\n\t\t         <RTRUE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RFALSE>))>\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<COND (<OR <IN? ,PRSO ,WINNER>\n\t\t\t   <IN? ,WINNER ,PRSO>>\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO>\n\t\t       <TELL\n\" catches fire. Unfortunately, you were \">\n\t\t       <COND (<IN? ,WINNER ,PRSO>\n\t\t\t      <TELL \"in\">)\n\t\t\t     (T <TELL \"holding\">)>\n\t\t       <JIGS-UP \" it at the time.\">)\n\t\t      (T\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL\n\"The \" D ,PRSO \" catches fire and is consumed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't burn a \" D ,PRSO \".\" CR>)>>"
  },
  "V-CHOMP": {
   "name": "V-CHOMP",
   "file": "gverbs.zil",
   "line": 295,
   "endLine": 296,
   "source": "<ROUTINE V-CHOMP ()\n\t <TELL \"Preposterous!\" CR>>"
  },
  "V-CLIMB-DOWN": {
   "name": "V-CLIMB-DOWN",
   "file": "gverbs.zil",
   "line": 298,
   "endLine": 298,
   "source": "<ROUTINE V-CLIMB-DOWN () <V-CLIMB-UP ,P?DOWN ,PRSO>>"
  },
  "V-CLIMB-FOO": {
   "name": "V-CLIMB-FOO",
   "file": "gverbs.zil",
   "line": 300,
   "endLine": 307,
   "source": "<ROUTINE V-CLIMB-FOO ()\n\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t '<V-CLIMB-UP <COND (<EQUAL? ,PRSO ,ROPE ,GLOBAL-ROPE>\n\t\t\t\t     ,P?DOWN)\n\t\t\t\t    (T ,P?UP)>\n\t\t\t      T>)\n\t\t(ELSE\n\t\t '<V-CLIMB-UP ,P?UP ,PRSO>)>>"
  },
  "V-CLIMB-ON": {
   "name": "V-CLIMB-ON",
   "file": "gverbs.zil",
   "line": 309,
   "endLine": 317,
   "source": "<ROUTINE V-CLIMB-ON ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t%<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t'<V-CLIMB-UP ,P?UP T>)\n\t\t       (ELSE\n\t\t\t'<PERFORM ,V?BOARD ,PRSO>)>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You can't climb onto the \" D ,PRSO \".\" CR>)>>"
  },
  "V-CLIMB-UP": {
   "name": "V-CLIMB-UP",
   "file": "gverbs.zil",
   "line": 319,
   "endLine": 353,
   "source": "<ROUTINE V-CLIMB-UP (\"OPTIONAL\" (DIR ,P?UP) (OBJ <>) \"AUX\" X TX)\n\t <COND (<AND .OBJ <NOT <EQUAL? ,PRSO ,ROOMS>>>\n\t\t<SET OBJ ,PRSO>)>\n\t <COND (<SET TX <GETPT ,HERE .DIR>>\n\t\t<COND (.OBJ\n\t\t       <SET X <PTSIZE .TX>>\n\t\t       <COND (<OR <EQUAL? .X ,NEXIT>\n\t\t\t\t  <AND <EQUAL? .X ,CEXIT ,DEXIT ,UEXIT>\n\t\t\t\t       <NOT <GLOBAL-IN? ,PRSO <GETB .TX 0>>>>>\n\t\t\t      <TELL \"The \" D .OBJ \" do\">\n\t\t\t      <COND (<NOT <EQUAL? .OBJ ,STAIRS>>\n\t\t\t\t     <TELL \"es\">)>\n\t\t\t      <TELL \"n't lead \">\n\t\t\t      <COND (<==? .DIR ,P?UP>\n\t\t\t\t     <TELL \"up\">)\n\t\t\t\t    (T <TELL \"down\">)>\n\t\t\t      <TELL \"ward.\" CR>\n\t\t\t      <RTRUE>)>)>\n\t\t<DO-WALK .DIR>\n\t\t<RTRUE>)\n\t       (<AND .OBJ\n\t\t     <ZMEMQ ,W?WALL\n\t\t\t    <SET X <GETPT ,PRSO ,P?SYNONYM>> <PTSIZE .X>>>\n\t\t<TELL \"Climbing the walls is to no avail.\" CR>)\n\t       (%<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t'<AND <NOT <EQUAL? ,HERE ,PATH>>\n\t\t\t      <EQUAL? .OBJ <> ,TREE>\n\t\t\t      <GLOBAL-IN? ,TREE ,HERE>>)\n\t\t       (ELSE '<NULL-F>)>\n\t\t<TELL \"There are no climbable trees here.\" CR>\n\t\t<RTRUE>)\n\t       (<EQUAL? .OBJ <> ,ROOMS>\n\t\t<TELL \"You can't go that way.\" CR>)\n\t       (T\n\t        <TELL \"You can't do that!\" CR>)>>"
  },
  "V-CLOSE": {
   "name": "V-CLOSE",
   "file": "gverbs.zil",
   "line": 355,
   "endLine": 376,
   "source": "<ROUTINE V-CLOSE ()\n\t <COND (<AND <NOT <FSET? ,PRSO ,CONTBIT>>\n\t\t     <NOT <FSET? ,PRSO ,DOORBIT>>>\n\t\t<TELL \"You must tell me how to do that to a \" D ,PRSO \".\" CR>)\n\t       (<AND <NOT <FSET? ,PRSO ,SURFACEBIT>>\n\t\t     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"Closed.\" CR>\n\t\t       <COND (<AND ,LIT <NOT <SETG LIT <LIT? ,HERE>>>>\n\t\t\t      <TELL \"It is now pitch black.\" CR>)>\n\t\t       <RTRUE>)\n\t\t      (T\n\t \t       <TELL \"It is already closed.\" CR>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <FCLEAR ,PRSO ,OPENBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now closed.\" CR>)\n\t\t      (T\n\t \t       <TELL \"It is already closed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You cannot close that.\" CR>)>>"
  },
  "V-COMMAND": {
   "name": "V-COMMAND",
   "file": "gverbs.zil",
   "line": 378,
   "endLine": 382,
   "source": "<ROUTINE V-COMMAND ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSO \" pays no attention.\" CR>)\n\t       (T\n\t\t<TELL \"You cannot talk to that!\" CR>)>>"
  },
  "V-COUNT": {
   "name": "V-COUNT",
   "file": "gverbs.zil",
   "line": 384,
   "endLine": 388,
   "source": "<ROUTINE V-COUNT ()\n\t <COND (<EQUAL? ,PRSO ,BLESSINGS>\n\t \t<TELL \"Well, for one, you are playing Zork...\" CR>)\n\t       (T\n\t\t<TELL \"You have lost your mind.\" CR>)>>"
  },
  "V-CROSS": {
   "name": "V-CROSS",
   "file": "gverbs.zil",
   "line": 390,
   "endLine": 391,
   "source": "<ROUTINE V-CROSS ()\n\t <TELL \"You can't cross that!\" CR>>"
  },
  "V-CURSES": {
   "name": "V-CURSES",
   "file": "gverbs.zil",
   "line": 393,
   "endLine": 401,
   "source": "<ROUTINE V-CURSES ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"Insults of this nature won't help you.\" CR>)\n\t\t      (T\n\t\t       <TELL \"What a loony!\" CR>)>)\n\t       (T\n\t\t<TELL\n\"Such language in a high-class establishment like this!\" CR>)>>"
  },
  "V-CUT": {
   "name": "V-CUT",
   "file": "gverbs.zil",
   "line": 403,
   "endLine": 419,
   "source": "<ROUTINE V-CUT ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO ,PRSI>)\n\t       (<AND <FSET? ,PRSO ,BURNBIT>\n\t\t     <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<COND (<IN? ,WINNER ,PRSO>\n\t\t       <TELL\n\"Not a bright idea, especially since you're in it.\" CR>\n\t\t       <RTRUE>)>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t\t<TELL \"Your skillful \" D ,PRSI \"smanship slices the \" D ,PRSO\n\" into innumerable slivers which blow away.\" CR>)\n\t       (<NOT <FSET? ,PRSI ,WEAPONBIT>>\n\t\t<TELL\n\"The \\\"cutting edge\\\" of a \" D ,PRSI \" is hardly adequate.\" CR>)\n\t       (T\n\t\t<TELL \"Strange concept, cutting the \" D ,PRSO \"....\" CR>)>>"
  },
  "V-DEFLATE": {
   "name": "V-DEFLATE",
   "file": "gverbs.zil",
   "line": 421,
   "endLine": 422,
   "source": "<ROUTINE V-DEFLATE ()\n\t <TELL \"Come on, now!\" CR>>"
  },
  "V-DIG": {
   "name": "V-DIG",
   "file": "gverbs.zil",
   "line": 424,
   "endLine": 435,
   "source": "<ROUTINE V-DIG ()\n\t <COND (<NOT ,PRSI>\n\t\t<SETG PRSI ,HANDS>)>\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<EQUAL? ,PRSI ,SHOVEL>\n\t\t\t <TELL \"There's no reason to be digging here.\" CR>\n\t\t\t <RTRUE>)>)\n\t\t(ELSE T)>\n\t <COND (<FSET? ,PRSI ,TOOLBIT>\n\t\t<TELL \"Digging with the \" D ,PRSI \" is slow and tedious.\" CR>)\n\t       (T\n\t\t<TELL \"Digging with a \" D ,PRSI \" is silly.\" CR>)>>"
  },
  "V-DISEMBARK": {
   "name": "V-DISEMBARK",
   "file": "gverbs.zil",
   "line": 437,
   "endLine": 451,
   "source": "<ROUTINE V-DISEMBARK ()\n\t <COND (<AND <EQUAL? ,PRSO ,ROOMS>\n\t\t     <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<NOT <EQUAL? <LOC ,WINNER> ,PRSO>>\n\t\t<TELL \"You're not in that!\" CR>\n\t\t<RFATAL>)\n\t       (<FSET? ,HERE ,RLANDBIT>\n\t\t<TELL \"You are on your own feet again.\" CR>\n\t\t<MOVE ,WINNER ,HERE>)\n\t       (T\n\t\t<TELL\n\"You realize that getting out here would be fatal.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-DISENCHANT": {
   "name": "V-DISENCHANT",
   "file": "gverbs.zil",
   "line": 453,
   "endLine": 485,
   "source": "<ROUTINE V-DISENCHANT ()\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<NOT <IN? ,PRSO ,HERE>>\n\t\t         <RTRUE>)\n\t                (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>\n\t\t          <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t          <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>\n\t\t          <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t                 <COND (<EQUAL? ,SPELL-USED ,W?FEEBLE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" seems stronger now.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FUMBLE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" no longer appears clumsy.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FEAR>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" no longer appears afraid.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FREEZE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" moves again.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FERMENT>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" stops swaying.\" CR>)\n\t\t\t               (<EQUAL? ,SPELL-USED ,W?FIERCE>\n\t\t\t                <TELL\n\"The \" D ,PRSO \" appears more peaceful.\" CR>)>)>)\n\t                        (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t                 <TELL\n\"The \" D ,PRSO \" sinks to the ground.\" CR>)\n\t                        (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t                 <TELL \"The sweet smell has dispersed.\" CR>)>)\n\t\t(T\n\t\t '<TELL \"Nothing happens.\" CR>)>>"
  },
  "V-DRINK": {
   "name": "V-DRINK",
   "file": "gverbs.zil",
   "line": 487,
   "endLine": 488,
   "source": "<ROUTINE V-DRINK ()\n\t <V-EAT>>"
  },
  "V-DRINK-FROM": {
   "name": "V-DRINK-FROM",
   "file": "gverbs.zil",
   "line": 490,
   "endLine": 491,
   "source": "<ROUTINE V-DRINK-FROM ()\n\t <TELL \"How peculiar!\" CR>>"
  },
  "PRE-DROP": {
   "name": "PRE-DROP",
   "file": "gverbs.zil",
   "line": 493,
   "endLine": 496,
   "source": "<ROUTINE PRE-DROP ()\n\t <COND (<EQUAL? ,PRSO <LOC ,WINNER>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-DROP": {
   "name": "V-DROP",
   "file": "gverbs.zil",
   "line": 498,
   "endLine": 500,
   "source": "<ROUTINE V-DROP ()\n\t <COND (<IDROP>\n\t\t<TELL \"Dropped.\" CR>)>>"
  },
  "V-EAT": {
   "name": "V-EAT",
   "file": "gverbs.zil",
   "line": 502,
   "endLine": 535,
   "source": "<ROUTINE V-EAT (\"AUX\" (EAT? <>) (DRINK? <>) (NOBJ <>))\n\t <COND (<SET EAT? <FSET? ,PRSO ,FOODBIT>>\n\t\t<COND (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t\t    <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t       <TELL \"You're not holding that.\" CR>)\n\t\t      (<VERB? DRINK>\n\t\t       <TELL \"How can you drink that?\">)\n\t\t      (T\n\t\t       <TELL \"Thank you very much. It really hit the spot.\">\n\t\t       <REMOVE-CAREFULLY ,PRSO>)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,DRINKBIT>\n\t\t<SET DRINK? T>\n\t\t<SET NOBJ <LOC ,PRSO>>\n\t\t<COND (<OR <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t\t   <GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t\t   <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t       <HIT-SPOT>)\n\t\t      (<OR <NOT .NOBJ>\n\t\t\t   <NOT <ACCESSIBLE? .NOBJ>>>\n\t\t       <TELL\n\"There isn't any water here.\" CR>)\n\t\t      (<AND <ACCESSIBLE? .NOBJ>\n\t\t\t    <NOT <IN? .NOBJ ,WINNER>>>\n\t\t       <TELL\n\"You have to be holding the \" D .NOBJ \" first.\" CR>)\n\t\t      (<NOT <FSET? .NOBJ ,OPENBIT>>\n\t\t       <TELL\n\"You'll have to open the \" D .NOBJ \" first.\" CR>)\n\t\t      (T\n\t\t       <HIT-SPOT>)>)\n\t       (<NOT <OR .EAT? .DRINK?>>\n\t\t<TELL\n\"I don't think that the \" D ,PRSO \" would agree with you.\" CR>)>>"
  },
  "HIT-SPOT": {
   "name": "HIT-SPOT",
   "file": "gverbs.zil",
   "line": 537,
   "endLine": 543,
   "source": "<ROUTINE HIT-SPOT ()\n\t <COND (<AND <EQUAL? ,PRSO ,WATER>\n\t\t     <NOT <GLOBAL-IN? ,GLOBAL-WATER ,HERE>>>\n\t\t<REMOVE-CAREFULLY ,PRSO>)>\n\t <TELL\n\"Thank you very much. I was rather thirsty (from all this talking,\nprobably).\" CR>>"
  },
  "V-ECHO": {
   "name": "V-ECHO",
   "file": "gverbs.zil",
   "line": 545,
   "endLine": 567,
   "source": "<ROUTINE V-ECHO (\"AUX\" LST MAX (ECH 0) CNT) \n\t #DECL ((LST) <PRIMTYPE VECTOR> (MAX CNT ECH) FIX)\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<G? <GETB ,P-LEXV ,P-LEXWORDS> 0>\n\t                 <SET LST <REST \n\t\t\t\t   ,P-LEXV\n\t\t\t\t   <* <GETB ,P-LEXV ,P-LEXWORDS> ,P-WORDLEN>>>\n\t                 <SET MAX <- <+ <GETB .LST 0> <GETB .LST 1>> 1>>\n\t                 <REPEAT ()\n\t\t            <COND (<G? <SET ECH <+ .ECH 1>> 2>\n\t\t\t           <TELL \"...\" CR>\n\t\t\t\t   <RETURN>)\n\t\t\t          (T\n\t\t\t           <SET CNT <- <GETB .LST 1> 1>>\n\t\t\t           <REPEAT ()\n\t\t\t\t      <COND (<G? <SET CNT <+ .CNT 1>> .MAX>\n\t\t\t\t\t     <RETURN>)\n\t\t\t\t\t    (T\n\t\t\t\t\t     <PRINTC <GETB ,P-INBUF .CNT>>)>>\n\t\t\t           <TELL \" \">)>>)\n\t\t\t(T <TELL \"echo echo ...\" CR>)>)\n\t\t(T\n\t\t '<TELL \"echo echo ...\" CR>)>>"
  },
  "V-ENCHANT": {
   "name": "V-ENCHANT",
   "file": "gverbs.zil",
   "line": 569,
   "endLine": 627,
   "source": "<ROUTINE V-ENCHANT ()\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,WAND-ON <SETG SPELL-VICTIM ,WAND-ON>)>)\n       (T\n\t'<NULL-F>)>\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,SPELL-VICTIM\n\t\t<COND (<NOT ,SPELL-USED>\n\t\t       <TELL \"You must be more specific.\" CR>\n\t\t       <RTRUE>)>\n\t\t<COND (<OR <EQUAL? ,SPELL-USED ,W?FEEBLE ,W?FUMBLE ,W?FEAR>\n\t\t\t   <EQUAL? ,SPELL-USED ,W?FREEZE ,W?FALL ,W?FERMENT>\n\t\t\t   <EQUAL? ,SPELL-USED ,W?FIERCE ,W?FENCE ,W?FANTASIZE>>\n\t\t       <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t\t      <TELL\n\"The wand stops glowing, but there is no other obvious effect.\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL\n\"That might have done something, but it's hard to tell with a \" D ,PRSO \".\" CR>)>)\n\t\t      ;(<EQUAL? ,SPELL-USED ,W?FIREPROOF>\n\t\t       <RTRUE>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FUDGE>\n\t\t       <TELL\n\"A strong odor of chocolate permeates the room.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FLUORESCE>\n\t\t       <FSET ,PRSO ,LIGHTBIT>\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <SETG LIT T>\n\t\t       <TELL\n\"The \" D ,PRSO \" begins to glow.\" CR>)\n\t\t      (<EQUAL? ,SPELL-USED ,W?FILCH>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t\t      <MOVE ,PRSO ,WINNER>\n\t\t\t      <SCORE-OBJ ,PRSO>\n\t\t\t      <TELL \"Filched!\" CR>)\n\t\t\t     (ELSE\n\t\t\t      <TELL \"You can't filch the \" D ,PRSO \"!\" CR>)>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <COND (<AND <EQUAL? ,SPELL-VICTIM ,COLLAR>\n\t\t\t\t   <IN? ,COLLAR ,CERBERUS>>\n\t\t\t      <SETG SPELL-VICTIM ,CERBERUS>)>\n\t\t       <TELL\n\"The \" D ,PRSO \" floats serenely in midair.\" CR>)\n\t\t      (<AND <EQUAL? ,SPELL-USED ,W?FRY>\n\t\t\t    <FSET? ,PRSO ,TAKEBIT>>\n\t\t       <SETG SPELL-HANDLED? T>\n\t\t       <REMOVE-CAREFULLY ,PRSO>\n\t\t       <TELL \"The \" D ,PRSO \" goes up in a puff of smoke.\" CR>)\n\t\t      (ELSE\n\t\t       <SETG SPELL-VICTIM <>>\n\t\t       <TELL\n\"The wand stops glowing, but there is no other apparent effect.\" CR>)>)\n\t       (ELSE\n\t\t<SETG SPELL-VICTIM <>>\n\t\t<TELL \"Nothing happens.\" CR>)>)\n       (T\n\t'<V-DISENCHANT>)>>"
  },
  "REMOVE-CAREFULLY": {
   "name": "REMOVE-CAREFULLY",
   "file": "gverbs.zil",
   "line": 629,
   "endLine": 637,
   "source": "<ROUTINE REMOVE-CAREFULLY (OBJ \"AUX\" OLIT)\n\t <COND (<EQUAL? .OBJ ,P-IT-OBJECT>\n\t\t<SETG P-IT-OBJECT <>>)>\n\t <SET OLIT ,LIT>\n\t <REMOVE .OBJ>\n\t <SETG LIT <LIT? ,HERE>>\n\t <COND (<AND .OLIT <NOT <EQUAL? .OLIT ,LIT>>>\n\t\t<TELL \"You are left in the dark...\" CR>)>\n\t T>"
  },
  "V-ENTER": {
   "name": "V-ENTER",
   "file": "gverbs.zil",
   "line": 639,
   "endLine": 640,
   "source": "<ROUTINE V-ENTER ()\n\t<DO-WALK ,P?IN>>"
  },
  "V-EXAMINE": {
   "name": "V-EXAMINE",
   "file": "gverbs.zil",
   "line": 642,
   "endLine": 649,
   "source": "<ROUTINE V-EXAMINE ()\n\t <COND (<GETP ,PRSO ,P?TEXT>\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)\n\t       (<OR <FSET? ,PRSO ,CONTBIT>\n\t\t    <FSET? ,PRSO ,DOORBIT>>\n\t\t<V-LOOK-INSIDE>)\n\t       (T\n\t\t<TELL \"There's nothing special about the \" D ,PRSO \".\" CR>)>>"
  },
  "V-EXIT": {
   "name": "V-EXIT",
   "file": "gverbs.zil",
   "line": 651,
   "endLine": 660,
   "source": "<ROUTINE V-EXIT ()\n\t <COND (<AND <EQUAL? ,PRSO <> ,ROOMS>\n\t\t     <FSET? <LOC ,WINNER> ,VEHBIT>>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (<AND ,PRSO <IN? ,WINNER ,PRSO>>\n\t\t<PERFORM ,V?DISEMBARK ,PRSO>\n\t\t<RTRUE>)\n\t       (ELSE\n\t\t<DO-WALK ,P?OUT>)>>"
  },
  "V-EXORCISE": {
   "name": "V-EXORCISE",
   "file": "gverbs.zil",
   "line": 662,
   "endLine": 663,
   "source": "<ROUTINE V-EXORCISE ()\n\t <TELL \"What a bizarre concept!\" CR>>"
  },
  "PRE-FILL": {
   "name": "PRE-FILL",
   "file": "gverbs.zil",
   "line": 665,
   "endLine": 681,
   "source": "<ROUTINE PRE-FILL (\"AUX\" TX)\n\t <COND (<NOT ,PRSI>\n\t\t<SET TX <GETPT ,HERE ,P?GLOBAL>>\n\t\t<COND (<AND .TX <ZMEMQB ,GLOBAL-WATER .TX <- <PTSIZE .TX> 1>>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,WATER <LOC ,WINNER>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,WATER>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"There is nothing to fill it with.\" CR>\n\t\t       <RTRUE>)>)>\n\t <COND (<EQUAL? ,PRSI ,WATER>\n\t\t<RFALSE>)\n\t       (<NOT <EQUAL? ,PRSI ,GLOBAL-WATER>>\n\t\t<PERFORM ,V?PUT ,PRSI ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-FILL": {
   "name": "V-FILL",
   "file": "gverbs.zil",
   "line": 697,
   "endLine": 708,
   "source": "<ROUTINE V-FILL ()\n\t <COND (<NOT ,PRSI>\n\t\t<COND (<GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t       <PERFORM ,V?FILL ,PRSO ,GLOBAL-WATER>\n\t\t       <RTRUE>)\n\t\t      (<IN? ,WATER <LOC ,WINNER>>\n\t\t       <PERFORM ,V?FILL ,PRSO ,WATER>\n\t\t       <RTRUE>)\n\t\t      (T\n\t\t       <TELL \"There's nothing to fill it with.\" CR>)>)\n\t       (T\n\t\t<TELL \"You may know how to do that, but I don't.\" CR>)>>"
  },
  "V-FIND": {
   "name": "V-FIND",
   "file": "gverbs.zil",
   "line": 710,
   "endLine": 732,
   "source": "<ROUTINE V-FIND (\"AUX\" (L <LOC ,PRSO>))\n\t <COND (<EQUAL? ,PRSO ,HANDS ,LUNGS>\n\t\t<TELL\n\"Within six feet of your head, assuming you haven't left that\nsomewhere.\" CR>)\n\t       (<EQUAL? ,PRSO ,ME>\n\t\t<TELL \"You're around here somewhere...\" CR>)\n\t       (<EQUAL? .L ,GLOBAL-OBJECTS>\n\t\t<TELL \"You find it.\" CR>)\n\t       (<IN? ,PRSO ,WINNER>\n\t\t<TELL \"You have it.\" CR>)\n\t       (<OR <IN? ,PRSO ,HERE>\n\t\t    <GLOBAL-IN? ,PRSO ,HERE>\n\t\t    <EQUAL? ,PRSO ,PSEUDO-OBJECT>>\n\t\t<TELL \"It's right here.\" CR>)\n\t       (<FSET? .L ,ACTORBIT>\n\t\t<TELL \"The \" D .L \" has it.\" CR>)\n\t       (<FSET? .L ,SURFACEBIT>\n\t\t<TELL \"It's on the \" D .L \".\" CR>)\n\t       (<FSET? .L ,CONTBIT>\n\t\t<TELL \"It's in the \" D .L \".\" CR>)\n\t       (T\n\t\t<TELL \"Beats me.\" CR>)>>"
  },
  "V-FOLLOW": {
   "name": "V-FOLLOW",
   "file": "gverbs.zil",
   "line": 734,
   "endLine": 735,
   "source": "<ROUTINE V-FOLLOW ()\n\t <TELL \"You're nuts!\" CR>>"
  },
  "V-FROBOZZ": {
   "name": "V-FROBOZZ",
   "file": "gverbs.zil",
   "line": 737,
   "endLine": 739,
   "source": "<ROUTINE V-FROBOZZ ()\n\t <TELL\n\"The FROBOZZ Corporation created, owns, and operates this dungeon.\" CR>>"
  },
  "PRE-GIVE": {
   "name": "PRE-GIVE",
   "file": "gverbs.zil",
   "line": 741,
   "endLine": 744,
   "source": "<ROUTINE PRE-GIVE ()\n\t <COND (<NOT <HELD? ,PRSO>>\n\t\t<TELL \n\"That's easy for you to say since you don't even have the \" D ,PRSO \".\" CR>)>>"
  },
  "V-GIVE": {
   "name": "V-GIVE",
   "file": "gverbs.zil",
   "line": 746,
   "endLine": 750,
   "source": "<ROUTINE V-GIVE ()\n\t <COND (<NOT <FSET? ,PRSI ,ACTORBIT>>\n\t\t<TELL \"You can't give a \" D ,PRSO \" to a \" D ,PRSI \"!\" CR>)\n\t       (T\n\t\t<TELL \"The \" D ,PRSI \" refuses it politely.\" CR>)>>"
  },
  "V-HATCH": {
   "name": "V-HATCH",
   "file": "gverbs.zil",
   "line": 752,
   "endLine": 753,
   "source": "<ROUTINE V-HATCH ()\n\t <TELL \"Bizarre!\" CR>>"
  },
  "V-HELLO": {
   "name": "V-HELLO",
   "file": "gverbs.zil",
   "line": 757,
   "endLine": 767,
   "source": "<ROUTINE V-HELLO ()\n\t <COND (,PRSO\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL\n\"The \" D ,PRSO \" bows his head to you in greeting.\" CR>)\n\t\t      (T\n\t\t       <TELL\n\"It's a well known fact that only schizophrenics say \\\"Hello\\\" to a \"\nD ,PRSO \".\" CR>)>)\n\t       (T\n\t\t<TELL <PICK-ONE ,HELLOS> CR>)>>"
  },
  "V-INCANT": {
   "name": "V-INCANT",
   "file": "gverbs.zil",
   "line": 769,
   "endLine": 788,
   "source": "<ROUTINE V-INCANT ()\n%<COND (<==? ,ZORK-NUMBER 2>\n\t'<COND (,SPELL-USED\n\t\t<TELL \"Nothing happens.\" CR>)\n\t       (,WAND-ON\n\t\t<SETG SPELL-VICTIM ,WAND-ON>\n\t\t<SETG SPELL-USED <GET ,P-LEXV ,P-CONT>>\n\t\t<TELL \"The wand glows very brightly for a moment.\" CR>\n\t\t<ENABLE <QUEUE I-SPELL <+ 10 <RANDOM 10>>>>\n\t\t<SETG WAND-ON <>>\n\t\t<PERFORM ,V?ENCHANT ,SPELL-VICTIM>)\n\t       (T\n\t\t<TELL\n\"The incantation echoes back faintly, but nothing else happens.\" CR>)>)\n       (T\n\t'<TELL\n\"The incantation echoes back faintly, but nothing else happens.\" CR>)>\n\t <SETG QUOTE-FLAG <>>\n\t <SETG P-CONT <>>\n\t <RTRUE>>"
  },
  "V-INFLATE": {
   "name": "V-INFLATE",
   "file": "gverbs.zil",
   "line": 790,
   "endLine": 791,
   "source": "<ROUTINE V-INFLATE ()\n\t <TELL \"How can you inflate that?\" CR>>"
  },
  "V-KICK": {
   "name": "V-KICK",
   "file": "gverbs.zil",
   "line": 804,
   "endLine": 804,
   "source": "<ROUTINE V-KICK () <HACK-HACK \"Kicking the \">>"
  },
  "V-KISS": {
   "name": "V-KISS",
   "file": "gverbs.zil",
   "line": 806,
   "endLine": 807,
   "source": "<ROUTINE V-KISS ()\n\t <TELL \"I'd sooner kiss a pig.\" CR>>"
  },
  "V-KNOCK": {
   "name": "V-KNOCK",
   "file": "gverbs.zil",
   "line": 809,
   "endLine": 813,
   "source": "<ROUTINE V-KNOCK ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<TELL \"Nobody's home.\" CR>)\n\t       (T\n\t\t<TELL \"Why knock on a \" D ,PRSO \"?\" CR>)>>"
  },
  "V-LAMP-OFF": {
   "name": "V-LAMP-OFF",
   "file": "gverbs.zil",
   "line": 815,
   "endLine": 828,
   "source": "<ROUTINE V-LAMP-OFF ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<NOT <FSET? ,PRSO ,ONBIT>>\n\t\t       <TELL \"It is already off.\" CR>)\n\t\t      (T\n\t\t       <FCLEAR ,PRSO ,ONBIT>\n\t\t       <COND (,LIT\n\t\t\t      <SETG LIT <LIT? ,HERE>>)>\n\t\t       <TELL \"The \" D ,PRSO \" is now off.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <TELL \"It is now pitch black.\" CR>)>)>)\n\t       (T\n\t\t<TELL \"You can't turn that off.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAMP-ON": {
   "name": "V-LAMP-ON",
   "file": "gverbs.zil",
   "line": 830,
   "endLine": 846,
   "source": "<ROUTINE V-LAMP-ON ()\n\t <COND (<FSET? ,PRSO ,LIGHTBIT>\n\t\t<COND (<FSET? ,PRSO ,ONBIT>\n\t\t       <TELL \"It is already on.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,ONBIT>\n\t\t       <TELL \"The \" D ,PRSO \" is now on.\" CR>\n\t\t       <COND (<NOT ,LIT>\n\t\t\t      <SETG LIT <LIT? ,HERE>>\n\t\t\t      <CRLF>\n\t\t\t      <V-LOOK>)>)>)\n\t       (<FSET? ,PRSO ,BURNBIT>\n\t\t<TELL\n\"If you wish to burn the \" D ,PRSO \", you should say so.\" CR>)\n\t       (T\n\t\t<TELL \"You can't turn that on.\" CR>)>\n\t <RTRUE>>"
  },
  "V-LAUNCH": {
   "name": "V-LAUNCH",
   "file": "gverbs.zil",
   "line": 848,
   "endLine": 852,
   "source": "<ROUTINE V-LAUNCH ()\n\t <COND (<FSET? ,PRSO ,VEHBIT>\n\t\t<TELL \"You can't launch that by saying \\\"launch\\\"!\" CR>)\n\t       (T\n\t\t<TELL \"That's pretty weird.\" CR>)>>"
  },
  "V-LEAN-ON": {
   "name": "V-LEAN-ON",
   "file": "gverbs.zil",
   "line": 854,
   "endLine": 855,
   "source": "<ROUTINE V-LEAN-ON ()\n\t <TELL \"Getting tired?\" CR>>"
  },
  "V-LEAP": {
   "name": "V-LEAP",
   "file": "gverbs.zil",
   "line": 857,
   "endLine": 886,
   "source": "<ROUTINE V-LEAP (\"AUX\" TX S)\n\t <COND (,PRSO\n\t\t<COND (<IN? ,PRSO ,HERE>\n\t\t       <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t\t      <TELL\n\"The \" D ,PRSO \" is too big to jump over.\" CR>)\n\t\t\t     (T\n\t\t\t      <V-SKIP>)>)\n\t\t      (T\n\t\t       <TELL \"That would be a good trick.\" CR>)>)\n\t       (<SET TX <GETPT ,HERE ,P?DOWN>>\n\t\t<SET S <PTSIZE .TX>>\n\t\t<COND (<OR <EQUAL? .S 2> ;NEXIT\n       \t\t\t   <AND <EQUAL? .S 4> ;CEXIT\n\t\t\t\t<NOT <VALUE <GETB .TX 1>>>>>\n\t\t       <TELL\n\"This was not a very safe place to try jumping.\" CR>\n\t\t       <JIGS-UP <PICK-ONE ,JUMPLOSS>>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<EQUAL? ,HERE ,UP-A-TREE>\n\t\t                <TELL\n\"In a feat of unaccustomed daring, you manage to land on your feet without\nkilling yourself.\" CR CR>\n\t\t                <DO-WALK ,P?DOWN>\n\t\t                <RTRUE>))\n\t\t\t     (T '(<NULL-F> T))>\n\t\t      (T\n\t\t       <V-SKIP>)>)\n\t       (T\n\t\t<V-SKIP>)>>"
  },
  "V-LEAVE": {
   "name": "V-LEAVE",
   "file": "gverbs.zil",
   "line": 894,
   "endLine": 894,
   "source": "<ROUTINE V-LEAVE () <DO-WALK ,P?OUT>>"
  },
  "V-LISTEN": {
   "name": "V-LISTEN",
   "file": "gverbs.zil",
   "line": 896,
   "endLine": 897,
   "source": "<ROUTINE V-LISTEN ()\n\t <TELL \"The \" D ,PRSO \" makes no sound.\" CR>>"
  },
  "V-LOCK": {
   "name": "V-LOCK",
   "file": "gverbs.zil",
   "line": 899,
   "endLine": 900,
   "source": "<ROUTINE V-LOCK ()\n\t <TELL \"It doesn't seem to work.\" CR>>"
  },
  "V-LOOK": {
   "name": "V-LOOK",
   "file": "gverbs.zil",
   "line": 902,
   "endLine": 904,
   "source": "<ROUTINE V-LOOK ()\n\t <COND (<DESCRIBE-ROOM T>\n\t\t<DESCRIBE-OBJECTS T>)>>"
  },
  "V-LOOK-BEHIND": {
   "name": "V-LOOK-BEHIND",
   "file": "gverbs.zil",
   "line": 906,
   "endLine": 907,
   "source": "<ROUTINE V-LOOK-BEHIND ()\n\t <TELL \"There is nothing behind the \" D ,PRSO \".\" CR>>"
  },
  "V-LOOK-INSIDE": {
   "name": "V-LOOK-INSIDE",
   "file": "gverbs.zil",
   "line": 909,
   "endLine": 934,
   "source": "<ROUTINE V-LOOK-INSIDE ()\n\t <COND (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL\n\"The \" D ,PRSO \" is open, but I can't tell what's beyond it.\">)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\">)>\n\t\t<CRLF>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t       <TELL \"There is nothing special to be seen.\" CR>)\n\t\t      (<SEE-INSIDE? ,PRSO>\n\t\t       <COND (<AND <FIRST? ,PRSO>\n\t\t\t\t   <PRINT-CONT ,PRSO>>\n\t\t\t      <RTRUE>)\n\t\t\t     %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t     '(<FSET? ,PRSO ,SURFACEBIT>\n\t\t\t\t       <TELL\n\"There is nothing on the \" D ,PRSO \".\" CR>))\n\t\t\t\t    (ELSE '(<NULL-F> <RTRUE>))>\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D ,PRSO \" is empty.\" CR>)>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" is closed.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't look inside a \" D ,PRSO \".\" CR>)>>"
  },
  "V-LOOK-ON": {
   "name": "V-LOOK-ON",
   "file": "gverbs.zil",
   "line": 936,
   "endLine": 941,
   "source": "<ROUTINE V-LOOK-ON ()\n\t <COND (<FSET? ,PRSO ,SURFACEBIT>\n\t\t<PERFORM ,V?LOOK-INSIDE ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Look on a \" D ,PRSO \"???\" CR>)>>"
  },
  "V-LOOK-UNDER": {
   "name": "V-LOOK-UNDER",
   "file": "gverbs.zil",
   "line": 943,
   "endLine": 944,
   "source": "<ROUTINE V-LOOK-UNDER ()\n\t <TELL \"There is nothing but dust there.\" CR>>"
  },
  "V-LOWER": {
   "name": "V-LOWER",
   "file": "gverbs.zil",
   "line": 946,
   "endLine": 946,
   "source": "<ROUTINE V-LOWER () <HACK-HACK \"Playing in this way with the \">>"
  },
  "V-MAKE": {
   "name": "V-MAKE",
   "file": "gverbs.zil",
   "line": 948,
   "endLine": 949,
   "source": "<ROUTINE V-MAKE ()\n    \t<TELL \"You can't do that.\" CR>>"
  },
  "V-MELT": {
   "name": "V-MELT",
   "file": "gverbs.zil",
   "line": 951,
   "endLine": 952,
   "source": "<ROUTINE V-MELT ()\n\t <TELL \"It's not clear that a \" D ,PRSO \" can be melted.\" CR>>"
  },
  "PRE-MOVE": {
   "name": "PRE-MOVE",
   "file": "gverbs.zil",
   "line": 954,
   "endLine": 956,
   "source": "<ROUTINE PRE-MOVE ()\n\t <COND (<HELD? ,PRSO>\n\t\t<TELL \"You aren't an accomplished enough juggler.\" CR>)>>"
  },
  "V-MOVE": {
   "name": "V-MOVE",
   "file": "gverbs.zil",
   "line": 958,
   "endLine": 962,
   "source": "<ROUTINE V-MOVE ()\n\t <COND (<FSET? ,PRSO ,TAKEBIT>\n\t\t<TELL \"Moving the \" D ,PRSO \" reveals nothing.\" CR>)\n\t       (T\n\t\t<TELL \"You can't move the \" D ,PRSO \".\" CR>)>>"
  },
  "V-MUMBLE": {
   "name": "V-MUMBLE",
   "file": "gverbs.zil",
   "line": 964,
   "endLine": 965,
   "source": "<ROUTINE V-MUMBLE ()\n\t <TELL \"You'll have to speak up if you expect me to hear you!\" CR>>"
  },
  "PRE-MUNG": {
   "name": "PRE-MUNG",
   "file": "gverbs.zil",
   "line": 967,
   "endLine": 980,
   "source": "<ROUTINE PRE-MUNG ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,PRSO ,BEAM>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (<OR <NOT ,PRSI>\n\t\t    <NOT <FSET? ,PRSI ,WEAPONBIT>>>\n\t\t<TELL \"Trying to destroy the \" D ,PRSO \" with \">\n\t\t<COND (<NOT ,PRSI>\n\t\t       <TELL \"your bare hands\">)\n\t\t      (T\n\t\t       <TELL \"a \" D ,PRSI>)>\n\t\t<TELL \" is futile.\" CR>)>>"
  },
  "V-MUNG": {
   "name": "V-MUNG",
   "file": "gverbs.zil",
   "line": 982,
   "endLine": 987,
   "source": "<ROUTINE V-MUNG ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<PERFORM ,V?ATTACK ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Nice try.\" CR>)>>"
  },
  "V-ODYSSEUS": {
   "name": "V-ODYSSEUS",
   "file": "gverbs.zil",
   "line": 989,
   "endLine": 1005,
   "source": "<ROUTINE V-ODYSSEUS ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<AND <EQUAL? ,HERE ,CYCLOPS-ROOM>\n\t\t\t      <IN? ,CYCLOPS ,HERE>\n\t\t\t      <NOT ,CYCLOPS-FLAG>>\n\t\t         <DISABLE <INT I-CYCLOPS>>\n\t\t         <SETG CYCLOPS-FLAG T>\n\t\t         <TELL \n\"The cyclops, hearing the name of his father's deadly nemesis, flees the room\nby knocking down the wall on the east of the room.\" CR>\n\t\t        <SETG MAGIC-FLAG T>\n\t\t        <FCLEAR ,CYCLOPS ,FIGHTBIT>\n\t\t        <REMOVE-CAREFULLY ,CYCLOPS>))\n\t\t      (T\n\t\t       '(<NULL-F> T))>\n\t       (T\n\t\t<TELL \"Wasn't he a sailor?\" CR>)>>"
  },
  "V-OIL": {
   "name": "V-OIL",
   "file": "gverbs.zil",
   "line": 1007,
   "endLine": 1008,
   "source": "<ROUTINE V-OIL ()\n\t <TELL \"You probably put spinach in your gas tank, too.\" CR>>"
  },
  "V-OPEN": {
   "name": "V-OPEN",
   "file": "gverbs.zil",
   "line": 1010,
   "endLine": 1038,
   "source": "<ROUTINE V-OPEN (\"AUX\" F STR)\n\t <COND (<AND <FSET? ,PRSO ,CONTBIT>\n\t\t     <NOT <EQUAL? <GETP ,PRSO ,P?CAPACITY> 0>>>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <FSET ,PRSO ,OPENBIT>\n\t\t       <FSET ,PRSO ,TOUCHBIT>\n\t\t       <COND (<OR <NOT <FIRST? ,PRSO>> <FSET? ,PRSO ,TRANSBIT>>\n\t\t\t      <TELL \"Opened.\" CR>)\n\t\t\t     (<AND <SET F <FIRST? ,PRSO>>\n\t\t\t\t   <NOT <NEXT? .F>>\n\t\t\t\t   <NOT <FSET? .F ,TOUCHBIT>>\n\t\t\t\t   <SET STR <GETP .F ,P?FDESC>>>\n\t\t\t      <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t\t      <TELL .STR CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Opening the \" D ,PRSO \" reveals \">\n\t\t\t      <PRINT-CONTENTS ,PRSO>\n\t\t\t      <TELL \".\" CR>)>)>)\n\t       (<FSET? ,PRSO ,DOORBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <TELL \"It is already open.\" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO \" opens.\" CR>\n\t\t       <FSET ,PRSO ,OPENBIT>)>)\n\t       (T\n\t\t<TELL\n\"You must tell me how to do that to a \" D ,PRSO \".\" CR>)>>"
  },
  "V-OVERBOARD": {
   "name": "V-OVERBOARD",
   "file": "gverbs.zil",
   "line": 1040,
   "endLine": 1053,
   "source": "<ROUTINE V-OVERBOARD (\"AUX\" LOCN)\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,PRSI ,TEETH>\n\t\t\t <COND (<FSET? <SET LOCN <LOC ,WINNER>> ,VEHBIT>\n\t\t\t\t<MOVE ,PRSO <LOC .LOCN>>\n\t\t\t\t<TELL \"Ahoy -- \" D ,PRSO \" overboard!\" CR>)\n\t\t\t       (T\n\t\t\t\t<TELL \"You're not in anything!\" CR>)>))\n\t\t      (T '(<NULL-F> T))>\n\t       (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?THROW ,PRSO>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"Huh?\" CR>)>>"
  },
  "V-PICK": {
   "name": "V-PICK",
   "file": "gverbs.zil",
   "line": 1055,
   "endLine": 1055,
   "source": "<ROUTINE V-PICK () <TELL \"You can't pick that.\" CR>>"
  },
  "V-PLAY": {
   "name": "V-PLAY",
   "file": "gverbs.zil",
   "line": 1057,
   "endLine": 1063,
   "source": "<ROUTINE V-PLAY ()\n    <COND (<FSET? ,PRSO ,ACTORBIT>\n\t   <TELL\n\"You become so engrossed in the role of the \" D ,PRSO \" that\nyou kill yourself, just as he might have done!\" CR>\n\t   <JIGS-UP \"\">)\n\t  (ELSE <TELL \"That's silly!\" CR>)>>"
  },
  "V-PLUG": {
   "name": "V-PLUG",
   "file": "gverbs.zil",
   "line": 1065,
   "endLine": 1066,
   "source": "<ROUTINE V-PLUG ()\n\t <TELL \"This has no effect.\" CR>>"
  },
  "V-POUR-ON": {
   "name": "V-POUR-ON",
   "file": "gverbs.zil",
   "line": 1068,
   "endLine": 1088,
   "source": "<ROUTINE V-POUR-ON ()\n\t <COND (<EQUAL? ,PRSO ,WATER>\n\t\t<REMOVE-CAREFULLY ,PRSO>\n\t        <COND (<FLAMING? ,PRSI>\n\t\t       <TELL \"The \" D ,PRSI \" is extinguished.\" CR>\n\t\t       %<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t       '<COND (<EQUAL? ,PRSI ,BINF-FLAG>\n\t\t\t\t       <SETG BINF-FLAG <>>)>)\n\t\t\t      (ELSE '<NULL-F>)>\n\t\t       <FCLEAR ,PRSI ,ONBIT>\n\t\t       <FCLEAR ,PRSI ,FLAMEBIT>)\n\t              (T\n\t\t       <TELL\n\"The water spills over the \" D ,PRSI \", to the floor, and evaporates.\" CR>)>)\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,PRSO ,PUTTY>\n\t\t\t <PERFORM ,V?PUT ,PUTTY ,PRSI>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL \"You can't pour that.\" CR>)>>"
  },
  "V-PRAY": {
   "name": "V-PRAY",
   "file": "gverbs.zil",
   "line": 1090,
   "endLine": 1098,
   "source": "<ROUTINE V-PRAY ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,SOUTH-TEMPLE>\n\t\t         <GOTO ,FOREST-1>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL\n\"If you pray enough, your prayers may be answered.\" CR>)>>"
  },
  "V-PUMP": {
   "name": "V-PUMP",
   "file": "gverbs.zil",
   "line": 1100,
   "endLine": 1112,
   "source": "<ROUTINE V-PUMP ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<AND ,PRSI <NOT <EQUAL? ,PRSI ,PUMP>>>\n\t\t         <TELL \"Pump it up with a \" D ,PRSI \"?\" CR>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<IN? ,PUMP ,WINNER>\n\t\t         <PERFORM ,V?INFLATE ,PRSO ,PUMP>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL \"It's really not clear how.\" CR>)>>"
  },
  "V-PUSH": {
   "name": "V-PUSH",
   "file": "gverbs.zil",
   "line": 1114,
   "endLine": 1114,
   "source": "<ROUTINE V-PUSH () <HACK-HACK \"Pushing the \">>"
  },
  "V-PUSH-TO": {
   "name": "V-PUSH-TO",
   "file": "gverbs.zil",
   "line": 1116,
   "endLine": 1117,
   "source": "<ROUTINE V-PUSH-TO ()\n\t <TELL \"You can't push things to that.\" CR>>"
  },
  "PRE-PUT": {
   "name": "PRE-PUT",
   "file": "gverbs.zil",
   "line": 1119,
   "endLine": 1127,
   "source": "<ROUTINE PRE-PUT ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,PRSO ,SHORT-POLE>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (T\n\t\t<PRE-GIVE>)>> ;\"That's easy for you to say...\""
  },
  "V-PUT": {
   "name": "V-PUT",
   "file": "gverbs.zil",
   "line": 1129,
   "endLine": 1158,
   "source": "<ROUTINE V-PUT ()\n\t <COND (<OR <FSET? ,PRSI ,OPENBIT>\n\t\t    <OPENABLE? ,PRSI>\n\t\t    <FSET? ,PRSI ,VEHBIT>>)\n\t       (T\n\t\t<TELL \"You can't do that.\" CR>\n\t\t<RTRUE>)>\n\t <COND (<NOT <FSET? ,PRSI ,OPENBIT>>\n\t\t<TELL \"The \" D ,PRSI \" isn't open.\" CR>\n\t\t<THIS-IS-IT ,PRSI>)\n\t       (<EQUAL? ,PRSI ,PRSO>\n\t\t<TELL \"How can you do that?\" CR>)\n\t       (<IN? ,PRSO ,PRSI>\n\t\t<TELL \"The \" D ,PRSO \" is already in the \" D ,PRSI \".\" CR>)\n\t       (<G? <- <+ <WEIGHT ,PRSI> <WEIGHT ,PRSO>>\n\t\t       <GETP ,PRSI ,P?SIZE>>\n\t\t    <GETP ,PRSI ,P?CAPACITY>>\n\t\t<TELL \"There's no room.\" CR>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <FSET? ,PRSO ,TRYTAKEBIT>>\n\t\t<TELL \"You don't have the \" D ,PRSO \".\" CR>\n\t\t<RTRUE>)\n\t       (<AND <NOT <HELD? ,PRSO>>\n\t\t     <NOT <ITAKE>>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<MOVE ,PRSO ,PRSI>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t<SCORE-OBJ ,PRSO>\n\t\t<TELL \"Done.\" CR>)>>"
  },
  "V-PUT-BEHIND": {
   "name": "V-PUT-BEHIND",
   "file": "gverbs.zil",
   "line": 1160,
   "endLine": 1161,
   "source": "<ROUTINE V-PUT-BEHIND ()\n\t <TELL \"That hiding place is too obvious.\" CR>>"
  },
  "V-PUT-ON": {
   "name": "V-PUT-ON",
   "file": "gverbs.zil",
   "line": 1163,
   "endLine": 1170,
   "source": "<ROUTINE V-PUT-ON ()\n\t <COND (<EQUAL? ,PRSI ,GROUND>\n\t\t<PERFORM ,V?DROP ,PRSO>\n\t\t<RTRUE>)\n\t       (<FSET? ,PRSI ,SURFACEBIT>\n\t\t<V-PUT>)\n\t       (T\n\t\t<TELL \"There's no good surface on the \" D ,PRSI \".\" CR>)>>"
  },
  "V-PUT-UNDER": {
   "name": "V-PUT-UNDER",
   "file": "gverbs.zil",
   "line": 1172,
   "endLine": 1173,
   "source": "<ROUTINE V-PUT-UNDER ()\n\t <TELL \"You can't do that.\" CR>>"
  },
  "V-RAISE": {
   "name": "V-RAISE",
   "file": "gverbs.zil",
   "line": 1175,
   "endLine": 1176,
   "source": "<ROUTINE V-RAISE ()\n\t <V-LOWER>>"
  },
  "V-RAPE": {
   "name": "V-RAPE",
   "file": "gverbs.zil",
   "line": 1178,
   "endLine": 1179,
   "source": "<ROUTINE V-RAPE ()\n\t <TELL \"What a (ahem!) strange idea.\" CR>>"
  },
  "PRE-READ": {
   "name": "PRE-READ",
   "file": "gverbs.zil",
   "line": 1181,
   "endLine": 1185,
   "source": "<ROUTINE PRE-READ ()\n\t <COND (<NOT ,LIT>\n\t\t<TELL \"It is impossible to read in the dark.\" CR>)\n\t       (<AND ,PRSI <NOT <FSET? ,PRSI ,TRANSBIT>>>\n\t\t<TELL \"How does one look through a \" D ,PRSI \"?\" CR>)>>"
  },
  "V-READ": {
   "name": "V-READ",
   "file": "gverbs.zil",
   "line": 1187,
   "endLine": 1191,
   "source": "<ROUTINE V-READ ()\n\t <COND (<NOT <FSET? ,PRSO ,READBIT>>\n\t\t<TELL \"How does one read a \" D ,PRSO \"?\" CR>)\n\t       (T\n\t\t<TELL <GETP ,PRSO ,P?TEXT> CR>)>>"
  },
  "V-READ-PAGE": {
   "name": "V-READ-PAGE",
   "file": "gverbs.zil",
   "line": 1193,
   "endLine": 1195,
   "source": "<ROUTINE V-READ-PAGE ()\n\t <PERFORM ,V?READ ,PRSO>\n\t <RTRUE>>"
  },
  "V-REPENT": {
   "name": "V-REPENT",
   "file": "gverbs.zil",
   "line": 1197,
   "endLine": 1198,
   "source": "<ROUTINE V-REPENT ()\n\t <TELL \"It could very well be too late!\" CR>>"
  },
  "V-REPLY": {
   "name": "V-REPLY",
   "file": "gverbs.zil",
   "line": 1200,
   "endLine": 1204,
   "source": "<ROUTINE V-REPLY ()\n\t <TELL \"It is hardly likely that the \" D ,PRSO \" is interested.\" CR>\n\t <SETG P-CONT <>>\n\t <SETG QUOTE-FLAG <>>\n\t <RTRUE>>"
  },
  "V-RING": {
   "name": "V-RING",
   "file": "gverbs.zil",
   "line": 1206,
   "endLine": 1207,
   "source": "<ROUTINE V-RING ()\n\t <TELL \"How, exactly, can you ring that?\" CR>>"
  },
  "V-RUB": {
   "name": "V-RUB",
   "file": "gverbs.zil",
   "line": 1209,
   "endLine": 1209,
   "source": "<ROUTINE V-RUB () <HACK-HACK \"Fiddling with the \">>"
  },
  "V-SAY": {
   "name": "V-SAY",
   "file": "gverbs.zil",
   "line": 1211,
   "endLine": 1239,
   "source": "<ROUTINE V-SAY (\"AUX\" V)\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<OR ,SPELL-USED ,WAND-ON>\n\t\t         <PERFORM ,V?INCANT>\n\t\t         <RTRUE>)>)\n\t\t(<==? ,ZORK-NUMBER 3>\n\t\t '<COND (<AND <FSET? ,FRONT-DOOR ,TOUCHBIT>\n\t\t              <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?FROTZ>\n\t\t              <EQUAL? <GET ,P-LEXV <+ ,P-CONT 2>> ,W?OZMOO>>\n\t\t         <SETG P-CONT <>>\n\t\t         <COND (<EQUAL? ,HERE ,MSTAIRS>\n\t\t                <CRLF>\n\t\t                <GOTO ,FRONT-DOOR>)\n\t\t               (T\n\t\t                <TELL \"Nothing happens.\" CR>)>\n\t\t                <RTRUE>)>)\n\t\t(T\n\t\t '<COND (<NOT ,P-CONT>\n\t\t\t <TELL \"Say what?\" CR>\n\t\t\t <RTRUE>)>)>\n\t <SETG QUOTE-FLAG <>>\n\t <COND (<SET V <FIND-IN ,HERE ,ACTORBIT>>\n\t\t<TELL \"You must address the \" D .V \" directly.\" CR>\n\t\t<SETG P-CONT <>>)\n\t       (<NOT <EQUAL? <GET ,P-LEXV ,P-CONT> ,W?HELLO>>\n\t        <SETG P-CONT <>>\n\t\t<TELL\n\"Talking to yourself is a sign of impending mental collapse.\" CR>)>\n\t <RTRUE>>"
  },
  "V-SEARCH": {
   "name": "V-SEARCH",
   "file": "gverbs.zil",
   "line": 1241,
   "endLine": 1242,
   "source": "<ROUTINE V-SEARCH ()\n\t <TELL \"You find nothing unusual.\" CR>>"
  },
  "V-SEND": {
   "name": "V-SEND",
   "file": "gverbs.zil",
   "line": 1244,
   "endLine": 1248,
   "source": "<ROUTINE V-SEND ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"Why would you send for the \" D ,PRSO \"?\" CR>)\n\t       (T\n\t\t<TELL \"That doesn't make sends.\" CR>)>>"
  },
  "PRE-SGIVE": {
   "name": "PRE-SGIVE",
   "file": "gverbs.zil",
   "line": 1250,
   "endLine": 1252,
   "source": "<ROUTINE PRE-SGIVE ()\n\t <PERFORM ,V?GIVE ,PRSI ,PRSO>\n\t <RTRUE>>"
  },
  "V-SGIVE": {
   "name": "V-SGIVE",
   "file": "gverbs.zil",
   "line": 1254,
   "endLine": 1255,
   "source": "<ROUTINE V-SGIVE ()\n\t <TELL \"Foo!\" CR>>"
  },
  "V-SHAKE": {
   "name": "V-SHAKE",
   "file": "gverbs.zil",
   "line": 1257,
   "endLine": 1284,
   "source": "<ROUTINE V-SHAKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"This seems to have no effect.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<TELL \"You can't take it; thus, you can't shake it!\" CR>)\n\t       (<FSET? ,PRSO ,CONTBIT>\n\t\t<COND (<FSET? ,PRSO ,OPENBIT>\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <SHAKE-LOOP>\n\t\t\t      <TELL \"The contents of the \" D, PRSO \" spill \">\n\t                      <COND (%<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t\t     '<FSET? ,HERE ,NONLANDBIT>)\n\t\t\t\t\t    (ELSE\n\t\t\t\t\t     '<NOT <FSET? ,HERE ,RLANDBIT>>)>\n\t\t                     <TELL \"out and disappears\">)\n\t                            (T\n\t\t                     <TELL \"to the ground\">)>\n\t                      <TELL \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"Shaken.\" CR>)>)\n\t\t      (T\n\t\t       <COND (<FIRST? ,PRSO>\n\t\t\t      <TELL\n\"It sounds like there is something inside the \" D ,PRSO \".\" CR>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D, PRSO \" sounds empty.\" CR>)>)>)\n\t       (T\n\t\t<TELL \"Shaken.\" CR>)>>"
  },
  "SHAKE-LOOP": {
   "name": "SHAKE-LOOP",
   "file": "gverbs.zil",
   "line": 1286,
   "endLine": 1311,
   "source": "<ROUTINE SHAKE-LOOP (\"AUX\" X)\n\t <REPEAT ()\n\t\t <COND (<SET X <FIRST? ,PRSO>>\n\t\t\t<FSET .X ,TOUCHBIT>\n\t\t\t<MOVE .X\n\t\t\t      %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t\t      '<COND (<EQUAL? ,HERE ,UP-A-TREE>\n\t\t\t\t              ,PATH)\n\t\t\t\t             (<NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (T\n\t\t\t\t              ,HERE)>)\n\t\t\t\t     (<==? ,ZORK-NUMBER 2>\n\t\t\t\t      '<COND (<EQUAL? .X ,WATER>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (<NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t\t              ,PSEUDO-OBJECT)\n\t\t\t\t             (T\n\t\t\t\t              ,HERE)>)\n\t\t\t\t     (T\n\t\t\t\t      '<COND (<EQUAL? ,HERE ,ON-LAKE>\n\t\t\t\t\t      ,IN-LAKE)\n\t\t\t\t\t     (T\n\t\t\t\t\t      ,HERE)>)>>)\n\t\t       (T\n\t\t\t<RETURN>)>>>"
  },
  "V-SKIP": {
   "name": "V-SKIP",
   "file": "gverbs.zil",
   "line": 1313,
   "endLine": 1314,
   "source": "<ROUTINE V-SKIP ()\n\t <TELL <PICK-ONE ,WHEEEEE> CR>>"
  },
  "V-SMELL": {
   "name": "V-SMELL",
   "file": "gverbs.zil",
   "line": 1322,
   "endLine": 1323,
   "source": "<ROUTINE V-SMELL ()\n\t <TELL \"It smells like a \" D ,PRSO \".\" CR>>"
  },
  "V-SPIN": {
   "name": "V-SPIN",
   "file": "gverbs.zil",
   "line": 1325,
   "endLine": 1326,
   "source": "<ROUTINE V-SPIN ()\n\t <TELL \"You can't spin that!\" CR>>"
  },
  "V-SPRAY": {
   "name": "V-SPRAY",
   "file": "gverbs.zil",
   "line": 1328,
   "endLine": 1329,
   "source": "<ROUTINE V-SPRAY ()\n\t <V-SQUEEZE>>"
  },
  "V-SQUEEZE": {
   "name": "V-SQUEEZE",
   "file": "gverbs.zil",
   "line": 1331,
   "endLine": 1336,
   "source": "<ROUTINE V-SQUEEZE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL \"The \" D ,PRSO \" does not understand this.\">)\n\t       (T\n\t\t<TELL \"How singularly useless.\">)>\n\t <CRLF>>"
  },
  "V-SSPRAY": {
   "name": "V-SSPRAY",
   "file": "gverbs.zil",
   "line": 1338,
   "endLine": 1339,
   "source": "<ROUTINE V-SSPRAY ()\n\t <PERFORM ,V?SPRAY ,PRSI ,PRSO>>"
  },
  "V-STAB": {
   "name": "V-STAB",
   "file": "gverbs.zil",
   "line": 1341,
   "endLine": 1347,
   "source": "<ROUTINE V-STAB (\"AUX\" W)\n\t <COND (<SET W <FIND-WEAPON ,WINNER>>\n\t\t<PERFORM ,V?ATTACK ,PRSO .W>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL\n\"No doubt you propose to stab the \" D ,PRSO \" with your pinky?\" CR>)>>"
  },
  "V-STAND": {
   "name": "V-STAND",
   "file": "gverbs.zil",
   "line": 1349,
   "endLine": 1354,
   "source": "<ROUTINE V-STAND ()\n\t <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t<PERFORM ,V?DISEMBARK <LOC ,WINNER>>\n\t\t<RTRUE>)\n\t       (T\n\t\t<TELL \"You are already standing, I think.\" CR>)>>"
  },
  "V-STAY": {
   "name": "V-STAY",
   "file": "gverbs.zil",
   "line": 1356,
   "endLine": 1357,
   "source": "<ROUTINE V-STAY ()\n\t <TELL \"You will be lost without me!\" CR>>"
  },
  "V-STRIKE": {
   "name": "V-STRIKE",
   "file": "gverbs.zil",
   "line": 1359,
   "endLine": 1366,
   "source": "<ROUTINE V-STRIKE ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<TELL\n\"Since you aren't versed in hand-to-hand combat, you'd better attack the \"\nD ,PRSO \" with a weapon.\" CR>)\n\t       (T\n\t\t<PERFORM ,V?LAMP-ON ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-SWIM": {
   "name": "V-SWIM",
   "file": "gverbs.zil",
   "line": 1368,
   "endLine": 1389,
   "source": "<ROUTINE V-SWIM ()\n\t <COND %<COND (<OR <==? ,ZORK-NUMBER 1>\n\t\t\t   <==? ,ZORK-NUMBER 2>>\n\t\t       '(<GLOBAL-IN? ,GLOBAL-WATER ,HERE>\n\t\t         <TELL \"Swimming isn't usually allowed in the \">\n\t\t         <COND (<NOT <EQUAL? ,PRSO ,WATER ,GLOBAL-WATER>>\n\t                        <TELL D ,PRSO \".\">)\n\t\t               (T\n\t\t                <TELL \"dungeon.\">)>\n\t\t         <CRLF>))\n\t\t      (T\n\t\t       '(<EQUAL? ,HERE ,ON-LAKE ,IN-LAKE>\n\t\t         <TELL \"What do you think you're doing?\" CR>))>\n\t       %<COND (<==? ,ZORK-NUMBER 3>\n\t\t       '(<EQUAL? ,HERE ,FLATHEAD-OCEAN>\n\t\t         <TELL\n\"Between the rocks and waves, you wouldn't last a minute!\" CR>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (T\n\t\t<TELL \"Go jump in a lake!\" CR>)>>"
  },
  "V-SWING": {
   "name": "V-SWING",
   "file": "gverbs.zil",
   "line": 1391,
   "endLine": 1395,
   "source": "<ROUTINE V-SWING ()\n\t <COND (<NOT ,PRSI>\n\t\t<TELL \"Whoosh!\" CR>)\n\t       (T\n\t\t<PERFORM ,V?ATTACK ,PRSI ,PRSO>)>>"
  },
  "PRE-TAKE": {
   "name": "PRE-TAKE",
   "file": "gverbs.zil",
   "line": 1397,
   "endLine": 1424,
   "source": "<ROUTINE PRE-TAKE ()\n\t <COND (<IN? ,PRSO ,WINNER>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are already wearing it.\" CR>)\n\t\t      (T\n\t\t       <TELL \"You already have that!\" CR>)>)\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL\n\"You can't reach something that's inside a closed container.\" CR>\n\t\t<RTRUE>)\n\t       (,PRSI\n\t\t<COND (<EQUAL? ,PRSI ,GROUND>\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>\n\t\t%<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t'<COND (<EQUAL? ,PRSO ,DOOR-KEEPER>\n\t\t\t\t<SETG PRSI <>>\n\t\t\t\t<RFALSE>)>)\n\t\t       (ELSE\n\t\t\t'<NULL-F>)>\n\t\t<COND (<NOT <EQUAL? ,PRSI <LOC ,PRSO>>>\n\t\t       <TELL \"The \" D ,PRSO \" isn't in the \" D ,PRSI \".\" CR>)\n\t\t      (T\n\t\t       <SETG PRSI <>>\n\t\t       <RFALSE>)>)\n\t       (<EQUAL? ,PRSO <LOC ,WINNER>>\n\t\t<TELL \"You're inside of it!\" CR>)>>"
  },
  "V-TAKE": {
   "name": "V-TAKE",
   "file": "gverbs.zil",
   "line": 1426,
   "endLine": 1431,
   "source": "<ROUTINE V-TAKE ()\n\t <COND (<EQUAL? <ITAKE> T>\n\t\t<COND (<FSET? ,PRSO ,WEARBIT>\n\t\t       <TELL \"You are now wearing the \" D ,PRSO \".\" CR>)\n\t\t      (T\n\t\t       <TELL \"Taken.\" CR>)>)>>"
  },
  "V-TELL": {
   "name": "V-TELL",
   "file": "gverbs.zil",
   "line": 1433,
   "endLine": 1446,
   "source": "<ROUTINE V-TELL ()\n\t <COND (<FSET? ,PRSO ,ACTORBIT>\n\t\t<COND (,P-CONT\n\t\t       <SETG WINNER ,PRSO>\n\t\t       <SETG HERE <LOC ,WINNER>>)\n\t\t      (T\n\t\t       <TELL \"The \" D ,PRSO\n\" pauses for a moment, perhaps thinking that you should reread\nthe manual.\" CR>)>)\n\t       (T\n\t\t<TELL \"You can't talk to the \" D ,PRSO \"!\" CR>\n\t\t<SETG QUOTE-FLAG <>>\n\t\t<SETG P-CONT <>>\n\t\t<RFATAL>)>>"
  },
  "V-THROUGH": {
   "name": "V-THROUGH",
   "file": "gverbs.zil",
   "line": 1448,
   "endLine": 1487,
   "source": "<ROUTINE V-THROUGH (\"OPTIONAL\" (OBJ <>) \"AUX\" M)\n\t#DECL ((OBJ) <OR OBJECT FALSE> (M) <PRIMTYPE VECTOR>)\n\t<COND (<AND <FSET? ,PRSO ,DOORBIT>\n\t\t    <SET M <OTHER-SIDE ,PRSO>>>\n\t       <DO-WALK .M>\n\t       <RTRUE>)\n\t      (<AND <NOT .OBJ> <FSET? ,PRSO ,VEHBIT>>\n\t       <PERFORM ,V?BOARD ,PRSO>\n\t       <RTRUE>)\n\t      (<OR .OBJ <NOT <FSET? ,PRSO ,TAKEBIT>>>\n\t       %<COND (<==? ,ZORK-NUMBER 2>\n\t\t       '<COND (<AND ,SCOL-ROOM\n\t\t\t\t   <OR .OBJ <EQUAL? ,PRSO ,CURTAIN>>>\n\t\t\t      <SCOL-GO .OBJ>\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <EQUAL? ,HERE ,DEPOSITORY>\n\t\t\t\t   <EQUAL? ,PRSO ,SNWL>\n\t\t\t\t   ,SCOL-ROOM>\n\t\t\t      <SCOL-GO .OBJ>\n\t\t\t      <RTRUE>)\n\t\t\t     (<AND <EQUAL? ,HERE ,SCOL-ACTIVE>\n\t\t\t\t   <EQUAL? ,PRSO \n\t\t\t\t\t   <GET <SET M <GET-WALL ,HERE>> 1>>>\n\t\t\t      <SETG SCOL-ROOM <GET .M 2>>\n\t\t\t      <SETG PRSO <GETP ,PRSO ,P?SIZE>>\n\t\t\t      <COND (.OBJ <SCOL-OBJ .OBJ 0 ,DEPOSITORY>)\n\t\t\t\t    (T\n\t\t\t\t     <SCOL-THROUGH 0 ,DEPOSITORY>)>\n\t\t\t      <RTRUE>)\n\t\t\t     (<EQUAL? ,PRSO ,CURTAIN>\n\t\t\t      <TELL\n\"You can't go more than part way through the curtain.\" CR>\n\t\t\t      <RTRUE>)>)\n\t\t      (ELSE '<NULL-F>)>\n\t       <TELL\n\"You hit your head against the \" D ,PRSO \" as you attempt this feat.\" CR>)\n\t      (<IN? ,PRSO ,WINNER>\n\t       <TELL \"That would involve quite a contortion!\" CR>)\n\t      (T\n\t       <TELL <PICK-ONE ,YUKS> CR>)>>"
  },
  "V-THROW": {
   "name": "V-THROW",
   "file": "gverbs.zil",
   "line": 1489,
   "endLine": 1504,
   "source": "<ROUTINE V-THROW ()\n\t <COND (<IDROP>\n\t\t<COND (<EQUAL? ,PRSI ,ME>\n\t\t       <TELL\n\"A terrific throw! The \" D ,PRSO>\n\t\t       <SETG WINNER ,PLAYER>\n\t\t       <JIGS-UP \" hits you squarely in the head. Normally,\nthis wouldn't do much damage, but by incredible mischance, you fall over\nbackwards trying to duck, and break your neck, justice being swift and\nmerciful in the Great Underground Empire.\">)\n\t\t      (<AND ,PRSI <FSET? ,PRSI ,ACTORBIT>>\n\t\t       <TELL\n\"The \" D ,PRSI \" ducks as the \" D ,PRSO \" flies by and crashes to the ground.\"\nCR>)\n\t\t      (T <TELL \"Thrown.\" CR>)>)\n\t       (ELSE <TELL \"Huh?\" CR>)>>"
  },
  "V-THROW-OFF": {
   "name": "V-THROW-OFF",
   "file": "gverbs.zil",
   "line": 1506,
   "endLine": 1507,
   "source": "<ROUTINE V-THROW-OFF ()\n\t <TELL \"You can't throw anything off of that!\" CR>>"
  },
  "V-TIE": {
   "name": "V-TIE",
   "file": "gverbs.zil",
   "line": 1509,
   "endLine": 1513,
   "source": "<ROUTINE V-TIE ()\n\t <COND (<EQUAL? ,PRSI ,WINNER>\n\t\t<TELL \"You can't tie anything to yourself.\" CR>)\n\t       (T\n\t\t<TELL \"You can't tie the \" D ,PRSO \" to that.\" CR>)>>"
  },
  "V-TIE-UP": {
   "name": "V-TIE-UP",
   "file": "gverbs.zil",
   "line": 1515,
   "endLine": 1516,
   "source": "<ROUTINE V-TIE-UP ()\n\t <TELL \"You could certainly never tie it with that!\" CR>>"
  },
  "V-TREASURE": {
   "name": "V-TREASURE",
   "file": "gverbs.zil",
   "line": 1518,
   "endLine": 1530,
   "source": "<ROUTINE V-TREASURE ()\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,NORTH-TEMPLE>\n\t\t         <GOTO ,TREASURE-ROOM>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? ,HERE ,TREASURE-ROOM>\n\t\t         <GOTO ,NORTH-TEMPLE>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (T\n\t\t<TELL \"Nothing happens.\" CR>)>>"
  },
  "PRE-TURN": {
   "name": "PRE-TURN",
   "file": "gverbs.zil",
   "line": 1532,
   "endLine": 1547,
   "source": "<ROUTINE PRE-TURN ()\n\t %<COND (<==? ,ZORK-NUMBER 3>\n\t\t '<COND (<AND <EQUAL? ,PRSI <> ,ROOMS>\n\t\t\t      <EQUAL? ,PRSO ,DIAL ,TM-DIAL ,T-BAR>>\n\t\t\t <TELL\n\"You should turn the \" D ,PRSO \" to something.\" CR>\n\t\t\t <RTRUE>)>)\n\t\t(ELSE T)>\n\t <COND (%<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t'<AND <EQUAL? ,PRSI <> ,ROOMS>\n\t\t\t      <NOT <EQUAL? ,PRSO ,BOOK>>>)\n\t\t       (ELSE\n\t\t\t'<EQUAL? ,PRSI <> ,ROOMS>)>\n\t\t<TELL \"Your bare hands don't appear to be enough.\" CR>)\n\t       (<NOT <FSET? ,PRSO ,TURNBIT>>\n\t\t<TELL \"You can't turn that!\" CR>)>>"
  },
  "V-TURN": {
   "name": "V-TURN",
   "file": "gverbs.zil",
   "line": 1549,
   "endLine": 1550,
   "source": "<ROUTINE V-TURN ()\n\t <TELL \"This has no effect.\" CR>>"
  },
  "V-UNLOCK": {
   "name": "V-UNLOCK",
   "file": "gverbs.zil",
   "line": 1552,
   "endLine": 1553,
   "source": "<ROUTINE V-UNLOCK ()\n\t <V-LOCK>>"
  },
  "V-UNTIE": {
   "name": "V-UNTIE",
   "file": "gverbs.zil",
   "line": 1555,
   "endLine": 1556,
   "source": "<ROUTINE V-UNTIE ()\n\t <TELL \"This cannot be tied, so it cannot be untied!\" CR>>"
  },
  "V-WAIT": {
   "name": "V-WAIT",
   "file": "gverbs.zil",
   "line": 1558,
   "endLine": 1563,
   "source": "<ROUTINE V-WAIT (\"OPTIONAL\" (NUM 3))\n\t <TELL \"Time passes...\" CR>\n\t <REPEAT ()\n\t\t <COND (<L? <SET NUM <- .NUM 1>> 0> <RETURN>)\n\t\t       (<CLOCKER> <RETURN>)>>\n\t <SETG CLOCK-WAIT T>>"
  },
  "V-WALK": {
   "name": "V-WALK",
   "file": "gverbs.zil",
   "line": 1565,
   "endLine": 1625,
   "source": "<ROUTINE V-WALK (\"AUX\" PT PTS STR OBJ RM)\n\t <COND (<NOT ,P-WALK-DIR>\n\t\t<PERFORM ,V?WALK-TO ,PRSO>\n\t\t<RTRUE>)\n\t       (<SET PT <GETPT ,HERE ,PRSO>>\n\t\t<COND (<EQUAL? <SET PTS <PTSIZE .PT>> ,UEXIT>\n\t\t       <GOTO <GETB .PT ,REXIT>>)\n\t\t      (<EQUAL? .PTS ,NEXIT>\n\t\t       <TELL <GET .PT ,NEXITSTR> CR>\n\t\t       <RFATAL>)\n\t\t      (<EQUAL? .PTS ,FEXIT>\n\t\t       <COND (<SET RM <APPLY <GET .PT ,FEXITFCN>>>\n\t\t\t      <GOTO .RM>)\n\t\t\t     %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t     '(<AND <EQUAL? ,HERE ,CP> ,CP-MOVED>\n\t\t                       <RTRUE>))\n\t\t\t\t    (T\n\t\t\t\t     '(<NULL-F> <RFALSE>))>\n\t\t\t     (T\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,CEXIT>\n\t\t       <COND (<VALUE <GETB .PT ,CEXITFLAG>>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,CEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"You can't go that way.\" CR>\n\t\t\t      <RFATAL>)>)\n\t\t      (<EQUAL? .PTS ,DEXIT>\n\t\t       <COND (<FSET? <SET OBJ <GETB .PT ,DEXITOBJ>> ,OPENBIT>\n\t\t\t      <GOTO <GETB .PT ,REXIT>>)\n\t\t\t     (<SET STR <GET .PT ,DEXITSTR>>\n\t\t\t      <TELL .STR CR>\n\t\t\t      <RFATAL>)\n\t\t\t     (T\n\t\t\t      <TELL \"The \" D .OBJ \" is closed.\" CR>\n\t\t\t      <THIS-IS-IT .OBJ>\n\t\t\t      <RFATAL>)>)>)\n\t       (<AND <NOT ,LIT>\n\t\t     <PROB 80>\n\t\t     <EQUAL? ,WINNER ,ADVENTURER>\n\t\t     <NOT <FSET? ,HERE ,NONLANDBIT>>>\n\t\t<COND (,SPRAYED?\n\t\t       <TELL\n\"There are odd noises in the darkness, and there is no exit in that\ndirection.\" CR>\n\t\t       <RFATAL>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t      '(<EQUAL? ,HERE ,DARK-1 ,DARK-2>\n\t\t                <JIGS-UP\n\"Oh, no! You have walked into a den of hungry grues and it's dinner time!\">))\n\t\t\t     (T\n\t\t\t      '(<NULL-F>\n\t\t\t\t<RFALSE>))>\n\t\t      (T\n\t\t       <JIGS-UP\n\"Oh, no! You have walked into the slavering fangs of a lurking grue!\">)>)\n\t       (T\n\t\t<TELL \"You can't go that way.\" CR>\n\t\t<RFATAL>)>>"
  },
  "V-WALK-AROUND": {
   "name": "V-WALK-AROUND",
   "file": "gverbs.zil",
   "line": 1627,
   "endLine": 1628,
   "source": "<ROUTINE V-WALK-AROUND ()\n\t <TELL \"Use compass directions for movement.\" CR>>"
  },
  "V-WALK-TO": {
   "name": "V-WALK-TO",
   "file": "gverbs.zil",
   "line": 1630,
   "endLine": 1636,
   "source": "<ROUTINE V-WALK-TO ()\n\t <COND (<AND ,PRSO\n\t\t     <OR <IN? ,PRSO ,HERE>\n\t\t\t <GLOBAL-IN? ,PRSO ,HERE>>>\n\t\t<TELL \"It's here!\" CR>)\n\t       (T\n\t\t<TELL \"You should supply a direction!\" CR>)>>"
  },
  "V-WAVE": {
   "name": "V-WAVE",
   "file": "gverbs.zil",
   "line": 1638,
   "endLine": 1639,
   "source": "<ROUTINE V-WAVE ()\n\t <HACK-HACK \"Waving the \">>"
  },
  "V-WEAR": {
   "name": "V-WEAR",
   "file": "gverbs.zil",
   "line": 1641,
   "endLine": 1646,
   "source": "<ROUTINE V-WEAR ()\n\t <COND (<NOT <FSET? ,PRSO ,WEARBIT>>\n\t\t<TELL \"You can't wear the \" D ,PRSO \".\" CR>)\n\t       (T\n\t\t<PERFORM ,V?TAKE ,PRSO>\n\t\t<RTRUE>)>>"
  },
  "V-WIN": {
   "name": "V-WIN",
   "file": "gverbs.zil",
   "line": 1648,
   "endLine": 1649,
   "source": "<ROUTINE V-WIN ()\n\t <TELL \"Naturally!\" CR>>"
  },
  "V-WIND": {
   "name": "V-WIND",
   "file": "gverbs.zil",
   "line": 1651,
   "endLine": 1652,
   "source": "<ROUTINE V-WIND ()\n\t <TELL \"You cannot wind up a \" D ,PRSO \".\" CR>>"
  },
  "V-WISH": {
   "name": "V-WISH",
   "file": "gverbs.zil",
   "line": 1654,
   "endLine": 1658,
   "source": "<ROUTINE V-WISH ()\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<PERFORM ,V?MAKE ,WISH>)\n\t\t(T\n\t\t '<TELL \"With luck, your wish will come true.\" CR>)>>"
  },
  "V-YELL": {
   "name": "V-YELL",
   "file": "gverbs.zil",
   "line": 1660,
   "endLine": 1660,
   "source": "<ROUTINE V-YELL () <TELL \"Aaaarrrrgggghhhh!\" CR>>"
  },
  "V-ZORK": {
   "name": "V-ZORK",
   "file": "gverbs.zil",
   "line": 1662,
   "endLine": 1662,
   "source": "<ROUTINE V-ZORK () <TELL \"At your service!\" CR>>"
  },
  "V-FIRST-LOOK": {
   "name": "V-FIRST-LOOK",
   "file": "gverbs.zil",
   "line": 1674,
   "endLine": 1677,
   "source": "<ROUTINE V-FIRST-LOOK ()\n\t <COND (<DESCRIBE-ROOM>\n\t\t<COND (<NOT ,SUPER-BRIEF>\n\t\t       <DESCRIBE-OBJECTS>)>)>>"
  },
  "DESCRIBE-ROOM": {
   "name": "DESCRIBE-ROOM",
   "file": "gverbs.zil",
   "line": 1679,
   "endLine": 1723,
   "source": "<ROUTINE DESCRIBE-ROOM (\"OPTIONAL\" (LOOK? <>) \"AUX\" V? STR AV)\n\t <SET V? <OR .LOOK? ,VERBOSE>>\n\t <COND (<NOT ,LIT>\n\t\t<TELL \"It is pitch black.\">\n\t\t<COND (<NOT ,SPRAYED?>\n\t\t       <TELL \" You are likely to be eaten by a grue.\">)>\n\t\t<CRLF>\n\t\t%<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t'<COND (<EQUAL? ,HERE ,DARK-2>\n\t\t                <TELL\n\"The ground continues to slope upwards away from the lake. You can barely\ndetect a dim light from the east.\" CR>)>)\n\t\t       (T\n\t\t\t'<NULL-F>)>\n\t\t<RFALSE>)>\n\t <COND (<NOT <FSET? ,HERE ,TOUCHBIT>>\n\t\t<FSET ,HERE ,TOUCHBIT>\n\t\t<SET V? T>)>\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<FSET? ,HERE ,MAZEBIT>\n\t\t         <FCLEAR ,HERE ,TOUCHBIT>)>)\n\t\t(T\n\t\t '<NULL-F>)>\n\t <COND (<IN? ,HERE ,ROOMS>\n\t\t;\"Was <TELL D ,HERE CR>\"\n\t\t<TELL D ,HERE>\n\t\t<COND (<FSET? <SET AV <LOC ,WINNER>> ,VEHBIT>\n\t\t       <TELL \", in the \" D .AV>)>\n\t\t<CRLF>)>\n\t <COND (%<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t'<OR .LOOK? <NOT ,SUPER-BRIEF> <EQUAL? ,HERE ,ZORK3>>)\n\t\t       (ELSE\n\t\t\t'<OR .LOOK? <NOT ,SUPER-BRIEF>>)>\n\t\t<SET AV <LOC ,WINNER>>\n\t\t;<COND (<FSET? .AV ,VEHBIT>\n\t\t       <TELL \"(You are in the \" D .AV \".)\" CR>)>\n\t\t<COND (<AND .V? <APPLY <GETP ,HERE ,P?ACTION> ,M-LOOK>>\n\t\t       <RTRUE>)\n\t\t      (<AND .V? <SET STR <GETP ,HERE ,P?LDESC>>>\n\t\t       <TELL .STR CR>)\n\t\t      (T\n\t\t       <APPLY <GETP ,HERE ,P?ACTION> ,M-FLASH>)>\n\t\t<COND (<AND <NOT <EQUAL? ,HERE .AV>> <FSET? .AV ,VEHBIT>>\n\t\t       <APPLY <GETP .AV ,P?ACTION> ,M-LOOK>)>)>\n\t T>"
  },
  "DESCRIBE-OBJECTS": {
   "name": "DESCRIBE-OBJECTS",
   "file": "gverbs.zil",
   "line": 1725,
   "endLine": 1730,
   "source": "<ROUTINE DESCRIBE-OBJECTS (\"OPTIONAL\" (V? <>))\n\t <COND (,LIT\n\t\t<COND (<FIRST? ,HERE>\n\t\t       <PRINT-CONT ,HERE <SET V? <OR .V? ,VERBOSE>> -1>)>)\n\t       (T\n\t\t<TELL \"Only bats can see in the dark. And you're not one.\" CR>)>>"
  },
  "DESCRIBE-OBJECT": {
   "name": "DESCRIBE-OBJECT",
   "file": "gverbs.zil",
   "line": 1737,
   "endLine": 1772,
   "source": "<ROUTINE DESCRIBE-OBJECT (OBJ V? LEVEL \"AUX\" (STR <>) AV)\n\t <SETG DESC-OBJECT .OBJ>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <APPLY <GETP .OBJ ,P?DESCFCN> ,M-OBJDESC>>\n\t\t<RTRUE>)\n\t       (<AND <0? .LEVEL>\n\t\t     <OR <AND <NOT <FSET? .OBJ ,TOUCHBIT>>\n\t\t\t      <SET STR <GETP .OBJ ,P?FDESC>>>\n\t\t\t <SET STR <GETP .OBJ ,P?LDESC>>>>\n\t\t<TELL .STR>)\n\t       (<0? .LEVEL>\n\t\t<TELL \"There is a \" D .OBJ \" here\">\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)>\n\t\t<TELL \".\">)\n\t       (T\n\t\t<TELL <GET ,INDENTS .LEVEL>>\n\t\t<TELL \"A \" D .OBJ>\n\t\t<COND (<FSET? .OBJ ,ONBIT>\n\t\t       <TELL \" (providing light)\">)\n\t\t      (<AND <FSET? .OBJ ,WEARBIT>\n\t\t\t    <IN? .OBJ ,WINNER>>\n\t\t       <TELL \" (being worn)\">)>)>\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<AND <EQUAL? .OBJ ,SPELL-VICTIM>\n\t\t              <EQUAL? ,SPELL-USED ,W?FLOAT>>\n\t\t         <TELL \" (floating in midair)\">)>)\n\t\t(T\n\t\t '<NULL-F>)>\n\t <COND (<AND <0? .LEVEL>\n\t\t     <SET AV <LOC ,WINNER>>\n\t\t     <FSET? .AV ,VEHBIT>>\n\t\t<TELL \" (outside the \" D .AV \")\">)>\n\t <CRLF>\n\t <COND (<AND <SEE-INSIDE? .OBJ> <FIRST? .OBJ>>\n\t\t<PRINT-CONT .OBJ .V? .LEVEL>)>>"
  },
  "PRINT-CONTENTS": {
   "name": "PRINT-CONTENTS",
   "file": "gverbs.zil",
   "line": 1774,
   "endLine": 1792,
   "source": "<ROUTINE PRINT-CONTENTS (OBJ \"AUX\" F N (1ST? T) (IT? <>) (TWO? <>))\n\t <COND (<SET F <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<SET N <NEXT? .F>>\n\t\t\t<COND (.1ST? <SET 1ST? <>>)\n\t\t\t      (ELSE\n\t\t\t       <TELL \", \">\n\t\t\t       <COND (<NOT .N> <TELL \"and \">)>)>\n\t\t\t<TELL \"a \" D .F>\n\t\t\t<COND (<AND <NOT .IT?> <NOT .TWO?>>\n\t\t\t       <SET IT? .F>)\n\t\t\t      (ELSE\n\t\t\t       <SET TWO? T>\n\t\t\t       <SET IT? <>>)>\n\t\t\t<SET F .N>\n\t\t\t<COND (<NOT .F>\n\t\t\t       <COND (<AND .IT? <NOT .TWO?>>\n\t\t\t\t      <THIS-IS-IT .IT?>)>\n\t\t\t       <RTRUE>)>>)>>"
  },
  "PRINT-CONT": {
   "name": "PRINT-CONT",
   "file": "gverbs.zil",
   "line": 1794,
   "endLine": 1860,
   "source": "<ROUTINE PRINT-CONT (OBJ \"OPTIONAL\" (V? <>) (LEVEL 0)\n\t\t     \"AUX\" Y 1ST? SHIT AV STR (PV? <>) (INV? <>))\n\t <COND (<NOT <SET Y <FIRST? .OBJ>>> <RTRUE>)>\n\t <COND (<AND <SET AV <LOC ,WINNER>> <FSET? .AV ,VEHBIT>>\n\t\tT)\n\t       (ELSE <SET AV <>>)>\n\t <SET 1ST? T>\n\t <SET SHIT T>\n\t <COND (<EQUAL? ,WINNER .OBJ <LOC .OBJ>>\n\t\t<SET INV? T>)\n\t       (ELSE\n\t\t<REPEAT ()\n\t\t\t<COND %<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t\t      '(<NOT .Y>\n\t\t\t\t\t<COND (<AND <0? .LEVEL>\n\t\t\t\t\t\t    <==? ,SPELL? ,S-FANTASIZE>\n\t\t\t\t\t\t    <PROB 20>>\n\t\t\t\t\t       <TELL \"There is a \"\n\t\t\t\t\t\t     <PICK-ONE ,FANTASIES>\n\t\t\t\t\t\t     \" here.\" CR>\n\t\t\t\t\t       <SET 1ST? <>>)>\n\t\t\t\t\t<RETURN>))\n\t\t\t\t     (ELSE\n\t\t\t\t      '(<NOT .Y>\n\t\t\t\t\t<RETURN>))>\n\t\t\t      (<EQUAL? .Y .AV> <SET PV? T>)\n\t\t\t      (<EQUAL? .Y ,WINNER>)\n\t\t\t      (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t\t    <NOT <FSET? .Y ,TOUCHBIT>>\n\t\t\t\t    <SET STR <GETP .Y ,P?FDESC>>>\n\t\t\t       <COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t\t      <TELL .STR CR>\n\t\t\t\t      <SET SHIT <>>\n\t\t\t\t      ;<SET 1ST? <>>)>\n\t\t\t       <COND (<AND <SEE-INSIDE? .Y>\n\t\t\t\t\t   <NOT <GETP <LOC .Y> ,P?DESCFCN>>\n\t\t\t\t\t   <FIRST? .Y>>\n\t\t\t\t      <COND (<PRINT-CONT .Y .V? 0>\n\t\t\t\t\t     <SET 1ST? <>>)>)>)>\n\t\t\t<SET Y <NEXT? .Y>>>)>\n\t <SET Y <FIRST? .OBJ>>\n\t <REPEAT ()\n\t\t <COND (<NOT .Y>\n\t\t\t<COND (<AND .PV? .AV <FIRST? .AV>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>> ;\"not in Zork III\"\n\t\t\t       <PRINT-CONT .AV .V? .LEVEL>)>\n\t\t\t<RETURN>)\n\t\t       (<EQUAL? .Y .AV ,ADVENTURER>)\n\t\t       (<AND <NOT <FSET? .Y ,INVISIBLE>>\n\t\t\t     <OR .INV?\n\t\t\t\t <FSET? .Y ,TOUCHBIT>\n\t\t\t\t <NOT <GETP .Y ,P?FDESC>>>>\n\t\t\t<COND (<NOT <FSET? .Y ,NDESCBIT>>\n\t\t\t       <COND (.1ST?\n\t\t\t\t      <COND (<FIRSTER .OBJ .LEVEL>\n\t\t\t\t\t     <COND (<L? .LEVEL 0>\n\t\t\t\t\t\t    <SET LEVEL 0>)>)>\n\t\t\t\t      <SET LEVEL <+ 1 .LEVEL>>\n\t\t\t\t      <SET 1ST? <>>)>\n\t\t\t       <COND (<L? .LEVEL 0> <SET LEVEL 0>)>\n\t\t\t       <DESCRIBE-OBJECT .Y .V? .LEVEL>)\n\t\t\t      (<AND <FIRST? .Y> <SEE-INSIDE? .Y>>\n\t\t\t       <SET LEVEL <+ .LEVEL 1>> ;\"not in Zork III\"\n\t\t\t       <PRINT-CONT .Y .V? .LEVEL>\n\t\t\t       <SET LEVEL <- .LEVEL 1>> ;\"not in Zork III\")>)>\n\t\t <SET Y <NEXT? .Y>>>\n\t <COND (<AND .1ST? .SHIT> <RFALSE>) (T <RTRUE>)>>"
  },
  "FIRSTER": {
   "name": "FIRSTER",
   "file": "gverbs.zil",
   "line": 1862,
   "endLine": 1879,
   "source": "<ROUTINE FIRSTER (OBJ LEVEL)\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(<EQUAL? .OBJ ,TROPHY-CASE>\n\t\t         <TELL\n\"Your collection of treasures consists of:\" CR>))\n\t\t      (T\n\t\t       '(<NULL-F> <RTRUE>))>\n\t       (<EQUAL? .OBJ ,WINNER>\n\t\t<TELL \"You are carrying:\" CR>)\n\t       (<NOT <IN? .OBJ ,ROOMS>>\n\t\t<COND (<G? .LEVEL 0>\n\t\t       <TELL <GET ,INDENTS .LEVEL>>)>\n\t\t<COND (<FSET? .OBJ ,SURFACEBIT>\n\t\t       <TELL \"Sitting on the \" D .OBJ \" is: \" CR>)\n\t\t      (<FSET? .OBJ ,ACTORBIT>\n\t\t       <TELL \"The \" D .OBJ \" is holding: \" CR>)\n\t\t      (T\n\t\t       <TELL \"The \" D .OBJ \" contains:\" CR>)>)>>"
  },
  "SEE-INSIDE?": {
   "name": "SEE-INSIDE?",
   "file": "gverbs.zil",
   "line": 1881,
   "endLine": 1883,
   "source": "<ROUTINE SEE-INSIDE? (OBJ)\n\t <AND <NOT <FSET? .OBJ ,INVISIBLE>>\n\t      <OR <FSET? .OBJ ,TRANSBIT> <FSET? .OBJ ,OPENBIT>>>>"
  },
  "SCORE-UPD": {
   "name": "SCORE-UPD",
   "file": "gverbs.zil",
   "line": 1895,
   "endLine": 1909,
   "source": "<ROUTINE SCORE-UPD (NUM)\n\t <SETG BASE-SCORE <+ ,BASE-SCORE .NUM>>\n\t <SETG SCORE <+ ,SCORE .NUM>>\n\t %<COND (<==? ,ZORK-NUMBER 1>\n\t\t '<COND (<AND <EQUAL? ,SCORE 350>\n\t\t              <NOT ,WON-FLAG>>\n\t\t         <SETG WON-FLAG T>\n\t\t         <FCLEAR ,MAP ,INVISIBLE>\n\t\t         <FCLEAR ,WEST-OF-HOUSE ,TOUCHBIT>\n\t\t         <TELL\n\"An almost inaudible voice whispers in your ear, \\\"Look to your treasures\nfor the final secret.\\\"\" CR>)>)\n\t\t(T\n\t\t '<NULL-F>)>\n\t T>"
  },
  "SCORE-OBJ": {
   "name": "SCORE-OBJ",
   "file": "gverbs.zil",
   "line": 1911,
   "endLine": 1914,
   "source": "<ROUTINE SCORE-OBJ (OBJ \"AUX\" TEMP)\n\t <COND (<G? <SET TEMP <GETP .OBJ ,P?VALUE>> 0>\n\t\t<SCORE-UPD .TEMP>\n\t\t<PUTP .OBJ ,P?VALUE 0>)>>"
  },
  "YES?": {
   "name": "YES?",
   "file": "gverbs.zil",
   "line": 1916,
   "endLine": 1922,
   "source": "<ROUTINE YES? ()\n\t <PRINTI \">\">\n\t <READ ,P-INBUF ,P-LEXV>\n\t <COND (<EQUAL? <GET ,P-LEXV 1> ,W?YES ,W?Y>\n\t\t<RTRUE>)\n\t       (T\n\t\t<RFALSE>)>>"
  },
  "ITAKE": {
   "name": "ITAKE",
   "file": "gverbs.zil",
   "line": 1944,
   "endLine": 2008,
   "source": "<ROUTINE ITAKE (\"OPTIONAL\" (VB T) \"AUX\" CNT OBJ)\n\t #DECL ((VB) <OR ATOM FALSE> (CNT) FIX (OBJ) OBJECT)\n\t <COND %<COND (<==? ,ZORK-NUMBER 1>\n\t\t       '(,DEAD\n\t\t         <COND (.VB\n\t\t\t\t<TELL\n\"Your hand passes through its object.\" CR>)>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (<NOT <FSET? ,PRSO ,TAKEBIT>>\n\t\t<COND (.VB\n\t\t       <TELL <PICK-ONE ,YUKS> CR>)>\n\t\t<RFALSE>)\n\t       %<COND (<==? ,ZORK-NUMBER 2>\n\t\t       '(<AND <EQUAL? ,PRSO ,SPELL-VICTIM>\n\t\t              <EQUAL? ,SPELL-USED ,W?FLOAT ,W?FREEZE>>\n\t\t         <COND (<EQUAL? ,SPELL-USED ,W?FLOAT>\n\t\t                <TELL\n\"You can't reach that. It's floating above your head.\" CR>)\n\t\t               (T\n\t\t                <TELL \"It seems rooted to the spot.\" CR>)>\n\t\t         <RFALSE>))\n\t\t      (T\n\t\t       '(<NULL-F>\n\t\t\t <RFALSE>))>\n\t       (<AND <FSET? <LOC ,PRSO> ,CONTBIT>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t;\"Kludge for parser calling itake\"\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? <LOC ,PRSO> ,WINNER>>\n\t\t     <G? <+ <WEIGHT ,PRSO> <WEIGHT ,WINNER>> ,LOAD-ALLOWED>>\n\t\t<COND (.VB\n\t\t       <TELL \"Your load is too heavy\">\n\t\t       <COND (<L? ,LOAD-ALLOWED ,LOAD-MAX>\n\t\t\t      <TELL\", especially in light of your condition.\">)\n\t\t\t     (T\n\t\t\t      <TELL \".\">)>\n\t\t       <CRLF>)>\n\t\t<RFATAL>)\n\t       (<AND <VERB? TAKE>\n\t\t     <G? <SET CNT <CCOUNT ,WINNER>> ,FUMBLE-NUMBER>\n\t\t     <PROB <* .CNT ,FUMBLE-PROB>>>\n\t\t<TELL\n\"You're holding too many things already!\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO ,WINNER>\n\t\t<FCLEAR ,PRSO ,NDESCBIT>\n\t\t<FSET ,PRSO ,TOUCHBIT>\n\t\t%<COND (<==? ,ZORK-NUMBER 2>\n\t\t\t'<COND (<EQUAL? ,SPELL? ,S-FILCH>\n\t\t                <COND (<RIPOFF ,PRSO ,WIZARD-CASE>\n\t\t\t               <TELL\n\"When you touch the \" D ,PRSO \" it immediately disappears!\" CR>\n\t\t\t               <RFALSE>)>)>)\n\t\t       (T\n\t\t\t'<NULL-F>)>\n\t\t%<COND (<OR <==? ,ZORK-NUMBER 1>\n\t\t\t    <==? ,ZORK-NUMBER 2>>\n\t\t\t'<SCORE-OBJ ,PRSO>)\n\t\t       (T\n\t\t\t'<NULL-F>)>\n\t\t<RTRUE>)>>"
  },
  "IDROP": {
   "name": "IDROP",
   "file": "gverbs.zil",
   "line": 2010,
   "endLine": 2021,
   "source": "<ROUTINE IDROP ()\n\t <COND (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <IN? <LOC ,PRSO> ,WINNER>>>\n\t\t<TELL \"You're not carrying the \" D ,PRSO \".\" CR>\n\t\t<RFALSE>)\n\t       (<AND <NOT <IN? ,PRSO ,WINNER>>\n\t\t     <NOT <FSET? <LOC ,PRSO> ,OPENBIT>>>\n\t\t<TELL \"The \" D ,PRSO \" is closed.\" CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<MOVE ,PRSO <LOC ,WINNER>>\n\t\t<RTRUE>)>>"
  },
  "CCOUNT": {
   "name": "CCOUNT",
   "file": "gverbs.zil",
   "line": 2023,
   "endLine": 2030,
   "source": "<ROUTINE CCOUNT (OBJ \"AUX\" (CNT 0) X)\n\t <COND (<SET X <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<NOT <FSET? .X ,WEARBIT>>\n\t\t\t       <SET CNT <+ .CNT 1>>)>\n\t\t\t<COND (<NOT <SET X <NEXT? .X>>>\n\t\t\t       <RETURN>)>>)>\n\t .CNT>"
  },
  "WEIGHT": {
   "name": "WEIGHT",
   "file": "gverbs.zil",
   "line": 2032,
   "endLine": 2041,
   "source": "<ROUTINE WEIGHT (OBJ \"AUX\" CONT (WT 0))\n\t <COND (<SET CONT <FIRST? .OBJ>>\n\t\t<REPEAT ()\n\t\t\t<COND (<AND <EQUAL? .OBJ ,PLAYER>\n\t\t\t\t    <FSET? .CONT ,WEARBIT>>\n\t\t\t       <SET WT <+ .WT 1>>)\n\t\t\t      (T\n\t\t\t       <SET WT <+ .WT <WEIGHT .CONT>>>)>\n\t\t\t<COND (<NOT <SET CONT <NEXT? .CONT>>> <RETURN>)>>)>\n\t <+ .WT <GETP .OBJ ,P?SIZE>>>"
  },
  "HACK-HACK": {
   "name": "HACK-HACK",
   "file": "gverbs.zil",
   "line": 2068,
   "endLine": 2073,
   "source": "<ROUTINE HACK-HACK (STR)\n\t <COND (<AND <IN? ,PRSO ,GLOBAL-OBJECTS>\n\t\t     <VERB? WAVE RAISE LOWER>>\n\t\t<TELL \"The \" D ,PRSO \" isn't here!\" CR>)\n\t       (T\n\t\t<TELL .STR D ,PRSO <PICK-ONE ,HO-HUM> CR>)>>"
  },
  "NO-GO-TELL": {
   "name": "NO-GO-TELL",
   "file": "gverbs.zil",
   "line": 2082,
   "endLine": 2087,
   "source": "<ROUTINE NO-GO-TELL (AV WLOC)\n\t <COND (.AV\n\t\t<TELL \"You can't go there in a \" D .WLOC \".\">)\n\t       (T\n\t\t<TELL \"You can't go there without a vehicle.\">)>\n\t <CRLF>>"
  },
  "GOTO": {
   "name": "GOTO",
   "file": "gverbs.zil",
   "line": 2089,
   "endLine": 2181,
   "source": "<ROUTINE GOTO (RM \"OPTIONAL\" (V? T)\n\t       \"AUX\" (LB <FSET? .RM ,RLANDBIT>) (WLOC <LOC ,WINNER>)\n\t             (AV <>) OLIT OHERE)\n\t <SET OLIT ,LIT>\n\t <SET OHERE ,HERE>\n\t <COND (<FSET? .WLOC ,VEHBIT>\n\t\t<SET AV <GETP .WLOC ,P?VTYPE>>)>\n\t <COND (<AND <NOT .LB>\n\t\t     <NOT .AV>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<AND <NOT .LB>\n\t\t     <NOT <FSET? .RM .AV>>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<AND <FSET? ,HERE ,RLANDBIT>\n\t\t     .LB\n\t\t     .AV\n\t\t     <NOT <EQUAL? .AV ,RLANDBIT>>\n\t\t     <NOT <FSET? .RM .AV>>>\n\t\t<NO-GO-TELL .AV .WLOC>\n\t\t<RFALSE>)\n\t       (<FSET? .RM ,RMUNGBIT>\n\t\t<TELL <GETP .RM ,P?LDESC> CR>\n\t\t<RFALSE>)\n\t       (T\n\t\t<COND (<AND .LB\n\t\t\t    <NOT <FSET? ,HERE ,RLANDBIT>>\n\t\t\t    <NOT ,DEAD>\n\t\t\t    <FSET? .WLOC ,VEHBIT>>\n\t\t       %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t       '<TELL\n\"The \" D .WLOC \" comes to a rest on the shore.\" CR CR>)\n\t\t\t      (<==? ,ZORK-NUMBER 2>\n\t\t\t       '<COND (<EQUAL? .WLOC ,BALLOON>\n\t\t\t\t       <TELL\n\"The balloon lands.\" CR>)\n\t\t\t\t      (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t       <TELL\n\"The \" D .WLOC \" comes to a stop.\" CR CR>)>)\n\t\t\t      (<==? ,ZORK-NUMBER 3>\n\t\t\t       '<COND (<FSET? .WLOC ,VEHBIT>\n\t\t\t\t       <TELL\n\"The \" D .WLOC \" comes to a stop.\" CR CR>)>)>)>\n\t\t<COND (.AV\n\t\t       <MOVE .WLOC .RM>)\n\t\t      (T\n\t\t       <MOVE ,WINNER .RM>)>\n\t\t<SETG HERE .RM>\n\t\t<SETG LIT <LIT? ,HERE>>\n\t\t<COND (<AND <NOT .OLIT>\n\t\t\t    <NOT ,LIT>\n\t\t\t    <PROB 80>>\n\t\t       <COND (,SPRAYED?\n\t\t\t      <TELL\n\"There are sinister gurgling noises in the darkness all around you!\" CR>)\n\t\t\t     %<COND (<==? ,ZORK-NUMBER 3>\n\t\t\t\t     '(<EQUAL? ,HERE ,DARK-1 ,DARK-2>\n\t\t                       <JIGS-UP\n\"Oh, no! Dozen of lurking grues attack and devour you! You must have\nstumbled into an authentic grue lair!\">))\n\t\t\t\t    (T\n\t\t\t\t     '(<NULL-F>\n\t\t\t\t       <RFALSE>))>\n\t\t\t     (T\n\t\t\t      <TELL\n\"Oh, no! A lurking grue slithered into the \">\n\t\t\t      <COND (<FSET? <LOC ,WINNER> ,VEHBIT>\n\t\t\t\t     <TELL D <LOC ,WINNER>>)\n\t\t\t\t    (T <TELL \"room\">)>\n\t\t\t      <JIGS-UP \" and devoured you!\">\n\t\t\t      <RTRUE>)>)>\n\t\t<COND (<AND <NOT ,LIT>\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t       <TELL \"You have moved into a dark place.\" CR>\n\t\t       <SETG P-CONT <>>)>\n\t\t<APPLY <GETP ,HERE ,P?ACTION> ,M-ENTER>\n\t\t<SCORE-OBJ .RM>\n\t\t<COND (<NOT <EQUAL? ,HERE .RM>> <RTRUE>)\n\t\t      (<AND <NOT <EQUAL? ,ADVENTURER ,WINNER>>\n\t\t\t    <IN? ,ADVENTURER .OHERE>>\n\t\t       <TELL \"The \" D ,WINNER \" leaves the room.\" CR>)\n\t\t      %<COND (<==? ,ZORK-NUMBER 1>\n\t\t\t      '(<AND <EQUAL? ,HERE .OHERE>\n\t\t\t\t      ;\"no double description\"\n\t\t\t\t     <EQUAL? ,HERE ,ENTRANCE-TO-HADES>>\n\t\t\t\t<RTRUE>))\n\t\t\t     (ELSE\n\t\t\t      '(<NULL-F> <RTRUE>))>\n\t\t      (<AND .V?\n\t\t\t    <EQUAL? ,WINNER ,ADVENTURER>>\n\t\t       <V-FIRST-LOOK>)>\n\t\t<RTRUE>)>>"
  },
  "LKP": {
   "name": "LKP",
   "file": "gverbs.zil",
   "line": 2183,
   "endLine": 2190,
   "source": "<ROUTINE LKP (ITM TBL \"AUX\" (CNT 0) (LEN <GET .TBL 0>))\n\t <REPEAT ()\n\t\t <COND (<G? <SET CNT <+ .CNT 1>> .LEN>\n\t\t\t<RFALSE>)\n\t\t       (<EQUAL? <GET .TBL .CNT> .ITM>\n\t\t\t<COND (<EQUAL? .CNT .LEN> <RFALSE>)\n\t\t\t      (T\n\t\t\t       <RETURN <GET .TBL <+ .CNT 1>>>)>)>>>"
  },
  "DO-WALK": {
   "name": "DO-WALK",
   "file": "gverbs.zil",
   "line": 2192,
   "endLine": 2194,
   "source": "<ROUTINE DO-WALK (DIR)\n\t <SETG P-WALK-DIR .DIR>\n\t <PERFORM ,V?WALK .DIR>>"
  },
  "GLOBAL-IN?": {
   "name": "GLOBAL-IN?",
   "file": "gverbs.zil",
   "line": 2201,
   "endLine": 2203,
   "source": "<ROUTINE GLOBAL-IN? (OBJ1 OBJ2 \"AUX\" TX)\n\t <COND (<SET TX <GETPT .OBJ2 ,P?GLOBAL>>\n\t\t<ZMEMQB .OBJ1 .TX <- <PTSIZE .TX> 1>>)>> "
  },
  "FIND-IN": {
   "name": "FIND-IN",
   "file": "gverbs.zil",
   "line": 2205,
   "endLine": 2214,
   "source": "<ROUTINE FIND-IN (WHERE WHAT \"AUX\" W)\n\t <SET W <FIRST? .WHERE>>\n\t <COND (<NOT .W>\n\t\t<RFALSE>)>\n\t <REPEAT ()\n\t\t <COND (<AND <FSET? .W .WHAT>\n\t\t\t     <NOT <EQUAL? .W ,ADVENTURER>>>\n\t\t\t<RETURN .W>)\n\t\t       (<NOT <SET W <NEXT? .W>>>\n\t\t\t<RETURN <>>)>>>"
  },
  "HELD?": {
   "name": "HELD?",
   "file": "gverbs.zil",
   "line": 2221,
   "endLine": 2225,
   "source": "<ROUTINE HELD? (CAN)\n\t <REPEAT ()\n\t\t <SET CAN <LOC .CAN>>\n\t\t <COND (<NOT .CAN> <RFALSE>)\n\t\t       (<EQUAL? .CAN ,WINNER> <RTRUE>)>>>"
  },
  "OTHER-SIDE": {
   "name": "OTHER-SIDE",
   "file": "gverbs.zil",
   "line": 2227,
   "endLine": 2235,
   "source": "<ROUTINE OTHER-SIDE (DOBJ \"AUX\" (P 0) TX) ;\"finds room beyond given door\"\n\t <REPEAT ()\n\t\t <COND (<L? <SET P <NEXTP ,HERE .P>> ,LOW-DIRECTION>\n\t\t\t<RETURN <>>)\n\t\t       (ELSE\n\t\t\t<SET TX <GETPT ,HERE .P>>\n\t\t\t<COND (<AND <EQUAL? <PTSIZE .TX> ,DEXIT>\n\t\t\t\t    <EQUAL? <GETB .TX ,DEXITOBJ> .DOBJ>>\n\t\t\t       <RETURN .P>)>)>>>"
  },
  "MUNG-ROOM": {
   "name": "MUNG-ROOM",
   "file": "gverbs.zil",
   "line": 2237,
   "endLine": 2243,
   "source": "<ROUTINE MUNG-ROOM (RM STR)\n\t %<COND (<==? ,ZORK-NUMBER 2>\n\t\t '<COND (<EQUAL? .RM ,INSIDE-BARROW>\n\t\t\t <RFALSE>)>)\n\t\t(ELSE T)>\n\t <FSET .RM ,RMUNGBIT>\n\t <PUTP .RM ,P?LDESC .STR>>"
  },
  "THIS-IS-IT": {
   "name": "THIS-IS-IT",
   "file": "gverbs.zil",
   "line": 2245,
   "endLine": 2246,
   "source": "<ROUTINE THIS-IS-IT (OBJ)\n\t <SETG P-IT-OBJECT .OBJ>>"
  }
 },
 "globals": {
  "SWORD-GLOW": {
   "name": "SWORD-GLOW",
   "kind": "global",
   "file": "2actions.zil",
   "line": 13,
   "value": "0"
  },
  "EIGHT-DIRECTIONS": {
   "name": "EIGHT-DIRECTIONS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 88,
   "value": "<TABLE P?NORTH P?EAST P?SOUTH P?NE P?SE P?SW P?NW>"
  },
  "MUNGED-ROOM": {
   "name": "MUNGED-ROOM",
   "kind": "global",
   "file": "2actions.zil",
   "line": 91,
   "value": "<>"
  },
  "BTIE-FLAG": {
   "name": "BTIE-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 112,
   "value": "<>"
  },
  "BINF-FLAG": {
   "name": "BINF-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 113,
   "value": "<>"
  },
  "BLAB-FLAG": {
   "name": "BLAB-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 114,
   "value": "<>"
  },
  "SAFE-FLAG": {
   "name": "SAFE-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 115,
   "value": "<>"
  },
  "BALLOON-UPS": {
   "name": "BALLOON-UPS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 253,
   "value": "<LTABLE VAIR-1 VAIR-2 VAIR-3 VAIR-4>"
  },
  "BALLOON-FLOATS": {
   "name": "BALLOON-FLOATS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 256,
   "value": "<LTABLE LEDGE-1 VAIR-2 LEDGE-2 VAIR-4>"
  },
  "BALLOON-DOWNS": {
   "name": "BALLOON-DOWNS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 259,
   "value": "<LTABLE VAIR-4 VAIR-3 VAIR-2 VAIR-1>"
  },
  "OTHER-PROPERTIES": {
   "name": "OTHER-PROPERTIES",
   "kind": "global",
   "file": "2actions.zil",
   "line": 412,
   "value": "\"Now you've done it. It seems that the brick has other properties\nthan weight, namely the ability to blow you to smithereens.\""
  },
  "GNOME-FLAG": {
   "name": "GNOME-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 532,
   "value": "<>"
  },
  "CRYPT-LIT?": {
   "name": "CRYPT-LIT?",
   "kind": "global",
   "file": "2actions.zil",
   "line": 653,
   "value": "T"
  },
  "DIM-DOOR-FLAG": {
   "name": "DIM-DOOR-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 677,
   "value": "<>"
  },
  "SPRAY-USED?": {
   "name": "SPRAY-USED?",
   "kind": "global",
   "file": "2actions.zil",
   "line": 709,
   "value": "<>"
  },
  "BUCKET-TOP-FLAG": {
   "name": "BUCKET-TOP-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 750,
   "value": "<>"
  },
  "EVAPORATED": {
   "name": "EVAPORATED",
   "kind": "global",
   "file": "2actions.zil",
   "line": 752,
   "value": "<>"
  },
  "FATAL-VAPORS": {
   "name": "FATAL-VAPORS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1094,
   "value": "\"As you pass out, you realize that the vapors from the\nflask's contents are fatal.\""
  },
  "COMPASS-KLUDGE": {
   "name": "COMPASS-KLUDGE",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1137,
   "value": "<>"
  },
  "CAROUSEL-ZOOM-FLAG": {
   "name": "CAROUSEL-ZOOM-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1155,
   "value": "<>"
  },
  "CAROUSEL-FLIP-FLAG": {
   "name": "CAROUSEL-FLIP-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1157,
   "value": "<>"
  },
  "CAGE-SOLVE-FLAG": {
   "name": "CAGE-SOLVE-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1190,
   "value": "<>"
  },
  "BANK-SOLVE-FLAG": {
   "name": "BANK-SOLVE-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1312,
   "value": "<>"
  },
  "SCOL-ROOMS": {
   "name": "SCOL-ROOMS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1333,
   "value": "<LTABLE P?EAST VIEWING-EAST P?WEST VIEWING-WEST P?NORTH SMALL-ROOM P?SOUTH VAULT>"
  },
  "SCOL-WALLS": {
   "name": "SCOL-WALLS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1343,
   "value": "<TABLE VIEWING-WEST SEWL VIEWING-WEST VIEWING-EAST SWWL VIEWING-EAST SMALL-ROOM SSWL VAULT VAULT SNWL SMALL-ROOM>"
  },
  "SCOL-ROOM": {
   "name": "SCOL-ROOM",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1357,
   "value": "VIEWING-WEST"
  },
  "SCOL-ACTIVE": {
   "name": "SCOL-ACTIVE",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1425,
   "value": "<>"
  },
  "ZGNOME-FLAG": {
   "name": "ZGNOME-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1443,
   "value": "<>"
  },
  "MUD-FLAG": {
   "name": "MUD-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1661,
   "value": "<>"
  },
  "MATOBJ": {
   "name": "MATOBJ",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1663,
   "value": "<>"
  },
  "PUNLOCK-FLAG": {
   "name": "PUNLOCK-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1665,
   "value": "<>"
  },
  "PLOOK-FLAG": {
   "name": "PLOOK-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1667,
   "value": "<>"
  },
  "MATCH-COUNT": {
   "name": "MATCH-COUNT",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1895,
   "value": "6"
  },
  "LAMP-TABLE": {
   "name": "LAMP-TABLE",
   "kind": "global",
   "file": "2actions.zil",
   "line": 1934,
   "value": "<TABLE 300 \"The lamp appears a bit dimmer.\" 100 \"The lamp is definitely dimmer now.\" 50 \"The lamp is nearly out.\" 0>"
  },
  "DUMMY": {
   "name": "DUMMY",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2267,
   "value": "<LTABLE 0 \"Look around.\" \"Too late for that.\" \"Have your eyes checked.\">"
  },
  "DIAMOND-SOLVE": {
   "name": "DIAMOND-SOLVE",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2174,
   "value": "<>"
  },
  "DIAMOND-COUNT": {
   "name": "DIAMOND-COUNT",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2176,
   "value": "0"
  },
  "DIAMOND-MOVES": {
   "name": "DIAMOND-MOVES",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2177,
   "value": "0"
  },
  "DIAMOND-BASE": {
   "name": "DIAMOND-BASE",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2178,
   "value": "0"
  },
  "DWDESCS": {
   "name": "DWDESCS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2180,
   "value": "<TABLE \"dark\" \"flickering dimly\" \"dimly glowing\" \"glowing\" \"glowing brightly\">"
  },
  "BASES": {
   "name": "BASES",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2284,
   "value": "<TABLE \"first\" \"first\" \"first\" \"second\" \"third\" \"home\">"
  },
  "DIAMOND-ROOMS": {
   "name": "DIAMOND-ROOMS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2286,
   "value": "<TABLE DIAMOND-2 DIAMOND-4 DIAMOND-6 DIAMOND-8 DIAMOND-1 DIAMOND-3 DIAMOND-5 DIAMOND-7 DIAMOND-9>"
  },
  "DIDIRS": {
   "name": "DIDIRS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2290,
   "value": "<TABLE P?SE P?NE P?NW P?SW>"
  },
  "CERBERUS-LEASHED": {
   "name": "CERBERUS-LEASHED",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2296,
   "value": "<>"
  },
  "ICE-MELTED": {
   "name": "ICE-MELTED",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2370,
   "value": "<>"
  },
  "DRAGON-ANGER": {
   "name": "DRAGON-ANGER",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2434,
   "value": "0"
  },
  "DRAGON-ATTACKS": {
   "name": "DRAGON-ATTACKS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2436,
   "value": "<LTABLE \"Dragon hide is tough as steel, but you have succeeded in annoying him\na bit. He looks at you as if deciding whether or not to eat you.\" \"That captured his interest. He stares at you balefully.\" \"The dragon is surprised and interested (for the moment).\" \"You've made him rather angry. You had better be very careful now.\" \"That did no damage, but he turns his smoky yellow eyes in your direction\nand sighs.\">"
  },
  "OLD-HERE": {
   "name": "OLD-HERE",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2469,
   "value": "DRAGON-ROOM"
  },
  "TOPIARY-MOVED": {
   "name": "TOPIARY-MOVED",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2610,
   "value": "<>"
  },
  "TOPIARY-NEAR": {
   "name": "TOPIARY-NEAR",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2611,
   "value": "<>"
  },
  "UNICORN-MSGS": {
   "name": "UNICORN-MSGS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2613,
   "value": "<LTABLE \"There is a large, white animal partly hidden behind some trees.\" \"You catch a glimpse of something white between two hedges.\" \"A unicorn is cropping grass on the other side of the room.\nA gold key hangs from a ribbon around its neck.\" \"There is a beautiful unicorn eating roses here. Around his\nneck is a red satin ribbon on which is strung a tiny key.\">"
  },
  "UNICORN-FRIGHTENED": {
   "name": "UNICORN-FRIGHTENED",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2661,
   "value": "<>"
  },
  "PRINCESS-AWAKE": {
   "name": "PRINCESS-AWAKE",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2697,
   "value": "<>"
  },
  "PRCOUNT": {
   "name": "PRCOUNT",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2755,
   "value": "0"
  },
  "PRFOLLOW": {
   "name": "PRFOLLOW",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2757,
   "value": "<>"
  },
  "PRDIRS": {
   "name": "PRDIRS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2759,
   "value": "<TABLE \"south\" DRAGON-ROOM \"north\" P?SOUTH \"east\" LEDGE-TUNNEL \"west\" P?EAST \"east\" RAVINE-LEDGE \"west\" P?EAST \"down\" DEEP-FORD \"up\" P?DOWN \"south\" MARBLE-HALL \"north\" P?SOUTH \"east\" STREAM-PATH \"west\" P?EAST \"east\" FORMAL-GARDEN \"west\" P?EAST \"north\" GARDEN-NORTH \"south\" P?NORTH \"in\" GAZEBO-ROOM \"out\" P?IN>"
  },
  "MENHIR-POSITION": {
   "name": "MENHIR-POSITION",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2889,
   "value": "<>"
  },
  "GUARDIAN-FED": {
   "name": "GUARDIAN-FED",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2922,
   "value": "<>"
  },
  "WIZ-DOOR-FLAG": {
   "name": "WIZ-DOOR-FLAG",
   "kind": "global",
   "file": "2actions.zil",
   "line": 2964,
   "value": "<>"
  },
  "GENIE-READY?": {
   "name": "GENIE-READY?",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3350,
   "value": "<>"
  },
  "GENIE-HOARD": {
   "name": "GENIE-HOARD",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3351,
   "value": "0"
  },
  "TREASURES-MAX": {
   "name": "TREASURES-MAX",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3352,
   "value": "10"
  },
  "GENIE-THANKS": {
   "name": "GENIE-THANKS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3355,
   "value": "<LTABLE \"Most fine, master! But 'tis not enough. I will do a great service,\nand are not great services bought at great price?\" \"Very nice, but not enough!\" \"Ah, truly magnificent! Keep them coming.\" \"Almost halfway there, oh worthy one!\" \"Oh, such beauty! Your generosity almost overwhelms me!\" \"Truly I shall do thee a wonderful service when thou hast finished!\" \"Truly you are most generous! But still, this is yet not enough.\" \"A fine gift, mighty one, you have almost reached my fee.\" \"Wondrous fine, master! But one treasure is yet to be given!\">"
  },
  "SPELL?": {
   "name": "SPELL?",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3654,
   "value": "<>"
  },
  "SPELLS": {
   "name": "SPELLS",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3656,
   "value": "12"
  },
  "S-FEEBLE": {
   "name": "S-FEEBLE",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3657,
   "value": "1"
  },
  "S-FUMBLE": {
   "name": "S-FUMBLE",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3658,
   "value": "2"
  },
  "S-FEAR": {
   "name": "S-FEAR",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3659,
   "value": "3"
  },
  "S-FILCH": {
   "name": "S-FILCH",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3660,
   "value": "4"
  },
  "S-FREEZE": {
   "name": "S-FREEZE",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3661,
   "value": "5"
  },
  "S-FALL": {
   "name": "S-FALL",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3662,
   "value": "6"
  },
  "S-FERMENT": {
   "name": "S-FERMENT",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3663,
   "value": "7"
  },
  "S-FIERCE": {
   "name": "S-FIERCE",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3664,
   "value": "8"
  },
  "S-FLOAT": {
   "name": "S-FLOAT",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3665,
   "value": "9"
  },
  "S-FIREPROOF": {
   "name": "S-FIREPROOF",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3666,
   "value": "10"
  },
  "S-FENCE": {
   "name": "S-FENCE",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3667,
   "value": "11"
  },
  "S-FANTASIZE": {
   "name": "S-FANTASIZE",
   "kind": "constant",
   "file": "2actions.zil",
   "line": 3668,
   "value": "12"
  },
  "SPELL-NAMES": {
   "name": "SPELL-NAMES",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3670,
   "value": "<LTABLE \"Feeble\" \"Fumble\" \"Fear\" \"Filch\" \"Freeze\" \"Fall\" \"Ferment\" \"Fierce\" \"Float\" \"Fireproof\" \"Fence\" \"Fantasize\">"
  },
  "SPELL-HINTS": {
   "name": "SPELL-HINTS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3675,
   "value": "<LTABLE \"All at once you feel very tired.\" <> \"You look at the Wizard in terror. You scramble away,\ntrying to get as far as possible from him.\" <> \"Your limbs suddenly feel like they have turned to stone. You can't\nmove a muscle.\" <> \"You begin to feel lightheaded.\" \"You rush at the Wizard, intending to tear him limb from limb.\" <> <> <> <>>"
  },
  "SPELL-STOPS": {
   "name": "SPELL-STOPS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3692,
   "value": "<LTABLE \"You feel more energetic now.\" <> \"You suddenly decide that the Wizard isn't that terrifying...\" <> \"Your little finger begins to twitch, and then your whole body is free\nagain.\" <> \"Your head is clearer now.\" \"You feel cooler and less angry now.\" \"You sink quietly down again.\" <> <> <>>"
  },
  "SPELL-HANDLED?": {
   "name": "SPELL-HANDLED?",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3746,
   "value": "<>"
  },
  "WAND-ON": {
   "name": "WAND-ON",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3747,
   "value": "<>"
  },
  "SPELL-USED": {
   "name": "SPELL-USED",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3748,
   "value": "<>"
  },
  "SPELL-VICTIM": {
   "name": "SPELL-VICTIM",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3749,
   "value": "<>"
  },
  "WAND-ON-LOC": {
   "name": "WAND-ON-LOC",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3808,
   "value": "<>"
  },
  "WIZQLAST": {
   "name": "WIZQLAST",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3836,
   "value": "0"
  },
  "WIZQDESCS": {
   "name": "WIZQDESCS",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3838,
   "value": "<LTABLE \"sparsely furnished and almost monkish in its austerity.\" \"an opulently furnished seraglio out of an Arabian folktale.\" \"decorated in the Louis XIV style.\" \"overhung with palm-trees and lianas. The only furniture is a hammock.\" \"constructed of delicate and wispy cloud-stuffs.\" \"furnished in plastic and metal and looks like the control deck of a\nspaceship.\" \"a suburban bedroom out of the 1950's, complete with bunk beds.\" \"a dank and dimly lighted cave, its floor piled with furs and old bones.\">"
  },
  "FANTASIES": {
   "name": "FANTASIES",
   "kind": "global",
   "file": "2actions.zil",
   "line": 3908,
   "value": "<LTABLE \"pile of jewels\" \"gold ingot\" \"basilisk\" \"bulging chest\" \"yellow sphere\" \"grue\" \"convention of wizards\" \"copy of ZORK I\">"
  },
  "SECRET-DOOR": {
   "name": "SECRET-DOOR",
   "kind": "global",
   "file": "2dungeon.zil",
   "line": 35,
   "value": "<>"
  },
  "GNOME-DOOR-FLAG": {
   "name": "GNOME-DOOR-FLAG",
   "kind": "global",
   "file": "2dungeon.zil",
   "line": 36,
   "value": "<>"
  },
  "BLOC": {
   "name": "BLOC",
   "kind": "global",
   "file": "2dungeon.zil",
   "line": 1414,
   "value": "VOLCANO-BOTTOM"
  },
  "C-TABLELEN": {
   "name": "C-TABLELEN",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 5,
   "value": "180"
  },
  "C-TABLE": {
   "name": "C-TABLE",
   "kind": "global",
   "file": "gclock.zil",
   "line": 7,
   "value": "<ITABLE NONE 180>"
  },
  "C-DEMONS": {
   "name": "C-DEMONS",
   "kind": "global",
   "file": "gclock.zil",
   "line": 9,
   "value": "180"
  },
  "C-INTS": {
   "name": "C-INTS",
   "kind": "global",
   "file": "gclock.zil",
   "line": 11,
   "value": "180"
  },
  "C-INTLEN": {
   "name": "C-INTLEN",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 13,
   "value": "6"
  },
  "C-ENABLED?": {
   "name": "C-ENABLED?",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 15,
   "value": "0"
  },
  "C-TICK": {
   "name": "C-TICK",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 17,
   "value": "1"
  },
  "C-RTN": {
   "name": "C-RTN",
   "kind": "constant",
   "file": "gclock.zil",
   "line": 19,
   "value": "2"
  },
  "CLOCK-WAIT": {
   "name": "CLOCK-WAIT",
   "kind": "global",
   "file": "gclock.zil",
   "line": 41,
   "value": "<>"
  },
  "LOAD-MAX": {
   "name": "LOAD-MAX",
   "kind": "global",
   "file": "gglobals.zil",
   "line": 125,
   "value": "100"
  },
  "LOAD-ALLOWED": {
   "name": "LOAD-ALLOWED",
   "kind": "global",
   "file": "gglobals.zil",
   "line": 127,
   "value": "100"
  },
  "SERIAL": {
   "name": "SERIAL",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 5,
   "value": "0"
  },
  "PLAYER": {
   "name": "PLAYER",
   "kind": "global",
   "file": "gmain.zil",
   "line": 7,
   "value": "<>"
  },
  "P-WON": {
   "name": "P-WON",
   "kind": "global",
   "file": "gmain.zil",
   "line": 9,
   "value": "<>"
  },
  "M-FATAL": {
   "name": "M-FATAL",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 11,
   "value": "2"
  },
  "M-HANDLED": {
   "name": "M-HANDLED",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 13,
   "value": "1"
  },
  "M-NOT-HANDLED": {
   "name": "M-NOT-HANDLED",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 15,
   "value": "<>"
  },
  "M-OBJECT": {
   "name": "M-OBJECT",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 17,
   "value": "<>"
  },
  "M-BEG": {
   "name": "M-BEG",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 19,
   "value": "1"
  },
  "M-END": {
   "name": "M-END",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 21,
   "value": "6"
  },
  "M-ENTER": {
   "name": "M-ENTER",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 23,
   "value": "2"
  },
  "M-LOOK": {
   "name": "M-LOOK",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 25,
   "value": "3"
  },
  "M-FLASH": {
   "name": "M-FLASH",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 27,
   "value": "4"
  },
  "M-OBJDESC": {
   "name": "M-OBJDESC",
   "kind": "constant",
   "file": "gmain.zil",
   "line": 29,
   "value": "5"
  },
  "P-MULT": {
   "name": "P-MULT",
   "kind": "global",
   "file": "gmain.zil",
   "line": 174,
   "value": "<>"
  },
  "P-NOT-HERE": {
   "name": "P-NOT-HERE",
   "kind": "global",
   "file": "gmain.zil",
   "line": 176,
   "value": "0"
  },
  "PRSA": {
   "name": "PRSA",
   "kind": "global",
   "file": "gparser.zil",
   "line": 14,
   "value": "<>"
  },
  "PRSI": {
   "name": "PRSI",
   "kind": "global",
   "file": "gparser.zil",
   "line": 15,
   "value": "<>"
  },
  "PRSO": {
   "name": "PRSO",
   "kind": "global",
   "file": "gparser.zil",
   "line": 16,
   "value": "<>"
  },
  "P-TABLE": {
   "name": "P-TABLE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 18,
   "value": "0"
  },
  "P-ONEOBJ": {
   "name": "P-ONEOBJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 19,
   "value": "0"
  },
  "P-SYNTAX": {
   "name": "P-SYNTAX",
   "kind": "global",
   "file": "gparser.zil",
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
   "file": "gparser.zil",
   "line": 29,
   "value": "0"
  },
  "P-DIR": {
   "name": "P-DIR",
   "kind": "global",
   "file": "gparser.zil",
   "line": 30,
   "value": "0"
  },
  "HERE": {
   "name": "HERE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 31,
   "value": "0"
  },
  "WINNER": {
   "name": "WINNER",
   "kind": "global",
   "file": "gparser.zil",
   "line": 32,
   "value": "0"
  },
  "P-LEXV": {
   "name": "P-LEXV",
   "kind": "global",
   "file": "gparser.zil",
   "line": 34,
   "value": "<ITABLE 59 (LEXV) 0 #BYTE 0 #BYTE 0>"
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
   "file": "gparser.zil",
   "line": 44,
   "value": "<ITABLE 120 (BYTE LENGTH) 0>"
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
   "file": "gparser.zil",
   "line": 58,
   "value": "<>"
  },
  "P-IT-OBJECT": {
   "name": "P-IT-OBJECT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 59,
   "value": "<>"
  },
  "P-OFLAG": {
   "name": "P-OFLAG",
   "kind": "global",
   "file": "gparser.zil",
   "line": 64,
   "value": "<>"
  },
  "P-MERGED": {
   "name": "P-MERGED",
   "kind": "global",
   "file": "gparser.zil",
   "line": 65,
   "value": "<>"
  },
  "P-ACLAUSE": {
   "name": "P-ACLAUSE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 66,
   "value": "<>"
  },
  "P-ANAM": {
   "name": "P-ANAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 67,
   "value": "<>"
  },
  "P-AADJ": {
   "name": "P-AADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 68,
   "value": "<>"
  },
  "P-LEXWORDS": {
   "name": "P-LEXWORDS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 73,
   "value": "1"
  },
  "P-LEXSTART": {
   "name": "P-LEXSTART",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 74,
   "value": "1"
  },
  "P-LEXELEN": {
   "name": "P-LEXELEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 75,
   "value": "2"
  },
  "P-WORDLEN": {
   "name": "P-WORDLEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 76,
   "value": "4"
  },
  "P-PSOFF": {
   "name": "P-PSOFF",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 78,
   "value": "4"
  },
  "P-P1OFF": {
   "name": "P-P1OFF",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 79,
   "value": "5"
  },
  "P-P1BITS": {
   "name": "P-P1BITS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 80,
   "value": "3"
  },
  "P-ITBLLEN": {
   "name": "P-ITBLLEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 82,
   "value": "9"
  },
  "P-ITBL": {
   "name": "P-ITBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 83,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-OTBL": {
   "name": "P-OTBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 84,
   "value": "<TABLE 0 0 0 0 0 0 0 0 0 0>"
  },
  "P-VTBL": {
   "name": "P-VTBL",
   "kind": "global",
   "file": "gparser.zil",
   "line": 85,
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
   "file": "gparser.zil",
   "line": 88,
   "value": "0"
  },
  "P-VERB": {
   "name": "P-VERB",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 90,
   "value": "0"
  },
  "P-VERBN": {
   "name": "P-VERBN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 91,
   "value": "1"
  },
  "P-PREP1": {
   "name": "P-PREP1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 92,
   "value": "2"
  },
  "P-PREP1N": {
   "name": "P-PREP1N",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 93,
   "value": "3"
  },
  "P-PREP2": {
   "name": "P-PREP2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 94,
   "value": "4"
  },
  "P-PREP2N": {
   "name": "P-PREP2N",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 95,
   "value": "5"
  },
  "P-NC1": {
   "name": "P-NC1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 96,
   "value": "6"
  },
  "P-NC1L": {
   "name": "P-NC1L",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 97,
   "value": "7"
  },
  "P-NC2": {
   "name": "P-NC2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 98,
   "value": "8"
  },
  "P-NC2L": {
   "name": "P-NC2L",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 99,
   "value": "9"
  },
  "QUOTE-FLAG": {
   "name": "QUOTE-FLAG",
   "kind": "global",
   "file": "gparser.zil",
   "line": 101,
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
   "line": 382,
   "value": "<>"
  },
  "P-WALK-DIR": {
   "name": "P-WALK-DIR",
   "kind": "global",
   "file": "gparser.zil",
   "line": 383,
   "value": "<>"
  },
  "AGAIN-DIR": {
   "name": "AGAIN-DIR",
   "kind": "global",
   "file": "gparser.zil",
   "line": 384,
   "value": "<>"
  },
  "P-NUMBER": {
   "name": "P-NUMBER",
   "kind": "global",
   "file": "gparser.zil",
   "line": 536,
   "value": "0"
  },
  "P-DIRECTION": {
   "name": "P-DIRECTION",
   "kind": "global",
   "file": "gparser.zil",
   "line": 538,
   "value": "0"
  },
  "P-SLOCBITS": {
   "name": "P-SLOCBITS",
   "kind": "global",
   "file": "gparser.zil",
   "line": 693,
   "value": "0"
  },
  "P-SYNLEN": {
   "name": "P-SYNLEN",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 695,
   "value": "8"
  },
  "P-SBITS": {
   "name": "P-SBITS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 697,
   "value": "0"
  },
  "P-SPREP1": {
   "name": "P-SPREP1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 698,
   "value": "1"
  },
  "P-SPREP2": {
   "name": "P-SPREP2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 699,
   "value": "2"
  },
  "P-SFWIM1": {
   "name": "P-SFWIM1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 700,
   "value": "3"
  },
  "P-SFWIM2": {
   "name": "P-SFWIM2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 701,
   "value": "4"
  },
  "P-SLOC1": {
   "name": "P-SLOC1",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 702,
   "value": "5"
  },
  "P-SLOC2": {
   "name": "P-SLOC2",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 703,
   "value": "6"
  },
  "P-SACTION": {
   "name": "P-SACTION",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 704,
   "value": "7"
  },
  "P-SONUMS": {
   "name": "P-SONUMS",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 705,
   "value": "3"
  },
  "P-GWIMBIT": {
   "name": "P-GWIMBIT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 902,
   "value": "0"
  },
  "P-NAM": {
   "name": "P-NAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 963,
   "value": "<>"
  },
  "P-ADJ": {
   "name": "P-ADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 964,
   "value": "<>"
  },
  "P-ADVERB": {
   "name": "P-ADVERB",
   "kind": "global",
   "file": "gparser.zil",
   "line": 965,
   "value": "<>"
  },
  "P-ADJN": {
   "name": "P-ADJN",
   "kind": "global",
   "file": "gparser.zil",
   "line": 966,
   "value": "<>"
  },
  "P-PRSO": {
   "name": "P-PRSO",
   "kind": "global",
   "file": "gparser.zil",
   "line": 967,
   "value": "<ITABLE NONE 50>"
  },
  "P-PRSI": {
   "name": "P-PRSI",
   "kind": "global",
   "file": "gparser.zil",
   "line": 968,
   "value": "<ITABLE NONE 50>"
  },
  "P-BUTS": {
   "name": "P-BUTS",
   "kind": "global",
   "file": "gparser.zil",
   "line": 969,
   "value": "<ITABLE NONE 50>"
  },
  "P-MERGE": {
   "name": "P-MERGE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 970,
   "value": "<ITABLE NONE 50>"
  },
  "P-OCLAUSE": {
   "name": "P-OCLAUSE",
   "kind": "global",
   "file": "gparser.zil",
   "line": 971,
   "value": "<ITABLE NONE 100>"
  },
  "P-MATCHLEN": {
   "name": "P-MATCHLEN",
   "kind": "global",
   "file": "gparser.zil",
   "line": 972,
   "value": "0"
  },
  "P-GETFLAGS": {
   "name": "P-GETFLAGS",
   "kind": "global",
   "file": "gparser.zil",
   "line": 973,
   "value": "0"
  },
  "P-ALL": {
   "name": "P-ALL",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 974,
   "value": "1"
  },
  "P-ONE": {
   "name": "P-ONE",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 975,
   "value": "2"
  },
  "P-INHIBIT": {
   "name": "P-INHIBIT",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 976,
   "value": "4"
  },
  "P-AND": {
   "name": "P-AND",
   "kind": "global",
   "file": "gparser.zil",
   "line": 979,
   "value": "<>"
  },
  "SH": {
   "name": "SH",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1035,
   "value": "128"
  },
  "SC": {
   "name": "SC",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1036,
   "value": "64"
  },
  "SIR": {
   "name": "SIR",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1037,
   "value": "32"
  },
  "SOG": {
   "name": "SOG",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1038,
   "value": "16"
  },
  "STAKE": {
   "name": "STAKE",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1039,
   "value": "8"
  },
  "SMANY": {
   "name": "SMANY",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1040,
   "value": "4"
  },
  "SHAVE": {
   "name": "SHAVE",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1041,
   "value": "2"
  },
  "P-XNAM": {
   "name": "P-XNAM",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1167,
   "value": "<>"
  },
  "P-XADJ": {
   "name": "P-XADJ",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1168,
   "value": "<>"
  },
  "P-XADJN": {
   "name": "P-XADJN",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1169,
   "value": "<>"
  },
  "P-SRCBOT": {
   "name": "P-SRCBOT",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1237,
   "value": "2"
  },
  "P-SRCTOP": {
   "name": "P-SRCTOP",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1238,
   "value": "0"
  },
  "P-SRCALL": {
   "name": "P-SRCALL",
   "kind": "constant",
   "file": "gparser.zil",
   "line": 1239,
   "value": "1"
  },
  "ALWAYS-LIT": {
   "name": "ALWAYS-LIT",
   "kind": "global",
   "file": "gparser.zil",
   "line": 1356,
   "value": "<>"
  },
  "VERBOSE": {
   "name": "VERBOSE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 9,
   "value": "<>"
  },
  "SUPER-BRIEF": {
   "name": "SUPER-BRIEF",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 10,
   "value": "<>"
  },
  "HS": {
   "name": "HS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 755,
   "value": "0"
  },
  "JUMPLOSS": {
   "name": "JUMPLOSS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 888,
   "value": "<LTABLE 0 \"You should have looked before you leaped.\" \"In the movies, your life would be passing before your eyes.\" \"Geronimo...\">"
  },
  "WHEEEEE": {
   "name": "WHEEEEE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1316,
   "value": "<LTABLE 0 \"Very good. Now you can go to the second grade.\" \"Are you enjoying yourself?\" \"Wheeeeeeeeee!!!!!\" \"Do you expect me to applaud?\">"
  },
  "LIT": {
   "name": "LIT",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1670,
   "value": "<>"
  },
  "SPRAYED?": {
   "name": "SPRAYED?",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1672,
   "value": "<>"
  },
  "DESC-OBJECT": {
   "name": "DESC-OBJECT",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1735,
   "value": "<>"
  },
  "MOVES": {
   "name": "MOVES",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1887,
   "value": "0"
  },
  "SCORE": {
   "name": "SCORE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1889,
   "value": "0"
  },
  "BASE-SCORE": {
   "name": "BASE-SCORE",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1891,
   "value": "0"
  },
  "WON-FLAG": {
   "name": "WON-FLAG",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1893,
   "value": "<>"
  },
  "DEAD": {
   "name": "DEAD",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1926,
   "value": "<>"
  },
  "DEATHS": {
   "name": "DEATHS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1928,
   "value": "0"
  },
  "LUCKY": {
   "name": "LUCKY",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1930,
   "value": "1"
  },
  "FUMBLE-NUMBER": {
   "name": "FUMBLE-NUMBER",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1940,
   "value": "7"
  },
  "FUMBLE-PROB": {
   "name": "FUMBLE-PROB",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 1942,
   "value": "8"
  },
  "REXIT": {
   "name": "REXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2045,
   "value": "0"
  },
  "UEXIT": {
   "name": "UEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2046,
   "value": "1"
  },
  "NEXIT": {
   "name": "NEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2047,
   "value": "2"
  },
  "FEXIT": {
   "name": "FEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2048,
   "value": "3"
  },
  "CEXIT": {
   "name": "CEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2049,
   "value": "4"
  },
  "DEXIT": {
   "name": "DEXIT",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2050,
   "value": "5"
  },
  "NEXITSTR": {
   "name": "NEXITSTR",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2052,
   "value": "0"
  },
  "FEXITFCN": {
   "name": "FEXITFCN",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2053,
   "value": "0"
  },
  "CEXITFLAG": {
   "name": "CEXITFLAG",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2054,
   "value": "1"
  },
  "CEXITSTR": {
   "name": "CEXITSTR",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2055,
   "value": "1"
  },
  "DEXITOBJ": {
   "name": "DEXITOBJ",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2056,
   "value": "1"
  },
  "DEXITSTR": {
   "name": "DEXITSTR",
   "kind": "constant",
   "file": "gverbs.zil",
   "line": 2057,
   "value": "1"
  },
  "INDENTS": {
   "name": "INDENTS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2059,
   "value": "<TABLE (PURE) \"\" \"  \" \"    \" \"      \" \"        \" \"          \">"
  },
  "HO-HUM": {
   "name": "HO-HUM",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2075,
   "value": "<LTABLE 0 \" doesn't seem to work.\" \" isn't notably helpful.\" \" has no effect.\">"
  },
  "HELLOS": {
   "name": "HELLOS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2252,
   "value": "<LTABLE 0 \"Hello.\" \"Good day.\" \"Nice weather we've been having lately.\" \"Goodbye.\">"
  },
  "YUKS": {
   "name": "YUKS",
   "kind": "global",
   "file": "gverbs.zil",
   "line": 2258,
   "value": "<LTABLE 0 \"A valiant attempt.\" \"You can't be serious.\" ;\"Not bloody likely.\" \"An interesting idea...\" \"What a concept!\">"
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
     "file": "gsyntax.zil",
     "line": 40
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
     "file": "gsyntax.zil",
     "line": 42
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
     "file": "gsyntax.zil",
     "line": 44
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
     "file": "gsyntax.zil",
     "line": 47
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
     "file": "gsyntax.zil",
     "line": 49
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
     "file": "gsyntax.zil",
     "line": 52
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
     "file": "gsyntax.zil",
     "line": 55
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
     "file": "gsyntax.zil",
     "line": 57
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
     "file": "gsyntax.zil",
     "line": 59
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
     "file": "gsyntax.zil",
     "line": 61
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
     "file": "gsyntax.zil",
     "line": 63
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
     "file": "gsyntax.zil",
     "line": 65
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
     "file": "gsyntax.zil",
     "line": 67
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
     "file": "gsyntax.zil",
     "line": 69
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
     "file": "gsyntax.zil",
     "line": 71
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
     "file": "gsyntax.zil",
     "line": 73
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
     "file": "gsyntax.zil",
     "line": 75
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
     "file": "gsyntax.zil",
     "line": 77
    }
   ]
  },
  "ACTIVATE": {
   "verb": "ACTIVATE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ACTIVATE OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 85
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
     "file": "gsyntax.zil",
     "line": 91
    },
    {
     "pattern": "ANSWER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-REPLY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 92
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
     "file": "gsyntax.zil",
     "line": 95
    }
   ]
  },
  "ATTACK": {
   "verb": "ATTACK",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ATTACK OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 101
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
     "file": "gsyntax.zil",
     "line": 105
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
     "file": "gsyntax.zil",
     "line": 107
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
     "file": "gsyntax.zil",
     "line": 109
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
     "file": "gsyntax.zil",
     "line": 110
    },
    {
     "pattern": "BLOW UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-BLAST",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 112
    },
    {
     "pattern": "BLOW IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BREATHE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 113
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
     "file": "gsyntax.zil",
     "line": 115
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
     "file": "gsyntax.zil",
     "line": 117
    },
    {
     "pattern": "BRUSH OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BRUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 118
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
     "file": "gsyntax.zil",
     "line": 122
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
     "file": "gsyntax.zil",
     "line": 124
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
     "file": "gsyntax.zil",
     "line": 127
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
     "file": "gsyntax.zil",
     "line": 132
    }
   ]
  },
  "CLIMB": {
   "verb": "CLIMB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "CLIMB UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 135
    },
    {
     "pattern": "CLIMB UP OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 136
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 137
    },
    {
     "pattern": "CLIMB DOWN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 138
    },
    {
     "pattern": "CLIMB OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-CLIMB-FOO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 139
    },
    {
     "pattern": "CLIMB IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "gsyntax.zil",
     "line": 140
    },
    {
     "pattern": "CLIMB ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 141
    },
    {
     "pattern": "CLIMB WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 142
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
     "file": "gsyntax.zil",
     "line": 145
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
     "file": "gsyntax.zil",
     "line": 147
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
     "file": "gsyntax.zil",
     "line": 149
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
     "file": "gsyntax.zil",
     "line": 151
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
     "file": "gsyntax.zil",
     "line": 154
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
     "file": "gsyntax.zil",
     "line": 157
    },
    {
     "pattern": "CURSE OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [],
     "action": "V-CURSES",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 158
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
     "file": "gsyntax.zil",
     "line": 161
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
     "file": "gsyntax.zil",
     "line": 163
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
     "file": "gsyntax.zil",
     "line": 165
    },
    {
     "pattern": "DESTROY IN OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 167
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
     "file": "gsyntax.zil",
     "line": 170
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
     "file": "gsyntax.zil",
     "line": 171
    },
    {
     "pattern": "DIG OBJECT (ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-DIG",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 173
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
     "file": "gsyntax.zil",
     "line": 176
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
     "file": "gsyntax.zil",
     "line": 179
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
     "file": "gsyntax.zil",
     "line": 181
    },
    {
     "pattern": "DRINK FROM OBJECT (HELD CARRIED)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-DRINK-FROM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 183
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
     "file": "gsyntax.zil",
     "line": 186
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) DOWN OBJECT",
     "objects": 2,
     "particles": [
      "DOWN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 187
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 188
    },
    {
     "pattern": "DROP OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 189
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
     "file": "gsyntax.zil",
     "line": 192
    }
   ]
  },
  "ECHO": {
   "verb": "ECHO",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ECHO",
     "objects": 0,
     "particles": [],
     "action": "V-ECHO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 196
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
     "file": "gsyntax.zil",
     "line": 198
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
     "file": "gsyntax.zil",
     "line": 200
    },
    {
     "pattern": "ENTER OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 201
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
     "file": "gsyntax.zil",
     "line": 202
    },
    {
     "pattern": "EXIT OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-EXIT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 203
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
     "file": "gsyntax.zil",
     "line": 205
    },
    {
     "pattern": "EXAMINE IN OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 206
    },
    {
     "pattern": "EXAMINE ON OBJECT (HELD CARRIED IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 208
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
     "file": "gsyntax.zil",
     "line": 212
    },
    {
     "pattern": "EXORCISE OUT OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 213
    },
    {
     "pattern": "EXORCISE AWAY OBJECT (FIND ACTORBIT)",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-EXORCISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 214
    }
   ]
  },
  "EXTINGUISH": {
   "verb": "EXTINGUISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "EXTINGUISH OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 217
    }
   ]
  },
  "FILL": {
   "verb": "FILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "gsyntax.zil",
     "line": 221
    },
    {
     "pattern": "FILL OBJECT (FIND CONTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-FILL",
     "preaction": "PRE-FILL",
     "file": "gsyntax.zil",
     "line": 223
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
     "file": "gsyntax.zil",
     "line": 226
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
     "file": "gsyntax.zil",
     "line": 229
    },
    {
     "pattern": "FOLLOW OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-FOLLOW",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 230
    }
   ]
  },
  "FROBOZZ": {
   "verb": "FROBOZZ",
   "synonyms": [],
   "productions": [
    {
     "pattern": "FROBOZZ",
     "objects": 0,
     "particles": [],
     "action": "V-FROBOZZ",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 233
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
     "file": "gsyntax.zil",
     "line": 235
    },
    {
     "pattern": "GIVE OBJECT (FIND ACTORBIT) (ON-GROUND) OBJECT (MANY HELD HAVE)",
     "objects": 2,
     "particles": [],
     "action": "V-SGIVE",
     "preaction": "PRE-SGIVE",
     "file": "gsyntax.zil",
     "line": 237
    }
   ]
  },
  "HATCH": {
   "verb": "HATCH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "HATCH OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HATCH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 243
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
     "file": "gsyntax.zil",
     "line": 245
    },
    {
     "pattern": "HELLO OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-HELLO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 246
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
     "file": "gsyntax.zil",
     "line": 249
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
     "file": "gsyntax.zil",
     "line": 252
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
     "file": "gsyntax.zil",
     "line": 258
    },
    {
     "pattern": "JUMP OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 259
    },
    {
     "pattern": "JUMP ACROSS OBJECT",
     "objects": 1,
     "particles": [
      "ACROSS"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 260
    },
    {
     "pattern": "JUMP IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 261
    },
    {
     "pattern": "JUMP FROM OBJECT",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 262
    },
    {
     "pattern": "JUMP OFF OBJECT",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 263
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
     "file": "gsyntax.zil",
     "line": 266
    }
   ]
  },
  "KILL": {
   "verb": "KILL",
   "synonyms": [],
   "productions": [
    {
     "pattern": "KILL OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 273
    }
   ]
  },
  "STAB": {
   "verb": "STAB",
   "synonyms": [],
   "productions": [
    {
     "pattern": "STAB OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-STAB",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 277
    },
    {
     "pattern": "STAB OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 278
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
     "file": "gsyntax.zil",
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
     "file": "gsyntax.zil",
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
     "file": "gsyntax.zil",
     "line": 284
    },
    {
     "pattern": "KNOCK DOWN OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-ATTACK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 285
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
     "file": "gsyntax.zil",
     "line": 288
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
     "file": "gsyntax.zil",
     "line": 290
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
     "file": "gsyntax.zil",
     "line": 292
    },
    {
     "pattern": "LEAVE OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 293
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
     "file": "gsyntax.zil",
     "line": 295
    },
    {
     "pattern": "LIGHT OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND FLAMEBIT) (HELD CARRIED TAKE HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-BURN",
     "preaction": "PRE-BURN",
     "file": "gsyntax.zil",
     "line": 297
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
     "file": "gsyntax.zil",
     "line": 300
    },
    {
     "pattern": "LISTEN FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-LISTEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 301
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
     "file": "gsyntax.zil",
     "line": 303
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
     "file": "gsyntax.zil",
     "line": 306
    },
    {
     "pattern": "LOOK AROUND OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 307
    },
    {
     "pattern": "LOOK UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 308
    },
    {
     "pattern": "LOOK DOWN OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-LOOK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 309
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-EXAMINE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 310
    },
    {
     "pattern": "LOOK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LOOK-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 311
    },
    {
     "pattern": "LOOK WITH OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 312
    },
    {
     "pattern": "LOOK UNDER OBJECT",
     "objects": 1,
     "particles": [
      "UNDER"
     ],
     "action": "V-LOOK-UNDER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 313
    },
    {
     "pattern": "LOOK BEHIND OBJECT",
     "objects": 1,
     "particles": [
      "BEHIND"
     ],
     "action": "V-LOOK-BEHIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 314
    },
    {
     "pattern": "LOOK IN OBJECT (HELD CARRIED ON-GROUND IN-ROOM MANY)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-LOOK-INSIDE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 315
    },
    {
     "pattern": "LOOK AT OBJECT (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT",
     "objects": 2,
     "particles": [
      "AT",
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "gsyntax.zil",
     "line": 316
    },
    {
     "pattern": "LOOK FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 318
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
     "file": "gsyntax.zil",
     "line": 321
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
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 323
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
     "file": "gsyntax.zil",
     "line": 326
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
     "file": "gsyntax.zil",
     "line": 328
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
     "file": "gsyntax.zil",
     "line": 332
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 333
    },
    {
     "pattern": "MOVE OBJECT (ON-GROUND IN-ROOM) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 334
    },
    {
     "pattern": "MOVE OBJECT (HELD MANY HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 335
    },
    {
     "pattern": "MOVE OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 336
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
     "file": "gsyntax.zil",
     "line": 337
    },
    {
     "pattern": "ROLL OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 338
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
     "file": "gsyntax.zil",
     "line": 340
    }
   ]
  },
  "ODYSSEUS": {
   "verb": "ODYSSEUS",
   "synonyms": [],
   "productions": [
    {
     "pattern": "ODYSSEUS",
     "objects": 0,
     "particles": [],
     "action": "V-ODYSSEUS",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 343
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
     "file": "gsyntax.zil",
     "line": 346
    },
    {
     "pattern": "OPEN UP OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 347
    },
    {
     "pattern": "OPEN OBJECT (FIND DOORBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND TOOLBIT) (ON-GROUND IN-ROOM HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-OPEN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 349
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
     "file": "gsyntax.zil",
     "line": 352
    },
    {
     "pattern": "PICK OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-PICK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 353
    },
    {
     "pattern": "PICK UP OBJECT (FIND TAKEBIT) (ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 354
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
     "file": "gsyntax.zil",
     "line": 356
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
     "file": "gsyntax.zil",
     "line": 358
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
     "action": "V-ADVENT",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 361
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
     "file": "gsyntax.zil",
     "line": 364
    }
   ]
  },
  "PUNCTURE": {
   "verb": "PUNCTURE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUNCTURE OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM) WITH OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-MUNG",
     "preaction": "PRE-MUNG",
     "file": "gsyntax.zil",
     "line": 366
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
     "file": "gsyntax.zil",
     "line": 369
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 370
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-POUR-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 371
    },
    {
     "pattern": "POUR OBJECT (HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 372
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
     "file": "gsyntax.zil",
     "line": 375
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
     "file": "gsyntax.zil",
     "line": 377
    },
    {
     "pattern": "PULL ON OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 378
    },
    {
     "pattern": "PULL UP OBJECT (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-MOVE",
     "preaction": "PRE-MOVE",
     "file": "gsyntax.zil",
     "line": 379
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
     "file": "gsyntax.zil",
     "line": 382
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
     "file": "gsyntax.zil",
     "line": 383
    }
   ]
  },
  "PUSH": {
   "verb": "PUSH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 385
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 386
    },
    {
     "pattern": "PUSH OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [],
     "action": "V-PUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 387
    },
    {
     "pattern": "PUSH ON OBJECT (IN-ROOM ON-GROUND MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-PUSH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 388
    },
    {
     "pattern": "PUSH OBJECT WITH OBJECT (FIND TOOLBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 389
    },
    {
     "pattern": "PUSH OBJECT UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 390
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
     "file": "gsyntax.zil",
     "line": 393
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 394
    },
    {
     "pattern": "PUT DOWN OBJECT (HELD MANY)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-DROP",
     "preaction": "PRE-DROP",
     "file": "gsyntax.zil",
     "line": 395
    },
    {
     "pattern": "PUT OBJECT (HELD HAVE) UNDER OBJECT",
     "objects": 2,
     "particles": [
      "UNDER"
     ],
     "action": "V-PUT-UNDER",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 396
    },
    {
     "pattern": "PUT OUT OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 397
    },
    {
     "pattern": "PUT ON OBJECT (IN-ROOM ON-GROUND CARRIED MANY)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-WEAR",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 399
    },
    {
     "pattern": "PUT OBJECT (HELD MANY HAVE) BEHIND OBJECT",
     "objects": 2,
     "particles": [
      "BEHIND"
     ],
     "action": "V-PUT-BEHIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 400
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
     "file": "gsyntax.zil",
     "line": 403
    },
    {
     "pattern": "RAISE UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-RAISE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 404
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
     "file": "gsyntax.zil",
     "line": 407
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
     "file": "gsyntax.zil",
     "line": 410
    },
    {
     "pattern": "READ FROM OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE)",
     "objects": 1,
     "particles": [
      "FROM"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "gsyntax.zil",
     "line": 412
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-READ",
     "preaction": "PRE-READ",
     "file": "gsyntax.zil",
     "line": 414
    },
    {
     "pattern": "READ OBJECT (FIND READBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-READ-PAGE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 416
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
     "file": "gsyntax.zil",
     "line": 420
    }
   ]
  },
  "RING": {
   "verb": "RING",
   "synonyms": [],
   "productions": [
    {
     "pattern": "RING OBJECT (TAKE)",
     "objects": 1,
     "particles": [],
     "action": "V-RING",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 422
    },
    {
     "pattern": "RING OBJECT (TAKE) WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RING",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 423
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
     "file": "gsyntax.zil",
     "line": 426
    },
    {
     "pattern": "RUB OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-RUB",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 427
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
     "file": "gsyntax.zil",
     "line": 430
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
     "file": "gsyntax.zil",
     "line": 431
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
     "file": "gsyntax.zil",
     "line": 433
    },
    {
     "pattern": "SEARCH IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SEARCH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 434
    },
    {
     "pattern": "SEARCH FOR OBJECT",
     "objects": 1,
     "particles": [
      "FOR"
     ],
     "action": "V-FIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 435
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
     "file": "gsyntax.zil",
     "line": 437
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
     "file": "gsyntax.zil",
     "line": 439
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
     "file": "gsyntax.zil",
     "line": 441
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
     "file": "gsyntax.zil",
     "line": 445
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 446
    },
    {
     "pattern": "SLIDE OBJECT (IN-ROOM ON-GROUND) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-PUSH-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 447
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
     "file": "gsyntax.zil",
     "line": 449
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
     "file": "gsyntax.zil",
     "line": 452
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
     "file": "gsyntax.zil",
     "line": 454
    },
    {
     "pattern": "SPRAY OBJECT WITH OBJECT",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-SSPRAY",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 455
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
     "file": "gsyntax.zil",
     "line": 457
    },
    {
     "pattern": "SQUEEZE OBJECT ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 458
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
     "file": "gsyntax.zil",
     "line": 460
    },
    {
     "pattern": "STAND UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 461
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
     "file": "gsyntax.zil",
     "line": 463
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
     "file": "gsyntax.zil",
     "line": 465
    },
    {
     "pattern": "STRIKE OBJECT (ON-GROUND IN-ROOM HELD CARRIED)",
     "objects": 1,
     "particles": [],
     "action": "V-STRIKE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 467
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
     "file": "gsyntax.zil",
     "line": 469
    },
    {
     "pattern": "SWIM IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 470
    },
    {
     "pattern": "SWIM ACROSS OBJECT",
     "objects": 1,
     "particles": [
      "ACROSS"
     ],
     "action": "V-SWIM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 471
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
     "file": "gsyntax.zil",
     "line": 474
    },
    {
     "pattern": "SWING OBJECT (FIND WEAPONBIT) (HELD CARRIED HAVE) AT OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-SWING",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 475
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
     "file": "gsyntax.zil",
     "line": 479
    },
    {
     "pattern": "TAKE IN OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-BOARD",
     "preaction": "PRE-BOARD",
     "file": "gsyntax.zil",
     "line": 480
    },
    {
     "pattern": "TAKE OUT OBJECT (FIND RMUNGBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "OUT"
     ],
     "action": "V-DISEMBARK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 481
    },
    {
     "pattern": "TAKE ON OBJECT (FIND VEHBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-CLIMB-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 482
    },
    {
     "pattern": "TAKE UP OBJECT (FIND RMUNGBIT)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-STAND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 483
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM MANY) OUT OBJECT",
     "objects": 2,
     "particles": [
      "OUT"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 484
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (CARRIED IN-ROOM MANY) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 486
    },
    {
     "pattern": "TAKE OBJECT (FIND TAKEBIT) (IN-ROOM CARRIED MANY) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-TAKE",
     "preaction": "PRE-TAKE",
     "file": "gsyntax.zil",
     "line": 488
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
     "file": "gsyntax.zil",
     "line": 492
    },
    {
     "pattern": "TELL OBJECT (FIND ACTORBIT) (IN-ROOM) ABOUT OBJECT",
     "objects": 2,
     "particles": [
      "ABOUT"
     ],
     "action": "V-TELL",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 493
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
     "file": "gsyntax.zil",
     "line": 496
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) WITH OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-THROW",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 498
    },
    {
     "pattern": "THROW OBJECT OBJECT",
     "objects": 2,
     "particles": [],
     "action": "V-OVERBOARD",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 500
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) IN OBJECT",
     "objects": 2,
     "particles": [
      "IN"
     ],
     "action": "V-PUT",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 501
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) ON OBJECT",
     "objects": 2,
     "particles": [
      "ON"
     ],
     "action": "V-PUT-ON",
     "preaction": "PRE-PUT",
     "file": "gsyntax.zil",
     "line": 502
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OFF OBJECT",
     "objects": 2,
     "particles": [
      "OFF"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 503
    },
    {
     "pattern": "THROW OBJECT (HELD CARRIED HAVE) OVER OBJECT",
     "objects": 2,
     "particles": [
      "OVER"
     ],
     "action": "V-THROW-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 504
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
     "file": "gsyntax.zil",
     "line": 507
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
     "file": "gsyntax.zil",
     "line": 508
    }
   ]
  },
  "TREASURE": {
   "verb": "TREASURE",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TREASURE",
     "objects": 0,
     "particles": [],
     "action": "V-TREASURE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 512
    }
   ]
  },
  "TURN": {
   "verb": "TURN",
   "synonyms": [],
   "productions": [
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) (HELD CARRIED ON-GROUND IN-ROOM) WITH OBJECT (FIND RMUNGBIT)",
     "objects": 2,
     "particles": [
      "WITH"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 515
    },
    {
     "pattern": "TURN ON OBJECT (FIND LIGHTBIT) (HELD CARRIED ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-LAMP-ON",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 517
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
     "file": "gsyntax.zil",
     "line": 519
    },
    {
     "pattern": "TURN OFF OBJECT (FIND ONBIT) (HELD CARRIED ON-GROUND IN-ROOM TAKE HAVE)",
     "objects": 1,
     "particles": [
      "OFF"
     ],
     "action": "V-LAMP-OFF",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 520
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) TO OBJECT",
     "objects": 2,
     "particles": [
      "TO"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 522
    },
    {
     "pattern": "TURN OBJECT (FIND TURNBIT) FOR OBJECT",
     "objects": 2,
     "particles": [
      "FOR"
     ],
     "action": "V-TURN",
     "preaction": "PRE-TURN",
     "file": "gsyntax.zil",
     "line": 523
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
     "file": "gsyntax.zil",
     "line": 527
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
     "file": "gsyntax.zil",
     "line": 530
    },
    {
     "pattern": "UNTIE OBJECT (ON-GROUND IN-ROOM HELD CARRIED) FROM OBJECT",
     "objects": 2,
     "particles": [
      "FROM"
     ],
     "action": "V-UNTIE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 531
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
     "file": "gsyntax.zil",
     "line": 535
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
     "file": "gsyntax.zil",
     "line": 538
    },
    {
     "pattern": "WAKE UP OBJECT (FIND ACTORBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-ALARM",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 539
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
     "file": "gsyntax.zil",
     "line": 542
    },
    {
     "pattern": "WALK OBJECT",
     "objects": 1,
     "particles": [],
     "action": "V-WALK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 543
    },
    {
     "pattern": "WALK AWAY OBJECT",
     "objects": 1,
     "particles": [
      "AWAY"
     ],
     "action": "V-WALK",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 544
    },
    {
     "pattern": "WALK IN OBJECT",
     "objects": 1,
     "particles": [
      "IN"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 545
    },
    {
     "pattern": "WALK WITH OBJECT",
     "objects": 1,
     "particles": [
      "WITH"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 546
    },
    {
     "pattern": "WALK ON OBJECT",
     "objects": 1,
     "particles": [
      "ON"
     ],
     "action": "V-THROUGH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 547
    },
    {
     "pattern": "WALK OVER OBJECT",
     "objects": 1,
     "particles": [
      "OVER"
     ],
     "action": "V-LEAP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 548
    },
    {
     "pattern": "WALK TO OBJECT",
     "objects": 1,
     "particles": [
      "TO"
     ],
     "action": "V-WALK-TO",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 549
    },
    {
     "pattern": "WALK AROUND OBJECT",
     "objects": 1,
     "particles": [
      "AROUND"
     ],
     "action": "V-WALK-AROUND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 550
    },
    {
     "pattern": "WALK UP OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-CLIMB-UP",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 551
    },
    {
     "pattern": "WALK DOWN OBJECT (FIND CLIMBBIT) (ON-GROUND IN-ROOM)",
     "objects": 1,
     "particles": [
      "DOWN"
     ],
     "action": "V-CLIMB-DOWN",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 552
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
     "file": "gsyntax.zil",
     "line": 555
    },
    {
     "pattern": "WAVE OBJECT (HELD CARRIED TAKE HAVE) AT OBJECT",
     "objects": 2,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 556
    },
    {
     "pattern": "WAVE AT OBJECT",
     "objects": 1,
     "particles": [
      "AT"
     ],
     "action": "V-WAVE",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 557
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
     "file": "gsyntax.zil",
     "line": 560
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
     "file": "gsyntax.zil",
     "line": 562
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
     "file": "gsyntax.zil",
     "line": 565
    },
    {
     "pattern": "WIND UP OBJECT",
     "objects": 1,
     "particles": [
      "UP"
     ],
     "action": "V-WIND",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 566
    }
   ]
  },
  "WISH": {
   "verb": "WISH",
   "synonyms": [],
   "productions": [
    {
     "pattern": "WISH",
     "objects": 0,
     "particles": [],
     "action": "V-WISH",
     "preaction": null,
     "file": "gsyntax.zil",
     "line": 568
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
     "file": "gsyntax.zil",
     "line": 570
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
     "file": "gsyntax.zil",
     "line": 573
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
  "ACTIVATE": {
   "word": "ACTIVATE",
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
     "of": "LISTEN"
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
     "of": "TALK"
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
     "of": "BRUSH"
    },
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
     "of": "CUT"
    },
    {
     "kind": "particle",
     "of": "DESTROY"
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
     "of": "INFLAT"
    },
    {
     "kind": "particle",
     "of": "KILL"
    },
    {
     "kind": "particle",
     "of": "STAB"
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
     "of": "LUBRICATE"
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
     "of": "PLUG"
    },
    {
     "kind": "particle",
     "of": "POKE"
    },
    {
     "kind": "particle",
     "of": "PUNCTURE"
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
     "of": "READ"
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
     "of": "SPRAY"
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
  "BACK": {
   "word": "BACK",
   "roles": [
    {
     "kind": "verb",
     "of": null
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
     "of": "EXORCISE"
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
     "of": "PULL"
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
     "of": "BLOW"
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
  "BOARD": {
   "word": "BOARD",
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
     "of": "SPRAY"
    },
    {
     "kind": "particle",
     "of": "SQUEEZE"
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
     "kind": "direction",
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
  "ECHO": {
   "word": "ECHO",
   "roles": [
    {
     "kind": "verb",
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
  "AWAY": {
   "word": "AWAY",
   "roles": [
    {
     "kind": "particle",
     "of": "EXORCISE"
    },
    {
     "kind": "particle",
     "of": "WALK"
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
  "FROBOZZ": {
   "word": "FROBOZZ",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "adjective",
     "of": "WIZARD"
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
  "HATCH": {
   "word": "HATCH",
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
    },
    {
     "kind": "word",
     "of": null
    }
   ]
  },
  "STAB": {
   "word": "STAB",
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
    },
    {
     "kind": "noun",
     "of": "LAMP"
    },
    {
     "kind": "noun",
     "of": "BROKEN-LAMP"
    },
    {
     "kind": "noun",
     "of": "CURTAIN"
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
    },
    {
     "kind": "particle",
     "of": "PUT"
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
  "ODYSSEUS": {
   "word": "ODYSSEUS",
   "roles": [
    {
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
    }
   ]
  },
  "PUNCTURE": {
   "word": "PUNCTURE",
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
  "TALK": {
   "word": "TALK",
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
  "SEARCH": {
   "word": "SEARCH",
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
  "TREASURE": {
   "word": "TREASURE",
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
     "of": "STATUETTE"
    },
    {
     "kind": "noun",
     "of": "COLLAR"
    },
    {
     "kind": "noun",
     "of": "CROWN"
    },
    {
     "kind": "noun",
     "of": "VIOLIN"
    },
    {
     "kind": "noun",
     "of": "PEARL"
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
     "of": "RUBY"
    },
    {
     "kind": "noun",
     "of": "CANDY"
    },
    {
     "kind": "noun",
     "of": "BILLS"
    },
    {
     "kind": "noun",
     "of": "PORTRAIT"
    },
    {
     "kind": "noun",
     "of": "GOLD-KEY"
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
  "WEAR": {
   "word": "WEAR",
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
  "WISH": {
   "word": "WISH",
   "roles": [
    {
     "kind": "verb",
     "of": null
    },
    {
     "kind": "noun",
     "of": "WISH"
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
     "kind": "adjective",
     "of": "MATCH"
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
     "of": "NORTH-WALL"
    },
    {
     "kind": "adjective",
     "of": "SNWL"
    },
    {
     "kind": "adjective",
     "of": "CRYPT-DOOR"
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
     "of": "SOUTH-WALL"
    },
    {
     "kind": "adjective",
     "of": "SSWL"
    },
    {
     "kind": "adjective",
     "of": "DIM-DOOR"
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
     "of": "EAST-WALL"
    },
    {
     "kind": "adjective",
     "of": "SEWL"
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
     "of": "WEST-WALL"
    },
    {
     "kind": "adjective",
     "of": "SWWL"
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
     "of": "NORTH-WALL"
    },
    {
     "kind": "adjective",
     "of": "SNWL"
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
     "of": "SOUTH-WALL"
    },
    {
     "kind": "adjective",
     "of": "SSWL"
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
  "CLEAN": {
   "word": "CLEAN",
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
     "kind": "direction-synonym",
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
  "TAUNT": {
   "word": "TAUNT",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "KICK"
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
  "OIL": {
   "word": "OIL",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "LUBRICATE"
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
  "LIQUIFY": {
   "word": "LIQUIFY",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "MELT"
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
  "ULYSSES": {
   "word": "ULYSSES",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "ODYSSEUS"
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
  "TEMPLE": {
   "word": "TEMPLE",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TREASURE"
    }
   ]
  },
  "SET": {
   "word": "SET",
   "roles": [
    {
     "kind": "word-synonym",
     "of": "TURN"
    },
    {
     "kind": "noun",
     "of": "WANDS"
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
  "LAND": {
   "word": "LAND",
   "roles": [
    {
     "kind": "direction",
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
  "STREAM": {
   "word": "STREAM",
   "roles": [
    {
     "kind": "noun",
     "of": "STREAM"
    }
   ]
  },
  "FLOWING": {
   "word": "FLOWING",
   "roles": [
    {
     "kind": "adjective",
     "of": "STREAM"
    }
   ]
  },
  "SMALL": {
   "word": "SMALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "STREAM"
    },
    {
     "kind": "adjective",
     "of": "ARCANA"
    },
    {
     "kind": "adjective",
     "of": "TROPHY-BOTTLES"
    },
    {
     "kind": "adjective",
     "of": "HOOK-2"
    },
    {
     "kind": "adjective",
     "of": "HOOK-1"
    },
    {
     "kind": "adjective",
     "of": "BANK-BROCHURE"
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
  "MOSS": {
   "word": "MOSS",
   "roles": [
    {
     "kind": "noun",
     "of": "MOSS"
    }
   ]
  },
  "MOSSES": {
   "word": "MOSSES",
   "roles": [
    {
     "kind": "noun",
     "of": "MOSS"
    }
   ]
  },
  "GLOWING": {
   "word": "GLOWING",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOSS"
    },
    {
     "kind": "adjective",
     "of": "DWINDOW"
    }
   ]
  },
  "PHOSPHORESCENT": {
   "word": "PHOSPHORESCENT",
   "roles": [
    {
     "kind": "adjective",
     "of": "MOSS"
    }
   ]
  },
  "ROSES": {
   "word": "ROSES",
   "roles": [
    {
     "kind": "noun",
     "of": "ROSE-BUSH"
    }
   ]
  },
  "BUSH": {
   "word": "BUSH",
   "roles": [
    {
     "kind": "noun",
     "of": "ROSE-BUSH"
    }
   ]
  },
  "ARBOR": {
   "word": "ARBOR",
   "roles": [
    {
     "kind": "noun",
     "of": "ROSE-BUSH"
    }
   ]
  },
  "ROSE": {
   "word": "ROSE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROSE-BUSH"
    },
    {
     "kind": "noun",
     "of": "ROSE"
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
  "STONE": {
   "word": "STONE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRIDGE"
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
     "of": "RIDDLE-DOOR"
    },
    {
     "kind": "adjective",
     "of": "CUBE"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
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
     "of": "CHEST"
    },
    {
     "kind": "adjective",
     "of": "WIZ-DOOR"
    },
    {
     "kind": "adjective",
     "of": "BAT"
    },
    {
     "kind": "adjective",
     "of": "WORKBENCH"
    },
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
     "of": "GAZEBO"
    }
   ]
  },
  "RICKETY": {
   "word": "RICKETY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BRIDGE"
    }
   ]
  },
  "PASSAGE": {
   "word": "PASSAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "TUNNEL"
    }
   ]
  },
  "TUNNEL": {
   "word": "TUNNEL",
   "roles": [
    {
     "kind": "noun",
     "of": "TUNNEL"
    }
   ]
  },
  "CRAWLWAY": {
   "word": "CRAWLWAY",
   "roles": [
    {
     "kind": "noun",
     "of": "TUNNEL"
    }
   ]
  },
  "DARK": {
   "word": "DARK",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUNNEL"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "SMOKY": {
   "word": "SMOKY",
   "roles": [
    {
     "kind": "adjective",
     "of": "TUNNEL"
    }
   ]
  },
  "WALL": {
   "word": "WALL",
   "roles": [
    {
     "kind": "noun",
     "of": "EAST-WALL"
    },
    {
     "kind": "noun",
     "of": "SOUTH-WALL"
    },
    {
     "kind": "noun",
     "of": "WEST-WALL"
    },
    {
     "kind": "noun",
     "of": "NORTH-WALL"
    },
    {
     "kind": "noun",
     "of": "SEWL"
    },
    {
     "kind": "noun",
     "of": "SWWL"
    },
    {
     "kind": "noun",
     "of": "SSWL"
    },
    {
     "kind": "noun",
     "of": "SNWL"
    },
    {
     "kind": "noun",
     "of": "TOP-ETCHINGS"
    },
    {
     "kind": "noun",
     "of": "BOTTOM-ETCHINGS"
    }
   ]
  },
  "EASTERN": {
   "word": "EASTERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "EAST-WALL"
    },
    {
     "kind": "adjective",
     "of": "SEWL"
    }
   ]
  },
  "WESTERN": {
   "word": "WESTERN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WEST-WALL"
    },
    {
     "kind": "adjective",
     "of": "SWWL"
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
    },
    {
     "kind": "noun",
     "of": "SALTY-WATER"
    }
   ]
  },
  "QUANTITY": {
   "word": "QUANTITY",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WATER"
    },
    {
     "kind": "noun",
     "of": "WATER"
    },
    {
     "kind": "noun",
     "of": "SALTY-WATER"
    }
   ]
  },
  "BLESS": {
   "word": "BLESS",
   "roles": [
    {
     "kind": "noun",
     "of": "WISH"
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
    },
    {
     "kind": "adjective",
     "of": "REPELLENT"
    }
   ]
  },
  "UNICORN": {
   "word": "UNICORN",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-UNICORN"
    },
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
     "of": "GLOBAL-UNICORN"
    },
    {
     "kind": "adjective",
     "of": "UNICORN"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PRINCESS"
    },
    {
     "kind": "adjective",
     "of": "PRINCESS"
    },
    {
     "kind": "adjective",
     "of": "ROSE"
    }
   ]
  },
  "WHITE": {
   "word": "WHITE",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-UNICORN"
    },
    {
     "kind": "adjective",
     "of": "UNICORN"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-3"
    },
    {
     "kind": "adjective",
     "of": "WHITE-BOOK"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PALANTIR"
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
  "OLD": {
   "word": "OLD",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHEST"
    },
    {
     "kind": "adjective",
     "of": "WIZARD"
    },
    {
     "kind": "adjective",
     "of": "SWORD"
    }
   ]
  },
  "ROTTEN": {
   "word": "ROTTEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "CHEST"
    }
   ]
  },
  "STATUETTE": {
   "word": "STATUETTE",
   "roles": [
    {
     "kind": "noun",
     "of": "STATUETTE"
    }
   ]
  },
  "DRAGON": {
   "word": "DRAGON",
   "roles": [
    {
     "kind": "noun",
     "of": "STATUETTE"
    },
    {
     "kind": "noun",
     "of": "DRAGON"
    },
    {
     "kind": "noun",
     "of": "DEAD-DRAGON"
    }
   ]
  },
  "GOLD": {
   "word": "GOLD",
   "roles": [
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
    },
    {
     "kind": "adjective",
     "of": "GOLD-KEY"
    }
   ]
  },
  "SMAUG": {
   "word": "SMAUG",
   "roles": [
    {
     "kind": "noun",
     "of": "DRAGON"
    },
    {
     "kind": "noun",
     "of": "DEAD-DRAGON"
    }
   ]
  },
  "WORM": {
   "word": "WORM",
   "roles": [
    {
     "kind": "noun",
     "of": "DRAGON"
    },
    {
     "kind": "noun",
     "of": "DEAD-DRAGON"
    }
   ]
  },
  "RED": {
   "word": "RED",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    },
    {
     "kind": "adjective",
     "of": "DEAD-DRAGON"
    },
    {
     "kind": "adjective",
     "of": "PALANTIR-1"
    },
    {
     "kind": "adjective",
     "of": "RED-ICING"
    },
    {
     "kind": "adjective",
     "of": "ROSE"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "HUGE": {
   "word": "HUGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "DRAGON"
    },
    {
     "kind": "adjective",
     "of": "DEAD-DRAGON"
    },
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
     "of": "AQUARIUM"
    }
   ]
  },
  "DEAD": {
   "word": "DEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEAD-DRAGON"
    },
    {
     "kind": "adjective",
     "of": "DEAD-SERPENT"
    }
   ]
  },
  "PRINCESS": {
   "word": "PRINCESS",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-PRINCESS"
    },
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
     "of": "GLOBAL-PRINCESS"
    },
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
     "of": "GLOBAL-PRINCESS"
    },
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
     "of": "GLOBAL-PRINCESS"
    },
    {
     "kind": "adjective",
     "of": "PRINCESS"
    }
   ]
  },
  "DOOR": {
   "word": "DOOR",
   "roles": [
    {
     "kind": "noun",
     "of": "WIZ-DOOR"
    },
    {
     "kind": "noun",
     "of": "CRYPT-DOOR"
    },
    {
     "kind": "noun",
     "of": "DIM-DOOR"
    },
    {
     "kind": "noun",
     "of": "RIDDLE-DOOR"
    },
    {
     "kind": "noun",
     "of": "PDOOR"
    }
   ]
  },
  "COBWEBBED": {
   "word": "COBWEBBED",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIZ-DOOR"
    }
   ]
  },
  "OAK": {
   "word": "OAK",
   "roles": [
    {
     "kind": "adjective",
     "of": "WIZ-DOOR"
    },
    {
     "kind": "adjective",
     "of": "PDOOR"
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
    },
    {
     "kind": "adjective",
     "of": "WORKBENCH"
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
    },
    {
     "kind": "adjective",
     "of": "DIM-DOOR"
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
  "CLUB": {
   "word": "CLUB",
   "roles": [
    {
     "kind": "noun",
     "of": "BAT"
    }
   ]
  },
  "BAT": {
   "word": "BAT",
   "roles": [
    {
     "kind": "noun",
     "of": "BAT"
    }
   ]
  },
  "BASEBALL": {
   "word": "BASEBALL",
   "roles": [
    {
     "kind": "adjective",
     "of": "BAT"
    }
   ]
  },
  "WINDOW": {
   "word": "WINDOW",
   "roles": [
    {
     "kind": "noun",
     "of": "DWINDOW"
    },
    {
     "kind": "noun",
     "of": "PWINDOW"
    }
   ]
  },
  "DIAMOND": {
   "word": "DIAMOND",
   "roles": [
    {
     "kind": "adjective",
     "of": "DWINDOW"
    },
    {
     "kind": "adjective",
     "of": "STAND-3"
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
     "of": "CRYPT"
    }
   ]
  },
  "CRYPT": {
   "word": "CRYPT",
   "roles": [
    {
     "kind": "noun",
     "of": "CRYPT"
    },
    {
     "kind": "adjective",
     "of": "CRYPT-DOOR"
    }
   ]
  },
  "GRAVE": {
   "word": "GRAVE",
   "roles": [
    {
     "kind": "noun",
     "of": "CRYPT"
    }
   ]
  },
  "MARBLE": {
   "word": "MARBLE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CRYPT"
    },
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "LETTER": {
   "word": "LETTER",
   "roles": [
    {
     "kind": "noun",
     "of": "DIM-DOOR"
    },
    {
     "kind": "noun",
     "of": "EAT-ME-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-ICING"
    },
    {
     "kind": "noun",
     "of": "ORANGE-ICING"
    },
    {
     "kind": "noun",
     "of": "RED-ICING"
    },
    {
     "kind": "noun",
     "of": "CUBE"
    },
    {
     "kind": "adjective",
     "of": "LETTER-OPENER"
    }
   ]
  },
  "DIMLY": {
   "word": "DIMLY",
   "roles": [
    {
     "kind": "adjective",
     "of": "DIM-DOOR"
    }
   ]
  },
  "SECRET": {
   "word": "SECRET",
   "roles": [
    {
     "kind": "adjective",
     "of": "DIM-DOOR"
    }
   ]
  },
  "KEEPER": {
   "word": "KEEPER",
   "roles": [
    {
     "kind": "noun",
     "of": "DOOR-KEEPER"
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
  "ALEMBIC": {
   "word": "ALEMBIC",
   "roles": [
    {
     "kind": "noun",
     "of": "ARCANA"
    }
   ]
  },
  "VELLUM": {
   "word": "VELLUM",
   "roles": [
    {
     "kind": "noun",
     "of": "ARCANA"
    }
   ]
  },
  "CANDLES": {
   "word": "CANDLES",
   "roles": [
    {
     "kind": "noun",
     "of": "ARCANA"
    }
   ]
  },
  "KNIVES": {
   "word": "KNIVES",
   "roles": [
    {
     "kind": "noun",
     "of": "ARCANA"
    }
   ]
  },
  "WAX": {
   "word": "WAX",
   "roles": [
    {
     "kind": "adjective",
     "of": "ARCANA"
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
  "TABLE": {
   "word": "TABLE",
   "roles": [
    {
     "kind": "noun",
     "of": "WORKBENCH"
    },
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
  "WIZARD": {
   "word": "WIZARD",
   "roles": [
    {
     "kind": "adjective",
     "of": "WORKBENCH"
    },
    {
     "kind": "adjective",
     "of": "GLOBAL-WIZARD-CASE"
    },
    {
     "kind": "adjective",
     "of": "WIZARD-CASE"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-CASE"
    },
    {
     "kind": "noun",
     "of": "WIZARD"
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
     "of": "PALANTIR-3"
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
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "RUBY": {
   "word": "RUBY",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAND-1"
    },
    {
     "kind": "noun",
     "of": "RUBY"
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
  "OBSIDIAN": {
   "word": "OBSIDIAN",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAND-4"
    }
   ]
  },
  "BLACK": {
   "word": "BLACK",
   "roles": [
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
    },
    {
     "kind": "adjective",
     "of": "FUSE"
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
    },
    {
     "kind": "adjective",
     "of": "WIZARD"
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
     "of": "PALANTIR-3"
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
     "of": "GLOBAL-PALANTIR"
    }
   ]
  },
  "BALL": {
   "word": "BALL",
   "roles": [
    {
     "kind": "noun",
     "of": "PALANTIR-4"
    },
    {
     "kind": "noun",
     "of": "PALANTIR-1"
    }
   ]
  },
  "PALANTIR": {
   "word": "PALANTIR",
   "roles": [
    {
     "kind": "noun",
     "of": "PALANTIR-4"
    },
    {
     "kind": "noun",
     "of": "PALANTIR-3"
    },
    {
     "kind": "noun",
     "of": "PALANTIR-1"
    },
    {
     "kind": "noun",
     "of": "PALANTIR-2"
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
  "WAND": {
   "word": "WAND",
   "roles": [
    {
     "kind": "noun",
     "of": "WANDS"
    },
    {
     "kind": "noun",
     "of": "WAND"
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
  "WORN": {
   "word": "WORN",
   "roles": [
    {
     "kind": "adjective",
     "of": "WANDS"
    },
    {
     "kind": "adjective",
     "of": "BANK-BROCHURE"
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
  "SWORD": {
   "word": "SWORD",
   "roles": [
    {
     "kind": "noun",
     "of": "TROPHY-SWORD"
    },
    {
     "kind": "noun",
     "of": "SWORD"
    }
   ]
  },
  "SWORDS": {
   "word": "SWORDS",
   "roles": [
    {
     "kind": "noun",
     "of": "TROPHY-SWORD"
    }
   ]
  },
  "DULL": {
   "word": "DULL",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROPHY-SWORD"
    }
   ]
  },
  "NICKED": {
   "word": "NICKED",
   "roles": [
    {
     "kind": "adjective",
     "of": "TROPHY-SWORD"
    }
   ]
  },
  "BOTTLE": {
   "word": "BOTTLE",
   "roles": [
    {
     "kind": "noun",
     "of": "TROPHY-BOTTLES"
    }
   ]
  },
  "LABEL": {
   "word": "LABEL",
   "roles": [
    {
     "kind": "noun",
     "of": "WARNING-LABEL"
    },
    {
     "kind": "noun",
     "of": "BALLOON-LABEL"
    }
   ]
  },
  "WARNING": {
   "word": "WARNING",
   "roles": [
    {
     "kind": "adjective",
     "of": "WARNING-LABEL"
    }
   ]
  },
  "CASE": {
   "word": "CASE",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WIZARD-CASE"
    },
    {
     "kind": "noun",
     "of": "WIZARD-CASE"
    },
    {
     "kind": "noun",
     "of": "BROKEN-CASE"
    }
   ]
  },
  "CABINET": {
   "word": "CABINET",
   "roles": [
    {
     "kind": "noun",
     "of": "GLOBAL-WIZARD-CASE"
    },
    {
     "kind": "noun",
     "of": "WIZARD-CASE"
    },
    {
     "kind": "noun",
     "of": "BROKEN-CASE"
    }
   ]
  },
  "TROPHY": {
   "word": "TROPHY",
   "roles": [
    {
     "kind": "adjective",
     "of": "GLOBAL-WIZARD-CASE"
    },
    {
     "kind": "adjective",
     "of": "WIZARD-CASE"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-CASE"
    }
   ]
  },
  "BROKEN": {
   "word": "BROKEN",
   "roles": [
    {
     "kind": "adjective",
     "of": "BROKEN-CASE"
    },
    {
     "kind": "adjective",
     "of": "DEAD-BALLOON"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-LAMP"
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
  "GREAT": {
   "word": "GREAT",
   "roles": [
    {
     "kind": "adjective",
     "of": "PENTAGRAM"
    },
    {
     "kind": "adjective",
     "of": "RIDDLE-DOOR"
    }
   ]
  },
  "CHALK": {
   "word": "CHALK",
   "roles": [
    {
     "kind": "adjective",
     "of": "PENTAGRAM"
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
    },
    {
     "kind": "adjective",
     "of": "FLASK"
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
  "GNOME": {
   "word": "GNOME",
   "roles": [
    {
     "kind": "noun",
     "of": "GNOME"
    },
    {
     "kind": "noun",
     "of": "GNOME-OF-ZURICH"
    }
   ]
  },
  "VOLCANO": {
   "word": "VOLCANO",
   "roles": [
    {
     "kind": "adjective",
     "of": "GNOME"
    }
   ]
  },
  "BALLOON": {
   "word": "BALLOON",
   "roles": [
    {
     "kind": "noun",
     "of": "BALLOON"
    },
    {
     "kind": "noun",
     "of": "DEAD-BALLOON"
    }
   ]
  },
  "BASKET": {
   "word": "BASKET",
   "roles": [
    {
     "kind": "noun",
     "of": "BALLOON"
    },
    {
     "kind": "noun",
     "of": "DEAD-BALLOON"
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
  "BLUE": {
   "word": "BLUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "BALLOON-LABEL"
    },
    {
     "kind": "adjective",
     "of": "BLUE-ICING"
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
    },
    {
     "kind": "noun",
     "of": "IRON-BOX"
    },
    {
     "kind": "noun",
     "of": "DEPOSIT-BOX"
    }
   ]
  },
  "STEEL": {
   "word": "STEEL",
   "roles": [
    {
     "kind": "adjective",
     "of": "SAFE"
    },
    {
     "kind": "adjective",
     "of": "MANGLED-CAGE"
    },
    {
     "kind": "adjective",
     "of": "IRON-BOX"
    },
    {
     "kind": "adjective",
     "of": "CAGE"
    }
   ]
  },
  "RUSTY": {
   "word": "RUSTY",
   "roles": [
    {
     "kind": "adjective",
     "of": "SAFE"
    },
    {
     "kind": "adjective",
     "of": "KEY"
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
    },
    {
     "kind": "adjective",
     "of": "SQUARE-BUTTON"
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
  "KREBF": {
   "word": "KREBF",
   "roles": [
    {
     "kind": "noun",
     "of": "EXPLOSION"
    }
   ]
  },
  "BUTTON": {
   "word": "BUTTON",
   "roles": [
    {
     "kind": "noun",
     "of": "ROUND-BUTTON"
    },
    {
     "kind": "noun",
     "of": "SQUARE-BUTTON"
    },
    {
     "kind": "noun",
     "of": "TRIANGULAR-BUTTON"
    }
   ]
  },
  "ROUND": {
   "word": "ROUND",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROUND-BUTTON"
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
  "COLD": {
   "word": "COLD",
   "roles": [
    {
     "kind": "adjective",
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
  "FLASK": {
   "word": "FLASK",
   "roles": [
    {
     "kind": "noun",
     "of": "FLASK"
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
     "of": "BANK-BROCHURE"
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
    },
    {
     "kind": "noun",
     "of": "BANK-BROCHURE"
    }
   ]
  },
  "INSTRUCTIONS": {
   "word": "INSTRUCTIONS",
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
     "of": "EAT-ME-CAKE"
    },
    {
     "kind": "adjective",
     "of": "GREEN-BOOK"
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
  "HOLE": {
   "word": "HOLE",
   "roles": [
    {
     "kind": "noun",
     "of": "SLOT"
    },
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
  "HOOK": {
   "word": "HOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "HOOK-2"
    },
    {
     "kind": "noun",
     "of": "HOOK-1"
    }
   ]
  },
  "LAMP": {
   "word": "LAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "LAMP"
    },
    {
     "kind": "noun",
     "of": "BROKEN-LAMP"
    }
   ]
  },
  "LANTERN": {
   "word": "LANTERN",
   "roles": [
    {
     "kind": "noun",
     "of": "LAMP"
    },
    {
     "kind": "noun",
     "of": "BROKEN-LAMP"
    }
   ]
  },
  "BRASS": {
   "word": "BRASS",
   "roles": [
    {
     "kind": "adjective",
     "of": "LAMP"
    },
    {
     "kind": "adjective",
     "of": "BROKEN-LAMP"
    }
   ]
  },
  "LARGE": {
   "word": "LARGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ALICE-TABLE"
    },
    {
     "kind": "adjective",
     "of": "LEAK"
    },
    {
     "kind": "adjective",
     "of": "POOL"
    },
    {
     "kind": "adjective",
     "of": "CUBE"
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
  "CAGE": {
   "word": "CAGE",
   "roles": [
    {
     "kind": "noun",
     "of": "MANGLED-CAGE"
    },
    {
     "kind": "noun",
     "of": "CAGE"
    }
   ]
  },
  "MANGLED": {
   "word": "MANGLED",
   "roles": [
    {
     "kind": "adjective",
     "of": "MANGLED-CAGE"
    }
   ]
  },
  "NECKLACE": {
   "word": "NECKLACE",
   "roles": [
    {
     "kind": "noun",
     "of": "PEARL"
    }
   ]
  },
  "PEARLS": {
   "word": "PEARLS",
   "roles": [
    {
     "kind": "noun",
     "of": "PEARL"
    }
   ]
  },
  "PEARL": {
   "word": "PEARL",
   "roles": [
    {
     "kind": "adjective",
     "of": "PEARL"
    }
   ]
  },
  "CAKE": {
   "word": "CAKE",
   "roles": [
    {
     "kind": "noun",
     "of": "EAT-ME-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-ICING"
    },
    {
     "kind": "noun",
     "of": "ORANGE-ICING"
    },
    {
     "kind": "noun",
     "of": "RED-ICING"
    }
   ]
  },
  "ICING": {
   "word": "ICING",
   "roles": [
    {
     "kind": "noun",
     "of": "EAT-ME-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-ICING"
    },
    {
     "kind": "noun",
     "of": "ORANGE-ICING"
    },
    {
     "kind": "noun",
     "of": "RED-ICING"
    }
   ]
  },
  "CAKES": {
   "word": "CAKES",
   "roles": [
    {
     "kind": "noun",
     "of": "EAT-ME-CAKE"
    },
    {
     "kind": "noun",
     "of": "BLUE-ICING"
    },
    {
     "kind": "noun",
     "of": "ORANGE-ICING"
    },
    {
     "kind": "noun",
     "of": "RED-ICING"
    }
   ]
  },
  "FROSTED": {
   "word": "FROSTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "EAT-ME-CAKE"
    },
    {
     "kind": "adjective",
     "of": "BLUE-ICING"
    },
    {
     "kind": "adjective",
     "of": "ORANGE-ICING"
    },
    {
     "kind": "adjective",
     "of": "RED-ICING"
    }
   ]
  },
  "ORANGE": {
   "word": "ORANGE",
   "roles": [
    {
     "kind": "adjective",
     "of": "ORANGE-ICING"
    }
   ]
  },
  "LEAK": {
   "word": "LEAK",
   "roles": [
    {
     "kind": "noun",
     "of": "LEAK"
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
  "TEARS": {
   "word": "TEARS",
   "roles": [
    {
     "kind": "noun",
     "of": "POOL"
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
  "ZORKMID": {
   "word": "ZORKMID",
   "roles": [
    {
     "kind": "noun",
     "of": "COIN"
    },
    {
     "kind": "adjective",
     "of": "BILLS"
    },
    {
     "kind": "noun",
     "of": "ZORKMID"
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
  "STAMP": {
   "word": "STAMP",
   "roles": [
    {
     "kind": "noun",
     "of": "STAMP"
    }
   ]
  },
  "FLATHEAD": {
   "word": "FLATHEAD",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAMP"
    },
    {
     "kind": "adjective",
     "of": "PORTRAIT"
    }
   ]
  },
  "BOOK": {
   "word": "BOOK",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-BOOK"
    },
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
  "COVER": {
   "word": "COVER",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-BOOK"
    },
    {
     "kind": "noun",
     "of": "BLUE-BOOK"
    },
    {
     "kind": "noun",
     "of": "WHITE-BOOK"
    }
   ]
  },
  "BOOKS": {
   "word": "BOOKS",
   "roles": [
    {
     "kind": "noun",
     "of": "GREEN-BOOK"
    },
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
  "HANDSOME": {
   "word": "HANDSOME",
   "roles": [
    {
     "kind": "adjective",
     "of": "GREEN-BOOK"
    }
   ]
  },
  "LEATHER": {
   "word": "LEATHER",
   "roles": [
    {
     "kind": "adjective",
     "of": "GREEN-BOOK"
    }
   ]
  },
  "GLOSSY": {
   "word": "GLOSSY",
   "roles": [
    {
     "kind": "adjective",
     "of": "WHITE-BOOK"
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
    },
    {
     "kind": "adjective",
     "of": "LID-1"
    },
    {
     "kind": "adjective",
     "of": "LID-2"
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
  "R2D2": {
   "word": "R2D2",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT"
    }
   ]
  },
  "C3PO": {
   "word": "C3PO",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT"
    }
   ]
  },
  "ROBBY": {
   "word": "ROBBY",
   "roles": [
    {
     "kind": "noun",
     "of": "ROBOT"
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
  "DENTED": {
   "word": "DENTED",
   "roles": [
    {
     "kind": "adjective",
     "of": "IRON-BOX"
    }
   ]
  },
  "SOLID": {
   "word": "SOLID",
   "roles": [
    {
     "kind": "adjective",
     "of": "CAGE"
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
  "GRASSHOPPERS": {
   "word": "GRASSHOPPERS",
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
  "RARE": {
   "word": "RARE",
   "roles": [
    {
     "kind": "adjective",
     "of": "CANDY"
    }
   ]
  },
  "ETCHINGS": {
   "word": "ETCHINGS",
   "roles": [
    {
     "kind": "noun",
     "of": "TOP-ETCHINGS"
    },
    {
     "kind": "noun",
     "of": "BOTTOM-ETCHINGS"
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
  "THIN": {
   "word": "THIN",
   "roles": [
    {
     "kind": "adjective",
     "of": "FUSE"
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
  "MANY": {
   "word": "MANY",
   "roles": [
    {
     "kind": "adjective",
     "of": "BILLS"
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
  "ART": {
   "word": "ART",
   "roles": [
    {
     "kind": "noun",
     "of": "PORTRAIT"
    }
   ]
  },
  "BROCHURE": {
   "word": "BROCHURE",
   "roles": [
    {
     "kind": "noun",
     "of": "BANK-BROCHURE"
    }
   ]
  },
  "BANK": {
   "word": "BANK",
   "roles": [
    {
     "kind": "adjective",
     "of": "BANK-BROCHURE"
    }
   ]
  },
  "VAULT": {
   "word": "VAULT",
   "roles": [
    {
     "kind": "noun",
     "of": "CUBE"
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
  "CURTAIN": {
   "word": "CURTAIN",
   "roles": [
    {
     "kind": "noun",
     "of": "CURTAIN"
    }
   ]
  },
  "SHIMMERING": {
   "word": "SHIMMERING",
   "roles": [
    {
     "kind": "adjective",
     "of": "CURTAIN"
    }
   ]
  },
  "ZURICH": {
   "word": "ZURICH",
   "roles": [
    {
     "kind": "noun",
     "of": "GNOME-OF-ZURICH"
    },
    {
     "kind": "adjective",
     "of": "GNOME-OF-ZURICH"
    }
   ]
  },
  "DEPOSIT": {
   "word": "DEPOSIT",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEPOSIT-BOX"
    }
   ]
  },
  "SAFETY": {
   "word": "SAFETY",
   "roles": [
    {
     "kind": "adjective",
     "of": "DEPOSIT-BOX"
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
  "LID": {
   "word": "LID",
   "roles": [
    {
     "kind": "noun",
     "of": "LID-1"
    },
    {
     "kind": "noun",
     "of": "LID-2"
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
     "of": "PATHOBJ"
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
  "OPENER": {
   "word": "OPENER",
   "roles": [
    {
     "kind": "noun",
     "of": "LETTER-OPENER"
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
  "GAZEBO": {
   "word": "GAZEBO",
   "roles": [
    {
     "kind": "noun",
     "of": "GAZEBO"
    }
   ]
  },
  "STRUCTURE": {
   "word": "STRUCTURE",
   "roles": [
    {
     "kind": "noun",
     "of": "GAZEBO"
    }
   ]
  },
  "TEA": {
   "word": "TEA",
   "roles": [
    {
     "kind": "adjective",
     "of": "GAZEBO-TABLE"
    },
    {
     "kind": "adjective",
     "of": "TEAPOT"
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
  "LIQUID": {
   "word": "LIQUID",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
    },
    {
     "kind": "noun",
     "of": "SALTY-WATER"
    }
   ]
  },
  "H2O": {
   "word": "H2O",
   "roles": [
    {
     "kind": "noun",
     "of": "WATER"
    },
    {
     "kind": "noun",
     "of": "SALTY-WATER"
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
  "PERFECT": {
   "word": "PERFECT",
   "roles": [
    {
     "kind": "adjective",
     "of": "ROSE"
    }
   ]
  },
  "DEVIL": {
   "word": "DEVIL",
   "roles": [
    {
     "kind": "noun",
     "of": "GENIE"
    }
   ]
  },
  "DEMON": {
   "word": "DEMON",
   "roles": [
    {
     "kind": "noun",
     "of": "GENIE"
    }
   ]
  },
  "GENIE": {
   "word": "GENIE",
   "roles": [
    {
     "kind": "noun",
     "of": "GENIE"
    }
   ]
  },
  "DJINN": {
   "word": "DJINN",
   "roles": [
    {
     "kind": "noun",
     "of": "GENIE"
    }
   ]
  },
  "MAGICIAN": {
   "word": "MAGICIAN",
   "roles": [
    {
     "kind": "noun",
     "of": "WIZARD"
    }
   ]
  },
  "SORCEROR": {
   "word": "SORCEROR",
   "roles": [
    {
     "kind": "noun",
     "of": "WIZARD"
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
  "ORCRIST": {
   "word": "ORCRIST",
   "roles": [
    {
     "kind": "noun",
     "of": "SWORD"
    }
   ]
  },
  "GLAMDRING": {
   "word": "GLAMDRING",
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
  "ANTIQUE": {
   "word": "ANTIQUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "SWORD"
    }
   ]
  },
  "REPELLENT": {
   "word": "REPELLENT",
   "roles": [
    {
     "kind": "noun",
     "of": "REPELLENT"
    }
   ]
  },
  "CAN": {
   "word": "CAN",
   "roles": [
    {
     "kind": "noun",
     "of": "REPELLENT"
    }
   ]
  },
  "GRUE": {
   "word": "GRUE",
   "roles": [
    {
     "kind": "adjective",
     "of": "REPELLENT"
    },
    {
     "kind": "noun",
     "of": "GRUE"
    }
   ]
  },
  "FOOTPAD": {
   "word": "FOOTPAD",
   "roles": [
    {
     "kind": "noun",
     "of": "FOOTPAD"
    },
    {
     "kind": "noun",
     "of": "SAILOR"
    }
   ]
  },
  "COMPASS": {
   "word": "COMPASS",
   "roles": [
    {
     "kind": "noun",
     "of": "COMPASS"
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
  "BLESSINGS": {
   "word": "BLESSINGS",
   "roles": [
    {
     "kind": "noun",
     "of": "BLESSINGS"
    }
   ]
  },
  "GRACES": {
   "word": "GRACES",
   "roles": [
    {
     "kind": "noun",
     "of": "BLESSINGS"
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
  "STAIRCASE": {
   "word": "STAIRCASE",
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
  "FORBIDDING": {
   "word": "FORBIDDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "STEEP": {
   "word": "STEEP",
   "roles": [
    {
     "kind": "adjective",
     "of": "STAIRS"
    }
   ]
  },
  "SAILOR": {
   "word": "SAILOR",
   "roles": [
    {
     "kind": "noun",
     "of": "SAILOR"
    }
   ]
  },
  "AVIATOR": {
   "word": "AVIATOR",
   "roles": [
    {
     "kind": "noun",
     "of": "SAILOR"
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
  "SAND": {
   "word": "SAND",
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
  "LUNGS": {
   "word": "LUNGS",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
    }
   ]
  },
  "AIR": {
   "word": "AIR",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
    }
   ]
  },
  "MOUTH": {
   "word": "MOUTH",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
    }
   ]
  },
  "BREATH": {
   "word": "BREATH",
   "roles": [
    {
     "kind": "noun",
     "of": "LUNGS"
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
  "CRETIN": {
   "word": "CRETIN",
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
  "TRAIL": {
   "word": "TRAIL",
   "roles": [
    {
     "kind": "noun",
     "of": "PATHOBJ"
    }
   ]
  },
  "PATH": {
   "word": "PATH",
   "roles": [
    {
     "kind": "noun",
     "of": "PATHOBJ"
    }
   ]
  },
  "FOREST": {
   "word": "FOREST",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATHOBJ"
    }
   ]
  },
  "LONG": {
   "word": "LONG",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATHOBJ"
    }
   ]
  },
  "WINDING": {
   "word": "WINDING",
   "roles": [
    {
     "kind": "adjective",
     "of": "PATHOBJ"
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
  }
 },
 "files": [
  "2actions.zil",
  "2dungeon.zil",
  "crufty.zil",
  "gclock.zil",
  "gglobals.zil",
  "gmacros.zil",
  "gmain.zil",
  "gparser.zil",
  "gsyntax.zil",
  "gverbs.zil",
  "zork2.zil"
 ]
};
