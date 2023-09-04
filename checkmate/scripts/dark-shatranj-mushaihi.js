Dagaz.Controller.persistense = "none";

Dagaz.AI.NOISE_FACTOR = 1000;

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
    design.checkVersion("shatranj-invariant", "true");

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

    design.addPosition("a8", [0, 1, 8, 0, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("c8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("d8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("e8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("f8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("g8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("h8", [-1, 0, 8, 0, 0, 0, 7, 0]);
    design.addPosition("a7", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h7", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a6", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h6", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a5", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h5", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a4", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h4", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a3", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h3", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a2", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h2", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a1", [0, 1, 0, -7, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("h1", [-1, 0, 0, 0, -8, 0, 0, -9]);

    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("promotion", 2, [56, 57, 58, 59, 60, 61, 62, 63]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
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
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	1);	// Fers
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PROMOTE,	1);	// Fers
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Shah", 0, 1000);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);

    design.addPiece("Fers", 1, 4);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);

    design.addPiece("Rokh", 2, 20);
    design.addMove(2, 1, [4, 4], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 1, [1, 1], 0);

    design.addPiece("Alfil", 3, 3);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [5, 5], 0);

    design.addPiece("Asb", 4, 8);
    design.addMove(4, 2, [4, 7], 0);
    design.addMove(4, 2, [4, 3], 0);
    design.addMove(4, 2, [2, 6], 0);
    design.addMove(4, 2, [2, 5], 0);
    design.addMove(4, 2, [0, 7], 0);
    design.addMove(4, 2, [0, 6], 0);
    design.addMove(4, 2, [1, 3], 0);
    design.addMove(4, 2, [1, 5], 0);

    design.addPiece("Sarbaz", 5, 2);
    design.addMove(5, 3, [4], 0);
    design.addMove(5, 4, [7], 0);
    design.addMove(5, 4, [3], 0);

    design.setup("White", "Sarbaz", 40);
    design.setup("White", "Sarbaz", 49);
    design.setup("White", "Sarbaz", 42);
    design.setup("White", "Sarbaz", 35);
    design.setup("White", "Sarbaz", 36);
    design.setup("White", "Sarbaz", 45);
    design.setup("White", "Sarbaz", 46);
    design.setup("White", "Sarbaz", 55);
    design.setup("White", "Rokh", 56);
    design.setup("White", "Rokh", 63);
    design.setup("White", "Asb", 51);
    design.setup("White", "Asb", 52);
    design.setup("White", "Alfil", 58);
    design.setup("White", "Alfil", 61);
    design.setup("White", "Fers", 44);
    design.setup("White", "Shah", 59);

    design.setupSelector(12);

    design.setup("Black", "Sarbaz", 8, 1);
    design.setup("Black", "Sarbaz", 17, 1);
    design.setup("Black", "Sarbaz", 18, 1);
    design.setup("Black", "Sarbaz", 27, 1);
    design.setup("Black", "Sarbaz", 28, 1);
    design.setup("Black", "Sarbaz", 21, 1);
    design.setup("Black", "Sarbaz", 14, 1);
    design.setup("Black", "Sarbaz", 23, 1);
    design.setup("Black", "Rokh", 0, 1);
    design.setup("Black", "Rokh", 7, 1);
    design.setup("Black", "Asb", 11, 1);
    design.setup("Black", "Asb", 12, 1);
    design.setup("Black", "Alfil", 2, 1);
    design.setup("Black", "Alfil", 5, 1);
    design.setup("Black", "Fers", 19, 1);
    design.setup("Black", "Shah", 4, 1);

    design.setup("Black", "Sarbaz", 8, 2);
    design.setup("Black", "Sarbaz", 17, 2);
    design.setup("Black", "Sarbaz", 26, 2);
    design.setup("Black", "Sarbaz", 19, 2);
    design.setup("Black", "Sarbaz", 20, 2);
    design.setup("Black", "Sarbaz", 29, 2);
    design.setup("Black", "Sarbaz", 22, 2);
    design.setup("Black", "Sarbaz", 15, 2);
    design.setup("Black", "Rokh", 1, 2);
    design.setup("Black", "Rokh", 6, 2);
    design.setup("Black", "Asb", 18, 2);
    design.setup("Black", "Asb", 21, 2);
    design.setup("Black", "Alfil", 2, 2);
    design.setup("Black", "Alfil", 5, 2);
    design.setup("Black", "Fers", 4, 2);
    design.setup("Black", "Shah", 3, 2);

    design.setup("Black", "Sarbaz", 8, 3);
    design.setup("Black", "Sarbaz", 25, 3);
    design.setup("Black", "Sarbaz", 34, 3);
    design.setup("Black", "Sarbaz", 19, 3);
    design.setup("Black", "Sarbaz", 28, 3);
    design.setup("Black", "Sarbaz", 21, 3);
    design.setup("Black", "Sarbaz", 22, 3);
    design.setup("Black", "Sarbaz", 23, 3);
    design.setup("Black", "Rokh", 1, 3);
    design.setup("Black", "Rokh", 6, 3);
    design.setup("Black", "Asb", 18, 3);
    design.setup("Black", "Asb", 12, 3);
    design.setup("Black", "Alfil", 2, 3);
    design.setup("Black", "Alfil", 5, 3);
    design.setup("Black", "Fers", 20, 3);
    design.setup("Black", "Shah", 3, 3);

    design.setup("Black", "Sarbaz", 8, 4);
    design.setup("Black", "Sarbaz", 25, 4);
    design.setup("Black", "Sarbaz", 18, 4);
    design.setup("Black", "Sarbaz", 19, 4);
    design.setup("Black", "Sarbaz", 20, 4);
    design.setup("Black", "Sarbaz", 21, 4);
    design.setup("Black", "Sarbaz", 22, 4);
    design.setup("Black", "Sarbaz", 23, 4);
    design.setup("Black", "Rokh", 1, 4);
    design.setup("Black", "Rokh", 10, 4);
    design.setup("Black", "Asb", 11, 4);
    design.setup("Black", "Asb", 6, 4);
    design.setup("Black", "Alfil", 2, 4);
    design.setup("Black", "Alfil", 5, 4);
    design.setup("Black", "Fers", 4, 4);
    design.setup("Black", "Shah", 3, 4);

    design.setup("Black", "Sarbaz", 24, 5);
    design.setup("Black", "Sarbaz", 17, 5);
    design.setup("Black", "Sarbaz", 18, 5);
    design.setup("Black", "Sarbaz", 27, 5);
    design.setup("Black", "Sarbaz", 28, 5);
    design.setup("Black", "Sarbaz", 21, 5);
    design.setup("Black", "Sarbaz", 22, 5);
    design.setup("Black", "Sarbaz", 31, 5);
    design.setup("Black", "Rokh", 1, 5);
    design.setup("Black", "Rokh", 6, 5);
    design.setup("Black", "Asb", 11, 5);
    design.setup("Black", "Asb", 12, 5);
    design.setup("Black", "Alfil", 19, 5);
    design.setup("Black", "Alfil", 20, 5);
    design.setup("Black", "Fers", 10, 5);
    design.setup("Black", "Shah", 13, 5);

    design.setup("Black", "Sarbaz", 24, 6);
    design.setup("Black", "Sarbaz", 17, 6);
    design.setup("Black", "Sarbaz", 18, 6);
    design.setup("Black", "Sarbaz", 19, 6);
    design.setup("Black", "Sarbaz", 28, 6);
    design.setup("Black", "Sarbaz", 37, 6);
    design.setup("Black", "Sarbaz", 14, 6);
    design.setup("Black", "Sarbaz", 31, 6);
    design.setup("Black", "Rokh", 1, 6);
    design.setup("Black", "Rokh", 2, 6);
    design.setup("Black", "Asb", 11, 6);
    design.setup("Black", "Asb", 21, 6);
    design.setup("Black", "Alfil", 20, 6);
    design.setup("Black", "Alfil", 23, 6);
    design.setup("Black", "Fers", 5, 6);
    design.setup("Black", "Shah", 6, 6);

    design.setup("Black", "Sarbaz", 24, 7);
    design.setup("Black", "Sarbaz", 17, 7);
    design.setup("Black", "Sarbaz", 18, 7);
    design.setup("Black", "Sarbaz", 19, 7);
    design.setup("Black", "Sarbaz", 28, 7);
    design.setup("Black", "Sarbaz", 37, 7);
    design.setup("Black", "Sarbaz", 30, 7);
    design.setup("Black", "Rokh", 14, 7);
    design.setup("Black", "Rokh", 7, 7);
    design.setup("Black", "Asb", 11, 7);
    design.setup("Black", "Asb", 22, 7);
    design.setup("Black", "Alfil", 20, 7);
    design.setup("Black", "Alfil", 23, 7);
    design.setup("Black", "Fers", 21, 7);
    design.setup("Black", "Shah", 13, 7);

    design.setup("Black", "Sarbaz", 24, 8);
    design.setup("Black", "Sarbaz", 17, 8);
    design.setup("Black", "Sarbaz", 26, 8);
    design.setup("Black", "Sarbaz", 11, 8);
    design.setup("Black", "Sarbaz", 12, 8);
    design.setup("Black", "Sarbaz", 29, 8);
    design.setup("Black", "Sarbaz", 22, 8);
    design.setup("Black", "Sarbaz", 31, 8);
    design.setup("Black", "Rokh", 2, 8);
    design.setup("Black", "Rokh", 7, 8);
    design.setup("Black", "Asb", 18, 8);
    design.setup("Black", "Asb", 21, 8);
    design.setup("Black", "Alfil", 16, 8);
    design.setup("Black", "Alfil", 19, 8);
    design.setup("Black", "Fers", 20, 8);
    design.setup("Black", "Shah", 13, 8);

    design.setup("Black", "Sarbaz", 16, 9);
    design.setup("Black", "Sarbaz", 17, 9);
    design.setup("Black", "Sarbaz", 18, 9);
    design.setup("Black", "Sarbaz", 19, 9);
    design.setup("Black", "Sarbaz", 20, 9);
    design.setup("Black", "Sarbaz", 21, 9);
    design.setup("Black", "Sarbaz", 30, 9);
    design.setup("Black", "Sarbaz", 23, 9);
    design.setup("Black", "Rokh", 13, 9);
    design.setup("Black", "Rokh", 6, 9);
    design.setup("Black", "Asb", 11, 9);
    design.setup("Black", "Asb", 12, 9);
    design.setup("Black", "Alfil", 2, 9);
    design.setup("Black", "Alfil", 5, 9);
    design.setup("Black", "Fers", 4, 9);
    design.setup("Black", "Shah", 3, 9);

    design.setup("Black", "Sarbaz", 16, 10);
    design.setup("Black", "Sarbaz", 25, 10);
    design.setup("Black", "Sarbaz", 18, 10);
    design.setup("Black", "Sarbaz", 27, 10);
    design.setup("Black", "Sarbaz", 28, 10);
    design.setup("Black", "Sarbaz", 21, 10);
    design.setup("Black", "Sarbaz", 22, 10);
    design.setup("Black", "Sarbaz", 23, 10);
    design.setup("Black", "Rokh", 1, 10);
    design.setup("Black", "Rokh", 7, 10);
    design.setup("Black", "Asb", 10, 10);
    design.setup("Black", "Asb", 13, 10);
    design.setup("Black", "Alfil", 2, 10);
    design.setup("Black", "Alfil", 19, 10);
    design.setup("Black", "Fers", 20, 10);
    design.setup("Black", "Shah", 3, 10);

    design.setup("Black", "Sarbaz", 16, 11);
    design.setup("Black", "Sarbaz", 17, 11);
    design.setup("Black", "Sarbaz", 18, 11);
    design.setup("Black", "Sarbaz", 27, 11);
    design.setup("Black", "Sarbaz", 28, 11);
    design.setup("Black", "Sarbaz", 21, 11);
    design.setup("Black", "Sarbaz", 22, 11);
    design.setup("Black", "Sarbaz", 23, 11);
    design.setup("Black", "Rokh", 10, 11);
    design.setup("Black", "Rokh", 13, 11);
    design.setup("Black", "Asb", 11, 11);
    design.setup("Black", "Asb", 12, 11);
    design.setup("Black", "Alfil", 2, 11);
    design.setup("Black", "Alfil", 19, 11);
    design.setup("Black", "Fers", 20, 11);
    design.setup("Black", "Shah", 3, 11);

    design.setup("Black", "Sarbaz", 8, 12);
    design.setup("Black", "Sarbaz", 25, 12);
    design.setup("Black", "Sarbaz", 26, 12);
    design.setup("Black", "Sarbaz", 19, 12);
    design.setup("Black", "Sarbaz", 20, 12);
    design.setup("Black", "Sarbaz", 21, 12);
    design.setup("Black", "Sarbaz", 22, 12);
    design.setup("Black", "Sarbaz", 23, 12);
    design.setup("Black", "Rokh", 1, 12);
    design.setup("Black", "Rokh", 10, 12);
    design.setup("Black", "Asb", 11, 12);
    design.setup("Black", "Asb", 12, 12);
    design.setup("Black", "Alfil", 2, 12);
    design.setup("Black", "Alfil", 5, 12);
    design.setup("Black", "Fers", 18, 12);
    design.setup("Black", "Shah", 3, 12);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteShah", "White Shah");
    view.defPiece("BlackShah", "Black Shah");
    view.defPiece("WhiteFers", "White Fers");
    view.defPiece("BlackFers", "Black Fers");
    view.defPiece("WhiteRokh", "White Rokh");
    view.defPiece("BlackRokh", "Black Rokh");
    view.defPiece("WhiteAlfil", "White Alfil");
    view.defPiece("BlackAlfil", "Black Alfil");
    view.defPiece("WhiteAsb", "White Asb");
    view.defPiece("BlackAsb", "Black Asb");
    view.defPiece("WhiteSarbaz", "White Sarbaz");
    view.defPiece("BlackSarbaz", "Black Sarbaz");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
}
