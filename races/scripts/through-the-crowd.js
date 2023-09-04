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

    design.addPosition("a5", [7, 0, 0, 11, 0, 0, 0, 0]);
    design.addPosition("b5", [7, 0, 0, 11, 0, 9, 0, 0]);
    design.addPosition("c5", [7, 3, 0, 11, 0, 9, 0, 0]);
    design.addPosition("d5", [0, 3, 0, 11, 0, 9, 0, 0]);
    design.addPosition("e5", [0, 3, 0, 0, 0, 9, 0, 0]);
    design.addPosition("a4", [7, 0, 0, 11, 0, 0, -3, 0]);
    design.addPosition("b4", [7, 0, 0, 11, 0, 9, -3, 0]);
    design.addPosition("c4", [7, 3, 0, 11, 0, 9, -3, -7]);
    design.addPosition("d4", [0, 3, 0, 11, 0, 9, 0, -7]);
    design.addPosition("e4", [0, 3, 0, 0, 0, 9, 0, -7]);
    design.addPosition("a3", [7, 0, -9, 11, 0, 0, -3, 0]);
    design.addPosition("b3", [7, 0, -9, 11, -11, 9, -3, 0]);
    design.addPosition("c3", [7, 3, -9, 11, -11, 9, -3, -7]);
    design.addPosition("d3", [0, 3, -9, 11, -11, 9, 0, -7]);
    design.addPosition("e3", [0, 3, 0, 0, -11, 9, 0, -7]);
    design.addPosition("a2", [7, 0, -9, 0, 0, 0, -3, 0]);
    design.addPosition("b2", [7, 0, -9, 0, -11, 0, -3, 0]);
    design.addPosition("c2", [7, 3, -9, 0, -11, 0, -3, -7]);
    design.addPosition("d2", [0, 3, -9, 0, -11, 0, 0, -7]);
    design.addPosition("e2", [0, 3, 0, 0, -11, 0, 0, -7]);
    design.addPosition("a1", [0, 0, -9, 0, 0, 0, -3, 0]);
    design.addPosition("b1", [0, 0, -9, 0, -11, 0, -3, 0]);
    design.addPosition("c1", [0, 0, -9, 0, -11, 0, -3, -7]);
    design.addPosition("d1", [0, 0, -9, 0, -11, 0, 0, -7]);
    design.addPosition("e1", [0, 0, 0, 0, -11, 0, 0, -7]);

    design.addZone("goal-zone", 1, [4]);
    design.addZone("goal-zone", 2, [20, 15, 10, 5, 0, 21, 16, 11, 6, 1, 22, 17, 12, 7, 2, 23, 18, 13, 8, 3, 24, 19, 14, 9]);

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

    design.setup("White", "Knight", 20);
    design.setup("Black", "Knight", 15);
    design.setup("Black", "Knight", 10);
    design.setup("Black", "Knight", 5);
    design.setup("Black", "Knight", 0);
    design.setup("Black", "Knight", 21);
    design.setup("Black", "Knight", 16);
    design.setup("Black", "Knight", 11);
    design.setup("Black", "Knight", 6);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 22);
    design.setup("Black", "Knight", 17);
    design.setup("Black", "Knight", 12);
    design.setup("Black", "Knight", 7);
    design.setup("Black", "Knight", 2);
    design.setup("Black", "Knight", 23);
    design.setup("Black", "Knight", 18);
    design.setup("Black", "Knight", 13);
    design.setup("Black", "Knight", 8);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Knight", 24);
    design.setup("Black", "Knight", 19);
    design.setup("Black", "Knight", 14);
    design.setup("Black", "Knight", 9);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
 
    view.defPosition("a5", 2, 2, 68, 68);
    view.defPosition("b5", 70, 2, 68, 68);
    view.defPosition("c5", 138, 2, 68, 68);
    view.defPosition("d5", 206, 2, 68, 68);
    view.defPosition("e5", 274, 2, 68, 68);
    view.defPosition("a4", 2, 70, 68, 68);
    view.defPosition("b4", 70, 70, 68, 68);
    view.defPosition("c4", 138, 70, 68, 68);
    view.defPosition("d4", 206, 70, 68, 68);
    view.defPosition("e4", 274, 70, 68, 68);
    view.defPosition("a3", 2, 138, 68, 68);
    view.defPosition("b3", 70, 138, 68, 68);
    view.defPosition("c3", 138, 138, 68, 68);
    view.defPosition("d3", 206, 138, 68, 68);
    view.defPosition("e3", 274, 138, 68, 68);
    view.defPosition("a2", 2, 206, 68, 68);
    view.defPosition("b2", 70, 206, 68, 68);
    view.defPosition("c2", 138, 206, 68, 68);
    view.defPosition("d2", 206, 206, 68, 68);
    view.defPosition("e2", 274, 206, 68, 68);
    view.defPosition("a1", 2, 274, 68, 68);
    view.defPosition("b1", 70, 274, 68, 68);
    view.defPosition("c1", 138, 274, 68, 68);
    view.defPosition("d1", 206, 274, 68, 68);
    view.defPosition("e1", 274, 274, 68, 68);
}
