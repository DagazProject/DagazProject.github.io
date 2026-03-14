Dagaz.View.TARGET_FLAT = true;

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
    design.checkVersion("jungle-extension", "strict");
    design.checkVersion("ko", "situation");
    design.checkVersion("advisor-wait", "15");

    design.addDirection("w"); // 0
    design.addDirection("e"); // 1
    design.addDirection("s"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Red", [1, 0, 3, 2]);
    design.addPlayer("Green", [0, 1, 2, 3]);

    design.addPosition("a9", [0, 1, 7, 0]);
    design.addPosition("b9", [-1, 1, 7, 0]);
    design.addPosition("c9", [-1, 1, 7, 0]);
    design.addPosition("d9", [-1, 1, 7, 0]);
    design.addPosition("e9", [-1, 1, 7, 0]);
    design.addPosition("f9", [-1, 1, 7, 0]);
    design.addPosition("g9", [-1, 0, 7, 0]);
    design.addPosition("a8", [0, 1, 7, -7]);
    design.addPosition("b8", [-1, 1, 7, -7]);
    design.addPosition("c8", [-1, 1, 7, -7]);
    design.addPosition("d8", [-1, 1, 7, -7]);
    design.addPosition("e8", [-1, 1, 7, -7]);
    design.addPosition("f8", [-1, 1, 7, -7]);
    design.addPosition("g8", [-1, 0, 7, -7]);
    design.addPosition("a7", [0, 1, 7, -7]);
    design.addPosition("b7", [-1, 1, 7, -7]);
    design.addPosition("c7", [-1, 1, 7, -7]);
    design.addPosition("d7", [-1, 1, 7, -7]);
    design.addPosition("e7", [-1, 1, 7, -7]);
    design.addPosition("f7", [-1, 1, 7, -7]);
    design.addPosition("g7", [-1, 0, 7, -7]);
    design.addPosition("a6", [0, 1, 7, -7]);
    design.addPosition("b6", [-1, 1, 7, -7]);
    design.addPosition("c6", [-1, 1, 7, -7]);
    design.addPosition("d6", [-1, 1, 7, -7]);
    design.addPosition("e6", [-1, 1, 7, -7]);
    design.addPosition("f6", [-1, 1, 7, -7]);
    design.addPosition("g6", [-1, 0, 7, -7]);
    design.addPosition("a5", [0, 1, 7, -7]);
    design.addPosition("b5", [-1, 1, 7, -7]);
    design.addPosition("c5", [-1, 1, 7, -7]);
    design.addPosition("d5", [-1, 1, 7, -7]);
    design.addPosition("e5", [-1, 1, 7, -7]);
    design.addPosition("f5", [-1, 1, 7, -7]);
    design.addPosition("g5", [-1, 0, 7, -7]);
    design.addPosition("a4", [0, 1, 7, -7]);
    design.addPosition("b4", [-1, 1, 7, -7]);
    design.addPosition("c4", [-1, 1, 7, -7]);
    design.addPosition("d4", [-1, 1, 7, -7]);
    design.addPosition("e4", [-1, 1, 7, -7]);
    design.addPosition("f4", [-1, 1, 7, -7]);
    design.addPosition("g4", [-1, 0, 7, -7]);
    design.addPosition("a3", [0, 1, 7, -7]);
    design.addPosition("b3", [-1, 1, 7, -7]);
    design.addPosition("c3", [-1, 1, 7, -7]);
    design.addPosition("d3", [-1, 1, 7, -7]);
    design.addPosition("e3", [-1, 1, 7, -7]);
    design.addPosition("f3", [-1, 1, 7, -7]);
    design.addPosition("g3", [-1, 0, 7, -7]);
    design.addPosition("a2", [0, 1, 7, -7]);
    design.addPosition("b2", [-1, 1, 7, -7]);
    design.addPosition("c2", [-1, 1, 7, -7]);
    design.addPosition("d2", [-1, 1, 7, -7]);
    design.addPosition("e2", [-1, 1, 7, -7]);
    design.addPosition("f2", [-1, 1, 7, -7]);
    design.addPosition("g2", [-1, 0, 7, -7]);
    design.addPosition("a1", [0, 1, 0, -7]);
    design.addPosition("b1", [-1, 1, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -7]);
    design.addPosition("f1", [-1, 1, 0, -7]);
    design.addPosition("g1", [-1, 0, 0, -7]);

    design.addZone("trap", 1, [2, 10, 4]);
    design.addZone("trap", 2, [58, 52, 60]);
    design.addZone("water", 1, [22, 29, 36, 23, 30, 37, 25, 32, 39, 26, 33, 40]);
    design.addZone("water", 2, [22, 29, 36, 23, 30, 37, 25, 32, 39, 26, 33, 40]);
    design.addZone("home", 1, [59]);
    design.addZone("home", 2, [3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	2);	// home
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// water
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	2);	// home
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.IN_ZONE,	1);	// water
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	1);	// water
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-7);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Rat", 0, 1000);
    design.addAttribute(0, 0, 1);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("Cat", 1, 800);
    design.addAttribute(1, 0, 2);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [1], 0);

    design.addPiece("Dog", 2, 900);
    design.addAttribute(2, 0, 3);
    design.addMove(2, 1, [3], 0);
    design.addMove(2, 1, [2], 0);
    design.addMove(2, 1, [0], 0);
    design.addMove(2, 1, [1], 0);

    design.addPiece("Fox", 3, 1000);
    design.addAttribute(3, 0, 4);
    design.addMove(3, 1, [3], 0);
    design.addMove(3, 1, [2], 0);
    design.addMove(3, 1, [0], 0);
    design.addMove(3, 1, [1], 0);

    design.addPiece("Panther", 4, 1100);
    design.addAttribute(4, 0, 5);
    design.addMove(4, 1, [3], 0);
    design.addMove(4, 1, [2], 0);
    design.addMove(4, 1, [0], 0);
    design.addMove(4, 1, [1], 0);
    design.addMove(4, 2, [0, 0], 0);
    design.addMove(4, 2, [1, 1], 0);

    design.addPiece("Tiger", 5, 1200);
    design.addAttribute(5, 0, 7);
    design.addMove(5, 1, [3], 0);
    design.addMove(5, 1, [2], 0);
    design.addMove(5, 1, [0], 0);
    design.addMove(5, 1, [1], 0);
    design.addMove(5, 2, [3, 3], 0);
    design.addMove(5, 2, [2, 2], 0);
    design.addMove(5, 2, [0, 0], 0);
    design.addMove(5, 2, [1, 1], 0);

    design.addPiece("Lion", 6, 1300);
    design.addAttribute(6, 0, 7);
    design.addMove(6, 1, [3], 0);
    design.addMove(6, 1, [2], 0);
    design.addMove(6, 1, [0], 0);
    design.addMove(6, 1, [1], 0);
    design.addMove(6, 2, [3, 3], 0);
    design.addMove(6, 2, [2, 2], 0);
    design.addMove(6, 2, [0, 0], 0);
    design.addMove(6, 2, [1, 1], 0);

    design.addPiece("Elephant", 7, 1500);
    design.addAttribute(7, 0, 8);
    design.addMove(7, 1, [3], 0);
    design.addMove(7, 1, [2], 0);
    design.addMove(7, 1, [0], 0);
    design.addMove(7, 1, [1], 0);

    design.setup("Red", "Elephant", 42);
    design.setup("Red", "Tiger", 56);
    design.setup("Red", "Cat", 50);
    design.setup("Red", "Dog", 44);
    design.setup("Red", "Panther", 46);
    design.setup("Red", "Fox", 54);
    design.setup("Red", "Rat", 48);
    design.setup("Red", "Lion", 62);
    design.setup("Green", "Elephant", 20);
    design.setup("Green", "Tiger", 6);
    design.setup("Green", "Cat", 12);
    design.setup("Green", "Dog", 18);
    design.setup("Green", "Panther", 16);
    design.setup("Green", "Fox", 8);
    design.setup("Green", "Rat", 14);
    design.setup("Green", "Lion", 0);

    design.goal(0, "Red", "Elephant", [3]);
    design.goal(1, "Red", "Lion", [3]);
    design.goal(2, "Red", "Tiger", [3]);
    design.goal(3, "Red", "Panther", [3]);
    design.goal(4, "Red", "Fox", [3]);
    design.goal(5, "Red", "Dog", [3]);
    design.goal(6, "Red", "Cat", [3]);
    design.goal(7, "Red", "Rat", [3]);
    design.goal(8, "Green", "Elephant", [59]);
    design.goal(9, "Green", "Lion", [59]);
    design.goal(10, "Green", "Tiger", [59]);
    design.goal(11, "Green", "Panther", [59]);
    design.goal(12, "Green", "Fox", [59]);
    design.goal(13, "Green", "Dog", [59]);
    design.goal(14, "Green", "Cat", [59]);
    design.goal(15, "Green", "Rat", [59]);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(471, 600, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', 'rRat', 'Bump');
    view.defPieceToken(0, 2, tokenPath, 'token.js', 'bRat', 'Bump');
    view.defPieceToken(1, 1, tokenPath, 'token.js', 'rCat', 'Bump');
    view.defPieceToken(1, 2, tokenPath, 'token.js', 'bCat', 'Bump');
    view.defPieceToken(2, 1, tokenPath, 'token.js', 'rDog', 'Bump');
    view.defPieceToken(2, 2, tokenPath, 'token.js', 'bDog', 'Bump');
    view.defPieceToken(3, 1, tokenPath, 'token.js', 'rFox', 'Bump');
    view.defPieceToken(3, 2, tokenPath, 'token.js', 'bFox', 'Bump');
    view.defPieceToken(4, 1, tokenPath, 'token.js', 'rPanther', 'Bump');
    view.defPieceToken(4, 2, tokenPath, 'token.js', 'bPanther', 'Bump');
    view.defPieceToken(5, 1, tokenPath, 'token.js', 'rTiger', 'Bump');
    view.defPieceToken(5, 2, tokenPath, 'token.js', 'bTiger', 'Bump');
    view.defPieceToken(6, 1, tokenPath, 'token.js', 'rLion', 'Bump');
    view.defPieceToken(6, 2, tokenPath, 'token.js', 'bLion', 'Bump');
    view.defPieceToken(7, 1, tokenPath, 'token.js', 'rElephant', 'Bump');
    view.defPieceToken(7, 2, tokenPath, 'token.js', 'bElephant', 'Bump');

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "Trafitional Chinese", true, Dagaz.Controller.open, 'https://en.wikipedia.org/wiki/Jungle_(board_game)');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'jungle.htm' : 'jungle-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'jungle-3d-board.htm' : 'jungle-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a9", -198, -264, 66, 66, 0);
    view.defPosition("b9", -132, -264, 66, 66, 0);
    view.defPosition("c9", -66, -264, 66, 66, 0);
    view.defPosition("d9", 0, -264, 66, 66, 0);
    view.defPosition("e9", 66, -264, 66, 66, 0);
    view.defPosition("f9", 132, -264, 66, 66, 0);
    view.defPosition("g9", 198, -264, 66, 66, 0);
    view.defPosition("a8", -198, -198, 66, 66, 0);
    view.defPosition("b8", -132, -198, 66, 66, 0);
    view.defPosition("c8", -66, -198, 66, 66, 0);
    view.defPosition("d8", 0, -198, 66, 66, 0);
    view.defPosition("e8", 66, -198, 66, 66, 0);
    view.defPosition("f8", 132, -198, 66, 66, 0);
    view.defPosition("g8", 198, -198, 66, 66, 0);
    view.defPosition("a7", -198, -132, 66, 66, 0);
    view.defPosition("b7", -132, -132, 66, 66, 0);
    view.defPosition("c7", -66, -132, 66, 66, 0);
    view.defPosition("d7", 0, -132, 66, 66, 0);
    view.defPosition("e7", 66, -132, 66, 66, 0);
    view.defPosition("f7", 132, -132, 66, 66, 0);
    view.defPosition("g7", 198, -132, 66, 66, 0);
    view.defPosition("a6", -198, -66, 66, 66, 0);
    view.defPosition("b6", -132, -66, 66, 66, 0);
    view.defPosition("c6", -66, -66, 66, 66, 0);
    view.defPosition("d6", 0, -66, 66, 66, 0);
    view.defPosition("e6", 66, -66, 66, 66, 0);
    view.defPosition("f6", 132, -66, 66, 66, 0);
    view.defPosition("g6", 198, -66, 66, 66, 0);
    view.defPosition("a5", -198, 0, 66, 66, 0);
    view.defPosition("b5", -132, 0, 66, 66, 0);
    view.defPosition("c5", -66, 0, 66, 66, 0);
    view.defPosition("d5", 0, 0, 66, 66, 0);
    view.defPosition("e5", 66, 0, 66, 66, 0);
    view.defPosition("f5", 132, 0, 66, 66, 0);
    view.defPosition("g5", 198, 0, 66, 66, 0);
    view.defPosition("a4", -198, 66, 66, 66, 0);
    view.defPosition("b4", -132, 66, 66, 66, 0);
    view.defPosition("c4", -66, 66, 66, 66, 0);
    view.defPosition("d4", 0, 66, 66, 66, 0);
    view.defPosition("e4", 66, 66, 66, 66, 0);
    view.defPosition("f4", 132, 66, 66, 66, 0);
    view.defPosition("g4", 198, 66, 66, 66, 0);
    view.defPosition("a3", -198, 132, 66, 66, 0);
    view.defPosition("b3", -132, 132, 66, 66, 0);
    view.defPosition("c3", -66, 132, 66, 66, 0);
    view.defPosition("d3", 0, 132, 66, 66, 0);
    view.defPosition("e3", 66, 132, 66, 66, 0);
    view.defPosition("f3", 132, 132, 66, 66, 0);
    view.defPosition("g3", 198, 132, 66, 66, 0);
    view.defPosition("a2", -198, 198, 66, 66, 0);
    view.defPosition("b2", -132, 198, 66, 66, 0);
    view.defPosition("c2", -66, 198, 66, 66, 0);
    view.defPosition("d2", 0, 198, 66, 66, 0);
    view.defPosition("e2", 66, 198, 66, 66, 0);
    view.defPosition("f2", 132, 198, 66, 66, 0);
    view.defPosition("g2", 198, 198, 66, 66, 0);
    view.defPosition("a1", -198, 264, 66, 66, 0);
    view.defPosition("b1", -132, 264, 66, 66, 0);
    view.defPosition("c1", -66, 264, 66, 66, 0);
    view.defPosition("d1", 0, 264, 66, 66, 0);
    view.defPosition("e1", 66, 264, 66, 66, 0);
    view.defPosition("f1", 132, 264, 66, 66, 0);
    view.defPosition("g1", 198, 264, 66, 66, 0);
}
