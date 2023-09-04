Dagaz.Controller.persistense = "none";

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
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("shogi-extension", "true");
    design.checkVersion("shogi-promotion", "true");
    design.checkVersion("common-shogi-invariant", "true");
    design.checkVersion("yonin-shogi-invariant", "true");
    design.checkVersion("yonin-shogi-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("sr");
    design.addDirection("wr");
    design.addDirection("nr");
    design.addDirection("er");
    design.addDirection("nx");

    design.addPlayer("South", [1, 0, 4, 6, 2, 7, 3, 5, 8, 9, 10, 11, 12]);
    design.addPlayer("West", [4, 2, 0, 5, 1, 6, 7, 3, 9, 0, 1, 2, 12]);
    design.addPlayer("North", [1, 0, 4, 6, 2, 7, 3, 5, 10, 0, 1, 2, 12]);
    design.addPlayer("East", [2, 4, 1, 7, 0, 3, 5, 6, 11, 0, 1, 2, 12]);

    design.addPosition("x12", [0, 1, 15, 0, 0, 16, 0, 0, 0, 0, 46, 0, 0]);
    design.addPosition("y12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("o12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("a12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("b12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("c12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("d12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("e12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("f12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("g12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("h12", [-1, 1, 15, 0, 0, 16, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("i12", [-1, 0, 15, 0, 0, 0, 14, 0, 0, 0, 14, 14, 0]);
    design.addPosition("u12", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z12", [0, 1, 15, 0, 0, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t12", [-1, 0, 15, 0, 0, 0, 14, 0, 0, 0, 0, 12, 0]);
    design.addPosition("x11", [0, 1, 0, -14, -15, 0, 0, 0, 0, 0, -15, -15, 0]);
    design.addPosition("y11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("o11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("a11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("b11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("c11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("d11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("e11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("f11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("g11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("h11", [-1, 1, 0, -14, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("i11", [-1, 0, 0, 0, -15, 0, 0, -16, 0, 0, -15, -15, 0]);
    design.addPosition("u11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z11", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t11", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("y10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z10", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t10", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x9", [0, 1, 15, 0, 0, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y9", [-1, 0, 15, 0, 0, 0, 14, 0, 0, -1, -1, 0, 0]);
    design.addPosition("o9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 1, 15, 0, 0, 16, 0, 0, 150, -2, -22, 130, 121]);
    design.addPosition("b9", [-1, 1, 15, 0, 0, 16, 14, 0, 149, -3, -23, 129, 121]);
    design.addPosition("c9", [-1, 1, 15, 0, 0, 16, 14, 0, 148, -4, -24, 128, 121]);
    design.addPosition("d9", [-1, 1, 15, 0, 0, 16, 14, 0, 147, -5, -25, 127, 121]);
    design.addPosition("e9", [-1, 1, 15, 0, 0, 16, 14, 0, 146, -6, -26, 126, 121]);
    design.addPosition("f9", [-1, 1, 15, 0, 0, 16, 14, 0, 145, -7, -27, 125, 121]);
    design.addPosition("g9", [-1, 1, 15, 0, 0, 16, 14, 0, 144, -8, -28, 124, 121]);
    design.addPosition("h9", [-1, 1, 15, 0, 0, 16, 14, 0, 143, -9, -29, 123, 121]);
    design.addPosition("i9", [-1, 0, 15, 0, 0, 0, 14, 0, 142, -10, -30, 122, 0]);
    design.addPosition("u9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z9", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t9", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x8", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y8", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, 15, -14, -15, 16, 0, 0, 135, -17, -37, 115, -15]);
    design.addPosition("b8", [-1, 1, 15, -14, -15, 16, 14, -16, 134, -18, -38, 114, -15]);
    design.addPosition("c8", [-1, 1, 15, -14, -15, 16, 14, -16, 133, -19, -39, 113, -15]);
    design.addPosition("d8", [-1, 1, 15, -14, -15, 16, 14, -16, 132, -20, -40, 112, -15]);
    design.addPosition("e8", [-1, 1, 15, -14, -15, 16, 14, -16, 131, -21, -41, 111, -15]);
    design.addPosition("f8", [-1, 1, 15, -14, -15, 16, 14, -16, 130, -22, -42, 110, -15]);
    design.addPosition("g8", [-1, 1, 15, -14, -15, 16, 14, -16, 129, -23, -43, 109, -15]);
    design.addPosition("h8", [-1, 1, 15, -14, -15, 16, 14, -16, 128, -24, -44, 108, -15]);
    design.addPosition("i8", [-1, 0, 15, 0, -15, 0, 14, -16, 127, -25, -45, 107, -15]);
    design.addPosition("u8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z8", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t8", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x7", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y7", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 15, -14, -15, 16, 0, 0, 120, -32, -52, 100, -15]);
    design.addPosition("b7", [-1, 1, 15, -14, -15, 16, 14, -16, 119, -33, -53, 99, -15]);
    design.addPosition("c7", [-1, 1, 15, -14, -15, 16, 14, -16, 118, -34, -54, 98, -15]);
    design.addPosition("d7", [-1, 1, 15, -14, -15, 16, 14, -16, 117, -35, -55, 97, -15]);
    design.addPosition("e7", [-1, 1, 15, -14, -15, 16, 14, -16, 116, -36, -56, 96, -15]);
    design.addPosition("f7", [-1, 1, 15, -14, -15, 16, 14, -16, 115, -37, -57, 95, -15]);
    design.addPosition("g7", [-1, 1, 15, -14, -15, 16, 14, -16, 114, -38, -58, 94, -15]);
    design.addPosition("h7", [-1, 1, 15, -14, -15, 16, 14, -16, 113, -39, -59, 93, -15]);
    design.addPosition("i7", [-1, 0, 15, 0, -15, 0, 14, -16, 112, -40, -60, 92, -15]);
    design.addPosition("u7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z7", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t7", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x6", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y6", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 15, -14, -15, 16, 0, 0, 105, -47, -67, 85, -15]);
    design.addPosition("b6", [-1, 1, 15, -14, -15, 16, 14, -16, 104, -48, -68, 84, -15]);
    design.addPosition("c6", [-1, 1, 15, -14, -15, 16, 14, -16, 103, -49, -69, 83, -15]);
    design.addPosition("d6", [-1, 1, 15, -14, -15, 16, 14, -16, 102, -50, -70, 82, -15]);
    design.addPosition("e6", [-1, 1, 15, -14, -15, 16, 14, -16, 101, -51, -71, 81, -15]);
    design.addPosition("f6", [-1, 1, 15, -14, -15, 16, 14, -16, 100, -52, -72, 80, -15]);
    design.addPosition("g6", [-1, 1, 15, -14, -15, 16, 14, -16, 99, -53, -73, 79, -15]);
    design.addPosition("h6", [-1, 1, 15, -14, -15, 16, 14, -16, 98, -54, -74, 78, -15]);
    design.addPosition("i6", [-1, 0, 15, 0, -15, 0, 14, -16, 97, -55, -75, 77, -15]);
    design.addPosition("u6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z6", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t6", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x5", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y5", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 15, -14, -15, 16, 0, 0, 90, -62, -82, 70, -15]);
    design.addPosition("b5", [-1, 1, 15, -14, -15, 16, 14, -16, 89, -63, -83, 69, -15]);
    design.addPosition("c5", [-1, 1, 15, -14, -15, 16, 14, -16, 88, -64, -84, 68, -15]);
    design.addPosition("d5", [-1, 1, 15, -14, -15, 16, 14, -16, 87, -65, -85, 67, -15]);
    design.addPosition("e5", [-1, 1, 15, -14, -15, 16, 14, -16, 86, -66, -86, 66, -15]);
    design.addPosition("f5", [-1, 1, 15, -14, -15, 16, 14, -16, 85, -67, -87, 65, -15]);
    design.addPosition("g5", [-1, 1, 15, -14, -15, 16, 14, -16, 84, -68, -88, 64, -15]);
    design.addPosition("h5", [-1, 1, 15, -14, -15, 16, 14, -16, 83, -69, -89, 63, -15]);
    design.addPosition("i5", [-1, 0, 15, 0, -15, 0, 14, -16, 82, -70, -90, 62, -15]);
    design.addPosition("u5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z5", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t5", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x4", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y4", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 15, -14, -15, 16, 0, 0, 75, -77, -97, 55, -15]);
    design.addPosition("b4", [-1, 1, 15, -14, -15, 16, 14, -16, 74, -78, -98, 54, -15]);
    design.addPosition("c4", [-1, 1, 15, -14, -15, 16, 14, -16, 73, -79, -99, 53, -15]);
    design.addPosition("d4", [-1, 1, 15, -14, -15, 16, 14, -16, 72, -80, -100, 52, -15]);
    design.addPosition("e4", [-1, 1, 15, -14, -15, 16, 14, -16, 71, -81, -101, 51, -15]);
    design.addPosition("f4", [-1, 1, 15, -14, -15, 16, 14, -16, 70, -82, -102, 50, -15]);
    design.addPosition("g4", [-1, 1, 15, -14, -15, 16, 14, -16, 69, -83, -103, 49, -15]);
    design.addPosition("h4", [-1, 1, 15, -14, -15, 16, 14, -16, 68, -84, -104, 48, -15]);
    design.addPosition("i4", [-1, 0, 15, 0, -15, 0, 14, -16, 67, -85, -105, 47, -15]);
    design.addPosition("u4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z4", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t4", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x3", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y3", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 15, -14, -15, 16, 0, 0, 60, -92, -112, 40, -15]);
    design.addPosition("b3", [-1, 1, 15, -14, -15, 16, 14, -16, 59, -93, -113, 39, -15]);
    design.addPosition("c3", [-1, 1, 15, -14, -15, 16, 14, -16, 58, -94, -114, 38, -15]);
    design.addPosition("d3", [-1, 1, 15, -14, -15, 16, 14, -16, 57, -95, -115, 37, -15]);
    design.addPosition("e3", [-1, 1, 15, -14, -15, 16, 14, -16, 56, -96, -116, 36, -15]);
    design.addPosition("f3", [-1, 1, 15, -14, -15, 16, 14, -16, 55, -97, -117, 35, -15]);
    design.addPosition("g3", [-1, 1, 15, -14, -15, 16, 14, -16, 54, -98, -118, 34, -15]);
    design.addPosition("h3", [-1, 1, 15, -14, -15, 16, 14, -16, 53, -99, -119, 33, -15]);
    design.addPosition("i3", [-1, 0, 15, 0, -15, 0, 14, -16, 52, -100, -120, 32, -15]);
    design.addPosition("u3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z3", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t3", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x2", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y2", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 15, -14, -15, 16, 0, 0, 45, -107, -127, 25, -15]);
    design.addPosition("b2", [-1, 1, 15, -14, -15, 16, 14, -16, 44, -108, -128, 24, -15]);
    design.addPosition("c2", [-1, 1, 15, -14, -15, 16, 14, -16, 43, -109, -129, 23, -15]);
    design.addPosition("d2", [-1, 1, 15, -14, -15, 16, 14, -16, 42, -110, -130, 22, -15]);
    design.addPosition("e2", [-1, 1, 15, -14, -15, 16, 14, -16, 41, -111, -131, 21, -15]);
    design.addPosition("f2", [-1, 1, 15, -14, -15, 16, 14, -16, 40, -112, -132, 20, -15]);
    design.addPosition("g2", [-1, 1, 15, -14, -15, 16, 14, -16, 39, -113, -133, 19, -15]);
    design.addPosition("h2", [-1, 1, 15, -14, -15, 16, 14, -16, 38, -114, -134, 18, -15]);
    design.addPosition("i2", [-1, 0, 15, 0, -15, 0, 14, -16, 37, -115, -135, 17, -15]);
    design.addPosition("u2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z2", [0, 1, 15, -14, -15, 16, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t2", [-1, 0, 15, 0, -15, 0, 14, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x1", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y1", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -14, -15, 0, 0, 0, 30, -122, -142, 10, -15]);
    design.addPosition("b1", [-1, 1, 0, -14, -15, 0, 0, -16, 29, -123, -143, 9, -15]);
    design.addPosition("c1", [-1, 1, 0, -14, -15, 0, 0, -16, 28, -124, -144, 8, -15]);
    design.addPosition("d1", [-1, 1, 0, -14, -15, 0, 0, -16, 27, -125, -145, 7, -15]);
    design.addPosition("e1", [-1, 1, 0, -14, -15, 0, 0, -16, 26, -126, -146, 6, -15]);
    design.addPosition("f1", [-1, 1, 0, -14, -15, 0, 0, -16, 25, -127, -147, 5, -15]);
    design.addPosition("g1", [-1, 1, 0, -14, -15, 0, 0, -16, 24, -128, -148, 4, -15]);
    design.addPosition("h1", [-1, 1, 0, -14, -15, 0, 0, -16, 23, -129, -149, 3, -15]);
    design.addPosition("i1", [-1, 0, 0, 0, -15, 0, 0, -16, 22, -130, -150, 2, -15]);
    design.addPosition("u1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z1", [0, 1, 0, -14, -15, 0, 0, 0, 1, 0, 0, 1, 0]);
    design.addPosition("t1", [-1, 0, 0, 0, -15, 0, 0, -16, -16, 0, 0, -16, 0]);
    design.addPosition("x0", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y0", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("u0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("z0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("t0", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x13", [0, 1, 15, -14, -15, 16, 0, 0, 0, 16, 16, 0, 0]);
    design.addPosition("y13", [-1, 0, 15, 0, -15, 0, 14, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o13", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a13", [0, 1, 15, 0, 0, 16, 0, 0, 15, 15, 0, 0, 0]);
    design.addPosition("b13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("c13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("d13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("e13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("f13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("g13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("h13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("i13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("u13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("z13", [-1, 1, 15, 0, 0, 16, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("t13", [-1, 0, 15, 0, 0, 0, 14, 0, 15, 15, 0, 0, 0]);
    design.addPosition("x14", [0, 1, 0, -14, -15, 0, 0, 0, 0, -12, 0, 0, 0]);
    design.addPosition("y14", [-1, 0, 0, 0, -15, 0, 0, -16, 0, -1, -1, 0, 0]);
    design.addPosition("o14", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a14", [0, 1, 0, -14, -15, 0, 0, 0, -14, -14, 0, 0, 0]);
    design.addPosition("b14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("c14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("d14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("e14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("f14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("g14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("h14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("i14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("u14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("z14", [-1, 1, 0, -14, -15, 0, 0, -16, -14, -14, 0, 0, 0]);
    design.addPosition("t14", [-1, 0, 0, 0, -15, 0, 0, -16, -46, 0, 0, 0, 0]);
    design.addPosition("W1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 4, [168, 169, 170, 171, 172, 173, 174, 175, 176, 153, 154, 155, 156, 157, 158, 159, 160, 161, 138, 139, 140, 141, 142, 143, 144, 145, 146, 123, 124, 125, 126, 127, 128, 129, 130, 131, 108, 109, 110, 111, 112, 113, 114, 115, 116, 93, 94, 95, 96, 97, 98, 99, 100, 101, 78, 79, 80, 81, 82, 83, 84, 85, 86, 63, 64, 65, 66, 67, 68, 69, 70, 71, 48, 49, 50, 51, 52, 53, 54, 55, 56]);
    design.addZone("board-zone", 2, [168, 169, 170, 171, 172, 173, 174, 175, 176, 153, 154, 155, 156, 157, 158, 159, 160, 161, 138, 139, 140, 141, 142, 143, 144, 145, 146, 123, 124, 125, 126, 127, 128, 129, 130, 131, 108, 109, 110, 111, 112, 113, 114, 115, 116, 93, 94, 95, 96, 97, 98, 99, 100, 101, 78, 79, 80, 81, 82, 83, 84, 85, 86, 63, 64, 65, 66, 67, 68, 69, 70, 71, 48, 49, 50, 51, 52, 53, 54, 55, 56]);
    design.addZone("board-zone", 3, [168, 169, 170, 171, 172, 173, 174, 175, 176, 153, 154, 155, 156, 157, 158, 159, 160, 161, 138, 139, 140, 141, 142, 143, 144, 145, 146, 123, 124, 125, 126, 127, 128, 129, 130, 131, 108, 109, 110, 111, 112, 113, 114, 115, 116, 93, 94, 95, 96, 97, 98, 99, 100, 101, 78, 79, 80, 81, 82, 83, 84, 85, 86, 63, 64, 65, 66, 67, 68, 69, 70, 71, 48, 49, 50, 51, 52, 53, 54, 55, 56]);
    design.addZone("board-zone", 1, [168, 169, 170, 171, 172, 173, 174, 175, 176, 153, 154, 155, 156, 157, 158, 159, 160, 161, 138, 139, 140, 141, 142, 143, 144, 145, 146, 123, 124, 125, 126, 127, 128, 129, 130, 131, 108, 109, 110, 111, 112, 113, 114, 115, 116, 93, 94, 95, 96, 97, 98, 99, 100, 101, 78, 79, 80, 81, 82, 83, 84, 85, 86, 63, 64, 65, 66, 67, 68, 69, 70, 71, 48, 49, 50, 51, 52, 53, 54, 55, 56]);
    design.addZone("promotion-zone", 4, [168, 153, 138, 123, 108, 93, 78, 63, 48, 169, 154, 139, 124, 109, 94, 79, 64, 49, 170, 155, 140, 125, 110, 95, 80, 65, 50]);
    design.addZone("promotion-zone", 2, [174, 159, 144, 129, 114, 99, 84, 69, 54, 175, 160, 145, 130, 115, 100, 85, 70, 55, 176, 161, 146, 131, 116, 101, 86, 71, 56]);
    design.addZone("promotion-zone", 3, [168, 169, 170, 171, 172, 173, 174, 175, 176, 153, 154, 155, 156, 157, 158, 159, 160, 161, 138, 139, 140, 141, 142, 143, 144, 145, 146]);
    design.addZone("promotion-zone", 1, [48, 49, 50, 51, 52, 53, 54, 55, 56, 63, 64, 65, 66, 67, 68, 69, 70, 71, 78, 79, 80, 81, 82, 83, 84, 85, 86]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	12);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 1000);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [168, 12], 0);

    design.addPiece("Gold", 1, 24);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 1, [168, 12], 0);

    design.addPiece("Silver", 2, 20);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [168, 12], 0);

    design.addPiece("Knight", 3, 8);
    design.addMove(3, 2, [4, 7], 0);
    design.addMove(3, 2, [4, 3], 0);
    design.addMove(3, 1, [168, 12], 0);

    design.addPiece("Lance", 4, 32);
    design.addMove(4, 3, [4, 4], 0);
    design.addMove(4, 1, [168, 12], 0);

    design.addPiece("Bishop", 5, 192);
    design.addMove(5, 3, [7, 7], 0);
    design.addMove(5, 3, [5, 5], 0);
    design.addMove(5, 3, [6, 6], 0);
    design.addMove(5, 3, [3, 3], 0);
    design.addMove(5, 1, [168, 12], 0);

    design.addPiece("Rook", 6, 256);
    design.addMove(6, 3, [4, 4], 0);
    design.addMove(6, 3, [1, 1], 0);
    design.addMove(6, 3, [0, 0], 0);
    design.addMove(6, 3, [2, 2], 0);
    design.addMove(6, 1, [168, 12], 0);

    design.addPiece("Pawn", 7, 4);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 1, [168, 12], 0);

    design.addPiece("SilverP", 8, 24);
    design.addMove(8, 0, [4], 0);
    design.addMove(8, 0, [7], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("KnightP", 9, 24);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 0, [7], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("LanceP", 10, 24);
    design.addMove(10, 0, [4], 0);
    design.addMove(10, 0, [7], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("BishopP", 11, 240);
    design.addMove(11, 3, [7, 7], 0);
    design.addMove(11, 0, [4], 0);
    design.addMove(11, 3, [5, 5], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 3, [6, 6], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 3, [3, 3], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("RookP", 12, 320);
    design.addMove(12, 3, [4, 4], 0);
    design.addMove(12, 0, [7], 0);
    design.addMove(12, 3, [1, 1], 0);
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 3, [0, 0], 0);
    design.addMove(12, 0, [6], 0);
    design.addMove(12, 3, [2, 2], 0);
    design.addMove(12, 0, [5], 0);

    design.addPiece("PawnP", 13, 24);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [7], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.setup("South", "King", 172);
    design.setup("South", "Gold", 171);
    design.setup("South", "Gold", 173);
    design.setup("South", "Silver", 170);
    design.setup("South", "Silver", 174);
    design.setup("South", "Rook", 157);
    design.setup("South", "Pawn", 156);
    design.setup("South", "Pawn", 142);
    design.setup("South", "Pawn", 158);
    design.setup("West", "King", 108);
    design.setup("West", "Gold", 123);
    design.setup("West", "Gold", 93);
    design.setup("West", "Silver", 138);
    design.setup("West", "Silver", 78);
    design.setup("West", "Rook", 109);
    design.setup("West", "Pawn", 124);
    design.setup("West", "Pawn", 110);
    design.setup("West", "Pawn", 94);
    design.setup("North", "King", 52);
    design.setup("North", "Gold", 51);
    design.setup("North", "Gold", 53);
    design.setup("North", "Silver", 50);
    design.setup("North", "Silver", 54);
    design.setup("North", "Rook", 67);
    design.setup("North", "Pawn", 66);
    design.setup("North", "Pawn", 82);
    design.setup("North", "Pawn", 68);
    design.setup("East", "King", 116);
    design.setup("East", "Gold", 131);
    design.setup("East", "Gold", 101);
    design.setup("East", "Silver", 146);
    design.setup("East", "Silver", 86);
    design.setup("East", "Rook", 115);
    design.setup("East", "Pawn", 130);
    design.setup("East", "Pawn", 114);
    design.setup("East", "Pawn", 100);
}

Dagaz.View.configure = function(view) {
    view.defBoard("SouthBoard", 0, 0, undefined, [0]);
    view.defBoard("WestBoard", 0, 0, undefined, [1]);
    view.defBoard("NorthBoard", 0, 0, undefined, [2]);
    view.defBoard("EastBoard", 0, 0, undefined, [3]);
    view.defPiece("SouthKing", "South King");
    view.defPiece("WestKing", "West King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("EastKing", "East King");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("WestGold", "West Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("EastGold", "East Gold");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("WestSilver", "West Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("EastSilver", "East Silver");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("WestKnight", "West Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("EastKnight", "East Knight");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("WestLance", "West Lance");
    view.defPiece("NorthLance", "North Lance");
    view.defPiece("EastLance", "East Lance");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("WestBishop", "West Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("EastBishop", "East Bishop");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("WestRook", "West Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("EastRook", "East Rook");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("WestPawn", "West Pawn");
    view.defPiece("NorthPawn", "North Pawn");
    view.defPiece("EastPawn", "East Pawn");
    view.defPiece("SouthSilverP", "South SilverP");
    view.defPiece("WestSilverP", "West SilverP");
    view.defPiece("NorthSilverP", "North SilverP");
    view.defPiece("EastSilverP", "East SilverP");
    view.defPiece("SouthKnightP", "South KnightP");
    view.defPiece("WestKnightP", "West KnightP");
    view.defPiece("NorthKnightP", "North KnightP");
    view.defPiece("EastKnightP", "East KnightP");
    view.defPiece("SouthLanceP", "South LanceP");
    view.defPiece("WestLanceP", "West LanceP");
    view.defPiece("NorthLanceP", "North LanceP");
    view.defPiece("EastLanceP", "East LanceP");
    view.defPiece("SouthBishopP", "South BishopP");
    view.defPiece("WestBishopP", "West BishopP");
    view.defPiece("NorthBishopP", "North BishopP");
    view.defPiece("EastBishopP", "East BishopP");
    view.defPiece("SouthRookP", "South RookP");
    view.defPiece("WestRookP", "West RookP");
    view.defPiece("NorthRookP", "North RookP");
    view.defPiece("EastRookP", "East RookP");
    view.defPiece("SouthPawnP", "South PawnP");
    view.defPiece("WestPawnP", "West PawnP");
    view.defPiece("NorthPawnP", "North PawnP");
    view.defPiece("EastPawnP", "East PawnP");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("x12", 13, 13, 40, 45);
    view.defPosition("y12", 54, 13, 40, 45);
    view.defPosition("o12", 95, 13, 40, 45);
    view.defPosition("a12", 136, 13, 40, 45);
    view.defPosition("b12", 177, 13, 40, 45);
    view.defPosition("c12", 218, 13, 40, 45);
    view.defPosition("d12", 259, 13, 40, 45);
    view.defPosition("e12", 300, 13, 40, 45);
    view.defPosition("f12", 341, 13, 40, 45);
    view.defPosition("g12", 382, 13, 40, 45);
    view.defPosition("h12", 423, 13, 40, 45);
    view.defPosition("i12", 464, 13, 40, 45);
    view.defPosition("u12", 505, 13, 40, 45);
    view.defPosition("z12", 546, 13, 40, 45);
    view.defPosition("t12", 587, 13, 40, 45);
    view.defPosition("x11", 13, 54, 40, 45);
    view.defPosition("y11", 54, 54, 40, 45);
    view.defPosition("o11", 95, 54, 40, 45);
    view.defPosition("a11", 136, 54, 40, 45);
    view.defPosition("b11", 177, 54, 40, 45);
    view.defPosition("c11", 218, 54, 40, 45);
    view.defPosition("d11", 259, 54, 40, 45);
    view.defPosition("e11", 300, 54, 40, 45);
    view.defPosition("f11", 341, 54, 40, 45);
    view.defPosition("g11", 382, 54, 40, 45);
    view.defPosition("h11", 423, 54, 40, 45);
    view.defPosition("i11", 464, 54, 40, 45);
    view.defPosition("u11", 505, 54, 40, 45);
    view.defPosition("z11", 546, 54, 40, 45);
    view.defPosition("t11", 587, 54, 40, 45);
    view.defPosition("x10", 13, 95, 40, 45);
    view.defPosition("y10", 54, 95, 40, 45);
    view.defPosition("o10", 95, 95, 40, 45);
    view.defPosition("a10", 136, 95, 40, 45);
    view.defPosition("b10", 177, 95, 40, 45);
    view.defPosition("c10", 218, 95, 40, 45);
    view.defPosition("d10", 259, 95, 40, 45);
    view.defPosition("e10", 300, 95, 40, 45);
    view.defPosition("f10", 341, 95, 40, 45);
    view.defPosition("g10", 382, 95, 40, 45);
    view.defPosition("h10", 423, 95, 40, 45);
    view.defPosition("i10", 464, 95, 40, 45);
    view.defPosition("u10", 505, 95, 40, 45);
    view.defPosition("z10", 546, 95, 40, 45);
    view.defPosition("t10", 587, 95, 40, 45);
    view.defPosition("x9", 13, 136, 40, 45);
    view.defPosition("y9", 54, 136, 40, 45);
    view.defPosition("o9", 95, 136, 40, 45);
    view.defPosition("a9", 136, 136, 40, 45);
    view.defPosition("b9", 177, 136, 40, 45);
    view.defPosition("c9", 218, 136, 40, 45);
    view.defPosition("d9", 259, 136, 40, 45);
    view.defPosition("e9", 300, 136, 40, 45);
    view.defPosition("f9", 341, 136, 40, 45);
    view.defPosition("g9", 382, 136, 40, 45);
    view.defPosition("h9", 423, 136, 40, 45);
    view.defPosition("i9", 464, 136, 40, 45);
    view.defPosition("u9", 505, 136, 40, 45);
    view.defPosition("z9", 546, 136, 40, 45);
    view.defPosition("t9", 587, 136, 40, 45);
    view.defPosition("x8", 13, 177, 40, 45);
    view.defPosition("y8", 54, 177, 40, 45);
    view.defPosition("o8", 95, 177, 40, 45);
    view.defPosition("a8", 136, 177, 40, 45);
    view.defPosition("b8", 177, 177, 40, 45);
    view.defPosition("c8", 218, 177, 40, 45);
    view.defPosition("d8", 259, 177, 40, 45);
    view.defPosition("e8", 300, 177, 40, 45);
    view.defPosition("f8", 341, 177, 40, 45);
    view.defPosition("g8", 382, 177, 40, 45);
    view.defPosition("h8", 423, 177, 40, 45);
    view.defPosition("i8", 464, 177, 40, 45);
    view.defPosition("u8", 505, 177, 40, 45);
    view.defPosition("z8", 546, 177, 40, 45);
    view.defPosition("t8", 587, 177, 40, 45);
    view.defPosition("x7", 13, 218, 40, 45);
    view.defPosition("y7", 54, 218, 40, 45);
    view.defPosition("o7", 95, 218, 40, 45);
    view.defPosition("a7", 136, 218, 40, 45);
    view.defPosition("b7", 177, 218, 40, 45);
    view.defPosition("c7", 218, 218, 40, 45);
    view.defPosition("d7", 259, 218, 40, 45);
    view.defPosition("e7", 300, 218, 40, 45);
    view.defPosition("f7", 341, 218, 40, 45);
    view.defPosition("g7", 382, 218, 40, 45);
    view.defPosition("h7", 423, 218, 40, 45);
    view.defPosition("i7", 464, 218, 40, 45);
    view.defPosition("u7", 505, 218, 40, 45);
    view.defPosition("z7", 546, 218, 40, 45);
    view.defPosition("t7", 587, 218, 40, 45);
    view.defPosition("x6", 13, 259, 40, 45);
    view.defPosition("y6", 54, 259, 40, 45);
    view.defPosition("o6", 95, 259, 40, 45);
    view.defPosition("a6", 136, 259, 40, 45);
    view.defPosition("b6", 177, 259, 40, 45);
    view.defPosition("c6", 218, 259, 40, 45);
    view.defPosition("d6", 259, 259, 40, 45);
    view.defPosition("e6", 300, 259, 40, 45);
    view.defPosition("f6", 341, 259, 40, 45);
    view.defPosition("g6", 382, 259, 40, 45);
    view.defPosition("h6", 423, 259, 40, 45);
    view.defPosition("i6", 464, 259, 40, 45);
    view.defPosition("u6", 505, 259, 40, 45);
    view.defPosition("z6", 546, 259, 40, 45);
    view.defPosition("t6", 587, 259, 40, 45);
    view.defPosition("x5", 13, 300, 40, 45);
    view.defPosition("y5", 54, 300, 40, 45);
    view.defPosition("o5", 95, 300, 40, 45);
    view.defPosition("a5", 136, 300, 40, 45);
    view.defPosition("b5", 177, 300, 40, 45);
    view.defPosition("c5", 218, 300, 40, 45);
    view.defPosition("d5", 259, 300, 40, 45);
    view.defPosition("e5", 300, 300, 40, 45);
    view.defPosition("f5", 341, 300, 40, 45);
    view.defPosition("g5", 382, 300, 40, 45);
    view.defPosition("h5", 423, 300, 40, 45);
    view.defPosition("i5", 464, 300, 40, 45);
    view.defPosition("u5", 505, 300, 40, 45);
    view.defPosition("z5", 546, 300, 40, 45);
    view.defPosition("t5", 587, 300, 40, 45);
    view.defPosition("x4", 13, 341, 40, 45);
    view.defPosition("y4", 54, 341, 40, 45);
    view.defPosition("o4", 95, 341, 40, 45);
    view.defPosition("a4", 136, 341, 40, 45);
    view.defPosition("b4", 177, 341, 40, 45);
    view.defPosition("c4", 218, 341, 40, 45);
    view.defPosition("d4", 259, 341, 40, 45);
    view.defPosition("e4", 300, 341, 40, 45);
    view.defPosition("f4", 341, 341, 40, 45);
    view.defPosition("g4", 382, 341, 40, 45);
    view.defPosition("h4", 423, 341, 40, 45);
    view.defPosition("i4", 464, 341, 40, 45);
    view.defPosition("u4", 505, 341, 40, 45);
    view.defPosition("z4", 546, 341, 40, 45);
    view.defPosition("t4", 587, 341, 40, 45);
    view.defPosition("x3", 13, 382, 40, 45);
    view.defPosition("y3", 54, 382, 40, 45);
    view.defPosition("o3", 95, 382, 40, 45);
    view.defPosition("a3", 136, 382, 40, 45);
    view.defPosition("b3", 177, 382, 40, 45);
    view.defPosition("c3", 218, 382, 40, 45);
    view.defPosition("d3", 259, 382, 40, 45);
    view.defPosition("e3", 300, 382, 40, 45);
    view.defPosition("f3", 341, 382, 40, 45);
    view.defPosition("g3", 382, 382, 40, 45);
    view.defPosition("h3", 423, 382, 40, 45);
    view.defPosition("i3", 464, 382, 40, 45);
    view.defPosition("u3", 505, 382, 40, 45);
    view.defPosition("z3", 546, 382, 40, 45);
    view.defPosition("t3", 587, 382, 40, 45);
    view.defPosition("x2", 13, 423, 40, 45);
    view.defPosition("y2", 54, 423, 40, 45);
    view.defPosition("o2", 95, 423, 40, 45);
    view.defPosition("a2", 136, 423, 40, 45);
    view.defPosition("b2", 177, 423, 40, 45);
    view.defPosition("c2", 218, 423, 40, 45);
    view.defPosition("d2", 259, 423, 40, 45);
    view.defPosition("e2", 300, 423, 40, 45);
    view.defPosition("f2", 341, 423, 40, 45);
    view.defPosition("g2", 382, 423, 40, 45);
    view.defPosition("h2", 423, 423, 40, 45);
    view.defPosition("i2", 464, 423, 40, 45);
    view.defPosition("u2", 505, 423, 40, 45);
    view.defPosition("z2", 546, 423, 40, 45);
    view.defPosition("t2", 587, 423, 40, 45);
    view.defPosition("x1", 13, 464, 40, 45);
    view.defPosition("y1", 54, 464, 40, 45);
    view.defPosition("o1", 95, 464, 40, 45);
    view.defPosition("a1", 136, 464, 40, 45);
    view.defPosition("b1", 177, 464, 40, 45);
    view.defPosition("c1", 218, 464, 40, 45);
    view.defPosition("d1", 259, 464, 40, 45);
    view.defPosition("e1", 300, 464, 40, 45);
    view.defPosition("f1", 341, 464, 40, 45);
    view.defPosition("g1", 382, 464, 40, 45);
    view.defPosition("h1", 423, 464, 40, 45);
    view.defPosition("i1", 464, 464, 40, 45);
    view.defPosition("u1", 505, 464, 40, 45);
    view.defPosition("z1", 546, 464, 40, 45);
    view.defPosition("t1", 587, 464, 40, 45);
    view.defPosition("x0", 13, 505, 40, 45);
    view.defPosition("y0", 54, 505, 40, 45);
    view.defPosition("o0", 95, 505, 40, 45);
    view.defPosition("a0", 136, 505, 40, 45);
    view.defPosition("b0", 177, 505, 40, 45);
    view.defPosition("c0", 218, 505, 40, 45);
    view.defPosition("d0", 259, 505, 40, 45);
    view.defPosition("e0", 300, 505, 40, 45);
    view.defPosition("f0", 341, 505, 40, 45);
    view.defPosition("g0", 382, 505, 40, 45);
    view.defPosition("h0", 423, 505, 40, 45);
    view.defPosition("i0", 464, 505, 40, 45);
    view.defPosition("u0", 505, 505, 40, 45);
    view.defPosition("z0", 546, 505, 40, 45);
    view.defPosition("t0", 587, 505, 40, 45);
    view.defPosition("x13", 13, 546, 40, 45);
    view.defPosition("y13", 54, 546, 40, 45);
    view.defPosition("o13", 95, 546, 40, 45);
    view.defPosition("a13", 136, 546, 40, 45);
    view.defPosition("b13", 177, 546, 40, 45);
    view.defPosition("c13", 218, 546, 40, 45);
    view.defPosition("d13", 259, 546, 40, 45);
    view.defPosition("e13", 300, 546, 40, 45);
    view.defPosition("f13", 341, 546, 40, 45);
    view.defPosition("g13", 382, 546, 40, 45);
    view.defPosition("h13", 423, 546, 40, 45);
    view.defPosition("i13", 464, 546, 40, 45);
    view.defPosition("u13", 505, 546, 40, 45);
    view.defPosition("z13", 546, 546, 40, 45);
    view.defPosition("t13", 587, 546, 40, 45);
    view.defPosition("x14", 13, 587, 40, 45);
    view.defPosition("y14", 54, 587, 40, 45);
    view.defPosition("o14", 95, 587, 40, 45);
    view.defPosition("a14", 136, 587, 40, 45);
    view.defPosition("b14", 177, 587, 40, 45);
    view.defPosition("c14", 218, 587, 40, 45);
    view.defPosition("d14", 259, 587, 40, 45);
    view.defPosition("e14", 300, 587, 40, 45);
    view.defPosition("f14", 341, 587, 40, 45);
    view.defPosition("g14", 382, 587, 40, 45);
    view.defPosition("h14", 423, 587, 40, 45);
    view.defPosition("i14", 464, 587, 40, 45);
    view.defPosition("u14", 505, 587, 40, 45);
    view.defPosition("z14", 546, 587, 40, 45);
    view.defPosition("t14", 587, 587, 40, 45);

    view.defPopup("Promote", 269, 200);
    view.defPopupPosition("W1", 12, 15, 39, 39);
    view.defPopupPosition("W2", 52, 15, 39, 39);
}
