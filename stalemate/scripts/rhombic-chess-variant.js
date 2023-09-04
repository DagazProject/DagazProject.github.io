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

    design.addDirection("n"); // 0
    design.addDirection("s"); // 1
    design.addDirection("e"); // 2
    design.addDirection("w"); // 3
    design.addDirection("m"); // 4

    design.addPlayer("Black", [1, 0, 3, 2, 4]);
    design.addPlayer("White", [0, 1, 2, 3, 4]);

    design.addPosition("a3", [0, 8, 1, 0, 11]);
    design.addPosition("b3", [0, 4, 1, -1, 9]);
    design.addPosition("c3", [0, 4, 1, -1, 7]);
    design.addPosition("d3", [0, 8, 0, -1, 5]);
    design.addPosition("a2", [0, 1, 2, 3, 4]);
    design.addPosition("b2", [-4, 4, 1, 0, 1]);
    design.addPosition("c2", [-4, 4, 0, -1, -1]);
    design.addPosition("d2", [0, 1, 2, 3, 4]);
    design.addPosition("a1", [-8, 0, 1, 0, -5]);
    design.addPosition("b1", [-4, 0, 1, -1, -7]);
    design.addPosition("c1", [-4, 0, 1, -1, -9]);
    design.addPosition("d1", [-8, 0, 0, -1, -11]);

    design.addZone("board-zone", 2, [8, 9, 10, 11, 5, 6, 0, 1, 2, 3]);
    design.addZone("board-zone", 1, [8, 9, 10, 11, 5, 6, 0, 1, 2, 3]);

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

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [1], 1);
    design.addMove(0, 1, [2], 1);

    design.reserve("White", "Stone", 4);
    design.reserve("Black", "Stone", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("a3", 2, 2, 60, 60);
    view.defPosition("b3", 110, 2, 60, 60);
    view.defPosition("c3", 218, 2, 60, 60);
    view.defPosition("d3", 326, 2, 60, 60);
    view.defPosition("a2", 2, 180, 60, 60);
    view.defPosition("b2", 110, 180, 60, 60);
    view.defPosition("c2", 218, 180, 60, 60);
    view.defPosition("d2", 326, 180, 60, 60);
    view.defPosition("a1", 2, 358, 60, 60);
    view.defPosition("b1", 110, 358, 60, 60);
    view.defPosition("c1", 218, 358, 60, 60);
    view.defPosition("d1", 326, 358, 60, 60);
}
