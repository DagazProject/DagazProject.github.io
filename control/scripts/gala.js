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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("gala-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("next");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5, 8]);
    design.addPlayer("Black", [0, 1, 2, 6, 4, 7, 3, 5, 0]);

    design.addPosition("a10", [0, 1, 10, 0, 0, 11, 0, 0, 0]);
    design.addPosition("b10", [-1, 1, 10, 0, 0, 11, 9, 0, 0]);
    design.addPosition("c10", [-1, 1, 10, 0, 0, 11, 9, 0, 0]);
    design.addPosition("d10", [-1, 1, 10, 0, 0, 11, 9, 0, 0]);
    design.addPosition("e10", [-1, 1, 10, 0, 0, 11, 9, 0, 91]);
    design.addPosition("f10", [-1, 1, 10, 0, 0, 11, 9, 0, 56]);
    design.addPosition("g10", [-1, 1, 10, 0, 0, 11, 9, 0, 0]);
    design.addPosition("h10", [-1, 1, 10, 0, 0, 11, 9, 0, 0]);
    design.addPosition("i10", [-1, 1, 10, 0, 0, 11, 9, 0, 0]);
    design.addPosition("j10", [-1, 0, 10, 0, 0, 0, 9, 0, 0]);
    design.addPosition("a9", [0, 1, 10, -9, -10, 11, 0, 0, 0]);
    design.addPosition("b9", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("c9", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("d9", [-1, 1, 10, -9, -10, 11, 9, -11, 23]);
    design.addPosition("e9", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("f9", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("g9", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("h9", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("i9", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("j9", [-1, 0, 10, 0, -10, 0, 9, -11, 0]);
    design.addPosition("a8", [0, 1, 10, -9, -10, 11, 0, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("c8", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("d8", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("e8", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("f8", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("g8", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("h8", [-1, 1, 10, -9, -10, 11, 9, -11, -11]);
    design.addPosition("i8", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("j8", [-1, 0, 10, 0, -10, 0, 9, -11, 0]);
    design.addPosition("a7", [0, 1, 10, -9, -10, 11, 0, 0, 0]);
    design.addPosition("b7", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("c7", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("d7", [-1, 1, 10, -9, -10, 11, 9, -11, -11]);
    design.addPosition("e7", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("f7", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("g7", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("h7", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("i7", [-1, 1, 10, -9, -10, 11, 9, -11, -12]);
    design.addPosition("j7", [-1, 0, 10, 0, -10, 0, 9, -11, 0]);
    design.addPosition("a6", [0, 1, 10, -9, -10, 11, 0, 0, 1]);
    design.addPosition("b6", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("c6", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("d6", [-1, 1, 10, -9, -10, 11, 9, -11, 3]);
    design.addPosition("e6", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("f6", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("g6", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("h6", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("i6", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("j6", [-1, 0, 10, 0, -10, 0, 9, -11, 45]);
    design.addPosition("a5", [0, 1, 10, -9, -10, 11, 0, 0, 1]);
    design.addPosition("b5", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("c5", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("d5", [-1, 1, 10, -9, -10, 11, 9, -11, 3]);
    design.addPosition("e5", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("f5", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("g5", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("h5", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("i5", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("j5", [-1, 0, 10, 0, -10, 0, 9, -11, -19]);
    design.addPosition("a4", [0, 1, 10, -9, -10, 11, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("c4", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("d4", [-1, 1, 10, -9, -10, 11, 9, -11, 9]);
    design.addPosition("e4", [-1, 1, 10, -9, -10, 11, 9, -11, -30]);
    design.addPosition("f4", [-1, 1, 10, -9, -10, 11, 9, -11, -30]);
    design.addPosition("g4", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("h4", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("i4", [-1, 1, 10, -9, -10, 11, 9, -11, 8]);
    design.addPosition("j4", [-1, 0, 10, 0, -10, 0, 9, -11, 0]);
    design.addPosition("a3", [0, 1, 10, -9, -10, 11, 0, 0, 0]);
    design.addPosition("b3", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("c3", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("d3", [-1, 1, 10, -9, -10, 11, 9, -11, 10]);
    design.addPosition("e3", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("f3", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("g3", [-1, 1, 10, -9, -10, 11, 9, -11, 1]);
    design.addPosition("h3", [-1, 1, 10, -9, -10, 11, 9, -11, 9]);
    design.addPosition("i3", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("j3", [-1, 0, 10, 0, -10, 0, 9, -11, 0]);
    design.addPosition("a2", [0, 1, 10, -9, -10, 11, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("c2", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("d2", [-1, 1, 10, -9, -10, 11, 9, -11, -17]);
    design.addPosition("e2", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("f2", [-1, 1, 10, -9, -10, 11, 9, -11, -10]);
    design.addPosition("g2", [-1, 1, 10, -9, -10, 11, 9, -11, -55]);
    design.addPosition("h2", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("i2", [-1, 1, 10, -9, -10, 11, 9, -11, 0]);
    design.addPosition("j2", [-1, 0, 10, 0, -10, 0, 9, -11, 0]);
    design.addPosition("a1", [0, 1, 0, -9, -10, 0, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, -10, 0, 0, -11, 0]);
    design.addPosition("c1", [-1, 1, 0, -9, -10, 0, 0, -11, 0]);
    design.addPosition("d1", [-1, 1, 0, -9, -10, 0, 0, -11, 0]);
    design.addPosition("e1", [-1, 1, 0, -9, -10, 0, 0, -11, -10]);
    design.addPosition("f1", [-1, 1, 0, -9, -10, 0, 0, -11, -10]);
    design.addPosition("g1", [-1, 1, 0, -9, -10, 0, 0, -11, 0]);
    design.addPosition("h1", [-1, 1, 0, -9, -10, 0, 0, -11, 0]);
    design.addPosition("i1", [-1, 1, 0, -9, -10, 0, 0, -11, 0]);
    design.addPosition("j1", [-1, 0, 0, 0, -10, 0, 0, -11, 0]);

    design.addZone("center", 1, [54, 44, 55, 45]);
    design.addZone("center", 2, [54, 44, 55, 45]);
    design.addZone("cross", 1, [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 94, 84, 74, 64, 34, 24, 14, 4, 95, 85, 75, 65, 35, 25, 15, 5]);
    design.addZone("cross", 2, [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 94, 84, 74, 64, 34, 24, 14, 4, 95, 85, 75, 65, 35, 25, 15, 5]);
    design.addZone("outer", 1, [90, 80, 70, 60, 91, 81, 71, 61, 92, 82, 72, 62, 93, 83, 73, 63, 96, 86, 76, 66, 97, 87, 77, 67, 98, 88, 78, 68, 99, 89, 79, 69, 30, 20, 10, 0, 31, 21, 11, 1, 32, 22, 12, 2, 33, 23, 13, 3, 36, 26, 16, 6, 37, 27, 17, 7, 38, 28, 18, 8, 39, 29, 19, 9]);
    design.addZone("outer", 2, [90, 80, 70, 60, 91, 81, 71, 61, 92, 82, 72, 62, 93, 83, 73, 63, 96, 86, 76, 66, 97, 87, 77, 67, 98, 88, 78, 68, 99, 89, 79, 69, 30, 20, 10, 0, 31, 21, 11, 1, 32, 22, 12, 2, 33, 23, 13, 3, 36, 26, 16, 6, 37, 27, 17, 7, 38, 28, 18, 8, 39, 29, 19, 9]);
    design.addZone("restricted", 1, [90, 91, 92, 80, 81, 70, 97, 98, 99, 88, 89, 79, 0, 1, 2, 10, 11, 20, 7, 8, 9, 18, 19, 29]);
    design.addZone("restricted", 2, [90, 91, 92, 80, 81, 70, 97, 98, 99, 88, 89, 79, 0, 1, 2, 10, 11, 20, 7, 8, 9, 18, 19, 29]);
    design.addZone("home", 1, [60, 71, 82, 93, 62, 73, 61, 72, 83, 63, 96, 87, 78, 69, 76, 67, 86, 77, 68, 66]);
    design.addZone("home", 2, [6, 17, 28, 39, 26, 37, 16, 27, 38, 36, 30, 21, 12, 3, 32, 23, 31, 22, 13, 33]);
    design.addZone("left", 1, [60, 71, 82, 93, 62, 73, 61, 72, 83, 63]);
    design.addZone("left", 2, [6, 17, 28, 39, 26, 37, 16, 27, 38, 36]);
    design.addZone("right", 1, [96, 87, 78, 69, 76, 67, 86, 77, 68, 66]);
    design.addZone("right", 2, [30, 21, 12, 3, 32, 23, 31, 22, 13, 33]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// center
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	21);	// position
    design.addCommand(3, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-11);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	2);	// outer
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// true
    design.addCommand(4, ZRF.SET_FLAG,	0);	// long-slide
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.IN_ZONE,	2);	// outer
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	3);	// false
    design.addCommand(4, ZRF.SET_FLAG,	0);	// long-slide
    design.addCommand(4, ZRF.JUMP,	-15);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.IN_ZONE,	2);	// outer
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.IN_ZONE,	2);	// outer
    design.addCommand(4, ZRF.IF,	14);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FLAG,	0);	// long-slide
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.JUMP,	-14);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// true
    design.addCommand(5, ZRF.SET_FLAG,	0);	// long-slide
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	3);	// false
    design.addCommand(5, ZRF.SET_FLAG,	0);	// long-slide
    design.addCommand(5, ZRF.JUMP,	-15);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(5, ZRF.IF,	14);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FLAG,	0);	// long-slide
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.JUMP,	-14);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	2);	// outer
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.IN_ZONE,	2);	// outer
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.LITERAL,	1);	// true
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.LITERAL,	0);	// false
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	9);
    design.addCommand(6, ZRF.IN_ZONE,	0);	// center
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-18);
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	9);
    design.addCommand(7, ZRF.IN_ZONE,	0);	// center
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-18);
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// true
    design.addCommand(8, ZRF.SET_FLAG,	0);	// long-slide
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	3);	// false
    design.addCommand(8, ZRF.SET_FLAG,	0);	// long-slide
    design.addCommand(8, ZRF.JUMP,	-15);
    design.addCommand(8, ZRF.FLAG,	0);	// long-slide
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.JUMP,	4);
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.IN_ZONE,	1);	// cross
    design.addCommand(8, ZRF.IF,	14);
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FLAG,	0);	// long-slide
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.JUMP,	-14);
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	4);	// home
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.IN_ZONE,	5);	// left
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.IN_ZONE,	4);	// home
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	8);
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FORK,	3);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.IN_ZONE,	4);	// home
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.IN_ZONE,	6);	// right
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.IN_ZONE,	4);	// home
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	8);
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FORK,	3);
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.IN_ZONE,	4);	// home
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.IN_ZONE,	3);	// restricted
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addPiece("Gala", 0, 1000);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 2, [4], 0);
    design.addMove(0, 2, [7], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 2, [2], 0);
    design.addMove(0, 2, [6], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 2, [1], 0);
    design.addMove(0, 2, [3], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 2, [0], 0);
    design.addMove(0, 2, [5], 0);
    design.addMove(0, 3, [50, 8], 0);

    design.addPiece("Korna", 1, 3);
    design.addMove(1, 4, [4, 1, 4, 0, 7, 7], 1);
    design.addMove(1, 4, [4, 1, 4, 0, 3, 3], 1);
    design.addMove(1, 4, [4, 1, 4, 0, 6, 6], 1);
    design.addMove(1, 4, [4, 1, 4, 0, 5, 5], 1);
    design.addMove(1, 4, [2, 1, 2, 0, 7, 7], 1);
    design.addMove(1, 4, [2, 1, 2, 0, 3, 3], 1);
    design.addMove(1, 4, [2, 1, 2, 0, 6, 6], 1);
    design.addMove(1, 4, [2, 1, 2, 0, 5, 5], 1);
    design.addMove(1, 4, [1, 1, 1, 0, 7, 7], 1);
    design.addMove(1, 4, [1, 1, 1, 0, 3, 3], 1);
    design.addMove(1, 4, [1, 1, 1, 0, 6, 6], 1);
    design.addMove(1, 4, [1, 1, 1, 0, 5, 5], 1);
    design.addMove(1, 4, [0, 1, 0, 0, 7, 7], 1);
    design.addMove(1, 4, [0, 1, 0, 0, 3, 3], 1);
    design.addMove(1, 4, [0, 1, 0, 0, 6, 6], 1);
    design.addMove(1, 4, [0, 1, 0, 0, 5, 5], 1);
    design.addMove(1, 5, [7, 1, 7, 0, 4, 4], 1);
    design.addMove(1, 5, [7, 1, 7, 0, 2, 2], 1);
    design.addMove(1, 5, [7, 1, 7, 0, 0, 0], 1);
    design.addMove(1, 5, [7, 1, 7, 0, 1, 1], 1);
    design.addMove(1, 5, [6, 1, 6, 0, 4, 4], 1);
    design.addMove(1, 5, [6, 1, 6, 0, 2, 2], 1);
    design.addMove(1, 5, [6, 1, 6, 0, 0, 0], 1);
    design.addMove(1, 5, [6, 1, 6, 0, 1, 1], 1);
    design.addMove(1, 5, [5, 1, 5, 0, 4, 4], 1);
    design.addMove(1, 5, [5, 1, 5, 0, 2, 2], 1);
    design.addMove(1, 5, [5, 1, 5, 0, 0, 0], 1);
    design.addMove(1, 5, [5, 1, 5, 0, 1, 1], 1);
    design.addMove(1, 5, [3, 1, 3, 0, 4, 4], 1);
    design.addMove(1, 5, [3, 1, 3, 0, 2, 2], 1);
    design.addMove(1, 5, [3, 1, 3, 0, 0, 0], 1);
    design.addMove(1, 5, [3, 1, 3, 0, 1, 1], 1);
    design.addMove(1, 6, [4, 4], 0);
    design.addMove(1, 6, [4, 4], 0);
    design.addMove(1, 6, [4, 4], 0);
    design.addMove(1, 6, [4, 4], 0);
    design.addMove(1, 6, [2, 2], 0);
    design.addMove(1, 6, [2, 2], 0);
    design.addMove(1, 6, [2, 2], 0);
    design.addMove(1, 6, [2, 2], 0);
    design.addMove(1, 6, [1, 1], 0);
    design.addMove(1, 6, [1, 1], 0);
    design.addMove(1, 6, [1, 1], 0);
    design.addMove(1, 6, [1, 1], 0);
    design.addMove(1, 6, [0, 0], 0);
    design.addMove(1, 6, [0, 0], 0);
    design.addMove(1, 6, [0, 0], 0);
    design.addMove(1, 6, [0, 0], 0);
    design.addMove(1, 7, [7, 7], 0);
    design.addMove(1, 7, [7, 7], 0);
    design.addMove(1, 7, [7, 7], 0);
    design.addMove(1, 7, [7, 7], 0);
    design.addMove(1, 7, [6, 6], 0);
    design.addMove(1, 7, [6, 6], 0);
    design.addMove(1, 7, [6, 6], 0);
    design.addMove(1, 7, [6, 6], 0);
    design.addMove(1, 7, [5, 5], 0);
    design.addMove(1, 7, [5, 5], 0);
    design.addMove(1, 7, [5, 5], 0);
    design.addMove(1, 7, [5, 5], 0);
    design.addMove(1, 7, [3, 3], 0);
    design.addMove(1, 7, [3, 3], 0);
    design.addMove(1, 7, [3, 3], 0);
    design.addMove(1, 7, [3, 3], 0);

    design.addPiece("Horsa", 2, 2);
    design.addMove(2, 4, [7, 1, 7, 0, 4, 4], 2);
    design.addMove(2, 4, [7, 1, 7, 0, 2, 2], 2);
    design.addMove(2, 4, [7, 1, 7, 0, 0, 0], 2);
    design.addMove(2, 4, [7, 1, 7, 0, 1, 1], 2);
    design.addMove(2, 4, [6, 1, 6, 0, 4, 4], 2);
    design.addMove(2, 4, [6, 1, 6, 0, 2, 2], 2);
    design.addMove(2, 4, [6, 1, 6, 0, 0, 0], 2);
    design.addMove(2, 4, [6, 1, 6, 0, 1, 1], 2);
    design.addMove(2, 4, [5, 1, 5, 0, 4, 4], 2);
    design.addMove(2, 4, [5, 1, 5, 0, 2, 2], 2);
    design.addMove(2, 4, [5, 1, 5, 0, 0, 0], 2);
    design.addMove(2, 4, [5, 1, 5, 0, 1, 1], 2);
    design.addMove(2, 4, [3, 1, 3, 0, 4, 4], 2);
    design.addMove(2, 4, [3, 1, 3, 0, 2, 2], 2);
    design.addMove(2, 4, [3, 1, 3, 0, 0, 0], 2);
    design.addMove(2, 4, [3, 1, 3, 0, 1, 1], 2);
    design.addMove(2, 8, [4, 1, 4, 0, 7, 7], 2);
    design.addMove(2, 8, [4, 1, 4, 0, 3, 3], 2);
    design.addMove(2, 8, [4, 1, 4, 0, 6, 6], 2);
    design.addMove(2, 8, [4, 1, 4, 0, 5, 5], 2);
    design.addMove(2, 8, [2, 1, 2, 0, 7, 7], 2);
    design.addMove(2, 8, [2, 1, 2, 0, 3, 3], 2);
    design.addMove(2, 8, [2, 1, 2, 0, 6, 6], 2);
    design.addMove(2, 8, [2, 1, 2, 0, 5, 5], 2);
    design.addMove(2, 8, [1, 1, 1, 0, 7, 7], 2);
    design.addMove(2, 8, [1, 1, 1, 0, 3, 3], 2);
    design.addMove(2, 8, [1, 1, 1, 0, 6, 6], 2);
    design.addMove(2, 8, [1, 1, 1, 0, 5, 5], 2);
    design.addMove(2, 8, [0, 1, 0, 0, 7, 7], 2);
    design.addMove(2, 8, [0, 1, 0, 0, 3, 3], 2);
    design.addMove(2, 8, [0, 1, 0, 0, 6, 6], 2);
    design.addMove(2, 8, [0, 1, 0, 0, 5, 5], 2);
    design.addMove(2, 6, [7, 7], 0);
    design.addMove(2, 6, [7, 7], 0);
    design.addMove(2, 6, [7, 7], 0);
    design.addMove(2, 6, [7, 7], 0);
    design.addMove(2, 6, [6, 6], 0);
    design.addMove(2, 6, [6, 6], 0);
    design.addMove(2, 6, [6, 6], 0);
    design.addMove(2, 6, [6, 6], 0);
    design.addMove(2, 6, [5, 5], 0);
    design.addMove(2, 6, [5, 5], 0);
    design.addMove(2, 6, [5, 5], 0);
    design.addMove(2, 6, [5, 5], 0);
    design.addMove(2, 6, [3, 3], 0);
    design.addMove(2, 6, [3, 3], 0);
    design.addMove(2, 6, [3, 3], 0);
    design.addMove(2, 6, [3, 3], 0);
    design.addMove(2, 7, [4, 4], 0);
    design.addMove(2, 7, [4, 4], 0);
    design.addMove(2, 7, [4, 4], 0);
    design.addMove(2, 7, [4, 4], 0);
    design.addMove(2, 7, [2, 2], 0);
    design.addMove(2, 7, [2, 2], 0);
    design.addMove(2, 7, [2, 2], 0);
    design.addMove(2, 7, [2, 2], 0);
    design.addMove(2, 7, [1, 1], 0);
    design.addMove(2, 7, [1, 1], 0);
    design.addMove(2, 7, [1, 1], 0);
    design.addMove(2, 7, [1, 1], 0);
    design.addMove(2, 7, [0, 0], 0);
    design.addMove(2, 7, [0, 0], 0);
    design.addMove(2, 7, [0, 0], 0);
    design.addMove(2, 7, [0, 0], 0);

    design.addPiece("Kampa", 3, 5);
    design.addMove(3, 9, [3, 3], 0);
    design.addMove(3, 10, [7, 7], 0);
    design.addMove(3, 11, [4], 0);
    design.addMove(3, 11, [7], 0);
    design.addMove(3, 11, [0], 0);
    design.addMove(3, 11, [6], 0);
    design.addMove(3, 11, [2], 0);
    design.addMove(3, 11, [5], 0);
    design.addMove(3, 11, [1], 0);
    design.addMove(3, 11, [3], 0);

    design.setup("White", "Gala", 90);
    design.setup("White", "Gala", 99);
    design.setup("White", "Horsa", 80);
    design.setup("White", "Horsa", 91);
    design.setup("White", "Horsa", 97);
    design.setup("White", "Horsa", 88);
    design.setup("White", "Horsa", 79);
    design.setup("White", "Korna", 98);
    design.setup("White", "Korna", 89);
    design.setup("White", "Korna", 70);
    design.setup("White", "Korna", 81);
    design.setup("White", "Korna", 92);
    design.setup("White", "Kampa", 60);
    design.setup("White", "Kampa", 71);
    design.setup("White", "Kampa", 82);
    design.setup("White", "Kampa", 93);
    design.setup("White", "Kampa", 96);
    design.setup("White", "Kampa", 87);
    design.setup("White", "Kampa", 78);
    design.setup("White", "Kampa", 69);
    design.setup("Black", "Gala", 0);
    design.setup("Black", "Gala", 9);
    design.setup("Black", "Horsa", 8);
    design.setup("Black", "Horsa", 19);
    design.setup("Black", "Horsa", 20);
    design.setup("Black", "Horsa", 11);
    design.setup("Black", "Horsa", 2);
    design.setup("Black", "Korna", 10);
    design.setup("Black", "Korna", 1);
    design.setup("Black", "Korna", 7);
    design.setup("Black", "Korna", 18);
    design.setup("Black", "Korna", 29);
    design.setup("Black", "Kampa", 30);
    design.setup("Black", "Kampa", 21);
    design.setup("Black", "Kampa", 12);
    design.setup("Black", "Kampa", 3);
    design.setup("Black", "Kampa", 6);
    design.setup("Black", "Kampa", 17);
    design.setup("Black", "Kampa", 28);
    design.setup("Black", "Kampa", 39);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteGala", "White Gala");
    view.defPiece("BlackGala", "Black Gala");
    view.defPiece("WhiteKorna", "White Korna");
    view.defPiece("BlackKorna", "Black Korna");
    view.defPiece("WhiteHorsa", "White Horsa");
    view.defPiece("BlackHorsa", "Black Horsa");
    view.defPiece("WhiteKampa", "White Kampa");
    view.defPiece("BlackKampa", "Black Kampa");
 
    view.defPosition("a10", 1, 1, 50, 50);
    view.defPosition("b10", 51, 1, 50, 50);
    view.defPosition("c10", 101, 1, 50, 50);
    view.defPosition("d10", 151, 1, 50, 50);
    view.defPosition("e10", 201, 1, 50, 50);
    view.defPosition("f10", 251, 1, 50, 50);
    view.defPosition("g10", 301, 1, 50, 50);
    view.defPosition("h10", 351, 1, 50, 50);
    view.defPosition("i10", 401, 1, 50, 50);
    view.defPosition("j10", 451, 1, 50, 50);
    view.defPosition("a9", 1, 51, 50, 50);
    view.defPosition("b9", 51, 51, 50, 50);
    view.defPosition("c9", 101, 51, 50, 50);
    view.defPosition("d9", 151, 51, 50, 50);
    view.defPosition("e9", 201, 51, 50, 50);
    view.defPosition("f9", 251, 51, 50, 50);
    view.defPosition("g9", 301, 51, 50, 50);
    view.defPosition("h9", 351, 51, 50, 50);
    view.defPosition("i9", 401, 51, 50, 50);
    view.defPosition("j9", 451, 51, 50, 50);
    view.defPosition("a8", 1, 101, 50, 50);
    view.defPosition("b8", 51, 101, 50, 50);
    view.defPosition("c8", 101, 101, 50, 50);
    view.defPosition("d8", 151, 101, 50, 50);
    view.defPosition("e8", 201, 101, 50, 50);
    view.defPosition("f8", 251, 101, 50, 50);
    view.defPosition("g8", 301, 101, 50, 50);
    view.defPosition("h8", 351, 101, 50, 50);
    view.defPosition("i8", 401, 101, 50, 50);
    view.defPosition("j8", 451, 101, 50, 50);
    view.defPosition("a7", 1, 151, 50, 50);
    view.defPosition("b7", 51, 151, 50, 50);
    view.defPosition("c7", 101, 151, 50, 50);
    view.defPosition("d7", 151, 151, 50, 50);
    view.defPosition("e7", 201, 151, 50, 50);
    view.defPosition("f7", 251, 151, 50, 50);
    view.defPosition("g7", 301, 151, 50, 50);
    view.defPosition("h7", 351, 151, 50, 50);
    view.defPosition("i7", 401, 151, 50, 50);
    view.defPosition("j7", 451, 151, 50, 50);
    view.defPosition("a6", 1, 201, 50, 50);
    view.defPosition("b6", 51, 201, 50, 50);
    view.defPosition("c6", 101, 201, 50, 50);
    view.defPosition("d6", 151, 201, 50, 50);
    view.defPosition("e6", 201, 201, 50, 50);
    view.defPosition("f6", 251, 201, 50, 50);
    view.defPosition("g6", 301, 201, 50, 50);
    view.defPosition("h6", 351, 201, 50, 50);
    view.defPosition("i6", 401, 201, 50, 50);
    view.defPosition("j6", 451, 201, 50, 50);
    view.defPosition("a5", 1, 251, 50, 50);
    view.defPosition("b5", 51, 251, 50, 50);
    view.defPosition("c5", 101, 251, 50, 50);
    view.defPosition("d5", 151, 251, 50, 50);
    view.defPosition("e5", 201, 251, 50, 50);
    view.defPosition("f5", 251, 251, 50, 50);
    view.defPosition("g5", 301, 251, 50, 50);
    view.defPosition("h5", 351, 251, 50, 50);
    view.defPosition("i5", 401, 251, 50, 50);
    view.defPosition("j5", 451, 251, 50, 50);
    view.defPosition("a4", 1, 301, 50, 50);
    view.defPosition("b4", 51, 301, 50, 50);
    view.defPosition("c4", 101, 301, 50, 50);
    view.defPosition("d4", 151, 301, 50, 50);
    view.defPosition("e4", 201, 301, 50, 50);
    view.defPosition("f4", 251, 301, 50, 50);
    view.defPosition("g4", 301, 301, 50, 50);
    view.defPosition("h4", 351, 301, 50, 50);
    view.defPosition("i4", 401, 301, 50, 50);
    view.defPosition("j4", 451, 301, 50, 50);
    view.defPosition("a3", 1, 351, 50, 50);
    view.defPosition("b3", 51, 351, 50, 50);
    view.defPosition("c3", 101, 351, 50, 50);
    view.defPosition("d3", 151, 351, 50, 50);
    view.defPosition("e3", 201, 351, 50, 50);
    view.defPosition("f3", 251, 351, 50, 50);
    view.defPosition("g3", 301, 351, 50, 50);
    view.defPosition("h3", 351, 351, 50, 50);
    view.defPosition("i3", 401, 351, 50, 50);
    view.defPosition("j3", 451, 351, 50, 50);
    view.defPosition("a2", 1, 401, 50, 50);
    view.defPosition("b2", 51, 401, 50, 50);
    view.defPosition("c2", 101, 401, 50, 50);
    view.defPosition("d2", 151, 401, 50, 50);
    view.defPosition("e2", 201, 401, 50, 50);
    view.defPosition("f2", 251, 401, 50, 50);
    view.defPosition("g2", 301, 401, 50, 50);
    view.defPosition("h2", 351, 401, 50, 50);
    view.defPosition("i2", 401, 401, 50, 50);
    view.defPosition("j2", 451, 401, 50, 50);
    view.defPosition("a1", 1, 451, 50, 50);
    view.defPosition("b1", 51, 451, 50, 50);
    view.defPosition("c1", 101, 451, 50, 50);
    view.defPosition("d1", 151, 451, 50, 50);
    view.defPosition("e1", 201, 451, 50, 50);
    view.defPosition("f1", 251, 451, 50, 50);
    view.defPosition("g1", 301, 451, 50, 50);
    view.defPosition("h1", 351, 451, 50, 50);
    view.defPosition("i1", 401, 451, 50, 50);
    view.defPosition("j1", 451, 451, 50, 50);

    view.addVector(Dagaz.Model.stringToPos("a1"), Dagaz.Model.stringToPos("a5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a1"), Dagaz.Model.stringToPos("e1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a1"), Dagaz.Model.stringToPos("e5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a2"), Dagaz.Model.stringToPos("a5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a2"), Dagaz.Model.stringToPos("e2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a2"), Dagaz.Model.stringToPos("d5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a3"), Dagaz.Model.stringToPos("a5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a3"), Dagaz.Model.stringToPos("e3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a3"), Dagaz.Model.stringToPos("c5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("a5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("e4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("b5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("a7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("a4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("c7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("b4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("a7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("a4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("b7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("c4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("a6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("e7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("b6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a8"), Dagaz.Model.stringToPos("a6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a8"), Dagaz.Model.stringToPos("e8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a8"), Dagaz.Model.stringToPos("c6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a9"), Dagaz.Model.stringToPos("a6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a9"), Dagaz.Model.stringToPos("e9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a9"), Dagaz.Model.stringToPos("d6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a10"), Dagaz.Model.stringToPos("a6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a10"), Dagaz.Model.stringToPos("e10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("a10"), Dagaz.Model.stringToPos("e6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b1"), Dagaz.Model.stringToPos("b5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b1"), Dagaz.Model.stringToPos("e1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b1"), Dagaz.Model.stringToPos("e4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b2"), Dagaz.Model.stringToPos("b5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b2"), Dagaz.Model.stringToPos("e2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b2"), Dagaz.Model.stringToPos("e5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b3"), Dagaz.Model.stringToPos("b5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b3"), Dagaz.Model.stringToPos("e3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b3"), Dagaz.Model.stringToPos("d5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("b5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("e4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("c5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("a5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("e1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("b7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("b4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("a4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("c4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("d7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("b7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("b4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("d4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("a7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("c7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("b6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("e7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("a6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("c6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("e10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b8"), Dagaz.Model.stringToPos("b6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b8"), Dagaz.Model.stringToPos("e8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b8"), Dagaz.Model.stringToPos("d6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b9"), Dagaz.Model.stringToPos("b6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b9"), Dagaz.Model.stringToPos("e9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b9"), Dagaz.Model.stringToPos("e6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("b10"), Dagaz.Model.stringToPos("b6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b10"), Dagaz.Model.stringToPos("e10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("b10"), Dagaz.Model.stringToPos("e7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c1"), Dagaz.Model.stringToPos("c5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c1"), Dagaz.Model.stringToPos("e1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c1"), Dagaz.Model.stringToPos("e3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c2"), Dagaz.Model.stringToPos("c5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c2"), Dagaz.Model.stringToPos("e2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c2"), Dagaz.Model.stringToPos("e4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c3"), Dagaz.Model.stringToPos("c5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c3"), Dagaz.Model.stringToPos("e3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c3"), Dagaz.Model.stringToPos("a5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c3"), Dagaz.Model.stringToPos("e5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c3"), Dagaz.Model.stringToPos("e1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("c5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("e4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("b5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("d5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("e2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("c7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("c4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("b4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("d4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("a7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("g9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("c7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("c4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("a4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("g2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("b7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("d7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("c6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("e7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("b6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("d6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("e9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c8"), Dagaz.Model.stringToPos("c6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c8"), Dagaz.Model.stringToPos("e8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c8"), Dagaz.Model.stringToPos("a6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c8"), Dagaz.Model.stringToPos("e6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c8"), Dagaz.Model.stringToPos("e10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c9"), Dagaz.Model.stringToPos("c6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c9"), Dagaz.Model.stringToPos("e9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c9"), Dagaz.Model.stringToPos("e7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("c10"), Dagaz.Model.stringToPos("c6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c10"), Dagaz.Model.stringToPos("e10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("c10"), Dagaz.Model.stringToPos("e8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("d5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("e1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("e2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("d5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("e2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("a5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("e1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("e3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("d5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("e3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("b5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("e4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("e2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("d5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("e4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("c5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("e5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("e3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("d7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("d4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("c4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("g2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("b7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("g8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("d7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("d4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("b4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("g3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("c7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("g9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("d6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("e7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("c6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("e6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("e8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("d6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("e8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("b6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("e7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("e9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("d6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("e9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("a6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("e8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("e10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("d6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("e10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("e9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("d1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("g1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("d2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("g3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("d2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("g2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("d1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("d3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("g4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("d3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("g3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("d2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("g1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("d4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("i7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("d4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("g4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("d3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("g2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("b7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("h7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("d4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("g3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("c7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("g7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("c4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("g4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("d7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("g8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("d7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("g7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("b4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("h4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("d8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("g9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("d8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("g8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("d7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("i4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("d9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("g10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("d9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("g9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("d8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("g7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("d10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("d10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("g10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("d9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("g8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("d1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("g1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("d3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("g2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("d2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("g2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("d4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("g3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("g1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("d3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("g3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("b7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("g4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("d1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("g2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("d4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("g4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("c7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("i7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("d2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("g3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("d7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("h7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("d3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("g4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("d8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("g7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("d4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("h4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("d7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("g7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("d9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("g8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("c4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("i4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("d8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("g8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("d10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("g9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("b4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("g7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("d9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("g9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("g10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("d7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("g8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("d10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("g10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("d8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("g9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("f1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("g5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("f2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("f2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("g5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("f3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("j5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("f1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("f3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("g5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("f4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("i5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("f2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("f4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("g5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("f5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("h5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("f3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("g7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("g4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("d8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("i7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("d2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("h4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("g7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("g4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("d9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("h7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("d3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("i4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("f7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("g6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("f8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("f6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("h6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("f8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("g6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("f9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("f7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("i6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("f9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("g6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("f10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("f8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("j6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("f10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("g6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("f9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h1"), Dagaz.Model.stringToPos("f1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h1"), Dagaz.Model.stringToPos("h5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h1"), Dagaz.Model.stringToPos("f3"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h2"), Dagaz.Model.stringToPos("f2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h2"), Dagaz.Model.stringToPos("h5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h2"), Dagaz.Model.stringToPos("f4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h3"), Dagaz.Model.stringToPos("f3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h3"), Dagaz.Model.stringToPos("h5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h3"), Dagaz.Model.stringToPos("f5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h3"), Dagaz.Model.stringToPos("j5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h3"), Dagaz.Model.stringToPos("f1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("f4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("h5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("g5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("i5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("f2"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("h7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("h4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("d9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("j7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("g4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("i4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("h7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("h4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("g7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("i7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("d2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("j4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("f7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("h6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("f9"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("g6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("i6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h8"), Dagaz.Model.stringToPos("f8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h8"), Dagaz.Model.stringToPos("h6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h8"), Dagaz.Model.stringToPos("f10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h8"), Dagaz.Model.stringToPos("f6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h8"), Dagaz.Model.stringToPos("j6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h9"), Dagaz.Model.stringToPos("f9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h9"), Dagaz.Model.stringToPos("h6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h9"), Dagaz.Model.stringToPos("f7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("h10"), Dagaz.Model.stringToPos("f10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h10"), Dagaz.Model.stringToPos("h6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("h10"), Dagaz.Model.stringToPos("f8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i1"), Dagaz.Model.stringToPos("f1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i1"), Dagaz.Model.stringToPos("i5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i1"), Dagaz.Model.stringToPos("f4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i2"), Dagaz.Model.stringToPos("f2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i2"), Dagaz.Model.stringToPos("i5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i2"), Dagaz.Model.stringToPos("f5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i3"), Dagaz.Model.stringToPos("f3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i3"), Dagaz.Model.stringToPos("i5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i3"), Dagaz.Model.stringToPos("g5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("f4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("i5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("h5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("j5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("f1"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("i7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("i4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("g7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("h4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("j4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("i7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("i4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("h7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("j7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("g4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("f7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("i6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("f10"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("h6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("j6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i8"), Dagaz.Model.stringToPos("f8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i8"), Dagaz.Model.stringToPos("i6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i8"), Dagaz.Model.stringToPos("g6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i9"), Dagaz.Model.stringToPos("f9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i9"), Dagaz.Model.stringToPos("i6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i9"), Dagaz.Model.stringToPos("f6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("i10"), Dagaz.Model.stringToPos("f10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i10"), Dagaz.Model.stringToPos("i6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("i10"), Dagaz.Model.stringToPos("f7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j1"), Dagaz.Model.stringToPos("f1"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j1"), Dagaz.Model.stringToPos("j5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j1"), Dagaz.Model.stringToPos("f5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j2"), Dagaz.Model.stringToPos("f2"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j2"), Dagaz.Model.stringToPos("j5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j2"), Dagaz.Model.stringToPos("g5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j3"), Dagaz.Model.stringToPos("f3"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j3"), Dagaz.Model.stringToPos("j5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j3"), Dagaz.Model.stringToPos("h5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("f4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("j5"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("i5"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("j7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("j4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("h7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("i4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("j7"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("j4"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("i7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("h4"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("f7"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("j6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("i6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j8"), Dagaz.Model.stringToPos("f8"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j8"), Dagaz.Model.stringToPos("j6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j8"), Dagaz.Model.stringToPos("h8"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j9"), Dagaz.Model.stringToPos("f9"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j9"), Dagaz.Model.stringToPos("j6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j9"), Dagaz.Model.stringToPos("g6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("j10"), Dagaz.Model.stringToPos("f10"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j10"), Dagaz.Model.stringToPos("j6"), 3, 1, 1);
    view.addVector(Dagaz.Model.stringToPos("j10"), Dagaz.Model.stringToPos("f6"), 3, 2, 1);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("a3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("a2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("a1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("b4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("c4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("d4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("b3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("c2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a4"), Dagaz.Model.stringToPos("d1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("a4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("b3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("b2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("b1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("c4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("d4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("a3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("c3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b4"), Dagaz.Model.stringToPos("d2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("c3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("c2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("c1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("a4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("b4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("d4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("b3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("a2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c4"), Dagaz.Model.stringToPos("d3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("d3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("d2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("d1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("a4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("b4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("c4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("c3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("b2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d4"), Dagaz.Model.stringToPos("a1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("d4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("d2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("d1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("a3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("b3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("c3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("c4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("c2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d3"), Dagaz.Model.stringToPos("b1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("d4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("d3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("d1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("a2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("b2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("c2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("c3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("b4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d2"), Dagaz.Model.stringToPos("c1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("d4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("d3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("d2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("a1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("b1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("c1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("c2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("b3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d1"), Dagaz.Model.stringToPos("a4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("a10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("a9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("a8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("b7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("c7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("d7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("b8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("c9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a7"), Dagaz.Model.stringToPos("d10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("b10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("b9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("b8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("a7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("c7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("d7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("a8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("c8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b7"), Dagaz.Model.stringToPos("d9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("c10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("c9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("c8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("a7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("b7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("d7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("b8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("a9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c7"), Dagaz.Model.stringToPos("d8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("d10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("d9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("d8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("a7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("b7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("c7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("c8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("b9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d7"), Dagaz.Model.stringToPos("a10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("d10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("d9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("d7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("a8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("b8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("c8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("c7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("c9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d8"), Dagaz.Model.stringToPos("b10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("d10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("d8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("d7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("a9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("b9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("c9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("c8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("b7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d9"), Dagaz.Model.stringToPos("c10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("d9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("d8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("d7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("a10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("b10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("c10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("c9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("b8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d10"), Dagaz.Model.stringToPos("a7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("g4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("g3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("g2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("h1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("i1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("j1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("h2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("i3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g1"), Dagaz.Model.stringToPos("j4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("g4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("g3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("g1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("h2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("i2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("j2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("h1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("h3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g2"), Dagaz.Model.stringToPos("i4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("g4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("g2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("g1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("h3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("i3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("j3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("h4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("h2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g3"), Dagaz.Model.stringToPos("i1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("g3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("g2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("g1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("h4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("i4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("j4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("h3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("i2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g4"), Dagaz.Model.stringToPos("j1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("h3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("h2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("h1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("g4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("i4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("j4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("g3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("i3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h4"), Dagaz.Model.stringToPos("j2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("i3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("i2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("i1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("g4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("h4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("j4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("h3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("g2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i4"), Dagaz.Model.stringToPos("j3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("j3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("j2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("j1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("g4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("h4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("i4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("i3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("h2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j4"), Dagaz.Model.stringToPos("g1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("g9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("g8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("g7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("h10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("i10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("j10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("h9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("i8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g10"), Dagaz.Model.stringToPos("j7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("g10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("g8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("g7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("h9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("i9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("j9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("h10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("h8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g9"), Dagaz.Model.stringToPos("i7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("g10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("g9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("g7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("h8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("i8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("j8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("h9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("i10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g8"), Dagaz.Model.stringToPos("h7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("g10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("g9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("g8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("h7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("i7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("j7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("h8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("i9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g7"), Dagaz.Model.stringToPos("j10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("h10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("h9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("h8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("g7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("i7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("j7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("g8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("i8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h7"), Dagaz.Model.stringToPos("j9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("i10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("i9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("i8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("g7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("h7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("j7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("h8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("g9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i7"), Dagaz.Model.stringToPos("j8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("j10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("j9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("j8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("g7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("h7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("i7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("i8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("h9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j7"), Dagaz.Model.stringToPos("g10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a5"), Dagaz.Model.stringToPos("b6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("a6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("c6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("b6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("d6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("e7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("f8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("c6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("f7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("e4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("f3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("b5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("a6"), Dagaz.Model.stringToPos("i7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("a5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("c5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("b6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("b5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("d5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("e4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("f3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("c6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("c5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("f4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("e7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("f8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("d6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("f4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("e3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("e7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("h6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("g6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("f7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("e8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("i6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("h6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("j6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("i6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("f7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("e8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("e4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("h5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("g6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("g5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("f4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("e3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("i5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("h6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("h5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("j5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("i6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("i5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("j6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("f9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e10"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("e9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f10"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("f10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("f8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e9"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("e10"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("e8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f9"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("f9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("f7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("g6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("h5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e8"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("e9"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("e7"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("d6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("c5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f8"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("f8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("g5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("d6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("c5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e7"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("e8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("d5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("g6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("h5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f7"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("d5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("c6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("g6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("f8"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e4"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("d6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("g5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("h6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("e3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f4"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("f4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("g5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("h6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("f2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e3"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("e4"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("d5"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("c6"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("e2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f3"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("f3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("f1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e2"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("e3"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("e1"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f2"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("f2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e1"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("e2"), 3, 1, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f1"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e6"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("a6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("b6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("c6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("d6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("g6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("h6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("i6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("j6"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f6"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("e5"), Dagaz.Model.stringToPos("e1"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("a5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("b5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("c5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("d5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("g5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("h5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("i5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("j5"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f10"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f9"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f8"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f7"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f4"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f3"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f2"), 3, 2, 2);
    view.addVector(Dagaz.Model.stringToPos("f5"), Dagaz.Model.stringToPos("f1"), 3, 2, 2);
}
