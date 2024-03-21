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
    design.checkVersion("pass-partial", "false");
    design.checkVersion("detect-loops", "true");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Red", [3, 2, 1, 0]);
    design.addPlayer("Blue", [0, 1, 2, 3]);

    design.addTurn(1, [0]);
    design.addTurn(2, [0]);

    design.addPosition("a8", [8, 1, 0, 0]);
    design.addPosition("b8", [8, 1, -1, 0]);
    design.addPosition("c8", [8, 1, -1, 0]);
    design.addPosition("d8", [8, 1, -1, 0]);
    design.addPosition("e8", [8, 1, -1, 0]);
    design.addPosition("f8", [8, 1, -1, 0]);
    design.addPosition("g8", [8, 1, -1, 0]);
    design.addPosition("h8", [8, 0, -1, 0]);
    design.addPosition("a7", [8, 1, 0, -8]);
    design.addPosition("b7", [8, 1, -1, -8]);
    design.addPosition("c7", [8, 1, -1, -8]);
    design.addPosition("d7", [8, 1, -1, -8]);
    design.addPosition("e7", [8, 1, -1, -8]);
    design.addPosition("f7", [8, 1, -1, -8]);
    design.addPosition("g7", [8, 1, -1, -8]);
    design.addPosition("h7", [8, 0, -1, -8]);
    design.addPosition("a6", [8, 1, 0, -8]);
    design.addPosition("b6", [8, 1, -1, -8]);
    design.addPosition("c6", [8, 1, -1, -8]);
    design.addPosition("d6", [8, 1, -1, -8]);
    design.addPosition("e6", [8, 1, -1, -8]);
    design.addPosition("f6", [8, 1, -1, -8]);
    design.addPosition("g6", [8, 1, -1, -8]);
    design.addPosition("h6", [8, 0, -1, -8]);
    design.addPosition("a5", [8, 1, 0, -8]);
    design.addPosition("b5", [8, 1, -1, -8]);
    design.addPosition("c5", [8, 1, -1, -8]);
    design.addPosition("d5", [8, 1, -1, -8]);
    design.addPosition("e5", [8, 1, -1, -8]);
    design.addPosition("f5", [8, 1, -1, -8]);
    design.addPosition("g5", [8, 1, -1, -8]);
    design.addPosition("h5", [8, 0, -1, -8]);
    design.addPosition("a4", [8, 1, 0, -8]);
    design.addPosition("b4", [8, 1, -1, -8]);
    design.addPosition("c4", [8, 1, -1, -8]);
    design.addPosition("d4", [8, 1, -1, -8]);
    design.addPosition("e4", [8, 1, -1, -8]);
    design.addPosition("f4", [8, 1, -1, -8]);
    design.addPosition("g4", [8, 1, -1, -8]);
    design.addPosition("h4", [8, 0, -1, -8]);
    design.addPosition("a3", [8, 1, 0, -8]);
    design.addPosition("b3", [8, 1, -1, -8]);
    design.addPosition("c3", [8, 1, -1, -8]);
    design.addPosition("d3", [8, 1, -1, -8]);
    design.addPosition("e3", [8, 1, -1, -8]);
    design.addPosition("f3", [8, 1, -1, -8]);
    design.addPosition("g3", [8, 1, -1, -8]);
    design.addPosition("h3", [8, 0, -1, -8]);
    design.addPosition("a2", [8, 1, 0, -8]);
    design.addPosition("b2", [8, 1, -1, -8]);
    design.addPosition("c2", [8, 1, -1, -8]);
    design.addPosition("d2", [8, 1, -1, -8]);
    design.addPosition("e2", [8, 1, -1, -8]);
    design.addPosition("f2", [8, 1, -1, -8]);
    design.addPosition("g2", [8, 1, -1, -8]);
    design.addPosition("h2", [8, 0, -1, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [0, 1, -1, -8]);
    design.addPosition("c1", [0, 1, -1, -8]);
    design.addPosition("d1", [0, 1, -1, -8]);
    design.addPosition("e1", [0, 1, -1, -8]);
    design.addPosition("f1", [0, 1, -1, -8]);
    design.addPosition("g1", [0, 1, -1, -8]);
    design.addPosition("h1", [0, 0, -1, -8]);
    design.addPosition("X1", [0, 1, 2, 3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PROMOTE,	7);	// D26
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	16);	// D51
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	9);	// D32
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	13);	// D42
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	7);	// D26
    design.addCommand(4, ZRF.MODE,	1);	// type-1
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	16);	// D51
    design.addCommand(5, ZRF.MODE,	1);	// type-1
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	9);	// D32
    design.addCommand(6, ZRF.MODE,	1);	// type-1
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	13);	// D42
    design.addCommand(7, ZRF.MODE,	1);	// type-1
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	7);	// D26
    design.addCommand(8, ZRF.MODE,	2);	// type-2
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	16);	// D51
    design.addCommand(9, ZRF.MODE,	2);	// type-2
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PROMOTE,	9);	// D32
    design.addCommand(10, ZRF.MODE,	2);	// type-2
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PROMOTE,	13);	// D42
    design.addCommand(11, ZRF.MODE,	2);	// type-2
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PROMOTE,	7);	// D26
    design.addCommand(12, ZRF.MODE,	3);	// type-3
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PROMOTE,	16);	// D51
    design.addCommand(13, ZRF.MODE,	3);	// type-3
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PROMOTE,	9);	// D32
    design.addCommand(14, ZRF.MODE,	3);	// type-3
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PROMOTE,	13);	// D42
    design.addCommand(15, ZRF.MODE,	3);	// type-3
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PROMOTE,	7);	// D26
    design.addCommand(16, ZRF.MODE,	4);	// type-4
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PROMOTE,	16);	// D51
    design.addCommand(17, ZRF.MODE,	4);	// type-4
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PROMOTE,	9);	// D32
    design.addCommand(18, ZRF.MODE,	4);	// type-4
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.PROMOTE,	13);	// D42
    design.addCommand(19, ZRF.MODE,	4);	// type-4
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PROMOTE,	11);	// D36
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PROMOTE,	12);	// D41
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PROMOTE,	17);	// D53
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PROMOTE,	5);	// D23
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end

    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	0);	// $1
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.PROMOTE,	11);	// D36
    design.addCommand(24, ZRF.MODE,	1);	// type-1
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PROMOTE,	12);	// D41
    design.addCommand(25, ZRF.MODE,	1);	// type-1
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PROMOTE,	17);	// D53
    design.addCommand(26, ZRF.MODE,	1);	// type-1
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PROMOTE,	5);	// D23
    design.addCommand(27, ZRF.MODE,	1);	// type-1
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PROMOTE,	11);	// D36
    design.addCommand(28, ZRF.MODE,	2);	// type-2
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.PROMOTE,	12);	// D41
    design.addCommand(29, ZRF.MODE,	2);	// type-2
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PROMOTE,	17);	// D53
    design.addCommand(30, ZRF.MODE,	2);	// type-2
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PROMOTE,	5);	// D23
    design.addCommand(31, ZRF.MODE,	2);	// type-2
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end

    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	0);	// $1
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PROMOTE,	11);	// D36
    design.addCommand(32, ZRF.MODE,	3);	// type-3
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end

    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	0);	// $1
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PROMOTE,	12);	// D41
    design.addCommand(33, ZRF.MODE,	3);	// type-3
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	28);	// end

    design.addCommand(34, ZRF.FUNCTION,	24);	// from
    design.addCommand(34, ZRF.PARAM,	0);	// $1
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.PROMOTE,	17);	// D53
    design.addCommand(34, ZRF.MODE,	3);	// type-3
    design.addCommand(34, ZRF.FUNCTION,	25);	// to
    design.addCommand(34, ZRF.FUNCTION,	28);	// end

    design.addCommand(35, ZRF.FUNCTION,	24);	// from
    design.addCommand(35, ZRF.PARAM,	0);	// $1
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.PROMOTE,	5);	// D23
    design.addCommand(35, ZRF.MODE,	3);	// type-3
    design.addCommand(35, ZRF.FUNCTION,	25);	// to
    design.addCommand(35, ZRF.FUNCTION,	28);	// end

    design.addCommand(36, ZRF.FUNCTION,	24);	// from
    design.addCommand(36, ZRF.PARAM,	0);	// $1
    design.addCommand(36, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(36, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.PROMOTE,	11);	// D36
    design.addCommand(36, ZRF.MODE,	4);	// type-4
    design.addCommand(36, ZRF.FUNCTION,	25);	// to
    design.addCommand(36, ZRF.FUNCTION,	28);	// end

    design.addCommand(37, ZRF.FUNCTION,	24);	// from
    design.addCommand(37, ZRF.PARAM,	0);	// $1
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.PROMOTE,	12);	// D41
    design.addCommand(37, ZRF.MODE,	4);	// type-4
    design.addCommand(37, ZRF.FUNCTION,	25);	// to
    design.addCommand(37, ZRF.FUNCTION,	28);	// end

    design.addCommand(38, ZRF.FUNCTION,	24);	// from
    design.addCommand(38, ZRF.PARAM,	0);	// $1
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PROMOTE,	17);	// D53
    design.addCommand(38, ZRF.MODE,	4);	// type-4
    design.addCommand(38, ZRF.FUNCTION,	25);	// to
    design.addCommand(38, ZRF.FUNCTION,	28);	// end

    design.addCommand(39, ZRF.FUNCTION,	24);	// from
    design.addCommand(39, ZRF.PARAM,	0);	// $1
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.PROMOTE,	5);	// D23
    design.addCommand(39, ZRF.MODE,	4);	// type-4
    design.addCommand(39, ZRF.FUNCTION,	25);	// to
    design.addCommand(39, ZRF.FUNCTION,	28);	// end

    design.addCommand(40, ZRF.FUNCTION,	24);	// from
    design.addCommand(40, ZRF.PARAM,	0);	// $1
    design.addCommand(40, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(40, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.PROMOTE,	15);	// D46
    design.addCommand(40, ZRF.FUNCTION,	25);	// to
    design.addCommand(40, ZRF.FUNCTION,	28);	// end

    design.addCommand(41, ZRF.FUNCTION,	24);	// from
    design.addCommand(41, ZRF.PARAM,	0);	// $1
    design.addCommand(41, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(41, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.PROMOTE,	8);	// D31
    design.addCommand(41, ZRF.FUNCTION,	25);	// to
    design.addCommand(41, ZRF.FUNCTION,	28);	// end

    design.addCommand(42, ZRF.FUNCTION,	24);	// from
    design.addCommand(42, ZRF.PARAM,	0);	// $1
    design.addCommand(42, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(42, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.PROMOTE,	6);	// D24
    design.addCommand(42, ZRF.FUNCTION,	25);	// to
    design.addCommand(42, ZRF.FUNCTION,	28);	// end

    design.addCommand(43, ZRF.FUNCTION,	24);	// from
    design.addCommand(43, ZRF.PARAM,	0);	// $1
    design.addCommand(43, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(43, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.PROMOTE,	18);	// D54
    design.addCommand(43, ZRF.FUNCTION,	25);	// to
    design.addCommand(43, ZRF.FUNCTION,	28);	// end

    design.addCommand(44, ZRF.FUNCTION,	24);	// from
    design.addCommand(44, ZRF.PARAM,	0);	// $1
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.PROMOTE,	15);	// D46
    design.addCommand(44, ZRF.MODE,	1);	// type-1
    design.addCommand(44, ZRF.FUNCTION,	25);	// to
    design.addCommand(44, ZRF.FUNCTION,	28);	// end

    design.addCommand(45, ZRF.FUNCTION,	24);	// from
    design.addCommand(45, ZRF.PARAM,	0);	// $1
    design.addCommand(45, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(45, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.PROMOTE,	8);	// D31
    design.addCommand(45, ZRF.MODE,	1);	// type-1
    design.addCommand(45, ZRF.FUNCTION,	25);	// to
    design.addCommand(45, ZRF.FUNCTION,	28);	// end

    design.addCommand(46, ZRF.FUNCTION,	24);	// from
    design.addCommand(46, ZRF.PARAM,	0);	// $1
    design.addCommand(46, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(46, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.PROMOTE,	6);	// D24
    design.addCommand(46, ZRF.MODE,	1);	// type-1
    design.addCommand(46, ZRF.FUNCTION,	25);	// to
    design.addCommand(46, ZRF.FUNCTION,	28);	// end

    design.addCommand(47, ZRF.FUNCTION,	24);	// from
    design.addCommand(47, ZRF.PARAM,	0);	// $1
    design.addCommand(47, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(47, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.PROMOTE,	18);	// D54
    design.addCommand(47, ZRF.MODE,	1);	// type-1
    design.addCommand(47, ZRF.FUNCTION,	25);	// to
    design.addCommand(47, ZRF.FUNCTION,	28);	// end

    design.addCommand(48, ZRF.FUNCTION,	24);	// from
    design.addCommand(48, ZRF.PARAM,	0);	// $1
    design.addCommand(48, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(48, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.PROMOTE,	15);	// D46
    design.addCommand(48, ZRF.MODE,	2);	// type-2
    design.addCommand(48, ZRF.FUNCTION,	25);	// to
    design.addCommand(48, ZRF.FUNCTION,	28);	// end

    design.addCommand(49, ZRF.FUNCTION,	24);	// from
    design.addCommand(49, ZRF.PARAM,	0);	// $1
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.PROMOTE,	8);	// D31
    design.addCommand(49, ZRF.MODE,	2);	// type-2
    design.addCommand(49, ZRF.FUNCTION,	25);	// to
    design.addCommand(49, ZRF.FUNCTION,	28);	// end

    design.addCommand(50, ZRF.FUNCTION,	24);	// from
    design.addCommand(50, ZRF.PARAM,	0);	// $1
    design.addCommand(50, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(50, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.PROMOTE,	6);	// D24
    design.addCommand(50, ZRF.MODE,	2);	// type-2
    design.addCommand(50, ZRF.FUNCTION,	25);	// to
    design.addCommand(50, ZRF.FUNCTION,	28);	// end

    design.addCommand(51, ZRF.FUNCTION,	24);	// from
    design.addCommand(51, ZRF.PARAM,	0);	// $1
    design.addCommand(51, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(51, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(51, ZRF.FUNCTION,	20);	// verify
    design.addCommand(51, ZRF.PROMOTE,	18);	// D54
    design.addCommand(51, ZRF.MODE,	2);	// type-2
    design.addCommand(51, ZRF.FUNCTION,	25);	// to
    design.addCommand(51, ZRF.FUNCTION,	28);	// end

    design.addCommand(52, ZRF.FUNCTION,	24);	// from
    design.addCommand(52, ZRF.PARAM,	0);	// $1
    design.addCommand(52, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(52, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(52, ZRF.FUNCTION,	20);	// verify
    design.addCommand(52, ZRF.PROMOTE,	15);	// D46
    design.addCommand(52, ZRF.MODE,	3);	// type-3
    design.addCommand(52, ZRF.FUNCTION,	25);	// to
    design.addCommand(52, ZRF.FUNCTION,	28);	// end

    design.addCommand(53, ZRF.FUNCTION,	24);	// from
    design.addCommand(53, ZRF.PARAM,	0);	// $1
    design.addCommand(53, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(53, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.PROMOTE,	8);	// D31
    design.addCommand(53, ZRF.MODE,	3);	// type-3
    design.addCommand(53, ZRF.FUNCTION,	25);	// to
    design.addCommand(53, ZRF.FUNCTION,	28);	// end

    design.addCommand(54, ZRF.FUNCTION,	24);	// from
    design.addCommand(54, ZRF.PARAM,	0);	// $1
    design.addCommand(54, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(54, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.PROMOTE,	6);	// D24
    design.addCommand(54, ZRF.MODE,	3);	// type-3
    design.addCommand(54, ZRF.FUNCTION,	25);	// to
    design.addCommand(54, ZRF.FUNCTION,	28);	// end

    design.addCommand(55, ZRF.FUNCTION,	24);	// from
    design.addCommand(55, ZRF.PARAM,	0);	// $1
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.PROMOTE,	18);	// D54
    design.addCommand(55, ZRF.MODE,	3);	// type-3
    design.addCommand(55, ZRF.FUNCTION,	25);	// to
    design.addCommand(55, ZRF.FUNCTION,	28);	// end

    design.addCommand(56, ZRF.FUNCTION,	24);	// from
    design.addCommand(56, ZRF.PARAM,	0);	// $1
    design.addCommand(56, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(56, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.PROMOTE,	15);	// D46
    design.addCommand(56, ZRF.MODE,	4);	// type-4
    design.addCommand(56, ZRF.FUNCTION,	25);	// to
    design.addCommand(56, ZRF.FUNCTION,	28);	// end

    design.addCommand(57, ZRF.FUNCTION,	24);	// from
    design.addCommand(57, ZRF.PARAM,	0);	// $1
    design.addCommand(57, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(57, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(57, ZRF.FUNCTION,	20);	// verify
    design.addCommand(57, ZRF.PROMOTE,	8);	// D31
    design.addCommand(57, ZRF.MODE,	4);	// type-4
    design.addCommand(57, ZRF.FUNCTION,	25);	// to
    design.addCommand(57, ZRF.FUNCTION,	28);	// end

    design.addCommand(58, ZRF.FUNCTION,	24);	// from
    design.addCommand(58, ZRF.PARAM,	0);	// $1
    design.addCommand(58, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(58, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(58, ZRF.FUNCTION,	20);	// verify
    design.addCommand(58, ZRF.PROMOTE,	6);	// D24
    design.addCommand(58, ZRF.MODE,	4);	// type-4
    design.addCommand(58, ZRF.FUNCTION,	25);	// to
    design.addCommand(58, ZRF.FUNCTION,	28);	// end

    design.addCommand(59, ZRF.FUNCTION,	24);	// from
    design.addCommand(59, ZRF.PARAM,	0);	// $1
    design.addCommand(59, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(59, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.PROMOTE,	18);	// D54
    design.addCommand(59, ZRF.MODE,	4);	// type-4
    design.addCommand(59, ZRF.FUNCTION,	25);	// to
    design.addCommand(59, ZRF.FUNCTION,	28);	// end

    design.addCommand(60, ZRF.FUNCTION,	24);	// from
    design.addCommand(60, ZRF.PARAM,	0);	// $1
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.PROMOTE,	19);	// D56
    design.addCommand(60, ZRF.FUNCTION,	25);	// to
    design.addCommand(60, ZRF.FUNCTION,	28);	// end

    design.addCommand(61, ZRF.FUNCTION,	24);	// from
    design.addCommand(61, ZRF.PARAM,	0);	// $1
    design.addCommand(61, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(61, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.PROMOTE,	4);	// D21
    design.addCommand(61, ZRF.FUNCTION,	25);	// to
    design.addCommand(61, ZRF.FUNCTION,	28);	// end

    design.addCommand(62, ZRF.FUNCTION,	24);	// from
    design.addCommand(62, ZRF.PARAM,	0);	// $1
    design.addCommand(62, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(62, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(62, ZRF.FUNCTION,	20);	// verify
    design.addCommand(62, ZRF.PROMOTE,	14);	// D45
    design.addCommand(62, ZRF.FUNCTION,	25);	// to
    design.addCommand(62, ZRF.FUNCTION,	28);	// end

    design.addCommand(63, ZRF.FUNCTION,	24);	// from
    design.addCommand(63, ZRF.PARAM,	0);	// $1
    design.addCommand(63, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(63, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.PROMOTE,	10);	// D35
    design.addCommand(63, ZRF.FUNCTION,	25);	// to
    design.addCommand(63, ZRF.FUNCTION,	28);	// end

    design.addCommand(64, ZRF.FUNCTION,	24);	// from
    design.addCommand(64, ZRF.PARAM,	0);	// $1
    design.addCommand(64, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(64, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.PROMOTE,	19);	// D56
    design.addCommand(64, ZRF.MODE,	1);	// type-1
    design.addCommand(64, ZRF.FUNCTION,	25);	// to
    design.addCommand(64, ZRF.FUNCTION,	28);	// end

    design.addCommand(65, ZRF.FUNCTION,	24);	// from
    design.addCommand(65, ZRF.PARAM,	0);	// $1
    design.addCommand(65, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(65, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(65, ZRF.FUNCTION,	20);	// verify
    design.addCommand(65, ZRF.PROMOTE,	4);	// D21
    design.addCommand(65, ZRF.MODE,	1);	// type-1
    design.addCommand(65, ZRF.FUNCTION,	25);	// to
    design.addCommand(65, ZRF.FUNCTION,	28);	// end

    design.addCommand(66, ZRF.FUNCTION,	24);	// from
    design.addCommand(66, ZRF.PARAM,	0);	// $1
    design.addCommand(66, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(66, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.PROMOTE,	14);	// D45
    design.addCommand(66, ZRF.MODE,	1);	// type-1
    design.addCommand(66, ZRF.FUNCTION,	25);	// to
    design.addCommand(66, ZRF.FUNCTION,	28);	// end

    design.addCommand(67, ZRF.FUNCTION,	24);	// from
    design.addCommand(67, ZRF.PARAM,	0);	// $1
    design.addCommand(67, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(67, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.PROMOTE,	10);	// D35
    design.addCommand(67, ZRF.MODE,	1);	// type-1
    design.addCommand(67, ZRF.FUNCTION,	25);	// to
    design.addCommand(67, ZRF.FUNCTION,	28);	// end

    design.addCommand(68, ZRF.FUNCTION,	24);	// from
    design.addCommand(68, ZRF.PARAM,	0);	// $1
    design.addCommand(68, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(68, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(68, ZRF.FUNCTION,	20);	// verify
    design.addCommand(68, ZRF.PROMOTE,	19);	// D56
    design.addCommand(68, ZRF.MODE,	2);	// type-2
    design.addCommand(68, ZRF.FUNCTION,	25);	// to
    design.addCommand(68, ZRF.FUNCTION,	28);	// end

    design.addCommand(69, ZRF.FUNCTION,	24);	// from
    design.addCommand(69, ZRF.PARAM,	0);	// $1
    design.addCommand(69, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(69, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.PROMOTE,	4);	// D21
    design.addCommand(69, ZRF.MODE,	2);	// type-2
    design.addCommand(69, ZRF.FUNCTION,	25);	// to
    design.addCommand(69, ZRF.FUNCTION,	28);	// end

    design.addCommand(70, ZRF.FUNCTION,	24);	// from
    design.addCommand(70, ZRF.PARAM,	0);	// $1
    design.addCommand(70, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(70, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.PROMOTE,	14);	// D45
    design.addCommand(70, ZRF.MODE,	2);	// type-2
    design.addCommand(70, ZRF.FUNCTION,	25);	// to
    design.addCommand(70, ZRF.FUNCTION,	28);	// end

    design.addCommand(71, ZRF.FUNCTION,	24);	// from
    design.addCommand(71, ZRF.PARAM,	0);	// $1
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	20);	// verify
    design.addCommand(71, ZRF.PROMOTE,	10);	// D35
    design.addCommand(71, ZRF.MODE,	2);	// type-2
    design.addCommand(71, ZRF.FUNCTION,	25);	// to
    design.addCommand(71, ZRF.FUNCTION,	28);	// end

    design.addCommand(72, ZRF.FUNCTION,	24);	// from
    design.addCommand(72, ZRF.PARAM,	0);	// $1
    design.addCommand(72, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(72, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.PROMOTE,	19);	// D56
    design.addCommand(72, ZRF.MODE,	3);	// type-3
    design.addCommand(72, ZRF.FUNCTION,	25);	// to
    design.addCommand(72, ZRF.FUNCTION,	28);	// end

    design.addCommand(73, ZRF.FUNCTION,	24);	// from
    design.addCommand(73, ZRF.PARAM,	0);	// $1
    design.addCommand(73, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(73, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(73, ZRF.FUNCTION,	20);	// verify
    design.addCommand(73, ZRF.PROMOTE,	4);	// D21
    design.addCommand(73, ZRF.MODE,	3);	// type-3
    design.addCommand(73, ZRF.FUNCTION,	25);	// to
    design.addCommand(73, ZRF.FUNCTION,	28);	// end

    design.addCommand(74, ZRF.FUNCTION,	24);	// from
    design.addCommand(74, ZRF.PARAM,	0);	// $1
    design.addCommand(74, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(74, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.PROMOTE,	14);	// D45
    design.addCommand(74, ZRF.MODE,	3);	// type-3
    design.addCommand(74, ZRF.FUNCTION,	25);	// to
    design.addCommand(74, ZRF.FUNCTION,	28);	// end

    design.addCommand(75, ZRF.FUNCTION,	24);	// from
    design.addCommand(75, ZRF.PARAM,	0);	// $1
    design.addCommand(75, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(75, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.PROMOTE,	10);	// D35
    design.addCommand(75, ZRF.MODE,	3);	// type-3
    design.addCommand(75, ZRF.FUNCTION,	25);	// to
    design.addCommand(75, ZRF.FUNCTION,	28);	// end

    design.addCommand(76, ZRF.FUNCTION,	24);	// from
    design.addCommand(76, ZRF.PARAM,	0);	// $1
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.PROMOTE,	19);	// D56
    design.addCommand(76, ZRF.MODE,	4);	// type-4
    design.addCommand(76, ZRF.FUNCTION,	25);	// to
    design.addCommand(76, ZRF.FUNCTION,	28);	// end

    design.addCommand(77, ZRF.FUNCTION,	24);	// from
    design.addCommand(77, ZRF.PARAM,	0);	// $1
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PROMOTE,	4);	// D21
    design.addCommand(77, ZRF.MODE,	4);	// type-4
    design.addCommand(77, ZRF.FUNCTION,	25);	// to
    design.addCommand(77, ZRF.FUNCTION,	28);	// end

    design.addCommand(78, ZRF.FUNCTION,	24);	// from
    design.addCommand(78, ZRF.PARAM,	0);	// $1
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PROMOTE,	14);	// D45
    design.addCommand(78, ZRF.MODE,	4);	// type-4
    design.addCommand(78, ZRF.FUNCTION,	25);	// to
    design.addCommand(78, ZRF.FUNCTION,	28);	// end

    design.addCommand(79, ZRF.FUNCTION,	24);	// from
    design.addCommand(79, ZRF.PARAM,	0);	// $1
    design.addCommand(79, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(79, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.PROMOTE,	10);	// D35
    design.addCommand(79, ZRF.MODE,	4);	// type-4
    design.addCommand(79, ZRF.FUNCTION,	25);	// to
    design.addCommand(79, ZRF.FUNCTION,	28);	// end

    design.addCommand(80, ZRF.FUNCTION,	24);	// from
    design.addCommand(80, ZRF.PARAM,	0);	// $1
    design.addCommand(80, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(80, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.PROMOTE,	3);	// D15
    design.addCommand(80, ZRF.MODE,	1);	// type-1
    design.addCommand(80, ZRF.FUNCTION,	25);	// to
    design.addCommand(80, ZRF.FUNCTION,	28);	// end

    design.addCommand(81, ZRF.FUNCTION,	24);	// from
    design.addCommand(81, ZRF.PARAM,	0);	// $1
    design.addCommand(81, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(81, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.PROMOTE,	20);	// D62
    design.addCommand(81, ZRF.MODE,	1);	// type-1
    design.addCommand(81, ZRF.FUNCTION,	25);	// to
    design.addCommand(81, ZRF.FUNCTION,	28);	// end

    design.addCommand(82, ZRF.FUNCTION,	24);	// from
    design.addCommand(82, ZRF.PARAM,	0);	// $1
    design.addCommand(82, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(82, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.PROMOTE,	3);	// D15
    design.addCommand(82, ZRF.FUNCTION,	25);	// to
    design.addCommand(82, ZRF.FUNCTION,	28);	// end

    design.addCommand(83, ZRF.FUNCTION,	24);	// from
    design.addCommand(83, ZRF.PARAM,	0);	// $1
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.PROMOTE,	20);	// D62
    design.addCommand(83, ZRF.FUNCTION,	25);	// to
    design.addCommand(83, ZRF.FUNCTION,	28);	// end

    design.addCommand(84, ZRF.FUNCTION,	24);	// from
    design.addCommand(84, ZRF.PARAM,	0);	// $1
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PROMOTE,	3);	// D15
    design.addCommand(84, ZRF.MODE,	2);	// type-2
    design.addCommand(84, ZRF.FUNCTION,	25);	// to
    design.addCommand(84, ZRF.FUNCTION,	28);	// end

    design.addCommand(85, ZRF.FUNCTION,	24);	// from
    design.addCommand(85, ZRF.PARAM,	0);	// $1
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PROMOTE,	20);	// D62
    design.addCommand(85, ZRF.MODE,	2);	// type-2
    design.addCommand(85, ZRF.FUNCTION,	25);	// to
    design.addCommand(85, ZRF.FUNCTION,	28);	// end

    design.addCommand(86, ZRF.FUNCTION,	24);	// from
    design.addCommand(86, ZRF.PARAM,	0);	// $1
    design.addCommand(86, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(86, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(86, ZRF.FUNCTION,	20);	// verify
    design.addCommand(86, ZRF.PROMOTE,	3);	// D15
    design.addCommand(86, ZRF.MODE,	3);	// type-3
    design.addCommand(86, ZRF.FUNCTION,	25);	// to
    design.addCommand(86, ZRF.FUNCTION,	28);	// end

    design.addCommand(87, ZRF.FUNCTION,	24);	// from
    design.addCommand(87, ZRF.PARAM,	0);	// $1
    design.addCommand(87, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(87, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(87, ZRF.FUNCTION,	20);	// verify
    design.addCommand(87, ZRF.PROMOTE,	20);	// D62
    design.addCommand(87, ZRF.MODE,	3);	// type-3
    design.addCommand(87, ZRF.FUNCTION,	25);	// to
    design.addCommand(87, ZRF.FUNCTION,	28);	// end

    design.addCommand(88, ZRF.FUNCTION,	24);	// from
    design.addCommand(88, ZRF.PARAM,	0);	// $1
    design.addCommand(88, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(88, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(88, ZRF.FUNCTION,	20);	// verify
    design.addCommand(88, ZRF.PROMOTE,	3);	// D15
    design.addCommand(88, ZRF.MODE,	4);	// type-4
    design.addCommand(88, ZRF.FUNCTION,	25);	// to
    design.addCommand(88, ZRF.FUNCTION,	28);	// end

    design.addCommand(89, ZRF.FUNCTION,	24);	// from
    design.addCommand(89, ZRF.PARAM,	0);	// $1
    design.addCommand(89, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(89, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(89, ZRF.FUNCTION,	20);	// verify
    design.addCommand(89, ZRF.PROMOTE,	20);	// D62
    design.addCommand(89, ZRF.MODE,	4);	// type-4
    design.addCommand(89, ZRF.FUNCTION,	25);	// to
    design.addCommand(89, ZRF.FUNCTION,	28);	// end

    design.addCommand(90, ZRF.FUNCTION,	24);	// from
    design.addCommand(90, ZRF.PARAM,	0);	// $1
    design.addCommand(90, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(90, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(90, ZRF.FUNCTION,	20);	// verify
    design.addCommand(90, ZRF.PROMOTE,	1);	// D13
    design.addCommand(90, ZRF.MODE,	1);	// type-1
    design.addCommand(90, ZRF.FUNCTION,	25);	// to
    design.addCommand(90, ZRF.FUNCTION,	28);	// end

    design.addCommand(91, ZRF.FUNCTION,	24);	// from
    design.addCommand(91, ZRF.PARAM,	0);	// $1
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.PROMOTE,	21);	// D63
    design.addCommand(91, ZRF.MODE,	1);	// type-1
    design.addCommand(91, ZRF.FUNCTION,	25);	// to
    design.addCommand(91, ZRF.FUNCTION,	28);	// end

    design.addCommand(92, ZRF.FUNCTION,	24);	// from
    design.addCommand(92, ZRF.PARAM,	0);	// $1
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PROMOTE,	1);	// D13
    design.addCommand(92, ZRF.FUNCTION,	25);	// to
    design.addCommand(92, ZRF.FUNCTION,	28);	// end

    design.addCommand(93, ZRF.FUNCTION,	24);	// from
    design.addCommand(93, ZRF.PARAM,	0);	// $1
    design.addCommand(93, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(93, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(93, ZRF.FUNCTION,	20);	// verify
    design.addCommand(93, ZRF.PROMOTE,	21);	// D63
    design.addCommand(93, ZRF.FUNCTION,	25);	// to
    design.addCommand(93, ZRF.FUNCTION,	28);	// end

    design.addCommand(94, ZRF.FUNCTION,	24);	// from
    design.addCommand(94, ZRF.PARAM,	0);	// $1
    design.addCommand(94, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(94, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(94, ZRF.FUNCTION,	20);	// verify
    design.addCommand(94, ZRF.PROMOTE,	1);	// D13
    design.addCommand(94, ZRF.MODE,	2);	// type-2
    design.addCommand(94, ZRF.FUNCTION,	25);	// to
    design.addCommand(94, ZRF.FUNCTION,	28);	// end

    design.addCommand(95, ZRF.FUNCTION,	24);	// from
    design.addCommand(95, ZRF.PARAM,	0);	// $1
    design.addCommand(95, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(95, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(95, ZRF.FUNCTION,	20);	// verify
    design.addCommand(95, ZRF.PROMOTE,	21);	// D63
    design.addCommand(95, ZRF.MODE,	2);	// type-2
    design.addCommand(95, ZRF.FUNCTION,	25);	// to
    design.addCommand(95, ZRF.FUNCTION,	28);	// end

    design.addCommand(96, ZRF.FUNCTION,	24);	// from
    design.addCommand(96, ZRF.PARAM,	0);	// $1
    design.addCommand(96, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(96, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(96, ZRF.FUNCTION,	20);	// verify
    design.addCommand(96, ZRF.PROMOTE,	1);	// D13
    design.addCommand(96, ZRF.MODE,	3);	// type-3
    design.addCommand(96, ZRF.FUNCTION,	25);	// to
    design.addCommand(96, ZRF.FUNCTION,	28);	// end

    design.addCommand(97, ZRF.FUNCTION,	24);	// from
    design.addCommand(97, ZRF.PARAM,	0);	// $1
    design.addCommand(97, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(97, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(97, ZRF.FUNCTION,	20);	// verify
    design.addCommand(97, ZRF.PROMOTE,	21);	// D63
    design.addCommand(97, ZRF.MODE,	3);	// type-3
    design.addCommand(97, ZRF.FUNCTION,	25);	// to
    design.addCommand(97, ZRF.FUNCTION,	28);	// end

    design.addCommand(98, ZRF.FUNCTION,	24);	// from
    design.addCommand(98, ZRF.PARAM,	0);	// $1
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.PROMOTE,	1);	// D13
    design.addCommand(98, ZRF.MODE,	4);	// type-4
    design.addCommand(98, ZRF.FUNCTION,	25);	// to
    design.addCommand(98, ZRF.FUNCTION,	28);	// end

    design.addCommand(99, ZRF.FUNCTION,	24);	// from
    design.addCommand(99, ZRF.PARAM,	0);	// $1
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PROMOTE,	21);	// D63
    design.addCommand(99, ZRF.MODE,	4);	// type-4
    design.addCommand(99, ZRF.FUNCTION,	25);	// to
    design.addCommand(99, ZRF.FUNCTION,	28);	// end

    design.addCommand(100, ZRF.FUNCTION,	24);	// from
    design.addCommand(100, ZRF.PARAM,	0);	// $1
    design.addCommand(100, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(100, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(100, ZRF.FUNCTION,	20);	// verify
    design.addCommand(100, ZRF.PROMOTE,	22);	// D64
    design.addCommand(100, ZRF.MODE,	1);	// type-1
    design.addCommand(100, ZRF.FUNCTION,	25);	// to
    design.addCommand(100, ZRF.FUNCTION,	28);	// end

    design.addCommand(101, ZRF.FUNCTION,	24);	// from
    design.addCommand(101, ZRF.PARAM,	0);	// $1
    design.addCommand(101, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(101, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(101, ZRF.FUNCTION,	20);	// verify
    design.addCommand(101, ZRF.PROMOTE,	2);	// D14
    design.addCommand(101, ZRF.MODE,	1);	// type-1
    design.addCommand(101, ZRF.FUNCTION,	25);	// to
    design.addCommand(101, ZRF.FUNCTION,	28);	// end

    design.addCommand(102, ZRF.FUNCTION,	24);	// from
    design.addCommand(102, ZRF.PARAM,	0);	// $1
    design.addCommand(102, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(102, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(102, ZRF.FUNCTION,	20);	// verify
    design.addCommand(102, ZRF.PROMOTE,	22);	// D64
    design.addCommand(102, ZRF.FUNCTION,	25);	// to
    design.addCommand(102, ZRF.FUNCTION,	28);	// end

    design.addCommand(103, ZRF.FUNCTION,	24);	// from
    design.addCommand(103, ZRF.PARAM,	0);	// $1
    design.addCommand(103, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(103, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(103, ZRF.FUNCTION,	20);	// verify
    design.addCommand(103, ZRF.PROMOTE,	2);	// D14
    design.addCommand(103, ZRF.FUNCTION,	25);	// to
    design.addCommand(103, ZRF.FUNCTION,	28);	// end

    design.addCommand(104, ZRF.FUNCTION,	24);	// from
    design.addCommand(104, ZRF.PARAM,	0);	// $1
    design.addCommand(104, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(104, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(104, ZRF.FUNCTION,	20);	// verify
    design.addCommand(104, ZRF.PROMOTE,	22);	// D64
    design.addCommand(104, ZRF.MODE,	2);	// type-2
    design.addCommand(104, ZRF.FUNCTION,	25);	// to
    design.addCommand(104, ZRF.FUNCTION,	28);	// end

    design.addCommand(105, ZRF.FUNCTION,	24);	// from
    design.addCommand(105, ZRF.PARAM,	0);	// $1
    design.addCommand(105, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(105, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(105, ZRF.FUNCTION,	20);	// verify
    design.addCommand(105, ZRF.PROMOTE,	2);	// D14
    design.addCommand(105, ZRF.MODE,	2);	// type-2
    design.addCommand(105, ZRF.FUNCTION,	25);	// to
    design.addCommand(105, ZRF.FUNCTION,	28);	// end

    design.addCommand(106, ZRF.FUNCTION,	24);	// from
    design.addCommand(106, ZRF.PARAM,	0);	// $1
    design.addCommand(106, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(106, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(106, ZRF.FUNCTION,	20);	// verify
    design.addCommand(106, ZRF.PROMOTE,	22);	// D64
    design.addCommand(106, ZRF.MODE,	3);	// type-3
    design.addCommand(106, ZRF.FUNCTION,	25);	// to
    design.addCommand(106, ZRF.FUNCTION,	28);	// end

    design.addCommand(107, ZRF.FUNCTION,	24);	// from
    design.addCommand(107, ZRF.PARAM,	0);	// $1
    design.addCommand(107, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(107, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(107, ZRF.FUNCTION,	20);	// verify
    design.addCommand(107, ZRF.PROMOTE,	2);	// D14
    design.addCommand(107, ZRF.MODE,	3);	// type-3
    design.addCommand(107, ZRF.FUNCTION,	25);	// to
    design.addCommand(107, ZRF.FUNCTION,	28);	// end

    design.addCommand(108, ZRF.FUNCTION,	24);	// from
    design.addCommand(108, ZRF.PARAM,	0);	// $1
    design.addCommand(108, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(108, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(108, ZRF.FUNCTION,	20);	// verify
    design.addCommand(108, ZRF.PROMOTE,	22);	// D64
    design.addCommand(108, ZRF.MODE,	4);	// type-4
    design.addCommand(108, ZRF.FUNCTION,	25);	// to
    design.addCommand(108, ZRF.FUNCTION,	28);	// end

    design.addCommand(109, ZRF.FUNCTION,	24);	// from
    design.addCommand(109, ZRF.PARAM,	0);	// $1
    design.addCommand(109, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(109, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(109, ZRF.FUNCTION,	20);	// verify
    design.addCommand(109, ZRF.PROMOTE,	2);	// D14
    design.addCommand(109, ZRF.MODE,	4);	// type-4
    design.addCommand(109, ZRF.FUNCTION,	25);	// to
    design.addCommand(109, ZRF.FUNCTION,	28);	// end

    design.addCommand(110, ZRF.FUNCTION,	24);	// from
    design.addCommand(110, ZRF.PARAM,	0);	// $1
    design.addCommand(110, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(110, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(110, ZRF.FUNCTION,	20);	// verify
    design.addCommand(110, ZRF.PROMOTE,	23);	// D65
    design.addCommand(110, ZRF.MODE,	1);	// type-1
    design.addCommand(110, ZRF.FUNCTION,	25);	// to
    design.addCommand(110, ZRF.FUNCTION,	28);	// end

    design.addCommand(111, ZRF.FUNCTION,	24);	// from
    design.addCommand(111, ZRF.PARAM,	0);	// $1
    design.addCommand(111, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(111, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(111, ZRF.FUNCTION,	20);	// verify
    design.addCommand(111, ZRF.PROMOTE,	0);	// D12
    design.addCommand(111, ZRF.MODE,	1);	// type-1
    design.addCommand(111, ZRF.FUNCTION,	25);	// to
    design.addCommand(111, ZRF.FUNCTION,	28);	// end

    design.addCommand(112, ZRF.FUNCTION,	24);	// from
    design.addCommand(112, ZRF.PARAM,	0);	// $1
    design.addCommand(112, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(112, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(112, ZRF.FUNCTION,	20);	// verify
    design.addCommand(112, ZRF.PROMOTE,	23);	// D65
    design.addCommand(112, ZRF.FUNCTION,	25);	// to
    design.addCommand(112, ZRF.FUNCTION,	28);	// end

    design.addCommand(113, ZRF.FUNCTION,	24);	// from
    design.addCommand(113, ZRF.PARAM,	0);	// $1
    design.addCommand(113, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(113, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(113, ZRF.FUNCTION,	20);	// verify
    design.addCommand(113, ZRF.PROMOTE,	0);	// D12
    design.addCommand(113, ZRF.FUNCTION,	25);	// to
    design.addCommand(113, ZRF.FUNCTION,	28);	// end

    design.addCommand(114, ZRF.FUNCTION,	24);	// from
    design.addCommand(114, ZRF.PARAM,	0);	// $1
    design.addCommand(114, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(114, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(114, ZRF.FUNCTION,	20);	// verify
    design.addCommand(114, ZRF.PROMOTE,	23);	// D65
    design.addCommand(114, ZRF.MODE,	2);	// type-2
    design.addCommand(114, ZRF.FUNCTION,	25);	// to
    design.addCommand(114, ZRF.FUNCTION,	28);	// end

    design.addCommand(115, ZRF.FUNCTION,	24);	// from
    design.addCommand(115, ZRF.PARAM,	0);	// $1
    design.addCommand(115, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(115, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(115, ZRF.FUNCTION,	20);	// verify
    design.addCommand(115, ZRF.PROMOTE,	0);	// D12
    design.addCommand(115, ZRF.MODE,	2);	// type-2
    design.addCommand(115, ZRF.FUNCTION,	25);	// to
    design.addCommand(115, ZRF.FUNCTION,	28);	// end

    design.addCommand(116, ZRF.FUNCTION,	24);	// from
    design.addCommand(116, ZRF.PARAM,	0);	// $1
    design.addCommand(116, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(116, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(116, ZRF.FUNCTION,	20);	// verify
    design.addCommand(116, ZRF.PROMOTE,	23);	// D65
    design.addCommand(116, ZRF.MODE,	3);	// type-3
    design.addCommand(116, ZRF.FUNCTION,	25);	// to
    design.addCommand(116, ZRF.FUNCTION,	28);	// end

    design.addCommand(117, ZRF.FUNCTION,	24);	// from
    design.addCommand(117, ZRF.PARAM,	0);	// $1
    design.addCommand(117, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(117, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(117, ZRF.FUNCTION,	20);	// verify
    design.addCommand(117, ZRF.PROMOTE,	0);	// D12
    design.addCommand(117, ZRF.MODE,	3);	// type-3
    design.addCommand(117, ZRF.FUNCTION,	25);	// to
    design.addCommand(117, ZRF.FUNCTION,	28);	// end

    design.addCommand(118, ZRF.FUNCTION,	24);	// from
    design.addCommand(118, ZRF.PARAM,	0);	// $1
    design.addCommand(118, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(118, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(118, ZRF.FUNCTION,	20);	// verify
    design.addCommand(118, ZRF.PROMOTE,	23);	// D65
    design.addCommand(118, ZRF.MODE,	4);	// type-4
    design.addCommand(118, ZRF.FUNCTION,	25);	// to
    design.addCommand(118, ZRF.FUNCTION,	28);	// end

    design.addCommand(119, ZRF.FUNCTION,	24);	// from
    design.addCommand(119, ZRF.PARAM,	0);	// $1
    design.addCommand(119, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(119, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(119, ZRF.FUNCTION,	20);	// verify
    design.addCommand(119, ZRF.PROMOTE,	0);	// D12
    design.addCommand(119, ZRF.MODE,	4);	// type-4
    design.addCommand(119, ZRF.FUNCTION,	25);	// to
    design.addCommand(119, ZRF.FUNCTION,	28);	// end

    design.addCommand(120, ZRF.FUNCTION,	24);	// from
    design.addCommand(120, ZRF.PARAM,	0);	// $1
    design.addCommand(120, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(120, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(120, ZRF.FUNCTION,	20);	// verify
    design.addCommand(120, ZRF.PROMOTE,	4);	// D21
    design.addCommand(120, ZRF.MODE,	5);	// type-5
    design.addCommand(120, ZRF.FUNCTION,	25);	// to
    design.addCommand(120, ZRF.FUNCTION,	28);	// end

    design.addCommand(121, ZRF.FUNCTION,	24);	// from
    design.addCommand(121, ZRF.PARAM,	0);	// $1
    design.addCommand(121, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(121, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(121, ZRF.FUNCTION,	20);	// verify
    design.addCommand(121, ZRF.PROMOTE,	19);	// D56
    design.addCommand(121, ZRF.MODE,	5);	// type-5
    design.addCommand(121, ZRF.FUNCTION,	25);	// to
    design.addCommand(121, ZRF.FUNCTION,	28);	// end

    design.addCommand(122, ZRF.FUNCTION,	24);	// from
    design.addCommand(122, ZRF.PARAM,	0);	// $1
    design.addCommand(122, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(122, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(122, ZRF.FUNCTION,	20);	// verify
    design.addCommand(122, ZRF.PROMOTE,	13);	// D42
    design.addCommand(122, ZRF.MODE,	5);	// type-5
    design.addCommand(122, ZRF.FUNCTION,	25);	// to
    design.addCommand(122, ZRF.FUNCTION,	28);	// end

    design.addCommand(123, ZRF.FUNCTION,	24);	// from
    design.addCommand(123, ZRF.PARAM,	0);	// $1
    design.addCommand(123, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(123, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(123, ZRF.FUNCTION,	20);	// verify
    design.addCommand(123, ZRF.PROMOTE,	9);	// D32
    design.addCommand(123, ZRF.MODE,	5);	// type-5
    design.addCommand(123, ZRF.FUNCTION,	25);	// to
    design.addCommand(123, ZRF.FUNCTION,	28);	// end

    design.addCommand(124, ZRF.FUNCTION,	24);	// from
    design.addCommand(124, ZRF.PARAM,	0);	// $1
    design.addCommand(124, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(124, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(124, ZRF.FUNCTION,	20);	// verify
    design.addCommand(124, ZRF.PROMOTE,	8);	// D31
    design.addCommand(124, ZRF.MODE,	5);	// type-5
    design.addCommand(124, ZRF.FUNCTION,	25);	// to
    design.addCommand(124, ZRF.FUNCTION,	28);	// end

    design.addCommand(125, ZRF.FUNCTION,	24);	// from
    design.addCommand(125, ZRF.PARAM,	0);	// $1
    design.addCommand(125, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(125, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(125, ZRF.FUNCTION,	20);	// verify
    design.addCommand(125, ZRF.PROMOTE,	15);	// D46
    design.addCommand(125, ZRF.MODE,	5);	// type-5
    design.addCommand(125, ZRF.FUNCTION,	25);	// to
    design.addCommand(125, ZRF.FUNCTION,	28);	// end

    design.addCommand(126, ZRF.FUNCTION,	24);	// from
    design.addCommand(126, ZRF.PARAM,	0);	// $1
    design.addCommand(126, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(126, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(126, ZRF.FUNCTION,	20);	// verify
    design.addCommand(126, ZRF.PROMOTE,	5);	// D23
    design.addCommand(126, ZRF.MODE,	5);	// type-5
    design.addCommand(126, ZRF.FUNCTION,	25);	// to
    design.addCommand(126, ZRF.FUNCTION,	28);	// end

    design.addCommand(127, ZRF.FUNCTION,	24);	// from
    design.addCommand(127, ZRF.PARAM,	0);	// $1
    design.addCommand(127, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(127, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(127, ZRF.FUNCTION,	20);	// verify
    design.addCommand(127, ZRF.PROMOTE,	17);	// D53
    design.addCommand(127, ZRF.MODE,	5);	// type-5
    design.addCommand(127, ZRF.FUNCTION,	25);	// to
    design.addCommand(127, ZRF.FUNCTION,	28);	// end

    design.addCommand(128, ZRF.FUNCTION,	24);	// from
    design.addCommand(128, ZRF.PARAM,	0);	// $1
    design.addCommand(128, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(128, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(128, ZRF.FUNCTION,	20);	// verify
    design.addCommand(128, ZRF.PROMOTE,	12);	// D41
    design.addCommand(128, ZRF.MODE,	5);	// type-5
    design.addCommand(128, ZRF.FUNCTION,	25);	// to
    design.addCommand(128, ZRF.FUNCTION,	28);	// end

    design.addCommand(129, ZRF.FUNCTION,	24);	// from
    design.addCommand(129, ZRF.PARAM,	0);	// $1
    design.addCommand(129, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(129, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(129, ZRF.FUNCTION,	20);	// verify
    design.addCommand(129, ZRF.PROMOTE,	11);	// D36
    design.addCommand(129, ZRF.MODE,	5);	// type-5
    design.addCommand(129, ZRF.FUNCTION,	25);	// to
    design.addCommand(129, ZRF.FUNCTION,	28);	// end

    design.addCommand(130, ZRF.FUNCTION,	24);	// from
    design.addCommand(130, ZRF.PARAM,	0);	// $1
    design.addCommand(130, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(130, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(130, ZRF.FUNCTION,	20);	// verify
    design.addCommand(130, ZRF.PROMOTE,	18);	// D54
    design.addCommand(130, ZRF.MODE,	5);	// type-5
    design.addCommand(130, ZRF.FUNCTION,	25);	// to
    design.addCommand(130, ZRF.FUNCTION,	28);	// end

    design.addCommand(131, ZRF.FUNCTION,	24);	// from
    design.addCommand(131, ZRF.PARAM,	0);	// $1
    design.addCommand(131, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(131, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(131, ZRF.FUNCTION,	20);	// verify
    design.addCommand(131, ZRF.PROMOTE,	6);	// D24
    design.addCommand(131, ZRF.MODE,	5);	// type-5
    design.addCommand(131, ZRF.FUNCTION,	25);	// to
    design.addCommand(131, ZRF.FUNCTION,	28);	// end

    design.addCommand(132, ZRF.FUNCTION,	24);	// from
    design.addCommand(132, ZRF.PARAM,	0);	// $1
    design.addCommand(132, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(132, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(132, ZRF.FUNCTION,	20);	// verify
    design.addCommand(132, ZRF.PROMOTE,	16);	// D51
    design.addCommand(132, ZRF.MODE,	5);	// type-5
    design.addCommand(132, ZRF.FUNCTION,	25);	// to
    design.addCommand(132, ZRF.FUNCTION,	28);	// end

    design.addCommand(133, ZRF.FUNCTION,	24);	// from
    design.addCommand(133, ZRF.PARAM,	0);	// $1
    design.addCommand(133, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(133, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(133, ZRF.FUNCTION,	20);	// verify
    design.addCommand(133, ZRF.PROMOTE,	7);	// D26
    design.addCommand(133, ZRF.MODE,	5);	// type-5
    design.addCommand(133, ZRF.FUNCTION,	25);	// to
    design.addCommand(133, ZRF.FUNCTION,	28);	// end

    design.addCommand(134, ZRF.FUNCTION,	24);	// from
    design.addCommand(134, ZRF.PARAM,	0);	// $1
    design.addCommand(134, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(134, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(134, ZRF.FUNCTION,	20);	// verify
    design.addCommand(134, ZRF.PROMOTE,	10);	// D35
    design.addCommand(134, ZRF.MODE,	5);	// type-5
    design.addCommand(134, ZRF.FUNCTION,	25);	// to
    design.addCommand(134, ZRF.FUNCTION,	28);	// end

    design.addCommand(135, ZRF.FUNCTION,	24);	// from
    design.addCommand(135, ZRF.PARAM,	0);	// $1
    design.addCommand(135, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(135, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(135, ZRF.FUNCTION,	20);	// verify
    design.addCommand(135, ZRF.PROMOTE,	14);	// D45
    design.addCommand(135, ZRF.MODE,	5);	// type-5
    design.addCommand(135, ZRF.FUNCTION,	25);	// to
    design.addCommand(135, ZRF.FUNCTION,	28);	// end

    design.addPiece("D12", 0, 1);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 2, [2], 0);
    design.addMove(0, 3, [1], 0);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 2, [2], 1);
    design.addMove(0, 3, [1], 1);
    design.addMove(0, 4, [3], 2);
    design.addMove(0, 5, [0], 2);
    design.addMove(0, 6, [2], 2);
    design.addMove(0, 7, [1], 2);
    design.addMove(0, 8, [3], 3);
    design.addMove(0, 9, [0], 3);
    design.addMove(0, 10, [2], 3);
    design.addMove(0, 11, [1], 3);
    design.addMove(0, 12, [3], 4);
    design.addMove(0, 13, [0], 4);
    design.addMove(0, 14, [2], 4);
    design.addMove(0, 15, [1], 4);
    design.addMove(0, 16, [3], 5);
    design.addMove(0, 17, [0], 5);
    design.addMove(0, 18, [2], 5);
    design.addMove(0, 19, [1], 5);

    design.addPiece("D13", 1, 1);
    design.addMove(1, 20, [3], 0);
    design.addMove(1, 21, [0], 0);
    design.addMove(1, 22, [2], 0);
    design.addMove(1, 23, [1], 0);
    design.addMove(1, 20, [3], 1);
    design.addMove(1, 21, [0], 1);
    design.addMove(1, 22, [2], 1);
    design.addMove(1, 23, [1], 1);
    design.addMove(1, 24, [3], 2);
    design.addMove(1, 25, [0], 2);
    design.addMove(1, 26, [2], 2);
    design.addMove(1, 27, [1], 2);
    design.addMove(1, 28, [3], 3);
    design.addMove(1, 29, [0], 3);
    design.addMove(1, 30, [2], 3);
    design.addMove(1, 31, [1], 3);
    design.addMove(1, 32, [3], 4);
    design.addMove(1, 33, [0], 4);
    design.addMove(1, 34, [2], 4);
    design.addMove(1, 35, [1], 4);
    design.addMove(1, 36, [3], 5);
    design.addMove(1, 37, [0], 5);
    design.addMove(1, 38, [2], 5);
    design.addMove(1, 39, [1], 5);

    design.addPiece("D14", 2, 1);
    design.addMove(2, 40, [3], 0);
    design.addMove(2, 41, [0], 0);
    design.addMove(2, 42, [2], 0);
    design.addMove(2, 43, [1], 0);
    design.addMove(2, 40, [3], 1);
    design.addMove(2, 41, [0], 1);
    design.addMove(2, 42, [2], 1);
    design.addMove(2, 43, [1], 1);
    design.addMove(2, 44, [3], 2);
    design.addMove(2, 45, [0], 2);
    design.addMove(2, 46, [2], 2);
    design.addMove(2, 47, [1], 2);
    design.addMove(2, 48, [3], 3);
    design.addMove(2, 49, [0], 3);
    design.addMove(2, 50, [2], 3);
    design.addMove(2, 51, [1], 3);
    design.addMove(2, 52, [3], 4);
    design.addMove(2, 53, [0], 4);
    design.addMove(2, 54, [2], 4);
    design.addMove(2, 55, [1], 4);
    design.addMove(2, 56, [3], 5);
    design.addMove(2, 57, [0], 5);
    design.addMove(2, 58, [2], 5);
    design.addMove(2, 59, [1], 5);

    design.addPiece("D15", 3, 1);
    design.addMove(3, 60, [3], 0);
    design.addMove(3, 61, [0], 0);
    design.addMove(3, 62, [2], 0);
    design.addMove(3, 63, [1], 0);
    design.addMove(3, 60, [3], 1);
    design.addMove(3, 61, [0], 1);
    design.addMove(3, 62, [2], 1);
    design.addMove(3, 63, [1], 1);
    design.addMove(3, 64, [3], 2);
    design.addMove(3, 65, [0], 2);
    design.addMove(3, 66, [2], 2);
    design.addMove(3, 67, [1], 2);
    design.addMove(3, 68, [3], 3);
    design.addMove(3, 69, [0], 3);
    design.addMove(3, 70, [2], 3);
    design.addMove(3, 71, [1], 3);
    design.addMove(3, 72, [3], 4);
    design.addMove(3, 73, [0], 4);
    design.addMove(3, 74, [2], 4);
    design.addMove(3, 75, [1], 4);
    design.addMove(3, 76, [3], 5);
    design.addMove(3, 77, [0], 5);
    design.addMove(3, 78, [2], 5);
    design.addMove(3, 79, [1], 5);

    design.addPiece("D21", 4, 2);
    design.addMove(4, 80, [3], 0);
    design.addMove(4, 81, [0], 0);
    design.addMove(4, 25, [2], 0);
    design.addMove(4, 45, [1], 0);
    design.addMove(4, 82, [3], 1);
    design.addMove(4, 83, [0], 1);
    design.addMove(4, 21, [2], 1);
    design.addMove(4, 41, [1], 1);
    design.addMove(4, 80, [3], 2);
    design.addMove(4, 81, [0], 2);
    design.addMove(4, 25, [2], 2);
    design.addMove(4, 45, [1], 2);
    design.addMove(4, 84, [3], 3);
    design.addMove(4, 85, [0], 3);
    design.addMove(4, 29, [2], 3);
    design.addMove(4, 49, [1], 3);
    design.addMove(4, 86, [3], 4);
    design.addMove(4, 87, [0], 4);
    design.addMove(4, 33, [2], 4);
    design.addMove(4, 53, [1], 4);
    design.addMove(4, 88, [3], 5);
    design.addMove(4, 89, [0], 5);
    design.addMove(4, 37, [2], 5);
    design.addMove(4, 57, [1], 5);

    design.addPiece("D23", 5, 2);
    design.addMove(5, 67, [3], 0);
    design.addMove(5, 7, [0], 0);
    design.addMove(5, 90, [2], 0);
    design.addMove(5, 91, [1], 0);
    design.addMove(5, 63, [3], 1);
    design.addMove(5, 3, [0], 1);
    design.addMove(5, 92, [2], 1);
    design.addMove(5, 93, [1], 1);
    design.addMove(5, 67, [3], 2);
    design.addMove(5, 7, [0], 2);
    design.addMove(5, 90, [2], 2);
    design.addMove(5, 91, [1], 2);
    design.addMove(5, 71, [3], 3);
    design.addMove(5, 11, [0], 3);
    design.addMove(5, 94, [2], 3);
    design.addMove(5, 95, [1], 3);
    design.addMove(5, 75, [3], 4);
    design.addMove(5, 15, [0], 4);
    design.addMove(5, 96, [2], 4);
    design.addMove(5, 97, [1], 4);
    design.addMove(5, 79, [3], 5);
    design.addMove(5, 19, [0], 5);
    design.addMove(5, 98, [2], 5);
    design.addMove(5, 99, [1], 5);

    design.addPiece("D24", 6, 2);
    design.addMove(6, 66, [3], 0);
    design.addMove(6, 6, [0], 0);
    design.addMove(6, 100, [2], 0);
    design.addMove(6, 101, [1], 0);
    design.addMove(6, 62, [3], 1);
    design.addMove(6, 2, [0], 1);
    design.addMove(6, 102, [2], 1);
    design.addMove(6, 103, [1], 1);
    design.addMove(6, 66, [3], 2);
    design.addMove(6, 6, [0], 2);
    design.addMove(6, 100, [2], 2);
    design.addMove(6, 101, [1], 2);
    design.addMove(6, 70, [3], 3);
    design.addMove(6, 10, [0], 3);
    design.addMove(6, 104, [2], 3);
    design.addMove(6, 105, [1], 3);
    design.addMove(6, 74, [3], 4);
    design.addMove(6, 14, [0], 4);
    design.addMove(6, 106, [2], 4);
    design.addMove(6, 107, [1], 4);
    design.addMove(6, 78, [3], 5);
    design.addMove(6, 18, [0], 5);
    design.addMove(6, 108, [2], 5);
    design.addMove(6, 109, [1], 5);

    design.addPiece("D26", 7, 2);
    design.addMove(7, 110, [3], 0);
    design.addMove(7, 111, [0], 0);
    design.addMove(7, 24, [2], 0);
    design.addMove(7, 44, [1], 0);
    design.addMove(7, 112, [3], 1);
    design.addMove(7, 113, [0], 1);
    design.addMove(7, 20, [2], 1);
    design.addMove(7, 40, [1], 1);
    design.addMove(7, 110, [3], 2);
    design.addMove(7, 111, [0], 2);
    design.addMove(7, 24, [2], 2);
    design.addMove(7, 44, [1], 2);
    design.addMove(7, 114, [3], 3);
    design.addMove(7, 115, [0], 3);
    design.addMove(7, 28, [2], 3);
    design.addMove(7, 48, [1], 3);
    design.addMove(7, 116, [3], 4);
    design.addMove(7, 117, [0], 4);
    design.addMove(7, 32, [2], 4);
    design.addMove(7, 52, [1], 4);
    design.addMove(7, 118, [3], 5);
    design.addMove(7, 119, [0], 5);
    design.addMove(7, 36, [2], 5);
    design.addMove(7, 56, [1], 5);

    design.addPiece("D31", 8, 3);
    design.addMove(8, 105, [3], 0);
    design.addMove(8, 95, [0], 0);
    design.addMove(8, 69, [2], 0);
    design.addMove(8, 9, [1], 0);
    design.addMove(8, 103, [3], 1);
    design.addMove(8, 93, [0], 1);
    design.addMove(8, 61, [2], 1);
    design.addMove(8, 1, [1], 1);
    design.addMove(8, 101, [3], 2);
    design.addMove(8, 91, [0], 2);
    design.addMove(8, 65, [2], 2);
    design.addMove(8, 5, [1], 2);
    design.addMove(8, 105, [3], 3);
    design.addMove(8, 95, [0], 3);
    design.addMove(8, 69, [2], 3);
    design.addMove(8, 9, [1], 3);
    design.addMove(8, 107, [3], 4);
    design.addMove(8, 97, [0], 4);
    design.addMove(8, 73, [2], 4);
    design.addMove(8, 13, [1], 4);
    design.addMove(8, 109, [3], 5);
    design.addMove(8, 99, [0], 5);
    design.addMove(8, 77, [2], 5);
    design.addMove(8, 17, [1], 5);

    design.addPiece("D32", 9, 3);
    design.addMove(9, 50, [3], 0);
    design.addMove(9, 30, [0], 0);
    design.addMove(9, 85, [2], 0);
    design.addMove(9, 115, [1], 0);
    design.addMove(9, 42, [3], 1);
    design.addMove(9, 22, [0], 1);
    design.addMove(9, 83, [2], 1);
    design.addMove(9, 113, [1], 1);
    design.addMove(9, 46, [3], 2);
    design.addMove(9, 26, [0], 2);
    design.addMove(9, 81, [2], 2);
    design.addMove(9, 111, [1], 2);
    design.addMove(9, 50, [3], 3);
    design.addMove(9, 30, [0], 3);
    design.addMove(9, 85, [2], 3);
    design.addMove(9, 115, [1], 3);
    design.addMove(9, 54, [3], 4);
    design.addMove(9, 34, [0], 4);
    design.addMove(9, 87, [2], 4);
    design.addMove(9, 117, [1], 4);
    design.addMove(9, 58, [3], 5);
    design.addMove(9, 38, [0], 5);
    design.addMove(9, 89, [2], 5);
    design.addMove(9, 119, [1], 5);

    design.addPiece("D35", 10, 3);
    design.addMove(10, 51, [3], 0);
    design.addMove(10, 31, [0], 0);
    design.addMove(10, 84, [2], 0);
    design.addMove(10, 114, [1], 0);
    design.addMove(10, 43, [3], 1);
    design.addMove(10, 23, [0], 1);
    design.addMove(10, 82, [2], 1);
    design.addMove(10, 112, [1], 1);
    design.addMove(10, 47, [3], 2);
    design.addMove(10, 27, [0], 2);
    design.addMove(10, 80, [2], 2);
    design.addMove(10, 110, [1], 2);
    design.addMove(10, 51, [3], 3);
    design.addMove(10, 31, [0], 3);
    design.addMove(10, 84, [2], 3);
    design.addMove(10, 114, [1], 3);
    design.addMove(10, 55, [3], 4);
    design.addMove(10, 35, [0], 4);
    design.addMove(10, 86, [2], 4);
    design.addMove(10, 116, [1], 4);
    design.addMove(10, 59, [3], 5);
    design.addMove(10, 39, [0], 5);
    design.addMove(10, 88, [2], 5);
    design.addMove(10, 118, [1], 5);

    design.addPiece("D36", 11, 3);
    design.addMove(11, 104, [3], 0);
    design.addMove(11, 94, [0], 0);
    design.addMove(11, 68, [2], 0);
    design.addMove(11, 8, [1], 0);
    design.addMove(11, 102, [3], 1);
    design.addMove(11, 92, [0], 1);
    design.addMove(11, 60, [2], 1);
    design.addMove(11, 0, [1], 1);
    design.addMove(11, 100, [3], 2);
    design.addMove(11, 90, [0], 2);
    design.addMove(11, 64, [2], 2);
    design.addMove(11, 4, [1], 2);
    design.addMove(11, 104, [3], 3);
    design.addMove(11, 94, [0], 3);
    design.addMove(11, 68, [2], 3);
    design.addMove(11, 8, [1], 3);
    design.addMove(11, 106, [3], 4);
    design.addMove(11, 96, [0], 4);
    design.addMove(11, 72, [2], 4);
    design.addMove(11, 12, [1], 4);
    design.addMove(11, 108, [3], 5);
    design.addMove(11, 98, [0], 5);
    design.addMove(11, 76, [2], 5);
    design.addMove(11, 16, [1], 5);

    design.addPiece("D41", 12, 4);
    design.addMove(12, 96, [3], 0);
    design.addMove(12, 106, [0], 0);
    design.addMove(12, 13, [2], 0);
    design.addMove(12, 73, [1], 0);
    design.addMove(12, 92, [3], 1);
    design.addMove(12, 102, [0], 1);
    design.addMove(12, 1, [2], 1);
    design.addMove(12, 61, [1], 1);
    design.addMove(12, 90, [3], 2);
    design.addMove(12, 100, [0], 2);
    design.addMove(12, 5, [2], 2);
    design.addMove(12, 65, [1], 2);
    design.addMove(12, 94, [3], 3);
    design.addMove(12, 104, [0], 3);
    design.addMove(12, 9, [2], 3);
    design.addMove(12, 69, [1], 3);
    design.addMove(12, 96, [3], 4);
    design.addMove(12, 106, [0], 4);
    design.addMove(12, 13, [2], 4);
    design.addMove(12, 73, [1], 4);
    design.addMove(12, 98, [3], 5);
    design.addMove(12, 108, [0], 5);
    design.addMove(12, 17, [2], 5);
    design.addMove(12, 77, [1], 5);

    design.addPiece("D42", 13, 4);
    design.addMove(13, 35, [3], 0);
    design.addMove(13, 55, [0], 0);
    design.addMove(13, 117, [2], 0);
    design.addMove(13, 87, [1], 0);
    design.addMove(13, 23, [3], 1);
    design.addMove(13, 43, [0], 1);
    design.addMove(13, 113, [2], 1);
    design.addMove(13, 83, [1], 1);
    design.addMove(13, 27, [3], 2);
    design.addMove(13, 47, [0], 2);
    design.addMove(13, 111, [2], 2);
    design.addMove(13, 81, [1], 2);
    design.addMove(13, 31, [3], 3);
    design.addMove(13, 51, [0], 3);
    design.addMove(13, 115, [2], 3);
    design.addMove(13, 85, [1], 3);
    design.addMove(13, 35, [3], 4);
    design.addMove(13, 55, [0], 4);
    design.addMove(13, 117, [2], 4);
    design.addMove(13, 87, [1], 4);
    design.addMove(13, 39, [3], 5);
    design.addMove(13, 59, [0], 5);
    design.addMove(13, 119, [2], 5);
    design.addMove(13, 89, [1], 5);

    design.addPiece("D45", 14, 4);
    design.addMove(14, 34, [3], 0);
    design.addMove(14, 54, [0], 0);
    design.addMove(14, 116, [2], 0);
    design.addMove(14, 86, [1], 0);
    design.addMove(14, 22, [3], 1);
    design.addMove(14, 42, [0], 1);
    design.addMove(14, 112, [2], 1);
    design.addMove(14, 82, [1], 1);
    design.addMove(14, 26, [3], 2);
    design.addMove(14, 46, [0], 2);
    design.addMove(14, 110, [2], 2);
    design.addMove(14, 80, [1], 2);
    design.addMove(14, 30, [3], 3);
    design.addMove(14, 50, [0], 3);
    design.addMove(14, 114, [2], 3);
    design.addMove(14, 84, [1], 3);
    design.addMove(14, 34, [3], 4);
    design.addMove(14, 54, [0], 4);
    design.addMove(14, 116, [2], 4);
    design.addMove(14, 86, [1], 4);
    design.addMove(14, 38, [3], 5);
    design.addMove(14, 58, [0], 5);
    design.addMove(14, 118, [2], 5);
    design.addMove(14, 88, [1], 5);

    design.addPiece("D46", 15, 4);
    design.addMove(15, 97, [3], 0);
    design.addMove(15, 107, [0], 0);
    design.addMove(15, 12, [2], 0);
    design.addMove(15, 72, [1], 0);
    design.addMove(15, 93, [3], 1);
    design.addMove(15, 103, [0], 1);
    design.addMove(15, 0, [2], 1);
    design.addMove(15, 60, [1], 1);
    design.addMove(15, 91, [3], 2);
    design.addMove(15, 101, [0], 2);
    design.addMove(15, 4, [2], 2);
    design.addMove(15, 64, [1], 2);
    design.addMove(15, 95, [3], 3);
    design.addMove(15, 105, [0], 3);
    design.addMove(15, 8, [2], 3);
    design.addMove(15, 68, [1], 3);
    design.addMove(15, 97, [3], 4);
    design.addMove(15, 107, [0], 4);
    design.addMove(15, 12, [2], 4);
    design.addMove(15, 72, [1], 4);
    design.addMove(15, 99, [3], 5);
    design.addMove(15, 109, [0], 5);
    design.addMove(15, 16, [2], 5);
    design.addMove(15, 76, [1], 5);

    design.addPiece("D51", 16, 5);
    design.addMove(16, 119, [3], 0);
    design.addMove(16, 118, [0], 0);
    design.addMove(16, 57, [2], 0);
    design.addMove(16, 37, [1], 0);
    design.addMove(16, 113, [3], 1);
    design.addMove(16, 112, [0], 1);
    design.addMove(16, 41, [2], 1);
    design.addMove(16, 21, [1], 1);
    design.addMove(16, 111, [3], 2);
    design.addMove(16, 110, [0], 2);
    design.addMove(16, 45, [2], 2);
    design.addMove(16, 25, [1], 2);
    design.addMove(16, 115, [3], 3);
    design.addMove(16, 114, [0], 3);
    design.addMove(16, 49, [2], 3);
    design.addMove(16, 29, [1], 3);
    design.addMove(16, 117, [3], 4);
    design.addMove(16, 116, [0], 4);
    design.addMove(16, 53, [2], 4);
    design.addMove(16, 33, [1], 4);
    design.addMove(16, 119, [3], 5);
    design.addMove(16, 118, [0], 5);
    design.addMove(16, 57, [2], 5);
    design.addMove(16, 37, [1], 5);

    design.addPiece("D53", 17, 5);
    design.addMove(17, 18, [3], 0);
    design.addMove(17, 78, [0], 0);
    design.addMove(17, 99, [2], 0);
    design.addMove(17, 98, [1], 0);
    design.addMove(17, 2, [3], 1);
    design.addMove(17, 62, [0], 1);
    design.addMove(17, 93, [2], 1);
    design.addMove(17, 92, [1], 1);
    design.addMove(17, 6, [3], 2);
    design.addMove(17, 66, [0], 2);
    design.addMove(17, 91, [2], 2);
    design.addMove(17, 90, [1], 2);
    design.addMove(17, 10, [3], 3);
    design.addMove(17, 70, [0], 3);
    design.addMove(17, 95, [2], 3);
    design.addMove(17, 94, [1], 3);
    design.addMove(17, 14, [3], 4);
    design.addMove(17, 74, [0], 4);
    design.addMove(17, 97, [2], 4);
    design.addMove(17, 96, [1], 4);
    design.addMove(17, 18, [3], 5);
    design.addMove(17, 78, [0], 5);
    design.addMove(17, 99, [2], 5);
    design.addMove(17, 98, [1], 5);

    design.addPiece("D54", 18, 5);
    design.addMove(18, 19, [3], 0);
    design.addMove(18, 79, [0], 0);
    design.addMove(18, 109, [2], 0);
    design.addMove(18, 108, [1], 0);
    design.addMove(18, 3, [3], 1);
    design.addMove(18, 63, [0], 1);
    design.addMove(18, 103, [2], 1);
    design.addMove(18, 102, [1], 1);
    design.addMove(18, 7, [3], 2);
    design.addMove(18, 67, [0], 2);
    design.addMove(18, 101, [2], 2);
    design.addMove(18, 100, [1], 2);
    design.addMove(18, 11, [3], 3);
    design.addMove(18, 71, [0], 3);
    design.addMove(18, 105, [2], 3);
    design.addMove(18, 104, [1], 3);
    design.addMove(18, 15, [3], 4);
    design.addMove(18, 75, [0], 4);
    design.addMove(18, 107, [2], 4);
    design.addMove(18, 106, [1], 4);
    design.addMove(18, 19, [3], 5);
    design.addMove(18, 79, [0], 5);
    design.addMove(18, 109, [2], 5);
    design.addMove(18, 108, [1], 5);

    design.addPiece("D56", 19, 5);
    design.addMove(19, 89, [3], 0);
    design.addMove(19, 88, [0], 0);
    design.addMove(19, 56, [2], 0);
    design.addMove(19, 36, [1], 0);
    design.addMove(19, 83, [3], 1);
    design.addMove(19, 82, [0], 1);
    design.addMove(19, 40, [2], 1);
    design.addMove(19, 20, [1], 1);
    design.addMove(19, 81, [3], 2);
    design.addMove(19, 80, [0], 2);
    design.addMove(19, 44, [2], 2);
    design.addMove(19, 24, [1], 2);
    design.addMove(19, 85, [3], 3);
    design.addMove(19, 84, [0], 3);
    design.addMove(19, 48, [2], 3);
    design.addMove(19, 28, [1], 3);
    design.addMove(19, 87, [3], 4);
    design.addMove(19, 86, [0], 4);
    design.addMove(19, 52, [2], 4);
    design.addMove(19, 32, [1], 4);
    design.addMove(19, 89, [3], 5);
    design.addMove(19, 88, [0], 5);
    design.addMove(19, 56, [2], 5);
    design.addMove(19, 36, [1], 5);

    design.addPiece("D62", 20, 6);
    design.addMove(20, 120, [3], 0);
    design.addMove(20, 121, [0], 0);
    design.addMove(20, 122, [2], 0);
    design.addMove(20, 123, [1], 0);
    design.addMove(20, 61, [3], 1);
    design.addMove(20, 60, [0], 1);
    design.addMove(20, 3, [2], 1);
    design.addMove(20, 2, [1], 1);
    design.addMove(20, 65, [3], 2);
    design.addMove(20, 64, [0], 2);
    design.addMove(20, 7, [2], 2);
    design.addMove(20, 6, [1], 2);
    design.addMove(20, 69, [3], 3);
    design.addMove(20, 68, [0], 3);
    design.addMove(20, 11, [2], 3);
    design.addMove(20, 10, [1], 3);
    design.addMove(20, 73, [3], 4);
    design.addMove(20, 72, [0], 4);
    design.addMove(20, 15, [2], 4);
    design.addMove(20, 14, [1], 4);

    design.addPiece("D63", 21, 6);
    design.addMove(21, 124, [3], 0);
    design.addMove(21, 125, [0], 0);
    design.addMove(21, 126, [2], 0);
    design.addMove(21, 127, [1], 0);
    design.addMove(21, 41, [3], 1);
    design.addMove(21, 40, [0], 1);
    design.addMove(21, 23, [2], 1);
    design.addMove(21, 22, [1], 1);
    design.addMove(21, 45, [3], 2);
    design.addMove(21, 44, [0], 2);
    design.addMove(21, 27, [2], 2);
    design.addMove(21, 26, [1], 2);
    design.addMove(21, 49, [3], 3);
    design.addMove(21, 48, [0], 3);
    design.addMove(21, 31, [2], 3);
    design.addMove(21, 30, [1], 3);
    design.addMove(21, 53, [3], 4);
    design.addMove(21, 52, [0], 4);
    design.addMove(21, 35, [2], 4);
    design.addMove(21, 34, [1], 4);

    design.addPiece("D64", 22, 6);
    design.addMove(22, 128, [3], 0);
    design.addMove(22, 129, [0], 0);
    design.addMove(22, 130, [2], 0);
    design.addMove(22, 131, [1], 0);
    design.addMove(22, 21, [3], 1);
    design.addMove(22, 20, [0], 1);
    design.addMove(22, 43, [2], 1);
    design.addMove(22, 42, [1], 1);
    design.addMove(22, 25, [3], 2);
    design.addMove(22, 24, [0], 2);
    design.addMove(22, 47, [2], 2);
    design.addMove(22, 46, [1], 2);
    design.addMove(22, 29, [3], 3);
    design.addMove(22, 28, [0], 3);
    design.addMove(22, 51, [2], 3);
    design.addMove(22, 50, [1], 3);
    design.addMove(22, 33, [3], 4);
    design.addMove(22, 32, [0], 4);
    design.addMove(22, 55, [2], 4);
    design.addMove(22, 54, [1], 4);

    design.addPiece("D65", 23, 6);
    design.addMove(23, 132, [3], 0);
    design.addMove(23, 133, [0], 0);
    design.addMove(23, 134, [2], 0);
    design.addMove(23, 135, [1], 0);
    design.addMove(23, 1, [3], 1);
    design.addMove(23, 0, [0], 1);
    design.addMove(23, 63, [2], 1);
    design.addMove(23, 62, [1], 1);
    design.addMove(23, 5, [3], 2);
    design.addMove(23, 4, [0], 2);
    design.addMove(23, 67, [2], 2);
    design.addMove(23, 66, [1], 2);
    design.addMove(23, 9, [3], 3);
    design.addMove(23, 8, [0], 3);
    design.addMove(23, 71, [2], 3);
    design.addMove(23, 70, [1], 3);
    design.addMove(23, 13, [3], 4);
    design.addMove(23, 12, [0], 4);
    design.addMove(23, 75, [2], 4);
    design.addMove(23, 74, [1], 4);

    design.setup("Red", "D12", 56);
    design.setup("Red", "D12", 57);
    design.setup("Red", "D12", 58);
    design.setup("Red", "D12", 59);
    design.setup("Red", "D12", 60);
    design.setup("Red", "D12", 61);
    design.setup("Red", "D12", 62);
    design.setup("Red", "D12", 63);
    design.setup("Blue", "D15", 0);
    design.setup("Blue", "D15", 1);
    design.setup("Blue", "D15", 2);
    design.setup("Blue", "D15", 3);
    design.setup("Blue", "D15", 4);
    design.setup("Blue", "D15", 5);
    design.setup("Blue", "D15", 6);
    design.setup("Blue", "D15", 7);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedD12", "Red D12");
    view.defPiece("WhiteD12", "Blue D12");
    view.defPiece("RedD13", "Red D13");
    view.defPiece("WhiteD13", "Blue D13");
    view.defPiece("RedD14", "Red D14");
    view.defPiece("WhiteD14", "Blue D14");
    view.defPiece("RedD15", "Red D15");
    view.defPiece("WhiteD15", "Blue D15");
    view.defPiece("RedD21", "Red D21");
    view.defPiece("WhiteD21", "Blue D21");
    view.defPiece("RedD23", "Red D23");
    view.defPiece("WhiteD23", "Blue D23");
    view.defPiece("RedD24", "Red D24");
    view.defPiece("WhiteD24", "Blue D24");
    view.defPiece("RedD26", "Red D26");
    view.defPiece("WhiteD26", "Blue D26");
    view.defPiece("RedD31", "Red D31");
    view.defPiece("WhiteD31", "Blue D31");
    view.defPiece("RedD32", "Red D32");
    view.defPiece("WhiteD32", "Blue D32");
    view.defPiece("RedD35", "Red D35");
    view.defPiece("WhiteD35", "Blue D35");
    view.defPiece("RedD36", "Red D36");
    view.defPiece("WhiteD36", "Blue D36");
    view.defPiece("RedD41", "Red D41");
    view.defPiece("WhiteD41", "Blue D41");
    view.defPiece("RedD42", "Red D42");
    view.defPiece("WhiteD42", "Blue D42");
    view.defPiece("RedD45", "Red D45");
    view.defPiece("WhiteD45", "Blue D45");
    view.defPiece("RedD46", "Red D46");
    view.defPiece("WhiteD46", "Blue D46");
    view.defPiece("RedD51", "Red D51");
    view.defPiece("WhiteD51", "Blue D51");
    view.defPiece("RedD53", "Red D53");
    view.defPiece("WhiteD53", "Blue D53");
    view.defPiece("RedD54", "Red D54");
    view.defPiece("WhiteD54", "Blue D54");
    view.defPiece("RedD56", "Red D56");
    view.defPiece("WhiteD56", "Blue D56");
    view.defPiece("RedD62", "Red D62");
    view.defPiece("WhiteD62", "Blue D62");
    view.defPiece("RedD63", "Red D63");
    view.defPiece("WhiteD63", "Blue D63");
    view.defPiece("RedD64", "Red D64");
    view.defPiece("WhiteD64", "Blue D64");
    view.defPiece("RedD65", "Red D65");
    view.defPiece("WhiteD65", "Blue D65");

    view.defPiece("RedD12H", "Red D12 Hint");
    view.defPiece("RedD13H", "Red D13 Hint");
    view.defPiece("RedD14H", "Red D14 Hint");
    view.defPiece("RedD15H", "Red D15 Hint");
    view.defPiece("RedD21H", "Red D21 Hint");
    view.defPiece("RedD23H", "Red D23 Hint");
    view.defPiece("RedD24H", "Red D24 Hint");
    view.defPiece("RedD26H", "Red D26 Hint");
    view.defPiece("RedD31H", "Red D31 Hint");
    view.defPiece("RedD32H", "Red D32 Hint");
    view.defPiece("RedD35H", "Red D35 Hint");
    view.defPiece("RedD36H", "Red D36 Hint");
    view.defPiece("RedD41H", "Red D41 Hint");
    view.defPiece("RedD42H", "Red D42 Hint");
    view.defPiece("RedD45H", "Red D45 Hint");
    view.defPiece("RedD46H", "Red D46 Hint");
    view.defPiece("RedD51H", "Red D51 Hint");
    view.defPiece("RedD53H", "Red D53 Hint");
    view.defPiece("RedD54H", "Red D54 Hint");
    view.defPiece("RedD56H", "Red D56 Hint");
    view.defPiece("RedD62H", "Red D62 Hint");
    view.defPiece("RedD63H", "Red D63 Hint");
    view.defPiece("RedD64H", "Red D64 Hint");
    view.defPiece("RedD65H", "Red D65 Hint");
 
    view.defPiece("WhiteD12H", "Blue D12 Hint");
    view.defPiece("WhiteD13H", "Blue D13 Hint");
    view.defPiece("WhiteD14H", "Blue D14 Hint");
    view.defPiece("WhiteD15H", "Blue D15 Hint");
    view.defPiece("WhiteD21H", "Blue D21 Hint");
    view.defPiece("WhiteD23H", "Blue D23 Hint");
    view.defPiece("WhiteD24H", "Blue D24 Hint");
    view.defPiece("WhiteD26H", "Blue D26 Hint");
    view.defPiece("WhiteD31H", "Blue D31 Hint");
    view.defPiece("WhiteD32H", "Blue D32 Hint");
    view.defPiece("WhiteD35H", "Blue D35 Hint");
    view.defPiece("WhiteD36H", "Blue D36 Hint");
    view.defPiece("WhiteD41H", "Blue D41 Hint");
    view.defPiece("WhiteD42H", "Blue D42 Hint");
    view.defPiece("WhiteD45H", "Blue D45 Hint");
    view.defPiece("WhiteD46H", "Blue D46 Hint");
    view.defPiece("WhiteD51H", "Blue D51 Hint");
    view.defPiece("WhiteD53H", "Blue D53 Hint");
    view.defPiece("WhiteD54H", "Blue D54 Hint");
    view.defPiece("WhiteD56H", "Blue D56 Hint");
    view.defPiece("WhiteD62H", "Blue D62 Hint");
    view.defPiece("WhiteD63H", "Blue D63 Hint");
    view.defPiece("WhiteD64H", "Blue D64 Hint");
    view.defPiece("WhiteD65H", "Blue D65 Hint");

    view.defPosition("a8", 6, 7, 38, 38);
    view.defPosition("b8", 44, 7, 38, 38);
    view.defPosition("c8", 82, 7, 38, 38);
    view.defPosition("d8", 120, 7, 38, 38);
    view.defPosition("e8", 158, 7, 38, 38);
    view.defPosition("f8", 196, 7, 38, 38);
    view.defPosition("g8", 234, 7, 38, 38);
    view.defPosition("h8", 272, 7, 38, 38);
    view.defPosition("a7", 6, 45, 38, 38);
    view.defPosition("b7", 44, 45, 38, 38);
    view.defPosition("c7", 82, 45, 38, 38);
    view.defPosition("d7", 120, 45, 38, 38);
    view.defPosition("e7", 158, 45, 38, 38);
    view.defPosition("f7", 196, 45, 38, 38);
    view.defPosition("g7", 234, 45, 38, 38);
    view.defPosition("h7", 272, 45, 38, 38);
    view.defPosition("a6", 6, 83, 38, 38);
    view.defPosition("b6", 44, 83, 38, 38);
    view.defPosition("c6", 82, 83, 38, 38);
    view.defPosition("d6", 120, 83, 38, 38);
    view.defPosition("e6", 158, 83, 38, 38);
    view.defPosition("f6", 196, 83, 38, 38);
    view.defPosition("g6", 234, 83, 38, 38);
    view.defPosition("h6", 272, 83, 38, 38);
    view.defPosition("a5", 6, 121, 38, 38);
    view.defPosition("b5", 44, 121, 38, 38);
    view.defPosition("c5", 82, 121, 38, 38);
    view.defPosition("d5", 120, 121, 38, 38);
    view.defPosition("e5", 158, 121, 38, 38);
    view.defPosition("f5", 196, 121, 38, 38);
    view.defPosition("g5", 234, 121, 38, 38);
    view.defPosition("h5", 272, 121, 38, 38);
    view.defPosition("a4", 6, 159, 38, 38);
    view.defPosition("b4", 44, 159, 38, 38);
    view.defPosition("c4", 82, 159, 38, 38);
    view.defPosition("d4", 120, 159, 38, 38);
    view.defPosition("e4", 158, 159, 38, 38);
    view.defPosition("f4", 196, 159, 38, 38);
    view.defPosition("g4", 234, 159, 38, 38);
    view.defPosition("h4", 272, 159, 38, 38);
    view.defPosition("a3", 6, 197, 38, 38);
    view.defPosition("b3", 44, 197, 38, 38);
    view.defPosition("c3", 82, 197, 38, 38);
    view.defPosition("d3", 120, 197, 38, 38);
    view.defPosition("e3", 158, 197, 38, 38);
    view.defPosition("f3", 196, 197, 38, 38);
    view.defPosition("g3", 234, 197, 38, 38);
    view.defPosition("h3", 272, 197, 38, 38);
    view.defPosition("a2", 6, 235, 38, 38);
    view.defPosition("b2", 44, 235, 38, 38);
    view.defPosition("c2", 82, 235, 38, 38);
    view.defPosition("d2", 120, 235, 38, 38);
    view.defPosition("e2", 158, 235, 38, 38);
    view.defPosition("f2", 196, 235, 38, 38);
    view.defPosition("g2", 234, 235, 38, 38);
    view.defPosition("h2", 272, 235, 38, 38);
    view.defPosition("a1", 6, 273, 38, 38);
    view.defPosition("b1", 44, 273, 38, 38);
    view.defPosition("c1", 82, 273, 38, 38);
    view.defPosition("d1", 120, 273, 38, 38);
    view.defPosition("e1", 158, 273, 38, 38);
    view.defPosition("f1", 196, 273, 38, 38);
    view.defPosition("g1", 234, 273, 38, 38);
    view.defPosition("h1", 272, 273, 38, 38);
    view.defPosition("X1", 319, 92, 99, 132);
}
