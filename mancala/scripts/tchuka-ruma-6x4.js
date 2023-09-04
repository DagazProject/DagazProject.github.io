Dagaz.Controller.persistense = "none";
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
    design.checkVersion("mancala-setup", "4");
    design.checkVersion("mancala-view", "true");
    design.checkVersion("tchuka-ruma-extension", "7");

    design.addDirection("nx");

    design.addPlayer("You", [0]);

    design.addPosition("a1", [1]);
    design.addPosition("b1", [1]);
    design.addPosition("c1", [1]);
    design.addPosition("d1", [1]);
    design.addPosition("e1", [1]);
    design.addPosition("f1", [1]);
    design.addPosition("X", [-6]);

    design.addZone("home", 1, [0, 1, 2, 3, 4, 5]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// home
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Seed", 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("None", 1);

    design.setup("You", "Seed", 0);
    design.setup("You", "Seed", 1);
    design.setup("You", "Seed", 2);
    design.setup("You", "Seed", 3);
    design.setup("You", "Seed", 4);
    design.setup("You", "Seed", 5);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouSeed", "You Seed");
    view.defPiece("YouNone", "You None");
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
 
    view.defPosition("a1", 8, 8, 80, 80);
    view.defPosition("b1", 108, 8, 80, 80);
    view.defPosition("c1", 208, 8, 80, 80);
    view.defPosition("d1", 308, 8, 80, 80);
    view.defPosition("e1", 408, 8, 80, 80);
    view.defPosition("f1", 508, 8, 80, 80);
    view.defPosition("X", 608, 8, 140, 80);
}
