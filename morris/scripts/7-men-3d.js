Dagaz.Controller.persistense = "none";

Dagaz.View.TARGET_FLAT  = true;
Dagaz.Model.START_POS   = 18;

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

    design.addDirection("e");  // 0
    design.addDirection("w");  // 1
    design.addDirection("ne"); // 2
    design.addDirection("sw"); // 3
    design.addDirection("nw"); // 4
    design.addDirection("se"); // 5
    design.addDirection("x");  // 6

    design.addPlayer("Blue", [1, 0, 3, 2, 5, 4, 6]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6]);

    design.addPosition("C5", [1, 0, 0, 3, 0, 0, 1]);
    design.addPosition("E5", [1, -1, 0, 3, 0, 0, 1]);
    design.addPosition("G5", [0, -1, 0, 0, 0, 4, 1]);
    design.addPosition("B4", [0, 0, -3, 4, 0, 5, 1]);
    design.addPosition("D4", [1, 0, -3, 4, 0, 0, 1]);
    design.addPosition("F4", [1, -1, 0, 0, 0, 4, 1]);
    design.addPosition("H4", [0, -1, 0, 0, -4, 4, 1]);
    design.addPosition("A3", [0, 0, -4, 0, 0, 4, 1]);
    design.addPosition("C3", [0, 0, -4, 0, -5, 4, 1]);
    design.addPosition("G3", [0, 0, 0, 4, -4, 5, 1]);
    design.addPosition("I3", [0, 0, 0, 4, -4, 0, 1]);
    design.addPosition("B2", [1, 0, 0, 0, -4, 4, 1]);
    design.addPosition("D2", [1, -1, 0, 0, -4, 0, 1]);
    design.addPosition("F2", [0, -1, -4, 3, 0, 0, 1]);
    design.addPosition("H2", [0, 0, -4, 3, -5, 0, 1]);
    design.addPosition("C1", [1, 0, 0, 0, -4, 0, 1]);
    design.addPosition("E1", [1, -1, -3, 0, 0, 0, 1]);
    design.addPosition("G1", [0, -1, -3, 0, 0, 0, 0]);

    design.addPosition("R01", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R02", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R03", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R04", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R05", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R06", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R07", [0, 0, 0, 0, 0, 0, 0]);

    design.addPosition("B01", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B02", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B03", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B04", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B05", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B06", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B07", [0, 0, 0, 0, 0, 0, 0]);

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
    design.addCommand(3, ZRF.ON_BOARD_DIR,	6);	// name
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
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 3, [0, 6], 1);

    design.setup("Red", "Stone", 18);
    design.setup("Red", "Stone", 19);
    design.setup("Red", "Stone", 20);
    design.setup("Red", "Stone", 21);
    design.setup("Red", "Stone", 22);
    design.setup("Red", "Stone", 23);
    design.setup("Red", "Stone", 24);

    design.setup("Blue", "Stone", 25);
    design.setup("Blue", "Stone", 26);
    design.setup("Blue", "Stone", 27);
    design.setup("Blue", "Stone", 28);
    design.setup("Blue", "Stone", 29);
    design.setup("Blue", "Stone", 30);
    design.setup("Blue", "Stone", 31);

    design.reserve("Blue", "Stone", 0);
    design.reserve("Red", "Stone", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(364, 308, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const red  = 0xFF1111;
    const blue = 0x1111FF;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', undefined, 'Bump', blue);
    view.defPieceToken(0, 2, tokenPath, 'token.js', undefined, 'Bump', red);

    view.setCamera(0, 0, 0, -105, 184, 190);

    view.defControl("ResControl", "2D", true, Dagaz.Controller.go, Dagaz.AI.ON ? '7-men.htm' : '7-men-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? '7-men-3d-board.htm' : '7-men-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("C5", -74, -120, 38, 38, 0);
    view.defPosition("E5", 0, -120, 38, 38, 0);
    view.defPosition("G5", 74, -120, 38, 38, 0);
    view.defPosition("B4", -111, -60, 38, 38, 0);
    view.defPosition("D4", -37, -60, 38, 38, 0);
    view.defPosition("F4", 37, -60, 38, 38, 0);
    view.defPosition("H4", 111, -60, 38, 38, 0);
    view.defPosition("A3", -148, 0, 38, 38, 0);
    view.defPosition("C3", -74, -1, 38, 38, 0);
    view.defPosition("G3", 74, 0, 38, 38, 0);
    view.defPosition("I3", 148, 0, 38, 38, 0);
    view.defPosition("B2", -111, 60, 38, 38, 0);
    view.defPosition("D2", -37, 60, 38, 38, 0);
    view.defPosition("F2", 37, 60, 38, 38, 0);
    view.defPosition("H2", 111, 60, 38, 38, 0);
    view.defPosition("C1", -74, 120, 38, 38, 0);
    view.defPosition("E1", 0, 120, 38, 38, 0);
    view.defPosition("G1", 74, 120, 38, 38, 0);

    view.defPosition("R01", -260, -150, 33, 33, 0);
    view.defPosition("R02", -260, -90, 33, 33, 0);
    view.defPosition("R03", -260, -30, 33, 33, 0);
    view.defPosition("R04", -260, 30, 33, 33, 0);

    view.defPosition("R05", -320, -90, 33, 33, 0);
    view.defPosition("R06", -320, -30, 33, 33, 0);
    view.defPosition("R07", -320, 30, 33, 33, 0);

    view.defPosition("B01", 260, -30, 33, 33, 0);
    view.defPosition("B02", 260, 30, 33, 33, 0);
    view.defPosition("B03", 260, 90, 33, 33, 0);
    view.defPosition("B04", 260, 150, 33, 33, 0);

    view.defPosition("B05", 320, -30, 33, 33, 0);
    view.defPosition("B06", 320, 30, 33, 33, 0);
    view.defPosition("B07", 320, 90, 33, 33, 0);
}
