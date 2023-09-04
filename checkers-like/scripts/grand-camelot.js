Dagaz.Model.WIDTH = 16;

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
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("detect-loops", "true");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h16", [17, 16, 15, 1, 0, 0, 0, 0]);
    design.addPosition("i16", [17, 16, 15, 0, -1, 0, 0, 0]);
    design.addPosition("j16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e15", [17, 16, 15, 1, 0, 0, 0, 0]);
    design.addPosition("f15", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("g15", [17, 16, 15, 1, -1, -15, 0, 0]);
    design.addPosition("h15", [17, 16, 15, 1, -1, -15, 0, -16]);
    design.addPosition("i15", [17, 16, 15, 1, -1, 0, -17, -16]);
    design.addPosition("j15", [17, 16, 15, 1, -1, 0, -17, 0]);
    design.addPosition("k15", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("l15", [17, 16, 15, 0, -1, 0, 0, 0]);
    design.addPosition("m15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d14", [17, 16, 15, 1, 0, -15, 0, 0]);
    design.addPosition("e14", [17, 16, 15, 1, -1, -15, 0, -16]);
    design.addPosition("f14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l14", [17, 16, 15, 1, -1, 0, -17, -16]);
    design.addPosition("m14", [17, 16, 15, 0, -1, 0, -17, 0]);
    design.addPosition("n14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c13", [17, 16, 15, 1, 0, -15, 0, 0]);
    design.addPosition("d13", [17, 16, 15, 1, -1, -15, 0, -16]);
    design.addPosition("e13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m13", [17, 16, 15, 1, -1, 0, -17, -16]);
    design.addPosition("n13", [17, 16, 15, 0, -1, 0, -17, 0]);
    design.addPosition("o13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b12", [17, 16, 0, 1, 0, -15, 0, 0]);
    design.addPosition("c12", [17, 16, 15, 1, -1, -15, 0, -16]);
    design.addPosition("d12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n12", [17, 16, 15, 1, -1, 0, -17, -16]);
    design.addPosition("o12", [0, 16, 15, 0, -1, 0, -17, 0]);
    design.addPosition("p12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b11", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("c11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o11", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("p11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [17, 16, 15, 1, 0, -15, 0, -16]);
    design.addPosition("c10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o10", [17, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("p10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [17, 16, 0, 1, 0, -15, 0, 0]);
    design.addPosition("b9", [17, 16, 15, 1, -1, -15, 0, -16]);
    design.addPosition("c9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o9", [17, 16, 15, 1, -1, 0, -17, -16]);
    design.addPosition("p9", [0, 16, 15, 0, -1, 0, -17, 0]);
    design.addPosition("a8", [17, 0, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b8", [17, 16, 0, 1, -1, -15, -17, -16]);
    design.addPosition("c8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o8", [0, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p8", [0, 0, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [17, 16, 0, 1, 0, -15, -17, -16]);
    design.addPosition("c7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o7", [0, 16, 15, 0, -1, -15, -17, -16]);
    design.addPosition("p7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("c6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o6", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("p6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [17, 0, 0, 1, 0, -15, 0, -16]);
    design.addPosition("c5", [17, 16, 0, 1, -1, -15, -17, -16]);
    design.addPosition("d5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n5", [0, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o5", [0, 0, 15, 0, -1, 0, -17, -16]);
    design.addPosition("p5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [17, 0, 0, 1, 0, -15, -17, -16]);
    design.addPosition("d4", [17, 16, 0, 1, -1, -15, -17, -16]);
    design.addPosition("e4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m4", [0, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n4", [0, 0, 15, 0, -1, -15, -17, -16]);
    design.addPosition("o4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d3", [17, 0, 0, 1, 0, -15, -17, -16]);
    design.addPosition("e3", [17, 16, 0, 1, -1, -15, -17, -16]);
    design.addPosition("f3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l3", [0, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m3", [0, 0, 15, 0, -1, -15, -17, -16]);
    design.addPosition("n3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 1, 0, -15, -17, -16]);
    design.addPosition("f2", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("g2", [17, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("h2", [17, 16, 0, 1, -1, -15, -17, -16]);
    design.addPosition("i2", [0, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j2", [0, 0, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k2", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("l2", [0, 0, 0, 0, -1, -15, -17, -16]);
    design.addPosition("m2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 1, 0, -15, -17, -16]);
    design.addPosition("i1", [0, 0, 0, 0, -1, -15, -17, -16]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("p1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("goal-zone", 2, [143, 127]);
    design.addZone("goal-zone", 1, [7, 8]);
    design.addZone("goal-zone", 4, [128, 112]);
    design.addZone("goal-zone", 3, [247, 248]);
    design.addZone("home-zone", 2, [128, 112]);
    design.addZone("home-zone", 1, [247, 248]);
    design.addZone("home-zone", 4, [143, 127]);
    design.addZone("home-zone", 3, [7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// goal-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	2);
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0, 1);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [7, 7], 1);
    design.addMove(0, 1, [6, 6], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [4, 4], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [0, 0], 1);

    design.addPiece("Knight", 1, 10);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 1, [7, 7], 1);
    design.addMove(1, 1, [6, 6], 1);
    design.addMove(1, 1, [3, 3], 1);
    design.addMove(1, 1, [5, 5], 1);
    design.addMove(1, 1, [4, 4], 1);
    design.addMove(1, 1, [2, 2], 1);
    design.addMove(1, 1, [1, 1], 1);
    design.addMove(1, 1, [0, 0], 1);

    design.setup("White", "Knight", 213);
    design.setup("White", "Knight", 198);
    design.setup("White", "Knight", 201);
    design.setup("White", "Knight", 218);
    design.setup("White", "Man", 214);
    design.setup("White", "Man", 215);
    design.setup("White", "Man", 216);
    design.setup("White", "Man", 217);
    design.setup("White", "Man", 199);
    design.setup("White", "Man", 200);
    design.setup("White", "Man", 183);
    design.setup("White", "Man", 184);
    design.setup("Red", "Knight", 162);
    design.setup("Red", "Knight", 147);
    design.setup("Red", "Knight", 82);
    design.setup("Red", "Knight", 99);
    design.setup("Red", "Man", 146);
    design.setup("Red", "Man", 130);
    design.setup("Red", "Man", 114);
    design.setup("Red", "Man", 98);
    design.setup("Red", "Man", 131);
    design.setup("Red", "Man", 115);
    design.setup("Red", "Man", 132);
    design.setup("Red", "Man", 116);
    design.setup("Black", "Knight", 37);
    design.setup("Black", "Knight", 54);
    design.setup("Black", "Knight", 57);
    design.setup("Black", "Knight", 42);
    design.setup("Black", "Man", 38);
    design.setup("Black", "Man", 39);
    design.setup("Black", "Man", 40);
    design.setup("Black", "Man", 41);
    design.setup("Black", "Man", 55);
    design.setup("Black", "Man", 56);
    design.setup("Black", "Man", 71);
    design.setup("Black", "Man", 72);
    design.setup("Blue", "Knight", 173);
    design.setup("Blue", "Knight", 156);
    design.setup("Blue", "Knight", 93);
    design.setup("Blue", "Knight", 108);
    design.setup("Blue", "Man", 157);
    design.setup("Blue", "Man", 141);
    design.setup("Blue", "Man", 125);
    design.setup("Blue", "Man", 109);
    design.setup("Blue", "Man", 140);
    design.setup("Blue", "Man", 124);
    design.setup("Blue", "Man", 139);
    design.setup("Blue", "Man", 123);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("RedMan", "Red Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("BlueMan", "Blue Man");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("RedKnight", "Red Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("BlueKnight", "Blue Knight");
 
    view.defPosition("a16", 2, 2, 50, 50);
    view.defPosition("b16", 52, 2, 50, 50);
    view.defPosition("c16", 102, 2, 50, 50);
    view.defPosition("d16", 152, 2, 50, 50);
    view.defPosition("e16", 202, 2, 50, 50);
    view.defPosition("f16", 252, 2, 50, 50);
    view.defPosition("g16", 302, 2, 50, 50);
    view.defPosition("h16", 352, 2, 50, 50);
    view.defPosition("i16", 402, 2, 50, 50);
    view.defPosition("j16", 452, 2, 50, 50);
    view.defPosition("k16", 502, 2, 50, 50);
    view.defPosition("l16", 552, 2, 50, 50);
    view.defPosition("m16", 602, 2, 50, 50);
    view.defPosition("n16", 652, 2, 50, 50);
    view.defPosition("o16", 702, 2, 50, 50);
    view.defPosition("p16", 752, 2, 50, 50);
    view.defPosition("a15", 2, 52, 50, 50);
    view.defPosition("b15", 52, 52, 50, 50);
    view.defPosition("c15", 102, 52, 50, 50);
    view.defPosition("d15", 152, 52, 50, 50);
    view.defPosition("e15", 202, 52, 50, 50);
    view.defPosition("f15", 252, 52, 50, 50);
    view.defPosition("g15", 302, 52, 50, 50);
    view.defPosition("h15", 352, 52, 50, 50);
    view.defPosition("i15", 402, 52, 50, 50);
    view.defPosition("j15", 452, 52, 50, 50);
    view.defPosition("k15", 502, 52, 50, 50);
    view.defPosition("l15", 552, 52, 50, 50);
    view.defPosition("m15", 602, 52, 50, 50);
    view.defPosition("n15", 652, 52, 50, 50);
    view.defPosition("o15", 702, 52, 50, 50);
    view.defPosition("p15", 752, 52, 50, 50);
    view.defPosition("a14", 2, 102, 50, 50);
    view.defPosition("b14", 52, 102, 50, 50);
    view.defPosition("c14", 102, 102, 50, 50);
    view.defPosition("d14", 152, 102, 50, 50);
    view.defPosition("e14", 202, 102, 50, 50);
    view.defPosition("f14", 252, 102, 50, 50);
    view.defPosition("g14", 302, 102, 50, 50);
    view.defPosition("h14", 352, 102, 50, 50);
    view.defPosition("i14", 402, 102, 50, 50);
    view.defPosition("j14", 452, 102, 50, 50);
    view.defPosition("k14", 502, 102, 50, 50);
    view.defPosition("l14", 552, 102, 50, 50);
    view.defPosition("m14", 602, 102, 50, 50);
    view.defPosition("n14", 652, 102, 50, 50);
    view.defPosition("o14", 702, 102, 50, 50);
    view.defPosition("p14", 752, 102, 50, 50);
    view.defPosition("a13", 2, 152, 50, 50);
    view.defPosition("b13", 52, 152, 50, 50);
    view.defPosition("c13", 102, 152, 50, 50);
    view.defPosition("d13", 152, 152, 50, 50);
    view.defPosition("e13", 202, 152, 50, 50);
    view.defPosition("f13", 252, 152, 50, 50);
    view.defPosition("g13", 302, 152, 50, 50);
    view.defPosition("h13", 352, 152, 50, 50);
    view.defPosition("i13", 402, 152, 50, 50);
    view.defPosition("j13", 452, 152, 50, 50);
    view.defPosition("k13", 502, 152, 50, 50);
    view.defPosition("l13", 552, 152, 50, 50);
    view.defPosition("m13", 602, 152, 50, 50);
    view.defPosition("n13", 652, 152, 50, 50);
    view.defPosition("o13", 702, 152, 50, 50);
    view.defPosition("p13", 752, 152, 50, 50);
    view.defPosition("a12", 2, 202, 50, 50);
    view.defPosition("b12", 52, 202, 50, 50);
    view.defPosition("c12", 102, 202, 50, 50);
    view.defPosition("d12", 152, 202, 50, 50);
    view.defPosition("e12", 202, 202, 50, 50);
    view.defPosition("f12", 252, 202, 50, 50);
    view.defPosition("g12", 302, 202, 50, 50);
    view.defPosition("h12", 352, 202, 50, 50);
    view.defPosition("i12", 402, 202, 50, 50);
    view.defPosition("j12", 452, 202, 50, 50);
    view.defPosition("k12", 502, 202, 50, 50);
    view.defPosition("l12", 552, 202, 50, 50);
    view.defPosition("m12", 602, 202, 50, 50);
    view.defPosition("n12", 652, 202, 50, 50);
    view.defPosition("o12", 702, 202, 50, 50);
    view.defPosition("p12", 752, 202, 50, 50);
    view.defPosition("a11", 2, 252, 50, 50);
    view.defPosition("b11", 52, 252, 50, 50);
    view.defPosition("c11", 102, 252, 50, 50);
    view.defPosition("d11", 152, 252, 50, 50);
    view.defPosition("e11", 202, 252, 50, 50);
    view.defPosition("f11", 252, 252, 50, 50);
    view.defPosition("g11", 302, 252, 50, 50);
    view.defPosition("h11", 352, 252, 50, 50);
    view.defPosition("i11", 402, 252, 50, 50);
    view.defPosition("j11", 452, 252, 50, 50);
    view.defPosition("k11", 502, 252, 50, 50);
    view.defPosition("l11", 552, 252, 50, 50);
    view.defPosition("m11", 602, 252, 50, 50);
    view.defPosition("n11", 652, 252, 50, 50);
    view.defPosition("o11", 702, 252, 50, 50);
    view.defPosition("p11", 752, 252, 50, 50);
    view.defPosition("a10", 2, 302, 50, 50);
    view.defPosition("b10", 52, 302, 50, 50);
    view.defPosition("c10", 102, 302, 50, 50);
    view.defPosition("d10", 152, 302, 50, 50);
    view.defPosition("e10", 202, 302, 50, 50);
    view.defPosition("f10", 252, 302, 50, 50);
    view.defPosition("g10", 302, 302, 50, 50);
    view.defPosition("h10", 352, 302, 50, 50);
    view.defPosition("i10", 402, 302, 50, 50);
    view.defPosition("j10", 452, 302, 50, 50);
    view.defPosition("k10", 502, 302, 50, 50);
    view.defPosition("l10", 552, 302, 50, 50);
    view.defPosition("m10", 602, 302, 50, 50);
    view.defPosition("n10", 652, 302, 50, 50);
    view.defPosition("o10", 702, 302, 50, 50);
    view.defPosition("p10", 752, 302, 50, 50);
    view.defPosition("a9", 2, 352, 50, 50);
    view.defPosition("b9", 52, 352, 50, 50);
    view.defPosition("c9", 102, 352, 50, 50);
    view.defPosition("d9", 152, 352, 50, 50);
    view.defPosition("e9", 202, 352, 50, 50);
    view.defPosition("f9", 252, 352, 50, 50);
    view.defPosition("g9", 302, 352, 50, 50);
    view.defPosition("h9", 352, 352, 50, 50);
    view.defPosition("i9", 402, 352, 50, 50);
    view.defPosition("j9", 452, 352, 50, 50);
    view.defPosition("k9", 502, 352, 50, 50);
    view.defPosition("l9", 552, 352, 50, 50);
    view.defPosition("m9", 602, 352, 50, 50);
    view.defPosition("n9", 652, 352, 50, 50);
    view.defPosition("o9", 702, 352, 50, 50);
    view.defPosition("p9", 752, 352, 50, 50);
    view.defPosition("a8", 2, 402, 50, 50);
    view.defPosition("b8", 52, 402, 50, 50);
    view.defPosition("c8", 102, 402, 50, 50);
    view.defPosition("d8", 152, 402, 50, 50);
    view.defPosition("e8", 202, 402, 50, 50);
    view.defPosition("f8", 252, 402, 50, 50);
    view.defPosition("g8", 302, 402, 50, 50);
    view.defPosition("h8", 352, 402, 50, 50);
    view.defPosition("i8", 402, 402, 50, 50);
    view.defPosition("j8", 452, 402, 50, 50);
    view.defPosition("k8", 502, 402, 50, 50);
    view.defPosition("l8", 552, 402, 50, 50);
    view.defPosition("m8", 602, 402, 50, 50);
    view.defPosition("n8", 652, 402, 50, 50);
    view.defPosition("o8", 702, 402, 50, 50);
    view.defPosition("p8", 752, 402, 50, 50);
    view.defPosition("a7", 2, 452, 50, 50);
    view.defPosition("b7", 52, 452, 50, 50);
    view.defPosition("c7", 102, 452, 50, 50);
    view.defPosition("d7", 152, 452, 50, 50);
    view.defPosition("e7", 202, 452, 50, 50);
    view.defPosition("f7", 252, 452, 50, 50);
    view.defPosition("g7", 302, 452, 50, 50);
    view.defPosition("h7", 352, 452, 50, 50);
    view.defPosition("i7", 402, 452, 50, 50);
    view.defPosition("j7", 452, 452, 50, 50);
    view.defPosition("k7", 502, 452, 50, 50);
    view.defPosition("l7", 552, 452, 50, 50);
    view.defPosition("m7", 602, 452, 50, 50);
    view.defPosition("n7", 652, 452, 50, 50);
    view.defPosition("o7", 702, 452, 50, 50);
    view.defPosition("p7", 752, 452, 50, 50);
    view.defPosition("a6", 2, 502, 50, 50);
    view.defPosition("b6", 52, 502, 50, 50);
    view.defPosition("c6", 102, 502, 50, 50);
    view.defPosition("d6", 152, 502, 50, 50);
    view.defPosition("e6", 202, 502, 50, 50);
    view.defPosition("f6", 252, 502, 50, 50);
    view.defPosition("g6", 302, 502, 50, 50);
    view.defPosition("h6", 352, 502, 50, 50);
    view.defPosition("i6", 402, 502, 50, 50);
    view.defPosition("j6", 452, 502, 50, 50);
    view.defPosition("k6", 502, 502, 50, 50);
    view.defPosition("l6", 552, 502, 50, 50);
    view.defPosition("m6", 602, 502, 50, 50);
    view.defPosition("n6", 652, 502, 50, 50);
    view.defPosition("o6", 702, 502, 50, 50);
    view.defPosition("p6", 752, 502, 50, 50);
    view.defPosition("a5", 2, 552, 50, 50);
    view.defPosition("b5", 52, 552, 50, 50);
    view.defPosition("c5", 102, 552, 50, 50);
    view.defPosition("d5", 152, 552, 50, 50);
    view.defPosition("e5", 202, 552, 50, 50);
    view.defPosition("f5", 252, 552, 50, 50);
    view.defPosition("g5", 302, 552, 50, 50);
    view.defPosition("h5", 352, 552, 50, 50);
    view.defPosition("i5", 402, 552, 50, 50);
    view.defPosition("j5", 452, 552, 50, 50);
    view.defPosition("k5", 502, 552, 50, 50);
    view.defPosition("l5", 552, 552, 50, 50);
    view.defPosition("m5", 602, 552, 50, 50);
    view.defPosition("n5", 652, 552, 50, 50);
    view.defPosition("o5", 702, 552, 50, 50);
    view.defPosition("p5", 752, 552, 50, 50);
    view.defPosition("a4", 2, 602, 50, 50);
    view.defPosition("b4", 52, 602, 50, 50);
    view.defPosition("c4", 102, 602, 50, 50);
    view.defPosition("d4", 152, 602, 50, 50);
    view.defPosition("e4", 202, 602, 50, 50);
    view.defPosition("f4", 252, 602, 50, 50);
    view.defPosition("g4", 302, 602, 50, 50);
    view.defPosition("h4", 352, 602, 50, 50);
    view.defPosition("i4", 402, 602, 50, 50);
    view.defPosition("j4", 452, 602, 50, 50);
    view.defPosition("k4", 502, 602, 50, 50);
    view.defPosition("l4", 552, 602, 50, 50);
    view.defPosition("m4", 602, 602, 50, 50);
    view.defPosition("n4", 652, 602, 50, 50);
    view.defPosition("o4", 702, 602, 50, 50);
    view.defPosition("p4", 752, 602, 50, 50);
    view.defPosition("a3", 2, 652, 50, 50);
    view.defPosition("b3", 52, 652, 50, 50);
    view.defPosition("c3", 102, 652, 50, 50);
    view.defPosition("d3", 152, 652, 50, 50);
    view.defPosition("e3", 202, 652, 50, 50);
    view.defPosition("f3", 252, 652, 50, 50);
    view.defPosition("g3", 302, 652, 50, 50);
    view.defPosition("h3", 352, 652, 50, 50);
    view.defPosition("i3", 402, 652, 50, 50);
    view.defPosition("j3", 452, 652, 50, 50);
    view.defPosition("k3", 502, 652, 50, 50);
    view.defPosition("l3", 552, 652, 50, 50);
    view.defPosition("m3", 602, 652, 50, 50);
    view.defPosition("n3", 652, 652, 50, 50);
    view.defPosition("o3", 702, 652, 50, 50);
    view.defPosition("p3", 752, 652, 50, 50);
    view.defPosition("a2", 2, 702, 50, 50);
    view.defPosition("b2", 52, 702, 50, 50);
    view.defPosition("c2", 102, 702, 50, 50);
    view.defPosition("d2", 152, 702, 50, 50);
    view.defPosition("e2", 202, 702, 50, 50);
    view.defPosition("f2", 252, 702, 50, 50);
    view.defPosition("g2", 302, 702, 50, 50);
    view.defPosition("h2", 352, 702, 50, 50);
    view.defPosition("i2", 402, 702, 50, 50);
    view.defPosition("j2", 452, 702, 50, 50);
    view.defPosition("k2", 502, 702, 50, 50);
    view.defPosition("l2", 552, 702, 50, 50);
    view.defPosition("m2", 602, 702, 50, 50);
    view.defPosition("n2", 652, 702, 50, 50);
    view.defPosition("o2", 702, 702, 50, 50);
    view.defPosition("p2", 752, 702, 50, 50);
    view.defPosition("a1", 2, 752, 50, 50);
    view.defPosition("b1", 52, 752, 50, 50);
    view.defPosition("c1", 102, 752, 50, 50);
    view.defPosition("d1", 152, 752, 50, 50);
    view.defPosition("e1", 202, 752, 50, 50);
    view.defPosition("f1", 252, 752, 50, 50);
    view.defPosition("g1", 302, 752, 50, 50);
    view.defPosition("h1", 352, 752, 50, 50);
    view.defPosition("i1", 402, 752, 50, 50);
    view.defPosition("j1", 452, 752, 50, 50);
    view.defPosition("k1", 502, 752, 50, 50);
    view.defPosition("l1", 552, 752, 50, 50);
    view.defPosition("m1", 602, 752, 50, 50);
    view.defPosition("n1", 652, 752, 50, 50);
    view.defPosition("o1", 702, 752, 50, 50);
    view.defPosition("p1", 752, 752, 50, 50);
}
