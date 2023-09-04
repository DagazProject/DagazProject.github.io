Dagaz.Model.WIDTH = 19;

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
    design.checkVersion("pass-partial", "true");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("ko-shogi-extension", "true");
    design.checkVersion("ko-shogi-invariant", "true");
    design.checkVersion("ko-shogi-promotion", "true");
    design.checkVersion("ko-shogi-priest", "true");
    design.checkVersion("ko-shogi-engineer", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("A1", [0, 1, 19, 0, 0, 20, 0, 0]);
    design.addPosition("B1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("C1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("D1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("E1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("F1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("G1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("H1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("I1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("J1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("K1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("L1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("M1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("N1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("O1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("P1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("Q1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("R1", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("S1", [-1, 0, 19, 0, 0, 0, 18, 0]);
    design.addPosition("A2", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R2", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S2", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A3", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R3", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S3", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A4", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R4", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S4", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A5", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R5", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S5", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A6", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R6", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S6", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A7", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R7", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S7", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A8", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R8", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S8", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A9", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R9", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S9", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A10", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R10", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S10", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A11", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R11", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S11", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A12", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R12", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S12", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A13", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R13", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S13", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A14", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R14", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S14", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A15", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R15", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S15", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A16", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R16", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S16", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A17", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R17", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S17", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A18", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("B18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("C18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("D18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("E18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("F18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("G18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("H18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("I18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("J18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("K18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("L18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("M18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("N18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("O18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("P18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("Q18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("R18", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("S18", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("A19", [0, 1, 0, -18, -19, 0, 0, 0]);
    design.addPosition("B19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("C19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("D19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("E19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("F19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("G19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("H19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("I19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("J19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("K19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("L19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("M19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("N19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("O19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("P19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("Q19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("R19", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("S19", [-1, 0, 0, 0, -19, 0, 0, -20]);

    design.addZone("promotion", 2, [342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265]);
    design.addZone("promotion", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// left-3-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.LITERAL,	6);	// IL
    design.addCommand(3, ZRF.FUNCTION,	11);	// create
    design.addCommand(3, ZRF.JUMP,	3);
    design.addCommand(3, ZRF.LITERAL,	6);	// IL
    design.addCommand(3, ZRF.FUNCTION,	11);	// create
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PROMOTE,	65);	// N
    design.addCommand(3, ZRF.MODE,	2);	// left-2-type
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
    design.addCommand(4, ZRF.MODE,	3);	// left-1-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.LITERAL,	6);	// IL
    design.addCommand(5, ZRF.FUNCTION,	11);	// create
    design.addCommand(5, ZRF.JUMP,	3);
    design.addCommand(5, ZRF.LITERAL,	6);	// IL
    design.addCommand(5, ZRF.FUNCTION,	11);	// create
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	26);	// capture
    design.addCommand(5, ZRF.PROMOTE,	65);	// N
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.MODE,	4);	// continue-type
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.LITERAL,	6);	// IL
    design.addCommand(7, ZRF.FUNCTION,	11);	// create
    design.addCommand(7, ZRF.JUMP,	3);
    design.addCommand(7, ZRF.LITERAL,	7);	// SM
    design.addCommand(7, ZRF.FUNCTION,	11);	// create
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	26);	// capture
    design.addCommand(7, ZRF.PROMOTE,	65);	// N
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.LITERAL,	8);	// TF
    design.addCommand(8, ZRF.FUNCTION,	11);	// create
    design.addCommand(8, ZRF.JUMP,	3);
    design.addCommand(8, ZRF.LITERAL,	8);	// TF
    design.addCommand(8, ZRF.FUNCTION,	11);	// create
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	26);	// capture
    design.addCommand(8, ZRF.PROMOTE,	65);	// N
    design.addCommand(8, ZRF.MODE,	2);	// left-2-type
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.LITERAL,	8);	// TF
    design.addCommand(9, ZRF.FUNCTION,	11);	// create
    design.addCommand(9, ZRF.JUMP,	3);
    design.addCommand(9, ZRF.LITERAL,	8);	// TF
    design.addCommand(9, ZRF.FUNCTION,	11);	// create
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	26);	// capture
    design.addCommand(9, ZRF.PROMOTE,	65);	// N
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	4);
    design.addCommand(10, ZRF.LITERAL,	8);	// TF
    design.addCommand(10, ZRF.FUNCTION,	11);	// create
    design.addCommand(10, ZRF.JUMP,	3);
    design.addCommand(10, ZRF.LITERAL,	9);	// TP
    design.addCommand(10, ZRF.FUNCTION,	11);	// create
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	26);	// capture
    design.addCommand(10, ZRF.PROMOTE,	65);	// N
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.MODE,	4);	// continue-type
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.PARAM,	1);	// $2
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.IF,	7);
    design.addCommand(13, ZRF.FORK,	3);
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end
    design.addCommand(13, ZRF.PARAM,	2);	// $3
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.JUMP,	-8);
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	1);	// $2
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PARAM,	2);	// $3
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	7);
    design.addCommand(14, ZRF.FORK,	3);
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end
    design.addCommand(14, ZRF.PARAM,	3);	// $4
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.JUMP,	-8);
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.MODE,	5);	// left-4-type
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.MODE,	1);	// left-3-type
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.MODE,	2);	// left-2-type
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(18, ZRF.FUNCTION,	0);	// not
    design.addCommand(18, ZRF.FUNCTION,	20);	// verify
    design.addCommand(18, ZRF.MODE,	3);	// left-1-type
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.MODE,	6);	// left-4-n
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.MODE,	10);	// left-4-s
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.MODE,	14);	// left-4-w
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.MODE,	18);	// left-4-e
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.MODE,	7);	// left-3-n
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end

    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	0);	// $1
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(24, ZRF.FUNCTION,	0);	// not
    design.addCommand(24, ZRF.FUNCTION,	20);	// verify
    design.addCommand(24, ZRF.MODE,	8);	// left-2-n
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.MODE,	9);	// left-1-n
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.MODE,	11);	// left-3-s
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.MODE,	12);	// left-2-s
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.MODE,	13);	// left-1-s
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(29, ZRF.FUNCTION,	0);	// not
    design.addCommand(29, ZRF.FUNCTION,	20);	// verify
    design.addCommand(29, ZRF.MODE,	15);	// left-3-w
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.MODE,	16);	// left-2-w
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.MODE,	17);	// left-1-w
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end

    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.PARAM,	0);	// $1
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.MODE,	19);	// left-3-e
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end

    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	0);	// $1
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(33, ZRF.FUNCTION,	0);	// not
    design.addCommand(33, ZRF.FUNCTION,	20);	// verify
    design.addCommand(33, ZRF.MODE,	20);	// left-2-e
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	28);	// end

    design.addCommand(34, ZRF.FUNCTION,	24);	// from
    design.addCommand(34, ZRF.PARAM,	0);	// $1
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.MODE,	21);	// left-1-e
    design.addCommand(34, ZRF.FUNCTION,	25);	// to
    design.addCommand(34, ZRF.FUNCTION,	28);	// end

    design.addCommand(35, ZRF.FUNCTION,	24);	// from
    design.addCommand(35, ZRF.PARAM,	0);	// $1
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.MODE,	4);	// continue-type
    design.addCommand(35, ZRF.FUNCTION,	25);	// to
    design.addCommand(35, ZRF.FUNCTION,	28);	// end

    design.addCommand(36, ZRF.FUNCTION,	24);	// from
    design.addCommand(36, ZRF.PARAM,	0);	// $1
    design.addCommand(36, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(36, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.PARAM,	1);	// $2
    design.addCommand(36, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(36, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.MODE,	4);	// continue-type
    design.addCommand(36, ZRF.FUNCTION,	25);	// to
    design.addCommand(36, ZRF.FUNCTION,	28);	// end

    design.addCommand(37, ZRF.FUNCTION,	24);	// from
    design.addCommand(37, ZRF.PARAM,	0);	// $1
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.PARAM,	1);	// $2
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.PARAM,	2);	// $3
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	20);	// verify
    design.addCommand(37, ZRF.MODE,	4);	// continue-type
    design.addCommand(37, ZRF.FUNCTION,	25);	// to
    design.addCommand(37, ZRF.FUNCTION,	28);	// end

    design.addCommand(38, ZRF.FUNCTION,	24);	// from
    design.addCommand(38, ZRF.PARAM,	0);	// $1
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PARAM,	1);	// $2
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PARAM,	2);	// $3
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.PARAM,	3);	// $4
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.MODE,	4);	// continue-type
    design.addCommand(38, ZRF.FUNCTION,	25);	// to
    design.addCommand(38, ZRF.FUNCTION,	28);	// end

    design.addCommand(39, ZRF.FUNCTION,	24);	// from
    design.addCommand(39, ZRF.PARAM,	0);	// $1
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.PARAM,	1);	// $2
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.PARAM,	2);	// $3
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.PARAM,	3);	// $4
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.PARAM,	4);	// $5
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.MODE,	4);	// continue-type
    design.addCommand(39, ZRF.FUNCTION,	25);	// to
    design.addCommand(39, ZRF.FUNCTION,	28);	// end

    design.addCommand(40, ZRF.FUNCTION,	24);	// from
    design.addCommand(40, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.IF,	4);
    design.addCommand(40, ZRF.LITERAL,	41);	// GC
    design.addCommand(40, ZRF.FUNCTION,	11);	// create
    design.addCommand(40, ZRF.JUMP,	3);
    design.addCommand(40, ZRF.LITERAL,	41);	// GC
    design.addCommand(40, ZRF.FUNCTION,	11);	// create
    design.addCommand(40, ZRF.PARAM,	0);	// $1
    design.addCommand(40, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(40, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.FUNCTION,	26);	// capture
    design.addCommand(40, ZRF.PROMOTE,	65);	// N
    design.addCommand(40, ZRF.FUNCTION,	25);	// to
    design.addCommand(40, ZRF.FUNCTION,	28);	// end

    design.addCommand(41, ZRF.FUNCTION,	24);	// from
    design.addCommand(41, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.IF,	4);
    design.addCommand(41, ZRF.LITERAL,	41);	// GC
    design.addCommand(41, ZRF.FUNCTION,	11);	// create
    design.addCommand(41, ZRF.JUMP,	3);
    design.addCommand(41, ZRF.LITERAL,	41);	// GC
    design.addCommand(41, ZRF.FUNCTION,	11);	// create
    design.addCommand(41, ZRF.PARAM,	0);	// $1
    design.addCommand(41, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(41, ZRF.PARAM,	1);	// $2
    design.addCommand(41, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(41, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.FUNCTION,	26);	// capture
    design.addCommand(41, ZRF.PROMOTE,	65);	// N
    design.addCommand(41, ZRF.FUNCTION,	25);	// to
    design.addCommand(41, ZRF.FUNCTION,	28);	// end

    design.addCommand(42, ZRF.FUNCTION,	24);	// from
    design.addCommand(42, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.IF,	4);
    design.addCommand(42, ZRF.LITERAL,	41);	// GC
    design.addCommand(42, ZRF.FUNCTION,	11);	// create
    design.addCommand(42, ZRF.JUMP,	3);
    design.addCommand(42, ZRF.LITERAL,	41);	// GC
    design.addCommand(42, ZRF.FUNCTION,	11);	// create
    design.addCommand(42, ZRF.PARAM,	0);	// $1
    design.addCommand(42, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(42, ZRF.PARAM,	1);	// $2
    design.addCommand(42, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(42, ZRF.PARAM,	2);	// $3
    design.addCommand(42, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(42, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.FUNCTION,	26);	// capture
    design.addCommand(42, ZRF.PROMOTE,	65);	// N
    design.addCommand(42, ZRF.FUNCTION,	25);	// to
    design.addCommand(42, ZRF.FUNCTION,	28);	// end

    design.addCommand(43, ZRF.FUNCTION,	24);	// from
    design.addCommand(43, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.IF,	4);
    design.addCommand(43, ZRF.LITERAL,	41);	// GC
    design.addCommand(43, ZRF.FUNCTION,	11);	// create
    design.addCommand(43, ZRF.JUMP,	3);
    design.addCommand(43, ZRF.LITERAL,	41);	// GC
    design.addCommand(43, ZRF.FUNCTION,	11);	// create
    design.addCommand(43, ZRF.PARAM,	0);	// $1
    design.addCommand(43, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(43, ZRF.PARAM,	1);	// $2
    design.addCommand(43, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(43, ZRF.PARAM,	2);	// $3
    design.addCommand(43, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(43, ZRF.PARAM,	3);	// $4
    design.addCommand(43, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(43, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.FUNCTION,	26);	// capture
    design.addCommand(43, ZRF.PROMOTE,	65);	// N
    design.addCommand(43, ZRF.FUNCTION,	25);	// to
    design.addCommand(43, ZRF.FUNCTION,	28);	// end

    design.addCommand(44, ZRF.FUNCTION,	24);	// from
    design.addCommand(44, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.IF,	4);
    design.addCommand(44, ZRF.LITERAL,	41);	// GC
    design.addCommand(44, ZRF.FUNCTION,	11);	// create
    design.addCommand(44, ZRF.JUMP,	3);
    design.addCommand(44, ZRF.LITERAL,	41);	// GC
    design.addCommand(44, ZRF.FUNCTION,	11);	// create
    design.addCommand(44, ZRF.PARAM,	0);	// $1
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.PARAM,	1);	// $2
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.PARAM,	2);	// $3
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.PARAM,	3);	// $4
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.PARAM,	4);	// $5
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.FUNCTION,	26);	// capture
    design.addCommand(44, ZRF.PROMOTE,	65);	// N
    design.addCommand(44, ZRF.FUNCTION,	25);	// to
    design.addCommand(44, ZRF.FUNCTION,	28);	// end

    design.addCommand(45, ZRF.FUNCTION,	24);	// from
    design.addCommand(45, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.IF,	4);
    design.addCommand(45, ZRF.LITERAL,	41);	// GC
    design.addCommand(45, ZRF.FUNCTION,	11);	// create
    design.addCommand(45, ZRF.JUMP,	3);
    design.addCommand(45, ZRF.LITERAL,	42);	// C
    design.addCommand(45, ZRF.FUNCTION,	11);	// create
    design.addCommand(45, ZRF.PARAM,	0);	// $1
    design.addCommand(45, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(45, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.FUNCTION,	26);	// capture
    design.addCommand(45, ZRF.PROMOTE,	65);	// N
    design.addCommand(45, ZRF.FUNCTION,	25);	// to
    design.addCommand(45, ZRF.FUNCTION,	28);	// end

    design.addCommand(46, ZRF.FUNCTION,	24);	// from
    design.addCommand(46, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.IF,	4);
    design.addCommand(46, ZRF.LITERAL,	41);	// GC
    design.addCommand(46, ZRF.FUNCTION,	11);	// create
    design.addCommand(46, ZRF.JUMP,	3);
    design.addCommand(46, ZRF.LITERAL,	42);	// C
    design.addCommand(46, ZRF.FUNCTION,	11);	// create
    design.addCommand(46, ZRF.PARAM,	0);	// $1
    design.addCommand(46, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(46, ZRF.PARAM,	1);	// $2
    design.addCommand(46, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(46, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.FUNCTION,	26);	// capture
    design.addCommand(46, ZRF.PROMOTE,	65);	// N
    design.addCommand(46, ZRF.FUNCTION,	25);	// to
    design.addCommand(46, ZRF.FUNCTION,	28);	// end

    design.addCommand(47, ZRF.FUNCTION,	24);	// from
    design.addCommand(47, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.IF,	4);
    design.addCommand(47, ZRF.LITERAL,	41);	// GC
    design.addCommand(47, ZRF.FUNCTION,	11);	// create
    design.addCommand(47, ZRF.JUMP,	3);
    design.addCommand(47, ZRF.LITERAL,	42);	// C
    design.addCommand(47, ZRF.FUNCTION,	11);	// create
    design.addCommand(47, ZRF.PARAM,	0);	// $1
    design.addCommand(47, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(47, ZRF.PARAM,	1);	// $2
    design.addCommand(47, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(47, ZRF.PARAM,	2);	// $3
    design.addCommand(47, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(47, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.FUNCTION,	26);	// capture
    design.addCommand(47, ZRF.PROMOTE,	65);	// N
    design.addCommand(47, ZRF.FUNCTION,	25);	// to
    design.addCommand(47, ZRF.FUNCTION,	28);	// end

    design.addCommand(48, ZRF.FUNCTION,	24);	// from
    design.addCommand(48, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.IF,	4);
    design.addCommand(48, ZRF.LITERAL,	41);	// GC
    design.addCommand(48, ZRF.FUNCTION,	11);	// create
    design.addCommand(48, ZRF.JUMP,	3);
    design.addCommand(48, ZRF.LITERAL,	42);	// C
    design.addCommand(48, ZRF.FUNCTION,	11);	// create
    design.addCommand(48, ZRF.PARAM,	0);	// $1
    design.addCommand(48, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(48, ZRF.PARAM,	1);	// $2
    design.addCommand(48, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(48, ZRF.PARAM,	2);	// $3
    design.addCommand(48, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(48, ZRF.PARAM,	3);	// $4
    design.addCommand(48, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(48, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.FUNCTION,	26);	// capture
    design.addCommand(48, ZRF.PROMOTE,	65);	// N
    design.addCommand(48, ZRF.FUNCTION,	25);	// to
    design.addCommand(48, ZRF.FUNCTION,	28);	// end

    design.addCommand(49, ZRF.FUNCTION,	24);	// from
    design.addCommand(49, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.IF,	4);
    design.addCommand(49, ZRF.LITERAL,	41);	// GC
    design.addCommand(49, ZRF.FUNCTION,	11);	// create
    design.addCommand(49, ZRF.JUMP,	3);
    design.addCommand(49, ZRF.LITERAL,	42);	// C
    design.addCommand(49, ZRF.FUNCTION,	11);	// create
    design.addCommand(49, ZRF.PARAM,	0);	// $1
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.PARAM,	1);	// $2
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.PARAM,	2);	// $3
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.PARAM,	3);	// $4
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.PARAM,	4);	// $5
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.FUNCTION,	26);	// capture
    design.addCommand(49, ZRF.PROMOTE,	65);	// N
    design.addCommand(49, ZRF.FUNCTION,	25);	// to
    design.addCommand(49, ZRF.FUNCTION,	28);	// end

    design.addCommand(50, ZRF.FUNCTION,	24);	// from
    design.addCommand(50, ZRF.PARAM,	0);	// $1
    design.addCommand(50, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(50, ZRF.PARAM,	1);	// $2
    design.addCommand(50, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(50, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.MODE,	4);	// continue-type
    design.addCommand(50, ZRF.FUNCTION,	25);	// to
    design.addCommand(50, ZRF.FUNCTION,	28);	// end

    design.addCommand(51, ZRF.FUNCTION,	24);	// from
    design.addCommand(51, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(51, ZRF.FUNCTION,	0);	// not
    design.addCommand(51, ZRF.IF,	4);
    design.addCommand(51, ZRF.LITERAL,	43);	// SC
    design.addCommand(51, ZRF.FUNCTION,	11);	// create
    design.addCommand(51, ZRF.JUMP,	3);
    design.addCommand(51, ZRF.LITERAL,	43);	// SC
    design.addCommand(51, ZRF.FUNCTION,	11);	// create
    design.addCommand(51, ZRF.PARAM,	0);	// $1
    design.addCommand(51, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(51, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(51, ZRF.FUNCTION,	20);	// verify
    design.addCommand(51, ZRF.FUNCTION,	26);	// capture
    design.addCommand(51, ZRF.PROMOTE,	65);	// N
    design.addCommand(51, ZRF.FUNCTION,	25);	// to
    design.addCommand(51, ZRF.FUNCTION,	28);	// end

    design.addCommand(52, ZRF.FUNCTION,	24);	// from
    design.addCommand(52, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(52, ZRF.FUNCTION,	0);	// not
    design.addCommand(52, ZRF.IF,	4);
    design.addCommand(52, ZRF.LITERAL,	43);	// SC
    design.addCommand(52, ZRF.FUNCTION,	11);	// create
    design.addCommand(52, ZRF.JUMP,	3);
    design.addCommand(52, ZRF.LITERAL,	43);	// SC
    design.addCommand(52, ZRF.FUNCTION,	11);	// create
    design.addCommand(52, ZRF.PARAM,	0);	// $1
    design.addCommand(52, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(52, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(52, ZRF.FUNCTION,	20);	// verify
    design.addCommand(52, ZRF.PARAM,	1);	// $2
    design.addCommand(52, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(52, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(52, ZRF.FUNCTION,	20);	// verify
    design.addCommand(52, ZRF.FUNCTION,	26);	// capture
    design.addCommand(52, ZRF.PROMOTE,	65);	// N
    design.addCommand(52, ZRF.FUNCTION,	25);	// to
    design.addCommand(52, ZRF.FUNCTION,	28);	// end

    design.addCommand(53, ZRF.FUNCTION,	24);	// from
    design.addCommand(53, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.IF,	4);
    design.addCommand(53, ZRF.LITERAL,	43);	// SC
    design.addCommand(53, ZRF.FUNCTION,	11);	// create
    design.addCommand(53, ZRF.JUMP,	3);
    design.addCommand(53, ZRF.LITERAL,	43);	// SC
    design.addCommand(53, ZRF.FUNCTION,	11);	// create
    design.addCommand(53, ZRF.PARAM,	0);	// $1
    design.addCommand(53, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(53, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.PARAM,	1);	// $2
    design.addCommand(53, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(53, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.PARAM,	2);	// $3
    design.addCommand(53, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(53, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.FUNCTION,	26);	// capture
    design.addCommand(53, ZRF.PROMOTE,	65);	// N
    design.addCommand(53, ZRF.FUNCTION,	25);	// to
    design.addCommand(53, ZRF.FUNCTION,	28);	// end

    design.addCommand(54, ZRF.FUNCTION,	24);	// from
    design.addCommand(54, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.IF,	4);
    design.addCommand(54, ZRF.LITERAL,	43);	// SC
    design.addCommand(54, ZRF.FUNCTION,	11);	// create
    design.addCommand(54, ZRF.JUMP,	3);
    design.addCommand(54, ZRF.LITERAL,	43);	// SC
    design.addCommand(54, ZRF.FUNCTION,	11);	// create
    design.addCommand(54, ZRF.PARAM,	0);	// $1
    design.addCommand(54, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(54, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.PARAM,	1);	// $2
    design.addCommand(54, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(54, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.PARAM,	2);	// $3
    design.addCommand(54, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(54, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.PARAM,	3);	// $4
    design.addCommand(54, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(54, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.FUNCTION,	26);	// capture
    design.addCommand(54, ZRF.PROMOTE,	65);	// N
    design.addCommand(54, ZRF.FUNCTION,	25);	// to
    design.addCommand(54, ZRF.FUNCTION,	28);	// end

    design.addCommand(55, ZRF.FUNCTION,	24);	// from
    design.addCommand(55, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.IF,	4);
    design.addCommand(55, ZRF.LITERAL,	43);	// SC
    design.addCommand(55, ZRF.FUNCTION,	11);	// create
    design.addCommand(55, ZRF.JUMP,	3);
    design.addCommand(55, ZRF.LITERAL,	43);	// SC
    design.addCommand(55, ZRF.FUNCTION,	11);	// create
    design.addCommand(55, ZRF.PARAM,	0);	// $1
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.PARAM,	1);	// $2
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.PARAM,	2);	// $3
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.PARAM,	3);	// $4
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.PARAM,	4);	// $5
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.FUNCTION,	26);	// capture
    design.addCommand(55, ZRF.PROMOTE,	65);	// N
    design.addCommand(55, ZRF.FUNCTION,	25);	// to
    design.addCommand(55, ZRF.FUNCTION,	28);	// end

    design.addCommand(56, ZRF.FUNCTION,	24);	// from
    design.addCommand(56, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.IF,	4);
    design.addCommand(56, ZRF.LITERAL,	43);	// SC
    design.addCommand(56, ZRF.FUNCTION,	11);	// create
    design.addCommand(56, ZRF.JUMP,	3);
    design.addCommand(56, ZRF.LITERAL,	44);	// SB
    design.addCommand(56, ZRF.FUNCTION,	11);	// create
    design.addCommand(56, ZRF.PARAM,	0);	// $1
    design.addCommand(56, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(56, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.FUNCTION,	26);	// capture
    design.addCommand(56, ZRF.PROMOTE,	65);	// N
    design.addCommand(56, ZRF.FUNCTION,	25);	// to
    design.addCommand(56, ZRF.FUNCTION,	28);	// end

    design.addCommand(57, ZRF.FUNCTION,	24);	// from
    design.addCommand(57, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(57, ZRF.FUNCTION,	0);	// not
    design.addCommand(57, ZRF.IF,	4);
    design.addCommand(57, ZRF.LITERAL,	43);	// SC
    design.addCommand(57, ZRF.FUNCTION,	11);	// create
    design.addCommand(57, ZRF.JUMP,	3);
    design.addCommand(57, ZRF.LITERAL,	44);	// SB
    design.addCommand(57, ZRF.FUNCTION,	11);	// create
    design.addCommand(57, ZRF.PARAM,	0);	// $1
    design.addCommand(57, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(57, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(57, ZRF.FUNCTION,	20);	// verify
    design.addCommand(57, ZRF.PARAM,	1);	// $2
    design.addCommand(57, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(57, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(57, ZRF.FUNCTION,	20);	// verify
    design.addCommand(57, ZRF.FUNCTION,	26);	// capture
    design.addCommand(57, ZRF.PROMOTE,	65);	// N
    design.addCommand(57, ZRF.FUNCTION,	25);	// to
    design.addCommand(57, ZRF.FUNCTION,	28);	// end

    design.addCommand(58, ZRF.FUNCTION,	24);	// from
    design.addCommand(58, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(58, ZRF.FUNCTION,	0);	// not
    design.addCommand(58, ZRF.IF,	4);
    design.addCommand(58, ZRF.LITERAL,	43);	// SC
    design.addCommand(58, ZRF.FUNCTION,	11);	// create
    design.addCommand(58, ZRF.JUMP,	3);
    design.addCommand(58, ZRF.LITERAL,	44);	// SB
    design.addCommand(58, ZRF.FUNCTION,	11);	// create
    design.addCommand(58, ZRF.PARAM,	0);	// $1
    design.addCommand(58, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(58, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(58, ZRF.FUNCTION,	20);	// verify
    design.addCommand(58, ZRF.PARAM,	1);	// $2
    design.addCommand(58, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(58, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(58, ZRF.FUNCTION,	20);	// verify
    design.addCommand(58, ZRF.PARAM,	2);	// $3
    design.addCommand(58, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(58, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(58, ZRF.FUNCTION,	20);	// verify
    design.addCommand(58, ZRF.FUNCTION,	26);	// capture
    design.addCommand(58, ZRF.PROMOTE,	65);	// N
    design.addCommand(58, ZRF.FUNCTION,	25);	// to
    design.addCommand(58, ZRF.FUNCTION,	28);	// end

    design.addCommand(59, ZRF.FUNCTION,	24);	// from
    design.addCommand(59, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.IF,	4);
    design.addCommand(59, ZRF.LITERAL,	43);	// SC
    design.addCommand(59, ZRF.FUNCTION,	11);	// create
    design.addCommand(59, ZRF.JUMP,	3);
    design.addCommand(59, ZRF.LITERAL,	44);	// SB
    design.addCommand(59, ZRF.FUNCTION,	11);	// create
    design.addCommand(59, ZRF.PARAM,	0);	// $1
    design.addCommand(59, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(59, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.PARAM,	1);	// $2
    design.addCommand(59, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(59, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.PARAM,	2);	// $3
    design.addCommand(59, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(59, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.PARAM,	3);	// $4
    design.addCommand(59, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(59, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.FUNCTION,	26);	// capture
    design.addCommand(59, ZRF.PROMOTE,	65);	// N
    design.addCommand(59, ZRF.FUNCTION,	25);	// to
    design.addCommand(59, ZRF.FUNCTION,	28);	// end

    design.addCommand(60, ZRF.FUNCTION,	24);	// from
    design.addCommand(60, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.IF,	4);
    design.addCommand(60, ZRF.LITERAL,	43);	// SC
    design.addCommand(60, ZRF.FUNCTION,	11);	// create
    design.addCommand(60, ZRF.JUMP,	3);
    design.addCommand(60, ZRF.LITERAL,	44);	// SB
    design.addCommand(60, ZRF.FUNCTION,	11);	// create
    design.addCommand(60, ZRF.PARAM,	0);	// $1
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.PARAM,	1);	// $2
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.PARAM,	2);	// $3
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.PARAM,	3);	// $4
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.PARAM,	4);	// $5
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.FUNCTION,	26);	// capture
    design.addCommand(60, ZRF.PROMOTE,	65);	// N
    design.addCommand(60, ZRF.FUNCTION,	25);	// to
    design.addCommand(60, ZRF.FUNCTION,	28);	// end

    design.addCommand(61, ZRF.FUNCTION,	24);	// from
    design.addCommand(61, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.IF,	4);
    design.addCommand(61, ZRF.LITERAL,	45);	// LC
    design.addCommand(61, ZRF.FUNCTION,	11);	// create
    design.addCommand(61, ZRF.JUMP,	3);
    design.addCommand(61, ZRF.LITERAL,	45);	// LC
    design.addCommand(61, ZRF.FUNCTION,	11);	// create
    design.addCommand(61, ZRF.PARAM,	0);	// $1
    design.addCommand(61, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(61, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.FUNCTION,	26);	// capture
    design.addCommand(61, ZRF.PROMOTE,	65);	// N
    design.addCommand(61, ZRF.FUNCTION,	25);	// to
    design.addCommand(61, ZRF.FUNCTION,	28);	// end

    design.addCommand(62, ZRF.FUNCTION,	24);	// from
    design.addCommand(62, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(62, ZRF.FUNCTION,	0);	// not
    design.addCommand(62, ZRF.IF,	4);
    design.addCommand(62, ZRF.LITERAL,	45);	// LC
    design.addCommand(62, ZRF.FUNCTION,	11);	// create
    design.addCommand(62, ZRF.JUMP,	3);
    design.addCommand(62, ZRF.LITERAL,	45);	// LC
    design.addCommand(62, ZRF.FUNCTION,	11);	// create
    design.addCommand(62, ZRF.PARAM,	0);	// $1
    design.addCommand(62, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(62, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(62, ZRF.FUNCTION,	20);	// verify
    design.addCommand(62, ZRF.PARAM,	1);	// $2
    design.addCommand(62, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(62, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(62, ZRF.FUNCTION,	20);	// verify
    design.addCommand(62, ZRF.FUNCTION,	26);	// capture
    design.addCommand(62, ZRF.PROMOTE,	65);	// N
    design.addCommand(62, ZRF.FUNCTION,	25);	// to
    design.addCommand(62, ZRF.FUNCTION,	28);	// end

    design.addCommand(63, ZRF.FUNCTION,	24);	// from
    design.addCommand(63, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.IF,	4);
    design.addCommand(63, ZRF.LITERAL,	45);	// LC
    design.addCommand(63, ZRF.FUNCTION,	11);	// create
    design.addCommand(63, ZRF.JUMP,	3);
    design.addCommand(63, ZRF.LITERAL,	45);	// LC
    design.addCommand(63, ZRF.FUNCTION,	11);	// create
    design.addCommand(63, ZRF.PARAM,	0);	// $1
    design.addCommand(63, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(63, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.PARAM,	1);	// $2
    design.addCommand(63, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(63, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.PARAM,	2);	// $3
    design.addCommand(63, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(63, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.FUNCTION,	26);	// capture
    design.addCommand(63, ZRF.PROMOTE,	65);	// N
    design.addCommand(63, ZRF.FUNCTION,	25);	// to
    design.addCommand(63, ZRF.FUNCTION,	28);	// end

    design.addCommand(64, ZRF.FUNCTION,	24);	// from
    design.addCommand(64, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.IF,	4);
    design.addCommand(64, ZRF.LITERAL,	45);	// LC
    design.addCommand(64, ZRF.FUNCTION,	11);	// create
    design.addCommand(64, ZRF.JUMP,	3);
    design.addCommand(64, ZRF.LITERAL,	46);	// LB
    design.addCommand(64, ZRF.FUNCTION,	11);	// create
    design.addCommand(64, ZRF.PARAM,	0);	// $1
    design.addCommand(64, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(64, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.FUNCTION,	26);	// capture
    design.addCommand(64, ZRF.PROMOTE,	65);	// N
    design.addCommand(64, ZRF.FUNCTION,	25);	// to
    design.addCommand(64, ZRF.FUNCTION,	28);	// end

    design.addCommand(65, ZRF.FUNCTION,	24);	// from
    design.addCommand(65, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(65, ZRF.FUNCTION,	0);	// not
    design.addCommand(65, ZRF.IF,	4);
    design.addCommand(65, ZRF.LITERAL,	45);	// LC
    design.addCommand(65, ZRF.FUNCTION,	11);	// create
    design.addCommand(65, ZRF.JUMP,	3);
    design.addCommand(65, ZRF.LITERAL,	46);	// LB
    design.addCommand(65, ZRF.FUNCTION,	11);	// create
    design.addCommand(65, ZRF.PARAM,	0);	// $1
    design.addCommand(65, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(65, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(65, ZRF.FUNCTION,	20);	// verify
    design.addCommand(65, ZRF.PARAM,	1);	// $2
    design.addCommand(65, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(65, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(65, ZRF.FUNCTION,	20);	// verify
    design.addCommand(65, ZRF.FUNCTION,	26);	// capture
    design.addCommand(65, ZRF.PROMOTE,	65);	// N
    design.addCommand(65, ZRF.FUNCTION,	25);	// to
    design.addCommand(65, ZRF.FUNCTION,	28);	// end

    design.addCommand(66, ZRF.FUNCTION,	24);	// from
    design.addCommand(66, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.IF,	4);
    design.addCommand(66, ZRF.LITERAL,	45);	// LC
    design.addCommand(66, ZRF.FUNCTION,	11);	// create
    design.addCommand(66, ZRF.JUMP,	3);
    design.addCommand(66, ZRF.LITERAL,	46);	// LB
    design.addCommand(66, ZRF.FUNCTION,	11);	// create
    design.addCommand(66, ZRF.PARAM,	0);	// $1
    design.addCommand(66, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(66, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.PARAM,	1);	// $2
    design.addCommand(66, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(66, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.PARAM,	2);	// $3
    design.addCommand(66, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(66, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.FUNCTION,	26);	// capture
    design.addCommand(66, ZRF.PROMOTE,	65);	// N
    design.addCommand(66, ZRF.FUNCTION,	25);	// to
    design.addCommand(66, ZRF.FUNCTION,	28);	// end

    design.addCommand(67, ZRF.FUNCTION,	24);	// from
    design.addCommand(67, ZRF.PARAM,	0);	// $1
    design.addCommand(67, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(67, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.MODE,	2);	// left-2-type
    design.addCommand(67, ZRF.FUNCTION,	25);	// to
    design.addCommand(67, ZRF.FUNCTION,	28);	// end

    design.addCommand(68, ZRF.FUNCTION,	24);	// from
    design.addCommand(68, ZRF.PARAM,	0);	// $1
    design.addCommand(68, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(68, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(68, ZRF.FUNCTION,	20);	// verify
    design.addCommand(68, ZRF.PARAM,	1);	// $2
    design.addCommand(68, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(68, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(68, ZRF.FUNCTION,	20);	// verify
    design.addCommand(68, ZRF.MODE,	2);	// left-2-type
    design.addCommand(68, ZRF.FUNCTION,	25);	// to
    design.addCommand(68, ZRF.FUNCTION,	28);	// end

    design.addCommand(69, ZRF.FUNCTION,	24);	// from
    design.addCommand(69, ZRF.PARAM,	0);	// $1
    design.addCommand(69, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(69, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.PARAM,	1);	// $2
    design.addCommand(69, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(69, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.PARAM,	2);	// $3
    design.addCommand(69, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(69, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.MODE,	2);	// left-2-type
    design.addCommand(69, ZRF.FUNCTION,	25);	// to
    design.addCommand(69, ZRF.FUNCTION,	28);	// end

    design.addCommand(70, ZRF.FUNCTION,	24);	// from
    design.addCommand(70, ZRF.PARAM,	0);	// $1
    design.addCommand(70, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(70, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.PARAM,	1);	// $2
    design.addCommand(70, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(70, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.PARAM,	2);	// $3
    design.addCommand(70, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(70, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.PARAM,	3);	// $4
    design.addCommand(70, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(70, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.MODE,	2);	// left-2-type
    design.addCommand(70, ZRF.FUNCTION,	25);	// to
    design.addCommand(70, ZRF.FUNCTION,	28);	// end

    design.addCommand(71, ZRF.FUNCTION,	24);	// from
    design.addCommand(71, ZRF.PARAM,	0);	// $1
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	20);	// verify
    design.addCommand(71, ZRF.PARAM,	1);	// $2
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	20);	// verify
    design.addCommand(71, ZRF.PARAM,	2);	// $3
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	20);	// verify
    design.addCommand(71, ZRF.PARAM,	3);	// $4
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	20);	// verify
    design.addCommand(71, ZRF.PARAM,	4);	// $5
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	20);	// verify
    design.addCommand(71, ZRF.MODE,	2);	// left-2-type
    design.addCommand(71, ZRF.FUNCTION,	25);	// to
    design.addCommand(71, ZRF.FUNCTION,	28);	// end

    design.addCommand(72, ZRF.FUNCTION,	24);	// from
    design.addCommand(72, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.IF,	4);
    design.addCommand(72, ZRF.LITERAL,	47);	// CG
    design.addCommand(72, ZRF.FUNCTION,	11);	// create
    design.addCommand(72, ZRF.JUMP,	3);
    design.addCommand(72, ZRF.LITERAL,	47);	// CG
    design.addCommand(72, ZRF.FUNCTION,	11);	// create
    design.addCommand(72, ZRF.PARAM,	0);	// $1
    design.addCommand(72, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(72, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.FUNCTION,	26);	// capture
    design.addCommand(72, ZRF.PROMOTE,	65);	// N
    design.addCommand(72, ZRF.MODE,	3);	// left-1-type
    design.addCommand(72, ZRF.FUNCTION,	25);	// to
    design.addCommand(72, ZRF.FUNCTION,	28);	// end

    design.addCommand(73, ZRF.FUNCTION,	24);	// from
    design.addCommand(73, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(73, ZRF.FUNCTION,	0);	// not
    design.addCommand(73, ZRF.IF,	4);
    design.addCommand(73, ZRF.LITERAL,	47);	// CG
    design.addCommand(73, ZRF.FUNCTION,	11);	// create
    design.addCommand(73, ZRF.JUMP,	3);
    design.addCommand(73, ZRF.LITERAL,	47);	// CG
    design.addCommand(73, ZRF.FUNCTION,	11);	// create
    design.addCommand(73, ZRF.PARAM,	0);	// $1
    design.addCommand(73, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(73, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(73, ZRF.FUNCTION,	20);	// verify
    design.addCommand(73, ZRF.PARAM,	1);	// $2
    design.addCommand(73, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(73, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(73, ZRF.FUNCTION,	20);	// verify
    design.addCommand(73, ZRF.FUNCTION,	26);	// capture
    design.addCommand(73, ZRF.PROMOTE,	65);	// N
    design.addCommand(73, ZRF.MODE,	3);	// left-1-type
    design.addCommand(73, ZRF.FUNCTION,	25);	// to
    design.addCommand(73, ZRF.FUNCTION,	28);	// end

    design.addCommand(74, ZRF.FUNCTION,	24);	// from
    design.addCommand(74, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.IF,	4);
    design.addCommand(74, ZRF.LITERAL,	47);	// CG
    design.addCommand(74, ZRF.FUNCTION,	11);	// create
    design.addCommand(74, ZRF.JUMP,	3);
    design.addCommand(74, ZRF.LITERAL,	47);	// CG
    design.addCommand(74, ZRF.FUNCTION,	11);	// create
    design.addCommand(74, ZRF.PARAM,	0);	// $1
    design.addCommand(74, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(74, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.PARAM,	1);	// $2
    design.addCommand(74, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(74, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.PARAM,	2);	// $3
    design.addCommand(74, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(74, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.FUNCTION,	26);	// capture
    design.addCommand(74, ZRF.PROMOTE,	65);	// N
    design.addCommand(74, ZRF.MODE,	3);	// left-1-type
    design.addCommand(74, ZRF.FUNCTION,	25);	// to
    design.addCommand(74, ZRF.FUNCTION,	28);	// end

    design.addCommand(75, ZRF.FUNCTION,	24);	// from
    design.addCommand(75, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.IF,	4);
    design.addCommand(75, ZRF.LITERAL,	47);	// CG
    design.addCommand(75, ZRF.FUNCTION,	11);	// create
    design.addCommand(75, ZRF.JUMP,	3);
    design.addCommand(75, ZRF.LITERAL,	47);	// CG
    design.addCommand(75, ZRF.FUNCTION,	11);	// create
    design.addCommand(75, ZRF.PARAM,	0);	// $1
    design.addCommand(75, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(75, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.PARAM,	1);	// $2
    design.addCommand(75, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(75, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.PARAM,	2);	// $3
    design.addCommand(75, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(75, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.PARAM,	3);	// $4
    design.addCommand(75, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(75, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.FUNCTION,	26);	// capture
    design.addCommand(75, ZRF.PROMOTE,	65);	// N
    design.addCommand(75, ZRF.MODE,	3);	// left-1-type
    design.addCommand(75, ZRF.FUNCTION,	25);	// to
    design.addCommand(75, ZRF.FUNCTION,	28);	// end

    design.addCommand(76, ZRF.FUNCTION,	24);	// from
    design.addCommand(76, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.IF,	4);
    design.addCommand(76, ZRF.LITERAL,	47);	// CG
    design.addCommand(76, ZRF.FUNCTION,	11);	// create
    design.addCommand(76, ZRF.JUMP,	3);
    design.addCommand(76, ZRF.LITERAL,	47);	// CG
    design.addCommand(76, ZRF.FUNCTION,	11);	// create
    design.addCommand(76, ZRF.PARAM,	0);	// $1
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.PARAM,	1);	// $2
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.PARAM,	2);	// $3
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.PARAM,	3);	// $4
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.PARAM,	4);	// $5
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.FUNCTION,	26);	// capture
    design.addCommand(76, ZRF.PROMOTE,	65);	// N
    design.addCommand(76, ZRF.MODE,	3);	// left-1-type
    design.addCommand(76, ZRF.FUNCTION,	25);	// to
    design.addCommand(76, ZRF.FUNCTION,	28);	// end

    design.addCommand(77, ZRF.FUNCTION,	24);	// from
    design.addCommand(77, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.IF,	4);
    design.addCommand(77, ZRF.LITERAL,	47);	// CG
    design.addCommand(77, ZRF.FUNCTION,	11);	// create
    design.addCommand(77, ZRF.JUMP,	3);
    design.addCommand(77, ZRF.LITERAL,	47);	// CG
    design.addCommand(77, ZRF.FUNCTION,	11);	// create
    design.addCommand(77, ZRF.PARAM,	0);	// $1
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PARAM,	1);	// $2
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PARAM,	2);	// $3
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PARAM,	3);	// $4
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PARAM,	4);	// $5
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PARAM,	5);	// $6
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.FUNCTION,	26);	// capture
    design.addCommand(77, ZRF.PROMOTE,	65);	// N
    design.addCommand(77, ZRF.MODE,	3);	// left-1-type
    design.addCommand(77, ZRF.FUNCTION,	25);	// to
    design.addCommand(77, ZRF.FUNCTION,	28);	// end

    design.addCommand(78, ZRF.FUNCTION,	24);	// from
    design.addCommand(78, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.IF,	4);
    design.addCommand(78, ZRF.LITERAL,	47);	// CG
    design.addCommand(78, ZRF.FUNCTION,	11);	// create
    design.addCommand(78, ZRF.JUMP,	3);
    design.addCommand(78, ZRF.LITERAL,	47);	// CG
    design.addCommand(78, ZRF.FUNCTION,	11);	// create
    design.addCommand(78, ZRF.PARAM,	0);	// $1
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PARAM,	1);	// $2
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PARAM,	2);	// $3
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PARAM,	3);	// $4
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PARAM,	4);	// $5
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PARAM,	5);	// $6
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PARAM,	6);	// $7
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.FUNCTION,	26);	// capture
    design.addCommand(78, ZRF.PROMOTE,	65);	// N
    design.addCommand(78, ZRF.MODE,	3);	// left-1-type
    design.addCommand(78, ZRF.FUNCTION,	25);	// to
    design.addCommand(78, ZRF.FUNCTION,	28);	// end

    design.addCommand(79, ZRF.FUNCTION,	24);	// from
    design.addCommand(79, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.IF,	4);
    design.addCommand(79, ZRF.LITERAL,	47);	// CG
    design.addCommand(79, ZRF.FUNCTION,	11);	// create
    design.addCommand(79, ZRF.JUMP,	3);
    design.addCommand(79, ZRF.LITERAL,	47);	// CG
    design.addCommand(79, ZRF.FUNCTION,	11);	// create
    design.addCommand(79, ZRF.PARAM,	0);	// $1
    design.addCommand(79, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(79, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.FUNCTION,	26);	// capture
    design.addCommand(79, ZRF.PROMOTE,	65);	// N
    design.addCommand(79, ZRF.FUNCTION,	25);	// to
    design.addCommand(79, ZRF.FUNCTION,	28);	// end

    design.addCommand(80, ZRF.FUNCTION,	24);	// from
    design.addCommand(80, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.IF,	4);
    design.addCommand(80, ZRF.LITERAL,	47);	// CG
    design.addCommand(80, ZRF.FUNCTION,	11);	// create
    design.addCommand(80, ZRF.JUMP,	3);
    design.addCommand(80, ZRF.LITERAL,	47);	// CG
    design.addCommand(80, ZRF.FUNCTION,	11);	// create
    design.addCommand(80, ZRF.PARAM,	0);	// $1
    design.addCommand(80, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(80, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.IF,	6);
    design.addCommand(80, ZRF.LITERAL,	65);	// N
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.IF,	3);
    design.addCommand(80, ZRF.LITERAL,	0);	// false
    design.addCommand(80, ZRF.JUMP,	2);
    design.addCommand(80, ZRF.LITERAL,	1);	// true
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.PARAM,	1);	// $2
    design.addCommand(80, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(80, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.FUNCTION,	26);	// capture
    design.addCommand(80, ZRF.PROMOTE,	65);	// N
    design.addCommand(80, ZRF.FUNCTION,	25);	// to
    design.addCommand(80, ZRF.FUNCTION,	28);	// end

    design.addCommand(81, ZRF.FUNCTION,	24);	// from
    design.addCommand(81, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.IF,	4);
    design.addCommand(81, ZRF.LITERAL,	47);	// CG
    design.addCommand(81, ZRF.FUNCTION,	11);	// create
    design.addCommand(81, ZRF.JUMP,	3);
    design.addCommand(81, ZRF.LITERAL,	47);	// CG
    design.addCommand(81, ZRF.FUNCTION,	11);	// create
    design.addCommand(81, ZRF.PARAM,	0);	// $1
    design.addCommand(81, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(81, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.IF,	6);
    design.addCommand(81, ZRF.LITERAL,	65);	// N
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.IF,	3);
    design.addCommand(81, ZRF.LITERAL,	0);	// false
    design.addCommand(81, ZRF.JUMP,	2);
    design.addCommand(81, ZRF.LITERAL,	1);	// true
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.PARAM,	1);	// $2
    design.addCommand(81, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(81, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.IF,	6);
    design.addCommand(81, ZRF.LITERAL,	65);	// N
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.IF,	3);
    design.addCommand(81, ZRF.LITERAL,	0);	// false
    design.addCommand(81, ZRF.JUMP,	2);
    design.addCommand(81, ZRF.LITERAL,	1);	// true
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.PARAM,	2);	// $3
    design.addCommand(81, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(81, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.FUNCTION,	26);	// capture
    design.addCommand(81, ZRF.PROMOTE,	65);	// N
    design.addCommand(81, ZRF.FUNCTION,	25);	// to
    design.addCommand(81, ZRF.FUNCTION,	28);	// end

    design.addCommand(82, ZRF.FUNCTION,	24);	// from
    design.addCommand(82, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.IF,	4);
    design.addCommand(82, ZRF.LITERAL,	47);	// CG
    design.addCommand(82, ZRF.FUNCTION,	11);	// create
    design.addCommand(82, ZRF.JUMP,	3);
    design.addCommand(82, ZRF.LITERAL,	47);	// CG
    design.addCommand(82, ZRF.FUNCTION,	11);	// create
    design.addCommand(82, ZRF.PARAM,	0);	// $1
    design.addCommand(82, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(82, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.IF,	6);
    design.addCommand(82, ZRF.LITERAL,	65);	// N
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.IF,	3);
    design.addCommand(82, ZRF.LITERAL,	0);	// false
    design.addCommand(82, ZRF.JUMP,	2);
    design.addCommand(82, ZRF.LITERAL,	1);	// true
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.PARAM,	1);	// $2
    design.addCommand(82, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(82, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.IF,	6);
    design.addCommand(82, ZRF.LITERAL,	65);	// N
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.IF,	3);
    design.addCommand(82, ZRF.LITERAL,	0);	// false
    design.addCommand(82, ZRF.JUMP,	2);
    design.addCommand(82, ZRF.LITERAL,	1);	// true
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.PARAM,	2);	// $3
    design.addCommand(82, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(82, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.IF,	6);
    design.addCommand(82, ZRF.LITERAL,	65);	// N
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.IF,	3);
    design.addCommand(82, ZRF.LITERAL,	0);	// false
    design.addCommand(82, ZRF.JUMP,	2);
    design.addCommand(82, ZRF.LITERAL,	1);	// true
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.PARAM,	3);	// $4
    design.addCommand(82, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(82, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.FUNCTION,	26);	// capture
    design.addCommand(82, ZRF.PROMOTE,	65);	// N
    design.addCommand(82, ZRF.FUNCTION,	25);	// to
    design.addCommand(82, ZRF.FUNCTION,	28);	// end

    design.addCommand(83, ZRF.FUNCTION,	24);	// from
    design.addCommand(83, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.IF,	4);
    design.addCommand(83, ZRF.LITERAL,	47);	// CG
    design.addCommand(83, ZRF.FUNCTION,	11);	// create
    design.addCommand(83, ZRF.JUMP,	3);
    design.addCommand(83, ZRF.LITERAL,	47);	// CG
    design.addCommand(83, ZRF.FUNCTION,	11);	// create
    design.addCommand(83, ZRF.PARAM,	0);	// $1
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.IF,	6);
    design.addCommand(83, ZRF.LITERAL,	65);	// N
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.IF,	3);
    design.addCommand(83, ZRF.LITERAL,	0);	// false
    design.addCommand(83, ZRF.JUMP,	2);
    design.addCommand(83, ZRF.LITERAL,	1);	// true
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.PARAM,	1);	// $2
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.IF,	6);
    design.addCommand(83, ZRF.LITERAL,	65);	// N
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.IF,	3);
    design.addCommand(83, ZRF.LITERAL,	0);	// false
    design.addCommand(83, ZRF.JUMP,	2);
    design.addCommand(83, ZRF.LITERAL,	1);	// true
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.PARAM,	2);	// $3
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.IF,	6);
    design.addCommand(83, ZRF.LITERAL,	65);	// N
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.IF,	3);
    design.addCommand(83, ZRF.LITERAL,	0);	// false
    design.addCommand(83, ZRF.JUMP,	2);
    design.addCommand(83, ZRF.LITERAL,	1);	// true
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.PARAM,	3);	// $4
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.IF,	6);
    design.addCommand(83, ZRF.LITERAL,	65);	// N
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.IF,	3);
    design.addCommand(83, ZRF.LITERAL,	0);	// false
    design.addCommand(83, ZRF.JUMP,	2);
    design.addCommand(83, ZRF.LITERAL,	1);	// true
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.PARAM,	4);	// $5
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.FUNCTION,	26);	// capture
    design.addCommand(83, ZRF.PROMOTE,	65);	// N
    design.addCommand(83, ZRF.FUNCTION,	25);	// to
    design.addCommand(83, ZRF.FUNCTION,	28);	// end

    design.addCommand(84, ZRF.FUNCTION,	24);	// from
    design.addCommand(84, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.IF,	4);
    design.addCommand(84, ZRF.LITERAL,	47);	// CG
    design.addCommand(84, ZRF.FUNCTION,	11);	// create
    design.addCommand(84, ZRF.JUMP,	3);
    design.addCommand(84, ZRF.LITERAL,	47);	// CG
    design.addCommand(84, ZRF.FUNCTION,	11);	// create
    design.addCommand(84, ZRF.PARAM,	0);	// $1
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.IF,	6);
    design.addCommand(84, ZRF.LITERAL,	65);	// N
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.IF,	3);
    design.addCommand(84, ZRF.LITERAL,	0);	// false
    design.addCommand(84, ZRF.JUMP,	2);
    design.addCommand(84, ZRF.LITERAL,	1);	// true
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PARAM,	1);	// $2
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.IF,	6);
    design.addCommand(84, ZRF.LITERAL,	65);	// N
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.IF,	3);
    design.addCommand(84, ZRF.LITERAL,	0);	// false
    design.addCommand(84, ZRF.JUMP,	2);
    design.addCommand(84, ZRF.LITERAL,	1);	// true
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PARAM,	2);	// $3
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.IF,	6);
    design.addCommand(84, ZRF.LITERAL,	65);	// N
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.IF,	3);
    design.addCommand(84, ZRF.LITERAL,	0);	// false
    design.addCommand(84, ZRF.JUMP,	2);
    design.addCommand(84, ZRF.LITERAL,	1);	// true
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PARAM,	3);	// $4
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.IF,	6);
    design.addCommand(84, ZRF.LITERAL,	65);	// N
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.IF,	3);
    design.addCommand(84, ZRF.LITERAL,	0);	// false
    design.addCommand(84, ZRF.JUMP,	2);
    design.addCommand(84, ZRF.LITERAL,	1);	// true
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PARAM,	4);	// $5
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.IF,	6);
    design.addCommand(84, ZRF.LITERAL,	65);	// N
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.IF,	3);
    design.addCommand(84, ZRF.LITERAL,	0);	// false
    design.addCommand(84, ZRF.JUMP,	2);
    design.addCommand(84, ZRF.LITERAL,	1);	// true
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PARAM,	5);	// $6
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.FUNCTION,	26);	// capture
    design.addCommand(84, ZRF.PROMOTE,	65);	// N
    design.addCommand(84, ZRF.FUNCTION,	25);	// to
    design.addCommand(84, ZRF.FUNCTION,	28);	// end

    design.addCommand(85, ZRF.FUNCTION,	24);	// from
    design.addCommand(85, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	4);
    design.addCommand(85, ZRF.LITERAL,	47);	// CG
    design.addCommand(85, ZRF.FUNCTION,	11);	// create
    design.addCommand(85, ZRF.JUMP,	3);
    design.addCommand(85, ZRF.LITERAL,	47);	// CG
    design.addCommand(85, ZRF.FUNCTION,	11);	// create
    design.addCommand(85, ZRF.PARAM,	0);	// $1
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	6);
    design.addCommand(85, ZRF.LITERAL,	65);	// N
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.IF,	3);
    design.addCommand(85, ZRF.LITERAL,	0);	// false
    design.addCommand(85, ZRF.JUMP,	2);
    design.addCommand(85, ZRF.LITERAL,	1);	// true
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PARAM,	1);	// $2
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	6);
    design.addCommand(85, ZRF.LITERAL,	65);	// N
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.IF,	3);
    design.addCommand(85, ZRF.LITERAL,	0);	// false
    design.addCommand(85, ZRF.JUMP,	2);
    design.addCommand(85, ZRF.LITERAL,	1);	// true
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PARAM,	2);	// $3
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	6);
    design.addCommand(85, ZRF.LITERAL,	65);	// N
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.IF,	3);
    design.addCommand(85, ZRF.LITERAL,	0);	// false
    design.addCommand(85, ZRF.JUMP,	2);
    design.addCommand(85, ZRF.LITERAL,	1);	// true
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PARAM,	3);	// $4
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	6);
    design.addCommand(85, ZRF.LITERAL,	65);	// N
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.IF,	3);
    design.addCommand(85, ZRF.LITERAL,	0);	// false
    design.addCommand(85, ZRF.JUMP,	2);
    design.addCommand(85, ZRF.LITERAL,	1);	// true
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PARAM,	4);	// $5
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	6);
    design.addCommand(85, ZRF.LITERAL,	65);	// N
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.IF,	3);
    design.addCommand(85, ZRF.LITERAL,	0);	// false
    design.addCommand(85, ZRF.JUMP,	2);
    design.addCommand(85, ZRF.LITERAL,	1);	// true
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PARAM,	5);	// $6
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	6);
    design.addCommand(85, ZRF.LITERAL,	65);	// N
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.IF,	3);
    design.addCommand(85, ZRF.LITERAL,	0);	// false
    design.addCommand(85, ZRF.JUMP,	2);
    design.addCommand(85, ZRF.LITERAL,	1);	// true
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PARAM,	6);	// $7
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.FUNCTION,	26);	// capture
    design.addCommand(85, ZRF.PROMOTE,	65);	// N
    design.addCommand(85, ZRF.FUNCTION,	25);	// to
    design.addCommand(85, ZRF.FUNCTION,	28);	// end

    design.addCommand(86, ZRF.FUNCTION,	24);	// from
    design.addCommand(86, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(86, ZRF.FUNCTION,	0);	// not
    design.addCommand(86, ZRF.IF,	4);
    design.addCommand(86, ZRF.LITERAL,	47);	// CG
    design.addCommand(86, ZRF.FUNCTION,	11);	// create
    design.addCommand(86, ZRF.JUMP,	3);
    design.addCommand(86, ZRF.LITERAL,	48);	// EC
    design.addCommand(86, ZRF.FUNCTION,	11);	// create
    design.addCommand(86, ZRF.PARAM,	0);	// $1
    design.addCommand(86, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(86, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(86, ZRF.FUNCTION,	20);	// verify
    design.addCommand(86, ZRF.FUNCTION,	26);	// capture
    design.addCommand(86, ZRF.PROMOTE,	65);	// N
    design.addCommand(86, ZRF.MODE,	3);	// left-1-type
    design.addCommand(86, ZRF.FUNCTION,	25);	// to
    design.addCommand(86, ZRF.FUNCTION,	28);	// end

    design.addCommand(87, ZRF.FUNCTION,	24);	// from
    design.addCommand(87, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(87, ZRF.FUNCTION,	0);	// not
    design.addCommand(87, ZRF.IF,	4);
    design.addCommand(87, ZRF.LITERAL,	47);	// CG
    design.addCommand(87, ZRF.FUNCTION,	11);	// create
    design.addCommand(87, ZRF.JUMP,	3);
    design.addCommand(87, ZRF.LITERAL,	48);	// EC
    design.addCommand(87, ZRF.FUNCTION,	11);	// create
    design.addCommand(87, ZRF.PARAM,	0);	// $1
    design.addCommand(87, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(87, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(87, ZRF.FUNCTION,	20);	// verify
    design.addCommand(87, ZRF.PARAM,	1);	// $2
    design.addCommand(87, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(87, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(87, ZRF.FUNCTION,	20);	// verify
    design.addCommand(87, ZRF.FUNCTION,	26);	// capture
    design.addCommand(87, ZRF.PROMOTE,	65);	// N
    design.addCommand(87, ZRF.MODE,	3);	// left-1-type
    design.addCommand(87, ZRF.FUNCTION,	25);	// to
    design.addCommand(87, ZRF.FUNCTION,	28);	// end

    design.addCommand(88, ZRF.FUNCTION,	24);	// from
    design.addCommand(88, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(88, ZRF.FUNCTION,	0);	// not
    design.addCommand(88, ZRF.IF,	4);
    design.addCommand(88, ZRF.LITERAL,	47);	// CG
    design.addCommand(88, ZRF.FUNCTION,	11);	// create
    design.addCommand(88, ZRF.JUMP,	3);
    design.addCommand(88, ZRF.LITERAL,	48);	// EC
    design.addCommand(88, ZRF.FUNCTION,	11);	// create
    design.addCommand(88, ZRF.PARAM,	0);	// $1
    design.addCommand(88, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(88, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(88, ZRF.FUNCTION,	20);	// verify
    design.addCommand(88, ZRF.PARAM,	1);	// $2
    design.addCommand(88, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(88, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(88, ZRF.FUNCTION,	20);	// verify
    design.addCommand(88, ZRF.PARAM,	2);	// $3
    design.addCommand(88, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(88, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(88, ZRF.FUNCTION,	20);	// verify
    design.addCommand(88, ZRF.FUNCTION,	26);	// capture
    design.addCommand(88, ZRF.PROMOTE,	65);	// N
    design.addCommand(88, ZRF.MODE,	3);	// left-1-type
    design.addCommand(88, ZRF.FUNCTION,	25);	// to
    design.addCommand(88, ZRF.FUNCTION,	28);	// end

    design.addCommand(89, ZRF.FUNCTION,	24);	// from
    design.addCommand(89, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(89, ZRF.FUNCTION,	0);	// not
    design.addCommand(89, ZRF.IF,	4);
    design.addCommand(89, ZRF.LITERAL,	47);	// CG
    design.addCommand(89, ZRF.FUNCTION,	11);	// create
    design.addCommand(89, ZRF.JUMP,	3);
    design.addCommand(89, ZRF.LITERAL,	48);	// EC
    design.addCommand(89, ZRF.FUNCTION,	11);	// create
    design.addCommand(89, ZRF.PARAM,	0);	// $1
    design.addCommand(89, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(89, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(89, ZRF.FUNCTION,	20);	// verify
    design.addCommand(89, ZRF.PARAM,	1);	// $2
    design.addCommand(89, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(89, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(89, ZRF.FUNCTION,	20);	// verify
    design.addCommand(89, ZRF.PARAM,	2);	// $3
    design.addCommand(89, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(89, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(89, ZRF.FUNCTION,	20);	// verify
    design.addCommand(89, ZRF.PARAM,	3);	// $4
    design.addCommand(89, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(89, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(89, ZRF.FUNCTION,	20);	// verify
    design.addCommand(89, ZRF.FUNCTION,	26);	// capture
    design.addCommand(89, ZRF.PROMOTE,	65);	// N
    design.addCommand(89, ZRF.MODE,	3);	// left-1-type
    design.addCommand(89, ZRF.FUNCTION,	25);	// to
    design.addCommand(89, ZRF.FUNCTION,	28);	// end

    design.addCommand(90, ZRF.FUNCTION,	24);	// from
    design.addCommand(90, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(90, ZRF.FUNCTION,	0);	// not
    design.addCommand(90, ZRF.IF,	4);
    design.addCommand(90, ZRF.LITERAL,	47);	// CG
    design.addCommand(90, ZRF.FUNCTION,	11);	// create
    design.addCommand(90, ZRF.JUMP,	3);
    design.addCommand(90, ZRF.LITERAL,	48);	// EC
    design.addCommand(90, ZRF.FUNCTION,	11);	// create
    design.addCommand(90, ZRF.PARAM,	0);	// $1
    design.addCommand(90, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(90, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(90, ZRF.FUNCTION,	20);	// verify
    design.addCommand(90, ZRF.PARAM,	1);	// $2
    design.addCommand(90, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(90, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(90, ZRF.FUNCTION,	20);	// verify
    design.addCommand(90, ZRF.PARAM,	2);	// $3
    design.addCommand(90, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(90, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(90, ZRF.FUNCTION,	20);	// verify
    design.addCommand(90, ZRF.PARAM,	3);	// $4
    design.addCommand(90, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(90, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(90, ZRF.FUNCTION,	20);	// verify
    design.addCommand(90, ZRF.PARAM,	4);	// $5
    design.addCommand(90, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(90, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(90, ZRF.FUNCTION,	20);	// verify
    design.addCommand(90, ZRF.FUNCTION,	26);	// capture
    design.addCommand(90, ZRF.PROMOTE,	65);	// N
    design.addCommand(90, ZRF.MODE,	3);	// left-1-type
    design.addCommand(90, ZRF.FUNCTION,	25);	// to
    design.addCommand(90, ZRF.FUNCTION,	28);	// end

    design.addCommand(91, ZRF.FUNCTION,	24);	// from
    design.addCommand(91, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(91, ZRF.FUNCTION,	0);	// not
    design.addCommand(91, ZRF.IF,	4);
    design.addCommand(91, ZRF.LITERAL,	47);	// CG
    design.addCommand(91, ZRF.FUNCTION,	11);	// create
    design.addCommand(91, ZRF.JUMP,	3);
    design.addCommand(91, ZRF.LITERAL,	48);	// EC
    design.addCommand(91, ZRF.FUNCTION,	11);	// create
    design.addCommand(91, ZRF.PARAM,	0);	// $1
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.PARAM,	1);	// $2
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.PARAM,	2);	// $3
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.PARAM,	3);	// $4
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.PARAM,	4);	// $5
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.PARAM,	5);	// $6
    design.addCommand(91, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(91, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(91, ZRF.FUNCTION,	20);	// verify
    design.addCommand(91, ZRF.FUNCTION,	26);	// capture
    design.addCommand(91, ZRF.PROMOTE,	65);	// N
    design.addCommand(91, ZRF.MODE,	3);	// left-1-type
    design.addCommand(91, ZRF.FUNCTION,	25);	// to
    design.addCommand(91, ZRF.FUNCTION,	28);	// end

    design.addCommand(92, ZRF.FUNCTION,	24);	// from
    design.addCommand(92, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(92, ZRF.FUNCTION,	0);	// not
    design.addCommand(92, ZRF.IF,	4);
    design.addCommand(92, ZRF.LITERAL,	47);	// CG
    design.addCommand(92, ZRF.FUNCTION,	11);	// create
    design.addCommand(92, ZRF.JUMP,	3);
    design.addCommand(92, ZRF.LITERAL,	48);	// EC
    design.addCommand(92, ZRF.FUNCTION,	11);	// create
    design.addCommand(92, ZRF.PARAM,	0);	// $1
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PARAM,	1);	// $2
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PARAM,	2);	// $3
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PARAM,	3);	// $4
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PARAM,	4);	// $5
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PARAM,	5);	// $6
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.PARAM,	6);	// $7
    design.addCommand(92, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(92, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(92, ZRF.FUNCTION,	20);	// verify
    design.addCommand(92, ZRF.FUNCTION,	26);	// capture
    design.addCommand(92, ZRF.PROMOTE,	65);	// N
    design.addCommand(92, ZRF.MODE,	3);	// left-1-type
    design.addCommand(92, ZRF.FUNCTION,	25);	// to
    design.addCommand(92, ZRF.FUNCTION,	28);	// end

    design.addCommand(93, ZRF.FUNCTION,	24);	// from
    design.addCommand(93, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(93, ZRF.FUNCTION,	0);	// not
    design.addCommand(93, ZRF.IF,	4);
    design.addCommand(93, ZRF.LITERAL,	47);	// CG
    design.addCommand(93, ZRF.FUNCTION,	11);	// create
    design.addCommand(93, ZRF.JUMP,	3);
    design.addCommand(93, ZRF.LITERAL,	48);	// EC
    design.addCommand(93, ZRF.FUNCTION,	11);	// create
    design.addCommand(93, ZRF.PARAM,	0);	// $1
    design.addCommand(93, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(93, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(93, ZRF.FUNCTION,	20);	// verify
    design.addCommand(93, ZRF.FUNCTION,	26);	// capture
    design.addCommand(93, ZRF.PROMOTE,	65);	// N
    design.addCommand(93, ZRF.FUNCTION,	25);	// to
    design.addCommand(93, ZRF.FUNCTION,	28);	// end

    design.addCommand(94, ZRF.FUNCTION,	24);	// from
    design.addCommand(94, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(94, ZRF.FUNCTION,	0);	// not
    design.addCommand(94, ZRF.IF,	4);
    design.addCommand(94, ZRF.LITERAL,	47);	// CG
    design.addCommand(94, ZRF.FUNCTION,	11);	// create
    design.addCommand(94, ZRF.JUMP,	3);
    design.addCommand(94, ZRF.LITERAL,	48);	// EC
    design.addCommand(94, ZRF.FUNCTION,	11);	// create
    design.addCommand(94, ZRF.PARAM,	0);	// $1
    design.addCommand(94, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(94, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(94, ZRF.FUNCTION,	0);	// not
    design.addCommand(94, ZRF.IF,	6);
    design.addCommand(94, ZRF.LITERAL,	65);	// N
    design.addCommand(94, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(94, ZRF.IF,	3);
    design.addCommand(94, ZRF.LITERAL,	0);	// false
    design.addCommand(94, ZRF.JUMP,	2);
    design.addCommand(94, ZRF.LITERAL,	1);	// true
    design.addCommand(94, ZRF.FUNCTION,	20);	// verify
    design.addCommand(94, ZRF.PARAM,	1);	// $2
    design.addCommand(94, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(94, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(94, ZRF.FUNCTION,	20);	// verify
    design.addCommand(94, ZRF.FUNCTION,	26);	// capture
    design.addCommand(94, ZRF.PROMOTE,	65);	// N
    design.addCommand(94, ZRF.FUNCTION,	25);	// to
    design.addCommand(94, ZRF.FUNCTION,	28);	// end

    design.addCommand(95, ZRF.FUNCTION,	24);	// from
    design.addCommand(95, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(95, ZRF.FUNCTION,	0);	// not
    design.addCommand(95, ZRF.IF,	4);
    design.addCommand(95, ZRF.LITERAL,	47);	// CG
    design.addCommand(95, ZRF.FUNCTION,	11);	// create
    design.addCommand(95, ZRF.JUMP,	3);
    design.addCommand(95, ZRF.LITERAL,	48);	// EC
    design.addCommand(95, ZRF.FUNCTION,	11);	// create
    design.addCommand(95, ZRF.PARAM,	0);	// $1
    design.addCommand(95, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(95, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(95, ZRF.FUNCTION,	0);	// not
    design.addCommand(95, ZRF.IF,	6);
    design.addCommand(95, ZRF.LITERAL,	65);	// N
    design.addCommand(95, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(95, ZRF.IF,	3);
    design.addCommand(95, ZRF.LITERAL,	0);	// false
    design.addCommand(95, ZRF.JUMP,	2);
    design.addCommand(95, ZRF.LITERAL,	1);	// true
    design.addCommand(95, ZRF.FUNCTION,	20);	// verify
    design.addCommand(95, ZRF.PARAM,	1);	// $2
    design.addCommand(95, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(95, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(95, ZRF.FUNCTION,	0);	// not
    design.addCommand(95, ZRF.IF,	6);
    design.addCommand(95, ZRF.LITERAL,	65);	// N
    design.addCommand(95, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(95, ZRF.IF,	3);
    design.addCommand(95, ZRF.LITERAL,	0);	// false
    design.addCommand(95, ZRF.JUMP,	2);
    design.addCommand(95, ZRF.LITERAL,	1);	// true
    design.addCommand(95, ZRF.FUNCTION,	20);	// verify
    design.addCommand(95, ZRF.PARAM,	2);	// $3
    design.addCommand(95, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(95, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(95, ZRF.FUNCTION,	20);	// verify
    design.addCommand(95, ZRF.FUNCTION,	26);	// capture
    design.addCommand(95, ZRF.PROMOTE,	65);	// N
    design.addCommand(95, ZRF.FUNCTION,	25);	// to
    design.addCommand(95, ZRF.FUNCTION,	28);	// end

    design.addCommand(96, ZRF.FUNCTION,	24);	// from
    design.addCommand(96, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(96, ZRF.FUNCTION,	0);	// not
    design.addCommand(96, ZRF.IF,	4);
    design.addCommand(96, ZRF.LITERAL,	47);	// CG
    design.addCommand(96, ZRF.FUNCTION,	11);	// create
    design.addCommand(96, ZRF.JUMP,	3);
    design.addCommand(96, ZRF.LITERAL,	48);	// EC
    design.addCommand(96, ZRF.FUNCTION,	11);	// create
    design.addCommand(96, ZRF.PARAM,	0);	// $1
    design.addCommand(96, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(96, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(96, ZRF.FUNCTION,	0);	// not
    design.addCommand(96, ZRF.IF,	6);
    design.addCommand(96, ZRF.LITERAL,	65);	// N
    design.addCommand(96, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(96, ZRF.IF,	3);
    design.addCommand(96, ZRF.LITERAL,	0);	// false
    design.addCommand(96, ZRF.JUMP,	2);
    design.addCommand(96, ZRF.LITERAL,	1);	// true
    design.addCommand(96, ZRF.FUNCTION,	20);	// verify
    design.addCommand(96, ZRF.PARAM,	1);	// $2
    design.addCommand(96, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(96, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(96, ZRF.FUNCTION,	0);	// not
    design.addCommand(96, ZRF.IF,	6);
    design.addCommand(96, ZRF.LITERAL,	65);	// N
    design.addCommand(96, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(96, ZRF.IF,	3);
    design.addCommand(96, ZRF.LITERAL,	0);	// false
    design.addCommand(96, ZRF.JUMP,	2);
    design.addCommand(96, ZRF.LITERAL,	1);	// true
    design.addCommand(96, ZRF.FUNCTION,	20);	// verify
    design.addCommand(96, ZRF.PARAM,	2);	// $3
    design.addCommand(96, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(96, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(96, ZRF.FUNCTION,	0);	// not
    design.addCommand(96, ZRF.IF,	6);
    design.addCommand(96, ZRF.LITERAL,	65);	// N
    design.addCommand(96, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(96, ZRF.IF,	3);
    design.addCommand(96, ZRF.LITERAL,	0);	// false
    design.addCommand(96, ZRF.JUMP,	2);
    design.addCommand(96, ZRF.LITERAL,	1);	// true
    design.addCommand(96, ZRF.FUNCTION,	20);	// verify
    design.addCommand(96, ZRF.PARAM,	3);	// $4
    design.addCommand(96, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(96, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(96, ZRF.FUNCTION,	20);	// verify
    design.addCommand(96, ZRF.FUNCTION,	26);	// capture
    design.addCommand(96, ZRF.PROMOTE,	65);	// N
    design.addCommand(96, ZRF.FUNCTION,	25);	// to
    design.addCommand(96, ZRF.FUNCTION,	28);	// end

    design.addCommand(97, ZRF.FUNCTION,	24);	// from
    design.addCommand(97, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(97, ZRF.FUNCTION,	0);	// not
    design.addCommand(97, ZRF.IF,	4);
    design.addCommand(97, ZRF.LITERAL,	47);	// CG
    design.addCommand(97, ZRF.FUNCTION,	11);	// create
    design.addCommand(97, ZRF.JUMP,	3);
    design.addCommand(97, ZRF.LITERAL,	48);	// EC
    design.addCommand(97, ZRF.FUNCTION,	11);	// create
    design.addCommand(97, ZRF.PARAM,	0);	// $1
    design.addCommand(97, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(97, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(97, ZRF.FUNCTION,	0);	// not
    design.addCommand(97, ZRF.IF,	6);
    design.addCommand(97, ZRF.LITERAL,	65);	// N
    design.addCommand(97, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(97, ZRF.IF,	3);
    design.addCommand(97, ZRF.LITERAL,	0);	// false
    design.addCommand(97, ZRF.JUMP,	2);
    design.addCommand(97, ZRF.LITERAL,	1);	// true
    design.addCommand(97, ZRF.FUNCTION,	20);	// verify
    design.addCommand(97, ZRF.PARAM,	1);	// $2
    design.addCommand(97, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(97, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(97, ZRF.FUNCTION,	0);	// not
    design.addCommand(97, ZRF.IF,	6);
    design.addCommand(97, ZRF.LITERAL,	65);	// N
    design.addCommand(97, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(97, ZRF.IF,	3);
    design.addCommand(97, ZRF.LITERAL,	0);	// false
    design.addCommand(97, ZRF.JUMP,	2);
    design.addCommand(97, ZRF.LITERAL,	1);	// true
    design.addCommand(97, ZRF.FUNCTION,	20);	// verify
    design.addCommand(97, ZRF.PARAM,	2);	// $3
    design.addCommand(97, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(97, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(97, ZRF.FUNCTION,	0);	// not
    design.addCommand(97, ZRF.IF,	6);
    design.addCommand(97, ZRF.LITERAL,	65);	// N
    design.addCommand(97, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(97, ZRF.IF,	3);
    design.addCommand(97, ZRF.LITERAL,	0);	// false
    design.addCommand(97, ZRF.JUMP,	2);
    design.addCommand(97, ZRF.LITERAL,	1);	// true
    design.addCommand(97, ZRF.FUNCTION,	20);	// verify
    design.addCommand(97, ZRF.PARAM,	3);	// $4
    design.addCommand(97, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(97, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(97, ZRF.FUNCTION,	0);	// not
    design.addCommand(97, ZRF.IF,	6);
    design.addCommand(97, ZRF.LITERAL,	65);	// N
    design.addCommand(97, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(97, ZRF.IF,	3);
    design.addCommand(97, ZRF.LITERAL,	0);	// false
    design.addCommand(97, ZRF.JUMP,	2);
    design.addCommand(97, ZRF.LITERAL,	1);	// true
    design.addCommand(97, ZRF.FUNCTION,	20);	// verify
    design.addCommand(97, ZRF.PARAM,	4);	// $5
    design.addCommand(97, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(97, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(97, ZRF.FUNCTION,	20);	// verify
    design.addCommand(97, ZRF.FUNCTION,	26);	// capture
    design.addCommand(97, ZRF.PROMOTE,	65);	// N
    design.addCommand(97, ZRF.FUNCTION,	25);	// to
    design.addCommand(97, ZRF.FUNCTION,	28);	// end

    design.addCommand(98, ZRF.FUNCTION,	24);	// from
    design.addCommand(98, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(98, ZRF.FUNCTION,	0);	// not
    design.addCommand(98, ZRF.IF,	4);
    design.addCommand(98, ZRF.LITERAL,	47);	// CG
    design.addCommand(98, ZRF.FUNCTION,	11);	// create
    design.addCommand(98, ZRF.JUMP,	3);
    design.addCommand(98, ZRF.LITERAL,	48);	// EC
    design.addCommand(98, ZRF.FUNCTION,	11);	// create
    design.addCommand(98, ZRF.PARAM,	0);	// $1
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(98, ZRF.FUNCTION,	0);	// not
    design.addCommand(98, ZRF.IF,	6);
    design.addCommand(98, ZRF.LITERAL,	65);	// N
    design.addCommand(98, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(98, ZRF.IF,	3);
    design.addCommand(98, ZRF.LITERAL,	0);	// false
    design.addCommand(98, ZRF.JUMP,	2);
    design.addCommand(98, ZRF.LITERAL,	1);	// true
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.PARAM,	1);	// $2
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(98, ZRF.FUNCTION,	0);	// not
    design.addCommand(98, ZRF.IF,	6);
    design.addCommand(98, ZRF.LITERAL,	65);	// N
    design.addCommand(98, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(98, ZRF.IF,	3);
    design.addCommand(98, ZRF.LITERAL,	0);	// false
    design.addCommand(98, ZRF.JUMP,	2);
    design.addCommand(98, ZRF.LITERAL,	1);	// true
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.PARAM,	2);	// $3
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(98, ZRF.FUNCTION,	0);	// not
    design.addCommand(98, ZRF.IF,	6);
    design.addCommand(98, ZRF.LITERAL,	65);	// N
    design.addCommand(98, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(98, ZRF.IF,	3);
    design.addCommand(98, ZRF.LITERAL,	0);	// false
    design.addCommand(98, ZRF.JUMP,	2);
    design.addCommand(98, ZRF.LITERAL,	1);	// true
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.PARAM,	3);	// $4
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(98, ZRF.FUNCTION,	0);	// not
    design.addCommand(98, ZRF.IF,	6);
    design.addCommand(98, ZRF.LITERAL,	65);	// N
    design.addCommand(98, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(98, ZRF.IF,	3);
    design.addCommand(98, ZRF.LITERAL,	0);	// false
    design.addCommand(98, ZRF.JUMP,	2);
    design.addCommand(98, ZRF.LITERAL,	1);	// true
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.PARAM,	4);	// $5
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(98, ZRF.FUNCTION,	0);	// not
    design.addCommand(98, ZRF.IF,	6);
    design.addCommand(98, ZRF.LITERAL,	65);	// N
    design.addCommand(98, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(98, ZRF.IF,	3);
    design.addCommand(98, ZRF.LITERAL,	0);	// false
    design.addCommand(98, ZRF.JUMP,	2);
    design.addCommand(98, ZRF.LITERAL,	1);	// true
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.PARAM,	5);	// $6
    design.addCommand(98, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(98, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(98, ZRF.FUNCTION,	20);	// verify
    design.addCommand(98, ZRF.FUNCTION,	26);	// capture
    design.addCommand(98, ZRF.PROMOTE,	65);	// N
    design.addCommand(98, ZRF.FUNCTION,	25);	// to
    design.addCommand(98, ZRF.FUNCTION,	28);	// end

    design.addCommand(99, ZRF.FUNCTION,	24);	// from
    design.addCommand(99, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(99, ZRF.FUNCTION,	0);	// not
    design.addCommand(99, ZRF.IF,	4);
    design.addCommand(99, ZRF.LITERAL,	47);	// CG
    design.addCommand(99, ZRF.FUNCTION,	11);	// create
    design.addCommand(99, ZRF.JUMP,	3);
    design.addCommand(99, ZRF.LITERAL,	48);	// EC
    design.addCommand(99, ZRF.FUNCTION,	11);	// create
    design.addCommand(99, ZRF.PARAM,	0);	// $1
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(99, ZRF.FUNCTION,	0);	// not
    design.addCommand(99, ZRF.IF,	6);
    design.addCommand(99, ZRF.LITERAL,	65);	// N
    design.addCommand(99, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(99, ZRF.IF,	3);
    design.addCommand(99, ZRF.LITERAL,	0);	// false
    design.addCommand(99, ZRF.JUMP,	2);
    design.addCommand(99, ZRF.LITERAL,	1);	// true
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PARAM,	1);	// $2
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(99, ZRF.FUNCTION,	0);	// not
    design.addCommand(99, ZRF.IF,	6);
    design.addCommand(99, ZRF.LITERAL,	65);	// N
    design.addCommand(99, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(99, ZRF.IF,	3);
    design.addCommand(99, ZRF.LITERAL,	0);	// false
    design.addCommand(99, ZRF.JUMP,	2);
    design.addCommand(99, ZRF.LITERAL,	1);	// true
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PARAM,	2);	// $3
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(99, ZRF.FUNCTION,	0);	// not
    design.addCommand(99, ZRF.IF,	6);
    design.addCommand(99, ZRF.LITERAL,	65);	// N
    design.addCommand(99, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(99, ZRF.IF,	3);
    design.addCommand(99, ZRF.LITERAL,	0);	// false
    design.addCommand(99, ZRF.JUMP,	2);
    design.addCommand(99, ZRF.LITERAL,	1);	// true
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PARAM,	3);	// $4
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(99, ZRF.FUNCTION,	0);	// not
    design.addCommand(99, ZRF.IF,	6);
    design.addCommand(99, ZRF.LITERAL,	65);	// N
    design.addCommand(99, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(99, ZRF.IF,	3);
    design.addCommand(99, ZRF.LITERAL,	0);	// false
    design.addCommand(99, ZRF.JUMP,	2);
    design.addCommand(99, ZRF.LITERAL,	1);	// true
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PARAM,	4);	// $5
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(99, ZRF.FUNCTION,	0);	// not
    design.addCommand(99, ZRF.IF,	6);
    design.addCommand(99, ZRF.LITERAL,	65);	// N
    design.addCommand(99, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(99, ZRF.IF,	3);
    design.addCommand(99, ZRF.LITERAL,	0);	// false
    design.addCommand(99, ZRF.JUMP,	2);
    design.addCommand(99, ZRF.LITERAL,	1);	// true
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PARAM,	5);	// $6
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(99, ZRF.FUNCTION,	0);	// not
    design.addCommand(99, ZRF.IF,	6);
    design.addCommand(99, ZRF.LITERAL,	65);	// N
    design.addCommand(99, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(99, ZRF.IF,	3);
    design.addCommand(99, ZRF.LITERAL,	0);	// false
    design.addCommand(99, ZRF.JUMP,	2);
    design.addCommand(99, ZRF.LITERAL,	1);	// true
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.PARAM,	6);	// $7
    design.addCommand(99, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(99, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(99, ZRF.FUNCTION,	20);	// verify
    design.addCommand(99, ZRF.FUNCTION,	26);	// capture
    design.addCommand(99, ZRF.PROMOTE,	65);	// N
    design.addCommand(99, ZRF.FUNCTION,	25);	// to
    design.addCommand(99, ZRF.FUNCTION,	28);	// end

    design.addCommand(100, ZRF.FUNCTION,	24);	// from
    design.addCommand(100, ZRF.PARAM,	0);	// $1
    design.addCommand(100, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(100, ZRF.PARAM,	1);	// $2
    design.addCommand(100, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(100, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(100, ZRF.FUNCTION,	0);	// not
    design.addCommand(100, ZRF.FUNCTION,	20);	// verify
    design.addCommand(100, ZRF.MODE,	22);	// left-1-nnw
    design.addCommand(100, ZRF.FUNCTION,	25);	// to
    design.addCommand(100, ZRF.FUNCTION,	28);	// end

    design.addCommand(101, ZRF.FUNCTION,	24);	// from
    design.addCommand(101, ZRF.PARAM,	0);	// $1
    design.addCommand(101, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(101, ZRF.PARAM,	1);	// $2
    design.addCommand(101, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(101, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(101, ZRF.FUNCTION,	0);	// not
    design.addCommand(101, ZRF.FUNCTION,	20);	// verify
    design.addCommand(101, ZRF.MODE,	23);	// left-1-nne
    design.addCommand(101, ZRF.FUNCTION,	25);	// to
    design.addCommand(101, ZRF.FUNCTION,	28);	// end

    design.addCommand(102, ZRF.FUNCTION,	24);	// from
    design.addCommand(102, ZRF.PARAM,	0);	// $1
    design.addCommand(102, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(102, ZRF.PARAM,	1);	// $2
    design.addCommand(102, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(102, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(102, ZRF.FUNCTION,	0);	// not
    design.addCommand(102, ZRF.FUNCTION,	20);	// verify
    design.addCommand(102, ZRF.MODE,	24);	// left-1-ssw
    design.addCommand(102, ZRF.FUNCTION,	25);	// to
    design.addCommand(102, ZRF.FUNCTION,	28);	// end

    design.addCommand(103, ZRF.FUNCTION,	24);	// from
    design.addCommand(103, ZRF.PARAM,	0);	// $1
    design.addCommand(103, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(103, ZRF.PARAM,	1);	// $2
    design.addCommand(103, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(103, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(103, ZRF.FUNCTION,	0);	// not
    design.addCommand(103, ZRF.FUNCTION,	20);	// verify
    design.addCommand(103, ZRF.MODE,	25);	// left-1-sse
    design.addCommand(103, ZRF.FUNCTION,	25);	// to
    design.addCommand(103, ZRF.FUNCTION,	28);	// end

    design.addCommand(104, ZRF.FUNCTION,	24);	// from
    design.addCommand(104, ZRF.PARAM,	0);	// $1
    design.addCommand(104, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(104, ZRF.PARAM,	1);	// $2
    design.addCommand(104, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(104, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(104, ZRF.FUNCTION,	0);	// not
    design.addCommand(104, ZRF.FUNCTION,	20);	// verify
    design.addCommand(104, ZRF.MODE,	26);	// left-1-sww
    design.addCommand(104, ZRF.FUNCTION,	25);	// to
    design.addCommand(104, ZRF.FUNCTION,	28);	// end

    design.addCommand(105, ZRF.FUNCTION,	24);	// from
    design.addCommand(105, ZRF.PARAM,	0);	// $1
    design.addCommand(105, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(105, ZRF.PARAM,	1);	// $2
    design.addCommand(105, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(105, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(105, ZRF.FUNCTION,	0);	// not
    design.addCommand(105, ZRF.FUNCTION,	20);	// verify
    design.addCommand(105, ZRF.MODE,	27);	// left-1-nww
    design.addCommand(105, ZRF.FUNCTION,	25);	// to
    design.addCommand(105, ZRF.FUNCTION,	28);	// end

    design.addCommand(106, ZRF.FUNCTION,	24);	// from
    design.addCommand(106, ZRF.PARAM,	0);	// $1
    design.addCommand(106, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(106, ZRF.PARAM,	1);	// $2
    design.addCommand(106, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(106, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(106, ZRF.FUNCTION,	0);	// not
    design.addCommand(106, ZRF.FUNCTION,	20);	// verify
    design.addCommand(106, ZRF.MODE,	28);	// left-1-see
    design.addCommand(106, ZRF.FUNCTION,	25);	// to
    design.addCommand(106, ZRF.FUNCTION,	28);	// end

    design.addCommand(107, ZRF.FUNCTION,	24);	// from
    design.addCommand(107, ZRF.PARAM,	0);	// $1
    design.addCommand(107, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(107, ZRF.PARAM,	1);	// $2
    design.addCommand(107, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(107, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(107, ZRF.FUNCTION,	0);	// not
    design.addCommand(107, ZRF.FUNCTION,	20);	// verify
    design.addCommand(107, ZRF.MODE,	29);	// left-1-nee
    design.addCommand(107, ZRF.FUNCTION,	25);	// to
    design.addCommand(107, ZRF.FUNCTION,	28);	// end

    design.addCommand(108, ZRF.FUNCTION,	24);	// from
    design.addCommand(108, ZRF.PARAM,	0);	// $1
    design.addCommand(108, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(108, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(108, ZRF.FUNCTION,	20);	// verify
    design.addCommand(108, ZRF.PARAM,	1);	// $2
    design.addCommand(108, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(108, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(108, ZRF.FUNCTION,	0);	// not
    design.addCommand(108, ZRF.FUNCTION,	20);	// verify
    design.addCommand(108, ZRF.FUNCTION,	25);	// to
    design.addCommand(108, ZRF.FUNCTION,	28);	// end

    design.addCommand(109, ZRF.FUNCTION,	24);	// from
    design.addCommand(109, ZRF.PARAM,	0);	// $1
    design.addCommand(109, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(109, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(109, ZRF.FUNCTION,	20);	// verify
    design.addCommand(109, ZRF.PARAM,	1);	// $2
    design.addCommand(109, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(109, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(109, ZRF.FUNCTION,	20);	// verify
    design.addCommand(109, ZRF.PARAM,	2);	// $3
    design.addCommand(109, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(109, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(109, ZRF.FUNCTION,	0);	// not
    design.addCommand(109, ZRF.FUNCTION,	20);	// verify
    design.addCommand(109, ZRF.FUNCTION,	25);	// to
    design.addCommand(109, ZRF.FUNCTION,	28);	// end

    design.addCommand(110, ZRF.FUNCTION,	24);	// from
    design.addCommand(110, ZRF.PARAM,	0);	// $1
    design.addCommand(110, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(110, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(110, ZRF.FUNCTION,	20);	// verify
    design.addCommand(110, ZRF.PARAM,	1);	// $2
    design.addCommand(110, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(110, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(110, ZRF.FUNCTION,	20);	// verify
    design.addCommand(110, ZRF.PARAM,	2);	// $3
    design.addCommand(110, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(110, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(110, ZRF.FUNCTION,	20);	// verify
    design.addCommand(110, ZRF.PARAM,	3);	// $4
    design.addCommand(110, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(110, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(110, ZRF.FUNCTION,	0);	// not
    design.addCommand(110, ZRF.FUNCTION,	20);	// verify
    design.addCommand(110, ZRF.FUNCTION,	25);	// to
    design.addCommand(110, ZRF.FUNCTION,	28);	// end

    design.addCommand(111, ZRF.FUNCTION,	24);	// from
    design.addCommand(111, ZRF.PARAM,	0);	// $1
    design.addCommand(111, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(111, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(111, ZRF.FUNCTION,	20);	// verify
    design.addCommand(111, ZRF.PARAM,	1);	// $2
    design.addCommand(111, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(111, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(111, ZRF.FUNCTION,	20);	// verify
    design.addCommand(111, ZRF.PARAM,	2);	// $3
    design.addCommand(111, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(111, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(111, ZRF.FUNCTION,	20);	// verify
    design.addCommand(111, ZRF.PARAM,	3);	// $4
    design.addCommand(111, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(111, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(111, ZRF.FUNCTION,	20);	// verify
    design.addCommand(111, ZRF.PARAM,	4);	// $5
    design.addCommand(111, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(111, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(111, ZRF.FUNCTION,	0);	// not
    design.addCommand(111, ZRF.FUNCTION,	20);	// verify
    design.addCommand(111, ZRF.FUNCTION,	25);	// to
    design.addCommand(111, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("G", 0, 10000);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("GO", 1, 10000);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [3], 0);

    design.addPiece("PP", 2);
    design.addMove(2, 1, [4, 4], 0);
    design.addMove(2, 1, [2, 2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("P", 3);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("HV", 4);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 1, [0, 0], 0);
    design.addMove(4, 1, [1, 1], 0);
    design.addMove(4, 1, [7, 7], 0);
    design.addMove(4, 1, [3, 3], 0);

    design.addPiece("AG", 5);
    design.addMove(5, 1, [4, 4], 0);
    design.addMove(5, 0, [2], 0);

    design.addPiece("IL", 6);
    design.addMove(6, 2, [4, 4], 0);
    design.addMove(6, 2, [7, 7], 0);
    design.addMove(6, 2, [2, 2], 0);
    design.addMove(6, 2, [5, 5], 0);
    design.addMove(6, 2, [0, 0], 0);
    design.addMove(6, 2, [6, 6], 0);
    design.addMove(6, 2, [1, 1], 0);
    design.addMove(6, 2, [3, 3], 0);
    design.addMove(6, 3, [4], 1);
    design.addMove(6, 3, [7], 1);
    design.addMove(6, 3, [2], 1);
    design.addMove(6, 3, [5], 1);
    design.addMove(6, 3, [0], 1);
    design.addMove(6, 3, [6], 1);
    design.addMove(6, 3, [1], 1);
    design.addMove(6, 3, [3], 1);
    design.addMove(6, 4, [4, 4], 1);
    design.addMove(6, 4, [7, 7], 1);
    design.addMove(6, 4, [2, 2], 1);
    design.addMove(6, 4, [5, 5], 1);
    design.addMove(6, 4, [0, 0], 1);
    design.addMove(6, 4, [6, 6], 1);
    design.addMove(6, 4, [1, 1], 1);
    design.addMove(6, 4, [3, 3], 1);
    design.addMove(6, 4, [4, 4], 2);
    design.addMove(6, 4, [7, 7], 2);
    design.addMove(6, 4, [2, 2], 2);
    design.addMove(6, 4, [5, 5], 2);
    design.addMove(6, 4, [0, 0], 2);
    design.addMove(6, 4, [6, 6], 2);
    design.addMove(6, 4, [1, 1], 2);
    design.addMove(6, 4, [3, 3], 2);
    design.addMove(6, 5, [4], 3);
    design.addMove(6, 5, [7], 3);
    design.addMove(6, 5, [2], 3);
    design.addMove(6, 5, [5], 3);
    design.addMove(6, 5, [0], 3);
    design.addMove(6, 5, [6], 3);
    design.addMove(6, 5, [1], 3);
    design.addMove(6, 5, [3], 3);

    design.addPiece("SM", 7);
    design.addMove(7, 6, [4, 4], 0);
    design.addMove(7, 6, [7, 7], 0);
    design.addMove(7, 6, [2, 2], 0);
    design.addMove(7, 6, [5, 5], 0);
    design.addMove(7, 6, [0, 0], 0);
    design.addMove(7, 6, [6, 6], 0);
    design.addMove(7, 6, [1, 1], 0);
    design.addMove(7, 6, [3, 3], 0);
    design.addMove(7, 7, [4], 4);
    design.addMove(7, 7, [7], 4);
    design.addMove(7, 7, [2], 4);
    design.addMove(7, 7, [5], 4);
    design.addMove(7, 7, [0], 4);
    design.addMove(7, 7, [6], 4);
    design.addMove(7, 7, [1], 4);
    design.addMove(7, 7, [3], 4);

    design.addPiece("TF", 8);
    design.addMove(8, 2, [4, 4], 0);
    design.addMove(8, 2, [7, 7], 0);
    design.addMove(8, 2, [2, 2], 0);
    design.addMove(8, 2, [5, 5], 0);
    design.addMove(8, 2, [0, 0], 0);
    design.addMove(8, 2, [6, 6], 0);
    design.addMove(8, 2, [1, 1], 0);
    design.addMove(8, 2, [3, 3], 0);
    design.addMove(8, 8, [4], 1);
    design.addMove(8, 8, [7], 1);
    design.addMove(8, 8, [2], 1);
    design.addMove(8, 8, [5], 1);
    design.addMove(8, 8, [0], 1);
    design.addMove(8, 8, [6], 1);
    design.addMove(8, 8, [1], 1);
    design.addMove(8, 8, [3], 1);
    design.addMove(8, 4, [4, 4], 1);
    design.addMove(8, 4, [7, 7], 1);
    design.addMove(8, 4, [2, 2], 1);
    design.addMove(8, 4, [5, 5], 1);
    design.addMove(8, 4, [0, 0], 1);
    design.addMove(8, 4, [6, 6], 1);
    design.addMove(8, 4, [1, 1], 1);
    design.addMove(8, 4, [3, 3], 1);
    design.addMove(8, 4, [4, 4], 2);
    design.addMove(8, 4, [7, 7], 2);
    design.addMove(8, 4, [2, 2], 2);
    design.addMove(8, 4, [5, 5], 2);
    design.addMove(8, 4, [0, 0], 2);
    design.addMove(8, 4, [6, 6], 2);
    design.addMove(8, 4, [1, 1], 2);
    design.addMove(8, 4, [3, 3], 2);
    design.addMove(8, 9, [4], 3);
    design.addMove(8, 9, [7], 3);
    design.addMove(8, 9, [2], 3);
    design.addMove(8, 9, [5], 3);
    design.addMove(8, 9, [0], 3);
    design.addMove(8, 9, [6], 3);
    design.addMove(8, 9, [1], 3);
    design.addMove(8, 9, [3], 3);

    design.addPiece("TP", 9);
    design.addMove(9, 6, [4, 4], 0);
    design.addMove(9, 6, [7, 7], 0);
    design.addMove(9, 6, [2, 2], 0);
    design.addMove(9, 6, [5, 5], 0);
    design.addMove(9, 6, [0, 0], 0);
    design.addMove(9, 6, [6, 6], 0);
    design.addMove(9, 6, [1, 1], 0);
    design.addMove(9, 6, [3, 3], 0);
    design.addMove(9, 10, [4], 4);
    design.addMove(9, 10, [7], 4);
    design.addMove(9, 10, [2], 4);
    design.addMove(9, 10, [5], 4);
    design.addMove(9, 10, [0], 4);
    design.addMove(9, 10, [6], 4);
    design.addMove(9, 10, [1], 4);
    design.addMove(9, 10, [3], 4);

    design.addPiece("PF", 10);
    design.addMove(10, 0, [4], 0);
    design.addMove(10, 0, [2], 0);
    design.addMove(10, 0, [7], 0);
    design.addMove(10, 0, [3], 0);

    design.addPiece("EN", 11);
    design.addMove(11, 0, [4], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [7], 0);
    design.addMove(11, 0, [3], 0);

    design.addPiece("VC", 12);
    design.addMove(12, 1, [4, 4], 0);
    design.addMove(12, 1, [7, 7], 0);
    design.addMove(12, 1, [5, 5], 0);
    design.addMove(12, 1, [6, 6], 0);
    design.addMove(12, 1, [3, 3], 0);

    design.addPiece("CS", 13);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [2], 0);
    design.addMove(13, 0, [7], 0);
    design.addMove(13, 0, [5], 0);
    design.addMove(13, 0, [6], 0);
    design.addMove(13, 0, [3], 0);

    design.addPiece("VB", 14);
    design.addMove(14, 0, [4], 0);
    design.addMove(14, 0, [7], 0);
    design.addMove(14, 0, [2], 0);
    design.addMove(14, 0, [5], 0);
    design.addMove(14, 1, [0, 0], 0);
    design.addMove(14, 0, [6], 0);
    design.addMove(14, 1, [1, 1], 0);
    design.addMove(14, 0, [3], 0);

    design.addPiece("S", 15);
    design.addMove(15, 0, [4], 0);
    design.addMove(15, 0, [7], 0);
    design.addMove(15, 0, [5], 0);
    design.addMove(15, 0, [6], 0);
    design.addMove(15, 0, [3], 0);

    design.addPiece("TB", 16);
    design.addMove(16, 1, [4, 4], 0);
    design.addMove(16, 0, [7], 0);
    design.addMove(16, 1, [2, 2], 0);
    design.addMove(16, 0, [5], 0);
    design.addMove(16, 0, [0], 0);
    design.addMove(16, 0, [6], 0);
    design.addMove(16, 0, [1], 0);
    design.addMove(16, 0, [3], 0);

    design.addPiece("A", 17);
    design.addMove(17, 0, [4], 0);
    design.addMove(17, 0, [2], 0);
    design.addMove(17, 0, [0], 0);
    design.addMove(17, 0, [1], 0);
    design.addMove(17, 0, [7], 0);
    design.addMove(17, 0, [3], 0);

    design.addPiece("WR", 18);
    design.addMove(18, 11, [4], 0);
    design.addMove(18, 11, [7], 0);
    design.addMove(18, 11, [2], 0);
    design.addMove(18, 11, [5], 0);
    design.addMove(18, 11, [0], 0);
    design.addMove(18, 11, [6], 0);
    design.addMove(18, 11, [1], 0);
    design.addMove(18, 11, [3], 0);
    design.addMove(18, 0, [4], 4);
    design.addMove(18, 0, [7], 4);
    design.addMove(18, 0, [2], 4);
    design.addMove(18, 0, [5], 4);
    design.addMove(18, 0, [0], 4);
    design.addMove(18, 0, [6], 4);
    design.addMove(18, 0, [1], 4);
    design.addMove(18, 0, [3], 4);

    design.addPiece("AA", 19);
    design.addMove(19, 1, [4, 4], 0);
    design.addMove(19, 0, [7], 0);
    design.addMove(19, 1, [2, 2], 0);
    design.addMove(19, 0, [5], 0);
    design.addMove(19, 1, [0, 0], 0);
    design.addMove(19, 0, [6], 0);
    design.addMove(19, 1, [1, 1], 0);
    design.addMove(19, 0, [3], 0);

    design.addPiece("AC", 20);
    design.addMove(20, 0, [4], 0);
    design.addMove(20, 0, [0], 0);
    design.addMove(20, 0, [1], 0);
    design.addMove(20, 0, [7], 0);
    design.addMove(20, 0, [5], 0);
    design.addMove(20, 0, [6], 0);
    design.addMove(20, 0, [3], 0);

    design.addPiece("MA", 21);
    design.addMove(21, 11, [7], 0);
    design.addMove(21, 6, [4, 4], 0);
    design.addMove(21, 11, [5], 0);
    design.addMove(21, 6, [2, 2], 0);
    design.addMove(21, 11, [6], 0);
    design.addMove(21, 6, [0, 0], 0);
    design.addMove(21, 11, [3], 0);
    design.addMove(21, 6, [1, 1], 0);
    design.addMove(21, 0, [7], 4);
    design.addMove(21, 12, [4, 4], 4);
    design.addMove(21, 0, [5], 4);
    design.addMove(21, 12, [2, 2], 4);
    design.addMove(21, 0, [6], 4);
    design.addMove(21, 12, [0, 0], 4);
    design.addMove(21, 0, [3], 4);
    design.addMove(21, 12, [1, 1], 4);

    design.addPiece("CL", 22);
    design.addMove(22, 0, [7], 0);
    design.addMove(22, 12, [4, 4], 0);
    design.addMove(22, 0, [5], 0);
    design.addMove(22, 12, [2, 2], 0);
    design.addMove(22, 0, [6], 0);
    design.addMove(22, 12, [0, 0], 0);
    design.addMove(22, 0, [3], 0);
    design.addMove(22, 12, [1, 1], 0);

    design.addPiece("BD", 23);
    design.addMove(23, 11, [4], 0);
    design.addMove(23, 6, [7, 7], 0);
    design.addMove(23, 11, [2], 0);
    design.addMove(23, 6, [5, 5], 0);
    design.addMove(23, 11, [0], 0);
    design.addMove(23, 6, [6, 6], 0);
    design.addMove(23, 11, [1], 0);
    design.addMove(23, 6, [3, 3], 0);
    design.addMove(23, 0, [4], 4);
    design.addMove(23, 12, [7, 7], 4);
    design.addMove(23, 0, [2], 4);
    design.addMove(23, 12, [5, 5], 4);
    design.addMove(23, 0, [0], 4);
    design.addMove(23, 12, [6, 6], 4);
    design.addMove(23, 0, [1], 4);
    design.addMove(23, 12, [3, 3], 4);

    design.addPiece("SO", 24);
    design.addMove(24, 0, [4], 0);
    design.addMove(24, 12, [7, 7], 0);
    design.addMove(24, 0, [2], 0);
    design.addMove(24, 12, [5, 5], 0);
    design.addMove(24, 0, [0], 0);
    design.addMove(24, 12, [6, 6], 0);
    design.addMove(24, 0, [1], 0);
    design.addMove(24, 12, [3, 3], 0);

    design.addPiece("EV", 25);
    design.addMove(25, 0, [4], 0);
    design.addMove(25, 1, [0, 0], 0);
    design.addMove(25, 1, [1, 1], 0);
    design.addMove(25, 1, [6, 6], 0);
    design.addMove(25, 1, [5, 5], 0);

    design.addPiece("RG", 26);
    design.addMove(26, 0, [4], 0);
    design.addMove(26, 1, [2, 2], 0);

    design.addPiece("WH", 27);
    design.addMove(27, 13, [7, 7, 7], 0);
    design.addMove(27, 13, [5, 5, 5], 0);
    design.addMove(27, 13, [6, 6, 6], 0);
    design.addMove(27, 13, [3, 3, 3], 0);
    design.addMove(27, 11, [4], 0);
    design.addMove(27, 11, [2], 0);
    design.addMove(27, 11, [0], 0);
    design.addMove(27, 11, [1], 0);
    design.addMove(27, 0, [4], 4);
    design.addMove(27, 0, [2], 4);
    design.addMove(27, 0, [0], 4);
    design.addMove(27, 0, [1], 4);

    design.addPiece("CR", 28);
    design.addMove(28, 0, [4], 0);
    design.addMove(28, 1, [7, 7], 0);
    design.addMove(28, 0, [2], 0);
    design.addMove(28, 1, [5, 5], 0);
    design.addMove(28, 0, [0], 0);
    design.addMove(28, 1, [6, 6], 0);
    design.addMove(28, 0, [1], 0);
    design.addMove(28, 1, [3, 3], 0);

    design.addPiece("TW", 29);
    design.addMove(29, 14, [4, 4, 4, 4], 0);
    design.addMove(29, 0, [4], 0);
    design.addMove(29, 14, [2, 2, 2, 2], 0);
    design.addMove(29, 0, [2], 0);
    design.addMove(29, 14, [0, 0, 0, 0], 0);
    design.addMove(29, 0, [0], 0);
    design.addMove(29, 14, [1, 1, 1, 1], 0);
    design.addMove(29, 0, [1], 0);
    design.addMove(29, 11, [7], 0);
    design.addMove(29, 11, [5], 0);
    design.addMove(29, 11, [6], 0);
    design.addMove(29, 11, [3], 0);
    design.addMove(29, 0, [7], 4);
    design.addMove(29, 0, [5], 4);
    design.addMove(29, 0, [6], 4);
    design.addMove(29, 0, [3], 4);

    design.addPiece("Q", 30);
    design.addMove(30, 1, [4, 4], 0);
    design.addMove(30, 0, [7], 0);
    design.addMove(30, 1, [2, 2], 0);
    design.addMove(30, 0, [5], 0);
    design.addMove(30, 1, [0, 0], 0);
    design.addMove(30, 0, [6], 0);
    design.addMove(30, 1, [1, 1], 0);
    design.addMove(30, 0, [3], 0);

    design.addPiece("DA", 31);
    design.addMove(31, 14, [4, 4, 4, 4], 0);
    design.addMove(31, 14, [7, 7, 7, 7], 0);
    design.addMove(31, 14, [2, 2, 2, 2], 0);
    design.addMove(31, 14, [5, 5, 5, 5], 0);
    design.addMove(31, 14, [0, 0, 0, 0], 0);
    design.addMove(31, 14, [6, 6, 6, 6], 0);
    design.addMove(31, 14, [1, 1, 1, 1], 0);
    design.addMove(31, 14, [3, 3, 3, 3], 0);
    design.addMove(31, 11, [4], 0);
    design.addMove(31, 11, [7], 0);
    design.addMove(31, 11, [2], 0);
    design.addMove(31, 11, [5], 0);
    design.addMove(31, 11, [0], 0);
    design.addMove(31, 11, [6], 0);
    design.addMove(31, 11, [1], 0);
    design.addMove(31, 11, [3], 0);
    design.addMove(31, 0, [4], 4);
    design.addMove(31, 0, [7], 4);
    design.addMove(31, 0, [2], 4);
    design.addMove(31, 0, [5], 4);
    design.addMove(31, 0, [0], 4);
    design.addMove(31, 0, [6], 4);
    design.addMove(31, 0, [1], 4);
    design.addMove(31, 0, [3], 4);

    design.addPiece("M", 32);
    design.addMove(32, 1, [4, 4], 0);
    design.addMove(32, 1, [7, 7], 0);
    design.addMove(32, 1, [2, 2], 0);
    design.addMove(32, 1, [5, 5], 0);
    design.addMove(32, 1, [0, 0], 0);
    design.addMove(32, 1, [6, 6], 0);
    design.addMove(32, 1, [1, 1], 0);
    design.addMove(32, 1, [3, 3], 0);

    design.addPiece("SS", 33);
    design.addMove(33, 0, [4], 0);
    design.addMove(33, 1, [7, 7], 0);
    design.addMove(33, 0, [2], 0);
    design.addMove(33, 1, [5, 5], 0);
    design.addMove(33, 0, [0], 0);
    design.addMove(33, 1, [6, 6], 0);
    design.addMove(33, 0, [1], 0);
    design.addMove(33, 1, [3, 3], 0);

    design.addPiece("SN", 34);
    design.addMove(34, 0, [2], 0);
    design.addMove(34, 0, [0], 0);
    design.addMove(34, 0, [1], 0);
    design.addMove(34, 0, [7], 0);
    design.addMove(34, 0, [5], 0);
    design.addMove(34, 0, [6], 0);
    design.addMove(34, 0, [3], 0);

    design.addPiece("TC", 35);
    design.addMove(35, 15, [4], 0);
    design.addMove(35, 15, [2], 0);
    design.addMove(35, 15, [0], 0);
    design.addMove(35, 15, [1], 0);
    design.addMove(35, 16, [4], 5);
    design.addMove(35, 16, [2], 5);
    design.addMove(35, 16, [0], 5);
    design.addMove(35, 16, [1], 5);
    design.addMove(35, 17, [4], 1);
    design.addMove(35, 17, [2], 1);
    design.addMove(35, 17, [0], 1);
    design.addMove(35, 17, [1], 1);
    design.addMove(35, 18, [4], 2);
    design.addMove(35, 18, [2], 2);
    design.addMove(35, 18, [0], 2);
    design.addMove(35, 18, [1], 2);
    design.addMove(35, 0, [4], 3);
    design.addMove(35, 0, [2], 3);
    design.addMove(35, 0, [0], 3);
    design.addMove(35, 0, [1], 3);

    design.addPiece("D", 36);
    design.addMove(36, 0, [0], 0);
    design.addMove(36, 0, [1], 0);
    design.addMove(36, 0, [7], 0);
    design.addMove(36, 0, [5], 0);
    design.addMove(36, 0, [6], 0);
    design.addMove(36, 0, [3], 0);

    design.addPiece("RA", 37);
    design.addMove(37, 19, [4], 0);
    design.addMove(37, 20, [2], 0);
    design.addMove(37, 21, [0], 0);
    design.addMove(37, 22, [1], 0);
    design.addMove(37, 23, [4], 6);
    design.addMove(37, 24, [4], 7);
    design.addMove(37, 25, [4], 8);
    design.addMove(37, 0, [4], 9);
    design.addMove(37, 26, [2], 10);
    design.addMove(37, 27, [2], 11);
    design.addMove(37, 28, [2], 12);
    design.addMove(37, 0, [2], 13);
    design.addMove(37, 29, [0], 14);
    design.addMove(37, 30, [0], 15);
    design.addMove(37, 31, [0], 16);
    design.addMove(37, 0, [0], 17);
    design.addMove(37, 32, [1], 18);
    design.addMove(37, 33, [1], 19);
    design.addMove(37, 34, [1], 20);
    design.addMove(37, 0, [1], 21);

    design.addPiece("B", 38, 10000);
    design.addMove(38, 0, [0], 0);
    design.addMove(38, 0, [1], 0);
    design.addMove(38, 0, [7], 0);
    design.addMove(38, 0, [5], 0);
    design.addMove(38, 0, [6], 0);
    design.addMove(38, 0, [3], 0);

    design.addPiece("MT", 39, 10000);
    design.addMove(39, 0, [4], 0);
    design.addMove(39, 0, [7], 0);
    design.addMove(39, 0, [2], 0);
    design.addMove(39, 0, [5], 0);
    design.addMove(39, 0, [0], 0);
    design.addMove(39, 0, [6], 0);
    design.addMove(39, 0, [1], 0);
    design.addMove(39, 0, [3], 0);

    design.addPiece("E", 40);
    design.addMove(40, 1, [7, 7], 0);
    design.addMove(40, 1, [5, 5], 0);
    design.addMove(40, 1, [6, 6], 0);
    design.addMove(40, 1, [3, 3], 0);

    design.addPiece("GC", 41);
    design.addMove(41, 35, [4], 0);
    design.addMove(41, 36, [4, 4], 0);
    design.addMove(41, 37, [4, 4, 4], 0);
    design.addMove(41, 38, [4, 4, 4, 4], 0);
    design.addMove(41, 39, [4, 4, 4, 4, 4], 0);
    design.addMove(41, 35, [2], 0);
    design.addMove(41, 36, [2, 2], 0);
    design.addMove(41, 37, [2, 2, 2], 0);
    design.addMove(41, 38, [2, 2, 2, 2], 0);
    design.addMove(41, 39, [2, 2, 2, 2, 2], 0);
    design.addMove(41, 35, [0], 0);
    design.addMove(41, 36, [0, 0], 0);
    design.addMove(41, 37, [0, 0, 0], 0);
    design.addMove(41, 38, [0, 0, 0, 0], 0);
    design.addMove(41, 39, [0, 0, 0, 0, 0], 0);
    design.addMove(41, 35, [1], 0);
    design.addMove(41, 36, [1, 1], 0);
    design.addMove(41, 37, [1, 1, 1], 0);
    design.addMove(41, 38, [1, 1, 1, 1], 0);
    design.addMove(41, 39, [1, 1, 1, 1, 1], 0);
    design.addMove(41, 40, [4], 4);
    design.addMove(41, 40, [7], 4);
    design.addMove(41, 40, [2], 4);
    design.addMove(41, 40, [5], 4);
    design.addMove(41, 40, [0], 4);
    design.addMove(41, 40, [6], 4);
    design.addMove(41, 40, [1], 4);
    design.addMove(41, 40, [3], 4);
    design.addMove(41, 41, [4, 4], 4);
    design.addMove(41, 41, [7, 7], 4);
    design.addMove(41, 41, [2, 2], 4);
    design.addMove(41, 41, [5, 5], 4);
    design.addMove(41, 41, [0, 0], 4);
    design.addMove(41, 41, [6, 6], 4);
    design.addMove(41, 41, [1, 1], 4);
    design.addMove(41, 41, [3, 3], 4);
    design.addMove(41, 42, [4, 4, 4], 4);
    design.addMove(41, 42, [7, 7, 7], 4);
    design.addMove(41, 42, [2, 2, 2], 4);
    design.addMove(41, 42, [5, 5, 5], 4);
    design.addMove(41, 42, [0, 0, 0], 4);
    design.addMove(41, 42, [6, 6, 6], 4);
    design.addMove(41, 42, [1, 1, 1], 4);
    design.addMove(41, 42, [3, 3, 3], 4);
    design.addMove(41, 43, [4, 4, 4, 4], 4);
    design.addMove(41, 43, [7, 7, 7, 7], 4);
    design.addMove(41, 43, [2, 2, 2, 2], 4);
    design.addMove(41, 43, [5, 5, 5, 5], 4);
    design.addMove(41, 43, [0, 0, 0, 0], 4);
    design.addMove(41, 43, [6, 6, 6, 6], 4);
    design.addMove(41, 43, [1, 1, 1, 1], 4);
    design.addMove(41, 43, [3, 3, 3, 3], 4);
    design.addMove(41, 44, [4, 4, 4, 4, 4], 4);
    design.addMove(41, 44, [7, 7, 7, 7, 7], 4);
    design.addMove(41, 44, [2, 2, 2, 2, 2], 4);
    design.addMove(41, 44, [5, 5, 5, 5, 5], 4);
    design.addMove(41, 44, [0, 0, 0, 0, 0], 4);
    design.addMove(41, 44, [6, 6, 6, 6, 6], 4);
    design.addMove(41, 44, [1, 1, 1, 1, 1], 4);
    design.addMove(41, 44, [3, 3, 3, 3, 3], 4);

    design.addPiece("C", 42);
    design.addMove(42, 35, [7], 0);
    design.addMove(42, 35, [5], 0);
    design.addMove(42, 35, [6], 0);
    design.addMove(42, 35, [3], 0);
    design.addMove(42, 45, [4], 4);
    design.addMove(42, 45, [7], 4);
    design.addMove(42, 45, [2], 4);
    design.addMove(42, 45, [5], 4);
    design.addMove(42, 45, [0], 4);
    design.addMove(42, 45, [6], 4);
    design.addMove(42, 45, [1], 4);
    design.addMove(42, 45, [3], 4);
    design.addMove(42, 46, [4, 4], 4);
    design.addMove(42, 46, [7, 7], 4);
    design.addMove(42, 46, [2, 2], 4);
    design.addMove(42, 46, [5, 5], 4);
    design.addMove(42, 46, [0, 0], 4);
    design.addMove(42, 46, [6, 6], 4);
    design.addMove(42, 46, [1, 1], 4);
    design.addMove(42, 46, [3, 3], 4);
    design.addMove(42, 47, [4, 4, 4], 4);
    design.addMove(42, 47, [7, 7, 7], 4);
    design.addMove(42, 47, [2, 2, 2], 4);
    design.addMove(42, 47, [5, 5, 5], 4);
    design.addMove(42, 47, [0, 0, 0], 4);
    design.addMove(42, 47, [6, 6, 6], 4);
    design.addMove(42, 47, [1, 1, 1], 4);
    design.addMove(42, 47, [3, 3, 3], 4);
    design.addMove(42, 48, [4, 4, 4, 4], 4);
    design.addMove(42, 48, [7, 7, 7, 7], 4);
    design.addMove(42, 48, [2, 2, 2, 2], 4);
    design.addMove(42, 48, [5, 5, 5, 5], 4);
    design.addMove(42, 48, [0, 0, 0, 0], 4);
    design.addMove(42, 48, [6, 6, 6, 6], 4);
    design.addMove(42, 48, [1, 1, 1, 1], 4);
    design.addMove(42, 48, [3, 3, 3, 3], 4);
    design.addMove(42, 49, [4, 4, 4, 4, 4], 4);
    design.addMove(42, 49, [7, 7, 7, 7, 7], 4);
    design.addMove(42, 49, [2, 2, 2, 2, 2], 4);
    design.addMove(42, 49, [5, 5, 5, 5, 5], 4);
    design.addMove(42, 49, [0, 0, 0, 0, 0], 4);
    design.addMove(42, 49, [6, 6, 6, 6, 6], 4);
    design.addMove(42, 49, [1, 1, 1, 1, 1], 4);
    design.addMove(42, 49, [3, 3, 3, 3, 3], 4);

    design.addPiece("SC", 43);
    design.addMove(43, 50, [4, 7], 0);
    design.addMove(43, 50, [4, 3], 0);
    design.addMove(43, 50, [2, 6], 0);
    design.addMove(43, 50, [2, 5], 0);
    design.addMove(43, 50, [0, 6], 0);
    design.addMove(43, 50, [0, 7], 0);
    design.addMove(43, 50, [1, 5], 0);
    design.addMove(43, 50, [1, 3], 0);
    design.addMove(43, 51, [4], 4);
    design.addMove(43, 51, [7], 4);
    design.addMove(43, 51, [2], 4);
    design.addMove(43, 51, [5], 4);
    design.addMove(43, 51, [0], 4);
    design.addMove(43, 51, [6], 4);
    design.addMove(43, 51, [1], 4);
    design.addMove(43, 51, [3], 4);
    design.addMove(43, 52, [4, 4], 4);
    design.addMove(43, 52, [7, 7], 4);
    design.addMove(43, 52, [2, 2], 4);
    design.addMove(43, 52, [5, 5], 4);
    design.addMove(43, 52, [0, 0], 4);
    design.addMove(43, 52, [6, 6], 4);
    design.addMove(43, 52, [1, 1], 4);
    design.addMove(43, 52, [3, 3], 4);
    design.addMove(43, 53, [4, 4, 4], 4);
    design.addMove(43, 53, [7, 7, 7], 4);
    design.addMove(43, 53, [2, 2, 2], 4);
    design.addMove(43, 53, [5, 5, 5], 4);
    design.addMove(43, 53, [0, 0, 0], 4);
    design.addMove(43, 53, [6, 6, 6], 4);
    design.addMove(43, 53, [1, 1, 1], 4);
    design.addMove(43, 53, [3, 3, 3], 4);
    design.addMove(43, 54, [4, 4, 4, 4], 4);
    design.addMove(43, 54, [7, 7, 7, 7], 4);
    design.addMove(43, 54, [2, 2, 2, 2], 4);
    design.addMove(43, 54, [5, 5, 5, 5], 4);
    design.addMove(43, 54, [0, 0, 0, 0], 4);
    design.addMove(43, 54, [6, 6, 6, 6], 4);
    design.addMove(43, 54, [1, 1, 1, 1], 4);
    design.addMove(43, 54, [3, 3, 3, 3], 4);
    design.addMove(43, 55, [4, 4, 4, 4, 4], 4);
    design.addMove(43, 55, [7, 7, 7, 7, 7], 4);
    design.addMove(43, 55, [2, 2, 2, 2, 2], 4);
    design.addMove(43, 55, [5, 5, 5, 5, 5], 4);
    design.addMove(43, 55, [0, 0, 0, 0, 0], 4);
    design.addMove(43, 55, [6, 6, 6, 6, 6], 4);
    design.addMove(43, 55, [1, 1, 1, 1, 1], 4);
    design.addMove(43, 55, [3, 3, 3, 3, 3], 4);

    design.addPiece("SB", 44);
    design.addMove(44, 35, [7], 0);
    design.addMove(44, 35, [5], 0);
    design.addMove(44, 35, [6], 0);
    design.addMove(44, 35, [3], 0);
    design.addMove(44, 56, [4], 4);
    design.addMove(44, 56, [7], 4);
    design.addMove(44, 56, [2], 4);
    design.addMove(44, 56, [5], 4);
    design.addMove(44, 56, [0], 4);
    design.addMove(44, 56, [6], 4);
    design.addMove(44, 56, [1], 4);
    design.addMove(44, 56, [3], 4);
    design.addMove(44, 57, [4, 4], 4);
    design.addMove(44, 57, [7, 7], 4);
    design.addMove(44, 57, [2, 2], 4);
    design.addMove(44, 57, [5, 5], 4);
    design.addMove(44, 57, [0, 0], 4);
    design.addMove(44, 57, [6, 6], 4);
    design.addMove(44, 57, [1, 1], 4);
    design.addMove(44, 57, [3, 3], 4);
    design.addMove(44, 58, [4, 4, 4], 4);
    design.addMove(44, 58, [7, 7, 7], 4);
    design.addMove(44, 58, [2, 2, 2], 4);
    design.addMove(44, 58, [5, 5, 5], 4);
    design.addMove(44, 58, [0, 0, 0], 4);
    design.addMove(44, 58, [6, 6, 6], 4);
    design.addMove(44, 58, [1, 1, 1], 4);
    design.addMove(44, 58, [3, 3, 3], 4);
    design.addMove(44, 59, [4, 4, 4, 4], 4);
    design.addMove(44, 59, [7, 7, 7, 7], 4);
    design.addMove(44, 59, [2, 2, 2, 2], 4);
    design.addMove(44, 59, [5, 5, 5, 5], 4);
    design.addMove(44, 59, [0, 0, 0, 0], 4);
    design.addMove(44, 59, [6, 6, 6, 6], 4);
    design.addMove(44, 59, [1, 1, 1, 1], 4);
    design.addMove(44, 59, [3, 3, 3, 3], 4);
    design.addMove(44, 60, [4, 4, 4, 4, 4], 4);
    design.addMove(44, 60, [7, 7, 7, 7, 7], 4);
    design.addMove(44, 60, [2, 2, 2, 2, 2], 4);
    design.addMove(44, 60, [5, 5, 5, 5, 5], 4);
    design.addMove(44, 60, [0, 0, 0, 0, 0], 4);
    design.addMove(44, 60, [6, 6, 6, 6, 6], 4);
    design.addMove(44, 60, [1, 1, 1, 1, 1], 4);
    design.addMove(44, 60, [3, 3, 3, 3, 3], 4);

    design.addPiece("LC", 45);
    design.addMove(45, 50, [4, 7], 0);
    design.addMove(45, 50, [4, 3], 0);
    design.addMove(45, 50, [2, 6], 0);
    design.addMove(45, 50, [2, 5], 0);
    design.addMove(45, 50, [0, 6], 0);
    design.addMove(45, 50, [0, 7], 0);
    design.addMove(45, 50, [1, 5], 0);
    design.addMove(45, 50, [1, 3], 0);
    design.addMove(45, 61, [4], 4);
    design.addMove(45, 61, [7], 4);
    design.addMove(45, 61, [2], 4);
    design.addMove(45, 61, [5], 4);
    design.addMove(45, 61, [0], 4);
    design.addMove(45, 61, [6], 4);
    design.addMove(45, 61, [1], 4);
    design.addMove(45, 61, [3], 4);
    design.addMove(45, 62, [4, 4], 4);
    design.addMove(45, 62, [7, 7], 4);
    design.addMove(45, 62, [2, 2], 4);
    design.addMove(45, 62, [5, 5], 4);
    design.addMove(45, 62, [0, 0], 4);
    design.addMove(45, 62, [6, 6], 4);
    design.addMove(45, 62, [1, 1], 4);
    design.addMove(45, 62, [3, 3], 4);
    design.addMove(45, 63, [4, 4, 4], 4);
    design.addMove(45, 63, [7, 7, 7], 4);
    design.addMove(45, 63, [2, 2, 2], 4);
    design.addMove(45, 63, [5, 5, 5], 4);
    design.addMove(45, 63, [0, 0, 0], 4);
    design.addMove(45, 63, [6, 6, 6], 4);
    design.addMove(45, 63, [1, 1, 1], 4);
    design.addMove(45, 63, [3, 3, 3], 4);

    design.addPiece("LB", 46);
    design.addMove(46, 35, [7], 0);
    design.addMove(46, 35, [5], 0);
    design.addMove(46, 35, [6], 0);
    design.addMove(46, 35, [3], 0);
    design.addMove(46, 64, [4], 4);
    design.addMove(46, 64, [7], 4);
    design.addMove(46, 64, [2], 4);
    design.addMove(46, 64, [5], 4);
    design.addMove(46, 64, [0], 4);
    design.addMove(46, 64, [6], 4);
    design.addMove(46, 64, [1], 4);
    design.addMove(46, 64, [3], 4);
    design.addMove(46, 65, [4, 4], 4);
    design.addMove(46, 65, [7, 7], 4);
    design.addMove(46, 65, [2, 2], 4);
    design.addMove(46, 65, [5, 5], 4);
    design.addMove(46, 65, [0, 0], 4);
    design.addMove(46, 65, [6, 6], 4);
    design.addMove(46, 65, [1, 1], 4);
    design.addMove(46, 65, [3, 3], 4);
    design.addMove(46, 66, [4, 4, 4], 4);
    design.addMove(46, 66, [7, 7, 7], 4);
    design.addMove(46, 66, [2, 2, 2], 4);
    design.addMove(46, 66, [5, 5, 5], 4);
    design.addMove(46, 66, [0, 0, 0], 4);
    design.addMove(46, 66, [6, 6, 6], 4);
    design.addMove(46, 66, [1, 1, 1], 4);
    design.addMove(46, 66, [3, 3, 3], 4);

    design.addPiece("CG", 47);
    design.addMove(47, 67, [4], 0);
    design.addMove(47, 68, [4, 4], 0);
    design.addMove(47, 69, [4, 4, 4], 0);
    design.addMove(47, 70, [4, 4, 4, 4], 0);
    design.addMove(47, 71, [4, 4, 4, 4, 4], 0);
    design.addMove(47, 67, [2], 0);
    design.addMove(47, 68, [2, 2], 0);
    design.addMove(47, 69, [2, 2, 2], 0);
    design.addMove(47, 70, [2, 2, 2, 2], 0);
    design.addMove(47, 71, [2, 2, 2, 2, 2], 0);
    design.addMove(47, 67, [0], 0);
    design.addMove(47, 68, [0, 0], 0);
    design.addMove(47, 69, [0, 0, 0], 0);
    design.addMove(47, 70, [0, 0, 0, 0], 0);
    design.addMove(47, 71, [0, 0, 0, 0, 0], 0);
    design.addMove(47, 67, [1], 0);
    design.addMove(47, 68, [1, 1], 0);
    design.addMove(47, 69, [1, 1, 1], 0);
    design.addMove(47, 70, [1, 1, 1, 1], 0);
    design.addMove(47, 71, [1, 1, 1, 1, 1], 0);
    design.addMove(47, 72, [4], 2);
    design.addMove(47, 72, [7], 2);
    design.addMove(47, 72, [2], 2);
    design.addMove(47, 72, [5], 2);
    design.addMove(47, 72, [0], 2);
    design.addMove(47, 72, [6], 2);
    design.addMove(47, 72, [1], 2);
    design.addMove(47, 72, [3], 2);
    design.addMove(47, 73, [4, 4], 2);
    design.addMove(47, 73, [7, 7], 2);
    design.addMove(47, 73, [2, 2], 2);
    design.addMove(47, 73, [5, 5], 2);
    design.addMove(47, 73, [0, 0], 2);
    design.addMove(47, 73, [6, 6], 2);
    design.addMove(47, 73, [1, 1], 2);
    design.addMove(47, 73, [3, 3], 2);
    design.addMove(47, 74, [4, 4, 4], 2);
    design.addMove(47, 74, [7, 7, 7], 2);
    design.addMove(47, 74, [2, 2, 2], 2);
    design.addMove(47, 74, [5, 5, 5], 2);
    design.addMove(47, 74, [0, 0, 0], 2);
    design.addMove(47, 74, [6, 6, 6], 2);
    design.addMove(47, 74, [1, 1, 1], 2);
    design.addMove(47, 74, [3, 3, 3], 2);
    design.addMove(47, 75, [4, 4, 4, 4], 2);
    design.addMove(47, 75, [7, 7, 7, 7], 2);
    design.addMove(47, 75, [2, 2, 2, 2], 2);
    design.addMove(47, 75, [5, 5, 5, 5], 2);
    design.addMove(47, 75, [0, 0, 0, 0], 2);
    design.addMove(47, 75, [6, 6, 6, 6], 2);
    design.addMove(47, 75, [1, 1, 1, 1], 2);
    design.addMove(47, 75, [3, 3, 3, 3], 2);
    design.addMove(47, 76, [4, 4, 4, 4, 4], 2);
    design.addMove(47, 76, [7, 7, 7, 7, 7], 2);
    design.addMove(47, 76, [2, 2, 2, 2, 2], 2);
    design.addMove(47, 76, [5, 5, 5, 5, 5], 2);
    design.addMove(47, 76, [0, 0, 0, 0, 0], 2);
    design.addMove(47, 76, [6, 6, 6, 6, 6], 2);
    design.addMove(47, 76, [1, 1, 1, 1, 1], 2);
    design.addMove(47, 76, [3, 3, 3, 3, 3], 2);
    design.addMove(47, 77, [4, 4, 4, 4, 4, 4], 2);
    design.addMove(47, 77, [7, 7, 7, 7, 7, 7], 2);
    design.addMove(47, 77, [2, 2, 2, 2, 2, 2], 2);
    design.addMove(47, 77, [5, 5, 5, 5, 5, 5], 2);
    design.addMove(47, 77, [0, 0, 0, 0, 0, 0], 2);
    design.addMove(47, 77, [6, 6, 6, 6, 6, 6], 2);
    design.addMove(47, 77, [1, 1, 1, 1, 1, 1], 2);
    design.addMove(47, 77, [3, 3, 3, 3, 3, 3], 2);
    design.addMove(47, 78, [4, 4, 4, 4, 4, 4, 4], 2);
    design.addMove(47, 78, [7, 7, 7, 7, 7, 7, 7], 2);
    design.addMove(47, 78, [2, 2, 2, 2, 2, 2, 2], 2);
    design.addMove(47, 78, [5, 5, 5, 5, 5, 5, 5], 2);
    design.addMove(47, 78, [0, 0, 0, 0, 0, 0, 0], 2);
    design.addMove(47, 78, [6, 6, 6, 6, 6, 6, 6], 2);
    design.addMove(47, 78, [1, 1, 1, 1, 1, 1, 1], 2);
    design.addMove(47, 78, [3, 3, 3, 3, 3, 3, 3], 2);
    design.addMove(47, 79, [4], 3);
    design.addMove(47, 79, [7], 3);
    design.addMove(47, 79, [2], 3);
    design.addMove(47, 79, [5], 3);
    design.addMove(47, 79, [0], 3);
    design.addMove(47, 79, [6], 3);
    design.addMove(47, 79, [1], 3);
    design.addMove(47, 79, [3], 3);
    design.addMove(47, 80, [4, 4], 3);
    design.addMove(47, 80, [7, 7], 3);
    design.addMove(47, 80, [2, 2], 3);
    design.addMove(47, 80, [5, 5], 3);
    design.addMove(47, 80, [0, 0], 3);
    design.addMove(47, 80, [6, 6], 3);
    design.addMove(47, 80, [1, 1], 3);
    design.addMove(47, 80, [3, 3], 3);
    design.addMove(47, 81, [4, 4, 4], 3);
    design.addMove(47, 81, [7, 7, 7], 3);
    design.addMove(47, 81, [2, 2, 2], 3);
    design.addMove(47, 81, [5, 5, 5], 3);
    design.addMove(47, 81, [0, 0, 0], 3);
    design.addMove(47, 81, [6, 6, 6], 3);
    design.addMove(47, 81, [1, 1, 1], 3);
    design.addMove(47, 81, [3, 3, 3], 3);
    design.addMove(47, 82, [4, 4, 4, 4], 3);
    design.addMove(47, 82, [7, 7, 7, 7], 3);
    design.addMove(47, 82, [2, 2, 2, 2], 3);
    design.addMove(47, 82, [5, 5, 5, 5], 3);
    design.addMove(47, 82, [0, 0, 0, 0], 3);
    design.addMove(47, 82, [6, 6, 6, 6], 3);
    design.addMove(47, 82, [1, 1, 1, 1], 3);
    design.addMove(47, 82, [3, 3, 3, 3], 3);
    design.addMove(47, 83, [4, 4, 4, 4, 4], 3);
    design.addMove(47, 83, [7, 7, 7, 7, 7], 3);
    design.addMove(47, 83, [2, 2, 2, 2, 2], 3);
    design.addMove(47, 83, [5, 5, 5, 5, 5], 3);
    design.addMove(47, 83, [0, 0, 0, 0, 0], 3);
    design.addMove(47, 83, [6, 6, 6, 6, 6], 3);
    design.addMove(47, 83, [1, 1, 1, 1, 1], 3);
    design.addMove(47, 83, [3, 3, 3, 3, 3], 3);
    design.addMove(47, 84, [4, 4, 4, 4, 4, 4], 3);
    design.addMove(47, 84, [7, 7, 7, 7, 7, 7], 3);
    design.addMove(47, 84, [2, 2, 2, 2, 2, 2], 3);
    design.addMove(47, 84, [5, 5, 5, 5, 5, 5], 3);
    design.addMove(47, 84, [0, 0, 0, 0, 0, 0], 3);
    design.addMove(47, 84, [6, 6, 6, 6, 6, 6], 3);
    design.addMove(47, 84, [1, 1, 1, 1, 1, 1], 3);
    design.addMove(47, 84, [3, 3, 3, 3, 3, 3], 3);
    design.addMove(47, 85, [4, 4, 4, 4, 4, 4, 4], 3);
    design.addMove(47, 85, [7, 7, 7, 7, 7, 7, 7], 3);
    design.addMove(47, 85, [2, 2, 2, 2, 2, 2, 2], 3);
    design.addMove(47, 85, [5, 5, 5, 5, 5, 5, 5], 3);
    design.addMove(47, 85, [0, 0, 0, 0, 0, 0, 0], 3);
    design.addMove(47, 85, [6, 6, 6, 6, 6, 6, 6], 3);
    design.addMove(47, 85, [1, 1, 1, 1, 1, 1, 1], 3);
    design.addMove(47, 85, [3, 3, 3, 3, 3, 3, 3], 3);

    design.addPiece("EC", 48);
    design.addMove(48, 67, [7], 0);
    design.addMove(48, 67, [5], 0);
    design.addMove(48, 67, [6], 0);
    design.addMove(48, 67, [3], 0);
    design.addMove(48, 86, [4], 2);
    design.addMove(48, 86, [7], 2);
    design.addMove(48, 86, [2], 2);
    design.addMove(48, 86, [5], 2);
    design.addMove(48, 86, [0], 2);
    design.addMove(48, 86, [6], 2);
    design.addMove(48, 86, [1], 2);
    design.addMove(48, 86, [3], 2);
    design.addMove(48, 87, [4, 4], 2);
    design.addMove(48, 87, [7, 7], 2);
    design.addMove(48, 87, [2, 2], 2);
    design.addMove(48, 87, [5, 5], 2);
    design.addMove(48, 87, [0, 0], 2);
    design.addMove(48, 87, [6, 6], 2);
    design.addMove(48, 87, [1, 1], 2);
    design.addMove(48, 87, [3, 3], 2);
    design.addMove(48, 88, [4, 4, 4], 2);
    design.addMove(48, 88, [7, 7, 7], 2);
    design.addMove(48, 88, [2, 2, 2], 2);
    design.addMove(48, 88, [5, 5, 5], 2);
    design.addMove(48, 88, [0, 0, 0], 2);
    design.addMove(48, 88, [6, 6, 6], 2);
    design.addMove(48, 88, [1, 1, 1], 2);
    design.addMove(48, 88, [3, 3, 3], 2);
    design.addMove(48, 89, [4, 4, 4, 4], 2);
    design.addMove(48, 89, [7, 7, 7, 7], 2);
    design.addMove(48, 89, [2, 2, 2, 2], 2);
    design.addMove(48, 89, [5, 5, 5, 5], 2);
    design.addMove(48, 89, [0, 0, 0, 0], 2);
    design.addMove(48, 89, [6, 6, 6, 6], 2);
    design.addMove(48, 89, [1, 1, 1, 1], 2);
    design.addMove(48, 89, [3, 3, 3, 3], 2);
    design.addMove(48, 90, [4, 4, 4, 4, 4], 2);
    design.addMove(48, 90, [7, 7, 7, 7, 7], 2);
    design.addMove(48, 90, [2, 2, 2, 2, 2], 2);
    design.addMove(48, 90, [5, 5, 5, 5, 5], 2);
    design.addMove(48, 90, [0, 0, 0, 0, 0], 2);
    design.addMove(48, 90, [6, 6, 6, 6, 6], 2);
    design.addMove(48, 90, [1, 1, 1, 1, 1], 2);
    design.addMove(48, 90, [3, 3, 3, 3, 3], 2);
    design.addMove(48, 91, [4, 4, 4, 4, 4, 4], 2);
    design.addMove(48, 91, [7, 7, 7, 7, 7, 7], 2);
    design.addMove(48, 91, [2, 2, 2, 2, 2, 2], 2);
    design.addMove(48, 91, [5, 5, 5, 5, 5, 5], 2);
    design.addMove(48, 91, [0, 0, 0, 0, 0, 0], 2);
    design.addMove(48, 91, [6, 6, 6, 6, 6, 6], 2);
    design.addMove(48, 91, [1, 1, 1, 1, 1, 1], 2);
    design.addMove(48, 91, [3, 3, 3, 3, 3, 3], 2);
    design.addMove(48, 92, [4, 4, 4, 4, 4, 4, 4], 2);
    design.addMove(48, 92, [7, 7, 7, 7, 7, 7, 7], 2);
    design.addMove(48, 92, [2, 2, 2, 2, 2, 2, 2], 2);
    design.addMove(48, 92, [5, 5, 5, 5, 5, 5, 5], 2);
    design.addMove(48, 92, [0, 0, 0, 0, 0, 0, 0], 2);
    design.addMove(48, 92, [6, 6, 6, 6, 6, 6, 6], 2);
    design.addMove(48, 92, [1, 1, 1, 1, 1, 1, 1], 2);
    design.addMove(48, 92, [3, 3, 3, 3, 3, 3, 3], 2);
    design.addMove(48, 93, [4], 3);
    design.addMove(48, 93, [7], 3);
    design.addMove(48, 93, [2], 3);
    design.addMove(48, 93, [5], 3);
    design.addMove(48, 93, [0], 3);
    design.addMove(48, 93, [6], 3);
    design.addMove(48, 93, [1], 3);
    design.addMove(48, 93, [3], 3);
    design.addMove(48, 94, [4, 4], 3);
    design.addMove(48, 94, [7, 7], 3);
    design.addMove(48, 94, [2, 2], 3);
    design.addMove(48, 94, [5, 5], 3);
    design.addMove(48, 94, [0, 0], 3);
    design.addMove(48, 94, [6, 6], 3);
    design.addMove(48, 94, [1, 1], 3);
    design.addMove(48, 94, [3, 3], 3);
    design.addMove(48, 95, [4, 4, 4], 3);
    design.addMove(48, 95, [7, 7, 7], 3);
    design.addMove(48, 95, [2, 2, 2], 3);
    design.addMove(48, 95, [5, 5, 5], 3);
    design.addMove(48, 95, [0, 0, 0], 3);
    design.addMove(48, 95, [6, 6, 6], 3);
    design.addMove(48, 95, [1, 1, 1], 3);
    design.addMove(48, 95, [3, 3, 3], 3);
    design.addMove(48, 96, [4, 4, 4, 4], 3);
    design.addMove(48, 96, [7, 7, 7, 7], 3);
    design.addMove(48, 96, [2, 2, 2, 2], 3);
    design.addMove(48, 96, [5, 5, 5, 5], 3);
    design.addMove(48, 96, [0, 0, 0, 0], 3);
    design.addMove(48, 96, [6, 6, 6, 6], 3);
    design.addMove(48, 96, [1, 1, 1, 1], 3);
    design.addMove(48, 96, [3, 3, 3, 3], 3);
    design.addMove(48, 97, [4, 4, 4, 4, 4], 3);
    design.addMove(48, 97, [7, 7, 7, 7, 7], 3);
    design.addMove(48, 97, [2, 2, 2, 2, 2], 3);
    design.addMove(48, 97, [5, 5, 5, 5, 5], 3);
    design.addMove(48, 97, [0, 0, 0, 0, 0], 3);
    design.addMove(48, 97, [6, 6, 6, 6, 6], 3);
    design.addMove(48, 97, [1, 1, 1, 1, 1], 3);
    design.addMove(48, 97, [3, 3, 3, 3, 3], 3);
    design.addMove(48, 98, [4, 4, 4, 4, 4, 4], 3);
    design.addMove(48, 98, [7, 7, 7, 7, 7, 7], 3);
    design.addMove(48, 98, [2, 2, 2, 2, 2, 2], 3);
    design.addMove(48, 98, [5, 5, 5, 5, 5, 5], 3);
    design.addMove(48, 98, [0, 0, 0, 0, 0, 0], 3);
    design.addMove(48, 98, [6, 6, 6, 6, 6, 6], 3);
    design.addMove(48, 98, [1, 1, 1, 1, 1, 1], 3);
    design.addMove(48, 98, [3, 3, 3, 3, 3, 3], 3);
    design.addMove(48, 99, [4, 4, 4, 4, 4, 4, 4], 3);
    design.addMove(48, 99, [7, 7, 7, 7, 7, 7, 7], 3);
    design.addMove(48, 99, [2, 2, 2, 2, 2, 2, 2], 3);
    design.addMove(48, 99, [5, 5, 5, 5, 5, 5, 5], 3);
    design.addMove(48, 99, [0, 0, 0, 0, 0, 0, 0], 3);
    design.addMove(48, 99, [6, 6, 6, 6, 6, 6, 6], 3);
    design.addMove(48, 99, [1, 1, 1, 1, 1, 1, 1], 3);
    design.addMove(48, 99, [3, 3, 3, 3, 3, 3, 3], 3);

    design.addPiece("WG", 49);
    design.addMove(49, 6, [4, 7], 0);
    design.addMove(49, 6, [4, 3], 0);
    design.addMove(49, 6, [2, 6], 0);
    design.addMove(49, 6, [2, 5], 0);
    design.addMove(49, 6, [0, 6], 0);
    design.addMove(49, 6, [0, 7], 0);
    design.addMove(49, 6, [1, 5], 0);
    design.addMove(49, 6, [1, 3], 0);
    design.addMove(49, 12, [4, 7], 4);
    design.addMove(49, 12, [4, 3], 4);
    design.addMove(49, 12, [2, 6], 4);
    design.addMove(49, 12, [2, 5], 4);
    design.addMove(49, 12, [0, 6], 4);
    design.addMove(49, 12, [0, 7], 4);
    design.addMove(49, 12, [1, 5], 4);
    design.addMove(49, 12, [1, 3], 4);

    design.addPiece("CA", 50);
    design.addMove(50, 100, [4, 7], 0);
    design.addMove(50, 101, [4, 3], 0);
    design.addMove(50, 102, [2, 6], 0);
    design.addMove(50, 103, [2, 5], 0);
    design.addMove(50, 104, [0, 6], 0);
    design.addMove(50, 105, [0, 7], 0);
    design.addMove(50, 106, [1, 5], 0);
    design.addMove(50, 107, [1, 3], 0);
    design.addMove(50, 12, [4, 7], 22);
    design.addMove(50, 12, [4, 3], 22);
    design.addMove(50, 12, [2, 5], 22);
    design.addMove(50, 12, [4, 7], 23);
    design.addMove(50, 12, [4, 3], 23);
    design.addMove(50, 12, [2, 6], 23);
    design.addMove(50, 12, [2, 6], 24);
    design.addMove(50, 12, [2, 5], 24);
    design.addMove(50, 12, [4, 3], 24);
    design.addMove(50, 12, [2, 6], 25);
    design.addMove(50, 12, [2, 5], 25);
    design.addMove(50, 12, [4, 7], 25);
    design.addMove(50, 12, [0, 6], 26);
    design.addMove(50, 12, [0, 7], 26);
    design.addMove(50, 12, [1, 3], 26);
    design.addMove(50, 12, [0, 6], 27);
    design.addMove(50, 12, [0, 7], 27);
    design.addMove(50, 12, [1, 5], 27);
    design.addMove(50, 12, [1, 5], 28);
    design.addMove(50, 12, [1, 3], 28);
    design.addMove(50, 12, [0, 7], 28);
    design.addMove(50, 12, [1, 5], 29);
    design.addMove(50, 12, [1, 3], 29);
    design.addMove(50, 12, [0, 6], 29);

    design.addPiece("HH", 51);
    design.addMove(51, 100, [4, 7], 0);
    design.addMove(51, 101, [4, 3], 0);
    design.addMove(51, 102, [2, 6], 0);
    design.addMove(51, 103, [2, 5], 0);
    design.addMove(51, 104, [0, 6], 0);
    design.addMove(51, 105, [0, 7], 0);
    design.addMove(51, 106, [1, 5], 0);
    design.addMove(51, 107, [1, 3], 0);
    design.addMove(51, 12, [4, 7], 22);
    design.addMove(51, 12, [4, 3], 22);
    design.addMove(51, 12, [2, 5], 22);
    design.addMove(51, 12, [4, 7], 23);
    design.addMove(51, 12, [4, 3], 23);
    design.addMove(51, 12, [2, 6], 23);
    design.addMove(51, 12, [2, 6], 24);
    design.addMove(51, 12, [2, 5], 24);
    design.addMove(51, 12, [4, 3], 24);
    design.addMove(51, 12, [2, 6], 25);
    design.addMove(51, 12, [2, 5], 25);
    design.addMove(51, 12, [4, 7], 25);
    design.addMove(51, 12, [0, 6], 26);
    design.addMove(51, 12, [0, 7], 26);
    design.addMove(51, 12, [1, 3], 26);
    design.addMove(51, 12, [0, 6], 27);
    design.addMove(51, 12, [0, 7], 27);
    design.addMove(51, 12, [1, 5], 27);
    design.addMove(51, 12, [1, 5], 28);
    design.addMove(51, 12, [1, 3], 28);
    design.addMove(51, 12, [0, 7], 28);
    design.addMove(51, 12, [1, 5], 29);
    design.addMove(51, 12, [1, 3], 29);
    design.addMove(51, 12, [0, 6], 29);

    design.addPiece("HS", 52);
    design.addMove(52, 12, [4, 7], 0);
    design.addMove(52, 12, [4, 3], 0);
    design.addMove(52, 12, [2, 6], 0);
    design.addMove(52, 12, [2, 5], 0);
    design.addMove(52, 12, [0, 6], 0);
    design.addMove(52, 12, [0, 7], 0);
    design.addMove(52, 12, [1, 5], 0);
    design.addMove(52, 12, [1, 3], 0);

    design.addPiece("CO", 53);
    design.addMove(53, 1, [4, 4], 0);
    design.addMove(53, 1, [2, 2], 0);
    design.addMove(53, 1, [7, 7], 0);
    design.addMove(53, 1, [5, 5], 0);
    design.addMove(53, 1, [6, 6], 0);
    design.addMove(53, 1, [3, 3], 0);

    design.addPiece("PU", 54);
    design.addMove(54, 1, [4, 4], 0);
    design.addMove(54, 1, [2, 2], 0);
    design.addMove(54, 0, [0], 0);
    design.addMove(54, 0, [1], 0);

    design.addPiece("MM", 55);
    design.addMove(55, 1, [4, 4], 0);
    design.addMove(55, 1, [7, 7], 0);
    design.addMove(55, 1, [2, 2], 0);
    design.addMove(55, 1, [5, 5], 0);
    design.addMove(55, 1, [0, 0], 0);
    design.addMove(55, 1, [6, 6], 0);
    design.addMove(55, 1, [1, 1], 0);
    design.addMove(55, 1, [3, 3], 0);

    design.addPiece("CU", 56);
    design.addMove(56, 1, [4, 4], 0);
    design.addMove(56, 1, [2, 2], 0);
    design.addMove(56, 1, [0, 0], 0);
    design.addMove(56, 1, [1, 1], 0);

    design.addPiece("IB", 57);
    design.addMove(57, 1, [0, 0], 0);
    design.addMove(57, 1, [1, 1], 0);
    design.addMove(57, 1, [7, 7], 0);
    design.addMove(57, 1, [5, 5], 0);
    design.addMove(57, 1, [6, 6], 0);
    design.addMove(57, 1, [3, 3], 0);

    design.addPiece("SU", 58);
    design.addMove(58, 0, [7], 0);
    design.addMove(58, 0, [5], 0);
    design.addMove(58, 0, [6], 0);
    design.addMove(58, 0, [3], 0);
    design.addMove(58, 1, [0, 0], 0);
    design.addMove(58, 1, [1, 1], 0);

    design.addPiece("CC", 59);
    design.addMove(59, 1, [4, 4], 0);
    design.addMove(59, 1, [2, 2], 0);
    design.addMove(59, 1, [0, 0], 0);
    design.addMove(59, 1, [1, 1], 0);

    design.addPiece("CH", 60);
    design.addMove(60, 0, [4], 0);
    design.addMove(60, 108, [4, 4], 0);
    design.addMove(60, 109, [4, 4, 4], 0);
    design.addMove(60, 110, [4, 4, 4, 4], 0);
    design.addMove(60, 111, [4, 4, 4, 4, 4], 0);
    design.addMove(60, 0, [2], 0);
    design.addMove(60, 108, [2, 2], 0);
    design.addMove(60, 109, [2, 2, 2], 0);
    design.addMove(60, 110, [2, 2, 2, 2], 0);
    design.addMove(60, 111, [2, 2, 2, 2, 2], 0);
    design.addMove(60, 0, [0], 0);
    design.addMove(60, 108, [0, 0], 0);
    design.addMove(60, 109, [0, 0, 0], 0);
    design.addMove(60, 110, [0, 0, 0, 0], 0);
    design.addMove(60, 111, [0, 0, 0, 0, 0], 0);
    design.addMove(60, 0, [1], 0);
    design.addMove(60, 108, [1, 1], 0);
    design.addMove(60, 109, [1, 1, 1], 0);
    design.addMove(60, 110, [1, 1, 1, 1], 0);
    design.addMove(60, 111, [1, 1, 1, 1, 1], 0);

    design.addPiece("UU", 61);
    design.addMove(61, 0, [7], 0);
    design.addMove(61, 0, [5], 0);
    design.addMove(61, 0, [6], 0);
    design.addMove(61, 0, [3], 0);
    design.addMove(61, 1, [0, 0], 0);
    design.addMove(61, 1, [1, 1], 0);

    design.addPiece("SH", 62);
    design.addMove(62, 0, [7], 0);
    design.addMove(62, 0, [5], 0);
    design.addMove(62, 0, [6], 0);
    design.addMove(62, 0, [3], 0);

    design.addPiece("V", 63);
    design.addMove(63, 0, [4], 0);
    design.addMove(63, 108, [4, 4], 0);
    design.addMove(63, 109, [4, 4, 4], 0);
    design.addMove(63, 110, [4, 4, 4, 4], 0);
    design.addMove(63, 111, [4, 4, 4, 4, 4], 0);

    design.addPiece("PB", 64);
    design.addMove(64, 0, [2], 0);
    design.addMove(64, 0, [0], 0);
    design.addMove(64, 0, [1], 0);

    design.addPiece("N", 65);

    design.setup("Black", "AG", 360);
    design.setup("Black", "AG", 342);
    design.setup("Black", "SM", 359);
    design.setup("Black", "TP", 343);
    design.setup("Black", "EN", 358);
    design.setup("Black", "EN", 344);
    design.setup("Black", "A", 320);
    design.setup("Black", "A", 306);
    design.setup("Black", "S", 356);
    design.setup("Black", "S", 346);
    design.setup("Black", "CS", 355);
    design.setup("Black", "CS", 347);
    design.setup("Black", "WR", 316);
    design.setup("Black", "WR", 310);
    design.setup("Black", "AC", 353);
    design.setup("Black", "AC", 349);
    design.setup("Black", "CL", 352);
    design.setup("Black", "SO", 350);
    design.setup("Black", "G", 351);
    design.setup("Black", "RG", 341);
    design.setup("Black", "RG", 323);
    design.setup("Black", "CR", 340);
    design.setup("Black", "CR", 324);
    design.setup("Black", "Q", 338);
    design.setup("Black", "Q", 326);
    design.setup("Black", "M", 336);
    design.setup("Black", "M", 328);
    design.setup("Black", "SN", 334);
    design.setup("Black", "SN", 330);
    design.setup("Black", "D", 333);
    design.setup("Black", "B", 331);
    design.setup("Black", "MT", 332);
    design.setup("Black", "E", 322);
    design.setup("Black", "E", 304);
    design.setup("Black", "E", 318);
    design.setup("Black", "E", 308);
    design.setup("Black", "E", 314);
    design.setup("Black", "E", 312);
    design.setup("Black", "C", 321);
    design.setup("Black", "C", 305);
    design.setup("Black", "LB", 315);
    design.setup("Black", "LB", 311);
    design.setup("Black", "EC", 313);
    design.setup("Black", "CA", 303);
    design.setup("Black", "CA", 285);
    design.setup("Black", "HS", 301);
    design.setup("Black", "HS", 287);
    design.setup("Black", "HS", 299);
    design.setup("Black", "HS", 289);
    design.setup("Black", "HS", 297);
    design.setup("Black", "HS", 291);
    design.setup("Black", "HS", 295);
    design.setup("Black", "HS", 293);
    design.setup("Black", "P", 283);
    design.setup("Black", "P", 267);
    design.setup("Black", "P", 281);
    design.setup("Black", "P", 269);
    design.setup("Black", "P", 279);
    design.setup("Black", "P", 271);
    design.setup("Black", "P", 277);
    design.setup("Black", "P", 273);
    design.setup("Black", "PU", 275);
    design.setup("Black", "SU", 264);
    design.setup("Black", "SU", 248);
    design.setup("Black", "SU", 256);
    design.setup("Black", "CH", 265);
    design.setup("Black", "CH", 247);
    design.setup("Black", "CH", 263);
    design.setup("Black", "CH", 249);
    design.setup("Black", "CH", 261);
    design.setup("Black", "CH", 251);
    design.setup("Black", "CH", 259);
    design.setup("Black", "CH", 253);
    design.setup("Black", "CH", 257);
    design.setup("Black", "CH", 255);
    design.setup("Black", "SH", 262);
    design.setup("Black", "SH", 250);
    design.setup("Black", "SH", 260);
    design.setup("Black", "SH", 252);
    design.setup("Black", "SH", 258);
    design.setup("Black", "SH", 254);
    design.setup("Black", "V", 237);
    design.setup("White", "AG", 18);
    design.setup("White", "AG", 0);
    design.setup("White", "TP", 17);
    design.setup("White", "SM", 1);
    design.setup("White", "EN", 16);
    design.setup("White", "EN", 2);
    design.setup("White", "A", 54);
    design.setup("White", "A", 40);
    design.setup("White", "S", 14);
    design.setup("White", "S", 4);
    design.setup("White", "CS", 13);
    design.setup("White", "CS", 5);
    design.setup("White", "WR", 50);
    design.setup("White", "WR", 44);
    design.setup("White", "AC", 11);
    design.setup("White", "AC", 7);
    design.setup("White", "SO", 10);
    design.setup("White", "CL", 8);
    design.setup("White", "G", 9);
    design.setup("White", "RG", 37);
    design.setup("White", "RG", 19);
    design.setup("White", "CR", 36);
    design.setup("White", "CR", 20);
    design.setup("White", "Q", 34);
    design.setup("White", "Q", 22);
    design.setup("White", "M", 32);
    design.setup("White", "M", 24);
    design.setup("White", "SN", 30);
    design.setup("White", "SN", 26);
    design.setup("White", "B", 29);
    design.setup("White", "D", 27);
    design.setup("White", "MT", 28);
    design.setup("White", "E", 56);
    design.setup("White", "E", 38);
    design.setup("White", "E", 52);
    design.setup("White", "E", 42);
    design.setup("White", "E", 48);
    design.setup("White", "E", 46);
    design.setup("White", "C", 55);
    design.setup("White", "C", 39);
    design.setup("White", "LB", 49);
    design.setup("White", "LB", 45);
    design.setup("White", "EC", 47);
    design.setup("White", "CA", 75);
    design.setup("White", "CA", 57);
    design.setup("White", "HS", 73);
    design.setup("White", "HS", 59);
    design.setup("White", "HS", 71);
    design.setup("White", "HS", 61);
    design.setup("White", "HS", 69);
    design.setup("White", "HS", 63);
    design.setup("White", "HS", 67);
    design.setup("White", "HS", 65);
    design.setup("White", "P", 93);
    design.setup("White", "P", 77);
    design.setup("White", "P", 91);
    design.setup("White", "P", 79);
    design.setup("White", "P", 89);
    design.setup("White", "P", 81);
    design.setup("White", "P", 87);
    design.setup("White", "P", 83);
    design.setup("White", "PU", 85);
    design.setup("White", "SU", 112);
    design.setup("White", "SU", 96);
    design.setup("White", "SU", 104);
    design.setup("White", "CH", 113);
    design.setup("White", "CH", 95);
    design.setup("White", "CH", 111);
    design.setup("White", "CH", 97);
    design.setup("White", "CH", 109);
    design.setup("White", "CH", 99);
    design.setup("White", "CH", 107);
    design.setup("White", "CH", 101);
    design.setup("White", "CH", 105);
    design.setup("White", "CH", 103);
    design.setup("White", "SH", 110);
    design.setup("White", "SH", 98);
    design.setup("White", "SH", 108);
    design.setup("White", "SH", 100);
    design.setup("White", "SH", 106);
    design.setup("White", "SH", 102);
    design.setup("White", "V", 123);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteG", "White G");
    view.defPiece("BlackG", "Black G");
    view.defPiece("WhiteGO", "White GO");
    view.defPiece("BlackGO", "Black GO");
    view.defPiece("WhitePP", "White PP");
    view.defPiece("BlackPP", "Black PP");
    view.defPiece("WhiteP", "White P");
    view.defPiece("BlackP", "Black P");
    view.defPiece("WhiteHV", "White HV");
    view.defPiece("BlackHV", "Black HV");
    view.defPiece("WhiteAG", "White AG");
    view.defPiece("BlackAG", "Black AG");
    view.defPiece("WhiteIL", "White IL");
    view.defPiece("BlackIL", "Black IL");
    view.defPiece("WhiteSM", "White SM");
    view.defPiece("BlackSM", "Black SM");
    view.defPiece("WhiteTF", "White TF");
    view.defPiece("BlackTF", "Black TF");
    view.defPiece("WhiteTP", "White TP");
    view.defPiece("BlackTP", "Black TP");
    view.defPiece("WhitePF", "White PF");
    view.defPiece("BlackPF", "Black PF");
    view.defPiece("WhiteEN", "White EN");
    view.defPiece("BlackEN", "Black EN");
    view.defPiece("WhiteVC", "White VC");
    view.defPiece("BlackVC", "Black VC");
    view.defPiece("WhiteCS", "White CS");
    view.defPiece("BlackCS", "Black CS");
    view.defPiece("WhiteVB", "White VB");
    view.defPiece("BlackVB", "Black VB");
    view.defPiece("WhiteS", "White S");
    view.defPiece("BlackS", "Black S");
    view.defPiece("WhiteTB", "White TB");
    view.defPiece("BlackTB", "Black TB");
    view.defPiece("WhiteA", "White A");
    view.defPiece("BlackA", "Black A");
    view.defPiece("WhiteWR", "White WR");
    view.defPiece("BlackWR", "Black WR");
    view.defPiece("WhiteAA", "White AA");
    view.defPiece("BlackAA", "Black AA");
    view.defPiece("WhiteAC", "White AC");
    view.defPiece("BlackAC", "Black AC");
    view.defPiece("WhiteMA", "White MA");
    view.defPiece("BlackMA", "Black MA");
    view.defPiece("WhiteCL", "White CL");
    view.defPiece("BlackCL", "Black CL");
    view.defPiece("WhiteBD", "White BD");
    view.defPiece("BlackBD", "Black BD");
    view.defPiece("WhiteSO", "White SO");
    view.defPiece("BlackSO", "Black SO");
    view.defPiece("WhiteEV", "White EV");
    view.defPiece("BlackEV", "Black EV");
    view.defPiece("WhiteRG", "White RG");
    view.defPiece("BlackRG", "Black RG");
    view.defPiece("WhiteWH", "White WH");
    view.defPiece("BlackWH", "Black WH");
    view.defPiece("WhiteCR", "White CR");
    view.defPiece("BlackCR", "Black CR");
    view.defPiece("WhiteTW", "White TW");
    view.defPiece("BlackTW", "Black TW");
    view.defPiece("WhiteQ", "White Q");
    view.defPiece("BlackQ", "Black Q");
    view.defPiece("WhiteDA", "White DA");
    view.defPiece("BlackDA", "Black DA");
    view.defPiece("WhiteM", "White M");
    view.defPiece("BlackM", "Black M");
    view.defPiece("WhiteSS", "White SS");
    view.defPiece("BlackSS", "Black SS");
    view.defPiece("WhiteSN", "White SN");
    view.defPiece("BlackSN", "Black SN");
    view.defPiece("WhiteTC", "White TC");
    view.defPiece("BlackTC", "Black TC");
    view.defPiece("WhiteD", "White D");
    view.defPiece("BlackD", "Black D");
    view.defPiece("WhiteRA", "White RA");
    view.defPiece("BlackRA", "Black RA");
    view.defPiece("WhiteB", "White B");
    view.defPiece("BlackB", "Black B");
    view.defPiece("WhiteMT", "White MT");
    view.defPiece("BlackMT", "Black MT");
    view.defPiece("WhiteE", "White E");
    view.defPiece("BlackE", "Black E");
    view.defPiece("WhiteGC", "White GC");
    view.defPiece("BlackGC", "Black GC");
    view.defPiece("WhiteC", "White C");
    view.defPiece("BlackC", "Black C");
    view.defPiece("WhiteSC", "White SC");
    view.defPiece("BlackSC", "Black SC");
    view.defPiece("WhiteSB", "White SB");
    view.defPiece("BlackSB", "Black SB");
    view.defPiece("WhiteLC", "White LC");
    view.defPiece("BlackLC", "Black LC");
    view.defPiece("WhiteLB", "White LB");
    view.defPiece("BlackLB", "Black LB");
    view.defPiece("WhiteCG", "White CG");
    view.defPiece("BlackCG", "Black CG");
    view.defPiece("WhiteEC", "White EC");
    view.defPiece("BlackEC", "Black EC");
    view.defPiece("WhiteWG", "White WG");
    view.defPiece("BlackWG", "Black WG");
    view.defPiece("WhiteCA", "White CA");
    view.defPiece("BlackCA", "Black CA");
    view.defPiece("WhiteHH", "White HH");
    view.defPiece("BlackHH", "Black HH");
    view.defPiece("WhiteHS", "White HS");
    view.defPiece("BlackHS", "Black HS");
    view.defPiece("WhiteCO", "White CO");
    view.defPiece("BlackCO", "Black CO");
    view.defPiece("WhitePU", "White PU");
    view.defPiece("BlackPU", "Black PU");
    view.defPiece("WhiteMM", "White MM");
    view.defPiece("BlackMM", "Black MM");
    view.defPiece("WhiteCU", "White CU");
    view.defPiece("BlackCU", "Black CU");
    view.defPiece("WhiteIB", "White IB");
    view.defPiece("BlackIB", "Black IB");
    view.defPiece("WhiteSU", "White SU");
    view.defPiece("BlackSU", "Black SU");
    view.defPiece("WhiteCC", "White CC");
    view.defPiece("BlackCC", "Black CC");
    view.defPiece("WhiteCH", "White CH");
    view.defPiece("BlackCH", "Black CH");
    view.defPiece("WhiteUU", "White UU");
    view.defPiece("BlackUU", "Black UU");
    view.defPiece("WhiteSH", "White SH");
    view.defPiece("BlackSH", "Black SH");
    view.defPiece("WhiteV", "White V");
    view.defPiece("BlackV", "Black V");
    view.defPiece("WhitePB", "White PB");
    view.defPiece("BlackPB", "Black PB");
    view.defPiece("WhiteN", "White N");
    view.defPiece("BlackN", "Black N");
 
    view.defPosition("A1", 5, 5, 31, 31);
    view.defPosition("B1", 37, 5, 31, 31);
    view.defPosition("C1", 69, 5, 31, 31);
    view.defPosition("D1", 101, 5, 31, 31);
    view.defPosition("E1", 133, 5, 31, 31);
    view.defPosition("F1", 165, 5, 31, 31);
    view.defPosition("G1", 197, 5, 31, 31);
    view.defPosition("H1", 229, 5, 31, 31);
    view.defPosition("I1", 261, 5, 31, 31);
    view.defPosition("J1", 293, 5, 31, 31);
    view.defPosition("K1", 325, 5, 31, 31);
    view.defPosition("L1", 357, 5, 31, 31);
    view.defPosition("M1", 389, 5, 31, 31);
    view.defPosition("N1", 421, 5, 31, 31);
    view.defPosition("O1", 453, 5, 31, 31);
    view.defPosition("P1", 485, 5, 31, 31);
    view.defPosition("Q1", 517, 5, 31, 31);
    view.defPosition("R1", 549, 5, 31, 31);
    view.defPosition("S1", 581, 5, 31, 31);
    view.defPosition("A2", 5, 37, 31, 31);
    view.defPosition("B2", 37, 37, 31, 31);
    view.defPosition("C2", 69, 37, 31, 31);
    view.defPosition("D2", 101, 37, 31, 31);
    view.defPosition("E2", 133, 37, 31, 31);
    view.defPosition("F2", 165, 37, 31, 31);
    view.defPosition("G2", 197, 37, 31, 31);
    view.defPosition("H2", 229, 37, 31, 31);
    view.defPosition("I2", 261, 37, 31, 31);
    view.defPosition("J2", 293, 37, 31, 31);
    view.defPosition("K2", 325, 37, 31, 31);
    view.defPosition("L2", 357, 37, 31, 31);
    view.defPosition("M2", 389, 37, 31, 31);
    view.defPosition("N2", 421, 37, 31, 31);
    view.defPosition("O2", 453, 37, 31, 31);
    view.defPosition("P2", 485, 37, 31, 31);
    view.defPosition("Q2", 517, 37, 31, 31);
    view.defPosition("R2", 549, 37, 31, 31);
    view.defPosition("S2", 581, 37, 31, 31);
    view.defPosition("A3", 5, 69, 31, 31);
    view.defPosition("B3", 37, 69, 31, 31);
    view.defPosition("C3", 69, 69, 31, 31);
    view.defPosition("D3", 101, 69, 31, 31);
    view.defPosition("E3", 133, 69, 31, 31);
    view.defPosition("F3", 165, 69, 31, 31);
    view.defPosition("G3", 197, 69, 31, 31);
    view.defPosition("H3", 229, 69, 31, 31);
    view.defPosition("I3", 261, 69, 31, 31);
    view.defPosition("J3", 293, 69, 31, 31);
    view.defPosition("K3", 325, 69, 31, 31);
    view.defPosition("L3", 357, 69, 31, 31);
    view.defPosition("M3", 389, 69, 31, 31);
    view.defPosition("N3", 421, 69, 31, 31);
    view.defPosition("O3", 453, 69, 31, 31);
    view.defPosition("P3", 485, 69, 31, 31);
    view.defPosition("Q3", 517, 69, 31, 31);
    view.defPosition("R3", 549, 69, 31, 31);
    view.defPosition("S3", 581, 69, 31, 31);
    view.defPosition("A4", 5, 101, 31, 31);
    view.defPosition("B4", 37, 101, 31, 31);
    view.defPosition("C4", 69, 101, 31, 31);
    view.defPosition("D4", 101, 101, 31, 31);
    view.defPosition("E4", 133, 101, 31, 31);
    view.defPosition("F4", 165, 101, 31, 31);
    view.defPosition("G4", 197, 101, 31, 31);
    view.defPosition("H4", 229, 101, 31, 31);
    view.defPosition("I4", 261, 101, 31, 31);
    view.defPosition("J4", 293, 101, 31, 31);
    view.defPosition("K4", 325, 101, 31, 31);
    view.defPosition("L4", 357, 101, 31, 31);
    view.defPosition("M4", 389, 101, 31, 31);
    view.defPosition("N4", 421, 101, 31, 31);
    view.defPosition("O4", 453, 101, 31, 31);
    view.defPosition("P4", 485, 101, 31, 31);
    view.defPosition("Q4", 517, 101, 31, 31);
    view.defPosition("R4", 549, 101, 31, 31);
    view.defPosition("S4", 581, 101, 31, 31);
    view.defPosition("A5", 5, 133, 31, 31);
    view.defPosition("B5", 37, 133, 31, 31);
    view.defPosition("C5", 69, 133, 31, 31);
    view.defPosition("D5", 101, 133, 31, 31);
    view.defPosition("E5", 133, 133, 31, 31);
    view.defPosition("F5", 165, 133, 31, 31);
    view.defPosition("G5", 197, 133, 31, 31);
    view.defPosition("H5", 229, 133, 31, 31);
    view.defPosition("I5", 261, 133, 31, 31);
    view.defPosition("J5", 293, 133, 31, 31);
    view.defPosition("K5", 325, 133, 31, 31);
    view.defPosition("L5", 357, 133, 31, 31);
    view.defPosition("M5", 389, 133, 31, 31);
    view.defPosition("N5", 421, 133, 31, 31);
    view.defPosition("O5", 453, 133, 31, 31);
    view.defPosition("P5", 485, 133, 31, 31);
    view.defPosition("Q5", 517, 133, 31, 31);
    view.defPosition("R5", 549, 133, 31, 31);
    view.defPosition("S5", 581, 133, 31, 31);
    view.defPosition("A6", 5, 165, 31, 31);
    view.defPosition("B6", 37, 165, 31, 31);
    view.defPosition("C6", 69, 165, 31, 31);
    view.defPosition("D6", 101, 165, 31, 31);
    view.defPosition("E6", 133, 165, 31, 31);
    view.defPosition("F6", 165, 165, 31, 31);
    view.defPosition("G6", 197, 165, 31, 31);
    view.defPosition("H6", 229, 165, 31, 31);
    view.defPosition("I6", 261, 165, 31, 31);
    view.defPosition("J6", 293, 165, 31, 31);
    view.defPosition("K6", 325, 165, 31, 31);
    view.defPosition("L6", 357, 165, 31, 31);
    view.defPosition("M6", 389, 165, 31, 31);
    view.defPosition("N6", 421, 165, 31, 31);
    view.defPosition("O6", 453, 165, 31, 31);
    view.defPosition("P6", 485, 165, 31, 31);
    view.defPosition("Q6", 517, 165, 31, 31);
    view.defPosition("R6", 549, 165, 31, 31);
    view.defPosition("S6", 581, 165, 31, 31);
    view.defPosition("A7", 5, 197, 31, 31);
    view.defPosition("B7", 37, 197, 31, 31);
    view.defPosition("C7", 69, 197, 31, 31);
    view.defPosition("D7", 101, 197, 31, 31);
    view.defPosition("E7", 133, 197, 31, 31);
    view.defPosition("F7", 165, 197, 31, 31);
    view.defPosition("G7", 197, 197, 31, 31);
    view.defPosition("H7", 229, 197, 31, 31);
    view.defPosition("I7", 261, 197, 31, 31);
    view.defPosition("J7", 293, 197, 31, 31);
    view.defPosition("K7", 325, 197, 31, 31);
    view.defPosition("L7", 357, 197, 31, 31);
    view.defPosition("M7", 389, 197, 31, 31);
    view.defPosition("N7", 421, 197, 31, 31);
    view.defPosition("O7", 453, 197, 31, 31);
    view.defPosition("P7", 485, 197, 31, 31);
    view.defPosition("Q7", 517, 197, 31, 31);
    view.defPosition("R7", 549, 197, 31, 31);
    view.defPosition("S7", 581, 197, 31, 31);
    view.defPosition("A8", 5, 229, 31, 31);
    view.defPosition("B8", 37, 229, 31, 31);
    view.defPosition("C8", 69, 229, 31, 31);
    view.defPosition("D8", 101, 229, 31, 31);
    view.defPosition("E8", 133, 229, 31, 31);
    view.defPosition("F8", 165, 229, 31, 31);
    view.defPosition("G8", 197, 229, 31, 31);
    view.defPosition("H8", 229, 229, 31, 31);
    view.defPosition("I8", 261, 229, 31, 31);
    view.defPosition("J8", 293, 229, 31, 31);
    view.defPosition("K8", 325, 229, 31, 31);
    view.defPosition("L8", 357, 229, 31, 31);
    view.defPosition("M8", 389, 229, 31, 31);
    view.defPosition("N8", 421, 229, 31, 31);
    view.defPosition("O8", 453, 229, 31, 31);
    view.defPosition("P8", 485, 229, 31, 31);
    view.defPosition("Q8", 517, 229, 31, 31);
    view.defPosition("R8", 549, 229, 31, 31);
    view.defPosition("S8", 581, 229, 31, 31);
    view.defPosition("A9", 5, 261, 31, 31);
    view.defPosition("B9", 37, 261, 31, 31);
    view.defPosition("C9", 69, 261, 31, 31);
    view.defPosition("D9", 101, 261, 31, 31);
    view.defPosition("E9", 133, 261, 31, 31);
    view.defPosition("F9", 165, 261, 31, 31);
    view.defPosition("G9", 197, 261, 31, 31);
    view.defPosition("H9", 229, 261, 31, 31);
    view.defPosition("I9", 261, 261, 31, 31);
    view.defPosition("J9", 293, 261, 31, 31);
    view.defPosition("K9", 325, 261, 31, 31);
    view.defPosition("L9", 357, 261, 31, 31);
    view.defPosition("M9", 389, 261, 31, 31);
    view.defPosition("N9", 421, 261, 31, 31);
    view.defPosition("O9", 453, 261, 31, 31);
    view.defPosition("P9", 485, 261, 31, 31);
    view.defPosition("Q9", 517, 261, 31, 31);
    view.defPosition("R9", 549, 261, 31, 31);
    view.defPosition("S9", 581, 261, 31, 31);
    view.defPosition("A10", 5, 293, 31, 31);
    view.defPosition("B10", 37, 293, 31, 31);
    view.defPosition("C10", 69, 293, 31, 31);
    view.defPosition("D10", 101, 293, 31, 31);
    view.defPosition("E10", 133, 293, 31, 31);
    view.defPosition("F10", 165, 293, 31, 31);
    view.defPosition("G10", 197, 293, 31, 31);
    view.defPosition("H10", 229, 293, 31, 31);
    view.defPosition("I10", 261, 293, 31, 31);
    view.defPosition("J10", 293, 293, 31, 31);
    view.defPosition("K10", 325, 293, 31, 31);
    view.defPosition("L10", 357, 293, 31, 31);
    view.defPosition("M10", 389, 293, 31, 31);
    view.defPosition("N10", 421, 293, 31, 31);
    view.defPosition("O10", 453, 293, 31, 31);
    view.defPosition("P10", 485, 293, 31, 31);
    view.defPosition("Q10", 517, 293, 31, 31);
    view.defPosition("R10", 549, 293, 31, 31);
    view.defPosition("S10", 581, 293, 31, 31);
    view.defPosition("A11", 5, 325, 31, 31);
    view.defPosition("B11", 37, 325, 31, 31);
    view.defPosition("C11", 69, 325, 31, 31);
    view.defPosition("D11", 101, 325, 31, 31);
    view.defPosition("E11", 133, 325, 31, 31);
    view.defPosition("F11", 165, 325, 31, 31);
    view.defPosition("G11", 197, 325, 31, 31);
    view.defPosition("H11", 229, 325, 31, 31);
    view.defPosition("I11", 261, 325, 31, 31);
    view.defPosition("J11", 293, 325, 31, 31);
    view.defPosition("K11", 325, 325, 31, 31);
    view.defPosition("L11", 357, 325, 31, 31);
    view.defPosition("M11", 389, 325, 31, 31);
    view.defPosition("N11", 421, 325, 31, 31);
    view.defPosition("O11", 453, 325, 31, 31);
    view.defPosition("P11", 485, 325, 31, 31);
    view.defPosition("Q11", 517, 325, 31, 31);
    view.defPosition("R11", 549, 325, 31, 31);
    view.defPosition("S11", 581, 325, 31, 31);
    view.defPosition("A12", 5, 357, 31, 31);
    view.defPosition("B12", 37, 357, 31, 31);
    view.defPosition("C12", 69, 357, 31, 31);
    view.defPosition("D12", 101, 357, 31, 31);
    view.defPosition("E12", 133, 357, 31, 31);
    view.defPosition("F12", 165, 357, 31, 31);
    view.defPosition("G12", 197, 357, 31, 31);
    view.defPosition("H12", 229, 357, 31, 31);
    view.defPosition("I12", 261, 357, 31, 31);
    view.defPosition("J12", 293, 357, 31, 31);
    view.defPosition("K12", 325, 357, 31, 31);
    view.defPosition("L12", 357, 357, 31, 31);
    view.defPosition("M12", 389, 357, 31, 31);
    view.defPosition("N12", 421, 357, 31, 31);
    view.defPosition("O12", 453, 357, 31, 31);
    view.defPosition("P12", 485, 357, 31, 31);
    view.defPosition("Q12", 517, 357, 31, 31);
    view.defPosition("R12", 549, 357, 31, 31);
    view.defPosition("S12", 581, 357, 31, 31);
    view.defPosition("A13", 5, 389, 31, 31);
    view.defPosition("B13", 37, 389, 31, 31);
    view.defPosition("C13", 69, 389, 31, 31);
    view.defPosition("D13", 101, 389, 31, 31);
    view.defPosition("E13", 133, 389, 31, 31);
    view.defPosition("F13", 165, 389, 31, 31);
    view.defPosition("G13", 197, 389, 31, 31);
    view.defPosition("H13", 229, 389, 31, 31);
    view.defPosition("I13", 261, 389, 31, 31);
    view.defPosition("J13", 293, 389, 31, 31);
    view.defPosition("K13", 325, 389, 31, 31);
    view.defPosition("L13", 357, 389, 31, 31);
    view.defPosition("M13", 389, 389, 31, 31);
    view.defPosition("N13", 421, 389, 31, 31);
    view.defPosition("O13", 453, 389, 31, 31);
    view.defPosition("P13", 485, 389, 31, 31);
    view.defPosition("Q13", 517, 389, 31, 31);
    view.defPosition("R13", 549, 389, 31, 31);
    view.defPosition("S13", 581, 389, 31, 31);
    view.defPosition("A14", 5, 421, 31, 31);
    view.defPosition("B14", 37, 421, 31, 31);
    view.defPosition("C14", 69, 421, 31, 31);
    view.defPosition("D14", 101, 421, 31, 31);
    view.defPosition("E14", 133, 421, 31, 31);
    view.defPosition("F14", 165, 421, 31, 31);
    view.defPosition("G14", 197, 421, 31, 31);
    view.defPosition("H14", 229, 421, 31, 31);
    view.defPosition("I14", 261, 421, 31, 31);
    view.defPosition("J14", 293, 421, 31, 31);
    view.defPosition("K14", 325, 421, 31, 31);
    view.defPosition("L14", 357, 421, 31, 31);
    view.defPosition("M14", 389, 421, 31, 31);
    view.defPosition("N14", 421, 421, 31, 31);
    view.defPosition("O14", 453, 421, 31, 31);
    view.defPosition("P14", 485, 421, 31, 31);
    view.defPosition("Q14", 517, 421, 31, 31);
    view.defPosition("R14", 549, 421, 31, 31);
    view.defPosition("S14", 581, 421, 31, 31);
    view.defPosition("A15", 5, 453, 31, 31);
    view.defPosition("B15", 37, 453, 31, 31);
    view.defPosition("C15", 69, 453, 31, 31);
    view.defPosition("D15", 101, 453, 31, 31);
    view.defPosition("E15", 133, 453, 31, 31);
    view.defPosition("F15", 165, 453, 31, 31);
    view.defPosition("G15", 197, 453, 31, 31);
    view.defPosition("H15", 229, 453, 31, 31);
    view.defPosition("I15", 261, 453, 31, 31);
    view.defPosition("J15", 293, 453, 31, 31);
    view.defPosition("K15", 325, 453, 31, 31);
    view.defPosition("L15", 357, 453, 31, 31);
    view.defPosition("M15", 389, 453, 31, 31);
    view.defPosition("N15", 421, 453, 31, 31);
    view.defPosition("O15", 453, 453, 31, 31);
    view.defPosition("P15", 485, 453, 31, 31);
    view.defPosition("Q15", 517, 453, 31, 31);
    view.defPosition("R15", 549, 453, 31, 31);
    view.defPosition("S15", 581, 453, 31, 31);
    view.defPosition("A16", 5, 485, 31, 31);
    view.defPosition("B16", 37, 485, 31, 31);
    view.defPosition("C16", 69, 485, 31, 31);
    view.defPosition("D16", 101, 485, 31, 31);
    view.defPosition("E16", 133, 485, 31, 31);
    view.defPosition("F16", 165, 485, 31, 31);
    view.defPosition("G16", 197, 485, 31, 31);
    view.defPosition("H16", 229, 485, 31, 31);
    view.defPosition("I16", 261, 485, 31, 31);
    view.defPosition("J16", 293, 485, 31, 31);
    view.defPosition("K16", 325, 485, 31, 31);
    view.defPosition("L16", 357, 485, 31, 31);
    view.defPosition("M16", 389, 485, 31, 31);
    view.defPosition("N16", 421, 485, 31, 31);
    view.defPosition("O16", 453, 485, 31, 31);
    view.defPosition("P16", 485, 485, 31, 31);
    view.defPosition("Q16", 517, 485, 31, 31);
    view.defPosition("R16", 549, 485, 31, 31);
    view.defPosition("S16", 581, 485, 31, 31);
    view.defPosition("A17", 5, 517, 31, 31);
    view.defPosition("B17", 37, 517, 31, 31);
    view.defPosition("C17", 69, 517, 31, 31);
    view.defPosition("D17", 101, 517, 31, 31);
    view.defPosition("E17", 133, 517, 31, 31);
    view.defPosition("F17", 165, 517, 31, 31);
    view.defPosition("G17", 197, 517, 31, 31);
    view.defPosition("H17", 229, 517, 31, 31);
    view.defPosition("I17", 261, 517, 31, 31);
    view.defPosition("J17", 293, 517, 31, 31);
    view.defPosition("K17", 325, 517, 31, 31);
    view.defPosition("L17", 357, 517, 31, 31);
    view.defPosition("M17", 389, 517, 31, 31);
    view.defPosition("N17", 421, 517, 31, 31);
    view.defPosition("O17", 453, 517, 31, 31);
    view.defPosition("P17", 485, 517, 31, 31);
    view.defPosition("Q17", 517, 517, 31, 31);
    view.defPosition("R17", 549, 517, 31, 31);
    view.defPosition("S17", 581, 517, 31, 31);
    view.defPosition("A18", 5, 549, 31, 31);
    view.defPosition("B18", 37, 549, 31, 31);
    view.defPosition("C18", 69, 549, 31, 31);
    view.defPosition("D18", 101, 549, 31, 31);
    view.defPosition("E18", 133, 549, 31, 31);
    view.defPosition("F18", 165, 549, 31, 31);
    view.defPosition("G18", 197, 549, 31, 31);
    view.defPosition("H18", 229, 549, 31, 31);
    view.defPosition("I18", 261, 549, 31, 31);
    view.defPosition("J18", 293, 549, 31, 31);
    view.defPosition("K18", 325, 549, 31, 31);
    view.defPosition("L18", 357, 549, 31, 31);
    view.defPosition("M18", 389, 549, 31, 31);
    view.defPosition("N18", 421, 549, 31, 31);
    view.defPosition("O18", 453, 549, 31, 31);
    view.defPosition("P18", 485, 549, 31, 31);
    view.defPosition("Q18", 517, 549, 31, 31);
    view.defPosition("R18", 549, 549, 31, 31);
    view.defPosition("S18", 581, 549, 31, 31);
    view.defPosition("A19", 5, 581, 31, 31);
    view.defPosition("B19", 37, 581, 31, 31);
    view.defPosition("C19", 69, 581, 31, 31);
    view.defPosition("D19", 101, 581, 31, 31);
    view.defPosition("E19", 133, 581, 31, 31);
    view.defPosition("F19", 165, 581, 31, 31);
    view.defPosition("G19", 197, 581, 31, 31);
    view.defPosition("H19", 229, 581, 31, 31);
    view.defPosition("I19", 261, 581, 31, 31);
    view.defPosition("J19", 293, 581, 31, 31);
    view.defPosition("K19", 325, 581, 31, 31);
    view.defPosition("L19", 357, 581, 31, 31);
    view.defPosition("M19", 389, 581, 31, 31);
    view.defPosition("N19", 421, 581, 31, 31);
    view.defPosition("O19", 453, 581, 31, 31);
    view.defPosition("P19", 485, 581, 31, 31);
    view.defPosition("Q19", 517, 581, 31, 31);
    view.defPosition("R19", 549, 581, 31, 31);
    view.defPosition("S19", 581, 581, 31, 31);
}
