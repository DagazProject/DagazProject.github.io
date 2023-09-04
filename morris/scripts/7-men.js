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

    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");
    design.addDirection("x");

    design.addPlayer("Blue", [1, 0, 3, 2, 5, 4, 6]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6]);

    design.addPosition("C5", [1, 0, 0, 3, 0, 0, 1]);
    design.addPosition("E5", [1, -1, 0, 3, 0, 0, 1]);
    design.addPosition("G5", [0, -1, 0, 0, 0, 4, 1]);
    design.addPosition("B4", [0, 0, -3, 4, 0, 5, 1]);
    design.addPosition("D4", [1, 0, -3, 4, 0, 0, 1]);
    design.addPosition("F4", [1, -1, 0, 0, 0, 4, 1]);
    design.addPosition("H4", [0, -1, 0, 0, -4, 4, 1]);
    design.addPosition("A3", [0, 0, -4, 0, 0, 4, 1]);
    design.addPosition("C3", [0, 0, -4, 0, -5, 4, 1]);
    design.addPosition("G3", [0, 0, 0, 4, -4, 5, 1]);
    design.addPosition("I3", [0, 0, 0, 4, -4, 0, 1]);
    design.addPosition("B2", [1, 0, 0, 0, -4, 4, 1]);
    design.addPosition("D2", [1, -1, 0, 0, -4, 0, 1]);
    design.addPosition("F2", [0, -1, -4, 3, 0, 0, 1]);
    design.addPosition("H2", [0, 0, -4, 3, -5, 0, 1]);
    design.addPosition("C1", [1, 0, 0, 0, -4, 0, 1]);
    design.addPosition("E1", [1, -1, -3, 0, 0, 0, 1]);
    design.addPosition("G1", [0, -1, -3, 0, 0, 0, 0]);

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
    design.addCommand(3, ZRF.ON_BOARD_DIR,	6);	// name
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
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 2, [], 0);
    design.addMove(0, 3, [0, 6], 1);

    design.reserve("Blue", "Stone", 7);
    design.reserve("Red", "Stone", 7);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("C5", 93, 19, 38, 38);
    view.defPosition("E5", 167, 19, 38, 38);
    view.defPosition("G5", 241, 19, 38, 38);
    view.defPosition("B4", 56, 79, 38, 38);
    view.defPosition("D4", 130, 79, 38, 38);
    view.defPosition("F4", 204, 79, 38, 38);
    view.defPosition("H4", 278, 79, 38, 38);
    view.defPosition("A3", 19, 139, 38, 38);
    view.defPosition("C3", 93, 138, 38, 38);
    view.defPosition("G3", 241, 139, 38, 38);
    view.defPosition("I3", 315, 139, 38, 38);
    view.defPosition("B2", 56, 199, 38, 38);
    view.defPosition("D2", 130, 199, 38, 38);
    view.defPosition("F2", 204, 199, 38, 38);
    view.defPosition("H2", 278, 199, 38, 38);
    view.defPosition("C1", 93, 259, 38, 38);
    view.defPosition("E1", 167, 259, 38, 38);
    view.defPosition("G1", 241, 259, 38, 38);
}
