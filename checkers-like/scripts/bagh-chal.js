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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("ko", "situation");
    design.checkVersion("bagh-chal-extension", "true");

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

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(2, ZRF.MODE,	1);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Goat", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [4], 0);

    design.addPiece("Tiger", 1);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [1], 0);
    design.addMove(1, 1, [6], 0);
    design.addMove(1, 1, [5], 0);
    design.addMove(1, 1, [7], 0);
    design.addMove(1, 1, [4], 0);
    design.addMove(1, 2, [3, 3], 1);
    design.addMove(1, 2, [0, 0], 1);
    design.addMove(1, 2, [2, 2], 1);
    design.addMove(1, 2, [1, 1], 1);
    design.addMove(1, 2, [6, 6], 1);
    design.addMove(1, 2, [5, 5], 1);
    design.addMove(1, 2, [7, 7], 1);
    design.addMove(1, 2, [4, 4], 1);

    design.setup("White", "Tiger", 20);
    design.setup("White", "Tiger", 0);
    design.setup("White", "Tiger", 24);
    design.setup("White", "Tiger", 4);
    design.reserve("Black", "Goat", 20);
    design.reserve("White", "Goat", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackGoat", "Black Goat");
    view.defPiece("WhiteTiger", "White Tiger");
 
    view.defPosition("a5", 5, 5, 59, 59);
    view.defPosition("b5", 93, 5, 59, 59);
    view.defPosition("c5", 181, 5, 59, 59);
    view.defPosition("d5", 269, 5, 59, 59);
    view.defPosition("e5", 357, 5, 59, 59);
    view.defPosition("a4", 5, 93, 59, 59);
    view.defPosition("b4", 93, 93, 59, 59);
    view.defPosition("c4", 181, 93, 59, 59);
    view.defPosition("d4", 269, 93, 59, 59);
    view.defPosition("e4", 357, 93, 59, 59);
    view.defPosition("a3", 5, 181, 59, 59);
    view.defPosition("b3", 93, 181, 59, 59);
    view.defPosition("c3", 181, 181, 59, 59);
    view.defPosition("d3", 269, 181, 59, 59);
    view.defPosition("e3", 357, 181, 59, 59);
    view.defPosition("a2", 5, 269, 59, 59);
    view.defPosition("b2", 93, 269, 59, 59);
    view.defPosition("c2", 181, 269, 59, 59);
    view.defPosition("d2", 269, 269, 59, 59);
    view.defPosition("e2", 357, 269, 59, 59);
    view.defPosition("a1", 5, 357, 59, 59);
    view.defPosition("b1", 93, 357, 59, 59);
    view.defPosition("c1", 181, 357, 59, 59);
    view.defPosition("d1", 269, 357, 59, 59);
    view.defPosition("e1", 357, 357, 59, 59);
}
