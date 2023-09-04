Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;

Dagaz.Model.TO_CHAR = 'PpRrNnBbCcQqFfMmKk';

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

    design.addPiece("WhiteCourier", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackCourier", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("WhiteQueen", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackQueen", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("WhiteFool", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 0);

    design.addPiece("BlackFool", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 0);

    design.addPiece("WhiteMan", 14);
    design.addDrop(14, 0, [], 0);
    design.addMove(14, 1, [], 0);

    design.addPiece("BlackMan", 15);
    design.addDrop(15, 0, [], 0);
    design.addMove(15, 1, [], 0);

    design.addPiece("WhiteKing", 16);
    design.addDrop(16, 0, [], 0);
    design.addMove(16, 1, [], 0);

    design.addPiece("BlackKing", 17);
    design.addDrop(17, 0, [], 0);
    design.addMove(17, 1, [], 0);
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
    view.defPiece("WhiteCourier", "You WhiteCourier");
    view.defPiece("BlackCourier", "You BlackCourier");
    view.defPiece("WhiteQueen", "You WhiteQueen");
    view.defPiece("BlackQueen", "You BlackQueen");
    view.defPiece("WhiteFool", "You WhiteFool");
    view.defPiece("BlackFool", "You BlackFool");
    view.defPiece("WhiteMan", "You WhiteMan");
    view.defPiece("BlackMan", "You BlackMan");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
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
