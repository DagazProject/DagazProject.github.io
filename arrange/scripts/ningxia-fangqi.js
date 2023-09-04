Dagaz.Controller.persistense = "session";

Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 8;

Dagaz.Model.C1     = 1;
Dagaz.Model.C2     = 1;

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
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("fangqi-extension", "ko");
    design.checkVersion("fangqi-invariant", "true");
    design.checkVersion("fangqi-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [0, 1, 7, 0, 0, 8, 0, 0]);
    design.addPosition("b8", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("c8", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("d8", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("e8", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("f8", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("g8", [-1, 0, 7, 0, 0, 0, 6, 0]);
    design.addPosition("a7", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b7", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c7", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d7", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e7", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f7", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g7", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a6", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g6", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a5", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g5", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a4", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g4", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a3", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g3", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a2", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g2", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a1", [0, 1, 0, -6, -7, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("g1", [-1, 0, 0, 0, -7, 0, 0, -8]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// drop-type
    design.addPriority(1);			// normal-type

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [4, 4], 1);
    design.addMove(0, 1, [0, 0], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 2, [], 1);

    design.reserve("White", "Stone", 28);
    design.reserve("Black", "Stone", 28);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 12, 12, 61, 61);
    view.defPosition("b8", 72, 12, 61, 61);
    view.defPosition("c8", 132, 12, 61, 61);
    view.defPosition("d8", 192, 12, 61, 61);
    view.defPosition("e8", 252, 12, 61, 61);
    view.defPosition("f8", 312, 12, 61, 61);
    view.defPosition("g8", 372, 12, 61, 61);
    view.defPosition("a7", 12, 72, 61, 61);
    view.defPosition("b7", 72, 72, 61, 61);
    view.defPosition("c7", 132, 72, 61, 61);
    view.defPosition("d7", 192, 72, 61, 61);
    view.defPosition("e7", 252, 72, 61, 61);
    view.defPosition("f7", 312, 72, 61, 61);
    view.defPosition("g7", 372, 72, 61, 61);
    view.defPosition("a6", 12, 132, 61, 61);
    view.defPosition("b6", 72, 132, 61, 61);
    view.defPosition("c6", 132, 132, 61, 61);
    view.defPosition("d6", 192, 132, 61, 61);
    view.defPosition("e6", 252, 132, 61, 61);
    view.defPosition("f6", 312, 132, 61, 61);
    view.defPosition("g6", 372, 132, 61, 61);
    view.defPosition("a5", 12, 192, 61, 61);
    view.defPosition("b5", 72, 192, 61, 61);
    view.defPosition("c5", 132, 192, 61, 61);
    view.defPosition("d5", 192, 192, 61, 61);
    view.defPosition("e5", 252, 192, 61, 61);
    view.defPosition("f5", 312, 192, 61, 61);
    view.defPosition("g5", 372, 192, 61, 61);
    view.defPosition("a4", 12, 252, 61, 61);
    view.defPosition("b4", 72, 252, 61, 61);
    view.defPosition("c4", 132, 252, 61, 61);
    view.defPosition("d4", 192, 252, 61, 61);
    view.defPosition("e4", 252, 252, 61, 61);
    view.defPosition("f4", 312, 252, 61, 61);
    view.defPosition("g4", 372, 252, 61, 61);
    view.defPosition("a3", 12, 312, 61, 61);
    view.defPosition("b3", 72, 312, 61, 61);
    view.defPosition("c3", 132, 312, 61, 61);
    view.defPosition("d3", 192, 312, 61, 61);
    view.defPosition("e3", 252, 312, 61, 61);
    view.defPosition("f3", 312, 312, 61, 61);
    view.defPosition("g3", 372, 312, 61, 61);
    view.defPosition("a2", 12, 372, 61, 61);
    view.defPosition("b2", 72, 372, 61, 61);
    view.defPosition("c2", 132, 372, 61, 61);
    view.defPosition("d2", 192, 372, 61, 61);
    view.defPosition("e2", 252, 372, 61, 61);
    view.defPosition("f2", 312, 372, 61, 61);
    view.defPosition("g2", 372, 372, 61, 61);
    view.defPosition("a1", 12, 432, 61, 61);
    view.defPosition("b1", 72, 432, 61, 61);
    view.defPosition("c1", 132, 432, 61, 61);
    view.defPosition("d1", 192, 432, 61, 61);
    view.defPosition("e1", 252, 432, 61, 61);
    view.defPosition("f1", 312, 432, 61, 61);
    view.defPosition("g1", 372, 432, 61, 61);
}
