Dagaz.View.TARGET_FLAT  = true;
Dagaz.View.TARGET_LARGE = true;

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

function p(name) {
  return Dagaz.Model.stringToPos(name);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("ne"); // 2
    design.addDirection("sw"); // 3
    design.addDirection("nw"); // 4
    design.addDirection("se"); // 5

    design.addPlayer("Gold", [1, 0, 3, 2, 5, 4]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5]);

    design.addTurn(1, 2); // 0
    design.addTurn(1, 2); // 1
    design.addTurn(1, 2); // 2
    design.addTurn(1, 2); // 3
    design.addTurn(1, 2); // 4
    design.addTurn(1, 2); // 5
    design.addTurn(1, 2); // 6
    design.addTurn(1, 2); // 7
    design.addTurn(1, 2); // 8

    design.addTurn(2, 2); // 9
    design.addTurn(2, 2); // 10
    design.addTurn(2, 2); // 11
    design.addTurn(2, 2); // 12
    design.addTurn(2, 2); // 13
    design.addTurn(2, 2); // 14
    design.addTurn(2, 2); // 15
    design.addTurn(2, 2); // 16
    design.addTurn(2, 2); // 17

    design.addTurn(1, 0); // 18
    design.addTurn(2, 0); // 19
    design.repeatMark();
    design.addTurn(1, 1); // 20
    design.addTurn(2, 1); // 21

    design.addPosition("I11", [9, 0, 9, 0, 0, 0]);
    design.addPosition("I22", [9, 8, 9, 0, 8, 0]);
    design.addPosition("I33", [9, 8, 9, 0, 8, 0]);
    design.addPosition("I44", [9, 8, 9, 0, 8, 0]);
    design.addPosition("I55", [9, 8, 9, 0, 8, 0]);
    design.addPosition("I66", [9, 8, 9, 0, 8, 0]);
    design.addPosition("I77", [9, 8, 9, 0, 8, 0]);
    design.addPosition("I88", [9, 8, 9, 0, 8, 0]);
    design.addPosition("I99", [0, 8, 0, 0, 8, 0]);
    design.addPosition("I12", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("I23", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("I34", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("I45", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("I56", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("I67", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("I78", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("I89", [-8, -9, 8, -9, 8, -8]);
    design.addPosition("H12", [8, 0, 8, -8, 0, -8]);
    design.addPosition("H23", [8, 7, 8, -8, 7, -8]);
    design.addPosition("H34", [8, 7, 8, -8, 7, -8]);
    design.addPosition("H45", [8, 7, 8, -8, 7, -8]);
    design.addPosition("H56", [8, 7, 8, -8, 7, -8]);
    design.addPosition("H67", [8, 7, 8, -8, 7, -8]);
    design.addPosition("H78", [8, 7, 8, -8, 7, -8]);
    design.addPosition("H89", [0, 7, 0, -8, 7, -8]);
    design.addPosition("H13", [-7, -8, 7, -8, 7, -7]);
    design.addPosition("H24", [-7, -8, 7, -8, 7, -7]);
    design.addPosition("H35", [-7, -8, 7, -8, 7, -7]);
    design.addPosition("H46", [-7, -8, 7, -8, 7, -7]);
    design.addPosition("H57", [-7, -8, 7, -8, 7, -7]);
    design.addPosition("H68", [-7, -8, 7, -8, 7, -7]);
    design.addPosition("H79", [-7, -8, 7, -8, 7, -7]);
    design.addPosition("G13", [7, 0, 7, -7, 0, -7]);
    design.addPosition("G24", [7, 6, 7, -7, 6, -7]);
    design.addPosition("G35", [7, 6, 7, -7, 6, -7]);
    design.addPosition("G46", [7, 6, 7, -7, 6, -7]);
    design.addPosition("G57", [7, 6, 7, -7, 6, -7]);
    design.addPosition("G68", [7, 6, 7, -7, 6, -7]);
    design.addPosition("G79", [0, 6, 0, -7, 6, -7]);
    design.addPosition("G14", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("G25", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("G36", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("G47", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("G58", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("G69", [-6, -7, 6, -7, 6, -6]);
    design.addPosition("F14", [6, 0, 6, -6, 0, -6]);
    design.addPosition("F25", [6, 5, 6, -6, 5, -6]);
    design.addPosition("F36", [6, 5, 6, -6, 5, -6]);
    design.addPosition("F47", [6, 5, 6, -6, 5, -6]);
    design.addPosition("F58", [6, 5, 6, -6, 5, -6]);
    design.addPosition("F69", [0, 5, 0, -6, 5, -6]);
    design.addPosition("F15", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("F26", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("F37", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("F48", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("F59", [-5, -6, 5, -6, 5, -5]);
    design.addPosition("E15", [5, 0, 5, -5, 0, -5]);
    design.addPosition("E26", [5, 4, 5, -5, 4, -5]);
    design.addPosition("E37", [5, 4, 5, -5, 4, -5]);
    design.addPosition("E48", [5, 4, 5, -5, 4, -5]);
    design.addPosition("E59", [0, 4, 0, -5, 4, -5]);
    design.addPosition("E16", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("E27", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("E38", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("E49", [-4, -5, 4, -5, 4, -4]);
    design.addPosition("D16", [4, 0, 4, -4, 0, -4]);
    design.addPosition("D27", [4, 3, 4, -4, 3, -4]);
    design.addPosition("D38", [4, 3, 4, -4, 3, -4]);
    design.addPosition("D49", [0, 3, 0, -4, 3, -4]);
    design.addPosition("D17", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("D28", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("D39", [-3, -4, 3, -4, 3, -3]);
    design.addPosition("C17", [3, 0, 3, -3, 0, -3]);
    design.addPosition("C28", [3, 2, 3, -3, 2, -3]);
    design.addPosition("C39", [0, 2, 0, -3, 2, -3]);
    design.addPosition("C18", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("C29", [-2, -3, 2, -3, 2, -2]);
    design.addPosition("B18", [2, 0, 2, -2, 0, -2]);
    design.addPosition("B29", [0, 1, 0, -2, 1, -2]);
    design.addPosition("B19", [-1, -2, 1, -2, 1, -1]);
    design.addPosition("A19", [0, 0, 0, -1, 0, -1]);
    design.addPosition("GLA0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GFL0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GFL1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GSW0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GGL0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GVG0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GVG1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GVG2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GFE0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("GBL0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YLA0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YFL0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YFL1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YSW0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YGL0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YVG0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YVG1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YVG2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YFE0", [0, 0, 0, 0, 0, 0]);
    design.addPosition("YBL0", [0, 0, 0, 0, 0, 0]);

    design.addZone("board-zone", 1, [80, 77, 79, 78, 72, 75, 73, 76, 74, 65, 69, 66, 70, 67, 71, 68, 56, 61, 57, 62, 58, 63, 59, 64, 60, 45, 51, 46, 52, 47, 53, 48, 54, 49, 55, 50, 32, 39, 33, 40, 34, 41, 35, 42, 36, 43, 37, 44, 38, 17, 25, 18, 26, 19, 27, 20, 28, 21, 29, 22, 30, 23, 31, 24, 0, 9, 1, 10, 2, 11, 3, 12, 4, 13, 5, 14, 6, 15, 7, 16, 8]);
    design.addZone("board-zone", 2, [80, 77, 79, 78, 72, 75, 73, 76, 74, 65, 69, 66, 70, 67, 71, 68, 56, 61, 57, 62, 58, 63, 59, 64, 60, 45, 51, 46, 52, 47, 53, 48, 54, 49, 55, 50, 32, 39, 33, 40, 34, 41, 35, 42, 36, 43, 37, 44, 38, 17, 25, 18, 26, 19, 27, 20, 28, 21, 29, 22, 30, 23, 31, 24, 0, 9, 1, 10, 2, 11, 3, 12, 4, 13, 5, 14, 6, 15, 7, 16, 8]);
    design.addZone("wedge", 1, [73, 18, 23]);
    design.addZone("wedge", 2, [73, 18, 23]);
    design.addZone("dishonor", 1, [80, 77, 79, 78, 17, 24, 0, 9, 1, 7, 16, 8]);
    design.addZone("dishonor", 2, [80, 77, 79, 78, 17, 24, 0, 9, 1, 7, 16, 8]);
    design.addZone("home", 1, [91, 92, 93, 94, 96, 97, 98, 99, 100, 95]);
    design.addZone("home", 2, [81, 82, 83, 84, 86, 87, 88, 89, 90, 85]);
    design.addZone("s0", 1, [80, 79, 77, 78, 75, 76, 72, 73, 74, 69, 70, 71, 65, 66, 67, 68, 61, 62, 63, 64, 57, 58, 59, 53]);
    design.addZone("s0", 2, [80, 79, 77, 78, 75, 76, 72, 73, 74, 69, 70, 71, 65, 66, 67, 68, 61, 62, 63, 64, 57, 58, 59, 53]);
    design.addZone("s1", 1, [8, 16, 24, 7, 31, 15, 38, 23, 6, 44, 30, 14, 50, 37, 22, 5, 55, 43, 29, 13, 49, 36, 21, 42]);
    design.addZone("s1", 2, [8, 16, 24, 7, 31, 15, 38, 23, 6, 44, 30, 14, 50, 37, 22, 5, 55, 43, 29, 13, 49, 36, 21, 42]);
    design.addZone("s2", 1, [0, 9, 1, 17, 10, 25, 2, 18, 32, 11, 26, 39, 3, 19, 33, 45, 12, 27, 40, 51, 20, 34, 46, 41]);
    design.addZone("s2", 2, [0, 9, 1, 17, 10, 25, 2, 18, 32, 11, 26, 39, 3, 19, 33, 45, 12, 27, 40, 51, 20, 34, 46, 41]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	3);	// $4
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	4);	// $5
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	5);	// $6
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	6);	// $7
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Goal", 0);

    design.addPiece("Vanguard", 1);
    design.addMove(1, 0, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 0, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 0, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 0, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 0, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 0, [3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("VanguardCarrier", 2);

    design.addPiece("PowerVanguard", 3);

    design.addPiece("PowerVanguardCarrier", 4);

    design.addPiece("Lancer", 5);

    design.addPiece("LancerCarrier", 6);

    design.addPiece("Fencer", 7);

    design.addPiece("FencerCarrier", 8);

    design.addPiece("Swift", 9);

    design.addPiece("SwiftCarrier", 10);

    design.addPiece("Flier", 11);

    design.addPiece("FlierCarrier", 12);

    design.addPiece("Blockader", 13);

    design.setup("Gold", "Vanguard",  p('YVG0'));
    design.setup("Gold", "Vanguard",  p('YVG1'));
    design.setup("Gold", "Vanguard",  p('YVG2'));
    design.setup("Gold", "Lancer",    p('YLA0'));
    design.setup("Gold", "Flier",     p('YFL0'));
    design.setup("Gold", "Flier",     p('YFL1'));
    design.setup("Gold", "Swift",     p('YSW0'));
    design.setup("Gold", "Fencer",    p('YFE0'));
    design.setup("Gold", "Blockader", p('YBL0'));
    design.setup("Gold", "Goal",      p('YGL0'));

    design.setup("Green", "Vanguard", p('GVG0'));
    design.setup("Green", "Vanguard", p('GVG1'));
    design.setup("Green", "Vanguard", p('GVG2'));
    design.setup("Green", "Lancer",   p('GLA0'));
    design.setup("Green", "Flier",    p('GFL0'));
    design.setup("Green", "Flier",    p('GFL1'));
    design.setup("Green", "Swift",    p('GSW0'));
    design.setup("Green", "Fencer",   p('GFE0'));
    design.setup("Green", "Blockader",p('GBL0'));
    design.setup("Green", "Goal",     p('GGL0'));
}

Dagaz.View.configure = function(view) {
    view.defBoardTriangular(821, 708, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const color = 0x353535;
    const tokenPath = '../res/xiangqi';

    view.defPieceToken(0, 1, tokenPath, 'token.js', 'rGoal', 'Bump', color);
    view.defPieceToken(0, 2, tokenPath, 'token.js', 'bGoal', 'Bump', color);
    view.defPieceToken(1, 1, tokenPath, 'token.js', 'rVanguard', 'Bump', color);
    view.defPieceToken(1, 2, tokenPath, 'token.js', 'bVanguard', 'Bump', color);
    view.defPieceToken(2, 1, tokenPath, 'token.js', 'rVanguardCarrier', 'Bump', color);
    view.defPieceToken(2, 2, tokenPath, 'token.js', 'bVanguardCarrier', 'Bump', color);
    view.defPieceToken(3, 1, tokenPath, 'token.js', 'rVanguardPower', 'Bump', color);
    view.defPieceToken(3, 2, tokenPath, 'token.js', 'bVanguardPower', 'Bump', color);
    view.defPieceToken(4, 1, tokenPath, 'token.js', 'rVanguardCarrierPower', 'Bump', color);
    view.defPieceToken(4, 2, tokenPath, 'token.js', 'bVanguardCarrierPower', 'Bump', color);
    view.defPieceToken(5, 1, tokenPath, 'token.js', 'rLancer', 'Bump', color);
    view.defPieceToken(5, 2, tokenPath, 'token.js', 'bLancer', 'Bump', color);
    view.defPieceToken(6, 1, tokenPath, 'token.js', 'rLancerCarrier', 'Bump', color);
    view.defPieceToken(6, 2, tokenPath, 'token.js', 'bLancerCarrier', 'Bump', color);
    view.defPieceToken(7, 1, tokenPath, 'token.js', 'rFencer', 'Bump', color);
    view.defPieceToken(7, 2, tokenPath, 'token.js', 'bFencer', 'Bump', color);
    view.defPieceToken(8, 1, tokenPath, 'token.js', 'rFencerCarrier', 'Bump', color);
    view.defPieceToken(8, 2, tokenPath, 'token.js', 'bFencerCarrier', 'Bump', color);
    view.defPieceToken(9, 1, tokenPath, 'token.js', 'rSwift', 'Bump', color);
    view.defPieceToken(9, 2, tokenPath, 'token.js', 'bSwift', 'Bump', color);
    view.defPieceToken(10, 1, tokenPath, 'token.js', 'rSwiftCarrier', 'Bump', color);
    view.defPieceToken(10, 2, tokenPath, 'token.js', 'bSwiftCarrier', 'Bump', color);
    view.defPieceToken(11, 1, tokenPath, 'token.js', 'rFlier', 'Bump', color);
    view.defPieceToken(11, 2, tokenPath, 'token.js', 'bFlier', 'Bump', color);
    view.defPieceToken(12, 1, tokenPath, 'token.js', 'rFlierCarrier', 'Bump', color);
    view.defPieceToken(12, 2, tokenPath, 'token.js', 'bFlierCarrier', 'Bump', color);
    view.defPieceToken(13, 1, tokenPath, 'token.js', 'rBlockader', 'Bump', color);
    view.defPieceToken(13, 2, tokenPath, 'token.js', 'bBlockader', 'Bump', color);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "1989 Leonard B. Loyd, Jr", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("I11", -363, 325, 44, 33, 0);
    view.defPosition("I22", -272, 325, 44, 33, 0);
    view.defPosition("I33", -180, 325, 44, 33, 0);
    view.defPosition("I44", -90, 325, 44, 33, 0);
    view.defPosition("I55", 0, 325, 44, 33, 0);
    view.defPosition("I66", 90, 325, 44, 33, 0);
    view.defPosition("I77", 180, 325, 44, 33, 0);
    view.defPosition("I88", 272, 325, 44, 33, 0);
    view.defPosition("I99", 363, 325, 44, 33, 0);
    view.defPosition("I12", -318, 298, 44, 33, 0);
    view.defPosition("I23", -226, 298, 44, 33, 0);
    view.defPosition("I34", -135, 298, 44, 33, 0);
    view.defPosition("I45", -45, 298, 44, 33, 0);
    view.defPosition("I56", 45, 298, 44, 33, 0);
    view.defPosition("I67", 135, 298, 44, 33, 0);
    view.defPosition("I78", 226, 298, 44, 33, 0);
    view.defPosition("I89", 318, 298, 44, 33, 0);
    view.defPosition("H12", -318, 245, 44, 33, 0);
    view.defPosition("H23", -226, 245, 44, 33, 0);
    view.defPosition("H34", -135, 245, 44, 33, 0);
    view.defPosition("H45", -45, 245, 44, 33, 0);
    view.defPosition("H56", 45, 245, 44, 33, 0);
    view.defPosition("H67", 135, 245, 44, 33, 0);
    view.defPosition("H78", 226, 245, 44, 33, 0);
    view.defPosition("H89", 318, 245, 44, 33, 0);
    view.defPosition("H13", -272, 220, 44, 33, 0);
    view.defPosition("H24", -181, 220, 44, 33, 0);
    view.defPosition("H35", -90, 220, 44, 33, 0);
    view.defPosition("H46", 0, 220, 44, 33, 0);
    view.defPosition("H57", 90, 220, 44, 33, 0);
    view.defPosition("H68", 181, 220, 44, 33, 0);
    view.defPosition("H79", 272, 220, 44, 33, 0);
    view.defPosition("G13", -274, 167, 44, 33, 0);
    view.defPosition("G24", -181, 167, 44, 33, 0);
    view.defPosition("G35", -90, 167, 44, 33, 0);
    view.defPosition("G46", 0, 167, 44, 33, 0);
    view.defPosition("G57", 90, 167, 44, 33, 0);
    view.defPosition("G68", 181, 167, 44, 33, 0);
    view.defPosition("G79", 274, 167, 44, 33, 0);
    view.defPosition("G14", -227, 142, 44, 33, 0);
    view.defPosition("G25", -135, 142, 44, 33, 0);
    view.defPosition("G36", -45, 142, 44, 33, 0);
    view.defPosition("G47", 45, 142, 44, 33, 0);
    view.defPosition("G58", 135, 142, 44, 33, 0);
    view.defPosition("G69", 227, 142, 44, 33, 0);
    view.defPosition("F14", -228, 88, 44, 33, 0);
    view.defPosition("F25", -135, 88, 44, 33, 0);
    view.defPosition("F36", -45, 88, 44, 33, 0);
    view.defPosition("F47", 45, 88, 44, 33, 0);
    view.defPosition("F58", 135, 88, 44, 33, 0);
    view.defPosition("F69", 228, 88, 44, 33, 0);
    view.defPosition("F15", -181, 64, 44, 33, 0);
    view.defPosition("F26", -90, 64, 44, 33, 0);
    view.defPosition("F37", 0, 64, 44, 33, 0);
    view.defPosition("F48", 90, 64, 44, 33, 0);
    view.defPosition("F59", 181, 64, 44, 33, 0);
    view.defPosition("E15", -181, 10, 44, 33, 0);
    view.defPosition("E26", -90, 10, 44, 33, 0);
    view.defPosition("E37", 0, 10, 44, 33, 0);
    view.defPosition("E48", 90, 10, 44, 33, 0);
    view.defPosition("E59", 181, 10, 44, 33, 0);
    view.defPosition("E16", -135, -14, 44, 33, 0);
    view.defPosition("E27", -45, -14, 44, 33, 0);
    view.defPosition("E38", 45, -14, 44, 33, 0);
    view.defPosition("E49", 135, -14, 44, 33, 0);
    view.defPosition("D16", -137, -68, 44, 33, 0);
    view.defPosition("D27", -45, -68, 44, 33, 0);
    view.defPosition("D38", 45, -68, 44, 33, 0);
    view.defPosition("D49", 137, -68, 44, 33, 0);
    view.defPosition("D17", -90, -91, 44, 33, 0);
    view.defPosition("D28", 0, -91, 44, 33, 0);
    view.defPosition("D39", 90, -91, 44, 33, 0);
    view.defPosition("C17", -91, -147, 44, 33, 0);
    view.defPosition("C28", 0, -147, 44, 33, 0);
    view.defPosition("C39", 91, -147, 44, 33, 0);
    view.defPosition("C18", -45, -170, 44, 33, 0);
    view.defPosition("C29", 45, -170, 44, 33, 0);
    view.defPosition("B18", -45, -226, 44, 33, 0);
    view.defPosition("B29", 45, -226, 44, 33, 0);
    view.defPosition("B19", 0, -248, 44, 33, 0);
    view.defPosition("A19", 0, -304, 44, 33, 0);


    view.defPosition("GLA0", -328, 8, 44, 33, 0);
    view.defPosition("GFL0", -448, 164, 44, 33, 0);
    view.defPosition("GFL1", -388, 164, 44, 33, 0);
    view.defPosition("GSW0", -448, 8, 44, 33, 0);
    view.defPosition("GGL0", -448, 242, 44, 33, 0);
    view.defPosition("GVG0", -448, 86, 44, 33, 0);
    view.defPosition("GVG1", -388, 86, 44, 33, 0);
    view.defPosition("GVG2", -328, 86, 44, 33, 0);
    view.defPosition("GFE0", -388, 8, 44, 33, 0);
    view.defPosition("GBL0", -268, 8, 44, 33, 0);

    view.defPosition("YLA0", 328, 8, 44, 33, 0);
    view.defPosition("YFL0", 388, 164, 44, 33, 0);
    view.defPosition("YFL1", 448, 164, 44, 33, 0);
    view.defPosition("YSW0", 448, 8, 44, 33, 0);
    view.defPosition("YGL0", 448, 242, 44, 33, 0);
    view.defPosition("YVG0", 328, 86, 44, 33, 0);
    view.defPosition("YVG1", 388, 86, 44, 33, 0);
    view.defPosition("YVG2", 448, 86, 44, 33, 0);
    view.defPosition("YFE0", 388, 8, 44, 33, 0);
    view.defPosition("YBL0", 268, 8, 44, 33, 0);
}
