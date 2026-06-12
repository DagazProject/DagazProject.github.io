Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  1.8;
Dagaz.Controller.persistense = "setup";

Dagaz.AI.WORKER_NAME         = 'scripts/leshogi-worker.js';
Dagaz.AI.WORKER_TIME         = 3000;
Dagaz.AI.ADVISOR_TIME        = 10000;

Dagaz.Model.WIDTH         = 4;
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

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("nx"); // 7
    design.addDirection("n");  // 8
    design.addDirection("sr"); // 9
    design.addDirection("nr"); // 10

    design.addPlayer("South", [6, 8, 5, 4, 3, 2, 0, 7, 1, 9, 10]);
    design.addPlayer("North", [6, 8, 5, 4, 3, 2, 0, 7, 1, 10, 9]);

    design.addPosition("X6", [11, 10, 0, 1, 0, 0, 0, 0, 0, 0, 11]);
    design.addPosition("Y6", [0, 10, 9, 0, -1, 0, 0, 0, 0, 0, -1]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [11, 10, 0, 1, 0, 0, 0, 51, 0, 55, -2]);
    design.addPosition("b6", [11, 10, 9, 1, -1, 0, 0, 51, 0, 54, -3]);
    design.addPosition("c6", [11, 10, 9, 1, -1, 0, 0, 51, 0, 53, -4]);
    design.addPosition("d6", [0, 10, 9, 0, -1, 0, 0, 0, 0, 52, -5]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z6", [11, 10, 0, 1, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("T6", [0, 10, 9, 0, -1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [11, 10, 0, 1, 0, -9, 0, -10, -10, 0, 11]);
    design.addPosition("Y5", [0, 10, 9, 0, -1, 0, -11, -10, -10, 0, -1]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [11, 10, 0, 1, 0, -9, 0, -10, -10, 45, -12]);
    design.addPosition("b5", [11, 10, 9, 1, -1, -9, -11, -10, -10, 44, -13]);
    design.addPosition("c5", [11, 10, 9, 1, -1, -9, -11, -10, -10, 43, -14]);
    design.addPosition("d5", [0, 10, 9, 0, -1, 0, -11, -10, -10, 42, -15]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z5", [11, 10, 0, 1, 0, -9, 0, -10, -10, 1, 0]);
    design.addPosition("T5", [0, 10, 9, 0, -1, 0, -11, -10, -10, -11, 0]);
    design.addPosition("X4", [11, 10, 0, 1, 0, -9, 0, -10, -10, 0, 11]);
    design.addPosition("Y4", [0, 10, 9, 0, -1, 0, -11, -10, -10, 0, -1]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [11, 10, 0, 1, 0, -9, 0, -10, -10, 35, -22]);
    design.addPosition("b4", [11, 10, 9, 1, -1, -9, -11, -10, -10, 34, -23]);
    design.addPosition("c4", [11, 10, 9, 1, -1, -9, -11, -10, -10, 33, -24]);
    design.addPosition("d4", [0, 10, 9, 0, -1, 0, -11, -10, -10, 32, -25]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z4", [11, 10, 0, 1, 0, -9, 0, -10, -10, 1, 0]);
    design.addPosition("T4", [0, 10, 9, 0, -1, 0, -11, -10, -10, -11, 0]);
    design.addPosition("X3", [11, 10, 0, 1, 0, -9, 0, -10, -10, 0, 11]);
    design.addPosition("Y3", [0, 10, 9, 0, -1, 0, -11, -10, -10, 0, -1]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [11, 10, 0, 1, 0, -9, 0, -10, -10, 25, -32]);
    design.addPosition("b3", [11, 10, 9, 1, -1, -9, -11, -10, -10, 24, -33]);
    design.addPosition("c3", [11, 10, 9, 1, -1, -9, -11, -10, -10, 23, -34]);
    design.addPosition("d3", [0, 10, 9, 0, -1, 0, -11, -10, -10, 22, -35]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z3", [11, 10, 0, 1, 0, -9, 0, -10, -10, 1, 0]);
    design.addPosition("T3", [0, 10, 9, 0, -1, 0, -11, -10, -10, -11, 0]);
    design.addPosition("X2", [11, 10, 0, 1, 0, -9, 0, -10, -10, 0, 11]);
    design.addPosition("Y2", [0, 10, 9, 0, -1, 0, -11, -10, -10, 0, -1]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [11, 10, 0, 1, 0, -9, 0, -10, -10, 15, -42]);
    design.addPosition("b2", [11, 10, 9, 1, -1, -9, -11, -10, -10, 14, -43]);
    design.addPosition("c2", [11, 10, 9, 1, -1, -9, -11, -10, -10, 13, -44]);
    design.addPosition("d2", [0, 10, 9, 0, -1, 0, -11, -10, -10, 12, -45]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z2", [11, 10, 0, 1, 0, -9, 0, -10, -10, 1, 0]);
    design.addPosition("T2", [0, 10, 9, 0, -1, 0, -11, -10, -10, -11, 0]);
    design.addPosition("X1", [0, 0, 0, 1, 0, -9, 0, -10, -10, 0, 0]);
    design.addPosition("Y1", [0, 0, 0, 0, -1, 0, -11, -10, -10, 0, -1]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -9, 0, -10, -10, 5, -52]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -9, -11, -10, -10, 4, -53]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -9, -11, -10, -10, 3, -54]);
    design.addPosition("d1", [0, 0, 0, 0, -1, 0, -11, -10, -10, 2, -55]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("Z1", [0, 0, 0, 1, 0, -9, 0, -10, -10, 1, 0]);
    design.addPosition("T1", [0, 0, 0, 0, -1, 0, -11, -10, -10, -11, 0]);

    design.addZone("board-zone", 1, [53, 54, 55, 56, 43, 44, 45, 46, 33, 34, 35, 36, 23, 24, 25, 26, 13, 14, 15, 16, 3, 4, 5, 6]);
    design.addZone("board-zone", 2, [53, 54, 55, 56, 43, 44, 45, 46, 33, 34, 35, 36, 23, 24, 25, 26, 13, 14, 15, 16, 3, 4, 5, 6]);
    design.addZone("promotion-zone", 1, [3, 4, 5, 6, 13, 14, 15, 16]);
    design.addZone("promotion-zone", 2, [53, 54, 55, 56, 43, 44, 45, 46]);
    design.addZone("goal-zone", 1, [3, 4, 5, 6]);
    design.addZone("goal-zone", 2, [53, 54, 55, 56]);

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
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 100);
    design.addMove(0, 0, [8], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);

    design.addPiece("Gold", 1, 6);
    design.addMove(1, 0, [8], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 1, [53, 7], 0);

    design.addPiece("Silver", 2, 5);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [8], 0);
    design.addMove(2, 1, [53, 7], 0);

    design.addPiece("SilverP", 3, 6);
    design.addMove(3, 0, [8], 0);
    design.addMove(3, 0, [6], 0);
    design.addMove(3, 0, [1], 0);
    design.addMove(3, 0, [5], 0);
    design.addMove(3, 0, [4], 0);
    design.addMove(3, 0, [3], 0);

    design.addPiece("Knight", 4, 2);
    design.addMove(4, 2, [8, 6], 0);
    design.addMove(4, 2, [8, 5], 0);
    design.addMove(4, 1, [53, 7], 0);

    design.addPiece("KnightP", 5, 6);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 0, [6], 0);
    design.addMove(5, 0, [1], 0);
    design.addMove(5, 0, [5], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 0, [3], 0);

    design.addPiece("Lance", 6, 5);
    design.addMove(6, 3, [8, 8], 0);
    design.addMove(6, 1, [53, 7], 0);

    design.addPiece("LanceP", 7, 6);
    design.addMove(7, 0, [8], 0);
    design.addMove(7, 0, [6], 0);
    design.addMove(7, 0, [1], 0);
    design.addMove(7, 0, [5], 0);
    design.addMove(7, 0, [4], 0);
    design.addMove(7, 0, [3], 0);

    design.addPiece("Bishop", 8, 10);
    design.addMove(8, 3, [6, 6], 0);
    design.addMove(8, 3, [0, 0], 0);
    design.addMove(8, 3, [2, 2], 0);
    design.addMove(8, 3, [5, 5], 0);
    design.addMove(8, 1, [53, 7], 0);

    design.addPiece("BishopP", 9, 11);
    design.addMove(9, 3, [6, 6], 0);
    design.addMove(9, 0, [8], 0);
    design.addMove(9, 3, [0, 0], 0);
    design.addMove(9, 0, [1], 0);
    design.addMove(9, 3, [2, 2], 0);
    design.addMove(9, 0, [4], 0);
    design.addMove(9, 3, [5, 5], 0);
    design.addMove(9, 0, [3], 0);

    design.addPiece("Rook", 10, 15);
    design.addMove(10, 3, [8, 8], 0);
    design.addMove(10, 3, [3, 3], 0);
    design.addMove(10, 3, [4, 4], 0);
    design.addMove(10, 3, [1, 1], 0);
    design.addMove(10, 1, [53, 7], 0);

    design.addPiece("RookP", 11, 16);
    design.addMove(11, 3, [8, 8], 0);
    design.addMove(11, 0, [6], 0);
    design.addMove(11, 3, [3, 3], 0);
    design.addMove(11, 0, [5], 0);
    design.addMove(11, 3, [4, 4], 0);
    design.addMove(11, 0, [2], 0);
    design.addMove(11, 3, [1, 1], 0);
    design.addMove(11, 0, [0], 0);

    design.addPiece("Pawn", 12, 1);
    design.addMove(12, 0, [8], 0);
    design.addMove(12, 1, [53, 7], 0);

    design.addPiece("PawnP", 13, 6);
    design.addMove(13, 0, [8], 0);
    design.addMove(13, 0, [6], 0);
    design.addMove(13, 0, [1], 0);
    design.addMove(13, 0, [5], 0);
    design.addMove(13, 0, [4], 0);
    design.addMove(13, 0, [3], 0);

    design.setup("South", "King", 55);
    design.setup("South", "Pawn", 46);
    design.setup("South", "Gold", 54);
    design.setup("South", "Lance", 53);
    design.setup("South", "Knight", 43);
    design.setup("South", "Silver", 56);
    design.setup("South", "Bishop", 44);
    design.setup("South", "Rook", 45);
    design.setup("North", "King", 4);
    design.setup("North", "Pawn", 13);
    design.setup("North", "Gold", 5);
    design.setup("North", "Lance", 6);
    design.setup("North", "Knight", 16);
    design.setup("North", "Silver", 3);
    design.setup("North", "Bishop", 15);
    design.setup("North", "Rook", 14);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(183, 295, 1, -5, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    view.defPieceShogi(0, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing", 1, Math.PI);
    view.defPieceShogi(0, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKing", 1);
    view.defPieceShogi(1, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold", 1, Math.PI);
    view.defPieceShogi(1, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthGold", 1);
    view.defPieceShogi(2, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver", 1, Math.PI);
    view.defPieceShogi(2, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilver", 1);
    view.defPieceShogi(3, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilverP", 1, Math.PI);
    view.defPieceShogi(3, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthSilverP", 1);
    view.defPieceShogi(4, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnight", 1, Math.PI);
    view.defPieceShogi(4, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnight", 1);
    view.defPieceShogi(5, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnightP", 1, Math.PI);
    view.defPieceShogi(5, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthKnightP", 1);
    view.defPieceShogi(6, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLance", 1, Math.PI);
    view.defPieceShogi(6, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLance", 1);
    view.defPieceShogi(7, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLanceP", 1, Math.PI);
    view.defPieceShogi(7, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthLanceP", 1);
    view.defPieceShogi(8, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop", 1, Math.PI);
    view.defPieceShogi(8, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishop", 1);
    view.defPieceShogi(9, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishopP", 1, Math.PI);
    view.defPieceShogi(9, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthBishopP", 1);
    view.defPieceShogi(10, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook", 1, Math.PI);
    view.defPieceShogi(10, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRook", 1);
    view.defPieceShogi(11, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRookP", 1, Math.PI);
    view.defPieceShogi(11, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthRookP", 1);
    view.defPieceShogi(12, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn", 1, Math.PI);
    view.defPieceShogi(12, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawn", 1);
    view.defPieceShogi(13, 1, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawnP", 1, Math.PI);
    view.defPieceShogi(13, 2, 39, 39, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "SouthPawnP", 1);

    view.defSubMenu(2, "Promote", -7, -8);
    view.defSubMenuControl(2, "Silver", "Silver", true, Dagaz.Controller.menuItem, 2);
    view.defSubMenuControl(2, "SilverP", "Gold", true, Dagaz.Controller.menuItem, 3);

    view.defSubMenu(4, "Promote", -7, -8);
    view.defSubMenuControl(4, "Knight", "Knight", true, Dagaz.Controller.menuItem, 4);
    view.defSubMenuControl(4, "KnightP", "Gold", true, Dagaz.Controller.menuItem, 5);

    view.defSubMenu(6, "Promote", -7, -8);
    view.defSubMenuControl(6, "Lance", "Lance", true, Dagaz.Controller.menuItem, 6);
    view.defSubMenuControl(6, "LanceP", "Gold", true, Dagaz.Controller.menuItem, 7);

    view.defSubMenu(8, "Promote", -7, -8);
    view.defSubMenuControl(8, "Bishop", "Bishop", true, Dagaz.Controller.menuItem, 8);
    view.defSubMenuControl(8, "BishopP", "Horse", true, Dagaz.Controller.menuItem, 9);
 
    view.defSubMenu(10, "Promote", -7, -8);
    view.defSubMenuControl(10, "Rook", "Rook", true, Dagaz.Controller.menuItem, 10);
    view.defSubMenuControl(10, "RookP", "Dragon", true, Dagaz.Controller.menuItem, 11);

    view.defSubMenu(12, "Promote", -7, -8);
    view.defSubMenuControl(12, "Pawn", "Pawn", true, Dagaz.Controller.menuItem, 12);
    view.defSubMenuControl(12, "PawnP", "Tokin", true, Dagaz.Controller.menuItem, 13);

    view.setCamera(0, 0, 0, -96, 170, 210);

    view.defControl("InfoControl", "2009 Yamamoto Mitsuo", true);
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'leshogi.htm' : 'leshogi-board.htm');
    view.defControl(Dagaz.AI.ON ? ["AiOnControl", "AiLightControl", "AiAlertControl"] : ["AiOffControl", "AiOffControl", "AiOffControl"], Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'leshogi-3d-board.htm' : 'leshogi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move{move}", false, Dagaz.Controller.redo);

    view.defPosition("X6", -184, -115, 41, 46, 0);
    view.defPosition("Y6", -143, -115, 41, 46, 0);
    view.defPosition("I6", -102, -115, 41, 46, 0);
    view.defPosition("a6", -61, -115, 41, 46, 0);
    view.defPosition("b6", -20, -115, 41, 46, 0);
    view.defPosition("c6", 21, -115, 41, 46, 0);
    view.defPosition("d6", 62, -115, 41, 46, 0);
    view.defPosition("J6", 103, -115, 41, 46, 0);
    view.defPosition("Z6", 144, -115, 41, 46, 0);
    view.defPosition("T6", 185, -115, 41, 46, 0);
    view.defPosition("X5", -184, -69, 41, 46, 0);
    view.defPosition("Y5", -143, -69, 41, 46, 0);
    view.defPosition("I5", -102, -69, 41, 46, 0);
    view.defPosition("a5", -61, -69, 41, 46, 0);
    view.defPosition("b5", -20, -69, 41, 46, 0);
    view.defPosition("c5", 21, -69, 41, 46, 0);
    view.defPosition("d5", 62, -69, 41, 46, 0);
    view.defPosition("J5", 103, -69, 41, 46, 0);
    view.defPosition("Z5", 144, -69, 41, 46, 0);
    view.defPosition("T5", 185, -69, 41, 46, 0);
    view.defPosition("X4", -184, -23, 41, 46, 0);
    view.defPosition("Y4", -143, -23, 41, 46, 0);
    view.defPosition("I4", -102, -23, 41, 46, 0);
    view.defPosition("a4", -61, -23, 41, 46, 0);
    view.defPosition("b4", -20, -23, 41, 46, 0);
    view.defPosition("c4", 21, -23, 41, 46, 0);
    view.defPosition("d4", 62, -23, 41, 46, 0);
    view.defPosition("J4", 103, -23, 41, 46, 0);
    view.defPosition("Z4", 144, -23, 41, 46, 0);
    view.defPosition("T4", 185, -23, 41, 46, 0);
    view.defPosition("X3", -184, 23, 41, 46, 0);
    view.defPosition("Y3", -143, 23, 41, 46, 0);
    view.defPosition("I3", -102, 23, 41, 46, 0);
    view.defPosition("a3", -61, 23, 41, 46, 0);
    view.defPosition("b3", -20, 23, 41, 46, 0);
    view.defPosition("c3", 21, 23, 41, 46, 0);
    view.defPosition("d3", 62, 23, 41, 46, 0);
    view.defPosition("J3", 103, 23, 41, 46, 0);
    view.defPosition("Z3", 144, 23, 41, 46, 0);
    view.defPosition("T3", 185, 23, 41, 46, 0);
    view.defPosition("X2", -184, 69, 41, 46, 0);
    view.defPosition("Y2", -143, 69, 41, 46, 0);
    view.defPosition("I2", -102, 69, 41, 46, 0);
    view.defPosition("a2", -61, 69, 41, 46, 0);
    view.defPosition("b2", -20, 69, 41, 46, 0);
    view.defPosition("c2", 21, 69, 41, 46, 0);
    view.defPosition("d2", 62, 69, 41, 46, 0);
    view.defPosition("J2", 103, 69, 41, 46, 0);
    view.defPosition("Z2", 144, 69, 41, 46, 0);
    view.defPosition("T2", 185, 69, 41, 46, 0);
    view.defPosition("X1", -184, 115, 41, 46, 0);
    view.defPosition("Y1", -143, 115, 41, 46, 0);
    view.defPosition("I1", -102, 115, 41, 46, 0);
    view.defPosition("a1", -61, 115, 41, 46, 0);
    view.defPosition("b1", -20, 115, 41, 46, 0);
    view.defPosition("c1", 21, 115, 41, 46, 0);
    view.defPosition("d1", 62, 115, 41, 46, 0);
    view.defPosition("J1", 103, 115, 41, 46, 0);
    view.defPosition("Z1", 144, 115, 41, 46, 0);
    view.defPosition("T1", 185, 115, 41, 46, 0);
}
