Dagaz.Controller.persistense = "session";

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
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("detect-loops", "true");
    design.checkVersion("advisor-wait", "15");

    design.addDirection("se");  // 0
    design.addDirection("sw");  // 1
    design.addDirection("ne");  // 2
    design.addDirection("nw");  // 3
    design.addDirection("dse"); // 4
    design.addDirection("dsw"); // 5
    design.addDirection("dne"); // 6
    design.addDirection("dnw"); // 7

    design.addPlayer("Black", [3, 2, 1, 0, 4, 5, 6, 7]);
    design.addPlayer("White", [3, 2, 1, 0, 7, 6, 5, 4]);

    design.addPosition("A4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [6, 0, 0, 0, -16, 0, 0, 0]);
    design.addPosition("b5", [6, 4, 0, 0, -16, -17, 0, 0]);
    design.addPosition("c5", [6, 4, 0, 0, -16, -17, 0, 0]);
    design.addPosition("d5", [6, 4, 0, 0, -16, -17, 0, 0]);
    design.addPosition("e5", [0, 4, 0, 0, 0, -17, 0, 0]);
    design.addPosition("a4", [6, 0, -4, 0, -17, 0, -21, 0]);
    design.addPosition("b4", [6, 4, -4, -6, -17, -18, -21, -22]);
    design.addPosition("c4", [6, 4, -4, -6, -17, -18, -21, -22]);
    design.addPosition("d4", [6, 4, -4, -6, -17, -18, -21, -22]);
    design.addPosition("e4", [0, 4, 0, -6, 0, -18, 0, -22]);
    design.addPosition("a3", [6, 0, -4, 0, -18, 0, -22, 0]);
    design.addPosition("b3", [6, 4, -4, -6, -18, -19, -22, -23]);
    design.addPosition("c3", [6, 4, -4, -6, -18, -19, -22, -23]);
    design.addPosition("d3", [6, 4, -4, -6, -18, -19, -22, -23]);
    design.addPosition("e3", [0, 4, 0, -6, 0, -19, 0, -23]);
    design.addPosition("a2", [6, 0, -4, 0, -19, 0, -23, 0]);
    design.addPosition("b2", [6, 4, -4, -6, -19, -20, -23, -24]);
    design.addPosition("c2", [6, 4, -4, -6, -19, -20, -23, -24]);
    design.addPosition("d2", [6, 4, -4, -6, -19, -20, -23, -24]);
    design.addPosition("e2", [0, 4, 0, -6, 0, -20, 0, -24]);
    design.addPosition("a1", [0, 0, -4, 0, 0, 0, -24, 0]);
    design.addPosition("b1", [0, 0, -4, -6, 0, 0, -24, -25]);
    design.addPosition("c1", [0, 0, -4, -6, 0, 0, -24, -25]);
    design.addPosition("d1", [0, 0, -4, -6, 0, 0, -24, -25]);
    design.addPosition("e1", [0, 0, 0, -6, 0, 0, 0, -25]);

    design.addZone("goal", 2, [36]);
    design.addZone("goal", 1, [20]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0, 10);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [3], 1);
    design.addMove(0, 1, [0], 1);

    design.addPiece("T1", 1, 0);
    design.addPiece("T2", 2, 0);
    design.addPiece("T3", 3, 0);
    design.addPiece("T4", 4, 0);
    design.addPiece("T5", 5, 0);
    design.addPiece("T6", 6, 0);
    design.addPiece("T7", 7, 0);
    design.addPiece("T8", 8, 0);
    design.addPiece("T9", 9, 0);
    design.addPiece("T10", 10, 0);
    design.addPiece("T11", 11, 0);
    design.addPiece("T12", 12, 0);
    design.addPiece("T13", 13, 0);
    design.addPiece("T14", 14, 0);
    design.addPiece("T15", 15, 0);
    design.addPiece("T16", 16, 0);

    design.setup("Black", "Stone", 36);
    design.setup("Black", "Stone", 37);
    design.setup("Black", "Stone", 38);
    design.setup("Black", "Stone", 39);
    design.setup("Black", "Stone", 31);
    design.setup("Black", "Stone", 32);
    design.setup("Black", "Stone", 33);
    design.setup("Black", "Stone", 26);
    design.setup("Black", "Stone", 27);
    design.setup("Black", "Stone", 21);
    design.setup("White", "Stone", 17);
    design.setup("White", "Stone", 18);
    design.setup("White", "Stone", 19);
    design.setup("White", "Stone", 20);
    design.setup("White", "Stone", 23);
    design.setup("White", "Stone", 24);
    design.setup("White", "Stone", 25);
    design.setup("White", "Stone", 29);
    design.setup("White", "Stone", 30);
    design.setup("White", "Stone", 35);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteT1", "White T1");
    view.defPiece("BlackT1", "Black T1");
    view.defPiece("WhiteT2", "White T2");
    view.defPiece("BlackT2", "Black T2");
    view.defPiece("WhiteT3", "White T3");
    view.defPiece("BlackT3", "Black T3");
    view.defPiece("WhiteT4", "White T4");
    view.defPiece("BlackT4", "Black T4");
    view.defPiece("WhiteT5", "White T5");
    view.defPiece("BlackT5", "Black T5");
    view.defPiece("WhiteT6", "White T6");
    view.defPiece("BlackT6", "Black T6");
    view.defPiece("WhiteT7", "White T7");
    view.defPiece("BlackT7", "Black T7");
    view.defPiece("WhiteT8", "White T8");
    view.defPiece("BlackT8", "Black T8");
    view.defPiece("WhiteT9", "White T9");
    view.defPiece("BlackT9", "Black T9");
    view.defPiece("WhiteT10", "White T10");
    view.defPiece("BlackT10", "Black T10");
    view.defPiece("WhiteT11", "White T11");
    view.defPiece("BlackT11", "Black T11");
    view.defPiece("WhiteT12", "White T12");
    view.defPiece("BlackT12", "Black T12");
    view.defPiece("WhiteT13", "White T13");
    view.defPiece("BlackT13", "Black T13");
    view.defPiece("WhiteT14", "White T14");
    view.defPiece("BlackT14", "Black T14");
    view.defPiece("WhiteT15", "White T15");
    view.defPiece("BlackT15", "Black T15");
    view.defPiece("WhiteT16", "White T16");
    view.defPiece("BlackT16", "Black T16");
 
    view.defPosition("A4", 55, 55, 62, 62);
    view.defPosition("B4", 121, 55, 62, 62);
    view.defPosition("C4", 187, 55, 62, 62);
    view.defPosition("D4", 253, 55, 62, 62);
    view.defPosition("A3", 55, 121, 62, 62);
    view.defPosition("B3", 121, 121, 62, 62);
    view.defPosition("C3", 187, 121, 62, 62);
    view.defPosition("D3", 253, 121, 62, 62);
    view.defPosition("A2", 55, 187, 62, 62);
    view.defPosition("B2", 121, 187, 62, 62);
    view.defPosition("C2", 187, 187, 62, 62);
    view.defPosition("D2", 253, 187, 62, 62);
    view.defPosition("A1", 55, 253, 62, 62);
    view.defPosition("B1", 121, 253, 62, 62);
    view.defPosition("C1", 187, 253, 62, 62);
    view.defPosition("D1", 253, 253, 62, 62);
    view.defPosition("a5", 33, 33, 40, 40);
    view.defPosition("b5", 99, 33, 40, 40);
    view.defPosition("c5", 165, 33, 40, 40);
    view.defPosition("d5", 231, 33, 40, 40);
    view.defPosition("e5", 297, 33, 40, 40);
    view.defPosition("a4", 33, 99, 40, 40);
    view.defPosition("b4", 99, 99, 40, 40);
    view.defPosition("c4", 165, 99, 40, 40);
    view.defPosition("d4", 231, 99, 40, 40);
    view.defPosition("e4", 297, 99, 40, 40);
    view.defPosition("a3", 33, 165, 40, 40);
    view.defPosition("b3", 99, 165, 40, 40);
    view.defPosition("c3", 165, 165, 40, 40);
    view.defPosition("d3", 231, 165, 40, 40);
    view.defPosition("e3", 297, 165, 40, 40);
    view.defPosition("a2", 33, 231, 40, 40);
    view.defPosition("b2", 99, 231, 40, 40);
    view.defPosition("c2", 165, 231, 40, 40);
    view.defPosition("d2", 231, 231, 40, 40);
    view.defPosition("e2", 297, 231, 40, 40);
    view.defPosition("a1", 33, 297, 40, 40);
    view.defPosition("b1", 99, 297, 40, 40);
    view.defPosition("c1", 165, 297, 40, 40);
    view.defPosition("d1", 231, 297, 40, 40);
    view.defPosition("e1", 297, 297, 40, 40);
}
