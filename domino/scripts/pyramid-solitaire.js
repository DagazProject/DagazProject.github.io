Dagaz.Controller.persistense = "none";
Dagaz.Model.NO_SOUND = true;

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
    design.checkVersion("show-blink", "false");
    design.checkVersion("animate-redo", "false");

    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("ne");
    design.addDirection("nw");

    design.addPlayer("You", [0, 1, 2, 3]);
    design.addPlayer("Off", [0, 1, 2, 3]);
    design.addTurn(1);

    design.addPosition("a7", [8, 7, 0, 0]);
    design.addPosition("b7", [0, 1, 2, 3]);
    design.addPosition("c7", [0, 1, 2, 3]);
    design.addPosition("d7", [0, 1, 2, 3]);
    design.addPosition("e7", [0, 1, 2, 3]);
    design.addPosition("f7", [0, 1, 2, 3]);
    design.addPosition("g7", [0, 1, 2, 3]);
    design.addPosition("a6", [8, 7, -7, 0]);
    design.addPosition("b6", [8, 7, 0, -8]);
    design.addPosition("c6", [0, 1, 2, 3]);
    design.addPosition("d6", [0, 1, 2, 3]);
    design.addPosition("e6", [0, 1, 2, 3]);
    design.addPosition("f6", [0, 1, 2, 3]);
    design.addPosition("g6", [0, 1, 2, 3]);
    design.addPosition("a5", [8, 7, -7, 0]);
    design.addPosition("b5", [8, 7, -7, -8]);
    design.addPosition("c5", [8, 7, 0, -8]);
    design.addPosition("d5", [0, 1, 2, 3]);
    design.addPosition("e5", [0, 1, 2, 3]);
    design.addPosition("f5", [0, 1, 2, 3]);
    design.addPosition("g5", [0, 1, 2, 3]);
    design.addPosition("a4", [8, 7, -7, 0]);
    design.addPosition("b4", [8, 7, -7, -8]);
    design.addPosition("c4", [8, 7, -7, -8]);
    design.addPosition("d4", [8, 7, 0, -8]);
    design.addPosition("e4", [0, 1, 2, 3]);
    design.addPosition("f4", [0, 1, 2, 3]);
    design.addPosition("g4", [0, 1, 2, 3]);
    design.addPosition("a3", [8, 7, -7, 0]);
    design.addPosition("b3", [8, 7, -7, -8]);
    design.addPosition("c3", [8, 7, -7, -8]);
    design.addPosition("d3", [8, 7, -7, -8]);
    design.addPosition("e3", [8, 7, 0, -8]);
    design.addPosition("f3", [0, 1, 2, 3]);
    design.addPosition("g3", [0, 1, 2, 3]);
    design.addPosition("a2", [8, 7, -7, 0]);
    design.addPosition("b2", [8, 7, -7, -8]);
    design.addPosition("c2", [8, 7, -7, -8]);
    design.addPosition("d2", [8, 7, -7, -8]);
    design.addPosition("e2", [8, 7, -7, -8]);
    design.addPosition("f2", [8, 7, 0, -8]);
    design.addPosition("g2", [0, 1, 2, 3]);
    design.addPosition("a1", [0, 0, -7, 0]);
    design.addPosition("b1", [0, 0, -7, -8]);
    design.addPosition("c1", [0, 0, -7, -8]);
    design.addPosition("d1", [0, 0, -7, -8]);
    design.addPosition("e1", [0, 0, -7, -8]);
    design.addPosition("f1", [0, 0, -7, -8]);
    design.addPosition("g1", [0, 0, 0, -8]);

    design.addZone("board-zone", 1, [42, 43, 44, 45, 46, 47, 48, 35, 36, 37, 38, 39, 40, 28, 29, 30, 31, 32, 21, 22, 23, 24, 14, 15, 16, 7, 8, 0]);
    design.addZone("inner-zone", 1, [35, 36, 37, 38, 39, 40, 28, 29, 30, 31, 32, 21, 22, 23, 24, 14, 15, 16, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("P00", 0, 1);
    design.addMove(0, 0, [], 0);

    design.addPiece("P01", 1, 2);
    design.addMove(1, 0, [], 0);

    design.addPiece("P02", 2, 3);
    design.addMove(2, 0, [], 0);

    design.addPiece("P03", 3, 4);
    design.addMove(3, 0, [], 0);

    design.addPiece("P04", 4, 5);
    design.addMove(4, 0, [], 0);

    design.addPiece("P05", 5, 6);
    design.addMove(5, 0, [], 0);

    design.addPiece("P06", 6, 7);
    design.addMove(6, 0, [], 0);

    design.addPiece("P11", 7, 3);
    design.addMove(7, 0, [], 0);

    design.addPiece("P12", 8, 4);
    design.addMove(8, 0, [], 0);

    design.addPiece("P13", 9, 5);
    design.addMove(9, 0, [], 0);

    design.addPiece("P14", 10, 6);
    design.addMove(10, 0, [], 0);

    design.addPiece("P15", 11, 7);
    design.addMove(11, 0, [], 0);

    design.addPiece("P16", 12, 8);
    design.addMove(12, 0, [], 0);

    design.addPiece("P22", 13, 5);
    design.addMove(13, 0, [], 0);

    design.addPiece("P23", 14, 6);
    design.addMove(14, 0, [], 0);

    design.addPiece("P24", 15, 7);
    design.addMove(15, 0, [], 0);

    design.addPiece("P25", 16, 8);
    design.addMove(16, 0, [], 0);

    design.addPiece("P26", 17, 9);
    design.addMove(17, 0, [], 0);

    design.addPiece("P33", 18, 7);
    design.addMove(18, 0, [], 0);

    design.addPiece("P34", 19, 8);
    design.addMove(19, 0, [], 0);

    design.addPiece("P35", 20, 9);
    design.addMove(20, 0, [], 0);

    design.addPiece("P36", 21, 10);
    design.addMove(21, 0, [], 0);

    design.addPiece("P44", 22, 9);
    design.addMove(22, 0, [], 0);

    design.addPiece("P45", 23, 10);
    design.addMove(23, 0, [], 0);

    design.addPiece("P46", 24, 11);
    design.addMove(24, 0, [], 0);

    design.addPiece("P55", 25, 11);
    design.addMove(25, 0, [], 0);

    design.addPiece("P56", 26, 12);
    design.addMove(26, 0, [], 0);

    design.addPiece("P66", 27, 13);
    design.addMove(27, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouP00", "You P00");
    view.defPiece("OffP00", "Off P00");
    view.defPiece("YouP01", "You P01");
    view.defPiece("OffP01", "Off P01");
    view.defPiece("YouP02", "You P02");
    view.defPiece("OffP02", "Off P02");
    view.defPiece("YouP03", "You P03");
    view.defPiece("OffP03", "Off P03");
    view.defPiece("YouP04", "You P04");
    view.defPiece("OffP04", "Off P04");
    view.defPiece("YouP05", "You P05");
    view.defPiece("OffP05", "Off P05");
    view.defPiece("YouP06", "You P06");
    view.defPiece("OffP06", "Off P06");
    view.defPiece("YouP11", "You P11");
    view.defPiece("OffP11", "Off P11");
    view.defPiece("YouP12", "You P12");
    view.defPiece("OffP12", "Off P12");
    view.defPiece("YouP13", "You P13");
    view.defPiece("OffP13", "Off P13");
    view.defPiece("YouP14", "You P14");
    view.defPiece("OffP14", "Off P14");
    view.defPiece("YouP15", "You P15");
    view.defPiece("OffP15", "Off P15");
    view.defPiece("YouP16", "You P16");
    view.defPiece("OffP16", "Off P16");
    view.defPiece("YouP22", "You P22");
    view.defPiece("OffP22", "Off P22");
    view.defPiece("YouP23", "You P23");
    view.defPiece("OffP23", "Off P23");
    view.defPiece("YouP24", "You P24");
    view.defPiece("OffP24", "Off P24");
    view.defPiece("YouP25", "You P25");
    view.defPiece("OffP25", "Off P25");
    view.defPiece("YouP26", "You P26");
    view.defPiece("OffP26", "Off P26");
    view.defPiece("YouP33", "You P33");
    view.defPiece("OffP33", "Off P33");
    view.defPiece("YouP34", "You P34");
    view.defPiece("OffP34", "Off P34");
    view.defPiece("YouP35", "You P35");
    view.defPiece("OffP35", "Off P35");
    view.defPiece("YouP36", "You P36");
    view.defPiece("OffP36", "Off P36");
    view.defPiece("YouP44", "You P44");
    view.defPiece("OffP44", "Off P44");
    view.defPiece("YouP45", "You P45");
    view.defPiece("OffP45", "Off P45");
    view.defPiece("YouP46", "You P46");
    view.defPiece("OffP46", "Off P46");
    view.defPiece("YouP55", "You P55");
    view.defPiece("OffP55", "Off P55");
    view.defPiece("YouP56", "You P56");
    view.defPiece("OffP56", "Off P56");
    view.defPiece("YouP66", "You P66");
    view.defPiece("OffP66", "Off P66");
 
    view.defPosition("a7", 156, 0, 52, 103);
    view.defPosition("b7", 208, 0, 52, 103);
    view.defPosition("c7", 260, 0, 52, 103);
    view.defPosition("d7", 312, 0, 52, 103);
    view.defPosition("e7", 364, 0, 52, 103);
    view.defPosition("f7", 416, 0, 52, 103);
    view.defPosition("g7", 468, 0, 52, 103);
    view.defPosition("a6", 130, 103, 52, 103);
    view.defPosition("b6", 182, 103, 52, 103);
    view.defPosition("c6", 234, 103, 52, 103);
    view.defPosition("d6", 286, 103, 52, 103);
    view.defPosition("e6", 338, 103, 52, 103);
    view.defPosition("f6", 390, 103, 52, 103);
    view.defPosition("g6", 442, 103, 52, 103);
    view.defPosition("a5", 104, 206, 52, 103);
    view.defPosition("b5", 156, 206, 52, 103);
    view.defPosition("c5", 208, 206, 52, 103);
    view.defPosition("d5", 260, 206, 52, 103);
    view.defPosition("e5", 312, 206, 52, 103);
    view.defPosition("f5", 364, 206, 52, 103);
    view.defPosition("g5", 416, 206, 52, 103);
    view.defPosition("a4", 78, 309, 52, 103);
    view.defPosition("b4", 130, 309, 52, 103);
    view.defPosition("c4", 182, 309, 52, 103);
    view.defPosition("d4", 234, 309, 52, 103);
    view.defPosition("e4", 286, 309, 52, 103);
    view.defPosition("f4", 338, 309, 52, 103);
    view.defPosition("g4", 390, 309, 52, 103);
    view.defPosition("a3", 52, 412, 52, 103);
    view.defPosition("b3", 104, 412, 52, 103);
    view.defPosition("c3", 156, 412, 52, 103);
    view.defPosition("d3", 208, 412, 52, 103);
    view.defPosition("e3", 260, 412, 52, 103);
    view.defPosition("f3", 312, 412, 52, 103);
    view.defPosition("g3", 364, 412, 52, 103);
    view.defPosition("a2", 26, 515, 52, 103);
    view.defPosition("b2", 78, 515, 52, 103);
    view.defPosition("c2", 130, 515, 52, 103);
    view.defPosition("d2", 182, 515, 52, 103);
    view.defPosition("e2", 234, 515, 52, 103);
    view.defPosition("f2", 286, 515, 52, 103);
    view.defPosition("g2", 338, 515, 52, 103);
    view.defPosition("a1", 0, 618, 52, 103);
    view.defPosition("b1", 52, 618, 52, 103);
    view.defPosition("c1", 104, 618, 52, 103);
    view.defPosition("d1", 156, 618, 52, 103);
    view.defPosition("e1", 208, 618, 52, 103);
    view.defPosition("f1", 260, 618, 52, 103);
    view.defPosition("g1", 312, 618, 52, 103);
}
