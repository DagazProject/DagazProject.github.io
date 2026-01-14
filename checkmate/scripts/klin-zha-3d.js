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
    design.addPosition("G1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G10", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y10", [0, 0, 0, 0, 0, 0]);

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
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	0);	// Goal
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	7);	// $8
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	12);
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	8);	// $9
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
    design.addCommand(0, ZRF.PARAM,	9);	// $10
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
    design.addCommand(0, ZRF.PARAM,	10);	// $11
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
    design.addCommand(0, ZRF.PARAM,	11);	// $12
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
    design.addCommand(0, ZRF.PARAM,	12);	// $13
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
    design.addCommand(0, ZRF.PARAM,	13);	// $14
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	0);	// Goal
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	4);	// $5
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	5);	// $6
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	6);	// $7
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// Goal
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	7);	// $8
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	8);	// $9
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	9);	// $10
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	10);	// $11
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	11);	// $12
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	12);	// $13
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	13);	// $14
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.PARAM,	14);	// $15
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	15);	// $16
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	16);	// $17
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	17);	// $18
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	18);	// $19
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	19);	// $20
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	12);
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	20);	// $21
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// Goal
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	5);	// $6
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	6);	// $7
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	0);	// Goal
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	7);	// $8
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	8);	// $9
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	9);	// $10
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	10);	// $11
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	11);	// $12
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	12);	// $13
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	13);	// $14
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	0);	// Goal
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	14);	// $15
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	15);	// $16
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	16);	// $17
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	17);	// $18
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	18);	// $19
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	19);	// $20
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	20);	// $21
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.PARAM,	21);	// $22
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	22);	// $23
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	23);	// $24
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	24);	// $25
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	25);	// $26
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	26);	// $27
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	12);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	27);	// $28
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	0);	// Goal
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	12);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	12);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	12);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	12);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	12);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	12);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	6);	// $7
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.LITERAL,	0);	// Goal
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	12);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	12);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	12);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	12);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	6);	// $7
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	12);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	7);	// $8
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	12);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.PARAM,	8);	// $9
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	0);	// Goal
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	12);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	12);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	12);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	12);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	7);	// $8
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	12);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	8);	// $9
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	12);
    design.addCommand(5, ZRF.FUNCTION,	6);	// mark
    design.addCommand(5, ZRF.PARAM,	9);	// $10
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	5);
    design.addCommand(5, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	7);	// back
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	6);
    design.addCommand(5, ZRF.LITERAL,	0);	// Goal
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.IF,	3);
    design.addCommand(5, ZRF.LITERAL,	0);	// false
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.LITERAL,	1);	// true
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	12);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	5);	// $6
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	12);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	6);	// $7
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	12);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	7);	// $8
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	12);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	8);	// $9
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	12);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	9);	// $10
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	12);
    design.addCommand(6, ZRF.FUNCTION,	6);	// mark
    design.addCommand(6, ZRF.PARAM,	10);	// $11
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	5);
    design.addCommand(6, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	7);	// back
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	6);
    design.addCommand(6, ZRF.LITERAL,	0);	// Goal
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.IF,	3);
    design.addCommand(6, ZRF.LITERAL,	0);	// false
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.LITERAL,	1);	// true
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	5);	// $6
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	6);	// $7
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	7);	// $8
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	8);	// $9
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	9);	// $10
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	10);	// $11
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	12);
    design.addCommand(7, ZRF.FUNCTION,	6);	// mark
    design.addCommand(7, ZRF.PARAM,	11);	// $12
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	5);
    design.addCommand(7, ZRF.LITERAL,	13);	// Blockader
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	7);	// back
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.LITERAL,	0);	// Goal
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	36);
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	0);	// Goal
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	36);
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	0);	// Goal
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	36);
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	0);	// Goal
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	36);
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	0);	// Goal
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	36);
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	0);	// Goal
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	36);
    design.addCommand(8, ZRF.FUNCTION,	6);	// mark
    design.addCommand(8, ZRF.PARAM,	6);	// $7
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	0);	// Goal
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	7);	// back
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	36);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	0);	// Goal
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	36);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	0);	// Goal
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	36);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	4);	// $5
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	0);	// Goal
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	36);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	5);	// $6
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	0);	// Goal
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	36);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	6);	// $7
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	0);	// Goal
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	36);
    design.addCommand(9, ZRF.FUNCTION,	6);	// mark
    design.addCommand(9, ZRF.PARAM,	7);	// $8
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	0);	// Goal
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	2);	// Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	4);	// Power-Vanguard-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	6);	// Lancer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	8);	// Fencer-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	10);	// Swift-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.LITERAL,	12);	// Flier-carrier
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	7);	// back
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("Goal", 0, 20000);

    design.addPiece("Vanguard", 1, 100);
    design.addMove(1, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(1, 3, [3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("VanguardCarrier", 2, 20100);
    design.addMove(2, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(2, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(2, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(2, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(2, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(2, 3, [3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("PowerVanguard", 3, 200);
    design.addMove(3, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 3, [3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(3, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("PowerVanguardCarrier", 4, 20200);
    design.addMove(4, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 3, [3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(4, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("Lancer", 5, 500);
    design.addMove(5, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 3, [3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(5, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("LancerCarrier", 6, 20500);
    design.addMove(6, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 3, [3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(6, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("Fencer", 7, 800);
    design.addMove(7, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 3, [3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(7, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("FencerCarrier", 8, 20800);
    design.addMove(8, 3, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 3, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 3, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 3, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 3, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 3, [3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(8, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("Swift", 9, 5000);
    design.addMove(9, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(9, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("SwiftCarrier", 10, 25000);
    design.addMove(10, 0, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 0, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 0, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 0, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 0, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 0, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 1, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [4, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 5, 1, 2, 0, 4, 5, 3, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(10, 2, [3, 1, 2, 0, 4, 5, 3, 3, 1, 2, 0, 4, 5, 3, 0, 1, 2, 0, 4, 5, 3, 4, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("Flier", 11, 3000);
    design.addMove(11, 4, [1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 4, [0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 4, [2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 4, [4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 4, [5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 4, [3, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 5, [1, 1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 5, [0, 0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 5, [2, 2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 5, [4, 4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 5, [5, 5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 5, [3, 3, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 6, [1, 1, 1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 6, [0, 0, 0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 6, [2, 2, 2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 6, [4, 4, 4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 6, [5, 5, 5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 6, [3, 3, 3, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 7, [1, 1, 1, 1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 7, [0, 0, 0, 0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 7, [2, 2, 2, 2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 7, [4, 4, 4, 4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 7, [5, 5, 5, 5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(11, 7, [3, 3, 3, 3, 3, 3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("FlierCarrier", 12, 23000);
    design.addMove(12, 4, [1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 4, [0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 4, [2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 4, [4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 4, [5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 4, [3, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 5, [1, 1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 5, [0, 0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 5, [2, 2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 5, [4, 4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 5, [5, 5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 5, [3, 3, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 6, [1, 1, 1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 6, [0, 0, 0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 6, [2, 2, 2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 6, [4, 4, 4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 6, [5, 5, 5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 6, [3, 3, 3, 3, 3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 7, [1, 1, 1, 1, 1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 7, [0, 0, 0, 0, 0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 7, [2, 2, 2, 2, 2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 7, [4, 4, 4, 4, 4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 7, [5, 5, 5, 5, 5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(12, 7, [3, 3, 3, 3, 3, 3, 1, 2, 0, 4, 5, 3], 1);

    design.addPiece("Blockader", 13, 0);
    design.addMove(13, 8, [1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 8, [0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 8, [2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 8, [4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 8, [5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 8, [3, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 9, [1, 1, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 9, [0, 0, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 9, [2, 2, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 9, [4, 4, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 9, [5, 5, 1, 2, 0, 4, 5, 3], 1);
    design.addMove(13, 9, [3, 3, 1, 2, 0, 4, 5, 3], 1);

    design.setup("Gold", "Vanguard",  p('Y6'));
    design.setup("Gold", "Vanguard",  p('Y7'));
    design.setup("Gold", "Vanguard",  p('Y8'));
    design.setup("Gold", "Lancer",    p('Y1'));
    design.setup("Gold", "Flier",     p('Y2'));
    design.setup("Gold", "Flier",     p('Y3'));
    design.setup("Gold", "Swift",     p('Y4'));
    design.setup("Gold", "Fencer",    p('Y9'));
    design.setup("Gold", "Blockader", p('Y10'));
    design.setup("Gold", "Goal",      p('Y5'));

    design.setup("Green", "Vanguard", p('G6'));
    design.setup("Green", "Vanguard", p('G7'));
    design.setup("Green", "Vanguard", p('G8'));
    design.setup("Green", "Lancer",   p('G1'));
    design.setup("Green", "Flier",    p('G2'));
    design.setup("Green", "Flier",    p('G3'));
    design.setup("Green", "Swift",    p('G4'));
    design.setup("Green", "Fencer",   p('G9'));
    design.setup("Green", "Blockader",p('G10'));
    design.setup("Green", "Goal",     p('G5'));
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

    view.defPosition("G1", -328, 8, 44, 33, 0);
    view.defPosition("G2", -448, 164, 44, 33, 0);
    view.defPosition("G3", -388, 164, 44, 33, 0);
    view.defPosition("G4", -448, 8, 44, 33, 0);
    view.defPosition("G5", -448, 242, 44, 33, 0);
    view.defPosition("G6", -448, 86, 44, 33, 0);
    view.defPosition("G7", -388, 86, 44, 33, 0);
    view.defPosition("G8", -328, 86, 44, 33, 0);
    view.defPosition("G9", -388, 8, 44, 33, 0);
    view.defPosition("G10", -268, 8, 44, 33, 0);

    view.defPosition("Y1", 328, 8, 44, 33, 0);
    view.defPosition("Y2", 388, 164, 44, 33, 0);
    view.defPosition("Y3", 448, 164, 44, 33, 0);
    view.defPosition("Y4", 448, 8, 44, 33, 0);
    view.defPosition("Y5", 448, 242, 44, 33, 0);
    view.defPosition("Y6", 328, 86, 44, 33, 0);
    view.defPosition("Y7", 388, 86, 44, 33, 0);
    view.defPosition("Y8", 448, 86, 44, 33, 0);
    view.defPosition("Y9", 388, 8, 44, 33, 0);
    view.defPosition("Y10", 268, 8, 44, 33, 0);
}
