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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("animate-redo", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a19", [0, 1, 19, 0]);
    design.addPosition("b19", [-1, 1, 19, 0]);
    design.addPosition("c19", [-1, 1, 19, 0]);
    design.addPosition("d19", [-1, 1, 19, 0]);
    design.addPosition("e19", [-1, 1, 19, 0]);
    design.addPosition("f19", [-1, 1, 19, 0]);
    design.addPosition("g19", [-1, 1, 19, 0]);
    design.addPosition("h19", [-1, 1, 19, 0]);
    design.addPosition("i19", [-1, 1, 19, 0]);
    design.addPosition("j19", [-1, 1, 19, 0]);
    design.addPosition("k19", [-1, 1, 19, 0]);
    design.addPosition("l19", [-1, 1, 19, 0]);
    design.addPosition("m19", [-1, 1, 19, 0]);
    design.addPosition("n19", [-1, 1, 19, 0]);
    design.addPosition("o19", [-1, 1, 19, 0]);
    design.addPosition("p19", [-1, 1, 19, 0]);
    design.addPosition("q19", [-1, 1, 19, 0]);
    design.addPosition("r19", [-1, 1, 19, 0]);
    design.addPosition("s19", [-1, 0, 19, 0]);
    design.addPosition("a18", [0, 1, 19, -19]);
    design.addPosition("b18", [-1, 1, 19, -19]);
    design.addPosition("c18", [-1, 1, 19, -19]);
    design.addPosition("d18", [-1, 1, 19, -19]);
    design.addPosition("e18", [-1, 1, 19, -19]);
    design.addPosition("f18", [-1, 1, 19, -19]);
    design.addPosition("g18", [-1, 1, 19, -19]);
    design.addPosition("h18", [-1, 1, 19, -19]);
    design.addPosition("i18", [-1, 1, 19, -19]);
    design.addPosition("j18", [-1, 1, 19, -19]);
    design.addPosition("k18", [-1, 1, 19, -19]);
    design.addPosition("l18", [-1, 1, 19, -19]);
    design.addPosition("m18", [-1, 1, 19, -19]);
    design.addPosition("n18", [-1, 1, 19, -19]);
    design.addPosition("o18", [-1, 1, 19, -19]);
    design.addPosition("p18", [-1, 1, 19, -19]);
    design.addPosition("q18", [-1, 1, 19, -19]);
    design.addPosition("r18", [-1, 1, 19, -19]);
    design.addPosition("s18", [-1, 0, 19, -19]);
    design.addPosition("a17", [0, 1, 19, -19]);
    design.addPosition("b17", [-1, 1, 19, -19]);
    design.addPosition("c17", [-1, 1, 19, -19]);
    design.addPosition("d17", [-1, 1, 19, -19]);
    design.addPosition("e17", [-1, 1, 19, -19]);
    design.addPosition("f17", [-1, 1, 19, -19]);
    design.addPosition("g17", [-1, 1, 19, -19]);
    design.addPosition("h17", [-1, 1, 19, -19]);
    design.addPosition("i17", [-1, 1, 19, -19]);
    design.addPosition("j17", [-1, 1, 19, -19]);
    design.addPosition("k17", [-1, 1, 19, -19]);
    design.addPosition("l17", [-1, 1, 19, -19]);
    design.addPosition("m17", [-1, 1, 19, -19]);
    design.addPosition("n17", [-1, 1, 19, -19]);
    design.addPosition("o17", [-1, 1, 19, -19]);
    design.addPosition("p17", [-1, 1, 19, -19]);
    design.addPosition("q17", [-1, 1, 19, -19]);
    design.addPosition("r17", [-1, 1, 19, -19]);
    design.addPosition("s17", [-1, 0, 19, -19]);
    design.addPosition("a16", [0, 1, 19, -19]);
    design.addPosition("b16", [-1, 1, 19, -19]);
    design.addPosition("c16", [-1, 1, 19, -19]);
    design.addPosition("d16", [-1, 1, 19, -19]);
    design.addPosition("e16", [-1, 1, 19, -19]);
    design.addPosition("f16", [-1, 1, 19, -19]);
    design.addPosition("g16", [-1, 1, 19, -19]);
    design.addPosition("h16", [-1, 1, 19, -19]);
    design.addPosition("i16", [-1, 1, 19, -19]);
    design.addPosition("j16", [-1, 1, 19, -19]);
    design.addPosition("k16", [-1, 1, 19, -19]);
    design.addPosition("l16", [-1, 1, 19, -19]);
    design.addPosition("m16", [-1, 1, 19, -19]);
    design.addPosition("n16", [-1, 1, 19, -19]);
    design.addPosition("o16", [-1, 1, 19, -19]);
    design.addPosition("p16", [-1, 1, 19, -19]);
    design.addPosition("q16", [-1, 1, 19, -19]);
    design.addPosition("r16", [-1, 1, 19, -19]);
    design.addPosition("s16", [-1, 0, 19, -19]);
    design.addPosition("a15", [0, 1, 19, -19]);
    design.addPosition("b15", [-1, 1, 19, -19]);
    design.addPosition("c15", [-1, 1, 19, -19]);
    design.addPosition("d15", [-1, 1, 19, -19]);
    design.addPosition("e15", [-1, 1, 19, -19]);
    design.addPosition("f15", [-1, 1, 19, -19]);
    design.addPosition("g15", [-1, 1, 19, -19]);
    design.addPosition("h15", [-1, 1, 19, -19]);
    design.addPosition("i15", [-1, 1, 19, -19]);
    design.addPosition("j15", [-1, 1, 19, -19]);
    design.addPosition("k15", [-1, 1, 19, -19]);
    design.addPosition("l15", [-1, 1, 19, -19]);
    design.addPosition("m15", [-1, 1, 19, -19]);
    design.addPosition("n15", [-1, 1, 19, -19]);
    design.addPosition("o15", [-1, 1, 19, -19]);
    design.addPosition("p15", [-1, 1, 19, -19]);
    design.addPosition("q15", [-1, 1, 19, -19]);
    design.addPosition("r15", [-1, 1, 19, -19]);
    design.addPosition("s15", [-1, 0, 19, -19]);
    design.addPosition("a14", [0, 1, 19, -19]);
    design.addPosition("b14", [-1, 1, 19, -19]);
    design.addPosition("c14", [-1, 1, 19, -19]);
    design.addPosition("d14", [-1, 1, 19, -19]);
    design.addPosition("e14", [-1, 1, 19, -19]);
    design.addPosition("f14", [-1, 1, 19, -19]);
    design.addPosition("g14", [-1, 1, 19, -19]);
    design.addPosition("h14", [-1, 1, 19, -19]);
    design.addPosition("i14", [-1, 1, 19, -19]);
    design.addPosition("j14", [-1, 1, 19, -19]);
    design.addPosition("k14", [-1, 1, 19, -19]);
    design.addPosition("l14", [-1, 1, 19, -19]);
    design.addPosition("m14", [-1, 1, 19, -19]);
    design.addPosition("n14", [-1, 1, 19, -19]);
    design.addPosition("o14", [-1, 1, 19, -19]);
    design.addPosition("p14", [-1, 1, 19, -19]);
    design.addPosition("q14", [-1, 1, 19, -19]);
    design.addPosition("r14", [-1, 1, 19, -19]);
    design.addPosition("s14", [-1, 0, 19, -19]);
    design.addPosition("a13", [0, 1, 19, -19]);
    design.addPosition("b13", [-1, 1, 19, -19]);
    design.addPosition("c13", [-1, 1, 19, -19]);
    design.addPosition("d13", [-1, 1, 19, -19]);
    design.addPosition("e13", [-1, 1, 19, -19]);
    design.addPosition("f13", [-1, 1, 19, -19]);
    design.addPosition("g13", [-1, 1, 19, -19]);
    design.addPosition("h13", [-1, 1, 19, -19]);
    design.addPosition("i13", [-1, 1, 19, -19]);
    design.addPosition("j13", [-1, 1, 19, -19]);
    design.addPosition("k13", [-1, 1, 19, -19]);
    design.addPosition("l13", [-1, 1, 19, -19]);
    design.addPosition("m13", [-1, 1, 19, -19]);
    design.addPosition("n13", [-1, 1, 19, -19]);
    design.addPosition("o13", [-1, 1, 19, -19]);
    design.addPosition("p13", [-1, 1, 19, -19]);
    design.addPosition("q13", [-1, 1, 19, -19]);
    design.addPosition("r13", [-1, 1, 19, -19]);
    design.addPosition("s13", [-1, 0, 19, -19]);
    design.addPosition("a12", [0, 1, 19, -19]);
    design.addPosition("b12", [-1, 1, 19, -19]);
    design.addPosition("c12", [-1, 1, 19, -19]);
    design.addPosition("d12", [-1, 1, 19, -19]);
    design.addPosition("e12", [-1, 1, 19, -19]);
    design.addPosition("f12", [-1, 1, 19, -19]);
    design.addPosition("g12", [-1, 1, 19, -19]);
    design.addPosition("h12", [-1, 1, 19, -19]);
    design.addPosition("i12", [-1, 1, 19, -19]);
    design.addPosition("j12", [-1, 1, 19, -19]);
    design.addPosition("k12", [-1, 1, 19, -19]);
    design.addPosition("l12", [-1, 1, 19, -19]);
    design.addPosition("m12", [-1, 1, 19, -19]);
    design.addPosition("n12", [-1, 1, 19, -19]);
    design.addPosition("o12", [-1, 1, 19, -19]);
    design.addPosition("p12", [-1, 1, 19, -19]);
    design.addPosition("q12", [-1, 1, 19, -19]);
    design.addPosition("r12", [-1, 1, 19, -19]);
    design.addPosition("s12", [-1, 0, 19, -19]);
    design.addPosition("a11", [0, 1, 19, -19]);
    design.addPosition("b11", [-1, 1, 19, -19]);
    design.addPosition("c11", [-1, 1, 19, -19]);
    design.addPosition("d11", [-1, 1, 19, -19]);
    design.addPosition("e11", [-1, 1, 19, -19]);
    design.addPosition("f11", [-1, 1, 19, -19]);
    design.addPosition("g11", [-1, 1, 19, -19]);
    design.addPosition("h11", [-1, 1, 19, -19]);
    design.addPosition("i11", [-1, 1, 19, -19]);
    design.addPosition("j11", [-1, 1, 19, -19]);
    design.addPosition("k11", [-1, 1, 19, -19]);
    design.addPosition("l11", [-1, 1, 19, -19]);
    design.addPosition("m11", [-1, 1, 19, -19]);
    design.addPosition("n11", [-1, 1, 19, -19]);
    design.addPosition("o11", [-1, 1, 19, -19]);
    design.addPosition("p11", [-1, 1, 19, -19]);
    design.addPosition("q11", [-1, 1, 19, -19]);
    design.addPosition("r11", [-1, 1, 19, -19]);
    design.addPosition("s11", [-1, 0, 19, -19]);
    design.addPosition("a10", [0, 1, 19, -19]);
    design.addPosition("b10", [-1, 1, 19, -19]);
    design.addPosition("c10", [-1, 1, 19, -19]);
    design.addPosition("d10", [-1, 1, 19, -19]);
    design.addPosition("e10", [-1, 1, 19, -19]);
    design.addPosition("f10", [-1, 1, 19, -19]);
    design.addPosition("g10", [-1, 1, 19, -19]);
    design.addPosition("h10", [-1, 1, 19, -19]);
    design.addPosition("i10", [-1, 1, 19, -19]);
    design.addPosition("j10", [-1, 1, 19, -19]);
    design.addPosition("k10", [-1, 1, 19, -19]);
    design.addPosition("l10", [-1, 1, 19, -19]);
    design.addPosition("m10", [-1, 1, 19, -19]);
    design.addPosition("n10", [-1, 1, 19, -19]);
    design.addPosition("o10", [-1, 1, 19, -19]);
    design.addPosition("p10", [-1, 1, 19, -19]);
    design.addPosition("q10", [-1, 1, 19, -19]);
    design.addPosition("r10", [-1, 1, 19, -19]);
    design.addPosition("s10", [-1, 0, 19, -19]);
    design.addPosition("a9", [0, 1, 19, -19]);
    design.addPosition("b9", [-1, 1, 19, -19]);
    design.addPosition("c9", [-1, 1, 19, -19]);
    design.addPosition("d9", [-1, 1, 19, -19]);
    design.addPosition("e9", [-1, 1, 19, -19]);
    design.addPosition("f9", [-1, 1, 19, -19]);
    design.addPosition("g9", [-1, 1, 19, -19]);
    design.addPosition("h9", [-1, 1, 19, -19]);
    design.addPosition("i9", [-1, 1, 19, -19]);
    design.addPosition("j9", [-1, 1, 19, -19]);
    design.addPosition("k9", [-1, 1, 19, -19]);
    design.addPosition("l9", [-1, 1, 19, -19]);
    design.addPosition("m9", [-1, 1, 19, -19]);
    design.addPosition("n9", [-1, 1, 19, -19]);
    design.addPosition("o9", [-1, 1, 19, -19]);
    design.addPosition("p9", [-1, 1, 19, -19]);
    design.addPosition("q9", [-1, 1, 19, -19]);
    design.addPosition("r9", [-1, 1, 19, -19]);
    design.addPosition("s9", [-1, 0, 19, -19]);
    design.addPosition("a8", [0, 1, 19, -19]);
    design.addPosition("b8", [-1, 1, 19, -19]);
    design.addPosition("c8", [-1, 1, 19, -19]);
    design.addPosition("d8", [-1, 1, 19, -19]);
    design.addPosition("e8", [-1, 1, 19, -19]);
    design.addPosition("f8", [-1, 1, 19, -19]);
    design.addPosition("g8", [-1, 1, 19, -19]);
    design.addPosition("h8", [-1, 1, 19, -19]);
    design.addPosition("i8", [-1, 1, 19, -19]);
    design.addPosition("j8", [-1, 1, 19, -19]);
    design.addPosition("k8", [-1, 1, 19, -19]);
    design.addPosition("l8", [-1, 1, 19, -19]);
    design.addPosition("m8", [-1, 1, 19, -19]);
    design.addPosition("n8", [-1, 1, 19, -19]);
    design.addPosition("o8", [-1, 1, 19, -19]);
    design.addPosition("p8", [-1, 1, 19, -19]);
    design.addPosition("q8", [-1, 1, 19, -19]);
    design.addPosition("r8", [-1, 1, 19, -19]);
    design.addPosition("s8", [-1, 0, 19, -19]);
    design.addPosition("a7", [0, 1, 19, -19]);
    design.addPosition("b7", [-1, 1, 19, -19]);
    design.addPosition("c7", [-1, 1, 19, -19]);
    design.addPosition("d7", [-1, 1, 19, -19]);
    design.addPosition("e7", [-1, 1, 19, -19]);
    design.addPosition("f7", [-1, 1, 19, -19]);
    design.addPosition("g7", [-1, 1, 19, -19]);
    design.addPosition("h7", [-1, 1, 19, -19]);
    design.addPosition("i7", [-1, 1, 19, -19]);
    design.addPosition("j7", [-1, 1, 19, -19]);
    design.addPosition("k7", [-1, 1, 19, -19]);
    design.addPosition("l7", [-1, 1, 19, -19]);
    design.addPosition("m7", [-1, 1, 19, -19]);
    design.addPosition("n7", [-1, 1, 19, -19]);
    design.addPosition("o7", [-1, 1, 19, -19]);
    design.addPosition("p7", [-1, 1, 19, -19]);
    design.addPosition("q7", [-1, 1, 19, -19]);
    design.addPosition("r7", [-1, 1, 19, -19]);
    design.addPosition("s7", [-1, 0, 19, -19]);
    design.addPosition("a6", [0, 1, 19, -19]);
    design.addPosition("b6", [-1, 1, 19, -19]);
    design.addPosition("c6", [-1, 1, 19, -19]);
    design.addPosition("d6", [-1, 1, 19, -19]);
    design.addPosition("e6", [-1, 1, 19, -19]);
    design.addPosition("f6", [-1, 1, 19, -19]);
    design.addPosition("g6", [-1, 1, 19, -19]);
    design.addPosition("h6", [-1, 1, 19, -19]);
    design.addPosition("i6", [-1, 1, 19, -19]);
    design.addPosition("j6", [-1, 1, 19, -19]);
    design.addPosition("k6", [-1, 1, 19, -19]);
    design.addPosition("l6", [-1, 1, 19, -19]);
    design.addPosition("m6", [-1, 1, 19, -19]);
    design.addPosition("n6", [-1, 1, 19, -19]);
    design.addPosition("o6", [-1, 1, 19, -19]);
    design.addPosition("p6", [-1, 1, 19, -19]);
    design.addPosition("q6", [-1, 1, 19, -19]);
    design.addPosition("r6", [-1, 1, 19, -19]);
    design.addPosition("s6", [-1, 0, 19, -19]);
    design.addPosition("a5", [0, 1, 19, -19]);
    design.addPosition("b5", [-1, 1, 19, -19]);
    design.addPosition("c5", [-1, 1, 19, -19]);
    design.addPosition("d5", [-1, 1, 19, -19]);
    design.addPosition("e5", [-1, 1, 19, -19]);
    design.addPosition("f5", [-1, 1, 19, -19]);
    design.addPosition("g5", [-1, 1, 19, -19]);
    design.addPosition("h5", [-1, 1, 19, -19]);
    design.addPosition("i5", [-1, 1, 19, -19]);
    design.addPosition("j5", [-1, 1, 19, -19]);
    design.addPosition("k5", [-1, 1, 19, -19]);
    design.addPosition("l5", [-1, 1, 19, -19]);
    design.addPosition("m5", [-1, 1, 19, -19]);
    design.addPosition("n5", [-1, 1, 19, -19]);
    design.addPosition("o5", [-1, 1, 19, -19]);
    design.addPosition("p5", [-1, 1, 19, -19]);
    design.addPosition("q5", [-1, 1, 19, -19]);
    design.addPosition("r5", [-1, 1, 19, -19]);
    design.addPosition("s5", [-1, 0, 19, -19]);
    design.addPosition("a4", [0, 1, 19, -19]);
    design.addPosition("b4", [-1, 1, 19, -19]);
    design.addPosition("c4", [-1, 1, 19, -19]);
    design.addPosition("d4", [-1, 1, 19, -19]);
    design.addPosition("e4", [-1, 1, 19, -19]);
    design.addPosition("f4", [-1, 1, 19, -19]);
    design.addPosition("g4", [-1, 1, 19, -19]);
    design.addPosition("h4", [-1, 1, 19, -19]);
    design.addPosition("i4", [-1, 1, 19, -19]);
    design.addPosition("j4", [-1, 1, 19, -19]);
    design.addPosition("k4", [-1, 1, 19, -19]);
    design.addPosition("l4", [-1, 1, 19, -19]);
    design.addPosition("m4", [-1, 1, 19, -19]);
    design.addPosition("n4", [-1, 1, 19, -19]);
    design.addPosition("o4", [-1, 1, 19, -19]);
    design.addPosition("p4", [-1, 1, 19, -19]);
    design.addPosition("q4", [-1, 1, 19, -19]);
    design.addPosition("r4", [-1, 1, 19, -19]);
    design.addPosition("s4", [-1, 0, 19, -19]);
    design.addPosition("a3", [0, 1, 19, -19]);
    design.addPosition("b3", [-1, 1, 19, -19]);
    design.addPosition("c3", [-1, 1, 19, -19]);
    design.addPosition("d3", [-1, 1, 19, -19]);
    design.addPosition("e3", [-1, 1, 19, -19]);
    design.addPosition("f3", [-1, 1, 19, -19]);
    design.addPosition("g3", [-1, 1, 19, -19]);
    design.addPosition("h3", [-1, 1, 19, -19]);
    design.addPosition("i3", [-1, 1, 19, -19]);
    design.addPosition("j3", [-1, 1, 19, -19]);
    design.addPosition("k3", [-1, 1, 19, -19]);
    design.addPosition("l3", [-1, 1, 19, -19]);
    design.addPosition("m3", [-1, 1, 19, -19]);
    design.addPosition("n3", [-1, 1, 19, -19]);
    design.addPosition("o3", [-1, 1, 19, -19]);
    design.addPosition("p3", [-1, 1, 19, -19]);
    design.addPosition("q3", [-1, 1, 19, -19]);
    design.addPosition("r3", [-1, 1, 19, -19]);
    design.addPosition("s3", [-1, 0, 19, -19]);
    design.addPosition("a2", [0, 1, 19, -19]);
    design.addPosition("b2", [-1, 1, 19, -19]);
    design.addPosition("c2", [-1, 1, 19, -19]);
    design.addPosition("d2", [-1, 1, 19, -19]);
    design.addPosition("e2", [-1, 1, 19, -19]);
    design.addPosition("f2", [-1, 1, 19, -19]);
    design.addPosition("g2", [-1, 1, 19, -19]);
    design.addPosition("h2", [-1, 1, 19, -19]);
    design.addPosition("i2", [-1, 1, 19, -19]);
    design.addPosition("j2", [-1, 1, 19, -19]);
    design.addPosition("k2", [-1, 1, 19, -19]);
    design.addPosition("l2", [-1, 1, 19, -19]);
    design.addPosition("m2", [-1, 1, 19, -19]);
    design.addPosition("n2", [-1, 1, 19, -19]);
    design.addPosition("o2", [-1, 1, 19, -19]);
    design.addPosition("p2", [-1, 1, 19, -19]);
    design.addPosition("q2", [-1, 1, 19, -19]);
    design.addPosition("r2", [-1, 1, 19, -19]);
    design.addPosition("s2", [-1, 0, 19, -19]);
    design.addPosition("a1", [0, 1, 0, -19]);
    design.addPosition("b1", [-1, 1, 0, -19]);
    design.addPosition("c1", [-1, 1, 0, -19]);
    design.addPosition("d1", [-1, 1, 0, -19]);
    design.addPosition("e1", [-1, 1, 0, -19]);
    design.addPosition("f1", [-1, 1, 0, -19]);
    design.addPosition("g1", [-1, 1, 0, -19]);
    design.addPosition("h1", [-1, 1, 0, -19]);
    design.addPosition("i1", [-1, 1, 0, -19]);
    design.addPosition("j1", [-1, 1, 0, -19]);
    design.addPosition("k1", [-1, 1, 0, -19]);
    design.addPosition("l1", [-1, 1, 0, -19]);
    design.addPosition("m1", [-1, 1, 0, -19]);
    design.addPosition("n1", [-1, 1, 0, -19]);
    design.addPosition("o1", [-1, 1, 0, -19]);
    design.addPosition("p1", [-1, 1, 0, -19]);
    design.addPosition("q1", [-1, 1, 0, -19]);
    design.addPosition("r1", [-1, 1, 0, -19]);
    design.addPosition("s1", [-1, 0, 0, -19]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a19", 6, 6, 30, 30);
    view.defPosition("b19", 36, 6, 30, 30);
    view.defPosition("c19", 66, 6, 30, 30);
    view.defPosition("d19", 96, 6, 30, 30);
    view.defPosition("e19", 126, 6, 30, 30);
    view.defPosition("f19", 156, 6, 30, 30);
    view.defPosition("g19", 186, 6, 30, 30);
    view.defPosition("h19", 216, 6, 30, 30);
    view.defPosition("i19", 246, 6, 30, 30);
    view.defPosition("j19", 276, 6, 30, 30);
    view.defPosition("k19", 306, 6, 30, 30);
    view.defPosition("l19", 336, 6, 30, 30);
    view.defPosition("m19", 366, 6, 30, 30);
    view.defPosition("n19", 396, 6, 30, 30);
    view.defPosition("o19", 426, 6, 30, 30);
    view.defPosition("p19", 456, 6, 30, 30);
    view.defPosition("q19", 486, 6, 30, 30);
    view.defPosition("r19", 516, 6, 30, 30);
    view.defPosition("s19", 546, 6, 30, 30);
    view.defPosition("a18", 6, 36, 30, 30);
    view.defPosition("b18", 36, 36, 30, 30);
    view.defPosition("c18", 66, 36, 30, 30);
    view.defPosition("d18", 96, 36, 30, 30);
    view.defPosition("e18", 126, 36, 30, 30);
    view.defPosition("f18", 156, 36, 30, 30);
    view.defPosition("g18", 186, 36, 30, 30);
    view.defPosition("h18", 216, 36, 30, 30);
    view.defPosition("i18", 246, 36, 30, 30);
    view.defPosition("j18", 276, 36, 30, 30);
    view.defPosition("k18", 306, 36, 30, 30);
    view.defPosition("l18", 336, 36, 30, 30);
    view.defPosition("m18", 366, 36, 30, 30);
    view.defPosition("n18", 396, 36, 30, 30);
    view.defPosition("o18", 426, 36, 30, 30);
    view.defPosition("p18", 456, 36, 30, 30);
    view.defPosition("q18", 486, 36, 30, 30);
    view.defPosition("r18", 516, 36, 30, 30);
    view.defPosition("s18", 546, 36, 30, 30);
    view.defPosition("a17", 6, 66, 30, 30);
    view.defPosition("b17", 36, 66, 30, 30);
    view.defPosition("c17", 66, 66, 30, 30);
    view.defPosition("d17", 96, 66, 30, 30);
    view.defPosition("e17", 126, 66, 30, 30);
    view.defPosition("f17", 156, 66, 30, 30);
    view.defPosition("g17", 186, 66, 30, 30);
    view.defPosition("h17", 216, 66, 30, 30);
    view.defPosition("i17", 246, 66, 30, 30);
    view.defPosition("j17", 276, 66, 30, 30);
    view.defPosition("k17", 306, 66, 30, 30);
    view.defPosition("l17", 336, 66, 30, 30);
    view.defPosition("m17", 366, 66, 30, 30);
    view.defPosition("n17", 396, 66, 30, 30);
    view.defPosition("o17", 426, 66, 30, 30);
    view.defPosition("p17", 456, 66, 30, 30);
    view.defPosition("q17", 486, 66, 30, 30);
    view.defPosition("r17", 516, 66, 30, 30);
    view.defPosition("s17", 546, 66, 30, 30);
    view.defPosition("a16", 6, 96, 30, 30);
    view.defPosition("b16", 36, 96, 30, 30);
    view.defPosition("c16", 66, 96, 30, 30);
    view.defPosition("d16", 96, 96, 30, 30);
    view.defPosition("e16", 126, 96, 30, 30);
    view.defPosition("f16", 156, 96, 30, 30);
    view.defPosition("g16", 186, 96, 30, 30);
    view.defPosition("h16", 216, 96, 30, 30);
    view.defPosition("i16", 246, 96, 30, 30);
    view.defPosition("j16", 276, 96, 30, 30);
    view.defPosition("k16", 306, 96, 30, 30);
    view.defPosition("l16", 336, 96, 30, 30);
    view.defPosition("m16", 366, 96, 30, 30);
    view.defPosition("n16", 396, 96, 30, 30);
    view.defPosition("o16", 426, 96, 30, 30);
    view.defPosition("p16", 456, 96, 30, 30);
    view.defPosition("q16", 486, 96, 30, 30);
    view.defPosition("r16", 516, 96, 30, 30);
    view.defPosition("s16", 546, 96, 30, 30);
    view.defPosition("a15", 6, 126, 30, 30);
    view.defPosition("b15", 36, 126, 30, 30);
    view.defPosition("c15", 66, 126, 30, 30);
    view.defPosition("d15", 96, 126, 30, 30);
    view.defPosition("e15", 126, 126, 30, 30);
    view.defPosition("f15", 156, 126, 30, 30);
    view.defPosition("g15", 186, 126, 30, 30);
    view.defPosition("h15", 216, 126, 30, 30);
    view.defPosition("i15", 246, 126, 30, 30);
    view.defPosition("j15", 276, 126, 30, 30);
    view.defPosition("k15", 306, 126, 30, 30);
    view.defPosition("l15", 336, 126, 30, 30);
    view.defPosition("m15", 366, 126, 30, 30);
    view.defPosition("n15", 396, 126, 30, 30);
    view.defPosition("o15", 426, 126, 30, 30);
    view.defPosition("p15", 456, 126, 30, 30);
    view.defPosition("q15", 486, 126, 30, 30);
    view.defPosition("r15", 516, 126, 30, 30);
    view.defPosition("s15", 546, 126, 30, 30);
    view.defPosition("a14", 6, 156, 30, 30);
    view.defPosition("b14", 36, 156, 30, 30);
    view.defPosition("c14", 66, 156, 30, 30);
    view.defPosition("d14", 96, 156, 30, 30);
    view.defPosition("e14", 126, 156, 30, 30);
    view.defPosition("f14", 156, 156, 30, 30);
    view.defPosition("g14", 186, 156, 30, 30);
    view.defPosition("h14", 216, 156, 30, 30);
    view.defPosition("i14", 246, 156, 30, 30);
    view.defPosition("j14", 276, 156, 30, 30);
    view.defPosition("k14", 306, 156, 30, 30);
    view.defPosition("l14", 336, 156, 30, 30);
    view.defPosition("m14", 366, 156, 30, 30);
    view.defPosition("n14", 396, 156, 30, 30);
    view.defPosition("o14", 426, 156, 30, 30);
    view.defPosition("p14", 456, 156, 30, 30);
    view.defPosition("q14", 486, 156, 30, 30);
    view.defPosition("r14", 516, 156, 30, 30);
    view.defPosition("s14", 546, 156, 30, 30);
    view.defPosition("a13", 6, 186, 30, 30);
    view.defPosition("b13", 36, 186, 30, 30);
    view.defPosition("c13", 66, 186, 30, 30);
    view.defPosition("d13", 96, 186, 30, 30);
    view.defPosition("e13", 126, 186, 30, 30);
    view.defPosition("f13", 156, 186, 30, 30);
    view.defPosition("g13", 186, 186, 30, 30);
    view.defPosition("h13", 216, 186, 30, 30);
    view.defPosition("i13", 246, 186, 30, 30);
    view.defPosition("j13", 276, 186, 30, 30);
    view.defPosition("k13", 306, 186, 30, 30);
    view.defPosition("l13", 336, 186, 30, 30);
    view.defPosition("m13", 366, 186, 30, 30);
    view.defPosition("n13", 396, 186, 30, 30);
    view.defPosition("o13", 426, 186, 30, 30);
    view.defPosition("p13", 456, 186, 30, 30);
    view.defPosition("q13", 486, 186, 30, 30);
    view.defPosition("r13", 516, 186, 30, 30);
    view.defPosition("s13", 546, 186, 30, 30);
    view.defPosition("a12", 6, 216, 30, 30);
    view.defPosition("b12", 36, 216, 30, 30);
    view.defPosition("c12", 66, 216, 30, 30);
    view.defPosition("d12", 96, 216, 30, 30);
    view.defPosition("e12", 126, 216, 30, 30);
    view.defPosition("f12", 156, 216, 30, 30);
    view.defPosition("g12", 186, 216, 30, 30);
    view.defPosition("h12", 216, 216, 30, 30);
    view.defPosition("i12", 246, 216, 30, 30);
    view.defPosition("j12", 276, 216, 30, 30);
    view.defPosition("k12", 306, 216, 30, 30);
    view.defPosition("l12", 336, 216, 30, 30);
    view.defPosition("m12", 366, 216, 30, 30);
    view.defPosition("n12", 396, 216, 30, 30);
    view.defPosition("o12", 426, 216, 30, 30);
    view.defPosition("p12", 456, 216, 30, 30);
    view.defPosition("q12", 486, 216, 30, 30);
    view.defPosition("r12", 516, 216, 30, 30);
    view.defPosition("s12", 546, 216, 30, 30);
    view.defPosition("a11", 6, 246, 30, 30);
    view.defPosition("b11", 36, 246, 30, 30);
    view.defPosition("c11", 66, 246, 30, 30);
    view.defPosition("d11", 96, 246, 30, 30);
    view.defPosition("e11", 126, 246, 30, 30);
    view.defPosition("f11", 156, 246, 30, 30);
    view.defPosition("g11", 186, 246, 30, 30);
    view.defPosition("h11", 216, 246, 30, 30);
    view.defPosition("i11", 246, 246, 30, 30);
    view.defPosition("j11", 276, 246, 30, 30);
    view.defPosition("k11", 306, 246, 30, 30);
    view.defPosition("l11", 336, 246, 30, 30);
    view.defPosition("m11", 366, 246, 30, 30);
    view.defPosition("n11", 396, 246, 30, 30);
    view.defPosition("o11", 426, 246, 30, 30);
    view.defPosition("p11", 456, 246, 30, 30);
    view.defPosition("q11", 486, 246, 30, 30);
    view.defPosition("r11", 516, 246, 30, 30);
    view.defPosition("s11", 546, 246, 30, 30);
    view.defPosition("a10", 6, 276, 30, 30);
    view.defPosition("b10", 36, 276, 30, 30);
    view.defPosition("c10", 66, 276, 30, 30);
    view.defPosition("d10", 96, 276, 30, 30);
    view.defPosition("e10", 126, 276, 30, 30);
    view.defPosition("f10", 156, 276, 30, 30);
    view.defPosition("g10", 186, 276, 30, 30);
    view.defPosition("h10", 216, 276, 30, 30);
    view.defPosition("i10", 246, 276, 30, 30);
    view.defPosition("j10", 276, 276, 30, 30);
    view.defPosition("k10", 306, 276, 30, 30);
    view.defPosition("l10", 336, 276, 30, 30);
    view.defPosition("m10", 366, 276, 30, 30);
    view.defPosition("n10", 396, 276, 30, 30);
    view.defPosition("o10", 426, 276, 30, 30);
    view.defPosition("p10", 456, 276, 30, 30);
    view.defPosition("q10", 486, 276, 30, 30);
    view.defPosition("r10", 516, 276, 30, 30);
    view.defPosition("s10", 546, 276, 30, 30);
    view.defPosition("a9", 6, 306, 30, 30);
    view.defPosition("b9", 36, 306, 30, 30);
    view.defPosition("c9", 66, 306, 30, 30);
    view.defPosition("d9", 96, 306, 30, 30);
    view.defPosition("e9", 126, 306, 30, 30);
    view.defPosition("f9", 156, 306, 30, 30);
    view.defPosition("g9", 186, 306, 30, 30);
    view.defPosition("h9", 216, 306, 30, 30);
    view.defPosition("i9", 246, 306, 30, 30);
    view.defPosition("j9", 276, 306, 30, 30);
    view.defPosition("k9", 306, 306, 30, 30);
    view.defPosition("l9", 336, 306, 30, 30);
    view.defPosition("m9", 366, 306, 30, 30);
    view.defPosition("n9", 396, 306, 30, 30);
    view.defPosition("o9", 426, 306, 30, 30);
    view.defPosition("p9", 456, 306, 30, 30);
    view.defPosition("q9", 486, 306, 30, 30);
    view.defPosition("r9", 516, 306, 30, 30);
    view.defPosition("s9", 546, 306, 30, 30);
    view.defPosition("a8", 6, 336, 30, 30);
    view.defPosition("b8", 36, 336, 30, 30);
    view.defPosition("c8", 66, 336, 30, 30);
    view.defPosition("d8", 96, 336, 30, 30);
    view.defPosition("e8", 126, 336, 30, 30);
    view.defPosition("f8", 156, 336, 30, 30);
    view.defPosition("g8", 186, 336, 30, 30);
    view.defPosition("h8", 216, 336, 30, 30);
    view.defPosition("i8", 246, 336, 30, 30);
    view.defPosition("j8", 276, 336, 30, 30);
    view.defPosition("k8", 306, 336, 30, 30);
    view.defPosition("l8", 336, 336, 30, 30);
    view.defPosition("m8", 366, 336, 30, 30);
    view.defPosition("n8", 396, 336, 30, 30);
    view.defPosition("o8", 426, 336, 30, 30);
    view.defPosition("p8", 456, 336, 30, 30);
    view.defPosition("q8", 486, 336, 30, 30);
    view.defPosition("r8", 516, 336, 30, 30);
    view.defPosition("s8", 546, 336, 30, 30);
    view.defPosition("a7", 6, 366, 30, 30);
    view.defPosition("b7", 36, 366, 30, 30);
    view.defPosition("c7", 66, 366, 30, 30);
    view.defPosition("d7", 96, 366, 30, 30);
    view.defPosition("e7", 126, 366, 30, 30);
    view.defPosition("f7", 156, 366, 30, 30);
    view.defPosition("g7", 186, 366, 30, 30);
    view.defPosition("h7", 216, 366, 30, 30);
    view.defPosition("i7", 246, 366, 30, 30);
    view.defPosition("j7", 276, 366, 30, 30);
    view.defPosition("k7", 306, 366, 30, 30);
    view.defPosition("l7", 336, 366, 30, 30);
    view.defPosition("m7", 366, 366, 30, 30);
    view.defPosition("n7", 396, 366, 30, 30);
    view.defPosition("o7", 426, 366, 30, 30);
    view.defPosition("p7", 456, 366, 30, 30);
    view.defPosition("q7", 486, 366, 30, 30);
    view.defPosition("r7", 516, 366, 30, 30);
    view.defPosition("s7", 546, 366, 30, 30);
    view.defPosition("a6", 6, 396, 30, 30);
    view.defPosition("b6", 36, 396, 30, 30);
    view.defPosition("c6", 66, 396, 30, 30);
    view.defPosition("d6", 96, 396, 30, 30);
    view.defPosition("e6", 126, 396, 30, 30);
    view.defPosition("f6", 156, 396, 30, 30);
    view.defPosition("g6", 186, 396, 30, 30);
    view.defPosition("h6", 216, 396, 30, 30);
    view.defPosition("i6", 246, 396, 30, 30);
    view.defPosition("j6", 276, 396, 30, 30);
    view.defPosition("k6", 306, 396, 30, 30);
    view.defPosition("l6", 336, 396, 30, 30);
    view.defPosition("m6", 366, 396, 30, 30);
    view.defPosition("n6", 396, 396, 30, 30);
    view.defPosition("o6", 426, 396, 30, 30);
    view.defPosition("p6", 456, 396, 30, 30);
    view.defPosition("q6", 486, 396, 30, 30);
    view.defPosition("r6", 516, 396, 30, 30);
    view.defPosition("s6", 546, 396, 30, 30);
    view.defPosition("a5", 6, 426, 30, 30);
    view.defPosition("b5", 36, 426, 30, 30);
    view.defPosition("c5", 66, 426, 30, 30);
    view.defPosition("d5", 96, 426, 30, 30);
    view.defPosition("e5", 126, 426, 30, 30);
    view.defPosition("f5", 156, 426, 30, 30);
    view.defPosition("g5", 186, 426, 30, 30);
    view.defPosition("h5", 216, 426, 30, 30);
    view.defPosition("i5", 246, 426, 30, 30);
    view.defPosition("j5", 276, 426, 30, 30);
    view.defPosition("k5", 306, 426, 30, 30);
    view.defPosition("l5", 336, 426, 30, 30);
    view.defPosition("m5", 366, 426, 30, 30);
    view.defPosition("n5", 396, 426, 30, 30);
    view.defPosition("o5", 426, 426, 30, 30);
    view.defPosition("p5", 456, 426, 30, 30);
    view.defPosition("q5", 486, 426, 30, 30);
    view.defPosition("r5", 516, 426, 30, 30);
    view.defPosition("s5", 546, 426, 30, 30);
    view.defPosition("a4", 6, 456, 30, 30);
    view.defPosition("b4", 36, 456, 30, 30);
    view.defPosition("c4", 66, 456, 30, 30);
    view.defPosition("d4", 96, 456, 30, 30);
    view.defPosition("e4", 126, 456, 30, 30);
    view.defPosition("f4", 156, 456, 30, 30);
    view.defPosition("g4", 186, 456, 30, 30);
    view.defPosition("h4", 216, 456, 30, 30);
    view.defPosition("i4", 246, 456, 30, 30);
    view.defPosition("j4", 276, 456, 30, 30);
    view.defPosition("k4", 306, 456, 30, 30);
    view.defPosition("l4", 336, 456, 30, 30);
    view.defPosition("m4", 366, 456, 30, 30);
    view.defPosition("n4", 396, 456, 30, 30);
    view.defPosition("o4", 426, 456, 30, 30);
    view.defPosition("p4", 456, 456, 30, 30);
    view.defPosition("q4", 486, 456, 30, 30);
    view.defPosition("r4", 516, 456, 30, 30);
    view.defPosition("s4", 546, 456, 30, 30);
    view.defPosition("a3", 6, 486, 30, 30);
    view.defPosition("b3", 36, 486, 30, 30);
    view.defPosition("c3", 66, 486, 30, 30);
    view.defPosition("d3", 96, 486, 30, 30);
    view.defPosition("e3", 126, 486, 30, 30);
    view.defPosition("f3", 156, 486, 30, 30);
    view.defPosition("g3", 186, 486, 30, 30);
    view.defPosition("h3", 216, 486, 30, 30);
    view.defPosition("i3", 246, 486, 30, 30);
    view.defPosition("j3", 276, 486, 30, 30);
    view.defPosition("k3", 306, 486, 30, 30);
    view.defPosition("l3", 336, 486, 30, 30);
    view.defPosition("m3", 366, 486, 30, 30);
    view.defPosition("n3", 396, 486, 30, 30);
    view.defPosition("o3", 426, 486, 30, 30);
    view.defPosition("p3", 456, 486, 30, 30);
    view.defPosition("q3", 486, 486, 30, 30);
    view.defPosition("r3", 516, 486, 30, 30);
    view.defPosition("s3", 546, 486, 30, 30);
    view.defPosition("a2", 6, 516, 30, 30);
    view.defPosition("b2", 36, 516, 30, 30);
    view.defPosition("c2", 66, 516, 30, 30);
    view.defPosition("d2", 96, 516, 30, 30);
    view.defPosition("e2", 126, 516, 30, 30);
    view.defPosition("f2", 156, 516, 30, 30);
    view.defPosition("g2", 186, 516, 30, 30);
    view.defPosition("h2", 216, 516, 30, 30);
    view.defPosition("i2", 246, 516, 30, 30);
    view.defPosition("j2", 276, 516, 30, 30);
    view.defPosition("k2", 306, 516, 30, 30);
    view.defPosition("l2", 336, 516, 30, 30);
    view.defPosition("m2", 366, 516, 30, 30);
    view.defPosition("n2", 396, 516, 30, 30);
    view.defPosition("o2", 426, 516, 30, 30);
    view.defPosition("p2", 456, 516, 30, 30);
    view.defPosition("q2", 486, 516, 30, 30);
    view.defPosition("r2", 516, 516, 30, 30);
    view.defPosition("s2", 546, 516, 30, 30);
    view.defPosition("a1", 6, 546, 30, 30);
    view.defPosition("b1", 36, 546, 30, 30);
    view.defPosition("c1", 66, 546, 30, 30);
    view.defPosition("d1", 96, 546, 30, 30);
    view.defPosition("e1", 126, 546, 30, 30);
    view.defPosition("f1", 156, 546, 30, 30);
    view.defPosition("g1", 186, 546, 30, 30);
    view.defPosition("h1", 216, 546, 30, 30);
    view.defPosition("i1", 246, 546, 30, 30);
    view.defPosition("j1", 276, 546, 30, 30);
    view.defPosition("k1", 306, 546, 30, 30);
    view.defPosition("l1", 336, 546, 30, 30);
    view.defPosition("m1", 366, 546, 30, 30);
    view.defPosition("n1", 396, 546, 30, 30);
    view.defPosition("o1", 426, 546, 30, 30);
    view.defPosition("p1", 456, 546, 30, 30);
    view.defPosition("q1", 486, 546, 30, 30);
    view.defPosition("r1", 516, 546, 30, 30);
    view.defPosition("s1", 546, 546, 30, 30);
}
