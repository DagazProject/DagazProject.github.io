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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("pass-turn", "forced");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("South", [1, 0, 3, 2, 5, 4, 7, 6]);
    design.addPlayer("North", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 1, 4, 0, 0, 0, 0, 5]);
    design.addPosition("c5", [-1, 0, 4, 0, 0, 3, 0, 0]);
    design.addPosition("d5", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 4, 0, 0, 0, 0, 5]);
    design.addPosition("b4", [-1, 1, 4, -4, -3, 3, 0, 5]);
    design.addPosition("c4", [-1, 1, 4, -4, 0, 3, -5, 5]);
    design.addPosition("d4", [-1, 0, 4, 0, 0, 3, 0, 0]);
    design.addPosition("a3", [0, 1, 4, -4, -3, 0, 0, 5]);
    design.addPosition("b3", [-1, 1, 4, -4, -3, 3, -5, 5]);
    design.addPosition("c3", [-1, 1, 4, -4, -3, 3, -5, 5]);
    design.addPosition("d3", [-1, 0, 4, -4, 0, 3, -5, 0]);
    design.addPosition("a2", [0, 1, 0, -4, -3, 0, 0, 0]);
    design.addPosition("b2", [-1, 1, 4, -4, -3, 0, -5, 5]);
    design.addPosition("c2", [-1, 1, 4, -4, -3, 3, -5, 0]);
    design.addPosition("d2", [-1, 0, 0, -4, 0, 0, -5, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 1, 0, -4, -3, 0, 0, 0]);
    design.addPosition("c1", [-1, 0, 0, -4, 0, 0, -5, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("goal-zone", 2, [17, 13, 18, 14]);
    design.addZone("goal-zone", 1, [5, 1, 6, 2]);
    design.addZone("locked-zone", 1, [1, 2]);
    design.addZone("locked-zone", 2, [17, 18]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Green", 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [7], 0);

    design.addPiece("Red", 1);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [2], 0);

    design.setupSelector(2);

    design.setup("South", "Green", 17, 1);
    design.setup("South", "Green", 13, 1);
    design.setup("South", "Green", 18, 1);
    design.setup("South", "Green", 14, 1);
    design.setup("North", "Red", 5, 1);
    design.setup("North", "Red", 1, 1);
    design.setup("North", "Red", 6, 1);
    design.setup("North", "Red", 2, 1);

    design.setup("South", "Red", 17, 2);
    design.setup("South", "Red", 13, 2);
    design.setup("South", "Red", 18, 2);
    design.setup("South", "Red", 14, 2);
    design.setup("North", "Green", 5, 2);
    design.setup("North", "Green", 1, 2);
    design.setup("North", "Green", 6, 2);
    design.setup("North", "Green", 2, 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("BoardGreen", 0, 0, 1);
    view.defBoard("BoardRed", 0, 0, 2);
    view.defPiece("SouthGreen", "South Green");
    view.defPiece("NorthGreen", "North Green");
    view.defPiece("SouthRed", "South Red");
    view.defPiece("NorthRed", "North Red");
 
    view.defPosition("a5", 5, 5, 48, 48);
    view.defPosition("b5", 69, 5, 48, 48);
    view.defPosition("c5", 133, 5, 48, 48);
    view.defPosition("d5", 197, 5, 48, 48);
    view.defPosition("a4", 5, 69, 48, 48);
    view.defPosition("b4", 69, 69, 48, 48);
    view.defPosition("c4", 133, 69, 48, 48);
    view.defPosition("d4", 197, 69, 48, 48);
    view.defPosition("a3", 5, 133, 48, 48);
    view.defPosition("b3", 69, 133, 48, 48);
    view.defPosition("c3", 133, 133, 48, 48);
    view.defPosition("d3", 197, 133, 48, 48);
    view.defPosition("a2", 5, 197, 48, 48);
    view.defPosition("b2", 69, 197, 48, 48);
    view.defPosition("c2", 133, 197, 48, 48);
    view.defPosition("d2", 197, 197, 48, 48);
    view.defPosition("a1", 5, 261, 48, 48);
    view.defPosition("b1", 69, 261, 48, 48);
    view.defPosition("c1", 133, 261, 48, 48);
    view.defPosition("d1", 197, 261, 48, 48);
}
