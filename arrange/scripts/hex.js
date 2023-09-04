Dagaz.Model.WIDTH  = 11;
Dagaz.Model.HEIGHT = 11;

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("animate-redo", "false");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("e");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("w");  // 4
    design.addDirection("nw"); // 5

    design.addPlayer("Red", [5, 3, 4, 1, 2, 0]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a1", [11, 0, 1, 0, 0, 0]);
    design.addPosition("b1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("c1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("d1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("e1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("f1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("g1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("h1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("i1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("j1", [11, 10, 1, 0, -1, 0]);
    design.addPosition("k1", [11, 10, 0, 0, -1, 0]);
    design.addPosition("a2", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j2", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k2", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a3", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j3", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k3", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a4", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j4", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k4", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a5", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j5", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k5", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a6", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j6", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k6", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a7", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j7", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k7", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a8", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j8", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k8", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a9", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j9", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k9", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a10", [11, 0, 1, -10, 0, -11]);
    design.addPosition("b10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("c10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("d10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("e10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("f10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("g10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("h10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("i10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("j10", [11, 10, 1, -10, -1, -11]);
    design.addPosition("k10", [11, 10, 0, 0, -1, -11]);
    design.addPosition("a11", [0, 0, 1, -10, 0, -11]);
    design.addPosition("b11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("c11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("d11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("e11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("f11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("g11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("h11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("i11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("j11", [0, 0, 1, -10, -1, -11]);
    design.addPosition("k11", [0, 0, 0, 0, -1, -11]);

    design.addZone("start-zone", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addZone("start-zone", 2, [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110]);
    design.addZone("stop-zone", 1, [110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]);
    design.addZone("stop-zone", 2, [10, 21, 32, 43, 54, 65, 76, 87, 98, 109, 120]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("Big", "Big");
    view.defPiece("Small", "Small");
 
    view.defMark(5, "Big");
    view.defMark(6, "Small");

    view.defPosition("a1", 18, 18, 30, 30);
    view.defPosition("b1", 48, 18, 30, 30);
    view.defPosition("c1", 78, 18, 30, 30);
    view.defPosition("d1", 108, 18, 30, 30);
    view.defPosition("e1", 138, 18, 30, 30);
    view.defPosition("f1", 168, 18, 30, 30);
    view.defPosition("g1", 198, 18, 30, 30);
    view.defPosition("h1", 228, 18, 30, 30);
    view.defPosition("i1", 258, 18, 30, 30);
    view.defPosition("j1", 288, 18, 30, 30);
    view.defPosition("k1", 318, 18, 30, 30);
    view.defPosition("a2", 33, 43, 30, 30);
    view.defPosition("b2", 63, 43, 30, 30);
    view.defPosition("c2", 93, 43, 30, 30);
    view.defPosition("d2", 123, 43, 30, 30);
    view.defPosition("e2", 153, 43, 30, 30);
    view.defPosition("f2", 183, 43, 30, 30);
    view.defPosition("g2", 213, 43, 30, 30);
    view.defPosition("h2", 243, 43, 30, 30);
    view.defPosition("i2", 273, 43, 30, 30);
    view.defPosition("j2", 303, 43, 30, 30);
    view.defPosition("k2", 333, 43, 30, 30);
    view.defPosition("a3", 48, 68, 30, 30);
    view.defPosition("b3", 78, 68, 30, 30);
    view.defPosition("c3", 108, 68, 30, 30);
    view.defPosition("d3", 138, 68, 30, 30);
    view.defPosition("e3", 168, 68, 30, 30);
    view.defPosition("f3", 198, 68, 30, 30);
    view.defPosition("g3", 228, 68, 30, 30);
    view.defPosition("h3", 258, 68, 30, 30);
    view.defPosition("i3", 288, 68, 30, 30);
    view.defPosition("j3", 318, 68, 30, 30);
    view.defPosition("k3", 348, 68, 30, 30);
    view.defPosition("a4", 63, 93, 30, 30);
    view.defPosition("b4", 93, 93, 30, 30);
    view.defPosition("c4", 123, 93, 30, 30);
    view.defPosition("d4", 153, 93, 30, 30);
    view.defPosition("e4", 183, 93, 30, 30);
    view.defPosition("f4", 213, 93, 30, 30);
    view.defPosition("g4", 243, 93, 30, 30);
    view.defPosition("h4", 273, 93, 30, 30);
    view.defPosition("i4", 303, 93, 30, 30);
    view.defPosition("j4", 333, 93, 30, 30);
    view.defPosition("k4", 363, 93, 30, 30);
    view.defPosition("a5", 78, 118, 30, 30);
    view.defPosition("b5", 108, 118, 30, 30);
    view.defPosition("c5", 138, 118, 30, 30);
    view.defPosition("d5", 168, 118, 30, 30);
    view.defPosition("e5", 198, 118, 30, 30);
    view.defPosition("f5", 228, 118, 30, 30);
    view.defPosition("g5", 258, 118, 30, 30);
    view.defPosition("h5", 288, 118, 30, 30);
    view.defPosition("i5", 318, 118, 30, 30);
    view.defPosition("j5", 348, 118, 30, 30);
    view.defPosition("k5", 378, 118, 30, 30);
    view.defPosition("a6", 93, 143, 30, 30);
    view.defPosition("b6", 123, 143, 30, 30);
    view.defPosition("c6", 153, 143, 30, 30);
    view.defPosition("d6", 183, 143, 30, 30);
    view.defPosition("e6", 213, 143, 30, 30);
    view.defPosition("f6", 243, 143, 30, 30);
    view.defPosition("g6", 273, 143, 30, 30);
    view.defPosition("h6", 303, 143, 30, 30);
    view.defPosition("i6", 333, 143, 30, 30);
    view.defPosition("j6", 363, 143, 30, 30);
    view.defPosition("k6", 393, 143, 30, 30);
    view.defPosition("a7", 108, 168, 30, 30);
    view.defPosition("b7", 138, 168, 30, 30);
    view.defPosition("c7", 168, 168, 30, 30);
    view.defPosition("d7", 198, 168, 30, 30);
    view.defPosition("e7", 228, 168, 30, 30);
    view.defPosition("f7", 258, 168, 30, 30);
    view.defPosition("g7", 288, 168, 30, 30);
    view.defPosition("h7", 318, 168, 30, 30);
    view.defPosition("i7", 348, 168, 30, 30);
    view.defPosition("j7", 378, 168, 30, 30);
    view.defPosition("k7", 408, 168, 30, 30);
    view.defPosition("a8", 123, 193, 30, 30);
    view.defPosition("b8", 153, 193, 30, 30);
    view.defPosition("c8", 183, 193, 30, 30);
    view.defPosition("d8", 213, 193, 30, 30);
    view.defPosition("e8", 243, 193, 30, 30);
    view.defPosition("f8", 273, 193, 30, 30);
    view.defPosition("g8", 303, 193, 30, 30);
    view.defPosition("h8", 333, 193, 30, 30);
    view.defPosition("i8", 363, 193, 30, 30);
    view.defPosition("j8", 393, 193, 30, 30);
    view.defPosition("k8", 423, 193, 30, 30);
    view.defPosition("a9", 138, 218, 30, 30);
    view.defPosition("b9", 168, 218, 30, 30);
    view.defPosition("c9", 198, 218, 30, 30);
    view.defPosition("d9", 228, 218, 30, 30);
    view.defPosition("e9", 258, 218, 30, 30);
    view.defPosition("f9", 288, 218, 30, 30);
    view.defPosition("g9", 318, 218, 30, 30);
    view.defPosition("h9", 348, 218, 30, 30);
    view.defPosition("i9", 378, 218, 30, 30);
    view.defPosition("j9", 408, 218, 30, 30);
    view.defPosition("k9", 438, 218, 30, 30);
    view.defPosition("a10", 153, 243, 30, 30);
    view.defPosition("b10", 183, 243, 30, 30);
    view.defPosition("c10", 213, 243, 30, 30);
    view.defPosition("d10", 243, 243, 30, 30);
    view.defPosition("e10", 273, 243, 30, 30);
    view.defPosition("f10", 303, 243, 30, 30);
    view.defPosition("g10", 333, 243, 30, 30);
    view.defPosition("h10", 363, 243, 30, 30);
    view.defPosition("i10", 393, 243, 30, 30);
    view.defPosition("j10", 423, 243, 30, 30);
    view.defPosition("k10", 453, 243, 30, 30);
    view.defPosition("a11", 168, 268, 30, 30);
    view.defPosition("b11", 198, 268, 30, 30);
    view.defPosition("c11", 228, 268, 30, 30);
    view.defPosition("d11", 258, 268, 30, 30);
    view.defPosition("e11", 288, 268, 30, 30);
    view.defPosition("f11", 318, 268, 30, 30);
    view.defPosition("g11", 348, 268, 30, 30);
    view.defPosition("h11", 378, 268, 30, 30);
    view.defPosition("i11", 408, 268, 30, 30);
    view.defPosition("j11", 438, 268, 30, 30);
    view.defPosition("k11", 468, 268, 30, 30);
}
