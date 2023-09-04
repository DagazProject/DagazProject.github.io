Dagaz.Controller.noDropIndex = true;
Dagaz.Controller.cyclicDropIndex = true;

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
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [0, 1, 2, 3]);

    design.addPosition("a9", [0, 1, 9, 0]);
    design.addPosition("b9", [-1, 1, 9, 0]);
    design.addPosition("c9", [-1, 1, 9, 0]);
    design.addPosition("d9", [-1, 1, 9, 0]);
    design.addPosition("e9", [-1, 1, 9, 0]);
    design.addPosition("f9", [-1, 1, 9, 0]);
    design.addPosition("g9", [-1, 1, 9, 0]);
    design.addPosition("h9", [-1, 1, 9, 0]);
    design.addPosition("i9", [-1, 0, 9, 0]);
    design.addPosition("a8", [0, 1, 9, -9]);
    design.addPosition("b8", [-1, 1, 9, -9]);
    design.addPosition("c8", [-1, 1, 9, -9]);
    design.addPosition("d8", [-1, 1, 9, -9]);
    design.addPosition("e8", [-1, 1, 9, -9]);
    design.addPosition("f8", [-1, 1, 9, -9]);
    design.addPosition("g8", [-1, 1, 9, -9]);
    design.addPosition("h8", [-1, 1, 9, -9]);
    design.addPosition("i8", [-1, 0, 9, -9]);
    design.addPosition("a7", [0, 1, 9, -9]);
    design.addPosition("b7", [-1, 1, 9, -9]);
    design.addPosition("c7", [-1, 1, 9, -9]);
    design.addPosition("d7", [-1, 1, 9, -9]);
    design.addPosition("e7", [-1, 1, 9, -9]);
    design.addPosition("f7", [-1, 1, 9, -9]);
    design.addPosition("g7", [-1, 1, 9, -9]);
    design.addPosition("h7", [-1, 1, 9, -9]);
    design.addPosition("i7", [-1, 0, 9, -9]);
    design.addPosition("a6", [0, 1, 9, -9]);
    design.addPosition("b6", [-1, 1, 9, -9]);
    design.addPosition("c6", [-1, 1, 9, -9]);
    design.addPosition("d6", [-1, 1, 9, -9]);
    design.addPosition("e6", [-1, 1, 9, -9]);
    design.addPosition("f6", [-1, 1, 9, -9]);
    design.addPosition("g6", [-1, 1, 9, -9]);
    design.addPosition("h6", [-1, 1, 9, -9]);
    design.addPosition("i6", [-1, 0, 9, -9]);
    design.addPosition("a5", [0, 1, 9, -9]);
    design.addPosition("b5", [-1, 1, 9, -9]);
    design.addPosition("c5", [-1, 1, 9, -9]);
    design.addPosition("d5", [-1, 1, 9, -9]);
    design.addPosition("e5", [-1, 1, 9, -9]);
    design.addPosition("f5", [-1, 1, 9, -9]);
    design.addPosition("g5", [-1, 1, 9, -9]);
    design.addPosition("h5", [-1, 1, 9, -9]);
    design.addPosition("i5", [-1, 0, 9, -9]);
    design.addPosition("a4", [0, 1, 9, -9]);
    design.addPosition("b4", [-1, 1, 9, -9]);
    design.addPosition("c4", [-1, 1, 9, -9]);
    design.addPosition("d4", [-1, 1, 9, -9]);
    design.addPosition("e4", [-1, 1, 9, -9]);
    design.addPosition("f4", [-1, 1, 9, -9]);
    design.addPosition("g4", [-1, 1, 9, -9]);
    design.addPosition("h4", [-1, 1, 9, -9]);
    design.addPosition("i4", [-1, 0, 9, -9]);
    design.addPosition("a3", [0, 1, 9, -9]);
    design.addPosition("b3", [-1, 1, 9, -9]);
    design.addPosition("c3", [-1, 1, 9, -9]);
    design.addPosition("d3", [-1, 1, 9, -9]);
    design.addPosition("e3", [-1, 1, 9, -9]);
    design.addPosition("f3", [-1, 1, 9, -9]);
    design.addPosition("g3", [-1, 1, 9, -9]);
    design.addPosition("h3", [-1, 1, 9, -9]);
    design.addPosition("i3", [-1, 0, 9, -9]);
    design.addPosition("a2", [0, 1, 9, -9]);
    design.addPosition("b2", [-1, 1, 9, -9]);
    design.addPosition("c2", [-1, 1, 9, -9]);
    design.addPosition("d2", [-1, 1, 9, -9]);
    design.addPosition("e2", [-1, 1, 9, -9]);
    design.addPosition("f2", [-1, 1, 9, -9]);
    design.addPosition("g2", [-1, 1, 9, -9]);
    design.addPosition("h2", [-1, 1, 9, -9]);
    design.addPosition("i2", [-1, 0, 9, -9]);
    design.addPosition("a1", [0, 1, 0, -9]);
    design.addPosition("b1", [-1, 1, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -9]);
    design.addPosition("h1", [-1, 1, 0, -9]);
    design.addPosition("i1", [-1, 0, 0, -9]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Black", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("White", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "You Black");
    view.defPiece("WhiteStone", "You White");
 
    view.defPosition("a9", 12, 12, 61, 61);
    view.defPosition("b9", 72, 12, 61, 61);
    view.defPosition("c9", 132, 12, 61, 61);
    view.defPosition("d9", 192, 12, 61, 61);
    view.defPosition("e9", 252, 12, 61, 61);
    view.defPosition("f9", 312, 12, 61, 61);
    view.defPosition("g9", 372, 12, 61, 61);
    view.defPosition("h9", 432, 12, 61, 61);
    view.defPosition("i9", 492, 12, 61, 61);
    view.defPosition("a8", 12, 72, 61, 61);
    view.defPosition("b8", 72, 72, 61, 61);
    view.defPosition("c8", 132, 72, 61, 61);
    view.defPosition("d8", 192, 72, 61, 61);
    view.defPosition("e8", 252, 72, 61, 61);
    view.defPosition("f8", 312, 72, 61, 61);
    view.defPosition("g8", 372, 72, 61, 61);
    view.defPosition("h8", 432, 72, 61, 61);
    view.defPosition("i8", 492, 72, 61, 61);
    view.defPosition("a7", 12, 132, 61, 61);
    view.defPosition("b7", 72, 132, 61, 61);
    view.defPosition("c7", 132, 132, 61, 61);
    view.defPosition("d7", 192, 132, 61, 61);
    view.defPosition("e7", 252, 132, 61, 61);
    view.defPosition("f7", 312, 132, 61, 61);
    view.defPosition("g7", 372, 132, 61, 61);
    view.defPosition("h7", 432, 132, 61, 61);
    view.defPosition("i7", 492, 132, 61, 61);
    view.defPosition("a6", 12, 192, 61, 61);
    view.defPosition("b6", 72, 192, 61, 61);
    view.defPosition("c6", 132, 192, 61, 61);
    view.defPosition("d6", 192, 192, 61, 61);
    view.defPosition("e6", 252, 192, 61, 61);
    view.defPosition("f6", 312, 192, 61, 61);
    view.defPosition("g6", 372, 192, 61, 61);
    view.defPosition("h6", 432, 192, 61, 61);
    view.defPosition("i6", 492, 192, 61, 61);
    view.defPosition("a5", 12, 252, 61, 61);
    view.defPosition("b5", 72, 252, 61, 61);
    view.defPosition("c5", 132, 252, 61, 61);
    view.defPosition("d5", 192, 252, 61, 61);
    view.defPosition("e5", 252, 252, 61, 61);
    view.defPosition("f5", 312, 252, 61, 61);
    view.defPosition("g5", 372, 252, 61, 61);
    view.defPosition("h5", 432, 252, 61, 61);
    view.defPosition("i5", 492, 252, 61, 61);
    view.defPosition("a4", 12, 312, 61, 61);
    view.defPosition("b4", 72, 312, 61, 61);
    view.defPosition("c4", 132, 312, 61, 61);
    view.defPosition("d4", 192, 312, 61, 61);
    view.defPosition("e4", 252, 312, 61, 61);
    view.defPosition("f4", 312, 312, 61, 61);
    view.defPosition("g4", 372, 312, 61, 61);
    view.defPosition("h4", 432, 312, 61, 61);
    view.defPosition("i4", 492, 312, 61, 61);
    view.defPosition("a3", 12, 372, 61, 61);
    view.defPosition("b3", 72, 372, 61, 61);
    view.defPosition("c3", 132, 372, 61, 61);
    view.defPosition("d3", 192, 372, 61, 61);
    view.defPosition("e3", 252, 372, 61, 61);
    view.defPosition("f3", 312, 372, 61, 61);
    view.defPosition("g3", 372, 372, 61, 61);
    view.defPosition("h3", 432, 372, 61, 61);
    view.defPosition("i3", 492, 372, 61, 61);
    view.defPosition("a2", 12, 432, 61, 61);
    view.defPosition("b2", 72, 432, 61, 61);
    view.defPosition("c2", 132, 432, 61, 61);
    view.defPosition("d2", 192, 432, 61, 61);
    view.defPosition("e2", 252, 432, 61, 61);
    view.defPosition("f2", 312, 432, 61, 61);
    view.defPosition("g2", 372, 432, 61, 61);
    view.defPosition("h2", 432, 432, 61, 61);
    view.defPosition("i2", 492, 432, 61, 61);
    view.defPosition("a1", 12, 492, 61, 61);
    view.defPosition("b1", 72, 492, 61, 61);
    view.defPosition("c1", 132, 492, 61, 61);
    view.defPosition("d1", 192, 492, 61, 61);
    view.defPosition("e1", 252, 492, 61, 61);
    view.defPosition("f1", 312, 492, 61, 61);
    view.defPosition("g1", 372, 492, 61, 61);
    view.defPosition("h1", 432, 492, 61, 61);
    view.defPosition("i1", 492, 492, 61, 61);
}
