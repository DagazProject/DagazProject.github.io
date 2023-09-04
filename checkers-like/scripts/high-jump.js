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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("ko", "asymmetric");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("high-jump-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a5", [0, 1, 5, 0]);
    design.addPosition("b5", [-1, 1, 5, 0]);
    design.addPosition("c5", [-1, 1, 5, 0]);
    design.addPosition("d5", [-1, 1, 5, 0]);
    design.addPosition("e5", [-1, 0, 5, 0]);
    design.addPosition("a4", [0, 1, 5, -5]);
    design.addPosition("b4", [-1, 1, 5, -5]);
    design.addPosition("c4", [-1, 1, 5, -5]);
    design.addPosition("d4", [-1, 1, 5, -5]);
    design.addPosition("e4", [-1, 0, 5, -5]);
    design.addPosition("a3", [0, 1, 5, -5]);
    design.addPosition("b3", [-1, 1, 5, -5]);
    design.addPosition("c3", [-1, 1, 5, -5]);
    design.addPosition("d3", [-1, 1, 5, -5]);
    design.addPosition("e3", [-1, 0, 5, -5]);
    design.addPosition("a2", [0, 1, 5, -5]);
    design.addPosition("b2", [-1, 1, 5, -5]);
    design.addPosition("c2", [-1, 1, 5, -5]);
    design.addPosition("d2", [-1, 1, 5, -5]);
    design.addPosition("e2", [-1, 0, 5, -5]);
    design.addPosition("a1", [0, 1, 0, -5]);
    design.addPosition("b1", [-1, 1, 0, -5]);
    design.addPosition("c1", [-1, 1, 0, -5]);
    design.addPosition("d1", [-1, 1, 0, -5]);
    design.addPosition("e1", [-1, 0, 0, -5]);

    design.addZone("center", 2, [12]);
    design.addZone("center", 1, [12]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// center
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Stone", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 1, [1], 1);

    design.setup("Black", "Stone", 20);
    design.setup("Black", "Stone", 21);
    design.setup("Black", "Stone", 22);
    design.setup("Black", "Stone", 23);
    design.setup("Black", "Stone", 24);
    design.setup("Black", "Stone", 15);
    design.setup("Black", "Stone", 16);
    design.setup("Black", "Stone", 17);
    design.setup("Black", "Stone", 18);
    design.setup("Black", "Stone", 19);
    design.setup("Black", "Stone", 13);
    design.setup("Black", "Stone", 14);
    design.setup("White", "Stone", 0);
    design.setup("White", "Stone", 1);
    design.setup("White", "Stone", 2);
    design.setup("White", "Stone", 3);
    design.setup("White", "Stone", 4);
    design.setup("White", "Stone", 5);
    design.setup("White", "Stone", 6);
    design.setup("White", "Stone", 7);
    design.setup("White", "Stone", 8);
    design.setup("White", "Stone", 9);
    design.setup("White", "Stone", 10);
    design.setup("White", "Stone", 11);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a5", 1, 1, 54, 54);
    view.defPosition("b5", 55, 1, 54, 54);
    view.defPosition("c5", 109, 1, 54, 54);
    view.defPosition("d5", 163, 1, 54, 54);
    view.defPosition("e5", 217, 1, 54, 54);
    view.defPosition("a4", 1, 55, 54, 54);
    view.defPosition("b4", 55, 55, 54, 54);
    view.defPosition("c4", 109, 55, 54, 54);
    view.defPosition("d4", 163, 55, 54, 54);
    view.defPosition("e4", 217, 55, 54, 54);
    view.defPosition("a3", 1, 109, 54, 54);
    view.defPosition("b3", 55, 109, 54, 54);
    view.defPosition("c3", 109, 109, 54, 54);
    view.defPosition("d3", 163, 109, 54, 54);
    view.defPosition("e3", 217, 109, 54, 54);
    view.defPosition("a2", 1, 163, 54, 54);
    view.defPosition("b2", 55, 163, 54, 54);
    view.defPosition("c2", 109, 163, 54, 54);
    view.defPosition("d2", 163, 163, 54, 54);
    view.defPosition("e2", 217, 163, 54, 54);
    view.defPosition("a1", 1, 217, 54, 54);
    view.defPosition("b1", 55, 217, 54, 54);
    view.defPosition("c1", 109, 217, 54, 54);
    view.defPosition("d1", 163, 217, 54, 54);
    view.defPosition("e1", 217, 217, 54, 54);
}
