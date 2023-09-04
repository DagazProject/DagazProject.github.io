Dagaz.Controller.persistense = "none";

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
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("ees");
    design.addDirection("wws");
    design.addDirection("nne");
    design.addDirection("sse");
    design.addDirection("nnw");
    design.addDirection("ssw");
    design.addDirection("een");
    design.addDirection("wwn");

    design.addPlayer("White", [7, 6, 5, 4, 3, 2, 1, 0]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("You", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addTurn(3);


    design.addPosition("a4", [6, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b4", [6, 0, 0, 9, 0, 7, 0, 0]);
    design.addPosition("c4", [0, 2, 0, 9, 0, 7, 0, 0]);
    design.addPosition("d4", [0, 2, 0, 0, 0, 7, 0, 0]);
    design.addPosition("a3", [6, 0, 0, 9, 0, 0, -2, 0]);
    design.addPosition("b3", [6, 0, 0, 9, 0, 7, -2, 0]);
    design.addPosition("c3", [0, 2, 0, 9, 0, 7, 0, -6]);
    design.addPosition("d3", [0, 2, 0, 0, 0, 7, 0, -6]);
    design.addPosition("a2", [6, 0, -7, 0, 0, 0, -2, 0]);
    design.addPosition("b2", [6, 0, -7, 0, -9, 0, -2, 0]);
    design.addPosition("c2", [0, 2, -7, 0, -9, 0, 0, -6]);
    design.addPosition("d2", [0, 2, 0, 0, -9, 0, 0, -6]);
    design.addPosition("a1", [0, 0, -7, 0, 0, 0, -2, 0]);
    design.addPosition("b1", [0, 0, -7, 0, -9, 0, -2, 0]);
    design.addPosition("c1", [0, 0, -7, 0, -9, 0, 0, -6]);
    design.addPosition("d1", [0, 0, 0, 0, -9, 0, 0, -6]);

    design.addZone("goal-zone", 1, [4, 0, 5, 1, 2, 7, 3]);
    design.addZone("goal-zone", 2, [12, 8, 13, 14, 10, 15, 11]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Knight", 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [1], 0);

    design.setup("White", "Knight", 12);
    design.setup("White", "Knight", 8);
    design.setup("White", "Knight", 13);
    design.setup("White", "Knight", 14);
    design.setup("White", "Knight", 10);
    design.setup("White", "Knight", 15);
    design.setup("White", "Knight", 11);
    design.setup("Black", "Knight", 4);
    design.setup("Black", "Knight", 0);
    design.setup("Black", "Knight", 5);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 2);
    design.setup("Black", "Knight", 7);
    design.setup("Black", "Knight", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
 
    view.defPosition("a4", 2, 2, 68, 68);
    view.defPosition("b4", 70, 2, 68, 68);
    view.defPosition("c4", 138, 2, 68, 68);
    view.defPosition("d4", 206, 2, 68, 68);
    view.defPosition("a3", 2, 70, 68, 68);
    view.defPosition("b3", 70, 70, 68, 68);
    view.defPosition("c3", 138, 70, 68, 68);
    view.defPosition("d3", 206, 70, 68, 68);
    view.defPosition("a2", 2, 138, 68, 68);
    view.defPosition("b2", 70, 138, 68, 68);
    view.defPosition("c2", 138, 138, 68, 68);
    view.defPosition("d2", 206, 138, 68, 68);
    view.defPosition("a1", 2, 206, 68, 68);
    view.defPosition("b1", 70, 206, 68, 68);
    view.defPosition("c1", 138, 206, 68, 68);
    view.defPosition("d1", 206, 206, 68, 68);
}
