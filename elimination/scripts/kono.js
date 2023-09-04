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
    design.checkVersion("prevent-flipping", "2");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "10");
    design.checkVersion("kono-extension", "true");

    design.addDirection("w");  // 0
    design.addDirection("ww"); // 1
    design.addDirection("ee"); // 2
    design.addDirection("e");  // 3
    design.addDirection("s");  // 4
    design.addDirection("nn"); // 5
    design.addDirection("n");  // 6
    design.addDirection("ss"); // 7

    design.addPlayer("Black", [3, 2, 1, 0, 6, 7, 4, 5]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a4", [0, 0, 2, 1, 4, 0, 0, 8]);
    design.addPosition("b4", [-1, 0, 2, 1, 4, 0, 0, 8]);
    design.addPosition("c4", [-1, -2, 0, 1, 4, 0, 0, 8]);
    design.addPosition("d4", [-1, -2, 0, 0, 4, 0, 0, 8]);
    design.addPosition("a3", [0, 0, 2, 1, 4, 0, -4, 8]);
    design.addPosition("b3", [-1, 0, 2, 1, 4, 0, -4, 8]);
    design.addPosition("c3", [-1, -2, 0, 1, 4, 0, -4, 8]);
    design.addPosition("d3", [-1, -2, 0, 0, 4, 0, -4, 8]);
    design.addPosition("a2", [0, 0, 2, 1, 4, -8, -4, 0]);
    design.addPosition("b2", [-1, 0, 2, 1, 4, -8, -4, 0]);
    design.addPosition("c2", [-1, -2, 0, 1, 4, -8, -4, 0]);
    design.addPosition("d2", [-1, -2, 0, 0, 4, -8, -4, 0]);
    design.addPosition("a1", [0, 0, 2, 1, 0, -8, -4, 0]);
    design.addPosition("b1", [-1, 0, 2, 1, 0, -8, -4, 0]);
    design.addPosition("c1", [-1, -2, 0, 1, 0, -8, -4, 0]);
    design.addPosition("d1", [-1, -2, 0, 0, 0, -8, -4, 0]);

    design.addZone("center", 2, [9, 5, 10, 6]);
    design.addZone("center", 1, [9, 5, 10, 6]);

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
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Ball", 0, 800);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [0, 0], 0);

    design.setup("White", "Ball", 4);
    design.setup("White", "Ball", 5);
    design.setup("White", "Ball", 6);
    design.setup("White", "Ball", 7);
    design.setup("White", "Ball", 0);
    design.setup("White", "Ball", 1);
    design.setup("White", "Ball", 2);
    design.setup("White", "Ball", 3);
    design.setup("Black", "Ball", 12);
    design.setup("Black", "Ball", 13);
    design.setup("Black", "Ball", 14);
    design.setup("Black", "Ball", 15);
    design.setup("Black", "Ball", 8);
    design.setup("Black", "Ball", 9);
    design.setup("Black", "Ball", 10);
    design.setup("Black", "Ball", 11);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteBall", "White Ball");
    view.defPiece("BlackBall", "Black Ball");
 
    view.defPosition("a4", 2, 2, 61, 61);
    view.defPosition("b4", 63, 2, 61, 61);
    view.defPosition("c4", 124, 2, 61, 61);
    view.defPosition("d4", 185, 2, 61, 61);
    view.defPosition("a3", 2, 63, 61, 61);
    view.defPosition("b3", 63, 63, 61, 61);
    view.defPosition("c3", 124, 63, 61, 61);
    view.defPosition("d3", 185, 63, 61, 61);
    view.defPosition("a2", 2, 124, 61, 61);
    view.defPosition("b2", 63, 124, 61, 61);
    view.defPosition("c2", 124, 124, 61, 61);
    view.defPosition("d2", 185, 124, 61, 61);
    view.defPosition("a1", 2, 185, 61, 61);
    view.defPosition("b1", 63, 185, 61, 61);
    view.defPosition("c1", 124, 185, 61, 61);
    view.defPosition("d1", 185, 185, 61, 61);
}
