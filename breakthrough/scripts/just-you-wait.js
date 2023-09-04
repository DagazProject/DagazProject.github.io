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
    design.checkVersion("z2j", "1");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("nw");
    design.addDirection("se");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a7", [0, 5, 0, 4, 1, 0]);
    design.addPosition("b7", [0, 5, 0, 4, 1, -1]);
    design.addPosition("c7", [0, 5, 0, 4, 1, -1]);
    design.addPosition("d7", [0, 5, 0, 4, 0, -1]);
    design.addPosition("a6", [0, 5, -4, 0, 1, 0]);
    design.addPosition("b6", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("c6", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("d6", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("e6", [-5, 0, 0, 4, 0, -1]);
    design.addPosition("a5", [-5, 5, -4, 4, 1, 0]);
    design.addPosition("b5", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("c5", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("d5", [-5, 5, -4, 4, 0, -1]);
    design.addPosition("a4", [0, 5, -4, 0, 1, 0]);
    design.addPosition("b4", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("c4", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("d4", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("e4", [-5, 0, 0, 4, 0, -1]);
    design.addPosition("a3", [-5, 5, -4, 4, 1, 0]);
    design.addPosition("b3", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("c3", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("d3", [-5, 5, -4, 4, 0, -1]);
    design.addPosition("a2", [0, 5, -4, 0, 1, 0]);
    design.addPosition("b2", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("c2", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("d2", [-5, 5, -4, 4, 1, -1]);
    design.addPosition("e2", [-5, 0, 0, 4, 0, -1]);
    design.addPosition("a1", [-5, 0, -4, 0, 1, 0]);
    design.addPosition("b1", [-5, 0, -4, 0, 1, -1]);
    design.addPosition("c1", [-5, 0, -4, 0, 1, -1]);
    design.addPosition("d1", [-5, 0, -4, 0, 0, -1]);


    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("BlackPiece", 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("WhitePiece", 1);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [3], 0);

    design.setup("White", "WhitePiece", 15);
    design.setup("Black", "BlackPiece", 27);
    design.setup("Black", "BlackPiece", 28);
    design.setup("Black", "BlackPiece", 29);
    design.setup("Black", "BlackPiece", 30);
    design.setup("Black", "BlackPiece", 24);

    design.goal(0, "White", "WhitePiece", [27]);
    design.goal(1, "White", "WhitePiece", [28]);
    design.goal(2, "White", "WhitePiece", [29]);
    design.goal(3, "White", "WhitePiece", [30]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackBlackPiece", "Black BlackPiece");
    view.defPiece("WhiteWhitePiece", "White WhitePiece");
 
    view.defPosition("a7", 46, 10, 80, 70);
    view.defPosition("b7", 126, 10, 80, 70);
    view.defPosition("c7", 206, 10, 80, 70);
    view.defPosition("d7", 286, 10, 80, 70);
    view.defPosition("a6", 7, 82, 80, 70);
    view.defPosition("b6", 87, 82, 80, 70);
    view.defPosition("c6", 167, 82, 80, 70);
    view.defPosition("d6", 247, 82, 80, 70);
    view.defPosition("e6", 327, 82, 80, 70);
    view.defPosition("a5", 46, 154, 80, 70);
    view.defPosition("b5", 126, 154, 80, 70);
    view.defPosition("c5", 206, 154, 80, 70);
    view.defPosition("d5", 286, 154, 80, 70);
    view.defPosition("a4", 7, 226, 80, 70);
    view.defPosition("b4", 87, 226, 80, 70);
    view.defPosition("c4", 167, 226, 80, 70);
    view.defPosition("d4", 247, 226, 80, 70);
    view.defPosition("e4", 327, 226, 80, 70);
    view.defPosition("a3", 46, 298, 80, 70);
    view.defPosition("b3", 126, 298, 80, 70);
    view.defPosition("c3", 206, 298, 80, 70);
    view.defPosition("d3", 286, 298, 80, 70);
    view.defPosition("a2", 7, 370, 80, 70);
    view.defPosition("b2", 87, 370, 80, 70);
    view.defPosition("c2", 167, 370, 80, 70);
    view.defPosition("d2", 247, 370, 80, 70);
    view.defPosition("e2", 327, 370, 80, 70);
    view.defPosition("a1", 46, 442, 80, 70);
    view.defPosition("b1", 126, 442, 80, 70);
    view.defPosition("c1", 206, 442, 80, 70);
    view.defPosition("d1", 286, 442, 80, 70);
}
