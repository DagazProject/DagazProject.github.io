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

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Blue", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("P01", [0, 2, 0, 0, 0, 1, 0, 4]);
    design.addPosition("P02", [0, 2, 0, 0, -1, 5, 0, 1]);
    design.addPosition("P03", [-2, 5, 1, 0, 0, 0, -1, 3]);
    design.addPosition("P04", [-2, 5, 1, -1, 0, 2, 0, 0]);
    design.addPosition("P05", [0, 1, 0, -1, 0, 0, -4, 4]);
    design.addPosition("P06", [-1, 1, 0, 0, -2, 2, -3, 0]);
    design.addPosition("P07", [-1, 0, 1, 0, -5, 0, 0, 0]);
    design.addPosition("P08", [-5, 0, 1, -1, -2, 0, 0, 0]);
    design.addPosition("P09", [-5, 0, 0, -1, 0, 0, -4, 0]);

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
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [4], 0);

    design.reserve("Blue", "Stone", 3);
    design.reserve("Red", "Stone", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("RedStone", "Red Stone");
 
    view.defPosition("P01", 268, 14, 33, 33);
    view.defPosition("P02", 170, 185, 33, 33);
    view.defPosition("P03", 229, 290, 33, 33);
    view.defPosition("P04", 306, 291, 33, 33);
    view.defPosition("P05", 426, 291, 33, 33);
    view.defPosition("P06", 266, 358, 33, 33);
    view.defPosition("P07", 7, 462, 33, 33);
    view.defPosition("P08", 204, 463, 33, 33);
    view.defPosition("P09", 526, 464, 33, 33);
}
