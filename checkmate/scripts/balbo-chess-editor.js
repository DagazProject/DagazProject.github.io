Dagaz.Controller.noDropIndex = true;

Dagaz.Model.WIDTH  = 11;
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

    design.addDirection("sw");  // 0
    design.addDirection("nne"); // 1
    design.addDirection("sse"); // 2
    design.addDirection("e");   // 3
    design.addDirection("nw");  // 4
    design.addDirection("n");   // 5
    design.addDirection("een"); // 6
    design.addDirection("wwn"); // 7
    design.addDirection("se");  // 8
    design.addDirection("ees"); // 9
    design.addDirection("wws"); // 10
    design.addDirection("s");   // 11
    design.addDirection("nnw"); // 12
    design.addDirection("ssw"); // 13
    design.addDirection("w");   // 14
    design.addDirection("ne");  // 15
	
    design.addPlayer("You", [15, 13, 12, 14, 8, 11, 10, 9, 4, 7, 6, 5, 2, 1, 3, 0]);

    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e10", [10, 0, 23, 1, 0, 0, 0, 0, 12, 13, 0, 11, 0, 21, 0, 0]);
    design.addPosition("f10", [10, 0, 23, 1, 0, 0, 0, 0, 12, 13, 9, 11, 0, 21, -1, 0]);
    design.addPosition("g10", [10, 0, 23, 0, 0, 0, 0, 0, 12, 0, 9, 11, 0, 21, -1, 0]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [10, 0, 23, 1, 0, 0, -9, 0, 12, 13, 0, 11, 0, 21, 0, -10]);
    design.addPosition("e9", [10, 0, 23, 1, 0, -11, -9, 0, 12, 13, 9, 11, 0, 21, -1, -10]);
    design.addPosition("f9", [10, 0, 23, 1, -12, -11, 0, 0, 12, 13, 9, 11, 0, 21, -1, -10]);
    design.addPosition("g9", [10, 0, 23, 1, -12, -11, 0, -13, 12, 13, 9, 11, 0, 21, -1, 0]);
    design.addPosition("h9", [10, 0, 23, 0, -12, 0, 0, -13, 12, 0, 9, 11, 0, 21, -1, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [10, 0, 23, 1, 0, 0, -9, 0, 12, 13, 0, 11, 0, 21, 0, -10]);
    design.addPosition("d8", [10, -21, 23, 1, 0, -11, -9, 0, 12, 13, 9, 11, 0, 21, -1, -10]);
    design.addPosition("e8", [10, -21, 23, 1, -12, -11, -9, 0, 12, 13, 9, 11, 0, 21, -1, -10]);
    design.addPosition("f8", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("g8", [10, 0, 23, 1, -12, -11, 0, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("h8", [10, 0, 23, 1, -12, -11, 0, -13, 12, 13, 9, 11, -23, 21, -1, 0]);
    design.addPosition("i8", [10, 0, 23, 0, -12, 0, 0, -13, 12, 0, 9, 11, 0, 21, -1, 0]);
    design.addPosition("j8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [10, 0, 23, 1, 0, 0, -9, 0, 12, 13, 0, 11, 0, 21, 0, -10]);
    design.addPosition("c7", [10, -21, 23, 1, 0, -11, -9, 0, 12, 13, 9, 11, 0, 21, -1, -10]);
    design.addPosition("d7", [10, -21, 23, 1, -12, -11, -9, 0, 12, 13, 9, 11, 0, 21, -1, -10]);
    design.addPosition("e7", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("f7", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("g7", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("h7", [10, 0, 23, 1, -12, -11, 0, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("i7", [10, 0, 23, 1, -12, -11, 0, -13, 12, 13, 9, 11, -23, 21, -1, 0]);
    design.addPosition("j7", [10, 0, 23, 0, -12, 0, 0, -13, 12, 0, 9, 11, 0, 21, -1, 0]);
    design.addPosition("k7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 23, 1, 0, 0, -9, 0, 12, 13, 0, 11, 0, 0, 0, -10]);
    design.addPosition("b6", [10, -21, 23, 1, 0, -11, -9, 0, 12, 13, 0, 11, 0, 0, -1, -10]);
    design.addPosition("c6", [10, -21, 23, 1, -12, -11, -9, 0, 12, 13, 9, 11, 0, 21, -1, -10]);
    design.addPosition("d6", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("e6", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("f6", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("g6", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("h6", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("i6", [10, 0, 23, 1, -12, -11, 0, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("j6", [10, 0, 0, 1, -12, -11, 0, -13, 12, 0, 9, 11, -23, 21, -1, 0]);
    design.addPosition("k6", [10, 0, 0, 0, -12, 0, 0, -13, 0, 0, 9, 11, 0, 21, -1, 0]);
    design.addPosition("a5", [0, -21, 0, 1, 0, -11, -9, 0, 12, 13, 0, 0, 0, 0, 0, -10]);
    design.addPosition("b5", [0, -21, 23, 1, -12, -11, -9, 0, 12, 13, 0, 11, 0, 0, -1, -10]);
    design.addPosition("c5", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 0, 11, -23, 0, -1, -10]);
    design.addPosition("d5", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("e5", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("f5", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("g5", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("h5", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("i5", [10, -21, 0, 1, -12, -11, -9, -13, 12, 0, 9, 11, -23, 21, -1, -10]);
    design.addPosition("j5", [10, 0, 0, 1, -12, -11, 0, -13, 0, 0, 9, 11, -23, 21, -1, -10]);
    design.addPosition("k5", [10, 0, 0, 0, -12, -11, 0, -13, 0, 0, 9, 0, -23, 0, -1, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, -21, 0, 1, -12, -11, -9, 0, 12, 13, 0, 0, -23, 0, 0, -10]);
    design.addPosition("c4", [0, -21, 23, 1, -12, -11, -9, -13, 12, 13, 0, 11, -23, 0, -1, -10]);
    design.addPosition("d4", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 0, 11, -23, 0, -1, -10]);
    design.addPosition("e4", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("f4", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("g4", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("h4", [10, -21, 0, 1, -12, -11, -9, -13, 12, 0, 9, 11, -23, 21, -1, -10]);
    design.addPosition("i4", [10, -21, 0, 1, -12, -11, -9, -13, 0, 0, 9, 11, -23, 21, -1, -10]);
    design.addPosition("j4", [10, -21, 0, 0, -12, -11, 0, -13, 0, 0, 9, 0, -23, 0, -1, -10]);
    design.addPosition("k4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, -21, 0, 1, -12, -11, -9, 0, 12, 13, 0, 0, -23, 0, 0, -10]);
    design.addPosition("d3", [0, -21, 23, 1, -12, -11, -9, -13, 12, 13, 0, 11, -23, 0, -1, -10]);
    design.addPosition("e3", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 0, 11, -23, 0, -1, -10]);
    design.addPosition("f3", [10, -21, 23, 1, -12, -11, -9, -13, 12, 13, 9, 11, -23, 21, -1, -10]);
    design.addPosition("g3", [10, -21, 0, 1, -12, -11, -9, -13, 12, 0, 9, 11, -23, 21, -1, -10]);
    design.addPosition("h3", [10, -21, 0, 1, -12, -11, -9, -13, 0, 0, 9, 11, -23, 21, -1, -10]);
    design.addPosition("i3", [10, -21, 0, 0, -12, -11, 0, -13, 0, 0, 9, 0, -23, 0, -1, -10]);
    design.addPosition("j3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, -21, 0, 1, -12, -11, -9, 0, 12, 13, 0, 0, -23, 0, 0, -10]);
    design.addPosition("e2", [0, -21, 0, 1, -12, -11, -9, -13, 12, 13, 0, 11, -23, 0, -1, -10]);
    design.addPosition("f2", [10, -21, 0, 1, -12, -11, -9, -13, 12, 0, 0, 11, -23, 0, -1, -10]);
    design.addPosition("g2", [10, -21, 0, 1, -12, -11, -9, -13, 0, 0, 9, 11, -23, 0, -1, -10]);
    design.addPosition("h2", [10, -21, 0, 0, -12, -11, 0, -13, 0, 0, 9, 0, -23, 0, -1, -10]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, -21, 0, 1, -12, -11, -9, 0, 0, 0, 0, 0, -23, 0, 0, -10]);
    design.addPosition("f1", [0, -21, 0, 1, -12, -11, -9, -13, 0, 0, 0, 0, -23, 0, -1, -10]);
    design.addPosition("g1", [0, -21, 0, 0, -12, -11, 0, -13, 0, 0, 0, 0, -23, 0, -1, -10]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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

    design.addPiece("WhiteKing", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackKing", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);
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
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a10", 2, 2, 50, 50);
    view.defPosition("b10", 52, 2, 50, 50);
    view.defPosition("c10", 102, 2, 50, 50);
    view.defPosition("d10", 152, 2, 50, 50);
    view.defPosition("e10", 202, 2, 50, 50);
    view.defPosition("f10", 252, 2, 50, 50);
    view.defPosition("g10", 302, 2, 50, 50);
    view.defPosition("h10", 352, 2, 50, 50);
    view.defPosition("i10", 402, 2, 50, 50);
    view.defPosition("j10", 452, 2, 50, 50);
    view.defPosition("k10", 502, 2, 50, 50);
    view.defPosition("a9", 2, 52, 50, 50);
    view.defPosition("b9", 52, 52, 50, 50);
    view.defPosition("c9", 102, 52, 50, 50);
    view.defPosition("d9", 152, 52, 50, 50);
    view.defPosition("e9", 202, 52, 50, 50);
    view.defPosition("f9", 252, 52, 50, 50);
    view.defPosition("g9", 302, 52, 50, 50);
    view.defPosition("h9", 352, 52, 50, 50);
    view.defPosition("i9", 402, 52, 50, 50);
    view.defPosition("j9", 452, 52, 50, 50);
    view.defPosition("k9", 502, 52, 50, 50);
    view.defPosition("a8", 2, 102, 50, 50);
    view.defPosition("b8", 52, 102, 50, 50);
    view.defPosition("c8", 102, 102, 50, 50);
    view.defPosition("d8", 152, 102, 50, 50);
    view.defPosition("e8", 202, 102, 50, 50);
    view.defPosition("f8", 252, 102, 50, 50);
    view.defPosition("g8", 302, 102, 50, 50);
    view.defPosition("h8", 352, 102, 50, 50);
    view.defPosition("i8", 402, 102, 50, 50);
    view.defPosition("j8", 452, 102, 50, 50);
    view.defPosition("k8", 502, 102, 50, 50);
    view.defPosition("a7", 2, 152, 50, 50);
    view.defPosition("b7", 52, 152, 50, 50);
    view.defPosition("c7", 102, 152, 50, 50);
    view.defPosition("d7", 152, 152, 50, 50);
    view.defPosition("e7", 202, 152, 50, 50);
    view.defPosition("f7", 252, 152, 50, 50);
    view.defPosition("g7", 302, 152, 50, 50);
    view.defPosition("h7", 352, 152, 50, 50);
    view.defPosition("i7", 402, 152, 50, 50);
    view.defPosition("j7", 452, 152, 50, 50);
    view.defPosition("k7", 502, 152, 50, 50);
    view.defPosition("a6", 2, 202, 50, 50);
    view.defPosition("b6", 52, 202, 50, 50);
    view.defPosition("c6", 102, 202, 50, 50);
    view.defPosition("d6", 152, 202, 50, 50);
    view.defPosition("e6", 202, 202, 50, 50);
    view.defPosition("f6", 252, 202, 50, 50);
    view.defPosition("g6", 302, 202, 50, 50);
    view.defPosition("h6", 352, 202, 50, 50);
    view.defPosition("i6", 402, 202, 50, 50);
    view.defPosition("j6", 452, 202, 50, 50);
    view.defPosition("k6", 502, 202, 50, 50);
    view.defPosition("a5", 2, 252, 50, 50);
    view.defPosition("b5", 52, 252, 50, 50);
    view.defPosition("c5", 102, 252, 50, 50);
    view.defPosition("d5", 152, 252, 50, 50);
    view.defPosition("e5", 202, 252, 50, 50);
    view.defPosition("f5", 252, 252, 50, 50);
    view.defPosition("g5", 302, 252, 50, 50);
    view.defPosition("h5", 352, 252, 50, 50);
    view.defPosition("i5", 402, 252, 50, 50);
    view.defPosition("j5", 452, 252, 50, 50);
    view.defPosition("k5", 502, 252, 50, 50);
    view.defPosition("a4", 2, 302, 50, 50);
    view.defPosition("b4", 52, 302, 50, 50);
    view.defPosition("c4", 102, 302, 50, 50);
    view.defPosition("d4", 152, 302, 50, 50);
    view.defPosition("e4", 202, 302, 50, 50);
    view.defPosition("f4", 252, 302, 50, 50);
    view.defPosition("g4", 302, 302, 50, 50);
    view.defPosition("h4", 352, 302, 50, 50);
    view.defPosition("i4", 402, 302, 50, 50);
    view.defPosition("j4", 452, 302, 50, 50);
    view.defPosition("k4", 502, 302, 50, 50);
    view.defPosition("a3", 2, 352, 50, 50);
    view.defPosition("b3", 52, 352, 50, 50);
    view.defPosition("c3", 102, 352, 50, 50);
    view.defPosition("d3", 152, 352, 50, 50);
    view.defPosition("e3", 202, 352, 50, 50);
    view.defPosition("f3", 252, 352, 50, 50);
    view.defPosition("g3", 302, 352, 50, 50);
    view.defPosition("h3", 352, 352, 50, 50);
    view.defPosition("i3", 402, 352, 50, 50);
    view.defPosition("j3", 452, 352, 50, 50);
    view.defPosition("k3", 502, 352, 50, 50);
    view.defPosition("a2", 2, 402, 50, 50);
    view.defPosition("b2", 52, 402, 50, 50);
    view.defPosition("c2", 102, 402, 50, 50);
    view.defPosition("d2", 152, 402, 50, 50);
    view.defPosition("e2", 202, 402, 50, 50);
    view.defPosition("f2", 252, 402, 50, 50);
    view.defPosition("g2", 302, 402, 50, 50);
    view.defPosition("h2", 352, 402, 50, 50);
    view.defPosition("i2", 402, 402, 50, 50);
    view.defPosition("j2", 452, 402, 50, 50);
    view.defPosition("k2", 502, 402, 50, 50);
    view.defPosition("a1", 2, 452, 50, 50);
    view.defPosition("b1", 52, 452, 50, 50);
    view.defPosition("c1", 102, 452, 50, 50);
    view.defPosition("d1", 152, 452, 50, 50);
    view.defPosition("e1", 202, 452, 50, 50);
    view.defPosition("f1", 252, 452, 50, 50);
    view.defPosition("g1", 302, 452, 50, 50);
    view.defPosition("h1", 352, 452, 50, 50);
    view.defPosition("i1", 402, 452, 50, 50);
    view.defPosition("j1", 452, 452, 50, 50);
    view.defPosition("k1", 502, 452, 50, 50);
}
