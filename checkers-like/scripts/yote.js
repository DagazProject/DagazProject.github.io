Dagaz.Controller.persistense = "session";

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
    design.checkVersion("yote-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("White", [1, 0, 3, 2]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("a5", [0, 1, 6, 0]);
    design.addPosition("b5", [-1, 1, 6, 0]);
    design.addPosition("c5", [-1, 1, 6, 0]);
    design.addPosition("d5", [-1, 1, 6, 0]);
    design.addPosition("e5", [-1, 1, 6, 0]);
    design.addPosition("f5", [-1, 0, 6, 0]);
    design.addPosition("a4", [0, 1, 6, -6]);
    design.addPosition("b4", [-1, 1, 6, -6]);
    design.addPosition("c4", [-1, 1, 6, -6]);
    design.addPosition("d4", [-1, 1, 6, -6]);
    design.addPosition("e4", [-1, 1, 6, -6]);
    design.addPosition("f4", [-1, 0, 6, -6]);
    design.addPosition("a3", [0, 1, 6, -6]);
    design.addPosition("b3", [-1, 1, 6, -6]);
    design.addPosition("c3", [-1, 1, 6, -6]);
    design.addPosition("d3", [-1, 1, 6, -6]);
    design.addPosition("e3", [-1, 1, 6, -6]);
    design.addPosition("f3", [-1, 0, 6, -6]);
    design.addPosition("a2", [0, 1, 6, -6]);
    design.addPosition("b2", [-1, 1, 6, -6]);
    design.addPosition("c2", [-1, 1, 6, -6]);
    design.addPosition("d2", [-1, 1, 6, -6]);
    design.addPosition("e2", [-1, 1, 6, -6]);
    design.addPosition("f2", [-1, 0, 6, -6]);
    design.addPosition("a1", [0, 1, 0, -6]);
    design.addPosition("b1", [-1, 1, 0, -6]);
    design.addPosition("c1", [-1, 1, 0, -6]);
    design.addPosition("d1", [-1, 1, 0, -6]);
    design.addPosition("e1", [-1, 1, 0, -6]);
    design.addPosition("f1", [-1, 0, 0, -6]);

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
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
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

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 2, [3, 3], 1);
    design.addMove(0, 2, [2, 2], 1);
    design.addMove(0, 2, [0, 0], 1);
    design.addMove(0, 2, [1, 1], 1);
    design.addMove(0, 3, [], 2);

    design.reserve("White", "Stone", 12);
    design.reserve("Black", "Stone", 12);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
 
    view.defPosition("a5", 1, 1, 48, 48);
    view.defPosition("b5", 49, 1, 48, 48);
    view.defPosition("c5", 97, 1, 48, 48);
    view.defPosition("d5", 145, 1, 48, 48);
    view.defPosition("e5", 193, 1, 48, 48);
    view.defPosition("f5", 241, 1, 48, 48);
    view.defPosition("a4", 1, 49, 48, 48);
    view.defPosition("b4", 49, 49, 48, 48);
    view.defPosition("c4", 97, 49, 48, 48);
    view.defPosition("d4", 145, 49, 48, 48);
    view.defPosition("e4", 193, 49, 48, 48);
    view.defPosition("f4", 241, 49, 48, 48);
    view.defPosition("a3", 1, 97, 48, 48);
    view.defPosition("b3", 49, 97, 48, 48);
    view.defPosition("c3", 97, 97, 48, 48);
    view.defPosition("d3", 145, 97, 48, 48);
    view.defPosition("e3", 193, 97, 48, 48);
    view.defPosition("f3", 241, 97, 48, 48);
    view.defPosition("a2", 1, 145, 48, 48);
    view.defPosition("b2", 49, 145, 48, 48);
    view.defPosition("c2", 97, 145, 48, 48);
    view.defPosition("d2", 145, 145, 48, 48);
    view.defPosition("e2", 193, 145, 48, 48);
    view.defPosition("f2", 241, 145, 48, 48);
    view.defPosition("a1", 1, 193, 48, 48);
    view.defPosition("b1", 49, 193, 48, 48);
    view.defPosition("c1", 97, 193, 48, 48);
    view.defPosition("d1", 145, 193, 48, 48);
    view.defPosition("e1", 193, 193, 48, 48);
    view.defPosition("f1", 241, 193, 48, 48);
}
