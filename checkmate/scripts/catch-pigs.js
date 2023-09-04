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
    design.checkVersion("show-blink", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("White", [1, 0, 3, 2]);
    design.addPlayer("Black", [0, 1, 2, 3]);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(2);
    design.addTurn(2);

    design.addPosition("a5", [0, 1, 8, 0]);
    design.addPosition("b5", [-1, 1, 8, 0]);
    design.addPosition("c5", [-1, 1, 8, 0]);
    design.addPosition("d5", [-1, 1, 8, 0]);
    design.addPosition("e5", [-1, 1, 8, 0]);
    design.addPosition("f5", [-1, 1, 8, 0]);
    design.addPosition("g5", [-1, 1, 8, 0]);
    design.addPosition("h5", [-1, 0, 8, 0]);
    design.addPosition("a4", [0, 1, 8, -8]);
    design.addPosition("b4", [-1, 1, 8, -8]);
    design.addPosition("c4", [-1, 1, 8, -8]);
    design.addPosition("d4", [-1, 1, 8, -8]);
    design.addPosition("e4", [-1, 1, 8, -8]);
    design.addPosition("f4", [-1, 1, 8, -8]);
    design.addPosition("g4", [-1, 1, 8, -8]);
    design.addPosition("h4", [-1, 0, 8, -8]);
    design.addPosition("a3", [0, 1, 8, -8]);
    design.addPosition("b3", [-1, 1, 8, -8]);
    design.addPosition("c3", [-1, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 1, 8, -8]);
    design.addPosition("f3", [-1, 1, 8, -8]);
    design.addPosition("g3", [-1, 1, 8, -8]);
    design.addPosition("h3", [-1, 0, 8, -8]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
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

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("LeftPig", 1);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [1], 0);

    design.addPiece("RightPig", 2);
    design.addMove(2, 1, [3], 0);
    design.addMove(2, 1, [2], 0);
    design.addMove(2, 1, [0], 0);
    design.addMove(2, 1, [1], 0);

    design.setup("White", "Man", 18);
    design.setup("White", "Man", 21);
    design.setup("Black", "LeftPig", 16);
    design.setup("Black", "RightPig", 23);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackLeftPig", "Black LeftPig");
    view.defPiece("BlackRightPig", "Black RightPig");
 
    view.defPosition("a5", 2, 2, 50, 50);
    view.defPosition("b5", 52, 2, 50, 50);
    view.defPosition("c5", 102, 2, 50, 50);
    view.defPosition("d5", 152, 2, 50, 50);
    view.defPosition("e5", 202, 2, 50, 50);
    view.defPosition("f5", 252, 2, 50, 50);
    view.defPosition("g5", 302, 2, 50, 50);
    view.defPosition("h5", 352, 2, 50, 50);
    view.defPosition("a4", 2, 52, 50, 50);
    view.defPosition("b4", 52, 52, 50, 50);
    view.defPosition("c4", 102, 52, 50, 50);
    view.defPosition("d4", 152, 52, 50, 50);
    view.defPosition("e4", 202, 52, 50, 50);
    view.defPosition("f4", 252, 52, 50, 50);
    view.defPosition("g4", 302, 52, 50, 50);
    view.defPosition("h4", 352, 52, 50, 50);
    view.defPosition("a3", 2, 102, 50, 50);
    view.defPosition("b3", 52, 102, 50, 50);
    view.defPosition("c3", 102, 102, 50, 50);
    view.defPosition("d3", 152, 102, 50, 50);
    view.defPosition("e3", 202, 102, 50, 50);
    view.defPosition("f3", 252, 102, 50, 50);
    view.defPosition("g3", 302, 102, 50, 50);
    view.defPosition("h3", 352, 102, 50, 50);
    view.defPosition("a2", 2, 152, 50, 50);
    view.defPosition("b2", 52, 152, 50, 50);
    view.defPosition("c2", 102, 152, 50, 50);
    view.defPosition("d2", 152, 152, 50, 50);
    view.defPosition("e2", 202, 152, 50, 50);
    view.defPosition("f2", 252, 152, 50, 50);
    view.defPosition("g2", 302, 152, 50, 50);
    view.defPosition("h2", 352, 152, 50, 50);
    view.defPosition("a1", 2, 202, 50, 50);
    view.defPosition("b1", 52, 202, 50, 50);
    view.defPosition("c1", 102, 202, 50, 50);
    view.defPosition("d1", 152, 202, 50, 50);
    view.defPosition("e1", 202, 202, 50, 50);
    view.defPosition("f1", 252, 202, 50, 50);
    view.defPosition("g1", 302, 202, 50, 50);
    view.defPosition("h1", 352, 202, 50, 50);
}
