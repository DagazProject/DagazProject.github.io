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

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("up");
    design.addDirection("down");

    design.addPlayer("White", [3, 2, 1, 0, 7, 6, 5, 4, 9, 8]);
    design.addPlayer("Black", [3, 1, 2, 0, 6, 7, 4, 5, 8, 9]);

    design.addPosition("A7", [7, 1, 0, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F7", [7, 1, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G7", [7, 0, -1, 0, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A6", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F6", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G6", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A5", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F5", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G5", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A4", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F4", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G4", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A3", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F3", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G3", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A2", [7, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F2", [7, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G2", [7, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("A1", [0, 1, 0, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("B1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("C1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("D1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("E1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("F1", [0, 1, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("G1", [0, 0, -1, -7, 0, 0, 0, 0, 49, 0]);
    design.addPosition("a7", [7, 1, 0, 0, 8, 0, 0, 0, 0, -49]);
    design.addPosition("b7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("c7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("d7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("e7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("f7", [7, 1, -1, 0, 8, 6, 0, 0, 0, -49]);
    design.addPosition("g7", [7, 0, -1, 0, 0, 6, 0, 0, 0, -49]);
    design.addPosition("a6", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f6", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g6", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a5", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f5", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g5", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a4", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f4", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g4", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a3", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f3", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g3", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a2", [7, 1, 0, -7, 8, 0, -6, 0, 0, -49]);
    design.addPosition("b2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("c2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("d2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("e2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("f2", [7, 1, -1, -7, 8, 6, -6, -8, 0, -49]);
    design.addPosition("g2", [7, 0, -1, -7, 0, 6, 0, -8, 0, -49]);
    design.addPosition("a1", [0, 1, 0, -7, 0, 0, -6, 0, 0, -49]);
    design.addPosition("b1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("c1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("d1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("e1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("f1", [0, 1, -1, -7, 0, 0, -6, -8, 0, -49]);
    design.addPosition("g1", [0, 0, -1, -7, 0, 0, 0, -8, 0, -49]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.LITERAL,	1);	// Platform
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	1);	// Platform
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	14);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	1);	// Platform
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-15);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	1);	// Platform
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
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
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.LITERAL,	1);	// Platform
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.LITERAL,	1);	// Platform
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Hole", 0);

    design.addPiece("Platform", 1);

    design.addPiece("Pawn", 2);
    design.addMove(2, 0, [3, 9], 0);
    design.addMove(2, 1, [7, 9], 0);
    design.addMove(2, 1, [6, 9], 0);

    design.addPiece("Rook", 3);
    design.addMove(3, 2, [3, 9, 3, 9], 0);
    design.addMove(3, 2, [0, 9, 0, 9], 0);
    design.addMove(3, 2, [2, 9, 2, 9], 0);
    design.addMove(3, 2, [1, 9, 1, 9], 0);

    design.addPiece("Knight", 4);
    design.addMove(4, 3, [3, 7, 9], 0);
    design.addMove(4, 3, [3, 6, 9], 0);
    design.addMove(4, 3, [0, 5, 9], 0);
    design.addMove(4, 3, [0, 4, 9], 0);
    design.addMove(4, 3, [2, 7, 9], 0);
    design.addMove(4, 3, [2, 5, 9], 0);
    design.addMove(4, 3, [1, 6, 9], 0);
    design.addMove(4, 3, [1, 4, 9], 0);

    design.addPiece("King", 5);
    design.addMove(5, 4, [3, 9], 0);
    design.addMove(5, 4, [0, 9], 0);
    design.addMove(5, 4, [2, 9], 0);
    design.addMove(5, 4, [1, 9], 0);
    design.addMove(5, 4, [7, 9], 0);
    design.addMove(5, 4, [5, 9], 0);
    design.addMove(5, 4, [6, 9], 0);
    design.addMove(5, 4, [4, 9], 0);

    design.setup("White", "Platform", 28);
    design.setup("White", "Platform", 14);
    design.setup("White", "Platform", 36);
    design.setup("White", "Platform", 22);
    design.setup("White", "Platform", 8);
    design.setup("White", "Platform", 44);
    design.setup("White", "Platform", 30);
    design.setup("White", "Platform", 16);
    design.setup("White", "Platform", 2);
    design.setup("White", "Platform", 38);
    design.setup("White", "Platform", 10);
    design.setup("White", "Platform", 46);
    design.setup("White", "Platform", 32);
    design.setup("White", "Platform", 18);
    design.setup("White", "Platform", 4);
    design.setup("White", "Platform", 40);
    design.setup("White", "Platform", 26);
    design.setup("White", "Platform", 12);
    design.setup("White", "Platform", 34);
    design.setup("White", "Platform", 20);
    design.setup("White", "Hole", 42);
    design.setup("White", "Hole", 35);
    design.setup("White", "Hole", 7);
    design.setup("White", "Hole", 0);
    design.setup("White", "Hole", 23);
    design.setup("White", "Hole", 24);
    design.setup("White", "Hole", 25);
    design.setup("White", "Hole", 48);
    design.setup("White", "Hole", 41);
    design.setup("White", "Hole", 13);
    design.setup("White", "Hole", 6);
    design.setup("White", "Pawn", 85);
    design.setup("White", "Pawn", 86);
    design.setup("White", "Pawn", 87);
    design.setup("White", "Pawn", 88);
    design.setup("White", "Pawn", 89);
    design.setup("White", "Rook", 92);
    design.setup("White", "Rook", 96);
    design.setup("White", "Knight", 93);
    design.setup("White", "Knight", 95);
    design.setup("White", "King", 94);
    design.setup("Black", "Platform", 21);
    design.setup("Black", "Platform", 43);
    design.setup("Black", "Platform", 29);
    design.setup("Black", "Platform", 15);
    design.setup("Black", "Platform", 1);
    design.setup("Black", "Platform", 37);
    design.setup("Black", "Platform", 9);
    design.setup("Black", "Platform", 45);
    design.setup("Black", "Platform", 31);
    design.setup("Black", "Platform", 17);
    design.setup("Black", "Platform", 3);
    design.setup("Black", "Platform", 39);
    design.setup("Black", "Platform", 11);
    design.setup("Black", "Platform", 47);
    design.setup("Black", "Platform", 33);
    design.setup("Black", "Platform", 19);
    design.setup("Black", "Platform", 5);
    design.setup("Black", "Platform", 27);
    design.setup("Black", "Pawn", 57);
    design.setup("Black", "Pawn", 58);
    design.setup("Black", "Pawn", 59);
    design.setup("Black", "Pawn", 60);
    design.setup("Black", "Pawn", 61);
    design.setup("Black", "Rook", 50);
    design.setup("Black", "Rook", 54);
    design.setup("Black", "Knight", 51);
    design.setup("Black", "Knight", 53);
    design.setup("Black", "King", 52);
}

Dagaz.View.configure = function(view) {
//  view.defBoard("Board");
    view.defPiece("WhiteHole", "White Hole");
    view.defPiece("BlackHole", "Black Hole");
    view.defPiece("WhitePlatform", "White Platform");
    view.defPiece("BlackPlatform", "Black Platform");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("A7", 2, 2, 68, 68);
    view.defPosition("B7", 70, 2, 68, 68);
    view.defPosition("C7", 138, 2, 68, 68);
    view.defPosition("D7", 206, 2, 68, 68);
    view.defPosition("E7", 274, 2, 68, 68);
    view.defPosition("F7", 342, 2, 68, 68);
    view.defPosition("G7", 410, 2, 68, 68);
    view.defPosition("A6", 2, 70, 68, 68);
    view.defPosition("B6", 70, 70, 68, 68);
    view.defPosition("C6", 138, 70, 68, 68);
    view.defPosition("D6", 206, 70, 68, 68);
    view.defPosition("E6", 274, 70, 68, 68);
    view.defPosition("F6", 342, 70, 68, 68);
    view.defPosition("G6", 410, 70, 68, 68);
    view.defPosition("A5", 2, 138, 68, 68);
    view.defPosition("B5", 70, 138, 68, 68);
    view.defPosition("C5", 138, 138, 68, 68);
    view.defPosition("D5", 206, 138, 68, 68);
    view.defPosition("E5", 274, 138, 68, 68);
    view.defPosition("F5", 342, 138, 68, 68);
    view.defPosition("G5", 410, 138, 68, 68);
    view.defPosition("A4", 2, 206, 68, 68);
    view.defPosition("B4", 70, 206, 68, 68);
    view.defPosition("C4", 138, 206, 68, 68);
    view.defPosition("D4", 206, 206, 68, 68);
    view.defPosition("E4", 274, 206, 68, 68);
    view.defPosition("F4", 342, 206, 68, 68);
    view.defPosition("G4", 410, 206, 68, 68);
    view.defPosition("A3", 2, 274, 68, 68);
    view.defPosition("B3", 70, 274, 68, 68);
    view.defPosition("C3", 138, 274, 68, 68);
    view.defPosition("D3", 206, 274, 68, 68);
    view.defPosition("E3", 274, 274, 68, 68);
    view.defPosition("F3", 342, 274, 68, 68);
    view.defPosition("G3", 410, 274, 68, 68);
    view.defPosition("A2", 2, 342, 68, 68);
    view.defPosition("B2", 70, 342, 68, 68);
    view.defPosition("C2", 138, 342, 68, 68);
    view.defPosition("D2", 206, 342, 68, 68);
    view.defPosition("E2", 274, 342, 68, 68);
    view.defPosition("F2", 342, 342, 68, 68);
    view.defPosition("G2", 410, 342, 68, 68);
    view.defPosition("A1", 2, 410, 68, 68);
    view.defPosition("B1", 70, 410, 68, 68);
    view.defPosition("C1", 138, 410, 68, 68);
    view.defPosition("D1", 206, 410, 68, 68);
    view.defPosition("E1", 274, 410, 68, 68);
    view.defPosition("F1", 342, 410, 68, 68);
    view.defPosition("G1", 410, 410, 68, 68);
    view.defPosition("a7", 2, 2, 68, 68);
    view.defPosition("b7", 70, 2, 68, 68);
    view.defPosition("c7", 138, 2, 68, 68);
    view.defPosition("d7", 206, 2, 68, 68);
    view.defPosition("e7", 274, 2, 68, 68);
    view.defPosition("f7", 342, 2, 68, 68);
    view.defPosition("g7", 410, 2, 68, 68);
    view.defPosition("a6", 2, 70, 68, 68);
    view.defPosition("b6", 70, 70, 68, 68);
    view.defPosition("c6", 138, 70, 68, 68);
    view.defPosition("d6", 206, 70, 68, 68);
    view.defPosition("e6", 274, 70, 68, 68);
    view.defPosition("f6", 342, 70, 68, 68);
    view.defPosition("g6", 410, 70, 68, 68);
    view.defPosition("a5", 2, 138, 68, 68);
    view.defPosition("b5", 70, 138, 68, 68);
    view.defPosition("c5", 138, 138, 68, 68);
    view.defPosition("d5", 206, 138, 68, 68);
    view.defPosition("e5", 274, 138, 68, 68);
    view.defPosition("f5", 342, 138, 68, 68);
    view.defPosition("g5", 410, 138, 68, 68);
    view.defPosition("a4", 2, 206, 68, 68);
    view.defPosition("b4", 70, 206, 68, 68);
    view.defPosition("c4", 138, 206, 68, 68);
    view.defPosition("d4", 206, 206, 68, 68);
    view.defPosition("e4", 274, 206, 68, 68);
    view.defPosition("f4", 342, 206, 68, 68);
    view.defPosition("g4", 410, 206, 68, 68);
    view.defPosition("a3", 2, 274, 68, 68);
    view.defPosition("b3", 70, 274, 68, 68);
    view.defPosition("c3", 138, 274, 68, 68);
    view.defPosition("d3", 206, 274, 68, 68);
    view.defPosition("e3", 274, 274, 68, 68);
    view.defPosition("f3", 342, 274, 68, 68);
    view.defPosition("g3", 410, 274, 68, 68);
    view.defPosition("a2", 2, 342, 68, 68);
    view.defPosition("b2", 70, 342, 68, 68);
    view.defPosition("c2", 138, 342, 68, 68);
    view.defPosition("d2", 206, 342, 68, 68);
    view.defPosition("e2", 274, 342, 68, 68);
    view.defPosition("f2", 342, 342, 68, 68);
    view.defPosition("g2", 410, 342, 68, 68);
    view.defPosition("a1", 2, 410, 68, 68);
    view.defPosition("b1", 70, 410, 68, 68);
    view.defPosition("c1", 138, 410, 68, 68);
    view.defPosition("d1", 206, 410, 68, 68);
    view.defPosition("e1", 274, 410, 68, 68);
    view.defPosition("f1", 342, 410, 68, 68);
    view.defPosition("g1", 410, 410, 68, 68);
}
