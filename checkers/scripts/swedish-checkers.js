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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("deferred-captures", "true");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");
    design.addDirection("swf");
    design.addDirection("nbf");
    design.addDirection("sbf");
    design.addDirection("nwf");
    design.addDirection("swt");
    design.addDirection("nbt");
    design.addDirection("sbt");
    design.addDirection("nwt");
    design.addDirection("next");

    design.addPlayer("SouthWhite", [1, 0, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPlayer("NorthBlack", [1, 0, 3, 2, 5, 0, 1, 2, 9, 3, 11, 4, 12]);
    design.addPlayer("SouthBlack", [0, 1, 2, 3, 6, 0, 1, 2, 10, 3, 8, 4, 12]);
    design.addPlayer("NorthWhite", [1, 0, 3, 2, 7, 0, 1, 2, 11, 3, 9, 4, 12]);
    design.addTurn(1);
    design.addTurn(2);
    design.addTurn(4);
    design.addTurn(3);


    design.addPosition("X8", [0, 0, 0, 0, 141, 61, 0, 0, 0, 0, 0, 20, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0, 158, 9, 148, -1, 0]);
    design.addPosition("b8", [0, 19, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("c8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d8", [0, 19, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("e8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f8", [0, 19, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("g8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h8", [0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y8", [0, 0, 0, 0, 132, 52, 0, 0, 0, 0, 131, 20, 0]);
    design.addPosition("Z8", [0, 0, 0, 0, 0, 0, 141, 61, 0, 20, 0, 0, 0]);
    design.addPosition("i8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j8", [0, 19, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("k8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l8", [0, 19, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("m8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("n8", [0, 19, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("o8", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("p8", [0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T8", [0, 0, 0, 0, 0, 0, 132, 52, 131, 20, 0, 0, 0]);
    design.addPosition("X7", [0, 0, 0, 0, 121, 41, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("a7", [-19, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("b7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c7", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("d7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("e7", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("f7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g7", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("h7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("Y7", [0, 0, 0, 0, 112, 32, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("Z7", [0, 0, 0, 0, 0, 0, 121, 41, -20, 20, 0, 0, 0]);
    design.addPosition("i7", [-19, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("j7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("k7", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("l7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m7", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("n7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("o7", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("p7", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("T7", [0, 0, 0, 0, 0, 0, 112, 32, -20, 20, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 101, 21, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("a6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b6", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("c6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d6", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("e6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f6", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("g6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h6", [0, 19, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("Y6", [0, 0, 0, 0, 92, 12, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("Z6", [0, 0, 0, 0, 0, 0, 101, 21, -20, 20, 0, 0, 0]);
    design.addPosition("i6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j6", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("k6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l6", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("m6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("n6", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("o6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("p6", [0, 19, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("T6", [0, 0, 0, 0, 0, 0, 92, 12, -20, 20, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 81, 1, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("a5", [-19, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("b5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c5", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("d5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("e5", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("f5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g5", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("h5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("Y5", [0, 0, 0, 0, 72, -8, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("Z5", [0, 0, 0, 0, 0, 0, 81, 1, -20, 20, 0, 0, 0]);
    design.addPosition("i5", [-19, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("j5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("k5", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("l5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m5", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("n5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("o5", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("p5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("T5", [0, 0, 0, 0, 0, 0, 72, -8, -20, 20, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 61, -19, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("a4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b4", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("c4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d4", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("e4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f4", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("g4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h4", [0, 19, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Y4", [0, 0, 0, 0, 52, -28, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("Z4", [0, 0, 0, 0, 0, 0, 61, -19, -20, 20, 0, 0, 0]);
    design.addPosition("i4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j4", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("k4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l4", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("m4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("n4", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 61]);
    design.addPosition("o4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("p4", [0, 19, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T4", [0, 0, 0, 0, 0, 0, 52, -28, -20, 20, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 41, -39, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("a3", [-19, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("b3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c3", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("d3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("e3", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("f3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g3", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("h3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("Y3", [0, 0, 0, 0, 32, -48, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("Z3", [0, 0, 0, 0, 0, 0, 41, -39, -20, 20, 0, 0, 0]);
    design.addPosition("i3", [-19, 0, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("j3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("k3", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("l3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m3", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("n3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("o3", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, 21]);
    design.addPosition("p3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("T3", [0, 0, 0, 0, 0, 0, 32, -48, -20, 20, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 21, -59, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("a2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("b2", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("c2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("d2", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("e2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("f2", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("g2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("h2", [0, 19, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("Y2", [0, 0, 0, 0, 12, -68, 0, 0, 0, 0, -20, 20, 0]);
    design.addPosition("Z2", [0, 0, 0, 0, 0, 0, 21, -59, -20, 20, 0, 0, 0]);
    design.addPosition("i2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("j2", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("k2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("l2", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("m2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("n2", [-19, 19, -21, 21, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("o2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("p2", [0, 19, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 12, -68, -20, 20, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 1, -79, 0, 0, 0, 0, -20, -131, 0]);
    design.addPosition("a1", [-19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("b1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("c1", [-19, 0, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("d1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("e1", [-19, 0, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("f1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("g1", [-19, 0, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("h1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("Y1", [0, 0, 0, 0, -8, -88, 0, 0, 0, 0, -20, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 0, 0, 0, 1, -79, -20, -131, 0, 0, 0]);
    design.addPosition("i1", [-19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("j1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("k1", [-19, 0, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("l1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("m1", [-19, 0, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("n1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("o1", [-19, 0, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, -40]);
    design.addPosition("p1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, -8, -88, -20, 0, 0, 0, 0]);

    design.addZone("promotion", 4, [151, 153, 155, 157]);
    design.addZone("promotion", 2, [141, 143, 145, 147]);
    design.addZone("promotion", 1, [2, 4, 6, 8]);
    design.addZone("promotion", 3, [12, 14, 16, 18]);
    design.addZone("best", 4, [103, 86, 113, 96]);
    design.addZone("best", 2, [103, 86, 113, 96]);
    design.addZone("best", 1, [63, 46, 73, 56]);
    design.addZone("best", 3, [63, 46, 73, 56]);
    design.addZone("reserve", 4, [140, 120, 100, 80, 60, 40, 20, 0, 149, 129, 109, 89, 69, 49, 29, 9, 150, 130, 110, 90, 70, 50, 30, 10, 159, 139, 119, 99, 79, 59, 39, 19]);
    design.addZone("reserve", 2, [140, 120, 100, 80, 60, 40, 20, 0, 149, 129, 109, 89, 69, 49, 29, 9, 150, 130, 110, 90, 70, 50, 30, 10, 159, 139, 119, 99, 79, 59, 39, 19]);
    design.addZone("reserve", 1, [140, 120, 100, 80, 60, 40, 20, 0, 149, 129, 109, 89, 69, 49, 29, 9, 150, 130, 110, 90, 70, 50, 30, 10, 159, 139, 119, 99, 79, 59, 39, 19]);
    design.addZone("reserve", 3, [140, 120, 100, 80, 60, 40, 20, 0, 149, 129, 109, 89, 69, 49, 29, 9, 150, 130, 110, 90, 70, 50, 30, 10, 159, 139, 119, 99, 79, 59, 39, 19]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	5);
    design.addCommand(0, ZRF.PROMOTE,	1);	// King
    design.addCommand(0, ZRF.MODE,	2);	// continue-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	3);
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	1);	// King
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.ON_BOARD_DIR,	12);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-11);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-5);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	18);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-6);
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FORK,	4);
    design.addCommand(3, ZRF.MODE,	2);	// continue-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-19);
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	18);
    design.addCommand(4, ZRF.FUNCTION,	6);	// mark
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-6);
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.FUNCTION,	7);	// back
    design.addCommand(4, ZRF.FORK,	4);
    design.addCommand(4, ZRF.MODE,	2);	// continue-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-19);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 1);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 2, [4, 12], 1);

    design.addPiece("King", 1, 10);
    design.addMove(1, 3, [2, 2, 2, 2, 2], 0, 10);
    design.addMove(1, 3, [0, 0, 0, 0, 0], 0, 10);
    design.addMove(1, 3, [1, 1, 1, 1, 1], 0, 10);
    design.addMove(1, 3, [3, 3, 3, 3, 3], 0, 10);
    design.addMove(1, 4, [2, 2, 2, 2, 2], 2, 10);
    design.addMove(1, 4, [0, 0, 0, 0, 0], 2, 10);
    design.addMove(1, 4, [1, 1, 1, 1, 1], 2, 10);
    design.addMove(1, 4, [3, 3, 3, 3, 3], 2, 10);
    design.addMove(1, 5, [2, 2], 1, 10);
    design.addMove(1, 5, [0, 0], 1, 10);
    design.addMove(1, 5, [1, 1], 1, 10);
    design.addMove(1, 5, [3, 3], 1, 10);

    design.setup("SouthWhite", "Man", 141);
    design.setup("SouthWhite", "Man", 143);
    design.setup("SouthWhite", "Man", 145);
    design.setup("SouthWhite", "Man", 147);
    design.setup("SouthWhite", "Man", 122);
    design.setup("SouthWhite", "Man", 124);
    design.setup("SouthWhite", "Man", 126);
    design.setup("SouthWhite", "Man", 128);
    design.setup("SouthWhite", "Man", 101);
    design.setup("SouthWhite", "Man", 103);
    design.setup("SouthWhite", "Man", 105);
    design.setup("SouthWhite", "Man", 107);
    design.setup("NorthBlack", "Man", 2);
    design.setup("NorthBlack", "Man", 4);
    design.setup("NorthBlack", "Man", 6);
    design.setup("NorthBlack", "Man", 8);
    design.setup("NorthBlack", "Man", 21);
    design.setup("NorthBlack", "Man", 23);
    design.setup("NorthBlack", "Man", 25);
    design.setup("NorthBlack", "Man", 27);
    design.setup("NorthBlack", "Man", 42);
    design.setup("NorthBlack", "Man", 44);
    design.setup("NorthBlack", "Man", 46);
    design.setup("NorthBlack", "Man", 48);
    design.setup("NorthWhite", "Man", 12);
    design.setup("NorthWhite", "Man", 14);
    design.setup("NorthWhite", "Man", 16);
    design.setup("NorthWhite", "Man", 18);
    design.setup("NorthWhite", "Man", 31);
    design.setup("NorthWhite", "Man", 33);
    design.setup("NorthWhite", "Man", 35);
    design.setup("NorthWhite", "Man", 37);
    design.setup("NorthWhite", "Man", 52);
    design.setup("NorthWhite", "Man", 54);
    design.setup("NorthWhite", "Man", 56);
    design.setup("NorthWhite", "Man", 58);
    design.setup("SouthBlack", "Man", 151);
    design.setup("SouthBlack", "Man", 153);
    design.setup("SouthBlack", "Man", 155);
    design.setup("SouthBlack", "Man", 157);
    design.setup("SouthBlack", "Man", 132);
    design.setup("SouthBlack", "Man", 134);
    design.setup("SouthBlack", "Man", 136);
    design.setup("SouthBlack", "Man", 138);
    design.setup("SouthBlack", "Man", 111);
    design.setup("SouthBlack", "Man", 113);
    design.setup("SouthBlack", "Man", 115);
    design.setup("SouthBlack", "Man", 117);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthWhiteMan", "SouthWhite Man");
    view.defPiece("NorthWhiteMan", "NorthWhite Man");
    view.defPiece("SouthBlackMan", "SouthBlack Man");
    view.defPiece("NorthBlackMan", "NorthBlack Man");
    view.defPiece("SouthWhiteKing", "SouthWhite King");
    view.defPiece("NorthWhiteKing", "NorthWhite King");
    view.defPiece("SouthBlackKing", "SouthBlack King");
    view.defPiece("NorthBlackKing", "NorthBlack King");
 
    view.defPosition("X8", 2, 2, 50, 50);
    view.defPosition("a8", 52, 2, 50, 50);
    view.defPosition("b8", 102, 2, 50, 50);
    view.defPosition("c8", 152, 2, 50, 50);
    view.defPosition("d8", 202, 2, 50, 50);
    view.defPosition("e8", 252, 2, 50, 50);
    view.defPosition("f8", 302, 2, 50, 50);
    view.defPosition("g8", 352, 2, 50, 50);
    view.defPosition("h8", 402, 2, 50, 50);
    view.defPosition("Y8", 452, 2, 50, 50);
    view.defPosition("Z8", 502, 2, 50, 50);
    view.defPosition("i8", 552, 2, 50, 50);
    view.defPosition("j8", 602, 2, 50, 50);
    view.defPosition("k8", 652, 2, 50, 50);
    view.defPosition("l8", 702, 2, 50, 50);
    view.defPosition("m8", 752, 2, 50, 50);
    view.defPosition("n8", 802, 2, 50, 50);
    view.defPosition("o8", 852, 2, 50, 50);
    view.defPosition("p8", 902, 2, 50, 50);
    view.defPosition("T8", 952, 2, 50, 50);
    view.defPosition("X7", 2, 52, 50, 50);
    view.defPosition("a7", 52, 52, 50, 50);
    view.defPosition("b7", 102, 52, 50, 50);
    view.defPosition("c7", 152, 52, 50, 50);
    view.defPosition("d7", 202, 52, 50, 50);
    view.defPosition("e7", 252, 52, 50, 50);
    view.defPosition("f7", 302, 52, 50, 50);
    view.defPosition("g7", 352, 52, 50, 50);
    view.defPosition("h7", 402, 52, 50, 50);
    view.defPosition("Y7", 452, 52, 50, 50);
    view.defPosition("Z7", 502, 52, 50, 50);
    view.defPosition("i7", 552, 52, 50, 50);
    view.defPosition("j7", 602, 52, 50, 50);
    view.defPosition("k7", 652, 52, 50, 50);
    view.defPosition("l7", 702, 52, 50, 50);
    view.defPosition("m7", 752, 52, 50, 50);
    view.defPosition("n7", 802, 52, 50, 50);
    view.defPosition("o7", 852, 52, 50, 50);
    view.defPosition("p7", 902, 52, 50, 50);
    view.defPosition("T7", 952, 52, 50, 50);
    view.defPosition("X6", 2, 102, 50, 50);
    view.defPosition("a6", 52, 102, 50, 50);
    view.defPosition("b6", 102, 102, 50, 50);
    view.defPosition("c6", 152, 102, 50, 50);
    view.defPosition("d6", 202, 102, 50, 50);
    view.defPosition("e6", 252, 102, 50, 50);
    view.defPosition("f6", 302, 102, 50, 50);
    view.defPosition("g6", 352, 102, 50, 50);
    view.defPosition("h6", 402, 102, 50, 50);
    view.defPosition("Y6", 452, 102, 50, 50);
    view.defPosition("Z6", 502, 102, 50, 50);
    view.defPosition("i6", 552, 102, 50, 50);
    view.defPosition("j6", 602, 102, 50, 50);
    view.defPosition("k6", 652, 102, 50, 50);
    view.defPosition("l6", 702, 102, 50, 50);
    view.defPosition("m6", 752, 102, 50, 50);
    view.defPosition("n6", 802, 102, 50, 50);
    view.defPosition("o6", 852, 102, 50, 50);
    view.defPosition("p6", 902, 102, 50, 50);
    view.defPosition("T6", 952, 102, 50, 50);
    view.defPosition("X5", 2, 152, 50, 50);
    view.defPosition("a5", 52, 152, 50, 50);
    view.defPosition("b5", 102, 152, 50, 50);
    view.defPosition("c5", 152, 152, 50, 50);
    view.defPosition("d5", 202, 152, 50, 50);
    view.defPosition("e5", 252, 152, 50, 50);
    view.defPosition("f5", 302, 152, 50, 50);
    view.defPosition("g5", 352, 152, 50, 50);
    view.defPosition("h5", 402, 152, 50, 50);
    view.defPosition("Y5", 452, 152, 50, 50);
    view.defPosition("Z5", 502, 152, 50, 50);
    view.defPosition("i5", 552, 152, 50, 50);
    view.defPosition("j5", 602, 152, 50, 50);
    view.defPosition("k5", 652, 152, 50, 50);
    view.defPosition("l5", 702, 152, 50, 50);
    view.defPosition("m5", 752, 152, 50, 50);
    view.defPosition("n5", 802, 152, 50, 50);
    view.defPosition("o5", 852, 152, 50, 50);
    view.defPosition("p5", 902, 152, 50, 50);
    view.defPosition("T5", 952, 152, 50, 50);
    view.defPosition("X4", 2, 202, 50, 50);
    view.defPosition("a4", 52, 202, 50, 50);
    view.defPosition("b4", 102, 202, 50, 50);
    view.defPosition("c4", 152, 202, 50, 50);
    view.defPosition("d4", 202, 202, 50, 50);
    view.defPosition("e4", 252, 202, 50, 50);
    view.defPosition("f4", 302, 202, 50, 50);
    view.defPosition("g4", 352, 202, 50, 50);
    view.defPosition("h4", 402, 202, 50, 50);
    view.defPosition("Y4", 452, 202, 50, 50);
    view.defPosition("Z4", 502, 202, 50, 50);
    view.defPosition("i4", 552, 202, 50, 50);
    view.defPosition("j4", 602, 202, 50, 50);
    view.defPosition("k4", 652, 202, 50, 50);
    view.defPosition("l4", 702, 202, 50, 50);
    view.defPosition("m4", 752, 202, 50, 50);
    view.defPosition("n4", 802, 202, 50, 50);
    view.defPosition("o4", 852, 202, 50, 50);
    view.defPosition("p4", 902, 202, 50, 50);
    view.defPosition("T4", 952, 202, 50, 50);
    view.defPosition("X3", 2, 252, 50, 50);
    view.defPosition("a3", 52, 252, 50, 50);
    view.defPosition("b3", 102, 252, 50, 50);
    view.defPosition("c3", 152, 252, 50, 50);
    view.defPosition("d3", 202, 252, 50, 50);
    view.defPosition("e3", 252, 252, 50, 50);
    view.defPosition("f3", 302, 252, 50, 50);
    view.defPosition("g3", 352, 252, 50, 50);
    view.defPosition("h3", 402, 252, 50, 50);
    view.defPosition("Y3", 452, 252, 50, 50);
    view.defPosition("Z3", 502, 252, 50, 50);
    view.defPosition("i3", 552, 252, 50, 50);
    view.defPosition("j3", 602, 252, 50, 50);
    view.defPosition("k3", 652, 252, 50, 50);
    view.defPosition("l3", 702, 252, 50, 50);
    view.defPosition("m3", 752, 252, 50, 50);
    view.defPosition("n3", 802, 252, 50, 50);
    view.defPosition("o3", 852, 252, 50, 50);
    view.defPosition("p3", 902, 252, 50, 50);
    view.defPosition("T3", 952, 252, 50, 50);
    view.defPosition("X2", 2, 302, 50, 50);
    view.defPosition("a2", 52, 302, 50, 50);
    view.defPosition("b2", 102, 302, 50, 50);
    view.defPosition("c2", 152, 302, 50, 50);
    view.defPosition("d2", 202, 302, 50, 50);
    view.defPosition("e2", 252, 302, 50, 50);
    view.defPosition("f2", 302, 302, 50, 50);
    view.defPosition("g2", 352, 302, 50, 50);
    view.defPosition("h2", 402, 302, 50, 50);
    view.defPosition("Y2", 452, 302, 50, 50);
    view.defPosition("Z2", 502, 302, 50, 50);
    view.defPosition("i2", 552, 302, 50, 50);
    view.defPosition("j2", 602, 302, 50, 50);
    view.defPosition("k2", 652, 302, 50, 50);
    view.defPosition("l2", 702, 302, 50, 50);
    view.defPosition("m2", 752, 302, 50, 50);
    view.defPosition("n2", 802, 302, 50, 50);
    view.defPosition("o2", 852, 302, 50, 50);
    view.defPosition("p2", 902, 302, 50, 50);
    view.defPosition("T2", 952, 302, 50, 50);
    view.defPosition("X1", 2, 352, 50, 50);
    view.defPosition("a1", 52, 352, 50, 50);
    view.defPosition("b1", 102, 352, 50, 50);
    view.defPosition("c1", 152, 352, 50, 50);
    view.defPosition("d1", 202, 352, 50, 50);
    view.defPosition("e1", 252, 352, 50, 50);
    view.defPosition("f1", 302, 352, 50, 50);
    view.defPosition("g1", 352, 352, 50, 50);
    view.defPosition("h1", 402, 352, 50, 50);
    view.defPosition("Y1", 452, 352, 50, 50);
    view.defPosition("Z1", 502, 352, 50, 50);
    view.defPosition("i1", 552, 352, 50, 50);
    view.defPosition("j1", 602, 352, 50, 50);
    view.defPosition("k1", 652, 352, 50, 50);
    view.defPosition("l1", 702, 352, 50, 50);
    view.defPosition("m1", 752, 352, 50, 50);
    view.defPosition("n1", 802, 352, 50, 50);
    view.defPosition("o1", 852, 352, 50, 50);
    view.defPosition("p1", 902, 352, 50, 50);
    view.defPosition("T1", 952, 352, 50, 50);
}
