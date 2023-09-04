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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("ko", "situation");
    design.checkVersion("pass-turn", "true");
    design.checkVersion("dual-go-extension", "capture");
    design.checkVersion("dual-go-extension", "orthodox");
    design.checkVersion("dual-go-extension", "separate");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("j9", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("j8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("j7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("j6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("j5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("j4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("j3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("j2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("j1", [0, 0, 0, 0, -1, 0, -10, -9]);


    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("a9", 42, 42, 42, 42);
    view.defPosition("b9", 84, 42, 42, 42);
    view.defPosition("c9", 126, 42, 42, 42);
    view.defPosition("d9", 168, 42, 42, 42);
    view.defPosition("e9", 210, 42, 42, 42);
    view.defPosition("f9", 252, 42, 42, 42);
    view.defPosition("g9", 294, 42, 42, 42);
    view.defPosition("h9", 336, 42, 42, 42);
    view.defPosition("j9", 378, 42, 42, 42);
    view.defPosition("a8", 42, 84, 42, 42);
    view.defPosition("b8", 84, 84, 42, 42);
    view.defPosition("c8", 126, 84, 42, 42);
    view.defPosition("d8", 168, 84, 42, 42);
    view.defPosition("e8", 210, 84, 42, 42);
    view.defPosition("f8", 252, 84, 42, 42);
    view.defPosition("g8", 294, 84, 42, 42);
    view.defPosition("h8", 336, 84, 42, 42);
    view.defPosition("j8", 378, 84, 42, 42);
    view.defPosition("a7", 42, 126, 42, 42);
    view.defPosition("b7", 84, 126, 42, 42);
    view.defPosition("c7", 126, 126, 42, 42);
    view.defPosition("d7", 168, 126, 42, 42);
    view.defPosition("e7", 210, 126, 42, 42);
    view.defPosition("f7", 252, 126, 42, 42);
    view.defPosition("g7", 294, 126, 42, 42);
    view.defPosition("h7", 336, 126, 42, 42);
    view.defPosition("j7", 378, 126, 42, 42);
    view.defPosition("a6", 42, 168, 42, 42);
    view.defPosition("b6", 84, 168, 42, 42);
    view.defPosition("c6", 126, 168, 42, 42);
    view.defPosition("d6", 168, 168, 42, 42);
    view.defPosition("e6", 210, 168, 42, 42);
    view.defPosition("f6", 252, 168, 42, 42);
    view.defPosition("g6", 294, 168, 42, 42);
    view.defPosition("h6", 336, 168, 42, 42);
    view.defPosition("j6", 378, 168, 42, 42);
    view.defPosition("a5", 42, 210, 42, 42);
    view.defPosition("b5", 84, 210, 42, 42);
    view.defPosition("c5", 126, 210, 42, 42);
    view.defPosition("d5", 168, 210, 42, 42);
    view.defPosition("e5", 210, 210, 42, 42);
    view.defPosition("f5", 252, 210, 42, 42);
    view.defPosition("g5", 294, 210, 42, 42);
    view.defPosition("h5", 336, 210, 42, 42);
    view.defPosition("j5", 378, 210, 42, 42);
    view.defPosition("a4", 42, 252, 42, 42);
    view.defPosition("b4", 84, 252, 42, 42);
    view.defPosition("c4", 126, 252, 42, 42);
    view.defPosition("d4", 168, 252, 42, 42);
    view.defPosition("e4", 210, 252, 42, 42);
    view.defPosition("f4", 252, 252, 42, 42);
    view.defPosition("g4", 294, 252, 42, 42);
    view.defPosition("h4", 336, 252, 42, 42);
    view.defPosition("j4", 378, 252, 42, 42);
    view.defPosition("a3", 42, 294, 42, 42);
    view.defPosition("b3", 84, 294, 42, 42);
    view.defPosition("c3", 126, 294, 42, 42);
    view.defPosition("d3", 168, 294, 42, 42);
    view.defPosition("e3", 210, 294, 42, 42);
    view.defPosition("f3", 252, 294, 42, 42);
    view.defPosition("g3", 294, 294, 42, 42);
    view.defPosition("h3", 336, 294, 42, 42);
    view.defPosition("j3", 378, 294, 42, 42);
    view.defPosition("a2", 42, 336, 42, 42);
    view.defPosition("b2", 84, 336, 42, 42);
    view.defPosition("c2", 126, 336, 42, 42);
    view.defPosition("d2", 168, 336, 42, 42);
    view.defPosition("e2", 210, 336, 42, 42);
    view.defPosition("f2", 252, 336, 42, 42);
    view.defPosition("g2", 294, 336, 42, 42);
    view.defPosition("h2", 336, 336, 42, 42);
    view.defPosition("j2", 378, 336, 42, 42);
    view.defPosition("a1", 42, 378, 42, 42);
    view.defPosition("b1", 84, 378, 42, 42);
    view.defPosition("c1", 126, 378, 42, 42);
    view.defPosition("d1", 168, 378, 42, 42);
    view.defPosition("e1", 210, 378, 42, 42);
    view.defPosition("f1", 252, 378, 42, 42);
    view.defPosition("g1", 294, 378, 42, 42);
    view.defPosition("h1", 336, 378, 42, 42);
    view.defPosition("j1", 378, 378, 42, 42);
}
