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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("White", [3, 2, 1, 0, 5, 4, 7, 6]);
    design.addPlayer("Black", [3, 2, 1, 0, 5, 4, 7, 6]);

    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [5, 0, 0, 0, 0, 4, 0, 6]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [5, 1, 0, 0, -4, 4, 0, 6]);
    design.addPosition("c6", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("d6", [5, 0, -1, 0, 0, 4, -6, 6]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [5, 1, 0, 0, -4, 0, 0, 6]);
    design.addPosition("b5", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("c5", [5, 1, -1, -5, -4, 4, -6, 6]);
    design.addPosition("d5", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("e5", [5, 0, -1, 0, 0, 4, -6, 0]);
    design.addPosition("a4", [5, 1, 0, -5, 0, 0, 0, 0]);
    design.addPosition("b4", [5, 1, -1, -5, -4, 4, -6, 6]);
    design.addPosition("c4", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("d4", [5, 1, -1, -5, -4, 4, -6, 6]);
    design.addPosition("e4", [5, 0, -1, -5, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 0, -5, -4, 0, 0, 6]);
    design.addPosition("b3", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("c3", [5, 1, -1, -5, -4, 4, -6, 6]);
    design.addPosition("d3", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("e3", [0, 0, -1, -5, 0, 4, -6, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 1, 0, -5, -4, 0, -6, 6]);
    design.addPosition("c2", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, -1, -5, -4, 4, -6, 0]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, -5, -4, 0, -6, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("goal", 1, [2]);
    design.addZone("goal", 2, [32]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	0);	// Man
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	0);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// goal
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	3);
    design.addCommand(2, ZRF.MODE,	0);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

//  design.addPriority(0);			// jump-type
//  design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 10);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [2], 1);
    design.addMove(0, 0, [1], 1);
    design.addMove(0, 0, [6], 1);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [4, 4], 0);

    design.addPiece("King", 1, 20000);
    design.addMove(1, 0, [3], 1);
    design.addMove(1, 0, [2], 1);
    design.addMove(1, 0, [0], 1);
    design.addMove(1, 0, [1], 1);
    design.addMove(1, 0, [6], 1);
    design.addMove(1, 0, [5], 1);
    design.addMove(1, 0, [7], 1);
    design.addMove(1, 0, [4], 1);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [6, 6], 0);
    design.addMove(1, 2, [5, 5], 0);
    design.addMove(1, 2, [7, 7], 0);
    design.addMove(1, 2, [4, 4], 0);

    design.setup("White", "King", 32);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 28);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 24);
    design.setup("Black", "King", 2);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 14);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a7", 6, 4, 59, 59);
    view.defPosition("b7", 94, 4, 59, 59);
    view.defPosition("c7", 182, 4, 59, 59);
    view.defPosition("d7", 270, 4, 59, 59);
    view.defPosition("e7", 358, 4, 59, 59);
    view.defPosition("a6", 6, 92, 59, 59);
    view.defPosition("b6", 94, 92, 59, 59);
    view.defPosition("c6", 182, 92, 59, 59);
    view.defPosition("d6", 270, 92, 59, 59);
    view.defPosition("e6", 358, 92, 59, 59);
    view.defPosition("a5", 6, 180, 59, 59);
    view.defPosition("b5", 94, 180, 59, 59);
    view.defPosition("c5", 182, 180, 59, 59);
    view.defPosition("d5", 270, 180, 59, 59);
    view.defPosition("e5", 358, 180, 59, 59);
    view.defPosition("a4", 6, 268, 59, 59);
    view.defPosition("b4", 94, 268, 59, 59);
    view.defPosition("c4", 182, 268, 59, 59);
    view.defPosition("d4", 270, 268, 59, 59);
    view.defPosition("e4", 358, 268, 59, 59);
    view.defPosition("a3", 6, 356, 59, 59);
    view.defPosition("b3", 94, 356, 59, 59);
    view.defPosition("c3", 182, 356, 59, 59);
    view.defPosition("d3", 270, 356, 59, 59);
    view.defPosition("e3", 358, 356, 59, 59);
    view.defPosition("a2", 6, 444, 59, 59);
    view.defPosition("b2", 94, 444, 59, 59);
    view.defPosition("c2", 182, 444, 59, 59);
    view.defPosition("d2", 270, 444, 59, 59);
    view.defPosition("e2", 358, 444, 59, 59);
    view.defPosition("a1", 6, 532, 59, 59);
    view.defPosition("b1", 94, 532, 59, 59);
    view.defPosition("c1", 182, 532, 59, 59);
    view.defPosition("d1", 270, 532, 59, 59);
    view.defPosition("e1", 358, 532, 59, 59);
}
