Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;
Dagaz.Model.showLose = true;

Dagaz.Model.WIDTH  = 12;
Dagaz.Model.HEIGHT = 12;

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

    design.addPosition("a12", [13, 12, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("c12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("d12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("e12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("f12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("g12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("h12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("i12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("j12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("k12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a9", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l9", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a8", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l4", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l3", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l2", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("l1", [0, 0, 0, 0, -1, 0, -13, -12]);
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

    design.addZone("promotion-zone", 1, [77, 78, 65, 66]);
    design.addZone("promotion-zone", 2, [77, 78, 65, 66]);
    design.addZone("white-zone", 1, [52, 91]);
    design.addZone("white-zone", 2, [52, 91]);
    design.addZone("black-zone", 1, [88, 55]);
    design.addZone("black-zone", 2, [88, 55]);
    design.addZone("pink-zone", 1, [53, 90]);
    design.addZone("pink-zone", 2, [53, 90]);
    design.addZone("red-zone", 1, [40, 103]);
    design.addZone("red-zone", 2, [40, 103]);
    design.addZone("orange-zone", 1, [51, 92]);
    design.addZone("orange-zone", 2, [51, 92]);
    design.addZone("yellow-zone", 1, [64, 79]);
    design.addZone("yellow-zone", 2, [64, 79]);
    design.addZone("green-zone", 1, [76, 67]);
    design.addZone("green-zone", 2, [76, 67]);
    design.addZone("cyan-zone", 1, [87, 56]);
    design.addZone("cyan-zone", 2, [87, 56]);
    design.addZone("navy-zone", 1, [100, 43]);
    design.addZone("navy-zone", 2, [100, 43]);
    design.addZone("violet-zone", 1, [89, 54]);
    design.addZone("violet-zone", 2, [89, 54]);
    design.addZone("ash-zone", 1, []);
    design.addZone("ash-zone", 2, []);
    design.addZone("slate-zone", 1, []);
    design.addZone("slate-zone", 2, []);
    design.addZone("v-zone", 1, [137, 138, 125, 126, 113, 114, 101, 102, 89, 90, 53, 54, 41, 42, 29, 30, 17, 18, 5, 6]);
    design.addZone("v-zone", 2, [137, 138, 125, 126, 113, 114, 101, 102, 89, 90, 53, 54, 41, 42, 29, 30, 17, 18, 5, 6]);
    design.addZone("h-zone", 1, [72, 60, 73, 61, 74, 62, 75, 63, 76, 64, 79, 67, 80, 68, 81, 69, 82, 70, 83, 71]);
    design.addZone("h-zone", 2, [72, 60, 73, 61, 74, 62, 75, 63, 76, 64, 79, 67, 80, 68, 81, 69, 82, 70, 83, 71]);
    design.addZone("sw-zone", 1, [132, 133, 134, 135, 136, 137, 120, 121, 122, 123, 124, 125, 108, 109, 110, 111, 112, 113, 96, 97, 98, 99, 100, 101, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77]);
    design.addZone("sw-zone", 2, [132, 133, 134, 135, 136, 137, 120, 121, 122, 123, 124, 125, 108, 109, 110, 111, 112, 113, 96, 97, 98, 99, 100, 101, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77]);
    design.addZone("nw-zone", 1, [60, 61, 62, 63, 64, 65, 48, 49, 50, 51, 52, 53, 36, 37, 38, 39, 40, 41, 24, 25, 26, 27, 28, 29, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5]);
    design.addZone("nw-zone", 2, [60, 61, 62, 63, 64, 65, 48, 49, 50, 51, 52, 53, 36, 37, 38, 39, 40, 41, 24, 25, 26, 27, 28, 29, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5]);
    design.addZone("ne-zone", 1, [66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 42, 43, 44, 45, 46, 47, 30, 31, 32, 33, 34, 35, 18, 19, 20, 21, 22, 23, 6, 7, 8, 9, 10, 11]);
    design.addZone("ne-zone", 2, [66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 42, 43, 44, 45, 46, 47, 30, 31, 32, 33, 34, 35, 18, 19, 20, 21, 22, 23, 6, 7, 8, 9, 10, 11]);
    design.addZone("se-zone", 1, [138, 139, 140, 141, 142, 143, 126, 127, 128, 129, 130, 131, 114, 115, 116, 117, 118, 119, 102, 103, 104, 105, 106, 107, 90, 91, 92, 93, 94, 95, 78, 79, 80, 81, 82, 83]);
    design.addZone("se-zone", 2, [138, 139, 140, 141, 142, 143, 126, 127, 128, 129, 130, 131, 114, 115, 116, 117, 118, 119, 102, 103, 104, 105, 106, 107, 90, 91, 92, 93, 94, 95, 78, 79, 80, 81, 82, 83]);
    design.addZone("n-zone", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
    design.addZone("n-zone", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
    design.addZone("e-zone", 1, [142, 130, 118, 106, 94, 82, 70, 58, 46, 34, 22, 10, 143, 131, 119, 107, 95, 83, 71, 59, 47, 35, 23, 11]);
    design.addZone("e-zone", 2, [142, 130, 118, 106, 94, 82, 70, 58, 46, 34, 22, 10, 143, 131, 119, 107, 95, 83, 71, 59, 47, 35, 23, 11]);
    design.addZone("w-zone", 1, [132, 120, 108, 96, 84, 72, 60, 48, 36, 24, 12, 0, 133, 121, 109, 97, 85, 73, 61, 49, 37, 25, 13, 1]);
    design.addZone("w-zone", 2, [132, 120, 108, 96, 84, 72, 60, 48, 36, 24, 12, 0, 133, 121, 109, 97, 85, 73, 61, 49, 37, 25, 13, 1]);
    design.addZone("s-zone", 1, [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131]);
    design.addZone("s-zone", 2, [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131]);

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
    design.addMove(1, 6, [7, 7, 7, 7, 7, 7], 0);
    design.addMove(1, 6, [3, 3, 3, 3, 3, 3], 0);
    design.addMove(1, 6, [4, 4, 4, 4, 4, 4], 0);
    design.addMove(1, 6, [1, 1, 1, 1, 1, 1], 0);

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
    design.addMove(3, 6, [6, 6, 6, 6, 6, 6], 0);
    design.addMove(3, 6, [5, 5, 5, 5, 5, 5], 0);
    design.addMove(3, 6, [2, 2, 2, 2, 2, 2], 0);
    design.addMove(3, 6, [0, 0, 0, 0, 0, 0], 0);

    design.addPiece("Queen", 4);
    design.addMove(4, 6, [7, 7, 7, 7, 7, 7], 0);
    design.addMove(4, 6, [3, 3, 3, 3, 3, 3], 0);
    design.addMove(4, 6, [4, 4, 4, 4, 4, 4], 0);
    design.addMove(4, 6, [1, 1, 1, 1, 1, 1], 0);
    design.addMove(4, 6, [6, 6, 6, 6, 6, 6], 0);
    design.addMove(4, 6, [5, 5, 5, 5, 5, 5], 0);
    design.addMove(4, 6, [2, 2, 2, 2, 2, 2], 0);
    design.addMove(4, 6, [0, 0, 0, 0, 0, 0], 0);

    design.addPiece("King", 5);
    design.addMove(5, 8, [7], 0);
    design.addMove(5, 8, [3], 0);
    design.addMove(5, 8, [4], 0);
    design.addMove(5, 8, [1], 0);
    design.addMove(5, 8, [6], 0);
    design.addMove(5, 8, [5], 0);
    design.addMove(5, 8, [2], 0);
    design.addMove(5, 8, [0], 0);

    design.setup("White", "Pawn", 122);
    design.setup("White", "Pawn", 123);
    design.setup("White", "Pawn", 124);
    design.setup("White", "Pawn", 125);
    design.setup("White", "Pawn", 126);
    design.setup("White", "Pawn", 127);
    design.setup("White", "Pawn", 128);
    design.setup("White", "Pawn", 129);
    design.setup("White", "Rook", 134);
    design.setup("White", "Rook", 141);
    design.setup("White", "Knight", 135);
    design.setup("White", "Knight", 140);
    design.setup("White", "Bishop", 136);
    design.setup("White", "Bishop", 139);
    design.setup("White", "Queen", 137);
    design.setup("White", "King", 138);
    design.setup("White", "King", 144);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Rook", 2);
    design.setup("Black", "Rook", 9);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Knight", 8);
    design.setup("Black", "Bishop", 4);
    design.setup("Black", "Bishop", 7);
    design.setup("Black", "Queen", 5);
    design.setup("Black", "King", 6);
    design.setup("Black", "King", 153);
    design.setup("Pink", "Pawn", 85);
    design.setup("Pink", "Pawn", 73);
    design.setup("Pink", "Rook", 131);
    design.setup("Pink", "Knight", 13);
    design.setup("Pink", "Bishop", 84);
    design.setup("Pink", "Queen", 72);
    design.setup("Pink", "King", 145);
    design.setup("Green", "Pawn", 94);
    design.setup("Green", "Pawn", 82);
    design.setup("Green", "Rook", 120);
    design.setup("Green", "Knight", 22);
    design.setup("Green", "Bishop", 95);
    design.setup("Green", "Queen", 83);
    design.setup("Green", "King", 146);
    design.setup("Red", "Pawn", 109);
    design.setup("Red", "Pawn", 97);
    design.setup("Red", "Rook", 108);
    design.setup("Red", "Knight", 96);
    design.setup("Red", "Bishop", 142);
    design.setup("Red", "Queen", 0);
    design.setup("Red", "King", 147);
    design.setup("Orange", "Pawn", 46);
    design.setup("Orange", "Pawn", 34);
    design.setup("Orange", "Rook", 35);
    design.setup("Orange", "Knight", 47);
    design.setup("Orange", "Bishop", 1);
    design.setup("Orange", "Queen", 143);
    design.setup("Orange", "King", 148);
    design.setup("Yellow", "Pawn", 70);
    design.setup("Yellow", "Pawn", 58);
    design.setup("Yellow", "Rook", 12);
    design.setup("Yellow", "Knight", 130);
    design.setup("Yellow", "Bishop", 59);
    design.setup("Yellow", "Queen", 71);
    design.setup("Yellow", "King", 149);
    design.setup("Cyan", "Pawn", 118);
    design.setup("Cyan", "Pawn", 106);
    design.setup("Cyan", "Rook", 119);
    design.setup("Cyan", "Knight", 107);
    design.setup("Cyan", "Bishop", 133);
    design.setup("Cyan", "Queen", 11);
    design.setup("Cyan", "King", 150);
    design.setup("Navy", "Pawn", 37);
    design.setup("Navy", "Pawn", 25);
    design.setup("Navy", "Rook", 24);
    design.setup("Navy", "Knight", 36);
    design.setup("Navy", "Bishop", 10);
    design.setup("Navy", "Queen", 132);
    design.setup("Navy", "King", 151);
    design.setup("Violet", "Pawn", 61);
    design.setup("Violet", "Pawn", 49);
    design.setup("Violet", "Rook", 23);
    design.setup("Violet", "Knight", 121);
    design.setup("Violet", "Bishop", 48);
    design.setup("Violet", "Queen", 60);
    design.setup("Violet", "King", 152);
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
 
    view.defPosition("a12", 43, 3, 46, 46);
    view.defPosition("b12", 88, 3, 46, 46);
    view.defPosition("c12", 133, 3, 46, 46);
    view.defPosition("d12", 178, 3, 46, 46);
    view.defPosition("e12", 223, 3, 46, 46);
    view.defPosition("f12", 268, 3, 46, 46);
    view.defPosition("g12", 313, 3, 46, 46);
    view.defPosition("h12", 358, 3, 46, 46);
    view.defPosition("i12", 403, 3, 46, 46);
    view.defPosition("j12", 448, 3, 46, 46);
    view.defPosition("k12", 493, 3, 46, 46);
    view.defPosition("l12", 538, 3, 46, 46);
    view.defPosition("a11", 43, 48, 46, 46);
    view.defPosition("b11", 88, 48, 46, 46);
    view.defPosition("c11", 133, 48, 46, 46);
    view.defPosition("d11", 178, 48, 46, 46);
    view.defPosition("e11", 223, 48, 46, 46);
    view.defPosition("f11", 268, 48, 46, 46);
    view.defPosition("g11", 313, 48, 46, 46);
    view.defPosition("h11", 358, 48, 46, 46);
    view.defPosition("i11", 403, 48, 46, 46);
    view.defPosition("j11", 448, 48, 46, 46);
    view.defPosition("k11", 493, 48, 46, 46);
    view.defPosition("l11", 538, 48, 46, 46);
    view.defPosition("a10", 43, 93, 46, 46);
    view.defPosition("b10", 88, 93, 46, 46);
    view.defPosition("c10", 133, 93, 46, 46);
    view.defPosition("d10", 178, 93, 46, 46);
    view.defPosition("e10", 223, 93, 46, 46);
    view.defPosition("f10", 268, 93, 46, 46);
    view.defPosition("g10", 313, 93, 46, 46);
    view.defPosition("h10", 358, 93, 46, 46);
    view.defPosition("i10", 403, 93, 46, 46);
    view.defPosition("j10", 448, 93, 46, 46);
    view.defPosition("k10", 493, 93, 46, 46);
    view.defPosition("l10", 538, 93, 46, 46);
    view.defPosition("a9", 43, 138, 46, 46);
    view.defPosition("b9", 88, 138, 46, 46);
    view.defPosition("c9", 133, 138, 46, 46);
    view.defPosition("d9", 178, 138, 46, 46);
    view.defPosition("e9", 223, 138, 46, 46);
    view.defPosition("f9", 268, 138, 46, 46);
    view.defPosition("g9", 313, 138, 46, 46);
    view.defPosition("h9", 358, 138, 46, 46);
    view.defPosition("i9", 403, 138, 46, 46);
    view.defPosition("j9", 448, 138, 46, 46);
    view.defPosition("k9", 493, 138, 46, 46);
    view.defPosition("l9", 538, 138, 46, 46);
    view.defPosition("a8", 43, 183, 46, 46);
    view.defPosition("b8", 88, 183, 46, 46);
    view.defPosition("c8", 133, 183, 46, 46);
    view.defPosition("d8", 178, 183, 46, 46);
    view.defPosition("e8", 223, 183, 46, 46);
    view.defPosition("f8", 268, 183, 46, 46);
    view.defPosition("g8", 313, 183, 46, 46);
    view.defPosition("h8", 358, 183, 46, 46);
    view.defPosition("i8", 403, 183, 46, 46);
    view.defPosition("j8", 448, 183, 46, 46);
    view.defPosition("k8", 493, 183, 46, 46);
    view.defPosition("l8", 538, 183, 46, 46);
    view.defPosition("a7", 43, 228, 46, 46);
    view.defPosition("b7", 88, 228, 46, 46);
    view.defPosition("c7", 133, 228, 46, 46);
    view.defPosition("d7", 178, 228, 46, 46);
    view.defPosition("e7", 223, 228, 46, 46);
    view.defPosition("f7", 268, 228, 46, 46);
    view.defPosition("g7", 313, 228, 46, 46);
    view.defPosition("h7", 358, 228, 46, 46);
    view.defPosition("i7", 403, 228, 46, 46);
    view.defPosition("j7", 448, 228, 46, 46);
    view.defPosition("k7", 493, 228, 46, 46);
    view.defPosition("l7", 538, 228, 46, 46);
    view.defPosition("a6", 43, 273, 46, 46);
    view.defPosition("b6", 88, 273, 46, 46);
    view.defPosition("c6", 133, 273, 46, 46);
    view.defPosition("d6", 178, 273, 46, 46);
    view.defPosition("e6", 223, 273, 46, 46);
    view.defPosition("f6", 268, 273, 46, 46);
    view.defPosition("g6", 313, 273, 46, 46);
    view.defPosition("h6", 358, 273, 46, 46);
    view.defPosition("i6", 403, 273, 46, 46);
    view.defPosition("j6", 448, 273, 46, 46);
    view.defPosition("k6", 493, 273, 46, 46);
    view.defPosition("l6", 538, 273, 46, 46);
    view.defPosition("a5", 43, 318, 46, 46);
    view.defPosition("b5", 88, 318, 46, 46);
    view.defPosition("c5", 133, 318, 46, 46);
    view.defPosition("d5", 178, 318, 46, 46);
    view.defPosition("e5", 223, 318, 46, 46);
    view.defPosition("f5", 268, 318, 46, 46);
    view.defPosition("g5", 313, 318, 46, 46);
    view.defPosition("h5", 358, 318, 46, 46);
    view.defPosition("i5", 403, 318, 46, 46);
    view.defPosition("j5", 448, 318, 46, 46);
    view.defPosition("k5", 493, 318, 46, 46);
    view.defPosition("l5", 538, 318, 46, 46);
    view.defPosition("a4", 43, 363, 46, 46);
    view.defPosition("b4", 88, 363, 46, 46);
    view.defPosition("c4", 133, 363, 46, 46);
    view.defPosition("d4", 178, 363, 46, 46);
    view.defPosition("e4", 223, 363, 46, 46);
    view.defPosition("f4", 268, 363, 46, 46);
    view.defPosition("g4", 313, 363, 46, 46);
    view.defPosition("h4", 358, 363, 46, 46);
    view.defPosition("i4", 403, 363, 46, 46);
    view.defPosition("j4", 448, 363, 46, 46);
    view.defPosition("k4", 493, 363, 46, 46);
    view.defPosition("l4", 538, 363, 46, 46);
    view.defPosition("a3", 43, 408, 46, 46);
    view.defPosition("b3", 88, 408, 46, 46);
    view.defPosition("c3", 133, 408, 46, 46);
    view.defPosition("d3", 178, 408, 46, 46);
    view.defPosition("e3", 223, 408, 46, 46);
    view.defPosition("f3", 268, 408, 46, 46);
    view.defPosition("g3", 313, 408, 46, 46);
    view.defPosition("h3", 358, 408, 46, 46);
    view.defPosition("i3", 403, 408, 46, 46);
    view.defPosition("j3", 448, 408, 46, 46);
    view.defPosition("k3", 493, 408, 46, 46);
    view.defPosition("l3", 538, 408, 46, 46);
    view.defPosition("a2", 43, 453, 46, 46);
    view.defPosition("b2", 88, 453, 46, 46);
    view.defPosition("c2", 133, 453, 46, 46);
    view.defPosition("d2", 178, 453, 46, 46);
    view.defPosition("e2", 223, 453, 46, 46);
    view.defPosition("f2", 268, 453, 46, 46);
    view.defPosition("g2", 313, 453, 46, 46);
    view.defPosition("h2", 358, 453, 46, 46);
    view.defPosition("i2", 403, 453, 46, 46);
    view.defPosition("j2", 448, 453, 46, 46);
    view.defPosition("k2", 493, 453, 46, 46);
    view.defPosition("l2", 538, 453, 46, 46);
    view.defPosition("a1", 43, 498, 46, 46);
    view.defPosition("b1", 88, 498, 46, 46);
    view.defPosition("c1", 133, 498, 46, 46);
    view.defPosition("d1", 178, 498, 46, 46);
    view.defPosition("e1", 223, 498, 46, 46);
    view.defPosition("f1", 268, 498, 46, 46);
    view.defPosition("g1", 313, 498, 46, 46);
    view.defPosition("h1", 358, 498, 46, 46);
    view.defPosition("i1", 403, 498, 46, 46);
    view.defPosition("j1", 448, 498, 46, 46);
    view.defPosition("k1", 493, 498, 46, 46);
    view.defPosition("l1", 538, 498, 46, 46);
    view.defPosition("z12", 0, 3, 46, 46);
    view.defPosition("z11", 0, 48, 46, 46);
    view.defPosition("z10", 0, 93, 46, 46);
    view.defPosition("z9", 0, 138, 46, 46);
    view.defPosition("z8", 0, 183, 46, 46);
    view.defPosition("z7", 0, 228, 46, 46);
    view.defPosition("z6", 0, 273, 46, 46);
    view.defPosition("z5", 0, 318, 46, 46);
    view.defPosition("z4", 0, 363, 46, 46);
    view.defPosition("z3", 0, 408, 46, 46);
    view.defPosition("z2", 0, 453, 46, 46);
    view.defPosition("z1", 0, 498, 46, 46);

    view.defPopup("Promote", 189, 130);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
}
