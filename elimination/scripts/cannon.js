Dagaz.Controller.persistense = "none";

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "true");
    design.checkVersion("show-drops", "all");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("cannon-restrictions", "true");
    design.checkVersion("cannon-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Red", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a10", [0, 1, 10, 0, 0, 11, 0, 0]);
    design.addPosition("b10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("c10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("d10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("e10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("f10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("g10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("h10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("i10", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("j10", [-1, 0, 10, 0, 0, 0, 9, 0]);
    design.addPosition("a9", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i9", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j9", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a8", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i8", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j8", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a7", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i7", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j7", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a6", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i6", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j6", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a5", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i5", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j5", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a4", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i4", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j4", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a3", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i3", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j3", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a2", [0, 1, 10, -9, -10, 11, 0, 0]);
    design.addPosition("b2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("c2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("d2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("e2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("f2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("g2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("h2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("i2", [-1, 1, 10, -9, -10, 11, 9, -11]);
    design.addPosition("j2", [-1, 0, 10, 0, -10, 0, 9, -11]);
    design.addPosition("a1", [0, 1, 0, -9, -10, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("c1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("d1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("e1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("f1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("g1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("h1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("i1", [-1, 1, 0, -9, -10, 0, 0, -11]);
    design.addPosition("j1", [-1, 0, 0, 0, -10, 0, 0, -11]);

    design.addZone("home", 1, [91, 92, 93, 94, 95, 96, 97, 98]);
    design.addZone("home", 2, [1, 2, 3, 4, 5, 6, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Cannon
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Cannon
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.IN_ZONE,	0);	// home
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("Cannon", 0, 100);
    design.addMove(0, 0, [4], 0, 12);
    design.addMove(0, 0, [7], 0, 12);
    design.addMove(0, 0, [3], 0, 12);
    design.addMove(0, 1, [], 3, 10);
    design.addMove(0, 2, [4], 0, 12);
    design.addMove(0, 2, [7], 0, 12);
    design.addMove(0, 2, [3], 0, 12);
    design.addMove(0, 2, [0], 0, 12);
    design.addMove(0, 2, [1], 0, 12);
    design.addMove(0, 3, [4, 4, 4], 0, 13);
    design.addMove(0, 3, [7, 7, 7], 0, 13);
    design.addMove(0, 3, [3, 3, 3], 0, 13);
    design.addMove(0, 3, [1, 1, 1], 0, 13);
    design.addMove(0, 3, [2, 2, 2], 0, 13);
    design.addMove(0, 3, [6, 6, 6], 0, 13);
    design.addMove(0, 3, [5, 5, 5], 0, 13);
    design.addMove(0, 3, [0, 0, 0], 0, 13);
    design.addMove(0, 4, [2, 2], 1, 12);
    design.addMove(0, 4, [6, 6], 1, 12);
    design.addMove(0, 4, [5, 5], 1, 12);

    design.addPiece("HQ", 1, 10000);
    design.addDrop(1, 5, [], 2, 11);
    design.addMove(1, 1, [], 3, 10);

    design.reserve("Red", "HQ", 1);
    design.setup("Red", "Cannon", 80);
    design.setup("Red", "Cannon", 70);
    design.setup("Red", "Cannon", 60);
    design.setup("Red", "Cannon", 82);
    design.setup("Red", "Cannon", 72);
    design.setup("Red", "Cannon", 62);
    design.setup("Red", "Cannon", 84);
    design.setup("Red", "Cannon", 74);
    design.setup("Red", "Cannon", 64);
    design.setup("Red", "Cannon", 86);
    design.setup("Red", "Cannon", 76);
    design.setup("Red", "Cannon", 66);
    design.setup("Red", "Cannon", 88);
    design.setup("Red", "Cannon", 78);
    design.setup("Red", "Cannon", 68);
    design.reserve("Black", "HQ", 1);
    design.setup("Black", "Cannon", 31);
    design.setup("Black", "Cannon", 21);
    design.setup("Black", "Cannon", 11);
    design.setup("Black", "Cannon", 33);
    design.setup("Black", "Cannon", 23);
    design.setup("Black", "Cannon", 13);
    design.setup("Black", "Cannon", 35);
    design.setup("Black", "Cannon", 25);
    design.setup("Black", "Cannon", 15);
    design.setup("Black", "Cannon", 37);
    design.setup("Black", "Cannon", 27);
    design.setup("Black", "Cannon", 17);
    design.setup("Black", "Cannon", 39);
    design.setup("Black", "Cannon", 29);
    design.setup("Black", "Cannon", 19);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedHQ", "Red HQ");
    view.defPiece("BlackHQ", "Black HQ");
 
    view.defPosition("a10", 4, 5, 42, 42);
    view.defPosition("b10", 49, 5, 42, 42);
    view.defPosition("c10", 94, 5, 42, 42);
    view.defPosition("d10", 139, 5, 42, 42);
    view.defPosition("e10", 184, 5, 42, 42);
    view.defPosition("f10", 229, 5, 42, 42);
    view.defPosition("g10", 274, 5, 42, 42);
    view.defPosition("h10", 319, 5, 42, 42);
    view.defPosition("i10", 364, 5, 42, 42);
    view.defPosition("j10", 409, 5, 42, 42);
    view.defPosition("a9", 4, 50, 42, 42);
    view.defPosition("b9", 49, 50, 42, 42);
    view.defPosition("c9", 94, 50, 42, 42);
    view.defPosition("d9", 139, 50, 42, 42);
    view.defPosition("e9", 184, 50, 42, 42);
    view.defPosition("f9", 229, 50, 42, 42);
    view.defPosition("g9", 274, 50, 42, 42);
    view.defPosition("h9", 319, 50, 42, 42);
    view.defPosition("i9", 364, 50, 42, 42);
    view.defPosition("j9", 409, 50, 42, 42);
    view.defPosition("a8", 4, 95, 42, 42);
    view.defPosition("b8", 49, 95, 42, 42);
    view.defPosition("c8", 94, 95, 42, 42);
    view.defPosition("d8", 139, 95, 42, 42);
    view.defPosition("e8", 184, 95, 42, 42);
    view.defPosition("f8", 229, 95, 42, 42);
    view.defPosition("g8", 274, 95, 42, 42);
    view.defPosition("h8", 319, 95, 42, 42);
    view.defPosition("i8", 364, 95, 42, 42);
    view.defPosition("j8", 409, 95, 42, 42);
    view.defPosition("a7", 4, 140, 42, 42);
    view.defPosition("b7", 49, 140, 42, 42);
    view.defPosition("c7", 94, 140, 42, 42);
    view.defPosition("d7", 139, 140, 42, 42);
    view.defPosition("e7", 184, 140, 42, 42);
    view.defPosition("f7", 229, 140, 42, 42);
    view.defPosition("g7", 274, 140, 42, 42);
    view.defPosition("h7", 319, 140, 42, 42);
    view.defPosition("i7", 364, 140, 42, 42);
    view.defPosition("j7", 409, 140, 42, 42);
    view.defPosition("a6", 4, 185, 42, 42);
    view.defPosition("b6", 49, 185, 42, 42);
    view.defPosition("c6", 94, 185, 42, 42);
    view.defPosition("d6", 139, 185, 42, 42);
    view.defPosition("e6", 184, 185, 42, 42);
    view.defPosition("f6", 229, 185, 42, 42);
    view.defPosition("g6", 274, 185, 42, 42);
    view.defPosition("h6", 319, 185, 42, 42);
    view.defPosition("i6", 364, 185, 42, 42);
    view.defPosition("j6", 409, 185, 42, 42);
    view.defPosition("a5", 4, 230, 42, 42);
    view.defPosition("b5", 49, 230, 42, 42);
    view.defPosition("c5", 94, 230, 42, 42);
    view.defPosition("d5", 139, 230, 42, 42);
    view.defPosition("e5", 184, 230, 42, 42);
    view.defPosition("f5", 229, 230, 42, 42);
    view.defPosition("g5", 274, 230, 42, 42);
    view.defPosition("h5", 319, 230, 42, 42);
    view.defPosition("i5", 364, 230, 42, 42);
    view.defPosition("j5", 409, 230, 42, 42);
    view.defPosition("a4", 4, 275, 42, 42);
    view.defPosition("b4", 49, 275, 42, 42);
    view.defPosition("c4", 94, 275, 42, 42);
    view.defPosition("d4", 139, 275, 42, 42);
    view.defPosition("e4", 184, 275, 42, 42);
    view.defPosition("f4", 229, 275, 42, 42);
    view.defPosition("g4", 274, 275, 42, 42);
    view.defPosition("h4", 319, 275, 42, 42);
    view.defPosition("i4", 364, 275, 42, 42);
    view.defPosition("j4", 409, 275, 42, 42);
    view.defPosition("a3", 4, 320, 42, 42);
    view.defPosition("b3", 49, 320, 42, 42);
    view.defPosition("c3", 94, 320, 42, 42);
    view.defPosition("d3", 139, 320, 42, 42);
    view.defPosition("e3", 184, 320, 42, 42);
    view.defPosition("f3", 229, 320, 42, 42);
    view.defPosition("g3", 274, 320, 42, 42);
    view.defPosition("h3", 319, 320, 42, 42);
    view.defPosition("i3", 364, 320, 42, 42);
    view.defPosition("j3", 409, 320, 42, 42);
    view.defPosition("a2", 4, 365, 42, 42);
    view.defPosition("b2", 49, 365, 42, 42);
    view.defPosition("c2", 94, 365, 42, 42);
    view.defPosition("d2", 139, 365, 42, 42);
    view.defPosition("e2", 184, 365, 42, 42);
    view.defPosition("f2", 229, 365, 42, 42);
    view.defPosition("g2", 274, 365, 42, 42);
    view.defPosition("h2", 319, 365, 42, 42);
    view.defPosition("i2", 364, 365, 42, 42);
    view.defPosition("j2", 409, 365, 42, 42);
    view.defPosition("a1", 4, 410, 42, 42);
    view.defPosition("b1", 49, 410, 42, 42);
    view.defPosition("c1", 94, 410, 42, 42);
    view.defPosition("d1", 139, 410, 42, 42);
    view.defPosition("e1", 184, 410, 42, 42);
    view.defPosition("f1", 229, 410, 42, 42);
    view.defPosition("g1", 274, 410, 42, 42);
    view.defPosition("h1", 319, 410, 42, 42);
    view.defPosition("i1", 364, 410, 42, 42);
    view.defPosition("j1", 409, 410, 42, 42);
}
