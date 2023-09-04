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
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);

    design.addPiece("PawnBold", 1);
    design.addMove(1, 0, [7], 0);

    design.addPiece("Knight", 2);

    design.addPiece("KnightBold", 3);
    design.addMove(3, 1, [7, 6], 0);
    design.addMove(3, 1, [7, 5], 0);

    design.addPiece("Lance", 4);

    design.addPiece("LanceBold", 5);
    design.addMove(5, 2, [7, 7], 0);

    design.addPiece("Rook", 6);

    design.addPiece("RookBold", 7);
    design.addMove(7, 2, [7, 7], 0);
    design.addMove(7, 2, [3, 3], 0);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 2, [1, 1], 0);

    design.addPiece("Bishop", 8);

    design.addPiece("BishopBold", 9);
    design.addMove(9, 2, [6, 6], 0);
    design.addMove(9, 2, [5, 5], 0);
    design.addMove(9, 2, [2, 2], 0);
    design.addMove(9, 2, [0, 0], 0);

    design.addPiece("Silver", 10);

    design.addPiece("SilverBold", 11);
    design.addMove(11, 0, [7], 0);
    design.addMove(11, 0, [6], 0);
    design.addMove(11, 0, [5], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 0, [0], 0);

    design.addPiece("Gold", 12);

    design.addPiece("GoldBold", 13);
    design.addMove(13, 0, [7], 0);
    design.addMove(13, 0, [3], 0);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [1], 0);
    design.addMove(13, 0, [6], 0);
    design.addMove(13, 0, [5], 0);

    design.addPiece("King", 14);

    design.addPiece("KingBold", 15);
    design.addMove(15, 0, [7], 0);
    design.addMove(15, 0, [3], 0);
    design.addMove(15, 0, [4], 0);
    design.addMove(15, 0, [1], 0);
    design.addMove(15, 0, [6], 0);
    design.addMove(15, 0, [5], 0);
    design.addMove(15, 0, [2], 0);
    design.addMove(15, 0, [0], 0);

    design.setup("You", "RookBold", 0);
    design.setup("You", "Silver", 1);
    design.setup("You", "Silver", 3);
    design.setup("You", "Rook", 2);
    design.setup("You", "Gold", 5);
    design.setup("You", "Gold", 8);
    design.setup("You", "Knight", 6);
    design.setup("You", "Knight", 7);
    design.setup("You", "King", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("YouPawn", "You Pawn");
    view.defPiece("YouPawnBold", "You PawnBold");
    view.defPiece("YouKnight", "You Knight");
    view.defPiece("YouKnightBold", "You KnightBold");
    view.defPiece("YouLance", "You Lance");
    view.defPiece("YouLanceBold", "You LanceBold");
    view.defPiece("YouRook", "You Rook");
    view.defPiece("YouRookBold", "You RookBold");
    view.defPiece("YouBishop", "You Bishop");
    view.defPiece("YouBishopBold", "You BishopBold");
    view.defPiece("YouSilver", "You Silver");
    view.defPiece("YouSilverBold", "You SilverBold");
    view.defPiece("YouGold", "You Gold");
    view.defPiece("YouGoldBold", "You GoldBold");
    view.defPiece("YouKing", "You King");
    view.defPiece("YouKingBold", "You KingBold");
 
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
