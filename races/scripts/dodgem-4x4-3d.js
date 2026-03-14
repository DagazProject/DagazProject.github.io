Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
Dagaz.View.TARGET_SZ         =  0.5;

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
    design.checkVersion("zrf", "3.0");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("ko", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("dodgem-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Blue", [1, 0, 3, 2]);
    design.addPlayer("Red", [3, 2, 0, 1]);

    design.addPosition("a4", [0, 1, 4, 0]);
    design.addPosition("b4", [-1, 1, 4, 0]);
    design.addPosition("c4", [-1, 1, 4, 0]);
    design.addPosition("d4", [-1, 0, 4, 0]);
    design.addPosition("a3", [0, 1, 4, -4]);
    design.addPosition("b3", [-1, 1, 4, -4]);
    design.addPosition("c3", [-1, 1, 4, -4]);
    design.addPosition("d3", [-1, 0, 4, -4]);
    design.addPosition("a2", [0, 1, 4, -4]);
    design.addPosition("b2", [-1, 1, 4, -4]);
    design.addPosition("c2", [-1, 1, 4, -4]);
    design.addPosition("d2", [-1, 0, 4, -4]);
    design.addPosition("a1", [0, 1, 0, -4]);
    design.addPosition("b1", [-1, 1, 0, -4]);
    design.addPosition("c1", [-1, 1, 0, -4]);
    design.addPosition("d1", [-1, 0, 0, -4]);

    design.addZone("goal", 1, [0, 1, 2, 3]);
    design.addZone("goal", 2, [15, 11, 7, 3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// goal
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Car", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 1, [], 0);

    design.setup("Blue", "Car", 13);
    design.setup("Blue", "Car", 14);
    design.setup("Blue", "Car", 15);
    design.setup("Red", "Car", 8);
    design.setup("Red", "Car", 4);
    design.setup("Red", "Car", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(250, 250, 1, -10, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPieceTriangle(0, 1, 60, 60, 1, 0, [0x3333FF, 0x3333FF],  Math.PI);
    view.defPieceTriangle(0, 2, 60, 60, 1, 0, [0xFF3333, 0xFF3333],  Math.PI / 2);

    view.setCamera(0, 0, 0, -109, 215, 155);

    view.defControl("InfoControl", "1972 Colin Vout", true, Dagaz.Controller.open, 'http://www.di.fc.ul.pt/~jpn/gv/dodgem.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'dodgem-4x4.htm' : 'dodgem-4x4-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'dodgem-4x4-3d-board.htm' : 'dodgem-4x4-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a4", -93, -93, 60, 60, 0);
    view.defPosition("b4", -31, -93, 60, 60, 0);
    view.defPosition("c4", 31, -93, 60, 60, 0);
    view.defPosition("d4", 93, -93, 60, 60, 0);
    view.defPosition("a3", -93, -31, 60, 60, 0);
    view.defPosition("b3", -31, -31, 60, 60, 0);
    view.defPosition("c3", 31, -31, 60, 60, 0);
    view.defPosition("d3", 93, -31, 60, 60, 0);
    view.defPosition("a2", -93, 31, 60, 60, 0);
    view.defPosition("b2", -31, 31, 60, 60, 0);
    view.defPosition("c2", 31, 31, 60, 60, 0);
    view.defPosition("d2", 93, 31, 60, 60, 0);
    view.defPosition("a1", -93, 93, 60, 60, 0);
    view.defPosition("b1", -31, 93, 60, 60, 0);
    view.defPosition("c1", 31, 93, 60, 60, 0);
    view.defPosition("d1", 93, 93, 60, 60, 0);
}
