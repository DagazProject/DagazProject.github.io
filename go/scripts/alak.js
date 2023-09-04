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
    design.checkVersion("show-captures", "false");
    design.checkVersion("ko", "true");

    design.addDirection("e");
    design.addDirection("w");

    design.addPlayer("Black", [1, 0]);
    design.addPlayer("White", [0, 1]);

    design.addPosition("a1", [1, 0]);
    design.addPosition("b1", [1, -1]);
    design.addPosition("c1", [1, -1]);
    design.addPosition("d1", [1, -1]);
    design.addPosition("e1", [1, -1]);
    design.addPosition("f1", [1, -1]);
    design.addPosition("g1", [1, -1]);
    design.addPosition("h1", [1, -1]);
    design.addPosition("i1", [1, -1]);
    design.addPosition("j1", [1, -1]);
    design.addPosition("k1", [0, -1]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a1", 13, 13, 61, 61);
    view.defPosition("b1", 73, 13, 61, 61);
    view.defPosition("c1", 133, 13, 61, 61);
    view.defPosition("d1", 193, 13, 61, 61);
    view.defPosition("e1", 253, 13, 61, 61);
    view.defPosition("f1", 313, 13, 61, 61);
    view.defPosition("g1", 373, 13, 61, 61);
    view.defPosition("h1", 433, 13, 61, 61);
    view.defPosition("i1", 493, 13, 61, 61);
    view.defPosition("j1", 553, 13, 61, 61);
    view.defPosition("k1", 613, 13, 61, 61);
}
