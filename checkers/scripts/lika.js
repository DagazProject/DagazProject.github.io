Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "20");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("ne"); // 2
    design.addDirection("nw"); // 3

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [3, 2, 1, 0]);

    design.addPosition("a8", [9, 0, 0, 0]);
    design.addPosition("b8", [9, 7, 0, 0]);
    design.addPosition("c8", [9, 7, 0, 0]);
    design.addPosition("d8", [9, 7, 0, 0]);
    design.addPosition("e8", [9, 7, 0, 0]);
    design.addPosition("f8", [9, 7, 0, 0]);
    design.addPosition("g8", [9, 7, 0, 0]);
    design.addPosition("h8", [0, 7, 0, 0]);
    design.addPosition("a7", [9, 0, -7, 0]);
    design.addPosition("b7", [9, 7, -7, -9]);
    design.addPosition("c7", [9, 7, -7, -9]);
    design.addPosition("d7", [9, 7, -7, -9]);
    design.addPosition("e7", [9, 7, -7, -9]);
    design.addPosition("f7", [9, 7, -7, -9]);
    design.addPosition("g7", [9, 7, -7, -9]);
    design.addPosition("h7", [0, 7, 0, -9]);
    design.addPosition("a6", [9, 0, -7, 0]);
    design.addPosition("b6", [9, 7, -7, -9]);
    design.addPosition("c6", [9, 7, -7, -9]);
    design.addPosition("d6", [9, 7, -7, -9]);
    design.addPosition("e6", [9, 7, -7, -9]);
    design.addPosition("f6", [9, 7, -7, -9]);
    design.addPosition("g6", [9, 7, -7, -9]);
    design.addPosition("h6", [0, 7, 0, -9]);
    design.addPosition("a5", [9, 0, -7, 0]);
    design.addPosition("b5", [9, 7, -7, -9]);
    design.addPosition("c5", [9, 7, -7, -9]);
    design.addPosition("d5", [9, 7, -7, -9]);
    design.addPosition("e5", [9, 7, -7, -9]);
    design.addPosition("f5", [9, 7, -7, -9]);
    design.addPosition("g5", [9, 7, -7, -9]);
    design.addPosition("h5", [0, 7, 0, -9]);
    design.addPosition("a4", [9, 0, -7, 0]);
    design.addPosition("b4", [9, 7, -7, -9]);
    design.addPosition("c4", [9, 7, -7, -9]);
    design.addPosition("d4", [9, 7, -7, -9]);
    design.addPosition("e4", [9, 7, -7, -9]);
    design.addPosition("f4", [9, 7, -7, -9]);
    design.addPosition("g4", [9, 7, -7, -9]);
    design.addPosition("h4", [0, 7, 0, -9]);
    design.addPosition("a3", [9, 0, -7, 0]);
    design.addPosition("b3", [9, 7, -7, -9]);
    design.addPosition("c3", [9, 7, -7, -9]);
    design.addPosition("d3", [9, 7, -7, -9]);
    design.addPosition("e3", [9, 7, -7, -9]);
    design.addPosition("f3", [9, 7, -7, -9]);
    design.addPosition("g3", [9, 7, -7, -9]);
    design.addPosition("h3", [0, 7, 0, -9]);
    design.addPosition("a2", [9, 0, -7, 0]);
    design.addPosition("b2", [9, 7, -7, -9]);
    design.addPosition("c2", [9, 7, -7, -9]);
    design.addPosition("d2", [9, 7, -7, -9]);
    design.addPosition("e2", [9, 7, -7, -9]);
    design.addPosition("f2", [9, 7, -7, -9]);
    design.addPosition("g2", [9, 7, -7, -9]);
    design.addPosition("h2", [0, 7, 0, -9]);
    design.addPosition("a1", [0, 0, -7, 0]);
    design.addPosition("b1", [0, 0, -7, -9]);
    design.addPosition("c1", [0, 0, -7, -9]);
    design.addPosition("d1", [0, 0, -7, -9]);
    design.addPosition("e1", [0, 0, -7, -9]);
    design.addPosition("f1", [0, 0, -7, -9]);
    design.addPosition("g1", [0, 0, -7, -9]);
    design.addPosition("h1", [0, 0, 0, -9]);

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
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [2], 1);

    design.setup("White", "Man", 56);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 60);
    design.setup("White", "Man", 62);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 51);
    design.setup("White", "Man", 53);
    design.setup("White", "Man", 55);
    design.setup("White", "Man", 40);
    design.setup("White", "Man", 42);
    design.setup("White", "Man", 44);
    design.setup("White", "Man", 46);
    design.setup("Black", "Man", 1);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 23);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
}
