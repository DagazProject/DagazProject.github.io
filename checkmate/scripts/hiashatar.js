Dagaz.Model.WIDTH  = 10;
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

    design.addPosition("a10", [0, 1, 10, 0, 0, 11, 0, 0]);
    design.addPosition("b10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("c10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("d10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("e10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("f10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("g10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("h10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("i10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("j10", [-1, 0, 10, 0, 0, 0, 9, 0]);
    design.addPosition("a9", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j9", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a8", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j8", [-1, 0, 10, 0, -10, 0, 9, -11]);
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
    design.addPosition("a1", [0, 1, 0, -9, -10, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("c1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("d1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("e1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("f1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("g1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("h1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("i1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("j1", [-1, 0, 0, 0, -10, 0, 0, -11]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    design.addZone("last-rank", 2, [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
    design.addZone("third-rank", 1, [70, 71, 72, 73, 74, 75, 76, 77, 78, 79]);
    design.addZone("third-rank", 2, [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]);

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
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	4);	// $5
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	5);	// $6
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	6);	// $7
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	7);	// $8
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	8);	// $9
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	5);	// Hia
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	9);	// $10
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
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	5);	// $6
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	6);	// $7
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	7);	// $8
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	8);	// $9
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	9);	// $10
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	10);	// $11
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	11);	// $12
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	12);	// $13
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	13);	// $14
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	14);	// $15
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	15);	// $16
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	16);	// $17
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	17);	// $18
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	5);	// Hia
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	18);	// $19
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
    design.addCommand(7, ZRF.IF,	119);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	5);	// $6
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	6);	// $7
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	7);	// $8
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	8);	// $9
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	5);	// Hia
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.PARAM,	9);	// $10
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-120);
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
    design.addCommand(9, ZRF.LITERAL,	6);	// King
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FORK,	3);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	4);	// $5
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	5);	// $6
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	6);	// $7
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	7);	// $8
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	12);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	8);	// $9
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	5);
    design.addCommand(9, ZRF.LITERAL,	5);	// Hia
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	9);	// $10
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	6);	// King
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 2);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [4, 4, 7, 0, 6, 2, 5, 1, 3, 4], 0);
    design.addMove(0, 2, [4, 4, 7, 0, 6, 2, 5, 1, 3, 4, 4, 7, 0, 6, 2, 5, 1, 3, 4], 0);
    design.addMove(0, 3, [7], 0);
    design.addMove(0, 3, [3], 0);
    design.addMove(0, 4, [1, 4, 4], 0);
    design.addMove(0, 5, [1, 4, 4, 4], 0);
    design.addMove(0, 6, [5, 4, 4, 4], 0);
    design.addMove(0, 4, [0, 4, 4], 0);
    design.addMove(0, 5, [0, 4, 4, 4], 0);
    design.addMove(0, 6, [6, 4, 4, 4], 0);

    design.addPiece("Rook", 1, 30);
    design.addMove(1, 7, [4, 4, 7, 0, 6, 2, 5, 1, 3, 4], 0);
    design.addMove(1, 7, [2, 4, 7, 0, 6, 2, 5, 1, 3, 2], 0);
    design.addMove(1, 7, [0, 4, 7, 0, 6, 2, 5, 1, 3, 0], 0);
    design.addMove(1, 7, [1, 4, 7, 0, 6, 2, 5, 1, 3, 1], 0);

    design.addPiece("Knight", 2, 16);
    design.addMove(2, 8, [4, 7], 0);
    design.addMove(2, 8, [4, 3], 0);
    design.addMove(2, 8, [2, 6], 0);
    design.addMove(2, 8, [2, 5], 0);
    design.addMove(2, 8, [0, 7], 0);
    design.addMove(2, 8, [0, 6], 0);
    design.addMove(2, 8, [1, 3], 0);
    design.addMove(2, 8, [1, 5], 0);

    design.addPiece("Bishop", 3, 16);
    design.addMove(3, 7, [7, 4, 7, 0, 6, 2, 5, 1, 3, 7], 0);
    design.addMove(3, 7, [6, 4, 7, 0, 6, 2, 5, 1, 3, 6], 0);
    design.addMove(3, 7, [3, 4, 7, 0, 6, 2, 5, 1, 3, 3], 0);
    design.addMove(3, 7, [5, 4, 7, 0, 6, 2, 5, 1, 3, 5], 0);

    design.addPiece("Queen", 4, 40);
    design.addMove(4, 7, [4, 4, 7, 0, 6, 2, 5, 1, 3, 4], 0);
    design.addMove(4, 7, [2, 4, 7, 0, 6, 2, 5, 1, 3, 2], 0);
    design.addMove(4, 7, [0, 4, 7, 0, 6, 2, 5, 1, 3, 0], 0);
    design.addMove(4, 7, [1, 4, 7, 0, 6, 2, 5, 1, 3, 1], 0);
    design.addMove(4, 7, [7, 4, 7, 0, 6, 2, 5, 1, 3, 7], 0);
    design.addMove(4, 7, [6, 4, 7, 0, 6, 2, 5, 1, 3, 6], 0);
    design.addMove(4, 7, [3, 4, 7, 0, 6, 2, 5, 1, 3, 3], 0);
    design.addMove(4, 7, [5, 4, 7, 0, 6, 2, 5, 1, 3, 5], 0);

    design.addPiece("Hia", 5, 20);
    design.addMove(5, 9, [4, 4, 7, 0, 6, 2, 5, 1, 3, 4], 0);
    design.addMove(5, 9, [2, 4, 7, 0, 6, 2, 5, 1, 3, 2], 0);
    design.addMove(5, 9, [0, 4, 7, 0, 6, 2, 5, 1, 3, 0], 0);
    design.addMove(5, 9, [1, 4, 7, 0, 6, 2, 5, 1, 3, 1], 0);
    design.addMove(5, 9, [7, 4, 7, 0, 6, 2, 5, 1, 3, 7], 0);
    design.addMove(5, 9, [6, 4, 7, 0, 6, 2, 5, 1, 3, 6], 0);
    design.addMove(5, 9, [3, 4, 7, 0, 6, 2, 5, 1, 3, 3], 0);
    design.addMove(5, 9, [5, 4, 7, 0, 6, 2, 5, 1, 3, 5], 0);

    design.addPiece("King", 6, 1000);
    design.addMove(6, 10, [4], 0);
    design.addMove(6, 10, [2], 0);
    design.addMove(6, 10, [0], 0);
    design.addMove(6, 10, [1], 0);
    design.addMove(6, 10, [7], 0);
    design.addMove(6, 10, [6], 0);
    design.addMove(6, 10, [3], 0);
    design.addMove(6, 10, [5], 0);

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
    design.setup("White", "Rook", 90);
    design.setup("White", "Rook", 99);
    design.setup("White", "Knight", 91);
    design.setup("White", "Knight", 98);
    design.setup("White", "Bishop", 92);
    design.setup("White", "Bishop", 97);
    design.setup("White", "Hia", 93);
    design.setup("White", "Hia", 96);
    design.setup("White", "Queen", 95);
    design.setup("White", "King", 94);
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
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 9);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 8);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 7);
    design.setup("Black", "Hia", 3);
    design.setup("Black", "Hia", 6);
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
    view.defPiece("WhiteHia", "White Hia");
    view.defPiece("BlackHia", "Black Hia");
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

    view.defPopup("Promote", 68, 130);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
    view.defPopupPosition("X5", 290, 7, 68, 68);
}
