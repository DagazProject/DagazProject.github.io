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
    design.checkVersion("ko", "asymmetric");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("morris-extension", "true");
    design.checkVersion("three-man-goal", "true");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Blue", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("P01", [0, 2, 0, 0, 0, 1, 0, 4]);
    design.addPosition("P02", [0, 2, 0, 0, -1, 5, 0, 1]);
    design.addPosition("P03", [-2, 5, 1, 0, 0, 0, -1, 3]);
    design.addPosition("P04", [-2, 5, 1, -1, 0, 2, 0, 0]);
    design.addPosition("P05", [0, 1, 0, -1, 0, 0, -4, 4]);
    design.addPosition("P06", [-1, 1, 0, 0, -2, 2, -3, 0]);
    design.addPosition("P07", [-1, 0, 1, 0, -5, 0, 0, 0]);
    design.addPosition("P08", [-5, 0, 1, -1, -2, 0, 0, 0]);
    design.addPosition("P09", [-5, 0, 0, -1, 0, 0, -4, 0]);
    design.addPosition("R01", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R02", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R03", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B01", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B02", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B03", [0, 0, 0, 0, 0, 0, 0, 0]);

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

    design.addPiece("Stone", 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [4], 0);

    design.setup("Red", "Stone", 9);
    design.setup("Red", "Stone", 10);
    design.setup("Red", "Stone", 11);
    design.setup("Blue", "Stone", 12);
    design.setup("Blue", "Stone", 13);
    design.setup("Blue", "Stone", 14);
}

Dagaz.View.configure = function(view) {
    view.defBoardTriangular(563, 503, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const red  = 0xFF1111;
    const blue = 0x1111FF;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', undefined, 'Bump', blue);
    view.defPieceToken(0, 2, tokenPath, 'token.js', undefined, 'Bump', red);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "Inspired by Thomas H. O'Beirne and Greg Schmidt", true);
    view.defControl("ResControl", "Western", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'triangle.htm' : 'triangle-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'triangle-3d-board.htm' : 'triangle-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("P01", 0, -207, 33, 33, 0);
    view.defPosition("P02", -90, -42, 33, 33, 0);
    view.defPosition("P03", -35, 59, 33, 33, 0);
    view.defPosition("P04", 36, 60, 33, 33, 0);
    view.defPosition("P05", 148, 60, 33, 33, 0);
    view.defPosition("P06", 0, 124, 33, 33, 0);
    view.defPosition("P07", -239, 225, 33, 33, 0);
    view.defPosition("P08", -57, 225, 33, 33, 0);
    view.defPosition("P09", 240, 226, 33, 33, 0);
    view.defPosition("R01", -179, -60, 33, 33, 0);
    view.defPosition("R02", -211, 0, 33, 33, 0);
    view.defPosition("R03", -243, 60, 33, 33, 0);
    view.defPosition("B01", 179, -60, 33, 33, 0);
    view.defPosition("B02", 211, 0, 33, 33, 0);
    view.defPosition("B03", 243, 60, 33, 33, 0);
}
