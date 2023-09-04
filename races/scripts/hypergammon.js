Dagaz.Model.WHITE_START = "a1a";
Dagaz.Model.BLACK_START = "a2a";

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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("nx"); // 0
    design.addDirection("bx"); // 1
    design.addDirection("wx"); // 2
    design.addDirection("wn"); // 3
    design.addDirection("bn"); // 4
    design.addDirection("up"); // 5
    design.addDirection("wh"); // 6
    design.addDirection("bh"); // 7

    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Black", [0, 2, 1, 4, 3, 5, 7, 6]);
    design.addRandom(1, [7]); // 0
    design.addRandom(2, [7]); // 1
    design.repeatMark();
    design.addRandom(1, [0]); // 2
    design.addRandom(1, [0]); // 3
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 4
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 5
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 6
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 7
    design.addRandom(2, [0]); // 8
    design.addRandom(2, [0]); // 9
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 10
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 11
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 12
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 13

    design.addPosition("m1a", [87, 86, 78, 36, 3, 1, 69, 33]);
    design.addPosition("m1b", [0, 0, 0, 35, 2, 1, 0, 0]);
    design.addPosition("m1c", [0, 0, 0, 34, 1, 0, 0, 0]);
    design.addPosition("l1a", [0, 0, 0, -3, 3, 1, 0, 0]);
    design.addPosition("l1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("l1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("k1a", [0, 0, 0, -3, 3, 1, 0, 0]);
    design.addPosition("k1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("k1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("j1a", [0, 0, 0, -3, 3, 1, 0, 0]);
    design.addPosition("j1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("j1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("h1a", [0, 0, 0, -3, 3, 1, 0, 0]);
    design.addPosition("h1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("h1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("g1a", [0, 0, 0, -3, 3, 1, 0, 0]);
    design.addPosition("g1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("g1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("f1a", [0, 0, 0, -3, 3, 1, 0, 0]);
    design.addPosition("f1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("f1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("e1a", [0, 0, 0, -3, 3, 1, 0, -3]);
    design.addPosition("e1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("e1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("d1a", [0, 0, 0, -3, 3, 1, 0, -3]);
    design.addPosition("d1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("d1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("c1a", [0, 0, 0, -3, 3, 1, 0, -3]);
    design.addPosition("c1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("c1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("b1a", [0, 0, 0, -3, 3, 1, 0, -3]);
    design.addPosition("b1b", [0, 0, 0, -4, 2, 1, 0, 0]);
    design.addPosition("b1c", [0, 0, 0, -5, 1, 0, 0, 0]);
    design.addPosition("a1a", [0, 0, 0, -3, 39, 1, 0, -3]);
    design.addPosition("a1b", [0, 0, 0, -4, 38, 1, 0, 0]);
    design.addPosition("a1c", [0, 0, 0, -5, 37, 0, 0, 0]);
    design.addPosition("m2a", [0, 0, 0, 3, -36, 1, 0, 0]);
    design.addPosition("m2b", [0, 0, 0, 2, -37, 1, 0, 0]);
    design.addPosition("m2c", [0, 0, 0, 1, -38, 0, 0, 0]);
    design.addPosition("l2a", [0, 0, 0, 3, -3, 1, 0, 0]);
    design.addPosition("l2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("l2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("k2a", [0, 0, 0, 3, -3, 1, 0, 0]);
    design.addPosition("k2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("k2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("j2a", [0, 0, 0, 3, -3, 1, 0, 0]);
    design.addPosition("j2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("j2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("h2a", [0, 0, 0, 3, -3, 1, 0, 0]);
    design.addPosition("h2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("h2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("g2a", [0, 0, 0, 3, -3, 1, 0, 0]);
    design.addPosition("g2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("g2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("f2a", [0, 0, 0, 3, -3, 1, 0, 0]);
    design.addPosition("f2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("f2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("e2a", [0, 0, 0, 3, -3, 1, -3, 0]);
    design.addPosition("e2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("e2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("d2a", [0, 0, 0, 3, -3, 1, -3, 0]);
    design.addPosition("d2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("d2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("c2a", [0, 0, 0, 3, -3, 1, -3, 0]);
    design.addPosition("c2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("c2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("b2a", [0, 0, 0, 3, -3, 1, -3, 0]);
    design.addPosition("b2b", [0, 0, 0, 2, -4, 1, 0, 0]);
    design.addPosition("b2c", [0, 0, 0, 1, -5, 0, 0, 0]);
    design.addPosition("a2a", [0, 0, 0, 6, -3, 1, -3, 0]);
    design.addPosition("a2b", [0, 0, 0, 5, -4, 1, 0, 0]);
    design.addPosition("a2c", [0, 0, 0, 4, -5, 0, 0, 0]);
    design.addPosition("H2a", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2b", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2c", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("H1a", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1b", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1c", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B9", [0, 0, 1, -45, -9, 0, 0, 0]);
    design.addPosition("B8", [0, -1, 1, -46, -10, 0, 0, 0]);
    design.addPosition("B7", [0, -1, 1, -47, -11, 0, 0, 0]);
    design.addPosition("B6", [0, -1, 1, -48, -12, 0, 0, 0]);
    design.addPosition("B5", [0, -1, 1, -49, -13, 0, 0, 0]);
    design.addPosition("B4", [0, -1, 1, -50, -14, 0, 0, 0]);
    design.addPosition("B3", [0, -1, 1, -51, -15, 0, 0, 0]);
    design.addPosition("B2", [0, -1, 1, -52, -16, 0, 0, 0]);
    design.addPosition("B1", [0, -1, 0, -53, -17, 0, 0, 0]);
    design.addPosition("D1", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("home-zone", 1, [69, 66, 63, 60, 57, 54, 75, 72, 70, 67, 64, 61, 58, 55, 76, 73, 71, 68, 65, 62, 59, 56, 77, 74]);
    design.addZone("home-zone", 2, [33, 30, 27, 24, 21, 18, 75, 72, 34, 31, 28, 25, 22, 19, 76, 73, 35, 32, 29, 26, 23, 20, 77, 74]);
    design.addZone("dice-zone", 1, [89, 90]);
    design.addZone("dice-zone", 2, [87, 88]);
    design.addZone("bar-zone", 1, [86, 85, 84, 83, 82, 81, 80, 79, 78]);
    design.addZone("bar-zone", 2, [86, 85, 84, 83, 82, 81, 80, 79, 78]);
    design.addZone("out-zone", 1, [75, 72, 76, 73, 77, 74]);
    design.addZone("out-zone", 2, [75, 72, 76, 73, 77, 74]);
    design.addZone("top-zone", 1, [33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0, 72, 34, 31, 28, 25, 22, 19, 16, 13, 10, 7, 4, 1, 73, 35, 32, 29, 26, 23, 20, 17, 14, 11, 8, 5, 2, 74]);
    design.addZone("top-zone", 2, [33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0, 72, 34, 31, 28, 25, 22, 19, 16, 13, 10, 7, 4, 1, 73, 35, 32, 29, 26, 23, 20, 17, 14, 11, 8, 5, 2, 74]);
    design.addZone("board-zone", 1, [33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0, 34, 31, 28, 25, 22, 19, 16, 13, 10, 7, 4, 1, 35, 32, 29, 26, 23, 20, 17, 14, 11, 8, 5, 2, 69, 66, 63, 60, 57, 54, 51, 48, 45, 42, 39, 36, 70, 67, 64, 61, 58, 55, 52, 49, 46, 43, 40, 37, 71, 68, 65, 62, 59, 56, 53, 50, 47, 44, 41, 38, 86, 85, 84, 83, 82, 81, 80, 79, 78]);
    design.addZone("board-zone", 2, [33, 30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0, 34, 31, 28, 25, 22, 19, 16, 13, 10, 7, 4, 1, 35, 32, 29, 26, 23, 20, 17, 14, 11, 8, 5, 2, 69, 66, 63, 60, 57, 54, 51, 48, 45, 42, 39, 36, 70, 67, 64, 61, 58, 55, 52, 49, 46, 43, 40, 37, 71, 68, 65, 62, 59, 56, 53, 50, 47, 44, 41, 38, 86, 85, 84, 83, 82, 81, 80, 79, 78]);
    design.addZone("init-zone", 1, [90]);
    design.addZone("init-zone", 2, [87]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-5);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-5);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-5);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-5);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.IN_ZONE,	1);	// dice-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.IN_ZONE,	6);	// init-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 5], 1, 1);
    design.addMove(0, 1, [3, 3, 5], 2, 1);
    design.addMove(0, 2, [3, 3, 3, 5], 3, 1);
    design.addMove(0, 3, [3, 3, 3, 3, 5], 4, 1);
    design.addMove(0, 4, [3, 3, 3, 3, 3, 5], 5, 1);
    design.addMove(0, 5, [3, 3, 3, 3, 3, 3, 5], 6, 1);

    design.addPiece("D1", 1, 1);
    design.addDrop(1, 6, [], 0, 10);
    design.addDrop(1, 7, [], 7, 10);
    design.addPiece("D2", 2, 2);
    design.addDrop(2, 6, [], 0, 10);
    design.addDrop(2, 7, [], 7, 10);
    design.addPiece("D3", 3, 3);
    design.addDrop(3, 6, [], 0, 10);
    design.addDrop(3, 7, [], 7, 10);
    design.addPiece("D4", 4, 4);
    design.addDrop(4, 6, [], 0, 10);
    design.addDrop(4, 7, [], 7, 10);
    design.addPiece("D5", 5, 5);
    design.addDrop(5, 6, [], 0, 10);
    design.addDrop(5, 7, [], 7, 10);
    design.addPiece("D6", 6, 6);
    design.addDrop(6, 6, [], 0, 10);
    design.addDrop(6, 7, [], 7, 10);

    design.setup("White", "Man", 33);
    design.setup("White", "Man", 30);
    design.setup("White", "Man", 27);
    design.setup("Black", "Man", 69);
    design.setup("Black", "Man", 66);
    design.setup("Black", "Man", 63);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0, 1, 2, 3, 4, 5, 6, 7]);
    view.defBoard("BlackBoard", 0, 0, undefined, [8, 9, 10, 11, 12, 13]);
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteD1", "White D1");
    view.defPiece("BlackD1", "Black D1");
    view.defPiece("WhiteD2", "White D2");
    view.defPiece("BlackD2", "Black D2");
    view.defPiece("WhiteD3", "White D3");
    view.defPiece("BlackD3", "Black D3");
    view.defPiece("WhiteD4", "White D4");
    view.defPiece("BlackD4", "Black D4");
    view.defPiece("WhiteD5", "White D5");
    view.defPiece("BlackD5", "Black D5");
    view.defPiece("WhiteD6", "White D6");
    view.defPiece("BlackD6", "Black D6");
 
    view.defPosition("m1a", 9, 10, 34, 32);
    view.defPosition("m1b", 9, 42, 34, 32);
    view.defPosition("m1c", 9, 74, 34, 32);
    view.defPosition("l1a", 43, 10, 34, 32);
    view.defPosition("l1b", 43, 42, 34, 32);
    view.defPosition("l1c", 43, 74, 34, 32);
    view.defPosition("k1a", 77, 10, 34, 32);
    view.defPosition("k1b", 77, 42, 34, 32);
    view.defPosition("k1c", 77, 74, 34, 32);
    view.defPosition("j1a", 111, 10, 34, 32);
    view.defPosition("j1b", 111, 42, 34, 32);
    view.defPosition("j1c", 111, 74, 34, 32);
    view.defPosition("h1a", 145, 10, 34, 32);
    view.defPosition("h1b", 145, 42, 34, 32);
    view.defPosition("h1c", 145, 74, 34, 32);
    view.defPosition("g1a", 179, 10, 34, 32);
    view.defPosition("g1b", 179, 42, 34, 32);
    view.defPosition("g1c", 179, 74, 34, 32);
    view.defPosition("f1a", 237, 10, 34, 32);
    view.defPosition("f1b", 237, 42, 34, 32);
    view.defPosition("f1c", 237, 74, 34, 32);
    view.defPosition("e1a", 271, 10, 34, 32);
    view.defPosition("e1b", 271, 42, 34, 32);
    view.defPosition("e1c", 271, 74, 34, 32);
    view.defPosition("d1a", 305, 10, 34, 32);
    view.defPosition("d1b", 305, 42, 34, 32);
    view.defPosition("d1c", 305, 74, 34, 32);
    view.defPosition("c1a", 339, 10, 34, 32);
    view.defPosition("c1b", 339, 42, 34, 32);
    view.defPosition("c1c", 339, 74, 34, 32);
    view.defPosition("b1a", 373, 10, 34, 32);
    view.defPosition("b1b", 373, 42, 34, 32);
    view.defPosition("b1c", 373, 74, 34, 32);
    view.defPosition("a1a", 407, 10, 34, 32);
    view.defPosition("a1b", 407, 42, 34, 32);
    view.defPosition("a1c", 407, 74, 34, 32);
    view.defPosition("m2a", 9, 308, 34, 32);
    view.defPosition("m2b", 9, 276, 34, 32);
    view.defPosition("m2c", 9, 244, 34, 32);
    view.defPosition("l2a", 43, 308, 34, 32);
    view.defPosition("l2b", 43, 276, 34, 32);
    view.defPosition("l2c", 43, 244, 34, 32);
    view.defPosition("k2a", 77, 308, 34, 32);
    view.defPosition("k2b", 77, 276, 34, 32);
    view.defPosition("k2c", 77, 244, 34, 32);
    view.defPosition("j2a", 111, 308, 34, 32);
    view.defPosition("j2b", 111, 276, 34, 32);
    view.defPosition("j2c", 111, 244, 34, 32);
    view.defPosition("h2a", 145, 308, 34, 32);
    view.defPosition("h2b", 145, 276, 34, 32);
    view.defPosition("h2c", 145, 244, 34, 32);
    view.defPosition("g2a", 179, 308, 34, 32);
    view.defPosition("g2b", 179, 276, 34, 32);
    view.defPosition("g2c", 179, 244, 34, 32);
    view.defPosition("f2a", 237, 308, 34, 32);
    view.defPosition("f2b", 237, 276, 34, 32);
    view.defPosition("f2c", 237, 244, 34, 32);
    view.defPosition("e2a", 271, 308, 34, 32);
    view.defPosition("e2b", 271, 276, 34, 32);
    view.defPosition("e2c", 271, 244, 34, 32);
    view.defPosition("d2a", 305, 308, 34, 32);
    view.defPosition("d2b", 305, 276, 34, 32);
    view.defPosition("d2c", 305, 244, 34, 32);
    view.defPosition("c2a", 339, 308, 34, 32);
    view.defPosition("c2b", 339, 276, 34, 32);
    view.defPosition("c2c", 339, 244, 34, 32);
    view.defPosition("b2a", 373, 308, 34, 32);
    view.defPosition("b2b", 373, 276, 34, 32);
    view.defPosition("b2c", 373, 244, 34, 32);
    view.defPosition("a2a", 407, 308, 34, 32);
    view.defPosition("a2b", 407, 276, 34, 32);
    view.defPosition("a2c", 407, 244, 34, 32);
    view.defPosition("H2a", 456, 10, 40, 32);
    view.defPosition("H2b", 456, 42, 40, 32);
    view.defPosition("H2c", 456, 74, 40, 32);
    view.defPosition("H1a", 456, 308, 40, 32);
    view.defPosition("H1b", 456, 276, 40, 32);
    view.defPosition("H1c", 456, 244, 40, 32);
    view.defPosition("B9", 210, 40, 30, 30);
    view.defPosition("B8", 210, 70, 30, 30);
    view.defPosition("B7", 210, 100, 30, 30);
    view.defPosition("B6", 210, 130, 30, 30);
    view.defPosition("B5", 210, 160, 30, 30);
    view.defPosition("B4", 210, 190, 30, 30);
    view.defPosition("B3", 210, 220, 30, 30);
    view.defPosition("B2", 210, 250, 30, 30);
    view.defPosition("B1", 210, 280, 30, 30);
    view.defPosition("D1", 77, 160, 34, 29);
    view.defPosition("D2", 111, 160, 34, 29);
    view.defPosition("D3", 305, 160, 34, 29);
    view.defPosition("D4", 339, 160, 34, 29);
}
