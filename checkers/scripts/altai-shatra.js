Dagaz.AI.g_flags = 0;

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
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("deferred-captures", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7
    design.addDirection("nx"); // 8
    design.addDirection("rs"); // 9

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1, 8, 9]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1, 8, 9]);

    design.addPosition("a14", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b14", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c14", [8, 7, 0, 1, 0, 0, 0, 0, 32, 1]);
    design.addPosition("d14", [8, 7, 6, 1, -1, 0, 0, 0, 31, 1]);
    design.addPosition("e14", [0, 7, 6, 0, -1, 0, 0, 0, 30, 5]);
    design.addPosition("f14", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g14", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a13", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b13", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c13", [8, 7, 0, 1, 0, -6, 0, -7, 25, 1]);
    design.addPosition("d13", [8, 7, 6, 1, -1, -6, -8, -7, 24, 1]);
    design.addPosition("e13", [0, 7, 6, 0, -1, 0, -8, -7, 23, 5]);
    design.addPosition("f13", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g13", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a12", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b12", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c12", [8, 0, 0, 1, 0, -6, 0, -7, 18, 1]);
    design.addPosition("d12", [0, 7, 0, 1, -1, -6, -8, -7, 17, 1]);
    design.addPosition("e12", [0, 0, 6, 0, -1, 0, -8, -7, 16, 0]);
    design.addPosition("f12", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g12", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d11", [8, 7, 6, 0, 0, -6, -8, -7, 10, 0]);
    design.addPosition("e11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [8, 7, 0, 1, 0, 0, 0, 0, 7, 0]);
    design.addPosition("b10", [8, 7, 6, 1, -1, 0, 0, 0, 7, 0]);
    design.addPosition("c10", [8, 7, 6, 1, -1, -6, 0, 0, 7, 0]);
    design.addPosition("d10", [8, 7, 6, 1, -1, 0, 0, -7, 7, 0]);
    design.addPosition("e10", [8, 7, 6, 1, -1, 0, -8, 0, 7, 0]);
    design.addPosition("f10", [8, 7, 6, 1, -1, 0, 0, 0, 7, 0]);
    design.addPosition("g10", [0, 7, 6, 0, -1, 0, 0, 0, 7, 0]);
    design.addPosition("a9", [8, 7, 0, 1, 0, -6, 0, -7, 7, 0]);
    design.addPosition("b9", [8, 7, 6, 1, -1, -6, -8, -7, 7, 0]);
    design.addPosition("c9", [8, 7, 6, 1, -1, -6, -8, -7, 7, 0]);
    design.addPosition("d9", [8, 7, 6, 1, -1, -6, -8, -7, 7, 0]);
    design.addPosition("e9", [8, 7, 6, 1, -1, -6, -8, -7, 7, 0]);
    design.addPosition("f9", [8, 7, 6, 1, -1, -6, -8, -7, 7, 0]);
    design.addPosition("g9", [0, 7, 6, 0, -1, 0, -8, -7, 7, 0]);
    design.addPosition("a8", [8, 7, 0, 1, 0, -6, 0, -7, 0, 0]);
    design.addPosition("b8", [8, 7, 6, 1, -1, -6, -8, -7, -15, 0]);
    design.addPosition("c8", [8, 7, 6, 1, -1, -6, -8, -7, -15, 0]);
    design.addPosition("d8", [8, 7, 6, 1, -1, -6, -8, -7, -15, 0]);
    design.addPosition("e8", [8, 7, 6, 1, -1, -6, -8, -7, -15, 0]);
    design.addPosition("f8", [8, 7, 6, 1, -1, -6, -8, -7, -15, 0]);
    design.addPosition("g8", [0, 7, 6, 0, -1, 0, -8, -7, -15, 0]);
    design.addPosition("a7", [8, 7, 0, 1, 0, -6, 0, -7, 15, 0]);
    design.addPosition("b7", [8, 7, 6, 1, -1, -6, -8, -7, 15, 0]);
    design.addPosition("c7", [8, 7, 6, 1, -1, -6, -8, -7, 15, 0]);
    design.addPosition("d7", [8, 7, 6, 1, -1, -6, -8, -7, 15, 0]);
    design.addPosition("e7", [8, 7, 6, 1, -1, -6, -8, -7, 15, 0]);
    design.addPosition("f7", [8, 7, 6, 1, -1, -6, -8, -7, 15, 0]);
    design.addPosition("g7", [0, 7, 6, 0, -1, 0, -8, -7, 0, 0]);
    design.addPosition("a6", [8, 7, 0, 1, 0, -6, 0, -7, -7, 0]);
    design.addPosition("b6", [8, 7, 6, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("c6", [8, 7, 6, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("d6", [8, 7, 6, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("e6", [8, 7, 6, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("f6", [8, 7, 6, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("g6", [0, 7, 6, 0, -1, 0, -8, -7, -7, 0]);
    design.addPosition("a5", [0, 0, 0, 1, 0, -6, 0, -7, -7, 0]);
    design.addPosition("b5", [0, 0, 0, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("c5", [8, 0, 0, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("d5", [0, 7, 0, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("e5", [0, 0, 6, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("f5", [0, 0, 0, 1, -1, -6, -8, -7, -7, 0]);
    design.addPosition("g5", [0, 0, 0, 0, -1, 0, -8, -7, -7, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [8, 7, 6, 0, 0, -6, -8, -7, -10, 0]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [8, 7, 0, 1, 0, -6, 0, 0, -16, 0]);
    design.addPosition("d3", [8, 7, 6, 1, -1, 0, 0, -7, -17, -1]);
    design.addPosition("e3", [0, 7, 6, 0, -1, 0, -8, 0, -18, -1]);
    design.addPosition("f3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [8, 7, 0, 1, 0, -6, 0, -7, -23, -5]);
    design.addPosition("d2", [8, 7, 6, 1, -1, -6, -8, -7, -24, -1]);
    design.addPosition("e2", [0, 7, 6, 0, -1, 0, -8, -7, -25, -1]);
    design.addPosition("f2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 1, 0, -6, 0, -7, -30, -5]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -6, -8, -7, -31, -1]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -8, -7, -32, -1]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("fortress", 1, [93, 86, 79, 94, 87, 80, 95, 88, 81, 16, 9, 2, 17, 10, 3, 18, 11, 4, 73, 24]);
    design.addZone("fortress", 2, [93, 86, 79, 94, 87, 80, 95, 88, 81, 16, 9, 2, 17, 10, 3, 18, 11, 4, 73, 24]);
    design.addZone("home", 1, [93, 86, 79, 94, 87, 80, 95, 88, 81]);
    design.addZone("home", 2, [16, 9, 2, 17, 10, 3, 18, 11, 4]);
    design.addZone("gate", 1, [73]);
    design.addZone("gate", 2, [24]);
    design.addZone("promotion", 1, [2, 3, 4]);
    design.addZone("promotion", 2, [93, 94, 95]);

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
    design.addCommand(0, ZRF.IN_ZONE,	3);	// promotion
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	2);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	3);
    design.addCommand(0, ZRF.MODE,	1);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	1);	// home
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	3);	// promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	2);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-11);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.MODE,	1);	// continue-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	18);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-6);
    design.addCommand(5, ZRF.FUNCTION,	26);	// capture
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FORK,	4);
    design.addCommand(5, ZRF.MODE,	1);	// continue-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-19);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-5);
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	18);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-6);
    design.addCommand(6, ZRF.FUNCTION,	26);	// capture
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FORK,	4);
    design.addCommand(6, ZRF.MODE,	1);	// continue-type
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-19);
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Man", 0, 2);
    design.addMove(0, 0, [7, 7], 1);
    design.addMove(0, 0, [3, 3], 1);
    design.addMove(0, 0, [4, 4], 1);
    design.addMove(0, 0, [1, 1], 1);
    design.addMove(0, 0, [6, 6], 1);
    design.addMove(0, 0, [5, 5], 1);
    design.addMove(0, 0, [2, 2], 1);
    design.addMove(0, 0, [0, 0], 1);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 2, [8, 8], 0);

    design.addPiece("King", 1, 1000);
    design.addMove(1, 3, [7, 7], 1);
    design.addMove(1, 3, [3, 3], 1);
    design.addMove(1, 3, [4, 4], 1);
    design.addMove(1, 3, [1, 1], 1);
    design.addMove(1, 3, [6, 6], 1);
    design.addMove(1, 3, [5, 5], 1);
    design.addMove(1, 3, [2, 2], 1);
    design.addMove(1, 3, [0, 0], 1);
    design.addMove(1, 3, [7, 7], 0);
    design.addMove(1, 3, [3, 3], 0);
    design.addMove(1, 3, [4, 4], 0);
    design.addMove(1, 3, [1, 1], 0);
    design.addMove(1, 3, [6, 6], 0);
    design.addMove(1, 3, [5, 5], 0);
    design.addMove(1, 3, [2, 2], 0);
    design.addMove(1, 3, [0, 0], 0);
    design.addMove(1, 4, [7], 0);
    design.addMove(1, 4, [3], 0);
    design.addMove(1, 4, [4], 0);
    design.addMove(1, 4, [1], 0);
    design.addMove(1, 4, [6], 0);
    design.addMove(1, 4, [5], 0);
    design.addMove(1, 4, [2], 0);
    design.addMove(1, 4, [0], 0);

    design.addPiece("Queen", 2, 100);
    design.addMove(2, 5, [7, 7, 7, 7, 7], 1);
    design.addMove(2, 5, [3, 3, 3, 3, 3], 1);
    design.addMove(2, 5, [4, 4, 4, 4, 4], 1);
    design.addMove(2, 5, [1, 1, 1, 1, 1], 1);
    design.addMove(2, 5, [6, 6, 6, 6, 6], 1);
    design.addMove(2, 5, [5, 5, 5, 5, 5], 1);
    design.addMove(2, 5, [2, 2, 2, 2, 2], 1);
    design.addMove(2, 5, [0, 0, 0, 0, 0], 1);
    design.addMove(2, 6, [7, 7, 7, 7, 7], 0);
    design.addMove(2, 6, [3, 3, 3, 3, 3], 0);
    design.addMove(2, 6, [4, 4, 4, 4, 4], 0);
    design.addMove(2, 6, [1, 1, 1, 1, 1], 0);
    design.addMove(2, 6, [6, 6, 6, 6, 6], 0);
    design.addMove(2, 6, [5, 5, 5, 5, 5], 0);
    design.addMove(2, 6, [2, 2, 2, 2, 2], 0);
    design.addMove(2, 6, [0, 0, 0, 0, 0], 0);
    design.addMove(2, 7, [7, 7], 0);
    design.addMove(2, 7, [3, 3], 0);
    design.addMove(2, 7, [4, 4], 0);
    design.addMove(2, 7, [1, 1], 0);
    design.addMove(2, 7, [6, 6], 0);
    design.addMove(2, 7, [5, 5], 0);
    design.addMove(2, 7, [2, 2], 0);
    design.addMove(2, 7, [0, 0], 0);
    design.addMove(2, 2, [8, 8], 0);

    design.setup("White", "Man", 63);
    design.setup("White", "Man", 64);
    design.setup("White", "Man", 65);
    design.setup("White", "Man", 66);
    design.setup("White", "Man", 67);
    design.setup("White", "Man", 68);
    design.setup("White", "Man", 69);
    design.setup("White", "Man", 56);
    design.setup("White", "Man", 57);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 59);
    design.setup("White", "Man", 60);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 62);
    design.setup("White", "Man", 93);
    design.setup("White", "Man", 86);
    design.setup("White", "Man", 95);
    design.setup("White", "Man", 88);
    design.setup("White", "Man", 79);
    design.setup("White", "Man", 81);
    design.setup("White", "Man", 87);
    design.setup("White", "Man", 80);
    design.setup("White", "Man", 94);
    design.setup("White", "King", 73);
    design.setup("Black", "Man", 28);
    design.setup("Black", "Man", 29);
    design.setup("Black", "Man", 30);
    design.setup("Black", "Man", 31);
    design.setup("Black", "Man", 32);
    design.setup("Black", "Man", 33);
    design.setup("Black", "Man", 34);
    design.setup("Black", "Man", 35);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 37);
    design.setup("Black", "Man", 38);
    design.setup("Black", "Man", 39);
    design.setup("Black", "Man", 40);
    design.setup("Black", "Man", 41);
    design.setup("Black", "Man", 2);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 3);
    design.setup("Black", "King", 24);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
 
    view.defPosition("a14", 2, 2, 50, 50);
    view.defPosition("b14", 52, 2, 50, 50);
    view.defPosition("c14", 102, 2, 50, 50);
    view.defPosition("d14", 152, 2, 50, 50);
    view.defPosition("e14", 202, 2, 50, 50);
    view.defPosition("f14", 252, 2, 50, 50);
    view.defPosition("g14", 302, 2, 50, 50);
    view.defPosition("a13", 2, 52, 50, 50);
    view.defPosition("b13", 52, 52, 50, 50);
    view.defPosition("c13", 102, 52, 50, 50);
    view.defPosition("d13", 152, 52, 50, 50);
    view.defPosition("e13", 202, 52, 50, 50);
    view.defPosition("f13", 252, 52, 50, 50);
    view.defPosition("g13", 302, 52, 50, 50);
    view.defPosition("a12", 2, 102, 50, 50);
    view.defPosition("b12", 52, 102, 50, 50);
    view.defPosition("c12", 102, 102, 50, 50);
    view.defPosition("d12", 152, 102, 50, 50);
    view.defPosition("e12", 202, 102, 50, 50);
    view.defPosition("f12", 252, 102, 50, 50);
    view.defPosition("g12", 302, 102, 50, 50);
    view.defPosition("a11", 2, 152, 50, 50);
    view.defPosition("b11", 52, 152, 50, 50);
    view.defPosition("c11", 102, 152, 50, 50);
    view.defPosition("d11", 152, 152, 50, 50);
    view.defPosition("e11", 202, 152, 50, 50);
    view.defPosition("f11", 252, 152, 50, 50);
    view.defPosition("g11", 302, 152, 50, 50);
    view.defPosition("a10", 2, 202, 50, 50);
    view.defPosition("b10", 52, 202, 50, 50);
    view.defPosition("c10", 102, 202, 50, 50);
    view.defPosition("d10", 152, 202, 50, 50);
    view.defPosition("e10", 202, 202, 50, 50);
    view.defPosition("f10", 252, 202, 50, 50);
    view.defPosition("g10", 302, 202, 50, 50);
    view.defPosition("a9", 2, 252, 50, 50);
    view.defPosition("b9", 52, 252, 50, 50);
    view.defPosition("c9", 102, 252, 50, 50);
    view.defPosition("d9", 152, 252, 50, 50);
    view.defPosition("e9", 202, 252, 50, 50);
    view.defPosition("f9", 252, 252, 50, 50);
    view.defPosition("g9", 302, 252, 50, 50);
    view.defPosition("a8", 2, 302, 50, 50);
    view.defPosition("b8", 52, 302, 50, 50);
    view.defPosition("c8", 102, 302, 50, 50);
    view.defPosition("d8", 152, 302, 50, 50);
    view.defPosition("e8", 202, 302, 50, 50);
    view.defPosition("f8", 252, 302, 50, 50);
    view.defPosition("g8", 302, 302, 50, 50);
    view.defPosition("a7", 2, 352, 50, 50);
    view.defPosition("b7", 52, 352, 50, 50);
    view.defPosition("c7", 102, 352, 50, 50);
    view.defPosition("d7", 152, 352, 50, 50);
    view.defPosition("e7", 202, 352, 50, 50);
    view.defPosition("f7", 252, 352, 50, 50);
    view.defPosition("g7", 302, 352, 50, 50);
    view.defPosition("a6", 2, 402, 50, 50);
    view.defPosition("b6", 52, 402, 50, 50);
    view.defPosition("c6", 102, 402, 50, 50);
    view.defPosition("d6", 152, 402, 50, 50);
    view.defPosition("e6", 202, 402, 50, 50);
    view.defPosition("f6", 252, 402, 50, 50);
    view.defPosition("g6", 302, 402, 50, 50);
    view.defPosition("a5", 2, 452, 50, 50);
    view.defPosition("b5", 52, 452, 50, 50);
    view.defPosition("c5", 102, 452, 50, 50);
    view.defPosition("d5", 152, 452, 50, 50);
    view.defPosition("e5", 202, 452, 50, 50);
    view.defPosition("f5", 252, 452, 50, 50);
    view.defPosition("g5", 302, 452, 50, 50);
    view.defPosition("a4", 2, 502, 50, 50);
    view.defPosition("b4", 52, 502, 50, 50);
    view.defPosition("c4", 102, 502, 50, 50);
    view.defPosition("d4", 152, 502, 50, 50);
    view.defPosition("e4", 202, 502, 50, 50);
    view.defPosition("f4", 252, 502, 50, 50);
    view.defPosition("g4", 302, 502, 50, 50);
    view.defPosition("a3", 2, 552, 50, 50);
    view.defPosition("b3", 52, 552, 50, 50);
    view.defPosition("c3", 102, 552, 50, 50);
    view.defPosition("d3", 152, 552, 50, 50);
    view.defPosition("e3", 202, 552, 50, 50);
    view.defPosition("f3", 252, 552, 50, 50);
    view.defPosition("g3", 302, 552, 50, 50);
    view.defPosition("a2", 2, 602, 50, 50);
    view.defPosition("b2", 52, 602, 50, 50);
    view.defPosition("c2", 102, 602, 50, 50);
    view.defPosition("d2", 152, 602, 50, 50);
    view.defPosition("e2", 202, 602, 50, 50);
    view.defPosition("f2", 252, 602, 50, 50);
    view.defPosition("g2", 302, 602, 50, 50);
    view.defPosition("a1", 2, 652, 50, 50);
    view.defPosition("b1", 52, 652, 50, 50);
    view.defPosition("c1", 102, 652, 50, 50);
    view.defPosition("d1", 152, 652, 50, 50);
    view.defPosition("e1", 202, 652, 50, 50);
    view.defPosition("f1", 252, 652, 50, 50);
    view.defPosition("g1", 302, 652, 50, 50);
}
