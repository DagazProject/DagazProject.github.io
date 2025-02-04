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
    design.checkVersion("show-drops", "all");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("pass-turn", "forced");

    design.addDirection("s");  // 0
    design.addDirection("n");  // 1
    design.addDirection("ne"); // 2
    design.addDirection("sw"); // 3
    design.addDirection("se"); // 4
    design.addDirection("nw"); // 5
    design.addDirection("nx"); // 6

    design.addPlayer("First", [1, 0, 3, 2, 5, 4, 6]);
    design.addPlayer("Second", [0, 1, 2, 3, 4, 5, 6]);
    design.addPlayer("N", [0, 1, 2, 3, 4, 5, 6]);

    design.addTurn(1, [0, 1]); // 0
    design.addTurn(1, [2]);    // 1
    design.addTurn(2, [0, 1]); // 2
    design.addTurn(2, [2]);    // 3

    design.addPosition("B10", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 5, 0, 4, 0, 4]);
    design.addPosition("a3", [-1, 1, 5, 0, 4, 0, -1]);
    design.addPosition("a2", [-1, 1, 5, 0, 4, 0, -1]);
    design.addPosition("a1", [-1, 0, 5, 0, 4, 0, -1]);
    design.addPosition("b5", [0, 1, 6, 0, 5, -4, 5]);
    design.addPosition("b4", [-1, 1, 6, -5, 5, -4, 5]);
    design.addPosition("b3", [-1, 1, 6, -5, 5, -4, -1]);
    design.addPosition("b2", [-1, 1, 6, -5, 5, -4, -1]);
    design.addPosition("b1", [-1, 0, 6, -5, 5, 0, -1]);
    design.addPosition("c6", [0, 1, 7, 0, 6, -5, 6]);
    design.addPosition("c5", [-1, 1, 7, -6, 6, -5, 6]);
    design.addPosition("c4", [-1, 1, 7, -6, 6, -5, 6]);
    design.addPosition("c3", [-1, 1, 7, -6, 6, -5, -1]);
    design.addPosition("c2", [-1, 1, 7, -6, 6, -5, -1]);
    design.addPosition("c1", [-1, 0, 7, -6, 6, 0, -6]);
    design.addPosition("d7", [0, 1, 7, 0, 0, -6, 7]);
    design.addPosition("d6", [-1, 1, 7, -7, 6, -6, 7]);
    design.addPosition("d5", [-1, 1, 7, -7, 6, -6, 7]);
    design.addPosition("d4", [-1, 1, 7, -7, 6, -6, 0]);
    design.addPosition("d3", [-1, 1, 7, -7, 6, -6, -1]);
    design.addPosition("d2", [-1, 1, 7, -7, 6, -6, -7]);
    design.addPosition("d1", [-1, 0, 0, -7, 6, 0, -7]);
    design.addPosition("e6", [0, 1, 6, -7, 0, -6, 6]);
    design.addPosition("e5", [-1, 1, 6, -7, 5, -6, 6]);
    design.addPosition("e4", [-1, 1, 6, -7, 5, -6, 1]);
    design.addPosition("e3", [-1, 1, 6, -7, 5, -6, -6]);
    design.addPosition("e2", [-1, 1, 6, -7, 5, -6, -6]);
    design.addPosition("e1", [-1, 0, 0, -7, 5, -6, -6]);
    design.addPosition("f5", [0, 1, 5, -6, 0, -5, 5]);
    design.addPosition("f4", [-1, 1, 5, -6, 4, -5, 1]);
    design.addPosition("f3", [-1, 1, 5, -6, 4, -5, 1]);
    design.addPosition("f2", [-1, 1, 5, -6, 4, -5, -5]);
    design.addPosition("f1", [-1, 0, 0, -6, 4, -5, -5]);
    design.addPosition("g4", [0, 1, 0, -5, 0, -4, 1]);
    design.addPosition("g3", [-1, 1, 0, -5, 0, -4, 1]);
    design.addPosition("g2", [-1, 1, 0, -5, 0, -4, 1]);
    design.addPosition("g1", [-1, 0, 0, -5, 0, -4, -4]);
    design.addPosition("B11", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B12", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B13", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B14", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B15", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B16", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G11", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G12", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G13", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G14", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G15", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W11", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W12", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W13", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W14", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B21", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B22", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B23", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B24", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B25", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B26", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G21", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G22", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G23", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G24", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G25", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W21", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W22", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W23", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W24", [0, 0, 0, 0, 0, 0, 0]);

    design.addZone("init", 2, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 17, 16, 15, 14, 13, 12, 11, 10, 23, 22, 21, 20, 19, 18]);
    design.addZone("init", 1, [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 17, 16, 15, 14, 13, 12, 11, 10, 23, 22, 21, 20, 19, 18]);
    design.addZone("fields", 2, [27, 26, 25, 24, 32, 31, 30, 29, 28, 38, 37, 36, 35, 34, 33, 45, 44, 43, 42, 41, 40, 39, 51, 50, 49, 48, 47, 46, 56, 55, 54, 53, 52, 60, 59, 58, 57]);
    design.addZone("fields", 1, [27, 26, 25, 24, 32, 31, 30, 29, 28, 38, 37, 36, 35, 34, 33, 45, 44, 43, 42, 41, 40, 39, 51, 50, 49, 48, 47, 46, 56, 55, 54, 53, 52, 60, 59, 58, 57]);
    design.addZone("black-hand", 2, [76, 77, 78, 79, 80, 81]);
    design.addZone("black-hand", 1, [61, 62, 63, 64, 65, 66]);
    design.addZone("gray-hand", 2, [82, 83, 84, 85, 86]);
    design.addZone("gray-hand", 1, [67, 68, 69, 70, 71]);
    design.addZone("white-hand", 2, [87, 88, 89, 90]);
    design.addZone("white-hand", 1, [72, 73, 74, 75]);

    design.addCommand(0, ZRF.IN_ZONE,	1);	// fields
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// init
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	1);	// fields
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	0);	// Empty
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	0);	// Empty
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	0);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

//  design.addPriority(0);			// jump-type
//  design.addPriority(1);			// init-type

    design.addPiece("Empty", 0);
    design.addDrop(0, 0, [], 2);

    design.addPiece("Black", 1);
    design.addMove(1, 1, [27, 6], 1);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 2, [5, 5], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 2, [4, 4], 0);

    design.addPiece("Gray", 2);
    design.addMove(2, 1, [27, 6], 1);
    design.addMove(2, 2, [1, 1], 0);
    design.addMove(2, 2, [0, 0], 0);
    design.addMove(2, 2, [5, 5], 0);
    design.addMove(2, 2, [2, 2], 0);
    design.addMove(2, 2, [3, 3], 0);
    design.addMove(2, 2, [4, 4], 0);

    design.addPiece("White", 3);
    design.addMove(3, 1, [27, 6], 1);
    design.addMove(3, 2, [1, 1], 0);
    design.addMove(3, 2, [0, 0], 0);
    design.addMove(3, 2, [5, 5], 0);
    design.addMove(3, 2, [2, 2], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [4, 4], 0);

    design.setup("N", "Black", 9);
    design.setup("N", "Black", 8);
    design.setup("N", "Black", 7);
    design.setup("N", "Black", 6);
    design.setup("N", "Black", 5);
    design.setup("N", "Black", 4);
    design.setup("N", "Black", 3);
    design.setup("N", "Black", 2);
    design.setup("N", "Black", 1);
    design.setup("N", "Black", 0);
    design.setup("N", "Gray", 17);
    design.setup("N", "Gray", 16);
    design.setup("N", "Gray", 15);
    design.setup("N", "Gray", 14);
    design.setup("N", "Gray", 13);
    design.setup("N", "Gray", 12);
    design.setup("N", "Gray", 11);
    design.setup("N", "Gray", 10);
    design.setup("N", "White", 23);
    design.setup("N", "White", 22);
    design.setup("N", "White", 21);
    design.setup("N", "White", 20);
    design.setup("N", "White", 19);
    design.setup("N", "White", 18);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("FirstEmpty", "First Empty");
    view.defPiece("SecondEmpty", "Second Empty");
    view.defPiece("NBlack", "N Black");
    view.defPiece("FirstBlack", "First Black");
    view.defPiece("SecondBlack", "Second Black");
    view.defPiece("NGray", "N Gray");
    view.defPiece("FirstGray", "First Gray");
    view.defPiece("SecondGray", "Second Gray");
    view.defPiece("NWhite", "N White");
    view.defPiece("FirstWhite", "First White");
    view.defPiece("SecondWhite", "Second White");
 
    view.defPosition("B10", 70, 14, 31, 31);
    view.defPosition("B9", 38, 14, 31, 31);
    view.defPosition("B8", 6, 14, 31, 31);
    view.defPosition("B7", 6, 46, 31, 31);
    view.defPosition("B6", 6, 78, 31, 31);
    view.defPosition("B5", 6, 110, 31, 31);
    view.defPosition("B4", 6, 142, 31, 31);
    view.defPosition("B3", 6, 174, 31, 32);
    view.defPosition("B2", 6, 207, 31, 31);
    view.defPosition("B1", 6, 239, 31, 31);
    view.defPosition("G8", 70, 46, 31, 31);
    view.defPosition("G7", 38, 46, 31, 31);
    view.defPosition("G6", 38, 78, 31, 31);
    view.defPosition("G5", 38, 110, 31, 31);
    view.defPosition("G4", 38, 142, 31, 31);
    view.defPosition("G3", 38, 174, 31, 32);
    view.defPosition("G2", 38, 207, 31, 31);
    view.defPosition("G1", 38, 239, 31, 31);
    view.defPosition("W6", 70, 78, 31, 31);
    view.defPosition("W5", 70, 110, 31, 31);
    view.defPosition("W4", 70, 142, 31, 31);
    view.defPosition("W3", 70, 174, 31, 32);
    view.defPosition("W2", 70, 207, 31, 31);
    view.defPosition("W1", 70, 239, 31, 31);
    view.defPosition("a4", 107, 65, 31, 31);
    view.defPosition("a3", 107, 105, 31, 31);
    view.defPosition("a2", 107, 145, 31, 31);
    view.defPosition("a1", 107, 185, 31, 31);
    view.defPosition("b5", 140, 45, 31, 31);
    view.defPosition("b4", 140, 85, 31, 31);
    view.defPosition("b3", 140, 125, 31, 31);
    view.defPosition("b2", 140, 165, 31, 31);
    view.defPosition("b1", 140, 205, 31, 31);
    view.defPosition("c6", 173, 25, 31, 31);
    view.defPosition("c5", 173, 65, 31, 31);
    view.defPosition("c4", 173, 105, 31, 31);
    view.defPosition("c3", 173, 145, 31, 31);
    view.defPosition("c2", 173, 185, 31, 31);
    view.defPosition("c1", 173, 225, 31, 31);
    view.defPosition("d7", 206, 5, 31, 31);
    view.defPosition("d6", 206, 45, 31, 31);
    view.defPosition("d5", 206, 85, 31, 31);
    view.defPosition("d4", 206, 125, 31, 31);
    view.defPosition("d3", 206, 165, 31, 31);
    view.defPosition("d2", 206, 205, 31, 31);
    view.defPosition("d1", 206, 245, 31, 31);
    view.defPosition("e6", 239, 25, 31, 31);
    view.defPosition("e5", 239, 65, 31, 31);
    view.defPosition("e4", 239, 105, 31, 31);
    view.defPosition("e3", 239, 145, 31, 31);
    view.defPosition("e2", 239, 185, 31, 31);
    view.defPosition("e1", 239, 225, 31, 31);
    view.defPosition("f5", 272, 45, 31, 31);
    view.defPosition("f4", 272, 85, 31, 31);
    view.defPosition("f3", 272, 125, 31, 31);
    view.defPosition("f2", 272, 165, 31, 31);
    view.defPosition("f1", 272, 205, 31, 31);
    view.defPosition("g4", 305, 65, 31, 31);
    view.defPosition("g3", 305, 105, 31, 31);
    view.defPosition("g2", 305, 145, 31, 31);
    view.defPosition("g1", 305, 185, 31, 31);
    view.defPosition("B11", 482, 246, 31, 31);
    view.defPosition("B12", 450, 246, 31, 31);
    view.defPosition("B13", 418, 246, 31, 31);
    view.defPosition("B14", 386, 246, 31, 31);
    view.defPosition("B15", 354, 246, 31, 31);
    view.defPosition("B16", 322, 246, 31, 31);
    view.defPosition("G11", 482, 214, 31, 31);
    view.defPosition("G12", 450, 214, 31, 31);
    view.defPosition("G13", 418, 214, 31, 31);
    view.defPosition("G14", 386, 214, 31, 31);
    view.defPosition("G15", 354, 214, 31, 31);
    view.defPosition("W11", 482, 182, 31, 31);
    view.defPosition("W12", 450, 182, 31, 31);
    view.defPosition("W13", 418, 182, 31, 31);
    view.defPosition("W14", 386, 182, 31, 31);
    view.defPosition("B21", 482, 5, 31, 31);
    view.defPosition("B22", 450, 5, 31, 31);
    view.defPosition("B23", 418, 5, 31, 31);
    view.defPosition("B24", 386, 5, 31, 31);
    view.defPosition("B25", 354, 5, 31, 31);
    view.defPosition("B26", 322, 5, 31, 31);
    view.defPosition("G21", 482, 37, 31, 31);
    view.defPosition("G22", 450, 37, 31, 31);
    view.defPosition("G23", 418, 37, 31, 31);
    view.defPosition("G24", 386, 37, 31, 31);
    view.defPosition("G25", 354, 37, 31, 31);
    view.defPosition("W21", 482, 69, 31, 31);
    view.defPosition("W22", 450, 69, 31, 31);
    view.defPosition("W23", 418, 69, 31, 31);
    view.defPosition("W24", 386, 69, 31, 31);
}
