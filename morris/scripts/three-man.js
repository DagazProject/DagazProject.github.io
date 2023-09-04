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
    design.checkVersion("ko", "asymmetric");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("morris-extension", "true");
    design.checkVersion("three-man-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");
    design.addDirection("x");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Blue", [1, 0, 3, 2, 4, 6, 5, 8, 7]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("a3", [0, 1, 3, 0, 3, 0, 0, 0, 4]);
    design.addPosition("b3", [-1, 1, 3, 0, 3, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 0, 3, 0, 3, 0, 2, 0, 0]);
    design.addPosition("a2", [0, 1, 3, -3, 3, 0, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 3, -3, 3, -2, 2, -4, 4]);
    design.addPosition("c2", [-1, 0, 3, -3, 3, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -3, -5, -2, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -3, -5, 0, 0, 0, 0]);
    design.addPosition("c1", [-1, 0, 0, -3, 0, 0, 0, -4, 0]);

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

    design.addPriority(1);			// drop-type
    design.addPriority(0);			// normal-type

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 1);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [8], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);

    design.reserve("Blue", "Stone", 3);
    design.reserve("Red", "Stone", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("RedStone", "Red Stone");
 
    view.defPosition("a3", 32, 32, 84, 84);
    view.defPosition("b3", 116, 32, 84, 84);
    view.defPosition("c3", 200, 32, 84, 84);
    view.defPosition("a2", 32, 116, 84, 84);
    view.defPosition("b2", 116, 116, 84, 84);
    view.defPosition("c2", 200, 116, 84, 84);
    view.defPosition("a1", 32, 200, 84, 84);
    view.defPosition("b1", 116, 200, 84, 84);
    view.defPosition("c1", 200, 200, 84, 84);
}
