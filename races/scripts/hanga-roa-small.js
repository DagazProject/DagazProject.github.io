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
    design.checkVersion("smart-moves", "to");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("hanga-roa-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("next");
    design.addDirection("nb");
    design.addDirection("br");
    design.addDirection("wr");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5, 8, 9, 10, 11]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7, 9, 8, 11, 10]);

    design.addPosition("a7", [0, 1, 7, 0, 0, 8, 0, 0, 0, 1, 49, 55]);
    design.addPosition("b7", [-1, 1, 7, 0, 0, 8, 6, 0, 0, 1, 0, 0]);
    design.addPosition("c7", [-1, 1, 7, 0, 0, 8, 6, 0, 0, 1, 0, 0]);
    design.addPosition("d7", [-1, 1, 7, 0, 0, 8, 6, 0, 0, 1, 0, 0]);
    design.addPosition("e7", [-1, 1, 7, 0, 0, 8, 6, 0, 0, 1, 0, 0]);
    design.addPosition("f7", [-1, 1, 7, 0, 0, 8, 6, 0, 0, 1, 0, 0]);
    design.addPosition("g7", [-1, 0, 7, 0, 0, 0, 6, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 7, -6, -7, 8, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("c6", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("d6", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("e6", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("f6", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("g6", [-1, 0, 7, 0, -7, 0, 6, -8, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 7, -6, -7, 8, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("c5", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("d5", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("e5", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("f5", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("g5", [-1, 0, 7, 0, -7, 0, 6, -8, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 7, -6, -7, 8, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("c4", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("d4", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("e4", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("f4", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("g4", [-1, 0, 7, 0, -7, 0, 6, -8, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 7, -6, -7, 8, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("d3", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("e3", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("f3", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("g3", [-1, 0, 7, 0, -7, 0, 6, -8, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 7, -6, -7, 8, 0, 0, 7, -35, 0, 0]);
    design.addPosition("b2", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("c2", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("d2", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("e2", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("f2", [-1, 1, 7, -6, -7, 8, 6, -8, 0, 0, 0, 0]);
    design.addPosition("g2", [-1, 0, 7, 0, -7, 0, 6, -8, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -6, -7, 0, 0, 0, 1, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -6, -7, 0, 0, -8, 1, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, 0, -6, -7, 0, 0, -8, 1, 0, 0, 0]);
    design.addPosition("d1", [-1, 1, 0, -6, -7, 0, 0, -8, 1, 0, 0, 0]);
    design.addPosition("e1", [-1, 1, 0, -6, -7, 0, 0, -8, 1, 0, 0, 0]);
    design.addPosition("f1", [-1, 1, 0, -6, -7, 0, 0, -8, 1, 0, 0, 0]);
    design.addPosition("g1", [-1, 0, 0, 0, -7, 0, 0, -8, 0, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("X4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);

    design.addZone("reserve", 1, [55, 54, 53, 52, 51, 50, 49]);
    design.addZone("reserve", 2, [55, 54, 53, 52, 51, 50, 49]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.LITERAL,	0);	// Stone
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// normal-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// reserve
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	8);
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.MODE,	1);	// left-2-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-9);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(3, ZRF.FUNCTION,	11);	// create
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(3, ZRF.MODE,	2);	// left-1-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(4, ZRF.FUNCTION,	11);	// create
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(4, ZRF.MODE,	2);	// left-1-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(5, ZRF.FUNCTION,	11);	// create
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(5, ZRF.MODE,	2);	// left-1-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(6, ZRF.FUNCTION,	11);	// create
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(6, ZRF.MODE,	2);	// left-1-type
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(7, ZRF.FUNCTION,	11);	// create
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(7, ZRF.MODE,	2);	// left-1-type
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(8, ZRF.FUNCTION,	11);	// create
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(8, ZRF.MODE,	2);	// left-1-type
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(9, ZRF.FUNCTION,	11);	// create
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	4);	// $5
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	5);	// $6
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	6);	// $7
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(9, ZRF.MODE,	2);	// left-1-type
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(10, ZRF.FUNCTION,	11);	// create
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	3);	// $4
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	4);	// $5
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	5);	// $6
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	6);	// $7
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	7);	// $8
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(10, ZRF.MODE,	2);	// left-1-type
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(11, ZRF.FUNCTION,	11);	// create
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(11, ZRF.MODE,	3);	// no-type
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(12, ZRF.FUNCTION,	11);	// create
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(12, ZRF.MODE,	3);	// no-type
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(13, ZRF.FUNCTION,	11);	// create
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
    design.addCommand(13, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(13, ZRF.MODE,	3);	// no-type
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(14, ZRF.FUNCTION,	11);	// create
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	2);	// $3
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	3);	// $4
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(14, ZRF.MODE,	3);	// no-type
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(15, ZRF.FUNCTION,	11);	// create
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	2);	// $3
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	3);	// $4
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	4);	// $5
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(15, ZRF.MODE,	3);	// no-type
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(16, ZRF.FUNCTION,	11);	// create
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
    design.addCommand(16, ZRF.PARAM,	3);	// $4
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	4);	// $5
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PARAM,	5);	// $6
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(16, ZRF.MODE,	3);	// no-type
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(17, ZRF.FUNCTION,	11);	// create
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
    design.addCommand(17, ZRF.PARAM,	4);	// $5
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	5);	// $6
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	6);	// $7
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(17, ZRF.MODE,	3);	// no-type
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.LITERAL,	2);	// Ariki
    design.addCommand(18, ZRF.FUNCTION,	11);	// create
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
    design.addCommand(18, ZRF.PARAM,	5);	// $6
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	6);	// $7
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	7);	// $8
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PROMOTE,	0);	// Stone
    design.addCommand(18, ZRF.MODE,	3);	// no-type
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.IF,	6);
    design.addCommand(19, ZRF.LITERAL,	0);	// Stone
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.IF,	3);
    design.addCommand(19, ZRF.LITERAL,	0);	// false
    design.addCommand(19, ZRF.JUMP,	2);
    design.addCommand(19, ZRF.LITERAL,	1);	// true
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Stone", 0);

    design.addPiece("Moai", 1);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [6], 0);

    design.addPiece("Ariki", 2);
    design.addMove(2, 1, [35, 8, 8], 0);
    design.addMove(2, 2, [4, 4], 0);
    design.addMove(2, 2, [7, 7], 0);
    design.addMove(2, 2, [2, 2], 0);
    design.addMove(2, 2, [5, 5], 0);
    design.addMove(2, 2, [1, 1], 0);
    design.addMove(2, 2, [3, 3], 0);
    design.addMove(2, 2, [0, 0], 0);
    design.addMove(2, 2, [6, 6], 0);
    design.addMove(2, 3, [4], 1);
    design.addMove(2, 3, [7], 1);
    design.addMove(2, 3, [2], 1);
    design.addMove(2, 3, [5], 1);
    design.addMove(2, 3, [1], 1);
    design.addMove(2, 3, [3], 1);
    design.addMove(2, 3, [0], 1);
    design.addMove(2, 3, [6], 1);
    design.addMove(2, 4, [4, 4], 1);
    design.addMove(2, 4, [7, 7], 1);
    design.addMove(2, 4, [2, 2], 1);
    design.addMove(2, 4, [5, 5], 1);
    design.addMove(2, 4, [1, 1], 1);
    design.addMove(2, 4, [3, 3], 1);
    design.addMove(2, 4, [0, 0], 1);
    design.addMove(2, 4, [6, 6], 1);
    design.addMove(2, 5, [4, 4, 4], 1);
    design.addMove(2, 5, [7, 7, 7], 1);
    design.addMove(2, 5, [2, 2, 2], 1);
    design.addMove(2, 5, [5, 5, 5], 1);
    design.addMove(2, 5, [1, 1, 1], 1);
    design.addMove(2, 5, [3, 3, 3], 1);
    design.addMove(2, 5, [0, 0, 0], 1);
    design.addMove(2, 5, [6, 6, 6], 1);
    design.addMove(2, 6, [4, 4, 4, 4], 1);
    design.addMove(2, 6, [7, 7, 7, 7], 1);
    design.addMove(2, 6, [2, 2, 2, 2], 1);
    design.addMove(2, 6, [5, 5, 5, 5], 1);
    design.addMove(2, 6, [1, 1, 1, 1], 1);
    design.addMove(2, 6, [3, 3, 3, 3], 1);
    design.addMove(2, 6, [0, 0, 0, 0], 1);
    design.addMove(2, 6, [6, 6, 6, 6], 1);
    design.addMove(2, 7, [4, 4, 4, 4, 4], 1);
    design.addMove(2, 7, [7, 7, 7, 7, 7], 1);
    design.addMove(2, 7, [2, 2, 2, 2, 2], 1);
    design.addMove(2, 7, [5, 5, 5, 5, 5], 1);
    design.addMove(2, 7, [1, 1, 1, 1, 1], 1);
    design.addMove(2, 7, [3, 3, 3, 3, 3], 1);
    design.addMove(2, 7, [0, 0, 0, 0, 0], 1);
    design.addMove(2, 7, [6, 6, 6, 6, 6], 1);
    design.addMove(2, 8, [4, 4, 4, 4, 4, 4], 1);
    design.addMove(2, 8, [7, 7, 7, 7, 7, 7], 1);
    design.addMove(2, 8, [2, 2, 2, 2, 2, 2], 1);
    design.addMove(2, 8, [5, 5, 5, 5, 5, 5], 1);
    design.addMove(2, 8, [1, 1, 1, 1, 1, 1], 1);
    design.addMove(2, 8, [3, 3, 3, 3, 3, 3], 1);
    design.addMove(2, 8, [0, 0, 0, 0, 0, 0], 1);
    design.addMove(2, 8, [6, 6, 6, 6, 6, 6], 1);
    design.addMove(2, 11, [4], 2);
    design.addMove(2, 11, [7], 2);
    design.addMove(2, 11, [2], 2);
    design.addMove(2, 11, [5], 2);
    design.addMove(2, 11, [1], 2);
    design.addMove(2, 11, [3], 2);
    design.addMove(2, 11, [0], 2);
    design.addMove(2, 11, [6], 2);
    design.addMove(2, 12, [4, 4], 2);
    design.addMove(2, 12, [7, 7], 2);
    design.addMove(2, 12, [2, 2], 2);
    design.addMove(2, 12, [5, 5], 2);
    design.addMove(2, 12, [1, 1], 2);
    design.addMove(2, 12, [3, 3], 2);
    design.addMove(2, 12, [0, 0], 2);
    design.addMove(2, 12, [6, 6], 2);
    design.addMove(2, 13, [4, 4, 4], 2);
    design.addMove(2, 13, [7, 7, 7], 2);
    design.addMove(2, 13, [2, 2, 2], 2);
    design.addMove(2, 13, [5, 5, 5], 2);
    design.addMove(2, 13, [1, 1, 1], 2);
    design.addMove(2, 13, [3, 3, 3], 2);
    design.addMove(2, 13, [0, 0, 0], 2);
    design.addMove(2, 13, [6, 6, 6], 2);
    design.addMove(2, 14, [4, 4, 4, 4], 2);
    design.addMove(2, 14, [7, 7, 7, 7], 2);
    design.addMove(2, 14, [2, 2, 2, 2], 2);
    design.addMove(2, 14, [5, 5, 5, 5], 2);
    design.addMove(2, 14, [1, 1, 1, 1], 2);
    design.addMove(2, 14, [3, 3, 3, 3], 2);
    design.addMove(2, 14, [0, 0, 0, 0], 2);
    design.addMove(2, 14, [6, 6, 6, 6], 2);
    design.addMove(2, 15, [4, 4, 4, 4, 4], 2);
    design.addMove(2, 15, [7, 7, 7, 7, 7], 2);
    design.addMove(2, 15, [2, 2, 2, 2, 2], 2);
    design.addMove(2, 15, [5, 5, 5, 5, 5], 2);
    design.addMove(2, 15, [1, 1, 1, 1, 1], 2);
    design.addMove(2, 15, [3, 3, 3, 3, 3], 2);
    design.addMove(2, 15, [0, 0, 0, 0, 0], 2);
    design.addMove(2, 15, [6, 6, 6, 6, 6], 2);
    design.addMove(2, 16, [4, 4, 4, 4, 4, 4], 2);
    design.addMove(2, 16, [7, 7, 7, 7, 7, 7], 2);
    design.addMove(2, 16, [2, 2, 2, 2, 2, 2], 2);
    design.addMove(2, 16, [5, 5, 5, 5, 5, 5], 2);
    design.addMove(2, 16, [1, 1, 1, 1, 1, 1], 2);
    design.addMove(2, 16, [3, 3, 3, 3, 3, 3], 2);
    design.addMove(2, 16, [0, 0, 0, 0, 0, 0], 2);
    design.addMove(2, 16, [6, 6, 6, 6, 6, 6], 2);

    design.addPiece("MatoToa", 3);
    design.addMove(3, 19, [4], 0);
    design.addMove(3, 19, [7], 0);
    design.addMove(3, 19, [2], 0);
    design.addMove(3, 19, [5], 0);
    design.addMove(3, 19, [1], 0);
    design.addMove(3, 19, [3], 0);
    design.addMove(3, 19, [0], 0);
    design.addMove(3, 19, [6], 0);

    design.addPiece("MoaiCaptured", 4);

    design.setup("White", "Moai", 45);
    design.setup("White", "Ariki", 43);
    design.setup("White", "Ariki", 47);
    design.setup("White", "MatoToa", 36);
    design.setup("White", "MatoToa", 31);
    design.setup("White", "MatoToa", 40);
    design.setup("Black", "Moai", 3);
    design.setup("Black", "Ariki", 1);
    design.setup("Black", "Ariki", 5);
    design.setup("Black", "MatoToa", 8);
    design.setup("Black", "MatoToa", 17);
    design.setup("Black", "MatoToa", 12);

    design.goal(0, "Black", "Moai", [42, 43, 44, 45, 46, 47, 48]);
    design.goal(1, "White", "Moai", [0, 1, 2, 3, 4, 5, 6]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteMoai", "White Moai");
    view.defPiece("BlackMoai", "Black Moai");
    view.defPiece("WhiteAriki", "White Ariki");
    view.defPiece("BlackAriki", "Black Ariki");
    view.defPiece("WhiteMatoToa", "White MatoToa");
    view.defPiece("BlackMatoToa", "Black MatoToa");
    view.defPiece("WhiteMoaiCaptured", "White MoaiCaptured");
    view.defPiece("BlackMoaiCaptured", "Black MoaiCaptured");
 
    view.defPosition("a7", 2, 2, 50, 50);
    view.defPosition("b7", 52, 2, 50, 50);
    view.defPosition("c7", 102, 2, 50, 50);
    view.defPosition("d7", 152, 2, 50, 50);
    view.defPosition("e7", 202, 2, 50, 50);
    view.defPosition("f7", 252, 2, 50, 50);
    view.defPosition("g7", 302, 2, 50, 50);
    view.defPosition("a6", 2, 52, 50, 50);
    view.defPosition("b6", 52, 52, 50, 50);
    view.defPosition("c6", 102, 52, 50, 50);
    view.defPosition("d6", 152, 52, 50, 50);
    view.defPosition("e6", 202, 52, 50, 50);
    view.defPosition("f6", 252, 52, 50, 50);
    view.defPosition("g6", 302, 52, 50, 50);
    view.defPosition("a5", 2, 102, 50, 50);
    view.defPosition("b5", 52, 102, 50, 50);
    view.defPosition("c5", 102, 102, 50, 50);
    view.defPosition("d5", 152, 102, 50, 50);
    view.defPosition("e5", 202, 102, 50, 50);
    view.defPosition("f5", 252, 102, 50, 50);
    view.defPosition("g5", 302, 102, 50, 50);
    view.defPosition("a4", 2, 152, 50, 50);
    view.defPosition("b4", 52, 152, 50, 50);
    view.defPosition("c4", 102, 152, 50, 50);
    view.defPosition("d4", 152, 152, 50, 50);
    view.defPosition("e4", 202, 152, 50, 50);
    view.defPosition("f4", 252, 152, 50, 50);
    view.defPosition("g4", 302, 152, 50, 50);
    view.defPosition("a3", 2, 202, 50, 50);
    view.defPosition("b3", 52, 202, 50, 50);
    view.defPosition("c3", 102, 202, 50, 50);
    view.defPosition("d3", 152, 202, 50, 50);
    view.defPosition("e3", 202, 202, 50, 50);
    view.defPosition("f3", 252, 202, 50, 50);
    view.defPosition("g3", 302, 202, 50, 50);
    view.defPosition("a2", 2, 252, 50, 50);
    view.defPosition("b2", 52, 252, 50, 50);
    view.defPosition("c2", 102, 252, 50, 50);
    view.defPosition("d2", 152, 252, 50, 50);
    view.defPosition("e2", 202, 252, 50, 50);
    view.defPosition("f2", 252, 252, 50, 50);
    view.defPosition("g2", 302, 252, 50, 50);
    view.defPosition("a1", 2, 302, 50, 50);
    view.defPosition("b1", 52, 302, 50, 50);
    view.defPosition("c1", 102, 302, 50, 50);
    view.defPosition("d1", 152, 302, 50, 50);
    view.defPosition("e1", 202, 302, 50, 50);
    view.defPosition("f1", 252, 302, 50, 50);
    view.defPosition("g1", 302, 302, 50, 50);
    view.defPosition("X7", 352, 2, 50, 50);
    view.defPosition("X6", 352, 52, 50, 50);
    view.defPosition("X5", 352, 102, 50, 50);
    view.defPosition("X4", 352, 152, 50, 50);
    view.defPosition("X3", 352, 202, 50, 50);
    view.defPosition("X2", 352, 252, 50, 50);
    view.defPosition("X1", 352, 302, 50, 50);
}
