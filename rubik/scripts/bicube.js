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

function p(name) {
  return Dagaz.Model.stringToPos(name);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");
    design.addDirection("u");
    design.addDirection("d");

    design.addPlayer("You", [3, 2, 1, 0, 5, 4]);

    design.addPosition("a3", [3, 1, 0, 0, 9, 0]);
    design.addPosition("b3", [3, 1, -1, 0, 9, 0]);
    design.addPosition("c3", [3, 0, -1, 0, 9, 0]);
    design.addPosition("a2", [3, 1, 0, -3, 9, 0]);
    design.addPosition("b2", [3, 1, -1, -3, 9, 0]);
    design.addPosition("c2", [3, 0, -1, -3, 9, 0]);
    design.addPosition("a1", [0, 1, 0, -3, 9, 0]);
    design.addPosition("b1", [0, 1, -1, -3, 9, 0]);
    design.addPosition("c1", [0, 0, -1, -3, 9, 0]);
    design.addPosition("d3", [3, 1, 0, 0, 9, -9]);
    design.addPosition("e3", [3, 1, -1, 0, 9, -9]);
    design.addPosition("f3", [3, 0, -1, 0, 9, -9]);
    design.addPosition("d2", [3, 1, 0, -3, 9, -9]);
    design.addPosition("e2", [3, 1, -1, -3, 9, -9]);
    design.addPosition("f2", [3, 0, -1, -3, 9, -9]);
    design.addPosition("d1", [0, 1, 0, -3, 9, -9]);
    design.addPosition("e1", [0, 1, -1, -3, 9, -9]);
    design.addPosition("f1", [0, 0, -1, -3, 9, -9]);
    design.addPosition("g3", [3, 1, 0, 0, 0, -9]);
    design.addPosition("h3", [3, 1, -1, 0, 0, -9]);
    design.addPosition("i3", [3, 0, -1, 0, 0, -9]);
    design.addPosition("g2", [3, 1, 0, -3, 0, -9]);
    design.addPosition("h2", [3, 1, -1, -3, 0, -9]);
    design.addPosition("i2", [3, 0, -1, -3, 0, -9]);
    design.addPosition("g1", [0, 1, 0, -3, 0, -9]);
    design.addPosition("h1", [0, 1, -1, -3, 0, -9]);
    design.addPosition("i1", [0, 0, -1, -3, 0, -9]);

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

    design.setup("You", "WRBGOY", p('a1'), undefined, 1);
    design.setup("You", "WRBGOY", p('a2'), undefined, 10);
    design.setup("You", "WRBGOY", p('a3'), undefined, 11);
    design.setup("You", "WRBGOY", p('b1'), undefined, 2);
    design.setup("You", "WRBGOY", p('b2'), undefined, 12);
    design.setup("You", "WRBGOY", p('b3'), undefined, 12);
    design.setup("You", "WRBGOY", p('c1'), undefined, 3);
    design.setup("You", "WRBGOY", p('c2'), undefined, 7);
    design.setup("You", "WRBGOY", p('c3'), undefined, 7);
    design.setup("You", "WRBGOY", p('d1'), undefined, 1);
    design.setup("You", "WRBGOY", p('d2'), undefined, 10);
    design.setup("You", "WRBGOY", p('d3'), undefined, 11);
    design.setup("You", "WRBGOY", p('e1'), undefined, 2);
    design.setup("You", "WRBGOY", p('e3'), undefined, 12);
    design.setup("You", "WRBGOY", p('f1'), undefined, 3);
    design.setup("You", "WRBGOY", p('f2'), undefined, 8);
    design.setup("You", "WRBGOY", p('f3'), undefined, 8);
    design.setup("You", "WRBGOY", p('g1'), undefined, 4);
    design.setup("You", "WRBGOY", p('g2'), undefined, 5);
    design.setup("You", "WRBGOY", p('g3'), undefined, 6);
    design.setup("You", "WRBGOY", p('h1'), undefined, 4);
    design.setup("You", "WRBGOY", p('h2'), undefined, 5);
    design.setup("You", "WRBGOY", p('h3'), undefined, 6);
    design.setup("You", "WRBGOY", p('i1'), undefined, 13);
    design.setup("You", "WRBGOY", p('i2'), undefined, 9);
    design.setup("You", "WRBGOY", p('i3'), undefined, 9);
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

    view.defPosition("a3", -84, -84, 84, 84, -84);
    view.defPosition("b3", 0, -84, 84, 84, -84);
    view.defPosition("c3", 84, -84, 84, 84, -84);
    view.defPosition("a2", -84, 0, 84, 84, -84);
    view.defPosition("b2", 0, 0, 84, 84, -84);
    view.defPosition("c2", 84, 0, 84, 84, -84);
    view.defPosition("a1", -84, 84, 84, 84, -84);
    view.defPosition("b1", 0, 84, 84, 84, -84);
    view.defPosition("c1", 84, 84, 84, 84, -84);

    view.defPosition("d3", -84, -84, 84, 84, 0);
    view.defPosition("e3", 0, -84, 84, 84, 0);
    view.defPosition("f3", 84, -84, 84, 84, 0);
    view.defPosition("d2", -84, 0, 84, 84, 0);
    view.defPosition("e2", 0, 0, 84, 84, 0);
    view.defPosition("f2", 84, 0, 84, 84, 0);
    view.defPosition("d1", -84, 84, 84, 84, 0);
    view.defPosition("e1", 0, 84, 84, 84, 0);
    view.defPosition("f1", 84, 84, 84, 84, 0);

    view.defPosition("g3", -84, -84, 84, 84, 84);
    view.defPosition("h3", 0, -84, 84, 84, 84);
    view.defPosition("i3", 84, -84, 84, 84, 84);
    view.defPosition("g2", -84, 0, 84, 84, 84);
    view.defPosition("h2", 0, 0, 84, 84, 84);
    view.defPosition("i2", 84, 0, 84, 84, 84);
    view.defPosition("g1", -84, 84, 84, 84, 84);
    view.defPosition("h1", 0, 84, 84, 84, 84);
    view.defPosition("i1", 84, 84, 84, 84, 84);
}
