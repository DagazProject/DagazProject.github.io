Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  1.5;
Dagaz.View.TARGET_SZ         =  0.1;

Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "0");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [5, 7, 6, 0, 1, 0, 2, 1]);

    design.addPosition("a6", [7, 6, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("c6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("d6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("e6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("f6", [0, 6, 5, 0, -1, 0, 0, 0]);
    design.addPosition("a5", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f5", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a4", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f4", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a3", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f3", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a2", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f2", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("f1", [0, 0, 0, 0, -1, 0, -7, -6]);

    design.addZone("promotion-zone", 1, [0, 1, 2, 3, 4, 5]);
    design.addZone("promotion-zone", 2, [30, 31, 32, 33, 34, 35]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion-zone
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Marshal
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("Sergeant", 0, 100);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [7], 0);

    design.addPiece("Wing-Commander", 1, 5000);
    design.addMove(1, 1, [0, 0], 0);
    design.addMove(1, 1, [2, 2], 0);
    design.addMove(1, 1, [3, 3], 0);
    design.addMove(1, 1, [4, 4], 0);
    design.addMove(1, 1, [5, 7], 0);
    design.addMove(1, 1, [6, 7], 0);

    design.addPiece("Brigadier", 2, 3000);
    design.addMove(2, 2, [7, 5], 0);
    design.addMove(2, 2, [7, 6], 0);
    design.addMove(2, 2, [1, 0], 0);
    design.addMove(2, 2, [1, 2], 0);
    design.addMove(2, 2, [3, 5], 0);
    design.addMove(2, 2, [3, 0], 0);
    design.addMove(2, 2, [4, 6], 0);
    design.addMove(2, 2, [4, 2], 0);
    design.addMove(2, 3, [7], 0);
    design.addMove(2, 3, [3], 0);
    design.addMove(2, 3, [1], 0);
    design.addMove(2, 3, [4], 0);

    design.addPiece("Captain", 3, 1000);
    design.addMove(3, 3, [5], 0);
    design.addMove(3, 3, [6], 0);
    design.addMove(3, 3, [0], 0);
    design.addMove(3, 3, [2], 0);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [1, 1], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [4, 4], 0);
    design.addMove(3, 2, [5, 5], 0);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [0, 0], 0);
    design.addMove(3, 2, [2, 2], 0);

    design.addPiece("Marshal", 4, 9000);
    design.addMove(4, 1, [7, 7], 0);
    design.addMove(4, 1, [1, 1], 0);
    design.addMove(4, 1, [3, 3], 0);
    design.addMove(4, 1, [4, 4], 0);
    design.addMove(4, 2, [7, 5], 0);
    design.addMove(4, 2, [7, 6], 0);
    design.addMove(4, 2, [1, 0], 0);
    design.addMove(4, 2, [1, 2], 0);
    design.addMove(4, 2, [3, 5], 0);
    design.addMove(4, 2, [3, 0], 0);
    design.addMove(4, 2, [4, 6], 0);
    design.addMove(4, 2, [4, 2], 0);

    design.addPiece("President", 5, 20000);

    design.setup("White", "Sergeant", 25);
    design.setup("White", "Sergeant", 26);
    design.setup("White", "Sergeant", 27);
    design.setup("White", "Sergeant", 28);
    design.setup("White", "Brigadier", 30);
    design.setup("White", "Brigadier", 35);
    design.setup("White", "Captain", 34);
    design.setup("White", "Wing-Commander", 33);
    design.setup("White", "Marshal", 31);
    design.setup("White", "President", 32);
    design.setup("Black", "Sergeant", 7);
    design.setup("Black", "Sergeant", 8);
    design.setup("Black", "Sergeant", 9);
    design.setup("Black", "Sergeant", 10);
    design.setup("Black", "Brigadier", 0);
    design.setup("Black", "Brigadier", 5);
    design.setup("Black", "Captain", 1);
    design.setup("Black", "Wing-Commander", 2);
    design.setup("Black", "Marshal", 4);
    design.setup("Black", "President", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(254, 254, 1, -10, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPiecePlatform(0, 1, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhiteSergeant");
    view.defPiecePlatform(0, 2, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackSergeant");
    view.defPiecePlatform(1, 1, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhiteWing-Commander");
    view.defPiecePlatform(1, 2, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackWing-Commander");
    view.defPiecePlatform(2, 1, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhiteBrigadier");
    view.defPiecePlatform(2, 2, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackBrigadier");
    view.defPiecePlatform(3, 1, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhiteCaptain");
    view.defPiecePlatform(3, 2, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackCaptain");
    view.defPiecePlatform(4, 1, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhiteMarshal");
    view.defPiecePlatform(4, 2, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackMarshal");
    view.defPiecePlatform(5, 1, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WhitePresident");
    view.defPiecePlatform(5, 2, 40, 40, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BlackPresident");
 
    view.setCamera(0, 0, 0, -109, 215, 155);

    view.defControl("InfoControl", "2003-2005 Glenn Overby", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'vesquj.htm' : 'vesquj-board.htm');
//  view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'vesquj-3d-board.htm' : 'vesquj-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("a6", -105, -105, 41, 41, 0.1);
    view.defPosition("b6", -63, -105, 41, 41, 0.1);
    view.defPosition("c6", -21, -105, 41, 41, 0.1);
    view.defPosition("d6", 21, -105, 41, 41, 0.1);
    view.defPosition("e6", 63, -105, 41, 41, 0.1);
    view.defPosition("f6", 105, -105, 41, 41, 0.1);
    view.defPosition("a5", -105, -63, 41, 41, 0.1);
    view.defPosition("b5", -63, -63, 41, 41, 0.1);
    view.defPosition("c5", -21, -63, 41, 41, 0.1);
    view.defPosition("d5", 21, -63, 41, 41, 0.1);
    view.defPosition("e5", 63, -63, 41, 41, 0.1);
    view.defPosition("f5", 105, -63, 41, 41, 0.1);
    view.defPosition("a4", -105, -21, 41, 41, 0.1);
    view.defPosition("b4", -63, -21, 41, 41, 0.1);
    view.defPosition("c4", -21, -21, 41, 41, 0.1);
    view.defPosition("d4", 21, -21, 41, 41, 0.1);
    view.defPosition("e4", 63, -21, 41, 41, 0.1);
    view.defPosition("f4", 105, -21, 41, 41, 0.1);
    view.defPosition("a3", -105, 21, 41, 41, 0.1);
    view.defPosition("b3", -63, 21, 41, 41, 0.1);
    view.defPosition("c3", -21, 21, 41, 41, 0.1);
    view.defPosition("d3", 21, 21, 41, 41, 0.1);
    view.defPosition("e3", 63, 21, 41, 41, 0.1);
    view.defPosition("f3", 105, 21, 41, 41, 0.1);
    view.defPosition("a2", -105, 63, 41, 41, 0.1);
    view.defPosition("b2", -63, 63, 41, 41, 0.1);
    view.defPosition("c2", -21, 63, 41, 41, 0.1);
    view.defPosition("d2", 21, 63, 41, 41, 0.1);
    view.defPosition("e2", 63, 63, 41, 41, 0.1);
    view.defPosition("f2", 105, 63, 41, 41, 0.1);
    view.defPosition("a1", -105, 105, 41, 41, 0.1);
    view.defPosition("b1", -63, 105, 41, 41, 0.1);
    view.defPosition("c1", -21, 105, 41, 41, 0.1);
    view.defPosition("d1", 21, 105, 41, 41, 0.1);
    view.defPosition("e1", 63, 105, 41, 41, 0.1);
    view.defPosition("f1", 105, 105, 41, 41, 0.1);
}
