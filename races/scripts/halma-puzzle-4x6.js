Dagaz.Controller.persistense = "none";

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

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("You", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a4", [0, 1, 6, 0, 0, 7, 0, 0]);
    design.addPosition("b4", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("c4", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("d4", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("e4", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("f4", [-1, 0, 6, 0, 0, 0, 5, 0]);
    design.addPosition("a3", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f3", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a2", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f2", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a1", [0, 1, 0, -5, -6, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("f1", [-1, 0, 0, 0, -6, 0, 0, -7]);

    design.addZone("goal-zone", 1, [3, 4, 5, 9, 10, 11, 15, 16, 17]);

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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [5, 5], 0);

    design.setup("You", "Man", 18);
    design.setup("You", "Man", 19);
    design.setup("You", "Man", 20);
    design.setup("You", "Man", 12);
    design.setup("You", "Man", 13);
    design.setup("You", "Man", 14);
    design.setup("You", "Man", 6);
    design.setup("You", "Man", 7);
    design.setup("You", "Man", 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouMan", "You Man");
 
    view.defPosition("a4", 2, 2, 50, 50);
    view.defPosition("b4", 52, 2, 50, 50);
    view.defPosition("c4", 102, 2, 50, 50);
    view.defPosition("d4", 152, 2, 50, 50);
    view.defPosition("e4", 202, 2, 50, 50);
    view.defPosition("f4", 252, 2, 50, 50);
    view.defPosition("a3", 2, 52, 50, 50);
    view.defPosition("b3", 52, 52, 50, 50);
    view.defPosition("c3", 102, 52, 50, 50);
    view.defPosition("d3", 152, 52, 50, 50);
    view.defPosition("e3", 202, 52, 50, 50);
    view.defPosition("f3", 252, 52, 50, 50);
    view.defPosition("a2", 2, 102, 50, 50);
    view.defPosition("b2", 52, 102, 50, 50);
    view.defPosition("c2", 102, 102, 50, 50);
    view.defPosition("d2", 152, 102, 50, 50);
    view.defPosition("e2", 202, 102, 50, 50);
    view.defPosition("f2", 252, 102, 50, 50);
    view.defPosition("a1", 2, 152, 50, 50);
    view.defPosition("b1", 52, 152, 50, 50);
    view.defPosition("c1", 102, 152, 50, 50);
    view.defPosition("d1", 152, 152, 50, 50);
    view.defPosition("e1", 202, 152, 50, 50);
    view.defPosition("f1", 252, 152, 50, 50);
}
