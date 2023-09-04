Dagaz.Controller.persistense = "setup";
Dagaz.Controller.loseRefresh = false;
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
    design.checkVersion("mancala-setup", "8");
    design.checkVersion("mancala-view", "true");
    design.checkVersion("dakon-restrictions", "extended");
    design.checkVersion("progressive-levels", "true");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("sx"); // 0
    design.addDirection("nx"); // 1
    design.addDirection("fr"); // 2
    design.addDirection("er"); // 3
    design.addDirection("up"); // 4
    design.addDirection("dn"); // 5

    design.addPlayer("South", [0, 1, 2, 3, 5, 4]);
    design.addPlayer("North", [1, 0, 3, 2, 5, 4]);

    design.addPosition("a2", [1, 1, 16, 17, 0, 8]);
    design.addPosition("b2", [1, 1, 0, 0, 0, 8]);
    design.addPosition("c2", [1, 1, 0, 0, 0, 8]);
    design.addPosition("d2", [1, 1, 0, 0, 0, 8]);
    design.addPosition("e2", [1, 1, 0, 0, 0, 8]);
    design.addPosition("f2", [1, 1, 0, 0, 0, 8]);
    design.addPosition("g2", [1, 1, 0, 0, 0, 8]);
    design.addPosition("h2", [8, 10, 0, 0, 0, 8]);
    design.addPosition("a1", [8, -8, 0, 0, -8, 0]);
    design.addPosition("b1", [-1, -1, 0, 0, -8, 0]);
    design.addPosition("c1", [-1, -1, 0, 0, -8, 0]);
    design.addPosition("d1", [-1, -1, 0, 0, -8, 0]);
    design.addPosition("e1", [-1, -1, 0, 0, -8, 0]);
    design.addPosition("f1", [-1, -1, 0, 0, -8, 0]);
    design.addPosition("g1", [-1, -1, 0, 0, -8, 0]);
    design.addPosition("h1", [-1, -1, 0, 0, -8, 0]);
    design.addPosition("X1", [-16, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, -2, 0, 0, 0, 0]);

    design.addZone("home", 1, [8, 9, 10, 11, 12, 13, 14, 15]);
    design.addZone("home", 2, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("pool", 1, [16, 17]);
    design.addZone("pool", 2, [16, 17]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.LITERAL,	2);	// Dead
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-6);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Seed", 0);
    design.addMove(0, 0, [0, 0], 0);

    design.addPiece("None", 1);
    design.addPiece("Dead", 2);

    design.setup("South", "Seed", 8);
    design.setup("South", "Seed", 9);
    design.setup("South", "Seed", 10);
    design.setup("South", "Seed", 11);
    design.setup("South", "Seed", 12);
    design.setup("South", "Seed", 13);
    design.setup("South", "Seed", 14);
    design.setup("South", "Seed", 15);
    design.setup("North", "Seed", 0);
    design.setup("North", "Seed", 1);
    design.setup("North", "Seed", 2);
    design.setup("North", "Seed", 3);
    design.setup("North", "Seed", 4);
    design.setup("North", "Seed", 5);
    design.setup("North", "Seed", 6);
    design.setup("North", "Seed", 7);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthSeed", "South Seed");
    view.defPiece("NorthSeed", "North Seed");
    view.defPiece("SouthNone", "South None");
    view.defPiece("NorthNone", "North None");
    view.defPiece("SouthDead", "South Dead");
    view.defPiece("NorthDead", "North Dead");
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
 
    view.defPosition("a2", 168, 8, 80, 80);
    view.defPosition("b2", 268, 8, 80, 80);
    view.defPosition("c2", 368, 8, 80, 80);
    view.defPosition("d2", 468, 8, 80, 80);
    view.defPosition("e2", 568, 8, 80, 80);
    view.defPosition("f2", 668, 8, 80, 80);
    view.defPosition("g2", 768, 8, 80, 80);
    view.defPosition("h2", 868, 8, 80, 80);
    view.defPosition("a1", 168, 108, 80, 80);
    view.defPosition("b1", 268, 108, 80, 80);
    view.defPosition("c1", 368, 108, 80, 80);
    view.defPosition("d1", 468, 108, 80, 80);
    view.defPosition("e1", 568, 108, 80, 80);
    view.defPosition("f1", 668, 108, 80, 80);
    view.defPosition("g1", 768, 108, 80, 80);
    view.defPosition("h1", 868, 108, 80, 80);
    view.defPosition("X1", 8, 8, 140, 180);
    view.defPosition("X2", 968, 8, 140, 180);
}
