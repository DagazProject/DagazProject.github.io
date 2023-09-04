Dagaz.Controller.persistense = "setup";
Dagaz.View.MARK_R = 15;

Dagaz.Controller.addSound(10, "sounds/turnover/pawn.wav", true);
Dagaz.Controller.addSound(11, "sounds/turnover/knight.wav", true);
Dagaz.Controller.addSound(12, "sounds/turnover/bishop.wav", true);
Dagaz.Controller.addSound(13, "sounds/turnover/queen.wav", true);
Dagaz.Controller.addSound(14, "sounds/turnover/rook.wav", true);
Dagaz.Controller.addSound(15, "sounds/turnover/castle.wav", true);

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
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("n");  // 0
    design.addDirection("e");  // 1
    design.addDirection("w");  // 2 
    design.addDirection("s");  // 3 
    design.addDirection("nw"); // 4
    design.addDirection("ne"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("se"); // 7
    design.addDirection("up"); // 8
    design.addDirection("dn"); // 9

    design.addPlayer("Gold", [3, 2, 1, 0, 7, 6, 5, 4, 9, 8]);
    design.addPlayer("Silver", [3, 1, 2, 0, 6, 7, 4, 5, 8, 9]);

    design.addPosition("a8t", [0, 8, 0, 1, 0, 0, 0, 9, 0, 64]);
    design.addPosition("a7t", [-1, 8, 0, 1, 0, 7, 0, 9, 0, 64]);
    design.addPosition("a6t", [-1, 8, 0, 1, 0, 7, 0, 9, 0, 64]);
    design.addPosition("a5t", [-1, 8, 0, 1, 0, 7, 0, 9, 0, 64]);
    design.addPosition("a4t", [-1, 8, 0, 1, 0, 7, 0, 9, 0, 64]);
    design.addPosition("a3t", [-1, 8, 0, 1, 0, 7, 0, 9, 0, 64]);
    design.addPosition("a2t", [-1, 8, 0, 1, 0, 7, 0, 9, 0, 64]);
    design.addPosition("a1t", [-1, 8, 0, 0, 0, 7, 0, 0, 0, 64]);
    design.addPosition("b8t", [0, 8, -8, 1, 0, 0, -7, 9, 0, 64]);
    design.addPosition("b7t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("b6t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("b5t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("b4t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("b3t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("b2t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("b1t", [-1, 8, -8, 0, -9, 7, 0, 0, 0, 64]);
    design.addPosition("c8t", [0, 8, -8, 1, 0, 0, -7, 9, 0, 64]);
    design.addPosition("c7t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("c6t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("c5t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("c4t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("c3t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("c2t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("c1t", [-1, 8, -8, 0, -9, 7, 0, 0, 0, 64]);
    design.addPosition("d8t", [0, 8, -8, 1, 0, 0, -7, 9, 0, 64]);
    design.addPosition("d7t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("d6t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("d5t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("d4t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("d3t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("d2t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("d1t", [-1, 8, -8, 0, -9, 7, 0, 0, 0, 64]);
    design.addPosition("e8t", [0, 8, -8, 1, 0, 0, -7, 9, 0, 64]);
    design.addPosition("e7t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("e6t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("e5t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("e4t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("e3t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("e2t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("e1t", [-1, 8, -8, 0, -9, 7, 0, 0, 0, 64]);
    design.addPosition("f8t", [0, 8, -8, 1, 0, 0, -7, 9, 0, 64]);
    design.addPosition("f7t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("f6t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("f5t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("f4t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("f3t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("f2t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("f1t", [-1, 8, -8, 0, -9, 7, 0, 0, 0, 64]);
    design.addPosition("g8t", [0, 8, -8, 1, 0, 0, -7, 9, 0, 64]);
    design.addPosition("g7t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("g6t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("g5t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("g4t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("g3t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("g2t", [-1, 8, -8, 1, -9, 7, -7, 9, 0, 64]);
    design.addPosition("g1t", [-1, 8, -8, 0, -9, 7, 0, 0, 0, 64]);
    design.addPosition("h8t", [0, 0, -8, 1, 0, 0, -7, 0, 0, 64]);
    design.addPosition("h7t", [-1, 0, -8, 1, -9, 0, -7, 0, 0, 64]);
    design.addPosition("h6t", [-1, 0, -8, 1, -9, 0, -7, 0, 0, 64]);
    design.addPosition("h5t", [-1, 0, -8, 1, -9, 0, -7, 0, 0, 64]);
    design.addPosition("h4t", [-1, 0, -8, 1, -9, 0, -7, 0, 0, 64]);
    design.addPosition("h3t", [-1, 0, -8, 1, -9, 0, -7, 0, 0, 64]);
    design.addPosition("h2t", [-1, 0, -8, 1, -9, 0, -7, 0, 0, 64]);
    design.addPosition("h1t", [-1, 0, -8, 0, -9, 0, 0, 0, 0, 64]);
    design.addPosition("a8s", [0, 8, 0, 1, 0, 0, 0, 9, -64, 64]);
    design.addPosition("a7s", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 64]);
    design.addPosition("a6s", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 64]);
    design.addPosition("a5s", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 64]);
    design.addPosition("a4s", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 64]);
    design.addPosition("a3s", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 64]);
    design.addPosition("a2s", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 64]);
    design.addPosition("a1s", [-1, 8, 0, 0, 0, 7, 0, 0, -64, 64]);
    design.addPosition("b8s", [0, 8, -8, 1, 0, 0, -7, 9, -64, 64]);
    design.addPosition("b7s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("b6s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("b5s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("b4s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("b3s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("b2s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("b1s", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 64]);
    design.addPosition("c8s", [0, 8, -8, 1, 0, 0, -7, 9, -64, 64]);
    design.addPosition("c7s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("c6s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("c5s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("c4s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("c3s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("c2s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("c1s", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 64]);
    design.addPosition("d8s", [0, 8, -8, 1, 0, 0, -7, 9, -64, 64]);
    design.addPosition("d7s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("d6s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("d5s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("d4s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("d3s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("d2s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("d1s", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 64]);
    design.addPosition("e8s", [0, 8, -8, 1, 0, 0, -7, 9, -64, 64]);
    design.addPosition("e7s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("e6s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("e5s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("e4s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("e3s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("e2s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("e1s", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 64]);
    design.addPosition("f8s", [0, 8, -8, 1, 0, 0, -7, 9, -64, 64]);
    design.addPosition("f7s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("f6s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("f5s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("f4s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("f3s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("f2s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("f1s", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 64]);
    design.addPosition("g8s", [0, 8, -8, 1, 0, 0, -7, 9, -64, 64]);
    design.addPosition("g7s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("g6s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("g5s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("g4s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("g3s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("g2s", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 64]);
    design.addPosition("g1s", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 64]);
    design.addPosition("h8s", [0, 0, -8, 1, 0, 0, -7, 0, -64, 64]);
    design.addPosition("h7s", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 64]);
    design.addPosition("h6s", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 64]);
    design.addPosition("h5s", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 64]);
    design.addPosition("h4s", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 64]);
    design.addPosition("h3s", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 64]);
    design.addPosition("h2s", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 64]);
    design.addPosition("h1s", [-1, 0, -8, 0, -9, 0, 0, 0, -64, 64]);
    design.addPosition("a8b", [0, 8, 0, 1, 0, 0, 0, 9, -64, 0]);
    design.addPosition("a7b", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 0]);
    design.addPosition("a6b", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 0]);
    design.addPosition("a5b", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 0]);
    design.addPosition("a4b", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 0]);
    design.addPosition("a3b", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 0]);
    design.addPosition("a2b", [-1, 8, 0, 1, 0, 7, 0, 9, -64, 0]);
    design.addPosition("a1b", [-1, 8, 0, 0, 0, 7, 0, 0, -64, 0]);
    design.addPosition("b8b", [0, 8, -8, 1, 0, 0, -7, 9, -64, 0]);
    design.addPosition("b7b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("b6b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("b5b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("b4b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("b3b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("b2b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("b1b", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 0]);
    design.addPosition("c8b", [0, 8, -8, 1, 0, 0, -7, 9, -64, 0]);
    design.addPosition("c7b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("c6b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("c5b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("c4b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("c3b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("c2b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("c1b", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 0]);
    design.addPosition("d8b", [0, 8, -8, 1, 0, 0, -7, 9, -64, 0]);
    design.addPosition("d7b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("d6b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("d5b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("d4b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("d3b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("d2b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("d1b", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 0]);
    design.addPosition("e8b", [0, 8, -8, 1, 0, 0, -7, 9, -64, 0]);
    design.addPosition("e7b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("e6b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("e5b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("e4b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("e3b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("e2b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("e1b", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 0]);
    design.addPosition("f8b", [0, 8, -8, 1, 0, 0, -7, 9, -64, 0]);
    design.addPosition("f7b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("f6b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("f5b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("f4b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("f3b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("f2b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("f1b", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 0]);
    design.addPosition("g8b", [0, 8, -8, 1, 0, 0, -7, 9, -64, 0]);
    design.addPosition("g7b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("g6b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("g5b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("g4b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("g3b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("g2b", [-1, 8, -8, 1, -9, 7, -7, 9, -64, 0]);
    design.addPosition("g1b", [-1, 8, -8, 0, -9, 7, 0, 0, -64, 0]);
    design.addPosition("h8b", [0, 0, -8, 1, 0, 0, -7, 0, -64, 0]);
    design.addPosition("h7b", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 0]);
    design.addPosition("h6b", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 0]);
    design.addPosition("h5b", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 0]);
    design.addPosition("h4b", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 0]);
    design.addPosition("h3b", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 0]);
    design.addPosition("h2b", [-1, 0, -8, 1, -9, 0, -7, 0, -64, 0]);
    design.addPosition("h1b", [-1, 0, -8, 0, -9, 0, 0, 0, -64, 0]);

    design.addZone("last-rank", 1, [128, 136, 144, 152, 160, 168, 176, 184, 64, 72, 80, 88, 96, 104, 112, 120, 0, 8, 16, 24, 32, 40, 48, 56]);
    design.addZone("last-rank", 2, [135, 143, 151, 159, 167, 175, 183, 191, 71, 79, 87, 95, 103, 111, 119, 127, 7, 15, 23, 31, 39, 47, 55, 63]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.PARAM,	3);	// $4
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	5);
    design.addCommand(1, ZRF.PARAM,	4);	// $5
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.PARAM,	5);	// $6
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	39);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.ON_BOARD_DIR,	9);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.PARAM,	5);	// $6
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-40);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 2);
    design.addMove(0, 0, [0], 0, 10);
    design.addMove(0, 1, [0, 8, 8, 9, 9, 0], 1, 15);
    design.addMove(0, 0, [4], 2, 10);
    design.addMove(0, 0, [5], 2, 10);
    design.addMove(0, 2, [0, 4], 3, 11);
    design.addMove(0, 2, [0, 5], 3, 11);
    design.addMove(0, 2, [3, 6], 3, 11);
    design.addMove(0, 2, [3, 7], 3, 11);
    design.addMove(0, 2, [1, 5], 3, 11);
    design.addMove(0, 2, [1, 7], 3, 11);
    design.addMove(0, 2, [2, 4], 3, 11);
    design.addMove(0, 2, [2, 6], 3, 11);

    design.addPiece("Bishop", 1, 20);
    design.addMove(1, 3, [4, 8, 8, 9, 9, 4], 4, 12);
    design.addMove(1, 3, [5, 8, 8, 9, 9, 5], 4, 12);
    design.addMove(1, 3, [6, 8, 8, 9, 9, 6], 4, 12);
    design.addMove(1, 3, [7, 8, 8, 9, 9, 7], 4, 12);
    design.addMove(1, 3, [0, 8, 8, 9, 9, 0], 5, 13);
    design.addMove(1, 3, [1, 8, 8, 9, 9, 1], 5, 13);
    design.addMove(1, 3, [2, 8, 8, 9, 9, 2], 5, 13);
    design.addMove(1, 3, [3, 8, 8, 9, 9, 3], 5, 13);

    design.addPiece("Rook", 2, 10);
    design.addMove(2, 3, [0, 8, 8, 9, 9, 0], 6, 14);
    design.addMove(2, 3, [1, 8, 8, 9, 9, 1], 6, 14);
    design.addMove(2, 3, [2, 8, 8, 9, 9, 2], 6, 14);
    design.addMove(2, 3, [3, 8, 8, 9, 9, 3], 6, 14);

    design.setup("Gold", "Pawn", 135);
    design.setup("Gold", "Pawn", 142);
    design.setup("Gold", "Pawn", 151);
    design.setup("Gold", "Pawn", 158);
    design.setup("Gold", "Pawn", 167);
    design.setup("Gold", "Pawn", 174);
    design.setup("Gold", "Pawn", 183);
    design.setup("Gold", "Pawn", 190);
    design.setup("Gold", "Bishop", 71);
    design.setup("Gold", "Bishop", 78);
    design.setup("Gold", "Bishop", 87);
    design.setup("Gold", "Bishop", 94);
    design.setup("Gold", "Bishop", 103);
    design.setup("Gold", "Bishop", 110);
    design.setup("Gold", "Bishop", 119);
    design.setup("Gold", "Bishop", 126);
    design.setup("Gold", "Rook", 7);
    design.setup("Gold", "Rook", 14);
    design.setup("Gold", "Rook", 23);
    design.setup("Gold", "Rook", 30);
    design.setup("Gold", "Rook", 39);
    design.setup("Gold", "Rook", 46);
    design.setup("Gold", "Rook", 55);
    design.setup("Gold", "Rook", 62);
    design.setup("Silver", "Pawn", 128);
    design.setup("Silver", "Pawn", 137);
    design.setup("Silver", "Pawn", 144);
    design.setup("Silver", "Pawn", 153);
    design.setup("Silver", "Pawn", 160);
    design.setup("Silver", "Pawn", 169);
    design.setup("Silver", "Pawn", 176);
    design.setup("Silver", "Pawn", 185);
    design.setup("Silver", "Bishop", 64);
    design.setup("Silver", "Bishop", 73);
    design.setup("Silver", "Bishop", 80);
    design.setup("Silver", "Bishop", 89);
    design.setup("Silver", "Bishop", 96);
    design.setup("Silver", "Bishop", 105);
    design.setup("Silver", "Bishop", 112);
    design.setup("Silver", "Bishop", 121);
    design.setup("Silver", "Rook", 0);
    design.setup("Silver", "Rook", 9);
    design.setup("Silver", "Rook", 16);
    design.setup("Silver", "Rook", 25);
    design.setup("Silver", "Rook", 32);
    design.setup("Silver", "Rook", 41);
    design.setup("Silver", "Rook", 48);
    design.setup("Silver", "Rook", 57);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("GoldPawn", "Gold Pawn");
    view.defPiece("SilverPawn", "Silver Pawn");
    view.defPiece("GoldBishop", "Gold Bishop");
    view.defPiece("SilverBishop", "Silver Bishop");
    view.defPiece("GoldRook", "Gold Rook");
    view.defPiece("SilverRook", "Silver Rook");
 
    view.defPosition("a8t", 44, 46, 22, 22);
    view.defPosition("a7t", 44, 115, 22, 22);
    view.defPosition("a6t", 44, 184, 22, 22);
    view.defPosition("a5t", 44, 253, 22, 22);
    view.defPosition("a4t", 44, 322, 22, 22);
    view.defPosition("a3t", 44, 391, 22, 22);
    view.defPosition("a2t", 44, 460, 22, 22);
    view.defPosition("a1t", 44, 529, 22, 22);
    view.defPosition("b8t", 113, 46, 22, 22);
    view.defPosition("b7t", 113, 115, 22, 22);
    view.defPosition("b6t", 113, 184, 22, 22);
    view.defPosition("b5t", 113, 253, 22, 22);
    view.defPosition("b4t", 113, 322, 22, 22);
    view.defPosition("b3t", 113, 391, 22, 22);
    view.defPosition("b2t", 113, 460, 22, 22);
    view.defPosition("b1t", 113, 529, 22, 22);
    view.defPosition("c8t", 182, 46, 22, 22);
    view.defPosition("c7t", 182, 115, 22, 22);
    view.defPosition("c6t", 182, 184, 22, 22);
    view.defPosition("c5t", 182, 253, 22, 22);
    view.defPosition("c4t", 182, 322, 22, 22);
    view.defPosition("c3t", 182, 391, 22, 22);
    view.defPosition("c2t", 182, 460, 22, 22);
    view.defPosition("c1t", 182, 529, 22, 22);
    view.defPosition("d8t", 251, 46, 22, 22);
    view.defPosition("d7t", 251, 115, 22, 22);
    view.defPosition("d6t", 251, 184, 22, 22);
    view.defPosition("d5t", 251, 253, 22, 22);
    view.defPosition("d4t", 251, 322, 22, 22);
    view.defPosition("d3t", 251, 391, 22, 22);
    view.defPosition("d2t", 251, 460, 22, 22);
    view.defPosition("d1t", 251, 529, 22, 22);
    view.defPosition("e8t", 320, 46, 22, 22);
    view.defPosition("e7t", 320, 115, 22, 22);
    view.defPosition("e6t", 320, 184, 22, 22);
    view.defPosition("e5t", 320, 253, 22, 22);
    view.defPosition("e4t", 320, 322, 22, 22);
    view.defPosition("e3t", 320, 391, 22, 22);
    view.defPosition("e2t", 320, 460, 22, 22);
    view.defPosition("e1t", 320, 529, 22, 22);
    view.defPosition("f8t", 389, 46, 22, 22);
    view.defPosition("f7t", 389, 115, 22, 22);
    view.defPosition("f6t", 389, 184, 22, 22);
    view.defPosition("f5t", 389, 253, 22, 22);
    view.defPosition("f4t", 389, 322, 22, 22);
    view.defPosition("f3t", 389, 391, 22, 22);
    view.defPosition("f2t", 389, 460, 22, 22);
    view.defPosition("f1t", 389, 529, 22, 22);
    view.defPosition("g8t", 458, 46, 22, 22);
    view.defPosition("g7t", 458, 115, 22, 22);
    view.defPosition("g6t", 458, 184, 22, 22);
    view.defPosition("g5t", 458, 253, 22, 22);
    view.defPosition("g4t", 458, 322, 22, 22);
    view.defPosition("g3t", 458, 391, 22, 22);
    view.defPosition("g2t", 458, 460, 22, 22);
    view.defPosition("g1t", 458, 529, 22, 22);
    view.defPosition("h8t", 527, 46, 22, 22);
    view.defPosition("h7t", 527, 115, 22, 22);
    view.defPosition("h6t", 527, 184, 22, 22);
    view.defPosition("h5t", 527, 253, 22, 22);
    view.defPosition("h4t", 527, 322, 22, 22);
    view.defPosition("h3t", 527, 391, 22, 22);
    view.defPosition("h2t", 527, 460, 22, 22);
    view.defPosition("h1t", 527, 529, 22, 22);
    view.defPosition("a8s", 34, 36, 42, 42);
    view.defPosition("a7s", 34, 105, 42, 42);
    view.defPosition("a6s", 34, 174, 42, 42);
    view.defPosition("a5s", 34, 243, 42, 42);
    view.defPosition("a4s", 34, 312, 42, 42);
    view.defPosition("a3s", 34, 381, 42, 42);
    view.defPosition("a2s", 34, 450, 42, 42);
    view.defPosition("a1s", 34, 519, 42, 42);
    view.defPosition("b8s", 103, 36, 42, 42);
    view.defPosition("b7s", 103, 105, 42, 42);
    view.defPosition("b6s", 103, 174, 42, 42);
    view.defPosition("b5s", 103, 243, 42, 42);
    view.defPosition("b4s", 103, 312, 42, 42);
    view.defPosition("b3s", 103, 381, 42, 42);
    view.defPosition("b2s", 103, 450, 42, 42);
    view.defPosition("b1s", 103, 519, 42, 42);
    view.defPosition("c8s", 172, 36, 42, 42);
    view.defPosition("c7s", 172, 105, 42, 42);
    view.defPosition("c6s", 172, 174, 42, 42);
    view.defPosition("c5s", 172, 243, 42, 42);
    view.defPosition("c4s", 172, 312, 42, 42);
    view.defPosition("c3s", 172, 381, 42, 42);
    view.defPosition("c2s", 172, 450, 42, 42);
    view.defPosition("c1s", 172, 519, 42, 42);
    view.defPosition("d8s", 241, 36, 42, 42);
    view.defPosition("d7s", 241, 105, 42, 42);
    view.defPosition("d6s", 241, 174, 42, 42);
    view.defPosition("d5s", 241, 243, 42, 42);
    view.defPosition("d4s", 241, 312, 42, 42);
    view.defPosition("d3s", 241, 381, 42, 42);
    view.defPosition("d2s", 241, 450, 42, 42);
    view.defPosition("d1s", 241, 519, 42, 42);
    view.defPosition("e8s", 310, 36, 42, 42);
    view.defPosition("e7s", 310, 105, 42, 42);
    view.defPosition("e6s", 310, 174, 42, 42);
    view.defPosition("e5s", 310, 243, 42, 42);
    view.defPosition("e4s", 310, 312, 42, 42);
    view.defPosition("e3s", 310, 381, 42, 42);
    view.defPosition("e2s", 310, 450, 42, 42);
    view.defPosition("e1s", 310, 519, 42, 42);
    view.defPosition("f8s", 379, 36, 42, 42);
    view.defPosition("f7s", 379, 105, 42, 42);
    view.defPosition("f6s", 379, 174, 42, 42);
    view.defPosition("f5s", 379, 243, 42, 42);
    view.defPosition("f4s", 379, 312, 42, 42);
    view.defPosition("f3s", 379, 381, 42, 42);
    view.defPosition("f2s", 379, 450, 42, 42);
    view.defPosition("f1s", 379, 519, 42, 42);
    view.defPosition("g8s", 448, 36, 42, 42);
    view.defPosition("g7s", 448, 105, 42, 42);
    view.defPosition("g6s", 448, 174, 42, 42);
    view.defPosition("g5s", 448, 243, 42, 42);
    view.defPosition("g4s", 448, 312, 42, 42);
    view.defPosition("g3s", 448, 381, 42, 42);
    view.defPosition("g2s", 448, 450, 42, 42);
    view.defPosition("g1s", 448, 519, 42, 42);
    view.defPosition("h8s", 517, 36, 42, 42);
    view.defPosition("h7s", 517, 105, 42, 42);
    view.defPosition("h6s", 517, 174, 42, 42);
    view.defPosition("h5s", 517, 243, 42, 42);
    view.defPosition("h4s", 517, 312, 42, 42);
    view.defPosition("h3s", 517, 381, 42, 42);
    view.defPosition("h2s", 517, 450, 42, 42);
    view.defPosition("h1s", 517, 519, 42, 42);
    view.defPosition("a8b", 24, 26, 62, 62);
    view.defPosition("a7b", 24, 95, 62, 62);
    view.defPosition("a6b", 24, 164, 62, 62);
    view.defPosition("a5b", 24, 233, 62, 62);
    view.defPosition("a4b", 24, 302, 62, 62);
    view.defPosition("a3b", 24, 371, 62, 62);
    view.defPosition("a2b", 24, 440, 62, 62);
    view.defPosition("a1b", 24, 509, 62, 62);
    view.defPosition("b8b", 93, 26, 62, 62);
    view.defPosition("b7b", 93, 95, 62, 62);
    view.defPosition("b6b", 93, 164, 62, 62);
    view.defPosition("b5b", 93, 233, 62, 62);
    view.defPosition("b4b", 93, 302, 62, 62);
    view.defPosition("b3b", 93, 371, 62, 62);
    view.defPosition("b2b", 93, 440, 62, 62);
    view.defPosition("b1b", 93, 509, 62, 62);
    view.defPosition("c8b", 162, 26, 62, 62);
    view.defPosition("c7b", 162, 95, 62, 62);
    view.defPosition("c6b", 162, 164, 62, 62);
    view.defPosition("c5b", 162, 233, 62, 62);
    view.defPosition("c4b", 162, 302, 62, 62);
    view.defPosition("c3b", 162, 371, 62, 62);
    view.defPosition("c2b", 162, 440, 62, 62);
    view.defPosition("c1b", 162, 509, 62, 62);
    view.defPosition("d8b", 231, 26, 62, 62);
    view.defPosition("d7b", 231, 95, 62, 62);
    view.defPosition("d6b", 231, 164, 62, 62);
    view.defPosition("d5b", 231, 233, 62, 62);
    view.defPosition("d4b", 231, 302, 62, 62);
    view.defPosition("d3b", 231, 371, 62, 62);
    view.defPosition("d2b", 231, 440, 62, 62);
    view.defPosition("d1b", 231, 509, 62, 62);
    view.defPosition("e8b", 300, 26, 62, 62);
    view.defPosition("e7b", 300, 95, 62, 62);
    view.defPosition("e6b", 300, 164, 62, 62);
    view.defPosition("e5b", 300, 233, 62, 62);
    view.defPosition("e4b", 300, 302, 62, 62);
    view.defPosition("e3b", 300, 371, 62, 62);
    view.defPosition("e2b", 300, 440, 62, 62);
    view.defPosition("e1b", 300, 509, 62, 62);
    view.defPosition("f8b", 369, 26, 62, 62);
    view.defPosition("f7b", 369, 95, 62, 62);
    view.defPosition("f6b", 369, 164, 62, 62);
    view.defPosition("f5b", 369, 233, 62, 62);
    view.defPosition("f4b", 369, 302, 62, 62);
    view.defPosition("f3b", 369, 371, 62, 62);
    view.defPosition("f2b", 369, 440, 62, 62);
    view.defPosition("f1b", 369, 509, 62, 62);
    view.defPosition("g8b", 438, 26, 62, 62);
    view.defPosition("g7b", 438, 95, 62, 62);
    view.defPosition("g6b", 438, 164, 62, 62);
    view.defPosition("g5b", 438, 233, 62, 62);
    view.defPosition("g4b", 438, 302, 62, 62);
    view.defPosition("g3b", 438, 371, 62, 62);
    view.defPosition("g2b", 438, 440, 62, 62);
    view.defPosition("g1b", 438, 509, 62, 62);
    view.defPosition("h8b", 507, 26, 62, 62);
    view.defPosition("h7b", 507, 95, 62, 62);
    view.defPosition("h6b", 507, 164, 62, 62);
    view.defPosition("h5b", 507, 233, 62, 62);
    view.defPosition("h4b", 507, 302, 62, 62);
    view.defPosition("h3b", 507, 371, 62, 62);
    view.defPosition("h2b", 507, 440, 62, 62);
    view.defPosition("h1b", 507, 509, 62, 62);
}
