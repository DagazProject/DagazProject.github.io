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

    view.defPosition("a1", 19, 18, 30, 30);
    view.defPosition("b1", 49, 18, 30, 30);
    view.defPosition("c1", 79, 18, 30, 30);
    view.defPosition("d1", 109, 18, 30, 30);
    view.defPosition("e1", 139, 18, 30, 30);
    view.defPosition("f1", 169, 18, 30, 30);
    view.defPosition("g1", 199, 18, 30, 30);
    view.defPosition("h1", 229, 18, 30, 30);
    view.defPosition("i1", 259, 18, 30, 30);
    view.defPosition("j1", 289, 18, 30, 30);
    view.defPosition("k1", 319, 18, 30, 30);
    view.defPosition("a2", 34, 43, 30, 30);
    view.defPosition("b2", 64, 43, 30, 30);
    view.defPosition("c2", 94, 43, 30, 30);
    view.defPosition("d2", 124, 43, 30, 30);
    view.defPosition("e2", 154, 43, 30, 30);
    view.defPosition("f2", 184, 43, 30, 30);
    view.defPosition("g2", 214, 43, 30, 30);
    view.defPosition("h2", 244, 43, 30, 30);
    view.defPosition("i2", 274, 43, 30, 30);
    view.defPosition("j2", 304, 43, 30, 30);
    view.defPosition("k2", 334, 43, 30, 30);
    view.defPosition("a3", 49, 68, 30, 30);
    view.defPosition("b3", 79, 68, 30, 30);
    view.defPosition("c3", 109, 68, 30, 30);
    view.defPosition("d3", 139, 68, 30, 30);
    view.defPosition("e3", 169, 68, 30, 30);
    view.defPosition("f3", 199, 68, 30, 30);
    view.defPosition("g3", 229, 68, 30, 30);
    view.defPosition("h3", 259, 68, 30, 30);
    view.defPosition("i3", 289, 68, 30, 30);
    view.defPosition("j3", 319, 68, 30, 30);
    view.defPosition("k3", 349, 68, 30, 30);
    view.defPosition("a4", 64, 93, 30, 30);
    view.defPosition("b4", 94, 93, 30, 30);
    view.defPosition("c4", 124, 93, 30, 30);
    view.defPosition("d4", 154, 93, 30, 30);
    view.defPosition("e4", 184, 93, 30, 30);
    view.defPosition("f4", 214, 93, 30, 30);
    view.defPosition("g4", 244, 93, 30, 30);
    view.defPosition("h4", 274, 93, 30, 30);
    view.defPosition("i4", 304, 93, 30, 30);
    view.defPosition("j4", 334, 93, 30, 30);
    view.defPosition("k4", 364, 93, 30, 30);
    view.defPosition("a5", 79, 118, 30, 30);
    view.defPosition("b5", 109, 118, 30, 30);
    view.defPosition("c5", 139, 118, 30, 30);
    view.defPosition("d5", 169, 118, 30, 30);
    view.defPosition("e5", 199, 118, 30, 30);
    view.defPosition("f5", 229, 118, 30, 30);
    view.defPosition("g5", 259, 118, 30, 30);
    view.defPosition("h5", 289, 118, 30, 30);
    view.defPosition("i5", 319, 118, 30, 30);
    view.defPosition("j5", 349, 118, 30, 30);
    view.defPosition("k5", 379, 118, 30, 30);
    view.defPosition("a6", 94, 143, 30, 30);
    view.defPosition("b6", 124, 143, 30, 30);
    view.defPosition("c6", 154, 143, 30, 30);
    view.defPosition("d6", 184, 143, 30, 30);
    view.defPosition("e6", 214, 143, 30, 30);
    view.defPosition("f6", 244, 143, 30, 30);
    view.defPosition("g6", 274, 143, 30, 30);
    view.defPosition("h6", 304, 143, 30, 30);
    view.defPosition("i6", 334, 143, 30, 30);
    view.defPosition("j6", 364, 143, 30, 30);
    view.defPosition("k6", 394, 143, 30, 30);
    view.defPosition("a7", 109, 168, 30, 30);
    view.defPosition("b7", 139, 168, 30, 30);
    view.defPosition("c7", 169, 168, 30, 30);
    view.defPosition("d7", 199, 168, 30, 30);
    view.defPosition("e7", 229, 168, 30, 30);
    view.defPosition("f7", 259, 168, 30, 30);
    view.defPosition("g7", 289, 168, 30, 30);
    view.defPosition("h7", 319, 168, 30, 30);
    view.defPosition("i7", 349, 168, 30, 30);
    view.defPosition("j7", 379, 168, 30, 30);
    view.defPosition("k7", 409, 168, 30, 30);
    view.defPosition("a8", 124, 193, 30, 30);
    view.defPosition("b8", 154, 193, 30, 30);
    view.defPosition("c8", 184, 193, 30, 30);
    view.defPosition("d8", 214, 193, 30, 30);
    view.defPosition("e8", 244, 193, 30, 30);
    view.defPosition("f8", 274, 193, 30, 30);
    view.defPosition("g8", 304, 193, 30, 30);
    view.defPosition("h8", 334, 193, 30, 30);
    view.defPosition("i8", 364, 193, 30, 30);
    view.defPosition("j8", 394, 193, 30, 30);
    view.defPosition("k8", 424, 193, 30, 30);
    view.defPosition("a9", 139, 218, 30, 30);
    view.defPosition("b9", 169, 218, 30, 30);
    view.defPosition("c9", 199, 218, 30, 30);
    view.defPosition("d9", 229, 218, 30, 30);
    view.defPosition("e9", 259, 218, 30, 30);
    view.defPosition("f9", 289, 218, 30, 30);
    view.defPosition("g9", 319, 218, 30, 30);
    view.defPosition("h9", 349, 218, 30, 30);
    view.defPosition("i9", 379, 218, 30, 30);
    view.defPosition("j9", 409, 218, 30, 30);
    view.defPosition("k9", 439, 218, 30, 30);
    view.defPosition("a10", 154, 243, 30, 30);
    view.defPosition("b10", 184, 243, 30, 30);
    view.defPosition("c10", 214, 243, 30, 30);
    view.defPosition("d10", 244, 243, 30, 30);
    view.defPosition("e10", 274, 243, 30, 30);
    view.defPosition("f10", 304, 243, 30, 30);
    view.defPosition("g10", 334, 243, 30, 30);
    view.defPosition("h10", 364, 243, 30, 30);
    view.defPosition("i10", 394, 243, 30, 30);
    view.defPosition("j10", 424, 243, 30, 30);
    view.defPosition("k10", 454, 243, 30, 30);
    view.defPosition("a11", 169, 268, 30, 30);
    view.defPosition("b11", 199, 268, 30, 30);
    view.defPosition("c11", 229, 268, 30, 30);
    view.defPosition("d11", 259, 268, 30, 30);
    view.defPosition("e11", 289, 268, 30, 30);
    view.defPosition("f11", 319, 268, 30, 30);
    view.defPosition("g11", 349, 268, 30, 30);
    view.defPosition("h11", 379, 268, 30, 30);
    view.defPosition("i11", 409, 268, 30, 30);
    view.defPosition("j11", 439, 268, 30, 30);
    view.defPosition("k11", 469, 268, 30, 30);
}
