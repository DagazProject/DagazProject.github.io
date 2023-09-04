Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'MmPpNnBbRrCcAaKk';

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 10;

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

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a10", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i10", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a9", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h9", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("RedManchu", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlackManchu", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("RedSoldier", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackSoldier", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("RedHorse", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackHorse", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("RedElephant", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackElephant", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("RedChariot", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackChariot", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("RedCannon", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackCannon", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("RedMandarin", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 0);

    design.addPiece("BlackMandarin", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 0);

    design.addPiece("RedGeneral", 14);
    design.addDrop(14, 0, [], 0);
    design.addMove(14, 1, [], 0);

    design.addPiece("BlackGeneral", 15);
    design.addDrop(15, 0, [], 0);
    design.addMove(15, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedManchu", "You RedManchu");
    view.defPiece("BlackManchu", "You BlackManchu");
    view.defPiece("RedSoldier", "You RedSoldier");
    view.defPiece("BlackSoldier", "You BlackSoldier");
    view.defPiece("RedHorse", "You RedHorse");
    view.defPiece("BlackHorse", "You BlackHorse");
    view.defPiece("RedElephant", "You RedElephant");
    view.defPiece("BlackElephant", "You BlackElephant");
    view.defPiece("RedChariot", "You RedChariot");
    view.defPiece("BlackChariot", "You BlackChariot");
    view.defPiece("RedCannon", "You RedCannon");
    view.defPiece("BlackCannon", "You BlackCannon");
    view.defPiece("RedMandarin", "You RedMandarin");
    view.defPiece("BlackMandarin", "You BlackMandarin");
    view.defPiece("RedGeneral", "You RedGeneral");
    view.defPiece("BlackGeneral", "You BlackGeneral");
 
    view.defPosition("a10", 4, 5, 42, 42);
    view.defPosition("b10", 49, 5, 42, 42);
    view.defPosition("c10", 94, 5, 42, 42);
    view.defPosition("d10", 139, 5, 42, 42);
    view.defPosition("e10", 184, 5, 42, 42);
    view.defPosition("f10", 229, 5, 42, 42);
    view.defPosition("g10", 274, 5, 42, 42);
    view.defPosition("h10", 319, 5, 42, 42);
    view.defPosition("i10", 364, 5, 42, 42);
    view.defPosition("a9", 4, 50, 42, 42);
    view.defPosition("b9", 49, 50, 42, 42);
    view.defPosition("c9", 94, 50, 42, 42);
    view.defPosition("d9", 139, 50, 42, 42);
    view.defPosition("e9", 184, 50, 42, 42);
    view.defPosition("f9", 229, 50, 42, 42);
    view.defPosition("g9", 274, 50, 42, 42);
    view.defPosition("h9", 319, 50, 42, 42);
    view.defPosition("i9", 364, 50, 42, 42);
    view.defPosition("a8", 4, 95, 42, 42);
    view.defPosition("b8", 49, 95, 42, 42);
    view.defPosition("c8", 94, 95, 42, 42);
    view.defPosition("d8", 139, 95, 42, 42);
    view.defPosition("e8", 184, 95, 42, 42);
    view.defPosition("f8", 229, 95, 42, 42);
    view.defPosition("g8", 274, 95, 42, 42);
    view.defPosition("h8", 319, 95, 42, 42);
    view.defPosition("i8", 364, 95, 42, 42);
    view.defPosition("a7", 4, 140, 42, 42);
    view.defPosition("b7", 49, 140, 42, 42);
    view.defPosition("c7", 94, 140, 42, 42);
    view.defPosition("d7", 139, 140, 42, 42);
    view.defPosition("e7", 184, 140, 42, 42);
    view.defPosition("f7", 229, 140, 42, 42);
    view.defPosition("g7", 274, 140, 42, 42);
    view.defPosition("h7", 319, 140, 42, 42);
    view.defPosition("i7", 364, 140, 42, 42);
    view.defPosition("a6", 4, 185, 42, 42);
    view.defPosition("b6", 49, 185, 42, 42);
    view.defPosition("c6", 94, 185, 42, 42);
    view.defPosition("d6", 139, 185, 42, 42);
    view.defPosition("e6", 184, 185, 42, 42);
    view.defPosition("f6", 229, 185, 42, 42);
    view.defPosition("g6", 274, 185, 42, 42);
    view.defPosition("h6", 319, 185, 42, 42);
    view.defPosition("i6", 364, 185, 42, 42);
    view.defPosition("a5", 4, 230, 42, 42);
    view.defPosition("b5", 49, 230, 42, 42);
    view.defPosition("c5", 94, 230, 42, 42);
    view.defPosition("d5", 139, 230, 42, 42);
    view.defPosition("e5", 184, 230, 42, 42);
    view.defPosition("f5", 229, 230, 42, 42);
    view.defPosition("g5", 274, 230, 42, 42);
    view.defPosition("h5", 319, 230, 42, 42);
    view.defPosition("i5", 364, 230, 42, 42);
    view.defPosition("a4", 4, 275, 42, 42);
    view.defPosition("b4", 49, 275, 42, 42);
    view.defPosition("c4", 94, 275, 42, 42);
    view.defPosition("d4", 139, 275, 42, 42);
    view.defPosition("e4", 184, 275, 42, 42);
    view.defPosition("f4", 229, 275, 42, 42);
    view.defPosition("g4", 274, 275, 42, 42);
    view.defPosition("h4", 319, 275, 42, 42);
    view.defPosition("i4", 364, 275, 42, 42);
    view.defPosition("a3", 4, 320, 42, 42);
    view.defPosition("b3", 49, 320, 42, 42);
    view.defPosition("c3", 94, 320, 42, 42);
    view.defPosition("d3", 139, 320, 42, 42);
    view.defPosition("e3", 184, 320, 42, 42);
    view.defPosition("f3", 229, 320, 42, 42);
    view.defPosition("g3", 274, 320, 42, 42);
    view.defPosition("h3", 319, 320, 42, 42);
    view.defPosition("i3", 364, 320, 42, 42);
    view.defPosition("a2", 4, 365, 42, 42);
    view.defPosition("b2", 49, 365, 42, 42);
    view.defPosition("c2", 94, 365, 42, 42);
    view.defPosition("d2", 139, 365, 42, 42);
    view.defPosition("e2", 184, 365, 42, 42);
    view.defPosition("f2", 229, 365, 42, 42);
    view.defPosition("g2", 274, 365, 42, 42);
    view.defPosition("h2", 319, 365, 42, 42);
    view.defPosition("i2", 364, 365, 42, 42);
    view.defPosition("a1", 4, 410, 42, 42);
    view.defPosition("b1", 49, 410, 42, 42);
    view.defPosition("c1", 94, 410, 42, 42);
    view.defPosition("d1", 139, 410, 42, 42);
    view.defPosition("e1", 184, 410, 42, 42);
    view.defPosition("f1", 229, 410, 42, 42);
    view.defPosition("g1", 274, 410, 42, 42);
    view.defPosition("h1", 319, 410, 42, 42);
    view.defPosition("i1", 364, 410, 42, 42);
}
