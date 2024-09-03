Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("shared-pieces", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("Gold", [4, 5, 3, 2, 0, 1]);
    design.addPlayer("Silver", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e11", [0, 0, 0, 0, 0, 0]);
    design.addPosition("f11", [1, 11, 10, 0, 0, 0]);
    design.addPosition("g11", [1, 11, 10, 0, -1, 0]);
    design.addPosition("h11", [1, 11, 10, 0, -1, 0]);
    design.addPosition("i11", [1, 11, 10, 0, -1, 0]);
    design.addPosition("k11", [1, 11, 10, 0, -1, 0]);
    design.addPosition("l11", [0, 11, 10, 0, -1, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e10", [1, 11, 10, -10, 0, 0]);
    design.addPosition("f10", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g10", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h10", [1, 11, 10, -10, -1, -11]);
    design.addPosition("i10", [1, 11, 10, -10, -1, -11]);
    design.addPosition("k10", [1, 11, 10, -10, -1, -11]);
    design.addPosition("l10", [0, 11, 10, 0, -1, -11]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [1, 11, 10, -10, 0, 0]);
    design.addPosition("e9", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f9", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g9", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h9", [1, 11, 10, -10, -1, -11]);
    design.addPosition("i9", [1, 11, 10, -10, -1, -11]);
    design.addPosition("k9", [1, 11, 10, -10, -1, -11]);
    design.addPosition("l9", [0, 11, 10, 0, -1, -11]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [1, 11, 10, -10, 0, 0]);
    design.addPosition("d8", [1, 11, 10, -10, -1, -11]);
    design.addPosition("e8", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f8", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g8", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h8", [1, 11, 10, -10, -1, -11]);
    design.addPosition("i8", [1, 11, 10, -10, -1, -11]);
    design.addPosition("k8", [1, 11, 10, -10, -1, -11]);
    design.addPosition("l8", [0, 11, 10, 0, -1, -11]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [1, 11, 10, -10, 0, 0]);
    design.addPosition("c7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("d7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("e7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("i7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("k7", [1, 11, 10, -10, -1, -11]);
    design.addPosition("l7", [0, 11, 10, 0, -1, -11]);
    design.addPosition("a6", [1, 11, 0, -10, 0, 0]);
    design.addPosition("b6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("c6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("d6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("e6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("i6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("k6", [1, 11, 10, -10, -1, -11]);
    design.addPosition("l6", [0, 0, 10, 0, -1, -11]);
    design.addPosition("a5", [1, 11, 0, -10, 0, -11]);
    design.addPosition("b5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("c5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("d5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("e5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("i5", [1, 11, 10, -10, -1, -11]);
    design.addPosition("k5", [0, 0, 10, -10, -1, -11]);
    design.addPosition("l5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [1, 11, 0, -10, 0, -11]);
    design.addPosition("b4", [1, 11, 10, -10, -1, -11]);
    design.addPosition("c4", [1, 11, 10, -10, -1, -11]);
    design.addPosition("d4", [1, 11, 10, -10, -1, -11]);
    design.addPosition("e4", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f4", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g4", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h4", [1, 11, 10, -10, -1, -11]);
    design.addPosition("i4", [0, 0, 10, -10, -1, -11]);
    design.addPosition("k4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("l4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [1, 11, 0, -10, 0, -11]);
    design.addPosition("b3", [1, 11, 10, -10, -1, -11]);
    design.addPosition("c3", [1, 11, 10, -10, -1, -11]);
    design.addPosition("d3", [1, 11, 10, -10, -1, -11]);
    design.addPosition("e3", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f3", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g3", [1, 11, 10, -10, -1, -11]);
    design.addPosition("h3", [0, 0, 10, -10, -1, -11]);
    design.addPosition("i3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("k3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("l3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [1, 11, 0, -10, 0, -11]);
    design.addPosition("b2", [1, 11, 10, -10, -1, -11]);
    design.addPosition("c2", [1, 11, 10, -10, -1, -11]);
    design.addPosition("d2", [1, 11, 10, -10, -1, -11]);
    design.addPosition("e2", [1, 11, 10, -10, -1, -11]);
    design.addPosition("f2", [1, 11, 10, -10, -1, -11]);
    design.addPosition("g2", [0, 0, 10, -10, -1, -11]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("k2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("l2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [1, 0, 0, -10, 0, -11]);
    design.addPosition("b1", [1, 0, 0, -10, -1, -11]);
    design.addPosition("c1", [1, 0, 0, -10, -1, -11]);
    design.addPosition("d1", [1, 0, 0, -10, -1, -11]);
    design.addPosition("e1", [1, 0, 0, -10, -1, -11]);
    design.addPosition("f1", [0, 0, 0, -10, -1, -11]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("k1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("l1", [0, 0, 0, 0, 0, 0]);

    design.addZone("queen", 1, [5, 55, 10, 60, 110, 65, 115]);
    design.addZone("queen", 2, [5, 55, 10, 60, 110, 65, 115]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PROMOTE,	1);	// Man
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.LITERAL,	1);	// Man
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	21);
    design.addCommand(1, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-6);
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FORK,	4);
    design.addCommand(1, ZRF.MODE,	3);	// cont-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	4);	// $5
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-22);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	1);	// Man
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.MODE,	3);	// cont-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	3);
    design.addCommand(2, ZRF.MODE,	0);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	1);	// Man
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	21);
    design.addCommand(3, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-6);
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FORK,	4);
    design.addCommand(3, ZRF.MODE,	3);	// cont-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-22);
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	10);
    design.addCommand(5, ZRF.IN_ZONE,	0);	// queen
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-11);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// init-type
    design.addPriority(2);			// normal-type

    design.addPiece("Init", 0, 90);
    design.addMove(0, 0, [], 1);

    design.addPiece("Man", 1, 100);
    design.addMove(1, 1, [5, 5, 5, 5, 5], 3);
    design.addMove(1, 1, [4, 4, 4, 4, 4], 3);
    design.addMove(1, 1, [3, 3, 3, 3, 3], 3);
    design.addMove(1, 1, [1, 1, 1, 1, 1], 3);
    design.addMove(1, 1, [2, 2, 2, 2, 2], 3);
    design.addMove(1, 1, [0, 0, 0, 0, 0], 3);
    design.addMove(1, 2, [5, 5], 0);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 3, [5, 5, 5, 5, 5], 0);
    design.addMove(1, 3, [4, 4, 4, 4, 4], 0);
    design.addMove(1, 3, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 3, [1, 1, 1, 1, 1], 0);
    design.addMove(1, 3, [2, 2, 2, 2, 2], 0);
    design.addMove(1, 3, [0, 0, 0, 0, 0], 0);
    design.addMove(1, 4, [5], 2);
    design.addMove(1, 4, [4], 2);
    design.addMove(1, 4, [3], 2);
    design.addMove(1, 4, [1], 2);
    design.addMove(1, 4, [2], 2);
    design.addMove(1, 4, [0], 2);
    design.addMove(1, 5, [5, 5], 2);
    design.addMove(1, 5, [4, 4], 2);
    design.addMove(1, 5, [3, 3], 2);
    design.addMove(1, 5, [1, 1], 2);
    design.addMove(1, 5, [2, 2], 2);
    design.addMove(1, 5, [0, 0], 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("GoldInit", "Gold Init");
    view.defPiece("SilverInit", "Silver Init");
    view.defPiece("GoldMan", "Gold Man");
    view.defPiece("SilverMan", "Silver Man");
 
    view.defPosition("a11", 22, -173, 67, 67);
    view.defPosition("b11", 88, -135, 67, 67);
    view.defPosition("c11", 154, -97, 67, 67);
    view.defPosition("d11", 220, -59, 67, 67);
    view.defPosition("e11", 286, -21, 67, 67);
    view.defPosition("f11", 352, 17, 67, 67);
    view.defPosition("g11", 418, 55, 67, 67);
    view.defPosition("h11", 484, 93, 67, 67);
    view.defPosition("i11", 550, 131, 67, 67);
    view.defPosition("k11", 616, 169, 67, 67);
    view.defPosition("l11", 682, 207, 67, 67);
    view.defPosition("a10", 22, -97, 67, 67);
    view.defPosition("b10", 88, -59, 67, 67);
    view.defPosition("c10", 154, -21, 67, 67);
    view.defPosition("d10", 220, 17, 67, 67);
    view.defPosition("e10", 286, 55, 67, 67);
    view.defPosition("f10", 352, 93, 67, 67);
    view.defPosition("g10", 418, 131, 67, 67);
    view.defPosition("h10", 484, 169, 67, 67);
    view.defPosition("i10", 550, 207, 67, 67);
    view.defPosition("k10", 616, 245, 67, 67);
    view.defPosition("l10", 682, 283, 67, 67);
    view.defPosition("a9", 22, -21, 67, 67);
    view.defPosition("b9", 88, 17, 67, 67);
    view.defPosition("c9", 154, 55, 67, 67);
    view.defPosition("d9", 220, 93, 67, 67);
    view.defPosition("e9", 286, 131, 67, 67);
    view.defPosition("f9", 352, 169, 67, 67);
    view.defPosition("g9", 418, 207, 67, 67);
    view.defPosition("h9", 484, 245, 67, 67);
    view.defPosition("i9", 550, 283, 67, 67);
    view.defPosition("k9", 616, 321, 67, 67);
    view.defPosition("l9", 682, 359, 67, 67);
    view.defPosition("a8", 22, 55, 67, 67);
    view.defPosition("b8", 88, 93, 67, 67);
    view.defPosition("c8", 154, 131, 67, 67);
    view.defPosition("d8", 220, 169, 67, 67);
    view.defPosition("e8", 286, 207, 67, 67);
    view.defPosition("f8", 352, 245, 67, 67);
    view.defPosition("g8", 418, 283, 67, 67);
    view.defPosition("h8", 484, 321, 67, 67);
    view.defPosition("i8", 550, 359, 67, 67);
    view.defPosition("k8", 616, 397, 67, 67);
    view.defPosition("l8", 682, 435, 67, 67);
    view.defPosition("a7", 22, 131, 67, 67);
    view.defPosition("b7", 88, 169, 67, 67);
    view.defPosition("c7", 154, 207, 67, 67);
    view.defPosition("d7", 220, 245, 67, 67);
    view.defPosition("e7", 286, 283, 67, 67);
    view.defPosition("f7", 352, 321, 67, 67);
    view.defPosition("g7", 418, 359, 67, 67);
    view.defPosition("h7", 484, 397, 67, 67);
    view.defPosition("i7", 550, 435, 67, 67);
    view.defPosition("k7", 616, 473, 67, 67);
    view.defPosition("l7", 682, 511, 67, 67);
    view.defPosition("a6", 22, 207, 67, 67);
    view.defPosition("b6", 88, 245, 67, 67);
    view.defPosition("c6", 154, 283, 67, 67);
    view.defPosition("d6", 220, 321, 67, 67);
    view.defPosition("e6", 286, 359, 67, 67);
    view.defPosition("f6", 352, 397, 67, 67);
    view.defPosition("g6", 418, 435, 67, 67);
    view.defPosition("h6", 484, 473, 67, 67);
    view.defPosition("i6", 550, 511, 67, 67);
    view.defPosition("k6", 616, 549, 67, 67);
    view.defPosition("l6", 682, 587, 67, 67);
    view.defPosition("a5", 22, 283, 67, 67);
    view.defPosition("b5", 88, 321, 67, 67);
    view.defPosition("c5", 154, 359, 67, 67);
    view.defPosition("d5", 220, 397, 67, 67);
    view.defPosition("e5", 286, 435, 67, 67);
    view.defPosition("f5", 352, 473, 67, 67);
    view.defPosition("g5", 418, 511, 67, 67);
    view.defPosition("h5", 484, 549, 67, 67);
    view.defPosition("i5", 550, 587, 67, 67);
    view.defPosition("k5", 616, 625, 67, 67);
    view.defPosition("l5", 682, 663, 67, 67);
    view.defPosition("a4", 22, 359, 67, 67);
    view.defPosition("b4", 88, 397, 67, 67);
    view.defPosition("c4", 154, 435, 67, 67);
    view.defPosition("d4", 220, 473, 67, 67);
    view.defPosition("e4", 286, 511, 67, 67);
    view.defPosition("f4", 352, 549, 67, 67);
    view.defPosition("g4", 418, 587, 67, 67);
    view.defPosition("h4", 484, 625, 67, 67);
    view.defPosition("i4", 550, 663, 67, 67);
    view.defPosition("k4", 616, 701, 67, 67);
    view.defPosition("l4", 682, 739, 67, 67);
    view.defPosition("a3", 22, 435, 67, 67);
    view.defPosition("b3", 88, 473, 67, 67);
    view.defPosition("c3", 154, 511, 67, 67);
    view.defPosition("d3", 220, 549, 67, 67);
    view.defPosition("e3", 286, 587, 67, 67);
    view.defPosition("f3", 352, 625, 67, 67);
    view.defPosition("g3", 418, 663, 67, 67);
    view.defPosition("h3", 484, 701, 67, 67);
    view.defPosition("i3", 550, 739, 67, 67);
    view.defPosition("k3", 616, 777, 67, 67);
    view.defPosition("l3", 682, 815, 67, 67);
    view.defPosition("a2", 22, 511, 67, 67);
    view.defPosition("b2", 88, 549, 67, 67);
    view.defPosition("c2", 154, 587, 67, 67);
    view.defPosition("d2", 220, 625, 67, 67);
    view.defPosition("e2", 286, 663, 67, 67);
    view.defPosition("f2", 352, 701, 67, 67);
    view.defPosition("g2", 418, 739, 67, 67);
    view.defPosition("h2", 484, 777, 67, 67);
    view.defPosition("i2", 550, 815, 67, 67);
    view.defPosition("k2", 616, 853, 67, 67);
    view.defPosition("l2", 682, 891, 67, 67);
    view.defPosition("a1", 22, 587, 67, 67);
    view.defPosition("b1", 88, 625, 67, 67);
    view.defPosition("c1", 154, 663, 67, 67);
    view.defPosition("d1", 220, 701, 67, 67);
    view.defPosition("e1", 286, 739, 67, 67);
    view.defPosition("f1", 352, 777, 67, 67);
    view.defPosition("g1", 418, 815, 67, 67);
    view.defPosition("h1", 484, 853, 67, 67);
    view.defPosition("i1", 550, 891, 67, 67);
    view.defPosition("k1", 616, 929, 67, 67);
    view.defPosition("l1", 682, 967, 67, 67);
}
