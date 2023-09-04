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

    design.addPosition("a11", [0, 1, 11, 0]);
    design.addPosition("b11", [-1, 1, 11, 0]);
    design.addPosition("c11", [-1, 1, 11, 0]);
    design.addPosition("d11", [-1, 1, 11, 0]);
    design.addPosition("e11", [-1, 1, 11, 0]);
    design.addPosition("f11", [-1, 1, 11, 0]);
    design.addPosition("g11", [-1, 1, 11, 0]);
    design.addPosition("h11", [-1, 1, 11, 0]);
    design.addPosition("i11", [-1, 1, 11, 0]);
    design.addPosition("j11", [-1, 1, 11, 0]);
    design.addPosition("k11", [-1, 0, 11, 0]);
    design.addPosition("a10", [0, 1, 11, -11]);
    design.addPosition("b10", [-1, 1, 11, -11]);
    design.addPosition("c10", [-1, 1, 11, -11]);
    design.addPosition("d10", [-1, 1, 11, -11]);
    design.addPosition("e10", [-1, 1, 11, -11]);
    design.addPosition("f10", [-1, 1, 11, -11]);
    design.addPosition("g10", [-1, 1, 11, -11]);
    design.addPosition("h10", [-1, 1, 11, -11]);
    design.addPosition("i10", [-1, 1, 11, -11]);
    design.addPosition("j10", [-1, 1, 11, -11]);
    design.addPosition("k10", [-1, 0, 11, -11]);
    design.addPosition("a9", [0, 1, 11, -11]);
    design.addPosition("b9", [-1, 1, 11, -11]);
    design.addPosition("c9", [-1, 1, 11, -11]);
    design.addPosition("d9", [-1, 1, 11, -11]);
    design.addPosition("e9", [-1, 1, 11, -11]);
    design.addPosition("f9", [-1, 1, 11, -11]);
    design.addPosition("g9", [-1, 1, 11, -11]);
    design.addPosition("h9", [-1, 1, 11, -11]);
    design.addPosition("i9", [-1, 1, 11, -11]);
    design.addPosition("j9", [-1, 1, 11, -11]);
    design.addPosition("k9", [-1, 0, 11, -11]);
    design.addPosition("a8", [0, 1, 11, -11]);
    design.addPosition("b8", [-1, 1, 11, -11]);
    design.addPosition("c8", [-1, 1, 11, -11]);
    design.addPosition("d8", [-1, 1, 11, -11]);
    design.addPosition("e8", [-1, 1, 11, -11]);
    design.addPosition("f8", [-1, 1, 11, -11]);
    design.addPosition("g8", [-1, 1, 11, -11]);
    design.addPosition("h8", [-1, 1, 11, -11]);
    design.addPosition("i8", [-1, 1, 11, -11]);
    design.addPosition("j8", [-1, 1, 11, -11]);
    design.addPosition("k8", [-1, 0, 11, -11]);
    design.addPosition("a7", [0, 1, 11, -11]);
    design.addPosition("b7", [-1, 1, 11, -11]);
    design.addPosition("c7", [-1, 1, 11, -11]);
    design.addPosition("d7", [-1, 1, 11, -11]);
    design.addPosition("e7", [-1, 1, 11, -11]);
    design.addPosition("f7", [-1, 1, 11, -11]);
    design.addPosition("g7", [-1, 1, 11, -11]);
    design.addPosition("h7", [-1, 1, 11, -11]);
    design.addPosition("i7", [-1, 1, 11, -11]);
    design.addPosition("j7", [-1, 1, 11, -11]);
    design.addPosition("k7", [-1, 0, 11, -11]);
    design.addPosition("a6", [0, 1, 11, -11]);
    design.addPosition("b6", [-1, 1, 11, -11]);
    design.addPosition("c6", [-1, 1, 11, -11]);
    design.addPosition("d6", [-1, 1, 11, -11]);
    design.addPosition("e6", [-1, 1, 11, -11]);
    design.addPosition("f6", [-1, 1, 11, -11]);
    design.addPosition("g6", [-1, 1, 11, -11]);
    design.addPosition("h6", [-1, 1, 11, -11]);
    design.addPosition("i6", [-1, 1, 11, -11]);
    design.addPosition("j6", [-1, 1, 11, -11]);
    design.addPosition("k6", [-1, 0, 11, -11]);
    design.addPosition("a5", [0, 1, 11, -11]);
    design.addPosition("b5", [-1, 1, 11, -11]);
    design.addPosition("c5", [-1, 1, 11, -11]);
    design.addPosition("d5", [-1, 1, 11, -11]);
    design.addPosition("e5", [-1, 1, 11, -11]);
    design.addPosition("f5", [-1, 1, 11, -11]);
    design.addPosition("g5", [-1, 1, 11, -11]);
    design.addPosition("h5", [-1, 1, 11, -11]);
    design.addPosition("i5", [-1, 1, 11, -11]);
    design.addPosition("j5", [-1, 1, 11, -11]);
    design.addPosition("k5", [-1, 0, 11, -11]);
    design.addPosition("a4", [0, 1, 11, -11]);
    design.addPosition("b4", [-1, 1, 11, -11]);
    design.addPosition("c4", [-1, 1, 11, -11]);
    design.addPosition("d4", [-1, 1, 11, -11]);
    design.addPosition("e4", [-1, 1, 11, -11]);
    design.addPosition("f4", [-1, 1, 11, -11]);
    design.addPosition("g4", [-1, 1, 11, -11]);
    design.addPosition("h4", [-1, 1, 11, -11]);
    design.addPosition("i4", [-1, 1, 11, -11]);
    design.addPosition("j4", [-1, 1, 11, -11]);
    design.addPosition("k4", [-1, 0, 11, -11]);
    design.addPosition("a3", [0, 1, 11, -11]);
    design.addPosition("b3", [-1, 1, 11, -11]);
    design.addPosition("c3", [-1, 1, 11, -11]);
    design.addPosition("d3", [-1, 1, 11, -11]);
    design.addPosition("e3", [-1, 1, 11, -11]);
    design.addPosition("f3", [-1, 1, 11, -11]);
    design.addPosition("g3", [-1, 1, 11, -11]);
    design.addPosition("h3", [-1, 1, 11, -11]);
    design.addPosition("i3", [-1, 1, 11, -11]);
    design.addPosition("j3", [-1, 1, 11, -11]);
    design.addPosition("k3", [-1, 0, 11, -11]);
    design.addPosition("a2", [0, 1, 11, -11]);
    design.addPosition("b2", [-1, 1, 11, -11]);
    design.addPosition("c2", [-1, 1, 11, -11]);
    design.addPosition("d2", [-1, 1, 11, -11]);
    design.addPosition("e2", [-1, 1, 11, -11]);
    design.addPosition("f2", [-1, 1, 11, -11]);
    design.addPosition("g2", [-1, 1, 11, -11]);
    design.addPosition("h2", [-1, 1, 11, -11]);
    design.addPosition("i2", [-1, 1, 11, -11]);
    design.addPosition("j2", [-1, 1, 11, -11]);
    design.addPosition("k2", [-1, 0, 11, -11]);
    design.addPosition("a1", [0, 1, 0, -11]);
    design.addPosition("b1", [-1, 1, 0, -11]);
    design.addPosition("c1", [-1, 1, 0, -11]);
    design.addPosition("d1", [-1, 1, 0, -11]);
    design.addPosition("e1", [-1, 1, 0, -11]);
    design.addPosition("f1", [-1, 1, 0, -11]);
    design.addPosition("g1", [-1, 1, 0, -11]);
    design.addPosition("h1", [-1, 1, 0, -11]);
    design.addPosition("i1", [-1, 1, 0, -11]);
    design.addPosition("j1", [-1, 1, 0, -11]);
    design.addPosition("k1", [-1, 0, 0, -11]);

    design.addZone("throne", 2, [60]);
    design.addZone("throne", 1, [60]);
    design.addZone("goal", 2, [110, 0, 120, 10]);
    design.addZone("goal", 1, [110, 0, 120, 10]);
    design.addZone("enemies", 2, [66, 55, 44, 67, 45, 57, 114, 103, 15, 4, 115, 93, 27, 5, 116, 105, 17, 6, 63, 75, 53, 76, 65, 54]);
    design.addZone("enemies", 1, [66, 55, 44, 67, 45, 57, 114, 103, 15, 4, 115, 93, 27, 5, 116, 105, 17, 6, 63, 75, 53, 76, 65, 54]);

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

    design.setup("Black", "Man", 66);
    design.setup("Black", "Man", 55);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 67);
    design.setup("Black", "Man", 45);
    design.setup("Black", "Man", 57);
    design.setup("Black", "Man", 114);
    design.setup("Black", "Man", 103);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 115);
    design.setup("Black", "Man", 93);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 116);
    design.setup("Black", "Man", 105);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 63);
    design.setup("Black", "Man", 75);
    design.setup("Black", "Man", 53);
    design.setup("Black", "Man", 76);
    design.setup("Black", "Man", 65);
    design.setup("Black", "Man", 54);
    design.setup("White", "King", 60);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 59);
    design.setup("White", "Man", 48);
    design.setup("White", "Man", 82);
    design.setup("White", "Man", 71);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 38);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 50);
    design.setup("White", "Man", 62);

    design.goal(0, "White", "King", [110, 0, 120, 10]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
 
    view.defPosition("a11", 12, 12, 34, 34);
    view.defPosition("b11", 47, 12, 34, 34);
    view.defPosition("c11", 82, 12, 34, 34);
    view.defPosition("d11", 117, 12, 34, 34);
    view.defPosition("e11", 152, 12, 34, 34);
    view.defPosition("f11", 187, 12, 34, 34);
    view.defPosition("g11", 222, 12, 34, 34);
    view.defPosition("h11", 257, 12, 34, 34);
    view.defPosition("i11", 292, 12, 34, 34);
    view.defPosition("j11", 327, 12, 34, 34);
    view.defPosition("k11", 362, 12, 34, 34);
    view.defPosition("a10", 12, 47, 34, 34);
    view.defPosition("b10", 47, 47, 34, 34);
    view.defPosition("c10", 82, 47, 34, 34);
    view.defPosition("d10", 117, 47, 34, 34);
    view.defPosition("e10", 152, 47, 34, 34);
    view.defPosition("f10", 187, 47, 34, 34);
    view.defPosition("g10", 222, 47, 34, 34);
    view.defPosition("h10", 257, 47, 34, 34);
    view.defPosition("i10", 292, 47, 34, 34);
    view.defPosition("j10", 327, 47, 34, 34);
    view.defPosition("k10", 362, 47, 34, 34);
    view.defPosition("a9", 12, 82, 34, 34);
    view.defPosition("b9", 47, 82, 34, 34);
    view.defPosition("c9", 82, 82, 34, 34);
    view.defPosition("d9", 117, 82, 34, 34);
    view.defPosition("e9", 152, 82, 34, 34);
    view.defPosition("f9", 187, 82, 34, 34);
    view.defPosition("g9", 222, 82, 34, 34);
    view.defPosition("h9", 257, 82, 34, 34);
    view.defPosition("i9", 292, 82, 34, 34);
    view.defPosition("j9", 327, 82, 34, 34);
    view.defPosition("k9", 362, 82, 34, 34);
    view.defPosition("a8", 12, 117, 34, 34);
    view.defPosition("b8", 47, 117, 34, 34);
    view.defPosition("c8", 82, 117, 34, 34);
    view.defPosition("d8", 117, 117, 34, 34);
    view.defPosition("e8", 152, 117, 34, 34);
    view.defPosition("f8", 187, 117, 34, 34);
    view.defPosition("g8", 222, 117, 34, 34);
    view.defPosition("h8", 257, 117, 34, 34);
    view.defPosition("i8", 292, 117, 34, 34);
    view.defPosition("j8", 327, 117, 34, 34);
    view.defPosition("k8", 362, 117, 34, 34);
    view.defPosition("a7", 12, 152, 34, 34);
    view.defPosition("b7", 47, 152, 34, 34);
    view.defPosition("c7", 82, 152, 34, 34);
    view.defPosition("d7", 117, 152, 34, 34);
    view.defPosition("e7", 152, 152, 34, 34);
    view.defPosition("f7", 187, 152, 34, 34);
    view.defPosition("g7", 222, 152, 34, 34);
    view.defPosition("h7", 257, 152, 34, 34);
    view.defPosition("i7", 292, 152, 34, 34);
    view.defPosition("j7", 327, 152, 34, 34);
    view.defPosition("k7", 362, 152, 34, 34);
    view.defPosition("a6", 12, 187, 34, 34);
    view.defPosition("b6", 47, 187, 34, 34);
    view.defPosition("c6", 82, 187, 34, 34);
    view.defPosition("d6", 117, 187, 34, 34);
    view.defPosition("e6", 152, 187, 34, 34);
    view.defPosition("f6", 187, 187, 34, 34);
    view.defPosition("g6", 222, 187, 34, 34);
    view.defPosition("h6", 257, 187, 34, 34);
    view.defPosition("i6", 292, 187, 34, 34);
    view.defPosition("j6", 327, 187, 34, 34);
    view.defPosition("k6", 362, 187, 34, 34);
    view.defPosition("a5", 12, 222, 34, 34);
    view.defPosition("b5", 47, 222, 34, 34);
    view.defPosition("c5", 82, 222, 34, 34);
    view.defPosition("d5", 117, 222, 34, 34);
    view.defPosition("e5", 152, 222, 34, 34);
    view.defPosition("f5", 187, 222, 34, 34);
    view.defPosition("g5", 222, 222, 34, 34);
    view.defPosition("h5", 257, 222, 34, 34);
    view.defPosition("i5", 292, 222, 34, 34);
    view.defPosition("j5", 327, 222, 34, 34);
    view.defPosition("k5", 362, 222, 34, 34);
    view.defPosition("a4", 12, 257, 34, 34);
    view.defPosition("b4", 47, 257, 34, 34);
    view.defPosition("c4", 82, 257, 34, 34);
    view.defPosition("d4", 117, 257, 34, 34);
    view.defPosition("e4", 152, 257, 34, 34);
    view.defPosition("f4", 187, 257, 34, 34);
    view.defPosition("g4", 222, 257, 34, 34);
    view.defPosition("h4", 257, 257, 34, 34);
    view.defPosition("i4", 292, 257, 34, 34);
    view.defPosition("j4", 327, 257, 34, 34);
    view.defPosition("k4", 362, 257, 34, 34);
    view.defPosition("a3", 12, 292, 34, 34);
    view.defPosition("b3", 47, 292, 34, 34);
    view.defPosition("c3", 82, 292, 34, 34);
    view.defPosition("d3", 117, 292, 34, 34);
    view.defPosition("e3", 152, 292, 34, 34);
    view.defPosition("f3", 187, 292, 34, 34);
    view.defPosition("g3", 222, 292, 34, 34);
    view.defPosition("h3", 257, 292, 34, 34);
    view.defPosition("i3", 292, 292, 34, 34);
    view.defPosition("j3", 327, 292, 34, 34);
    view.defPosition("k3", 362, 292, 34, 34);
    view.defPosition("a2", 12, 327, 34, 34);
    view.defPosition("b2", 47, 327, 34, 34);
    view.defPosition("c2", 82, 327, 34, 34);
    view.defPosition("d2", 117, 327, 34, 34);
    view.defPosition("e2", 152, 327, 34, 34);
    view.defPosition("f2", 187, 327, 34, 34);
    view.defPosition("g2", 222, 327, 34, 34);
    view.defPosition("h2", 257, 327, 34, 34);
    view.defPosition("i2", 292, 327, 34, 34);
    view.defPosition("j2", 327, 327, 34, 34);
    view.defPosition("k2", 362, 327, 34, 34);
    view.defPosition("a1", 12, 362, 34, 34);
    view.defPosition("b1", 47, 362, 34, 34);
    view.defPosition("c1", 82, 362, 34, 34);
    view.defPosition("d1", 117, 362, 34, 34);
    view.defPosition("e1", 152, 362, 34, 34);
    view.defPosition("f1", 187, 362, 34, 34);
    view.defPosition("g1", 222, 362, 34, 34);
    view.defPosition("h1", 257, 362, 34, 34);
    view.defPosition("i1", 292, 362, 34, 34);
    view.defPosition("j1", 327, 362, 34, 34);
    view.defPosition("k1", 362, 362, 34, 34);
}
