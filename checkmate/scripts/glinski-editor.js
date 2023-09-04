Dagaz.Controller.noDropIndex = true;

Dagaz.View.SHIFT_X      = 1;
Dagaz.View.SHIFT_Y      = 3;

Dagaz.Model.WIDTH       = 11;
Dagaz.Model.HEIGHT      = 11;

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

    design.addDirection("se");  // 0
    design.addDirection("s");   // 1
    design.addDirection("sw");  // 2
    design.addDirection("sse"); // 3
    design.addDirection("nne"); // 4
    design.addDirection("e");   // 5
    design.addDirection("nnw"); // 6 
    design.addDirection("ssw"); // 7
    design.addDirection("w");   // 8
    design.addDirection("ne");  // 9
    design.addDirection("nw");  // 10
    design.addDirection("n");   // 11

    design.addPlayer("You", [10, 11, 9, 6, 7, 8, 3, 4, 5, 2, 0, 1]);

    design.addPosition("a11", [12, 11, 0, 23, 0, 13, 0, 0, 0, 1, 0, 0]);
    design.addPosition("b11", [12, 11, -1, 23, 0, 13, 0, 10, 0, 1, 0, 0]);
    design.addPosition("c11", [12, 11, -1, 23, 0, 13, 0, 10, 0, 1, 0, 0]);
    design.addPosition("d11", [12, 11, -1, 23, 0, 13, 0, 10, 0, 1, 0, 0]);
    design.addPosition("e11", [12, 11, -1, 23, 0, 13, 0, 10, 0, 1, 0, 0]);
    design.addPosition("f11", [12, 11, -1, 23, 0, 0, 0, 10, 0, 0, 0, 0]);
    design.addPosition("g11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [12, 11, 0, 23, -10, 13, 0, 0, 0, 1, 0, -11]);
    design.addPosition("b10", [12, 11, -1, 23, -10, 13, 0, 10, 0, 1, -12, -11]);
    design.addPosition("c10", [12, 11, -1, 23, -10, 13, 0, 10, -13, 1, -12, -11]);
    design.addPosition("d10", [12, 11, -1, 23, -10, 13, 0, 10, -13, 1, -12, -11]);
    design.addPosition("e10", [12, 11, -1, 23, -10, 13, 0, 10, -13, 1, -12, -11]);
    design.addPosition("f10", [12, 11, -1, 23, 0, 13, 0, 10, -13, 1, -12, -11]);
    design.addPosition("g10", [12, 11, -1, 23, 0, 0, 0, 10, -13, 0, -12, 0]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [12, 11, 0, 23, -10, 13, 0, 0, 0, 1, 0, -11]);
    design.addPosition("b9", [12, 11, -1, 23, -10, 13, -23, 10, 0, 1, -12, -11]);
    design.addPosition("c9", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("d9", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("e9", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("f9", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("g9", [12, 11, -1, 23, 0, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h9", [12, 11, -1, 23, 0, 0, 0, 10, -13, 0, -12, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [12, 11, 0, 23, -10, 13, 0, 0, 0, 1, 0, -11]);
    design.addPosition("b8", [12, 11, -1, 23, -10, 13, -23, 10, 0, 1, -12, -11]);
    design.addPosition("c8", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("d8", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("e8", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("f8", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("g8", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h8", [12, 11, -1, 23, 0, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("i8", [12, 11, -1, 23, 0, 0, 0, 10, -13, 0, -12, 0]);
    design.addPosition("k8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [12, 11, 0, 23, -10, 13, 0, 0, 0, 1, 0, -11]);
    design.addPosition("b7", [12, 11, -1, 23, -10, 13, -23, 10, 0, 1, -12, -11]);
    design.addPosition("c7", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("d7", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("e7", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("f7", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("g7", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h7", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("i7", [12, 11, -1, 23, 0, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("k7", [12, 11, -1, 23, 0, 0, 0, 10, -13, 0, -12, 0]);
    design.addPosition("l7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [12, 0, 0, 0, -10, 13, 0, 0, 0, 1, 0, -11]);
    design.addPosition("b6", [12, 11, -1, 23, -10, 13, -23, 0, 0, 1, -12, -11]);
    design.addPosition("c6", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("d6", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("e6", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("f6", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("g6", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h6", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("i6", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("k6", [12, 11, -1, 23, 0, 0, -23, 10, -13, 1, -12, -11]);
    design.addPosition("l6", [0, 11, -1, 0, 0, 0, 0, 10, -13, 0, -12, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [12, 0, 0, 0, -10, 13, -23, 0, 0, 1, -12, -11]);
    design.addPosition("c5", [12, 11, -1, 23, -10, 13, -23, 0, -13, 1, -12, -11]);
    design.addPosition("d5", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("e5", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("f5", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("g5", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h5", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("i5", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("k5", [12, 11, -1, 23, -10, 0, -23, 10, -13, 1, -12, -11]);
    design.addPosition("l5", [0, 11, -1, 0, 0, 0, -23, 10, -13, 0, -12, -11]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [12, 0, 0, 0, -10, 13, -23, 0, 0, 1, -12, -11]);
    design.addPosition("d4", [12, 11, -1, 23, -10, 13, -23, 0, -13, 1, -12, -11]);
    design.addPosition("e4", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("f4", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("g4", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h4", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("i4", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("k4", [12, 11, -1, 23, -10, 0, -23, 10, -13, 1, -12, -11]);
    design.addPosition("l4", [0, 11, -1, 0, 0, 0, -23, 10, -13, 0, -12, -11]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d3", [12, 0, 0, 0, -10, 13, -23, 0, 0, 1, -12, -11]);
    design.addPosition("e3", [12, 11, -1, 23, -10, 13, -23, 0, -13, 1, -12, -11]);
    design.addPosition("f3", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("g3", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h3", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("i3", [12, 11, -1, 23, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("k3", [12, 11, -1, 23, -10, 0, -23, 10, -13, 1, -12, -11]);
    design.addPosition("l3", [0, 11, -1, 0, 0, 0, -23, 10, -13, 0, -12, -11]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [12, 0, 0, 0, -10, 13, -23, 0, 0, 1, -12, -11]);
    design.addPosition("f2", [12, 11, -1, 0, -10, 13, -23, 0, -13, 1, -12, -11]);
    design.addPosition("g2", [12, 11, -1, 0, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("h2", [12, 11, -1, 0, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("i2", [12, 11, -1, 0, -10, 13, -23, 10, -13, 1, -12, -11]);
    design.addPosition("k2", [12, 11, -1, 0, -10, 0, -23, 10, -13, 1, -12, -11]);
    design.addPosition("l2", [0, 11, -1, 0, 0, 0, -23, 10, -13, 0, -12, -11]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, -10, 0, -23, 0, 0, 1, -12, -11]);
    design.addPosition("g1", [0, 0, -1, 0, -10, 0, -23, 0, -13, 1, -12, -11]);
    design.addPosition("h1", [0, 0, -1, 0, -10, 0, -23, 0, -13, 1, -12, -11]);
    design.addPosition("i1", [0, 0, -1, 0, -10, 0, -23, 0, -13, 1, -12, -11]);
    design.addPosition("k1", [0, 0, -1, 0, -10, 0, -23, 0, -13, 1, -12, -11]);
    design.addPosition("l1", [0, 0, -1, 0, 0, 0, -23, 0, -13, 0, -12, -11]);

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
 
    view.defPosition("a11", 48, 192, 49, 49);
    view.defPosition("b11", 108, 157, 49, 49);
    view.defPosition("c11", 168, 122, 49, 49);
    view.defPosition("d11", 228, 87, 49, 49);
    view.defPosition("e11", 288, 52, 49, 49);
    view.defPosition("f11", 348, 17, 49, 49);
    view.defPosition("g11", 408, -18, 49, 49);
    view.defPosition("h11", 468, -53, 49, 49);
    view.defPosition("i11", 528, -88, 49, 49);
    view.defPosition("k11", 588, -123, 49, 49);
    view.defPosition("l11", 648, -158, 49, 49);
    view.defPosition("a10", 48, 262, 49, 49);
    view.defPosition("b10", 108, 227, 49, 49);
    view.defPosition("c10", 168, 192, 49, 49);
    view.defPosition("d10", 228, 157, 49, 49);
    view.defPosition("e10", 288, 122, 49, 49);
    view.defPosition("f10", 348, 87, 49, 49);
    view.defPosition("g10", 408, 52, 49, 49);
    view.defPosition("h10", 468, 17, 49, 49);
    view.defPosition("i10", 528, -18, 49, 49);
    view.defPosition("k10", 588, -53, 49, 49);
    view.defPosition("l10", 648, -88, 49, 49);
    view.defPosition("a9", 48, 332, 49, 49);
    view.defPosition("b9", 108, 297, 49, 49);
    view.defPosition("c9", 168, 262, 49, 49);
    view.defPosition("d9", 228, 227, 49, 49);
    view.defPosition("e9", 288, 192, 49, 49);
    view.defPosition("f9", 348, 157, 49, 49);
    view.defPosition("g9", 408, 122, 49, 49);
    view.defPosition("h9", 468, 87, 49, 49);
    view.defPosition("i9", 528, 52, 49, 49);
    view.defPosition("k9", 588, 17, 49, 49);
    view.defPosition("l9", 648, -18, 49, 49);
    view.defPosition("a8", 48, 402, 49, 49);
    view.defPosition("b8", 108, 367, 49, 49);
    view.defPosition("c8", 168, 332, 49, 49);
    view.defPosition("d8", 228, 297, 49, 49);
    view.defPosition("e8", 288, 262, 49, 49);
    view.defPosition("f8", 348, 227, 49, 49);
    view.defPosition("g8", 408, 192, 49, 49);
    view.defPosition("h8", 468, 157, 49, 49);
    view.defPosition("i8", 528, 122, 49, 49);
    view.defPosition("k8", 588, 87, 49, 49);
    view.defPosition("l8", 648, 52, 49, 49);
    view.defPosition("a7", 48, 472, 49, 49);
    view.defPosition("b7", 108, 437, 49, 49);
    view.defPosition("c7", 168, 402, 49, 49);
    view.defPosition("d7", 228, 367, 49, 49);
    view.defPosition("e7", 288, 332, 49, 49);
    view.defPosition("f7", 348, 297, 49, 49);
    view.defPosition("g7", 408, 262, 49, 49);
    view.defPosition("h7", 468, 227, 49, 49);
    view.defPosition("i7", 528, 192, 49, 49);
    view.defPosition("k7", 588, 157, 49, 49);
    view.defPosition("l7", 648, 122, 49, 49);
    view.defPosition("a6", 48, 542, 49, 49);
    view.defPosition("b6", 108, 507, 49, 49);
    view.defPosition("c6", 168, 472, 49, 49);
    view.defPosition("d6", 228, 437, 49, 49);
    view.defPosition("e6", 288, 402, 49, 49);
    view.defPosition("f6", 348, 367, 49, 49);
    view.defPosition("g6", 408, 332, 49, 49);
    view.defPosition("h6", 468, 297, 49, 49);
    view.defPosition("i6", 528, 262, 49, 49);
    view.defPosition("k6", 588, 227, 49, 49);
    view.defPosition("l6", 648, 192, 49, 49);
    view.defPosition("a5", 48, 612, 49, 49);
    view.defPosition("b5", 108, 577, 49, 49);
    view.defPosition("c5", 168, 542, 49, 49);
    view.defPosition("d5", 228, 507, 49, 49);
    view.defPosition("e5", 288, 472, 49, 49);
    view.defPosition("f5", 348, 437, 49, 49);
    view.defPosition("g5", 408, 402, 49, 49);
    view.defPosition("h5", 468, 367, 49, 49);
    view.defPosition("i5", 528, 332, 49, 49);
    view.defPosition("k5", 588, 297, 49, 49);
    view.defPosition("l5", 648, 262, 49, 49);
    view.defPosition("a4", 48, 682, 49, 49);
    view.defPosition("b4", 108, 647, 49, 49);
    view.defPosition("c4", 168, 612, 49, 49);
    view.defPosition("d4", 228, 577, 49, 49);
    view.defPosition("e4", 288, 542, 49, 49);
    view.defPosition("f4", 348, 507, 49, 49);
    view.defPosition("g4", 408, 472, 49, 49);
    view.defPosition("h4", 468, 437, 49, 49);
    view.defPosition("i4", 528, 402, 49, 49);
    view.defPosition("k4", 588, 367, 49, 49);
    view.defPosition("l4", 648, 332, 49, 49);
    view.defPosition("a3", 48, 752, 49, 49);
    view.defPosition("b3", 108, 717, 49, 49);
    view.defPosition("c3", 168, 682, 49, 49);
    view.defPosition("d3", 228, 647, 49, 49);
    view.defPosition("e3", 288, 612, 49, 49);
    view.defPosition("f3", 348, 577, 49, 49);
    view.defPosition("g3", 408, 542, 49, 49);
    view.defPosition("h3", 468, 507, 49, 49);
    view.defPosition("i3", 528, 472, 49, 49);
    view.defPosition("k3", 588, 437, 49, 49);
    view.defPosition("l3", 648, 402, 49, 49);
    view.defPosition("a2", 48, 822, 49, 49);
    view.defPosition("b2", 108, 787, 49, 49);
    view.defPosition("c2", 168, 752, 49, 49);
    view.defPosition("d2", 228, 717, 49, 49);
    view.defPosition("e2", 288, 682, 49, 49);
    view.defPosition("f2", 348, 647, 49, 49);
    view.defPosition("g2", 408, 612, 49, 49);
    view.defPosition("h2", 468, 577, 49, 49);
    view.defPosition("i2", 528, 542, 49, 49);
    view.defPosition("k2", 588, 507, 49, 49);
    view.defPosition("l2", 648, 472, 49, 49);
    view.defPosition("a1", 48, 892, 49, 49);
    view.defPosition("b1", 108, 857, 49, 49);
    view.defPosition("c1", 168, 822, 49, 49);
    view.defPosition("d1", 228, 787, 49, 49);
    view.defPosition("e1", 288, 752, 49, 49);
    view.defPosition("f1", 348, 717, 49, 49);
    view.defPosition("g1", 408, 682, 49, 49);
    view.defPosition("h1", 468, 647, 49, 49);
    view.defPosition("i1", 528, 612, 49, 49);
    view.defPosition("k1", 588, 577, 49, 49);
    view.defPosition("l1", 648, 542, 49, 49);
}
