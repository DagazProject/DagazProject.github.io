Dagaz.Model.WHITE_START = "a1a";
Dagaz.Model.BLACK_START = "m2a";

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
    design.checkVersion("advisor-wait", "25");

    design.addDirection("nx"); // 0
    design.addDirection("bx"); // 1
    design.addDirection("wx"); // 2
    design.addDirection("wn"); // 3
    design.addDirection("bn"); // 4
    design.addDirection("up"); // 5
    design.addDirection("wh"); // 6
    design.addDirection("bh"); // 7

    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Black", [0, 2, 1, 4, 3, 5, 7, 6]);
    design.addRandom(1, [0]); // 0
    design.addRandom(1, [0]); // 1
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 2
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 3
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 4
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 5
    design.addRandom(2, [0]); // 6
    design.addRandom(2, [0]); // 7
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 8
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 9
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 10
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 11

    design.addPosition("nul", [443, 0, 0, 0, 0, 0, 392, 1]);
    design.addPosition("m1a", [0, 0, 0, 204, 408, 1, 0, 17]);
    design.addPosition("m1b", [0, 0, 0, 203, 407, 1, 0, 0]);
    design.addPosition("m1c", [0, 0, 0, 202, 406, 1, 0, 0]);
    design.addPosition("m1d", [0, 0, 0, 201, 405, 1, 0, 0]);
    design.addPosition("m1e", [0, 0, 0, 200, 404, 1, 0, 0]);
    design.addPosition("m1f", [0, 0, 0, 199, 403, 1, 0, 0]);
    design.addPosition("m1g", [0, 0, 0, 198, 402, 1, 0, 0]);
    design.addPosition("m1h", [0, 0, 0, 197, 401, 1, 0, 0]);
    design.addPosition("m1i", [0, 0, 0, 196, 400, 1, 0, 0]);
    design.addPosition("m1j", [0, 0, 0, 195, 399, 1, 0, 0]);
    design.addPosition("m1k", [0, 0, 0, 194, 398, 1, 0, 0]);
    design.addPosition("m1l", [0, 0, 0, 193, 397, 1, 0, 0]);
    design.addPosition("m1m", [0, 0, 0, 192, 396, 1, 0, 0]);
    design.addPosition("m1n", [0, 0, 0, 191, 395, 1, 0, 0]);
    design.addPosition("m1o", [0, 0, 0, 190, 394, 1, 0, 0]);
    design.addPosition("m1p", [0, 0, 0, 189, 393, 1, 0, 0]);
    design.addPosition("m1q", [0, 0, 0, 188, 392, 0, 0, 0]);
    design.addPosition("l1a", [0, 0, 0, -17, -17, 1, 0, 17]);
    design.addPosition("l1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("l1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("l1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("l1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("l1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("l1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("l1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("l1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("l1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("l1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("l1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("l1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("l1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("l1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("l1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("l1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("k1a", [0, 0, 0, -17, -17, 1, 0, 17]);
    design.addPosition("k1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("k1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("k1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("k1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("k1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("k1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("k1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("k1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("k1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("k1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("k1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("k1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("k1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("k1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("k1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("k1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("j1a", [0, 0, 0, -17, -17, 1, 0, 17]);
    design.addPosition("j1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("j1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("j1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("j1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("j1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("j1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("j1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("j1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("j1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("j1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("j1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("j1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("j1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("j1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("j1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("j1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("h1a", [0, 0, 0, -17, -17, 1, 0, 17]);
    design.addPosition("h1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("h1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("h1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("h1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("h1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("h1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("h1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("h1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("h1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("h1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("h1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("h1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("h1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("h1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("h1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("h1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("g1a", [0, 0, 0, -17, -17, 1, 0, 0]);
    design.addPosition("g1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("g1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("g1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("g1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("g1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("g1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("g1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("g1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("g1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("g1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("g1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("g1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("g1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("g1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("g1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("g1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("f1a", [0, 0, 0, -17, -17, 1, 0, 0]);
    design.addPosition("f1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("f1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("f1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("f1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("f1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("f1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("f1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("f1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("f1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("f1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("f1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("f1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("f1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("f1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("f1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("f1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("e1a", [0, 0, 0, -17, -17, 1, 0, 0]);
    design.addPosition("e1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("e1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("e1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("e1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("e1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("e1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("e1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("e1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("e1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("e1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("e1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("e1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("e1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("e1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("e1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("e1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("d1a", [0, 0, 0, -17, -17, 1, 0, 0]);
    design.addPosition("d1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("d1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("d1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("d1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("d1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("d1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("d1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("d1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("d1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("d1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("d1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("d1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("d1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("d1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("d1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("d1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("c1a", [0, 0, 0, -17, -17, 1, 0, 0]);
    design.addPosition("c1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("c1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("c1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("c1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("c1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("c1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("c1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("c1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("c1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("c1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("c1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("c1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("c1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("c1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("c1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("c1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("b1a", [0, 0, 0, -17, -17, 1, 0, 0]);
    design.addPosition("b1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("b1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("b1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("b1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("b1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("b1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("b1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("b1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("b1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("b1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("b1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("b1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("b1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("b1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("b1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("b1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("a1a", [0, 0, 0, -17, -17, 1, 0, 0]);
    design.addPosition("a1b", [0, 0, 0, -18, -18, 1, 0, 0]);
    design.addPosition("a1c", [0, 0, 0, -19, -19, 1, 0, 0]);
    design.addPosition("a1d", [0, 0, 0, -20, -20, 1, 0, 0]);
    design.addPosition("a1e", [0, 0, 0, -21, -21, 1, 0, 0]);
    design.addPosition("a1f", [0, 0, 0, -22, -22, 1, 0, 0]);
    design.addPosition("a1g", [0, 0, 0, -23, -23, 1, 0, 0]);
    design.addPosition("a1h", [0, 0, 0, -24, -24, 1, 0, 0]);
    design.addPosition("a1i", [0, 0, 0, -25, -25, 1, 0, 0]);
    design.addPosition("a1j", [0, 0, 0, -26, -26, 1, 0, 0]);
    design.addPosition("a1k", [0, 0, 0, -27, -27, 1, 0, 0]);
    design.addPosition("a1l", [0, 0, 0, -28, -28, 1, 0, 0]);
    design.addPosition("a1m", [0, 0, 0, -29, -29, 1, 0, 0]);
    design.addPosition("a1n", [0, 0, 0, -30, -30, 1, 0, 0]);
    design.addPosition("a1o", [0, 0, 0, -31, -31, 1, 0, 0]);
    design.addPosition("a1p", [0, 0, 0, -32, -32, 1, 0, 0]);
    design.addPosition("a1q", [0, 0, 0, -33, -33, 0, 0, 0]);
    design.addPosition("m2a", [0, 0, 0, 17, 17, 1, 0, 0]);
    design.addPosition("m2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("m2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("m2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("m2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("m2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("m2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("m2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("m2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("m2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("m2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("m2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("m2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("m2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("m2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("m2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("m2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("l2a", [0, 0, 0, 17, 17, 1, 0, 0]);
    design.addPosition("l2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("l2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("l2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("l2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("l2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("l2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("l2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("l2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("l2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("l2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("l2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("l2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("l2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("l2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("l2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("l2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("k2a", [0, 0, 0, 17, 17, 1, 0, 0]);
    design.addPosition("k2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("k2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("k2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("k2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("k2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("k2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("k2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("k2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("k2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("k2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("k2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("k2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("k2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("k2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("k2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("k2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("j2a", [0, 0, 0, 17, 17, 1, 0, 0]);
    design.addPosition("j2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("j2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("j2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("j2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("j2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("j2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("j2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("j2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("j2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("j2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("j2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("j2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("j2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("j2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("j2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("j2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("h2a", [0, 0, 0, 17, 17, 1, 0, 0]);
    design.addPosition("h2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("h2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("h2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("h2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("h2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("h2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("h2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("h2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("h2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("h2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("h2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("h2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("h2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("h2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("h2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("h2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("g2a", [0, 0, 0, 17, 17, 1, 0, 0]);
    design.addPosition("g2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("g2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("g2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("g2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("g2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("g2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("g2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("g2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("g2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("g2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("g2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("g2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("g2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("g2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("g2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("g2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("f2a", [0, 0, 0, 17, 17, 1, 0, 0]);
    design.addPosition("f2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("f2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("f2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("f2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("f2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("f2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("f2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("f2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("f2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("f2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("f2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("f2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("f2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("f2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("f2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("f2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("e2a", [0, 0, 0, 17, 17, 1, -17, 0]);
    design.addPosition("e2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("e2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("e2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("e2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("e2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("e2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("e2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("e2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("e2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("e2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("e2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("e2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("e2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("e2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("e2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("e2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("d2a", [0, 0, 0, 17, 17, 1, -17, 0]);
    design.addPosition("d2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("d2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("d2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("d2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("d2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("d2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("d2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("d2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("d2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("d2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("d2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("d2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("d2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("d2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("d2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("d2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("c2a", [0, 0, 0, 17, 17, 1, -17, 0]);
    design.addPosition("c2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("c2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("c2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("c2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("c2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("c2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("c2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("c2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("c2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("c2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("c2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("c2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("c2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("c2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("c2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("c2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("b2a", [0, 0, 0, 17, 17, 1, -17, 0]);
    design.addPosition("b2b", [0, 0, 0, 16, 16, 1, 0, 0]);
    design.addPosition("b2c", [0, 0, 0, 15, 15, 1, 0, 0]);
    design.addPosition("b2d", [0, 0, 0, 14, 14, 1, 0, 0]);
    design.addPosition("b2e", [0, 0, 0, 13, 13, 1, 0, 0]);
    design.addPosition("b2f", [0, 0, 0, 12, 12, 1, 0, 0]);
    design.addPosition("b2g", [0, 0, 0, 11, 11, 1, 0, 0]);
    design.addPosition("b2h", [0, 0, 0, 10, 10, 1, 0, 0]);
    design.addPosition("b2i", [0, 0, 0, 9, 9, 1, 0, 0]);
    design.addPosition("b2j", [0, 0, 0, 8, 8, 1, 0, 0]);
    design.addPosition("b2k", [0, 0, 0, 7, 7, 1, 0, 0]);
    design.addPosition("b2l", [0, 0, 0, 6, 6, 1, 0, 0]);
    design.addPosition("b2m", [0, 0, 0, 5, 5, 1, 0, 0]);
    design.addPosition("b2n", [0, 0, 0, 4, 4, 1, 0, 0]);
    design.addPosition("b2o", [0, 0, 0, 3, 3, 1, 0, 0]);
    design.addPosition("b2p", [0, 0, 0, 2, 2, 1, 0, 0]);
    design.addPosition("b2q", [0, 0, 0, 1, 1, 0, 0, 0]);
    design.addPosition("a2a", [0, 0, 0, 34, -204, 1, -17, 0]);
    design.addPosition("a2b", [0, 0, 0, 33, -205, 1, 0, 0]);
    design.addPosition("a2c", [0, 0, 0, 32, -206, 1, 0, 0]);
    design.addPosition("a2d", [0, 0, 0, 31, -207, 1, 0, 0]);
    design.addPosition("a2e", [0, 0, 0, 30, -208, 1, 0, 0]);
    design.addPosition("a2f", [0, 0, 0, 29, -209, 1, 0, 0]);
    design.addPosition("a2g", [0, 0, 0, 28, -210, 1, 0, 0]);
    design.addPosition("a2h", [0, 0, 0, 27, -211, 1, 0, 0]);
    design.addPosition("a2i", [0, 0, 0, 26, -212, 1, 0, 0]);
    design.addPosition("a2j", [0, 0, 0, 25, -213, 1, 0, 0]);
    design.addPosition("a2k", [0, 0, 0, 24, -214, 1, 0, 0]);
    design.addPosition("a2l", [0, 0, 0, 23, -215, 1, 0, 0]);
    design.addPosition("a2m", [0, 0, 0, 22, -216, 1, 0, 0]);
    design.addPosition("a2n", [0, 0, 0, 21, -217, 1, 0, 0]);
    design.addPosition("a2o", [0, 0, 0, 20, -218, 1, 0, 0]);
    design.addPosition("a2p", [0, 0, 0, 19, -219, 1, 0, 0]);
    design.addPosition("a2q", [0, 0, 0, 18, -220, 0, 0, 0]);
    design.addPosition("H2a", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2b", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2c", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2d", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2e", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2f", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2g", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2h", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2i", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2j", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2k", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2l", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2m", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2n", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2o", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2p", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H2q", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("H1a", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1b", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1c", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1d", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1e", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1f", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1g", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1h", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1i", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1j", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1k", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1l", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1m", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1n", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1o", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1p", [0, 0, 0, 0, 0, 1, 0, 0]);
    design.addPosition("H1q", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D1", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("home-zone", 1, [392, 375, 358, 341, 324, 307, 426, 409, 393, 376, 359, 342, 325, 308, 427, 410, 394, 377, 360, 343, 326, 309, 428, 411, 395, 378, 361, 344, 327, 310, 429, 412, 396, 379, 362, 345, 328, 311, 430, 413, 397, 380, 363, 346, 329, 312, 431, 414, 398, 381, 364, 347, 330, 313, 432, 415, 399, 382, 365, 348, 331, 314, 433, 416, 400, 383, 366, 349, 332, 315, 434, 417, 401, 384, 367, 350, 333, 316, 435, 418, 402, 385, 368, 351, 334, 317, 436, 419, 403, 386, 369, 352, 335, 318, 437, 420, 404, 387, 370, 353, 336, 319, 438, 421, 405, 388, 371, 354, 337, 320, 439, 422, 406, 389, 372, 355, 338, 321, 440, 423, 407, 390, 373, 356, 339, 322, 441, 424, 408, 391, 374, 357, 340, 323, 442, 425]);
    design.addZone("home-zone", 2, [1, 18, 35, 52, 69, 86, 426, 409, 2, 19, 36, 53, 70, 87, 427, 410, 3, 20, 37, 54, 71, 88, 428, 411, 4, 21, 38, 55, 72, 89, 429, 412, 5, 22, 39, 56, 73, 90, 430, 413, 6, 23, 40, 57, 74, 91, 431, 414, 7, 24, 41, 58, 75, 92, 432, 415, 8, 25, 42, 59, 76, 93, 433, 416, 9, 26, 43, 60, 77, 94, 434, 417, 10, 27, 44, 61, 78, 95, 435, 418, 11, 28, 45, 62, 79, 96, 436, 419, 12, 29, 46, 63, 80, 97, 437, 420, 13, 30, 47, 64, 81, 98, 438, 421, 14, 31, 48, 65, 82, 99, 439, 422, 15, 32, 49, 66, 83, 100, 440, 423, 16, 33, 50, 67, 84, 101, 441, 424, 17, 34, 51, 68, 85, 102, 442, 425]);
    design.addZone("dice-zone", 1, [445, 446]);
    design.addZone("dice-zone", 2, [443, 444]);
    design.addZone("bar-zone", 1, []);
    design.addZone("bar-zone", 2, []);
    design.addZone("out-zone", 1, [426, 409, 427, 410, 428, 411, 429, 412, 430, 413, 431, 414, 432, 415, 433, 416, 434, 417, 435, 418, 436, 419, 437, 420, 438, 421, 439, 422, 440, 423, 441, 424, 442, 425]);
    design.addZone("out-zone", 2, [426, 409, 427, 410, 428, 411, 429, 412, 430, 413, 431, 414, 432, 415, 433, 416, 434, 417, 435, 418, 436, 419, 437, 420, 438, 421, 439, 422, 440, 423, 441, 424, 442, 425]);
    design.addZone("top-zone", 1, [188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 204, 187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17]);
    design.addZone("top-zone", 2, [188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 204, 187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17]);
    design.addZone("board-zone", 1, [188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 204, 187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220, 408, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221]);
    design.addZone("board-zone", 2, [188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 204, 187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220, 408, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221]);
    design.addZone("init-zone", 1, []);
    design.addZone("init-zone", 2, []);
    design.addZone("start-zone", 1, [188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202]);
    design.addZone("start-zone", 2, [205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219]);
    design.addZone("start-table", 1, [188, 171, 154, 137, 120, 103]);
    design.addZone("start-table", 2, [290, 273, 256, 239, 222, 205]);
    design.addZone("middle-zone", 1, [205]);
    design.addZone("middle-zone", 2, [188]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 5], 1, 1);
    design.addMove(0, 1, [3, 3, 5], 2, 1);
    design.addMove(0, 2, [3, 3, 3, 5], 3, 1);
    design.addMove(0, 3, [3, 3, 3, 3, 5], 4, 1);
    design.addMove(0, 4, [3, 3, 3, 3, 3, 5], 5, 1);
    design.addMove(0, 5, [3, 3, 3, 3, 3, 3, 5], 6, 1);

    design.addPiece("D1", 1, 1);
    design.addDrop(1, 6, [], 0, 10);
    design.addPiece("D2", 2, 2);
    design.addDrop(2, 6, [], 0, 10);
    design.addPiece("D3", 3, 3);
    design.addDrop(3, 6, [], 0, 10);
    design.addPiece("D4", 4, 4);
    design.addDrop(4, 6, [], 0, 10);
    design.addPiece("D5", 5, 5);
    design.addDrop(5, 6, [], 0, 10);
    design.addPiece("D6", 6, 6);
    design.addDrop(6, 6, [], 0, 10);

    design.setup("White", "Man", 188);
    design.setup("White", "Man", 189);
    design.setup("White", "Man", 190);
    design.setup("White", "Man", 191);
    design.setup("White", "Man", 192);
    design.setup("White", "Man", 193);
    design.setup("White", "Man", 194);
    design.setup("White", "Man", 195);
    design.setup("White", "Man", 196);
    design.setup("White", "Man", 197);
    design.setup("White", "Man", 198);
    design.setup("White", "Man", 199);
    design.setup("White", "Man", 200);
    design.setup("White", "Man", 201);
    design.setup("White", "Man", 202);
    design.setup("Black", "Man", 205);
    design.setup("Black", "Man", 206);
    design.setup("Black", "Man", 207);
    design.setup("Black", "Man", 208);
    design.setup("Black", "Man", 209);
    design.setup("Black", "Man", 210);
    design.setup("Black", "Man", 211);
    design.setup("Black", "Man", 212);
    design.setup("Black", "Man", 213);
    design.setup("Black", "Man", 214);
    design.setup("Black", "Man", 215);
    design.setup("Black", "Man", 216);
    design.setup("Black", "Man", 217);
    design.setup("Black", "Man", 218);
    design.setup("Black", "Man", 219);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0, 1, 2, 3, 4, 5, 6, 7]);
    view.defBoard("BlackBoard", 0, 0, undefined, [8, 9, 10, 11, 12, 13]);
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteD1", "White D1");
    view.defPiece("BlackD1", "Black D1");
    view.defPiece("WhiteD2", "White D2");
    view.defPiece("BlackD2", "Black D2");
    view.defPiece("WhiteD3", "White D3");
    view.defPiece("BlackD3", "Black D3");
    view.defPiece("WhiteD4", "White D4");
    view.defPiece("BlackD4", "Black D4");
    view.defPiece("WhiteD5", "White D5");
    view.defPiece("BlackD5", "Black D5");
    view.defPiece("WhiteD6", "White D6");
    view.defPiece("BlackD6", "Black D6");
 
    view.defPosition("nul", 59, -100, 34, 32);
    view.defPosition("m1a", 59, 10, 34, 32);
    view.defPosition("m1b", 59, 18, 34, 32);
    view.defPosition("m1c", 59, 26, 34, 32);
    view.defPosition("m1d", 59, 34, 34, 32);
    view.defPosition("m1e", 59, 42, 34, 32);
    view.defPosition("m1f", 59, 50, 34, 32);
    view.defPosition("m1g", 59, 58, 34, 32);
    view.defPosition("m1h", 59, 66, 34, 32);
    view.defPosition("m1i", 59, 74, 34, 32);
    view.defPosition("m1j", 59, 82, 34, 32);
    view.defPosition("m1k", 59, 90, 34, 32);
    view.defPosition("m1l", 59, 98, 34, 32);
    view.defPosition("m1m", 59, 106, 34, 32);
    view.defPosition("m1n", 59, 114, 34, 32);
    view.defPosition("m1o", 59, 122, 34, 32);
    view.defPosition("m1p", 59, 130, 34, 32);
    view.defPosition("m1q", 59, 138, 34, 32);
    view.defPosition("l1a", 93, 10, 34, 32);
    view.defPosition("l1b", 93, 18, 34, 32);
    view.defPosition("l1c", 93, 26, 34, 32);
    view.defPosition("l1d", 93, 34, 34, 32);
    view.defPosition("l1e", 93, 42, 34, 32);
    view.defPosition("l1f", 93, 50, 34, 32);
    view.defPosition("l1g", 93, 58, 34, 32);
    view.defPosition("l1h", 93, 66, 34, 32);
    view.defPosition("l1i", 93, 74, 34, 32);
    view.defPosition("l1j", 93, 82, 34, 32);
    view.defPosition("l1k", 93, 90, 34, 32);
    view.defPosition("l1l", 93, 98, 34, 32);
    view.defPosition("l1m", 93, 106, 34, 32);
    view.defPosition("l1n", 93, 114, 34, 32);
    view.defPosition("l1o", 93, 122, 34, 32);
    view.defPosition("l1p", 93, 130, 34, 32);
    view.defPosition("l1q", 93, 138, 34, 32);
    view.defPosition("k1a", 127, 10, 34, 32);
    view.defPosition("k1b", 127, 18, 34, 32);
    view.defPosition("k1c", 127, 26, 34, 32);
    view.defPosition("k1d", 127, 34, 34, 32);
    view.defPosition("k1e", 127, 42, 34, 32);
    view.defPosition("k1f", 127, 50, 34, 32);
    view.defPosition("k1g", 127, 58, 34, 32);
    view.defPosition("k1h", 127, 66, 34, 32);
    view.defPosition("k1i", 127, 74, 34, 32);
    view.defPosition("k1j", 127, 82, 34, 32);
    view.defPosition("k1k", 127, 90, 34, 32);
    view.defPosition("k1l", 127, 98, 34, 32);
    view.defPosition("k1m", 127, 106, 34, 32);
    view.defPosition("k1n", 127, 114, 34, 32);
    view.defPosition("k1o", 127, 122, 34, 32);
    view.defPosition("k1p", 127, 130, 34, 32);
    view.defPosition("k1q", 127, 138, 34, 32);
    view.defPosition("j1a", 161, 10, 34, 32);
    view.defPosition("j1b", 161, 18, 34, 32);
    view.defPosition("j1c", 161, 26, 34, 32);
    view.defPosition("j1d", 161, 34, 34, 32);
    view.defPosition("j1e", 161, 42, 34, 32);
    view.defPosition("j1f", 161, 50, 34, 32);
    view.defPosition("j1g", 161, 58, 34, 32);
    view.defPosition("j1h", 161, 66, 34, 32);
    view.defPosition("j1i", 161, 74, 34, 32);
    view.defPosition("j1j", 161, 82, 34, 32);
    view.defPosition("j1k", 161, 90, 34, 32);
    view.defPosition("j1l", 161, 98, 34, 32);
    view.defPosition("j1m", 161, 106, 34, 32);
    view.defPosition("j1n", 161, 114, 34, 32);
    view.defPosition("j1o", 161, 122, 34, 32);
    view.defPosition("j1p", 161, 130, 34, 32);
    view.defPosition("j1q", 161, 138, 34, 32);
    view.defPosition("h1a", 195, 10, 34, 32);
    view.defPosition("h1b", 195, 18, 34, 32);
    view.defPosition("h1c", 195, 26, 34, 32);
    view.defPosition("h1d", 195, 34, 34, 32);
    view.defPosition("h1e", 195, 42, 34, 32);
    view.defPosition("h1f", 195, 50, 34, 32);
    view.defPosition("h1g", 195, 58, 34, 32);
    view.defPosition("h1h", 195, 66, 34, 32);
    view.defPosition("h1i", 195, 74, 34, 32);
    view.defPosition("h1j", 195, 82, 34, 32);
    view.defPosition("h1k", 195, 90, 34, 32);
    view.defPosition("h1l", 195, 98, 34, 32);
    view.defPosition("h1m", 195, 106, 34, 32);
    view.defPosition("h1n", 195, 114, 34, 32);
    view.defPosition("h1o", 195, 122, 34, 32);
    view.defPosition("h1p", 195, 130, 34, 32);
    view.defPosition("h1q", 195, 138, 34, 32);
    view.defPosition("g1a", 229, 10, 34, 32);
    view.defPosition("g1b", 229, 18, 34, 32);
    view.defPosition("g1c", 229, 26, 34, 32);
    view.defPosition("g1d", 229, 34, 34, 32);
    view.defPosition("g1e", 229, 42, 34, 32);
    view.defPosition("g1f", 229, 50, 34, 32);
    view.defPosition("g1g", 229, 58, 34, 32);
    view.defPosition("g1h", 229, 66, 34, 32);
    view.defPosition("g1i", 229, 74, 34, 32);
    view.defPosition("g1j", 229, 82, 34, 32);
    view.defPosition("g1k", 229, 90, 34, 32);
    view.defPosition("g1l", 229, 98, 34, 32);
    view.defPosition("g1m", 229, 106, 34, 32);
    view.defPosition("g1n", 229, 114, 34, 32);
    view.defPosition("g1o", 229, 122, 34, 32);
    view.defPosition("g1p", 229, 130, 34, 32);
    view.defPosition("g1q", 229, 138, 34, 32);
    view.defPosition("f1a", 287, 10, 34, 32);
    view.defPosition("f1b", 287, 18, 34, 32);
    view.defPosition("f1c", 287, 26, 34, 32);
    view.defPosition("f1d", 287, 34, 34, 32);
    view.defPosition("f1e", 287, 42, 34, 32);
    view.defPosition("f1f", 287, 50, 34, 32);
    view.defPosition("f1g", 287, 58, 34, 32);
    view.defPosition("f1h", 287, 66, 34, 32);
    view.defPosition("f1i", 287, 74, 34, 32);
    view.defPosition("f1j", 287, 82, 34, 32);
    view.defPosition("f1k", 287, 90, 34, 32);
    view.defPosition("f1l", 287, 98, 34, 32);
    view.defPosition("f1m", 287, 106, 34, 32);
    view.defPosition("f1n", 287, 114, 34, 32);
    view.defPosition("f1o", 287, 122, 34, 32);
    view.defPosition("f1p", 287, 130, 34, 32);
    view.defPosition("f1q", 287, 138, 34, 32);
    view.defPosition("e1a", 321, 10, 34, 32);
    view.defPosition("e1b", 321, 18, 34, 32);
    view.defPosition("e1c", 321, 26, 34, 32);
    view.defPosition("e1d", 321, 34, 34, 32);
    view.defPosition("e1e", 321, 42, 34, 32);
    view.defPosition("e1f", 321, 50, 34, 32);
    view.defPosition("e1g", 321, 58, 34, 32);
    view.defPosition("e1h", 321, 66, 34, 32);
    view.defPosition("e1i", 321, 74, 34, 32);
    view.defPosition("e1j", 321, 82, 34, 32);
    view.defPosition("e1k", 321, 90, 34, 32);
    view.defPosition("e1l", 321, 98, 34, 32);
    view.defPosition("e1m", 321, 106, 34, 32);
    view.defPosition("e1n", 321, 114, 34, 32);
    view.defPosition("e1o", 321, 122, 34, 32);
    view.defPosition("e1p", 321, 130, 34, 32);
    view.defPosition("e1q", 321, 138, 34, 32);
    view.defPosition("d1a", 355, 10, 34, 32);
    view.defPosition("d1b", 355, 18, 34, 32);
    view.defPosition("d1c", 355, 26, 34, 32);
    view.defPosition("d1d", 355, 34, 34, 32);
    view.defPosition("d1e", 355, 42, 34, 32);
    view.defPosition("d1f", 355, 50, 34, 32);
    view.defPosition("d1g", 355, 58, 34, 32);
    view.defPosition("d1h", 355, 66, 34, 32);
    view.defPosition("d1i", 355, 74, 34, 32);
    view.defPosition("d1j", 355, 82, 34, 32);
    view.defPosition("d1k", 355, 90, 34, 32);
    view.defPosition("d1l", 355, 98, 34, 32);
    view.defPosition("d1m", 355, 106, 34, 32);
    view.defPosition("d1n", 355, 114, 34, 32);
    view.defPosition("d1o", 355, 122, 34, 32);
    view.defPosition("d1p", 355, 130, 34, 32);
    view.defPosition("d1q", 355, 138, 34, 32);
    view.defPosition("c1a", 389, 10, 34, 32);
    view.defPosition("c1b", 389, 18, 34, 32);
    view.defPosition("c1c", 389, 26, 34, 32);
    view.defPosition("c1d", 389, 34, 34, 32);
    view.defPosition("c1e", 389, 42, 34, 32);
    view.defPosition("c1f", 389, 50, 34, 32);
    view.defPosition("c1g", 389, 58, 34, 32);
    view.defPosition("c1h", 389, 66, 34, 32);
    view.defPosition("c1i", 389, 74, 34, 32);
    view.defPosition("c1j", 389, 82, 34, 32);
    view.defPosition("c1k", 389, 90, 34, 32);
    view.defPosition("c1l", 389, 98, 34, 32);
    view.defPosition("c1m", 389, 106, 34, 32);
    view.defPosition("c1n", 389, 114, 34, 32);
    view.defPosition("c1o", 389, 122, 34, 32);
    view.defPosition("c1p", 389, 130, 34, 32);
    view.defPosition("c1q", 389, 138, 34, 32);
    view.defPosition("b1a", 423, 10, 34, 32);
    view.defPosition("b1b", 423, 18, 34, 32);
    view.defPosition("b1c", 423, 26, 34, 32);
    view.defPosition("b1d", 423, 34, 34, 32);
    view.defPosition("b1e", 423, 42, 34, 32);
    view.defPosition("b1f", 423, 50, 34, 32);
    view.defPosition("b1g", 423, 58, 34, 32);
    view.defPosition("b1h", 423, 66, 34, 32);
    view.defPosition("b1i", 423, 74, 34, 32);
    view.defPosition("b1j", 423, 82, 34, 32);
    view.defPosition("b1k", 423, 90, 34, 32);
    view.defPosition("b1l", 423, 98, 34, 32);
    view.defPosition("b1m", 423, 106, 34, 32);
    view.defPosition("b1n", 423, 114, 34, 32);
    view.defPosition("b1o", 423, 122, 34, 32);
    view.defPosition("b1p", 423, 130, 34, 32);
    view.defPosition("b1q", 423, 138, 34, 32);
    view.defPosition("a1a", 457, 10, 34, 32);
    view.defPosition("a1b", 457, 18, 34, 32);
    view.defPosition("a1c", 457, 26, 34, 32);
    view.defPosition("a1d", 457, 34, 34, 32);
    view.defPosition("a1e", 457, 42, 34, 32);
    view.defPosition("a1f", 457, 50, 34, 32);
    view.defPosition("a1g", 457, 58, 34, 32);
    view.defPosition("a1h", 457, 66, 34, 32);
    view.defPosition("a1i", 457, 74, 34, 32);
    view.defPosition("a1j", 457, 82, 34, 32);
    view.defPosition("a1k", 457, 90, 34, 32);
    view.defPosition("a1l", 457, 98, 34, 32);
    view.defPosition("a1m", 457, 106, 34, 32);
    view.defPosition("a1n", 457, 114, 34, 32);
    view.defPosition("a1o", 457, 122, 34, 32);
    view.defPosition("a1p", 457, 130, 34, 32);
    view.defPosition("a1q", 457, 138, 34, 32);
    view.defPosition("m2a", 59, 308, 34, 32);
    view.defPosition("m2b", 59, 300, 34, 32);
    view.defPosition("m2c", 59, 292, 34, 32);
    view.defPosition("m2d", 59, 284, 34, 32);
    view.defPosition("m2e", 59, 276, 34, 32);
    view.defPosition("m2f", 59, 268, 34, 32);
    view.defPosition("m2g", 59, 260, 34, 32);
    view.defPosition("m2h", 59, 252, 34, 32);
    view.defPosition("m2i", 59, 244, 34, 32);
    view.defPosition("m2j", 59, 236, 34, 32);
    view.defPosition("m2k", 59, 228, 34, 32);
    view.defPosition("m2l", 59, 220, 34, 32);
    view.defPosition("m2m", 59, 212, 34, 32);
    view.defPosition("m2n", 59, 204, 34, 32);
    view.defPosition("m2o", 59, 196, 34, 32);
    view.defPosition("m2p", 59, 188, 34, 32);
    view.defPosition("m2q", 59, 180, 34, 32);
    view.defPosition("l2a", 93, 308, 34, 32);
    view.defPosition("l2b", 93, 300, 34, 32);
    view.defPosition("l2c", 93, 292, 34, 32);
    view.defPosition("l2d", 93, 284, 34, 32);
    view.defPosition("l2e", 93, 276, 34, 32);
    view.defPosition("l2f", 93, 268, 34, 32);
    view.defPosition("l2g", 93, 260, 34, 32);
    view.defPosition("l2h", 93, 252, 34, 32);
    view.defPosition("l2i", 93, 244, 34, 32);
    view.defPosition("l2j", 93, 236, 34, 32);
    view.defPosition("l2k", 93, 228, 34, 32);
    view.defPosition("l2l", 93, 220, 34, 32);
    view.defPosition("l2m", 93, 212, 34, 32);
    view.defPosition("l2n", 93, 204, 34, 32);
    view.defPosition("l2o", 93, 196, 34, 32);
    view.defPosition("l2p", 93, 188, 34, 32);
    view.defPosition("l2q", 93, 180, 34, 32);
    view.defPosition("k2a", 127, 308, 34, 32);
    view.defPosition("k2b", 127, 300, 34, 32);
    view.defPosition("k2c", 127, 292, 34, 32);
    view.defPosition("k2d", 127, 284, 34, 32);
    view.defPosition("k2e", 127, 276, 34, 32);
    view.defPosition("k2f", 127, 268, 34, 32);
    view.defPosition("k2g", 127, 260, 34, 32);
    view.defPosition("k2h", 127, 252, 34, 32);
    view.defPosition("k2i", 127, 244, 34, 32);
    view.defPosition("k2j", 127, 236, 34, 32);
    view.defPosition("k2k", 127, 228, 34, 32);
    view.defPosition("k2l", 127, 220, 34, 32);
    view.defPosition("k2m", 127, 212, 34, 32);
    view.defPosition("k2n", 127, 204, 34, 32);
    view.defPosition("k2o", 127, 196, 34, 32);
    view.defPosition("k2p", 127, 188, 34, 32);
    view.defPosition("k2q", 127, 180, 34, 32);
    view.defPosition("j2a", 161, 308, 34, 32);
    view.defPosition("j2b", 161, 300, 34, 32);
    view.defPosition("j2c", 161, 292, 34, 32);
    view.defPosition("j2d", 161, 284, 34, 32);
    view.defPosition("j2e", 161, 276, 34, 32);
    view.defPosition("j2f", 161, 268, 34, 32);
    view.defPosition("j2g", 161, 260, 34, 32);
    view.defPosition("j2h", 161, 252, 34, 32);
    view.defPosition("j2i", 161, 244, 34, 32);
    view.defPosition("j2j", 161, 236, 34, 32);
    view.defPosition("j2k", 161, 228, 34, 32);
    view.defPosition("j2l", 161, 220, 34, 32);
    view.defPosition("j2m", 161, 212, 34, 32);
    view.defPosition("j2n", 161, 204, 34, 32);
    view.defPosition("j2o", 161, 196, 34, 32);
    view.defPosition("j2p", 161, 188, 34, 32);
    view.defPosition("j2q", 161, 180, 34, 32);
    view.defPosition("h2a", 195, 308, 34, 32);
    view.defPosition("h2b", 195, 300, 34, 32);
    view.defPosition("h2c", 195, 292, 34, 32);
    view.defPosition("h2d", 195, 284, 34, 32);
    view.defPosition("h2e", 195, 276, 34, 32);
    view.defPosition("h2f", 195, 268, 34, 32);
    view.defPosition("h2g", 195, 260, 34, 32);
    view.defPosition("h2h", 195, 252, 34, 32);
    view.defPosition("h2i", 195, 244, 34, 32);
    view.defPosition("h2j", 195, 236, 34, 32);
    view.defPosition("h2k", 195, 228, 34, 32);
    view.defPosition("h2l", 195, 220, 34, 32);
    view.defPosition("h2m", 195, 212, 34, 32);
    view.defPosition("h2n", 195, 204, 34, 32);
    view.defPosition("h2o", 195, 196, 34, 32);
    view.defPosition("h2p", 195, 188, 34, 32);
    view.defPosition("h2q", 195, 180, 34, 32);
    view.defPosition("g2a", 229, 308, 34, 32);
    view.defPosition("g2b", 229, 300, 34, 32);
    view.defPosition("g2c", 229, 292, 34, 32);
    view.defPosition("g2d", 229, 284, 34, 32);
    view.defPosition("g2e", 229, 276, 34, 32);
    view.defPosition("g2f", 229, 268, 34, 32);
    view.defPosition("g2g", 229, 260, 34, 32);
    view.defPosition("g2h", 229, 252, 34, 32);
    view.defPosition("g2i", 229, 244, 34, 32);
    view.defPosition("g2j", 229, 236, 34, 32);
    view.defPosition("g2k", 229, 228, 34, 32);
    view.defPosition("g2l", 229, 220, 34, 32);
    view.defPosition("g2m", 229, 212, 34, 32);
    view.defPosition("g2n", 229, 204, 34, 32);
    view.defPosition("g2o", 229, 196, 34, 32);
    view.defPosition("g2p", 229, 188, 34, 32);
    view.defPosition("g2q", 229, 180, 34, 32);
    view.defPosition("f2a", 287, 308, 34, 32);
    view.defPosition("f2b", 287, 300, 34, 32);
    view.defPosition("f2c", 287, 292, 34, 32);
    view.defPosition("f2d", 287, 284, 34, 32);
    view.defPosition("f2e", 287, 276, 34, 32);
    view.defPosition("f2f", 287, 268, 34, 32);
    view.defPosition("f2g", 287, 260, 34, 32);
    view.defPosition("f2h", 287, 252, 34, 32);
    view.defPosition("f2i", 287, 244, 34, 32);
    view.defPosition("f2j", 287, 236, 34, 32);
    view.defPosition("f2k", 287, 228, 34, 32);
    view.defPosition("f2l", 287, 220, 34, 32);
    view.defPosition("f2m", 287, 212, 34, 32);
    view.defPosition("f2n", 287, 204, 34, 32);
    view.defPosition("f2o", 287, 196, 34, 32);
    view.defPosition("f2p", 287, 188, 34, 32);
    view.defPosition("f2q", 287, 180, 34, 32);
    view.defPosition("e2a", 321, 308, 34, 32);
    view.defPosition("e2b", 321, 300, 34, 32);
    view.defPosition("e2c", 321, 292, 34, 32);
    view.defPosition("e2d", 321, 284, 34, 32);
    view.defPosition("e2e", 321, 276, 34, 32);
    view.defPosition("e2f", 321, 268, 34, 32);
    view.defPosition("e2g", 321, 260, 34, 32);
    view.defPosition("e2h", 321, 252, 34, 32);
    view.defPosition("e2i", 321, 244, 34, 32);
    view.defPosition("e2j", 321, 236, 34, 32);
    view.defPosition("e2k", 321, 228, 34, 32);
    view.defPosition("e2l", 321, 220, 34, 32);
    view.defPosition("e2m", 321, 212, 34, 32);
    view.defPosition("e2n", 321, 204, 34, 32);
    view.defPosition("e2o", 321, 196, 34, 32);
    view.defPosition("e2p", 321, 188, 34, 32);
    view.defPosition("e2q", 321, 180, 34, 32);
    view.defPosition("d2a", 355, 308, 34, 32);
    view.defPosition("d2b", 355, 300, 34, 32);
    view.defPosition("d2c", 355, 292, 34, 32);
    view.defPosition("d2d", 355, 284, 34, 32);
    view.defPosition("d2e", 355, 276, 34, 32);
    view.defPosition("d2f", 355, 268, 34, 32);
    view.defPosition("d2g", 355, 260, 34, 32);
    view.defPosition("d2h", 355, 252, 34, 32);
    view.defPosition("d2i", 355, 244, 34, 32);
    view.defPosition("d2j", 355, 236, 34, 32);
    view.defPosition("d2k", 355, 228, 34, 32);
    view.defPosition("d2l", 355, 220, 34, 32);
    view.defPosition("d2m", 355, 212, 34, 32);
    view.defPosition("d2n", 355, 204, 34, 32);
    view.defPosition("d2o", 355, 196, 34, 32);
    view.defPosition("d2p", 355, 188, 34, 32);
    view.defPosition("d2q", 355, 180, 34, 32);
    view.defPosition("c2a", 389, 308, 34, 32);
    view.defPosition("c2b", 389, 300, 34, 32);
    view.defPosition("c2c", 389, 292, 34, 32);
    view.defPosition("c2d", 389, 284, 34, 32);
    view.defPosition("c2e", 389, 276, 34, 32);
    view.defPosition("c2f", 389, 268, 34, 32);
    view.defPosition("c2g", 389, 260, 34, 32);
    view.defPosition("c2h", 389, 252, 34, 32);
    view.defPosition("c2i", 389, 244, 34, 32);
    view.defPosition("c2j", 389, 236, 34, 32);
    view.defPosition("c2k", 389, 228, 34, 32);
    view.defPosition("c2l", 389, 220, 34, 32);
    view.defPosition("c2m", 389, 212, 34, 32);
    view.defPosition("c2n", 389, 204, 34, 32);
    view.defPosition("c2o", 389, 196, 34, 32);
    view.defPosition("c2p", 389, 188, 34, 32);
    view.defPosition("c2q", 389, 180, 34, 32);
    view.defPosition("b2a", 423, 308, 34, 32);
    view.defPosition("b2b", 423, 300, 34, 32);
    view.defPosition("b2c", 423, 292, 34, 32);
    view.defPosition("b2d", 423, 284, 34, 32);
    view.defPosition("b2e", 423, 276, 34, 32);
    view.defPosition("b2f", 423, 268, 34, 32);
    view.defPosition("b2g", 423, 260, 34, 32);
    view.defPosition("b2h", 423, 252, 34, 32);
    view.defPosition("b2i", 423, 244, 34, 32);
    view.defPosition("b2j", 423, 236, 34, 32);
    view.defPosition("b2k", 423, 228, 34, 32);
    view.defPosition("b2l", 423, 220, 34, 32);
    view.defPosition("b2m", 423, 212, 34, 32);
    view.defPosition("b2n", 423, 204, 34, 32);
    view.defPosition("b2o", 423, 196, 34, 32);
    view.defPosition("b2p", 423, 188, 34, 32);
    view.defPosition("b2q", 423, 180, 34, 32);
    view.defPosition("a2a", 457, 308, 34, 32);
    view.defPosition("a2b", 457, 300, 34, 32);
    view.defPosition("a2c", 457, 292, 34, 32);
    view.defPosition("a2d", 457, 284, 34, 32);
    view.defPosition("a2e", 457, 276, 34, 32);
    view.defPosition("a2f", 457, 268, 34, 32);
    view.defPosition("a2g", 457, 260, 34, 32);
    view.defPosition("a2h", 457, 252, 34, 32);
    view.defPosition("a2i", 457, 244, 34, 32);
    view.defPosition("a2j", 457, 236, 34, 32);
    view.defPosition("a2k", 457, 228, 34, 32);
    view.defPosition("a2l", 457, 220, 34, 32);
    view.defPosition("a2m", 457, 212, 34, 32);
    view.defPosition("a2n", 457, 204, 34, 32);
    view.defPosition("a2o", 457, 196, 34, 32);
    view.defPosition("a2p", 457, 188, 34, 32);
    view.defPosition("a2q", 457, 180, 34, 32);
    view.defPosition("H2a", 5, 10, 40, 32);
    view.defPosition("H2b", 5, 26, 40, 32);
    view.defPosition("H2c", 5, 42, 40, 32);
    view.defPosition("H2d", 5, 58, 40, 32);
    view.defPosition("H2e", 5, 74, 40, 32);
    view.defPosition("H2f", 5, 90, 40, 32);
    view.defPosition("H2g", 5, 106, 40, 32);
    view.defPosition("H2h", 5, 122, 40, 32);
    view.defPosition("H2i", 5, 138, 40, 32);
    view.defPosition("H2j", 5, 154, 40, 32);
    view.defPosition("H2k", 5, 170, 40, 32);
    view.defPosition("H2l", 5, 186, 40, 32);
    view.defPosition("H2m", 5, 202, 40, 32);
    view.defPosition("H2n", 5, 218, 40, 32);
    view.defPosition("H2o", 5, 234, 40, 32);
    view.defPosition("H2p", 5, 250, 40, 32);
    view.defPosition("H2q", 5, 266, 40, 32);
    view.defPosition("H1a", 506, 308, 40, 32);
    view.defPosition("H1b", 506, 292, 40, 32);
    view.defPosition("H1c", 506, 276, 40, 32);
    view.defPosition("H1d", 506, 260, 40, 32);
    view.defPosition("H1e", 506, 244, 40, 32);
    view.defPosition("H1f", 506, 228, 40, 32);
    view.defPosition("H1g", 506, 212, 40, 32);
    view.defPosition("H1h", 506, 196, 40, 32);
    view.defPosition("H1i", 506, 180, 40, 32);
    view.defPosition("H1j", 506, 164, 40, 32);
    view.defPosition("H1k", 506, 148, 40, 32);
    view.defPosition("H1l", 506, 132, 40, 32);
    view.defPosition("H1m", 506, 116, 40, 32);
    view.defPosition("H1n", 506, 100, 40, 32);
    view.defPosition("H1o", 506, 84, 40, 32);
    view.defPosition("H1p", 506, 68, 40, 32);
    view.defPosition("H1q", 506, 52, 40, 32);
    view.defPosition("D1", 127, 160, 34, 29);
    view.defPosition("D2", 161, 160, 34, 29);
    view.defPosition("D3", 355, 160, 34, 29);
    view.defPosition("D4", 389, 160, 34, 29);
}
