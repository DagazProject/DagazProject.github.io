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

    design.addPlayer("You", [3, 2, 1, 0]);

    design.addPosition("a3", [3, 1, 0, 0]);
    design.addPosition("b3", [3, 1, -1, 0]);
    design.addPosition("c3", [3, 0, -1, 0]);
    design.addPosition("a2", [3, 1, 0, -3]);
    design.addPosition("b2", [3, 1, -1, -3]);
    design.addPosition("c2", [3, 0, -1, -3]);
    design.addPosition("a1", [0, 1, 0, -3]);
    design.addPosition("b1", [0, 1, -1, -3]);
    design.addPosition("c1", [0, 0, -1, -3]);

    design.addPiece("WRBGOY", 0);
    design.addPiece("WBORGY", 1);
    design.addPiece("WGROBY", 2);
    design.addPiece("WOGBRY", 3);
    design.addPiece("RWGBYO", 4);
    design.addPiece("RBWYGO", 5);
    design.addPiece("RGYWBO", 6);
    design.addPiece("RYBGWO", 7);
    design.addPiece("BWROYG", 8);
    design.addPiece("BRYWOG", 9);
    design.addPiece("BOWYRG", 10);
    design.addPiece("BYORWG", 11);
    design.addPiece("GWORYB", 12);
    design.addPiece("GRWYOB", 13);
    design.addPiece("GOYWRB", 14);
    design.addPiece("GYROWB", 15);
    design.addPiece("OWBGYR", 16);
    design.addPiece("OBYWGR", 17);
    design.addPiece("OGWYBR", 18);
    design.addPiece("OYGBWR", 19);
    design.addPiece("YRGBOW", 20);
    design.addPiece("YBROGW", 21);
    design.addPiece("YGORBW", 22);
    design.addPiece("YOBGRW", 23);

    design.setup("You", "WRBGOY", 6);
    design.setup("You", "WRBGOY", 3);
    design.setup("You", "WRBGOY", 0);
    design.setup("You", "WRBGOY", 7);
    design.setup("You", "WRBGOY", 4);
    design.setup("You", "WRBGOY", 1);
    design.setup("You", "WRBGOY", 8);
    design.setup("You", "WRBGOY", 5);
    design.setup("You", "WRBGOY", 2);
}

Dagaz.View.configure = function(view) {

    const W = 0xF0F0F0; // 1
    const R = 0xFF0000; // 2
    const B = 0x0000FF; // 3
    const G = 0x37B476; // 4
    const O = 0xFDA831; // 5
    const Y = 0xF2E825; // 6

    view.defPieceCube(0,  1, [W, R, B, G, O, Y]); // WRBGOY
    view.defPieceCube(1,  1, [W, B, O, R, G, Y]); // WBORGY
    view.defPieceCube(2,  1, [W, G, R, O, B, Y]); // WGROBY
    view.defPieceCube(3,  1, [W, O, G, B, R, Y]); // WOGBRY
    view.defPieceCube(4,  1, [R, W, G, B, Y, O]); // RWGBYO
    view.defPieceCube(5,  1, [R, B, W, Y, G, O]); // RBWYGO
    view.defPieceCube(6,  1, [R, G, Y, W, B, O]); // RGYWBO
    view.defPieceCube(7,  1, [R, Y, B, G, W, O]); // RYBGWO
    view.defPieceCube(8,  1, [B, W, R, O, Y, G]); // BWROYG
    view.defPieceCube(9,  1, [B, R, Y, W, O, G]); // BRYWOG
    view.defPieceCube(10, 1, [B, O, W, Y, R, G]); // BOWYRG
    view.defPieceCube(11, 1, [B, Y, O, R, W, G]); // BYORWG
    view.defPieceCube(12, 1, [G, W, O, R, Y, B]); // GWORYB
    view.defPieceCube(13, 1, [G, R, W, Y, O, B]); // GRWYOB
    view.defPieceCube(14, 1, [G, O, Y, W, R, B]); // GOYWRB
    view.defPieceCube(15, 1, [G, Y, R, O, W, B]); // GYROWB
    view.defPieceCube(16, 1, [O, W, B, G, Y, R]); // OWBGYR
    view.defPieceCube(17, 1, [O, B, Y, W, G, R]); // OBYWGR
    view.defPieceCube(18, 1, [O, G, W, Y, B, R]); // OGWYBR
    view.defPieceCube(19, 1, [O, Y, G, B, W, R]); // OYGBWR
    view.defPieceCube(20, 1, [Y, R, G, B, O, W]); // YRGBOW
    view.defPieceCube(21, 1, [Y, B, R, O, G, W]); // YBROGW
    view.defPieceCube(22, 1, [Y, G, O, R, B, W]); // YGORBW
    view.defPieceCube(23, 1, [Y, O, B, G, R, W]); // YOBGRW

    view.setCamera(0, 0, 0, 91, 228, 148);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.View.switchMenu, 1);
    view.defControl(Dagaz.Controller.viewOff ? ["ViewOffControl", "ViewOnControl"] : ["ViewOnControl", "ViewOffControl"], "Animate", true, Dagaz.Controller.switchView);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defSubControl(1, "R00", "", true, Dagaz.Controller.newGame);
    view.defSubControl(1, "R99", "", true, Dagaz.Controller.shuffleGame);
    view.defSubControl(1, "R01", "", true, Dagaz.Controller.loadGame, "?setup=3:1;20:1;3:1;23:1;0:1;23:1;3:1;20:1;3:1;&turn=0");

    view.defPosition("a3", -84, -84, 84, 84, 0);
    view.defPosition("b3", 0, -84, 84, 84, 0);
    view.defPosition("c3", 84, -84, 84, 84, 0);
    view.defPosition("a2", -84, 0, 84, 84, 0);
    view.defPosition("b2", 0, 0, 84, 84, 0);
    view.defPosition("c2", 84, 0, 84, 84, 0);
    view.defPosition("a1", -84, 84, 84, 84, 0);
    view.defPosition("b1", 0, 84, 84, 84, 0);
    view.defPosition("c1", 84, 84, 84, 84, 0);
}
