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

    design.addPosition("a10", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("c10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("d10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("e10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("i10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("j10", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("k10", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("a9", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j9", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k9", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a8", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j8", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k8", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a7", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j7", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k7", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a6", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k6", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a5", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j5", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k5", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a4", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j4", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k4", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a3", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j3", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k3", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a2", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k2", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("k1", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X8", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addZone("last-rank", 2, [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109]);
    design.addZone("third-rank", 1, [77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87]);
    design.addZone("third-rank", 2, [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]);

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
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
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
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.MODE,	1);	// enemy-type
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.MODE,	2);	// friend-type
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.IF,	4);
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.JUMP,	-5);
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.MODE,	1);	// enemy-type
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	4);
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.JUMP,	-5);
    design.addCommand(12, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.MODE,	2);	// friend-type
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.PARAM,	2);	// $3
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	4);
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.JUMP,	-5);
    design.addCommand(14, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.PARAM,	2);	// $3
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	4);
    design.addCommand(16, ZRF.PARAM,	1);	// $2
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.JUMP,	-5);
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 2, [6], 0);
    design.addMove(0, 2, [5], 0);
    design.addMove(0, 3, [3, 7, 7], 0);
    design.addMove(0, 3, [4, 7, 7], 0);

    design.addPiece("Rook", 1);
    design.addMove(1, 4, [7, 7], 0);
    design.addMove(1, 4, [1, 1], 0);
    design.addMove(1, 4, [4, 4], 0);
    design.addMove(1, 4, [3, 3], 0);

    design.addPiece("Knight", 2);
    design.addMove(2, 5, [7, 6], 0);
    design.addMove(2, 5, [7, 5], 0);
    design.addMove(2, 5, [1, 2], 0);
    design.addMove(2, 5, [1, 0], 0);
    design.addMove(2, 5, [4, 6], 0);
    design.addMove(2, 5, [4, 2], 0);
    design.addMove(2, 5, [3, 5], 0);
    design.addMove(2, 5, [3, 0], 0);

    design.addPiece("Bishop", 3);
    design.addMove(3, 4, [6, 6], 0);
    design.addMove(3, 4, [2, 2], 0);
    design.addMove(3, 4, [5, 5], 0);
    design.addMove(3, 4, [0, 0], 0);

    design.addPiece("Queen", 4);
    design.addMove(4, 4, [7, 7], 0);
    design.addMove(4, 4, [1, 1], 0);
    design.addMove(4, 4, [4, 4], 0);
    design.addMove(4, 4, [3, 3], 0);
    design.addMove(4, 4, [6, 6], 0);
    design.addMove(4, 4, [2, 2], 0);
    design.addMove(4, 4, [5, 5], 0);
    design.addMove(4, 4, [0, 0], 0);

    design.addPiece("KnightK", 5);
    design.addMove(5, 5, [7, 6], 0);
    design.addMove(5, 5, [7, 5], 0);
    design.addMove(5, 5, [1, 2], 0);
    design.addMove(5, 5, [1, 0], 0);
    design.addMove(5, 5, [4, 6], 0);
    design.addMove(5, 5, [4, 2], 0);
    design.addMove(5, 5, [3, 5], 0);
    design.addMove(5, 5, [3, 0], 0);
    design.addMove(5, 6, [7], 0);
    design.addMove(5, 6, [1], 0);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 6, [3], 0);
    design.addMove(5, 6, [6], 0);
    design.addMove(5, 6, [2], 0);
    design.addMove(5, 6, [5], 0);
    design.addMove(5, 6, [0], 0);

    design.addPiece("BishopK", 6);
    design.addMove(6, 4, [6, 6], 0);
    design.addMove(6, 4, [2, 2], 0);
    design.addMove(6, 4, [5, 5], 0);
    design.addMove(6, 4, [0, 0], 0);
    design.addMove(6, 6, [7], 0);
    design.addMove(6, 6, [1], 0);
    design.addMove(6, 6, [4], 0);
    design.addMove(6, 6, [3], 0);

    design.addPiece("RookK", 7);
    design.addMove(7, 4, [7, 7], 0);
    design.addMove(7, 4, [1, 1], 0);
    design.addMove(7, 4, [4, 4], 0);
    design.addMove(7, 4, [3, 3], 0);
    design.addMove(7, 6, [6], 0);
    design.addMove(7, 6, [2], 0);
    design.addMove(7, 6, [5], 0);
    design.addMove(7, 6, [0], 0);

    design.addPiece("Angel", 8);
    design.addMove(8, 7, [7, 7], 0);
    design.addMove(8, 7, [1, 1], 0);
    design.addMove(8, 7, [4, 4], 0);
    design.addMove(8, 7, [3, 3], 0);
    design.addMove(8, 7, [6, 6], 0);
    design.addMove(8, 7, [2, 2], 0);
    design.addMove(8, 7, [5, 5], 0);
    design.addMove(8, 7, [0, 0], 0);
    design.addMove(8, 8, [7, 7, 6], 0);
    design.addMove(8, 8, [7, 7, 5], 0);
    design.addMove(8, 8, [1, 1, 2], 0);
    design.addMove(8, 8, [1, 1, 0], 0);
    design.addMove(8, 8, [4, 4, 6], 0);
    design.addMove(8, 8, [4, 4, 2], 0);
    design.addMove(8, 8, [3, 3, 5], 0);
    design.addMove(8, 8, [3, 3, 0], 0);
    design.addMove(8, 9, [7, 7, 6], 0);
    design.addMove(8, 9, [7, 7, 5], 0);
    design.addMove(8, 9, [1, 1, 2], 0);
    design.addMove(8, 9, [1, 1, 0], 0);
    design.addMove(8, 9, [4, 4, 6], 0);
    design.addMove(8, 9, [4, 4, 2], 0);
    design.addMove(8, 9, [3, 3, 5], 0);
    design.addMove(8, 9, [3, 3, 0], 0);
    design.addMove(8, 10, [7, 7, 6], 0);
    design.addMove(8, 10, [7, 7, 5], 0);
    design.addMove(8, 10, [1, 1, 2], 0);
    design.addMove(8, 10, [1, 1, 0], 0);
    design.addMove(8, 10, [4, 4, 6], 0);
    design.addMove(8, 10, [4, 4, 2], 0);
    design.addMove(8, 10, [3, 3, 5], 0);
    design.addMove(8, 10, [3, 3, 0], 0);
    design.addMove(8, 11, [7, 7], 0);
    design.addMove(8, 11, [1, 1], 0);
    design.addMove(8, 11, [4, 4], 0);
    design.addMove(8, 11, [3, 3], 0);
    design.addMove(8, 11, [6, 6], 0);
    design.addMove(8, 11, [2, 2], 0);
    design.addMove(8, 11, [5, 5], 0);
    design.addMove(8, 11, [0, 0], 0);
    design.addMove(8, 12, [7, 7], 0);
    design.addMove(8, 12, [1, 1], 0);
    design.addMove(8, 12, [4, 4], 0);
    design.addMove(8, 12, [3, 3], 0);
    design.addMove(8, 12, [6, 6], 0);
    design.addMove(8, 12, [2, 2], 0);
    design.addMove(8, 12, [5, 5], 0);
    design.addMove(8, 12, [0, 0], 0);
    design.addMove(8, 13, [7, 7, 6], 1);
    design.addMove(8, 13, [7, 7, 5], 1);
    design.addMove(8, 13, [1, 1, 2], 1);
    design.addMove(8, 13, [1, 1, 0], 1);
    design.addMove(8, 13, [4, 4, 6], 1);
    design.addMove(8, 13, [4, 4, 2], 1);
    design.addMove(8, 13, [3, 3, 5], 1);
    design.addMove(8, 13, [3, 3, 0], 1);
    design.addMove(8, 14, [7, 7], 1);
    design.addMove(8, 14, [1, 1], 1);
    design.addMove(8, 14, [4, 4], 1);
    design.addMove(8, 14, [3, 3], 1);
    design.addMove(8, 14, [6, 6], 1);
    design.addMove(8, 14, [2, 2], 1);
    design.addMove(8, 14, [5, 5], 1);
    design.addMove(8, 14, [0, 0], 1);
    design.addMove(8, 15, [7, 7, 6], 2);
    design.addMove(8, 15, [7, 7, 5], 2);
    design.addMove(8, 15, [1, 1, 2], 2);
    design.addMove(8, 15, [1, 1, 0], 2);
    design.addMove(8, 15, [4, 4, 6], 2);
    design.addMove(8, 15, [4, 4, 2], 2);
    design.addMove(8, 15, [3, 3, 5], 2);
    design.addMove(8, 15, [3, 3, 0], 2);
    design.addMove(8, 16, [7, 7], 2);
    design.addMove(8, 16, [1, 1], 2);
    design.addMove(8, 16, [4, 4], 2);
    design.addMove(8, 16, [3, 3], 2);
    design.addMove(8, 16, [6, 6], 2);
    design.addMove(8, 16, [2, 2], 2);
    design.addMove(8, 16, [5, 5], 2);
    design.addMove(8, 16, [0, 0], 2);

    design.addPiece("King", 9);
    design.addMove(9, 6, [7], 0);
    design.addMove(9, 6, [1], 0);
    design.addMove(9, 6, [4], 0);
    design.addMove(9, 6, [3], 0);
    design.addMove(9, 6, [6], 0);
    design.addMove(9, 6, [2], 0);
    design.addMove(9, 6, [5], 0);
    design.addMove(9, 6, [0], 0);

    design.setup("White", "Pawn", 88);
    design.setup("White", "Pawn", 89);
    design.setup("White", "Pawn", 90);
    design.setup("White", "Pawn", 91);
    design.setup("White", "Pawn", 92);
    design.setup("White", "Pawn", 93);
    design.setup("White", "Pawn", 94);
    design.setup("White", "Pawn", 95);
    design.setup("White", "Pawn", 96);
    design.setup("White", "Pawn", 97);
    design.setup("White", "Pawn", 98);
    design.setup("White", "Rook", 99);
    design.setup("White", "Knight", 100);
    design.setup("White", "Knight", 103);
    design.setup("White", "Bishop", 101);
    design.setup("White", "Bishop", 102);
    design.setup("White", "Queen", 104);
    design.setup("White", "Angel", 106);
    design.setup("White", "BishopK", 107);
    design.setup("White", "KnightK", 108);
    design.setup("White", "RookK", 109);
    design.setup("White", "King", 105);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 4);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 3);
    design.setup("Black", "Queen", 5);
    design.setup("Black", "Angel", 7);
    design.setup("Black", "BishopK", 8);
    design.setup("Black", "KnightK", 9);
    design.setup("Black", "RookK", 10);
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
    view.defPiece("WhiteKnightK", "White KnightK");
    view.defPiece("BlackKnightK", "Black KnightK");
    view.defPiece("WhiteBishopK", "White BishopK");
    view.defPiece("BlackBishopK", "Black BishopK");
    view.defPiece("WhiteRookK", "White RookK");
    view.defPiece("BlackRookK", "Black RookK");
    view.defPiece("WhiteAngel", "White Angel");
    view.defPiece("BlackAngel", "Black Angel");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a10", 2, 2, 73, 73);
    view.defPosition("b10", 74, 2, 73, 73);
    view.defPosition("c10", 146, 2, 73, 73);
    view.defPosition("d10", 218, 2, 73, 73);
    view.defPosition("e10", 290, 2, 73, 73);
    view.defPosition("f10", 362, 2, 73, 73);
    view.defPosition("g10", 434, 2, 73, 73);
    view.defPosition("h10", 506, 2, 73, 73);
    view.defPosition("i10", 578, 2, 73, 73);
    view.defPosition("j10", 650, 2, 73, 73);
    view.defPosition("k10", 722, 2, 73, 73);
    view.defPosition("a9", 2, 74, 73, 73);
    view.defPosition("b9", 74, 74, 73, 73);
    view.defPosition("c9", 146, 74, 73, 73);
    view.defPosition("d9", 218, 74, 73, 73);
    view.defPosition("e9", 290, 74, 73, 73);
    view.defPosition("f9", 362, 74, 73, 73);
    view.defPosition("g9", 434, 74, 73, 73);
    view.defPosition("h9", 506, 74, 73, 73);
    view.defPosition("i9", 578, 74, 73, 73);
    view.defPosition("j9", 650, 74, 73, 73);
    view.defPosition("k9", 722, 74, 73, 73);
    view.defPosition("a8", 2, 146, 73, 73);
    view.defPosition("b8", 74, 146, 73, 73);
    view.defPosition("c8", 146, 146, 73, 73);
    view.defPosition("d8", 218, 146, 73, 73);
    view.defPosition("e8", 290, 146, 73, 73);
    view.defPosition("f8", 362, 146, 73, 73);
    view.defPosition("g8", 434, 146, 73, 73);
    view.defPosition("h8", 506, 146, 73, 73);
    view.defPosition("i8", 578, 146, 73, 73);
    view.defPosition("j8", 650, 146, 73, 73);
    view.defPosition("k8", 722, 146, 73, 73);
    view.defPosition("a7", 2, 218, 73, 73);
    view.defPosition("b7", 74, 218, 73, 73);
    view.defPosition("c7", 146, 218, 73, 73);
    view.defPosition("d7", 218, 218, 73, 73);
    view.defPosition("e7", 290, 218, 73, 73);
    view.defPosition("f7", 362, 218, 73, 73);
    view.defPosition("g7", 434, 218, 73, 73);
    view.defPosition("h7", 506, 218, 73, 73);
    view.defPosition("i7", 578, 218, 73, 73);
    view.defPosition("j7", 650, 218, 73, 73);
    view.defPosition("k7", 722, 218, 73, 73);
    view.defPosition("a6", 2, 290, 73, 73);
    view.defPosition("b6", 74, 290, 73, 73);
    view.defPosition("c6", 146, 290, 73, 73);
    view.defPosition("d6", 218, 290, 73, 73);
    view.defPosition("e6", 290, 290, 73, 73);
    view.defPosition("f6", 362, 290, 73, 73);
    view.defPosition("g6", 434, 290, 73, 73);
    view.defPosition("h6", 506, 290, 73, 73);
    view.defPosition("i6", 578, 290, 73, 73);
    view.defPosition("j6", 650, 290, 73, 73);
    view.defPosition("k6", 722, 290, 73, 73);
    view.defPosition("a5", 2, 362, 73, 73);
    view.defPosition("b5", 74, 362, 73, 73);
    view.defPosition("c5", 146, 362, 73, 73);
    view.defPosition("d5", 218, 362, 73, 73);
    view.defPosition("e5", 290, 362, 73, 73);
    view.defPosition("f5", 362, 362, 73, 73);
    view.defPosition("g5", 434, 362, 73, 73);
    view.defPosition("h5", 506, 362, 73, 73);
    view.defPosition("i5", 578, 362, 73, 73);
    view.defPosition("j5", 650, 362, 73, 73);
    view.defPosition("k5", 722, 362, 73, 73);
    view.defPosition("a4", 2, 434, 73, 73);
    view.defPosition("b4", 74, 434, 73, 73);
    view.defPosition("c4", 146, 434, 73, 73);
    view.defPosition("d4", 218, 434, 73, 73);
    view.defPosition("e4", 290, 434, 73, 73);
    view.defPosition("f4", 362, 434, 73, 73);
    view.defPosition("g4", 434, 434, 73, 73);
    view.defPosition("h4", 506, 434, 73, 73);
    view.defPosition("i4", 578, 434, 73, 73);
    view.defPosition("j4", 650, 434, 73, 73);
    view.defPosition("k4", 722, 434, 73, 73);
    view.defPosition("a3", 2, 506, 73, 73);
    view.defPosition("b3", 74, 506, 73, 73);
    view.defPosition("c3", 146, 506, 73, 73);
    view.defPosition("d3", 218, 506, 73, 73);
    view.defPosition("e3", 290, 506, 73, 73);
    view.defPosition("f3", 362, 506, 73, 73);
    view.defPosition("g3", 434, 506, 73, 73);
    view.defPosition("h3", 506, 506, 73, 73);
    view.defPosition("i3", 578, 506, 73, 73);
    view.defPosition("j3", 650, 506, 73, 73);
    view.defPosition("k3", 722, 506, 73, 73);
    view.defPosition("a2", 2, 578, 73, 73);
    view.defPosition("b2", 74, 578, 73, 73);
    view.defPosition("c2", 146, 578, 73, 73);
    view.defPosition("d2", 218, 578, 73, 73);
    view.defPosition("e2", 290, 578, 73, 73);
    view.defPosition("f2", 362, 578, 73, 73);
    view.defPosition("g2", 434, 578, 73, 73);
    view.defPosition("h2", 506, 578, 73, 73);
    view.defPosition("i2", 578, 578, 73, 73);
    view.defPosition("j2", 650, 578, 73, 73);
    view.defPosition("k2", 722, 578, 73, 73);
    view.defPosition("a1", 2, 650, 73, 73);
    view.defPosition("b1", 74, 650, 73, 73);
    view.defPosition("c1", 146, 650, 73, 73);
    view.defPosition("d1", 218, 650, 73, 73);
    view.defPosition("e1", 290, 650, 73, 73);
    view.defPosition("f1", 362, 650, 73, 73);
    view.defPosition("g1", 434, 650, 73, 73);
    view.defPosition("h1", 506, 650, 73, 73);
    view.defPosition("i1", 578, 650, 73, 73);
    view.defPosition("j1", 650, 650, 73, 73);
    view.defPosition("k1", 722, 650, 73, 73);

    view.defPopup("Promote", 107, 100);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
    view.defPopupPosition("X6", 360, 7, 68, 68);
    view.defPopupPosition("X7", 430, 7, 68, 68);
    view.defPopupPosition("X8", 500, 7, 68, 68);
}
