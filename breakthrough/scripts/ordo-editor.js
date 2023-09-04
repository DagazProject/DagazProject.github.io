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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("You", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a8", [0, 1, 10, 0, 0, 11, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("c8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("d8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("e8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("f8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("g8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("h8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("i8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("j8", [-1, 0, 10, 0, 0, 0, 9, 0]);
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

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("White", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("Black", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "You White");
    view.defPiece("BlackMan", "You Black");
 
    view.defPosition("a8", 2, 2, 35, 35);
    view.defPosition("b8", 37, 2, 35, 35);
    view.defPosition("c8", 72, 2, 35, 35);
    view.defPosition("d8", 107, 2, 35, 35);
    view.defPosition("e8", 142, 2, 35, 35);
    view.defPosition("f8", 177, 2, 35, 35);
    view.defPosition("g8", 212, 2, 35, 35);
    view.defPosition("h8", 247, 2, 35, 35);
    view.defPosition("i8", 282, 2, 35, 35);
    view.defPosition("j8", 317, 2, 35, 35);
    view.defPosition("a7", 2, 37, 35, 35);
    view.defPosition("b7", 37, 37, 35, 35);
    view.defPosition("c7", 72, 37, 35, 35);
    view.defPosition("d7", 107, 37, 35, 35);
    view.defPosition("e7", 142, 37, 35, 35);
    view.defPosition("f7", 177, 37, 35, 35);
    view.defPosition("g7", 212, 37, 35, 35);
    view.defPosition("h7", 247, 37, 35, 35);
    view.defPosition("i7", 282, 37, 35, 35);
    view.defPosition("j7", 317, 37, 35, 35);
    view.defPosition("a6", 2, 72, 35, 35);
    view.defPosition("b6", 37, 72, 35, 35);
    view.defPosition("c6", 72, 72, 35, 35);
    view.defPosition("d6", 107, 72, 35, 35);
    view.defPosition("e6", 142, 72, 35, 35);
    view.defPosition("f6", 177, 72, 35, 35);
    view.defPosition("g6", 212, 72, 35, 35);
    view.defPosition("h6", 247, 72, 35, 35);
    view.defPosition("i6", 282, 72, 35, 35);
    view.defPosition("j6", 317, 72, 35, 35);
    view.defPosition("a5", 2, 107, 35, 35);
    view.defPosition("b5", 37, 107, 35, 35);
    view.defPosition("c5", 72, 107, 35, 35);
    view.defPosition("d5", 107, 107, 35, 35);
    view.defPosition("e5", 142, 107, 35, 35);
    view.defPosition("f5", 177, 107, 35, 35);
    view.defPosition("g5", 212, 107, 35, 35);
    view.defPosition("h5", 247, 107, 35, 35);
    view.defPosition("i5", 282, 107, 35, 35);
    view.defPosition("j5", 317, 107, 35, 35);
    view.defPosition("a4", 2, 142, 35, 35);
    view.defPosition("b4", 37, 142, 35, 35);
    view.defPosition("c4", 72, 142, 35, 35);
    view.defPosition("d4", 107, 142, 35, 35);
    view.defPosition("e4", 142, 142, 35, 35);
    view.defPosition("f4", 177, 142, 35, 35);
    view.defPosition("g4", 212, 142, 35, 35);
    view.defPosition("h4", 247, 142, 35, 35);
    view.defPosition("i4", 282, 142, 35, 35);
    view.defPosition("j4", 317, 142, 35, 35);
    view.defPosition("a3", 2, 177, 35, 35);
    view.defPosition("b3", 37, 177, 35, 35);
    view.defPosition("c3", 72, 177, 35, 35);
    view.defPosition("d3", 107, 177, 35, 35);
    view.defPosition("e3", 142, 177, 35, 35);
    view.defPosition("f3", 177, 177, 35, 35);
    view.defPosition("g3", 212, 177, 35, 35);
    view.defPosition("h3", 247, 177, 35, 35);
    view.defPosition("i3", 282, 177, 35, 35);
    view.defPosition("j3", 317, 177, 35, 35);
    view.defPosition("a2", 2, 212, 35, 35);
    view.defPosition("b2", 37, 212, 35, 35);
    view.defPosition("c2", 72, 212, 35, 35);
    view.defPosition("d2", 107, 212, 35, 35);
    view.defPosition("e2", 142, 212, 35, 35);
    view.defPosition("f2", 177, 212, 35, 35);
    view.defPosition("g2", 212, 212, 35, 35);
    view.defPosition("h2", 247, 212, 35, 35);
    view.defPosition("i2", 282, 212, 35, 35);
    view.defPosition("j2", 317, 212, 35, 35);
    view.defPosition("a1", 2, 247, 35, 35);
    view.defPosition("b1", 37, 247, 35, 35);
    view.defPosition("c1", 72, 247, 35, 35);
    view.defPosition("d1", 107, 247, 35, 35);
    view.defPosition("e1", 142, 247, 35, 35);
    view.defPosition("f1", 177, 247, 35, 35);
    view.defPosition("g1", 212, 247, 35, 35);
    view.defPosition("h1", 247, 247, 35, 35);
    view.defPosition("i1", 282, 247, 35, 35);
    view.defPosition("j1", 317, 247, 35, 35);
}
