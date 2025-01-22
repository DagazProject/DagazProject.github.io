Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 14;
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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1]);

    design.addPosition("a10", [15, 14, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("c10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("d10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("e10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("i10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("j10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("k10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("l10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("m10", [15, 14, 13, 1, -1, 0, 0, 0]);
    design.addPosition("n10", [0, 14, 13, 0, -1, 0, 0, 0]);
    design.addPosition("a9", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m9", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n9", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a8", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m8", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n8", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a7", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m7", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n7", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a6", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m6", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n6", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a5", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m5", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n5", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a4", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m4", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n4", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a3", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m3", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n3", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a2", [15, 14, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("c2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("d2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("e2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("f2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("g2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("h2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("i2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("j2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("k2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("l2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("m2", [15, 14, 13, 1, -1, -13, -15, -14]);
    design.addPosition("n2", [0, 14, 13, 0, -1, 0, -15, -14]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -13, 0, -14]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("l1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("m1", [0, 0, 0, 1, -1, -13, -15, -14]);
    design.addPosition("n1", [0, 0, 0, 0, -1, 0, -15, -14]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    design.addZone("last-rank", 2, [126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139]);
    design.addZone("third-rank", 1, [98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111]);
    design.addZone("third-rank", 2, [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	26);	// capture
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	26);	// capture
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
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
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 2);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 2, [7, 7, 7], 0);
    design.addMove(0, 3, [6], 0);
    design.addMove(0, 3, [5], 0);
    design.addMove(0, 4, [3, 7, 7], 0);
    design.addMove(0, 5, [3, 7, 7, 7], 0);
    design.addMove(0, 6, [0, 7, 7, 7], 0);
    design.addMove(0, 4, [4, 7, 7], 0);
    design.addMove(0, 5, [4, 7, 7, 7], 0);
    design.addMove(0, 6, [2, 7, 7, 7], 0);

    design.addPiece("Rook", 1, 30);
    design.addMove(1, 7, [7, 7], 0);
    design.addMove(1, 7, [1, 1], 0);
    design.addMove(1, 7, [4, 4], 0);
    design.addMove(1, 7, [3, 3], 0);

    design.addPiece("Knight", 2, 16);
    design.addMove(2, 8, [7, 6], 0);
    design.addMove(2, 8, [7, 5], 0);
    design.addMove(2, 8, [1, 2], 0);
    design.addMove(2, 8, [1, 0], 0);
    design.addMove(2, 8, [4, 6], 0);
    design.addMove(2, 8, [4, 2], 0);
    design.addMove(2, 8, [3, 5], 0);
    design.addMove(2, 8, [3, 0], 0);

    design.addPiece("Bishop", 3, 16);
    design.addMove(3, 7, [6, 6], 0);
    design.addMove(3, 7, [2, 2], 0);
    design.addMove(3, 7, [5, 5], 0);
    design.addMove(3, 7, [0, 0], 0);

    design.addPiece("Queen", 4, 50);
    design.addMove(4, 7, [7, 7], 0);
    design.addMove(4, 7, [1, 1], 0);
    design.addMove(4, 7, [4, 4], 0);
    design.addMove(4, 7, [3, 3], 0);
    design.addMove(4, 7, [6, 6], 0);
    design.addMove(4, 7, [2, 2], 0);
    design.addMove(4, 7, [5, 5], 0);
    design.addMove(4, 7, [0, 0], 0);

    design.addPiece("Concubine", 5, 46);
    design.addMove(5, 7, [7, 7], 0);
    design.addMove(5, 7, [1, 1], 0);
    design.addMove(5, 7, [4, 4], 0);
    design.addMove(5, 7, [3, 3], 0);
    design.addMove(5, 8, [7, 6], 0);
    design.addMove(5, 8, [7, 5], 0);
    design.addMove(5, 8, [1, 2], 0);
    design.addMove(5, 8, [1, 0], 0);
    design.addMove(5, 8, [4, 6], 0);
    design.addMove(5, 8, [4, 2], 0);
    design.addMove(5, 8, [3, 5], 0);
    design.addMove(5, 8, [3, 0], 0);

    design.addPiece("CrownRook", 6, 40);
    design.addMove(6, 7, [7, 7], 0);
    design.addMove(6, 7, [1, 1], 0);
    design.addMove(6, 7, [4, 4], 0);
    design.addMove(6, 7, [3, 3], 0);
    design.addMove(6, 9, [6], 0);
    design.addMove(6, 9, [2], 0);
    design.addMove(6, 9, [5], 0);
    design.addMove(6, 9, [0], 0);

    design.addPiece("King", 7, 1000);
    design.addMove(7, 9, [7], 0);
    design.addMove(7, 9, [1], 0);
    design.addMove(7, 9, [4], 0);
    design.addMove(7, 9, [3], 0);
    design.addMove(7, 9, [6], 0);
    design.addMove(7, 9, [2], 0);
    design.addMove(7, 9, [5], 0);
    design.addMove(7, 9, [0], 0);

    design.setup("White", "Pawn", 112);
    design.setup("White", "Pawn", 113);
    design.setup("White", "Pawn", 114);
    design.setup("White", "Pawn", 115);
    design.setup("White", "Pawn", 116);
    design.setup("White", "Pawn", 117);
    design.setup("White", "Pawn", 118);
    design.setup("White", "Pawn", 119);
    design.setup("White", "Pawn", 120);
    design.setup("White", "Pawn", 121);
    design.setup("White", "Pawn", 122);
    design.setup("White", "Pawn", 123);
    design.setup("White", "Pawn", 124);
    design.setup("White", "Pawn", 125);
    design.setup("White", "Rook", 126);
    design.setup("White", "Rook", 139);
    design.setup("White", "Knight", 128);
    design.setup("White", "Knight", 136);
    design.setup("White", "Knight", 137);
    design.setup("White", "Bishop", 129);
    design.setup("White", "Bishop", 130);
    design.setup("White", "Bishop", 134);
    design.setup("White", "Bishop", 135);
    design.setup("White", "Queen", 133);
    design.setup("White", "Concubine", 131);
    design.setup("White", "CrownRook", 127);
    design.setup("White", "CrownRook", 138);
    design.setup("White", "King", 132);
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
    design.setup("Black", "Pawn", 24);
    design.setup("Black", "Pawn", 25);
    design.setup("Black", "Pawn", 26);
    design.setup("Black", "Pawn", 27);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 13);
    design.setup("Black", "Knight", 2);
    design.setup("Black", "Knight", 10);
    design.setup("Black", "Knight", 11);
    design.setup("Black", "Bishop", 3);
    design.setup("Black", "Bishop", 4);
    design.setup("Black", "Bishop", 8);
    design.setup("Black", "Bishop", 9);
    design.setup("Black", "Queen", 7);
    design.setup("Black", "Concubine", 5);
    design.setup("Black", "CrownRook", 1);
    design.setup("Black", "CrownRook", 12);
    design.setup("Black", "King", 6);
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
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteConcubine", "White Concubine");
    view.defPiece("BlackConcubine", "Black Concubine");
    view.defPiece("WhiteCrownRook", "White CrownRook");
    view.defPiece("BlackCrownRook", "Black CrownRook");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
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
    view.defPosition("k10", 501, 2, 50, 50);
    view.defPosition("l10", 551, 2, 50, 50);
    view.defPosition("m10", 601, 2, 50, 50);
    view.defPosition("n10", 651, 2, 50, 50);
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
    view.defPosition("k9", 501, 52, 50, 50);
    view.defPosition("l9", 551, 52, 50, 50);
    view.defPosition("m9", 601, 52, 50, 50);
    view.defPosition("n9", 651, 52, 50, 50);
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
    view.defPosition("k8", 501, 102, 50, 50);
    view.defPosition("l8", 551, 102, 50, 50);
    view.defPosition("m8", 601, 102, 50, 50);
    view.defPosition("n8", 651, 102, 50, 50);
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
    view.defPosition("k7", 501, 152, 50, 50);
    view.defPosition("l7", 551, 152, 50, 50);
    view.defPosition("m7", 601, 152, 50, 50);
    view.defPosition("n7", 651, 152, 50, 50);
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
    view.defPosition("k6", 501, 202, 50, 50);
    view.defPosition("l6", 551, 202, 50, 50);
    view.defPosition("m6", 601, 202, 50, 50);
    view.defPosition("n6", 651, 202, 50, 50);
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
    view.defPosition("k5", 501, 252, 50, 50);
    view.defPosition("l5", 551, 252, 50, 50);
    view.defPosition("m5", 601, 252, 50, 50);
    view.defPosition("n5", 651, 252, 50, 50);
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
    view.defPosition("k4", 501, 302, 50, 50);
    view.defPosition("l4", 551, 302, 50, 50);
    view.defPosition("m4", 601, 302, 50, 50);
    view.defPosition("n4", 651, 302, 50, 50);
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
    view.defPosition("k3", 501, 352, 50, 50);
    view.defPosition("l3", 551, 352, 50, 50);
    view.defPosition("m3", 601, 352, 50, 50);
    view.defPosition("n3", 651, 352, 50, 50);
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
    view.defPosition("k2", 501, 402, 50, 50);
    view.defPosition("l2", 551, 402, 50, 50);
    view.defPosition("m2", 601, 402, 50, 50);
    view.defPosition("n2", 651, 402, 50, 50);
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
    view.defPosition("k1", 501, 452, 50, 50);
    view.defPosition("l1", 551, 452, 50, 50);
    view.defPosition("m1", 601, 452, 50, 50);
    view.defPosition("n1", 651, 452, 50, 50);

    view.defPopup("Promote", 132, 85);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
    view.defPopupPosition("X5", 360, 7, 68, 68);
}
