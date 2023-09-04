Dagaz.Model.PIECE_CNT = 5;

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("smart-moves", "from");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("animate-redo", "false");

    design.addDirection("n");  // 0
    design.addDirection("e");  // 1
    design.addDirection("w");  // 2
    design.addDirection("s");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("nw"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("se"); // 7
    design.addDirection("dn"); // 8
    design.addDirection("up"); // 9

    design.addPlayer("X", [3, 2, 1, 0, 6, 7, 4, 5, 8, 9]);
    design.addPlayer("O", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    design.addPosition("a3a3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 81]);
    design.addPosition("b3a3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 80]);
    design.addPosition("c3a3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 79]);
    design.addPosition("a2a3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 78]);
    design.addPosition("b2a3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 77]);
    design.addPosition("c2a3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 76]);
    design.addPosition("a1a3", [0, 0, 0, 0, 0, 0, 0, 0, -5, 75]);
    design.addPosition("b1a3", [0, 0, 0, 0, 0, 0, 0, 0, -5, 74]);
    design.addPosition("c1a3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 73]);
    design.addPosition("a3b3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 73]);
    design.addPosition("b3b3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 72]);
    design.addPosition("c3b3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 71]);
    design.addPosition("a2b3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 70]);
    design.addPosition("b2b3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 69]);
    design.addPosition("c2b3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 68]);
    design.addPosition("a1b3", [0, 0, 0, 0, 0, 0, 0, 0, -5, 67]);
    design.addPosition("b1b3", [0, 0, 0, 0, 0, 0, 0, 0, -5, 66]);
    design.addPosition("c1b3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 65]);
    design.addPosition("a3c3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 65]);
    design.addPosition("b3c3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 64]);
    design.addPosition("c3c3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 63]);
    design.addPosition("a2c3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 62]);
    design.addPosition("b2c3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 61]);
    design.addPosition("c2c3", [0, 0, 0, 0, 0, 0, 0, 0, 3, 60]);
    design.addPosition("a1c3", [0, 0, 0, 0, 0, 0, 0, 0, -5, 59]);
    design.addPosition("b1c3", [0, 0, 0, 0, 0, 0, 0, 0, -5, 58]);
    design.addPosition("c1c3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 57]);
    design.addPosition("a3a2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 57]);
    design.addPosition("b3a2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 56]);
    design.addPosition("c3a2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 55]);
    design.addPosition("a2a2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 54]);
    design.addPosition("b2a2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 53]);
    design.addPosition("c2a2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 52]);
    design.addPosition("a1a2", [0, 0, 0, 0, 0, 0, 0, 0, -5, 51]);
    design.addPosition("b1a2", [0, 0, 0, 0, 0, 0, 0, 0, -5, 50]);
    design.addPosition("c1a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 49]);
    design.addPosition("a3b2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 49]);
    design.addPosition("b3b2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 48]);
    design.addPosition("c3b2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 47]);
    design.addPosition("a2b2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 46]);
    design.addPosition("b2b2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 45]);
    design.addPosition("c2b2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 44]);
    design.addPosition("a1b2", [0, 0, 0, 0, 0, 0, 0, 0, -5, 43]);
    design.addPosition("b1b2", [0, 0, 0, 0, 0, 0, 0, 0, -5, 42]);
    design.addPosition("c1b2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 41]);
    design.addPosition("a3c2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 41]);
    design.addPosition("b3c2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 40]);
    design.addPosition("c3c2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 39]);
    design.addPosition("a2c2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 38]);
    design.addPosition("b2c2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 37]);
    design.addPosition("c2c2", [0, 0, 0, 0, 0, 0, 0, 0, 3, 36]);
    design.addPosition("a1c2", [0, 0, 0, 0, 0, 0, 0, 0, -5, 35]);
    design.addPosition("b1c2", [0, 0, 0, 0, 0, 0, 0, 0, -5, 34]);
    design.addPosition("c1c2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 33]);
    design.addPosition("a3a1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 33]);
    design.addPosition("b3a1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 32]);
    design.addPosition("c3a1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 31]);
    design.addPosition("a2a1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 30]);
    design.addPosition("b2a1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 29]);
    design.addPosition("c2a1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 28]);
    design.addPosition("a1a1", [0, 0, 0, 0, 0, 0, 0, 0, -5, 27]);
    design.addPosition("b1a1", [0, 0, 0, 0, 0, 0, 0, 0, -5, 26]);
    design.addPosition("c1a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 25]);
    design.addPosition("a3b1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 25]);
    design.addPosition("b3b1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 24]);
    design.addPosition("c3b1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 23]);
    design.addPosition("a2b1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 22]);
    design.addPosition("b2b1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 21]);
    design.addPosition("c2b1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 20]);
    design.addPosition("a1b1", [0, 0, 0, 0, 0, 0, 0, 0, -5, 19]);
    design.addPosition("b1b1", [0, 0, 0, 0, 0, 0, 0, 0, -5, 18]);
    design.addPosition("c1b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("a3c1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 17]);
    design.addPosition("b3c1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 16]);
    design.addPosition("c3c1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 15]);
    design.addPosition("a2c1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 14]);
    design.addPosition("b2c1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 13]);
    design.addPosition("c2c1", [0, 0, 0, 0, 0, 0, 0, 0, 3, 12]);
    design.addPosition("a1c1", [0, 0, 0, 0, 0, 0, 0, 0, -5, 11]);
    design.addPosition("b1c1", [0, 0, 0, 0, 0, 0, 0, 0, -5, 10]);
    design.addPosition("c1c1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 9]);
    design.addPosition("a3", [0, 1, 0, 3, 0, 0, 0, 4, -81, 0]);
    design.addPosition("b3", [0, 1, -1, 3, 0, 0, 0, 0, -73, 0]);
    design.addPosition("c3", [0, 0, -1, 3, 0, 0, 2, 0, -65, 0]);
    design.addPosition("a2", [-3, 1, 0, 3, 0, 0, 0, 0, -57, 0]);
    design.addPosition("b2", [-3, 1, -1, 3, -2, -4, 2, 4, -49, 0]);
    design.addPosition("c2", [-3, 0, -1, 3, 0, 0, 0, 0, -41, 0]);
    design.addPosition("a1", [-3, 1, 0, 0, -2, 0, 0, 0, -33, 0]);
    design.addPosition("b1", [-3, 1, -1, 0, 0, 0, 0, 0, -25, 0]);
    design.addPosition("c1", [-3, 0, -1, 0, 0, -4, 0, 0, -17, 0]);

    design.addZone("board-zone", 1, [87, 88, 89, 84, 85, 86, 81, 82, 83]);
    design.addZone("board-zone", 2, [87, 88, 89, 84, 85, 86, 81, 82, 83]);
    design.addZone("goal-zone", 1, [87, 88, 89, 84, 81]);
    design.addZone("goal-zone", 2, [87, 88, 89, 84, 81]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("B1", 0);
    design.addDrop(0, 0, [], 0);

    design.addPiece("B2", 1);
    design.addDrop(1, 0, [], 1);

    design.addPiece("B3", 2);
    design.addDrop(2, 0, [], 2);

    design.addPiece("B4", 3);
    design.addDrop(3, 0, [], 3);

    design.addPiece("B5", 4);
    design.addDrop(4, 0, [], 4);

    design.addPiece("S1", 5);
    design.addMove(5, 1, [9], 5);

    design.addPiece("S2", 6);
    design.addMove(6, 1, [9], 5);

    design.addPiece("S3", 7);
    design.addMove(7, 1, [9], 5);

    design.addPiece("S4", 8);
    design.addMove(8, 1, [9], 5);

    design.addPiece("S5", 9);
    design.addMove(9, 1, [9], 5);

    design.addPiece("None", 10);

    design.reserve("X", "B1", 2);
    design.reserve("X", "B2", 2);
    design.reserve("X", "B3", 2);
    design.reserve("X", "B4", 2);
    design.reserve("X", "B5", 2);
    design.reserve("O", "B1", 2);
    design.reserve("O", "B2", 2);
    design.reserve("O", "B3", 2);
    design.reserve("O", "B4", 2);
    design.reserve("O", "B5", 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("XB1", "X B1");
    view.defPiece("OB1", "O B1");
    view.defPiece("XB2", "X B2");
    view.defPiece("OB2", "O B2");
    view.defPiece("XB3", "X B3");
    view.defPiece("OB3", "O B3");
    view.defPiece("XB4", "X B4");
    view.defPiece("OB4", "O B4");
    view.defPiece("XB5", "X B5");
    view.defPiece("OB5", "O B5");
    view.defPiece("XS1", "X S1");
    view.defPiece("OS1", "O S1");
    view.defPiece("XS2", "X S2");
    view.defPiece("OS2", "O S2");
    view.defPiece("XS3", "X S3");
    view.defPiece("OS3", "O S3");
    view.defPiece("XS4", "X S4");
    view.defPiece("OS4", "O S4");
    view.defPiece("XS5", "X S5");
    view.defPiece("OS5", "O S5");
    view.defPiece("XNone", "X None");
    view.defPiece("ONone", "O None");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a3a3", 20, 50, 50, 50);
    view.defPosition("b3a3", 73, 47, 50, 50);
    view.defPosition("c3a3", 126, 44, 50, 50);
    view.defPosition("a2a3", 20, 100, 50, 50);
    view.defPosition("b2a3", 73, 97, 50, 50);
    view.defPosition("c2a3", 126, 94, 50, 50);
    view.defPosition("a1a3", 20, 150, 50, 50);
    view.defPosition("b1a3", 73, 147, 50, 50);
    view.defPosition("c1a3", 126, 144, 50, 50);
    view.defPosition("a3b3", 210, 40, 50, 50);
    view.defPosition("b3b3", 263, 37, 50, 50);
    view.defPosition("c3b3", 316, 34, 50, 50);
    view.defPosition("a2b3", 210, 90, 50, 50);
    view.defPosition("b2b3", 263, 87, 50, 50);
    view.defPosition("c2b3", 316, 84, 50, 50);
    view.defPosition("a1b3", 210, 140, 50, 50);
    view.defPosition("b1b3", 263, 137, 50, 50);
    view.defPosition("c1b3", 316, 134, 50, 50);
    view.defPosition("a3c3", 410, 30, 50, 50);
    view.defPosition("b3c3", 463, 27, 50, 50);
    view.defPosition("c3c3", 516, 24, 50, 50);
    view.defPosition("a2c3", 410, 80, 50, 50);
    view.defPosition("b2c3", 463, 77, 50, 50);
    view.defPosition("c2c3", 516, 74, 50, 50);
    view.defPosition("a1c3", 410, 130, 50, 50);
    view.defPosition("b1c3", 463, 127, 50, 50);
    view.defPosition("c1c3", 516, 124, 50, 50);
    view.defPosition("a3a2", 20, 235, 50, 50);
    view.defPosition("b3a2", 73, 232, 50, 50);
    view.defPosition("c3a2", 126, 229, 50, 50);
    view.defPosition("a2a2", 20, 285, 50, 50);
    view.defPosition("b2a2", 73, 282, 50, 50);
    view.defPosition("c2a2", 126, 279, 50, 50);
    view.defPosition("a1a2", 20, 335, 50, 50);
    view.defPosition("b1a2", 73, 332, 50, 50);
    view.defPosition("c1a2", 126, 329, 50, 50);
    view.defPosition("a3b2", 215, 220, 50, 50);
    view.defPosition("b3b2", 268, 217, 50, 50);
    view.defPosition("c3b2", 321, 214, 50, 50);
    view.defPosition("a2b2", 215, 270, 50, 50);
    view.defPosition("b2b2", 268, 267, 50, 50);
    view.defPosition("c2b2", 321, 264, 50, 50);
    view.defPosition("a1b2", 215, 320, 50, 50);
    view.defPosition("b1b2", 268, 317, 50, 50);
    view.defPosition("c1b2", 321, 314, 50, 50);
    view.defPosition("a3c2", 410, 210, 50, 50);
    view.defPosition("b3c2", 463, 207, 50, 50);
    view.defPosition("c3c2", 516, 204, 50, 50);
    view.defPosition("a2c2", 410, 260, 50, 50);
    view.defPosition("b2c2", 463, 257, 50, 50);
    view.defPosition("c2c2", 516, 254, 50, 50);
    view.defPosition("a1c2", 410, 310, 50, 50);
    view.defPosition("b1c2", 463, 307, 50, 50);
    view.defPosition("c1c2", 516, 304, 50, 50);
    view.defPosition("a3a1", 23, 410, 50, 50);
    view.defPosition("b3a1", 76, 407, 50, 50);
    view.defPosition("c3a1", 129, 404, 50, 50);
    view.defPosition("a2a1", 23, 460, 50, 50);
    view.defPosition("b2a1", 76, 457, 50, 50);
    view.defPosition("c2a1", 129, 454, 50, 50);
    view.defPosition("a1a1", 23, 510, 50, 50);
    view.defPosition("b1a1", 76, 507, 50, 50);
    view.defPosition("c1a1", 129, 504, 50, 50);
    view.defPosition("a3b1", 210, 400, 50, 50);
    view.defPosition("b3b1", 263, 397, 50, 50);
    view.defPosition("c3b1", 316, 394, 50, 50);
    view.defPosition("a2b1", 210, 450, 50, 50);
    view.defPosition("b2b1", 263, 447, 50, 50);
    view.defPosition("c2b1", 316, 444, 50, 50);
    view.defPosition("a1b1", 210, 500, 50, 50);
    view.defPosition("b1b1", 263, 497, 50, 50);
    view.defPosition("c1b1", 316, 494, 50, 50);
    view.defPosition("a3c1", 403, 390, 50, 50);
    view.defPosition("b3c1", 456, 387, 50, 50);
    view.defPosition("c3c1", 509, 384, 50, 50);
    view.defPosition("a2c1", 403, 440, 50, 50);
    view.defPosition("b2c1", 456, 437, 50, 50);
    view.defPosition("c2c1", 509, 434, 50, 50);
    view.defPosition("a1c1", 403, 490, 50, 50);
    view.defPosition("b1c1", 456, 487, 50, 50);
    view.defPosition("c1c1", 509, 484, 50, 50);
    view.defPosition("a3", 20, 50, 150, 150);
    view.defPosition("b3", 210, 40, 150, 150);
    view.defPosition("c3", 410, 30, 150, 150);
    view.defPosition("a2", 20, 230, 150, 150);
    view.defPosition("b2", 210, 218, 150, 150);
    view.defPosition("c2", 410, 208, 150, 150);
    view.defPosition("a1", 20, 410, 150, 150);
    view.defPosition("b1", 210, 400, 150, 150);
    view.defPosition("c1", 402, 390, 150, 150);
}
