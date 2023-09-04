Dagaz.Model.WIDTH = 10;

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
    design.checkVersion("halma-restrictions", "strong");

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");
    design.addDirection("nx");
    design.addDirection("nb");

    design.addPlayer("Red", [3, 2, 1, 0, 4, 5]);
    design.addPlayer("Blue", [0, 1, 2, 3, 5, 4]);

    design.addPosition("a10", [10, 1, 0, 0, 1, 0]);
    design.addPosition("b10", [10, 1, -1, 0, 9, 0]);
    design.addPosition("c10", [10, 1, -1, 0, 1, 0]);
    design.addPosition("d10", [10, 1, -1, 0, 9, 0]);
    design.addPosition("e10", [10, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [10, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [10, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [10, 1, -1, 0, 0, 0]);
    design.addPosition("i10", [10, 1, -1, 0, 0, 0]);
    design.addPosition("j10", [10, 0, -1, 0, 0, 0]);
    design.addPosition("a9", [10, 1, 0, -10, 10, 0]);
    design.addPosition("b9", [10, 1, -1, -10, -9, 0]);
    design.addPosition("c9", [10, 1, -1, -10, 9, 0]);
    design.addPosition("d9", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e9", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f9", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g9", [10, 1, -1, -10, 0, 0]);
    design.addPosition("h9", [10, 1, -1, -10, 0, 0]);
    design.addPosition("i9", [10, 1, -1, -10, 0, 0]);
    design.addPosition("j9", [10, 0, -1, -10, 0, 0]);
    design.addPosition("a8", [10, 1, 0, -10, -9, 0]);
    design.addPosition("b8", [10, 1, -1, -10, 9, 0]);
    design.addPosition("c8", [10, 1, -1, -10, -9, 0]);
    design.addPosition("d8", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e8", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f8", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g8", [10, 1, -1, -10, 0, 0]);
    design.addPosition("h8", [10, 1, -1, -10, 0, 0]);
    design.addPosition("i8", [10, 1, -1, -10, 0, 0]);
    design.addPosition("j8", [10, 0, -1, -10, 0, 0]);
    design.addPosition("a7", [10, 1, 0, -10, 1, 0]);
    design.addPosition("b7", [10, 1, -1, -10, -9, 0]);
    design.addPosition("c7", [10, 1, -1, -10, 0, 0]);
    design.addPosition("d7", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e7", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f7", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g7", [10, 1, -1, -10, 0, 0]);
    design.addPosition("h7", [10, 1, -1, -10, 0, 0]);
    design.addPosition("i7", [10, 1, -1, -10, 0, 0]);
    design.addPosition("j7", [10, 0, -1, -10, 0, 0]);
    design.addPosition("a6", [10, 1, 0, -10, 0, 0]);
    design.addPosition("b6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("c6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("d6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("h6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("i6", [10, 1, -1, -10, 0, 0]);
    design.addPosition("j6", [10, 0, -1, -10, 0, 0]);
    design.addPosition("a5", [10, 1, 0, -10, 0, 0]);
    design.addPosition("b5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("c5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("d5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("h5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("i5", [10, 1, -1, -10, 0, 0]);
    design.addPosition("j5", [10, 0, -1, -10, 0, 0]);
    design.addPosition("a4", [10, 1, 0, -10, 0, 0]);
    design.addPosition("b4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("c4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("d4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("h4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("i4", [10, 1, -1, -10, 0, 0]);
    design.addPosition("j4", [10, 0, -1, -10, 0, 9]);
    design.addPosition("a3", [10, 1, 0, -10, 0, 0]);
    design.addPosition("b3", [10, 1, -1, -10, 0, 0]);
    design.addPosition("c3", [10, 1, -1, -10, 0, 0]);
    design.addPosition("d3", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e3", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f3", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g3", [10, 1, -1, -10, 0, 0]);
    design.addPosition("h3", [10, 1, -1, -10, 0, -9]);
    design.addPosition("i3", [10, 1, -1, -10, 0, 9]);
    design.addPosition("j3", [10, 0, -1, -10, 0, -10]);
    design.addPosition("a2", [10, 1, 0, -10, 0, 0]);
    design.addPosition("b2", [10, 1, -1, -10, 0, 0]);
    design.addPosition("c2", [10, 1, -1, -10, 0, 0]);
    design.addPosition("d2", [10, 1, -1, -10, 0, 0]);
    design.addPosition("e2", [10, 1, -1, -10, 0, 0]);
    design.addPosition("f2", [10, 1, -1, -10, 0, 0]);
    design.addPosition("g2", [10, 1, -1, -10, 0, -9]);
    design.addPosition("h2", [10, 1, -1, -10, 0, 9]);
    design.addPosition("i2", [10, 1, -1, -10, 0, -9]);
    design.addPosition("j2", [10, 0, -1, -10, 0, 9]);
    design.addPosition("a1", [0, 1, 0, -10, 0, 0]);
    design.addPosition("b1", [0, 1, -1, -10, 0, 0]);
    design.addPosition("c1", [0, 1, -1, -10, 0, 0]);
    design.addPosition("d1", [0, 1, -1, -10, 0, 0]);
    design.addPosition("e1", [0, 1, -1, -10, 0, 0]);
    design.addPosition("f1", [0, 1, -1, -10, 0, 0]);
    design.addPosition("g1", [0, 1, -1, -10, 0, -10]);
    design.addPosition("h1", [0, 1, -1, -10, 0, -9]);
    design.addPosition("i1", [0, 1, -1, -10, 0, -1]);
    design.addPosition("j1", [0, 0, -1, -10, 0, -10]);

    design.addZone("goal-zone", 1, [0, 1, 2, 3, 10, 11, 12, 13, 20, 21, 22, 30, 31]);
    design.addZone("goal-zone", 2, [96, 97, 98, 99, 86, 87, 88, 89, 77, 78, 79, 68, 69]);
    design.addZone("home-zone", 1, [96, 97, 98, 99, 86, 87, 88, 89, 77, 78, 79, 68, 69]);
    design.addZone("home-zone", 2, [0, 1, 2, 3, 10, 11, 12, 13, 20, 21, 22, 30, 31]);
    design.addZone("target-zone", 1, [0]);
    design.addZone("target-zone", 2, [99]);

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
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [0, 0], 1);

    design.setup("Red", "Man", 96);
    design.setup("Red", "Man", 97);
    design.setup("Red", "Man", 98);
    design.setup("Red", "Man", 99);
    design.setup("Red", "Man", 86);
    design.setup("Red", "Man", 87);
    design.setup("Red", "Man", 88);
    design.setup("Red", "Man", 89);
    design.setup("Red", "Man", 77);
    design.setup("Red", "Man", 78);
    design.setup("Red", "Man", 79);
    design.setup("Red", "Man", 68);
    design.setup("Red", "Man", 69);
    design.setup("Blue", "Man", 0);
    design.setup("Blue", "Man", 1);
    design.setup("Blue", "Man", 2);
    design.setup("Blue", "Man", 3);
    design.setup("Blue", "Man", 10);
    design.setup("Blue", "Man", 11);
    design.setup("Blue", "Man", 12);
    design.setup("Blue", "Man", 13);
    design.setup("Blue", "Man", 20);
    design.setup("Blue", "Man", 21);
    design.setup("Blue", "Man", 22);
    design.setup("Blue", "Man", 30);
    design.setup("Blue", "Man", 31);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedMan", "Red Man");
    view.defPiece("BlueMan", "Blue Man");
 
    view.defPosition("a10", 2, 2, 50, 50);
    view.defPosition("b10", 52, 2, 50, 50);
    view.defPosition("c10", 102, 2, 50, 50);
    view.defPosition("d10", 152, 2, 50, 50);
    view.defPosition("e10", 202, 2, 50, 50);
    view.defPosition("f10", 252, 2, 50, 50);
    view.defPosition("g10", 302, 2, 50, 50);
    view.defPosition("h10", 352, 2, 50, 50);
    view.defPosition("i10", 402, 2, 50, 50);
    view.defPosition("j10", 452, 2, 50, 50);
    view.defPosition("a9", 2, 52, 50, 50);
    view.defPosition("b9", 52, 52, 50, 50);
    view.defPosition("c9", 102, 52, 50, 50);
    view.defPosition("d9", 152, 52, 50, 50);
    view.defPosition("e9", 202, 52, 50, 50);
    view.defPosition("f9", 252, 52, 50, 50);
    view.defPosition("g9", 302, 52, 50, 50);
    view.defPosition("h9", 352, 52, 50, 50);
    view.defPosition("i9", 402, 52, 50, 50);
    view.defPosition("j9", 452, 52, 50, 50);
    view.defPosition("a8", 2, 102, 50, 50);
    view.defPosition("b8", 52, 102, 50, 50);
    view.defPosition("c8", 102, 102, 50, 50);
    view.defPosition("d8", 152, 102, 50, 50);
    view.defPosition("e8", 202, 102, 50, 50);
    view.defPosition("f8", 252, 102, 50, 50);
    view.defPosition("g8", 302, 102, 50, 50);
    view.defPosition("h8", 352, 102, 50, 50);
    view.defPosition("i8", 402, 102, 50, 50);
    view.defPosition("j8", 452, 102, 50, 50);
    view.defPosition("a7", 2, 152, 50, 50);
    view.defPosition("b7", 52, 152, 50, 50);
    view.defPosition("c7", 102, 152, 50, 50);
    view.defPosition("d7", 152, 152, 50, 50);
    view.defPosition("e7", 202, 152, 50, 50);
    view.defPosition("f7", 252, 152, 50, 50);
    view.defPosition("g7", 302, 152, 50, 50);
    view.defPosition("h7", 352, 152, 50, 50);
    view.defPosition("i7", 402, 152, 50, 50);
    view.defPosition("j7", 452, 152, 50, 50);
    view.defPosition("a6", 2, 202, 50, 50);
    view.defPosition("b6", 52, 202, 50, 50);
    view.defPosition("c6", 102, 202, 50, 50);
    view.defPosition("d6", 152, 202, 50, 50);
    view.defPosition("e6", 202, 202, 50, 50);
    view.defPosition("f6", 252, 202, 50, 50);
    view.defPosition("g6", 302, 202, 50, 50);
    view.defPosition("h6", 352, 202, 50, 50);
    view.defPosition("i6", 402, 202, 50, 50);
    view.defPosition("j6", 452, 202, 50, 50);
    view.defPosition("a5", 2, 252, 50, 50);
    view.defPosition("b5", 52, 252, 50, 50);
    view.defPosition("c5", 102, 252, 50, 50);
    view.defPosition("d5", 152, 252, 50, 50);
    view.defPosition("e5", 202, 252, 50, 50);
    view.defPosition("f5", 252, 252, 50, 50);
    view.defPosition("g5", 302, 252, 50, 50);
    view.defPosition("h5", 352, 252, 50, 50);
    view.defPosition("i5", 402, 252, 50, 50);
    view.defPosition("j5", 452, 252, 50, 50);
    view.defPosition("a4", 2, 302, 50, 50);
    view.defPosition("b4", 52, 302, 50, 50);
    view.defPosition("c4", 102, 302, 50, 50);
    view.defPosition("d4", 152, 302, 50, 50);
    view.defPosition("e4", 202, 302, 50, 50);
    view.defPosition("f4", 252, 302, 50, 50);
    view.defPosition("g4", 302, 302, 50, 50);
    view.defPosition("h4", 352, 302, 50, 50);
    view.defPosition("i4", 402, 302, 50, 50);
    view.defPosition("j4", 452, 302, 50, 50);
    view.defPosition("a3", 2, 352, 50, 50);
    view.defPosition("b3", 52, 352, 50, 50);
    view.defPosition("c3", 102, 352, 50, 50);
    view.defPosition("d3", 152, 352, 50, 50);
    view.defPosition("e3", 202, 352, 50, 50);
    view.defPosition("f3", 252, 352, 50, 50);
    view.defPosition("g3", 302, 352, 50, 50);
    view.defPosition("h3", 352, 352, 50, 50);
    view.defPosition("i3", 402, 352, 50, 50);
    view.defPosition("j3", 452, 352, 50, 50);
    view.defPosition("a2", 2, 402, 50, 50);
    view.defPosition("b2", 52, 402, 50, 50);
    view.defPosition("c2", 102, 402, 50, 50);
    view.defPosition("d2", 152, 402, 50, 50);
    view.defPosition("e2", 202, 402, 50, 50);
    view.defPosition("f2", 252, 402, 50, 50);
    view.defPosition("g2", 302, 402, 50, 50);
    view.defPosition("h2", 352, 402, 50, 50);
    view.defPosition("i2", 402, 402, 50, 50);
    view.defPosition("j2", 452, 402, 50, 50);
    view.defPosition("a1", 2, 452, 50, 50);
    view.defPosition("b1", 52, 452, 50, 50);
    view.defPosition("c1", 102, 452, 50, 50);
    view.defPosition("d1", 152, 452, 50, 50);
    view.defPosition("e1", 202, 452, 50, 50);
    view.defPosition("f1", 252, 452, 50, 50);
    view.defPosition("g1", 302, 452, 50, 50);
    view.defPosition("h1", 352, 452, 50, 50);
    view.defPosition("i1", 402, 452, 50, 50);
    view.defPosition("j1", 452, 452, 50, 50);
}
