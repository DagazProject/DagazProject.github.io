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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("ko", "situation");

    design.addDirection("n");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("s");

    design.addPlayer("Black", [3, 2, 1, 0]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("fa2", [16, 0, 0, 12]);
    design.addPosition("fc2", [16, 0, 0, 12]);
    design.addPosition("fe2", [16, 0, 0, 12]);
    design.addPosition("fg2", [16, 0, 0, 12]);
    design.addPosition("fa4", [16, 0, 0, 12]);
    design.addPosition("fc4", [16, 0, 0, 12]);
    design.addPosition("fe4", [16, 0, 0, 12]);
    design.addPosition("fg4", [16, 0, 0, 12]);
    design.addPosition("fa6", [16, 0, 0, 12]);
    design.addPosition("fc6", [16, 0, 0, 12]);
    design.addPosition("fe6", [16, 0, 0, 12]);
    design.addPosition("fg6", [16, 0, 0, 12]);
    design.addPosition("ga1", [-12, 16, 0, 0]);
    design.addPosition("gc1", [-12, 16, 15, 0]);
    design.addPosition("ge1", [-12, 16, 15, 0]);
    design.addPosition("gg1", [-12, 0, 15, 0]);
    design.addPosition("ga3", [-12, 15, 0, -16]);
    design.addPosition("gc3", [-12, 15, 14, -16]);
    design.addPosition("ge3", [-12, 15, 14, -16]);
    design.addPosition("gg3", [-12, 0, 14, -16]);
    design.addPosition("ga5", [-12, 14, 0, -16]);
    design.addPosition("gc5", [-12, 14, 13, -16]);
    design.addPosition("ge5", [-12, 14, 13, -16]);
    design.addPosition("gg5", [-12, 0, 13, -16]);
    design.addPosition("ga7", [0, 13, 0, -16]);
    design.addPosition("gc7", [0, 13, 12, -16]);
    design.addPosition("ge7", [0, 13, 12, -16]);
    design.addPosition("gg7", [0, 0, 12, -16]);
    design.addPosition("hb1", [0, -15, -16, 0]);
    design.addPosition("hd1", [0, -15, -16, 0]);
    design.addPosition("hf1", [0, -15, -16, 0]);
    design.addPosition("hb3", [0, -14, -15, 0]);
    design.addPosition("hd3", [0, -14, -15, 0]);
    design.addPosition("hf3", [0, -14, -15, 0]);
    design.addPosition("hb5", [0, -13, -14, 0]);
    design.addPosition("hd5", [0, -13, -14, 0]);
    design.addPosition("hf5", [0, -13, -14, 0]);
    design.addPosition("hb7", [0, -12, -13, 0]);
    design.addPosition("hd7", [0, -12, -13, 0]);
    design.addPosition("hf7", [0, -12, -13, 0]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("fa2", -180, -120, 90, 90, -60);
    view.defPosition("fc2", -60, -120, 90, 90, -60);
    view.defPosition("fe2", 60, -120, 90, 90, -60);
    view.defPosition("fg2", 180, -120, 90, 90, -60);
    view.defPosition("fa4", -180, 0, 90, 90, -60);
    view.defPosition("fc4", -60, 0, 90, 90, -60);
    view.defPosition("fe4", 60, 0, 90, 90, -60);
    view.defPosition("fg4", 180, 0, 90, 90, -60);
    view.defPosition("fa6", -180, 120, 90, 90, -60);
    view.defPosition("fc6", -60, 120, 90, 90, -60);
    view.defPosition("fe6", 60, 120, 90, 90, -60);
    view.defPosition("fg6", 180, 120, 90, 90, -60);
    view.defPosition("ga1", -180, -180, 90, 90, 0);
    view.defPosition("gc1", -60, -180, 90, 90, 0);
    view.defPosition("ge1", 60, -180, 90, 90, 0);
    view.defPosition("gg1", 180, -180, 90, 90, 0);
    view.defPosition("ga3", -180, -60, 90, 90, 0);
    view.defPosition("gc3", -60, -60, 90, 90, 0);
    view.defPosition("ge3", 60, -60, 90, 90, 0);
    view.defPosition("gg3", 180, -60, 90, 90, 0);
    view.defPosition("ga5", -180, 60, 90, 90, 0);
    view.defPosition("gc5", -60, 60, 90, 90, 0);
    view.defPosition("ge5", 60, 60, 90, 90, 0);
    view.defPosition("gg5", 180, 60, 90, 90, 0);
    view.defPosition("ga7", -180, 180, 90, 90, 0);
    view.defPosition("gc7", -60, 180, 90, 90, 0);
    view.defPosition("ge7", 60, 180, 90, 90, 0);
    view.defPosition("gg7", 180, 180, 90, 90, 0);
    view.defPosition("hb1", -120, -180, 90, 90, 60);
    view.defPosition("hd1", 0, -180, 90, 90, 60);
    view.defPosition("hf1", 120, -180, 90, 90, 60);
    view.defPosition("hb3", -120, -60, 90, 90, 60);
    view.defPosition("hd3", 0, -60, 90, 90, 60);
    view.defPosition("hf3", 120, -60, 90, 90, 60);
    view.defPosition("hb5", -120, 60, 90, 90, 60);
    view.defPosition("hd5", 0, 60, 90, 90, 60);
    view.defPosition("hf5", 120, 60, 90, 90, 60);
    view.defPosition("hb7", -120, 180, 90, 90, 60);
    view.defPosition("hd7", 0, 180, 90, 90, 60);
    view.defPosition("hf7", 120, 180, 90, 90, 60);
}
