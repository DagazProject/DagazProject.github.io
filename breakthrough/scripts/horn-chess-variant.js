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
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("ko", "asymmetric");

    design.addDirection("n");  // 0
    design.addDirection("s");  // 1
    design.addDirection("e");  // 2
    design.addDirection("w");  // 3
    design.addDirection("nw"); // 4
    design.addDirection("se"); // 5

    design.addPlayer("Black", [1, 0, 3, 2, 5, 4]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5]);

    design.addTurn(2);
    design.addTurn(1);

    design.addPosition("a1", [2, 0, 1, 0, 0, 0]);
    design.addPosition("b1", [2, 0, 0, -1, 1, 0]);
    design.addPosition("a2", [2, -2, 1, 0, 0, -1]);
    design.addPosition("b2", [2, -2, 0, -1, 1, 0]);
    design.addPosition("a3", [2, -2, 1, 0, 0, -1]);
    design.addPosition("b3", [2, -2, 0, -1, 1, 0]);
    design.addPosition("a4", [2, -2, 1, 0, 0, -1]);
    design.addPosition("b4", [2, -2, 0, -1, 1, 0]);
    design.addPosition("a5", [2, -2, 1, 0, 0, -1]);
    design.addPosition("b5", [3, -2, 0, -1, 1, 0]);
    design.addPosition("a6", [0, -2, 0, 0, 2, -1]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, -3, 0, 0, 0, -2]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("BlackStone", 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
//  design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [2], 1);

    design.addPiece("WhiteStone", 1);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 1);
    design.addMove(1, 0, [2], 1);
    design.addMove(1, 0, [1], 2);
    design.addMove(1, 0, [5], 2);

    design.setup("White", "WhiteStone", 12);
    design.setup("Black", "BlackStone", 0);
    design.setup("Black", "BlackStone", 1);

    design.goal(0, "White", "WhiteStone", [0]);
    design.goal(1, "White", "WhiteStone", [1]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackBlackStone", "Black BlackStone");
    view.defPiece("WhiteWhiteStone", "White WhiteStone");
 
    view.defPosition("a1", 18, 462, 45, 45);
    view.defPosition("b1", 186, 462, 45, 45);
    view.defPosition("a2", 41, 326, 45, 45);
    view.defPosition("b2", 196, 326, 45, 45);
    view.defPosition("a3", 72, 239, 45, 45);
    view.defPosition("b3", 213, 239, 45, 45);
    view.defPosition("a4", 112, 171, 45, 45);
    view.defPosition("b4", 236, 171, 45, 45);
    view.defPosition("a5", 159, 120, 45, 45);
    view.defPosition("b5", 263, 120, 45, 45);
    view.defPosition("a6", 216, 76, 45, 45);
    view.defPosition("b6", 296, 76, 45, 45);
    view.defPosition("a7", 369, 22, 45, 45);
}
