Dagaz.View.SHIFT_X = -2;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("abalone-extension", "true");
    design.checkVersion("abalone-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("sw");
    design.addDirection("bc");
    design.addDirection("wc");

    design.addPlayer("Black", [1, 0, 5, 4, 3, 2, 6, 7]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 7, 6]);

    design.addPosition("a9", [0, 1, 0, 10, 0, 9, 92, 81]);
    design.addPosition("b9", [-1, 1, 0, 10, 0, 9, 0, 0]);
    design.addPosition("c9", [-1, 1, 0, 10, 0, 9, 0, 0]);
    design.addPosition("d9", [-1, 1, 0, 10, 0, 9, 0, 0]);
    design.addPosition("e9", [-1, 0, 0, 10, 0, 9, 0, 0]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, -9, 10, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e8", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f8", [-1, 0, 0, 10, -10, 9, 0, 0]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, -9, 10, 0, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f7", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g7", [-1, 0, 0, 10, -10, 9, 0, 0]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, -9, 10, 0, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g6", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h6", [-1, 0, 0, 10, -10, 9, 0, 0]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, -9, 10, 0, 0, 0, 0]);
    design.addPosition("b5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("c5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h5", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i5", [-1, 0, 0, 0, -10, 9, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 1, -9, 10, -10, 0, 0, 0]);
    design.addPosition("c4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("d4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h4", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i4", [-1, 0, -9, 0, -10, 9, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 1, -9, 10, -10, 0, 0, 0]);
    design.addPosition("d3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("e3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h3", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i3", [-1, 0, -9, 0, -10, 9, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 1, -9, 10, -10, 0, 0, 0]);
    design.addPosition("e2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("f2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("g2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("h2", [-1, 1, -9, 10, -10, 9, 0, 0]);
    design.addPosition("i2", [-1, 0, -9, 0, -10, 9, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("f1", [-1, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("g1", [-1, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("h1", [-1, 1, -9, 0, -10, 0, 0, 0]);
    design.addPosition("i1", [-1, 0, -9, 0, -10, 0, 0, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("e10", [0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("f10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a0", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("c0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("d0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("e0", [0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("f0", [0, 0, 0, 0, 0, 0, -1, 0]);

    design.addZone("off-zone", 2, [87, 88, 89, 90, 91, 92, 81, 82, 83, 84, 85, 86]);
    design.addZone("off-zone", 1, [87, 88, 89, 90, 91, 92, 81, 82, 83, 84, 85, 86]);

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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-14);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-14);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-14);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-14);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-14);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.LITERAL,	1);	// true
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.LITERAL,	0);	// false
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-14);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 2, [0, 0], 0);
    design.addMove(0, 3, [2, 2], 0);
    design.addMove(0, 4, [5, 5], 0);
    design.addMove(0, 5, [4, 4], 0);
    design.addMove(0, 6, [3, 3], 0);
    design.addMove(0, 7, [4, 0, 4], 0);
    design.addMove(0, 7, [2, 0, 2], 0);
    design.addMove(0, 7, [5, 0, 5], 0);
    design.addMove(0, 7, [3, 0, 3], 0);
    design.addMove(0, 8, [4, 0, 4, 0, 4], 0);
    design.addMove(0, 8, [2, 0, 2, 0, 2], 0);
    design.addMove(0, 8, [5, 0, 5, 0, 5], 0);
    design.addMove(0, 8, [3, 0, 3, 0, 3], 0);
    design.addMove(0, 7, [2, 4, 2], 0);
    design.addMove(0, 7, [1, 4, 1], 0);
    design.addMove(0, 7, [5, 4, 5], 0);
    design.addMove(0, 7, [0, 4, 0], 0);
    design.addMove(0, 8, [2, 4, 2, 4, 2], 0);
    design.addMove(0, 8, [1, 4, 1, 4, 1], 0);
    design.addMove(0, 8, [5, 4, 5, 4, 5], 0);
    design.addMove(0, 8, [0, 4, 0, 4, 0], 0);
    design.addMove(0, 7, [4, 2, 4], 0);
    design.addMove(0, 7, [0, 2, 0], 0);
    design.addMove(0, 7, [3, 2, 3], 0);
    design.addMove(0, 7, [1, 2, 1], 0);
    design.addMove(0, 8, [4, 2, 4, 2, 4], 0);
    design.addMove(0, 8, [0, 2, 0, 2, 0], 0);
    design.addMove(0, 8, [3, 2, 3, 2, 3], 0);
    design.addMove(0, 8, [1, 2, 1, 2, 1], 0);

    design.addPiece("Captured", 1);

    design.setupSelector(60);

    design.setup("White", "Stone", 0, 1);
    design.setup("White", "Stone", 1, 1);
    design.setup("White", "Stone", 2, 1);
    design.setup("White", "Stone", 3, 1);
    design.setup("White", "Stone", 4, 1);
    design.setup("White", "Stone", 9, 1);
    design.setup("White", "Stone", 10, 1);
    design.setup("White", "Stone", 11, 1);
    design.setup("White", "Stone", 12, 1);
    design.setup("White", "Stone", 13, 1);
    design.setup("White", "Stone", 14, 1);
    design.setup("White", "Stone", 20, 1);
    design.setup("White", "Stone", 21, 1);
    design.setup("White", "Stone", 22, 1);
    design.setup("Black", "Stone", 76, 1);
    design.setup("Black", "Stone", 77, 1);
    design.setup("Black", "Stone", 78, 1);
    design.setup("Black", "Stone", 79, 1);
    design.setup("Black", "Stone", 80, 1);
    design.setup("Black", "Stone", 66, 1);
    design.setup("Black", "Stone", 67, 1);
    design.setup("Black", "Stone", 68, 1);
    design.setup("Black", "Stone", 69, 1);
    design.setup("Black", "Stone", 70, 1);
    design.setup("Black", "Stone", 71, 1);
    design.setup("Black", "Stone", 58, 1);
    design.setup("Black", "Stone", 59, 1);
    design.setup("Black", "Stone", 60, 1);

    design.setup("Black", "Stone", 11, 2);
    design.setup("Black", "Stone", 12, 2);
    design.setup("Black", "Stone", 20, 2);
    design.setup("Black", "Stone", 22, 2);
    design.setup("Black", "Stone", 49, 2);
    design.setup("Black", "Stone", 50, 2);
    design.setup("Black", "Stone", 57, 2);
    design.setup("Black", "Stone", 59, 2);
    design.setup("Black", "Stone", 61, 2);
    design.setup("Black", "Stone", 67, 2);
    design.setup("Black", "Stone", 70, 2);
    design.setup("Black", "Stone", 76, 2);
    design.setup("Black", "Stone", 78, 2);
    design.setup("Black", "Stone", 80, 2);
    design.setup("White", "Stone", 68, 2);
    design.setup("White", "Stone", 69, 2);
    design.setup("White", "Stone", 58, 2);
    design.setup("White", "Stone", 60, 2);
    design.setup("White", "Stone", 0, 2);
    design.setup("White", "Stone", 2, 2);
    design.setup("White", "Stone", 4, 2);
    design.setup("White", "Stone", 10, 2);
    design.setup("White", "Stone", 13, 2);
    design.setup("White", "Stone", 19, 2);
    design.setup("White", "Stone", 21, 2);
    design.setup("White", "Stone", 23, 2);
    design.setup("White", "Stone", 30, 2);
    design.setup("White", "Stone", 31, 2);

    design.setup("Black", "Stone", 0, 3);
    design.setup("Black", "Stone", 1, 3);
    design.setup("Black", "Stone", 9, 3);
    design.setup("Black", "Stone", 13, 3);
    design.setup("Black", "Stone", 11, 3);
    design.setup("Black", "Stone", 19, 3);
    design.setup("Black", "Stone", 20, 3);
    design.setup("Black", "Stone", 60, 3);
    design.setup("Black", "Stone", 61, 3);
    design.setup("Black", "Stone", 69, 3);
    design.setup("Black", "Stone", 67, 3);
    design.setup("Black", "Stone", 71, 3);
    design.setup("Black", "Stone", 79, 3);
    design.setup("Black", "Stone", 80, 3);
    design.setup("White", "Stone", 3, 3);
    design.setup("White", "Stone", 4, 3);
    design.setup("White", "Stone", 12, 3);
    design.setup("White", "Stone", 10, 3);
    design.setup("White", "Stone", 14, 3);
    design.setup("White", "Stone", 22, 3);
    design.setup("White", "Stone", 23, 3);
    design.setup("White", "Stone", 57, 3);
    design.setup("White", "Stone", 58, 3);
    design.setup("White", "Stone", 66, 3);
    design.setup("White", "Stone", 70, 3);
    design.setup("White", "Stone", 68, 3);
    design.setup("White", "Stone", 76, 3);
    design.setup("White", "Stone", 77, 3);

    design.setup("Black", "Stone", 11, 4);
    design.setup("Black", "Stone", 12, 4);
    design.setup("Black", "Stone", 21, 4);
    design.setup("Black", "Stone", 49, 4);
    design.setup("Black", "Stone", 50, 4);
    design.setup("Black", "Stone", 58, 4);
    design.setup("Black", "Stone", 60, 4);
    design.setup("Black", "Stone", 67, 4);
    design.setup("Black", "Stone", 70, 4);
    design.setup("Black", "Stone", 76, 4);
    design.setup("Black", "Stone", 77, 4);
    design.setup("Black", "Stone", 78, 4);
    design.setup("Black", "Stone", 79, 4);
    design.setup("Black", "Stone", 80, 4);
    design.setup("White", "Stone", 68, 4);
    design.setup("White", "Stone", 69, 4);
    design.setup("White", "Stone", 59, 4);
    design.setup("White", "Stone", 0, 4);
    design.setup("White", "Stone", 1, 4);
    design.setup("White", "Stone", 2, 4);
    design.setup("White", "Stone", 3, 4);
    design.setup("White", "Stone", 4, 4);
    design.setup("White", "Stone", 10, 4);
    design.setup("White", "Stone", 13, 4);
    design.setup("White", "Stone", 20, 4);
    design.setup("White", "Stone", 22, 4);
    design.setup("White", "Stone", 30, 4);
    design.setup("White", "Stone", 31, 4);

    design.setup("Black", "Stone", 0, 5);
    design.setup("Black", "Stone", 1, 5);
    design.setup("Black", "Stone", 9, 5);
    design.setup("Black", "Stone", 10, 5);
    design.setup("Black", "Stone", 11, 5);
    design.setup("Black", "Stone", 19, 5);
    design.setup("Black", "Stone", 20, 5);
    design.setup("Black", "Stone", 60, 5);
    design.setup("Black", "Stone", 61, 5);
    design.setup("Black", "Stone", 69, 5);
    design.setup("Black", "Stone", 70, 5);
    design.setup("Black", "Stone", 71, 5);
    design.setup("Black", "Stone", 79, 5);
    design.setup("Black", "Stone", 80, 5);
    design.setup("White", "Stone", 3, 5);
    design.setup("White", "Stone", 4, 5);
    design.setup("White", "Stone", 12, 5);
    design.setup("White", "Stone", 13, 5);
    design.setup("White", "Stone", 14, 5);
    design.setup("White", "Stone", 22, 5);
    design.setup("White", "Stone", 23, 5);
    design.setup("White", "Stone", 57, 5);
    design.setup("White", "Stone", 58, 5);
    design.setup("White", "Stone", 66, 5);
    design.setup("White", "Stone", 67, 5);
    design.setup("White", "Stone", 68, 5);
    design.setup("White", "Stone", 76, 5);
    design.setup("White", "Stone", 77, 5);

    design.setup("Black", "Stone", 49, 6);
    design.setup("Black", "Stone", 50, 6);
    design.setup("Black", "Stone", 41, 6);
    design.setup("Black", "Stone", 32, 6);
    design.setup("Black", "Stone", 33, 6);
    design.setup("Black", "Stone", 43, 6);
    design.setup("Black", "Stone", 53, 6);
    design.setup("Black", "Stone", 62, 6);
    design.setup("Black", "Stone", 71, 6);
    design.setup("Black", "Stone", 80, 6);
    design.setup("Black", "Stone", 79, 6);
    design.setup("Black", "Stone", 78, 6);
    design.setup("Black", "Stone", 77, 6);
    design.setup("Black", "Stone", 76, 6);
    design.setup("White", "Stone", 31, 6);
    design.setup("White", "Stone", 30, 6);
    design.setup("White", "Stone", 39, 6);
    design.setup("White", "Stone", 48, 6);
    design.setup("White", "Stone", 47, 6);
    design.setup("White", "Stone", 37, 6);
    design.setup("White", "Stone", 27, 6);
    design.setup("White", "Stone", 18, 6);
    design.setup("White", "Stone", 9, 6);
    design.setup("White", "Stone", 0, 6);
    design.setup("White", "Stone", 1, 6);
    design.setup("White", "Stone", 2, 6);
    design.setup("White", "Stone", 3, 6);
    design.setup("White", "Stone", 4, 6);

    design.setup("Black", "Stone", 9, 7);
    design.setup("Black", "Stone", 10, 7);
    design.setup("Black", "Stone", 18, 7);
    design.setup("Black", "Stone", 23, 7);
    design.setup("Black", "Stone", 20, 7);
    design.setup("Black", "Stone", 28, 7);
    design.setup("Black", "Stone", 29, 7);
    design.setup("Black", "Stone", 51, 7);
    design.setup("Black", "Stone", 52, 7);
    design.setup("Black", "Stone", 60, 7);
    design.setup("Black", "Stone", 57, 7);
    design.setup("Black", "Stone", 62, 7);
    design.setup("Black", "Stone", 70, 7);
    design.setup("Black", "Stone", 71, 7);
    design.setup("White", "Stone", 13, 7);
    design.setup("White", "Stone", 14, 7);
    design.setup("White", "Stone", 22, 7);
    design.setup("White", "Stone", 19, 7);
    design.setup("White", "Stone", 24, 7);
    design.setup("White", "Stone", 32, 7);
    design.setup("White", "Stone", 33, 7);
    design.setup("White", "Stone", 47, 7);
    design.setup("White", "Stone", 48, 7);
    design.setup("White", "Stone", 56, 7);
    design.setup("White", "Stone", 61, 7);
    design.setup("White", "Stone", 58, 7);
    design.setup("White", "Stone", 66, 7);
    design.setup("White", "Stone", 67, 7);

    design.setup("Black", "Stone", 46, 8);
    design.setup("Black", "Stone", 47, 8);
    design.setup("Black", "Stone", 48, 8);
    design.setup("Black", "Stone", 49, 8);
    design.setup("Black", "Stone", 50, 8);
    design.setup("Black", "Stone", 51, 8);
    design.setup("Black", "Stone", 52, 8);
    design.setup("Black", "Stone", 53, 8);
    design.setup("Black", "Stone", 57, 8);
    design.setup("Black", "Stone", 58, 8);
    design.setup("Black", "Stone", 59, 8);
    design.setup("Black", "Stone", 60, 8);
    design.setup("Black", "Stone", 61, 8);
    design.setup("Black", "Stone", 78, 8);
    design.setup("White", "Stone", 27, 8);
    design.setup("White", "Stone", 28, 8);
    design.setup("White", "Stone", 29, 8);
    design.setup("White", "Stone", 30, 8);
    design.setup("White", "Stone", 31, 8);
    design.setup("White", "Stone", 32, 8);
    design.setup("White", "Stone", 33, 8);
    design.setup("White", "Stone", 34, 8);
    design.setup("White", "Stone", 19, 8);
    design.setup("White", "Stone", 20, 8);
    design.setup("White", "Stone", 21, 8);
    design.setup("White", "Stone", 22, 8);
    design.setup("White", "Stone", 23, 8);
    design.setup("White", "Stone", 2, 8);

    design.setup("White", "Stone", 9, 9);
    design.setup("White", "Stone", 10, 9);
    design.setup("White", "Stone", 11, 9);
    design.setup("White", "Stone", 12, 9);
    design.setup("White", "Stone", 13, 9);
    design.setup("White", "Stone", 14, 9);
    design.setup("White", "Stone", 18, 9);
    design.setup("White", "Stone", 20, 9);
    design.setup("White", "Stone", 24, 9);
    design.setup("White", "Stone", 28, 9);
    design.setup("White", "Stone", 29, 9);
    design.setup("White", "Stone", 32, 9);
    design.setup("White", "Stone", 33, 9);
    design.setup("White", "Stone", 61, 9);
    design.setup("Black", "Stone", 19, 9);
    design.setup("Black", "Stone", 66, 9);
    design.setup("Black", "Stone", 67, 9);
    design.setup("Black", "Stone", 68, 9);
    design.setup("Black", "Stone", 69, 9);
    design.setup("Black", "Stone", 70, 9);
    design.setup("Black", "Stone", 71, 9);
    design.setup("Black", "Stone", 56, 9);
    design.setup("Black", "Stone", 60, 9);
    design.setup("Black", "Stone", 62, 9);
    design.setup("Black", "Stone", 47, 9);
    design.setup("Black", "Stone", 48, 9);
    design.setup("Black", "Stone", 51, 9);
    design.setup("Black", "Stone", 52, 9);

    design.setup("White", "Stone", 2, 10);
    design.setup("White", "Stone", 67, 10);
    design.setup("White", "Stone", 68, 10);
    design.setup("White", "Stone", 69, 10);
    design.setup("White", "Stone", 70, 10);
    design.setup("White", "Stone", 57, 10);
    design.setup("White", "Stone", 61, 10);
    design.setup("White", "Stone", 46, 10);
    design.setup("White", "Stone", 48, 10);
    design.setup("White", "Stone", 51, 10);
    design.setup("White", "Stone", 53, 10);
    design.setup("White", "Stone", 21, 10);
    design.setup("White", "Stone", 28, 10);
    design.setup("White", "Stone", 33, 10);
    design.setup("Black", "Stone", 78, 10);
    design.setup("Black", "Stone", 10, 10);
    design.setup("Black", "Stone", 11, 10);
    design.setup("Black", "Stone", 12, 10);
    design.setup("Black", "Stone", 13, 10);
    design.setup("Black", "Stone", 19, 10);
    design.setup("Black", "Stone", 23, 10);
    design.setup("Black", "Stone", 27, 10);
    design.setup("Black", "Stone", 29, 10);
    design.setup("Black", "Stone", 32, 10);
    design.setup("Black", "Stone", 34, 10);
    design.setup("Black", "Stone", 59, 10);
    design.setup("Black", "Stone", 47, 10);
    design.setup("Black", "Stone", 52, 10);

    design.setup("White", "Stone", 78, 11);
    design.setup("White", "Stone", 68, 11);
    design.setup("White", "Stone", 69, 11);
    design.setup("White", "Stone", 58, 11);
    design.setup("White", "Stone", 60, 11);
    design.setup("White", "Stone", 48, 11);
    design.setup("White", "Stone", 51, 11);
    design.setup("White", "Stone", 28, 11);
    design.setup("White", "Stone", 33, 11);
    design.setup("White", "Stone", 18, 11);
    design.setup("White", "Stone", 24, 11);
    design.setup("White", "Stone", 1, 11);
    design.setup("White", "Stone", 3, 11);
    design.setup("White", "Stone", 21, 11);
    design.setup("Black", "Stone", 2, 11);
    design.setup("Black", "Stone", 11, 11);
    design.setup("Black", "Stone", 12, 11);
    design.setup("Black", "Stone", 20, 11);
    design.setup("Black", "Stone", 22, 11);
    design.setup("Black", "Stone", 29, 11);
    design.setup("Black", "Stone", 32, 11);
    design.setup("Black", "Stone", 47, 11);
    design.setup("Black", "Stone", 52, 11);
    design.setup("Black", "Stone", 56, 11);
    design.setup("Black", "Stone", 62, 11);
    design.setup("Black", "Stone", 77, 11);
    design.setup("Black", "Stone", 79, 11);
    design.setup("Black", "Stone", 59, 11);

    design.setup("White", "Stone", 0, 12);
    design.setup("White", "Stone", 1, 12);
    design.setup("White", "Stone", 9, 12);
    design.setup("White", "Stone", 13, 12);
    design.setup("White", "Stone", 22, 12);
    design.setup("White", "Stone", 36, 12);
    design.setup("White", "Stone", 39, 12);
    design.setup("White", "Stone", 42, 12);
    design.setup("White", "Stone", 43, 12);
    design.setup("White", "Stone", 60, 12);
    design.setup("White", "Stone", 66, 12);
    design.setup("White", "Stone", 70, 12);
    design.setup("White", "Stone", 76, 12);
    design.setup("White", "Stone", 77, 12);
    design.setup("Black", "Stone", 3, 12);
    design.setup("Black", "Stone", 4, 12);
    design.setup("Black", "Stone", 10, 12);
    design.setup("Black", "Stone", 14, 12);
    design.setup("Black", "Stone", 20, 12);
    design.setup("Black", "Stone", 37, 12);
    design.setup("Black", "Stone", 38, 12);
    design.setup("Black", "Stone", 41, 12);
    design.setup("Black", "Stone", 44, 12);
    design.setup("Black", "Stone", 58, 12);
    design.setup("Black", "Stone", 67, 12);
    design.setup("Black", "Stone", 71, 12);
    design.setup("Black", "Stone", 79, 12);
    design.setup("Black", "Stone", 80, 12);

    design.setup("White", "Stone", 0, 13);;
    design.setup("White", "Stone", 2, 13);;
    design.setup("White", "Stone", 3, 13);;
    design.setup("White", "Stone", 4, 13);;
    design.setup("White", "Stone", 10, 13);;
    design.setup("White", "Stone", 11, 13);;
    design.setup("White", "Stone", 12, 13);;
    design.setup("White", "Stone", 14, 13);;
    design.setup("White", "Stone", 19, 13);;
    design.setup("White", "Stone", 21, 13);;
    design.setup("White", "Stone", 22, 13);;
    design.setup("White", "Stone", 23, 13);;
    design.setup("White", "Stone", 31, 13);;
    design.setup("White", "Stone", 67, 13);;
    design.setup("Black", "Stone", 13, 13);;
    design.setup("Black", "Stone", 76, 13);;
    design.setup("Black", "Stone", 77, 13);;
    design.setup("Black", "Stone", 78, 13);;
    design.setup("Black", "Stone", 80, 13);;
    design.setup("Black", "Stone", 66, 13);;
    design.setup("Black", "Stone", 68, 13);;
    design.setup("Black", "Stone", 69, 13);;
    design.setup("Black", "Stone", 70, 13);;
    design.setup("Black", "Stone", 57, 13);;
    design.setup("Black", "Stone", 58, 13);;
    design.setup("Black", "Stone", 59, 13);;
    design.setup("Black", "Stone", 61, 13);;
    design.setup("Black", "Stone", 49, 13);;

    design.setup("White", "Stone", 1, 14);
    design.setup("White", "Stone", 9, 14);
    design.setup("White", "Stone", 13, 14);
    design.setup("White", "Stone", 29, 14);
    design.setup("White", "Stone", 34, 14);
    design.setup("White", "Stone", 36, 14);
    design.setup("White", "Stone", 41, 14);
    design.setup("White", "Stone", 53, 14);
    design.setup("White", "Stone", 60, 14);
    design.setup("White", "Stone", 66, 14);
    design.setup("White", "Stone", 68, 14);
    design.setup("White", "Stone", 80, 14);
    design.setup("Black", "Stone", 0, 14);
    design.setup("Black", "Stone", 12, 14);
    design.setup("Black", "Stone", 14, 14);
    design.setup("Black", "Stone", 20, 14);
    design.setup("Black", "Stone", 27, 14);
    design.setup("Black", "Stone", 39, 14);
    design.setup("Black", "Stone", 44, 14);
    design.setup("Black", "Stone", 46, 14);
    design.setup("Black", "Stone", 51, 14);
    design.setup("Black", "Stone", 67, 14);
    design.setup("Black", "Stone", 71, 14);
    design.setup("Black", "Stone", 79, 14);

    design.setup("White", "Stone", 10, 15);
    design.setup("White", "Stone", 11, 15);
    design.setup("White", "Stone", 30, 15);
    design.setup("White", "Stone", 33, 15);
    design.setup("White", "Stone", 34, 15);
    design.setup("White", "Stone", 37, 15);
    design.setup("White", "Stone", 39, 15);
    design.setup("White", "Stone", 42, 15);
    design.setup("White", "Stone", 44, 15);
    design.setup("White", "Stone", 49, 15);
    design.setup("White", "Stone", 52, 15);
    design.setup("White", "Stone", 53, 15);
    design.setup("White", "Stone", 67, 15);
    design.setup("White", "Stone", 68, 15);
    design.setup("Black", "Stone", 12, 15);
    design.setup("Black", "Stone", 13, 15);
    design.setup("Black", "Stone", 27, 15);
    design.setup("Black", "Stone", 28, 15);
    design.setup("Black", "Stone", 31, 15);
    design.setup("Black", "Stone", 36, 15);
    design.setup("Black", "Stone", 38, 15);
    design.setup("Black", "Stone", 41, 15);
    design.setup("Black", "Stone", 43, 15);
    design.setup("Black", "Stone", 46, 15);
    design.setup("Black", "Stone", 47, 15);
    design.setup("Black", "Stone", 50, 15);
    design.setup("Black", "Stone", 69, 15);
    design.setup("Black", "Stone", 70, 15);

    design.setup("White", "Stone", 1, 16);
    design.setup("White", "Stone", 2, 16);
    design.setup("White", "Stone", 3, 16);
    design.setup("White", "Stone", 21, 16);
    design.setup("White", "Stone", 46, 16);
    design.setup("White", "Stone", 47, 16);
    design.setup("White", "Stone", 52, 16);
    design.setup("White", "Stone", 53, 16);
    design.setup("White", "Stone", 56, 16);
    design.setup("White", "Stone", 57, 16);
    design.setup("White", "Stone", 61, 16);
    design.setup("White", "Stone", 62, 16);
    design.setup("White", "Stone", 66, 16);
    design.setup("White", "Stone", 71, 16);
    design.setup("Black", "Stone", 9, 16);
    design.setup("Black", "Stone", 14, 16);
    design.setup("Black", "Stone", 18, 16);
    design.setup("Black", "Stone", 19, 16);
    design.setup("Black", "Stone", 23, 16);
    design.setup("Black", "Stone", 24, 16);
    design.setup("Black", "Stone", 27, 16);
    design.setup("Black", "Stone", 28, 16);
    design.setup("Black", "Stone", 33, 16);
    design.setup("Black", "Stone", 34, 16);
    design.setup("Black", "Stone", 59, 16);
    design.setup("Black", "Stone", 77, 16);
    design.setup("Black", "Stone", 78, 16);
    design.setup("Black", "Stone", 79, 16);

    design.setup("White", "Stone", 10, 17);
    design.setup("White", "Stone", 12, 17);
    design.setup("White", "Stone", 14, 17);
    design.setup("White", "Stone", 27, 17);
    design.setup("White", "Stone", 29, 17);
    design.setup("White", "Stone", 31, 17);
    design.setup("White", "Stone", 33, 17);
    design.setup("White", "Stone", 47, 17);
    design.setup("White", "Stone", 49, 17);
    design.setup("White", "Stone", 51, 17);
    design.setup("White", "Stone", 53, 17);
    design.setup("White", "Stone", 66, 17);
    design.setup("White", "Stone", 68, 17);
    design.setup("White", "Stone", 70, 17);
    design.setup("Black", "Stone", 9, 17);
    design.setup("Black", "Stone", 11, 17);
    design.setup("Black", "Stone", 13, 17);
    design.setup("Black", "Stone", 28, 17);
    design.setup("Black", "Stone", 30, 17);
    design.setup("Black", "Stone", 32, 17);
    design.setup("Black", "Stone", 34, 17);
    design.setup("Black", "Stone", 46, 17);
    design.setup("Black", "Stone", 48, 17);
    design.setup("Black", "Stone", 50, 17);
    design.setup("Black", "Stone", 52, 17);
    design.setup("Black", "Stone", 67, 17);
    design.setup("Black", "Stone", 69, 17);
    design.setup("Black", "Stone", 71, 17);

    design.setup("White", "Stone", 3, 18);
    design.setup("White", "Stone", 4, 18);
    design.setup("White", "Stone", 10, 18);
    design.setup("White", "Stone", 14, 18);
    design.setup("White", "Stone", 27, 18);
    design.setup("White", "Stone", 36, 18);
    design.setup("White", "Stone", 43, 18);
    design.setup("White", "Stone", 46, 18);
    design.setup("White", "Stone", 50, 18);
    design.setup("White", "Stone", 67, 18);
    design.setup("White", "Stone", 71, 18);
    design.setup("White", "Stone", 79, 18);
    design.setup("White", "Stone", 80, 18);
    design.setup("Black", "Stone", 0, 18);
    design.setup("Black", "Stone", 1, 18);
    design.setup("Black", "Stone", 9, 18);
    design.setup("Black", "Stone", 13, 18);
    design.setup("Black", "Stone", 30, 18);
    design.setup("Black", "Stone", 34, 18);
    design.setup("Black", "Stone", 37, 18);
    design.setup("Black", "Stone", 44, 18);
    design.setup("Black", "Stone", 53, 18);
    design.setup("Black", "Stone", 66, 18);
    design.setup("Black", "Stone", 70, 18);
    design.setup("Black", "Stone", 76, 18);
    design.setup("Black", "Stone", 77, 18);

    design.setup("White", "Stone", 3, 19);
    design.setup("White", "Stone", 4, 19);
    design.setup("White", "Stone", 12, 19);
    design.setup("White", "Stone", 14, 19);
    design.setup("White", "Stone", 23, 19);
    design.setup("White", "Stone", 31, 19);
    design.setup("White", "Stone", 32, 19);
    design.setup("White", "Stone", 41, 19);
    design.setup("White", "Stone", 51, 19);
    design.setup("White", "Stone", 61, 19);
    design.setup("White", "Stone", 69, 19);
    design.setup("White", "Stone", 71, 19);
    design.setup("White", "Stone", 79, 19);
    design.setup("White", "Stone", 80, 19);
    design.setup("Black", "Stone", 0, 19);
    design.setup("Black", "Stone", 1, 19);
    design.setup("Black", "Stone", 9, 19);
    design.setup("Black", "Stone", 11, 19);
    design.setup("Black", "Stone", 19, 19);
    design.setup("Black", "Stone", 29, 19);
    design.setup("Black", "Stone", 39, 19);
    design.setup("Black", "Stone", 48, 19);
    design.setup("Black", "Stone", 49, 19);
    design.setup("Black", "Stone", 57, 19);
    design.setup("Black", "Stone", 66, 19);
    design.setup("Black", "Stone", 68, 19);
    design.setup("Black", "Stone", 76, 19);
    design.setup("Black", "Stone", 77, 19);

    design.setup("White", "Stone", 31, 20);
    design.setup("White", "Stone", 41, 20);
    design.setup("White", "Stone", 48, 20);
    design.setup("White", "Stone", 51, 20);
    design.setup("White", "Stone", 57, 20);
    design.setup("White", "Stone", 61, 20);
    design.setup("White", "Stone", 66, 20);
    design.setup("White", "Stone", 68, 20);
    design.setup("White", "Stone", 69, 20);
    design.setup("White", "Stone", 71, 20);
    design.setup("White", "Stone", 76, 20);
    design.setup("White", "Stone", 77, 20);
    design.setup("White", "Stone", 79, 20);
    design.setup("White", "Stone", 80, 20);
    design.setup("Black", "Stone", 0, 20);
    design.setup("Black", "Stone", 1, 20);
    design.setup("Black", "Stone", 3, 20);
    design.setup("Black", "Stone", 4, 20);
    design.setup("Black", "Stone", 9, 20);
    design.setup("Black", "Stone", 11, 20);
    design.setup("Black", "Stone", 12, 20);
    design.setup("Black", "Stone", 14, 20);
    design.setup("Black", "Stone", 19, 20);
    design.setup("Black", "Stone", 23, 20);
    design.setup("Black", "Stone", 29, 20);
    design.setup("Black", "Stone", 32, 20);
    design.setup("Black", "Stone", 39, 20);
    design.setup("Black", "Stone", 49, 20);

    design.setup("White", "Stone", 21, 21);
    design.setup("White", "Stone", 48, 21);
    design.setup("White", "Stone", 49, 21);
    design.setup("White", "Stone", 50, 21);
    design.setup("White", "Stone", 51, 21);
    design.setup("White", "Stone", 57, 21);
    design.setup("White", "Stone", 58, 21);
    design.setup("White", "Stone", 60, 21);
    design.setup("White", "Stone", 61, 21);
    design.setup("White", "Stone", 66, 21);
    design.setup("White", "Stone", 68, 21);
    design.setup("White", "Stone", 69, 21);
    design.setup("White", "Stone", 71, 21);
    design.setup("White", "Stone", 78, 21);
    design.setup("Black", "Stone", 2, 21);
    design.setup("Black", "Stone", 9, 21);
    design.setup("Black", "Stone", 11, 21);
    design.setup("Black", "Stone", 12, 21);
    design.setup("Black", "Stone", 14, 21);
    design.setup("Black", "Stone", 19, 21);
    design.setup("Black", "Stone", 20, 21);
    design.setup("Black", "Stone", 22, 21);
    design.setup("Black", "Stone", 23, 21);
    design.setup("Black", "Stone", 29, 21);
    design.setup("Black", "Stone", 30, 21);
    design.setup("Black", "Stone", 31, 21);
    design.setup("Black", "Stone", 32, 21);
    design.setup("Black", "Stone", 59, 21);

    design.setup("White", "Stone", 10, 22);
    design.setup("White", "Stone", 14, 22);
    design.setup("White", "Stone", 23, 22);
    design.setup("White", "Stone", 32, 22);
    design.setup("White", "Stone", 33, 22);
    design.setup("White", "Stone", 34, 22);
    design.setup("White", "Stone", 37, 22);
    design.setup("White", "Stone", 46, 22);
    design.setup("White", "Stone", 47, 22);
    design.setup("White", "Stone", 48, 22);
    design.setup("White", "Stone", 57, 22);
    design.setup("White", "Stone", 66, 22);
    design.setup("White", "Stone", 67, 22);
    design.setup("White", "Stone", 70, 22);
    design.setup("Black", "Stone", 9, 22);
    design.setup("Black", "Stone", 11, 22);
    design.setup("Black", "Stone", 18, 22);
    design.setup("Black", "Stone", 19, 22);
    design.setup("Black", "Stone", 20, 22);
    design.setup("Black", "Stone", 21, 22);
    design.setup("Black", "Stone", 24, 22);
    design.setup("Black", "Stone", 29, 22);
    design.setup("Black", "Stone", 51, 22);
    design.setup("Black", "Stone", 56, 22);
    design.setup("Black", "Stone", 60, 22);
    design.setup("Black", "Stone", 61, 22);
    design.setup("Black", "Stone", 69, 22);
    design.setup("Black", "Stone", 71, 22);

    design.setup("White", "Stone", 9, 23);
    design.setup("White", "Stone", 18, 23);
    design.setup("White", "Stone", 19, 23);
    design.setup("White", "Stone", 27, 23);
    design.setup("White", "Stone", 28, 23);
    design.setup("White", "Stone", 29, 23);
    design.setup("White", "Stone", 30, 23);
    design.setup("White", "Stone", 50, 23);
    design.setup("White", "Stone", 51, 23);
    design.setup("White", "Stone", 52, 23);
    design.setup("White", "Stone", 53, 23);
    design.setup("White", "Stone", 61, 23);
    design.setup("White", "Stone", 62, 23);
    design.setup("White", "Stone", 71, 23);
    design.setup("Black", "Stone", 14, 23);
    design.setup("Black", "Stone", 23, 23);
    design.setup("Black", "Stone", 24, 23);
    design.setup("Black", "Stone", 32, 23);
    design.setup("Black", "Stone", 33, 23);
    design.setup("Black", "Stone", 34, 23);
    design.setup("Black", "Stone", 39, 23);
    design.setup("Black", "Stone", 41, 23);
    design.setup("Black", "Stone", 46, 23);
    design.setup("Black", "Stone", 47, 23);
    design.setup("Black", "Stone", 48, 23);
    design.setup("Black", "Stone", 56, 23);
    design.setup("Black", "Stone", 57, 23);
    design.setup("Black", "Stone", 66, 23);

    design.setup("White", "Stone", 9, 24);
    design.setup("White", "Stone", 10, 24);
    design.setup("White", "Stone", 18, 24);
    design.setup("White", "Stone", 19, 24);
    design.setup("White", "Stone", 20, 24);
    design.setup("White", "Stone", 28, 24);
    design.setup("White", "Stone", 29, 24);
    design.setup("White", "Stone", 51, 24);
    design.setup("White", "Stone", 52, 24);
    design.setup("White", "Stone", 60, 24);
    design.setup("White", "Stone", 61, 24);
    design.setup("White", "Stone", 62, 24);
    design.setup("White", "Stone", 70, 24);
    design.setup("White", "Stone", 71, 24);
    design.setup("Black", "Stone", 14, 24);
    design.setup("Black", "Stone", 23, 24);
    design.setup("Black", "Stone", 24, 24);
    design.setup("Black", "Stone", 32, 24);
    design.setup("Black", "Stone", 33, 24);
    design.setup("Black", "Stone", 34, 24);
    design.setup("Black", "Stone", 39, 24);
    design.setup("Black", "Stone", 41, 24);
    design.setup("Black", "Stone", 46, 24);
    design.setup("Black", "Stone", 47, 24);
    design.setup("Black", "Stone", 48, 24);
    design.setup("Black", "Stone", 56, 24);
    design.setup("Black", "Stone", 57, 24);
    design.setup("Black", "Stone", 66, 24);

    design.setup("White", "Stone", 1, 25);
    design.setup("White", "Stone", 9, 25);
    design.setup("White", "Stone", 10, 25);
    design.setup("White", "Stone", 11, 25);
    design.setup("White", "Stone", 20, 25);
    design.setup("White", "Stone", 34, 25);
    design.setup("White", "Stone", 43, 25);
    design.setup("White", "Stone", 44, 25);
    design.setup("White", "Stone", 53, 25);
    design.setup("White", "Stone", 58, 25);
    design.setup("White", "Stone", 66, 25);
    design.setup("White", "Stone", 67, 25);
    design.setup("White", "Stone", 68, 25);
    design.setup("White", "Stone", 77, 25);
    design.setup("Black", "Stone", 3, 25);
    design.setup("Black", "Stone", 12, 25);
    design.setup("Black", "Stone", 13, 25);
    design.setup("Black", "Stone", 14, 25);
    design.setup("Black", "Stone", 22, 25);
    design.setup("Black", "Stone", 27, 25);
    design.setup("Black", "Stone", 36, 25);
    design.setup("Black", "Stone", 37, 25);
    design.setup("Black", "Stone", 46, 25);
    design.setup("Black", "Stone", 60, 25);
    design.setup("Black", "Stone", 69, 25);
    design.setup("Black", "Stone", 70, 25);
    design.setup("Black", "Stone", 71, 25);
    design.setup("Black", "Stone", 79, 25);

    design.setup("White", "Stone", 18, 26);
    design.setup("White", "Stone", 19, 26);
    design.setup("White", "Stone", 27, 26);
    design.setup("White", "Stone", 28, 26);
    design.setup("White", "Stone", 29, 26);
    design.setup("White", "Stone", 36, 26);
    design.setup("White", "Stone", 37, 26);
    design.setup("White", "Stone", 38, 26);
    design.setup("White", "Stone", 39, 26);
    design.setup("White", "Stone", 46, 26);
    design.setup("White", "Stone", 47, 26);
    design.setup("White", "Stone", 48, 26);
    design.setup("White", "Stone", 56, 26);
    design.setup("White", "Stone", 57, 26);
    design.setup("Black", "Stone", 23, 26);
    design.setup("Black", "Stone", 24, 26);
    design.setup("Black", "Stone", 32, 26);
    design.setup("Black", "Stone", 33, 26);
    design.setup("Black", "Stone", 34, 26);
    design.setup("Black", "Stone", 41, 26);
    design.setup("Black", "Stone", 42, 26);
    design.setup("Black", "Stone", 43, 26);
    design.setup("Black", "Stone", 44, 26);
    design.setup("Black", "Stone", 51, 26);
    design.setup("Black", "Stone", 52, 26);
    design.setup("Black", "Stone", 53, 26);
    design.setup("Black", "Stone", 61, 26);
    design.setup("Black", "Stone", 62, 26);

    design.setup("White", "Stone", 0, 27);
    design.setup("White", "Stone", 9, 27);
    design.setup("White", "Stone", 12, 27);
    design.setup("White", "Stone", 13, 27);
    design.setup("White", "Stone", 34, 27);
    design.setup("White", "Stone", 37, 27);
    design.setup("White", "Stone", 39, 27);
    design.setup("White", "Stone", 41, 27);
    design.setup("White", "Stone", 44, 27);
    design.setup("White", "Stone", 47, 27);
    design.setup("White", "Stone", 61, 27);
    design.setup("White", "Stone", 70, 27);
    design.setup("White", "Stone", 76, 27);
    design.setup("White", "Stone", 77, 27);
    design.setup("Black", "Stone", 3, 27);
    design.setup("Black", "Stone", 4, 27);
    design.setup("Black", "Stone", 10, 27);
    design.setup("Black", "Stone", 19, 27);
    design.setup("Black", "Stone", 31, 27);
    design.setup("Black", "Stone", 33, 27);
    design.setup("Black", "Stone", 36, 27);
    design.setup("Black", "Stone", 43, 27);
    design.setup("Black", "Stone", 46, 27);
    design.setup("Black", "Stone", 49, 27);
    design.setup("Black", "Stone", 67, 27);
    design.setup("Black", "Stone", 68, 27);
    design.setup("Black", "Stone", 71, 27);
    design.setup("Black", "Stone", 80, 27);

    design.setup("White", "Stone", 20, 28);
    design.setup("White", "Stone", 28, 28);
    design.setup("White", "Stone", 29, 28);
    design.setup("White", "Stone", 30, 28);
    design.setup("White", "Stone", 34, 28);
    design.setup("White", "Stone", 39, 28);
    design.setup("White", "Stone", 42, 28);
    design.setup("White", "Stone", 43, 28);
    design.setup("White", "Stone", 44, 28);
    design.setup("White", "Stone", 47, 28);
    design.setup("White", "Stone", 48, 28);
    design.setup("White", "Stone", 49, 28);
    design.setup("White", "Stone", 53, 28);
    design.setup("White", "Stone", 58, 28);
    design.setup("Black", "Stone", 22, 28);
    design.setup("Black", "Stone", 27, 28);
    design.setup("Black", "Stone", 31, 28);
    design.setup("Black", "Stone", 32, 28);
    design.setup("Black", "Stone", 33, 28);
    design.setup("Black", "Stone", 36, 28);
    design.setup("Black", "Stone", 37, 28);
    design.setup("Black", "Stone", 38, 28);
    design.setup("Black", "Stone", 41, 28);
    design.setup("Black", "Stone", 46, 28);
    design.setup("Black", "Stone", 50, 28);
    design.setup("Black", "Stone", 51, 28);
    design.setup("Black", "Stone", 52, 28);
    design.setup("Black", "Stone", 60, 28);

    design.setup("White", "Stone", 11, 29);
    design.setup("White", "Stone", 20, 29);
    design.setup("White", "Stone", 29, 29);
    design.setup("White", "Stone", 32, 29);
    design.setup("White", "Stone", 33, 29);
    design.setup("White", "Stone", 34, 29);
    design.setup("White", "Stone", 38, 29);
    design.setup("White", "Stone", 39, 29);
    design.setup("White", "Stone", 43, 29);
    design.setup("White", "Stone", 49, 29);
    design.setup("White", "Stone", 56, 29);
    design.setup("White", "Stone", 57, 29);
    design.setup("White", "Stone", 58, 29);
    design.setup("White", "Stone", 78, 29);
    design.setup("Black", "Stone", 2, 29);
    design.setup("Black", "Stone", 22, 29);
    design.setup("Black", "Stone", 23, 29);
    design.setup("Black", "Stone", 24, 29);
    design.setup("Black", "Stone", 31, 29);
    design.setup("Black", "Stone", 37, 29);
    design.setup("Black", "Stone", 41, 29);
    design.setup("Black", "Stone", 42, 29);
    design.setup("Black", "Stone", 46, 29);
    design.setup("Black", "Stone", 47, 29);
    design.setup("Black", "Stone", 48, 29);
    design.setup("Black", "Stone", 51, 29);
    design.setup("Black", "Stone", 60, 29);
    design.setup("Black", "Stone", 69, 29);

    design.setup("White", "Stone", 28, 30);
    design.setup("White", "Stone", 29, 30);
    design.setup("White", "Stone", 32, 30);
    design.setup("White", "Stone", 33, 30);
    design.setup("White", "Stone", 37, 30);
    design.setup("White", "Stone", 38, 30);
    design.setup("White", "Stone", 39, 30);
    design.setup("White", "Stone", 41, 30);
    design.setup("White", "Stone", 42, 30);
    design.setup("White", "Stone", 43, 30);
    design.setup("White", "Stone", 47, 30);
    design.setup("White", "Stone", 48, 30);
    design.setup("White", "Stone", 51, 30);
    design.setup("White", "Stone", 52, 30);
    design.setup("Black", "Stone", 11, 30);
    design.setup("Black", "Stone", 12, 30);
    design.setup("Black", "Stone", 20, 30);
    design.setup("Black", "Stone", 21, 30);
    design.setup("Black", "Stone", 22, 30);
    design.setup("Black", "Stone", 30, 30);
    design.setup("Black", "Stone", 31, 30);
    design.setup("Black", "Stone", 49, 30);
    design.setup("Black", "Stone", 50, 30);
    design.setup("Black", "Stone", 58, 30);
    design.setup("Black", "Stone", 59, 30);
    design.setup("Black", "Stone", 60, 30);
    design.setup("Black", "Stone", 68, 30);
    design.setup("Black", "Stone", 69, 30);

    design.setup("White", "Stone", 0, 31);
    design.setup("White", "Stone", 9, 31);
    design.setup("White", "Stone", 18, 31);
    design.setup("White", "Stone", 23, 31);
    design.setup("White", "Stone", 24, 31);
    design.setup("White", "Stone", 28, 31);
    design.setup("White", "Stone", 29, 31);
    design.setup("White", "Stone", 32, 31);
    design.setup("White", "Stone", 34, 31);
    design.setup("White", "Stone", 44, 31);
    design.setup("White", "Stone", 69, 31);
    design.setup("White", "Stone", 76, 31);
    design.setup("White", "Stone", 77, 31);
    design.setup("White", "Stone", 78, 31);
    design.setup("Black", "Stone", 2, 31);
    design.setup("Black", "Stone", 3, 31);
    design.setup("Black", "Stone", 4, 31);
    design.setup("Black", "Stone", 11, 31);
    design.setup("Black", "Stone", 36, 31);
    design.setup("Black", "Stone", 46, 31);
    design.setup("Black", "Stone", 48, 31);
    design.setup("Black", "Stone", 51, 31);
    design.setup("Black", "Stone", 52, 31);
    design.setup("Black", "Stone", 56, 31);
    design.setup("Black", "Stone", 57, 31);
    design.setup("Black", "Stone", 62, 31);
    design.setup("Black", "Stone", 71, 31);
    design.setup("Black", "Stone", 80, 31);

    design.setup("White", "Stone", 9, 32);
    design.setup("White", "Stone", 10, 32);
    design.setup("White", "Stone", 18, 32);
    design.setup("White", "Stone", 19, 32);
    design.setup("White", "Stone", 20, 32);
    design.setup("White", "Stone", 28, 32);
    design.setup("White", "Stone", 29, 32);
    design.setup("White", "Stone", 51, 32);
    design.setup("White", "Stone", 52, 32);
    design.setup("White", "Stone", 60, 32);
    design.setup("White", "Stone", 61, 32);
    design.setup("White", "Stone", 62, 32);
    design.setup("White", "Stone", 70, 32);
    design.setup("White", "Stone", 71, 32);
    design.setup("Black", "Stone", 13, 32);
    design.setup("Black", "Stone", 14, 32);
    design.setup("Black", "Stone", 22, 32);
    design.setup("Black", "Stone", 23, 32);
    design.setup("Black", "Stone", 24, 32);
    design.setup("Black", "Stone", 32, 32);
    design.setup("Black", "Stone", 33, 32);
    design.setup("Black", "Stone", 47, 32);
    design.setup("Black", "Stone", 48, 32);
    design.setup("Black", "Stone", 56, 32);
    design.setup("Black", "Stone", 57, 32);
    design.setup("Black", "Stone", 58, 32);
    design.setup("Black", "Stone", 66, 32);
    design.setup("Black", "Stone", 67, 32);

    design.setup("White", "Stone", 2, 33);
    design.setup("White", "Stone", 3, 33);
    design.setup("White", "Stone", 4, 33);
    design.setup("White", "Stone", 14, 33);
    design.setup("White", "Stone", 21, 33);
    design.setup("White", "Stone", 22, 33);
    design.setup("White", "Stone", 23, 33);
    design.setup("White", "Stone", 57, 33);
    design.setup("White", "Stone", 58, 33);
    design.setup("White", "Stone", 59, 33);
    design.setup("White", "Stone", 66, 33);
    design.setup("White", "Stone", 76, 33);
    design.setup("White", "Stone", 77, 33);
    design.setup("White", "Stone", 78, 33);
    design.setup("Black", "Stone", 0, 33);
    design.setup("Black", "Stone", 1, 33);
    design.setup("Black", "Stone", 9, 33);
    design.setup("Black", "Stone", 11, 33);
    design.setup("Black", "Stone", 18, 33);
    design.setup("Black", "Stone", 20, 33);
    design.setup("Black", "Stone", 29, 33);
    design.setup("Black", "Stone", 51, 33);
    design.setup("Black", "Stone", 60, 33);
    design.setup("Black", "Stone", 62, 33);
    design.setup("Black", "Stone", 69, 33);
    design.setup("Black", "Stone", 71, 33);
    design.setup("Black", "Stone", 79, 33);
    design.setup("Black", "Stone", 80, 33);

    design.setup("White", "Stone", 9, 34);
    design.setup("White", "Stone", 14, 34);
    design.setup("White", "Stone", 19, 34);
    design.setup("White", "Stone", 21, 34);
    design.setup("White", "Stone", 23, 34);
    design.setup("White", "Stone", 29, 34);
    design.setup("White", "Stone", 32, 34);
    design.setup("White", "Stone", 49, 34);
    design.setup("White", "Stone", 50, 34);
    design.setup("White", "Stone", 59, 34);
    design.setup("White", "Stone", 68, 34);
    design.setup("White", "Stone", 69, 34);
    design.setup("White", "Stone", 77, 34);
    design.setup("White", "Stone", 79, 34);
    design.setup("Black", "Stone", 0, 34);
    design.setup("Black", "Stone", 1, 34);
    design.setup("Black", "Stone", 2, 34);
    design.setup("Black", "Stone", 3, 34);
    design.setup("Black", "Stone", 4, 34);
    design.setup("Black", "Stone", 11, 34);
    design.setup("Black", "Stone", 12, 34);
    design.setup("Black", "Stone", 30, 34);
    design.setup("Black", "Stone", 31, 34);
    design.setup("Black", "Stone", 40, 34);
    design.setup("Black", "Stone", 47, 34);
    design.setup("Black", "Stone", 48, 34);
    design.setup("Black", "Stone", 51, 34);
    design.setup("Black", "Stone", 52, 34);

    design.setup("White", "Stone", 0, 35);
    design.setup("White", "Stone", 2, 35);
    design.setup("White", "Stone", 4, 35);
    design.setup("White", "Stone", 10, 35);
    design.setup("White", "Stone", 11, 35);
    design.setup("White", "Stone", 12, 35);
    design.setup("White", "Stone", 13, 35);
    design.setup("White", "Stone", 30, 35);
    design.setup("White", "Stone", 31, 35);
    design.setup("White", "Stone", 58, 35);
    design.setup("White", "Stone", 59, 35);
    design.setup("White", "Stone", 60, 35);
    design.setup("White", "Stone", 77, 35);
    design.setup("White", "Stone", 79, 35);
    design.setup("Black", "Stone", 1, 35);
    design.setup("Black", "Stone", 3, 35);
    design.setup("Black", "Stone", 20, 35);
    design.setup("Black", "Stone", 21, 35);
    design.setup("Black", "Stone", 22, 35);
    design.setup("Black", "Stone", 49, 35);
    design.setup("Black", "Stone", 50, 35);
    design.setup("Black", "Stone", 67, 35);
    design.setup("Black", "Stone", 68, 35);
    design.setup("Black", "Stone", 69, 35);
    design.setup("Black", "Stone", 70, 35);
    design.setup("Black", "Stone", 76, 35);
    design.setup("Black", "Stone", 78, 35);
    design.setup("Black", "Stone", 80, 35);

    design.setup("White", "Stone", 2, 36);
    design.setup("White", "Stone", 20, 36);
    design.setup("White", "Stone", 22, 36);
    design.setup("White", "Stone", 47, 36);
    design.setup("White", "Stone", 52, 36);
    design.setup("White", "Stone", 57, 36);
    design.setup("White", "Stone", 59, 36);
    design.setup("White", "Stone", 61, 36);
    design.setup("White", "Stone", 67, 36);
    design.setup("White", "Stone", 68, 36);
    design.setup("White", "Stone", 69, 36);
    design.setup("White", "Stone", 70, 36);
    design.setup("White", "Stone", 77, 36);
    design.setup("White", "Stone", 79, 36);
    design.setup("Black", "Stone", 1, 36);
    design.setup("Black", "Stone", 3, 36);
    design.setup("Black", "Stone", 10, 36);
    design.setup("Black", "Stone", 11, 36);
    design.setup("Black", "Stone", 12, 36);
    design.setup("Black", "Stone", 13, 36);
    design.setup("Black", "Stone", 19, 36);
    design.setup("Black", "Stone", 21, 36);
    design.setup("Black", "Stone", 23, 36);
    design.setup("Black", "Stone", 28, 36);
    design.setup("Black", "Stone", 33, 36);
    design.setup("Black", "Stone", 58, 36);
    design.setup("Black", "Stone", 60, 36);
    design.setup("Black", "Stone", 78, 36);

    design.setup("White", "Stone", 1, 37);
    design.setup("White", "Stone", 2, 37);
    design.setup("White", "Stone", 3, 37);
    design.setup("White", "Stone", 11, 37);
    design.setup("White", "Stone", 12, 37);
    design.setup("White", "Stone", 20, 37);
    design.setup("White", "Stone", 21, 37);
    design.setup("White", "Stone", 22, 37);
    design.setup("White", "Stone", 51, 37);
    design.setup("White", "Stone", 52, 37);
    design.setup("White", "Stone", 53, 37);
    design.setup("White", "Stone", 61, 37);
    design.setup("White", "Stone", 62, 37);
    design.setup("White", "Stone", 71, 37);
    design.setup("Black", "Stone", 9, 37);
    design.setup("Black", "Stone", 18, 37);
    design.setup("Black", "Stone", 19, 37);
    design.setup("Black", "Stone", 27, 37);
    design.setup("Black", "Stone", 28, 37);
    design.setup("Black", "Stone", 29, 37);
    design.setup("Black", "Stone", 58, 37);
    design.setup("Black", "Stone", 59, 37);
    design.setup("Black", "Stone", 60, 37);
    design.setup("Black", "Stone", 68, 37);
    design.setup("Black", "Stone", 69, 37);
    design.setup("Black", "Stone", 77, 37);
    design.setup("Black", "Stone", 78, 37);
    design.setup("Black", "Stone", 79, 37);

    design.setup("White", "Stone", 11, 38);
    design.setup("White", "Stone", 12, 38);
    design.setup("White", "Stone", 20, 38);
    design.setup("White", "Stone", 22, 38);
    design.setup("White", "Stone", 30, 38);
    design.setup("White", "Stone", 31, 38);
    design.setup("White", "Stone", 38, 38);
    design.setup("White", "Stone", 42, 38);
    design.setup("White", "Stone", 49, 38);
    design.setup("White", "Stone", 50, 38);
    design.setup("White", "Stone", 58, 38);
    design.setup("White", "Stone", 60, 38);
    design.setup("White", "Stone", 68, 38);
    design.setup("White", "Stone", 69, 38);
    design.setup("Black", "Stone", 21, 38);
    design.setup("Black", "Stone", 28, 38);
    design.setup("Black", "Stone", 29, 38);
    design.setup("Black", "Stone", 32, 38);
    design.setup("Black", "Stone", 33, 38);
    design.setup("Black", "Stone", 37, 38);
    design.setup("Black", "Stone", 39, 38);
    design.setup("Black", "Stone", 41, 38);
    design.setup("Black", "Stone", 43, 38);
    design.setup("Black", "Stone", 47, 38);
    design.setup("Black", "Stone", 48, 38);
    design.setup("Black", "Stone", 51, 38);
    design.setup("Black", "Stone", 52, 38);
    design.setup("Black", "Stone", 59, 38);

    design.setup("White", "Stone", 3, 39);
    design.setup("White", "Stone", 10, 39);
    design.setup("White", "Stone", 19, 39);
    design.setup("White", "Stone", 21, 39);
    design.setup("White", "Stone", 28, 39);
    design.setup("White", "Stone", 31, 39);
    design.setup("White", "Stone", 34, 39);
    design.setup("White", "Stone", 37, 39);
    design.setup("White", "Stone", 41, 39);
    design.setup("White", "Stone", 60, 39);
    design.setup("White", "Stone", 56, 39);
    design.setup("White", "Stone", 66, 39);
    design.setup("White", "Stone", 76, 39);
    design.setup("White", "Stone", 78, 39);
    design.setup("Black", "Stone", 2, 39);
    design.setup("Black", "Stone", 4, 39);
    design.setup("Black", "Stone", 14, 39);
    design.setup("Black", "Stone", 20, 39);
    design.setup("Black", "Stone", 24, 39);
    design.setup("Black", "Stone", 39, 39);
    design.setup("Black", "Stone", 43, 39);
    design.setup("Black", "Stone", 46, 39);
    design.setup("Black", "Stone", 49, 39);
    design.setup("Black", "Stone", 52, 39);
    design.setup("Black", "Stone", 59, 39);
    design.setup("Black", "Stone", 61, 39);
    design.setup("Black", "Stone", 70, 39);
    design.setup("Black", "Stone", 77, 39);

    design.setup("White", "Stone", 0, 40);
    design.setup("White", "Stone", 1, 40);
    design.setup("White", "Stone", 2, 40);
    design.setup("White", "Stone", 3, 40);
    design.setup("White", "Stone", 4, 40);
    design.setup("White", "Stone", 20, 40);
    design.setup("White", "Stone", 21, 40);
    design.setup("White", "Stone", 22, 40);
    design.setup("White", "Stone", 49, 40);
    design.setup("White", "Stone", 50, 40);
    design.setup("White", "Stone", 67, 40);
    design.setup("White", "Stone", 68, 40);
    design.setup("White", "Stone", 69, 40);
    design.setup("White", "Stone", 70, 40);
    design.setup("Black", "Stone", 10, 40);
    design.setup("Black", "Stone", 11, 40);
    design.setup("Black", "Stone", 12, 40);
    design.setup("Black", "Stone", 13, 40);
    design.setup("Black", "Stone", 30, 40);
    design.setup("Black", "Stone", 31, 40);
    design.setup("Black", "Stone", 58, 40);
    design.setup("Black", "Stone", 59, 40);
    design.setup("Black", "Stone", 60, 40);
    design.setup("Black", "Stone", 76, 40);
    design.setup("Black", "Stone", 77, 40);
    design.setup("Black", "Stone", 78, 40);
    design.setup("Black", "Stone", 79, 40);
    design.setup("Black", "Stone", 80, 40);

    design.setup("White", "Stone", 20, 41);
    design.setup("White", "Stone", 21, 41);
    design.setup("White", "Stone", 29, 41);
    design.setup("White", "Stone", 30, 41);
    design.setup("White", "Stone", 31, 41);
    design.setup("White", "Stone", 39, 41);
    design.setup("White", "Stone", 40, 41);
    design.setup("White", "Stone", 60, 41);
    design.setup("White", "Stone", 62, 41);
    design.setup("White", "Stone", 70, 41);
    design.setup("White", "Stone", 71, 41);
    design.setup("White", "Stone", 78, 41);
    design.setup("White", "Stone", 79, 41);
    design.setup("White", "Stone", 80, 41);
    design.setup("Black", "Stone", 10, 41);
    design.setup("Black", "Stone", 11, 41);
    design.setup("Black", "Stone", 12, 41);
    design.setup("Black", "Stone", 19, 41);
    design.setup("Black", "Stone", 22, 41);
    design.setup("Black", "Stone", 28, 41);
    design.setup("Black", "Stone", 32, 41);
    design.setup("Black", "Stone", 38, 41);
    design.setup("Black", "Stone", 41, 41);
    design.setup("Black", "Stone", 48, 41);
    design.setup("Black", "Stone", 49, 41);
    design.setup("Black", "Stone", 50, 41);
    design.setup("Black", "Stone", 61, 41);
    design.setup("Black", "Stone", 69, 41);

    design.setup("White", "Stone", 2, 42);
    design.setup("White", "Stone", 3, 42);
    design.setup("White", "Stone", 4, 42);
    design.setup("White", "Stone", 11, 42);
    design.setup("White", "Stone", 14, 42);
    design.setup("White", "Stone", 20, 42);
    design.setup("White", "Stone", 21, 42);
    design.setup("White", "Stone", 22, 42);
    design.setup("White", "Stone", 24, 42);
    design.setup("White", "Stone", 32, 42);
    design.setup("White", "Stone", 33, 42);
    design.setup("White", "Stone", 42, 42);
    design.setup("White", "Stone", 57, 42);
    design.setup("White", "Stone", 68, 42);
    design.setup("Black", "Stone", 12, 42);
    design.setup("Black", "Stone", 23, 42);
    design.setup("Black", "Stone", 38, 42);
    design.setup("Black", "Stone", 47, 42);
    design.setup("Black", "Stone", 48, 42);
    design.setup("Black", "Stone", 56, 42);
    design.setup("Black", "Stone", 58, 42);
    design.setup("Black", "Stone", 59, 42);
    design.setup("Black", "Stone", 60, 42);
    design.setup("Black", "Stone", 66, 42);
    design.setup("Black", "Stone", 69, 42);
    design.setup("Black", "Stone", 76, 42);
    design.setup("Black", "Stone", 77, 42);
    design.setup("Black", "Stone", 78, 42);

    design.setup("White", "Stone", 0, 43);
    design.setup("White", "Stone", 10, 43);
    design.setup("White", "Stone", 11, 43);
    design.setup("White", "Stone", 19, 43);
    design.setup("White", "Stone", 30, 43);
    design.setup("White", "Stone", 33, 43);
    design.setup("White", "Stone", 43, 43);
    design.setup("White", "Stone", 44, 43);
    design.setup("White", "Stone", 50, 43);
    design.setup("White", "Stone", 52, 43);
    design.setup("White", "Stone", 57, 43);
    design.setup("White", "Stone", 67, 43);
    design.setup("White", "Stone", 68, 43);
    design.setup("White", "Stone", 76, 43);
    design.setup("Black", "Stone", 4, 43);
    design.setup("Black", "Stone", 12, 43);
    design.setup("Black", "Stone", 13, 43);
    design.setup("Black", "Stone", 23, 43);
    design.setup("Black", "Stone", 28, 43);
    design.setup("Black", "Stone", 31, 43);
    design.setup("Black", "Stone", 36, 43);
    design.setup("Black", "Stone", 37, 43);
    design.setup("Black", "Stone", 47, 43);
    design.setup("Black", "Stone", 49, 43);
    design.setup("Black", "Stone", 61, 43);
    design.setup("Black", "Stone", 69, 43);
    design.setup("Black", "Stone", 70, 43);
    design.setup("Black", "Stone", 80, 43);

    design.setup("White", "Stone", 0, 44);
    design.setup("White", "Stone", 2, 44);
    design.setup("White", "Stone", 11, 44);
    design.setup("White", "Stone", 18, 44);
    design.setup("White", "Stone", 19, 44);
    design.setup("White", "Stone", 21, 44);
    design.setup("White", "Stone", 22, 44);
    design.setup("White", "Stone", 23, 44);
    design.setup("White", "Stone", 29, 44);
    design.setup("White", "Stone", 38, 44);
    design.setup("White", "Stone", 47, 44);
    design.setup("White", "Stone", 60, 44);
    design.setup("White", "Stone", 71, 44);
    design.setup("White", "Stone", 79, 44);
    design.setup("Black", "Stone", 1, 44);
    design.setup("Black", "Stone", 9, 44);
    design.setup("Black", "Stone", 20, 44);
    design.setup("Black", "Stone", 33, 44);
    design.setup("Black", "Stone", 42, 44);
    design.setup("Black", "Stone", 51, 44);
    design.setup("Black", "Stone", 57, 44);
    design.setup("Black", "Stone", 58, 44);
    design.setup("Black", "Stone", 59, 44);
    design.setup("Black", "Stone", 61, 44);
    design.setup("Black", "Stone", 62, 44);
    design.setup("Black", "Stone", 69, 44);
    design.setup("Black", "Stone", 78, 44);
    design.setup("Black", "Stone", 80, 44);

    design.setup("White", "Stone", 0, 45);
    design.setup("White", "Stone", 9, 45);
    design.setup("White", "Stone", 10, 45);
    design.setup("White", "Stone", 18, 45);
    design.setup("White", "Stone", 19, 45);
    design.setup("White", "Stone", 20, 45);
    design.setup("White", "Stone", 27, 45);
    design.setup("White", "Stone", 28, 45);
    design.setup("White", "Stone", 29, 45);
    design.setup("White", "Stone", 30, 45);
    design.setup("White", "Stone", 36, 45);
    design.setup("White", "Stone", 37, 45);
    design.setup("White", "Stone", 38, 45);
    design.setup("White", "Stone", 39, 45);
    design.setup("Black", "Stone", 41, 45);
    design.setup("Black", "Stone", 42, 45);
    design.setup("Black", "Stone", 43, 45);
    design.setup("Black", "Stone", 44, 45);
    design.setup("Black", "Stone", 50, 45);
    design.setup("Black", "Stone", 51, 45);
    design.setup("Black", "Stone", 52, 45);
    design.setup("Black", "Stone", 53, 45);
    design.setup("Black", "Stone", 60, 45);
    design.setup("Black", "Stone", 61, 45);
    design.setup("Black", "Stone", 62, 45);
    design.setup("Black", "Stone", 70, 45);
    design.setup("Black", "Stone", 71, 45);
    design.setup("Black", "Stone", 80, 45);

    design.setup("White", "Stone", 0, 46);
    design.setup("White", "Stone", 3, 46);
    design.setup("White", "Stone", 10, 46);
    design.setup("White", "Stone", 11, 46);
    design.setup("White", "Stone", 14, 46);
    design.setup("White", "Stone", 19, 46);
    design.setup("White", "Stone", 22, 46);
    design.setup("White", "Stone", 58, 46);
    design.setup("White", "Stone", 61, 46);
    design.setup("White", "Stone", 66, 46);
    design.setup("White", "Stone", 69, 46);
    design.setup("White", "Stone", 70, 46);
    design.setup("White", "Stone", 77, 46);
    design.setup("White", "Stone", 80, 46);
    design.setup("Black", "Stone", 1, 46);
    design.setup("Black", "Stone", 4, 46);
    design.setup("Black", "Stone", 9, 46);
    design.setup("Black", "Stone", 12, 46);
    design.setup("Black", "Stone", 13, 46);
    design.setup("Black", "Stone", 20, 46);
    design.setup("Black", "Stone", 23, 46);
    design.setup("Black", "Stone", 57, 46);
    design.setup("Black", "Stone", 60, 46);
    design.setup("Black", "Stone", 67, 46);
    design.setup("Black", "Stone", 68, 46);
    design.setup("Black", "Stone", 71, 46);
    design.setup("Black", "Stone", 76, 46);
    design.setup("Black", "Stone", 79, 46);

    design.setup("White", "Stone", 0, 47);
    design.setup("White", "Stone", 1, 47);
    design.setup("White", "Stone", 2, 47);
    design.setup("White", "Stone", 9, 47);
    design.setup("White", "Stone", 18, 47);
    design.setup("White", "Stone", 27, 47);
    design.setup("White", "Stone", 31, 47);
    design.setup("White", "Stone", 36, 47);
    design.setup("White", "Stone", 41, 47);
    design.setup("White", "Stone", 46, 47);
    design.setup("White", "Stone", 50, 47);
    design.setup("White", "Stone", 56, 47);
    design.setup("White", "Stone", 66, 47);
    design.setup("White", "Stone", 76, 47);
    design.setup("White", "Stone", 77, 47);
    design.setup("Black", "Stone", 3, 47);
    design.setup("Black", "Stone", 4, 47);
    design.setup("Black", "Stone", 14, 47);
    design.setup("Black", "Stone", 24, 47);
    design.setup("Black", "Stone", 30, 47);
    design.setup("Black", "Stone", 34, 47);
    design.setup("Black", "Stone", 39, 47);
    design.setup("Black", "Stone", 44, 47);
    design.setup("Black", "Stone", 49, 47);
    design.setup("Black", "Stone", 53, 47);
    design.setup("Black", "Stone", 62, 47);
    design.setup("Black", "Stone", 71, 47);
    design.setup("Black", "Stone", 78, 47);
    design.setup("Black", "Stone", 79, 47);
    design.setup("Black", "Stone", 80, 47);

    design.setup("White", "Stone", 1, 48);
    design.setup("White", "Stone", 2, 48);
    design.setup("White", "Stone", 3, 48);
    design.setup("White", "Stone", 4, 48);
    design.setup("White", "Stone", 10, 48);
    design.setup("White", "Stone", 20, 48);
    design.setup("White", "Stone", 21, 48);
    design.setup("White", "Stone", 22, 48);
    design.setup("White", "Stone", 23, 48);
    design.setup("White", "Stone", 24, 48);
    design.setup("White", "Stone", 34, 48);
    design.setup("White", "Stone", 41, 48);
    design.setup("White", "Stone", 42, 48);
    design.setup("White", "Stone", 43, 48);
    design.setup("Black", "Stone", 37, 48);
    design.setup("Black", "Stone", 38, 48);
    design.setup("Black", "Stone", 39, 48);
    design.setup("Black", "Stone", 46, 48);
    design.setup("Black", "Stone", 56, 48);
    design.setup("Black", "Stone", 57, 48);
    design.setup("Black", "Stone", 58, 48);
    design.setup("Black", "Stone", 59, 48);
    design.setup("Black", "Stone", 60, 48);
    design.setup("Black", "Stone", 70, 48);
    design.setup("Black", "Stone", 76, 48);
    design.setup("Black", "Stone", 77, 48);
    design.setup("Black", "Stone", 78, 48);
    design.setup("Black", "Stone", 79, 48);

    design.setup("White", "Stone", 29, 49);
    design.setup("White", "Stone", 30, 49);
    design.setup("White", "Stone", 31, 49);
    design.setup("White", "Stone", 32, 49);
    design.setup("White", "Stone", 33, 49);
    design.setup("White", "Stone", 43, 49);
    design.setup("White", "Stone", 53, 49);
    design.setup("White", "Stone", 62, 49);
    design.setup("White", "Stone", 71, 49);
    design.setup("White", "Stone", 76, 49);
    design.setup("White", "Stone", 77, 49);
    design.setup("White", "Stone", 78, 49);
    design.setup("White", "Stone", 79, 49);
    design.setup("White", "Stone", 80, 49);
    design.setup("Black", "Stone", 0, 49);
    design.setup("Black", "Stone", 1, 49);
    design.setup("Black", "Stone", 2, 49);
    design.setup("Black", "Stone", 3, 49);
    design.setup("Black", "Stone", 4, 49);
    design.setup("Black", "Stone", 9, 49);
    design.setup("Black", "Stone", 18, 49);
    design.setup("Black", "Stone", 27, 49);
    design.setup("Black", "Stone", 37, 49);
    design.setup("Black", "Stone", 47, 49);
    design.setup("Black", "Stone", 48, 49);
    design.setup("Black", "Stone", 49, 49);
    design.setup("Black", "Stone", 50, 49);
    design.setup("Black", "Stone", 51, 49);

    design.setup("White", "Stone", 3, 50);
    design.setup("White", "Stone", 10, 50);
    design.setup("White", "Stone", 14, 50);
    design.setup("White", "Stone", 20, 50);
    design.setup("White", "Stone", 27, 50);
    design.setup("White", "Stone", 31, 50);
    design.setup("White", "Stone", 37, 50);
    design.setup("White", "Stone", 42, 50);
    design.setup("White", "Stone", 46, 50);
    design.setup("White", "Stone", 49, 50);
    design.setup("White", "Stone", 58, 50);
    design.setup("White", "Stone", 70, 50);
    design.setup("White", "Stone", 71, 50);
    design.setup("White", "Stone", 79, 50);
    design.setup("Black", "Stone", 1, 50);
    design.setup("Black", "Stone", 9, 50);
    design.setup("Black", "Stone", 13, 50);
    design.setup("Black", "Stone", 22, 50);
    design.setup("Black", "Stone", 30, 50);
    design.setup("Black", "Stone", 34, 50);
    design.setup("Black", "Stone", 38, 50);
    design.setup("Black", "Stone", 43, 50);
    design.setup("Black", "Stone", 50, 50);
    design.setup("Black", "Stone", 53, 50);
    design.setup("Black", "Stone", 60, 50);
    design.setup("Black", "Stone", 66, 50);
    design.setup("Black", "Stone", 67, 50);
    design.setup("Black", "Stone", 77, 50);

    design.setup("White", "Stone", 0, 51);
    design.setup("White", "Stone", 4, 51);
    design.setup("White", "Stone", 10, 51);
    design.setup("White", "Stone", 13, 51);
    design.setup("White", "Stone", 20, 51);
    design.setup("White", "Stone", 22, 51);
    design.setup("White", "Stone", 29, 51);
    design.setup("White", "Stone", 30, 51);
    design.setup("White", "Stone", 31, 51);
    design.setup("White", "Stone", 32, 51);
    design.setup("White", "Stone", 41, 51);
    design.setup("White", "Stone", 42, 51);
    design.setup("White", "Stone", 43, 51);
    design.setup("White", "Stone", 44, 51);
    design.setup("Black", "Stone", 36, 51);
    design.setup("Black", "Stone", 37, 51);
    design.setup("Black", "Stone", 38, 51);
    design.setup("Black", "Stone", 39, 51);
    design.setup("Black", "Stone", 48, 51);
    design.setup("Black", "Stone", 49, 51);
    design.setup("Black", "Stone", 50, 51);
    design.setup("Black", "Stone", 51, 51);
    design.setup("Black", "Stone", 58, 51);
    design.setup("Black", "Stone", 60, 51);
    design.setup("Black", "Stone", 67, 51);
    design.setup("Black", "Stone", 70, 51);
    design.setup("Black", "Stone", 76, 51);
    design.setup("Black", "Stone", 80, 51);

    design.setup("White", "Stone", 4, 52);
    design.setup("White", "Stone", 10, 52);
    design.setup("White", "Stone", 18, 52);
    design.setup("White", "Stone", 22, 52);
    design.setup("White", "Stone", 30, 52);
    design.setup("White", "Stone", 36, 52);
    design.setup("White", "Stone", 38, 52);
    design.setup("White", "Stone", 41, 52);
    design.setup("White", "Stone", 43, 52);
    design.setup("White", "Stone", 49, 52);
    design.setup("White", "Stone", 56, 52);
    design.setup("White", "Stone", 60, 52);
    design.setup("White", "Stone", 67, 52);
    design.setup("White", "Stone", 80, 52);
    design.setup("Black", "Stone", 0, 52);
    design.setup("Black", "Stone", 13, 52);
    design.setup("Black", "Stone", 20, 52);
    design.setup("Black", "Stone", 24, 52);
    design.setup("Black", "Stone", 31, 52);
    design.setup("Black", "Stone", 37, 52);
    design.setup("Black", "Stone", 39, 52);
    design.setup("Black", "Stone", 42, 52);
    design.setup("Black", "Stone", 44, 52);
    design.setup("Black", "Stone", 50, 52);
    design.setup("Black", "Stone", 58, 52);
    design.setup("Black", "Stone", 62, 52);
    design.setup("Black", "Stone", 70, 52);
    design.setup("Black", "Stone", 76, 52);

    design.setup("White", "Stone", 2, 53);
    design.setup("White", "Stone", 3, 53);
    design.setup("White", "Stone", 18, 53);
    design.setup("White", "Stone", 21, 53);
    design.setup("White", "Stone", 22, 53);
    design.setup("White", "Stone", 27, 53);
    design.setup("White", "Stone", 29, 53);
    design.setup("White", "Stone", 38, 53);
    design.setup("White", "Stone", 40, 53);
    design.setup("White", "Stone", 41, 53);
    design.setup("White", "Stone", 49, 53);
    design.setup("White", "Stone", 61, 53);
    design.setup("White", "Stone", 69, 53);
    design.setup("Black", "Stone", 0, 53);
    design.setup("Black", "Stone", 1, 53);
    design.setup("Black", "Stone", 9, 53);
    design.setup("Black", "Stone", 10, 53);
    design.setup("Black", "Stone", 20, 53);
    design.setup("Black", "Stone", 30, 53);
    design.setup("Black", "Stone", 31, 53);
    design.setup("Black", "Stone", 39, 53);
    design.setup("Black", "Stone", 50, 53);
    design.setup("Black", "Stone", 60, 53);
    design.setup("Black", "Stone", 70, 53);
    design.setup("Black", "Stone", 71, 53);
    design.setup("Black", "Stone", 79, 53);
    design.setup("Black", "Stone", 80, 53);

    design.setup("White", "Stone", 2, 54);
    design.setup("White", "Stone", 4, 54);
    design.setup("White", "Stone", 10, 54);
    design.setup("White", "Stone", 21, 54);
    design.setup("White", "Stone", 23, 54);
    design.setup("White", "Stone", 34, 54);
    design.setup("White", "Stone", 42, 54);
    design.setup("White", "Stone", 37, 54);
    design.setup("White", "Stone", 39, 54);
    design.setup("White", "Stone", 56, 54);
    design.setup("White", "Stone", 58, 54);
    design.setup("White", "Stone", 60, 54);
    design.setup("White", "Stone", 77, 54);
    design.setup("White", "Stone", 79, 54);
    design.setup("Black", "Stone", 1, 54);
    design.setup("Black", "Stone", 3, 54);
    design.setup("Black", "Stone", 20, 54);
    design.setup("Black", "Stone", 22, 54);
    design.setup("Black", "Stone", 24, 54);
    design.setup("Black", "Stone", 41, 54);
    design.setup("Black", "Stone", 43, 54);
    design.setup("Black", "Stone", 38, 54);
    design.setup("Black", "Stone", 46, 54);
    design.setup("Black", "Stone", 57, 54);
    design.setup("Black", "Stone", 59, 54);
    design.setup("Black", "Stone", 70, 54);
    design.setup("Black", "Stone", 76, 54);
    design.setup("Black", "Stone", 78, 54);

    design.setup("White", "Stone", 9, 55);
    design.setup("White", "Stone", 10, 55);
    design.setup("White", "Stone", 11, 55);
    design.setup("White", "Stone", 12, 55);
    design.setup("White", "Stone", 13, 55);
    design.setup("White", "Stone", 14, 55);
    design.setup("White", "Stone", 29, 55);
    design.setup("White", "Stone", 30, 55);
    design.setup("White", "Stone", 31, 55);
    design.setup("White", "Stone", 57, 55);
    design.setup("White", "Stone", 58, 55);
    design.setup("White", "Stone", 59, 55);
    design.setup("White", "Stone", 60, 55);
    design.setup("White", "Stone", 61, 55);
    design.setup("Black", "Stone", 19, 55);
    design.setup("Black", "Stone", 20, 55);
    design.setup("Black", "Stone", 21, 55);
    design.setup("Black", "Stone", 22, 55);
    design.setup("Black", "Stone", 23, 55);
    design.setup("Black", "Stone", 49, 55);
    design.setup("Black", "Stone", 50, 55);
    design.setup("Black", "Stone", 51, 55);
    design.setup("Black", "Stone", 66, 55);
    design.setup("Black", "Stone", 67, 55);
    design.setup("Black", "Stone", 68, 55);
    design.setup("Black", "Stone", 69, 55);
    design.setup("Black", "Stone", 70, 55);
    design.setup("Black", "Stone", 71, 55);

    design.setup("White", "Stone", 0, 56);
    design.setup("White", "Stone", 1, 56);
    design.setup("White", "Stone", 9, 56);
    design.setup("White", "Stone", 10, 56);
    design.setup("White", "Stone", 11, 56);
    design.setup("White", "Stone", 13, 56);
    design.setup("White", "Stone", 14, 56);
    design.setup("White", "Stone", 19, 56);
    design.setup("White", "Stone", 20, 56);
    design.setup("White", "Stone", 22, 56);
    design.setup("White", "Stone", 23, 56);
    design.setup("White", "Stone", 24, 56);
    design.setup("White", "Stone", 32, 56);
    design.setup("White", "Stone", 33, 56);
    design.setup("Black", "Stone", 30, 56);
    design.setup("Black", "Stone", 40, 56);
    design.setup("Black", "Stone", 41, 56);
    design.setup("Black", "Stone", 50, 56);
    design.setup("Black", "Stone", 56, 56);
    design.setup("Black", "Stone", 59, 56);
    design.setup("Black", "Stone", 66, 56);
    design.setup("Black", "Stone", 68, 56);
    design.setup("Black", "Stone", 71, 56);
    design.setup("Black", "Stone", 76, 56);
    design.setup("Black", "Stone", 77, 56);
    design.setup("Black", "Stone", 78, 56);
    design.setup("Black", "Stone", 79, 56);
    design.setup("Black", "Stone", 80, 56);

    design.setup("White", "Stone", 10, 57);
    design.setup("White", "Stone", 11, 57);
    design.setup("White", "Stone", 19, 57);
    design.setup("White", "Stone", 21, 57);
    design.setup("White", "Stone", 28, 57);
    design.setup("White", "Stone", 31, 57);
    design.setup("White", "Stone", 37, 57);
    design.setup("White", "Stone", 41, 57);
    design.setup("White", "Stone", 47, 57);
    design.setup("White", "Stone", 50, 57);
    design.setup("White", "Stone", 57, 57);
    design.setup("White", "Stone", 58, 57);
    design.setup("White", "Stone", 67, 57);
    design.setup("White", "Stone", 68, 57);
    design.setup("Black", "Stone", 12, 57);
    design.setup("Black", "Stone", 13, 57);
    design.setup("Black", "Stone", 22, 57);
    design.setup("Black", "Stone", 23, 57);
    design.setup("Black", "Stone", 30, 57);
    design.setup("Black", "Stone", 33, 57);
    design.setup("Black", "Stone", 39, 57);
    design.setup("Black", "Stone", 43, 57);
    design.setup("Black", "Stone", 49, 57);
    design.setup("Black", "Stone", 52, 57);
    design.setup("Black", "Stone", 59, 57);
    design.setup("Black", "Stone", 61, 57);
    design.setup("Black", "Stone", 69, 57);
    design.setup("Black", "Stone", 70, 57);

    design.setup("White", "Stone", 0, 58);
    design.setup("White", "Stone", 4, 58);
    design.setup("White", "Stone", 10, 58);
    design.setup("White", "Stone", 13, 58);
    design.setup("White", "Stone", 20, 58);
    design.setup("White", "Stone", 22, 58);
    design.setup("White", "Stone", 29, 58);
    design.setup("White", "Stone", 31, 58);
    design.setup("White", "Stone", 38, 58);
    design.setup("White", "Stone", 41, 58);
    design.setup("White", "Stone", 43, 58);
    design.setup("White", "Stone", 44, 58);
    design.setup("White", "Stone", 48, 58);
    design.setup("White", "Stone", 50, 58);
    design.setup("Black", "Stone", 30, 58);
    design.setup("Black", "Stone", 32, 58);
    design.setup("Black", "Stone", 36, 58);
    design.setup("Black", "Stone", 37, 58);
    design.setup("Black", "Stone", 39, 58);
    design.setup("Black", "Stone", 42, 58);
    design.setup("Black", "Stone", 49, 58);
    design.setup("Black", "Stone", 51, 58);
    design.setup("Black", "Stone", 58, 58);
    design.setup("Black", "Stone", 60, 58);
    design.setup("Black", "Stone", 67, 58);
    design.setup("Black", "Stone", 70, 58);
    design.setup("Black", "Stone", 76, 58);
    design.setup("Black", "Stone", 80, 58);

    design.setup("White", "Stone", 0, 59);
    design.setup("White", "Stone", 9, 59);
    design.setup("White", "Stone", 10, 59);
    design.setup("White", "Stone", 19, 59);
    design.setup("White", "Stone", 33, 59);
    design.setup("White", "Stone", 34, 59);
    design.setup("White", "Stone", 39, 59);
    design.setup("White", "Stone", 41, 59);
    design.setup("White", "Stone", 43, 59);
    design.setup("White", "Stone", 44, 59);
    design.setup("White", "Stone", 67, 59);
    design.setup("White", "Stone", 68, 59);
    design.setup("White", "Stone", 76, 59);
    design.setup("White", "Stone", 77, 59);
    design.setup("Black", "Stone", 3, 59);
    design.setup("Black", "Stone", 4, 59);
    design.setup("Black", "Stone", 12, 59);
    design.setup("Black", "Stone", 13, 59);
    design.setup("Black", "Stone", 31, 59);
    design.setup("Black", "Stone", 36, 59);
    design.setup("Black", "Stone", 37, 59);
    design.setup("Black", "Stone", 46, 59);
    design.setup("Black", "Stone", 47, 59);
    design.setup("Black", "Stone", 49, 59);
    design.setup("Black", "Stone", 61, 59);
    design.setup("Black", "Stone", 70, 59);
    design.setup("Black", "Stone", 71, 59);
    design.setup("Black", "Stone", 80, 59);

    design.setup("White", "Stone", 2, 60);
    design.setup("White", "Stone", 11, 60);
    design.setup("White", "Stone", 12, 60);
    design.setup("White", "Stone", 20, 60);
    design.setup("White", "Stone", 42, 60);
    design.setup("White", "Stone", 47, 60);
    design.setup("White", "Stone", 48, 60);
    design.setup("White", "Stone", 51, 60);
    design.setup("White", "Stone", 52, 60);
    design.setup("White", "Stone", 56, 60);
    design.setup("White", "Stone", 57, 60);
    design.setup("White", "Stone", 58, 60);
    design.setup("White", "Stone", 61, 60);
    design.setup("White", "Stone", 62, 60);
    design.setup("Black", "Stone", 18, 60);
    design.setup("Black", "Stone", 19, 60);
    design.setup("Black", "Stone", 22, 60);
    design.setup("Black", "Stone", 23, 60);
    design.setup("Black", "Stone", 24, 60);
    design.setup("Black", "Stone", 28, 60);
    design.setup("Black", "Stone", 29, 60);
    design.setup("Black", "Stone", 32, 60);
    design.setup("Black", "Stone", 33, 60);
    design.setup("Black", "Stone", 38, 60);
    design.setup("Black", "Stone", 60, 60);
    design.setup("Black", "Stone", 68, 60);
    design.setup("Black", "Stone", 69, 60);
    design.setup("Black", "Stone", 78, 60);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackCaptured", "Black Captured");
    view.defPiece("WhiteCaptured", "White Captured");
 
    view.defPosition("a9", 141, 85, 46, 40);
    view.defPosition("b9", 187, 85, 46, 40);
    view.defPosition("c9", 233, 85, 46, 40);
    view.defPosition("d9", 279, 85, 46, 40);
    view.defPosition("e9", 325, 85, 46, 40);
    view.defPosition("f9", 371, 85, 46, 40);
    view.defPosition("g9", 417, 85, 46, 40);
    view.defPosition("h9", 463, 85, 46, 40);
    view.defPosition("i9", 509, 85, 46, 40);
    view.defPosition("a8", 118, 125, 46, 40);
    view.defPosition("b8", 164, 125, 46, 40);
    view.defPosition("c8", 210, 125, 46, 40);
    view.defPosition("d8", 256, 125, 46, 40);
    view.defPosition("e8", 302, 125, 46, 40);
    view.defPosition("f8", 348, 125, 46, 40);
    view.defPosition("g8", 394, 125, 46, 40);
    view.defPosition("h8", 440, 125, 46, 40);
    view.defPosition("i8", 486, 125, 46, 40);
    view.defPosition("a7", 95, 165, 46, 40);
    view.defPosition("b7", 141, 165, 46, 40);
    view.defPosition("c7", 187, 165, 46, 40);
    view.defPosition("d7", 233, 165, 46, 40);
    view.defPosition("e7", 279, 165, 46, 40);
    view.defPosition("f7", 325, 165, 46, 40);
    view.defPosition("g7", 371, 165, 46, 40);
    view.defPosition("h7", 417, 165, 46, 40);
    view.defPosition("i7", 463, 165, 46, 40);
    view.defPosition("a6", 72, 205, 46, 40);
    view.defPosition("b6", 118, 205, 46, 40);
    view.defPosition("c6", 164, 205, 46, 40);
    view.defPosition("d6", 210, 205, 46, 40);
    view.defPosition("e6", 256, 205, 46, 40);
    view.defPosition("f6", 302, 205, 46, 40);
    view.defPosition("g6", 348, 205, 46, 40);
    view.defPosition("h6", 394, 205, 46, 40);
    view.defPosition("i6", 440, 205, 46, 40);
    view.defPosition("a5", 49, 245, 46, 40);
    view.defPosition("b5", 95, 245, 46, 40);
    view.defPosition("c5", 141, 245, 46, 40);
    view.defPosition("d5", 187, 245, 46, 40);
    view.defPosition("e5", 233, 245, 46, 40);
    view.defPosition("f5", 279, 245, 46, 40);
    view.defPosition("g5", 325, 245, 46, 40);
    view.defPosition("h5", 371, 245, 46, 40);
    view.defPosition("i5", 417, 245, 46, 40);
    view.defPosition("a4", 26, 285, 46, 40);
    view.defPosition("b4", 72, 285, 46, 40);
    view.defPosition("c4", 118, 285, 46, 40);
    view.defPosition("d4", 164, 285, 46, 40);
    view.defPosition("e4", 210, 285, 46, 40);
    view.defPosition("f4", 256, 285, 46, 40);
    view.defPosition("g4", 302, 285, 46, 40);
    view.defPosition("h4", 348, 285, 46, 40);
    view.defPosition("i4", 394, 285, 46, 40);
    view.defPosition("a3", 3, 325, 46, 40);
    view.defPosition("b3", 49, 325, 46, 40);
    view.defPosition("c3", 95, 325, 46, 40);
    view.defPosition("d3", 141, 325, 46, 40);
    view.defPosition("e3", 187, 325, 46, 40);
    view.defPosition("f3", 233, 325, 46, 40);
    view.defPosition("g3", 279, 325, 46, 40);
    view.defPosition("h3", 325, 325, 46, 40);
    view.defPosition("i3", 371, 325, 46, 40);
    view.defPosition("a2", -20, 365, 46, 40);
    view.defPosition("b2", 26, 365, 46, 40);
    view.defPosition("c2", 72, 365, 46, 40);
    view.defPosition("d2", 118, 365, 46, 40);
    view.defPosition("e2", 164, 365, 46, 40);
    view.defPosition("f2", 210, 365, 46, 40);
    view.defPosition("g2", 256, 365, 46, 40);
    view.defPosition("h2", 302, 365, 46, 40);
    view.defPosition("i2", 348, 365, 46, 40);
    view.defPosition("a1", -43, 405, 46, 40);
    view.defPosition("b1", 3, 405, 46, 40);
    view.defPosition("c1", 49, 405, 46, 40);
    view.defPosition("d1", 95, 405, 46, 40);
    view.defPosition("e1", 141, 405, 46, 40);
    view.defPosition("f1", 187, 405, 46, 40);
    view.defPosition("g1", 233, 405, 46, 40);
    view.defPosition("h1", 279, 405, 46, 40);
    view.defPosition("i1", 325, 405, 46, 40);
    view.defPosition("a10", 3, 4, 46, 40);
    view.defPosition("b10", 49, 4, 46, 40);
    view.defPosition("c10", 95, 4, 46, 40);
    view.defPosition("d10", 141, 4, 46, 40);
    view.defPosition("e10", 187, 4, 46, 40);
    view.defPosition("f10", 233, 4, 46, 40);
    view.defPosition("a0", 230, 485, 46, 40);
    view.defPosition("b0", 276, 485, 46, 40);
    view.defPosition("c0", 322, 485, 46, 40);
    view.defPosition("d0", 368, 485, 46, 40);
    view.defPosition("e0", 414, 485, 46, 40);
    view.defPosition("f0", 460, 485, 46, 40);
}
