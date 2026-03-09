Dagaz.Controller.persistense = "none";

Dagaz.View.TARGET_FLAT  = true;
Dagaz.Model.START_POS   = 21;

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

    design.addDirection("n"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("s"); // 3
    design.addDirection("x"); // 4

    design.addPlayer("Blue", [3, 2, 1, 0, 4]);
    design.addPlayer("Red", [0, 1, 2, 3, 4]);

    design.addPosition("B7", [0, 1, 0, 9, 1]);
    design.addPosition("C7", [0, 1, -1, 3, 1]);
    design.addPosition("D7", [0, 0, -1, 5, 1]);
    design.addPosition("A6", [0, 1, 0, 3, 1]);
    design.addPosition("C6", [-3, 1, -1, 14, 1]);
    design.addPosition("E6", [0, 0, -1, 8, 1]);
    design.addPosition("A5", [-3, 1, 0, 6, 1]);
    design.addPosition("D5", [-5, 1, -1, 3, 1]);
    design.addPosition("G5", [0, 0, -1, 6, 1]);
    design.addPosition("B4", [-9, 1, 0, 6, 1]);
    design.addPosition("D4", [-3, 1, -1, 0, 1]);
    design.addPosition("F4", [0, 0, -1, 6, 1]);
    design.addPosition("A3", [-6, 1, 0, 0, 1]);
    design.addPosition("E3", [-8, 1, -1, 3, 1]);
    design.addPosition("G3", [-6, 0, -1, 6, 1]);
    design.addPosition("B2", [-6, 1, 0, 0, 1]);
    design.addPosition("E2", [-3, 1, -1, 0, 1]);
    design.addPosition("F2", [-6, 0, -1, 2, 1]);
    design.addPosition("C1", [-14, 1, 0, 0, 1]);
    design.addPosition("F1", [-2, 1, -1, 0, 1]);
    design.addPosition("G1", [-6, 0, -1, 0, 0]);

    design.addPosition("R01", [0, 0, 0, 0, 0]);
    design.addPosition("R02", [0, 0, 0, 0, 0]);
    design.addPosition("R03", [0, 0, 0, 0, 0]);
    design.addPosition("R04", [0, 0, 0, 0, 0]);
    design.addPosition("R05", [0, 0, 0, 0, 0]);
    design.addPosition("R06", [0, 0, 0, 0, 0]);
    design.addPosition("R07", [0, 0, 0, 0, 0]);
    design.addPosition("R08", [0, 0, 0, 0, 0]);

    design.addPosition("B01", [0, 0, 0, 0, 0]);
    design.addPosition("B02", [0, 0, 0, 0, 0]);
    design.addPosition("B03", [0, 0, 0, 0, 0]);
    design.addPosition("B04", [0, 0, 0, 0, 0]);
    design.addPosition("B05", [0, 0, 0, 0, 0]);
    design.addPosition("B06", [0, 0, 0, 0, 0]);
    design.addPosition("B07", [0, 0, 0, 0, 0]);
    design.addPosition("B08", [0, 0, 0, 0, 0]);

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

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
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 2, [0, 0], 0);
    design.addMove(0, 2, [1, 1], 0);
    design.addMove(0, 2, [2, 2], 0);
    design.addMove(0, 2, [3, 3], 0);
    design.addMove(0, 3, [0, 4], 1);

    design.setup("Red", "Stone", 21);
    design.setup("Red", "Stone", 22);
    design.setup("Red", "Stone", 23);
    design.setup("Red", "Stone", 24);
    design.setup("Red", "Stone", 25);
    design.setup("Red", "Stone", 26);
    design.setup("Red", "Stone", 27);
    design.setup("Red", "Stone", 28);

    design.setup("Blue", "Stone", 29);
    design.setup("Blue", "Stone", 30);
    design.setup("Blue", "Stone", 31);
    design.setup("Blue", "Stone", 32);
    design.setup("Blue", "Stone", 33);
    design.setup("Blue", "Stone", 34);
    design.setup("Blue", "Stone", 35);
    design.setup("Blue", "Stone", 36);

    design.reserve("Blue", "Stone", 0);
    design.reserve("Red", "Stone", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(430, 430, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const red  = 0xFF1111;
    const blue = 0x1111FF;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', undefined, 'Bump', blue, 2.3);
    view.defPieceToken(0, 2, tokenPath, 'token.js', undefined, 'Bump', red, 2.3);

    view.setCamera(0, 0, 0, -105, 184, 190);

    view.defControl("ResControl", "2D", true, Dagaz.Controller.go, Dagaz.AI.ON ? '8-men-dyzym.htm' : '8-men-dyzym-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? '8-men-dyzym-3d-board.htm' : '8-men-dyzym-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("B7", -120, -180, 38, 38, 0);
    view.defPosition("C7", -59, -180, 38, 38, 0);
    view.defPosition("D7", 0, -180, 38, 38, 0);
    view.defPosition("A6", -180, -120, 38, 38, 0);
    view.defPosition("C6", -59, -120, 38, 38, 0);
    view.defPosition("E6", 59, -120, 38, 38, 0);
    view.defPosition("A5", -180, -60, 38, 38, 0);
    view.defPosition("D5", 0, -60, 38, 38, 0);
    view.defPosition("G5", 180, -60, 38, 38, 0);
    view.defPosition("B4", -120, 0, 38, 38, 0);
    view.defPosition("D4", 0, 0, 38, 38, 0);
    view.defPosition("F4", 118, 0, 38, 38, 0);
    view.defPosition("A3", -180, 60, 38, 38, 0);
    view.defPosition("E3", 59, 60, 38, 38, 0);
    view.defPosition("G3", 180, 60, 38, 38, 0);
    view.defPosition("B2", -120, 120, 38, 38, 0);
    view.defPosition("E2", 59, 120, 38, 38, 0);
    view.defPosition("F2", 118, 120, 38, 38, 0);
    view.defPosition("C1", -59, 180, 38, 38, 0);
    view.defPosition("F1", 118, 180, 38, 38, 0);
    view.defPosition("G1", 180, 180, 38, 38, 0);

    view.defPosition("R01", -260, -150, 33, 33, 0);
    view.defPosition("R02", -260, -90, 33, 33, 0);
    view.defPosition("R03", -260, -30, 33, 33, 0);
    view.defPosition("R04", -260, 30, 33, 33, 0);

    view.defPosition("R05", -320, -150, 33, 33, 0);
    view.defPosition("R06", -320, -90, 33, 33, 0);
    view.defPosition("R07", -320, -30, 33, 33, 0);
    view.defPosition("R08", -320, 30, 33, 33, 0);

    view.defPosition("B01", 260, -30, 33, 33, 0);
    view.defPosition("B02", 260, 30, 33, 33, 0);
    view.defPosition("B03", 260, 90, 33, 33, 0);
    view.defPosition("B04", 260, 150, 33, 33, 0);

    view.defPosition("B05", 320, -30, 33, 33, 0);
    view.defPosition("B06", 320, 30, 33, 33, 0);
    view.defPosition("B07", 320, 90, 33, 33, 0);
    view.defPosition("B08", 320, 150, 33, 33, 0);
}
