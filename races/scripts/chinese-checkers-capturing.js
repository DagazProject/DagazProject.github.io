Dagaz.Controller.persistense = "none";
Dagaz.View.MARK_R = 12;
Dagaz.View.CHECK_CANVAS = true;

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
    design.checkVersion("show-captures", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("e");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("w");  // 4
    design.addDirection("nw"); // 5
    design.addDirection("sb"); // 6
    design.addDirection("sg"); // 7
    design.addDirection("so"); // 8
    design.addDirection("sr"); // 9
    design.addDirection("sp"); // 10
    design.addDirection("sy"); // 11
    design.addDirection("nx"); // 12

    design.addPlayer("Blue", [5, 3, 4, 1, 2, 0, 6, 7, 8, 9, 10, 11, 12]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 11, 12]);
    design.addPlayer("Orange", [0, 1, 2, 3, 4, 5, 8, 7, 6, 9, 10, 11, 12]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 9, 7, 8, 6, 10, 11, 12]);
    design.addPlayer("Purple", [0, 1, 2, 3, 4, 5, 10, 7, 8, 9, 6, 11, 12]);
    design.addPlayer("Yellow", [0, 1, 2, 3, 4, 5, 11, 7, 8, 9, 10, 6, 12]);

    design.addPosition("a13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d13", [14, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("e13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("i13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("k13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m13", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d12", [14, 13, 1, -13, 0, 0, 0, 0, 0, 0, 0, 0, 15]);
    design.addPosition("e12", [14, 13, 0, 0, -1, -14, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("f12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("i12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("k12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m12", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d11", [14, 13, 1, -13, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e11", [14, 13, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("f11", [14, 13, 0, 0, -1, -14, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("g11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("i11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("k11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m11", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a10", [14, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("b10", [14, 13, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 13]);
    design.addPosition("c10", [14, 13, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 13]);
    design.addPosition("d10", [14, 13, 1, -13, -1, 0, 123, 78, -3, -39, 6, 87, 0]);
    design.addPosition("e10", [14, 13, 1, -13, -1, -14, 122, 77, -4, -40, 5, 86, 0]);
    design.addPosition("f10", [14, 13, 1, -13, -1, -14, 121, 76, -5, -41, 4, 85, 0]);
    design.addPosition("g10", [14, 13, 1, 0, -1, -14, 120, 75, -6, -42, 3, 84, 0]);
    design.addPosition("h10", [14, 13, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i10", [14, 13, 1, 0, -1, 0, 0, 0, 0, 0, 0, 0, 27]);
    design.addPosition("j10", [0, 13, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 13]);
    design.addPosition("k10", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l10", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m10", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a9", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b9", [14, 0, 1, -13, 0, -14, 0, 0, 0, 0, 0, 0, -12]);
    design.addPosition("c9", [14, 13, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, 13]);
    design.addPosition("d9", [14, 13, 1, -13, -1, -14, 110, 65, -16, -52, -7, 74, 0]);
    design.addPosition("e9", [14, 13, 1, -13, -1, -14, 109, 64, -17, -53, -8, 73, 0]);
    design.addPosition("f9", [14, 13, 1, -13, -1, -14, 108, 63, -18, -54, -9, 72, 0]);
    design.addPosition("g9", [14, 13, 1, -13, -1, -14, 107, 62, -19, -55, -10, 71, 0]);
    design.addPosition("h9", [14, 13, 1, -13, -1, -14, 106, 61, -20, -56, -11, 70, 0]);
    design.addPosition("i9", [14, 13, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, -14]);
    design.addPosition("j9", [0, 13, 0, -13, -1, -14, 0, 0, 0, 0, 0, 0, -14]);
    design.addPosition("k9", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l9", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m9", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c8", [14, 0, 1, -13, 0, -14, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [14, 13, 1, -13, -1, -14, 97, 52, -29, -65, -20, 61, 0]);
    design.addPosition("e8", [14, 13, 1, -13, -1, -14, 96, 51, -30, -66, -21, 60, 0]);
    design.addPosition("f8", [14, 13, 1, -13, -1, -14, 95, 50, -31, -67, -22, 59, 0]);
    design.addPosition("g8", [14, 13, 1, -13, -1, -14, 94, 49, -32, -68, -23, 58, 0]);
    design.addPosition("h8", [14, 13, 1, -13, -1, -14, 93, 48, -33, -69, -24, 57, 0]);
    design.addPosition("i8", [14, 13, 1, -13, -1, -14, 92, 47, -34, -70, -25, 56, 0]);
    design.addPosition("j8", [0, 13, 0, -13, -1, -14, 0, 0, 0, 0, 0, 0, -14]);
    design.addPosition("k8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d7", [14, 13, 1, -13, 0, -14, 84, 39, -42, -78, -33, 48, 0]);
    design.addPosition("e7", [14, 13, 1, -13, -1, -14, 83, 38, -43, -79, -34, 47, 0]);
    design.addPosition("f7", [14, 13, 1, -13, -1, -14, 82, 37, -44, -80, -35, 46, 0]);
    design.addPosition("g7", [14, 13, 1, -13, -1, -14, 81, 36, -45, -81, -36, 45, 0]);
    design.addPosition("h7", [14, 13, 1, -13, -1, -14, 80, 35, -46, -82, -37, 44, 0]);
    design.addPosition("i7", [14, 13, 1, -13, -1, -14, 79, 34, -47, -83, -38, 43, 0]);
    design.addPosition("j7", [14, 13, 0, -13, -1, -14, 78, 33, -48, -84, -39, 42, 0]);
    design.addPosition("k7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d6", [14, 13, 1, -13, 0, 0, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("e6", [14, 13, 1, -13, -1, -14, 70, 25, -56, -92, -47, 34, 0]);
    design.addPosition("f6", [14, 13, 1, -13, -1, -14, 69, 24, -57, -93, -48, 33, 0]);
    design.addPosition("g6", [14, 13, 1, -13, -1, -14, 68, 23, -58, -94, -49, 32, 0]);
    design.addPosition("h6", [14, 13, 1, -13, -1, -14, 67, 22, -59, -95, -50, 31, 0]);
    design.addPosition("i6", [14, 13, 1, -13, -1, -14, 66, 21, -60, -96, -51, 30, 0]);
    design.addPosition("j6", [14, 13, 1, -13, -1, -14, 65, 20, -61, -97, -52, 29, 0]);
    design.addPosition("k6", [14, 13, 0, 0, -1, -14, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d5", [14, 13, 1, -13, 0, 0, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("e5", [14, 13, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("f5", [14, 13, 1, -13, -1, -14, 56, 11, -70, -106, -61, 20, 0]);
    design.addPosition("g5", [14, 13, 1, -13, -1, -14, 55, 10, -71, -107, -62, 19, 0]);
    design.addPosition("h5", [14, 13, 1, -13, -1, -14, 54, 9, -72, -108, -63, 18, 0]);
    design.addPosition("i5", [14, 13, 1, -13, -1, -14, 53, 8, -73, -109, -64, 17, 0]);
    design.addPosition("j5", [14, 13, 1, -13, -1, -14, 52, 7, -74, -110, -65, 16, 0]);
    design.addPosition("k5", [14, 13, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, -13]);
    design.addPosition("l5", [14, 13, 0, 0, -1, -14, 0, 0, 0, 0, 0, 0, 12]);
    design.addPosition("m5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d4", [0, 0, 1, -13, 0, 0, 0, 0, 0, 0, 0, 0, -13]);
    design.addPosition("e4", [0, 0, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, -27]);
    design.addPosition("f4", [0, 0, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g4", [14, 0, 1, -13, -1, -14, 42, -3, -84, -120, -75, 6, 0]);
    design.addPosition("h4", [14, 13, 1, -13, -1, -14, 41, -4, -85, -121, -76, 5, 0]);
    design.addPosition("i4", [14, 13, 1, -13, -1, -14, 40, -5, -86, -122, -77, 4, 0]);
    design.addPosition("j4", [0, 13, 1, -13, -1, -14, 39, -6, -87, -123, -78, 3, 0]);
    design.addPosition("k4", [0, 0, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, -13]);
    design.addPosition("l4", [0, 0, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, -13]);
    design.addPosition("m4", [0, 0, 0, 0, -1, -14, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("a3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("e3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h3", [14, 0, 1, -13, 0, -14, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("i3", [14, 13, 1, -13, -1, -14, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("j3", [0, 13, 0, -13, -1, -14, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("e2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("i2", [14, 0, 1, -13, 0, -14, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("j2", [0, 13, 0, -13, -1, -14, 0, 0, 0, 0, 0, 0, -15]);
    design.addPosition("k2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("a1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("e1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("i1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j1", [0, 0, 0, -13, 0, -14, 0, 0, 0, 0, 0, 0, -14]);
    design.addPosition("k1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    design.addZone("board-zone", 4, [124, 111, 98, 125, 112, 126, 95, 96, 97, 109, 110, 123, 81, 82, 83, 68, 69, 55, 42, 43, 44, 56, 57, 70, 71, 72, 73, 58, 59, 45, 85, 86, 87, 99, 100, 113, 84]);
    design.addZone("board-zone", 5, [124, 111, 98, 125, 112, 126, 95, 96, 97, 109, 110, 123, 81, 82, 83, 68, 69, 55, 42, 43, 44, 56, 57, 70, 71, 72, 73, 58, 59, 45, 85, 86, 87, 99, 100, 113, 84]);
    design.addZone("board-zone", 6, [124, 111, 98, 125, 112, 126, 95, 96, 97, 109, 110, 123, 81, 82, 83, 68, 69, 55, 42, 43, 44, 56, 57, 70, 71, 72, 73, 58, 59, 45, 85, 86, 87, 99, 100, 113, 84]);
    design.addZone("board-zone", 1, [124, 111, 98, 125, 112, 126, 95, 96, 97, 109, 110, 123, 81, 82, 83, 68, 69, 55, 42, 43, 44, 56, 57, 70, 71, 72, 73, 58, 59, 45, 85, 86, 87, 99, 100, 113, 84]);
    design.addZone("board-zone", 3, [124, 111, 98, 125, 112, 126, 95, 96, 97, 109, 110, 123, 81, 82, 83, 68, 69, 55, 42, 43, 44, 56, 57, 70, 71, 72, 73, 58, 59, 45, 85, 86, 87, 99, 100, 113, 84]);
    design.addZone("board-zone", 2, [124, 111, 98, 125, 112, 126, 95, 96, 97, 109, 110, 123, 81, 82, 83, 68, 69, 55, 42, 43, 44, 56, 57, 70, 71, 72, 73, 58, 59, 45, 85, 86, 87, 99, 100, 113, 84]);
    design.addZone("home-zone", 4, [29, 30, 31, 16, 17, 3]);
    design.addZone("home-zone", 5, [46, 47, 48, 60, 61, 74]);
    design.addZone("home-zone", 6, [127, 128, 129, 114, 115, 101]);
    design.addZone("home-zone", 1, [165, 151, 152, 137, 138, 139]);
    design.addZone("home-zone", 3, [67, 53, 54, 39, 40, 41]);
    design.addZone("home-zone", 2, [120, 121, 122, 107, 108, 94]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [4, 4], 0);

    design.addPiece("Dead", 1);

    design.setup("Red", "Man", 42);
    design.setup("Red", "Man", 43);
    design.setup("Red", "Man", 44);
    design.setup("Red", "Man", 56);
    design.setup("Red", "Man", 57);
    design.setup("Red", "Man", 70);
    design.setup("Purple", "Man", 71);
    design.setup("Purple", "Man", 72);
    design.setup("Purple", "Man", 73);
    design.setup("Purple", "Man", 58);
    design.setup("Purple", "Man", 59);
    design.setup("Purple", "Man", 45);
    design.setup("Yellow", "Man", 85);
    design.setup("Yellow", "Man", 86);
    design.setup("Yellow", "Man", 87);
    design.setup("Yellow", "Man", 99);
    design.setup("Yellow", "Man", 100);
    design.setup("Yellow", "Man", 113);
    design.setup("Blue", "Man", 124);
    design.setup("Blue", "Man", 111);
    design.setup("Blue", "Man", 98);
    design.setup("Blue", "Man", 125);
    design.setup("Blue", "Man", 112);
    design.setup("Blue", "Man", 126);
    design.setup("Green", "Man", 95);
    design.setup("Green", "Man", 96);
    design.setup("Green", "Man", 97);
    design.setup("Green", "Man", 109);
    design.setup("Green", "Man", 110);
    design.setup("Green", "Man", 123);
    design.setup("Orange", "Man", 81);
    design.setup("Orange", "Man", 82);
    design.setup("Orange", "Man", 83);
    design.setup("Orange", "Man", 68);
    design.setup("Orange", "Man", 69);
    design.setup("Orange", "Man", 55);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedMan", "Red Man");
    view.defPiece("PurpleMan", "Purple Man");
    view.defPiece("YellowMan", "Yellow Man");
    view.defPiece("BlueMan", "Blue Man");
    view.defPiece("GreenMan", "Green Man");
    view.defPiece("OrangeMan", "Orange Man");
    view.defPiece("RedDead", "Red Dead");
    view.defPiece("PurpleDead", "Purple Dead");
    view.defPiece("YellowDead", "Yellow Dead");
    view.defPiece("BlueDead", "Blue Dead");
    view.defPiece("GreenDead", "Green Dead");
    view.defPiece("OrangeDead", "Orange Dead");
 
    view.defPosition("a13", 88, 8, 30, 30);
    view.defPosition("b13", 138, 8, 30, 30);
    view.defPosition("c13", 188, 8, 30, 30);
    view.defPosition("d13", 238, 8, 30, 30);
    view.defPosition("e13", 288, 8, 30, 30);
    view.defPosition("f13", 338, 8, 30, 30);
    view.defPosition("g13", 388, 8, 30, 30);
    view.defPosition("h13", 438, 8, 30, 30);
    view.defPosition("i13", 488, 8, 30, 30);
    view.defPosition("j13", 538, 8, 30, 30);
    view.defPosition("k13", 588, 8, 30, 30);
    view.defPosition("l13", 638, 8, 30, 30);
    view.defPosition("m13", 688, 8, 30, 30);
    view.defPosition("a12", 63, 52, 30, 30);
    view.defPosition("b12", 113, 52, 30, 30);
    view.defPosition("c12", 163, 52, 30, 30);
    view.defPosition("d12", 213, 52, 30, 30);
    view.defPosition("e12", 263, 52, 30, 30);
    view.defPosition("f12", 313, 52, 30, 30);
    view.defPosition("g12", 363, 52, 30, 30);
    view.defPosition("h12", 413, 52, 30, 30);
    view.defPosition("i12", 463, 52, 30, 30);
    view.defPosition("j12", 513, 52, 30, 30);
    view.defPosition("k12", 563, 52, 30, 30);
    view.defPosition("l12", 613, 52, 30, 30);
    view.defPosition("m12", 663, 52, 30, 30);
    view.defPosition("a11", 38, 96, 30, 30);
    view.defPosition("b11", 88, 96, 30, 30);
    view.defPosition("c11", 138, 96, 30, 30);
    view.defPosition("d11", 188, 96, 30, 30);
    view.defPosition("e11", 238, 96, 30, 30);
    view.defPosition("f11", 288, 96, 30, 30);
    view.defPosition("g11", 338, 96, 30, 30);
    view.defPosition("h11", 388, 96, 30, 30);
    view.defPosition("i11", 438, 96, 30, 30);
    view.defPosition("j11", 488, 96, 30, 30);
    view.defPosition("k11", 538, 96, 30, 30);
    view.defPosition("l11", 588, 96, 30, 30);
    view.defPosition("m11", 638, 96, 30, 30);
    view.defPosition("a10", 13, 140, 30, 30);
    view.defPosition("b10", 63, 140, 30, 30);
    view.defPosition("c10", 113, 140, 30, 30);
    view.defPosition("d10", 163, 140, 30, 30);
    view.defPosition("e10", 213, 140, 30, 30);
    view.defPosition("f10", 263, 140, 30, 30);
    view.defPosition("g10", 313, 140, 30, 30);
    view.defPosition("h10", 363, 140, 30, 30);
    view.defPosition("i10", 413, 140, 30, 30);
    view.defPosition("j10", 463, 140, 30, 30);
    view.defPosition("k10", 513, 140, 30, 30);
    view.defPosition("l10", 563, 140, 30, 30);
    view.defPosition("m10", 613, 140, 30, 30);
    view.defPosition("a9", -12, 184, 30, 30);
    view.defPosition("b9", 38, 184, 30, 30);
    view.defPosition("c9", 88, 184, 30, 30);
    view.defPosition("d9", 138, 184, 30, 30);
    view.defPosition("e9", 188, 184, 30, 30);
    view.defPosition("f9", 238, 184, 30, 30);
    view.defPosition("g9", 288, 184, 30, 30);
    view.defPosition("h9", 338, 184, 30, 30);
    view.defPosition("i9", 388, 184, 30, 30);
    view.defPosition("j9", 438, 184, 30, 30);
    view.defPosition("k9", 488, 184, 30, 30);
    view.defPosition("l9", 538, 184, 30, 30);
    view.defPosition("m9", 588, 184, 30, 30);
    view.defPosition("a8", -37, 228, 30, 30);
    view.defPosition("b8", 13, 228, 30, 30);
    view.defPosition("c8", 63, 228, 30, 30);
    view.defPosition("d8", 113, 228, 30, 30);
    view.defPosition("e8", 163, 228, 30, 30);
    view.defPosition("f8", 213, 228, 30, 30);
    view.defPosition("g8", 263, 228, 30, 30);
    view.defPosition("h8", 313, 228, 30, 30);
    view.defPosition("i8", 363, 228, 30, 30);
    view.defPosition("j8", 413, 228, 30, 30);
    view.defPosition("k8", 463, 228, 30, 30);
    view.defPosition("l8", 513, 228, 30, 30);
    view.defPosition("m8", 563, 228, 30, 30);
    view.defPosition("a7", -62, 272, 30, 30);
    view.defPosition("b7", -12, 272, 30, 30);
    view.defPosition("c7", 38, 272, 30, 30);
    view.defPosition("d7", 88, 272, 30, 30);
    view.defPosition("e7", 138, 272, 30, 30);
    view.defPosition("f7", 188, 272, 30, 30);
    view.defPosition("g7", 238, 272, 30, 30);
    view.defPosition("h7", 288, 272, 30, 30);
    view.defPosition("i7", 338, 272, 30, 30);
    view.defPosition("j7", 388, 272, 30, 30);
    view.defPosition("k7", 438, 272, 30, 30);
    view.defPosition("l7", 488, 272, 30, 30);
    view.defPosition("m7", 538, 272, 30, 30);
    view.defPosition("a6", -87, 316, 30, 30);
    view.defPosition("b6", -37, 316, 30, 30);
    view.defPosition("c6", 13, 316, 30, 30);
    view.defPosition("d6", 63, 316, 30, 30);
    view.defPosition("e6", 113, 316, 30, 30);
    view.defPosition("f6", 163, 316, 30, 30);
    view.defPosition("g6", 213, 316, 30, 30);
    view.defPosition("h6", 263, 316, 30, 30);
    view.defPosition("i6", 313, 316, 30, 30);
    view.defPosition("j6", 363, 316, 30, 30);
    view.defPosition("k6", 413, 316, 30, 30);
    view.defPosition("l6", 463, 316, 30, 30);
    view.defPosition("m6", 513, 316, 30, 30);
    view.defPosition("a5", -112, 360, 30, 30);
    view.defPosition("b5", -62, 360, 30, 30);
    view.defPosition("c5", -12, 360, 30, 30);
    view.defPosition("d5", 38, 360, 30, 30);
    view.defPosition("e5", 88, 360, 30, 30);
    view.defPosition("f5", 138, 360, 30, 30);
    view.defPosition("g5", 188, 360, 30, 30);
    view.defPosition("h5", 238, 360, 30, 30);
    view.defPosition("i5", 288, 360, 30, 30);
    view.defPosition("j5", 338, 360, 30, 30);
    view.defPosition("k5", 388, 360, 30, 30);
    view.defPosition("l5", 438, 360, 30, 30);
    view.defPosition("m5", 488, 360, 30, 30);
    view.defPosition("a4", -137, 404, 30, 30);
    view.defPosition("b4", -87, 404, 30, 30);
    view.defPosition("c4", -37, 404, 30, 30);
    view.defPosition("d4", 13, 404, 30, 30);
    view.defPosition("e4", 63, 404, 30, 30);
    view.defPosition("f4", 113, 404, 30, 30);
    view.defPosition("g4", 163, 404, 30, 30);
    view.defPosition("h4", 213, 404, 30, 30);
    view.defPosition("i4", 263, 404, 30, 30);
    view.defPosition("j4", 313, 404, 30, 30);
    view.defPosition("k4", 363, 404, 30, 30);
    view.defPosition("l4", 413, 404, 30, 30);
    view.defPosition("m4", 463, 404, 30, 30);
    view.defPosition("a3", -162, 448, 30, 30);
    view.defPosition("b3", -112, 448, 30, 30);
    view.defPosition("c3", -62, 448, 30, 30);
    view.defPosition("d3", -12, 448, 30, 30);
    view.defPosition("e3", 38, 448, 30, 30);
    view.defPosition("f3", 88, 448, 30, 30);
    view.defPosition("g3", 138, 448, 30, 30);
    view.defPosition("h3", 188, 448, 30, 30);
    view.defPosition("i3", 238, 448, 30, 30);
    view.defPosition("j3", 288, 448, 30, 30);
    view.defPosition("k3", 338, 448, 30, 30);
    view.defPosition("l3", 388, 448, 30, 30);
    view.defPosition("m3", 438, 448, 30, 30);
    view.defPosition("a2", -187, 492, 30, 30);
    view.defPosition("b2", -137, 492, 30, 30);
    view.defPosition("c2", -87, 492, 30, 30);
    view.defPosition("d2", -37, 492, 30, 30);
    view.defPosition("e2", 13, 492, 30, 30);
    view.defPosition("f2", 63, 492, 30, 30);
    view.defPosition("g2", 113, 492, 30, 30);
    view.defPosition("h2", 163, 492, 30, 30);
    view.defPosition("i2", 213, 492, 30, 30);
    view.defPosition("j2", 263, 492, 30, 30);
    view.defPosition("k2", 313, 492, 30, 30);
    view.defPosition("l2", 363, 492, 30, 30);
    view.defPosition("m2", 413, 492, 30, 30);
    view.defPosition("a1", -212, 536, 30, 30);
    view.defPosition("b1", -162, 536, 30, 30);
    view.defPosition("c1", -112, 536, 30, 30);
    view.defPosition("d1", -62, 536, 30, 30);
    view.defPosition("e1", -12, 536, 30, 30);
    view.defPosition("f1", 38, 536, 30, 30);
    view.defPosition("g1", 88, 536, 30, 30);
    view.defPosition("h1", 138, 536, 30, 30);
    view.defPosition("i1", 188, 536, 30, 30);
    view.defPosition("j1", 238, 536, 30, 30);
    view.defPosition("k1", 288, 536, 30, 30);
    view.defPosition("l1", 338, 536, 30, 30);
    view.defPosition("m1", 388, 536, 30, 30);
}
