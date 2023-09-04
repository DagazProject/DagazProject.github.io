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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(10, "../sounds/dice.wav", true);
    Dagaz.Controller.addSound(11, "../sounds/magic.wav", true);
    Dagaz.Controller.addSound(12, "../sounds/popup.ogg", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "from");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("pass-partial", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("s");      // 0
    design.addDirection("e");      // 1
    design.addDirection("w");      // 2
    design.addDirection("n");      // 3
    design.addDirection("wup");    // 4
    design.addDirection("dn");     // 5
    design.addDirection("up");     // 6
    design.addDirection("na");     // 7
    design.addDirection("wna");    // 8
    design.addDirection("nb");     // 9
    design.addDirection("wnb");    // 10

    design.addPlayer("Black", [3, 2, 1, 0, 4, 6, 5, 7, 8, 9, 10]);
    design.addPlayer("White", [0, 1, 2, 3, 6, 5, 4, 8, 7, 10, 9]);
    design.addPlayer("N", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    design.addRandom(1, [0]);           // 0
    design.addRandom(1, [0]);           // 1
    design.addRandom(1, [0]);           // 2
    design.addTurn(1, [1, 2, 3, 4, 5]); // 3
    design.addRandom(2, [0]);           // 4
    design.addRandom(2, [0]);           // 5
    design.addRandom(2, [0]);           // 6
    design.addTurn(2, [1, 2, 3, 4, 5]); // 7

    design.addPosition("X", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("aIII", [15, 1, 0, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("bIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("cIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("dIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("eIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("fIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("gIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("hIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("iIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("jIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("kIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("lIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("mIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("nIII", [15, 1, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("oIII", [15, 0, -1, 0, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("aII", [15, 1, 0, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("bII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("cII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("dII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("eII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("fII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("gII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("hII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("iII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("jII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("kII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("lII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("mII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("nII", [15, 1, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("oII", [15, 0, -1, -15, 0, 75, 0, 0, 0, 0, 0]);
    design.addPosition("aI", [0, 1, 0, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("bI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("cI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("dI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("eI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("fI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("gI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("hI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("iI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("jI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("kI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("lI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("mI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("nI", [0, 1, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("oI", [0, 0, -1, -15, 0, 90, 0, 0, 0, 0, 0]);
    design.addPosition("a17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("b17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("c17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("d17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("e17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("f17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("g17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("h17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("i17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("j17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("k17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("l17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("m17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("n17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("o17", [0, 0, 0, 0, 15, 0, 15, 0, 0, 0, 0]);
    design.addPosition("a16", [0, 0, 0, 0, 15, -15, 15, 1, 30, 0, 0]);
    design.addPosition("b16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("c16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("d16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("e16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("f16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("g16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("h16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("i16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("j16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("k16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("l16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("m16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("n16", [0, 0, 0, 0, 15, -15, 15, 1, -1, 0, 0]);
    design.addPosition("o16", [0, 0, 0, 0, 15, -15, 15, 0, -1, 45, 0]);
    design.addPosition("a15", [0, 0, 0, 0, -75, -15, -75, -14, 15, 0, 0]);
    design.addPosition("b15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("c15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("d15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("e15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("f15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("g15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("h15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("i15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("j15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("k15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("l15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("m15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("n15", [0, 0, 0, 0, -75, -15, -75, -14, -16, 0, 0]);
    design.addPosition("o15", [0, 0, 0, 0, -75, -15, -75, 0, -16, 30, 0]);
    design.addPosition("a11", [0, 0, 0, 0, 15, 15, -75, -30, 1, 45, 1]);
    design.addPosition("b11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("c11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("d11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("e11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("f11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("g11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("h11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("i11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("j11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("k11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("l11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("m11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("n11", [0, 0, 0, 0, 15, 15, -75, 14, 1, 14, 1]);
    design.addPosition("o11", [0, 0, 0, 0, 15, 15, -75, 14, 45, 14, -30]);
    design.addPosition("a7", [0, 0, 0, 0, -90, 0, -15, -45, -14, 30, -14]);
    design.addPosition("b7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("c7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("d7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("e7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("f7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("g7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("h7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("i7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("j7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("k7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("l7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("m7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("n7", [0, 0, 0, 0, -90, 0, -15, -1, -14, -1, -14]);
    design.addPosition("o7", [0, 0, 0, 0, -90, 0, -15, -1, 30, -1, -45]);
    design.addPosition("a3", [0, 0, 0, 0, -90, 15, -90, 16, 0, 0, -30]);
    design.addPosition("b3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("d3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("e3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("f3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("g3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("h3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("i3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("j3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("k3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("l3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("m3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("n3", [0, 0, 0, 0, -90, 15, -90, 16, 14, 0, 0]);
    design.addPosition("o3", [0, 0, 0, 0, -90, 15, -90, -15, 14, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, -15, 15, -15, 1, 0, 0, -45]);
    design.addPosition("b2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("f2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("g2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("h2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("i2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("j2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("k2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("l2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("m2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("n2", [0, 0, 0, 0, -15, 15, -15, 1, -1, 0, 0]);
    design.addPosition("o2", [0, 0, 0, 0, -15, 15, -15, -30, -1, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("j1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("k1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("l1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("m1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("n1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);
    design.addPosition("o1", [0, 0, 0, 0, -15, 0, -15, 0, 0, 0, 0]);

    design.addZone("restricted", 2, [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
    design.addZone("restricted", 1, [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);
    design.addZone("dices", 2, [0, 1, 2]);
    design.addZone("dices", 1, [0, 1, 2]);
    design.addZone("start", 2, [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]);
    design.addZone("start", 1, [153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62]);
    design.addZone("top", 2, [93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107]);
    design.addZone("top", 1, [93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107]);
    design.addZone("bot", 2, [108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);
    design.addZone("bot", 1, [108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122]);

    design.addCommand(0, ZRF.IN_ZONE,	1);	// dices
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	2);	// start
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	3);
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-13);
    design.addCommand(5, ZRF.IN_ZONE,	0);	// restricted
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	3);
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	3);
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.LITERAL,	1);	// true
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.LITERAL,	0);	// false
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-13);
    design.addCommand(6, ZRF.IN_ZONE,	0);	// restricted
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	3);
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	3);
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	3);
    design.addCommand(7, ZRF.PARAM,	5);	// $6
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PARAM,	6);	// $7
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-13);
    design.addCommand(7, ZRF.IN_ZONE,	0);	// restricted
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.FUNCTION,	26);	// capture
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("D0", 0, 0);
    design.addDrop(0, 0, [], 0, 10);

    design.addPiece("D1", 1, 0);
    design.addDrop(1, 0, [], 0, 10);
    design.addMove(1, 8, [], 5, 12);

    design.addPiece("D2", 2, 0);
    design.addDrop(2, 0, [], 0, 10);
    design.addMove(2, 8, [], 5, 12);

    design.addPiece("D3", 3, 0);
    design.addDrop(3, 0, [], 0, 10);
    design.addMove(3, 8, [], 5, 12);

    design.addPiece("King", 4, 1000);
    design.addMove(4, 1, [3], 4);
    design.addMove(4, 1, [1], 4);
    design.addMove(4, 1, [2], 4);
    design.addMove(4, 1, [0], 4);

    design.addPiece("Man", 5, 10);
    design.addMove(5, 4, [6], 1);
    design.addMove(5, 5, [7, 9, 6], 1);
    design.addMove(5, 6, [7, 9, 7, 9, 6], 2);
    design.addMove(5, 7, [7, 9, 7, 9, 7, 9, 6], 3);

    design.addPiece("Ko", 6, 0);

    design.setup("White", "Man", 48);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 50);
    design.setup("White", "Man", 51);
    design.setup("White", "Man", 52);
    design.setup("White", "Man", 53);
    design.setup("White", "Man", 54);
    design.setup("White", "Man", 55);
    design.setup("White", "Man", 56);
    design.setup("White", "Man", 57);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 59);
    design.setup("White", "Man", 60);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 62);
    design.setup("Black", "Man", 153);
    design.setup("Black", "Man", 154);
    design.setup("Black", "Man", 155);
    design.setup("Black", "Man", 156);
    design.setup("Black", "Man", 157);
    design.setup("Black", "Man", 158);
    design.setup("Black", "Man", 159);
    design.setup("Black", "Man", 160);
    design.setup("Black", "Man", 161);
    design.setup("Black", "Man", 162);
    design.setup("Black", "Man", 163);
    design.setup("Black", "Man", 164);
    design.setup("Black", "Man", 165);
    design.setup("Black", "Man", 166);
    design.setup("Black", "Man", 167);
    design.setup("N", "King", 25);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteD0", "White D0");
    view.defPiece("BlackD0", "Black D0");
    view.defPiece("WhiteD1", "White D1");
    view.defPiece("BlackD1", "Black D1");
    view.defPiece("WhiteD2", "White D2");
    view.defPiece("BlackD2", "Black D2");
    view.defPiece("WhiteD3", "White D3");
    view.defPiece("BlackD3", "Black D3");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("NKing", "N King");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKo", "White Ko");
    view.defPiece("BlackKo", "Black Ko");
 
    view.defPosition("X", 751, 107, 92, 21);
    view.defPosition("Y", 751, 155, 92, 21);
    view.defPosition("Z", 751, 203, 92, 21);
    view.defPosition("aIII", 11, 78, 42, 43);
    view.defPosition("bIII", 58, 78, 42, 43);
    view.defPosition("cIII", 105, 78, 42, 43);
    view.defPosition("dIII", 152, 78, 42, 43);
    view.defPosition("eIII", 199, 78, 42, 43);
    view.defPosition("fIII", 246, 78, 42, 43);
    view.defPosition("gIII", 293, 78, 42, 43);
    view.defPosition("hIII", 340, 78, 42, 43);
    view.defPosition("iIII", 387, 78, 42, 43);
    view.defPosition("jIII", 434, 78, 42, 43);
    view.defPosition("kIII", 481, 78, 42, 43);
    view.defPosition("lIII", 528, 78, 42, 43);
    view.defPosition("mIII", 575, 78, 42, 43);
    view.defPosition("nIII", 622, 78, 42, 43);
    view.defPosition("oIII", 669, 78, 42, 43);
    view.defPosition("aII", 11, 145, 42, 43);
    view.defPosition("bII", 58, 145, 42, 43);
    view.defPosition("cII", 105, 145, 42, 43);
    view.defPosition("dII", 152, 145, 42, 43);
    view.defPosition("eII", 199, 145, 42, 43);
    view.defPosition("fII", 246, 145, 42, 43);
    view.defPosition("gII", 293, 145, 42, 43);
    view.defPosition("hII", 340, 145, 42, 43);
    view.defPosition("iII", 387, 145, 42, 43);
    view.defPosition("jII", 434, 145, 42, 43);
    view.defPosition("kII", 481, 145, 42, 43);
    view.defPosition("lII", 528, 145, 42, 43);
    view.defPosition("mII", 575, 145, 42, 43);
    view.defPosition("nII", 622, 145, 42, 43);
    view.defPosition("oII", 669, 145, 42, 43);
    view.defPosition("aI", 11, 212, 42, 43);
    view.defPosition("bI", 58, 212, 42, 43);
    view.defPosition("cI", 105, 212, 42, 43);
    view.defPosition("dI", 152, 212, 42, 43);
    view.defPosition("eI", 199, 212, 42, 43);
    view.defPosition("fI", 246, 212, 42, 43);
    view.defPosition("gI", 293, 212, 42, 43);
    view.defPosition("hI", 340, 212, 42, 43);
    view.defPosition("iI", 387, 212, 42, 43);
    view.defPosition("jI", 434, 212, 42, 43);
    view.defPosition("kI", 481, 212, 42, 43);
    view.defPosition("lI", 528, 212, 42, 43);
    view.defPosition("mI", 575, 212, 42, 43);
    view.defPosition("nI", 622, 212, 42, 43);
    view.defPosition("oI", 669, 212, 42, 43);
    view.defPosition("a17", 12, 21, 40, 16);
    view.defPosition("b17", 59, 21, 40, 16);
    view.defPosition("c17", 106, 21, 40, 16);
    view.defPosition("d17", 153, 21, 40, 16);
    view.defPosition("e17", 200, 21, 40, 16);
    view.defPosition("f17", 247, 21, 40, 16);
    view.defPosition("g17", 294, 21, 40, 16);
    view.defPosition("h17", 341, 21, 40, 16);
    view.defPosition("i17", 388, 21, 40, 16);
    view.defPosition("j17", 435, 21, 40, 16);
    view.defPosition("k17", 482, 21, 40, 16);
    view.defPosition("l17", 529, 21, 40, 16);
    view.defPosition("m17", 576, 21, 40, 16);
    view.defPosition("n17", 623, 21, 40, 16);
    view.defPosition("o17", 670, 21, 40, 16);
    view.defPosition("a16", 12, 38, 40, 16);
    view.defPosition("b16", 59, 38, 40, 16);
    view.defPosition("c16", 106, 38, 40, 16);
    view.defPosition("d16", 153, 38, 40, 16);
    view.defPosition("e16", 200, 38, 40, 16);
    view.defPosition("f16", 247, 38, 40, 16);
    view.defPosition("g16", 294, 38, 40, 16);
    view.defPosition("h16", 341, 38, 40, 16);
    view.defPosition("i16", 388, 38, 40, 16);
    view.defPosition("j16", 435, 38, 40, 16);
    view.defPosition("k16", 482, 38, 40, 16);
    view.defPosition("l16", 529, 38, 40, 16);
    view.defPosition("m16", 576, 38, 40, 16);
    view.defPosition("n16", 623, 38, 40, 16);
    view.defPosition("o16", 670, 38, 40, 16);
    view.defPosition("a15", 12, 55, 40, 16);
    view.defPosition("b15", 59, 55, 40, 16);
    view.defPosition("c15", 106, 55, 40, 16);
    view.defPosition("d15", 153, 55, 40, 16);
    view.defPosition("e15", 200, 55, 40, 16);
    view.defPosition("f15", 247, 55, 40, 16);
    view.defPosition("g15", 294, 55, 40, 16);
    view.defPosition("h15", 341, 55, 40, 16);
    view.defPosition("i15", 388, 55, 40, 16);
    view.defPosition("j15", 435, 55, 40, 16);
    view.defPosition("k15", 482, 55, 40, 16);
    view.defPosition("l15", 529, 55, 40, 16);
    view.defPosition("m15", 576, 55, 40, 16);
    view.defPosition("n15", 623, 55, 40, 16);
    view.defPosition("o15", 670, 55, 40, 16);
    view.defPosition("a11", 12, 125, 40, 15);
    view.defPosition("b11", 59, 125, 40, 15);
    view.defPosition("c11", 106, 125, 40, 15);
    view.defPosition("d11", 153, 125, 40, 15);
    view.defPosition("e11", 200, 125, 40, 15);
    view.defPosition("f11", 247, 125, 40, 15);
    view.defPosition("g11", 294, 125, 40, 15);
    view.defPosition("h11", 341, 125, 40, 15);
    view.defPosition("i11", 388, 125, 40, 15);
    view.defPosition("j11", 435, 125, 40, 15);
    view.defPosition("k11", 482, 125, 40, 15);
    view.defPosition("l11", 529, 125, 40, 15);
    view.defPosition("m11", 576, 125, 40, 15);
    view.defPosition("n11", 623, 125, 40, 15);
    view.defPosition("o11", 670, 125, 40, 15);
    view.defPosition("a7", 12, 192, 40, 15);
    view.defPosition("b7", 59, 192, 40, 15);
    view.defPosition("c7", 106, 192, 40, 15);
    view.defPosition("d7", 153, 192, 40, 15);
    view.defPosition("e7", 200, 192, 40, 15);
    view.defPosition("f7", 247, 192, 40, 15);
    view.defPosition("g7", 294, 192, 40, 15);
    view.defPosition("h7", 341, 192, 40, 15);
    view.defPosition("i7", 388, 192, 40, 15);
    view.defPosition("j7", 435, 192, 40, 15);
    view.defPosition("k7", 482, 192, 40, 15);
    view.defPosition("l7", 529, 192, 40, 15);
    view.defPosition("m7", 576, 192, 40, 15);
    view.defPosition("n7", 623, 192, 40, 15);
    view.defPosition("o7", 670, 192, 40, 15);
    view.defPosition("a3", 12, 261, 40, 16);
    view.defPosition("b3", 59, 261, 40, 16);
    view.defPosition("c3", 106, 261, 40, 16);
    view.defPosition("d3", 153, 261, 40, 16);
    view.defPosition("e3", 200, 261, 40, 16);
    view.defPosition("f3", 247, 261, 40, 16);
    view.defPosition("g3", 294, 261, 40, 16);
    view.defPosition("h3", 341, 261, 40, 16);
    view.defPosition("i3", 388, 261, 40, 16);
    view.defPosition("j3", 435, 261, 40, 16);
    view.defPosition("k3", 482, 261, 40, 16);
    view.defPosition("l3", 529, 261, 40, 16);
    view.defPosition("m3", 576, 261, 40, 16);
    view.defPosition("n3", 623, 261, 40, 16);
    view.defPosition("o3", 670, 261, 40, 16);
    view.defPosition("a2", 12, 278, 40, 16);
    view.defPosition("b2", 59, 278, 40, 16);
    view.defPosition("c2", 106, 278, 40, 16);
    view.defPosition("d2", 153, 278, 40, 16);
    view.defPosition("e2", 200, 278, 40, 16);
    view.defPosition("f2", 247, 278, 40, 16);
    view.defPosition("g2", 294, 278, 40, 16);
    view.defPosition("h2", 341, 278, 40, 16);
    view.defPosition("i2", 388, 278, 40, 16);
    view.defPosition("j2", 435, 278, 40, 16);
    view.defPosition("k2", 482, 278, 40, 16);
    view.defPosition("l2", 529, 278, 40, 16);
    view.defPosition("m2", 576, 278, 40, 16);
    view.defPosition("n2", 623, 278, 40, 16);
    view.defPosition("o2", 670, 278, 40, 16);
    view.defPosition("a1", 12, 295, 40, 16);
    view.defPosition("b1", 59, 295, 40, 16);
    view.defPosition("c1", 106, 295, 40, 16);
    view.defPosition("d1", 153, 295, 40, 16);
    view.defPosition("e1", 200, 295, 40, 16);
    view.defPosition("f1", 247, 295, 40, 16);
    view.defPosition("g1", 294, 295, 40, 16);
    view.defPosition("h1", 341, 295, 40, 16);
    view.defPosition("i1", 388, 295, 40, 16);
    view.defPosition("j1", 435, 295, 40, 16);
    view.defPosition("k1", 482, 295, 40, 16);
    view.defPosition("l1", 529, 295, 40, 16);
    view.defPosition("m1", 576, 295, 40, 16);
    view.defPosition("n1", 623, 295, 40, 16);
    view.defPosition("o1", 670, 295, 40, 16);
}
