Dagaz.View.CLEAR_KO = true;
Dagaz.View.CHECK_CANVAS = true;

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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("mancala-setup", "3");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("nx");
    design.addDirection("fr");
    design.addDirection("er");

    design.addPlayer("South", [0, 1, 2]);
    design.addPlayer("North", [0, 2, 1]);

    design.addPosition("a3", [6, 18, 19]);
    design.addPosition("b3", [-1, 0, 0]);
    design.addPosition("c3", [-1, 0, 0]);
    design.addPosition("d3", [-1, 0, 0]);
    design.addPosition("e3", [-1, 0, 0]);
    design.addPosition("f3", [-1, 0, 0]);
    design.addPosition("a2", [1, 0, 0]);
    design.addPosition("b2", [1, 0, 0]);
    design.addPosition("c2", [4, 0, 0]);
    design.addPosition("d2", [-4, 0, 0]);
    design.addPosition("e2", [-1, 0, 0]);
    design.addPosition("f2", [-1, 0, 0]);
    design.addPosition("a1", [1, 0, 0]);
    design.addPosition("b1", [1, 0, 0]);
    design.addPosition("c1", [1, 0, 0]);
    design.addPosition("d1", [1, 0, 0]);
    design.addPosition("e1", [1, 0, 0]);
    design.addPosition("f1", [-6, 0, 0]);
    design.addPosition("X1", [0, 0, 0]);
    design.addPosition("X2", [0, 0, 0]);

    design.addZone("home", 1, [12, 13, 14, 15, 16, 17, 9, 10, 11]);
    design.addZone("home", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    design.addZone("pool", 1, [18, 19]);
    design.addZone("pool", 2, [18, 19]);
    design.addZone("eye", 1, [12, 13]);
    design.addZone("eye", 2, [4, 5]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Seed", 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("Wegue", 1);

    design.addPiece("None", 2);

    design.setup("South", "Seed", 12);
    design.setup("South", "Seed", 13);
    design.setup("South", "Seed", 14);
    design.setup("South", "Seed", 15);
    design.setup("South", "Seed", 16);
    design.setup("South", "Seed", 17);
    design.setup("South", "Seed", 9);
    design.setup("South", "Seed", 10);
    design.setup("South", "Seed", 11);
    design.setup("North", "Seed", 0);
    design.setup("North", "Seed", 1);
    design.setup("North", "Seed", 2);
    design.setup("North", "Seed", 3);
    design.setup("North", "Seed", 4);
    design.setup("North", "Seed", 5);
    design.setup("North", "Seed", 6);
    design.setup("North", "Seed", 7);
    design.setup("North", "Seed", 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthSeed", "South Seed");
    view.defPiece("NorthSeed", "North Seed");
    view.defPiece("SouthWegue", "South Wegue");
    view.defPiece("NorthWegue", "North Wegue");
    view.defPiece("SouthNone", "South None");
    view.defPiece("NorthNone", "North None");
    view.defPiece("0", "0");
    view.defPiece("1", "1");
    view.defPiece("2", "2");
    view.defPiece("3", "3");
    view.defPiece("4", "4");
    view.defPiece("5", "5");
    view.defPiece("6", "6");
    view.defPiece("7", "7");
    view.defPiece("8", "8");
    view.defPiece("9", "9");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a3", 168, 8, 80, 80);
    view.defPosition("b3", 268, 8, 80, 80);
    view.defPosition("c3", 368, 8, 80, 80);
    view.defPosition("d3", 468, 8, 80, 80);
    view.defPosition("e3", 568, 8, 80, 80);
    view.defPosition("f3", 668, 8, 80, 80);
    view.defPosition("a2", 168, 108, 80, 80);
    view.defPosition("b2", 268, 108, 80, 80);
    view.defPosition("c2", 368, 108, 80, 80);
    view.defPosition("d2", 468, 108, 80, 80);
    view.defPosition("e2", 568, 108, 80, 80);
    view.defPosition("f2", 668, 108, 80, 80);
    view.defPosition("a1", 168, 208, 80, 80);
    view.defPosition("b1", 268, 208, 80, 80);
    view.defPosition("c1", 368, 208, 80, 80);
    view.defPosition("d1", 468, 208, 80, 80);
    view.defPosition("e1", 568, 208, 80, 80);
    view.defPosition("f1", 668, 208, 80, 80);
    view.defPosition("X1", 768, 8, 140, 280);
    view.defPosition("X2", 8, 8, 140, 280);
}
