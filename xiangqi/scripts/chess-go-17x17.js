Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;
Dagaz.View.clearDrops = true;
Dagaz.Model.WIDTH = 17;

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("ko", "situation");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a17", [18, 17, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("c17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("d17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("e17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("f17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("g17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("h17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("i17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("j17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("k17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("l17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("m17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("n17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("o17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("p17", [18, 17, 16, 1, -1, 0, 0, 0]);
    design.addPosition("q17", [0, 17, 16, 0, -1, 0, 0, 0]);
    design.addPosition("a16", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p16", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q16", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a15", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p15", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q15", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a14", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p14", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q14", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a13", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p13", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q13", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a12", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p12", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q12", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a11", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p11", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q11", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a10", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p10", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q10", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a9", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p9", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q9", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a8", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p8", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q8", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a7", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p7", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q7", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a6", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p6", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q6", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a5", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p5", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q5", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a4", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p4", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q4", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a3", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p3", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q3", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a2", [18, 17, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("c2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("d2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("e2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("f2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("g2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("h2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("i2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("j2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("k2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("l2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("m2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("n2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("o2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("p2", [18, 17, 16, 1, -1, -16, -18, -17]);
    design.addPosition("q2", [0, 17, 16, 0, -1, 0, -18, -17]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -16, 0, -17]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("l1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("m1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("n1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("o1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("p1", [0, 0, 0, 1, -1, -16, -18, -17]);
    design.addPosition("q1", [0, 0, 0, 0, -1, 0, -18, -17]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	0);	// Stone
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.LITERAL,	0);	// Stone
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	0);	// Stone
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-15);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.LITERAL,	0);	// Stone
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-15);
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.LITERAL,	0);	// Stone
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-12);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	0);	// Stone
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	0);	// Stone
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);

    design.addPiece("Soldier", 1);
    design.addDrop(1, 1, [], 1);
    design.addMove(1, 2, [7], 2);
    design.addMove(1, 2, [3], 2);
    design.addMove(1, 2, [4], 2);
    design.addMove(1, 2, [1], 2);

    design.addPiece("Horse", 2);
    design.addDrop(2, 1, [], 1);
    design.addMove(2, 3, [7, 6], 2);
    design.addMove(2, 3, [7, 5], 2);
    design.addMove(2, 3, [1, 2], 2);
    design.addMove(2, 3, [1, 0], 2);
    design.addMove(2, 3, [4, 6], 2);
    design.addMove(2, 3, [3, 5], 2);
    design.addMove(2, 3, [4, 2], 2);
    design.addMove(2, 3, [3, 0], 2);

    design.addPiece("Elephant", 3);
    design.addDrop(3, 1, [], 1);
    design.addMove(3, 3, [6, 6], 2);
    design.addMove(3, 3, [5, 5], 2);
    design.addMove(3, 3, [2, 2], 2);
    design.addMove(3, 3, [0, 0], 2);

    design.addPiece("Chariot", 4);
    design.addDrop(4, 1, [], 1);
    design.addMove(4, 4, [7, 7], 2);
    design.addMove(4, 4, [3, 3], 2);
    design.addMove(4, 4, [4, 4], 2);
    design.addMove(4, 4, [1, 1], 2);

    design.addPiece("Cannon", 5);
    design.addDrop(5, 1, [], 1);
    design.addMove(5, 5, [7, 7, 7, 7, 7, 7], 2);
    design.addMove(5, 5, [3, 3, 3, 3, 3, 3], 2);
    design.addMove(5, 5, [4, 4, 4, 4, 4, 4], 2);
    design.addMove(5, 5, [1, 1, 1, 1, 1, 1], 2);

    design.addPiece("Mandarin", 6);
    design.addDrop(6, 1, [], 1);
    design.addMove(6, 6, [6], 2);
    design.addMove(6, 6, [5], 2);
    design.addMove(6, 6, [2], 2);
    design.addMove(6, 6, [0], 2);

    design.addPiece("General", 7);
    design.addDrop(7, 1, [], 1);
    design.addMove(7, 7, [7], 2);
    design.addMove(7, 7, [3], 2);
    design.addMove(7, 7, [4], 2);
    design.addMove(7, 7, [1], 2);

    design.reserve("White", "Stone", 500);
    design.reserve("White", "Soldier", 5);
    design.reserve("White", "Horse", 2);
    design.reserve("White", "Elephant", 2);
    design.reserve("White", "Chariot", 2);
    design.reserve("White", "Mandarin", 2);
    design.reserve("White", "Cannon", 2);
    design.reserve("White", "General", 1);
    design.reserve("Black", "Stone", 500);
    design.reserve("Black", "Soldier", 5);
    design.reserve("Black", "Horse", 2);
    design.reserve("Black", "Elephant", 2);
    design.reserve("Black", "Chariot", 2);
    design.reserve("Black", "Mandarin", 2);
    design.reserve("Black", "Cannon", 2);
    design.reserve("Black", "General", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("WhiteSoldier", "White Soldier");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("WhiteHorse", "White Horse");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("WhiteElephant", "White Elephant");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("WhiteChariot", "White Chariot");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("WhiteCannon", "White Cannon");
    view.defPiece("BlackMandarin", "Black Mandarin");
    view.defPiece("WhiteMandarin", "White Mandarin");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("WhiteGeneral", "White General");
 
    view.defPosition("a17", 5, 5, 31, 31);
    view.defPosition("b17", 36, 5, 31, 31);
    view.defPosition("c17", 67, 5, 31, 31);
    view.defPosition("d17", 98, 5, 31, 31);
    view.defPosition("e17", 129, 5, 31, 31);
    view.defPosition("f17", 160, 5, 31, 31);
    view.defPosition("g17", 191, 5, 31, 31);
    view.defPosition("h17", 222, 5, 31, 31);
    view.defPosition("i17", 253, 5, 31, 31);
    view.defPosition("j17", 284, 5, 31, 31);
    view.defPosition("k17", 315, 5, 31, 31);
    view.defPosition("l17", 346, 5, 31, 31);
    view.defPosition("m17", 377, 5, 31, 31);
    view.defPosition("n17", 408, 5, 31, 31);
    view.defPosition("o17", 439, 5, 31, 31);
    view.defPosition("p17", 470, 5, 31, 31);
    view.defPosition("q17", 501, 5, 31, 31);
    view.defPosition("a16", 5, 36, 31, 31);
    view.defPosition("b16", 36, 36, 31, 31);
    view.defPosition("c16", 67, 36, 31, 31);
    view.defPosition("d16", 98, 36, 31, 31);
    view.defPosition("e16", 129, 36, 31, 31);
    view.defPosition("f16", 160, 36, 31, 31);
    view.defPosition("g16", 191, 36, 31, 31);
    view.defPosition("h16", 222, 36, 31, 31);
    view.defPosition("i16", 253, 36, 31, 31);
    view.defPosition("j16", 284, 36, 31, 31);
    view.defPosition("k16", 315, 36, 31, 31);
    view.defPosition("l16", 346, 36, 31, 31);
    view.defPosition("m16", 377, 36, 31, 31);
    view.defPosition("n16", 408, 36, 31, 31);
    view.defPosition("o16", 439, 36, 31, 31);
    view.defPosition("p16", 470, 36, 31, 31);
    view.defPosition("q16", 501, 36, 31, 31);
    view.defPosition("a15", 5, 67, 31, 31);
    view.defPosition("b15", 36, 67, 31, 31);
    view.defPosition("c15", 67, 67, 31, 31);
    view.defPosition("d15", 98, 67, 31, 31);
    view.defPosition("e15", 129, 67, 31, 31);
    view.defPosition("f15", 160, 67, 31, 31);
    view.defPosition("g15", 191, 67, 31, 31);
    view.defPosition("h15", 222, 67, 31, 31);
    view.defPosition("i15", 253, 67, 31, 31);
    view.defPosition("j15", 284, 67, 31, 31);
    view.defPosition("k15", 315, 67, 31, 31);
    view.defPosition("l15", 346, 67, 31, 31);
    view.defPosition("m15", 377, 67, 31, 31);
    view.defPosition("n15", 408, 67, 31, 31);
    view.defPosition("o15", 439, 67, 31, 31);
    view.defPosition("p15", 470, 67, 31, 31);
    view.defPosition("q15", 501, 67, 31, 31);
    view.defPosition("a14", 5, 98, 31, 31);
    view.defPosition("b14", 36, 98, 31, 31);
    view.defPosition("c14", 67, 98, 31, 31);
    view.defPosition("d14", 98, 98, 31, 31);
    view.defPosition("e14", 129, 98, 31, 31);
    view.defPosition("f14", 160, 98, 31, 31);
    view.defPosition("g14", 191, 98, 31, 31);
    view.defPosition("h14", 222, 98, 31, 31);
    view.defPosition("i14", 253, 98, 31, 31);
    view.defPosition("j14", 284, 98, 31, 31);
    view.defPosition("k14", 315, 98, 31, 31);
    view.defPosition("l14", 346, 98, 31, 31);
    view.defPosition("m14", 377, 98, 31, 31);
    view.defPosition("n14", 408, 98, 31, 31);
    view.defPosition("o14", 439, 98, 31, 31);
    view.defPosition("p14", 470, 98, 31, 31);
    view.defPosition("q14", 501, 98, 31, 31);
    view.defPosition("a13", 5, 129, 31, 31);
    view.defPosition("b13", 36, 129, 31, 31);
    view.defPosition("c13", 67, 129, 31, 31);
    view.defPosition("d13", 98, 129, 31, 31);
    view.defPosition("e13", 129, 129, 31, 31);
    view.defPosition("f13", 160, 129, 31, 31);
    view.defPosition("g13", 191, 129, 31, 31);
    view.defPosition("h13", 222, 129, 31, 31);
    view.defPosition("i13", 253, 129, 31, 31);
    view.defPosition("j13", 284, 129, 31, 31);
    view.defPosition("k13", 315, 129, 31, 31);
    view.defPosition("l13", 346, 129, 31, 31);
    view.defPosition("m13", 377, 129, 31, 31);
    view.defPosition("n13", 408, 129, 31, 31);
    view.defPosition("o13", 439, 129, 31, 31);
    view.defPosition("p13", 470, 129, 31, 31);
    view.defPosition("q13", 501, 129, 31, 31);
    view.defPosition("a12", 5, 160, 31, 31);
    view.defPosition("b12", 36, 160, 31, 31);
    view.defPosition("c12", 67, 160, 31, 31);
    view.defPosition("d12", 98, 160, 31, 31);
    view.defPosition("e12", 129, 160, 31, 31);
    view.defPosition("f12", 160, 160, 31, 31);
    view.defPosition("g12", 191, 160, 31, 31);
    view.defPosition("h12", 222, 160, 31, 31);
    view.defPosition("i12", 253, 160, 31, 31);
    view.defPosition("j12", 284, 160, 31, 31);
    view.defPosition("k12", 315, 160, 31, 31);
    view.defPosition("l12", 346, 160, 31, 31);
    view.defPosition("m12", 377, 160, 31, 31);
    view.defPosition("n12", 408, 160, 31, 31);
    view.defPosition("o12", 439, 160, 31, 31);
    view.defPosition("p12", 470, 160, 31, 31);
    view.defPosition("q12", 501, 160, 31, 31);
    view.defPosition("a11", 5, 191, 31, 31);
    view.defPosition("b11", 36, 191, 31, 31);
    view.defPosition("c11", 67, 191, 31, 31);
    view.defPosition("d11", 98, 191, 31, 31);
    view.defPosition("e11", 129, 191, 31, 31);
    view.defPosition("f11", 160, 191, 31, 31);
    view.defPosition("g11", 191, 191, 31, 31);
    view.defPosition("h11", 222, 191, 31, 31);
    view.defPosition("i11", 253, 191, 31, 31);
    view.defPosition("j11", 284, 191, 31, 31);
    view.defPosition("k11", 315, 191, 31, 31);
    view.defPosition("l11", 346, 191, 31, 31);
    view.defPosition("m11", 377, 191, 31, 31);
    view.defPosition("n11", 408, 191, 31, 31);
    view.defPosition("o11", 439, 191, 31, 31);
    view.defPosition("p11", 470, 191, 31, 31);
    view.defPosition("q11", 501, 191, 31, 31);
    view.defPosition("a10", 5, 222, 31, 31);
    view.defPosition("b10", 36, 222, 31, 31);
    view.defPosition("c10", 67, 222, 31, 31);
    view.defPosition("d10", 98, 222, 31, 31);
    view.defPosition("e10", 129, 222, 31, 31);
    view.defPosition("f10", 160, 222, 31, 31);
    view.defPosition("g10", 191, 222, 31, 31);
    view.defPosition("h10", 222, 222, 31, 31);
    view.defPosition("i10", 253, 222, 31, 31);
    view.defPosition("j10", 284, 222, 31, 31);
    view.defPosition("k10", 315, 222, 31, 31);
    view.defPosition("l10", 346, 222, 31, 31);
    view.defPosition("m10", 377, 222, 31, 31);
    view.defPosition("n10", 408, 222, 31, 31);
    view.defPosition("o10", 439, 222, 31, 31);
    view.defPosition("p10", 470, 222, 31, 31);
    view.defPosition("q10", 501, 222, 31, 31);
    view.defPosition("a9", 5, 253, 31, 31);
    view.defPosition("b9", 36, 253, 31, 31);
    view.defPosition("c9", 67, 253, 31, 31);
    view.defPosition("d9", 98, 253, 31, 31);
    view.defPosition("e9", 129, 253, 31, 31);
    view.defPosition("f9", 160, 253, 31, 31);
    view.defPosition("g9", 191, 253, 31, 31);
    view.defPosition("h9", 222, 253, 31, 31);
    view.defPosition("i9", 253, 253, 31, 31);
    view.defPosition("j9", 284, 253, 31, 31);
    view.defPosition("k9", 315, 253, 31, 31);
    view.defPosition("l9", 346, 253, 31, 31);
    view.defPosition("m9", 377, 253, 31, 31);
    view.defPosition("n9", 408, 253, 31, 31);
    view.defPosition("o9", 439, 253, 31, 31);
    view.defPosition("p9", 470, 253, 31, 31);
    view.defPosition("q9", 501, 253, 31, 31);
    view.defPosition("a8", 5, 284, 31, 31);
    view.defPosition("b8", 36, 284, 31, 31);
    view.defPosition("c8", 67, 284, 31, 31);
    view.defPosition("d8", 98, 284, 31, 31);
    view.defPosition("e8", 129, 284, 31, 31);
    view.defPosition("f8", 160, 284, 31, 31);
    view.defPosition("g8", 191, 284, 31, 31);
    view.defPosition("h8", 222, 284, 31, 31);
    view.defPosition("i8", 253, 284, 31, 31);
    view.defPosition("j8", 284, 284, 31, 31);
    view.defPosition("k8", 315, 284, 31, 31);
    view.defPosition("l8", 346, 284, 31, 31);
    view.defPosition("m8", 377, 284, 31, 31);
    view.defPosition("n8", 408, 284, 31, 31);
    view.defPosition("o8", 439, 284, 31, 31);
    view.defPosition("p8", 470, 284, 31, 31);
    view.defPosition("q8", 501, 284, 31, 31);
    view.defPosition("a7", 5, 315, 31, 31);
    view.defPosition("b7", 36, 315, 31, 31);
    view.defPosition("c7", 67, 315, 31, 31);
    view.defPosition("d7", 98, 315, 31, 31);
    view.defPosition("e7", 129, 315, 31, 31);
    view.defPosition("f7", 160, 315, 31, 31);
    view.defPosition("g7", 191, 315, 31, 31);
    view.defPosition("h7", 222, 315, 31, 31);
    view.defPosition("i7", 253, 315, 31, 31);
    view.defPosition("j7", 284, 315, 31, 31);
    view.defPosition("k7", 315, 315, 31, 31);
    view.defPosition("l7", 346, 315, 31, 31);
    view.defPosition("m7", 377, 315, 31, 31);
    view.defPosition("n7", 408, 315, 31, 31);
    view.defPosition("o7", 439, 315, 31, 31);
    view.defPosition("p7", 470, 315, 31, 31);
    view.defPosition("q7", 501, 315, 31, 31);
    view.defPosition("a6", 5, 346, 31, 31);
    view.defPosition("b6", 36, 346, 31, 31);
    view.defPosition("c6", 67, 346, 31, 31);
    view.defPosition("d6", 98, 346, 31, 31);
    view.defPosition("e6", 129, 346, 31, 31);
    view.defPosition("f6", 160, 346, 31, 31);
    view.defPosition("g6", 191, 346, 31, 31);
    view.defPosition("h6", 222, 346, 31, 31);
    view.defPosition("i6", 253, 346, 31, 31);
    view.defPosition("j6", 284, 346, 31, 31);
    view.defPosition("k6", 315, 346, 31, 31);
    view.defPosition("l6", 346, 346, 31, 31);
    view.defPosition("m6", 377, 346, 31, 31);
    view.defPosition("n6", 408, 346, 31, 31);
    view.defPosition("o6", 439, 346, 31, 31);
    view.defPosition("p6", 470, 346, 31, 31);
    view.defPosition("q6", 501, 346, 31, 31);
    view.defPosition("a5", 5, 377, 31, 31);
    view.defPosition("b5", 36, 377, 31, 31);
    view.defPosition("c5", 67, 377, 31, 31);
    view.defPosition("d5", 98, 377, 31, 31);
    view.defPosition("e5", 129, 377, 31, 31);
    view.defPosition("f5", 160, 377, 31, 31);
    view.defPosition("g5", 191, 377, 31, 31);
    view.defPosition("h5", 222, 377, 31, 31);
    view.defPosition("i5", 253, 377, 31, 31);
    view.defPosition("j5", 284, 377, 31, 31);
    view.defPosition("k5", 315, 377, 31, 31);
    view.defPosition("l5", 346, 377, 31, 31);
    view.defPosition("m5", 377, 377, 31, 31);
    view.defPosition("n5", 408, 377, 31, 31);
    view.defPosition("o5", 439, 377, 31, 31);
    view.defPosition("p5", 470, 377, 31, 31);
    view.defPosition("q5", 501, 377, 31, 31);
    view.defPosition("a4", 5, 408, 31, 31);
    view.defPosition("b4", 36, 408, 31, 31);
    view.defPosition("c4", 67, 408, 31, 31);
    view.defPosition("d4", 98, 408, 31, 31);
    view.defPosition("e4", 129, 408, 31, 31);
    view.defPosition("f4", 160, 408, 31, 31);
    view.defPosition("g4", 191, 408, 31, 31);
    view.defPosition("h4", 222, 408, 31, 31);
    view.defPosition("i4", 253, 408, 31, 31);
    view.defPosition("j4", 284, 408, 31, 31);
    view.defPosition("k4", 315, 408, 31, 31);
    view.defPosition("l4", 346, 408, 31, 31);
    view.defPosition("m4", 377, 408, 31, 31);
    view.defPosition("n4", 408, 408, 31, 31);
    view.defPosition("o4", 439, 408, 31, 31);
    view.defPosition("p4", 470, 408, 31, 31);
    view.defPosition("q4", 501, 408, 31, 31);
    view.defPosition("a3", 5, 439, 31, 31);
    view.defPosition("b3", 36, 439, 31, 31);
    view.defPosition("c3", 67, 439, 31, 31);
    view.defPosition("d3", 98, 439, 31, 31);
    view.defPosition("e3", 129, 439, 31, 31);
    view.defPosition("f3", 160, 439, 31, 31);
    view.defPosition("g3", 191, 439, 31, 31);
    view.defPosition("h3", 222, 439, 31, 31);
    view.defPosition("i3", 253, 439, 31, 31);
    view.defPosition("j3", 284, 439, 31, 31);
    view.defPosition("k3", 315, 439, 31, 31);
    view.defPosition("l3", 346, 439, 31, 31);
    view.defPosition("m3", 377, 439, 31, 31);
    view.defPosition("n3", 408, 439, 31, 31);
    view.defPosition("o3", 439, 439, 31, 31);
    view.defPosition("p3", 470, 439, 31, 31);
    view.defPosition("q3", 501, 439, 31, 31);
    view.defPosition("a2", 5, 470, 31, 31);
    view.defPosition("b2", 36, 470, 31, 31);
    view.defPosition("c2", 67, 470, 31, 31);
    view.defPosition("d2", 98, 470, 31, 31);
    view.defPosition("e2", 129, 470, 31, 31);
    view.defPosition("f2", 160, 470, 31, 31);
    view.defPosition("g2", 191, 470, 31, 31);
    view.defPosition("h2", 222, 470, 31, 31);
    view.defPosition("i2", 253, 470, 31, 31);
    view.defPosition("j2", 284, 470, 31, 31);
    view.defPosition("k2", 315, 470, 31, 31);
    view.defPosition("l2", 346, 470, 31, 31);
    view.defPosition("m2", 377, 470, 31, 31);
    view.defPosition("n2", 408, 470, 31, 31);
    view.defPosition("o2", 439, 470, 31, 31);
    view.defPosition("p2", 470, 470, 31, 31);
    view.defPosition("q2", 501, 470, 31, 31);
    view.defPosition("a1", 5, 501, 31, 31);
    view.defPosition("b1", 36, 501, 31, 31);
    view.defPosition("c1", 67, 501, 31, 31);
    view.defPosition("d1", 98, 501, 31, 31);
    view.defPosition("e1", 129, 501, 31, 31);
    view.defPosition("f1", 160, 501, 31, 31);
    view.defPosition("g1", 191, 501, 31, 31);
    view.defPosition("h1", 222, 501, 31, 31);
    view.defPosition("i1", 253, 501, 31, 31);
    view.defPosition("j1", 284, 501, 31, 31);
    view.defPosition("k1", 315, 501, 31, 31);
    view.defPosition("l1", 346, 501, 31, 31);
    view.defPosition("m1", 377, 501, 31, 31);
    view.defPosition("n1", 408, 501, 31, 31);
    view.defPosition("o1", 439, 501, 31, 31);
    view.defPosition("p1", 470, 501, 31, 31);
    view.defPosition("q1", 501, 501, 31, 31);
}
