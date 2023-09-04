Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'PpNnRrCcLlKk';

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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1]);

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

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("RedSoldier", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlackSoldier", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("RedHorse", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackHorse", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("RedChariot", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackChariot", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("RedCannon", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackCannon", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("RedLeopard", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackLeopard", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("RedGeneral", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackGeneral", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedSoldier", "You RedSoldier");
    view.defPiece("BlackSoldier", "You BlackSoldier");
    view.defPiece("RedHorse", "You RedHorse");
    view.defPiece("BlackHorse", "You BlackHorse");
    view.defPiece("RedChariot", "You RedChariot");
    view.defPiece("BlackChariot", "You BlackChariot");
    view.defPiece("RedCannon", "You RedCannon");
    view.defPiece("BlackCannon", "You BlackCannon");
    view.defPiece("RedLeopard", "You RedLeopard");
    view.defPiece("BlackLeopard", "You BlackLeopard");
    view.defPiece("RedGeneral", "You RedGeneral");
    view.defPiece("BlackGeneral", "You BlackGeneral");
 
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
}
