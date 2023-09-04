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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "10");

    design.addDirection("s");  // 0
    design.addDirection("e");  // 1
    design.addDirection("w");  // 2
    design.addDirection("n");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("nw"); // 5
    design.addDirection("se"); // 6
    design.addDirection("sw"); // 7

    design.addPlayer("Blue", [3, 2, 1, 0, 7, 6, 5, 4]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a5", [5, 1, 0, 0, 0, 0, 6, 0]);
    design.addPosition("b5", [5, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [5, 1, -1, 0, 0, 0, 6, 4]);
    design.addPosition("d5", [5, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("e5", [5, 0, -1, 0, 0, 0, 0, 4]);
    design.addPosition("a4", [5, 1, 0, -5, 0, 0, 0, 0]);
    design.addPosition("b4", [5, 1, -1, -5, -4, -6, 6, 4]);
    design.addPosition("c4", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("d4", [5, 1, -1, -5, -4, -6, 6, 4]);
    design.addPosition("e4", [5, 0, -1, -5, 0, 0, 0, 0]);
    design.addPosition("a3", [5, 1, 0, -5, -4, 0, 6, 0]);
    design.addPosition("b3", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("c3", [5, 1, -1, -5, -4, -6, 6, 4]);
    design.addPosition("d3", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("e3", [5, 0, -1, -5, 0, -6, 0, 4]);
    design.addPosition("a2", [5, 1, 0, -5, 0, 0, 0, 0]);
    design.addPosition("b2", [5, 1, -1, -5, -4, -6, 6, 4]);
    design.addPosition("c2", [5, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("d2", [5, 1, -1, -5, -4, -6, 6, 4]);
    design.addPosition("e2", [5, 0, -1, -5, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -5, -4, 0, 0, 0]);
    design.addPosition("b1", [0, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 1, -1, -5, -4, -6, 0, 0]);
    design.addPosition("d1", [0, 1, -1, -5, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, -1, -5, 0, -6, 0, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [4], 0);

    design.setup("Blue", "Man", 20);
    design.setup("Blue", "Man", 21);
    design.setup("Blue", "Man", 22);
    design.setup("Blue", "Man", 23);
    design.setup("Blue", "Man", 24);
    design.setup("Blue", "Man", 15);
    design.setup("Blue", "Man", 10);
    design.setup("Blue", "Man", 19);
    design.setup("Green", "Man", 0);
    design.setup("Green", "Man", 1);
    design.setup("Green", "Man", 2);
    design.setup("Green", "Man", 3);
    design.setup("Green", "Man", 4);
    design.setup("Green", "Man", 5);
    design.setup("Green", "Man", 9);
    design.setup("Green", "Man", 14);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueMan", "Blue Man");
    view.defPiece("GreenMan", "Green Man");
 
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
