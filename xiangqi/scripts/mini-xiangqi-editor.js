Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'PpNnRrCcAaKk';

Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 6;

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

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7

    design.addPlayer("You", [1, 0, 4, 6, 2, 7, 3, 5]);

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

    design.addPiece("RedMandarin", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackMandarin", 9);
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
    view.defPiece("RedMandarin", "You RedMandarin");
    view.defPiece("BlackMandarin", "You BlackMandarin");
    view.defPiece("RedGeneral", "You RedGeneral");
    view.defPiece("BlackGeneral", "You BlackGeneral");
 
    view.defPosition("a6", 4, 5, 42, 42);
    view.defPosition("b6", 49, 5, 42, 42);
    view.defPosition("c6", 94, 5, 42, 42);
    view.defPosition("d6", 139, 5, 42, 42);
    view.defPosition("e6", 184, 5, 42, 42);
    view.defPosition("f6", 229, 5, 42, 42);
    view.defPosition("g6", 274, 5, 42, 42);
    view.defPosition("a5", 4, 50, 42, 42);
    view.defPosition("b5", 49, 50, 42, 42);
    view.defPosition("c5", 94, 50, 42, 42);
    view.defPosition("d5", 139, 50, 42, 42);
    view.defPosition("e5", 184, 50, 42, 42);
    view.defPosition("f5", 229, 50, 42, 42);
    view.defPosition("g5", 274, 50, 42, 42);
    view.defPosition("a4", 4, 95, 42, 42);
    view.defPosition("b4", 49, 95, 42, 42);
    view.defPosition("c4", 94, 95, 42, 42);
    view.defPosition("d4", 139, 95, 42, 42);
    view.defPosition("e4", 184, 95, 42, 42);
    view.defPosition("f4", 229, 95, 42, 42);
    view.defPosition("g4", 274, 95, 42, 42);
    view.defPosition("a3", 4, 140, 42, 42);
    view.defPosition("b3", 49, 140, 42, 42);
    view.defPosition("c3", 94, 140, 42, 42);
    view.defPosition("d3", 139, 140, 42, 42);
    view.defPosition("e3", 184, 140, 42, 42);
    view.defPosition("f3", 229, 140, 42, 42);
    view.defPosition("g3", 274, 140, 42, 42);
    view.defPosition("a2", 4, 185, 42, 42);
    view.defPosition("b2", 49, 185, 42, 42);
    view.defPosition("c2", 94, 185, 42, 42);
    view.defPosition("d2", 139, 185, 42, 42);
    view.defPosition("e2", 184, 185, 42, 42);
    view.defPosition("f2", 229, 185, 42, 42);
    view.defPosition("g2", 274, 185, 42, 42);
    view.defPosition("a1", 4, 230, 42, 42);
    view.defPosition("b1", 49, 230, 42, 42);
    view.defPosition("c1", 94, 230, 42, 42);
    view.defPosition("d1", 139, 230, 42, 42);
    view.defPosition("e1", 184, 230, 42, 42);
    view.defPosition("f1", 229, 230, 42, 42);
    view.defPosition("g1", 274, 230, 42, 42);
}
