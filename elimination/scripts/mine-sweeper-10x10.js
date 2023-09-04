Dagaz.Model.NO_SOUND = true;

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
    design.checkVersion("mine-setup", "18");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("You", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a10", [0, 1, 10, 0, 0, 11, 0, 0]);
    design.addPosition("b10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("c10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("d10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("e10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("f10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("g10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("h10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("i10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("j10", [-1, 0, 10, 0, 0, 0, 9, 0]);
    design.addPosition("a9", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j9", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a8", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j8", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a7", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j7", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a6", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j6", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a5", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j5", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a4", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j4", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a3", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j3", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a2", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j2", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a1", [0, 1, 0, -9, -10, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("c1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("d1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("e1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("f1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("g1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("h1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("i1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("j1", [-1, 0, 0, 0, -10, 0, 0, -11]);

    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("p0", 0);
    design.addDrop(0, 0, [], 0);

    design.addPiece("p1", 1);
    design.addPiece("p2", 2);
    design.addPiece("p3", 3);
    design.addPiece("p4", 4);
    design.addPiece("p5", 5);
    design.addPiece("p6", 6);
    design.addPiece("p7", 7);
    design.addPiece("p8", 8);
    design.addPiece("invisible", 9);
    design.addPiece("boom", 10);
    design.addPiece("mine", 11);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("Youp0", "You p0");
    view.defPiece("Youp1", "You p1");
    view.defPiece("Youp2", "You p2");
    view.defPiece("Youp3", "You p3");
    view.defPiece("Youp4", "You p4");
    view.defPiece("Youp5", "You p5");
    view.defPiece("Youp6", "You p6");
    view.defPiece("Youp7", "You p7");
    view.defPiece("Youp8", "You p8");
    view.defPiece("Youinvisible", "You invisible");
    view.defPiece("Youboom", "You boom");
    view.defPiece("Youmine", "You mine");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a10", 0, 0, 32, 32);
    view.defPosition("b10", 32, 0, 32, 32);
    view.defPosition("c10", 64, 0, 32, 32);
    view.defPosition("d10", 96, 0, 32, 32);
    view.defPosition("e10", 128, 0, 32, 32);
    view.defPosition("f10", 160, 0, 32, 32);
    view.defPosition("g10", 192, 0, 32, 32);
    view.defPosition("h10", 224, 0, 32, 32);
    view.defPosition("i10", 256, 0, 32, 32);
    view.defPosition("j10", 288, 0, 32, 32);
    view.defPosition("a9", 0, 32, 32, 32);
    view.defPosition("b9", 32, 32, 32, 32);
    view.defPosition("c9", 64, 32, 32, 32);
    view.defPosition("d9", 96, 32, 32, 32);
    view.defPosition("e9", 128, 32, 32, 32);
    view.defPosition("f9", 160, 32, 32, 32);
    view.defPosition("g9", 192, 32, 32, 32);
    view.defPosition("h9", 224, 32, 32, 32);
    view.defPosition("i9", 256, 32, 32, 32);
    view.defPosition("j9", 288, 32, 32, 32);
    view.defPosition("a8", 0, 64, 32, 32);
    view.defPosition("b8", 32, 64, 32, 32);
    view.defPosition("c8", 64, 64, 32, 32);
    view.defPosition("d8", 96, 64, 32, 32);
    view.defPosition("e8", 128, 64, 32, 32);
    view.defPosition("f8", 160, 64, 32, 32);
    view.defPosition("g8", 192, 64, 32, 32);
    view.defPosition("h8", 224, 64, 32, 32);
    view.defPosition("i8", 256, 64, 32, 32);
    view.defPosition("j8", 288, 64, 32, 32);
    view.defPosition("a7", 0, 96, 32, 32);
    view.defPosition("b7", 32, 96, 32, 32);
    view.defPosition("c7", 64, 96, 32, 32);
    view.defPosition("d7", 96, 96, 32, 32);
    view.defPosition("e7", 128, 96, 32, 32);
    view.defPosition("f7", 160, 96, 32, 32);
    view.defPosition("g7", 192, 96, 32, 32);
    view.defPosition("h7", 224, 96, 32, 32);
    view.defPosition("i7", 256, 96, 32, 32);
    view.defPosition("j7", 288, 96, 32, 32);
    view.defPosition("a6", 0, 128, 32, 32);
    view.defPosition("b6", 32, 128, 32, 32);
    view.defPosition("c6", 64, 128, 32, 32);
    view.defPosition("d6", 96, 128, 32, 32);
    view.defPosition("e6", 128, 128, 32, 32);
    view.defPosition("f6", 160, 128, 32, 32);
    view.defPosition("g6", 192, 128, 32, 32);
    view.defPosition("h6", 224, 128, 32, 32);
    view.defPosition("i6", 256, 128, 32, 32);
    view.defPosition("j6", 288, 128, 32, 32);
    view.defPosition("a5", 0, 160, 32, 32);
    view.defPosition("b5", 32, 160, 32, 32);
    view.defPosition("c5", 64, 160, 32, 32);
    view.defPosition("d5", 96, 160, 32, 32);
    view.defPosition("e5", 128, 160, 32, 32);
    view.defPosition("f5", 160, 160, 32, 32);
    view.defPosition("g5", 192, 160, 32, 32);
    view.defPosition("h5", 224, 160, 32, 32);
    view.defPosition("i5", 256, 160, 32, 32);
    view.defPosition("j5", 288, 160, 32, 32);
    view.defPosition("a4", 0, 192, 32, 32);
    view.defPosition("b4", 32, 192, 32, 32);
    view.defPosition("c4", 64, 192, 32, 32);
    view.defPosition("d4", 96, 192, 32, 32);
    view.defPosition("e4", 128, 192, 32, 32);
    view.defPosition("f4", 160, 192, 32, 32);
    view.defPosition("g4", 192, 192, 32, 32);
    view.defPosition("h4", 224, 192, 32, 32);
    view.defPosition("i4", 256, 192, 32, 32);
    view.defPosition("j4", 288, 192, 32, 32);
    view.defPosition("a3", 0, 224, 32, 32);
    view.defPosition("b3", 32, 224, 32, 32);
    view.defPosition("c3", 64, 224, 32, 32);
    view.defPosition("d3", 96, 224, 32, 32);
    view.defPosition("e3", 128, 224, 32, 32);
    view.defPosition("f3", 160, 224, 32, 32);
    view.defPosition("g3", 192, 224, 32, 32);
    view.defPosition("h3", 224, 224, 32, 32);
    view.defPosition("i3", 256, 224, 32, 32);
    view.defPosition("j3", 288, 224, 32, 32);
    view.defPosition("a2", 0, 256, 32, 32);
    view.defPosition("b2", 32, 256, 32, 32);
    view.defPosition("c2", 64, 256, 32, 32);
    view.defPosition("d2", 96, 256, 32, 32);
    view.defPosition("e2", 128, 256, 32, 32);
    view.defPosition("f2", 160, 256, 32, 32);
    view.defPosition("g2", 192, 256, 32, 32);
    view.defPosition("h2", 224, 256, 32, 32);
    view.defPosition("i2", 256, 256, 32, 32);
    view.defPosition("j2", 288, 256, 32, 32);
    view.defPosition("a1", 0, 288, 32, 32);
    view.defPosition("b1", 32, 288, 32, 32);
    view.defPosition("c1", 64, 288, 32, 32);
    view.defPosition("d1", 96, 288, 32, 32);
    view.defPosition("e1", 128, 288, 32, 32);
    view.defPosition("f1", 160, 288, 32, 32);
    view.defPosition("g1", 192, 288, 32, 32);
    view.defPosition("h1", 224, 288, 32, 32);
    view.defPosition("i1", 256, 288, 32, 32);
    view.defPosition("j1", 288, 288, 32, 32);
}
