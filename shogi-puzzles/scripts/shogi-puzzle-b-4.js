if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

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
    design.checkVersion("progressive-levels", "true");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("c1", [4, 3, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b1", [4, 3, 2, 1, -1, 0, 0, 0]);
    design.addPosition("a1", [0, 3, 2, 0, -1, 0, 0, 0]);
    design.addPosition("c2", [4, 3, 0, 1, 0, -2, 0, -3]);
    design.addPosition("b2", [4, 3, 2, 1, -1, -2, -4, -3]);
    design.addPosition("a2", [0, 3, 2, 0, -1, 0, -4, -3]);
    design.addPosition("c3", [0, 0, 0, 1, 0, -2, 0, -3]);
    design.addPosition("b3", [0, 0, 0, 1, -1, -2, -4, -3]);
    design.addPosition("a3", [0, 0, 0, 0, -1, 0, -4, -3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [7], 0);

    design.addPiece("Knight", 1);
    design.addMove(1, 1, [7, 6], 0);
    design.addMove(1, 1, [7, 5], 0);

    design.addPiece("Lance", 2);
    design.addMove(2, 2, [7, 7], 0);

    design.addPiece("Rook", 3);
    design.addMove(3, 2, [7, 7], 0);
    design.addMove(3, 2, [3, 3], 0);
    design.addMove(3, 2, [4, 4], 0);
    design.addMove(3, 2, [1, 1], 0);

    design.addPiece("Bishop", 4);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [5, 5], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [0, 0], 0);

    design.addPiece("Silver", 5);
    design.addMove(5, 0, [7], 0);
    design.addMove(5, 0, [6], 0);
    design.addMove(5, 0, [5], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);

    design.addPiece("Gold", 6);
    design.addMove(6, 0, [7], 0);
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [4], 0);
    design.addMove(6, 0, [1], 0);
    design.addMove(6, 0, [6], 0);
    design.addMove(6, 0, [5], 0);

    design.addPiece("RookOther", 7);
    design.addMove(7, 2, [7, 7], 0);
    design.addMove(7, 2, [3, 3], 0);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 2, [1, 1], 0);

    design.addPiece("BishopOther", 8);
    design.addMove(8, 2, [6, 6], 0);
    design.addMove(8, 2, [5, 5], 0);
    design.addMove(8, 2, [2, 2], 0);
    design.addMove(8, 2, [0, 0], 0);

    design.setup("You", "Rook", 8);
    design.setup("You", "RookOther", 6);
    design.setup("You", "Bishop", 2);
    design.setup("You", "BishopOther", 0);
    design.setup("You", "Pawn", 5);
    design.setup("You", "Pawn", 3);

    design.goal(0, "You", "Rook", [0]);
    design.goal(0, "You", "RookOther", [2]);
    design.goal(0, "You", "Bishop", [6]);
    design.goal(0, "You", "BishopOther", [8]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouPawn", "You Pawn");
    view.defPiece("YouKnight", "You Knight");
    view.defPiece("YouLance", "You Lance");
    view.defPiece("YouRook", "You Rook");
    view.defPiece("YouBishop", "You Bishop");
    view.defPiece("YouSilver", "You Silver");
    view.defPiece("YouGold", "You Gold");
    view.defPiece("YouRook", "You RookOther");
    view.defPiece("YouBishop", "You BishopOther");
 
    view.defPosition("c1", 4, 4, 64, 65);
    view.defPosition("b1", 76, 4, 64, 65);
    view.defPosition("a1", 148, 4, 64, 65);
    view.defPosition("c2", 4, 76, 64, 65);
    view.defPosition("b2", 76, 76, 64, 65);
    view.defPosition("a2", 148, 76, 64, 65);
    view.defPosition("c3", 4, 148, 64, 65);
    view.defPosition("b3", 76, 148, 64, 65);
    view.defPosition("a3", 148, 148, 64, 65);
}
