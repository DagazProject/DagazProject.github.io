Dagaz.Controller.persistense = "none";

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

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");
    design.addDirection("u");
    design.addDirection("d");

    design.addPlayer("You", [3, 2, 1, 0, 5, 4]);

    design.addPosition("a2", [2, 1, 0, 0, 4, 0]);
    design.addPosition("b2", [2, 0, -1, 0, 4, 0]);
    design.addPosition("a1", [0, 1, 0, -2, 4, 0]);
    design.addPosition("b1", [0, 0, -1, -2, 4, 0]);
    design.addPosition("c2", [2, 1, 0, 0, 0, -4]);
    design.addPosition("d2", [2, 0, -1, 0, 0, -4]);
    design.addPosition("c1", [0, 1, 0, -2, 0, -4]);
    design.addPosition("d1", [0, 0, -1, -2, 0, -4]);

    design.addPiece("P-123", 0);
    design.addPiece("P-623", 1);
    design.addPiece("P-153", 2);
    design.addPiece("P-653", 3);
    design.addPiece("P-124", 4);
    design.addPiece("P-624", 5);
    design.addPiece("P-154", 6);
    design.addPiece("P-654", 7);

    design.setup("You", "P-123", 2);
    design.setup("You", "P-623", 0);
    design.setup("You", "P-153", 3);
    design.setup("You", "P-653", 1);
    design.setup("You", "P-124", 6);
    design.setup("You", "P-624", 4);
    design.setup("You", "P-154", 7);
    design.setup("You", "P-654", 5);
}

Dagaz.View.configure = function(view) {

    const G = 0xE4CB12; // 0xEEEEEE;

    view.defPieceCube(0,  1, [G, G, G, G, G, G], 46, 34, 52, 19, -25, 16, true);
    view.defPieceCube(1,  1, [G, G, G, G, G, G], 46, 96, 52, 19, -6, 16, true);
    view.defPieceCube(2,  1, [G, G, G, G, G, G], 84, 34, 52, 0, -25, 16, true);
    view.defPieceCube(3,  1, [G, G, G, G, G, G], 84, 96, 52, 0, -6, 16, true);
    view.defPieceCube(4,  1, [G, G, G, G, G, G], 46, 34, 78, 19, -25, -3, true);
    view.defPieceCube(5,  1, [G, G, G, G, G, G], 46, 96, 78, 19, -6, -3, true);
    view.defPieceCube(6,  1, [G, G, G, G, G, G], 84, 34, 78, 0, -25, -3, true);
    view.defPieceCube(7,  1, [G, G, G, G, G, G], 84, 96, 78, 0, -6, -3, true);

    view.setCamera(0, 0, 0, 91, 228, 148);

    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame /*Dagaz.View.switchMenu*/, 1);
    view.defControl(Dagaz.Controller.viewOff ? ["ViewOffControl", "ViewOnControl"] : ["ViewOnControl", "ViewOffControl"], "Animate", true, Dagaz.Controller.switchView);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defSubControl(1, "R00", "", true, Dagaz.Controller.newGame);
    view.defSubControl(1, "R99", "", true, Dagaz.Controller.shuffleGame);

    view.defPosition("a2", -42, -42, 84, 84, -42);
    view.defPosition("b2", 42, -42, 84, 84, -42);
    view.defPosition("a1", -42, 42, 84, 84, -42);
    view.defPosition("b1", 42, 42, 84, 84, -42);

    view.defPosition("c2", -42, -42, 84, 84, 42);
    view.defPosition("d2", 42, -42, 84, 84, 42);
    view.defPosition("c1", -42, 42, 84, 84, 42);
    view.defPosition("d1", 42, 42, 84, 84, 42);
}
