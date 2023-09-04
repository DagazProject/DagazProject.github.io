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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("up");         // 0
    design.addDirection("down");       // 1
    design.addDirection("next");       // 2
    design.addDirection("next-black"); // 3

    design.addPlayer("White", [1, 0, 2, 3]);
    design.addPlayer("Black", [0, 1, 3, 2]);
    design.addRandom(1, [0]);
    design.addRandom(1, [0]);
    design.addRandom(1, [0]);
    design.addRandom(1, [0]);
    design.addTurn(1, [1, 2, 3, 4, 5]);
    design.addRandom(2, [0]);
    design.addRandom(2, [0]);
    design.addRandom(2, [0]);
    design.addRandom(2, [0]);
    design.addTurn(2, [1, 2, 3, 4, 5]);

    design.addPosition("x1", [0, 0, 0, 0]);
    design.addPosition("x2", [0, 0, 0, 0]);
    design.addPosition("x3", [0, 0, 0, 0]);
    design.addPosition("x4", [0, 0, 0, 0]);
    design.addPosition("a11", [1, 0, 0, 10]);
    design.addPosition("b11", [1, -1, 0, 9]);
    design.addPosition("c11", [1, -1, 0, 8]);
    design.addPosition("d11", [1, -1, 0, 7]);
    design.addPosition("e11", [0, -1, 0, 6]);
    design.addPosition("a1", [1, 0, 13, 0]);
    design.addPosition("b1", [1, -1, 12, 0]);
    design.addPosition("c1", [1, -1, 11, 0]);
    design.addPosition("d1", [1, -1, 10, 0]);
    design.addPosition("e1", [0, -1, 9, 0]);
    design.addPosition("a10", [9, 0, -5, 1]);
    design.addPosition("a9", [9, 0, -1, 1]);
    design.addPosition("a8", [9, 0, -1, 1]);
    design.addPosition("a7", [9, 0, -1, 1]);
    design.addPosition("a6", [9, 0, -1, 1]);
    design.addPosition("a5", [9, 0, -1, 1]);
    design.addPosition("a4", [9, 0, -1, 1]);
    design.addPosition("a3", [9, 0, -1, 1]);
    design.addPosition("a2", [9, 0, -1, -18]);
    design.addPosition("b10", [9, -9, -14, -8]);
    design.addPosition("b9", [9, -9, -10, -8]);
    design.addPosition("b8", [9, -9, -10, -8]);
    design.addPosition("b7", [9, -9, -10, -8]);
    design.addPosition("b6", [9, -9, -10, -8]);
    design.addPosition("b5", [9, -9, -10, -8]);
    design.addPosition("b4", [9, -9, -10, -8]);
    design.addPosition("b3", [9, -9, -10, -8]);
    design.addPosition("b2", [9, -9, -10, -27]);
    design.addPosition("c10", [9, -9, -23, -17]);
    design.addPosition("c9", [9, -9, -19, -17]);
    design.addPosition("c8", [9, -9, -19, -17]);
    design.addPosition("c7", [9, -9, -19, -17]);
    design.addPosition("c6", [9, -9, -19, -17]);
    design.addPosition("c5", [9, -9, -19, -17]);
    design.addPosition("c4", [9, -9, -19, -17]);
    design.addPosition("c3", [9, -9, -19, -17]);
    design.addPosition("c2", [9, -9, -19, -36]);
    design.addPosition("d10", [9, -9, -32, -26]);
    design.addPosition("d9", [9, -9, -28, -26]);
    design.addPosition("d8", [9, -9, -28, -26]);
    design.addPosition("d7", [9, -9, -28, -26]);
    design.addPosition("d6", [9, -9, -28, -26]);
    design.addPosition("d5", [9, -9, -28, -26]);
    design.addPosition("d4", [9, -9, -28, -26]);
    design.addPosition("d3", [9, -9, -28, -26]);
    design.addPosition("d2", [9, -9, -28, -45]);
    design.addPosition("e10", [9, -9, -41, -35]);
    design.addPosition("e9", [9, -9, -37, -35]);
    design.addPosition("e8", [9, -9, -37, -35]);
    design.addPosition("e7", [9, -9, -37, -35]);
    design.addPosition("e6", [9, -9, -37, -35]);
    design.addPosition("e5", [9, -9, -37, -35]);
    design.addPosition("e4", [9, -9, -37, -35]);
    design.addPosition("e3", [9, -9, -37, -35]);
    design.addPosition("e2", [9, -9, -37, -54]);
    design.addPosition("f10", [9, -9, -50, -44]);
    design.addPosition("f9", [9, -9, -46, -44]);
    design.addPosition("f8", [9, -9, -46, -44]);
    design.addPosition("f7", [9, -9, -46, -44]);
    design.addPosition("f6", [9, -9, -46, -44]);
    design.addPosition("f5", [9, -9, -46, -44]);
    design.addPosition("f4", [9, -9, -46, -44]);
    design.addPosition("f3", [9, -9, -46, -44]);
    design.addPosition("f2", [9, -9, -46, -63]);
    design.addPosition("g10", [9, -9, -59, -53]);
    design.addPosition("g9", [9, -9, -55, -53]);
    design.addPosition("g8", [9, -9, -55, -53]);
    design.addPosition("g7", [9, -9, -55, -53]);
    design.addPosition("g6", [9, -9, -55, -53]);
    design.addPosition("g5", [9, -9, -55, -53]);
    design.addPosition("g4", [9, -9, -55, -53]);
    design.addPosition("g3", [9, -9, -55, -53]);
    design.addPosition("g2", [9, -9, -55, -72]);
    design.addPosition("h10", [9, -9, -68, -62]);
    design.addPosition("h9", [9, -9, -64, -62]);
    design.addPosition("h8", [9, -9, -64, -62]);
    design.addPosition("h7", [9, -9, -64, -62]);
    design.addPosition("h6", [9, -9, -64, -62]);
    design.addPosition("h5", [9, -9, -64, -62]);
    design.addPosition("h4", [9, -9, -64, -62]);
    design.addPosition("h3", [9, -9, -64, -62]);
    design.addPosition("h2", [9, -9, -64, -81]);
    design.addPosition("i10", [9, -9, -77, -71]);
    design.addPosition("i9", [9, -9, -73, -71]);
    design.addPosition("i8", [9, -9, -73, -71]);
    design.addPosition("i7", [9, -9, -73, -71]);
    design.addPosition("i6", [9, -9, -73, -71]);
    design.addPosition("i5", [9, -9, -73, -71]);
    design.addPosition("i4", [9, -9, -73, -71]);
    design.addPosition("i3", [9, -9, -73, -71]);
    design.addPosition("i2", [9, -9, -73, -90]);
    design.addPosition("j10", [0, -9, -86, -80]);
    design.addPosition("j9", [0, -9, -82, -80]);
    design.addPosition("j8", [0, -9, -82, -80]);
    design.addPosition("j7", [0, -9, -82, -80]);
    design.addPosition("j6", [0, -9, -82, -80]);
    design.addPosition("j5", [0, -9, -82, -80]);
    design.addPosition("j4", [0, -9, -82, -80]);
    design.addPosition("j3", [0, -9, -82, -80]);
    design.addPosition("j2", [0, -9, -82, -99]);

    design.addZone("dice", 1, [0, 1, 2, 3]);
    design.addZone("dice", 2, [0, 1, 2, 3]);
    design.addZone("home", 1, [9, 10, 11, 12, 13]);
    design.addZone("home", 2, [4, 5, 6, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-4);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.IN_ZONE,	1);	// home
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-4);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.IN_ZONE,	1);	// home
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.IN_ZONE,	1);	// home
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-4);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.IN_ZONE,	1);	// home
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.IN_ZONE,	1);	// home
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.IN_ZONE,	1);	// home
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-4);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.IN_ZONE,	1);	// home
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.IN_ZONE,	1);	// home
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.IN_ZONE,	1);	// home
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.IN_ZONE,	1);	// home
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-4);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.IN_ZONE,	0);	// dice
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("W", 0);
    design.addDrop(0, 5, [], 0, 10);

    design.addPiece("B", 1);
    design.addDrop(1, 5, [], 0, 10);

    design.addPiece("Man", 2);
    design.addMove(2, 0, [2, 0], 1, 1);
    design.addMove(2, 1, [2, 0], 2, 1);
    design.addMove(2, 2, [2, 0], 3, 1);
    design.addMove(2, 3, [2, 0], 4, 1);
    design.addMove(2, 4, [2, 0], 5, 1);

    design.setup("White", "Man", 9);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 11);
    design.setup("White", "Man", 12);
    design.setup("White", "Man", 13);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteW", "White W");
    view.defPiece("BlackW", "Black W");
    view.defPiece("WhiteB", "White B");
    view.defPiece("BlackB", "Black B");
 
    view.defPosition("x1", 214, 105, 13, 345);
    view.defPosition("x2", 232, 105, 13, 345);
    view.defPosition("x3", 250, 105, 13, 345);
    view.defPosition("x4", 268, 105, 13, 345);
    view.defPosition("a11", 0, 0, 50, 50);
    view.defPosition("b11", 38, 0, 50, 50);
    view.defPosition("c11", 76, 0, 50, 50);
    view.defPosition("d11", 114, 0, 50, 50);
    view.defPosition("e11", 152, 0, 50, 50);
    view.defPosition("a1", 0, 510, 50, 50);
    view.defPosition("b1", 38, 510, 50, 50);
    view.defPosition("c1", 76, 510, 50, 50);
    view.defPosition("d1", 114, 510, 50, 50);
    view.defPosition("e1", 152, 510, 50, 50);
    view.defPosition("a10", 13, 54, 24, 51);
    view.defPosition("a9", 13, 104, 24, 51);
    view.defPosition("a8", 13, 154, 24, 51);
    view.defPosition("a7", 13, 204, 24, 51);
    view.defPosition("a6", 13, 254, 24, 51);
    view.defPosition("a5", 13, 304, 24, 51);
    view.defPosition("a4", 13, 354, 24, 51);
    view.defPosition("a3", 13, 404, 24, 51);
    view.defPosition("a2", 13, 454, 24, 51);
    view.defPosition("b10", 28, 54, 24, 51);
    view.defPosition("b9", 28, 104, 24, 51);
    view.defPosition("b8", 28, 154, 24, 51);
    view.defPosition("b7", 28, 204, 24, 51);
    view.defPosition("b6", 28, 254, 24, 51);
    view.defPosition("b5", 28, 304, 24, 51);
    view.defPosition("b4", 28, 354, 24, 51);
    view.defPosition("b3", 28, 404, 24, 51);
    view.defPosition("b2", 28, 454, 24, 51);
    view.defPosition("c10", 43, 54, 24, 51);
    view.defPosition("c9", 43, 104, 24, 51);
    view.defPosition("c8", 43, 154, 24, 51);
    view.defPosition("c7", 43, 204, 24, 51);
    view.defPosition("c6", 43, 254, 24, 51);
    view.defPosition("c5", 43, 304, 24, 51);
    view.defPosition("c4", 43, 354, 24, 51);
    view.defPosition("c3", 43, 404, 24, 51);
    view.defPosition("c2", 43, 454, 24, 51);
    view.defPosition("d10", 58, 54, 24, 51);
    view.defPosition("d9", 58, 104, 24, 51);
    view.defPosition("d8", 58, 154, 24, 51);
    view.defPosition("d7", 58, 204, 24, 51);
    view.defPosition("d6", 58, 254, 24, 51);
    view.defPosition("d5", 58, 304, 24, 51);
    view.defPosition("d4", 58, 354, 24, 51);
    view.defPosition("d3", 58, 404, 24, 51);
    view.defPosition("d2", 58, 454, 24, 51);
    view.defPosition("e10", 73, 54, 24, 51);
    view.defPosition("e9", 73, 104, 24, 51);
    view.defPosition("e8", 73, 154, 24, 51);
    view.defPosition("e7", 73, 204, 24, 51);
    view.defPosition("e6", 73, 254, 24, 51);
    view.defPosition("e5", 73, 304, 24, 51);
    view.defPosition("e4", 73, 354, 24, 51);
    view.defPosition("e3", 73, 404, 24, 51);
    view.defPosition("e2", 73, 454, 24, 51);
    view.defPosition("f10", 88, 54, 24, 51);
    view.defPosition("f9", 88, 104, 24, 51);
    view.defPosition("f8", 88, 154, 24, 51);
    view.defPosition("f7", 88, 204, 24, 51);
    view.defPosition("f6", 88, 254, 24, 51);
    view.defPosition("f5", 88, 304, 24, 51);
    view.defPosition("f4", 88, 354, 24, 51);
    view.defPosition("f3", 88, 404, 24, 51);
    view.defPosition("f2", 88, 454, 24, 51);
    view.defPosition("g10", 103, 54, 24, 51);
    view.defPosition("g9", 103, 104, 24, 51);
    view.defPosition("g8", 103, 154, 24, 51);
    view.defPosition("g7", 103, 204, 24, 51);
    view.defPosition("g6", 103, 254, 24, 51);
    view.defPosition("g5", 103, 304, 24, 51);
    view.defPosition("g4", 103, 354, 24, 51);
    view.defPosition("g3", 103, 404, 24, 51);
    view.defPosition("g2", 103, 454, 24, 51);
    view.defPosition("h10", 118, 54, 24, 51);
    view.defPosition("h9", 118, 104, 24, 51);
    view.defPosition("h8", 118, 154, 24, 51);
    view.defPosition("h7", 118, 204, 24, 51);
    view.defPosition("h6", 118, 254, 24, 51);
    view.defPosition("h5", 118, 304, 24, 51);
    view.defPosition("h4", 118, 354, 24, 51);
    view.defPosition("h3", 118, 404, 24, 51);
    view.defPosition("h2", 118, 454, 24, 51);
    view.defPosition("i10", 133, 54, 24, 51);
    view.defPosition("i9", 133, 104, 24, 51);
    view.defPosition("i8", 133, 154, 24, 51);
    view.defPosition("i7", 133, 204, 24, 51);
    view.defPosition("i6", 133, 254, 24, 51);
    view.defPosition("i5", 133, 304, 24, 51);
    view.defPosition("i4", 133, 354, 24, 51);
    view.defPosition("i3", 133, 404, 24, 51);
    view.defPosition("i2", 133, 454, 24, 51);
    view.defPosition("j10", 148, 54, 24, 51);
    view.defPosition("j9", 148, 104, 24, 51);
    view.defPosition("j8", 148, 154, 24, 51);
    view.defPosition("j7", 148, 204, 24, 51);
    view.defPosition("j6", 148, 254, 24, 51);
    view.defPosition("j5", 148, 304, 24, 51);
    view.defPosition("j4", 148, 354, 24, 51);
    view.defPosition("j3", 148, 404, 24, 51);
    view.defPosition("j2", 148, 454, 24, 51);
}
