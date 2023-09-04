Dagaz.Model.WIDTH         = 3;
Dagaz.Model.HEIGHT        = 7;

Dagaz.AI.WHITE_PROM       = 0x40;
Dagaz.AI.BLACK_PROM       = 0x60;

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("mini-shogi-promotion", "true");
    design.checkVersion("mini-shogi-extension", "true");
    design.checkVersion("mini-shogi-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("sr");
    design.addDirection("nr");
    design.addDirection("nx");

    design.addPlayer("South", [1, 0, 4, 6, 2, 7, 3, 5, 8, 9, 10]);
    design.addPlayer("North", [1, 0, 4, 6, 2, 7, 3, 5, 9, 8, 10]);

    design.addPosition("X7", [0, 1, 9, 0, 0, 10, 0, 0, 1, 10, 0]);
    design.addPosition("Y7", [-1, 0, 9, 0, 0, 0, 8, 0, 0, -1, 0]);
    design.addPosition("I7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 9, 0, 0, 10, 0, 0, 58, -2, 55]);
    design.addPosition("b7", [-1, 1, 9, 0, 0, 10, 8, 0, 57, -3, 55]);
    design.addPosition("c7", [-1, 0, 9, 0, 0, 0, 8, 0, 56, -4, 56]);
    design.addPosition("J7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z7", [0, 1, 9, 0, 0, 10, 0, 0, 1, 10, 0]);
    design.addPosition("T7", [-1, 0, 9, 0, 0, 0, 8, 0, 46, -1, 0]);
    design.addPosition("X6", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("Y6", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 1, 9, -8, -9, 10, 0, 0, 49, -11, -9]);
    design.addPosition("b6", [-1, 1, 9, -8, -9, 10, 8, -10, 48, -12, -9]);
    design.addPosition("c6", [-1, 0, 9, 0, -9, 0, 8, -10, 47, -13, -9]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("T6", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("X5", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("Y5", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 1, 9, -8, -9, 10, 0, 0, 40, -20, -9]);
    design.addPosition("b5", [-1, 1, 9, -8, -9, 10, 8, -10, 39, -21, -9]);
    design.addPosition("c5", [-1, 0, 9, 0, -9, 0, 8, -10, 38, -22, -9]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("T5", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("X4", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("Y4", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 9, -8, -9, 10, 0, 0, 31, -29, -9]);
    design.addPosition("b4", [-1, 1, 9, -8, -9, 10, 8, -10, 30, -30, -9]);
    design.addPosition("c4", [-1, 0, 9, 0, -9, 0, 8, -10, 29, -31, -9]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("T4", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("X3", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("Y3", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 9, -8, -9, 10, 0, 0, 22, -38, -9]);
    design.addPosition("b3", [-1, 1, 9, -8, -9, 10, 8, -10, 21, -39, -9]);
    design.addPosition("c3", [-1, 0, 9, 0, -9, 0, 8, -10, 20, -40, -9]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("T3", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("X2", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("Y2", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 9, -8, -9, 10, 0, 0, 13, -47, -9]);
    design.addPosition("b2", [-1, 1, 9, -8, -9, 10, 8, -10, 12, -48, -9]);
    design.addPosition("c2", [-1, 0, 9, 0, -9, 0, 8, -10, 11, -49, -9]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [0, 1, 9, -8, -9, 10, 0, 0, 1, 10, 0]);
    design.addPosition("T2", [-1, 0, 9, 0, -9, 0, 8, -10, -10, -1, 0]);
    design.addPosition("X1", [0, 1, 0, -8, -9, 0, 0, 0, 1, -46, 0]);
    design.addPosition("Y1", [-1, 0, 0, 0, -9, 0, 0, -10, -10, -1, 0]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -8, -9, 0, 0, 0, 4, -56, -9]);
    design.addPosition("b1", [-1, 1, 0, -8, -9, 0, 0, -10, 3, -57, -9]);
    design.addPosition("c1", [-1, 0, 0, 0, -9, 0, 0, -10, 2, -58, -9]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 1, 0, -8, -9, 0, 0, 0, 1, 0, 0]);
    design.addPosition("T1", [-1, 0, 0, 0, -9, 0, 0, -10, -10, -1, 0]);

    design.addZone("board-zone", 2, [57, 58, 59, 48, 49, 50, 39, 40, 41, 30, 31, 32, 21, 22, 23, 12, 13, 14, 3, 4, 5]);
    design.addZone("board-zone", 1, [57, 58, 59, 48, 49, 50, 39, 40, 41, 30, 31, 32, 21, 22, 23, 12, 13, 14, 3, 4, 5]);
    design.addZone("promotion-zone", 2, [57, 48, 39, 58, 49, 40, 59, 50, 41]);
    design.addZone("promotion-zone", 1, [21, 12, 3, 22, 13, 4, 23, 14, 5]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	10);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 100);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Gold", 1, 6);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 1, [57, 10], 0);

    design.addPiece("Silver", 2, 5);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 1, [57, 10], 0);

    design.addPiece("SilverP", 3, 6);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [7], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("Bishop", 4, 10);
    design.addMove(4, 2, [7, 7], 0);
    design.addMove(4, 2, [5, 5], 0);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [3, 3], 0);
    design.addMove(4, 1, [57, 10], 0);

    design.addPiece("BishopP", 5, 11);
    design.addMove(5, 2, [7, 7], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 2, [5, 5], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 2, [6, 6], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 2, [3, 3], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("Rook", 6, 15);
    design.addMove(6, 2, [4, 4], 0);
    design.addMove(6, 2, [1, 1], 0);
    design.addMove(6, 2, [0, 0], 0);
    design.addMove(6, 2, [2, 2], 0);
    design.addMove(6, 1, [57, 10], 0);

    design.addPiece("RookP", 7, 16);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 0, [7], 0);
    design.addMove(7, 2, [1, 1], 0);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 2, [0, 0], 0);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 2, [2, 2], 0);
    design.addMove(7, 0, [5], 0);

    design.addPiece("Pawn", 8, 1);
    design.addMove(8, 0, [4], 0);
    design.addMove(8, 1, [57, 10], 0);

    design.addPiece("PawnP", 9, 2);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 0, [7], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 0, [3], 0);
    design.addMove(9, 0, [0], 0);
    design.addMove(9, 0, [1], 0);
    design.addMove(9, 1, [57, 10], 0);

    design.setup("South", "King", 58);
    design.setup("South", "Gold", 57);
    design.setup("South", "Silver", 59);
    design.setup("South", "Bishop", 48);
    design.setup("South", "Rook", 50);
    design.setup("South", "Pawn", 39);
    design.setup("South", "Pawn", 40);
    design.setup("South", "Pawn", 41);
    design.setup("North", "King", 4);
    design.setup("North", "Gold", 5);
    design.setup("North", "Silver", 3);
    design.setup("North", "Bishop", 14);
    design.setup("North", "Rook", 12);
    design.setup("North", "Pawn", 21);
    design.setup("North", "Pawn", 22);
    design.setup("North", "Pawn", 23);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthSilverP", "South SilverP");
    view.defPiece("NorthSilverP", "North SilverP");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("SouthBishopP", "South BishopP");
    view.defPiece("NorthBishopP", "North BishopP");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthRookP", "South RookP");
    view.defPiece("NorthRookP", "North RookP");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
    view.defPiece("SouthPawnP", "South PawnP");
    view.defPiece("NorthPawnP", "North PawnP");
 
    view.defPosition("X7", 9, 15, 41, 46);
    view.defPosition("Y7", 50, 15, 41, 46);
    view.defPosition("I7", 91, 15, 41, 46);
    view.defPosition("a7", 132, 15, 41, 46);
    view.defPosition("b7", 173, 15, 41, 46);
    view.defPosition("c7", 214, 15, 41, 46);
    view.defPosition("J7", 255, 15, 41, 46);
    view.defPosition("Z7", 296, 15, 41, 46);
    view.defPosition("T7", 337, 15, 41, 46);
    view.defPosition("X6", 9, 61, 41, 46);
    view.defPosition("Y6", 50, 61, 41, 46);
    view.defPosition("I6", 91, 61, 41, 46);
    view.defPosition("a6", 132, 61, 41, 46);
    view.defPosition("b6", 173, 61, 41, 46);
    view.defPosition("c6", 214, 61, 41, 46);
    view.defPosition("J6", 255, 61, 41, 46);
    view.defPosition("Z6", 296, 61, 41, 46);
    view.defPosition("T6", 337, 61, 41, 46);
    view.defPosition("X5", 9, 107, 41, 46);
    view.defPosition("Y5", 50, 107, 41, 46);
    view.defPosition("I5", 91, 107, 41, 46);
    view.defPosition("a5", 132, 107, 41, 46);
    view.defPosition("b5", 173, 107, 41, 46);
    view.defPosition("c5", 214, 107, 41, 46);
    view.defPosition("J5", 255, 107, 41, 46);
    view.defPosition("Z5", 296, 107, 41, 46);
    view.defPosition("T5", 337, 107, 41, 46);
    view.defPosition("X4", 9, 153, 41, 46);
    view.defPosition("Y4", 50, 153, 41, 46);
    view.defPosition("I4", 91, 153, 41, 46);
    view.defPosition("a4", 132, 153, 41, 46);
    view.defPosition("b4", 173, 153, 41, 46);
    view.defPosition("c4", 214, 153, 41, 46);
    view.defPosition("J4", 255, 153, 41, 46);
    view.defPosition("Z4", 296, 153, 41, 46);
    view.defPosition("T4", 337, 153, 41, 46);
    view.defPosition("X3", 9, 199, 41, 46);
    view.defPosition("Y3", 50, 199, 41, 46);
    view.defPosition("I3", 91, 199, 41, 46);
    view.defPosition("a3", 132, 199, 41, 46);
    view.defPosition("b3", 173, 199, 41, 46);
    view.defPosition("c3", 214, 199, 41, 46);
    view.defPosition("J3", 255, 199, 41, 46);
    view.defPosition("Z3", 296, 199, 41, 46);
    view.defPosition("T3", 337, 199, 41, 46);
    view.defPosition("X2", 9, 245, 41, 46);
    view.defPosition("Y2", 50, 245, 41, 46);
    view.defPosition("I2", 91, 245, 41, 46);
    view.defPosition("a2", 132, 245, 41, 46);
    view.defPosition("b2", 173, 245, 41, 46);
    view.defPosition("c2", 214, 245, 41, 46);
    view.defPosition("J2", 255, 245, 41, 46);
    view.defPosition("Z2", 296, 245, 41, 46);
    view.defPosition("T2", 337, 245, 41, 46);
    view.defPosition("X1", 9, 291, 41, 46);
    view.defPosition("Y1", 50, 291, 41, 46);
    view.defPosition("I1", 91, 291, 41, 46);
    view.defPosition("a1", 132, 291, 41, 46);
    view.defPosition("b1", 173, 291, 41, 46);
    view.defPosition("c1", 214, 291, 41, 46);
    view.defPosition("J1", 255, 291, 41, 46);
    view.defPosition("Z1", 296, 291, 41, 46);
    view.defPosition("T1", 337, 291, 41, 46);
}
