Dagaz.Controller.persistense = "none";

Dagaz.View.TARGET_FLAT  = true;

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
//  design.checkVersion("advisor-wait", "25");
//  design.checkVersion("morris-restrictions", "true");
//  design.checkVersion("morris-extension", "ko");
//  design.checkVersion("morris-invariant", "true");
//  design.checkVersion("morris-check", "true");
//  design.checkVersion("morris-goal", "true");

    design.addDirection("n");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("s");
    design.addDirection("x");
    design.addDirection("nw");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("se");

    design.addPlayer("Blue", [3, 2, 1, 0, 4, 8, 7, 6, 5]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("B9", [0, 0, 0, 7, 1, 0, 0, 0, 1]);
    design.addPosition("C8", [0, 1, 0, 7, 1, -1, 0, 0, 3]);
    design.addPosition("F8", [0, 1, -1, 3, 1, 0, 0, 0, 0]);
    design.addPosition("I8", [0, 0, -1, 0, 1, 0, 0, 3, 0]);
    design.addPosition("D7", [0, 1, 0, 5, 1, -3, 0, 0, 0]);
    design.addPosition("F7", [-3, 1, -1, 6, 1, 0, 0, 0, 0]);
    design.addPosition("H7", [0, 0, -1, 15, 1, 0, -3, 6, 0]);
    design.addPosition("B6", [-7, 1, 0, 15, 1, 0, 0, 0, 0]);
    design.addPosition("C6", [-7, 1, -1, 8, 1, 0, 0, 0, 0]);
    design.addPosition("D6", [-5, 0, -1, 4, 1, 0, 0, 0, 0]);
    design.addPosition("E6", [0, 1, 0, 4, 1, 0, 0, 0, 0]);
    design.addPosition("F6", [-6, 1, -1, 0, 1, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, -1, 8, 1, 0, -6, 0, 0]);
    design.addPosition("D5", [-4, 1, 0, 0, 1, 0, 0, 0, 0]);
    design.addPosition("E5", [-4, 1, -1, 4, 1, 0, 0, 0, 0]);
    design.addPosition("F5", [0, 0, -1, 4, 1, 0, 0, 0, 0]);
    design.addPosition("C4", [-8, 1, 0, 0, 1, 0, 0, 6, 0]);
    design.addPosition("D4", [0, 1, -1, 6, 1, 0, 0, 0, 0]);
    design.addPosition("E4", [-4, 0, -1, 0, 1, 0, 0, 0, 0]);
    design.addPosition("F4", [-4, 1, 0, 5, 1, 0, 0, 0, 0]);
    design.addPosition("G4", [-8, 1, -1, 7, 1, 0, 0, 0, 0]);
    design.addPosition("H4", [-15, 0, -1, 7, 1, 0, 0, 0, 0]);
    design.addPosition("B3", [-15, 1, 0, 0, 1, 0, -6, 3, 0]);
    design.addPosition("D3", [-6, 1, -1, 3, 1, 0, 0, 0, 0]);
    design.addPosition("F3", [-5, 0, -1, 0, 1, 0, 0, 0, 3]);
    design.addPosition("A2", [0, 1, 0, 0, 1, 0, -3, 0, 0]);
    design.addPosition("D2", [-3, 1, -1, 0, 1, 0, 0, 0, 0]);
    design.addPosition("G2", [-7, 0, -1, 0, 1, -3, 0, 0, 1]);
    design.addPosition("H1", [-7, 0, 0, 0, 0, -1, 0, 0, 0]);

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

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

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
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
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
//  design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [8], 0);
    design.addMove(0, 2, [], 0);
    design.addMove(0, 3, [0, 4], 1);

    design.setup("Red", "Stone", 29);
    design.setup("Red", "Stone", 30);
    design.setup("Red", "Stone", 31);
    design.setup("Red", "Stone", 32);
    design.setup("Red", "Stone", 33);
    design.setup("Red", "Stone", 34);
    design.setup("Red", "Stone", 35);
    design.setup("Red", "Stone", 36);
    design.setup("Red", "Stone", 37);
    design.setup("Red", "Stone", 38);
    design.setup("Red", "Stone", 39);
    design.setup("Red", "Stone", 40);

    design.setup("Blue", "Stone", 41);
    design.setup("Blue", "Stone", 42);
    design.setup("Blue", "Stone", 43);
    design.setup("Blue", "Stone", 44);
    design.setup("Blue", "Stone", 45);
    design.setup("Blue", "Stone", 46);
    design.setup("Blue", "Stone", 47);
    design.setup("Blue", "Stone", 48);
    design.setup("Blue", "Stone", 49);
    design.setup("Blue", "Stone", 50);
    design.setup("Blue", "Stone", 51);
    design.setup("Blue", "Stone", 52);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(431, 433, 1, -10, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const red  = 0xFF1111;
    const blue = 0x1111FF;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', undefined, 'Bump', blue);
    view.defPieceToken(0, 2, tokenPath, 'token.js', undefined, 'Bump', red);

    view.setCamera(0, 0, 0, -109, 215, 155);

//  view.defControl("InfoControl", "", true);
//  view.defControl("ResControl", "Western", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'triangle.htm' : 'triangle-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
//  view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'triangle-3d-board.htm' : 'triangle-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("B9", -135, -181, 38, 38, 0);
    view.defPosition("C8", -90, -135, 38, 38, 0);
    view.defPosition("F8", 45, -135, 38, 38, 0);
    view.defPosition("I8", 180, -135, 38, 38, 0);
    view.defPosition("D7", -45, -89, 38, 38, 0);
    view.defPosition("F7", 45, -89, 38, 38, 0);
    view.defPosition("H7", 135, -89, 38, 38, 0);
    view.defPosition("B6", -135, -44, 38, 38, 0);
    view.defPosition("C6", -90, -44, 38, 38, 0);
    view.defPosition("D6", -45, -44, 38, 38, 0);
    view.defPosition("E6", 0, -45, 38, 38, 0);
    view.defPosition("F6", 45, -45, 38, 38, 0);
    view.defPosition("G6", 90, -45, 38, 38, 0);
    view.defPosition("D5", -45, 1, 38, 38, 0);
    view.defPosition("E5", 0, 1, 38, 38, 0);
    view.defPosition("F5", 46, 1, 38, 38, 0);
    view.defPosition("C4", -90, 45, 38, 38, 0);
    view.defPosition("D4", -45, 45, 38, 38, 0);
    view.defPosition("E4", 0, 45, 38, 38, 0);
    view.defPosition("F4", 46, 46, 38, 38, 0);
    view.defPosition("G4", 90, 46, 38, 38, 0);
    view.defPosition("H4", 135, 46, 38, 38, 0);
    view.defPosition("B3", -135, 91, 38, 38, 0);
    view.defPosition("D3", -45, 91, 38, 38, 0);
    view.defPosition("F3", 46, 91, 38, 38, 0);
    view.defPosition("A2", -181, 136, 38, 38, 0);
    view.defPosition("D2", -45, 136, 38, 38, 0);
    view.defPosition("G2", 90, 136, 38, 38, 0);
    view.defPosition("H1", 135, 182, 38, 38, 0);

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
