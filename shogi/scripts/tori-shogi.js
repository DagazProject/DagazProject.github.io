Dagaz.View.CHECK_CANVAS   = true;
Dagaz.View.SCALE_SIZE     = true;

Dagaz.Model.WIDTH         = 7;
Dagaz.Model.HEIGHT        = 7;

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
//  design.checkVersion("advisor-wait", "25");
    design.checkVersion("tori-shogi-promotion", "true");
    design.checkVersion("tori-shogi-extension", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("nx");
    design.addDirection("n");
    design.addDirection("sr");
    design.addDirection("nr");

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("North", [6, 8, 5, 4, 3, 2, 0, 7, 1, 10, 9]);

    design.addPosition("X7", [14, 13, 0, 1, 0, 0, 0, 0, 0, 0, 14]);
    design.addPosition("Y7", [0, 13, 12, 0, -1, 0, 0, 0, 0, 0, -1]);
    design.addPosition("M7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [14, 13, 0, 1, 0, 0, 0, 79, 0, 86, -2]);
    design.addPosition("b7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 85, -3]);
    design.addPosition("c7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 84, -4]);
    design.addPosition("d7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 83, -5]);
    design.addPosition("e7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 82, -6]);
    design.addPosition("f7", [14, 13, 12, 1, -1, 0, 0, 79, 0, 81, -7]);
    design.addPosition("g7", [0, 13, 12, 0, -1, 0, 0, 0, 0, 80, -8]);
    design.addPosition("N7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z7", [14, 13, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T7", [0, 13, 12, 0, -1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 14]);
    design.addPosition("Y6", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, -1]);
    design.addPosition("M6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [14, 13, 0, 1, 0, -12, 0, -13, -13, 73, -15]);
    design.addPosition("b6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 72, -16]);
    design.addPosition("c6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 71, -17]);
    design.addPosition("d6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 70, -18]);
    design.addPosition("e6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 69, -19]);
    design.addPosition("f6", [14, 13, 12, 1, -1, -12, -14, -13, -13, 68, -20]);
    design.addPosition("g6", [0, 13, 12, 0, -1, 0, -14, -13, -13, 67, -21]);
    design.addPosition("N6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [14, 13, 0, 1, 0, -12, 0, -13, -13, 1, 0]);
    design.addPosition("T6", [0, 13, 12, 0, -1, 0, -14, -13, -13, -14, 0]);
    design.addPosition("X5", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 14]);
    design.addPosition("Y5", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, -1]);
    design.addPosition("M5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [14, 13, 0, 1, 0, -12, 0, -13, -13, 60, -28]);
    design.addPosition("b5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 59, -29]);
    design.addPosition("c5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 58, -30]);
    design.addPosition("d5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 57, -31]);
    design.addPosition("e5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 56, -32]);
    design.addPosition("f5", [14, 13, 12, 1, -1, -12, -14, -13, -13, 55, -33]);
    design.addPosition("g5", [0, 13, 12, 0, -1, 0, -14, -13, -13, 54, -34]);
    design.addPosition("N5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [14, 13, 0, 1, 0, -12, 0, -13, -13, 1, 0]);
    design.addPosition("T5", [0, 13, 12, 0, -1, 0, -14, -13, -13, -14, 0]);
    design.addPosition("X4", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 14]);
    design.addPosition("Y4", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, -1]);
    design.addPosition("M4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [14, 13, 0, 1, 0, -12, 0, -13, -13, 47, -41]);
    design.addPosition("b4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 46, -42]);
    design.addPosition("c4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 45, -43]);
    design.addPosition("d4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 44, -44]);
    design.addPosition("e4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 43, -45]);
    design.addPosition("f4", [14, 13, 12, 1, -1, -12, -14, -13, -13, 42, -46]);
    design.addPosition("g4", [0, 13, 12, 0, -1, 0, -14, -13, -13, 41, -47]);
    design.addPosition("N4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [14, 13, 0, 1, 0, -12, 0, -13, -13, 1, 0]);
    design.addPosition("T4", [0, 13, 12, 0, -1, 0, -14, -13, -13, -14, 0]);
    design.addPosition("X3", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 14]);
    design.addPosition("Y3", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, -1]);
    design.addPosition("M3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [14, 13, 0, 1, 0, -12, 0, -13, -13, 34, -54]);
    design.addPosition("b3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 33, -55]);
    design.addPosition("c3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 32, -56]);
    design.addPosition("d3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 31, -57]);
    design.addPosition("e3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 30, -58]);
    design.addPosition("f3", [14, 13, 12, 1, -1, -12, -14, -13, -13, 29, -59]);
    design.addPosition("g3", [0, 13, 12, 0, -1, 0, -14, -13, -13, 28, -60]);
    design.addPosition("N3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [14, 13, 0, 1, 0, -12, 0, -13, -13, 1, 0]);
    design.addPosition("T3", [0, 13, 12, 0, -1, 0, -14, -13, -13, -14, 0]);
    design.addPosition("X2", [14, 13, 0, 1, 0, -12, 0, -13, -13, 0, 14]);
    design.addPosition("Y2", [0, 13, 12, 0, -1, 0, -14, -13, -13, 0, -1]);
    design.addPosition("M2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [14, 13, 0, 1, 0, -12, 0, -13, -13, 21, -67]);
    design.addPosition("b2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 20, -68]);
    design.addPosition("c2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 19, -69]);
    design.addPosition("d2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 18, -70]);
    design.addPosition("e2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 17, -71]);
    design.addPosition("f2", [14, 13, 12, 1, -1, -12, -14, -13, -13, 16, -72]);
    design.addPosition("g2", [0, 13, 12, 0, -1, 0, -14, -13, -13, 15, -73]);
    design.addPosition("N2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [14, 13, 0, 1, 0, -12, 0, -13, -13, 1, 0]);
    design.addPosition("T2", [0, 13, 12, 0, -1, 0, -14, -13, -13, -14, 0]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -12, 0, -13, -13, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -14, -13, -13, 0, -1]);
    design.addPosition("M1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -12, 0, -13, -13, 8, -80]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 7, -81]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 6, -82]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 5, -83]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 4, -84]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -12, -14, -13, -13, 3, -85]);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -14, -13, -13, 2, -86]);
    design.addPosition("N1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -12, 0, -13, -13, 1, 0]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -14, -13, -13, -14, 0]);

    design.addZone("board-zone", 1, [3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 29, 30, 31, 32, 33, 34, 35, 42, 43, 44, 45, 46, 47, 48, 55, 56, 57, 58, 59, 60, 61, 68, 69, 70, 71, 72, 73, 74, 81, 82, 83, 84, 85, 86, 87]);
    design.addZone("board-zone", 2, [3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 29, 30, 31, 32, 33, 34, 35, 42, 43, 44, 45, 46, 47, 48, 55, 56, 57, 58, 59, 60, 61, 68, 69, 70, 71, 72, 73, 74, 81, 82, 83, 84, 85, 86, 87]);
    design.addZone("promotion-zone", 1, [3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22]);
    design.addZone("promotion-zone", 2, [81, 82, 83, 84, 85, 86, 87, 68, 69, 70, 71, 72, 73, 74]);

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
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-13);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
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
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Phoenix", 0, 600000);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("Falcon", 1, 700);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 1, [81, 7], 1);

    design.addPiece("FalconP", 2, 3700);
    design.addMove(2, 2, [6, 6], 0);
    design.addMove(2, 2, [5, 5], 0);
    design.addMove(2, 2, [1, 1], 0);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 3, [0, 0], 0);
    design.addMove(2, 3, [2, 2], 0);

    design.addPiece("Crane", 3, 600);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [6], 0);
    design.addMove(3, 0, [5], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 1, [81, 7], 1);

    design.addPiece("Pheasant", 4, 350);
    design.addMove(4, 4, [8, 8], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 1, [81, 7], 1);

    design.addPiece("LeftQuail", 5, 2100);
    design.addMove(5, 2, [8, 8], 0);
    design.addMove(5, 2, [0, 0], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 1, [81, 7], 1);

    design.addPiece("RightQuail", 6, 2100);
    design.addMove(6, 2, [8, 8], 0);
    design.addMove(6, 2, [2, 2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 1, [81, 7], 1);

    design.addPiece("Swallow", 7, 100);
    design.addMove(7, 0, [8], 0);
    design.addMove(7, 1, [81, 7], 1);

    design.addPiece("SwallowP", 8, 450);
    design.addMove(8, 4, [6, 6], 0);
    design.addMove(8, 4, [5, 5], 0);
    design.addMove(8, 4, [1, 1], 0);
    design.addMove(8, 1, [81, 7], 1);

    design.setup("South", "Swallow", 55);
    design.setup("South", "Swallow", 56);
    design.setup("South", "Swallow", 57);
    design.setup("South", "Swallow", 58);
    design.setup("South", "Swallow", 59);
    design.setup("South", "Swallow", 60);
    design.setup("South", "Swallow", 61);
    design.setup("South", "Swallow", 46);
    design.setup("South", "Falcon", 71);
    design.setup("South", "LeftQuail", 81);
    design.setup("South", "RightQuail", 87);
    design.setup("South", "Pheasant", 82);
    design.setup("South", "Pheasant", 86);
    design.setup("South", "Crane", 83);
    design.setup("South", "Crane", 85);
    design.setup("South", "Phoenix", 84);
    design.setup("North", "Swallow", 29);
    design.setup("North", "Swallow", 30);
    design.setup("North", "Swallow", 31);
    design.setup("North", "Swallow", 32);
    design.setup("North", "Swallow", 33);
    design.setup("North", "Swallow", 34);
    design.setup("North", "Swallow", 35);
    design.setup("North", "Swallow", 44);
    design.setup("North", "Falcon", 19);
    design.setup("North", "LeftQuail", 9);
    design.setup("North", "RightQuail", 3);
    design.setup("North", "Pheasant", 4);
    design.setup("North", "Pheasant", 8);
    design.setup("North", "Crane", 5);
    design.setup("North", "Crane", 7);
    design.setup("North", "Phoenix", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPieceSvg("SouthPhoenix", "South Phoenix", 40, 46);
    view.defPieceSvg("NorthPhoenix", "North Phoenix", 40, 46);
    view.defPieceSvg("SouthFalcon", "South Falcon", 40, 46);
    view.defPieceSvg("NorthFalcon", "North Falcon", 40, 46);
    view.defPieceSvg("SouthFalconP", "South FalconP", 40, 46);
    view.defPieceSvg("NorthFalconP", "North FalconP", 40, 46);
    view.defPieceSvg("SouthCrane", "South Crane", 40, 46);
    view.defPieceSvg("NorthCrane", "North Crane", 40, 46);
    view.defPieceSvg("SouthPheasant", "South Pheasant", 40, 46);
    view.defPieceSvg("NorthPheasant", "North Pheasant", 40, 46);
    view.defPieceSvg("SouthLeftQuail", "South LeftQuail", 40, 46);
    view.defPieceSvg("NorthLeftQuail", "North LeftQuail", 40, 46);
    view.defPieceSvg("SouthRightQuail", "South RightQuail", 40, 46);
    view.defPieceSvg("NorthRightQuail", "North RightQuail", 40, 46);
    view.defPieceSvg("SouthSwallow", "South Swallow", 40, 46);
    view.defPieceSvg("NorthSwallow", "North Swallow", 40, 46);
    view.defPieceSvg("SouthSwallowP", "South SwallowP", 40, 46);
    view.defPieceSvg("NorthSwallowP", "North SwallowP", 40, 46);
 
    view.defPosition("X7", 15, 17, 48, 48);
    view.defPosition("Y7", 63, 17, 48, 48);
    view.defPosition("M7", 111, 17, 48, 48);
    view.defPosition("a7", 159, 17, 48, 48);
    view.defPosition("b7", 207, 17, 48, 48);
    view.defPosition("c7", 255, 17, 48, 48);
    view.defPosition("d7", 303, 17, 48, 48);
    view.defPosition("e7", 351, 17, 48, 48);
    view.defPosition("f7", 399, 17, 48, 48);
    view.defPosition("g7", 447, 17, 48, 48);
    view.defPosition("N7", 495, 17, 48, 48);
    view.defPosition("Z7", 543, 17, 48, 48);
    view.defPosition("T7", 591, 17, 48, 48);
    view.defPosition("X6", 15, 65, 48, 48);
    view.defPosition("Y6", 63, 65, 48, 48);
    view.defPosition("M6", 111, 65, 48, 48);
    view.defPosition("a6", 159, 65, 48, 48);
    view.defPosition("b6", 207, 65, 48, 48);
    view.defPosition("c6", 255, 65, 48, 48);
    view.defPosition("d6", 303, 65, 48, 48);
    view.defPosition("e6", 351, 65, 48, 48);
    view.defPosition("f6", 399, 65, 48, 48);
    view.defPosition("g6", 447, 65, 48, 48);
    view.defPosition("N6", 495, 65, 48, 48);
    view.defPosition("Z6", 543, 65, 48, 48);
    view.defPosition("T6", 591, 65, 48, 48);
    view.defPosition("X5", 15, 113, 48, 48);
    view.defPosition("Y5", 63, 113, 48, 48);
    view.defPosition("M5", 111, 113, 48, 48);
    view.defPosition("a5", 159, 113, 48, 48);
    view.defPosition("b5", 207, 113, 48, 48);
    view.defPosition("c5", 255, 113, 48, 48);
    view.defPosition("d5", 303, 113, 48, 48);
    view.defPosition("e5", 351, 113, 48, 48);
    view.defPosition("f5", 399, 113, 48, 48);
    view.defPosition("g5", 447, 113, 48, 48);
    view.defPosition("N5", 495, 113, 48, 48);
    view.defPosition("Z5", 543, 113, 48, 48);
    view.defPosition("T5", 591, 113, 48, 48);
    view.defPosition("X4", 15, 161, 48, 48);
    view.defPosition("Y4", 63, 161, 48, 48);
    view.defPosition("M4", 111, 161, 48, 48);
    view.defPosition("a4", 159, 161, 48, 48);
    view.defPosition("b4", 207, 161, 48, 48);
    view.defPosition("c4", 255, 161, 48, 48);
    view.defPosition("d4", 303, 161, 48, 48);
    view.defPosition("e4", 351, 161, 48, 48);
    view.defPosition("f4", 399, 161, 48, 48);
    view.defPosition("g4", 447, 161, 48, 48);
    view.defPosition("N4", 495, 161, 48, 48);
    view.defPosition("Z4", 543, 161, 48, 48);
    view.defPosition("T4", 591, 161, 48, 48);
    view.defPosition("X3", 15, 209, 48, 48);
    view.defPosition("Y3", 63, 209, 48, 48);
    view.defPosition("M3", 111, 209, 48, 48);
    view.defPosition("a3", 159, 209, 48, 48);
    view.defPosition("b3", 207, 209, 48, 48);
    view.defPosition("c3", 255, 209, 48, 48);
    view.defPosition("d3", 303, 209, 48, 48);
    view.defPosition("e3", 351, 209, 48, 48);
    view.defPosition("f3", 399, 209, 48, 48);
    view.defPosition("g3", 447, 209, 48, 48);
    view.defPosition("N3", 495, 209, 48, 48);
    view.defPosition("Z3", 543, 209, 48, 48);
    view.defPosition("T3", 591, 209, 48, 48);
    view.defPosition("X2", 15, 257, 48, 48);
    view.defPosition("Y2", 63, 257, 48, 48);
    view.defPosition("M2", 111, 257, 48, 48);
    view.defPosition("a2", 159, 257, 48, 48);
    view.defPosition("b2", 207, 257, 48, 48);
    view.defPosition("c2", 255, 257, 48, 48);
    view.defPosition("d2", 303, 257, 48, 48);
    view.defPosition("e2", 351, 257, 48, 48);
    view.defPosition("f2", 399, 257, 48, 48);
    view.defPosition("g2", 447, 257, 48, 48);
    view.defPosition("N2", 495, 257, 48, 48);
    view.defPosition("Z2", 543, 257, 48, 48);
    view.defPosition("T2", 591, 257, 48, 48);
    view.defPosition("X1", 15, 305, 48, 48);
    view.defPosition("Y1", 63, 305, 48, 48);
    view.defPosition("M1", 111, 305, 48, 48);
    view.defPosition("a1", 159, 305, 48, 48);
    view.defPosition("b1", 207, 305, 48, 48);
    view.defPosition("c1", 255, 305, 48, 48);
    view.defPosition("d1", 303, 305, 48, 48);
    view.defPosition("e1", 351, 305, 48, 48);
    view.defPosition("f1", 399, 305, 48, 48);
    view.defPosition("g1", 447, 305, 48, 48);
    view.defPosition("N1", 495, 305, 48, 48);
    view.defPosition("Z1", 543, 305, 48, 48);
    view.defPosition("T1", 591, 305, 48, 48);
}
