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
    design.checkVersion("pass-partial", "true");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("tenjiku-shogi-extension", "true");
    design.checkVersion("tenjiku-shogi-promotion", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a13", [14, 13, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("c13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("d13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("e13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("f13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("g13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("h13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("i13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("j13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("k13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("l13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("m13", [0, 13, 12, 0, -1, 0, 0, 0]);
    design.addPosition("a12", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m12", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a11", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m11", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a10", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m10", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a9", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m9", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a8", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m8", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a7", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m7", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a6", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m6", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a5", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m5", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a4", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m4", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a3", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m3", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a2", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m2", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("l1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("m1", [0, 0, 0, 0, -1, 0, -14, -13]);

    design.addZone("promotion-zone", 2, [156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129]);
    design.addZone("promotion-zone", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
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

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.MODE,	1);	// left-1-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.MODE,	2);	// left-nw-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.MODE,	3);	// left-ne-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	14);
    design.addCommand(7, ZRF.LITERAL,	32);	// King
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.LITERAL,	33);	// Prince
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.JUMP,	56);
    design.addCommand(7, ZRF.LITERAL,	32);	// King
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.IF,	53);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	9);
    design.addCommand(7, ZRF.LITERAL,	32);	// King
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.LITERAL,	33);	// Prince
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.LITERAL,	32);	// King
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	33);	// Prince
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	49);	// Great-General
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	48);	// Vice-General
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	46);	// Rook-General
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	0);	// Rook-General!
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	44);	// Bishop-General
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	1);	// Bishop-General!
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-54);
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// true
    design.addCommand(8, ZRF.SET_FLAG,	2);	// no-piece
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.PARAM,	2);	// false
    design.addCommand(8, ZRF.SET_FLAG,	2);	// no-piece
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	14);
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	2);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	49);	// Great-General
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.PARAM,	4);	// false
    design.addCommand(8, ZRF.SET_FLAG,	2);	// no-piece
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	14);
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	2);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	49);	// Great-General
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.PARAM,	6);	// false
    design.addCommand(8, ZRF.SET_FLAG,	2);	// no-piece
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	14);
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	2);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	49);	// Great-General
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FLAG,	2);	// no-piece
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	12);
    design.addCommand(8, ZRF.PARAM,	7);	// $8
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	7);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	8);	// $9
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-8);
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	14);
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.JUMP,	40);
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	37);
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	9);
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.LITERAL,	32);	// King
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	33);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	49);	// Great-General
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	48);	// Vice-General
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	9);	// $10
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-38);
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.MODE,	4);	// left-2-type
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.JUMP,	2);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	4);
    design.addCommand(10, ZRF.MODE,	1);	// left-1-type
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.JUMP,	2);
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	2);	// $3
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	2);	// $3
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.IF,	4);
    design.addCommand(13, ZRF.MODE,	1);	// left-1-type
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.JUMP,	2);
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	7);
    design.addCommand(14, ZRF.FORK,	3);
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.JUMP,	-8);
    design.addCommand(14, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	14);
    design.addCommand(14, ZRF.LITERAL,	32);	// King
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	6);
    design.addCommand(14, ZRF.LITERAL,	33);	// Prince
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.LITERAL,	0);	// false
    design.addCommand(14, ZRF.JUMP,	2);
    design.addCommand(14, ZRF.LITERAL,	1);	// true
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.LITERAL,	1);	// true
    design.addCommand(14, ZRF.JUMP,	2);
    design.addCommand(14, ZRF.LITERAL,	0);	// false
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.JUMP,	36);
    design.addCommand(14, ZRF.LITERAL,	32);	// King
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	33);
    design.addCommand(14, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	9);
    design.addCommand(14, ZRF.LITERAL,	32);	// King
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	6);
    design.addCommand(14, ZRF.LITERAL,	33);	// Prince
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.LITERAL,	1);	// true
    design.addCommand(14, ZRF.JUMP,	2);
    design.addCommand(14, ZRF.LITERAL,	0);	// false
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	4);
    design.addCommand(14, ZRF.FORK,	3);
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end
    design.addCommand(14, ZRF.LITERAL,	32);	// King
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	33);	// Prince
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	49);	// Great-General
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	2);	// $3
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.JUMP,	-34);
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	2);	// $3
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.IF,	7);
    design.addCommand(15, ZRF.FORK,	3);
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end
    design.addCommand(15, ZRF.PARAM,	3);	// $4
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.JUMP,	-8);
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.PARAM,	1);	// $2
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	7);
    design.addCommand(16, ZRF.FORK,	3);
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end
    design.addCommand(16, ZRF.PARAM,	2);	// $3
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.JUMP,	-8);
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.PARAM,	1);	// $2
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FORK,	3);
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	2);	// $3
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.LITERAL,	59);	// Heavenly-Tetrarch
    design.addCommand(18, ZRF.FUNCTION,	11);	// create
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	26);	// capture
    design.addCommand(18, ZRF.PROMOTE,	61);	// None
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Knight", 0, 1);
    design.addMove(0, 0, [7, 6], 0);
    design.addMove(0, 0, [7, 5], 0);

    design.addPiece("Iron-General", 1, 2);
    design.addMove(1, 1, [7], 0);
    design.addMove(1, 1, [6], 0);
    design.addMove(1, 1, [5], 0);

    design.addPiece("Pawn", 2, 1);
    design.addMove(2, 1, [7], 0);

    design.addPiece("Bishop", 3, 10);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [2, 2], 0);
    design.addMove(3, 2, [5, 5], 0);
    design.addMove(3, 2, [0, 0], 0);

    design.addPiece("Bishop!", 4, 10);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [5, 5], 0);
    design.addMove(4, 2, [0, 0], 0);

    design.addPiece("Rook", 5, 12);
    design.addMove(5, 2, [7, 7], 0);
    design.addMove(5, 2, [1, 1], 0);
    design.addMove(5, 2, [4, 4], 0);
    design.addMove(5, 2, [3, 3], 0);

    design.addPiece("Rook!", 6, 12);
    design.addMove(6, 2, [7, 7], 0);
    design.addMove(6, 2, [1, 1], 0);
    design.addMove(6, 2, [4, 4], 0);
    design.addMove(6, 2, [3, 3], 0);

    design.addPiece("Queen", 7, 22);
    design.addMove(7, 2, [7, 7], 0);
    design.addMove(7, 2, [1, 1], 0);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 2, [3, 3], 0);
    design.addMove(7, 2, [6, 6], 0);
    design.addMove(7, 2, [2, 2], 0);
    design.addMove(7, 2, [5, 5], 0);
    design.addMove(7, 2, [0, 0], 0);

    design.addPiece("Queen!", 8, 22);
    design.addMove(8, 2, [7, 7], 0);
    design.addMove(8, 2, [1, 1], 0);
    design.addMove(8, 2, [4, 4], 0);
    design.addMove(8, 2, [3, 3], 0);
    design.addMove(8, 2, [6, 6], 0);
    design.addMove(8, 2, [2, 2], 0);
    design.addMove(8, 2, [5, 5], 0);
    design.addMove(8, 2, [0, 0], 0);

    design.addPiece("Flying-Ox", 9, 16);
    design.addMove(9, 2, [7, 7], 0);
    design.addMove(9, 2, [1, 1], 0);
    design.addMove(9, 2, [6, 6], 0);
    design.addMove(9, 2, [2, 2], 0);
    design.addMove(9, 2, [5, 5], 0);
    design.addMove(9, 2, [0, 0], 0);

    design.addPiece("Free-Boar", 10, 16);
    design.addMove(10, 2, [4, 4], 0);
    design.addMove(10, 2, [3, 3], 0);
    design.addMove(10, 2, [6, 6], 0);
    design.addMove(10, 2, [2, 2], 0);
    design.addMove(10, 2, [5, 5], 0);
    design.addMove(10, 2, [0, 0], 0);

    design.addPiece("Horned-Falcon", 11, 19);
    design.addMove(11, 2, [1, 1], 0);
    design.addMove(11, 2, [4, 4], 0);
    design.addMove(11, 2, [3, 3], 0);
    design.addMove(11, 2, [6, 6], 0);
    design.addMove(11, 2, [2, 2], 0);
    design.addMove(11, 2, [5, 5], 0);
    design.addMove(11, 2, [0, 0], 0);
    design.addMove(11, 3, [7], 0);
    design.addMove(11, 0, [7, 7], 0);
    design.addMove(11, 1, [7], 1);
    design.addMove(11, 1, [1], 1);

    design.addPiece("Horned-Falcon!", 12, 19);
    design.addMove(12, 2, [1, 1], 0);
    design.addMove(12, 2, [4, 4], 0);
    design.addMove(12, 2, [3, 3], 0);
    design.addMove(12, 2, [6, 6], 0);
    design.addMove(12, 2, [2, 2], 0);
    design.addMove(12, 2, [5, 5], 0);
    design.addMove(12, 2, [0, 0], 0);
    design.addMove(12, 3, [7], 0);
    design.addMove(12, 0, [7, 7], 0);
    design.addMove(12, 1, [7], 1);
    design.addMove(12, 1, [1], 1);

    design.addPiece("Soaring-Eagle", 13, 18);
    design.addMove(13, 2, [7, 7], 0);
    design.addMove(13, 2, [1, 1], 0);
    design.addMove(13, 2, [4, 4], 0);
    design.addMove(13, 2, [3, 3], 0);
    design.addMove(13, 2, [2, 2], 0);
    design.addMove(13, 2, [0, 0], 0);
    design.addMove(13, 4, [6], 0);
    design.addMove(13, 0, [6, 6], 0);
    design.addMove(13, 5, [5], 0);
    design.addMove(13, 0, [5, 5], 0);
    design.addMove(13, 1, [6], 2);
    design.addMove(13, 1, [0], 2);
    design.addMove(13, 1, [5], 3);
    design.addMove(13, 1, [2], 3);

    design.addPiece("Soaring-Eagle!", 14, 18);
    design.addMove(14, 2, [7, 7], 0);
    design.addMove(14, 2, [1, 1], 0);
    design.addMove(14, 2, [4, 4], 0);
    design.addMove(14, 2, [3, 3], 0);
    design.addMove(14, 2, [2, 2], 0);
    design.addMove(14, 2, [0, 0], 0);
    design.addMove(14, 4, [6], 0);
    design.addMove(14, 0, [6, 6], 0);
    design.addMove(14, 5, [5], 0);
    design.addMove(14, 0, [5, 5], 0);
    design.addMove(14, 1, [6], 2);
    design.addMove(14, 1, [0], 2);
    design.addMove(14, 1, [5], 3);
    design.addMove(14, 1, [2], 3);

    design.addPiece("Whale", 15, 10);
    design.addMove(15, 2, [7, 7], 0);
    design.addMove(15, 2, [1, 1], 0);
    design.addMove(15, 2, [2, 2], 0);
    design.addMove(15, 2, [0, 0], 0);

    design.addPiece("White-Horse", 16, 14);
    design.addMove(16, 2, [7, 7], 0);
    design.addMove(16, 2, [1, 1], 0);
    design.addMove(16, 2, [6, 6], 0);
    design.addMove(16, 2, [5, 5], 0);

    design.addPiece("Lion", 17, 18);
    design.addMove(17, 3, [7], 0);
    design.addMove(17, 3, [1], 0);
    design.addMove(17, 3, [4], 0);
    design.addMove(17, 3, [3], 0);
    design.addMove(17, 3, [6], 0);
    design.addMove(17, 3, [0], 0);
    design.addMove(17, 3, [2], 0);
    design.addMove(17, 3, [5], 0);
    design.addMove(17, 0, [7, 7], 0);
    design.addMove(17, 0, [6, 6], 0);
    design.addMove(17, 0, [1, 1], 0);
    design.addMove(17, 0, [2, 2], 0);
    design.addMove(17, 0, [3, 3], 0);
    design.addMove(17, 0, [0, 0], 0);
    design.addMove(17, 0, [4, 4], 0);
    design.addMove(17, 0, [5, 5], 0);
    design.addMove(17, 0, [7, 5], 0);
    design.addMove(17, 0, [7, 6], 0);
    design.addMove(17, 0, [1, 0], 0);
    design.addMove(17, 0, [1, 2], 0);
    design.addMove(17, 0, [3, 5], 0);
    design.addMove(17, 0, [3, 0], 0);
    design.addMove(17, 0, [4, 6], 0);
    design.addMove(17, 0, [4, 2], 0);
    design.addMove(17, 1, [7], 1);
    design.addMove(17, 1, [1], 1);
    design.addMove(17, 1, [4], 1);
    design.addMove(17, 1, [3], 1);
    design.addMove(17, 1, [6], 1);
    design.addMove(17, 1, [0], 1);
    design.addMove(17, 1, [2], 1);
    design.addMove(17, 1, [5], 1);

    design.addPiece("Lion!", 18, 18);
    design.addMove(18, 3, [7], 0);
    design.addMove(18, 3, [1], 0);
    design.addMove(18, 3, [4], 0);
    design.addMove(18, 3, [3], 0);
    design.addMove(18, 3, [6], 0);
    design.addMove(18, 3, [0], 0);
    design.addMove(18, 3, [2], 0);
    design.addMove(18, 3, [5], 0);
    design.addMove(18, 0, [7, 7], 0);
    design.addMove(18, 0, [6, 6], 0);
    design.addMove(18, 0, [1, 1], 0);
    design.addMove(18, 0, [2, 2], 0);
    design.addMove(18, 0, [3, 3], 0);
    design.addMove(18, 0, [0, 0], 0);
    design.addMove(18, 0, [4, 4], 0);
    design.addMove(18, 0, [5, 5], 0);
    design.addMove(18, 0, [7, 5], 0);
    design.addMove(18, 0, [7, 6], 0);
    design.addMove(18, 0, [1, 0], 0);
    design.addMove(18, 0, [1, 2], 0);
    design.addMove(18, 0, [3, 5], 0);
    design.addMove(18, 0, [3, 0], 0);
    design.addMove(18, 0, [4, 6], 0);
    design.addMove(18, 0, [4, 2], 0);
    design.addMove(18, 1, [7], 1);
    design.addMove(18, 1, [1], 1);
    design.addMove(18, 1, [4], 1);
    design.addMove(18, 1, [3], 1);
    design.addMove(18, 1, [6], 1);
    design.addMove(18, 1, [0], 1);
    design.addMove(18, 1, [2], 1);
    design.addMove(18, 1, [5], 1);

    design.addPiece("Dragon-King", 19, 14);
    design.addMove(19, 2, [7, 7], 0);
    design.addMove(19, 2, [1, 1], 0);
    design.addMove(19, 2, [4, 4], 0);
    design.addMove(19, 2, [3, 3], 0);
    design.addMove(19, 1, [6], 0);
    design.addMove(19, 1, [2], 0);
    design.addMove(19, 1, [5], 0);
    design.addMove(19, 1, [0], 0);

    design.addPiece("Dragon-King!", 20, 17);
    design.addMove(20, 2, [7, 7], 0);
    design.addMove(20, 2, [1, 1], 0);
    design.addMove(20, 2, [4, 4], 0);
    design.addMove(20, 2, [3, 3], 0);
    design.addMove(20, 1, [6], 0);
    design.addMove(20, 1, [2], 0);
    design.addMove(20, 1, [5], 0);
    design.addMove(20, 1, [0], 0);

    design.addPiece("Dragon-Horse", 21, 12);
    design.addMove(21, 2, [6, 6], 0);
    design.addMove(21, 2, [2, 2], 0);
    design.addMove(21, 2, [5, 5], 0);
    design.addMove(21, 2, [0, 0], 0);
    design.addMove(21, 1, [7], 0);
    design.addMove(21, 1, [1], 0);
    design.addMove(21, 1, [4], 0);
    design.addMove(21, 1, [3], 0);

    design.addPiece("Dragon-Horse!", 22, 12);
    design.addMove(22, 2, [6, 6], 0);
    design.addMove(22, 2, [2, 2], 0);
    design.addMove(22, 2, [5, 5], 0);
    design.addMove(22, 2, [0, 0], 0);
    design.addMove(22, 1, [7], 0);
    design.addMove(22, 1, [1], 0);
    design.addMove(22, 1, [4], 0);
    design.addMove(22, 1, [3], 0);

    design.addPiece("Kylin", 23, 3);
    design.addMove(23, 0, [7, 7], 0);
    design.addMove(23, 0, [1, 1], 0);
    design.addMove(23, 0, [4, 4], 0);
    design.addMove(23, 0, [3, 3], 0);
    design.addMove(23, 1, [6], 0);
    design.addMove(23, 1, [2], 0);
    design.addMove(23, 1, [5], 0);
    design.addMove(23, 1, [0], 0);

    design.addPiece("Phoenix", 24, 3);
    design.addMove(24, 1, [7], 0);
    design.addMove(24, 1, [1], 0);
    design.addMove(24, 1, [4], 0);
    design.addMove(24, 1, [3], 0);
    design.addMove(24, 0, [6, 6], 0);
    design.addMove(24, 0, [2, 2], 0);
    design.addMove(24, 0, [5, 5], 0);
    design.addMove(24, 0, [0, 0], 0);

    design.addPiece("Reverse-Chariot", 25, 6);
    design.addMove(25, 2, [7, 7], 0);
    design.addMove(25, 2, [1, 1], 0);

    design.addPiece("Side-Mover", 26, 7);
    design.addMove(26, 1, [7], 0);
    design.addMove(26, 1, [1], 0);
    design.addMove(26, 2, [4, 4], 0);
    design.addMove(26, 2, [3, 3], 0);

    design.addPiece("Side-Mover!", 27, 7);
    design.addMove(27, 1, [7], 0);
    design.addMove(27, 1, [1], 0);
    design.addMove(27, 2, [4, 4], 0);
    design.addMove(27, 2, [3, 3], 0);

    design.addPiece("Vertical-Mover", 28, 7);
    design.addMove(28, 1, [4], 0);
    design.addMove(28, 1, [3], 0);
    design.addMove(28, 2, [7, 7], 0);
    design.addMove(28, 2, [1, 1], 0);

    design.addPiece("Vertical-Mover!", 29, 7);
    design.addMove(29, 1, [4], 0);
    design.addMove(29, 1, [3], 0);
    design.addMove(29, 2, [7, 7], 0);
    design.addMove(29, 2, [1, 1], 0);

    design.addPiece("Flying-Stag", 30, 9);
    design.addMove(30, 2, [7, 7], 0);
    design.addMove(30, 2, [1, 1], 0);
    design.addMove(30, 1, [4], 0);
    design.addMove(30, 1, [3], 0);
    design.addMove(30, 1, [6], 0);
    design.addMove(30, 1, [2], 0);
    design.addMove(30, 1, [5], 0);
    design.addMove(30, 1, [0], 0);

    design.addPiece("Lance", 31, 6);
    design.addMove(31, 2, [7, 7], 0);

    design.addPiece("King", 32, 10000);
    design.addMove(32, 1, [7], 0);
    design.addMove(32, 1, [1], 0);
    design.addMove(32, 1, [4], 0);
    design.addMove(32, 1, [3], 0);
    design.addMove(32, 1, [6], 0);
    design.addMove(32, 1, [2], 0);
    design.addMove(32, 1, [5], 0);
    design.addMove(32, 1, [0], 0);

    design.addPiece("Prince", 33, 10000);
    design.addMove(33, 1, [7], 0);
    design.addMove(33, 1, [1], 0);
    design.addMove(33, 1, [4], 0);
    design.addMove(33, 1, [3], 0);
    design.addMove(33, 1, [6], 0);
    design.addMove(33, 1, [2], 0);
    design.addMove(33, 1, [5], 0);
    design.addMove(33, 1, [0], 0);

    design.addPiece("Blind-Tiger", 34, 3);
    design.addMove(34, 1, [1], 0);
    design.addMove(34, 1, [4], 0);
    design.addMove(34, 1, [3], 0);
    design.addMove(34, 1, [6], 0);
    design.addMove(34, 1, [2], 0);
    design.addMove(34, 1, [5], 0);
    design.addMove(34, 1, [0], 0);

    design.addPiece("Drunk-Elephant", 35, 3);
    design.addMove(35, 1, [7], 0);
    design.addMove(35, 1, [4], 0);
    design.addMove(35, 1, [3], 0);
    design.addMove(35, 1, [6], 0);
    design.addMove(35, 1, [2], 0);
    design.addMove(35, 1, [5], 0);
    design.addMove(35, 1, [0], 0);

    design.addPiece("Ferocious-Leopard", 36, 3);
    design.addMove(36, 1, [7], 0);
    design.addMove(36, 1, [1], 0);
    design.addMove(36, 1, [6], 0);
    design.addMove(36, 1, [2], 0);
    design.addMove(36, 1, [5], 0);
    design.addMove(36, 1, [0], 0);

    design.addPiece("Gold-General", 37, 3);
    design.addMove(37, 1, [7], 0);
    design.addMove(37, 1, [1], 0);
    design.addMove(37, 1, [4], 0);
    design.addMove(37, 1, [3], 0);
    design.addMove(37, 1, [6], 0);
    design.addMove(37, 1, [5], 0);

    design.addPiece("Gold-General!", 38, 3);
    design.addMove(38, 1, [7], 0);
    design.addMove(38, 1, [1], 0);
    design.addMove(38, 1, [4], 0);
    design.addMove(38, 1, [3], 0);
    design.addMove(38, 1, [6], 0);
    design.addMove(38, 1, [5], 0);

    design.addPiece("Silver-General", 39, 2);
    design.addMove(39, 1, [7], 0);
    design.addMove(39, 1, [6], 0);
    design.addMove(39, 1, [2], 0);
    design.addMove(39, 1, [5], 0);
    design.addMove(39, 1, [0], 0);

    design.addPiece("Copper-General", 40, 2);
    design.addMove(40, 1, [7], 0);
    design.addMove(40, 1, [1], 0);
    design.addMove(40, 1, [6], 0);
    design.addMove(40, 1, [5], 0);

    design.addPiece("Chariot-Soldier", 41, 18);
    design.addMove(41, 2, [7, 7], 0);
    design.addMove(41, 2, [1, 1], 0);
    design.addMove(41, 2, [6, 6], 0);
    design.addMove(41, 2, [2, 2], 0);
    design.addMove(41, 2, [5, 5], 0);
    design.addMove(41, 2, [0, 0], 0);
    design.addMove(41, 1, [4], 0);
    design.addMove(41, 1, [3], 0);
    design.addMove(41, 6, [4, 4], 0);
    design.addMove(41, 6, [3, 3], 0);

    design.addPiece("Chariot-Soldier!", 42, 18);
    design.addMove(42, 2, [7, 7], 0);
    design.addMove(42, 2, [1, 1], 0);
    design.addMove(42, 2, [6, 6], 0);
    design.addMove(42, 2, [2, 2], 0);
    design.addMove(42, 2, [5, 5], 0);
    design.addMove(42, 2, [0, 0], 0);
    design.addMove(42, 1, [4], 0);
    design.addMove(42, 1, [3], 0);
    design.addMove(42, 6, [4, 4], 0);
    design.addMove(42, 6, [3, 3], 0);

    design.addPiece("Dog", 43, 1);
    design.addMove(43, 1, [7], 0);
    design.addMove(43, 1, [2], 0);
    design.addMove(43, 1, [0], 0);

    design.addPiece("Bishop-General", 44, 21);
    design.addMove(44, 7, [6, 6, 6], 0);
    design.addMove(44, 7, [0, 0, 0], 0);
    design.addMove(44, 7, [2, 2, 2], 0);
    design.addMove(44, 7, [5, 5, 5], 0);

    design.addPiece("Bishop-General!", 45, 21);
    design.addMove(45, 7, [6, 6, 6], 0);
    design.addMove(45, 7, [0, 0, 0], 0);
    design.addMove(45, 7, [2, 2, 2], 0);
    design.addMove(45, 7, [5, 5, 5], 0);

    design.addPiece("Rook-General", 46, 23);
    design.addMove(46, 7, [7, 7, 7], 0);
    design.addMove(46, 7, [1, 1, 1], 0);
    design.addMove(46, 7, [4, 4, 4], 0);
    design.addMove(46, 7, [3, 3, 3], 0);

    design.addPiece("Rook-General!", 47, 23);
    design.addMove(47, 7, [7, 7, 7], 0);
    design.addMove(47, 7, [1, 1, 1], 0);
    design.addMove(47, 7, [4, 4, 4], 0);
    design.addMove(47, 7, [3, 3, 3], 0);

    design.addPiece("Vice-General", 48, 39);
    design.addMove(48, 8, [1, 6, 0, 6, 0, 6, 0, 6, 6, 6], 0);
    design.addMove(48, 8, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(48, 8, [1, 2, 0, 2, 0, 2, 0, 2, 2, 2], 0);
    design.addMove(48, 8, [1, 5, 0, 5, 0, 5, 0, 5, 5, 5], 0);
    design.addMove(48, 9, [7], 0);
    design.addMove(48, 9, [1], 0);
    design.addMove(48, 9, [4], 0);
    design.addMove(48, 9, [3], 0);
    design.addMove(48, 9, [6], 0);
    design.addMove(48, 9, [0], 0);
    design.addMove(48, 9, [2], 0);
    design.addMove(48, 9, [5], 0);
    design.addMove(48, 10, [7, 7], 0);
    design.addMove(48, 10, [6, 6], 0);
    design.addMove(48, 10, [1, 1], 0);
    design.addMove(48, 10, [2, 2], 0);
    design.addMove(48, 10, [3, 3], 0);
    design.addMove(48, 10, [0, 0], 0);
    design.addMove(48, 10, [4, 4], 0);
    design.addMove(48, 10, [5, 5], 0);
    design.addMove(48, 10, [7, 5], 0);
    design.addMove(48, 10, [7, 6], 0);
    design.addMove(48, 10, [1, 0], 0);
    design.addMove(48, 10, [1, 2], 0);
    design.addMove(48, 10, [3, 5], 0);
    design.addMove(48, 10, [3, 0], 0);
    design.addMove(48, 10, [4, 6], 0);
    design.addMove(48, 10, [4, 2], 0);
    design.addMove(48, 11, [7, 7, 7], 0);
    design.addMove(48, 11, [7, 7, 6], 0);
    design.addMove(48, 11, [7, 7, 5], 0);
    design.addMove(48, 11, [7, 6, 6], 0);
    design.addMove(48, 11, [7, 5, 5], 0);
    design.addMove(48, 11, [1, 1, 1], 0);
    design.addMove(48, 11, [1, 1, 2], 0);
    design.addMove(48, 11, [1, 1, 0], 0);
    design.addMove(48, 11, [1, 2, 2], 0);
    design.addMove(48, 11, [1, 0, 0], 0);
    design.addMove(48, 11, [4, 4, 4], 0);
    design.addMove(48, 11, [4, 4, 6], 0);
    design.addMove(48, 11, [4, 4, 2], 0);
    design.addMove(48, 11, [4, 6, 6], 0);
    design.addMove(48, 11, [4, 2, 2], 0);
    design.addMove(48, 11, [3, 3, 3], 0);
    design.addMove(48, 11, [3, 3, 5], 0);
    design.addMove(48, 11, [3, 3, 0], 0);
    design.addMove(48, 11, [3, 5, 5], 0);
    design.addMove(48, 11, [3, 0, 0], 0);
    design.addMove(48, 12, [6, 6, 6], 0);
    design.addMove(48, 12, [5, 5, 5], 0);
    design.addMove(48, 12, [2, 2, 2], 0);
    design.addMove(48, 12, [0, 0, 0], 0);
    design.addMove(48, 13, [7], 4);
    design.addMove(48, 13, [1], 4);
    design.addMove(48, 13, [4], 4);
    design.addMove(48, 13, [3], 4);
    design.addMove(48, 13, [6], 4);
    design.addMove(48, 13, [0], 4);
    design.addMove(48, 13, [2], 4);
    design.addMove(48, 13, [5], 4);
    design.addMove(48, 6, [7, 7], 4);
    design.addMove(48, 6, [6, 6], 4);
    design.addMove(48, 6, [1, 1], 4);
    design.addMove(48, 6, [2, 2], 4);
    design.addMove(48, 6, [3, 3], 4);
    design.addMove(48, 6, [0, 0], 4);
    design.addMove(48, 6, [4, 4], 4);
    design.addMove(48, 6, [5, 5], 4);
    design.addMove(48, 6, [7, 5], 4);
    design.addMove(48, 6, [7, 6], 4);
    design.addMove(48, 6, [1, 0], 4);
    design.addMove(48, 6, [1, 2], 4);
    design.addMove(48, 6, [3, 5], 4);
    design.addMove(48, 6, [3, 0], 4);
    design.addMove(48, 6, [4, 6], 4);
    design.addMove(48, 6, [4, 2], 4);
    design.addMove(48, 1, [7], 1);
    design.addMove(48, 1, [1], 1);
    design.addMove(48, 1, [4], 1);
    design.addMove(48, 1, [3], 1);
    design.addMove(48, 1, [6], 1);
    design.addMove(48, 1, [0], 1);
    design.addMove(48, 1, [2], 1);
    design.addMove(48, 1, [5], 1);

    design.addPiece("Great-General", 49, 45);
    design.addMove(49, 14, [7, 7, 7], 0);
    design.addMove(49, 14, [1, 1, 1], 0);
    design.addMove(49, 14, [4, 4, 4], 0);
    design.addMove(49, 14, [3, 3, 3], 0);
    design.addMove(49, 14, [6, 6, 6], 0);
    design.addMove(49, 14, [0, 0, 0], 0);
    design.addMove(49, 14, [2, 2, 2], 0);
    design.addMove(49, 14, [5, 5, 5], 0);

    design.addPiece("Side-Soldier", 50, 7);
    design.addMove(50, 2, [4, 4], 0);
    design.addMove(50, 2, [3, 3], 0);
    design.addMove(50, 1, [7], 0);
    design.addMove(50, 1, [1], 0);
    design.addMove(50, 6, [7, 7], 0);

    design.addPiece("Side-Soldier!", 51, 7);
    design.addMove(51, 2, [4, 4], 0);
    design.addMove(51, 2, [3, 3], 0);
    design.addMove(51, 1, [7], 0);
    design.addMove(51, 1, [1], 0);
    design.addMove(51, 6, [7, 7], 0);

    design.addPiece("Vertical-Soldier", 52, 8);
    design.addMove(52, 2, [7, 7], 0);
    design.addMove(52, 1, [1], 0);
    design.addMove(52, 1, [4], 0);
    design.addMove(52, 1, [3], 0);
    design.addMove(52, 6, [4, 4], 0);
    design.addMove(52, 6, [3, 3], 0);

    design.addPiece("Vertical-Soldier!", 53, 8);
    design.addMove(53, 2, [7, 7], 0);
    design.addMove(53, 1, [1], 0);
    design.addMove(53, 1, [4], 0);
    design.addMove(53, 1, [3], 0);
    design.addMove(53, 6, [4, 4], 0);
    design.addMove(53, 6, [3, 3], 0);

    design.addPiece("Water-Buffalo", 54, 17);
    design.addMove(54, 2, [4, 4], 0);
    design.addMove(54, 2, [3, 3], 0);
    design.addMove(54, 2, [6, 6], 0);
    design.addMove(54, 2, [2, 2], 0);
    design.addMove(54, 2, [5, 5], 0);
    design.addMove(54, 2, [0, 0], 0);
    design.addMove(54, 1, [7], 0);
    design.addMove(54, 1, [1], 0);
    design.addMove(54, 6, [7, 7], 0);
    design.addMove(54, 6, [1, 1], 0);

    design.addPiece("Water-Buffalo!", 55, 17);
    design.addMove(55, 2, [4, 4], 0);
    design.addMove(55, 2, [3, 3], 0);
    design.addMove(55, 2, [6, 6], 0);
    design.addMove(55, 2, [2, 2], 0);
    design.addMove(55, 2, [5, 5], 0);
    design.addMove(55, 2, [0, 0], 0);
    design.addMove(55, 1, [7], 0);
    design.addMove(55, 1, [1], 0);
    design.addMove(55, 6, [7, 7], 0);
    design.addMove(55, 6, [1, 1], 0);

    design.addPiece("Fire-Demon", 56, 83);
    design.addMove(56, 15, [4, 4, 4, 4], 0);
    design.addMove(56, 15, [3, 3, 3, 3], 0);
    design.addMove(56, 15, [6, 6, 6, 6], 0);
    design.addMove(56, 15, [2, 2, 2, 2], 0);
    design.addMove(56, 15, [5, 5, 5, 5], 0);
    design.addMove(56, 15, [0, 0, 0, 0], 0);
    design.addMove(56, 9, [7], 0);
    design.addMove(56, 9, [1], 0);
    design.addMove(56, 9, [4], 0);
    design.addMove(56, 9, [3], 0);
    design.addMove(56, 9, [6], 0);
    design.addMove(56, 9, [0], 0);
    design.addMove(56, 9, [2], 0);
    design.addMove(56, 9, [5], 0);
    design.addMove(56, 10, [7, 7], 0);
    design.addMove(56, 10, [1, 1], 0);
    design.addMove(56, 10, [3, 3], 0);
    design.addMove(56, 10, [4, 4], 0);
    design.addMove(56, 10, [7, 5], 0);
    design.addMove(56, 10, [7, 6], 0);
    design.addMove(56, 10, [1, 0], 0);
    design.addMove(56, 10, [1, 2], 0);
    design.addMove(56, 10, [3, 5], 0);
    design.addMove(56, 10, [3, 0], 0);
    design.addMove(56, 10, [4, 6], 0);
    design.addMove(56, 10, [4, 2], 0);
    design.addMove(56, 10, [6, 6], 0);
    design.addMove(56, 10, [5, 5], 0);
    design.addMove(56, 10, [2, 2], 0);
    design.addMove(56, 10, [0, 0], 0);
    design.addMove(56, 11, [7, 7, 7], 0);
    design.addMove(56, 11, [7, 7, 6], 0);
    design.addMove(56, 11, [7, 7, 5], 0);
    design.addMove(56, 11, [7, 6, 6], 0);
    design.addMove(56, 11, [7, 5, 5], 0);
    design.addMove(56, 11, [1, 1, 1], 0);
    design.addMove(56, 11, [1, 1, 2], 0);
    design.addMove(56, 11, [1, 1, 0], 0);
    design.addMove(56, 11, [1, 2, 2], 0);
    design.addMove(56, 11, [1, 0, 0], 0);
    design.addMove(56, 11, [4, 4, 4], 0);
    design.addMove(56, 11, [4, 4, 6], 0);
    design.addMove(56, 11, [4, 4, 2], 0);
    design.addMove(56, 11, [4, 6, 6], 0);
    design.addMove(56, 11, [4, 2, 2], 0);
    design.addMove(56, 11, [3, 3, 3], 0);
    design.addMove(56, 11, [3, 3, 5], 0);
    design.addMove(56, 11, [3, 3, 0], 0);
    design.addMove(56, 11, [3, 5, 5], 0);
    design.addMove(56, 11, [3, 0, 0], 0);
    design.addMove(56, 13, [7], 4);
    design.addMove(56, 13, [1], 4);
    design.addMove(56, 13, [4], 4);
    design.addMove(56, 13, [3], 4);
    design.addMove(56, 13, [6], 4);
    design.addMove(56, 13, [0], 4);
    design.addMove(56, 13, [2], 4);
    design.addMove(56, 13, [5], 4);
    design.addMove(56, 6, [7, 7], 4);
    design.addMove(56, 6, [6, 6], 4);
    design.addMove(56, 6, [1, 1], 4);
    design.addMove(56, 6, [2, 2], 4);
    design.addMove(56, 6, [3, 3], 4);
    design.addMove(56, 6, [0, 0], 4);
    design.addMove(56, 6, [4, 4], 4);
    design.addMove(56, 6, [5, 5], 4);
    design.addMove(56, 6, [7, 5], 4);
    design.addMove(56, 6, [7, 6], 4);
    design.addMove(56, 6, [1, 0], 4);
    design.addMove(56, 6, [1, 2], 4);
    design.addMove(56, 6, [3, 5], 4);
    design.addMove(56, 6, [3, 0], 4);
    design.addMove(56, 6, [4, 6], 4);
    design.addMove(56, 6, [4, 2], 4);
    design.addMove(56, 1, [7], 1);
    design.addMove(56, 1, [1], 1);
    design.addMove(56, 1, [4], 1);
    design.addMove(56, 1, [3], 1);
    design.addMove(56, 1, [6], 1);
    design.addMove(56, 1, [0], 1);
    design.addMove(56, 1, [2], 1);
    design.addMove(56, 1, [5], 1);

    design.addPiece("Free-Eagle", 57, 22);
    design.addMove(57, 15, [7, 7, 7, 7], 0);
    design.addMove(57, 15, [1, 1, 1, 1], 0);
    design.addMove(57, 15, [4, 4, 4, 4], 0);
    design.addMove(57, 15, [3, 3, 3, 3], 0);
    design.addMove(57, 15, [6, 6, 6, 6], 0);
    design.addMove(57, 15, [2, 2, 2, 2], 0);
    design.addMove(57, 15, [5, 5, 5, 5], 0);
    design.addMove(57, 15, [0, 0, 0, 0], 0);
    design.addMove(57, 1, [7], 0);
    design.addMove(57, 1, [1], 0);
    design.addMove(57, 1, [4], 0);
    design.addMove(57, 1, [3], 0);
    design.addMove(57, 3, [6], 0);
    design.addMove(57, 0, [6, 6], 0);
    design.addMove(57, 0, [7, 7], 0);
    design.addMove(57, 3, [0], 0);
    design.addMove(57, 0, [0, 0], 0);
    design.addMove(57, 0, [1, 1], 0);
    design.addMove(57, 3, [2], 0);
    design.addMove(57, 0, [2, 2], 0);
    design.addMove(57, 0, [4, 4], 0);
    design.addMove(57, 3, [5], 0);
    design.addMove(57, 0, [5, 5], 0);
    design.addMove(57, 0, [3, 3], 0);
    design.addMove(57, 1, [6], 1);
    design.addMove(57, 1, [2], 1);
    design.addMove(57, 1, [5], 1);
    design.addMove(57, 1, [0], 1);

    design.addPiece("Lion-Hawk", 58, 25);
    design.addMove(58, 15, [6, 6, 6, 6], 0);
    design.addMove(58, 15, [2, 2, 2, 2], 0);
    design.addMove(58, 15, [5, 5, 5, 5], 0);
    design.addMove(58, 15, [0, 0, 0, 0], 0);
    design.addMove(58, 3, [7], 0);
    design.addMove(58, 3, [1], 0);
    design.addMove(58, 3, [4], 0);
    design.addMove(58, 3, [3], 0);
    design.addMove(58, 3, [6], 0);
    design.addMove(58, 3, [0], 0);
    design.addMove(58, 3, [2], 0);
    design.addMove(58, 3, [5], 0);
    design.addMove(58, 0, [7, 7], 0);
    design.addMove(58, 0, [6, 6], 0);
    design.addMove(58, 0, [1, 1], 0);
    design.addMove(58, 0, [2, 2], 0);
    design.addMove(58, 0, [3, 3], 0);
    design.addMove(58, 0, [0, 0], 0);
    design.addMove(58, 0, [4, 4], 0);
    design.addMove(58, 0, [5, 5], 0);
    design.addMove(58, 0, [7, 5], 0);
    design.addMove(58, 0, [7, 6], 0);
    design.addMove(58, 0, [1, 0], 0);
    design.addMove(58, 0, [1, 2], 0);
    design.addMove(58, 0, [3, 5], 0);
    design.addMove(58, 0, [3, 0], 0);
    design.addMove(58, 0, [4, 6], 0);
    design.addMove(58, 0, [4, 2], 0);
    design.addMove(58, 1, [7], 1);
    design.addMove(58, 1, [1], 1);
    design.addMove(58, 1, [4], 1);
    design.addMove(58, 1, [3], 1);
    design.addMove(58, 1, [6], 1);
    design.addMove(58, 1, [0], 1);
    design.addMove(58, 1, [2], 1);
    design.addMove(58, 1, [5], 1);

    design.addPiece("Heavenly-Tetrarch", 59, 12);
    design.addMove(59, 16, [7, 7, 7], 0);
    design.addMove(59, 16, [1, 1, 1], 0);
    design.addMove(59, 17, [3, 3, 3], 0);
    design.addMove(59, 17, [4, 4, 4], 0);
    design.addMove(59, 16, [6, 6, 6], 0);
    design.addMove(59, 16, [5, 5, 5], 0);
    design.addMove(59, 16, [0, 0, 0], 0);
    design.addMove(59, 16, [2, 2, 2], 0);
    design.addMove(59, 18, [7], 0);
    design.addMove(59, 18, [1], 0);
    design.addMove(59, 18, [6], 0);
    design.addMove(59, 18, [5], 0);
    design.addMove(59, 18, [4], 0);
    design.addMove(59, 18, [3], 0);
    design.addMove(59, 18, [2], 0);
    design.addMove(59, 18, [0], 0);

    design.addPiece("Multi-General", 60, 6);
    design.addMove(60, 2, [7, 7], 0);
    design.addMove(60, 2, [2, 2], 0);
    design.addMove(60, 2, [0, 0], 0);

    design.addPiece("None", 61, 0);

    design.setup("Black", "King", 162);
    design.setup("Black", "Blind-Tiger", 161);
    design.setup("Black", "Blind-Tiger", 163);
    design.setup("Black", "Gold-General", 160);
    design.setup("Black", "Gold-General", 164);
    design.setup("Black", "Silver-General", 159);
    design.setup("Black", "Silver-General", 165);
    design.setup("Black", "Ferocious-Leopard", 158);
    design.setup("Black", "Ferocious-Leopard", 166);
    design.setup("Black", "Knight", 157);
    design.setup("Black", "Knight", 167);
    design.setup("Black", "Lance", 156);
    design.setup("Black", "Lance", 168);
    design.setup("Black", "Fire-Demon", 149);
    design.setup("Black", "Lion", 148);
    design.setup("Black", "Queen", 150);
    design.setup("Black", "Water-Buffalo", 146);
    design.setup("Black", "Phoenix", 152);
    design.setup("Black", "Kylin", 145);
    design.setup("Black", "Chariot-Soldier", 153);
    design.setup("Black", "Vertical-Mover", 143);
    design.setup("Black", "Vertical-Mover", 155);
    design.setup("Black", "Rook-General", 136);
    design.setup("Black", "Bishop-General", 135);
    design.setup("Black", "Vice-General", 137);
    design.setup("Black", "Dragon-King", 134);
    design.setup("Black", "Dragon-King", 138);
    design.setup("Black", "Dragon-Horse", 133);
    design.setup("Black", "Dragon-Horse", 139);
    design.setup("Black", "Rook", 132);
    design.setup("Black", "Rook", 140);
    design.setup("Black", "Bishop", 131);
    design.setup("Black", "Bishop", 141);
    design.setup("Black", "Vertical-Soldier", 130);
    design.setup("Black", "Vertical-Soldier", 142);
    design.setup("Black", "Pawn", 117);
    design.setup("Black", "Pawn", 118);
    design.setup("Black", "Pawn", 119);
    design.setup("Black", "Pawn", 120);
    design.setup("Black", "Pawn", 121);
    design.setup("Black", "Pawn", 122);
    design.setup("Black", "Pawn", 123);
    design.setup("Black", "Pawn", 124);
    design.setup("Black", "Pawn", 125);
    design.setup("Black", "Pawn", 126);
    design.setup("Black", "Pawn", 127);
    design.setup("Black", "Pawn", 128);
    design.setup("Black", "Pawn", 129);
    design.setup("Black", "Dog", 107);
    design.setup("Black", "Dog", 113);
    design.setup("White", "King", 6);
    design.setup("White", "Blind-Tiger", 5);
    design.setup("White", "Blind-Tiger", 7);
    design.setup("White", "Gold-General", 4);
    design.setup("White", "Gold-General", 8);
    design.setup("White", "Silver-General", 3);
    design.setup("White", "Silver-General", 9);
    design.setup("White", "Ferocious-Leopard", 2);
    design.setup("White", "Ferocious-Leopard", 10);
    design.setup("White", "Knight", 1);
    design.setup("White", "Knight", 11);
    design.setup("White", "Lance", 0);
    design.setup("White", "Lance", 12);
    design.setup("White", "Fire-Demon", 19);
    design.setup("White", "Lion", 20);
    design.setup("White", "Queen", 18);
    design.setup("White", "Water-Buffalo", 22);
    design.setup("White", "Phoenix", 16);
    design.setup("White", "Kylin", 23);
    design.setup("White", "Chariot-Soldier", 15);
    design.setup("White", "Vertical-Mover", 13);
    design.setup("White", "Vertical-Mover", 25);
    design.setup("White", "Rook-General", 32);
    design.setup("White", "Bishop-General", 33);
    design.setup("White", "Vice-General", 31);
    design.setup("White", "Dragon-King", 30);
    design.setup("White", "Dragon-King", 34);
    design.setup("White", "Dragon-Horse", 29);
    design.setup("White", "Dragon-Horse", 35);
    design.setup("White", "Rook", 28);
    design.setup("White", "Rook", 36);
    design.setup("White", "Bishop", 27);
    design.setup("White", "Bishop", 37);
    design.setup("White", "Vertical-Soldier", 26);
    design.setup("White", "Vertical-Soldier", 38);
    design.setup("White", "Pawn", 39);
    design.setup("White", "Pawn", 40);
    design.setup("White", "Pawn", 41);
    design.setup("White", "Pawn", 42);
    design.setup("White", "Pawn", 43);
    design.setup("White", "Pawn", 44);
    design.setup("White", "Pawn", 45);
    design.setup("White", "Pawn", 46);
    design.setup("White", "Pawn", 47);
    design.setup("White", "Pawn", 48);
    design.setup("White", "Pawn", 49);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Dog", 55);
    design.setup("White", "Dog", 61);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteIron-General", "White Iron-General");
    view.defPiece("BlackIron-General", "Black Iron-General");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteBishop!", "White Bishop!");
    view.defPiece("BlackBishop!", "Black Bishop!");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteRook!", "White Rook!");
    view.defPiece("BlackRook!", "Black Rook!");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteQueen!", "White Queen!");
    view.defPiece("BlackQueen!", "Black Queen!");
    view.defPiece("WhiteFlying-Ox", "White Flying-Ox");
    view.defPiece("BlackFlying-Ox", "Black Flying-Ox");
    view.defPiece("WhiteFree-Boar", "White Free-Boar");
    view.defPiece("BlackFree-Boar", "Black Free-Boar");
    view.defPiece("WhiteHorned-Falcon", "White Horned-Falcon");
    view.defPiece("BlackHorned-Falcon", "Black Horned-Falcon");
    view.defPiece("WhiteHorned-Falcon!", "White Horned-Falcon!");
    view.defPiece("BlackHorned-Falcon!", "Black Horned-Falcon!");
    view.defPiece("WhiteSoaring-Eagle", "White Soaring-Eagle");
    view.defPiece("BlackSoaring-Eagle", "Black Soaring-Eagle");
    view.defPiece("WhiteSoaring-Eagle!", "White Soaring-Eagle!");
    view.defPiece("BlackSoaring-Eagle!", "Black Soaring-Eagle!");
    view.defPiece("WhiteWhale", "White Whale");
    view.defPiece("BlackWhale", "Black Whale");
    view.defPiece("WhiteWhite-Horse", "White White-Horse");
    view.defPiece("BlackWhite-Horse", "Black White-Horse");
    view.defPiece("WhiteLion", "White Lion");
    view.defPiece("BlackLion", "Black Lion");
    view.defPiece("WhiteLion!", "White Lion!");
    view.defPiece("BlackLion!", "Black Lion!");
    view.defPiece("WhiteDragon-King", "White Dragon-King");
    view.defPiece("BlackDragon-King", "Black Dragon-King");
    view.defPiece("WhiteDragon-King!", "White Dragon-King!");
    view.defPiece("BlackDragon-King!", "Black Dragon-King!");
    view.defPiece("WhiteDragon-Horse", "White Dragon-Horse");
    view.defPiece("BlackDragon-Horse", "Black Dragon-Horse");
    view.defPiece("WhiteDragon-Horse!", "White Dragon-Horse!");
    view.defPiece("BlackDragon-Horse!", "Black Dragon-Horse!");
    view.defPiece("WhiteKylin", "White Kylin");
    view.defPiece("BlackKylin", "Black Kylin");
    view.defPiece("WhitePhoenix", "White Phoenix");
    view.defPiece("BlackPhoenix", "Black Phoenix");
    view.defPiece("WhiteReverse-Chariot", "White Reverse-Chariot");
    view.defPiece("BlackReverse-Chariot", "Black Reverse-Chariot");
    view.defPiece("WhiteSide-Mover", "White Side-Mover");
    view.defPiece("BlackSide-Mover", "Black Side-Mover");
    view.defPiece("WhiteSide-Mover!", "White Side-Mover!");
    view.defPiece("BlackSide-Mover!", "Black Side-Mover!");
    view.defPiece("WhiteVertical-Mover", "White Vertical-Mover");
    view.defPiece("BlackVertical-Mover", "Black Vertical-Mover");
    view.defPiece("WhiteVertical-Mover!", "White Vertical-Mover!");
    view.defPiece("BlackVertical-Mover!", "Black Vertical-Mover!");
    view.defPiece("WhiteFlying-Stag", "White Flying-Stag");
    view.defPiece("BlackFlying-Stag", "Black Flying-Stag");
    view.defPiece("WhiteLance", "White Lance");
    view.defPiece("BlackLance", "Black Lance");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhitePrince", "White Prince");
    view.defPiece("BlackPrince", "Black Prince");
    view.defPiece("WhiteBlind-Tiger", "White Blind-Tiger");
    view.defPiece("BlackBlind-Tiger", "Black Blind-Tiger");
    view.defPiece("WhiteDrunk-Elephant", "White Drunk-Elephant");
    view.defPiece("BlackDrunk-Elephant", "Black Drunk-Elephant");
    view.defPiece("WhiteFerocious-Leopard", "White Ferocious-Leopard");
    view.defPiece("BlackFerocious-Leopard", "Black Ferocious-Leopard");
    view.defPiece("WhiteGold-General", "White Gold-General");
    view.defPiece("BlackGold-General", "Black Gold-General");
    view.defPiece("WhiteGold-General!", "White Gold-General!");
    view.defPiece("BlackGold-General!", "Black Gold-General!");
    view.defPiece("WhiteSilver-General", "White Silver-General");
    view.defPiece("BlackSilver-General", "Black Silver-General");
    view.defPiece("WhiteCopper-General", "White Copper-General");
    view.defPiece("BlackCopper-General", "Black Copper-General");
    view.defPiece("WhiteChariot-Soldier", "White Chariot-Soldier");
    view.defPiece("BlackChariot-Soldier", "Black Chariot-Soldier");
    view.defPiece("WhiteChariot-Soldier!", "White Chariot-Soldier!");
    view.defPiece("BlackChariot-Soldier!", "Black Chariot-Soldier!");
    view.defPiece("WhiteDog", "White Dog");
    view.defPiece("BlackDog", "Black Dog");
    view.defPiece("WhiteBishop-General", "White Bishop-General");
    view.defPiece("BlackBishop-General", "Black Bishop-General");
    view.defPiece("WhiteBishop-General!", "White Bishop-General!");
    view.defPiece("BlackBishop-General!", "Black Bishop-General!");
    view.defPiece("WhiteRook-General", "White Rook-General");
    view.defPiece("BlackRook-General", "Black Rook-General");
    view.defPiece("WhiteRook-General!", "White Rook-General!");
    view.defPiece("BlackRook-General!", "Black Rook-General!");
    view.defPiece("WhiteVice-General", "White Vice-General");
    view.defPiece("BlackVice-General", "Black Vice-General");
    view.defPiece("WhiteGreat-General", "White Great-General");
    view.defPiece("BlackGreat-General", "Black Great-General");
    view.defPiece("WhiteSide-Soldier", "White Side-Soldier");
    view.defPiece("BlackSide-Soldier", "Black Side-Soldier");
    view.defPiece("WhiteSide-Soldier!", "White Side-Soldier!");
    view.defPiece("BlackSide-Soldier!", "Black Side-Soldier!");
    view.defPiece("WhiteVertical-Soldier", "White Vertical-Soldier");
    view.defPiece("BlackVertical-Soldier", "Black Vertical-Soldier");
    view.defPiece("WhiteVertical-Soldier!", "White Vertical-Soldier!");
    view.defPiece("BlackVertical-Soldier!", "Black Vertical-Soldier!");
    view.defPiece("WhiteWater-Buffalo", "White Water-Buffalo");
    view.defPiece("BlackWater-Buffalo", "Black Water-Buffalo");
    view.defPiece("WhiteWater-Buffalo!", "White Water-Buffalo!");
    view.defPiece("BlackWater-Buffalo!", "Black Water-Buffalo!");
    view.defPiece("WhiteFire-Demon", "White Fire-Demon");
    view.defPiece("BlackFire-Demon", "Black Fire-Demon");
    view.defPiece("WhiteFree-Eagle", "White Free-Eagle");
    view.defPiece("BlackFree-Eagle", "Black Free-Eagle");
    view.defPiece("WhiteLion-Hawk", "White Lion-Hawk");
    view.defPiece("BlackLion-Hawk", "Black Lion-Hawk");
    view.defPiece("WhiteHeavenly-Tetrarch", "White Heavenly-Tetrarch");
    view.defPiece("BlackHeavenly-Tetrarch", "Black Heavenly-Tetrarch");
    view.defPiece("WhiteMulti-General", "White Multi-General");
    view.defPiece("BlackMulti-General", "Black Multi-General");
    view.defPiece("WhiteNone", "White None");
    view.defPiece("BlackNone", "Black None");
 
    view.defPosition("a13", 5, 5, 49, 49);
    view.defPosition("b13", 41, 5, 49, 49);
    view.defPosition("c13", 77, 5, 49, 49);
    view.defPosition("d13", 113, 5, 49, 49);
    view.defPosition("e13", 149, 5, 49, 49);
    view.defPosition("f13", 185, 5, 49, 49);
    view.defPosition("g13", 221, 5, 49, 49);
    view.defPosition("h13", 257, 5, 49, 49);
    view.defPosition("i13", 293, 5, 49, 49);
    view.defPosition("j13", 329, 5, 49, 49);
    view.defPosition("k13", 365, 5, 49, 49);
    view.defPosition("l13", 401, 5, 49, 49);
    view.defPosition("m13", 437, 5, 49, 49);
    view.defPosition("a12", 5, 41, 49, 49);
    view.defPosition("b12", 41, 41, 49, 49);
    view.defPosition("c12", 77, 41, 49, 49);
    view.defPosition("d12", 113, 41, 49, 49);
    view.defPosition("e12", 149, 41, 49, 49);
    view.defPosition("f12", 185, 41, 49, 49);
    view.defPosition("g12", 221, 41, 49, 49);
    view.defPosition("h12", 257, 41, 49, 49);
    view.defPosition("i12", 293, 41, 49, 49);
    view.defPosition("j12", 329, 41, 49, 49);
    view.defPosition("k12", 365, 41, 49, 49);
    view.defPosition("l12", 401, 41, 49, 49);
    view.defPosition("m12", 437, 41, 49, 49);
    view.defPosition("a11", 5, 77, 49, 49);
    view.defPosition("b11", 41, 77, 49, 49);
    view.defPosition("c11", 77, 77, 49, 49);
    view.defPosition("d11", 113, 77, 49, 49);
    view.defPosition("e11", 149, 77, 49, 49);
    view.defPosition("f11", 185, 77, 49, 49);
    view.defPosition("g11", 221, 77, 49, 49);
    view.defPosition("h11", 257, 77, 49, 49);
    view.defPosition("i11", 293, 77, 49, 49);
    view.defPosition("j11", 329, 77, 49, 49);
    view.defPosition("k11", 365, 77, 49, 49);
    view.defPosition("l11", 401, 77, 49, 49);
    view.defPosition("m11", 437, 77, 49, 49);
    view.defPosition("a10", 5, 113, 49, 49);
    view.defPosition("b10", 41, 113, 49, 49);
    view.defPosition("c10", 77, 113, 49, 49);
    view.defPosition("d10", 113, 113, 49, 49);
    view.defPosition("e10", 149, 113, 49, 49);
    view.defPosition("f10", 185, 113, 49, 49);
    view.defPosition("g10", 221, 113, 49, 49);
    view.defPosition("h10", 257, 113, 49, 49);
    view.defPosition("i10", 293, 113, 49, 49);
    view.defPosition("j10", 329, 113, 49, 49);
    view.defPosition("k10", 365, 113, 49, 49);
    view.defPosition("l10", 401, 113, 49, 49);
    view.defPosition("m10", 437, 113, 49, 49);
    view.defPosition("a9", 5, 149, 49, 49);
    view.defPosition("b9", 41, 149, 49, 49);
    view.defPosition("c9", 77, 149, 49, 49);
    view.defPosition("d9", 113, 149, 49, 49);
    view.defPosition("e9", 149, 149, 49, 49);
    view.defPosition("f9", 185, 149, 49, 49);
    view.defPosition("g9", 221, 149, 49, 49);
    view.defPosition("h9", 257, 149, 49, 49);
    view.defPosition("i9", 293, 149, 49, 49);
    view.defPosition("j9", 329, 149, 49, 49);
    view.defPosition("k9", 365, 149, 49, 49);
    view.defPosition("l9", 401, 149, 49, 49);
    view.defPosition("m9", 437, 149, 49, 49);
    view.defPosition("a8", 5, 185, 49, 49);
    view.defPosition("b8", 41, 185, 49, 49);
    view.defPosition("c8", 77, 185, 49, 49);
    view.defPosition("d8", 113, 185, 49, 49);
    view.defPosition("e8", 149, 185, 49, 49);
    view.defPosition("f8", 185, 185, 49, 49);
    view.defPosition("g8", 221, 185, 49, 49);
    view.defPosition("h8", 257, 185, 49, 49);
    view.defPosition("i8", 293, 185, 49, 49);
    view.defPosition("j8", 329, 185, 49, 49);
    view.defPosition("k8", 365, 185, 49, 49);
    view.defPosition("l8", 401, 185, 49, 49);
    view.defPosition("m8", 437, 185, 49, 49);
    view.defPosition("a7", 5, 221, 49, 49);
    view.defPosition("b7", 41, 221, 49, 49);
    view.defPosition("c7", 77, 221, 49, 49);
    view.defPosition("d7", 113, 221, 49, 49);
    view.defPosition("e7", 149, 221, 49, 49);
    view.defPosition("f7", 185, 221, 49, 49);
    view.defPosition("g7", 221, 221, 49, 49);
    view.defPosition("h7", 257, 221, 49, 49);
    view.defPosition("i7", 293, 221, 49, 49);
    view.defPosition("j7", 329, 221, 49, 49);
    view.defPosition("k7", 365, 221, 49, 49);
    view.defPosition("l7", 401, 221, 49, 49);
    view.defPosition("m7", 437, 221, 49, 49);
    view.defPosition("a6", 5, 257, 49, 49);
    view.defPosition("b6", 41, 257, 49, 49);
    view.defPosition("c6", 77, 257, 49, 49);
    view.defPosition("d6", 113, 257, 49, 49);
    view.defPosition("e6", 149, 257, 49, 49);
    view.defPosition("f6", 185, 257, 49, 49);
    view.defPosition("g6", 221, 257, 49, 49);
    view.defPosition("h6", 257, 257, 49, 49);
    view.defPosition("i6", 293, 257, 49, 49);
    view.defPosition("j6", 329, 257, 49, 49);
    view.defPosition("k6", 365, 257, 49, 49);
    view.defPosition("l6", 401, 257, 49, 49);
    view.defPosition("m6", 437, 257, 49, 49);
    view.defPosition("a5", 5, 293, 49, 49);
    view.defPosition("b5", 41, 293, 49, 49);
    view.defPosition("c5", 77, 293, 49, 49);
    view.defPosition("d5", 113, 293, 49, 49);
    view.defPosition("e5", 149, 293, 49, 49);
    view.defPosition("f5", 185, 293, 49, 49);
    view.defPosition("g5", 221, 293, 49, 49);
    view.defPosition("h5", 257, 293, 49, 49);
    view.defPosition("i5", 293, 293, 49, 49);
    view.defPosition("j5", 329, 293, 49, 49);
    view.defPosition("k5", 365, 293, 49, 49);
    view.defPosition("l5", 401, 293, 49, 49);
    view.defPosition("m5", 437, 293, 49, 49);
    view.defPosition("a4", 5, 329, 49, 49);
    view.defPosition("b4", 41, 329, 49, 49);
    view.defPosition("c4", 77, 329, 49, 49);
    view.defPosition("d4", 113, 329, 49, 49);
    view.defPosition("e4", 149, 329, 49, 49);
    view.defPosition("f4", 185, 329, 49, 49);
    view.defPosition("g4", 221, 329, 49, 49);
    view.defPosition("h4", 257, 329, 49, 49);
    view.defPosition("i4", 293, 329, 49, 49);
    view.defPosition("j4", 329, 329, 49, 49);
    view.defPosition("k4", 365, 329, 49, 49);
    view.defPosition("l4", 401, 329, 49, 49);
    view.defPosition("m4", 437, 329, 49, 49);
    view.defPosition("a3", 5, 365, 49, 49);
    view.defPosition("b3", 41, 365, 49, 49);
    view.defPosition("c3", 77, 365, 49, 49);
    view.defPosition("d3", 113, 365, 49, 49);
    view.defPosition("e3", 149, 365, 49, 49);
    view.defPosition("f3", 185, 365, 49, 49);
    view.defPosition("g3", 221, 365, 49, 49);
    view.defPosition("h3", 257, 365, 49, 49);
    view.defPosition("i3", 293, 365, 49, 49);
    view.defPosition("j3", 329, 365, 49, 49);
    view.defPosition("k3", 365, 365, 49, 49);
    view.defPosition("l3", 401, 365, 49, 49);
    view.defPosition("m3", 437, 365, 49, 49);
    view.defPosition("a2", 5, 401, 49, 49);
    view.defPosition("b2", 41, 401, 49, 49);
    view.defPosition("c2", 77, 401, 49, 49);
    view.defPosition("d2", 113, 401, 49, 49);
    view.defPosition("e2", 149, 401, 49, 49);
    view.defPosition("f2", 185, 401, 49, 49);
    view.defPosition("g2", 221, 401, 49, 49);
    view.defPosition("h2", 257, 401, 49, 49);
    view.defPosition("i2", 293, 401, 49, 49);
    view.defPosition("j2", 329, 401, 49, 49);
    view.defPosition("k2", 365, 401, 49, 49);
    view.defPosition("l2", 401, 401, 49, 49);
    view.defPosition("m2", 437, 401, 49, 49);
    view.defPosition("a1", 5, 437, 49, 49);
    view.defPosition("b1", 41, 437, 49, 49);
    view.defPosition("c1", 77, 437, 49, 49);
    view.defPosition("d1", 113, 437, 49, 49);
    view.defPosition("e1", 149, 437, 49, 49);
    view.defPosition("f1", 185, 437, 49, 49);
    view.defPosition("g1", 221, 437, 49, 49);
    view.defPosition("h1", 257, 437, 49, 49);
    view.defPosition("i1", 293, 437, 49, 49);
    view.defPosition("j1", 329, 437, 49, 49);
    view.defPosition("k1", 365, 437, 49, 49);
    view.defPosition("l1", 401, 437, 49, 49);
    view.defPosition("m1", 437, 437, 49, 49);
}
