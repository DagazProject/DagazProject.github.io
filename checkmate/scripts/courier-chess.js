Dagaz.Model.WIDTH  = 12;
Dagaz.Model.HEIGHT = 8;

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
    design.checkVersion("courier-chess-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 4, 5, 2, 3, 7, 6]);

    design.addPosition("a8", [0, 1, 12, 0, 0, 13, 0, 0]);
    design.addPosition("b8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("c8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("d8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("e8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("f8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("g8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("h8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("i8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("j8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("k8", [-1, 1, 12, 0, 0, 13, 11, 0]);
    design.addPosition("l8", [-1, 0, 12, 0, 0, 0, 11, 0]);
    design.addPosition("a7", [0, 1, 12, -11, -12, 13, 0, 0]);
    design.addPosition("b7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("c7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("d7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("e7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("f7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("g7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("h7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("i7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("j7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("k7", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("l7", [-1, 0, 12, 0, -12, 0, 11, -13]);
    design.addPosition("a6", [0, 1, 12, -11, -12, 13, 0, 0]);
    design.addPosition("b6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("c6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("d6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("e6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("f6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("g6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("h6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("i6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("j6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("k6", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("l6", [-1, 0, 12, 0, -12, 0, 11, -13]);
    design.addPosition("a5", [0, 1, 12, -11, -12, 13, 0, 0]);
    design.addPosition("b5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("c5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("d5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("e5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("f5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("g5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("h5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("i5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("j5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("k5", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("l5", [-1, 0, 12, 0, -12, 0, 11, -13]);
    design.addPosition("a4", [0, 1, 12, -11, -12, 13, 0, 0]);
    design.addPosition("b4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("c4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("d4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("e4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("f4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("g4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("h4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("i4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("j4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("k4", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("l4", [-1, 0, 12, 0, -12, 0, 11, -13]);
    design.addPosition("a3", [0, 1, 12, -11, -12, 13, 0, 0]);
    design.addPosition("b3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("c3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("d3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("e3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("f3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("g3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("h3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("i3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("j3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("k3", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("l3", [-1, 0, 12, 0, -12, 0, 11, -13]);
    design.addPosition("a2", [0, 1, 12, -11, -12, 13, 0, 0]);
    design.addPosition("b2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("c2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("d2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("e2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("f2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("g2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("h2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("i2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("j2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("k2", [-1, 1, 12, -11, -12, 13, 11, -13]);
    design.addPosition("l2", [-1, 0, 12, 0, -12, 0, 11, -13]);
    design.addPosition("a1", [0, 1, 0, -11, -12, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("c1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("d1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("e1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("f1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("g1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("h1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("i1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("j1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("k1", [-1, 1, 0, -11, -12, 0, 0, -13]);
    design.addPosition("l1", [-1, 0, 0, 0, -12, 0, 0, -13]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addZone("last-rank", 2, [84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	5);	// Queen
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
    design.addCommand(1, ZRF.PROMOTE,	5);	// Queen
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

    design.addPiece("Pawn", 0, 2);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);

    design.addPiece("Rook", 1, 20);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 2, [1, 1], 0);

    design.addPiece("Knight", 2, 8);
    design.addMove(2, 3, [4, 7], 0);
    design.addMove(2, 3, [4, 3], 0);
    design.addMove(2, 3, [2, 6], 0);
    design.addMove(2, 3, [2, 5], 0);
    design.addMove(2, 3, [0, 7], 0);
    design.addMove(2, 3, [0, 6], 0);
    design.addMove(2, 3, [1, 3], 0);
    design.addMove(2, 3, [1, 5], 0);

    design.addPiece("Bishop", 3, 3);
    design.addMove(3, 3, [7, 7], 0);
    design.addMove(3, 3, [3, 3], 0);
    design.addMove(3, 3, [6, 6], 0);
    design.addMove(3, 3, [5, 5], 0);

    design.addPiece("Courier", 4, 15);
    design.addMove(4, 2, [7, 7], 0);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [3, 3], 0);
    design.addMove(4, 2, [5, 5], 0);

    design.addPiece("Queen", 5, 4);
    design.addMove(5, 4, [7], 0);
    design.addMove(5, 4, [6], 0);
    design.addMove(5, 4, [3], 0);
    design.addMove(5, 4, [5], 0);

    design.addPiece("Fool", 6, 5);
    design.addMove(6, 4, [4], 0);
    design.addMove(6, 4, [2], 0);
    design.addMove(6, 4, [0], 0);
    design.addMove(6, 4, [1], 0);

    design.addPiece("Man", 7, 8);
    design.addMove(7, 4, [4], 0);
    design.addMove(7, 4, [2], 0);
    design.addMove(7, 4, [0], 0);
    design.addMove(7, 4, [1], 0);
    design.addMove(7, 4, [7], 0);
    design.addMove(7, 4, [6], 0);
    design.addMove(7, 4, [3], 0);
    design.addMove(7, 4, [5], 0);

    design.addPiece("King", 8, 10000);
    design.addMove(8, 4, [4], 0);
    design.addMove(8, 4, [2], 0);
    design.addMove(8, 4, [0], 0);
    design.addMove(8, 4, [1], 0);
    design.addMove(8, 4, [7], 0);
    design.addMove(8, 4, [6], 0);
    design.addMove(8, 4, [3], 0);
    design.addMove(8, 4, [5], 0);

    design.setup("White", "Pawn", 72);
    design.setup("White", "Pawn", 73);
    design.setup("White", "Pawn", 74);
    design.setup("White", "Pawn", 75);
    design.setup("White", "Pawn", 76);
    design.setup("White", "Pawn", 77);
    design.setup("White", "Pawn", 78);
    design.setup("White", "Pawn", 79);
    design.setup("White", "Pawn", 80);
    design.setup("White", "Pawn", 81);
    design.setup("White", "Pawn", 82);
    design.setup("White", "Pawn", 83);
    design.setup("White", "Rook", 84);
    design.setup("White", "Rook", 95);
    design.setup("White", "Knight", 85);
    design.setup("White", "Knight", 94);
    design.setup("White", "Bishop", 86);
    design.setup("White", "Bishop", 93);
    design.setup("White", "Courier", 87);
    design.setup("White", "Courier", 92);
    design.setup("White", "Man", 88);
    design.setup("White", "Fool", 91);
    design.setup("White", "King", 89);
    design.setup("White", "Queen", 90);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Pawn", 22);
    design.setup("Black", "Pawn", 23);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 11);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 10);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 9);
    design.setup("Black", "Courier", 3);
    design.setup("Black", "Courier", 8);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Fool", 7);
    design.setup("Black", "King", 5);
    design.setup("Black", "Queen", 6);
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
    view.defPiece("WhiteCourier", "White Courier");
    view.defPiece("BlackCourier", "Black Courier");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteFool", "White Fool");
    view.defPiece("BlackFool", "Black Fool");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("i8", 402, 2, 50, 50);
    view.defPosition("j8", 452, 2, 50, 50);
    view.defPosition("k8", 502, 2, 50, 50);
    view.defPosition("l8", 552, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("i7", 402, 52, 50, 50);
    view.defPosition("j7", 452, 52, 50, 50);
    view.defPosition("k7", 502, 52, 50, 50);
    view.defPosition("l7", 552, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("i6", 402, 102, 50, 50);
    view.defPosition("j6", 452, 102, 50, 50);
    view.defPosition("k6", 502, 102, 50, 50);
    view.defPosition("l6", 552, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("i5", 402, 152, 50, 50);
    view.defPosition("j5", 452, 152, 50, 50);
    view.defPosition("k5", 502, 152, 50, 50);
    view.defPosition("l5", 552, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("i4", 402, 202, 50, 50);
    view.defPosition("j4", 452, 202, 50, 50);
    view.defPosition("k4", 502, 202, 50, 50);
    view.defPosition("l4", 552, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("i3", 402, 252, 50, 50);
    view.defPosition("j3", 452, 252, 50, 50);
    view.defPosition("k3", 502, 252, 50, 50);
    view.defPosition("l3", 552, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("i2", 402, 302, 50, 50);
    view.defPosition("j2", 452, 302, 50, 50);
    view.defPosition("k2", 502, 302, 50, 50);
    view.defPosition("l2", 552, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
    view.defPosition("i1", 402, 352, 50, 50);
    view.defPosition("j1", 452, 352, 50, 50);
    view.defPosition("k1", 502, 352, 50, 50);
    view.defPosition("l1", 552, 352, 50, 50);
}
