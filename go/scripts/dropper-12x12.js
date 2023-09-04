Dagaz.Controller.persistense = "setup";

Dagaz.View.WIDTH = 394;

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

    design.addPosition("a12", [13, 12, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("c12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("d12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("e12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("f12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("g12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("h12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("i12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("j12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("k12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a9", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l9", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a8", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l4", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l3", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l2", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("l1", [0, 0, 0, 0, -1, 0, -13, -12]);

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
 
    view.defPosition("a12", 5, 5, 32, 32);
    view.defPosition("b12", 37, 5, 32, 32);
    view.defPosition("c12", 69, 5, 32, 32);
    view.defPosition("d12", 101, 5, 32, 32);
    view.defPosition("e12", 133, 5, 32, 32);
    view.defPosition("f12", 165, 5, 32, 32);
    view.defPosition("g12", 197, 5, 32, 32);
    view.defPosition("h12", 229, 5, 32, 32);
    view.defPosition("i12", 261, 5, 32, 32);
    view.defPosition("j12", 293, 5, 32, 32);
    view.defPosition("k12", 325, 5, 32, 32);
    view.defPosition("l12", 357, 5, 32, 32);
    view.defPosition("a11", 5, 37, 32, 32);
    view.defPosition("b11", 37, 37, 32, 32);
    view.defPosition("c11", 69, 37, 32, 32);
    view.defPosition("d11", 101, 37, 32, 32);
    view.defPosition("e11", 133, 37, 32, 32);
    view.defPosition("f11", 165, 37, 32, 32);
    view.defPosition("g11", 197, 37, 32, 32);
    view.defPosition("h11", 229, 37, 32, 32);
    view.defPosition("i11", 261, 37, 32, 32);
    view.defPosition("j11", 293, 37, 32, 32);
    view.defPosition("k11", 325, 37, 32, 32);
    view.defPosition("l11", 357, 37, 32, 32);
    view.defPosition("a10", 5, 69, 32, 32);
    view.defPosition("b10", 37, 69, 32, 32);
    view.defPosition("c10", 69, 69, 32, 32);
    view.defPosition("d10", 101, 69, 32, 32);
    view.defPosition("e10", 133, 69, 32, 32);
    view.defPosition("f10", 165, 69, 32, 32);
    view.defPosition("g10", 197, 69, 32, 32);
    view.defPosition("h10", 229, 69, 32, 32);
    view.defPosition("i10", 261, 69, 32, 32);
    view.defPosition("j10", 293, 69, 32, 32);
    view.defPosition("k10", 325, 69, 32, 32);
    view.defPosition("l10", 357, 69, 32, 32);
    view.defPosition("a9", 5, 101, 32, 32);
    view.defPosition("b9", 37, 101, 32, 32);
    view.defPosition("c9", 69, 101, 32, 32);
    view.defPosition("d9", 101, 101, 32, 32);
    view.defPosition("e9", 133, 101, 32, 32);
    view.defPosition("f9", 165, 101, 32, 32);
    view.defPosition("g9", 197, 101, 32, 32);
    view.defPosition("h9", 229, 101, 32, 32);
    view.defPosition("i9", 261, 101, 32, 32);
    view.defPosition("j9", 293, 101, 32, 32);
    view.defPosition("k9", 325, 101, 32, 32);
    view.defPosition("l9", 357, 101, 32, 32);
    view.defPosition("a8", 5, 133, 32, 32);
    view.defPosition("b8", 37, 133, 32, 32);
    view.defPosition("c8", 69, 133, 32, 32);
    view.defPosition("d8", 101, 133, 32, 32);
    view.defPosition("e8", 133, 133, 32, 32);
    view.defPosition("f8", 165, 133, 32, 32);
    view.defPosition("g8", 197, 133, 32, 32);
    view.defPosition("h8", 229, 133, 32, 32);
    view.defPosition("i8", 261, 133, 32, 32);
    view.defPosition("j8", 293, 133, 32, 32);
    view.defPosition("k8", 325, 133, 32, 32);
    view.defPosition("l8", 357, 133, 32, 32);
    view.defPosition("a7", 5, 165, 32, 32);
    view.defPosition("b7", 37, 165, 32, 32);
    view.defPosition("c7", 69, 165, 32, 32);
    view.defPosition("d7", 101, 165, 32, 32);
    view.defPosition("e7", 133, 165, 32, 32);
    view.defPosition("f7", 165, 165, 32, 32);
    view.defPosition("g7", 197, 165, 32, 32);
    view.defPosition("h7", 229, 165, 32, 32);
    view.defPosition("i7", 261, 165, 32, 32);
    view.defPosition("j7", 293, 165, 32, 32);
    view.defPosition("k7", 325, 165, 32, 32);
    view.defPosition("l7", 357, 165, 32, 32);
    view.defPosition("a6", 5, 197, 32, 32);
    view.defPosition("b6", 37, 197, 32, 32);
    view.defPosition("c6", 69, 197, 32, 32);
    view.defPosition("d6", 101, 197, 32, 32);
    view.defPosition("e6", 133, 197, 32, 32);
    view.defPosition("f6", 165, 197, 32, 32);
    view.defPosition("g6", 197, 197, 32, 32);
    view.defPosition("h6", 229, 197, 32, 32);
    view.defPosition("i6", 261, 197, 32, 32);
    view.defPosition("j6", 293, 197, 32, 32);
    view.defPosition("k6", 325, 197, 32, 32);
    view.defPosition("l6", 357, 197, 32, 32);
    view.defPosition("a5", 5, 229, 32, 32);
    view.defPosition("b5", 37, 229, 32, 32);
    view.defPosition("c5", 69, 229, 32, 32);
    view.defPosition("d5", 101, 229, 32, 32);
    view.defPosition("e5", 133, 229, 32, 32);
    view.defPosition("f5", 165, 229, 32, 32);
    view.defPosition("g5", 197, 229, 32, 32);
    view.defPosition("h5", 229, 229, 32, 32);
    view.defPosition("i5", 261, 229, 32, 32);
    view.defPosition("j5", 293, 229, 32, 32);
    view.defPosition("k5", 325, 229, 32, 32);
    view.defPosition("l5", 357, 229, 32, 32);
    view.defPosition("a4", 5, 261, 32, 32);
    view.defPosition("b4", 37, 261, 32, 32);
    view.defPosition("c4", 69, 261, 32, 32);
    view.defPosition("d4", 101, 261, 32, 32);
    view.defPosition("e4", 133, 261, 32, 32);
    view.defPosition("f4", 165, 261, 32, 32);
    view.defPosition("g4", 197, 261, 32, 32);
    view.defPosition("h4", 229, 261, 32, 32);
    view.defPosition("i4", 261, 261, 32, 32);
    view.defPosition("j4", 293, 261, 32, 32);
    view.defPosition("k4", 325, 261, 32, 32);
    view.defPosition("l4", 357, 261, 32, 32);
    view.defPosition("a3", 5, 293, 32, 32);
    view.defPosition("b3", 37, 293, 32, 32);
    view.defPosition("c3", 69, 293, 32, 32);
    view.defPosition("d3", 101, 293, 32, 32);
    view.defPosition("e3", 133, 293, 32, 32);
    view.defPosition("f3", 165, 293, 32, 32);
    view.defPosition("g3", 197, 293, 32, 32);
    view.defPosition("h3", 229, 293, 32, 32);
    view.defPosition("i3", 261, 293, 32, 32);
    view.defPosition("j3", 293, 293, 32, 32);
    view.defPosition("k3", 325, 293, 32, 32);
    view.defPosition("l3", 357, 293, 32, 32);
    view.defPosition("a2", 5, 325, 32, 32);
    view.defPosition("b2", 37, 325, 32, 32);
    view.defPosition("c2", 69, 325, 32, 32);
    view.defPosition("d2", 101, 325, 32, 32);
    view.defPosition("e2", 133, 325, 32, 32);
    view.defPosition("f2", 165, 325, 32, 32);
    view.defPosition("g2", 197, 325, 32, 32);
    view.defPosition("h2", 229, 325, 32, 32);
    view.defPosition("i2", 261, 325, 32, 32);
    view.defPosition("j2", 293, 325, 32, 32);
    view.defPosition("k2", 325, 325, 32, 32);
    view.defPosition("l2", 357, 325, 32, 32);
    view.defPosition("a1", 5, 357, 32, 32);
    view.defPosition("b1", 37, 357, 32, 32);
    view.defPosition("c1", 69, 357, 32, 32);
    view.defPosition("d1", 101, 357, 32, 32);
    view.defPosition("e1", 133, 357, 32, 32);
    view.defPosition("f1", 165, 357, 32, 32);
    view.defPosition("g1", 197, 357, 32, 32);
    view.defPosition("h1", 229, 357, 32, 32);
    view.defPosition("i1", 261, 357, 32, 32);
    view.defPosition("j1", 293, 357, 32, 32);
    view.defPosition("k1", 325, 357, 32, 32);
    view.defPosition("l1", 357, 357, 32, 32);
}
