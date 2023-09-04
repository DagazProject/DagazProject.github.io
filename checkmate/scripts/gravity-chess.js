if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(10, "../sounds/once.ogg", true);
    Dagaz.Controller.addSound(11, "../sounds/twice.ogg", true);
}

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
    design.checkVersion("complete-partial", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1]);

    design.addPosition("h8", [0, 8, 9, 0, 1, 0, 0, 0]);
    design.addPosition("g8", [7, 8, 9, -1, 1, 0, 0, 0]);
    design.addPosition("f8", [7, 8, 9, -1, 1, 0, 0, 0]);
    design.addPosition("e8", [7, 8, 9, -1, 1, 0, 0, 0]);
    design.addPosition("d8", [7, 8, 9, -1, 1, 0, 0, 0]);
    design.addPosition("c8", [7, 8, 9, -1, 1, 0, 0, 0]);
    design.addPosition("b8", [7, 8, 9, -1, 1, 0, 0, 0]);
    design.addPosition("a8", [7, 8, 0, -1, 0, 0, 0, 0]);
    design.addPosition("h7", [0, 8, 9, 0, 1, 0, -7, -8]);
    design.addPosition("g7", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("f7", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("e7", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("d7", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("c7", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("b7", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("a7", [7, 8, 0, -1, 0, -9, 0, -8]);
    design.addPosition("h6", [0, 8, 9, 0, 1, 0, -7, -8]);
    design.addPosition("g6", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("f6", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("e6", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("d6", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("c6", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("b6", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("a6", [7, 8, 0, -1, 0, -9, 0, -8]);
    design.addPosition("h5", [0, 8, 9, 0, 1, 0, -7, -8]);
    design.addPosition("g5", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("f5", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("e5", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("d5", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("c5", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("b5", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("a5", [7, 8, 0, -1, 0, -9, 0, -8]);
    design.addPosition("h4", [0, 8, 9, 0, 1, 0, -7, -8]);
    design.addPosition("g4", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("f4", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("e4", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("d4", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("c4", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("b4", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("a4", [7, 8, 0, -1, 0, -9, 0, -8]);
    design.addPosition("h3", [0, 8, 9, 0, 1, 0, -7, -8]);
    design.addPosition("g3", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("f3", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("e3", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("d3", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("c3", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("b3", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("a3", [7, 8, 0, -1, 0, -9, 0, -8]);
    design.addPosition("h2", [0, 8, 9, 0, 1, 0, -7, -8]);
    design.addPosition("g2", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("f2", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("e2", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("d2", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("c2", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("b2", [7, 8, 9, -1, 1, -9, -7, -8]);
    design.addPosition("a2", [7, 8, 0, -1, 0, -9, 0, -8]);
    design.addPosition("h1", [0, 0, 0, 0, 1, 0, -7, -8]);
    design.addPosition("g1", [0, 0, 0, -1, 1, -9, -7, -8]);
    design.addPosition("f1", [0, 0, 0, -1, 1, -9, -7, -8]);
    design.addPosition("e1", [0, 0, 0, -1, 1, -9, -7, -8]);
    design.addPosition("d1", [0, 0, 0, -1, 1, -9, -7, -8]);
    design.addPosition("c1", [0, 0, 0, -1, 1, -9, -7, -8]);
    design.addPosition("b1", [0, 0, 0, -1, 1, -9, -7, -8]);
    design.addPosition("a1", [0, 0, 0, -1, 0, -9, 0, -8]);

    design.addZone("last-rank", 1, [7, 6, 5, 4, 3, 2, 1, 0]);
    design.addZone("last-rank", 2, [63, 62, 61, 60, 59, 58, 57, 56]);
    design.addZone("third-rank", 1, [47, 46, 45, 44, 43, 42, 41, 40]);
    design.addZone("third-rank", 2, [23, 22, 21, 20, 19, 18, 17, 16]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.MODE,	1);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	3);
    design.addCommand(0, ZRF.MODE,	1);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(2, ZRF.MODE,	1);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	3);
    design.addCommand(2, ZRF.MODE,	1);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.MODE,	1);	// continue-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	8);
    design.addCommand(5, ZRF.FORK,	4);
    design.addCommand(5, ZRF.MODE,	1);	// continue-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-9);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.MODE,	1);	// continue-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.MODE,	1);	// continue-type
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.MODE,	1);	// continue-type
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 2, [6], 0);
    design.addMove(0, 2, [5], 0);
    design.addMove(0, 3, [3, 7, 7], 0);
    design.addMove(0, 3, [4, 7, 7], 0);
    design.addMove(0, 4, [], 1);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 5, [7, 7], 0);
    design.addMove(1, 5, [1, 1], 0);
    design.addMove(1, 5, [4, 4], 0);
    design.addMove(1, 5, [3, 3], 0);
    design.addMove(1, 4, [], 1);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 6, [7, 6], 0);
    design.addMove(2, 6, [7, 5], 0);
    design.addMove(2, 6, [1, 2], 0);
    design.addMove(2, 6, [1, 0], 0);
    design.addMove(2, 6, [4, 6], 0);
    design.addMove(2, 6, [4, 2], 0);
    design.addMove(2, 6, [3, 5], 0);
    design.addMove(2, 6, [3, 0], 0);
    design.addMove(2, 4, [], 1);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 5, [6, 6], 0);
    design.addMove(3, 5, [2, 2], 0);
    design.addMove(3, 5, [5, 5], 0);
    design.addMove(3, 5, [0, 0], 0);
    design.addMove(3, 4, [], 1);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 5, [7, 7], 0);
    design.addMove(4, 5, [1, 1], 0);
    design.addMove(4, 5, [4, 4], 0);
    design.addMove(4, 5, [3, 3], 0);
    design.addMove(4, 5, [6, 6], 0);
    design.addMove(4, 5, [2, 2], 0);
    design.addMove(4, 5, [5, 5], 0);
    design.addMove(4, 5, [0, 0], 0);
    design.addMove(4, 4, [], 1);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 7, [7], 0);
    design.addMove(5, 7, [1], 0);
    design.addMove(5, 7, [4], 0);
    design.addMove(5, 7, [3], 0);
    design.addMove(5, 7, [6], 0);
    design.addMove(5, 7, [2], 0);
    design.addMove(5, 7, [5], 0);
    design.addMove(5, 7, [0], 0);
    design.addMove(5, 4, [], 1);

    design.setup("White", "Pawn", 55);
    design.setup("White", "Pawn", 54);
    design.setup("White", "Pawn", 53);
    design.setup("White", "Pawn", 52);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 49);
    design.setup("White", "Pawn", 48);
    design.setup("White", "Rook", 63);
    design.setup("White", "Rook", 56);
    design.setup("White", "Knight", 62);
    design.setup("White", "Knight", 57);
    design.setup("White", "Bishop", 61);
    design.setup("White", "Bishop", 58);
    design.setup("White", "Queen", 60);
    design.setup("White", "King", 59);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Rook", 7);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Knight", 6);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Bishop", 5);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Queen", 4);
    design.setup("Black", "King", 3);
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
 
    view.defPosition("h8", 2, 2, 68, 68);
    view.defPosition("g8", 2, 70, 68, 68);
    view.defPosition("f8", 2, 138, 68, 68);
    view.defPosition("e8", 2, 206, 68, 68);
    view.defPosition("d8", 2, 274, 68, 68);
    view.defPosition("c8", 2, 342, 68, 68);
    view.defPosition("b8", 2, 410, 68, 68);
    view.defPosition("a8", 2, 478, 68, 68);
    view.defPosition("h7", 70, 2, 68, 68);
    view.defPosition("g7", 70, 70, 68, 68);
    view.defPosition("f7", 70, 138, 68, 68);
    view.defPosition("e7", 70, 206, 68, 68);
    view.defPosition("d7", 70, 274, 68, 68);
    view.defPosition("c7", 70, 342, 68, 68);
    view.defPosition("b7", 70, 410, 68, 68);
    view.defPosition("a7", 70, 478, 68, 68);
    view.defPosition("h6", 138, 2, 68, 68);
    view.defPosition("g6", 138, 70, 68, 68);
    view.defPosition("f6", 138, 138, 68, 68);
    view.defPosition("e6", 138, 206, 68, 68);
    view.defPosition("d6", 138, 274, 68, 68);
    view.defPosition("c6", 138, 342, 68, 68);
    view.defPosition("b6", 138, 410, 68, 68);
    view.defPosition("a6", 138, 478, 68, 68);
    view.defPosition("h5", 206, 2, 68, 68);
    view.defPosition("g5", 206, 70, 68, 68);
    view.defPosition("f5", 206, 138, 68, 68);
    view.defPosition("e5", 206, 206, 68, 68);
    view.defPosition("d5", 206, 274, 68, 68);
    view.defPosition("c5", 206, 342, 68, 68);
    view.defPosition("b5", 206, 410, 68, 68);
    view.defPosition("a5", 206, 478, 68, 68);
    view.defPosition("h4", 274, 2, 68, 68);
    view.defPosition("g4", 274, 70, 68, 68);
    view.defPosition("f4", 274, 138, 68, 68);
    view.defPosition("e4", 274, 206, 68, 68);
    view.defPosition("d4", 274, 274, 68, 68);
    view.defPosition("c4", 274, 342, 68, 68);
    view.defPosition("b4", 274, 410, 68, 68);
    view.defPosition("a4", 274, 478, 68, 68);
    view.defPosition("h3", 342, 2, 68, 68);
    view.defPosition("g3", 342, 70, 68, 68);
    view.defPosition("f3", 342, 138, 68, 68);
    view.defPosition("e3", 342, 206, 68, 68);
    view.defPosition("d3", 342, 274, 68, 68);
    view.defPosition("c3", 342, 342, 68, 68);
    view.defPosition("b3", 342, 410, 68, 68);
    view.defPosition("a3", 342, 478, 68, 68);
    view.defPosition("h2", 410, 2, 68, 68);
    view.defPosition("g2", 410, 70, 68, 68);
    view.defPosition("f2", 410, 138, 68, 68);
    view.defPosition("e2", 410, 206, 68, 68);
    view.defPosition("d2", 410, 274, 68, 68);
    view.defPosition("c2", 410, 342, 68, 68);
    view.defPosition("b2", 410, 410, 68, 68);
    view.defPosition("a2", 410, 478, 68, 68);
    view.defPosition("h1", 478, 2, 68, 68);
    view.defPosition("g1", 478, 70, 68, 68);
    view.defPosition("f1", 478, 138, 68, 68);
    view.defPosition("e1", 478, 206, 68, 68);
    view.defPosition("d1", 478, 274, 68, 68);
    view.defPosition("c1", 478, 342, 68, 68);
    view.defPosition("b1", 478, 410, 68, 68);
    view.defPosition("a1", 478, 478, 68, 68);
}
