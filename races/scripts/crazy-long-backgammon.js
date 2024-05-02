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
    design.checkVersion("advisor-wait", "5");

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
    design.addRandom(1, [7]); // 0
    design.addRandom(2, [7]); // 1
    design.repeatMark();
    design.addRandom(1, [0]); // 2
    design.addRandom(1, [0]); // 3
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 4
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 5
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 6
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 7
    design.addRandom(2, [0]); // 8
    design.addRandom(2, [0]); // 9
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 10
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 11
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 12
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 13
    design.endMark();                      // 14

    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 15
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 16
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 17
    design.addTurn(1, [1, 2, 3, 4, 5, 6]); // 18
    design.addRandom(1, [0]); // 19
    design.addRandom(1, [0]); // 20

    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 21
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 22
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 23
    design.addTurn(2, [1, 2, 3, 4, 5, 6]); // 24
    design.addRandom(2, [0]); // 25
    design.addRandom(2, [0]); // 26

    design.addPosition("m1a", [451, 450, 442, 204, 17, 1, 391, 187]);
    design.addPosition("m1b", [0, 0, 0, 203, 16, 1, 0, 0]);
    design.addPosition("m1c", [0, 0, 0, 202, 15, 1, 0, 0]);
    design.addPosition("m1d", [0, 0, 0, 201, 14, 1, 0, 0]);
    design.addPosition("m1e", [0, 0, 0, 200, 13, 1, 0, 0]);
    design.addPosition("m1f", [0, 0, 0, 199, 12, 1, 0, 0]);
    design.addPosition("m1g", [0, 0, 0, 198, 11, 1, 0, 0]);
    design.addPosition("m1h", [0, 0, 0, 197, 10, 1, 0, 0]);
    design.addPosition("m1i", [0, 0, 0, 196, 9, 1, 0, 0]);
    design.addPosition("m1j", [0, 0, 0, 195, 8, 1, 0, 0]);
    design.addPosition("m1k", [0, 0, 0, 194, 7, 1, 0, 0]);
    design.addPosition("m1l", [0, 0, 0, 193, 6, 1, 0, 0]);
    design.addPosition("m1m", [0, 0, 0, 192, 5, 1, 0, 0]);
    design.addPosition("m1n", [0, 0, 0, 191, 4, 1, 0, 0]);
    design.addPosition("m1o", [0, 0, 0, 190, 3, 1, 0, 0]);
    design.addPosition("m1p", [0, 0, 0, 189, 2, 1, 0, 0]);
    design.addPosition("m1q", [0, 0, 0, 188, 1, 0, 0, 0]);
    design.addPosition("l1a", [0, 0, 0, -17, 17, 1, 0, 0]);
    design.addPosition("l1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("l1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("l1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("l1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("l1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("l1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("l1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("l1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("l1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("l1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("l1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("l1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("l1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("l1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("l1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("l1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("k1a", [0, 0, 0, -17, 17, 1, 0, 0]);
    design.addPosition("k1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("k1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("k1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("k1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("k1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("k1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("k1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("k1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("k1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("k1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("k1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("k1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("k1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("k1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("k1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("k1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("j1a", [0, 0, 0, -17, 17, 1, 0, 0]);
    design.addPosition("j1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("j1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("j1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("j1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("j1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("j1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("j1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("j1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("j1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("j1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("j1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("j1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("j1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("j1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("j1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("j1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("h1a", [0, 0, 0, -17, 17, 1, 0, 0]);
    design.addPosition("h1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("h1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("h1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("h1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("h1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("h1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("h1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("h1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("h1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("h1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("h1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("h1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("h1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("h1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("h1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("h1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("g1a", [0, 0, 0, -17, 17, 1, 0, 0]);
    design.addPosition("g1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("g1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("g1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("g1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("g1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("g1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("g1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("g1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("g1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("g1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("g1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("g1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("g1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("g1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("g1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("g1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("f1a", [0, 0, 0, -17, 17, 1, 0, 0]);
    design.addPosition("f1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("f1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("f1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("f1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("f1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("f1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("f1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("f1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("f1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("f1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("f1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("f1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("f1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("f1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("f1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("f1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("e1a", [0, 0, 0, -17, 17, 1, 0, -17]);
    design.addPosition("e1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("e1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("e1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("e1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("e1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("e1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("e1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("e1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("e1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("e1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("e1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("e1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("e1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("e1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("e1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("e1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("d1a", [0, 0, 0, -17, 17, 1, 0, -17]);
    design.addPosition("d1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("d1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("d1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("d1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("d1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("d1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("d1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("d1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("d1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("d1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("d1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("d1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("d1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("d1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("d1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("d1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("c1a", [0, 0, 0, -17, 17, 1, 0, -17]);
    design.addPosition("c1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("c1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("c1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("c1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("c1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("c1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("c1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("c1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("c1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("c1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("c1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("c1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("c1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("c1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("c1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("c1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("b1a", [0, 0, 0, -17, 17, 1, 0, -17]);
    design.addPosition("b1b", [0, 0, 0, -18, 16, 1, 0, 0]);
    design.addPosition("b1c", [0, 0, 0, -19, 15, 1, 0, 0]);
    design.addPosition("b1d", [0, 0, 0, -20, 14, 1, 0, 0]);
    design.addPosition("b1e", [0, 0, 0, -21, 13, 1, 0, 0]);
    design.addPosition("b1f", [0, 0, 0, -22, 12, 1, 0, 0]);
    design.addPosition("b1g", [0, 0, 0, -23, 11, 1, 0, 0]);
    design.addPosition("b1h", [0, 0, 0, -24, 10, 1, 0, 0]);
    design.addPosition("b1i", [0, 0, 0, -25, 9, 1, 0, 0]);
    design.addPosition("b1j", [0, 0, 0, -26, 8, 1, 0, 0]);
    design.addPosition("b1k", [0, 0, 0, -27, 7, 1, 0, 0]);
    design.addPosition("b1l", [0, 0, 0, -28, 6, 1, 0, 0]);
    design.addPosition("b1m", [0, 0, 0, -29, 5, 1, 0, 0]);
    design.addPosition("b1n", [0, 0, 0, -30, 4, 1, 0, 0]);
    design.addPosition("b1o", [0, 0, 0, -31, 3, 1, 0, 0]);
    design.addPosition("b1p", [0, 0, 0, -32, 2, 1, 0, 0]);
    design.addPosition("b1q", [0, 0, 0, -33, 1, 0, 0, 0]);
    design.addPosition("a1a", [0, 0, 0, -17, 221, 1, 0, -17]);
    design.addPosition("a1b", [0, 0, 0, -18, 220, 1, 0, 0]);
    design.addPosition("a1c", [0, 0, 0, -19, 219, 1, 0, 0]);
    design.addPosition("a1d", [0, 0, 0, -20, 218, 1, 0, 0]);
    design.addPosition("a1e", [0, 0, 0, -21, 217, 1, 0, 0]);
    design.addPosition("a1f", [0, 0, 0, -22, 216, 1, 0, 0]);
    design.addPosition("a1g", [0, 0, 0, -23, 215, 1, 0, 0]);
    design.addPosition("a1h", [0, 0, 0, -24, 214, 1, 0, 0]);
    design.addPosition("a1i", [0, 0, 0, -25, 213, 1, 0, 0]);
    design.addPosition("a1j", [0, 0, 0, -26, 212, 1, 0, 0]);
    design.addPosition("a1k", [0, 0, 0, -27, 211, 1, 0, 0]);
    design.addPosition("a1l", [0, 0, 0, -28, 210, 1, 0, 0]);
    design.addPosition("a1m", [0, 0, 0, -29, 209, 1, 0, 0]);
    design.addPosition("a1n", [0, 0, 0, -30, 208, 1, 0, 0]);
    design.addPosition("a1o", [0, 0, 0, -31, 207, 1, 0, 0]);
    design.addPosition("a1p", [0, 0, 0, -32, 206, 1, 0, 0]);
    design.addPosition("a1q", [0, 0, 0, -33, 205, 0, 0, 0]);
    design.addPosition("m2a", [0, 0, 0, 17, -204, 1, 0, 0]);
    design.addPosition("m2b", [0, 0, 0, 16, -205, 1, 0, 0]);
    design.addPosition("m2c", [0, 0, 0, 15, -206, 1, 0, 0]);
    design.addPosition("m2d", [0, 0, 0, 14, -207, 1, 0, 0]);
    design.addPosition("m2e", [0, 0, 0, 13, -208, 1, 0, 0]);
    design.addPosition("m2f", [0, 0, 0, 12, -209, 1, 0, 0]);
    design.addPosition("m2g", [0, 0, 0, 11, -210, 1, 0, 0]);
    design.addPosition("m2h", [0, 0, 0, 10, -211, 1, 0, 0]);
    design.addPosition("m2i", [0, 0, 0, 9, -212, 1, 0, 0]);
    design.addPosition("m2j", [0, 0, 0, 8, -213, 1, 0, 0]);
    design.addPosition("m2k", [0, 0, 0, 7, -214, 1, 0, 0]);
    design.addPosition("m2l", [0, 0, 0, 6, -215, 1, 0, 0]);
    design.addPosition("m2m", [0, 0, 0, 5, -216, 1, 0, 0]);
    design.addPosition("m2n", [0, 0, 0, 4, -217, 1, 0, 0]);
    design.addPosition("m2o", [0, 0, 0, 3, -218, 1, 0, 0]);
    design.addPosition("m2p", [0, 0, 0, 2, -219, 1, 0, 0]);
    design.addPosition("m2q", [0, 0, 0, 1, -220, 0, 0, 0]);
    design.addPosition("l2a", [0, 0, 0, 17, -17, 1, 0, 0]);
    design.addPosition("l2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("l2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("l2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("l2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("l2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("l2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("l2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("l2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("l2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("l2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("l2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("l2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("l2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("l2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("l2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("l2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("k2a", [0, 0, 0, 17, -17, 1, 0, 0]);
    design.addPosition("k2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("k2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("k2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("k2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("k2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("k2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("k2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("k2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("k2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("k2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("k2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("k2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("k2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("k2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("k2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("k2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("j2a", [0, 0, 0, 17, -17, 1, 0, 0]);
    design.addPosition("j2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("j2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("j2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("j2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("j2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("j2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("j2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("j2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("j2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("j2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("j2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("j2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("j2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("j2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("j2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("j2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("h2a", [0, 0, 0, 17, -17, 1, 0, 0]);
    design.addPosition("h2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("h2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("h2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("h2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("h2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("h2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("h2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("h2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("h2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("h2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("h2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("h2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("h2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("h2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("h2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("h2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("g2a", [0, 0, 0, 17, -17, 1, 0, 0]);
    design.addPosition("g2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("g2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("g2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("g2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("g2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("g2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("g2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("g2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("g2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("g2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("g2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("g2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("g2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("g2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("g2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("g2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("f2a", [0, 0, 0, 17, -17, 1, 0, 0]);
    design.addPosition("f2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("f2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("f2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("f2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("f2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("f2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("f2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("f2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("f2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("f2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("f2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("f2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("f2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("f2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("f2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("f2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("e2a", [0, 0, 0, 17, -17, 1, -17, 0]);
    design.addPosition("e2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("e2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("e2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("e2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("e2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("e2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("e2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("e2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("e2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("e2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("e2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("e2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("e2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("e2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("e2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("e2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("d2a", [0, 0, 0, 17, -17, 1, -17, 0]);
    design.addPosition("d2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("d2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("d2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("d2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("d2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("d2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("d2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("d2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("d2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("d2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("d2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("d2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("d2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("d2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("d2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("d2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("c2a", [0, 0, 0, 17, -17, 1, -17, 0]);
    design.addPosition("c2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("c2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("c2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("c2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("c2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("c2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("c2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("c2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("c2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("c2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("c2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("c2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("c2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("c2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("c2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("c2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("b2a", [0, 0, 0, 17, -17, 1, -17, 0]);
    design.addPosition("b2b", [0, 0, 0, 16, -18, 1, 0, 0]);
    design.addPosition("b2c", [0, 0, 0, 15, -19, 1, 0, 0]);
    design.addPosition("b2d", [0, 0, 0, 14, -20, 1, 0, 0]);
    design.addPosition("b2e", [0, 0, 0, 13, -21, 1, 0, 0]);
    design.addPosition("b2f", [0, 0, 0, 12, -22, 1, 0, 0]);
    design.addPosition("b2g", [0, 0, 0, 11, -23, 1, 0, 0]);
    design.addPosition("b2h", [0, 0, 0, 10, -24, 1, 0, 0]);
    design.addPosition("b2i", [0, 0, 0, 9, -25, 1, 0, 0]);
    design.addPosition("b2j", [0, 0, 0, 8, -26, 1, 0, 0]);
    design.addPosition("b2k", [0, 0, 0, 7, -27, 1, 0, 0]);
    design.addPosition("b2l", [0, 0, 0, 6, -28, 1, 0, 0]);
    design.addPosition("b2m", [0, 0, 0, 5, -29, 1, 0, 0]);
    design.addPosition("b2n", [0, 0, 0, 4, -30, 1, 0, 0]);
    design.addPosition("b2o", [0, 0, 0, 3, -31, 1, 0, 0]);
    design.addPosition("b2p", [0, 0, 0, 2, -32, 1, 0, 0]);
    design.addPosition("b2q", [0, 0, 0, 1, -33, 0, 0, 0]);
    design.addPosition("a2a", [0, 0, 0, 34, -17, 1, -17, 0]);
    design.addPosition("a2b", [0, 0, 0, 33, -18, 1, 0, 0]);
    design.addPosition("a2c", [0, 0, 0, 32, -19, 1, 0, 0]);
    design.addPosition("a2d", [0, 0, 0, 31, -20, 1, 0, 0]);
    design.addPosition("a2e", [0, 0, 0, 30, -21, 1, 0, 0]);
    design.addPosition("a2f", [0, 0, 0, 29, -22, 1, 0, 0]);
    design.addPosition("a2g", [0, 0, 0, 28, -23, 1, 0, 0]);
    design.addPosition("a2h", [0, 0, 0, 27, -24, 1, 0, 0]);
    design.addPosition("a2i", [0, 0, 0, 26, -25, 1, 0, 0]);
    design.addPosition("a2j", [0, 0, 0, 25, -26, 1, 0, 0]);
    design.addPosition("a2k", [0, 0, 0, 24, -27, 1, 0, 0]);
    design.addPosition("a2l", [0, 0, 0, 23, -28, 1, 0, 0]);
    design.addPosition("a2m", [0, 0, 0, 22, -29, 1, 0, 0]);
    design.addPosition("a2n", [0, 0, 0, 21, -30, 1, 0, 0]);
    design.addPosition("a2o", [0, 0, 0, 20, -31, 1, 0, 0]);
    design.addPosition("a2p", [0, 0, 0, 19, -32, 1, 0, 0]);
    design.addPosition("a2q", [0, 0, 0, 18, -33, 0, 0, 0]);
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
    design.addPosition("B9", [0, 0, 1, -255, -51, 0, 0, 0]);
    design.addPosition("B8", [0, -1, 1, -256, -52, 0, 0, 0]);
    design.addPosition("B7", [0, -1, 1, -257, -53, 0, 0, 0]);
    design.addPosition("B6", [0, -1, 1, -258, -54, 0, 0, 0]);
    design.addPosition("B5", [0, -1, 1, -259, -55, 0, 0, 0]);
    design.addPosition("B4", [0, -1, 1, -260, -56, 0, 0, 0]);
    design.addPosition("B3", [0, -1, 1, -261, -57, 0, 0, 0]);
    design.addPosition("B2", [0, -1, 1, -262, -58, 0, 0, 0]);
    design.addPosition("B1", [0, -1, 0, -263, -59, 0, 0, 0]);
    design.addPosition("D1", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [1, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("home-zone", 1, [391, 374, 357, 340, 323, 306, 425, 408, 392, 375, 358, 341, 324, 307, 426, 409, 393, 376, 359, 342, 325, 308, 427, 410, 394, 377, 360, 343, 326, 309, 428, 411, 395, 378, 361, 344, 327, 310, 429, 412, 396, 379, 362, 345, 328, 311, 430, 413, 397, 380, 363, 346, 329, 312, 431, 414, 398, 381, 364, 347, 330, 313, 432, 415, 399, 382, 365, 348, 331, 314, 433, 416, 400, 383, 366, 349, 332, 315, 434, 417, 401, 384, 367, 350, 333, 316, 435, 418, 402, 385, 368, 351, 334, 317, 436, 419, 403, 386, 369, 352, 335, 318, 437, 420, 404, 387, 370, 353, 336, 319, 438, 421, 405, 388, 371, 354, 337, 320, 439, 422, 406, 389, 372, 355, 338, 321, 440, 423, 407, 390, 373, 356, 339, 322, 441, 424]);
    design.addZone("home-zone", 2, [187, 170, 153, 136, 119, 102, 425, 408, 188, 171, 154, 137, 120, 103, 426, 409, 189, 172, 155, 138, 121, 104, 427, 410, 190, 173, 156, 139, 122, 105, 428, 411, 191, 174, 157, 140, 123, 106, 429, 412, 192, 175, 158, 141, 124, 107, 430, 413, 193, 176, 159, 142, 125, 108, 431, 414, 194, 177, 160, 143, 126, 109, 432, 415, 195, 178, 161, 144, 127, 110, 433, 416, 196, 179, 162, 145, 128, 111, 434, 417, 197, 180, 163, 146, 129, 112, 435, 418, 198, 181, 164, 147, 130, 113, 436, 419, 199, 182, 165, 148, 131, 114, 437, 420, 200, 183, 166, 149, 132, 115, 438, 421, 201, 184, 167, 150, 133, 116, 439, 422, 202, 185, 168, 151, 134, 117, 440, 423, 203, 186, 169, 152, 135, 118, 441, 424]);
    design.addZone("dice-zone", 1, [453, 454]);
    design.addZone("dice-zone", 2, [451, 452]);
    design.addZone("bar-zone", 1, [450, 449, 448, 447, 446, 445, 444, 443, 442]);
    design.addZone("bar-zone", 2, [450, 449, 448, 447, 446, 445, 444, 443, 442]);
    design.addZone("out-zone", 1, [425, 408, 426, 409, 427, 410, 428, 411, 429, 412, 430, 413, 431, 414, 432, 415, 433, 416, 434, 417, 435, 418, 436, 419, 437, 420, 438, 421, 439, 422, 440, 423, 441, 424]);
    design.addZone("out-zone", 2, [425, 408, 426, 409, 427, 410, 428, 411, 429, 412, 430, 413, 431, 414, 432, 415, 433, 416, 434, 417, 435, 418, 436, 419, 437, 420, 438, 421, 439, 422, 440, 423, 441, 424]);
    design.addZone("top-zone", 1, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 408, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 409, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 410, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 411, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 412, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 413, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 414, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 415, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 416, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 417, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 418, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 419, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 420, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 421, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 422, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 423, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 424]);
    design.addZone("top-zone", 2, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 408, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 409, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 410, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 411, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 412, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 413, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 414, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 415, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 416, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 417, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 418, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 419, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 420, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 421, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 422, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 423, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 424]);
    design.addZone("board-zone", 1, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221, 204, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220, 450, 449, 448, 447, 446, 445, 444, 443, 442]);
    design.addZone("board-zone", 2, [187, 170, 153, 136, 119, 102, 85, 68, 51, 34, 17, 0, 188, 171, 154, 137, 120, 103, 86, 69, 52, 35, 18, 1, 189, 172, 155, 138, 121, 104, 87, 70, 53, 36, 19, 2, 190, 173, 156, 139, 122, 105, 88, 71, 54, 37, 20, 3, 191, 174, 157, 140, 123, 106, 89, 72, 55, 38, 21, 4, 192, 175, 158, 141, 124, 107, 90, 73, 56, 39, 22, 5, 193, 176, 159, 142, 125, 108, 91, 74, 57, 40, 23, 6, 194, 177, 160, 143, 126, 109, 92, 75, 58, 41, 24, 7, 195, 178, 161, 144, 127, 110, 93, 76, 59, 42, 25, 8, 196, 179, 162, 145, 128, 111, 94, 77, 60, 43, 26, 9, 197, 180, 163, 146, 129, 112, 95, 78, 61, 44, 27, 10, 198, 181, 164, 147, 130, 113, 96, 79, 62, 45, 28, 11, 199, 182, 165, 148, 131, 114, 97, 80, 63, 46, 29, 12, 200, 183, 166, 149, 132, 115, 98, 81, 64, 47, 30, 13, 201, 184, 167, 150, 133, 116, 99, 82, 65, 48, 31, 14, 202, 185, 168, 151, 134, 117, 100, 83, 66, 49, 32, 15, 203, 186, 169, 152, 135, 118, 101, 84, 67, 50, 33, 16, 391, 374, 357, 340, 323, 306, 289, 272, 255, 238, 221, 204, 392, 375, 358, 341, 324, 307, 290, 273, 256, 239, 222, 205, 393, 376, 359, 342, 325, 308, 291, 274, 257, 240, 223, 206, 394, 377, 360, 343, 326, 309, 292, 275, 258, 241, 224, 207, 395, 378, 361, 344, 327, 310, 293, 276, 259, 242, 225, 208, 396, 379, 362, 345, 328, 311, 294, 277, 260, 243, 226, 209, 397, 380, 363, 346, 329, 312, 295, 278, 261, 244, 227, 210, 398, 381, 364, 347, 330, 313, 296, 279, 262, 245, 228, 211, 399, 382, 365, 348, 331, 314, 297, 280, 263, 246, 229, 212, 400, 383, 366, 349, 332, 315, 298, 281, 264, 247, 230, 213, 401, 384, 367, 350, 333, 316, 299, 282, 265, 248, 231, 214, 402, 385, 368, 351, 334, 317, 300, 283, 266, 249, 232, 215, 403, 386, 369, 352, 335, 318, 301, 284, 267, 250, 233, 216, 404, 387, 370, 353, 336, 319, 302, 285, 268, 251, 234, 217, 405, 388, 371, 354, 337, 320, 303, 286, 269, 252, 235, 218, 406, 389, 372, 355, 338, 321, 304, 287, 270, 253, 236, 219, 407, 390, 373, 356, 339, 322, 305, 288, 271, 254, 237, 220, 450, 449, 448, 447, 446, 445, 444, 443, 442]);
    design.addZone("init-zone", 1, [454]);
    design.addZone("init-zone", 2, [451]);

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
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.IN_ZONE,	6);	// init-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 5], 1, 1);
    design.addMove(0, 1, [3, 3, 5], 2, 1);
    design.addMove(0, 2, [3, 3, 3, 5], 3, 1);
    design.addMove(0, 3, [3, 3, 3, 3, 5], 4, 1);
    design.addMove(0, 4, [3, 3, 3, 3, 3, 5], 5, 1);
    design.addMove(0, 5, [3, 3, 3, 3, 3, 3, 5], 6, 1);

    design.addPiece("D1", 1, 1);
    design.addDrop(1, 6, [], 0, 10);
    design.addDrop(1, 7, [], 7, 10);
    design.addPiece("D2", 2, 2);
    design.addDrop(2, 6, [], 0, 10);
    design.addDrop(2, 7, [], 7, 10);
    design.addPiece("D3", 3, 3);
    design.addDrop(3, 6, [], 0, 10);
    design.addDrop(3, 7, [], 7, 10);
    design.addPiece("D4", 4, 4);
    design.addDrop(4, 6, [], 0, 10);
    design.addDrop(4, 7, [], 7, 10);
    design.addPiece("D5", 5, 5);
    design.addDrop(5, 6, [], 0, 10);
    design.addDrop(5, 7, [], 7, 10);
    design.addPiece("D6", 6, 6);
    design.addDrop(6, 6, [], 0, 10);
    design.addDrop(6, 7, [], 7, 10);

    design.setup("White", "Man", 187);
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
    design.setup("Black", "Man", 391);
    design.setup("Black", "Man", 392);
    design.setup("Black", "Man", 393);
    design.setup("Black", "Man", 394);
    design.setup("Black", "Man", 395);
    design.setup("Black", "Man", 396);
    design.setup("Black", "Man", 397);
    design.setup("Black", "Man", 398);
    design.setup("Black", "Man", 399);
    design.setup("Black", "Man", 400);
    design.setup("Black", "Man", 401);
    design.setup("Black", "Man", 402);
    design.setup("Black", "Man", 403);
    design.setup("Black", "Man", 404);
    design.setup("Black", "Man", 405);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0, 1, 2, 3, 4, 5, 6, 7, 15, 16, 17, 18, 19, 20]);
    view.defBoard("BlackBoard", 0, 0, undefined, [8, 9, 10, 11, 12, 13, 21, 22, 23, 24, 25, 26]);
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
 
    view.defPosition("m1a", 9, 10, 34, 32);
    view.defPosition("m1b", 9, 18, 34, 32);
    view.defPosition("m1c", 9, 26, 34, 32);
    view.defPosition("m1d", 9, 34, 34, 32);
    view.defPosition("m1e", 9, 42, 34, 32);
    view.defPosition("m1f", 9, 50, 34, 32);
    view.defPosition("m1g", 9, 58, 34, 32);
    view.defPosition("m1h", 9, 66, 34, 32);
    view.defPosition("m1i", 9, 74, 34, 32);
    view.defPosition("m1j", 9, 82, 34, 32);
    view.defPosition("m1k", 9, 90, 34, 32);
    view.defPosition("m1l", 9, 98, 34, 32);
    view.defPosition("m1m", 9, 106, 34, 32);
    view.defPosition("m1n", 9, 114, 34, 32);
    view.defPosition("m1o", 9, 122, 34, 32);
    view.defPosition("m1p", 9, 130, 34, 32);
    view.defPosition("m1q", 9, 138, 34, 32);
    view.defPosition("l1a", 43, 10, 34, 32);
    view.defPosition("l1b", 43, 18, 34, 32);
    view.defPosition("l1c", 43, 26, 34, 32);
    view.defPosition("l1d", 43, 34, 34, 32);
    view.defPosition("l1e", 43, 42, 34, 32);
    view.defPosition("l1f", 43, 50, 34, 32);
    view.defPosition("l1g", 43, 58, 34, 32);
    view.defPosition("l1h", 43, 66, 34, 32);
    view.defPosition("l1i", 43, 74, 34, 32);
    view.defPosition("l1j", 43, 82, 34, 32);
    view.defPosition("l1k", 43, 90, 34, 32);
    view.defPosition("l1l", 43, 98, 34, 32);
    view.defPosition("l1m", 43, 106, 34, 32);
    view.defPosition("l1n", 43, 114, 34, 32);
    view.defPosition("l1o", 43, 122, 34, 32);
    view.defPosition("l1p", 43, 130, 34, 32);
    view.defPosition("l1q", 43, 138, 34, 32);
    view.defPosition("k1a", 77, 10, 34, 32);
    view.defPosition("k1b", 77, 18, 34, 32);
    view.defPosition("k1c", 77, 26, 34, 32);
    view.defPosition("k1d", 77, 34, 34, 32);
    view.defPosition("k1e", 77, 42, 34, 32);
    view.defPosition("k1f", 77, 50, 34, 32);
    view.defPosition("k1g", 77, 58, 34, 32);
    view.defPosition("k1h", 77, 66, 34, 32);
    view.defPosition("k1i", 77, 74, 34, 32);
    view.defPosition("k1j", 77, 82, 34, 32);
    view.defPosition("k1k", 77, 90, 34, 32);
    view.defPosition("k1l", 77, 98, 34, 32);
    view.defPosition("k1m", 77, 106, 34, 32);
    view.defPosition("k1n", 77, 114, 34, 32);
    view.defPosition("k1o", 77, 122, 34, 32);
    view.defPosition("k1p", 77, 130, 34, 32);
    view.defPosition("k1q", 77, 138, 34, 32);
    view.defPosition("j1a", 111, 10, 34, 32);
    view.defPosition("j1b", 111, 18, 34, 32);
    view.defPosition("j1c", 111, 26, 34, 32);
    view.defPosition("j1d", 111, 34, 34, 32);
    view.defPosition("j1e", 111, 42, 34, 32);
    view.defPosition("j1f", 111, 50, 34, 32);
    view.defPosition("j1g", 111, 58, 34, 32);
    view.defPosition("j1h", 111, 66, 34, 32);
    view.defPosition("j1i", 111, 74, 34, 32);
    view.defPosition("j1j", 111, 82, 34, 32);
    view.defPosition("j1k", 111, 90, 34, 32);
    view.defPosition("j1l", 111, 98, 34, 32);
    view.defPosition("j1m", 111, 106, 34, 32);
    view.defPosition("j1n", 111, 114, 34, 32);
    view.defPosition("j1o", 111, 122, 34, 32);
    view.defPosition("j1p", 111, 130, 34, 32);
    view.defPosition("j1q", 111, 138, 34, 32);
    view.defPosition("h1a", 145, 10, 34, 32);
    view.defPosition("h1b", 145, 18, 34, 32);
    view.defPosition("h1c", 145, 26, 34, 32);
    view.defPosition("h1d", 145, 34, 34, 32);
    view.defPosition("h1e", 145, 42, 34, 32);
    view.defPosition("h1f", 145, 50, 34, 32);
    view.defPosition("h1g", 145, 58, 34, 32);
    view.defPosition("h1h", 145, 66, 34, 32);
    view.defPosition("h1i", 145, 74, 34, 32);
    view.defPosition("h1j", 145, 82, 34, 32);
    view.defPosition("h1k", 145, 90, 34, 32);
    view.defPosition("h1l", 145, 98, 34, 32);
    view.defPosition("h1m", 145, 106, 34, 32);
    view.defPosition("h1n", 145, 114, 34, 32);
    view.defPosition("h1o", 145, 122, 34, 32);
    view.defPosition("h1p", 145, 130, 34, 32);
    view.defPosition("h1q", 145, 138, 34, 32);
    view.defPosition("g1a", 179, 10, 34, 32);
    view.defPosition("g1b", 179, 18, 34, 32);
    view.defPosition("g1c", 179, 26, 34, 32);
    view.defPosition("g1d", 179, 34, 34, 32);
    view.defPosition("g1e", 179, 42, 34, 32);
    view.defPosition("g1f", 179, 50, 34, 32);
    view.defPosition("g1g", 179, 58, 34, 32);
    view.defPosition("g1h", 179, 66, 34, 32);
    view.defPosition("g1i", 179, 74, 34, 32);
    view.defPosition("g1j", 179, 82, 34, 32);
    view.defPosition("g1k", 179, 90, 34, 32);
    view.defPosition("g1l", 179, 98, 34, 32);
    view.defPosition("g1m", 179, 106, 34, 32);
    view.defPosition("g1n", 179, 114, 34, 32);
    view.defPosition("g1o", 179, 122, 34, 32);
    view.defPosition("g1p", 179, 130, 34, 32);
    view.defPosition("g1q", 179, 138, 34, 32);
    view.defPosition("f1a", 237, 10, 34, 32);
    view.defPosition("f1b", 237, 18, 34, 32);
    view.defPosition("f1c", 237, 26, 34, 32);
    view.defPosition("f1d", 237, 34, 34, 32);
    view.defPosition("f1e", 237, 42, 34, 32);
    view.defPosition("f1f", 237, 50, 34, 32);
    view.defPosition("f1g", 237, 58, 34, 32);
    view.defPosition("f1h", 237, 66, 34, 32);
    view.defPosition("f1i", 237, 74, 34, 32);
    view.defPosition("f1j", 237, 82, 34, 32);
    view.defPosition("f1k", 237, 90, 34, 32);
    view.defPosition("f1l", 237, 98, 34, 32);
    view.defPosition("f1m", 237, 106, 34, 32);
    view.defPosition("f1n", 237, 114, 34, 32);
    view.defPosition("f1o", 237, 122, 34, 32);
    view.defPosition("f1p", 237, 130, 34, 32);
    view.defPosition("f1q", 237, 138, 34, 32);
    view.defPosition("e1a", 271, 10, 34, 32);
    view.defPosition("e1b", 271, 18, 34, 32);
    view.defPosition("e1c", 271, 26, 34, 32);
    view.defPosition("e1d", 271, 34, 34, 32);
    view.defPosition("e1e", 271, 42, 34, 32);
    view.defPosition("e1f", 271, 50, 34, 32);
    view.defPosition("e1g", 271, 58, 34, 32);
    view.defPosition("e1h", 271, 66, 34, 32);
    view.defPosition("e1i", 271, 74, 34, 32);
    view.defPosition("e1j", 271, 82, 34, 32);
    view.defPosition("e1k", 271, 90, 34, 32);
    view.defPosition("e1l", 271, 98, 34, 32);
    view.defPosition("e1m", 271, 106, 34, 32);
    view.defPosition("e1n", 271, 114, 34, 32);
    view.defPosition("e1o", 271, 122, 34, 32);
    view.defPosition("e1p", 271, 130, 34, 32);
    view.defPosition("e1q", 271, 138, 34, 32);
    view.defPosition("d1a", 305, 10, 34, 32);
    view.defPosition("d1b", 305, 18, 34, 32);
    view.defPosition("d1c", 305, 26, 34, 32);
    view.defPosition("d1d", 305, 34, 34, 32);
    view.defPosition("d1e", 305, 42, 34, 32);
    view.defPosition("d1f", 305, 50, 34, 32);
    view.defPosition("d1g", 305, 58, 34, 32);
    view.defPosition("d1h", 305, 66, 34, 32);
    view.defPosition("d1i", 305, 74, 34, 32);
    view.defPosition("d1j", 305, 82, 34, 32);
    view.defPosition("d1k", 305, 90, 34, 32);
    view.defPosition("d1l", 305, 98, 34, 32);
    view.defPosition("d1m", 305, 106, 34, 32);
    view.defPosition("d1n", 305, 114, 34, 32);
    view.defPosition("d1o", 305, 122, 34, 32);
    view.defPosition("d1p", 305, 130, 34, 32);
    view.defPosition("d1q", 305, 138, 34, 32);
    view.defPosition("c1a", 339, 10, 34, 32);
    view.defPosition("c1b", 339, 18, 34, 32);
    view.defPosition("c1c", 339, 26, 34, 32);
    view.defPosition("c1d", 339, 34, 34, 32);
    view.defPosition("c1e", 339, 42, 34, 32);
    view.defPosition("c1f", 339, 50, 34, 32);
    view.defPosition("c1g", 339, 58, 34, 32);
    view.defPosition("c1h", 339, 66, 34, 32);
    view.defPosition("c1i", 339, 74, 34, 32);
    view.defPosition("c1j", 339, 82, 34, 32);
    view.defPosition("c1k", 339, 90, 34, 32);
    view.defPosition("c1l", 339, 98, 34, 32);
    view.defPosition("c1m", 339, 106, 34, 32);
    view.defPosition("c1n", 339, 114, 34, 32);
    view.defPosition("c1o", 339, 122, 34, 32);
    view.defPosition("c1p", 339, 130, 34, 32);
    view.defPosition("c1q", 339, 138, 34, 32);
    view.defPosition("b1a", 373, 10, 34, 32);
    view.defPosition("b1b", 373, 18, 34, 32);
    view.defPosition("b1c", 373, 26, 34, 32);
    view.defPosition("b1d", 373, 34, 34, 32);
    view.defPosition("b1e", 373, 42, 34, 32);
    view.defPosition("b1f", 373, 50, 34, 32);
    view.defPosition("b1g", 373, 58, 34, 32);
    view.defPosition("b1h", 373, 66, 34, 32);
    view.defPosition("b1i", 373, 74, 34, 32);
    view.defPosition("b1j", 373, 82, 34, 32);
    view.defPosition("b1k", 373, 90, 34, 32);
    view.defPosition("b1l", 373, 98, 34, 32);
    view.defPosition("b1m", 373, 106, 34, 32);
    view.defPosition("b1n", 373, 114, 34, 32);
    view.defPosition("b1o", 373, 122, 34, 32);
    view.defPosition("b1p", 373, 130, 34, 32);
    view.defPosition("b1q", 373, 138, 34, 32);
    view.defPosition("a1a", 407, 10, 34, 32);
    view.defPosition("a1b", 407, 18, 34, 32);
    view.defPosition("a1c", 407, 26, 34, 32);
    view.defPosition("a1d", 407, 34, 34, 32);
    view.defPosition("a1e", 407, 42, 34, 32);
    view.defPosition("a1f", 407, 50, 34, 32);
    view.defPosition("a1g", 407, 58, 34, 32);
    view.defPosition("a1h", 407, 66, 34, 32);
    view.defPosition("a1i", 407, 74, 34, 32);
    view.defPosition("a1j", 407, 82, 34, 32);
    view.defPosition("a1k", 407, 90, 34, 32);
    view.defPosition("a1l", 407, 98, 34, 32);
    view.defPosition("a1m", 407, 106, 34, 32);
    view.defPosition("a1n", 407, 114, 34, 32);
    view.defPosition("a1o", 407, 122, 34, 32);
    view.defPosition("a1p", 407, 130, 34, 32);
    view.defPosition("a1q", 407, 138, 34, 32);
    view.defPosition("m2a", 9, 308, 34, 32);
    view.defPosition("m2b", 9, 300, 34, 32);
    view.defPosition("m2c", 9, 292, 34, 32);
    view.defPosition("m2d", 9, 284, 34, 32);
    view.defPosition("m2e", 9, 276, 34, 32);
    view.defPosition("m2f", 9, 268, 34, 32);
    view.defPosition("m2g", 9, 260, 34, 32);
    view.defPosition("m2h", 9, 252, 34, 32);
    view.defPosition("m2i", 9, 244, 34, 32);
    view.defPosition("m2j", 9, 236, 34, 32);
    view.defPosition("m2k", 9, 228, 34, 32);
    view.defPosition("m2l", 9, 220, 34, 32);
    view.defPosition("m2m", 9, 212, 34, 32);
    view.defPosition("m2n", 9, 204, 34, 32);
    view.defPosition("m2o", 9, 196, 34, 32);
    view.defPosition("m2p", 9, 188, 34, 32);
    view.defPosition("m2q", 9, 180, 34, 32);
    view.defPosition("l2a", 43, 308, 34, 32);
    view.defPosition("l2b", 43, 300, 34, 32);
    view.defPosition("l2c", 43, 292, 34, 32);
    view.defPosition("l2d", 43, 284, 34, 32);
    view.defPosition("l2e", 43, 276, 34, 32);
    view.defPosition("l2f", 43, 268, 34, 32);
    view.defPosition("l2g", 43, 260, 34, 32);
    view.defPosition("l2h", 43, 252, 34, 32);
    view.defPosition("l2i", 43, 244, 34, 32);
    view.defPosition("l2j", 43, 236, 34, 32);
    view.defPosition("l2k", 43, 228, 34, 32);
    view.defPosition("l2l", 43, 220, 34, 32);
    view.defPosition("l2m", 43, 212, 34, 32);
    view.defPosition("l2n", 43, 204, 34, 32);
    view.defPosition("l2o", 43, 196, 34, 32);
    view.defPosition("l2p", 43, 188, 34, 32);
    view.defPosition("l2q", 43, 180, 34, 32);
    view.defPosition("k2a", 77, 308, 34, 32);
    view.defPosition("k2b", 77, 300, 34, 32);
    view.defPosition("k2c", 77, 292, 34, 32);
    view.defPosition("k2d", 77, 284, 34, 32);
    view.defPosition("k2e", 77, 276, 34, 32);
    view.defPosition("k2f", 77, 268, 34, 32);
    view.defPosition("k2g", 77, 260, 34, 32);
    view.defPosition("k2h", 77, 252, 34, 32);
    view.defPosition("k2i", 77, 244, 34, 32);
    view.defPosition("k2j", 77, 236, 34, 32);
    view.defPosition("k2k", 77, 228, 34, 32);
    view.defPosition("k2l", 77, 220, 34, 32);
    view.defPosition("k2m", 77, 212, 34, 32);
    view.defPosition("k2n", 77, 204, 34, 32);
    view.defPosition("k2o", 77, 196, 34, 32);
    view.defPosition("k2p", 77, 188, 34, 32);
    view.defPosition("k2q", 77, 180, 34, 32);
    view.defPosition("j2a", 111, 308, 34, 32);
    view.defPosition("j2b", 111, 300, 34, 32);
    view.defPosition("j2c", 111, 292, 34, 32);
    view.defPosition("j2d", 111, 284, 34, 32);
    view.defPosition("j2e", 111, 276, 34, 32);
    view.defPosition("j2f", 111, 268, 34, 32);
    view.defPosition("j2g", 111, 260, 34, 32);
    view.defPosition("j2h", 111, 252, 34, 32);
    view.defPosition("j2i", 111, 244, 34, 32);
    view.defPosition("j2j", 111, 236, 34, 32);
    view.defPosition("j2k", 111, 228, 34, 32);
    view.defPosition("j2l", 111, 220, 34, 32);
    view.defPosition("j2m", 111, 212, 34, 32);
    view.defPosition("j2n", 111, 204, 34, 32);
    view.defPosition("j2o", 111, 196, 34, 32);
    view.defPosition("j2p", 111, 188, 34, 32);
    view.defPosition("j2q", 111, 180, 34, 32);
    view.defPosition("h2a", 145, 308, 34, 32);
    view.defPosition("h2b", 145, 300, 34, 32);
    view.defPosition("h2c", 145, 292, 34, 32);
    view.defPosition("h2d", 145, 284, 34, 32);
    view.defPosition("h2e", 145, 276, 34, 32);
    view.defPosition("h2f", 145, 268, 34, 32);
    view.defPosition("h2g", 145, 260, 34, 32);
    view.defPosition("h2h", 145, 252, 34, 32);
    view.defPosition("h2i", 145, 244, 34, 32);
    view.defPosition("h2j", 145, 236, 34, 32);
    view.defPosition("h2k", 145, 228, 34, 32);
    view.defPosition("h2l", 145, 220, 34, 32);
    view.defPosition("h2m", 145, 212, 34, 32);
    view.defPosition("h2n", 145, 204, 34, 32);
    view.defPosition("h2o", 145, 196, 34, 32);
    view.defPosition("h2p", 145, 188, 34, 32);
    view.defPosition("h2q", 145, 180, 34, 32);
    view.defPosition("g2a", 179, 308, 34, 32);
    view.defPosition("g2b", 179, 300, 34, 32);
    view.defPosition("g2c", 179, 292, 34, 32);
    view.defPosition("g2d", 179, 284, 34, 32);
    view.defPosition("g2e", 179, 276, 34, 32);
    view.defPosition("g2f", 179, 268, 34, 32);
    view.defPosition("g2g", 179, 260, 34, 32);
    view.defPosition("g2h", 179, 252, 34, 32);
    view.defPosition("g2i", 179, 244, 34, 32);
    view.defPosition("g2j", 179, 236, 34, 32);
    view.defPosition("g2k", 179, 228, 34, 32);
    view.defPosition("g2l", 179, 220, 34, 32);
    view.defPosition("g2m", 179, 212, 34, 32);
    view.defPosition("g2n", 179, 204, 34, 32);
    view.defPosition("g2o", 179, 196, 34, 32);
    view.defPosition("g2p", 179, 188, 34, 32);
    view.defPosition("g2q", 179, 180, 34, 32);
    view.defPosition("f2a", 237, 308, 34, 32);
    view.defPosition("f2b", 237, 300, 34, 32);
    view.defPosition("f2c", 237, 292, 34, 32);
    view.defPosition("f2d", 237, 284, 34, 32);
    view.defPosition("f2e", 237, 276, 34, 32);
    view.defPosition("f2f", 237, 268, 34, 32);
    view.defPosition("f2g", 237, 260, 34, 32);
    view.defPosition("f2h", 237, 252, 34, 32);
    view.defPosition("f2i", 237, 244, 34, 32);
    view.defPosition("f2j", 237, 236, 34, 32);
    view.defPosition("f2k", 237, 228, 34, 32);
    view.defPosition("f2l", 237, 220, 34, 32);
    view.defPosition("f2m", 237, 212, 34, 32);
    view.defPosition("f2n", 237, 204, 34, 32);
    view.defPosition("f2o", 237, 196, 34, 32);
    view.defPosition("f2p", 237, 188, 34, 32);
    view.defPosition("f2q", 237, 180, 34, 32);
    view.defPosition("e2a", 271, 308, 34, 32);
    view.defPosition("e2b", 271, 300, 34, 32);
    view.defPosition("e2c", 271, 292, 34, 32);
    view.defPosition("e2d", 271, 284, 34, 32);
    view.defPosition("e2e", 271, 276, 34, 32);
    view.defPosition("e2f", 271, 268, 34, 32);
    view.defPosition("e2g", 271, 260, 34, 32);
    view.defPosition("e2h", 271, 252, 34, 32);
    view.defPosition("e2i", 271, 244, 34, 32);
    view.defPosition("e2j", 271, 236, 34, 32);
    view.defPosition("e2k", 271, 228, 34, 32);
    view.defPosition("e2l", 271, 220, 34, 32);
    view.defPosition("e2m", 271, 212, 34, 32);
    view.defPosition("e2n", 271, 204, 34, 32);
    view.defPosition("e2o", 271, 196, 34, 32);
    view.defPosition("e2p", 271, 188, 34, 32);
    view.defPosition("e2q", 271, 180, 34, 32);
    view.defPosition("d2a", 305, 308, 34, 32);
    view.defPosition("d2b", 305, 300, 34, 32);
    view.defPosition("d2c", 305, 292, 34, 32);
    view.defPosition("d2d", 305, 284, 34, 32);
    view.defPosition("d2e", 305, 276, 34, 32);
    view.defPosition("d2f", 305, 268, 34, 32);
    view.defPosition("d2g", 305, 260, 34, 32);
    view.defPosition("d2h", 305, 252, 34, 32);
    view.defPosition("d2i", 305, 244, 34, 32);
    view.defPosition("d2j", 305, 236, 34, 32);
    view.defPosition("d2k", 305, 228, 34, 32);
    view.defPosition("d2l", 305, 220, 34, 32);
    view.defPosition("d2m", 305, 212, 34, 32);
    view.defPosition("d2n", 305, 204, 34, 32);
    view.defPosition("d2o", 305, 196, 34, 32);
    view.defPosition("d2p", 305, 188, 34, 32);
    view.defPosition("d2q", 305, 180, 34, 32);
    view.defPosition("c2a", 339, 308, 34, 32);
    view.defPosition("c2b", 339, 300, 34, 32);
    view.defPosition("c2c", 339, 292, 34, 32);
    view.defPosition("c2d", 339, 284, 34, 32);
    view.defPosition("c2e", 339, 276, 34, 32);
    view.defPosition("c2f", 339, 268, 34, 32);
    view.defPosition("c2g", 339, 260, 34, 32);
    view.defPosition("c2h", 339, 252, 34, 32);
    view.defPosition("c2i", 339, 244, 34, 32);
    view.defPosition("c2j", 339, 236, 34, 32);
    view.defPosition("c2k", 339, 228, 34, 32);
    view.defPosition("c2l", 339, 220, 34, 32);
    view.defPosition("c2m", 339, 212, 34, 32);
    view.defPosition("c2n", 339, 204, 34, 32);
    view.defPosition("c2o", 339, 196, 34, 32);
    view.defPosition("c2p", 339, 188, 34, 32);
    view.defPosition("c2q", 339, 180, 34, 32);
    view.defPosition("b2a", 373, 308, 34, 32);
    view.defPosition("b2b", 373, 300, 34, 32);
    view.defPosition("b2c", 373, 292, 34, 32);
    view.defPosition("b2d", 373, 284, 34, 32);
    view.defPosition("b2e", 373, 276, 34, 32);
    view.defPosition("b2f", 373, 268, 34, 32);
    view.defPosition("b2g", 373, 260, 34, 32);
    view.defPosition("b2h", 373, 252, 34, 32);
    view.defPosition("b2i", 373, 244, 34, 32);
    view.defPosition("b2j", 373, 236, 34, 32);
    view.defPosition("b2k", 373, 228, 34, 32);
    view.defPosition("b2l", 373, 220, 34, 32);
    view.defPosition("b2m", 373, 212, 34, 32);
    view.defPosition("b2n", 373, 204, 34, 32);
    view.defPosition("b2o", 373, 196, 34, 32);
    view.defPosition("b2p", 373, 188, 34, 32);
    view.defPosition("b2q", 373, 180, 34, 32);
    view.defPosition("a2a", 407, 308, 34, 32);
    view.defPosition("a2b", 407, 300, 34, 32);
    view.defPosition("a2c", 407, 292, 34, 32);
    view.defPosition("a2d", 407, 284, 34, 32);
    view.defPosition("a2e", 407, 276, 34, 32);
    view.defPosition("a2f", 407, 268, 34, 32);
    view.defPosition("a2g", 407, 260, 34, 32);
    view.defPosition("a2h", 407, 252, 34, 32);
    view.defPosition("a2i", 407, 244, 34, 32);
    view.defPosition("a2j", 407, 236, 34, 32);
    view.defPosition("a2k", 407, 228, 34, 32);
    view.defPosition("a2l", 407, 220, 34, 32);
    view.defPosition("a2m", 407, 212, 34, 32);
    view.defPosition("a2n", 407, 204, 34, 32);
    view.defPosition("a2o", 407, 196, 34, 32);
    view.defPosition("a2p", 407, 188, 34, 32);
    view.defPosition("a2q", 407, 180, 34, 32);
    view.defPosition("H2a", 456, 10, 40, 32);
    view.defPosition("H2b", 456, 18, 40, 32);
    view.defPosition("H2c", 456, 26, 40, 32);
    view.defPosition("H2d", 456, 34, 40, 32);
    view.defPosition("H2e", 456, 42, 40, 32);
    view.defPosition("H2f", 456, 50, 40, 32);
    view.defPosition("H2g", 456, 58, 40, 32);
    view.defPosition("H2h", 456, 66, 40, 32);
    view.defPosition("H2i", 456, 74, 40, 32);
    view.defPosition("H2j", 456, 82, 40, 32);
    view.defPosition("H2k", 456, 90, 40, 32);
    view.defPosition("H2l", 456, 98, 40, 32);
    view.defPosition("H2m", 456, 106, 40, 32);
    view.defPosition("H2n", 456, 114, 40, 32);
    view.defPosition("H2o", 456, 122, 40, 32);
    view.defPosition("H2p", 456, 130, 40, 32);
    view.defPosition("H2q", 456, 138, 40, 32);
    view.defPosition("H1a", 456, 308, 40, 32);
    view.defPosition("H1b", 456, 300, 40, 32);
    view.defPosition("H1c", 456, 292, 40, 32);
    view.defPosition("H1d", 456, 284, 40, 32);
    view.defPosition("H1e", 456, 276, 40, 32);
    view.defPosition("H1f", 456, 268, 40, 32);
    view.defPosition("H1g", 456, 260, 40, 32);
    view.defPosition("H1h", 456, 252, 40, 32);
    view.defPosition("H1i", 456, 244, 40, 32);
    view.defPosition("H1j", 456, 236, 40, 32);
    view.defPosition("H1k", 456, 228, 40, 32);
    view.defPosition("H1l", 456, 220, 40, 32);
    view.defPosition("H1m", 456, 212, 40, 32);
    view.defPosition("H1n", 456, 204, 40, 32);
    view.defPosition("H1o", 456, 196, 40, 32);
    view.defPosition("H1p", 456, 188, 40, 32);
    view.defPosition("H1q", 456, 180, 40, 32);
    view.defPosition("B9", 210, 40, 30, 30);
    view.defPosition("B8", 210, 70, 30, 30);
    view.defPosition("B7", 210, 100, 30, 30);
    view.defPosition("B6", 210, 130, 30, 30);
    view.defPosition("B5", 210, 160, 30, 30);
    view.defPosition("B4", 210, 190, 30, 30);
    view.defPosition("B3", 210, 220, 30, 30);
    view.defPosition("B2", 210, 250, 30, 30);
    view.defPosition("B1", 210, 280, 30, 30);
    view.defPosition("D1", 77, 160, 34, 29);
    view.defPosition("D2", 111, 160, 34, 29);
    view.defPosition("D3", 305, 160, 34, 29);
    view.defPosition("D4", 339, 160, 34, 29);
}
