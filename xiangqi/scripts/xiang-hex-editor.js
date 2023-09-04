Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'PpNnBbRrCcAaKk';

Dagaz.Model.WIDTH  = 9;
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

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("sse");
    design.addDirection("nne");
    design.addDirection("e");
    design.addDirection("nnw");
    design.addDirection("ssw");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("You", [10, 11, 9, 6, 7, 8, 3, 4, 5, 2, 0, 1]);

    design.addPosition("a11", [10, 9, 0, 19, 0, 11, 0, 0, 0, 1, 0, 0]);
    design.addPosition("b11", [10, 9, -1, 19, 0, 11, 0, 8, 0, 1, 0, 0]);
    design.addPosition("c11", [10, 9, -1, 19, 0, 11, 0, 8, 0, 1, 0, 0]);
    design.addPosition("d11", [10, 9, -1, 19, 0, 11, 0, 8, 0, 1, 0, 0]);
    design.addPosition("e11", [10, 9, -1, 19, 0, 0, 0, 8, 0, 0, 0, 0]);
    design.addPosition("f11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [10, 9, 0, 19, -8, 11, 0, 0, 0, 1, 0, -9]);
    design.addPosition("b10", [10, 9, -1, 19, -8, 11, 0, 8, 0, 1, -10, -9]);
    design.addPosition("c10", [10, 9, -1, 19, -8, 11, 0, 8, -11, 1, -10, -9]);
    design.addPosition("d10", [10, 9, -1, 19, -8, 11, 0, 8, -11, 1, -10, -9]);
    design.addPosition("e10", [10, 9, -1, 19, 0, 11, 0, 8, -11, 1, -10, -9]);
    design.addPosition("f10", [10, 9, -1, 19, 0, 0, 0, 8, -11, 0, -10, 0]);
    design.addPosition("g10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [10, 9, 0, 19, -8, 11, 0, 0, 0, 1, 0, -9]);
    design.addPosition("b9", [10, 9, -1, 19, -8, 11, -19, 8, 0, 1, -10, -9]);
    design.addPosition("c9", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("d9", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("e9", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("f9", [10, 9, -1, 19, 0, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g9", [10, 9, -1, 19, 0, 0, 0, 8, -11, 0, -10, 0]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 19, -8, 11, 0, 0, 0, 1, 0, -9]);
    design.addPosition("b8", [10, 9, -1, 19, -8, 11, -19, 8, 0, 1, -10, -9]);
    design.addPosition("c8", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("d8", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("e8", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("f8", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g8", [10, 9, -1, 19, 0, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("h8", [10, 9, -1, 19, 0, 0, 0, 8, -11, 0, -10, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [10, 9, 0, 19, -8, 11, 0, 0, 0, 1, 0, -9]);
    design.addPosition("b7", [10, 9, -1, 19, -8, 11, -19, 8, 0, 1, -10, -9]);
    design.addPosition("c7", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("d7", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("e7", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("f7", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g7", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("h7", [10, 9, -1, 19, 0, 0, -19, 8, -11, 1, -10, -9]);
    design.addPosition("i7", [0, 9, -1, 0, 0, 0, 0, 8, -11, 0, -10, 0]);
    design.addPosition("a6", [10, 9, 0, 19, -8, 11, 0, 0, 0, 1, 0, -9]);
    design.addPosition("b6", [10, 9, -1, 19, -8, 11, -19, 8, 0, 1, -10, -9]);
    design.addPosition("c6", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("d6", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("e6", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("f6", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g6", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("h6", [10, 9, -1, 19, -8, 0, -19, 8, -11, 1, -10, -9]);
    design.addPosition("i6", [0, 9, -1, 0, 0, 0, -19, 8, -11, 0, -10, -9]);
    design.addPosition("a5", [10, 0, 0, 0, -8, 11, 0, 0, 0, 1, 0, -9]);
    design.addPosition("b5", [10, 9, -1, 19, -8, 11, -19, 0, 0, 1, -10, -9]);
    design.addPosition("c5", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("d5", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("e5", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("f5", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g5", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("h5", [10, 9, -1, 19, -8, 0, -19, 8, -11, 1, -10, -9]);
    design.addPosition("i5", [0, 9, -1, 0, 0, 0, -19, 8, -11, 0, -10, -9]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [10, 0, 0, 0, -8, 11, -19, 0, 0, 1, -10, -9]);
    design.addPosition("c4", [10, 9, -1, 19, -8, 11, -19, 0, -11, 1, -10, -9]);
    design.addPosition("d4", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("e4", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("f4", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g4", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("h4", [10, 9, -1, 19, -8, 0, -19, 8, -11, 1, -10, -9]);
    design.addPosition("i4", [0, 9, -1, 0, 0, 0, -19, 8, -11, 0, -10, -9]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [10, 0, 0, 0, -8, 11, -19, 0, 0, 1, -10, -9]);
    design.addPosition("d3", [10, 9, -1, 19, -8, 11, -19, 0, -11, 1, -10, -9]);
    design.addPosition("e3", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("f3", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g3", [10, 9, -1, 19, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("h3", [10, 9, -1, 19, -8, 0, -19, 8, -11, 1, -10, -9]);
    design.addPosition("i3", [0, 9, -1, 0, 0, 0, -19, 8, -11, 0, -10, -9]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [10, 0, 0, 0, -8, 11, -19, 0, 0, 1, -10, -9]);
    design.addPosition("e2", [10, 9, -1, 0, -8, 11, -19, 0, -11, 1, -10, -9]);
    design.addPosition("f2", [10, 9, -1, 0, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("g2", [10, 9, -1, 0, -8, 11, -19, 8, -11, 1, -10, -9]);
    design.addPosition("h2", [10, 9, -1, 0, -8, 0, -19, 8, -11, 1, -10, -9]);
    design.addPosition("i2", [0, 9, -1, 0, 0, 0, -19, 8, -11, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, -8, 0, -19, 0, 0, 1, -10, -9]);
    design.addPosition("f1", [0, 0, -1, 0, -8, 0, -19, 0, -11, 1, -10, -9]);
    design.addPosition("g1", [0, 0, -1, 0, -8, 0, -19, 0, -11, 1, -10, -9]);
    design.addPosition("h1", [0, 0, -1, 0, -8, 0, -19, 0, -11, 1, -10, -9]);
    design.addPosition("i1", [0, 0, -1, 0, 0, 0, -19, 0, -11, 0, -10, -9]);

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

    design.addPiece("RedMandarin", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackMandarin", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("RedGeneral", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 0);

    design.addPiece("BlackGeneral", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 0);
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
    view.defPiece("RedMandarin", "You RedMandarin");
    view.defPiece("BlackMandarin", "You BlackMandarin");
    view.defPiece("RedGeneral", "You RedGeneral");
    view.defPiece("BlackGeneral", "You BlackGeneral");
 
    view.defPosition("a11", 22, 158, 49, 49);
    view.defPosition("b11", 82, 123, 49, 49);
    view.defPosition("c11", 142, 88, 49, 49);
    view.defPosition("d11", 202, 53, 49, 49);
    view.defPosition("e11", 262, 18, 49, 49);
    view.defPosition("f11", 322, -17, 49, 49);
    view.defPosition("g11", 382, -52, 49, 49);
    view.defPosition("h11", 442, -87, 49, 49);
    view.defPosition("i11", 502, -122, 49, 49);
    view.defPosition("a10", 22, 228, 49, 49);
    view.defPosition("b10", 82, 193, 49, 49);
    view.defPosition("c10", 142, 158, 49, 49);
    view.defPosition("d10", 202, 123, 49, 49);
    view.defPosition("e10", 262, 88, 49, 49);
    view.defPosition("f10", 322, 53, 49, 49);
    view.defPosition("g10", 382, 18, 49, 49);
    view.defPosition("h10", 442, -17, 49, 49);
    view.defPosition("i10", 502, -52, 49, 49);
    view.defPosition("a9", 22, 298, 49, 49);
    view.defPosition("b9", 82, 263, 49, 49);
    view.defPosition("c9", 142, 228, 49, 49);
    view.defPosition("d9", 202, 193, 49, 49);
    view.defPosition("e9", 262, 158, 49, 49);
    view.defPosition("f9", 322, 123, 49, 49);
    view.defPosition("g9", 382, 88, 49, 49);
    view.defPosition("h9", 442, 53, 49, 49);
    view.defPosition("i9", 502, 18, 49, 49);
    view.defPosition("a8", 22, 368, 49, 49);
    view.defPosition("b8", 82, 333, 49, 49);
    view.defPosition("c8", 142, 298, 49, 49);
    view.defPosition("d8", 202, 263, 49, 49);
    view.defPosition("e8", 262, 228, 49, 49);
    view.defPosition("f8", 322, 193, 49, 49);
    view.defPosition("g8", 382, 158, 49, 49);
    view.defPosition("h8", 442, 123, 49, 49);
    view.defPosition("i8", 502, 88, 49, 49);
    view.defPosition("a7", 22, 438, 49, 49);
    view.defPosition("b7", 82, 403, 49, 49);
    view.defPosition("c7", 142, 368, 49, 49);
    view.defPosition("d7", 202, 333, 49, 49);
    view.defPosition("e7", 262, 298, 49, 49);
    view.defPosition("f7", 322, 263, 49, 49);
    view.defPosition("g7", 382, 228, 49, 49);
    view.defPosition("h7", 442, 193, 49, 49);
    view.defPosition("i7", 502, 158, 49, 49);
    view.defPosition("a6", 22, 508, 49, 49);
    view.defPosition("b6", 82, 473, 49, 49);
    view.defPosition("c6", 142, 438, 49, 49);
    view.defPosition("d6", 202, 403, 49, 49);
    view.defPosition("e6", 262, 368, 49, 49);
    view.defPosition("f6", 322, 333, 49, 49);
    view.defPosition("g6", 382, 298, 49, 49);
    view.defPosition("h6", 442, 263, 49, 49);
    view.defPosition("i6", 502, 228, 49, 49);
    view.defPosition("a5", 22, 578, 49, 49);
    view.defPosition("b5", 82, 543, 49, 49);
    view.defPosition("c5", 142, 508, 49, 49);
    view.defPosition("d5", 202, 473, 49, 49);
    view.defPosition("e5", 262, 438, 49, 49);
    view.defPosition("f5", 322, 403, 49, 49);
    view.defPosition("g5", 382, 368, 49, 49);
    view.defPosition("h5", 442, 333, 49, 49);
    view.defPosition("i5", 502, 298, 49, 49);
    view.defPosition("a4", 22, 648, 49, 49);
    view.defPosition("b4", 82, 613, 49, 49);
    view.defPosition("c4", 142, 578, 49, 49);
    view.defPosition("d4", 202, 543, 49, 49);
    view.defPosition("e4", 262, 508, 49, 49);
    view.defPosition("f4", 322, 473, 49, 49);
    view.defPosition("g4", 382, 438, 49, 49);
    view.defPosition("h4", 442, 403, 49, 49);
    view.defPosition("i4", 502, 368, 49, 49);
    view.defPosition("a3", 22, 718, 49, 49);
    view.defPosition("b3", 82, 683, 49, 49);
    view.defPosition("c3", 142, 648, 49, 49);
    view.defPosition("d3", 202, 613, 49, 49);
    view.defPosition("e3", 262, 578, 49, 49);
    view.defPosition("f3", 322, 543, 49, 49);
    view.defPosition("g3", 382, 508, 49, 49);
    view.defPosition("h3", 442, 473, 49, 49);
    view.defPosition("i3", 502, 438, 49, 49);
    view.defPosition("a2", 22, 788, 49, 49);
    view.defPosition("b2", 82, 753, 49, 49);
    view.defPosition("c2", 142, 718, 49, 49);
    view.defPosition("d2", 202, 683, 49, 49);
    view.defPosition("e2", 262, 648, 49, 49);
    view.defPosition("f2", 322, 613, 49, 49);
    view.defPosition("g2", 382, 578, 49, 49);
    view.defPosition("h2", 442, 543, 49, 49);
    view.defPosition("i2", 502, 508, 49, 49);
    view.defPosition("a1", 22, 858, 49, 49);
    view.defPosition("b1", 82, 823, 49, 49);
    view.defPosition("c1", 142, 788, 49, 49);
    view.defPosition("d1", 202, 753, 49, 49);
    view.defPosition("e1", 262, 718, 49, 49);
    view.defPosition("f1", 322, 683, 49, 49);
    view.defPosition("g1", 382, 648, 49, 49);
    view.defPosition("h1", 442, 613, 49, 49);
    view.defPosition("i1", 502, 578, 49, 49);
}
