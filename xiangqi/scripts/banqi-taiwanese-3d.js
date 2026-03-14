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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("banqi-extension", "true");
    design.checkVersion("banqi-invariant", "true");

    design.addDirection("w"); // 0
    design.addDirection("e"); // 1
    design.addDirection("s"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Red", [1, 0, 3, 2]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("a4", [0, 1, 8, 0]);
    design.addPosition("b4", [-1, 1, 8, 0]);
    design.addPosition("c4", [-1, 1, 8, 0]);
    design.addPosition("d4", [-1, 1, 8, 0]);
    design.addPosition("e4", [-1, 1, 8, 0]);
    design.addPosition("f4", [-1, 1, 8, 0]);
    design.addPosition("g4", [-1, 1, 8, 0]);
    design.addPosition("h4", [-1, 0, 8, 0]);
    design.addPosition("a3", [0, 1, 8, -8]);
    design.addPosition("b3", [-1, 1, 8, -8]);
    design.addPosition("c3", [-1, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 1, 8, -8]);
    design.addPosition("f3", [-1, 1, 8, -8]);
    design.addPosition("g3", [-1, 1, 8, -8]);
    design.addPosition("h3", [-1, 0, 8, -8]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PROMOTE,	7);	// General
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PROMOTE,	8);	// Advisor
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PROMOTE,	9);	// Elephant
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PROMOTE,	10);	// Chariot
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PROMOTE,	11);	// Horse
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PROMOTE,	12);	// Cannon
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PROMOTE,	13);	// Soldier
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	7);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-8);
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-5);
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("UnknownGeneral", 0, 0);
    design.addMove(0, 0, [], 0);

    design.addPiece("UnknownAdvisor", 1, 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("UnknownElephant", 2, 0);
    design.addMove(2, 2, [], 0);

    design.addPiece("UnknownChariot", 3, 0);
    design.addMove(3, 3, [], 0);

    design.addPiece("UnknownHorse", 4, 0);
    design.addMove(4, 4, [], 0);

    design.addPiece("UnknownCannon", 5, 0);
    design.addMove(5, 5, [], 0);

    design.addPiece("UnknownSoldier", 6, 0);
    design.addMove(6, 6, [], 0);

    design.addPiece("General", 7, 50);
    design.addMove(7, 7, [3], 0);
    design.addMove(7, 7, [1], 0);
    design.addMove(7, 7, [0], 0);
    design.addMove(7, 7, [2], 0);

    design.addPiece("Advisor", 8, 60);
    design.addMove(8, 7, [3], 0);
    design.addMove(8, 7, [1], 0);
    design.addMove(8, 7, [0], 0);
    design.addMove(8, 7, [2], 0);

    design.addPiece("Elephant", 9, 30);
    design.addMove(9, 7, [3], 0);
    design.addMove(9, 7, [1], 0);
    design.addMove(9, 7, [0], 0);
    design.addMove(9, 7, [2], 0);

    design.addPiece("Chariot", 10, 20);
    design.addMove(10, 7, [3], 0);
    design.addMove(10, 7, [1], 0);
    design.addMove(10, 7, [0], 0);
    design.addMove(10, 7, [2], 0);

    design.addPiece("Horse", 11, 10);
    design.addMove(11, 7, [3], 0);
    design.addMove(11, 7, [1], 0);
    design.addMove(11, 7, [0], 0);
    design.addMove(11, 7, [2], 0);

    design.addPiece("Cannon", 12, 100);
    design.addMove(12, 8, [3, 3, 3, 3], 0);
    design.addMove(12, 8, [2, 2, 2, 2], 0);
    design.addMove(12, 8, [0, 0, 0, 0], 0);
    design.addMove(12, 8, [1, 1, 1, 1], 0);

    design.addPiece("Soldier", 13, 40);
    design.addMove(13, 7, [3], 0);
    design.addMove(13, 7, [1], 0);
    design.addMove(13, 7, [0], 0);
    design.addMove(13, 7, [2], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(550, 316, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0,  1, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(0,  2, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(1,  1, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(1,  2, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(2,  1, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(2,  2, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(3,  1, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(3,  2, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(4,  1, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(4,  2, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(5,  1, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(5,  2, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(6,  1, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(6,  2, tokenPath, 'token.js', 'Unknown',  'Bump');
    view.defPieceToken(7,  1, tokenPath, 'token.js', 'rGeneral', 'Bump');
    view.defPieceToken(7,  2, tokenPath, 'token.js', 'bGeneral', 'Bump');
    view.defPieceToken(8,  1, tokenPath, 'token.js', 'rAdvisor', 'Bump');
    view.defPieceToken(8,  2, tokenPath, 'token.js', 'bAdvisor', 'Bump');
    view.defPieceToken(9,  1, tokenPath, 'token.js', 'rElephant','Bump');
    view.defPieceToken(9,  2, tokenPath, 'token.js', 'bElephant','Bump');
    view.defPieceToken(10, 1, tokenPath, 'token.js', 'rChariot', 'Bump');
    view.defPieceToken(10, 2, tokenPath, 'token.js', 'bChariot', 'Bump');
    view.defPieceToken(11, 1, tokenPath, 'token.js', 'rHorse',   'Bump');
    view.defPieceToken(11, 2, tokenPath, 'token.js', 'bHorse',   'Bump');
    view.defPieceToken(12, 1, tokenPath, 'token.js', 'rCannon',  'Bump');
    view.defPieceToken(12, 2, tokenPath, 'token.js', 'bCannon',  'Bump');
    view.defPieceToken(13, 1, tokenPath, 'token.js', 'rSoldier', 'Bump');
    view.defPieceToken(13, 2, tokenPath, 'token.js', 'bSoldier', 'Bump');

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'banqi-taiwanese.htm' : 'banqi-taiwanese-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'banqi-taiwanese-3d-board.htm' : 'banqi-taiwanese-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("a4", -210, -90, 42, 42, 0);
    view.defPosition("b4", -150, -90, 42, 42, 0);
    view.defPosition("c4", -90, -90, 42, 42, 0);
    view.defPosition("d4", -30, -90, 42, 42, 0);
    view.defPosition("e4", 30, -90, 42, 42, 0);
    view.defPosition("f4", 90, -90, 42, 42, 0);
    view.defPosition("g4", 150, -90, 42, 42, 0);
    view.defPosition("h4", 210, -90, 42, 42, 0);
    view.defPosition("a3", -210, -30, 42, 42, 0);
    view.defPosition("b3", -150, -30, 42, 42, 0);
    view.defPosition("c3", -90, -30, 42, 42, 0);
    view.defPosition("d3", -30, -30, 42, 42, 0);
    view.defPosition("e3", 30, -30, 42, 42, 0);
    view.defPosition("f3", 90, -30, 42, 42, 0);
    view.defPosition("g3", 150, -30, 42, 42, 0);
    view.defPosition("h3", 210, -30, 42, 42, 0);
    view.defPosition("a2", -210, 30, 42, 42, 0);
    view.defPosition("b2", -150, 30, 42, 42, 0);
    view.defPosition("c2", -90, 30, 42, 42, 0);
    view.defPosition("d2", -30, 30, 42, 42, 0);
    view.defPosition("e2", 30, 30, 42, 42, 0);
    view.defPosition("f2", 90, 30, 42, 42, 0);
    view.defPosition("g2", 150, 30, 42, 42, 0);
    view.defPosition("h2", 210, 30, 42, 42, 0);
    view.defPosition("a1", -210, 90, 42, 42, 0);
    view.defPosition("b1", -150, 90, 42, 42, 0);
    view.defPosition("c1", -90, 90, 42, 42, 0);
    view.defPosition("d1", -30, 90, 42, 42, 0);
    view.defPosition("e1", 30, 90, 42, 42, 0);
    view.defPosition("f1", 90, 90, 42, 42, 0);
    view.defPosition("g1", 150, 90, 42, 42, 0);
    view.defPosition("h1", 210, 90, 42, 42, 0);
}
