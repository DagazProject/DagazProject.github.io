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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("taacoca-extension", "true");
    design.checkVersion("taacoca-invariant", "true");
    design.checkVersion("taacoca-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("sw");

    design.addPlayer("White", [1, 0, 5, 4, 3, 2]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a9", [0, 1, 0, 10, 0, 9]);
    design.addPosition("b9", [-1, 1, 0, 10, 0, 9]);
    design.addPosition("c9", [-1, 1, 0, 10, 0, 9]);
    design.addPosition("d9", [-1, 1, 0, 10, 0, 9]);
    design.addPosition("e9", [-1, 0, 0, 10, 0, 9]);
    design.addPosition("f9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("g9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a8", [0, 1, -9, 10, 0, 9]);
    design.addPosition("b8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e8", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f8", [-1, 0, 0, 10, -10, 9]);
    design.addPosition("g8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a7", [0, 1, -9, 10, 0, 9]);
    design.addPosition("b7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f7", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g7", [-1, 0, 0, 10, -10, 9]);
    design.addPosition("h7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a6", [0, 1, -9, 10, 0, 9]);
    design.addPosition("b6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g6", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h6", [-1, 0, 0, 10, -10, 9]);
    design.addPosition("i6", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a5", [0, 1, -9, 10, 0, 0]);
    design.addPosition("b5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("c5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h5", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i5", [-1, 0, 0, 0, -10, 9]);
    design.addPosition("a4", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b4", [0, 1, -9, 10, -10, 0]);
    design.addPosition("c4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("d4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h4", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i4", [-1, 0, -9, 0, -10, 9]);
    design.addPosition("a3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c3", [0, 1, -9, 10, -10, 0]);
    design.addPosition("d3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("e3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h3", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i3", [-1, 0, -9, 0, -10, 9]);
    design.addPosition("a2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d2", [0, 1, -9, 10, -10, 0]);
    design.addPosition("e2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("f2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("g2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("h2", [-1, 1, -9, 10, -10, 9]);
    design.addPosition("i2", [-1, 0, -9, 0, -10, 9]);
    design.addPosition("a1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("e1", [0, 1, -9, 0, -10, 0]);
    design.addPosition("f1", [-1, 1, -9, 0, -10, 0]);
    design.addPosition("g1", [-1, 1, -9, 0, -10, 0]);
    design.addPosition("h1", [-1, 1, -9, 0, -10, 0]);
    design.addPosition("i1", [-1, 0, -9, 0, -10, 0]);

    design.addZone("goal", 1, [0, 1, 2, 3, 4]);
    design.addZone("goal", 2, [76, 77, 78, 79, 80]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);

    design.setup("White", "Stone", 76);
    design.setup("White", "Stone", 77);
    design.setup("White", "Stone", 78);
    design.setup("White", "Stone", 79);
    design.setup("White", "Stone", 80);
    design.setup("White", "Stone", 67);
    design.setup("White", "Stone", 68);
    design.setup("White", "Stone", 69);
    design.setup("White", "Stone", 70);
    design.setup("White", "Stone", 58);
    design.setup("White", "Stone", 59);
    design.setup("White", "Stone", 60);
    design.setup("Black", "Stone", 0);
    design.setup("Black", "Stone", 1);
    design.setup("Black", "Stone", 2);
    design.setup("Black", "Stone", 3);
    design.setup("Black", "Stone", 4);
    design.setup("Black", "Stone", 10);
    design.setup("Black", "Stone", 11);
    design.setup("Black", "Stone", 12);
    design.setup("Black", "Stone", 13);
    design.setup("Black", "Stone", 20);
    design.setup("Black", "Stone", 21);
    design.setup("Black", "Stone", 22);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("a9", 105, 24, 38, 38);
    view.defPosition("b9", 143, 24, 38, 38);
    view.defPosition("c9", 181, 24, 38, 38);
    view.defPosition("d9", 219, 24, 38, 38);
    view.defPosition("e9", 257, 24, 38, 38);
    view.defPosition("f9", 295, 24, 38, 38);
    view.defPosition("g9", 333, 24, 38, 38);
    view.defPosition("h9", 371, 24, 38, 38);
    view.defPosition("i9", 409, 24, 38, 38);
    view.defPosition("a8", 86, 57, 38, 38);
    view.defPosition("b8", 124, 57, 38, 38);
    view.defPosition("c8", 162, 57, 38, 38);
    view.defPosition("d8", 200, 57, 38, 38);
    view.defPosition("e8", 238, 57, 38, 38);
    view.defPosition("f8", 276, 57, 38, 38);
    view.defPosition("g8", 314, 57, 38, 38);
    view.defPosition("h8", 352, 57, 38, 38);
    view.defPosition("i8", 390, 57, 38, 38);
    view.defPosition("a7", 67, 90, 38, 38);
    view.defPosition("b7", 105, 90, 38, 38);
    view.defPosition("c7", 143, 90, 38, 38);
    view.defPosition("d7", 181, 90, 38, 38);
    view.defPosition("e7", 219, 90, 38, 38);
    view.defPosition("f7", 257, 90, 38, 38);
    view.defPosition("g7", 295, 90, 38, 38);
    view.defPosition("h7", 333, 90, 38, 38);
    view.defPosition("i7", 371, 90, 38, 38);
    view.defPosition("a6", 48, 123, 38, 38);
    view.defPosition("b6", 86, 123, 38, 38);
    view.defPosition("c6", 124, 123, 38, 38);
    view.defPosition("d6", 162, 123, 38, 38);
    view.defPosition("e6", 200, 123, 38, 38);
    view.defPosition("f6", 238, 123, 38, 38);
    view.defPosition("g6", 276, 123, 38, 38);
    view.defPosition("h6", 314, 123, 38, 38);
    view.defPosition("i6", 352, 123, 38, 38);
    view.defPosition("a5", 29, 156, 38, 38);
    view.defPosition("b5", 67, 156, 38, 38);
    view.defPosition("c5", 105, 156, 38, 38);
    view.defPosition("d5", 143, 156, 38, 38);
    view.defPosition("e5", 181, 156, 38, 38);
    view.defPosition("f5", 219, 156, 38, 38);
    view.defPosition("g5", 257, 156, 38, 38);
    view.defPosition("h5", 295, 156, 38, 38);
    view.defPosition("i5", 333, 156, 38, 38);
    view.defPosition("a4", 10, 189, 38, 38);
    view.defPosition("b4", 48, 189, 38, 38);
    view.defPosition("c4", 86, 189, 38, 38);
    view.defPosition("d4", 124, 189, 38, 38);
    view.defPosition("e4", 162, 189, 38, 38);
    view.defPosition("f4", 200, 189, 38, 38);
    view.defPosition("g4", 238, 189, 38, 38);
    view.defPosition("h4", 276, 189, 38, 38);
    view.defPosition("i4", 314, 189, 38, 38);
    view.defPosition("a3", -9, 222, 38, 38);
    view.defPosition("b3", 29, 222, 38, 38);
    view.defPosition("c3", 67, 222, 38, 38);
    view.defPosition("d3", 105, 222, 38, 38);
    view.defPosition("e3", 143, 222, 38, 38);
    view.defPosition("f3", 181, 222, 38, 38);
    view.defPosition("g3", 219, 222, 38, 38);
    view.defPosition("h3", 257, 222, 38, 38);
    view.defPosition("i3", 295, 222, 38, 38);
    view.defPosition("a2", -28, 255, 38, 38);
    view.defPosition("b2", 10, 255, 38, 38);
    view.defPosition("c2", 48, 255, 38, 38);
    view.defPosition("d2", 86, 255, 38, 38);
    view.defPosition("e2", 124, 255, 38, 38);
    view.defPosition("f2", 162, 255, 38, 38);
    view.defPosition("g2", 200, 255, 38, 38);
    view.defPosition("h2", 238, 255, 38, 38);
    view.defPosition("i2", 276, 255, 38, 38);
    view.defPosition("a1", -47, 288, 38, 38);
    view.defPosition("b1", -9, 288, 38, 38);
    view.defPosition("c1", 29, 288, 38, 38);
    view.defPosition("d1", 67, 288, 38, 38);
    view.defPosition("e1", 105, 288, 38, 38);
    view.defPosition("f1", 143, 288, 38, 38);
    view.defPosition("g1", 181, 288, 38, 38);
    view.defPosition("h1", 219, 288, 38, 38);
    view.defPosition("i1", 257, 288, 38, 38);
}
