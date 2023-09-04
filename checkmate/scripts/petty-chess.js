Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 5;
Dagaz.Model.HEIGHT = 6;
Dagaz.AI.FLAGS     = 0xE0;

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

if (Dagaz.AI.SetParams) {
    Dagaz.AI.SetParams(Dagaz.Model.WIDTH, Dagaz.Model.HEIGHT, Dagaz.AI.FLAGS);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("chess-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a6", [0, 1, 5, 0, 0, 6, 0, 0]);
    design.addPosition("b6", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("c6", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("d6", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("e6", [-1, 0, 5, 0, 0, 0, 4, 0]);
    design.addPosition("a5", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b5", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c5", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d5", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e5", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a4", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e4", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a3", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e3", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a2", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e2", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a1", [0, 1, 0, -4, -5, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("c1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("d1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("e1", [-1, 0, 0, 0, -5, 0, 0, -6]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4]);
    design.addZone("last-rank", 2, [25, 26, 27, 28, 29]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
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
    design.addCommand(1, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
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

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 2, [1, 1], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 3, [4, 7], 0);
    design.addMove(2, 3, [4, 3], 0);
    design.addMove(2, 3, [2, 6], 0);
    design.addMove(2, 3, [2, 5], 0);
    design.addMove(2, 3, [0, 7], 0);
    design.addMove(2, 3, [0, 6], 0);
    design.addMove(2, 3, [1, 3], 0);
    design.addMove(2, 3, [1, 5], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [5, 5], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 2, [4, 4], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [0, 0], 0);
    design.addMove(4, 2, [1, 1], 0);
    design.addMove(4, 2, [7, 7], 0);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [3, 3], 0);
    design.addMove(4, 2, [5, 5], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 4, [4], 0);
    design.addMove(5, 4, [2], 0);
    design.addMove(5, 4, [0], 0);
    design.addMove(5, 4, [1], 0);
    design.addMove(5, 4, [7], 0);
    design.addMove(5, 4, [6], 0);
    design.addMove(5, 4, [3], 0);
    design.addMove(5, 4, [5], 0);

    design.setup("White", "Pawn", 20);
    design.setup("White", "Pawn", 21);
    design.setup("White", "Pawn", 22);
    design.setup("White", "Pawn", 23);
    design.setup("White", "Pawn", 24);
    design.setup("White", "Rook", 29);
    design.setup("White", "Knight", 28);
    design.setup("White", "Bishop", 27);
    design.setup("White", "Queen", 25);
    design.setup("White", "King", 26);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Rook", 4);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Queen", 0);
    design.setup("Black", "King", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a6", 2, 2, 68, 68);
    view.defPosition("b6", 70, 2, 68, 68);
    view.defPosition("c6", 138, 2, 68, 68);
    view.defPosition("d6", 206, 2, 68, 68);
    view.defPosition("e6", 274, 2, 68, 68);
    view.defPosition("a5", 2, 70, 68, 68);
    view.defPosition("b5", 70, 70, 68, 68);
    view.defPosition("c5", 138, 70, 68, 68);
    view.defPosition("d5", 206, 70, 68, 68);
    view.defPosition("e5", 274, 70, 68, 68);
    view.defPosition("a4", 2, 138, 68, 68);
    view.defPosition("b4", 70, 138, 68, 68);
    view.defPosition("c4", 138, 138, 68, 68);
    view.defPosition("d4", 206, 138, 68, 68);
    view.defPosition("e4", 274, 138, 68, 68);
    view.defPosition("a3", 2, 206, 68, 68);
    view.defPosition("b3", 70, 206, 68, 68);
    view.defPosition("c3", 138, 206, 68, 68);
    view.defPosition("d3", 206, 206, 68, 68);
    view.defPosition("e3", 274, 206, 68, 68);
    view.defPosition("a2", 2, 274, 68, 68);
    view.defPosition("b2", 70, 274, 68, 68);
    view.defPosition("c2", 138, 274, 68, 68);
    view.defPosition("d2", 206, 274, 68, 68);
    view.defPosition("e2", 274, 274, 68, 68);
    view.defPosition("a1", 2, 342, 68, 68);
    view.defPosition("b1", 70, 342, 68, 68);
    view.defPosition("c1", 138, 342, 68, 68);
    view.defPosition("d1", 206, 342, 68, 68);
    view.defPosition("e1", 274, 342, 68, 68);

    view.defPopup("Promote", 24, 50);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
}
