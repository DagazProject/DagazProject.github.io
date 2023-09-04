Dagaz.Model.WHITE_START = "a1a";
Dagaz.Model.BLACK_START = "a2a";

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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("nx"); // 0
    design.addDirection("up"); // 1
    design.addDirection("wx"); // 2
    design.addDirection("gx"); // 3
    design.addDirection("rx"); // 4
    design.addDirection("bx"); // 5
    design.addDirection("wc"); // 6
    design.addDirection("gc"); // 7
    design.addDirection("rc"); // 8
    design.addDirection("bc"); // 9
    design.addDirection("wh"); // 10
    design.addDirection("gh"); // 11
    design.addDirection("rh"); // 12
    design.addDirection("bh"); // 13
    design.addDirection("ch"); // 14

    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    design.addPlayer("Green", [0, 1, 3, 2, 4, 5, 7, 6, 8, 9, 11, 10, 12, 13, 14]);
    design.addPlayer("Red", [0, 1, 4, 3, 2, 5, 8, 7, 6, 9, 12, 11, 10, 13, 14]);
    design.addPlayer("Black", [0, 1, 5, 3, 4, 2, 9, 7, 8, 6, 13, 11, 12, 10, 14]);

    design.addRandom(1, [0]);              // 0
    design.addRandom(1, [0]);              // 1
    design.addRandom(1, [0]);              // 2
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 3
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 4
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 5
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 6
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 7
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 8
    design.addRandom(2, [0]);              // 9
    design.addRandom(2, [0]);              // 10
    design.addRandom(2, [0]);              // 11
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 12
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 13
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 14
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 15
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 16
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 17
    design.addRandom(3, [0]);              // 18
    design.addRandom(3, [0]);              // 19
    design.addRandom(3, [0]);              // 20
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 21
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 22
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 23
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 24
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 25
    design.addTurn(3, [1, 2, 3, 4, 5, 6]); // 26
    design.addRandom(4, [0]);              // 27
    design.addRandom(4, [0]);              // 28
    design.addRandom(4, [0]);              // 29
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 30
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 31
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 32
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 33
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 34
    design.addTurn(4, [1, 2, 3, 4, 5, 6]); // 35

    design.addPosition("m1a", [524, 1, 204, 0, 442, 204, 488, 512, 500, 476, 306, 187, 85, 204, 0]);
    design.addPosition("m1b", [0, 1, 203, 0, 441, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1c", [0, 1, 202, 0, 440, 202, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1d", [0, 1, 201, 0, 439, 201, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1e", [0, 1, 200, 0, 438, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1f", [0, 1, 199, 0, 437, 199, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1g", [0, 1, 198, 0, 436, 198, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1h", [0, 1, 197, 0, 435, 197, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1i", [0, 1, 196, 0, 434, 196, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1j", [0, 1, 195, 0, 433, 195, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1k", [0, 1, 194, 0, 432, 194, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1l", [0, 1, 193, 0, 431, 193, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1m", [0, 1, 192, 0, 430, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1n", [0, 1, 191, 0, 429, 191, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1o", [0, 1, 190, 0, 428, 190, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1p", [0, 1, 189, 0, 427, 189, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m1q", [0, 0, 188, 0, 426, 188, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1a", [0, 1, -17, 0, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("l1b", [0, 1, -18, 0, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1c", [0, 1, -19, 0, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1d", [0, 1, -20, 0, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1e", [0, 1, -21, 0, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1f", [0, 1, -22, 0, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1g", [0, 1, -23, 0, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1h", [0, 1, -24, 0, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1i", [0, 1, -25, 0, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1j", [0, 1, -26, 0, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1k", [0, 1, -27, 0, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1l", [0, 1, -28, 0, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1m", [0, 1, -29, 0, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1n", [0, 1, -30, 0, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1o", [0, 1, -31, 0, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1p", [0, 1, -32, 0, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l1q", [0, 0, -33, 0, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1a", [0, 1, -17, 0, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("k1b", [0, 1, -18, 0, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1c", [0, 1, -19, 0, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1d", [0, 1, -20, 0, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1e", [0, 1, -21, 0, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1f", [0, 1, -22, 0, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1g", [0, 1, -23, 0, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1h", [0, 1, -24, 0, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1i", [0, 1, -25, 0, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1j", [0, 1, -26, 0, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1k", [0, 1, -27, 0, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1l", [0, 1, -28, 0, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1m", [0, 1, -29, 0, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1n", [0, 1, -30, 0, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1o", [0, 1, -31, 0, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1p", [0, 1, -32, 0, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k1q", [0, 0, -33, 0, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1a", [0, 1, -17, 0, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("j1b", [0, 1, -18, 0, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1c", [0, 1, -19, 0, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1d", [0, 1, -20, 0, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1e", [0, 1, -21, 0, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1f", [0, 1, -22, 0, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1g", [0, 1, -23, 0, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1h", [0, 1, -24, 0, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1i", [0, 1, -25, 0, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1j", [0, 1, -26, 0, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1k", [0, 1, -27, 0, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1l", [0, 1, -28, 0, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1m", [0, 1, -29, 0, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1n", [0, 1, -30, 0, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1o", [0, 1, -31, 0, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1p", [0, 1, -32, 0, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1q", [0, 0, -33, 0, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1a", [0, 1, -17, 0, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("h1b", [0, 1, -18, 0, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1c", [0, 1, -19, 0, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1d", [0, 1, -20, 0, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1e", [0, 1, -21, 0, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1f", [0, 1, -22, 0, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1g", [0, 1, -23, 0, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1h", [0, 1, -24, 0, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1i", [0, 1, -25, 0, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1j", [0, 1, -26, 0, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1k", [0, 1, -27, 0, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1l", [0, 1, -28, 0, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1m", [0, 1, -29, 0, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1n", [0, 1, -30, 0, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1o", [0, 1, -31, 0, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1p", [0, 1, -32, 0, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1q", [0, 0, -33, 0, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1a", [0, 1, -17, 0, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("g1b", [0, 1, -18, 0, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1c", [0, 1, -19, 0, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1d", [0, 1, -20, 0, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1e", [0, 1, -21, 0, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1f", [0, 1, -22, 0, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1g", [0, 1, -23, 0, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1h", [0, 1, -24, 0, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1i", [0, 1, -25, 0, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1j", [0, 1, -26, 0, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1k", [0, 1, -27, 0, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1l", [0, 1, -28, 0, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1m", [0, 1, -29, 0, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1n", [0, 1, -30, 0, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1o", [0, 1, -31, 0, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1p", [0, 1, -32, 0, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1q", [0, 0, -33, 0, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1a", [0, 1, 0, 323, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1b", [0, 1, 0, 322, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1c", [0, 1, 0, 321, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1d", [0, 1, 0, 320, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1e", [0, 1, 0, 319, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1f", [0, 1, 0, 318, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1g", [0, 1, 0, 317, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1h", [0, 1, 0, 316, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1i", [0, 1, 0, 315, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1j", [0, 1, 0, 314, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1k", [0, 1, 0, 313, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1l", [0, 1, 0, 312, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1m", [0, 1, 0, 311, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1n", [0, 1, 0, 310, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1o", [0, 1, 0, 309, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1p", [0, 1, 0, 308, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f1q", [0, 0, 0, 307, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1a", [0, 1, 0, -17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("e1b", [0, 1, 0, -18, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1c", [0, 1, 0, -19, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1d", [0, 1, 0, -20, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1e", [0, 1, 0, -21, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1f", [0, 1, 0, -22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1g", [0, 1, 0, -23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1h", [0, 1, 0, -24, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1i", [0, 1, 0, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1j", [0, 1, 0, -26, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1k", [0, 1, 0, -27, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1l", [0, 1, 0, -28, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1m", [0, 1, 0, -29, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1n", [0, 1, 0, -30, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1o", [0, 1, 0, -31, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1p", [0, 1, 0, -32, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1q", [0, 0, 0, -33, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1a", [0, 1, 0, -17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("d1b", [0, 1, 0, -18, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1c", [0, 1, 0, -19, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1d", [0, 1, 0, -20, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1e", [0, 1, 0, -21, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1f", [0, 1, 0, -22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1g", [0, 1, 0, -23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1h", [0, 1, 0, -24, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1i", [0, 1, 0, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1j", [0, 1, 0, -26, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1k", [0, 1, 0, -27, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1l", [0, 1, 0, -28, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1m", [0, 1, 0, -29, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1n", [0, 1, 0, -30, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1o", [0, 1, 0, -31, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1p", [0, 1, 0, -32, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1q", [0, 0, 0, -33, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1a", [0, 1, 0, -17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("c1b", [0, 1, 0, -18, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1c", [0, 1, 0, -19, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1d", [0, 1, 0, -20, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1e", [0, 1, 0, -21, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1f", [0, 1, 0, -22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1g", [0, 1, 0, -23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1h", [0, 1, 0, -24, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1i", [0, 1, 0, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1j", [0, 1, 0, -26, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1k", [0, 1, 0, -27, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1l", [0, 1, 0, -28, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1m", [0, 1, 0, -29, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1n", [0, 1, 0, -30, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1o", [0, 1, 0, -31, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1p", [0, 1, 0, -32, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1q", [0, 0, 0, -33, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1a", [0, 1, 0, -17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("b1b", [0, 1, 0, -18, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1c", [0, 1, 0, -19, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1d", [0, 1, 0, -20, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1e", [0, 1, 0, -21, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1f", [0, 1, 0, -22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1g", [0, 1, 0, -23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1h", [0, 1, 0, -24, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1i", [0, 1, 0, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1j", [0, 1, 0, -26, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1k", [0, 1, 0, -27, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1l", [0, 1, 0, -28, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1m", [0, 1, 0, -29, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1n", [0, 1, 0, -30, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1o", [0, 1, 0, -31, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1p", [0, 1, 0, -32, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1q", [0, 0, 0, -33, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1a", [0, 1, 0, -17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, -17]);
    design.addPosition("a1b", [0, 1, 0, -18, -18, -18, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1c", [0, 1, 0, -19, -19, -19, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1d", [0, 1, 0, -20, -20, -20, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1e", [0, 1, 0, -21, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1f", [0, 1, 0, -22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1g", [0, 1, 0, -23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1h", [0, 1, 0, -24, -24, -24, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1i", [0, 1, 0, -25, -25, -25, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1j", [0, 1, 0, -26, -26, -26, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1k", [0, 1, 0, -27, -27, -27, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1l", [0, 1, 0, -28, -28, -28, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1m", [0, 1, 0, -29, -29, -29, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1n", [0, 1, 0, -30, -30, -30, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1o", [0, 1, 0, -31, -31, -31, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1p", [0, 1, 0, -32, -32, -32, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1q", [0, 0, 0, -33, -33, -33, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2a", [0, 1, 17, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("m2b", [0, 1, 16, 16, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2c", [0, 1, 15, 15, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2d", [0, 1, 14, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2e", [0, 1, 13, 13, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2f", [0, 1, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2g", [0, 1, 11, 11, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2h", [0, 1, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2i", [0, 1, 9, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2j", [0, 1, 8, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2k", [0, 1, 7, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2l", [0, 1, 6, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2m", [0, 1, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2n", [0, 1, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2o", [0, 1, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2p", [0, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m2q", [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2a", [0, 1, 17, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("l2b", [0, 1, 16, 16, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2c", [0, 1, 15, 15, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2d", [0, 1, 14, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2e", [0, 1, 13, 13, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2f", [0, 1, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2g", [0, 1, 11, 11, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2h", [0, 1, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2i", [0, 1, 9, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2j", [0, 1, 8, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2k", [0, 1, 7, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2l", [0, 1, 6, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2m", [0, 1, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2n", [0, 1, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2o", [0, 1, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2p", [0, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("l2q", [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2a", [0, 1, 17, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("k2b", [0, 1, 16, 16, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2c", [0, 1, 15, 15, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2d", [0, 1, 14, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2e", [0, 1, 13, 13, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2f", [0, 1, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2g", [0, 1, 11, 11, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2h", [0, 1, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2i", [0, 1, 9, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2j", [0, 1, 8, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2k", [0, 1, 7, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2l", [0, 1, 6, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2m", [0, 1, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2n", [0, 1, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2o", [0, 1, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2p", [0, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("k2q", [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2a", [0, 1, 17, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("j2b", [0, 1, 16, 16, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2c", [0, 1, 15, 15, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2d", [0, 1, 14, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2e", [0, 1, 13, 13, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2f", [0, 1, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2g", [0, 1, 11, 11, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2h", [0, 1, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2i", [0, 1, 9, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2j", [0, 1, 8, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2k", [0, 1, 7, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2l", [0, 1, 6, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2m", [0, 1, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2n", [0, 1, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2o", [0, 1, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2p", [0, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2q", [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2a", [0, 1, 17, 17, 0, 17, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("h2b", [0, 1, 16, 16, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2c", [0, 1, 15, 15, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2d", [0, 1, 14, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2e", [0, 1, 13, 13, 0, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2f", [0, 1, 12, 12, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2g", [0, 1, 11, 11, 0, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2h", [0, 1, 10, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2i", [0, 1, 9, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2j", [0, 1, 8, 8, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2k", [0, 1, 7, 7, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2l", [0, 1, 6, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2m", [0, 1, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2n", [0, 1, 4, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2o", [0, 1, 3, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2p", [0, 1, 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h2q", [0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2a", [0, 1, 17, 17, 0, 170, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2b", [0, 1, 16, 16, 0, 169, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2c", [0, 1, 15, 15, 0, 168, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2d", [0, 1, 14, 14, 0, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2e", [0, 1, 13, 13, 0, 166, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2f", [0, 1, 12, 12, 0, 165, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2g", [0, 1, 11, 11, 0, 164, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2h", [0, 1, 10, 10, 0, 163, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2i", [0, 1, 9, 9, 0, 162, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2j", [0, 1, 8, 8, 0, 161, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2k", [0, 1, 7, 7, 0, 160, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2l", [0, 1, 6, 6, 0, 159, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2m", [0, 1, 5, 5, 0, 158, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2n", [0, 1, 4, 4, 0, 157, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2o", [0, 1, 3, 3, 0, 156, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2p", [0, 1, 2, 2, 0, 155, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g2q", [0, 0, 1, 1, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2a", [0, 1, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("f2b", [0, 1, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2c", [0, 1, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2d", [0, 1, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2e", [0, 1, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2f", [0, 1, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2g", [0, 1, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2h", [0, 1, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2i", [0, 1, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2j", [0, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2k", [0, 1, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2l", [0, 1, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2m", [0, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2n", [0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2o", [0, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2p", [0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("f2q", [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2a", [0, 1, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("e2b", [0, 1, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2c", [0, 1, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2d", [0, 1, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2e", [0, 1, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2f", [0, 1, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2g", [0, 1, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2h", [0, 1, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2i", [0, 1, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2j", [0, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2k", [0, 1, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2l", [0, 1, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2m", [0, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2n", [0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2o", [0, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2p", [0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2q", [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2a", [0, 1, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("d2b", [0, 1, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2c", [0, 1, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2d", [0, 1, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2e", [0, 1, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2f", [0, 1, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2g", [0, 1, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2h", [0, 1, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2i", [0, 1, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2j", [0, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2k", [0, 1, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2l", [0, 1, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2m", [0, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2n", [0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2o", [0, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2p", [0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2q", [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2a", [0, 1, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("c2b", [0, 1, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2c", [0, 1, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2d", [0, 1, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2e", [0, 1, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2f", [0, 1, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2g", [0, 1, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2h", [0, 1, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2i", [0, 1, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2j", [0, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2k", [0, 1, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2l", [0, 1, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2m", [0, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2n", [0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2o", [0, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2p", [0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2q", [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2a", [0, 1, 17, 17, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17]);
    design.addPosition("b2b", [0, 1, 16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2c", [0, 1, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2d", [0, 1, 14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2e", [0, 1, 13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2f", [0, 1, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2g", [0, 1, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2h", [0, 1, 10, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2i", [0, 1, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2j", [0, 1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2k", [0, 1, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2l", [0, 1, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2m", [0, 1, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2n", [0, 1, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2o", [0, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2p", [0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2q", [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2a", [0, 1, 17, -204, -204, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2b", [0, 1, 16, -205, -205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2c", [0, 1, 15, -206, -206, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2d", [0, 1, 14, -207, -207, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2e", [0, 1, 13, -208, -208, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2f", [0, 1, 12, -209, -209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2g", [0, 1, 11, -210, -210, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2h", [0, 1, 10, -211, -211, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2i", [0, 1, 9, -212, -212, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2j", [0, 1, 8, -213, -213, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2k", [0, 1, 7, -214, -214, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2l", [0, 1, 6, -215, -215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2m", [0, 1, 5, -216, -216, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2n", [0, 1, 4, -217, -217, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2o", [0, 1, 3, -218, -218, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2p", [0, 1, 2, -219, -219, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2q", [0, 0, 1, -220, -220, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2a", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2b", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2c", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2d", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2e", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2f", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2g", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2h", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2i", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2j", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2k", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2l", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2m", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2n", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2o", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2p", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2q", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2a", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2b", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2c", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2d", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2e", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2f", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2g", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2h", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2i", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2j", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2k", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2l", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2m", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2n", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2o", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2p", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G2q", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2a", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2b", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2c", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2d", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2e", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2f", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2g", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2h", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2i", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2j", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2k", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2l", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2m", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2n", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2o", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2p", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R2q", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2a", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2b", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2c", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2d", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2e", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2f", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2g", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2h", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2i", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2j", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2k", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2l", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2m", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2n", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2o", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2p", [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2q", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B1a", [0, 6, 0, 0, 0, -289, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1b", [0, 6, 0, 0, 0, -290, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1c", [0, 6, 0, 0, 0, -291, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1d", [0, 6, 0, 0, 0, -292, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1e", [0, 6, 0, 0, 0, -293, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1f", [0, 6, 0, 0, 0, -294, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1g", [0, 0, 0, 0, 0, -295, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1h", [0, 0, 0, 0, 0, -296, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1j", [0, 0, 0, 0, 0, -297, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1k", [0, 0, 0, 0, 0, -298, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1l", [0, 0, 0, 0, 0, -299, 0, 0, 0, 1, 0, 0, 0, 0, 0]);
    design.addPosition("B1m", [0, 0, 0, 0, 0, -300, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1a", [0, 6, -403, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1b", [0, 6, -404, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1c", [0, 6, -405, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1d", [0, 6, -406, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1e", [0, 6, -407, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1f", [0, 6, -408, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1g", [0, 0, -409, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1h", [0, 0, -410, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1j", [0, 0, -411, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1k", [0, 0, -412, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1l", [0, 0, -413, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W1m", [0, 0, -414, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1a", [0, 6, 0, 0, -194, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1b", [0, 6, 0, 0, -195, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1c", [0, 6, 0, 0, -196, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1d", [0, 6, 0, 0, -197, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1e", [0, 6, 0, 0, -198, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1f", [0, 6, 0, 0, -199, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1g", [0, 0, 0, 0, -200, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1h", [0, 0, 0, 0, -201, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1j", [0, 0, 0, 0, -202, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1k", [0, 0, 0, 0, -203, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1l", [0, 0, 0, 0, -204, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("R1m", [0, 0, 0, 0, -205, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1a", [0, 6, 0, -308, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1b", [0, 6, 0, -309, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1c", [0, 6, 0, -310, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1d", [0, 6, 0, -311, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1e", [0, 6, 0, -312, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1f", [0, 6, 0, -313, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1g", [0, 0, 0, -314, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1h", [0, 0, 0, -315, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1j", [0, 0, 0, -316, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1k", [0, 0, 0, -317, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1l", [0, 0, 0, -318, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("G1m", [0, 0, 0, -319, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D1", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D5", [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("home-zone", 3, [85, 68, 51, 34, 17, 0, 442, 86, 69, 52, 35, 18, 1, 443, 87, 70, 53, 36, 19, 2, 444, 88, 71, 54, 37, 20, 3, 445, 89, 72, 55, 38, 21, 4, 446, 90, 73, 56, 39, 22, 5, 447, 91, 74, 57, 40, 23, 6, 448, 92, 75, 58, 41, 24, 7, 449, 93, 76, 59, 42, 25, 8, 450, 94, 77, 60, 43, 26, 9, 451, 95, 78, 61, 44, 27, 10, 452, 96, 79, 62, 45, 28, 11, 453, 97, 80, 63, 46, 29, 12, 454, 98, 81, 64, 47, 30, 13, 455, 99, 82, 65, 48, 31, 14, 456, 100, 83, 66, 49, 32, 15, 457, 101, 84, 67, 50, 33, 16, 458]);
    design.addZone("home-zone", 1, [391, 374, 357, 340, 323, 306, 408, 392, 375, 358, 341, 324, 307, 409, 393, 376, 359, 342, 325, 308, 410, 394, 377, 360, 343, 326, 309, 411, 395, 378, 361, 344, 327, 310, 412, 396, 379, 362, 345, 328, 311, 413, 397, 380, 363, 346, 329, 312, 414, 398, 381, 364, 347, 330, 313, 415, 399, 382, 365, 348, 331, 314, 416, 400, 383, 366, 349, 332, 315, 417, 401, 384, 367, 350, 333, 316, 418, 402, 385, 368, 351, 334, 317, 419, 403, 386, 369, 352, 335, 318, 420, 404, 387, 370, 353, 336, 319, 421, 405, 388, 371, 354, 337, 320, 422, 406, 389, 372, 355, 338, 321, 423, 407, 390, 373, 356, 339, 322, 424]);
    design.addZone("home-zone", 4, [289, 272, 255, 238, 221, 204, 459, 290, 273, 256, 239, 222, 205, 460, 291, 274, 257, 240, 223, 206, 461, 292, 275, 258, 241, 224, 207, 462, 293, 276, 259, 242, 225, 208, 463, 294, 277, 260, 243, 226, 209, 464, 295, 278, 261, 244, 227, 210, 465, 296, 279, 262, 245, 228, 211, 466, 297, 280, 263, 246, 229, 212, 467, 298, 281, 264, 247, 230, 213, 468, 299, 282, 265, 248, 231, 214, 469, 300, 283, 266, 249, 232, 215, 470, 301, 284, 267, 250, 233, 216, 471, 302, 285, 268, 251, 234, 217, 472, 303, 286, 269, 252, 235, 218, 473, 304, 287, 270, 253, 236, 219, 474, 305, 288, 271, 254, 237, 220, 475]);
    design.addZone("home-zone", 2, [187, 170, 153, 136, 119, 102, 425, 188, 171, 154, 137, 120, 103, 426, 189, 172, 155, 138, 121, 104, 427, 190, 173, 156, 139, 122, 105, 428, 191, 174, 157, 140, 123, 106, 429, 192, 175, 158, 141, 124, 107, 430, 193, 176, 159, 142, 125, 108, 431, 194, 177, 160, 143, 126, 109, 432, 195, 178, 161, 144, 127, 110, 433, 196, 179, 162, 145, 128, 111, 434, 197, 180, 163, 146, 129, 112, 435, 198, 181, 164, 147, 130, 113, 436, 199, 182, 165, 148, 131, 114, 437, 200, 183, 166, 149, 132, 115, 438, 201, 184, 167, 150, 133, 116, 439, 202, 185, 168, 151, 134, 117, 440, 203, 186, 169, 152, 135, 118, 441]);
    design.addZone("dice-zone", 3, [527, 528, 529]);
    design.addZone("dice-zone", 1, [527, 528, 529]);
    design.addZone("dice-zone", 4, [524, 525, 526]);
    design.addZone("dice-zone", 2, [524, 525, 526]);
    design.addZone("bar-zone", 3, [500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511]);
    design.addZone("bar-zone", 1, [488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499]);
    design.addZone("bar-zone", 4, [476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487]);
    design.addZone("bar-zone", 2, [512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523]);
    design.addZone("out-zone", 3, [442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441]);
    design.addZone("out-zone", 1, [442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441]);
    design.addZone("out-zone", 4, [442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441]);
    design.addZone("out-zone", 2, [442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441]);
    design.addZone("top-zone", 3, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 425, 442, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 426, 443, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 427, 444, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 428, 445, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 429, 446, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 430, 447, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 431, 448, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 432, 449, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 433, 450, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 434, 451, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 435, 452, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 436, 453, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 437, 454, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 438, 455, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 439, 456, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 440, 457, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 441, 458]);
    design.addZone("top-zone", 1, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 425, 442, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 426, 443, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 427, 444, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 428, 445, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 429, 446, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 430, 447, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 431, 448, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 432, 449, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 433, 450, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 434, 451, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 435, 452, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 436, 453, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 437, 454, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 438, 455, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 439, 456, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 440, 457, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 441, 458]);
    design.addZone("top-zone", 4, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 425, 442, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 426, 443, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 427, 444, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 428, 445, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 429, 446, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 430, 447, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 431, 448, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 432, 449, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 433, 450, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 434, 451, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 435, 452, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 436, 453, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 437, 454, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 438, 455, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 439, 456, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 440, 457, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 441, 458]);
    design.addZone("top-zone", 2, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 425, 442, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 426, 443, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 427, 444, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 428, 445, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 429, 446, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 430, 447, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 431, 448, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 432, 449, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 433, 450, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 434, 451, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 435, 452, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 436, 453, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 437, 454, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 438, 455, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 439, 456, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 440, 457, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 441, 458]);
    design.addZone("board-zone", 3, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221, 204, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220]);
    design.addZone("board-zone", 1, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221, 204, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220]);
    design.addZone("board-zone", 4, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221, 204, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220]);
    design.addZone("board-zone", 2, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221, 204, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-5);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-5);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-5);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-5);
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
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.IN_ZONE,	1);	// dice-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [2, 1], 1);
    design.addMove(0, 1, [2, 2, 1], 2);
    design.addMove(0, 2, [2, 2, 2, 1], 3);
    design.addMove(0, 3, [2, 2, 2, 2, 1], 4);
    design.addMove(0, 4, [2, 2, 2, 2, 2, 1], 5);
    design.addMove(0, 5, [2, 2, 2, 2, 2, 2, 1], 6);

    design.addPiece("D1", 1, 1);
    design.addDrop(1, 6, [], 0);
    design.addPiece("D2", 2, 2);
    design.addDrop(2, 6, [], 0);
    design.addPiece("D3", 3, 3);
    design.addDrop(3, 6, [], 0);
    design.addPiece("D4", 4, 4);
    design.addDrop(4, 6, [], 0);
    design.addPiece("D5", 5, 5);
    design.addDrop(5, 6, [], 0);
    design.addPiece("D6", 6, 6);
    design.addDrop(6, 6, [], 0);

    design.setup("White", "Man", 488);
    design.setup("White", "Man", 489);
    design.setup("White", "Man", 490);
    design.setup("White", "Man", 491);
    design.setup("White", "Man", 492);
    design.setup("White", "Man", 493);
    design.setup("White", "Man", 494);
    design.setup("White", "Man", 495);
    design.setup("White", "Man", 496);
    design.setup("White", "Man", 497);
    design.setup("White", "Man", 498);
    design.setup("White", "Man", 499);
    design.setup("Green", "Man", 512);
    design.setup("Green", "Man", 513);
    design.setup("Green", "Man", 514);
    design.setup("Green", "Man", 515);
    design.setup("Green", "Man", 516);
    design.setup("Green", "Man", 517);
    design.setup("Green", "Man", 518);
    design.setup("Green", "Man", 519);
    design.setup("Green", "Man", 520);
    design.setup("Green", "Man", 521);
    design.setup("Green", "Man", 522);
    design.setup("Green", "Man", 523);
    design.setup("Red", "Man", 500);
    design.setup("Red", "Man", 501);
    design.setup("Red", "Man", 502);
    design.setup("Red", "Man", 503);
    design.setup("Red", "Man", 504);
    design.setup("Red", "Man", 505);
    design.setup("Red", "Man", 506);
    design.setup("Red", "Man", 507);
    design.setup("Red", "Man", 508);
    design.setup("Red", "Man", 509);
    design.setup("Red", "Man", 510);
    design.setup("Red", "Man", 511);
    design.setup("Black", "Man", 476);
    design.setup("Black", "Man", 477);
    design.setup("Black", "Man", 478);
    design.setup("Black", "Man", 479);
    design.setup("Black", "Man", 480);
    design.setup("Black", "Man", 481);
    design.setup("Black", "Man", 482);
    design.setup("Black", "Man", 483);
    design.setup("Black", "Man", 484);
    design.setup("Black", "Man", 485);
    design.setup("Black", "Man", 486);
    design.setup("Black", "Man", 487);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    view.defBoard("RedBoard", 0, 0, undefined, [9, 10, 11, 12, 13, 14, 15, 16, 17]);
    view.defBoard("GreenBoard", 0, 0, undefined, [18, 19, 20, 21, 22, 23, 24, 25, 26]);
    view.defBoard("BlackBoard", 0, 0, undefined, [27, 28, 29, 30, 31, 32, 33, 34, 35]);
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("GreenMan", "Green Man");
    view.defPiece("RedMan", "Red Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteD1", "White D1");
    view.defPiece("GreenD1", "Green D1");
    view.defPiece("RedD1", "Red D1");
    view.defPiece("BlackD1", "Black D1");
    view.defPiece("WhiteD2", "White D2");
    view.defPiece("GreenD2", "Green D2");
    view.defPiece("RedD2", "Red D2");
    view.defPiece("BlackD2", "Black D2");
    view.defPiece("WhiteD3", "White D3");
    view.defPiece("GreenD3", "Green D3");
    view.defPiece("RedD3", "Red D3");
    view.defPiece("BlackD3", "Black D3");
    view.defPiece("WhiteD4", "White D4");
    view.defPiece("GreenD4", "Green D4");
    view.defPiece("RedD4", "Red D4");
    view.defPiece("BlackD4", "Black D4");
    view.defPiece("WhiteD5", "White D5");
    view.defPiece("GreenD5", "Green D5");
    view.defPiece("RedD5", "Red D5");
    view.defPiece("BlackD5", "Black D5");
    view.defPiece("WhiteD6", "White D6");
    view.defPiece("GreenD6", "Green D6");
    view.defPiece("RedD6", "Red D6");
    view.defPiece("BlackD6", "Black D6");
 
    view.defPosition("m1a", 59, 50, 34, 32);
    view.defPosition("m1b", 59, 58, 34, 32);
    view.defPosition("m1c", 59, 66, 34, 32);
    view.defPosition("m1d", 59, 74, 34, 32);
    view.defPosition("m1e", 59, 82, 34, 32);
    view.defPosition("m1f", 59, 90, 34, 32);
    view.defPosition("m1g", 59, 98, 34, 32);
    view.defPosition("m1h", 59, 106, 34, 32);
    view.defPosition("m1i", 59, 114, 34, 32);
    view.defPosition("m1j", 59, 122, 34, 32);
    view.defPosition("m1k", 59, 130, 34, 32);
    view.defPosition("m1l", 59, 138, 34, 32);
    view.defPosition("m1m", 59, 146, 34, 32);
    view.defPosition("m1n", 59, 154, 34, 32);
    view.defPosition("m1o", 59, 162, 34, 32);
    view.defPosition("m1p", 59, 170, 34, 32);
    view.defPosition("m1q", 59, 178, 34, 32);
    view.defPosition("l1a", 93, 50, 34, 32);
    view.defPosition("l1b", 93, 58, 34, 32);
    view.defPosition("l1c", 93, 66, 34, 32);
    view.defPosition("l1d", 93, 74, 34, 32);
    view.defPosition("l1e", 93, 82, 34, 32);
    view.defPosition("l1f", 93, 90, 34, 32);
    view.defPosition("l1g", 93, 98, 34, 32);
    view.defPosition("l1h", 93, 106, 34, 32);
    view.defPosition("l1i", 93, 114, 34, 32);
    view.defPosition("l1j", 93, 122, 34, 32);
    view.defPosition("l1k", 93, 130, 34, 32);
    view.defPosition("l1l", 93, 138, 34, 32);
    view.defPosition("l1m", 93, 146, 34, 32);
    view.defPosition("l1n", 93, 154, 34, 32);
    view.defPosition("l1o", 93, 162, 34, 32);
    view.defPosition("l1p", 93, 170, 34, 32);
    view.defPosition("l1q", 93, 178, 34, 32);
    view.defPosition("k1a", 127, 50, 34, 32);
    view.defPosition("k1b", 127, 58, 34, 32);
    view.defPosition("k1c", 127, 66, 34, 32);
    view.defPosition("k1d", 127, 74, 34, 32);
    view.defPosition("k1e", 127, 82, 34, 32);
    view.defPosition("k1f", 127, 90, 34, 32);
    view.defPosition("k1g", 127, 98, 34, 32);
    view.defPosition("k1h", 127, 106, 34, 32);
    view.defPosition("k1i", 127, 114, 34, 32);
    view.defPosition("k1j", 127, 122, 34, 32);
    view.defPosition("k1k", 127, 130, 34, 32);
    view.defPosition("k1l", 127, 138, 34, 32);
    view.defPosition("k1m", 127, 146, 34, 32);
    view.defPosition("k1n", 127, 154, 34, 32);
    view.defPosition("k1o", 127, 162, 34, 32);
    view.defPosition("k1p", 127, 170, 34, 32);
    view.defPosition("k1q", 127, 178, 34, 32);
    view.defPosition("j1a", 161, 50, 34, 32);
    view.defPosition("j1b", 161, 58, 34, 32);
    view.defPosition("j1c", 161, 66, 34, 32);
    view.defPosition("j1d", 161, 74, 34, 32);
    view.defPosition("j1e", 161, 82, 34, 32);
    view.defPosition("j1f", 161, 90, 34, 32);
    view.defPosition("j1g", 161, 98, 34, 32);
    view.defPosition("j1h", 161, 106, 34, 32);
    view.defPosition("j1i", 161, 114, 34, 32);
    view.defPosition("j1j", 161, 122, 34, 32);
    view.defPosition("j1k", 161, 130, 34, 32);
    view.defPosition("j1l", 161, 138, 34, 32);
    view.defPosition("j1m", 161, 146, 34, 32);
    view.defPosition("j1n", 161, 154, 34, 32);
    view.defPosition("j1o", 161, 162, 34, 32);
    view.defPosition("j1p", 161, 170, 34, 32);
    view.defPosition("j1q", 161, 178, 34, 32);
    view.defPosition("h1a", 195, 50, 34, 32);
    view.defPosition("h1b", 195, 58, 34, 32);
    view.defPosition("h1c", 195, 66, 34, 32);
    view.defPosition("h1d", 195, 74, 34, 32);
    view.defPosition("h1e", 195, 82, 34, 32);
    view.defPosition("h1f", 195, 90, 34, 32);
    view.defPosition("h1g", 195, 98, 34, 32);
    view.defPosition("h1h", 195, 106, 34, 32);
    view.defPosition("h1i", 195, 114, 34, 32);
    view.defPosition("h1j", 195, 122, 34, 32);
    view.defPosition("h1k", 195, 130, 34, 32);
    view.defPosition("h1l", 195, 138, 34, 32);
    view.defPosition("h1m", 195, 146, 34, 32);
    view.defPosition("h1n", 195, 154, 34, 32);
    view.defPosition("h1o", 195, 162, 34, 32);
    view.defPosition("h1p", 195, 170, 34, 32);
    view.defPosition("h1q", 195, 178, 34, 32);
    view.defPosition("g1a", 229, 50, 34, 32);
    view.defPosition("g1b", 229, 58, 34, 32);
    view.defPosition("g1c", 229, 66, 34, 32);
    view.defPosition("g1d", 229, 74, 34, 32);
    view.defPosition("g1e", 229, 82, 34, 32);
    view.defPosition("g1f", 229, 90, 34, 32);
    view.defPosition("g1g", 229, 98, 34, 32);
    view.defPosition("g1h", 229, 106, 34, 32);
    view.defPosition("g1i", 229, 114, 34, 32);
    view.defPosition("g1j", 229, 122, 34, 32);
    view.defPosition("g1k", 229, 130, 34, 32);
    view.defPosition("g1l", 229, 138, 34, 32);
    view.defPosition("g1m", 229, 146, 34, 32);
    view.defPosition("g1n", 229, 154, 34, 32);
    view.defPosition("g1o", 229, 162, 34, 32);
    view.defPosition("g1p", 229, 170, 34, 32);
    view.defPosition("g1q", 229, 178, 34, 32);
    view.defPosition("f1a", 287, 50, 34, 32);
    view.defPosition("f1b", 287, 58, 34, 32);
    view.defPosition("f1c", 287, 66, 34, 32);
    view.defPosition("f1d", 287, 74, 34, 32);
    view.defPosition("f1e", 287, 82, 34, 32);
    view.defPosition("f1f", 287, 90, 34, 32);
    view.defPosition("f1g", 287, 98, 34, 32);
    view.defPosition("f1h", 287, 106, 34, 32);
    view.defPosition("f1i", 287, 114, 34, 32);
    view.defPosition("f1j", 287, 122, 34, 32);
    view.defPosition("f1k", 287, 130, 34, 32);
    view.defPosition("f1l", 287, 138, 34, 32);
    view.defPosition("f1m", 287, 146, 34, 32);
    view.defPosition("f1n", 287, 154, 34, 32);
    view.defPosition("f1o", 287, 162, 34, 32);
    view.defPosition("f1p", 287, 170, 34, 32);
    view.defPosition("f1q", 287, 178, 34, 32);
    view.defPosition("e1a", 321, 50, 34, 32);
    view.defPosition("e1b", 321, 58, 34, 32);
    view.defPosition("e1c", 321, 66, 34, 32);
    view.defPosition("e1d", 321, 74, 34, 32);
    view.defPosition("e1e", 321, 82, 34, 32);
    view.defPosition("e1f", 321, 90, 34, 32);
    view.defPosition("e1g", 321, 98, 34, 32);
    view.defPosition("e1h", 321, 106, 34, 32);
    view.defPosition("e1i", 321, 114, 34, 32);
    view.defPosition("e1j", 321, 122, 34, 32);
    view.defPosition("e1k", 321, 130, 34, 32);
    view.defPosition("e1l", 321, 138, 34, 32);
    view.defPosition("e1m", 321, 146, 34, 32);
    view.defPosition("e1n", 321, 154, 34, 32);
    view.defPosition("e1o", 321, 162, 34, 32);
    view.defPosition("e1p", 321, 170, 34, 32);
    view.defPosition("e1q", 321, 178, 34, 32);
    view.defPosition("d1a", 355, 50, 34, 32);
    view.defPosition("d1b", 355, 58, 34, 32);
    view.defPosition("d1c", 355, 66, 34, 32);
    view.defPosition("d1d", 355, 74, 34, 32);
    view.defPosition("d1e", 355, 82, 34, 32);
    view.defPosition("d1f", 355, 90, 34, 32);
    view.defPosition("d1g", 355, 98, 34, 32);
    view.defPosition("d1h", 355, 106, 34, 32);
    view.defPosition("d1i", 355, 114, 34, 32);
    view.defPosition("d1j", 355, 122, 34, 32);
    view.defPosition("d1k", 355, 130, 34, 32);
    view.defPosition("d1l", 355, 138, 34, 32);
    view.defPosition("d1m", 355, 146, 34, 32);
    view.defPosition("d1n", 355, 154, 34, 32);
    view.defPosition("d1o", 355, 162, 34, 32);
    view.defPosition("d1p", 355, 170, 34, 32);
    view.defPosition("d1q", 355, 178, 34, 32);
    view.defPosition("c1a", 389, 50, 34, 32);
    view.defPosition("c1b", 389, 58, 34, 32);
    view.defPosition("c1c", 389, 66, 34, 32);
    view.defPosition("c1d", 389, 74, 34, 32);
    view.defPosition("c1e", 389, 82, 34, 32);
    view.defPosition("c1f", 389, 90, 34, 32);
    view.defPosition("c1g", 389, 98, 34, 32);
    view.defPosition("c1h", 389, 106, 34, 32);
    view.defPosition("c1i", 389, 114, 34, 32);
    view.defPosition("c1j", 389, 122, 34, 32);
    view.defPosition("c1k", 389, 130, 34, 32);
    view.defPosition("c1l", 389, 138, 34, 32);
    view.defPosition("c1m", 389, 146, 34, 32);
    view.defPosition("c1n", 389, 154, 34, 32);
    view.defPosition("c1o", 389, 162, 34, 32);
    view.defPosition("c1p", 389, 170, 34, 32);
    view.defPosition("c1q", 389, 178, 34, 32);
    view.defPosition("b1a", 423, 50, 34, 32);
    view.defPosition("b1b", 423, 58, 34, 32);
    view.defPosition("b1c", 423, 66, 34, 32);
    view.defPosition("b1d", 423, 74, 34, 32);
    view.defPosition("b1e", 423, 82, 34, 32);
    view.defPosition("b1f", 423, 90, 34, 32);
    view.defPosition("b1g", 423, 98, 34, 32);
    view.defPosition("b1h", 423, 106, 34, 32);
    view.defPosition("b1i", 423, 114, 34, 32);
    view.defPosition("b1j", 423, 122, 34, 32);
    view.defPosition("b1k", 423, 130, 34, 32);
    view.defPosition("b1l", 423, 138, 34, 32);
    view.defPosition("b1m", 423, 146, 34, 32);
    view.defPosition("b1n", 423, 154, 34, 32);
    view.defPosition("b1o", 423, 162, 34, 32);
    view.defPosition("b1p", 423, 170, 34, 32);
    view.defPosition("b1q", 423, 178, 34, 32);
    view.defPosition("a1a", 457, 50, 34, 32);
    view.defPosition("a1b", 457, 58, 34, 32);
    view.defPosition("a1c", 457, 66, 34, 32);
    view.defPosition("a1d", 457, 74, 34, 32);
    view.defPosition("a1e", 457, 82, 34, 32);
    view.defPosition("a1f", 457, 90, 34, 32);
    view.defPosition("a1g", 457, 98, 34, 32);
    view.defPosition("a1h", 457, 106, 34, 32);
    view.defPosition("a1i", 457, 114, 34, 32);
    view.defPosition("a1j", 457, 122, 34, 32);
    view.defPosition("a1k", 457, 130, 34, 32);
    view.defPosition("a1l", 457, 138, 34, 32);
    view.defPosition("a1m", 457, 146, 34, 32);
    view.defPosition("a1n", 457, 154, 34, 32);
    view.defPosition("a1o", 457, 162, 34, 32);
    view.defPosition("a1p", 457, 170, 34, 32);
    view.defPosition("a1q", 457, 178, 34, 32);
    view.defPosition("m2a", 59, 348, 34, 32);
    view.defPosition("m2b", 59, 340, 34, 32);
    view.defPosition("m2c", 59, 332, 34, 32);
    view.defPosition("m2d", 59, 324, 34, 32);
    view.defPosition("m2e", 59, 316, 34, 32);
    view.defPosition("m2f", 59, 308, 34, 32);
    view.defPosition("m2g", 59, 300, 34, 32);
    view.defPosition("m2h", 59, 292, 34, 32);
    view.defPosition("m2i", 59, 284, 34, 32);
    view.defPosition("m2j", 59, 276, 34, 32);
    view.defPosition("m2k", 59, 268, 34, 32);
    view.defPosition("m2l", 59, 260, 34, 32);
    view.defPosition("m2m", 59, 252, 34, 32);
    view.defPosition("m2n", 59, 244, 34, 32);
    view.defPosition("m2o", 59, 236, 34, 32);
    view.defPosition("m2p", 59, 228, 34, 32);
    view.defPosition("m2q", 59, 220, 34, 32);
    view.defPosition("l2a", 93, 348, 34, 32);
    view.defPosition("l2b", 93, 340, 34, 32);
    view.defPosition("l2c", 93, 332, 34, 32);
    view.defPosition("l2d", 93, 324, 34, 32);
    view.defPosition("l2e", 93, 316, 34, 32);
    view.defPosition("l2f", 93, 308, 34, 32);
    view.defPosition("l2g", 93, 300, 34, 32);
    view.defPosition("l2h", 93, 292, 34, 32);
    view.defPosition("l2i", 93, 284, 34, 32);
    view.defPosition("l2j", 93, 276, 34, 32);
    view.defPosition("l2k", 93, 268, 34, 32);
    view.defPosition("l2l", 93, 260, 34, 32);
    view.defPosition("l2m", 93, 252, 34, 32);
    view.defPosition("l2n", 93, 244, 34, 32);
    view.defPosition("l2o", 93, 236, 34, 32);
    view.defPosition("l2p", 93, 228, 34, 32);
    view.defPosition("l2q", 93, 220, 34, 32);
    view.defPosition("k2a", 127, 348, 34, 32);
    view.defPosition("k2b", 127, 340, 34, 32);
    view.defPosition("k2c", 127, 332, 34, 32);
    view.defPosition("k2d", 127, 324, 34, 32);
    view.defPosition("k2e", 127, 316, 34, 32);
    view.defPosition("k2f", 127, 308, 34, 32);
    view.defPosition("k2g", 127, 300, 34, 32);
    view.defPosition("k2h", 127, 292, 34, 32);
    view.defPosition("k2i", 127, 284, 34, 32);
    view.defPosition("k2j", 127, 276, 34, 32);
    view.defPosition("k2k", 127, 268, 34, 32);
    view.defPosition("k2l", 127, 260, 34, 32);
    view.defPosition("k2m", 127, 252, 34, 32);
    view.defPosition("k2n", 127, 244, 34, 32);
    view.defPosition("k2o", 127, 236, 34, 32);
    view.defPosition("k2p", 127, 228, 34, 32);
    view.defPosition("k2q", 127, 220, 34, 32);
    view.defPosition("j2a", 161, 348, 34, 32);
    view.defPosition("j2b", 161, 340, 34, 32);
    view.defPosition("j2c", 161, 332, 34, 32);
    view.defPosition("j2d", 161, 324, 34, 32);
    view.defPosition("j2e", 161, 316, 34, 32);
    view.defPosition("j2f", 161, 308, 34, 32);
    view.defPosition("j2g", 161, 300, 34, 32);
    view.defPosition("j2h", 161, 292, 34, 32);
    view.defPosition("j2i", 161, 284, 34, 32);
    view.defPosition("j2j", 161, 276, 34, 32);
    view.defPosition("j2k", 161, 268, 34, 32);
    view.defPosition("j2l", 161, 260, 34, 32);
    view.defPosition("j2m", 161, 252, 34, 32);
    view.defPosition("j2n", 161, 244, 34, 32);
    view.defPosition("j2o", 161, 236, 34, 32);
    view.defPosition("j2p", 161, 228, 34, 32);
    view.defPosition("j2q", 161, 220, 34, 32);
    view.defPosition("h2a", 195, 348, 34, 32);
    view.defPosition("h2b", 195, 340, 34, 32);
    view.defPosition("h2c", 195, 332, 34, 32);
    view.defPosition("h2d", 195, 324, 34, 32);
    view.defPosition("h2e", 195, 316, 34, 32);
    view.defPosition("h2f", 195, 308, 34, 32);
    view.defPosition("h2g", 195, 300, 34, 32);
    view.defPosition("h2h", 195, 292, 34, 32);
    view.defPosition("h2i", 195, 284, 34, 32);
    view.defPosition("h2j", 195, 276, 34, 32);
    view.defPosition("h2k", 195, 268, 34, 32);
    view.defPosition("h2l", 195, 260, 34, 32);
    view.defPosition("h2m", 195, 252, 34, 32);
    view.defPosition("h2n", 195, 244, 34, 32);
    view.defPosition("h2o", 195, 236, 34, 32);
    view.defPosition("h2p", 195, 228, 34, 32);
    view.defPosition("h2q", 195, 220, 34, 32);
    view.defPosition("g2a", 229, 348, 34, 32);
    view.defPosition("g2b", 229, 340, 34, 32);
    view.defPosition("g2c", 229, 332, 34, 32);
    view.defPosition("g2d", 229, 324, 34, 32);
    view.defPosition("g2e", 229, 316, 34, 32);
    view.defPosition("g2f", 229, 308, 34, 32);
    view.defPosition("g2g", 229, 300, 34, 32);
    view.defPosition("g2h", 229, 292, 34, 32);
    view.defPosition("g2i", 229, 284, 34, 32);
    view.defPosition("g2j", 229, 276, 34, 32);
    view.defPosition("g2k", 229, 268, 34, 32);
    view.defPosition("g2l", 229, 260, 34, 32);
    view.defPosition("g2m", 229, 252, 34, 32);
    view.defPosition("g2n", 229, 244, 34, 32);
    view.defPosition("g2o", 229, 236, 34, 32);
    view.defPosition("g2p", 229, 228, 34, 32);
    view.defPosition("g2q", 229, 220, 34, 32);
    view.defPosition("f2a", 287, 348, 34, 32);
    view.defPosition("f2b", 287, 340, 34, 32);
    view.defPosition("f2c", 287, 332, 34, 32);
    view.defPosition("f2d", 287, 324, 34, 32);
    view.defPosition("f2e", 287, 316, 34, 32);
    view.defPosition("f2f", 287, 308, 34, 32);
    view.defPosition("f2g", 287, 300, 34, 32);
    view.defPosition("f2h", 287, 292, 34, 32);
    view.defPosition("f2i", 287, 284, 34, 32);
    view.defPosition("f2j", 287, 276, 34, 32);
    view.defPosition("f2k", 287, 268, 34, 32);
    view.defPosition("f2l", 287, 260, 34, 32);
    view.defPosition("f2m", 287, 252, 34, 32);
    view.defPosition("f2n", 287, 244, 34, 32);
    view.defPosition("f2o", 287, 236, 34, 32);
    view.defPosition("f2p", 287, 228, 34, 32);
    view.defPosition("f2q", 287, 220, 34, 32);
    view.defPosition("e2a", 321, 348, 34, 32);
    view.defPosition("e2b", 321, 340, 34, 32);
    view.defPosition("e2c", 321, 332, 34, 32);
    view.defPosition("e2d", 321, 324, 34, 32);
    view.defPosition("e2e", 321, 316, 34, 32);
    view.defPosition("e2f", 321, 308, 34, 32);
    view.defPosition("e2g", 321, 300, 34, 32);
    view.defPosition("e2h", 321, 292, 34, 32);
    view.defPosition("e2i", 321, 284, 34, 32);
    view.defPosition("e2j", 321, 276, 34, 32);
    view.defPosition("e2k", 321, 268, 34, 32);
    view.defPosition("e2l", 321, 260, 34, 32);
    view.defPosition("e2m", 321, 252, 34, 32);
    view.defPosition("e2n", 321, 244, 34, 32);
    view.defPosition("e2o", 321, 236, 34, 32);
    view.defPosition("e2p", 321, 228, 34, 32);
    view.defPosition("e2q", 321, 220, 34, 32);
    view.defPosition("d2a", 355, 348, 34, 32);
    view.defPosition("d2b", 355, 340, 34, 32);
    view.defPosition("d2c", 355, 332, 34, 32);
    view.defPosition("d2d", 355, 324, 34, 32);
    view.defPosition("d2e", 355, 316, 34, 32);
    view.defPosition("d2f", 355, 308, 34, 32);
    view.defPosition("d2g", 355, 300, 34, 32);
    view.defPosition("d2h", 355, 292, 34, 32);
    view.defPosition("d2i", 355, 284, 34, 32);
    view.defPosition("d2j", 355, 276, 34, 32);
    view.defPosition("d2k", 355, 268, 34, 32);
    view.defPosition("d2l", 355, 260, 34, 32);
    view.defPosition("d2m", 355, 252, 34, 32);
    view.defPosition("d2n", 355, 244, 34, 32);
    view.defPosition("d2o", 355, 236, 34, 32);
    view.defPosition("d2p", 355, 228, 34, 32);
    view.defPosition("d2q", 355, 220, 34, 32);
    view.defPosition("c2a", 389, 348, 34, 32);
    view.defPosition("c2b", 389, 340, 34, 32);
    view.defPosition("c2c", 389, 332, 34, 32);
    view.defPosition("c2d", 389, 324, 34, 32);
    view.defPosition("c2e", 389, 316, 34, 32);
    view.defPosition("c2f", 389, 308, 34, 32);
    view.defPosition("c2g", 389, 300, 34, 32);
    view.defPosition("c2h", 389, 292, 34, 32);
    view.defPosition("c2i", 389, 284, 34, 32);
    view.defPosition("c2j", 389, 276, 34, 32);
    view.defPosition("c2k", 389, 268, 34, 32);
    view.defPosition("c2l", 389, 260, 34, 32);
    view.defPosition("c2m", 389, 252, 34, 32);
    view.defPosition("c2n", 389, 244, 34, 32);
    view.defPosition("c2o", 389, 236, 34, 32);
    view.defPosition("c2p", 389, 228, 34, 32);
    view.defPosition("c2q", 389, 220, 34, 32);
    view.defPosition("b2a", 423, 348, 34, 32);
    view.defPosition("b2b", 423, 340, 34, 32);
    view.defPosition("b2c", 423, 332, 34, 32);
    view.defPosition("b2d", 423, 324, 34, 32);
    view.defPosition("b2e", 423, 316, 34, 32);
    view.defPosition("b2f", 423, 308, 34, 32);
    view.defPosition("b2g", 423, 300, 34, 32);
    view.defPosition("b2h", 423, 292, 34, 32);
    view.defPosition("b2i", 423, 284, 34, 32);
    view.defPosition("b2j", 423, 276, 34, 32);
    view.defPosition("b2k", 423, 268, 34, 32);
    view.defPosition("b2l", 423, 260, 34, 32);
    view.defPosition("b2m", 423, 252, 34, 32);
    view.defPosition("b2n", 423, 244, 34, 32);
    view.defPosition("b2o", 423, 236, 34, 32);
    view.defPosition("b2p", 423, 228, 34, 32);
    view.defPosition("b2q", 423, 220, 34, 32);
    view.defPosition("a2a", 457, 348, 34, 32);
    view.defPosition("a2b", 457, 340, 34, 32);
    view.defPosition("a2c", 457, 332, 34, 32);
    view.defPosition("a2d", 457, 324, 34, 32);
    view.defPosition("a2e", 457, 316, 34, 32);
    view.defPosition("a2f", 457, 308, 34, 32);
    view.defPosition("a2g", 457, 300, 34, 32);
    view.defPosition("a2h", 457, 292, 34, 32);
    view.defPosition("a2i", 457, 284, 34, 32);
    view.defPosition("a2j", 457, 276, 34, 32);
    view.defPosition("a2k", 457, 268, 34, 32);
    view.defPosition("a2l", 457, 260, 34, 32);
    view.defPosition("a2m", 457, 252, 34, 32);
    view.defPosition("a2n", 457, 244, 34, 32);
    view.defPosition("a2o", 457, 236, 34, 32);
    view.defPosition("a2p", 457, 228, 34, 32);
    view.defPosition("a2q", 457, 220, 34, 32);
    view.defPosition("G2a", 506, 51, 40, 32);
    view.defPosition("G2b", 506, 59, 40, 32);
    view.defPosition("G2c", 506, 67, 40, 32);
    view.defPosition("G2d", 506, 75, 40, 32);
    view.defPosition("G2e", 506, 83, 40, 32);
    view.defPosition("G2f", 506, 91, 40, 32);
    view.defPosition("G2g", 506, 99, 40, 32);
    view.defPosition("G2h", 506, 107, 40, 32);
    view.defPosition("G2i", 506, 115, 40, 32);
    view.defPosition("G2j", 506, 123, 40, 32);
    view.defPosition("G2k", 506, 131, 40, 32);
    view.defPosition("G2l", 506, 139, 40, 32);
    view.defPosition("G2m", 506, 147, 40, 32);
    view.defPosition("G2n", 506, 155, 40, 32);
    view.defPosition("G2o", 506, 163, 40, 32);
    view.defPosition("G2p", 506, 171, 40, 32);
    view.defPosition("G2q", 506, 179, 40, 32);
    view.defPosition("W2a", 506, 348, 40, 32);
    view.defPosition("W2b", 506, 340, 40, 32);
    view.defPosition("W2c", 506, 332, 40, 32);
    view.defPosition("W2d", 506, 324, 40, 32);
    view.defPosition("W2e", 506, 316, 40, 32);
    view.defPosition("W2f", 506, 308, 40, 32);
    view.defPosition("W2g", 506, 300, 40, 32);
    view.defPosition("W2h", 506, 292, 40, 32);
    view.defPosition("W2i", 506, 284, 40, 32);
    view.defPosition("W2j", 506, 276, 40, 32);
    view.defPosition("W2k", 506, 268, 40, 32);
    view.defPosition("W2l", 506, 260, 40, 32);
    view.defPosition("W2m", 506, 252, 40, 32);
    view.defPosition("W2n", 506, 244, 40, 32);
    view.defPosition("W2o", 506, 236, 40, 32);
    view.defPosition("W2p", 506, 228, 40, 32);
    view.defPosition("W2q", 506, 220, 40, 32);
    view.defPosition("B2a",  5, 348, 40, 32);
    view.defPosition("B2b",  5, 340, 40, 32);
    view.defPosition("B2c",  5, 332, 40, 32);
    view.defPosition("B2d",  5, 324, 40, 32);
    view.defPosition("B2e",  5, 316, 40, 32);
    view.defPosition("B2f",  5, 308, 40, 32);
    view.defPosition("B2g",  5, 300, 40, 32);
    view.defPosition("B2h",  5, 292, 40, 32);
    view.defPosition("B2i",  5, 284, 40, 32);
    view.defPosition("B2j",  5, 276, 40, 32);
    view.defPosition("B2k",  5, 268, 40, 32);
    view.defPosition("B2l",  5, 260, 40, 32);
    view.defPosition("B2m",  5, 252, 40, 32);
    view.defPosition("B2n",  5, 244, 40, 32);
    view.defPosition("B2o",  5, 236, 40, 32);
    view.defPosition("B2p",  5, 228, 40, 32);
    view.defPosition("B2q",  5, 220, 40, 32);
    view.defPosition("R2a",  5, 51, 40, 32);
    view.defPosition("R2b",  5, 59, 40, 32);
    view.defPosition("R2c",  5, 67, 40, 32);
    view.defPosition("R2d",  5, 75, 40, 32);
    view.defPosition("R2e",  5, 83, 40, 32);
    view.defPosition("R2f",  5, 91, 40, 32);
    view.defPosition("R2g",  5, 99, 40, 32);
    view.defPosition("R2h",  5, 107, 40, 32);
    view.defPosition("R2i",  5, 115, 40, 32);
    view.defPosition("R2j",  5, 123, 40, 32);
    view.defPosition("R2k",  5, 131, 40, 32);
    view.defPosition("R2l",  5, 139, 40, 32);
    view.defPosition("R2m",  5, 147, 40, 32);
    view.defPosition("R2n",  5, 155, 40, 32);
    view.defPosition("R2o",  5, 163, 40, 32);
    view.defPosition("R2p",  5, 171, 40, 32);
    view.defPosition("R2q",  5, 179, 40, 32);
    view.defPosition("B1a", 59, 395, 34, 32);
    view.defPosition("B1b", 93, 395, 34, 32);
    view.defPosition("B1c", 127, 395, 34, 32);
    view.defPosition("B1d", 161, 395, 34, 32);
    view.defPosition("B1e", 195, 395, 34, 32);
    view.defPosition("B1f", 229, 395, 34, 32);
    view.defPosition("B1g", 64, 390, 34, 32);
    view.defPosition("B1h", 98, 390, 34, 32);
    view.defPosition("B1j", 132, 390, 34, 32);
    view.defPosition("B1k", 166, 390, 34, 32);
    view.defPosition("B1l", 200, 390, 34, 32);
    view.defPosition("B1m", 234, 390, 34, 32);
    view.defPosition("W1a", 287, 395, 34, 32);
    view.defPosition("W1b", 321, 395, 34, 32);
    view.defPosition("W1c", 355, 395, 34, 32);
    view.defPosition("W1d", 389, 395, 34, 32);
    view.defPosition("W1e", 423, 395, 34, 32);
    view.defPosition("W1f", 457, 395, 34, 32);
    view.defPosition("W1g", 292, 390, 34, 32);
    view.defPosition("W1h", 326, 390, 34, 32);
    view.defPosition("W1j", 360, 390, 34, 32);
    view.defPosition("W1k", 394, 390, 34, 32);
    view.defPosition("W1l", 428, 390, 34, 32);
    view.defPosition("W1m", 462, 390, 34, 32);
    view.defPosition("R1a", 59, 7, 34, 32);
    view.defPosition("R1b", 93, 7, 34, 32);
    view.defPosition("R1c", 127, 7, 34, 32);
    view.defPosition("R1d", 161, 7, 34, 32);
    view.defPosition("R1e", 195, 7, 34, 32);
    view.defPosition("R1f", 229, 7, 34, 32);
    view.defPosition("R1g", 64, 2, 34, 32);
    view.defPosition("R1h", 98, 2, 34, 32);
    view.defPosition("R1j", 132, 2, 34, 32);
    view.defPosition("R1k", 166, 2, 34, 32);
    view.defPosition("R1l", 200, 2, 34, 32);
    view.defPosition("R1m", 234, 2, 34, 32);
    view.defPosition("G1a", 287, 7, 34, 32);
    view.defPosition("G1b", 321, 7, 34, 32);
    view.defPosition("G1c", 355, 7, 34, 32);
    view.defPosition("G1d", 389, 7, 34, 32);
    view.defPosition("G1e", 423, 7, 34, 32);
    view.defPosition("G1f", 457, 7, 34, 32);
    view.defPosition("G1g", 292, 2, 34, 32);
    view.defPosition("G1h", 326, 2, 34, 32);
    view.defPosition("G1j", 360, 2, 34, 32);
    view.defPosition("G1k", 394, 2, 34, 32);
    view.defPosition("G1l", 428, 2, 34, 32);
    view.defPosition("G1m", 462, 2, 34, 32);
    view.defPosition("D1", 110, 200, 34, 29);
    view.defPosition("D2", 144, 200, 34, 29);
    view.defPosition("D3", 178, 200, 34, 29);
    view.defPosition("D4", 338, 200, 34, 29);
    view.defPosition("D5", 372, 200, 34, 29);
    view.defPosition("D6", 406, 200, 34, 29);
}
