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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Red", [1, 0, 3, 2, 5, 4]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a4", [1, 0, 0, 8, 0, 9]);
    design.addPosition("b4", [1, -1, 0, 8, 0, 9]);
    design.addPosition("c4", [1, -1, 0, 8, 0, 9]);
    design.addPosition("d4", [0, -1, 0, 8, 0, 0]);
    design.addPosition("a2", [1, 0, 5, 8, 4, 9]);
    design.addPosition("b2", [1, -1, 5, 8, 4, 9]);
    design.addPosition("c2", [1, -1, 5, 8, 4, 9]);
    design.addPosition("d2", [0, -1, 0, 8, 4, 0]);
    design.addPosition("a3", [1, 0, -8, 0, 0, -4]);
    design.addPosition("b3", [1, -1, -8, -5, -9, -4]);
    design.addPosition("c3", [1, -1, -8, -5, -9, -4]);
    design.addPosition("d3", [0, -1, -8, -5, -9, -4]);
    design.addPosition("a1", [1, 0, -8, 0, 0, 0]);
    design.addPosition("b1", [1, -1, -8, 0, -9, 0]);
    design.addPosition("c1", [1, -1, -8, 0, -9, 0]);
    design.addPosition("d1", [0, -1, -8, 0, -9, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);

    design.setup("Red", "Man", 12);
    design.setup("Red", "Man", 13);
    design.setup("Red", "Man", 14);
    design.setup("Red", "Man", 15);
    design.setup("Blue", "Man", 0);
    design.setup("Blue", "Man", 1);
    design.setup("Blue", "Man", 2);
    design.setup("Blue", "Man", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedMan", "Red Man");
    view.defPiece("BlueMan", "Blue Man");
 
    view.defPosition("a4", 124, 95, 130, 113);
    view.defPosition("b4", 283, 95, 130, 113);
    view.defPosition("c4", 442, 95, 130, 113);
    view.defPosition("d4", 601, 95, 130, 113);
    view.defPosition("a2", 124, 413, 130, 113);
    view.defPosition("b2", 283, 413, 130, 113);
    view.defPosition("c2", 442, 413, 130, 113);
    view.defPosition("d2", 601, 413, 130, 113);
    view.defPosition("a3", 44, 253, 130, 113);
    view.defPosition("b3", 203, 253, 130, 113);
    view.defPosition("c3", 362, 253, 130, 113);
    view.defPosition("d3", 521, 253, 130, 113);
    view.defPosition("a1", 44, 571, 130, 113);
    view.defPosition("b1", 203, 571, 130, 113);
    view.defPosition("c1", 362, 571, 130, 113);
    view.defPosition("d1", 521, 571, 130, 113);
}
