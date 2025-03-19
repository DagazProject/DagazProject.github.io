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

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("ad4", [0, 2, 1, 0]);
    design.addPosition("bc4", [3, -1, 0, 2]);
    design.addPosition("be4", [4, 0, -2, 3]);
    design.addPosition("cc3", [-2, 6, 4, 0]);
    design.addPosition("cc5", [0, 6, 4, -3]);
    design.addPosition("ce3", [-3, 6, 4, 0]);
    design.addPosition("ce5", [0, 6, 4, -4]);
    design.addPosition("db3", [7, -4, 0, 6]);
    design.addPosition("db5", [7, -4, 0, 6]);
    design.addPosition("dd3", [8, -4, -6, 7]);
    design.addPosition("dd5", [8, -4, -6, 7]);
    design.addPosition("df3", [9, 0, -6, 8]);
    design.addPosition("df5", [9, 0, -6, 8]);
    design.addPosition("eb2", [-6, 10, 9, 0]);
    design.addPosition("eb4", [-6, 13, 12, -7]);
    design.addPosition("eb6", [0, 16, 15, -7]);
    design.addPosition("ed2", [-7, 8, 7, 0]);
    design.addPosition("ed4", [-7, 11, 10, -8]);
    design.addPosition("ed6", [0, 14, 13, -8]);
    design.addPosition("ef2", [-8, 6, 5, 0]);
    design.addPosition("ef4", [-8, 9, 8, -9]);
    design.addPosition("ef6", [0, 12, 11, -9]);
    design.addPosition("fa2", [16, -9, 0, 12]);
    design.addPosition("fc2", [16, -7, -10, 12]);
    design.addPosition("fe2", [16, -5, -8, 12]);
    design.addPosition("fg2", [16, 0, -6, 12]);
    design.addPosition("fa4", [16, -12, 0, 12]);
    design.addPosition("fc4", [16, -10, -13, 12]);
    design.addPosition("fe4", [16, -8, -11, 12]);
    design.addPosition("fg4", [16, 0, -9, 12]);
    design.addPosition("fa6", [16, -15, 0, 12]);
    design.addPosition("fc6", [16, -13, -16, 12]);
    design.addPosition("fe6", [16, -11, -14, 12]);
    design.addPosition("fg6", [16, 0, -12, 12]);
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
    design.addPosition("hb1", [12, -15, -16, 0]);
    design.addPosition("hd1", [12, -15, -16, 0]);
    design.addPosition("hf1", [12, -15, -16, 0]);
    design.addPosition("hb3", [12, -14, -15, 9]);
    design.addPosition("hd3", [12, -14, -15, 9]);
    design.addPosition("hf3", [12, -14, -15, 9]);
    design.addPosition("hb5", [12, -13, -14, 9]);
    design.addPosition("hd5", [12, -13, -14, 9]);
    design.addPosition("hf5", [12, -13, -14, 9]);
    design.addPosition("hb7", [0, -12, -13, 9]);
    design.addPosition("hd7", [0, -12, -13, 9]);
    design.addPosition("hf7", [0, -12, -13, 9]);
    design.addPosition("ib2", [-9, 9, 0, -12]);
    design.addPosition("id2", [-9, 9, 8, -12]);
    design.addPosition("if2", [-9, 0, 8, -12]);
    design.addPosition("ib4", [-9, 8, 0, -12]);
    design.addPosition("id4", [-9, 8, 7, -12]);
    design.addPosition("if4", [-9, 0, 7, -12]);
    design.addPosition("ib6", [-9, 7, 0, -12]);
    design.addPosition("id6", [-9, 7, 6, -12]);
    design.addPosition("if6", [-9, 0, 6, -12]);
    design.addPosition("jc2", [6, -8, -9, 0]);
    design.addPosition("je2", [6, -8, -9, 0]);
    design.addPosition("jc4", [6, -7, -8, 4]);
    design.addPosition("je4", [6, -7, -8, 4]);
    design.addPosition("jc6", [0, -6, -7, 4]);
    design.addPosition("je6", [0, -6, -7, 4]);
    design.addPosition("kc3", [-4, 4, 0, -6]);
    design.addPosition("ke3", [-4, 0, 3, -6]);
    design.addPosition("kc5", [-4, 3, 0, -6]);
    design.addPosition("ke5", [-4, 0, 2, -6]);
    design.addPosition("ld3", [2, -3, -4, 0]);
    design.addPosition("ld5", [0, -2, -3, 1]);
    design.addPosition("md4", [-1, 0, 0, -2]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.setCamera(0, 0, 0, 98, 113, 245);

    view.defControl("InfoControl", "1999 Walt McKibben", true, Dagaz.Controller.open, 'http://www.segerman.org/diamond/');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("ad4", 0, 0, 90, 90, -252);
    view.defPosition("bc4", -60, 0, 90, 90, -210);
    view.defPosition("be4", 60, 0, 90, 90, -210);
    view.defPosition("cc3", -60, -60, 90, 90, -168);
    view.defPosition("cc5", -60, 60, 90, 90, -168);
    view.defPosition("ce3", 60, -60, 90, 90, -168);
    view.defPosition("ce5", 60, 60, 90, 90, -168);
    view.defPosition("db3", -120, -60, 90, 90, -126);
    view.defPosition("db5", -120, 60, 90, 90, -126);
    view.defPosition("dd3", 0, -60, 90, 90, -126);
    view.defPosition("dd5", 0, 60, 90, 90, -126);
    view.defPosition("df3", 120, -60, 90, 90, -126);
    view.defPosition("df5", 120, 60, 90, 90, -126);
    view.defPosition("eb2", -120, -120, 90, 90, -84);
    view.defPosition("eb4", -120, 0, 90, 90, -84);
    view.defPosition("eb6", -120, 120, 90, 90, -84);
    view.defPosition("ed2", 0, -120, 90, 90, -84);
    view.defPosition("ed4", 0, 0, 90, 90, -84);
    view.defPosition("ed6", 0, 120, 90, 90, -84);
    view.defPosition("ef2", 120, -120, 90, 90, -84);
    view.defPosition("ef4", 120, 0, 90, 90, -84);
    view.defPosition("ef6", 120, 120, 90, 90, -84);
    view.defPosition("fa2", -180, -120, 90, 90, -42);
    view.defPosition("fc2", -60, -120, 90, 90, -42);
    view.defPosition("fe2", 60, -120, 90, 90, -42);
    view.defPosition("fg2", 180, -120, 90, 90, -42);
    view.defPosition("fa4", -180, 0, 90, 90, -42);
    view.defPosition("fc4", -60, 0, 90, 90, -42);
    view.defPosition("fe4", 60, 0, 90, 90, -42);
    view.defPosition("fg4", 180, 0, 90, 90, -42);
    view.defPosition("fa6", -180, 120, 90, 90, -42);
    view.defPosition("fc6", -60, 120, 90, 90, -42);
    view.defPosition("fe6", 60, 120, 90, 90, -42);
    view.defPosition("fg6", 180, 120, 90, 90, -42);
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
    view.defPosition("hb1", -120, -180, 90, 90, 42);
    view.defPosition("hd1", 0, -180, 90, 90, 42);
    view.defPosition("hf1", 120, -180, 90, 90, 42);
    view.defPosition("hb3", -120, -60, 90, 90, 42);
    view.defPosition("hd3", 0, -60, 90, 90, 42);
    view.defPosition("hf3", 120, -60, 90, 90, 42);
    view.defPosition("hb5", -120, 60, 90, 90, 42);
    view.defPosition("hd5", 0, 60, 90, 90, 42);
    view.defPosition("hf5", 120, 60, 90, 90, 42);
    view.defPosition("hb7", -120, 180, 90, 90, 42);
    view.defPosition("hd7", 0, 180, 90, 90, 42);
    view.defPosition("hf7", 120, 180, 90, 90, 42);
    view.defPosition("ib2", -120, -120, 90, 90, 84);
    view.defPosition("id2", 0, -120, 90, 90, 84);
    view.defPosition("if2", 120, -120, 90, 90, 84);
    view.defPosition("ib4", -120, 0, 90, 90, 84);
    view.defPosition("id4", 0, 0, 90, 90, 84);
    view.defPosition("if4", 120, 0, 90, 90, 84);
    view.defPosition("ib6", -120, 120, 90, 90, 84);
    view.defPosition("id6", 0, 120, 90, 90, 84);
    view.defPosition("if6", 120, 120, 90, 90, 84);
    view.defPosition("jc2", -60, -120, 90, 90, 126);
    view.defPosition("je2", 60, -120, 90, 90, 126);
    view.defPosition("jc4", -60, 0, 90, 90, 126);
    view.defPosition("je4", 60, 0, 90, 90, 126);
    view.defPosition("jc6", -60, 120, 90, 90, 126);
    view.defPosition("je6", 60, 120, 90, 90, 126);
    view.defPosition("kc3", -60, -60, 90, 90, 168);
    view.defPosition("ke3", 60, -60, 90, 90, 168);
    view.defPosition("kc5", -60, 60, 90, 90, 168);
    view.defPosition("ke5", 60, 60, 90, 90, 168);
    view.defPosition("ld3", 0, -60, 90, 90, 210);
    view.defPosition("ld5", 0, 60, 90, 90, 210);
    view.defPosition("md4", 0, 0, 90, 90, 252);
}
