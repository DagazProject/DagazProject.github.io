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
    design.checkVersion("zrf", "3.0");
    design.checkVersion("show-hints", "false");
    design.checkVersion("light-off-extension", "king");

    design.addDirection("nne");
    design.addDirection("e");
    design.addDirection("sse");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("w");
    design.addDirection("ssw");
    design.addDirection("nnw");
    design.addDirection("see");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("sww");
    design.addDirection("nww");
    design.addDirection("sw");
    design.addDirection("nee");

    design.addPlayer("You", [7, 6, 8, 10, 5, 4, 1, 0, 2, 13, 3, 14, 15, 9, 11, 12]);

    design.addPosition("a4", [0, 1, 9, 0, 5, 0, 0, 0, 0, 6, 4, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 1, 9, 0, 5, 0, -1, 7, 0, 6, 4, 0, 0, 0, 3, 0]);
    design.addPosition("c4", [0, 1, 9, 0, 5, 0, -1, 7, 0, 0, 4, 0, 2, 0, 3, 0]);
    design.addPosition("d4", [0, 0, 0, 0, 0, 0, -1, 7, 0, 0, 4, 0, 2, 0, 3, 0]);
    design.addPosition("a3", [0, 1, 9, -4, 5, 0, 0, 0, 0, 6, 4, -3, 0, 0, 0, -2]);
    design.addPosition("b3", [0, 1, 9, -4, 5, -5, -1, 7, 0, 6, 4, -3, 0, 0, 3, -2]);
    design.addPosition("c3", [0, 1, 9, -4, 5, -5, -1, 7, 0, 0, 4, -3, 2, -6, 3, 0]);
    design.addPosition("d3", [0, 0, 0, -4, 0, -5, -1, 7, 0, 0, 4, 0, 2, -6, 3, 0]);
    design.addPosition("a2", [-7, 1, 0, -4, 5, 0, 0, 0, 0, 6, 4, -3, 0, 0, 0, -2]);
    design.addPosition("b2", [-7, 1, 0, -4, 5, -5, -1, 0, -9, 6, 4, -3, 0, 0, 3, -2]);
    design.addPosition("c2", [-7, 1, 0, -4, 5, -5, -1, 0, -9, 0, 4, -3, 2, -6, 3, 0]);
    design.addPosition("d2", [0, 0, 0, -4, 0, -5, -1, 0, -9, 0, 4, 0, 2, -6, 3, 0]);
    design.addPosition("a1", [-7, 1, 0, -4, 0, 0, 0, 0, 0, 0, 0, -3, 0, 0, 0, -2]);
    design.addPosition("b1", [-7, 1, 0, -4, 0, -5, -1, 0, -9, 0, 0, -3, 0, 0, 0, -2]);
    design.addPosition("c1", [-7, 1, 0, -4, 0, -5, -1, 0, -9, 0, 0, -3, 0, -6, 0, 0]);
    design.addPosition("d1", [0, 0, 0, -4, 0, -5, -1, 0, -9, 0, 0, 0, 0, -6, 0, 0]);


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
    design.addMove(0, 0, [1], 0);

    design.addPiece("dark", 1);
    design.addMove(1, 1, [0], 0);

    design.setup("You", "light", 12);
    design.setup("You", "light", 13);
    design.setup("You", "light", 14);
    design.setup("You", "light", 15);
    design.setup("You", "light", 8);
    design.setup("You", "light", 9);
    design.setup("You", "light", 10);
    design.setup("You", "light", 11);
    design.setup("You", "light", 4);
    design.setup("You", "light", 5);
    design.setup("You", "light", 6);
    design.setup("You", "light", 7);
    design.setup("You", "light", 0);
    design.setup("You", "light", 1);
    design.setup("You", "light", 2);
    design.setup("You", "light", 3);

}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("Youlight", "You light");
    view.defPiece("Youdark", "You dark");
 
    view.defPosition("a4", 0, 0, 75, 75);
    view.defPosition("b4", 75, 0, 75, 75);
    view.defPosition("c4", 150, 0, 75, 75);
    view.defPosition("d4", 225, 0, 75, 75);
    view.defPosition("a3", 0, 75, 75, 75);
    view.defPosition("b3", 75, 75, 75, 75);
    view.defPosition("c3", 150, 75, 75, 75);
    view.defPosition("d3", 225, 75, 75, 75);
    view.defPosition("a2", 0, 150, 75, 75);
    view.defPosition("b2", 75, 150, 75, 75);
    view.defPosition("c2", 150, 150, 75, 75);
    view.defPosition("d2", 225, 150, 75, 75);
    view.defPosition("a1", 0, 225, 75, 75);
    view.defPosition("b1", 75, 225, 75, 75);
    view.defPosition("c1", 150, 225, 75, 75);
    view.defPosition("d1", 225, 225, 75, 75);
}
