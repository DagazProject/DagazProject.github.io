Dagaz.View.CLEAR_KO = true;
Dagaz.Controller.AI_DELAY = 500;

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/step.ogg", true);
    Dagaz.Controller.addSound(2, "../sounds/step.ogg", true);
    Dagaz.Controller.addSound(3, "../sounds/step.ogg", true);
}

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
    design.checkVersion("complete-partial", "true");
    design.checkVersion("advisor-wait", "10");

    design.addDirection("n");  // 0
    design.addDirection("e");  // 1
    design.addDirection("w");  // 2
    design.addDirection("s");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("nw"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("se"); // 7
    design.addDirection("up"); // 8
    design.addDirection("nx"); // 9

    design.addPlayer("X", [3, 2, 1, 0, 6, 7, 4, 5, 8, 9]);
    design.addPlayer("O", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    design.addTurn(1, [0]);
    design.addTurn(2, [0]);
    design.addTurn(1, [1]);
    design.addTurn(2, [1]);
    design.addTurn(1, [2]);
    design.addTurn(2, [2]);

    design.addPosition("a3a3", [0, 1, 0, 3, 0, 0, 0, 4, 81, 81]);
    design.addPosition("b3a3", [0, 1, -1, 3, 0, 0, 0, 0, 80, 81]);
    design.addPosition("c3a3", [0, 0, -1, 3, 0, 0, 2, 0, 79, 81]);
    design.addPosition("a2a3", [-3, 1, 0, 3, 0, 0, 0, 0, 78, 81]);
    design.addPosition("b2a3", [-3, 1, -1, 3, -2, -4, 2, 4, 77, 81]);
    design.addPosition("c2a3", [-3, 0, -1, 3, 0, 0, 0, 0, 76, 81]);
    design.addPosition("a1a3", [-3, 1, 0, 0, -2, 0, 0, 0, 75, 81]);
    design.addPosition("b1a3", [-3, 1, -1, 0, 0, 0, 0, 0, 74, 81]);
    design.addPosition("c1a3", [-3, 0, -1, 0, 0, -4, 0, 0, 73, 81]);
    design.addPosition("a3b3", [0, 1, 0, 3, 0, 0, 0, 4, 73, 72]);
    design.addPosition("b3b3", [0, 1, -1, 3, 0, 0, 0, 0, 72, 72]);
    design.addPosition("c3b3", [0, 0, -1, 3, 0, 0, 2, 0, 71, 72]);
    design.addPosition("a2b3", [-3, 1, 0, 3, 0, 0, 0, 0, 70, 72]);
    design.addPosition("b2b3", [-3, 1, -1, 3, -2, -4, 2, 4, 69, 72]);
    design.addPosition("c2b3", [-3, 0, -1, 3, 0, 0, 0, 0, 68, 72]);
    design.addPosition("a1b3", [-3, 1, 0, 0, -2, 0, 0, 0, 67, 72]);
    design.addPosition("b1b3", [-3, 1, -1, 0, 0, 0, 0, 0, 66, 72]);
    design.addPosition("c1b3", [-3, 0, -1, 0, 0, -4, 0, 0, 65, 72]);
    design.addPosition("a3c3", [0, 1, 0, 3, 0, 0, 0, 4, 65, 63]);
    design.addPosition("b3c3", [0, 1, -1, 3, 0, 0, 0, 0, 64, 63]);
    design.addPosition("c3c3", [0, 0, -1, 3, 0, 0, 2, 0, 63, 63]);
    design.addPosition("a2c3", [-3, 1, 0, 3, 0, 0, 0, 0, 62, 63]);
    design.addPosition("b2c3", [-3, 1, -1, 3, -2, -4, 2, 4, 61, 63]);
    design.addPosition("c2c3", [-3, 0, -1, 3, 0, 0, 0, 0, 60, 63]);
    design.addPosition("a1c3", [-3, 1, 0, 0, -2, 0, 0, 0, 59, 63]);
    design.addPosition("b1c3", [-3, 1, -1, 0, 0, 0, 0, 0, 58, 63]);
    design.addPosition("c1c3", [-3, 0, -1, 0, 0, -4, 0, 0, 57, 63]);
    design.addPosition("a3a2", [0, 1, 0, 3, 0, 0, 0, 4, 57, 54]);
    design.addPosition("b3a2", [0, 1, -1, 3, 0, 0, 0, 0, 56, 54]);
    design.addPosition("c3a2", [0, 0, -1, 3, 0, 0, 2, 0, 55, 54]);
    design.addPosition("a2a2", [-3, 1, 0, 3, 0, 0, 0, 0, 54, 54]);
    design.addPosition("b2a2", [-3, 1, -1, 3, -2, -4, 2, 4, 53, 54]);
    design.addPosition("c2a2", [-3, 0, -1, 3, 0, 0, 0, 0, 52, 54]);
    design.addPosition("a1a2", [-3, 1, 0, 0, -2, 0, 0, 0, 51, 54]);
    design.addPosition("b1a2", [-3, 1, -1, 0, 0, 0, 0, 0, 50, 54]);
    design.addPosition("c1a2", [-3, 0, -1, 0, 0, -4, 0, 0, 49, 54]);
    design.addPosition("a3b2", [0, 1, 0, 3, 0, 0, 0, 4, 49, 45]);
    design.addPosition("b3b2", [0, 1, -1, 3, 0, 0, 0, 0, 48, 45]);
    design.addPosition("c3b2", [0, 0, -1, 3, 0, 0, 2, 0, 47, 45]);
    design.addPosition("a2b2", [-3, 1, 0, 3, 0, 0, 0, 0, 46, 45]);
    design.addPosition("b2b2", [-3, 1, -1, 3, -2, -4, 2, 4, 45, 45]);
    design.addPosition("c2b2", [-3, 0, -1, 3, 0, 0, 0, 0, 44, 45]);
    design.addPosition("a1b2", [-3, 1, 0, 0, -2, 0, 0, 0, 43, 45]);
    design.addPosition("b1b2", [-3, 1, -1, 0, 0, 0, 0, 0, 42, 45]);
    design.addPosition("c1b2", [-3, 0, -1, 0, 0, -4, 0, 0, 41, 45]);
    design.addPosition("a3c2", [0, 1, 0, 3, 0, 0, 0, 4, 41, 36]);
    design.addPosition("b3c2", [0, 1, -1, 3, 0, 0, 0, 0, 40, 36]);
    design.addPosition("c3c2", [0, 0, -1, 3, 0, 0, 2, 0, 39, 36]);
    design.addPosition("a2c2", [-3, 1, 0, 3, 0, 0, 0, 0, 38, 36]);
    design.addPosition("b2c2", [-3, 1, -1, 3, -2, -4, 2, 4, 37, 36]);
    design.addPosition("c2c2", [-3, 0, -1, 3, 0, 0, 0, 0, 36, 36]);
    design.addPosition("a1c2", [-3, 1, 0, 0, -2, 0, 0, 0, 35, 36]);
    design.addPosition("b1c2", [-3, 1, -1, 0, 0, 0, 0, 0, 34, 36]);
    design.addPosition("c1c2", [-3, 0, -1, 0, 0, -4, 0, 0, 33, 36]);
    design.addPosition("a3a1", [0, 1, 0, 3, 0, 0, 0, 4, 33, 27]);
    design.addPosition("b3a1", [0, 1, -1, 3, 0, 0, 0, 0, 32, 27]);
    design.addPosition("c3a1", [0, 0, -1, 3, 0, 0, 2, 0, 31, 27]);
    design.addPosition("a2a1", [-3, 1, 0, 3, 0, 0, 0, 0, 30, 27]);
    design.addPosition("b2a1", [-3, 1, -1, 3, -2, -4, 2, 4, 29, 27]);
    design.addPosition("c2a1", [-3, 0, -1, 3, 0, 0, 0, 0, 28, 27]);
    design.addPosition("a1a1", [-3, 1, 0, 0, -2, 0, 0, 0, 27, 27]);
    design.addPosition("b1a1", [-3, 1, -1, 0, 0, 0, 0, 0, 26, 27]);
    design.addPosition("c1a1", [-3, 0, -1, 0, 0, -4, 0, 0, 25, 27]);
    design.addPosition("a3b1", [0, 1, 0, 3, 0, 0, 0, 4, 25, 18]);
    design.addPosition("b3b1", [0, 1, -1, 3, 0, 0, 0, 0, 24, 18]);
    design.addPosition("c3b1", [0, 0, -1, 3, 0, 0, 2, 0, 23, 18]);
    design.addPosition("a2b1", [-3, 1, 0, 3, 0, 0, 0, 0, 22, 18]);
    design.addPosition("b2b1", [-3, 1, -1, 3, -2, -4, 2, 4, 21, 18]);
    design.addPosition("c2b1", [-3, 0, -1, 3, 0, 0, 0, 0, 20, 18]);
    design.addPosition("a1b1", [-3, 1, 0, 0, -2, 0, 0, 0, 19, 18]);
    design.addPosition("b1b1", [-3, 1, -1, 0, 0, 0, 0, 0, 18, 18]);
    design.addPosition("c1b1", [-3, 0, -1, 0, 0, -4, 0, 0, 17, 18]);
    design.addPosition("a3c1", [0, 1, 0, 3, 0, 0, 0, 4, 17, 9]);
    design.addPosition("b3c1", [0, 1, -1, 3, 0, 0, 0, 0, 16, 9]);
    design.addPosition("c3c1", [0, 0, -1, 3, 0, 0, 2, 0, 15, 9]);
    design.addPosition("a2c1", [-3, 1, 0, 3, 0, 0, 0, 0, 14, 9]);
    design.addPosition("b2c1", [-3, 1, -1, 3, -2, -4, 2, 4, 13, 9]);
    design.addPosition("c2c1", [-3, 0, -1, 3, 0, 0, 0, 0, 12, 9]);
    design.addPosition("a1c1", [-3, 1, 0, 0, -2, 0, 0, 0, 11, 9]);
    design.addPosition("b1c1", [-3, 1, -1, 0, 0, 0, 0, 0, 10, 9]);
    design.addPosition("c1c1", [-3, 0, -1, 0, 0, -4, 0, 0, 9, 9]);
    design.addPosition("a3", [0, 1, 0, 3, 0, 0, 0, 4, 0, 0]);
    design.addPosition("b3", [0, 1, -1, 3, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, -1, 3, 0, 0, 2, 0, 0, 0]);
    design.addPosition("a2", [-3, 1, 0, 3, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [-3, 1, -1, 3, -2, -4, 2, 4, 0, 0]);
    design.addPosition("c2", [-3, 0, -1, 3, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [-3, 1, 0, 0, -2, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [-3, 1, -1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [-3, 0, -1, 0, 0, -4, 0, 0, 0, 0]);

    design.addZone("board-zone", 1, [87, 88, 89, 84, 85, 86, 81, 82, 83]);
    design.addZone("board-zone", 2, [87, 88, 89, 84, 85, 86, 81, 82, 83]);
    design.addZone("goal-zone", 1, [87, 88, 89, 84, 81]);
    design.addZone("goal-zone", 2, [87, 88, 89, 84, 81]);
    design.addZone("check-zone", 1, [60, 61, 62, 57, 54, 33, 34, 35, 30, 27, 6, 7, 8, 3, 0, 69, 70, 71, 66, 63, 42, 43, 44, 39, 36, 15, 16, 17, 12, 9, 78, 79, 80, 75, 72, 51, 52, 53, 48, 45, 24, 25, 26, 21, 18]);
    design.addZone("check-zone", 2, [60, 61, 62, 57, 54, 33, 34, 35, 30, 27, 6, 7, 8, 3, 0, 69, 70, 71, 66, 63, 42, 43, 44, 39, 36, 15, 16, 17, 12, 9, 78, 79, 80, 75, 72, 51, 52, 53, 48, 45, 24, 25, 26, 21, 18]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("B1", 0);

    design.addPiece("B2", 1);

    design.addPiece("B3", 2);

    design.addPiece("S1", 3);
    design.addDrop(3, 0, [], 0);

    design.addPiece("S2", 4);
    design.addDrop(4, 0, [], 1);

    design.addPiece("S3", 5);
    design.addDrop(5, 0, [], 2);

    design.addPiece("None", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("XB1", "X B1");
    view.defPiece("OB1", "O B1");
    view.defPiece("XB2", "X B2");
    view.defPiece("OB2", "O B2");
    view.defPiece("XB3", "X B3");
    view.defPiece("OB3", "O B3");
    view.defPiece("XS1", "X S1");
    view.defPiece("OS1", "O S1");
    view.defPiece("XS2", "X S2");
    view.defPiece("OS2", "O S2");
    view.defPiece("XS3", "X S3");
    view.defPiece("OS3", "O S3");
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
    view.defPosition("a3c3", 400, 30, 50, 50);
    view.defPosition("b3c3", 453, 27, 50, 50);
    view.defPosition("c3c3", 506, 24, 50, 50);
    view.defPosition("a2c3", 400, 80, 50, 50);
    view.defPosition("b2c3", 453, 77, 50, 50);
    view.defPosition("c2c3", 506, 74, 50, 50);
    view.defPosition("a1c3", 400, 130, 50, 50);
    view.defPosition("b1c3", 453, 127, 50, 50);
    view.defPosition("c1c3", 506, 124, 50, 50);
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
    view.defPosition("a3c2", 405, 210, 50, 50);
    view.defPosition("b3c2", 458, 207, 50, 50);
    view.defPosition("c3c2", 511, 204, 50, 50);
    view.defPosition("a2c2", 405, 260, 50, 50);
    view.defPosition("b2c2", 458, 257, 50, 50);
    view.defPosition("c2c2", 511, 254, 50, 50);
    view.defPosition("a1c2", 405, 310, 50, 50);
    view.defPosition("b1c2", 458, 307, 50, 50);
    view.defPosition("c1c2", 511, 304, 50, 50);
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
    view.defPosition("c3", 400, 30, 150, 150);
    view.defPosition("a2", 20, 230, 150, 150);
    view.defPosition("b2", 210, 220, 150, 150);
    view.defPosition("c2", 400, 210, 150, 150);
    view.defPosition("a1", 20, 410, 150, 150);
    view.defPosition("b1", 210, 400, 150, 150);
    view.defPosition("c1", 400, 390, 150, 150);
}
