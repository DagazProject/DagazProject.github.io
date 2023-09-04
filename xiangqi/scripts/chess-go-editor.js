Dagaz.Controller.noDropIndex = true;

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

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, 0, 0]);
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

    design.addPiece("BlackStone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 1);

    design.addPiece("WhiteStone", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 1);

    design.addPiece("BlackSoldier", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 1);

    design.addPiece("WhiteSoldier", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 1);

    design.addPiece("BlackHorse", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 1);

    design.addPiece("WhiteHorse", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 1);

    design.addPiece("BlackElephant", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 1);

    design.addPiece("WhiteElephant", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 1);

    design.addPiece("BlackChariot", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 1);

    design.addPiece("WhiteChariot", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 1);

    design.addPiece("BlackCannon", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 1);

    design.addPiece("WhiteCannon", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 1);

    design.addPiece("BlackMandarin", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 1);

    design.addPiece("WhiteMandarin", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 1);

    design.addPiece("BlackGeneral", 14);
    design.addDrop(14, 0, [], 0);
    design.addMove(14, 1, [], 1);

    design.addPiece("WhiteGeneral", 15);
    design.addDrop(15, 0, [], 0);
    design.addMove(15, 1, [], 1);

    design.reserve("You", "WhiteStone", 500);
    design.reserve("You", "WhiteSoldier", 5);
    design.reserve("You", "WhiteHorse", 2);
    design.reserve("You", "WhiteElephant", 2);
    design.reserve("You", "WhiteChariot", 2);
    design.reserve("You", "WhiteMandarin", 2);
    design.reserve("You", "WhiteCannon", 2);
    design.reserve("You", "WhiteGeneral", 1);
    design.reserve("You", "BlackStone", 500);
    design.reserve("You", "BlackSoldier", 5);
    design.reserve("You", "BlackHorse", 2);
    design.reserve("You", "BlackElephant", 2);
    design.reserve("You", "BlackChariot", 2);
    design.reserve("You", "BlackMandarin", 2);
    design.reserve("You", "BlackCannon", 2);
    design.reserve("You", "BlackGeneral", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "You BlackStone");
    view.defPiece("WhiteStone", "You WhiteStone");
    view.defPiece("BlackSoldier", "You BlackSoldier");
    view.defPiece("WhiteSoldier", "You WhiteSoldier");
    view.defPiece("BlackHorse", "You BlackHorse");
    view.defPiece("WhiteHorse", "You WhiteHorse");
    view.defPiece("BlackElephant", "You BlackElephant");
    view.defPiece("WhiteElephant", "You WhiteElephant");
    view.defPiece("BlackChariot", "You BlackChariot");
    view.defPiece("WhiteChariot", "You WhiteChariot");
    view.defPiece("BlackCannon", "You BlackCannon");
    view.defPiece("WhiteCannon", "You WhiteCannon");
    view.defPiece("BlackMandarin", "You BlackMandarin");
    view.defPiece("WhiteMandarin", "You WhiteMandarin");
    view.defPiece("BlackGeneral", "You BlackGeneral");
    view.defPiece("WhiteGeneral", "You WhiteGeneral");
 
    view.defPosition("a9", 4, 5, 42, 42);
    view.defPosition("b9", 49, 5, 42, 42);
    view.defPosition("c9", 94, 5, 42, 42);
    view.defPosition("d9", 139, 5, 42, 42);
    view.defPosition("e9", 184, 5, 42, 42);
    view.defPosition("f9", 229, 5, 42, 42);
    view.defPosition("g9", 274, 5, 42, 42);
    view.defPosition("h9", 319, 5, 42, 42);
    view.defPosition("i9", 364, 5, 42, 42);
    view.defPosition("a8", 4, 50, 42, 42);
    view.defPosition("b8", 49, 50, 42, 42);
    view.defPosition("c8", 94, 50, 42, 42);
    view.defPosition("d8", 139, 50, 42, 42);
    view.defPosition("e8", 184, 50, 42, 42);
    view.defPosition("f8", 229, 50, 42, 42);
    view.defPosition("g8", 274, 50, 42, 42);
    view.defPosition("h8", 319, 50, 42, 42);
    view.defPosition("i8", 364, 50, 42, 42);
    view.defPosition("a7", 4, 95, 42, 42);
    view.defPosition("b7", 49, 95, 42, 42);
    view.defPosition("c7", 94, 95, 42, 42);
    view.defPosition("d7", 139, 95, 42, 42);
    view.defPosition("e7", 184, 95, 42, 42);
    view.defPosition("f7", 229, 95, 42, 42);
    view.defPosition("g7", 274, 95, 42, 42);
    view.defPosition("h7", 319, 95, 42, 42);
    view.defPosition("i7", 364, 95, 42, 42);
    view.defPosition("a6", 4, 140, 42, 42);
    view.defPosition("b6", 49, 140, 42, 42);
    view.defPosition("c6", 94, 140, 42, 42);
    view.defPosition("d6", 139, 140, 42, 42);
    view.defPosition("e6", 184, 140, 42, 42);
    view.defPosition("f6", 229, 140, 42, 42);
    view.defPosition("g6", 274, 140, 42, 42);
    view.defPosition("h6", 319, 140, 42, 42);
    view.defPosition("i6", 364, 140, 42, 42);
    view.defPosition("a5", 4, 185, 42, 42);
    view.defPosition("b5", 49, 185, 42, 42);
    view.defPosition("c5", 94, 185, 42, 42);
    view.defPosition("d5", 139, 185, 42, 42);
    view.defPosition("e5", 184, 185, 42, 42);
    view.defPosition("f5", 229, 185, 42, 42);
    view.defPosition("g5", 274, 185, 42, 42);
    view.defPosition("h5", 319, 185, 42, 42);
    view.defPosition("i5", 364, 185, 42, 42);
    view.defPosition("a4", 4, 230, 42, 42);
    view.defPosition("b4", 49, 230, 42, 42);
    view.defPosition("c4", 94, 230, 42, 42);
    view.defPosition("d4", 139, 230, 42, 42);
    view.defPosition("e4", 184, 230, 42, 42);
    view.defPosition("f4", 229, 230, 42, 42);
    view.defPosition("g4", 274, 230, 42, 42);
    view.defPosition("h4", 319, 230, 42, 42);
    view.defPosition("i4", 364, 230, 42, 42);
    view.defPosition("a3", 4, 275, 42, 42);
    view.defPosition("b3", 49, 275, 42, 42);
    view.defPosition("c3", 94, 275, 42, 42);
    view.defPosition("d3", 139, 275, 42, 42);
    view.defPosition("e3", 184, 275, 42, 42);
    view.defPosition("f3", 229, 275, 42, 42);
    view.defPosition("g3", 274, 275, 42, 42);
    view.defPosition("h3", 319, 275, 42, 42);
    view.defPosition("i3", 364, 275, 42, 42);
    view.defPosition("a2", 4, 320, 42, 42);
    view.defPosition("b2", 49, 320, 42, 42);
    view.defPosition("c2", 94, 320, 42, 42);
    view.defPosition("d2", 139, 320, 42, 42);
    view.defPosition("e2", 184, 320, 42, 42);
    view.defPosition("f2", 229, 320, 42, 42);
    view.defPosition("g2", 274, 320, 42, 42);
    view.defPosition("h2", 319, 320, 42, 42);
    view.defPosition("i2", 364, 320, 42, 42);
    view.defPosition("a1", 4, 365, 42, 42);
    view.defPosition("b1", 49, 365, 42, 42);
    view.defPosition("c1", 94, 365, 42, 42);
    view.defPosition("d1", 139, 365, 42, 42);
    view.defPosition("e1", 184, 365, 42, 42);
    view.defPosition("f1", 229, 365, 42, 42);
    view.defPosition("g1", 274, 365, 42, 42);
    view.defPosition("h1", 319, 365, 42, 42);
    view.defPosition("i1", 364, 365, 42, 42);
}
