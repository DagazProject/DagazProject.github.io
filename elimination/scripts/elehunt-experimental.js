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
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("elehunt-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("unw");
    design.addDirection("usw");
    design.addDirection("une");
    design.addDirection("use");
    design.addDirection("down");

    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5, 12, 12, 12, 12, 12]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

    design.addPosition("a0", [0, 1, 10, 0, 0, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i0", [-1, 1, 10, 0, 0, 11, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j0", [-1, 0, 10, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 89]);
    design.addPosition("c9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 88]);
    design.addPosition("d9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 88]);
    design.addPosition("e9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 87]);
    design.addPosition("f9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 87]);
    design.addPosition("g9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 86]);
    design.addPosition("h9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 86]);
    design.addPosition("i9", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 85]);
    design.addPosition("j9", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 79]);
    design.addPosition("c8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 78]);
    design.addPosition("d8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 78]);
    design.addPosition("e8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 77]);
    design.addPosition("f8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 77]);
    design.addPosition("g8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 76]);
    design.addPosition("h8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 76]);
    design.addPosition("i8", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 75]);
    design.addPosition("j8", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 73]);
    design.addPosition("c7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 72]);
    design.addPosition("d7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 72]);
    design.addPosition("e7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 71]);
    design.addPosition("f7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 71]);
    design.addPosition("g7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 70]);
    design.addPosition("h7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 70]);
    design.addPosition("i7", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 69]);
    design.addPosition("j7", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 63]);
    design.addPosition("c6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 62]);
    design.addPosition("d6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 62]);
    design.addPosition("e6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 61]);
    design.addPosition("f6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 61]);
    design.addPosition("g6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 60]);
    design.addPosition("h6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 60]);
    design.addPosition("i6", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 59]);
    design.addPosition("j6", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 57]);
    design.addPosition("c5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 56]);
    design.addPosition("d5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 56]);
    design.addPosition("e5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 55]);
    design.addPosition("f5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 55]);
    design.addPosition("g5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 54]);
    design.addPosition("h5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 54]);
    design.addPosition("i5", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 53]);
    design.addPosition("j5", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 47]);
    design.addPosition("c4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 46]);
    design.addPosition("d4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 46]);
    design.addPosition("e4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 45]);
    design.addPosition("f4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 45]);
    design.addPosition("g4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 44]);
    design.addPosition("h4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 44]);
    design.addPosition("i4", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 43]);
    design.addPosition("j4", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 41]);
    design.addPosition("c3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 40]);
    design.addPosition("d3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 40]);
    design.addPosition("e3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 39]);
    design.addPosition("f3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 39]);
    design.addPosition("g3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 38]);
    design.addPosition("h3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 38]);
    design.addPosition("i3", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 37]);
    design.addPosition("j3", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 10, -9, -10, 11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 31]);
    design.addPosition("c2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 30]);
    design.addPosition("d2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 30]);
    design.addPosition("e2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 29]);
    design.addPosition("f2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 29]);
    design.addPosition("g2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 28]);
    design.addPosition("h2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 28]);
    design.addPosition("i2", [-1, 1, 10, -9, -10, 11, 9, -11, 0, 0, 0, 0, 27]);
    design.addPosition("j2", [-1, 0, 10, 0, -10, 0, 9, -11, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -9, -10, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [-1, 1, 0, -9, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("j1", [-1, 0, 0, 0, -10, 0, 0, -11, 0, 0, 0, 0, 0]);
    design.addPosition("ad", [0, 1, 4, 0, 0, 0, 0, 0, -89, -79, -88, -78, 0]);
    design.addPosition("bd", [-1, 1, 4, 0, 0, 0, 0, 0, -88, -78, -87, -77, 0]);
    design.addPosition("cd", [-1, 1, 4, 0, 0, 0, 0, 0, -87, -77, -86, -76, 0]);
    design.addPosition("dd", [-1, 0, 4, 0, 0, 0, 0, 0, -86, -76, -85, -75, 0]);
    design.addPosition("ac", [0, 1, 4, 0, -4, 0, 0, 0, -73, -63, -72, -62, 0]);
    design.addPosition("bc", [-1, 1, 4, 0, -4, 0, 0, 0, -72, -62, -71, -61, 0]);
    design.addPosition("cc", [-1, 1, 4, 0, -4, 0, 0, 0, -71, -61, -70, -60, 0]);
    design.addPosition("dc", [-1, 0, 4, 0, -4, 0, 0, 0, -70, -60, -69, -59, 0]);
    design.addPosition("ab", [0, 1, 4, 0, -4, 0, 0, 0, -57, -47, -56, -46, 0]);
    design.addPosition("bb", [-1, 1, 4, 0, -4, 0, 0, 0, -56, -46, -55, -45, 0]);
    design.addPosition("cb", [-1, 1, 4, 0, -4, 0, 0, 0, -55, -45, -54, -44, 0]);
    design.addPosition("db", [-1, 0, 4, 0, -4, 0, 0, 0, -54, -44, -53, -43, 0]);
    design.addPosition("aa", [0, 1, 0, 0, -4, 0, 0, 0, -41, -31, -40, -30, 0]);
    design.addPosition("ba", [-1, 1, 0, 0, -4, 0, 0, 0, -40, -30, -39, -29, 0]);
    design.addPosition("ca", [-1, 1, 0, 0, -4, 0, 0, 0, -39, -29, -38, -28, 0]);
    design.addPosition("da", [-1, 0, 0, 0, -4, 0, 0, 0, -38, -28, -37, -27, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.ON_BOARD_DIR,	12);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	12);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	12);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pygmy", 0);
    design.addMove(0, 0, [4, 3, 12], 0);
    design.addMove(0, 0, [4, 7, 12], 0);
    design.addMove(0, 0, [2, 5, 12], 0);
    design.addMove(0, 0, [2, 6, 12], 0);
    design.addMove(0, 0, [1, 3, 12], 0);
    design.addMove(0, 0, [1, 5, 12], 0);
    design.addMove(0, 0, [0, 7, 12], 0);
    design.addMove(0, 0, [0, 6, 12], 0);

    design.addPiece("Shaman", 1);
    design.addMove(1, 1, [4, 12, 4, 12], 0);
    design.addMove(1, 1, [7, 12, 7, 12], 0);
    design.addMove(1, 1, [2, 12, 2, 12], 0);
    design.addMove(1, 1, [5, 12, 5, 12], 0);
    design.addMove(1, 1, [1, 12, 1, 12], 0);
    design.addMove(1, 1, [3, 12, 3, 12], 0);
    design.addMove(1, 1, [0, 12, 0, 12], 0);
    design.addMove(1, 1, [6, 12, 6, 12], 0);

    design.addPiece("Elephant", 2);
    design.addMove(2, 2, [4], 0);
    design.addMove(2, 2, [2], 0);
    design.addMove(2, 2, [1], 0);
    design.addMove(2, 2, [0], 0);

    design.setup("Black", "Shaman", 90);
    design.setup("Black", "Pygmy", 10);
    design.setup("Black", "Pygmy", 30);
    design.setup("Black", "Pygmy", 50);
    design.setup("Black", "Pygmy", 70);
    design.setup("Black", "Pygmy", 92);
    design.setup("Black", "Pygmy", 94);
    design.setup("Black", "Pygmy", 96);
    design.setup("Black", "Pygmy", 98);
    design.setup("White", "Elephant", 103);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackPygmy", "Black Pygmy");
    view.defPiece("BlackShaman", "Black Shaman");
    view.defPiece("WhiteElephant", "White Elephant");
 
    view.defPosition("a0", 8, 8, 40, 40);
    view.defPosition("b0", 53, 8, 40, 40);
    view.defPosition("c0", 98, 8, 40, 40);
    view.defPosition("d0", 143, 8, 40, 40);
    view.defPosition("e0", 188, 8, 40, 40);
    view.defPosition("f0", 233, 8, 40, 40);
    view.defPosition("g0", 278, 8, 40, 40);
    view.defPosition("h0", 323, 8, 40, 40);
    view.defPosition("i0", 368, 8, 40, 40);
    view.defPosition("j0", 413, 8, 40, 40);
    view.defPosition("a9", 8, 53, 40, 40);
    view.defPosition("b9", 53, 53, 40, 40);
    view.defPosition("c9", 98, 53, 40, 40);
    view.defPosition("d9", 143, 53, 40, 40);
    view.defPosition("e9", 188, 53, 40, 40);
    view.defPosition("f9", 233, 53, 40, 40);
    view.defPosition("g9", 278, 53, 40, 40);
    view.defPosition("h9", 323, 53, 40, 40);
    view.defPosition("i9", 368, 53, 40, 40);
    view.defPosition("j9", 413, 53, 40, 40);
    view.defPosition("a8", 8, 98, 40, 40);
    view.defPosition("b8", 53, 98, 40, 40);
    view.defPosition("c8", 98, 98, 40, 40);
    view.defPosition("d8", 143, 98, 40, 40);
    view.defPosition("e8", 188, 98, 40, 40);
    view.defPosition("f8", 233, 98, 40, 40);
    view.defPosition("g8", 278, 98, 40, 40);
    view.defPosition("h8", 323, 98, 40, 40);
    view.defPosition("i8", 368, 98, 40, 40);
    view.defPosition("j8", 413, 98, 40, 40);
    view.defPosition("a7", 8, 143, 40, 40);
    view.defPosition("b7", 53, 143, 40, 40);
    view.defPosition("c7", 98, 143, 40, 40);
    view.defPosition("d7", 143, 143, 40, 40);
    view.defPosition("e7", 188, 143, 40, 40);
    view.defPosition("f7", 233, 143, 40, 40);
    view.defPosition("g7", 278, 143, 40, 40);
    view.defPosition("h7", 323, 143, 40, 40);
    view.defPosition("i7", 368, 143, 40, 40);
    view.defPosition("j7", 413, 143, 40, 40);
    view.defPosition("a6", 8, 188, 40, 40);
    view.defPosition("b6", 53, 188, 40, 40);
    view.defPosition("c6", 98, 188, 40, 40);
    view.defPosition("d6", 143, 188, 40, 40);
    view.defPosition("e6", 188, 188, 40, 40);
    view.defPosition("f6", 233, 188, 40, 40);
    view.defPosition("g6", 278, 188, 40, 40);
    view.defPosition("h6", 323, 188, 40, 40);
    view.defPosition("i6", 368, 188, 40, 40);
    view.defPosition("j6", 413, 188, 40, 40);
    view.defPosition("a5", 8, 233, 40, 40);
    view.defPosition("b5", 53, 233, 40, 40);
    view.defPosition("c5", 98, 233, 40, 40);
    view.defPosition("d5", 143, 233, 40, 40);
    view.defPosition("e5", 188, 233, 40, 40);
    view.defPosition("f5", 233, 233, 40, 40);
    view.defPosition("g5", 278, 233, 40, 40);
    view.defPosition("h5", 323, 233, 40, 40);
    view.defPosition("i5", 368, 233, 40, 40);
    view.defPosition("j5", 413, 233, 40, 40);
    view.defPosition("a4", 8, 278, 40, 40);
    view.defPosition("b4", 53, 278, 40, 40);
    view.defPosition("c4", 98, 278, 40, 40);
    view.defPosition("d4", 143, 278, 40, 40);
    view.defPosition("e4", 188, 278, 40, 40);
    view.defPosition("f4", 233, 278, 40, 40);
    view.defPosition("g4", 278, 278, 40, 40);
    view.defPosition("h4", 323, 278, 40, 40);
    view.defPosition("i4", 368, 278, 40, 40);
    view.defPosition("j4", 413, 278, 40, 40);
    view.defPosition("a3", 8, 323, 40, 40);
    view.defPosition("b3", 53, 323, 40, 40);
    view.defPosition("c3", 98, 323, 40, 40);
    view.defPosition("d3", 143, 323, 40, 40);
    view.defPosition("e3", 188, 323, 40, 40);
    view.defPosition("f3", 233, 323, 40, 40);
    view.defPosition("g3", 278, 323, 40, 40);
    view.defPosition("h3", 323, 323, 40, 40);
    view.defPosition("i3", 368, 323, 40, 40);
    view.defPosition("j3", 413, 323, 40, 40);
    view.defPosition("a2", 8, 368, 40, 40);
    view.defPosition("b2", 53, 368, 40, 40);
    view.defPosition("c2", 98, 368, 40, 40);
    view.defPosition("d2", 143, 368, 40, 40);
    view.defPosition("e2", 188, 368, 40, 40);
    view.defPosition("f2", 233, 368, 40, 40);
    view.defPosition("g2", 278, 368, 40, 40);
    view.defPosition("h2", 323, 368, 40, 40);
    view.defPosition("i2", 368, 368, 40, 40);
    view.defPosition("j2", 413, 368, 40, 40);
    view.defPosition("a1", 8, 413, 40, 40);
    view.defPosition("b1", 53, 413, 40, 40);
    view.defPosition("c1", 98, 413, 40, 40);
    view.defPosition("d1", 143, 413, 40, 40);
    view.defPosition("e1", 188, 413, 40, 40);
    view.defPosition("f1", 233, 413, 40, 40);
    view.defPosition("g1", 278, 413, 40, 40);
    view.defPosition("h1", 323, 413, 40, 40);
    view.defPosition("i1", 368, 413, 40, 40);
    view.defPosition("j1", 413, 413, 40, 40);
    view.defPosition("ad", 51, 51, 90, 90);
    view.defPosition("bd", 141, 51, 90, 90);
    view.defPosition("cd", 231, 51, 90, 90);
    view.defPosition("dd", 321, 51, 90, 90);
    view.defPosition("ac", 51, 141, 90, 90);
    view.defPosition("bc", 141, 141, 90, 90);
    view.defPosition("cc", 231, 141, 90, 90);
    view.defPosition("dc", 321, 141, 90, 90);
    view.defPosition("ab", 51, 231, 90, 90);
    view.defPosition("bb", 141, 231, 90, 90);
    view.defPosition("cb", 231, 231, 90, 90);
    view.defPosition("db", 321, 231, 90, 90);
    view.defPosition("aa", 51, 321, 90, 90);
    view.defPosition("ba", 141, 321, 90, 90);
    view.defPosition("ca", 231, 321, 90, 90);
    view.defPosition("da", 321, 321, 90, 90);
}
