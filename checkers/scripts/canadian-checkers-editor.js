Dagaz.Controller.noDropIndex = true;

Dagaz.Model.WIDTH  = 12;
Dagaz.Model.HEIGHT = 12;

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

    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("ne");
    design.addDirection("nw");

    design.addPlayer("You", [3, 2, 1, 0]);

    design.addPosition("a12", [13, 0, 0, 0]);
    design.addPosition("b12", [13, 11, 0, 0]);
    design.addPosition("c12", [13, 11, 0, 0]);
    design.addPosition("d12", [13, 11, 0, 0]);
    design.addPosition("e12", [13, 11, 0, 0]);
    design.addPosition("f12", [13, 11, 0, 0]);
    design.addPosition("g12", [13, 11, 0, 0]);
    design.addPosition("h12", [13, 11, 0, 0]);
    design.addPosition("i12", [13, 11, 0, 0]);
    design.addPosition("j12", [13, 11, 0, 0]);
    design.addPosition("k12", [13, 11, 0, 0]);
    design.addPosition("l12", [0, 11, 0, 0]);
    design.addPosition("a11", [13, 0, -11, 0]);
    design.addPosition("b11", [13, 11, -11, -13]);
    design.addPosition("c11", [13, 11, -11, -13]);
    design.addPosition("d11", [13, 11, -11, -13]);
    design.addPosition("e11", [13, 11, -11, -13]);
    design.addPosition("f11", [13, 11, -11, -13]);
    design.addPosition("g11", [13, 11, -11, -13]);
    design.addPosition("h11", [13, 11, -11, -13]);
    design.addPosition("i11", [13, 11, -11, -13]);
    design.addPosition("j11", [13, 11, -11, -13]);
    design.addPosition("k11", [13, 11, -11, -13]);
    design.addPosition("l11", [0, 11, 0, -13]);
    design.addPosition("a10", [13, 0, -11, 0]);
    design.addPosition("b10", [13, 11, -11, -13]);
    design.addPosition("c10", [13, 11, -11, -13]);
    design.addPosition("d10", [13, 11, -11, -13]);
    design.addPosition("e10", [13, 11, -11, -13]);
    design.addPosition("f10", [13, 11, -11, -13]);
    design.addPosition("g10", [13, 11, -11, -13]);
    design.addPosition("h10", [13, 11, -11, -13]);
    design.addPosition("i10", [13, 11, -11, -13]);
    design.addPosition("j10", [13, 11, -11, -13]);
    design.addPosition("k10", [13, 11, -11, -13]);
    design.addPosition("l10", [0, 11, 0, -13]);
    design.addPosition("a9", [13, 0, -11, 0]);
    design.addPosition("b9", [13, 11, -11, -13]);
    design.addPosition("c9", [13, 11, -11, -13]);
    design.addPosition("d9", [13, 11, -11, -13]);
    design.addPosition("e9", [13, 11, -11, -13]);
    design.addPosition("f9", [13, 11, -11, -13]);
    design.addPosition("g9", [13, 11, -11, -13]);
    design.addPosition("h9", [13, 11, -11, -13]);
    design.addPosition("i9", [13, 11, -11, -13]);
    design.addPosition("j9", [13, 11, -11, -13]);
    design.addPosition("k9", [13, 11, -11, -13]);
    design.addPosition("l9", [0, 11, 0, -13]);
    design.addPosition("a8", [13, 0, -11, 0]);
    design.addPosition("b8", [13, 11, -11, -13]);
    design.addPosition("c8", [13, 11, -11, -13]);
    design.addPosition("d8", [13, 11, -11, -13]);
    design.addPosition("e8", [13, 11, -11, -13]);
    design.addPosition("f8", [13, 11, -11, -13]);
    design.addPosition("g8", [13, 11, -11, -13]);
    design.addPosition("h8", [13, 11, -11, -13]);
    design.addPosition("i8", [13, 11, -11, -13]);
    design.addPosition("j8", [13, 11, -11, -13]);
    design.addPosition("k8", [13, 11, -11, -13]);
    design.addPosition("l8", [0, 11, 0, -13]);
    design.addPosition("a7", [13, 0, -11, 0]);
    design.addPosition("b7", [13, 11, -11, -13]);
    design.addPosition("c7", [13, 11, -11, -13]);
    design.addPosition("d7", [13, 11, -11, -13]);
    design.addPosition("e7", [13, 11, -11, -13]);
    design.addPosition("f7", [13, 11, -11, -13]);
    design.addPosition("g7", [13, 11, -11, -13]);
    design.addPosition("h7", [13, 11, -11, -13]);
    design.addPosition("i7", [13, 11, -11, -13]);
    design.addPosition("j7", [13, 11, -11, -13]);
    design.addPosition("k7", [13, 11, -11, -13]);
    design.addPosition("l7", [0, 11, 0, -13]);
    design.addPosition("a6", [13, 0, -11, 0]);
    design.addPosition("b6", [13, 11, -11, -13]);
    design.addPosition("c6", [13, 11, -11, -13]);
    design.addPosition("d6", [13, 11, -11, -13]);
    design.addPosition("e6", [13, 11, -11, -13]);
    design.addPosition("f6", [13, 11, -11, -13]);
    design.addPosition("g6", [13, 11, -11, -13]);
    design.addPosition("h6", [13, 11, -11, -13]);
    design.addPosition("i6", [13, 11, -11, -13]);
    design.addPosition("j6", [13, 11, -11, -13]);
    design.addPosition("k6", [13, 11, -11, -13]);
    design.addPosition("l6", [0, 11, 0, -13]);
    design.addPosition("a5", [13, 0, -11, 0]);
    design.addPosition("b5", [13, 11, -11, -13]);
    design.addPosition("c5", [13, 11, -11, -13]);
    design.addPosition("d5", [13, 11, -11, -13]);
    design.addPosition("e5", [13, 11, -11, -13]);
    design.addPosition("f5", [13, 11, -11, -13]);
    design.addPosition("g5", [13, 11, -11, -13]);
    design.addPosition("h5", [13, 11, -11, -13]);
    design.addPosition("i5", [13, 11, -11, -13]);
    design.addPosition("j5", [13, 11, -11, -13]);
    design.addPosition("k5", [13, 11, -11, -13]);
    design.addPosition("l5", [0, 11, 0, -13]);
    design.addPosition("a4", [13, 0, -11, 0]);
    design.addPosition("b4", [13, 11, -11, -13]);
    design.addPosition("c4", [13, 11, -11, -13]);
    design.addPosition("d4", [13, 11, -11, -13]);
    design.addPosition("e4", [13, 11, -11, -13]);
    design.addPosition("f4", [13, 11, -11, -13]);
    design.addPosition("g4", [13, 11, -11, -13]);
    design.addPosition("h4", [13, 11, -11, -13]);
    design.addPosition("i4", [13, 11, -11, -13]);
    design.addPosition("j4", [13, 11, -11, -13]);
    design.addPosition("k4", [13, 11, -11, -13]);
    design.addPosition("l4", [0, 11, 0, -13]);
    design.addPosition("a3", [13, 0, -11, 0]);
    design.addPosition("b3", [13, 11, -11, -13]);
    design.addPosition("c3", [13, 11, -11, -13]);
    design.addPosition("d3", [13, 11, -11, -13]);
    design.addPosition("e3", [13, 11, -11, -13]);
    design.addPosition("f3", [13, 11, -11, -13]);
    design.addPosition("g3", [13, 11, -11, -13]);
    design.addPosition("h3", [13, 11, -11, -13]);
    design.addPosition("i3", [13, 11, -11, -13]);
    design.addPosition("j3", [13, 11, -11, -13]);
    design.addPosition("k3", [13, 11, -11, -13]);
    design.addPosition("l3", [0, 11, 0, -13]);
    design.addPosition("a2", [13, 0, -11, 0]);
    design.addPosition("b2", [13, 11, -11, -13]);
    design.addPosition("c2", [13, 11, -11, -13]);
    design.addPosition("d2", [13, 11, -11, -13]);
    design.addPosition("e2", [13, 11, -11, -13]);
    design.addPosition("f2", [13, 11, -11, -13]);
    design.addPosition("g2", [13, 11, -11, -13]);
    design.addPosition("h2", [13, 11, -11, -13]);
    design.addPosition("i2", [13, 11, -11, -13]);
    design.addPosition("j2", [13, 11, -11, -13]);
    design.addPosition("k2", [13, 11, -11, -13]);
    design.addPosition("l2", [0, 11, 0, -13]);
    design.addPosition("a1", [0, 0, -11, 0]);
    design.addPosition("b1", [0, 0, -11, -13]);
    design.addPosition("c1", [0, 0, -11, -13]);
    design.addPosition("d1", [0, 0, -11, -13]);
    design.addPosition("e1", [0, 0, -11, -13]);
    design.addPosition("f1", [0, 0, -11, -13]);
    design.addPosition("g1", [0, 0, -11, -13]);
    design.addPosition("h1", [0, 0, -11, -13]);
    design.addPosition("i1", [0, 0, -11, -13]);
    design.addPosition("j1", [0, 0, -11, -13]);
    design.addPosition("k1", [0, 0, -11, -13]);
    design.addPosition("l1", [0, 0, 0, -13]);

    design.addZone("black", 1, [132, 134, 136, 138, 140, 142, 121, 123, 125, 127, 129, 131, 108, 110, 112, 114, 116, 118, 97, 99, 101, 103, 105, 107, 84, 86, 88, 90, 92, 94, 73, 75, 77, 79, 81, 83, 60, 62, 64, 66, 68, 70, 49, 51, 53, 55, 57, 59, 36, 38, 40, 42, 44, 46, 25, 27, 29, 31, 33, 35, 12, 14, 16, 18, 20, 22, 1, 3, 5, 7, 9, 11]);
    design.addZone("white-promotion", 1, [1, 3, 5, 7, 9, 11]);
    design.addZone("black-promotion", 1, [132, 134, 136, 138, 140, 142]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// black
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.IN_ZONE,	0);	// black
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// white-promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.IN_ZONE,	0);	// black
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	2);	// black-promotion
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhiteMan", 0);
    design.addDrop(0, 1, [], 0);
    design.addMove(0, 3, [], 0);

    design.addPiece("BlackMan", 1);
    design.addDrop(1, 2, [], 0);
    design.addMove(1, 3, [], 0);

    design.addPiece("WhiteKing", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 3, [], 0);

    design.addPiece("BlackKing", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 3, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "You WhiteMan");
    view.defPiece("BlackMan", "You BlackMan");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a12", 2, 2, 50, 50);
    view.defPosition("b12", 52, 2, 50, 50);
    view.defPosition("c12", 102, 2, 50, 50);
    view.defPosition("d12", 152, 2, 50, 50);
    view.defPosition("e12", 202, 2, 50, 50);
    view.defPosition("f12", 252, 2, 50, 50);
    view.defPosition("g12", 302, 2, 50, 50);
    view.defPosition("h12", 352, 2, 50, 50);
    view.defPosition("i12", 402, 2, 50, 50);
    view.defPosition("j12", 452, 2, 50, 50);
    view.defPosition("k12", 502, 2, 50, 50);
    view.defPosition("l12", 552, 2, 50, 50);
    view.defPosition("a11", 2, 52, 50, 50);
    view.defPosition("b11", 52, 52, 50, 50);
    view.defPosition("c11", 102, 52, 50, 50);
    view.defPosition("d11", 152, 52, 50, 50);
    view.defPosition("e11", 202, 52, 50, 50);
    view.defPosition("f11", 252, 52, 50, 50);
    view.defPosition("g11", 302, 52, 50, 50);
    view.defPosition("h11", 352, 52, 50, 50);
    view.defPosition("i11", 402, 52, 50, 50);
    view.defPosition("j11", 452, 52, 50, 50);
    view.defPosition("k11", 502, 52, 50, 50);
    view.defPosition("l11", 552, 52, 50, 50);
    view.defPosition("a10", 2, 102, 50, 50);
    view.defPosition("b10", 52, 102, 50, 50);
    view.defPosition("c10", 102, 102, 50, 50);
    view.defPosition("d10", 152, 102, 50, 50);
    view.defPosition("e10", 202, 102, 50, 50);
    view.defPosition("f10", 252, 102, 50, 50);
    view.defPosition("g10", 302, 102, 50, 50);
    view.defPosition("h10", 352, 102, 50, 50);
    view.defPosition("i10", 402, 102, 50, 50);
    view.defPosition("j10", 452, 102, 50, 50);
    view.defPosition("k10", 502, 102, 50, 50);
    view.defPosition("l10", 552, 102, 50, 50);
    view.defPosition("a9", 2, 152, 50, 50);
    view.defPosition("b9", 52, 152, 50, 50);
    view.defPosition("c9", 102, 152, 50, 50);
    view.defPosition("d9", 152, 152, 50, 50);
    view.defPosition("e9", 202, 152, 50, 50);
    view.defPosition("f9", 252, 152, 50, 50);
    view.defPosition("g9", 302, 152, 50, 50);
    view.defPosition("h9", 352, 152, 50, 50);
    view.defPosition("i9", 402, 152, 50, 50);
    view.defPosition("j9", 452, 152, 50, 50);
    view.defPosition("k9", 502, 152, 50, 50);
    view.defPosition("l9", 552, 152, 50, 50);
    view.defPosition("a8", 2, 202, 50, 50);
    view.defPosition("b8", 52, 202, 50, 50);
    view.defPosition("c8", 102, 202, 50, 50);
    view.defPosition("d8", 152, 202, 50, 50);
    view.defPosition("e8", 202, 202, 50, 50);
    view.defPosition("f8", 252, 202, 50, 50);
    view.defPosition("g8", 302, 202, 50, 50);
    view.defPosition("h8", 352, 202, 50, 50);
    view.defPosition("i8", 402, 202, 50, 50);
    view.defPosition("j8", 452, 202, 50, 50);
    view.defPosition("k8", 502, 202, 50, 50);
    view.defPosition("l8", 552, 202, 50, 50);
    view.defPosition("a7", 2, 252, 50, 50);
    view.defPosition("b7", 52, 252, 50, 50);
    view.defPosition("c7", 102, 252, 50, 50);
    view.defPosition("d7", 152, 252, 50, 50);
    view.defPosition("e7", 202, 252, 50, 50);
    view.defPosition("f7", 252, 252, 50, 50);
    view.defPosition("g7", 302, 252, 50, 50);
    view.defPosition("h7", 352, 252, 50, 50);
    view.defPosition("i7", 402, 252, 50, 50);
    view.defPosition("j7", 452, 252, 50, 50);
    view.defPosition("k7", 502, 252, 50, 50);
    view.defPosition("l7", 552, 252, 50, 50);
    view.defPosition("a6", 2, 302, 50, 50);
    view.defPosition("b6", 52, 302, 50, 50);
    view.defPosition("c6", 102, 302, 50, 50);
    view.defPosition("d6", 152, 302, 50, 50);
    view.defPosition("e6", 202, 302, 50, 50);
    view.defPosition("f6", 252, 302, 50, 50);
    view.defPosition("g6", 302, 302, 50, 50);
    view.defPosition("h6", 352, 302, 50, 50);
    view.defPosition("i6", 402, 302, 50, 50);
    view.defPosition("j6", 452, 302, 50, 50);
    view.defPosition("k6", 502, 302, 50, 50);
    view.defPosition("l6", 552, 302, 50, 50);
    view.defPosition("a5", 2, 352, 50, 50);
    view.defPosition("b5", 52, 352, 50, 50);
    view.defPosition("c5", 102, 352, 50, 50);
    view.defPosition("d5", 152, 352, 50, 50);
    view.defPosition("e5", 202, 352, 50, 50);
    view.defPosition("f5", 252, 352, 50, 50);
    view.defPosition("g5", 302, 352, 50, 50);
    view.defPosition("h5", 352, 352, 50, 50);
    view.defPosition("i5", 402, 352, 50, 50);
    view.defPosition("j5", 452, 352, 50, 50);
    view.defPosition("k5", 502, 352, 50, 50);
    view.defPosition("l5", 552, 352, 50, 50);
    view.defPosition("a4", 2, 402, 50, 50);
    view.defPosition("b4", 52, 402, 50, 50);
    view.defPosition("c4", 102, 402, 50, 50);
    view.defPosition("d4", 152, 402, 50, 50);
    view.defPosition("e4", 202, 402, 50, 50);
    view.defPosition("f4", 252, 402, 50, 50);
    view.defPosition("g4", 302, 402, 50, 50);
    view.defPosition("h4", 352, 402, 50, 50);
    view.defPosition("i4", 402, 402, 50, 50);
    view.defPosition("j4", 452, 402, 50, 50);
    view.defPosition("k4", 502, 402, 50, 50);
    view.defPosition("l4", 552, 402, 50, 50);
    view.defPosition("a3", 2, 452, 50, 50);
    view.defPosition("b3", 52, 452, 50, 50);
    view.defPosition("c3", 102, 452, 50, 50);
    view.defPosition("d3", 152, 452, 50, 50);
    view.defPosition("e3", 202, 452, 50, 50);
    view.defPosition("f3", 252, 452, 50, 50);
    view.defPosition("g3", 302, 452, 50, 50);
    view.defPosition("h3", 352, 452, 50, 50);
    view.defPosition("i3", 402, 452, 50, 50);
    view.defPosition("j3", 452, 452, 50, 50);
    view.defPosition("k3", 502, 452, 50, 50);
    view.defPosition("l3", 552, 452, 50, 50);
    view.defPosition("a2", 2, 502, 50, 50);
    view.defPosition("b2", 52, 502, 50, 50);
    view.defPosition("c2", 102, 502, 50, 50);
    view.defPosition("d2", 152, 502, 50, 50);
    view.defPosition("e2", 202, 502, 50, 50);
    view.defPosition("f2", 252, 502, 50, 50);
    view.defPosition("g2", 302, 502, 50, 50);
    view.defPosition("h2", 352, 502, 50, 50);
    view.defPosition("i2", 402, 502, 50, 50);
    view.defPosition("j2", 452, 502, 50, 50);
    view.defPosition("k2", 502, 502, 50, 50);
    view.defPosition("l2", 552, 502, 50, 50);
    view.defPosition("a1", 2, 552, 50, 50);
    view.defPosition("b1", 52, 552, 50, 50);
    view.defPosition("c1", 102, 552, 50, 50);
    view.defPosition("d1", 152, 552, 50, 50);
    view.defPosition("e1", 202, 552, 50, 50);
    view.defPosition("f1", 252, 552, 50, 50);
    view.defPosition("g1", 302, 552, 50, 50);
    view.defPosition("h1", 352, 552, 50, 50);
    view.defPosition("i1", 402, 552, 50, 50);
    view.defPosition("j1", 452, 552, 50, 50);
    view.defPosition("k1", 502, 552, 50, 50);
    view.defPosition("l1", 552, 552, 50, 50);
}
