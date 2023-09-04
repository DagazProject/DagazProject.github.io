Dagaz.View.MARK_R = 12;
Dagaz.View.CHECK_CANVAS = true;

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
    design.checkVersion("pass-partial", "true");
    design.checkVersion("detect-loops", "true");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Red", [1, 0, 4, 5, 2, 3]);
    design.addPlayer("Purple", [0, 1, 2, 3, 4, 5]);
    design.addPlayer("Yellow", [0, 1, 2, 3, 4, 5]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5]);
    design.addPlayer("Orange", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d13", [0, 0, 0, 14, 13, 0]);
    design.addPosition("e13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("f13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("g13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("j13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("k13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m13", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d12", [0, 1, -13, 14, 13, 0]);
    design.addPosition("e12", [-1, 0, 0, 14, 13, -14]);
    design.addPosition("f12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("g12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("j12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("k12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m12", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d11", [0, 1, -13, 14, 13, 0]);
    design.addPosition("e11", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("f11", [-1, 0, 0, 14, 13, -14]);
    design.addPosition("g11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("j11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("k11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m11", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a10", [0, 1, 0, 14, 0, 0]);
    design.addPosition("b10", [-1, 1, 0, 14, 13, 0]);
    design.addPosition("c10", [-1, 1, 0, 14, 13, 0]);
    design.addPosition("d10", [-1, 1, -13, 14, 13, 0]);
    design.addPosition("e10", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("f10", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("g10", [-1, 1, 0, 14, 13, -14]);
    design.addPosition("h10", [-1, 1, 0, 14, 13, 0]);
    design.addPosition("i10", [-1, 1, 0, 14, 13, 0]);
    design.addPosition("j10", [-1, 0, 0, 0, 13, 0]);
    design.addPosition("k10", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l10", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m10", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b9", [0, 1, -13, 14, 0, -14]);
    design.addPosition("c9", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("d9", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("e9", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("f9", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("g9", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("h9", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("i9", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("j9", [-1, 0, -13, 0, 13, -14]);
    design.addPosition("k9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m9", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c8", [0, 1, -13, 14, 0, -14]);
    design.addPosition("d8", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("e8", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("f8", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("g8", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("h8", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("i8", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("j8", [-1, 0, -13, 0, 13, -14]);
    design.addPosition("k8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m8", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d7", [0, 1, -13, 14, 13, -14]);
    design.addPosition("e7", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("f7", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("g7", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("h7", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("i7", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("j7", [-1, 0, -13, 14, 13, -14]);
    design.addPosition("k7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m7", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a6", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b6", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c6", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d6", [0, 1, -13, 14, 13, 0]);
    design.addPosition("e6", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("f6", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("g6", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("h6", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("i6", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("j6", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("k6", [-1, 0, 0, 14, 13, -14]);
    design.addPosition("l6", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m6", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a5", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b5", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c5", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d5", [0, 1, -13, 14, 13, 0]);
    design.addPosition("e5", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("f5", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("g5", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("h5", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("i5", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("j5", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("k5", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("l5", [-1, 0, 0, 14, 13, -14]);
    design.addPosition("m5", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a4", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b4", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c4", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d4", [0, 1, -13, 0, 0, 0]);
    design.addPosition("e4", [-1, 1, -13, 0, 0, -14]);
    design.addPosition("f4", [-1, 1, -13, 0, 0, -14]);
    design.addPosition("g4", [-1, 1, -13, 14, 0, -14]);
    design.addPosition("h4", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("i4", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("j4", [-1, 1, -13, 0, 13, -14]);
    design.addPosition("k4", [-1, 1, -13, 0, 0, -14]);
    design.addPosition("l4", [-1, 1, -13, 0, 0, -14]);
    design.addPosition("m4", [-1, 0, 0, 0, 0, -14]);
    design.addPosition("a3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("e3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("f3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("g3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h3", [0, 1, -13, 14, 0, -14]);
    design.addPosition("i3", [-1, 1, -13, 14, 13, -14]);
    design.addPosition("j3", [-1, 0, -13, 0, 13, -14]);
    design.addPosition("k3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m3", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("e2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("f2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("g2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i2", [0, 1, -13, 14, 0, -14]);
    design.addPosition("j2", [-1, 0, -13, 0, 13, -14]);
    design.addPosition("k2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m2", [0, 1, 2, 3, 4, 5]);
    design.addPosition("a1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("b1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("c1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("d1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("e1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("f1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("g1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("h1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("i1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("j1", [0, 0, -13, 0, 0, -14]);
    design.addPosition("k1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("l1", [0, 1, 2, 3, 4, 5]);
    design.addPosition("m1", [0, 1, 2, 3, 4, 5]);

    design.addZone("goal-zone", 4, [165, 151, 152, 137, 138, 139]);
    design.addZone("goal-zone", 1, [29, 30, 31, 16, 17, 3]);
    design.addZone("goal-zone", 5, [120, 121, 122, 107, 108, 94]);
    design.addZone("goal-zone", 3, [127, 128, 129, 114, 115, 101]);
    design.addZone("goal-zone", 2, [46, 47, 48, 60, 61, 74]);
    design.addZone("goal-zone", 6, [67, 53, 54, 39, 40, 41]);
    design.addZone("target-zone", 1, [3]);
    design.addZone("target-zone", 2, [48]);
    design.addZone("target-zone", 3, [129]);
    design.addZone("target-zone", 4, [165]);
    design.addZone("target-zone", 6, [39]);
    design.addZone("target-zone", 5, [120]);
    design.addZone("home-zone", 1, [165, 151, 152, 137, 138, 139]);
    design.addZone("home-zone", 2, [120, 121, 122, 107, 108, 94]);
    design.addZone("home-zone", 3, [67, 53, 54, 39, 40, 41]);
    design.addZone("home-zone", 4, [29, 30, 31, 16, 17, 3]);
    design.addZone("home-zone", 6, [127, 128, 129, 114, 115, 101]);
    design.addZone("home-zone", 5, [46, 47, 48, 60, 61, 74]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [4, 4], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [0, 0], 1);

    design.setup("Red", "Man", 165);
    design.setup("Red", "Man", 151);
    design.setup("Red", "Man", 152);
    design.setup("Red", "Man", 137);
    design.setup("Red", "Man", 138);
    design.setup("Red", "Man", 139);
    design.setup("Purple", "Man", 120);
    design.setup("Purple", "Man", 121);
    design.setup("Purple", "Man", 122);
    design.setup("Purple", "Man", 107);
    design.setup("Purple", "Man", 108);
    design.setup("Purple", "Man", 94);
    design.setup("Yellow", "Man", 67);
    design.setup("Yellow", "Man", 53);
    design.setup("Yellow", "Man", 54);
    design.setup("Yellow", "Man", 39);
    design.setup("Yellow", "Man", 40);
    design.setup("Yellow", "Man", 41);
    design.setup("Blue", "Man", 29);
    design.setup("Blue", "Man", 30);
    design.setup("Blue", "Man", 31);
    design.setup("Blue", "Man", 16);
    design.setup("Blue", "Man", 17);
    design.setup("Blue", "Man", 3);
    design.setup("Green", "Man", 46);
    design.setup("Green", "Man", 47);
    design.setup("Green", "Man", 48);
    design.setup("Green", "Man", 60);
    design.setup("Green", "Man", 61);
    design.setup("Green", "Man", 74);
    design.setup("Orange", "Man", 127);
    design.setup("Orange", "Man", 128);
    design.setup("Orange", "Man", 129);
    design.setup("Orange", "Man", 114);
    design.setup("Orange", "Man", 115);
    design.setup("Orange", "Man", 101);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedMan", "Red Man");
    view.defPiece("PurpleMan", "Purple Man");
    view.defPiece("YellowMan", "Yellow Man");
    view.defPiece("BlueMan", "Blue Man");
    view.defPiece("GreenMan", "Green Man");
    view.defPiece("OrangeMan", "Orange Man");
 
    view.defPosition("a13", 88, 8, 30, 30);
    view.defPosition("b13", 138, 8, 30, 30);
    view.defPosition("c13", 188, 8, 30, 30);
    view.defPosition("d13", 238, 8, 30, 30);
    view.defPosition("e13", 288, 8, 30, 30);
    view.defPosition("f13", 338, 8, 30, 30);
    view.defPosition("g13", 388, 8, 30, 30);
    view.defPosition("h13", 438, 8, 30, 30);
    view.defPosition("i13", 488, 8, 30, 30);
    view.defPosition("j13", 538, 8, 30, 30);
    view.defPosition("k13", 588, 8, 30, 30);
    view.defPosition("l13", 638, 8, 30, 30);
    view.defPosition("m13", 688, 8, 30, 30);
    view.defPosition("a12", 63, 52, 30, 30);
    view.defPosition("b12", 113, 52, 30, 30);
    view.defPosition("c12", 163, 52, 30, 30);
    view.defPosition("d12", 213, 52, 30, 30);
    view.defPosition("e12", 263, 52, 30, 30);
    view.defPosition("f12", 313, 52, 30, 30);
    view.defPosition("g12", 363, 52, 30, 30);
    view.defPosition("h12", 413, 52, 30, 30);
    view.defPosition("i12", 463, 52, 30, 30);
    view.defPosition("j12", 513, 52, 30, 30);
    view.defPosition("k12", 563, 52, 30, 30);
    view.defPosition("l12", 613, 52, 30, 30);
    view.defPosition("m12", 663, 52, 30, 30);
    view.defPosition("a11", 38, 96, 30, 30);
    view.defPosition("b11", 88, 96, 30, 30);
    view.defPosition("c11", 138, 96, 30, 30);
    view.defPosition("d11", 188, 96, 30, 30);
    view.defPosition("e11", 238, 96, 30, 30);
    view.defPosition("f11", 288, 96, 30, 30);
    view.defPosition("g11", 338, 96, 30, 30);
    view.defPosition("h11", 388, 96, 30, 30);
    view.defPosition("i11", 438, 96, 30, 30);
    view.defPosition("j11", 488, 96, 30, 30);
    view.defPosition("k11", 538, 96, 30, 30);
    view.defPosition("l11", 588, 96, 30, 30);
    view.defPosition("m11", 638, 96, 30, 30);
    view.defPosition("a10", 13, 140, 30, 30);
    view.defPosition("b10", 63, 140, 30, 30);
    view.defPosition("c10", 113, 140, 30, 30);
    view.defPosition("d10", 163, 140, 30, 30);
    view.defPosition("e10", 213, 140, 30, 30);
    view.defPosition("f10", 263, 140, 30, 30);
    view.defPosition("g10", 313, 140, 30, 30);
    view.defPosition("h10", 363, 140, 30, 30);
    view.defPosition("i10", 413, 140, 30, 30);
    view.defPosition("j10", 463, 140, 30, 30);
    view.defPosition("k10", 513, 140, 30, 30);
    view.defPosition("l10", 563, 140, 30, 30);
    view.defPosition("m10", 613, 140, 30, 30);
    view.defPosition("a9", -12, 184, 30, 30);
    view.defPosition("b9", 38, 184, 30, 30);
    view.defPosition("c9", 88, 184, 30, 30);
    view.defPosition("d9", 138, 184, 30, 30);
    view.defPosition("e9", 188, 184, 30, 30);
    view.defPosition("f9", 238, 184, 30, 30);
    view.defPosition("g9", 288, 184, 30, 30);
    view.defPosition("h9", 338, 184, 30, 30);
    view.defPosition("i9", 388, 184, 30, 30);
    view.defPosition("j9", 438, 184, 30, 30);
    view.defPosition("k9", 488, 184, 30, 30);
    view.defPosition("l9", 538, 184, 30, 30);
    view.defPosition("m9", 588, 184, 30, 30);
    view.defPosition("a8", -37, 228, 30, 30);
    view.defPosition("b8", 13, 228, 30, 30);
    view.defPosition("c8", 63, 228, 30, 30);
    view.defPosition("d8", 113, 228, 30, 30);
    view.defPosition("e8", 163, 228, 30, 30);
    view.defPosition("f8", 213, 228, 30, 30);
    view.defPosition("g8", 263, 228, 30, 30);
    view.defPosition("h8", 313, 228, 30, 30);
    view.defPosition("i8", 363, 228, 30, 30);
    view.defPosition("j8", 413, 228, 30, 30);
    view.defPosition("k8", 463, 228, 30, 30);
    view.defPosition("l8", 513, 228, 30, 30);
    view.defPosition("m8", 563, 228, 30, 30);
    view.defPosition("a7", -62, 272, 30, 30);
    view.defPosition("b7", -12, 272, 30, 30);
    view.defPosition("c7", 38, 272, 30, 30);
    view.defPosition("d7", 88, 272, 30, 30);
    view.defPosition("e7", 138, 272, 30, 30);
    view.defPosition("f7", 188, 272, 30, 30);
    view.defPosition("g7", 238, 272, 30, 30);
    view.defPosition("h7", 288, 272, 30, 30);
    view.defPosition("i7", 338, 272, 30, 30);
    view.defPosition("j7", 388, 272, 30, 30);
    view.defPosition("k7", 438, 272, 30, 30);
    view.defPosition("l7", 488, 272, 30, 30);
    view.defPosition("m7", 538, 272, 30, 30);
    view.defPosition("a6", -87, 316, 30, 30);
    view.defPosition("b6", -37, 316, 30, 30);
    view.defPosition("c6", 13, 316, 30, 30);
    view.defPosition("d6", 63, 316, 30, 30);
    view.defPosition("e6", 113, 316, 30, 30);
    view.defPosition("f6", 163, 316, 30, 30);
    view.defPosition("g6", 213, 316, 30, 30);
    view.defPosition("h6", 263, 316, 30, 30);
    view.defPosition("i6", 313, 316, 30, 30);
    view.defPosition("j6", 363, 316, 30, 30);
    view.defPosition("k6", 413, 316, 30, 30);
    view.defPosition("l6", 463, 316, 30, 30);
    view.defPosition("m6", 513, 316, 30, 30);
    view.defPosition("a5", -112, 360, 30, 30);
    view.defPosition("b5", -62, 360, 30, 30);
    view.defPosition("c5", -12, 360, 30, 30);
    view.defPosition("d5", 38, 360, 30, 30);
    view.defPosition("e5", 88, 360, 30, 30);
    view.defPosition("f5", 138, 360, 30, 30);
    view.defPosition("g5", 188, 360, 30, 30);
    view.defPosition("h5", 238, 360, 30, 30);
    view.defPosition("i5", 288, 360, 30, 30);
    view.defPosition("j5", 338, 360, 30, 30);
    view.defPosition("k5", 388, 360, 30, 30);
    view.defPosition("l5", 438, 360, 30, 30);
    view.defPosition("m5", 488, 360, 30, 30);
    view.defPosition("a4", -137, 404, 30, 30);
    view.defPosition("b4", -87, 404, 30, 30);
    view.defPosition("c4", -37, 404, 30, 30);
    view.defPosition("d4", 13, 404, 30, 30);
    view.defPosition("e4", 63, 404, 30, 30);
    view.defPosition("f4", 113, 404, 30, 30);
    view.defPosition("g4", 163, 404, 30, 30);
    view.defPosition("h4", 213, 404, 30, 30);
    view.defPosition("i4", 263, 404, 30, 30);
    view.defPosition("j4", 313, 404, 30, 30);
    view.defPosition("k4", 363, 404, 30, 30);
    view.defPosition("l4", 413, 404, 30, 30);
    view.defPosition("m4", 463, 404, 30, 30);
    view.defPosition("a3", -162, 448, 30, 30);
    view.defPosition("b3", -112, 448, 30, 30);
    view.defPosition("c3", -62, 448, 30, 30);
    view.defPosition("d3", -12, 448, 30, 30);
    view.defPosition("e3", 38, 448, 30, 30);
    view.defPosition("f3", 88, 448, 30, 30);
    view.defPosition("g3", 138, 448, 30, 30);
    view.defPosition("h3", 188, 448, 30, 30);
    view.defPosition("i3", 238, 448, 30, 30);
    view.defPosition("j3", 288, 448, 30, 30);
    view.defPosition("k3", 338, 448, 30, 30);
    view.defPosition("l3", 388, 448, 30, 30);
    view.defPosition("m3", 438, 448, 30, 30);
    view.defPosition("a2", -187, 492, 30, 30);
    view.defPosition("b2", -137, 492, 30, 30);
    view.defPosition("c2", -87, 492, 30, 30);
    view.defPosition("d2", -37, 492, 30, 30);
    view.defPosition("e2", 13, 492, 30, 30);
    view.defPosition("f2", 63, 492, 30, 30);
    view.defPosition("g2", 113, 492, 30, 30);
    view.defPosition("h2", 163, 492, 30, 30);
    view.defPosition("i2", 213, 492, 30, 30);
    view.defPosition("j2", 263, 492, 30, 30);
    view.defPosition("k2", 313, 492, 30, 30);
    view.defPosition("l2", 363, 492, 30, 30);
    view.defPosition("m2", 413, 492, 30, 30);
    view.defPosition("a1", -212, 536, 30, 30);
    view.defPosition("b1", -162, 536, 30, 30);
    view.defPosition("c1", -112, 536, 30, 30);
    view.defPosition("d1", -62, 536, 30, 30);
    view.defPosition("e1", -12, 536, 30, 30);
    view.defPosition("f1", 38, 536, 30, 30);
    view.defPosition("g1", 88, 536, 30, 30);
    view.defPosition("h1", 138, 536, 30, 30);
    view.defPosition("i1", 188, 536, 30, 30);
    view.defPosition("j1", 238, 536, 30, 30);
    view.defPosition("k1", 288, 536, 30, 30);
    view.defPosition("l1", 338, 536, 30, 30);
    view.defPosition("m1", 388, 536, 30, 30);
}
