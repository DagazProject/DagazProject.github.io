Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("Red", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a14", [16, 15, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("c14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("d14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("e14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("f14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("g14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("h14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("i14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("j14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("k14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("l14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("m14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("n14", [16, 15, 14, 1, -1, 0, 0, 0]);
    design.addPosition("o14", [0, 15, 14, 0, -1, 0, 0, 0]);
    design.addPosition("a13", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n13", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o13", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a12", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n12", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o12", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a11", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n11", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o11", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a10", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n10", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o10", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a9", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n9", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o9", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a8", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n8", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o8", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a7", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n7", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o7", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a6", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n6", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o6", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a5", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n5", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o5", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a4", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n4", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o4", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a3", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n3", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o3", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a2", [16, 15, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("c2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("d2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("e2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("f2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("g2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("h2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("i2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("j2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("k2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("l2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("m2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("n2", [16, 15, 14, 1, -1, -14, -16, -15]);
    design.addPosition("o2", [0, 15, 14, 0, -1, 0, -16, -15]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -14, 0, -15]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("l1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("m1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("n1", [0, 0, 0, 1, -1, -14, -16, -15]);
    design.addPosition("o1", [0, 0, 0, 0, -1, 0, -16, -15]);

    design.addZone("left-flank", 1, [195, 180, 165, 150, 135, 196, 181, 166, 151, 136, 197, 182, 167, 152, 137]);
    design.addZone("left-flank", 2, [72, 57, 42, 27, 12, 73, 58, 43, 28, 13, 74, 59, 44, 29, 14]);
    design.addZone("right-flank", 1, [207, 192, 177, 162, 147, 208, 193, 178, 163, 148, 209, 194, 179, 164, 149]);
    design.addZone("right-flank", 2, [60, 45, 30, 15, 0, 61, 46, 31, 16, 1, 62, 47, 32, 17, 2]);
    design.addZone("fortress", 1, [180, 165, 150, 45, 30, 15, 181, 166, 151, 46, 31, 16, 182, 167, 152, 47, 32, 17, 186, 171, 156, 51, 36, 21, 187, 172, 157, 52, 37, 22, 188, 173, 158, 53, 38, 23, 192, 177, 162, 57, 42, 27, 193, 178, 163, 58, 43, 28, 194, 179, 164, 59, 44, 29]);
    design.addZone("fortress", 2, [180, 165, 150, 45, 30, 15, 181, 166, 151, 46, 31, 16, 182, 167, 152, 47, 32, 17, 186, 171, 156, 51, 36, 21, 187, 172, 157, 52, 37, 22, 188, 173, 158, 53, 38, 23, 192, 177, 162, 57, 42, 27, 193, 178, 163, 58, 43, 28, 194, 179, 164, 59, 44, 29]);
    design.addZone("cross", 1, [180, 150, 45, 15, 166, 31, 182, 152, 47, 17, 186, 156, 51, 21, 172, 37, 188, 158, 53, 23, 192, 162, 57, 27, 178, 43, 194, 164, 59, 29]);
    design.addZone("cross", 2, [180, 150, 45, 15, 166, 31, 182, 152, 47, 17, 186, 156, 51, 21, 172, 37, 188, 158, 53, 23, 192, 162, 57, 27, 178, 43, 194, 164, 59, 29]);
    design.addZone("middle", 1, [180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164]);
    design.addZone("middle", 2, [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
    design.addZone("outer", 1, [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    design.addZone("outer", 2, [195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104]);
    design.addZone("inner", 1, [195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134]);
    design.addZone("inner", 2, [75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);

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
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	2);	// fortress
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	3);	// cross
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.LITERAL,	7);	// Cannon
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	7);	// Cannon
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
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
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	10);
    design.addCommand(7, ZRF.IN_ZONE,	4);	// middle
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-11);
    design.addCommand(7, ZRF.IN_ZONE,	4);	// middle
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	10);
    design.addCommand(9, ZRF.IN_ZONE,	5);	// outer
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.FORK,	3);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-11);
    design.addCommand(9, ZRF.IN_ZONE,	5);	// outer
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	10);
    design.addCommand(10, ZRF.IN_ZONE,	6);	// inner
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	4);
    design.addCommand(10, ZRF.FORK,	3);
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.JUMP,	-11);
    design.addCommand(10, ZRF.IN_ZONE,	6);	// inner
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 800);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Soldier", 1, 800);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 0);

    design.addPiece("King", 2, 600000);
    design.addMove(2, 1, [7], 0);
    design.addMove(2, 1, [1], 0);
    design.addMove(2, 1, [4], 0);
    design.addMove(2, 1, [3], 0);
    design.addMove(2, 2, [6], 0);
    design.addMove(2, 2, [2], 0);
    design.addMove(2, 2, [5], 0);
    design.addMove(2, 2, [0], 0);

    design.addPiece("General", 3, 10000);
    design.addMove(3, 1, [7], 0);
    design.addMove(3, 1, [1], 0);
    design.addMove(3, 1, [4], 0);
    design.addMove(3, 1, [3], 0);
    design.addMove(3, 2, [6], 0);
    design.addMove(3, 2, [2], 0);
    design.addMove(3, 2, [5], 0);
    design.addMove(3, 2, [0], 0);

    design.addPiece("Guard", 4, 800);
    design.addMove(4, 1, [7], 0);
    design.addMove(4, 1, [1], 0);
    design.addMove(4, 1, [4], 0);
    design.addMove(4, 1, [3], 0);
    design.addMove(4, 2, [6], 0);
    design.addMove(4, 2, [2], 0);
    design.addMove(4, 2, [5], 0);
    design.addMove(4, 2, [0], 0);

    design.addPiece("Elephant", 5, 1500);
    design.addMove(5, 3, [7, 6, 6], 0);
    design.addMove(5, 3, [7, 5, 5], 0);
    design.addMove(5, 3, [1, 2, 2], 0);
    design.addMove(5, 3, [1, 0, 0], 0);
    design.addMove(5, 3, [4, 6, 6], 0);
    design.addMove(5, 3, [3, 5, 5], 0);
    design.addMove(5, 3, [4, 2, 2], 0);
    design.addMove(5, 3, [3, 0, 0], 0);

    design.addPiece("Chariot", 6, 5500);
    design.addMove(6, 4, [7, 7], 0);
    design.addMove(6, 4, [1, 1], 0);
    design.addMove(6, 4, [4, 4], 0);
    design.addMove(6, 4, [3, 3], 0);

    design.addPiece("Cannon", 7, 4000);
    design.addMove(7, 5, [7, 7, 7, 7], 0);
    design.addMove(7, 5, [1, 1, 1, 1], 0);
    design.addMove(7, 5, [4, 4, 4, 4], 0);
    design.addMove(7, 5, [3, 3, 3, 3], 0);

    design.addPiece("Horse", 8, 3350);
    design.addMove(8, 6, [7, 6], 0);
    design.addMove(8, 6, [7, 5], 0);
    design.addMove(8, 6, [1, 2], 0);
    design.addMove(8, 6, [1, 0], 0);
    design.addMove(8, 6, [4, 6], 0);
    design.addMove(8, 6, [3, 5], 0);
    design.addMove(8, 6, [4, 2], 0);
    design.addMove(8, 6, [3, 0], 0);

    design.addPiece("Warrior", 9, 2500);
    design.addMove(9, 7, [7, 7], 0);
    design.addMove(9, 7, [1, 1], 0);
    design.addMove(9, 7, [4, 4], 0);
    design.addMove(9, 7, [3, 3], 0);

    design.addPiece("Knight", 10, 1500);
    design.addMove(10, 6, [6, 6], 0);
    design.addMove(10, 6, [5, 5], 0);
    design.addMove(10, 6, [2, 2], 0);
    design.addMove(10, 6, [0, 0], 0);

    design.addPiece("Killer", 11, 1500);
    design.addMove(11, 8, [7, 7, 6], 0);
    design.addMove(11, 8, [7, 7, 5], 0);
    design.addMove(11, 8, [1, 1, 2], 0);
    design.addMove(11, 8, [1, 1, 0], 0);
    design.addMove(11, 8, [4, 4, 6], 0);
    design.addMove(11, 8, [3, 3, 5], 0);
    design.addMove(11, 8, [4, 4, 2], 0);
    design.addMove(11, 8, [3, 3, 0], 0);

    design.addPiece("Forward", 12, 3000);
    design.addMove(12, 9, [7, 7], 0);
    design.addMove(12, 9, [1, 1], 0);
    design.addMove(12, 9, [4, 4], 0);
    design.addMove(12, 9, [3, 3], 0);

    design.addPiece("Backward", 13, 3000);
    design.addMove(13, 10, [7, 7], 0);
    design.addMove(13, 10, [1, 1], 0);
    design.addMove(13, 10, [4, 4], 0);
    design.addMove(13, 10, [3, 3], 0);

    design.setup("Red", "King", 172);
    design.setup("Red", "General", 166);
    design.setup("Red", "General", 178);
    design.setup("Red", "Guard", 186);
    design.setup("Red", "Guard", 188);
    design.setup("Red", "Guard", 181);
    design.setup("Red", "Guard", 193);
    design.setup("Red", "Elephant", 185);
    design.setup("Red", "Elephant", 189);
    design.setup("Red", "Elephant", 182);
    design.setup("Red", "Elephant", 192);
    design.setup("Red", "Chariot", 184);
    design.setup("Red", "Chariot", 190);
    design.setup("Red", "Chariot", 180);
    design.setup("Red", "Chariot", 194);
    design.setup("Red", "Cannon", 156);
    design.setup("Red", "Cannon", 158);
    design.setup("Red", "Cannon", 152);
    design.setup("Red", "Cannon", 162);
    design.setup("Red", "Horse", 155);
    design.setup("Red", "Horse", 159);
    design.setup("Red", "Horse", 150);
    design.setup("Red", "Horse", 164);
    design.setup("Red", "Warrior", 168);
    design.setup("Red", "Warrior", 176);
    design.setup("Red", "Knight", 138);
    design.setup("Red", "Knight", 146);
    design.setup("Red", "Killer", 198);
    design.setup("Red", "Killer", 206);
    design.setup("Red", "Forward", 142);
    design.setup("Red", "Backward", 202);
    design.setup("Red", "Pawn", 120);
    design.setup("Red", "Pawn", 121);
    design.setup("Red", "Pawn", 122);
    design.setup("Red", "Pawn", 128);
    design.setup("Red", "Pawn", 129);
    design.setup("Red", "Pawn", 130);
    design.setup("Red", "Soldier", 124);
    design.setup("Red", "Soldier", 125);
    design.setup("Red", "Soldier", 126);
    design.setup("Red", "Soldier", 132);
    design.setup("Red", "Soldier", 133);
    design.setup("Red", "Soldier", 134);
    design.setup("Black", "King", 37);
    design.setup("Black", "General", 31);
    design.setup("Black", "General", 43);
    design.setup("Black", "Guard", 21);
    design.setup("Black", "Guard", 23);
    design.setup("Black", "Guard", 16);
    design.setup("Black", "Guard", 28);
    design.setup("Black", "Elephant", 20);
    design.setup("Black", "Elephant", 24);
    design.setup("Black", "Elephant", 17);
    design.setup("Black", "Elephant", 27);
    design.setup("Black", "Chariot", 19);
    design.setup("Black", "Chariot", 25);
    design.setup("Black", "Chariot", 15);
    design.setup("Black", "Chariot", 29);
    design.setup("Black", "Cannon", 51);
    design.setup("Black", "Cannon", 53);
    design.setup("Black", "Cannon", 47);
    design.setup("Black", "Cannon", 57);
    design.setup("Black", "Horse", 50);
    design.setup("Black", "Horse", 54);
    design.setup("Black", "Horse", 45);
    design.setup("Black", "Horse", 59);
    design.setup("Black", "Warrior", 33);
    design.setup("Black", "Warrior", 41);
    design.setup("Black", "Knight", 63);
    design.setup("Black", "Knight", 71);
    design.setup("Black", "Killer", 3);
    design.setup("Black", "Killer", 11);
    design.setup("Black", "Forward", 67);
    design.setup("Black", "Backward", 7);
    design.setup("Black", "Pawn", 79);
    design.setup("Black", "Pawn", 80);
    design.setup("Black", "Pawn", 81);
    design.setup("Black", "Pawn", 87);
    design.setup("Black", "Pawn", 88);
    design.setup("Black", "Pawn", 89);
    design.setup("Black", "Soldier", 75);
    design.setup("Black", "Soldier", 76);
    design.setup("Black", "Soldier", 77);
    design.setup("Black", "Soldier", 83);
    design.setup("Black", "Soldier", 84);
    design.setup("Black", "Soldier", 85);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedPawn", "Red Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("RedSoldier", "Red Soldier");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("RedKing", "Red King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("RedGuard", "Red Guard");
    view.defPiece("BlackGuard", "Black Guard");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedWarrior", "Red Warrior");
    view.defPiece("BlackWarrior", "Black Warrior");
    view.defPiece("RedKnight", "Red Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("RedKiller", "Red Killer");
    view.defPiece("BlackKiller", "Black Killer");
    view.defPiece("RedForward", "Red Forward");
    view.defPiece("BlackForward", "Black Forward");
    view.defPiece("RedBackward", "Red Backward");
    view.defPiece("BlackBackward", "Black Backward");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a14", 13, 14, 48, 48);
    view.defPosition("b14", 61, 14, 48, 48);
    view.defPosition("c14", 109, 14, 48, 48);
    view.defPosition("d14", 157, 14, 48, 48);
    view.defPosition("e14", 205, 14, 48, 48);
    view.defPosition("f14", 253, 14, 48, 48);
    view.defPosition("g14", 301, 14, 48, 48);
    view.defPosition("h14", 349, 14, 48, 48);
    view.defPosition("i14", 397, 14, 48, 48);
    view.defPosition("j14", 445, 14, 48, 48);
    view.defPosition("k14", 493, 14, 48, 48);
    view.defPosition("l14", 541, 14, 48, 48);
    view.defPosition("m14", 589, 14, 48, 48);
    view.defPosition("n14", 637, 14, 48, 48);
    view.defPosition("o14", 685, 14, 48, 48);
    view.defPosition("a13", 13, 62, 48, 48);
    view.defPosition("b13", 61, 62, 48, 48);
    view.defPosition("c13", 109, 62, 48, 48);
    view.defPosition("d13", 157, 62, 48, 48);
    view.defPosition("e13", 205, 62, 48, 48);
    view.defPosition("f13", 253, 62, 48, 48);
    view.defPosition("g13", 301, 62, 48, 48);
    view.defPosition("h13", 349, 62, 48, 48);
    view.defPosition("i13", 397, 62, 48, 48);
    view.defPosition("j13", 445, 62, 48, 48);
    view.defPosition("k13", 493, 62, 48, 48);
    view.defPosition("l13", 541, 62, 48, 48);
    view.defPosition("m13", 589, 62, 48, 48);
    view.defPosition("n13", 637, 62, 48, 48);
    view.defPosition("o13", 685, 62, 48, 48);
    view.defPosition("a12", 13, 110, 48, 48);
    view.defPosition("b12", 61, 110, 48, 48);
    view.defPosition("c12", 109, 110, 48, 48);
    view.defPosition("d12", 157, 110, 48, 48);
    view.defPosition("e12", 205, 110, 48, 48);
    view.defPosition("f12", 253, 110, 48, 48);
    view.defPosition("g12", 301, 110, 48, 48);
    view.defPosition("h12", 349, 110, 48, 48);
    view.defPosition("i12", 397, 110, 48, 48);
    view.defPosition("j12", 445, 110, 48, 48);
    view.defPosition("k12", 493, 110, 48, 48);
    view.defPosition("l12", 541, 110, 48, 48);
    view.defPosition("m12", 589, 110, 48, 48);
    view.defPosition("n12", 637, 110, 48, 48);
    view.defPosition("o12", 685, 110, 48, 48);
    view.defPosition("a11", 13, 158, 48, 48);
    view.defPosition("b11", 61, 158, 48, 48);
    view.defPosition("c11", 109, 158, 48, 48);
    view.defPosition("d11", 157, 158, 48, 48);
    view.defPosition("e11", 205, 158, 48, 48);
    view.defPosition("f11", 253, 158, 48, 48);
    view.defPosition("g11", 301, 158, 48, 48);
    view.defPosition("h11", 349, 158, 48, 48);
    view.defPosition("i11", 397, 158, 48, 48);
    view.defPosition("j11", 445, 158, 48, 48);
    view.defPosition("k11", 493, 158, 48, 48);
    view.defPosition("l11", 541, 158, 48, 48);
    view.defPosition("m11", 589, 158, 48, 48);
    view.defPosition("n11", 637, 158, 48, 48);
    view.defPosition("o11", 685, 158, 48, 48);
    view.defPosition("a10", 13, 206, 48, 48);
    view.defPosition("b10", 61, 206, 48, 48);
    view.defPosition("c10", 109, 206, 48, 48);
    view.defPosition("d10", 157, 206, 48, 48);
    view.defPosition("e10", 205, 206, 48, 48);
    view.defPosition("f10", 253, 206, 48, 48);
    view.defPosition("g10", 301, 206, 48, 48);
    view.defPosition("h10", 349, 206, 48, 48);
    view.defPosition("i10", 397, 206, 48, 48);
    view.defPosition("j10", 445, 206, 48, 48);
    view.defPosition("k10", 493, 206, 48, 48);
    view.defPosition("l10", 541, 206, 48, 48);
    view.defPosition("m10", 589, 206, 48, 48);
    view.defPosition("n10", 637, 206, 48, 48);
    view.defPosition("o10", 685, 206, 48, 48);
    view.defPosition("a9", 13, 254, 48, 48);
    view.defPosition("b9", 61, 254, 48, 48);
    view.defPosition("c9", 109, 254, 48, 48);
    view.defPosition("d9", 157, 254, 48, 48);
    view.defPosition("e9", 205, 254, 48, 48);
    view.defPosition("f9", 253, 254, 48, 48);
    view.defPosition("g9", 301, 254, 48, 48);
    view.defPosition("h9", 349, 254, 48, 48);
    view.defPosition("i9", 397, 254, 48, 48);
    view.defPosition("j9", 445, 254, 48, 48);
    view.defPosition("k9", 493, 254, 48, 48);
    view.defPosition("l9", 541, 254, 48, 48);
    view.defPosition("m9", 589, 254, 48, 48);
    view.defPosition("n9", 637, 254, 48, 48);
    view.defPosition("o9", 685, 254, 48, 48);
    view.defPosition("a8", 13, 302, 48, 48);
    view.defPosition("b8", 61, 302, 48, 48);
    view.defPosition("c8", 109, 302, 48, 48);
    view.defPosition("d8", 157, 302, 48, 48);
    view.defPosition("e8", 205, 302, 48, 48);
    view.defPosition("f8", 253, 302, 48, 48);
    view.defPosition("g8", 301, 302, 48, 48);
    view.defPosition("h8", 349, 302, 48, 48);
    view.defPosition("i8", 397, 302, 48, 48);
    view.defPosition("j8", 445, 302, 48, 48);
    view.defPosition("k8", 493, 302, 48, 48);
    view.defPosition("l8", 541, 302, 48, 48);
    view.defPosition("m8", 589, 302, 48, 48);
    view.defPosition("n8", 637, 302, 48, 48);
    view.defPosition("o8", 685, 302, 48, 48);
    view.defPosition("a7", 13, 350, 48, 48);
    view.defPosition("b7", 61, 350, 48, 48);
    view.defPosition("c7", 109, 350, 48, 48);
    view.defPosition("d7", 157, 350, 48, 48);
    view.defPosition("e7", 205, 350, 48, 48);
    view.defPosition("f7", 253, 350, 48, 48);
    view.defPosition("g7", 301, 350, 48, 48);
    view.defPosition("h7", 349, 350, 48, 48);
    view.defPosition("i7", 397, 350, 48, 48);
    view.defPosition("j7", 445, 350, 48, 48);
    view.defPosition("k7", 493, 350, 48, 48);
    view.defPosition("l7", 541, 350, 48, 48);
    view.defPosition("m7", 589, 350, 48, 48);
    view.defPosition("n7", 637, 350, 48, 48);
    view.defPosition("o7", 685, 350, 48, 48);
    view.defPosition("a6", 13, 398, 48, 48);
    view.defPosition("b6", 61, 398, 48, 48);
    view.defPosition("c6", 109, 398, 48, 48);
    view.defPosition("d6", 157, 398, 48, 48);
    view.defPosition("e6", 205, 398, 48, 48);
    view.defPosition("f6", 253, 398, 48, 48);
    view.defPosition("g6", 301, 398, 48, 48);
    view.defPosition("h6", 349, 398, 48, 48);
    view.defPosition("i6", 397, 398, 48, 48);
    view.defPosition("j6", 445, 398, 48, 48);
    view.defPosition("k6", 493, 398, 48, 48);
    view.defPosition("l6", 541, 398, 48, 48);
    view.defPosition("m6", 589, 398, 48, 48);
    view.defPosition("n6", 637, 398, 48, 48);
    view.defPosition("o6", 685, 398, 48, 48);
    view.defPosition("a5", 13, 446, 48, 48);
    view.defPosition("b5", 61, 446, 48, 48);
    view.defPosition("c5", 109, 446, 48, 48);
    view.defPosition("d5", 157, 446, 48, 48);
    view.defPosition("e5", 205, 446, 48, 48);
    view.defPosition("f5", 253, 446, 48, 48);
    view.defPosition("g5", 301, 446, 48, 48);
    view.defPosition("h5", 349, 446, 48, 48);
    view.defPosition("i5", 397, 446, 48, 48);
    view.defPosition("j5", 445, 446, 48, 48);
    view.defPosition("k5", 493, 446, 48, 48);
    view.defPosition("l5", 541, 446, 48, 48);
    view.defPosition("m5", 589, 446, 48, 48);
    view.defPosition("n5", 637, 446, 48, 48);
    view.defPosition("o5", 685, 446, 48, 48);
    view.defPosition("a4", 13, 494, 48, 48);
    view.defPosition("b4", 61, 494, 48, 48);
    view.defPosition("c4", 109, 494, 48, 48);
    view.defPosition("d4", 157, 494, 48, 48);
    view.defPosition("e4", 205, 494, 48, 48);
    view.defPosition("f4", 253, 494, 48, 48);
    view.defPosition("g4", 301, 494, 48, 48);
    view.defPosition("h4", 349, 494, 48, 48);
    view.defPosition("i4", 397, 494, 48, 48);
    view.defPosition("j4", 445, 494, 48, 48);
    view.defPosition("k4", 493, 494, 48, 48);
    view.defPosition("l4", 541, 494, 48, 48);
    view.defPosition("m4", 589, 494, 48, 48);
    view.defPosition("n4", 637, 494, 48, 48);
    view.defPosition("o4", 685, 494, 48, 48);
    view.defPosition("a3", 13, 542, 48, 48);
    view.defPosition("b3", 61, 542, 48, 48);
    view.defPosition("c3", 109, 542, 48, 48);
    view.defPosition("d3", 157, 542, 48, 48);
    view.defPosition("e3", 205, 542, 48, 48);
    view.defPosition("f3", 253, 542, 48, 48);
    view.defPosition("g3", 301, 542, 48, 48);
    view.defPosition("h3", 349, 542, 48, 48);
    view.defPosition("i3", 397, 542, 48, 48);
    view.defPosition("j3", 445, 542, 48, 48);
    view.defPosition("k3", 493, 542, 48, 48);
    view.defPosition("l3", 541, 542, 48, 48);
    view.defPosition("m3", 589, 542, 48, 48);
    view.defPosition("n3", 637, 542, 48, 48);
    view.defPosition("o3", 685, 542, 48, 48);
    view.defPosition("a2", 13, 590, 48, 48);
    view.defPosition("b2", 61, 590, 48, 48);
    view.defPosition("c2", 109, 590, 48, 48);
    view.defPosition("d2", 157, 590, 48, 48);
    view.defPosition("e2", 205, 590, 48, 48);
    view.defPosition("f2", 253, 590, 48, 48);
    view.defPosition("g2", 301, 590, 48, 48);
    view.defPosition("h2", 349, 590, 48, 48);
    view.defPosition("i2", 397, 590, 48, 48);
    view.defPosition("j2", 445, 590, 48, 48);
    view.defPosition("k2", 493, 590, 48, 48);
    view.defPosition("l2", 541, 590, 48, 48);
    view.defPosition("m2", 589, 590, 48, 48);
    view.defPosition("n2", 637, 590, 48, 48);
    view.defPosition("o2", 685, 590, 48, 48);
    view.defPosition("a1", 13, 638, 48, 48);
    view.defPosition("b1", 61, 638, 48, 48);
    view.defPosition("c1", 109, 638, 48, 48);
    view.defPosition("d1", 157, 638, 48, 48);
    view.defPosition("e1", 205, 638, 48, 48);
    view.defPosition("f1", 253, 638, 48, 48);
    view.defPosition("g1", 301, 638, 48, 48);
    view.defPosition("h1", 349, 638, 48, 48);
    view.defPosition("i1", 397, 638, 48, 48);
    view.defPosition("j1", 445, 638, 48, 48);
    view.defPosition("k1", 493, 638, 48, 48);
    view.defPosition("l1", 541, 638, 48, 48);
    view.defPosition("m1", 589, 638, 48, 48);
    view.defPosition("n1", 637, 638, 48, 48);
    view.defPosition("o1", 685, 638, 48, 48);
}
