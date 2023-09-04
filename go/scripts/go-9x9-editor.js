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
 
    view.defPosition("a9", 13, 13, 61, 61);
    view.defPosition("b9", 73, 13, 61, 61);
    view.defPosition("c9", 133, 13, 61, 61);
    view.defPosition("d9", 193, 13, 61, 61);
    view.defPosition("e9", 253, 13, 61, 61);
    view.defPosition("f9", 313, 13, 61, 61);
    view.defPosition("g9", 373, 13, 61, 61);
    view.defPosition("h9", 433, 13, 61, 61);
    view.defPosition("i9", 493, 13, 61, 61);
    view.defPosition("a8", 13, 73, 61, 61);
    view.defPosition("b8", 73, 73, 61, 61);
    view.defPosition("c8", 133, 73, 61, 61);
    view.defPosition("d8", 193, 73, 61, 61);
    view.defPosition("e8", 253, 73, 61, 61);
    view.defPosition("f8", 313, 73, 61, 61);
    view.defPosition("g8", 373, 73, 61, 61);
    view.defPosition("h8", 433, 73, 61, 61);
    view.defPosition("i8", 493, 73, 61, 61);
    view.defPosition("a7", 13, 133, 61, 61);
    view.defPosition("b7", 73, 133, 61, 61);
    view.defPosition("c7", 133, 133, 61, 61);
    view.defPosition("d7", 193, 133, 61, 61);
    view.defPosition("e7", 253, 133, 61, 61);
    view.defPosition("f7", 313, 133, 61, 61);
    view.defPosition("g7", 373, 133, 61, 61);
    view.defPosition("h7", 433, 133, 61, 61);
    view.defPosition("i7", 493, 133, 61, 61);
    view.defPosition("a6", 13, 193, 61, 61);
    view.defPosition("b6", 73, 193, 61, 61);
    view.defPosition("c6", 133, 193, 61, 61);
    view.defPosition("d6", 193, 193, 61, 61);
    view.defPosition("e6", 253, 193, 61, 61);
    view.defPosition("f6", 313, 193, 61, 61);
    view.defPosition("g6", 373, 193, 61, 61);
    view.defPosition("h6", 433, 193, 61, 61);
    view.defPosition("i6", 493, 193, 61, 61);
    view.defPosition("a5", 13, 253, 61, 61);
    view.defPosition("b5", 73, 253, 61, 61);
    view.defPosition("c5", 133, 253, 61, 61);
    view.defPosition("d5", 193, 253, 61, 61);
    view.defPosition("e5", 253, 253, 61, 61);
    view.defPosition("f5", 313, 253, 61, 61);
    view.defPosition("g5", 373, 253, 61, 61);
    view.defPosition("h5", 433, 253, 61, 61);
    view.defPosition("i5", 493, 253, 61, 61);
    view.defPosition("a4", 13, 313, 61, 61);
    view.defPosition("b4", 73, 313, 61, 61);
    view.defPosition("c4", 133, 313, 61, 61);
    view.defPosition("d4", 193, 313, 61, 61);
    view.defPosition("e4", 253, 313, 61, 61);
    view.defPosition("f4", 313, 313, 61, 61);
    view.defPosition("g4", 373, 313, 61, 61);
    view.defPosition("h4", 433, 313, 61, 61);
    view.defPosition("i4", 493, 313, 61, 61);
    view.defPosition("a3", 13, 373, 61, 61);
    view.defPosition("b3", 73, 373, 61, 61);
    view.defPosition("c3", 133, 373, 61, 61);
    view.defPosition("d3", 193, 373, 61, 61);
    view.defPosition("e3", 253, 373, 61, 61);
    view.defPosition("f3", 313, 373, 61, 61);
    view.defPosition("g3", 373, 373, 61, 61);
    view.defPosition("h3", 433, 373, 61, 61);
    view.defPosition("i3", 493, 373, 61, 61);
    view.defPosition("a2", 13, 433, 61, 61);
    view.defPosition("b2", 73, 433, 61, 61);
    view.defPosition("c2", 133, 433, 61, 61);
    view.defPosition("d2", 193, 433, 61, 61);
    view.defPosition("e2", 253, 433, 61, 61);
    view.defPosition("f2", 313, 433, 61, 61);
    view.defPosition("g2", 373, 433, 61, 61);
    view.defPosition("h2", 433, 433, 61, 61);
    view.defPosition("i2", 493, 433, 61, 61);
    view.defPosition("a1", 13, 493, 61, 61);
    view.defPosition("b1", 73, 493, 61, 61);
    view.defPosition("c1", 133, 493, 61, 61);
    view.defPosition("d1", 193, 493, 61, 61);
    view.defPosition("e1", 253, 493, 61, 61);
    view.defPosition("f1", 313, 493, 61, 61);
    view.defPosition("g1", 373, 493, 61, 61);
    view.defPosition("h1", 433, 493, 61, 61);
    view.defPosition("i1", 493, 493, 61, 61);
}
