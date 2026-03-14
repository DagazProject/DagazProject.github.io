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
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("morris-extension", "true");
    design.checkVersion("three-man-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");
    design.addDirection("x");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Blue", [1, 0, 3, 2, 4, 6, 5, 8, 7]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("a3", [0, 1, 3, 0, 3, 0, 0, 0, 4]);
    design.addPosition("b3", [-1, 1, 3, 0, 3, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 0, 3, 0, 3, 0, 2, 0, 0]);
    design.addPosition("a2", [0, 1, 3, -3, 3, 0, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 3, -3, 3, -2, 2, -4, 4]);
    design.addPosition("c2", [-1, 0, 3, -3, 3, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -3, -5, -2, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -3, -5, 0, 0, 0, 0]);
    design.addPosition("c1", [-1, 0, 0, -3, 0, 0, 0, -4, 0]);

    design.addPosition("R01", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R02", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R03", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B01", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B02", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B03", [0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 1, [0, 4], 0);

    design.setup("Red", "Stone", 9);
    design.setup("Red", "Stone", 10);
    design.setup("Red", "Stone", 11);
    design.setup("Blue", "Stone", 12);
    design.setup("Blue", "Stone", 13);
    design.setup("Blue", "Stone", 14);

    design.reserve("Blue", "Stone", 0);
    design.reserve("Red", "Stone", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(302, 300, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const red  = 0xFF1111;
    const blue = 0x1111FF;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', undefined, 'Bump', blue, 3.7);
    view.defPieceToken(0, 2, tokenPath, 'token.js', undefined, 'Bump', red, 3.7);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("ResControl", "2D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'les-pendus.htm' : 'les-pendus-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'les-pendus-3d-board.htm' : 'les-pendus-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a3", -84, -84, 84, 84, 0);
    view.defPosition("b3", 0, -84, 84, 84, 0);
    view.defPosition("c3", 84, -84, 84, 84, 0);
    view.defPosition("a2", -84, 0, 84, 84, 0);
    view.defPosition("b2", 0, 0, 84, 84, 0);
    view.defPosition("c2", 84, 0, 84, 84, 0);
    view.defPosition("a1", -84, 84, 84, 84, 0);
    view.defPosition("b1", 0, 84, 84, 84, 0);
    view.defPosition("c1", 84, 84, 84, 84, 0);

    view.defPosition("R01", -220, -100, 33, 33, 0);
    view.defPosition("R02", -220, 0, 33, 33, 0);
    view.defPosition("R03", -220, 100, 33, 33, 0);

    view.defPosition("B01", 220, -100, 33, 33, 0);
    view.defPosition("B02", 220, 0, 33, 33, 0);
    view.defPosition("B03", 220, 100, 33, 33, 0);
}
