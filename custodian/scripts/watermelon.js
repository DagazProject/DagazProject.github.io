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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("watermelon-extension", "true");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("w");
    design.addDirection("e");

    design.addPlayer("White", [0, 1, 2, 3]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("l1", [0, 12, 11, 1]);
    design.addPosition("a1", [0, 11, -1, 1]);
    design.addPosition("b1", [0, 10, -1, 1]);
    design.addPosition("c1", [-1, 1, 10, 0]);
    design.addPosition("d1", [-1, 1, 9, 0]);
    design.addPosition("e1", [-1, 1, 8, 0]);
    design.addPosition("f1", [8, 0, 1, -1]);
    design.addPosition("g1", [7, 0, 1, -1]);
    design.addPosition("h1", [6, 0, 1, -1]);
    design.addPosition("i1", [1, -1, 0, 6]);
    design.addPosition("j1", [1, -1, 0, 5]);
    design.addPosition("k1", [-11, -1, 0, 4]);
    design.addPosition("a2", [-11, 4, -12, -10]);
    design.addPosition("d2", [-10, -8, 4, -9]);
    design.addPosition("g2", [4, -7, -6, -8]);
    design.addPosition("j2", [-4, -6, -5, 4]);
    design.addPosition("a3", [-4, 4, 3, 1]);
    design.addPosition("d3", [-1, 1, 3, -4]);
    design.addPosition("g3", [2, -4, 1, -1]);
    design.addPosition("j3", [-3, -1, -4, 1]);
    design.addPosition("a4", [-4, -2, -1, -3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addDrop(0, 1, [], 0);

    design.setupSelector(2);

    design.setup("White", "Stone", 5, 1);
    design.setup("White", "Stone", 6, 1);
    design.setup("White", "Stone", 7, 1);
    design.setup("White", "Stone", 8, 1);
    design.setup("White", "Stone", 9, 1);
    design.setup("White", "Stone", 14, 1);
    design.setup("Black", "Stone", 1, 1);
    design.setup("Black", "Stone", 2, 1);
    design.setup("Black", "Stone", 3, 1);
    design.setup("Black", "Stone", 11, 1);
    design.setup("Black", "Stone", 0, 1);
    design.setup("Black", "Stone", 12, 1);
    design.reserve("White", "Stone", 0, 1);
    design.reserve("Black", "Stone", 0, 1);

    design.reserve("White", "Stone", 6, 2);
    design.reserve("Black", "Stone", 6, 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("l1", 141, 43, 40, 40);
    view.defPosition("a1", 197, 34, 40, 40);
    view.defPosition("b1", 252, 43, 40, 40);
    view.defPosition("c1", 350, 141, 40, 40);
    view.defPosition("d1", 359, 197, 40, 40);
    view.defPosition("e1", 350, 252, 40, 40);
    view.defPosition("f1", 252, 350, 40, 40);
    view.defPosition("g1", 197, 359, 40, 40);
    view.defPosition("h1", 141, 350, 40, 40);
    view.defPosition("i1", 46, 252, 40, 40);
    view.defPosition("j1", 34, 197, 40, 40);
    view.defPosition("k1", 46, 141, 40, 40);
    view.defPosition("a2", 197, 88, 40, 40);
    view.defPosition("d2", 303, 197, 40, 40);
    view.defPosition("g2", 197, 303, 40, 40);
    view.defPosition("j2", 88, 197, 40, 40);
    view.defPosition("a3", 197, 141, 40, 40);
    view.defPosition("d3", 252, 197, 40, 40);
    view.defPosition("g3", 197, 252, 40, 40);
    view.defPosition("j3", 141, 197, 40, 40);
    view.defPosition("a4", 197, 197, 40, 40);
}
