Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;
Dagaz.Model.showLose = true;

Dagaz.Model.WIDTH  = 16;
Dagaz.Model.HEIGHT = 16;

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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Pink", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Orange", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Yellow", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Cyan", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Navy", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Violet", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Ash", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Slate", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addTurn(1);   // 0
    design.addTurn(2);   // 1
    design.repeatMark(); 
    design.addTurn(1);   // 2
    design.addTurn(2);   // 3

    design.addPosition("a16", [17, 16, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("c16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("d16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("e16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("f16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("g16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("h16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("i16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("j16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("k16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("l16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("m16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("n16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("o16", [17, 16, 15, 1, -1, 0, 0, 0]);
    design.addPosition("p16", [0, 16, 15, 0, -1, 0, 0, 0]);
    design.addPosition("a15", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o15", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p15", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a14", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o14", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p14", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a13", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o13", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p13", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a12", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c12", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("n12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o12", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p12", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a11", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b11", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("o11", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p11", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a10", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b10", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("o10", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p10", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a9", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b9", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("o9", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p9", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a8", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b8", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("o8", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p8", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a7", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b7", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("o7", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p7", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a6", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b6", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("o6", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p6", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a5", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c5", [17, 16, 15, 1, -1, -15, -17, -16]);
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
    design.addPosition("n5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o5", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p5", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a4", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o4", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p4", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a3", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o3", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p3", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a2", [17, 16, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("c2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("d2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("e2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("f2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("g2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("h2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("i2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("j2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("k2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("l2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("m2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("n2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("o2", [17, 16, 15, 1, -1, -15, -17, -16]);
    design.addPosition("p2", [0, 16, 15, 0, -1, 0, -17, -16]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -15, 0, -16]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("l1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("m1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("n1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("o1", [0, 0, 0, 1, -1, -15, -17, -16]);
    design.addPosition("p1", [0, 0, 0, 0, -1, 0, -17, -16]);
    design.addPosition("z16", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z15", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z14", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z13", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z12", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion-zone", 1, [150, 151, 152, 153, 134, 135, 136, 137, 118, 119, 120, 121, 102, 103, 104, 105]);
    design.addZone("promotion-zone", 2, [150, 151, 152, 153, 134, 135, 136, 137, 118, 119, 120, 121, 102, 103, 104, 105]);
    design.addZone("white-zone", 1, [119, 136]);
    design.addZone("white-zone", 2, [119, 136]);
    design.addZone("black-zone", 1, [135, 120]);
    design.addZone("black-zone", 2, [135, 120]);
    design.addZone("pink-zone", 1, [87, 168]);
    design.addZone("pink-zone", 2, [87, 168]);
    design.addZone("red-zone", 1, [68, 187]);
    design.addZone("red-zone", 2, [68, 187]);
    design.addZone("orange-zone", 1, [117, 138]);
    design.addZone("orange-zone", 2, [117, 138]);
    design.addZone("yellow-zone", 1, [85, 170]);
    design.addZone("yellow-zone", 2, [85, 170]);
    design.addZone("green-zone", 1, [165, 90]);
    design.addZone("green-zone", 2, [165, 90]);
    design.addZone("cyan-zone", 1, [133, 122]);
    design.addZone("cyan-zone", 2, [133, 122]);
    design.addZone("navy-zone", 1, [180, 75]);
    design.addZone("navy-zone", 2, [180, 75]);
    design.addZone("violet-zone", 1, [167, 88]);
    design.addZone("violet-zone", 2, [167, 88]);
    design.addZone("ash-zone", 1, [150, 105]);
    design.addZone("ash-zone", 2, [150, 105]);
    design.addZone("slate-zone", 1, [102, 153]);
    design.addZone("slate-zone", 2, [102, 153]);
    design.addZone("v-zone", 1, [247, 248, 231, 232, 215, 216, 199, 200, 183, 184, 167, 168, 87, 88, 71, 72, 55, 56, 39, 40, 23, 24, 7, 8]);
    design.addZone("v-zone", 2, [247, 248, 231, 232, 215, 216, 199, 200, 183, 184, 167, 168, 87, 88, 71, 72, 55, 56, 39, 40, 23, 24, 7, 8]);
    design.addZone("h-zone", 1, [128, 112, 129, 113, 130, 114, 131, 115, 132, 116, 133, 117, 138, 122, 139, 123, 140, 124, 141, 125, 142, 126, 143, 127]);
    design.addZone("h-zone", 2, [128, 112, 129, 113, 130, 114, 131, 115, 132, 116, 133, 117, 138, 122, 139, 123, 140, 124, 141, 125, 142, 126, 143, 127]);
    design.addZone("sw-zone", 1, [240, 241, 242, 243, 244, 245, 246, 247, 224, 225, 226, 227, 228, 229, 230, 231, 208, 209, 210, 211, 212, 213, 214, 215, 192, 193, 194, 195, 196, 197, 198, 199, 176, 177, 178, 179, 180, 181, 182, 183, 160, 161, 162, 163, 164, 165, 166, 167, 144, 145, 146, 147, 148, 149, 150, 151, 128, 129, 130, 131, 132, 133, 134, 135]);
    design.addZone("sw-zone", 2, [240, 241, 242, 243, 244, 245, 246, 247, 224, 225, 226, 227, 228, 229, 230, 231, 208, 209, 210, 211, 212, 213, 214, 215, 192, 193, 194, 195, 196, 197, 198, 199, 176, 177, 178, 179, 180, 181, 182, 183, 160, 161, 162, 163, 164, 165, 166, 167, 144, 145, 146, 147, 148, 149, 150, 151, 128, 129, 130, 131, 132, 133, 134, 135]);
    design.addZone("nw-zone", 1, [112, 113, 114, 115, 116, 117, 118, 119, 96, 97, 98, 99, 100, 101, 102, 103, 80, 81, 82, 83, 84, 85, 86, 87, 64, 65, 66, 67, 68, 69, 70, 71, 48, 49, 50, 51, 52, 53, 54, 55, 32, 33, 34, 35, 36, 37, 38, 39, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("nw-zone", 2, [112, 113, 114, 115, 116, 117, 118, 119, 96, 97, 98, 99, 100, 101, 102, 103, 80, 81, 82, 83, 84, 85, 86, 87, 64, 65, 66, 67, 68, 69, 70, 71, 48, 49, 50, 51, 52, 53, 54, 55, 32, 33, 34, 35, 36, 37, 38, 39, 16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("ne-zone", 1, [120, 121, 122, 123, 124, 125, 126, 127, 104, 105, 106, 107, 108, 109, 110, 111, 88, 89, 90, 91, 92, 93, 94, 95, 72, 73, 74, 75, 76, 77, 78, 79, 56, 57, 58, 59, 60, 61, 62, 63, 40, 41, 42, 43, 44, 45, 46, 47, 24, 25, 26, 27, 28, 29, 30, 31, 8, 9, 10, 11, 12, 13, 14, 15]);
    design.addZone("ne-zone", 2, [120, 121, 122, 123, 124, 125, 126, 127, 104, 105, 106, 107, 108, 109, 110, 111, 88, 89, 90, 91, 92, 93, 94, 95, 72, 73, 74, 75, 76, 77, 78, 79, 56, 57, 58, 59, 60, 61, 62, 63, 40, 41, 42, 43, 44, 45, 46, 47, 24, 25, 26, 27, 28, 29, 30, 31, 8, 9, 10, 11, 12, 13, 14, 15]);
    design.addZone("se-zone", 1, [248, 249, 250, 251, 252, 253, 254, 255, 232, 233, 234, 235, 236, 237, 238, 239, 216, 217, 218, 219, 220, 221, 222, 223, 200, 201, 202, 203, 204, 205, 206, 207, 184, 185, 186, 187, 188, 189, 190, 191, 168, 169, 170, 171, 172, 173, 174, 175, 152, 153, 154, 155, 156, 157, 158, 159, 136, 137, 138, 139, 140, 141, 142, 143]);
    design.addZone("se-zone", 2, [248, 249, 250, 251, 252, 253, 254, 255, 232, 233, 234, 235, 236, 237, 238, 239, 216, 217, 218, 219, 220, 221, 222, 223, 200, 201, 202, 203, 204, 205, 206, 207, 184, 185, 186, 187, 188, 189, 190, 191, 168, 169, 170, 171, 172, 173, 174, 175, 152, 153, 154, 155, 156, 157, 158, 159, 136, 137, 138, 139, 140, 141, 142, 143]);
    design.addZone("n-zone", 1, [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    design.addZone("n-zone", 2, [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    design.addZone("e-zone", 1, [254, 238, 222, 206, 190, 174, 158, 142, 126, 110, 94, 78, 62, 46, 30, 14, 255, 239, 223, 207, 191, 175, 159, 143, 127, 111, 95, 79, 63, 47, 31, 15]);
    design.addZone("e-zone", 2, [254, 238, 222, 206, 190, 174, 158, 142, 126, 110, 94, 78, 62, 46, 30, 14, 255, 239, 223, 207, 191, 175, 159, 143, 127, 111, 95, 79, 63, 47, 31, 15]);
    design.addZone("w-zone", 1, [240, 224, 208, 192, 176, 160, 144, 128, 112, 96, 80, 64, 48, 32, 16, 0, 241, 225, 209, 193, 177, 161, 145, 129, 113, 97, 81, 65, 49, 33, 17, 1]);
    design.addZone("w-zone", 2, [240, 224, 208, 192, 176, 160, 144, 128, 112, 96, 80, 64, 48, 32, 16, 0, 241, 225, 209, 193, 177, 161, 145, 129, 113, 97, 81, 65, 49, 33, 17, 1]);
    design.addZone("s-zone", 1, [240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239]);
    design.addZone("s-zone", 2, [240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	22);	// s-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	21);	// w-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	19);	// n-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	20);	// e-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	5);	// $6
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	6);	// $7
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	7);	// $8
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 2, [1, 1], 0);
    design.addMove(0, 3, [4, 4], 0);
    design.addMove(0, 4, [7], 0);
    design.addMove(0, 4, [3], 0);
    design.addMove(0, 4, [1], 0);
    design.addMove(0, 4, [4], 0);
    design.addMove(0, 5, [6], 0);
    design.addMove(0, 5, [5], 0);
    design.addMove(0, 5, [2], 0);
    design.addMove(0, 5, [0], 0);

    design.addPiece("Rook", 1);
    design.addMove(1, 6, [7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(1, 6, [3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(1, 6, [4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(1, 6, [1, 1, 1, 1, 1, 1, 1, 1], 0);

    design.addPiece("Knight", 2);
    design.addMove(2, 7, [7, 6], 0);
    design.addMove(2, 7, [7, 5], 0);
    design.addMove(2, 7, [1, 2], 0);
    design.addMove(2, 7, [1, 0], 0);
    design.addMove(2, 7, [4, 6], 0);
    design.addMove(2, 7, [4, 2], 0);
    design.addMove(2, 7, [3, 5], 0);
    design.addMove(2, 7, [3, 0], 0);

    design.addPiece("Bishop", 3);
    design.addMove(3, 6, [6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(3, 6, [5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(3, 6, [2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(3, 6, [0, 0, 0, 0, 0, 0, 0, 0], 0);

    design.addPiece("Queen", 4);
    design.addMove(4, 6, [7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(4, 6, [3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(4, 6, [4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(4, 6, [1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(4, 6, [6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(4, 6, [5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(4, 6, [2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(4, 6, [0, 0, 0, 0, 0, 0, 0, 0], 0);

    design.addPiece("King", 5);
    design.addMove(5, 8, [7], 0);
    design.addMove(5, 8, [3], 0);
    design.addMove(5, 8, [4], 0);
    design.addMove(5, 8, [1], 0);
    design.addMove(5, 8, [6], 0);
    design.addMove(5, 8, [5], 0);
    design.addMove(5, 8, [2], 0);
    design.addMove(5, 8, [0], 0);

    design.setup("White", "Pawn", 228);
    design.setup("White", "Pawn", 229);
    design.setup("White", "Pawn", 230);
    design.setup("White", "Pawn", 231);
    design.setup("White", "Pawn", 232);
    design.setup("White", "Pawn", 233);
    design.setup("White", "Pawn", 234);
    design.setup("White", "Pawn", 235);
    design.setup("White", "Rook", 244);
    design.setup("White", "Rook", 251);
    design.setup("White", "Knight", 245);
    design.setup("White", "Knight", 250);
    design.setup("White", "Bishop", 246);
    design.setup("White", "Bishop", 249);
    design.setup("White", "Queen", 247);
    design.setup("White", "King", 248);
    design.setup("White", "King", 256);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Pawn", 22);
    design.setup("Black", "Pawn", 23);
    design.setup("Black", "Pawn", 24);
    design.setup("Black", "Pawn", 25);
    design.setup("Black", "Pawn", 26);
    design.setup("Black", "Pawn", 27);
    design.setup("Black", "Rook", 4);
    design.setup("Black", "Rook", 11);
    design.setup("Black", "Knight", 5);
    design.setup("Black", "Knight", 10);
    design.setup("Black", "Bishop", 6);
    design.setup("Black", "Bishop", 9);
    design.setup("Black", "Queen", 7);
    design.setup("Black", "King", 8);
    design.setup("Black", "King", 267);
    design.setup("Pink", "Pawn", 226);
    design.setup("Pink", "Pawn", 227);
    design.setup("Pink", "Pawn", 126);
    design.setup("Pink", "Pawn", 110);
    design.setup("Pink", "Rook", 242);
    design.setup("Pink", "Knight", 243);
    design.setup("Pink", "Bishop", 111);
    design.setup("Pink", "Queen", 127);
    design.setup("Pink", "King", 257);
    design.setup("Green", "Pawn", 236);
    design.setup("Green", "Pawn", 237);
    design.setup("Green", "Pawn", 113);
    design.setup("Green", "Pawn", 97);
    design.setup("Green", "Rook", 253);
    design.setup("Green", "Knight", 252);
    design.setup("Green", "Bishop", 96);
    design.setup("Green", "Queen", 112);
    design.setup("Green", "King", 258);
    design.setup("Slate", "Rook", 224);
    design.setup("Slate", "Rook", 31);
    design.setup("Slate", "Knight", 225);
    design.setup("Slate", "Knight", 30);
    design.setup("Slate", "Bishop", 241);
    design.setup("Slate", "Bishop", 14);
    design.setup("Slate", "Queen", 240);
    design.setup("Slate", "Queen", 15);
    design.setup("Slate", "King", 259);
    design.setup("Ash", "Rook", 16);
    design.setup("Ash", "Rook", 239);
    design.setup("Ash", "Knight", 17);
    design.setup("Ash", "Knight", 238);
    design.setup("Ash", "Bishop", 1);
    design.setup("Ash", "Bishop", 254);
    design.setup("Ash", "Queen", 0);
    design.setup("Ash", "Queen", 255);
    design.setup("Ash", "King", 260);
    design.setup("Red", "Pawn", 209);
    design.setup("Red", "Pawn", 193);
    design.setup("Red", "Pawn", 94);
    design.setup("Red", "Pawn", 78);
    design.setup("Red", "Rook", 79);
    design.setup("Red", "Knight", 95);
    design.setup("Red", "Bishop", 208);
    design.setup("Red", "Queen", 192);
    design.setup("Red", "King", 261);
    design.setup("Orange", "Pawn", 177);
    design.setup("Orange", "Pawn", 161);
    design.setup("Orange", "Pawn", 62);
    design.setup("Orange", "Pawn", 46);
    design.setup("Orange", "Rook", 176);
    design.setup("Orange", "Knight", 160);
    design.setup("Orange", "Bishop", 47);
    design.setup("Orange", "Queen", 63);
    design.setup("Orange", "King", 262);
    design.setup("Yellow", "Pawn", 145);
    design.setup("Yellow", "Pawn", 129);
    design.setup("Yellow", "Pawn", 28);
    design.setup("Yellow", "Pawn", 29);
    design.setup("Yellow", "Rook", 13);
    design.setup("Yellow", "Knight", 12);
    design.setup("Yellow", "Bishop", 144);
    design.setup("Yellow", "Queen", 128);
    design.setup("Yellow", "King", 263);
    design.setup("Cyan", "Pawn", 81);
    design.setup("Cyan", "Pawn", 65);
    design.setup("Cyan", "Pawn", 222);
    design.setup("Cyan", "Pawn", 206);
    design.setup("Cyan", "Rook", 64);
    design.setup("Cyan", "Knight", 80);
    design.setup("Cyan", "Bishop", 223);
    design.setup("Cyan", "Queen", 207);
    design.setup("Cyan", "King", 264);
    design.setup("Navy", "Pawn", 49);
    design.setup("Navy", "Pawn", 33);
    design.setup("Navy", "Pawn", 190);
    design.setup("Navy", "Pawn", 174);
    design.setup("Navy", "Rook", 191);
    design.setup("Navy", "Knight", 175);
    design.setup("Navy", "Bishop", 32);
    design.setup("Navy", "Queen", 48);
    design.setup("Navy", "King", 265);
    design.setup("Violet", "Pawn", 18);
    design.setup("Violet", "Pawn", 19);
    design.setup("Violet", "Pawn", 158);
    design.setup("Violet", "Pawn", 142);
    design.setup("Violet", "Rook", 2);
    design.setup("Violet", "Knight", 3);
    design.setup("Violet", "Bishop", 159);
    design.setup("Violet", "Queen", 143);
    design.setup("Violet", "King", 266);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("PinkPawn", "Pink Pawn");
    view.defPiece("RedPawn", "Red Pawn");
    view.defPiece("OrangePawn", "Orange Pawn");
    view.defPiece("YellowPawn", "Yellow Pawn");
    view.defPiece("GreenPawn", "Green Pawn");
    view.defPiece("CyanPawn", "Cyan Pawn");
    view.defPiece("NavyPawn", "Navy Pawn");
    view.defPiece("VioletPawn", "Violet Pawn");
    view.defPiece("AshPawn", "Ash Pawn");
    view.defPiece("SlatePawn", "Slate Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("PinkRook", "Pink Rook");
    view.defPiece("RedRook", "Red Rook");
    view.defPiece("OrangeRook", "Orange Rook");
    view.defPiece("YellowRook", "Yellow Rook");
    view.defPiece("GreenRook", "Green Rook");
    view.defPiece("CyanRook", "Cyan Rook");
    view.defPiece("NavyRook", "Navy Rook");
    view.defPiece("VioletRook", "Violet Rook");
    view.defPiece("AshRook", "Ash Rook");
    view.defPiece("SlateRook", "Slate Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("PinkKnight", "Pink Knight");
    view.defPiece("RedKnight", "Red Knight");
    view.defPiece("OrangeKnight", "Orange Knight");
    view.defPiece("YellowKnight", "Yellow Knight");
    view.defPiece("GreenKnight", "Green Knight");
    view.defPiece("CyanKnight", "Cyan Knight");
    view.defPiece("NavyKnight", "Navy Knight");
    view.defPiece("VioletKnight", "Violet Knight");
    view.defPiece("AshKnight", "Ash Knight");
    view.defPiece("SlateKnight", "Slate Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("PinkBishop", "Pink Bishop");
    view.defPiece("RedBishop", "Red Bishop");
    view.defPiece("OrangeBishop", "Orange Bishop");
    view.defPiece("YellowBishop", "Yellow Bishop");
    view.defPiece("GreenBishop", "Green Bishop");
    view.defPiece("CyanBishop", "Cyan Bishop");
    view.defPiece("NavyBishop", "Navy Bishop");
    view.defPiece("VioletBishop", "Violet Bishop");
    view.defPiece("AshBishop", "Ash Bishop");
    view.defPiece("SlateBishop", "Slate Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("PinkQueen", "Pink Queen");
    view.defPiece("RedQueen", "Red Queen");
    view.defPiece("OrangeQueen", "Orange Queen");
    view.defPiece("YellowQueen", "Yellow Queen");
    view.defPiece("GreenQueen", "Green Queen");
    view.defPiece("CyanQueen", "Cyan Queen");
    view.defPiece("NavyQueen", "Navy Queen");
    view.defPiece("VioletQueen", "Violet Queen");
    view.defPiece("AshQueen", "Ash Queen");
    view.defPiece("SlateQueen", "Slate Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("PinkKing", "Pink King");
    view.defPiece("RedKing", "Red King");
    view.defPiece("OrangeKing", "Orange King");
    view.defPiece("YellowKing", "Yellow King");
    view.defPiece("GreenKing", "Green King");
    view.defPiece("CyanKing", "Cyan King");
    view.defPiece("NavyKing", "Navy King");
    view.defPiece("VioletKing", "Violet King");
    view.defPiece("AshKing", "Ash King");
    view.defPiece("SlateKing", "Slate King");
 
    view.defPosition("a16", 46, 6, 46, 46);
    view.defPosition("b16", 92, 6, 46, 46);
    view.defPosition("c16", 138, 6, 46, 46);
    view.defPosition("d16", 184, 6, 46, 46);
    view.defPosition("e16", 230, 6, 46, 46);
    view.defPosition("f16", 276, 6, 46, 46);
    view.defPosition("g16", 322, 6, 46, 46);
    view.defPosition("h16", 368, 6, 46, 46);
    view.defPosition("i16", 414, 6, 46, 46);
    view.defPosition("j16", 460, 6, 46, 46);
    view.defPosition("k16", 506, 6, 46, 46);
    view.defPosition("l16", 552, 6, 46, 46);
    view.defPosition("m16", 598, 6, 46, 46);
    view.defPosition("n16", 644, 6, 46, 46);
    view.defPosition("o16", 690, 6, 46, 46);
    view.defPosition("p16", 736, 6, 46, 46);
    view.defPosition("a15", 46, 52, 46, 46);
    view.defPosition("b15", 92, 52, 46, 46);
    view.defPosition("c15", 138, 52, 46, 46);
    view.defPosition("d15", 184, 52, 46, 46);
    view.defPosition("e15", 230, 52, 46, 46);
    view.defPosition("f15", 276, 52, 46, 46);
    view.defPosition("g15", 322, 52, 46, 46);
    view.defPosition("h15", 368, 52, 46, 46);
    view.defPosition("i15", 414, 52, 46, 46);
    view.defPosition("j15", 460, 52, 46, 46);
    view.defPosition("k15", 506, 52, 46, 46);
    view.defPosition("l15", 552, 52, 46, 46);
    view.defPosition("m15", 598, 52, 46, 46);
    view.defPosition("n15", 644, 52, 46, 46);
    view.defPosition("o15", 690, 52, 46, 46);
    view.defPosition("p15", 736, 52, 46, 46);
    view.defPosition("a14", 46, 98, 46, 46);
    view.defPosition("b14", 92, 98, 46, 46);
    view.defPosition("c14", 138, 98, 46, 46);
    view.defPosition("d14", 184, 98, 46, 46);
    view.defPosition("e14", 230, 98, 46, 46);
    view.defPosition("f14", 276, 98, 46, 46);
    view.defPosition("g14", 322, 98, 46, 46);
    view.defPosition("h14", 368, 98, 46, 46);
    view.defPosition("i14", 414, 98, 46, 46);
    view.defPosition("j14", 460, 98, 46, 46);
    view.defPosition("k14", 506, 98, 46, 46);
    view.defPosition("l14", 552, 98, 46, 46);
    view.defPosition("m14", 598, 98, 46, 46);
    view.defPosition("n14", 644, 98, 46, 46);
    view.defPosition("o14", 690, 98, 46, 46);
    view.defPosition("p14", 736, 98, 46, 46);
    view.defPosition("a13", 46, 144, 46, 46);
    view.defPosition("b13", 92, 144, 46, 46);
    view.defPosition("c13", 138, 144, 46, 46);
    view.defPosition("d13", 184, 144, 46, 46);
    view.defPosition("e13", 230, 144, 46, 46);
    view.defPosition("f13", 276, 144, 46, 46);
    view.defPosition("g13", 322, 144, 46, 46);
    view.defPosition("h13", 368, 144, 46, 46);
    view.defPosition("i13", 414, 144, 46, 46);
    view.defPosition("j13", 460, 144, 46, 46);
    view.defPosition("k13", 506, 144, 46, 46);
    view.defPosition("l13", 552, 144, 46, 46);
    view.defPosition("m13", 598, 144, 46, 46);
    view.defPosition("n13", 644, 144, 46, 46);
    view.defPosition("o13", 690, 144, 46, 46);
    view.defPosition("p13", 736, 144, 46, 46);
    view.defPosition("a12", 46, 190, 46, 46);
    view.defPosition("b12", 92, 190, 46, 46);
    view.defPosition("c12", 138, 190, 46, 46);
    view.defPosition("d12", 184, 190, 46, 46);
    view.defPosition("e12", 230, 190, 46, 46);
    view.defPosition("f12", 276, 190, 46, 46);
    view.defPosition("g12", 322, 190, 46, 46);
    view.defPosition("h12", 368, 190, 46, 46);
    view.defPosition("i12", 414, 190, 46, 46);
    view.defPosition("j12", 460, 190, 46, 46);
    view.defPosition("k12", 506, 190, 46, 46);
    view.defPosition("l12", 552, 190, 46, 46);
    view.defPosition("m12", 598, 190, 46, 46);
    view.defPosition("n12", 644, 190, 46, 46);
    view.defPosition("o12", 690, 190, 46, 46);
    view.defPosition("p12", 736, 190, 46, 46);
    view.defPosition("a11", 46, 236, 46, 46);
    view.defPosition("b11", 92, 236, 46, 46);
    view.defPosition("c11", 138, 236, 46, 46);
    view.defPosition("d11", 184, 236, 46, 46);
    view.defPosition("e11", 230, 236, 46, 46);
    view.defPosition("f11", 276, 236, 46, 46);
    view.defPosition("g11", 322, 236, 46, 46);
    view.defPosition("h11", 368, 236, 46, 46);
    view.defPosition("i11", 414, 236, 46, 46);
    view.defPosition("j11", 460, 236, 46, 46);
    view.defPosition("k11", 506, 236, 46, 46);
    view.defPosition("l11", 552, 236, 46, 46);
    view.defPosition("m11", 598, 236, 46, 46);
    view.defPosition("n11", 644, 236, 46, 46);
    view.defPosition("o11", 690, 236, 46, 46);
    view.defPosition("p11", 736, 236, 46, 46);
    view.defPosition("a10", 46, 282, 46, 46);
    view.defPosition("b10", 92, 282, 46, 46);
    view.defPosition("c10", 138, 282, 46, 46);
    view.defPosition("d10", 184, 282, 46, 46);
    view.defPosition("e10", 230, 282, 46, 46);
    view.defPosition("f10", 276, 282, 46, 46);
    view.defPosition("g10", 322, 282, 46, 46);
    view.defPosition("h10", 368, 282, 46, 46);
    view.defPosition("i10", 414, 282, 46, 46);
    view.defPosition("j10", 460, 282, 46, 46);
    view.defPosition("k10", 506, 282, 46, 46);
    view.defPosition("l10", 552, 282, 46, 46);
    view.defPosition("m10", 598, 282, 46, 46);
    view.defPosition("n10", 644, 282, 46, 46);
    view.defPosition("o10", 690, 282, 46, 46);
    view.defPosition("p10", 736, 282, 46, 46);
    view.defPosition("a9", 46, 328, 46, 46);
    view.defPosition("b9", 92, 328, 46, 46);
    view.defPosition("c9", 138, 328, 46, 46);
    view.defPosition("d9", 184, 328, 46, 46);
    view.defPosition("e9", 230, 328, 46, 46);
    view.defPosition("f9", 276, 328, 46, 46);
    view.defPosition("g9", 322, 328, 46, 46);
    view.defPosition("h9", 368, 328, 46, 46);
    view.defPosition("i9", 414, 328, 46, 46);
    view.defPosition("j9", 460, 328, 46, 46);
    view.defPosition("k9", 506, 328, 46, 46);
    view.defPosition("l9", 552, 328, 46, 46);
    view.defPosition("m9", 598, 328, 46, 46);
    view.defPosition("n9", 644, 328, 46, 46);
    view.defPosition("o9", 690, 328, 46, 46);
    view.defPosition("p9", 736, 328, 46, 46);
    view.defPosition("a8", 46, 374, 46, 46);
    view.defPosition("b8", 92, 374, 46, 46);
    view.defPosition("c8", 138, 374, 46, 46);
    view.defPosition("d8", 184, 374, 46, 46);
    view.defPosition("e8", 230, 374, 46, 46);
    view.defPosition("f8", 276, 374, 46, 46);
    view.defPosition("g8", 322, 374, 46, 46);
    view.defPosition("h8", 368, 374, 46, 46);
    view.defPosition("i8", 414, 374, 46, 46);
    view.defPosition("j8", 460, 374, 46, 46);
    view.defPosition("k8", 506, 374, 46, 46);
    view.defPosition("l8", 552, 374, 46, 46);
    view.defPosition("m8", 598, 374, 46, 46);
    view.defPosition("n8", 644, 374, 46, 46);
    view.defPosition("o8", 690, 374, 46, 46);
    view.defPosition("p8", 736, 374, 46, 46);
    view.defPosition("a7", 46, 420, 46, 46);
    view.defPosition("b7", 92, 420, 46, 46);
    view.defPosition("c7", 138, 420, 46, 46);
    view.defPosition("d7", 184, 420, 46, 46);
    view.defPosition("e7", 230, 420, 46, 46);
    view.defPosition("f7", 276, 420, 46, 46);
    view.defPosition("g7", 322, 420, 46, 46);
    view.defPosition("h7", 368, 420, 46, 46);
    view.defPosition("i7", 414, 420, 46, 46);
    view.defPosition("j7", 460, 420, 46, 46);
    view.defPosition("k7", 506, 420, 46, 46);
    view.defPosition("l7", 552, 420, 46, 46);
    view.defPosition("m7", 598, 420, 46, 46);
    view.defPosition("n7", 644, 420, 46, 46);
    view.defPosition("o7", 690, 420, 46, 46);
    view.defPosition("p7", 736, 420, 46, 46);
    view.defPosition("a6", 46, 466, 46, 46);
    view.defPosition("b6", 92, 466, 46, 46);
    view.defPosition("c6", 138, 466, 46, 46);
    view.defPosition("d6", 184, 466, 46, 46);
    view.defPosition("e6", 230, 466, 46, 46);
    view.defPosition("f6", 276, 466, 46, 46);
    view.defPosition("g6", 322, 466, 46, 46);
    view.defPosition("h6", 368, 466, 46, 46);
    view.defPosition("i6", 414, 466, 46, 46);
    view.defPosition("j6", 460, 466, 46, 46);
    view.defPosition("k6", 506, 466, 46, 46);
    view.defPosition("l6", 552, 466, 46, 46);
    view.defPosition("m6", 598, 466, 46, 46);
    view.defPosition("n6", 644, 466, 46, 46);
    view.defPosition("o6", 690, 466, 46, 46);
    view.defPosition("p6", 736, 466, 46, 46);
    view.defPosition("a5", 46, 512, 46, 46);
    view.defPosition("b5", 92, 512, 46, 46);
    view.defPosition("c5", 138, 512, 46, 46);
    view.defPosition("d5", 184, 512, 46, 46);
    view.defPosition("e5", 230, 512, 46, 46);
    view.defPosition("f5", 276, 512, 46, 46);
    view.defPosition("g5", 322, 512, 46, 46);
    view.defPosition("h5", 368, 512, 46, 46);
    view.defPosition("i5", 414, 512, 46, 46);
    view.defPosition("j5", 460, 512, 46, 46);
    view.defPosition("k5", 506, 512, 46, 46);
    view.defPosition("l5", 552, 512, 46, 46);
    view.defPosition("m5", 598, 512, 46, 46);
    view.defPosition("n5", 644, 512, 46, 46);
    view.defPosition("o5", 690, 512, 46, 46);
    view.defPosition("p5", 736, 512, 46, 46);
    view.defPosition("a4", 46, 558, 46, 46);
    view.defPosition("b4", 92, 558, 46, 46);
    view.defPosition("c4", 138, 558, 46, 46);
    view.defPosition("d4", 184, 558, 46, 46);
    view.defPosition("e4", 230, 558, 46, 46);
    view.defPosition("f4", 276, 558, 46, 46);
    view.defPosition("g4", 322, 558, 46, 46);
    view.defPosition("h4", 368, 558, 46, 46);
    view.defPosition("i4", 414, 558, 46, 46);
    view.defPosition("j4", 460, 558, 46, 46);
    view.defPosition("k4", 506, 558, 46, 46);
    view.defPosition("l4", 552, 558, 46, 46);
    view.defPosition("m4", 598, 558, 46, 46);
    view.defPosition("n4", 644, 558, 46, 46);
    view.defPosition("o4", 690, 558, 46, 46);
    view.defPosition("p4", 736, 558, 46, 46);
    view.defPosition("a3", 46, 604, 46, 46);
    view.defPosition("b3", 92, 604, 46, 46);
    view.defPosition("c3", 138, 604, 46, 46);
    view.defPosition("d3", 184, 604, 46, 46);
    view.defPosition("e3", 230, 604, 46, 46);
    view.defPosition("f3", 276, 604, 46, 46);
    view.defPosition("g3", 322, 604, 46, 46);
    view.defPosition("h3", 368, 604, 46, 46);
    view.defPosition("i3", 414, 604, 46, 46);
    view.defPosition("j3", 460, 604, 46, 46);
    view.defPosition("k3", 506, 604, 46, 46);
    view.defPosition("l3", 552, 604, 46, 46);
    view.defPosition("m3", 598, 604, 46, 46);
    view.defPosition("n3", 644, 604, 46, 46);
    view.defPosition("o3", 690, 604, 46, 46);
    view.defPosition("p3", 736, 604, 46, 46);
    view.defPosition("a2", 46, 650, 46, 46);
    view.defPosition("b2", 92, 650, 46, 46);
    view.defPosition("c2", 138, 650, 46, 46);
    view.defPosition("d2", 184, 650, 46, 46);
    view.defPosition("e2", 230, 650, 46, 46);
    view.defPosition("f2", 276, 650, 46, 46);
    view.defPosition("g2", 322, 650, 46, 46);
    view.defPosition("h2", 368, 650, 46, 46);
    view.defPosition("i2", 414, 650, 46, 46);
    view.defPosition("j2", 460, 650, 46, 46);
    view.defPosition("k2", 506, 650, 46, 46);
    view.defPosition("l2", 552, 650, 46, 46);
    view.defPosition("m2", 598, 650, 46, 46);
    view.defPosition("n2", 644, 650, 46, 46);
    view.defPosition("o2", 690, 650, 46, 46);
    view.defPosition("p2", 736, 650, 46, 46);
    view.defPosition("a1", 46, 696, 46, 46);
    view.defPosition("b1", 92, 696, 46, 46);
    view.defPosition("c1", 138, 696, 46, 46);
    view.defPosition("d1", 184, 696, 46, 46);
    view.defPosition("e1", 230, 696, 46, 46);
    view.defPosition("f1", 276, 696, 46, 46);
    view.defPosition("g1", 322, 696, 46, 46);
    view.defPosition("h1", 368, 696, 46, 46);
    view.defPosition("i1", 414, 696, 46, 46);
    view.defPosition("j1", 460, 696, 46, 46);
    view.defPosition("k1", 506, 696, 46, 46);
    view.defPosition("l1", 552, 696, 46, 46);
    view.defPosition("m1", 598, 696, 46, 46);
    view.defPosition("n1", 644, 696, 46, 46);
    view.defPosition("o1", 690, 696, 46, 46);
    view.defPosition("p1", 736, 696, 46, 46);
    view.defPosition("z16", 0, 3, 46, 46);
    view.defPosition("z15", 0, 49, 46, 46);
    view.defPosition("z14", 0, 95, 46, 46);
    view.defPosition("z13", 0, 141, 46, 46);
    view.defPosition("z12", 0, 187, 46, 46);
    view.defPosition("z11", 0, 233, 46, 46);
    view.defPosition("z10", 0, 279, 46, 46);
    view.defPosition("z9", 0, 325, 46, 46);
    view.defPosition("z8", 0, 371, 46, 46);
    view.defPosition("z7", 0, 417, 46, 46);
    view.defPosition("z6", 0, 463, 46, 46);
    view.defPosition("z5", 0, 509, 46, 46);
    view.defPosition("z4", 0, 555, 46, 46);
    view.defPosition("z3", 0, 601, 46, 46);
    view.defPosition("z2", 0, 647, 46, 46);
    view.defPosition("z1", 0, 693, 46, 46);

    view.defPopup("Promote", 189, 130);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
}
