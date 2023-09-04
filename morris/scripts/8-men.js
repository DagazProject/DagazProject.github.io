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
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("s");
    design.addDirection("x");

    design.addPlayer("Blue", [3, 2, 1, 0, 4]);
    design.addPlayer("Red", [0, 1, 2, 3, 4]);

    design.addPosition("B7", [0, 1, 0, 9, 1]);
    design.addPosition("C7", [0, 1, -1, 3, 1]);
    design.addPosition("D7", [0, 0, -1, 5, 1]);
    design.addPosition("A6", [0, 1, 0, 3, 1]);
    design.addPosition("C6", [-3, 1, -1, 14, 1]);
    design.addPosition("E6", [0, 0, -1, 8, 1]);
    design.addPosition("A5", [-3, 1, 0, 6, 1]);
    design.addPosition("D5", [-5, 1, -1, 3, 1]);
    design.addPosition("G5", [0, 0, -1, 6, 1]);
    design.addPosition("B4", [-9, 1, 0, 6, 1]);
    design.addPosition("D4", [-3, 1, -1, 0, 1]);
    design.addPosition("F4", [0, 0, -1, 6, 1]);
    design.addPosition("A3", [-6, 1, 0, 0, 1]);
    design.addPosition("E3", [-8, 1, -1, 3, 1]);
    design.addPosition("G3", [-6, 0, -1, 6, 1]);
    design.addPosition("B2", [-6, 1, 0, 0, 1]);
    design.addPosition("E2", [-3, 1, -1, 0, 1]);
    design.addPosition("F2", [-6, 0, -1, 2, 1]);
    design.addPosition("C1", [-14, 1, 0, 0, 1]);
    design.addPosition("F1", [-2, 1, -1, 0, 1]);
    design.addPosition("G1", [-6, 0, -1, 0, 0]);

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
    design.addMove(0, 2, [], 0);
    design.addMove(0, 3, [0, 4], 1);

    design.reserve("Blue", "Stone", 8);
    design.reserve("Red", "Stone", 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("B7", 80, 20, 38, 38);
    view.defPosition("C7", 141, 20, 38, 38);
    view.defPosition("D7", 200, 20, 38, 38);
    view.defPosition("A6", 20, 80, 38, 38);
    view.defPosition("C6", 141, 80, 38, 38);
    view.defPosition("E6", 259, 80, 38, 38);
    view.defPosition("A5", 20, 140, 38, 38);
    view.defPosition("D5", 200, 140, 38, 38);
    view.defPosition("G5", 380, 140, 38, 38);
    view.defPosition("B4", 80, 200, 38, 38);
    view.defPosition("D4", 200, 200, 38, 38);
    view.defPosition("F4", 318, 200, 38, 38);
    view.defPosition("A3", 20, 260, 38, 38);
    view.defPosition("E3", 259, 260, 38, 38);
    view.defPosition("G3", 380, 260, 38, 38);
    view.defPosition("B2", 80, 320, 38, 38);
    view.defPosition("E2", 259, 320, 38, 38);
    view.defPosition("F2", 318, 320, 38, 38);
    view.defPosition("C1", 141, 380, 38, 38);
    view.defPosition("F1", 318, 380, 38, 38);
    view.defPosition("G1", 380, 380, 38, 38);
}
