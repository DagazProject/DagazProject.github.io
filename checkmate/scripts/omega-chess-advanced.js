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
    design.checkVersion("omega-fool-extension", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 4, 5, 2, 3, 7, 6]);

    design.addPosition("a9", [111, 1, 10, 0, 110, 11, 0, 103]);
    design.addPosition("b9", [-1, 1, 10, 0, 0, 11, 9, 109]);
    design.addPosition("c9", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("d9", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("e9", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("f9", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("g9", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("h9", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("i9", [-1, 1, 10, 101, 0, 11, 9, 0]);
    design.addPosition("j9", [-1, 99, 10, 93, 100, 0, 9, 0]);
    design.addPosition("a8", [0, 1, 10, -9, -10, 11, 0, 101]);
    design.addPosition("b8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j8", [-1, 0, 10, 89, -10, 0, 9, -11]);
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
    design.addPosition("a1", [0, 1, 10, -9, -10, 11, 24, 0]);
    design.addPosition("b1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i1", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j1", [-1, 0, 10, 0, -10, 18, 9, -11]);
    design.addPosition("a0", [14, 1, 15, -9, -10, 0, 10, 0]);
    design.addPosition("b0", [-1, 1, 0, -9, -10, 0, 14, -11]);
    design.addPosition("c0", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("d0", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("e0", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("f0", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("g0", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("h0", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("i0", [-1, 1, 0, -9, -10, 8, 0, -11]);
    design.addPosition("j0", [-1, 8, 7, 0, -10, 2, 0, -11]);
    design.addPosition("w1", [0, 5, 0, -10, 4, 0, 0, 0]);
    design.addPosition("w2", [5, 0, 0, 0, 6, 0, 0, -2]);
    design.addPosition("w3", [7, 0, 6, 0, 0, 0, -93, 0]);
    design.addPosition("w4", [0, 7, 8, 0, 0, -103, 0, 0]);
    design.addPosition("x1", [0, -14, -4, -24, 0, 0, 0, 0]);
    design.addPosition("x2", [-5, 0, 0, -14, -15, 0, 0, 0]);
    design.addPosition("x3", [0, -5, 0, 0, -7, 0, 0, -8]);
    design.addPosition("x4", [-8, 0, -6, 0, 0, 0, 0, -18]);
    design.addPosition("x5", [-99, 0, 0, 0, -6, 0, -89, 0]);
    design.addPosition("x6", [0, -7, -100, 0, 0, 0, -101, 0]);
    design.addPosition("x7", [-7, 0, -110, 0, 0, -109, 0, 0]);
    design.addPosition("x8", [0, -111, 0, 0, -8, -101, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    design.addZone("last-rank", 2, [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
    design.addZone("third-rank", 1, [70, 71, 72, 73, 74, 75, 76, 77, 78, 79]);
    design.addZone("third-rank", 2, [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);
    design.addZone("restricted-zone", 1, [104, 105, 106, 107, 108, 109, 110, 111]);
    design.addZone("restricted-zone", 2, [104, 105, 106, 107, 108, 109, 110, 111]);

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
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
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
    design.addCommand(4, ZRF.PARAM,	3);	// $4
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
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
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
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	10);
    design.addCommand(6, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-11);
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	1);	// Rook
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	4);	// $5
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	3);	// $4
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.LITERAL,	1);	// Rook
    design.addCommand(10, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	4);	// $5
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	5);	// $6
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	6);	// $7
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PARAM,	2);	// $3
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.IN_ZONE,	2);	// restricted-zone
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 2);
    design.addMove(0, 0, [4], 8);
    design.addMove(0, 1, [4, 4, 4], 8);
    design.addMove(0, 2, [7], 8);
    design.addMove(0, 2, [3], 8);
    design.addMove(0, 3, [1, 4, 4], 8);
    design.addMove(0, 4, [1, 4, 4, 4], 8);
    design.addMove(0, 5, [5, 4, 4, 4], 8);
    design.addMove(0, 3, [0, 4, 4], 8);
    design.addMove(0, 4, [0, 4, 4, 4], 8);
    design.addMove(0, 5, [6, 4, 4, 4], 8);

    design.addPiece("Rook", 1, 30);
    design.addMove(1, 6, [4, 4], 8);
    design.addMove(1, 6, [2, 2], 8);
    design.addMove(1, 6, [0, 0], 8);
    design.addMove(1, 6, [1, 1], 8);

    design.addPiece("Knight", 2, 16);
    design.addMove(2, 7, [7, 4, 7], 8);
    design.addMove(2, 7, [7, 0, 7], 8);
    design.addMove(2, 7, [3, 4, 3], 8);
    design.addMove(2, 7, [3, 1, 3], 8);
    design.addMove(2, 7, [6, 2, 6], 8);
    design.addMove(2, 7, [6, 0, 6], 8);
    design.addMove(2, 7, [5, 2, 5], 8);
    design.addMove(2, 7, [5, 1, 5], 8);

    design.addPiece("Bishop", 3, 16);
    design.addMove(3, 6, [7, 7], 8);
    design.addMove(3, 6, [6, 6], 8);
    design.addMove(3, 6, [3, 3], 8);
    design.addMove(3, 6, [5, 5], 8);

    design.addPiece("Queen", 4, 40);
    design.addMove(4, 6, [4, 4], 8);
    design.addMove(4, 6, [2, 2], 8);
    design.addMove(4, 6, [0, 0], 8);
    design.addMove(4, 6, [1, 1], 8);
    design.addMove(4, 6, [7, 7], 8);
    design.addMove(4, 6, [6, 6], 8);
    design.addMove(4, 6, [3, 3], 8);
    design.addMove(4, 6, [5, 5], 8);

    design.addPiece("King", 5, 1000);
    design.addMove(5, 8, [4], 8);
    design.addMove(5, 8, [2], 8);
    design.addMove(5, 8, [0], 8);
    design.addMove(5, 8, [1], 8);
    design.addMove(5, 8, [7], 8);
    design.addMove(5, 8, [6], 8);
    design.addMove(5, 8, [3], 8);
    design.addMove(5, 8, [5], 8);
    design.addMove(5, 9, [1, 1, 1, 0, 0], 8);
    design.addMove(5, 10, [0, 0, 0, 0, 1, 1, 1], 8);

    design.addPiece("Champion", 6, 24);
    design.addMove(6, 8, [4], 8);
    design.addMove(6, 8, [2], 8);
    design.addMove(6, 8, [0], 8);
    design.addMove(6, 8, [1], 8);
    design.addMove(6, 11, [4, 4], 8);
    design.addMove(6, 11, [7, 7], 8);
    design.addMove(6, 11, [2, 2], 8);
    design.addMove(6, 11, [6, 6], 8);
    design.addMove(6, 11, [0, 0], 8);
    design.addMove(6, 11, [3, 3], 8);
    design.addMove(6, 11, [1, 1], 8);
    design.addMove(6, 11, [5, 5], 8);

    design.addPiece("Wizard", 7, 16);
    design.addMove(7, 8, [7], 8);
    design.addMove(7, 8, [6], 8);
    design.addMove(7, 8, [3], 8);
    design.addMove(7, 8, [5], 8);
    design.addMove(7, 12, [4, 7, 4], 8);
    design.addMove(7, 12, [4, 3, 4], 8);
    design.addMove(7, 12, [2, 6, 2], 8);
    design.addMove(7, 12, [2, 5, 2], 8);
    design.addMove(7, 12, [0, 7, 0], 8);
    design.addMove(7, 12, [0, 6, 0], 8);
    design.addMove(7, 12, [1, 3, 1], 8);
    design.addMove(7, 12, [1, 5, 1], 8);

    design.addPiece("Fool", 8, 40);
    design.addDrop(8, 13, [], 8);
    design.addMove(8, 0, [4], 0);
    design.addMove(8, 1, [4, 4, 4], 0);
    design.addMove(8, 2, [7], 0);
    design.addMove(8, 2, [3], 0);
    design.addMove(8, 3, [1, 4, 4], 0);
    design.addMove(8, 4, [1, 4, 4, 4], 0);
    design.addMove(8, 5, [5, 4, 4, 4], 0);
    design.addMove(8, 3, [0, 4, 4], 0);
    design.addMove(8, 4, [0, 4, 4, 4], 0);
    design.addMove(8, 5, [6, 4, 4, 4], 0);
    design.addMove(8, 6, [4, 4], 1);
    design.addMove(8, 6, [2, 2], 1);
    design.addMove(8, 6, [0, 0], 1);
    design.addMove(8, 6, [1, 1], 1);
    design.addMove(8, 7, [7, 4, 7], 2);
    design.addMove(8, 7, [7, 0, 7], 2);
    design.addMove(8, 7, [3, 4, 3], 2);
    design.addMove(8, 7, [3, 1, 3], 2);
    design.addMove(8, 7, [6, 2, 6], 2);
    design.addMove(8, 7, [6, 0, 6], 2);
    design.addMove(8, 7, [5, 2, 5], 2);
    design.addMove(8, 7, [5, 1, 5], 2);
    design.addMove(8, 6, [7, 7], 3);
    design.addMove(8, 6, [6, 6], 3);
    design.addMove(8, 6, [3, 3], 3);
    design.addMove(8, 6, [5, 5], 3);
    design.addMove(8, 6, [4, 4], 4);
    design.addMove(8, 6, [2, 2], 4);
    design.addMove(8, 6, [0, 0], 4);
    design.addMove(8, 6, [1, 1], 4);
    design.addMove(8, 6, [7, 7], 4);
    design.addMove(8, 6, [6, 6], 4);
    design.addMove(8, 6, [3, 3], 4);
    design.addMove(8, 6, [5, 5], 4);
    design.addMove(8, 8, [4], 5);
    design.addMove(8, 8, [2], 5);
    design.addMove(8, 8, [0], 5);
    design.addMove(8, 8, [1], 5);
    design.addMove(8, 8, [7], 5);
    design.addMove(8, 8, [6], 5);
    design.addMove(8, 8, [3], 5);
    design.addMove(8, 8, [5], 5);
    design.addMove(8, 8, [4], 6);
    design.addMove(8, 8, [2], 6);
    design.addMove(8, 8, [0], 6);
    design.addMove(8, 8, [1], 6);
    design.addMove(8, 11, [4, 4], 6);
    design.addMove(8, 11, [7, 7], 6);
    design.addMove(8, 11, [2, 2], 6);
    design.addMove(8, 11, [6, 6], 6);
    design.addMove(8, 11, [0, 0], 6);
    design.addMove(8, 11, [3, 3], 6);
    design.addMove(8, 11, [1, 1], 6);
    design.addMove(8, 11, [5, 5], 6);
    design.addMove(8, 8, [7], 7);
    design.addMove(8, 8, [6], 7);
    design.addMove(8, 8, [3], 7);
    design.addMove(8, 8, [5], 7);
    design.addMove(8, 12, [4, 7, 4], 7);
    design.addMove(8, 12, [4, 3, 4], 7);
    design.addMove(8, 12, [2, 6, 2], 7);
    design.addMove(8, 12, [2, 5, 2], 7);
    design.addMove(8, 12, [0, 7, 0], 7);
    design.addMove(8, 12, [0, 6, 0], 7);
    design.addMove(8, 12, [1, 3, 1], 7);
    design.addMove(8, 12, [1, 5, 1], 7);

    design.setup("White", "Pawn", 80);
    design.setup("White", "Pawn", 81);
    design.setup("White", "Pawn", 82);
    design.setup("White", "Pawn", 83);
    design.setup("White", "Pawn", 84);
    design.setup("White", "Pawn", 85);
    design.setup("White", "Pawn", 86);
    design.setup("White", "Pawn", 87);
    design.setup("White", "Pawn", 88);
    design.setup("White", "Pawn", 89);
    design.setup("White", "Wizard", 100);
    design.setup("White", "Wizard", 101);
    design.setup("White", "Champion", 90);
    design.setup("White", "Champion", 99);
    design.setup("White", "Rook", 91);
    design.setup("White", "Rook", 98);
    design.setup("White", "Knight", 92);
    design.setup("White", "Knight", 97);
    design.setup("White", "Bishop", 93);
    design.setup("White", "Bishop", 96);
    design.setup("White", "Queen", 94);
    design.setup("White", "King", 95);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Wizard", 102);
    design.setup("Black", "Wizard", 103);
    design.setup("Black", "Champion", 0);
    design.setup("Black", "Champion", 9);
    design.setup("Black", "Rook", 1);
    design.setup("Black", "Rook", 8);
    design.setup("Black", "Knight", 2);
    design.setup("Black", "Knight", 7);
    design.setup("Black", "Bishop", 3);
    design.setup("Black", "Bishop", 6);
    design.setup("Black", "Queen", 4);
    design.setup("Black", "King", 5);
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
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteChampion", "White Champion");
    view.defPiece("BlackChampion", "Black Champion");
    view.defPiece("WhiteWizard", "White Wizard");
    view.defPiece("BlackWizard", "Black Wizard");
    view.defPiece("WhiteFool", "White Fool");
    view.defPiece("BlackFool", "Black Fool");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a9", 51, 51, 50, 50);
    view.defPosition("b9", 101, 51, 50, 50);
    view.defPosition("c9", 151, 51, 50, 50);
    view.defPosition("d9", 201, 51, 50, 50);
    view.defPosition("e9", 251, 51, 50, 50);
    view.defPosition("f9", 301, 51, 50, 50);
    view.defPosition("g9", 351, 51, 50, 50);
    view.defPosition("h9", 401, 51, 50, 50);
    view.defPosition("i9", 451, 51, 50, 50);
    view.defPosition("j9", 501, 51, 50, 50);
    view.defPosition("a8", 51, 101, 50, 50);
    view.defPosition("b8", 101, 101, 50, 50);
    view.defPosition("c8", 151, 101, 50, 50);
    view.defPosition("d8", 201, 101, 50, 50);
    view.defPosition("e8", 251, 101, 50, 50);
    view.defPosition("f8", 301, 101, 50, 50);
    view.defPosition("g8", 351, 101, 50, 50);
    view.defPosition("h8", 401, 101, 50, 50);
    view.defPosition("i8", 451, 101, 50, 50);
    view.defPosition("j8", 501, 101, 50, 50);
    view.defPosition("a7", 51, 151, 50, 50);
    view.defPosition("b7", 101, 151, 50, 50);
    view.defPosition("c7", 151, 151, 50, 50);
    view.defPosition("d7", 201, 151, 50, 50);
    view.defPosition("e7", 251, 151, 50, 50);
    view.defPosition("f7", 301, 151, 50, 50);
    view.defPosition("g7", 351, 151, 50, 50);
    view.defPosition("h7", 401, 151, 50, 50);
    view.defPosition("i7", 451, 151, 50, 50);
    view.defPosition("j7", 501, 151, 50, 50);
    view.defPosition("a6", 51, 201, 50, 50);
    view.defPosition("b6", 101, 201, 50, 50);
    view.defPosition("c6", 151, 201, 50, 50);
    view.defPosition("d6", 201, 201, 50, 50);
    view.defPosition("e6", 251, 201, 50, 50);
    view.defPosition("f6", 301, 201, 50, 50);
    view.defPosition("g6", 351, 201, 50, 50);
    view.defPosition("h6", 401, 201, 50, 50);
    view.defPosition("i6", 451, 201, 50, 50);
    view.defPosition("j6", 501, 201, 50, 50);
    view.defPosition("a5", 51, 251, 50, 50);
    view.defPosition("b5", 101, 251, 50, 50);
    view.defPosition("c5", 151, 251, 50, 50);
    view.defPosition("d5", 201, 251, 50, 50);
    view.defPosition("e5", 251, 251, 50, 50);
    view.defPosition("f5", 301, 251, 50, 50);
    view.defPosition("g5", 351, 251, 50, 50);
    view.defPosition("h5", 401, 251, 50, 50);
    view.defPosition("i5", 451, 251, 50, 50);
    view.defPosition("j5", 501, 251, 50, 50);
    view.defPosition("a4", 51, 301, 50, 50);
    view.defPosition("b4", 101, 301, 50, 50);
    view.defPosition("c4", 151, 301, 50, 50);
    view.defPosition("d4", 201, 301, 50, 50);
    view.defPosition("e4", 251, 301, 50, 50);
    view.defPosition("f4", 301, 301, 50, 50);
    view.defPosition("g4", 351, 301, 50, 50);
    view.defPosition("h4", 401, 301, 50, 50);
    view.defPosition("i4", 451, 301, 50, 50);
    view.defPosition("j4", 501, 301, 50, 50);
    view.defPosition("a3", 51, 351, 50, 50);
    view.defPosition("b3", 101, 351, 50, 50);
    view.defPosition("c3", 151, 351, 50, 50);
    view.defPosition("d3", 201, 351, 50, 50);
    view.defPosition("e3", 251, 351, 50, 50);
    view.defPosition("f3", 301, 351, 50, 50);
    view.defPosition("g3", 351, 351, 50, 50);
    view.defPosition("h3", 401, 351, 50, 50);
    view.defPosition("i3", 451, 351, 50, 50);
    view.defPosition("j3", 501, 351, 50, 50);
    view.defPosition("a2", 51, 401, 50, 50);
    view.defPosition("b2", 101, 401, 50, 50);
    view.defPosition("c2", 151, 401, 50, 50);
    view.defPosition("d2", 201, 401, 50, 50);
    view.defPosition("e2", 251, 401, 50, 50);
    view.defPosition("f2", 301, 401, 50, 50);
    view.defPosition("g2", 351, 401, 50, 50);
    view.defPosition("h2", 401, 401, 50, 50);
    view.defPosition("i2", 451, 401, 50, 50);
    view.defPosition("j2", 501, 401, 50, 50);
    view.defPosition("a1", 51, 451, 50, 50);
    view.defPosition("b1", 101, 451, 50, 50);
    view.defPosition("c1", 151, 451, 50, 50);
    view.defPosition("d1", 201, 451, 50, 50);
    view.defPosition("e1", 251, 451, 50, 50);
    view.defPosition("f1", 301, 451, 50, 50);
    view.defPosition("g1", 351, 451, 50, 50);
    view.defPosition("h1", 401, 451, 50, 50);
    view.defPosition("i1", 451, 451, 50, 50);
    view.defPosition("j1", 501, 451, 50, 50);
    view.defPosition("a0", 51, 501, 50, 50);
    view.defPosition("b0", 101, 501, 50, 50);
    view.defPosition("c0", 151, 501, 50, 50);
    view.defPosition("d0", 201, 501, 50, 50);
    view.defPosition("e0", 251, 501, 50, 50);
    view.defPosition("f0", 301, 501, 50, 50);
    view.defPosition("g0", 351, 501, 50, 50);
    view.defPosition("h0", 401, 501, 50, 50);
    view.defPosition("i0", 451, 501, 50, 50);
    view.defPosition("j0", 501, 501, 50, 50);
    view.defPosition("w1", 1, 553, 50, 50);
    view.defPosition("w2", 553, 553, 50, 50);
    view.defPosition("w3", 553, 1, 50, 50);
    view.defPosition("w4", 1, 1, 50, 50);
    view.defPosition("x1", 1, 503, 50, 50);
    view.defPosition("x2", 51, 553, 50, 50);
    view.defPosition("x3", 503, 553, 50, 50);
    view.defPosition("x4", 553, 503, 50, 50);
    view.defPosition("x5", 553, 51, 50, 50);
    view.defPosition("x6", 503, 1, 50, 50);
    view.defPosition("x7", 51, 1, 50, 50);
    view.defPosition("x8", 1, 51, 50, 50);

    view.defPopup("Promote", 214, 120);
    view.defPopupPosition("Z1", 5, 7, 50, 50);
    view.defPopupPosition("Z2", 60, 7, 50, 50);
    view.defPopupPosition("Z3", 115, 7, 50, 50);
    view.defPopupPosition("Z4", 5, 62, 50, 50);
    view.defPopupPosition("Z5", 60, 62, 50, 50);
    view.defPopupPosition("Z6", 115, 62, 50, 50);
}
