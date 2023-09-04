Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

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
    design.addDirection("nx"); // 7
    design.addDirection("n");  // 8
    design.addDirection("nr"); // 9
    design.addDirection("sr"); // 10

    design.addPlayer("White", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("Black", [5, 8, 6, 3, 4, 0, 2, 7, 1, 10, 9]);

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 8, 0, 65, 94]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 8, 0, 64, 93]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 8, 0, 63, 92]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 8, 0, 62, 91]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 8, 0, 61, 90]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 8, 0, 60, 89]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 8, 0, 59, 88]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 8, 0, 58, 87]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, 8, -8, 57, 86]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, 8, -8, 56, 85]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, 8, -8, 55, 84]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, 8, -8, 54, 83]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, 8, -8, 53, 82]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, 8, -8, 52, 81]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, 8, -8, 51, 80]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, 8, -8, 50, 79]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, 8, -8, 49, 78]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, 8, -8, 48, 77]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, 8, -8, 47, 76]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, 8, -8, 46, 75]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, 8, -8, 45, 74]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, 8, -8, 44, 73]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, 8, -8, 43, 72]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, 8, -8, 42, 71]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, 8, -8, 41, 70]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, 8, -8, 40, 69]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, 8, -8, 39, 68]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, 8, -8, 38, 67]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, 8, -8, 37, 66]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, 8, -8, 36, 65]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, 8, -8, 35, 64]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, 8, -8, 34, 63]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, 8, -8, 33, 62]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, 8, -8, 32, 61]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, 8, -8, 31, 60]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, 8, -8, 30, 59]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, 8, -8, 29, 58]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, 8, -8, 28, 57]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, 8, -8, 27, 56]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, 8, -8, 26, 55]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, 8, -8, 25, 54]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, 8, -8, 24, 53]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, 8, -8, 23, 52]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, 8, -8, 22, 51]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, 8, -8, 21, 50]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, 8, -8, 20, 49]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, 8, -8, 19, 48]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, 8, -8, 18, 47]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, 8, -8, 17, 46]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, 8, -8, 16, 45]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, 8, -8, 15, 44]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, 8, -8, 14, 43]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, 8, -8, 13, 42]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, 8, -8, 12, 41]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, 8, -8, 11, 40]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, 8, -8, 10, 39]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, -55, -8, 9, 38]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, -55, -8, 8, 37]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, -55, -8, 7, 36]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, -55, -8, 6, 35]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, -55, -8, 5, 34]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, -55, -8, 4, 33]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, -55, -8, 3, 32]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, 0, -8, 2, 31]);
    design.addPosition("X8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("Z8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T8", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0]);
    design.addPosition("Z7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T7", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T6", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3]);
    design.addPosition("U1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("last-rank", 2, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("third-rank", 1, [40, 41, 42, 43, 44, 45, 46, 47]);
    design.addZone("third-rank", 2, [16, 17, 18, 19, 20, 21, 22, 23]);
    design.addZone("board-zone", 1, [56, 57, 58, 59, 60, 61, 62, 63, 48, 49, 50, 51, 52, 53, 54, 55, 40, 41, 42, 43, 44, 45, 46, 47, 32, 33, 34, 35, 36, 37, 38, 39, 24, 25, 26, 27, 28, 29, 30, 31, 16, 17, 18, 19, 20, 21, 22, 23, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("board-zone", 2, [56, 57, 58, 59, 60, 61, 62, 63, 48, 49, 50, 51, 52, 53, 54, 55, 40, 41, 42, 43, 44, 45, 46, 47, 32, 33, 34, 35, 36, 37, 38, 39, 24, 25, 26, 27, 28, 29, 30, 31, 16, 17, 18, 19, 20, 21, 22, 23, 8, 9, 10, 11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7]);

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
    design.addCommand(4, ZRF.IN_ZONE,	2);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	21);	// position
    design.addCommand(4, ZRF.ON_BOARD_DIR,	7);	// name
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
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
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
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	1);	// Rook
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
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
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	1);	// Rook
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	4);	// $5
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	5);	// $6
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	6);	// $7
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 1, [8, 8], 0);
    design.addMove(0, 2, [6], 0);
    design.addMove(0, 2, [5], 0);
    design.addMove(0, 3, [3, 8, 8], 2);
    design.addMove(0, 3, [4, 8, 8], 2);
    design.addMove(0, 4, [0, 7], 1);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 5, [8, 8], 0);
    design.addMove(1, 5, [1, 1], 0);
    design.addMove(1, 5, [4, 4], 0);
    design.addMove(1, 5, [3, 3], 0);
    design.addMove(1, 4, [0, 7], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 6, [8, 6], 0);
    design.addMove(2, 6, [8, 5], 0);
    design.addMove(2, 6, [1, 2], 0);
    design.addMove(2, 6, [1, 0], 0);
    design.addMove(2, 6, [4, 6], 0);
    design.addMove(2, 6, [4, 2], 0);
    design.addMove(2, 6, [3, 5], 0);
    design.addMove(2, 6, [3, 0], 0);
    design.addMove(2, 4, [0, 7], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 5, [6, 6], 0);
    design.addMove(3, 5, [2, 2], 0);
    design.addMove(3, 5, [5, 5], 0);
    design.addMove(3, 5, [0, 0], 0);
    design.addMove(3, 4, [0, 7], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 5, [8, 8], 0);
    design.addMove(4, 5, [1, 1], 0);
    design.addMove(4, 5, [4, 4], 0);
    design.addMove(4, 5, [3, 3], 0);
    design.addMove(4, 5, [6, 6], 0);
    design.addMove(4, 5, [2, 2], 0);
    design.addMove(4, 5, [5, 5], 0);
    design.addMove(4, 5, [0, 0], 0);
    design.addMove(4, 4, [0, 7], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 7, [8], 0);
    design.addMove(5, 7, [1], 0);
    design.addMove(5, 7, [4], 0);
    design.addMove(5, 7, [3], 0);
    design.addMove(5, 7, [6], 0);
    design.addMove(5, 7, [2], 0);
    design.addMove(5, 7, [5], 0);
    design.addMove(5, 7, [0], 0);
    design.addMove(5, 8, [3, 3, 3, 4, 4], 0);
    design.addMove(5, 9, [4, 4, 4, 4, 3, 3, 3], 0);

    design.setup("White", "Pawn", 48);
    design.setup("White", "Pawn", 49);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 51);
    design.setup("White", "Pawn", 52);
    design.setup("White", "Pawn", 53);
    design.setup("White", "Pawn", 54);
    design.setup("White", "Pawn", 55);
    design.setup("White", "Rook", 56);
    design.setup("White", "Rook", 63);
    design.setup("White", "Knight", 57);
    design.setup("White", "Knight", 62);
    design.setup("White", "Bishop", 58);
    design.setup("White", "Bishop", 61);
    design.setup("White", "Queen", 59);
    design.setup("White", "King", 60);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Pawn", 12);
    design.setup("Black", "Pawn", 13);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 7);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 6);
    design.setup("Black", "Bishop", 2);
    design.setup("Black", "Bishop", 5);
    design.setup("Black", "Queen", 3);
    design.setup("Black", "King", 4);
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
 
    view.defPosition("a8", 138, 2, 68, 68);
    view.defPosition("b8", 206, 2, 68, 68);
    view.defPosition("c8", 274, 2, 68, 68);
    view.defPosition("d8", 342, 2, 68, 68);
    view.defPosition("e8", 410, 2, 68, 68);
    view.defPosition("f8", 478, 2, 68, 68);
    view.defPosition("g8", 546, 2, 68, 68);
    view.defPosition("h8", 614, 2, 68, 68);
    view.defPosition("a7", 138, 70, 68, 68);
    view.defPosition("b7", 206, 70, 68, 68);
    view.defPosition("c7", 274, 70, 68, 68);
    view.defPosition("d7", 342, 70, 68, 68);
    view.defPosition("e7", 410, 70, 68, 68);
    view.defPosition("f7", 478, 70, 68, 68);
    view.defPosition("g7", 546, 70, 68, 68);
    view.defPosition("h7", 614, 70, 68, 68);
    view.defPosition("a6", 138, 138, 68, 68);
    view.defPosition("b6", 206, 138, 68, 68);
    view.defPosition("c6", 274, 138, 68, 68);
    view.defPosition("d6", 342, 138, 68, 68);
    view.defPosition("e6", 410, 138, 68, 68);
    view.defPosition("f6", 478, 138, 68, 68);
    view.defPosition("g6", 546, 138, 68, 68);
    view.defPosition("h6", 614, 138, 68, 68);
    view.defPosition("a5", 138, 206, 68, 68);
    view.defPosition("b5", 206, 206, 68, 68);
    view.defPosition("c5", 274, 206, 68, 68);
    view.defPosition("d5", 342, 206, 68, 68);
    view.defPosition("e5", 410, 206, 68, 68);
    view.defPosition("f5", 478, 206, 68, 68);
    view.defPosition("g5", 546, 206, 68, 68);
    view.defPosition("h5", 614, 206, 68, 68);
    view.defPosition("a4", 138, 274, 68, 68);
    view.defPosition("b4", 206, 274, 68, 68);
    view.defPosition("c4", 274, 274, 68, 68);
    view.defPosition("d4", 342, 274, 68, 68);
    view.defPosition("e4", 410, 274, 68, 68);
    view.defPosition("f4", 478, 274, 68, 68);
    view.defPosition("g4", 546, 274, 68, 68);
    view.defPosition("h4", 614, 274, 68, 68);
    view.defPosition("a3", 138, 342, 68, 68);
    view.defPosition("b3", 206, 342, 68, 68);
    view.defPosition("c3", 274, 342, 68, 68);
    view.defPosition("d3", 342, 342, 68, 68);
    view.defPosition("e3", 410, 342, 68, 68);
    view.defPosition("f3", 478, 342, 68, 68);
    view.defPosition("g3", 546, 342, 68, 68);
    view.defPosition("h3", 614, 342, 68, 68);
    view.defPosition("a2", 138, 410, 68, 68);
    view.defPosition("b2", 206, 410, 68, 68);
    view.defPosition("c2", 274, 410, 68, 68);
    view.defPosition("d2", 342, 410, 68, 68);
    view.defPosition("e2", 410, 410, 68, 68);
    view.defPosition("f2", 478, 410, 68, 68);
    view.defPosition("g2", 546, 410, 68, 68);
    view.defPosition("h2", 614, 410, 68, 68);
    view.defPosition("a1", 138, 478, 68, 68);
    view.defPosition("b1", 206, 478, 68, 68);
    view.defPosition("c1", 274, 478, 68, 68);
    view.defPosition("d1", 342, 478, 68, 68);
    view.defPosition("e1", 410, 478, 68, 68);
    view.defPosition("f1", 478, 478, 68, 68);
    view.defPosition("g1", 546, 478, 68, 68);
    view.defPosition("h1", 614, 478, 68, 68);
    view.defPosition("X8", 2, 2, 68, 68);
    view.defPosition("Y8", 70, 2, 68, 68);
    view.defPosition("X7", 2, 70, 68, 68);
    view.defPosition("Y7", 70, 70, 68, 68);
    view.defPosition("X6", 2, 138, 68, 68);
    view.defPosition("Y6", 70, 138, 68, 68);
    view.defPosition("X5", 2, 206, 68, 68);
    view.defPosition("Y5", 70, 206, 68, 68);
    view.defPosition("X4", 2, 274, 68, 68);
    view.defPosition("Y4", 70, 274, 68, 68);
    view.defPosition("X3", 2, 342, 68, 68);
    view.defPosition("Y3", 70, 342, 68, 68);
    view.defPosition("X2", 2, 410, 68, 68);
    view.defPosition("Y2", 70, 410, 68, 68);
    view.defPosition("X1", 2, 478, 68, 68);
    view.defPosition("Y1", 70, 478, 68, 68);
    view.defPosition("Z8", 682, 2, 68, 68);
    view.defPosition("T8", 750, 2, 68, 68);
    view.defPosition("Z7", 682, 70, 68, 68);
    view.defPosition("T7", 750, 70, 68, 68);
    view.defPosition("Z6", 682, 138, 68, 68);
    view.defPosition("T6", 750, 138, 68, 68);
    view.defPosition("Z5", 682, 206, 68, 68);
    view.defPosition("T5", 750, 206, 68, 68);
    view.defPosition("Z4", 682, 274, 68, 68);
    view.defPosition("T4", 750, 274, 68, 68);
    view.defPosition("Z3", 682, 342, 68, 68);
    view.defPosition("T3", 750, 342, 68, 68);
    view.defPosition("Z2", 682, 410, 68, 68);
    view.defPosition("T2", 750, 410, 68, 68);
    view.defPosition("Z1", 682, 478, 68, 68);
    view.defPosition("T1", 750, 478, 68, 68);

    view.defPopup("Promote", 263, 100);
    view.defPopupPosition("U1", 10, 7, 68, 68);
    view.defPopupPosition("U2", 80, 7, 68, 68);
    view.defPopupPosition("U3", 150, 7, 68, 68);
    view.defPopupPosition("U4", 220, 7, 68, 68);
}
