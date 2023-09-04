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
    design.checkVersion("zrf", "2.0");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Green", [1, 0, 3, 2, 6, 7, 4, 5]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addTurn(2);
    design.addTurn(1);

    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 3, 0, 0, 0, 4, 2, 0]);
    design.addPosition("c5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 6, 1, 0, -2, 4, 0, 0]);
    design.addPosition("b4", [-3, 3, 1, -1, 0, 0, 0, 0]);
    design.addPosition("c4", [0, 6, 0, -1, 0, 0, 2, -4]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [-3, 3, 0, 0, -2, 4, 2, -4]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [-6, 0, 1, 0, -2, 4, 0, 0]);
    design.addPosition("b2", [-3, 3, 1, -1, 0, 0, 0, 0]);
    design.addPosition("c2", [-6, 0, 0, -1, 0, 0, 2, -4]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [-3, 0, 0, 0, -2, 0, 0, -4]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 2, [13, 9, 10, 11, 7, 3, 4, 5, 1]);
    design.addZone("board-zone", 1, [13, 9, 10, 11, 7, 3, 4, 5, 1]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
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


    design.addPiece("RedPiece", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);

    design.addPiece("GreenPiece", 1);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [7], 0);
    design.addMove(1, 1, [4], 0);

    design.setup("Green", "GreenPiece", 9);
    design.setup("Green", "GreenPiece", 13);
    design.setup("Green", "GreenPiece", 11);
    design.reserve("Red", "RedPiece", 1);

    design.goal(0, "Red", "RedPiece", [13]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedRedPiece", "Red RedPiece");
    view.defPiece("GreenGreenPiece", "Green GreenPiece");
 
    view.defPosition("a5", 5, 5, 48, 48);
    view.defPosition("b5", 69, 5, 48, 48);
    view.defPosition("c5", 133, 5, 48, 48);
    view.defPosition("a4", 5, 69, 48, 48);
    view.defPosition("b4", 69, 69, 48, 48);
    view.defPosition("c4", 133, 69, 48, 48);
    view.defPosition("a3", 5, 133, 48, 48);
    view.defPosition("b3", 69, 133, 48, 48);
    view.defPosition("c3", 133, 133, 48, 48);
    view.defPosition("a2", 5, 197, 48, 48);
    view.defPosition("b2", 69, 197, 48, 48);
    view.defPosition("c2", 133, 197, 48, 48);
    view.defPosition("a1", 5, 261, 48, 48);
    view.defPosition("b1", 69, 261, 48, 48);
    view.defPosition("c1", 133, 261, 48, 48);
}
