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
    design.checkVersion("pass-partial", "true");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("promote-dialog", "remap");
    design.checkVersion("makadaidaishogi-promotion", "true");

    design.addDirection("sw");  // 0
    design.addDirection("e");   // 1
    design.addDirection("e2T"); // 2
    design.addDirection("w2B"); // 3
    design.addDirection("nw");  // 4
    design.addDirection("n2L"); // 5
    design.addDirection("s2L"); // 6
    design.addDirection("n");   // 7
    design.addDirection("n2R"); // 8
    design.addDirection("se");  // 9
    design.addDirection("s2R"); // 10
    design.addDirection("s");   // 11
    design.addDirection("e2B"); // 12
    design.addDirection("w");   // 13
    design.addDirection("ne");  // 14
    design.addDirection("w2T"); // 15

    design.addPlayer("Black", [14, 13, 3, 2, 9, 10, 8, 11, 6, 4, 5, 7, 15, 1, 0, 12]);
    design.addPlayer("White", [14, 13, 3, 2, 9, 10, 8, 11, 6, 4, 5, 7, 15, 1, 0, 12]);

    design.addPosition("a13", [0, 1, 0, 0, 0, 0, 0, 0, 0, 14, 27, 13, 15, 0, 0, 0]);
    design.addPosition("b13", [12, 1, 0, 0, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("c13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("d13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("e13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("f13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("g13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("h13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("i13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("j13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("k13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 15, -1, 0, 0]);
    design.addPosition("l13", [12, 1, 0, 11, 0, 0, 25, 0, 0, 14, 27, 13, 0, -1, 0, 0]);
    design.addPosition("m13", [12, 0, 0, 11, 0, 0, 25, 0, 0, 0, 0, 13, 0, -1, 0, 0]);
    design.addPosition("a12", [0, 1, -11, 0, 0, 0, 0, -13, 0, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b12", [12, 1, -11, 0, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k12", [12, 1, -11, 11, -14, 0, 25, -13, 0, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l12", [12, 1, 0, 11, -14, 0, 25, -13, 0, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m12", [12, 0, 0, 11, -14, 0, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a11", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b11", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k11", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l11", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m11", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a10", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b10", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k10", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l10", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m10", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a9", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b9", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k9", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l9", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m9", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a8", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b8", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k8", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l8", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m8", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a7", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b7", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k7", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l7", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m7", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a6", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b6", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k6", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l6", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m6", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a5", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b5", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k5", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l5", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m5", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a4", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b4", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k4", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l4", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m4", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a3", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 27, 13, 15, 0, -12, 0]);
    design.addPosition("b3", [12, 1, -11, 0, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, 0]);
    design.addPosition("c3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("d3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("e3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("f3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("g3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("h3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("i3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("j3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("k3", [12, 1, -11, 11, -14, -27, 25, -13, -25, 14, 27, 13, 15, -1, -12, -15]);
    design.addPosition("l3", [12, 1, 0, 11, -14, -27, 25, -13, -25, 14, 27, 13, 0, -1, -12, -15]);
    design.addPosition("m3", [12, 0, 0, 11, -14, -27, 25, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a2", [0, 1, -11, 0, 0, 0, 0, -13, -25, 14, 0, 13, 15, 0, -12, 0]);
    design.addPosition("b2", [12, 1, -11, 0, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, 0]);
    design.addPosition("c2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("d2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("e2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("f2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("g2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("h2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("i2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("j2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("k2", [12, 1, -11, 11, -14, -27, 0, -13, -25, 14, 0, 13, 15, -1, -12, -15]);
    design.addPosition("l2", [12, 1, 0, 11, -14, -27, 0, -13, -25, 14, 0, 13, 0, -1, -12, -15]);
    design.addPosition("m2", [12, 0, 0, 11, -14, -27, 0, -13, 0, 0, 0, 13, 0, -1, 0, -15]);
    design.addPosition("a1", [0, 1, -11, 0, 0, 0, 0, -13, -25, 0, 0, 0, 0, 0, -12, 0]);
    design.addPosition("b1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, 0]);
    design.addPosition("c1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("d1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("e1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("f1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("g1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("h1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("i1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("j1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("k1", [0, 1, -11, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("l1", [0, 1, 0, 0, -14, -27, 0, -13, -25, 0, 0, 0, 0, -1, -12, -15]);
    design.addPosition("m1", [0, 0, 0, 0, -14, -27, 0, -13, 0, 0, 0, 0, 0, -1, 0, -15]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	8);
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.MODE,	1);	// move-twice-v
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-9);
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	8);
    design.addCommand(3, ZRF.FORK,	4);
    design.addCommand(3, ZRF.MODE,	2);	// move-twice-h
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-9);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.MODE,	1);	// move-twice-v
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.MODE,	2);	// move-twice-h
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.MODE,	3);	// move-twice-l
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.MODE,	4);	// move-twice-r
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.MODE,	5);	// move-trice-v
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.MODE,	6);	// move-trice-h
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.MODE,	7);	// move-trice-l
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.MODE,	8);	// move-trice-r
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.MODE,	9);	// move-twice
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal

    design.addPiece("Go-Between", 0, 12);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [11], 0);

    design.addPiece("Free-Goer", 1, 108);
    design.addMove(1, 1, [7, 7], 0);
    design.addMove(1, 1, [11, 11], 0);

    design.addPiece("Pawn", 2, 24);
    design.addMove(2, 0, [7], 0);

    design.addPiece("Tokin", 3, 108);
    design.addMove(3, 0, [11], 0);
    design.addMove(3, 0, [7], 0);
    design.addMove(3, 0, [14], 0);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [13], 0);

    design.addPiece("Rook", 4, 296);
    design.addMove(4, 1, [7, 7], 0);
    design.addMove(4, 1, [1, 1], 0);
    design.addMove(4, 1, [11, 11], 0);
    design.addMove(4, 1, [13, 13], 0);

    design.addPiece("Gold-Promoted", 5, 108);
    design.addMove(5, 0, [11], 0);
    design.addMove(5, 0, [7], 0);
    design.addMove(5, 0, [14], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 0, [1], 0);
    design.addMove(5, 0, [13], 0);

    design.addPiece("Left-Chariot", 6, 208);
    design.addMove(6, 1, [4, 4], 0);
    design.addMove(6, 1, [9, 9], 0);
    design.addMove(6, 1, [7, 7], 0);
    design.addMove(6, 0, [11], 0);

    design.addPiece("Right-Chariot", 7, 208);
    design.addMove(7, 1, [14, 14], 0);
    design.addMove(7, 1, [0, 0], 0);
    design.addMove(7, 1, [7, 7], 0);
    design.addMove(7, 0, [11], 0);

    design.addPiece("Side-Mover", 8, 184);
    design.addMove(8, 1, [1, 1], 0);
    design.addMove(8, 1, [13, 13], 0);
    design.addMove(8, 0, [7], 0);
    design.addMove(8, 0, [11], 0);

    design.addPiece("Side-Flyer", 9, 206);
    design.addMove(9, 1, [1, 1], 0);
    design.addMove(9, 1, [13, 13], 0);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 0, [14], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [9], 0);

    design.addPiece("Vertical-Mover", 10, 176);
    design.addMove(10, 1, [11, 11], 0);
    design.addMove(10, 1, [7, 7], 0);
    design.addMove(10, 0, [1], 0);
    design.addMove(10, 0, [13], 0);

    design.addPiece("Bishop", 11, 228);
    design.addMove(11, 1, [14, 14], 0);
    design.addMove(11, 1, [4, 4], 0);
    design.addMove(11, 1, [9, 9], 0);
    design.addMove(11, 1, [0, 0], 0);

    design.addPiece("Dragon-Horse", 12, 310);
    design.addMove(12, 0, [7], 0);
    design.addMove(12, 0, [1], 0);
    design.addMove(12, 0, [11], 0);
    design.addMove(12, 0, [13], 0);
    design.addMove(12, 1, [4, 4], 0);
    design.addMove(12, 1, [14, 14], 0);
    design.addMove(12, 1, [9, 9], 0);
    design.addMove(12, 1, [0, 0], 0);

    design.addPiece("Dragon-King", 13, 376);
    design.addMove(13, 1, [7, 7], 0);
    design.addMove(13, 1, [1, 1], 0);
    design.addMove(13, 1, [11, 11], 0);
    design.addMove(13, 1, [13, 13], 0);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [14], 0);
    design.addMove(13, 0, [9], 0);
    design.addMove(13, 0, [0], 0);

    design.addPiece("Capricorn", 14, 490);
    design.addMove(14, 2, [14, 14], 0);
    design.addMove(14, 2, [0, 0], 0);
    design.addMove(14, 3, [4, 4], 0);
    design.addMove(14, 3, [9, 9], 0);
    design.addMove(14, 1, [4, 4], 1);
    design.addMove(14, 1, [9, 9], 1);
    design.addMove(14, 1, [14, 14], 2);
    design.addMove(14, 1, [0, 0], 2);

    design.addPiece("Hook-Mover", 15, 660);
    design.addMove(15, 2, [7, 7], 0);
    design.addMove(15, 2, [11, 11], 0);
    design.addMove(15, 3, [1, 1], 0);
    design.addMove(15, 3, [13, 13], 0);
    design.addMove(15, 1, [1, 1], 1);
    design.addMove(15, 1, [13, 13], 1);
    design.addMove(15, 1, [7, 7], 2);
    design.addMove(15, 1, [11, 11], 2);

    design.addPiece("Free-King", 16, 520);
    design.addMove(16, 1, [7, 7], 0);
    design.addMove(16, 1, [1, 1], 0);
    design.addMove(16, 1, [11, 11], 0);
    design.addMove(16, 1, [13, 13], 0);
    design.addMove(16, 1, [4, 4], 0);
    design.addMove(16, 1, [14, 14], 0);
    design.addMove(16, 1, [9, 9], 0);
    design.addMove(16, 1, [0, 0], 0);

    design.addPiece("Donkey", 17, 86);
    design.addMove(17, 4, [7, 7], 0);
    design.addMove(17, 4, [11, 11], 0);
    design.addMove(17, 0, [7], 0);
    design.addMove(17, 0, [11], 0);
    design.addMove(17, 0, [13], 0);
    design.addMove(17, 0, [1], 0);

    design.addPiece("Knight", 18, 36);
    design.addMove(18, 0, [5], 0);
    design.addMove(18, 0, [8], 0);

    design.addPiece("Violent-Ox", 19, 104);
    design.addMove(19, 0, [7], 0);
    design.addMove(19, 0, [11], 0);
    design.addMove(19, 0, [13], 0);
    design.addMove(19, 0, [1], 0);
    design.addMove(19, 5, [7, 7], 0);
    design.addMove(19, 5, [11, 11], 0);
    design.addMove(19, 5, [13, 13], 0);
    design.addMove(19, 5, [1, 1], 0);

    design.addPiece("Flying-Dragon", 20, 100);
    design.addMove(20, 0, [4], 0);
    design.addMove(20, 0, [9], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [14], 0);
    design.addMove(20, 5, [4, 4], 0);
    design.addMove(20, 5, [9, 9], 0);
    design.addMove(20, 5, [0, 0], 0);
    design.addMove(20, 5, [14, 14], 0);

    design.addPiece("Buddhist-Devil", 21, 114);
    design.addMove(21, 0, [14], 0);
    design.addMove(21, 5, [14, 14], 0);
    design.addMove(21, 6, [14, 14, 14], 0);
    design.addMove(21, 0, [1], 0);
    design.addMove(21, 0, [11], 0);
    design.addMove(21, 0, [13], 0);
    design.addMove(21, 0, [4], 0);
    design.addMove(21, 5, [4, 4], 0);
    design.addMove(21, 6, [4, 4, 4], 0);

    design.addPiece("She-Devil", 22, 236);
    design.addMove(22, 0, [7], 0);
    design.addMove(22, 5, [7, 7], 0);
    design.addMove(22, 6, [7, 7, 7], 0);
    design.addMove(22, 7, [7, 7, 7, 7], 0);
    design.addMove(22, 8, [7, 7, 7, 7, 7], 0);
    design.addMove(22, 0, [14], 0);
    design.addMove(22, 5, [14, 14], 0);
    design.addMove(22, 0, [1], 0);
    design.addMove(22, 5, [1, 1], 0);
    design.addMove(22, 6, [1, 1, 1], 0);
    design.addMove(22, 7, [1, 1, 1, 1], 0);
    design.addMove(22, 8, [1, 1, 1, 1, 1], 0);
    design.addMove(22, 0, [9], 0);
    design.addMove(22, 5, [9, 9], 0);
    design.addMove(22, 0, [11], 0);
    design.addMove(22, 5, [11, 11], 0);
    design.addMove(22, 6, [11, 11, 11], 0);
    design.addMove(22, 7, [11, 11, 11, 11], 0);
    design.addMove(22, 8, [11, 11, 11, 11, 11], 0);
    design.addMove(22, 0, [0], 0);
    design.addMove(22, 5, [0, 0], 0);
    design.addMove(22, 0, [13], 0);
    design.addMove(22, 5, [13, 13], 0);
    design.addMove(22, 6, [13, 13, 13], 0);
    design.addMove(22, 7, [13, 13, 13, 13], 0);
    design.addMove(22, 8, [13, 13, 13, 13, 13], 0);
    design.addMove(22, 0, [4], 0);
    design.addMove(22, 5, [4, 4], 0);

    design.addPiece("Wrestler", 23, 150);
    design.addMove(23, 0, [14], 0);
    design.addMove(23, 5, [14, 14], 0);
    design.addMove(23, 6, [14, 14, 14], 0);
    design.addMove(23, 0, [1], 0);
    design.addMove(23, 0, [9], 0);
    design.addMove(23, 5, [9, 9], 0);
    design.addMove(23, 6, [9, 9, 9], 0);
    design.addMove(23, 0, [0], 0);
    design.addMove(23, 5, [0, 0], 0);
    design.addMove(23, 6, [0, 0, 0], 0);
    design.addMove(23, 0, [13], 0);
    design.addMove(23, 0, [4], 0);
    design.addMove(23, 5, [4, 4], 0);
    design.addMove(23, 6, [4, 4, 4], 0);

    design.addPiece("Guardian-of-the-Gods", 24, 156);
    design.addMove(24, 0, [7], 0);
    design.addMove(24, 5, [7, 7], 0);
    design.addMove(24, 6, [7, 7, 7], 0);
    design.addMove(24, 0, [14], 0);
    design.addMove(24, 0, [1], 0);
    design.addMove(24, 5, [1, 1], 0);
    design.addMove(24, 6, [1, 1, 1], 0);
    design.addMove(24, 0, [11], 0);
    design.addMove(24, 5, [11, 11], 0);
    design.addMove(24, 6, [11, 11, 11], 0);
    design.addMove(24, 0, [4], 0);
    design.addMove(24, 0, [13], 0);
    design.addMove(24, 5, [13, 13], 0);
    design.addMove(24, 6, [13, 13, 13], 0);

    design.addPiece("Lion-Dog", 25, 860);
    design.addMove(25, 9, [7], 0);
    design.addMove(25, 9, [11], 0);
    design.addMove(25, 10, [13], 0);
    design.addMove(25, 10, [1], 0);
    design.addMove(25, 11, [9], 0);
    design.addMove(25, 11, [4], 0);
    design.addMove(25, 12, [14], 0);
    design.addMove(25, 12, [0], 0);
    design.addMove(25, 13, [7], 1);
    design.addMove(25, 13, [11], 1);
    design.addMove(25, 14, [13], 2);
    design.addMove(25, 14, [1], 2);
    design.addMove(25, 15, [9], 3);
    design.addMove(25, 15, [4], 3);
    design.addMove(25, 16, [14], 4);
    design.addMove(25, 16, [0], 4);
    design.addMove(25, 0, [7], 5);
    design.addMove(25, 0, [11], 5);
    design.addMove(25, 0, [13], 6);
    design.addMove(25, 0, [1], 6);
    design.addMove(25, 0, [9], 7);
    design.addMove(25, 0, [4], 7);
    design.addMove(25, 0, [14], 8);
    design.addMove(25, 0, [0], 8);

    design.addPiece("Old-Rat", 26, 60);
    design.addMove(26, 0, [7], 0);
    design.addMove(26, 0, [0], 0);
    design.addMove(26, 0, [9], 0);

    design.addPiece("Bat", 27, 184);
    design.addMove(27, 1, [7, 7], 0);
    design.addMove(27, 1, [0, 0], 0);
    design.addMove(27, 1, [9, 9], 0);

    design.addPiece("Angry-Boar", 28, 74);
    design.addMove(28, 0, [7], 0);
    design.addMove(28, 0, [1], 0);
    design.addMove(28, 0, [13], 0);
    design.addMove(28, 0, [11], 0);

    design.addPiece("Free-Boar", 29, 366);
    design.addMove(29, 1, [1, 1], 0);
    design.addMove(29, 1, [13, 13], 0);
    design.addMove(29, 1, [4, 4], 0);
    design.addMove(29, 1, [14, 14], 0);
    design.addMove(29, 1, [9, 9], 0);
    design.addMove(29, 1, [0, 0], 0);

    design.addPiece("Blind-Bear", 30, 128);
    design.addMove(30, 0, [4], 0);
    design.addMove(30, 0, [14], 0);
    design.addMove(30, 0, [0], 0);
    design.addMove(30, 0, [9], 0);
    design.addMove(30, 1, [11, 11], 0);

    design.addPiece("Free-Bear", 31, 376);
    design.addMove(31, 4, [4, 4], 0);
    design.addMove(31, 4, [14, 14], 0);
    design.addMove(31, 1, [4, 4], 0);
    design.addMove(31, 1, [14, 14], 0);
    design.addMove(31, 1, [13, 13], 0);
    design.addMove(31, 1, [0, 0], 0);
    design.addMove(31, 1, [9, 9], 0);
    design.addMove(31, 1, [1, 1], 0);

    design.addPiece("Evil-Wolf", 32, 96);
    design.addMove(32, 0, [13], 0);
    design.addMove(32, 0, [4], 0);
    design.addMove(32, 0, [7], 0);
    design.addMove(32, 0, [14], 0);
    design.addMove(32, 0, [1], 0);

    design.addPiece("Free-Wolf", 33, 390);
    design.addMove(33, 1, [4, 4], 0);
    design.addMove(33, 1, [14, 14], 0);
    design.addMove(33, 1, [11, 11], 0);
    design.addMove(33, 1, [1, 1], 0);
    design.addMove(33, 1, [13, 13], 0);

    design.addPiece("Kylin", 34, 130);
    design.addMove(34, 4, [7, 7], 0);
    design.addMove(34, 4, [1, 1], 0);
    design.addMove(34, 4, [11, 11], 0);
    design.addMove(34, 4, [13, 13], 0);
    design.addMove(34, 0, [4], 0);
    design.addMove(34, 0, [14], 0);
    design.addMove(34, 0, [9], 0);
    design.addMove(34, 0, [0], 0);

    design.addPiece("Great-Dragon", 35, 316);
    design.addMove(35, 0, [7], 0);
    design.addMove(35, 5, [7, 7], 0);
    design.addMove(35, 0, [11], 0);
    design.addMove(35, 5, [11, 11], 0);
    design.addMove(35, 0, [14], 0);
    design.addMove(35, 5, [14, 14], 0);
    design.addMove(35, 6, [14, 14, 14], 0);
    design.addMove(35, 1, [1, 1], 0);
    design.addMove(35, 0, [9], 0);
    design.addMove(35, 5, [9, 9], 0);
    design.addMove(35, 6, [9, 9, 9], 0);
    design.addMove(35, 0, [0], 0);
    design.addMove(35, 5, [0, 0], 0);
    design.addMove(35, 6, [0, 0, 0], 0);
    design.addMove(35, 1, [13, 13], 0);
    design.addMove(35, 0, [4], 0);
    design.addMove(35, 5, [4, 4], 0);
    design.addMove(35, 6, [4, 4, 4], 0);

    design.addPiece("Phoenix", 36, 128);
    design.addMove(36, 4, [4, 4], 0);
    design.addMove(36, 4, [14, 14], 0);
    design.addMove(36, 4, [9, 9], 0);
    design.addMove(36, 4, [0, 0], 0);
    design.addMove(36, 0, [7], 0);
    design.addMove(36, 0, [1], 0);
    design.addMove(36, 0, [11], 0);
    design.addMove(36, 0, [13], 0);

    design.addPiece("Golden-Bird", 37, 318);
    design.addMove(37, 1, [7, 7], 0);
    design.addMove(37, 1, [11, 11], 0);
    design.addMove(37, 0, [14], 0);
    design.addMove(37, 5, [14, 14], 0);
    design.addMove(37, 6, [14, 14, 14], 0);
    design.addMove(37, 0, [1], 0);
    design.addMove(37, 5, [1, 1], 0);
    design.addMove(37, 0, [9], 0);
    design.addMove(37, 5, [9, 9], 0);
    design.addMove(37, 6, [9, 9, 9], 0);
    design.addMove(37, 0, [0], 0);
    design.addMove(37, 5, [0, 0], 0);
    design.addMove(37, 6, [0, 0, 0], 0);
    design.addMove(37, 0, [13], 0);
    design.addMove(37, 5, [13, 13], 0);
    design.addMove(37, 0, [4], 0);
    design.addMove(37, 5, [4, 4], 0);
    design.addMove(37, 6, [4, 4, 4], 0);

    design.addPiece("Lion", 38, 732);
    design.addMove(38, 17, [7], 0);
    design.addMove(38, 17, [11], 0);
    design.addMove(38, 17, [13], 0);
    design.addMove(38, 17, [1], 0);
    design.addMove(38, 17, [9], 0);
    design.addMove(38, 17, [4], 0);
    design.addMove(38, 17, [14], 0);
    design.addMove(38, 17, [0], 0);
    design.addMove(38, 0, [7], 9);
    design.addMove(38, 0, [1], 9);
    design.addMove(38, 0, [11], 9);
    design.addMove(38, 0, [13], 9);
    design.addMove(38, 0, [14], 9);
    design.addMove(38, 0, [4], 9);
    design.addMove(38, 0, [9], 9);
    design.addMove(38, 0, [0], 9);

    design.addPiece("Furious-Fiend", 39, 850);
    design.addMove(39, 6, [7, 7, 7], 0);
    design.addMove(39, 6, [11, 11, 11], 0);
    design.addMove(39, 6, [13, 13, 13], 0);
    design.addMove(39, 6, [1, 1, 1], 0);
    design.addMove(39, 6, [14, 14, 14], 0);
    design.addMove(39, 6, [4, 4, 4], 0);
    design.addMove(39, 6, [9, 9, 9], 0);
    design.addMove(39, 6, [0, 0, 0], 0);
    design.addMove(39, 17, [7], 0);
    design.addMove(39, 17, [11], 0);
    design.addMove(39, 17, [13], 0);
    design.addMove(39, 17, [1], 0);
    design.addMove(39, 17, [9], 0);
    design.addMove(39, 17, [4], 0);
    design.addMove(39, 17, [14], 0);
    design.addMove(39, 17, [0], 0);
    design.addMove(39, 0, [7], 9);
    design.addMove(39, 0, [1], 9);
    design.addMove(39, 0, [11], 9);
    design.addMove(39, 0, [13], 9);
    design.addMove(39, 0, [14], 9);
    design.addMove(39, 0, [4], 9);
    design.addMove(39, 0, [9], 9);
    design.addMove(39, 0, [0], 9);

    design.addPiece("Reverse-Chariot", 40, 150);
    design.addMove(40, 1, [7, 7], 0);
    design.addMove(40, 1, [11, 11], 0);

    design.addPiece("Cat-Sword", 41, 72);
    design.addMove(41, 0, [4], 0);
    design.addMove(41, 0, [14], 0);
    design.addMove(41, 0, [0], 0);
    design.addMove(41, 0, [9], 0);

    design.addPiece("Free-Cat", 42, 226);
    design.addMove(42, 1, [4, 4], 0);
    design.addMove(42, 1, [14, 14], 0);
    design.addMove(42, 1, [0, 0], 0);
    design.addMove(42, 1, [9, 9], 0);

    design.addPiece("Chinese-Cock", 43, 86);
    design.addMove(43, 0, [4], 0);
    design.addMove(43, 0, [14], 0);
    design.addMove(43, 0, [13], 0);
    design.addMove(43, 0, [11], 0);
    design.addMove(43, 0, [1], 0);

    design.addPiece("Wizard-Stork", 44, 338);
    design.addMove(44, 0, [11], 0);
    design.addMove(44, 1, [7, 7], 0);
    design.addMove(44, 1, [0, 0], 0);
    design.addMove(44, 1, [4, 4], 0);
    design.addMove(44, 1, [9, 9], 0);
    design.addMove(44, 1, [14, 14], 0);

    design.addPiece("Old-Monkey", 45, 84);
    design.addMove(45, 0, [4], 0);
    design.addMove(45, 0, [0], 0);
    design.addMove(45, 0, [11], 0);
    design.addMove(45, 0, [14], 0);
    design.addMove(45, 0, [9], 0);

    design.addPiece("Mountain-Witch", 46, 304);
    design.addMove(46, 0, [7], 0);
    design.addMove(46, 1, [11, 11], 0);
    design.addMove(46, 1, [0, 0], 0);
    design.addMove(46, 1, [4, 4], 0);
    design.addMove(46, 1, [9, 9], 0);
    design.addMove(46, 1, [14, 14], 0);

    design.addPiece("Coiled-Serpent", 47, 62);
    design.addMove(47, 0, [0], 0);
    design.addMove(47, 0, [9], 0);
    design.addMove(47, 0, [7], 0);
    design.addMove(47, 0, [11], 0);

    design.addPiece("Free-Serpent", 48, 238);
    design.addMove(48, 1, [7, 7], 0);
    design.addMove(48, 1, [0, 0], 0);
    design.addMove(48, 1, [9, 9], 0);
    design.addMove(48, 1, [11, 11], 0);

    design.addPiece("Reclining-Dragon", 49, 98);
    design.addMove(49, 0, [7], 0);
    design.addMove(49, 0, [9], 0);
    design.addMove(49, 0, [0], 0);
    design.addMove(49, 0, [13], 0);
    design.addMove(49, 0, [11], 0);
    design.addMove(49, 0, [1], 0);

    design.addPiece("Free-Dragon", 50, 276);
    design.addMove(50, 0, [11], 0);
    design.addMove(50, 1, [7, 7], 0);
    design.addMove(50, 0, [0], 0);
    design.addMove(50, 1, [4, 4], 0);
    design.addMove(50, 0, [9], 0);
    design.addMove(50, 1, [14, 14], 0);

    design.addPiece("Ferocious-Leopard", 51, 106);
    design.addMove(51, 0, [11], 0);
    design.addMove(51, 0, [7], 0);
    design.addMove(51, 0, [14], 0);
    design.addMove(51, 0, [4], 0);
    design.addMove(51, 0, [9], 0);
    design.addMove(51, 0, [0], 0);

    design.addPiece("Free-Leopard", 52, 366);
    design.addMove(52, 1, [11, 11], 0);
    design.addMove(52, 1, [7, 7], 0);
    design.addMove(52, 1, [14, 14], 0);
    design.addMove(52, 1, [4, 4], 0);
    design.addMove(52, 1, [9, 9], 0);
    design.addMove(52, 1, [0, 0], 0);

    design.addPiece("Blind-Tiger", 53, 120);
    design.addMove(53, 0, [1], 0);
    design.addMove(53, 0, [11], 0);
    design.addMove(53, 0, [13], 0);
    design.addMove(53, 0, [14], 0);
    design.addMove(53, 0, [4], 0);
    design.addMove(53, 0, [9], 0);
    design.addMove(53, 0, [0], 0);

    design.addPiece("Free-Tiger", 54, 430);
    design.addMove(54, 1, [11, 11], 0);
    design.addMove(54, 1, [1, 1], 0);
    design.addMove(54, 1, [13, 13], 0);
    design.addMove(54, 1, [9, 9], 0);
    design.addMove(54, 1, [0, 0], 0);
    design.addMove(54, 1, [14, 14], 0);
    design.addMove(54, 1, [4, 4], 0);

    design.addPiece("Drunk-Elephant", 55, 122);
    design.addMove(55, 0, [1], 0);
    design.addMove(55, 0, [7], 0);
    design.addMove(55, 0, [13], 0);
    design.addMove(55, 0, [14], 0);
    design.addMove(55, 0, [4], 0);
    design.addMove(55, 0, [9], 0);
    design.addMove(55, 0, [0], 0);

    design.addPiece("Crown-Prince", 56, 3500);
    design.addMove(56, 0, [7], 0);
    design.addMove(56, 0, [1], 0);
    design.addMove(56, 0, [11], 0);
    design.addMove(56, 0, [13], 0);
    design.addMove(56, 0, [14], 0);
    design.addMove(56, 0, [4], 0);
    design.addMove(56, 0, [9], 0);
    design.addMove(56, 0, [0], 0);

    design.addPiece("Lance", 57, 94);
    design.addMove(57, 1, [7, 7], 0);

    design.addPiece("Earth-General", 58, 38);
    design.addMove(58, 0, [11], 0);
    design.addMove(58, 0, [7], 0);

    design.addPiece("Free-Earth", 59, 142);
    design.addMove(59, 1, [11, 11], 0);
    design.addMove(59, 1, [7, 7], 0);

    design.addPiece("Stone-General", 60, 36);
    design.addMove(60, 0, [4], 0);
    design.addMove(60, 0, [14], 0);

    design.addPiece("Free-Stone", 61, 132);
    design.addMove(61, 1, [4, 4], 0);
    design.addMove(61, 1, [14, 14], 0);

    design.addPiece("Tile-General", 62, 48);
    design.addMove(62, 0, [4], 0);
    design.addMove(62, 0, [14], 0);
    design.addMove(62, 0, [11], 0);

    design.addPiece("Free-Tile", 63, 152);
    design.addMove(63, 1, [4, 4], 0);
    design.addMove(63, 1, [14, 14], 0);
    design.addMove(63, 1, [11, 11], 0);

    design.addPiece("Iron-General", 64, 60);
    design.addMove(64, 0, [4], 0);
    design.addMove(64, 0, [7], 0);
    design.addMove(64, 0, [14], 0);

    design.addPiece("Free-Iron", 65, 166);
    design.addMove(65, 1, [4, 4], 0);
    design.addMove(65, 1, [7, 7], 0);
    design.addMove(65, 1, [14, 14], 0);

    design.addPiece("Copper-General", 66, 72);
    design.addMove(66, 0, [11], 0);
    design.addMove(66, 0, [7], 0);
    design.addMove(66, 0, [14], 0);
    design.addMove(66, 0, [4], 0);

    design.addPiece("Free-Copper", 67, 284);
    design.addMove(67, 1, [11, 11], 0);
    design.addMove(67, 1, [7, 7], 0);
    design.addMove(67, 1, [14, 14], 0);
    design.addMove(67, 1, [4, 4], 0);

    design.addPiece("Silver-General", 68, 84);
    design.addMove(68, 0, [9], 0);
    design.addMove(68, 0, [0], 0);
    design.addMove(68, 0, [14], 0);
    design.addMove(68, 0, [4], 0);
    design.addMove(68, 0, [7], 0);

    design.addPiece("Free-Silver", 69, 314);
    design.addMove(69, 1, [9, 9], 0);
    design.addMove(69, 1, [0, 0], 0);
    design.addMove(69, 1, [14, 14], 0);
    design.addMove(69, 1, [4, 4], 0);
    design.addMove(69, 1, [7, 7], 0);

    design.addPiece("Gold-General", 70, 108);
    design.addMove(70, 0, [11], 0);
    design.addMove(70, 0, [7], 0);
    design.addMove(70, 0, [14], 0);
    design.addMove(70, 0, [4], 0);
    design.addMove(70, 0, [1], 0);
    design.addMove(70, 0, [13], 0);

    design.addPiece("Free-Gold", 71, 400);
    design.addMove(71, 1, [11, 11], 0);
    design.addMove(71, 1, [7, 7], 0);
    design.addMove(71, 1, [14, 14], 0);
    design.addMove(71, 1, [4, 4], 0);
    design.addMove(71, 1, [1, 1], 0);
    design.addMove(71, 1, [13, 13], 0);

    design.addPiece("Deva", 72, 70);
    design.addMove(72, 0, [4], 0);
    design.addMove(72, 0, [14], 0);
    design.addMove(72, 0, [13], 0);
    design.addMove(72, 0, [9], 0);

    design.addPiece("Teaching-King", 73, 1090);
    design.addMove(73, 1, [7, 7], 0);
    design.addMove(73, 1, [1, 1], 0);
    design.addMove(73, 1, [11, 11], 0);
    design.addMove(73, 1, [13, 13], 0);
    design.addMove(73, 1, [4, 4], 0);
    design.addMove(73, 1, [14, 14], 0);
    design.addMove(73, 1, [9, 9], 0);
    design.addMove(73, 1, [0, 0], 0);
    design.addMove(73, 9, [7], 0);
    design.addMove(73, 9, [11], 0);
    design.addMove(73, 10, [13], 0);
    design.addMove(73, 10, [1], 0);
    design.addMove(73, 11, [9], 0);
    design.addMove(73, 11, [4], 0);
    design.addMove(73, 12, [14], 0);
    design.addMove(73, 12, [0], 0);
    design.addMove(73, 13, [7], 1);
    design.addMove(73, 13, [11], 1);
    design.addMove(73, 14, [13], 2);
    design.addMove(73, 14, [1], 2);
    design.addMove(73, 15, [9], 3);
    design.addMove(73, 15, [4], 3);
    design.addMove(73, 16, [14], 4);
    design.addMove(73, 16, [0], 4);
    design.addMove(73, 0, [7], 5);
    design.addMove(73, 0, [11], 5);
    design.addMove(73, 0, [13], 6);
    design.addMove(73, 0, [1], 6);
    design.addMove(73, 0, [9], 7);
    design.addMove(73, 0, [4], 7);
    design.addMove(73, 0, [14], 8);
    design.addMove(73, 0, [0], 8);

    design.addPiece("Dark-Spirit", 74, 70);
    design.addMove(74, 0, [4], 0);
    design.addMove(74, 0, [14], 0);
    design.addMove(74, 0, [0], 0);
    design.addMove(74, 0, [1], 0);

    design.addPiece("Buddhist-Spirit", 75, 984);
    design.addMove(75, 1, [7, 7], 0);
    design.addMove(75, 1, [11, 11], 0);
    design.addMove(75, 1, [13, 13], 0);
    design.addMove(75, 1, [1, 1], 0);
    design.addMove(75, 1, [14, 14], 0);
    design.addMove(75, 1, [4, 4], 0);
    design.addMove(75, 1, [9, 9], 0);
    design.addMove(75, 1, [0, 0], 0);
    design.addMove(75, 17, [7], 0);
    design.addMove(75, 17, [11], 0);
    design.addMove(75, 17, [13], 0);
    design.addMove(75, 17, [1], 0);
    design.addMove(75, 17, [9], 0);
    design.addMove(75, 17, [4], 0);
    design.addMove(75, 17, [14], 0);
    design.addMove(75, 17, [0], 0);
    design.addMove(75, 0, [7], 9);
    design.addMove(75, 0, [1], 9);
    design.addMove(75, 0, [11], 9);
    design.addMove(75, 0, [13], 9);
    design.addMove(75, 0, [14], 9);
    design.addMove(75, 0, [4], 9);
    design.addMove(75, 0, [9], 9);
    design.addMove(75, 0, [0], 9);

    design.addPiece("King", 76, 3500);
    design.addMove(76, 0, [7], 0);
    design.addMove(76, 0, [1], 0);
    design.addMove(76, 0, [11], 0);
    design.addMove(76, 0, [13], 0);
    design.addMove(76, 0, [14], 0);
    design.addMove(76, 0, [4], 0);
    design.addMove(76, 0, [9], 0);
    design.addMove(76, 0, [0], 0);

    design.addPiece("Emperor", 77, 3520);

    design.setup("Black", "King", 162);
    design.setup("Black", "Deva", 161);
    design.setup("Black", "Dark-Spirit", 163);
    design.setup("Black", "Gold-General", 160);
    design.setup("Black", "Gold-General", 164);
    design.setup("Black", "Silver-General", 159);
    design.setup("Black", "Silver-General", 165);
    design.setup("Black", "Copper-General", 158);
    design.setup("Black", "Copper-General", 166);
    design.setup("Black", "Kylin", 157);
    design.setup("Black", "Phoenix", 167);
    design.setup("Black", "Lance", 156);
    design.setup("Black", "Lance", 168);
    design.setup("Black", "Drunk-Elephant", 149);
    design.setup("Black", "Blind-Tiger", 148);
    design.setup("Black", "Blind-Tiger", 150);
    design.setup("Black", "Lion", 146);
    design.setup("Black", "Lion-Dog", 152);
    design.setup("Black", "Flying-Dragon", 144);
    design.setup("Black", "Flying-Dragon", 154);
    design.setup("Black", "Free-King", 136);
    design.setup("Black", "Capricorn", 135);
    design.setup("Black", "Hook-Mover", 137);
    design.setup("Black", "Dragon-King", 134);
    design.setup("Black", "Dragon-King", 138);
    design.setup("Black", "Bishop", 133);
    design.setup("Black", "Bishop", 139);
    design.setup("Black", "Wrestler", 132);
    design.setup("Black", "Wrestler", 140);
    design.setup("Black", "Left-Chariot", 131);
    design.setup("Black", "Right-Chariot", 141);
    design.setup("Black", "Rook", 130);
    design.setup("Black", "Rook", 142);
    design.setup("Black", "Pawn", 129);
    design.setup("Black", "Pawn", 128);
    design.setup("Black", "Pawn", 127);
    design.setup("Black", "Pawn", 126);
    design.setup("Black", "Pawn", 125);
    design.setup("Black", "Pawn", 124);
    design.setup("Black", "Pawn", 123);
    design.setup("Black", "Pawn", 122);
    design.setup("Black", "Pawn", 121);
    design.setup("Black", "Pawn", 120);
    design.setup("Black", "Pawn", 119);
    design.setup("Black", "Pawn", 118);
    design.setup("Black", "Pawn", 117);
    design.setup("Black", "Go-Between", 107);
    design.setup("Black", "Go-Between", 113);
    design.setup("White", "King", 6);
    design.setup("White", "Deva", 7);
    design.setup("White", "Dark-Spirit", 5);
    design.setup("White", "Gold-General", 4);
    design.setup("White", "Gold-General", 8);
    design.setup("White", "Silver-General", 3);
    design.setup("White", "Silver-General", 9);
    design.setup("White", "Copper-General", 2);
    design.setup("White", "Copper-General", 10);
    design.setup("White", "Kylin", 11);
    design.setup("White", "Phoenix", 1);
    design.setup("White", "Lance", 0);
    design.setup("White", "Lance", 12);
    design.setup("White", "Drunk-Elephant", 19);
    design.setup("White", "Blind-Tiger", 18);
    design.setup("White", "Blind-Tiger", 20);
    design.setup("White", "Lion", 22);
    design.setup("White", "Lion-Dog", 16);
    design.setup("White", "Flying-Dragon", 14);
    design.setup("White", "Flying-Dragon", 24);
    design.setup("White", "Free-King", 32);
    design.setup("White", "Capricorn", 33);
    design.setup("White", "Hook-Mover", 31);
    design.setup("White", "Dragon-King", 30);
    design.setup("White", "Dragon-King", 34);
    design.setup("White", "Bishop", 29);
    design.setup("White", "Bishop", 35);
    design.setup("White", "Wrestler", 28);
    design.setup("White", "Wrestler", 36);
    design.setup("White", "Left-Chariot", 37);
    design.setup("White", "Right-Chariot", 27);
    design.setup("White", "Rook", 26);
    design.setup("White", "Rook", 38);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 49);
    design.setup("White", "Pawn", 48);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 44);
    design.setup("White", "Pawn", 43);
    design.setup("White", "Pawn", 42);
    design.setup("White", "Pawn", 41);
    design.setup("White", "Pawn", 40);
    design.setup("White", "Pawn", 39);
    design.setup("White", "Go-Between", 55);
    design.setup("White", "Go-Between", 61);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteGo-Between", "White Go-Between");
    view.defPiece("BlackGo-Between", "Black Go-Between");
    view.defPiece("WhiteFree-Goer", "White Free-Goer");
    view.defPiece("BlackFree-Goer", "Black Free-Goer");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteTokin", "White Tokin");
    view.defPiece("BlackTokin", "Black Tokin");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteGold-Promoted", "White Gold-Promoted");
    view.defPiece("BlackGold-Promoted", "Black Gold-Promoted");
    view.defPiece("WhiteLeft-Chariot", "White Left-Chariot");
    view.defPiece("BlackLeft-Chariot", "Black Left-Chariot");
    view.defPiece("WhiteRight-Chariot", "White Right-Chariot");
    view.defPiece("BlackRight-Chariot", "Black Right-Chariot");
    view.defPiece("WhiteSide-Mover", "White Side-Mover");
    view.defPiece("BlackSide-Mover", "Black Side-Mover");
    view.defPiece("WhiteSide-Flyer", "White Side-Flyer");
    view.defPiece("BlackSide-Flyer", "Black Side-Flyer");
    view.defPiece("WhiteVertical-Mover", "White Vertical-Mover");
    view.defPiece("BlackVertical-Mover", "Black Vertical-Mover");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteDragon-Horse", "White Dragon-Horse");
    view.defPiece("BlackDragon-Horse", "Black Dragon-Horse");
    view.defPiece("WhiteDragon-King", "White Dragon-King");
    view.defPiece("BlackDragon-King", "Black Dragon-King");
    view.defPiece("WhiteCapricorn", "White Capricorn");
    view.defPiece("BlackCapricorn", "Black Capricorn");
    view.defPiece("WhiteHook-Mover", "White Hook-Mover");
    view.defPiece("BlackHook-Mover", "Black Hook-Mover");
    view.defPiece("WhiteFree-King", "White Free-King");
    view.defPiece("BlackFree-King", "Black Free-King");
    view.defPiece("WhiteDonkey", "White Donkey");
    view.defPiece("BlackDonkey", "Black Donkey");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteViolent-Ox", "White Violent-Ox");
    view.defPiece("BlackViolent-Ox", "Black Violent-Ox");
    view.defPiece("WhiteFlying-Dragon", "White Flying-Dragon");
    view.defPiece("BlackFlying-Dragon", "Black Flying-Dragon");
    view.defPiece("WhiteBuddhist-Devil", "White Buddhist-Devil");
    view.defPiece("BlackBuddhist-Devil", "Black Buddhist-Devil");
    view.defPiece("WhiteShe-Devil", "White She-Devil");
    view.defPiece("BlackShe-Devil", "Black She-Devil");
    view.defPiece("WhiteWrestler", "White Wrestler");
    view.defPiece("BlackWrestler", "Black Wrestler");
    view.defPiece("WhiteGuardian-of-the-Gods", "White Guardian-of-the-Gods");
    view.defPiece("BlackGuardian-of-the-Gods", "Black Guardian-of-the-Gods");
    view.defPiece("WhiteLion-Dog", "White Lion-Dog");
    view.defPiece("BlackLion-Dog", "Black Lion-Dog");
    view.defPiece("WhiteOld-Rat", "White Old-Rat");
    view.defPiece("BlackOld-Rat", "Black Old-Rat");
    view.defPiece("WhiteBat", "White Bat");
    view.defPiece("BlackBat", "Black Bat");
    view.defPiece("WhiteAngry-Boar", "White Angry-Boar");
    view.defPiece("BlackAngry-Boar", "Black Angry-Boar");
    view.defPiece("WhiteFree-Boar", "White Free-Boar");
    view.defPiece("BlackFree-Boar", "Black Free-Boar");
    view.defPiece("WhiteBlind-Bear", "White Blind-Bear");
    view.defPiece("BlackBlind-Bear", "Black Blind-Bear");
    view.defPiece("WhiteFree-Bear", "White Free-Bear");
    view.defPiece("BlackFree-Bear", "Black Free-Bear");
    view.defPiece("WhiteEvil-Wolf", "White Evil-Wolf");
    view.defPiece("BlackEvil-Wolf", "Black Evil-Wolf");
    view.defPiece("WhiteFree-Wolf", "White Free-Wolf");
    view.defPiece("BlackFree-Wolf", "Black Free-Wolf");
    view.defPiece("WhiteKylin", "White Kylin");
    view.defPiece("BlackKylin", "Black Kylin");
    view.defPiece("WhiteGreat-Dragon", "White Great-Dragon");
    view.defPiece("BlackGreat-Dragon", "Black Great-Dragon");
    view.defPiece("WhitePhoenix", "White Phoenix");
    view.defPiece("BlackPhoenix", "Black Phoenix");
    view.defPiece("WhiteGolden-Bird", "White Golden-Bird");
    view.defPiece("BlackGolden-Bird", "Black Golden-Bird");
    view.defPiece("WhiteLion", "White Lion");
    view.defPiece("BlackLion", "Black Lion");
    view.defPiece("WhiteFurious-Fiend", "White Furious-Fiend");
    view.defPiece("BlackFurious-Fiend", "Black Furious-Fiend");
    view.defPiece("WhiteReverse-Chariot", "White Reverse-Chariot");
    view.defPiece("BlackReverse-Chariot", "Black Reverse-Chariot");
    view.defPiece("WhiteCat-Sword", "White Cat-Sword");
    view.defPiece("BlackCat-Sword", "Black Cat-Sword");
    view.defPiece("WhiteFree-Cat", "White Free-Cat");
    view.defPiece("BlackFree-Cat", "Black Free-Cat");
    view.defPiece("WhiteChinese-Cock", "White Chinese-Cock");
    view.defPiece("BlackChinese-Cock", "Black Chinese-Cock");
    view.defPiece("WhiteWizard-Stork", "White Wizard-Stork");
    view.defPiece("BlackWizard-Stork", "Black Wizard-Stork");
    view.defPiece("WhiteOld-Monkey", "White Old-Monkey");
    view.defPiece("BlackOld-Monkey", "Black Old-Monkey");
    view.defPiece("WhiteMountain-Witch", "White Mountain-Witch");
    view.defPiece("BlackMountain-Witch", "Black Mountain-Witch");
    view.defPiece("WhiteCoiled-Serpent", "White Coiled-Serpent");
    view.defPiece("BlackCoiled-Serpent", "Black Coiled-Serpent");
    view.defPiece("WhiteFree-Serpent", "White Free-Serpent");
    view.defPiece("BlackFree-Serpent", "Black Free-Serpent");
    view.defPiece("WhiteReclining-Dragon", "White Reclining-Dragon");
    view.defPiece("BlackReclining-Dragon", "Black Reclining-Dragon");
    view.defPiece("WhiteFree-Dragon", "White Free-Dragon");
    view.defPiece("BlackFree-Dragon", "Black Free-Dragon");
    view.defPiece("WhiteFerocious-Leopard", "White Ferocious-Leopard");
    view.defPiece("BlackFerocious-Leopard", "Black Ferocious-Leopard");
    view.defPiece("WhiteFree-Leopard", "White Free-Leopard");
    view.defPiece("BlackFree-Leopard", "Black Free-Leopard");
    view.defPiece("WhiteBlind-Tiger", "White Blind-Tiger");
    view.defPiece("BlackBlind-Tiger", "Black Blind-Tiger");
    view.defPiece("WhiteFree-Tiger", "White Free-Tiger");
    view.defPiece("BlackFree-Tiger", "Black Free-Tiger");
    view.defPiece("WhiteDrunk-Elephant", "White Drunk-Elephant");
    view.defPiece("BlackDrunk-Elephant", "Black Drunk-Elephant");
    view.defPiece("WhiteCrown-Prince", "White Crown-Prince");
    view.defPiece("BlackCrown-Prince", "Black Crown-Prince");
    view.defPiece("WhiteLance", "White Lance");
    view.defPiece("BlackLance", "Black Lance");
    view.defPiece("WhiteEarth-General", "White Earth-General");
    view.defPiece("BlackEarth-General", "Black Earth-General");
    view.defPiece("WhiteFree-Earth", "White Free-Earth");
    view.defPiece("BlackFree-Earth", "Black Free-Earth");
    view.defPiece("WhiteStone-General", "White Stone-General");
    view.defPiece("BlackStone-General", "Black Stone-General");
    view.defPiece("WhiteFree-Stone", "White Free-Stone");
    view.defPiece("BlackFree-Stone", "Black Free-Stone");
    view.defPiece("WhiteTile-General", "White Tile-General");
    view.defPiece("BlackTile-General", "Black Tile-General");
    view.defPiece("WhiteFree-Tile", "White Free-Tile");
    view.defPiece("BlackFree-Tile", "Black Free-Tile");
    view.defPiece("WhiteIron-General", "White Iron-General");
    view.defPiece("BlackIron-General", "Black Iron-General");
    view.defPiece("WhiteFree-Iron", "White Free-Iron");
    view.defPiece("BlackFree-Iron", "Black Free-Iron");
    view.defPiece("WhiteCopper-General", "White Copper-General");
    view.defPiece("BlackCopper-General", "Black Copper-General");
    view.defPiece("WhiteFree-Copper", "White Free-Copper");
    view.defPiece("BlackFree-Copper", "Black Free-Copper");
    view.defPiece("WhiteSilver-General", "White Silver-General");
    view.defPiece("BlackSilver-General", "Black Silver-General");
    view.defPiece("WhiteFree-Silver", "White Free-Silver");
    view.defPiece("BlackFree-Silver", "Black Free-Silver");
    view.defPiece("WhiteGold-General", "White Gold-General");
    view.defPiece("BlackGold-General", "Black Gold-General");
    view.defPiece("WhiteFree-Gold", "White Free-Gold");
    view.defPiece("BlackFree-Gold", "Black Free-Gold");
    view.defPiece("WhiteDeva", "White Deva");
    view.defPiece("BlackDeva", "Black Deva");
    view.defPiece("WhiteTeaching-King", "White Teaching-King");
    view.defPiece("BlackTeaching-King", "Black Teaching-King");
    view.defPiece("WhiteDark-Spirit", "White Dark-Spirit");
    view.defPiece("BlackDark-Spirit", "Black Dark-Spirit");
    view.defPiece("WhiteBuddhist-Spirit", "White Buddhist-Spirit");
    view.defPiece("BlackBuddhist-Spirit", "Black Buddhist-Spirit");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteEmperor", "White Emperor");
    view.defPiece("BlackEmperor", "Black Emperor");
 
    view.defPosition("a13", 25, 25, 38, 38);
    view.defPosition("b13", 68, 25, 38, 38);
    view.defPosition("c13", 111, 25, 38, 38);
    view.defPosition("d13", 154, 25, 38, 38);
    view.defPosition("e13", 197, 25, 38, 38);
    view.defPosition("f13", 240, 25, 38, 38);
    view.defPosition("g13", 283, 25, 38, 38);
    view.defPosition("h13", 326, 25, 38, 38);
    view.defPosition("i13", 369, 25, 38, 38);
    view.defPosition("j13", 412, 25, 38, 38);
    view.defPosition("k13", 455, 25, 38, 38);
    view.defPosition("l13", 498, 25, 38, 38);
    view.defPosition("m13", 541, 25, 38, 38);
    view.defPosition("a12", 25, 68, 38, 38);
    view.defPosition("b12", 68, 68, 38, 38);
    view.defPosition("c12", 111, 68, 38, 38);
    view.defPosition("d12", 154, 68, 38, 38);
    view.defPosition("e12", 197, 68, 38, 38);
    view.defPosition("f12", 240, 68, 38, 38);
    view.defPosition("g12", 283, 68, 38, 38);
    view.defPosition("h12", 326, 68, 38, 38);
    view.defPosition("i12", 369, 68, 38, 38);
    view.defPosition("j12", 412, 68, 38, 38);
    view.defPosition("k12", 455, 68, 38, 38);
    view.defPosition("l12", 498, 68, 38, 38);
    view.defPosition("m12", 541, 68, 38, 38);
    view.defPosition("a11", 25, 111, 38, 38);
    view.defPosition("b11", 68, 111, 38, 38);
    view.defPosition("c11", 111, 111, 38, 38);
    view.defPosition("d11", 154, 111, 38, 38);
    view.defPosition("e11", 197, 111, 38, 38);
    view.defPosition("f11", 240, 111, 38, 38);
    view.defPosition("g11", 283, 111, 38, 38);
    view.defPosition("h11", 326, 111, 38, 38);
    view.defPosition("i11", 369, 111, 38, 38);
    view.defPosition("j11", 412, 111, 38, 38);
    view.defPosition("k11", 455, 111, 38, 38);
    view.defPosition("l11", 498, 111, 38, 38);
    view.defPosition("m11", 541, 111, 38, 38);
    view.defPosition("a10", 25, 154, 38, 38);
    view.defPosition("b10", 68, 154, 38, 38);
    view.defPosition("c10", 111, 154, 38, 38);
    view.defPosition("d10", 154, 154, 38, 38);
    view.defPosition("e10", 197, 154, 38, 38);
    view.defPosition("f10", 240, 154, 38, 38);
    view.defPosition("g10", 283, 154, 38, 38);
    view.defPosition("h10", 326, 154, 38, 38);
    view.defPosition("i10", 369, 154, 38, 38);
    view.defPosition("j10", 412, 154, 38, 38);
    view.defPosition("k10", 455, 154, 38, 38);
    view.defPosition("l10", 498, 154, 38, 38);
    view.defPosition("m10", 541, 154, 38, 38);
    view.defPosition("a9", 25, 197, 38, 38);
    view.defPosition("b9", 68, 197, 38, 38);
    view.defPosition("c9", 111, 197, 38, 38);
    view.defPosition("d9", 154, 197, 38, 38);
    view.defPosition("e9", 197, 197, 38, 38);
    view.defPosition("f9", 240, 197, 38, 38);
    view.defPosition("g9", 283, 197, 38, 38);
    view.defPosition("h9", 326, 197, 38, 38);
    view.defPosition("i9", 369, 197, 38, 38);
    view.defPosition("j9", 412, 197, 38, 38);
    view.defPosition("k9", 455, 197, 38, 38);
    view.defPosition("l9", 498, 197, 38, 38);
    view.defPosition("m9", 541, 197, 38, 38);
    view.defPosition("a8", 25, 240, 38, 38);
    view.defPosition("b8", 68, 240, 38, 38);
    view.defPosition("c8", 111, 240, 38, 38);
    view.defPosition("d8", 154, 240, 38, 38);
    view.defPosition("e8", 197, 240, 38, 38);
    view.defPosition("f8", 240, 240, 38, 38);
    view.defPosition("g8", 283, 240, 38, 38);
    view.defPosition("h8", 326, 240, 38, 38);
    view.defPosition("i8", 369, 240, 38, 38);
    view.defPosition("j8", 412, 240, 38, 38);
    view.defPosition("k8", 455, 240, 38, 38);
    view.defPosition("l8", 498, 240, 38, 38);
    view.defPosition("m8", 541, 240, 38, 38);
    view.defPosition("a7", 25, 283, 38, 38);
    view.defPosition("b7", 68, 283, 38, 38);
    view.defPosition("c7", 111, 283, 38, 38);
    view.defPosition("d7", 154, 283, 38, 38);
    view.defPosition("e7", 197, 283, 38, 38);
    view.defPosition("f7", 240, 283, 38, 38);
    view.defPosition("g7", 283, 283, 38, 38);
    view.defPosition("h7", 326, 283, 38, 38);
    view.defPosition("i7", 369, 283, 38, 38);
    view.defPosition("j7", 412, 283, 38, 38);
    view.defPosition("k7", 455, 283, 38, 38);
    view.defPosition("l7", 498, 283, 38, 38);
    view.defPosition("m7", 541, 283, 38, 38);
    view.defPosition("a6", 25, 326, 38, 38);
    view.defPosition("b6", 68, 326, 38, 38);
    view.defPosition("c6", 111, 326, 38, 38);
    view.defPosition("d6", 154, 326, 38, 38);
    view.defPosition("e6", 197, 326, 38, 38);
    view.defPosition("f6", 240, 326, 38, 38);
    view.defPosition("g6", 283, 326, 38, 38);
    view.defPosition("h6", 326, 326, 38, 38);
    view.defPosition("i6", 369, 326, 38, 38);
    view.defPosition("j6", 412, 326, 38, 38);
    view.defPosition("k6", 455, 326, 38, 38);
    view.defPosition("l6", 498, 326, 38, 38);
    view.defPosition("m6", 541, 326, 38, 38);
    view.defPosition("a5", 25, 369, 38, 38);
    view.defPosition("b5", 68, 369, 38, 38);
    view.defPosition("c5", 111, 369, 38, 38);
    view.defPosition("d5", 154, 369, 38, 38);
    view.defPosition("e5", 197, 369, 38, 38);
    view.defPosition("f5", 240, 369, 38, 38);
    view.defPosition("g5", 283, 369, 38, 38);
    view.defPosition("h5", 326, 369, 38, 38);
    view.defPosition("i5", 369, 369, 38, 38);
    view.defPosition("j5", 412, 369, 38, 38);
    view.defPosition("k5", 455, 369, 38, 38);
    view.defPosition("l5", 498, 369, 38, 38);
    view.defPosition("m5", 541, 369, 38, 38);
    view.defPosition("a4", 25, 412, 38, 38);
    view.defPosition("b4", 68, 412, 38, 38);
    view.defPosition("c4", 111, 412, 38, 38);
    view.defPosition("d4", 154, 412, 38, 38);
    view.defPosition("e4", 197, 412, 38, 38);
    view.defPosition("f4", 240, 412, 38, 38);
    view.defPosition("g4", 283, 412, 38, 38);
    view.defPosition("h4", 326, 412, 38, 38);
    view.defPosition("i4", 369, 412, 38, 38);
    view.defPosition("j4", 412, 412, 38, 38);
    view.defPosition("k4", 455, 412, 38, 38);
    view.defPosition("l4", 498, 412, 38, 38);
    view.defPosition("m4", 541, 412, 38, 38);
    view.defPosition("a3", 25, 455, 38, 38);
    view.defPosition("b3", 68, 455, 38, 38);
    view.defPosition("c3", 111, 455, 38, 38);
    view.defPosition("d3", 154, 455, 38, 38);
    view.defPosition("e3", 197, 455, 38, 38);
    view.defPosition("f3", 240, 455, 38, 38);
    view.defPosition("g3", 283, 455, 38, 38);
    view.defPosition("h3", 326, 455, 38, 38);
    view.defPosition("i3", 369, 455, 38, 38);
    view.defPosition("j3", 412, 455, 38, 38);
    view.defPosition("k3", 455, 455, 38, 38);
    view.defPosition("l3", 498, 455, 38, 38);
    view.defPosition("m3", 541, 455, 38, 38);
    view.defPosition("a2", 25, 498, 38, 38);
    view.defPosition("b2", 68, 498, 38, 38);
    view.defPosition("c2", 111, 498, 38, 38);
    view.defPosition("d2", 154, 498, 38, 38);
    view.defPosition("e2", 197, 498, 38, 38);
    view.defPosition("f2", 240, 498, 38, 38);
    view.defPosition("g2", 283, 498, 38, 38);
    view.defPosition("h2", 326, 498, 38, 38);
    view.defPosition("i2", 369, 498, 38, 38);
    view.defPosition("j2", 412, 498, 38, 38);
    view.defPosition("k2", 455, 498, 38, 38);
    view.defPosition("l2", 498, 498, 38, 38);
    view.defPosition("m2", 541, 498, 38, 38);
    view.defPosition("a1", 25, 541, 38, 38);
    view.defPosition("b1", 68, 541, 38, 38);
    view.defPosition("c1", 111, 541, 38, 38);
    view.defPosition("d1", 154, 541, 38, 38);
    view.defPosition("e1", 197, 541, 38, 38);
    view.defPosition("f1", 240, 541, 38, 38);
    view.defPosition("g1", 283, 541, 38, 38);
    view.defPosition("h1", 326, 541, 38, 38);
    view.defPosition("i1", 369, 541, 38, 38);
    view.defPosition("j1", 412, 541, 38, 38);
    view.defPosition("k1", 455, 541, 38, 38);
    view.defPosition("l1", 498, 541, 38, 38);
    view.defPosition("m1", 541, 541, 38, 38);

    view.defPopup("Promote", 250, 20);
    view.defPopupPosition("T1", 36, 120, 39, 39);
    view.defPopupPosition("T2", 36, 165, 39, 39);
}
