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
    design.checkVersion("prevent-flipping", "2");
    design.checkVersion("smart-moves", "true");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("You", [1, 0, 3, 2]);

    design.addPosition("a8", [0, 1, 2, 3]);
    design.addPosition("b8", [0, 1, 2, 3]);
    design.addPosition("c8", [0, 1, 8, 0]);
    design.addPosition("d8", [-1, 1, 8, 0]);
    design.addPosition("e8", [-1, 0, 8, 0]);
    design.addPosition("f8", [0, 1, 2, 3]);
    design.addPosition("g8", [0, 1, 2, 3]);
    design.addPosition("h8", [0, 1, 2, 3]);
    design.addPosition("a7", [0, 1, 2, 3]);
    design.addPosition("b7", [0, 1, 2, 3]);
    design.addPosition("c7", [0, 1, 8, -8]);
    design.addPosition("d7", [-1, 1, 8, -8]);
    design.addPosition("e7", [-1, 0, 8, -8]);
    design.addPosition("f7", [0, 1, 2, 3]);
    design.addPosition("g7", [0, 1, 2, 3]);
    design.addPosition("h7", [0, 1, 2, 3]);
    design.addPosition("a6", [0, 1, 8, 0]);
    design.addPosition("b6", [-1, 1, 8, 0]);
    design.addPosition("c6", [-1, 1, 8, -8]);
    design.addPosition("d6", [-1, 1, 8, -8]);
    design.addPosition("e6", [-1, 1, 8, -8]);
    design.addPosition("f6", [-1, 1, 8, 0]);
    design.addPosition("g6", [-1, 1, 8, 0]);
    design.addPosition("h6", [-1, 0, 8, 0]);
    design.addPosition("a5", [0, 1, 8, -8]);
    design.addPosition("b5", [-1, 1, 8, -8]);
    design.addPosition("c5", [-1, 1, 8, -8]);
    design.addPosition("d5", [-1, 1, 8, -8]);
    design.addPosition("e5", [-1, 1, 8, -8]);
    design.addPosition("f5", [-1, 1, 8, -8]);
    design.addPosition("g5", [-1, 1, 8, -8]);
    design.addPosition("h5", [-1, 0, 8, -8]);
    design.addPosition("a4", [0, 1, 0, -8]);
    design.addPosition("b4", [-1, 1, 0, -8]);
    design.addPosition("c4", [-1, 1, 8, -8]);
    design.addPosition("d4", [-1, 1, 8, -8]);
    design.addPosition("e4", [-1, 1, 8, -8]);
    design.addPosition("f4", [-1, 1, 0, -8]);
    design.addPosition("g4", [-1, 1, 0, -8]);
    design.addPosition("h4", [-1, 0, 0, -8]);
    design.addPosition("a3", [0, 1, 2, 3]);
    design.addPosition("b3", [0, 1, 2, 3]);
    design.addPosition("c3", [0, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 0, 8, -8]);
    design.addPosition("f3", [0, 1, 2, 3]);
    design.addPosition("g3", [0, 1, 2, 3]);
    design.addPosition("h3", [0, 1, 2, 3]);
    design.addPosition("a2", [0, 1, 2, 3]);
    design.addPosition("b2", [0, 1, 2, 3]);
    design.addPosition("c2", [0, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 0, 8, -8]);
    design.addPosition("f2", [0, 1, 2, 3]);
    design.addPosition("g2", [0, 1, 2, 3]);
    design.addPosition("h2", [0, 1, 2, 3]);
    design.addPosition("a1", [0, 1, 2, 3]);
    design.addPosition("b1", [0, 1, 2, 3]);
    design.addPosition("c1", [0, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 0, 0, -8]);
    design.addPosition("f1", [0, 1, 2, 3]);
    design.addPosition("g1", [0, 1, 2, 3]);
    design.addPosition("h1", [0, 1, 2, 3]);

    design.addZone("goal", 1, [27]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("Stone", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);

    design.setup("You", "Stone", 32);
    design.setup("You", "Stone", 24);
    design.setup("You", "Stone", 16);
    design.setup("You", "Stone", 33);
    design.setup("You", "Stone", 25);
    design.setup("You", "Stone", 17);
    design.setup("You", "Stone", 58);
    design.setup("You", "Stone", 50);
    design.setup("You", "Stone", 42);
    design.setup("You", "Stone", 34);
    design.setup("You", "Stone", 26);
    design.setup("You", "Stone", 18);
    design.setup("You", "Stone", 10);
    design.setup("You", "Stone", 2);
    design.setup("You", "Stone", 59);
    design.setup("You", "Stone", 51);
    design.setup("You", "Stone", 43);
    design.setup("You", "Stone", 35);
    design.setup("You", "Stone", 19);
    design.setup("You", "Stone", 11);
    design.setup("You", "Stone", 3);
    design.setup("You", "Stone", 60);
    design.setup("You", "Stone", 52);
    design.setup("You", "Stone", 44);
    design.setup("You", "Stone", 36);
    design.setup("You", "Stone", 28);
    design.setup("You", "Stone", 20);
    design.setup("You", "Stone", 12);
    design.setup("You", "Stone", 4);
    design.setup("You", "Stone", 37);
    design.setup("You", "Stone", 29);
    design.setup("You", "Stone", 21);
    design.setup("You", "Stone", 38);
    design.setup("You", "Stone", 30);
    design.setup("You", "Stone", 22);
    design.setup("You", "Stone", 39);
    design.setup("You", "Stone", 31);
    design.setup("You", "Stone", 23);

}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouStone", "You Stone");
 
    view.defPosition("a8", 12, 12, 48, 48);
    view.defPosition("b8", 60, 12, 48, 48);
    view.defPosition("c8", 108, 12, 48, 48);
    view.defPosition("d8", 156, 12, 48, 48);
    view.defPosition("e8", 204, 12, 48, 48);
    view.defPosition("f8", 252, 12, 48, 48);
    view.defPosition("g8", 300, 12, 48, 48);
    view.defPosition("h8", 348, 12, 48, 48);
    view.defPosition("a7", 12, 60, 48, 48);
    view.defPosition("b7", 60, 60, 48, 48);
    view.defPosition("c7", 108, 60, 48, 48);
    view.defPosition("d7", 156, 60, 48, 48);
    view.defPosition("e7", 204, 60, 48, 48);
    view.defPosition("f7", 252, 60, 48, 48);
    view.defPosition("g7", 300, 60, 48, 48);
    view.defPosition("h7", 348, 60, 48, 48);
    view.defPosition("a6", 12, 108, 48, 48);
    view.defPosition("b6", 60, 108, 48, 48);
    view.defPosition("c6", 108, 108, 48, 48);
    view.defPosition("d6", 156, 108, 48, 48);
    view.defPosition("e6", 204, 108, 48, 48);
    view.defPosition("f6", 252, 108, 48, 48);
    view.defPosition("g6", 300, 108, 48, 48);
    view.defPosition("h6", 348, 108, 48, 48);
    view.defPosition("a5", 12, 156, 48, 48);
    view.defPosition("b5", 60, 156, 48, 48);
    view.defPosition("c5", 108, 156, 48, 48);
    view.defPosition("d5", 156, 156, 48, 48);
    view.defPosition("e5", 204, 156, 48, 48);
    view.defPosition("f5", 252, 156, 48, 48);
    view.defPosition("g5", 300, 156, 48, 48);
    view.defPosition("h5", 348, 156, 48, 48);
    view.defPosition("a4", 12, 204, 48, 48);
    view.defPosition("b4", 60, 204, 48, 48);
    view.defPosition("c4", 108, 204, 48, 48);
    view.defPosition("d4", 156, 204, 48, 48);
    view.defPosition("e4", 204, 204, 48, 48);
    view.defPosition("f4", 252, 204, 48, 48);
    view.defPosition("g4", 300, 204, 48, 48);
    view.defPosition("h4", 348, 204, 48, 48);
    view.defPosition("a3", 12, 252, 48, 48);
    view.defPosition("b3", 60, 252, 48, 48);
    view.defPosition("c3", 108, 252, 48, 48);
    view.defPosition("d3", 156, 252, 48, 48);
    view.defPosition("e3", 204, 252, 48, 48);
    view.defPosition("f3", 252, 252, 48, 48);
    view.defPosition("g3", 300, 252, 48, 48);
    view.defPosition("h3", 348, 252, 48, 48);
    view.defPosition("a2", 12, 300, 48, 48);
    view.defPosition("b2", 60, 300, 48, 48);
    view.defPosition("c2", 108, 300, 48, 48);
    view.defPosition("d2", 156, 300, 48, 48);
    view.defPosition("e2", 204, 300, 48, 48);
    view.defPosition("f2", 252, 300, 48, 48);
    view.defPosition("g2", 300, 300, 48, 48);
    view.defPosition("h2", 348, 300, 48, 48);
    view.defPosition("a1", 12, 348, 48, 48);
    view.defPosition("b1", 60, 348, 48, 48);
    view.defPosition("c1", 108, 348, 48, 48);
    view.defPosition("d1", 156, 348, 48, 48);
    view.defPosition("e1", 204, 348, 48, 48);
    view.defPosition("f1", 252, 348, 48, 48);
    view.defPosition("g1", 300, 348, 48, 48);
    view.defPosition("h1", 348, 348, 48, 48);
}
