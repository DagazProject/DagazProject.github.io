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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-captures", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [1, 0, 3, 2]);

    design.addPosition("a3", [0, 1, 8, 0]);
    design.addPosition("b3", [-1, 1, 8, 0]);
    design.addPosition("c3", [-1, 1, 8, 0]);
    design.addPosition("d3", [-1, 1, 8, 0]);
    design.addPosition("e3", [-1, 1, 8, 0]);
    design.addPosition("f3", [-1, 1, 8, 0]);
    design.addPosition("g3", [-1, 1, 8, 0]);
    design.addPosition("h3", [-1, 0, 8, 0]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("White", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);

    design.addPiece("Black", 1);
    design.addMove(1, 0, [3, 3], 0);
    design.addMove(1, 0, [1, 1], 0);
    design.addMove(1, 0, [2, 2], 0);
    design.addMove(1, 0, [0, 0], 0);

    design.setup("You", "White", 16);
    design.setup("You", "Black", 17);
    design.setup("You", "Black", 18);
    design.setup("You", "Black", 19);
    design.setup("You", "Black", 20);
    design.setup("You", "Black", 21);
    design.setup("You", "Black", 22);
    design.setup("You", "Black", 23);
    design.setup("You", "Black", 8);
    design.setup("You", "Black", 9);
    design.setup("You", "Black", 10);
    design.setup("You", "Black", 11);
    design.setup("You", "Black", 12);
    design.setup("You", "Black", 13);
    design.setup("You", "Black", 14);
    design.setup("You", "Black", 15);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouWhite", "You White");
    view.defPiece("YouBlack", "You Black");
 
    view.defPosition("a3", 12, 12, 48, 48);
    view.defPosition("b3", 60, 12, 48, 48);
    view.defPosition("c3", 108, 12, 48, 48);
    view.defPosition("d3", 156, 12, 48, 48);
    view.defPosition("e3", 204, 12, 48, 48);
    view.defPosition("f3", 252, 12, 48, 48);
    view.defPosition("g3", 300, 12, 48, 48);
    view.defPosition("h3", 348, 12, 48, 48);
    view.defPosition("a2", 12, 60, 48, 48);
    view.defPosition("b2", 60, 60, 48, 48);
    view.defPosition("c2", 108, 60, 48, 48);
    view.defPosition("d2", 156, 60, 48, 48);
    view.defPosition("e2", 204, 60, 48, 48);
    view.defPosition("f2", 252, 60, 48, 48);
    view.defPosition("g2", 300, 60, 48, 48);
    view.defPosition("h2", 348, 60, 48, 48);
    view.defPosition("a1", 12, 108, 48, 48);
    view.defPosition("b1", 60, 108, 48, 48);
    view.defPosition("c1", 108, 108, 48, 48);
    view.defPosition("d1", 156, 108, 48, 48);
    view.defPosition("e1", 204, 108, 48, 48);
    view.defPosition("f1", 252, 108, 48, 48);
    view.defPosition("g1", 300, 108, 48, 48);
    view.defPosition("h1", 348, 108, 48, 48);
}
