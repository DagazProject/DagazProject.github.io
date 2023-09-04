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
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [1, 0, 3, 2]);

    design.addPosition("a5", [0, 1, 5, 0]);
    design.addPosition("b5", [-1, 1, 5, 0]);
    design.addPosition("c5", [-1, 0, 5, 0]);
    design.addPosition("d5", [0, 1, 2, 3]);
    design.addPosition("e5", [0, 1, 2, 3]);
    design.addPosition("a4", [0, 1, 5, -5]);
    design.addPosition("b4", [-1, 1, 5, -5]);
    design.addPosition("c4", [-1, 0, 5, -5]);
    design.addPosition("d4", [0, 1, 2, 3]);
    design.addPosition("e4", [0, 1, 2, 3]);
    design.addPosition("a3", [0, 1, 0, -5]);
    design.addPosition("b3", [-1, 1, 0, -5]);
    design.addPosition("c3", [-1, 1, 5, -5]);
    design.addPosition("d3", [-1, 1, 5, 0]);
    design.addPosition("e3", [-1, 0, 5, 0]);
    design.addPosition("a2", [0, 1, 2, 3]);
    design.addPosition("b2", [0, 1, 2, 3]);
    design.addPosition("c2", [0, 1, 5, -5]);
    design.addPosition("d2", [-1, 1, 5, -5]);
    design.addPosition("e2", [-1, 0, 5, -5]);
    design.addPosition("a1", [0, 1, 2, 3]);
    design.addPosition("b1", [0, 1, 2, 3]);
    design.addPosition("c1", [0, 1, 0, -5]);
    design.addPosition("d1", [-1, 1, 0, -5]);
    design.addPosition("e1", [-1, 0, 0, -5]);

    design.addZone("white-goal", 1, [10, 5, 0, 11, 6, 1, 7, 2]);
    design.addZone("black-goal", 1, [22, 17, 23, 18, 13, 24, 19, 14]);

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
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [3, 3], 0);

    design.addPiece("Black", 1);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 1, [1, 1], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 1, [2, 2], 0);

    design.setup("You", "White", 22);
    design.setup("You", "White", 17);
    design.setup("You", "White", 23);
    design.setup("You", "White", 18);
    design.setup("You", "White", 13);
    design.setup("You", "White", 24);
    design.setup("You", "White", 19);
    design.setup("You", "White", 14);
    design.setup("You", "Black", 10);
    design.setup("You", "Black", 5);
    design.setup("You", "Black", 0);
    design.setup("You", "Black", 11);
    design.setup("You", "Black", 6);
    design.setup("You", "Black", 1);
    design.setup("You", "Black", 7);
    design.setup("You", "Black", 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouWhite", "You White");
    view.defPiece("YouBlack", "You Black");
 
    view.defPosition("a5", 2, 2, 68, 68);
    view.defPosition("b5", 70, 2, 68, 68);
    view.defPosition("c5", 138, 2, 68, 68);
    view.defPosition("d5", 206, 2, 68, 68);
    view.defPosition("e5", 274, 2, 68, 68);
    view.defPosition("a4", 2, 70, 68, 68);
    view.defPosition("b4", 70, 70, 68, 68);
    view.defPosition("c4", 138, 70, 68, 68);
    view.defPosition("d4", 206, 70, 68, 68);
    view.defPosition("e4", 274, 70, 68, 68);
    view.defPosition("a3", 2, 138, 68, 68);
    view.defPosition("b3", 70, 138, 68, 68);
    view.defPosition("c3", 138, 138, 68, 68);
    view.defPosition("d3", 206, 138, 68, 68);
    view.defPosition("e3", 274, 138, 68, 68);
    view.defPosition("a2", 2, 206, 68, 68);
    view.defPosition("b2", 70, 206, 68, 68);
    view.defPosition("c2", 138, 206, 68, 68);
    view.defPosition("d2", 206, 206, 68, 68);
    view.defPosition("e2", 274, 206, 68, 68);
    view.defPosition("a1", 2, 274, 68, 68);
    view.defPosition("b1", 70, 274, 68, 68);
    view.defPosition("c1", 138, 274, 68, 68);
    view.defPosition("d1", 206, 274, 68, 68);
    view.defPosition("e1", 274, 274, 68, 68);
}
