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
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("micro-shogi-extension", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("nx"); // 7
    design.addDirection("n");  // 8
    design.addDirection("sr"); // 9
    design.addDirection("nr"); // 10
    design.addDirection("pr"); // 11

    design.addPlayer("South", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10, 11]);
    design.addPlayer("North", [6, 8, 5, 4, 3, 2, 0, 7, 1, 10, 9, 11]);

    design.addPosition("X7", [14, 13, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y7", [0, 13, 12, 0, -1, 0, 0, 0, 0, 0, 13, -1]);
    design.addPosition("I7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("a7", [14, 13, 0, 1, 0, 0, 0, 79, 0, 86, -2, 0]);
    design.addPosition("b7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 85, -3, 0]);
    design.addPosition("c7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 84, -4, 0]);
    design.addPosition("d7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 83, -5, 0]);
    design.addPosition("e7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 82, -6, 0]);
    design.addPosition("f7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 81, -7, 0]);
    design.addPosition("g7", [0, 13, 12, 0, -1, 0, 0, 0, 0, 80, -8, 0]);
    design.addPosition("J7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("Z7", [14, 13, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T7", [0, 13, 12, 0, -1, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("X6", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 0, 1]);
    design.addPosition("Y6", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 13, -1]);
    design.addPosition("I6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("a6", [14, 13, 0, 1, 0, -12, 0, -13, -13, 73, -15, 0]);
    design.addPosition("b6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 72, -16, 0]);
    design.addPosition("c6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 71, -17, 0]);
    design.addPosition("d6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 70, -18, 0]);
    design.addPosition("e6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 69, -19, 0]);
    design.addPosition("f6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 68, -20, 0]);
    design.addPosition("g6", [0, 13, 12, 0, -1, 0, -14, -13, -13, 67, -21, 0]);
    design.addPosition("J6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("Z6", [14, 13, 0, 1, 0, -12, 0, -13, -13, -13, 0, 1]);
    design.addPosition("T6", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 0, -1]);
    design.addPosition("X5", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 0, 1]);
    design.addPosition("Y5", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 13, -1]);
    design.addPosition("I5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("a5", [14, 13, 0, 1, 0, -12, 0, -13, -13, 60, -28, 0]);
    design.addPosition("b5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 59, -29, 0]);
    design.addPosition("c5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 58, -30, 0]);
    design.addPosition("d5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 57, -31, 0]);
    design.addPosition("e5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 56, -32, 0]);
    design.addPosition("f5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 55, -33, 0]);
    design.addPosition("g5", [0, 13, 12, 0, -1, 0, -14, -13, -13, 54, -34, 0]);
    design.addPosition("J5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("Z5", [14, 13, 0, 1, 0, -12, 0, -13, -13, -13, 0, 1]);
    design.addPosition("T5", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 0, -1]);
    design.addPosition("X4", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 0, 1]);
    design.addPosition("Y4", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 13, -1]);
    design.addPosition("I4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("a4", [14, 13, 0, 1, 0, -12, 0, -13, -13, 47, -41, 0]);
    design.addPosition("b4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 46, -42, 0]);
    design.addPosition("c4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 45, -43, 0]);
    design.addPosition("d4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 44, -44, 0]);
    design.addPosition("e4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 43, -45, 0]);
    design.addPosition("f4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 42, -46, 0]);
    design.addPosition("g4", [0, 13, 12, 0, -1, 0, -14, -13, -13, 41, -47, 0]);
    design.addPosition("J4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("Z4", [14, 13, 0, 1, 0, -12, 0, -13, -13, -13, 0, 1]);
    design.addPosition("T4", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 0, -1]);
    design.addPosition("X3", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 0, 1]);
    design.addPosition("Y3", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 13, -1]);
    design.addPosition("I3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("a3", [14, 13, 0, 1, 0, -12, 0, -13, -13, 34, -54, 0]);
    design.addPosition("b3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 33, -55, 0]);
    design.addPosition("c3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 32, -56, 0]);
    design.addPosition("d3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 31, -57, 0]);
    design.addPosition("e3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 30, -58, 0]);
    design.addPosition("f3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 29, -59, 0]);
    design.addPosition("g3", [0, 13, 12, 0, -1, 0, -14, -13, -13, 28, -60, 0]);
    design.addPosition("J3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("Z3", [14, 13, 0, 1, 0, -12, 0, -13, -13, -13, 0, 1]);
    design.addPosition("T3", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 0, -1]);
    design.addPosition("X2", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 0, 1]);
    design.addPosition("Y2", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 13, -1]);
    design.addPosition("I2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("a2", [14, 13, 0, 1, 0, -12, 0, -13, -13, 21, -67, 0]);
    design.addPosition("b2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 20, -68, 0]);
    design.addPosition("c2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 19, -69, 0]);
    design.addPosition("d2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 18, -70, 0]);
    design.addPosition("e2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 17, -71, 0]);
    design.addPosition("f2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 16, -72, 0]);
    design.addPosition("g2", [0, 13, 12, 0, -1, 0, -14, -13, -13, 15, -73, 0]);
    design.addPosition("J2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("Z2", [14, 13, 0, 1, 0, -12, 0, -13, -13, -13, 0, 1]);
    design.addPosition("T2", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, 0, -1]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -12, 0, -13, -13, 0, 0, 1]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -14, -13, -13, 0, 0, -1]);
    design.addPosition("I1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -12, 0, -13, -13, 8, -80, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 7, -81, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 6, -82, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 5, -83, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 4, -84, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 3, -85, 0]);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -14, -13, -13, 2, -86, 0]);
    design.addPosition("J1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -12, 0, -13, -13, -13, 0, 1]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -14, -13, -13, 0, 0, -1]);

    design.addZone("board-zone", 1, [81, 82, 83, 84, 85, 86, 87, 68, 69, 70, 71, 72, 73, 74, 55, 56, 57, 58, 59, 60, 61, 42, 43, 44, 45, 46, 47, 48, 29, 30, 31, 32, 33, 34, 35, 16, 17, 18, 19, 20, 21, 22, 3, 4, 5, 6, 7, 8, 9]);
    design.addZone("board-zone", 2, [81, 82, 83, 84, 85, 86, 87, 68, 69, 70, 71, 72, 73, 74, 55, 56, 57, 58, 59, 60, 61, 42, 43, 44, 45, 46, 47, 48, 29, 30, 31, 32, 33, 34, 35, 16, 17, 18, 19, 20, 21, 22, 3, 4, 5, 6, 7, 8, 9]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
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
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	2);	// Knight
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	21);	// position
    design.addCommand(2, ZRF.ON_BOARD_DIR,	7);	// name
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

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	1);	// Gold
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	4);	// Lance
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	8);
    design.addCommand(5, ZRF.FORK,	4);
    design.addCommand(5, ZRF.PROMOTE,	3);	// Silver
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-9);
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	3);	// Silver
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	6);	// Bishop
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	8);
    design.addCommand(7, ZRF.FORK,	4);
    design.addCommand(7, ZRF.PROMOTE,	5);	// LeftPawn
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-9);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	5);	// LeftPawn
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	8);	// Rook
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	8);
    design.addCommand(9, ZRF.FORK,	4);
    design.addCommand(9, ZRF.PROMOTE,	7);	// RightPawn
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-9);
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	7);	// RightPawn
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 100);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);

    design.addPiece("Gold", 1, 6);
    design.addMove(1, 1, [8], 0);
    design.addMove(1, 1, [6], 0);
    design.addMove(1, 1, [1], 0);
    design.addMove(1, 1, [5], 0);
    design.addMove(1, 1, [4], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 2, [81, 7], 0);

    design.addPiece("Knight", 2, 2);
    design.addMove(2, 3, [8, 6], 0);
    design.addMove(2, 3, [8, 5], 0);
    design.addMove(2, 2, [81, 7], 0);

    design.addPiece("Silver", 3, 5);
    design.addMove(3, 4, [6], 0);
    design.addMove(3, 4, [2], 0);
    design.addMove(3, 4, [0], 0);
    design.addMove(3, 4, [5], 0);
    design.addMove(3, 4, [8], 0);
    design.addMove(3, 2, [81, 7], 0);

    design.addPiece("Lance", 4, 7);
    design.addMove(4, 5, [8, 8], 0);
    design.addMove(4, 2, [81, 7], 0);

    design.addPiece("LeftPawn", 5, 1);
    design.addMove(5, 6, [8], 0);
    design.addMove(5, 2, [81, 7], 0);

    design.addPiece("Bishop", 6, 10);
    design.addMove(6, 7, [6, 6], 0);
    design.addMove(6, 7, [0, 0], 0);
    design.addMove(6, 7, [2, 2], 0);
    design.addMove(6, 7, [5, 5], 0);
    design.addMove(6, 2, [81, 7], 0);

    design.addPiece("RightPawn", 7, 1);
    design.addMove(7, 8, [8], 0);
    design.addMove(7, 2, [81, 7], 0);

    design.addPiece("Rook", 8, 15);
    design.addMove(8, 9, [8, 8], 0);
    design.addMove(8, 9, [3, 3], 0);
    design.addMove(8, 9, [4, 4], 0);
    design.addMove(8, 9, [1, 1], 0);
    design.addMove(8, 2, [81, 7], 0);

    design.setup("South", "King", 84);
    design.setup("South", "Gold", 83);
    design.setup("South", "Gold", 85);
    design.setup("South", "Silver", 81);
    design.setup("South", "Silver", 87);
    design.setup("South", "LeftPawn", 82);
    design.setup("South", "RightPawn", 86);
    design.setup("North", "King", 6);
    design.setup("North", "Gold", 5);
    design.setup("North", "Gold", 7);
    design.setup("North", "Silver", 3);
    design.setup("North", "Silver", 9);
    design.setup("North", "LeftPawn", 8);
    design.setup("North", "RightPawn", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
    view.defPiece("SouthLeftPawn", "South LeftPawn");
    view.defPiece("NorthLeftPawn", "North LeftPawn");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("SouthRightPawn", "South RightPawn");
    view.defPiece("NorthRightPawn", "North RightPawn");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
 
    view.defPosition("X7", 9, 15, 41, 46);
    view.defPosition("Y7", 50, 15, 41, 46);
    view.defPosition("I7", 91, 15, 41, 46);
    view.defPosition("a7", 132, 15, 41, 46);
    view.defPosition("b7", 173, 15, 41, 46);
    view.defPosition("c7", 214, 15, 41, 46);
    view.defPosition("d7", 255, 15, 41, 46);
    view.defPosition("e7", 296, 15, 41, 46);
    view.defPosition("f7", 337, 15, 41, 46);
    view.defPosition("g7", 378, 15, 41, 46);
    view.defPosition("J7", 419, 15, 41, 46);
    view.defPosition("Z7", 460, 15, 41, 46);
    view.defPosition("T7", 501, 15, 41, 46);
    view.defPosition("X6", 9, 61, 41, 46);
    view.defPosition("Y6", 50, 61, 41, 46);
    view.defPosition("I6", 91, 61, 41, 46);
    view.defPosition("a6", 132, 61, 41, 46);
    view.defPosition("b6", 173, 61, 41, 46);
    view.defPosition("c6", 214, 61, 41, 46);
    view.defPosition("d6", 255, 61, 41, 46);
    view.defPosition("e6", 296, 61, 41, 46);
    view.defPosition("f6", 337, 61, 41, 46);
    view.defPosition("g6", 378, 61, 41, 46);
    view.defPosition("J6", 419, 61, 41, 46);
    view.defPosition("Z6", 460, 61, 41, 46);
    view.defPosition("T6", 501, 61, 41, 46);
    view.defPosition("X5", 9, 107, 41, 46);
    view.defPosition("Y5", 50, 107, 41, 46);
    view.defPosition("I5", 91, 107, 41, 46);
    view.defPosition("a5", 132, 107, 41, 46);
    view.defPosition("b5", 173, 107, 41, 46);
    view.defPosition("c5", 214, 107, 41, 46);
    view.defPosition("d5", 255, 107, 41, 46);
    view.defPosition("e5", 296, 107, 41, 46);
    view.defPosition("f5", 337, 107, 41, 46);
    view.defPosition("g5", 378, 107, 41, 46);
    view.defPosition("J5", 419, 107, 41, 46);
    view.defPosition("Z5", 460, 107, 41, 46);
    view.defPosition("T5", 501, 107, 41, 46);
    view.defPosition("X4", 9, 153, 41, 46);
    view.defPosition("Y4", 50, 153, 41, 46);
    view.defPosition("I4", 91, 153, 41, 46);
    view.defPosition("a4", 132, 153, 41, 46);
    view.defPosition("b4", 173, 153, 41, 46);
    view.defPosition("c4", 214, 153, 41, 46);
    view.defPosition("d4", 255, 153, 41, 46);
    view.defPosition("e4", 296, 153, 41, 46);
    view.defPosition("f4", 337, 153, 41, 46);
    view.defPosition("g4", 378, 153, 41, 46);
    view.defPosition("J4", 419, 153, 41, 46);
    view.defPosition("Z4", 460, 153, 41, 46);
    view.defPosition("T4", 501, 153, 41, 46);
    view.defPosition("X3", 9, 199, 41, 46);
    view.defPosition("Y3", 50, 199, 41, 46);
    view.defPosition("I3", 91, 199, 41, 46);
    view.defPosition("a3", 132, 199, 41, 46);
    view.defPosition("b3", 173, 199, 41, 46);
    view.defPosition("c3", 214, 199, 41, 46);
    view.defPosition("d3", 255, 199, 41, 46);
    view.defPosition("e3", 296, 199, 41, 46);
    view.defPosition("f3", 337, 199, 41, 46);
    view.defPosition("g3", 378, 199, 41, 46);
    view.defPosition("J3", 419, 199, 41, 46);
    view.defPosition("Z3", 460, 199, 41, 46);
    view.defPosition("T3", 501, 199, 41, 46);
    view.defPosition("X2", 9, 245, 41, 46);
    view.defPosition("Y2", 50, 245, 41, 46);
    view.defPosition("I2", 91, 245, 41, 46);
    view.defPosition("a2", 132, 245, 41, 46);
    view.defPosition("b2", 173, 245, 41, 46);
    view.defPosition("c2", 214, 245, 41, 46);
    view.defPosition("d2", 255, 245, 41, 46);
    view.defPosition("e2", 296, 245, 41, 46);
    view.defPosition("f2", 337, 245, 41, 46);
    view.defPosition("g2", 378, 245, 41, 46);
    view.defPosition("J2", 419, 245, 41, 46);
    view.defPosition("Z2", 460, 245, 41, 46);
    view.defPosition("T2", 501, 245, 41, 46);
    view.defPosition("X1", 9, 291, 41, 46);
    view.defPosition("Y1", 50, 291, 41, 46);
    view.defPosition("I1", 91, 291, 41, 46);
    view.defPosition("a1", 132, 291, 41, 46);
    view.defPosition("b1", 173, 291, 41, 46);
    view.defPosition("c1", 214, 291, 41, 46);
    view.defPosition("d1", 255, 291, 41, 46);
    view.defPosition("e1", 296, 291, 41, 46);
    view.defPosition("f1", 337, 291, 41, 46);
    view.defPosition("g1", 378, 291, 41, 46);
    view.defPosition("J1", 419, 291, 41, 46);
    view.defPosition("Z1", 460, 291, 41, 46);
    view.defPosition("T1", 501, 291, 41, 46);
}
