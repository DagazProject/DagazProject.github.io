Dagaz.Model.WIDTH  = 14;
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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("epaminondas-invariant", "true");
    design.checkVersion("epaminondas-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a12", [0, 1, 14, 0, 0, 15, 0, 0]);
    design.addPosition("b12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("c12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("d12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("e12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("f12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("g12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("h12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("i12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("j12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("k12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("l12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("m12", [-1, 1, 14, 0, 0, 15, 13, 0]);
    design.addPosition("n12", [-1, 0, 14, 0, 0, 0, 13, 0]);
    design.addPosition("a11", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m11", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n11", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a10", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m10", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n10", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a9", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m9", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n9", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a8", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m8", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n8", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a7", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m7", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n7", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a6", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m6", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n6", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a5", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m5", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n5", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a4", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m4", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n4", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a3", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m3", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n3", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a2", [0, 1, 14, -13, -14, 15, 0, 0]);
    design.addPosition("b2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("c2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("d2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("e2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("f2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("g2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("h2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("i2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("j2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("k2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("l2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("m2", [-1, 1, 14, -13, -14, 15, 13, -15]);
    design.addPosition("n2", [-1, 0, 14, 0, -14, 0, 13, -15]);
    design.addPosition("a1", [0, 1, 0, -13, -14, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("c1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("d1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("e1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("f1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("g1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("h1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("i1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("j1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("k1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("l1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("m1", [-1, 1, 0, -13, -14, 0, 0, -15]);
    design.addPosition("n1", [-1, 0, 0, 0, -14, 0, 0, -15]);

    design.addZone("first-rank", 1, [154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167]);
    design.addZone("first-rank", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

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
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-7);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	13);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-14);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	18);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-19);
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	5);	// $6
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
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	23);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-24);
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	6);	// $7
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	7);	// $8
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
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	28);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-29);
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	7);	// $8
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	8);	// $9
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	9);	// $10
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	33);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	5);	// $6
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	6);	// $7
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-34);
    design.addCommand(6, ZRF.PARAM,	7);	// $8
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	8);	// $9
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	9);	// $10
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	10);	// $11
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	11);	// $12
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	38);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	5);	// $6
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	6);	// $7
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	7);	// $8
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-39);
    design.addCommand(7, ZRF.PARAM,	8);	// $9
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	9);	// $10
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	10);	// $11
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	11);	// $12
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	12);	// $13
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	13);	// $14
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 2, [4, 4, 4, 4], 0);
    design.addMove(0, 2, [7, 7, 7, 7], 0);
    design.addMove(0, 2, [2, 2, 2, 2], 0);
    design.addMove(0, 2, [5, 5, 5, 5], 0);
    design.addMove(0, 2, [0, 0, 0, 0], 0);
    design.addMove(0, 2, [6, 6, 6, 6], 0);
    design.addMove(0, 2, [1, 1, 1, 1], 0);
    design.addMove(0, 2, [3, 3, 3, 3], 0);
    design.addMove(0, 3, [4, 4, 4, 4, 4, 4], 0);
    design.addMove(0, 3, [7, 7, 7, 7, 7, 7], 0);
    design.addMove(0, 3, [2, 2, 2, 2, 2, 2], 0);
    design.addMove(0, 3, [5, 5, 5, 5, 5, 5], 0);
    design.addMove(0, 3, [0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 3, [6, 6, 6, 6, 6, 6], 0);
    design.addMove(0, 3, [1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 3, [3, 3, 3, 3, 3, 3], 0);
    design.addMove(0, 4, [4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(0, 4, [7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(0, 4, [2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(0, 4, [5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(0, 4, [0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 4, [6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(0, 4, [1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 4, [3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(0, 5, [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(0, 5, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(0, 5, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(0, 5, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(0, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 5, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(0, 5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 5, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(0, 6, [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(0, 6, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(0, 6, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(0, 6, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(0, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 6, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(0, 6, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 6, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);
    design.addMove(0, 7, [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 0);
    design.addMove(0, 7, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 0);
    design.addMove(0, 7, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 0);
    design.addMove(0, 7, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 0);
    design.addMove(0, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 7, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 0);
    design.addMove(0, 7, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 7, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 0);

    design.setup("White", "Man", 154);
    design.setup("White", "Man", 155);
    design.setup("White", "Man", 156);
    design.setup("White", "Man", 157);
    design.setup("White", "Man", 158);
    design.setup("White", "Man", 159);
    design.setup("White", "Man", 160);
    design.setup("White", "Man", 161);
    design.setup("White", "Man", 162);
    design.setup("White", "Man", 163);
    design.setup("White", "Man", 164);
    design.setup("White", "Man", 165);
    design.setup("White", "Man", 166);
    design.setup("White", "Man", 167);
    design.setup("White", "Man", 140);
    design.setup("White", "Man", 141);
    design.setup("White", "Man", 142);
    design.setup("White", "Man", 143);
    design.setup("White", "Man", 144);
    design.setup("White", "Man", 145);
    design.setup("White", "Man", 146);
    design.setup("White", "Man", 147);
    design.setup("White", "Man", 148);
    design.setup("White", "Man", 149);
    design.setup("White", "Man", 150);
    design.setup("White", "Man", 151);
    design.setup("White", "Man", 152);
    design.setup("White", "Man", 153);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 22);
    design.setup("Black", "Man", 23);
    design.setup("Black", "Man", 24);
    design.setup("Black", "Man", 25);
    design.setup("Black", "Man", 26);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 0);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 2);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a12", 2, 2, 35, 35);
    view.defPosition("b12", 37, 2, 35, 35);
    view.defPosition("c12", 72, 2, 35, 35);
    view.defPosition("d12", 107, 2, 35, 35);
    view.defPosition("e12", 142, 2, 35, 35);
    view.defPosition("f12", 177, 2, 35, 35);
    view.defPosition("g12", 212, 2, 35, 35);
    view.defPosition("h12", 247, 2, 35, 35);
    view.defPosition("i12", 282, 2, 35, 35);
    view.defPosition("j12", 317, 2, 35, 35);
    view.defPosition("k12", 352, 2, 35, 35);
    view.defPosition("l12", 387, 2, 35, 35);
    view.defPosition("m12", 422, 2, 35, 35);
    view.defPosition("n12", 457, 2, 35, 35);
    view.defPosition("a11", 2, 37, 35, 35);
    view.defPosition("b11", 37, 37, 35, 35);
    view.defPosition("c11", 72, 37, 35, 35);
    view.defPosition("d11", 107, 37, 35, 35);
    view.defPosition("e11", 142, 37, 35, 35);
    view.defPosition("f11", 177, 37, 35, 35);
    view.defPosition("g11", 212, 37, 35, 35);
    view.defPosition("h11", 247, 37, 35, 35);
    view.defPosition("i11", 282, 37, 35, 35);
    view.defPosition("j11", 317, 37, 35, 35);
    view.defPosition("k11", 352, 37, 35, 35);
    view.defPosition("l11", 387, 37, 35, 35);
    view.defPosition("m11", 422, 37, 35, 35);
    view.defPosition("n11", 457, 37, 35, 35);
    view.defPosition("a10", 2, 72, 35, 35);
    view.defPosition("b10", 37, 72, 35, 35);
    view.defPosition("c10", 72, 72, 35, 35);
    view.defPosition("d10", 107, 72, 35, 35);
    view.defPosition("e10", 142, 72, 35, 35);
    view.defPosition("f10", 177, 72, 35, 35);
    view.defPosition("g10", 212, 72, 35, 35);
    view.defPosition("h10", 247, 72, 35, 35);
    view.defPosition("i10", 282, 72, 35, 35);
    view.defPosition("j10", 317, 72, 35, 35);
    view.defPosition("k10", 352, 72, 35, 35);
    view.defPosition("l10", 387, 72, 35, 35);
    view.defPosition("m10", 422, 72, 35, 35);
    view.defPosition("n10", 457, 72, 35, 35);
    view.defPosition("a9", 2, 107, 35, 35);
    view.defPosition("b9", 37, 107, 35, 35);
    view.defPosition("c9", 72, 107, 35, 35);
    view.defPosition("d9", 107, 107, 35, 35);
    view.defPosition("e9", 142, 107, 35, 35);
    view.defPosition("f9", 177, 107, 35, 35);
    view.defPosition("g9", 212, 107, 35, 35);
    view.defPosition("h9", 247, 107, 35, 35);
    view.defPosition("i9", 282, 107, 35, 35);
    view.defPosition("j9", 317, 107, 35, 35);
    view.defPosition("k9", 352, 107, 35, 35);
    view.defPosition("l9", 387, 107, 35, 35);
    view.defPosition("m9", 422, 107, 35, 35);
    view.defPosition("n9", 457, 107, 35, 35);
    view.defPosition("a8", 2, 142, 35, 35);
    view.defPosition("b8", 37, 142, 35, 35);
    view.defPosition("c8", 72, 142, 35, 35);
    view.defPosition("d8", 107, 142, 35, 35);
    view.defPosition("e8", 142, 142, 35, 35);
    view.defPosition("f8", 177, 142, 35, 35);
    view.defPosition("g8", 212, 142, 35, 35);
    view.defPosition("h8", 247, 142, 35, 35);
    view.defPosition("i8", 282, 142, 35, 35);
    view.defPosition("j8", 317, 142, 35, 35);
    view.defPosition("k8", 352, 142, 35, 35);
    view.defPosition("l8", 387, 142, 35, 35);
    view.defPosition("m8", 422, 142, 35, 35);
    view.defPosition("n8", 457, 142, 35, 35);
    view.defPosition("a7", 2, 177, 35, 35);
    view.defPosition("b7", 37, 177, 35, 35);
    view.defPosition("c7", 72, 177, 35, 35);
    view.defPosition("d7", 107, 177, 35, 35);
    view.defPosition("e7", 142, 177, 35, 35);
    view.defPosition("f7", 177, 177, 35, 35);
    view.defPosition("g7", 212, 177, 35, 35);
    view.defPosition("h7", 247, 177, 35, 35);
    view.defPosition("i7", 282, 177, 35, 35);
    view.defPosition("j7", 317, 177, 35, 35);
    view.defPosition("k7", 352, 177, 35, 35);
    view.defPosition("l7", 387, 177, 35, 35);
    view.defPosition("m7", 422, 177, 35, 35);
    view.defPosition("n7", 457, 177, 35, 35);
    view.defPosition("a6", 2, 212, 35, 35);
    view.defPosition("b6", 37, 212, 35, 35);
    view.defPosition("c6", 72, 212, 35, 35);
    view.defPosition("d6", 107, 212, 35, 35);
    view.defPosition("e6", 142, 212, 35, 35);
    view.defPosition("f6", 177, 212, 35, 35);
    view.defPosition("g6", 212, 212, 35, 35);
    view.defPosition("h6", 247, 212, 35, 35);
    view.defPosition("i6", 282, 212, 35, 35);
    view.defPosition("j6", 317, 212, 35, 35);
    view.defPosition("k6", 352, 212, 35, 35);
    view.defPosition("l6", 387, 212, 35, 35);
    view.defPosition("m6", 422, 212, 35, 35);
    view.defPosition("n6", 457, 212, 35, 35);
    view.defPosition("a5", 2, 247, 35, 35);
    view.defPosition("b5", 37, 247, 35, 35);
    view.defPosition("c5", 72, 247, 35, 35);
    view.defPosition("d5", 107, 247, 35, 35);
    view.defPosition("e5", 142, 247, 35, 35);
    view.defPosition("f5", 177, 247, 35, 35);
    view.defPosition("g5", 212, 247, 35, 35);
    view.defPosition("h5", 247, 247, 35, 35);
    view.defPosition("i5", 282, 247, 35, 35);
    view.defPosition("j5", 317, 247, 35, 35);
    view.defPosition("k5", 352, 247, 35, 35);
    view.defPosition("l5", 387, 247, 35, 35);
    view.defPosition("m5", 422, 247, 35, 35);
    view.defPosition("n5", 457, 247, 35, 35);
    view.defPosition("a4", 2, 282, 35, 35);
    view.defPosition("b4", 37, 282, 35, 35);
    view.defPosition("c4", 72, 282, 35, 35);
    view.defPosition("d4", 107, 282, 35, 35);
    view.defPosition("e4", 142, 282, 35, 35);
    view.defPosition("f4", 177, 282, 35, 35);
    view.defPosition("g4", 212, 282, 35, 35);
    view.defPosition("h4", 247, 282, 35, 35);
    view.defPosition("i4", 282, 282, 35, 35);
    view.defPosition("j4", 317, 282, 35, 35);
    view.defPosition("k4", 352, 282, 35, 35);
    view.defPosition("l4", 387, 282, 35, 35);
    view.defPosition("m4", 422, 282, 35, 35);
    view.defPosition("n4", 457, 282, 35, 35);
    view.defPosition("a3", 2, 317, 35, 35);
    view.defPosition("b3", 37, 317, 35, 35);
    view.defPosition("c3", 72, 317, 35, 35);
    view.defPosition("d3", 107, 317, 35, 35);
    view.defPosition("e3", 142, 317, 35, 35);
    view.defPosition("f3", 177, 317, 35, 35);
    view.defPosition("g3", 212, 317, 35, 35);
    view.defPosition("h3", 247, 317, 35, 35);
    view.defPosition("i3", 282, 317, 35, 35);
    view.defPosition("j3", 317, 317, 35, 35);
    view.defPosition("k3", 352, 317, 35, 35);
    view.defPosition("l3", 387, 317, 35, 35);
    view.defPosition("m3", 422, 317, 35, 35);
    view.defPosition("n3", 457, 317, 35, 35);
    view.defPosition("a2", 2, 352, 35, 35);
    view.defPosition("b2", 37, 352, 35, 35);
    view.defPosition("c2", 72, 352, 35, 35);
    view.defPosition("d2", 107, 352, 35, 35);
    view.defPosition("e2", 142, 352, 35, 35);
    view.defPosition("f2", 177, 352, 35, 35);
    view.defPosition("g2", 212, 352, 35, 35);
    view.defPosition("h2", 247, 352, 35, 35);
    view.defPosition("i2", 282, 352, 35, 35);
    view.defPosition("j2", 317, 352, 35, 35);
    view.defPosition("k2", 352, 352, 35, 35);
    view.defPosition("l2", 387, 352, 35, 35);
    view.defPosition("m2", 422, 352, 35, 35);
    view.defPosition("n2", 457, 352, 35, 35);
    view.defPosition("a1", 2, 387, 35, 35);
    view.defPosition("b1", 37, 387, 35, 35);
    view.defPosition("c1", 72, 387, 35, 35);
    view.defPosition("d1", 107, 387, 35, 35);
    view.defPosition("e1", 142, 387, 35, 35);
    view.defPosition("f1", 177, 387, 35, 35);
    view.defPosition("g1", 212, 387, 35, 35);
    view.defPosition("h1", 247, 387, 35, 35);
    view.defPosition("i1", 282, 387, 35, 35);
    view.defPosition("j1", 317, 387, 35, 35);
    view.defPosition("k1", 352, 387, 35, 35);
    view.defPosition("l1", 387, 387, 35, 35);
    view.defPosition("m1", 422, 387, 35, 35);
    view.defPosition("n1", 457, 387, 35, 35);
}
