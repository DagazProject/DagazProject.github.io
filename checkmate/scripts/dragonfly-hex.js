Dagaz.Model.WIDTH     = 9;
Dagaz.Model.HEIGHT    = 9;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");  // 0
    design.addDirection("s");   // 1
    design.addDirection("sw");  // 2
    design.addDirection("sse"); // 3
    design.addDirection("nne"); // 4
    design.addDirection("e");   // 5
    design.addDirection("nnw"); // 6
    design.addDirection("ssw"); // 7
    design.addDirection("w");   // 8
    design.addDirection("ne");  // 9
    design.addDirection("nw");  // 10
    design.addDirection("n");   // 11
    design.addDirection("nr");  // 12
    design.addDirection("sr");  // 13
    design.addDirection("nx");  // 14

    design.addPlayer("White", [10, 11, 9, 6, 7, 8, 3, 4, 5, 2, 0, 1, 12, 13, 14]);
    design.addPlayer("Black", [10, 11, 9, 6, 7, 8, 3, 4, 5, 2, 0, 1, 13, 12, 14]);

    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [1, 9, 8, 10, 0, 0, 0, 17, 0, 0, 0, 0, 78, 115, 9]);
    design.addPosition("f9", [1, 9, 8, 10, 0, 0, 0, 17, 7, 0, -1, 0, 77, 114, 9]);
    design.addPosition("g9", [1, 9, 8, 10, 0, 0, 0, 17, 7, 0, -1, 0, 76, 113, 9]);
    design.addPosition("h9", [1, 9, 8, 10, 0, 0, 0, 17, 7, 0, -1, 0, 75, 112, 9]);
    design.addPosition("i9", [0, 9, 8, 0, 0, 0, 0, 17, 7, 0, -1, 0, 74, 111, 9]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [1, 9, 8, 10, 0, -7, 0, 17, 0, -8, 0, 0, 70, 107, 9]);
    design.addPosition("e8", [1, 9, 8, 10, 0, -7, 0, 17, 7, -8, -1, -9, 69, 106, 9]);
    design.addPosition("f8", [1, 9, 8, 10, 0, -7, -10, 17, 7, -8, -1, -9, 68, 105, 9]);
    design.addPosition("g8", [1, 9, 8, 10, 0, -7, -10, 17, 7, -8, -1, -9, 67, 104, 9]);
    design.addPosition("h8", [1, 9, 8, 10, 0, 0, -10, 17, 7, -8, -1, -9, 66, 103, 9]);
    design.addPosition("i8", [0, 9, 8, 0, 0, 0, -10, 17, 7, 0, -1, -9, 65, 102, 9]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [1, 9, 8, 10, 0, -7, 0, 17, 0, -8, 0, 0, 62, 99, 9]);
    design.addPosition("d7", [1, 9, 8, 10, -17, -7, 0, 17, 7, -8, -1, -9, 61, 98, 9]);
    design.addPosition("e7", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 60, 97, 9]);
    design.addPosition("f7", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 59, 96, 9]);
    design.addPosition("g7", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 58, 95, 9]);
    design.addPosition("h7", [1, 9, 8, 10, -17, 0, -10, 17, 7, -8, -1, -9, 57, 94, 9]);
    design.addPosition("i7", [0, 9, 8, 0, 0, 0, -10, 17, 7, 0, -1, -9, 56, 93, 9]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [1, 9, 8, 10, 0, -7, 0, 17, 0, -8, 0, 0, 54, 91, 9]);
    design.addPosition("c6", [1, 9, 8, 10, -17, -7, 0, 17, 7, -8, -1, -9, 53, 90, 9]);
    design.addPosition("d6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 52, 89, 9]);
    design.addPosition("e6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 51, 88, 9]);
    design.addPosition("f6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 50, 87, 9]);
    design.addPosition("g6", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 49, 86, 9]);
    design.addPosition("h6", [1, 9, 8, 10, -17, 0, -10, 17, 7, -8, -1, -9, 48, 85, 9]);
    design.addPosition("i6", [0, 9, 8, 0, 0, 0, -10, 17, 7, 0, -1, -9, 47, 84, 9]);
    design.addPosition("a5", [1, 9, 0, 10, 0, -7, 0, 0, 0, -8, 0, 0, 46, 83, 9]);
    design.addPosition("b5", [1, 9, 8, 10, -17, -7, 0, 17, 0, -8, -1, -9, 45, 82, 9]);
    design.addPosition("c5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 44, 81, 9]);
    design.addPosition("d5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 43, 80, 9]);
    design.addPosition("e5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 42, 79, 9]);
    design.addPosition("f5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 41, 78, 9]);
    design.addPosition("g5", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 40, 77, 9]);
    design.addPosition("h5", [1, 9, 8, 0, -17, 0, -10, 17, 7, -8, -1, -9, 39, 76, 9]);
    design.addPosition("i5", [0, 0, 8, 0, 0, 0, -10, 0, 7, 0, -1, -9, 38, 75, 0]);
    design.addPosition("a4", [1, 9, 0, 10, -17, -7, 0, 0, 0, -8, 0, -9, 37, 74, 9]);
    design.addPosition("b4", [1, 9, 8, 10, -17, -7, -10, 17, 0, -8, -1, -9, 36, 73, 9]);
    design.addPosition("c4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 35, 72, 9]);
    design.addPosition("d4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 34, 71, 9]);
    design.addPosition("e4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 33, 70, 9]);
    design.addPosition("f4", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 32, 69, 9]);
    design.addPosition("g4", [1, 9, 8, 0, -17, -7, -10, 17, 7, -8, -1, -9, 31, 68, 9]);
    design.addPosition("h4", [0, 0, 8, 0, -17, 0, -10, 0, 7, -8, -1, -9, 30, 67, -44]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [1, 9, 0, 10, -17, -7, 0, 0, 0, -8, 0, -9, 28, 65, 9]);
    design.addPosition("b3", [1, 9, 8, 10, -17, -7, -10, 17, 0, -8, -1, -9, 27, 64, 9]);
    design.addPosition("c3", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 26, 63, 9]);
    design.addPosition("d3", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 25, 62, 9]);
    design.addPosition("e3", [1, 9, 8, 10, -17, -7, -10, 17, 7, -8, -1, -9, 24, 61, 9]);
    design.addPosition("f3", [1, 9, 8, 0, -17, -7, -10, 17, 7, -8, -1, -9, 23, 60, 9]);
    design.addPosition("g3", [0, 0, 8, 0, -17, 0, -10, 0, 7, -8, -1, -9, 22, 59, -53]);
    design.addPosition("h3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [1, 9, 0, 10, -17, -7, 0, 0, 0, -8, 0, -9, 19, 56, 9]);
    design.addPosition("b2", [1, 9, 8, 10, -17, -7, -10, 0, 0, -8, -1, -9, 18, 55, 9]);
    design.addPosition("c2", [1, 9, 8, 10, -17, -7, -10, 0, 7, -8, -1, -9, 17, 54, 9]);
    design.addPosition("d2", [1, 9, 8, 10, -17, -7, -10, 0, 7, -8, -1, -9, 16, 53, 9]);
    design.addPosition("e2", [1, 9, 8, 0, -17, -7, -10, 0, 7, -8, -1, -9, 15, 52, 9]);
    design.addPosition("f2", [0, 0, 8, 0, -17, 0, -10, 0, 7, -8, -1, -9, 14, 51, -62]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [1, 0, 0, 0, -17, -7, 0, 0, 0, -8, 0, -9, 10, 47, -44]);
    design.addPosition("b1", [1, 0, 0, 0, -17, -7, -10, 0, 0, -8, -1, -9, 9, 46, -53]);
    design.addPosition("c1", [1, 0, 0, 0, -17, -7, -10, 0, 0, -8, -1, -9, 8, 45, -62]);
    design.addPosition("d1", [1, 0, 0, 0, -17, -7, -10, 0, 0, -8, -1, -9, 7, 44, -71]);
    design.addPosition("e1", [0, 0, 0, 0, -17, 0, -10, 0, 0, -8, -1, -9, 6, 43, -71]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("Z10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0]);
    design.addPosition("Z9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -3, 0]);
    design.addPosition("U1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("U3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [36, 28, 20, 12, 4, 5, 6, 7, 8]);
    design.addZone("last-rank", 2, [72, 73, 74, 75, 76, 68, 60, 52, 44]);
    design.addZone("board-zone", 1, [72, 73, 74, 75, 76, 63, 64, 65, 66, 67, 68, 54, 55, 56, 57, 58, 59, 60, 45, 46, 47, 48, 49, 50, 51, 52, 36, 37, 38, 39, 40, 41, 42, 43, 44, 28, 29, 30, 31, 32, 33, 34, 35, 20, 21, 22, 23, 24, 25, 26, 12, 13, 14, 15, 16, 17, 4, 5, 6, 7, 8]);
    design.addZone("board-zone", 2, [72, 73, 74, 75, 76, 63, 64, 65, 66, 67, 68, 54, 55, 56, 57, 58, 59, 60, 45, 46, 47, 48, 49, 50, 51, 52, 36, 37, 38, 39, 40, 41, 42, 43, 44, 28, 29, 30, 31, 32, 33, 34, 35, 20, 21, 22, 23, 24, 25, 26, 12, 13, 14, 15, 16, 17, 4, 5, 6, 7, 8]);
    design.addZone("prev-rank", 1, [45, 37, 29, 21, 13, 14, 15, 16, 17]);
    design.addZone("prev-rank", 2, [63, 64, 65, 66, 67, 59, 51, 43, 35]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	1);	// Rook
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	1);	// Rook
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	1);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	21);	// position
    design.addCommand(3, ZRF.ON_BOARD_DIR,	14);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-11);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	1);	// Rook
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	4);	// $5
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [11], 0);
    design.addMove(0, 1, [10], 0);
    design.addMove(0, 1, [9], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 2, [11, 11], 0);
    design.addMove(1, 2, [1, 1], 0);
    design.addMove(1, 2, [10, 10], 0);
    design.addMove(1, 2, [9, 9], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 3, [36, 14], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 4, [5, 9], 0);
    design.addMove(2, 4, [5, 0], 0);
    design.addMove(2, 4, [8, 10], 0);
    design.addMove(2, 4, [8, 2], 0);
    design.addMove(2, 4, [6, 11], 0);
    design.addMove(2, 4, [6, 10], 0);
    design.addMove(2, 4, [4, 11], 0);
    design.addMove(2, 4, [4, 9], 0);
    design.addMove(2, 4, [7, 1], 0);
    design.addMove(2, 4, [7, 2], 0);
    design.addMove(2, 4, [3, 1], 0);
    design.addMove(2, 4, [3, 0], 0);
    design.addMove(2, 3, [36, 14], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 2, [6, 6], 0);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [4, 4], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [5, 5], 0);
    design.addMove(3, 2, [8, 8], 0);
    design.addMove(3, 3, [36, 14], 0);

    design.addPiece("King", 4, 20000);
    design.addMove(4, 5, [11], 0);
    design.addMove(4, 5, [1], 0);
    design.addMove(4, 5, [8], 0);
    design.addMove(4, 5, [5], 0);
    design.addMove(4, 5, [10], 0);
    design.addMove(4, 5, [0], 0);
    design.addMove(4, 5, [2], 0);
    design.addMove(4, 5, [9], 0);
    design.addMove(4, 5, [6], 0);
    design.addMove(4, 5, [3], 0);
    design.addMove(4, 5, [7], 0);
    design.addMove(4, 5, [4], 0);
    design.addMove(4, 6, [9, 9, 9, 2, 2], 0);
    design.addMove(4, 6, [10, 10, 10, 0, 0], 0);

    design.setup("White", "Pawn", 72);
    design.setup("White", "Pawn", 64);
    design.setup("White", "Pawn", 56);
    design.setup("White", "Pawn", 57);
    design.setup("White", "Pawn", 58);
    design.setup("White", "Pawn", 50);
    design.setup("White", "Pawn", 42);
    design.setup("White", "Pawn", 43);
    design.setup("White", "Pawn", 44);
    design.setup("White", "Rook", 73);
    design.setup("White", "Rook", 52);
    design.setup("White", "Knight", 68);
    design.setup("White", "Knight", 60);
    design.setup("White", "Bishop", 74);
    design.setup("White", "Bishop", 75);
    design.setup("White", "King", 76);
    design.setup("Black", "Pawn", 36);
    design.setup("Black", "Pawn", 37);
    design.setup("Black", "Pawn", 38);
    design.setup("Black", "Pawn", 30);
    design.setup("Black", "Pawn", 22);
    design.setup("Black", "Pawn", 23);
    design.setup("Black", "Pawn", 24);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Rook", 28);
    design.setup("Black", "Rook", 7);
    design.setup("Black", "Knight", 5);
    design.setup("Black", "Knight", 6);
    design.setup("Black", "Bishop", 20);
    design.setup("Black", "Bishop", 12);
    design.setup("Black", "King", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a9", 186, -120, 49, 49);
    view.defPosition("b9", 246, -85, 49, 49);
    view.defPosition("c9", 306, -50, 49, 49);
    view.defPosition("d9", 366, -15, 49, 49);
    view.defPosition("e9", 426, 20, 49, 49);
    view.defPosition("f9", 486, 55, 49, 49);
    view.defPosition("g9", 546, 90, 49, 49);
    view.defPosition("h9", 606, 125, 49, 49);
    view.defPosition("i9", 666, 160, 49, 49);
    view.defPosition("a8", 186, -50, 49, 49);
    view.defPosition("b8", 246, -15, 49, 49);
    view.defPosition("c8", 306, 20, 49, 49);
    view.defPosition("d8", 366, 55, 49, 49);
    view.defPosition("e8", 426, 90, 49, 49);
    view.defPosition("f8", 486, 125, 49, 49);
    view.defPosition("g8", 546, 160, 49, 49);
    view.defPosition("h8", 606, 195, 49, 49);
    view.defPosition("i8", 666, 230, 49, 49);
    view.defPosition("a7", 186, 20, 49, 49);
    view.defPosition("b7", 246, 55, 49, 49);
    view.defPosition("c7", 306, 90, 49, 49);
    view.defPosition("d7", 366, 125, 49, 49);
    view.defPosition("e7", 426, 160, 49, 49);
    view.defPosition("f7", 486, 195, 49, 49);
    view.defPosition("g7", 546, 230, 49, 49);
    view.defPosition("h7", 606, 265, 49, 49);
    view.defPosition("i7", 666, 300, 49, 49);
    view.defPosition("a6", 186, 90, 49, 49);
    view.defPosition("b6", 246, 125, 49, 49);
    view.defPosition("c6", 306, 160, 49, 49);
    view.defPosition("d6", 366, 195, 49, 49);
    view.defPosition("e6", 426, 230, 49, 49);
    view.defPosition("f6", 486, 265, 49, 49);
    view.defPosition("g6", 546, 300, 49, 49);
    view.defPosition("h6", 606, 335, 49, 49);
    view.defPosition("i6", 666, 370, 49, 49);
    view.defPosition("a5", 186, 160, 49, 49);
    view.defPosition("b5", 246, 195, 49, 49);
    view.defPosition("c5", 306, 230, 49, 49);
    view.defPosition("d5", 366, 265, 49, 49);
    view.defPosition("e5", 426, 300, 49, 49);
    view.defPosition("f5", 486, 335, 49, 49);
    view.defPosition("g5", 546, 370, 49, 49);
    view.defPosition("h5", 606, 405, 49, 49);
    view.defPosition("i5", 666, 440, 49, 49);
    view.defPosition("a4", 186, 230, 49, 49);
    view.defPosition("b4", 246, 265, 49, 49);
    view.defPosition("c4", 306, 300, 49, 49);
    view.defPosition("d4", 366, 335, 49, 49);
    view.defPosition("e4", 426, 370, 49, 49);
    view.defPosition("f4", 486, 405, 49, 49);
    view.defPosition("g4", 546, 440, 49, 49);
    view.defPosition("h4", 606, 475, 49, 49);
    view.defPosition("i4", 666, 510, 49, 49);
    view.defPosition("a3", 186, 300, 49, 49);
    view.defPosition("b3", 246, 335, 49, 49);
    view.defPosition("c3", 306, 370, 49, 49);
    view.defPosition("d3", 366, 405, 49, 49);
    view.defPosition("e3", 426, 440, 49, 49);
    view.defPosition("f3", 486, 475, 49, 49);
    view.defPosition("g3", 546, 510, 49, 49);
    view.defPosition("h3", 606, 545, 49, 49);
    view.defPosition("i3", 666, 580, 49, 49);
    view.defPosition("a2", 186, 370, 49, 49);
    view.defPosition("b2", 246, 405, 49, 49);
    view.defPosition("c2", 306, 440, 49, 49);
    view.defPosition("d2", 366, 475, 49, 49);
    view.defPosition("e2", 426, 510, 49, 49);
    view.defPosition("f2", 486, 545, 49, 49);
    view.defPosition("g2", 546, 580, 49, 49);
    view.defPosition("h2", 606, 615, 49, 49);
    view.defPosition("i2", 666, 650, 49, 49);
    view.defPosition("a1", 186, 440, 49, 49);
    view.defPosition("b1", 246, 475, 49, 49);
    view.defPosition("c1", 306, 510, 49, 49);
    view.defPosition("d1", 366, 545, 49, 49);
    view.defPosition("e1", 426, 580, 49, 49);
    view.defPosition("f1", 486, 615, 49, 49);
    view.defPosition("g1", 546, 650, 49, 49);
    view.defPosition("h1", 606, 685, 49, 49);
    view.defPosition("i1", 666, 720, 49, 49);
    view.defPosition("X10", 0, 12, 68, 68);
    view.defPosition("Y10", 68, 12, 68, 68);
    view.defPosition("X9", 0, 80, 68, 68);
    view.defPosition("Y9", 68, 80, 68, 68);
    view.defPosition("X8", 0, 148, 68, 68);
    view.defPosition("Y8", 68, 148, 68, 68);
    view.defPosition("X7", 0, 216, 68, 68);
    view.defPosition("Y7", 68, 216, 68, 68);
    view.defPosition("X6", 0, 284, 68, 68);
    view.defPosition("Y6", 68, 284, 68, 68);
    view.defPosition("X5", 0, 352, 68, 68);
    view.defPosition("Y5", 68, 352, 68, 68);
    view.defPosition("X4", 0, 420, 68, 68);
    view.defPosition("Y4", 68, 420, 68, 68);
    view.defPosition("X3", 0, 488, 68, 68);
    view.defPosition("Y3", 68, 488, 68, 68);
    view.defPosition("X2", 0, 556, 68, 68);
    view.defPosition("Y2", 68, 556, 68, 68);
    view.defPosition("X1", 0, 624, 68, 68);
    view.defPosition("Y1", 68, 624, 68, 68);
    view.defPosition("Z10", 768, 12, 68, 68);
    view.defPosition("T10", 836, 12, 68, 68);
    view.defPosition("Z9", 768, 80, 68, 68);
    view.defPosition("T9", 836, 80, 68, 68);
    view.defPosition("Z8", 768, 148, 68, 68);
    view.defPosition("T8", 836, 148, 68, 68);
    view.defPosition("Z7", 768, 216, 68, 68);
    view.defPosition("T7", 836, 216, 68, 68);
    view.defPosition("Z6", 768, 284, 68, 68);
    view.defPosition("T6", 836, 284, 68, 68);
    view.defPosition("Z5", 768, 352, 68, 68);
    view.defPosition("T5", 836, 352, 68, 68);
    view.defPosition("Z4", 768, 420, 68, 68);
    view.defPosition("T4", 836, 420, 68, 68);
    view.defPosition("Z3", 768, 488, 68, 68);
    view.defPosition("T3", 836, 488, 68, 68);
    view.defPosition("Z2", 768, 556, 68, 68);
    view.defPosition("T2", 836, 556, 68, 68);
    view.defPosition("Z1", 768, 624, 68, 68);
    view.defPosition("T1", 836, 624, 68, 68);

    view.defPopup("Promote-3", 338, 100);
    view.defPopupPosition("U1", 10, 7, 68, 68);
    view.defPopupPosition("U2", 80, 7, 68, 68);
    view.defPopupPosition("U3", 150, 7, 68, 68);

    view.defPopup("Promote-2", 374, 112);
    view.defPopupPosition("U1", 10, 7, 68, 68);
    view.defPopupPosition("U2", 80, 7, 68, 68);
}
