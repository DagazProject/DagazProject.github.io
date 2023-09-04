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
    design.checkVersion("mancala-setup", "2");
    design.checkVersion("mancala-view", "true");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("nx");
    design.addDirection("rv");

    design.addPlayer("South", [1, 0]);
    design.addPlayer("North", [0, 1]);

    design.addPosition("a2", [2, 1]);
    design.addPosition("b2", [-1, 2]);
    design.addPosition("a1", [1, -2]);
    design.addPosition("b1", [-2, -1]);

    design.addZone("home", 1, [2, 3]);
    design.addZone("home", 2, [0, 1]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Seed", 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("None", 1);

    design.setup("South", "Seed", 2);
    design.setup("South", "Seed", 3);
    design.setup("North", "Seed", 0);
    design.setup("North", "Seed", 1);
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
 
    view.defPosition("a2", 8, 8, 80, 80);
    view.defPosition("b2", 108, 8, 80, 80);
    view.defPosition("a1", 8, 108, 80, 80);
    view.defPosition("b1", 108, 108, 80, 80);
}
