Dagaz.View.CLEAR_KO = true;

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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("mancala-setup", "2");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("nx"); // 0
    design.addDirection("fr"); // 1
    design.addDirection("er"); // 2
    design.addDirection("su"); // 3
    design.addDirection("nu"); // 4

    design.addPlayer("South", [0, 1, 2, 3, 4]);
    design.addPlayer("North", [0, 2, 1, 4, 3]);

    design.addPosition("a4", [7, 29, 28, 0, 0]);
    design.addPosition("b4", [-1, 0, 0, 0, 0]);
    design.addPosition("c4", [-1, 0, 0, 0, 0]);
    design.addPosition("d4", [-1, 0, 0, 0, 0]);
    design.addPosition("e4", [-1, 0, 0, 0, 0]);
    design.addPosition("f4", [-1, 0, 0, 0, 0]);
    design.addPosition("g4", [-1, 0, 0, 0, 0]);
    design.addPosition("a3", [1, 0, 0, -7, 7]);
    design.addPosition("b3", [1, 0, 0, -7, 7]);
    design.addPosition("c3", [1, 0, 0, -7, 7]);
    design.addPosition("d3", [1, 0, 0, -7, 7]);
    design.addPosition("e3", [1, 0, 0, -7, 7]);
    design.addPosition("f3", [1, 0, 0, -7, 7]);
    design.addPosition("g3", [-7, 0, 0, -7, 7]);
    design.addPosition("a2", [7, 0, 0, -7, 7]);
    design.addPosition("b2", [-1, 0, 0, -7, 7]);
    design.addPosition("c2", [-1, 0, 0, -7, 7]);
    design.addPosition("d2", [-1, 0, 0, -7, 7]);
    design.addPosition("e2", [-1, 0, 0, -7, 7]);
    design.addPosition("f2", [-1, 0, 0, -7, 7]);
    design.addPosition("g2", [-1, 0, 0, -7, 7]);
    design.addPosition("a1", [1, 0, 0, 0, 0]);
    design.addPosition("b1", [1, 0, 0, 0, 0]);
    design.addPosition("c1", [1, 0, 0, 0, 0]);
    design.addPosition("d1", [1, 0, 0, 0, 0]);
    design.addPosition("e1", [1, 0, 0, 0, 0]);
    design.addPosition("f1", [1, 0, 0, 0, 0]);
    design.addPosition("g1", [-7, 0, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0]);

    design.addZone("pool", 1, [28, 29]);
    design.addZone("pool", 2, [28, 29]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Seed", 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("None", 1);

    design.setup("South", "Seed", 21);
    design.setup("South", "Seed", 22);
    design.setup("South", "Seed", 23);
    design.setup("South", "Seed", 24);
    design.setup("South", "Seed", 25);
    design.setup("South", "Seed", 26);
    design.setup("South", "Seed", 27);
    design.setup("South", "Seed", 14);
    design.setup("South", "Seed", 15);
    design.setup("South", "Seed", 16);
    design.setup("South", "Seed", 17);
    design.setup("South", "Seed", 18);
    design.setup("South", "Seed", 19);
    design.setup("South", "Seed", 20);
    design.setup("North", "Seed", 7);
    design.setup("North", "Seed", 8);
    design.setup("North", "Seed", 9);
    design.setup("North", "Seed", 10);
    design.setup("North", "Seed", 11);
    design.setup("North", "Seed", 12);
    design.setup("North", "Seed", 13);
    design.setup("North", "Seed", 0);
    design.setup("North", "Seed", 1);
    design.setup("North", "Seed", 2);
    design.setup("North", "Seed", 3);
    design.setup("North", "Seed", 4);
    design.setup("North", "Seed", 5);
    design.setup("North", "Seed", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthSeed", "South Seed");
    view.defPiece("NorthSeed", "North Seed");
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
 
    view.defPosition("a4", 168, 8, 80, 80);
    view.defPosition("b4", 268, 8, 80, 80);
    view.defPosition("c4", 368, 8, 80, 80);
    view.defPosition("d4", 468, 8, 80, 80);
    view.defPosition("e4", 568, 8, 80, 80);
    view.defPosition("f4", 668, 8, 80, 80);
    view.defPosition("g4", 768, 8, 80, 80);
    view.defPosition("a3", 168, 108, 80, 80);
    view.defPosition("b3", 268, 108, 80, 80);
    view.defPosition("c3", 368, 108, 80, 80);
    view.defPosition("d3", 468, 108, 80, 80);
    view.defPosition("e3", 568, 108, 80, 80);
    view.defPosition("f3", 668, 108, 80, 80);
    view.defPosition("g3", 768, 108, 80, 80);
    view.defPosition("a2", 168, 208, 80, 80);
    view.defPosition("b2", 268, 208, 80, 80);
    view.defPosition("c2", 368, 208, 80, 80);
    view.defPosition("d2", 468, 208, 80, 80);
    view.defPosition("e2", 568, 208, 80, 80);
    view.defPosition("f2", 668, 208, 80, 80);
    view.defPosition("g2", 768, 208, 80, 80);
    view.defPosition("a1", 168, 308, 80, 80);
    view.defPosition("b1", 268, 308, 80, 80);
    view.defPosition("c1", 368, 308, 80, 80);
    view.defPosition("d1", 468, 308, 80, 80);
    view.defPosition("e1", 568, 308, 80, 80);
    view.defPosition("f1", 668, 308, 80, 80);
    view.defPosition("g1", 768, 308, 80, 80);
    view.defPosition("X1", 8, 8, 140, 380);
    view.defPosition("X2", 868, 8, 140, 380);
}
