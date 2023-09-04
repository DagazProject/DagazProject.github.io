Dagaz.AI.g_timeout        = 5000;

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
    design.checkVersion("promote-dialog", "remap");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("shogi-extension", "true");
    design.checkVersion("shogi-promotion", "true");
    design.checkVersion("common-shogi-invariant", "true");
    design.checkVersion("shogi-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("sr");
    design.addDirection("nr");
    design.addDirection("nx");

    design.addPlayer("South", [1, 0, 4, 6, 2, 7, 3, 5, 8, 9, 10]);
    design.addPlayer("North", [1, 0, 4, 6, 2, 7, 3, 5, 9, 8, 10]);

    design.addPosition("X9", [0, 0, 13, 0, 0, 0, 0, 0, 0, 13, 0]);
    design.addPosition("I9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 1, 13, 0, 0, 14, 0, 0, 114, -2, 105]);
    design.addPosition("b9", [-1, 1, 13, 0, 0, 14, 12, 0, 113, -3, 105]);
    design.addPosition("c9", [-1, 1, 13, 0, 0, 14, 12, 0, 112, -4, 105]);
    design.addPosition("d9", [-1, 1, 13, 0, 0, 14, 12, 0, 111, -5, 105]);
    design.addPosition("e9", [-1, 1, 13, 0, 0, 14, 12, 0, 110, -6, 105]);
    design.addPosition("f9", [-1, 1, 13, 0, 0, 14, 12, 0, 109, -7, 105]);
    design.addPosition("g9", [-1, 1, 13, 0, 0, 14, 12, 0, 108, -8, 105]);
    design.addPosition("h9", [-1, 1, 13, 0, 0, 14, 12, 0, 107, -9, 105]);
    design.addPosition("i9", [-1, 0, 13, 0, 0, 0, 12, 0, 106, -10, 0]);
    design.addPosition("J9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X8", [0, 0, 13, 0, -13, 0, 0, 0, 0, 13, 0]);
    design.addPosition("I8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, 13, -12, -13, 14, 0, 0, 101, -15, -13]);
    design.addPosition("b8", [-1, 1, 13, -12, -13, 14, 12, -14, 100, -16, -13]);
    design.addPosition("c8", [-1, 1, 13, -12, -13, 14, 12, -14, 99, -17, -13]);
    design.addPosition("d8", [-1, 1, 13, -12, -13, 14, 12, -14, 98, -18, -13]);
    design.addPosition("e8", [-1, 1, 13, -12, -13, 14, 12, -14, 97, -19, -13]);
    design.addPosition("f8", [-1, 1, 13, -12, -13, 14, 12, -14, 96, -20, -13]);
    design.addPosition("g8", [-1, 1, 13, -12, -13, 14, 12, -14, 95, -21, -13]);
    design.addPosition("h8", [-1, 1, 13, -12, -13, 14, 12, -14, 94, -22, -13]);
    design.addPosition("i8", [-1, 0, 13, 0, -13, 0, 12, -14, 93, -23, -13]);
    design.addPosition("J8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 13, 0, -13, 0, 0, 0, 0, 13, 0]);
    design.addPosition("I7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 13, -12, -13, 14, 0, 0, 88, -28, -13]);
    design.addPosition("b7", [-1, 1, 13, -12, -13, 14, 12, -14, 87, -29, -13]);
    design.addPosition("c7", [-1, 1, 13, -12, -13, 14, 12, -14, 86, -30, -13]);
    design.addPosition("d7", [-1, 1, 13, -12, -13, 14, 12, -14, 85, -31, -13]);
    design.addPosition("e7", [-1, 1, 13, -12, -13, 14, 12, -14, 84, -32, -13]);
    design.addPosition("f7", [-1, 1, 13, -12, -13, 14, 12, -14, 83, -33, -13]);
    design.addPosition("g7", [-1, 1, 13, -12, -13, 14, 12, -14, 82, -34, -13]);
    design.addPosition("h7", [-1, 1, 13, -12, -13, 14, 12, -14, 81, -35, -13]);
    design.addPosition("i7", [-1, 0, 13, 0, -13, 0, 12, -14, 80, -36, -13]);
    design.addPosition("J7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 13, 0, -13, 0, 0, 0, 0, 13, 0]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 13, -12, -13, 14, 0, 0, 75, -41, -13]);
    design.addPosition("b6", [-1, 1, 13, -12, -13, 14, 12, -14, 74, -42, -13]);
    design.addPosition("c6", [-1, 1, 13, -12, -13, 14, 12, -14, 73, -43, -13]);
    design.addPosition("d6", [-1, 1, 13, -12, -13, 14, 12, -14, 72, -44, -13]);
    design.addPosition("e6", [-1, 1, 13, -12, -13, 14, 12, -14, 71, -45, -13]);
    design.addPosition("f6", [-1, 1, 13, -12, -13, 14, 12, -14, 70, -46, -13]);
    design.addPosition("g6", [-1, 1, 13, -12, -13, 14, 12, -14, 69, -47, -13]);
    design.addPosition("h6", [-1, 1, 13, -12, -13, 14, 12, -14, 68, -48, -13]);
    design.addPosition("i6", [-1, 0, 13, 0, -13, 0, 12, -14, 67, -49, -13]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, -13, 0, 0, 0, 0, 0, 0]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 13, -12, -13, 14, 0, 0, 62, -54, -13]);
    design.addPosition("b5", [-1, 1, 13, -12, -13, 14, 12, -14, 61, -55, -13]);
    design.addPosition("c5", [-1, 1, 13, -12, -13, 14, 12, -14, 60, -56, -13]);
    design.addPosition("d5", [-1, 1, 13, -12, -13, 14, 12, -14, 59, -57, -13]);
    design.addPosition("e5", [-1, 1, 13, -12, -13, 14, 12, -14, 58, -58, -13]);
    design.addPosition("f5", [-1, 1, 13, -12, -13, 14, 12, -14, 57, -59, -13]);
    design.addPosition("g5", [-1, 1, 13, -12, -13, 14, 12, -14, 56, -60, -13]);
    design.addPosition("h5", [-1, 1, 13, -12, -13, 14, 12, -14, 55, -61, -13]);
    design.addPosition("i5", [-1, 0, 13, 0, -13, 0, 12, -14, 54, -62, -13]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 13, -12, -13, 14, 0, 0, 49, -67, -13]);
    design.addPosition("b4", [-1, 1, 13, -12, -13, 14, 12, -14, 48, -68, -13]);
    design.addPosition("c4", [-1, 1, 13, -12, -13, 14, 12, -14, 47, -69, -13]);
    design.addPosition("d4", [-1, 1, 13, -12, -13, 14, 12, -14, 46, -70, -13]);
    design.addPosition("e4", [-1, 1, 13, -12, -13, 14, 12, -14, 45, -71, -13]);
    design.addPosition("f4", [-1, 1, 13, -12, -13, 14, 12, -14, 44, -72, -13]);
    design.addPosition("g4", [-1, 1, 13, -12, -13, 14, 12, -14, 43, -73, -13]);
    design.addPosition("h4", [-1, 1, 13, -12, -13, 14, 12, -14, 42, -74, -13]);
    design.addPosition("i4", [-1, 0, 13, 0, -13, 0, 12, -14, 41, -75, -13]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 13, 0, -13, 0, 0, 0, -13, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 13, -12, -13, 14, 0, 0, 36, -80, -13]);
    design.addPosition("b3", [-1, 1, 13, -12, -13, 14, 12, -14, 35, -81, -13]);
    design.addPosition("c3", [-1, 1, 13, -12, -13, 14, 12, -14, 34, -82, -13]);
    design.addPosition("d3", [-1, 1, 13, -12, -13, 14, 12, -14, 33, -83, -13]);
    design.addPosition("e3", [-1, 1, 13, -12, -13, 14, 12, -14, 32, -84, -13]);
    design.addPosition("f3", [-1, 1, 13, -12, -13, 14, 12, -14, 31, -85, -13]);
    design.addPosition("g3", [-1, 1, 13, -12, -13, 14, 12, -14, 30, -86, -13]);
    design.addPosition("h3", [-1, 1, 13, -12, -13, 14, 12, -14, 29, -87, -13]);
    design.addPosition("i3", [-1, 0, 13, 0, -13, 0, 12, -14, 28, -88, -13]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 13, 0, -13, 0, 0, 0, -13, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 13, -12, -13, 14, 0, 0, 23, -93, -13]);
    design.addPosition("b2", [-1, 1, 13, -12, -13, 14, 12, -14, 22, -94, -13]);
    design.addPosition("c2", [-1, 1, 13, -12, -13, 14, 12, -14, 21, -95, -13]);
    design.addPosition("d2", [-1, 1, 13, -12, -13, 14, 12, -14, 20, -96, -13]);
    design.addPosition("e2", [-1, 1, 13, -12, -13, 14, 12, -14, 19, -97, -13]);
    design.addPosition("f2", [-1, 1, 13, -12, -13, 14, 12, -14, 18, -98, -13]);
    design.addPosition("g2", [-1, 1, 13, -12, -13, 14, 12, -14, 17, -99, -13]);
    design.addPosition("h2", [-1, 1, 13, -12, -13, 14, 12, -14, 16, -100, -13]);
    design.addPosition("i2", [-1, 0, 13, 0, -13, 0, 12, -14, 15, -101, -13]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 13, 0, -13, 0, 0, 0, -13, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -12, -13, 0, 0, 0, 10, -106, -13]);
    design.addPosition("b1", [-1, 1, 0, -12, -13, 0, 0, -14, 9, -107, -13]);
    design.addPosition("c1", [-1, 1, 0, -12, -13, 0, 0, -14, 8, -108, -13]);
    design.addPosition("d1", [-1, 1, 0, -12, -13, 0, 0, -14, 7, -109, -13]);
    design.addPosition("e1", [-1, 1, 0, -12, -13, 0, 0, -14, 6, -110, -13]);
    design.addPosition("f1", [-1, 1, 0, -12, -13, 0, 0, -14, 5, -111, -13]);
    design.addPosition("g1", [-1, 1, 0, -12, -13, 0, 0, -14, 4, -112, -13]);
    design.addPosition("h1", [-1, 1, 0, -12, -13, 0, 0, -14, 3, -113, -13]);
    design.addPosition("i1", [-1, 0, 0, 0, -13, 0, 0, -14, 2, -114, -13]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -13, 0, 0, 0, -13, 0, 0]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 2, [106, 107, 108, 109, 110, 111, 112, 113, 114, 93, 94, 95, 96, 97, 98, 99, 100, 101, 80, 81, 82, 83, 84, 85, 86, 87, 88, 67, 68, 69, 70, 71, 72, 73, 74, 75, 54, 55, 56, 57, 58, 59, 60, 61, 62, 41, 42, 43, 44, 45, 46, 47, 48, 49, 28, 29, 30, 31, 32, 33, 34, 35, 36, 15, 16, 17, 18, 19, 20, 21, 22, 23, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addZone("board-zone", 1, [106, 107, 108, 109, 110, 111, 112, 113, 114, 93, 94, 95, 96, 97, 98, 99, 100, 101, 80, 81, 82, 83, 84, 85, 86, 87, 88, 67, 68, 69, 70, 71, 72, 73, 74, 75, 54, 55, 56, 57, 58, 59, 60, 61, 62, 41, 42, 43, 44, 45, 46, 47, 48, 49, 28, 29, 30, 31, 32, 33, 34, 35, 36, 15, 16, 17, 18, 19, 20, 21, 22, 23, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addZone("promotion-zone", 2, [106, 107, 108, 109, 110, 111, 112, 113, 114, 93, 94, 95, 96, 97, 98, 99, 100, 101, 80, 81, 82, 83, 84, 85, 86, 87, 88]);
    design.addZone("promotion-zone", 1, [2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 16, 17, 18, 19, 20, 21, 22, 23, 28, 29, 30, 31, 32, 33, 34, 35, 36]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 1000);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Gold", 1, 18);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 1, [106, 10], 0);

    design.addPiece("Silver", 2, 16);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [106, 10], 0);

    design.addPiece("Knight", 3, 12);
    design.addMove(3, 2, [4, 7], 0);
    design.addMove(3, 2, [4, 3], 0);
    design.addMove(3, 1, [106, 10], 0);

    design.addPiece("Lance", 4, 10);
    design.addMove(4, 3, [4, 4], 0);
    design.addMove(4, 1, [106, 10], 0);

    design.addPiece("Bishop", 5, 26);
    design.addMove(5, 3, [7, 7], 0);
    design.addMove(5, 3, [5, 5], 0);
    design.addMove(5, 3, [6, 6], 0);
    design.addMove(5, 3, [3, 3], 0);
    design.addMove(5, 1, [106, 10], 0);

    design.addPiece("Rook", 6, 30);
    design.addMove(6, 3, [4, 4], 0);
    design.addMove(6, 3, [1, 1], 0);
    design.addMove(6, 3, [0, 0], 0);
    design.addMove(6, 3, [2, 2], 0);
    design.addMove(6, 1, [106, 10], 0);

    design.addPiece("Pawn", 7, 1);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 1, [106, 10], 0);

    design.addPiece("SilverP", 8, 18);
    design.addMove(8, 0, [4], 0);
    design.addMove(8, 0, [7], 0);
    design.addMove(8, 0, [2], 0);
    design.addMove(8, 0, [3], 0);
    design.addMove(8, 0, [0], 0);
    design.addMove(8, 0, [1], 0);

    design.addPiece("KnightP", 9, 18);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 0, [7], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);

    design.addPiece("LanceP", 10, 20);
    design.addMove(10, 0, [4], 0);
    design.addMove(10, 0, [7], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [3], 0);
    design.addMove(10, 0, [0], 0);
    design.addMove(10, 0, [1], 0);

    design.addPiece("BishopP", 11, 30);
    design.addMove(11, 3, [7, 7], 0);
    design.addMove(11, 0, [4], 0);
    design.addMove(11, 3, [5, 5], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 3, [6, 6], 0);
    design.addMove(11, 0, [0], 0);
    design.addMove(11, 3, [3, 3], 0);
    design.addMove(11, 0, [1], 0);

    design.addPiece("RookP", 12, 34);
    design.addMove(12, 3, [4, 4], 0);
    design.addMove(12, 0, [7], 0);
    design.addMove(12, 3, [1, 1], 0);
    design.addMove(12, 0, [3], 0);
    design.addMove(12, 3, [0, 0], 0);
    design.addMove(12, 0, [6], 0);
    design.addMove(12, 3, [2, 2], 0);
    design.addMove(12, 0, [5], 0);

    design.addPiece("PawnP", 13, 18);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [7], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [0], 0);
    design.addMove(13, 0, [1], 0);

    design.setup("South", "King", 110);
    design.setup("South", "Gold", 109);
    design.setup("South", "Gold", 111);
    design.setup("South", "Silver", 108);
    design.setup("South", "Silver", 112);
    design.setup("South", "Knight", 107);
    design.setup("South", "Knight", 113);
    design.setup("South", "Lance", 106);
    design.setup("South", "Lance", 114);
    design.setup("South", "Bishop", 94);
    design.setup("South", "Rook", 100);
    design.setup("South", "Pawn", 80);
    design.setup("South", "Pawn", 81);
    design.setup("South", "Pawn", 82);
    design.setup("South", "Pawn", 83);
    design.setup("South", "Pawn", 84);
    design.setup("South", "Pawn", 85);
    design.setup("South", "Pawn", 86);
    design.setup("South", "Pawn", 87);
    design.setup("South", "Pawn", 88);
    design.setup("North", "King", 6);
    design.setup("North", "Gold", 5);
    design.setup("North", "Gold", 7);
    design.setup("North", "Silver", 4);
    design.setup("North", "Silver", 8);
    design.setup("North", "Knight", 3);
    design.setup("North", "Knight", 9);
    design.setup("North", "Lance", 2);
    design.setup("North", "Lance", 10);
    design.setup("North", "Bishop", 22);
    design.setup("North", "Rook", 16);
    design.setup("North", "Pawn", 28);
    design.setup("North", "Pawn", 29);
    design.setup("North", "Pawn", 30);
    design.setup("North", "Pawn", 31);
    design.setup("North", "Pawn", 32);
    design.setup("North", "Pawn", 33);
    design.setup("North", "Pawn", 34);
    design.setup("North", "Pawn", 35);
    design.setup("North", "Pawn", 36);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
    view.defPiece("SouthSilverP", "South SilverP");
    view.defPiece("NorthSilverP", "North SilverP");
    view.defPiece("SouthKnightP", "South KnightP");
    view.defPiece("NorthKnightP", "North KnightP");
    view.defPiece("SouthLanceP", "South LanceP");
    view.defPiece("NorthLanceP", "North LanceP");
    view.defPiece("SouthBishopP", "South BishopP");
    view.defPiece("NorthBishopP", "North BishopP");
    view.defPiece("SouthRookP", "South RookP");
    view.defPiece("NorthRookP", "North RookP");
    view.defPiece("SouthPawnP", "South PawnP");
    view.defPiece("NorthPawnP", "North PawnP");
 
    view.defPosition("X9", 14, 15, 41, 46);
    view.defPosition("I9", 55, 15, 41, 46);
    view.defPosition("a9", 96, 15, 41, 46);
    view.defPosition("b9", 137, 15, 41, 46);
    view.defPosition("c9", 178, 15, 41, 46);
    view.defPosition("d9", 219, 15, 41, 46);
    view.defPosition("e9", 260, 15, 41, 46);
    view.defPosition("f9", 301, 15, 41, 46);
    view.defPosition("g9", 342, 15, 41, 46);
    view.defPosition("h9", 383, 15, 41, 46);
    view.defPosition("i9", 424, 15, 41, 46);
    view.defPosition("J9", 465, 15, 41, 46);
    view.defPosition("Y9", 506, 15, 41, 46);
    view.defPosition("X8", 14, 61, 41, 46);
    view.defPosition("I8", 55, 61, 41, 46);
    view.defPosition("a8", 96, 61, 41, 46);
    view.defPosition("b8", 137, 61, 41, 46);
    view.defPosition("c8", 178, 61, 41, 46);
    view.defPosition("d8", 219, 61, 41, 46);
    view.defPosition("e8", 260, 61, 41, 46);
    view.defPosition("f8", 301, 61, 41, 46);
    view.defPosition("g8", 342, 61, 41, 46);
    view.defPosition("h8", 383, 61, 41, 46);
    view.defPosition("i8", 424, 61, 41, 46);
    view.defPosition("J8", 465, 61, 41, 46);
    view.defPosition("Y8", 506, 61, 41, 46);
    view.defPosition("X7", 14, 107, 41, 46);
    view.defPosition("I7", 55, 107, 41, 46);
    view.defPosition("a7", 96, 107, 41, 46);
    view.defPosition("b7", 137, 107, 41, 46);
    view.defPosition("c7", 178, 107, 41, 46);
    view.defPosition("d7", 219, 107, 41, 46);
    view.defPosition("e7", 260, 107, 41, 46);
    view.defPosition("f7", 301, 107, 41, 46);
    view.defPosition("g7", 342, 107, 41, 46);
    view.defPosition("h7", 383, 107, 41, 46);
    view.defPosition("i7", 424, 107, 41, 46);
    view.defPosition("J7", 465, 107, 41, 46);
    view.defPosition("Y7", 506, 107, 41, 46);
    view.defPosition("X6", 14, 153, 41, 46);
    view.defPosition("I6", 55, 153, 41, 46);
    view.defPosition("a6", 96, 153, 41, 46);
    view.defPosition("b6", 137, 153, 41, 46);
    view.defPosition("c6", 178, 153, 41, 46);
    view.defPosition("d6", 219, 153, 41, 46);
    view.defPosition("e6", 260, 153, 41, 46);
    view.defPosition("f6", 301, 153, 41, 46);
    view.defPosition("g6", 342, 153, 41, 46);
    view.defPosition("h6", 383, 153, 41, 46);
    view.defPosition("i6", 424, 153, 41, 46);
    view.defPosition("J6", 465, 153, 41, 46);
    view.defPosition("Y6", 506, 153, 41, 46);
    view.defPosition("X5", 14, 199, 41, 46);
    view.defPosition("I5", 55, 199, 41, 46);
    view.defPosition("a5", 96, 199, 41, 46);
    view.defPosition("b5", 137, 199, 41, 46);
    view.defPosition("c5", 178, 199, 41, 46);
    view.defPosition("d5", 219, 199, 41, 46);
    view.defPosition("e5", 260, 199, 41, 46);
    view.defPosition("f5", 301, 199, 41, 46);
    view.defPosition("g5", 342, 199, 41, 46);
    view.defPosition("h5", 383, 199, 41, 46);
    view.defPosition("i5", 424, 199, 41, 46);
    view.defPosition("J5", 465, 199, 41, 46);
    view.defPosition("Y5", 506, 199, 41, 46);
    view.defPosition("X4", 14, 245, 41, 46);
    view.defPosition("I4", 55, 245, 41, 46);
    view.defPosition("a4", 96, 245, 41, 46);
    view.defPosition("b4", 137, 245, 41, 46);
    view.defPosition("c4", 178, 245, 41, 46);
    view.defPosition("d4", 219, 245, 41, 46);
    view.defPosition("e4", 260, 245, 41, 46);
    view.defPosition("f4", 301, 245, 41, 46);
    view.defPosition("g4", 342, 245, 41, 46);
    view.defPosition("h4", 383, 245, 41, 46);
    view.defPosition("i4", 424, 245, 41, 46);
    view.defPosition("J4", 465, 245, 41, 46);
    view.defPosition("Y4", 506, 245, 41, 46);
    view.defPosition("X3", 14, 291, 41, 46);
    view.defPosition("I3", 55, 291, 41, 46);
    view.defPosition("a3", 96, 291, 41, 46);
    view.defPosition("b3", 137, 291, 41, 46);
    view.defPosition("c3", 178, 291, 41, 46);
    view.defPosition("d3", 219, 291, 41, 46);
    view.defPosition("e3", 260, 291, 41, 46);
    view.defPosition("f3", 301, 291, 41, 46);
    view.defPosition("g3", 342, 291, 41, 46);
    view.defPosition("h3", 383, 291, 41, 46);
    view.defPosition("i3", 424, 291, 41, 46);
    view.defPosition("J3", 465, 291, 41, 46);
    view.defPosition("Y3", 506, 291, 41, 46);
    view.defPosition("X2", 14, 337, 41, 46);
    view.defPosition("I2", 55, 337, 41, 46);
    view.defPosition("a2", 96, 337, 41, 46);
    view.defPosition("b2", 137, 337, 41, 46);
    view.defPosition("c2", 178, 337, 41, 46);
    view.defPosition("d2", 219, 337, 41, 46);
    view.defPosition("e2", 260, 337, 41, 46);
    view.defPosition("f2", 301, 337, 41, 46);
    view.defPosition("g2", 342, 337, 41, 46);
    view.defPosition("h2", 383, 337, 41, 46);
    view.defPosition("i2", 424, 337, 41, 46);
    view.defPosition("J2", 465, 337, 41, 46);
    view.defPosition("Y2", 506, 337, 41, 46);
    view.defPosition("X1", 14, 383, 41, 46);
    view.defPosition("I1", 55, 383, 41, 46);
    view.defPosition("a1", 96, 383, 41, 46);
    view.defPosition("b1", 137, 383, 41, 46);
    view.defPosition("c1", 178, 383, 41, 46);
    view.defPosition("d1", 219, 383, 41, 46);
    view.defPosition("e1", 260, 383, 41, 46);
    view.defPosition("f1", 301, 383, 41, 46);
    view.defPosition("g1", 342, 383, 41, 46);
    view.defPosition("h1", 383, 383, 41, 46);
    view.defPosition("i1", 424, 383, 41, 46);
    view.defPosition("J1", 465, 383, 41, 46);
    view.defPosition("Y1", 506, 383, 41, 46);

    view.defPopup("Promote", 230, 100);
    view.defPopupPosition("T1", 12, 15, 39, 39);
    view.defPopupPosition("T2", 52, 15, 39, 39);
}
