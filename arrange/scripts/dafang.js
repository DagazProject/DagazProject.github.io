Dagaz.Model.WIDTH  = 6;
Dagaz.Model.HEIGHT = 6;

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
    design.checkVersion("show-drops", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a6", [7, 6, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("c6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("d6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("e6", [7, 6, 5, 1, -1, 0, 0, 0]);
    design.addPosition("f6", [0, 6, 5, 0, -1, 0, 0, 0]);
    design.addPosition("a5", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e5", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f5", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a4", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e4", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f4", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a3", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e3", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f3", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a2", [7, 6, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("c2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("d2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("e2", [7, 6, 5, 1, -1, -5, -7, -6]);
    design.addPosition("f2", [0, 6, 5, 0, -1, 0, -7, -6]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -5, 0, -6]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -5, -7, -6]);
    design.addPosition("f1", [0, 0, 0, 0, -1, 0, -7, -6]);

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
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

//  design.addPriority(0);			// drop-type
//  design.addPriority(1);			// normal-type

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [1], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [4], 1);
    design.addMove(0, 1, [7], 1);
    design.addMove(0, 2, [], 0);

    design.reserve("White", "Stone", 18);
    design.reserve("Black", "Stone", 18);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a6", 12, 12, 61, 61);
    view.defPosition("b6", 72, 12, 61, 61);
    view.defPosition("c6", 132, 12, 61, 61);
    view.defPosition("d6", 192, 12, 61, 61);
    view.defPosition("e6", 252, 12, 61, 61);
    view.defPosition("f6", 312, 12, 61, 61);
    view.defPosition("a5", 12, 72, 61, 61);
    view.defPosition("b5", 72, 72, 61, 61);
    view.defPosition("c5", 132, 72, 61, 61);
    view.defPosition("d5", 192, 72, 61, 61);
    view.defPosition("e5", 252, 72, 61, 61);
    view.defPosition("f5", 312, 72, 61, 61);
    view.defPosition("a4", 12, 132, 61, 61);
    view.defPosition("b4", 72, 132, 61, 61);
    view.defPosition("c4", 132, 132, 61, 61);
    view.defPosition("d4", 192, 132, 61, 61);
    view.defPosition("e4", 252, 132, 61, 61);
    view.defPosition("f4", 312, 132, 61, 61);
    view.defPosition("a3", 12, 192, 61, 61);
    view.defPosition("b3", 72, 192, 61, 61);
    view.defPosition("c3", 132, 192, 61, 61);
    view.defPosition("d3", 192, 192, 61, 61);
    view.defPosition("e3", 252, 192, 61, 61);
    view.defPosition("f3", 312, 192, 61, 61);
    view.defPosition("a2", 12, 252, 61, 61);
    view.defPosition("b2", 72, 252, 61, 61);
    view.defPosition("c2", 132, 252, 61, 61);
    view.defPosition("d2", 192, 252, 61, 61);
    view.defPosition("e2", 252, 252, 61, 61);
    view.defPosition("f2", 312, 252, 61, 61);
    view.defPosition("a1", 12, 312, 61, 61);
    view.defPosition("b1", 72, 312, 61, 61);
    view.defPosition("c1", 132, 312, 61, 61);
    view.defPosition("d1", 192, 312, 61, 61);
    view.defPosition("e1", 252, 312, 61, 61);
    view.defPosition("f1", 312, 312, 61, 61);
}
