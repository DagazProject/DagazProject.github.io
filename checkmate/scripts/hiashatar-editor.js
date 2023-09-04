Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'PpRrNnBbQqHhKk';

Dagaz.Model.WIDTH  = 10;
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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("You", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a10", [0, 1, 10, 0, 0, 11, 0, 0]);
    design.addPosition("b10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("c10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("d10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("e10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("f10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("g10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("h10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("i10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("j10", [-1, 0, 10, 0, 0, 0, 9, 0]);
    design.addPosition("a9", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j9", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a8", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j8", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a7", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j7", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a6", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j6", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a5", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j5", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a4", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j4", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a3", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j3", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a2", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j2", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a1", [0, 1, 0, -9, -10, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("c1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("d1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("e1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("f1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("g1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("h1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("i1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("j1", [-1, 0, 0, 0, -10, 0, 0, -11]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhitePawn", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlackPawn", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("WhiteRook", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackRook", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("WhiteKnight", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackKnight", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("WhiteBishop", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackBishop", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("WhiteQueen", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackQueen", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("WhiteHia", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackHia", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("WhiteKing", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 0);

    design.addPiece("BlackKing", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "You WhitePawn");
    view.defPiece("BlackPawn", "You BlackPawn");
    view.defPiece("WhiteRook", "You WhiteRook");
    view.defPiece("BlackRook", "You BlackRook");
    view.defPiece("WhiteKnight", "You WhiteKnight");
    view.defPiece("BlackKnight", "You BlackKnight");
    view.defPiece("WhiteBishop", "You WhiteBishop");
    view.defPiece("BlackBishop", "You BlackBishop");
    view.defPiece("WhiteQueen", "You WhiteQueen");
    view.defPiece("BlackQueen", "You BlackQueen");
    view.defPiece("WhiteHia", "You WhiteHia");
    view.defPiece("BlackHia", "You BlackHia");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a10", 1, 2, 50, 50);
    view.defPosition("b10", 51, 2, 50, 50);
    view.defPosition("c10", 101, 2, 50, 50);
    view.defPosition("d10", 151, 2, 50, 50);
    view.defPosition("e10", 201, 2, 50, 50);
    view.defPosition("f10", 251, 2, 50, 50);
    view.defPosition("g10", 301, 2, 50, 50);
    view.defPosition("h10", 351, 2, 50, 50);
    view.defPosition("i10", 401, 2, 50, 50);
    view.defPosition("j10", 451, 2, 50, 50);
    view.defPosition("a9", 1, 52, 50, 50);
    view.defPosition("b9", 51, 52, 50, 50);
    view.defPosition("c9", 101, 52, 50, 50);
    view.defPosition("d9", 151, 52, 50, 50);
    view.defPosition("e9", 201, 52, 50, 50);
    view.defPosition("f9", 251, 52, 50, 50);
    view.defPosition("g9", 301, 52, 50, 50);
    view.defPosition("h9", 351, 52, 50, 50);
    view.defPosition("i9", 401, 52, 50, 50);
    view.defPosition("j9", 451, 52, 50, 50);
    view.defPosition("a8", 1, 102, 50, 50);
    view.defPosition("b8", 51, 102, 50, 50);
    view.defPosition("c8", 101, 102, 50, 50);
    view.defPosition("d8", 151, 102, 50, 50);
    view.defPosition("e8", 201, 102, 50, 50);
    view.defPosition("f8", 251, 102, 50, 50);
    view.defPosition("g8", 301, 102, 50, 50);
    view.defPosition("h8", 351, 102, 50, 50);
    view.defPosition("i8", 401, 102, 50, 50);
    view.defPosition("j8", 451, 102, 50, 50);
    view.defPosition("a7", 1, 152, 50, 50);
    view.defPosition("b7", 51, 152, 50, 50);
    view.defPosition("c7", 101, 152, 50, 50);
    view.defPosition("d7", 151, 152, 50, 50);
    view.defPosition("e7", 201, 152, 50, 50);
    view.defPosition("f7", 251, 152, 50, 50);
    view.defPosition("g7", 301, 152, 50, 50);
    view.defPosition("h7", 351, 152, 50, 50);
    view.defPosition("i7", 401, 152, 50, 50);
    view.defPosition("j7", 451, 152, 50, 50);
    view.defPosition("a6", 1, 202, 50, 50);
    view.defPosition("b6", 51, 202, 50, 50);
    view.defPosition("c6", 101, 202, 50, 50);
    view.defPosition("d6", 151, 202, 50, 50);
    view.defPosition("e6", 201, 202, 50, 50);
    view.defPosition("f6", 251, 202, 50, 50);
    view.defPosition("g6", 301, 202, 50, 50);
    view.defPosition("h6", 351, 202, 50, 50);
    view.defPosition("i6", 401, 202, 50, 50);
    view.defPosition("j6", 451, 202, 50, 50);
    view.defPosition("a5", 1, 252, 50, 50);
    view.defPosition("b5", 51, 252, 50, 50);
    view.defPosition("c5", 101, 252, 50, 50);
    view.defPosition("d5", 151, 252, 50, 50);
    view.defPosition("e5", 201, 252, 50, 50);
    view.defPosition("f5", 251, 252, 50, 50);
    view.defPosition("g5", 301, 252, 50, 50);
    view.defPosition("h5", 351, 252, 50, 50);
    view.defPosition("i5", 401, 252, 50, 50);
    view.defPosition("j5", 451, 252, 50, 50);
    view.defPosition("a4", 1, 302, 50, 50);
    view.defPosition("b4", 51, 302, 50, 50);
    view.defPosition("c4", 101, 302, 50, 50);
    view.defPosition("d4", 151, 302, 50, 50);
    view.defPosition("e4", 201, 302, 50, 50);
    view.defPosition("f4", 251, 302, 50, 50);
    view.defPosition("g4", 301, 302, 50, 50);
    view.defPosition("h4", 351, 302, 50, 50);
    view.defPosition("i4", 401, 302, 50, 50);
    view.defPosition("j4", 451, 302, 50, 50);
    view.defPosition("a3", 1, 352, 50, 50);
    view.defPosition("b3", 51, 352, 50, 50);
    view.defPosition("c3", 101, 352, 50, 50);
    view.defPosition("d3", 151, 352, 50, 50);
    view.defPosition("e3", 201, 352, 50, 50);
    view.defPosition("f3", 251, 352, 50, 50);
    view.defPosition("g3", 301, 352, 50, 50);
    view.defPosition("h3", 351, 352, 50, 50);
    view.defPosition("i3", 401, 352, 50, 50);
    view.defPosition("j3", 451, 352, 50, 50);
    view.defPosition("a2", 1, 402, 50, 50);
    view.defPosition("b2", 51, 402, 50, 50);
    view.defPosition("c2", 101, 402, 50, 50);
    view.defPosition("d2", 151, 402, 50, 50);
    view.defPosition("e2", 201, 402, 50, 50);
    view.defPosition("f2", 251, 402, 50, 50);
    view.defPosition("g2", 301, 402, 50, 50);
    view.defPosition("h2", 351, 402, 50, 50);
    view.defPosition("i2", 401, 402, 50, 50);
    view.defPosition("j2", 451, 402, 50, 50);
    view.defPosition("a1", 1, 452, 50, 50);
    view.defPosition("b1", 51, 452, 50, 50);
    view.defPosition("c1", 101, 452, 50, 50);
    view.defPosition("d1", 151, 452, 50, 50);
    view.defPosition("e1", 201, 452, 50, 50);
    view.defPosition("f1", 251, 452, 50, 50);
    view.defPosition("g1", 301, 452, 50, 50);
    view.defPosition("h1", 351, 452, 50, 50);
    view.defPosition("i1", 401, 452, 50, 50);
    view.defPosition("j1", 451, 452, 50, 50);
}
