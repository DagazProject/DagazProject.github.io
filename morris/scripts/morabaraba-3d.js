Dagaz.Controller.persistense = "none";

Dagaz.View.TARGET_FLAT  = true;
Dagaz.Model.START_POS   = 49;

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("n");  // 0
    design.addDirection("e");  // 1
    design.addDirection("w");  // 2
    design.addDirection("s");  // 3
    design.addDirection("x");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7
    design.addDirection("se"); // 8

    design.addPlayer("Blue", [3, 2, 1, 0, 4, 6, 5, 8, 7]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("a7", [0, 3, 0, 21, 21, 0, 0, 0, 8]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d7", [0, 3, -3, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g7", [0, 0, -3, 21, 21, 0, 6, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 2, 0, 14, 14, 0, 0, -8, 8]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [-7, 2, -2, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f6", [0, 0, -2, 14, 14, -6, 6, 0, 0]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 1, 0, 7, 7, 0, 0, -8, 0]);
    design.addPosition("d5", [-7, 1, -1, 0, 14, 0, 0, 0, 0]);
    design.addPosition("e5", [0, 0, -1, 7, 7, -6, 0, 0, 0]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [-21, 1, 0, 21, 21, 0, 0, 0, 0]);
    design.addPosition("b4", [-14, 1, -1, 14, 14, 0, 0, 0, 0]);
    design.addPosition("c4", [-7, 0, -1, 7, 7, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e4", [-7, 1, 0, 7, 7, 0, 0, 0, 0]);
    design.addPosition("f4", [-14, 1, -1, 14, 14, 0, 0, 0, 0]);
    design.addPosition("g4", [-21, 0, -1, 21, 21, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [-7, 1, 0, 0, -27, 0, 6, 0, 0]);
    design.addPosition("d3", [0, 1, -1, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e3", [-7, 0, -1, 0, -20, 0, 0, 0, 8]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [-14, 2, 0, 0, -20, -6, 6, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [-7, 2, -2, 7, 7, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [-14, 0, -2, 0, -34, 0, 0, -8, 8]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-21, 3, 0, 0, -34, -6, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [-7, 3, -3, 0, -27, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [-21, 0, -3, 0, 0, 0, 0, -8, 0]);

    design.addPosition("R01", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R02", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R03", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R04", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R05", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R06", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R07", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R08", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R09", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R10", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R11", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R12", [0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addPosition("B01", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B02", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B03", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B04", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B05", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B06", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B07", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B08", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B09", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B10", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B11", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B12", [0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("killed", 1, [35, 28, 14, 7, 43, 29, 15, 1, 44, 37, 9, 2, 24, 46, 39, 11, 4, 47, 33, 19, 5, 41, 34, 20, 13]);
    design.addZone("killed", 2, [35, 28, 14, 7, 43, 29, 15, 1, 44, 37, 9, 2, 24, 46, 39, 11, 4, 47, 33, 19, 5, 41, 34, 20, 13]);

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	21);	// position
    design.addCommand(3, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-11);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [8], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
//  design.addMove(0, 3, [0, 4], 1);

    design.setup("Red", "Stone", 49);
    design.setup("Red", "Stone", 50);
    design.setup("Red", "Stone", 51);
    design.setup("Red", "Stone", 52);
    design.setup("Red", "Stone", 53);
    design.setup("Red", "Stone", 54);
    design.setup("Red", "Stone", 55);
    design.setup("Red", "Stone", 56);
    design.setup("Red", "Stone", 57);
    design.setup("Red", "Stone", 58);
    design.setup("Red", "Stone", 59);
    design.setup("Red", "Stone", 60);

    design.setup("Blue", "Stone", 61);
    design.setup("Blue", "Stone", 62);
    design.setup("Blue", "Stone", 63);
    design.setup("Blue", "Stone", 64);
    design.setup("Blue", "Stone", 65);
    design.setup("Blue", "Stone", 66);
    design.setup("Blue", "Stone", 67);
    design.setup("Blue", "Stone", 68);
    design.setup("Blue", "Stone", 69);
    design.setup("Blue", "Stone", 70);
    design.setup("Blue", "Stone", 71);
    design.setup("Blue", "Stone", 72);

    design.reserve("Blue", "Stone", 0);
    design.reserve("Red", "Stone", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(319, 318, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const red  = 0xFF1111;
    const blue = 0x1111FF;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', undefined, 'Bump', blue, 2.1);
    view.defPieceToken(0, 2, tokenPath, 'token.js', undefined, 'Bump', red, 2.1);

    view.setCamera(0, 0, 0, -105, 184, 190);

    view.defControl("ResControl", "2D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'morabaraba.htm' : 'morabaraba-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'morabaraba-3d-board.htm' : 'morabaraba-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a7", -126, -126, 42, 42, 0);
    view.defPosition("b7", -84, -126, 42, 42, 0);
    view.defPosition("c7", -42, -126, 42, 42, 0);
    view.defPosition("d7", 0, -126, 42, 42, 0);
    view.defPosition("e7", 42, -126, 42, 42, 0);
    view.defPosition("f7", 84, -126, 42, 42, 0);
    view.defPosition("g7", 126, -126, 42, 42, 0);
    view.defPosition("a6", -126, -84, 42, 42, 0);
    view.defPosition("b6", -84, -84, 42, 42, 0);
    view.defPosition("c6", -42, -84, 42, 42, 0);
    view.defPosition("d6", 0, -84, 42, 42, 0);
    view.defPosition("e6", 42, -84, 42, 42, 0);
    view.defPosition("f6", 84, -84, 42, 42, 0);
    view.defPosition("g6", 126, -84, 42, 42, 0);
    view.defPosition("a5", -126, -42, 42, 42, 0);
    view.defPosition("b5", -84, -42, 42, 42, 0);
    view.defPosition("c5", -42, -42, 42, 42, 0);
    view.defPosition("d5", 0, -42, 42, 42, 0);
    view.defPosition("e5", 42, -42, 42, 42, 0);
    view.defPosition("f5", 84, -42, 42, 42, 0);
    view.defPosition("g5", 126, -42, 42, 42, 0);
    view.defPosition("a4", -126, 0, 42, 42, 0);
    view.defPosition("b4", -84, 0, 42, 42, 0);
    view.defPosition("c4", -42, 0, 42, 42, 0);
    view.defPosition("d4", 0, 0, 42, 42, 0);
    view.defPosition("e4", 42, 0, 42, 42, 0);
    view.defPosition("f4", 84, 0, 42, 42, 0);
    view.defPosition("g4", 126, 0, 42, 42, 0);
    view.defPosition("a3", -126, 42, 42, 42, 0);
    view.defPosition("b3", -84, 42, 42, 42, 0);
    view.defPosition("c3", -42, 42, 42, 42, 0);
    view.defPosition("d3", 0, 42, 42, 42, 0);
    view.defPosition("e3", 42, 42, 42, 42, 0);
    view.defPosition("f3", 84, 42, 42, 42, 0);
    view.defPosition("g3", 126, 42, 42, 42, 0);
    view.defPosition("a2", -126, 84, 42, 42, 0);
    view.defPosition("b2", -84, 84, 42, 42, 0);
    view.defPosition("c2", -42, 84, 42, 42, 0);
    view.defPosition("d2", 0, 84, 42, 42, 0);
    view.defPosition("e2", 42, 84, 42, 42, 0);
    view.defPosition("f2", 84, 84, 42, 42, 0);
    view.defPosition("g2", 126, 84, 42, 42, 0);
    view.defPosition("a1", -126, 126, 42, 42, 0);
    view.defPosition("b1", -84, 126, 42, 42, 0);
    view.defPosition("c1", -42, 126, 42, 42, 0);
    view.defPosition("d1", 0, 126, 42, 42, 0);
    view.defPosition("e1", 42, 126, 42, 42, 0);
    view.defPosition("f1", 84, 126, 42, 42, 0);
    view.defPosition("g1", 126, 126, 42, 42, 0);

    view.defPosition("R01", -260, -150, 33, 33, 0);
    view.defPosition("R02", -260, -90, 33, 33, 0);
    view.defPosition("R03", -260, -30, 33, 33, 0);
    view.defPosition("R04", -260, 30, 33, 33, 0);
    view.defPosition("R05", -260, 90, 33, 33, 0);
    view.defPosition("R06", -260, 150, 33, 33, 0);

    view.defPosition("R07", -320, -150, 33, 33, 0);
    view.defPosition("R08", -320, -90, 33, 33, 0);
    view.defPosition("R09", -320, -30, 33, 33, 0);
    view.defPosition("R10", -320, 30, 33, 33, 0);
    view.defPosition("R11", -320, 90, 33, 33, 0);
    view.defPosition("R12", -320, 150, 33, 33, 0);

    view.defPosition("B01", 260, -150, 33, 33, 0);
    view.defPosition("B02", 260, -90, 33, 33, 0);
    view.defPosition("B03", 260, -30, 33, 33, 0);
    view.defPosition("B04", 260, 30, 33, 33, 0);
    view.defPosition("B05", 260, 90, 33, 33, 0);
    view.defPosition("B06", 260, 150, 33, 33, 0);

    view.defPosition("B07", 320, -150, 33, 33, 0);
    view.defPosition("B08", 320, -90, 33, 33, 0);
    view.defPosition("B09", 320, -30, 33, 33, 0);
    view.defPosition("B10", 320, 30, 33, 33, 0);
    view.defPosition("B11", 320, 90, 33, 33, 0);
    view.defPosition("B12", 320, 150, 33, 33, 0);
}
