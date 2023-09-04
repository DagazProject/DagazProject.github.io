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
    design.checkVersion("show-blink", "true");
    design.checkVersion("advisor-wait", "15");
    design.checkVersion("ordo-extension", "true");
    design.checkVersion("ordo-goal", "true");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [0, 1, 10, 0, 0, 11, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("c8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("d8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("e8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("f8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("g8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("h8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("i8", [-1, 1, 10, 0, 0, 11, 9, 0]);
    design.addPosition("j8", [-1, 0, 10, 0, 0, 0, 9, 0]);
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

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    design.addZone("last-rank", 2, [70, 71, 72, 73, 74, 75, 76, 77, 78, 79]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-7);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	13);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-14);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	18);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-19);
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	23);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-24);
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	6);	// $7
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	7);	// $8
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	28);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-29);
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	7);	// $8
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	8);	// $9
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	9);	// $10
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	33);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	5);	// $6
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	6);	// $7
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-34);
    design.addCommand(6, ZRF.PARAM,	7);	// $8
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	8);	// $9
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	9);	// $10
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	10);	// $11
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	11);	// $12
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	38);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	5);	// $6
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	6);	// $7
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	7);	// $8
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-39);
    design.addCommand(7, ZRF.PARAM,	8);	// $9
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	9);	// $10
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	10);	// $11
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	11);	// $12
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	12);	// $13
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	13);	// $14
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	43);
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	6);	// $7
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	7);	// $8
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	8);	// $9
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-44);
    design.addCommand(8, ZRF.PARAM,	9);	// $10
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	10);	// $11
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	11);	// $12
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	12);	// $13
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	13);	// $14
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	14);	// $15
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	15);	// $16
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.FUNCTION,	6);	// mark
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	7);	// back
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	3);	// $4
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	4);	// $5
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.FUNCTION,	6);	// mark
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	2);	// $3
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	7);	// back
    design.addCommand(11, ZRF.PARAM,	3);	// $4
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	4);	// $5
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	5);	// $6
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	6);	// $7
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.FUNCTION,	6);	// mark
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	2);	// $3
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	3);	// $4
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	7);	// back
    design.addCommand(12, ZRF.PARAM,	4);	// $5
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	5);	// $6
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	6);	// $7
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	7);	// $8
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	8);	// $9
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.FUNCTION,	6);	// mark
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	2);	// $3
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	3);	// $4
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	4);	// $5
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	7);	// back
    design.addCommand(13, ZRF.PARAM,	5);	// $6
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	6);	// $7
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	7);	// $8
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	8);	// $9
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	9);	// $10
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	10);	// $11
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.FUNCTION,	6);	// mark
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	7);	// back
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	6);	// mark
    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	2);	// $3
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	7);	// back
    design.addCommand(14, ZRF.PARAM,	3);	// $4
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	4);	// $5
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.FUNCTION,	6);	// mark
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	7);	// back
    design.addCommand(15, ZRF.PARAM,	2);	// $3
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	6);	// mark
    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	3);	// $4
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	4);	// $5
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	7);	// back
    design.addCommand(15, ZRF.PARAM,	5);	// $6
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	6);	// $7
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	7);	// $8
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.FUNCTION,	6);	// mark
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	1);	// $2
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	2);	// $3
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	7);	// back
    design.addCommand(16, ZRF.PARAM,	3);	// $4
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	6);	// mark
    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	4);	// $5
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	5);	// $6
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	6);	// $7
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	7);	// back
    design.addCommand(16, ZRF.PARAM,	7);	// $8
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	8);	// $9
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	9);	// $10
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	10);	// $11
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.FUNCTION,	6);	// mark
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	1);	// $2
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	2);	// $3
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	3);	// $4
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	7);	// back
    design.addCommand(17, ZRF.PARAM,	4);	// $5
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	6);	// mark
    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	5);	// $6
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	6);	// $7
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	7);	// $8
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	8);	// $9
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	7);	// back
    design.addCommand(17, ZRF.PARAM,	9);	// $10
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	10);	// $11
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	11);	// $12
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	12);	// $13
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	13);	// $14
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.FUNCTION,	6);	// mark
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	1);	// $2
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	2);	// $3
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	3);	// $4
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	4);	// $5
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	7);	// back
    design.addCommand(18, ZRF.PARAM,	5);	// $6
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	6);	// mark
    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	6);	// $7
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	7);	// $8
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	8);	// $9
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	9);	// $10
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	10);	// $11
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	7);	// back
    design.addCommand(18, ZRF.PARAM,	11);	// $12
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	12);	// $13
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	13);	// $14
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	14);	// $15
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	15);	// $16
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	16);	// $17
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.FUNCTION,	6);	// mark
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	7);	// back
    design.addCommand(19, ZRF.PARAM,	1);	// $2
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	6);	// mark
    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	2);	// $3
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	7);	// back
    design.addCommand(19, ZRF.PARAM,	3);	// $4
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	6);	// mark
    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	4);	// $5
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	7);	// back
    design.addCommand(19, ZRF.PARAM,	5);	// $6
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	6);	// $7
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.FUNCTION,	6);	// mark
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PARAM,	1);	// $2
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	7);	// back
    design.addCommand(20, ZRF.PARAM,	2);	// $3
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	6);	// mark
    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	3);	// $4
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PARAM,	4);	// $5
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	7);	// back
    design.addCommand(20, ZRF.PARAM,	5);	// $6
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	6);	// mark
    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	6);	// $7
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PARAM,	7);	// $8
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	7);	// back
    design.addCommand(20, ZRF.PARAM,	8);	// $9
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	9);	// $10
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PARAM,	10);	// $11
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.FUNCTION,	6);	// mark
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	1);	// $2
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	2);	// $3
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	7);	// back
    design.addCommand(21, ZRF.PARAM,	3);	// $4
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	6);	// mark
    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	4);	// $5
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	5);	// $6
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	6);	// $7
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	7);	// back
    design.addCommand(21, ZRF.PARAM,	7);	// $8
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	6);	// mark
    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	8);	// $9
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	9);	// $10
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	10);	// $11
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	7);	// back
    design.addCommand(21, ZRF.PARAM,	11);	// $12
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	12);	// $13
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	13);	// $14
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PARAM,	14);	// $15
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.FUNCTION,	6);	// mark
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	1);	// $2
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	2);	// $3
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	3);	// $4
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	7);	// back
    design.addCommand(22, ZRF.PARAM,	4);	// $5
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	6);	// mark
    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	5);	// $6
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	6);	// $7
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	7);	// $8
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	8);	// $9
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	7);	// back
    design.addCommand(22, ZRF.PARAM,	9);	// $10
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	6);	// mark
    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	10);	// $11
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	11);	// $12
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	12);	// $13
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	13);	// $14
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	7);	// back
    design.addCommand(22, ZRF.PARAM,	14);	// $15
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	15);	// $16
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	16);	// $17
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	17);	// $18
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PARAM,	18);	// $19
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.FUNCTION,	6);	// mark
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	1);	// $2
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	2);	// $3
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	3);	// $4
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	4);	// $5
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	7);	// back
    design.addCommand(23, ZRF.PARAM,	5);	// $6
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	6);	// mark
    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.PARAM,	6);	// $7
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	7);	// $8
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	8);	// $9
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	9);	// $10
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	10);	// $11
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	7);	// back
    design.addCommand(23, ZRF.PARAM,	11);	// $12
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	6);	// mark
    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.PARAM,	12);	// $13
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	13);	// $14
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	14);	// $15
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	15);	// $16
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	16);	// $17
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	7);	// back
    design.addCommand(23, ZRF.PARAM,	17);	// $18
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.PARAM,	18);	// $19
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	19);	// $20
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	20);	// $21
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	21);	// $22
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PARAM,	22);	// $23
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end

    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.FUNCTION,	6);	// mark
    design.addCommand(24, ZRF.PARAM,	0);	// $1
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	7);	// back
    design.addCommand(24, ZRF.PARAM,	1);	// $2
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	6);	// mark
    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	2);	// $3
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	7);	// back
    design.addCommand(24, ZRF.PARAM,	3);	// $4
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	6);	// mark
    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	4);	// $5
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	7);	// back
    design.addCommand(24, ZRF.PARAM,	5);	// $6
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	6);	// mark
    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	6);	// $7
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	7);	// back
    design.addCommand(24, ZRF.PARAM,	7);	// $8
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	8);	// $9
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.FUNCTION,	6);	// mark
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PARAM,	1);	// $2
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	7);	// back
    design.addCommand(25, ZRF.PARAM,	2);	// $3
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	6);	// mark
    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	3);	// $4
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PARAM,	4);	// $5
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	7);	// back
    design.addCommand(25, ZRF.PARAM,	5);	// $6
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	6);	// mark
    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	6);	// $7
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PARAM,	7);	// $8
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	7);	// back
    design.addCommand(25, ZRF.PARAM,	8);	// $9
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	6);	// mark
    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	9);	// $10
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PARAM,	10);	// $11
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	7);	// back
    design.addCommand(25, ZRF.PARAM,	11);	// $12
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	12);	// $13
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PARAM,	13);	// $14
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.FUNCTION,	6);	// mark
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	1);	// $2
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	2);	// $3
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	7);	// back
    design.addCommand(26, ZRF.PARAM,	3);	// $4
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	6);	// mark
    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	4);	// $5
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	5);	// $6
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	6);	// $7
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	7);	// back
    design.addCommand(26, ZRF.PARAM,	7);	// $8
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	6);	// mark
    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	8);	// $9
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	9);	// $10
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	10);	// $11
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	7);	// back
    design.addCommand(26, ZRF.PARAM,	11);	// $12
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	6);	// mark
    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	12);	// $13
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	13);	// $14
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	14);	// $15
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	7);	// back
    design.addCommand(26, ZRF.PARAM,	15);	// $16
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	16);	// $17
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	17);	// $18
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PARAM,	18);	// $19
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.FUNCTION,	6);	// mark
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	1);	// $2
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	2);	// $3
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	3);	// $4
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	7);	// back
    design.addCommand(27, ZRF.PARAM,	4);	// $5
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	6);	// mark
    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	5);	// $6
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	6);	// $7
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	7);	// $8
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	8);	// $9
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	7);	// back
    design.addCommand(27, ZRF.PARAM,	9);	// $10
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	6);	// mark
    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	10);	// $11
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	11);	// $12
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	12);	// $13
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	13);	// $14
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	7);	// back
    design.addCommand(27, ZRF.PARAM,	14);	// $15
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	6);	// mark
    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	15);	// $16
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	16);	// $17
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	17);	// $18
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	18);	// $19
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	7);	// back
    design.addCommand(27, ZRF.PARAM,	19);	// $20
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	20);	// $21
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	21);	// $22
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	22);	// $23
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PARAM,	23);	// $24
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.FUNCTION,	6);	// mark
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	1);	// $2
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	2);	// $3
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	3);	// $4
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	4);	// $5
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	7);	// back
    design.addCommand(28, ZRF.PARAM,	5);	// $6
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	6);	// mark
    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	6);	// $7
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	7);	// $8
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	8);	// $9
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	9);	// $10
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	10);	// $11
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	7);	// back
    design.addCommand(28, ZRF.PARAM,	11);	// $12
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	6);	// mark
    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	12);	// $13
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	13);	// $14
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	14);	// $15
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	15);	// $16
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	16);	// $17
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	7);	// back
    design.addCommand(28, ZRF.PARAM,	17);	// $18
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	6);	// mark
    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	18);	// $19
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	19);	// $20
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	20);	// $21
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	21);	// $22
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	22);	// $23
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	7);	// back
    design.addCommand(28, ZRF.PARAM,	23);	// $24
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	24);	// $25
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	25);	// $26
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	26);	// $27
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	27);	// $28
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PARAM,	28);	// $29
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.FUNCTION,	6);	// mark
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	7);	// back
    design.addCommand(29, ZRF.PARAM,	1);	// $2
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	6);	// mark
    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	2);	// $3
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	7);	// back
    design.addCommand(29, ZRF.PARAM,	3);	// $4
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	6);	// mark
    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	4);	// $5
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	7);	// back
    design.addCommand(29, ZRF.PARAM,	5);	// $6
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	6);	// mark
    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	6);	// $7
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	7);	// back
    design.addCommand(29, ZRF.PARAM,	7);	// $8
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	6);	// mark
    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	8);	// $9
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	7);	// back
    design.addCommand(29, ZRF.PARAM,	9);	// $10
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	10);	// $11
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.FUNCTION,	6);	// mark
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	1);	// $2
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	7);	// back
    design.addCommand(30, ZRF.PARAM,	2);	// $3
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	6);	// mark
    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	3);	// $4
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	4);	// $5
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	7);	// back
    design.addCommand(30, ZRF.PARAM,	5);	// $6
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	6);	// mark
    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	6);	// $7
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	7);	// $8
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	7);	// back
    design.addCommand(30, ZRF.PARAM,	8);	// $9
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	6);	// mark
    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	9);	// $10
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	10);	// $11
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	7);	// back
    design.addCommand(30, ZRF.PARAM,	11);	// $12
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	6);	// mark
    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	12);	// $13
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	13);	// $14
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	7);	// back
    design.addCommand(30, ZRF.PARAM,	14);	// $15
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	15);	// $16
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PARAM,	16);	// $17
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.FUNCTION,	6);	// mark
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	1);	// $2
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	2);	// $3
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	7);	// back
    design.addCommand(31, ZRF.PARAM,	3);	// $4
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	6);	// mark
    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	4);	// $5
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	5);	// $6
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	6);	// $7
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	7);	// back
    design.addCommand(31, ZRF.PARAM,	7);	// $8
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	6);	// mark
    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	8);	// $9
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	9);	// $10
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	10);	// $11
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	7);	// back
    design.addCommand(31, ZRF.PARAM,	11);	// $12
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	6);	// mark
    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	12);	// $13
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	13);	// $14
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	14);	// $15
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	7);	// back
    design.addCommand(31, ZRF.PARAM,	15);	// $16
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	6);	// mark
    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	16);	// $17
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	17);	// $18
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	18);	// $19
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	7);	// back
    design.addCommand(31, ZRF.PARAM,	19);	// $20
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	20);	// $21
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	21);	// $22
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PARAM,	22);	// $23
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end

    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.FUNCTION,	6);	// mark
    design.addCommand(32, ZRF.PARAM,	0);	// $1
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	1);	// $2
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	2);	// $3
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	3);	// $4
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	7);	// back
    design.addCommand(32, ZRF.PARAM,	4);	// $5
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	6);	// mark
    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	5);	// $6
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	6);	// $7
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	7);	// $8
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	8);	// $9
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	7);	// back
    design.addCommand(32, ZRF.PARAM,	9);	// $10
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	6);	// mark
    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	10);	// $11
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	11);	// $12
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	12);	// $13
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	13);	// $14
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	7);	// back
    design.addCommand(32, ZRF.PARAM,	14);	// $15
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	6);	// mark
    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	15);	// $16
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	16);	// $17
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	17);	// $18
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	18);	// $19
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	7);	// back
    design.addCommand(32, ZRF.PARAM,	19);	// $20
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	6);	// mark
    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	20);	// $21
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	21);	// $22
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	22);	// $23
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	23);	// $24
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	7);	// back
    design.addCommand(32, ZRF.PARAM,	24);	// $25
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	25);	// $26
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	26);	// $27
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	27);	// $28
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PARAM,	28);	// $29
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end

    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.FUNCTION,	6);	// mark
    design.addCommand(33, ZRF.PARAM,	0);	// $1
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	1);	// $2
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	2);	// $3
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	3);	// $4
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	4);	// $5
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	7);	// back
    design.addCommand(33, ZRF.PARAM,	5);	// $6
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	6);	// mark
    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	6);	// $7
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	7);	// $8
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	8);	// $9
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	9);	// $10
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	10);	// $11
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	7);	// back
    design.addCommand(33, ZRF.PARAM,	11);	// $12
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	6);	// mark
    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	12);	// $13
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	13);	// $14
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	14);	// $15
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	15);	// $16
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	16);	// $17
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	7);	// back
    design.addCommand(33, ZRF.PARAM,	17);	// $18
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	6);	// mark
    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	18);	// $19
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	19);	// $20
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	20);	// $21
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	21);	// $22
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	22);	// $23
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	7);	// back
    design.addCommand(33, ZRF.PARAM,	23);	// $24
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	6);	// mark
    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	24);	// $25
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	25);	// $26
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	26);	// $27
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	27);	// $28
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	28);	// $29
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	7);	// back
    design.addCommand(33, ZRF.PARAM,	29);	// $30
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	30);	// $31
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	31);	// $32
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	32);	// $33
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	33);	// $34
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PARAM,	34);	// $35
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [4, 4], 2);
    design.addMove(0, 0, [7, 7], 2);
    design.addMove(0, 0, [2, 2], 1);
    design.addMove(0, 0, [5, 5], 1);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [6, 6], 1);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [3, 3], 2);
    design.addMove(0, 1, [4, 4], 2);
    design.addMove(0, 1, [7, 7], 2);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [6, 6], 1);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [3, 3], 2);
    design.addMove(0, 2, [4, 4, 4, 4], 2);
    design.addMove(0, 2, [7, 7, 7, 7], 2);
    design.addMove(0, 2, [2, 2, 2, 2], 1);
    design.addMove(0, 2, [5, 5, 5, 5], 1);
    design.addMove(0, 2, [0, 0, 0, 0], 0);
    design.addMove(0, 2, [6, 6, 6, 6], 1);
    design.addMove(0, 2, [1, 1, 1, 1], 0);
    design.addMove(0, 2, [3, 3, 3, 3], 2);
    design.addMove(0, 3, [4, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 3, [7, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 3, [2, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 3, [5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 3, [0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 3, [6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 3, [1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 3, [3, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 4, [4, 4, 4, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 4, [7, 7, 7, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 4, [2, 2, 2, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 4, [5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 4, [0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 4, [6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 4, [1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 4, [3, 3, 3, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 5, [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 5, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 5, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 5, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 5, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 5, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 5, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 6, [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 6, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 6, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 6, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 6, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 6, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 6, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 6, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 7, [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 7, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 7, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 7, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 7, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 7, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 7, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 7, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 8, [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 8, [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 8, [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 8, [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 8, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 8, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 8, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 8, [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 9, [4, 0, 4], 2);
    design.addMove(0, 9, [2, 0, 2], 1);
    design.addMove(0, 9, [7, 0, 7], 2);
    design.addMove(0, 9, [3, 0, 3], 2);
    design.addMove(0, 9, [6, 0, 6], 1);
    design.addMove(0, 9, [5, 0, 5], 1);
    design.addMove(0, 10, [4, 4, 0, 4, 4], 2);
    design.addMove(0, 10, [2, 2, 0, 2, 2], 1);
    design.addMove(0, 10, [7, 7, 0, 7, 7], 2);
    design.addMove(0, 10, [3, 3, 0, 3, 3], 2);
    design.addMove(0, 10, [6, 6, 0, 6, 6], 1);
    design.addMove(0, 10, [5, 5, 0, 5, 5], 1);
    design.addMove(0, 11, [4, 4, 4, 0, 4, 4, 4], 2);
    design.addMove(0, 11, [2, 2, 2, 0, 2, 2, 2], 1);
    design.addMove(0, 11, [7, 7, 7, 0, 7, 7, 7], 2);
    design.addMove(0, 11, [3, 3, 3, 0, 3, 3, 3], 2);
    design.addMove(0, 11, [6, 6, 6, 0, 6, 6, 6], 1);
    design.addMove(0, 11, [5, 5, 5, 0, 5, 5, 5], 1);
    design.addMove(0, 12, [4, 4, 4, 4, 0, 4, 4, 4, 4], 2);
    design.addMove(0, 12, [2, 2, 2, 2, 0, 2, 2, 2, 2], 1);
    design.addMove(0, 12, [7, 7, 7, 7, 0, 7, 7, 7, 7], 2);
    design.addMove(0, 12, [3, 3, 3, 3, 0, 3, 3, 3, 3], 2);
    design.addMove(0, 12, [6, 6, 6, 6, 0, 6, 6, 6, 6], 1);
    design.addMove(0, 12, [5, 5, 5, 5, 0, 5, 5, 5, 5], 1);
    design.addMove(0, 13, [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 13, [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 13, [7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 13, [3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 13, [6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 13, [5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 14, [4, 0, 4, 0, 4], 2);
    design.addMove(0, 14, [2, 0, 2, 0, 2], 1);
    design.addMove(0, 14, [7, 0, 7, 0, 7], 2);
    design.addMove(0, 14, [3, 0, 3, 0, 3], 2);
    design.addMove(0, 14, [6, 0, 6, 0, 6], 1);
    design.addMove(0, 14, [5, 0, 5, 0, 5], 1);
    design.addMove(0, 15, [4, 4, 0, 4, 4, 0, 4, 4], 2);
    design.addMove(0, 15, [2, 2, 0, 2, 2, 0, 2, 2], 1);
    design.addMove(0, 15, [7, 7, 0, 7, 7, 0, 7, 7], 2);
    design.addMove(0, 15, [3, 3, 0, 3, 3, 0, 3, 3], 2);
    design.addMove(0, 15, [6, 6, 0, 6, 6, 0, 6, 6], 1);
    design.addMove(0, 15, [5, 5, 0, 5, 5, 0, 5, 5], 1);
    design.addMove(0, 16, [4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4], 2);
    design.addMove(0, 16, [2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2], 1);
    design.addMove(0, 16, [7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7], 2);
    design.addMove(0, 16, [3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3], 2);
    design.addMove(0, 16, [6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6], 1);
    design.addMove(0, 16, [5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5], 1);
    design.addMove(0, 17, [4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4], 2);
    design.addMove(0, 17, [2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2], 1);
    design.addMove(0, 17, [7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7], 2);
    design.addMove(0, 17, [3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3], 2);
    design.addMove(0, 17, [6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6], 1);
    design.addMove(0, 17, [5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5], 1);
    design.addMove(0, 18, [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 18, [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 18, [7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 18, [3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 18, [6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 18, [5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 19, [4, 0, 4, 0, 4, 0, 4], 2);
    design.addMove(0, 19, [2, 0, 2, 0, 2, 0, 2], 1);
    design.addMove(0, 19, [7, 0, 7, 0, 7, 0, 7], 2);
    design.addMove(0, 19, [3, 0, 3, 0, 3, 0, 3], 2);
    design.addMove(0, 19, [6, 0, 6, 0, 6, 0, 6], 1);
    design.addMove(0, 19, [5, 0, 5, 0, 5, 0, 5], 1);
    design.addMove(0, 20, [4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4], 2);
    design.addMove(0, 20, [2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2], 1);
    design.addMove(0, 20, [7, 7, 0, 7, 7, 0, 7, 7, 0, 7, 7], 2);
    design.addMove(0, 20, [3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3], 2);
    design.addMove(0, 20, [6, 6, 0, 6, 6, 0, 6, 6, 0, 6, 6], 1);
    design.addMove(0, 20, [5, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5], 1);
    design.addMove(0, 21, [4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4], 2);
    design.addMove(0, 21, [2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2], 1);
    design.addMove(0, 21, [7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7], 2);
    design.addMove(0, 21, [3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3], 2);
    design.addMove(0, 21, [6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6], 1);
    design.addMove(0, 21, [5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5], 1);
    design.addMove(0, 22, [4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4], 2);
    design.addMove(0, 22, [2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2], 1);
    design.addMove(0, 22, [7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7], 2);
    design.addMove(0, 22, [3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3], 2);
    design.addMove(0, 22, [6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6], 1);
    design.addMove(0, 22, [5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5], 1);
    design.addMove(0, 23, [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 23, [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 23, [7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 23, [3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 23, [6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 23, [5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 24, [4, 0, 4, 0, 4, 0, 4, 0, 4], 2);
    design.addMove(0, 24, [2, 0, 2, 0, 2, 0, 2, 0, 2], 1);
    design.addMove(0, 24, [7, 0, 7, 0, 7, 0, 7, 0, 7], 2);
    design.addMove(0, 24, [3, 0, 3, 0, 3, 0, 3, 0, 3], 2);
    design.addMove(0, 24, [6, 0, 6, 0, 6, 0, 6, 0, 6], 1);
    design.addMove(0, 24, [5, 0, 5, 0, 5, 0, 5, 0, 5], 1);
    design.addMove(0, 25, [4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4], 2);
    design.addMove(0, 25, [2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2], 1);
    design.addMove(0, 25, [7, 7, 0, 7, 7, 0, 7, 7, 0, 7, 7, 0, 7, 7], 2);
    design.addMove(0, 25, [3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3], 2);
    design.addMove(0, 25, [6, 6, 0, 6, 6, 0, 6, 6, 0, 6, 6, 0, 6, 6], 1);
    design.addMove(0, 25, [5, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5], 1);
    design.addMove(0, 26, [4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4], 2);
    design.addMove(0, 26, [2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2], 1);
    design.addMove(0, 26, [7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7], 2);
    design.addMove(0, 26, [3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3], 2);
    design.addMove(0, 26, [6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6], 1);
    design.addMove(0, 26, [5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5], 1);
    design.addMove(0, 27, [4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4], 2);
    design.addMove(0, 27, [2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2], 1);
    design.addMove(0, 27, [7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7], 2);
    design.addMove(0, 27, [3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3], 2);
    design.addMove(0, 27, [6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6], 1);
    design.addMove(0, 27, [5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5], 1);
    design.addMove(0, 28, [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 28, [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 28, [7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 28, [3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 28, [6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 28, [5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 29, [4, 0, 4, 0, 4, 0, 4, 0, 4, 0, 4], 2);
    design.addMove(0, 29, [2, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2], 1);
    design.addMove(0, 29, [7, 0, 7, 0, 7, 0, 7, 0, 7, 0, 7], 2);
    design.addMove(0, 29, [3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3], 2);
    design.addMove(0, 29, [6, 0, 6, 0, 6, 0, 6, 0, 6, 0, 6], 1);
    design.addMove(0, 29, [5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5], 1);
    design.addMove(0, 30, [4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4, 0, 4, 4], 2);
    design.addMove(0, 30, [2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2, 0, 2, 2], 1);
    design.addMove(0, 30, [7, 7, 0, 7, 7, 0, 7, 7, 0, 7, 7, 0, 7, 7, 0, 7, 7], 2);
    design.addMove(0, 30, [3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3], 2);
    design.addMove(0, 30, [6, 6, 0, 6, 6, 0, 6, 6, 0, 6, 6, 0, 6, 6, 0, 6, 6], 1);
    design.addMove(0, 30, [5, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5], 1);
    design.addMove(0, 31, [4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4, 0, 4, 4, 4], 2);
    design.addMove(0, 31, [2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2], 1);
    design.addMove(0, 31, [7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7, 0, 7, 7, 7], 2);
    design.addMove(0, 31, [3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3, 0, 3, 3, 3], 2);
    design.addMove(0, 31, [6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6, 0, 6, 6, 6], 1);
    design.addMove(0, 31, [5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5], 1);
    design.addMove(0, 32, [4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4, 0, 4, 4, 4, 4], 2);
    design.addMove(0, 32, [2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2], 1);
    design.addMove(0, 32, [7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7, 0, 7, 7, 7, 7], 2);
    design.addMove(0, 32, [3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3], 2);
    design.addMove(0, 32, [6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6, 0, 6, 6, 6, 6], 1);
    design.addMove(0, 32, [5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 5, 5, 5], 1);
    design.addMove(0, 33, [4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 33, [2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 33, [7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7, 0, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 33, [3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 33, [6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6, 0, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 33, [5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 9, [0, 4, 0], 0);
    design.addMove(0, 9, [1, 4, 1], 0);
    design.addMove(0, 9, [7, 4, 7], 2);
    design.addMove(0, 9, [3, 4, 3], 2);
    design.addMove(0, 9, [6, 4, 6], 1);
    design.addMove(0, 9, [5, 4, 5], 1);
    design.addMove(0, 10, [0, 0, 4, 0, 0], 0);
    design.addMove(0, 10, [1, 1, 4, 1, 1], 0);
    design.addMove(0, 10, [7, 7, 4, 7, 7], 2);
    design.addMove(0, 10, [3, 3, 4, 3, 3], 2);
    design.addMove(0, 10, [6, 6, 4, 6, 6], 1);
    design.addMove(0, 10, [5, 5, 4, 5, 5], 1);
    design.addMove(0, 11, [0, 0, 0, 4, 0, 0, 0], 0);
    design.addMove(0, 11, [1, 1, 1, 4, 1, 1, 1], 0);
    design.addMove(0, 11, [7, 7, 7, 4, 7, 7, 7], 2);
    design.addMove(0, 11, [3, 3, 3, 4, 3, 3, 3], 2);
    design.addMove(0, 11, [6, 6, 6, 4, 6, 6, 6], 1);
    design.addMove(0, 11, [5, 5, 5, 4, 5, 5, 5], 1);
    design.addMove(0, 12, [0, 0, 0, 0, 4, 0, 0, 0, 0], 0);
    design.addMove(0, 12, [1, 1, 1, 1, 4, 1, 1, 1, 1], 0);
    design.addMove(0, 12, [7, 7, 7, 7, 4, 7, 7, 7, 7], 2);
    design.addMove(0, 12, [3, 3, 3, 3, 4, 3, 3, 3, 3], 2);
    design.addMove(0, 12, [6, 6, 6, 6, 4, 6, 6, 6, 6], 1);
    design.addMove(0, 12, [5, 5, 5, 5, 4, 5, 5, 5, 5], 1);
    design.addMove(0, 13, [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 13, [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 13, [7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 13, [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 13, [6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 13, [5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 14, [0, 4, 0, 4, 0], 0);
    design.addMove(0, 14, [1, 4, 1, 4, 1], 0);
    design.addMove(0, 14, [7, 4, 7, 4, 7], 2);
    design.addMove(0, 14, [3, 4, 3, 4, 3], 2);
    design.addMove(0, 14, [6, 4, 6, 4, 6], 1);
    design.addMove(0, 14, [5, 4, 5, 4, 5], 1);
    design.addMove(0, 15, [0, 0, 4, 0, 0, 4, 0, 0], 0);
    design.addMove(0, 15, [1, 1, 4, 1, 1, 4, 1, 1], 0);
    design.addMove(0, 15, [7, 7, 4, 7, 7, 4, 7, 7], 2);
    design.addMove(0, 15, [3, 3, 4, 3, 3, 4, 3, 3], 2);
    design.addMove(0, 15, [6, 6, 4, 6, 6, 4, 6, 6], 1);
    design.addMove(0, 15, [5, 5, 4, 5, 5, 4, 5, 5], 1);
    design.addMove(0, 16, [0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0], 0);
    design.addMove(0, 16, [1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1], 0);
    design.addMove(0, 16, [7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7], 2);
    design.addMove(0, 16, [3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3], 2);
    design.addMove(0, 16, [6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6], 1);
    design.addMove(0, 16, [5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5], 1);
    design.addMove(0, 17, [0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0], 0);
    design.addMove(0, 17, [1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1], 0);
    design.addMove(0, 17, [7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7], 2);
    design.addMove(0, 17, [3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3], 2);
    design.addMove(0, 17, [6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6], 1);
    design.addMove(0, 17, [5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5], 1);
    design.addMove(0, 18, [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 18, [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 18, [7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 18, [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 18, [6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 18, [5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 19, [0, 4, 0, 4, 0, 4, 0], 0);
    design.addMove(0, 19, [1, 4, 1, 4, 1, 4, 1], 0);
    design.addMove(0, 19, [7, 4, 7, 4, 7, 4, 7], 2);
    design.addMove(0, 19, [3, 4, 3, 4, 3, 4, 3], 2);
    design.addMove(0, 19, [6, 4, 6, 4, 6, 4, 6], 1);
    design.addMove(0, 19, [5, 4, 5, 4, 5, 4, 5], 1);
    design.addMove(0, 20, [0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0], 0);
    design.addMove(0, 20, [1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1], 0);
    design.addMove(0, 20, [7, 7, 4, 7, 7, 4, 7, 7, 4, 7, 7], 2);
    design.addMove(0, 20, [3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3], 2);
    design.addMove(0, 20, [6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6], 1);
    design.addMove(0, 20, [5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5], 1);
    design.addMove(0, 21, [0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0], 0);
    design.addMove(0, 21, [1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1], 0);
    design.addMove(0, 21, [7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7], 2);
    design.addMove(0, 21, [3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3], 2);
    design.addMove(0, 21, [6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6], 1);
    design.addMove(0, 21, [5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5], 1);
    design.addMove(0, 22, [0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0], 0);
    design.addMove(0, 22, [1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1], 0);
    design.addMove(0, 22, [7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7], 2);
    design.addMove(0, 22, [3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3], 2);
    design.addMove(0, 22, [6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6], 1);
    design.addMove(0, 22, [5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5], 1);
    design.addMove(0, 23, [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 23, [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 23, [7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 23, [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 23, [6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 23, [5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 24, [0, 4, 0, 4, 0, 4, 0, 4, 0], 0);
    design.addMove(0, 24, [1, 4, 1, 4, 1, 4, 1, 4, 1], 0);
    design.addMove(0, 24, [7, 4, 7, 4, 7, 4, 7, 4, 7], 2);
    design.addMove(0, 24, [3, 4, 3, 4, 3, 4, 3, 4, 3], 2);
    design.addMove(0, 24, [6, 4, 6, 4, 6, 4, 6, 4, 6], 1);
    design.addMove(0, 24, [5, 4, 5, 4, 5, 4, 5, 4, 5], 1);
    design.addMove(0, 25, [0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0], 0);
    design.addMove(0, 25, [1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1], 0);
    design.addMove(0, 25, [7, 7, 4, 7, 7, 4, 7, 7, 4, 7, 7, 4, 7, 7], 2);
    design.addMove(0, 25, [3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3], 2);
    design.addMove(0, 25, [6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6], 1);
    design.addMove(0, 25, [5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5], 1);
    design.addMove(0, 26, [0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0], 0);
    design.addMove(0, 26, [1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1], 0);
    design.addMove(0, 26, [7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7], 2);
    design.addMove(0, 26, [3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3], 2);
    design.addMove(0, 26, [6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6], 1);
    design.addMove(0, 26, [5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5], 1);
    design.addMove(0, 27, [0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0], 0);
    design.addMove(0, 27, [1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1], 0);
    design.addMove(0, 27, [7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7], 2);
    design.addMove(0, 27, [3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3], 2);
    design.addMove(0, 27, [6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6], 1);
    design.addMove(0, 27, [5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5], 1);
    design.addMove(0, 28, [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 28, [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 28, [7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 28, [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 28, [6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 28, [5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 29, [0, 4, 0, 4, 0, 4, 0, 4, 0, 4, 0], 0);
    design.addMove(0, 29, [1, 4, 1, 4, 1, 4, 1, 4, 1, 4, 1], 0);
    design.addMove(0, 29, [7, 4, 7, 4, 7, 4, 7, 4, 7, 4, 7], 2);
    design.addMove(0, 29, [3, 4, 3, 4, 3, 4, 3, 4, 3, 4, 3], 2);
    design.addMove(0, 29, [6, 4, 6, 4, 6, 4, 6, 4, 6, 4, 6], 1);
    design.addMove(0, 29, [5, 4, 5, 4, 5, 4, 5, 4, 5, 4, 5], 1);
    design.addMove(0, 30, [0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0], 0);
    design.addMove(0, 30, [1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1, 4, 1, 1], 0);
    design.addMove(0, 30, [7, 7, 4, 7, 7, 4, 7, 7, 4, 7, 7, 4, 7, 7, 4, 7, 7], 2);
    design.addMove(0, 30, [3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3], 2);
    design.addMove(0, 30, [6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6, 4, 6, 6], 1);
    design.addMove(0, 30, [5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5], 1);
    design.addMove(0, 31, [0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0], 0);
    design.addMove(0, 31, [1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1, 4, 1, 1, 1], 0);
    design.addMove(0, 31, [7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7, 4, 7, 7, 7], 2);
    design.addMove(0, 31, [3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3, 4, 3, 3, 3], 2);
    design.addMove(0, 31, [6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6, 4, 6, 6, 6], 1);
    design.addMove(0, 31, [5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5, 4, 5, 5, 5], 1);
    design.addMove(0, 32, [0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0], 0);
    design.addMove(0, 32, [1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1], 0);
    design.addMove(0, 32, [7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7, 4, 7, 7, 7, 7], 2);
    design.addMove(0, 32, [3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 3, 3], 2);
    design.addMove(0, 32, [6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6, 4, 6, 6, 6, 6], 1);
    design.addMove(0, 32, [5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5, 5], 1);
    design.addMove(0, 33, [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 33, [1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 33, [7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7, 4, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 33, [3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 33, [6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6, 4, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 33, [5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5, 4, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 9, [3, 7, 3], 2);
    design.addMove(0, 9, [6, 7, 6], 1);
    design.addMove(0, 9, [4, 7, 4], 2);
    design.addMove(0, 9, [2, 7, 2], 1);
    design.addMove(0, 9, [0, 7, 0], 0);
    design.addMove(0, 9, [1, 7, 1], 0);
    design.addMove(0, 10, [3, 3, 7, 3, 3], 2);
    design.addMove(0, 10, [6, 6, 7, 6, 6], 1);
    design.addMove(0, 10, [4, 4, 7, 4, 4], 2);
    design.addMove(0, 10, [2, 2, 7, 2, 2], 1);
    design.addMove(0, 10, [0, 0, 7, 0, 0], 0);
    design.addMove(0, 10, [1, 1, 7, 1, 1], 0);
    design.addMove(0, 11, [3, 3, 3, 7, 3, 3, 3], 2);
    design.addMove(0, 11, [6, 6, 6, 7, 6, 6, 6], 1);
    design.addMove(0, 11, [4, 4, 4, 7, 4, 4, 4], 2);
    design.addMove(0, 11, [2, 2, 2, 7, 2, 2, 2], 1);
    design.addMove(0, 11, [0, 0, 0, 7, 0, 0, 0], 0);
    design.addMove(0, 11, [1, 1, 1, 7, 1, 1, 1], 0);
    design.addMove(0, 12, [3, 3, 3, 3, 7, 3, 3, 3, 3], 2);
    design.addMove(0, 12, [6, 6, 6, 6, 7, 6, 6, 6, 6], 1);
    design.addMove(0, 12, [4, 4, 4, 4, 7, 4, 4, 4, 4], 2);
    design.addMove(0, 12, [2, 2, 2, 2, 7, 2, 2, 2, 2], 1);
    design.addMove(0, 12, [0, 0, 0, 0, 7, 0, 0, 0, 0], 0);
    design.addMove(0, 12, [1, 1, 1, 1, 7, 1, 1, 1, 1], 0);
    design.addMove(0, 13, [3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 13, [6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 13, [4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 13, [2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 13, [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 13, [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 14, [3, 7, 3, 7, 3], 2);
    design.addMove(0, 14, [6, 7, 6, 7, 6], 1);
    design.addMove(0, 14, [4, 7, 4, 7, 4], 2);
    design.addMove(0, 14, [2, 7, 2, 7, 2], 1);
    design.addMove(0, 14, [0, 7, 0, 7, 0], 0);
    design.addMove(0, 14, [1, 7, 1, 7, 1], 0);
    design.addMove(0, 15, [3, 3, 7, 3, 3, 7, 3, 3], 2);
    design.addMove(0, 15, [6, 6, 7, 6, 6, 7, 6, 6], 1);
    design.addMove(0, 15, [4, 4, 7, 4, 4, 7, 4, 4], 2);
    design.addMove(0, 15, [2, 2, 7, 2, 2, 7, 2, 2], 1);
    design.addMove(0, 15, [0, 0, 7, 0, 0, 7, 0, 0], 0);
    design.addMove(0, 15, [1, 1, 7, 1, 1, 7, 1, 1], 0);
    design.addMove(0, 16, [3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3], 2);
    design.addMove(0, 16, [6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6], 1);
    design.addMove(0, 16, [4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4], 2);
    design.addMove(0, 16, [2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2], 1);
    design.addMove(0, 16, [0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0], 0);
    design.addMove(0, 16, [1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1], 0);
    design.addMove(0, 17, [3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3], 2);
    design.addMove(0, 17, [6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6], 1);
    design.addMove(0, 17, [4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4], 2);
    design.addMove(0, 17, [2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2], 1);
    design.addMove(0, 17, [0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0], 0);
    design.addMove(0, 17, [1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1], 0);
    design.addMove(0, 18, [3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 18, [6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 18, [4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 18, [2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 18, [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 18, [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 19, [3, 7, 3, 7, 3, 7, 3], 2);
    design.addMove(0, 19, [6, 7, 6, 7, 6, 7, 6], 1);
    design.addMove(0, 19, [4, 7, 4, 7, 4, 7, 4], 2);
    design.addMove(0, 19, [2, 7, 2, 7, 2, 7, 2], 1);
    design.addMove(0, 19, [0, 7, 0, 7, 0, 7, 0], 0);
    design.addMove(0, 19, [1, 7, 1, 7, 1, 7, 1], 0);
    design.addMove(0, 20, [3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3], 2);
    design.addMove(0, 20, [6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6], 1);
    design.addMove(0, 20, [4, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4], 2);
    design.addMove(0, 20, [2, 2, 7, 2, 2, 7, 2, 2, 7, 2, 2], 1);
    design.addMove(0, 20, [0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0], 0);
    design.addMove(0, 20, [1, 1, 7, 1, 1, 7, 1, 1, 7, 1, 1], 0);
    design.addMove(0, 21, [3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3], 2);
    design.addMove(0, 21, [6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6], 1);
    design.addMove(0, 21, [4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4], 2);
    design.addMove(0, 21, [2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2], 1);
    design.addMove(0, 21, [0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0], 0);
    design.addMove(0, 21, [1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1], 0);
    design.addMove(0, 22, [3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3], 2);
    design.addMove(0, 22, [6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6], 1);
    design.addMove(0, 22, [4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4], 2);
    design.addMove(0, 22, [2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2], 1);
    design.addMove(0, 22, [0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0], 0);
    design.addMove(0, 22, [1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1], 0);
    design.addMove(0, 23, [3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 23, [6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 23, [4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 23, [2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 23, [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 23, [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 24, [3, 7, 3, 7, 3, 7, 3, 7, 3], 2);
    design.addMove(0, 24, [6, 7, 6, 7, 6, 7, 6, 7, 6], 1);
    design.addMove(0, 24, [4, 7, 4, 7, 4, 7, 4, 7, 4], 2);
    design.addMove(0, 24, [2, 7, 2, 7, 2, 7, 2, 7, 2], 1);
    design.addMove(0, 24, [0, 7, 0, 7, 0, 7, 0, 7, 0], 0);
    design.addMove(0, 24, [1, 7, 1, 7, 1, 7, 1, 7, 1], 0);
    design.addMove(0, 25, [3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3], 2);
    design.addMove(0, 25, [6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6], 1);
    design.addMove(0, 25, [4, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4], 2);
    design.addMove(0, 25, [2, 2, 7, 2, 2, 7, 2, 2, 7, 2, 2, 7, 2, 2], 1);
    design.addMove(0, 25, [0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0], 0);
    design.addMove(0, 25, [1, 1, 7, 1, 1, 7, 1, 1, 7, 1, 1, 7, 1, 1], 0);
    design.addMove(0, 26, [3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3], 2);
    design.addMove(0, 26, [6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6], 1);
    design.addMove(0, 26, [4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4], 2);
    design.addMove(0, 26, [2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2], 1);
    design.addMove(0, 26, [0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0], 0);
    design.addMove(0, 26, [1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1], 0);
    design.addMove(0, 27, [3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3], 2);
    design.addMove(0, 27, [6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6], 1);
    design.addMove(0, 27, [4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4], 2);
    design.addMove(0, 27, [2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2], 1);
    design.addMove(0, 27, [0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0], 0);
    design.addMove(0, 27, [1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1], 0);
    design.addMove(0, 28, [3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 28, [6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 28, [4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 28, [2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 28, [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 28, [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 29, [3, 7, 3, 7, 3, 7, 3, 7, 3, 7, 3], 2);
    design.addMove(0, 29, [6, 7, 6, 7, 6, 7, 6, 7, 6, 7, 6], 1);
    design.addMove(0, 29, [4, 7, 4, 7, 4, 7, 4, 7, 4, 7, 4], 2);
    design.addMove(0, 29, [2, 7, 2, 7, 2, 7, 2, 7, 2, 7, 2], 1);
    design.addMove(0, 29, [0, 7, 0, 7, 0, 7, 0, 7, 0, 7, 0], 0);
    design.addMove(0, 29, [1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 1], 0);
    design.addMove(0, 30, [3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3, 7, 3, 3], 2);
    design.addMove(0, 30, [6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6, 7, 6, 6], 1);
    design.addMove(0, 30, [4, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4, 7, 4, 4], 2);
    design.addMove(0, 30, [2, 2, 7, 2, 2, 7, 2, 2, 7, 2, 2, 7, 2, 2, 7, 2, 2], 1);
    design.addMove(0, 30, [0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0, 7, 0, 0], 0);
    design.addMove(0, 30, [1, 1, 7, 1, 1, 7, 1, 1, 7, 1, 1, 7, 1, 1, 7, 1, 1], 0);
    design.addMove(0, 31, [3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3, 7, 3, 3, 3], 2);
    design.addMove(0, 31, [6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6, 7, 6, 6, 6], 1);
    design.addMove(0, 31, [4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4, 7, 4, 4, 4], 2);
    design.addMove(0, 31, [2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2, 7, 2, 2, 2], 1);
    design.addMove(0, 31, [0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0, 7, 0, 0, 0], 0);
    design.addMove(0, 31, [1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1, 7, 1, 1, 1], 0);
    design.addMove(0, 32, [3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3, 7, 3, 3, 3, 3], 2);
    design.addMove(0, 32, [6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6, 7, 6, 6, 6, 6], 1);
    design.addMove(0, 32, [4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4, 7, 4, 4, 4, 4], 2);
    design.addMove(0, 32, [2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2, 7, 2, 2, 2, 2], 1);
    design.addMove(0, 32, [0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0, 7, 0, 0, 0, 0], 0);
    design.addMove(0, 32, [1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1, 7, 1, 1, 1, 1], 0);
    design.addMove(0, 33, [3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3, 7, 3, 3, 3, 3, 3], 2);
    design.addMove(0, 33, [6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6, 7, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 33, [4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4, 7, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 33, [2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2, 7, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 33, [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 33, [1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 9, [5, 3, 5], 1);
    design.addMove(0, 9, [7, 3, 7], 2);
    design.addMove(0, 9, [4, 3, 4], 2);
    design.addMove(0, 9, [2, 3, 2], 1);
    design.addMove(0, 9, [0, 3, 0], 0);
    design.addMove(0, 9, [1, 3, 1], 0);
    design.addMove(0, 10, [5, 5, 3, 5, 5], 1);
    design.addMove(0, 10, [7, 7, 3, 7, 7], 2);
    design.addMove(0, 10, [4, 4, 3, 4, 4], 2);
    design.addMove(0, 10, [2, 2, 3, 2, 2], 1);
    design.addMove(0, 10, [0, 0, 3, 0, 0], 0);
    design.addMove(0, 10, [1, 1, 3, 1, 1], 0);
    design.addMove(0, 11, [5, 5, 5, 3, 5, 5, 5], 1);
    design.addMove(0, 11, [7, 7, 7, 3, 7, 7, 7], 2);
    design.addMove(0, 11, [4, 4, 4, 3, 4, 4, 4], 2);
    design.addMove(0, 11, [2, 2, 2, 3, 2, 2, 2], 1);
    design.addMove(0, 11, [0, 0, 0, 3, 0, 0, 0], 0);
    design.addMove(0, 11, [1, 1, 1, 3, 1, 1, 1], 0);
    design.addMove(0, 12, [5, 5, 5, 5, 3, 5, 5, 5, 5], 1);
    design.addMove(0, 12, [7, 7, 7, 7, 3, 7, 7, 7, 7], 2);
    design.addMove(0, 12, [4, 4, 4, 4, 3, 4, 4, 4, 4], 2);
    design.addMove(0, 12, [2, 2, 2, 2, 3, 2, 2, 2, 2], 1);
    design.addMove(0, 12, [0, 0, 0, 0, 3, 0, 0, 0, 0], 0);
    design.addMove(0, 12, [1, 1, 1, 1, 3, 1, 1, 1, 1], 0);
    design.addMove(0, 13, [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 13, [7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 13, [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 13, [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 13, [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 13, [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 14, [5, 3, 5, 3, 5], 1);
    design.addMove(0, 14, [7, 3, 7, 3, 7], 2);
    design.addMove(0, 14, [4, 3, 4, 3, 4], 2);
    design.addMove(0, 14, [2, 3, 2, 3, 2], 1);
    design.addMove(0, 14, [0, 3, 0, 3, 0], 0);
    design.addMove(0, 14, [1, 3, 1, 3, 1], 0);
    design.addMove(0, 15, [5, 5, 3, 5, 5, 3, 5, 5], 1);
    design.addMove(0, 15, [7, 7, 3, 7, 7, 3, 7, 7], 2);
    design.addMove(0, 15, [4, 4, 3, 4, 4, 3, 4, 4], 2);
    design.addMove(0, 15, [2, 2, 3, 2, 2, 3, 2, 2], 1);
    design.addMove(0, 15, [0, 0, 3, 0, 0, 3, 0, 0], 0);
    design.addMove(0, 15, [1, 1, 3, 1, 1, 3, 1, 1], 0);
    design.addMove(0, 16, [5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5], 1);
    design.addMove(0, 16, [7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7], 2);
    design.addMove(0, 16, [4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4], 2);
    design.addMove(0, 16, [2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2], 1);
    design.addMove(0, 16, [0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0], 0);
    design.addMove(0, 16, [1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1], 0);
    design.addMove(0, 17, [5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5], 1);
    design.addMove(0, 17, [7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7], 2);
    design.addMove(0, 17, [4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4], 2);
    design.addMove(0, 17, [2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2], 1);
    design.addMove(0, 17, [0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0], 0);
    design.addMove(0, 17, [1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1], 0);
    design.addMove(0, 18, [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 18, [7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 18, [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 18, [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 18, [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 18, [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 19, [5, 3, 5, 3, 5, 3, 5], 1);
    design.addMove(0, 19, [7, 3, 7, 3, 7, 3, 7], 2);
    design.addMove(0, 19, [4, 3, 4, 3, 4, 3, 4], 2);
    design.addMove(0, 19, [2, 3, 2, 3, 2, 3, 2], 1);
    design.addMove(0, 19, [0, 3, 0, 3, 0, 3, 0], 0);
    design.addMove(0, 19, [1, 3, 1, 3, 1, 3, 1], 0);
    design.addMove(0, 20, [5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 5], 1);
    design.addMove(0, 20, [7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7], 2);
    design.addMove(0, 20, [4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4], 2);
    design.addMove(0, 20, [2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2], 1);
    design.addMove(0, 20, [0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0], 0);
    design.addMove(0, 20, [1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1], 0);
    design.addMove(0, 21, [5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5], 1);
    design.addMove(0, 21, [7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7], 2);
    design.addMove(0, 21, [4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4], 2);
    design.addMove(0, 21, [2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2], 1);
    design.addMove(0, 21, [0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0], 0);
    design.addMove(0, 21, [1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1], 0);
    design.addMove(0, 22, [5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5], 1);
    design.addMove(0, 22, [7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7], 2);
    design.addMove(0, 22, [4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4], 2);
    design.addMove(0, 22, [2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2], 1);
    design.addMove(0, 22, [0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0], 0);
    design.addMove(0, 22, [1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1], 0);
    design.addMove(0, 23, [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 23, [7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 23, [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 23, [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 23, [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 23, [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 24, [5, 3, 5, 3, 5, 3, 5, 3, 5], 1);
    design.addMove(0, 24, [7, 3, 7, 3, 7, 3, 7, 3, 7], 2);
    design.addMove(0, 24, [4, 3, 4, 3, 4, 3, 4, 3, 4], 2);
    design.addMove(0, 24, [2, 3, 2, 3, 2, 3, 2, 3, 2], 1);
    design.addMove(0, 24, [0, 3, 0, 3, 0, 3, 0, 3, 0], 0);
    design.addMove(0, 24, [1, 3, 1, 3, 1, 3, 1, 3, 1], 0);
    design.addMove(0, 25, [5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 5], 1);
    design.addMove(0, 25, [7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7], 2);
    design.addMove(0, 25, [4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4], 2);
    design.addMove(0, 25, [2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2], 1);
    design.addMove(0, 25, [0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0], 0);
    design.addMove(0, 25, [1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1], 0);
    design.addMove(0, 26, [5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5], 1);
    design.addMove(0, 26, [7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7], 2);
    design.addMove(0, 26, [4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4], 2);
    design.addMove(0, 26, [2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2], 1);
    design.addMove(0, 26, [0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0], 0);
    design.addMove(0, 26, [1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1], 0);
    design.addMove(0, 27, [5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5], 1);
    design.addMove(0, 27, [7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7], 2);
    design.addMove(0, 27, [4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4], 2);
    design.addMove(0, 27, [2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2], 1);
    design.addMove(0, 27, [0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0], 0);
    design.addMove(0, 27, [1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1], 0);
    design.addMove(0, 28, [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 28, [7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 28, [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 28, [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 28, [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 28, [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1], 0);
    design.addMove(0, 29, [5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5], 1);
    design.addMove(0, 29, [7, 3, 7, 3, 7, 3, 7, 3, 7, 3, 7], 2);
    design.addMove(0, 29, [4, 3, 4, 3, 4, 3, 4, 3, 4, 3, 4], 2);
    design.addMove(0, 29, [2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2], 1);
    design.addMove(0, 29, [0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0], 0);
    design.addMove(0, 29, [1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1], 0);
    design.addMove(0, 30, [5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 5, 3, 5, 5], 1);
    design.addMove(0, 30, [7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7, 3, 7, 7], 2);
    design.addMove(0, 30, [4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4, 3, 4, 4], 2);
    design.addMove(0, 30, [2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2, 3, 2, 2], 1);
    design.addMove(0, 30, [0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0, 3, 0, 0], 0);
    design.addMove(0, 30, [1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1, 3, 1, 1], 0);
    design.addMove(0, 31, [5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5, 3, 5, 5, 5], 1);
    design.addMove(0, 31, [7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7, 3, 7, 7, 7], 2);
    design.addMove(0, 31, [4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4, 3, 4, 4, 4], 2);
    design.addMove(0, 31, [2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2, 3, 2, 2, 2], 1);
    design.addMove(0, 31, [0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0], 0);
    design.addMove(0, 31, [1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 3, 1, 1, 1], 0);
    design.addMove(0, 32, [5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5, 3, 5, 5, 5, 5], 1);
    design.addMove(0, 32, [7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7, 3, 7, 7, 7, 7], 2);
    design.addMove(0, 32, [4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 4, 4], 2);
    design.addMove(0, 32, [2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2], 1);
    design.addMove(0, 32, [0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0], 0);
    design.addMove(0, 32, [1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1, 3, 1, 1, 1, 1], 0);
    design.addMove(0, 33, [5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5, 3, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 33, [7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7, 3, 7, 7, 7, 7, 7], 2);
    design.addMove(0, 33, [4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4], 2);
    design.addMove(0, 33, [2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2], 1);
    design.addMove(0, 33, [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0], 0);
    design.addMove(0, 33, [1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1], 0);

    design.setup("White", "Man", 60);
    design.setup("White", "Man", 50);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 51);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 62);
    design.setup("White", "Man", 73);
    design.setup("White", "Man", 63);
    design.setup("White", "Man", 64);
    design.setup("White", "Man", 54);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 55);
    design.setup("White", "Man", 76);
    design.setup("White", "Man", 66);
    design.setup("White", "Man", 77);
    design.setup("White", "Man", 67);
    design.setup("White", "Man", 68);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 69);
    design.setup("White", "Man", 59);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 2);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 24);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 25);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 28);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 29);
    design.setup("Black", "Man", 19);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a8", 2, 2, 35, 35);
    view.defPosition("b8", 37, 2, 35, 35);
    view.defPosition("c8", 72, 2, 35, 35);
    view.defPosition("d8", 107, 2, 35, 35);
    view.defPosition("e8", 142, 2, 35, 35);
    view.defPosition("f8", 177, 2, 35, 35);
    view.defPosition("g8", 212, 2, 35, 35);
    view.defPosition("h8", 247, 2, 35, 35);
    view.defPosition("i8", 282, 2, 35, 35);
    view.defPosition("j8", 317, 2, 35, 35);
    view.defPosition("a7", 2, 37, 35, 35);
    view.defPosition("b7", 37, 37, 35, 35);
    view.defPosition("c7", 72, 37, 35, 35);
    view.defPosition("d7", 107, 37, 35, 35);
    view.defPosition("e7", 142, 37, 35, 35);
    view.defPosition("f7", 177, 37, 35, 35);
    view.defPosition("g7", 212, 37, 35, 35);
    view.defPosition("h7", 247, 37, 35, 35);
    view.defPosition("i7", 282, 37, 35, 35);
    view.defPosition("j7", 317, 37, 35, 35);
    view.defPosition("a6", 2, 72, 35, 35);
    view.defPosition("b6", 37, 72, 35, 35);
    view.defPosition("c6", 72, 72, 35, 35);
    view.defPosition("d6", 107, 72, 35, 35);
    view.defPosition("e6", 142, 72, 35, 35);
    view.defPosition("f6", 177, 72, 35, 35);
    view.defPosition("g6", 212, 72, 35, 35);
    view.defPosition("h6", 247, 72, 35, 35);
    view.defPosition("i6", 282, 72, 35, 35);
    view.defPosition("j6", 317, 72, 35, 35);
    view.defPosition("a5", 2, 107, 35, 35);
    view.defPosition("b5", 37, 107, 35, 35);
    view.defPosition("c5", 72, 107, 35, 35);
    view.defPosition("d5", 107, 107, 35, 35);
    view.defPosition("e5", 142, 107, 35, 35);
    view.defPosition("f5", 177, 107, 35, 35);
    view.defPosition("g5", 212, 107, 35, 35);
    view.defPosition("h5", 247, 107, 35, 35);
    view.defPosition("i5", 282, 107, 35, 35);
    view.defPosition("j5", 317, 107, 35, 35);
    view.defPosition("a4", 2, 142, 35, 35);
    view.defPosition("b4", 37, 142, 35, 35);
    view.defPosition("c4", 72, 142, 35, 35);
    view.defPosition("d4", 107, 142, 35, 35);
    view.defPosition("e4", 142, 142, 35, 35);
    view.defPosition("f4", 177, 142, 35, 35);
    view.defPosition("g4", 212, 142, 35, 35);
    view.defPosition("h4", 247, 142, 35, 35);
    view.defPosition("i4", 282, 142, 35, 35);
    view.defPosition("j4", 317, 142, 35, 35);
    view.defPosition("a3", 2, 177, 35, 35);
    view.defPosition("b3", 37, 177, 35, 35);
    view.defPosition("c3", 72, 177, 35, 35);
    view.defPosition("d3", 107, 177, 35, 35);
    view.defPosition("e3", 142, 177, 35, 35);
    view.defPosition("f3", 177, 177, 35, 35);
    view.defPosition("g3", 212, 177, 35, 35);
    view.defPosition("h3", 247, 177, 35, 35);
    view.defPosition("i3", 282, 177, 35, 35);
    view.defPosition("j3", 317, 177, 35, 35);
    view.defPosition("a2", 2, 212, 35, 35);
    view.defPosition("b2", 37, 212, 35, 35);
    view.defPosition("c2", 72, 212, 35, 35);
    view.defPosition("d2", 107, 212, 35, 35);
    view.defPosition("e2", 142, 212, 35, 35);
    view.defPosition("f2", 177, 212, 35, 35);
    view.defPosition("g2", 212, 212, 35, 35);
    view.defPosition("h2", 247, 212, 35, 35);
    view.defPosition("i2", 282, 212, 35, 35);
    view.defPosition("j2", 317, 212, 35, 35);
    view.defPosition("a1", 2, 247, 35, 35);
    view.defPosition("b1", 37, 247, 35, 35);
    view.defPosition("c1", 72, 247, 35, 35);
    view.defPosition("d1", 107, 247, 35, 35);
    view.defPosition("e1", 142, 247, 35, 35);
    view.defPosition("f1", 177, 247, 35, 35);
    view.defPosition("g1", 212, 247, 35, 35);
    view.defPosition("h1", 247, 247, 35, 35);
    view.defPosition("i1", 282, 247, 35, 35);
    view.defPosition("j1", 317, 247, 35, 35);
}
