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
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("nam-dinh-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a5", [0, 1, 5, 0, 0, 0, 0, 6]);
    design.addPosition("b5", [-1, 1, 5, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [-1, 1, 5, 0, 0, 4, 0, 6]);
    design.addPosition("d5", [-1, 1, 5, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [-1, 0, 5, 0, 0, 4, 0, 0]);
    design.addPosition("a4", [0, 1, 5, -5, 0, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 5, -5, -4, 4, -6, 6]);
    design.addPosition("c4", [-1, 1, 5, -5, 0, 0, 0, 0]);
    design.addPosition("d4", [-1, 1, 5, -5, -4, 4, -6, 6]);
    design.addPosition("e4", [-1, 0, 5, -5, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 5, -5, -4, 0, 0, 6]);
    design.addPosition("b3", [-1, 1, 5, -5, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 1, 5, -5, -4, 4, -6, 6]);
    design.addPosition("d3", [-1, 1, 5, -5, 0, 0, 0, 0]);
    design.addPosition("e3", [-1, 0, 5, -5, 0, 4, -6, 0]);
    design.addPosition("a2", [0, 1, 5, -5, 0, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 5, -5, -4, 4, -6, 6]);
    design.addPosition("c2", [-1, 1, 5, -5, 0, 0, 0, 0]);
    design.addPosition("d2", [-1, 1, 5, -5, -4, 4, -6, 6]);
    design.addPosition("e2", [-1, 0, 5, -5, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -5, -4, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -5, 0, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, 0, -5, -4, 0, -6, 0]);
    design.addPosition("d1", [-1, 1, 0, -5, 0, 0, 0, 0]);
    design.addPosition("e1", [-1, 0, 0, -5, 0, 0, -6, 0]);

    design.addZone("center", 2, [16, 6, 12, 18, 8]);
    design.addZone("center", 1, [16, 6, 12, 18, 8]);

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
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	0);	// Man
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0, 800);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [4, 4], 0);

    design.addPiece("King", 1, 20000);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 2, [3, 3], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [6, 6], 0);
    design.addMove(1, 2, [5, 5], 0);
    design.addMove(1, 2, [7, 7], 0);
    design.addMove(1, 2, [4, 4], 0);

    design.setup("Black", "King", 22);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 23);
    design.setup("Black", "Man", 24);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 17);
    design.setup("Black", "Man", 18);
    design.setup("Black", "Man", 19);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 14);
    design.setup("White", "King", 2);
    design.setup("White", "Man", 0);
    design.setup("White", "Man", 1);
    design.setup("White", "Man", 3);
    design.setup("White", "Man", 4);
    design.setup("White", "Man", 5);
    design.setup("White", "Man", 6);
    design.setup("White", "Man", 7);
    design.setup("White", "Man", 8);
    design.setup("White", "Man", 9);
    design.setup("White", "Man", 10);
    design.setup("White", "Man", 11);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a5", 6, 4, 59, 59);
    view.defPosition("b5", 94, 4, 59, 59);
    view.defPosition("c5", 182, 4, 59, 59);
    view.defPosition("d5", 270, 4, 59, 59);
    view.defPosition("e5", 358, 4, 59, 59);
    view.defPosition("a4", 6, 92, 59, 59);
    view.defPosition("b4", 94, 92, 59, 59);
    view.defPosition("c4", 182, 92, 59, 59);
    view.defPosition("d4", 270, 92, 59, 59);
    view.defPosition("e4", 358, 92, 59, 59);
    view.defPosition("a3", 6, 180, 59, 59);
    view.defPosition("b3", 94, 180, 59, 59);
    view.defPosition("c3", 182, 180, 59, 59);
    view.defPosition("d3", 270, 180, 59, 59);
    view.defPosition("e3", 358, 180, 59, 59);
    view.defPosition("a2", 6, 268, 59, 59);
    view.defPosition("b2", 94, 268, 59, 59);
    view.defPosition("c2", 182, 268, 59, 59);
    view.defPosition("d2", 270, 268, 59, 59);
    view.defPosition("e2", 358, 268, 59, 59);
    view.defPosition("a1", 6, 356, 59, 59);
    view.defPosition("b1", 94, 356, 59, 59);
    view.defPosition("c1", 182, 356, 59, 59);
    view.defPosition("d1", 270, 356, 59, 59);
    view.defPosition("e1", 358, 356, 59, 59);
}
