Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("show-captures", "false");

    design.addDirection("se"); // 0
    design.addDirection("sw"); // 1
    design.addDirection("e");  // 2
    design.addDirection("w");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("nw"); // 5

    design.addPlayer("Black", [5, 4, 3, 2, 1, 0]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5]);

    design.addTurn(2, [0]); // 0
    design.addTurn(2, [0]); // 1
    design.addTurn(2, [0]); // 2
    design.addTurn(2, [0]); // 3
    design.addTurn(2, [0]); // 4
    design.addTurn(2, [0]); // 5
    design.addTurn(2, [0]); // 6
    design.addTurn(2, [0]); // 7
    design.addTurn(2, [0]); // 8
    design.addTurn(2, [0]); // 9
    design.addTurn(2, [0]); // 10
    design.addTurn(2, [0]); // 11
    design.addTurn(2, [0]); // 12
    design.addTurn(2, [0]); // 13
    design.addTurn(2, [0]); // 14
    design.addTurn(2, [0]); // 15
    design.addTurn(2, [0]); // 16
    design.addTurn(2, [0]); // 17
    design.addTurn(2, [0]); // 18
    design.addTurn(2, [0]); // 19
    design.addTurn(2, [0]); // 20
    design.addTurn(2, [0]); // 21
    design.addTurn(2, [0]); // 22

    design.addTurn(1, [0]); // 23
    design.addTurn(1, [0]); // 24
    design.addTurn(1, [0]); // 25
    design.addTurn(1, [0]); // 26
    design.addTurn(1, [0]); // 27
    design.addTurn(1, [0]); // 28
    design.addTurn(1, [0]); // 29
    design.addTurn(1, [0]); // 30
    design.addTurn(1, [0]); // 31
    design.addTurn(1, [0]); // 32
    design.addTurn(1, [0]); // 33
    design.addTurn(1, [0]); // 34
    design.addTurn(1, [0]); // 35
    design.addTurn(1, [0]); // 36
    design.addTurn(1, [0]); // 37
    design.addTurn(1, [0]); // 38
    design.addTurn(1, [0]); // 39
    design.addTurn(1, [0]); // 40
    design.addTurn(1, [0]); // 41
    design.addTurn(1, [0]); // 42
    design.addTurn(1, [0]); // 43
    design.addTurn(1, [0]); // 44
    design.addTurn(1, [0]); // 45
    design.repeatMark();
    design.addTurn(1);      // 46
    design.addTurn(2);      // 47

    design.addPosition("A1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [13, 12, 1, 0, 0, 0]);
    design.addPosition("b1", [13, 12, 1, -1, 0, 0]);
    design.addPosition("c1", [13, 12, 1, -1, 0, 0]);
    design.addPosition("d1", [13, 12, 1, -1, 0, 0]);
    design.addPosition("e1", [13, 12, 1, -1, 0, 0]);
    design.addPosition("f1", [13, 12, 1, -1, 0, 0]);
    design.addPosition("g1", [13, 12, 1, -1, 0, 0]);
    design.addPosition("h1", [13, 12, 0, -1, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("k1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("l1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [13, 12, 1, 0, -12, 0]);
    design.addPosition("b2", [13, 12, 1, -1, -12, -13]);
    design.addPosition("c2", [13, 12, 1, -1, -12, -13]);
    design.addPosition("d2", [13, 12, 1, -1, -12, -13]);
    design.addPosition("e2", [13, 12, 1, -1, -12, -13]);
    design.addPosition("f2", [13, 12, 1, -1, -12, -13]);
    design.addPosition("g2", [13, 12, 1, -1, -12, -13]);
    design.addPosition("h2", [13, 12, 1, -1, -12, -13]);
    design.addPosition("i2", [13, 12, 0, -1, 0, -13]);
    design.addPosition("j2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("k2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("l2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [13, 12, 1, 0, -12, 0]);
    design.addPosition("b3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("c3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("d3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("e3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("f3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("g3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("h3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("i3", [13, 12, 1, -1, -12, -13]);
    design.addPosition("j3", [13, 12, 0, -1, 0, -13]);
    design.addPosition("k3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("l3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [13, 12, 1, 0, -12, 0]);
    design.addPosition("b4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("c4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("d4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("e4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("f4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("g4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("h4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("i4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("j4", [13, 12, 1, -1, -12, -13]);
    design.addPosition("k4", [13, 12, 0, -1, 0, -13]);
    design.addPosition("l4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [13, 0, 1, 0, -12, 0]);
    design.addPosition("b5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("c5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("d5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("e5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("f5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("g5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("h5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("i5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("j5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("k5", [13, 12, 1, -1, -12, -13]);
    design.addPosition("l5", [0, 12, 0, -1, 0, -13]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [13, 0, 1, 0, -12, -13]);
    design.addPosition("c6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("d6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("e6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("f6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("g6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("h6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("i6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("j6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("k6", [13, 12, 1, -1, -12, -13]);
    design.addPosition("l6", [0, 12, 0, -1, -12, -13]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [13, 0, 1, 0, -12, -13]);
    design.addPosition("d7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("e7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("f7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("g7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("h7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("i7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("j7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("k7", [13, 12, 1, -1, -12, -13]);
    design.addPosition("l7", [0, 12, 0, -1, -12, -13]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [13, 0, 1, 0, -12, -13]);
    design.addPosition("e8", [13, 12, 1, -1, -12, -13]);
    design.addPosition("f8", [13, 12, 1, -1, -12, -13]);
    design.addPosition("g8", [13, 12, 1, -1, -12, -13]);
    design.addPosition("h8", [13, 12, 1, -1, -12, -13]);
    design.addPosition("i8", [13, 12, 1, -1, -12, -13]);
    design.addPosition("j8", [13, 12, 1, -1, -12, -13]);
    design.addPosition("k8", [13, 12, 1, -1, -12, -13]);
    design.addPosition("l8", [0, 12, 0, -1, -12, -13]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 0, 1, 0, -12, -13]);
    design.addPosition("f9", [0, 0, 1, -1, -12, -13]);
    design.addPosition("g9", [0, 0, 1, -1, -12, -13]);
    design.addPosition("h9", [0, 0, 1, -1, -12, -13]);
    design.addPosition("i9", [0, 0, 1, -1, -12, -13]);
    design.addPosition("j9", [0, 0, 1, -1, -12, -13]);
    design.addPosition("k9", [0, 0, 1, -1, -12, -13]);
    design.addPosition("l9", [0, 0, 0, -1, -12, -13]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Y9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("Z9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("x9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("y9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("z9", [0, 0, 0, 0, 0, 0]);

    design.addZone("home", 2, [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 120, 121, 122, 123, 124, 125, 126, 127, 128, 108, 109, 110, 111, 112, 113, 114, 115]);
    design.addZone("home", 1, [169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 195, 196, 197, 198, 199, 200, 201, 202, 203, 208, 209, 210, 211, 212, 213, 214, 215]);
    design.addZone("trone", 2, [122, 124, 126]);
    design.addZone("trone", 1, [197, 199, 201]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	10);	// Rock
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	10);	// Rock
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.LITERAL,	10);	// Rock
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	10);	// Rock
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	10);	// Rock
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.LITERAL,	10);	// Rock
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.LITERAL,	10);	// Rock
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.LITERAL,	10);	// Rock
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	26);	// capture
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	10);	// Rock
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	10);	// Rock
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.LITERAL,	10);	// Rock
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	26);	// capture
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.LITERAL,	10);	// Rock
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.LITERAL,	10);	// Rock
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.LITERAL,	10);	// Rock
    design.addCommand(9, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	2);	// $3
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.PARAM,	3);	// $4
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.LITERAL,	10);	// Rock
    design.addCommand(10, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 1);
    design.addMove(0, 0, [5], 1);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 0, [1], 1);
    design.addMove(0, 0, [0], 1);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [2], 1);
    design.addMove(0, 1, [5], 2 + 5);
    design.addMove(0, 1, [4], 2 + 4);
    design.addMove(0, 1, [1], 2 + 1);
    design.addMove(0, 1, [0], 2 + 0);
    design.addMove(0, 1, [3], 2 + 3);
    design.addMove(0, 1, [2], 2 + 2);

    design.addPiece("Rabble", 1, 1);
    design.addMove(1, 0, [5], 1);
    design.addMove(1, 0, [4], 1);
    design.addMove(1, 0, [1], 1);
    design.addMove(1, 0, [0], 1);
    design.addMove(1, 0, [3], 1);
    design.addMove(1, 0, [2], 1);
    design.addMove(1, 1, [5], 2 + 5);
    design.addMove(1, 1, [4], 2 + 4);
    design.addMove(1, 1, [1], 2 + 1);
    design.addMove(1, 1, [0], 2 + 0);
    design.addMove(1, 1, [3], 2 +3);
    design.addMove(1, 1, [2], 2 + 2);

    design.addPiece("Spears", 2, 1);
    design.addMove(2, 0, [5], 1);
    design.addMove(2, 0, [4], 1);
    design.addMove(2, 0, [0], 1);
    design.addMove(2, 0, [1], 1);
    design.addMove(2, 1, [0], 2 + 0);
    design.addMove(2, 1, [1], 2 + 1);
    design.addMove(2, 1, [5], 2 + 5);
    design.addMove(2, 1, [4], 2 + 4);

    design.addPiece("LightHorse", 3, 1);
    design.addMove(3, 1, [5], 2 + 5);
    design.addMove(3, 1, [4], 2 + 4);
    design.addMove(3, 1, [1], 2 + 1);
    design.addMove(3, 1, [0], 2 + 0);
    design.addMove(3, 1, [3], 2 + 3);
    design.addMove(3, 1, [2], 2 + 2);
    design.addMove(3, 2, [5, 5], 2 + 5);
    design.addMove(3, 2, [4, 4], 2 + 4);
    design.addMove(3, 2, [1, 1], 2 + 1);
    design.addMove(3, 2, [0, 0], 2 + 0);
    design.addMove(3, 2, [3, 3], 2 + 3);
    design.addMove(3, 2, [2, 2], 2 + 2);
    design.addMove(3, 3, [5, 5, 5], 2 + 5);
    design.addMove(3, 3, [4, 4, 4], 2 + 4);
    design.addMove(3, 3, [1, 1, 1], 2 + 1);
    design.addMove(3, 3, [0, 0, 0], 2 + 0);
    design.addMove(3, 3, [3, 3, 3], 2 + 3);
    design.addMove(3, 3, [2, 2, 2], 2 + 2);
    design.addMove(3, 4, [5, 5], 2 + 5);
    design.addMove(3, 4, [4, 4], 2 + 4);
    design.addMove(3, 4, [1, 1], 2 + 1);
    design.addMove(3, 4, [0, 0], 2 + 0);
    design.addMove(3, 4, [3, 3], 2 + 3);
    design.addMove(3, 4, [2, 2], 2 + 2);
    design.addMove(3, 5, [5, 5, 5], 2 + 5);
    design.addMove(3, 5, [4, 4, 4], 2 + 4);
    design.addMove(3, 5, [1, 1, 1], 2 + 1);
    design.addMove(3, 5, [0, 0, 0], 2 + 0);
    design.addMove(3, 5, [3, 3, 3], 2 + 3);
    design.addMove(3, 5, [2, 2, 2], 2 + 2);
    design.addMove(3, 6, [5, 5, 5], 2 + 5);
    design.addMove(3, 6, [4, 4, 4], 2 + 4);
    design.addMove(3, 6, [1, 1, 1], 2 + 1);
    design.addMove(3, 6, [0, 0, 0], 2 + 0);
    design.addMove(3, 6, [3, 3, 3], 2 + 3);
    design.addMove(3, 6, [2, 2, 2], 2 + 2);

    design.addPiece("HeavyHorse", 4, 2);
    design.addMove(4, 1, [5], 2 + 5);
    design.addMove(4, 1, [4], 2 + 4);
    design.addMove(4, 1, [1], 2 + 1);
    design.addMove(4, 1, [0], 2 + 0);
    design.addMove(4, 1, [3], 2 + 3);
    design.addMove(4, 1, [2], 2 + 2);
    design.addMove(4, 2, [5, 5], 2 + 5);
    design.addMove(4, 2, [4, 4], 2 + 4);
    design.addMove(4, 2, [1, 1], 2 + 1);
    design.addMove(4, 2, [0, 0], 2 + 0);
    design.addMove(4, 2, [3, 3], 2 + 3);
    design.addMove(4, 2, [2, 2], 2 + 2);
    design.addMove(4, 4, [5, 5], 2 + 5);
    design.addMove(4, 4, [4, 4], 2 + 4);
    design.addMove(4, 4, [1, 1], 2 + 1);
    design.addMove(4, 4, [0, 0], 2 + 0);
    design.addMove(4, 4, [3, 3], 2 + 3);
    design.addMove(4, 4, [2, 2], 2 + 2);

    design.addPiece("Elephant", 5, 2);
    design.addMove(5, 0, [5], 1);
    design.addMove(5, 0, [4], 1);
    design.addMove(5, 0, [1], 1);
    design.addMove(5, 0, [0], 1);
    design.addMove(5, 0, [3], 1);
    design.addMove(5, 0, [2], 1);
    design.addMove(5, 1, [5], 2 + 5);
    design.addMove(5, 1, [4], 2 + 4);
    design.addMove(5, 1, [1], 2 + 1);
    design.addMove(5, 1, [0], 2 + 0);
    design.addMove(5, 1, [3], 2 + 3);
    design.addMove(5, 1, [2], 2 + 2);
    design.addMove(5, 7, [5, 5], 2 + 5);
    design.addMove(5, 7, [4, 4], 2 + 4);
    design.addMove(5, 7, [1, 1], 2 + 1);
    design.addMove(5, 7, [0, 0], 2 + 0);
    design.addMove(5, 7, [3, 3], 2 + 3);
    design.addMove(5, 7, [2, 2], 2 + 2);

    design.addPiece("Crossbow", 6, 0);

    design.addPiece("Trebuchet", 7, 0);
    design.addMove(7, 0, [5], 1);
    design.addMove(7, 0, [4], 1);
    design.addMove(7, 0, [1], 1);
    design.addMove(7, 0, [0], 1);
    design.addMove(7, 0, [3], 1);
    design.addMove(7, 0, [2], 1);
    design.addMove(7, 8, [5, 5], 2 + 5);
    design.addMove(7, 8, [4, 4], 2 + 4);
    design.addMove(7, 8, [1, 1], 2 + 1);
    design.addMove(7, 8, [0, 0], 2 + 0);
    design.addMove(7, 8, [3, 3], 2 + 3);
    design.addMove(7, 8, [2, 2], 2 + 2);
    design.addMove(7, 9, [5, 5, 5], 2 + 5);
    design.addMove(7, 9, [4, 4, 4], 2 + 4);
    design.addMove(7, 9, [1, 1, 1], 2 + 1);
    design.addMove(7, 9, [0, 0, 0], 2 + 0);
    design.addMove(7, 9, [3, 3, 3], 2 + 3);
    design.addMove(7, 9, [2, 2, 2], 2 + 2);
    design.addMove(7, 10, [5, 5, 5, 5], 2 + 5);
    design.addMove(7, 10, [4, 4, 4, 4], 2 + 4);
    design.addMove(7, 10, [1, 1, 1, 1], 2 + 1);
    design.addMove(7, 10, [0, 0, 0, 0], 2 + 0);
    design.addMove(7, 10, [3, 3, 3, 3], 2 + 3);
    design.addMove(7, 10, [2, 2, 2, 2], 2 + 2);

    design.addPiece("Dragon", 8, 2);
    design.addMove(8, 1, [5], 2 + 5);
    design.addMove(8, 1, [4], 2 + 4);
    design.addMove(8, 1, [1], 2 + 1);
    design.addMove(8, 1, [0], 2 + 0);
    design.addMove(8, 1, [3], 2 + 3);
    design.addMove(8, 1, [2], 2 + 2);
    design.addMove(8, 8, [5, 5], 2 + 5);
    design.addMove(8, 8, [4, 4], 2 + 4);
    design.addMove(8, 8, [1, 1], 2 + 1);
    design.addMove(8, 8, [0, 0], 2 + 0);
    design.addMove(8, 8, [3, 3], 2 + 3);
    design.addMove(8, 8, [2, 2], 2 + 2);
    design.addMove(8, 9, [5, 5, 5], 2 + 5);
    design.addMove(8, 9, [4, 4, 4], 2 + 4);
    design.addMove(8, 9, [1, 1, 1], 2 + 1);
    design.addMove(8, 9, [0, 0, 0], 2 + 0);
    design.addMove(8, 9, [3, 3, 3], 2 + 3);
    design.addMove(8, 9, [2, 2, 2], 2 + 2);
    design.addMove(8, 10, [5, 5, 5, 5], 2 + 5);
    design.addMove(8, 10, [4, 4, 4, 4], 2 + 4);
    design.addMove(8, 10, [1, 1, 1, 1], 2 + 1);
    design.addMove(8, 10, [0, 0, 0, 0], 2 + 0);
    design.addMove(8, 10, [3, 3, 3, 3], 2 + 3);
    design.addMove(8, 10, [2, 2, 2, 2], 2 + 2);

    design.addPiece("Tower", 9, 2);
    design.addPiece("Rock", 10);
    design.addPiece("Water", 11);
    design.addPiece("Empty", 12);

    design.setup("White", "Rock", 111);
    design.setup("White", "Rock", 125);
    design.setup("White", "Rock", 134);
    design.setup("White", "Rock", 138);
    design.setup("White", "Water", 39);
    design.setup("White", "Water", 40);
    design.setup("White", "Water", 31);
    design.setup("White", "Water", 13);
    design.setup("White", "King", 242);
    design.setup("White", "Tower", 239);
    design.setup("White", "Tower", 236);
    design.setup("White", "Rabble", 233);
    design.setup("White", "Rabble", 230);
    design.setup("White", "Rabble", 227);
    design.setup("White", "Rabble", 224);
    design.setup("White", "Rabble", 221);
    design.setup("White", "Rabble", 218);
    design.setup("White", "Spears", 241);
    design.setup("White", "Spears", 238);
    design.setup("White", "Spears", 235);
    design.setup("White", "LightHorse", 232);
    design.setup("White", "LightHorse", 229);
    design.setup("White", "LightHorse", 226);
    design.setup("White", "HeavyHorse", 223);
    design.setup("White", "HeavyHorse", 220);
    design.setup("White", "Trebuchet", 217);
    design.setup("White", "Elephant", 240);
    design.setup("White", "Elephant", 237);
    design.setup("White", "Crossbow", 234);
    design.setup("White", "Crossbow", 231);
    design.setup("White", "Dragon", 228);
    design.setup("Black", "Rock", 169);
    design.setup("Black", "Rock", 183);
    design.setup("Black", "Rock", 197);
    design.setup("Black", "Rock", 203);
    design.setup("Black", "Water", 64);
    design.setup("Black", "Water", 68);
    design.setup("Black", "Water", 92);
    design.setup("Black", "King", 243);
    design.setup("Black", "Tower", 246);
    design.setup("Black", "Tower", 249);
    design.setup("Black", "Rabble", 252);
    design.setup("Black", "Rabble", 255);
    design.setup("Black", "Rabble", 258);
    design.setup("Black", "Rabble", 261);
    design.setup("Black", "Rabble", 264);
    design.setup("Black", "Rabble", 267);
    design.setup("Black", "Spears", 244);
    design.setup("Black", "Spears", 247);
    design.setup("Black", "Spears", 250);
    design.setup("Black", "LightHorse", 253);
    design.setup("Black", "LightHorse", 256);
    design.setup("Black", "LightHorse", 259);
    design.setup("Black", "HeavyHorse", 262);
    design.setup("Black", "HeavyHorse", 265);
    design.setup("Black", "Trebuchet", 268);
    design.setup("Black", "Elephant", 245);
    design.setup("Black", "Elephant", 248);
    design.setup("Black", "Crossbow", 251);
    design.setup("Black", "Crossbow", 254);
    design.setup("Black", "Dragon", 257);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteRabble", "White Rabble");
    view.defPiece("BlackRabble", "Black Rabble");
    view.defPiece("WhiteSpears", "White Spears");
    view.defPiece("BlackSpears", "Black Spears");
    view.defPiece("WhiteLightHorse", "White LightHorse");
    view.defPiece("BlackLightHorse", "Black LightHorse");
    view.defPiece("WhiteHeavyHorse", "White HeavyHorse");
    view.defPiece("BlackHeavyHorse", "Black HeavyHorse");
    view.defPiece("WhiteElephant", "White Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("WhiteCrossbow", "White Crossbow");
    view.defPiece("BlackCrossbow", "Black Crossbow");
    view.defPiece("WhiteTrebuchet", "White Trebuchet");
    view.defPiece("BlackTrebuchet", "Black Trebuchet");
    view.defPiece("WhiteDragon", "White Dragon");
    view.defPiece("BlackDragon", "Black Dragon");
    view.defPiece("WhiteTower", "White Tower");
    view.defPiece("BlackTower", "Black Tower");
    view.defPiece("WhiteRock", "White Rock");
    view.defPiece("BlackRock", "Black Rock");
    view.defPiece("WhiteWater", "White Water");
    view.defPiece("BlackWater", "Black Water");
    view.defPiece("WhiteEmpty", "White Empty");
    view.defPiece("BlackEmpty", "Black Empty");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("A1", 280, 9, 50, 50);
    view.defPosition("B1", 330, 9, 50, 50);
    view.defPosition("C1", 380, 9, 50, 50);
    view.defPosition("D1", 430, 9, 50, 50);
    view.defPosition("E1", 480, 9, 50, 50);
    view.defPosition("F1", 530, 9, 50, 50);
    view.defPosition("G1", 580, 9, 50, 50);
    view.defPosition("H1", 630, 9, 50, 50);
    view.defPosition("I1", 680, 9, 50, 50);
    view.defPosition("J1", 730, 9, 50, 50);
    view.defPosition("K1", 780, 9, 50, 50);
    view.defPosition("L1", 830, 9, 50, 50);
    view.defPosition("A2", 255, 59, 50, 50);
    view.defPosition("B2", 305, 59, 50, 50);
    view.defPosition("C2", 355, 59, 50, 50);
    view.defPosition("D2", 405, 59, 50, 50);
    view.defPosition("E2", 455, 59, 50, 50);
    view.defPosition("F2", 505, 59, 50, 50);
    view.defPosition("G2", 555, 59, 50, 50);
    view.defPosition("H2", 605, 59, 50, 50);
    view.defPosition("I2", 655, 59, 50, 50);
    view.defPosition("J2", 705, 59, 50, 50);
    view.defPosition("K2", 755, 59, 50, 50);
    view.defPosition("L2", 805, 59, 50, 50);
    view.defPosition("A3", 230, 109, 50, 50);
    view.defPosition("B3", 280, 109, 50, 50);
    view.defPosition("C3", 330, 109, 50, 50);
    view.defPosition("D3", 380, 109, 50, 50);
    view.defPosition("E3", 430, 109, 50, 50);
    view.defPosition("F3", 480, 109, 50, 50);
    view.defPosition("G3", 530, 109, 50, 50);
    view.defPosition("H3", 580, 109, 50, 50);
    view.defPosition("I3", 630, 109, 50, 50);
    view.defPosition("J3", 680, 109, 50, 50);
    view.defPosition("K3", 730, 109, 50, 50);
    view.defPosition("L3", 780, 109, 50, 50);
    view.defPosition("A4", 205, 159, 50, 50);
    view.defPosition("B4", 255, 159, 50, 50);
    view.defPosition("C4", 305, 159, 50, 50);
    view.defPosition("D4", 355, 159, 50, 50);
    view.defPosition("E4", 405, 159, 50, 50);
    view.defPosition("F4", 455, 159, 50, 50);
    view.defPosition("G4", 505, 159, 50, 50);
    view.defPosition("H4", 555, 159, 50, 50);
    view.defPosition("I4", 605, 159, 50, 50);
    view.defPosition("J4", 655, 159, 50, 50);
    view.defPosition("K4", 705, 159, 50, 50);
    view.defPosition("L4", 755, 159, 50, 50);
    view.defPosition("A5", 180, 209, 50, 50);
    view.defPosition("B5", 230, 209, 50, 50);
    view.defPosition("C5", 280, 209, 50, 50);
    view.defPosition("D5", 330, 209, 50, 50);
    view.defPosition("E5", 380, 209, 50, 50);
    view.defPosition("F5", 430, 209, 50, 50);
    view.defPosition("G5", 480, 209, 50, 50);
    view.defPosition("H5", 530, 209, 50, 50);
    view.defPosition("I5", 580, 209, 50, 50);
    view.defPosition("J5", 630, 209, 50, 50);
    view.defPosition("K5", 680, 209, 50, 50);
    view.defPosition("L5", 730, 209, 50, 50);
    view.defPosition("A6", 155, 259, 50, 50);
    view.defPosition("B6", 205, 259, 50, 50);
    view.defPosition("C6", 255, 259, 50, 50);
    view.defPosition("D6", 305, 259, 50, 50);
    view.defPosition("E6", 355, 259, 50, 50);
    view.defPosition("F6", 405, 259, 50, 50);
    view.defPosition("G6", 455, 259, 50, 50);
    view.defPosition("H6", 505, 259, 50, 50);
    view.defPosition("I6", 555, 259, 50, 50);
    view.defPosition("J6", 605, 259, 50, 50);
    view.defPosition("K6", 655, 259, 50, 50);
    view.defPosition("L6", 705, 259, 50, 50);
    view.defPosition("A7", 130, 309, 50, 50);
    view.defPosition("B7", 180, 309, 50, 50);
    view.defPosition("C7", 230, 309, 50, 50);
    view.defPosition("D7", 280, 309, 50, 50);
    view.defPosition("E7", 330, 309, 50, 50);
    view.defPosition("F7", 380, 309, 50, 50);
    view.defPosition("G7", 430, 309, 50, 50);
    view.defPosition("H7", 480, 309, 50, 50);
    view.defPosition("I7", 530, 309, 50, 50);
    view.defPosition("J7", 580, 309, 50, 50);
    view.defPosition("K7", 630, 309, 50, 50);
    view.defPosition("L7", 680, 309, 50, 50);
    view.defPosition("A8", 105, 359, 50, 50);
    view.defPosition("B8", 155, 359, 50, 50);
    view.defPosition("C8", 205, 359, 50, 50);
    view.defPosition("D8", 255, 359, 50, 50);
    view.defPosition("E8", 305, 359, 50, 50);
    view.defPosition("F8", 355, 359, 50, 50);
    view.defPosition("G8", 405, 359, 50, 50);
    view.defPosition("H8", 455, 359, 50, 50);
    view.defPosition("I8", 505, 359, 50, 50);
    view.defPosition("J8", 555, 359, 50, 50);
    view.defPosition("K8", 605, 359, 50, 50);
    view.defPosition("L8", 655, 359, 50, 50);
    view.defPosition("A9", 80, 409, 50, 50);
    view.defPosition("B9", 130, 409, 50, 50);
    view.defPosition("C9", 180, 409, 50, 50);
    view.defPosition("D9", 230, 409, 50, 50);
    view.defPosition("E9", 280, 409, 50, 50);
    view.defPosition("F9", 330, 409, 50, 50);
    view.defPosition("G9", 380, 409, 50, 50);
    view.defPosition("H9", 430, 409, 50, 50);
    view.defPosition("I9", 480, 409, 50, 50);
    view.defPosition("J9", 530, 409, 50, 50);
    view.defPosition("K9", 580, 409, 50, 50);
    view.defPosition("L9", 630, 409, 50, 50);
    view.defPosition("a1", 280, 9, 50, 50);
    view.defPosition("b1", 330, 9, 50, 50);
    view.defPosition("c1", 380, 9, 50, 50);
    view.defPosition("d1", 430, 9, 50, 50);
    view.defPosition("e1", 480, 9, 50, 50);
    view.defPosition("f1", 530, 9, 50, 50);
    view.defPosition("g1", 580, 9, 50, 50);
    view.defPosition("h1", 630, 9, 50, 50);
    view.defPosition("i1", 680, 9, 50, 50);
    view.defPosition("j1", 730, 9, 50, 50);
    view.defPosition("k1", 780, 9, 50, 50);
    view.defPosition("l1", 830, 9, 50, 50);
    view.defPosition("a2", 255, 59, 50, 50);
    view.defPosition("b2", 305, 59, 50, 50);
    view.defPosition("c2", 355, 59, 50, 50);
    view.defPosition("d2", 405, 59, 50, 50);
    view.defPosition("e2", 455, 59, 50, 50);
    view.defPosition("f2", 505, 59, 50, 50);
    view.defPosition("g2", 555, 59, 50, 50);
    view.defPosition("h2", 605, 59, 50, 50);
    view.defPosition("i2", 655, 59, 50, 50);
    view.defPosition("j2", 705, 59, 50, 50);
    view.defPosition("k2", 755, 59, 50, 50);
    view.defPosition("l2", 805, 59, 50, 50);
    view.defPosition("a3", 230, 109, 50, 50);
    view.defPosition("b3", 280, 109, 50, 50);
    view.defPosition("c3", 330, 109, 50, 50);
    view.defPosition("d3", 380, 109, 50, 50);
    view.defPosition("e3", 430, 109, 50, 50);
    view.defPosition("f3", 480, 109, 50, 50);
    view.defPosition("g3", 530, 109, 50, 50);
    view.defPosition("h3", 580, 109, 50, 50);
    view.defPosition("i3", 630, 109, 50, 50);
    view.defPosition("j3", 680, 109, 50, 50);
    view.defPosition("k3", 730, 109, 50, 50);
    view.defPosition("l3", 780, 109, 50, 50);
    view.defPosition("a4", 205, 159, 50, 50);
    view.defPosition("b4", 255, 159, 50, 50);
    view.defPosition("c4", 305, 159, 50, 50);
    view.defPosition("d4", 355, 159, 50, 50);
    view.defPosition("e4", 405, 159, 50, 50);
    view.defPosition("f4", 455, 159, 50, 50);
    view.defPosition("g4", 505, 159, 50, 50);
    view.defPosition("h4", 555, 159, 50, 50);
    view.defPosition("i4", 605, 159, 50, 50);
    view.defPosition("j4", 655, 159, 50, 50);
    view.defPosition("k4", 705, 159, 50, 50);
    view.defPosition("l4", 755, 159, 50, 50);
    view.defPosition("a5", 180, 209, 50, 50);
    view.defPosition("b5", 230, 209, 50, 50);
    view.defPosition("c5", 280, 209, 50, 50);
    view.defPosition("d5", 330, 209, 50, 50);
    view.defPosition("e5", 380, 209, 50, 50);
    view.defPosition("f5", 430, 209, 50, 50);
    view.defPosition("g5", 480, 209, 50, 50);
    view.defPosition("h5", 530, 209, 50, 50);
    view.defPosition("i5", 580, 209, 50, 50);
    view.defPosition("j5", 630, 209, 50, 50);
    view.defPosition("k5", 680, 209, 50, 50);
    view.defPosition("l5", 730, 209, 50, 50);
    view.defPosition("a6", 155, 259, 50, 50);
    view.defPosition("b6", 205, 259, 50, 50);
    view.defPosition("c6", 255, 259, 50, 50);
    view.defPosition("d6", 305, 259, 50, 50);
    view.defPosition("e6", 355, 259, 50, 50);
    view.defPosition("f6", 405, 259, 50, 50);
    view.defPosition("g6", 455, 259, 50, 50);
    view.defPosition("h6", 505, 259, 50, 50);
    view.defPosition("i6", 555, 259, 50, 50);
    view.defPosition("j6", 605, 259, 50, 50);
    view.defPosition("k6", 655, 259, 50, 50);
    view.defPosition("l6", 705, 259, 50, 50);
    view.defPosition("a7", 130, 309, 50, 50);
    view.defPosition("b7", 180, 309, 50, 50);
    view.defPosition("c7", 230, 309, 50, 50);
    view.defPosition("d7", 280, 309, 50, 50);
    view.defPosition("e7", 330, 309, 50, 50);
    view.defPosition("f7", 380, 309, 50, 50);
    view.defPosition("g7", 430, 309, 50, 50);
    view.defPosition("h7", 480, 309, 50, 50);
    view.defPosition("i7", 530, 309, 50, 50);
    view.defPosition("j7", 580, 309, 50, 50);
    view.defPosition("k7", 630, 309, 50, 50);
    view.defPosition("l7", 680, 309, 50, 50);
    view.defPosition("a8", 105, 359, 50, 50);
    view.defPosition("b8", 155, 359, 50, 50);
    view.defPosition("c8", 205, 359, 50, 50);
    view.defPosition("d8", 255, 359, 50, 50);
    view.defPosition("e8", 305, 359, 50, 50);
    view.defPosition("f8", 355, 359, 50, 50);
    view.defPosition("g8", 405, 359, 50, 50);
    view.defPosition("h8", 455, 359, 50, 50);
    view.defPosition("i8", 505, 359, 50, 50);
    view.defPosition("j8", 555, 359, 50, 50);
    view.defPosition("k8", 605, 359, 50, 50);
    view.defPosition("l8", 655, 359, 50, 50);
    view.defPosition("a9", 80, 409, 50, 50);
    view.defPosition("b9", 130, 409, 50, 50);
    view.defPosition("c9", 180, 409, 50, 50);
    view.defPosition("d9", 230, 409, 50, 50);
    view.defPosition("e9", 280, 409, 50, 50);
    view.defPosition("f9", 330, 409, 50, 50);
    view.defPosition("g9", 380, 409, 50, 50);
    view.defPosition("h9", 430, 409, 50, 50);
    view.defPosition("i9", 480, 409, 50, 50);
    view.defPosition("j9", 530, 409, 50, 50);
    view.defPosition("k9", 580, 409, 50, 50);
    view.defPosition("l9", 630, 409, 50, 50);
    view.defPosition("X1", 10, 9, 50, 50);
    view.defPosition("Y1", 60, 9, 50, 50);
    view.defPosition("Z1", 110, 9, 50, 50);
    view.defPosition("X2", 10, 59, 50, 50);
    view.defPosition("Y2", 60, 59, 50, 50);
    view.defPosition("Z2", 110, 59, 50, 50);
    view.defPosition("X3", 10, 109, 50, 50);
    view.defPosition("Y3", 60, 109, 50, 50);
    view.defPosition("Z3", 110, 109, 50, 50);
    view.defPosition("X4", 10, 159, 50, 50);
    view.defPosition("Y4", 60, 159, 50, 50);
    view.defPosition("Z4", 110, 159, 50, 50);
    view.defPosition("X5", 10, 209, 50, 50);
    view.defPosition("Y5", 60, 209, 50, 50);
    view.defPosition("Z5", 110, 209, 50, 50);
    view.defPosition("X6", 10, 259, 50, 50);
    view.defPosition("Y6", 60, 259, 50, 50);
    view.defPosition("Z6", 110, 259, 50, 50);
    view.defPosition("X7", 10, 309, 50, 50);
    view.defPosition("Y7", 60, 309, 50, 50);
    view.defPosition("Z7", 110, 309, 50, 50);
    view.defPosition("X8", 10, 359, 50, 50);
    view.defPosition("Y8", 60, 359, 50, 50);
    view.defPosition("Z8", 110, 359, 50, 50);
    view.defPosition("X9", 10, 409, 50, 50);
    view.defPosition("Y9", 60, 409, 50, 50);
    view.defPosition("Z9", 110, 409, 50, 50);
    view.defPosition("x1", 807, 9, 50, 50);
    view.defPosition("y1", 857, 9, 50, 50);
    view.defPosition("z1", 907, 9, 50, 50);
    view.defPosition("x2", 807, 59, 50, 50);
    view.defPosition("y2", 857, 59, 50, 50);
    view.defPosition("z2", 907, 59, 50, 50);
    view.defPosition("x3", 807, 109, 50, 50);
    view.defPosition("y3", 857, 109, 50, 50);
    view.defPosition("z3", 907, 109, 50, 50);
    view.defPosition("x4", 807, 159, 50, 50);
    view.defPosition("y4", 857, 159, 50, 50);
    view.defPosition("z4", 907, 159, 50, 50);
    view.defPosition("x5", 807, 209, 50, 50);
    view.defPosition("y5", 857, 209, 50, 50);
    view.defPosition("z5", 907, 209, 50, 50);
    view.defPosition("x6", 807, 259, 50, 50);
    view.defPosition("y6", 857, 259, 50, 50);
    view.defPosition("z6", 907, 259, 50, 50);
    view.defPosition("x7", 807, 309, 50, 50);
    view.defPosition("y7", 857, 309, 50, 50);
    view.defPosition("z7", 907, 309, 50, 50);
    view.defPosition("x8", 807, 359, 50, 50);
    view.defPosition("y8", 857, 359, 50, 50);
    view.defPosition("z8", 907, 359, 50, 50);
    view.defPosition("x9", 807, 409, 50, 50);
    view.defPosition("y9", 857, 409, 50, 50);
    view.defPosition("z9", 907, 409, 50, 50);
}
