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
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("chu-shogi-promotion", "true");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("nx"); // 6
    design.addDirection("sw"); // 7
    design.addDirection("nw"); // 8

    design.addPlayer("Black", [1, 0, 4, 7, 2, 8, 6, 3, 5]);
    design.addPlayer("White", [1, 0, 4, 7, 2, 8, 6, 3, 5]);

    design.addPosition("X12", [0, 0, 16, 0, 0, 0, 16, 0, 0]);
    design.addPosition("M12", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a12", [0, 1, 16, 0, 0, 17, 16, 0, 0]);
    design.addPosition("b12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("c12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("d12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("e12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("f12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("g12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("h12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("i12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("j12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("k12", [-1, 1, 16, 0, 0, 17, 16, 15, 0]);
    design.addPosition("l12", [-1, 0, 16, 0, 0, 0, 16, 15, 0]);
    design.addPosition("N12", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y12", [0, 0, 16, 0, 0, 0, 16, 0, 0]);
    design.addPosition("X11", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M11", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a11", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k11", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l11", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N11", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y11", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X10", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M10", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k10", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l10", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N10", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y10", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X9", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k9", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l9", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y9", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X8", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k8", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l8", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X7", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k7", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l7", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X6", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k6", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l6", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X5", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k5", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l5", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X4", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k4", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l4", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X3", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k3", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l3", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X2", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("M2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 16, -15, -16, 17, 16, 0, 0]);
    design.addPosition("b2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("c2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("d2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("e2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("f2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("g2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("h2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("i2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("j2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("k2", [-1, 1, 16, -15, -16, 17, 16, 15, -17]);
    design.addPosition("l2", [-1, 0, 16, 0, -16, 0, 16, 15, -17]);
    design.addPosition("N2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 16, 0, -16, 0, 16, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, -16, 0, 0, 0, 0]);
    design.addPosition("M1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -15, -16, 0, -175, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("c1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("d1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("e1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("f1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("g1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("h1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("i1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("j1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("k1", [-1, 1, 0, -15, -16, 0, -175, 0, -17]);
    design.addPosition("l1", [-1, 0, 0, 0, -16, 0, 0, 0, -17]);
    design.addPosition("N1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -16, 0, 0, 0, 0]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion-zone", 2, [130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189]);
    design.addZone("promotion-zone", 1, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]);
    design.addZone("board-zone", 2, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189]);
    design.addZone("board-zone", 1, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// left-1-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.MODE,	2);	// left-nw-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.MODE,	3);	// left-ne-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	21);	// position
    design.addCommand(6, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	10);
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-11);
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Pawn", 0, 1);
    design.addMove(0, 0, [4], 0);

    design.addPiece("Go-Between", 1, 1);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);

    design.addPiece("Bishop", 2, 10);
    design.addMove(2, 1, [8, 8], 0);
    design.addMove(2, 1, [7, 7], 0);
    design.addMove(2, 1, [3, 3], 0);
    design.addMove(2, 1, [5, 5], 0);

    design.addPiece("Bishop!", 3, 10);
    design.addMove(3, 1, [8, 8], 0);
    design.addMove(3, 1, [7, 7], 0);
    design.addMove(3, 1, [3, 3], 0);
    design.addMove(3, 1, [5, 5], 0);

    design.addPiece("Rook", 4, 12);
    design.addMove(4, 1, [4, 4], 0);
    design.addMove(4, 1, [2, 2], 0);
    design.addMove(4, 1, [0, 0], 0);
    design.addMove(4, 1, [1, 1], 0);

    design.addPiece("Rook!", 5, 12);
    design.addMove(5, 1, [4, 4], 0);
    design.addMove(5, 1, [2, 2], 0);
    design.addMove(5, 1, [0, 0], 0);
    design.addMove(5, 1, [1, 1], 0);

    design.addPiece("Free-King", 6, 22);
    design.addMove(6, 1, [4, 4], 0);
    design.addMove(6, 1, [2, 2], 0);
    design.addMove(6, 1, [0, 0], 0);
    design.addMove(6, 1, [1, 1], 0);
    design.addMove(6, 1, [8, 8], 0);
    design.addMove(6, 1, [7, 7], 0);
    design.addMove(6, 1, [3, 3], 0);
    design.addMove(6, 1, [5, 5], 0);

    design.addPiece("Drunk-Elephant!", 7, 5);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);
    design.addMove(7, 0, [8], 0);
    design.addMove(7, 0, [7], 0);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [5], 0);

    design.addPiece("Flying-Ox", 8, 16);
    design.addMove(8, 1, [4, 4], 0);
    design.addMove(8, 1, [2, 2], 0);
    design.addMove(8, 1, [8, 8], 0);
    design.addMove(8, 1, [7, 7], 0);
    design.addMove(8, 1, [3, 3], 0);
    design.addMove(8, 1, [5, 5], 0);

    design.addPiece("Free-Boar", 9, 16);
    design.addMove(9, 1, [0, 0], 0);
    design.addMove(9, 1, [1, 1], 0);
    design.addMove(9, 1, [8, 8], 0);
    design.addMove(9, 1, [7, 7], 0);
    design.addMove(9, 1, [3, 3], 0);
    design.addMove(9, 1, [5, 5], 0);

    design.addPiece("Horned-Falcon", 10, 19);
    design.addMove(10, 1, [2, 2], 0);
    design.addMove(10, 1, [0, 0], 0);
    design.addMove(10, 1, [1, 1], 0);
    design.addMove(10, 1, [8, 8], 0);
    design.addMove(10, 1, [7, 7], 0);
    design.addMove(10, 1, [3, 3], 0);
    design.addMove(10, 1, [5, 5], 0);
    design.addMove(10, 2, [4], 0);
    design.addMove(10, 3, [4, 4], 0);
    design.addMove(10, 0, [4], 1);
    design.addMove(10, 0, [2], 1);

    design.addPiece("Soaring-Eagle", 11, 18);
    design.addMove(11, 1, [4, 4], 0);
    design.addMove(11, 1, [2, 2], 0);
    design.addMove(11, 1, [0, 0], 0);
    design.addMove(11, 1, [1, 1], 0);
    design.addMove(11, 1, [7, 7], 0);
    design.addMove(11, 1, [5, 5], 0);
    design.addMove(11, 4, [8], 0);
    design.addMove(11, 3, [8, 8], 0);
    design.addMove(11, 5, [3], 0);
    design.addMove(11, 3, [3, 3], 0);
    design.addMove(11, 0, [8], 2);
    design.addMove(11, 0, [5], 2);
    design.addMove(11, 0, [3], 3);
    design.addMove(11, 0, [7], 3);

    design.addPiece("Whale", 12, 10);
    design.addMove(12, 1, [4, 4], 0);
    design.addMove(12, 1, [2, 2], 0);
    design.addMove(12, 1, [7, 7], 0);
    design.addMove(12, 1, [5, 5], 0);

    design.addPiece("White-Horse", 13, 14);
    design.addMove(13, 1, [4, 4], 0);
    design.addMove(13, 1, [2, 2], 0);
    design.addMove(13, 1, [8, 8], 0);
    design.addMove(13, 1, [3, 3], 0);

    design.addPiece("Lion", 14, 20);
    design.addMove(14, 2, [4], 0);
    design.addMove(14, 2, [2], 0);
    design.addMove(14, 2, [0], 0);
    design.addMove(14, 2, [1], 0);
    design.addMove(14, 2, [8], 0);
    design.addMove(14, 2, [5], 0);
    design.addMove(14, 2, [7], 0);
    design.addMove(14, 2, [3], 0);
    design.addMove(14, 3, [4, 4], 0);
    design.addMove(14, 3, [8, 8], 0);
    design.addMove(14, 3, [2, 2], 0);
    design.addMove(14, 3, [7, 7], 0);
    design.addMove(14, 3, [1, 1], 0);
    design.addMove(14, 3, [5, 5], 0);
    design.addMove(14, 3, [0, 0], 0);
    design.addMove(14, 3, [3, 3], 0);
    design.addMove(14, 3, [4, 3], 0);
    design.addMove(14, 3, [4, 8], 0);
    design.addMove(14, 3, [2, 5], 0);
    design.addMove(14, 3, [2, 7], 0);
    design.addMove(14, 3, [1, 3], 0);
    design.addMove(14, 3, [1, 5], 0);
    design.addMove(14, 3, [0, 8], 0);
    design.addMove(14, 3, [0, 7], 0);
    design.addMove(14, 0, [4], 1);
    design.addMove(14, 0, [2], 1);
    design.addMove(14, 0, [0], 1);
    design.addMove(14, 0, [1], 1);
    design.addMove(14, 0, [8], 1);
    design.addMove(14, 0, [5], 1);
    design.addMove(14, 0, [7], 1);
    design.addMove(14, 0, [3], 1);

    design.addPiece("Lion!", 15, 20);
    design.addMove(15, 2, [4], 0);
    design.addMove(15, 2, [2], 0);
    design.addMove(15, 2, [0], 0);
    design.addMove(15, 2, [1], 0);
    design.addMove(15, 2, [8], 0);
    design.addMove(15, 2, [5], 0);
    design.addMove(15, 2, [7], 0);
    design.addMove(15, 2, [3], 0);
    design.addMove(15, 3, [4, 4], 0);
    design.addMove(15, 3, [8, 8], 0);
    design.addMove(15, 3, [2, 2], 0);
    design.addMove(15, 3, [7, 7], 0);
    design.addMove(15, 3, [1, 1], 0);
    design.addMove(15, 3, [5, 5], 0);
    design.addMove(15, 3, [0, 0], 0);
    design.addMove(15, 3, [3, 3], 0);
    design.addMove(15, 3, [4, 3], 0);
    design.addMove(15, 3, [4, 8], 0);
    design.addMove(15, 3, [2, 5], 0);
    design.addMove(15, 3, [2, 7], 0);
    design.addMove(15, 3, [1, 3], 0);
    design.addMove(15, 3, [1, 5], 0);
    design.addMove(15, 3, [0, 8], 0);
    design.addMove(15, 3, [0, 7], 0);
    design.addMove(15, 0, [4], 1);
    design.addMove(15, 0, [2], 1);
    design.addMove(15, 0, [0], 1);
    design.addMove(15, 0, [1], 1);
    design.addMove(15, 0, [8], 1);
    design.addMove(15, 0, [5], 1);
    design.addMove(15, 0, [7], 1);
    design.addMove(15, 0, [3], 1);

    design.addPiece("Dragon-King", 16, 17);
    design.addMove(16, 1, [4, 4], 0);
    design.addMove(16, 1, [2, 2], 0);
    design.addMove(16, 1, [0, 0], 0);
    design.addMove(16, 1, [1, 1], 0);
    design.addMove(16, 0, [8], 0);
    design.addMove(16, 0, [7], 0);
    design.addMove(16, 0, [3], 0);
    design.addMove(16, 0, [5], 0);

    design.addPiece("Dragon-King!", 17, 17);
    design.addMove(17, 1, [4, 4], 0);
    design.addMove(17, 1, [2, 2], 0);
    design.addMove(17, 1, [0, 0], 0);
    design.addMove(17, 1, [1, 1], 0);
    design.addMove(17, 0, [8], 0);
    design.addMove(17, 0, [7], 0);
    design.addMove(17, 0, [3], 0);
    design.addMove(17, 0, [5], 0);

    design.addPiece("Dragon-Horse", 18, 12);
    design.addMove(18, 1, [8, 8], 0);
    design.addMove(18, 1, [7, 7], 0);
    design.addMove(18, 1, [3, 3], 0);
    design.addMove(18, 1, [5, 5], 0);
    design.addMove(18, 0, [4], 0);
    design.addMove(18, 0, [2], 0);
    design.addMove(18, 0, [0], 0);
    design.addMove(18, 0, [1], 0);

    design.addPiece("Dragon-Horse!", 19, 12);
    design.addMove(19, 1, [8, 8], 0);
    design.addMove(19, 1, [7, 7], 0);
    design.addMove(19, 1, [3, 3], 0);
    design.addMove(19, 1, [5, 5], 0);
    design.addMove(19, 0, [4], 0);
    design.addMove(19, 0, [2], 0);
    design.addMove(19, 0, [0], 0);
    design.addMove(19, 0, [1], 0);

    design.addPiece("Kylin", 20, 8);
    design.addMove(20, 3, [4, 4], 0);
    design.addMove(20, 3, [2, 2], 0);
    design.addMove(20, 3, [0, 0], 0);
    design.addMove(20, 3, [1, 1], 0);
    design.addMove(20, 0, [8], 0);
    design.addMove(20, 0, [7], 0);
    design.addMove(20, 0, [3], 0);
    design.addMove(20, 0, [5], 0);
    design.addMove(20, 6, [2, 6], 0);

    design.addPiece("Phoenix", 21, 8);
    design.addMove(21, 0, [4], 0);
    design.addMove(21, 0, [2], 0);
    design.addMove(21, 0, [0], 0);
    design.addMove(21, 0, [1], 0);
    design.addMove(21, 3, [8, 8], 0);
    design.addMove(21, 3, [7, 7], 0);
    design.addMove(21, 3, [3, 3], 0);
    design.addMove(21, 3, [5, 5], 0);
    design.addMove(21, 6, [2, 6], 0);

    design.addPiece("Reverse-Chariot", 22, 6);
    design.addMove(22, 1, [4, 4], 0);
    design.addMove(22, 1, [2, 2], 0);
    design.addMove(22, 6, [2, 6], 0);

    design.addPiece("Side-Mover", 23, 7);
    design.addMove(23, 0, [4], 0);
    design.addMove(23, 0, [2], 0);
    design.addMove(23, 1, [0, 0], 0);
    design.addMove(23, 1, [1, 1], 0);
    design.addMove(23, 6, [2, 6], 0);

    design.addPiece("Side-Mover!", 24, 7);
    design.addMove(24, 0, [4], 0);
    design.addMove(24, 0, [2], 0);
    design.addMove(24, 1, [0, 0], 0);
    design.addMove(24, 1, [1, 1], 0);

    design.addPiece("Vertical-Mover", 25, 7);
    design.addMove(25, 0, [0], 0);
    design.addMove(25, 0, [1], 0);
    design.addMove(25, 1, [4, 4], 0);
    design.addMove(25, 1, [2, 2], 0);
    design.addMove(25, 6, [2, 6], 0);

    design.addPiece("Vertical-Mover!", 26, 7);
    design.addMove(26, 0, [0], 0);
    design.addMove(26, 0, [1], 0);
    design.addMove(26, 1, [4, 4], 0);
    design.addMove(26, 1, [2, 2], 0);

    design.addPiece("Flying-Stag", 27, 9);
    design.addMove(27, 1, [4, 4], 0);
    design.addMove(27, 1, [2, 2], 0);
    design.addMove(27, 0, [0], 0);
    design.addMove(27, 0, [1], 0);
    design.addMove(27, 0, [8], 0);
    design.addMove(27, 0, [7], 0);
    design.addMove(27, 0, [3], 0);
    design.addMove(27, 0, [5], 0);

    design.addPiece("Lance", 28, 6);
    design.addMove(28, 1, [4, 4], 0);
    design.addMove(28, 6, [2, 6], 0);

    design.addPiece("King", 29, 10000);
    design.addMove(29, 0, [4], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 0, [0], 0);
    design.addMove(29, 0, [1], 0);
    design.addMove(29, 0, [8], 0);
    design.addMove(29, 0, [7], 0);
    design.addMove(29, 0, [3], 0);
    design.addMove(29, 0, [5], 0);

    design.addPiece("Crown-Prince", 30, 10000);
    design.addMove(30, 0, [4], 0);
    design.addMove(30, 0, [2], 0);
    design.addMove(30, 0, [0], 0);
    design.addMove(30, 0, [1], 0);
    design.addMove(30, 0, [8], 0);
    design.addMove(30, 0, [7], 0);
    design.addMove(30, 0, [3], 0);
    design.addMove(30, 0, [5], 0);

    design.addPiece("Blind-Tiger", 31, 4);
    design.addMove(31, 0, [2], 0);
    design.addMove(31, 0, [0], 0);
    design.addMove(31, 0, [1], 0);
    design.addMove(31, 0, [8], 0);
    design.addMove(31, 0, [7], 0);
    design.addMove(31, 0, [3], 0);
    design.addMove(31, 0, [5], 0);

    design.addPiece("Drunk-Elephant", 32, 5);
    design.addMove(32, 0, [4], 0);
    design.addMove(32, 0, [0], 0);
    design.addMove(32, 0, [1], 0);
    design.addMove(32, 0, [8], 0);
    design.addMove(32, 0, [7], 0);
    design.addMove(32, 0, [3], 0);
    design.addMove(32, 0, [5], 0);

    design.addPiece("Ferocious-Leopard", 33, 3);
    design.addMove(33, 0, [4], 0);
    design.addMove(33, 0, [2], 0);
    design.addMove(33, 0, [8], 0);
    design.addMove(33, 0, [7], 0);
    design.addMove(33, 0, [3], 0);
    design.addMove(33, 0, [5], 0);

    design.addPiece("Gold-General", 34, 3);
    design.addMove(34, 0, [4], 0);
    design.addMove(34, 0, [2], 0);
    design.addMove(34, 0, [0], 0);
    design.addMove(34, 0, [1], 0);
    design.addMove(34, 0, [8], 0);
    design.addMove(34, 0, [3], 0);

    design.addPiece("Tokin", 35);
    design.addMove(35, 0, [4], 0);
    design.addMove(35, 0, [2], 0);
    design.addMove(35, 0, [0], 0);
    design.addMove(35, 0, [1], 0);
    design.addMove(35, 0, [8], 0);
    design.addMove(35, 0, [3], 0);

    design.addPiece("Silver-General", 36, 2);
    design.addMove(36, 0, [4], 0);
    design.addMove(36, 0, [8], 0);
    design.addMove(36, 0, [7], 0);
    design.addMove(36, 0, [3], 0);
    design.addMove(36, 0, [5], 0);
    design.addMove(36, 6, [2, 6], 0);

    design.addPiece("Copper-General", 37, 1);
    design.addMove(37, 0, [4], 0);
    design.addMove(37, 0, [2], 0);
    design.addMove(37, 0, [8], 0);
    design.addMove(37, 0, [3], 0);
    design.addMove(37, 6, [2, 6], 0);

    design.setup("White", "Go-Between", 69);
    design.setup("White", "Go-Between", 74);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Pawn", 52);
    design.setup("White", "Pawn", 53);
    design.setup("White", "Pawn", 54);
    design.setup("White", "Pawn", 55);
    design.setup("White", "Pawn", 56);
    design.setup("White", "Pawn", 57);
    design.setup("White", "Pawn", 58);
    design.setup("White", "Pawn", 59);
    design.setup("White", "Pawn", 60);
    design.setup("White", "Pawn", 61);
    design.setup("White", "Lance", 0);
    design.setup("White", "Ferocious-Leopard", 3);
    design.setup("White", "Ferocious-Leopard", 12);
    design.setup("White", "Copper-General", 16);
    design.setup("White", "Silver-General", 32);
    design.setup("White", "Gold-General", 6);
    design.setup("White", "Gold-General", 9);
    design.setup("White", "King", 8);
    design.setup("White", "Drunk-Elephant", 7);
    design.setup("White", "Reverse-Chariot", 48);
    design.setup("White", "Bishop", 20);
    design.setup("White", "Bishop", 27);
    design.setup("White", "Blind-Tiger", 22);
    design.setup("White", "Blind-Tiger", 25);
    design.setup("White", "Kylin", 64);
    design.setup("White", "Phoenix", 80);
    design.setup("White", "Side-Mover", 96);
    design.setup("White", "Vertical-Mover", 112);
    design.setup("White", "Rook", 36);
    design.setup("White", "Rook", 43);
    design.setup("White", "Dragon-Horse", 37);
    design.setup("White", "Dragon-Horse", 42);
    design.setup("White", "Dragon-King", 38);
    design.setup("White", "Dragon-King", 41);
    design.setup("White", "Lion", 39);
    design.setup("White", "Free-King", 40);
    design.setup("Black", "Go-Between", 117);
    design.setup("Black", "Go-Between", 122);
    design.setup("Black", "Pawn", 130);
    design.setup("Black", "Pawn", 131);
    design.setup("Black", "Pawn", 132);
    design.setup("Black", "Pawn", 133);
    design.setup("Black", "Pawn", 134);
    design.setup("Black", "Pawn", 135);
    design.setup("Black", "Pawn", 136);
    design.setup("Black", "Pawn", 137);
    design.setup("Black", "Pawn", 138);
    design.setup("Black", "Pawn", 139);
    design.setup("Black", "Pawn", 140);
    design.setup("Black", "Pawn", 141);
    design.setup("Black", "Lance", 191);
    design.setup("Black", "Ferocious-Leopard", 179);
    design.setup("Black", "Ferocious-Leopard", 188);
    design.setup("Black", "Copper-General", 175);
    design.setup("Black", "Silver-General", 159);
    design.setup("Black", "Gold-General", 182);
    design.setup("Black", "Gold-General", 185);
    design.setup("Black", "King", 184);
    design.setup("Black", "Drunk-Elephant", 183);
    design.setup("Black", "Reverse-Chariot", 143);
    design.setup("Black", "Bishop", 164);
    design.setup("Black", "Bishop", 171);
    design.setup("Black", "Blind-Tiger", 166);
    design.setup("Black", "Blind-Tiger", 169);
    design.setup("Black", "Kylin", 127);
    design.setup("Black", "Phoenix", 111);
    design.setup("Black", "Side-Mover", 95);
    design.setup("Black", "Vertical-Mover", 79);
    design.setup("Black", "Rook", 148);
    design.setup("Black", "Rook", 155);
    design.setup("Black", "Dragon-Horse", 149);
    design.setup("Black", "Dragon-Horse", 154);
    design.setup("Black", "Dragon-King", 150);
    design.setup("Black", "Dragon-King", 153);
    design.setup("Black", "Lion", 151);
    design.setup("Black", "Free-King", 152);

}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteGo-Between", "White Go-Between");
    view.defPiece("BlackGo-Between", "Black Go-Between");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteBishop!", "White Bishop!");
    view.defPiece("BlackBishop!", "Black Bishop!");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteRook!", "White Rook!");
    view.defPiece("BlackRook!", "Black Rook!");
    view.defPiece("WhiteFree-King", "White Free-King");
    view.defPiece("BlackFree-King", "Black Free-King");
    view.defPiece("WhiteDrunk-Elephant!", "White Drunk-Elephant!");
    view.defPiece("BlackDrunk-Elephant!", "Black Drunk-Elephant!");
    view.defPiece("WhiteFlying-Ox", "White Flying-Ox");
    view.defPiece("BlackFlying-Ox", "Black Flying-Ox");
    view.defPiece("WhiteFree-Boar", "White Free-Boar");
    view.defPiece("BlackFree-Boar", "Black Free-Boar");
    view.defPiece("WhiteHorned-Falcon", "White Horned-Falcon");
    view.defPiece("BlackHorned-Falcon", "Black Horned-Falcon");
    view.defPiece("WhiteSoaring-Eagle", "White Soaring-Eagle");
    view.defPiece("BlackSoaring-Eagle", "Black Soaring-Eagle");
    view.defPiece("WhiteWhale", "White Whale");
    view.defPiece("BlackWhale", "Black Whale");
    view.defPiece("WhiteWhite-Horse", "White White-Horse");
    view.defPiece("BlackWhite-Horse", "Black White-Horse");
    view.defPiece("WhiteLion", "White Lion");
    view.defPiece("BlackLion", "Black Lion");
    view.defPiece("WhiteLion!", "White Lion!");
    view.defPiece("BlackLion!", "Black Lion!");
    view.defPiece("WhiteDragon-King", "White Dragon-King");
    view.defPiece("BlackDragon-King", "Black Dragon-King");
    view.defPiece("WhiteDragon-King!", "White Dragon-King!");
    view.defPiece("BlackDragon-King!", "Black Dragon-King!");
    view.defPiece("WhiteDragon-Horse", "White Dragon-Horse");
    view.defPiece("BlackDragon-Horse", "Black Dragon-Horse");
    view.defPiece("WhiteDragon-Horse!", "White Dragon-Horse!");
    view.defPiece("BlackDragon-Horse!", "Black Dragon-Horse!");
    view.defPiece("WhiteKylin", "White Kylin");
    view.defPiece("BlackKylin", "Black Kylin");
    view.defPiece("WhitePhoenix", "White Phoenix");
    view.defPiece("BlackPhoenix", "Black Phoenix");
    view.defPiece("WhiteReverse-Chariot", "White Reverse-Chariot");
    view.defPiece("BlackReverse-Chariot", "Black Reverse-Chariot");
    view.defPiece("WhiteSide-Mover", "White Side-Mover");
    view.defPiece("BlackSide-Mover", "Black Side-Mover");
    view.defPiece("WhiteSide-Mover!", "White Side-Mover!");
    view.defPiece("BlackSide-Mover!", "Black Side-Mover!");
    view.defPiece("WhiteVertical-Mover", "White Vertical-Mover");
    view.defPiece("BlackVertical-Mover", "Black Vertical-Mover");
    view.defPiece("WhiteVertical-Mover!", "White Vertical-Mover!");
    view.defPiece("BlackVertical-Mover!", "Black Vertical-Mover!");
    view.defPiece("WhiteFlying-Stag", "White Flying-Stag");
    view.defPiece("BlackFlying-Stag", "Black Flying-Stag");
    view.defPiece("WhiteLance", "White Lance");
    view.defPiece("BlackLance", "Black Lance");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteCrown-Prince", "White Crown-Prince");
    view.defPiece("BlackCrown-Prince", "Black Crown-Prince");
    view.defPiece("WhiteBlind-Tiger", "White Blind-Tiger");
    view.defPiece("BlackBlind-Tiger", "Black Blind-Tiger");
    view.defPiece("WhiteDrunk-Elephant", "White Drunk-Elephant");
    view.defPiece("BlackDrunk-Elephant", "Black Drunk-Elephant");
    view.defPiece("WhiteFerocious-Leopard", "White Ferocious-Leopard");
    view.defPiece("BlackFerocious-Leopard", "Black Ferocious-Leopard");
    view.defPiece("WhiteGold-General", "White Gold-General");
    view.defPiece("BlackGold-General", "Black Gold-General");
    view.defPiece("WhiteTokin", "White Tokin");
    view.defPiece("BlackTokin", "Black Tokin");
    view.defPiece("WhiteSilver-General", "White Silver-General");
    view.defPiece("BlackSilver-General", "Black Silver-General");
    view.defPiece("WhiteCopper-General", "White Copper-General");
    view.defPiece("BlackCopper-General", "Black Copper-General");
 
    view.defPosition("X12", 5, 5, 49, 49);
    view.defPosition("M12", 40, 5, 49, 49);
    view.defPosition("a12", 75, 5, 49, 49);
    view.defPosition("b12", 110, 5, 49, 49);
    view.defPosition("c12", 145, 5, 49, 49);
    view.defPosition("d12", 180, 5, 49, 49);
    view.defPosition("e12", 215, 5, 49, 49);
    view.defPosition("f12", 250, 5, 49, 49);
    view.defPosition("g12", 285, 5, 49, 49);
    view.defPosition("h12", 320, 5, 49, 49);
    view.defPosition("i12", 355, 5, 49, 49);
    view.defPosition("j12", 390, 5, 49, 49);
    view.defPosition("k12", 425, 5, 49, 49);
    view.defPosition("l12", 460, 5, 49, 49);
    view.defPosition("N12", 495, 5, 49, 49);
    view.defPosition("Y12", 530, 5, 49, 49);
    view.defPosition("X11", 5, 40, 49, 49);
    view.defPosition("M11", 40, 40, 49, 49);
    view.defPosition("a11", 75, 40, 49, 49);
    view.defPosition("b11", 110, 40, 49, 49);
    view.defPosition("c11", 145, 40, 49, 49);
    view.defPosition("d11", 180, 40, 49, 49);
    view.defPosition("e11", 215, 40, 49, 49);
    view.defPosition("f11", 250, 40, 49, 49);
    view.defPosition("g11", 285, 40, 49, 49);
    view.defPosition("h11", 320, 40, 49, 49);
    view.defPosition("i11", 355, 40, 49, 49);
    view.defPosition("j11", 390, 40, 49, 49);
    view.defPosition("k11", 425, 40, 49, 49);
    view.defPosition("l11", 460, 40, 49, 49);
    view.defPosition("N11", 495, 40, 49, 49);
    view.defPosition("Y11", 530, 40, 49, 49);
    view.defPosition("X10", 5, 75, 49, 49);
    view.defPosition("M10", 40, 75, 49, 49);
    view.defPosition("a10", 75, 75, 49, 49);
    view.defPosition("b10", 110, 75, 49, 49);
    view.defPosition("c10", 145, 75, 49, 49);
    view.defPosition("d10", 180, 75, 49, 49);
    view.defPosition("e10", 215, 75, 49, 49);
    view.defPosition("f10", 250, 75, 49, 49);
    view.defPosition("g10", 285, 75, 49, 49);
    view.defPosition("h10", 320, 75, 49, 49);
    view.defPosition("i10", 355, 75, 49, 49);
    view.defPosition("j10", 390, 75, 49, 49);
    view.defPosition("k10", 425, 75, 49, 49);
    view.defPosition("l10", 460, 75, 49, 49);
    view.defPosition("N10", 495, 75, 49, 49);
    view.defPosition("Y10", 530, 75, 49, 49);
    view.defPosition("X9", 5, 110, 49, 49);
    view.defPosition("M9", 40, 110, 49, 49);
    view.defPosition("a9", 75, 110, 49, 49);
    view.defPosition("b9", 110, 110, 49, 49);
    view.defPosition("c9", 145, 110, 49, 49);
    view.defPosition("d9", 180, 110, 49, 49);
    view.defPosition("e9", 215, 110, 49, 49);
    view.defPosition("f9", 250, 110, 49, 49);
    view.defPosition("g9", 285, 110, 49, 49);
    view.defPosition("h9", 320, 110, 49, 49);
    view.defPosition("i9", 355, 110, 49, 49);
    view.defPosition("j9", 390, 110, 49, 49);
    view.defPosition("k9", 425, 110, 49, 49);
    view.defPosition("l9", 460, 110, 49, 49);
    view.defPosition("N9", 495, 110, 49, 49);
    view.defPosition("Y9", 530, 110, 49, 49);
    view.defPosition("X8", 5, 145, 49, 49);
    view.defPosition("M8", 40, 145, 49, 49);
    view.defPosition("a8", 75, 145, 49, 49);
    view.defPosition("b8", 110, 145, 49, 49);
    view.defPosition("c8", 145, 145, 49, 49);
    view.defPosition("d8", 180, 145, 49, 49);
    view.defPosition("e8", 215, 145, 49, 49);
    view.defPosition("f8", 250, 145, 49, 49);
    view.defPosition("g8", 285, 145, 49, 49);
    view.defPosition("h8", 320, 145, 49, 49);
    view.defPosition("i8", 355, 145, 49, 49);
    view.defPosition("j8", 390, 145, 49, 49);
    view.defPosition("k8", 425, 145, 49, 49);
    view.defPosition("l8", 460, 145, 49, 49);
    view.defPosition("N8", 495, 145, 49, 49);
    view.defPosition("Y8", 530, 145, 49, 49);
    view.defPosition("X7", 5, 180, 49, 49);
    view.defPosition("M7", 40, 180, 49, 49);
    view.defPosition("a7", 75, 180, 49, 49);
    view.defPosition("b7", 110, 180, 49, 49);
    view.defPosition("c7", 145, 180, 49, 49);
    view.defPosition("d7", 180, 180, 49, 49);
    view.defPosition("e7", 215, 180, 49, 49);
    view.defPosition("f7", 250, 180, 49, 49);
    view.defPosition("g7", 285, 180, 49, 49);
    view.defPosition("h7", 320, 180, 49, 49);
    view.defPosition("i7", 355, 180, 49, 49);
    view.defPosition("j7", 390, 180, 49, 49);
    view.defPosition("k7", 425, 180, 49, 49);
    view.defPosition("l7", 460, 180, 49, 49);
    view.defPosition("N7", 495, 180, 49, 49);
    view.defPosition("Y7", 530, 180, 49, 49);
    view.defPosition("X6", 5, 215, 49, 49);
    view.defPosition("M6", 40, 215, 49, 49);
    view.defPosition("a6", 75, 215, 49, 49);
    view.defPosition("b6", 110, 215, 49, 49);
    view.defPosition("c6", 145, 215, 49, 49);
    view.defPosition("d6", 180, 215, 49, 49);
    view.defPosition("e6", 215, 215, 49, 49);
    view.defPosition("f6", 250, 215, 49, 49);
    view.defPosition("g6", 285, 215, 49, 49);
    view.defPosition("h6", 320, 215, 49, 49);
    view.defPosition("i6", 355, 215, 49, 49);
    view.defPosition("j6", 390, 215, 49, 49);
    view.defPosition("k6", 425, 215, 49, 49);
    view.defPosition("l6", 460, 215, 49, 49);
    view.defPosition("N6", 495, 215, 49, 49);
    view.defPosition("Y6", 530, 215, 49, 49);
    view.defPosition("X5", 5, 250, 49, 49);
    view.defPosition("M5", 40, 250, 49, 49);
    view.defPosition("a5", 75, 250, 49, 49);
    view.defPosition("b5", 110, 250, 49, 49);
    view.defPosition("c5", 145, 250, 49, 49);
    view.defPosition("d5", 180, 250, 49, 49);
    view.defPosition("e5", 215, 250, 49, 49);
    view.defPosition("f5", 250, 250, 49, 49);
    view.defPosition("g5", 285, 250, 49, 49);
    view.defPosition("h5", 320, 250, 49, 49);
    view.defPosition("i5", 355, 250, 49, 49);
    view.defPosition("j5", 390, 250, 49, 49);
    view.defPosition("k5", 425, 250, 49, 49);
    view.defPosition("l5", 460, 250, 49, 49);
    view.defPosition("N5", 495, 250, 49, 49);
    view.defPosition("Y5", 530, 250, 49, 49);
    view.defPosition("X4", 5, 285, 49, 49);
    view.defPosition("M4", 40, 285, 49, 49);
    view.defPosition("a4", 75, 285, 49, 49);
    view.defPosition("b4", 110, 285, 49, 49);
    view.defPosition("c4", 145, 285, 49, 49);
    view.defPosition("d4", 180, 285, 49, 49);
    view.defPosition("e4", 215, 285, 49, 49);
    view.defPosition("f4", 250, 285, 49, 49);
    view.defPosition("g4", 285, 285, 49, 49);
    view.defPosition("h4", 320, 285, 49, 49);
    view.defPosition("i4", 355, 285, 49, 49);
    view.defPosition("j4", 390, 285, 49, 49);
    view.defPosition("k4", 425, 285, 49, 49);
    view.defPosition("l4", 460, 285, 49, 49);
    view.defPosition("N4", 495, 285, 49, 49);
    view.defPosition("Y4", 530, 285, 49, 49);
    view.defPosition("X3", 5, 320, 49, 49);
    view.defPosition("M3", 40, 320, 49, 49);
    view.defPosition("a3", 75, 320, 49, 49);
    view.defPosition("b3", 110, 320, 49, 49);
    view.defPosition("c3", 145, 320, 49, 49);
    view.defPosition("d3", 180, 320, 49, 49);
    view.defPosition("e3", 215, 320, 49, 49);
    view.defPosition("f3", 250, 320, 49, 49);
    view.defPosition("g3", 285, 320, 49, 49);
    view.defPosition("h3", 320, 320, 49, 49);
    view.defPosition("i3", 355, 320, 49, 49);
    view.defPosition("j3", 390, 320, 49, 49);
    view.defPosition("k3", 425, 320, 49, 49);
    view.defPosition("l3", 460, 320, 49, 49);
    view.defPosition("N3", 495, 320, 49, 49);
    view.defPosition("Y3", 530, 320, 49, 49);
    view.defPosition("X2", 5, 355, 49, 49);
    view.defPosition("M2", 40, 355, 49, 49);
    view.defPosition("a2", 75, 355, 49, 49);
    view.defPosition("b2", 110, 355, 49, 49);
    view.defPosition("c2", 145, 355, 49, 49);
    view.defPosition("d2", 180, 355, 49, 49);
    view.defPosition("e2", 215, 355, 49, 49);
    view.defPosition("f2", 250, 355, 49, 49);
    view.defPosition("g2", 285, 355, 49, 49);
    view.defPosition("h2", 320, 355, 49, 49);
    view.defPosition("i2", 355, 355, 49, 49);
    view.defPosition("j2", 390, 355, 49, 49);
    view.defPosition("k2", 425, 355, 49, 49);
    view.defPosition("l2", 460, 355, 49, 49);
    view.defPosition("N2", 495, 355, 49, 49);
    view.defPosition("Y2", 530, 355, 49, 49);
    view.defPosition("X1", 5, 390, 49, 49);
    view.defPosition("M1", 40, 390, 49, 49);
    view.defPosition("a1", 75, 390, 49, 49);
    view.defPosition("b1", 110, 390, 49, 49);
    view.defPosition("c1", 145, 390, 49, 49);
    view.defPosition("d1", 180, 390, 49, 49);
    view.defPosition("e1", 215, 390, 49, 49);
    view.defPosition("f1", 250, 390, 49, 49);
    view.defPosition("g1", 285, 390, 49, 49);
    view.defPosition("h1", 320, 390, 49, 49);
    view.defPosition("i1", 355, 390, 49, 49);
    view.defPosition("j1", 390, 390, 49, 49);
    view.defPosition("k1", 425, 390, 49, 49);
    view.defPosition("l1", 460, 390, 49, 49);
    view.defPosition("N1", 495, 390, 49, 49);
    view.defPosition("Y1", 530, 390, 49, 49);

    view.defPopup("Promote", 238, 100);
    view.defPopupPosition("T1", 15, 17, 36, 36);
    view.defPopupPosition("T2", 55, 17, 36, 36);
}
