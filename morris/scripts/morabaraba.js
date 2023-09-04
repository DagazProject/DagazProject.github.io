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
    design.checkVersion("morris-invariant", "once");
    design.checkVersion("morris-check", "true");
    design.checkVersion("morris-goal", "true");

    design.addDirection("n");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("s");
    design.addDirection("x");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Blue", [3, 2, 1, 0, 4, 6, 5, 8, 7]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("a7", [0, 3, 0, 21, 21, 0, 0, 0, 8]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d7", [0, 3, -3, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g7", [0, 0, -3, 21, 21, 0, 6, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 2, 0, 14, 14, 0, 0, -8, 8]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [-7, 2, -2, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f6", [0, 0, -2, 14, 14, -6, 6, 0, 0]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 1, 0, 7, 7, 0, 0, -8, 0]);
    design.addPosition("d5", [-7, 1, -1, 0, 14, 0, 0, 0, 0]);
    design.addPosition("e5", [0, 0, -1, 7, 7, -6, 0, 0, 0]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [-21, 1, 0, 21, 21, 0, 0, 0, 0]);
    design.addPosition("b4", [-14, 1, -1, 14, 14, 0, 0, 0, 0]);
    design.addPosition("c4", [-7, 0, -1, 7, 7, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e4", [-7, 1, 0, 7, 7, 0, 0, 0, 0]);
    design.addPosition("f4", [-14, 1, -1, 14, 14, 0, 0, 0, 0]);
    design.addPosition("g4", [-21, 0, -1, 21, 21, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [-7, 1, 0, 0, -27, 0, 6, 0, 0]);
    design.addPosition("d3", [0, 1, -1, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e3", [-7, 0, -1, 0, -20, 0, 0, 0, 8]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [-14, 2, 0, 0, -20, -6, 6, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [-7, 2, -2, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [-14, 0, -2, 0, -34, 0, 0, -8, 8]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-21, 3, 0, 0, -34, -6, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [-7, 3, -3, 0, -27, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [-21, 0, -3, 0, 0, 0, 0, -8, 0]);

    design.addZone("killed", 1, [35, 28, 14, 7, 43, 29, 15, 1, 44, 37, 9, 2, 24, 46, 39, 11, 4, 47, 33, 19, 5, 41, 34, 20, 13]);
    design.addZone("killed", 2, [35, 28, 14, 7, 43, 29, 15, 1, 44, 37, 9, 2, 24, 46, 39, 11, 4, 47, 33, 19, 5, 41, 34, 20, 13]);

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
    design.addCommand(3, ZRF.ON_BOARD_DIR,	4);	// name
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
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [8], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 2, [], 0);
    design.addMove(0, 3, [0, 4], 1);

    design.reserve("Blue", "Stone", 12);
    design.reserve("Red", "Stone", 12);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a7", 16, 16, 42, 42);
    view.defPosition("b7", 58, 16, 42, 42);
    view.defPosition("c7", 100, 16, 42, 42);
    view.defPosition("d7", 142, 16, 42, 42);
    view.defPosition("e7", 184, 16, 42, 42);
    view.defPosition("f7", 226, 16, 42, 42);
    view.defPosition("g7", 268, 16, 42, 42);
    view.defPosition("a6", 16, 58, 42, 42);
    view.defPosition("b6", 58, 58, 42, 42);
    view.defPosition("c6", 100, 58, 42, 42);
    view.defPosition("d6", 142, 58, 42, 42);
    view.defPosition("e6", 184, 58, 42, 42);
    view.defPosition("f6", 226, 58, 42, 42);
    view.defPosition("g6", 268, 58, 42, 42);
    view.defPosition("a5", 16, 100, 42, 42);
    view.defPosition("b5", 58, 100, 42, 42);
    view.defPosition("c5", 100, 100, 42, 42);
    view.defPosition("d5", 142, 100, 42, 42);
    view.defPosition("e5", 184, 100, 42, 42);
    view.defPosition("f5", 226, 100, 42, 42);
    view.defPosition("g5", 268, 100, 42, 42);
    view.defPosition("a4", 16, 142, 42, 42);
    view.defPosition("b4", 58, 142, 42, 42);
    view.defPosition("c4", 100, 142, 42, 42);
    view.defPosition("d4", 142, 142, 42, 42);
    view.defPosition("e4", 184, 142, 42, 42);
    view.defPosition("f4", 226, 142, 42, 42);
    view.defPosition("g4", 268, 142, 42, 42);
    view.defPosition("a3", 16, 184, 42, 42);
    view.defPosition("b3", 58, 184, 42, 42);
    view.defPosition("c3", 100, 184, 42, 42);
    view.defPosition("d3", 142, 184, 42, 42);
    view.defPosition("e3", 184, 184, 42, 42);
    view.defPosition("f3", 226, 184, 42, 42);
    view.defPosition("g3", 268, 184, 42, 42);
    view.defPosition("a2", 16, 226, 42, 42);
    view.defPosition("b2", 58, 226, 42, 42);
    view.defPosition("c2", 100, 226, 42, 42);
    view.defPosition("d2", 142, 226, 42, 42);
    view.defPosition("e2", 184, 226, 42, 42);
    view.defPosition("f2", 226, 226, 42, 42);
    view.defPosition("g2", 268, 226, 42, 42);
    view.defPosition("a1", 16, 268, 42, 42);
    view.defPosition("b1", 58, 268, 42, 42);
    view.defPosition("c1", 100, 268, 42, 42);
    view.defPosition("d1", 142, 268, 42, 42);
    view.defPosition("e1", 184, 268, 42, 42);
    view.defPosition("f1", 226, 268, 42, 42);
    view.defPosition("g1", 268, 268, 42, 42);
}
