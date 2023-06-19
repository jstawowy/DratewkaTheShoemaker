var data = [
    [
        {
            opis: "You are inside a brimstone mine",
            obrazek: "data/img/11.gif",
            kolor: "rgb(235,211,64)",
            mozliwosci: "EAST",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "a SPADE",
                        flaga: 1,
                        nazwa: "SPADE"
                    },
                    effect: {
                        odmieniona_nazwa: "SULPHUR",
                        flaga: 1,
                        nazwa: "SULPHUR"
                    },
                    komunikat: "You are digging... (timeout) and digging... (timeout) That's enough sulphur for you",
                    l: false, milestone: false
                }
            ]
        },
        {
            opis: "You are at the entrance to the mine",
            obrazek: "data/img/12.gif",
            kolor: "rgb(89,93,87)",
            mozliwosci: "EAST, WEST"
        },
        {
            opis: "A hill",
            obrazek: "data/img/13.gif",
            kolor: "rgb(117,237,243)",
            mozliwosci: "EAST, WEST, SOUTH",
            itemy: [
                {
                    odmieniona_nazwa: "a STONE",
                    flaga: 1,
                    nazwa: "STONE"
                }
            ]
        },
        {
            opis: "Some bushes",
            obrazek: "data/img/14.gif",
            kolor: "rgb(202,230,51)",
            mozliwosci: "EAST, WEST"
        },
        {
            opis: "An old deserted hut",
            obrazek: "data/img/15.gif",
            kolor: "rgb(220,204,61)",
            mozliwosci: "EAST, WEST",
            itemy: [
                {
                    odmieniona_nazwa: "a BUCKET",
                    flaga: 1,
                    nazwa: "BUCKET"
                }
            ]
        },
        {
            opis: "The edge of a forest",
            obrazek: "data/img/16.gif",
            kolor: "rgb(167,245,63)",
            mozliwosci: "EAST, WEST"
        },
        {
            opis: "A dark forest",
            obrazek: "data/img/17.gif",
            kolor: "rgb(140,253,99)\")",
            mozliwosci: "WEST, SOUTH",
            itemy: [
                {
                    odmieniona_nazwa: "MUSHROOMS",
                    flaga: 1,
                    nazwa: "MUSHROOMS"
                }
            ]
        }
    ],
    [
        {
            opis: "A man nearby making tar",
            obrazek: "data/img/21.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "EAST, SOUTH",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "a BUCKET",
                        flaga: 1,
                        nazwa: "BUCKET"
                    },
                    effect: {
                        odmieniona_nazwa: "TAR",
                        flaga: 1,
                        nazwa: "TAR"
                    },
                    komunikat: "You got a bucket full of tar",
                    l: false, milestone: false
                }
            ]
        },
        {
            opis: "A timber yard",
            obrazek: "data/img/22.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "EAST, WEST, SOUTH"
        },
        {
            opis: "You are by a roadside shrine",
            obrazek: "data/img/23.gif",
            kolor: "rgb(167,245,63)",
            mozliwosci: "EAST, WEST, NORTH, SOUTH",
            itemy: [
                {
                    odmieniona_nazwa: "a KEY",
                    flaga: 1,
                    nazwa: "KEY"
                }
            ]
        },
        {
            opis: "You are by a small chapel",
            obrazek: "data/img/24.gif",
            kolor: "rgb(212,229,36)",
            mozliwosci: "EAST, WEST"
        },
        {
            opis: "You are on a road leading to a wood",
            obrazek: "data/img/25.gif",
            kolor: "rgb(167,245,63)",
            mozliwosci: "EAST, WEST, SOUTH"
        },
        {
            opis: "You are in a forest",
            obrazek: "data/img/26 i 65.gif",
            kolor: "rgb(167,245,63)",
            mozliwosci: "EAST, WEST"
        },
        {
            opis: "You are in a deep forest",
            obrazek: "data/img/27 i 67.gif",
            kolor: "rgb(140,253,99)",
            mozliwosci: "WEST, NORTH",
            itemy: [
                {
                    odmieniona_nazwa: "BERRIES",
                    flaga: 1,
                    nazwa: "BERRIES"
                }
            ]
        }
    ],
    [
        {
            opis: "You are by the Vistula River",
            obrazek: "data/img/31.gif",
            kolor: "rgb(122,232,252)",
            mozliwosci: "EAST, NORTH"
        },
        {
            opis: "You are by the Vistula River",
            obrazek: "data/img/32.gif",
            kolor: "rgb(140,214,255)",
            mozliwosci: "WEST, NORTH",
            itemy: [
                {
                    odmieniona_nazwa: "a FISH",
                    flaga: 1,
                    nazwa: "FISH"
                }
            ]
        },
        {
            opis: "You are on a bridge over river",
            obrazek: "data/img/33.gif",
            kolor: "rgb(108,181,242)",
            mozliwosci: "NORTH, SOUTH"
        },
        {
            opis: "You are by the old tavern",
            obrazek: "data/img/34.gif",
            kolor: "rgb(255,189,117)",
            mozliwosci: "EAST",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "MUSHROOMS",
                        flaga: 1,
                        nazwa: "MUSHROOMS"
                    },
                    effect: {
                        odmieniona_nazwa: "MONEY",
                        flaga: 1,
                        nazwa: "MONEY"
                    },
                    komunikat: "The tavern owner paid you money",
                    l: false, milestone: false
                }
            ]
        },
        {
            opis: "You are at the town's end",
            obrazek: "data/img/35.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "WEST, NORTH, SOUTH"
        },
        {
            opis: "You are in a butcher's shop",
            obrazek: "data/img/36.gif",
            kolor: "rgb(255,188,102)",
            mozliwosci: "SOUTH",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "BERRIES",
                        flaga: 1,
                        nazwa: "BERRIES"
                    },
                    effect: {
                        odmieniona_nazwa: "WOOL",
                        flaga: 1,
                        nazwa: "WOOL"
                    },
                    komunikat: "The butcher gave you wool",
                    l: false, milestone: false
                }
            ]
        },
        {
            opis: "You are in a cooper's house",
            obrazek: "data/img/37.gif",
            kolor: "rgb(255,188,102)",
            mozliwosci: "SOUTH",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "MONEY",
                        flaga: 1,
                        nazwa: "MONEY"
                    },
                    effect: {
                        odmieniona_nazwa: "a BARREL",
                        flaga: 1,
                        nazwa: "BARREL"
                    },
                    komunikat: "The cooper sold you a new barrel",
                    l: false, milestone: false
                }
            ]
        }
    ],
    [
        {
            opis: "You are in the Wawel Castle",
            obrazek: "data/img/41.gif",
            kolor: "rgb(255,176,141)",
            mozliwosci: "EAST",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "a dragonskin SHOES",
                        flaga: 1,
                        nazwa: "SHOES"
                    },
                    effect: {
                        odmieniona_nazwa: "a PRIZE",
                        flaga: 1,
                        nazwa: "PRIZE"
                    },
                    komunikat: "The King is impressed by your shoes",
                    l: false, milestone: false
                }
            ]
        },
        {
            opis: "You are inside a dragon's cave",
            obrazek: "data/img/42.gif",
            kolor: "rgb(198,205,193)",
            mozliwosci: "EAST, WEST"
        },
        {
            opis: "A perfect place to set a trap",
            obrazek: "data/img/43.gif",
            kolor: "rgb(255,176,141)",
            mozliwosci: "WEST, NORTH",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "STICKS",
                        flaga: 1,
                        nazwa: "STICKS"
                    },
                    effect: {
                        odmieniona_nazwa: "sheeplegs",
                        flaga: 0,
                        nazwa: "sheeplegs"
                    },
                    komunikat: "You prepared legs for your fake sheep",
                    l: true, milestone: true
                },
                {
                    tool: {
                        odmieniona_nazwa: "a BARREL",
                        flaga: 1,
                        nazwa: "BARREL"
                    },
                    effect: {
                        odmieniona_nazwa: "a sheeptrunk",
                        flaga: 0,
                        nazwa: "sheeptrunk"
                    },
                    komunikat: "You made a nice sheeptrunk",
                    l: true, milestone: true
                },
                {
                    tool: {
                        odmieniona_nazwa: "WOOL",
                        flaga: 1,
                        nazwa: "WOOL"
                    },
                    effect: {
                        odmieniona_nazwa: "a sheepskin",
                        flaga: 0,
                        nazwa: "sheepskin"
                    },
                    komunikat: "You prepared skin for your fake sheep",
                    l: true, milestone: true
                },
                {
                    tool: {
                        odmieniona_nazwa: "a RAG",
                        flaga: 1,
                        nazwa: "RAG"
                    },
                    effect: {
                        odmieniona_nazwa: "a sheephead",
                        flaga: 0,
                        nazwa: "sheephead"
                    },
                    komunikat: "You made a fake sheephead",
                    l: true, milestone: true
                },
                {
                    tool: {
                        odmieniona_nazwa: "SULPHUR",
                        flaga: 1,
                        nazwa: "SULPHUR"
                    },
                    effect: {
                        odmieniona_nazwa: "a solid poison",
                        flaga: 0,
                        nazwa: "solid poison"
                    },
                    komunikat: "You prepared a solid poison",
                    l: true, milestone: true
                },
                {
                    tool: {
                        odmieniona_nazwa: "TAR",
                        flaga: 1,
                        nazwa: "TAR"
                    },
                    effect: {
                        odmieniona_nazwa: "a liquid poison",
                        flaga: 0,
                        nazwa: "liquid poison"
                    },
                    komunikat: "You prepared a liquid poison",
                    l: true, milestone: true
                },
                {
                    tool: {
                        odmieniona_nazwa: "a SHEEP",
                        flaga: 1,
                        nazwa: "SHEEP"
                    },
                    effect: {
                        odmieniona_nazwa: "a dead dragon",
                        flaga: 0,
                        nazwa: "dead dragon"
                    },
                    komunikat: "The dragon noticed your gift... (timeout) The dragon ate your sheep and died!",
                    l: true, milestone: false
                },
                {
                    tool: {
                        odmieniona_nazwa: "a KNIFE",
                        flaga: 1,
                        nazwa: "KNIFE"
                    },
                    effect: {
                        odmieniona_nazwa: "a DRAGONSKIN",
                        flaga: 1,
                        nazwa: "DRAGONSKIN"
                    },
                    komunikat: "You cut a piece of dragon's skin",
                    l: false, milestone: false
                }
            ]
        },
        {
            opis: "You are by the water mill",
            obrazek: "data/img/44.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "EAST",
            itemy: [
                {
                    odmieniona_nazwa: "a BAG",
                    flaga: 1,
                    nazwa: "BAG"
                }
            ]
        },
        {
            opis: "You are at a main crossroad",
            obrazek: "data/img/45.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "EAST, WEST, NORTH, SOUTH"
        },
        {
            opis: "You are on a town street",
            obrazek: "data/img/46.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "EAST, WEST, NORTH"
        },
        {
            opis: "You are in a frontyard of your house",
            obrazek: "data/img/47.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "WEST, NORTH, SOUTH"
        }
    ],
    [
        null,
        null,
        null,
        {
            opis: "You are by a swift stream",
            obrazek: "data/img/54.gif",
            kolor: "rgb(108,181,242)",
            mozliwosci: "EAST"
        },
        {
            opis: "You are on a street leading forest",
            obrazek: "data/img/55.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "WEST, NORTH, SOUTH",
            itemy: [
                {
                    odmieniona_nazwa: "a KNIFE",
                    flaga: 1,
                    nazwa: "KNIFE"
                }
            ]
        },
        {
            opis: "You are in a woodcutter's backyard",
            obrazek: "data/img/56.gif",
            kolor: "rgb(255,190,99)",
            mozliwosci: "SOUTH",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "a KEY",
                        flaga: 1,
                        nazwa: "KEY"
                    },
                    effect: {
                        odmieniona_nazwa: "an AXE",
                        flaga: 1,
                        nazwa: "AXE"
                    },
                    komunikat: "You opened a tool shed and took an axe",
                    l: false, milestone: false
                }
            ]
        },
        {
            opis: "You are in a shoemaker's house",
            obrazek: "data/img/57.gif",
            kolor: "rgb(254,194,97)",
            mozliwosci: "NORTH",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "a BAG",
                        flaga: 1,
                        nazwa: "BAG"
                    },
                    effect: {
                        odmieniona_nazwa: "a RAG",
                        flaga: 1,
                        nazwa: "RAG"
                    },
                    komunikat: "You used your tools to make a rag",
                    l: false, milestone: false
                },
                {
                    tool: {
                        odmieniona_nazwa: "a DRAGONSKIN",
                        flaga: 1,
                        nazwa: "DRAGONSKIN"
                    },
                    effect: {
                        odmieniona_nazwa: "a dragonskin SHOES",
                        flaga: 1,
                        nazwa: "SHOES"
                    },
                    komunikat: "You used your tools to make shoes",
                    l: false, milestone: false
                }
            ]
        }
    ],
    [
        null,
        null,
        null,
        {
            opis: "You are in a bleak funeral house",
            obrazek: "data/img/64.gif",
            kolor: "rgb(254,194,97)",
            mozliwosci: "EAST",
            itemy: [
                {
                    odmieniona_nazwa: "a SPADE",
                    flaga: 1,
                    nazwa: "SPADE"
                }
            ]
        },
        {
            opis: "You are on a path leading to the wood",
            obrazek: "data/img/26 i 65.gif",
            kolor: "rgb(167,245,63)",
            mozliwosci: "EAST, WEST, NORTH"
        },
        {
            opis: "You are at the edge of a forest",
            obrazek: "data/img/66.gif",
            kolor: "rgb(167,245,63)",
            mozliwosci: "EAST, WEST, NORTH"
        },
        {
            opis: "You are in a deep forest",
            obrazek: "data/img/27 i 67.gif",
            kolor: "rgb(140,253,99)",
            mozliwosci: "WEST",
            zaleznosci: [
                {
                    tool: {
                        odmieniona_nazwa: "an AXE",
                        flaga: 1,
                        nazwa: "AXE"
                    },
                    effect: {
                        odmieniona_nazwa: "STICKS",
                        flaga: 1,
                        nazwa: "STICKS"
                    },
                    komunikat: "You cut sticks for sheeplegs",
                    l: false, milestone: false
                }
            ]
        }
    ]
]