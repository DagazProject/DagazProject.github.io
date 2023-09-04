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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("ko-sync", "true");
    design.checkVersion("apocalypse-promotion", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("nx");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5, 8]);
    design.addPlayer("Black", [0, 1, 4, 5, 2, 3, 7, 6, 8]);
    design.addTurn(1);

    design.addPosition("a5", [0, 1, 5, 0, 0, 6, 0, 0, 21]);
    design.addPosition("b5", [-1, 1, 5, 0, 0, 6, 4, 0, 21]);
    design.addPosition("c5", [-1, 1, 5, 0, 0, 6, 4, 0, 21]);
    design.addPosition("d5", [-1, 1, 5, 0, 0, 6, 4, 0, 21]);
    design.addPosition("e5", [-1, 0, 5, 0, 0, 0, 4, 0, 0]);
    design.addPosition("a4", [0, 1, 5, -4, -5, 6, 0, 0, -5]);
    design.addPosition("b4", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("c4", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("d4", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("e4", [-1, 0, 5, 0, -5, 0, 4, -6, -5]);
    design.addPosition("a3", [0, 1, 5, -4, -5, 6, 0, 0, -5]);
    design.addPosition("b3", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("c3", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("d3", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("e3", [-1, 0, 5, 0, -5, 0, 4, -6, -5]);
    design.addPosition("a2", [0, 1, 5, -4, -5, 6, 0, 0, -5]);
    design.addPosition("b2", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("c2", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("d2", [-1, 1, 5, -4, -5, 6, 4, -6, -5]);
    design.addPosition("e2", [-1, 0, 5, 0, -5, 0, 4, -6, -5]);
    design.addPosition("a1", [0, 1, 0, -4, -5, 0, 0, 0, -5]);
    design.addPosition("b1", [-1, 1, 0, -4, -5, 0, 0, -6, -5]);
    design.addPosition("c1", [-1, 1, 0, -4, -5, 0, 0, -6, -5]);
    design.addPosition("d1", [-1, 1, 0, -4, -5, 0, 0, -6, -5]);
    design.addPosition("e1", [-1, 0, 0, 0, -5, 0, 0, -6, -5]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4]);
    design.addZone("last-rank", 2, [20, 21, 22, 23, 24]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	21);	// position
    design.addCommand(0, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	10);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-11);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	1);	// Knight
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	1);	// Knight
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Pawn", 0, 1);
    design.addMove(0, 0, [20, 8], 0);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 2, [4], 1);

    design.addPiece("Knight", 1, 100);
    design.addMove(1, 3, [4, 7], 1);
    design.addMove(1, 3, [4, 3], 1);
    design.addMove(1, 3, [2, 6], 1);
    design.addMove(1, 3, [2, 5], 1);
    design.addMove(1, 3, [0, 7], 1);
    design.addMove(1, 3, [0, 6], 1);
    design.addMove(1, 3, [1, 3], 1);
    design.addMove(1, 3, [1, 5], 1);

    design.addPiece("None", 2, 0);

    design.setup("White", "Pawn", 15);
    design.setup("White", "Pawn", 21);
    design.setup("White", "Pawn", 22);
    design.setup("White", "Pawn", 23);
    design.setup("White", "Pawn", 19);
    design.setup("White", "Knight", 20);
    design.setup("White", "Knight", 24);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 1);
    design.setup("Black", "Pawn", 2);
    design.setup("Black", "Pawn", 3);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Knight", 0);
    design.setup("Black", "Knight", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteNone", "White None");
    view.defPiece("BlackNone", "Black None");
 
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
