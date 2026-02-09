Dagaz.View.NO_EDGES = true;

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

    design.addPosition("a11", [11, 1, 0, 0]);
    design.addPosition("b11", [11, 1, -1, 0]);
    design.addPosition("c11", [11, 1, -1, 0]);
    design.addPosition("d11", [11, 1, -1, 0]);
    design.addPosition("e11", [11, 1, -1, 0]);
    design.addPosition("f11", [11, 1, -1, 0]);
    design.addPosition("g11", [11, 1, -1, 0]);
    design.addPosition("h11", [11, 1, -1, 0]);
    design.addPosition("i11", [11, 1, -1, 0]);
    design.addPosition("j11", [11, 1, -1, 0]);
    design.addPosition("k11", [11, 0, -1, 0]);
    design.addPosition("a10", [11, 1, 0, -11]);
    design.addPosition("b10", [11, 1, -1, -11]);
    design.addPosition("c10", [11, 1, -1, -11]);
    design.addPosition("d10", [11, 1, -1, -11]);
    design.addPosition("e10", [11, 1, -1, -11]);
    design.addPosition("f10", [11, 1, -1, -11]);
    design.addPosition("g10", [11, 1, -1, -11]);
    design.addPosition("h10", [11, 1, -1, -11]);
    design.addPosition("i10", [11, 1, -1, -11]);
    design.addPosition("j10", [11, 1, -1, -11]);
    design.addPosition("k10", [11, 0, -1, -11]);
    design.addPosition("a9", [11, 1, 0, -11]);
    design.addPosition("b9", [11, 1, -1, -11]);
    design.addPosition("c9", [11, 1, -1, -11]);
    design.addPosition("d9", [11, 1, -1, -11]);
    design.addPosition("e9", [11, 1, -1, -11]);
    design.addPosition("f9", [11, 1, -1, -11]);
    design.addPosition("g9", [11, 1, -1, -11]);
    design.addPosition("h9", [11, 1, -1, -11]);
    design.addPosition("i9", [11, 1, -1, -11]);
    design.addPosition("j9", [11, 1, -1, -11]);
    design.addPosition("k9", [11, 0, -1, -11]);
    design.addPosition("a8", [11, 1, 0, -11]);
    design.addPosition("b8", [11, 1, -1, -11]);
    design.addPosition("c8", [11, 1, -1, -11]);
    design.addPosition("d8", [11, 1, -1, -11]);
    design.addPosition("e8", [11, 1, -1, -11]);
    design.addPosition("f8", [11, 1, -1, -11]);
    design.addPosition("g8", [11, 1, -1, -11]);
    design.addPosition("h8", [11, 1, -1, -11]);
    design.addPosition("i8", [11, 1, -1, -11]);
    design.addPosition("j8", [11, 1, -1, -11]);
    design.addPosition("k8", [11, 0, -1, -11]);
    design.addPosition("a7", [11, 1, 0, -11]);
    design.addPosition("b7", [11, 1, -1, -11]);
    design.addPosition("c7", [11, 1, -1, -11]);
    design.addPosition("d7", [11, 1, -1, -11]);
    design.addPosition("e7", [11, 1, -1, -11]);
    design.addPosition("f7", [11, 1, -1, -11]);
    design.addPosition("g7", [11, 1, -1, -11]);
    design.addPosition("h7", [11, 1, -1, -11]);
    design.addPosition("i7", [11, 1, -1, -11]);
    design.addPosition("j7", [11, 1, -1, -11]);
    design.addPosition("k7", [11, 0, -1, -11]);
    design.addPosition("a6", [11, 1, 0, -11]);
    design.addPosition("b6", [11, 1, -1, -11]);
    design.addPosition("c6", [11, 1, -1, -11]);
    design.addPosition("d6", [11, 1, -1, -11]);
    design.addPosition("e6", [11, 1, -1, -11]);
    design.addPosition("f6", [11, 1, -1, -11]);
    design.addPosition("g6", [11, 1, -1, -11]);
    design.addPosition("h6", [11, 1, -1, -11]);
    design.addPosition("i6", [11, 1, -1, -11]);
    design.addPosition("j6", [11, 1, -1, -11]);
    design.addPosition("k6", [11, 0, -1, -11]);
    design.addPosition("a5", [11, 1, 0, -11]);
    design.addPosition("b5", [11, 1, -1, -11]);
    design.addPosition("c5", [11, 1, -1, -11]);
    design.addPosition("d5", [11, 1, -1, -11]);
    design.addPosition("e5", [11, 1, -1, -11]);
    design.addPosition("f5", [11, 1, -1, -11]);
    design.addPosition("g5", [11, 1, -1, -11]);
    design.addPosition("h5", [11, 1, -1, -11]);
    design.addPosition("i5", [11, 1, -1, -11]);
    design.addPosition("j5", [11, 1, -1, -11]);
    design.addPosition("k5", [11, 0, -1, -11]);
    design.addPosition("a4", [11, 1, 0, -11]);
    design.addPosition("b4", [11, 1, -1, -11]);
    design.addPosition("c4", [11, 1, -1, -11]);
    design.addPosition("d4", [11, 1, -1, -11]);
    design.addPosition("e4", [11, 1, -1, -11]);
    design.addPosition("f4", [11, 1, -1, -11]);
    design.addPosition("g4", [11, 1, -1, -11]);
    design.addPosition("h4", [11, 1, -1, -11]);
    design.addPosition("i4", [11, 1, -1, -11]);
    design.addPosition("j4", [11, 1, -1, -11]);
    design.addPosition("k4", [11, 0, -1, -11]);
    design.addPosition("a3", [11, 1, 0, -11]);
    design.addPosition("b3", [11, 1, -1, -11]);
    design.addPosition("c3", [11, 1, -1, -11]);
    design.addPosition("d3", [11, 1, -1, -11]);
    design.addPosition("e3", [11, 1, -1, -11]);
    design.addPosition("f3", [11, 1, -1, -11]);
    design.addPosition("g3", [11, 1, -1, -11]);
    design.addPosition("h3", [11, 1, -1, -11]);
    design.addPosition("i3", [11, 1, -1, -11]);
    design.addPosition("j3", [11, 1, -1, -11]);
    design.addPosition("k3", [11, 0, -1, -11]);
    design.addPosition("a2", [11, 1, 0, -11]);
    design.addPosition("b2", [11, 1, -1, -11]);
    design.addPosition("c2", [11, 1, -1, -11]);
    design.addPosition("d2", [11, 1, -1, -11]);
    design.addPosition("e2", [11, 1, -1, -11]);
    design.addPosition("f2", [11, 1, -1, -11]);
    design.addPosition("g2", [11, 1, -1, -11]);
    design.addPosition("h2", [11, 1, -1, -11]);
    design.addPosition("i2", [11, 1, -1, -11]);
    design.addPosition("j2", [11, 1, -1, -11]);
    design.addPosition("k2", [11, 0, -1, -11]);
    design.addPosition("a1", [0, 1, 0, -11]);
    design.addPosition("b1", [0, 1, -1, -11]);
    design.addPosition("c1", [0, 1, -1, -11]);
    design.addPosition("d1", [0, 1, -1, -11]);
    design.addPosition("e1", [0, 1, -1, -11]);
    design.addPosition("f1", [0, 1, -1, -11]);
    design.addPosition("g1", [0, 1, -1, -11]);
    design.addPosition("h1", [0, 1, -1, -11]);
    design.addPosition("i1", [0, 1, -1, -11]);
    design.addPosition("j1", [0, 1, -1, -11]);
    design.addPosition("k1", [0, 0, -1, -11]);

    design.addPiece("H", 0);

    design.setup("You", "H", 0);
    design.setup("You", "H", 1);
    design.setup("You", "H", 2);
    design.setup("You", "H", 3);
    design.setup("You", "H", 4);
    design.setup("You", "H", 5);
    design.setup("You", "H", 6);
    design.setup("You", "H", 7);
    design.setup("You", "H", 8);
    design.setup("You", "H", 9);
    design.setup("You", "H", 10);
    design.setup("You", "H", 11);
    design.setup("You", "H", 15);
    design.setup("You", "H", 21);
    design.setup("You", "H", 22);
    design.setup("You", "H", 24);
    design.setup("You", "H", 25);
    design.setup("You", "H", 26);
    design.setup("You", "H", 27);
    design.setup("You", "H", 28);
    design.setup("You", "H", 30);
    design.setup("You", "H", 31);
    design.setup("You", "H", 32);
    design.setup("You", "H", 33);
    design.setup("You", "H", 41);
    design.setup("You", "H", 43);
    design.setup("You", "H", 44);
    design.setup("You", "H", 46);
    design.setup("You", "H", 47);
    design.setup("You", "H", 48);
    design.setup("You", "H", 49);
    design.setup("You", "H", 50);
    design.setup("You", "H", 51);
    design.setup("You", "H", 52);
    design.setup("You", "H", 54);
    design.setup("You", "H", 55);
    design.setup("You", "H", 57);
    design.setup("You", "H", 63);
    design.setup("You", "H", 65);
    design.setup("You", "H", 66);
    design.setup("You", "H", 68);
    design.setup("You", "H", 70);
    design.setup("You", "H", 71);
    design.setup("You", "H", 72);
    design.setup("You", "H", 74);
    design.setup("You", "H", 76);
    design.setup("You", "H", 77);
    design.setup("You", "H", 81);
    design.setup("You", "H", 87);
    design.setup("You", "H", 88);
    design.setup("You", "H", 89);
    design.setup("You", "H", 90);
    design.setup("You", "H", 92);
    design.setup("You", "H", 94);
    design.setup("You", "H", 95);
    design.setup("You", "H", 96);
    design.setup("You", "H", 97);
    design.setup("You", "H", 98);
    design.setup("You", "H", 99);
    design.setup("You", "H", 103);
    design.setup("You", "H", 109);
    design.setup("You", "H", 110);
    design.setup("You", "H", 111);
    design.setup("You", "H", 112);
    design.setup("You", "H", 113);
    design.setup("You", "H", 114);
    design.setup("You", "H", 115);
    design.setup("You", "H", 116);
    design.setup("You", "H", 117);
    design.setup("You", "H", 118);
    design.setup("You", "H", 119);
    design.setup("You", "H", 120);
}

Dagaz.View.configure = function(view) {
    const R = 0xFF0000; // 2
    const B = 0x0000FF; // 3
    const Y = 0xF2E825; // 6

    view.defPieceCube(0,  1, [R, Y, B, B, Y, R]);

    view.setCamera(0, 0, 0, 109, 243, 105);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.View.switchMenu, 1);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a11", 0, 0, 50, 50, 0);
    view.defPosition("b11", 50, 0, 50, 50, 0);
    view.defPosition("c11", 100, 0, 50, 50, 0);
    view.defPosition("d11", 150, 0, 50, 50, 0);
    view.defPosition("e11", 200, 0, 50, 50, 0);
    view.defPosition("f11", 250, 0, 50, 50, 0);
    view.defPosition("g11", 300, 0, 50, 50, 0);
    view.defPosition("h11", 350, 0, 50, 50, 0);
    view.defPosition("i11", 400, 0, 50, 50, 0);
    view.defPosition("j11", 450, 0, 50, 50, 0);
    view.defPosition("k11", 500, 0, 50, 50, 0);
    view.defPosition("a10", 0, 50, 50, 50, 0);
    view.defPosition("b10", 50, 50, 50, 50, 0);
    view.defPosition("c10", 100, 50, 50, 50, 0);
    view.defPosition("d10", 150, 50, 50, 50, 0);
    view.defPosition("e10", 200, 50, 50, 50, 0);
    view.defPosition("f10", 250, 50, 50, 50, 0);
    view.defPosition("g10", 300, 50, 50, 50, 0);
    view.defPosition("h10", 350, 50, 50, 50, 0);
    view.defPosition("i10", 400, 50, 50, 50, 0);
    view.defPosition("j10", 450, 50, 50, 50, 0);
    view.defPosition("k10", 500, 50, 50, 50, 0);
    view.defPosition("a9", 0, 100, 50, 50, 0);
    view.defPosition("b9", 50, 100, 50, 50, 0);
    view.defPosition("c9", 100, 100, 50, 50, 0);
    view.defPosition("d9", 150, 100, 50, 50, 0);
    view.defPosition("e9", 200, 100, 50, 50, 0);
    view.defPosition("f9", 250, 100, 50, 50, 0);
    view.defPosition("g9", 300, 100, 50, 50, 0);
    view.defPosition("h9", 350, 100, 50, 50, 0);
    view.defPosition("i9", 400, 100, 50, 50, 0);
    view.defPosition("j9", 450, 100, 50, 50, 0);
    view.defPosition("k9", 500, 100, 50, 50, 0);
    view.defPosition("a8", 0, 150, 50, 50, 0);
    view.defPosition("b8", 50, 150, 50, 50, 0);
    view.defPosition("c8", 100, 150, 50, 50, 0);
    view.defPosition("d8", 150, 150, 50, 50, 0);
    view.defPosition("e8", 200, 150, 50, 50, 0);
    view.defPosition("f8", 250, 150, 50, 50, 0);
    view.defPosition("g8", 300, 150, 50, 50, 0);
    view.defPosition("h8", 350, 150, 50, 50, 0);
    view.defPosition("i8", 400, 150, 50, 50, 0);
    view.defPosition("j8", 450, 150, 50, 50, 0);
    view.defPosition("k8", 500, 150, 50, 50, 0);
    view.defPosition("a7", 0, 200, 50, 50, 0);
    view.defPosition("b7", 50, 200, 50, 50, 0);
    view.defPosition("c7", 100, 200, 50, 50, 0);
    view.defPosition("d7", 150, 200, 50, 50, 0);
    view.defPosition("e7", 200, 200, 50, 50, 0);
    view.defPosition("f7", 250, 200, 50, 50, 0);
    view.defPosition("g7", 300, 200, 50, 50, 0);
    view.defPosition("h7", 350, 200, 50, 50, 0);
    view.defPosition("i7", 400, 200, 50, 50, 0);
    view.defPosition("j7", 450, 200, 50, 50, 0);
    view.defPosition("k7", 500, 200, 50, 50, 0);
    view.defPosition("a6", 0, 250, 50, 50, 0);
    view.defPosition("b6", 50, 250, 50, 50, 0);
    view.defPosition("c6", 100, 250, 50, 50, 0);
    view.defPosition("d6", 150, 250, 50, 50, 0);
    view.defPosition("e6", 200, 250, 50, 50, 0);
    view.defPosition("f6", 250, 250, 50, 50, 0);
    view.defPosition("g6", 300, 250, 50, 50, 0);
    view.defPosition("h6", 350, 250, 50, 50, 0);
    view.defPosition("i6", 400, 250, 50, 50, 0);
    view.defPosition("j6", 450, 250, 50, 50, 0);
    view.defPosition("k6", 500, 250, 50, 50, 0);
    view.defPosition("a5", 0, 300, 50, 50, 0);
    view.defPosition("b5", 50, 300, 50, 50, 0);
    view.defPosition("c5", 100, 300, 50, 50, 0);
    view.defPosition("d5", 150, 300, 50, 50, 0);
    view.defPosition("e5", 200, 300, 50, 50, 0);
    view.defPosition("f5", 250, 300, 50, 50, 0);
    view.defPosition("g5", 300, 300, 50, 50, 0);
    view.defPosition("h5", 350, 300, 50, 50, 0);
    view.defPosition("i5", 400, 300, 50, 50, 0);
    view.defPosition("j5", 450, 300, 50, 50, 0);
    view.defPosition("k5", 500, 300, 50, 50, 0);
    view.defPosition("a4", 0, 350, 50, 50, 0);
    view.defPosition("b4", 50, 350, 50, 50, 0);
    view.defPosition("c4", 100, 350, 50, 50, 0);
    view.defPosition("d4", 150, 350, 50, 50, 0);
    view.defPosition("e4", 200, 350, 50, 50, 0);
    view.defPosition("f4", 250, 350, 50, 50, 0);
    view.defPosition("g4", 300, 350, 50, 50, 0);
    view.defPosition("h4", 350, 350, 50, 50, 0);
    view.defPosition("i4", 400, 350, 50, 50, 0);
    view.defPosition("j4", 450, 350, 50, 50, 0);
    view.defPosition("k4", 500, 350, 50, 50, 0);
    view.defPosition("a3", 0, 400, 50, 50, 0);
    view.defPosition("b3", 50, 400, 50, 50, 0);
    view.defPosition("c3", 100, 400, 50, 50, 0);
    view.defPosition("d3", 150, 400, 50, 50, 0);
    view.defPosition("e3", 200, 400, 50, 50, 0);
    view.defPosition("f3", 250, 400, 50, 50, 0);
    view.defPosition("g3", 300, 400, 50, 50, 0);
    view.defPosition("h3", 350, 400, 50, 50, 0);
    view.defPosition("i3", 400, 400, 50, 50, 0);
    view.defPosition("j3", 450, 400, 50, 50, 0);
    view.defPosition("k3", 500, 400, 50, 50, 0);
    view.defPosition("a2", 0, 450, 50, 50, 0);
    view.defPosition("b2", 50, 450, 50, 50, 0);
    view.defPosition("c2", 100, 450, 50, 50, 0);
    view.defPosition("d2", 150, 450, 50, 50, 0);
    view.defPosition("e2", 200, 450, 50, 50, 0);
    view.defPosition("f2", 250, 450, 50, 50, 0);
    view.defPosition("g2", 300, 450, 50, 50, 0);
    view.defPosition("h2", 350, 450, 50, 50, 0);
    view.defPosition("i2", 400, 450, 50, 50, 0);
    view.defPosition("j2", 450, 450, 50, 50, 0);
    view.defPosition("k2", 500, 450, 50, 50, 0);
    view.defPosition("a1", 0, 500, 50, 50, 0);
    view.defPosition("b1", 50, 500, 50, 50, 0);
    view.defPosition("c1", 100, 500, 50, 50, 0);
    view.defPosition("d1", 150, 500, 50, 50, 0);
    view.defPosition("e1", 200, 500, 50, 50, 0);
    view.defPosition("f1", 250, 500, 50, 50, 0);
    view.defPosition("g1", 300, 500, 50, 50, 0);
    view.defPosition("h1", 350, 500, 50, 50, 0);
    view.defPosition("i1", 400, 500, 50, 50, 0);
    view.defPosition("j1", 450, 500, 50, 50, 0);
    view.defPosition("k1", 500, 500, 50, 50, 0);
}
