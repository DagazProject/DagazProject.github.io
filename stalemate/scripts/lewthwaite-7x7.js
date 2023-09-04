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
    design.checkVersion("prevent-flipping", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("animate-drops", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);
    design.addTurn(2);
    design.addTurn(1);

    design.addPosition("a7", [0, 1, 7, 0]);
    design.addPosition("b7", [-1, 1, 7, 0]);
    design.addPosition("c7", [-1, 1, 7, 0]);
    design.addPosition("d7", [-1, 1, 7, 0]);
    design.addPosition("e7", [-1, 1, 7, 0]);
    design.addPosition("f7", [-1, 1, 7, 0]);
    design.addPosition("g7", [-1, 0, 7, 0]);
    design.addPosition("a6", [0, 1, 7, -7]);
    design.addPosition("b6", [-1, 1, 7, -7]);
    design.addPosition("c6", [-1, 1, 7, -7]);
    design.addPosition("d6", [-1, 1, 7, -7]);
    design.addPosition("e6", [-1, 1, 7, -7]);
    design.addPosition("f6", [-1, 1, 7, -7]);
    design.addPosition("g6", [-1, 0, 7, -7]);
    design.addPosition("a5", [0, 1, 7, -7]);
    design.addPosition("b5", [-1, 1, 7, -7]);
    design.addPosition("c5", [-1, 1, 7, -7]);
    design.addPosition("d5", [-1, 1, 7, -7]);
    design.addPosition("e5", [-1, 1, 7, -7]);
    design.addPosition("f5", [-1, 1, 7, -7]);
    design.addPosition("g5", [-1, 0, 7, -7]);
    design.addPosition("a4", [0, 1, 7, -7]);
    design.addPosition("b4", [-1, 1, 7, -7]);
    design.addPosition("c4", [-1, 1, 7, -7]);
    design.addPosition("d4", [-1, 1, 7, -7]);
    design.addPosition("e4", [-1, 1, 7, -7]);
    design.addPosition("f4", [-1, 1, 7, -7]);
    design.addPosition("g4", [-1, 0, 7, -7]);
    design.addPosition("a3", [0, 1, 7, -7]);
    design.addPosition("b3", [-1, 1, 7, -7]);
    design.addPosition("c3", [-1, 1, 7, -7]);
    design.addPosition("d3", [-1, 1, 7, -7]);
    design.addPosition("e3", [-1, 1, 7, -7]);
    design.addPosition("f3", [-1, 1, 7, -7]);
    design.addPosition("g3", [-1, 0, 7, -7]);
    design.addPosition("a2", [0, 1, 7, -7]);
    design.addPosition("b2", [-1, 1, 7, -7]);
    design.addPosition("c2", [-1, 1, 7, -7]);
    design.addPosition("d2", [-1, 1, 7, -7]);
    design.addPosition("e2", [-1, 1, 7, -7]);
    design.addPosition("f2", [-1, 1, 7, -7]);
    design.addPosition("g2", [-1, 0, 7, -7]);
    design.addPosition("a1", [0, 1, 0, -7]);
    design.addPosition("b1", [-1, 1, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -7]);
    design.addPosition("f1", [-1, 1, 0, -7]);
    design.addPosition("g1", [-1, 0, 0, -7]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.PARAM,	1);	// true
    design.addCommand(0, ZRF.SET_FLAG,	0);	// is-friend
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	8);
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.SET_FLAG,	0);	// is-friend
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FLAG,	0);	// is-friend
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 1, 3], 0);
    design.addMove(0, 0, [2, 1, 2], 0);
    design.addMove(0, 0, [0, 1, 0], 0);
    design.addMove(0, 0, [1, 1, 1], 0);

    design.setup("Black", "Man", 42);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 46);
    design.setup("Black", "Man", 48);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 38);
    design.setup("Black", "Man", 40);
    design.setup("Black", "Man", 28);
    design.setup("Black", "Man", 30);
    design.setup("Black", "Man", 32);
    design.setup("Black", "Man", 34);
    design.setup("Black", "Man", 22);
    design.setup("Black", "Man", 26);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 0);
    design.setup("Black", "Man", 2);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 6);
    design.setup("White", "Man", 43);
    design.setup("White", "Man", 45);
    design.setup("White", "Man", 47);
    design.setup("White", "Man", 35);
    design.setup("White", "Man", 37);
    design.setup("White", "Man", 39);
    design.setup("White", "Man", 41);
    design.setup("White", "Man", 29);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 33);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 25);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 15);
    design.setup("White", "Man", 17);
    design.setup("White", "Man", 19);
    design.setup("White", "Man", 7);
    design.setup("White", "Man", 9);
    design.setup("White", "Man", 11);
    design.setup("White", "Man", 13);
    design.setup("White", "Man", 1);
    design.setup("White", "Man", 3);
    design.setup("White", "Man", 5);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a7", 2, 2, 68, 68);
    view.defPosition("b7", 70, 2, 68, 68);
    view.defPosition("c7", 138, 2, 68, 68);
    view.defPosition("d7", 206, 2, 68, 68);
    view.defPosition("e7", 274, 2, 68, 68);
    view.defPosition("f7", 342, 2, 68, 68);
    view.defPosition("g7", 410, 2, 68, 68);
    view.defPosition("a6", 2, 70, 68, 68);
    view.defPosition("b6", 70, 70, 68, 68);
    view.defPosition("c6", 138, 70, 68, 68);
    view.defPosition("d6", 206, 70, 68, 68);
    view.defPosition("e6", 274, 70, 68, 68);
    view.defPosition("f6", 342, 70, 68, 68);
    view.defPosition("g6", 410, 70, 68, 68);
    view.defPosition("a5", 2, 138, 68, 68);
    view.defPosition("b5", 70, 138, 68, 68);
    view.defPosition("c5", 138, 138, 68, 68);
    view.defPosition("d5", 206, 138, 68, 68);
    view.defPosition("e5", 274, 138, 68, 68);
    view.defPosition("f5", 342, 138, 68, 68);
    view.defPosition("g5", 410, 138, 68, 68);
    view.defPosition("a4", 2, 206, 68, 68);
    view.defPosition("b4", 70, 206, 68, 68);
    view.defPosition("c4", 138, 206, 68, 68);
    view.defPosition("d4", 206, 206, 68, 68);
    view.defPosition("e4", 274, 206, 68, 68);
    view.defPosition("f4", 342, 206, 68, 68);
    view.defPosition("g4", 410, 206, 68, 68);
    view.defPosition("a3", 2, 274, 68, 68);
    view.defPosition("b3", 70, 274, 68, 68);
    view.defPosition("c3", 138, 274, 68, 68);
    view.defPosition("d3", 206, 274, 68, 68);
    view.defPosition("e3", 274, 274, 68, 68);
    view.defPosition("f3", 342, 274, 68, 68);
    view.defPosition("g3", 410, 274, 68, 68);
    view.defPosition("a2", 2, 342, 68, 68);
    view.defPosition("b2", 70, 342, 68, 68);
    view.defPosition("c2", 138, 342, 68, 68);
    view.defPosition("d2", 206, 342, 68, 68);
    view.defPosition("e2", 274, 342, 68, 68);
    view.defPosition("f2", 342, 342, 68, 68);
    view.defPosition("g2", 410, 342, 68, 68);
    view.defPosition("a1", 2, 410, 68, 68);
    view.defPosition("b1", 70, 410, 68, 68);
    view.defPosition("c1", 138, 410, 68, 68);
    view.defPosition("d1", 206, 410, 68, 68);
    view.defPosition("e1", 274, 410, 68, 68);
    view.defPosition("f1", 342, 410, 68, 68);
    view.defPosition("g1", 410, 410, 68, 68);
}
