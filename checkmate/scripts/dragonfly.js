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

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("nx"); // 7
    design.addDirection("n");  // 8
    design.addDirection("nr"); // 9
    design.addDirection("sr"); // 10

    design.addPlayer("White", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("Black", [5, 8, 6, 3, 4, 0, 2, 7, 1, 10, 9]);

    design.addPosition("a7", [8, 7, 0, 1, 0, 0, 0, 7, 0, 50, 75]);
    design.addPosition("b7", [8, 7, 6, 1, -1, 0, 0, 7, 0, 49, 74]);
    design.addPosition("c7", [8, 7, 6, 1, -1, 0, 0, 7, 0, 48, 73]);
    design.addPosition("d7", [8, 7, 6, 1, -1, 0, 0, 7, 0, 47, 72]);
    design.addPosition("e7", [8, 7, 6, 1, -1, 0, 0, 7, 0, 46, 71]);
    design.addPosition("f7", [8, 7, 6, 1, -1, 0, 0, 7, 0, 45, 70]);
    design.addPosition("g7", [0, 7, 6, 0, -1, 0, 0, 7, 0, 44, 69]);
    design.addPosition("a6", [8, 7, 0, 1, 0, -6, 0, 7, -7, 43, 68]);
    design.addPosition("b6", [8, 7, 6, 1, -1, -6, -8, 7, -7, 42, 67]);
    design.addPosition("c6", [8, 7, 6, 1, -1, -6, -8, 7, -7, 41, 66]);
    design.addPosition("d6", [8, 7, 6, 1, -1, -6, -8, 7, -7, 40, 65]);
    design.addPosition("e6", [8, 7, 6, 1, -1, -6, -8, 7, -7, 39, 64]);
    design.addPosition("f6", [8, 7, 6, 1, -1, -6, -8, 7, -7, 38, 63]);
    design.addPosition("g6", [0, 7, 6, 0, -1, 0, -8, 7, -7, 37, 62]);
    design.addPosition("a5", [8, 7, 0, 1, 0, -6, 0, 7, -7, 36, 61]);
    design.addPosition("b5", [8, 7, 6, 1, -1, -6, -8, 7, -7, 35, 60]);
    design.addPosition("c5", [8, 7, 6, 1, -1, -6, -8, 7, -7, 34, 59]);
    design.addPosition("d5", [8, 7, 6, 1, -1, -6, -8, 7, -7, 33, 58]);
    design.addPosition("e5", [8, 7, 6, 1, -1, -6, -8, 7, -7, 32, 57]);
    design.addPosition("f5", [8, 7, 6, 1, -1, -6, -8, 7, -7, 31, 56]);
    design.addPosition("g5", [0, 7, 6, 0, -1, 0, -8, 7, -7, 30, 55]);
    design.addPosition("a4", [8, 7, 0, 1, 0, -6, 0, 7, -7, 29, 54]);
    design.addPosition("b4", [8, 7, 6, 1, -1, -6, -8, 7, -7, 28, 53]);
    design.addPosition("c4", [8, 7, 6, 1, -1, -6, -8, 7, -7, 27, 52]);
    design.addPosition("d4", [8, 7, 6, 1, -1, -6, -8, 7, -7, 26, 51]);
    design.addPosition("e4", [8, 7, 6, 1, -1, -6, -8, 7, -7, 25, 50]);
    design.addPosition("f4", [8, 7, 6, 1, -1, -6, -8, 7, -7, 24, 49]);
    design.addPosition("g4", [0, 7, 6, 0, -1, 0, -8, 7, -7, 23, 48]);
    design.addPosition("a3", [8, 7, 0, 1, 0, -6, 0, 7, -7, 22, 47]);
    design.addPosition("b3", [8, 7, 6, 1, -1, -6, -8, 7, -7, 21, 46]);
    design.addPosition("c3", [8, 7, 6, 1, -1, -6, -8, 7, -7, 20, 45]);
    design.addPosition("d3", [8, 7, 6, 1, -1, -6, -8, 7, -7, 19, 44]);
    design.addPosition("e3", [8, 7, 6, 1, -1, -6, -8, 7, -7, 18, 43]);
    design.addPosition("f3", [8, 7, 6, 1, -1, -6, -8, 7, -7, 17, 42]);
    design.addPosition("g3", [0, 7, 6, 0, -1, 0, -8, 7, -7, 16, 41]);
    design.addPosition("a2", [8, 7, 0, 1, 0, -6, 0, 7, -7, 15, 40]);
    design.addPosition("b2", [8, 7, 6, 1, -1, -6, -8, 7, -7, 14, 39]);
    design.addPosition("c2", [8, 7, 6, 1, -1, -6, -8, 7, -7, 13, 38]);
    design.addPosition("d2", [8, 7, 6, 1, -1, -6, -8, 7, -7, 12, 37]);
    design.addPosition("e2", [8, 7, 6, 1, -1, -6, -8, 7, -7, 11, 36]);
    design.addPosition("f2", [8, 7, 6, 1, -1, -6, -8, 7, -7, 10, 35]);
    design.addPosition("g2", [0, 7, 6, 0, -1, 0, -8, 7, -7, 9, 34]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -6, 0, -41, -7, 8, 33]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -6, -8, -41, -7, 7, 32]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -6, -8, -41, -7, 6, 31]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -6, -8, -41, -7, 5, 30]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -6, -8, -41, -7, 4, 29]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -6, -8, -41, -7, 3, 28]);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -8, 0, -7, 2, 27]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("Z7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T7", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T6", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("U1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6]);
    design.addZone("last-rank", 2, [42, 43, 44, 45, 46, 47, 48]);
    design.addZone("board-zone", 1, [42, 43, 44, 45, 46, 47, 48, 35, 36, 37, 38, 39, 40, 41, 28, 29, 30, 31, 32, 33, 34, 21, 22, 23, 24, 25, 26, 27, 14, 15, 16, 17, 18, 19, 20, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2, 3, 4, 5, 6]);
    design.addZone("board-zone", 2, [42, 43, 44, 45, 46, 47, 48, 35, 36, 37, 38, 39, 40, 41, 28, 29, 30, 31, 32, 33, 34, 21, 22, 23, 24, 25, 26, 27, 14, 15, 16, 17, 18, 19, 20, 7, 8, 9, 10, 11, 12, 13, 0, 1, 2, 3, 4, 5, 6]);
    design.addZone("prev-rank", 1, [7, 8, 9, 10, 11, 12, 13]);
    design.addZone("prev-rank", 2, [35, 36, 37, 38, 39, 40, 41]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	1);	// Rook
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
    design.addCommand(1, ZRF.PROMOTE,	1);	// Rook
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
    design.addCommand(3, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	21);	// position
    design.addCommand(3, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-11);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	1);	// Rook
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 2, [8, 8], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 3, [0, 7], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 4, [8, 6], 0);
    design.addMove(2, 4, [8, 5], 0);
    design.addMove(2, 4, [1, 2], 0);
    design.addMove(2, 4, [1, 0], 0);
    design.addMove(2, 4, [4, 6], 0);
    design.addMove(2, 4, [4, 2], 0);
    design.addMove(2, 4, [3, 5], 0);
    design.addMove(2, 4, [3, 0], 0);
    design.addMove(2, 3, [0, 7], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [2, 2], 0);
    design.addMove(3, 2, [5, 5], 0);
    design.addMove(3, 2, [0, 0], 0);
    design.addMove(3, 3, [0, 7], 0);

    design.addPiece("King", 4, 20000);
    design.addMove(4, 5, [8], 0);
    design.addMove(4, 5, [1], 0);
    design.addMove(4, 5, [4], 0);
    design.addMove(4, 5, [3], 0);
    design.addMove(4, 5, [6], 0);
    design.addMove(4, 5, [2], 0);
    design.addMove(4, 5, [5], 0);
    design.addMove(4, 5, [0], 0);
    design.addMove(4, 6, [3, 3, 3, 4, 4], 0);
    design.addMove(4, 6, [4, 4, 4, 3, 3], 0);

    design.setup("White", "Pawn", 35);
    design.setup("White", "Pawn", 36);
    design.setup("White", "Pawn", 37);
    design.setup("White", "Pawn", 38);
    design.setup("White", "Pawn", 39);
    design.setup("White", "Pawn", 40);
    design.setup("White", "Pawn", 41);
    design.setup("White", "Rook", 42);
    design.setup("White", "Rook", 48);
    design.setup("White", "Knight", 46);
    design.setup("White", "Knight", 47);
    design.setup("White", "Bishop", 43);
    design.setup("White", "Bishop", 44);
    design.setup("White", "King", 45);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 6);
    design.setup("Black", "Knight", 4);
    design.setup("Black", "Knight", 5);
    design.setup("Black", "Bishop", 1);
    design.setup("Black", "Bishop", 2);
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
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a7", 138, 2, 68, 68);
    view.defPosition("b7", 206, 2, 68, 68);
    view.defPosition("c7", 274, 2, 68, 68);
    view.defPosition("d7", 342, 2, 68, 68);
    view.defPosition("e7", 410, 2, 68, 68);
    view.defPosition("f7", 478, 2, 68, 68);
    view.defPosition("g7", 546, 2, 68, 68);
    view.defPosition("a6", 138, 70, 68, 68);
    view.defPosition("b6", 206, 70, 68, 68);
    view.defPosition("c6", 274, 70, 68, 68);
    view.defPosition("d6", 342, 70, 68, 68);
    view.defPosition("e6", 410, 70, 68, 68);
    view.defPosition("f6", 478, 70, 68, 68);
    view.defPosition("g6", 546, 70, 68, 68);
    view.defPosition("a5", 138, 138, 68, 68);
    view.defPosition("b5", 206, 138, 68, 68);
    view.defPosition("c5", 274, 138, 68, 68);
    view.defPosition("d5", 342, 138, 68, 68);
    view.defPosition("e5", 410, 138, 68, 68);
    view.defPosition("f5", 478, 138, 68, 68);
    view.defPosition("g5", 546, 138, 68, 68);
    view.defPosition("a4", 138, 206, 68, 68);
    view.defPosition("b4", 206, 206, 68, 68);
    view.defPosition("c4", 274, 206, 68, 68);
    view.defPosition("d4", 342, 206, 68, 68);
    view.defPosition("e4", 410, 206, 68, 68);
    view.defPosition("f4", 478, 206, 68, 68);
    view.defPosition("g4", 546, 206, 68, 68);
    view.defPosition("a3", 138, 274, 68, 68);
    view.defPosition("b3", 206, 274, 68, 68);
    view.defPosition("c3", 274, 274, 68, 68);
    view.defPosition("d3", 342, 274, 68, 68);
    view.defPosition("e3", 410, 274, 68, 68);
    view.defPosition("f3", 478, 274, 68, 68);
    view.defPosition("g3", 546, 274, 68, 68);
    view.defPosition("a2", 138, 342, 68, 68);
    view.defPosition("b2", 206, 342, 68, 68);
    view.defPosition("c2", 274, 342, 68, 68);
    view.defPosition("d2", 342, 342, 68, 68);
    view.defPosition("e2", 410, 342, 68, 68);
    view.defPosition("f2", 478, 342, 68, 68);
    view.defPosition("g2", 546, 342, 68, 68);
    view.defPosition("a1", 138, 410, 68, 68);
    view.defPosition("b1", 206, 410, 68, 68);
    view.defPosition("c1", 274, 410, 68, 68);
    view.defPosition("d1", 342, 410, 68, 68);
    view.defPosition("e1", 410, 410, 68, 68);
    view.defPosition("f1", 478, 410, 68, 68);
    view.defPosition("g1", 546, 410, 68, 68);
    view.defPosition("X7", 2, 2, 68, 68);
    view.defPosition("Y7", 70, 2, 68, 68);
    view.defPosition("X6", 2, 70, 68, 68);
    view.defPosition("Y6", 70, 70, 68, 68);
    view.defPosition("X5", 2, 138, 68, 68);
    view.defPosition("Y5", 70, 138, 68, 68);
    view.defPosition("X4", 2, 206, 68, 68);
    view.defPosition("Y4", 70, 206, 68, 68);
    view.defPosition("X3", 2, 274, 68, 68);
    view.defPosition("Y3", 70, 274, 68, 68);
    view.defPosition("X2", 2, 342, 68, 68);
    view.defPosition("Y2", 70, 342, 68, 68);
    view.defPosition("X1", 2, 410, 68, 68);
    view.defPosition("Y1", 70, 410, 68, 68);
    view.defPosition("Z7", 682, 2, 68, 68);
    view.defPosition("T7", 750, 2, 68, 68);
    view.defPosition("Z6", 682, 70, 68, 68);
    view.defPosition("T6", 750, 70, 68, 68);
    view.defPosition("Z5", 682, 138, 68, 68);
    view.defPosition("T5", 750, 138, 68, 68);
    view.defPosition("Z4", 682, 206, 68, 68);
    view.defPosition("T4", 750, 206, 68, 68);
    view.defPosition("Z3", 682, 274, 68, 68);
    view.defPosition("T3", 750, 274, 68, 68);
    view.defPosition("Z2", 682, 342, 68, 68);
    view.defPosition("T2", 750, 342, 68, 68);
    view.defPosition("Z1", 682, 410, 68, 68);
    view.defPosition("T1", 750, 410, 68, 68);

    view.defPopup("Promote-3", 264, 100);
    view.defPopupPosition("U1", 10, 7, 68, 68);
    view.defPopupPosition("U2", 80, 7, 68, 68);
    view.defPopupPosition("U3", 150, 7, 68, 68);

    view.defPopup("Promote-2", 300, 112);
    view.defPopupPosition("U1", 10, 7, 68, 68);
    view.defPopupPosition("U2", 80, 7, 68, 68);
}
