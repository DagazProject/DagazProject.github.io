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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("hasami-shogi-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a9", [0, 1, 9, 0, 0, 10, 0, 0]);
    design.addPosition("b9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("c9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("d9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("e9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("f9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("g9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("h9", [-1, 1, 9, 0, 0, 10, 8, 0]);
    design.addPosition("i9", [-1, 0, 9, 0, 0, 0, 8, 0]);
    design.addPosition("a8", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h8", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i8", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a7", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h7", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i7", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a6", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h6", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i6", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a5", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h5", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i5", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a4", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h4", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i4", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a3", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h3", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i3", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a2", [0, 1, 9, -8, -9, 10, 0, 0]);
    design.addPosition("b2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("c2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("d2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("e2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("f2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("g2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("h2", [-1, 1, 9, -8, -9, 10, 8, -10]);
    design.addPosition("i2", [-1, 0, 9, 0, -9, 0, 8, -10]);
    design.addPosition("a1", [0, 1, 0, -8, -9, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("c1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("d1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("e1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("f1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("g1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("h1", [-1, 1, 0, -8, -9, 0, 0, -10]);
    design.addPosition("i1", [-1, 0, 0, 0, -9, 0, 0, -10]);

    design.addZone("home", 2, [72, 73, 74, 75, 76, 77, 78, 79, 80, 63, 64, 65, 66, 67, 68, 69, 70, 71, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
    design.addZone("home", 1, [72, 73, 74, 75, 76, 77, 78, 79, 80, 63, 64, 65, 66, 67, 68, 69, 70, 71, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);

    design.setup("Black", "Stone", 72);
    design.setup("Black", "Stone", 73);
    design.setup("Black", "Stone", 74);
    design.setup("Black", "Stone", 75);
    design.setup("Black", "Stone", 76);
    design.setup("Black", "Stone", 77);
    design.setup("Black", "Stone", 78);
    design.setup("Black", "Stone", 79);
    design.setup("Black", "Stone", 80);
    design.setup("White", "Stone", 0);
    design.setup("White", "Stone", 1);
    design.setup("White", "Stone", 2);
    design.setup("White", "Stone", 3);
    design.setup("White", "Stone", 4);
    design.setup("White", "Stone", 5);
    design.setup("White", "Stone", 6);
    design.setup("White", "Stone", 7);
    design.setup("White", "Stone", 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a9", 8, 9, 41, 46);
    view.defPosition("b9", 49, 9, 41, 46);
    view.defPosition("c9", 90, 9, 41, 46);
    view.defPosition("d9", 131, 9, 41, 46);
    view.defPosition("e9", 172, 9, 41, 46);
    view.defPosition("f9", 213, 9, 41, 46);
    view.defPosition("g9", 254, 9, 41, 46);
    view.defPosition("h9", 295, 9, 41, 46);
    view.defPosition("i9", 336, 9, 41, 46);
    view.defPosition("a8", 8, 55, 41, 46);
    view.defPosition("b8", 49, 55, 41, 46);
    view.defPosition("c8", 90, 55, 41, 46);
    view.defPosition("d8", 131, 55, 41, 46);
    view.defPosition("e8", 172, 55, 41, 46);
    view.defPosition("f8", 213, 55, 41, 46);
    view.defPosition("g8", 254, 55, 41, 46);
    view.defPosition("h8", 295, 55, 41, 46);
    view.defPosition("i8", 336, 55, 41, 46);
    view.defPosition("a7", 8, 101, 41, 46);
    view.defPosition("b7", 49, 101, 41, 46);
    view.defPosition("c7", 90, 101, 41, 46);
    view.defPosition("d7", 131, 101, 41, 46);
    view.defPosition("e7", 172, 101, 41, 46);
    view.defPosition("f7", 213, 101, 41, 46);
    view.defPosition("g7", 254, 101, 41, 46);
    view.defPosition("h7", 295, 101, 41, 46);
    view.defPosition("i7", 336, 101, 41, 46);
    view.defPosition("a6", 8, 147, 41, 46);
    view.defPosition("b6", 49, 147, 41, 46);
    view.defPosition("c6", 90, 147, 41, 46);
    view.defPosition("d6", 131, 147, 41, 46);
    view.defPosition("e6", 172, 147, 41, 46);
    view.defPosition("f6", 213, 147, 41, 46);
    view.defPosition("g6", 254, 147, 41, 46);
    view.defPosition("h6", 295, 147, 41, 46);
    view.defPosition("i6", 336, 147, 41, 46);
    view.defPosition("a5", 8, 193, 41, 46);
    view.defPosition("b5", 49, 193, 41, 46);
    view.defPosition("c5", 90, 193, 41, 46);
    view.defPosition("d5", 131, 193, 41, 46);
    view.defPosition("e5", 172, 193, 41, 46);
    view.defPosition("f5", 213, 193, 41, 46);
    view.defPosition("g5", 254, 193, 41, 46);
    view.defPosition("h5", 295, 193, 41, 46);
    view.defPosition("i5", 336, 193, 41, 46);
    view.defPosition("a4", 8, 239, 41, 46);
    view.defPosition("b4", 49, 239, 41, 46);
    view.defPosition("c4", 90, 239, 41, 46);
    view.defPosition("d4", 131, 239, 41, 46);
    view.defPosition("e4", 172, 239, 41, 46);
    view.defPosition("f4", 213, 239, 41, 46);
    view.defPosition("g4", 254, 239, 41, 46);
    view.defPosition("h4", 295, 239, 41, 46);
    view.defPosition("i4", 336, 239, 41, 46);
    view.defPosition("a3", 8, 285, 41, 46);
    view.defPosition("b3", 49, 285, 41, 46);
    view.defPosition("c3", 90, 285, 41, 46);
    view.defPosition("d3", 131, 285, 41, 46);
    view.defPosition("e3", 172, 285, 41, 46);
    view.defPosition("f3", 213, 285, 41, 46);
    view.defPosition("g3", 254, 285, 41, 46);
    view.defPosition("h3", 295, 285, 41, 46);
    view.defPosition("i3", 336, 285, 41, 46);
    view.defPosition("a2", 8, 331, 41, 46);
    view.defPosition("b2", 49, 331, 41, 46);
    view.defPosition("c2", 90, 331, 41, 46);
    view.defPosition("d2", 131, 331, 41, 46);
    view.defPosition("e2", 172, 331, 41, 46);
    view.defPosition("f2", 213, 331, 41, 46);
    view.defPosition("g2", 254, 331, 41, 46);
    view.defPosition("h2", 295, 331, 41, 46);
    view.defPosition("i2", 336, 331, 41, 46);
    view.defPosition("a1", 8, 377, 41, 46);
    view.defPosition("b1", 49, 377, 41, 46);
    view.defPosition("c1", 90, 377, 41, 46);
    view.defPosition("d1", 131, 377, 41, 46);
    view.defPosition("e1", 172, 377, 41, 46);
    view.defPosition("f1", 213, 377, 41, 46);
    view.defPosition("g1", 254, 377, 41, 46);
    view.defPosition("h1", 295, 377, 41, 46);
    view.defPosition("i1", 336, 377, 41, 46);
}
