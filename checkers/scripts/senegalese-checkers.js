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
    design.checkVersion("zrf", "2.0");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("senegalese-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("White", [1, 0, 3, 2]);
    design.addPlayer("Black", [1, 0, 3, 2]);

    design.addPosition("a5", [0, 1, 6, 0]);
    design.addPosition("b5", [-1, 1, 6, 0]);
    design.addPosition("c5", [-1, 1, 6, 0]);
    design.addPosition("d5", [-1, 1, 6, 0]);
    design.addPosition("e5", [-1, 1, 6, 0]);
    design.addPosition("f5", [-1, 0, 6, 0]);
    design.addPosition("a4", [0, 1, 6, -6]);
    design.addPosition("b4", [-1, 1, 6, -6]);
    design.addPosition("c4", [-1, 1, 6, -6]);
    design.addPosition("d4", [-1, 1, 6, -6]);
    design.addPosition("e4", [-1, 1, 6, -6]);
    design.addPosition("f4", [-1, 0, 6, -6]);
    design.addPosition("a3", [0, 1, 6, -6]);
    design.addPosition("b3", [-1, 1, 6, -6]);
    design.addPosition("c3", [-1, 1, 6, -6]);
    design.addPosition("d3", [-1, 1, 6, -6]);
    design.addPosition("e3", [-1, 1, 6, -6]);
    design.addPosition("f3", [-1, 0, 6, -6]);
    design.addPosition("a2", [0, 1, 6, -6]);
    design.addPosition("b2", [-1, 1, 6, -6]);
    design.addPosition("c2", [-1, 1, 6, -6]);
    design.addPosition("d2", [-1, 1, 6, -6]);
    design.addPosition("e2", [-1, 1, 6, -6]);
    design.addPosition("f2", [-1, 0, 6, -6]);
    design.addPosition("a1", [0, 1, 0, -6]);
    design.addPosition("b1", [-1, 1, 0, -6]);
    design.addPosition("c1", [-1, 1, 0, -6]);
    design.addPosition("d1", [-1, 1, 0, -6]);
    design.addPosition("e1", [-1, 1, 0, -6]);
    design.addPosition("f1", [-1, 0, 0, -6]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5]);
    design.addZone("last-rank", 2, [24, 25, 26, 27, 28, 29]);

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

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [1], 1);

    design.setup("White", "Man", 24);
    design.setup("White", "Man", 25);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 28);
    design.setup("White", "Man", 29);
    design.setup("White", "Man", 18);
    design.setup("White", "Man", 19);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 16);
    design.setup("White", "Man", 17);
    design.setup("Black", "Man", 0);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 2);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a5", 2, 2, 50, 50);
    view.defPosition("b5", 52, 2, 50, 50);
    view.defPosition("c5", 102, 2, 50, 50);
    view.defPosition("d5", 152, 2, 50, 50);
    view.defPosition("e5", 202, 2, 50, 50);
    view.defPosition("f5", 252, 2, 50, 50);
    view.defPosition("a4", 2, 52, 50, 50);
    view.defPosition("b4", 52, 52, 50, 50);
    view.defPosition("c4", 102, 52, 50, 50);
    view.defPosition("d4", 152, 52, 50, 50);
    view.defPosition("e4", 202, 52, 50, 50);
    view.defPosition("f4", 252, 52, 50, 50);
    view.defPosition("a3", 2, 102, 50, 50);
    view.defPosition("b3", 52, 102, 50, 50);
    view.defPosition("c3", 102, 102, 50, 50);
    view.defPosition("d3", 152, 102, 50, 50);
    view.defPosition("e3", 202, 102, 50, 50);
    view.defPosition("f3", 252, 102, 50, 50);
    view.defPosition("a2", 2, 152, 50, 50);
    view.defPosition("b2", 52, 152, 50, 50);
    view.defPosition("c2", 102, 152, 50, 50);
    view.defPosition("d2", 152, 152, 50, 50);
    view.defPosition("e2", 202, 152, 50, 50);
    view.defPosition("f2", 252, 152, 50, 50);
    view.defPosition("a1", 2, 202, 50, 50);
    view.defPosition("b1", 52, 202, 50, 50);
    view.defPosition("c1", 102, 202, 50, 50);
    view.defPosition("d1", 152, 202, 50, 50);
    view.defPosition("e1", 202, 202, 50, 50);
    view.defPosition("f1", 252, 202, 50, 50);
}
