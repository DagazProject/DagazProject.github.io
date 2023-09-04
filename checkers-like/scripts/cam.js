Dagaz.Model.WIDTH = 13;

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
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("camelot-goal", "1");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d7", [14, 13, 12, 1, 0, 0, 0, 0]);
    design.addPosition("e7", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("f7", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("g7", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("h7", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("i7", [14, 13, 12, 1, -1, 0, 0, 0]);
    design.addPosition("j7", [14, 13, 12, 0, -1, 0, 0, 0]);
    design.addPosition("k7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [14, 13, 12, 1, 0, -12, 0, 0]);
    design.addPosition("d6", [14, 13, 12, 1, -1, -12, 0, -13]);
    design.addPosition("e6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i6", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j6", [14, 13, 12, 1, -1, 0, -14, -13]);
    design.addPosition("k6", [14, 13, 12, 0, -1, 0, -14, 0]);
    design.addPosition("l6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [14, 13, 12, 1, 0, -12, 0, 0]);
    design.addPosition("c5", [14, 13, 12, 1, -1, -12, 0, -13]);
    design.addPosition("d5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j5", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k5", [14, 13, 12, 1, -1, 0, -14, -13]);
    design.addPosition("l5", [14, 13, 12, 0, -1, 0, -14, 0]);
    design.addPosition("m5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [14, 0, 0, 1, 0, -12, 0, 0]);
    design.addPosition("b4", [14, 13, 0, 1, -1, -12, 0, -13]);
    design.addPosition("c4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("d4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k4", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l4", [0, 13, 12, 1, -1, 0, -14, -13]);
    design.addPosition("m4", [0, 0, 12, 0, -1, 0, -14, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [14, 0, 0, 1, 0, -12, -14, -13]);
    design.addPosition("c3", [14, 13, 0, 1, -1, -12, -14, -13]);
    design.addPosition("d3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("e3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j3", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k3", [0, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("l3", [0, 0, 12, 0, -1, -12, -14, -13]);
    design.addPosition("m3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [14, 0, 0, 1, 0, -12, -14, -13]);
    design.addPosition("d2", [14, 13, 0, 1, -1, -12, -14, -13]);
    design.addPosition("e2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("f2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("g2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("h2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("i2", [14, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("j2", [0, 13, 12, 1, -1, -12, -14, -13]);
    design.addPosition("k2", [0, 0, 12, 0, -1, -12, -14, -13]);
    design.addPosition("l2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 1, 0, -12, -14, -13]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -12, -14, -13]);
    design.addPosition("j1", [0, 0, 0, 0, -1, -12, -14, -13]);
    design.addPosition("k1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("goal-zone", 1, [39]);
    design.addZone("goal-zone", 2, [51]);
    design.addZone("home-zone", 1, [51]);
    design.addZone("home-zone", 2, [39]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// goal-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	2);
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0, 1);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [7, 7], 1);
    design.addMove(0, 1, [6, 6], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [4, 4], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [0, 0], 1);

    design.addPiece("Knight", 1, 10);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 1, [7, 7], 1);
    design.addMove(1, 1, [6, 6], 1);
    design.addMove(1, 1, [3, 3], 1);
    design.addMove(1, 1, [5, 5], 1);
    design.addMove(1, 1, [4, 4], 1);
    design.addMove(1, 1, [2, 2], 1);
    design.addMove(1, 1, [1, 1], 1);
    design.addMove(1, 1, [0, 0], 1);

    design.setup("White", "Knight", 61);
    design.setup("White", "Knight", 35);
    design.setup("White", "Man", 73);
    design.setup("White", "Man", 60);
    design.setup("White", "Man", 47);
    design.setup("White", "Man", 34);
    design.setup("White", "Man", 21);
    design.setup("Black", "Knight", 55);
    design.setup("Black", "Knight", 29);
    design.setup("Black", "Man", 69);
    design.setup("Black", "Man", 56);
    design.setup("Black", "Man", 43);
    design.setup("Black", "Man", 30);
    design.setup("Black", "Man", 17);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
 
    view.defPosition("a7", 2, 2, 50, 50);
    view.defPosition("b7", 52, 2, 50, 50);
    view.defPosition("c7", 102, 2, 50, 50);
    view.defPosition("d7", 152, 2, 50, 50);
    view.defPosition("e7", 202, 2, 50, 50);
    view.defPosition("f7", 252, 2, 50, 50);
    view.defPosition("g7", 302, 2, 50, 50);
    view.defPosition("h7", 352, 2, 50, 50);
    view.defPosition("i7", 402, 2, 50, 50);
    view.defPosition("j7", 452, 2, 50, 50);
    view.defPosition("k7", 502, 2, 50, 50);
    view.defPosition("l7", 552, 2, 50, 50);
    view.defPosition("m7", 602, 2, 50, 50);
    view.defPosition("a6", 2, 52, 50, 50);
    view.defPosition("b6", 52, 52, 50, 50);
    view.defPosition("c6", 102, 52, 50, 50);
    view.defPosition("d6", 152, 52, 50, 50);
    view.defPosition("e6", 202, 52, 50, 50);
    view.defPosition("f6", 252, 52, 50, 50);
    view.defPosition("g6", 302, 52, 50, 50);
    view.defPosition("h6", 352, 52, 50, 50);
    view.defPosition("i6", 402, 52, 50, 50);
    view.defPosition("j6", 452, 52, 50, 50);
    view.defPosition("k6", 502, 52, 50, 50);
    view.defPosition("l6", 552, 52, 50, 50);
    view.defPosition("m6", 602, 52, 50, 50);
    view.defPosition("a5", 2, 102, 50, 50);
    view.defPosition("b5", 52, 102, 50, 50);
    view.defPosition("c5", 102, 102, 50, 50);
    view.defPosition("d5", 152, 102, 50, 50);
    view.defPosition("e5", 202, 102, 50, 50);
    view.defPosition("f5", 252, 102, 50, 50);
    view.defPosition("g5", 302, 102, 50, 50);
    view.defPosition("h5", 352, 102, 50, 50);
    view.defPosition("i5", 402, 102, 50, 50);
    view.defPosition("j5", 452, 102, 50, 50);
    view.defPosition("k5", 502, 102, 50, 50);
    view.defPosition("l5", 552, 102, 50, 50);
    view.defPosition("m5", 602, 102, 50, 50);
    view.defPosition("a4", 2, 152, 50, 50);
    view.defPosition("b4", 52, 152, 50, 50);
    view.defPosition("c4", 102, 152, 50, 50);
    view.defPosition("d4", 152, 152, 50, 50);
    view.defPosition("e4", 202, 152, 50, 50);
    view.defPosition("f4", 252, 152, 50, 50);
    view.defPosition("g4", 302, 152, 50, 50);
    view.defPosition("h4", 352, 152, 50, 50);
    view.defPosition("i4", 402, 152, 50, 50);
    view.defPosition("j4", 452, 152, 50, 50);
    view.defPosition("k4", 502, 152, 50, 50);
    view.defPosition("l4", 552, 152, 50, 50);
    view.defPosition("m4", 602, 152, 50, 50);
    view.defPosition("a3", 2, 202, 50, 50);
    view.defPosition("b3", 52, 202, 50, 50);
    view.defPosition("c3", 102, 202, 50, 50);
    view.defPosition("d3", 152, 202, 50, 50);
    view.defPosition("e3", 202, 202, 50, 50);
    view.defPosition("f3", 252, 202, 50, 50);
    view.defPosition("g3", 302, 202, 50, 50);
    view.defPosition("h3", 352, 202, 50, 50);
    view.defPosition("i3", 402, 202, 50, 50);
    view.defPosition("j3", 452, 202, 50, 50);
    view.defPosition("k3", 502, 202, 50, 50);
    view.defPosition("l3", 552, 202, 50, 50);
    view.defPosition("m3", 602, 202, 50, 50);
    view.defPosition("a2", 2, 252, 50, 50);
    view.defPosition("b2", 52, 252, 50, 50);
    view.defPosition("c2", 102, 252, 50, 50);
    view.defPosition("d2", 152, 252, 50, 50);
    view.defPosition("e2", 202, 252, 50, 50);
    view.defPosition("f2", 252, 252, 50, 50);
    view.defPosition("g2", 302, 252, 50, 50);
    view.defPosition("h2", 352, 252, 50, 50);
    view.defPosition("i2", 402, 252, 50, 50);
    view.defPosition("j2", 452, 252, 50, 50);
    view.defPosition("k2", 502, 252, 50, 50);
    view.defPosition("l2", 552, 252, 50, 50);
    view.defPosition("m2", 602, 252, 50, 50);
    view.defPosition("a1", 2, 302, 50, 50);
    view.defPosition("b1", 52, 302, 50, 50);
    view.defPosition("c1", 102, 302, 50, 50);
    view.defPosition("d1", 152, 302, 50, 50);
    view.defPosition("e1", 202, 302, 50, 50);
    view.defPosition("f1", 252, 302, 50, 50);
    view.defPosition("g1", 302, 302, 50, 50);
    view.defPosition("h1", 352, 302, 50, 50);
    view.defPosition("i1", 402, 302, 50, 50);
    view.defPosition("j1", 452, 302, 50, 50);
    view.defPosition("k1", 502, 302, 50, 50);
    view.defPosition("l1", 552, 302, 50, 50);
    view.defPosition("m1", 602, 302, 50, 50);
}
