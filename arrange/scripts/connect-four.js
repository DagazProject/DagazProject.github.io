Dagaz.View.DROPS_ALPHA = 0.15;
Dagaz.AI.AI_FRAME      = 1000;

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
    design.checkVersion("show-drops", "all");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("animate-redo", "false");
    design.checkVersion("connect-four-restrictions", "true");
    design.checkVersion("connect-four-extension", "true");
    design.checkVersion("connect-four-goal", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Blue", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a6", [0, 1, 7, 0, 0, 8, 0, 0]);
    design.addPosition("b6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("c6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("d6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("e6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("f6", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("g6", [-1, 0, 7, 0, 0, 0, 6, 0]);
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

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("RedStone", "Red Stone");
 
    view.defPosition("a6", 2, 2, 50, 50);
    view.defPosition("b6", 52, 2, 50, 50);
    view.defPosition("c6", 102, 2, 50, 50);
    view.defPosition("d6", 152, 2, 50, 50);
    view.defPosition("e6", 202, 2, 50, 50);
    view.defPosition("f6", 252, 2, 50, 50);
    view.defPosition("g6", 302, 2, 50, 50);
    view.defPosition("a5", 2, 52, 50, 50);
    view.defPosition("b5", 52, 52, 50, 50);
    view.defPosition("c5", 102, 52, 50, 50);
    view.defPosition("d5", 152, 52, 50, 50);
    view.defPosition("e5", 202, 52, 50, 50);
    view.defPosition("f5", 252, 52, 50, 50);
    view.defPosition("g5", 302, 52, 50, 50);
    view.defPosition("a4", 2, 102, 50, 50);
    view.defPosition("b4", 52, 102, 50, 50);
    view.defPosition("c4", 102, 102, 50, 50);
    view.defPosition("d4", 152, 102, 50, 50);
    view.defPosition("e4", 202, 102, 50, 50);
    view.defPosition("f4", 252, 102, 50, 50);
    view.defPosition("g4", 302, 102, 50, 50);
    view.defPosition("a3", 2, 152, 50, 50);
    view.defPosition("b3", 52, 152, 50, 50);
    view.defPosition("c3", 102, 152, 50, 50);
    view.defPosition("d3", 152, 152, 50, 50);
    view.defPosition("e3", 202, 152, 50, 50);
    view.defPosition("f3", 252, 152, 50, 50);
    view.defPosition("g3", 302, 152, 50, 50);
    view.defPosition("a2", 2, 202, 50, 50);
    view.defPosition("b2", 52, 202, 50, 50);
    view.defPosition("c2", 102, 202, 50, 50);
    view.defPosition("d2", 152, 202, 50, 50);
    view.defPosition("e2", 202, 202, 50, 50);
    view.defPosition("f2", 252, 202, 50, 50);
    view.defPosition("g2", 302, 202, 50, 50);
    view.defPosition("a1", 2, 252, 50, 50);
    view.defPosition("b1", 52, 252, 50, 50);
    view.defPosition("c1", 102, 252, 50, 50);
    view.defPosition("d1", 152, 252, 50, 50);
    view.defPosition("e1", 202, 252, 50, 50);
    view.defPosition("f1", 252, 252, 50, 50);
    view.defPosition("g1", 302, 252, 50, 50);
}
