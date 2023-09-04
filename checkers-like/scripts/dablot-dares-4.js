Dagaz.AI.g_timeout      = 10000;

Dagaz.Model.WIDTH       = 13;
Dagaz.Model.HEIGHT      = 13;

Dagaz.AI.SPEC_POSITIONS = [
    0x22, 0x24, 0x26, 0x28, 0x2A, 0x2C, 0x2E,
    0x42, 0x44, 0x46, 0x48, 0x4A, 0x4C, 0x4E,
    0x62, 0x64, 0x66, 0x68, 0x6A, 0x6C, 0x6E,
    0x82, 0x84, 0x86, 0x88, 0x8A, 0x8C, 0x8E,
    0xA2, 0xA4, 0xA6, 0xA8, 0xAA, 0xAC, 0xAE,
    0xC2, 0xC4, 0xC6, 0xC8, 0xCA, 0xCC, 0xCE,
    0xE2, 0xE4, 0xE6, 0xE8, 0xEA, 0xEC, 0xEE
];

Dagaz.AI.pieceAdj = [
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, // pieceEmpty
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0
], 
[ -20,   0, -10,   0, -10,   0, -10,   0, -10,   0, -10,   0, -20, // pieceMan
    0,  -5,   0,  -5,   0,  -5,   0,  -5,   0,  -5,   0,  -5,   0,
   -5,   0,  10,   0,  10,   0,  10,   0,  10,   0,  10,   0,  -5,
    0,  15,   0,  15,   0,  15,   0,  15,   0,  15,   0,  15,   0,
    0,   0,  20,   0,  20,   0,  20,   0,  20,   0,  20,   0,   0,
    0,  25,   0,  25,   0,  25,   0,  25,   0,  25,   0,  25,   0,
    0,   0,  20,   0,  20,   0,  20,   0,  20,   0,  20,   0,   0,
    0,  15,   0,  15,   0,  15,   0,  15,   0,  15,   0,  15,   0,
   -5,   0,  10,   0,  10,   0,  10,   0,  10,   0,  10,   0,  -5,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
  -10,   0,   5,   0,   5,   0,   5,   0,   5,   0,   5,   0, -10,
    0,  -5,   0,  -5,   0,  -5,   0,  -5,   0,  -5,   0,  -5,   0,
  -20,   0, -10,   0, -10,   0, -10,   0, -10,   0, -10,   0, -20
], 
[   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0, // pieceKing
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0
]];

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a13", [0, 26, 2, 0, 0, 0, 0, 14]);
    design.addPosition("b13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c13", [0, 26, 2, -2, 0, 12, 0, 14]);
    design.addPosition("d13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e13", [0, 26, 2, -2, 0, 12, 0, 14]);
    design.addPosition("f13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g13", [0, 26, 2, -2, 0, 12, 0, 14]);
    design.addPosition("h13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i13", [0, 26, 2, -2, 0, 12, 0, 14]);
    design.addPosition("j13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k13", [0, 26, 2, -2, 0, 12, 0, 14]);
    design.addPosition("l13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m13", [0, 26, 0, -2, 0, 12, 0, 0]);
    design.addPosition("a12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b12", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("c12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d12", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("e12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f12", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("g12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h12", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("i12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j12", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("k12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l12", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("m12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a11", [-26, 26, 2, 0, -12, 0, 0, 14]);
    design.addPosition("b11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c11", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("d11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e11", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("f11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g11", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("h11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i11", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("j11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k11", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("l11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m11", [-26, 26, 0, -2, 0, 12, -14, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("e10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f10", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("g10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h10", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("i10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j10", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("k10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l10", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("m10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [-26, 26, 2, 0, -12, 0, 0, 14]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("j9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k9", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("l9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m9", [-26, 26, 0, -2, 0, 12, -14, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j8", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("k8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l8", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("m8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [-26, 26, 2, 0, -12, 0, 0, 14]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("f7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g7", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("j7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k7", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("l7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m7", [-26, 26, 0, -2, 0, 12, -14, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f6", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h6", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j6", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("k6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l6", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("m6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [-26, 26, 2, 0, -12, 0, 0, 14]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("d5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("h5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("j5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k5", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("l5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m5", [-26, 26, 0, -2, 0, 12, -14, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h4", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j4", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("k4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l4", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("m4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [-26, 26, 2, 0, -12, 0, 0, 14]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("d3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e3", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("h3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i3", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("j3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k3", [-26, 26, 2, -2, -12, 12, -14, 14]);
    design.addPosition("l3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m3", [-26, 26, 0, -2, 0, 12, -14, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("k2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2", [0, 0, 0, 0, -12, 12, -14, 14]);
    design.addPosition("m2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-26, 0, 2, 0, -12, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [-26, 0, 2, -2, -12, 0, -14, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [-26, 0, 2, -2, -12, 0, -14, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [-26, 0, 2, -2, -12, 0, -14, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [-26, 0, 2, -2, -12, 0, -14, 0]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1", [-26, 0, 2, -2, -12, 0, -14, 0]);
    design.addPosition("l1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1", [-26, 0, 0, -2, 0, 0, -14, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("King", 0, 1000);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [0, 0], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [6, 6], 1);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [7, 7], 1);
    design.addMove(0, 1, [4, 4], 1);

    design.addPiece("Man", 2, 20);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [1], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [3, 3], 0);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 1, [1, 1], 0);
    design.addMove(2, 1, [6, 6], 0);
    design.addMove(2, 1, [5, 5], 0);
    design.addMove(2, 1, [7, 7], 0);
    design.addMove(2, 1, [4, 4], 0);
    design.addMove(2, 1, [3, 3], 1);
    design.addMove(2, 1, [0, 0], 1);
    design.addMove(2, 1, [2, 2], 1);
    design.addMove(2, 1, [1, 1], 1);
    design.addMove(2, 1, [6, 6], 1);
    design.addMove(2, 1, [5, 5], 1);
    design.addMove(2, 1, [7, 7], 1);
    design.addMove(2, 1, [4, 4], 1);

    design.setup("Black", "King", 116);
    design.setup("Black", "Man", 156);
    design.setup("Black", "Man", 158);
    design.setup("Black", "Man", 160);
    design.setup("Black", "Man", 162);
    design.setup("Black", "Man", 164);
    design.setup("Black", "Man", 166);
    design.setup("Black", "Man", 168);
    design.setup("Black", "Man", 144);
    design.setup("Black", "Man", 146);
    design.setup("Black", "Man", 148);
    design.setup("Black", "Man", 150);
    design.setup("Black", "Man", 152);
    design.setup("Black", "Man", 154);
    design.setup("Black", "Man", 130);
    design.setup("Black", "Man", 132);
    design.setup("Black", "Man", 134);
    design.setup("Black", "Man", 136);
    design.setup("Black", "Man", 138);
    design.setup("Black", "Man", 140);
    design.setup("Black", "Man", 142);
    design.setup("Black", "Man", 118);
    design.setup("Black", "Man", 120);
    design.setup("Black", "Man", 122);
    design.setup("Black", "Man", 124);
    design.setup("Black", "Man", 126);
    design.setup("Black", "Man", 128);
    design.setup("White", "King", 52);
    design.setup("White", "Man", 0);
    design.setup("White", "Man", 2);
    design.setup("White", "Man", 4);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 8);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 12);
    design.setup("White", "Man", 14);
    design.setup("White", "Man", 16);
    design.setup("White", "Man", 18);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 24);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 28);
    design.setup("White", "Man", 30);
    design.setup("White", "Man", 32);
    design.setup("White", "Man", 34);
    design.setup("White", "Man", 36);
    design.setup("White", "Man", 38);
    design.setup("White", "Man", 40);
    design.setup("White", "Man", 42);
    design.setup("White", "Man", 44);
    design.setup("White", "Man", 46);
    design.setup("White", "Man", 48);
    design.setup("White", "Man", 50);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a13", 6, 6, 59, 59);
    view.defPosition("b13", 50, 6, 59, 59);
    view.defPosition("c13", 94, 6, 59, 59);
    view.defPosition("d13", 138, 6, 59, 59);
    view.defPosition("e13", 182, 6, 59, 59);
    view.defPosition("f13", 226, 6, 59, 59);
    view.defPosition("g13", 270, 6, 59, 59);
    view.defPosition("h13", 314, 6, 59, 59);
    view.defPosition("i13", 358, 6, 59, 59);
    view.defPosition("j13", 402, 6, 59, 59);
    view.defPosition("k13", 446, 6, 59, 59);
    view.defPosition("l13", 490, 6, 59, 59);
    view.defPosition("m13", 534, 6, 59, 59);
    view.defPosition("a12", 6, 50, 59, 59);
    view.defPosition("b12", 50, 50, 59, 59);
    view.defPosition("c12", 94, 50, 59, 59);
    view.defPosition("d12", 138, 50, 59, 59);
    view.defPosition("e12", 182, 50, 59, 59);
    view.defPosition("f12", 226, 50, 59, 59);
    view.defPosition("g12", 270, 50, 59, 59);
    view.defPosition("h12", 314, 50, 59, 59);
    view.defPosition("i12", 358, 50, 59, 59);
    view.defPosition("j12", 402, 50, 59, 59);
    view.defPosition("k12", 446, 50, 59, 59);
    view.defPosition("l12", 490, 50, 59, 59);
    view.defPosition("m12", 534, 50, 59, 59);
    view.defPosition("a11", 6, 94, 59, 59);
    view.defPosition("b11", 50, 94, 59, 59);
    view.defPosition("c11", 94, 94, 59, 59);
    view.defPosition("d11", 138, 94, 59, 59);
    view.defPosition("e11", 182, 94, 59, 59);
    view.defPosition("f11", 226, 94, 59, 59);
    view.defPosition("g11", 270, 94, 59, 59);
    view.defPosition("h11", 314, 94, 59, 59);
    view.defPosition("i11", 358, 94, 59, 59);
    view.defPosition("j11", 402, 94, 59, 59);
    view.defPosition("k11", 446, 94, 59, 59);
    view.defPosition("l11", 490, 94, 59, 59);
    view.defPosition("m11", 534, 94, 59, 59);
    view.defPosition("a10", 6, 138, 59, 59);
    view.defPosition("b10", 50, 138, 59, 59);
    view.defPosition("c10", 94, 138, 59, 59);
    view.defPosition("d10", 138, 138, 59, 59);
    view.defPosition("e10", 182, 138, 59, 59);
    view.defPosition("f10", 226, 138, 59, 59);
    view.defPosition("g10", 270, 138, 59, 59);
    view.defPosition("h10", 314, 138, 59, 59);
    view.defPosition("i10", 358, 138, 59, 59);
    view.defPosition("j10", 402, 138, 59, 59);
    view.defPosition("k10", 446, 138, 59, 59);
    view.defPosition("l10", 490, 138, 59, 59);
    view.defPosition("m10", 534, 138, 59, 59);
    view.defPosition("a9", 6, 182, 59, 59);
    view.defPosition("b9", 50, 182, 59, 59);
    view.defPosition("c9", 94, 182, 59, 59);
    view.defPosition("d9", 138, 182, 59, 59);
    view.defPosition("e9", 182, 182, 59, 59);
    view.defPosition("f9", 226, 182, 59, 59);
    view.defPosition("g9", 270, 182, 59, 59);
    view.defPosition("h9", 314, 182, 59, 59);
    view.defPosition("i9", 358, 182, 59, 59);
    view.defPosition("j9", 402, 182, 59, 59);
    view.defPosition("k9", 446, 182, 59, 59);
    view.defPosition("l9", 490, 182, 59, 59);
    view.defPosition("m9", 534, 182, 59, 59);
    view.defPosition("a8", 6, 226, 59, 59);
    view.defPosition("b8", 50, 226, 59, 59);
    view.defPosition("c8", 94, 226, 59, 59);
    view.defPosition("d8", 138, 226, 59, 59);
    view.defPosition("e8", 182, 226, 59, 59);
    view.defPosition("f8", 226, 226, 59, 59);
    view.defPosition("g8", 270, 226, 59, 59);
    view.defPosition("h8", 314, 226, 59, 59);
    view.defPosition("i8", 358, 226, 59, 59);
    view.defPosition("j8", 402, 226, 59, 59);
    view.defPosition("k8", 446, 226, 59, 59);
    view.defPosition("l8", 490, 226, 59, 59);
    view.defPosition("m8", 534, 226, 59, 59);
    view.defPosition("a7", 6, 270, 59, 59);
    view.defPosition("b7", 50, 270, 59, 59);
    view.defPosition("c7", 94, 270, 59, 59);
    view.defPosition("d7", 138, 270, 59, 59);
    view.defPosition("e7", 182, 270, 59, 59);
    view.defPosition("f7", 226, 270, 59, 59);
    view.defPosition("g7", 270, 270, 59, 59);
    view.defPosition("h7", 314, 270, 59, 59);
    view.defPosition("i7", 358, 270, 59, 59);
    view.defPosition("j7", 402, 270, 59, 59);
    view.defPosition("k7", 446, 270, 59, 59);
    view.defPosition("l7", 490, 270, 59, 59);
    view.defPosition("m7", 534, 270, 59, 59);
    view.defPosition("a6", 6, 314, 59, 59);
    view.defPosition("b6", 50, 314, 59, 59);
    view.defPosition("c6", 94, 314, 59, 59);
    view.defPosition("d6", 138, 314, 59, 59);
    view.defPosition("e6", 182, 314, 59, 59);
    view.defPosition("f6", 226, 314, 59, 59);
    view.defPosition("g6", 270, 314, 59, 59);
    view.defPosition("h6", 314, 314, 59, 59);
    view.defPosition("i6", 358, 314, 59, 59);
    view.defPosition("j6", 402, 314, 59, 59);
    view.defPosition("k6", 446, 314, 59, 59);
    view.defPosition("l6", 490, 314, 59, 59);
    view.defPosition("m6", 534, 314, 59, 59);
    view.defPosition("a5", 6, 358, 59, 59);
    view.defPosition("b5", 50, 358, 59, 59);
    view.defPosition("c5", 94, 358, 59, 59);
    view.defPosition("d5", 138, 358, 59, 59);
    view.defPosition("e5", 182, 358, 59, 59);
    view.defPosition("f5", 226, 358, 59, 59);
    view.defPosition("g5", 270, 358, 59, 59);
    view.defPosition("h5", 314, 358, 59, 59);
    view.defPosition("i5", 358, 358, 59, 59);
    view.defPosition("j5", 402, 358, 59, 59);
    view.defPosition("k5", 446, 358, 59, 59);
    view.defPosition("l5", 490, 358, 59, 59);
    view.defPosition("m5", 534, 358, 59, 59);
    view.defPosition("a4", 6, 402, 59, 59);
    view.defPosition("b4", 50, 402, 59, 59);
    view.defPosition("c4", 94, 402, 59, 59);
    view.defPosition("d4", 138, 402, 59, 59);
    view.defPosition("e4", 182, 402, 59, 59);
    view.defPosition("f4", 226, 402, 59, 59);
    view.defPosition("g4", 270, 402, 59, 59);
    view.defPosition("h4", 314, 402, 59, 59);
    view.defPosition("i4", 358, 402, 59, 59);
    view.defPosition("j4", 402, 402, 59, 59);
    view.defPosition("k4", 446, 402, 59, 59);
    view.defPosition("l4", 490, 402, 59, 59);
    view.defPosition("m4", 534, 402, 59, 59);
    view.defPosition("a3", 6, 446, 59, 59);
    view.defPosition("b3", 50, 446, 59, 59);
    view.defPosition("c3", 94, 446, 59, 59);
    view.defPosition("d3", 138, 446, 59, 59);
    view.defPosition("e3", 182, 446, 59, 59);
    view.defPosition("f3", 226, 446, 59, 59);
    view.defPosition("g3", 270, 446, 59, 59);
    view.defPosition("h3", 314, 446, 59, 59);
    view.defPosition("i3", 358, 446, 59, 59);
    view.defPosition("j3", 402, 446, 59, 59);
    view.defPosition("k3", 446, 446, 59, 59);
    view.defPosition("l3", 490, 446, 59, 59);
    view.defPosition("m3", 534, 446, 59, 59);
    view.defPosition("a2", 6, 490, 59, 59);
    view.defPosition("b2", 50, 490, 59, 59);
    view.defPosition("c2", 94, 490, 59, 59);
    view.defPosition("d2", 138, 490, 59, 59);
    view.defPosition("e2", 182, 490, 59, 59);
    view.defPosition("f2", 226, 490, 59, 59);
    view.defPosition("g2", 270, 490, 59, 59);
    view.defPosition("h2", 314, 490, 59, 59);
    view.defPosition("i2", 358, 490, 59, 59);
    view.defPosition("j2", 402, 490, 59, 59);
    view.defPosition("k2", 446, 490, 59, 59);
    view.defPosition("l2", 490, 490, 59, 59);
    view.defPosition("m2", 534, 490, 59, 59);
    view.defPosition("a1", 6, 534, 59, 59);
    view.defPosition("b1", 50, 534, 59, 59);
    view.defPosition("c1", 94, 534, 59, 59);
    view.defPosition("d1", 138, 534, 59, 59);
    view.defPosition("e1", 182, 534, 59, 59);
    view.defPosition("f1", 226, 534, 59, 59);
    view.defPosition("g1", 270, 534, 59, 59);
    view.defPosition("h1", 314, 534, 59, 59);
    view.defPosition("i1", 358, 534, 59, 59);
    view.defPosition("j1", 402, 534, 59, 59);
    view.defPosition("k1", 446, 534, 59, 59);
    view.defPosition("l1", 490, 534, 59, 59);
    view.defPosition("m1", 534, 534, 59, 59);
}
