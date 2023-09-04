Dagaz.Controller.persistense = "setup";

Dagaz.View.WIDTH = 330;

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
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "10");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addTurn(1, [0]); // 0
    design.addTurn(2, [1]); // 1
    design.addTurn(2, [0]); // 2
    design.addTurn(1, [1]); // 3

    design.addPosition("a10", [11, 10, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("c10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("d10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("e10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("i10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("j10", [0, 10, 9, 0, -1, 0, 0, 0]);
    design.addPosition("a9", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j9", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a8", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j8", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a7", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j7", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a6", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j6", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a5", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j5", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a4", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j4", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a3", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j3", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a2", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j2", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("j1", [0, 0, 0, 0, -1, 0, -11, -10]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [4], 1);
    design.addMove(0, 1, [1], 1);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [5], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [0], 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("a10", 5, 5, 32, 32);
    view.defPosition("b10", 37, 5, 32, 32);
    view.defPosition("c10", 69, 5, 32, 32);
    view.defPosition("d10", 101, 5, 32, 32);
    view.defPosition("e10", 133, 5, 32, 32);
    view.defPosition("f10", 165, 5, 32, 32);
    view.defPosition("g10", 197, 5, 32, 32);
    view.defPosition("h10", 229, 5, 32, 32);
    view.defPosition("i10", 261, 5, 32, 32);
    view.defPosition("j10", 293, 5, 32, 32);
    view.defPosition("a9", 5, 37, 32, 32);
    view.defPosition("b9", 37, 37, 32, 32);
    view.defPosition("c9", 69, 37, 32, 32);
    view.defPosition("d9", 101, 37, 32, 32);
    view.defPosition("e9", 133, 37, 32, 32);
    view.defPosition("f9", 165, 37, 32, 32);
    view.defPosition("g9", 197, 37, 32, 32);
    view.defPosition("h9", 229, 37, 32, 32);
    view.defPosition("i9", 261, 37, 32, 32);
    view.defPosition("j9", 293, 37, 32, 32);
    view.defPosition("a8", 5, 69, 32, 32);
    view.defPosition("b8", 37, 69, 32, 32);
    view.defPosition("c8", 69, 69, 32, 32);
    view.defPosition("d8", 101, 69, 32, 32);
    view.defPosition("e8", 133, 69, 32, 32);
    view.defPosition("f8", 165, 69, 32, 32);
    view.defPosition("g8", 197, 69, 32, 32);
    view.defPosition("h8", 229, 69, 32, 32);
    view.defPosition("i8", 261, 69, 32, 32);
    view.defPosition("j8", 293, 69, 32, 32);
    view.defPosition("a7", 5, 101, 32, 32);
    view.defPosition("b7", 37, 101, 32, 32);
    view.defPosition("c7", 69, 101, 32, 32);
    view.defPosition("d7", 101, 101, 32, 32);
    view.defPosition("e7", 133, 101, 32, 32);
    view.defPosition("f7", 165, 101, 32, 32);
    view.defPosition("g7", 197, 101, 32, 32);
    view.defPosition("h7", 229, 101, 32, 32);
    view.defPosition("i7", 261, 101, 32, 32);
    view.defPosition("j7", 293, 101, 32, 32);
    view.defPosition("a6", 5, 133, 32, 32);
    view.defPosition("b6", 37, 133, 32, 32);
    view.defPosition("c6", 69, 133, 32, 32);
    view.defPosition("d6", 101, 133, 32, 32);
    view.defPosition("e6", 133, 133, 32, 32);
    view.defPosition("f6", 165, 133, 32, 32);
    view.defPosition("g6", 197, 133, 32, 32);
    view.defPosition("h6", 229, 133, 32, 32);
    view.defPosition("i6", 261, 133, 32, 32);
    view.defPosition("j6", 293, 133, 32, 32);
    view.defPosition("a5", 5, 165, 32, 32);
    view.defPosition("b5", 37, 165, 32, 32);
    view.defPosition("c5", 69, 165, 32, 32);
    view.defPosition("d5", 101, 165, 32, 32);
    view.defPosition("e5", 133, 165, 32, 32);
    view.defPosition("f5", 165, 165, 32, 32);
    view.defPosition("g5", 197, 165, 32, 32);
    view.defPosition("h5", 229, 165, 32, 32);
    view.defPosition("i5", 261, 165, 32, 32);
    view.defPosition("j5", 293, 165, 32, 32);
    view.defPosition("a4", 5, 197, 32, 32);
    view.defPosition("b4", 37, 197, 32, 32);
    view.defPosition("c4", 69, 197, 32, 32);
    view.defPosition("d4", 101, 197, 32, 32);
    view.defPosition("e4", 133, 197, 32, 32);
    view.defPosition("f4", 165, 197, 32, 32);
    view.defPosition("g4", 197, 197, 32, 32);
    view.defPosition("h4", 229, 197, 32, 32);
    view.defPosition("i4", 261, 197, 32, 32);
    view.defPosition("j4", 293, 197, 32, 32);
    view.defPosition("a3", 5, 229, 32, 32);
    view.defPosition("b3", 37, 229, 32, 32);
    view.defPosition("c3", 69, 229, 32, 32);
    view.defPosition("d3", 101, 229, 32, 32);
    view.defPosition("e3", 133, 229, 32, 32);
    view.defPosition("f3", 165, 229, 32, 32);
    view.defPosition("g3", 197, 229, 32, 32);
    view.defPosition("h3", 229, 229, 32, 32);
    view.defPosition("i3", 261, 229, 32, 32);
    view.defPosition("j3", 293, 229, 32, 32);
    view.defPosition("a2", 5, 261, 32, 32);
    view.defPosition("b2", 37, 261, 32, 32);
    view.defPosition("c2", 69, 261, 32, 32);
    view.defPosition("d2", 101, 261, 32, 32);
    view.defPosition("e2", 133, 261, 32, 32);
    view.defPosition("f2", 165, 261, 32, 32);
    view.defPosition("g2", 197, 261, 32, 32);
    view.defPosition("h2", 229, 261, 32, 32);
    view.defPosition("i2", 261, 261, 32, 32);
    view.defPosition("j2", 293, 261, 32, 32);
    view.defPosition("a1", 5, 293, 32, 32);
    view.defPosition("b1", 37, 293, 32, 32);
    view.defPosition("c1", 69, 293, 32, 32);
    view.defPosition("d1", 101, 293, 32, 32);
    view.defPosition("e1", 133, 293, 32, 32);
    view.defPosition("f1", 165, 293, 32, 32);
    view.defPosition("g1", 197, 293, 32, 32);
    view.defPosition("h1", 229, 293, 32, 32);
    view.defPosition("i1", 261, 293, 32, 32);
    view.defPosition("j1", 293, 293, 32, 32);
}
