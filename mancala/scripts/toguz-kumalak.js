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
    design.checkVersion("mancala-setup", "9");
    design.checkVersion("mancala-view", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("toguz-kumalak-extension", "true");

    design.addDirection("nx");
    design.addDirection("sm");
    design.addDirection("fr");
    design.addDirection("er");

    design.addPlayer("South", [0, 1, 3, 2]);
    design.addPlayer("North", [0, 1, 3, 2]);

    design.addPosition("a2", [9, 17, 19, 18]);
    design.addPosition("b2", [-1, 15, 0, 0]);
    design.addPosition("c2", [-1, 13, 0, 0]);
    design.addPosition("d2", [-1, 11, 0, 0]);
    design.addPosition("e2", [-1, 9, 0, 0]);
    design.addPosition("f2", [-1, 7, 0, 0]);
    design.addPosition("g2", [-1, 5, 0, 0]);
    design.addPosition("h2", [-1, 3, 0, 0]);
    design.addPosition("i2", [-1, 1, 0, 0]);
    design.addPosition("a1", [1, -1, 0, 0]);
    design.addPosition("b1", [1, -3, 0, 0]);
    design.addPosition("c1", [1, -5, 0, 0]);
    design.addPosition("d1", [1, -7, 0, 0]);
    design.addPosition("e1", [1, -9, 0, 0]);
    design.addPosition("f1", [1, -11, 0, 0]);
    design.addPosition("g1", [1, -13, 0, 0]);
    design.addPosition("h1", [1, -15, 0, 0]);
    design.addPosition("i1", [-9, -17, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0]);

    design.addZone("home", 1, [9, 10, 11, 12, 13, 14, 15, 16, 17]);
    design.addZone("home", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    design.addZone("restricted", 2, [0, 17]);
    design.addZone("restricted", 1, [0, 17]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("Seed", 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("Tuzdyk", 1);

    design.addPiece("Kazan", 2);

    design.addPiece("None", 3);

    design.setup("South", "Seed", 9);
    design.setup("South", "Seed", 10);
    design.setup("South", "Seed", 11);
    design.setup("South", "Seed", 12);
    design.setup("South", "Seed", 13);
    design.setup("South", "Seed", 14);
    design.setup("South", "Seed", 15);
    design.setup("South", "Seed", 16);
    design.setup("South", "Seed", 17);
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
    view.defPiece("SouthTuzdyk", "South Tuzdyk");
    view.defPiece("NorthTuzdyk", "North Tuzdyk");
    view.defPiece("SouthKazan", "South Kazan");
    view.defPiece("NorthKazan", "North Kazan");
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
 
    view.defPosition("a2", 4, 9, 70, 270);
    view.defPosition("b2", 75, 9, 70, 270);
    view.defPosition("c2", 146, 9, 70, 270);
    view.defPosition("d2", 217, 9, 70, 270);
    view.defPosition("e2", 288, 9, 70, 270);
    view.defPosition("f2", 359, 9, 70, 270);
    view.defPosition("g2", 430, 9, 70, 270);
    view.defPosition("h2", 501, 9, 70, 270);
    view.defPosition("i2", 572, 9, 70, 270);
    view.defPosition("a1", 4, 543, 70, 270);
    view.defPosition("b1", 75, 543, 70, 270);
    view.defPosition("c1", 146, 543, 70, 270);
    view.defPosition("d1", 217, 543, 70, 270);
    view.defPosition("e1", 288, 543, 70, 270);
    view.defPosition("f1", 359, 543, 70, 270);
    view.defPosition("g1", 430, 543, 70, 270);
    view.defPosition("h1", 501, 543, 70, 270);
    view.defPosition("i1", 572, 543, 70, 270);
    view.defPosition("X2", 4, 288, 634, 120);
    view.defPosition("X1", 4, 416, 634, 120);
}
