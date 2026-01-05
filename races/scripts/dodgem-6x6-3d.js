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

    design.addPosition("a6", [0, 1, 6, 0]);
    design.addPosition("b6", [-1, 1, 6, 0]);
    design.addPosition("c6", [-1, 1, 6, 0]);
    design.addPosition("d6", [-1, 1, 6, 0]);
    design.addPosition("e6", [-1, 1, 6, 0]);
    design.addPosition("f6", [-1, 0, 6, 0]);
    design.addPosition("a5", [0, 1, 6, -6]);
    design.addPosition("b5", [-1, 1, 6, -6]);
    design.addPosition("c5", [-1, 1, 6, -6]);
    design.addPosition("d5", [-1, 1, 6, -6]);
    design.addPosition("e5", [-1, 1, 6, -6]);
    design.addPosition("f5", [-1, 0, 6, -6]);
    design.addPosition("a4", [0, 1, 6, -6]);
    design.addPosition("b4", [-1, 1, 6, -6]);
    design.addPosition("c4", [-1, 1, 6, -6]);
    design.addPosition("d4", [-1, 1, 6, -6]);
    design.addPosition("e4", [-1, 1, 6, -6]);
    design.addPosition("f4", [-1, 0, 6, -6]);
    design.addPosition("a3", [0, 1, 6, -6]);
    design.addPosition("b3", [-1, 1, 6, -6]);
    design.addPosition("c3", [-1, 1, 6, -6]);
    design.addPosition("d3", [-1, 1, 6, -6]);
    design.addPosition("e3", [-1, 1, 6, -6]);
    design.addPosition("f3", [-1, 0, 6, -6]);
    design.addPosition("a2", [0, 1, 6, -6]);
    design.addPosition("b2", [-1, 1, 6, -6]);
    design.addPosition("c2", [-1, 1, 6, -6]);
    design.addPosition("d2", [-1, 1, 6, -6]);
    design.addPosition("e2", [-1, 1, 6, -6]);
    design.addPosition("f2", [-1, 0, 6, -6]);
    design.addPosition("a1", [0, 1, 0, -6]);
    design.addPosition("b1", [-1, 1, 0, -6]);
    design.addPosition("c1", [-1, 1, 0, -6]);
    design.addPosition("d1", [-1, 1, 0, -6]);
    design.addPosition("e1", [-1, 1, 0, -6]);
    design.addPosition("f1", [-1, 0, 0, -6]);

    design.addZone("goal", 1, [0, 1, 2, 3, 4, 5]);
    design.addZone("goal", 2, [35, 29, 23, 17, 11, 5]);

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

    design.setup("Blue", "Car", 31);
    design.setup("Blue", "Car", 32);
    design.setup("Blue", "Car", 33);
    design.setup("Blue", "Car", 34);
    design.setup("Blue", "Car", 35);
    design.setup("Red", "Car", 24);
    design.setup("Red", "Car", 18);
    design.setup("Red", "Car", 12);
    design.setup("Red", "Car", 6);
    design.setup("Red", "Car", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(374, 374, 1, -10, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPieceTriangle(0, 1, 60, 60, 1, 0, [0x3333FF, 0x3333FF],  Math.PI);
    view.defPieceTriangle(0, 2, 60, 60, 1, 0, [0xFF3333, 0xFF3333],  Math.PI / 2);

    view.setCamera(0, 0, 0, -109, 215, 155);

    view.defControl("InfoControl", "1972 Colin Vout", true, Dagaz.Controller.open, 'http://www.di.fc.ul.pt/~jpn/gv/dodgem.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'dodgem-6x6.htm' : 'dodgem-6x6-board.htm');
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'dodgem-6x6-3d-board.htm' : 'dodgem-6x6-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a6", -155, -155, 60, 60, 0);
    view.defPosition("b6", -93, -155, 60, 60, 0);
    view.defPosition("c6", -31, -155, 60, 60, 0);
    view.defPosition("d6", 31, -155, 60, 60, 0);
    view.defPosition("e6", 93, -155, 60, 60, 0);
    view.defPosition("f6", 155, -155, 60, 60, 0);
    view.defPosition("a5", -155, -93, 60, 60, 0);
    view.defPosition("b5", -93, -93, 60, 60, 0);
    view.defPosition("c5", -31, -93, 60, 60, 0);
    view.defPosition("d5", 31, -93, 60, 60, 0);
    view.defPosition("e5", 93, -93, 60, 60, 0);
    view.defPosition("f5", 155, -93, 60, 60, 0);
    view.defPosition("a4", -155, -31, 60, 60, 0);
    view.defPosition("b4", -93, -31, 60, 60, 0);
    view.defPosition("c4", -31, -31, 60, 60, 0);
    view.defPosition("d4", 31, -31, 60, 60, 0);
    view.defPosition("e4", 93, -31, 60, 60, 0);
    view.defPosition("f4", 155, -31, 60, 60, 0);
    view.defPosition("a3", -155, 31, 60, 60, 0);
    view.defPosition("b3", -93, 31, 60, 60, 0);
    view.defPosition("c3", -31, 31, 60, 60, 0);
    view.defPosition("d3", 31, 31, 60, 60, 0);
    view.defPosition("e3", 93, 31, 60, 60, 0);
    view.defPosition("f3", 155, 31, 60, 60, 0);
    view.defPosition("a2", -155, 93, 60, 60, 0);
    view.defPosition("b2", -93, 93, 60, 60, 0);
    view.defPosition("c2", -31, 93, 60, 60, 0);
    view.defPosition("d2", 31, 93, 60, 60, 0);
    view.defPosition("e2", 93, 93, 60, 60, 0);
    view.defPosition("f2", 155, 93, 60, 60, 0);
    view.defPosition("a1", -155, 155, 60, 60, 0);
    view.defPosition("b1", -93, 155, 60, 60, 0);
    view.defPosition("c1", -31, 155, 60, 60, 0);
    view.defPosition("d1", 31, 155, 60, 60, 0);
    view.defPosition("e1", 93, 155, 60, 60, 0);
    view.defPosition("f1", 155, 155, 60, 60, 0);
}
