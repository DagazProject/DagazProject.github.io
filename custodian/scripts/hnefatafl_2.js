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
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("tafl-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a13", [0, 1, 13, 0]);
    design.addPosition("b13", [-1, 1, 13, 0]);
    design.addPosition("c13", [-1, 1, 13, 0]);
    design.addPosition("d13", [-1, 1, 13, 0]);
    design.addPosition("e13", [-1, 1, 13, 0]);
    design.addPosition("f13", [-1, 1, 13, 0]);
    design.addPosition("g13", [-1, 1, 13, 0]);
    design.addPosition("h13", [-1, 1, 13, 0]);
    design.addPosition("i13", [-1, 1, 13, 0]);
    design.addPosition("j13", [-1, 1, 13, 0]);
    design.addPosition("k13", [-1, 1, 13, 0]);
    design.addPosition("l13", [-1, 1, 13, 0]);
    design.addPosition("m13", [-1, 0, 13, 0]);
    design.addPosition("a12", [0, 1, 13, -13]);
    design.addPosition("b12", [-1, 1, 13, -13]);
    design.addPosition("c12", [-1, 1, 13, -13]);
    design.addPosition("d12", [-1, 1, 13, -13]);
    design.addPosition("e12", [-1, 1, 13, -13]);
    design.addPosition("f12", [-1, 1, 13, -13]);
    design.addPosition("g12", [-1, 1, 13, -13]);
    design.addPosition("h12", [-1, 1, 13, -13]);
    design.addPosition("i12", [-1, 1, 13, -13]);
    design.addPosition("j12", [-1, 1, 13, -13]);
    design.addPosition("k12", [-1, 1, 13, -13]);
    design.addPosition("l12", [-1, 1, 13, -13]);
    design.addPosition("m12", [-1, 0, 13, -13]);
    design.addPosition("a11", [0, 1, 13, -13]);
    design.addPosition("b11", [-1, 1, 13, -13]);
    design.addPosition("c11", [-1, 1, 13, -13]);
    design.addPosition("d11", [-1, 1, 13, -13]);
    design.addPosition("e11", [-1, 1, 13, -13]);
    design.addPosition("f11", [-1, 1, 13, -13]);
    design.addPosition("g11", [-1, 1, 13, -13]);
    design.addPosition("h11", [-1, 1, 13, -13]);
    design.addPosition("i11", [-1, 1, 13, -13]);
    design.addPosition("j11", [-1, 1, 13, -13]);
    design.addPosition("k11", [-1, 1, 13, -13]);
    design.addPosition("l11", [-1, 1, 13, -13]);
    design.addPosition("m11", [-1, 0, 13, -13]);
    design.addPosition("a10", [0, 1, 13, -13]);
    design.addPosition("b10", [-1, 1, 13, -13]);
    design.addPosition("c10", [-1, 1, 13, -13]);
    design.addPosition("d10", [-1, 1, 13, -13]);
    design.addPosition("e10", [-1, 1, 13, -13]);
    design.addPosition("f10", [-1, 1, 13, -13]);
    design.addPosition("g10", [-1, 1, 13, -13]);
    design.addPosition("h10", [-1, 1, 13, -13]);
    design.addPosition("i10", [-1, 1, 13, -13]);
    design.addPosition("j10", [-1, 1, 13, -13]);
    design.addPosition("k10", [-1, 1, 13, -13]);
    design.addPosition("l10", [-1, 1, 13, -13]);
    design.addPosition("m10", [-1, 0, 13, -13]);
    design.addPosition("a9", [0, 1, 13, -13]);
    design.addPosition("b9", [-1, 1, 13, -13]);
    design.addPosition("c9", [-1, 1, 13, -13]);
    design.addPosition("d9", [-1, 1, 13, -13]);
    design.addPosition("e9", [-1, 1, 13, -13]);
    design.addPosition("f9", [-1, 1, 13, -13]);
    design.addPosition("g9", [-1, 1, 13, -13]);
    design.addPosition("h9", [-1, 1, 13, -13]);
    design.addPosition("i9", [-1, 1, 13, -13]);
    design.addPosition("j9", [-1, 1, 13, -13]);
    design.addPosition("k9", [-1, 1, 13, -13]);
    design.addPosition("l9", [-1, 1, 13, -13]);
    design.addPosition("m9", [-1, 0, 13, -13]);
    design.addPosition("a8", [0, 1, 13, -13]);
    design.addPosition("b8", [-1, 1, 13, -13]);
    design.addPosition("c8", [-1, 1, 13, -13]);
    design.addPosition("d8", [-1, 1, 13, -13]);
    design.addPosition("e8", [-1, 1, 13, -13]);
    design.addPosition("f8", [-1, 1, 13, -13]);
    design.addPosition("g8", [-1, 1, 13, -13]);
    design.addPosition("h8", [-1, 1, 13, -13]);
    design.addPosition("i8", [-1, 1, 13, -13]);
    design.addPosition("j8", [-1, 1, 13, -13]);
    design.addPosition("k8", [-1, 1, 13, -13]);
    design.addPosition("l8", [-1, 1, 13, -13]);
    design.addPosition("m8", [-1, 0, 13, -13]);
    design.addPosition("a7", [0, 1, 13, -13]);
    design.addPosition("b7", [-1, 1, 13, -13]);
    design.addPosition("c7", [-1, 1, 13, -13]);
    design.addPosition("d7", [-1, 1, 13, -13]);
    design.addPosition("e7", [-1, 1, 13, -13]);
    design.addPosition("f7", [-1, 1, 13, -13]);
    design.addPosition("g7", [-1, 1, 13, -13]);
    design.addPosition("h7", [-1, 1, 13, -13]);
    design.addPosition("i7", [-1, 1, 13, -13]);
    design.addPosition("j7", [-1, 1, 13, -13]);
    design.addPosition("k7", [-1, 1, 13, -13]);
    design.addPosition("l7", [-1, 1, 13, -13]);
    design.addPosition("m7", [-1, 0, 13, -13]);
    design.addPosition("a6", [0, 1, 13, -13]);
    design.addPosition("b6", [-1, 1, 13, -13]);
    design.addPosition("c6", [-1, 1, 13, -13]);
    design.addPosition("d6", [-1, 1, 13, -13]);
    design.addPosition("e6", [-1, 1, 13, -13]);
    design.addPosition("f6", [-1, 1, 13, -13]);
    design.addPosition("g6", [-1, 1, 13, -13]);
    design.addPosition("h6", [-1, 1, 13, -13]);
    design.addPosition("i6", [-1, 1, 13, -13]);
    design.addPosition("j6", [-1, 1, 13, -13]);
    design.addPosition("k6", [-1, 1, 13, -13]);
    design.addPosition("l6", [-1, 1, 13, -13]);
    design.addPosition("m6", [-1, 0, 13, -13]);
    design.addPosition("a5", [0, 1, 13, -13]);
    design.addPosition("b5", [-1, 1, 13, -13]);
    design.addPosition("c5", [-1, 1, 13, -13]);
    design.addPosition("d5", [-1, 1, 13, -13]);
    design.addPosition("e5", [-1, 1, 13, -13]);
    design.addPosition("f5", [-1, 1, 13, -13]);
    design.addPosition("g5", [-1, 1, 13, -13]);
    design.addPosition("h5", [-1, 1, 13, -13]);
    design.addPosition("i5", [-1, 1, 13, -13]);
    design.addPosition("j5", [-1, 1, 13, -13]);
    design.addPosition("k5", [-1, 1, 13, -13]);
    design.addPosition("l5", [-1, 1, 13, -13]);
    design.addPosition("m5", [-1, 0, 13, -13]);
    design.addPosition("a4", [0, 1, 13, -13]);
    design.addPosition("b4", [-1, 1, 13, -13]);
    design.addPosition("c4", [-1, 1, 13, -13]);
    design.addPosition("d4", [-1, 1, 13, -13]);
    design.addPosition("e4", [-1, 1, 13, -13]);
    design.addPosition("f4", [-1, 1, 13, -13]);
    design.addPosition("g4", [-1, 1, 13, -13]);
    design.addPosition("h4", [-1, 1, 13, -13]);
    design.addPosition("i4", [-1, 1, 13, -13]);
    design.addPosition("j4", [-1, 1, 13, -13]);
    design.addPosition("k4", [-1, 1, 13, -13]);
    design.addPosition("l4", [-1, 1, 13, -13]);
    design.addPosition("m4", [-1, 0, 13, -13]);
    design.addPosition("a3", [0, 1, 13, -13]);
    design.addPosition("b3", [-1, 1, 13, -13]);
    design.addPosition("c3", [-1, 1, 13, -13]);
    design.addPosition("d3", [-1, 1, 13, -13]);
    design.addPosition("e3", [-1, 1, 13, -13]);
    design.addPosition("f3", [-1, 1, 13, -13]);
    design.addPosition("g3", [-1, 1, 13, -13]);
    design.addPosition("h3", [-1, 1, 13, -13]);
    design.addPosition("i3", [-1, 1, 13, -13]);
    design.addPosition("j3", [-1, 1, 13, -13]);
    design.addPosition("k3", [-1, 1, 13, -13]);
    design.addPosition("l3", [-1, 1, 13, -13]);
    design.addPosition("m3", [-1, 0, 13, -13]);
    design.addPosition("a2", [0, 1, 13, -13]);
    design.addPosition("b2", [-1, 1, 13, -13]);
    design.addPosition("c2", [-1, 1, 13, -13]);
    design.addPosition("d2", [-1, 1, 13, -13]);
    design.addPosition("e2", [-1, 1, 13, -13]);
    design.addPosition("f2", [-1, 1, 13, -13]);
    design.addPosition("g2", [-1, 1, 13, -13]);
    design.addPosition("h2", [-1, 1, 13, -13]);
    design.addPosition("i2", [-1, 1, 13, -13]);
    design.addPosition("j2", [-1, 1, 13, -13]);
    design.addPosition("k2", [-1, 1, 13, -13]);
    design.addPosition("l2", [-1, 1, 13, -13]);
    design.addPosition("m2", [-1, 0, 13, -13]);
    design.addPosition("a1", [0, 1, 0, -13]);
    design.addPosition("b1", [-1, 1, 0, -13]);
    design.addPosition("c1", [-1, 1, 0, -13]);
    design.addPosition("d1", [-1, 1, 0, -13]);
    design.addPosition("e1", [-1, 1, 0, -13]);
    design.addPosition("f1", [-1, 1, 0, -13]);
    design.addPosition("g1", [-1, 1, 0, -13]);
    design.addPosition("h1", [-1, 1, 0, -13]);
    design.addPosition("i1", [-1, 1, 0, -13]);
    design.addPosition("j1", [-1, 1, 0, -13]);
    design.addPosition("k1", [-1, 1, 0, -13]);
    design.addPosition("l1", [-1, 1, 0, -13]);
    design.addPosition("m1", [-1, 0, 0, -13]);

    design.addZone("throne", 2, [84]);
    design.addZone("throne", 1, [84]);
    design.addZone("goal", 2, [156, 0, 168, 12]);
    design.addZone("goal", 1, [156, 0, 168, 12]);
    design.addZone("enemies", 2, [104, 91, 78, 65, 52, 79, 160, 4, 161, 5, 162, 149, 19, 6, 163, 7, 164, 8, 89, 116, 103, 90, 77, 64]);
    design.addZone("enemies", 1, [104, 91, 78, 65, 52, 79, 160, 4, 161, 5, 162, 149, 19, 6, 163, 7, 164, 8, 89, 116, 103, 90, 77, 64]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	13);
    design.addCommand(0, ZRF.IN_ZONE,	0);	// throne
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	1);	// goal
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-14);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// throne
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end


    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);

    design.addPiece("King", 1);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [1], 0);

    design.setup("Black", "Man", 104);
    design.setup("Black", "Man", 91);
    design.setup("Black", "Man", 78);
    design.setup("Black", "Man", 65);
    design.setup("Black", "Man", 52);
    design.setup("Black", "Man", 79);
    design.setup("Black", "Man", 160);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 161);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 162);
    design.setup("Black", "Man", 149);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 163);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 164);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 89);
    design.setup("Black", "Man", 116);
    design.setup("Black", "Man", 103);
    design.setup("Black", "Man", 90);
    design.setup("Black", "Man", 77);
    design.setup("Black", "Man", 64);
    design.setup("White", "King", 84);
    design.setup("White", "Man", 82);
    design.setup("White", "Man", 96);
    design.setup("White", "Man", 83);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 110);
    design.setup("White", "Man", 97);
    design.setup("White", "Man", 71);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 98);
    design.setup("White", "Man", 85);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 86);

    design.goal(0, "White", "King", [156, 0, 168, 12]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
 
    view.defPosition("a13", 12, 12, 34, 34);
    view.defPosition("b13", 47, 12, 34, 34);
    view.defPosition("c13", 82, 12, 34, 34);
    view.defPosition("d13", 117, 12, 34, 34);
    view.defPosition("e13", 152, 12, 34, 34);
    view.defPosition("f13", 187, 12, 34, 34);
    view.defPosition("g13", 222, 12, 34, 34);
    view.defPosition("h13", 257, 12, 34, 34);
    view.defPosition("i13", 292, 12, 34, 34);
    view.defPosition("j13", 327, 12, 34, 34);
    view.defPosition("k13", 362, 12, 34, 34);
    view.defPosition("l13", 397, 12, 34, 34);
    view.defPosition("m13", 432, 12, 34, 34);
    view.defPosition("a12", 12, 47, 34, 34);
    view.defPosition("b12", 47, 47, 34, 34);
    view.defPosition("c12", 82, 47, 34, 34);
    view.defPosition("d12", 117, 47, 34, 34);
    view.defPosition("e12", 152, 47, 34, 34);
    view.defPosition("f12", 187, 47, 34, 34);
    view.defPosition("g12", 222, 47, 34, 34);
    view.defPosition("h12", 257, 47, 34, 34);
    view.defPosition("i12", 292, 47, 34, 34);
    view.defPosition("j12", 327, 47, 34, 34);
    view.defPosition("k12", 362, 47, 34, 34);
    view.defPosition("l12", 397, 47, 34, 34);
    view.defPosition("m12", 432, 47, 34, 34);
    view.defPosition("a11", 12, 82, 34, 34);
    view.defPosition("b11", 47, 82, 34, 34);
    view.defPosition("c11", 82, 82, 34, 34);
    view.defPosition("d11", 117, 82, 34, 34);
    view.defPosition("e11", 152, 82, 34, 34);
    view.defPosition("f11", 187, 82, 34, 34);
    view.defPosition("g11", 222, 82, 34, 34);
    view.defPosition("h11", 257, 82, 34, 34);
    view.defPosition("i11", 292, 82, 34, 34);
    view.defPosition("j11", 327, 82, 34, 34);
    view.defPosition("k11", 362, 82, 34, 34);
    view.defPosition("l11", 397, 82, 34, 34);
    view.defPosition("m11", 432, 82, 34, 34);
    view.defPosition("a10", 12, 117, 34, 34);
    view.defPosition("b10", 47, 117, 34, 34);
    view.defPosition("c10", 82, 117, 34, 34);
    view.defPosition("d10", 117, 117, 34, 34);
    view.defPosition("e10", 152, 117, 34, 34);
    view.defPosition("f10", 187, 117, 34, 34);
    view.defPosition("g10", 222, 117, 34, 34);
    view.defPosition("h10", 257, 117, 34, 34);
    view.defPosition("i10", 292, 117, 34, 34);
    view.defPosition("j10", 327, 117, 34, 34);
    view.defPosition("k10", 362, 117, 34, 34);
    view.defPosition("l10", 397, 117, 34, 34);
    view.defPosition("m10", 432, 117, 34, 34);
    view.defPosition("a9", 12, 152, 34, 34);
    view.defPosition("b9", 47, 152, 34, 34);
    view.defPosition("c9", 82, 152, 34, 34);
    view.defPosition("d9", 117, 152, 34, 34);
    view.defPosition("e9", 152, 152, 34, 34);
    view.defPosition("f9", 187, 152, 34, 34);
    view.defPosition("g9", 222, 152, 34, 34);
    view.defPosition("h9", 257, 152, 34, 34);
    view.defPosition("i9", 292, 152, 34, 34);
    view.defPosition("j9", 327, 152, 34, 34);
    view.defPosition("k9", 362, 152, 34, 34);
    view.defPosition("l9", 397, 152, 34, 34);
    view.defPosition("m9", 432, 152, 34, 34);
    view.defPosition("a8", 12, 187, 34, 34);
    view.defPosition("b8", 47, 187, 34, 34);
    view.defPosition("c8", 82, 187, 34, 34);
    view.defPosition("d8", 117, 187, 34, 34);
    view.defPosition("e8", 152, 187, 34, 34);
    view.defPosition("f8", 187, 187, 34, 34);
    view.defPosition("g8", 222, 187, 34, 34);
    view.defPosition("h8", 257, 187, 34, 34);
    view.defPosition("i8", 292, 187, 34, 34);
    view.defPosition("j8", 327, 187, 34, 34);
    view.defPosition("k8", 362, 187, 34, 34);
    view.defPosition("l8", 397, 187, 34, 34);
    view.defPosition("m8", 432, 187, 34, 34);
    view.defPosition("a7", 12, 222, 34, 34);
    view.defPosition("b7", 47, 222, 34, 34);
    view.defPosition("c7", 82, 222, 34, 34);
    view.defPosition("d7", 117, 222, 34, 34);
    view.defPosition("e7", 152, 222, 34, 34);
    view.defPosition("f7", 187, 222, 34, 34);
    view.defPosition("g7", 222, 222, 34, 34);
    view.defPosition("h7", 257, 222, 34, 34);
    view.defPosition("i7", 292, 222, 34, 34);
    view.defPosition("j7", 327, 222, 34, 34);
    view.defPosition("k7", 362, 222, 34, 34);
    view.defPosition("l7", 397, 222, 34, 34);
    view.defPosition("m7", 432, 222, 34, 34);
    view.defPosition("a6", 12, 257, 34, 34);
    view.defPosition("b6", 47, 257, 34, 34);
    view.defPosition("c6", 82, 257, 34, 34);
    view.defPosition("d6", 117, 257, 34, 34);
    view.defPosition("e6", 152, 257, 34, 34);
    view.defPosition("f6", 187, 257, 34, 34);
    view.defPosition("g6", 222, 257, 34, 34);
    view.defPosition("h6", 257, 257, 34, 34);
    view.defPosition("i6", 292, 257, 34, 34);
    view.defPosition("j6", 327, 257, 34, 34);
    view.defPosition("k6", 362, 257, 34, 34);
    view.defPosition("l6", 397, 257, 34, 34);
    view.defPosition("m6", 432, 257, 34, 34);
    view.defPosition("a5", 12, 292, 34, 34);
    view.defPosition("b5", 47, 292, 34, 34);
    view.defPosition("c5", 82, 292, 34, 34);
    view.defPosition("d5", 117, 292, 34, 34);
    view.defPosition("e5", 152, 292, 34, 34);
    view.defPosition("f5", 187, 292, 34, 34);
    view.defPosition("g5", 222, 292, 34, 34);
    view.defPosition("h5", 257, 292, 34, 34);
    view.defPosition("i5", 292, 292, 34, 34);
    view.defPosition("j5", 327, 292, 34, 34);
    view.defPosition("k5", 362, 292, 34, 34);
    view.defPosition("l5", 397, 292, 34, 34);
    view.defPosition("m5", 432, 292, 34, 34);
    view.defPosition("a4", 12, 327, 34, 34);
    view.defPosition("b4", 47, 327, 34, 34);
    view.defPosition("c4", 82, 327, 34, 34);
    view.defPosition("d4", 117, 327, 34, 34);
    view.defPosition("e4", 152, 327, 34, 34);
    view.defPosition("f4", 187, 327, 34, 34);
    view.defPosition("g4", 222, 327, 34, 34);
    view.defPosition("h4", 257, 327, 34, 34);
    view.defPosition("i4", 292, 327, 34, 34);
    view.defPosition("j4", 327, 327, 34, 34);
    view.defPosition("k4", 362, 327, 34, 34);
    view.defPosition("l4", 397, 327, 34, 34);
    view.defPosition("m4", 432, 327, 34, 34);
    view.defPosition("a3", 12, 362, 34, 34);
    view.defPosition("b3", 47, 362, 34, 34);
    view.defPosition("c3", 82, 362, 34, 34);
    view.defPosition("d3", 117, 362, 34, 34);
    view.defPosition("e3", 152, 362, 34, 34);
    view.defPosition("f3", 187, 362, 34, 34);
    view.defPosition("g3", 222, 362, 34, 34);
    view.defPosition("h3", 257, 362, 34, 34);
    view.defPosition("i3", 292, 362, 34, 34);
    view.defPosition("j3", 327, 362, 34, 34);
    view.defPosition("k3", 362, 362, 34, 34);
    view.defPosition("l3", 397, 362, 34, 34);
    view.defPosition("m3", 432, 362, 34, 34);
    view.defPosition("a2", 12, 397, 34, 34);
    view.defPosition("b2", 47, 397, 34, 34);
    view.defPosition("c2", 82, 397, 34, 34);
    view.defPosition("d2", 117, 397, 34, 34);
    view.defPosition("e2", 152, 397, 34, 34);
    view.defPosition("f2", 187, 397, 34, 34);
    view.defPosition("g2", 222, 397, 34, 34);
    view.defPosition("h2", 257, 397, 34, 34);
    view.defPosition("i2", 292, 397, 34, 34);
    view.defPosition("j2", 327, 397, 34, 34);
    view.defPosition("k2", 362, 397, 34, 34);
    view.defPosition("l2", 397, 397, 34, 34);
    view.defPosition("m2", 432, 397, 34, 34);
    view.defPosition("a1", 12, 432, 34, 34);
    view.defPosition("b1", 47, 432, 34, 34);
    view.defPosition("c1", 82, 432, 34, 34);
    view.defPosition("d1", 117, 432, 34, 34);
    view.defPosition("e1", 152, 432, 34, 34);
    view.defPosition("f1", 187, 432, 34, 34);
    view.defPosition("g1", 222, 432, 34, 34);
    view.defPosition("h1", 257, 432, 34, 34);
    view.defPosition("i1", 292, 432, 34, 34);
    view.defPosition("j1", 327, 432, 34, 34);
    view.defPosition("k1", 362, 432, 34, 34);
    view.defPosition("l1", 397, 432, 34, 34);
    view.defPosition("m1", 432, 432, 34, 34);
}
