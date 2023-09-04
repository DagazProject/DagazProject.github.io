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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("sw");
    design.addDirection("cw");
    design.addDirection("cc");

    design.addPlayer("White", [1, 0, 5, 4, 3, 2, 7, 6]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a3", [0, 1, 0, 18, 0, 0, 1, 51]);
    design.addPosition("b3", [-1, 1, 0, 18, 0, 17, 0, -1]);
    design.addPosition("c3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("d3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("e3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("f3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("g3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("h3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("i3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("j3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("k3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("l3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("m3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("n3", [-1, 1, 0, 18, 0, 17, 0, 0]);
    design.addPosition("o3", [-1, 1, 0, 18, 0, 17, 1, 0]);
    design.addPosition("p3", [-1, 0, 0, 0, 0, 17, 37, -1]);
    design.addPosition("q3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [33, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("c2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("d2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("e2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("f2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("g2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("h2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("i2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("j2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("k2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("l2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("m2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("n2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("o2", [-1, 1, -17, 18, -18, 17, 0, 0]);
    design.addPosition("p2", [-1, 20, -17, 18, -18, 17, 0, 0]);
    design.addPosition("q2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 1, -17, 0, 0, 0, 16, 1]);
    design.addPosition("c1", [-1, 1, -17, 0, -18, 0, -1, 0]);
    design.addPosition("d1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("e1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("f1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("g1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("h1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("i1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("j1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("k1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("l1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("m1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("n1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("o1", [-1, 1, -17, 0, -18, 0, 0, 0]);
    design.addPosition("p1", [-1, 1, -17, 0, -18, 0, 0, 1]);
    design.addPosition("q1", [-1, 0, 0, 0, -18, 0, -1, 2]);
    design.addPosition("a0", [0, -33, 0, 0, 0, 0, -51, -16]);
    design.addPosition("q0", [-20, 0, 0, 0, 0, 0, -2, -37]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 1, [4], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [5], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [1], 1);

    design.setup("Black", "Stone", 0);
    design.setup("Black", "Stone", 1);
    design.setup("Black", "Stone", 2);
    design.setup("Black", "Stone", 3);
    design.setup("Black", "Stone", 4);
    design.setup("Black", "Stone", 5);
    design.setup("Black", "Stone", 6);
    design.setup("Black", "Stone", 7);
    design.setup("Black", "Stone", 8);
    design.setup("Black", "Stone", 9);
    design.setup("Black", "Stone", 10);
    design.setup("Black", "Stone", 11);
    design.setup("Black", "Stone", 12);
    design.setup("Black", "Stone", 13);
    design.setup("Black", "Stone", 14);
    design.setup("Black", "Stone", 15);
    design.setup("Black", "Stone", 18);
    design.setup("Black", "Stone", 19);
    design.setup("Black", "Stone", 20);
    design.setup("Black", "Stone", 21);
    design.setup("Black", "Stone", 22);
    design.setup("Black", "Stone", 23);
    design.setup("Black", "Stone", 24);
    design.setup("Black", "Stone", 51);
    design.setup("White", "Stone", 35);
    design.setup("White", "Stone", 36);
    design.setup("White", "Stone", 37);
    design.setup("White", "Stone", 38);
    design.setup("White", "Stone", 39);
    design.setup("White", "Stone", 40);
    design.setup("White", "Stone", 41);
    design.setup("White", "Stone", 42);
    design.setup("White", "Stone", 43);
    design.setup("White", "Stone", 44);
    design.setup("White", "Stone", 45);
    design.setup("White", "Stone", 46);
    design.setup("White", "Stone", 47);
    design.setup("White", "Stone", 48);
    design.setup("White", "Stone", 49);
    design.setup("White", "Stone", 50);
    design.setup("White", "Stone", 26);
    design.setup("White", "Stone", 27);
    design.setup("White", "Stone", 28);
    design.setup("White", "Stone", 29);
    design.setup("White", "Stone", 30);
    design.setup("White", "Stone", 31);
    design.setup("White", "Stone", 32);
    design.setup("White", "Stone", 52);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a3", 118, 37, 45, 45);
    view.defPosition("b3", 164, 37, 45, 45);
    view.defPosition("c3", 210, 37, 45, 45);
    view.defPosition("d3", 256, 37, 45, 45);
    view.defPosition("e3", 302, 37, 45, 45);
    view.defPosition("f3", 348, 37, 45, 45);
    view.defPosition("g3", 394, 37, 45, 45);
    view.defPosition("h3", 440, 37, 45, 45);
    view.defPosition("i3", 486, 37, 45, 45);
    view.defPosition("j3", 532, 37, 45, 45);
    view.defPosition("k3", 578, 37, 45, 45);
    view.defPosition("l3", 624, 37, 45, 45);
    view.defPosition("m3", 670, 37, 45, 45);
    view.defPosition("n3", 716, 37, 45, 45);
    view.defPosition("o3", 762, 37, 45, 45);
    view.defPosition("p3", 808, 37, 45, 45);
    view.defPosition("q3", 854, 37, 45, 45);
    view.defPosition("a2", 95, 148, 45, 45);
    view.defPosition("b2", 141, 148, 45, 45);
    view.defPosition("c2", 187, 148, 45, 45);
    view.defPosition("d2", 233, 148, 45, 45);
    view.defPosition("e2", 279, 148, 45, 45);
    view.defPosition("f2", 325, 148, 45, 45);
    view.defPosition("g2", 371, 148, 45, 45);
    view.defPosition("h2", 417, 148, 45, 45);
    view.defPosition("i2", 463, 148, 45, 45);
    view.defPosition("j2", 509, 148, 45, 45);
    view.defPosition("k2", 555, 148, 45, 45);
    view.defPosition("l2", 601, 148, 45, 45);
    view.defPosition("m2", 647, 148, 45, 45);
    view.defPosition("n2", 693, 148, 45, 45);
    view.defPosition("o2", 739, 148, 45, 45);
    view.defPosition("p2", 785, 148, 45, 45);
    view.defPosition("q2", 831, 148, 45, 45);
    view.defPosition("a1", 72, 259, 45, 45);
    view.defPosition("b1", 118, 259, 45, 45);
    view.defPosition("c1", 164, 259, 45, 45);
    view.defPosition("d1", 210, 259, 45, 45);
    view.defPosition("e1", 256, 259, 45, 45);
    view.defPosition("f1", 302, 259, 45, 45);
    view.defPosition("g1", 348, 259, 45, 45);
    view.defPosition("h1", 394, 259, 45, 45);
    view.defPosition("i1", 440, 259, 45, 45);
    view.defPosition("j1", 486, 259, 45, 45);
    view.defPosition("k1", 532, 259, 45, 45);
    view.defPosition("l1", 578, 259, 45, 45);
    view.defPosition("m1", 624, 259, 45, 45);
    view.defPosition("n1", 670, 259, 45, 45);
    view.defPosition("o1", 716, 259, 45, 45);
    view.defPosition("p1", 762, 259, 45, 45);
    view.defPosition("q1", 808, 259, 45, 45);
    view.defPosition("a0", 6, 148, 45, 45);
    view.defPosition("q0", 919, 148, 45, 45);

    view.addVector(Dagaz.Model.stringToPos("b1"), Dagaz.Model.stringToPos("a0"), 3, 0, 1);
    view.addVector(Dagaz.Model.stringToPos("a0"), Dagaz.Model.stringToPos("a3"), 3, 0, 2);
    view.addVector(Dagaz.Model.stringToPos("a3"), Dagaz.Model.stringToPos("a0"), 3, 0, 1);
    view.addVector(Dagaz.Model.stringToPos("a0"), Dagaz.Model.stringToPos("b1"), 3, 0, 2);
    view.addVector(Dagaz.Model.stringToPos("q1"), Dagaz.Model.stringToPos("q0"), 3, 0, 1);
    view.addVector(Dagaz.Model.stringToPos("q0"), Dagaz.Model.stringToPos("p3"), 3, 0, 2);
    view.addVector(Dagaz.Model.stringToPos("p3"), Dagaz.Model.stringToPos("q0"), 3, 0, 1);
    view.addVector(Dagaz.Model.stringToPos("q0"), Dagaz.Model.stringToPos("q1"), 3, 0, 2);
}
