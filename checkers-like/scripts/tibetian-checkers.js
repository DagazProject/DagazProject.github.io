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
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("a1", [14, 1, 0, 0]);
    design.addPosition("b1", [14, 1, -1, 0]);
    design.addPosition("c1", [14, 1, -1, 0]);
    design.addPosition("d1", [14, 1, -1, 0]);
    design.addPosition("e1", [14, 1, -1, 0]);
    design.addPosition("f1", [14, 1, -1, 0]);
    design.addPosition("g1", [14, 1, -1, 0]);
    design.addPosition("h1", [14, 1, -1, 0]);
    design.addPosition("i1", [14, 1, -1, 0]);
    design.addPosition("j1", [14, 1, -1, 0]);
    design.addPosition("k1", [14, 1, -1, 0]);
    design.addPosition("l1", [14, 1, -1, 0]);
    design.addPosition("m1", [14, 1, -1, 0]);
    design.addPosition("n1", [14, 0, -1, 0]);
    design.addPosition("a2", [14, 1, 0, -14]);
    design.addPosition("b2", [14, 1, -1, -14]);
    design.addPosition("c2", [14, 1, -1, -14]);
    design.addPosition("d2", [14, 1, -1, -14]);
    design.addPosition("e2", [14, 1, -1, -14]);
    design.addPosition("f2", [14, 1, -1, -14]);
    design.addPosition("g2", [14, 1, -1, -14]);
    design.addPosition("h2", [14, 1, -1, -14]);
    design.addPosition("i2", [14, 1, -1, -14]);
    design.addPosition("j2", [14, 1, -1, -14]);
    design.addPosition("k2", [14, 1, -1, -14]);
    design.addPosition("l2", [14, 1, -1, -14]);
    design.addPosition("m2", [14, 1, -1, -14]);
    design.addPosition("n2", [14, 0, -1, -14]);
    design.addPosition("a3", [14, 1, 0, -14]);
    design.addPosition("b3", [14, 1, -1, -14]);
    design.addPosition("c3", [14, 1, -1, -14]);
    design.addPosition("d3", [14, 1, -1, -14]);
    design.addPosition("e3", [14, 1, -1, -14]);
    design.addPosition("f3", [14, 1, -1, -14]);
    design.addPosition("g3", [14, 1, -1, -14]);
    design.addPosition("h3", [14, 1, -1, -14]);
    design.addPosition("i3", [14, 1, -1, -14]);
    design.addPosition("j3", [14, 1, -1, -14]);
    design.addPosition("k3", [14, 1, -1, -14]);
    design.addPosition("l3", [14, 1, -1, -14]);
    design.addPosition("m3", [14, 1, -1, -14]);
    design.addPosition("n3", [14, 0, -1, -14]);
    design.addPosition("a4", [14, 1, 0, -14]);
    design.addPosition("b4", [14, 1, -1, -14]);
    design.addPosition("c4", [14, 1, -1, -14]);
    design.addPosition("d4", [14, 1, -1, -14]);
    design.addPosition("e4", [14, 1, -1, -14]);
    design.addPosition("f4", [14, 1, -1, -14]);
    design.addPosition("g4", [14, 1, -1, -14]);
    design.addPosition("h4", [14, 1, -1, -14]);
    design.addPosition("i4", [14, 1, -1, -14]);
    design.addPosition("j4", [14, 1, -1, -14]);
    design.addPosition("k4", [14, 1, -1, -14]);
    design.addPosition("l4", [14, 1, -1, -14]);
    design.addPosition("m4", [14, 1, -1, -14]);
    design.addPosition("n4", [14, 0, -1, -14]);
    design.addPosition("a5", [14, 1, 0, -14]);
    design.addPosition("b5", [14, 1, -1, -14]);
    design.addPosition("c5", [14, 1, -1, -14]);
    design.addPosition("d5", [14, 1, -1, -14]);
    design.addPosition("e5", [14, 1, -1, -14]);
    design.addPosition("f5", [14, 1, -1, -14]);
    design.addPosition("g5", [14, 1, -1, -14]);
    design.addPosition("h5", [14, 1, -1, -14]);
    design.addPosition("i5", [14, 1, -1, -14]);
    design.addPosition("j5", [14, 1, -1, -14]);
    design.addPosition("k5", [14, 1, -1, -14]);
    design.addPosition("l5", [14, 1, -1, -14]);
    design.addPosition("m5", [14, 1, -1, -14]);
    design.addPosition("n5", [14, 0, -1, -14]);
    design.addPosition("a6", [14, 1, 0, -14]);
    design.addPosition("b6", [14, 1, -1, -14]);
    design.addPosition("c6", [14, 1, -1, -14]);
    design.addPosition("d6", [14, 1, -1, -14]);
    design.addPosition("e6", [14, 1, -1, -14]);
    design.addPosition("f6", [14, 1, -1, -14]);
    design.addPosition("g6", [14, 1, -1, -14]);
    design.addPosition("h6", [14, 1, -1, -14]);
    design.addPosition("i6", [14, 1, -1, -14]);
    design.addPosition("j6", [14, 1, -1, -14]);
    design.addPosition("k6", [14, 1, -1, -14]);
    design.addPosition("l6", [14, 1, -1, -14]);
    design.addPosition("m6", [14, 1, -1, -14]);
    design.addPosition("n6", [14, 0, -1, -14]);
    design.addPosition("a7", [14, 1, 0, -14]);
    design.addPosition("b7", [14, 1, -1, -14]);
    design.addPosition("c7", [14, 1, -1, -14]);
    design.addPosition("d7", [14, 1, -1, -14]);
    design.addPosition("e7", [14, 1, -1, -14]);
    design.addPosition("f7", [14, 1, -1, -14]);
    design.addPosition("g7", [14, 1, -1, -14]);
    design.addPosition("h7", [14, 1, -1, -14]);
    design.addPosition("i7", [14, 1, -1, -14]);
    design.addPosition("j7", [14, 1, -1, -14]);
    design.addPosition("k7", [14, 1, -1, -14]);
    design.addPosition("l7", [14, 1, -1, -14]);
    design.addPosition("m7", [14, 1, -1, -14]);
    design.addPosition("n7", [14, 0, -1, -14]);
    design.addPosition("a8", [14, 1, 0, -14]);
    design.addPosition("b8", [14, 1, -1, -14]);
    design.addPosition("c8", [14, 1, -1, -14]);
    design.addPosition("d8", [14, 1, -1, -14]);
    design.addPosition("e8", [14, 1, -1, -14]);
    design.addPosition("f8", [14, 1, -1, -14]);
    design.addPosition("g8", [14, 1, -1, -14]);
    design.addPosition("h8", [14, 1, -1, -14]);
    design.addPosition("i8", [14, 1, -1, -14]);
    design.addPosition("j8", [14, 1, -1, -14]);
    design.addPosition("k8", [14, 1, -1, -14]);
    design.addPosition("l8", [14, 1, -1, -14]);
    design.addPosition("m8", [14, 1, -1, -14]);
    design.addPosition("n8", [14, 0, -1, -14]);
    design.addPosition("a9", [14, 1, 0, -14]);
    design.addPosition("b9", [14, 1, -1, -14]);
    design.addPosition("c9", [14, 1, -1, -14]);
    design.addPosition("d9", [14, 1, -1, -14]);
    design.addPosition("e9", [14, 1, -1, -14]);
    design.addPosition("f9", [14, 1, -1, -14]);
    design.addPosition("g9", [14, 1, -1, -14]);
    design.addPosition("h9", [14, 1, -1, -14]);
    design.addPosition("i9", [14, 1, -1, -14]);
    design.addPosition("j9", [14, 1, -1, -14]);
    design.addPosition("k9", [14, 1, -1, -14]);
    design.addPosition("l9", [14, 1, -1, -14]);
    design.addPosition("m9", [14, 1, -1, -14]);
    design.addPosition("n9", [14, 0, -1, -14]);
    design.addPosition("a10", [14, 1, 0, -14]);
    design.addPosition("b10", [14, 1, -1, -14]);
    design.addPosition("c10", [14, 1, -1, -14]);
    design.addPosition("d10", [14, 1, -1, -14]);
    design.addPosition("e10", [14, 1, -1, -14]);
    design.addPosition("f10", [14, 1, -1, -14]);
    design.addPosition("g10", [14, 1, -1, -14]);
    design.addPosition("h10", [14, 1, -1, -14]);
    design.addPosition("i10", [14, 1, -1, -14]);
    design.addPosition("j10", [14, 1, -1, -14]);
    design.addPosition("k10", [14, 1, -1, -14]);
    design.addPosition("l10", [14, 1, -1, -14]);
    design.addPosition("m10", [14, 1, -1, -14]);
    design.addPosition("n10", [14, 0, -1, -14]);
    design.addPosition("a11", [14, 1, 0, -14]);
    design.addPosition("b11", [14, 1, -1, -14]);
    design.addPosition("c11", [14, 1, -1, -14]);
    design.addPosition("d11", [14, 1, -1, -14]);
    design.addPosition("e11", [14, 1, -1, -14]);
    design.addPosition("f11", [14, 1, -1, -14]);
    design.addPosition("g11", [14, 1, -1, -14]);
    design.addPosition("h11", [14, 1, -1, -14]);
    design.addPosition("i11", [14, 1, -1, -14]);
    design.addPosition("j11", [14, 1, -1, -14]);
    design.addPosition("k11", [14, 1, -1, -14]);
    design.addPosition("l11", [14, 1, -1, -14]);
    design.addPosition("m11", [14, 1, -1, -14]);
    design.addPosition("n11", [14, 0, -1, -14]);
    design.addPosition("a12", [14, 1, 0, -14]);
    design.addPosition("b12", [14, 1, -1, -14]);
    design.addPosition("c12", [14, 1, -1, -14]);
    design.addPosition("d12", [14, 1, -1, -14]);
    design.addPosition("e12", [14, 1, -1, -14]);
    design.addPosition("f12", [14, 1, -1, -14]);
    design.addPosition("g12", [14, 1, -1, -14]);
    design.addPosition("h12", [14, 1, -1, -14]);
    design.addPosition("i12", [14, 1, -1, -14]);
    design.addPosition("j12", [14, 1, -1, -14]);
    design.addPosition("k12", [14, 1, -1, -14]);
    design.addPosition("l12", [14, 1, -1, -14]);
    design.addPosition("m12", [14, 1, -1, -14]);
    design.addPosition("n12", [14, 0, -1, -14]);
    design.addPosition("a13", [14, 1, 0, -14]);
    design.addPosition("b13", [14, 1, -1, -14]);
    design.addPosition("c13", [14, 1, -1, -14]);
    design.addPosition("d13", [14, 1, -1, -14]);
    design.addPosition("e13", [14, 1, -1, -14]);
    design.addPosition("f13", [14, 1, -1, -14]);
    design.addPosition("g13", [14, 1, -1, -14]);
    design.addPosition("h13", [14, 1, -1, -14]);
    design.addPosition("i13", [14, 1, -1, -14]);
    design.addPosition("j13", [14, 1, -1, -14]);
    design.addPosition("k13", [14, 1, -1, -14]);
    design.addPosition("l13", [14, 1, -1, -14]);
    design.addPosition("m13", [14, 1, -1, -14]);
    design.addPosition("n13", [14, 0, -1, -14]);
    design.addPosition("a14", [0, 1, 0, -14]);
    design.addPosition("b14", [0, 1, -1, -14]);
    design.addPosition("c14", [0, 1, -1, -14]);
    design.addPosition("d14", [0, 1, -1, -14]);
    design.addPosition("e14", [0, 1, -1, -14]);
    design.addPosition("f14", [0, 1, -1, -14]);
    design.addPosition("g14", [0, 1, -1, -14]);
    design.addPosition("h14", [0, 1, -1, -14]);
    design.addPosition("i14", [0, 1, -1, -14]);
    design.addPosition("j14", [0, 1, -1, -14]);
    design.addPosition("k14", [0, 1, -1, -14]);
    design.addPosition("l14", [0, 1, -1, -14]);
    design.addPosition("m14", [0, 1, -1, -14]);
    design.addPosition("n14", [0, 0, -1, -14]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	2);	// step-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [1], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 2, [3, 3], 2);
    design.addMove(0, 2, [1, 1], 2);
    design.addMove(0, 2, [2, 2], 2);
    design.addMove(0, 2, [0, 0], 2);
    design.addMove(0, 3, [], 3);

    design.addPiece("Init", 1);

    design.setup("White", "Init", 90);
    design.setup("Black", "Init", 105);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Init");
    view.defPiece("WhiteStone", "White Init");
 
    view.defPosition("a1", 5, 5, 30, 30);
    view.defPosition("b1", 36, 5, 30, 30);
    view.defPosition("c1", 67, 5, 30, 30);
    view.defPosition("d1", 98, 5, 30, 30);
    view.defPosition("e1", 129, 5, 30, 30);
    view.defPosition("f1", 160, 5, 30, 30);
    view.defPosition("g1", 191, 5, 30, 30);
    view.defPosition("h1", 222, 5, 30, 30);
    view.defPosition("i1", 253, 5, 30, 30);
    view.defPosition("j1", 284, 5, 30, 30);
    view.defPosition("k1", 315, 5, 30, 30);
    view.defPosition("l1", 346, 5, 30, 30);
    view.defPosition("m1", 377, 5, 30, 30);
    view.defPosition("n1", 408, 5, 30, 30);
    view.defPosition("a2", 5, 36, 30, 30);
    view.defPosition("b2", 36, 36, 30, 30);
    view.defPosition("c2", 67, 36, 30, 30);
    view.defPosition("d2", 98, 36, 30, 30);
    view.defPosition("e2", 129, 36, 30, 30);
    view.defPosition("f2", 160, 36, 30, 30);
    view.defPosition("g2", 191, 36, 30, 30);
    view.defPosition("h2", 222, 36, 30, 30);
    view.defPosition("i2", 253, 36, 30, 30);
    view.defPosition("j2", 284, 36, 30, 30);
    view.defPosition("k2", 315, 36, 30, 30);
    view.defPosition("l2", 346, 36, 30, 30);
    view.defPosition("m2", 377, 36, 30, 30);
    view.defPosition("n2", 408, 36, 30, 30);
    view.defPosition("a3", 5, 67, 30, 30);
    view.defPosition("b3", 36, 67, 30, 30);
    view.defPosition("c3", 67, 67, 30, 30);
    view.defPosition("d3", 98, 67, 30, 30);
    view.defPosition("e3", 129, 67, 30, 30);
    view.defPosition("f3", 160, 67, 30, 30);
    view.defPosition("g3", 191, 67, 30, 30);
    view.defPosition("h3", 222, 67, 30, 30);
    view.defPosition("i3", 253, 67, 30, 30);
    view.defPosition("j3", 284, 67, 30, 30);
    view.defPosition("k3", 315, 67, 30, 30);
    view.defPosition("l3", 346, 67, 30, 30);
    view.defPosition("m3", 377, 67, 30, 30);
    view.defPosition("n3", 408, 67, 30, 30);
    view.defPosition("a4", 5, 98, 30, 30);
    view.defPosition("b4", 36, 98, 30, 30);
    view.defPosition("c4", 67, 98, 30, 30);
    view.defPosition("d4", 98, 98, 30, 30);
    view.defPosition("e4", 129, 98, 30, 30);
    view.defPosition("f4", 160, 98, 30, 30);
    view.defPosition("g4", 191, 98, 30, 30);
    view.defPosition("h4", 222, 98, 30, 30);
    view.defPosition("i4", 253, 98, 30, 30);
    view.defPosition("j4", 284, 98, 30, 30);
    view.defPosition("k4", 315, 98, 30, 30);
    view.defPosition("l4", 346, 98, 30, 30);
    view.defPosition("m4", 377, 98, 30, 30);
    view.defPosition("n4", 408, 98, 30, 30);
    view.defPosition("a5", 5, 129, 30, 30);
    view.defPosition("b5", 36, 129, 30, 30);
    view.defPosition("c5", 67, 129, 30, 30);
    view.defPosition("d5", 98, 129, 30, 30);
    view.defPosition("e5", 129, 129, 30, 30);
    view.defPosition("f5", 160, 129, 30, 30);
    view.defPosition("g5", 191, 129, 30, 30);
    view.defPosition("h5", 222, 129, 30, 30);
    view.defPosition("i5", 253, 129, 30, 30);
    view.defPosition("j5", 284, 129, 30, 30);
    view.defPosition("k5", 315, 129, 30, 30);
    view.defPosition("l5", 346, 129, 30, 30);
    view.defPosition("m5", 377, 129, 30, 30);
    view.defPosition("n5", 408, 129, 30, 30);
    view.defPosition("a6", 5, 160, 30, 30);
    view.defPosition("b6", 36, 160, 30, 30);
    view.defPosition("c6", 67, 160, 30, 30);
    view.defPosition("d6", 98, 160, 30, 30);
    view.defPosition("e6", 129, 160, 30, 30);
    view.defPosition("f6", 160, 160, 30, 30);
    view.defPosition("g6", 191, 160, 30, 30);
    view.defPosition("h6", 222, 160, 30, 30);
    view.defPosition("i6", 253, 160, 30, 30);
    view.defPosition("j6", 284, 160, 30, 30);
    view.defPosition("k6", 315, 160, 30, 30);
    view.defPosition("l6", 346, 160, 30, 30);
    view.defPosition("m6", 377, 160, 30, 30);
    view.defPosition("n6", 408, 160, 30, 30);
    view.defPosition("a7", 5, 191, 30, 30);
    view.defPosition("b7", 36, 191, 30, 30);
    view.defPosition("c7", 67, 191, 30, 30);
    view.defPosition("d7", 98, 191, 30, 30);
    view.defPosition("e7", 129, 191, 30, 30);
    view.defPosition("f7", 160, 191, 30, 30);
    view.defPosition("g7", 191, 191, 30, 30);
    view.defPosition("h7", 222, 191, 30, 30);
    view.defPosition("i7", 253, 191, 30, 30);
    view.defPosition("j7", 284, 191, 30, 30);
    view.defPosition("k7", 315, 191, 30, 30);
    view.defPosition("l7", 346, 191, 30, 30);
    view.defPosition("m7", 377, 191, 30, 30);
    view.defPosition("n7", 408, 191, 30, 30);
    view.defPosition("a8", 5, 222, 30, 30);
    view.defPosition("b8", 36, 222, 30, 30);
    view.defPosition("c8", 67, 222, 30, 30);
    view.defPosition("d8", 98, 222, 30, 30);
    view.defPosition("e8", 129, 222, 30, 30);
    view.defPosition("f8", 160, 222, 30, 30);
    view.defPosition("g8", 191, 222, 30, 30);
    view.defPosition("h8", 222, 222, 30, 30);
    view.defPosition("i8", 253, 222, 30, 30);
    view.defPosition("j8", 284, 222, 30, 30);
    view.defPosition("k8", 315, 222, 30, 30);
    view.defPosition("l8", 346, 222, 30, 30);
    view.defPosition("m8", 377, 222, 30, 30);
    view.defPosition("n8", 408, 222, 30, 30);
    view.defPosition("a9", 5, 253, 30, 30);
    view.defPosition("b9", 36, 253, 30, 30);
    view.defPosition("c9", 67, 253, 30, 30);
    view.defPosition("d9", 98, 253, 30, 30);
    view.defPosition("e9", 129, 253, 30, 30);
    view.defPosition("f9", 160, 253, 30, 30);
    view.defPosition("g9", 191, 253, 30, 30);
    view.defPosition("h9", 222, 253, 30, 30);
    view.defPosition("i9", 253, 253, 30, 30);
    view.defPosition("j9", 284, 253, 30, 30);
    view.defPosition("k9", 315, 253, 30, 30);
    view.defPosition("l9", 346, 253, 30, 30);
    view.defPosition("m9", 377, 253, 30, 30);
    view.defPosition("n9", 408, 253, 30, 30);
    view.defPosition("a10", 5, 284, 30, 30);
    view.defPosition("b10", 36, 284, 30, 30);
    view.defPosition("c10", 67, 284, 30, 30);
    view.defPosition("d10", 98, 284, 30, 30);
    view.defPosition("e10", 129, 284, 30, 30);
    view.defPosition("f10", 160, 284, 30, 30);
    view.defPosition("g10", 191, 284, 30, 30);
    view.defPosition("h10", 222, 284, 30, 30);
    view.defPosition("i10", 253, 284, 30, 30);
    view.defPosition("j10", 284, 284, 30, 30);
    view.defPosition("k10", 315, 284, 30, 30);
    view.defPosition("l10", 346, 284, 30, 30);
    view.defPosition("m10", 377, 284, 30, 30);
    view.defPosition("n10", 408, 284, 30, 30);
    view.defPosition("a11", 5, 315, 30, 30);
    view.defPosition("b11", 36, 315, 30, 30);
    view.defPosition("c11", 67, 315, 30, 30);
    view.defPosition("d11", 98, 315, 30, 30);
    view.defPosition("e11", 129, 315, 30, 30);
    view.defPosition("f11", 160, 315, 30, 30);
    view.defPosition("g11", 191, 315, 30, 30);
    view.defPosition("h11", 222, 315, 30, 30);
    view.defPosition("i11", 253, 315, 30, 30);
    view.defPosition("j11", 284, 315, 30, 30);
    view.defPosition("k11", 315, 315, 30, 30);
    view.defPosition("l11", 346, 315, 30, 30);
    view.defPosition("m11", 377, 315, 30, 30);
    view.defPosition("n11", 408, 315, 30, 30);
    view.defPosition("a12", 5, 346, 30, 30);
    view.defPosition("b12", 36, 346, 30, 30);
    view.defPosition("c12", 67, 346, 30, 30);
    view.defPosition("d12", 98, 346, 30, 30);
    view.defPosition("e12", 129, 346, 30, 30);
    view.defPosition("f12", 160, 346, 30, 30);
    view.defPosition("g12", 191, 346, 30, 30);
    view.defPosition("h12", 222, 346, 30, 30);
    view.defPosition("i12", 253, 346, 30, 30);
    view.defPosition("j12", 284, 346, 30, 30);
    view.defPosition("k12", 315, 346, 30, 30);
    view.defPosition("l12", 346, 346, 30, 30);
    view.defPosition("m12", 377, 346, 30, 30);
    view.defPosition("n12", 408, 346, 30, 30);
    view.defPosition("a13", 5, 377, 30, 30);
    view.defPosition("b13", 36, 377, 30, 30);
    view.defPosition("c13", 67, 377, 30, 30);
    view.defPosition("d13", 98, 377, 30, 30);
    view.defPosition("e13", 129, 377, 30, 30);
    view.defPosition("f13", 160, 377, 30, 30);
    view.defPosition("g13", 191, 377, 30, 30);
    view.defPosition("h13", 222, 377, 30, 30);
    view.defPosition("i13", 253, 377, 30, 30);
    view.defPosition("j13", 284, 377, 30, 30);
    view.defPosition("k13", 315, 377, 30, 30);
    view.defPosition("l13", 346, 377, 30, 30);
    view.defPosition("m13", 377, 377, 30, 30);
    view.defPosition("n13", 408, 377, 30, 30);
    view.defPosition("a14", 5, 408, 30, 30);
    view.defPosition("b14", 36, 408, 30, 30);
    view.defPosition("c14", 67, 408, 30, 30);
    view.defPosition("d14", 98, 408, 30, 30);
    view.defPosition("e14", 129, 408, 30, 30);
    view.defPosition("f14", 160, 408, 30, 30);
    view.defPosition("g14", 191, 408, 30, 30);
    view.defPosition("h14", 222, 408, 30, 30);
    view.defPosition("i14", 253, 408, 30, 30);
    view.defPosition("j14", 284, 408, 30, 30);
    view.defPosition("k14", 315, 408, 30, 30);
    view.defPosition("l14", 346, 408, 30, 30);
    view.defPosition("m14", 377, 408, 30, 30);
    view.defPosition("n14", 408, 408, 30, 30);
}
