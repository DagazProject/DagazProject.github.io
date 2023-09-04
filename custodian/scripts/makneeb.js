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
    design.checkVersion("advisor-wait", "25");

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");

    design.addPlayer("Green", [3, 2, 1, 0]);
    design.addPlayer("Red", [0, 1, 2, 3]);

    design.addPosition("a8", [8, 1, 0, 0]);
    design.addPosition("b8", [8, 1, -1, 0]);
    design.addPosition("c8", [8, 1, -1, 0]);
    design.addPosition("d8", [8, 1, -1, 0]);
    design.addPosition("e8", [8, 1, -1, 0]);
    design.addPosition("f8", [8, 1, -1, 0]);
    design.addPosition("g8", [8, 1, -1, 0]);
    design.addPosition("h8", [8, 0, -1, 0]);
    design.addPosition("a7", [8, 1, 0, -8]);
    design.addPosition("b7", [8, 1, -1, -8]);
    design.addPosition("c7", [8, 1, -1, -8]);
    design.addPosition("d7", [8, 1, -1, -8]);
    design.addPosition("e7", [8, 1, -1, -8]);
    design.addPosition("f7", [8, 1, -1, -8]);
    design.addPosition("g7", [8, 1, -1, -8]);
    design.addPosition("h7", [8, 0, -1, -8]);
    design.addPosition("a6", [8, 1, 0, -8]);
    design.addPosition("b6", [8, 1, -1, -8]);
    design.addPosition("c6", [8, 1, -1, -8]);
    design.addPosition("d6", [8, 1, -1, -8]);
    design.addPosition("e6", [8, 1, -1, -8]);
    design.addPosition("f6", [8, 1, -1, -8]);
    design.addPosition("g6", [8, 1, -1, -8]);
    design.addPosition("h6", [8, 0, -1, -8]);
    design.addPosition("a5", [8, 1, 0, -8]);
    design.addPosition("b5", [8, 1, -1, -8]);
    design.addPosition("c5", [8, 1, -1, -8]);
    design.addPosition("d5", [8, 1, -1, -8]);
    design.addPosition("e5", [8, 1, -1, -8]);
    design.addPosition("f5", [8, 1, -1, -8]);
    design.addPosition("g5", [8, 1, -1, -8]);
    design.addPosition("h5", [8, 0, -1, -8]);
    design.addPosition("a4", [8, 1, 0, -8]);
    design.addPosition("b4", [8, 1, -1, -8]);
    design.addPosition("c4", [8, 1, -1, -8]);
    design.addPosition("d4", [8, 1, -1, -8]);
    design.addPosition("e4", [8, 1, -1, -8]);
    design.addPosition("f4", [8, 1, -1, -8]);
    design.addPosition("g4", [8, 1, -1, -8]);
    design.addPosition("h4", [8, 0, -1, -8]);
    design.addPosition("a3", [8, 1, 0, -8]);
    design.addPosition("b3", [8, 1, -1, -8]);
    design.addPosition("c3", [8, 1, -1, -8]);
    design.addPosition("d3", [8, 1, -1, -8]);
    design.addPosition("e3", [8, 1, -1, -8]);
    design.addPosition("f3", [8, 1, -1, -8]);
    design.addPosition("g3", [8, 1, -1, -8]);
    design.addPosition("h3", [8, 0, -1, -8]);
    design.addPosition("a2", [8, 1, 0, -8]);
    design.addPosition("b2", [8, 1, -1, -8]);
    design.addPosition("c2", [8, 1, -1, -8]);
    design.addPosition("d2", [8, 1, -1, -8]);
    design.addPosition("e2", [8, 1, -1, -8]);
    design.addPosition("f2", [8, 1, -1, -8]);
    design.addPosition("g2", [8, 1, -1, -8]);
    design.addPosition("h2", [8, 0, -1, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [0, 1, -1, -8]);
    design.addPosition("c1", [0, 1, -1, -8]);
    design.addPosition("d1", [0, 1, -1, -8]);
    design.addPosition("e1", [0, 1, -1, -8]);
    design.addPosition("f1", [0, 1, -1, -8]);
    design.addPosition("g1", [0, 1, -1, -8]);
    design.addPosition("h1", [0, 0, -1, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [1, 1], 0);

    design.setup("Green", "Man", 56);
    design.setup("Green", "Man", 57);
    design.setup("Green", "Man", 58);
    design.setup("Green", "Man", 59);
    design.setup("Green", "Man", 60);
    design.setup("Green", "Man", 61);
    design.setup("Green", "Man", 62);
    design.setup("Green", "Man", 63);
    design.setup("Red", "Man", 0);
    design.setup("Red", "Man", 1);
    design.setup("Red", "Man", 2);
    design.setup("Red", "Man", 3);
    design.setup("Red", "Man", 4);
    design.setup("Red", "Man", 5);
    design.setup("Red", "Man", 6);
    design.setup("Red", "Man", 7);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("GreenMan", "Green Man");
    view.defPiece("RedMan", "Red Man");
 
    view.defPosition("a8", 10, 10, 60, 60);
    view.defPosition("b8", 86, 10, 60, 60);
    view.defPosition("c8", 162, 10, 60, 60);
    view.defPosition("d8", 238, 10, 60, 60);
    view.defPosition("e8", 314, 10, 60, 60);
    view.defPosition("f8", 390, 10, 60, 60);
    view.defPosition("g8", 466, 10, 60, 60);
    view.defPosition("h8", 542, 10, 60, 60);
    view.defPosition("a7", 10, 86, 60, 60);
    view.defPosition("b7", 86, 86, 60, 60);
    view.defPosition("c7", 162, 86, 60, 60);
    view.defPosition("d7", 238, 86, 60, 60);
    view.defPosition("e7", 314, 86, 60, 60);
    view.defPosition("f7", 390, 86, 60, 60);
    view.defPosition("g7", 466, 86, 60, 60);
    view.defPosition("h7", 542, 86, 60, 60);
    view.defPosition("a6", 10, 162, 60, 60);
    view.defPosition("b6", 86, 162, 60, 60);
    view.defPosition("c6", 162, 162, 60, 60);
    view.defPosition("d6", 238, 162, 60, 60);
    view.defPosition("e6", 314, 162, 60, 60);
    view.defPosition("f6", 390, 162, 60, 60);
    view.defPosition("g6", 466, 162, 60, 60);
    view.defPosition("h6", 542, 162, 60, 60);
    view.defPosition("a5", 10, 238, 60, 60);
    view.defPosition("b5", 86, 238, 60, 60);
    view.defPosition("c5", 162, 238, 60, 60);
    view.defPosition("d5", 238, 238, 60, 60);
    view.defPosition("e5", 314, 238, 60, 60);
    view.defPosition("f5", 390, 238, 60, 60);
    view.defPosition("g5", 466, 238, 60, 60);
    view.defPosition("h5", 542, 238, 60, 60);
    view.defPosition("a4", 10, 314, 60, 60);
    view.defPosition("b4", 86, 314, 60, 60);
    view.defPosition("c4", 162, 314, 60, 60);
    view.defPosition("d4", 238, 314, 60, 60);
    view.defPosition("e4", 314, 314, 60, 60);
    view.defPosition("f4", 390, 314, 60, 60);
    view.defPosition("g4", 466, 314, 60, 60);
    view.defPosition("h4", 542, 314, 60, 60);
    view.defPosition("a3", 10, 390, 60, 60);
    view.defPosition("b3", 86, 390, 60, 60);
    view.defPosition("c3", 162, 390, 60, 60);
    view.defPosition("d3", 238, 390, 60, 60);
    view.defPosition("e3", 314, 390, 60, 60);
    view.defPosition("f3", 390, 390, 60, 60);
    view.defPosition("g3", 466, 390, 60, 60);
    view.defPosition("h3", 542, 390, 60, 60);
    view.defPosition("a2", 10, 466, 60, 60);
    view.defPosition("b2", 86, 466, 60, 60);
    view.defPosition("c2", 162, 466, 60, 60);
    view.defPosition("d2", 238, 466, 60, 60);
    view.defPosition("e2", 314, 466, 60, 60);
    view.defPosition("f2", 390, 466, 60, 60);
    view.defPosition("g2", 466, 466, 60, 60);
    view.defPosition("h2", 542, 466, 60, 60);
    view.defPosition("a1", 10, 542, 60, 60);
    view.defPosition("b1", 86, 542, 60, 60);
    view.defPosition("c1", 162, 542, 60, 60);
    view.defPosition("d1", 238, 542, 60, 60);
    view.defPosition("e1", 314, 542, 60, 60);
    view.defPosition("f1", 390, 542, 60, 60);
    view.defPosition("g1", 466, 542, 60, 60);
    view.defPosition("h1", 542, 542, 60, 60);
}
