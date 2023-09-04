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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("chessence-extension", "true");
    design.checkVersion("chessence-invariant", "true");

    design.addDirection("nne");
    design.addDirection("e");
    design.addDirection("sse");
    design.addDirection("een");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("wws");
    design.addDirection("nw");
    design.addDirection("wwn");
    design.addDirection("w");
    design.addDirection("ssw");
    design.addDirection("nnw");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("ees");
    design.addDirection("sw");
    design.addDirection("to-reserve");
    design.addDirection("black-reserve");
    design.addDirection("next");

    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]);

    design.addPosition("x9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
    design.addPosition("a9", [0, 1, 17, 0, 0, 9, 0, 0, 0, -1, 15, 0, 8, 0, 10, 7, 0, 0, 0]);
    design.addPosition("b9", [0, 1, 17, 0, 0, 9, 6, 0, 0, -1, 15, 0, 8, 0, 10, 7, 0, 0, 17]);
    design.addPosition("c9", [0, 1, 17, 0, 0, 9, 6, 0, 0, -1, 15, 0, 8, 0, 10, 7, 0, 0, 0]);
    design.addPosition("d9", [0, 1, 0, 0, 0, 9, 6, 0, 0, -1, 15, 0, 8, 0, 0, 7, 0, 0, 0]);
    design.addPosition("e9", [0, 1, 17, 0, 0, 0, 6, 0, 0, -1, 15, 0, 8, 0, 10, 7, 0, 0, 0]);
    design.addPosition("f9", [0, 1, 17, 0, 0, 9, 6, 0, 0, -1, 0, 0, 0, 0, 0, 7, 0, 0, 0]);
    design.addPosition("y9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("a8", [0, 1, 17, -6, -8, 9, 0, -9, 0, -1, 15, 0, 8, -7, 10, 7, 0, 0, 9]);
    design.addPosition("b8", [0, 1, 0, -6, -8, 9, 6, -9, -10, -1, 15, 0, 8, -7, 10, 7, 0, 0, -8]);
    design.addPosition("c8", [0, 1, 17, -6, -8, 9, 6, -9, -10, -1, 15, 0, 8, -7, 0, 7, 0, 0, 0]);
    design.addPosition("d8", [0, 1, 17, -6, -8, 0, 6, -9, -10, -1, 0, 0, 8, -7, 10, 7, 0, 0, 0]);
    design.addPosition("e8", [0, 0, 17, -6, -8, 9, 6, -9, -10, -1, 15, 0, 0, -7, 10, 7, 0, 0, 0]);
    design.addPosition("f8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("y8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -7]);
    design.addPosition("a7", [-15, 1, 0, -6, -8, 9, 0, -9, 0, -1, 15, -17, 8, -7, 0, 7, 0, 0, 0]);
    design.addPosition("b7", [-15, 1, 17, -6, -8, 0, 6, -9, -10, -1, 15, -17, 8, -7, 10, 7, 0, 0, -8]);
    design.addPosition("c7", [-15, 1, 17, -6, -8, 9, 6, -9, -10, -1, 0, -17, 0, -7, 10, 7, 0, 0, -8]);
    design.addPosition("d7", [-15, 0, 0, 0, -8, 9, 6, -9, -10, -1, 15, -17, 8, -7, 10, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f7", [-15, 1, 17, 0, 0, 9, 6, -9, -10, 0, 0, -17, 8, -7, 0, 7, 0, 0, 0]);
    design.addPosition("y7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [-15, 1, 17, -6, -8, 0, 0, -9, 0, -1, 15, -17, 8, -7, 10, 7, 0, 0, 0]);
    design.addPosition("b6", [-15, 0, 17, -6, -8, 9, 6, -9, -10, -1, 15, -17, 0, -7, 10, 7, 0, 0, 0]);
    design.addPosition("c6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [-15, 1, 17, -6, -8, 0, 0, -9, -10, 0, 15, -17, 8, 0, 10, 7, 0, 0, 0]);
    design.addPosition("e6", [0, 1, 17, -6, 0, 9, 6, -9, -10, -1, 0, -17, 0, -7, 10, 7, 0, 0, 0]);
    design.addPosition("f6", [-15, 1, 17, 0, -8, 9, 6, 0, -10, -1, 15, -17, 8, -7, 0, 0, 0, 0, 0]);
    design.addPosition("y6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [-15, 0, 0, 0, -8, 9, 0, -9, 0, -1, 15, -17, 8, -7, 10, 7, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-15, 1, 17, -6, 0, 0, 6, -9, -10, 0, 0, -17, 8, -7, 10, 7, 0, 0, 0]);
    design.addPosition("d5", [0, 0, 17, -6, -8, 9, 6, 0, -10, -1, 15, -17, 0, -7, 10, 7, 0, 0, 0]);
    design.addPosition("e5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f5", [-15, 1, 17, 0, -8, 9, 0, -9, -10, 0, 15, 0, 8, -7, 0, 7, 0, 0, 0]);
    design.addPosition("y5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [-15, 1, 17, -6, -8, 0, 0, -9, 0, -1, 15, -17, 8, 0, 10, 7, 0, 0, 0]);
    design.addPosition("b4", [0, 1, 17, -6, 0, 9, 6, -9, -10, -1, 0, -17, 0, -7, 10, 7, 0, 0, 0]);
    design.addPosition("c4", [-15, 0, 17, 0, -8, 9, 6, 0, -10, -1, 15, -17, 8, -7, 10, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e4", [-15, 1, 17, -6, 0, 9, 6, -9, -10, 0, 15, -17, 8, -7, 10, 7, 0, 0, 0]);
    design.addPosition("f4", [-15, 1, 17, 0, -8, 9, 6, 0, -10, -1, 15, -17, 8, -7, 0, 7, 0, 0, 0]);
    design.addPosition("y4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("x3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 17, -6, -8, 9, 0, -9, 0, -1, 15, -17, 0, -7, 10, 7, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [-15, 1, 17, -6, -8, 9, 0, -9, -10, 0, 15, 0, 8, 0, 10, 7, 0, 0, 0]);
    design.addPosition("d3", [0, 1, 17, -6, 0, 9, 6, -9, -10, -1, 15, -17, 8, -7, 10, 7, 0, 0, 17]);
    design.addPosition("e3", [-15, 1, 17, -6, -8, 9, 6, 0, -10, -1, 15, -17, 8, -7, 10, 7, 0, 0, 9]);
    design.addPosition("f3", [-15, 1, 17, 0, -8, 9, 6, -9, 0, -1, 15, 0, 8, -7, 0, 7, 0, 0, 0]);
    design.addPosition("y3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5]);
    design.addPosition("x2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [-15, 1, 0, -6, 0, 9, 6, -9, -10, 0, 0, -17, 8, -7, 10, 7, 0, 0, 0]);
    design.addPosition("c2", [0, 1, 0, -6, -8, 9, 6, 0, -10, -1, 0, -17, 8, -7, 10, 7, 0, 0, 0]);
    design.addPosition("d2", [-15, 1, 0, -6, -8, 9, 6, -9, 0, -1, 0, -17, 8, -7, 10, 7, 0, 0, -8]);
    design.addPosition("e2", [-15, 1, 0, -6, -8, 9, 6, -9, -10, -1, 0, 0, 8, -7, 10, 7, 0, 0, -8]);
    design.addPosition("f2", [-15, 1, 0, 0, -8, 9, 6, -9, -10, -1, 0, -17, 8, -7, 0, 7, 0, 0, 0]);
    design.addPosition("y2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -3]);
    design.addPosition("x1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -6, 0, 0, 0, -9, 0, -1, 0, -17, 0, -7, 0, 0, 6, -65, 0]);
    design.addPosition("b1", [-15, 1, 0, -6, -8, 0, 0, 0, -10, -1, 0, -17, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [-15, 1, 0, -6, -8, 0, 0, -9, 0, -1, 0, 0, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [-15, 1, 0, -6, -8, 0, 0, -9, -10, -1, 0, -17, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [-15, 1, 0, -6, -8, 0, 0, -9, -10, -1, 0, -17, 0, -7, 0, 0, 0, 0, -8]);
    design.addPosition("f1", [-15, 1, 0, 0, -8, 0, 0, -9, -10, -1, 0, -17, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("y1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -11]);

    design.addZone("reserve", 1, [64, 56, 48, 40, 32, 24, 16, 8, 0, 71, 63, 55, 47, 39, 31, 23, 15, 7]);
    design.addZone("reserve", 2, [64, 56, 48, 40, 32, 24, 16, 8, 0, 71, 63, 55, 47, 39, 31, 23, 15, 7]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	10);
    design.addCommand(0, ZRF.IN_ZONE,	0);	// reserve
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-11);
    design.addCommand(0, ZRF.IN_ZONE,	0);	// reserve
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.IN_ZONE,	0);	// reserve
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// reserve
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	18);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-11);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end


    design.addPiece("King", 0);

    design.addPiece("Soldier", 1);
    design.addMove(1, 0, [4, 4], 0);
    design.addMove(1, 0, [12, 12], 0);
    design.addMove(1, 0, [9, 9], 0);
    design.addMove(1, 0, [1, 1], 0);
    design.addMove(1, 0, [7, 7], 0);
    design.addMove(1, 0, [15, 15], 0);
    design.addMove(1, 0, [13, 13], 0);
    design.addMove(1, 0, [5, 5], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [11], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [10], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [14], 0);
    design.addMove(1, 1, [8], 0);
    design.addMove(1, 1, [6], 0);
    design.addMove(1, 2, [18], 0);

    design.setup("White", "Soldier", 62);
    design.setup("White", "Soldier", 69);
    design.setup("White", "Soldier", 61);
    design.setup("White", "Soldier", 53);
    design.setup("White", "Soldier", 60);
    design.setup("White", "Soldier", 52);
    design.setup("White", "Soldier", 71);
    design.setup("White", "Soldier", 63);
    design.setup("White", "Soldier", 55);
    design.setup("White", "King", 70);
    design.setup("Black", "Soldier", 9);
    design.setup("Black", "Soldier", 2);
    design.setup("Black", "Soldier", 10);
    design.setup("Black", "Soldier", 18);
    design.setup("Black", "Soldier", 11);
    design.setup("Black", "Soldier", 19);
    design.setup("Black", "Soldier", 0);
    design.setup("Black", "Soldier", 8);
    design.setup("Black", "Soldier", 16);
    design.setup("Black", "King", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteSoldier", "White Soldier");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("WhiteB", "WhiteB");
    view.defPiece("BlackB", "BlackB");
    view.defPiece("WhiteBN", "WhiteBN");
    view.defPiece("BlackBN", "BlackBN");
    view.defPiece("WhiteN", "WhiteN");
    view.defPiece("BlackN", "BlackN");
    view.defPiece("WhiteR", "WhiteR");
    view.defPiece("BlackR", "BlackR");
    view.defPiece("WhiteRB", "WhiteRB");
    view.defPiece("BlackRB", "BlackRB");
    view.defPiece("WhiteRBN", "WhiteRBN");
    view.defPiece("BlackRBN", "BlackRBN");
    view.defPiece("WhiteRN", "WhiteRN");
    view.defPiece("BlackRN", "BlackRN");
 
    view.defPosition("x9", 0, 0, 68, 68);
    view.defPosition("a9", 68, 0, 68, 68);
    view.defPosition("b9", 136, 0, 68, 68);
    view.defPosition("c9", 204, 0, 68, 68);
    view.defPosition("d9", 272, 0, 68, 68);
    view.defPosition("e9", 340, 0, 68, 68);
    view.defPosition("f9", 408, 0, 68, 68);
    view.defPosition("y9", 476, 0, 68, 68);
    view.defPosition("x8", 0, 68, 68, 68);
    view.defPosition("a8", 68, 68, 68, 68);
    view.defPosition("b8", 136, 68, 68, 68);
    view.defPosition("c8", 204, 68, 68, 68);
    view.defPosition("d8", 272, 68, 68, 68);
    view.defPosition("e8", 340, 68, 68, 68);
    view.defPosition("f8", 408, 68, 68, 68);
    view.defPosition("y8", 476, 68, 68, 68);
    view.defPosition("x7", 0, 136, 68, 68);
    view.defPosition("a7", 68, 136, 68, 68);
    view.defPosition("b7", 136, 136, 68, 68);
    view.defPosition("c7", 204, 136, 68, 68);
    view.defPosition("d7", 272, 136, 68, 68);
    view.defPosition("e7", 340, 136, 68, 68);
    view.defPosition("f7", 408, 136, 68, 68);
    view.defPosition("y7", 476, 136, 68, 68);
    view.defPosition("x6", 0, 204, 68, 68);
    view.defPosition("a6", 68, 204, 68, 68);
    view.defPosition("b6", 136, 204, 68, 68);
    view.defPosition("c6", 204, 204, 68, 68);
    view.defPosition("d6", 272, 204, 68, 68);
    view.defPosition("e6", 340, 204, 68, 68);
    view.defPosition("f6", 408, 204, 68, 68);
    view.defPosition("y6", 476, 204, 68, 68);
    view.defPosition("x5", 0, 272, 68, 68);
    view.defPosition("a5", 68, 272, 68, 68);
    view.defPosition("b5", 136, 272, 68, 68);
    view.defPosition("c5", 204, 272, 68, 68);
    view.defPosition("d5", 272, 272, 68, 68);
    view.defPosition("e5", 340, 272, 68, 68);
    view.defPosition("f5", 408, 272, 68, 68);
    view.defPosition("y5", 476, 272, 68, 68);
    view.defPosition("x4", 0, 340, 68, 68);
    view.defPosition("a4", 68, 340, 68, 68);
    view.defPosition("b4", 136, 340, 68, 68);
    view.defPosition("c4", 204, 340, 68, 68);
    view.defPosition("d4", 272, 340, 68, 68);
    view.defPosition("e4", 340, 340, 68, 68);
    view.defPosition("f4", 408, 340, 68, 68);
    view.defPosition("y4", 476, 340, 68, 68);
    view.defPosition("x3", 0, 408, 68, 68);
    view.defPosition("a3", 68, 408, 68, 68);
    view.defPosition("b3", 136, 408, 68, 68);
    view.defPosition("c3", 204, 408, 68, 68);
    view.defPosition("d3", 272, 408, 68, 68);
    view.defPosition("e3", 340, 408, 68, 68);
    view.defPosition("f3", 408, 408, 68, 68);
    view.defPosition("y3", 476, 408, 68, 68);
    view.defPosition("x2", 0, 476, 68, 68);
    view.defPosition("a2", 68, 476, 68, 68);
    view.defPosition("b2", 136, 476, 68, 68);
    view.defPosition("c2", 204, 476, 68, 68);
    view.defPosition("d2", 272, 476, 68, 68);
    view.defPosition("e2", 340, 476, 68, 68);
    view.defPosition("f2", 408, 476, 68, 68);
    view.defPosition("y2", 476, 476, 68, 68);
    view.defPosition("x1", 0, 544, 68, 68);
    view.defPosition("a1", 68, 544, 68, 68);
    view.defPosition("b1", 136, 544, 68, 68);
    view.defPosition("c1", 204, 544, 68, 68);
    view.defPosition("d1", 272, 544, 68, 68);
    view.defPosition("e1", 340, 544, 68, 68);
    view.defPosition("f1", 408, 544, 68, 68);
    view.defPosition("y1", 476, 544, 68, 68);
}
