Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'PpNnBbRrCcGgAaKk';

Dagaz.Model.WIDTH  = 11;
Dagaz.Model.HEIGHT = 11;

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

    design.addDirection("nn"); // 0
    design.addDirection("ss"); // 1
    design.addDirection("se"); // 2
    design.addDirection("s");  // 3
    design.addDirection("sw"); // 4
    design.addDirection("e");  // 5
    design.addDirection("w");  // 6
    design.addDirection("ne"); // 7
    design.addDirection("nw"); // 8
    design.addDirection("n");  // 9

    design.addPlayer("You", [1, 0, 2, 9, 7, 6, 5, 4, 8, 3]);

    design.addPosition("a11", [0, 12, 12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("c11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("d11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("e11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("f11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("g11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("h11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("i11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("j11", [0, 0, 0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("k11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j10", [-12, 12, 12, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("k10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j9", [-12, 12, 12, 11, 10, 1, -1, 0, -12, -11]);
    design.addPosition("k9", [-12, 0, 0, 11, 10, 0, -1, 0, -12, 0]);
    design.addPosition("a8", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k8", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a7", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e7", [-12, 0, 0, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f7", [-12, 12, 12, 0, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g7", [-12, 12, 12, 11, 0, 1, -1, -10, -12, -11]);
    design.addPosition("h7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k7", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a6", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e6", [-12, 12, 12, 11, 10, 0, -1, -10, -12, -11]);
    design.addPosition("f6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g6", [-12, 12, 12, 11, 10, 1, 0, -10, -12, -11]);
    design.addPosition("h6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k6", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a5", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e5", [-12, 12, 12, 11, 10, 1, -1, 0, -12, -11]);
    design.addPosition("f5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, 0]);
    design.addPosition("g5", [0, 12, 12, 11, 10, 1, -1, -10, 0, -11]);
    design.addPosition("h5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k5", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a4", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k4", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a3", [0, 12, 12, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b3", [-12, 12, 12, 11, 0, 1, -1, -10, -12, -11]);
    design.addPosition("c3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k3", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [-12, 12, 12, 11, 0, 1, 0, -10, -12, -11]);
    design.addPosition("c2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k2", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("c1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("d1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("e1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("f1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("g1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("h1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("i1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("j1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("k1", [-12, 0, 0, 0, 0, 0, -1, 0, -12, -11]);

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

    design.addPiece("RedElephant", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackElephant", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("RedChariot", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackChariot", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("RedCannon", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackCannon", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("RedDun", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackDun", 11);
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
    view.defPiece("RedDun", "You RedDun");
    view.defPiece("BlackDun", "You BlackDun");
    view.defPiece("RedMandarin", "You RedMandarin");
    view.defPiece("BlackMandarin", "You BlackMandarin");
    view.defPiece("RedGeneral", "You RedGeneral");
    view.defPiece("BlackGeneral", "You BlackGeneral");
 
    view.defPosition("a11", 4, 5, 42, 42);
    view.defPosition("b11", 49, 5, 42, 42);
    view.defPosition("c11", 94, 5, 42, 42);
    view.defPosition("d11", 139, 5, 42, 42);
    view.defPosition("e11", 184, 5, 42, 42);
    view.defPosition("f11", 229, 5, 42, 42);
    view.defPosition("g11", 274, 5, 42, 42);
    view.defPosition("h11", 319, 5, 42, 42);
    view.defPosition("i11", 364, 5, 42, 42);
    view.defPosition("j11", 409, 5, 42, 42);
    view.defPosition("k11", 454, 5, 42, 42);
    view.defPosition("a10", 4, 50, 42, 42);
    view.defPosition("b10", 49, 50, 42, 42);
    view.defPosition("c10", 94, 50, 42, 42);
    view.defPosition("d10", 139, 50, 42, 42);
    view.defPosition("e10", 184, 50, 42, 42);
    view.defPosition("f10", 229, 50, 42, 42);
    view.defPosition("g10", 274, 50, 42, 42);
    view.defPosition("h10", 319, 50, 42, 42);
    view.defPosition("i10", 364, 50, 42, 42);
    view.defPosition("j10", 409, 50, 42, 42);
    view.defPosition("k10", 454, 50, 42, 42);
    view.defPosition("a9", 4, 95, 42, 42);
    view.defPosition("b9", 49, 95, 42, 42);
    view.defPosition("c9", 94, 95, 42, 42);
    view.defPosition("d9", 139, 95, 42, 42);
    view.defPosition("e9", 184, 95, 42, 42);
    view.defPosition("f9", 229, 95, 42, 42);
    view.defPosition("g9", 274, 95, 42, 42);
    view.defPosition("h9", 319, 95, 42, 42);
    view.defPosition("i9", 364, 95, 42, 42);
    view.defPosition("j9", 409, 95, 42, 42);
    view.defPosition("k9", 454, 95, 42, 42);
    view.defPosition("a8", 4, 140, 42, 42);
    view.defPosition("b8", 49, 140, 42, 42);
    view.defPosition("c8", 94, 140, 42, 42);
    view.defPosition("d8", 139, 140, 42, 42);
    view.defPosition("e8", 184, 140, 42, 42);
    view.defPosition("f8", 229, 140, 42, 42);
    view.defPosition("g8", 274, 140, 42, 42);
    view.defPosition("h8", 319, 140, 42, 42);
    view.defPosition("i8", 364, 140, 42, 42);
    view.defPosition("j8", 409, 140, 42, 42);
    view.defPosition("k8", 454, 140, 42, 42);
    view.defPosition("a7", 4, 185, 42, 42);
    view.defPosition("b7", 49, 185, 42, 42);
    view.defPosition("c7", 94, 185, 42, 42);
    view.defPosition("d7", 139, 185, 42, 42);
    view.defPosition("e7", 184, 185, 42, 42);
    view.defPosition("f7", 229, 185, 42, 42);
    view.defPosition("g7", 274, 185, 42, 42);
    view.defPosition("h7", 319, 185, 42, 42);
    view.defPosition("i7", 364, 185, 42, 42);
    view.defPosition("j7", 409, 185, 42, 42);
    view.defPosition("k7", 454, 185, 42, 42);
    view.defPosition("a6", 4, 230, 42, 42);
    view.defPosition("b6", 49, 230, 42, 42);
    view.defPosition("c6", 94, 230, 42, 42);
    view.defPosition("d6", 139, 230, 42, 42);
    view.defPosition("e6", 184, 230, 42, 42);
    view.defPosition("f6", 229, 230, 42, 42);
    view.defPosition("g6", 274, 230, 42, 42);
    view.defPosition("h6", 319, 230, 42, 42);
    view.defPosition("i6", 364, 230, 42, 42);
    view.defPosition("j6", 409, 230, 42, 42);
    view.defPosition("k6", 454, 230, 42, 42);
    view.defPosition("a5", 4, 275, 42, 42);
    view.defPosition("b5", 49, 275, 42, 42);
    view.defPosition("c5", 94, 275, 42, 42);
    view.defPosition("d5", 139, 275, 42, 42);
    view.defPosition("e5", 184, 275, 42, 42);
    view.defPosition("f5", 229, 275, 42, 42);
    view.defPosition("g5", 274, 275, 42, 42);
    view.defPosition("h5", 319, 275, 42, 42);
    view.defPosition("i5", 364, 275, 42, 42);
    view.defPosition("j5", 409, 275, 42, 42);
    view.defPosition("k5", 454, 275, 42, 42);
    view.defPosition("a4", 4, 320, 42, 42);
    view.defPosition("b4", 49, 320, 42, 42);
    view.defPosition("c4", 94, 320, 42, 42);
    view.defPosition("d4", 139, 320, 42, 42);
    view.defPosition("e4", 184, 320, 42, 42);
    view.defPosition("f4", 229, 320, 42, 42);
    view.defPosition("g4", 274, 320, 42, 42);
    view.defPosition("h4", 319, 320, 42, 42);
    view.defPosition("i4", 364, 320, 42, 42);
    view.defPosition("j4", 409, 320, 42, 42);
    view.defPosition("k4", 454, 320, 42, 42);
    view.defPosition("a3", 4, 365, 42, 42);
    view.defPosition("b3", 49, 365, 42, 42);
    view.defPosition("c3", 94, 365, 42, 42);
    view.defPosition("d3", 139, 365, 42, 42);
    view.defPosition("e3", 184, 365, 42, 42);
    view.defPosition("f3", 229, 365, 42, 42);
    view.defPosition("g3", 274, 365, 42, 42);
    view.defPosition("h3", 319, 365, 42, 42);
    view.defPosition("i3", 364, 365, 42, 42);
    view.defPosition("j3", 409, 365, 42, 42);
    view.defPosition("k3", 454, 365, 42, 42);
    view.defPosition("a2", 4, 410, 42, 42);
    view.defPosition("b2", 49, 410, 42, 42);
    view.defPosition("c2", 94, 410, 42, 42);
    view.defPosition("d2", 139, 410, 42, 42);
    view.defPosition("e2", 184, 410, 42, 42);
    view.defPosition("f2", 229, 410, 42, 42);
    view.defPosition("g2", 274, 410, 42, 42);
    view.defPosition("h2", 319, 410, 42, 42);
    view.defPosition("i2", 364, 410, 42, 42);
    view.defPosition("j2", 409, 410, 42, 42);
    view.defPosition("k2", 454, 410, 42, 42);
    view.defPosition("a1", 4, 455, 42, 42);
    view.defPosition("b1", 49, 455, 42, 42);
    view.defPosition("c1", 94, 455, 42, 42);
    view.defPosition("d1", 139, 455, 42, 42);
    view.defPosition("e1", 184, 455, 42, 42);
    view.defPosition("f1", 229, 455, 42, 42);
    view.defPosition("g1", 274, 455, 42, 42);
    view.defPosition("h1", 319, 455, 42, 42);
    view.defPosition("i1", 364, 455, 42, 42);
    view.defPosition("j1", 409, 455, 42, 42);
    view.defPosition("k1", 454, 455, 42, 42);
}
