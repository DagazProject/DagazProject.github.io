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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("fanorona-moves", "2");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("n");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("sw"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("se"); // 7

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addTurn(2);
    design.addTurn(1);

    design.addPosition("a5", [0, 1, 9, 0, 0, 0, 0, 10]);
    design.addPosition("b5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("d5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("f5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("g5", [-1, 1, 9, 0, 0, 8, 0, 10]);
    design.addPosition("h5", [-1, 1, 9, 0, 0, 0, 0, 0]);
    design.addPosition("i5", [-1, 0, 9, 0, 0, 8, 0, 0]);
    design.addPosition("a4", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g4", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h4", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i4", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 9, -9, -8, 0, 0, 10]);
    design.addPosition("b3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("d3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("e3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("f3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("g3", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("h3", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("i3", [-1, 0, 9, -9, 0, 8, -10, 0]);
    design.addPosition("a2", [0, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("c2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("d2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("e2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("f2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("g2", [-1, 1, 9, -9, 0, 0, 0, 0]);
    design.addPosition("h2", [-1, 1, 9, -9, -8, 8, -10, 10]);
    design.addPosition("i2", [-1, 0, 9, -9, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -9, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("d1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("e1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("f1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("g1", [-1, 1, 0, -9, -8, 0, -10, 0]);
    design.addPosition("h1", [-1, 1, 0, -9, 0, 0, 0, 0]);
    design.addPosition("i1", [-1, 0, 0, -9, 0, 0, -10, 0]);

    design.addPiece("Stone", 0);

    design.setup("White", "Stone", 36);
    design.setup("White", "Stone", 27);
    design.setup("White", "Stone", 37);
    design.setup("White", "Stone", 28);
    design.setup("White", "Stone", 19);
    design.setup("White", "Stone", 38);
    design.setup("White", "Stone", 29);
    design.setup("White", "Stone", 39);
    design.setup("White", "Stone", 30);
    design.setup("White", "Stone", 21);
    design.setup("White", "Stone", 40);
    design.setup("White", "Stone", 31);
    design.setup("White", "Stone", 41);
    design.setup("White", "Stone", 32);
    design.setup("White", "Stone", 42);
    design.setup("White", "Stone", 33);
    design.setup("White", "Stone", 24);
    design.setup("White", "Stone", 43);
    design.setup("White", "Stone", 34);
    design.setup("White", "Stone", 44);
    design.setup("White", "Stone", 35);
    design.setup("White", "Stone", 26);
    design.setup("Black", "Stone", 18);
    design.setup("Black", "Stone", 9);
    design.setup("Black", "Stone", 0);
    design.setup("Black", "Stone", 10);
    design.setup("Black", "Stone", 1);
    design.setup("Black", "Stone", 20);
    design.setup("Black", "Stone", 11);
    design.setup("Black", "Stone", 2);
    design.setup("Black", "Stone", 12);
    design.setup("Black", "Stone", 3);
    design.setup("Black", "Stone", 13);
    design.setup("Black", "Stone", 4);
    design.setup("Black", "Stone", 23);
    design.setup("Black", "Stone", 14);
    design.setup("Black", "Stone", 5);
    design.setup("Black", "Stone", 15);
    design.setup("Black", "Stone", 6);
    design.setup("Black", "Stone", 25);
    design.setup("Black", "Stone", 16);
    design.setup("Black", "Stone", 7);
    design.setup("Black", "Stone", 17);
    design.setup("Black", "Stone", 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a5", 709, 357, 59, 59);
    view.defPosition("b5", 621, 357, 59, 59);
    view.defPosition("c5", 533, 357, 59, 59);
    view.defPosition("d5", 445, 357, 59, 59);
    view.defPosition("e5", 357, 357, 59, 59);
    view.defPosition("f5", 269, 357, 59, 59);
    view.defPosition("g5", 181, 357, 59, 59);
    view.defPosition("h5", 93, 357, 59, 59);
    view.defPosition("i5", 5, 357, 59, 59);
    view.defPosition("a4", 709, 269, 59, 59);
    view.defPosition("b4", 621, 269, 59, 59);
    view.defPosition("c4", 533, 269, 59, 59);
    view.defPosition("d4", 445, 269, 59, 59);
    view.defPosition("e4", 357, 269, 59, 59);
    view.defPosition("f4", 269, 269, 59, 59);
    view.defPosition("g4", 181, 269, 59, 59);
    view.defPosition("h4", 93, 269, 59, 59);
    view.defPosition("i4", 5, 269, 59, 59);
    view.defPosition("a3", 709, 181, 59, 59);
    view.defPosition("b3", 621, 181, 59, 59);
    view.defPosition("c3", 533, 181, 59, 59);
    view.defPosition("d3", 445, 181, 59, 59);
    view.defPosition("e3", 357, 181, 59, 59);
    view.defPosition("f3", 269, 181, 59, 59);
    view.defPosition("g3", 181, 181, 59, 59);
    view.defPosition("h3", 93, 181, 59, 59);
    view.defPosition("i3", 5, 181, 59, 59);
    view.defPosition("a2", 709, 93, 59, 59);
    view.defPosition("b2", 621, 93, 59, 59);
    view.defPosition("c2", 533, 93, 59, 59);
    view.defPosition("d2", 445, 93, 59, 59);
    view.defPosition("e2", 357, 93, 59, 59);
    view.defPosition("f2", 269, 93, 59, 59);
    view.defPosition("g2", 181, 93, 59, 59);
    view.defPosition("h2", 93, 93, 59, 59);
    view.defPosition("i2", 5, 93, 59, 59);
    view.defPosition("a1", 709, 5, 59, 59);
    view.defPosition("b1", 621, 5, 59, 59);
    view.defPosition("c1", 533, 5, 59, 59);
    view.defPosition("d1", 445, 5, 59, 59);
    view.defPosition("e1", 357, 5, 59, 59);
    view.defPosition("f1", 269, 5, 59, 59);
    view.defPosition("g1", 181, 5, 59, 59);
    view.defPosition("h1", 93, 5, 59, 59);
    view.defPosition("i1", 5, 5, 59, 59);
}
