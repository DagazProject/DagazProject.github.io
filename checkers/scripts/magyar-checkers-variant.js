Dagaz.Controller.persistense = "session";

Dagaz.Model.WIDTH  = 15;
Dagaz.Model.HEIGHT = 9;

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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/wind.wav");
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("drag-n-drop", "false");
    design.checkVersion("progressive-levels", "silent");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("magyar-invariant", "true");
    design.checkVersion("magyar-extension", "true");
    design.checkVersion("magyar-tiles", "true");
    design.checkVersion("magyar-goal", "true");
    design.checkVersion("magyar-ko", "true");
    design.checkVersion("magyar-view", "true");

    design.addDirection("nx");
    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("sw");

    design.addPlayer("Red", [0, 2, 1, 6, 5, 4, 3]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6]);
    design.addPlayer("N", [0, 1, 2, 3, 4, 5, 6]);
    design.addTurn(1);
    design.addTurn(2);

    design.addPosition("A9", [31, 0, 1, 0, 16, 0, 0]);
    design.addPosition("B9", [61, -1, 1, 0, 16, 0, 15]);
    design.addPosition("C9", [91, -1, 1, 0, 16, 0, 15]);
    design.addPosition("D9", [121, -1, 1, 0, 16, 0, 15]);
    design.addPosition("E9", [121, -1, 1, 0, 16, 0, 15]);
    design.addPosition("F9", [121, -1, 1, 0, 16, 0, 15]);
    design.addPosition("G9", [121, -1, 1, 0, 16, 0, 15]);
    design.addPosition("H9", [121, -1, 1, 0, 16, 0, 15]);
    design.addPosition("I9", [121, -1, 1, 0, 16, 0, 15]);
    design.addPosition("J9", [121, -1, 1, 0, 16, 0, 15]);
    design.addPosition("K9", [121, -1, 0, 0, 0, 0, 15]);
    design.addPosition("L9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("M9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("N9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("O9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B8", [-15, 0, 1, -15, 16, -16, 15]);
    design.addPosition("C8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("D8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("E8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("F8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("G8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("H8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("I8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("J8", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("K8", [-15, -1, 0, -15, 16, -16, 15]);
    design.addPosition("L8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("M8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("N8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("O8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B7", [-15, 0, 1, -15, 16, 0, 0]);
    design.addPosition("C7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("D7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("E7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("F7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("G7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("H7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("I7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("J7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("K7", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("L7", [91, -1, 0, 0, 0, -16, 15]);
    design.addPosition("M7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("N7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("O7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C6", [-15, 0, 1, -15, 16, -16, 15]);
    design.addPosition("D6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("E6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("F6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("G6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("H6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("I6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("J6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("K6", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("L6", [-15, -1, 0, -15, 16, -16, 15]);
    design.addPosition("M6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("N6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("O6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C5", [-15, 0, 1, -15, 16, 0, 0]);
    design.addPosition("D5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("E5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("F5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("G5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("H5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("I5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("J5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("K5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("L5", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("M5", [61, -1, 0, 0, 0, -16, 15]);
    design.addPosition("N5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("O5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [-15, 0, 1, -15, 16, -16, 15]);
    design.addPosition("E4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("F4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("G4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("H4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("I4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("J4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("K4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("L4", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("M4", [-15, -1, 0, -15, 16, -16, 15]);
    design.addPosition("N4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("O4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [-15, 0, 1, -15, 16, 0, 0]);
    design.addPosition("E3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("F3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("G3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("H3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("I3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("J3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("K3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("L3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("M3", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("N3", [31, -1, 0, 0, 0, -16, 15]);
    design.addPosition("O3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E2", [-15, 0, 1, -15, 16, -16, 15]);
    design.addPosition("F2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("G2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("H2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("I2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("J2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("K2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("L2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("M2", [-15, -1, 1, -15, 16, -16, 15]);
    design.addPosition("N2", [-15, -1, 0, -15, 16, -16, 15]);
    design.addPosition("O2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E1", [-15, 0, 1, -15, 0, 0, 0]);
    design.addPosition("F1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("G1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("H1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("I1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("J1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("K1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("L1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("M1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("N1", [-15, -1, 1, -15, 0, -16, 0]);
    design.addPosition("O1", [0, -1, 0, 0, 0, -16, 0]);
    design.addPosition("a9", [0, 0, 1, 0, 16, 0, 0]);
    design.addPosition("b9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("c9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("d9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("e9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("f9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("g9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("h9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("i9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("j9", [0, -1, 1, 0, 16, 0, 15]);
    design.addPosition("k9", [0, -1, 0, 0, 0, 0, 15]);
    design.addPosition("l9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o9", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 0, 1, -15, 16, -16, 15]);
    design.addPosition("c8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("d8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("e8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("f8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("g8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("h8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("i8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("j8", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("k8", [0, -1, 0, -15, 16, -16, 15]);
    design.addPosition("l8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("m8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o8", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 1, -15, 16, 0, 0]);
    design.addPosition("c7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("d7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("e7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("f7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("g7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("h7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("i7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("j7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("k7", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("l7", [0, -1, 0, 0, 0, -16, 15]);
    design.addPosition("m7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o7", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [0, 0, 1, -15, 16, -16, 15]);
    design.addPosition("d6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("e6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("f6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("g6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("h6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("i6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("j6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("k6", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("l6", [0, -1, 0, -15, 16, -16, 15]);
    design.addPosition("m6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("n6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o6", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 0, 1, -15, 16, 0, 0]);
    design.addPosition("d5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("e5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("f5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("g5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("h5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("i5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("j5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("k5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("l5", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("m5", [0, -1, 0, 0, 0, -16, 15]);
    design.addPosition("n5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o5", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 0, 1, -15, 16, -16, 15]);
    design.addPosition("e4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("f4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("g4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("h4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("i4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("j4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("k4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("l4", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("m4", [0, -1, 0, -15, 16, -16, 15]);
    design.addPosition("n4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("o4", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d3", [0, 0, 1, -15, 16, 0, 0]);
    design.addPosition("e3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("f3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("g3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("h3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("i3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("j3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("k3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("l3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("m3", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("n3", [0, -1, 0, 0, 0, -16, 15]);
    design.addPosition("o3", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 1, -15, 16, -16, 15]);
    design.addPosition("f2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("g2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("h2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("i2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("j2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("k2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("l2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("m2", [0, -1, 1, -15, 16, -16, 15]);
    design.addPosition("n2", [0, -1, 0, -15, 16, -16, 15]);
    design.addPosition("o2", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 1, -15, 0, 0, 0]);
    design.addPosition("f1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("g1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("h1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("i1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("j1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("k1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("l1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("m1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("n1", [0, -1, 1, -15, 0, -16, 0]);
    design.addPosition("o1", [0, -1, 0, 0, 0, -16, 0]);

    design.addZone("north-1", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addZone("north-1", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addZone("north-2", 2, [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);
    design.addZone("north-2", 1, [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]);
    design.addZone("south-1", 2, [124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134]);
    design.addZone("south-1", 1, [124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134]);
    design.addZone("south-2", 2, [93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]);
    design.addZone("south-2", 1, [93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103]);
    design.addZone("west-1", 2, [0, 16, 31, 47, 62, 78, 93, 109, 124]);
    design.addZone("west-1", 1, [0, 16, 31, 47, 62, 78, 93, 109, 124]);
    design.addZone("west-2", 2, [1, 17, 32, 48, 63, 79, 94, 110, 125]);
    design.addZone("west-2", 1, [1, 17, 32, 48, 63, 79, 94, 110, 125]);
    design.addZone("east-1", 2, [10, 25, 41, 56, 72, 87, 103, 118, 134]);
    design.addZone("east-1", 1, [10, 25, 41, 56, 72, 87, 103, 118, 134]);
    design.addZone("east-2", 2, [9, 24, 40, 55, 71, 86, 102, 117, 133]);
    design.addZone("east-2", 1, [9, 24, 40, 55, 71, 86, 102, 117, 133]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	21);	// position
    design.addCommand(0, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	10);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-11);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Tile", 0);
    design.addMove(0, 0, [0, 0], 2, 10);

    design.addPiece("Stone", 1);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [1], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [6], 0);
    design.addMove(1, 1, [5], 0);
    design.addMove(1, 1, [4], 0);
    design.addMove(1, 2, [2, 2], 1);
    design.addMove(1, 2, [1, 1], 1);
    design.addMove(1, 2, [3, 3], 1);
    design.addMove(1, 2, [6, 6], 1);
    design.addMove(1, 2, [5, 5], 1);
    design.addMove(1, 2, [4, 4], 1);

    design.setup("N", "Tile", 99);
    design.setup("N", "Tile", 50);
    design.setup("N", "Tile", 51);
    design.setup("N", "Tile", 52);
    design.setup("N", "Tile", 53);
    design.setup("N", "Tile", 98);
    design.setup("N", "Tile", 35);
    design.setup("N", "Tile", 36);
    design.setup("N", "Tile", 37);
    design.setup("N", "Tile", 97);
    design.setup("N", "Tile", 65);
    design.setup("N", "Tile", 81);
    design.setup("N", "Tile", 69);
    design.setup("N", "Tile", 66);
    design.setup("N", "Tile", 67);
    design.setup("N", "Tile", 68);
    design.setup("N", "Tile", 84);
    design.setup("N", "Tile", 82);
    design.setup("N", "Tile", 83);
    design.setup("Red", "Stone", 232);
    design.setup("Red", "Stone", 233);
    design.setup("Red", "Stone", 234);
    design.setup("Red", "Stone", 216);
    design.setup("Red", "Stone", 217);
    design.setup("Red", "Stone", 218);
    design.setup("Red", "Stone", 219);
    design.setup("Red", "Stone", 203);
    design.setup("Red", "Stone", 204);
    design.setup("White", "Stone", 170);
    design.setup("White", "Stone", 171);
    design.setup("White", "Stone", 172);
    design.setup("White", "Stone", 185);
    design.setup("White", "Stone", 186);
    design.setup("White", "Stone", 187);
    design.setup("White", "Stone", 188);
    design.setup("White", "Stone", 200);
    design.setup("White", "Stone", 201);
}

Dagaz.View.configure = function(view) {
    view.defPiece("NTile", "N Tile");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("A9", 20, 20, 59, 75);
    view.defPosition("B9", 124, 20, 59, 75);
    view.defPosition("C9", 228, 20, 59, 75);
    view.defPosition("D9", 332, 20, 59, 75);
    view.defPosition("E9", 436, 20, 59, 75);
    view.defPosition("F9", 540, 20, 59, 75);
    view.defPosition("G9", 644, 20, 59, 75);
    view.defPosition("H9", 748, 20, 59, 75);
    view.defPosition("I9", 852, 20, 59, 75);
    view.defPosition("J9", 956, 20, 59, 75);
    view.defPosition("K9", 1060, 20, 59, 75);
    view.defPosition("L9", 1164, 20, 59, 75);
    view.defPosition("M9", 1268, 20, 59, 75);
    view.defPosition("N9", 1372, 20, 59, 75);
    view.defPosition("O9", 1476, 20, 59, 75);
    view.defPosition("A8", -32, 110, 59, 75);
    view.defPosition("B8", 72, 110, 59, 75);
    view.defPosition("C8", 176, 110, 59, 75);
    view.defPosition("D8", 280, 110, 59, 75);
    view.defPosition("E8", 384, 110, 59, 75);
    view.defPosition("F8", 488, 110, 59, 75);
    view.defPosition("G8", 592, 110, 59, 75);
    view.defPosition("H8", 696, 110, 59, 75);
    view.defPosition("I8", 800, 110, 59, 75);
    view.defPosition("J8", 904, 110, 59, 75);
    view.defPosition("K8", 1008, 110, 59, 75);
    view.defPosition("L8", 1112, 110, 59, 75);
    view.defPosition("M8", 1216, 110, 59, 75);
    view.defPosition("N8", 1320, 110, 59, 75);
    view.defPosition("O8", 1424, 110, 59, 75);
    view.defPosition("A7", -84, 200, 59, 75);
    view.defPosition("B7", 20, 200, 59, 75);
    view.defPosition("C7", 124, 200, 59, 75);
    view.defPosition("D7", 228, 200, 59, 75);
    view.defPosition("E7", 332, 200, 59, 75);
    view.defPosition("F7", 436, 200, 59, 75);
    view.defPosition("G7", 540, 200, 59, 75);
    view.defPosition("H7", 644, 200, 59, 75);
    view.defPosition("I7", 748, 200, 59, 75);
    view.defPosition("J7", 852, 200, 59, 75);
    view.defPosition("K7", 956, 200, 59, 75);
    view.defPosition("L7", 1060, 200, 59, 75);
    view.defPosition("M7", 1164, 200, 59, 75);
    view.defPosition("N7", 1268, 200, 59, 75);
    view.defPosition("O7", 1372, 200, 59, 75);
    view.defPosition("A6", -136, 290, 59, 75);
    view.defPosition("B6", -32, 290, 59, 75);
    view.defPosition("C6", 72, 290, 59, 75);
    view.defPosition("D6", 176, 290, 59, 75);
    view.defPosition("E6", 280, 290, 59, 75);
    view.defPosition("F6", 384, 290, 59, 75);
    view.defPosition("G6", 488, 290, 59, 75);
    view.defPosition("H6", 592, 290, 59, 75);
    view.defPosition("I6", 696, 290, 59, 75);
    view.defPosition("J6", 800, 290, 59, 75);
    view.defPosition("K6", 904, 290, 59, 75);
    view.defPosition("L6", 1008, 290, 59, 75);
    view.defPosition("M6", 1112, 290, 59, 75);
    view.defPosition("N6", 1216, 290, 59, 75);
    view.defPosition("O6", 1320, 290, 59, 75);
    view.defPosition("A5", -188, 380, 59, 75);
    view.defPosition("B5", -84, 380, 59, 75);
    view.defPosition("C5", 20, 380, 59, 75);
    view.defPosition("D5", 124, 380, 59, 75);
    view.defPosition("E5", 228, 380, 59, 75);
    view.defPosition("F5", 332, 380, 59, 75);
    view.defPosition("G5", 436, 380, 59, 75);
    view.defPosition("H5", 540, 380, 59, 75);
    view.defPosition("I5", 644, 380, 59, 75);
    view.defPosition("J5", 748, 380, 59, 75);
    view.defPosition("K5", 852, 380, 59, 75);
    view.defPosition("L5", 956, 380, 59, 75);
    view.defPosition("M5", 1060, 380, 59, 75);
    view.defPosition("N5", 1164, 380, 59, 75);
    view.defPosition("O5", 1268, 380, 59, 75);
    view.defPosition("A4", -240, 470, 59, 75);
    view.defPosition("B4", -136, 470, 59, 75);
    view.defPosition("C4", -32, 470, 59, 75);
    view.defPosition("D4", 72, 470, 59, 75);
    view.defPosition("E4", 176, 470, 59, 75);
    view.defPosition("F4", 280, 470, 59, 75);
    view.defPosition("G4", 384, 470, 59, 75);
    view.defPosition("H4", 488, 470, 59, 75);
    view.defPosition("I4", 592, 470, 59, 75);
    view.defPosition("J4", 696, 470, 59, 75);
    view.defPosition("K4", 800, 470, 59, 75);
    view.defPosition("L4", 904, 470, 59, 75);
    view.defPosition("M4", 1008, 470, 59, 75);
    view.defPosition("N4", 1112, 470, 59, 75);
    view.defPosition("O4", 1216, 470, 59, 75);
    view.defPosition("A3", -292, 560, 59, 75);
    view.defPosition("B3", -188, 560, 59, 75);
    view.defPosition("C3", -84, 560, 59, 75);
    view.defPosition("D3", 20, 560, 59, 75);
    view.defPosition("E3", 124, 560, 59, 75);
    view.defPosition("F3", 228, 560, 59, 75);
    view.defPosition("G3", 332, 560, 59, 75);
    view.defPosition("H3", 436, 560, 59, 75);
    view.defPosition("I3", 540, 560, 59, 75);
    view.defPosition("J3", 644, 560, 59, 75);
    view.defPosition("K3", 748, 560, 59, 75);
    view.defPosition("L3", 852, 560, 59, 75);
    view.defPosition("M3", 956, 560, 59, 75);
    view.defPosition("N3", 1060, 560, 59, 75);
    view.defPosition("O3", 1164, 560, 59, 75);
    view.defPosition("A2", -344, 650, 59, 75);
    view.defPosition("B2", -240, 650, 59, 75);
    view.defPosition("C2", -136, 650, 59, 75);
    view.defPosition("D2", -32, 650, 59, 75);
    view.defPosition("E2", 72, 650, 59, 75);
    view.defPosition("F2", 176, 650, 59, 75);
    view.defPosition("G2", 280, 650, 59, 75);
    view.defPosition("H2", 384, 650, 59, 75);
    view.defPosition("I2", 488, 650, 59, 75);
    view.defPosition("J2", 592, 650, 59, 75);
    view.defPosition("K2", 696, 650, 59, 75);
    view.defPosition("L2", 800, 650, 59, 75);
    view.defPosition("M2", 904, 650, 59, 75);
    view.defPosition("N2", 1008, 650, 59, 75);
    view.defPosition("O2", 1112, 650, 59, 75);
    view.defPosition("A1", -396, 740, 59, 75);
    view.defPosition("B1", -292, 740, 59, 75);
    view.defPosition("C1", -188, 740, 59, 75);
    view.defPosition("D1", -84, 740, 59, 75);
    view.defPosition("E1", 20, 740, 59, 75);
    view.defPosition("F1", 124, 740, 59, 75);
    view.defPosition("G1", 228, 740, 59, 75);
    view.defPosition("H1", 332, 740, 59, 75);
    view.defPosition("I1", 436, 740, 59, 75);
    view.defPosition("J1", 540, 740, 59, 75);
    view.defPosition("K1", 644, 740, 59, 75);
    view.defPosition("L1", 748, 740, 59, 75);
    view.defPosition("M1", 852, 740, 59, 75);
    view.defPosition("N1", 956, 740, 59, 75);
    view.defPosition("O1", 1060, 740, 59, 75);
    view.defPosition("a9", 20, 20, 59, 75);
    view.defPosition("b9", 124, 20, 59, 75);
    view.defPosition("c9", 228, 20, 59, 75);
    view.defPosition("d9", 332, 20, 59, 75);
    view.defPosition("e9", 436, 20, 59, 75);
    view.defPosition("f9", 540, 20, 59, 75);
    view.defPosition("g9", 644, 20, 59, 75);
    view.defPosition("h9", 748, 20, 59, 75);
    view.defPosition("i9", 852, 20, 59, 75);
    view.defPosition("j9", 956, 20, 59, 75);
    view.defPosition("k9", 1060, 20, 59, 75);
    view.defPosition("l9", 1164, 20, 59, 75);
    view.defPosition("m9", 1268, 20, 59, 75);
    view.defPosition("n9", 1372, 20, 59, 75);
    view.defPosition("o9", 1476, 20, 59, 75);
    view.defPosition("a8", -32, 110, 59, 75);
    view.defPosition("b8", 72, 110, 59, 75);
    view.defPosition("c8", 176, 110, 59, 75);
    view.defPosition("d8", 280, 110, 59, 75);
    view.defPosition("e8", 384, 110, 59, 75);
    view.defPosition("f8", 488, 110, 59, 75);
    view.defPosition("g8", 592, 110, 59, 75);
    view.defPosition("h8", 696, 110, 59, 75);
    view.defPosition("i8", 800, 110, 59, 75);
    view.defPosition("j8", 904, 110, 59, 75);
    view.defPosition("k8", 1008, 110, 59, 75);
    view.defPosition("l8", 1112, 110, 59, 75);
    view.defPosition("m8", 1216, 110, 59, 75);
    view.defPosition("n8", 1320, 110, 59, 75);
    view.defPosition("o8", 1424, 110, 59, 75);
    view.defPosition("a7", -84, 200, 59, 75);
    view.defPosition("b7", 20, 200, 59, 75);
    view.defPosition("c7", 124, 200, 59, 75);
    view.defPosition("d7", 228, 200, 59, 75);
    view.defPosition("e7", 332, 200, 59, 75);
    view.defPosition("f7", 436, 200, 59, 75);
    view.defPosition("g7", 540, 200, 59, 75);
    view.defPosition("h7", 644, 200, 59, 75);
    view.defPosition("i7", 748, 200, 59, 75);
    view.defPosition("j7", 852, 200, 59, 75);
    view.defPosition("k7", 956, 200, 59, 75);
    view.defPosition("l7", 1060, 200, 59, 75);
    view.defPosition("m7", 1164, 200, 59, 75);
    view.defPosition("n7", 1268, 200, 59, 75);
    view.defPosition("o7", 1372, 200, 59, 75);
    view.defPosition("a6", -136, 290, 59, 75);
    view.defPosition("b6", -32, 290, 59, 75);
    view.defPosition("c6", 72, 290, 59, 75);
    view.defPosition("d6", 176, 290, 59, 75);
    view.defPosition("e6", 280, 290, 59, 75);
    view.defPosition("f6", 384, 290, 59, 75);
    view.defPosition("g6", 488, 290, 59, 75);
    view.defPosition("h6", 592, 290, 59, 75);
    view.defPosition("i6", 696, 290, 59, 75);
    view.defPosition("j6", 800, 290, 59, 75);
    view.defPosition("k6", 904, 290, 59, 75);
    view.defPosition("l6", 1008, 290, 59, 75);
    view.defPosition("m6", 1112, 290, 59, 75);
    view.defPosition("n6", 1216, 290, 59, 75);
    view.defPosition("o6", 1320, 290, 59, 75);
    view.defPosition("a5", -188, 380, 59, 75);
    view.defPosition("b5", -84, 380, 59, 75);
    view.defPosition("c5", 20, 380, 59, 75);
    view.defPosition("d5", 124, 380, 59, 75);
    view.defPosition("e5", 228, 380, 59, 75);
    view.defPosition("f5", 332, 380, 59, 75);
    view.defPosition("g5", 436, 380, 59, 75);
    view.defPosition("h5", 540, 380, 59, 75);
    view.defPosition("i5", 644, 380, 59, 75);
    view.defPosition("j5", 748, 380, 59, 75);
    view.defPosition("k5", 852, 380, 59, 75);
    view.defPosition("l5", 956, 380, 59, 75);
    view.defPosition("m5", 1060, 380, 59, 75);
    view.defPosition("n5", 1164, 380, 59, 75);
    view.defPosition("o5", 1268, 380, 59, 75);
    view.defPosition("a4", -240, 470, 59, 75);
    view.defPosition("b4", -136, 470, 59, 75);
    view.defPosition("c4", -32, 470, 59, 75);
    view.defPosition("d4", 72, 470, 59, 75);
    view.defPosition("e4", 176, 470, 59, 75);
    view.defPosition("f4", 280, 470, 59, 75);
    view.defPosition("g4", 384, 470, 59, 75);
    view.defPosition("h4", 488, 470, 59, 75);
    view.defPosition("i4", 592, 470, 59, 75);
    view.defPosition("j4", 696, 470, 59, 75);
    view.defPosition("k4", 800, 470, 59, 75);
    view.defPosition("l4", 904, 470, 59, 75);
    view.defPosition("m4", 1008, 470, 59, 75);
    view.defPosition("n4", 1112, 470, 59, 75);
    view.defPosition("o4", 1216, 470, 59, 75);
    view.defPosition("a3", -292, 560, 59, 75);
    view.defPosition("b3", -188, 560, 59, 75);
    view.defPosition("c3", -84, 560, 59, 75);
    view.defPosition("d3", 20, 560, 59, 75);
    view.defPosition("e3", 124, 560, 59, 75);
    view.defPosition("f3", 228, 560, 59, 75);
    view.defPosition("g3", 332, 560, 59, 75);
    view.defPosition("h3", 436, 560, 59, 75);
    view.defPosition("i3", 540, 560, 59, 75);
    view.defPosition("j3", 644, 560, 59, 75);
    view.defPosition("k3", 748, 560, 59, 75);
    view.defPosition("l3", 852, 560, 59, 75);
    view.defPosition("m3", 956, 560, 59, 75);
    view.defPosition("n3", 1060, 560, 59, 75);
    view.defPosition("o3", 1164, 560, 59, 75);
    view.defPosition("a2", -344, 650, 59, 75);
    view.defPosition("b2", -240, 650, 59, 75);
    view.defPosition("c2", -136, 650, 59, 75);
    view.defPosition("d2", -32, 650, 59, 75);
    view.defPosition("e2", 72, 650, 59, 75);
    view.defPosition("f2", 176, 650, 59, 75);
    view.defPosition("g2", 280, 650, 59, 75);
    view.defPosition("h2", 384, 650, 59, 75);
    view.defPosition("i2", 488, 650, 59, 75);
    view.defPosition("j2", 592, 650, 59, 75);
    view.defPosition("k2", 696, 650, 59, 75);
    view.defPosition("l2", 800, 650, 59, 75);
    view.defPosition("m2", 904, 650, 59, 75);
    view.defPosition("n2", 1008, 650, 59, 75);
    view.defPosition("o2", 1112, 650, 59, 75);
    view.defPosition("a1", -396, 740, 59, 75);
    view.defPosition("b1", -292, 740, 59, 75);
    view.defPosition("c1", -188, 740, 59, 75);
    view.defPosition("d1", -84, 740, 59, 75);
    view.defPosition("e1", 20, 740, 59, 75);
    view.defPosition("f1", 124, 740, 59, 75);
    view.defPosition("g1", 228, 740, 59, 75);
    view.defPosition("h1", 332, 740, 59, 75);
    view.defPosition("i1", 436, 740, 59, 75);
    view.defPosition("j1", 540, 740, 59, 75);
    view.defPosition("k1", 644, 740, 59, 75);
    view.defPosition("l1", 748, 740, 59, 75);
    view.defPosition("m1", 852, 740, 59, 75);
    view.defPosition("n1", 956, 740, 59, 75);
    view.defPosition("o1", 1060, 740, 59, 75);
}
