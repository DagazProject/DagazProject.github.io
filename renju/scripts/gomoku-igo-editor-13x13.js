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

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a13", [14, 13, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("c13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("d13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("e13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("f13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("g13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("h13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("i13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("j13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("k13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("l13", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("m13", [0, 13, 12, 0, -1, 0, 0, 0]);
    design.addPosition("a12", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l12", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m12", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a11", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l11", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m11", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a10", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l10", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m10", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a9", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l9", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m9", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a8", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l8", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m8", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a7", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l7", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m7", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a6", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m6", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a5", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m5", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a4", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m4", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a3", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m3", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a2", [14, 13, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("c2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("m2", [0, 13, 12, 0, -1, 0, -14, -13]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -12, 0, -13]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("l1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("m1", [0, 0, 0, 0, -1, 0, -14, -13]);

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

    design.addPiece("BlackD", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("WhiteD", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("BlackO", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("WhiteO", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("BlackF", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("WhiteF", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("BlackC", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("WhiteC", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "You Black");
    view.defPiece("WhiteStone", "You White");
    view.defPiece("BlackD", "You BlackD");
    view.defPiece("WhiteD", "You WhiteD");
    view.defPiece("BlackO", "You BlackO");
    view.defPiece("WhiteO", "You WhiteO");
    view.defPiece("BlackF", "You BlackF");
    view.defPiece("WhiteF", "You WhiteF");
    view.defPiece("BlackC", "You BlackC");
    view.defPiece("WhiteC", "You WhiteC");
 
    view.defPosition("a13", 41, 41, 42, 42);
    view.defPosition("b13", 83, 41, 42, 42);
    view.defPosition("c13", 125, 41, 42, 42);
    view.defPosition("d13", 167, 41, 42, 42);
    view.defPosition("e13", 209, 41, 42, 42);
    view.defPosition("f13", 251, 41, 42, 42);
    view.defPosition("g13", 293, 41, 42, 42);
    view.defPosition("h13", 335, 41, 42, 42);
    view.defPosition("i13", 377, 41, 42, 42);
    view.defPosition("j13", 419, 41, 42, 42);
    view.defPosition("k13", 461, 41, 42, 42);
    view.defPosition("l13", 503, 41, 42, 42);
    view.defPosition("m13", 545, 41, 42, 42);
    view.defPosition("a12", 41, 83, 42, 42);
    view.defPosition("b12", 83, 83, 42, 42);
    view.defPosition("c12", 125, 83, 42, 42);
    view.defPosition("d12", 167, 83, 42, 42);
    view.defPosition("e12", 209, 83, 42, 42);
    view.defPosition("f12", 251, 83, 42, 42);
    view.defPosition("g12", 293, 83, 42, 42);
    view.defPosition("h12", 335, 83, 42, 42);
    view.defPosition("i12", 377, 83, 42, 42);
    view.defPosition("j12", 419, 83, 42, 42);
    view.defPosition("k12", 461, 83, 42, 42);
    view.defPosition("l12", 503, 83, 42, 42);
    view.defPosition("m12", 545, 83, 42, 42);
    view.defPosition("a11", 41, 125, 42, 42);
    view.defPosition("b11", 83, 125, 42, 42);
    view.defPosition("c11", 125, 125, 42, 42);
    view.defPosition("d11", 167, 125, 42, 42);
    view.defPosition("e11", 209, 125, 42, 42);
    view.defPosition("f11", 251, 125, 42, 42);
    view.defPosition("g11", 293, 125, 42, 42);
    view.defPosition("h11", 335, 125, 42, 42);
    view.defPosition("i11", 377, 125, 42, 42);
    view.defPosition("j11", 419, 125, 42, 42);
    view.defPosition("k11", 461, 125, 42, 42);
    view.defPosition("l11", 503, 125, 42, 42);
    view.defPosition("m11", 545, 125, 42, 42);
    view.defPosition("a10", 41, 167, 42, 42);
    view.defPosition("b10", 83, 167, 42, 42);
    view.defPosition("c10", 125, 167, 42, 42);
    view.defPosition("d10", 167, 167, 42, 42);
    view.defPosition("e10", 209, 167, 42, 42);
    view.defPosition("f10", 251, 167, 42, 42);
    view.defPosition("g10", 293, 167, 42, 42);
    view.defPosition("h10", 335, 167, 42, 42);
    view.defPosition("i10", 377, 167, 42, 42);
    view.defPosition("j10", 419, 167, 42, 42);
    view.defPosition("k10", 461, 167, 42, 42);
    view.defPosition("l10", 503, 167, 42, 42);
    view.defPosition("m10", 545, 167, 42, 42);
    view.defPosition("a9", 41, 209, 42, 42);
    view.defPosition("b9", 83, 209, 42, 42);
    view.defPosition("c9", 125, 209, 42, 42);
    view.defPosition("d9", 167, 209, 42, 42);
    view.defPosition("e9", 209, 209, 42, 42);
    view.defPosition("f9", 251, 209, 42, 42);
    view.defPosition("g9", 293, 209, 42, 42);
    view.defPosition("h9", 335, 209, 42, 42);
    view.defPosition("i9", 377, 209, 42, 42);
    view.defPosition("j9", 419, 209, 42, 42);
    view.defPosition("k9", 461, 209, 42, 42);
    view.defPosition("l9", 503, 209, 42, 42);
    view.defPosition("m9", 545, 209, 42, 42);
    view.defPosition("a8", 41, 251, 42, 42);
    view.defPosition("b8", 83, 251, 42, 42);
    view.defPosition("c8", 125, 251, 42, 42);
    view.defPosition("d8", 167, 251, 42, 42);
    view.defPosition("e8", 209, 251, 42, 42);
    view.defPosition("f8", 251, 251, 42, 42);
    view.defPosition("g8", 293, 251, 42, 42);
    view.defPosition("h8", 335, 251, 42, 42);
    view.defPosition("i8", 377, 251, 42, 42);
    view.defPosition("j8", 419, 251, 42, 42);
    view.defPosition("k8", 461, 251, 42, 42);
    view.defPosition("l8", 503, 251, 42, 42);
    view.defPosition("m8", 545, 251, 42, 42);
    view.defPosition("a7", 41, 293, 42, 42);
    view.defPosition("b7", 83, 293, 42, 42);
    view.defPosition("c7", 125, 293, 42, 42);
    view.defPosition("d7", 167, 293, 42, 42);
    view.defPosition("e7", 209, 293, 42, 42);
    view.defPosition("f7", 251, 293, 42, 42);
    view.defPosition("g7", 293, 293, 42, 42);
    view.defPosition("h7", 335, 293, 42, 42);
    view.defPosition("i7", 377, 293, 42, 42);
    view.defPosition("j7", 419, 293, 42, 42);
    view.defPosition("k7", 461, 293, 42, 42);
    view.defPosition("l7", 503, 293, 42, 42);
    view.defPosition("m7", 545, 293, 42, 42);
    view.defPosition("a6", 41, 335, 42, 42);
    view.defPosition("b6", 83, 335, 42, 42);
    view.defPosition("c6", 125, 335, 42, 42);
    view.defPosition("d6", 167, 335, 42, 42);
    view.defPosition("e6", 209, 335, 42, 42);
    view.defPosition("f6", 251, 335, 42, 42);
    view.defPosition("g6", 293, 335, 42, 42);
    view.defPosition("h6", 335, 335, 42, 42);
    view.defPosition("i6", 377, 335, 42, 42);
    view.defPosition("j6", 419, 335, 42, 42);
    view.defPosition("k6", 461, 335, 42, 42);
    view.defPosition("l6", 503, 335, 42, 42);
    view.defPosition("m6", 545, 335, 42, 42);
    view.defPosition("a5", 41, 377, 42, 42);
    view.defPosition("b5", 83, 377, 42, 42);
    view.defPosition("c5", 125, 377, 42, 42);
    view.defPosition("d5", 167, 377, 42, 42);
    view.defPosition("e5", 209, 377, 42, 42);
    view.defPosition("f5", 251, 377, 42, 42);
    view.defPosition("g5", 293, 377, 42, 42);
    view.defPosition("h5", 335, 377, 42, 42);
    view.defPosition("i5", 377, 377, 42, 42);
    view.defPosition("j5", 419, 377, 42, 42);
    view.defPosition("k5", 461, 377, 42, 42);
    view.defPosition("l5", 503, 377, 42, 42);
    view.defPosition("m5", 545, 377, 42, 42);
    view.defPosition("a4", 41, 419, 42, 42);
    view.defPosition("b4", 83, 419, 42, 42);
    view.defPosition("c4", 125, 419, 42, 42);
    view.defPosition("d4", 167, 419, 42, 42);
    view.defPosition("e4", 209, 419, 42, 42);
    view.defPosition("f4", 251, 419, 42, 42);
    view.defPosition("g4", 293, 419, 42, 42);
    view.defPosition("h4", 335, 419, 42, 42);
    view.defPosition("i4", 377, 419, 42, 42);
    view.defPosition("j4", 419, 419, 42, 42);
    view.defPosition("k4", 461, 419, 42, 42);
    view.defPosition("l4", 503, 419, 42, 42);
    view.defPosition("m4", 545, 419, 42, 42);
    view.defPosition("a3", 41, 461, 42, 42);
    view.defPosition("b3", 83, 461, 42, 42);
    view.defPosition("c3", 125, 461, 42, 42);
    view.defPosition("d3", 167, 461, 42, 42);
    view.defPosition("e3", 209, 461, 42, 42);
    view.defPosition("f3", 251, 461, 42, 42);
    view.defPosition("g3", 293, 461, 42, 42);
    view.defPosition("h3", 335, 461, 42, 42);
    view.defPosition("i3", 377, 461, 42, 42);
    view.defPosition("j3", 419, 461, 42, 42);
    view.defPosition("k3", 461, 461, 42, 42);
    view.defPosition("l3", 503, 461, 42, 42);
    view.defPosition("m3", 545, 461, 42, 42);
    view.defPosition("a2", 41, 503, 42, 42);
    view.defPosition("b2", 83, 503, 42, 42);
    view.defPosition("c2", 125, 503, 42, 42);
    view.defPosition("d2", 167, 503, 42, 42);
    view.defPosition("e2", 209, 503, 42, 42);
    view.defPosition("f2", 251, 503, 42, 42);
    view.defPosition("g2", 293, 503, 42, 42);
    view.defPosition("h2", 335, 503, 42, 42);
    view.defPosition("i2", 377, 503, 42, 42);
    view.defPosition("j2", 419, 503, 42, 42);
    view.defPosition("k2", 461, 503, 42, 42);
    view.defPosition("l2", 503, 503, 42, 42);
    view.defPosition("m2", 545, 503, 42, 42);
    view.defPosition("a1", 41, 545, 42, 42);
    view.defPosition("b1", 83, 545, 42, 42);
    view.defPosition("c1", 125, 545, 42, 42);
    view.defPosition("d1", 167, 545, 42, 42);
    view.defPosition("e1", 209, 545, 42, 42);
    view.defPosition("f1", 251, 545, 42, 42);
    view.defPosition("g1", 293, 545, 42, 42);
    view.defPosition("h1", 335, 545, 42, 42);
    view.defPosition("i1", 377, 545, 42, 42);
    view.defPosition("j1", 419, 545, 42, 42);
    view.defPosition("k1", 461, 545, 42, 42);
    view.defPosition("l1", 503, 545, 42, 42);
    view.defPosition("m1", 545, 545, 42, 42);
}
