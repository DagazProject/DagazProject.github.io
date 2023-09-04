Dagaz.Controller.persistense = "none";

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
    design.checkVersion("show-hints", "false");

    design.addDirection("w");
    design.addDirection("e");

    design.addPlayer("You", [1, 0]);

    design.addPosition("a1", [0, 1]);
    design.addPosition("b1", [-1, 1]);
    design.addPosition("c1", [-1, 1]);
    design.addPosition("d1", [-1, 1]);
    design.addPosition("e1", [-1, 1]);
    design.addPosition("f1", [-1, 1]);
    design.addPosition("g1", [-1, 0]);

    design.addZone("white-goal", 1, [0, 1, 2]);
    design.addZone("black-goal", 1, [4, 5, 6]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("White", 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [0, 0], 0);

    design.addPiece("Black", 1);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 1, [1, 1], 0);

    design.setup("You", "White", 4);
    design.setup("You", "White", 5);
    design.setup("You", "White", 6);
    design.setup("You", "Black", 0);
    design.setup("You", "Black", 1);
    design.setup("You", "Black", 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouWhite", "You White");
    view.defPiece("YouBlack", "You Black");
 
    view.defPosition("a1", 2, 2, 68, 68);
    view.defPosition("b1", 70, 2, 68, 68);
    view.defPosition("c1", 138, 2, 68, 68);
    view.defPosition("d1", 206, 2, 68, 68);
    view.defPosition("e1", 274, 2, 68, 68);
    view.defPosition("f1", 342, 2, 68, 68);
    view.defPosition("g1", 410, 2, 68, 68);
}
