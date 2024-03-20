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

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Red", [3, 2, 1, 0]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addTurn(1, [0]);
    design.addTurn(2, [0]);

    design.addPosition("a8", [9, 1, 0, 0]);
    design.addPosition("b8", [9, 1, -1, 0]);
    design.addPosition("c8", [9, 1, -1, 0]);
    design.addPosition("d8", [9, 1, -1, 0]);
    design.addPosition("e8", [9, 1, -1, 0]);
    design.addPosition("f8", [9, 1, -1, 0]);
    design.addPosition("g8", [9, 1, -1, 0]);
    design.addPosition("h8", [9, 1, -1, 0]);
    design.addPosition("i8", [9, 0, -1, 0]);
    design.addPosition("a7", [9, 1, 0, -9]);
    design.addPosition("b7", [9, 1, -1, -9]);
    design.addPosition("c7", [9, 1, -1, -9]);
    design.addPosition("d7", [9, 1, -1, -9]);
    design.addPosition("e7", [9, 1, -1, -9]);
    design.addPosition("f7", [9, 1, -1, -9]);
    design.addPosition("g7", [9, 1, -1, -9]);
    design.addPosition("h7", [9, 1, -1, -9]);
    design.addPosition("i7", [9, 0, -1, -9]);
    design.addPosition("a6", [9, 1, 0, -9]);
    design.addPosition("b6", [9, 1, -1, -9]);
    design.addPosition("c6", [9, 1, -1, -9]);
    design.addPosition("d6", [9, 1, -1, -9]);
    design.addPosition("e6", [9, 1, -1, -9]);
    design.addPosition("f6", [9, 1, -1, -9]);
    design.addPosition("g6", [9, 1, -1, -9]);
    design.addPosition("h6", [9, 1, -1, -9]);
    design.addPosition("i6", [9, 0, -1, -9]);
    design.addPosition("a5", [9, 1, 0, -9]);
    design.addPosition("b5", [9, 1, -1, -9]);
    design.addPosition("c5", [9, 1, -1, -9]);
    design.addPosition("d5", [9, 1, -1, -9]);
    design.addPosition("e5", [9, 1, -1, -9]);
    design.addPosition("f5", [9, 1, -1, -9]);
    design.addPosition("g5", [9, 1, -1, -9]);
    design.addPosition("h5", [9, 1, -1, -9]);
    design.addPosition("i5", [9, 0, -1, -9]);
    design.addPosition("a4", [9, 1, 0, -9]);
    design.addPosition("b4", [9, 1, -1, -9]);
    design.addPosition("c4", [9, 1, -1, -9]);
    design.addPosition("d4", [9, 1, -1, -9]);
    design.addPosition("e4", [9, 1, -1, -9]);
    design.addPosition("f4", [9, 1, -1, -9]);
    design.addPosition("g4", [9, 1, -1, -9]);
    design.addPosition("h4", [9, 1, -1, -9]);
    design.addPosition("i4", [9, 0, -1, -9]);
    design.addPosition("a3", [9, 1, 0, -9]);
    design.addPosition("b3", [9, 1, -1, -9]);
    design.addPosition("c3", [9, 1, -1, -9]);
    design.addPosition("d3", [9, 1, -1, -9]);
    design.addPosition("e3", [9, 1, -1, -9]);
    design.addPosition("f3", [9, 1, -1, -9]);
    design.addPosition("g3", [9, 1, -1, -9]);
    design.addPosition("h3", [9, 1, -1, -9]);
    design.addPosition("i3", [9, 0, -1, -9]);
    design.addPosition("a2", [9, 1, 0, -9]);
    design.addPosition("b2", [9, 1, -1, -9]);
    design.addPosition("c2", [9, 1, -1, -9]);
    design.addPosition("d2", [9, 1, -1, -9]);
    design.addPosition("e2", [9, 1, -1, -9]);
    design.addPosition("f2", [9, 1, -1, -9]);
    design.addPosition("g2", [9, 1, -1, -9]);
    design.addPosition("h2", [9, 1, -1, -9]);
    design.addPosition("i2", [9, 0, -1, -9]);
    design.addPosition("a1", [0, 1, 0, -9]);
    design.addPosition("b1", [0, 1, -1, -9]);
    design.addPosition("c1", [0, 1, -1, -9]);
    design.addPosition("d1", [0, 1, -1, -9]);
    design.addPosition("e1", [0, 1, -1, -9]);
    design.addPosition("f1", [0, 1, -1, -9]);
    design.addPosition("g1", [0, 1, -1, -9]);
    design.addPosition("h1", [0, 1, -1, -9]);
    design.addPosition("i1", [0, 0, -1, -9]);
    design.addPosition("X1", [0, 0, 0, 0]);

    design.addZone("goal", 1, [4]);
    design.addZone("goal", 2, [67]);
    design.addZone("home", 1, [63, 64, 65, 66, 68, 69, 70, 71]);
    design.addZone("home", 2, [0, 1, 2, 3, 5, 6, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	8);	// D26
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	17);	// D51
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	10);	// D32
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	14);	// D42
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	8);	// D26
    design.addCommand(5, ZRF.MODE,	1);	// type-1
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	17);	// D51
    design.addCommand(6, ZRF.MODE,	1);	// type-1
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	10);	// D32
    design.addCommand(7, ZRF.MODE,	1);	// type-1
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	14);	// D42
    design.addCommand(8, ZRF.MODE,	1);	// type-1
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	8);	// D26
    design.addCommand(9, ZRF.MODE,	2);	// type-2
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PROMOTE,	17);	// D51
    design.addCommand(10, ZRF.MODE,	2);	// type-2
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PROMOTE,	10);	// D32
    design.addCommand(11, ZRF.MODE,	2);	// type-2
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PROMOTE,	14);	// D42
    design.addCommand(12, ZRF.MODE,	2);	// type-2
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PROMOTE,	8);	// D26
    design.addCommand(13, ZRF.MODE,	3);	// type-3
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PROMOTE,	17);	// D51
    design.addCommand(14, ZRF.MODE,	3);	// type-3
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PROMOTE,	10);	// D32
    design.addCommand(15, ZRF.MODE,	3);	// type-3
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PROMOTE,	14);	// D42
    design.addCommand(16, ZRF.MODE,	3);	// type-3
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PROMOTE,	8);	// D26
    design.addCommand(17, ZRF.MODE,	4);	// type-4
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.PROMOTE,	17);	// D51
    design.addCommand(18, ZRF.MODE,	4);	// type-4
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.PROMOTE,	10);	// D32
    design.addCommand(19, ZRF.MODE,	4);	// type-4
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.PROMOTE,	14);	// D42
    design.addCommand(20, ZRF.MODE,	4);	// type-4
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.PROMOTE,	12);	// D36
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PROMOTE,	13);	// D41
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.PROMOTE,	18);	// D53
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end

    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	0);	// $1
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	0);	// not
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.PROMOTE,	6);	// D23
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.PROMOTE,	12);	// D36
    design.addCommand(25, ZRF.MODE,	1);	// type-1
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.PROMOTE,	13);	// D41
    design.addCommand(26, ZRF.MODE,	1);	// type-1
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PROMOTE,	18);	// D53
    design.addCommand(27, ZRF.MODE,	1);	// type-1
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.PROMOTE,	6);	// D23
    design.addCommand(28, ZRF.MODE,	1);	// type-1
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.PROMOTE,	12);	// D36
    design.addCommand(29, ZRF.MODE,	2);	// type-2
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.PROMOTE,	13);	// D41
    design.addCommand(30, ZRF.MODE,	2);	// type-2
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PROMOTE,	18);	// D53
    design.addCommand(31, ZRF.MODE,	2);	// type-2
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end

    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	0);	// $1
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.PROMOTE,	6);	// D23
    design.addCommand(32, ZRF.MODE,	2);	// type-2
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end

    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	0);	// $1
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.PROMOTE,	12);	// D36
    design.addCommand(33, ZRF.MODE,	3);	// type-3
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	28);	// end

    design.addCommand(34, ZRF.FUNCTION,	24);	// from
    design.addCommand(34, ZRF.PARAM,	0);	// $1
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.PROMOTE,	13);	// D41
    design.addCommand(34, ZRF.MODE,	3);	// type-3
    design.addCommand(34, ZRF.FUNCTION,	25);	// to
    design.addCommand(34, ZRF.FUNCTION,	28);	// end

    design.addCommand(35, ZRF.FUNCTION,	24);	// from
    design.addCommand(35, ZRF.PARAM,	0);	// $1
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.PROMOTE,	18);	// D53
    design.addCommand(35, ZRF.MODE,	3);	// type-3
    design.addCommand(35, ZRF.FUNCTION,	25);	// to
    design.addCommand(35, ZRF.FUNCTION,	28);	// end

    design.addCommand(36, ZRF.FUNCTION,	24);	// from
    design.addCommand(36, ZRF.PARAM,	0);	// $1
    design.addCommand(36, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(36, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.PROMOTE,	6);	// D23
    design.addCommand(36, ZRF.MODE,	3);	// type-3
    design.addCommand(36, ZRF.FUNCTION,	25);	// to
    design.addCommand(36, ZRF.FUNCTION,	28);	// end

    design.addCommand(37, ZRF.FUNCTION,	24);	// from
    design.addCommand(37, ZRF.PARAM,	0);	// $1
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.PROMOTE,	12);	// D36
    design.addCommand(37, ZRF.MODE,	4);	// type-4
    design.addCommand(37, ZRF.FUNCTION,	25);	// to
    design.addCommand(37, ZRF.FUNCTION,	28);	// end

    design.addCommand(38, ZRF.FUNCTION,	24);	// from
    design.addCommand(38, ZRF.PARAM,	0);	// $1
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PROMOTE,	13);	// D41
    design.addCommand(38, ZRF.MODE,	4);	// type-4
    design.addCommand(38, ZRF.FUNCTION,	25);	// to
    design.addCommand(38, ZRF.FUNCTION,	28);	// end

    design.addCommand(39, ZRF.FUNCTION,	24);	// from
    design.addCommand(39, ZRF.PARAM,	0);	// $1
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.PROMOTE,	18);	// D53
    design.addCommand(39, ZRF.MODE,	4);	// type-4
    design.addCommand(39, ZRF.FUNCTION,	25);	// to
    design.addCommand(39, ZRF.FUNCTION,	28);	// end

    design.addCommand(40, ZRF.FUNCTION,	24);	// from
    design.addCommand(40, ZRF.PARAM,	0);	// $1
    design.addCommand(40, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(40, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.PROMOTE,	6);	// D23
    design.addCommand(40, ZRF.MODE,	4);	// type-4
    design.addCommand(40, ZRF.FUNCTION,	25);	// to
    design.addCommand(40, ZRF.FUNCTION,	28);	// end

    design.addCommand(41, ZRF.FUNCTION,	24);	// from
    design.addCommand(41, ZRF.PARAM,	0);	// $1
    design.addCommand(41, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(41, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.PROMOTE,	16);	// D46
    design.addCommand(41, ZRF.FUNCTION,	25);	// to
    design.addCommand(41, ZRF.FUNCTION,	28);	// end

    design.addCommand(42, ZRF.FUNCTION,	24);	// from
    design.addCommand(42, ZRF.PARAM,	0);	// $1
    design.addCommand(42, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(42, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.PROMOTE,	9);	// D31
    design.addCommand(42, ZRF.FUNCTION,	25);	// to
    design.addCommand(42, ZRF.FUNCTION,	28);	// end

    design.addCommand(43, ZRF.FUNCTION,	24);	// from
    design.addCommand(43, ZRF.PARAM,	0);	// $1
    design.addCommand(43, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(43, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.PROMOTE,	7);	// D24
    design.addCommand(43, ZRF.FUNCTION,	25);	// to
    design.addCommand(43, ZRF.FUNCTION,	28);	// end

    design.addCommand(44, ZRF.FUNCTION,	24);	// from
    design.addCommand(44, ZRF.PARAM,	0);	// $1
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.PROMOTE,	19);	// D54
    design.addCommand(44, ZRF.FUNCTION,	25);	// to
    design.addCommand(44, ZRF.FUNCTION,	28);	// end

    design.addCommand(45, ZRF.FUNCTION,	24);	// from
    design.addCommand(45, ZRF.PARAM,	0);	// $1
    design.addCommand(45, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(45, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.PROMOTE,	16);	// D46
    design.addCommand(45, ZRF.MODE,	1);	// type-1
    design.addCommand(45, ZRF.FUNCTION,	25);	// to
    design.addCommand(45, ZRF.FUNCTION,	28);	// end

    design.addCommand(46, ZRF.FUNCTION,	24);	// from
    design.addCommand(46, ZRF.PARAM,	0);	// $1
    design.addCommand(46, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(46, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.PROMOTE,	9);	// D31
    design.addCommand(46, ZRF.MODE,	1);	// type-1
    design.addCommand(46, ZRF.FUNCTION,	25);	// to
    design.addCommand(46, ZRF.FUNCTION,	28);	// end

    design.addCommand(47, ZRF.FUNCTION,	24);	// from
    design.addCommand(47, ZRF.PARAM,	0);	// $1
    design.addCommand(47, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(47, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.PROMOTE,	7);	// D24
    design.addCommand(47, ZRF.MODE,	1);	// type-1
    design.addCommand(47, ZRF.FUNCTION,	25);	// to
    design.addCommand(47, ZRF.FUNCTION,	28);	// end

    design.addCommand(48, ZRF.FUNCTION,	24);	// from
    design.addCommand(48, ZRF.PARAM,	0);	// $1
    design.addCommand(48, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(48, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.PROMOTE,	19);	// D54
    design.addCommand(48, ZRF.MODE,	1);	// type-1
    design.addCommand(48, ZRF.FUNCTION,	25);	// to
    design.addCommand(48, ZRF.FUNCTION,	28);	// end

    design.addCommand(49, ZRF.FUNCTION,	24);	// from
    design.addCommand(49, ZRF.PARAM,	0);	// $1
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.PROMOTE,	16);	// D46
    design.addCommand(49, ZRF.MODE,	2);	// type-2
    design.addCommand(49, ZRF.FUNCTION,	25);	// to
    design.addCommand(49, ZRF.FUNCTION,	28);	// end

    design.addCommand(50, ZRF.FUNCTION,	24);	// from
    design.addCommand(50, ZRF.PARAM,	0);	// $1
    design.addCommand(50, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(50, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.PROMOTE,	9);	// D31
    design.addCommand(50, ZRF.MODE,	2);	// type-2
    design.addCommand(50, ZRF.FUNCTION,	25);	// to
    design.addCommand(50, ZRF.FUNCTION,	28);	// end

    design.addCommand(51, ZRF.FUNCTION,	24);	// from
    design.addCommand(51, ZRF.PARAM,	0);	// $1
    design.addCommand(51, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(51, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(51, ZRF.FUNCTION,	20);	// verify
    design.addCommand(51, ZRF.PROMOTE,	7);	// D24
    design.addCommand(51, ZRF.MODE,	2);	// type-2
    design.addCommand(51, ZRF.FUNCTION,	25);	// to
    design.addCommand(51, ZRF.FUNCTION,	28);	// end

    design.addCommand(52, ZRF.FUNCTION,	24);	// from
    design.addCommand(52, ZRF.PARAM,	0);	// $1
    design.addCommand(52, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(52, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(52, ZRF.FUNCTION,	20);	// verify
    design.addCommand(52, ZRF.PROMOTE,	19);	// D54
    design.addCommand(52, ZRF.MODE,	2);	// type-2
    design.addCommand(52, ZRF.FUNCTION,	25);	// to
    design.addCommand(52, ZRF.FUNCTION,	28);	// end

    design.addCommand(53, ZRF.FUNCTION,	24);	// from
    design.addCommand(53, ZRF.PARAM,	0);	// $1
    design.addCommand(53, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(53, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.PROMOTE,	16);	// D46
    design.addCommand(53, ZRF.MODE,	3);	// type-3
    design.addCommand(53, ZRF.FUNCTION,	25);	// to
    design.addCommand(53, ZRF.FUNCTION,	28);	// end

    design.addCommand(54, ZRF.FUNCTION,	24);	// from
    design.addCommand(54, ZRF.PARAM,	0);	// $1
    design.addCommand(54, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(54, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.PROMOTE,	9);	// D31
    design.addCommand(54, ZRF.MODE,	3);	// type-3
    design.addCommand(54, ZRF.FUNCTION,	25);	// to
    design.addCommand(54, ZRF.FUNCTION,	28);	// end

    design.addCommand(55, ZRF.FUNCTION,	24);	// from
    design.addCommand(55, ZRF.PARAM,	0);	// $1
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.PROMOTE,	7);	// D24
    design.addCommand(55, ZRF.MODE,	3);	// type-3
    design.addCommand(55, ZRF.FUNCTION,	25);	// to
    design.addCommand(55, ZRF.FUNCTION,	28);	// end

    design.addCommand(56, ZRF.FUNCTION,	24);	// from
    design.addCommand(56, ZRF.PARAM,	0);	// $1
    design.addCommand(56, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(56, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.PROMOTE,	19);	// D54
    design.addCommand(56, ZRF.MODE,	3);	// type-3
    design.addCommand(56, ZRF.FUNCTION,	25);	// to
    design.addCommand(56, ZRF.FUNCTION,	28);	// end

    design.addCommand(57, ZRF.FUNCTION,	24);	// from
    design.addCommand(57, ZRF.PARAM,	0);	// $1
    design.addCommand(57, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(57, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(57, ZRF.FUNCTION,	20);	// verify
    design.addCommand(57, ZRF.PROMOTE,	16);	// D46
    design.addCommand(57, ZRF.MODE,	4);	// type-4
    design.addCommand(57, ZRF.FUNCTION,	25);	// to
    design.addCommand(57, ZRF.FUNCTION,	28);	// end

    design.addCommand(58, ZRF.FUNCTION,	24);	// from
    design.addCommand(58, ZRF.PARAM,	0);	// $1
    design.addCommand(58, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(58, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(58, ZRF.FUNCTION,	20);	// verify
    design.addCommand(58, ZRF.PROMOTE,	9);	// D31
    design.addCommand(58, ZRF.MODE,	4);	// type-4
    design.addCommand(58, ZRF.FUNCTION,	25);	// to
    design.addCommand(58, ZRF.FUNCTION,	28);	// end

    design.addCommand(59, ZRF.FUNCTION,	24);	// from
    design.addCommand(59, ZRF.PARAM,	0);	// $1
    design.addCommand(59, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(59, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.PROMOTE,	7);	// D24
    design.addCommand(59, ZRF.MODE,	4);	// type-4
    design.addCommand(59, ZRF.FUNCTION,	25);	// to
    design.addCommand(59, ZRF.FUNCTION,	28);	// end

    design.addCommand(60, ZRF.FUNCTION,	24);	// from
    design.addCommand(60, ZRF.PARAM,	0);	// $1
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.PROMOTE,	19);	// D54
    design.addCommand(60, ZRF.MODE,	4);	// type-4
    design.addCommand(60, ZRF.FUNCTION,	25);	// to
    design.addCommand(60, ZRF.FUNCTION,	28);	// end

    design.addCommand(61, ZRF.FUNCTION,	24);	// from
    design.addCommand(61, ZRF.PARAM,	0);	// $1
    design.addCommand(61, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(61, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.PROMOTE,	20);	// D56
    design.addCommand(61, ZRF.FUNCTION,	25);	// to
    design.addCommand(61, ZRF.FUNCTION,	28);	// end

    design.addCommand(62, ZRF.FUNCTION,	24);	// from
    design.addCommand(62, ZRF.PARAM,	0);	// $1
    design.addCommand(62, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(62, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(62, ZRF.FUNCTION,	0);	// not
    design.addCommand(62, ZRF.FUNCTION,	20);	// verify
    design.addCommand(62, ZRF.PROMOTE,	5);	// D21
    design.addCommand(62, ZRF.FUNCTION,	25);	// to
    design.addCommand(62, ZRF.FUNCTION,	28);	// end

    design.addCommand(63, ZRF.FUNCTION,	24);	// from
    design.addCommand(63, ZRF.PARAM,	0);	// $1
    design.addCommand(63, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(63, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.PROMOTE,	15);	// D45
    design.addCommand(63, ZRF.FUNCTION,	25);	// to
    design.addCommand(63, ZRF.FUNCTION,	28);	// end

    design.addCommand(64, ZRF.FUNCTION,	24);	// from
    design.addCommand(64, ZRF.PARAM,	0);	// $1
    design.addCommand(64, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(64, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.PROMOTE,	11);	// D35
    design.addCommand(64, ZRF.FUNCTION,	25);	// to
    design.addCommand(64, ZRF.FUNCTION,	28);	// end

    design.addCommand(65, ZRF.FUNCTION,	24);	// from
    design.addCommand(65, ZRF.PARAM,	0);	// $1
    design.addCommand(65, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(65, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(65, ZRF.FUNCTION,	20);	// verify
    design.addCommand(65, ZRF.PROMOTE,	20);	// D56
    design.addCommand(65, ZRF.MODE,	1);	// type-1
    design.addCommand(65, ZRF.FUNCTION,	25);	// to
    design.addCommand(65, ZRF.FUNCTION,	28);	// end

    design.addCommand(66, ZRF.FUNCTION,	24);	// from
    design.addCommand(66, ZRF.PARAM,	0);	// $1
    design.addCommand(66, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(66, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.PROMOTE,	5);	// D21
    design.addCommand(66, ZRF.MODE,	1);	// type-1
    design.addCommand(66, ZRF.FUNCTION,	25);	// to
    design.addCommand(66, ZRF.FUNCTION,	28);	// end

    design.addCommand(67, ZRF.FUNCTION,	24);	// from
    design.addCommand(67, ZRF.PARAM,	0);	// $1
    design.addCommand(67, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(67, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.PROMOTE,	15);	// D45
    design.addCommand(67, ZRF.MODE,	1);	// type-1
    design.addCommand(67, ZRF.FUNCTION,	25);	// to
    design.addCommand(67, ZRF.FUNCTION,	28);	// end

    design.addCommand(68, ZRF.FUNCTION,	24);	// from
    design.addCommand(68, ZRF.PARAM,	0);	// $1
    design.addCommand(68, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(68, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(68, ZRF.FUNCTION,	20);	// verify
    design.addCommand(68, ZRF.PROMOTE,	11);	// D35
    design.addCommand(68, ZRF.MODE,	1);	// type-1
    design.addCommand(68, ZRF.FUNCTION,	25);	// to
    design.addCommand(68, ZRF.FUNCTION,	28);	// end

    design.addCommand(69, ZRF.FUNCTION,	24);	// from
    design.addCommand(69, ZRF.PARAM,	0);	// $1
    design.addCommand(69, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(69, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.PROMOTE,	20);	// D56
    design.addCommand(69, ZRF.MODE,	2);	// type-2
    design.addCommand(69, ZRF.FUNCTION,	25);	// to
    design.addCommand(69, ZRF.FUNCTION,	28);	// end

    design.addCommand(70, ZRF.FUNCTION,	24);	// from
    design.addCommand(70, ZRF.PARAM,	0);	// $1
    design.addCommand(70, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(70, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.PROMOTE,	5);	// D21
    design.addCommand(70, ZRF.MODE,	2);	// type-2
    design.addCommand(70, ZRF.FUNCTION,	25);	// to
    design.addCommand(70, ZRF.FUNCTION,	28);	// end

    design.addCommand(71, ZRF.FUNCTION,	24);	// from
    design.addCommand(71, ZRF.PARAM,	0);	// $1
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	20);	// verify
    design.addCommand(71, ZRF.PROMOTE,	15);	// D45
    design.addCommand(71, ZRF.MODE,	2);	// type-2
    design.addCommand(71, ZRF.FUNCTION,	25);	// to
    design.addCommand(71, ZRF.FUNCTION,	28);	// end

    design.addCommand(72, ZRF.FUNCTION,	24);	// from
    design.addCommand(72, ZRF.PARAM,	0);	// $1
    design.addCommand(72, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(72, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.PROMOTE,	11);	// D35
    design.addCommand(72, ZRF.MODE,	2);	// type-2
    design.addCommand(72, ZRF.FUNCTION,	25);	// to
    design.addCommand(72, ZRF.FUNCTION,	28);	// end

    design.addCommand(73, ZRF.FUNCTION,	24);	// from
    design.addCommand(73, ZRF.PARAM,	0);	// $1
    design.addCommand(73, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(73, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(73, ZRF.FUNCTION,	20);	// verify
    design.addCommand(73, ZRF.PROMOTE,	20);	// D56
    design.addCommand(73, ZRF.MODE,	3);	// type-3
    design.addCommand(73, ZRF.FUNCTION,	25);	// to
    design.addCommand(73, ZRF.FUNCTION,	28);	// end

    design.addCommand(74, ZRF.FUNCTION,	24);	// from
    design.addCommand(74, ZRF.PARAM,	0);	// $1
    design.addCommand(74, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(74, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.PROMOTE,	5);	// D21
    design.addCommand(74, ZRF.MODE,	3);	// type-3
    design.addCommand(74, ZRF.FUNCTION,	25);	// to
    design.addCommand(74, ZRF.FUNCTION,	28);	// end

    design.addCommand(75, ZRF.FUNCTION,	24);	// from
    design.addCommand(75, ZRF.PARAM,	0);	// $1
    design.addCommand(75, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(75, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.PROMOTE,	15);	// D45
    design.addCommand(75, ZRF.MODE,	3);	// type-3
    design.addCommand(75, ZRF.FUNCTION,	25);	// to
    design.addCommand(75, ZRF.FUNCTION,	28);	// end

    design.addCommand(76, ZRF.FUNCTION,	24);	// from
    design.addCommand(76, ZRF.PARAM,	0);	// $1
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.PROMOTE,	11);	// D35
    design.addCommand(76, ZRF.MODE,	3);	// type-3
    design.addCommand(76, ZRF.FUNCTION,	25);	// to
    design.addCommand(76, ZRF.FUNCTION,	28);	// end

    design.addCommand(77, ZRF.FUNCTION,	24);	// from
    design.addCommand(77, ZRF.PARAM,	0);	// $1
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PROMOTE,	20);	// D56
    design.addCommand(77, ZRF.MODE,	4);	// type-4
    design.addCommand(77, ZRF.FUNCTION,	25);	// to
    design.addCommand(77, ZRF.FUNCTION,	28);	// end

    design.addCommand(78, ZRF.FUNCTION,	24);	// from
    design.addCommand(78, ZRF.PARAM,	0);	// $1
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PROMOTE,	5);	// D21
    design.addCommand(78, ZRF.MODE,	4);	// type-4
    design.addCommand(78, ZRF.FUNCTION,	25);	// to
    design.addCommand(78, ZRF.FUNCTION,	28);	// end

    design.addCommand(79, ZRF.FUNCTION,	24);	// from
    design.addCommand(79, ZRF.PARAM,	0);	// $1
    design.addCommand(79, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(79, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.PROMOTE,	15);	// D45
    design.addCommand(79, ZRF.MODE,	4);	// type-4
    design.addCommand(79, ZRF.FUNCTION,	25);	// to
    design.addCommand(79, ZRF.FUNCTION,	28);	// end

    design.addCommand(80, ZRF.FUNCTION,	24);	// from
    design.addCommand(80, ZRF.PARAM,	0);	// $1
    design.addCommand(80, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(80, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.PROMOTE,	11);	// D35
    design.addCommand(80, ZRF.MODE,	4);	// type-4
    design.addCommand(80, ZRF.FUNCTION,	25);	// to
    design.addCommand(80, ZRF.FUNCTION,	28);	// end

    design.addCommand(81, ZRF.FUNCTION,	24);	// from
    design.addCommand(81, ZRF.PARAM,	0);	// $1
    design.addCommand(81, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(81, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.PROMOTE,	4);	// D15
    design.addCommand(81, ZRF.MODE,	1);	// type-1
    design.addCommand(81, ZRF.FUNCTION,	25);	// to
    design.addCommand(81, ZRF.FUNCTION,	28);	// end

    design.addCommand(82, ZRF.FUNCTION,	24);	// from
    design.addCommand(82, ZRF.PARAM,	0);	// $1
    design.addCommand(82, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(82, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.PROMOTE,	21);	// D62
    design.addCommand(82, ZRF.MODE,	1);	// type-1
    design.addCommand(82, ZRF.FUNCTION,	25);	// to
    design.addCommand(82, ZRF.FUNCTION,	28);	// end

    design.addCommand(83, ZRF.FUNCTION,	24);	// from
    design.addCommand(83, ZRF.PARAM,	0);	// $1
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.PROMOTE,	4);	// D15
    design.addCommand(83, ZRF.FUNCTION,	25);	// to
    design.addCommand(83, ZRF.FUNCTION,	28);	// end

    design.addCommand(84, ZRF.FUNCTION,	24);	// from
    design.addCommand(84, ZRF.PARAM,	0);	// $1
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PROMOTE,	21);	// D62
    design.addCommand(84, ZRF.FUNCTION,	25);	// to
    design.addCommand(84, ZRF.FUNCTION,	28);	// end

    design.addCommand(85, ZRF.FUNCTION,	24);	// from
    design.addCommand(85, ZRF.PARAM,	0);	// $1
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PROMOTE,	4);	// D15
    design.addCommand(85, ZRF.MODE,	2);	// type-2
    design.addCommand(85, ZRF.FUNCTION,	25);	// to
    design.addCommand(85, ZRF.FUNCTION,	28);	// end

    design.addCommand(86, ZRF.FUNCTION,	24);	// from
    design.addCommand(86, ZRF.PARAM,	0);	// $1
    design.addCommand(86, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(86, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(86, ZRF.FUNCTION,	20);	// verify
    design.addCommand(86, ZRF.PROMOTE,	21);	// D62
    design.addCommand(86, ZRF.MODE,	2);	// type-2
    design.addCommand(86, ZRF.FUNCTION,	25);	// to
    design.addCommand(86, ZRF.FUNCTION,	28);	// end

    design.addCommand(87, ZRF.FUNCTION,	24);	// from
    design.addCommand(87, ZRF.PARAM,	0);	// $1
    design.addCommand(87, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(87, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(87, ZRF.FUNCTION,	20);	// verify
    design.addCommand(87, ZRF.PROMOTE,	4);	// D15
    design.addCommand(87, ZRF.MODE,	3);	// type-3
    design.addCommand(87, ZRF.FUNCTION,	25);	// to
    design.addCommand(87, ZRF.FUNCTION,	28);	// end

    design.addCommand(88, ZRF.FUNCTION,	24);	// from
    design.addCommand(88, ZRF.PARAM,	0);	// $1
    design.addCommand(88, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(88, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(88, ZRF.FUNCTION,	20);	// verify
    design.addCommand(88, ZRF.PROMOTE,	21);	// D62
    design.addCommand(88, ZRF.MODE,	3);	// type-3
    design.addCommand(88, ZRF.FUNCTION,	25);	// to
    design.addCommand(88, ZRF.FUNCTION,	28);	// end

    design.addCommand(89, ZRF.FUNCTION,	24);	// from
    design.addCommand(89, ZRF.PARAM,	0);	// $1
    design.addCommand(89, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(89, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(89, ZRF.FUNCTION,	20);	// verify
    design.addCommand(89, ZRF.PROMOTE,	4);	// D15
    design.addCommand(89, ZRF.MODE,	4);	// type-4
    design.addCommand(89, ZRF.FUNCTION,	25);	// to
    design.addCommand(89, ZRF.FUNCTION,	28);	// end

    design.addCommand(90, ZRF.FUNCTION,	24);	// from
    design.addCommand(90, ZRF.PARAM,	0);	// $1
    design.addCommand(90, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(90, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(90, ZRF.FUNCTION,	20);	// verify
    design.addCommand(90, ZRF.PROMOTE,	21);	// D62
    design.addCommand(90, ZRF.MODE,	4);	// type-4
    design.addCommand(90, ZRF.FUNCTION,	25);	// to
    design.addCommand(90, ZRF.FUNCTION,	28);	// end

    design.addCommand(91, ZRF.FUNCTION,	24);	// from
    design.addCommand(91, ZRF.PARAM,	0);	// $1
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.PROMOTE,	2);	// D13
    design.addCommand(91, ZRF.MODE,	1);	// type-1
    design.addCommand(91, ZRF.FUNCTION,	25);	// to
    design.addCommand(91, ZRF.FUNCTION,	28);	// end

    design.addCommand(92, ZRF.FUNCTION,	24);	// from
    design.addCommand(92, ZRF.PARAM,	0);	// $1
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PROMOTE,	22);	// D63
    design.addCommand(92, ZRF.MODE,	1);	// type-1
    design.addCommand(92, ZRF.FUNCTION,	25);	// to
    design.addCommand(92, ZRF.FUNCTION,	28);	// end

    design.addCommand(93, ZRF.FUNCTION,	24);	// from
    design.addCommand(93, ZRF.PARAM,	0);	// $1
    design.addCommand(93, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(93, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(93, ZRF.FUNCTION,	0);	// not
    design.addCommand(93, ZRF.FUNCTION,	20);	// verify
    design.addCommand(93, ZRF.PROMOTE,	2);	// D13
    design.addCommand(93, ZRF.FUNCTION,	25);	// to
    design.addCommand(93, ZRF.FUNCTION,	28);	// end

    design.addCommand(94, ZRF.FUNCTION,	24);	// from
    design.addCommand(94, ZRF.PARAM,	0);	// $1
    design.addCommand(94, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(94, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(94, ZRF.FUNCTION,	0);	// not
    design.addCommand(94, ZRF.FUNCTION,	20);	// verify
    design.addCommand(94, ZRF.PROMOTE,	22);	// D63
    design.addCommand(94, ZRF.FUNCTION,	25);	// to
    design.addCommand(94, ZRF.FUNCTION,	28);	// end

    design.addCommand(95, ZRF.FUNCTION,	24);	// from
    design.addCommand(95, ZRF.PARAM,	0);	// $1
    design.addCommand(95, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(95, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(95, ZRF.FUNCTION,	20);	// verify
    design.addCommand(95, ZRF.PROMOTE,	2);	// D13
    design.addCommand(95, ZRF.MODE,	2);	// type-2
    design.addCommand(95, ZRF.FUNCTION,	25);	// to
    design.addCommand(95, ZRF.FUNCTION,	28);	// end

    design.addCommand(96, ZRF.FUNCTION,	24);	// from
    design.addCommand(96, ZRF.PARAM,	0);	// $1
    design.addCommand(96, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(96, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(96, ZRF.FUNCTION,	20);	// verify
    design.addCommand(96, ZRF.PROMOTE,	22);	// D63
    design.addCommand(96, ZRF.MODE,	2);	// type-2
    design.addCommand(96, ZRF.FUNCTION,	25);	// to
    design.addCommand(96, ZRF.FUNCTION,	28);	// end

    design.addCommand(97, ZRF.FUNCTION,	24);	// from
    design.addCommand(97, ZRF.PARAM,	0);	// $1
    design.addCommand(97, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(97, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(97, ZRF.FUNCTION,	20);	// verify
    design.addCommand(97, ZRF.PROMOTE,	2);	// D13
    design.addCommand(97, ZRF.MODE,	3);	// type-3
    design.addCommand(97, ZRF.FUNCTION,	25);	// to
    design.addCommand(97, ZRF.FUNCTION,	28);	// end

    design.addCommand(98, ZRF.FUNCTION,	24);	// from
    design.addCommand(98, ZRF.PARAM,	0);	// $1
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.PROMOTE,	22);	// D63
    design.addCommand(98, ZRF.MODE,	3);	// type-3
    design.addCommand(98, ZRF.FUNCTION,	25);	// to
    design.addCommand(98, ZRF.FUNCTION,	28);	// end

    design.addCommand(99, ZRF.FUNCTION,	24);	// from
    design.addCommand(99, ZRF.PARAM,	0);	// $1
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PROMOTE,	2);	// D13
    design.addCommand(99, ZRF.MODE,	4);	// type-4
    design.addCommand(99, ZRF.FUNCTION,	25);	// to
    design.addCommand(99, ZRF.FUNCTION,	28);	// end

    design.addCommand(100, ZRF.FUNCTION,	24);	// from
    design.addCommand(100, ZRF.PARAM,	0);	// $1
    design.addCommand(100, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(100, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(100, ZRF.FUNCTION,	20);	// verify
    design.addCommand(100, ZRF.PROMOTE,	22);	// D63
    design.addCommand(100, ZRF.MODE,	4);	// type-4
    design.addCommand(100, ZRF.FUNCTION,	25);	// to
    design.addCommand(100, ZRF.FUNCTION,	28);	// end

    design.addCommand(101, ZRF.FUNCTION,	24);	// from
    design.addCommand(101, ZRF.PARAM,	0);	// $1
    design.addCommand(101, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(101, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(101, ZRF.FUNCTION,	20);	// verify
    design.addCommand(101, ZRF.PROMOTE,	23);	// D64
    design.addCommand(101, ZRF.MODE,	1);	// type-1
    design.addCommand(101, ZRF.FUNCTION,	25);	// to
    design.addCommand(101, ZRF.FUNCTION,	28);	// end

    design.addCommand(102, ZRF.FUNCTION,	24);	// from
    design.addCommand(102, ZRF.PARAM,	0);	// $1
    design.addCommand(102, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(102, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(102, ZRF.FUNCTION,	20);	// verify
    design.addCommand(102, ZRF.PROMOTE,	3);	// D14
    design.addCommand(102, ZRF.MODE,	1);	// type-1
    design.addCommand(102, ZRF.FUNCTION,	25);	// to
    design.addCommand(102, ZRF.FUNCTION,	28);	// end

    design.addCommand(103, ZRF.FUNCTION,	24);	// from
    design.addCommand(103, ZRF.PARAM,	0);	// $1
    design.addCommand(103, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(103, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(103, ZRF.FUNCTION,	0);	// not
    design.addCommand(103, ZRF.FUNCTION,	20);	// verify
    design.addCommand(103, ZRF.PROMOTE,	23);	// D64
    design.addCommand(103, ZRF.FUNCTION,	25);	// to
    design.addCommand(103, ZRF.FUNCTION,	28);	// end

    design.addCommand(104, ZRF.FUNCTION,	24);	// from
    design.addCommand(104, ZRF.PARAM,	0);	// $1
    design.addCommand(104, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(104, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(104, ZRF.FUNCTION,	0);	// not
    design.addCommand(104, ZRF.FUNCTION,	20);	// verify
    design.addCommand(104, ZRF.PROMOTE,	3);	// D14
    design.addCommand(104, ZRF.FUNCTION,	25);	// to
    design.addCommand(104, ZRF.FUNCTION,	28);	// end

    design.addCommand(105, ZRF.FUNCTION,	24);	// from
    design.addCommand(105, ZRF.PARAM,	0);	// $1
    design.addCommand(105, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(105, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(105, ZRF.FUNCTION,	20);	// verify
    design.addCommand(105, ZRF.PROMOTE,	23);	// D64
    design.addCommand(105, ZRF.MODE,	2);	// type-2
    design.addCommand(105, ZRF.FUNCTION,	25);	// to
    design.addCommand(105, ZRF.FUNCTION,	28);	// end

    design.addCommand(106, ZRF.FUNCTION,	24);	// from
    design.addCommand(106, ZRF.PARAM,	0);	// $1
    design.addCommand(106, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(106, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(106, ZRF.FUNCTION,	20);	// verify
    design.addCommand(106, ZRF.PROMOTE,	3);	// D14
    design.addCommand(106, ZRF.MODE,	2);	// type-2
    design.addCommand(106, ZRF.FUNCTION,	25);	// to
    design.addCommand(106, ZRF.FUNCTION,	28);	// end

    design.addCommand(107, ZRF.FUNCTION,	24);	// from
    design.addCommand(107, ZRF.PARAM,	0);	// $1
    design.addCommand(107, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(107, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(107, ZRF.FUNCTION,	20);	// verify
    design.addCommand(107, ZRF.PROMOTE,	23);	// D64
    design.addCommand(107, ZRF.MODE,	3);	// type-3
    design.addCommand(107, ZRF.FUNCTION,	25);	// to
    design.addCommand(107, ZRF.FUNCTION,	28);	// end

    design.addCommand(108, ZRF.FUNCTION,	24);	// from
    design.addCommand(108, ZRF.PARAM,	0);	// $1
    design.addCommand(108, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(108, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(108, ZRF.FUNCTION,	20);	// verify
    design.addCommand(108, ZRF.PROMOTE,	3);	// D14
    design.addCommand(108, ZRF.MODE,	3);	// type-3
    design.addCommand(108, ZRF.FUNCTION,	25);	// to
    design.addCommand(108, ZRF.FUNCTION,	28);	// end

    design.addCommand(109, ZRF.FUNCTION,	24);	// from
    design.addCommand(109, ZRF.PARAM,	0);	// $1
    design.addCommand(109, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(109, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(109, ZRF.FUNCTION,	20);	// verify
    design.addCommand(109, ZRF.PROMOTE,	23);	// D64
    design.addCommand(109, ZRF.MODE,	4);	// type-4
    design.addCommand(109, ZRF.FUNCTION,	25);	// to
    design.addCommand(109, ZRF.FUNCTION,	28);	// end

    design.addCommand(110, ZRF.FUNCTION,	24);	// from
    design.addCommand(110, ZRF.PARAM,	0);	// $1
    design.addCommand(110, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(110, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(110, ZRF.FUNCTION,	20);	// verify
    design.addCommand(110, ZRF.PROMOTE,	3);	// D14
    design.addCommand(110, ZRF.MODE,	4);	// type-4
    design.addCommand(110, ZRF.FUNCTION,	25);	// to
    design.addCommand(110, ZRF.FUNCTION,	28);	// end

    design.addCommand(111, ZRF.FUNCTION,	24);	// from
    design.addCommand(111, ZRF.PARAM,	0);	// $1
    design.addCommand(111, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(111, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(111, ZRF.FUNCTION,	20);	// verify
    design.addCommand(111, ZRF.PROMOTE,	24);	// D65
    design.addCommand(111, ZRF.MODE,	1);	// type-1
    design.addCommand(111, ZRF.FUNCTION,	25);	// to
    design.addCommand(111, ZRF.FUNCTION,	28);	// end

    design.addCommand(112, ZRF.FUNCTION,	24);	// from
    design.addCommand(112, ZRF.PARAM,	0);	// $1
    design.addCommand(112, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(112, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(112, ZRF.FUNCTION,	20);	// verify
    design.addCommand(112, ZRF.PROMOTE,	1);	// D12
    design.addCommand(112, ZRF.MODE,	1);	// type-1
    design.addCommand(112, ZRF.FUNCTION,	25);	// to
    design.addCommand(112, ZRF.FUNCTION,	28);	// end

    design.addCommand(113, ZRF.FUNCTION,	24);	// from
    design.addCommand(113, ZRF.PARAM,	0);	// $1
    design.addCommand(113, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(113, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(113, ZRF.FUNCTION,	0);	// not
    design.addCommand(113, ZRF.FUNCTION,	20);	// verify
    design.addCommand(113, ZRF.PROMOTE,	24);	// D65
    design.addCommand(113, ZRF.FUNCTION,	25);	// to
    design.addCommand(113, ZRF.FUNCTION,	28);	// end

    design.addCommand(114, ZRF.FUNCTION,	24);	// from
    design.addCommand(114, ZRF.PARAM,	0);	// $1
    design.addCommand(114, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(114, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(114, ZRF.FUNCTION,	0);	// not
    design.addCommand(114, ZRF.FUNCTION,	20);	// verify
    design.addCommand(114, ZRF.PROMOTE,	1);	// D12
    design.addCommand(114, ZRF.FUNCTION,	25);	// to
    design.addCommand(114, ZRF.FUNCTION,	28);	// end

    design.addCommand(115, ZRF.FUNCTION,	24);	// from
    design.addCommand(115, ZRF.PARAM,	0);	// $1
    design.addCommand(115, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(115, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(115, ZRF.FUNCTION,	20);	// verify
    design.addCommand(115, ZRF.PROMOTE,	24);	// D65
    design.addCommand(115, ZRF.MODE,	2);	// type-2
    design.addCommand(115, ZRF.FUNCTION,	25);	// to
    design.addCommand(115, ZRF.FUNCTION,	28);	// end

    design.addCommand(116, ZRF.FUNCTION,	24);	// from
    design.addCommand(116, ZRF.PARAM,	0);	// $1
    design.addCommand(116, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(116, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(116, ZRF.FUNCTION,	20);	// verify
    design.addCommand(116, ZRF.PROMOTE,	1);	// D12
    design.addCommand(116, ZRF.MODE,	2);	// type-2
    design.addCommand(116, ZRF.FUNCTION,	25);	// to
    design.addCommand(116, ZRF.FUNCTION,	28);	// end

    design.addCommand(117, ZRF.FUNCTION,	24);	// from
    design.addCommand(117, ZRF.PARAM,	0);	// $1
    design.addCommand(117, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(117, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(117, ZRF.FUNCTION,	20);	// verify
    design.addCommand(117, ZRF.PROMOTE,	24);	// D65
    design.addCommand(117, ZRF.MODE,	3);	// type-3
    design.addCommand(117, ZRF.FUNCTION,	25);	// to
    design.addCommand(117, ZRF.FUNCTION,	28);	// end

    design.addCommand(118, ZRF.FUNCTION,	24);	// from
    design.addCommand(118, ZRF.PARAM,	0);	// $1
    design.addCommand(118, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(118, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(118, ZRF.FUNCTION,	20);	// verify
    design.addCommand(118, ZRF.PROMOTE,	1);	// D12
    design.addCommand(118, ZRF.MODE,	3);	// type-3
    design.addCommand(118, ZRF.FUNCTION,	25);	// to
    design.addCommand(118, ZRF.FUNCTION,	28);	// end

    design.addCommand(119, ZRF.FUNCTION,	24);	// from
    design.addCommand(119, ZRF.PARAM,	0);	// $1
    design.addCommand(119, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(119, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(119, ZRF.FUNCTION,	20);	// verify
    design.addCommand(119, ZRF.PROMOTE,	24);	// D65
    design.addCommand(119, ZRF.MODE,	4);	// type-4
    design.addCommand(119, ZRF.FUNCTION,	25);	// to
    design.addCommand(119, ZRF.FUNCTION,	28);	// end

    design.addCommand(120, ZRF.FUNCTION,	24);	// from
    design.addCommand(120, ZRF.PARAM,	0);	// $1
    design.addCommand(120, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(120, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(120, ZRF.FUNCTION,	20);	// verify
    design.addCommand(120, ZRF.PROMOTE,	1);	// D12
    design.addCommand(120, ZRF.MODE,	4);	// type-4
    design.addCommand(120, ZRF.FUNCTION,	25);	// to
    design.addCommand(120, ZRF.FUNCTION,	28);	// end

    design.addCommand(121, ZRF.FUNCTION,	24);	// from
    design.addCommand(121, ZRF.PARAM,	0);	// $1
    design.addCommand(121, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(121, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(121, ZRF.FUNCTION,	20);	// verify
    design.addCommand(121, ZRF.PROMOTE,	5);	// D21
    design.addCommand(121, ZRF.MODE,	5);	// type-5
    design.addCommand(121, ZRF.FUNCTION,	25);	// to
    design.addCommand(121, ZRF.FUNCTION,	28);	// end

    design.addCommand(122, ZRF.FUNCTION,	24);	// from
    design.addCommand(122, ZRF.PARAM,	0);	// $1
    design.addCommand(122, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(122, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(122, ZRF.FUNCTION,	20);	// verify
    design.addCommand(122, ZRF.PROMOTE,	20);	// D56
    design.addCommand(122, ZRF.MODE,	5);	// type-5
    design.addCommand(122, ZRF.FUNCTION,	25);	// to
    design.addCommand(122, ZRF.FUNCTION,	28);	// end

    design.addCommand(123, ZRF.FUNCTION,	24);	// from
    design.addCommand(123, ZRF.PARAM,	0);	// $1
    design.addCommand(123, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(123, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(123, ZRF.FUNCTION,	20);	// verify
    design.addCommand(123, ZRF.PROMOTE,	14);	// D42
    design.addCommand(123, ZRF.MODE,	5);	// type-5
    design.addCommand(123, ZRF.FUNCTION,	25);	// to
    design.addCommand(123, ZRF.FUNCTION,	28);	// end

    design.addCommand(124, ZRF.FUNCTION,	24);	// from
    design.addCommand(124, ZRF.PARAM,	0);	// $1
    design.addCommand(124, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(124, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(124, ZRF.FUNCTION,	20);	// verify
    design.addCommand(124, ZRF.PROMOTE,	10);	// D32
    design.addCommand(124, ZRF.MODE,	5);	// type-5
    design.addCommand(124, ZRF.FUNCTION,	25);	// to
    design.addCommand(124, ZRF.FUNCTION,	28);	// end

    design.addCommand(125, ZRF.FUNCTION,	24);	// from
    design.addCommand(125, ZRF.PARAM,	0);	// $1
    design.addCommand(125, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(125, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(125, ZRF.FUNCTION,	20);	// verify
    design.addCommand(125, ZRF.PROMOTE,	9);	// D31
    design.addCommand(125, ZRF.MODE,	5);	// type-5
    design.addCommand(125, ZRF.FUNCTION,	25);	// to
    design.addCommand(125, ZRF.FUNCTION,	28);	// end

    design.addCommand(126, ZRF.FUNCTION,	24);	// from
    design.addCommand(126, ZRF.PARAM,	0);	// $1
    design.addCommand(126, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(126, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(126, ZRF.FUNCTION,	20);	// verify
    design.addCommand(126, ZRF.PROMOTE,	16);	// D46
    design.addCommand(126, ZRF.MODE,	5);	// type-5
    design.addCommand(126, ZRF.FUNCTION,	25);	// to
    design.addCommand(126, ZRF.FUNCTION,	28);	// end

    design.addCommand(127, ZRF.FUNCTION,	24);	// from
    design.addCommand(127, ZRF.PARAM,	0);	// $1
    design.addCommand(127, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(127, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(127, ZRF.FUNCTION,	20);	// verify
    design.addCommand(127, ZRF.PROMOTE,	6);	// D23
    design.addCommand(127, ZRF.MODE,	5);	// type-5
    design.addCommand(127, ZRF.FUNCTION,	25);	// to
    design.addCommand(127, ZRF.FUNCTION,	28);	// end

    design.addCommand(128, ZRF.FUNCTION,	24);	// from
    design.addCommand(128, ZRF.PARAM,	0);	// $1
    design.addCommand(128, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(128, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(128, ZRF.FUNCTION,	20);	// verify
    design.addCommand(128, ZRF.PROMOTE,	18);	// D53
    design.addCommand(128, ZRF.MODE,	5);	// type-5
    design.addCommand(128, ZRF.FUNCTION,	25);	// to
    design.addCommand(128, ZRF.FUNCTION,	28);	// end

    design.addCommand(129, ZRF.FUNCTION,	24);	// from
    design.addCommand(129, ZRF.PARAM,	0);	// $1
    design.addCommand(129, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(129, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(129, ZRF.FUNCTION,	20);	// verify
    design.addCommand(129, ZRF.PROMOTE,	13);	// D41
    design.addCommand(129, ZRF.MODE,	5);	// type-5
    design.addCommand(129, ZRF.FUNCTION,	25);	// to
    design.addCommand(129, ZRF.FUNCTION,	28);	// end

    design.addCommand(130, ZRF.FUNCTION,	24);	// from
    design.addCommand(130, ZRF.PARAM,	0);	// $1
    design.addCommand(130, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(130, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(130, ZRF.FUNCTION,	20);	// verify
    design.addCommand(130, ZRF.PROMOTE,	12);	// D36
    design.addCommand(130, ZRF.MODE,	5);	// type-5
    design.addCommand(130, ZRF.FUNCTION,	25);	// to
    design.addCommand(130, ZRF.FUNCTION,	28);	// end

    design.addCommand(131, ZRF.FUNCTION,	24);	// from
    design.addCommand(131, ZRF.PARAM,	0);	// $1
    design.addCommand(131, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(131, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(131, ZRF.FUNCTION,	20);	// verify
    design.addCommand(131, ZRF.PROMOTE,	19);	// D54
    design.addCommand(131, ZRF.MODE,	5);	// type-5
    design.addCommand(131, ZRF.FUNCTION,	25);	// to
    design.addCommand(131, ZRF.FUNCTION,	28);	// end

    design.addCommand(132, ZRF.FUNCTION,	24);	// from
    design.addCommand(132, ZRF.PARAM,	0);	// $1
    design.addCommand(132, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(132, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(132, ZRF.FUNCTION,	20);	// verify
    design.addCommand(132, ZRF.PROMOTE,	7);	// D24
    design.addCommand(132, ZRF.MODE,	5);	// type-5
    design.addCommand(132, ZRF.FUNCTION,	25);	// to
    design.addCommand(132, ZRF.FUNCTION,	28);	// end

    design.addCommand(133, ZRF.FUNCTION,	24);	// from
    design.addCommand(133, ZRF.PARAM,	0);	// $1
    design.addCommand(133, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(133, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(133, ZRF.FUNCTION,	20);	// verify
    design.addCommand(133, ZRF.PROMOTE,	17);	// D51
    design.addCommand(133, ZRF.MODE,	5);	// type-5
    design.addCommand(133, ZRF.FUNCTION,	25);	// to
    design.addCommand(133, ZRF.FUNCTION,	28);	// end

    design.addCommand(134, ZRF.FUNCTION,	24);	// from
    design.addCommand(134, ZRF.PARAM,	0);	// $1
    design.addCommand(134, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(134, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(134, ZRF.FUNCTION,	20);	// verify
    design.addCommand(134, ZRF.PROMOTE,	8);	// D26
    design.addCommand(134, ZRF.MODE,	5);	// type-5
    design.addCommand(134, ZRF.FUNCTION,	25);	// to
    design.addCommand(134, ZRF.FUNCTION,	28);	// end

    design.addCommand(135, ZRF.FUNCTION,	24);	// from
    design.addCommand(135, ZRF.PARAM,	0);	// $1
    design.addCommand(135, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(135, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(135, ZRF.FUNCTION,	20);	// verify
    design.addCommand(135, ZRF.PROMOTE,	11);	// D35
    design.addCommand(135, ZRF.MODE,	5);	// type-5
    design.addCommand(135, ZRF.FUNCTION,	25);	// to
    design.addCommand(135, ZRF.FUNCTION,	28);	// end

    design.addCommand(136, ZRF.FUNCTION,	24);	// from
    design.addCommand(136, ZRF.PARAM,	0);	// $1
    design.addCommand(136, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(136, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(136, ZRF.FUNCTION,	20);	// verify
    design.addCommand(136, ZRF.PROMOTE,	15);	// D45
    design.addCommand(136, ZRF.MODE,	5);	// type-5
    design.addCommand(136, ZRF.FUNCTION,	25);	// to
    design.addCommand(136, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("D12", 1);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 2, [0], 0);
    design.addMove(1, 3, [2], 0);
    design.addMove(1, 4, [1], 0);
    design.addMove(1, 1, [3], 1);
    design.addMove(1, 2, [0], 1);
    design.addMove(1, 3, [2], 1);
    design.addMove(1, 4, [1], 1);
    design.addMove(1, 5, [3], 2);
    design.addMove(1, 6, [0], 2);
    design.addMove(1, 7, [2], 2);
    design.addMove(1, 8, [1], 2);
    design.addMove(1, 9, [3], 3);
    design.addMove(1, 10, [0], 3);
    design.addMove(1, 11, [2], 3);
    design.addMove(1, 12, [1], 3);
    design.addMove(1, 13, [3], 4);
    design.addMove(1, 14, [0], 4);
    design.addMove(1, 15, [2], 4);
    design.addMove(1, 16, [1], 4);
    design.addMove(1, 17, [3], 5);
    design.addMove(1, 18, [0], 5);
    design.addMove(1, 19, [2], 5);
    design.addMove(1, 20, [1], 5);

    design.addPiece("D13", 2);
    design.addMove(2, 21, [3], 0);
    design.addMove(2, 22, [0], 0);
    design.addMove(2, 23, [2], 0);
    design.addMove(2, 24, [1], 0);
    design.addMove(2, 21, [3], 1);
    design.addMove(2, 22, [0], 1);
    design.addMove(2, 23, [2], 1);
    design.addMove(2, 24, [1], 1);
    design.addMove(2, 25, [3], 2);
    design.addMove(2, 26, [0], 2);
    design.addMove(2, 27, [2], 2);
    design.addMove(2, 28, [1], 2);
    design.addMove(2, 29, [3], 3);
    design.addMove(2, 30, [0], 3);
    design.addMove(2, 31, [2], 3);
    design.addMove(2, 32, [1], 3);
    design.addMove(2, 33, [3], 4);
    design.addMove(2, 34, [0], 4);
    design.addMove(2, 35, [2], 4);
    design.addMove(2, 36, [1], 4);
    design.addMove(2, 37, [3], 5);
    design.addMove(2, 38, [0], 5);
    design.addMove(2, 39, [2], 5);
    design.addMove(2, 40, [1], 5);

    design.addPiece("D14", 3);
    design.addMove(3, 41, [3], 0);
    design.addMove(3, 42, [0], 0);
    design.addMove(3, 43, [2], 0);
    design.addMove(3, 44, [1], 0);
    design.addMove(3, 41, [3], 1);
    design.addMove(3, 42, [0], 1);
    design.addMove(3, 43, [2], 1);
    design.addMove(3, 44, [1], 1);
    design.addMove(3, 45, [3], 2);
    design.addMove(3, 46, [0], 2);
    design.addMove(3, 47, [2], 2);
    design.addMove(3, 48, [1], 2);
    design.addMove(3, 49, [3], 3);
    design.addMove(3, 50, [0], 3);
    design.addMove(3, 51, [2], 3);
    design.addMove(3, 52, [1], 3);
    design.addMove(3, 53, [3], 4);
    design.addMove(3, 54, [0], 4);
    design.addMove(3, 55, [2], 4);
    design.addMove(3, 56, [1], 4);
    design.addMove(3, 57, [3], 5);
    design.addMove(3, 58, [0], 5);
    design.addMove(3, 59, [2], 5);
    design.addMove(3, 60, [1], 5);

    design.addPiece("D15", 4);
    design.addMove(4, 61, [3], 0);
    design.addMove(4, 62, [0], 0);
    design.addMove(4, 63, [2], 0);
    design.addMove(4, 64, [1], 0);
    design.addMove(4, 61, [3], 1);
    design.addMove(4, 62, [0], 1);
    design.addMove(4, 63, [2], 1);
    design.addMove(4, 64, [1], 1);
    design.addMove(4, 65, [3], 2);
    design.addMove(4, 66, [0], 2);
    design.addMove(4, 67, [2], 2);
    design.addMove(4, 68, [1], 2);
    design.addMove(4, 69, [3], 3);
    design.addMove(4, 70, [0], 3);
    design.addMove(4, 71, [2], 3);
    design.addMove(4, 72, [1], 3);
    design.addMove(4, 73, [3], 4);
    design.addMove(4, 74, [0], 4);
    design.addMove(4, 75, [2], 4);
    design.addMove(4, 76, [1], 4);
    design.addMove(4, 77, [3], 5);
    design.addMove(4, 78, [0], 5);
    design.addMove(4, 79, [2], 5);
    design.addMove(4, 80, [1], 5);

    design.addPiece("D21", 5);
    design.addMove(5, 81, [3], 0);
    design.addMove(5, 82, [0], 0);
    design.addMove(5, 26, [2], 0);
    design.addMove(5, 46, [1], 0);
    design.addMove(5, 83, [3], 1);
    design.addMove(5, 84, [0], 1);
    design.addMove(5, 22, [2], 1);
    design.addMove(5, 42, [1], 1);
    design.addMove(5, 81, [3], 2);
    design.addMove(5, 82, [0], 2);
    design.addMove(5, 26, [2], 2);
    design.addMove(5, 46, [1], 2);
    design.addMove(5, 85, [3], 3);
    design.addMove(5, 86, [0], 3);
    design.addMove(5, 30, [2], 3);
    design.addMove(5, 50, [1], 3);
    design.addMove(5, 87, [3], 4);
    design.addMove(5, 88, [0], 4);
    design.addMove(5, 34, [2], 4);
    design.addMove(5, 54, [1], 4);
    design.addMove(5, 89, [3], 5);
    design.addMove(5, 90, [0], 5);
    design.addMove(5, 38, [2], 5);
    design.addMove(5, 58, [1], 5);

    design.addPiece("D23", 6);
    design.addMove(6, 68, [3], 0);
    design.addMove(6, 8, [0], 0);
    design.addMove(6, 91, [2], 0);
    design.addMove(6, 92, [1], 0);
    design.addMove(6, 64, [3], 1);
    design.addMove(6, 4, [0], 1);
    design.addMove(6, 93, [2], 1);
    design.addMove(6, 94, [1], 1);
    design.addMove(6, 68, [3], 2);
    design.addMove(6, 8, [0], 2);
    design.addMove(6, 91, [2], 2);
    design.addMove(6, 92, [1], 2);
    design.addMove(6, 72, [3], 3);
    design.addMove(6, 12, [0], 3);
    design.addMove(6, 95, [2], 3);
    design.addMove(6, 96, [1], 3);
    design.addMove(6, 76, [3], 4);
    design.addMove(6, 16, [0], 4);
    design.addMove(6, 97, [2], 4);
    design.addMove(6, 98, [1], 4);
    design.addMove(6, 80, [3], 5);
    design.addMove(6, 20, [0], 5);
    design.addMove(6, 99, [2], 5);
    design.addMove(6, 100, [1], 5);

    design.addPiece("D24", 7);
    design.addMove(7, 67, [3], 0);
    design.addMove(7, 7, [0], 0);
    design.addMove(7, 101, [2], 0);
    design.addMove(7, 102, [1], 0);
    design.addMove(7, 63, [3], 1);
    design.addMove(7, 3, [0], 1);
    design.addMove(7, 103, [2], 1);
    design.addMove(7, 104, [1], 1);
    design.addMove(7, 67, [3], 2);
    design.addMove(7, 7, [0], 2);
    design.addMove(7, 101, [2], 2);
    design.addMove(7, 102, [1], 2);
    design.addMove(7, 71, [3], 3);
    design.addMove(7, 11, [0], 3);
    design.addMove(7, 105, [2], 3);
    design.addMove(7, 106, [1], 3);
    design.addMove(7, 75, [3], 4);
    design.addMove(7, 15, [0], 4);
    design.addMove(7, 107, [2], 4);
    design.addMove(7, 108, [1], 4);
    design.addMove(7, 79, [3], 5);
    design.addMove(7, 19, [0], 5);
    design.addMove(7, 109, [2], 5);
    design.addMove(7, 110, [1], 5);

    design.addPiece("D26", 8);
    design.addMove(8, 111, [3], 0);
    design.addMove(8, 112, [0], 0);
    design.addMove(8, 25, [2], 0);
    design.addMove(8, 45, [1], 0);
    design.addMove(8, 113, [3], 1);
    design.addMove(8, 114, [0], 1);
    design.addMove(8, 21, [2], 1);
    design.addMove(8, 41, [1], 1);
    design.addMove(8, 111, [3], 2);
    design.addMove(8, 112, [0], 2);
    design.addMove(8, 25, [2], 2);
    design.addMove(8, 45, [1], 2);
    design.addMove(8, 115, [3], 3);
    design.addMove(8, 116, [0], 3);
    design.addMove(8, 29, [2], 3);
    design.addMove(8, 49, [1], 3);
    design.addMove(8, 117, [3], 4);
    design.addMove(8, 118, [0], 4);
    design.addMove(8, 33, [2], 4);
    design.addMove(8, 53, [1], 4);
    design.addMove(8, 119, [3], 5);
    design.addMove(8, 120, [0], 5);
    design.addMove(8, 37, [2], 5);
    design.addMove(8, 57, [1], 5);

    design.addPiece("D31", 9);
    design.addMove(9, 106, [3], 0);
    design.addMove(9, 96, [0], 0);
    design.addMove(9, 70, [2], 0);
    design.addMove(9, 10, [1], 0);
    design.addMove(9, 104, [3], 1);
    design.addMove(9, 94, [0], 1);
    design.addMove(9, 62, [2], 1);
    design.addMove(9, 2, [1], 1);
    design.addMove(9, 102, [3], 2);
    design.addMove(9, 92, [0], 2);
    design.addMove(9, 66, [2], 2);
    design.addMove(9, 6, [1], 2);
    design.addMove(9, 106, [3], 3);
    design.addMove(9, 96, [0], 3);
    design.addMove(9, 70, [2], 3);
    design.addMove(9, 10, [1], 3);
    design.addMove(9, 108, [3], 4);
    design.addMove(9, 98, [0], 4);
    design.addMove(9, 74, [2], 4);
    design.addMove(9, 14, [1], 4);
    design.addMove(9, 110, [3], 5);
    design.addMove(9, 100, [0], 5);
    design.addMove(9, 78, [2], 5);
    design.addMove(9, 18, [1], 5);

    design.addPiece("D32", 10);
    design.addMove(10, 51, [3], 0);
    design.addMove(10, 31, [0], 0);
    design.addMove(10, 86, [2], 0);
    design.addMove(10, 116, [1], 0);
    design.addMove(10, 43, [3], 1);
    design.addMove(10, 23, [0], 1);
    design.addMove(10, 84, [2], 1);
    design.addMove(10, 114, [1], 1);
    design.addMove(10, 47, [3], 2);
    design.addMove(10, 27, [0], 2);
    design.addMove(10, 82, [2], 2);
    design.addMove(10, 112, [1], 2);
    design.addMove(10, 51, [3], 3);
    design.addMove(10, 31, [0], 3);
    design.addMove(10, 86, [2], 3);
    design.addMove(10, 116, [1], 3);
    design.addMove(10, 55, [3], 4);
    design.addMove(10, 35, [0], 4);
    design.addMove(10, 88, [2], 4);
    design.addMove(10, 118, [1], 4);
    design.addMove(10, 59, [3], 5);
    design.addMove(10, 39, [0], 5);
    design.addMove(10, 90, [2], 5);
    design.addMove(10, 120, [1], 5);

    design.addPiece("D35", 11);
    design.addMove(11, 52, [3], 0);
    design.addMove(11, 32, [0], 0);
    design.addMove(11, 85, [2], 0);
    design.addMove(11, 115, [1], 0);
    design.addMove(11, 44, [3], 1);
    design.addMove(11, 24, [0], 1);
    design.addMove(11, 83, [2], 1);
    design.addMove(11, 113, [1], 1);
    design.addMove(11, 48, [3], 2);
    design.addMove(11, 28, [0], 2);
    design.addMove(11, 81, [2], 2);
    design.addMove(11, 111, [1], 2);
    design.addMove(11, 52, [3], 3);
    design.addMove(11, 32, [0], 3);
    design.addMove(11, 85, [2], 3);
    design.addMove(11, 115, [1], 3);
    design.addMove(11, 56, [3], 4);
    design.addMove(11, 36, [0], 4);
    design.addMove(11, 87, [2], 4);
    design.addMove(11, 117, [1], 4);
    design.addMove(11, 60, [3], 5);
    design.addMove(11, 40, [0], 5);
    design.addMove(11, 89, [2], 5);
    design.addMove(11, 119, [1], 5);

    design.addPiece("D36", 12);
    design.addMove(12, 105, [3], 0);
    design.addMove(12, 95, [0], 0);
    design.addMove(12, 69, [2], 0);
    design.addMove(12, 9, [1], 0);
    design.addMove(12, 103, [3], 1);
    design.addMove(12, 93, [0], 1);
    design.addMove(12, 61, [2], 1);
    design.addMove(12, 1, [1], 1);
    design.addMove(12, 101, [3], 2);
    design.addMove(12, 91, [0], 2);
    design.addMove(12, 65, [2], 2);
    design.addMove(12, 5, [1], 2);
    design.addMove(12, 105, [3], 3);
    design.addMove(12, 95, [0], 3);
    design.addMove(12, 69, [2], 3);
    design.addMove(12, 9, [1], 3);
    design.addMove(12, 107, [3], 4);
    design.addMove(12, 97, [0], 4);
    design.addMove(12, 73, [2], 4);
    design.addMove(12, 13, [1], 4);
    design.addMove(12, 109, [3], 5);
    design.addMove(12, 99, [0], 5);
    design.addMove(12, 77, [2], 5);
    design.addMove(12, 17, [1], 5);

    design.addPiece("D41", 13);
    design.addMove(13, 97, [3], 0);
    design.addMove(13, 107, [0], 0);
    design.addMove(13, 14, [2], 0);
    design.addMove(13, 74, [1], 0);
    design.addMove(13, 93, [3], 1);
    design.addMove(13, 103, [0], 1);
    design.addMove(13, 2, [2], 1);
    design.addMove(13, 62, [1], 1);
    design.addMove(13, 91, [3], 2);
    design.addMove(13, 101, [0], 2);
    design.addMove(13, 6, [2], 2);
    design.addMove(13, 66, [1], 2);
    design.addMove(13, 95, [3], 3);
    design.addMove(13, 105, [0], 3);
    design.addMove(13, 10, [2], 3);
    design.addMove(13, 70, [1], 3);
    design.addMove(13, 97, [3], 4);
    design.addMove(13, 107, [0], 4);
    design.addMove(13, 14, [2], 4);
    design.addMove(13, 74, [1], 4);
    design.addMove(13, 99, [3], 5);
    design.addMove(13, 109, [0], 5);
    design.addMove(13, 18, [2], 5);
    design.addMove(13, 78, [1], 5);

    design.addPiece("D42", 14);
    design.addMove(14, 36, [3], 0);
    design.addMove(14, 56, [0], 0);
    design.addMove(14, 118, [2], 0);
    design.addMove(14, 88, [1], 0);
    design.addMove(14, 24, [3], 1);
    design.addMove(14, 44, [0], 1);
    design.addMove(14, 114, [2], 1);
    design.addMove(14, 84, [1], 1);
    design.addMove(14, 28, [3], 2);
    design.addMove(14, 48, [0], 2);
    design.addMove(14, 112, [2], 2);
    design.addMove(14, 82, [1], 2);
    design.addMove(14, 32, [3], 3);
    design.addMove(14, 52, [0], 3);
    design.addMove(14, 116, [2], 3);
    design.addMove(14, 86, [1], 3);
    design.addMove(14, 36, [3], 4);
    design.addMove(14, 56, [0], 4);
    design.addMove(14, 118, [2], 4);
    design.addMove(14, 88, [1], 4);
    design.addMove(14, 40, [3], 5);
    design.addMove(14, 60, [0], 5);
    design.addMove(14, 120, [2], 5);
    design.addMove(14, 90, [1], 5);

    design.addPiece("D45", 15);
    design.addMove(15, 35, [3], 0);
    design.addMove(15, 55, [0], 0);
    design.addMove(15, 117, [2], 0);
    design.addMove(15, 87, [1], 0);
    design.addMove(15, 23, [3], 1);
    design.addMove(15, 43, [0], 1);
    design.addMove(15, 113, [2], 1);
    design.addMove(15, 83, [1], 1);
    design.addMove(15, 27, [3], 2);
    design.addMove(15, 47, [0], 2);
    design.addMove(15, 111, [2], 2);
    design.addMove(15, 81, [1], 2);
    design.addMove(15, 31, [3], 3);
    design.addMove(15, 51, [0], 3);
    design.addMove(15, 115, [2], 3);
    design.addMove(15, 85, [1], 3);
    design.addMove(15, 35, [3], 4);
    design.addMove(15, 55, [0], 4);
    design.addMove(15, 117, [2], 4);
    design.addMove(15, 87, [1], 4);
    design.addMove(15, 39, [3], 5);
    design.addMove(15, 59, [0], 5);
    design.addMove(15, 119, [2], 5);
    design.addMove(15, 89, [1], 5);

    design.addPiece("D46", 16);
    design.addMove(16, 98, [3], 0);
    design.addMove(16, 108, [0], 0);
    design.addMove(16, 13, [2], 0);
    design.addMove(16, 73, [1], 0);
    design.addMove(16, 94, [3], 1);
    design.addMove(16, 104, [0], 1);
    design.addMove(16, 1, [2], 1);
    design.addMove(16, 61, [1], 1);
    design.addMove(16, 92, [3], 2);
    design.addMove(16, 102, [0], 2);
    design.addMove(16, 5, [2], 2);
    design.addMove(16, 65, [1], 2);
    design.addMove(16, 96, [3], 3);
    design.addMove(16, 106, [0], 3);
    design.addMove(16, 9, [2], 3);
    design.addMove(16, 69, [1], 3);
    design.addMove(16, 98, [3], 4);
    design.addMove(16, 108, [0], 4);
    design.addMove(16, 13, [2], 4);
    design.addMove(16, 73, [1], 4);
    design.addMove(16, 100, [3], 5);
    design.addMove(16, 110, [0], 5);
    design.addMove(16, 17, [2], 5);
    design.addMove(16, 77, [1], 5);

    design.addPiece("D51", 17);
    design.addMove(17, 120, [3], 0);
    design.addMove(17, 119, [0], 0);
    design.addMove(17, 58, [2], 0);
    design.addMove(17, 38, [1], 0);
    design.addMove(17, 114, [3], 1);
    design.addMove(17, 113, [0], 1);
    design.addMove(17, 42, [2], 1);
    design.addMove(17, 22, [1], 1);
    design.addMove(17, 112, [3], 2);
    design.addMove(17, 111, [0], 2);
    design.addMove(17, 46, [2], 2);
    design.addMove(17, 26, [1], 2);
    design.addMove(17, 116, [3], 3);
    design.addMove(17, 115, [0], 3);
    design.addMove(17, 50, [2], 3);
    design.addMove(17, 30, [1], 3);
    design.addMove(17, 118, [3], 4);
    design.addMove(17, 117, [0], 4);
    design.addMove(17, 54, [2], 4);
    design.addMove(17, 34, [1], 4);
    design.addMove(17, 120, [3], 5);
    design.addMove(17, 119, [0], 5);
    design.addMove(17, 58, [2], 5);
    design.addMove(17, 38, [1], 5);

    design.addPiece("D53", 18);
    design.addMove(18, 19, [3], 0);
    design.addMove(18, 79, [0], 0);
    design.addMove(18, 100, [2], 0);
    design.addMove(18, 99, [1], 0);
    design.addMove(18, 3, [3], 1);
    design.addMove(18, 63, [0], 1);
    design.addMove(18, 94, [2], 1);
    design.addMove(18, 93, [1], 1);
    design.addMove(18, 7, [3], 2);
    design.addMove(18, 67, [0], 2);
    design.addMove(18, 92, [2], 2);
    design.addMove(18, 91, [1], 2);
    design.addMove(18, 11, [3], 3);
    design.addMove(18, 71, [0], 3);
    design.addMove(18, 96, [2], 3);
    design.addMove(18, 95, [1], 3);
    design.addMove(18, 15, [3], 4);
    design.addMove(18, 75, [0], 4);
    design.addMove(18, 98, [2], 4);
    design.addMove(18, 97, [1], 4);
    design.addMove(18, 19, [3], 5);
    design.addMove(18, 79, [0], 5);
    design.addMove(18, 100, [2], 5);
    design.addMove(18, 99, [1], 5);

    design.addPiece("D54", 19);
    design.addMove(19, 20, [3], 0);
    design.addMove(19, 80, [0], 0);
    design.addMove(19, 110, [2], 0);
    design.addMove(19, 109, [1], 0);
    design.addMove(19, 4, [3], 1);
    design.addMove(19, 64, [0], 1);
    design.addMove(19, 104, [2], 1);
    design.addMove(19, 103, [1], 1);
    design.addMove(19, 8, [3], 2);
    design.addMove(19, 68, [0], 2);
    design.addMove(19, 102, [2], 2);
    design.addMove(19, 101, [1], 2);
    design.addMove(19, 12, [3], 3);
    design.addMove(19, 72, [0], 3);
    design.addMove(19, 106, [2], 3);
    design.addMove(19, 105, [1], 3);
    design.addMove(19, 16, [3], 4);
    design.addMove(19, 76, [0], 4);
    design.addMove(19, 108, [2], 4);
    design.addMove(19, 107, [1], 4);
    design.addMove(19, 20, [3], 5);
    design.addMove(19, 80, [0], 5);
    design.addMove(19, 110, [2], 5);
    design.addMove(19, 109, [1], 5);

    design.addPiece("D56", 20);
    design.addMove(20, 90, [3], 0);
    design.addMove(20, 89, [0], 0);
    design.addMove(20, 57, [2], 0);
    design.addMove(20, 37, [1], 0);
    design.addMove(20, 84, [3], 1);
    design.addMove(20, 83, [0], 1);
    design.addMove(20, 41, [2], 1);
    design.addMove(20, 21, [1], 1);
    design.addMove(20, 82, [3], 2);
    design.addMove(20, 81, [0], 2);
    design.addMove(20, 45, [2], 2);
    design.addMove(20, 25, [1], 2);
    design.addMove(20, 86, [3], 3);
    design.addMove(20, 85, [0], 3);
    design.addMove(20, 49, [2], 3);
    design.addMove(20, 29, [1], 3);
    design.addMove(20, 88, [3], 4);
    design.addMove(20, 87, [0], 4);
    design.addMove(20, 53, [2], 4);
    design.addMove(20, 33, [1], 4);
    design.addMove(20, 90, [3], 5);
    design.addMove(20, 89, [0], 5);
    design.addMove(20, 57, [2], 5);
    design.addMove(20, 37, [1], 5);

    design.addPiece("D62", 21);
    design.addMove(21, 121, [3], 0);
    design.addMove(21, 122, [0], 0);
    design.addMove(21, 123, [2], 0);
    design.addMove(21, 124, [1], 0);
    design.addMove(21, 62, [3], 1);
    design.addMove(21, 61, [0], 1);
    design.addMove(21, 4, [2], 1);
    design.addMove(21, 3, [1], 1);
    design.addMove(21, 66, [3], 2);
    design.addMove(21, 65, [0], 2);
    design.addMove(21, 8, [2], 2);
    design.addMove(21, 7, [1], 2);
    design.addMove(21, 70, [3], 3);
    design.addMove(21, 69, [0], 3);
    design.addMove(21, 12, [2], 3);
    design.addMove(21, 11, [1], 3);
    design.addMove(21, 74, [3], 4);
    design.addMove(21, 73, [0], 4);
    design.addMove(21, 16, [2], 4);
    design.addMove(21, 15, [1], 4);

    design.addPiece("D63", 22);
    design.addMove(22, 125, [3], 0);
    design.addMove(22, 126, [0], 0);
    design.addMove(22, 127, [2], 0);
    design.addMove(22, 128, [1], 0);
    design.addMove(22, 42, [3], 1);
    design.addMove(22, 41, [0], 1);
    design.addMove(22, 24, [2], 1);
    design.addMove(22, 23, [1], 1);
    design.addMove(22, 46, [3], 2);
    design.addMove(22, 45, [0], 2);
    design.addMove(22, 28, [2], 2);
    design.addMove(22, 27, [1], 2);
    design.addMove(22, 50, [3], 3);
    design.addMove(22, 49, [0], 3);
    design.addMove(22, 32, [2], 3);
    design.addMove(22, 31, [1], 3);
    design.addMove(22, 54, [3], 4);
    design.addMove(22, 53, [0], 4);
    design.addMove(22, 36, [2], 4);
    design.addMove(22, 35, [1], 4);

    design.addPiece("D64", 23);
    design.addMove(23, 129, [3], 0);
    design.addMove(23, 130, [0], 0);
    design.addMove(23, 131, [2], 0);
    design.addMove(23, 132, [1], 0);
    design.addMove(23, 22, [3], 1);
    design.addMove(23, 21, [0], 1);
    design.addMove(23, 44, [2], 1);
    design.addMove(23, 43, [1], 1);
    design.addMove(23, 26, [3], 2);
    design.addMove(23, 25, [0], 2);
    design.addMove(23, 48, [2], 2);
    design.addMove(23, 47, [1], 2);
    design.addMove(23, 30, [3], 3);
    design.addMove(23, 29, [0], 3);
    design.addMove(23, 52, [2], 3);
    design.addMove(23, 51, [1], 3);
    design.addMove(23, 34, [3], 4);
    design.addMove(23, 33, [0], 4);
    design.addMove(23, 56, [2], 4);
    design.addMove(23, 55, [1], 4);

    design.addPiece("D65", 24);
    design.addMove(24, 133, [3], 0);
    design.addMove(24, 134, [0], 0);
    design.addMove(24, 135, [2], 0);
    design.addMove(24, 136, [1], 0);
    design.addMove(24, 2, [3], 1);
    design.addMove(24, 1, [0], 1);
    design.addMove(24, 64, [2], 1);
    design.addMove(24, 63, [1], 1);
    design.addMove(24, 6, [3], 2);
    design.addMove(24, 5, [0], 2);
    design.addMove(24, 68, [2], 2);
    design.addMove(24, 67, [1], 2);
    design.addMove(24, 10, [3], 3);
    design.addMove(24, 9, [0], 3);
    design.addMove(24, 72, [2], 3);
    design.addMove(24, 71, [1], 3);
    design.addMove(24, 14, [3], 4);
    design.addMove(24, 13, [0], 4);
    design.addMove(24, 76, [2], 4);
    design.addMove(24, 75, [1], 4);

    design.setup("Red", "King", 67);
    design.setup("White", "King", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedKing", "Red King");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("RedD12", "Red D12");
    view.defPiece("WhiteD12", "White D12");
    view.defPiece("RedD13", "Red D13");
    view.defPiece("WhiteD13", "White D13");
    view.defPiece("RedD14", "Red D14");
    view.defPiece("WhiteD14", "White D14");
    view.defPiece("RedD15", "Red D15");
    view.defPiece("WhiteD15", "White D15");
    view.defPiece("RedD21", "Red D21");
    view.defPiece("WhiteD21", "White D21");
    view.defPiece("RedD23", "Red D23");
    view.defPiece("WhiteD23", "White D23");
    view.defPiece("RedD24", "Red D24");
    view.defPiece("WhiteD24", "White D24");
    view.defPiece("RedD26", "Red D26");
    view.defPiece("WhiteD26", "White D26");
    view.defPiece("RedD31", "Red D31");
    view.defPiece("WhiteD31", "White D31");
    view.defPiece("RedD32", "Red D32");
    view.defPiece("WhiteD32", "White D32");
    view.defPiece("RedD35", "Red D35");
    view.defPiece("WhiteD35", "White D35");
    view.defPiece("RedD36", "Red D36");
    view.defPiece("WhiteD36", "White D36");
    view.defPiece("RedD41", "Red D41");
    view.defPiece("WhiteD41", "White D41");
    view.defPiece("RedD42", "Red D42");
    view.defPiece("WhiteD42", "White D42");
    view.defPiece("RedD45", "Red D45");
    view.defPiece("WhiteD45", "White D45");
    view.defPiece("RedD46", "Red D46");
    view.defPiece("WhiteD46", "White D46");
    view.defPiece("RedD51", "Red D51");
    view.defPiece("WhiteD51", "White D51");
    view.defPiece("RedD53", "Red D53");
    view.defPiece("WhiteD53", "White D53");
    view.defPiece("RedD54", "Red D54");
    view.defPiece("WhiteD54", "White D54");
    view.defPiece("RedD56", "Red D56");
    view.defPiece("WhiteD56", "White D56");
    view.defPiece("RedD62", "Red D62");
    view.defPiece("WhiteD62", "White D62");
    view.defPiece("RedD63", "Red D63");
    view.defPiece("WhiteD63", "White D63");
    view.defPiece("RedD64", "Red D64");
    view.defPiece("WhiteD64", "White D64");
    view.defPiece("RedD65", "Red D65");
    view.defPiece("WhiteD65", "White D65");

    view.defPiece("RedKH",  "Red King Hint");
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

    view.defPiece("WhiteKH",  "White King Hint");
    view.defPiece("WhiteD12H", "White D12 Hint");
    view.defPiece("WhiteD13H", "White D13 Hint");
    view.defPiece("WhiteD14H", "White D14 Hint");
    view.defPiece("WhiteD15H", "White D15 Hint");
    view.defPiece("WhiteD21H", "White D21 Hint");
    view.defPiece("WhiteD23H", "White D23 Hint");
    view.defPiece("WhiteD24H", "White D24 Hint");
    view.defPiece("WhiteD26H", "White D26 Hint");
    view.defPiece("WhiteD31H", "White D31 Hint");
    view.defPiece("WhiteD32H", "White D32 Hint");
    view.defPiece("WhiteD35H", "White D35 Hint");
    view.defPiece("WhiteD36H", "White D36 Hint");
    view.defPiece("WhiteD41H", "White D41 Hint");
    view.defPiece("WhiteD42H", "White D42 Hint");
    view.defPiece("WhiteD45H", "White D45 Hint");
    view.defPiece("WhiteD46H", "White D46 Hint");
    view.defPiece("WhiteD51H", "White D51 Hint");
    view.defPiece("WhiteD53H", "White D53 Hint");
    view.defPiece("WhiteD54H", "White D54 Hint");
    view.defPiece("WhiteD56H", "White D56 Hint");
    view.defPiece("WhiteD62H", "White D62 Hint");
    view.defPiece("WhiteD63H", "White D63 Hint");
    view.defPiece("WhiteD64H", "White D64 Hint");
    view.defPiece("WhiteD65H", "White D65 Hint");
 
    view.defPosition("a8", 6, 7, 38, 38);
    view.defPosition("b8", 44, 7, 38, 38);
    view.defPosition("c8", 82, 7, 38, 38);
    view.defPosition("d8", 120, 7, 38, 38);
    view.defPosition("e8", 158, 7, 38, 38);
    view.defPosition("f8", 196, 7, 38, 38);
    view.defPosition("g8", 234, 7, 38, 38);
    view.defPosition("h8", 272, 7, 38, 38);
    view.defPosition("i8", 310, 7, 38, 38);
    view.defPosition("a7", 6, 45, 38, 38);
    view.defPosition("b7", 44, 45, 38, 38);
    view.defPosition("c7", 82, 45, 38, 38);
    view.defPosition("d7", 120, 45, 38, 38);
    view.defPosition("e7", 158, 45, 38, 38);
    view.defPosition("f7", 196, 45, 38, 38);
    view.defPosition("g7", 234, 45, 38, 38);
    view.defPosition("h7", 272, 45, 38, 38);
    view.defPosition("i7", 310, 45, 38, 38);
    view.defPosition("a6", 6, 83, 38, 38);
    view.defPosition("b6", 44, 83, 38, 38);
    view.defPosition("c6", 82, 83, 38, 38);
    view.defPosition("d6", 120, 83, 38, 38);
    view.defPosition("e6", 158, 83, 38, 38);
    view.defPosition("f6", 196, 83, 38, 38);
    view.defPosition("g6", 234, 83, 38, 38);
    view.defPosition("h6", 272, 83, 38, 38);
    view.defPosition("i6", 310, 83, 38, 38);
    view.defPosition("a5", 6, 121, 38, 38);
    view.defPosition("b5", 44, 121, 38, 38);
    view.defPosition("c5", 82, 121, 38, 38);
    view.defPosition("d5", 120, 121, 38, 38);
    view.defPosition("e5", 158, 121, 38, 38);
    view.defPosition("f5", 196, 121, 38, 38);
    view.defPosition("g5", 234, 121, 38, 38);
    view.defPosition("h5", 272, 121, 38, 38);
    view.defPosition("i5", 310, 121, 38, 38);
    view.defPosition("a4", 6, 159, 38, 38);
    view.defPosition("b4", 44, 159, 38, 38);
    view.defPosition("c4", 82, 159, 38, 38);
    view.defPosition("d4", 120, 159, 38, 38);
    view.defPosition("e4", 158, 159, 38, 38);
    view.defPosition("f4", 196, 159, 38, 38);
    view.defPosition("g4", 234, 159, 38, 38);
    view.defPosition("h4", 272, 159, 38, 38);
    view.defPosition("i4", 310, 159, 38, 38);
    view.defPosition("a3", 6, 197, 38, 38);
    view.defPosition("b3", 44, 197, 38, 38);
    view.defPosition("c3", 82, 197, 38, 38);
    view.defPosition("d3", 120, 197, 38, 38);
    view.defPosition("e3", 158, 197, 38, 38);
    view.defPosition("f3", 196, 197, 38, 38);
    view.defPosition("g3", 234, 197, 38, 38);
    view.defPosition("h3", 272, 197, 38, 38);
    view.defPosition("i3", 310, 197, 38, 38);
    view.defPosition("a2", 6, 235, 38, 38);
    view.defPosition("b2", 44, 235, 38, 38);
    view.defPosition("c2", 82, 235, 38, 38);
    view.defPosition("d2", 120, 235, 38, 38);
    view.defPosition("e2", 158, 235, 38, 38);
    view.defPosition("f2", 196, 235, 38, 38);
    view.defPosition("g2", 234, 235, 38, 38);
    view.defPosition("h2", 272, 235, 38, 38);
    view.defPosition("i2", 310, 235, 38, 38);
    view.defPosition("a1", 6, 273, 38, 38);
    view.defPosition("b1", 44, 273, 38, 38);
    view.defPosition("c1", 82, 273, 38, 38);
    view.defPosition("d1", 120, 273, 38, 38);
    view.defPosition("e1", 158, 273, 38, 38);
    view.defPosition("f1", 196, 273, 38, 38);
    view.defPosition("g1", 234, 273, 38, 38);
    view.defPosition("h1", 272, 273, 38, 38);
    view.defPosition("i1", 310, 273, 38, 38);
    view.defPosition("X1", 357, 72, 99, 132);
}
