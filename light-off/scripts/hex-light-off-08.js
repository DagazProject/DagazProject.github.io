Dagaz.Model.NO_SOUND = true;

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("progressive-levels", "true");
    design.checkVersion("light-off-extension", "hex");

    design.addDirection("n");
    design.addDirection("s");
    design.addDirection("nw");
    design.addDirection("se");
    design.addDirection("ne");
    design.addDirection("sw");

    design.addPlayer("You", [1, 0, 3, 2, 5, 4]);

    design.addPosition("a7", [0, 1, 0, 12, 11, 0]);
    design.addPosition("a5", [-1, 1, 0, 12, 11, 0]);
    design.addPosition("a3", [-1, 0, 0, 12, 11, 0]);
    design.addPosition("b9", [0, 1, 0, 12, 0, 8]);
    design.addPosition("b7", [-1, 1, 7, 12, 11, 8]);
    design.addPosition("b5", [-1, 1, 7, 12, 11, 8]);
    design.addPosition("b3", [-1, 1, 7, 12, 11, 8]);
    design.addPosition("b1", [-1, 0, 7, 0, 11, 0]);
    design.addPosition("c7", [0, 1, 7, 0, 0, 8]);
    design.addPosition("c5", [-1, 1, 7, 0, 0, 8]);
    design.addPosition("c3", [-1, 0, 7, 0, 0, 8]);
    design.addPosition("a8", [0, 1, 0, -7, -8, -11]);
    design.addPosition("a6", [-1, 1, -12, -7, -8, -11]);
    design.addPosition("a4", [-1, 1, -12, -7, -8, -11]);
    design.addPosition("a2", [-1, 0, -12, -7, -8, 0]);
    design.addPosition("b8", [0, 1, -12, -7, 0, -11]);
    design.addPosition("b6", [-1, 1, -12, -7, -8, -11]);
    design.addPosition("b4", [-1, 1, -12, -7, -8, -11]);
    design.addPosition("b2", [-1, 0, -12, 0, -8, -11]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PROMOTE,	1);	// dark
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	0);	// light
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("light", 0);
    design.addMove(0, 0, [], 0);

    design.addPiece("dark", 1);
    design.addMove(1, 1, [], 0);

    design.setup("You", "light", 13);
    design.setup("You", "light", 12);
    design.setup("You", "light", 6);
    design.setup("You", "light", 4);
    design.setup("You", "light", 17);
    design.setup("You", "light", 16);
    design.setup("You", "dark", 7);
    design.setup("You", "dark", 14);
    design.setup("You", "dark", 18);
    design.setup("You", "dark", 2);
    design.setup("You", "dark", 10);
    design.setup("You", "dark", 1);
    design.setup("You", "dark", 5);
    design.setup("You", "dark", 9);
    design.setup("You", "dark", 0);
    design.setup("You", "dark", 8);
    design.setup("You", "dark", 11);
    design.setup("You", "dark", 15);
    design.setup("You", "dark", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("Youlight", "You light");
    view.defPiece("Youdark", "You dark");
 
    view.defPosition("a7", 7, 93, 100, 90);
    view.defPosition("a5", 7, 184, 100, 90);
    view.defPosition("a3", 7, 275, 100, 90);
    view.defPosition("b9", 165, 2, 100, 90);
    view.defPosition("b7", 165, 93, 100, 90);
    view.defPosition("b5", 165, 184, 100, 90);
    view.defPosition("b3", 165, 275, 100, 90);
    view.defPosition("b1", 165, 366, 100, 90);
    view.defPosition("c7", 323, 93, 100, 90);
    view.defPosition("c5", 323, 184, 100, 90);
    view.defPosition("c3", 323, 275, 100, 90);
    view.defPosition("a8", 86, 47, 100, 90);
    view.defPosition("a6", 86, 138, 100, 90);
    view.defPosition("a4", 86, 229, 100, 90);
    view.defPosition("a2", 86, 320, 100, 90);
    view.defPosition("b8", 244, 47, 100, 90);
    view.defPosition("b6", 244, 138, 100, 90);
    view.defPosition("b4", 244, 229, 100, 90);
    view.defPosition("b2", 244, 320, 100, 90);
}
