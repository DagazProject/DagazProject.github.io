Dagaz.Controller.persistense = "setup";
Dagaz.View.DROPS_ALPHA  = 0.9;

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Incanters", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Rhetors", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addTurn(1, [0, 1]);
    design.addTurn(2, [2, 4, 5]);
    design.addTurn(1, [6, 7, 3]);

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	39);
    design.addCommand(0, ZRF.LITERAL,	2);	// P00
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	36);
    design.addCommand(0, ZRF.LITERAL,	5);	// P01
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	33);
    design.addCommand(0, ZRF.LITERAL,	8);	// P02
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	30);
    design.addCommand(0, ZRF.LITERAL,	11);	// P03
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	27);
    design.addCommand(0, ZRF.LITERAL,	14);	// P04
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	24);
    design.addCommand(0, ZRF.LITERAL,	17);	// P05
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	21);
    design.addCommand(0, ZRF.LITERAL,	20);	// P06
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	18);
    design.addCommand(0, ZRF.LITERAL,	23);	// P07
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	15);
    design.addCommand(0, ZRF.LITERAL,	26);	// P08
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.LITERAL,	29);	// P09
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	9);
    design.addCommand(0, ZRF.LITERAL,	32);	// P10
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	35);	// P11
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// jump-mode
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	39);
    design.addCommand(1, ZRF.LITERAL,	2);	// P00
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	36);
    design.addCommand(1, ZRF.LITERAL,	5);	// P01
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	33);
    design.addCommand(1, ZRF.LITERAL,	8);	// P02
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	30);
    design.addCommand(1, ZRF.LITERAL,	11);	// P03
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	27);
    design.addCommand(1, ZRF.LITERAL,	14);	// P04
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	24);
    design.addCommand(1, ZRF.LITERAL,	17);	// P05
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	21);
    design.addCommand(1, ZRF.LITERAL,	20);	// P06
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	18);
    design.addCommand(1, ZRF.LITERAL,	23);	// P07
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	15);
    design.addCommand(1, ZRF.LITERAL,	26);	// P08
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.LITERAL,	29);	// P09
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	9);
    design.addCommand(1, ZRF.LITERAL,	32);	// P10
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	35);	// P11
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	0);	// I00
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	3);	// I01
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	6);	// I02
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	9);	// I03
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	12);	// I04
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	15);	// I05
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	18);	// I06
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	21);	// I07
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.LITERAL,	24);	// I08
    design.addCommand(10, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	27);	// I09
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	30);	// I10
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	33);	// I11
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	38);	// MarkFriend
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.LITERAL,	0);	// I00
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	36);
    design.addCommand(14, ZRF.LITERAL,	3);	// I01
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	33);
    design.addCommand(14, ZRF.LITERAL,	6);	// I02
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	30);
    design.addCommand(14, ZRF.LITERAL,	9);	// I03
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	27);
    design.addCommand(14, ZRF.LITERAL,	12);	// I04
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	24);
    design.addCommand(14, ZRF.LITERAL,	15);	// I05
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	21);
    design.addCommand(14, ZRF.LITERAL,	18);	// I06
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	18);
    design.addCommand(14, ZRF.LITERAL,	21);	// I07
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	15);
    design.addCommand(14, ZRF.LITERAL,	24);	// I08
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	12);
    design.addCommand(14, ZRF.LITERAL,	27);	// I09
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	9);
    design.addCommand(14, ZRF.LITERAL,	30);	// I10
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	6);
    design.addCommand(14, ZRF.LITERAL,	33);	// I11
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.LITERAL,	0);	// false
    design.addCommand(14, ZRF.JUMP,	2);
    design.addCommand(14, ZRF.LITERAL,	1);	// true
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	26);	// capture
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.IF,	39);
    design.addCommand(14, ZRF.LITERAL,	2);	// P00
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	36);
    design.addCommand(14, ZRF.LITERAL,	5);	// P01
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	33);
    design.addCommand(14, ZRF.LITERAL,	8);	// P02
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	30);
    design.addCommand(14, ZRF.LITERAL,	11);	// P03
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	27);
    design.addCommand(14, ZRF.LITERAL,	14);	// P04
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	24);
    design.addCommand(14, ZRF.LITERAL,	17);	// P05
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	21);
    design.addCommand(14, ZRF.LITERAL,	20);	// P06
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	18);
    design.addCommand(14, ZRF.LITERAL,	23);	// P07
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	15);
    design.addCommand(14, ZRF.LITERAL,	26);	// P08
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	12);
    design.addCommand(14, ZRF.LITERAL,	29);	// P09
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	9);
    design.addCommand(14, ZRF.LITERAL,	32);	// P10
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	6);
    design.addCommand(14, ZRF.LITERAL,	35);	// P11
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.IF,	3);
    design.addCommand(14, ZRF.LITERAL,	0);	// false
    design.addCommand(14, ZRF.JUMP,	2);
    design.addCommand(14, ZRF.LITERAL,	1);	// true
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PROMOTE,	36);	// Rhetors
    design.addCommand(14, ZRF.MODE,	3);	// cont-mode
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.LITERAL,	1);	// M00
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	36);
    design.addCommand(15, ZRF.LITERAL,	4);	// M01
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	33);
    design.addCommand(15, ZRF.LITERAL,	7);	// M02
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	30);
    design.addCommand(15, ZRF.LITERAL,	10);	// M03
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	27);
    design.addCommand(15, ZRF.LITERAL,	13);	// M04
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	24);
    design.addCommand(15, ZRF.LITERAL,	16);	// M05
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	21);
    design.addCommand(15, ZRF.LITERAL,	19);	// M06
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	18);
    design.addCommand(15, ZRF.LITERAL,	22);	// M07
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	15);
    design.addCommand(15, ZRF.LITERAL,	25);	// M08
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	12);
    design.addCommand(15, ZRF.LITERAL,	28);	// M09
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	9);
    design.addCommand(15, ZRF.LITERAL,	31);	// M10
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	6);
    design.addCommand(15, ZRF.LITERAL,	34);	// M11
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	3);
    design.addCommand(15, ZRF.LITERAL,	0);	// false
    design.addCommand(15, ZRF.JUMP,	2);
    design.addCommand(15, ZRF.LITERAL,	1);	// true
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	26);	// capture
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.IF,	39);
    design.addCommand(15, ZRF.LITERAL,	2);	// P00
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	36);
    design.addCommand(15, ZRF.LITERAL,	5);	// P01
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	33);
    design.addCommand(15, ZRF.LITERAL,	8);	// P02
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	30);
    design.addCommand(15, ZRF.LITERAL,	11);	// P03
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	27);
    design.addCommand(15, ZRF.LITERAL,	14);	// P04
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	24);
    design.addCommand(15, ZRF.LITERAL,	17);	// P05
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	21);
    design.addCommand(15, ZRF.LITERAL,	20);	// P06
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	18);
    design.addCommand(15, ZRF.LITERAL,	23);	// P07
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	15);
    design.addCommand(15, ZRF.LITERAL,	26);	// P08
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	12);
    design.addCommand(15, ZRF.LITERAL,	29);	// P09
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	9);
    design.addCommand(15, ZRF.LITERAL,	32);	// P10
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	6);
    design.addCommand(15, ZRF.LITERAL,	35);	// P11
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.IF,	3);
    design.addCommand(15, ZRF.LITERAL,	0);	// false
    design.addCommand(15, ZRF.JUMP,	2);
    design.addCommand(15, ZRF.LITERAL,	1);	// true
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.MODE,	3);	// cont-mode
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.LITERAL,	0);	// I00
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	36);
    design.addCommand(16, ZRF.LITERAL,	3);	// I01
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	33);
    design.addCommand(16, ZRF.LITERAL,	6);	// I02
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	30);
    design.addCommand(16, ZRF.LITERAL,	9);	// I03
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	27);
    design.addCommand(16, ZRF.LITERAL,	12);	// I04
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	24);
    design.addCommand(16, ZRF.LITERAL,	15);	// I05
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	21);
    design.addCommand(16, ZRF.LITERAL,	18);	// I06
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	18);
    design.addCommand(16, ZRF.LITERAL,	21);	// I07
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	15);
    design.addCommand(16, ZRF.LITERAL,	24);	// I08
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	12);
    design.addCommand(16, ZRF.LITERAL,	27);	// I09
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	9);
    design.addCommand(16, ZRF.LITERAL,	30);	// I10
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	6);
    design.addCommand(16, ZRF.LITERAL,	33);	// I11
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	3);
    design.addCommand(16, ZRF.LITERAL,	0);	// false
    design.addCommand(16, ZRF.JUMP,	2);
    design.addCommand(16, ZRF.LITERAL,	1);	// true
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FUNCTION,	26);	// capture
    design.addCommand(16, ZRF.PARAM,	1);	// $2
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.IF,	39);
    design.addCommand(16, ZRF.LITERAL,	2);	// P00
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	36);
    design.addCommand(16, ZRF.LITERAL,	5);	// P01
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	33);
    design.addCommand(16, ZRF.LITERAL,	8);	// P02
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	30);
    design.addCommand(16, ZRF.LITERAL,	11);	// P03
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	27);
    design.addCommand(16, ZRF.LITERAL,	14);	// P04
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	24);
    design.addCommand(16, ZRF.LITERAL,	17);	// P05
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	21);
    design.addCommand(16, ZRF.LITERAL,	20);	// P06
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	18);
    design.addCommand(16, ZRF.LITERAL,	23);	// P07
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	15);
    design.addCommand(16, ZRF.LITERAL,	26);	// P08
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	12);
    design.addCommand(16, ZRF.LITERAL,	29);	// P09
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	9);
    design.addCommand(16, ZRF.LITERAL,	32);	// P10
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	6);
    design.addCommand(16, ZRF.LITERAL,	35);	// P11
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.IF,	3);
    design.addCommand(16, ZRF.LITERAL,	0);	// false
    design.addCommand(16, ZRF.JUMP,	2);
    design.addCommand(16, ZRF.LITERAL,	1);	// true
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.MODE,	3);	// cont-mode
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.LITERAL,	38);	// MarkFriend
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.IF,	39);
    design.addCommand(17, ZRF.LITERAL,	2);	// P00
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	36);
    design.addCommand(17, ZRF.LITERAL,	5);	// P01
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	33);
    design.addCommand(17, ZRF.LITERAL,	8);	// P02
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	30);
    design.addCommand(17, ZRF.LITERAL,	11);	// P03
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	27);
    design.addCommand(17, ZRF.LITERAL,	14);	// P04
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	24);
    design.addCommand(17, ZRF.LITERAL,	17);	// P05
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	21);
    design.addCommand(17, ZRF.LITERAL,	20);	// P06
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	18);
    design.addCommand(17, ZRF.LITERAL,	23);	// P07
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	15);
    design.addCommand(17, ZRF.LITERAL,	26);	// P08
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	12);
    design.addCommand(17, ZRF.LITERAL,	29);	// P09
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	9);
    design.addCommand(17, ZRF.LITERAL,	32);	// P10
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	6);
    design.addCommand(17, ZRF.LITERAL,	35);	// P11
    design.addCommand(17, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(17, ZRF.IF,	3);
    design.addCommand(17, ZRF.LITERAL,	0);	// false
    design.addCommand(17, ZRF.JUMP,	2);
    design.addCommand(17, ZRF.LITERAL,	1);	// true
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PROMOTE,	36);	// Rhetors
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.LITERAL,	37);	// MarkEmpty
    design.addCommand(18, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

//  design.addPriority(0);			// jump-mode
//  design.addPriority(1);			// normal-mode

    design.addPiece("I00", 0);
    design.addMove(0, 0, [7, 7], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [4], 1);
    design.addMove(0, 1, [1], 1);
    design.addMove(0, 1, [5], 1);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [2], 1);

    design.addPiece("M00", 1);
    design.addDrop(1, 2, [], 2);

    design.addPiece("P00", 2);

    design.addPiece("I01", 3);
    design.addMove(3, 0, [7, 7], 0);
    design.addMove(3, 0, [3, 3], 0);
    design.addMove(3, 0, [4, 4], 0);
    design.addMove(3, 0, [1, 1], 0);
    design.addMove(3, 0, [5, 5], 0);
    design.addMove(3, 0, [6, 6], 0);
    design.addMove(3, 0, [0, 0], 0);
    design.addMove(3, 0, [2, 2], 0);
    design.addMove(3, 1, [7], 1);
    design.addMove(3, 1, [3], 1);
    design.addMove(3, 1, [4], 1);
    design.addMove(3, 1, [1], 1);
    design.addMove(3, 1, [5], 1);
    design.addMove(3, 1, [6], 1);
    design.addMove(3, 1, [0], 1);
    design.addMove(3, 1, [2], 1);

    design.addPiece("M01", 4);
    design.addDrop(4, 3, [], 2);

    design.addPiece("P01", 5);

    design.addPiece("I02", 6);
    design.addMove(6, 0, [7, 7], 0);
    design.addMove(6, 0, [3, 3], 0);
    design.addMove(6, 0, [4, 4], 0);
    design.addMove(6, 0, [1, 1], 0);
    design.addMove(6, 0, [5, 5], 0);
    design.addMove(6, 0, [6, 6], 0);
    design.addMove(6, 0, [0, 0], 0);
    design.addMove(6, 0, [2, 2], 0);
    design.addMove(6, 1, [7], 1);
    design.addMove(6, 1, [3], 1);
    design.addMove(6, 1, [4], 1);
    design.addMove(6, 1, [1], 1);
    design.addMove(6, 1, [5], 1);
    design.addMove(6, 1, [6], 1);
    design.addMove(6, 1, [0], 1);
    design.addMove(6, 1, [2], 1);

    design.addPiece("M02", 7);
    design.addDrop(7, 4, [], 2);

    design.addPiece("P02", 8);

    design.addPiece("I03", 9);
    design.addMove(9, 0, [7, 7], 0);
    design.addMove(9, 0, [3, 3], 0);
    design.addMove(9, 0, [4, 4], 0);
    design.addMove(9, 0, [1, 1], 0);
    design.addMove(9, 0, [5, 5], 0);
    design.addMove(9, 0, [6, 6], 0);
    design.addMove(9, 0, [0, 0], 0);
    design.addMove(9, 0, [2, 2], 0);
    design.addMove(9, 1, [7], 1);
    design.addMove(9, 1, [3], 1);
    design.addMove(9, 1, [4], 1);
    design.addMove(9, 1, [1], 1);
    design.addMove(9, 1, [5], 1);
    design.addMove(9, 1, [6], 1);
    design.addMove(9, 1, [0], 1);
    design.addMove(9, 1, [2], 1);

    design.addPiece("M03", 10);
    design.addDrop(10, 5, [], 2);

    design.addPiece("P03", 11);

    design.addPiece("I04", 12);
    design.addMove(12, 0, [7, 7], 0);
    design.addMove(12, 0, [3, 3], 0);
    design.addMove(12, 0, [4, 4], 0);
    design.addMove(12, 0, [1, 1], 0);
    design.addMove(12, 0, [5, 5], 0);
    design.addMove(12, 0, [6, 6], 0);
    design.addMove(12, 0, [0, 0], 0);
    design.addMove(12, 0, [2, 2], 0);
    design.addMove(12, 1, [7], 1);
    design.addMove(12, 1, [3], 1);
    design.addMove(12, 1, [4], 1);
    design.addMove(12, 1, [1], 1);
    design.addMove(12, 1, [5], 1);
    design.addMove(12, 1, [6], 1);
    design.addMove(12, 1, [0], 1);
    design.addMove(12, 1, [2], 1);

    design.addPiece("M04", 13);
    design.addDrop(13, 6, [], 2);

    design.addPiece("P04", 14);

    design.addPiece("I05", 15);
    design.addMove(15, 0, [7, 7], 0);
    design.addMove(15, 0, [3, 3], 0);
    design.addMove(15, 0, [4, 4], 0);
    design.addMove(15, 0, [1, 1], 0);
    design.addMove(15, 0, [5, 5], 0);
    design.addMove(15, 0, [6, 6], 0);
    design.addMove(15, 0, [0, 0], 0);
    design.addMove(15, 0, [2, 2], 0);
    design.addMove(15, 1, [7], 1);
    design.addMove(15, 1, [3], 1);
    design.addMove(15, 1, [4], 1);
    design.addMove(15, 1, [1], 1);
    design.addMove(15, 1, [5], 1);
    design.addMove(15, 1, [6], 1);
    design.addMove(15, 1, [0], 1);
    design.addMove(15, 1, [2], 1);

    design.addPiece("M05", 16);
    design.addDrop(16, 7, [], 2);

    design.addPiece("P05", 17);

    design.addPiece("I06", 18);
    design.addMove(18, 0, [7, 7], 0);
    design.addMove(18, 0, [3, 3], 0);
    design.addMove(18, 0, [4, 4], 0);
    design.addMove(18, 0, [1, 1], 0);
    design.addMove(18, 0, [5, 5], 0);
    design.addMove(18, 0, [6, 6], 0);
    design.addMove(18, 0, [0, 0], 0);
    design.addMove(18, 0, [2, 2], 0);
    design.addMove(18, 1, [7], 1);
    design.addMove(18, 1, [3], 1);
    design.addMove(18, 1, [4], 1);
    design.addMove(18, 1, [1], 1);
    design.addMove(18, 1, [5], 1);
    design.addMove(18, 1, [6], 1);
    design.addMove(18, 1, [0], 1);
    design.addMove(18, 1, [2], 1);

    design.addPiece("M06", 19);
    design.addDrop(19, 8, [], 2);

    design.addPiece("P06", 20);

    design.addPiece("I07", 21);
    design.addMove(21, 0, [7, 7], 0);
    design.addMove(21, 0, [3, 3], 0);
    design.addMove(21, 0, [4, 4], 0);
    design.addMove(21, 0, [1, 1], 0);
    design.addMove(21, 0, [5, 5], 0);
    design.addMove(21, 0, [6, 6], 0);
    design.addMove(21, 0, [0, 0], 0);
    design.addMove(21, 0, [2, 2], 0);
    design.addMove(21, 1, [7], 1);
    design.addMove(21, 1, [3], 1);
    design.addMove(21, 1, [4], 1);
    design.addMove(21, 1, [1], 1);
    design.addMove(21, 1, [5], 1);
    design.addMove(21, 1, [6], 1);
    design.addMove(21, 1, [0], 1);
    design.addMove(21, 1, [2], 1);

    design.addPiece("M07", 22);
    design.addDrop(22, 9, [], 2);

    design.addPiece("P07", 23);

    design.addPiece("I08", 24);
    design.addMove(24, 0, [7, 7], 0);
    design.addMove(24, 0, [3, 3], 0);
    design.addMove(24, 0, [4, 4], 0);
    design.addMove(24, 0, [1, 1], 0);
    design.addMove(24, 0, [5, 5], 0);
    design.addMove(24, 0, [6, 6], 0);
    design.addMove(24, 0, [0, 0], 0);
    design.addMove(24, 0, [2, 2], 0);
    design.addMove(24, 1, [7], 1);
    design.addMove(24, 1, [3], 1);
    design.addMove(24, 1, [4], 1);
    design.addMove(24, 1, [1], 1);
    design.addMove(24, 1, [5], 1);
    design.addMove(24, 1, [6], 1);
    design.addMove(24, 1, [0], 1);
    design.addMove(24, 1, [2], 1);

    design.addPiece("M08", 25);
    design.addDrop(25, 10, [], 2);

    design.addPiece("P08", 26);

    design.addPiece("I09", 27);
    design.addMove(27, 0, [7, 7], 0);
    design.addMove(27, 0, [3, 3], 0);
    design.addMove(27, 0, [4, 4], 0);
    design.addMove(27, 0, [1, 1], 0);
    design.addMove(27, 0, [5, 5], 0);
    design.addMove(27, 0, [6, 6], 0);
    design.addMove(27, 0, [0, 0], 0);
    design.addMove(27, 0, [2, 2], 0);
    design.addMove(27, 1, [7], 1);
    design.addMove(27, 1, [3], 1);
    design.addMove(27, 1, [4], 1);
    design.addMove(27, 1, [1], 1);
    design.addMove(27, 1, [5], 1);
    design.addMove(27, 1, [6], 1);
    design.addMove(27, 1, [0], 1);
    design.addMove(27, 1, [2], 1);

    design.addPiece("M09", 28);
    design.addDrop(28, 11, [], 2);

    design.addPiece("P09", 29);

    design.addPiece("I10", 30);
    design.addMove(30, 0, [7, 7], 0);
    design.addMove(30, 0, [3, 3], 0);
    design.addMove(30, 0, [4, 4], 0);
    design.addMove(30, 0, [1, 1], 0);
    design.addMove(30, 0, [5, 5], 0);
    design.addMove(30, 0, [6, 6], 0);
    design.addMove(30, 0, [0, 0], 0);
    design.addMove(30, 0, [2, 2], 0);
    design.addMove(30, 1, [7], 1);
    design.addMove(30, 1, [3], 1);
    design.addMove(30, 1, [4], 1);
    design.addMove(30, 1, [1], 1);
    design.addMove(30, 1, [5], 1);
    design.addMove(30, 1, [6], 1);
    design.addMove(30, 1, [0], 1);
    design.addMove(30, 1, [2], 1);

    design.addPiece("M10", 31);
    design.addDrop(31, 12, [], 2);

    design.addPiece("P10", 32);

    design.addPiece("I11", 33);
    design.addMove(33, 0, [7, 7], 0);
    design.addMove(33, 0, [3, 3], 0);
    design.addMove(33, 0, [4, 4], 0);
    design.addMove(33, 0, [1, 1], 0);
    design.addMove(33, 0, [5, 5], 0);
    design.addMove(33, 0, [6, 6], 0);
    design.addMove(33, 0, [0, 0], 0);
    design.addMove(33, 0, [2, 2], 0);
    design.addMove(33, 1, [7], 1);
    design.addMove(33, 1, [3], 1);
    design.addMove(33, 1, [4], 1);
    design.addMove(33, 1, [1], 1);
    design.addMove(33, 1, [5], 1);
    design.addMove(33, 1, [6], 1);
    design.addMove(33, 1, [0], 1);
    design.addMove(33, 1, [2], 1);

    design.addPiece("M11", 34);
    design.addDrop(34, 13, [], 2);

    design.addPiece("P11", 35);

    design.addPiece("Rhetor", 36);
    design.addMove(36, 15, [7, 7], 6);
    design.addMove(36, 15, [6, 6], 6);
    design.addMove(36, 15, [3, 3], 6);
    design.addMove(36, 15, [5, 5], 6);
    design.addMove(36, 15, [1, 1], 6);
    design.addMove(36, 15, [2, 2], 6);
    design.addMove(36, 15, [4, 4], 6);
    design.addMove(36, 15, [0, 0], 6);
    design.addMove(36, 16, [7, 7], 3);
    design.addMove(36, 16, [6, 6], 3);
    design.addMove(36, 16, [3, 3], 3);
    design.addMove(36, 16, [5, 5], 3);
    design.addMove(36, 16, [1, 1], 3);
    design.addMove(36, 16, [2, 2], 3);
    design.addMove(36, 16, [4, 4], 3);
    design.addMove(36, 16, [0, 0], 3);
    design.addMove(36, 18, [7], 7);
    design.addMove(36, 18, [6], 7);
    design.addMove(36, 18, [3], 7);
    design.addMove(36, 18, [5], 7);
    design.addMove(36, 18, [1], 7);
    design.addMove(36, 18, [2], 7);
    design.addMove(36, 18, [4], 7);
    design.addMove(36, 18, [0], 7);

    design.addPiece("MarkEmpty", 37);
    design.addDrop(37, 19, [], 4);

    design.addPiece("MarkFriend", 38);
    design.addDrop(38, 20, [], 5);
    design.addMove(38, 14, [7, 7], 6);
    design.addMove(38, 14, [6, 6], 6);
    design.addMove(38, 14, [3, 3], 6);
    design.addMove(38, 14, [5, 5], 6);
    design.addMove(38, 14, [1, 1], 6);
    design.addMove(38, 14, [2, 2], 6);
    design.addMove(38, 14, [4, 4], 6);
    design.addMove(38, 14, [0, 0], 6);
    design.addMove(38, 17, [7], 7);
    design.addMove(38, 17, [6], 7);
    design.addMove(38, 17, [3], 7);
    design.addMove(38, 17, [5], 7);
    design.addMove(38, 17, [1], 7);
    design.addMove(38, 17, [2], 7);
    design.addMove(38, 17, [4], 7);
    design.addMove(38, 17, [0], 7);

    design.setup("Incanters", "I00", 49);
    design.setup("Incanters", "I01", 50);
    design.setup("Incanters", "I02", 51);
    design.setup("Incanters", "I03", 52);
    design.setup("Incanters", "I04", 53);
    design.setup("Incanters", "I05", 54);
    design.setup("Incanters", "I06", 41);
    design.setup("Incanters", "I07", 42);
    design.setup("Incanters", "I08", 43);
    design.setup("Incanters", "I09", 44);
    design.setup("Incanters", "I10", 45);
    design.setup("Incanters", "I11", 46);
    design.setup("Rhetors", "Rhetor", 9);
    design.setup("Rhetors", "Rhetor", 10);
    design.setup("Rhetors", "Rhetor", 11);
    design.setup("Rhetors", "Rhetor", 12);
    design.setup("Rhetors", "Rhetor", 13);
    design.setup("Rhetors", "Rhetor", 14);
    design.setup("Rhetors", "Rhetor", 17);
    design.setup("Rhetors", "Rhetor", 18);
    design.setup("Rhetors", "Rhetor", 19);
    design.setup("Rhetors", "Rhetor", 20);
    design.setup("Rhetors", "Rhetor", 21);
    design.setup("Rhetors", "Rhetor", 22);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("IncantersI00", "Incanters I00");
    view.defPiece("RhetorsM00", "Rhetors M00");
    view.defPiece("IncantersP00", "Incanters P00");
    view.defPiece("IncantersI01", "Incanters I01");
    view.defPiece("RhetorsM01", "Rhetors M01");
    view.defPiece("IncantersP01", "Incanters P01");
    view.defPiece("IncantersI02", "Incanters I02");
    view.defPiece("RhetorsM02", "Rhetors M02");
    view.defPiece("IncantersP02", "Incanters P02");
    view.defPiece("IncantersI03", "Incanters I03");
    view.defPiece("RhetorsM03", "Rhetors M03");
    view.defPiece("IncantersP03", "Incanters P03");
    view.defPiece("IncantersI04", "Incanters I04");
    view.defPiece("RhetorsM04", "Rhetors M04");
    view.defPiece("IncantersP04", "Incanters P04");
    view.defPiece("IncantersI05", "Incanters I05");
    view.defPiece("RhetorsM05", "Rhetors M05");
    view.defPiece("IncantersP05", "Incanters P05");
    view.defPiece("IncantersI06", "Incanters I06");
    view.defPiece("RhetorsM06", "Rhetors M06");
    view.defPiece("IncantersP06", "Incanters P06");
    view.defPiece("IncantersI07", "Incanters I07");
    view.defPiece("RhetorsM07", "Rhetors M07");
    view.defPiece("IncantersP07", "Incanters P07");
    view.defPiece("IncantersI08", "Incanters I08");
    view.defPiece("RhetorsM08", "Rhetors M08");
    view.defPiece("IncantersP08", "Incanters P08");
    view.defPiece("IncantersI09", "Incanters I09");
    view.defPiece("RhetorsM09", "Rhetors M09");
    view.defPiece("IncantersP09", "Incanters P09");
    view.defPiece("IncantersI10", "Incanters I10");
    view.defPiece("RhetorsM10", "Rhetors M10");
    view.defPiece("IncantersP10", "Incanters P10");
    view.defPiece("IncantersI11", "Incanters I11");
    view.defPiece("RhetorsM11", "Rhetors M11");
    view.defPiece("IncantersP11", "Incanters P11");
    view.defPiece("RhetorsRhetor", "Rhetors Rhetor");
    view.defPiece("RhetorsMarkEmpty", "Rhetors MarkEmpty");
    view.defPiece("RhetorsMarkFriend", "Rhetors MarkFriend");
 
    view.defPosition("a8", 5, 5, 49, 49);
    view.defPosition("b8", 54, 5, 49, 49);
    view.defPosition("c8", 103, 5, 49, 49);
    view.defPosition("d8", 152, 5, 49, 49);
    view.defPosition("e8", 201, 5, 49, 49);
    view.defPosition("f8", 250, 5, 49, 49);
    view.defPosition("g8", 299, 5, 49, 49);
    view.defPosition("h8", 348, 5, 49, 49);
    view.defPosition("a7", 5, 54, 49, 49);
    view.defPosition("b7", 54, 54, 49, 49);
    view.defPosition("c7", 103, 54, 49, 49);
    view.defPosition("d7", 152, 54, 49, 49);
    view.defPosition("e7", 201, 54, 49, 49);
    view.defPosition("f7", 250, 54, 49, 49);
    view.defPosition("g7", 299, 54, 49, 49);
    view.defPosition("h7", 348, 54, 49, 49);
    view.defPosition("a6", 5, 103, 49, 49);
    view.defPosition("b6", 54, 103, 49, 49);
    view.defPosition("c6", 103, 103, 49, 49);
    view.defPosition("d6", 152, 103, 49, 49);
    view.defPosition("e6", 201, 103, 49, 49);
    view.defPosition("f6", 250, 103, 49, 49);
    view.defPosition("g6", 299, 103, 49, 49);
    view.defPosition("h6", 348, 103, 49, 49);
    view.defPosition("a5", 5, 152, 49, 49);
    view.defPosition("b5", 54, 152, 49, 49);
    view.defPosition("c5", 103, 152, 49, 49);
    view.defPosition("d5", 152, 152, 49, 49);
    view.defPosition("e5", 201, 152, 49, 49);
    view.defPosition("f5", 250, 152, 49, 49);
    view.defPosition("g5", 299, 152, 49, 49);
    view.defPosition("h5", 348, 152, 49, 49);
    view.defPosition("a4", 5, 201, 49, 49);
    view.defPosition("b4", 54, 201, 49, 49);
    view.defPosition("c4", 103, 201, 49, 49);
    view.defPosition("d4", 152, 201, 49, 49);
    view.defPosition("e4", 201, 201, 49, 49);
    view.defPosition("f4", 250, 201, 49, 49);
    view.defPosition("g4", 299, 201, 49, 49);
    view.defPosition("h4", 348, 201, 49, 49);
    view.defPosition("a3", 5, 250, 49, 49);
    view.defPosition("b3", 54, 250, 49, 49);
    view.defPosition("c3", 103, 250, 49, 49);
    view.defPosition("d3", 152, 250, 49, 49);
    view.defPosition("e3", 201, 250, 49, 49);
    view.defPosition("f3", 250, 250, 49, 49);
    view.defPosition("g3", 299, 250, 49, 49);
    view.defPosition("h3", 348, 250, 49, 49);
    view.defPosition("a2", 5, 299, 49, 49);
    view.defPosition("b2", 54, 299, 49, 49);
    view.defPosition("c2", 103, 299, 49, 49);
    view.defPosition("d2", 152, 299, 49, 49);
    view.defPosition("e2", 201, 299, 49, 49);
    view.defPosition("f2", 250, 299, 49, 49);
    view.defPosition("g2", 299, 299, 49, 49);
    view.defPosition("h2", 348, 299, 49, 49);
    view.defPosition("a1", 5, 348, 49, 49);
    view.defPosition("b1", 54, 348, 49, 49);
    view.defPosition("c1", 103, 348, 49, 49);
    view.defPosition("d1", 152, 348, 49, 49);
    view.defPosition("e1", 201, 348, 49, 49);
    view.defPosition("f1", 250, 348, 49, 49);
    view.defPosition("g1", 299, 348, 49, 49);
    view.defPosition("h1", 348, 348, 49, 49);
}
