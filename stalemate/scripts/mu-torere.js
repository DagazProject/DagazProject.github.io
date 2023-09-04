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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");
    design.addDirection("nn");
    design.addDirection("ee");

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4, 7, 6, 1, 2]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    design.addPosition("a3", [0, 3, 0, 1, 0, 0, 0, 4, 0, 0]);
    design.addPosition("b3", [0, 3, -1, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 3, -1, 0, 0, 2, 0, 0, 0, 0]);
    design.addPosition("a2", [-3, 3, 0, 1, 0, 0, 0, 0, 0, 1]);
    design.addPosition("b2", [-3, 3, -1, 1, -2, 2, -4, 4, -3, 1]);
    design.addPosition("c2", [-3, 3, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-3, 0, 0, 1, -2, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [-3, 0, -1, 1, 0, 0, 0, 0, -3, 0]);
    design.addPosition("c1", [-3, 0, -1, 0, 0, 0, -4, 0, 0, 0]);

    design.addZone("putahi", 2, [4]);
    design.addZone("putahi", 1, [4]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Piece", 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [7], 0);

    design.setup("Black", "Piece", 5);
    design.setup("Black", "Piece", 6);
    design.setup("Black", "Piece", 7);
    design.setup("Black", "Piece", 8);
    design.setup("White", "Piece", 0);
    design.setup("White", "Piece", 1);
    design.setup("White", "Piece", 2);
    design.setup("White", "Piece", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackPiece", "Black Piece");
    view.defPiece("WhitePiece", "White Piece");
 
    view.defPosition("a3", 60, 60, 48, 48);
    view.defPosition("b3", 199, 2, 48, 48);
    view.defPosition("c3", 340, 60, 48, 48);
    view.defPosition("a2", 2, 199, 48, 48);
    view.defPosition("b2", 199, 199, 48, 48);
    view.defPosition("c2", 396, 199, 48, 48);
    view.defPosition("a1", 60, 341, 48, 48);
    view.defPosition("b1", 199, 395, 48, 48);
    view.defPosition("c1", 341, 341, 48, 48);
}
