Dagaz.Controller.randomized  = true;
Dagaz.View.CLEAR_KO = true;

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
    design.checkVersion("pass-partial", "false");
    design.checkVersion("detect-loops", "true");
    design.checkVersion("advisor-wait", "15");

    design.addDirection("next"); // 0
    design.addDirection("e");    // 1
    design.addDirection("w");    // 2
    design.addDirection("n");    // 3
    design.addDirection("s");    // 4
    design.addDirection("sr");   // 5
    design.addDirection("nr");   // 6

    design.addPlayer("White", [0, 2, 1, 4, 3, 5, 6]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 6, 5]);

    design.addTurn(1, [4]); // 0
    design.addTurn(1, [4]); // 1
    design.addTurn(1, [4]); // 2
    design.addTurn(1, [4]); // 3
    design.addTurn(1, [4]); // 4
    design.addTurn(1, [4]); // 5
    design.addTurn(2, [4]); // 6
    design.addTurn(2, [4]); // 7
    design.addTurn(2, [4]); // 8
    design.addTurn(2, [4]); // 9
    design.addTurn(2, [4]); // 10
    design.addTurn(2, [4]); // 11
    design.repeatMark();
    design.addTurn(1); // 12
    design.addTurn(2); // 13

    design.addPosition("a7", [1, 1, 0, 0, 0, 1, 0]);
    design.addPosition("b7", [1, 1, -1, 0, 0, 1, 0]);
    design.addPosition("c7", [1, 1, -1, 0, 0, 1, 0]);
    design.addPosition("d7", [1, 1, -1, 0, 0, 1, 0]);
    design.addPosition("e7", [1, 1, -1, 0, 0, 1, 0]);
    design.addPosition("f7", [0, 0, -1, 0, 0, 0, 0]);
    design.addPosition("a6", [1, 1, 0, 0, 6, -6, 36]);
    design.addPosition("b6", [1, 1, -1, 0, 6, -7, 35]);
    design.addPosition("c6", [1, 1, -1, 0, 6, -8, 34]);
    design.addPosition("d6", [1, 1, -1, 0, 6, -9, 33]);
    design.addPosition("e6", [1, 1, -1, 0, 6, -10, 32]);
    design.addPosition("f6", [1, 0, -1, 0, 6, -11, 31]);
    design.addPosition("a5", [1, 1, 0, -6, 6, -12, 30]);
    design.addPosition("b5", [1, 1, -1, -6, 6, -13, 29]);
    design.addPosition("c5", [1, 1, -1, -6, 6, -14, 28]);
    design.addPosition("d5", [1, 1, -1, -6, 6, -15, 27]);
    design.addPosition("e5", [1, 1, -1, -6, 6, -16, 26]);
    design.addPosition("f5", [1, 0, -1, -6, 6, -17, 25]);
    design.addPosition("a4", [1, 1, 0, -6, 6, -18, 24]);
    design.addPosition("b4", [1, 1, -1, -6, 6, -19, 23]);
    design.addPosition("c4", [1, 1, -1, -6, 6, -20, 22]);
    design.addPosition("d4", [1, 1, -1, -6, 6, -21, 21]);
    design.addPosition("e4", [1, 1, -1, -6, 6, -22, 20]);
    design.addPosition("f4", [1, 0, -1, -6, 6, -23, 19]);
    design.addPosition("a3", [1, 1, 0, -6, 6, -24, 18]);
    design.addPosition("b3", [1, 1, -1, -6, 6, -25, 17]);
    design.addPosition("c3", [1, 1, -1, -6, 6, -26, 16]);
    design.addPosition("d3", [1, 1, -1, -6, 6, -27, 15]);
    design.addPosition("e3", [1, 1, -1, -6, 6, -28, 14]);
    design.addPosition("f3", [1, 0, -1, -6, 6, -29, 13]);
    design.addPosition("a2", [1, 1, 0, -6, 6, -30, 12]);
    design.addPosition("b2", [1, 1, -1, -6, 6, -31, 11]);
    design.addPosition("c2", [1, 1, -1, -6, 6, -32, 10]);
    design.addPosition("d2", [1, 1, -1, -6, 6, -33, 9]);
    design.addPosition("e2", [1, 1, -1, -6, 6, -34, 8]);
    design.addPosition("f2", [1, 0, -1, -6, 6, -35, 7]);
    design.addPosition("a1", [1, 1, 0, -6, 0, -36, 6]);
    design.addPosition("b1", [1, 1, -1, -6, 0, -37, 5]);
    design.addPosition("c1", [1, 1, -1, -6, 0, -38, 4]);
    design.addPosition("d1", [1, 1, -1, -6, 0, -39, 3]);
    design.addPosition("e1", [1, 1, -1, -6, 0, -40, 2]);
    design.addPosition("f1", [0, 0, -1, -6, 0, -41, 1]);
    design.addPosition("a0", [1, 1, 0, 0, 0, 0, 1]);
    design.addPosition("b0", [1, 1, -1, 0, 0, 0, 1]);
    design.addPosition("c0", [1, 1, -1, 0, 0, 0, 1]);
    design.addPosition("d0", [1, 1, -1, 0, 0, 0, 1]);
    design.addPosition("e0", [1, 1, -1, 0, 0, 0, 1]);
    design.addPosition("f0", [0, 0, -1, 0, 0, 0, 0]);

    design.setupSelector(2);

    design.addZone("one", 1, [36, 12, 31, 19, 26, 14, 33, 9, 40, 28, 16, 23], 1);
    design.addZone("one", 2, [36, 12, 31, 19, 26, 14, 33, 9, 40, 28, 16, 23], 1);
    design.addZone("two", 1, [30, 24, 6, 7, 38, 20, 39, 21, 10, 35, 29, 11], 1);
    design.addZone("two", 2, [30, 24, 6, 7, 38, 20, 39, 21, 10, 35, 29, 11], 1);
    design.addZone("three", 1, [18, 37, 25, 13, 32, 8, 27, 15, 34, 22, 41, 17], 1);
    design.addZone("three", 2, [18, 37, 25, 13, 32, 8, 27, 15, 34, 22, 41, 17], 1);

    design.addZone("one", 1, [30, 6, 25, 13, 32, 20, 39, 15, 34, 22, 10, 29], 2);
    design.addZone("one", 2, [30, 6, 25, 13, 32, 20, 39, 15, 34, 22, 10, 29], 2);
    design.addZone("two", 1, [24, 18, 37, 7, 38, 8, 27, 21, 41, 35, 17, 11], 2);
    design.addZone("two", 2, [24, 18, 37, 7, 38, 8, 27, 21, 41, 35, 17, 11], 2);
    design.addZone("three", 1, [36, 12, 31, 19, 26, 14, 33, 9, 40, 28, 16, 23], 2);
    design.addZone("three", 2, [36, 12, 31, 19, 26, 14, 33, 9, 40, 28, 16, 23], 2);

    design.addZone("home", 1, [36, 37, 38, 39, 40, 41, 30, 31, 32, 33, 34, 35]);
    design.addZone("home", 2, [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]);

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
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	0);	// step-1-mode
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// step-2-mode
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// one
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.IN_ZONE,	1);	// two
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.IN_ZONE,	2);	// three
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	21);	// position
    design.addCommand(3, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	17);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.IN_ZONE,	3);	// home
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-18);
    design.addCommand(3, ZRF.IN_ZONE,	3);	// home
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// one
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.IN_ZONE,	1);	// two
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.IN_ZONE,	2);	// three
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	21);	// position
    design.addCommand(4, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	18);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.IN_ZONE,	3);	// home
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-19);
    design.addCommand(4, ZRF.IN_ZONE,	3);	// home
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Ronin", 0, 2);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [1], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [4], 1);
    design.addMove(0, 2, [3], 2);
    design.addMove(0, 2, [1], 2);
    design.addMove(0, 2, [2], 2);
    design.addMove(0, 2, [4], 2);
    design.addMove(0, 3, [6, 0], 3);
    design.addMove(0, 4, [6, 0], 4);

    design.addPiece("RoninMana", 1, 2);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 1, [3], 1);
    design.addMove(1, 1, [1], 1);
    design.addMove(1, 1, [2], 1);
    design.addMove(1, 1, [4], 1);
    design.addMove(1, 2, [3], 2);
    design.addMove(1, 2, [1], 2);
    design.addMove(1, 2, [2], 2);
    design.addMove(1, 2, [4], 2);
    design.addMove(1, 3, [6, 0], 3);
    design.addMove(1, 4, [6, 0], 4);

    design.addPiece("Damyo", 2, 1000);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [1], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [3], 1);
    design.addMove(2, 1, [1], 1);
    design.addMove(2, 1, [2], 1);
    design.addMove(2, 1, [4], 1);
    design.addMove(2, 2, [3], 2);
    design.addMove(2, 2, [1], 2);
    design.addMove(2, 2, [2], 2);
    design.addMove(2, 2, [4], 2);
    design.addMove(2, 3, [6, 0], 3);
    design.addMove(2, 4, [6, 0], 4);

    design.addPiece("DamyoMana", 3, 1000);
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 1, [3], 1);
    design.addMove(3, 1, [1], 1);
    design.addMove(3, 1, [2], 1);
    design.addMove(3, 1, [4], 1);
    design.addMove(3, 2, [3], 2);
    design.addMove(3, 2, [1], 2);
    design.addMove(3, 2, [2], 2);
    design.addMove(3, 2, [4], 2);
    design.addMove(3, 3, [6, 0], 3);
    design.addMove(3, 4, [6, 0], 4);

    design.setup("White", "Ronin", 42);
    design.setup("White", "Ronin", 43);
    design.setup("White", "Ronin", 44);
    design.setup("White", "Ronin", 45);
    design.setup("White", "Ronin", 46);
    design.setup("White", "Damyo", 47);
    design.setup("Black", "Ronin", 0);
    design.setup("Black", "Ronin", 1);
    design.setup("Black", "Ronin", 2);
    design.setup("Black", "Ronin", 3);
    design.setup("Black", "Ronin", 4);
    design.setup("Black", "Damyo", 5);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board_SW", 0, 0, 1);
    view.defBoard("Board_SE", 0, 0, 2);
    view.defPiece("WhiteRonin", "White Ronin");
    view.defPiece("BlackRonin", "Black Ronin");
    view.defPiece("WhiteRoninMana", "White RoninMana");
    view.defPiece("BlackRoninMana", "Black RoninMana");
    view.defPiece("WhiteDamyo", "White Damyo");
    view.defPiece("BlackDamyo", "Black Damyo");
    view.defPiece("WhiteDamyoMana", "White DamyoMana");
    view.defPiece("BlackDamyoMana", "Black DamyoMana");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a7", 24, 23, 50, 50);
    view.defPosition("b7", 74, 23, 50, 50);
    view.defPosition("c7", 124, 23, 50, 50);
    view.defPosition("d7", 174, 23, 50, 50);
    view.defPosition("e7", 224, 23, 50, 50);
    view.defPosition("f7", 274, 23, 50, 50);
    view.defPosition("a6", 24, 73, 50, 50);
    view.defPosition("b6", 74, 73, 50, 50);
    view.defPosition("c6", 124, 73, 50, 50);
    view.defPosition("d6", 174, 73, 50, 50);
    view.defPosition("e6", 224, 73, 50, 50);
    view.defPosition("f6", 274, 73, 50, 50);
    view.defPosition("a5", 24, 123, 50, 50);
    view.defPosition("b5", 74, 123, 50, 50);
    view.defPosition("c5", 124, 123, 50, 50);
    view.defPosition("d5", 174, 123, 50, 50);
    view.defPosition("e5", 224, 123, 50, 50);
    view.defPosition("f5", 274, 123, 50, 50);
    view.defPosition("a4", 24, 173, 50, 50);
    view.defPosition("b4", 74, 173, 50, 50);
    view.defPosition("c4", 124, 173, 50, 50);
    view.defPosition("d4", 174, 173, 50, 50);
    view.defPosition("e4", 224, 173, 50, 50);
    view.defPosition("f4", 274, 173, 50, 50);
    view.defPosition("a3", 24, 223, 50, 50);
    view.defPosition("b3", 74, 223, 50, 50);
    view.defPosition("c3", 124, 223, 50, 50);
    view.defPosition("d3", 174, 223, 50, 50);
    view.defPosition("e3", 224, 223, 50, 50);
    view.defPosition("f3", 274, 223, 50, 50);
    view.defPosition("a2", 24, 273, 50, 50);
    view.defPosition("b2", 74, 273, 50, 50);
    view.defPosition("c2", 124, 273, 50, 50);
    view.defPosition("d2", 174, 273, 50, 50);
    view.defPosition("e2", 224, 273, 50, 50);
    view.defPosition("f2", 274, 273, 50, 50);
    view.defPosition("a1", 24, 323, 50, 50);
    view.defPosition("b1", 74, 323, 50, 50);
    view.defPosition("c1", 124, 323, 50, 50);
    view.defPosition("d1", 174, 323, 50, 50);
    view.defPosition("e1", 224, 323, 50, 50);
    view.defPosition("f1", 274, 323, 50, 50);
    view.defPosition("a0", 24, 373, 50, 50);
    view.defPosition("b0", 74, 373, 50, 50);
    view.defPosition("c0", 124, 373, 50, 50);
    view.defPosition("d0", 174, 373, 50, 50);
    view.defPosition("e0", 224, 373, 50, 50);
    view.defPosition("f0", 274, 373, 50, 50);
}
