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
    design.checkVersion("prevent-flipping", "2");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Black", [3, 2, 1, 0]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a5", [5, 1, 0, 0]);
    design.addPosition("b5", [5, 1, -1, 0]);
    design.addPosition("c5", [5, 1, -1, 0]);
    design.addPosition("d5", [5, 1, -1, 0]);
    design.addPosition("e5", [5, 0, -1, 0]);
    design.addPosition("a4", [5, 1, 0, -5]);
    design.addPosition("b4", [5, 1, -1, -5]);
    design.addPosition("c4", [5, 1, -1, -5]);
    design.addPosition("d4", [5, 1, -1, -5]);
    design.addPosition("e4", [5, 0, -1, -5]);
    design.addPosition("a3", [5, 1, 0, -5]);
    design.addPosition("b3", [5, 1, -1, -5]);
    design.addPosition("c3", [5, 1, -1, -5]);
    design.addPosition("d3", [5, 1, -1, -5]);
    design.addPosition("e3", [5, 0, -1, -5]);
    design.addPosition("a2", [5, 1, 0, -5]);
    design.addPosition("b2", [5, 1, -1, -5]);
    design.addPosition("c2", [5, 1, -1, -5]);
    design.addPosition("d2", [5, 1, -1, -5]);
    design.addPosition("e2", [5, 0, -1, -5]);
    design.addPosition("a1", [0, 1, 0, -5]);
    design.addPosition("b1", [0, 1, -1, -5]);
    design.addPosition("c1", [0, 1, -1, -5]);
    design.addPosition("d1", [0, 1, -1, -5]);
    design.addPosition("e1", [0, 0, -1, -5]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);

    design.setup("Black", "Stone", 20);
    design.setup("Black", "Stone", 21);
    design.setup("Black", "Stone", 22);
    design.setup("Black", "Stone", 23);
    design.setup("Black", "Stone", 24);

    design.setup("White", "Stone", 0);
    design.setup("White", "Stone", 1);
    design.setup("White", "Stone", 2);
    design.setup("White", "Stone", 3);
    design.setup("White", "Stone", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a5", 2, 2, 61, 61);
    view.defPosition("b5", 63, 2, 61, 61);
    view.defPosition("c5", 124, 2, 61, 61);
    view.defPosition("d5", 185, 2, 61, 61);
    view.defPosition("e5", 246, 2, 61, 61);
    view.defPosition("a4", 2, 63, 61, 61);
    view.defPosition("b4", 63, 63, 61, 61);
    view.defPosition("c4", 124, 63, 61, 61);
    view.defPosition("d4", 185, 63, 61, 61);
    view.defPosition("e4", 246, 63, 61, 61);
    view.defPosition("a3", 2, 124, 61, 61);
    view.defPosition("b3", 63, 124, 61, 61);
    view.defPosition("c3", 124, 124, 61, 61);
    view.defPosition("d3", 185, 124, 61, 61);
    view.defPosition("e3", 246, 124, 61, 61);
    view.defPosition("a2", 2, 185, 61, 61);
    view.defPosition("b2", 63, 185, 61, 61);
    view.defPosition("c2", 124, 185, 61, 61);
    view.defPosition("d2", 185, 185, 61, 61);
    view.defPosition("e2", 246, 185, 61, 61);
    view.defPosition("a1", 2, 246, 61, 61);
    view.defPosition("b1", 63, 246, 61, 61);
    view.defPosition("c1", 124, 246, 61, 61);
    view.defPosition("d1", 185, 246, 61, 61);
    view.defPosition("e1", 246, 246, 61, 61);
}
