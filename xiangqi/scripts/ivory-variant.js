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
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");  // 0
    design.addDirection("s");   // 1
    design.addDirection("sw");  // 2
    design.addDirection("e");   // 3
    design.addDirection("w");   // 4
    design.addDirection("ne");  // 5
    design.addDirection("nw");  // 6
    design.addDirection("n");   // 7
    design.addDirection("fn");  // 8
    design.addDirection("fe");  // 9
    design.addDirection("fw");  // 10
    design.addDirection("fs");  // 11
    design.addDirection("fnw"); // 12
    design.addDirection("fne"); // 13
    design.addDirection("fsw"); // 14
    design.addDirection("fse"); // 15

    design.addPlayer("Red", [6, 7, 5, 4, 3, 2, 0, 1, 11, 10, 9, 8, 15, 14, 13, 12]);
    design.addPlayer("Blue", [6, 7, 5, 4, 3, 2, 0, 1, 11, 10, 9, 8, 15, 14, 13, 12]);

    design.addPosition("a10", [10, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 8, 10]);
    design.addPosition("c10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 8, 10]);
    design.addPosition("d10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, 0, 9, 0, 0, 0, 10]);
    design.addPosition("e10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("f10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 0, -1, 9, 0, 0, 8, 0]);
    design.addPosition("g10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 8, 10]);
    design.addPosition("h10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 8, 10]);
    design.addPosition("i10", [0, 9, 8, 0, -1, 0, 0, 0, 0, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("a9", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, 0, 9, -10, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f9", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("h9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, -1, 9, 0, -8, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 0, 0, -8, 0, 0]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 0, -10, 0, 0, 0]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9, 0, 1, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, -1, 0, 0, 0, 0, 0]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, -1, 0, -10, 0, 8, 0]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9, 0, 1, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, -1, 0, -10, 0, 8, 0]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, 0, 9, 0, 0, 0, 10]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, -1, 9, 0, 0, 8, 0]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 0, 0, 0, 8, 0]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 0, 0, 0, 0, 10]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9, -9, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 0, 0, 0, -10, -8, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9, 0, 1, -1, 0, -10, -8, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 1, 0, 0, 0, -8, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 0, -1, 0, -10, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9, 0, 1, -1, 0, -10, -8, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 0, 0, 0, -10, -8, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9, -9, 0, -1, 0, 0, 0, 0, 0]);

    design.addZone("home-zone", 1, [81, 82, 83, 84, 85, 86, 87, 88, 89, 72, 73, 74, 75, 76, 77, 78, 79, 80, 63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 60, 61, 62, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
    design.addZone("home-zone", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// home-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.IN_ZONE,	0);	// home-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.LITERAL,	4);	// Clodhopper
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	4);	// Clodhopper
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("Ninny", 0, 100);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [9], 0);
    design.addMove(0, 0, [10], 0);
    design.addMove(0, 0, [11], 0);
    design.addMove(0, 0, [12], 0);
    design.addMove(0, 0, [13], 0);
    design.addMove(0, 0, [14], 0);
    design.addMove(0, 0, [15], 0);
    design.addMove(0, 1, [8, 7], 0);
    design.addMove(0, 1, [9, 3], 0);
    design.addMove(0, 1, [10, 4], 0);
    design.addMove(0, 1, [11, 1], 0);
    design.addMove(0, 1, [12, 6], 0);
    design.addMove(0, 1, [13, 5], 0);
    design.addMove(0, 1, [14, 2], 0);
    design.addMove(0, 1, [15, 0], 0);

    design.addPiece("Yahoo", 1, 400);
    design.addMove(1, 2, [8, 6], 0);
    design.addMove(1, 2, [8, 5], 0);
    design.addMove(1, 2, [11, 2], 0);
    design.addMove(1, 2, [11, 0], 0);
    design.addMove(1, 2, [10, 6], 0);
    design.addMove(1, 2, [9, 5], 0);
    design.addMove(1, 2, [10, 2], 0);
    design.addMove(1, 2, [9, 0], 0);
    design.addMove(1, 2, [12, 7], 0);
    design.addMove(1, 2, [12, 4], 0);
    design.addMove(1, 2, [13, 7], 0);
    design.addMove(1, 2, [13, 3], 0);
    design.addMove(1, 2, [14, 1], 0);
    design.addMove(1, 2, [14, 4], 0);
    design.addMove(1, 2, [15, 1], 0);
    design.addMove(1, 2, [15, 3], 0);

    design.addPiece("Fuddy-Duddy", 2, 450);
    design.addMove(2, 3, [8, 6, 6], 0);
    design.addMove(2, 3, [8, 5, 5], 0);
    design.addMove(2, 3, [11, 2, 2], 0);
    design.addMove(2, 3, [11, 0, 0], 0);
    design.addMove(2, 3, [10, 6, 6], 0);
    design.addMove(2, 3, [9, 5, 5], 0);
    design.addMove(2, 3, [10, 2, 2], 0);
    design.addMove(2, 3, [9, 0, 0], 0);
    design.addMove(2, 3, [12, 7, 7], 0);
    design.addMove(2, 3, [12, 4, 4], 0);
    design.addMove(2, 3, [13, 7, 7], 0);
    design.addMove(2, 3, [13, 3, 3], 0);
    design.addMove(2, 3, [14, 1, 1], 0);
    design.addMove(2, 3, [14, 4, 4], 0);
    design.addMove(2, 3, [15, 1, 1], 0);
    design.addMove(2, 3, [15, 3, 3], 0);

    design.addPiece("Numskull", 3, 1000);
    design.addMove(3, 4, [8, 7], 0);
    design.addMove(3, 4, [9, 3], 0);
    design.addMove(3, 4, [10, 4], 0);
    design.addMove(3, 4, [11, 1], 0);
    design.addMove(3, 4, [12, 6], 0);
    design.addMove(3, 4, [13, 5], 0);
    design.addMove(3, 4, [14, 2], 0);
    design.addMove(3, 4, [15, 0], 0);

    design.addPiece("Clodhopper", 4, 900);
    design.addMove(4, 5, [8, 7, 7, 7], 0);
    design.addMove(4, 5, [9, 3, 3, 3], 0);
    design.addMove(4, 5, [10, 4, 4, 4], 0);
    design.addMove(4, 5, [11, 1, 1, 1], 0);
    design.addMove(4, 5, [12, 6, 6, 6], 0);
    design.addMove(4, 5, [13, 5, 5, 5], 0);
    design.addMove(4, 5, [14, 2, 2, 2], 0);
    design.addMove(4, 5, [15, 0, 0, 0], 0);

    design.addPiece("Toady", 5, 200);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 0, [9], 0);
    design.addMove(5, 0, [10], 0);
    design.addMove(5, 0, [11], 0);
    design.addMove(5, 0, [12], 0);
    design.addMove(5, 0, [13], 0);
    design.addMove(5, 0, [14], 0);
    design.addMove(5, 0, [15], 0);

    design.addPiece("Brain", 6, 20000);
    design.addMove(6, 0, [8], 0);
    design.addMove(6, 0, [9], 0);
    design.addMove(6, 0, [10], 0);
    design.addMove(6, 0, [11], 0);
    design.addMove(6, 0, [12], 0);
    design.addMove(6, 0, [13], 0);
    design.addMove(6, 0, [14], 0);
    design.addMove(6, 0, [15], 0);

    design.setup("Red", "Ninny", 54);
    design.setup("Red", "Ninny", 56);
    design.setup("Red", "Ninny", 58);
    design.setup("Red", "Ninny", 60);
    design.setup("Red", "Ninny", 62);
    design.setup("Red", "Yahoo", 82);
    design.setup("Red", "Yahoo", 88);
    design.setup("Red", "Fuddy-Duddy", 83);
    design.setup("Red", "Fuddy-Duddy", 87);
    design.setup("Red", "Numskull", 81);
    design.setup("Red", "Numskull", 89);
    design.setup("Red", "Toady", 84);
    design.setup("Red", "Toady", 86);
    design.setup("Red", "Clodhopper", 64);
    design.setup("Red", "Clodhopper", 70);
    design.setup("Red", "Brain", 76);
    design.setup("Blue", "Ninny", 27);
    design.setup("Blue", "Ninny", 29);
    design.setup("Blue", "Ninny", 31);
    design.setup("Blue", "Ninny", 33);
    design.setup("Blue", "Ninny", 35);
    design.setup("Blue", "Yahoo", 1);
    design.setup("Blue", "Yahoo", 7);
    design.setup("Blue", "Fuddy-Duddy", 2);
    design.setup("Blue", "Fuddy-Duddy", 6);
    design.setup("Blue", "Numskull", 0);
    design.setup("Blue", "Numskull", 8);
    design.setup("Blue", "Toady", 3);
    design.setup("Blue", "Toady", 5);
    design.setup("Blue", "Clodhopper", 19);
    design.setup("Blue", "Clodhopper", 25);
    design.setup("Blue", "Brain", 13);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedNinny", "Red Ninny");
    view.defPiece("BlueNinny", "Blue Ninny");
    view.defPiece("RedYahoo", "Red Yahoo");
    view.defPiece("BlueYahoo", "Blue Yahoo");
    view.defPiece("RedFuddy-Duddy", "Red Fuddy-Duddy");
    view.defPiece("BlueFuddy-Duddy", "Blue Fuddy-Duddy");
    view.defPiece("RedNumskull", "Red Numskull");
    view.defPiece("BlueNumskull", "Blue Numskull");
    view.defPiece("RedClodhopper", "Red Clodhopper");
    view.defPiece("BlueClodhopper", "Blue Clodhopper");
    view.defPiece("RedToady", "Red Toady");
    view.defPiece("BlueToady", "Blue Toady");
    view.defPiece("RedBrain", "Red Brain");
    view.defPiece("BlueBrain", "Blue Brain");
 
    view.defPosition("a10", 2, 2, 59, 59);
    view.defPosition("b10", 62, 2, 59, 59);
    view.defPosition("c10", 122, 2, 59, 59);
    view.defPosition("d10", 182, 2, 59, 59);
    view.defPosition("e10", 242, 2, 59, 59);
    view.defPosition("f10", 302, 2, 59, 59);
    view.defPosition("g10", 362, 2, 59, 59);
    view.defPosition("h10", 422, 2, 59, 59);
    view.defPosition("i10", 482, 2, 59, 59);
    view.defPosition("a9", 2, 62, 59, 59);
    view.defPosition("b9", 62, 62, 59, 59);
    view.defPosition("c9", 122, 62, 59, 59);
    view.defPosition("d9", 182, 62, 59, 59);
    view.defPosition("e9", 242, 62, 59, 59);
    view.defPosition("f9", 302, 62, 59, 59);
    view.defPosition("g9", 362, 62, 59, 59);
    view.defPosition("h9", 422, 62, 59, 59);
    view.defPosition("i9", 482, 62, 59, 59);
    view.defPosition("a8", 2, 122, 59, 59);
    view.defPosition("b8", 62, 122, 59, 59);
    view.defPosition("c8", 122, 122, 59, 59);
    view.defPosition("d8", 182, 122, 59, 59);
    view.defPosition("e8", 242, 122, 59, 59);
    view.defPosition("f8", 302, 122, 59, 59);
    view.defPosition("g8", 362, 122, 59, 59);
    view.defPosition("h8", 422, 122, 59, 59);
    view.defPosition("i8", 482, 122, 59, 59);
    view.defPosition("a7", 2, 182, 59, 59);
    view.defPosition("b7", 62, 182, 59, 59);
    view.defPosition("c7", 122, 182, 59, 59);
    view.defPosition("d7", 182, 182, 59, 59);
    view.defPosition("e7", 242, 182, 59, 59);
    view.defPosition("f7", 302, 182, 59, 59);
    view.defPosition("g7", 362, 182, 59, 59);
    view.defPosition("h7", 422, 182, 59, 59);
    view.defPosition("i7", 482, 182, 59, 59);
    view.defPosition("a6", 2, 242, 59, 59);
    view.defPosition("b6", 62, 242, 59, 59);
    view.defPosition("c6", 122, 242, 59, 59);
    view.defPosition("d6", 182, 242, 59, 59);
    view.defPosition("e6", 242, 242, 59, 59);
    view.defPosition("f6", 302, 242, 59, 59);
    view.defPosition("g6", 362, 242, 59, 59);
    view.defPosition("h6", 422, 242, 59, 59);
    view.defPosition("i6", 482, 242, 59, 59);
    view.defPosition("a5", 2, 302, 59, 59);
    view.defPosition("b5", 62, 302, 59, 59);
    view.defPosition("c5", 122, 302, 59, 59);
    view.defPosition("d5", 182, 302, 59, 59);
    view.defPosition("e5", 242, 302, 59, 59);
    view.defPosition("f5", 302, 302, 59, 59);
    view.defPosition("g5", 362, 302, 59, 59);
    view.defPosition("h5", 422, 302, 59, 59);
    view.defPosition("i5", 482, 302, 59, 59);
    view.defPosition("a4", 2, 362, 59, 59);
    view.defPosition("b4", 62, 362, 59, 59);
    view.defPosition("c4", 122, 362, 59, 59);
    view.defPosition("d4", 182, 362, 59, 59);
    view.defPosition("e4", 242, 362, 59, 59);
    view.defPosition("f4", 302, 362, 59, 59);
    view.defPosition("g4", 362, 362, 59, 59);
    view.defPosition("h4", 422, 362, 59, 59);
    view.defPosition("i4", 482, 362, 59, 59);
    view.defPosition("a3", 2, 422, 59, 59);
    view.defPosition("b3", 62, 422, 59, 59);
    view.defPosition("c3", 122, 422, 59, 59);
    view.defPosition("d3", 182, 422, 59, 59);
    view.defPosition("e3", 242, 422, 59, 59);
    view.defPosition("f3", 302, 422, 59, 59);
    view.defPosition("g3", 362, 422, 59, 59);
    view.defPosition("h3", 422, 422, 59, 59);
    view.defPosition("i3", 482, 422, 59, 59);
    view.defPosition("a2", 2, 482, 59, 59);
    view.defPosition("b2", 62, 482, 59, 59);
    view.defPosition("c2", 122, 482, 59, 59);
    view.defPosition("d2", 182, 482, 59, 59);
    view.defPosition("e2", 242, 482, 59, 59);
    view.defPosition("f2", 302, 482, 59, 59);
    view.defPosition("g2", 362, 482, 59, 59);
    view.defPosition("h2", 422, 482, 59, 59);
    view.defPosition("i2", 482, 482, 59, 59);
    view.defPosition("a1", 2, 542, 59, 59);
    view.defPosition("b1", 62, 542, 59, 59);
    view.defPosition("c1", 122, 542, 59, 59);
    view.defPosition("d1", 182, 542, 59, 59);
    view.defPosition("e1", 242, 542, 59, 59);
    view.defPosition("f1", 302, 542, 59, 59);
    view.defPosition("g1", 362, 542, 59, 59);
    view.defPosition("h1", 422, 542, 59, 59);
    view.defPosition("i1", 482, 542, 59, 59);
}
