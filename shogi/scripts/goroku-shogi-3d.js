Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  1.8;
Dagaz.Controller.persistense = "setup";

Dagaz.AI.WORKER_NAME  = 'scripts/goroku-shogi-worker.js';
Dagaz.AI.WORKER_TIME  = 3000;
Dagaz.AI.ADVISOR_TIME = 10000;

Dagaz.Model.WIDTH         = 5;
Dagaz.Model.HEIGHT        = 6;

Dagaz.AI.WHITE_PROM       = 0x30;
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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "0");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("nx");
    design.addDirection("n");
    design.addDirection("sr");
    design.addDirection("nr");

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("North", [6, 8, 5, 4, 3, 2, 0, 7, 1, 10, 9]);

    design.addPosition("X6", [12, 11, 0, 1, 0, 0, 0, 0, 0, 0, 12]);
    design.addPosition("Y6", [0, 11, 10, 0, -1, 0, 0, 0, 0, 0, -1]);
    design.addPosition("I6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("a6", [12, 11, 0, 1, 0, 0, 0, 56, 0, 61, -2]);
    design.addPosition("b6", [12, 11, 10, 1, -1, 0, 0, 56, 0, 60, -3]);
    design.addPosition("c6", [12, 11, 10, 1, -1, 0, 0, 56, 0, 59, -4]);
    design.addPosition("d6", [12, 11, 10, 1, -1, 0, 0, 56, 0, 58, -5]);
    design.addPosition("e6", [0, 11, 10, 0, -1, 0, 0, 0, 0, 57, -6]);
    design.addPosition("J6", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("Z6", [12, 11, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T6", [0, 11, 10, 0, -1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y5", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("a5", [12, 11, 0, 1, 0, -10, 0, -11, -11, 50, -13]);
    design.addPosition("b5", [12, 11, 10, 1, -1, -10, -12, -11, -11, 49, -14]);
    design.addPosition("c5", [12, 11, 10, 1, -1, -10, -12, -11, -11, 48, -15]);
    design.addPosition("d5", [12, 11, 10, 1, -1, -10, -12, -11, -11, 47, -16]);
    design.addPosition("e5", [0, 11, 10, 0, -1, 0, -12, -11, -11, 46, -17]);
    design.addPosition("J5", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("Z5", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T5", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X4", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y4", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("a4", [12, 11, 0, 1, 0, -10, 0, -11, -11, 39, -24]);
    design.addPosition("b4", [12, 11, 10, 1, -1, -10, -12, -11, -11, 38, -25]);
    design.addPosition("c4", [12, 11, 10, 1, -1, -10, -12, -11, -11, 37, -26]);
    design.addPosition("d4", [12, 11, 10, 1, -1, -10, -12, -11, -11, 36, -27]);
    design.addPosition("e4", [0, 11, 10, 0, -1, 0, -12, -11, -11, 35, -28]);
    design.addPosition("J4", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("Z4", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T4", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X3", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y3", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("a3", [12, 11, 0, 1, 0, -10, 0, -11, -11, 28, -35]);
    design.addPosition("b3", [12, 11, 10, 1, -1, -10, -12, -11, -11, 27, -36]);
    design.addPosition("c3", [12, 11, 10, 1, -1, -10, -12, -11, -11, 26, -37]);
    design.addPosition("d3", [12, 11, 10, 1, -1, -10, -12, -11, -11, 25, -38]);
    design.addPosition("e3", [0, 11, 10, 0, -1, 0, -12, -11, -11, 24, -39]);
    design.addPosition("J3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("Z3", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T3", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X2", [12, 11, 0, 1, 0, -10, 0, -11, -11, 0, 12]);
    design.addPosition("Y2", [0, 11, 10, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("a2", [12, 11, 0, 1, 0, -10, 0, -11, -11, 17, -46]);
    design.addPosition("b2", [12, 11, 10, 1, -1, -10, -12, -11, -11, 16, -47]);
    design.addPosition("c2", [12, 11, 10, 1, -1, -10, -12, -11, -11, 15, -48]);
    design.addPosition("d2", [12, 11, 10, 1, -1, -10, -12, -11, -11, 14, -49]);
    design.addPosition("e2", [0, 11, 10, 0, -1, 0, -12, -11, -11, 13, -50]);
    design.addPosition("J2", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("Z2", [12, 11, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T2", [0, 11, 10, 0, -1, 0, -12, -11, -11, -12, 0]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -10, 0, -11, -11, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -12, -11, -11, 0, -1]);
    design.addPosition("I1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -10, 0, -11, -11, 6, -57]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -10, -12, -11, -11, 5, -58]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -10, -12, -11, -11, 4, -59]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -10, -12, -11, -11, 3, -60]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -12, -11, -11, 2, -61]);
    design.addPosition("J1", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -10, 0, -11, -11, 1, 0]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -12, -11, -11, -12, 0]);

    design.addZone("board-zone", 1, [58, 59, 60, 61, 62, 47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7]);
    design.addZone("board-zone", 2, [58, 59, 60, 61, 62, 47, 48, 49, 50, 51, 36, 37, 38, 39, 40, 25, 26, 27, 28, 29, 14, 15, 16, 17, 18, 3, 4, 5, 6, 7]);
    design.addZone("promotion-zone", 1, [3, 4, 5, 6, 7, 14, 15, 16, 17, 18]);
    design.addZone("promotion-zone", 2, [58, 59, 60, 61, 62, 47, 48, 49, 50, 51]);

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
    design.addCommand(1, ZRF.ON_BOARD_DIR,	7);	// name
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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
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

    design.addPiece("King", 0, 60000);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);

    design.addPiece("Gold", 1, 300);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 1, [58, 7], 0);

    design.addPiece("Silver", 2, 250);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 1, [58, 7], 0);

    design.addPiece("SilverP", 3, 300);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [6], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [5], 0);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [3], 0);

    design.addPiece("Bishop", 4, 1500);
    design.addMove(4, 2, [6, 6], 0);
    design.addMove(4, 2, [0, 0], 0);
    design.addMove(4, 2, [2, 2], 0);
    design.addMove(4, 2, [5, 5], 0);
    design.addMove(4, 1, [58, 7], 0);

    design.addPiece("BishopP", 5, 2000);
    design.addMove(5, 2, [6, 6], 0);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 2, [0, 0], 0);
    design.addMove(5, 0, [1], 0);
    design.addMove(5, 2, [2, 2], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 2, [5, 5], 0);
    design.addMove(5, 0, [3], 0);

    design.addPiece("Rook", 6, 2500);
    design.addMove(6, 2, [8, 8], 0);
    design.addMove(6, 2, [3, 3], 0);
    design.addMove(6, 2, [4, 4], 0);
    design.addMove(6, 2, [1, 1], 0);
    design.addMove(6, 1, [58, 7], 0);

    design.addPiece("RookP", 7, 3000);
    design.addMove(7, 2, [8, 8], 0);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 2, [3, 3], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 2, [1, 1], 0);
    design.addMove(7, 0, [0], 0);

    design.addPiece("Pawn", 8, 100);
    design.addMove(8, 0, [8], 0);
    design.addMove(8, 1, [58, 7], 0);

    design.addPiece("PawnP", 9, 300);
    design.addMove(9, 0, [8], 0);
    design.addMove(9, 0, [6], 0);
    design.addMove(9, 0, [1], 0);
    design.addMove(9, 0, [5], 0);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 0, [3], 0);

    design.setup("South", "King", 60);
    design.setup("South", "Gold", 59);
    design.setup("South", "Silver", 61);
    design.setup("South", "Bishop", 58);
    design.setup("South", "Rook", 62);
    design.setup("South", "Pawn", 47);
    design.setup("South", "Pawn", 48);
    design.setup("South", "Pawn", 49);
    design.setup("South", "Pawn", 50);
    design.setup("South", "Pawn", 51);
    design.setup("North", "King", 5);
    design.setup("North", "Gold", 6);
    design.setup("North", "Silver", 4);
    design.setup("North", "Bishop", 7);
    design.setup("North", "Rook", 3);
    design.setup("North", "Pawn", 14);
    design.setup("North", "Pawn", 15);
    design.setup("North", "Pawn", 16);
    design.setup("North", "Pawn", 17);
    design.setup("North", "Pawn", 18);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(224, 295, 1, -5, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPieceShogi(0, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing", 1, Math.PI);
    view.defPieceShogi(0, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing", 1);
    view.defPieceShogi(1, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold", 1, Math.PI);
    view.defPieceShogi(1, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold", 1);
    view.defPieceShogi(2, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver", 1, Math.PI);
    view.defPieceShogi(2, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver", 1);
    view.defPieceShogi(3, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilverP", 1, Math.PI);
    view.defPieceShogi(3, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilverP", 1);
    view.defPieceShogi(4, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop", 1, Math.PI);
    view.defPieceShogi(4, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop", 1);
    view.defPieceShogi(5, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishopP", 1, Math.PI);
    view.defPieceShogi(5, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishopP", 1);
    view.defPieceShogi(6, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook", 1, Math.PI);
    view.defPieceShogi(6, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook", 1);
    view.defPieceShogi(7, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRookP", 1, Math.PI);
    view.defPieceShogi(7, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRookP", 1);
    view.defPieceShogi(8, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn", 1, Math.PI);
    view.defPieceShogi(8, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn", 1);
    view.defPieceShogi(9, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawnP", 1, Math.PI);
    view.defPieceShogi(9, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawnP", 1);

    view.defSubMenu(2, "Promote", -7, -8);
    view.defSubMenuControl(2, "Silver", "Silver", true, Dagaz.Controller.menuItem, 2);
    view.defSubMenuControl(2, "Gold", "Gold", true, Dagaz.Controller.menuItem, 3);

    view.setCamera(0, 0, 0, -96, 170, 210);

    view.defControl("InfoControl", "2018 Shingeki Watanabe", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'goroku-shogi.htm' : 'goroku-shogi-board.htm');
    view.defControl(Dagaz.AI.ON ? ["AiOnControl", "AiLightControl", "AiAlertControl"] : ["AiOffControl", "AiOffControl", "AiOffControl"], Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'goroku-shogi-3d-board.htm' : 'goroku-shogi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move{move}", false, Dagaz.Controller.redo);
 
    view.defPosition("X6", -205, -115, 41, 46, 0);
    view.defPosition("Y6", -164, -115, 41, 46, 0);
    view.defPosition("I6", -123, -115, 41, 46, 0);
    view.defPosition("a6", -82, -115, 41, 46, 0);
    view.defPosition("b6", -41, -115, 41, 46, 0);
    view.defPosition("c6", 0, -115, 41, 46, 0);
    view.defPosition("d6", 41, -115, 41, 46, 0);
    view.defPosition("e6", 82, -115, 41, 46, 0);
    view.defPosition("J6", 123, -115, 41, 46, 0);
    view.defPosition("Z6", 164, -115, 41, 46, 0);
    view.defPosition("T6", 205, -115, 41, 46, 0);
    view.defPosition("X5", -205, -69, 41, 46, 0);
    view.defPosition("Y5", -164, -69, 41, 46, 0);
    view.defPosition("I5", -123, -69, 41, 46, 0);
    view.defPosition("a5", -82, -69, 41, 46, 0);
    view.defPosition("b5", -41, -69, 41, 46, 0);
    view.defPosition("c5", 0, -69, 41, 46, 0);
    view.defPosition("d5", 41, -69, 41, 46, 0);
    view.defPosition("e5", 82, -69, 41, 46, 0);
    view.defPosition("J5", 123, -69, 41, 46, 0);
    view.defPosition("Z5", 164, -69, 41, 46, 0);
    view.defPosition("T5", 205, -69, 41, 46, 0);
    view.defPosition("X4", -205, -23, 41, 46, 0);
    view.defPosition("Y4", -164, -23, 41, 46, 0);
    view.defPosition("I4", -123, -23, 41, 46, 0);
    view.defPosition("a4", -82, -23, 41, 46, 0);
    view.defPosition("b4", -41, -23, 41, 46, 0);
    view.defPosition("c4", 0, -23, 41, 46, 0);
    view.defPosition("d4", 41, -23, 41, 46, 0);
    view.defPosition("e4", 82, -23, 41, 46, 0);
    view.defPosition("J4", 123, -23, 41, 46, 0);
    view.defPosition("Z4", 164, -23, 41, 46, 0);
    view.defPosition("T4", 205, -23, 41, 46, 0);
    view.defPosition("X3", -205, 23, 41, 46, 0);
    view.defPosition("Y3", -164, 23, 41, 46, 0);
    view.defPosition("I3", -123, 23, 41, 46, 0);
    view.defPosition("a3", -82, 23, 41, 46, 0);
    view.defPosition("b3", -41, 23, 41, 46, 0);
    view.defPosition("c3", 0, 23, 41, 46, 0);
    view.defPosition("d3", 41, 23, 41, 46, 0);
    view.defPosition("e3", 82, 23, 41, 46, 0);
    view.defPosition("J3", 123, 23, 41, 46, 0);
    view.defPosition("Z3", 164, 23, 41, 46, 0);
    view.defPosition("T3", 205, 23, 41, 46, 0);
    view.defPosition("X2", -205, 69, 41, 46, 0);
    view.defPosition("Y2", -164, 69, 41, 46, 0);
    view.defPosition("I2", -123, 69, 41, 46, 0);
    view.defPosition("a2", -82, 69, 41, 46, 0);
    view.defPosition("b2", -41, 69, 41, 46, 0);
    view.defPosition("c2", 0, 69, 41, 46, 0);
    view.defPosition("d2", 41, 69, 41, 46, 0);
    view.defPosition("e2", 82, 69, 41, 46, 0);
    view.defPosition("J2", 123, 69, 41, 46, 0);
    view.defPosition("Z2", 164, 69, 41, 46, 0);
    view.defPosition("T2", 205, 69, 41, 46, 0);
    view.defPosition("X1", -205, 115, 41, 46, 0);
    view.defPosition("Y1", -164, 115, 41, 46, 0);
    view.defPosition("I1", -123, 115, 41, 46, 0);
    view.defPosition("a1", -82, 115, 41, 46, 0);
    view.defPosition("b1", -41, 115, 41, 46, 0);
    view.defPosition("c1", 0, 115, 41, 46, 0);
    view.defPosition("d1", 41, 115, 41, 46, 0);
    view.defPosition("e1", 82, 115, 41, 46, 0);
    view.defPosition("J1", 123, 115, 41, 46, 0);
    view.defPosition("Z1", 164, 115, 41, 46, 0);
    view.defPosition("T1", 205, 115, 41, 46, 0);
}
