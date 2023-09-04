Dagaz.Controller.persistense = "session";
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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("mancala-setup", "4");
    design.checkVersion("mancala-view", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("ohojichi-extension", "8");

    design.addDirection("nx");
    design.addDirection("rv");
    design.addDirection("tn");
    design.addDirection("ts");
    design.addDirection("ss");
    design.addDirection("ns");

    design.addPlayer("South", [1, 0, 2, 3, 4, 5]);
    design.addPlayer("North", [0, 1, 3, 2, 5, 4]);

    design.addPosition("a8", [2, 1, 1, 8, 1, 14]);
    design.addPosition("b8", [-1, 2, 1, 7, 0, 0]);
    design.addPosition("a7", [2, -2, 1, 6, 0, 0]);
    design.addPosition("b7", [-2, 2, 1, 5, 0, 0]);
    design.addPosition("a6", [2, -2, 1, 4, 0, 0]);
    design.addPosition("b6", [-2, 2, 1, 3, 0, 0]);
    design.addPosition("a5", [1, -2, 1, 2, 0, 0]);
    design.addPosition("b5", [-2, -1, 0, 1, 0, 0]);
    design.addPosition("a4", [2, 1, -8, 1, 0, 0]);
    design.addPosition("b4", [-1, 2, -9, 1, 0, 0]);
    design.addPosition("a3", [2, -2, -10, 1, 0, 0]);
    design.addPosition("b3", [-2, 2, -11, 1, 0, 0]);
    design.addPosition("a2", [2, -2, -12, 1, 0, 0]);
    design.addPosition("b2", [-2, 2, -13, 1, 0, 0]);
    design.addPosition("a1", [1, -2, -14, 1, 0, 0]);
    design.addPosition("b1", [-2, -1, -15, 0, 0, 0]);

    design.addZone("home", 1, [14, 12, 10, 8, 15, 13, 11, 9]);
    design.addZone("home", 2, [6, 4, 2, 0, 7, 5, 3, 1]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// $2
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-7);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Seed", 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [2, 2], 1);

    design.addPiece("None", 1);

    design.setup("South", "Seed", 14);
    design.setup("South", "Seed", 12);
    design.setup("South", "Seed", 10);
    design.setup("South", "Seed", 8);
    design.setup("South", "Seed", 15);
    design.setup("South", "Seed", 13);
    design.setup("South", "Seed", 11);
    design.setup("South", "Seed", 9);
    design.setup("North", "Seed", 6);
    design.setup("North", "Seed", 4);
    design.setup("North", "Seed", 2);
    design.setup("North", "Seed", 0);
    design.setup("North", "Seed", 7);
    design.setup("North", "Seed", 5);
    design.setup("North", "Seed", 3);
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
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 8, 8, 80, 80);
    view.defPosition("b8", 108, 8, 80, 80);
    view.defPosition("a7", 8, 108, 80, 80);
    view.defPosition("b7", 108, 108, 80, 80);
    view.defPosition("a6", 8, 208, 80, 80);
    view.defPosition("b6", 108, 208, 80, 80);
    view.defPosition("a5", 8, 308, 80, 80);
    view.defPosition("b5", 108, 308, 80, 80);
    view.defPosition("a4", 8, 408, 80, 80);
    view.defPosition("b4", 108, 408, 80, 80);
    view.defPosition("a3", 8, 508, 80, 80);
    view.defPosition("b3", 108, 508, 80, 80);
    view.defPosition("a2", 8, 608, 80, 80);
    view.defPosition("b2", 108, 608, 80, 80);
    view.defPosition("a1", 8, 708, 80, 80);
    view.defPosition("b1", 108, 708, 80, 80);
}
