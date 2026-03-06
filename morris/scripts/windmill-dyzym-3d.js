Dagaz.Controller.persistense = "none";

Dagaz.Model.SKIP_0      = true;
Dagaz.View.TARGET_FLAT  = true;
Dagaz.Model.START_POS   = 81;

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
    design.addDirection("s");  // 1
    design.addDirection("e");  // 2
    design.addDirection("w");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("sw"); // 5
    design.addDirection("se"); // 6
    design.addDirection("nw"); // 7
    design.addDirection("x");  // 8

    design.addPlayer("Blue", [1, 0, 3, 2, 5, 4, 7, 6, 8]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 9]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h9", [0, 27, 0, 0, 0, 8, 0, 0, 27]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 3, 0, 0, 0, 10, 0, 10]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 9, 3, -3, 0, 0, 0, 0, 9]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g8", [0, 18, 0, -3, -8, 8, 0, 0, 18]);
    design.addPosition("h8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 27, 2, 0, 0, 0, 10, -10, 27]);
    design.addPosition("c7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d7", [-9, 9, 2, -2, 0, 0, 0, 0, 9]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f7", [0, 9, 0, -2, -8, 0, 0, 0, 9]);
    design.addPosition("g7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [0, 18, 1, 0, 0, 0, 0, -10, 18]);
    design.addPosition("d6", [-9, 0, 1, -1, 0, 0, 0, 0, 9]);
    design.addPosition("e6", [0, 0, 0, -1, 0, 8, 10, 0, 18]);
    design.addPosition("f6", [-9, 9, 1, 0, 0, 0, 0, 0, 9]);
    design.addPosition("g6", [-18, 18, 1, -1, 0, 0, 0, 0, 18]);
    design.addPosition("h6", [-27, 27, 0, -1, 0, 0, 0, 0, 27]);
    design.addPosition("i6", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d5", [0, 9, 0, 0, -8, 0, 10, 0, 9]);
    design.addPosition("e5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f5", [-9, 0, 0, 0, 0, 8, 0, -10, 9]);
    design.addPosition("g5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [-27, 27, 1, 0, 0, 0, 0, 0, 27]);
    design.addPosition("c4", [-18, 18, 1, -1, 0, 0, 0, 0, 18]);
    design.addPosition("d4", [-9, 9, 0, -1, 0, 0, 0, 0, 9]);
    design.addPosition("e4", [0, 0, 1, 0, -8, 0, 0, -10, -26]);
    design.addPosition("f4", [0, 9, 1, -1, 0, 0, 0, 0, 9]);
    design.addPosition("g4", [-18, 0, 0, -1, 0, 0, 10, 0, -44]);
    design.addPosition("h4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d3", [-9, 0, 2, 0, 0, 8, 0, 0, -26]);
    design.addPosition("e3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f3", [-9, 9, 2, -2, 0, 0, 0, 0, 9]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h3", [-27, 0, 0, -2, 0, 0, 10, -10, 10]);
    design.addPosition("i3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [-18, 0, 3, 0, -8, 8, 0, 0, -53]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2", [-9, 0, 3, -3, 0, 0, 0, 0, -53]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [0, 0, 0, -3, 0, 0, 0, -10, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [-27, 0, 0, 0, -8, 0, 0, 0, -44]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);

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

    design.addZone("killed", 1, [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 14, 16, 17, 18, 20, 22, 24, 25, 26, 27, 28, 35, 36, 37, 38, 40, 42, 43, 44, 45, 52, 53, 54, 55, 56, 58, 60, 62, 63, 64, 66, 67, 69, 70, 72, 74, 75, 76, 77, 78, 79, 80]);
    design.addZone("killed", 2, [0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 13, 14, 16, 17, 18, 20, 22, 24, 25, 26, 27, 28, 35, 36, 37, 38, 40, 42, 43, 44, 45, 52, 53, 54, 55, 56, 58, 60, 62, 63, 64, 66, 67, 69, 70, 72, 74, 75, 76, 77, 78, 79, 80]);

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
    design.addCommand(3, ZRF.ON_BOARD_DIR,	8);	// name
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
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 2, [0, 0], 0);
    design.addMove(0, 2, [1, 1], 0);
    design.addMove(0, 2, [2, 2], 0);
    design.addMove(0, 2, [3, 3], 0);
    design.addMove(0, 2, [4, 4], 0);
    design.addMove(0, 2, [5, 5], 0);
    design.addMove(0, 2, [6, 6], 0);
    design.addMove(0, 2, [7, 7], 0);
//  design.addMove(0, 3, [0, 8], 1);

    design.setup("Red", "Stone", 81);
    design.setup("Red", "Stone", 82);
    design.setup("Red", "Stone", 83);
    design.setup("Red", "Stone", 84);
    design.setup("Red", "Stone", 85);
    design.setup("Red", "Stone", 86);
    design.setup("Red", "Stone", 87);
    design.setup("Red", "Stone", 88);
    design.setup("Red", "Stone", 89);
    design.setup("Red", "Stone", 90);
    design.setup("Red", "Stone", 91);
    design.setup("Red", "Stone", 92);

    design.setup("Blue", "Stone", 93);
    design.setup("Blue", "Stone", 94);
    design.setup("Blue", "Stone", 95);
    design.setup("Blue", "Stone", 96);
    design.setup("Blue", "Stone", 97);
    design.setup("Blue", "Stone", 98);
    design.setup("Blue", "Stone", 99);
    design.setup("Blue", "Stone", 100);
    design.setup("Blue", "Stone", 101);
    design.setup("Blue", "Stone", 102);
    design.setup("Blue", "Stone", 103);
    design.setup("Blue", "Stone", 104);

    design.reserve("Blue", "Stone", 0);
    design.reserve("Red", "Stone", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(404, 403, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const red  = 0xFF1111;
    const blue = 0x1111FF;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', undefined, 'Bump', blue, 2.1);
    view.defPieceToken(0, 2, tokenPath, 'token.js', undefined, 'Bump', red, 2.1);

    view.setCamera(0, 0, 0, -105, 184, 190);

    view.defControl("ResControl", "2D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'windmill-dyzym.htm' : 'windmill-dyzym-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'windmill-dyzym-3d-board.htm' : 'windmill-dyzym-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a9", -168, -168, 42, 42, 0);
    view.defPosition("b9", -126, -168, 42, 42, 0);
    view.defPosition("c9", -84, -168, 42, 42, 0);
    view.defPosition("d9", -42, -168, 42, 42, 0);
    view.defPosition("e9", 0, -168, 42, 42, 0);
    view.defPosition("f9", 42, -168, 42, 42, 0);
    view.defPosition("g9", 84, -168, 42, 42, 0);
    view.defPosition("h9", 126, -168, 42, 42, 0);
    view.defPosition("i9", 168, -168, 42, 42, 0);
    view.defPosition("a8", -168, -126, 42, 42, 0);
    view.defPosition("b8", -126, -126, 42, 42, 0);
    view.defPosition("c8", -84, -126, 42, 42, 0);
    view.defPosition("d8", -42, -126, 42, 42, 0);
    view.defPosition("e8", 0, -126, 42, 42, 0);
    view.defPosition("f8", 42, -126, 42, 42, 0);
    view.defPosition("g8", 84, -126, 42, 42, 0);
    view.defPosition("h8", 126, -126, 42, 42, 0);
    view.defPosition("i8", 168, -126, 42, 42, 0);
    view.defPosition("a7", -168, -84, 42, 42, 0);
    view.defPosition("b7", -126, -84, 42, 42, 0);
    view.defPosition("c7", -84, -84, 42, 42, 0);
    view.defPosition("d7", -42, -84, 42, 42, 0);
    view.defPosition("e7", 0, -84, 42, 42, 0);
    view.defPosition("f7", 42, -84, 42, 42, 0);
    view.defPosition("g7", 84, -84, 42, 42, 0);
    view.defPosition("h7", 126, -84, 42, 42, 0);
    view.defPosition("i7", 168, -84, 42, 42, 0);
    view.defPosition("a6", -168, -42, 42, 42, 0);
    view.defPosition("b6", -126, -42, 42, 42, 0);
    view.defPosition("c6", -84, -42, 42, 42, 0);
    view.defPosition("d6", -42, -42, 42, 42, 0);
    view.defPosition("e6", 0, -42, 42, 42, 0);
    view.defPosition("f6", 42, -42, 42, 42, 0);
    view.defPosition("g6", 84, -42, 42, 42, 0);
    view.defPosition("h6", 126, -42, 42, 42, 0);
    view.defPosition("i6", 168, -42, 42, 42, 0);
    view.defPosition("a5", -168, 0, 42, 42, 0);
    view.defPosition("b5", -126, 0, 42, 42, 0);
    view.defPosition("c5", -84, 0, 42, 42, 0);
    view.defPosition("d5", -42, 0, 42, 42, 0);
    view.defPosition("e5", 0, 0, 42, 42, 0);
    view.defPosition("f5", 42, 0, 42, 42, 0);
    view.defPosition("g5", 84, 0, 42, 42, 0);
    view.defPosition("h5", 126, 0, 42, 42, 0);
    view.defPosition("i5", 168, 0, 42, 42, 0);
    view.defPosition("a4", -168, 42, 42, 42, 0);
    view.defPosition("b4", -126, 42, 42, 42, 0);
    view.defPosition("c4", -84, 42, 42, 42, 0);
    view.defPosition("d4", -42, 42, 42, 42, 0);
    view.defPosition("e4", 0, 42, 42, 42, 0);
    view.defPosition("f4", 42, 42, 42, 42, 0);
    view.defPosition("g4", 84, 42, 42, 42, 0);
    view.defPosition("h4", 126, 42, 42, 42, 0);
    view.defPosition("i4", 168, 42, 42, 42, 0);
    view.defPosition("a3", -168, 84, 42, 42, 0);
    view.defPosition("b3", -126, 84, 42, 42, 0);
    view.defPosition("c3", -84, 84, 42, 42, 0);
    view.defPosition("d3", -42, 84, 42, 42, 0);
    view.defPosition("e3", 0, 84, 42, 42, 0);
    view.defPosition("f3", 42, 84, 42, 42, 0);
    view.defPosition("g3", 84, 84, 42, 42, 0);
    view.defPosition("h3", 126, 84, 42, 42, 0);
    view.defPosition("i3", 168, 84, 42, 42, 0);
    view.defPosition("a2", -168, 126, 42, 42, 0);
    view.defPosition("b2", -126, 126, 42, 42, 0);
    view.defPosition("c2", -84, 126, 42, 42, 0);
    view.defPosition("d2", -42, 126, 42, 42, 0);
    view.defPosition("e2", 0, 126, 42, 42, 0);
    view.defPosition("f2", 42, 126, 42, 42, 0);
    view.defPosition("g2", 84, 126, 42, 42, 0);
    view.defPosition("h2", 126, 126, 42, 42, 0);
    view.defPosition("i2", 168, 126, 42, 42, 0);
    view.defPosition("a1", -168, 168, 42, 42, 0);
    view.defPosition("b1", -126, 168, 42, 42, 0);
    view.defPosition("c1", -84, 168, 42, 42, 0);
    view.defPosition("d1", -42, 168, 42, 42, 0);
    view.defPosition("e1", 0, 168, 42, 42, 0);
    view.defPosition("f1", 42, 168, 42, 42, 0);
    view.defPosition("g1", 84, 168, 42, 42, 0);
    view.defPosition("h1", 126, 168, 42, 42, 0);
    view.defPosition("i1", 168, 168, 42, 42, 0);

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
