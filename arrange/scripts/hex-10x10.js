Dagaz.Model.WIDTH  = 10;
Dagaz.Model.HEIGHT = 10;

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

    design.addPosition("a1", [10, 0, 1, 0, 0, 0]);
    design.addPosition("b1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("c1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("d1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("e1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("f1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("g1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("h1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("i1", [10, 9, 1, 0, -1, 0]);
    design.addPosition("j1", [10, 9, 0, 0, -1, 0]);
    design.addPosition("a2", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i2", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j2", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a3", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i3", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j3", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a4", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i4", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j4", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a5", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i5", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j5", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a6", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i6", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j6", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a7", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i7", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j7", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a8", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i8", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j8", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a9", [10, 0, 1, -9, 0, -10]);
    design.addPosition("b9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("c9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("d9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("e9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("f9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("g9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("h9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("i9", [10, 9, 1, -9, -1, -10]);
    design.addPosition("j9", [10, 9, 0, 0, -1, -10]);
    design.addPosition("a10", [0, 0, 1, -9, 0, -10]);
    design.addPosition("b10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("c10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("d10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("e10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("f10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("g10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("h10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("i10", [0, 0, 1, -9, -1, -10]);
    design.addPosition("j10", [0, 0, 0, 0, -1, -10]);

    design.addZone("start-zone", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    design.addZone("start-zone", 2, [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]);
    design.addZone("stop-zone", 1, [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
    design.addZone("stop-zone", 2, [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]);

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
}
