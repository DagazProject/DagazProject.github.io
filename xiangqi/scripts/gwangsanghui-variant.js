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
    design.checkVersion("show-captures", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("gwangsanghui-extension", "true");
    design.checkVersion("gwangsanghui-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Red", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a14", [0, 1, 15, 0, 0, 16, 0, 0]);
    design.addPosition("b14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("c14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("d14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("e14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("f14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("g14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("h14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("i14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("j14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("k14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("l14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("m14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("n14", [-1, 1, 15, 0, 0, 16, 14, 0]);
    design.addPosition("o14", [-1, 0, 15, 0, 0, 0, 14, 0]);
    design.addPosition("a13", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n13", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o13", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a12", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n12", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o12", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a11", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n11", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o11", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a10", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n10", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o10", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a9", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n9", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o9", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a8", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n8", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o8", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a7", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n7", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o7", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a6", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n6", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o6", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a5", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n5", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o5", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a4", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n4", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o4", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a3", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n3", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o3", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a2", [0, 1, 15, -14, -15, 16, 0, 0]);
    design.addPosition("b2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("c2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("d2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("e2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("f2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("g2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("h2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("i2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("j2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("k2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("l2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("m2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("n2", [-1, 1, 15, -14, -15, 16, 14, -16]);
    design.addPosition("o2", [-1, 0, 15, 0, -15, 0, 14, -16]);
    design.addPosition("a1", [0, 1, 0, -14, -15, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("c1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("d1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("e1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("f1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("g1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("h1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("i1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("j1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("k1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("l1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("m1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("n1", [-1, 1, 0, -14, -15, 0, 0, -16]);
    design.addPosition("o1", [-1, 0, 0, 0, -15, 0, 0, -16]);

    design.addZone("palace", 1, [156, 157, 158, 171, 172, 173, 186, 187, 188, 21, 22, 23, 36, 37, 38, 51, 52, 53, 150, 151, 152, 165, 166, 167, 180, 181, 182, 15, 16, 17, 30, 31, 32, 45, 46, 47, 162, 163, 164, 177, 178, 179, 192, 193, 194, 27, 28, 29, 42, 43, 44, 57, 58, 59]);
    design.addZone("palace", 2, [156, 157, 158, 171, 172, 173, 186, 187, 188, 21, 22, 23, 36, 37, 38, 51, 52, 53, 150, 151, 152, 165, 166, 167, 180, 181, 182, 15, 16, 17, 30, 31, 32, 45, 46, 47, 162, 163, 164, 177, 178, 179, 192, 193, 194, 27, 28, 29, 42, 43, 44, 57, 58, 59]);
    design.addZone("fortress", 1, [180, 150, 45, 15, 166, 31, 182, 152, 47, 17, 186, 156, 51, 21, 172, 37, 188, 158, 53, 23, 192, 162, 57, 27, 178, 43, 194, 164, 59, 29]);
    design.addZone("fortress", 2, [180, 150, 45, 15, 166, 31, 182, 152, 47, 17, 186, 156, 51, 21, 172, 37, 188, 158, 53, 23, 192, 162, 57, 27, 178, 43, 194, 164, 59, 29]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.LITERAL,	21);	// Knight
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	21);	// Knight
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// palace
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.IN_ZONE,	0);	// palace
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	21);	// Knight
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
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
    design.addCommand(3, ZRF.LITERAL,	21);	// Knight
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	11);
    design.addCommand(4, ZRF.LITERAL,	21);	// Knight
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-12);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	21);	// Knight
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	13);
    design.addCommand(5, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	21);	// Knight
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-14);
    design.addCommand(5, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	21);	// Knight
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-5);
    design.addCommand(6, ZRF.LITERAL,	14);	// Cannon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	16);	// EastCannon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	15);	// WestCannon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	7);
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-8);
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	14);	// Cannon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	16);	// EastCannon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	15);	// WestCannon
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	21);	// Knight
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	14);	// Cannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	16);	// EastCannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	15);	// WestCannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	14);	// Cannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	16);	// EastCannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	15);	// WestCannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	21);	// Knight
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
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
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	21);	// Knight
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end


    design.addPiece("Pawn", 0, 2);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 0, [0], 1);
    design.addMove(0, 0, [1], 1);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 1, [3], 1);

    design.addPiece("Soldier", 1, 2);
    design.addMove(1, 0, [7], 1);
    design.addMove(1, 0, [3], 1);
    design.addMove(1, 2, [4], 1);
    design.addMove(1, 2, [0], 1);
    design.addMove(1, 2, [1], 1);

    design.addPiece("King", 2, 1000);
    design.addMove(2, 2, [4], 0);
    design.addMove(2, 2, [2], 0);
    design.addMove(2, 2, [0], 0);
    design.addMove(2, 2, [1], 0);
    design.addMove(2, 1, [7], 0);
    design.addMove(2, 1, [6], 0);
    design.addMove(2, 1, [3], 0);
    design.addMove(2, 1, [5], 0);

    design.addPiece("WestGeneral", 3, 100);
    design.addMove(3, 2, [4], 0);
    design.addMove(3, 2, [2], 0);
    design.addMove(3, 2, [0], 0);
    design.addMove(3, 2, [1], 0);
    design.addMove(3, 1, [7], 0);
    design.addMove(3, 1, [6], 0);
    design.addMove(3, 1, [3], 0);
    design.addMove(3, 1, [5], 0);

    design.addPiece("EastGeneral", 4, 100);
    design.addMove(4, 2, [4], 0);
    design.addMove(4, 2, [2], 0);
    design.addMove(4, 2, [0], 0);
    design.addMove(4, 2, [1], 0);
    design.addMove(4, 1, [7], 0);
    design.addMove(4, 1, [6], 0);
    design.addMove(4, 1, [3], 0);
    design.addMove(4, 1, [5], 0);

    design.addPiece("Guard", 5, 3);
    design.addMove(5, 2, [4], 0);
    design.addMove(5, 2, [2], 0);
    design.addMove(5, 2, [0], 0);
    design.addMove(5, 2, [1], 0);
    design.addMove(5, 1, [7], 0);
    design.addMove(5, 1, [6], 0);
    design.addMove(5, 1, [3], 0);
    design.addMove(5, 1, [5], 0);

    design.addPiece("WestGuard", 6, 3);
    design.addMove(6, 2, [4], 0);
    design.addMove(6, 2, [2], 0);
    design.addMove(6, 2, [0], 0);
    design.addMove(6, 2, [1], 0);
    design.addMove(6, 1, [7], 0);
    design.addMove(6, 1, [6], 0);
    design.addMove(6, 1, [3], 0);
    design.addMove(6, 1, [5], 0);

    design.addPiece("EastGuard", 7, 3);
    design.addMove(7, 2, [4], 0);
    design.addMove(7, 2, [2], 0);
    design.addMove(7, 2, [0], 0);
    design.addMove(7, 2, [1], 0);
    design.addMove(7, 1, [7], 0);
    design.addMove(7, 1, [6], 0);
    design.addMove(7, 1, [3], 0);
    design.addMove(7, 1, [5], 0);

    design.addPiece("Elephant", 8, 3);
    design.addMove(8, 3, [4, 7, 7], 1);
    design.addMove(8, 3, [4, 3, 3], 1);
    design.addMove(8, 3, [2, 6, 6], 1);
    design.addMove(8, 3, [2, 5, 5], 1);
    design.addMove(8, 3, [0, 7, 7], 1);
    design.addMove(8, 3, [1, 3, 3], 1);
    design.addMove(8, 3, [0, 6, 6], 1);
    design.addMove(8, 3, [1, 5, 5], 1);

    design.addPiece("WestElephant", 9, 3);
    design.addMove(9, 3, [4, 7, 7], 1);
    design.addMove(9, 3, [4, 3, 3], 1);
    design.addMove(9, 3, [2, 6, 6], 1);
    design.addMove(9, 3, [2, 5, 5], 1);
    design.addMove(9, 3, [0, 7, 7], 1);
    design.addMove(9, 3, [1, 3, 3], 1);
    design.addMove(9, 3, [0, 6, 6], 1);
    design.addMove(9, 3, [1, 5, 5], 1);

    design.addPiece("EastElephant", 10, 3);
    design.addMove(10, 3, [4, 7, 7], 1);
    design.addMove(10, 3, [4, 3, 3], 1);
    design.addMove(10, 3, [2, 6, 6], 1);
    design.addMove(10, 3, [2, 5, 5], 1);
    design.addMove(10, 3, [0, 7, 7], 1);
    design.addMove(10, 3, [1, 3, 3], 1);
    design.addMove(10, 3, [0, 6, 6], 1);
    design.addMove(10, 3, [1, 5, 5], 1);

    design.addPiece("Chariot", 11, 13);
    design.addMove(11, 4, [4, 4], 1);
    design.addMove(11, 4, [2, 2], 1);
    design.addMove(11, 4, [0, 0], 1);
    design.addMove(11, 4, [1, 1], 1);
    design.addMove(11, 5, [7, 7], 1);
    design.addMove(11, 5, [3, 3], 1);
    design.addMove(11, 5, [6, 6], 1);
    design.addMove(11, 5, [5, 5], 1);

    design.addPiece("WestChariot", 12, 13);
    design.addMove(12, 4, [4, 4], 1);
    design.addMove(12, 4, [2, 2], 1);
    design.addMove(12, 4, [0, 0], 1);
    design.addMove(12, 4, [1, 1], 1);
    design.addMove(12, 5, [7, 7], 1);
    design.addMove(12, 5, [3, 3], 1);
    design.addMove(12, 5, [6, 6], 1);
    design.addMove(12, 5, [5, 5], 1);

    design.addPiece("EastChariot", 13, 13);
    design.addMove(13, 4, [4, 4], 1);
    design.addMove(13, 4, [2, 2], 1);
    design.addMove(13, 4, [0, 0], 1);
    design.addMove(13, 4, [1, 1], 1);
    design.addMove(13, 5, [7, 7], 1);
    design.addMove(13, 5, [3, 3], 1);
    design.addMove(13, 5, [6, 6], 1);
    design.addMove(13, 5, [5, 5], 1);

    design.addPiece("Cannon", 14, 6);
    design.addMove(14, 6, [4, 4, 4, 4], 1);
    design.addMove(14, 6, [2, 2, 2, 2], 1);
    design.addMove(14, 6, [0, 0, 0, 0], 1);
    design.addMove(14, 6, [1, 1, 1, 1], 1);
    design.addMove(14, 7, [7, 7], 1);
    design.addMove(14, 7, [3, 3], 1);
    design.addMove(14, 7, [6, 6], 1);
    design.addMove(14, 7, [5, 5], 1);

    design.addPiece("WestCannon", 15, 6);
    design.addMove(15, 6, [4, 4, 4, 4], 1);
    design.addMove(15, 6, [2, 2, 2, 2], 1);
    design.addMove(15, 6, [0, 0, 0, 0], 1);
    design.addMove(15, 6, [1, 1, 1, 1], 1);
    design.addMove(15, 7, [7, 7], 1);
    design.addMove(15, 7, [3, 3], 1);
    design.addMove(15, 7, [6, 6], 1);
    design.addMove(15, 7, [5, 5], 1);

    design.addPiece("EastCannon", 16, 6);
    design.addMove(16, 6, [4, 4, 4, 4], 1);
    design.addMove(16, 6, [2, 2, 2, 2], 1);
    design.addMove(16, 6, [0, 0, 0, 0], 1);
    design.addMove(16, 6, [1, 1, 1, 1], 1);
    design.addMove(16, 7, [7, 7], 1);
    design.addMove(16, 7, [3, 3], 1);
    design.addMove(16, 7, [6, 6], 1);
    design.addMove(16, 7, [5, 5], 1);

    design.addPiece("Horse", 17, 5);
    design.addMove(17, 8, [4, 7], 1);
    design.addMove(17, 8, [4, 3], 1);
    design.addMove(17, 8, [2, 6], 1);
    design.addMove(17, 8, [2, 5], 1);
    design.addMove(17, 8, [0, 7], 1);
    design.addMove(17, 8, [1, 3], 1);
    design.addMove(17, 8, [0, 6], 1);
    design.addMove(17, 8, [1, 5], 1);

    design.addPiece("WestHorse", 18, 5);
    design.addMove(18, 8, [4, 7], 1);
    design.addMove(18, 8, [4, 3], 1);
    design.addMove(18, 8, [2, 6], 1);
    design.addMove(18, 8, [2, 5], 1);
    design.addMove(18, 8, [0, 7], 1);
    design.addMove(18, 8, [1, 3], 1);
    design.addMove(18, 8, [0, 6], 1);
    design.addMove(18, 8, [1, 5], 1);

    design.addPiece("EastHorse", 19, 5);
    design.addMove(19, 8, [4, 7], 1);
    design.addMove(19, 8, [4, 3], 1);
    design.addMove(19, 8, [2, 6], 1);
    design.addMove(19, 8, [2, 5], 1);
    design.addMove(19, 8, [0, 7], 1);
    design.addMove(19, 8, [1, 3], 1);
    design.addMove(19, 8, [0, 6], 1);
    design.addMove(19, 8, [1, 5], 1);

    design.addPiece("Warrior", 20, 7);
    design.addMove(20, 0, [4], 1);
    design.addMove(20, 0, [2], 1);
    design.addMove(20, 0, [0], 1);
    design.addMove(20, 0, [1], 1);
    design.addMove(20, 8, [4, 4], 1);
    design.addMove(20, 8, [2, 2], 1);
    design.addMove(20, 8, [0, 0], 1);
    design.addMove(20, 8, [1, 1], 1);

    design.addPiece("Knight", 21, 4);
    design.addMove(21, 9, [4, 7], 1);
    design.addMove(21, 9, [4, 3], 1);
    design.addMove(21, 9, [2, 6], 1);
    design.addMove(21, 9, [2, 5], 1);
    design.addMove(21, 9, [0, 7], 1);
    design.addMove(21, 9, [0, 6], 1);
    design.addMove(21, 9, [1, 3], 1);
    design.addMove(21, 9, [1, 5], 1);

    design.addPiece("Killer", 22, 3);
    design.addMove(22, 10, [7], 1);
    design.addMove(22, 10, [3], 1);
    design.addMove(22, 10, [6], 1);
    design.addMove(22, 10, [5], 1);

    design.addPiece("Forward", 23, 1);

    design.addPiece("Backward", 24, 1);

    design.setup("Red", "King", 172);
    design.setup("Red", "WestGeneral", 166);
    design.setup("Red", "EastGeneral", 178);
    design.setup("Red", "Guard", 186);
    design.setup("Red", "Guard", 188);
    design.setup("Red", "WestGuard", 181);
    design.setup("Red", "EastGuard", 193);
    design.setup("Red", "Elephant", 185);
    design.setup("Red", "Elephant", 189);
    design.setup("Red", "WestElephant", 182);
    design.setup("Red", "EastElephant", 192);
    design.setup("Red", "Chariot", 184);
    design.setup("Red", "Chariot", 190);
    design.setup("Red", "WestChariot", 180);
    design.setup("Red", "EastChariot", 194);
    design.setup("Red", "Cannon", 156);
    design.setup("Red", "Cannon", 158);
    design.setup("Red", "WestCannon", 150);
    design.setup("Red", "EastCannon", 164);
    design.setup("Red", "Horse", 155);
    design.setup("Red", "Horse", 159);
    design.setup("Red", "WestHorse", 152);
    design.setup("Red", "EastHorse", 162);
    design.setup("Red", "Warrior", 168);
    design.setup("Red", "Warrior", 176);
    design.setup("Red", "Knight", 198);
    design.setup("Red", "Knight", 206);
    design.setup("Red", "Killer", 138);
    design.setup("Red", "Killer", 146);
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
    design.setup("Black", "WestGeneral", 31);
    design.setup("Black", "EastGeneral", 43);
    design.setup("Black", "Guard", 21);
    design.setup("Black", "Guard", 23);
    design.setup("Black", "WestGuard", 16);
    design.setup("Black", "EastGuard", 28);
    design.setup("Black", "Elephant", 20);
    design.setup("Black", "Elephant", 24);
    design.setup("Black", "WestElephant", 17);
    design.setup("Black", "EastElephant", 27);
    design.setup("Black", "Chariot", 19);
    design.setup("Black", "Chariot", 25);
    design.setup("Black", "WestChariot", 15);
    design.setup("Black", "EastChariot", 29);
    design.setup("Black", "Cannon", 51);
    design.setup("Black", "Cannon", 53);
    design.setup("Black", "WestCannon", 45);
    design.setup("Black", "EastCannon", 59);
    design.setup("Black", "Horse", 50);
    design.setup("Black", "Horse", 54);
    design.setup("Black", "WestHorse", 47);
    design.setup("Black", "EastHorse", 57);
    design.setup("Black", "Warrior", 33);
    design.setup("Black", "Warrior", 41);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Knight", 11);
    design.setup("Black", "Killer", 63);
    design.setup("Black", "Killer", 71);
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
    view.defPiece("RedWestGeneral", "Red WestGeneral");
    view.defPiece("BlackWestGeneral", "Black WestGeneral");
    view.defPiece("RedEastGeneral", "Red EastGeneral");
    view.defPiece("BlackEastGeneral", "Black EastGeneral");
    view.defPiece("RedGuard", "Red Guard");
    view.defPiece("BlackGuard", "Black Guard");
    view.defPiece("RedWestGuard", "Red WestGuard");
    view.defPiece("BlackWestGuard", "Black WestGuard");
    view.defPiece("RedEastGuard", "Red EastGuard");
    view.defPiece("BlackEastGuard", "Black EastGuard");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedWestElephant", "Red WestElephant");
    view.defPiece("BlackWestElephant", "Black WestElephant");
    view.defPiece("RedEastElephant", "Red EastElephant");
    view.defPiece("BlackEastElephant", "Black EastElephant");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("RedWestChariot", "Red WestChariot");
    view.defPiece("BlackWestChariot", "Black WestChariot");
    view.defPiece("RedEastChariot", "Red EastChariot");
    view.defPiece("BlackEastChariot", "Black EastChariot");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedWestCannon", "Red WestCannon");
    view.defPiece("BlackWestCannon", "Black WestCannon");
    view.defPiece("RedEastCannon", "Red EastCannon");
    view.defPiece("BlackEastCannon", "Black EastCannon");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedWestHorse", "Red WestHorse");
    view.defPiece("BlackWestHorse", "Black WestHorse");
    view.defPiece("RedEastHorse", "Red EastHorse");
    view.defPiece("BlackEastHorse", "Black EastHorse");
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
 
    view.defPosition("a14", 14, 13, 48, 48);
    view.defPosition("b14", 62, 13, 48, 48);
    view.defPosition("c14", 110, 13, 48, 48);
    view.defPosition("d14", 158, 13, 48, 48);
    view.defPosition("e14", 206, 13, 48, 48);
    view.defPosition("f14", 254, 13, 48, 48);
    view.defPosition("g14", 302, 13, 48, 48);
    view.defPosition("h14", 350, 13, 48, 48);
    view.defPosition("i14", 398, 13, 48, 48);
    view.defPosition("j14", 446, 13, 48, 48);
    view.defPosition("k14", 494, 13, 48, 48);
    view.defPosition("l14", 542, 13, 48, 48);
    view.defPosition("m14", 590, 13, 48, 48);
    view.defPosition("n14", 638, 13, 48, 48);
    view.defPosition("o14", 686, 13, 48, 48);
    view.defPosition("a13", 14, 61, 48, 48);
    view.defPosition("b13", 62, 61, 48, 48);
    view.defPosition("c13", 110, 61, 48, 48);
    view.defPosition("d13", 158, 61, 48, 48);
    view.defPosition("e13", 206, 61, 48, 48);
    view.defPosition("f13", 254, 61, 48, 48);
    view.defPosition("g13", 302, 61, 48, 48);
    view.defPosition("h13", 350, 61, 48, 48);
    view.defPosition("i13", 398, 61, 48, 48);
    view.defPosition("j13", 446, 61, 48, 48);
    view.defPosition("k13", 494, 61, 48, 48);
    view.defPosition("l13", 542, 61, 48, 48);
    view.defPosition("m13", 590, 61, 48, 48);
    view.defPosition("n13", 638, 61, 48, 48);
    view.defPosition("o13", 686, 61, 48, 48);
    view.defPosition("a12", 14, 109, 48, 48);
    view.defPosition("b12", 62, 109, 48, 48);
    view.defPosition("c12", 110, 109, 48, 48);
    view.defPosition("d12", 158, 109, 48, 48);
    view.defPosition("e12", 206, 109, 48, 48);
    view.defPosition("f12", 254, 109, 48, 48);
    view.defPosition("g12", 302, 109, 48, 48);
    view.defPosition("h12", 350, 109, 48, 48);
    view.defPosition("i12", 398, 109, 48, 48);
    view.defPosition("j12", 446, 109, 48, 48);
    view.defPosition("k12", 494, 109, 48, 48);
    view.defPosition("l12", 542, 109, 48, 48);
    view.defPosition("m12", 590, 109, 48, 48);
    view.defPosition("n12", 638, 109, 48, 48);
    view.defPosition("o12", 686, 109, 48, 48);
    view.defPosition("a11", 14, 157, 48, 48);
    view.defPosition("b11", 62, 157, 48, 48);
    view.defPosition("c11", 110, 157, 48, 48);
    view.defPosition("d11", 158, 157, 48, 48);
    view.defPosition("e11", 206, 157, 48, 48);
    view.defPosition("f11", 254, 157, 48, 48);
    view.defPosition("g11", 302, 157, 48, 48);
    view.defPosition("h11", 350, 157, 48, 48);
    view.defPosition("i11", 398, 157, 48, 48);
    view.defPosition("j11", 446, 157, 48, 48);
    view.defPosition("k11", 494, 157, 48, 48);
    view.defPosition("l11", 542, 157, 48, 48);
    view.defPosition("m11", 590, 157, 48, 48);
    view.defPosition("n11", 638, 157, 48, 48);
    view.defPosition("o11", 686, 157, 48, 48);
    view.defPosition("a10", 14, 205, 48, 48);
    view.defPosition("b10", 62, 205, 48, 48);
    view.defPosition("c10", 110, 205, 48, 48);
    view.defPosition("d10", 158, 205, 48, 48);
    view.defPosition("e10", 206, 205, 48, 48);
    view.defPosition("f10", 254, 205, 48, 48);
    view.defPosition("g10", 302, 205, 48, 48);
    view.defPosition("h10", 350, 205, 48, 48);
    view.defPosition("i10", 398, 205, 48, 48);
    view.defPosition("j10", 446, 205, 48, 48);
    view.defPosition("k10", 494, 205, 48, 48);
    view.defPosition("l10", 542, 205, 48, 48);
    view.defPosition("m10", 590, 205, 48, 48);
    view.defPosition("n10", 638, 205, 48, 48);
    view.defPosition("o10", 686, 205, 48, 48);
    view.defPosition("a9", 14, 253, 48, 48);
    view.defPosition("b9", 62, 253, 48, 48);
    view.defPosition("c9", 110, 253, 48, 48);
    view.defPosition("d9", 158, 253, 48, 48);
    view.defPosition("e9", 206, 253, 48, 48);
    view.defPosition("f9", 254, 253, 48, 48);
    view.defPosition("g9", 302, 253, 48, 48);
    view.defPosition("h9", 350, 253, 48, 48);
    view.defPosition("i9", 398, 253, 48, 48);
    view.defPosition("j9", 446, 253, 48, 48);
    view.defPosition("k9", 494, 253, 48, 48);
    view.defPosition("l9", 542, 253, 48, 48);
    view.defPosition("m9", 590, 253, 48, 48);
    view.defPosition("n9", 638, 253, 48, 48);
    view.defPosition("o9", 686, 253, 48, 48);
    view.defPosition("a8", 14, 301, 48, 48);
    view.defPosition("b8", 62, 301, 48, 48);
    view.defPosition("c8", 110, 301, 48, 48);
    view.defPosition("d8", 158, 301, 48, 48);
    view.defPosition("e8", 206, 301, 48, 48);
    view.defPosition("f8", 254, 301, 48, 48);
    view.defPosition("g8", 302, 301, 48, 48);
    view.defPosition("h8", 350, 301, 48, 48);
    view.defPosition("i8", 398, 301, 48, 48);
    view.defPosition("j8", 446, 301, 48, 48);
    view.defPosition("k8", 494, 301, 48, 48);
    view.defPosition("l8", 542, 301, 48, 48);
    view.defPosition("m8", 590, 301, 48, 48);
    view.defPosition("n8", 638, 301, 48, 48);
    view.defPosition("o8", 686, 301, 48, 48);
    view.defPosition("a7", 14, 349, 48, 48);
    view.defPosition("b7", 62, 349, 48, 48);
    view.defPosition("c7", 110, 349, 48, 48);
    view.defPosition("d7", 158, 349, 48, 48);
    view.defPosition("e7", 206, 349, 48, 48);
    view.defPosition("f7", 254, 349, 48, 48);
    view.defPosition("g7", 302, 349, 48, 48);
    view.defPosition("h7", 350, 349, 48, 48);
    view.defPosition("i7", 398, 349, 48, 48);
    view.defPosition("j7", 446, 349, 48, 48);
    view.defPosition("k7", 494, 349, 48, 48);
    view.defPosition("l7", 542, 349, 48, 48);
    view.defPosition("m7", 590, 349, 48, 48);
    view.defPosition("n7", 638, 349, 48, 48);
    view.defPosition("o7", 686, 349, 48, 48);
    view.defPosition("a6", 14, 397, 48, 48);
    view.defPosition("b6", 62, 397, 48, 48);
    view.defPosition("c6", 110, 397, 48, 48);
    view.defPosition("d6", 158, 397, 48, 48);
    view.defPosition("e6", 206, 397, 48, 48);
    view.defPosition("f6", 254, 397, 48, 48);
    view.defPosition("g6", 302, 397, 48, 48);
    view.defPosition("h6", 350, 397, 48, 48);
    view.defPosition("i6", 398, 397, 48, 48);
    view.defPosition("j6", 446, 397, 48, 48);
    view.defPosition("k6", 494, 397, 48, 48);
    view.defPosition("l6", 542, 397, 48, 48);
    view.defPosition("m6", 590, 397, 48, 48);
    view.defPosition("n6", 638, 397, 48, 48);
    view.defPosition("o6", 686, 397, 48, 48);
    view.defPosition("a5", 14, 445, 48, 48);
    view.defPosition("b5", 62, 445, 48, 48);
    view.defPosition("c5", 110, 445, 48, 48);
    view.defPosition("d5", 158, 445, 48, 48);
    view.defPosition("e5", 206, 445, 48, 48);
    view.defPosition("f5", 254, 445, 48, 48);
    view.defPosition("g5", 302, 445, 48, 48);
    view.defPosition("h5", 350, 445, 48, 48);
    view.defPosition("i5", 398, 445, 48, 48);
    view.defPosition("j5", 446, 445, 48, 48);
    view.defPosition("k5", 494, 445, 48, 48);
    view.defPosition("l5", 542, 445, 48, 48);
    view.defPosition("m5", 590, 445, 48, 48);
    view.defPosition("n5", 638, 445, 48, 48);
    view.defPosition("o5", 686, 445, 48, 48);
    view.defPosition("a4", 14, 493, 48, 48);
    view.defPosition("b4", 62, 493, 48, 48);
    view.defPosition("c4", 110, 493, 48, 48);
    view.defPosition("d4", 158, 493, 48, 48);
    view.defPosition("e4", 206, 493, 48, 48);
    view.defPosition("f4", 254, 493, 48, 48);
    view.defPosition("g4", 302, 493, 48, 48);
    view.defPosition("h4", 350, 493, 48, 48);
    view.defPosition("i4", 398, 493, 48, 48);
    view.defPosition("j4", 446, 493, 48, 48);
    view.defPosition("k4", 494, 493, 48, 48);
    view.defPosition("l4", 542, 493, 48, 48);
    view.defPosition("m4", 590, 493, 48, 48);
    view.defPosition("n4", 638, 493, 48, 48);
    view.defPosition("o4", 686, 493, 48, 48);
    view.defPosition("a3", 14, 541, 48, 48);
    view.defPosition("b3", 62, 541, 48, 48);
    view.defPosition("c3", 110, 541, 48, 48);
    view.defPosition("d3", 158, 541, 48, 48);
    view.defPosition("e3", 206, 541, 48, 48);
    view.defPosition("f3", 254, 541, 48, 48);
    view.defPosition("g3", 302, 541, 48, 48);
    view.defPosition("h3", 350, 541, 48, 48);
    view.defPosition("i3", 398, 541, 48, 48);
    view.defPosition("j3", 446, 541, 48, 48);
    view.defPosition("k3", 494, 541, 48, 48);
    view.defPosition("l3", 542, 541, 48, 48);
    view.defPosition("m3", 590, 541, 48, 48);
    view.defPosition("n3", 638, 541, 48, 48);
    view.defPosition("o3", 686, 541, 48, 48);
    view.defPosition("a2", 14, 589, 48, 48);
    view.defPosition("b2", 62, 589, 48, 48);
    view.defPosition("c2", 110, 589, 48, 48);
    view.defPosition("d2", 158, 589, 48, 48);
    view.defPosition("e2", 206, 589, 48, 48);
    view.defPosition("f2", 254, 589, 48, 48);
    view.defPosition("g2", 302, 589, 48, 48);
    view.defPosition("h2", 350, 589, 48, 48);
    view.defPosition("i2", 398, 589, 48, 48);
    view.defPosition("j2", 446, 589, 48, 48);
    view.defPosition("k2", 494, 589, 48, 48);
    view.defPosition("l2", 542, 589, 48, 48);
    view.defPosition("m2", 590, 589, 48, 48);
    view.defPosition("n2", 638, 589, 48, 48);
    view.defPosition("o2", 686, 589, 48, 48);
    view.defPosition("a1", 14, 637, 48, 48);
    view.defPosition("b1", 62, 637, 48, 48);
    view.defPosition("c1", 110, 637, 48, 48);
    view.defPosition("d1", 158, 637, 48, 48);
    view.defPosition("e1", 206, 637, 48, 48);
    view.defPosition("f1", 254, 637, 48, 48);
    view.defPosition("g1", 302, 637, 48, 48);
    view.defPosition("h1", 350, 637, 48, 48);
    view.defPosition("i1", 398, 637, 48, 48);
    view.defPosition("j1", 446, 637, 48, 48);
    view.defPosition("k1", 494, 637, 48, 48);
    view.defPosition("l1", 542, 637, 48, 48);
    view.defPosition("m1", 590, 637, 48, 48);
    view.defPosition("n1", 638, 637, 48, 48);
    view.defPosition("o1", 686, 637, 48, 48);
}
