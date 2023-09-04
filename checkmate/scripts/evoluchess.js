Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;

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
    design.checkVersion("advisor-wait", "20");

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

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, -8]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("last-rank", 2, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("home-zone", 1, [56, 57, 58, 59, 60, 61, 62, 63, 48, 49, 50, 51, 52, 53, 54, 55]);
    design.addZone("home-zone", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

    design.addCommand(0, ZRF.IN_ZONE,	1);	// home-zone
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
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	5);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	5);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	6);	// Wall
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	5);	// Queen
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	1);	// Pawn
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	6);	// Wall
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	1);	// home-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	1);	// Pawn
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	6);	// Wall
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

//  design.addPriority(1);			// drop-type
//  design.addPriority(2);			// normal-type

    design.addPiece("King", 0, 600000);
    design.addDrop(0, 0, [], 1);

    design.addPiece("Pawn", 1, 800);
    design.addMove(1, 1, [7], 2);
    design.addMove(1, 2, [7, 7], 2);
    design.addMove(1, 3, [6], 2);
    design.addMove(1, 3, [5], 2);
    design.addMove(1, 4, [3, 7, 7], 2);
    design.addMove(1, 4, [4, 7, 7], 2);

    design.addPiece("Rook", 2, 5000);
    design.addDrop(2, 0, [], 1);
    design.addMove(2, 5, [7, 7], 2);
    design.addMove(2, 5, [1, 1], 2);
    design.addMove(2, 5, [4, 4], 2);
    design.addMove(2, 5, [3, 3], 2);
    design.addMove(2, 6, [6], 2);
    design.addMove(2, 6, [5], 2);
    design.addMove(2, 6, [2], 2);
    design.addMove(2, 6, [0], 2);

    design.addPiece("Knight", 3, 3350);
    design.addDrop(3, 0, [], 1);
    design.addMove(3, 7, [7, 6], 2);
    design.addMove(3, 7, [7, 5], 2);
    design.addMove(3, 7, [1, 2], 2);
    design.addMove(3, 7, [1, 0], 2);
    design.addMove(3, 7, [4, 6], 2);
    design.addMove(3, 7, [4, 2], 2);
    design.addMove(3, 7, [3, 5], 2);
    design.addMove(3, 7, [3, 0], 2);
    design.addMove(3, 6, [7], 2);
    design.addMove(3, 6, [3], 2);
    design.addMove(3, 6, [4], 2);
    design.addMove(3, 6, [1], 2);
    design.addMove(3, 6, [6], 2);
    design.addMove(3, 6, [5], 2);
    design.addMove(3, 6, [2], 2);
    design.addMove(3, 6, [0], 2);

    design.addPiece("Bishop", 4, 3450);
    design.addDrop(4, 0, [], 1);
    design.addMove(4, 5, [6, 6], 2);
    design.addMove(4, 5, [2, 2], 2);
    design.addMove(4, 5, [5, 5], 2);
    design.addMove(4, 5, [0, 0], 2);
    design.addMove(4, 6, [7], 2);
    design.addMove(4, 6, [3], 2);
    design.addMove(4, 6, [4], 2);
    design.addMove(4, 6, [1], 2);

    design.addPiece("Queen", 5, 9750);
    design.addDrop(5, 0, [], 1);
    design.addMove(5, 5, [7, 7], 2);
    design.addMove(5, 5, [1, 1], 2);
    design.addMove(5, 5, [4, 4], 2);
    design.addMove(5, 5, [3, 3], 2);
    design.addMove(5, 5, [6, 6], 2);
    design.addMove(5, 5, [2, 2], 2);
    design.addMove(5, 5, [5, 5], 2);
    design.addMove(5, 5, [0, 0], 2);

    design.addPiece("Wall", 6, 4000);
    design.addDrop(6, 0, [], 1);
    design.addMove(6, 8, [7], 2);
    design.addMove(6, 8, [3], 2);
    design.addMove(6, 8, [4], 2);
    design.addMove(6, 8, [1], 2);

    design.setup("White", "Pawn", 48);
    design.setup("White", "Pawn", 49);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Pawn", 52);
    design.setup("White", "Pawn", 53);
    design.setup("White", "Pawn", 54);
    design.setup("White", "Pawn", 55);
    design.reserve("White", "Pawn", 0);
    design.reserve("White", "Rook", 1);
    design.reserve("White", "Wall", 1);
    design.reserve("White", "Knight", 2);
    design.reserve("White", "Bishop", 2);
    design.reserve("White", "Queen", 1);
    design.reserve("White", "King", 1);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.reserve("Black", "Pawn", 0);
    design.reserve("Black", "Rook", 1);
    design.reserve("Black", "Wall", 1);
    design.reserve("Black", "Knight", 2);
    design.reserve("Black", "Bishop", 2);
    design.reserve("Black", "Queen", 1);
    design.reserve("Black", "King", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
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
    view.defPiece("WhiteWall", "White Wall");
    view.defPiece("BlackWall", "Black Wall");
 
    view.defPosition("a8", 5, 5, 62, 62);
    view.defPosition("b8", 72, 5, 62, 62);
    view.defPosition("c8", 139, 5, 62, 62);
    view.defPosition("d8", 206, 5, 62, 62);
    view.defPosition("e8", 273, 5, 62, 62);
    view.defPosition("f8", 340, 5, 62, 62);
    view.defPosition("g8", 407, 5, 62, 62);
    view.defPosition("h8", 474, 5, 62, 62);
    view.defPosition("a7", 5, 72, 62, 62);
    view.defPosition("b7", 72, 72, 62, 62);
    view.defPosition("c7", 139, 72, 62, 62);
    view.defPosition("d7", 206, 72, 62, 62);
    view.defPosition("e7", 273, 72, 62, 62);
    view.defPosition("f7", 340, 72, 62, 62);
    view.defPosition("g7", 407, 72, 62, 62);
    view.defPosition("h7", 474, 72, 62, 62);
    view.defPosition("a6", 5, 139, 62, 62);
    view.defPosition("b6", 72, 139, 62, 62);
    view.defPosition("c6", 139, 139, 62, 62);
    view.defPosition("d6", 206, 139, 62, 62);
    view.defPosition("e6", 273, 139, 62, 62);
    view.defPosition("f6", 340, 139, 62, 62);
    view.defPosition("g6", 407, 139, 62, 62);
    view.defPosition("h6", 474, 139, 62, 62);
    view.defPosition("a5", 5, 206, 62, 62);
    view.defPosition("b5", 72, 206, 62, 62);
    view.defPosition("c5", 139, 206, 62, 62);
    view.defPosition("d5", 206, 206, 62, 62);
    view.defPosition("e5", 273, 206, 62, 62);
    view.defPosition("f5", 340, 206, 62, 62);
    view.defPosition("g5", 407, 206, 62, 62);
    view.defPosition("h5", 474, 206, 62, 62);
    view.defPosition("a4", 5, 273, 62, 62);
    view.defPosition("b4", 72, 273, 62, 62);
    view.defPosition("c4", 139, 273, 62, 62);
    view.defPosition("d4", 206, 273, 62, 62);
    view.defPosition("e4", 273, 273, 62, 62);
    view.defPosition("f4", 340, 273, 62, 62);
    view.defPosition("g4", 407, 273, 62, 62);
    view.defPosition("h4", 474, 273, 62, 62);
    view.defPosition("a3", 5, 340, 62, 62);
    view.defPosition("b3", 72, 340, 62, 62);
    view.defPosition("c3", 139, 340, 62, 62);
    view.defPosition("d3", 206, 340, 62, 62);
    view.defPosition("e3", 273, 340, 62, 62);
    view.defPosition("f3", 340, 340, 62, 62);
    view.defPosition("g3", 407, 340, 62, 62);
    view.defPosition("h3", 474, 340, 62, 62);
    view.defPosition("a2", 5, 407, 62, 62);
    view.defPosition("b2", 72, 407, 62, 62);
    view.defPosition("c2", 139, 407, 62, 62);
    view.defPosition("d2", 206, 407, 62, 62);
    view.defPosition("e2", 273, 407, 62, 62);
    view.defPosition("f2", 340, 407, 62, 62);
    view.defPosition("g2", 407, 407, 62, 62);
    view.defPosition("h2", 474, 407, 62, 62);
    view.defPosition("a1", 5, 474, 62, 62);
    view.defPosition("b1", 72, 474, 62, 62);
    view.defPosition("c1", 139, 474, 62, 62);
    view.defPosition("d1", 206, 474, 62, 62);
    view.defPosition("e1", 273, 474, 62, 62);
    view.defPosition("f1", 340, 474, 62, 62);
    view.defPosition("g1", 407, 474, 62, 62);
    view.defPosition("h1", 474, 474, 62, 62);

    view.defPopup("Promote-5", 86, 130);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);

    view.defPopup("Promote-2", 195, 115);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
}
