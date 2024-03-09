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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("Blue", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a5", [6, 5, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("c5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("d5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, 0, 0]);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5]);

    design.addZone("center", 2, [12]);
    design.addZone("center", 1, [12]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-13);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.IN_ZONE,	0);	// center
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-13);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.IN_ZONE,	0);	// center
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-13);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.IN_ZONE,	0);	// center
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-13);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.IN_ZONE,	0);	// center
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-13);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.IN_ZONE,	0);	// center
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-13);
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.IN_ZONE,	0);	// center
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.LITERAL,	1);	// true
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.LITERAL,	0);	// false
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-13);
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.IN_ZONE,	0);	// center
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-13);
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.IN_ZONE,	0);	// center
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	6);
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.LITERAL,	1);	// true
    design.addCommand(8, ZRF.JUMP,	2);
    design.addCommand(8, ZRF.LITERAL,	0);	// false
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-13);
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	6);
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	3);
    design.addCommand(9, ZRF.LITERAL,	1);	// true
    design.addCommand(9, ZRF.JUMP,	2);
    design.addCommand(9, ZRF.LITERAL,	0);	// false
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-13);
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	6);
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	3);
    design.addCommand(10, ZRF.LITERAL,	1);	// true
    design.addCommand(10, ZRF.JUMP,	2);
    design.addCommand(10, ZRF.LITERAL,	0);	// false
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	4);
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.JUMP,	-13);
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.IF,	4);
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.IF,	6);
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.IF,	3);
    design.addCommand(11, ZRF.LITERAL,	1);	// true
    design.addCommand(11, ZRF.JUMP,	2);
    design.addCommand(11, ZRF.LITERAL,	0);	// false
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.IF,	4);
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.JUMP,	-13);
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.IF,	4);
    design.addCommand(11, ZRF.PARAM,	2);	// $3
    design.addCommand(11, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	6);
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	3);
    design.addCommand(12, ZRF.LITERAL,	1);	// true
    design.addCommand(12, ZRF.JUMP,	2);
    design.addCommand(12, ZRF.LITERAL,	0);	// false
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	4);
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.JUMP,	-13);
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.IF,	4);
    design.addCommand(12, ZRF.PARAM,	2);	// $3
    design.addCommand(12, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.IF,	6);
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.IF,	3);
    design.addCommand(13, ZRF.LITERAL,	1);	// true
    design.addCommand(13, ZRF.JUMP,	2);
    design.addCommand(13, ZRF.LITERAL,	0);	// false
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.IF,	4);
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.JUMP,	-13);
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.IF,	4);
    design.addCommand(13, ZRF.PARAM,	2);	// $3
    design.addCommand(13, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	6);
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.LITERAL,	1);	// true
    design.addCommand(14, ZRF.JUMP,	2);
    design.addCommand(14, ZRF.LITERAL,	0);	// false
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	4);
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.JUMP,	-13);
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.IF,	4);
    design.addCommand(14, ZRF.PARAM,	2);	// $3
    design.addCommand(14, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.IF,	6);
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.IF,	3);
    design.addCommand(15, ZRF.LITERAL,	1);	// true
    design.addCommand(15, ZRF.JUMP,	2);
    design.addCommand(15, ZRF.LITERAL,	0);	// false
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.IF,	4);
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.JUMP,	-13);
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.IF,	4);
    design.addCommand(15, ZRF.PARAM,	2);	// $3
    design.addCommand(15, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [7, 7, 7], 0);
    design.addMove(0, 1, [1, 1, 1], 0);
    design.addMove(0, 2, [4, 4, 4], 0);
    design.addMove(0, 3, [3, 3, 3], 0);
    design.addMove(0, 4, [6, 6, 6], 0);
    design.addMove(0, 5, [0, 0, 0], 0);
    design.addMove(0, 6, [2, 2, 2], 0);
    design.addMove(0, 7, [5, 5, 5], 0);

    design.addPiece("King", 1);
    design.addMove(1, 8, [7, 7, 7], 0);
    design.addMove(1, 9, [1, 1, 1], 0);
    design.addMove(1, 10, [4, 4, 4], 0);
    design.addMove(1, 11, [3, 3, 3], 0);
    design.addMove(1, 12, [6, 6, 6], 0);
    design.addMove(1, 13, [0, 0, 0], 0);
    design.addMove(1, 14, [2, 2, 2], 0);
    design.addMove(1, 15, [5, 5, 5], 0);

    design.setup("Blue", "King", 22);
    design.setup("Blue", "Man", 20);
    design.setup("Blue", "Man", 21);
    design.setup("Blue", "Man", 23);
    design.setup("Blue", "Man", 24);
    design.setup("Red", "King", 2);
    design.setup("Red", "Man", 0);
    design.setup("Red", "Man", 1);
    design.setup("Red", "Man", 3);
    design.setup("Red", "Man", 4);

    design.goal(0, "Blue", "King", [12]);
    design.goal(0, "Red", "King", [12]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedMan", "Red Man");
    view.defPiece("BlueMan", "Blue Man");
    view.defPiece("RedKing", "Red King");
    view.defPiece("BlueKing", "Blue King");
 
    view.defPosition("a5", 1, 1, 54, 54);
    view.defPosition("b5", 55, 1, 54, 54);
    view.defPosition("c5", 109, 1, 54, 54);
    view.defPosition("d5", 163, 1, 54, 54);
    view.defPosition("e5", 217, 1, 54, 54);
    view.defPosition("a4", 1, 55, 54, 54);
    view.defPosition("b4", 55, 55, 54, 54);
    view.defPosition("c4", 109, 55, 54, 54);
    view.defPosition("d4", 163, 55, 54, 54);
    view.defPosition("e4", 217, 55, 54, 54);
    view.defPosition("a3", 1, 109, 54, 54);
    view.defPosition("b3", 55, 109, 54, 54);
    view.defPosition("c3", 109, 109, 54, 54);
    view.defPosition("d3", 163, 109, 54, 54);
    view.defPosition("e3", 217, 109, 54, 54);
    view.defPosition("a2", 1, 163, 54, 54);
    view.defPosition("b2", 55, 163, 54, 54);
    view.defPosition("c2", 109, 163, 54, 54);
    view.defPosition("d2", 163, 163, 54, 54);
    view.defPosition("e2", 217, 163, 54, 54);
    view.defPosition("a1", 1, 217, 54, 54);
    view.defPosition("b1", 55, 217, 54, 54);
    view.defPosition("c1", 109, 217, 54, 54);
    view.defPosition("d1", 163, 217, 54, 54);
    view.defPosition("e1", 217, 217, 54, 54);
}
