Dagaz.AI.NOISE_FACTOR = 100;

Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 7;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("Red", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a7", [8, 7, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("c7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("d7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("e7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("f7", [8, 7, 6, 1, -1, 0, 0, 0]);
    design.addPosition("g7", [0, 7, 6, 0, -1, 0, 0, 0]);
    design.addPosition("a6", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f6", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g6", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a5", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f5", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g5", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a4", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f4", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g4", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a3", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f3", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g3", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a2", [8, 7, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("c2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("d2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("e2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("f2", [8, 7, 6, 1, -1, -6, -8, -7]);
    design.addPosition("g2", [0, 7, 6, 0, -1, 0, -8, -7]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -6, 0, -7]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -6, -8, -7]);
    design.addPosition("g1", [0, 0, 0, 0, -1, 0, -8, -7]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("fortress", 1, [44, 45, 46, 37, 38, 39, 30, 31, 32]);
    design.addZone("fortress", 2, [2, 3, 4, 9, 10, 11, 16, 17, 18]);
    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
    design.addZone("promotion", 2, [42, 43, 44, 45, 46, 47, 48, 35, 36, 37, 38, 39, 40, 41]);

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
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-5);
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Horse", 1);
    design.addMove(1, 1, [7, 6], 0);
    design.addMove(1, 1, [7, 5], 0);
    design.addMove(1, 1, [1, 2], 0);
    design.addMove(1, 1, [1, 0], 0);
    design.addMove(1, 1, [4, 6], 0);
    design.addMove(1, 1, [3, 5], 0);
    design.addMove(1, 1, [4, 2], 0);
    design.addMove(1, 1, [3, 0], 0);

    design.addPiece("Chariot", 2);
    design.addMove(2, 2, [7, 7], 0);
    design.addMove(2, 2, [1, 1], 0);
    design.addMove(2, 2, [4, 4], 0);
    design.addMove(2, 2, [3, 3], 0);

    design.addPiece("Cannon", 3);
    design.addMove(3, 3, [7, 7, 7, 7], 0);
    design.addMove(3, 3, [1, 1, 1, 1], 0);
    design.addMove(3, 3, [4, 4, 4, 4], 0);
    design.addMove(3, 3, [3, 3, 3, 3], 0);

    design.addPiece("Leopard", 4);
    design.addMove(4, 4, [7], 0);
    design.addMove(4, 4, [1], 0);
    design.addMove(4, 4, [4], 0);
    design.addMove(4, 4, [3], 0);
    design.addMove(4, 5, [5, 5], 0);
    design.addMove(4, 5, [2, 2], 0);
    design.addMove(4, 5, [6, 6], 0);
    design.addMove(4, 5, [0, 0], 0);

    design.addPiece("General", 5);
    design.addMove(5, 6, [7], 0);
    design.addMove(5, 6, [1], 0);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 6, [3], 0);

    design.setup("Red", "Soldier", 35);
    design.setup("Red", "Soldier", 37);
    design.setup("Red", "Soldier", 38);
    design.setup("Red", "Soldier", 39);
    design.setup("Red", "Soldier", 41);
    design.setup("Red", "Horse", 44);
    design.setup("Red", "Horse", 46);
    design.setup("Red", "Chariot", 42);
    design.setup("Red", "Chariot", 48);
    design.setup("Red", "Cannon", 36);
    design.setup("Red", "Cannon", 40);
    design.setup("Red", "Leopard", 43);
    design.setup("Red", "Leopard", 47);
    design.setup("Red", "General", 45);
    design.setup("Black", "Soldier", 7);
    design.setup("Black", "Soldier", 9);
    design.setup("Black", "Soldier", 10);
    design.setup("Black", "Soldier", 11);
    design.setup("Black", "Soldier", 13);
    design.setup("Black", "Horse", 2);
    design.setup("Black", "Horse", 4);
    design.setup("Black", "Chariot", 0);
    design.setup("Black", "Chariot", 6);
    design.setup("Black", "Cannon", 8);
    design.setup("Black", "Cannon", 12);
    design.setup("Black", "Leopard", 1);
    design.setup("Black", "Leopard", 5);
    design.setup("Black", "General", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedSoldier", "Red Soldier");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedLeopard", "Red Leopard");
    view.defPiece("BlackLeopard", "Black Leopard");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a7", 4, 5, 42, 42);
    view.defPosition("b7", 49, 5, 42, 42);
    view.defPosition("c7", 94, 5, 42, 42);
    view.defPosition("d7", 139, 5, 42, 42);
    view.defPosition("e7", 184, 5, 42, 42);
    view.defPosition("f7", 229, 5, 42, 42);
    view.defPosition("g7", 274, 5, 42, 42);
    view.defPosition("a6", 4, 50, 42, 42);
    view.defPosition("b6", 49, 50, 42, 42);
    view.defPosition("c6", 94, 50, 42, 42);
    view.defPosition("d6", 139, 50, 42, 42);
    view.defPosition("e6", 184, 50, 42, 42);
    view.defPosition("f6", 229, 50, 42, 42);
    view.defPosition("g6", 274, 50, 42, 42);
    view.defPosition("a5", 4, 95, 42, 42);
    view.defPosition("b5", 49, 95, 42, 42);
    view.defPosition("c5", 94, 95, 42, 42);
    view.defPosition("d5", 139, 95, 42, 42);
    view.defPosition("e5", 184, 95, 42, 42);
    view.defPosition("f5", 229, 95, 42, 42);
    view.defPosition("g5", 274, 95, 42, 42);
    view.defPosition("a4", 4, 140, 42, 42);
    view.defPosition("b4", 49, 140, 42, 42);
    view.defPosition("c4", 94, 140, 42, 42);
    view.defPosition("d4", 139, 140, 42, 42);
    view.defPosition("e4", 184, 140, 42, 42);
    view.defPosition("f4", 229, 140, 42, 42);
    view.defPosition("g4", 274, 140, 42, 42);
    view.defPosition("a3", 4, 185, 42, 42);
    view.defPosition("b3", 49, 185, 42, 42);
    view.defPosition("c3", 94, 185, 42, 42);
    view.defPosition("d3", 139, 185, 42, 42);
    view.defPosition("e3", 184, 185, 42, 42);
    view.defPosition("f3", 229, 185, 42, 42);
    view.defPosition("g3", 274, 185, 42, 42);
    view.defPosition("a2", 4, 230, 42, 42);
    view.defPosition("b2", 49, 230, 42, 42);
    view.defPosition("c2", 94, 230, 42, 42);
    view.defPosition("d2", 139, 230, 42, 42);
    view.defPosition("e2", 184, 230, 42, 42);
    view.defPosition("f2", 229, 230, 42, 42);
    view.defPosition("g2", 274, 230, 42, 42);
    view.defPosition("a1", 4, 275, 42, 42);
    view.defPosition("b1", 49, 275, 42, 42);
    view.defPosition("c1", 94, 275, 42, 42);
    view.defPosition("d1", 139, 275, 42, 42);
    view.defPosition("e1", 184, 275, 42, 42);
    view.defPosition("f1", 229, 275, 42, 42);
    view.defPosition("g1", 274, 275, 42, 42);

    view.defPopup("Promote", 26, 100);
    view.defPopupPosition("X1", 0, 7, 68, 68);
    view.defPopupPosition("X2", 50, 7, 68, 68);
    view.defPopupPosition("X3", 100, 7, 68, 68);
    view.defPopupPosition("X4", 150, 7, 68, 68);
    view.defPopupPosition("X5", 200, 7, 68, 68);
}
