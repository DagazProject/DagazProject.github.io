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
    design.checkVersion("show-blink", "true");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("animate-redo", "false");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Red", [3, 2, 1, 0]);
    design.addPlayer("White", [0, 1, 2, 3]);
    design.addPlayer("Gray", [0, 1, 2, 3]);
    design.addTurn(1);
    design.addTurn(2);

    design.addPosition("a6", [6, 1, 0, 0]);
    design.addPosition("b6", [6, 1, -1, 0]);
    design.addPosition("c6", [6, 1, -1, 0]);
    design.addPosition("d6", [6, 1, -1, 0]);
    design.addPosition("e6", [6, 1, -1, 0]);
    design.addPosition("f6", [6, 0, -1, 0]);
    design.addPosition("a5", [6, 1, 0, -6]);
    design.addPosition("b5", [6, 1, -1, -6]);
    design.addPosition("c5", [6, 1, -1, -6]);
    design.addPosition("d5", [6, 1, -1, -6]);
    design.addPosition("e5", [6, 1, -1, -6]);
    design.addPosition("f5", [6, 0, -1, -6]);
    design.addPosition("a4", [6, 1, 0, -6]);
    design.addPosition("b4", [6, 1, -1, -6]);
    design.addPosition("c4", [6, 1, -1, -6]);
    design.addPosition("d4", [6, 1, -1, -6]);
    design.addPosition("e4", [6, 1, -1, -6]);
    design.addPosition("f4", [6, 0, -1, -6]);
    design.addPosition("a3", [6, 1, 0, -6]);
    design.addPosition("b3", [6, 1, -1, -6]);
    design.addPosition("c3", [6, 1, -1, -6]);
    design.addPosition("d3", [6, 1, -1, -6]);
    design.addPosition("e3", [6, 1, -1, -6]);
    design.addPosition("f3", [6, 0, -1, -6]);
    design.addPosition("a2", [6, 1, 0, -6]);
    design.addPosition("b2", [6, 1, -1, -6]);
    design.addPosition("c2", [6, 1, -1, -6]);
    design.addPosition("d2", [6, 1, -1, -6]);
    design.addPosition("e2", [6, 1, -1, -6]);
    design.addPosition("f2", [6, 0, -1, -6]);
    design.addPosition("a1", [0, 1, 0, -6]);
    design.addPosition("b1", [0, 1, -1, -6]);
    design.addPosition("c1", [0, 1, -1, -6]);
    design.addPosition("d1", [0, 1, -1, -6]);
    design.addPosition("e1", [0, 1, -1, -6]);
    design.addPosition("f1", [0, 0, -1, -6]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);

    design.setup("White", "Stone", 12);
    design.setup("White", "Stone", 6);
    design.setup("White", "Stone", 0);
    design.setup("White", "Stone", 1);
    design.setup("White", "Stone", 2);
    design.setup("White", "Stone", 3);
    design.setup("White", "Stone", 4);
    design.setup("White", "Stone", 5);
    design.setup("White", "Stone", 11);
    design.setup("White", "Stone", 17);
    design.setup("Red", "Stone", 30);
    design.setup("Red", "Stone", 24);
    design.setup("Red", "Stone", 18);
    design.setup("Red", "Stone", 31);
    design.setup("Red", "Stone", 32);
    design.setup("Red", "Stone", 33);
    design.setup("Red", "Stone", 34);
    design.setup("Red", "Stone", 35);
    design.setup("Red", "Stone", 29);
    design.setup("Red", "Stone", 23);
    design.setup("Gray", "Stone", 25);
    design.setup("Gray", "Stone", 26);
    design.setup("Gray", "Stone", 27);
    design.setup("Gray", "Stone", 28);
    design.setup("Gray", "Stone", 19);
    design.setup("Gray", "Stone", 20);
    design.setup("Gray", "Stone", 21);
    design.setup("Gray", "Stone", 22);
    design.setup("Gray", "Stone", 13);
    design.setup("Gray", "Stone", 14);
    design.setup("Gray", "Stone", 15);
    design.setup("Gray", "Stone", 16);
    design.setup("Gray", "Stone", 7);
    design.setup("Gray", "Stone", 8);
    design.setup("Gray", "Stone", 9);
    design.setup("Gray", "Stone", 10);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("GrayStone", "Gray Stone");
 
    view.defPosition("a6", 2, 2, 68, 68);
    view.defPosition("b6", 70, 2, 68, 68);
    view.defPosition("c6", 138, 2, 68, 68);
    view.defPosition("d6", 206, 2, 68, 68);
    view.defPosition("e6", 274, 2, 68, 68);
    view.defPosition("f6", 342, 2, 68, 68);
    view.defPosition("a5", 2, 70, 68, 68);
    view.defPosition("b5", 70, 70, 68, 68);
    view.defPosition("c5", 138, 70, 68, 68);
    view.defPosition("d5", 206, 70, 68, 68);
    view.defPosition("e5", 274, 70, 68, 68);
    view.defPosition("f5", 342, 70, 68, 68);
    view.defPosition("a4", 2, 138, 68, 68);
    view.defPosition("b4", 70, 138, 68, 68);
    view.defPosition("c4", 138, 138, 68, 68);
    view.defPosition("d4", 206, 138, 68, 68);
    view.defPosition("e4", 274, 138, 68, 68);
    view.defPosition("f4", 342, 138, 68, 68);
    view.defPosition("a3", 2, 206, 68, 68);
    view.defPosition("b3", 70, 206, 68, 68);
    view.defPosition("c3", 138, 206, 68, 68);
    view.defPosition("d3", 206, 206, 68, 68);
    view.defPosition("e3", 274, 206, 68, 68);
    view.defPosition("f3", 342, 206, 68, 68);
    view.defPosition("a2", 2, 274, 68, 68);
    view.defPosition("b2", 70, 274, 68, 68);
    view.defPosition("c2", 138, 274, 68, 68);
    view.defPosition("d2", 206, 274, 68, 68);
    view.defPosition("e2", 274, 274, 68, 68);
    view.defPosition("f2", 342, 274, 68, 68);
    view.defPosition("a1", 2, 342, 68, 68);
    view.defPosition("b1", 70, 342, 68, 68);
    view.defPosition("c1", 138, 342, 68, 68);
    view.defPosition("d1", 206, 342, 68, 68);
    view.defPosition("e1", 274, 342, 68, 68);
    view.defPosition("f1", 342, 342, 68, 68);
}
