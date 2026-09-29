Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2.5;
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

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a11", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b11", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("c11", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("d11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e11", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("f11", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("g11", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("h11", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i11", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("j11", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("k11", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("a10", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b10", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c10", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e10", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("f10", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g10", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i10", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("j10", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k10", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a9", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b9", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("c9", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("f9", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("g9", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("j9", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("k9", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b7", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("c7", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("j7", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("k7", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("a6", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c6", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("d6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i6", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("j6", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k6", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a5", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b5", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("c5", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("d5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("j5", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("k5", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b3", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("c3", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("d3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e3", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("f3", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("g3", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("h3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i3", [12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("j3", [12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("k3", [0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("a2", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c2", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("f2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g2", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("j2", [12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k2", [0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("c1", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -12, -11]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("k1", [0, 0, 0, 0, -1, 0, -12, -11]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);

    design.setup("White", "King", 5);
    design.setup("Black", "King", 115);
}

Dagaz.View.configure = function(view) {
    const opacity = 0.3;
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, -270, -270);
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, -270, 0);
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, -270, 270);
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, 0, -270);
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, 0, 270);
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, 270, -270);
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, 270, 0);
    view.defBoard3D(240, 240, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "WBoard", opacity, 270, 270);

    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'king', white);
    view.defPieceModel(0, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, -109, 215, 155);

    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move{move}", false, Dagaz.Controller.redo);

    view.defPosition("a11", -340, -340, 68, 68, 0);
    view.defPosition("b11", -272, -340, 68, 68, 0);
    view.defPosition("c11", -204, -340, 68, 68, 0);
    view.defPosition("d11", -136, -340, 68, 68, 0);
    view.defPosition("e11", -68, -340, 68, 68, 0);
    view.defPosition("f11", 0, -340, 68, 68, 0);
    view.defPosition("g11", 68, -340, 68, 68, 0);
    view.defPosition("h11", 136, -340, 68, 68, 0);
    view.defPosition("i11", 204, -340, 68, 68, 0);
    view.defPosition("j11", 272, -340, 68, 68, 0);
    view.defPosition("k11", 340, -340, 68, 68, 0);
    view.defPosition("a10", -340, -272, 68, 68, 0);
    view.defPosition("b10", -272, -272, 68, 68, 0);
    view.defPosition("c10", -204, -272, 68, 68, 0);
    view.defPosition("d10", -136, -272, 68, 68, 0);
    view.defPosition("e10", -68, -272, 68, 68, 0);
    view.defPosition("f10", 0, -272, 68, 68, 0);
    view.defPosition("g10", 68, -272, 68, 68, 0);
    view.defPosition("h10", 136, -272, 68, 68, 0);
    view.defPosition("i10", 204, -272, 68, 68, 0);
    view.defPosition("j10", 272, -272, 68, 68, 0);
    view.defPosition("k10", 340, -272, 68, 68, 0);
    view.defPosition("a9", -340, -204, 68, 68, 0);
    view.defPosition("b9", -272, -204, 68, 68, 0);
    view.defPosition("c9", -204, -204, 68, 68, 0);
    view.defPosition("d9", -136, -204, 68, 68, 0);
    view.defPosition("e9", -68, -204, 68, 68, 0);
    view.defPosition("f9", 0, -204, 68, 68, 0);
    view.defPosition("g9", 68, -204, 68, 68, 0);
    view.defPosition("h9", 136, -204, 68, 68, 0);
    view.defPosition("i9", 204, -204, 68, 68, 0);
    view.defPosition("j9", 272, -204, 68, 68, 0);
    view.defPosition("k9", 340, -204, 68, 68, 0);
    view.defPosition("a8", -340, -136, 68, 68, 0);
    view.defPosition("b8", -272, -136, 68, 68, 0);
    view.defPosition("c8", -204, -136, 68, 68, 0);
    view.defPosition("d8", -136, -136, 68, 68, 0);
    view.defPosition("e8", -68, -136, 68, 68, 0);
    view.defPosition("f8", 0, -136, 68, 68, 0);
    view.defPosition("g8", 68, -136, 68, 68, 0);
    view.defPosition("h8", 136, -136, 68, 68, 0);
    view.defPosition("i8", 204, -136, 68, 68, 0);
    view.defPosition("j8", 272, -136, 68, 68, 0);
    view.defPosition("k8", 340, -136, 68, 68, 0);
    view.defPosition("a7", -340, -68, 68, 68, 0);
    view.defPosition("b7", -272, -68, 68, 68, 0);
    view.defPosition("c7", -204, -68, 68, 68, 0);
    view.defPosition("d7", -136, -68, 68, 68, 0);
    view.defPosition("e7", -68, -68, 68, 68, 0);
    view.defPosition("f7", 0, -68, 68, 68, 0);
    view.defPosition("g7", 68, -68, 68, 68, 0);
    view.defPosition("h7", 136, -68, 68, 68, 0);
    view.defPosition("i7", 204, -68, 68, 68, 0);
    view.defPosition("j7", 272, -68, 68, 68, 0);
    view.defPosition("k7", 340, -68, 68, 68, 0);
    view.defPosition("a6", -340, 0, 68, 68, 0);
    view.defPosition("b6", -272, 0, 68, 68, 0);
    view.defPosition("c6", -204, 0, 68, 68, 0);
    view.defPosition("d6", -136, 0, 68, 68, 0);
    view.defPosition("e6", -68, 0, 68, 68, 0);
    view.defPosition("f6", 0, 0, 68, 68, 0);
    view.defPosition("g6", 68, 0, 68, 68, 0);
    view.defPosition("h6", 136, 0, 68, 68, 0);
    view.defPosition("i6", 204, 0, 68, 68, 0);
    view.defPosition("j6", 272, 0, 68, 68, 0);
    view.defPosition("k6", 340, 0, 68, 68, 0);
    view.defPosition("a5", -340, 68, 68, 68, 0);
    view.defPosition("b5", -272, 68, 68, 68, 0);
    view.defPosition("c5", -204, 68, 68, 68, 0);
    view.defPosition("d5", -136, 68, 68, 68, 0);
    view.defPosition("e5", -68, 68, 68, 68, 0);
    view.defPosition("f5", 0, 68, 68, 68, 0);
    view.defPosition("g5", 68, 68, 68, 68, 0);
    view.defPosition("h5", 136, 68, 68, 68, 0);
    view.defPosition("i5", 204, 68, 68, 68, 0);
    view.defPosition("j5", 272, 68, 68, 68, 0);
    view.defPosition("k5", 340, 68, 68, 68, 0);
    view.defPosition("a4", -340, 136, 68, 68, 0);
    view.defPosition("b4", -272, 136, 68, 68, 0);
    view.defPosition("c4", -204, 136, 68, 68, 0);
    view.defPosition("d4", -136, 136, 68, 68, 0);
    view.defPosition("e4", -68, 136, 68, 68, 0);
    view.defPosition("f4", 0, 136, 68, 68, 0);
    view.defPosition("g4", 68, 136, 68, 68, 0);
    view.defPosition("h4", 136, 136, 68, 68, 0);
    view.defPosition("i4", 204, 136, 68, 68, 0);
    view.defPosition("j4", 272, 136, 68, 68, 0);
    view.defPosition("k4", 340, 136, 68, 68, 0);
    view.defPosition("a3", -340, 204, 68, 68, 0);
    view.defPosition("b3", -272, 204, 68, 68, 0);
    view.defPosition("c3", -204, 204, 68, 68, 0);
    view.defPosition("d3", -136, 204, 68, 68, 0);
    view.defPosition("e3", -68, 204, 68, 68, 0);
    view.defPosition("f3", 0, 204, 68, 68, 0);
    view.defPosition("g3", 68, 204, 68, 68, 0);
    view.defPosition("h3", 136, 204, 68, 68, 0);
    view.defPosition("i3", 204, 204, 68, 68, 0);
    view.defPosition("j3", 272, 204, 68, 68, 0);
    view.defPosition("k3", 340, 204, 68, 68, 0);
    view.defPosition("a2", -340, 272, 68, 68, 0);
    view.defPosition("b2", -272, 272, 68, 68, 0);
    view.defPosition("c2", -204, 272, 68, 68, 0);
    view.defPosition("d2", -136, 272, 68, 68, 0);
    view.defPosition("e2", -68, 272, 68, 68, 0);
    view.defPosition("f2", 0, 272, 68, 68, 0);
    view.defPosition("g2", 68, 272, 68, 68, 0);
    view.defPosition("h2", 136, 272, 68, 68, 0);
    view.defPosition("i2", 204, 272, 68, 68, 0);
    view.defPosition("j2", 272, 272, 68, 68, 0);
    view.defPosition("k2", 340, 272, 68, 68, 0);
    view.defPosition("a1", -340, 340, 68, 68, 0);
    view.defPosition("b1", -272, 340, 68, 68, 0);
    view.defPosition("c1", -204, 340, 68, 68, 0);
    view.defPosition("d1", -136, 340, 68, 68, 0);
    view.defPosition("e1", -68, 340, 68, 68, 0);
    view.defPosition("f1", 0, 340, 68, 68, 0);
    view.defPosition("g1", 68, 340, 68, 68, 0);
    view.defPosition("h1", 136, 340, 68, 68, 0);
    view.defPosition("i1", 204, 340, 68, 68, 0);
    view.defPosition("j1", 272, 340, 68, 68, 0);
    view.defPosition("k1", 340, 340, 68, 68, 0);
}
