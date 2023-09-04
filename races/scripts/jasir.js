Dagaz.AI.selector = true;

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
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("jasir-invariant", "true");
    design.checkVersion("jasir-extension", "true");
    design.checkVersion("jasir-goal", "true");

    design.addDirection("br");   // 0
    design.addDirection("wr");   // 1
    design.addDirection("bn");   // 2
    design.addDirection("wn");   // 3
    design.addDirection("nne");  // 4
    design.addDirection("ssw");  // 5
    design.addDirection("nee");  // 6
    design.addDirection("sww");  // 7
    design.addDirection("nnw");  // 8
    design.addDirection("sse");  // 9
    design.addDirection("nww");  // 10
    design.addDirection("see");  // 11
    design.addDirection("n");    // 12
    design.addDirection("s");    // 13
    design.addDirection("e");    // 14
    design.addDirection("w");    // 15

    design.addPlayer("Black", [0, 1, 2, 3, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]);
    design.addPlayer("White", [1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 11, 10, 13, 12, 15, 14]);

    design.addPosition("a6", [0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 1, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d6", [0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e6", [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 1, 0, 0, 0, 0, 0, 11, 0, 7, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 1, 0, 9, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 0, 0, 1, 0, 9, 0, 3, 0, 0, 0, 7, 0, 0, 0, 0]);
    design.addPosition("d5", [0, 0, 0, 1, 0, 0, 0, 3, 0, 11, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [0, 0, 0, 0, 0, 9, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 7, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 7, 0, 5, 1, 0]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 9, -3, 0, 0, 0, -7, 0, 0, 0, 1, -1]);
    design.addPosition("d4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 11, -7, 0, 0, 5, 0, -1]);
    design.addPosition("e4", [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, -9, 0, 0, 0, 0, 11, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, -9, 9, 0, 0, -11, 0, 0, 7, -5, 5, 1, 0]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0, -3, 3, 0, 11, -7, 0, 0, 0, 0, -1]);
    design.addPosition("d3", [0, 0, 0, 0, -9, 9, 0, 0, 0, 11, -7, 0, -5, 5, 0, 0]);
    design.addPosition("e3", [0, 0, 0, 0, 0, 0, 0, 3, -11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, -3, 0, 0, 0, 0, 7, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, -9, 0, 0, 0, 0, 0, 0, 7, -5, 0, 1, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, -3, 3, 0, 0, 0, 7, 0, 0, 1, -1]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, -7, 0, -5, 0, 0, -1]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 3, -11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [5, -25, 1, 0, -9, 0, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 1, 0, 0, 0, -3, 0, -11, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 1, 0, -9, 0, -3, 0, 0, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 1, 0, 0, 0, 0, 0, -11, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0, -11, 0, -7, 0, 0, 0, 0, 0]);
    design.addPosition("a0", [1, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b0", [1, 0, -6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c0", [1, 0, -7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d0", [1, 0, -8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e0", [0, 0, -9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 2, [25, 26, 27, 28, 29, 20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9]);
    design.addZone("board-zone", 1, [25, 26, 27, 28, 29, 20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9]);
    design.addZone("goal-zone", 2, [25, 26, 27, 28, 29]);
    design.addZone("goal-zone", 1, [5, 6, 7, 8, 9]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0, 50);
    design.addMove(0, 0, [12], 0);
    design.addMove(0, 0, [15], 0);
    design.addMove(0, 0, [14], 0);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [10], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 1, [2], 0);

    design.addPiece("King", 1, 10);
    design.addMove(1, 0, [12], 0);
    design.addMove(1, 0, [15], 0);
    design.addMove(1, 0, [14], 0);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [10], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [6], 0);

    design.setup("White", "Man", 5);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 7);
    design.setup("White", "Man", 8);
    design.setup("White", "Man", 9);
    design.setup("Black", "Man", 25);
    design.setup("Black", "Man", 26);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 28);
    design.setup("Black", "Man", 29);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a6", 6, 6, 45, 45);
    view.defPosition("b6", 63, 6, 45, 45);
    view.defPosition("c6", 120, 6, 45, 45);
    view.defPosition("d6", 177, 6, 45, 45);
    view.defPosition("e6", 234, 6, 45, 45);
    view.defPosition("a5", 6, 63, 45, 45);
    view.defPosition("b5", 63, 63, 45, 45);
    view.defPosition("c5", 120, 63, 45, 45);
    view.defPosition("d5", 177, 63, 45, 45);
    view.defPosition("e5", 234, 63, 45, 45);
    view.defPosition("a4", 6, 120, 45, 45);
    view.defPosition("b4", 63, 120, 45, 45);
    view.defPosition("c4", 120, 120, 45, 45);
    view.defPosition("d4", 177, 120, 45, 45);
    view.defPosition("e4", 234, 120, 45, 45);
    view.defPosition("a3", 6, 177, 45, 45);
    view.defPosition("b3", 63, 177, 45, 45);
    view.defPosition("c3", 120, 177, 45, 45);
    view.defPosition("d3", 177, 177, 45, 45);
    view.defPosition("e3", 234, 177, 45, 45);
    view.defPosition("a2", 6, 234, 45, 45);
    view.defPosition("b2", 63, 234, 45, 45);
    view.defPosition("c2", 120, 234, 45, 45);
    view.defPosition("d2", 177, 234, 45, 45);
    view.defPosition("e2", 234, 234, 45, 45);
    view.defPosition("a1", 6, 291, 45, 45);
    view.defPosition("b1", 63, 291, 45, 45);
    view.defPosition("c1", 120, 291, 45, 45);
    view.defPosition("d1", 177, 291, 45, 45);
    view.defPosition("e1", 234, 291, 45, 45);
    view.defPosition("a0", 6, 348, 45, 45);
    view.defPosition("b0", 63, 348, 45, 45);
    view.defPosition("c0", 120, 348, 45, 45);
    view.defPosition("d0", 177, 348, 45, 45);
    view.defPosition("e0", 234, 348, 45, 45);
}
