Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 11;

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

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a11", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b11", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c11", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d11", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e11", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f11", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g11", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h11", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i11", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a10", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b10", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c10", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d10", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e10", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f10", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g10", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h10", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i10", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a9", [10, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b9", [10, 9, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h9", [0, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i9", [0, 0, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [10, 0, 0, 1, 0, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [0, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [0, 0, 8, 0, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [10, 0, 0, 1, 0, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [0, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [0, 0, 8, 0, -1, -8, -10, -9]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [10, 9, 8, 1, 0, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 0, -1, -8, -10, -9]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [10, 9, 8, 1, 0, -8, 0, 0]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, 0, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, 0, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 0, -1, 0, -10, 0]);
    design.addPosition("h5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [10, 9, 8, 1, 0, -8, 0, 0]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, 0, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, 0, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 0, -1, 0, -10, 0]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, 0]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, 0, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, 0, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, 0]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);

    design.addZone("center", 1, [49]);
    design.addZone("center", 2, [49]);

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
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
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


    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [0], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 2, [7, 7], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [3, 3], 0);

    design.addPiece("Bishop", 2, 330);
    design.addMove(2, 2, [6, 6], 0);
    design.addMove(2, 2, [2, 2], 0);
    design.addMove(2, 2, [5, 5], 0);
    design.addMove(2, 2, [0, 0], 0);

    design.addPiece("King", 3, 20000);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [1, 1], 0);
    design.addMove(3, 2, [4, 4], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [2, 2], 0);
    design.addMove(3, 2, [5, 5], 0);
    design.addMove(3, 2, [0, 0], 0);

    design.setup("White", "Pawn", 75);
    design.setup("White", "Pawn", 76);
    design.setup("White", "Pawn", 77);
    design.setup("White", "Rook", 90);
    design.setup("White", "Rook", 91);
    design.setup("White", "Rook", 82);
    design.setup("White", "Rook", 83);
    design.setup("White", "Rook", 87);
    design.setup("White", "Rook", 88);
    design.setup("White", "Rook", 97);
    design.setup("White", "Rook", 98);
    design.setup("White", "Bishop", 92);
    design.setup("White", "Bishop", 93);
    design.setup("White", "Bishop", 84);
    design.setup("White", "Bishop", 85);
    design.setup("White", "Bishop", 86);
    design.setup("White", "Bishop", 95);
    design.setup("White", "Bishop", 96);
    design.setup("White", "King", 94);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Pawn", 22);
    design.setup("Black", "Pawn", 23);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 1);
    design.setup("Black", "Rook", 10);
    design.setup("Black", "Rook", 11);
    design.setup("Black", "Rook", 15);
    design.setup("Black", "Rook", 16);
    design.setup("Black", "Rook", 7);
    design.setup("Black", "Rook", 8);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 3);
    design.setup("Black", "Bishop", 12);
    design.setup("Black", "Bishop", 13);
    design.setup("Black", "Bishop", 14);
    design.setup("Black", "Bishop", 5);
    design.setup("Black", "Bishop", 6);
    design.setup("Black", "King", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a11", 1, 2, 50, 50);
    view.defPosition("b11", 51, 2, 50, 50);
    view.defPosition("c11", 101, 2, 50, 50);
    view.defPosition("d11", 151, 2, 50, 50);
    view.defPosition("e11", 201, 2, 50, 50);
    view.defPosition("f11", 251, 2, 50, 50);
    view.defPosition("g11", 301, 2, 50, 50);
    view.defPosition("h11", 351, 2, 50, 50);
    view.defPosition("i11", 401, 2, 50, 50);
    view.defPosition("a10", 1, 52, 50, 50);
    view.defPosition("b10", 51, 52, 50, 50);
    view.defPosition("c10", 101, 52, 50, 50);
    view.defPosition("d10", 151, 52, 50, 50);
    view.defPosition("e10", 201, 52, 50, 50);
    view.defPosition("f10", 251, 52, 50, 50);
    view.defPosition("g10", 301, 52, 50, 50);
    view.defPosition("h10", 351, 52, 50, 50);
    view.defPosition("i10", 401, 52, 50, 50);
    view.defPosition("a9", 1, 102, 50, 50);
    view.defPosition("b9", 51, 102, 50, 50);
    view.defPosition("c9", 101, 102, 50, 50);
    view.defPosition("d9", 151, 102, 50, 50);
    view.defPosition("e9", 201, 102, 50, 50);
    view.defPosition("f9", 251, 102, 50, 50);
    view.defPosition("g9", 301, 102, 50, 50);
    view.defPosition("h9", 351, 102, 50, 50);
    view.defPosition("i9", 401, 102, 50, 50);
    view.defPosition("a8", 1, 152, 50, 50);
    view.defPosition("b8", 51, 152, 50, 50);
    view.defPosition("c8", 101, 152, 50, 50);
    view.defPosition("d8", 151, 152, 50, 50);
    view.defPosition("e8", 201, 152, 50, 50);
    view.defPosition("f8", 251, 152, 50, 50);
    view.defPosition("g8", 301, 152, 50, 50);
    view.defPosition("h8", 351, 152, 50, 50);
    view.defPosition("i8", 401, 152, 50, 50);
    view.defPosition("a7", 1, 202, 50, 50);
    view.defPosition("b7", 51, 202, 50, 50);
    view.defPosition("c7", 101, 202, 50, 50);
    view.defPosition("d7", 151, 202, 50, 50);
    view.defPosition("e7", 201, 202, 50, 50);
    view.defPosition("f7", 251, 202, 50, 50);
    view.defPosition("g7", 301, 202, 50, 50);
    view.defPosition("h7", 351, 202, 50, 50);
    view.defPosition("i7", 401, 202, 50, 50);
    view.defPosition("a6", 1, 252, 50, 50);
    view.defPosition("b6", 51, 252, 50, 50);
    view.defPosition("c6", 101, 252, 50, 50);
    view.defPosition("d6", 151, 252, 50, 50);
    view.defPosition("e6", 201, 252, 50, 50);
    view.defPosition("f6", 251, 252, 50, 50);
    view.defPosition("g6", 301, 252, 50, 50);
    view.defPosition("h6", 351, 252, 50, 50);
    view.defPosition("i6", 401, 252, 50, 50);
    view.defPosition("a5", 1, 302, 50, 50);
    view.defPosition("b5", 51, 302, 50, 50);
    view.defPosition("c5", 101, 302, 50, 50);
    view.defPosition("d5", 151, 302, 50, 50);
    view.defPosition("e5", 201, 302, 50, 50);
    view.defPosition("f5", 251, 302, 50, 50);
    view.defPosition("g5", 301, 302, 50, 50);
    view.defPosition("h5", 351, 302, 50, 50);
    view.defPosition("i5", 401, 302, 50, 50);
    view.defPosition("a4", 1, 352, 50, 50);
    view.defPosition("b4", 51, 352, 50, 50);
    view.defPosition("c4", 101, 352, 50, 50);
    view.defPosition("d4", 151, 352, 50, 50);
    view.defPosition("e4", 201, 352, 50, 50);
    view.defPosition("f4", 251, 352, 50, 50);
    view.defPosition("g4", 301, 352, 50, 50);
    view.defPosition("h4", 351, 352, 50, 50);
    view.defPosition("i4", 401, 352, 50, 50);
    view.defPosition("a3", 1, 402, 50, 50);
    view.defPosition("b3", 51, 402, 50, 50);
    view.defPosition("c3", 101, 402, 50, 50);
    view.defPosition("d3", 151, 402, 50, 50);
    view.defPosition("e3", 201, 402, 50, 50);
    view.defPosition("f3", 251, 402, 50, 50);
    view.defPosition("g3", 301, 402, 50, 50);
    view.defPosition("h3", 351, 402, 50, 50);
    view.defPosition("i3", 401, 402, 50, 50);
    view.defPosition("a2", 1, 452, 50, 50);
    view.defPosition("b2", 51, 452, 50, 50);
    view.defPosition("c2", 101, 452, 50, 50);
    view.defPosition("d2", 151, 452, 50, 50);
    view.defPosition("e2", 201, 452, 50, 50);
    view.defPosition("f2", 251, 452, 50, 50);
    view.defPosition("g2", 301, 452, 50, 50);
    view.defPosition("h2", 351, 452, 50, 50);
    view.defPosition("i2", 401, 452, 50, 50);
    view.defPosition("a1", 1, 502, 50, 50);
    view.defPosition("b1", 51, 502, 50, 50);
    view.defPosition("c1", 101, 502, 50, 50);
    view.defPosition("d1", 151, 502, 50, 50);
    view.defPosition("e1", 201, 502, 50, 50);
    view.defPosition("f1", 251, 502, 50, 50);
    view.defPosition("g1", 301, 502, 50, 50);
    view.defPosition("h1", 351, 502, 50, 50);
    view.defPosition("i1", 401, 502, 50, 50);
}
