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
    design.checkVersion("advisor-wait", "5");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("se");
    design.addDirection("nw");

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a5", [0, 10, 2, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 0, 2, -2, 0, 4, 6, 0]);
    design.addPosition("d5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [0, 10, 0, -2, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, -4, 4, 6, 0]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, 0, 4, 6, -6]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [-10, 10, 0, 0, -4, 0, 6, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, -4, 4, 6, -6]);
    design.addPosition("d3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e3", [-10, 10, 0, 0, 0, 4, 0, -6]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, -4, 0, 6, -6]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, -4, 4, 0, -6]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-10, 0, 2, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 2, -2, -4, 0, 0, -6]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [-10, 0, 0, -2, 0, 0, 0, 0]);

    design.addZone("board-zone", 2, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]);
    design.addZone("board-zone", 1, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// drop-type
    design.addPriority(1);			// normal-type

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [1], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 1, [5], 1);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [4], 1);

    design.reserve("White", "Stone", 5);
    design.reserve("Black", "Stone", 5);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("a5", 2, 2, 60, 60);
    view.defPosition("b5", 91, 2, 60, 60);
    view.defPosition("c5", 180, 2, 60, 60);
    view.defPosition("d5", 269, 2, 60, 60);
    view.defPosition("e5", 358, 2, 60, 60);
    view.defPosition("a4", 2, 91, 60, 60);
    view.defPosition("b4", 91, 91, 60, 60);
    view.defPosition("c4", 180, 91, 60, 60);
    view.defPosition("d4", 269, 91, 60, 60);
    view.defPosition("e4", 358, 91, 60, 60);
    view.defPosition("a3", 2, 180, 60, 60);
    view.defPosition("b3", 91, 180, 60, 60);
    view.defPosition("c3", 180, 180, 60, 60);
    view.defPosition("d3", 269, 180, 60, 60);
    view.defPosition("e3", 358, 180, 60, 60);
    view.defPosition("a2", 2, 269, 60, 60);
    view.defPosition("b2", 91, 269, 60, 60);
    view.defPosition("c2", 180, 269, 60, 60);
    view.defPosition("d2", 269, 269, 60, 60);
    view.defPosition("e2", 358, 269, 60, 60);
    view.defPosition("a1", 2, 358, 60, 60);
    view.defPosition("b1", 91, 358, 60, 60);
    view.defPosition("c1", 180, 358, 60, 60);
    view.defPosition("d1", 269, 358, 60, 60);
    view.defPosition("e1", 358, 358, 60, 60);
}
