Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
Dagaz.View.TARGET_SZ         =  0.5;
Dagaz.Controller.SHORT_LIST  =  false;
Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("gorogoro-shogi-extension", "true");
    design.checkVersion("gorogoro-shogi-promotion", "forced");

    design.addDirection("nx"); // 0
    design.addDirection("n");  // 1
    design.addDirection("s");  // 2
    design.addDirection("w");  // 3
    design.addDirection("e");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7
    design.addDirection("se"); // 8
    design.addDirection("th"); // 9
    design.addDirection("tn"); // 10

    design.addPlayer("Green", [0, 2, 1, 4, 3, 6, 5, 8, 7, 9, 10]);
    design.addPlayer("Red", [0, 2, 1, 3, 4, 6, 5, 8, 7, 10, 9]);

    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1]);
    design.addPosition("a6", [46, 0, 9, 0, 1, 0, 0, 0, 10, 50, -1]);
    design.addPosition("b6", [46, 0, 9, -1, 1, 0, 8, 0, 10, 49, -2]);
    design.addPosition("c6", [46, 0, 9, -1, 1, 0, 8, 0, 10, 48, -3]);
    design.addPosition("d6", [46, 0, 9, -1, 1, 0, 8, 0, 10, 47, -4]);
    design.addPosition("e6", [46, 0, 9, -1, 0, 0, 8, 0, 0, 46, -5]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
    design.addPosition("T6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 8]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 10]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1]);
    design.addPosition("a5", [-9, -9, 9, 0, 1, -8, 0, 0, 10, 41, -10]);
    design.addPosition("b5", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 40, -11]);
    design.addPosition("c5", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 39, -12]);
    design.addPosition("d5", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 38, -13]);
    design.addPosition("e5", [-9, -9, 9, -1, 0, 0, 8, -10, 0, 37, -14]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
    design.addPosition("T5", [0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 8]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 10]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1]);
    design.addPosition("a4", [-9, -9, 9, 0, 1, -8, 0, 0, 10, 32, -19]);
    design.addPosition("b4", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 31, -20]);
    design.addPosition("c4", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 30, -21]);
    design.addPosition("d4", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 29, -22]);
    design.addPosition("e4", [-9, -9, 9, -1, 0, 0, 8, -10, 0, 28, -23]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
    design.addPosition("T4", [0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 8]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 10]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1]);
    design.addPosition("a3", [-9, -9, 9, 0, 1, -8, 0, 0, 10, 23, -28]);
    design.addPosition("b3", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 22, -29]);
    design.addPosition("c3", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 21, -30]);
    design.addPosition("d3", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 20, -31]);
    design.addPosition("e3", [-9, -9, 9, -1, 0, 0, 8, -10, 0, 19, -32]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
    design.addPosition("T3", [0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 8]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, 10]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1]);
    design.addPosition("a2", [-9, -9, 9, 0, 1, -8, 0, 0, 10, 14, -37]);
    design.addPosition("b2", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 13, -38]);
    design.addPosition("c2", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 12, -39]);
    design.addPosition("d2", [-9, -9, 9, -1, 1, -8, 8, -10, 10, 11, -40]);
    design.addPosition("e2", [-9, -9, 9, -1, 0, 0, 8, -10, 0, 10, -41]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 8]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -8, -38]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1]);
    design.addPosition("a1", [-9, -9, 0, 0, 1, -8, 0, 0, 0, 5, -46]);
    design.addPosition("b1", [-9, -9, 0, -1, 1, -8, 0, -10, 0, 4, -47]);
    design.addPosition("c1", [-9, -9, 0, -1, 1, -8, 0, -10, 0, 3, -48]);
    design.addPosition("d1", [-9, -9, 0, -1, 1, -8, 0, -10, 0, 2, -49]);
    design.addPosition("e1", [-9, -9, 0, -1, 0, 0, 0, -10, 0, 1, -50]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -10, 0]);
    design.addPosition("W1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 2, [47, 48, 49, 50, 51, 38, 39, 40, 41, 42, 29, 30, 31, 32, 33, 20, 21, 22, 23, 24, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6]);
    design.addZone("board-zone", 1, [47, 48, 49, 50, 51, 38, 39, 40, 41, 42, 29, 30, 31, 32, 33, 20, 21, 22, 23, 24, 11, 12, 13, 14, 15, 2, 3, 4, 5, 6]);
    design.addZone("promotion-zone", 2, [47, 48, 49, 50, 51, 38, 39, 40, 41, 42]);
    design.addZone("promotion-zone", 1, [11, 12, 13, 14, 15, 2, 3, 4, 5, 6]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	0);	// Lion
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	48);
    design.addCommand(0, ZRF.LITERAL,	1);	// Chick
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	2);	// ChickP
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.SET_FLAG,	0);	// is-pawn?
    design.addCommand(0, ZRF.LITERAL,	3);	// Cat
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	4);	// CatP
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.SET_FLAG,	1);	// is-cat?
    design.addCommand(0, ZRF.LITERAL,	5);	// Dog
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.SET_FLAG,	2);	// is-dog?
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-4);
    design.addCommand(0, ZRF.FLAG,	0);	// is-pawn?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	1);	// Chick
    design.addCommand(0, ZRF.FUNCTION,	11);	// create
    design.addCommand(0, ZRF.FLAG,	1);	// is-cat?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	3);	// Cat
    design.addCommand(0, ZRF.FUNCTION,	11);	// create
    design.addCommand(0, ZRF.FLAG,	2);	// is-dog?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	5);	// Dog
    design.addCommand(0, ZRF.FUNCTION,	11);	// create
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
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
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Lion", 0, 100);
    design.addMove(0, 0, [1, 9, 9], 0);
    design.addMove(0, 0, [2, 9, 9], 0);
    design.addMove(0, 0, [3, 9, 9], 0);
    design.addMove(0, 0, [4, 9, 9], 0);
    design.addMove(0, 0, [7, 9, 9], 0);
    design.addMove(0, 0, [6, 9, 9], 0);
    design.addMove(0, 0, [5, 9, 9], 0);
    design.addMove(0, 0, [8, 9, 9], 0);

    design.addPiece("Chick", 1, 1);
    design.addMove(1, 0, [1, 9, 9], 0);
    design.addMove(1, 1, [47, 0], 0);

    design.addPiece("ChickP", 2, 1);
    design.addMove(2, 0, [1, 9, 9], 0);
    design.addMove(2, 0, [2, 9, 9], 0);
    design.addMove(2, 0, [3, 9, 9], 0);
    design.addMove(2, 0, [4, 9, 9], 0);
    design.addMove(2, 0, [7, 9, 9], 0);
    design.addMove(2, 0, [5, 9, 9], 0);

    design.addPiece("Cat", 3, 4);
    design.addMove(3, 0, [1, 9, 9], 0);
    design.addMove(3, 0, [7, 9, 9], 0);
    design.addMove(3, 0, [5, 9, 9], 0);
    design.addMove(3, 0, [6, 9, 9], 0);
    design.addMove(3, 0, [8, 9, 9], 0);
    design.addMove(3, 1, [47, 0], 0);

    design.addPiece("CatP", 4, 4);
    design.addMove(4, 0, [1, 9, 9], 0);
    design.addMove(4, 0, [2, 9, 9], 0);
    design.addMove(4, 0, [3, 9, 9], 0);
    design.addMove(4, 0, [4, 9, 9], 0);
    design.addMove(4, 0, [7, 9, 9], 0);
    design.addMove(4, 0, [5, 9, 9], 0);

    design.addPiece("Dog", 5, 5);
    design.addMove(5, 0, [1, 9, 9], 0);
    design.addMove(5, 0, [2, 9, 9], 0);
    design.addMove(5, 0, [3, 9, 9], 0);
    design.addMove(5, 0, [4, 9, 9], 0);
    design.addMove(5, 0, [7, 9, 9], 0);
    design.addMove(5, 0, [5, 9, 9], 0);
    design.addMove(5, 1, [47, 0], 0);

    design.setup("Green", "Lion", 49);
    design.setup("Green", "Chick", 30);
    design.setup("Green", "Chick", 31);
    design.setup("Green", "Chick", 32);
    design.setup("Green", "Dog", 48);
    design.setup("Green", "Dog", 50);
    design.setup("Green", "Cat", 47);
    design.setup("Green", "Cat", 51);
    design.setup("Red", "Lion", 4);
    design.setup("Red", "Chick", 21);
    design.setup("Red", "Chick", 22);
    design.setup("Red", "Chick", 23);
    design.setup("Red", "Dog", 3);
    design.setup("Red", "Dog", 5);
    design.setup("Red", "Cat", 2);
    design.setup("Red", "Cat", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(473, 565, 1, -10, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPiecePlatform(0, 1, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "GreenLion");
    view.defPiecePlatform(0, 2, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "RedLion");
    view.defPiecePlatform(1, 1, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "GreenChick");
    view.defPiecePlatform(1, 2, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "RedChick");
    view.defPiecePlatform(2, 1, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "GreenChickP");
    view.defPiecePlatform(2, 2, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "RedChickP");
    view.defPiecePlatform(3, 1, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "GreenCat");
    view.defPiecePlatform(3, 2, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "RedCat");
    view.defPiecePlatform(4, 1, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "GreenCatP");
    view.defPiecePlatform(4, 2, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "RedCatP");
    view.defPiecePlatform(5, 1, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "GreenDog");
    view.defPiecePlatform(5, 2, 88, 88, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "RedDog");
 
    view.setCamera(0, 0, 0, -109, 215, 155);

    view.defControl("InfoControl", "Madoka Kitao", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'gorogoro-shogi.htm' : 'gorogoro-shogi-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'gorogoro-shogi-3d-board.htm' : 'gorogoro-shogi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("X6", -376, -235, 94, 94, 0);
    view.defPosition("Y6", -282, -235, 94, 94, 0);
    view.defPosition("a6", -188, -235, 94, 94, 0);
    view.defPosition("b6", -94, -235, 94, 94, 0);
    view.defPosition("c6", 0, -235, 94, 94, 0);
    view.defPosition("d6", 94, -235, 94, 94, 0);
    view.defPosition("e6", 188, -235, 94, 94, 0);
    view.defPosition("Z6", 282, -235, 94, 94, 0);
    view.defPosition("T6", 376, -235, 94, 94, 0);
    view.defPosition("X5", -376, -141, 94, 94, 0);
    view.defPosition("Y5", -282, -141, 94, 94, 0);
    view.defPosition("a5", -188, -141, 94, 94, 0);
    view.defPosition("b5", -94, -141, 94, 94, 0);
    view.defPosition("c5", 0, -141, 94, 94, 0);
    view.defPosition("d5", 94, -141, 94, 94, 0);
    view.defPosition("e5", 188, -141, 94, 94, 0);
    view.defPosition("Z5", 282, -141, 94, 94, 0);
    view.defPosition("T5", 376, -141, 94, 94, 0);
    view.defPosition("X4", -376, -47, 94, 94, 0);
    view.defPosition("Y4", -282, -47, 94, 94, 0);
    view.defPosition("a4", -188, -47, 94, 94, 0);
    view.defPosition("b4", -94, -47, 94, 94, 0);
    view.defPosition("c4", 0, -47, 94, 94, 0);
    view.defPosition("d4", 94, -47, 94, 94, 0);
    view.defPosition("e4", 188, -47, 94, 94, 0);
    view.defPosition("Z4", 282, -47, 94, 94, 0);
    view.defPosition("T4", 376, -47, 94, 94, 0);
    view.defPosition("X3", -376, 47, 94, 94, 0);
    view.defPosition("Y3", -282, 47, 94, 94, 0);
    view.defPosition("a3", -188, 47, 94, 94, 0);
    view.defPosition("b3", -94, 47, 94, 94, 0);
    view.defPosition("c3", 0, 47, 94, 94, 0);
    view.defPosition("d3", 94, 47, 94, 94, 0);
    view.defPosition("e3", 188, 47, 94, 94, 0);
    view.defPosition("Z3", 282, 47, 94, 94, 0);
    view.defPosition("T3", 376, 47, 94, 94, 0);
    view.defPosition("X2", -376, 141, 94, 94, 0);
    view.defPosition("Y2", -282, 141, 94, 94, 0);
    view.defPosition("a2", -188, 141, 94, 94, 0);
    view.defPosition("b2", -94, 141, 94, 94, 0);
    view.defPosition("c2", 0, 141, 94, 94, 0);
    view.defPosition("d2", 94, 141, 94, 94, 0);
    view.defPosition("e2", 188, 141, 94, 94, 0);
    view.defPosition("Z2", 282, 141, 94, 94, 0);
    view.defPosition("T2", 376, 141, 94, 94, 0);
    view.defPosition("X1", -376, 235, 94, 94, 0);
    view.defPosition("Y1", -282, 235, 94, 94, 0);
    view.defPosition("a1", -188, 235, 94, 94, 0);
    view.defPosition("b1", -94, 235, 94, 94, 0);
    view.defPosition("c1", 0, 235, 94, 94, 0);
    view.defPosition("d1", 94, 235, 94, 94, 0);
    view.defPosition("e1", 188, 235, 94, 94, 0);
    view.defPosition("Z1", 282, 235, 94, 94, 0);
    view.defPosition("T1", 376, 235, 94, 94, 0);
}
