Dagaz.Controller.persistense = "none";
Dagaz.View.CHECK_CANVAS = true;

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
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("N", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addTurn(1, [1]);
    design.repeatMark();
    design.addTurn(2, [0]);
    design.addTurn(2, [1]);
    design.addTurn(1, [0]);
    design.addTurn(1, [1]);

    design.setupSelector(4);

    design.addPosition("a5", [6, 5, 0, 1, 0, 0, 0, 0], 1);
    design.addPosition("b5", [6, 5, 4, 1, -1, 0, 0, 0], 1);
    design.addPosition("c5", [6, 5, 4, 1, -1, 0, 0, 0], 1);
    design.addPosition("d5", [6, 5, 4, 1, -1, 0, 0, 0], 1);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, 0, 0], 1);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5], 1);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5], 1);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5], 1);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5], 1);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5], 1);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5], 1);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5], 1);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5], 1);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5], 1);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5], 1);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5], 1);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5], 1);

    design.addZone("goal-zone", 1, [20, 21, 22, 23, 24], 1);
    design.addZone("goal-zone", 2, [0, 1, 2, 3, 4], 1);

    design.addPosition("a5", [8, 7, 0, 1, 0, 0, 0, 0], 2);
    design.addPosition("b5", [8, 7, 6, 1, -1, 0, 0, 0], 2);
    design.addPosition("c5", [8, 7, 6, 1, -1, 0, 0, 0], 2);
    design.addPosition("d5", [8, 7, 6, 1, -1, 0, 0, 0], 2);
    design.addPosition("e5", [8, 7, 6, 1, -1, 0, 0, 0], 2);
    design.addPosition("f5", [8, 7, 6, 1, -1, 0, 0, 0], 2);
    design.addPosition("g5", [0, 7, 6, 0, -1, 0, 0, 0], 2);
    design.addPosition("a4", [8, 7, 0, 1, 0, -6, 0, -7], 2);
    design.addPosition("b4", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("c4", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("d4", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("e4", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("f4", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("g4", [0, 7, 6, 0, -1, 0, -8, -7], 2);
    design.addPosition("a3", [8, 7, 0, 1, 0, -6, 0, -7], 2);
    design.addPosition("b3", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("c3", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("d3", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("e3", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("f3", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("g3", [0, 7, 6, 0, -1, 0, -8, -7], 2);
    design.addPosition("a2", [8, 7, 0, 1, 0, -6, 0, -7], 2);
    design.addPosition("b2", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("c2", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("d2", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("e2", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("f2", [8, 7, 6, 1, -1, -6, -8, -7], 2);
    design.addPosition("g2", [0, 7, 6, 0, -1, 0, -8, -7], 2);
    design.addPosition("a1", [0, 0, 0, 1, 0, -6, 0, -7], 2);
    design.addPosition("b1", [0, 0, 0, 1, -1, -6, -8, -7], 2);
    design.addPosition("c1", [0, 0, 0, 1, -1, -6, -8, -7], 2);
    design.addPosition("d1", [0, 0, 0, 1, -1, -6, -8, -7], 2);
    design.addPosition("e1", [0, 0, 0, 1, -1, -6, -8, -7], 2);
    design.addPosition("f1", [0, 0, 0, 1, -1, -6, -8, -7], 2);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -8, -7], 2);

    design.addZone("goal-zone", 1, [28, 29, 30, 31, 32, 33, 34], 2);
    design.addZone("goal-zone", 2, [0, 1, 2, 3, 4, 5, 6], 2);

    design.addPosition("a7", [6, 5, 0, 1, 0, 0, 0, 0], 3);
    design.addPosition("b7", [6, 5, 4, 1, -1, 0, 0, 0], 3);
    design.addPosition("c7", [6, 5, 4, 1, -1, 0, 0, 0], 3);
    design.addPosition("d7", [6, 5, 4, 1, -1, 0, 0, 0], 3);
    design.addPosition("e7", [0, 5, 4, 0, -1, 0, 0, 0], 3);
    design.addPosition("a6", [6, 5, 0, 1, 0, -4, 0, -5], 3);
    design.addPosition("b6", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("c6", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("d6", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("e6", [0, 5, 4, 0, -1, 0, -6, -5], 3);
    design.addPosition("a5", [6, 5, 0, 1, 0, -4, 0, -5], 3);
    design.addPosition("b5", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("c5", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("d5", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, -6, -5], 3);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5], 3);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5], 3);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5], 3);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5], 3);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5], 3);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5], 3);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5], 3);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5], 3);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5], 3);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5], 3);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5], 3);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5], 3);

    design.addZone("goal-zone", 1, [30, 31, 32, 33, 34], 3);
    design.addZone("goal-zone", 2, [0, 1, 2, 3, 4], 3);

    design.addPosition("a7", [8, 7, 0, 1, 0, 0, 0, 0], 4);
    design.addPosition("b7", [8, 7, 6, 1, -1, 0, 0, 0], 4);
    design.addPosition("c7", [8, 7, 6, 1, -1, 0, 0, 0], 4);
    design.addPosition("d7", [8, 7, 6, 1, -1, 0, 0, 0], 4);
    design.addPosition("e7", [8, 7, 6, 1, -1, 0, 0, 0], 4);
    design.addPosition("f7", [8, 7, 6, 1, -1, 0, 0, 0], 4);
    design.addPosition("g7", [0, 7, 6, 0, -1, 0, 0, 0], 4);
    design.addPosition("a6", [8, 7, 0, 1, 0, -6, 0, -7], 4);
    design.addPosition("b6", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("c6", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("d6", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("e6", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("f6", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("g6", [0, 7, 6, 0, -1, 0, -8, -7], 4);
    design.addPosition("a5", [8, 7, 0, 1, 0, -6, 0, -7], 4);
    design.addPosition("b5", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("c5", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("d5", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("e5", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("f5", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("g5", [0, 7, 6, 0, -1, 0, -8, -7], 4);
    design.addPosition("a4", [8, 7, 0, 1, 0, -6, 0, -7], 4);
    design.addPosition("b4", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("c4", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("d4", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("e4", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("f4", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("g4", [0, 7, 6, 0, -1, 0, -8, -7], 4);
    design.addPosition("a3", [8, 7, 0, 1, 0, -6, 0, -7], 4);
    design.addPosition("b3", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("c3", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("d3", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("e3", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("f3", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("g3", [0, 7, 6, 0, -1, 0, -8, -7], 4);
    design.addPosition("a2", [8, 7, 0, 1, 0, -6, 0, -7], 4);
    design.addPosition("b2", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("c2", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("d2", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("e2", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("f2", [8, 7, 6, 1, -1, -6, -8, -7], 4);
    design.addPosition("g2", [0, 7, 6, 0, -1, 0, -8, -7], 4);
    design.addPosition("a1", [0, 0, 0, 1, 0, -6, 0, -7], 4);
    design.addPosition("b1", [0, 0, 0, 1, -1, -6, -8, -7], 4);
    design.addPosition("c1", [0, 0, 0, 1, -1, -6, -8, -7], 4);
    design.addPosition("d1", [0, 0, 0, 1, -1, -6, -8, -7], 4);
    design.addPosition("e1", [0, 0, 0, 1, -1, -6, -8, -7], 4);
    design.addPosition("f1", [0, 0, 0, 1, -1, -6, -8, -7], 4);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -8, -7], 4);

    design.addZone("goal-zone", 1, [42, 43, 44, 45, 46, 47, 48], 4);
    design.addZone("goal-zone", 2, [0, 1, 2, 3, 4, 5, 6], 4);

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
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	6);	// name
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
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
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
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.ON_BOARD_DIR,	5);	// name
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
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.ON_BOARD_DIR,	4);	// name
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
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.ON_BOARD_DIR,	2);	// name
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
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.ON_BOARD_DIR,	1);	// name
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
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.ON_BOARD_DIR,	0);	// name
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
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(8, ZRF.IF,	3);
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.ON_BOARD_DIR,	6);	// name
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
    design.addCommand(9, ZRF.IF,	3);
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.ON_BOARD_DIR,	3);	// name
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
    design.addCommand(10, ZRF.IF,	3);
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.ON_BOARD_DIR,	5);	// name
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
    design.addCommand(11, ZRF.IF,	3);
    design.addCommand(11, ZRF.PARAM,	2);	// $3
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.ON_BOARD_DIR,	4);	// name
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
    design.addCommand(12, ZRF.IF,	3);
    design.addCommand(12, ZRF.PARAM,	2);	// $3
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.ON_BOARD_DIR,	2);	// name
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
    design.addCommand(13, ZRF.IF,	3);
    design.addCommand(13, ZRF.PARAM,	2);	// $3
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.ON_BOARD_DIR,	1);	// name
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
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.PARAM,	2);	// $3
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.ON_BOARD_DIR,	0);	// name
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
    design.addCommand(15, ZRF.IF,	3);
    design.addCommand(15, ZRF.PARAM,	2);	// $3
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addPiece("Ball", 0);
    design.addMove(0, 0, [7, 7, 1], 0);
    design.addMove(0, 1, [6, 6, 0], 0);
    design.addMove(0, 2, [3, 3, 4], 0);
    design.addMove(0, 3, [5, 5, 2], 0);
    design.addMove(0, 4, [4, 4, 3], 0);
    design.addMove(0, 5, [2, 2, 5], 0);
    design.addMove(0, 6, [1, 1, 7], 0);
    design.addMove(0, 7, [0, 0, 6], 0);

    design.addPiece("Man", 1);
    design.addMove(1, 8, [7, 7, 1], 1);
    design.addMove(1, 9, [6, 6, 0], 1);
    design.addMove(1, 10, [3, 3, 4], 1);
    design.addMove(1, 11, [5, 5, 2], 1);
    design.addMove(1, 12, [4, 4, 3], 1);
    design.addMove(1, 13, [2, 2, 5], 1);
    design.addMove(1, 14, [1, 1, 7], 1);
    design.addMove(1, 15, [0, 0, 6], 1);

    design.setup("N", "Ball", 12, 1);
    design.setup("White", "Man", 20, 1);
    design.setup("White", "Man", 21, 1);
    design.setup("White", "Man", 22, 1);
    design.setup("White", "Man", 23, 1);
    design.setup("White", "Man", 24, 1);
    design.setup("Black", "Man", 0, 1);
    design.setup("Black", "Man", 1, 1);
    design.setup("Black", "Man", 2, 1);
    design.setup("Black", "Man", 3, 1);
    design.setup("Black", "Man", 4, 1);

    design.setup("N", "Ball", 17, 2);
    design.setup("White", "Man", 28, 2);
    design.setup("White", "Man", 29, 2);
    design.setup("White", "Man", 30, 2);
    design.setup("White", "Man", 31, 2);
    design.setup("White", "Man", 32, 2);
    design.setup("White", "Man", 33, 2);
    design.setup("White", "Man", 34, 2);
    design.setup("Black", "Man", 0, 2);
    design.setup("Black", "Man", 1, 2);
    design.setup("Black", "Man", 2, 2);
    design.setup("Black", "Man", 3, 2);
    design.setup("Black", "Man", 4, 2);
    design.setup("Black", "Man", 5, 2);
    design.setup("Black", "Man", 6, 2);

    design.setup("N", "Ball", 17, 3);
    design.setup("White", "Man", 30, 3);
    design.setup("White", "Man", 31, 3);
    design.setup("White", "Man", 32, 3);
    design.setup("White", "Man", 33, 3);
    design.setup("White", "Man", 34, 3);
    design.setup("Black", "Man", 0, 3);
    design.setup("Black", "Man", 1, 3);
    design.setup("Black", "Man", 2, 3);
    design.setup("Black", "Man", 3, 3);
    design.setup("Black", "Man", 4, 3);

    design.setup("N", "Ball", 24, 4);
    design.setup("White", "Man", 42, 4);
    design.setup("White", "Man", 43, 4);
    design.setup("White", "Man", 44, 4);
    design.setup("White", "Man", 45, 4);
    design.setup("White", "Man", 46, 4);
    design.setup("White", "Man", 47, 4);
    design.setup("White", "Man", 48, 4);
    design.setup("Black", "Man", 0, 4);
    design.setup("Black", "Man", 1, 4);
    design.setup("Black", "Man", 2, 4);
    design.setup("Black", "Man", 3, 4);
    design.setup("Black", "Man", 4, 4);
    design.setup("Black", "Man", 5, 4);
    design.setup("Black", "Man", 6, 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board_1", 0, 0, 1);
    view.defBoard("Board_2", 0, 0, 2);
    view.defBoard("Board_3", 0, 0, 3);
    view.defBoard("Board_4", 0, 0, 4);
    view.defPiece("NBall", "N Ball");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("a5", 2, 2, 50, 50, 1);
    view.defPosition("b5", 52, 2, 50, 50, 1);
    view.defPosition("c5", 102, 2, 50, 50, 1);
    view.defPosition("d5", 152, 2, 50, 50, 1);
    view.defPosition("e5", 202, 2, 50, 50, 1);
    view.defPosition("a4", 2, 52, 50, 50, 1);
    view.defPosition("b4", 52, 52, 50, 50, 1);
    view.defPosition("c4", 102, 52, 50, 50, 1);
    view.defPosition("d4", 152, 52, 50, 50, 1);
    view.defPosition("e4", 202, 52, 50, 50, 1);
    view.defPosition("a3", 2, 102, 50, 50, 1);
    view.defPosition("b3", 52, 102, 50, 50, 1);
    view.defPosition("c3", 102, 102, 50, 50, 1);
    view.defPosition("d3", 152, 102, 50, 50, 1);
    view.defPosition("e3", 202, 102, 50, 50, 1);
    view.defPosition("a2", 2, 152, 50, 50, 1);
    view.defPosition("b2", 52, 152, 50, 50, 1);
    view.defPosition("c2", 102, 152, 50, 50, 1);
    view.defPosition("d2", 152, 152, 50, 50, 1);
    view.defPosition("e2", 202, 152, 50, 50, 1);
    view.defPosition("a1", 2, 202, 50, 50, 1);
    view.defPosition("b1", 52, 202, 50, 50, 1);
    view.defPosition("c1", 102, 202, 50, 50, 1);
    view.defPosition("d1", 152, 202, 50, 50, 1);
    view.defPosition("e1", 202, 202, 50, 50, 1);

    view.defPosition("a5", 2, 2, 50, 50, 2);
    view.defPosition("b5", 52, 2, 50, 50, 2);
    view.defPosition("c5", 102, 2, 50, 50, 2);
    view.defPosition("d5", 152, 2, 50, 50, 2);
    view.defPosition("e5", 202, 2, 50, 50, 2);
    view.defPosition("f5", 252, 2, 50, 50, 2);
    view.defPosition("g5", 302, 2, 50, 50, 2);
    view.defPosition("a4", 2, 52, 50, 50, 2);
    view.defPosition("b4", 52, 52, 50, 50, 2);
    view.defPosition("c4", 102, 52, 50, 50, 2);
    view.defPosition("d4", 152, 52, 50, 50, 2);
    view.defPosition("e4", 202, 52, 50, 50, 2);
    view.defPosition("f4", 252, 52, 50, 50, 2);
    view.defPosition("g4", 302, 52, 50, 50, 2);
    view.defPosition("a3", 2, 102, 50, 50, 2);
    view.defPosition("b3", 52, 102, 50, 50, 2);
    view.defPosition("c3", 102, 102, 50, 50, 2);
    view.defPosition("d3", 152, 102, 50, 50, 2);
    view.defPosition("e3", 202, 102, 50, 50, 2);
    view.defPosition("f3", 252, 102, 50, 50, 2);
    view.defPosition("g3", 302, 102, 50, 50, 2);
    view.defPosition("a2", 2, 152, 50, 50, 2);
    view.defPosition("b2", 52, 152, 50, 50, 2);
    view.defPosition("c2", 102, 152, 50, 50, 2);
    view.defPosition("d2", 152, 152, 50, 50, 2);
    view.defPosition("e2", 202, 152, 50, 50, 2);
    view.defPosition("f2", 252, 152, 50, 50, 2);
    view.defPosition("g2", 302, 152, 50, 50, 2);
    view.defPosition("a1", 2, 202, 50, 50, 2);
    view.defPosition("b1", 52, 202, 50, 50, 2);
    view.defPosition("c1", 102, 202, 50, 50, 2);
    view.defPosition("d1", 152, 202, 50, 50, 2);
    view.defPosition("e1", 202, 202, 50, 50, 2);
    view.defPosition("f1", 252, 202, 50, 50, 2);
    view.defPosition("g1", 302, 202, 50, 50, 2);

    view.defPosition("a7", 2, 2, 50, 50, 3);
    view.defPosition("b7", 52, 2, 50, 50, 3);
    view.defPosition("c7", 102, 2, 50, 50, 3);
    view.defPosition("d7", 152, 2, 50, 50, 3);
    view.defPosition("e7", 202, 2, 50, 50, 3);
    view.defPosition("a6", 2, 52, 50, 50, 3);
    view.defPosition("b6", 52, 52, 50, 50, 3);
    view.defPosition("c6", 102, 52, 50, 50, 3);
    view.defPosition("d6", 152, 52, 50, 50, 3);
    view.defPosition("e6", 202, 52, 50, 50, 3);
    view.defPosition("a5", 2, 102, 50, 50, 3);
    view.defPosition("b5", 52, 102, 50, 50, 3);
    view.defPosition("c5", 102, 102, 50, 50, 3);
    view.defPosition("d5", 152, 102, 50, 50, 3);
    view.defPosition("e5", 202, 102, 50, 50, 3);
    view.defPosition("a4", 2, 152, 50, 50, 3);
    view.defPosition("b4", 52, 152, 50, 50, 3);
    view.defPosition("c4", 102, 152, 50, 50, 3);
    view.defPosition("d4", 152, 152, 50, 50, 3);
    view.defPosition("e4", 202, 152, 50, 50, 3);
    view.defPosition("a3", 2, 202, 50, 50, 3);
    view.defPosition("b3", 52, 202, 50, 50, 3);
    view.defPosition("c3", 102, 202, 50, 50, 3);
    view.defPosition("d3", 152, 202, 50, 50, 3);
    view.defPosition("e3", 202, 202, 50, 50, 3);
    view.defPosition("a2", 2, 252, 50, 50, 3);
    view.defPosition("b2", 52, 252, 50, 50, 3);
    view.defPosition("c2", 102, 252, 50, 50, 3);
    view.defPosition("d2", 152, 252, 50, 50, 3);
    view.defPosition("e2", 202, 252, 50, 50, 3);
    view.defPosition("a1", 2, 302, 50, 50, 3);
    view.defPosition("b1", 52, 302, 50, 50, 3);
    view.defPosition("c1", 102, 302, 50, 50, 3);
    view.defPosition("d1", 152, 302, 50, 50, 3);
    view.defPosition("e1", 202, 302, 50, 50, 3);

    view.defPosition("a7", 2, 2, 50, 50, 4);
    view.defPosition("b7", 52, 2, 50, 50, 4);
    view.defPosition("c7", 102, 2, 50, 50, 4);
    view.defPosition("d7", 152, 2, 50, 50, 4);
    view.defPosition("e7", 202, 2, 50, 50, 4);
    view.defPosition("f7", 252, 2, 50, 50, 4);
    view.defPosition("g7", 302, 2, 50, 50, 4);
    view.defPosition("a6", 2, 52, 50, 50, 4);
    view.defPosition("b6", 52, 52, 50, 50, 4);
    view.defPosition("c6", 102, 52, 50, 50, 4);
    view.defPosition("d6", 152, 52, 50, 50, 4);
    view.defPosition("e6", 202, 52, 50, 50, 4);
    view.defPosition("f6", 252, 52, 50, 50, 4);
    view.defPosition("g6", 302, 52, 50, 50, 4);
    view.defPosition("a5", 2, 102, 50, 50, 4);
    view.defPosition("b5", 52, 102, 50, 50, 4);
    view.defPosition("c5", 102, 102, 50, 50, 4);
    view.defPosition("d5", 152, 102, 50, 50, 4);
    view.defPosition("e5", 202, 102, 50, 50, 4);
    view.defPosition("f5", 252, 102, 50, 50, 4);
    view.defPosition("g5", 302, 102, 50, 50, 4);
    view.defPosition("a4", 2, 152, 50, 50, 4);
    view.defPosition("b4", 52, 152, 50, 50, 4);
    view.defPosition("c4", 102, 152, 50, 50, 4);
    view.defPosition("d4", 152, 152, 50, 50, 4);
    view.defPosition("e4", 202, 152, 50, 50, 4);
    view.defPosition("f4", 252, 152, 50, 50, 4);
    view.defPosition("g4", 302, 152, 50, 50, 4);
    view.defPosition("a3", 2, 202, 50, 50, 4);
    view.defPosition("b3", 52, 202, 50, 50, 4);
    view.defPosition("c3", 102, 202, 50, 50, 4);
    view.defPosition("d3", 152, 202, 50, 50, 4);
    view.defPosition("e3", 202, 202, 50, 50, 4);
    view.defPosition("f3", 252, 202, 50, 50, 4);
    view.defPosition("g3", 302, 202, 50, 50, 4);
    view.defPosition("a2", 2, 252, 50, 50, 4);
    view.defPosition("b2", 52, 252, 50, 50, 4);
    view.defPosition("c2", 102, 252, 50, 50, 4);
    view.defPosition("d2", 152, 252, 50, 50, 4);
    view.defPosition("e2", 202, 252, 50, 50, 4);
    view.defPosition("f2", 252, 252, 50, 50, 4);
    view.defPosition("g2", 302, 252, 50, 50, 4);
    view.defPosition("a1", 2, 302, 50, 50, 4);
    view.defPosition("b1", 52, 302, 50, 50, 4);
    view.defPosition("c1", 102, 302, 50, 50, 4);
    view.defPosition("d1", 152, 302, 50, 50, 4);
    view.defPosition("e1", 202, 302, 50, 50, 4);
    view.defPosition("f1", 252, 302, 50, 50, 4);
    view.defPosition("g1", 302, 302, 50, 50, 4);
}
