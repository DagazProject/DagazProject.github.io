Dagaz.Controller.persistense = "session";

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
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("morris-restrictions", "true");
    design.checkVersion("morris-extension", "ko");
    design.checkVersion("morris-invariant", "true");
    design.checkVersion("morris-check", "true");
    design.checkVersion("morris-goal", "true");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("x");

    design.addPlayer("Blue", [1, 0, 3, 2, 5, 4, 7, 6, 8]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 9]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h9", [0, 27, 0, 0, 0, 8, 0, 0, 27]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 3, 0, 0, 0, 10, 0, 10]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 9, 3, -3, 0, 0, 0, 0, 9]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g8", [0, 18, 0, -3, -8, 8, 0, 0, 18]);
    design.addPosition("h8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 27, 2, 0, 0, 0, 10, -10, 27]);
    design.addPosition("c7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d7", [-9, 9, 2, -2, 0, 0, 0, 0, 9]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f7", [0, 9, 0, -2, -8, 0, 0, 0, 9]);
    design.addPosition("g7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [0, 18, 1, 0, 0, 0, 0, -10, 18]);
    design.addPosition("d6", [-9, 0, 1, -1, 0, 0, 0, 0, 9]);
    design.addPosition("e6", [0, 0, 0, -1, 0, 8, 10, 0, 18]);
    design.addPosition("f6", [-9, 9, 1, 0, 0, 0, 0, 0, 9]);
    design.addPosition("g6", [-18, 18, 1, -1, 0, 0, 0, 0, 18]);
    design.addPosition("h6", [-27, 27, 0, -1, 0, 0, 0, 0, 27]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d5", [0, 9, 0, 0, -8, 0, 10, 0, 9]);
    design.addPosition("e5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f5", [-9, 0, 0, 0, 0, 8, 0, -10, 9]);
    design.addPosition("g5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [-27, 27, 1, 0, 0, 0, 0, 0, 27]);
    design.addPosition("c4", [-18, 18, 1, -1, 0, 0, 0, 0, 18]);
    design.addPosition("d4", [-9, 9, 0, -1, 0, 0, 0, 0, 9]);
    design.addPosition("e4", [0, 0, 1, 0, -8, 0, 0, -10, -26]);
    design.addPosition("f4", [0, 9, 1, -1, 0, 0, 0, 0, 9]);
    design.addPosition("g4", [-18, 0, 0, -1, 0, 0, 10, 0, -44]);
    design.addPosition("h4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d3", [-9, 0, 2, 0, 0, 8, 0, 0, -26]);
    design.addPosition("e3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f3", [-9, 9, 2, -2, 0, 0, 0, 0, 9]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h3", [-27, 0, 0, -2, 0, 0, 10, -10, 10]);
    design.addPosition("i3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [-18, 0, 3, 0, -8, 8, 0, 0, -53]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [-9, 0, 3, -3, 0, 0, 0, 0, -53]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [0, 0, 0, -3, 0, 0, 0, -10, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [-27, 0, 0, 0, -8, 0, 0, 0, -44]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("killed", 1, [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 14, 16, 17, 18, 20, 22, 24, 25, 26, 27, 28, 35, 36, 37, 38, 40, 42, 43, 44, 45, 52, 53, 54, 55, 56, 58, 60, 62, 63, 64, 66, 67, 69, 70, 72, 74, 75, 76, 77, 78, 79, 80]);
    design.addZone("killed", 2, [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 14, 16, 17, 18, 20, 22, 24, 25, 26, 27, 28, 35, 36, 37, 38, 40, 42, 43, 44, 45, 52, 53, 54, 55, 56, 58, 60, 62, 63, 64, 66, 67, 69, 70, 72, 74, 75, 76, 77, 78, 79, 80]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// killed
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	21);	// position
    design.addCommand(3, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-11);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 2, [], 0);
    design.addMove(0, 3, [0, 8], 1);

    design.reserve("Blue", "Stone", 12);
    design.reserve("Red", "Stone", 12);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a9", 16, 16, 42, 42);
    view.defPosition("b9", 58, 16, 42, 42);
    view.defPosition("c9", 100, 16, 42, 42);
    view.defPosition("d9", 142, 16, 42, 42);
    view.defPosition("e9", 184, 16, 42, 42);
    view.defPosition("f9", 226, 16, 42, 42);
    view.defPosition("g9", 268, 16, 42, 42);
    view.defPosition("h9", 310, 16, 42, 42);
    view.defPosition("i9", 352, 16, 42, 42);
    view.defPosition("a8", 16, 58, 42, 42);
    view.defPosition("b8", 58, 58, 42, 42);
    view.defPosition("c8", 100, 58, 42, 42);
    view.defPosition("d8", 142, 58, 42, 42);
    view.defPosition("e8", 184, 58, 42, 42);
    view.defPosition("f8", 226, 58, 42, 42);
    view.defPosition("g8", 268, 58, 42, 42);
    view.defPosition("h8", 310, 58, 42, 42);
    view.defPosition("i8", 352, 58, 42, 42);
    view.defPosition("a7", 16, 100, 42, 42);
    view.defPosition("b7", 58, 100, 42, 42);
    view.defPosition("c7", 100, 100, 42, 42);
    view.defPosition("d7", 142, 100, 42, 42);
    view.defPosition("e7", 184, 100, 42, 42);
    view.defPosition("f7", 226, 100, 42, 42);
    view.defPosition("g7", 268, 100, 42, 42);
    view.defPosition("h7", 310, 100, 42, 42);
    view.defPosition("i7", 352, 100, 42, 42);
    view.defPosition("a6", 16, 142, 42, 42);
    view.defPosition("b6", 58, 142, 42, 42);
    view.defPosition("c6", 100, 142, 42, 42);
    view.defPosition("d6", 142, 142, 42, 42);
    view.defPosition("e6", 184, 142, 42, 42);
    view.defPosition("f6", 226, 142, 42, 42);
    view.defPosition("g6", 268, 142, 42, 42);
    view.defPosition("h6", 310, 142, 42, 42);
    view.defPosition("i6", 352, 142, 42, 42);
    view.defPosition("a5", 16, 184, 42, 42);
    view.defPosition("b5", 58, 184, 42, 42);
    view.defPosition("c5", 100, 184, 42, 42);
    view.defPosition("d5", 142, 184, 42, 42);
    view.defPosition("e5", 184, 184, 42, 42);
    view.defPosition("f5", 226, 184, 42, 42);
    view.defPosition("g5", 268, 184, 42, 42);
    view.defPosition("h5", 310, 184, 42, 42);
    view.defPosition("i5", 352, 184, 42, 42);
    view.defPosition("a4", 16, 226, 42, 42);
    view.defPosition("b4", 58, 226, 42, 42);
    view.defPosition("c4", 100, 226, 42, 42);
    view.defPosition("d4", 142, 226, 42, 42);
    view.defPosition("e4", 184, 226, 42, 42);
    view.defPosition("f4", 226, 226, 42, 42);
    view.defPosition("g4", 268, 226, 42, 42);
    view.defPosition("h4", 310, 226, 42, 42);
    view.defPosition("i4", 352, 226, 42, 42);
    view.defPosition("a3", 16, 268, 42, 42);
    view.defPosition("b3", 58, 268, 42, 42);
    view.defPosition("c3", 100, 268, 42, 42);
    view.defPosition("d3", 142, 268, 42, 42);
    view.defPosition("e3", 184, 268, 42, 42);
    view.defPosition("f3", 226, 268, 42, 42);
    view.defPosition("g3", 268, 268, 42, 42);
    view.defPosition("h3", 310, 268, 42, 42);
    view.defPosition("i3", 352, 268, 42, 42);
    view.defPosition("a2", 16, 310, 42, 42);
    view.defPosition("b2", 58, 310, 42, 42);
    view.defPosition("c2", 100, 310, 42, 42);
    view.defPosition("d2", 142, 310, 42, 42);
    view.defPosition("e2", 184, 310, 42, 42);
    view.defPosition("f2", 226, 310, 42, 42);
    view.defPosition("g2", 268, 310, 42, 42);
    view.defPosition("h2", 310, 310, 42, 42);
    view.defPosition("i2", 352, 310, 42, 42);
    view.defPosition("a1", 16, 352, 42, 42);
    view.defPosition("b1", 58, 352, 42, 42);
    view.defPosition("c1", 100, 352, 42, 42);
    view.defPosition("d1", 142, 352, 42, 42);
    view.defPosition("e1", 184, 352, 42, 42);
    view.defPosition("f1", 226, 352, 42, 42);
    view.defPosition("g1", 268, 352, 42, 42);
    view.defPosition("h1", 310, 352, 42, 42);
    view.defPosition("i1", 352, 352, 42, 42);
}
