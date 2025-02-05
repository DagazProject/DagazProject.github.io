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

    design.addDirection("s");  // 0
    design.addDirection("e");  // 1
    design.addDirection("w");  // 2
    design.addDirection("nx"); // 3
    design.addDirection("n");  // 4

    design.addPlayer("You", [4, 2, 1, 3, 0]);

    design.addPosition("X8", [0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0]);
    design.addPosition("a8", [12, 1, 0, 1, 0]);
    design.addPosition("b8", [12, 1, -1, 1, 0]);
    design.addPosition("c8", [12, 1, -1, 1, 0]);
    design.addPosition("d8", [12, 1, -1, 1, 0]);
    design.addPosition("e8", [12, 1, -1, 1, 0]);
    design.addPosition("f8", [12, 1, -1, 1, 0]);
    design.addPosition("g8", [12, 1, -1, 1, 0]);
    design.addPosition("h8", [12, 0, -1, 5, 0]);
    design.addPosition("Z8", [0, 0, 0, 0, 0]);
    design.addPosition("T8", [0, 0, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0]);
    design.addPosition("a7", [12, 1, 0, 1, -12]);
    design.addPosition("b7", [12, 1, -1, 1, -12]);
    design.addPosition("c7", [12, 1, -1, 1, -12]);
    design.addPosition("d7", [12, 1, -1, 1, -12]);
    design.addPosition("e7", [12, 1, -1, 1, -12]);
    design.addPosition("f7", [12, 1, -1, 1, -12]);
    design.addPosition("g7", [12, 1, -1, 1, -12]);
    design.addPosition("h7", [12, 0, -1, 5, -12]);
    design.addPosition("Z7", [0, 0, 0, 0, 0]);
    design.addPosition("T7", [0, 0, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0]);
    design.addPosition("a6", [12, 1, 0, 1, -12]);
    design.addPosition("b6", [12, 1, -1, 1, -12]);
    design.addPosition("c6", [12, 1, -1, 1, -12]);
    design.addPosition("d6", [12, 1, -1, 1, -12]);
    design.addPosition("e6", [12, 1, -1, 1, -12]);
    design.addPosition("f6", [12, 1, -1, 1, -12]);
    design.addPosition("g6", [12, 1, -1, 1, -12]);
    design.addPosition("h6", [12, 0, -1, 5, -12]);
    design.addPosition("Z6", [0, 0, 0, 0, 0]);
    design.addPosition("T6", [0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 0, 0, 0]);
    design.addPosition("a5", [12, 1, 0, 1, -12]);
    design.addPosition("b5", [12, 1, -1, 1, -12]);
    design.addPosition("c5", [12, 1, -1, 1, -12]);
    design.addPosition("d5", [12, 1, -1, 1, -12]);
    design.addPosition("e5", [12, 1, -1, 1, -12]);
    design.addPosition("f5", [12, 1, -1, 1, -12]);
    design.addPosition("g5", [12, 1, -1, 1, -12]);
    design.addPosition("h5", [12, 0, -1, 5, -12]);
    design.addPosition("Z5", [0, 0, 0, 0, 0]);
    design.addPosition("T5", [0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 0]);
    design.addPosition("a4", [12, 1, 0, 1, -12]);
    design.addPosition("b4", [12, 1, -1, 1, -12]);
    design.addPosition("c4", [12, 1, -1, 1, -12]);
    design.addPosition("d4", [12, 1, -1, 1, -12]);
    design.addPosition("e4", [12, 1, -1, 1, -12]);
    design.addPosition("f4", [12, 1, -1, 1, -12]);
    design.addPosition("g4", [12, 1, -1, 1, -12]);
    design.addPosition("h4", [12, 0, -1, 5, -12]);
    design.addPosition("Z4", [0, 0, 0, 0, 0]);
    design.addPosition("T4", [0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 0, 0, 0]);
    design.addPosition("a3", [12, 1, 0, 1, -12]);
    design.addPosition("b3", [12, 1, -1, 1, -12]);
    design.addPosition("c3", [12, 1, -1, 1, -12]);
    design.addPosition("d3", [12, 1, -1, 1, -12]);
    design.addPosition("e3", [12, 1, -1, 1, -12]);
    design.addPosition("f3", [12, 1, -1, 1, -12]);
    design.addPosition("g3", [12, 1, -1, 1, -12]);
    design.addPosition("h3", [12, 0, -1, 5, -12]);
    design.addPosition("Z3", [0, 0, 0, 0, 0]);
    design.addPosition("T3", [0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 0, 0, 0]);
    design.addPosition("a2", [12, 1, 0, 1, -12]);
    design.addPosition("b2", [12, 1, -1, 1, -12]);
    design.addPosition("c2", [12, 1, -1, 1, -12]);
    design.addPosition("d2", [12, 1, -1, 1, -12]);
    design.addPosition("e2", [12, 1, -1, 1, -12]);
    design.addPosition("f2", [12, 1, -1, 1, -12]);
    design.addPosition("g2", [12, 1, -1, 1, -12]);
    design.addPosition("h2", [12, 0, -1, 5, -12]);
    design.addPosition("Z2", [0, 0, 0, 0, 0]);
    design.addPosition("T2", [0, 0, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, 1, -12]);
    design.addPosition("b1", [0, 1, -1, 1, -12]);
    design.addPosition("c1", [0, 1, -1, 1, -12]);
    design.addPosition("d1", [0, 1, -1, 1, -12]);
    design.addPosition("e1", [0, 1, -1, 1, -12]);
    design.addPosition("f1", [0, 1, -1, 1, -12]);
    design.addPosition("g1", [0, 1, -1, 1, -12]);
    design.addPosition("h1", [0, 0, -1, 0, -12]);
    design.addPosition("Z1", [0, 0, 0, 0, 0]);
    design.addPosition("T1", [0, 0, 0, 0, 0]);

    design.addZone("init", 1, [84, 72, 60, 48, 36, 24, 12, 0, 85, 73, 61, 49, 37, 25, 13, 1, 94, 82, 70, 58, 46, 34, 22, 10, 95, 83, 71, 59, 47, 35, 23, 11]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// init
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	21);	// position
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-11);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("W1", 0, 1);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 2, [2, 3], 0);

    design.addPiece("B1", 1, 1);
    design.addMove(1, 0, [4, 4], 0);
    design.addMove(1, 0, [1, 1], 0);
    design.addMove(1, 0, [2, 2], 0);
    design.addMove(1, 0, [0, 0], 0);
    design.addMove(1, 1, [4, 4], 0);
    design.addMove(1, 1, [1, 1], 0);
    design.addMove(1, 1, [2, 2], 0);
    design.addMove(1, 1, [0, 0], 0);
    design.addMove(1, 2, [2, 3], 0);

    design.addPiece("W2", 2, 2);
    design.addMove(2, 0, [4, 4], 0);
    design.addMove(2, 0, [1, 1], 0);
    design.addMove(2, 0, [2, 2], 0);
    design.addMove(2, 0, [0, 0], 0);
    design.addMove(2, 1, [4, 4], 0);
    design.addMove(2, 1, [1, 1], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 2, [2, 3], 0);

    design.addPiece("B2", 3, 2);
    design.addMove(3, 0, [4, 4], 0);
    design.addMove(3, 0, [1, 1], 0);
    design.addMove(3, 0, [2, 2], 0);
    design.addMove(3, 0, [0, 0], 0);
    design.addMove(3, 1, [4, 4], 0);
    design.addMove(3, 1, [1, 1], 0);
    design.addMove(3, 1, [2, 2], 0);
    design.addMove(3, 1, [0, 0], 0);
    design.addMove(3, 2, [2, 3], 0);

    design.addPiece("W3", 4, 3);
    design.addMove(4, 0, [4, 4], 0);
    design.addMove(4, 0, [1, 1], 0);
    design.addMove(4, 0, [2, 2], 0);
    design.addMove(4, 0, [0, 0], 0);
    design.addMove(4, 1, [4, 4], 0);
    design.addMove(4, 1, [1, 1], 0);
    design.addMove(4, 1, [2, 2], 0);
    design.addMove(4, 1, [0, 0], 0);
    design.addMove(4, 2, [2, 3], 0);

    design.addPiece("B3", 5, 3);
    design.addMove(5, 0, [4, 4], 0);
    design.addMove(5, 0, [1, 1], 0);
    design.addMove(5, 0, [2, 2], 0);
    design.addMove(5, 0, [0, 0], 0);
    design.addMove(5, 1, [4, 4], 0);
    design.addMove(5, 1, [1, 1], 0);
    design.addMove(5, 1, [2, 2], 0);
    design.addMove(5, 1, [0, 0], 0);
    design.addMove(5, 2, [2, 3], 0);

    design.addPiece("W4", 6, 4);
    design.addMove(6, 0, [4, 4], 0);
    design.addMove(6, 0, [1, 1], 0);
    design.addMove(6, 0, [2, 2], 0);
    design.addMove(6, 0, [0, 0], 0);
    design.addMove(6, 1, [4, 4], 0);
    design.addMove(6, 1, [1, 1], 0);
    design.addMove(6, 1, [2, 2], 0);
    design.addMove(6, 1, [0, 0], 0);
    design.addMove(6, 2, [2, 3], 0);

    design.addPiece("B4", 7, 4);
    design.addMove(7, 0, [4, 4], 0);
    design.addMove(7, 0, [1, 1], 0);
    design.addMove(7, 0, [2, 2], 0);
    design.addMove(7, 0, [0, 0], 0);
    design.addMove(7, 1, [4, 4], 0);
    design.addMove(7, 1, [1, 1], 0);
    design.addMove(7, 1, [2, 2], 0);
    design.addMove(7, 1, [0, 0], 0);
    design.addMove(7, 2, [2, 3], 0);

    design.addPiece("W5", 8, 5);
    design.addMove(8, 0, [4, 4], 0);
    design.addMove(8, 0, [1, 1], 0);
    design.addMove(8, 0, [2, 2], 0);
    design.addMove(8, 0, [0, 0], 0);
    design.addMove(8, 1, [4, 4], 0);
    design.addMove(8, 1, [1, 1], 0);
    design.addMove(8, 1, [2, 2], 0);
    design.addMove(8, 1, [0, 0], 0);
    design.addMove(8, 2, [2, 3], 0);

    design.addPiece("B5", 9, 5);
    design.addMove(9, 0, [4, 4], 0);
    design.addMove(9, 0, [1, 1], 0);
    design.addMove(9, 0, [2, 2], 0);
    design.addMove(9, 0, [0, 0], 0);
    design.addMove(9, 1, [4, 4], 0);
    design.addMove(9, 1, [1, 1], 0);
    design.addMove(9, 1, [2, 2], 0);
    design.addMove(9, 1, [0, 0], 0);
    design.addMove(9, 2, [2, 3], 0);

    design.addPiece("W6", 10, 6);
    design.addMove(10, 0, [4, 4], 0);
    design.addMove(10, 0, [1, 1], 0);
    design.addMove(10, 0, [2, 2], 0);
    design.addMove(10, 0, [0, 0], 0);
    design.addMove(10, 1, [4, 4], 0);
    design.addMove(10, 1, [1, 1], 0);
    design.addMove(10, 1, [2, 2], 0);
    design.addMove(10, 1, [0, 0], 0);
    design.addMove(10, 2, [2, 3], 0);

    design.addPiece("B6", 11, 6);
    design.addMove(11, 0, [4, 4], 0);
    design.addMove(11, 0, [1, 1], 0);
    design.addMove(11, 0, [2, 2], 0);
    design.addMove(11, 0, [0, 0], 0);
    design.addMove(11, 1, [4, 4], 0);
    design.addMove(11, 1, [1, 1], 0);
    design.addMove(11, 1, [2, 2], 0);
    design.addMove(11, 1, [0, 0], 0);
    design.addMove(11, 2, [2, 3], 0);

    design.addPiece("W7", 12, 7);
    design.addMove(12, 0, [4, 4], 0);
    design.addMove(12, 0, [1, 1], 0);
    design.addMove(12, 0, [2, 2], 0);
    design.addMove(12, 0, [0, 0], 0);
    design.addMove(12, 1, [4, 4], 0);
    design.addMove(12, 1, [1, 1], 0);
    design.addMove(12, 1, [2, 2], 0);
    design.addMove(12, 1, [0, 0], 0);
    design.addMove(12, 2, [2, 3], 0);

    design.addPiece("B7", 13, 7);
    design.addMove(13, 0, [4, 4], 0);
    design.addMove(13, 0, [1, 1], 0);
    design.addMove(13, 0, [2, 2], 0);
    design.addMove(13, 0, [0, 0], 0);
    design.addMove(13, 1, [4, 4], 0);
    design.addMove(13, 1, [1, 1], 0);
    design.addMove(13, 1, [2, 2], 0);
    design.addMove(13, 1, [0, 0], 0);
    design.addMove(13, 2, [2, 3], 0);

    design.addPiece("W8", 14, 8);
    design.addMove(14, 0, [4, 4], 0);
    design.addMove(14, 0, [1, 1], 0);
    design.addMove(14, 0, [2, 2], 0);
    design.addMove(14, 0, [0, 0], 0);
    design.addMove(14, 1, [4, 4], 0);
    design.addMove(14, 1, [1, 1], 0);
    design.addMove(14, 1, [2, 2], 0);
    design.addMove(14, 1, [0, 0], 0);
    design.addMove(14, 2, [2, 3], 0);

    design.addPiece("B8", 15, 8);
    design.addMove(15, 0, [4, 4], 0);
    design.addMove(15, 0, [1, 1], 0);
    design.addMove(15, 0, [2, 2], 0);
    design.addMove(15, 0, [0, 0], 0);
    design.addMove(15, 1, [4, 4], 0);
    design.addMove(15, 1, [1, 1], 0);
    design.addMove(15, 1, [2, 2], 0);
    design.addMove(15, 1, [0, 0], 0);
    design.addMove(15, 2, [2, 3], 0);

    design.addPiece("W9", 16, 9);
    design.addMove(16, 0, [4, 4], 0);
    design.addMove(16, 0, [1, 1], 0);
    design.addMove(16, 0, [2, 2], 0);
    design.addMove(16, 0, [0, 0], 0);
    design.addMove(16, 1, [4, 4], 0);
    design.addMove(16, 1, [1, 1], 0);
    design.addMove(16, 1, [2, 2], 0);
    design.addMove(16, 1, [0, 0], 0);
    design.addMove(16, 2, [2, 3], 0);

    design.addPiece("B9", 17, 9);
    design.addMove(17, 0, [4, 4], 0);
    design.addMove(17, 0, [1, 1], 0);
    design.addMove(17, 0, [2, 2], 0);
    design.addMove(17, 0, [0, 0], 0);
    design.addMove(17, 1, [4, 4], 0);
    design.addMove(17, 1, [1, 1], 0);
    design.addMove(17, 1, [2, 2], 0);
    design.addMove(17, 1, [0, 0], 0);
    design.addMove(17, 2, [2, 3], 0);

    design.addPiece("W10", 18, 10);
    design.addMove(18, 0, [4, 4], 0);
    design.addMove(18, 0, [1, 1], 0);
    design.addMove(18, 0, [2, 2], 0);
    design.addMove(18, 0, [0, 0], 0);
    design.addMove(18, 1, [4, 4], 0);
    design.addMove(18, 1, [1, 1], 0);
    design.addMove(18, 1, [2, 2], 0);
    design.addMove(18, 1, [0, 0], 0);
    design.addMove(18, 2, [2, 3], 0);

    design.addPiece("B10", 19, 10);
    design.addMove(19, 0, [4, 4], 0);
    design.addMove(19, 0, [1, 1], 0);
    design.addMove(19, 0, [2, 2], 0);
    design.addMove(19, 0, [0, 0], 0);
    design.addMove(19, 1, [4, 4], 0);
    design.addMove(19, 1, [1, 1], 0);
    design.addMove(19, 1, [2, 2], 0);
    design.addMove(19, 1, [0, 0], 0);
    design.addMove(19, 2, [2, 3], 0);

    design.addPiece("W11", 20, 11);
    design.addMove(20, 0, [4, 4], 0);
    design.addMove(20, 0, [1, 1], 0);
    design.addMove(20, 0, [2, 2], 0);
    design.addMove(20, 0, [0, 0], 0);
    design.addMove(20, 1, [4, 4], 0);
    design.addMove(20, 1, [1, 1], 0);
    design.addMove(20, 1, [2, 2], 0);
    design.addMove(20, 1, [0, 0], 0);
    design.addMove(20, 2, [2, 3], 0);

    design.addPiece("B11", 21, 11);
    design.addMove(21, 0, [4, 4], 0);
    design.addMove(21, 0, [1, 1], 0);
    design.addMove(21, 0, [2, 2], 0);
    design.addMove(21, 0, [0, 0], 0);
    design.addMove(21, 1, [4, 4], 0);
    design.addMove(21, 1, [1, 1], 0);
    design.addMove(21, 1, [2, 2], 0);
    design.addMove(21, 1, [0, 0], 0);
    design.addMove(21, 2, [2, 3], 0);

    design.addPiece("W12", 22, 12);
    design.addMove(22, 0, [4, 4], 0);
    design.addMove(22, 0, [1, 1], 0);
    design.addMove(22, 0, [2, 2], 0);
    design.addMove(22, 0, [0, 0], 0);
    design.addMove(22, 1, [4, 4], 0);
    design.addMove(22, 1, [1, 1], 0);
    design.addMove(22, 1, [2, 2], 0);
    design.addMove(22, 1, [0, 0], 0);
    design.addMove(22, 2, [2, 3], 0);

    design.addPiece("B12", 23, 12);
    design.addMove(23, 0, [4, 4], 0);
    design.addMove(23, 0, [1, 1], 0);
    design.addMove(23, 0, [2, 2], 0);
    design.addMove(23, 0, [0, 0], 0);
    design.addMove(23, 1, [4, 4], 0);
    design.addMove(23, 1, [1, 1], 0);
    design.addMove(23, 1, [2, 2], 0);
    design.addMove(23, 1, [0, 0], 0);
    design.addMove(23, 2, [2, 3], 0);

    design.addPiece("W13", 24, 13);
    design.addMove(24, 0, [4, 4], 0);
    design.addMove(24, 0, [1, 1], 0);
    design.addMove(24, 0, [2, 2], 0);
    design.addMove(24, 0, [0, 0], 0);
    design.addMove(24, 1, [4, 4], 0);
    design.addMove(24, 1, [1, 1], 0);
    design.addMove(24, 1, [2, 2], 0);
    design.addMove(24, 1, [0, 0], 0);
    design.addMove(24, 2, [2, 3], 0);

    design.addPiece("B13", 25, 13);
    design.addMove(25, 0, [4, 4], 0);
    design.addMove(25, 0, [1, 1], 0);
    design.addMove(25, 0, [2, 2], 0);
    design.addMove(25, 0, [0, 0], 0);
    design.addMove(25, 1, [4, 4], 0);
    design.addMove(25, 1, [1, 1], 0);
    design.addMove(25, 1, [2, 2], 0);
    design.addMove(25, 1, [0, 0], 0);
    design.addMove(25, 2, [2, 3], 0);

    design.addPiece("W14", 26, 14);
    design.addMove(26, 0, [4, 4], 0);
    design.addMove(26, 0, [1, 1], 0);
    design.addMove(26, 0, [2, 2], 0);
    design.addMove(26, 0, [0, 0], 0);
    design.addMove(26, 1, [4, 4], 0);
    design.addMove(26, 1, [1, 1], 0);
    design.addMove(26, 1, [2, 2], 0);
    design.addMove(26, 1, [0, 0], 0);
    design.addMove(26, 2, [2, 3], 0);

    design.addPiece("B14", 27, 14);
    design.addMove(27, 0, [4, 4], 0);
    design.addMove(27, 0, [1, 1], 0);
    design.addMove(27, 0, [2, 2], 0);
    design.addMove(27, 0, [0, 0], 0);
    design.addMove(27, 1, [4, 4], 0);
    design.addMove(27, 1, [1, 1], 0);
    design.addMove(27, 1, [2, 2], 0);
    design.addMove(27, 1, [0, 0], 0);
    design.addMove(27, 2, [2, 3], 0);

    design.addPiece("W15", 28, 15);
    design.addMove(28, 0, [4, 4], 0);
    design.addMove(28, 0, [1, 1], 0);
    design.addMove(28, 0, [2, 2], 0);
    design.addMove(28, 0, [0, 0], 0);
    design.addMove(28, 1, [4, 4], 0);
    design.addMove(28, 1, [1, 1], 0);
    design.addMove(28, 1, [2, 2], 0);
    design.addMove(28, 1, [0, 0], 0);
    design.addMove(28, 2, [2, 3], 0);

    design.addPiece("B15", 29, 15);
    design.addMove(29, 0, [4, 4], 0);
    design.addMove(29, 0, [1, 1], 0);
    design.addMove(29, 0, [2, 2], 0);
    design.addMove(29, 0, [0, 0], 0);
    design.addMove(29, 1, [4, 4], 0);
    design.addMove(29, 1, [1, 1], 0);
    design.addMove(29, 1, [2, 2], 0);
    design.addMove(29, 1, [0, 0], 0);
    design.addMove(29, 2, [2, 3], 0);

    design.addPiece("W16", 30, 16);
    design.addMove(30, 0, [4, 4], 0);
    design.addMove(30, 0, [1, 1], 0);
    design.addMove(30, 0, [2, 2], 0);
    design.addMove(30, 0, [0, 0], 0);
    design.addMove(30, 1, [4, 4], 0);
    design.addMove(30, 1, [1, 1], 0);
    design.addMove(30, 1, [2, 2], 0);
    design.addMove(30, 1, [0, 0], 0);
    design.addMove(30, 2, [2, 3], 0);

    design.addPiece("B16", 31, 16);
    design.addMove(31, 0, [4, 4], 0);
    design.addMove(31, 0, [1, 1], 0);
    design.addMove(31, 0, [2, 2], 0);
    design.addMove(31, 0, [0, 0], 0);
    design.addMove(31, 1, [4, 4], 0);
    design.addMove(31, 1, [1, 1], 0);
    design.addMove(31, 1, [2, 2], 0);
    design.addMove(31, 1, [0, 0], 0);
    design.addMove(31, 2, [2, 3], 0);

    design.setup("You", "W1", 0);
    design.setup("You", "W2", 1);
    design.setup("You", "W3", 12);
    design.setup("You", "W4", 13);
    design.setup("You", "W5", 24);
    design.setup("You", "W6", 25);
    design.setup("You", "W7", 36);
    design.setup("You", "W8", 37);
    design.setup("You", "W9", 48);
    design.setup("You", "W10", 49);
    design.setup("You", "W11", 60);
    design.setup("You", "W12", 61);
    design.setup("You", "W13", 72);
    design.setup("You", "W14", 73);
    design.setup("You", "W15", 84);
    design.setup("You", "W16", 85);
    design.setup("You", "B1", 10);
    design.setup("You", "B2", 11);
    design.setup("You", "B3", 22);
    design.setup("You", "B4", 23);
    design.setup("You", "B5", 34);
    design.setup("You", "B6", 35);
    design.setup("You", "B7", 46);
    design.setup("You", "B8", 47);
    design.setup("You", "B9", 58);
    design.setup("You", "B10", 59);
    design.setup("You", "B11", 70);
    design.setup("You", "B12", 71);
    design.setup("You", "B13", 82);
    design.setup("You", "B14", 83);
    design.setup("You", "B15", 94);
    design.setup("You", "B16", 95);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouW1", "You W1");
    view.defPiece("YouB1", "You B1");
    view.defPiece("YouW2", "You W2");
    view.defPiece("YouB2", "You B2");
    view.defPiece("YouW3", "You W3");
    view.defPiece("YouB3", "You B3");
    view.defPiece("YouW4", "You W4");
    view.defPiece("YouB4", "You B4");
    view.defPiece("YouW5", "You W5");
    view.defPiece("YouB5", "You B5");
    view.defPiece("YouW6", "You W6");
    view.defPiece("YouB6", "You B6");
    view.defPiece("YouW7", "You W7");
    view.defPiece("YouB7", "You B7");
    view.defPiece("YouW8", "You W8");
    view.defPiece("YouB8", "You B8");
    view.defPiece("YouW9", "You W9");
    view.defPiece("YouB9", "You B9");
    view.defPiece("YouW10", "You W10");
    view.defPiece("YouB10", "You B10");
    view.defPiece("YouW11", "You W11");
    view.defPiece("YouB11", "You B11");
    view.defPiece("YouW12", "You W12");
    view.defPiece("YouB12", "You B12");
    view.defPiece("YouW13", "You W13");
    view.defPiece("YouB13", "You B13");
    view.defPiece("YouW14", "You W14");
    view.defPiece("YouB14", "You B14");
    view.defPiece("YouW15", "You W15");
    view.defPiece("YouB15", "You B15");
    view.defPiece("YouW16", "You W16");
    view.defPiece("YouB16", "You B16");
 
    view.defPosition("X8", 13, 2, 35, 35);
    view.defPosition("Y8", 48, 2, 35, 35);
    view.defPosition("a8", 83, 2, 35, 35);
    view.defPosition("b8", 118, 2, 35, 35);
    view.defPosition("c8", 153, 2, 35, 35);
    view.defPosition("d8", 188, 2, 35, 35);
    view.defPosition("e8", 223, 2, 35, 35);
    view.defPosition("f8", 258, 2, 35, 35);
    view.defPosition("g8", 293, 2, 35, 35);
    view.defPosition("h8", 328, 2, 35, 35);
    view.defPosition("Z8", 363, 2, 35, 35);
    view.defPosition("T8", 398, 2, 35, 35);
    view.defPosition("X7", 13, 37, 35, 35);
    view.defPosition("Y7", 48, 37, 35, 35);
    view.defPosition("a7", 83, 37, 35, 35);
    view.defPosition("b7", 118, 37, 35, 35);
    view.defPosition("c7", 153, 37, 35, 35);
    view.defPosition("d7", 188, 37, 35, 35);
    view.defPosition("e7", 223, 37, 35, 35);
    view.defPosition("f7", 258, 37, 35, 35);
    view.defPosition("g7", 293, 37, 35, 35);
    view.defPosition("h7", 328, 37, 35, 35);
    view.defPosition("Z7", 363, 37, 35, 35);
    view.defPosition("T7", 398, 37, 35, 35);
    view.defPosition("X6", 13, 72, 35, 35);
    view.defPosition("Y6", 48, 72, 35, 35);
    view.defPosition("a6", 83, 72, 35, 35);
    view.defPosition("b6", 118, 72, 35, 35);
    view.defPosition("c6", 153, 72, 35, 35);
    view.defPosition("d6", 188, 72, 35, 35);
    view.defPosition("e6", 223, 72, 35, 35);
    view.defPosition("f6", 258, 72, 35, 35);
    view.defPosition("g6", 293, 72, 35, 35);
    view.defPosition("h6", 328, 72, 35, 35);
    view.defPosition("Z6", 363, 72, 35, 35);
    view.defPosition("T6", 398, 72, 35, 35);
    view.defPosition("X5", 13, 107, 35, 35);
    view.defPosition("Y5", 48, 107, 35, 35);
    view.defPosition("a5", 83, 107, 35, 35);
    view.defPosition("b5", 118, 107, 35, 35);
    view.defPosition("c5", 153, 107, 35, 35);
    view.defPosition("d5", 188, 107, 35, 35);
    view.defPosition("e5", 223, 107, 35, 35);
    view.defPosition("f5", 258, 107, 35, 35);
    view.defPosition("g5", 293, 107, 35, 35);
    view.defPosition("h5", 328, 107, 35, 35);
    view.defPosition("Z5", 363, 107, 35, 35);
    view.defPosition("T5", 398, 107, 35, 35);
    view.defPosition("X4", 13, 142, 35, 35);
    view.defPosition("Y4", 48, 142, 35, 35);
    view.defPosition("a4", 83, 142, 35, 35);
    view.defPosition("b4", 118, 142, 35, 35);
    view.defPosition("c4", 153, 142, 35, 35);
    view.defPosition("d4", 188, 142, 35, 35);
    view.defPosition("e4", 223, 142, 35, 35);
    view.defPosition("f4", 258, 142, 35, 35);
    view.defPosition("g4", 293, 142, 35, 35);
    view.defPosition("h4", 328, 142, 35, 35);
    view.defPosition("Z4", 363, 142, 35, 35);
    view.defPosition("T4", 398, 142, 35, 35);
    view.defPosition("X3", 13, 177, 35, 35);
    view.defPosition("Y3", 48, 177, 35, 35);
    view.defPosition("a3", 83, 177, 35, 35);
    view.defPosition("b3", 118, 177, 35, 35);
    view.defPosition("c3", 153, 177, 35, 35);
    view.defPosition("d3", 188, 177, 35, 35);
    view.defPosition("e3", 223, 177, 35, 35);
    view.defPosition("f3", 258, 177, 35, 35);
    view.defPosition("g3", 293, 177, 35, 35);
    view.defPosition("h3", 328, 177, 35, 35);
    view.defPosition("Z3", 363, 177, 35, 35);
    view.defPosition("T3", 398, 177, 35, 35);
    view.defPosition("X2", 13, 212, 35, 35);
    view.defPosition("Y2", 48, 212, 35, 35);
    view.defPosition("a2", 83, 212, 35, 35);
    view.defPosition("b2", 118, 212, 35, 35);
    view.defPosition("c2", 153, 212, 35, 35);
    view.defPosition("d2", 188, 212, 35, 35);
    view.defPosition("e2", 223, 212, 35, 35);
    view.defPosition("f2", 258, 212, 35, 35);
    view.defPosition("g2", 293, 212, 35, 35);
    view.defPosition("h2", 328, 212, 35, 35);
    view.defPosition("Z2", 363, 212, 35, 35);
    view.defPosition("T2", 398, 212, 35, 35);
    view.defPosition("X1", 13, 247, 35, 35);
    view.defPosition("Y1", 48, 247, 35, 35);
    view.defPosition("a1", 83, 247, 35, 35);
    view.defPosition("b1", 118, 247, 35, 35);
    view.defPosition("c1", 153, 247, 35, 35);
    view.defPosition("d1", 188, 247, 35, 35);
    view.defPosition("e1", 223, 247, 35, 35);
    view.defPosition("f1", 258, 247, 35, 35);
    view.defPosition("g1", 293, 247, 35, 35);
    view.defPosition("h1", 328, 247, 35, 35);
    view.defPosition("Z1", 363, 247, 35, 35);
    view.defPosition("T1", 398, 247, 35, 35);
}
