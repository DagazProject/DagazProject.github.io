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
    design.addDirection("nw");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("se");

    design.addPlayer("Blue", [3, 2, 1, 0, 4, 8, 7, 6, 5]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("B9", [0, 0, 0, 7, 1, 0, 0, 0, 1]);
    design.addPosition("C8", [0, 1, 0, 7, 1, -1, 0, 0, 3]);
    design.addPosition("F8", [0, 1, -1, 3, 1, 0, 0, 0, 0]);
    design.addPosition("I8", [0, 0, -1, 0, 1, 0, 0, 3, 0]);
    design.addPosition("D7", [0, 1, 0, 5, 1, -3, 0, 0, 0]);
    design.addPosition("F7", [-3, 1, -1, 6, 1, 0, 0, 0, 0]);
    design.addPosition("H7", [0, 0, -1, 15, 1, 0, -3, 6, 0]);
    design.addPosition("B6", [-7, 1, 0, 15, 1, 0, 0, 0, 0]);
    design.addPosition("C6", [-7, 1, -1, 8, 1, 0, 0, 0, 0]);
    design.addPosition("D6", [-5, 0, -1, 4, 1, 0, 0, 0, 0]);
    design.addPosition("E6", [0, 1, 0, 4, 1, 0, 0, 0, 0]);
    design.addPosition("F6", [-6, 1, -1, 0, 1, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, -1, 8, 1, 0, -6, 0, 0]);
    design.addPosition("D5", [-4, 1, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("E5", [-4, 1, -1, 4, 1, 0, 0, 0, 0]);
    design.addPosition("F5", [0, 0, -1, 4, 1, 0, 0, 0, 0]);
    design.addPosition("C4", [-8, 1, 0, 0, 1, 0, 0, 6, 0]);
    design.addPosition("D4", [0, 1, -1, 6, 1, 0, 0, 0, 0]);
    design.addPosition("E4", [-4, 0, -1, 0, 1, 0, 0, 0, 0]);
    design.addPosition("F4", [-4, 1, 0, 5, 1, 0, 0, 0, 0]);
    design.addPosition("G4", [-8, 1, -1, 7, 1, 0, 0, 0, 0]);
    design.addPosition("H4", [-15, 0, -1, 7, 1, 0, 0, 0, 0]);
    design.addPosition("B3", [-15, 1, 0, 0, 1, 0, -6, 3, 0]);
    design.addPosition("D3", [-6, 1, -1, 3, 1, 0, 0, 0, 0]);
    design.addPosition("F3", [-5, 0, -1, 0, 1, 0, 0, 0, 3]);
    design.addPosition("A2", [0, 1, 0, 0, 1, 0, -3, 0, 0]);
    design.addPosition("D2", [-3, 1, -1, 0, 1, 0, 0, 0, 0]);
    design.addPosition("G2", [-7, 0, -1, 0, 1, -3, 0, 0, 1]);
    design.addPosition("H1", [-7, 0, 0, 0, 0, -1, 0, 0, 0]);

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
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [8], 0);
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
 
    view.defPosition("B9", 66, 20, 38, 38);
    view.defPosition("C8", 111, 66, 38, 38);
    view.defPosition("F8", 246, 66, 38, 38);
    view.defPosition("I8", 381, 66, 38, 38);
    view.defPosition("D7", 156, 112, 38, 38);
    view.defPosition("F7", 246, 112, 38, 38);
    view.defPosition("H7", 336, 112, 38, 38);
    view.defPosition("B6", 66, 157, 38, 38);
    view.defPosition("C6", 111, 157, 38, 38);
    view.defPosition("D6", 156, 157, 38, 38);
    view.defPosition("E6", 201, 156, 38, 38);
    view.defPosition("F6", 246, 156, 38, 38);
    view.defPosition("G6", 291, 156, 38, 38);
    view.defPosition("D5", 156, 202, 38, 38);
    view.defPosition("E5", 201, 202, 38, 38);
    view.defPosition("F5", 247, 202, 38, 38);
    view.defPosition("C4", 111, 246, 38, 38);
    view.defPosition("D4", 156, 246, 38, 38);
    view.defPosition("E4", 201, 246, 38, 38);
    view.defPosition("F4", 247, 247, 38, 38);
    view.defPosition("G4", 291, 247, 38, 38);
    view.defPosition("H4", 336, 247, 38, 38);
    view.defPosition("B3", 66, 292, 38, 38);
    view.defPosition("D3", 156, 292, 38, 38);
    view.defPosition("F3", 247, 292, 38, 38);
    view.defPosition("A2", 20, 337, 38, 38);
    view.defPosition("D2", 156, 337, 38, 38);
    view.defPosition("G2", 291, 337, 38, 38);
    view.defPosition("H1", 336, 383, 38, 38);
}
