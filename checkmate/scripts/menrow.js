Dagaz.Controller.persistense = "setup";

Dagaz.AI.g_flags   = 0;

Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 10;

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

    design.addPosition("a10", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("c10", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("d10", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("e10", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [0, 8, 7, 0, -1, 0, 0, 0]);
    design.addPosition("a9", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b9", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c9", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d9", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e9", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f9", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g9", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h9", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a8", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b8", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c8", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d8", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e8", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f8", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g8", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, -9, -8]);
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

    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("promotion", 2, [72, 73, 74, 75, 76, 77, 78, 79]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	1);	// Dama
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	3);
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	1);	// Dama
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	6);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	6);	// Queen
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0, 200);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [5], 1);

    design.addPiece("Dama", 1, 400);
    design.addMove(1, 0, [6, 6], 0);
    design.addMove(1, 0, [5, 5], 0);
    design.addMove(1, 0, [2, 2], 0);
    design.addMove(1, 0, [0, 0], 0);
    design.addMove(1, 1, [6], 1);
    design.addMove(1, 1, [5], 1);
    design.addMove(1, 1, [2], 1);
    design.addMove(1, 1, [0], 1);

    design.addPiece("Pawn", 2, 100);
    design.addMove(2, 2, [7], 1);
    design.addMove(2, 3, [6], 1);
    design.addMove(2, 3, [5], 1);

    design.addPiece("Rook", 3, 500);
    design.addMove(3, 4, [7, 7], 1);
    design.addMove(3, 4, [1, 1], 1);
    design.addMove(3, 4, [4, 4], 1);
    design.addMove(3, 4, [3, 3], 1);

    design.addPiece("Knight", 4, 320);
    design.addMove(4, 5, [7, 6], 1);
    design.addMove(4, 5, [7, 5], 1);
    design.addMove(4, 5, [1, 2], 1);
    design.addMove(4, 5, [1, 0], 1);
    design.addMove(4, 5, [4, 6], 1);
    design.addMove(4, 5, [4, 2], 1);
    design.addMove(4, 5, [3, 5], 1);
    design.addMove(4, 5, [3, 0], 1);

    design.addPiece("Bishop", 5, 330);
    design.addMove(5, 4, [6, 6], 1);
    design.addMove(5, 4, [2, 2], 1);
    design.addMove(5, 4, [5, 5], 1);
    design.addMove(5, 4, [0, 0], 1);

    design.addPiece("Queen", 6, 900);
    design.addMove(6, 4, [7, 7], 1);
    design.addMove(6, 4, [1, 1], 1);
    design.addMove(6, 4, [4, 4], 1);
    design.addMove(6, 4, [3, 3], 1);
    design.addMove(6, 4, [6, 6], 1);
    design.addMove(6, 4, [2, 2], 1);
    design.addMove(6, 4, [5, 5], 1);
    design.addMove(6, 4, [0, 0], 1);

    design.addPiece("King", 7, 20000);
    design.addMove(7, 6, [7], 1);
    design.addMove(7, 6, [1], 1);
    design.addMove(7, 6, [4], 1);
    design.addMove(7, 6, [3], 1);
    design.addMove(7, 6, [6], 1);
    design.addMove(7, 6, [2], 1);
    design.addMove(7, 6, [5], 1);
    design.addMove(7, 6, [0], 1);

    design.setup("White", "Man", 64);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 66);
    design.setup("White", "Man", 67);
    design.setup("White", "Man", 68);
    design.setup("White", "Man", 69);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 71);
    design.setup("White", "Pawn", 56);
    design.setup("White", "Pawn", 57);
    design.setup("White", "Pawn", 58);
    design.setup("White", "Pawn", 59);
    design.setup("White", "Pawn", 60);
    design.setup("White", "Pawn", 61);
    design.setup("White", "Pawn", 62);
    design.setup("White", "Pawn", 63);
    design.setup("White", "Rook", 72);
    design.setup("White", "Rook", 79);
    design.setup("White", "Knight", 73);
    design.setup("White", "Knight", 78);
    design.setup("White", "Bishop", 74);
    design.setup("White", "Bishop", 77);
    design.setup("White", "Queen", 75);
    design.setup("White", "King", 76);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Pawn", 22);
    design.setup("Black", "Pawn", 23);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 7);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 6);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 5);
    design.setup("Black", "Queen", 3);
    design.setup("Black", "King", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteDama", "White Dama");
    view.defPiece("BlackDama", "Black Dama");
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
 
    view.defPosition("a10", 1, 2, 50, 50);
    view.defPosition("b10", 51, 2, 50, 50);
    view.defPosition("c10", 101, 2, 50, 50);
    view.defPosition("d10", 151, 2, 50, 50);
    view.defPosition("e10", 201, 2, 50, 50);
    view.defPosition("f10", 251, 2, 50, 50);
    view.defPosition("g10", 301, 2, 50, 50);
    view.defPosition("h10", 351, 2, 50, 50);
    view.defPosition("a9", 1, 52, 50, 50);
    view.defPosition("b9", 51, 52, 50, 50);
    view.defPosition("c9", 101, 52, 50, 50);
    view.defPosition("d9", 151, 52, 50, 50);
    view.defPosition("e9", 201, 52, 50, 50);
    view.defPosition("f9", 251, 52, 50, 50);
    view.defPosition("g9", 301, 52, 50, 50);
    view.defPosition("h9", 351, 52, 50, 50);
    view.defPosition("a8", 1, 102, 50, 50);
    view.defPosition("b8", 51, 102, 50, 50);
    view.defPosition("c8", 101, 102, 50, 50);
    view.defPosition("d8", 151, 102, 50, 50);
    view.defPosition("e8", 201, 102, 50, 50);
    view.defPosition("f8", 251, 102, 50, 50);
    view.defPosition("g8", 301, 102, 50, 50);
    view.defPosition("h8", 351, 102, 50, 50);
    view.defPosition("a7", 1, 152, 50, 50);
    view.defPosition("b7", 51, 152, 50, 50);
    view.defPosition("c7", 101, 152, 50, 50);
    view.defPosition("d7", 151, 152, 50, 50);
    view.defPosition("e7", 201, 152, 50, 50);
    view.defPosition("f7", 251, 152, 50, 50);
    view.defPosition("g7", 301, 152, 50, 50);
    view.defPosition("h7", 351, 152, 50, 50);
    view.defPosition("a6", 1, 202, 50, 50);
    view.defPosition("b6", 51, 202, 50, 50);
    view.defPosition("c6", 101, 202, 50, 50);
    view.defPosition("d6", 151, 202, 50, 50);
    view.defPosition("e6", 201, 202, 50, 50);
    view.defPosition("f6", 251, 202, 50, 50);
    view.defPosition("g6", 301, 202, 50, 50);
    view.defPosition("h6", 351, 202, 50, 50);
    view.defPosition("a5", 1, 252, 50, 50);
    view.defPosition("b5", 51, 252, 50, 50);
    view.defPosition("c5", 101, 252, 50, 50);
    view.defPosition("d5", 151, 252, 50, 50);
    view.defPosition("e5", 201, 252, 50, 50);
    view.defPosition("f5", 251, 252, 50, 50);
    view.defPosition("g5", 301, 252, 50, 50);
    view.defPosition("h5", 351, 252, 50, 50);
    view.defPosition("a4", 1, 302, 50, 50);
    view.defPosition("b4", 51, 302, 50, 50);
    view.defPosition("c4", 101, 302, 50, 50);
    view.defPosition("d4", 151, 302, 50, 50);
    view.defPosition("e4", 201, 302, 50, 50);
    view.defPosition("f4", 251, 302, 50, 50);
    view.defPosition("g4", 301, 302, 50, 50);
    view.defPosition("h4", 351, 302, 50, 50);
    view.defPosition("a3", 1, 352, 50, 50);
    view.defPosition("b3", 51, 352, 50, 50);
    view.defPosition("c3", 101, 352, 50, 50);
    view.defPosition("d3", 151, 352, 50, 50);
    view.defPosition("e3", 201, 352, 50, 50);
    view.defPosition("f3", 251, 352, 50, 50);
    view.defPosition("g3", 301, 352, 50, 50);
    view.defPosition("h3", 351, 352, 50, 50);
    view.defPosition("a2", 1, 402, 50, 50);
    view.defPosition("b2", 51, 402, 50, 50);
    view.defPosition("c2", 101, 402, 50, 50);
    view.defPosition("d2", 151, 402, 50, 50);
    view.defPosition("e2", 201, 402, 50, 50);
    view.defPosition("f2", 251, 402, 50, 50);
    view.defPosition("g2", 301, 402, 50, 50);
    view.defPosition("h2", 351, 402, 50, 50);
    view.defPosition("a1", 1, 452, 50, 50);
    view.defPosition("b1", 51, 452, 50, 50);
    view.defPosition("c1", 101, 452, 50, 50);
    view.defPosition("d1", 151, 452, 50, 50);
    view.defPosition("e1", 201, 452, 50, 50);
    view.defPosition("f1", 251, 452, 50, 50);
    view.defPosition("g1", 301, 452, 50, 50);
    view.defPosition("h1", 351, 452, 50, 50);

    view.defPopup("Promote", 54, 100);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
}
