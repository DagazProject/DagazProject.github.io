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
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("micro-shogi-extension", "true");

    design.addDirection("s");  // 0
    design.addDirection("n");  // 1
    design.addDirection("nw"); // 2
    design.addDirection("se"); // 3
    design.addDirection("ne"); // 4
    design.addDirection("sw"); // 5
    design.addDirection("sr"); // 6
    design.addDirection("nr"); // 7
    design.addDirection("nx"); // 8
    design.addDirection("pr"); // 9

    design.addPlayer("South", [1, 0, 3, 2, 5, 4, 6, 7, 8, 9]);
    design.addPlayer("North", [1, 0, 3, 2, 5, 4, 7, 6, 8, 9]);

    design.addPosition("b13", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d13", [3, 0, 0, 22, 0, 21, 82, 45, 42, 0]);
    design.addPosition("f13", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b11", [3, 0, 0, 23, 19, 22, 80, 43, 39, 0]);
    design.addPosition("d11", [3, -3, 18, 23, 19, 22, 79, 42, -3, 0]);
    design.addPosition("f11", [3, 0, 18, 23, 0, 22, 78, 41, 35, 0]);
    design.addPosition("b9", [3, -3, 19, 24, 20, 23, 77, 40, -3, 0]);
    design.addPosition("d9", [3, -3, 19, 24, 20, 23, 76, 39, -3, 0]);
    design.addPosition("f9", [3, -3, 19, 24, 20, 23, 75, 38, -3, 0]);
    design.addPosition("b7", [3, -3, 20, 25, 21, 24, 74, 37, -3, 0]);
    design.addPosition("d7", [3, -3, 20, 25, 21, 24, 73, 36, -3, 0]);
    design.addPosition("f7", [3, -3, 20, 25, 21, 24, 72, 35, -3, 0]);
    design.addPosition("b5", [3, -3, 21, 26, 22, 25, 71, 34, -3, 0]);
    design.addPosition("d5", [3, -3, 21, 26, 22, 25, 70, 33, -3, 0]);
    design.addPosition("f5", [3, -3, 21, 26, 22, 25, 69, 32, -3, 0]);
    design.addPosition("b3", [0, -3, 22, 27, 23, 0, 68, 31, -3, 0]);
    design.addPosition("d3", [3, -3, 22, 27, 23, 26, 67, 30, -3, 0]);
    design.addPosition("f3", [0, -3, 22, 0, 23, 26, 66, 29, -3, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, -3, 23, 0, 24, 0, 64, 27, -3, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a12", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c12", [4, 0, 0, -18, -21, -19, 61, 24, -3, 0]);
    design.addPosition("e12", [4, 0, -22, -18, 0, -19, 60, 23, -6, 0]);
    design.addPosition("g12", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [4, 0, 0, -19, -22, 0, 58, 21, -10, 0]);
    design.addPosition("c10", [4, -4, -23, -19, -22, -20, 57, 20, -4, 0]);
    design.addPosition("e10", [4, -4, -23, -19, -22, -20, 56, 19, -4, 0]);
    design.addPosition("g10", [4, 0, -23, 0, 0, -20, 55, 18, 0, 0]);
    design.addPosition("a8", [4, -4, 0, -20, -23, 0, 54, 17, -4, 0]);
    design.addPosition("c8", [4, -4, -24, -20, -23, -21, 53, 16, -4, 0]);
    design.addPosition("e8", [4, -4, -24, -20, -23, -21, 52, 15, -4, 0]);
    design.addPosition("g8", [4, -4, -24, 0, 0, -21, 51, 14, -4, 0]);
    design.addPosition("a6", [4, -4, 0, -21, -24, 0, 50, 13, -4, 0]);
    design.addPosition("c6", [4, -4, -25, -21, -24, -22, 49, 12, -4, 0]);
    design.addPosition("e6", [4, -4, -25, -21, -24, -22, 48, 11, -4, 0]);
    design.addPosition("g6", [4, -4, -25, 0, 0, -22, 47, 10, -4, 0]);
    design.addPosition("a4", [0, -4, 0, -22, -25, 0, 46, 9, -4, 0]);
    design.addPosition("c4", [4, -4, -26, -22, -25, -23, 45, 8, -4, 0]);
    design.addPosition("e4", [4, -4, -26, -22, -25, -23, 44, 7, -4, 0]);
    design.addPosition("g4", [0, -4, -26, 0, 0, -23, 43, 6, -4, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, -4, -27, -23, -26, 0, 41, 4, -4, 0]);
    design.addPosition("e2", [0, -4, -27, 0, -26, -24, 40, 3, -4, 0]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y10", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0, 0, 2, 0, -1]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T10", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z9", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T9", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z8", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T8", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z7", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T7", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T6", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0, -2, 0, 0, 1]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);

    design.addZone("board-zone", 2, [19, 42, 43, 15, 16, 17, 37, 38, 39, 40, 12, 13, 14, 33, 34, 35, 36, 9, 10, 11, 29, 30, 31, 32, 6, 7, 8, 25, 26, 27, 28, 3, 4, 5, 22, 23, 1]);
    design.addZone("board-zone", 1, [19, 42, 43, 15, 16, 17, 37, 38, 39, 40, 12, 13, 14, 33, 34, 35, 36, 9, 10, 11, 29, 30, 31, 32, 6, 7, 8, 25, 26, 27, 28, 3, 4, 5, 22, 23, 1]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PROMOTE,	0);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	0);	// King
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	2);	// Knight
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	2);	// Knight
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	21);	// position
    design.addCommand(4, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	10);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-11);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	1);	// Gold
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	4);	// Bishop
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
    design.addCommand(7, ZRF.PROMOTE,	4);	// Bishop
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	10);
    design.addCommand(8, ZRF.FORK,	4);
    design.addCommand(8, ZRF.PROMOTE,	3);	// Silver
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-11);
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	3);	// Silver
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	6);	// Rook
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	8);
    design.addCommand(10, ZRF.FORK,	4);
    design.addCommand(10, ZRF.PROMOTE,	5);	// Pawn
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.JUMP,	-9);
    design.addCommand(10, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PROMOTE,	5);	// Pawn
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PROMOTE,	8);	// Lance
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PROMOTE,	8);	// Lance
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.IF,	8);
    design.addCommand(13, ZRF.FORK,	4);
    design.addCommand(13, ZRF.PROMOTE,	7);	// Tokin
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.JUMP,	-9);
    design.addCommand(13, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PROMOTE,	7);	// Tokin
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 100);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [1, 2], 0);
    design.addMove(0, 1, [1, 4], 0);
    design.addMove(0, 1, [0, 5], 0);
    design.addMove(0, 1, [0, 3], 0);
    design.addMove(0, 1, [2, 5], 0);
    design.addMove(0, 1, [3, 4], 0);

    design.addPiece("Gold", 1, 8);
    design.addMove(1, 2, [1], 0);
    design.addMove(1, 2, [2], 0);
    design.addMove(1, 2, [4], 0);
    design.addMove(1, 2, [0], 0);
    design.addMove(1, 2, [5], 0);
    design.addMove(1, 2, [3], 0);
    design.addMove(1, 3, [1, 2], 0);
    design.addMove(1, 3, [1, 4], 0);
    design.addMove(1, 4, [37, 8], 0);

    design.addPiece("Knight", 2, 2);
    design.addMove(2, 5, [1, 1, 2], 0);
    design.addMove(2, 5, [1, 1, 4], 0);
    design.addMove(2, 4, [37, 8], 0);

    design.addPiece("Silver", 3, 7);
    design.addMove(3, 6, [1], 0);
    design.addMove(3, 7, [1, 2], 0);
    design.addMove(3, 7, [1, 4], 0);
    design.addMove(3, 7, [0, 5], 0);
    design.addMove(3, 7, [0, 3], 0);
    design.addMove(3, 7, [2, 5], 0);
    design.addMove(3, 7, [3, 4], 0);
    design.addMove(3, 4, [37, 8], 0);

    design.addPiece("Bishop", 4, 7);
    design.addMove(4, 8, [1, 2, 1, 2], 0);
    design.addMove(4, 8, [1, 4, 1, 4], 0);
    design.addMove(4, 8, [0, 5, 0, 5], 0);
    design.addMove(4, 8, [0, 3, 0, 3], 0);
    design.addMove(4, 8, [2, 5, 2, 5], 0);
    design.addMove(4, 8, [3, 4, 3, 4], 0);
    design.addMove(4, 4, [37, 8], 0);

    design.addPiece("Pawn", 5, 1);
    design.addMove(5, 9, [1], 0);
    design.addMove(5, 4, [37, 8], 0);

    design.addPiece("Rook", 6, 18);
    design.addMove(6, 10, [1, 1], 0);
    design.addMove(6, 10, [2, 2], 0);
    design.addMove(6, 10, [4, 4], 0);
    design.addMove(6, 10, [0, 0], 0);
    design.addMove(6, 10, [5, 5], 0);
    design.addMove(6, 10, [3, 3], 0);
    design.addMove(6, 4, [37, 8], 0);

    design.addPiece("Tokin", 7, 8);
    design.addMove(7, 11, [1], 0);
    design.addMove(7, 11, [2], 0);
    design.addMove(7, 11, [4], 0);
    design.addMove(7, 11, [0], 0);
    design.addMove(7, 11, [5], 0);
    design.addMove(7, 11, [3], 0);
    design.addMove(7, 12, [1, 2], 0);
    design.addMove(7, 12, [1, 4], 0);
    design.addMove(7, 4, [37, 8], 0);

    design.addPiece("Lance", 8, 5);
    design.addMove(8, 13, [1, 1], 0);
    design.addMove(8, 4, [37, 8], 0);

    design.setup("South", "King", 19);
    design.setup("South", "Gold", 43);
    design.setup("South", "Silver", 42);
    design.setup("South", "Pawn", 17);
    design.setup("South", "Tokin", 15);
    design.setup("North", "King", 1);
    design.setup("North", "Gold", 22);
    design.setup("North", "Silver", 23);
    design.setup("North", "Pawn", 3);
    design.setup("North", "Tokin", 5);
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
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthTokin", "South Tokin");
    view.defPiece("NorthTokin", "North Tokin");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
 
    view.defPosition("b13", 171, 11, 39, 39);
    view.defPosition("d13", 276, 11, 39, 39);
    view.defPosition("f13", 381, 11, 39, 39);
    view.defPosition("b11", 171, 72, 39, 39);
    view.defPosition("d11", 276, 72, 39, 39);
    view.defPosition("f11", 381, 72, 39, 39);
    view.defPosition("b9", 171, 133, 39, 39);
    view.defPosition("d9", 276, 133, 39, 39);
    view.defPosition("f9", 381, 133, 39, 39);
    view.defPosition("b7", 171, 194, 39, 39);
    view.defPosition("d7", 276, 194, 39, 39);
    view.defPosition("f7", 381, 194, 39, 39);
    view.defPosition("b5", 171, 255, 39, 39);
    view.defPosition("d5", 276, 255, 39, 39);
    view.defPosition("f5", 381, 255, 39, 39);
    view.defPosition("b3", 171, 316, 39, 39);
    view.defPosition("d3", 276, 316, 39, 39);
    view.defPosition("f3", 381, 316, 39, 39);
    view.defPosition("b1", 171, 377, 39, 39);
    view.defPosition("d1", 276, 377, 39, 39);
    view.defPosition("f1", 381, 377, 39, 39);
    view.defPosition("a12", 119, 43, 39, 39);
    view.defPosition("c12", 224, 43, 39, 39);
    view.defPosition("e12", 329, 43, 39, 39);
    view.defPosition("g12", 434, 43, 39, 39);
    view.defPosition("a10", 119, 104, 39, 39);
    view.defPosition("c10", 224, 104, 39, 39);
    view.defPosition("e10", 329, 104, 39, 39);
    view.defPosition("g10", 434, 104, 39, 39);
    view.defPosition("a8", 119, 165, 39, 39);
    view.defPosition("c8", 224, 165, 39, 39);
    view.defPosition("e8", 329, 165, 39, 39);
    view.defPosition("g8", 434, 165, 39, 39);
    view.defPosition("a6", 119, 226, 39, 39);
    view.defPosition("c6", 224, 226, 39, 39);
    view.defPosition("e6", 329, 226, 39, 39);
    view.defPosition("g6", 434, 226, 39, 39);
    view.defPosition("a4", 119, 287, 39, 39);
    view.defPosition("c4", 224, 287, 39, 39);
    view.defPosition("e4", 329, 287, 39, 39);
    view.defPosition("g4", 434, 287, 39, 39);
    view.defPosition("a2", 119, 348, 39, 39);
    view.defPosition("c2", 224, 348, 39, 39);
    view.defPosition("e2", 329, 348, 39, 39);
    view.defPosition("g2", 434, 348, 39, 39);
    view.defPosition("X10", 12, 12, 39, 39);
    view.defPosition("Y10", 53, 12, 39, 39);
    view.defPosition("X9", 12, 53, 39, 39);
    view.defPosition("Y9", 53, 53, 39, 39);
    view.defPosition("X8", 12, 94, 39, 39);
    view.defPosition("Y8", 53, 94, 39, 39);
    view.defPosition("X7", 12, 135, 39, 39);
    view.defPosition("Y7", 53, 135, 39, 39);
    view.defPosition("X6", 12, 176, 39, 39);
    view.defPosition("Y6", 53, 176, 39, 39);
    view.defPosition("X5", 12, 217, 39, 39);
    view.defPosition("Y5", 53, 217, 39, 39);
    view.defPosition("X4", 12, 258, 39, 39);
    view.defPosition("Y4", 53, 258, 39, 39);
    view.defPosition("X3", 12, 299, 39, 39);
    view.defPosition("Y3", 53, 299, 39, 39);
    view.defPosition("X2", 12, 340, 39, 39);
    view.defPosition("Y2", 53, 340, 39, 39);
    view.defPosition("X1", 12, 381, 39, 39);
    view.defPosition("Y1", 53, 381, 39, 39);
    view.defPosition("Z10", 502, 12, 39, 39);
    view.defPosition("T10", 543, 12, 39, 39);
    view.defPosition("Z9", 502, 53, 39, 39);
    view.defPosition("T9", 543, 53, 39, 39);
    view.defPosition("Z8", 502, 94, 39, 39);
    view.defPosition("T8", 543, 94, 39, 39);
    view.defPosition("Z7", 502, 135, 39, 39);
    view.defPosition("T7", 543, 135, 39, 39);
    view.defPosition("Z6", 502, 176, 39, 39);
    view.defPosition("T6", 543, 176, 39, 39);
    view.defPosition("Z5", 502, 217, 39, 39);
    view.defPosition("T5", 543, 217, 39, 39);
    view.defPosition("Z4", 502, 258, 39, 39);
    view.defPosition("T4", 543, 258, 39, 39);
    view.defPosition("Z3", 502, 299, 39, 39);
    view.defPosition("T3", 543, 299, 39, 39);
    view.defPosition("Z2", 502, 340, 39, 39);
    view.defPosition("T2", 543, 340, 39, 39);
    view.defPosition("Z1", 502, 381, 39, 39);
    view.defPosition("T1", 543, 381, 39, 39);
}
