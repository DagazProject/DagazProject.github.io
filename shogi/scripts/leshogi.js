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

Dagaz.AI.pieceAdj = [
[    0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,
     0,     0,     0,     0,
     0,     0,     0,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // piecePawn
     0,     0,     0,     0,
    20,    40,    40,    20,
    15,    30,    30,    15,
    10,    20,    20,    10,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceKnight
     0,     0,     0,     0,
     5,    30,    30,     5,
    10,    20,    20,    10,
     0,    10,    10,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceSilver
     0,    10,    10,     0,
    10,    30,    30,    10,
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // piecePawnP
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     5,     5,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceKnightP
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     5,     5,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceSilverP
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     5,     5,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceLanceP
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     5,     5,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceGold
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     5,     5,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceLance
     0,     0,     0,     0,
     5,    10,    10,     5,
    10,    30,    30,    10,
    20,    40,    40,    20,
    30,    50,    50,    30
],
[    0,     0,     0,     0, // pieceBishop
     0,    10,    10,     0,
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceRook
    10,    20,    20,    10,
    20,    30,    30,    20,
    20,    30,    30,    20,
    10,    40,    40,    10,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceBishopP
     5,    15,    15,     5,
    10,    30,    30,    10,
     0,    20,    20,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
],
[    0,     0,     0,     0, // pieceRookP
    15,    25,    25,    15,
    20,    60,    60,    20,
    25,    35,    35,    25,
    10,    40,    40,    10,
     0,     0,     0,     0
],
[   10,    50,    50,    10, // pieceKing
    15,    30,    30,    10,
     0,     0,     0,     0,
     0,    10,    10,     0,
    10,    20,    20,    10,
     5,    30,    30,     5
]];

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("promote-dialog", "remap");

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
    design.addPosition("W1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("W2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

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
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthSilverP", "South SilverP");
    view.defPiece("NorthSilverP", "North SilverP");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthKnightP", "South KnightP");
    view.defPiece("NorthKnightP", "North KnightP");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
    view.defPiece("SouthLanceP", "South LanceP");
    view.defPiece("NorthLanceP", "North LanceP");
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
 
    view.defPosition("X6", 9, 15, 41, 46);
    view.defPosition("Y6", 50, 15, 41, 46);
    view.defPosition("I6", 91, 15, 41, 46);
    view.defPosition("a6", 132, 15, 41, 46);
    view.defPosition("b6", 173, 15, 41, 46);
    view.defPosition("c6", 214, 15, 41, 46);
    view.defPosition("d6", 255, 15, 41, 46);
    view.defPosition("J6", 296, 15, 41, 46);
    view.defPosition("Z6", 337, 15, 41, 46);
    view.defPosition("T6", 378, 15, 41, 46);
    view.defPosition("X5", 9, 61, 41, 46);
    view.defPosition("Y5", 50, 61, 41, 46);
    view.defPosition("I5", 91, 61, 41, 46);
    view.defPosition("a5", 132, 61, 41, 46);
    view.defPosition("b5", 173, 61, 41, 46);
    view.defPosition("c5", 214, 61, 41, 46);
    view.defPosition("d5", 255, 61, 41, 46);
    view.defPosition("J5", 296, 61, 41, 46);
    view.defPosition("Z5", 337, 61, 41, 46);
    view.defPosition("T5", 378, 61, 41, 46);
    view.defPosition("X4", 9, 107, 41, 46);
    view.defPosition("Y4", 50, 107, 41, 46);
    view.defPosition("I4", 91, 107, 41, 46);
    view.defPosition("a4", 132, 107, 41, 46);
    view.defPosition("b4", 173, 107, 41, 46);
    view.defPosition("c4", 214, 107, 41, 46);
    view.defPosition("d4", 255, 107, 41, 46);
    view.defPosition("J4", 296, 107, 41, 46);
    view.defPosition("Z4", 337, 107, 41, 46);
    view.defPosition("T4", 378, 107, 41, 46);
    view.defPosition("X3", 9, 153, 41, 46);
    view.defPosition("Y3", 50, 153, 41, 46);
    view.defPosition("I3", 91, 153, 41, 46);
    view.defPosition("a3", 132, 153, 41, 46);
    view.defPosition("b3", 173, 153, 41, 46);
    view.defPosition("c3", 214, 153, 41, 46);
    view.defPosition("d3", 255, 153, 41, 46);
    view.defPosition("J3", 296, 153, 41, 46);
    view.defPosition("Z3", 337, 153, 41, 46);
    view.defPosition("T3", 378, 153, 41, 46);
    view.defPosition("X2", 9, 199, 41, 46);
    view.defPosition("Y2", 50, 199, 41, 46);
    view.defPosition("I2", 91, 199, 41, 46);
    view.defPosition("a2", 132, 199, 41, 46);
    view.defPosition("b2", 173, 199, 41, 46);
    view.defPosition("c2", 214, 199, 41, 46);
    view.defPosition("d2", 255, 199, 41, 46);
    view.defPosition("J2", 296, 199, 41, 46);
    view.defPosition("Z2", 337, 199, 41, 46);
    view.defPosition("T2", 378, 199, 41, 46);
    view.defPosition("X1", 9, 245, 41, 46);
    view.defPosition("Y1", 50, 245, 41, 46);
    view.defPosition("I1", 91, 245, 41, 46);
    view.defPosition("a1", 132, 245, 41, 46);
    view.defPosition("b1", 173, 245, 41, 46);
    view.defPosition("c1", 214, 245, 41, 46);
    view.defPosition("d1", 255, 245, 41, 46);
    view.defPosition("J1", 296, 245, 41, 46);
    view.defPosition("Z1", 337, 245, 41, 46);
    view.defPosition("T1", 378, 245, 41, 46);

    view.defPopup("Promote", 162, 50);
    view.defPopupPosition("W1", 12, 15, 39, 39);
    view.defPopupPosition("W2", 52, 15, 39, 39);
}
